export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || 'https://acentigo.com').replace(/\/$/, '')

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Acentigo',
  url: siteUrl,
  logo: `${siteUrl}/images/acentigo-white-v2.png`,
  email: 'info@acentigo.com',
  telephone: '+90-553-144-06-61',
  sameAs: [] as string[],
}
