export const siteOrigin = 'https://royalyatri.com'
export const siteName = 'Royal Yatri'
export const siteLanguage = 'en'

export function canonicalUrl(pathname) {
  return new URL(pathname, siteOrigin).href
}
