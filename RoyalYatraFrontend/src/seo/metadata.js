import { canonicalUrl, siteName } from './canonical.js'
import { findTravelPage } from './travelPages.js'

const sitePages = {
  '/': {
    title: 'India Tour Packages & Custom Holidays',
    description: 'Plan India tours with Royal Yatri. Explore Golden Triangle itineraries, private and luxury tours, family holidays, and tailor-made trips for visitors to India.',
  },
  '/about': {
    title: 'About Royal Yatri, India Travel Planner',
    description: 'Learn how our travel team plans tailor-made India tours, from private transfers and local guides to flexible itineraries for families and international visitors.',
  },
  '/contact': {
    title: 'Contact Royal Yatri for an India Tour Quote',
    description: 'Talk to Royal Yatri about your India itinerary. Send an enquiry, email the travel team, or message us on WhatsApp to discuss dates, routes and group size.',
  },
  '/faq': {
    title: 'India Tour Planning FAQs',
    description: 'Find answers about booking India tours, tailoring an itinerary, choosing a private or group trip, and arranging hotels or local transport.',
  },
}

const defaultImage = '/images/seo/taj-mahal.jpg'
const defaultImageAlt = 'The Taj Mahal in Agra, India'

export function getMetadata(pathname) {
  const page = findTravelPage(pathname) ?? sitePages[pathname]
  if (!page) return {
    title: 'Page not found | ' + siteName,
    description: 'Find travel guides and India tour packages from Royal Yatri.',
    robots: 'noindex, follow',
  }

  const hasPageDetails = page.pageType === 'tour' ? page.itinerary?.length : page.highlights?.length
  const incompleteGuide = page.pageType && page.pageType !== 'directory' &&
    !(page.intro && page.heroImage && hasPageDetails && page.faqs?.length)
  const heroImage = page.heroImage ?? defaultImage
  const image = heroImage === '/amber-fort-hero.webp' ? '/images/seo/amber-fort-social.jpg' : heroImage

  return {
    title: page.title.includes(siteName) ? page.title : page.title + ' | ' + siteName,
    description: page.description,
    robots: page.published === false || incompleteGuide ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    canonical: canonicalUrl(page.canonicalPath ?? pathname),
    image: image.startsWith('/')
      ? canonicalUrl(image)
      : 'https://images.unsplash.com/' + image + '?auto=format&fit=crop&w=1200&q=85',
    imageAlt: page.heroAlt ?? defaultImageAlt,
  }
}
