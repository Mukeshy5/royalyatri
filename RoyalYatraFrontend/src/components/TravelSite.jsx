import React from 'react'
import { destinationRegionPath, destinationRegions } from '../seo/destinationDirectory.js'
import DestinationMenu from './layout/DestinationMenu.jsx'
import IndiaMenu from './layout/IndiaMenu.jsx'
import TourPackageMenu from './layout/TourPackageMenu.jsx'
import { TourPackageLinks } from './seo-pages/TourPackageLanding.jsx'
import { featuredTourPackages } from '../seo/featuredTourPackages.js'
import {
  buddhistToursPath,
  findTravelPage,
  internationalDestinations,
  internationalPath,
  onlinePaymentPath,
  packagesPath,
  priorityTourPackagePages,
} from '../seo/travelPages.js'

const currentYear = new Date().getFullYear()

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Tour package', href: packagesPath },
  { label: 'India', href: '/india' },
  { label: 'Destinations in India', href: '/destinations-in-india' },
  { label: 'Buddhist Tours', href: buddhistToursPath },
  { label: 'Contact us', href: '/contact' },
  { label: 'Online payment', href: onlinePaymentPath, highlighted: true },
]

const destinations = [
  { name: 'Rajasthan', detail: 'Palaces, desert skies & royal stays', image: 'photo-1477587458883-47145ed94245', href: '/destinations-in-india/rajasthan' },
  { name: 'Kerala', detail: 'Slow days on the backwaters', image: 'photo-1602216056096-3b40cc0c9944', href: '/destinations-in-india/kerala' },
  { name: 'Himachal', detail: 'Mountain air, made for wandering', image: 'photo-1626621341517-bbf3d9990a23', href: '/destinations-in-india/himachal-pradesh' },
  { name: 'Agra', detail: 'A timeless wonder, up close', image: 'photo-1564507592333-c60657eea523', href: '/destinations-in-india/uttar-pradesh/agra' },
]

function imageUrl(id, width = 900) {
  if (id.startsWith('/')) return id
  return 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=' + width + '&q=85'
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '\u2197' : '\u2192'}</span>
}

function Header({ pathname }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activePanel, setActivePanel] = React.useState(null)

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Royal Yatra home">
        <img className="brand-logo" src="/logo.png" alt="Royal Yatra" />
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => {
          setMenuOpen((open) => !open)
          setActivePanel(null)
        }}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {navItems.map(({ label, href, highlighted }) => {
          if (href === packagesPath) return (
            <TourPackageMenu key={href} pathname={pathname} activePanel={activePanel} setActivePanel={setActivePanel} />
          )
          if (href === '/india') return (
            <IndiaMenu key={href} pathname={pathname} activePanel={activePanel} setActivePanel={setActivePanel} />
          )
          if (href === '/destinations-in-india') return (
            <DestinationMenu key={href} pathname={pathname} activePanel={activePanel} setActivePanel={setActivePanel} />
          )
          return (
            <a key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
              className={highlighted ? 'button button-dark nav-cta' : undefined}
            >
              {label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <a className="brand brand-footer" href="/"><img className="brand-logo" src="/logo.png" alt="Royal Yatra" /></a>
          <p>India, a little closer. We make thoughtful journeys for curious people.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/destinations-in-india">Destinations</a>
          <a href={packagesPath}>India tour packages</a>
          <a href={internationalPath}>International tours</a>
          <a href="/about">Our story</a>
        </div>
        <div className="footer-column">
          <h3>Say hello</h3>
          <a href="/contact">Plan a trip</a>
          <a href="mailto:hello@royalyatra.com">hello@royalyatra.com</a>
          <a href="tel:+911140012345">+91 11 4001 2345</a>
        </div>
        <div className="footer-note">
          <h3>Plan your journey</h3>
          <p>Share your dates, destinations and the kind of trip you have in mind.</p>
          <a className="text-link" href="/contact">Start an enquiry <Arrow /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {currentYear} Royal Yatra.</span>
        <div><a href="/faq">FAQs</a><a href="/contact">Get in touch</a></div>
      </div>
    </footer>
  )
}

export function SiteLayout({ pathname, children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header key={pathname} pathname={pathname} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  )
}

function SectionHeading({ eyebrow, title, copy, link, href }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {link && <a className="text-link" href={href}>{link} <Arrow /></a>}
    </div>
  )
}

function DestinationCard({ place, index }) {
  return (
    <a className={'destination-card destination-card-' + (index + 1)} href={place.href}>
      <img src={imageUrl(place.image)} alt={place.name + ', India'} loading="lazy" />
      <span className="destination-overlay">
        <span className="destination-copy"><strong>{place.name}</strong><span>{place.detail}</span></span>
        <span className="round-arrow"><Arrow diagonal /></span>
      </span>
    </a>
  )
}

function PackageCard({ tour }) {
  const enquiryHref = '/contact?tour=' + encodeURIComponent(tour.name)
  return (
    <article className="tour-card">
      <a className="tour-image" href={enquiryHref} aria-label={'Enquire about ' + tour.name}>
        <img src={imageUrl(tour.image, 780)} alt={tour.name} loading="lazy" />
        {tour.tag && <span className="tour-tag">{tour.tag}</span>}
        <span className="tour-image-arrow"><Arrow diagonal /></span>
      </a>
      <div className="tour-card-body">
        <div className="tour-meta"><span>{tour.region}</span><span>&#9733; {tour.rating}</span></div>
        <h3><a href={enquiryHref}>{tour.name}</a></h3>
        <p>{tour.summary}</p>
        <div className="tour-card-bottom">
          <span>{tour.duration}</span>
          <strong>&#8377;{Number(tour.price).toLocaleString('en-IN')} <small>/ person</small></strong>
        </div>
      </div>
    </article>
  )
}

function TourGrid({ tours, error, loading, limit }) {
  if (loading) return <p className="api-state">Finding journeys for you...</p>
  if (error) return <p className="api-state api-error">{error}</p>
  if (!tours.length) return <p className="api-state">New journeys are being added. Please check back soon.</p>

  return (
    <div className="tour-grid">
      {tours.slice(0, limit ?? tours.length).map((tour) => <PackageCard key={tour.id} tour={tour} />)}
    </div>
  )
}

function SearchBar() {
  return (
    <form className="search-bar" action={packagesPath} method="get">
      <label className="search-field">
        <span>Destination</span>
        <select name="destination">
          <option value="">All destinations</option>
          {destinations.map(({ name }) => <option key={name}>{name}</option>)}
        </select>
      </label>
      <label className="search-field">
        <span>Travel month</span>
        <input type="month" name="month" />
      </label>
      <label className="search-field">
        <span>Travellers</span>
        <select name="travellers" defaultValue="2 travellers">
          <option>1 traveller</option><option>2 travellers</option><option>3 travellers</option><option>4+ travellers</option>
        </select>
      </label>
      <button className="button button-dark search-submit" type="submit">Find my trip <Arrow /></button>
    </form>
  )
}

function PhotoCredit({ credit, className }) {
  if (!credit) return null
  return (
    <p className={className}>
      <a href={credit.source}>{credit.author}</a> <span aria-hidden="true">&middot;</span> <a href={credit.licenseUrl}>{credit.license}</a>
    </p>
  )
}

function FeaturedPackageCards() {
  return (
    <div className="featured-tour-grid">
      {featuredTourPackages.map((tour) => (
        <article className="featured-tour-card" key={tour.path}>
          <a href={tour.path} className="featured-tour-link">
            <div className="featured-tour-media">
              <img src={tour.heroImage} alt="" loading="lazy" />
              <span className="featured-tour-duration">{tour.itinerary.length} days</span>
            </div>
            <div className="featured-tour-copy">
              <div><h3>{tour.menuLabel}</h3><p>{tour.route}</p></div>
              <span className="featured-tour-arrow"><Arrow diagonal /></span>
            </div>
          </a>
          <PhotoCredit credit={tour.heroCredit} className="featured-tour-credit" />
        </article>
      ))}
    </div>
  )
}

export function HomePage({ tours }) {
  const goa = findTravelPage('/destinations/goa/south-goa')

  return (
    <>
      <div className="home-intro">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-hero-copy">
            <p className="eyebrow">TAILOR-MADE TRAVEL IN INDIA</p>
            <h1 id="hero-title">India, at your <br /><em>own pace.</em></h1>
            <p className="home-hero-description">From the palace cities of Rajasthan to the quiet lanes of the Himalayas, plan a journey around the places and experiences that matter to you.</p>
            <div className="home-hero-actions">
              <a className="button button-orange" href={packagesPath}>Explore India tours <Arrow /></a>
              <a className="text-link" href="/contact">Plan a private trip <Arrow diagonal /></a>
            </div>
          </div>
          <figure className="home-hero-media">
            <img src="/amber-fort-hero.png" alt="Amber Fort above its lakeside gardens at sunset" width="1774" height="887" fetchPriority="high" />
            <figcaption><a href="/destinations/jaipur/amber-fort">Amber Fort, Jaipur <Arrow diagonal /></a></figcaption>
          </figure>
        </section>
        <section className="search-wrap" aria-label="Find a trip">
          <SearchBar />
        </section>
      </div>

      <section className="section home-packages">
        <SectionHeading title="Featured tour packages" copy="Explore the route and day-by-day plan before you request a quote." link="All tour packages" href={packagesPath} />
        <FeaturedPackageCards />
      </section>

      <section className="section home-destinations">
        <figure className="home-destination-spotlight">
          <a className="home-destination-photo" href={goa.path}>
            <img src={goa.heroImage} alt={goa.heroAlt} loading="lazy" />
            <span>Palolem Beach, Goa <Arrow diagonal /></span>
          </a>
          <PhotoCredit credit={goa.heroCredit} className="home-destination-credit" />
        </figure>
        <div className="home-destination-copy">
          <h2>Explore India <br /><em>by region.</em></h2>
          <nav className="home-region-links" aria-label="Regions of India">
            {destinationRegions.map((region) => (
              <a key={region.slug} href={destinationRegionPath(region)}>{region.name}<Arrow diagonal /></a>
            ))}
          </nav>
          <a className="text-link" href="/destinations-in-india">See all destinations <Arrow /></a>
        </div>
      </section>

      {tours.length > 0 && (
        <section className="section tours-section">
          <SectionHeading title="More from the tour catalogue" link="Browse all tours" href={packagesPath} />
          <TourGrid tours={tours} limit={3} />
        </section>
      )}

      <section className="section international-showcase">
        <div>
          <h2>Explore beyond India</h2>
          <p>Find your next destination in Asia, the Middle East or Europe.</p>
          <a className="button button-light" href={internationalPath}>International tours <Arrow /></a>
        </div>
        <div className="world-destinations">
          {internationalDestinations.map((place) => (
            <a href={place.path} key={place.path}><span>{place.title}</span><Arrow diagonal /></a>
          ))}
        </div>
      </section>

      <Callout />
    </>
  )
}

function Callout() {
  return (
    <section className="callout">
      <div>
        <h2>Let’s plan your trip.</h2>
        <p>Tell us where you want to go, when you’re thinking of travelling and what you’d love to do.</p>
      </div>
      <a className="button button-light" href="/contact">Start an enquiry <Arrow diagonal /></a>
    </section>
  )
}

function PageHero({ eyebrow, title, copy, image }) {
  return (
    <section className="page-hero page-hero-with-image">
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      <img src={imageUrl(image, 1200)} alt="" fetchPriority="high" />
    </section>
  )
}

export function DestinationsPage() {
  return (
    <>
      <PageHero eyebrow="A COUNTRY OF MANY WORLDS" title={<>Find your kind<br />of <em>wonder.</em></>}
        copy="From the Himalaya to the Indian Ocean, find the place that feels like it has been waiting for you." image="photo-1477587458883-47145ed94245" />
      <section className="section page-section">
        <SectionHeading eyebrow="TAKE THE SCENIC ROUTE" title="India, in all its colours" copy="Pick a place to begin. We'll help you find everything that comes after." />
        <div className="destination-grid destination-grid-large">
          {destinations.map((place, index) => <DestinationCard key={place.name} place={place} index={index} />)}
        </div>
      </section>
      <Callout />
    </>
  )
}

const packageTopicPaths = new Set([...priorityTourPackagePages, ...featuredTourPackages].map(({ path }) => path))

export function ToursPage({ tours, error, loading, search }) {
  const destination = search.get('destination')
  const visibleTours = destination
    ? tours.filter((tour) => (tour.region + ' ' + tour.name).toLowerCase().includes(destination.toLowerCase()))
    : tours
  const page = findTravelPage(packagesPath)
  const relatedTrips = page.links.filter((path) => !packageTopicPaths.has(path)).map(findTravelPage)
  const enquiryQuery = new URLSearchParams()

  for (const field of ['destination', 'month', 'travellers']) {
    const value = search.get(field)
    if (value) enquiryQuery.set(field, value)
  }

  return (
    <>
      <PageHero eyebrow="JOURNEYS ACROSS INDIA" title={page.title} copy={page.description} image="/amber-fort-hero.png" />
      <section className="section page-section">
        <nav className="category-links" aria-label="Other India tour packages">
          {relatedTrips.map(({ path, title }) => <a key={path} href={path}>{title} <Arrow diagonal /></a>)}
        </nav>
        <SectionHeading title={destination ? 'Journeys in ' + destination : 'Explore our itineraries'} />
        {enquiryQuery.size > 0 && (
          <div className="filter-note filter-actions">
            <a href={packagesPath}>Clear search</a>
            <a href={'/contact?' + enquiryQuery.toString()}>Enquire about this trip <Arrow /></a>
          </div>
        )}
        <TourGrid tours={visibleTours} error={error} loading={loading} />
      </section>
      <TourPackageLinks heading="Featured tour packages" packages={featuredTourPackages} />
      <section className="section travel-links-section package-topics-section" aria-labelledby="package-topics">
        <h2 id="package-topics">Plan your India trip</h2>
        <div className="travel-links package-topic-grid">
          {priorityTourPackagePages.slice(1).map(({ path, title }) => (
            <a key={path} href={path}><strong>{title}</strong><Arrow diagonal /></a>
          ))}
        </div>
      </section>
      <Callout />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="A LITTLE ABOUT US" title={<>Travel that feels<br /><em>like you.</em></>}
        copy="We're a small team of curious people who believe the best way to know India is to take your time." image="/amber-fort-hero.png" />
      <section className="story-section about-story">
        <div className="story-image">
          <img src={imageUrl('photo-1599661046827-dacff0c0f09a', 1100)} alt="Ornate architecture in Jaipur" loading="lazy" />
        </div>
        <div className="story-copy">
          <span className="eyebrow">WHY WE DO THIS</span>
          <h2>Good travel is<br /><em>all about people.</em></h2>
          <p>Royal Yatra started with a simple idea: travel should open doors, not just tick boxes. Today, we bring together local hosts, thoughtful planners and travellers ready to look a little closer.</p>
          <p>We make the plans. You make the memories. And if the best bit is the unplanned chai stop along the way, we'll call that a win.</p>
          <a className="text-link" href="/contact">Let's plan something <Arrow /></a>
        </div>
      </section>
      <section className="values-strip">
        <div><strong>Local first</strong><span>Meet the people who make a place.</span></div>
        <div><strong>Thoughtful always</strong><span>Good for you, kinder to the places you visit.</span></div>
        <div><strong>Made for you</strong><span>Just good conversations.</span></div>
      </section>
      <Callout />
    </>
  )
}

export function ContactPage({ search, apiUrl }) {
  const destination = search.get('destination')?.trim().slice(0, 100) || ''
  const places = [...new Set([
    ...destinations.map(({ name }) => name),
    ...internationalDestinations.map(({ title }) => title),
    destination,
  ])].filter(Boolean)
  const draft = [
    ['Request', search.get('request')],
    ['Tour', search.get('tour')],
    ['Preferred month', search.get('month')],
    ['Travellers', search.get('travellers')],
  ].filter(([, value]) => value).map(([label, value]) => label + ' - ' + value.slice(0, 160)).join('\n')
  const [status, setStatus] = React.useState('idle')
  const [message, setMessage] = React.useState('')

  async function submitEnquiry(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')
    setMessage('')
    try {
      const response = await fetch(apiUrl + '/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'We could not send your message. Please try again.')
      setStatus('success')
      setMessage(result.message || 'Your trip enquiry has been received.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'We could not reach our trip-planning team. Please try again.')
    }
  }

  return (
    <>
      <PageHero eyebrow="LET'S TALK ABOUT YOUR TRIP" title={<>A good journey<br />starts with <em>hello.</em></>}
        copy="Tell us what you're dreaming up. A real person from our team will help you find your way." image="/amber-fort-hero.png" />
      <section className="section contact-section">
        <div className="contact-intro">
          <span className="eyebrow">WE'RE ALL EARS</span>
          <h2>What's on your<br /><em>mind?</em></h2>
          <p>Share a little about your trip and we'll take it from there.</p>
          <div className="contact-detail"><span>EMAIL</span><a href="mailto:hello@royalyatra.com">hello@royalyatra.com</a></div>
          <div className="contact-detail"><span>CALL US</span><a href="tel:+911140012345">+91 11 4001 2345</a></div>
          <div className="contact-detail"><span>OFFICE HOURS</span><strong>Monday to Saturday, 9am&ndash;6pm IST</strong></div>
        </div>
        <form className="contact-form" onSubmit={submitEnquiry}>
          <div className="form-row">
            <label>Your name<input name="name" autoComplete="name" required minLength="2" maxLength="80" placeholder="How should we call you?" /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required maxLength="254" placeholder="you@example.com" /></label>
          </div>
          <div className="form-row">
            <label>Phone number <span className="optional">(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength="24" placeholder="+91 98765 43210" /></label>
            <label>Where would you like to go?
              <select name="destination" defaultValue={destination}>
                <option value="">Still deciding</option>
                {places.map((place) => <option key={place}>{place}</option>)}
              </select>
            </label>
          </div>
          <label>Tell us a little about your trip
            <textarea name="message" defaultValue={draft} rows="5" required minLength="10" maxLength="2000"
              placeholder="When are you thinking of travelling? Who's coming along?" />
          </label>
          {message && <p className={'form-message form-message-' + (status === 'error' ? 'error' : 'success')} role="status">{message}</p>}
          <button className="button button-dark form-submit" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending your note...' : 'Send your note'} <Arrow />
          </button>
          <small className="form-privacy">Your details are only used to help plan your trip.</small>
        </form>
      </section>
    </>
  )
}

const faqs = [
  ['Can you tailor a trip just for me?', 'Absolutely. Our journeys are a starting point. Tell us what you love, how you like to travel and what you want to spend.'],
  ['How far ahead should I plan?', 'For peak season and popular stays, three to six months gives you the best choice. If your dates are closer, get in touch anyway.'],
  ['Are your tours private or group journeys?', 'We offer both. Many itineraries can be arranged as private journeys, and some departures are shared with a small group.'],
  ['What is included in a tour package?', 'Your itinerary will show the accommodation, transport, experiences and meals included, along with anything you may want to add.'],
  ['Can you help with hotels and local transport?', 'Yes. We can discuss stays, airport transfers, private drivers and local experiences as part of your journey.'],
]

export function FAQPage() {
  return (
    <>
      <PageHero eyebrow="THE LITTLE DETAILS" title={<>A few things<br />you might <em>wonder.</em></>}
        copy="The practical bits, answered. Still curious? We are only a message away." image="/amber-fort-hero.png" />
      <section className="section faq-section">
        <div className="faq-heading">
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>Questions, meet answers.</h2>
          <p>Can't find what you're looking for? <a href="/contact">Talk to a real person.</a></p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>
      <Callout />
    </>
  )
}

export function NotFoundPage() {
  return (
    <section className="not-found">
      <span className="eyebrow">A LITTLE DETOUR</span>
      <h1>This page took<br />the <em>scenic route.</em></h1>
      <p>We couldn't find the page you were looking for.</p>
      <a className="button button-dark" href="/">Back to the beginning <Arrow /></a>
    </section>
  )
}
