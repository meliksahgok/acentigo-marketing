import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import ApplicationTable from './ApplicationTable'

export default async function AdminHomePage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: 'desc' },
  })
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
