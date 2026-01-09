import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    Ürün: [
      { href: '/ozellikler', label: 'Özellikler' },
      { href: '/hakkimizda', label: 'Hakkımızda' },
    ],
    Destek: [
      { href: '/iletisim', label: 'İletişim' },
      { href: 'mailto:info@acentigo.com', label: 'E-posta' },
    ],
  }
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#F75700] to-[#FF8C42] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AcentiGo</span>
            </div>
            <p className="text-sm text-gray-400">
              Profesyonel acente tur satış sistemi. İşinizi dijitalleştirin, büyütün.
            </p>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@acentigo.com" className="hover:text-white transition-colors">
                  info@acentigo.com
                </a>
              </li>
              <li>
                <a href="tel:+905551234567" className="hover:text-white transition-colors">
                  +90 (555) 123 45 67
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} AcentiGo. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

