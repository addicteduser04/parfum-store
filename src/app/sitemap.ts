import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { collections } from '@/data/collections'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parfumhouse.ma'
  const locales = ['fr', 'ar']

  // Static pages
  const staticPages = [
    '',
    '/catalog',
    '/collections',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ]

  // Generate static pages for all locales
  const staticUrls = staticPages.flatMap(page =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  // Product pages
  const productUrls = products.flatMap(product =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}/product/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Collection pages
  const collectionUrls = collections.flatMap(collection =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}/collections/${collection.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [
    ...staticUrls,
    ...productUrls,
    ...collectionUrls,
  ]
}
