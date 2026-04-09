import { getTranslations } from 'next-intl/server'
import { organizationJsonLd, siteUrl } from '@/lib/site'

type Props = { locale: string }

export default async function JsonLd({ locale }: Props) {
  const t = await getTranslations({ locale: locale as 'en' | 'tr', namespace: 'jsonLd' })
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Acentigo',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: t('softwareDescription'),
    url: siteUrl,
    provider: { '@type': 'Organization', name: 'Acentigo', url: siteUrl },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'USD',
      description: 'Contact for enterprise pricing',
    },
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
    </>
  )
}
