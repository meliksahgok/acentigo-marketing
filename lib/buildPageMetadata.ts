import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { pageAlternates, type PageKey } from '@/lib/pageUrls'
import { siteUrl } from '@/lib/site'

type MetaSection = 'home' | 'features' | 'about' | 'contact' | 'technology'

export async function buildPageMetadata(
  locale: string,
  pageKey: PageKey,
  metaSection: MetaSection,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const { canonical, languages } = pageAlternates(pageKey, locale)
  const title = t(`${metaSection}.title`)
  const description = t(`${metaSection}.description`)
  const keywords = t(`${metaSection}.keywords`)

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      siteName: 'Acentigo',
      url: canonical,
      title,
      description,
      locale: locale === 'en' ? 'en_US' : 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  }
}
