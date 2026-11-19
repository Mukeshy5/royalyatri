import { destinationRegionPath, destinationRegions, destinationStatePages } from '../../seo/destinationDirectory.js'
import NavigationMenu from './NavigationMenu.jsx'

const directoryPath = '/destinations-in-india'

const destinationGroups = destinationRegions.map((region) => {
  const path = destinationRegionPath(region)
  return {
    name: region.name,
    path,
    states: destinationStatePages.filter(({ parentPath }) => parentPath === path),
  }
})

export default function DestinationMenu({ pathname, activePanel, setActivePanel, label = 'Destinations in India' }) {
  const active = pathname.startsWith('/destinations/') ||
    pathname === directoryPath || pathname.startsWith(directoryPath + '/')

  return (
    <NavigationMenu label={label} id="destination-navigation" active={active}
      activePanel={activePanel} setActivePanel={setActivePanel}
    >
      <a className="navigation-menu-directory" href={directoryPath}
        aria-current={pathname === directoryPath ? 'page' : undefined}
      >
        Explore all destinations <span aria-hidden="true">&#8599;</span>
      </a>
      <div className="navigation-menu-groups">
        {destinationGroups.map(({ name, path, states }) => (
          <div className="navigation-menu-group" key={path}>
            <a href={path} aria-current={pathname === path ? 'page' : undefined}>{name}</a>
            <ul>
              {states.map((state) => (
                <li key={state.path}>
                  <a href={state.path} aria-current={pathname === state.path ? 'page' : undefined}>
                    {state.breadcrumbLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </NavigationMenu>
  )
}
