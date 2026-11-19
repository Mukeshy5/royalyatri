import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SiteRoutes from './SiteRoutes.jsx'
import { applyPageHead } from './seo/head.js'
import { normalizePath, packagesPath, redirects } from './seo/travelPages.js'

const apiUrl = import.meta.env.VITE_API_BASE_URL || '/api'

export default function App() {
  const location = useLocation()
  const pathname = normalizePath(location.pathname)
  const redirect = redirects[pathname]
  const needsTours = pathname === '/' || pathname === packagesPath || pathname === '/destinations-in-india'
  const [catalog, setCatalog] = useState(null)
  const tourResults = {
    tours: catalog?.tours ?? [],
    error: catalog?.error ?? '',
    loading: catalog === null,
  }

  useEffect(() => {
    if (!redirect) applyPageHead(pathname)
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

  return <SiteRoutes pathname={pathname} locationSearch={location.search} tourResults={tourResults} apiUrl={apiUrl} />
}
