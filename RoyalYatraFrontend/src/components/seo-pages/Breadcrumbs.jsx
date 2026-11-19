import { getPageBreadcrumbs } from '../../seo/seoLandingPages.js'
import { findTravelPage } from '../../seo/travelPages.js'

export default function Breadcrumbs({ page }) {
  const items = getPageBreadcrumbs(page, findTravelPage)

  return (
    <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map(({ label, path }) => (
          <li key={path}>
            {path === page.path ? <span aria-current="page">{label}</span> : <a href={path}>{label}</a>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
