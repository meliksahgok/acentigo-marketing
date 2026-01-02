export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="container mx-auto px-5 max-w-6xl">
        <p>&copy; {currentYear} AcentiGo. Tüm hakları saklıdır.</p>
        <p className="mt-3 text-sm opacity-80">
          <a href="https://app.acentigo.com" className="text-white underline hover:no-underline">
            Yönetim Paneli
          </a>
          {' | '}
          <a href="https://app.acentigo.com/saas" className="text-white underline hover:no-underline">
            SaaS Admin
          </a>
        </p>
      </div>
    </footer>
  )
}

