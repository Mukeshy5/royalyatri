import Breadcrumbs from './Breadcrumbs.jsx'
import { getPackageCatalogLink } from '../../seo/seoLandingPages.js'
import { findTravelPage, getLandingAction } from '../../seo/travelPages.js'

function imageUrl(image) {
  if (image.startsWith('/')) return image
  return 'https://images.unsplash.com/' + image + '?auto=format&fit=crop&w=1200&q=85'
}

function LandingPage({ page, audienceLabel }) {
  const action = getLandingAction(page)
  const packageLink = getPackageCatalogLink(page)
  const travelFacts = [
    ['Nearest airport', page.airport],
    ['Nearest railway station', page.railway],
    ['Local culture and food', page.culture],
    ['Recommended duration', page.duration],
  ].filter(([, value]) => value)

  return (
    <article className="seo-landing-page">
      <Breadcrumbs page={page} />

      <section className="seo-landing-hero">
        <div className="seo-landing-hero-copy">
          <span className="eyebrow">{audienceLabel}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <a className="button button-orange" href={action.href}>
            {action.label} <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <figure className="seo-hero-media">
          <img src={imageUrl(page.heroImage)} alt={page.heroAlt} fetchPriority="high" />
          {page.heroCredit && (
            <figcaption>
              <a href={page.heroCredit.source}>Photo by {page.heroCredit.author}</a>
              <span aria-hidden="true"> &middot; </span>
              <a href={page.heroCredit.licenseUrl}>{page.heroCredit.license}</a>
            </figcaption>
          )}
        </figure>
      </section>

      <section className="section seo-content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A THOUGHTFUL FIRST LOOK</span>
            <h2>Places to explore</h2>
          </div>
        </div>
        <div className="seo-highlight-grid">
          {page.highlights.map(({ title, detail }) => (
            <article className="seo-highlight-card" key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section seo-experiences-section">
        <span className="eyebrow">MAKE THE MOST OF YOUR TIME</span>
        <h2>Things to do and experiences</h2>
        <ul className="seo-experiences-list">
          {page.experiences.map((experience) => <li key={experience}>{experience}</li>)}
        </ul>
      </section>

      <section className="section seo-travel-info-section">
        <span className="eyebrow">PLAN YOUR VISIT</span>
        <h2>Travel information</h2>
        <div className="seo-travel-info-grid">
          <article><h3>Best time to visit</h3><p>{page.bestTime}</p></article>
          <article><h3>How to reach</h3><p>{page.reach}</p></article>
          {travelFacts.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}
          <article><h3>Where to stay</h3><p>{page.stay}</p></article>
          <article><h3>Getting around</h3><p>{page.transport}</p></article>
        </div>
        {page.officialReference && <p className="seo-official-reference">Check current visitor information with <a href={page.officialReference[1]}>{page.officialReference[0]}</a>.</p>}
      </section>

      <section className="section seo-package-section">
        <div>
          <span className="eyebrow">PLAN WITH ROYAL YATRI</span>
          <h2>Tour packages and experiences</h2>
          <p>{page.tourInfo}</p>
          <a className="button button-dark" href={packageLink.href}>{packageLink.label}</a>
          <a className="seo-secondary-cta" href={action.href}>{action.label}</a>
        </div>
      </section>

      <section className="section seo-faq-section">
        <span className="eyebrow">HELPFUL DETAILS</span>
        <h2>Frequently asked questions</h2>
        <div className="seo-faq-list">
          {page.faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {page.links.length > 0 && (
        <section className="section travel-links-section seo-related-section">
          <span className="eyebrow">CONTINUE EXPLORING</span>
          <h2>Related destinations and tours</h2>
          <div className="travel-links">
            {page.links.map((path) => {
              const relatedPage = findTravelPage(path)
              return (
                <a href={path} key={path}>
                  <strong>{relatedPage?.title ?? path}</strong>
                  <span aria-hidden="true">&#8599;</span>
                </a>
              )
            })}
          </div>
        </section>
      )}

    </article>
  )
}

export function DestinationLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="EXPLORE INDIA" />
}

export function AttractionLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="LANDMARK GUIDE" />
}

export function IndiaTourismLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="INDIA TRAVEL GUIDE" />
}

export function ForeignTouristLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="TRAVEL TO INDIA" />
}

export function DestinationRegionLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="EXPLORE BY REGION" />
}

export function StateDestinationLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="STATE TRAVEL GUIDE" />
}

export function CityDestinationLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel="DESTINATION GUIDE" />
}

export function DestinationIntentLandingPage({ page }) {
  return <LandingPage page={page} audienceLabel={page.pageType === 'guide' ? 'PRACTICAL TRAVEL GUIDE' : 'PLAN YOUR TRIP'} />
}
