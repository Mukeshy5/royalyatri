import NavigationMenu from './NavigationMenu.jsx'

const indiaLinks = [
  ['India Tour Packages', '/india-tour-packages'],
  ['India Travel Booking', '/travel-booking-india'],
  ['Hotel Booking India', '/hotel-booking-india'],
  ['India Holiday Packages', '/india-holiday-packages'],
  ['India Luxury Tours', '/india-luxury-tours'],
  ['Private Tours in India', '/private-tours-india'],
  ['Best Places to Visit in India', '/places-to-visit-in-india'],
  ['Private Tours in India', '/india-private-tours'],
  ['India Travel Guide', '/india-travel-guide'],
  ['Customized Tour Packages', '/customized-tour-packages'],
  ['Sightseeing Tour Booking', '/sightseeing-tours-india'],
  ['Adventure Activities India', '/adventure-tours-india'],
  ['Luxury Tours in India', '/luxury-tours-india'],
  ['Family Tour Packages India', '/family-tour-packages-india'],
  ['India Cultural Tours', '/india-cultural-tours'],
  ['Taxi Booking India', '/taxi-booking-india'],
  ['Things to Do in India', '/things-to-do-in-india'],
]

export default function IndiaMenu({ pathname, activePanel, setActivePanel }) {
  const active = pathname === '/india' || pathname.startsWith('/india/') ||
    indiaLinks.some(([, path]) => path === pathname)

  return (
    <NavigationMenu label="India" id="india-navigation" active={active}
      activePanel={activePanel} setActivePanel={setActivePanel}
    >
      <a className="navigation-menu-directory" href="/india" aria-current={pathname === '/india' ? 'page' : undefined}>
        Explore India <span aria-hidden="true">&#8599;</span>
      </a>
      <ul className="india-menu-links" aria-label="India travel and booking options">
        {indiaLinks.map(([label, path]) => (
          <li key={path}>
            <a href={path} aria-current={pathname === path ? 'page' : undefined}>{label}</a>
          </li>
        ))}
      </ul>
    </NavigationMenu>
  )
}
