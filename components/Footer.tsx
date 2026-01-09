export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="container mx-auto px-5 max-w-6xl">
        <p className="text-sm opacity-90">&copy; {currentYear} AcentiGo. Tüm hakları saklıdır.</p>
        <p className="mt-2 text-xs opacity-70">
          Profesyonel Acente Tur Satış Sistemi
        </p>
      </div>
    </footer>
  )
}

