import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LandingIntro from './components/seo-pages/LandingIntro.jsx'
import {
  AboutPage, ContactPage, FAQPage, HomePage, NotFoundPage, SiteLayout, ToursPage,
} from './components/TravelSite.jsx'
import { getMetadata } from './seo/metadata.js'
import { normalizePath, packagesPath, redirects, travelPages } from './seo/travelPages.js'

const apiUrl = import.meta.env.VITE_API_BASE_URL || '/api'
const previousPaths = { '/industries': '/india', '/enquire': '/contact' }
const landingPages = travelPages.filter(({ path }) => path !== packagesPath)

function setHeadAttribute(selector, tag, name, value, keyAttribute = tag === 'meta' ? 'name' : 'rel') {
  const existing = document.head.querySelector(selector)
  if (!value) {
    existing?.remove()
    return
  }
  const element = existing ?? document.createElement(tag)
  element.setAttribute(keyAttribute, name)
  element.setAttribute(tag === 'meta' ? 'content' : 'href', value)
  if (!existing) document.head.append(element)
}

export default function App() {
  const location = useLocation()
  const pathname = normalizePath(location.pathname)
  const search = new URLSearchParams(location.search)
  const redirect = redirects[pathname] ?? previousPaths[pathname]
  const needsTours = pathname === '/' || pathname === packagesPath || pathname === '/destinations-in-india'
  const [catalog, setCatalog] = useState(null)
  const tourResults = {
    tours: catalog?.tours ?? [],
    error: catalog?.error ?? '',
    loading: catalog === null,
  }

  useEffect(() => {
    if (redirect) return
    const metadata = getMetadata(pathname, import.meta.env.VITE_SITE_URL)
    document.title = metadata.title
    setHeadAttribute('meta[name="description"]', 'meta', 'description', metadata.description)
    setHeadAttribute('meta[name="robots"]', 'meta', 'robots', metadata.robots)
    setHeadAttribute('link[rel="canonical"]', 'link', 'canonical', metadata.canonical)
    setHeadAttribute('meta[property="og:title"]', 'meta', 'og:title', metadata.title, 'property')
    setHeadAttribute('meta[property="og:description"]', 'meta', 'og:description', metadata.description, 'property')
    setHeadAttribute('meta[property="og:url"]', 'meta', 'og:url', metadata.canonical, 'property')
    setHeadAttribute('meta[property="og:image"]', 'meta', 'og:image', metadata.image, 'property')
    setHeadAttribute('meta[name="twitter:card"]', 'meta', 'twitter:card', metadata.image ? 'summary_large_image' : 'summary')
    setHeadAttribute('meta[name="twitter:title"]', 'meta', 'twitter:title', metadata.title)
    setHeadAttribute('meta[name="twitter:description"]', 'meta', 'twitter:description', metadata.description)
    setHeadAttribute('meta[name="twitter:image"]', 'meta', 'twitter:image', metadata.image)
  }, [pathname, redirect])

  useEffect(() => {
    if (!needsTours) return
    const controller = new AbortController()
    fetch(apiUrl + '/packages', { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Tour listings are temporarily unavailable.')
        const result = await response.json()
        if (!Array.isArray(result.data)) throw new Error(result.message || 'Tour listings are temporarily unavailable.')
        return result.data
      })
      .then((tours) => {
        if (!controller.signal.aborted) setCatalog({ tours })
      })
      .catch((error) => {
        if (!controller.signal.aborted) {
          setCatalog({ error: error.message || 'Tour listings are temporarily unavailable.' })
        }
      })
    return () => controller.abort()
  }, [needsTours])

  if (redirect) {
    return <Navigate replace to={{ pathname: redirect, search: location.search, hash: location.hash }} />
  }

  return (
    <SiteLayout pathname={pathname}>
      <Routes>
        <Route path="/" element={<HomePage {...tourResults} apiUrl={apiUrl} />} />
        <Route path={packagesPath} caseSensitive element={<ToursPage {...tourResults} search={search} />} />
        <Route path="/about" caseSensitive element={<AboutPage />} />
        <Route path="/contact" caseSensitive element={<ContactPage key={location.search} search={search} apiUrl={apiUrl} />} />
        <Route path="/faq" caseSensitive element={<FAQPage />} />
        {landingPages.map((page) => (
          <Route key={page.path} path={page.path} caseSensitive element={
            <LandingIntro page={page} {...(page.path === '/destinations-in-india' ? tourResults : {})} />
          } />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}
