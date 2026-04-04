import { Suspense } from 'react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import LoginForm from './LoginForm'

export const dynamic = 'force-dynamic'

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/admin')
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-73px)] flex items-center justify-center text-gray-400">Yükleniyor…</div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
