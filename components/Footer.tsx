import Link from 'next/link'
import Image from 'next/image'

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
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/acentigo-white-v2.png"
                alt="AcentiGo Logo"
                width={140}
                height={40}
                className="object-contain"
              />
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
                      className="text-sm text-gray-400 hover:text-[#F75700] transition-colors"
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
            <h3 className="font-semibold mb-4 text-white">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@acentigo.com" className="hover:text-[#F75700] transition-colors">
                  info@acentigo.com
                </a>
              </li>
              <li>
                <a href="tel:+905551234567" className="hover:text-[#F75700] transition-colors">
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

