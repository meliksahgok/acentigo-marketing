import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

const MAX_LEN = { name: 200, email: 320, phone: 50, company: 200, message: 5000 }

function trim(s: unknown, max: number): string {
  if (typeof s !== 'string') return ''
  return s.trim().slice(0, max)
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const o = body as Record<string, unknown>
  const name = trim(o.name, MAX_LEN.name)
  const email = trim(o.email, MAX_LEN.email).toLowerCase()
  const phone = trim(o.phone, MAX_LEN.phone) || null
  const company = trim(o.company, MAX_LEN.company) || null
  const message = trim(o.message, MAX_LEN.message)
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: 'Please complete all required fields with a valid email.' }, { status: 400 })
  }
  const row = await prisma.application.create({
    data: { name, email, phone, company, message },
  })
  return NextResponse.json({ ok: true, id: row.id })
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })
  }
  const list = await prisma.application.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(list)
}
