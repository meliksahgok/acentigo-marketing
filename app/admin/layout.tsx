import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/admin" className="font-bold text-lg text-white">
            Acentigo <span className="text-primary font-normal">Yönetim</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Siteye dön
            </Link>
            <a
              href="/api/auth/signout?callbackUrl=/admin/login"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Çıkış
            </a>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}
