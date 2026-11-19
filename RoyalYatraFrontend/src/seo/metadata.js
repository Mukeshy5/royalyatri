import { canonicalUrl } from './canonical.js'
import { findTravelPage } from './travelPages.js'

const sitePages = {
  '/': { title: 'Royal Yatra | India and international journeys', description: 'Explore destinations, compare India tour packages and plan a tailor-made trip with Royal Yatra.' },
  '/about': { title: 'About Royal Yatra', description: 'Meet Royal Yatra and learn how we plan travel around the destinations, pace and details that matter to you.' },
  '/contact': { title: 'Plan your trip', description: 'Share your travel dates, destinations and preferences with Royal Yatra.' },
  '/faq': { title: 'Travel FAQs', description: 'Find answers about Royal Yatra itineraries, enquiries and group travel.' },
}

export function getMetadata(pathname, siteUrl) {
  const page = findTravelPage(pathname) ?? sitePages[pathname]
  if (!page) return { title: 'Page not found | Royal Yatra', robots: 'noindex, follow' }

  const hasPageDetails = page.pageType === 'tour' ? page.itinerary?.length : page.highlights?.length
  const incompleteGuide = page.pageType && page.pageType !== 'directory' &&
    !(page.intro && page.heroImage && hasPageDetails && page.faqs?.length)

  return {
    title: pathname === '/' ? page.title : page.title + ' | Royal Yatra',
    description: page.description,
    robots: page.published === false || incompleteGuide ? 'noindex, follow' : undefined,
    canonical: canonicalUrl(page.canonicalPath ?? pathname, siteUrl),
    image: page.heroImage?.startsWith('/')
      ? canonicalUrl(page.heroImage, siteUrl)
      : page.heroImage
        ? 'https://images.unsplash.com/' + page.heroImage + '?auto=format&fit=crop&w=1200&q=85'
        : undefined,
  }
}
