import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = (process.env.ADMIN_EMAIL ?? 'admin@acentigo.com').toLowerCase().trim()
  const password = process.env.ADMIN_PASSWORD ?? 'degistir123'
  const passwordHash = await bcrypt.hash(password, 12)
  await prisma.user.upsert({
    where: { email },
    create: { email, passwordHash, name: 'Yönetici' },
    update: { passwordHash },
  })
  console.log('Admin kullanıcı hazır:', email)
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
