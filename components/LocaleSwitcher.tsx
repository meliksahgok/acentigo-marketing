'use client'

import { useLocale } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { Link } from '@/i18n/navigation'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const other = locale === 'tr' ? 'en' : 'tr'

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <Link
        href={pathname}
        locale="tr"
        className={`px-2 py-1 rounded-md transition-colors ${locale === 'tr' ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white'}`}
        hrefLang="tr"
      >
        TR
      </Link>
      <span className="text-gray-600">|</span>
      <Link
        href={pathname}
        locale="en"
        className={`px-2 py-1 rounded-md transition-colors ${locale === 'en' ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white'}`}
        hrefLang="en"
      >
        EN
      </Link>
    </div>
  )
}
