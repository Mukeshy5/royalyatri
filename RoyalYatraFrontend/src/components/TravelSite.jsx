import React from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import ArrowDown from 'lucide-react/icons/arrow-down'
import ArrowRight from 'lucide-react/icons/arrow-right'
import ArrowUpRight from 'lucide-react/icons/arrow-up-right'
import BadgeCheck from 'lucide-react/icons/badge-check'
import CalendarDays from 'lucide-react/icons/calendar-days'
import Check from 'lucide-react/icons/check'
import ChevronRight from 'lucide-react/icons/chevron-right'
import Compass from 'lucide-react/icons/compass'
import Headphones from 'lucide-react/icons/headphones'
import MapPin from 'lucide-react/icons/map-pin'
import MessageCircle from 'lucide-react/icons/message-circle'
import Plane from 'lucide-react/icons/plane'
import Search from 'lucide-react/icons/search'
import ShieldCheck from 'lucide-react/icons/shield-check'
import Sparkles from 'lucide-react/icons/sparkles'
import Users from 'lucide-react/icons/users'
import { supportEmail, supportEmailUrl, supportWhatsAppNumber, supportWhatsAppUrl } from '../contactDetails.js'
import { destinationRegionPath, destinationRegions } from '../seo/destinationDirectory.js'
import HomeSupport from './HomeSupport.jsx'
import DestinationMenu from './layout/DestinationMenu.jsx'
import IndiaMenu from './layout/IndiaMenu.jsx'
import Breadcrumbs from './seo-pages/Breadcrumbs.jsx'
import TourPackageMenu from './layout/TourPackageMenu.jsx'
import { TourPackageLinks } from './seo-pages/TourPackageLanding.jsx'
import { featuredTourPackages } from '../seo/featuredTourPackages.js'
import {
  findTravelPage,
  internationalDestinations,
  internationalPath,
  onlinePaymentPath,
  packagesPath,
  priorityTourPackagePages,
} from '../seo/travelPages.js'

const homeHeroImage = 'photo-1551632811-561732d1e306'
const currentYear = new Date().getFullYear()
const earliestTravelDate = new Date().toISOString().slice(0, 10)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: packagesPath },
  { label: 'Destinations', href: '/destinations-in-india' },
  { label: 'India Trip', href: '/india' },
  { label: 'Services', href: '/#travel-experiences' },
  { label: 'About us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const destinations = [
  { name: 'Himachal Pradesh', detail: 'Snowy peaks & green valleys', image: 'photo-1626621341517-bbf3d9990a23', href: '/destinations-in-india/himachal-pradesh' },
  { name: 'Kerala', detail: 'Backwaters & quiet houseboats', image: 'photo-1602216056096-3b40cc0c9944', href: '/destinations/kerala' },
  { name: 'Goa', detail: 'Palm-lined shores & slow days', image: 'photo-1512343879784-a960bf40e7f2', href: '/destinations/goa' },
  { name: 'Rajasthan', detail: 'Palaces, forts & desert skies', image: 'photo-1477587458883-47145ed94245', href: '/destinations-in-india/rajasthan' },
  { name: 'Ladakh', detail: 'High passes & brilliant blue lakes', image: 'photo-1501785888041-af3ef285b470', href: '/contact?destination=Ladakh' },
]

const bookingCategories = [
  { id: 'tours', label: 'Tours & packages', icon: Compass },
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'hotels', label: 'Hotels', icon: Sparkles },
  { id: 'holidays', label: 'Holiday packages', icon: MapPin },
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
      <a className="brand" href="/" aria-label="Royal Yatri home">
        <img className="brand-logo" src="/logo.webp" width={360} height={120} alt="Royal Yatri" />
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
            <TourPackageMenu key={href} label={label} pathname={pathname} activePanel={activePanel} setActivePanel={setActivePanel} />
          )
          if (href === '/destinations-in-india') return (
            <DestinationMenu key={href} label={label} pathname={pathname} activePanel={activePanel} setActivePanel={setActivePanel} />
          )
          if (href === '/india') return (
            <IndiaMenu key={href} label={label} pathname={pathname} activePanel={activePanel} setActivePanel={setActivePanel} />
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
      <div className="header-actions">
        <a className="header-support" href={supportWhatsAppUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={17} aria-hidden="true" />
          <span><small>Chat on WhatsApp</small><strong>{supportWhatsAppNumber}</strong></span>
        </a>
        <a className="button button-orange header-booking" href="/contact">
          Book now <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <a className="brand brand-footer" href="/"><img className="brand-logo" src="/logo.webp" width={360} height={120} alt="Royal Yatri" /></a>
          <p>India, a little closer. We make thoughtful journeys for curious people.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/destinations-in-india">Destinations</a>
          <a href={packagesPath}>India tour packages</a>
          <a href={internationalPath}>International tours</a>
          <a href="/buddhist-tours-in-india">Buddhist tours</a>
          <a href={onlinePaymentPath}>Online payment</a>
          <a href="/india">Explore India</a>
          <a href="/about">Our story</a>
        </div>
        <div className="footer-column">
          <h3>Say hello</h3>
          <a href="/contact">Plan a trip</a>
          <a href={supportEmailUrl}>{supportEmail}</a>
          <a href={supportWhatsAppUrl} target="_blank" rel="noopener noreferrer">WhatsApp {supportWhatsAppNumber}</a>
        </div>
        <div className="footer-note">
          <h3>Plan your journey</h3>
          <p>Share your dates, destinations and the kind of trip you have in mind.</p>
          <a className="text-link" href="/contact">Start an enquiry <Arrow /></a>
          <div className="footer-travel-tags" aria-label="Travel styles">
            <a href="/packages/category/family">Family trips</a>
            <a href="/packages/category/luxury">Luxury escapes</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {currentYear} Royal Yatri.</span>
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
  const [category, setCategory] = React.useState('tours')
  const [destination, setDestination] = React.useState('')
  const [date, setDate] = React.useState('')
  const [travellers, setTravellers] = React.useState('2')

  function searchTrips(event) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (date) params.set('date', date)
    params.set('travellers', travellers)

    if (category === 'flights' || category === 'hotels') {
      const request = category === 'flights' ? 'Flight planning assistance' : 'Hotel planning assistance'
      params.set('request', request)
      window.location.assign('/contact?' + params.toString())
      return
    }

    window.location.assign(packagesPath + '?' + params.toString())
  }

  return (
    <div className="search-panel">
      <div className="booking-tabs" role="tablist" aria-label="What are you planning?">
        {bookingCategories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            id={'booking-tab-' + id}
            className={category === id ? 'booking-tab is-active' : 'booking-tab'}
            type="button"
            role="tab"
            aria-selected={category === id}
            aria-controls="booking-search"
            onClick={() => setCategory(id)}
          >
            <Icon size={17} aria-hidden="true" /> {label}
          </button>
        ))}
      </div>
      <form className="search-bar" id="booking-search" role="tabpanel" aria-labelledby={'booking-tab-' + category} onSubmit={searchTrips}>
        <label className="search-field">
          <span><MapPin size={15} aria-hidden="true" /> Destination</span>
          <select name="destination" value={destination} onChange={(event) => setDestination(event.target.value)} required>
            <option value="" disabled>Where would you like to go?</option>
            {destinations.map(({ name }) => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
        <label className="search-field">
          <span><CalendarDays size={15} aria-hidden="true" /> Travel date</span>
          <input type="date" name="date" min={earliestTravelDate} value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label className="search-field">
          <span><Users size={15} aria-hidden="true" /> Travellers</span>
          <select name="travellers" value={travellers} onChange={(event) => setTravellers(event.target.value)}>
            <option value="1">1 traveller</option>
            <option value="2">2 travellers</option>
            <option value="3">3 travellers</option>
            <option value="4">4 travellers</option>
            <option value="5">5+ travellers</option>
          </select>
        </label>
        <button className="button button-orange search-submit" type="submit">
          <Search size={18} aria-hidden="true" /> Search
        </button>
      </form>
    </div>
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

const travelExperiences = [
  { title: 'Mountain adventures', copy: 'Follow highland trails, hill towns and open Himalayan skies.', image: 'photo-1464822759023-fed622ff2c3b', href: '/destinations-in-india/himachal-pradesh' },
  { title: 'Coastal slow living', copy: 'Trade the clock for warm water, local food and easy-going shores.', image: 'photo-1512343879784-a960bf40e7f2', href: '/destinations/goa' },
  { title: 'A touch of royal', copy: 'Take the long way through Rajasthan’s forts, palaces and old cities.', image: 'photo-1477587458883-47145ed94245', href: '/destinations-in-india/rajasthan' },
]

const seasonalJourneys = [
  { title: 'Himalayan hideaways', season: 'For crisp mountain air', image: 'photo-1626621341517-bbf3d9990a23', destination: 'Himachal Pradesh' },
  { title: 'Kerala, by water', season: 'For slower days', image: 'photo-1602216056096-3b40cc0c9944', destination: 'Kerala' },
  { title: 'The Goa coastline', season: 'For sea-side escapes', image: 'photo-1512343879784-a960bf40e7f2', destination: 'Goa' },
]

const galleryImages = [
  { image: 'photo-1477587458883-47145ed94245', alt: 'Historic palace architecture in Rajasthan' },
  { image: 'photo-1602216056096-3b40cc0c9944', alt: 'A boat on Kerala backwaters' },
  { image: 'photo-1512343879784-a960bf40e7f2', alt: 'Palm-lined beach in Goa' },
  { image: 'photo-1626621341517-bbf3d9990a23', alt: 'Mountain scenery in Himachal Pradesh' },
  { image: 'photo-1564507592333-c60657eea523', alt: 'The Taj Mahal in Agra' },
]

function NewsletterSignup({ apiUrl }) {
  const [status, setStatus] = React.useState('idle')
  const [message, setMessage] = React.useState('')

  async function subscribe(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch(apiUrl + '/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: 'Newsletter subscription request. The traveller explicitly opted in to receive occasional travel updates.',
        }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'We could not submit your request. Please try again.')
      setStatus('success')
      setMessage('Thanks — your request has been recorded.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'We could not reach our travel team. Please try again.')
    }
  }

  return (
    <section className="coastal-newsletter">
      <div className="newsletter-copy">
        <span className="eyebrow">A LITTLE INSPIRATION, NOW AND THEN</span>
        <h2>Good journeys<br /><em>start with a note.</em></h2>
        <p>Request occasional travel inspiration and hear from us about newsletter availability.</p>
        <p className="newsletter-disclosure">Requests are recorded through our enquiry service; there is no automated mailing list yet.</p>
      </div>
      <form className="newsletter-form" onSubmit={subscribe}>
        <label>Your name<input name="name" autoComplete="name" required minLength="2" maxLength="80" placeholder="How should we address you?" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required maxLength="254" placeholder="you@example.com" /></label>
        <label className="newsletter-consent"><input name="consent" type="checkbox" required /> <span>I’m happy for Royal Yatri to contact me about travel updates.</span></label>
        {message && <p className={'form-message form-message-' + (status === 'error' ? 'error' : 'success')} role="status">{message}</p>}
        <button className="button button-orange" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending request…' : 'Request updates'} <ArrowRight size={17} aria-hidden="true" />
        </button>
      </form>
    </section>
  )
}

function HomeFaqSection() {
  return (
    <section className="section coastal-faq" id="faqs">
      <div className="faq-heading">
        <span className="eyebrow">GOOD TO KNOW</span>
        <h2>A few things you might wonder.</h2>
        <p>Need a hand with something else? <a href="/contact">Talk to our travel team.</a></p>
      </div>
      <div className="faq-list">
        {faqs.slice(0, 4).map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<ChevronRight size={18} aria-hidden="true" /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function HomePage({ tours, error, loading, apiUrl = '/api' }) {
  const reduceMotion = useReducedMotion()
  const revealProps = reduceMotion ? {} : {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.55, ease: 'easeOut' },
  }
  const trustPoints = [
    { icon: ShieldCheck, title: 'Thoughtful planning', copy: 'Trips shaped around what matters to you.' },
    { icon: Headphones, title: 'Real people, here to help', copy: 'Speak directly with our trip-planning team.' },
    { icon: BadgeCheck, title: 'Clear trip details', copy: 'Know what is included before you enquire.' },
    { icon: Sparkles, title: 'Made for discovery', copy: 'Find the places and moments beyond the obvious.' },
  ]

  return (
    <LazyMotion features={domAnimation}>
      <div className="coastal-home">
      <section className="coastal-hero" aria-labelledby="hero-title">
        <img className="coastal-hero-image" src={imageUrl(homeHeroImage, 1440)}
          srcSet={[640, 960, 1440, 1920].map((width) => imageUrl(homeHeroImage, width) + ' ' + width + 'w').join(', ')}
          sizes="100vw" alt="Travellers walking together through a dramatic mountain landscape" fetchPriority="high" />
        <div className="coastal-hero-content">
          <div>
            <span className="coastal-hero-badge"><Sparkles size={14} aria-hidden="true" /> TRAVEL <i /> EXPLORE <i /> DISCOVER</span>
            <p className="coastal-hero-kicker">The world, on your terms</p>
            <h1 id="hero-title">India tours<br /><em>made for you.</em></h1>
            <p className="coastal-hero-description">Explore India with private tours, family holidays and tailor-made itineraries. Plan a trip at your pace, from forts in Rajasthan to backwaters in Kerala.</p>
            <div className="home-hero-actions">
              <a className="button button-orange" href={packagesPath}>Explore India tour packages <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="coastal-hero-link" href="/destinations-in-india">Explore destinations <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="coastal-hero-note"><MapPin size={15} aria-hidden="true" /> The Himalayas, India</div>
      </section>

      <section className="search-wrap coastal-search-wrap" aria-label="Find a trip">
        <SearchBar />
      </section>

      <HomeSupport />

      <section className="coastal-trust" aria-label="What to expect">
        {trustPoints.map(({ icon: Icon, title, copy }) => (
          <div className="coastal-trust-item" key={title}>
            <span className="coastal-trust-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
            <span><strong>{title}</strong><small>{copy}</small></span>
          </div>
        ))}
      </section>

      <m.section className="section coastal-destinations" {...revealProps} id="destinations">
        <SectionHeading eyebrow="PLACES THAT STAY WITH YOU" title="Popular destinations" copy="Handpicked places for your next unforgettable journey." link="Explore every destination" href="/destinations-in-india" />
        <div className="coastal-destination-grid">
          {destinations.map((place, index) => (
            <m.a className={'coastal-destination-card coastal-destination-card-' + (index + 1)} href={place.href} key={place.name}
              whileHover={reduceMotion ? undefined : { y: -5 }} transition={{ duration: 0.2 }}>
              <img src={imageUrl(place.image, 900)} alt={place.name + ': ' + place.detail} loading="lazy" />
              <span className="coastal-destination-overlay">
                <span className="coastal-destination-location"><MapPin size={13} aria-hidden="true" /> India</span>
                <strong>{place.name}</strong>
                <small>{place.detail}</small>
                <span className="coastal-destination-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
              </span>
            </m.a>
          ))}
        </div>
      </m.section>

      <m.section className="section home-packages coastal-packages" {...revealProps} id="packages">
        <SectionHeading eyebrow="MADE FOR YOUR NEXT GREAT STORY" title="Featured tour packages" copy="Explore the route and day-by-day plan before you request a quote." link="All tour packages" href={packagesPath} />
        <FeaturedPackageCards />
      </m.section>

      <section className="section coastal-live-catalogue">
        <SectionHeading eyebrow="MORE WAYS TO GET AWAY" title="Journeys from our catalogue" copy="Browse available itineraries, then ask our team about dates and a tailored quote." link="View all packages" href={packagesPath} />
        <TourGrid tours={tours} error={error} loading={loading} limit={3} />
      </section>

      <m.section className="section coastal-experiences" {...revealProps} id="travel-experiences">
        <SectionHeading eyebrow="FIND YOUR KIND OF ADVENTURE" title="Travel your way" copy="From mountain trails to slow afternoons by the sea, choose the feeling you want to take home." />
        <div className="coastal-experience-grid">
          {travelExperiences.map((experience) => (
            <a className="coastal-experience-card" href={experience.href} key={experience.title}>
              <img src={imageUrl(experience.image, 880)} alt="" loading="lazy" />
              <span className="coastal-experience-copy"><small>THE EXPERIENCE</small><strong>{experience.title}</strong><span>{experience.copy}</span><b>Explore this journey <ArrowUpRight size={15} aria-hidden="true" /></b></span>
            </a>
          ))}
        </div>
      </m.section>

      <m.section className="section home-destinations coastal-regions" {...revealProps}>
        <figure className="home-destination-spotlight">
          <a className="home-destination-photo" href="/destinations/goa/south-goa">
            <img src="/images/seo/palolem.jpg" alt="Palolem Beach on Goa’s palm-fringed coastline" loading="lazy" />
            <span>Palolem Beach, Goa <ArrowUpRight size={15} aria-hidden="true" /></span>
          </a>
        </figure>
        <div className="home-destination-copy">
          <span className="eyebrow">ONE COUNTRY, MANY WORLDS</span>
          <h2>Explore India<br /><em>by region.</em></h2>
          <nav className="home-region-links" aria-label="Regions of India">
            {destinationRegions.map((region) => (
              <a key={region.slug} href={destinationRegionPath(region)}>{region.name}<ArrowUpRight size={15} aria-hidden="true" /></a>
            ))}
          </nav>
          <a className="text-link" href="/destinations-in-india">See all destinations <Arrow /></a>
        </div>
      </m.section>

      <section className="section coastal-why" id="why-royal-yatra">
        <SectionHeading eyebrow="THE ROYAL YATRI DIFFERENCE" title="Travel, with the details taken care of." copy="A little local insight and a lot of thoughtful planning make room for the moments that matter." />
        <div className="coastal-why-grid">
          <article><span><MapPin size={21} aria-hidden="true" /></span><h3>Local perspective</h3><p>Thoughtful recommendations help you connect with the places and people you meet.</p></article>
          <article><span><Check size={21} aria-hidden="true" /></span><h3>Clear from the start</h3><p>Review your itinerary and trip details before you decide what works for you.</p></article>
          <article><span><Headphones size={21} aria-hidden="true" /></span><h3>Personal support</h3><p>Talk through your plans with a real person who can help shape your journey.</p></article>
        </div>
      </section>

      <m.section className="section coastal-offers" {...revealProps} id="seasonal-journeys">
        <SectionHeading eyebrow="A GOOD TIME TO GET AWAY" title="Seasonal journey ideas" copy="A few ways to make the most of your next escape. Ask us about dates and availability." />
        <div className="coastal-offer-grid">
          {seasonalJourneys.map((journey) => (
            <a className="coastal-offer-card" href={'/contact?destination=' + encodeURIComponent(journey.destination) + '&request=' + encodeURIComponent('Ask about seasonal travel dates')} key={journey.title}>
              <img src={imageUrl(journey.image, 800)} alt="" loading="lazy" />
              <span className="coastal-offer-copy"><small>{journey.season}</small><strong>{journey.title}</strong><span>Ask about availability <ArrowUpRight size={15} aria-hidden="true" /></span></span>
            </a>
          ))}
        </div>
      </m.section>

      <section className="section international-showcase coastal-international">
        <div>
          <span className="eyebrow">FURTHER AFIELD</span>
          <h2>There’s more out there.</h2>
          <p>Find your next destination across Asia, the Middle East or Europe.</p>
          <a className="button button-light" href={internationalPath}>Explore international tours <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="world-destinations">
          {internationalDestinations.map((place) => (
            <a href={place.path} key={place.path}><span>{place.title}</span><ArrowUpRight size={16} aria-hidden="true" /></a>
          ))}
        </div>
      </section>

      <m.section className="section coastal-testimonials" {...revealProps} id="traveller-stories">
        <div className="coastal-testimonial-intro">
          <span className="eyebrow">TRAVELLER STORIES</span>
          <h2>Your journey<br /><em>could be next.</em></h2>
          <p>We’re gathering verified guest feedback before publishing reviews. Have travelled with us? We’d love to hear from you.</p>
          <a className="text-link" href="/contact?request=Share%20traveller%20feedback">Share your experience <Arrow /></a>
        </div>
        <div className="coastal-testimonial-note">
          <div className="coastal-story-icon"><MessageCircle size={25} aria-hidden="true" /></div>
          <p>Every trip has a story. We’ll share our guests’ words here as soon as they’re ready.</p>
          <span>Real experiences, shared with permission.</span>
        </div>
      </m.section>

      <section className="section coastal-gallery">
        <SectionHeading eyebrow="A GLIMPSE OF WHAT’S OUT THERE" title="Postcards from the road" copy="A little inspiration from places you could soon call your own." link="Browse destinations" href="/destinations-in-india" />
        <div className="coastal-gallery-grid">
          {galleryImages.map((item) => (
            <a href="/destinations-in-india" key={item.image} aria-label={item.alt}>
              <img src={imageUrl(item.image, 700)} alt={item.alt} loading="lazy" />
              <span><ArrowUpRight size={18} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>

      <HomeFaqSection />
      <NewsletterSignup apiUrl={apiUrl} />
        <Callout />
      </div>
    </LazyMotion>
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
  const normalizedDestination = destination?.trim().toLowerCase()
  const visibleTours = destination
    ? tours.filter((tour) => {
      const details = (tour.region + ' ' + tour.name).toLowerCase()
      return details.includes(normalizedDestination) ||
        normalizedDestination.split(/\s+/).some((term) => term.length > 3 && details.includes(term))
    })
    : tours
  const page = findTravelPage(packagesPath)
  const relatedTrips = page.links.filter((path) => !packageTopicPaths.has(path)).map(findTravelPage)
  const enquiryQuery = new URLSearchParams()

  for (const field of ['destination', 'month', 'date', 'travellers', 'request']) {
    const value = search.get(field)
    if (value) enquiryQuery.set(field, value)
  }

  return (
    <>
      <Breadcrumbs page={page} />
      <PageHero eyebrow="JOURNEYS ACROSS INDIA" title={page.title} copy={page.description} image="/amber-fort-hero.webp" />
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
      <PageHero eyebrow="A LITTLE ABOUT US" title={<>Meet your India<br /><em>travel team.</em></>}
        copy="We're a small team of curious people who believe the best way to know India is to take your time." image="/amber-fort-hero.webp" />
      <section className="story-section about-story">
        <div className="story-image">
          <img src={imageUrl('photo-1599661046827-dacff0c0f09a', 1100)} alt="Ornate architecture in Jaipur" loading="lazy" />
        </div>
        <div className="story-copy">
          <span className="eyebrow">WHY WE DO THIS</span>
          <h2>Good travel is<br /><em>all about people.</em></h2>
          <p>Royal Yatri started with a simple idea: travel should open doors, not just tick boxes. Today, we bring together local hosts, thoughtful planners and travellers ready to look a little closer.</p>
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
  const email = search.get('email')?.trim().slice(0, 254) || ''
  const places = [...new Set([
    ...destinations.map(({ name }) => name),
    ...internationalDestinations.map(({ title }) => title),
    destination,
  ])].filter(Boolean)
  const draft = [
    ['Request', search.get('request')],
    ['Tour', search.get('tour')],
    ['Preferred month', search.get('month')],
    ['Travel date', search.get('date')],
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
      <PageHero eyebrow="LET'S TALK ABOUT YOUR TRIP" title={<>Plan your<br /><em>India trip.</em></>}
        copy="Tell us what you're dreaming up. A real person from our team will help you find your way." image="/amber-fort-hero.webp" />
      <section className="section contact-section">
        <div className="contact-intro">
          <span className="eyebrow">WE'RE ALL EARS</span>
          <h2>What's on your<br /><em>mind?</em></h2>
          <p>Share a little about your trip and we'll take it from there.</p>
          <div className="contact-detail"><span>EMAIL</span><a href={supportEmailUrl}>{supportEmail}</a></div>
          <div className="contact-detail">
            <span>WHATSAPP</span>
            <a href={supportWhatsAppUrl} target="_blank" rel="noopener noreferrer">Message us at {supportWhatsAppNumber}</a>
          </div>
          <div className="contact-detail"><span>OFFICE HOURS</span><strong>Monday to Saturday, 9am&ndash;6pm IST</strong></div>
        </div>
        <form className="contact-form" onSubmit={submitEnquiry}>
          <div className="form-row">
            <label>Your name<input name="name" autoComplete="name" required minLength="2" maxLength="80" placeholder="How should we call you?" /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" defaultValue={email} required maxLength="254" placeholder="you@example.com" /></label>
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
      <PageHero eyebrow="THE LITTLE DETAILS" title={<>India tour<br /><em>planning FAQs.</em></>}
        copy="The practical bits, answered. Still curious? We are only a message away." image="/amber-fort-hero.webp" />
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
