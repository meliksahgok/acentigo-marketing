'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const ERROR_MESSAGES: Record<string, string> = {
  CredentialsSignin: 'E-posta veya şifre hatalı. Üretimde veritabanında admin kullanıcısı (seed) olduğundan emin olun.',
  Configuration: 'Sunucu yapılandırması eksik (NEXTAUTH_SECRET veya NEXTAUTH_URL).',
  AccessDenied: 'Erişim reddedildi.',
  Default: 'Giriş yapılamadı. Tekrar deneyin.',
}

export default function LoginForm() {
  const searchParams = useSearchParams()
  const rawCallback = searchParams.get('callbackUrl') ?? '/admin'
  const callbackUrl =
    rawCallback.startsWith('/') && !rawCallback.startsWith('//') ? rawCallback : '/admin'
  const urlError = searchParams.get('error')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (urlError) {
      setError(ERROR_MESSAGES[urlError] ?? ERROR_MESSAGES.Default)
    }
  }, [urlError])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const trimmedEmail = email.trim().toLowerCase()
    try {
      const res = await signIn('credentials', {
        email: trimmedEmail,
        password,
        callbackUrl,
        redirect: false,
      })
      setLoading(false)
      if (res?.error) {
        setError(ERROR_MESSAGES[res.error] ?? ERROR_MESSAGES.CredentialsSignin)
        return
      }
      if (res?.ok) {
        window.location.assign(res.url ?? callbackUrl)
        return
      }
      setError(ERROR_MESSAGES.Default)
    } catch {
      setLoading(false)
      setError('Bağlantı hatası. Sayfayı yenileyip tekrar deneyin.')
    }
  }

  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/50 p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-2">Yönetim girişi</h1>
        <p className="text-gray-400 text-sm mb-6">
          Demo başvurularını görüntülemek için oturum açın.
        </p>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed border border-white/5 rounded-lg p-3 bg-white/[0.02]">
          <strong className="text-gray-400">Yerel geliştirme:</strong> Önce{' '}
          <code className="text-primary/90">npx prisma db push</code> ve{' '}
          <code className="text-primary/90">npm run db:seed</code> çalıştırın. Varsayılan:{' '}
          <code className="text-gray-400">admin@acentigo.com</code> /{' '}
          <code className="text-gray-400">degistir123</code> (veya .env içindeki ADMIN_*).
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {error ? (
            <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
              {error}
            </p>
          ) : null}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            {loading ? 'Giriş…' : 'Giriş yap'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          <Link href="/" className="text-primary hover:underline">
            Ana sayfa
          </Link>
        </p>
      </div>
    </div>
  )
}
