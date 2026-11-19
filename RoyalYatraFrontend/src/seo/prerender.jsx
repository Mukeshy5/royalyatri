import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import SiteRoutes from '../SiteRoutes.jsx'

const tourResults = { tours: [], error: '', loading: true }

export function renderSitePage(pathname) {
  return renderToStaticMarkup(
    <StaticRouter location={pathname}>
      <SiteRoutes pathname={pathname} tourResults={tourResults} />
    </StaticRouter>,
  )
}
