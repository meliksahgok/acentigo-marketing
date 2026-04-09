import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
  alternateLinks: true,
  pathnames: {
    '/': '/',
    '/features': {
      tr: '/ozellikler',
      en: '/features',
    },
    '/about': {
      tr: '/hakkimizda',
      en: '/about',
    },
    '/contact': {
      tr: '/iletisim',
      en: '/contact',
    },
    '/technology': {
      tr: '/teknolojimiz',
      en: '/technology',
    },
  },
})

export type Locale = (typeof routing.locales)[number]
