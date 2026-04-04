import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

const STATUSES = ['NEW', 'CONTACTED', 'CLOSED'] as const
type AppStatus = (typeof STATUSES)[number]

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })
  }
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 })
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 })
  }
  const status = (body as { status?: string }).status
  if (!status || !STATUSES.includes(status as AppStatus)) {
    return NextResponse.json({ error: 'Geçersiz durum' }, { status: 400 })
  }
  try {
    const row = await prisma.application.update({
      where: { id: params.id },
      data: { status },
    })
    return NextResponse.json(row)
  } catch {
    return NextResponse.json({ error: 'Kayıt bulunamadı' }, { status: 404 })
  }
}
