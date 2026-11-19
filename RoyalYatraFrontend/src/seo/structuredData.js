import { supportEmail, supportWhatsAppNumber, supportWhatsAppUrl } from '../contactDetails.js'
import { canonicalUrl, siteLanguage, siteName } from './canonical.js'
import { getPageBreadcrumbs } from './seoLandingPages.js'
import { findTravelPage, packagesPath } from './travelPages.js'

const organization = { '@id': canonicalUrl('/#organization') }
const website = { '@id': canonicalUrl('/#website') }
const destinationTypes = new Set(['destination', 'region', 'state', 'city', 'india'])

export function getStructuredData(pathname, metadata) {
  if (!metadata.canonical) return undefined

  const page = findTravelPage(pathname)
  const url = canonicalUrl(pathname)
  const pageId = url + '#webpage'
  const webPage = {
    '@type': pathname === '/about' ? 'AboutPage' : pathname === '/contact' ? 'ContactPage' : 'WebPage',
    '@id': pageId,
    url,
    name: page?.title ?? metadata.title,
    description: metadata.description,
    primaryImageOfPage: { '@type': 'ImageObject', url: metadata.image },
    isPartOf: website,
    publisher: organization,
    inLanguage: siteLanguage,
  }
  const graph = [
    {
      '@type': ['Organization', 'TravelAgency'],
      ...organization,
      name: siteName,
      url: canonicalUrl('/'),
      logo: { '@type': 'ImageObject', url: canonicalUrl('/logo.png') },
      email: supportEmail,
      telephone: supportWhatsAppNumber.replaceAll(' ', ''),
      areaServed: { '@type': 'Country', name: 'India' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: supportWhatsAppUrl, availableLanguage: 'English' },
      sameAs: ['https://www.instagram.com/royalyatri1/'],
    },
    {
      '@type': 'WebSite',
      ...website,
      name: siteName,
      url: canonicalUrl('/'),
      publisher: organization,
      inLanguage: siteLanguage,
    },
    webPage,
  ]

  if (page) {
    const breadcrumbs = getPageBreadcrumbs(page, findTravelPage)
    const breadcrumbId = url + '#breadcrumb'
    webPage.breadcrumb = { '@id': breadcrumbId }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: breadcrumbs.map(({ label, path }, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: label,
        item: canonicalUrl(path),
      })),
    })

    const entity = {
      name: page.title,
      description: metadata.description,
      url,
      image: metadata.image,
    }
    if (destinationTypes.has(page.pageType) || page.path === '/india' || page.pageType === 'attraction') {
      graph.push({
        '@type': page.pageType === 'attraction' ? 'TouristAttraction' : 'TouristDestination',
        '@id': url + '#destination',
        ...entity,
        name: page.breadcrumbLabel ?? page.title,
      })
      webPage.mainEntity = { '@id': url + '#destination' }
    }
    if (page.pageType === 'tour') {
      graph.push({
        '@type': 'TouristTrip',
        '@id': url + '#trip',
        ...entity,
        provider: organization,
        itinerary: {
          '@type': 'ItemList',
          itemListElement: page.itinerary.map(([name, description], index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name,
            description,
          })),
        },
      })
      webPage.mainEntity = { '@id': url + '#trip' }
    }
    if (page.pageType === 'foreign') {
      graph.push({
        '@type': 'Service',
        '@id': url + '#travel-service',
        ...entity,
        provider: organization,
        areaServed: { '@type': 'Country', name: 'India' },
      })
      webPage.mainEntity = { '@id': url + '#travel-service' }
    }
    if (page.pageType === 'guide') {
      graph.push({
        '@type': 'Article',
        '@id': url + '#article',
        headline: page.title,
        description: metadata.description,
        image: metadata.image,
        mainEntityOfPage: { '@id': pageId },
        author: organization,
        publisher: organization,
        inLanguage: siteLanguage,
      })
      webPage.mainEntity = { '@id': url + '#article' }
    }
    if (page.path === packagesPath || page.pageType === 'directory') webPage['@type'] = 'CollectionPage'
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
