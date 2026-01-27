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
    <footer className="bg-black text-white py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/acentigo-white-v2.png"
                  alt="Acentigo Logo"
                  width={140}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Acenteniz için profesyonel tur satış sistemi.
              İşinizi dijitalleştirin, verimliliğinizi artırın ve büyütün.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders could go here */}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-6 text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Acentigo. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Kullanım Koşulları</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
