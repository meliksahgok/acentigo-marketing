import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export const runtime = 'nodejs'

/**
 * İlk kurulum: veritabanında hiç kullanıcı yokken tek seferlik admin oluşturur.
 * Vercel'de bir kez çağırın, sonra ADMIN_SETUP_KEY'yi kaldırın.
 */
export async function POST(req: Request) {
  const setupKey = process.env.ADMIN_SETUP_KEY
  if (!setupKey) {
    return NextResponse.json({ error: 'Bootstrap kapalı (ADMIN_SETUP_KEY tanımlı değil).' }, { status: 403 })
  }

  let body: { key?: string; email?: string; password?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Geçersiz JSON' }, { status: 400 })
  }

  if (!body.key || body.key !== setupKey) {
    return NextResponse.json({ error: 'Geçersiz anahtar' }, { status: 401 })
  }

  const count = await prisma.user.count()
  if (count > 0) {
    return NextResponse.json({ error: 'Zaten kullanıcı var. Bu endpoint devre dışı.' }, { status: 409 })
  }

  const email = (body.email ?? process.env.ADMIN_EMAIL ?? 'admin@acentigo.com').toLowerCase().trim()
  const password = body.password ?? process.env.ADMIN_PASSWORD ?? 'degistir123'
  if (password.length < 8) {
    return NextResponse.json({ error: 'Şifre en az 8 karakter olmalı' }, { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 12)
  await prisma.user.create({
    data: { email, passwordHash, name: 'Admin' },
  })

  return NextResponse.json({ ok: true, email, note: 'ADMIN_SETUP_KEY ortam değişkenini silin ve güvenli şifre kullanın.' })
}
