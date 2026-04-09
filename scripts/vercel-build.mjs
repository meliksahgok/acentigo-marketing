/**
 * Vercel build: migrate only when DATABASE_URL is present at build time.
 * Many projects only expose DATABASE_URL at runtime → migrate deploy was failing the whole build.
 */
import { execSync } from 'node:child_process'

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' })
}

const hasDb = process.env.DATABASE_URL?.trim()
const hasDirect = process.env.DATABASE_URL_UNPOOLED?.trim()

if (hasDb && hasDirect) {
  console.log('[vercel-build] DATABASE_URL + DATABASE_URL_UNPOOLED set → prisma migrate deploy')
  run('npx prisma migrate deploy')
} else {
  if (hasDb && !hasDirect) {
    console.warn(
      '[vercel-build] DATABASE_URL_UNPOOLED eksik → migrate atlanıyor (Neon’da unpooled URL ekleyin veya Build env’de ikisini de açın).',
    )
  } else {
    console.warn(
      '[vercel-build] DATABASE_URL missing at build time → skipping prisma migrate deploy',
    )
  }
  console.warn(
    '[vercel-build] Şema: DATABASE_URL + DATABASE_URL_UNPOOLED ile: npx prisma migrate deploy',
  )
}

run('npx prisma generate')
run('npx next build')
