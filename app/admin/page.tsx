import { Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import ApplicationTable from './ApplicationTable'

export const dynamic = 'force-dynamic'

function dbFailureHint(err: unknown): string {
  if (err instanceof Prisma.PrismaClientInitializationError) {
    return 'DATABASE_URL tanımlı değil veya bağlantı dizesi hatalı (Vercel ortam değişkenlerini kontrol edin).'
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P1001') {
      return 'Veritabanı sunucusuna ulaşılamıyor. Yerelde: önce `docker compose up -d postgres` çalıştırın; .env içindeki DATABASE_URL localhost:5432 ile uyumlu olsun.'
    }
    if (err.code === 'P2021' || err.message.includes('does not exist')) {
      return 'Tablolar henüz oluşturulmamış. Üretim veritabanında bir kez: `npx prisma migrate deploy` (ortamda prod DATABASE_URL iken). Yerelde: aynı komut veya `npm run docker:db` sonrası migrate.'
    }
  }
  return 'PostgreSQL bağlantısı veya şema hatası. Loglarda ayrıntı var; migrate deploy ve DATABASE_URL değerlerini doğrulayın.'
}

export default async function AdminHomePage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  let applications: Awaited<ReturnType<typeof prisma.application.findMany>>
  try {
    applications = await prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch (err) {
    console.error('[admin] prisma.application.findMany', err)
    const hint = dbFailureHint(err)
    return (
      <main className="container mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-amber-100">
          <h1 className="text-xl font-semibold text-white mb-2">Veritabanı sorunu</h1>
          <p className="text-sm text-amber-100/90 mb-4">{hint}</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>
              Yerel: <code className="text-primary/90">npm run docker:db</code> →{' '}
              <code className="text-primary/90">npx prisma migrate deploy</code> →{' '}
              <code className="text-primary/90">npm run db:seed</code>
            </li>
            <li>
              Vercel (Neon vb.): bilgisayarınızda{' '}
              <code className="text-primary/90">DATABASE_URL=&quot;…&quot; npx prisma migrate deploy</code> ve gerekirse{' '}
              <code className="text-primary/90">db:seed</code>
            </li>
          </ul>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Demo başvuruları</h1>
        <p className="text-gray-400">
          Oturum: <span className="text-gray-300">{session.user.email}</span>
        </p>
      </div>
      <ApplicationTable initial={applications} />
    </main>
  )
}
