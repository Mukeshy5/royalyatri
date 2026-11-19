import { packagesPath, priorityTourPackagePages } from '../../seo/tourPackagePages.js'
import NavigationMenu from './NavigationMenu.jsx'

const indiaLinks = priorityTourPackagePages.filter(({ path }) => path !== packagesPath)

export default function IndiaMenu({ label = 'India Trip', pathname, activePanel, setActivePanel }) {
  const active = indiaLinks.some(({ path }) => path === pathname)

  return (
    <NavigationMenu label={label} id="india-navigation" active={active}
      activePanel={activePanel} setActivePanel={setActivePanel} keepOpenOnHoverClick
    >
      <ul className="india-menu-links" aria-label="India travel and booking options">
        {indiaLinks.map(({ title, path }) => (
          <li key={path}>
            <a href={path} aria-current={pathname === path ? 'page' : undefined}>{title}</a>
          </li>
        ))}
      </ul>
    </NavigationMenu>
  )
}
