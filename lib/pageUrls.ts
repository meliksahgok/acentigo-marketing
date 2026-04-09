import { siteUrl } from '@/lib/site'

/** Localized paths for hreflang / canonical (localePrefix: as-needed, default tr). */
export const urls = {
  home: { tr: `${siteUrl}/`, en: `${siteUrl}/en` },
  features: { tr: `${siteUrl}/ozellikler`, en: `${siteUrl}/en/features` },
  about: { tr: `${siteUrl}/hakkimizda`, en: `${siteUrl}/en/about` },
  contact: { tr: `${siteUrl}/iletisim`, en: `${siteUrl}/en/contact` },
  technology: { tr: `${siteUrl}/teknolojimiz`, en: `${siteUrl}/en/technology` },
} as const

export type PageKey = keyof typeof urls

export function pageAlternates(
  key: PageKey,
  locale: string,
): { canonical: string; languages: Record<string, string> } {
  const u = urls[key]
  return {
    canonical: locale === 'en' ? u.en : u.tr,
    languages: {
      'x-default': u.tr,
      tr: u.tr,
      en: u.en,
    },
  }
}
