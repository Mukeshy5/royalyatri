import Breadcrumbs from './Breadcrumbs.jsx'
import { featuredTourPackages } from '../../seo/featuredTourPackages.js'
import { findTravelPage, getLandingAction } from '../../seo/travelPages.js'

export function TourPackageLinks({ heading, packages }) {
  return (
    <section className="section tour-package-related">
      <h2>{heading}</h2>
      <ul className="tour-package-links">
        {packages.map((tour) => (
          <li key={tour.path}>
            <a href={tour.path}>
              <span className="tour-package-link-name">{tour.menuLabel} <span aria-hidden="true">&#8599;</span></span>
              <span className="tour-package-link-route">{tour.route} · {tour.itinerary.length} days</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function TourPackageLanding({ page }) {
  const action = getLandingAction(page)
  const related = featuredTourPackages.filter(({ path }) => path !== page.path)
  const credit = page.heroCredit

  return (
    <article className="tour-package-page">
      <Breadcrumbs page={page} />
      <section className="section tour-package-hero">
        <div className="tour-package-hero-copy">
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <dl className="tour-package-facts">
            <div><dt>Suggested duration</dt><dd>{page.itinerary.length} days</dd></div>
            <div><dt>Route</dt><dd>{page.route}</dd></div>
          </dl>
          <div className="tour-package-actions">
            <a className="button button-orange" href={action.href}>{action.label} <span aria-hidden="true">&#8599;</span></a>
            <a className="text-link" href="#itinerary">View itinerary <span aria-hidden="true">&#8595;</span></a>
          </div>
        </div>
        <figure className="tour-package-photo">
          <img src={page.heroImage} alt={page.heroAlt} fetchPriority="high" />
          {credit && <figcaption><a href={credit.source}>{credit.author}</a> · <a href={credit.licenseUrl}>{credit.license}</a></figcaption>}
        </figure>
      </section>
      <div className="section tour-package-details">
        <section id="itinerary">
          <h2>Suggested itinerary</h2>
          <ol className="tour-package-days" role="list">
            {page.itinerary.map(([title, detail], index) => (
              <li key={title}>
                <span className="tour-package-day">Day {index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </section>
        <aside className="tour-package-plan">
          <h2>Plan your trip</h2>
          <p>Share your dates and group size for a quote with itemised stays, transfers and sightseeing.</p>
          <ul>{page.planning.map((note) => <li key={note}>{note}</li>)}</ul>
          <a className="button button-dark" href={action.href}>{action.label}</a>
          <ul className="tour-package-guide-links" aria-label="Destination guides">
            {page.links.map((path) => {
              const guide = findTravelPage(path)
              return <li key={path}><a href={path}>{guide.breadcrumbLabel ?? guide.title}</a></li>
            })}
          </ul>
        </aside>
      </div>
      <section className="section tour-package-questions">
        <h2>Tour FAQs</h2>
        <div className="seo-faq-list">
          {page.faqs.map(({ question, answer }) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>
      <TourPackageLinks heading="Explore more tours" packages={related} />
    </article>
  )
}
