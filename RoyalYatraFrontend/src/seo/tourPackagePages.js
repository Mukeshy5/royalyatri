export const packagesPath = '/india-tour-packages'
export const privateToursPath = '/india-private-tours'
export const luxuryToursPath = '/luxury-tours-india'
export const familyToursPath = '/family-tour-packages-india'

export const tourPackagePages = [
  {
    path: packagesPath,
    title: 'India Tour Packages',
    description: 'Explore India holiday and travel packages for families, couples and private groups. Compare itineraries by destination, pace and budget.',
  },
  {
    path: '/travel-booking-india',
    title: 'India Travel Booking',
    description: 'Start a travel enquiry for India with your route, dates and group size. Discuss stays, transfers and sightseeing together.',
    requestLabel: 'Start a travel enquiry',
    planning: {
      title: 'What to share before booking',
      items: ['List your arrival and departure cities and any dates that are fixed.', 'Tell us which services you need together and what you have already arranged.'],
    },
    links: [packagesPath, '/hotel-booking-india', '/taxi-booking-india'],
  },
  {
    path: '/hotel-booking-india',
    title: 'Hotel Booking India',
    description: 'Request hotel options for your India itinerary by city, dates, room requirements and budget.',
    requestLabel: 'Request hotel options',
    planning: {
      title: 'Plan your stays',
      items: ['Share the check-in and check-out dates for each stop, plus the number of rooms and guests.', 'Mention room preferences such as breakfast, step-free access or connecting rooms.'],
    },
    links: ['/travel-booking-india', luxuryToursPath, familyToursPath],
  },
  {
    path: '/india-holiday-packages',
    title: 'India Holiday Packages',
    description: 'Plan an India holiday around the time you have and the pace you prefer, from a short city break to a longer trip with room to relax.',
    requestLabel: 'Plan an India holiday',
    planning: {
      title: 'Choose your holiday style',
      items: ['For a short break, start with one base and use day trips for nearby sights.', 'For a longer holiday, choose a few stops and leave time for rest between travel days.'],
    },
    links: [packagesPath, '/india', '/customized-tour-packages'],
  },
  {
    path: '/india-luxury-tours',
    title: 'India Luxury Tours',
    description: 'Plan India luxury tours with heritage stays, private transfers and expert local guides. Build a comfortable, tailor-made journey around the destinations and experiences you prefer.',
    requestLabel: 'Request a luxury itinerary',
    planning: {
      title: 'Choose your luxury travel style',
      items: ['Share the heritage stays and room features that matter most to you.', 'Choose where you would like private transfers, local guides and extra time to explore.'],
    },
    links: [luxuryToursPath, packagesPath, '/hotel-booking-india'],
  },
  {
    path: '/private-tours-india',
    title: 'Private Tours in India: Guides and Day Routes',
    description: 'Plan private sightseeing by city, with time for local guides, monuments and transfers that suit your group.',
    requestLabel: 'Request a private tour',
    planning: {
      title: 'Plan private sightseeing',
      items: ['Send the city, dates and monuments you would like to include.', 'List any pickup times or walks you want to keep flexible, and tell us where a guide would help.'],
    },
    links: [privateToursPath, packagesPath, '/customized-tour-packages'],
  },
  {
    path: '/private-tours-in-india',
    excludeFromMenu: true,
    title: 'Private Tours in India, Your Way',
    description: 'Explore private tours in India with a flexible itinerary, your own travel dates and experiences selected for your group.',
    requestLabel: 'Plan a private India tour',
    planning: {
      title: 'Make the itinerary your own',
      items: ['Choose the stops, travel pace and accommodation style for your group.', 'Share any interests, accessibility needs or special requests before the trip is planned.'],
    },
    links: ['/private-tours-india', privateToursPath, packagesPath],
  },
  {
    path: '/places-to-visit-in-india',
    title: 'Best Places to Visit in India',
    description: 'Start with a shortlist of destinations such as Jaipur for forts, Agra for Mughal architecture, Goa for the coast and Varanasi for riverfront heritage.',
    requestLabel: 'Plan a destination itinerary',
    planning: {
      title: 'Build a shortlist',
      items: ['Pair Jaipur and Agra if you want to explore historic cities on one route.', 'Choose Goa for coastal time or Varanasi for old-city walks and visits to the ghats.'],
    },
    links: ['/destinations/jaipur', '/destinations/agra', '/destinations/goa', '/destinations/varanasi'],
  },
  {
    path: privateToursPath,
    title: 'Private India Tours: Multi-City Itineraries',
    description: 'Build a private route between cities with accommodation choices, travel days and activities planned around your own group.',
    requestLabel: 'Request a private tour',
    planning: {
      title: 'Build a private itinerary',
      items: ['Share your arrival and departure cities, group size and the places you want to connect.', 'Choose where you prefer rail, private road transfers, or extra nights between stops.'],
    },
    links: [packagesPath, '/customized-tour-packages', '/taxi-booking-india'],
  },
  {
    path: '/india-travel-guide',
    title: 'India Travel Guide',
    description: 'Use this trip-planning guide to connect destinations, allow for travel days and leave time to explore each stop.',
    requestLabel: 'Ask for planning help',
    planning: {
      title: 'Before you finalise the route',
      items: ['Plot arrival and departure points first, then check how long transfers between stops will take.', 'Check opening times for the sights on your list before fixing the order of your days.'],
    },
    links: ['/places-to-visit-in-india', '/things-to-do-in-india', '/india'],
  },
  {
    path: '/customized-tour-packages',
    title: 'Customized Tour Packages',
    description: 'Build a tailored itinerary from your travel dates, interests, preferred stays and budget. Start with a package or send your own route.',
    requestLabel: 'Customize a tour',
    planning: {
      title: 'Shape your itinerary',
      items: ['Share the places and experiences you want to keep, plus the details you can be flexible about.', 'Decide which stays, transfers and guided visits to include in the enquiry.'],
    },
    links: [packagesPath, privateToursPath, '/travel-booking-india'],
  },
  {
    path: '/sightseeing-tours-india',
    title: 'Sightseeing Tour Booking',
    description: 'Request a sightseeing tour around the monuments, museums or neighbourhoods you want to explore in a city.',
    requestLabel: 'Request a sightseeing tour',
    planning: {
      title: 'Plan a day of sightseeing',
      items: ['Share the city, date, pickup point and your must-see stops.', 'Mention whether you prefer a walking route, a local guide or transport between sights.'],
    },
    links: ['/destinations/jaipur', '/golden-triangle-tour', '/taxi-booking-india'],
  },
  {
    path: '/adventure-tours-india',
    title: 'Adventure Activities India',
    description: 'Explore an India itinerary with outdoor activities such as nature walks or trekking, chosen around the interests and experience of your group.',
    requestLabel: 'Request adventure options',
    planning: {
      title: 'Choose your activities',
      items: ['Share the region you want to explore, your dates and the activities that interest you.', 'Mention the experience level of your group and the preferred length and pace of each outing.'],
    },
    links: ['/things-to-do-in-india', '/customized-tour-packages', '/india-travel-guide'],
  },
  {
    path: luxuryToursPath,
    title: 'Luxury Tours in India',
    description: 'Plan a luxury India tour around heritage stays, private transport and local experiences tailored to your interests and pace.',
    requestLabel: 'Request a luxury itinerary',
    planning: {
      title: 'Choose the details that matter',
      items: ['Tell us which heritage hotels, settings or room features would make the trip special.', 'Plan where you want private transfers, local guides and time to explore at your own pace.'],
    },
    links: ['/hotel-booking-india', privateToursPath, packagesPath],
  },
  {
    path: familyToursPath,
    title: 'Family Tour Packages India',
    description: 'Plan an India family holiday with manageable travel days, flexible activities and time together between stops.',
    requestLabel: 'Plan a family tour',
    planning: {
      title: 'Make the route work for everyone',
      items: ['Share the ages of children, room preferences and any accessibility requirements.', 'Choose one or two priorities for each stop so you can keep the rest of the day flexible.'],
    },
    links: ['/india-holiday-packages', '/hotel-booking-india', packagesPath],
  },
  {
    path: '/india-cultural-tours',
    title: 'India Cultural Tours',
    description: 'Build a cultural itinerary around architecture, crafts, food and heritage, with time to explore the communities and traditions behind each stop.',
    requestLabel: 'Plan a cultural tour',
    planning: {
      title: 'Choose a cultural focus',
      items: ['Explore forts and palace architecture in Rajasthan or visit Buddhist heritage sites on a dedicated route.', 'Include time for markets, museums or local craft visits based on what interests your group.'],
    },
    links: ['/states/rajasthan', '/golden-triangle-tour', '/buddhist-tours-in-india'],
  },
  {
    path: '/taxi-booking-india',
    title: 'Taxi Booking India',
    description: 'Request a transfer or private driver for airport pickup, city sightseeing or travel between destinations in India.',
    requestLabel: 'Request a taxi or transfer',
    planning: {
      title: 'What to include in a transfer enquiry',
      items: ['Share your pickup and drop-off locations, date and approximate pickup time.', 'Tell us the number of passengers, luggage and any planned stops.'],
    },
    links: ['/travel-booking-india', '/sightseeing-tours-india', privateToursPath],
  },
  {
    path: '/things-to-do-in-india',
    title: 'Things to Do in India',
    description: 'Find experiences to build into your trip, from old-city walks and markets to heritage visits and outdoor activities.',
    requestLabel: 'Plan your experiences',
    planning: {
      title: 'Put experiences on the itinerary',
      items: ['Choose a few things you care about in each city, such as a market, museum or neighbourhood walk.', 'Leave space for outdoor time or a guided visit and avoid stacking too many activities into one day.'],
    },
    links: ['/sightseeing-tours-india', '/india-cultural-tours', '/adventure-tours-india'],
  },
]

export const priorityTourPackagePages = tourPackagePages.filter((page) => !page.excludeFromMenu)
