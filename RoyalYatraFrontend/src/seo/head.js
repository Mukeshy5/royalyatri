import { siteName } from './canonical.js'
import { getMetadata } from './metadata.js'
import { getStructuredData } from './structuredData.js'

function pageHead(pathname) {
  const metadata = getMetadata(pathname)
  const meta = [
    ['name', 'description', metadata.description],
    ['name', 'robots', metadata.robots],
    ...(metadata.canonical ? [
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', siteName],
      ['property', 'og:locale', 'en_IN'],
      ['property', 'og:title', metadata.title],
      ['property', 'og:description', metadata.description],
      ['property', 'og:url', metadata.canonical],
      ['property', 'og:image', metadata.image],
      ['property', 'og:image:alt', metadata.imageAlt],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', metadata.title],
      ['name', 'twitter:description', metadata.description],
      ['name', 'twitter:image', metadata.image],
      ['name', 'twitter:image:alt', metadata.imageAlt],
    ] : []),
  ]
  const tags = meta.map(([attribute, key, value]) => ['meta', { [attribute]: key, content: value }])
  if (metadata.canonical) tags.push(['link', { rel: 'canonical', href: metadata.canonical }])
  const schema = getStructuredData(pathname, metadata)
  if (schema) tags.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema).replace(/</g, '\\u003c')])
  return { title: metadata.title, tags }
}

export function applyPageHead(pathname) {
  const { title, tags } = pageHead(pathname)
  document.title = title
  for (const node of document.head.querySelectorAll('[data-page-seo]')) node.remove()
  for (const [tag, attributes, content] of tags) {
    const element = document.createElement(tag)
    element.setAttribute('data-page-seo', '')
    for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value)
    if (content) element.textContent = content
    document.head.append(element)
  }
}

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character])
}

export function renderPageHead(pathname) {
  const { title, tags } = pageHead(pathname)
  return [
    '<title>' + escapeHtml(title) + '</title>',
    ...tags.map(([tag, attributes, content]) => {
      const attributesHtml = Object.entries(attributes)
        .map(([key, value]) => ' ' + key + '="' + escapeHtml(value) + '"')
        .join('')
      return '<' + tag + ' data-page-seo' + attributesHtml + (tag === 'script' ? '>' + content + '</script>' : ' />')
    }),
  ].join('\n    ')
}
