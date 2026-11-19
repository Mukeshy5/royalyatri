import { readFile } from 'node:fs/promises'
import { extname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import { canonicalUrl } from './src/seo/canonical.js'
import { escapeHtml, renderPageHead } from './src/seo/head.js'
import { getMetadata } from './src/seo/metadata.js'
import { normalizePath, pagePaths, redirects } from './src/seo/travelPages.js'

const knownPages = new Set(pagePaths)
const seoBlock = /<!-- page-seo:start -->[\s\S]*?<!-- page-seo:end -->/
const rootElement = '<div id="root"></div>'
const apiProxy = { '/api': 'http://localhost:5000' }

function registerPageMiddleware(server, previewDirectory) {
  server.middlewares.use(async (request, response, next) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') return next()

    const url = new URL(request.url, 'http://localhost')
    const pathname = normalizePath(url.pathname)
    const destination = redirects[pathname]
    if (destination) {
      response.writeHead(301, { Location: destination + url.search })
      return response.end()
    }
    if (!previewDirectory) return next()
    if (knownPages.has(pathname)) {
      if (pathname !== '/') request.url = pathname + '/index.html' + url.search
      return next()
    }
    if (
      pathname === '/api' || pathname.startsWith('/api/') || pathname.startsWith('/.') ||
      extname(pathname) || (!request.headers.accept?.includes('text/html') && request.headers.accept !== '*/*')
    ) return next()

    try {
      const page = await readFile(resolve(previewDirectory, '404.html'))
      response.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
      })
      return response.end(request.method === 'HEAD' ? undefined : page)
    } catch (error) {
      return next(error)
    }
  })
}

function travelSeo(verification) {
  let isClientBuild = false

  return {
    name: 'royal-yatri-travel-seo',
    configResolved(config) {
      isClientBuild = config.command === 'build' && !config.build.ssr
    },
    configureServer(server) {
      registerPageMiddleware(server)
    },
    configurePreviewServer(server) {
      registerPageMiddleware(server, resolve(server.config.root, server.config.build.outDir))
    },
    transformIndexHtml() {
      return verification.map(([name, content]) => ({ tag: 'meta', attrs: { name, content } }))
    },
    generateBundle: {
      order: 'post',
      async handler(_options, bundle) {
        if (!isClientBuild) return
        const index = bundle['index.html']
        if (!index || index.type !== 'asset') throw new Error('The Vite build did not emit index.html.')
        const template = index.source.toString()
        if (!seoBlock.test(template) || !template.includes(rootElement)) {
          throw new Error('The SEO template is missing its metadata block or React root.')
        }
        const { renderSitePage } = await import('./src/seo/prerender.jsx')
        const documentFor = (pathname) => template
          .replace(seoBlock, () => renderPageHead(pathname))
          .replace(rootElement, () => '<div id="root">' + renderSitePage(pathname) + '</div>')

        index.source = documentFor('/')
        const emit = (fileName, source) => this.emitFile({ type: 'asset', fileName, source })
        for (const pathname of pagePaths) {
          if (pathname !== '/') emit(pathname.slice(1) + '/index.html', documentFor(pathname))
        }
        emit('404.html', documentFor('/404'))

        const urls = pagePaths
          .map((pathname) => ({ pathname, ...getMetadata(pathname) }))
          .filter(({ pathname, canonical, robots }) => canonical === canonicalUrl(pathname) && !robots.includes('noindex'))
          .map(({ canonical }) => '  <url><loc>' + escapeHtml(canonical) + '</loc></url>')
        emit('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n')

        const rules = Object.entries(redirects).map(([from, to]) => from + ' ' + to + ' 301')
        for (const path of pagePaths) {
          if (path !== '/') rules.push(path + ' ' + path + '/index.html 200')
        }
        emit('_redirects', rules.join('\n') + '\n')
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['GOOGLE_SITE_VERIFICATION', 'BING_SITE_VERIFICATION'])
  const verification = [
    ['google-site-verification', env.GOOGLE_SITE_VERIFICATION],
    ['msvalidate.01', env.BING_SITE_VERIFICATION],
  ].filter(([, value]) => value?.trim())

  return {
    plugins: [react(), tailwindcss(), travelSeo(verification)],
    server: { proxy: apiProxy },
    preview: { proxy: apiProxy },
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              { name: 'react-vendor', test: /[\\/]node_modules[\\/](?:react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
              { name: 'motion', test: /[\\/]node_modules[\\/](?:framer-motion|motion-dom|motion-utils)[\\/]/ },
            ],
          },
        },
      },
    },
  }
})
