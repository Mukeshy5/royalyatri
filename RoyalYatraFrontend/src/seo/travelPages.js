import {
  familyToursPath, luxuryToursPath, packagesPath, privateToursPath, priorityTourPackagePages, tourPackagePages,
} from './tourPackagePages.js'
import { featuredTourPackages } from './featuredTourPackages.js'
import { seoLandingPages } from './seoLandingPages.js'
import { destinationDirectoryPage, destinationPages, destinationRegionPath, destinationRegions } from './destinationDirectory.js'

export { packagesPath, privateToursPath, priorityTourPackagePages }
export const internationalPath = '/international-tours'
export const buddhistToursPath = '/buddhist-tours-in-india'
export const onlinePaymentPath = '/online-payment'

export const redirects = {
  ...Object.fromEntries(destinationRegions.map((region) => [
    destinationDirectoryPage.path + '/' + region.slug, destinationRegionPath(region),
  ])),
  '/destinations-in-india/uttar-pradesh/agra': '/destinations/agra',
  '/destinations-in-india/uttar-pradesh/agra/taj-mahal': '/destinations/agra/taj-mahal',
  '/destinations-in-india/uttar-pradesh/agra/agra-fort': '/destinations/agra/agra-fort',
  '/destinations-in-india/rajasthan/jaipur': '/destinations/jaipur',
  '/destinations-in-india/rajasthan/jaipur/amber-fort': '/destinations/jaipur/amber-fort',
  '/destinations-in-india/rajasthan/jaipur/city-palace': '/destinations/jaipur/city-palace',
  '/destinations-in-india/goa/north-goa': '/destinations/goa/north-goa',
  '/destinations-in-india/goa/south-goa': '/destinations/goa/south-goa',
  '/destinations-in-india/kerala/munnar': '/destinations/kerala/munnar',
  '/destinations-in-india/kerala/alleppey': '/destinations/kerala/alleppey',
  '/destinations': '/destinations-in-india',
  '/industries': '/india',
  '/enquire': '/contact',
  '/states/rajasthan': '/destinations-in-india/rajasthan',
  '/destinations/varanasi': '/destinations-in-india/uttar-pradesh/varanasi',
  '/tours': packagesPath,
  '/packages': packagesPath,
  '/packages/category/family': familyToursPath,
  '/packages/category/luxury': luxuryToursPath,
  '/honeymoon-packages-india': '/packages/category/honeymoon',
  '/budget-tour-packages-india': '/packages/category/budget',
}

const honeymoonCategory = { path: '/packages/category/honeymoon', title: 'Honeymoon packages', description: 'Plan a trip for two, from slow coastal days to evenings in Rajasthan?s palace cities.', links: [packagesPath] }
const budgetCategory = { path: '/packages/category/budget', title: 'Budget tour packages', description: 'Make your budget go further with nearby stops, simple stays and convenient rail connections.', links: [packagesPath] }

export const categories = [
  tourPackagePages.find(({ path }) => path === familyToursPath),
  honeymoonCategory,
  tourPackagePages.find(({ path }) => path === luxuryToursPath),
  budgetCategory,
]

const packageSeoPages = [
  {
    path: '/india-travel-packages',
    title: 'India travel packages',
    description: 'Compare India travel packages by destination, travel style and pace. Plan a tailored journey through India with local experiences, comfortable stays and time to explore.',
    links: [packagesPath, privateToursPath, '/india'],
  },
  {
    path: '/golden-triangle-tour-india',
    title: 'Golden Triangle tour in India',
    description: 'Plan a Golden Triangle tour in India through Delhi, Agra and Jaipur, with time for the Taj Mahal, historic neighbourhoods and Rajasthan’s forts.',
    links: ['/golden-triangle-tour', '/destinations/agra', '/destinations/jaipur', packagesPath],
  },
]

export const internationalDestinations = [
  { path: '/international-tours/thailand', title: 'Thailand', description: 'Begin in Bangkok?s markets and temples, then choose between northern Chiang Mai and the southern coast.' },
  { path: '/international-tours/nepal', title: 'Nepal', description: 'Pair Kathmandu Valley?s heritage sites with time by the lake in Pokhara.' },
  { path: '/international-tours/bhutan', title: 'Bhutan', description: 'Explore Paro, Thimphu and Punakha, with time for monasteries and Himalayan valleys.' },
  { path: '/international-tours/dubai', title: 'Dubai', description: 'Spend time in the souks around Dubai Creek, then explore downtown architecture or the desert beyond the city.' },
  { path: '/international-tours/singapore', title: 'Singapore', description: 'Plan days around hawker centres, heritage neighbourhoods and the waterfront at Marina Bay.' },
  { path: '/international-tours/europe', title: 'Europe', description: 'Start with one region or a few well-connected cities and build in time to explore each stop.' },
]

export const indiaDestinations = [
  { path: '/destinations/jaipur', title: 'Jaipur', description: 'Explore bazaars and palace architecture in the walled city. Allow time for Amber Fort beyond the centre.' },
  { path: '/destinations/agra', title: 'Agra', description: 'Visit the Taj Mahal and Agra Fort, then link your stay with Delhi or Jaipur on the Golden Triangle.' },
  { path: '/destinations/goa', title: 'Goa', description: 'Split your time between the Arabian Sea coast, Panaji?s neighbourhoods and the churches of Old Goa.' },
  { path: '/destinations/varanasi', title: 'Varanasi', description: 'Walk the Ganges ghats and old-city lanes, and consider a visit to nearby Sarnath.' },
]

const rajasthan = {
  path: '/states/rajasthan',
  parentPath: '/india',
  title: 'Rajasthan',
  description: 'Plan a journey through palace cities, hilltop forts and the Thar Desert. Jaipur is a starting point for exploring the state.',
  links: ['/destinations/jaipur', '/india/states'],
}

const [packageOverview, ...packageTopics] = tourPackagePages

const registeredPages = [
  {
    ...packageOverview,
    links: [...packageTopics.map(({ path }) => path), honeymoonCategory.path, budgetCategory.path,
      '/golden-triangle-tour', ...packageSeoPages.map(({ path }) => path), ...featuredTourPackages.map(({ path }) => path)],
  },
  ...packageTopics,
  ...featuredTourPackages.map((tour) => ({ ...tour, parentPath: packagesPath })),
  honeymoonCategory,
  budgetCategory,
  { path: '/golden-triangle-tour', title: 'Golden Triangle tour', description: 'Discover Delhi, Agra and Jaipur in one journey through historic neighbourhoods, the Taj Mahal and the forts of Rajasthan.', links: ['/destinations/agra', '/destinations/jaipur', packagesPath] },
  ...packageSeoPages,
  { path: '/india', title: 'Explore India', description: 'Plan a journey through Rajasthan?s palace cities, Goa?s coast and Varanasi?s riverfront.', links: ['/india/states', ...indiaDestinations.map(({ path }) => path)] },
  { path: '/india/states', title: 'India by state', description: 'Start with Rajasthan?s historic cities, hilltop forts and desert landscapes.', links: [rajasthan.path, '/india'] },
  rajasthan,
  ...indiaDestinations.map((page) => ({ ...page, links: ['/india', packagesPath] })),
  { path: internationalPath, title: 'International tours', description: 'Explore journeys through Asia, the Middle East and Europe. Pick a destination to start shaping your plans.', links: internationalDestinations.map(({ path }) => path) },
  ...internationalDestinations.map((page) => ({ ...page, links: [internationalPath] })),
  {
    path: buddhistToursPath,
    title: 'Buddhist Tours in India',
    description: 'Plan a Buddhist pilgrimage through Bodh Gaya, Sarnath and Kushinagar, with time for monasteries and heritage sites along the way.',
    links: ['/destinations/varanasi', '/india', packagesPath],
  },
  {
    path: onlinePaymentPath,
    title: 'Online payment',
    description: 'For a confirmed booking, contact Royal Yatri with your booking reference to request payment instructions.',
    action: { href: '/contact', label: 'Ask about payment' },
    links: [],
  },
]

const seoLandingPaths = new Set(seoLandingPages.map(({ path }) => path))

const directoryPagesByPath = new Map(destinationPages.map((page) => [page.path, page]))

const secondaryGuideCanonicals = {
  '/golden-triangle-tour': '/golden-triangle-tour-india',
  '/luxury-tours-india': '/india-luxury-tours',
}

function resolvePageLinks(page) {
  const isRajasthan = page.path === '/destinations-in-india/rajasthan'
  const links = page.links.map((path) => redirects[path] ?? path)
  return {
    ...page,
    parentPath: isRajasthan ? '/india' : redirects[page.parentPath] ?? page.parentPath,
    breadcrumbLabel: isRajasthan ? 'Rajasthan' : page.breadcrumbLabel,
    canonicalPath: secondaryGuideCanonicals[page.path] ?? page.canonicalPath,
    links: [...new Set(links)].filter((path) => path !== page.path),
  }
}

const directoryAliasesByGuide = new Map(
  Object.entries(redirects).filter(([path, target]) => directoryPagesByPath.has(path) && seoLandingPaths.has(target))
    .map(([path, target]) => [target, path]),
)

export const travelPages = [
  ...registeredPages.filter(({ path }) => !seoLandingPaths.has(path)),
  ...seoLandingPages.map((page) => ({
    ...page,
    links: [...page.links, ...(directoryPagesByPath.get(directoryAliasesByGuide.get(page.path))?.links ?? [])],
  })),
  destinationDirectoryPage,
  ...destinationPages.filter(({ path }) => !redirects[path]),
].map(resolvePageLinks)

export const pagePaths = [
  '/', '/about', '/contact', '/faq', ...travelPages.map(({ path }) => path),
].filter((path) => !redirects[path])

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function findTravelPage(pathname) {
  const path = redirects[pathname] ?? pathname
  return travelPages.find((page) => page.path === path)
}

export function getLandingAction(page) {
  if (page.action) return page.action
  if (page.requestLabel) {
    return {
      href: '/contact?request=' + encodeURIComponent(page.title),
      label: page.requestLabel,
    }
  }
  return {
    href: '/contact?destination=' + encodeURIComponent(page.title),
    label: 'Plan this trip',
  }
}
