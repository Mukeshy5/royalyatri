export function canonicalUrl(pathname, siteUrl) {
  if (!siteUrl?.trim()) return undefined

  const origin = new URL(siteUrl.trim())
  if (
    !['http:', 'https:'].includes(origin.protocol) ||
    origin.pathname !== '/' ||
    origin.username ||
    origin.password ||
    origin.search ||
    origin.hash
  ) {
    throw new Error('SITE_URL must be an HTTP or HTTPS origin.')
  }

  return new URL(pathname, origin).href
}
