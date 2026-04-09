/**
 * Vercel build: migrate only when DATABASE_URL is present at build time.
 * Many projects only expose DATABASE_URL at runtime → migrate deploy was failing the whole build.
 */
import { execSync } from 'node:child_process'

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' })
}

if (process.env.DATABASE_URL?.trim()) {
  console.log('[vercel-build] DATABASE_URL is set → prisma migrate deploy')
  run('npx prisma migrate deploy')
} else {
  console.warn(
    '[vercel-build] DATABASE_URL missing at build time → skipping migrate deploy',
  )
  console.warn(
    '[vercel-build] Apply schema once: npx prisma migrate deploy (with prod DATABASE_URL), or enable DATABASE_URL for Build in Vercel.',
  )
}

run('npx prisma generate')
run('npx next build')
