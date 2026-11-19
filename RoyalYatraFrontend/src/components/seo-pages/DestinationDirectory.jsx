import Breadcrumbs from './Breadcrumbs.jsx'
import { useMemo, useState } from 'react'
import {
  destinationCityPages,
  destinationRegionPath,
  destinationRegions,
  destinationStatePages,
  featuredDestinationPaths,
} from '../../seo/destinationDirectory.js'
import { findTravelPage, getLandingAction } from '../../seo/travelPages.js'

function DestinationCard({ page, label }) {
  return (
    <a className="destination-directory-card" href={page.path}>
      <span className="eyebrow">{label}</span>
      <strong>{page.title}</strong>
      <span>{page.description}</span>
      <span className="destination-directory-arrow" aria-hidden="true">&#8599;</span>
    </a>
  )
}

function RegionCard({ region }) {
  const states = destinationStatePages.filter(({ parentPath }) => parentPath === destinationRegionPath(region))
  return (
    <a className="destination-region-card" href={destinationRegionPath(region)}>
      <img src={region.image.startsWith('/') ? region.image : 'https://images.unsplash.com/' + region.image + '?auto=format&fit=crop&w=800&q=85'}
        alt={region.alt} loading="lazy" />
      <span className="destination-region-card-copy">
        <strong>{region.name}</strong>
        <span>{states.length} state travel guides</span>
      </span>
    </a>
  )
}

export default function DestinationDirectoryPage({ page, tours, error, loading }) {
  const [query, setQuery] = useState('')
  const action = getLandingAction(page)
  const searchResults = useMemo(() => {
    const term = query.trim().toLocaleLowerCase()
    if (!term) return []
    return [...destinationStatePages, ...destinationCityPages]
      .filter((destination) => `${destination.title} ${destination.description} ${destination.intro}`.toLocaleLowerCase().includes(term))
      .slice(0, 12)
  }, [query])
  const featuredDestinations = featuredDestinationPaths
    .map(findTravelPage)
    .filter(Boolean)

  return (
    <article className="destination-directory">
      <Breadcrumbs page={page} />

      <section className="directory-hero">
        <div>
          <span className="eyebrow">A COUNTRY OF MANY WORLDS</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <a className="button button-orange" href={action.href}>{action.label} <span aria-hidden="true">&#8599;</span></a>
        </div>
        <img src="/amber-fort-hero.webp" alt={page.heroAlt} fetchPriority="high" />
      </section>

      <section className="section directory-search-section">
        <label htmlFor="destination-search">Search India destinations</label>
        <input id="destination-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)}
          placeholder="Try a state, city or region" autoComplete="off" />
        {query.trim() && (
          <div className="directory-search-results" aria-live="polite">
            {searchResults.length
              ? searchResults.map((result) => <a key={result.path} href={result.path}>{result.title}</a>)
              : <p>No matching destination found. Try a state or city name.</p>}
          </div>
        )}
      </section>

      <section className="section directory-region-section">
        <div className="section-heading">
          <div><span className="eyebrow">START WITH A REGION</span><h2>Explore by region</h2></div>
        </div>
        <div className="destination-region-grid">
          {destinationRegions.map((region) => <RegionCard key={region.slug} region={region} />)}
        </div>
      </section>

      <section className="section directory-featured-section">
        <div className="section-heading">
          <div><span className="eyebrow">A FEW PLACES TO BEGIN</span><h2>Popular destinations</h2>
            <p>A curated starting list from the destination guides; use the search or regional pages to explore further.</p></div>
        </div>
        <div className="destination-directory-grid">
          {featuredDestinations.map((destination) => <DestinationCard key={destination.path} page={destination} label="DESTINATION GUIDE" />)}
        </div>
      </section>

      <section className="section directory-state-section">
        <div className="section-heading">
          <div><span className="eyebrow">STATE-BY-STATE PLANNING</span><h2>Explore by state</h2>
            <p>Open a state guide for places, seasons, gateways and route ideas.</p></div>
        </div>
        {destinationRegions.map((region) => {
          const states = destinationStatePages.filter(({ parentPath }) => parentPath === destinationRegionPath(region))
          return (
            <section className="directory-state-group" key={region.slug}>
              <h3><a href={destinationRegionPath(region)}>{region.name}</a></h3>
              <div className="directory-state-links">
                {states.map((state) => <a href={state.path} key={state.path}>{state.breadcrumbLabel ?? state.title}</a>)}
              </div>
            </section>
          )
        })}
      </section>

      <section className="section directory-packages-section">
        <div className="section-heading">
          <div><span className="eyebrow">PUBLISHED ITINERARIES</span><h2>India tour packages</h2>
            <p>Browse the current tour catalogue and confirm dates and inclusions before booking.</p></div>
        </div>
        {loading && <p className="api-state">Finding current tour listings...</p>}
        {error && <p className="api-state api-error">{error}</p>}
        {!loading && !error && tours.length > 0 && (
          <div className="directory-package-grid">
            {tours.slice(0, 4).map((tour) => (
              <a className="directory-package-card" href="/india-tour-packages" key={tour.id}>
                <span>{tour.region}</span>
                <strong>{tour.name}</strong>
                <p>{tour.summary}</p>
                <span>{tour.duration} <b aria-hidden="true">&#8599;</b></span>
              </a>
            ))}
          </div>
        )}
        {!loading && !error && tours.length === 0 && (
          <p className="api-state">No published tour listings are available right now. You can still enquire about a route.</p>
        )}
      </section>

      <section className="section directory-inspiration-section">
        <div className="section-heading">
          <div><span className="eyebrow">TRAVEL INSPIRATION</span><h2>Choose a travel style</h2></div>
        </div>
        <div className="destination-directory-grid">
          {[
            ['/destinations-in-india/rajasthan/heritage-places', 'Heritage and historic cities'],
            ['/destinations-in-india/kerala/beach-holidays', 'Coast and backwaters'],
            ['/destinations-in-india/himachal-pradesh/hill-stations', 'Mountain and hill escapes'],
            ['/destinations-in-india/madhya-pradesh/wildlife-safaris', 'Wildlife and nature'],
          ].map(([path, label]) => {
            const linkedPage = findTravelPage(path)
            return linkedPage && <DestinationCard key={path} page={linkedPage} label={label.toUpperCase()} />
          })}
        </div>
      </section>

      <section className="section directory-cta-section">
        <div><span className="eyebrow">PLAN AT YOUR PACE</span><h2>Need help connecting the route?</h2>
          <p>Share your dates, starting city and interests. The team can help you compare a realistic route and current service details.</p>
        </div>
        <a className="button button-light" href={action.href}>{action.label}</a>
      </section>

    </article>
  )
}
