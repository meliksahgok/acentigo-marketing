import type { MetadataRoute } from 'next'
import { urls } from '@/lib/pageUrls'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const page of Object.values(urls)) {
    const isHomeTr = page.tr === urls.home.tr
    const isHomeEn = page.en === urls.home.en
    entries.push({
      url: page.tr,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: isHomeTr ? 1 : 0.85,
    })
    entries.push({
      url: page.en,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: isHomeEn ? 0.95 : 0.85,
    })
  }
  return entries
}
