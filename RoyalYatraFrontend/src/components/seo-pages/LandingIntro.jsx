import { findTravelPage, getLandingAction, internationalPath } from '../../seo/travelPages.js'
import {
  AttractionLandingPage,
  CityDestinationLandingPage,
  DestinationIntentLandingPage,
  DestinationRegionLandingPage,
  DestinationLandingPage,
  ForeignTouristLandingPage,
  IndiaTourismLandingPage,
  StateDestinationLandingPage,
} from './LandingPages.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import DestinationDirectoryPage from './DestinationDirectory.jsx'
import TourPackageLanding from './TourPackageLanding.jsx'

export default function LandingIntro({ page, tours, error, loading }) {
  if (page.pageType === 'tour') {
    return <TourPackageLanding page={page} />
  }

  if (page.pageType === 'directory') {
    return <DestinationDirectoryPage page={page} tours={tours} error={error} loading={loading} />
  }

  if (page.pageType) {
    const PageComponent = {
      destination: DestinationLandingPage,
      attraction: AttractionLandingPage,
      india: IndiaTourismLandingPage,
      foreign: ForeignTouristLandingPage,
      region: DestinationRegionLandingPage,
      state: StateDestinationLandingPage,
      city: CityDestinationLandingPage,
      intent: DestinationIntentLandingPage,
      guide: DestinationIntentLandingPage,
    }[page.pageType]

    if (PageComponent) return <PageComponent page={page} />
  }

  const action = getLandingAction(page)

  return (
    <>
      <Breadcrumbs page={page} />
      <section className={`page-hero travel-hero${page.path.startsWith(internationalPath) ? ' travel-hero-world' : ''}`}>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <a className="button button-orange" href={action.href}>{action.label} <span aria-hidden="true">&#8599;</span></a>
      </section>
      {page.planning && (
        <section className="section travel-planning-section">
          <h2>{page.planning.title}</h2>
          <ul>
            {page.planning.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}
      {page.links.length > 0 && (
        <section className="section travel-links-section">
          <h2>{page.path === internationalPath ? 'Choose a destination' : 'Explore related trips'}</h2>
          <div className="travel-links">
            {page.links.map((path) => {
              const link = findTravelPage(path)
              return (
                <a href={path} key={path}>
                  <strong>{link?.title ?? path}</strong>
                  <span aria-hidden="true">&#8599;</span>
                </a>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
