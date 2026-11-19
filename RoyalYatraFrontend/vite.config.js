import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import TourPackageLanding from './src/components/seo-pages/TourPackageLanding.jsx'
import { HomePage, SiteLayout } from './src/components/TravelSite.jsx'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import { canonicalUrl } from './src/seo/canonical.js'
import { getMetadata } from './src/seo/metadata.js'
import { getPackageCatalogLink, getPageBreadcrumbs } from './src/seo/seoLandingPages.js'
import { getLandingStructuredData } from './src/seo/structuredData.js'
import { findTravelPage, getLandingAction, normalizePath, pagePaths, redirects } from './src/seo/travelPages.js'
import {
  destinationRegionPath, destinationRegions, destinationStatePages, featuredDestinationPaths,
} from './src/seo/destinationDirectory.js'

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character])
}

function imageUrl(image) {
  if (image.startsWith('/')) return image
  return 'https://images.unsplash.com/' + image + '?auto=format&fit=crop&w=1200&q=85'
}

function renderLandingPage(page, siteUrl) {
  if (page.pageType === 'tour') return renderToStaticMarkup(createElement(TourPackageLanding, { page, siteUrl }))

  if (page.pageType === 'directory') {
    const breadcrumbs = getPageBreadcrumbs(page, findTravelPage)
    const breadcrumbHtml = breadcrumbs.map((breadcrumb, index) => {
      const item = index === breadcrumbs.length - 1
        ? '<span aria-current="page">' + escapeHtml(breadcrumb.label) + '</span>'
        : '<a href="' + escapeHtml(breadcrumb.path) + '">' + escapeHtml(breadcrumb.label) + '</a>'
      return '<li>' + item + '</li>'
    }).join('')
    const regions = destinationRegions.map((region) => {
      const path = destinationRegionPath(region)
      return '<a class="destination-region-card" href="' + path + '"><img src="' +
        escapeHtml(imageUrl(region.image)) + '" alt="' + escapeHtml(region.alt) +
        '" loading="lazy"><span class="destination-region-card-copy"><strong>' +
        escapeHtml(region.name) + '</strong><span>Explore regional guides</span></span></a>'
    }).join('')
    const stateGroups = destinationRegions.map((region) => {
      const path = destinationRegionPath(region)
      const states = destinationStatePages.filter((state) => state.parentPath === path)
        .map((state) => '<a href="' + escapeHtml(state.path) + '">' + escapeHtml(state.breadcrumbLabel ?? state.title) + '</a>').join('')
      return '<section class="directory-state-group"><h3><a href="' + path + '">' +
        escapeHtml(region.name) + '</a></h3><div class="directory-state-links">' + states + '</div></section>'
    }).join('')
    const featured = featuredDestinationPaths.map((path) => {
      const destination = findTravelPage(path)
      return destination
        ? '<a class="destination-directory-card" href="' + escapeHtml(path) +
          '"><span class="eyebrow">DESTINATION GUIDE</span><strong>' +
          escapeHtml(destination.title) + '</strong><span>' +
          escapeHtml(destination.description) + '</span></a>'
        : ''
    }).join('')
    const schema = getLandingStructuredData(page, siteUrl, findTravelPage)
    const jsonLd = schema
      ? '<script type="application/ld+json">' + JSON.stringify(schema).replace(/</g, '\\u003c') + '</script>'
      : ''
    const action = getLandingAction(page)
    return '<article class="destination-directory"><nav class="seo-breadcrumbs" aria-label="Breadcrumb"><ol>' +
      breadcrumbHtml + '</ol></nav><section class="directory-hero"><div><span class="eyebrow">A COUNTRY OF MANY WORLDS</span>' +
      '<h1>' + escapeHtml(page.title) + '</h1><p>' + escapeHtml(page.intro) +
      '</p><a class="button button-orange" href="' + escapeHtml(action.href) + '">' +
      escapeHtml(action.label) + '</a></div><img src="' + escapeHtml(imageUrl(page.heroImage)) +
      '" alt="' + escapeHtml(page.heroAlt) + '" fetchpriority="high"></section>' +
      '<section class="section directory-search-section"><label for="destination-search">Search India destinations</label>' +
      '<input id="destination-search" type="search" placeholder="Try a state, city or region"></section>' +
      '<section class="section"><div class="section-heading"><div><span class="eyebrow">START WITH A REGION</span>' +
      '<h2>Explore by region</h2></div></div><div class="destination-region-grid">' + regions + '</div></section>' +
      '<section class="section"><div class="section-heading"><div><span class="eyebrow">A FEW PLACES TO BEGIN</span>' +
      '<h2>Popular destinations</h2></div></div><div class="destination-directory-grid">' + featured + '</div></section>' +
      '<section class="section"><div class="section-heading"><div><span class="eyebrow">STATE-BY-STATE PLANNING</span>' +
      '<h2>Explore by state</h2></div></div>' + stateGroups + '</section>' +
      '<section class="section directory-cta-section"><div><span class="eyebrow">PLAN AT YOUR PACE</span>' +
      '<h2>Need help connecting the route?</h2><p>Share your dates, starting city and interests to discuss a practical itinerary.</p>' +
      '</div><a class="button button-light" href="' + escapeHtml(action.href) + '">' +
      escapeHtml(action.label) + '</a></section>' + jsonLd + '</article>'
  }

  const action = getLandingAction(page)
  const packageLink = getPackageCatalogLink(page)
  const breadcrumbs = getPageBreadcrumbs(page, findTravelPage)
  const breadcrumbHtml = breadcrumbs.map((breadcrumb, index) => {
    const item = index === breadcrumbs.length - 1
      ? '<span aria-current="page">' + escapeHtml(breadcrumb.label) + '</span>'
      : '<a href="' + escapeHtml(breadcrumb.path) + '">' + escapeHtml(breadcrumb.label) + '</a>'
    return '<li>' + item + '</li>'
  }).join('')
  const highlights = page.highlights.map(({ title, detail }) =>
    '<article class="seo-highlight-card"><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(detail) + '</p></article>',
  ).join('')
  const experiences = page.experiences.map((experience) => '<li>' + escapeHtml(experience) + '</li>').join('')
  const travelInfo = [
    ['Best time to visit', page.bestTime],
    ['How to reach', page.reach],
    ['Nearest airport', page.airport],
    ['Nearest railway station', page.railway],
    ['Local culture and food', page.culture],
    ['Recommended duration', page.duration],
    ['Where to stay', page.stay],
    ['Getting around', page.transport],
  ].filter(([, detail]) => detail).map(([title, detail]) =>
    '<article><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(detail) + '</p></article>',
  ).join('')
  const officialReference = page.officialReference
    ? '<p class="seo-official-reference">Check current visitor information with <a href="' +
      escapeHtml(page.officialReference[1]) + '">' + escapeHtml(page.officialReference[0]) + '</a>.</p>'
    : ''
  const faqs = page.faqs.map(({ question, answer }) =>
    '<details><summary>' + escapeHtml(question) + '</summary><p>' + escapeHtml(answer) + '</p></details>',
  ).join('')
  const related = page.links.map((href) => {
    const relatedPage = findTravelPage(href)
    return '<a href="' + escapeHtml(href) + '"><strong>' +
      escapeHtml(relatedPage?.title ?? href) + '</strong><span aria-hidden="true">&#8599;</span></a>'
  }).join('')
  const schema = getLandingStructuredData(page, siteUrl, findTravelPage)
  const jsonLd = schema
    ? '<script type="application/ld+json">' + JSON.stringify(schema).replace(/</g, '\\u003c') + '</script>'
    : ''
  const audienceLabel = page.pageType === 'attraction' ? 'LANDMARK GUIDE'
    : page.pageType === 'foreign' ? 'TRAVEL TO INDIA'
      : page.pageType === 'india' ? 'INDIA TRAVEL GUIDE' : 'EXPLORE INDIA'

  const credit = page.heroCredit
  const caption = credit ? '<figcaption><a href="' + escapeHtml(credit.source) + '">Photo by ' +
    escapeHtml(credit.author) + '</a> &middot; <a href="' + escapeHtml(credit.licenseUrl) + '">' +
    escapeHtml(credit.license) + '</a></figcaption>' : ''

  return '<article class="seo-landing-page">' +
    '<nav class="seo-breadcrumbs" aria-label="Breadcrumb"><ol>' + breadcrumbHtml + '</ol></nav>' +
    '<section class="seo-landing-hero"><div class="seo-landing-hero-copy"><span class="eyebrow">' +
      audienceLabel + '</span><h1>' + escapeHtml(page.title) + '</h1><p>' + escapeHtml(page.intro) +
      '</p><a class="button button-orange" href="' + escapeHtml(action.href) + '">' +
      escapeHtml(action.label) + ' <span aria-hidden="true">&#8599;</span></a></div>' +
      '<figure class="seo-hero-media"><img src="' + escapeHtml(imageUrl(page.heroImage)) + '" alt="' + escapeHtml(page.heroAlt) +
      '" fetchpriority="high">' + caption + '</figure></section>' +
    '<section class="section seo-content-section"><div class="section-heading"><div><span class="eyebrow">' +
      'A THOUGHTFUL FIRST LOOK</span><h2>Places to explore</h2></div></div>' +
      '<div class="seo-highlight-grid">' + highlights + '</div></section>' +
    '<section class="section seo-experiences-section"><span class="eyebrow">MAKE THE MOST OF YOUR TIME</span>' +
      '<h2>Things to do and experiences</h2><ul class="seo-experiences-list">' + experiences + '</ul></section>' +
    '<section class="section seo-travel-info-section"><span class="eyebrow">PLAN YOUR VISIT</span>' +
      '<h2>Travel information</h2><div class="seo-travel-info-grid">' + travelInfo + '</div>' + officialReference + '</section>' +
    '<section class="section seo-package-section"><div><span class="eyebrow">PLAN WITH ROYAL YATRA</span>' +
      '<h2>Tour packages and experiences</h2><p>' + escapeHtml(page.tourInfo) +
      '</p><a class="button button-dark" href="' + escapeHtml(packageLink.href) + '">' + escapeHtml(packageLink.label) + '</a>' +
      '<a class="seo-secondary-cta" href="' + escapeHtml(action.href) + '">' +
      escapeHtml(action.label) + '</a></div></section>' +
    '<section class="section seo-faq-section"><span class="eyebrow">HELPFUL DETAILS</span>' +
      '<h2>Frequently asked questions</h2><div class="seo-faq-list">' + faqs + '</div></section>' +
    (related ? '<section class="section travel-links-section seo-related-section"><span class="eyebrow">' +
      'CONTINUE EXPLORING</span><h2>Related destinations and tours</h2><div class="travel-links">' +
      related + '</div></section>' : '') + jsonLd + '</article>'
}

function travelSeo(siteUrl) {
  let outputDirectory
  let isBuild

  function routeRequests(server, serveHtml = false) {
    server.middlewares.use((request, response, next) => {
      if (request.method !== 'GET' && request.method !== 'HEAD') return next()
      const url = new URL(request.url, 'http://localhost')
      const pathname = normalizePath(url.pathname)
      const destination = redirects[pathname]
      if (destination) {
        response.writeHead(301, { Location: destination + url.search })
        response.end()
        return
      }
      if (serveHtml && pathname !== '/' && pagePaths.includes(pathname)) {
        request.url = pathname + '/index.html' + url.search
      }
      next()
    })
  }

  return {
    name: 'royal-yatra-travel-seo',
    configResolved(config) {
      isBuild = config.command === 'build' && !config.build.ssr
      outputDirectory = resolve(config.root, config.build.outDir)
    },
    configureServer(server) {
      routeRequests(server)
    },
    configurePreviewServer(server) {
      routeRequests(server, true)
    },
    async closeBundle() {
      if (!isBuild) return
      const indexFile = resolve(outputDirectory, 'index.html')
      const template = await readFile(indexFile, 'utf8')

      for (const path of pagePaths) {
        const page = findTravelPage(path)
        const metadata = getMetadata(path, siteUrl)
        const canonical = metadata.canonical ? '<link rel="canonical" href="' + escapeHtml(metadata.canonical) + '">' : ''
        const head = '<title>' + escapeHtml(metadata.title) + '</title>' + canonical
        const description = '<meta name="description" content="' + escapeHtml(metadata.description) + '">'
        const social = [
          '<meta property="og:type" content="website">',
          '<meta property="og:title" content="' + escapeHtml(metadata.title) + '">',
          '<meta property="og:description" content="' + escapeHtml(metadata.description) + '">',
          metadata.canonical ? '<meta property="og:url" content="' + escapeHtml(metadata.canonical) + '">' : '',
          metadata.image ? '<meta property="og:image" content="' + escapeHtml(metadata.image) + '">' : '',
          '<meta name="twitter:card" content="' + (metadata.image ? 'summary_large_image' : 'summary') + '">',
          '<meta name="twitter:title" content="' + escapeHtml(metadata.title) + '">',
          '<meta name="twitter:description" content="' + escapeHtml(metadata.description) + '">',
          metadata.image ? '<meta name="twitter:image" content="' + escapeHtml(metadata.image) + '">' : '',
          metadata.robots ? '<meta name="robots" content="' + escapeHtml(metadata.robots) + '">' : '',
        ].join('')
        let html = template
          .replace(/<title>[^<]*<\/title>/, head)
          .replace(/<meta name="description"[^>]*>/, description)
          .replace('</head>', social + '</head>')

        if (path === '/') {
          const content = renderToStaticMarkup(createElement(SiteLayout, { pathname: path }, createElement(HomePage, { tours: [] })))
          html = html.replace('<div id="root"></div>', '<div id="root">' + content + '</div>')
        } else if (page) {
          let content
          if (page.pageType) {
            content = renderLandingPage(page, siteUrl)
          } else {
            const links = page.links.map((href) => {
              const relatedPage = findTravelPage(href)
              return '<li><a href="' + escapeHtml(href) + '">' +
                escapeHtml(relatedPage?.title ?? href) + '</a></li>'
            }).join('')
            const pageAction = page.action || page.requestLabel ? getLandingAction(page) : undefined
            const action = pageAction
              ? '<p><a href="' + escapeHtml(pageAction.href) + '">' + escapeHtml(pageAction.label) + '</a></p>'
              : ''
            const planning = page.planning
              ? '<section><h2>' + escapeHtml(page.planning.title) + '</h2><ul>' +
                page.planning.items.map((item) => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul></section>'
              : ''
            const related = links ? '<ul>' + links + '</ul>' : ''
            content = '<main class="section"><h1>' + escapeHtml(page.title) + '</h1><p>' +
              escapeHtml(page.description) + '</p>' + action + planning + related + '</main>'
          }
          html = html.replace('<div id="root"></div>', '<div id="root">' + content + '</div>')
        }

        const file = path === '/' ? indexFile : resolve(outputDirectory, '.' + path, 'index.html')
        await mkdir(dirname(file), { recursive: true })
        await writeFile(file, html)
      }

      const rules = Object.entries(redirects).map(([source, path]) => source + ' ' + path + ' 301')
      for (const path of pagePaths) {
        if (path !== '/') rules.push(path + ' ' + path + '/index.html 200')
      }
      await writeFile(resolve(outputDirectory, '_redirects'), rules.join('\n') + '\n')

      if (siteUrl) {
        const entries = pagePaths
          .filter((path) => !findTravelPage(path)?.canonicalPath && !getMetadata(path, siteUrl).robots?.includes('noindex'))
          .map((path) => '<url><loc>' + escapeHtml(canonicalUrl(path, siteUrl)) + '</loc></url>')
        await writeFile(resolve(outputDirectory, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join('') + '</urlset>\n')
        await writeFile(resolve(outputDirectory, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' +
          canonicalUrl('/sitemap.xml', siteUrl) + '\n')
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const siteUrl = (process.env.SITE_URL || loadEnv(mode, process.cwd(), 'SITE_URL').SITE_URL || '').trim()
  canonicalUrl('/', siteUrl)
  return {
    plugins: [react(), tailwindcss(), travelSeo(siteUrl)],
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl) },
    server: { proxy: { '/api': 'http://localhost:5000' } },
    preview: { proxy: { '/api': 'http://localhost:5000' } },
  }
})
