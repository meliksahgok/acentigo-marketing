import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export default async function Footer() {
  const t = await getTranslations('footer')
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { href: '/features' as const, labelKey: 'features' },
    { href: '/technology' as const, labelKey: 'technology' },
    { href: '/about' as const, labelKey: 'about' },
  ] as const

  const nav = await getTranslations('nav')

  return (
    <footer className="bg-black text-white py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/acentigo-white-v2.png"
                alt="Acentigo"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-2">{t('tagline')}</p>
            <p className="text-gray-500 text-sm max-w-sm">{t('sub')}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">{t('product')}</h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {nav(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">{t('support')}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                  {nav('contact')}
                </Link>
              </li>
              <li>
                <a href="mailto:info@acentigo.com" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                  {t('email')}
                </a>
              </li>
              <li>
                <a href="tel:+905531440661" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                  +90 (553) 144 06 61
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Acentigo. {t('rights')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {t('terms')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {t('privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
