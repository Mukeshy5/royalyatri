import { canonicalUrl } from './canonical.js'
import { getPageBreadcrumbs } from './seoLandingPages.js'

export function getLandingStructuredData(page, siteUrl, findPage) {
  const pageUrl = canonicalUrl(page.canonicalPath ?? page.path, siteUrl)
  if (!pageUrl) return undefined

  const imageUrl = page.heroImage.startsWith('/')
    ? canonicalUrl(page.heroImage, siteUrl)
    : 'https://images.unsplash.com/' + page.heroImage + '?auto=format&fit=crop&w=1200&q=85'
  const breadcrumbs = getPageBreadcrumbs(page, findPage)
  const graph = [
    {
      '@type': 'WebPage',
      '@id': pageUrl + '#webpage',
      url: pageUrl,
      name: page.title,
      description: page.description,
      primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
      inLanguage: 'en',
    },
    ...(['destination', 'attraction', 'region', 'state', 'city'].includes(page.pageType) || page.path === '/india'
      ? [{
          '@type': page.pageType === 'attraction' ? 'TouristAttraction' : 'TouristDestination',
          '@id': pageUrl + '#place',
          name: page.breadcrumbLabel ?? page.title,
          description: page.description,
          image: imageUrl,
          url: pageUrl,
          ...(page.parentPath && findPage(page.parentPath)
            ? { containedInPlace: { '@type': 'TouristDestination', name: findPage(page.parentPath).title } }
            : {}),
        }]
      : []),
    ...(page.pageType === 'foreign'
      ? [{
          '@type': 'Service',
          '@id': pageUrl + '#travel-service',
          name: page.title,
          description: page.description,
          url: pageUrl,
          provider: { '@type': 'TravelAgency', name: 'Royal Yatra', url: canonicalUrl('/', siteUrl) },
          areaServed: { '@type': 'Country', name: 'India' },
        }]
      : []),
    ...(page.pageType === 'guide'
      ? [{
          '@type': 'Article',
          '@id': pageUrl + '#article',
          headline: page.title,
          description: page.description,
          image: imageUrl,
          mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          author: { '@type': 'Organization', name: 'Royal Yatra' },
          publisher: { '@type': 'Organization', name: 'Royal Yatra' },
          inLanguage: 'en',
        }]
      : []),
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.label,
        item: breadcrumb.path === page.path ? pageUrl : canonicalUrl(breadcrumb.path, siteUrl),
      })),
    },
  ]

  return { '@context': 'https://schema.org', '@graph': graph }
}
