import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/site'
import HtmlLang from '@/components/HtmlLang'
import JsonLd from '@/components/JsonLd'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const isEn = locale === 'en'
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: isEn ? 'Acentigo | Travel Agency & Tour Sales Software' : 'Acentigo | Acente ve Tur Satış Yazılımı',
      template: '%s',
    },
    icons: {
      icon: '/images/acentigo-favicon.png',
      shortcut: '/images/acentigo-favicon.png',
      apple: '/images/acentigo-favicon.png',
    },
    alternates: {
      canonical: isEn ? `${siteUrl}/en` : `${siteUrl}/`,
      languages: {
        'x-default': `${siteUrl}/`,
        tr: `${siteUrl}/`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Acentigo',
      url: siteUrl,
      locale: isEn ? 'en_US' : 'tr_TR',
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang />
      <JsonLd locale={locale} />
      {children}
    </NextIntlClientProvider>
  )
}
