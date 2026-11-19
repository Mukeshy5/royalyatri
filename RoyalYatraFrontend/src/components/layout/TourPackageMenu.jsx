import { featuredTourPackages } from '../../seo/featuredTourPackages.js'
import { packagesPath } from '../../seo/tourPackagePages.js'
import NavigationMenu from './NavigationMenu.jsx'

export default function TourPackageMenu({ pathname, activePanel, setActivePanel, label = 'Tour package' }) {
  const active = pathname === packagesPath || featuredTourPackages.some(({ path }) => path === pathname)

  return (
    <NavigationMenu label={label} id="tour-package-navigation" active={active}
      activePanel={activePanel} setActivePanel={setActivePanel}
    >
      <ul className="tour-package-menu-links" aria-label="Tour packages">
        {featuredTourPackages.map(({ path, menuLabel }) => (
          <li key={path}>
            <a href={path} aria-current={pathname === path ? 'page' : undefined}>{menuLabel}</a>
          </li>
        ))}
      </ul>
    </NavigationMenu>
  )
}
