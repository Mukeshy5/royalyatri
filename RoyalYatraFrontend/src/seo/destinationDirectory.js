import { getPageBreadcrumbs } from './seoLandingPages.js'

const directoryPath = '/destinations-in-india'
const packagePath = '/india-tour-packages'

export const destinationRegions = [
  {
    slug: 'north-india',
    name: 'North India',
    image: 'photo-1626621341517-bbf3d9990a23',
    alt: 'Himalayan foothills and mountain scenery in North India',
    intro: 'Plan North India around its hill landscapes, historic cities and long-distance connections. Choose a compact route and leave realistic time for roads, rail changes and altitude.',
    highlights: [
      { title: 'Mountain escapes', detail: 'Himachal Pradesh and Uttarakhand offer hill towns, trekking gateways and seasonal high-altitude routes.' },
      { title: 'Historic cities', detail: 'Rajasthan and Uttar Pradesh connect forts, palaces, Mughal-era sites and pilgrimage centres.' },
      { title: 'A practical route', detail: 'Delhi is a common transport gateway, but the best arrival point depends on the state and season.' },
    ],
    experiences: ['Pair neighbouring destinations rather than crossing the region for a short stop.', 'Check mountain road and weather conditions close to travel.', 'Respect local customs at active religious sites and protected areas.'],
    bestTime: 'October to March suits many plains and heritage routes. Hill destinations have varied seasons, and monsoon or winter conditions can affect roads and outdoor activities.',
    reach: 'Delhi, Jaipur, Chandigarh and Dehradun are useful gateways for different North India routes. Rail, air and road connections vary by destination; plan the final transfer as part of the itinerary.',
    culture: 'The region is culturally diverse, with distinct languages, food traditions, architecture and religious practices across each state.',
    duration: 'Allow at least a week for a focused multi-state route; mountain circuits and pilgrimage journeys often need additional days.',
    links: [],
  },
  {
    slug: 'south-india',
    name: 'South India',
    image: 'photo-1602216056096-3b40cc0c9944',
    alt: 'Kerala backwaters in South India',
    intro: 'South India brings together temple cities, coffee and tea country, coastlines and historic centres. Build a route around one or two states so you can enjoy the journeys between them.',
    highlights: [
      { title: 'Backwaters and hill country', detail: 'Kerala combines waterways, plantation landscapes and coastal stays across different travel zones.' },
      { title: 'Temple and heritage cities', detail: 'Tamil Nadu, Karnataka and Andhra Pradesh have distinct architectural and pilgrimage routes.' },
      { title: 'Coast and cities', detail: 'From Goa to Visakhapatnam, coastal stays work best with local weather and sea conditions in mind.' },
    ],
    experiences: ['Compare rail and road time between coastal cities and hill destinations.', 'Check temple entry, dress and photography guidance before a visit.', 'Choose locally hosted food, craft and nature experiences with clear arrangements.'],
    bestTime: 'October to March is generally drier across many routes, but hill, coast and monsoon conditions vary by state. Check local forecasts before setting outdoor plans.',
    reach: 'Bengaluru, Chennai, Kochi, Hyderabad and Goa are among the region’s air and rail gateways. Choose the gateway closest to your first stop and confirm onward travel.',
    culture: 'Languages, cuisine and customs differ substantially between states; local guides can add useful context at heritage and religious sites.',
    duration: 'A week works for a focused state itinerary. Allow longer when combining hill country, coast and multiple historic cities.',
    links: [],
  },
  {
    slug: 'east-india',
    name: 'East India',
    image: 'photo-1500530855697-b586d89ba3ee',
    alt: 'Green landscape in East India',
    intro: 'East India includes Himalayan foothills, Buddhist heritage, river landscapes and forest country. Travel times and seasonal access can vary, so keep the itinerary flexible.',
    highlights: [
      { title: 'Himalayan and tea landscapes', detail: 'Sikkim and West Bengal offer mountain gateways and tea-growing regions with seasonal road conditions.' },
      { title: 'Buddhist heritage', detail: 'Bihar is a starting point for important Buddhist sites and historic learning centres.' },
      { title: 'Local culture', detail: 'Each state has its own languages, festivals, food and community traditions; plan visits respectfully.' },
    ],
    experiences: ['Confirm permits and access rules for border or protected areas before booking.', 'Use local transport providers for remote mountain and forest routes.', 'Build extra time around monsoon weather and long road transfers.'],
    bestTime: 'October to April is often preferred for many routes, though mountain and forest regions have their own seasons. Check local access and weather notices.',
    reach: 'Kolkata and Bagdogra are common air gateways; New Jalpaiguri is a useful rail connection for several North Bengal and Sikkim routes.',
    culture: 'The region includes many linguistic and Indigenous communities. Follow local guidance on photography, sacred spaces and community visits.',
    duration: 'Plan a week for one state or a focused heritage circuit. Remote mountain routes may need extra nights and weather buffers.',
    links: [],
  },
  {
    slug: 'west-india',
    name: 'West India',
    image: 'photo-1512343879784-a960bf40e7f2',
    alt: 'West India coastline and beach landscape',
    intro: 'West India combines beach regions, historic cities, desert and salt landscapes. Choose a seasonal route and account for the distance between coastal, urban and interior destinations.',
    highlights: [
      { title: 'Coastal breaks', detail: 'Goa and Maharashtra offer beaches and coastal towns with seasonal sea and service conditions.' },
      { title: 'Heritage and pilgrimage', detail: 'Gujarat and Maharashtra link historic architecture, temples, forts and major cities.' },
      { title: 'Road and rail options', detail: 'Mumbai, Ahmedabad and Pune connect to different state routes by air, rail and road.' },
    ],
    experiences: ['Choose beach activities according to lifeguard flags and local sea advice.', 'Allow time for intercity journeys, especially when combining coast and inland sites.', 'Check festival dates and seasonal access before setting a fixed itinerary.'],
    bestTime: 'October to March is popular for many routes. Monsoon conditions affect coastal travel, while desert and inland visits need heat-aware planning.',
    reach: 'Mumbai, Goa and Ahmedabad are major gateways. Select flights and trains around your first destination and planned return point.',
    culture: 'The region is diverse, from Gujarati food traditions to Marathi city life and Goa’s layered coastal heritage.',
    duration: 'Five to ten days suits a focused state route; allow longer for a multi-state journey.',
    links: [],
  },
  {
    slug: 'central-india',
    name: 'Central India',
    image: 'photo-1516026672322-bc52d61a55d5',
    alt: 'Forest and wildlife habitat in Central India',
    intro: 'Central India is known for historic sites, pilgrimage cities and protected forest landscapes. Park visits and rural transfers need planning around local operating seasons.',
    highlights: [
      { title: 'Historic places', detail: 'Madhya Pradesh connects archaeological sites, heritage towns and temples across a large state.' },
      { title: 'Wildlife landscapes', detail: 'National parks have their own permit rules, opening seasons and responsible viewing practices.' },
      { title: 'Regional gateways', detail: 'Bhopal, Indore and Jabalpur serve different parts of the state; choose based on your route.' },
    ],
    experiences: ['Book authorised protected-area visits and do not expect wildlife sightings to be guaranteed.', 'Balance long drives with overnight stops.', 'Check site opening information and local conditions before travel.'],
    bestTime: 'October to March is generally more comfortable for heritage sightseeing. Wildlife park seasons vary, and summer heat can be intense.',
    reach: 'Bhopal, Indore and Jabalpur have air and rail connections. The most useful arrival city depends on the monument, park or town you plan to visit.',
    culture: 'Central India’s cultural mix includes tribal communities, historic cities, pilgrimage traditions and regional foodways.',
    duration: 'Plan five to eight days for a focused route; a wildlife circuit may need extra nights and confirmed park permits.',
    links: [],
  },
]

const stateData = [
  {
    slug: 'rajasthan', name: 'Rajasthan', region: 'north-india', image: 'photo-1477587458883-47145ed94245', alt: 'Rajasthan fort and palace architecture',
    intro: 'Rajasthan’s desert landscapes, historic cities and fort architecture make it a rewarding road and rail journey. Jaipur, Udaipur, Jodhpur and Jaisalmer each offer a different base and pace.',
    places: [['Jaipur', 'Amber Fort, City Palace and the walled city'], ['Udaipur', 'Lake Pichola, City Palace and old-city lanes'], ['Jaisalmer', 'The fort, havelis and Thar Desert edge']],
    experiences: ['Explore a fort with a local guide and allow time for the surrounding neighbourhood.', 'Plan a desert excursion with a licensed local operator and clear safety arrangements.', 'Try regional thali, dal baati churma and market snacks from reputable kitchens.'],
    bestTime: 'October to March is generally more comfortable for city sightseeing. Desert nights can be cool in winter; summer afternoons are very hot.',
    airport: 'Jaipur International Airport is a common gateway; Jodhpur, Udaipur and Jaisalmer also have airports with route availability that varies.',
    railway: 'Jaipur Junction, Jodhpur Junction, Udaipur City and Jaisalmer stations serve different circuits.',
    culture: 'Rajasthani food, textiles, music and craft traditions vary by region. Ask before photographing people or private ceremonies.',
    duration: 'Seven to ten days gives time for a connected Jaipur-Jodhpur-Udaipur route; add days for Jaisalmer or Ranthambore.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'heritage-places', 'temples'],
  },
  {
    slug: 'himachal-pradesh', name: 'Himachal Pradesh', region: 'north-india', image: 'photo-1626621341517-bbf3d9990a23', alt: 'Himalayan mountain scenery in Himachal Pradesh',
    intro: 'Himachal Pradesh spans accessible hill towns, river valleys and high mountain terrain. Choose one corridor and check road, weather and altitude conditions before adding remote stops.',
    places: [['Manali', 'Beas Valley, old Manali and mountain routes'], ['Shimla', 'The Ridge, colonial-era centre and rail heritage'], ['Dharamshala', 'Kangra Valley, monasteries and mountain views']],
    experiences: ['Take time to acclimatise before high-altitude walks.', 'Use registered local guides for trekking and outdoor activities.', 'Plan road journeys in daylight and follow local weather advice.'],
    bestTime: 'Spring and autumn are popular for many valleys. Winter brings snow to some areas; monsoon rain can disrupt roads and trails.',
    airport: 'Bhuntar (Kullu-Manali), Kangra/Gaggal and Shimla airports have limited or route-dependent services; Chandigarh is a wider gateway.',
    railway: 'Kalka connects with the Shimla narrow-gauge railway; Pathankot and Chandigarh are useful rail gateways for other routes.',
    culture: 'Himachali food, temple traditions and village customs differ by valley. Respect local guidance in forests, temples and community spaces.',
    duration: 'Five to eight days works for a single valley; add time for Spiti and other high-altitude road circuits.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'hill-stations'],
  },
  {
    slug: 'uttar-pradesh', name: 'Uttar Pradesh', region: 'north-india', image: 'photo-1564507592333-c60657eea523', alt: 'Taj Mahal in Agra, Uttar Pradesh',
    intro: 'Uttar Pradesh brings together Agra’s monuments, Varanasi’s riverfront and important pilgrimage and heritage cities. Distances are substantial, so plan a corridor rather than a rushed state-wide loop.',
    places: [['Agra', 'Taj Mahal, Agra Fort and the Yamuna setting'], ['Varanasi', 'Ghats, old-city lanes and nearby Sarnath'], ['Lucknow', 'Historic architecture, food and cultural districts']],
    experiences: ['Use local guides at major monuments and active religious sites.', 'Follow site-specific dress, photography and entry guidance.', 'Leave buffer time for traffic and crowds around pilgrimage areas.'],
    bestTime: 'October to March is generally more comfortable for outdoor visits. Summer heat can be severe and monsoon rain affects travel.',
    airport: 'Lucknow, Varanasi and Agra have airports; check current routes and choose the gateway closest to your first stop.',
    railway: 'Agra Cantt, Varanasi Junction, Lucknow Charbagh and Prayagraj Junction serve different itineraries.',
    culture: 'The state’s food, languages and religious traditions vary by city. Visit sacred places respectfully and ask before taking photographs.',
    duration: 'Five to seven days can cover Agra and Varanasi with transfers; allow longer for Lucknow, Ayodhya or Prayagraj.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'weekend-trips', 'heritage-places', 'temples'],
  },
  {
    slug: 'uttarakhand', name: 'Uttarakhand', region: 'north-india', image: 'photo-1500530855697-b586d89ba3ee', alt: 'Mountain valley in Uttarakhand',
    intro: 'Uttarakhand ranges from the Ganges towns of Rishikesh and Haridwar to hill stations and Himalayan pilgrimage routes. Road and weather conditions should shape the itinerary.',
    places: [['Rishikesh', 'Riverfront, yoga centres and nearby foothill trails'], ['Nainital', 'Lake views and Kumaon hill routes'], ['Kedarnath', 'A seasonal pilgrimage requiring advance route planning']],
    experiences: ['Check official pilgrimage, permit and weather guidance before mountain travel.', 'Use authorised providers for river activities and follow safety briefings.', 'Keep a flexible day for road delays and altitude adjustment.'],
    bestTime: 'March to June and September to November are popular for many lower-altitude routes. Monsoon landslides and winter snow can affect access.',
    airport: 'Jolly Grant Airport near Dehradun is the main air gateway for many routes; Pantnagar serves parts of Kumaon.',
    railway: 'Haridwar, Dehradun, Rishikesh and Kathgodam are useful rail gateways for different parts of the state.',
    culture: 'Garhwali and Kumaoni traditions, pilgrimage customs and local food differ by valley. Follow site rules and community guidance.',
    duration: 'Five to seven days suits a single valley or foothill route; pilgrimage circuits need more time and current access checks.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'temples', 'hill-stations'],
  },
  {
    slug: 'kerala', name: 'Kerala', region: 'south-india', image: 'photo-1602216056096-3b40cc0c9944', alt: 'Kerala backwaters and traditional boat',
    intro: 'Kerala links coastal cities, backwaters and tea-growing hills. Kochi, Munnar and Alleppey make a practical first route, but transfers between them take time.',
    places: [['Munnar', 'Tea hills, viewpoints and nature areas'], ['Alleppey', 'Backwater canals and village landscapes'], ['Kochi', 'Fort Kochi, waterfront and heritage streets']],
    experiences: ['Compare overnight houseboats with day cruises and shore-based backwater visits.', 'Allow a full transfer window for winding hill roads.', 'Try Kerala meals and seafood through clearly priced local restaurants.'],
    bestTime: 'October to March is generally drier. Monsoon months bring heavy rain and can affect roads, boat operations and outdoor plans.',
    airport: 'Cochin International Airport is a common gateway; Calicut and Trivandrum serve northern and southern routes.',
    railway: 'Ernakulam Junction, Alappuzha, Kozhikode and Thiruvananthapuram Central connect different corridors.',
    culture: 'Malayalam-speaking communities have distinct food, arts and festival traditions. Ask before photographing people or ceremonies.',
    duration: 'Seven to ten days can combine Kochi, Munnar and the backwaters at a measured pace.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'hill-stations', 'beach-holidays'],
  },
  {
    slug: 'karnataka', name: 'Karnataka', region: 'south-india', image: 'photo-1477587458883-47145ed94245', alt: 'Historic stone architecture in Karnataka',
    intro: 'Karnataka spans Bengaluru’s urban culture, Mysuru’s palace heritage, Hampi’s ruins and Western Ghats landscapes. Choose a route that accounts for long distances between regions.',
    places: [['Mysuru', 'Palace precincts, markets and nearby heritage'], ['Hampi', 'Vijayanagara-era ruins and river landscapes'], ['Coorg', 'Coffee country, forest roads and hill stays']],
    experiences: ['Explore Hampi on foot or by bicycle with respect for protected ruins.', 'Try a Mysuru market walk and regional meals.', 'Choose authorised guides for wildlife and plantation visits.'],
    bestTime: 'October to February is often comfortable for heritage and city visits. Monsoon conditions affect hill roads and outdoor activities.',
    airport: 'Kempegowda International Airport in Bengaluru is the main gateway; Mangaluru and Hubballi serve other routes.',
    railway: 'Bengaluru City, Mysuru Junction, Hospet Junction and Hubballi Junction are useful rail stations.',
    culture: 'Kannada-speaking regions include varied food, music, craft and temple traditions; local customs change between coast and plateau.',
    duration: 'Seven to ten days can cover Bengaluru, Mysuru and one heritage or hill region.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'weekend-trips', 'heritage-places', 'temples', 'hill-stations', 'beach-holidays'],
  },
  {
    slug: 'tamil-nadu', name: 'Tamil Nadu', region: 'south-india', image: 'photo-1524492412937-b28074a5d7da', alt: 'South Indian temple architecture in Tamil Nadu',
    intro: 'Tamil Nadu combines temple cities, coastal towns, hill stations and historic architecture. Plan visits around temple timings and realistic road or rail transfers.',
    places: [['Madurai', 'Meenakshi Amman Temple and the old city'], ['Chennai', 'Coastal districts, museums and city neighbourhoods'], ['Ooty', 'Nilgiri hills and the mountain railway region']],
    experiences: ['Follow temple dress, entry and photography rules.', 'Use a guide to understand temple architecture and local history.', 'Pair long-distance visits with overnight stays rather than rushed day trips.'],
    bestTime: 'November to February is generally more comfortable for many plains routes. Hill weather differs, and the northeast monsoon can bring rain later in the year.',
    airport: 'Chennai, Madurai and Coimbatore airports serve different itineraries.',
    railway: 'Chennai Central, Madurai Junction, Coimbatore Junction and Tiruchirappalli Junction are major rail gateways.',
    culture: 'Tamil language, classical arts, temple customs and regional cuisines are central to the state’s cultural life.',
    duration: 'Seven to ten days can cover Chennai, Madurai and one hill or coastal region.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'heritage-places', 'temples', 'hill-stations', 'beach-holidays'],
  },
  {
    slug: 'andhra-pradesh', name: 'Andhra Pradesh', region: 'south-india', image: 'photo-1500530855697-b586d89ba3ee', alt: 'Coastal and hill landscape in Andhra Pradesh',
    intro: 'Andhra Pradesh offers coastal city breaks, hill landscapes and major pilgrimage destinations. Route planning should account for heat, temple access and distances between regions.',
    places: [['Visakhapatnam', 'Coast, city viewpoints and nearby valleys'], ['Tirupati', 'A major pilgrimage gateway with scheduled visitor arrangements'], ['Araku Valley', 'Eastern Ghats scenery and a mountain rail route']],
    experiences: ['Check official darshan and accommodation information before a Tirupati visit.', 'Use local guidance for Araku and other hill routes.', 'Explore coastal food traditions through established local restaurants.'],
    bestTime: 'October to February is generally more comfortable for outdoor visits. Summer heat and monsoon conditions can affect travel.',
    airport: 'Visakhapatnam, Vijayawada and Tirupati airports serve different state corridors.',
    railway: 'Visakhapatnam Junction, Tirupati, Vijayawada Junction and Araku stations are useful route connections.',
    culture: 'Telugu language, coastal cuisine, temple traditions and craft vary across the state.',
    duration: 'Five to eight days suits a focused coast, pilgrimage or hill itinerary.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'heritage-places', 'temples', 'hill-stations', 'beach-holidays'],
  },
  {
    slug: 'bihar', name: 'Bihar', region: 'east-india', image: 'photo-1500530855697-b586d89ba3ee', alt: 'Buddhist heritage landscape in Bihar',
    intro: 'Bihar is a significant destination for Buddhist heritage, ancient learning centres and pilgrimage travel. Build a route between Bodh Gaya, Rajgir and Nalanda with time for local transfers.',
    places: [['Bodh Gaya', 'Mahabodhi Temple complex and international monasteries'], ['Nalanda', 'Archaeological remains and museum collections'], ['Rajgir', 'Hills, heritage sites and pilgrimage places']],
    experiences: ['Visit sacred spaces quietly and follow local dress and photography guidance.', 'Use a guide to connect Buddhist sites with their history.', 'Check museum and monument opening details before setting a day route.'],
    bestTime: 'October to March is usually more comfortable for heritage visits. Summer is very hot and monsoon rain may affect road plans.',
    airport: 'Gaya Airport serves Bodh Gaya when scheduled services operate; Patna is a broader air gateway.',
    railway: 'Gaya Junction, Patna Junction, Rajgir and Hajipur connect different routes.',
    culture: 'Bihar’s food and cultural life reflect its historic cities, religious traditions and local language communities.',
    duration: 'Four to six days can cover Bodh Gaya, Rajgir and Nalanda with measured transfers.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'heritage-places', 'temples'],
  },
  {
    slug: 'sikkim', name: 'Sikkim', region: 'east-india', image: 'photo-1595815771614-ade9d7c41bd7', alt: 'Himalayan mountains in Sikkim',
    intro: 'Sikkim’s mountain towns, monasteries and high valleys call for careful pacing. Road conditions, altitude, permits and seasonal closures can change the route.',
    places: [['Gangtok', 'Monasteries, viewpoints and a lively hill-town centre'], ['Pelling', 'Mountain views and heritage monasteries'], ['Lachung', 'A seasonal base for North Sikkim routes']],
    experiences: ['Acclimatise gradually and ask a clinician about altitude risks where relevant.', 'Check permits, road access and local advisories before travelling north.', 'Choose registered local operators for remote valleys.'],
    bestTime: 'March to May and October to November are popular for clearer views. Monsoon rain and winter snow can affect roads and access.',
    airport: 'Pakyong Airport has limited, weather-dependent service; Bagdogra is the broader air gateway.',
    railway: 'New Jalpaiguri is the main rail gateway, followed by a road transfer into Sikkim.',
    culture: 'Sikkim is home to Nepali, Bhutia and Lepcha communities and Buddhist traditions; visit monasteries respectfully.',
    duration: 'Five to seven days can cover Gangtok and one additional area; remote North Sikkim trips need more time and confirmed access.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'hill-stations'],
  },
  {
    slug: 'nagaland', name: 'Nagaland', region: 'east-india', image: 'photo-1500530855697-b586d89ba3ee', alt: 'Green hills in Nagaland',
    intro: 'Nagaland travel centres on its hill towns, community traditions and outdoor landscapes. Plan around current permits, road conditions and the timing of local festivals.',
    places: [['Kohima', 'War cemetery, local markets and nearby Dzukou trailheads'], ['Dzukou Valley', 'A high-altitude valley reached by a guided trek'], ['Mokokchung', 'Ao Naga cultural centres and mountain scenery']],
    experiences: ['Check current entry and permit requirements with official sources.', 'Use local guides for treks and community visits.', 'Ask permission before photographing residents, ceremonies or private spaces.'],
    bestTime: 'October to May is generally preferred for many outdoor routes. Monsoon rain can affect trails and mountain roads.',
    airport: 'Dimapur Airport is the main air gateway; Jorhat in Assam can be an alternative for some routes.',
    railway: 'Dimapur is the principal rail gateway; other trailheads require substantial road travel.',
    culture: 'Nagaland is home to diverse Naga communities, each with distinct traditions, languages and etiquette. Visit with respect and local guidance.',
    duration: 'Five to seven days suits Kohima and a nearby trek; longer routes need additional road days.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'weekend-trips', 'hill-stations'],
  },
  {
    slug: 'jharkhand', name: 'Jharkhand', region: 'east-india', image: 'photo-1516026672322-bc52d61a55d5', alt: 'Forest and waterfall landscape in Jharkhand',
    intro: 'Jharkhand offers forest landscapes, waterfalls, pilgrimage centres and mineral-region cities. Seasonal water levels and road transfers should guide the route.',
    places: [['Ranchi', 'Waterfalls, city markets and nearby plateau scenery'], ['Deoghar', 'Baidyanath Dham and pilgrimage facilities'], ['Betla', 'A gateway to Palamau forest and wildlife landscapes']],
    experiences: ['Check waterfall access and water conditions locally.', 'Use authorised guides and park services in protected areas.', 'Learn about Adivasi communities through respectful, locally led experiences.'],
    bestTime: 'October to March is generally comfortable. Waterfalls are strongest in monsoon months, when heavy rain can affect road safety.',
    airport: 'Birsa Munda Airport in Ranchi is the main air gateway; Deoghar also has an airport with route availability to check.',
    railway: 'Ranchi, Deoghar, Daltonganj/Medininagar and Tatanagar serve different regions.',
    culture: 'Jharkhand’s Adivasi communities, languages, food and festivals are diverse. Seek locally led interpretation and follow community guidance.',
    duration: 'Four to six days is useful for a focused Ranchi, Deoghar or Palamau route.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'weekend-trips', 'temples'],
  },
  {
    slug: 'west-bengal', name: 'West Bengal', region: 'east-india', image: 'photo-1477587458883-47145ed94245', alt: 'Historic architecture in West Bengal',
    intro: 'West Bengal links Kolkata’s cultural districts with Himalayan hill towns, tea regions, forests and the coast. Distances and seasons vary, so choose a clear travel corridor.',
    places: [['Kolkata', 'Museums, colonial-era districts and Bengali food'], ['Darjeeling', 'Tea gardens, mountain views and the heritage railway'], ['Sundarbans', 'Mangrove waterways visited with authorised operators']],
    experiences: ['Explore Kolkata’s neighbourhoods with a locally informed guide.', 'Check mountain rail and road operations before fixing a Darjeeling schedule.', 'Follow conservation and wildlife rules in the Sundarbans.'],
    bestTime: 'October to March suits many city and heritage visits. Monsoon rain affects hill roads and forest waterways; mountain seasons differ from the plains.',
    airport: 'Netaji Subhas Chandra Bose International Airport serves Kolkata; Bagdogra is the gateway for North Bengal.',
    railway: 'Howrah, Sealdah, New Jalpaiguri, Bolpur Shantiniketan and Digha connect different routes.',
    culture: 'Bengali literature, food, festivals and arts are central to the state’s identity; rural and hill communities have distinct traditions.',
    duration: 'Seven to ten days can combine Kolkata with either the hills or the Sundarbans, not both at a rushed pace.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'heritage-places', 'temples', 'hill-stations', 'beach-holidays'],
  },
  {
    slug: 'goa', name: 'Goa', region: 'west-india', image: 'photo-1512343879784-a960bf40e7f2', alt: 'Goa beach and Arabian Sea coastline',
    intro: 'Goa is a coastal state with distinct North and South Goa bases, inland heritage sites and a lively food culture. Select one area as a base before adding cross-state day trips.',
    places: [['North Goa', 'Beach areas, markets and coastal forts'], ['South Goa', 'Quieter stretches of coastline and village routes'], ['Panaji and Old Goa', 'Neighbourhoods, churches and cultural heritage']],
    experiences: ['Choose beaches according to current sea conditions and lifeguard advice.', 'Explore Old Goa and Panaji beyond the resort areas.', 'Confirm transport and seasonal service availability before a late-night return.'],
    bestTime: 'November to February is generally drier and busiest. Monsoon brings heavy rain and rough seas; follow local water safety guidance.',
    airport: 'Manohar International Airport at Mopa and Goa International Airport at Dabolim serve different parts of the state.',
    railway: 'Thivim and Madgaon are useful rail gateways for north and south Goa respectively.',
    culture: 'Goa’s Konkani, coastal, Catholic and Hindu traditions are reflected in its food, architecture and festivals.',
    duration: 'Four to seven days allows time for a coastal base, Panaji and heritage visits.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'beach-holidays'],
  },
  {
    slug: 'maharashtra', name: 'Maharashtra', region: 'west-india', image: 'photo-1500530855697-b586d89ba3ee', alt: 'Western Ghats landscape in Maharashtra',
    intro: 'Maharashtra brings together Mumbai’s urban energy, hill stations, pilgrimage routes and cave heritage. Plan around the size of the state and leave time for intercity travel.',
    places: [['Mumbai', 'Waterfront landmarks, markets and neighbourhoods'], ['Pune', 'Museums, food districts and nearby hill routes'], ['Ajanta and Ellora', 'Rock-cut heritage sites reached from the Chhatrapati Sambhajinagar region']],
    experiences: ['Explore Mumbai by neighbourhood and use local transport planning for busy periods.', 'Visit cave monuments with a guide and follow conservation rules.', 'Check monsoon road conditions before planning Western Ghats drives.'],
    bestTime: 'October to February is comfortable for many city routes. Monsoon months bring heavy rain and greener hill landscapes but can affect travel.',
    airport: 'Chhatrapati Shivaji Maharaj International Airport in Mumbai is the main gateway; Pune and Chhatrapati Sambhajinagar also serve regional routes.',
    railway: 'Mumbai CSMT, Pune Junction, Nashik Road and Chhatrapati Sambhajinagar connect key corridors.',
    culture: 'Marathi language, regional food, theatre and festivals vary between Mumbai, the Deccan plateau and coastal Konkan.',
    duration: 'Five to eight days can cover Mumbai with one nearby region; add time for Ajanta-Ellora or coastal routes.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'honeymoon-packages', 'weekend-trips', 'heritage-places', 'temples', 'hill-stations', 'beach-holidays'],
  },
  {
    slug: 'gujarat', name: 'Gujarat', region: 'west-india', image: 'photo-1477587458883-47145ed94245', alt: 'Historic architecture in Gujarat',
    intro: 'Gujarat combines historic cities, pilgrimage centres, the Rann of Kutch and wildlife landscapes. Festival dates and long road transfers can shape the best route.',
    places: [['Ahmedabad', 'Old-city pols, museums and stepwells'], ['Kutch', 'Salt desert landscapes and regional craft villages'], ['Dwarka and Somnath', 'Coastal pilgrimage sites with separate travel legs']],
    experiences: ['Check Rann festival dates and local access information before booking.', 'Visit temples respectfully and follow site-specific rules.', 'Choose community craft visits that explain local practices and fair participation.'],
    bestTime: 'October to March is generally more comfortable. The Rann and some seasonal events have date-specific access; verify before planning.',
    airport: 'Sardar Vallabhbhai Patel International Airport in Ahmedabad is a major gateway; Bhuj, Rajkot and Vadodara serve regional routes.',
    railway: 'Ahmedabad Junction, Bhuj, Dwarka, Veraval and Vadodara connect different circuits.',
    culture: 'Gujarati food, textiles, craft and pilgrimage traditions are varied across the state; ask before photographing people or workshops.',
    duration: 'Six to nine days can cover Ahmedabad with either Kutch or a Saurashtra pilgrimage circuit.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'weekend-trips', 'heritage-places', 'temples', 'beach-holidays'],
  },
  {
    slug: 'madhya-pradesh', name: 'Madhya Pradesh', region: 'central-india', image: 'photo-1516026672322-bc52d61a55d5', alt: 'Forest landscape in Madhya Pradesh',
    intro: 'Madhya Pradesh connects historic sites, temple towns and major wildlife reserves. Select a manageable circuit and confirm park dates, permits and transfer times.',
    places: [['Khajuraho', 'Temple architecture and heritage precincts'], ['Ujjain', 'Mahakaleshwar and pilgrimage landmarks'], ['Kanha and Bandhavgarh', 'Protected forest landscapes with seasonal safari access']],
    experiences: ['Use authorised park vehicles and treat wildlife sightings as uncertain.', 'Explore protected monuments with a qualified local guide.', 'Plan separate travel days for distant parks and cities.'],
    bestTime: 'October to March is comfortable for most heritage visits. National park opening seasons vary and summer heat can be intense.',
    airport: 'Bhopal, Indore, Jabalpur and Khajuraho airports serve different state routes.',
    railway: 'Bhopal Junction, Indore Junction, Ujjain Junction, Gwalior and Jabalpur connect key destinations.',
    culture: 'The state includes historic court cities, pilgrimage centres and Indigenous communities with distinct traditions.',
    duration: 'Seven to ten days suits one heritage circuit or a wildlife-focused route; do not combine distant parks without sufficient time.',
    intents: ['places-to-visit', 'tour-packages', 'travel-guide', 'family-tour-packages', 'weekend-trips', 'heritage-places', 'temples', 'wildlife-safaris'],
  },
]

function city(slug, name, intro, highlights, experiences, airport, railway, bestTime, duration, culture, image) {
  return { slug, name, intro, highlights, experiences, airport, railway, bestTime, duration, culture, image }
}

const cityData = {
  rajasthan: [
    city('jaipur', 'Jaipur', 'Rajasthan’s capital pairs planned Pink City streets with forts, palaces and active bazaars.', ['Amber Fort::Set aside time for the hilltop complex and its courtyards.', 'City Palace::Check current museum areas and visitor access.', 'Hawa Mahal::See the facade within a wider old-city walk.'], ['Walk a market lane with a local guide.', 'Balance Amber Fort with central sights to avoid backtracking.'], 'Jaipur International Airport', 'Jaipur Junction', 'October to March', '2-3 days', 'Try dal baati churma and local sweets from established kitchens.', '/amber-fort-hero.png'),
    city('udaipur', 'Udaipur', 'Udaipur’s lakeside setting, palace precincts and old streets reward a slower city stay.', ['City Palace::Explore the palace museum and lake-facing courtyards.', 'Lake Pichola::Check boat services and weather before planning a ride.', 'Bagore Ki Haveli::Look for current museum and cultural-program information.'], ['Walk the old city near the lake.', 'Arrange a boat visit only through a clearly identified operator.'], 'Maharana Pratap Airport', 'Udaipur City station', 'October to March', '2-3 days', 'Sample Mewari dishes and browse local miniature painting and craft shops.', 'photo-1477587458883-47145ed94245'),
    city('jaisalmer', 'Jaisalmer', 'Jaisalmer’s sandstone fort and desert-edge setting make it a distinctive western Rajasthan stop.', ['Jaisalmer Fort::Explore its living lanes respectfully.', 'Patwon Ki Haveli::Allow time for carved facades and interiors.', 'Sam Sand Dunes::Use a licensed operator and agree inclusions before travel.'], ['Explore the fort early or later in the day.', 'Ask about low-impact desert experiences and animal welfare.'], 'Jaisalmer Airport (limited services)', 'Jaisalmer station', 'October to February', '2-3 days', 'Try ker sangri and local sweets; avoid intrusive photography in residential fort lanes.', 'photo-1477587458883-47145ed94245'),
    city('jodhpur', 'Jodhpur', 'Jodhpur combines the Mehrangarh skyline with blue old-city lanes and a strong regional food scene.', ['Mehrangarh Fort::Plan time for the museum and viewpoints.', 'Jaswant Thada::Visit the memorial complex near the fort.', 'Clock Tower market::Explore with awareness of traffic and local routines.'], ['Walk the blue-city lanes with a guide.', 'Try mirchi vada and mawa kachori from established shops.'], 'Jodhpur Airport', 'Jodhpur Junction', 'October to March', '2 days', 'Marwari food and local craft traditions are part of the city experience.', 'photo-1477587458883-47145ed94245'),
    city('mount-abu', 'Mount Abu', 'Mount Abu is a forested hill station and a cooler contrast to Rajasthan’s desert cities.', ['Dilwara Temples::Follow dress, photography and entry guidance.', 'Nakki Lake::Check local boat and weather conditions.', 'Guru Shikhar::Allow road time for the highest local viewpoint.'], ['Walk a marked forest route with local guidance.', 'Combine the hill station with nearby heritage at a relaxed pace.'], 'Maharana Pratap Airport, Udaipur', 'Abu Road station', 'October to March', '2 days', 'Rajasthani and Gujarati influences meet in the town’s food and pilgrimage traditions.', 'photo-1500530855697-b586d89ba3ee'),
    city('pushkar', 'Pushkar', 'Pushkar is a compact pilgrimage town around a sacred lake, temples and a seasonal fairground.', ['Pushkar Lake::Follow bathing-ghat customs and local guidance.', 'Brahma Temple::Check visitor dress and photography rules.', 'Savitri Temple::Confirm access and choose a suitable route.'], ['Join a respectful guided heritage walk.', 'Check fair dates and accommodation availability before travel.'], 'Kishangarh Airport or Jaipur', 'Ajmer Junction', 'October to March', '1-2 days', 'The town is a pilgrimage centre; dress modestly and ask before photographing rituals.', 'photo-1477587458883-47145ed94245'),
    city('ranthambore', 'Ranthambore', 'Ranthambore is a wildlife and fort landscape near Sawai Madhopur; sightings are never guaranteed.', ['Ranthambore National Park::Check official zones, permits and seasonal opening.', 'Ranthambore Fort::Visit only where access is open and safe.', 'Sawai Madhopur::Use as the rail gateway and confirm lodge transfers.'], ['Choose authorised safari operators.', 'Keep quiet, maintain distance and follow park rules.'], 'Jaipur International Airport', 'Sawai Madhopur Junction', 'October to April, subject to park dates', '2-3 nights', 'Support responsible wildlife viewing and do not request animals to be approached.', 'photo-1516026672322-bc52d61a55d5'),
    city('bikaner', 'Bikaner', 'Bikaner offers desert-city history, painted havelis and a distinct camel-country food culture.', ['Junagarh Fort::Explore its courtyards and museum areas.', 'Rampuria Havelis::View the historic streets respectfully.', 'National Research Centre on Camel::Check visitor access before travel.'], ['Take a guided old-city walk.', 'Try Bikaneri bhujia and local sweets from established makers.'], 'Nal Airport (limited services)', 'Bikaner Junction', 'October to March', '1-2 days', 'The city is known for its savoury snacks and desert-region craft traditions.', 'photo-1477587458883-47145ed94245'),
  ],
  'himachal-pradesh': [
    city('manali', 'Manali', 'Manali is a Beas Valley base for old-town walks, mountain views and routes toward higher terrain.', ['Old Manali::Explore cafes and lanes without disturbing residents.', 'Hadimba Temple::Follow local temple customs.', 'Solang Valley::Check current activity operators and weather.'], ['Plan altitude-aware walks.', 'Use registered providers for snow and adventure activities.'], 'Bhuntar Airport (limited services)', 'Chandigarh Junction (road onward)', 'March to June; October to February for winter conditions', '3-4 days', 'Try siddu and local trout where responsibly sourced; follow temple etiquette.', 'photo-1626621341517-bbf3d9990a23'),
    city('shimla', 'Shimla', 'Shimla’s ridge-top centre connects colonial-era streets with mountain views and the Kalka-Shimla railway.', ['The Ridge::Explore the central pedestrian area.', 'Viceregal Lodge::Check current visitor access.', 'Kalka-Shimla Railway::Verify schedules before planning the ride.'], ['Walk the Mall and heritage lanes.', 'Use the toy train as a planned journey, not a guaranteed connection.'], 'Shimla Airport (limited services)', 'Kalka station', 'March to June; September to November', '2-3 days', 'Himachali and Tibetan food options reflect the town’s varied communities.', 'photo-1626621341517-bbf3d9990a23'),
    city('dharamshala', 'Dharamshala', 'Dharamshala and McLeod Ganj bring Tibetan cultural centres, forest walks and Kangra Valley views.', ['Tsuglagkhang Complex::Observe monastery etiquette and photography rules.', 'Bhagsu area::Check trail and waterfall conditions.', 'Kangra Art Museum::Review opening information before visiting.'], ['Join a guided cultural walk.', 'Leave room for quiet time and acclimatisation.'], 'Kangra Airport at Gaggal', 'Pathankot Junction', 'March to June; September to November', '2-3 days', 'Respect Buddhist sites and the privacy of local and Tibetan communities.', 'photo-1626621341517-bbf3d9990a23'),
    city('kasol', 'Kasol', 'Kasol is a small Parvati Valley base for riverside walks and nearby village trails.', ['Parvati River::Stay on safe paths and heed water warnings.', 'Chalal trail::Check current trail conditions and local advice.', 'Manikaran::Visit the hot springs and religious sites respectfully.'], ['Use a local guide for longer hikes.', 'Avoid swimming in fast or cold mountain water.'], 'Bhuntar Airport (limited services)', 'Joginder Nagar narrow-gauge or Chandigarh for mainline rail', 'April to June; September to November', '2-3 days', 'The valley includes active village and pilgrimage life; ask before photographing people.', 'photo-1626621341517-bbf3d9990a23'),
    city('dalhousie', 'Dalhousie', 'Dalhousie is a hill-town base for forest walks, colonial-era architecture and routes toward Khajjiar.', ['Panchpula::Check current access and weather.', 'Dainkund Peak::Use marked routes and suitable footwear.', 'Khajjiar::Allow road time and follow local conservation guidance.'], ['Take short guided walks between viewpoints.', 'Keep a flexible schedule for mountain weather.'], 'Kangra Airport at Gaggal', 'Pathankot Junction', 'March to June; September to November', '2-3 days', 'Try Himachali dham-style meals where available and respect local temple customs.', 'photo-1626621341517-bbf3d9990a23'),
    city('spiti-valley', 'Spiti Valley', 'Spiti is a high-altitude cold-desert region where acclimatisation, road conditions and limited services shape every trip.', ['Key Monastery::Respect active monastic spaces.', 'Tabo Monastery::Check visitor guidance and access.', 'Chandratal route::Travel only when roads and local advisories permit.'], ['Build rest days for altitude adjustment.', 'Use experienced local drivers and carry suitable layers.'], 'Bhuntar or Chandigarh (long road transfer)', 'No rail access in the valley; Chandigarh or Kalka are distant gateways', 'June to September, subject to road access', '7-10 days', 'Spiti communities have distinctive Buddhist traditions; visit monasteries quietly and respectfully.', 'photo-1626621341517-bbf3d9990a23'),
    city('kullu', 'Kullu', 'Kullu’s valley settlements, river and temples form a gateway to central Himachal routes.', ['Raghunath Temple::Follow worship-site guidance.', 'Bijli Mahadev::Check trek conditions and local transport.', 'Kullu market::Browse local shawls and crafts.'], ['Plan a valley walk with a local guide.', 'Check river-activity operators and safety standards.'], 'Bhuntar Airport', 'Joginder Nagar narrow-gauge; Chandigarh for mainline rail', 'March to June; September to November', '2 days', 'Kullu Dussehra and local craft traditions are important; verify festival dates before travel.', 'photo-1626621341517-bbf3d9990a23'),
    city('kasauli', 'Kasauli', 'Kasauli is a compact hill town for pine walks, heritage streets and a quiet short break.', ['Gilbert Trail::Check trail access and weather.', 'Christ Church::Observe visitor guidance.', 'Sunset Point::Use public paths and return before dark.'], ['Walk the town in short sections.', 'Choose a nearby village excursion with a local host.'], 'Chandigarh Airport', 'Kalka station', 'March to June; September to November', '1-2 days', 'The small-town setting rewards quiet visits and respectful use of forest trails.', 'photo-1626621341517-bbf3d9990a23'),
  ],
  uttarakhand: [
    city('rishikesh', 'Rishikesh', 'Rishikesh combines riverfront pilgrimage, yoga communities and foothill outdoor activities.', ['Triveni Ghat::Respect evening rituals and photography guidance.', 'Ram Jhula area::Check bridge and pedestrian access.', 'Neelkanth Mahadev route::Confirm road and temple conditions.'], ['Use authorised river-rafting operators and safety gear.', 'Choose a guided walk through the old town and ashram areas.'], 'Jolly Grant Airport, Dehradun', 'Rishikesh station', 'September to June; avoid monsoon river activities', '2-3 days', 'Follow dress, footwear and conduct rules at temples and ashrams.', 'photo-1500530855697-b586d89ba3ee'),
    city('haridwar', 'Haridwar', 'Haridwar is a major pilgrimage city on the Ganges, best visited with attention to local customs and crowd timings.', ['Har Ki Pauri::Follow bathing-ghat safety and ritual guidance.', 'Mansa Devi Temple::Check access and queue information.', 'Chandi Devi Temple::Confirm current transport and opening details.'], ['Attend aarti respectfully from a suitable public area.', 'Use a guide for context on the city’s pilgrimage traditions.'], 'Jolly Grant Airport, Dehradun', 'Haridwar Junction', 'October to March', '1-2 days', 'Dress modestly, avoid intrusive photography and follow river-safety notices.', 'photo-1500530855697-b586d89ba3ee'),
    city('mussoorie', 'Mussoorie', 'Mussoorie is a hill station above Dehradun with ridge walks, viewpoints and nearby waterfalls.', ['Mall Road and Camel’s Back Road::Walk at quieter times.', 'Kempty Falls::Check crowd and water conditions.', 'Lal Tibba::Confirm access and visibility.'], ['Choose marked walks suited to your group.', 'Allow extra time for hill traffic, especially in peak seasons.'], 'Jolly Grant Airport, Dehradun', 'Dehradun station', 'March to June; September to November', '2-3 days', 'Try Garhwali dishes and use local taxis for steep or distant routes.', 'photo-1500530855697-b586d89ba3ee'),
    city('nainital', 'Nainital', 'Nainital is a Kumaon hill town organised around a lake, with nearby viewpoints and heritage walks.', ['Naini Lake::Use approved boating services and life jackets.', 'Naina Devi Temple::Observe temple customs.', 'Snow View::Check ropeway operation and weather.'], ['Walk a section of the lake promenade.', 'Visit nearby Kumaon towns only with a realistic road plan.'], 'Pantnagar Airport', 'Kathgodam station', 'March to June; September to November', '2-3 days', 'Kumaoni food and crafts are available in town; avoid littering around the lake.', 'photo-1500530855697-b586d89ba3ee'),
    city('dehradun', 'Dehradun', 'Dehradun is a useful gateway city for Mussoorie, the Doon Valley and institutions and markets of its own.', ['Forest Research Institute::Check campus visitor access.', 'Robber’s Cave::Follow local safety notices.', 'Paltan Bazaar::Browse with awareness of busy traffic.'], ['Use the city as a transport base rather than overpacking day trips.', 'Try Garhwali and Kumaoni food at established local restaurants.'], 'Jolly Grant Airport', 'Dehradun station', 'October to April', '1-2 days', 'The city brings together Garhwali, Kumaoni and wider north Indian food and culture.', 'photo-1500530855697-b586d89ba3ee'),
    city('auli', 'Auli', 'Auli is a high-altitude meadow and winter-sports area reached through the Joshimath region.', ['Auli slopes::Check snow, lift operations and safety conditions.', 'Gorson Bugyal::Use local guidance and observe meadow rules.', 'Joshimath::Confirm current road and accommodation information.'], ['Acclimatise before strenuous walks.', 'Use trained instructors for snow sports.'], 'Jolly Grant Airport, Dehradun', 'Rishikesh station', 'December to March for snow conditions; May to June for summer walks', '2-3 days', 'Respect fragile alpine meadows and check local guidance before leaving marked paths.', 'photo-1500530855697-b586d89ba3ee'),
    city('kedarnath', 'Kedarnath', 'Kedarnath is a high-altitude pilgrimage reached by a long road approach and trek or authorised seasonal services.', ['Kedarnath Temple::Check official registration, opening dates and route notices.', 'Gaurikund::Use as the road and trek gateway.', 'Mandakini Valley::Follow weather and safety guidance.'], ['Prepare for altitude and strenuous walking.', 'Use only authorised transport and follow official pilgrimage instructions.'], 'Jolly Grant Airport, Dehradun', 'Rishikesh or Haridwar station', 'Seasonal opening, commonly late spring to autumn; verify dates', '3-5 days including transfers', 'This is an active pilgrimage; keep the route clean and respect worshippers.', 'photo-1500530855697-b586d89ba3ee'),
    city('badrinath', 'Badrinath', 'Badrinath is a seasonal Himalayan pilgrimage town on the Alaknanda, reached by a long mountain road.', ['Badrinath Temple::Confirm seasonal opening and registration guidance.', 'Mana village::Respect residents and local customs.', 'Tapt Kund area::Follow posted safety and bathing guidance.'], ['Plan overnight stops on the mountain route.', 'Keep weather and road buffers before onward connections.'], 'Jolly Grant Airport, Dehradun', 'Rishikesh or Haridwar station', 'Seasonal opening, commonly late spring to autumn; verify dates', '3-5 days including transfers', 'Follow pilgrimage customs and avoid obstructing local access or ceremonies.', 'photo-1500530855697-b586d89ba3ee'),
  ],
  kerala: [
    city('munnar', 'Munnar', 'Munnar’s tea-growing hills, winding roads and nature areas suit a slower hill-country stay.', ['Tea Museum::Check visitor hours and estate access.', 'Eravikulam region::Review seasonal park notices.', 'Mattupetty::Allow road time for lake and dam visits.'], ['Choose a guided walk with a clear difficulty level.', 'Respect working plantations and marked conservation areas.'], 'Cochin International Airport', 'Aluva station (road onward)', 'September to May; monsoon is wetter', '2-3 days', 'Try appam, stew and Kerala meals; ask before entering working estate areas.', 'photo-1500534623283-312aade485b7'),
    city('alleppey', 'Alleppey', 'Alleppey, also known as Alappuzha, is a backwater gateway where route and boat choice shape the experience.', ['Alappuzha canals::Choose a route that respects village life.', 'Alappuzha Beach::Check sea and weather conditions.', 'Kuttanad region::Plan a locally informed boat or road visit.'], ['Compare a day cruise, canoe and overnight boat.', 'Ask operators about route, waste practices and safety equipment.'], 'Cochin International Airport', 'Alappuzha station', 'November to February is drier; verify monsoon operations', '1-2 nights', 'Seafood, coconut and rice dishes are common; choose clearly priced local restaurants.', 'photo-1602216056096-3b40cc0c9944'),
    city('wayanad', 'Wayanad', 'Wayanad is a forested highland district with caves, plantations and wildlife areas across a spread-out landscape.', ['Edakkal Caves::Check access and steps before visiting.', 'Soochipara Falls::Follow current water and trail safety guidance.', 'Wayanad Wildlife Sanctuary::Use authorised entry and guides.'], ['Plan realistic driving times between sites.', 'Choose community-led plantation and nature visits.'], 'Calicut International Airport', 'Kozhikode station', 'October to May; monsoon roads can be wet', '3-4 days', 'Wayanad is home to Indigenous communities; choose respectful, locally led cultural experiences.', 'photo-1602216056096-3b40cc0c9944'),
    city('kochi', 'Kochi', 'Kochi links Fort Kochi’s heritage streets with a working port city, markets and contemporary arts.', ['Fort Kochi::Explore heritage lanes on foot.', 'Mattancherry Palace::Check current museum access.', 'Jew Town::Respect residents and active religious spaces.'], ['Take a guided history walk.', 'Try Kerala seafood and cafés with transparent menus.'], 'Cochin International Airport', 'Ernakulam Junction and Ernakulam Town', 'October to March', '2-3 days', 'Malayalam food, Jewish heritage, port history and contemporary arts shape the city’s character.', 'photo-1602216056096-3b40cc0c9944'),
    city('thekkady', 'Thekkady', 'Thekkady is a hill and forest gateway near Periyar, where visits depend on authorised park activities.', ['Periyar Tiger Reserve::Check official boat and guided-walk schedules.', 'Kumily::Browse spice markets and local food.', 'Plantation areas::Visit only with clear host permission.'], ['Book authorised nature activities.', 'Keep expectations realistic; wildlife sightings are not guaranteed.'], 'Cochin International Airport', 'Kottayam station (road onward)', 'October to March; monsoon is lush and wet', '2-3 days', 'Spice-growing traditions are part of local food and trade; avoid unverified wildlife encounters.', 'photo-1602216056096-3b40cc0c9944'),
    city('kovalam', 'Kovalam', 'Kovalam is a coastal stay south of Thiruvananthapuram with several distinct beach coves.', ['Lighthouse Beach::Follow lifeguard flags and swimming guidance.', 'Hawah Beach::Check surf and seasonal access.', 'Samudra Beach::Choose quieter visits while respecting local fishing activity.'], ['Plan beach time around sea conditions.', 'Visit nearby heritage and city sites with a separate transfer plan.'], 'Trivandrum International Airport', 'Thiruvananthapuram Central', 'October to March', '2-3 days', 'Coastal Kerala food and fishing life are visible around the beaches; avoid disturbing working areas.', 'photo-1602216056096-3b40cc0c9944'),
    city('varkala', 'Varkala', 'Varkala combines a clifftop promenade, beach access and a major pilgrimage site nearby.', ['Varkala cliff::Use marked paths and follow erosion notices.', 'Papanasam Beach::Observe sea safety guidance.', 'Janardanaswamy Temple::Follow worship-site customs.'], ['Explore the cliff at quieter times.', 'Use local operators for any water activities.'], 'Trivandrum International Airport', 'Varkala Sivagiri station', 'October to March', '2-3 days', 'Respect the temple and coastal community; ask before photographing worshippers.', 'photo-1602216056096-3b40cc0c9944'),
  ],
  goa: [
    city('north-goa', 'North Goa', 'North Goa combines busy beach areas, market towns and heritage sites; choose a specific base to avoid long daily drives.', ['Calangute and Baga::Check current beach safety notices.', 'Anjuna::Explore the coast and market calendar.', 'Old Goa::Plan a separate heritage visit.'], ['Compare beach areas before booking a stay.', 'Use licensed taxis or confirmed transfers for late returns.'], 'Manohar International Airport or Goa International Airport', 'Thivim station; Madgaon for southbound routes', 'November to February; monsoon is wet', '3-4 days', 'Konkani, Portuguese-influenced heritage and coastal food traditions shape the area.', 'photo-1512343879784-a960bf40e7f2'),
    city('south-goa', 'South Goa', 'South Goa offers a quieter coastal rhythm in some areas, with longer distances between beaches and services.', ['Palolem::Check sea conditions and seasonal services.', 'Agonda::Respect nesting and conservation guidance.', 'Colva::Use local safety notices and lifeguard advice.'], ['Choose a base close to the beaches you plan to visit.', 'Confirm evening transport in quieter areas.'], 'Goa International Airport at Dabolim', 'Madgaon station', 'November to February; monsoon is wet', '3-4 days', 'Village life and coastal food are central to the region; use locally owned services where possible.', 'photo-1512343879784-a960bf40e7f2'),
    city('baga-beach', 'Baga Beach', 'Baga is a busy North Goa beach area with restaurants and seasonal water activities.', ['Baga shoreline::Follow flags and lifeguard guidance.', 'Tito’s Lane area::Check current venue status and transport.', 'Anjuna coast::Plan separately to avoid traffic backtracking.'], ['Agree activity inclusions before paying.', 'Use a designated pickup point for the return.'], 'Manohar International Airport', 'Thivim station', 'November to February', '1-2 days', 'The area is busy in peak season; respect beach workers and local noise rules.', 'photo-1512343879784-a960bf40e7f2'),
    city('calangute', 'Calangute', 'Calangute is a well-serviced North Goa base with a broad shoreline and busy seasonal streets.', ['Calangute Beach::Check sea and swimming conditions.', 'Candolim::Walk or transfer along the connected coast.', 'Mapusa::Visit the market on its operating days.'], ['Plan beach time around crowds and safety flags.', 'Use a pre-agreed transfer for nearby towns.'], 'Manohar International Airport', 'Thivim station', 'November to February', '1-2 days', 'Coastal Goan food and market life are nearby; check prices before ordering activities.', 'photo-1512343879784-a960bf40e7f2'),
    city('anjuna', 'Anjuna', 'Anjuna pairs a rocky coastline and beach areas with a seasonal market and surrounding villages.', ['Anjuna Beach::Check swimming guidance and shoreline conditions.', 'Anjuna market::Confirm operating dates and seasonal schedule.', 'Chapora Fort::Check access and take care on exposed paths.'], ['Explore the village and coast at a relaxed pace.', 'Arrange transport before evening events.'], 'Manohar International Airport', 'Thivim station', 'November to February', '1-2 days', 'The village has an active local community; ask before photographing private homes or gatherings.', 'photo-1512343879784-a960bf40e7f2'),
    city('palolem', 'Palolem', 'Palolem is a South Goa beach base known for its curved bay and seasonal coastal services.', ['Palolem Bay::Follow lifeguard flags and sea advice.', 'Patnem::Walk or transfer to a quieter nearby beach.', 'Cotigao region::Check forest access before a day trip.'], ['Choose authorised boat activities and check weather.', 'Confirm pickup details in the evening.'], 'Goa International Airport at Dabolim', 'Canacona station', 'November to February', '2-3 days', 'Konkani food and village customs are part of the stay; respect fishing and conservation areas.', 'photo-1512343879784-a960bf40e7f2'),
  ],
  'uttar-pradesh': [
    city('agra', 'Agra', 'Agra is a heritage city where the Taj Mahal, Agra Fort and riverfront setting deserve more than a rushed stop.', ['Taj Mahal::Check official visitor rules and allow time for entry.', 'Agra Fort::Set aside a separate visit for the complex.', 'Mehtab Bagh::Check current access for a riverfront viewpoint.'], ['Use a guide for architecture and history.', 'Pair Agra with Delhi or Jaipur only after checking transfer times.'], 'Agra Airport (limited commercial service); Delhi for wider flights', 'Agra Cantt', 'October to March', '1-2 days', 'Mughal history, marble craft and local sweets shape the city’s cultural experience.', 'photo-1564507592333-c60657eea523'),
    city('varanasi', 'Varanasi', 'Varanasi is a living pilgrimage city on the Ganges; plan visits with cultural sensitivity and realistic crowd buffers.', ['Ganga ghats::Observe from public areas and follow boat safety.', 'Kashi Vishwanath area::Check current access and dress guidance.', 'Sarnath::Allow time for the museum and Buddhist sites.'], ['Take a locally guided heritage walk.', 'Ask before photographing worshippers or rituals.'], 'Lal Bahadur Shastri International Airport', 'Varanasi Junction or Banaras station', 'October to March', '2-3 days', 'The city is an active religious centre; dress respectfully and avoid obstructing ceremonies.', 'photo-1564507592333-c60657eea523'),
    city('lucknow', 'Lucknow', 'Lucknow combines Awadhi food traditions with historic gateways, gardens and a distinctive old-city culture.', ['Bara Imambara::Check current entry and guide arrangements.', 'Rumi Darwaza::View as part of a heritage route.', 'Hazratganj::Explore the modern and historic shopping district.'], ['Join a food walk with clear pricing.', 'Use a guide to understand Nawabi-era architecture.'], 'Chaudhary Charan Singh International Airport', 'Lucknow Charbagh station', 'October to March', '2 days', 'Awadhi cuisine, Urdu poetry and chikankari embroidery are important local traditions.', 'photo-1477587458883-47145ed94245'),
    city('ayodhya', 'Ayodhya', 'Ayodhya is a major pilgrimage destination where advance planning helps with access, crowds and local etiquette.', ['Ram Mandir area::Check official darshan and access notices.', 'Saryu riverfront::Follow bathing and safety guidance.', 'Hanuman Garhi::Plan for steps and queues.'], ['Use official visitor updates for special days.', 'Dress modestly and avoid intrusive photography.'], 'Maharishi Valmiki International Airport, Ayodhya', 'Ayodhya Dham Junction', 'October to March; festival periods are crowded', '1-2 days', 'This is an active sacred city; follow local instructions and keep public spaces clear.', 'photo-1564507592333-c60657eea523'),
    city('mathura-vrindavan', 'Mathura and Vrindavan', 'Mathura and Vrindavan are closely connected pilgrimage towns with busy temple areas and festival calendars.', ['Krishna Janmabhoomi area::Check current entry guidance.', 'Banke Bihari Temple::Review local crowd and darshan information.', 'Yamuna ghats::Follow river-safety rules.'], ['Plan temple visits around official schedules.', 'Use a local guide for context and respectful movement.'], 'Agra Airport (limited) or Delhi', 'Mathura Junction', 'October to March; major festivals are very busy', '1-2 days', 'Respect worshippers and temple rules; avoid photography where prohibited.', 'photo-1564507592333-c60657eea523'),
  ],
  karnataka: [
    city('bengaluru', 'Bengaluru', 'Bengaluru combines technology districts with gardens, markets, museums and a growing regional food scene.', ['Lalbagh::Check garden events and access.', 'Bengaluru Palace::Review visitor arrangements.', 'Vidhana Soudha area::Observe public access and traffic rules.'], ['Explore a neighbourhood market with a local guide.', 'Plan cross-city trips around peak traffic.'], 'Kempegowda International Airport', 'Krantivira Sangolli Rayanna Bengaluru City station', 'October to February', '2-3 days', 'Kannada culture, craft coffee and diverse regional cuisines shape the city.', 'photo-1477587458883-47145ed94245'),
    city('mysuru', 'Mysuru', 'Mysuru is a heritage city with palace architecture, markets and access to nearby nature and historic sites.', ['Mysore Palace::Check illumination and visitor schedules.', 'Devaraja Market::Explore respectfully and compare prices.', 'Chamundi Hills::Allow road time and follow temple guidance.'], ['Take a guided palace and market walk.', 'Try Mysore masala dosa and Mysore pak at established shops.'], 'Mysuru Airport (limited services); Bengaluru for wider flights', 'Mysuru Junction', 'October to March', '2 days', 'Mysuru’s Dasara festival, silk and sandalwood crafts have long local histories.', 'photo-1477587458883-47145ed94245'),
    city('hampi', 'Hampi', 'Hampi’s boulder landscape and Vijayanagara-era remains are best explored over several unhurried days.', ['Virupaksha Temple::Respect active worship and entry rules.', 'Vittala Temple::Check site access and conservation guidance.', 'Tungabhadra river area::Follow local safety notices.'], ['Walk or cycle between monuments in cooler hours.', 'Use an authorised guide to interpret the archaeological landscape.'], 'Jindal Vijaynagar Airport (limited) or Hubballi', 'Hospet Junction', 'October to February', '2-3 days', 'The site is both a living village and protected heritage area; avoid climbing on ruins.', 'photo-1477587458883-47145ed94245'),
    city('coorg', 'Coorg', 'Coorg, also called Kodagu, is a coffee-growing hill district with winding roads and dispersed stays.', ['Madikeri Fort::Check museum access.', 'Abbey Falls::Follow trail and water safety notices.', 'Coffee estates::Visit only with a confirmed host.'], ['Take a guided plantation walk.', 'Keep driving days light on arrival and departure.'], 'Kannur or Mangaluru airports; Bengaluru for broader flights', 'Mysuru Junction (road onward)', 'October to March; monsoon is wet', '2-3 days', 'Kodava food and community traditions are distinctive; seek locally hosted experiences.', 'photo-1602216056096-3b40cc0c9944'),
    city('badami', 'Badami', 'Badami is a heritage town known for cave temples, sandstone cliffs and links to nearby Chalukyan sites.', ['Badami Cave Temples::Check steps and site access.', 'Agastya Lake::Respect local religious activity.', 'Pattadakal and Aihole::Allow separate road time.'], ['Use a guide for the architectural context.', 'Carry water for exposed walks.'], 'Hubballi Airport', 'Badami station', 'October to February', '2 days', 'Local Kannada food and temple traditions are central to the area.', 'photo-1477587458883-47145ed94245'),
    city('gokarna', 'Gokarna', 'Gokarna combines an active pilgrimage town with a rugged coastline and beach walks.', ['Mahabaleshwar Temple::Follow pilgrimage customs.', 'Om Beach::Check sea conditions and path safety.', 'Kudle Beach::Use marked access and respect local rules.'], ['Choose a coastal walk suited to your group.', 'Avoid swimming when surf or lifeguard advice says conditions are unsafe.'], 'Goa International Airport or Hubballi', 'Gokarna Road station', 'October to March', '2-3 days', 'This is a pilgrimage town as well as a beach destination; dress and behave accordingly.', 'photo-1512343879784-a960bf40e7f2'),
  ],
  'tamil-nadu': [
    city('chennai', 'Chennai', 'Chennai is a major coastal city with temples, museums, music venues and neighbourhoods to explore.', ['Marina Beach::Follow sea-safety notices and avoid unsafe swimming.', 'Kapaleeshwarar Temple::Observe dress and visitor guidance.', 'Government Museum::Check current galleries and hours.'], ['Explore Mylapore with a guide.', 'Try Tamil breakfast dishes at established restaurants.'], 'Chennai International Airport', 'Chennai Central and Egmore', 'November to February', '2-3 days', 'Tamil language, Carnatic music, classical dance and coastal food are prominent.', 'photo-1524492412937-b28074a5d7da'),
    city('madurai', 'Madurai', 'Madurai’s temple-centred old city and food streets make it one of Tamil Nadu’s strongest heritage stops.', ['Meenakshi Amman Temple::Check current entry and photography rules.', 'Thirumalai Nayakkar Palace::Review visitor access.', 'Vandiyur Mariamman Teppakulam::Check seasonal conditions.'], ['Join a guided temple and market walk.', 'Allow time for queues and worship customs.'], 'Madurai Airport', 'Madurai Junction', 'November to February', '2 days', 'Madurai is known for temple traditions, jasmine and a distinctive food culture.', 'photo-1524492412937-b28074a5d7da'),
    city('ooty', 'Ooty', 'Ooty, or Udhagamandalam, is a Nilgiri hill station with gardens, tea landscapes and a heritage railway.', ['Nilgiri Mountain Railway::Book and verify schedules through official channels.', 'Botanical Gardens::Check seasonal displays.', 'Doddabetta::Allow for weather and road visibility.'], ['Walk tea-country routes with permission.', 'Keep warm layers for changing hill weather.'], 'Coimbatore International Airport', 'Mettupalayam station for the mountain railway', 'October to June; verify monsoon conditions', '2-3 days', 'Toda heritage is part of the Nilgiri region; visit community sites only with appropriate local guidance.', 'photo-1602216056096-3b40cc0c9944'),
    city('rameswaram', 'Rameswaram', 'Rameswaram is a pilgrimage island connected to the mainland by a bridge and a distinctive rail route.', ['Ramanathaswamy Temple::Follow bathing, dress and entry guidance.', 'Pamban Bridge::Use designated viewpoints and public access.', 'Dhanushkodi::Check road and weather access.'], ['Plan temple rituals with local guidance.', 'Allow extra time for island road transfers.'], 'Madurai Airport', 'Rameswaram station', 'October to March', '1-2 days', 'A major pilgrimage centre; respect ritual spaces and follow site-specific rules.', 'photo-1524492412937-b28074a5d7da'),
    city('kodaikanal', 'Kodaikanal', 'Kodaikanal is a hill station around a lake, forest paths and viewpoints in the Palani Hills.', ['Kodaikanal Lake::Use approved boating and cycling services.', 'Coaker’s Walk::Check visibility and path conditions.', 'Pillar Rocks::Follow forest and cliff safety notices.'], ['Choose a guided nature walk.', 'Plan around mist, rain and hill-road travel.'], 'Madurai Airport', 'Kodai Road station (road onward)', 'October to June', '2-3 days', 'Local produce and hill-station food are available; avoid littering around forest paths.', 'photo-1602216056096-3b40cc0c9944'),
    city('thanjavur', 'Thanjavur', 'Thanjavur is a major Chola heritage city with temple architecture, palace collections and craft traditions.', ['Brihadisvara Temple::Follow worship and conservation guidance.', 'Thanjavur Palace::Check museum access.', 'Saraswathi Mahal Library::Review visitor hours.'], ['Use a heritage guide for temple architecture.', 'Explore local bronze and painting traditions through reputable workshops.'], 'Tiruchirappalli International Airport', 'Thanjavur Junction', 'November to February', '1-2 days', 'Chola history, classical arts and Thanjavur painting are central to local heritage.', 'photo-1524492412937-b28074a5d7da'),
  ],
  'andhra-pradesh': [
    city('visakhapatnam', 'Visakhapatnam', 'Visakhapatnam combines a major port city with beaches, viewpoints and nearby Eastern Ghats routes.', ['RK Beach::Follow sea-safety notices.', 'Kailasagiri::Check transport and weather.', 'Submarine Museum::Review opening information.'], ['Explore the coastal road with a planned transfer.', 'Try local Andhra meals and seafood from established restaurants.'], 'Visakhapatnam International Airport', 'Visakhapatnam Junction', 'October to February', '2-3 days', 'Telugu coastal cuisine and port-city culture shape local life.', 'photo-1512343879784-a960bf40e7f2'),
    city('tirupati', 'Tirupati', 'Tirupati is a major pilgrimage gateway where official darshan and transport planning is essential.', ['Tirumala Venkateswara Temple::Use official booking and visitor guidance.', 'Sri Padmavathi Temple::Check local customs and timing.', 'Chandragiri Fort::Allow a separate road transfer.'], ['Plan darshan using official channels only.', 'Keep crowd and queue buffers in the itinerary.'], 'Tirupati Airport', 'Tirupati station', 'October to March; festival periods are crowded', '1-2 days', 'This is an active sacred centre; follow dress rules and avoid unauthorized guides.', 'photo-1524492412937-b28074a5d7da'),
    city('vijayawada', 'Vijayawada', 'Vijayawada is a Krishna River city and transport base for temples, caves and nearby heritage sites.', ['Kanaka Durga Temple::Check current queue and access information.', 'Undavalli Caves::Review entry guidance.', 'Prakasam Barrage::Use designated public viewpoints.'], ['Take a guided heritage visit to the caves.', 'Plan riverfront time around weather and traffic.'], 'Vijayawada International Airport', 'Vijayawada Junction', 'October to February', '1-2 days', 'Telugu cuisine and river-linked traditions are part of the city’s identity.', 'photo-1524492412937-b28074a5d7da'),
    city('araku-valley', 'Araku Valley', 'Araku is an Eastern Ghats hill region reached by a scenic rail and road journey from Visakhapatnam.', ['Borra Caves::Check access and walking conditions.', 'Coffee Museum::Review opening details.', 'Tribal Museum::Visit respectfully and follow photography rules.'], ['Plan the train as a day route with confirmed schedules.', 'Use local guides for cultural and village visits.'], 'Visakhapatnam International Airport', 'Araku station', 'October to March', '2 days', 'Araku has Indigenous communities and coffee traditions; choose community-led visits.', 'photo-1500530855697-b586d89ba3ee'),
    city('srisailam', 'Srisailam', 'Srisailam is a pilgrimage town in a forested landscape where temple, road and reserve access need planning.', ['Mallikarjuna Temple::Check official darshan guidance.', 'Srisailam Dam::Follow public access rules.', 'Nallamala forest::Use authorised routes and guides.'], ['Allow time for the long road journey.', 'Follow forest and wildlife safety notices.'], 'Hyderabad International Airport', 'Markapur Road station (road onward)', 'October to March', '1-2 days', 'A major pilgrimage site; respect temple customs and protected forest rules.', 'photo-1516026672322-bc52d61a55d5'),
  ],
  bihar: [
    city('bodh-gaya', 'Bodh Gaya', 'Bodh Gaya is a major Buddhist pilgrimage destination with monasteries and sacred sites from many countries.', ['Mahabodhi Temple::Follow site rules and quiet-prayer etiquette.', 'Great Buddha Statue::Check visitor access.', 'International monasteries::Observe each community’s customs.'], ['Use a guide for Buddhist history.', 'Plan quiet time between sites.'], 'Gaya Airport (scheduled service varies)', 'Gaya Junction', 'October to March', '2-3 days', 'The town is an international Buddhist centre; dress modestly and ask before photographing worshippers.', 'photo-1500530855697-b586d89ba3ee'),
    city('nalanda', 'Nalanda', 'Nalanda’s archaeological remains and museum offer a focused visit to an important historic learning centre.', ['Nalanda Mahavihara::Allow time for the archaeological site.', 'Nalanda Archaeological Museum::Check opening hours.', 'Rajgir::Plan as a separate transfer or overnight stop.'], ['Use a heritage guide to interpret the site.', 'Carry sun protection for the open grounds.'], 'Patna Airport', 'Rajgir station or Bihar Sharif (road onward)', 'October to March', '1 day', 'The area’s Buddhist heritage is best explored with historical context and respectful conduct.', 'photo-1500530855697-b586d89ba3ee'),
    city('patna', 'Patna', 'Patna is a river city and gateway to Bihar’s heritage, museums and Buddhist pilgrimage circuit.', ['Bihar Museum::Review current exhibitions.', 'Golghar::Check public access.', 'Takht Sri Patna Sahib::Follow Sikh gurdwara customs.'], ['Explore the city with a local guide.', 'Try litti chokha from a reputable local restaurant.'], 'Jay Prakash Narayan International Airport', 'Patna Junction', 'October to March', '1-2 days', 'The city’s food and religious heritage span Buddhist, Sikh and regional traditions.', 'photo-1477587458883-47145ed94245'),
    city('rajgir', 'Rajgir', 'Rajgir is a hill-ringed heritage town with Buddhist, Jain and Hindu pilgrimage sites.', ['Vishwa Shanti Stupa::Check ropeway operation and weather.', 'Cyclopean Wall::Explore with historical context.', 'Gridhakuta Hill::Use safe routes and local guidance.'], ['Choose a guided pilgrimage and heritage walk.', 'Keep time for nearby Nalanda.'], 'Gaya or Patna Airport', 'Rajgir station', 'October to March', '1-2 days', 'The area is sacred to several traditions; show respect at monasteries and temples.', 'photo-1500530855697-b586d89ba3ee'),
    city('vaishali', 'Vaishali', 'Vaishali is an archaeological and Buddhist heritage stop best planned with a local route between sites.', ['Ashokan Pillar::Check site access.', 'Buddha Stupa remains::Use a guide for context.', 'Abhishek Pushkarini::Respect local religious use.'], ['Combine the visit with a broader north Bihar heritage route.', 'Check museum hours and road transfers.'], 'Patna Airport', 'Hajipur Junction', 'October to March', '1 day', 'Vaishali is an important historic and religious landscape; visit quietly and follow local guidance.', 'photo-1500530855697-b586d89ba3ee'),
  ],
  sikkim: [
    city('gangtok', 'Gangtok', 'Gangtok is Sikkim’s hill capital and a base for monasteries, viewpoints and permitted mountain excursions.', ['Rumtek Monastery::Check current visitor guidance.', 'MG Marg::Explore the pedestrian centre.', 'Tsomgo Lake route::Confirm permits and road conditions.'], ['Acclimatise before high-altitude excursions.', 'Use registered operators for restricted-area trips.'], 'Pakyong Airport (weather-dependent) or Bagdogra', 'New Jalpaiguri station', 'March to May; October to November', '3-4 days', 'Respect Buddhist monastery customs and ask before photographing people.', 'photo-1595815771614-ade9d7c41bd7'),
    city('pelling', 'Pelling', 'Pelling is a west Sikkim base for mountain views, monasteries and heritage ruins.', ['Pemayangtse Monastery::Observe worship and photography rules.', 'Rabdentse Ruins::Use marked paths.', 'Skywalk area::Check current access and weather.'], ['Plan a flexible day around mountain visibility.', 'Arrange road transport between dispersed sites.'], 'Bagdogra Airport', 'New Jalpaiguri station', 'March to May; October to November', '2-3 days', 'Local Buddhist heritage is central; dress respectfully at monasteries.', 'photo-1595815771614-ade9d7c41bd7'),
    city('lachung', 'Lachung', 'Lachung is a mountain village used as a seasonal base for North Sikkim, subject to permits and road access.', ['Yumthang Valley::Check permits, closures and weather.', 'Lachung Monastery::Follow local visitor guidance.', 'Zero Point route::Use authorised local operators.'], ['Acclimatise and keep an extra weather day.', 'Travel with a locally experienced driver.'], 'Bagdogra Airport', 'New Jalpaiguri station', 'March to June; October to December, subject to access', '2-3 days', 'Respect village life and keep high-altitude routes free of litter.', 'photo-1595815771614-ade9d7c41bd7'),
    city('namchi', 'Namchi', 'Namchi is a south Sikkim town with religious landmarks and views across the surrounding hills.', ['Samdruptse::Check site access.', 'Char Dham complex::Follow visitor and worship guidance.', 'Ngadak Monastery::Visit respectfully.'], ['Use a local guide for the region’s religious landmarks.', 'Plan road time between hill towns.'], 'Bagdogra Airport', 'New Jalpaiguri station', 'March to May; October to November', '1-2 days', 'The region’s Buddhist and Hindu sites are active sacred places; follow posted customs.', 'photo-1595815771614-ade9d7c41bd7'),
    city('yuksom', 'Yuksom', 'Yuksom is a historic west Sikkim settlement and trekking gateway where local permits and trail conditions matter.', ['Dubdi Monastery::Check the walking route.', 'Norbugang Coronation Throne::Respect the heritage site.', 'Khangchendzonga trailheads::Confirm permits and guide requirements.'], ['Use a qualified trekking guide.', 'Allow acclimatisation and weather flexibility.'], 'Bagdogra Airport', 'New Jalpaiguri station', 'March to May; October to November', '2-3 days', 'Yuksom has deep Buddhist history; visit monasteries and community sites respectfully.', 'photo-1595815771614-ade9d7c41bd7'),
  ],
  nagaland: [
    city('kohima', 'Kohima', 'Kohima is Nagaland’s hill capital and a base for local history, markets and Dzukou Valley routes.', ['Kohima War Cemetery::Visit quietly and respectfully.', 'Kisama Heritage Village::Check event and visitor schedules.', 'Dzukou trailheads::Arrange a local guide and current access.'], ['Learn about local history with a knowledgeable guide.', 'Check permits and festival dates before travel.'], 'Dimapur Airport', 'Dimapur Junction', 'October to May', '2-3 days', 'Kohima is home to diverse Naga communities; ask permission before photographs.', 'photo-1500530855697-b586d89ba3ee'),
    city('dzukou-valley', 'Dzukou Valley', 'Dzukou is a high-altitude trekking destination requiring route planning, local guidance and suitable fitness.', ['Dzukou Valley trail::Check entry, weather and guide rules.', 'Viswema route::Confirm trailhead access.', 'Jakhama route::Ask locally about current conditions.'], ['Hire an authorised local guide.', 'Carry out all waste and follow camping rules.'], 'Dimapur Airport', 'Dimapur Junction', 'October to May; avoid unsafe monsoon conditions', '2-3 days including trek', 'The valley is ecologically sensitive; respect local community rules and leave no trace.', 'photo-1626621341517-bbf3d9990a23'),
    city('dimapur', 'Dimapur', 'Dimapur is Nagaland’s main air and rail gateway, with historic sites and onward road links to the hills.', ['Kachari Ruins::Check local site access.', 'Diezephe Craft Village::Arrange a respectful visit.', 'Local markets::Explore with a guide.'], ['Use Dimapur as an arrival base before travelling north.', 'Confirm onward transport in advance.'], 'Dimapur Airport', 'Dimapur station', 'October to April', '1-2 days', 'Dimapur’s communities and food are diverse; buy craft items directly from reputable makers.', 'photo-1477587458883-47145ed94245'),
    city('mokokchung', 'Mokokchung', 'Mokokchung is an Ao Naga cultural centre surrounded by hill settlements and long road routes.', ['Longkhum::Visit with local guidance.', 'Ungma village::Arrange a respectful community visit.', 'Town market::Explore local produce and crafts.'], ['Plan road transfers in daylight.', 'Use a local guide for village visits.'], 'Jorhat Airport or Dimapur Airport', 'Mariani Junction (Assam)', 'October to April', '2-3 days', 'Ao Naga traditions are living community practices; ask permission and follow local protocols.', 'photo-1500530855697-b586d89ba3ee'),
    city('mon', 'Mon', 'Mon district offers remote hill landscapes and Konyak cultural history; visits need local arrangements and sensitivity.', ['Longwa::Confirm access and local protocols.', 'Shangnyu::Arrange a community-led visit.', 'Mon town::Use as a road base.'], ['Book local guidance before arrival.', 'Avoid intrusive or staged encounters.'], 'Jorhat Airport', 'Mariani Junction (Assam)', 'October to April', '3-4 days', 'Konyak community traditions deserve respectful, consent-based engagement.', 'photo-1500530855697-b586d89ba3ee'),
  ],
  jharkhand: [
    city('ranchi', 'Ranchi', 'Ranchi is a plateau city and gateway to waterfalls, forest areas and cultural sites across Jharkhand.', ['Hundru Falls::Check water and access conditions.', 'Rock Garden::Review local opening details.', 'Jagannath Temple::Follow visitor guidance.'], ['Plan waterfall visits with safe daylight road transfers.', 'Choose locally hosted cultural experiences.'], 'Birsa Munda Airport', 'Ranchi Junction', 'October to March; waterfall visits need current weather checks', '2-3 days', 'The city is a gateway to Jharkhand’s Adivasi communities; seek respectful local interpretation.', 'photo-1500530855697-b586d89ba3ee'),
    city('deoghar', 'Deoghar', 'Deoghar is a major pilgrimage destination centred on Baidyanath Dham and a network of nearby temples.', ['Baidyanath Dham::Check official darshan and festival guidance.', 'Naulakha Temple::Follow local customs.', 'Trikut Hills::Use approved transport and safety guidance.'], ['Allow extra time during pilgrimage seasons.', 'Plan temple visits through official information.'], 'Deoghar Airport', 'Deoghar Junction', 'October to March; Shravan is especially busy', '1-2 days', 'This is an active pilgrimage town; dress modestly and respect queue and worship guidance.', 'photo-1524492412937-b28074a5d7da'),
    city('betla-national-park', 'Betla National Park', 'Betla is a forest and wildlife gateway in Palamau where visits depend on park operations and conservation rules.', ['Betla forest area::Check official entry and safari schedules.', 'Palamau Forts::Confirm access and local safety.', 'Koel river landscape::Follow park guidance.'], ['Use authorised guides and vehicles.', 'Never feed wildlife or expect sightings.'], 'Ranchi Airport', 'Daltonganj/Medininagar station', 'October to April, subject to park calendar', '2-3 nights', 'The area includes forest communities; follow park rules and locally led guidance.', 'photo-1516026672322-bc52d61a55d5'),
    city('netarhat', 'Netarhat', 'Netarhat is a quiet plateau retreat known for forest scenery, sunrise viewpoints and long road access.', ['Magnolia Point::Check safe access and weather.', 'Koel View Point::Use designated viewpoints.', 'Upper Ghaghri Falls::Check trail and water conditions.'], ['Keep a flexible schedule for mist and rain.', 'Arrange road transport in advance.'], 'Ranchi Airport', 'Daltonganj station (road onward)', 'October to March', '2 days', 'Netarhat’s appeal lies in quiet landscapes; avoid littering and respect local residents.', 'photo-1500530855697-b586d89ba3ee'),
    city('jamshedpur', 'Jamshedpur', 'Jamshedpur is an industrial city with planned green spaces, lakes and nearby nature routes.', ['Jubilee Park::Check public access and event schedules.', 'Dalma Wildlife Sanctuary::Use authorised visitor routes.', 'Dimna Lake::Follow local safety notices.'], ['Explore the city’s planned districts and markets.', 'Confirm sanctuary access before a day trip.'], 'Sonari Airport (limited services); Ranchi for wider flights', 'Tatanagar Junction', 'October to March', '1-2 days', 'The city’s industrial history sits alongside diverse community and food traditions.', 'photo-1477587458883-47145ed94245'),
  ],
  'west-bengal': [
    city('kolkata', 'Kolkata', 'Kolkata is a cultural capital of museums, literature, riverfront districts and a distinctive food scene.', ['Victoria Memorial::Check museum hours.', 'Indian Museum::Review current galleries.', 'Kumartuli::Visit respectfully and ask before photographing artisans.'], ['Take a guided neighbourhood and food walk.', 'Use metro, rail or app-based transport for cross-city trips.'], 'Netaji Subhas Chandra Bose International Airport', 'Howrah and Sealdah stations', 'October to February', '3-4 days', 'Bengali literature, theatre, sweets and festival traditions shape city life.', 'photo-1477587458883-47145ed94245'),
    city('darjeeling', 'Darjeeling', 'Darjeeling is a Himalayan tea town with mountain views, heritage rail and busy hill roads.', ['Darjeeling Himalayan Railway::Check official schedules.', 'Tea estates::Visit only with permission.', 'Batasia Loop::Respect the memorial and local access rules.'], ['Plan sunrise viewpoints around weather, not guarantees.', 'Use local transport for steep, narrow roads.'], 'Bagdogra Airport', 'New Jalpaiguri station', 'March to May; October to November', '2-3 days', 'Tea-growing communities and Nepali, Tibetan and Bengali influences shape the region.', 'photo-1595815771614-ade9d7c41bd7'),
    city('kalimpong', 'Kalimpong', 'Kalimpong offers a quieter hill-town base for monasteries, nurseries and views across the Teesta valley.', ['Deolo Hill::Check visibility and access.', 'Zang Dhok Palri Monastery::Follow monastery etiquette.', 'Flower nurseries::Ask before entering private growing areas.'], ['Explore town on foot in short sections.', 'Allow road time to Darjeeling or Sikkim.'], 'Bagdogra Airport', 'New Jalpaiguri station', 'March to May; October to November', '2 days', 'Nepali, Lepcha, Bhutia and Bengali traditions are part of local life; visit sacred sites respectfully.', 'photo-1595815771614-ade9d7c41bd7'),
    city('sundarbans', 'Sundarbans', 'The Sundarbans is a protected mangrove and wildlife landscape visited through authorised boat routes.', ['Sundarbans National Park::Check permit and operator requirements.', 'Sajnekhali::Use official visitor information.', 'Village areas::Choose community-led visits.'], ['Book an authorised boat and guide.', 'Follow wildlife distance and waste rules.'], 'Kolkata Airport', 'Canning station (boat/road onward)', 'November to February, subject to park operations', '2-3 nights', 'Local livelihoods are closely tied to the delta; choose responsible operators and respect community guidance.', 'photo-1516026672322-bc52d61a55d5'),
    city('shantiniketan', 'Shantiniketan', 'Shantiniketan is a cultural town associated with Visva-Bharati, art education and seasonal festivals.', ['Visva-Bharati campus::Check visitor areas and current access.', 'Kala Bhavana::Review gallery schedules.', 'Sonajhuri Haat::Confirm market days and respect artisans.'], ['Visit with an art or heritage guide.', 'Check festival and campus schedules before travel.'], 'Kazi Nazrul Islam Airport (limited) or Kolkata', 'Bolpur Shantiniketan station', 'October to March', '1-2 days', 'The town’s arts and education heritage remains active; respect campus rules and artists’ work.', 'photo-1477587458883-47145ed94245'),
    city('digha', 'Digha', 'Digha is a Bay of Bengal beach town suited to a short coastal break from Kolkata.', ['New Digha Beach::Follow sea-safety guidance.', 'Marine Aquarium::Check opening information.', 'Shankarpur::Plan a separate local transfer.'], ['Choose beach time around tide and lifeguard advice.', 'Keep expectations realistic during monsoon weather.'], 'Kolkata Airport', 'Digha station', 'October to March', '1-2 days', 'Bengali coastal food and fishing life are visible around town; respect working areas.', 'photo-1512343879784-a960bf40e7f2'),
  ],
  maharashtra: [
    city('mumbai', 'Mumbai', 'Mumbai is a major coastal metropolis of heritage districts, markets, museums and neighbourhood food.', ['Gateway of India::Check visitor and ferry conditions.', 'Chhatrapati Shivaji Maharaj Terminus::View the historic station respectfully.', 'Elephanta Caves::Confirm ferry and cave access.'], ['Explore one or two neighbourhoods per day.', 'Use public transport or pre-arranged transfers around traffic.'], 'Chhatrapati Shivaji Maharaj International Airport', 'CSMT and Mumbai Central', 'November to February', '3-4 days', 'Marathi, coastal and migrant food cultures meet in the city’s markets and neighbourhoods.', 'photo-1477587458883-47145ed94245'),
    city('pune', 'Pune', 'Pune combines historic Maratha landmarks, universities, food districts and nearby Western Ghats routes.', ['Shaniwar Wada::Check current monument access.', 'Aga Khan Palace::Review visitor hours.', 'Sinhagad Fort::Check road and trail conditions.'], ['Explore old Pune with a guide.', 'Plan hill-fort trips outside peak traffic.'], 'Pune Airport', 'Pune Junction', 'October to February; monsoon drives need care', '2-3 days', 'Marathi culture, theatre and local snacks are central to Pune’s identity.', 'photo-1477587458883-47145ed94245'),
    city('nashik', 'Nashik', 'Nashik is a pilgrimage and wine-country city with riverfront heritage and nearby vineyard routes.', ['Trimbakeshwar Temple::Check official darshan information.', 'Panchavati::Respect active religious spaces.', 'Vineyards::Arrange visits directly and confirm tasting rules.'], ['Plan temple and vineyard visits as separate experiences.', 'Use a driver for rural winery routes.'], 'Nashik Airport at Ozar (limited services)', 'Nashik Road station', 'October to February', '2 days', 'Nashik’s religious, agricultural and wine traditions coexist; follow site-specific conduct.', 'photo-1477587458883-47145ed94245'),
    city('mahabaleshwar', 'Mahabaleshwar', 'Mahabaleshwar is a Western Ghats hill station with forest viewpoints, strawberry farms and winding roads.', ['Venna Lake::Use approved boating services.', 'Pratapgad Fort::Allow road and walking time.', 'Viewpoints::Check visibility and local access.'], ['Visit farms during their operating season.', 'Drive carefully in monsoon fog and rain.'], 'Pune Airport', 'Satara station (road onward)', 'October to June; monsoon is very wet', '2-3 days', 'Local produce, strawberries and hill-town food are part of the visit.', 'photo-1500530855697-b586d89ba3ee'),
    city('chhatrapati-sambhajinagar', 'Chhatrapati Sambhajinagar', 'Chhatrapati Sambhajinagar is the gateway to Deccan heritage and the Ajanta-Ellora cave landscapes.', ['Ellora Caves::Check official opening and conservation guidance.', 'Ajanta Caves::Plan a separate full-day road visit.', 'Bibi Ka Maqbara::Review visitor access.'], ['Use a qualified heritage guide.', 'Carry water and allow time for walking between caves.'], 'Chhatrapati Sambhajinagar Airport', 'Chhatrapati Sambhajinagar station', 'October to March', '2-3 days', 'Deccan history, local food and craft traditions enrich the cave-site visits.', 'photo-1477587458883-47145ed94245'),
  ],
  gujarat: [
    city('ahmedabad', 'Ahmedabad', 'Ahmedabad is a heritage city of pol neighbourhoods, stepwells, museums and Gujarati food traditions.', ['Historic city pols::Join a respectful local walking tour.', 'Adalaj Stepwell::Check access and conservation rules.', 'Sabarmati Ashram::Follow visitor guidance.'], ['Try a guided food and heritage walk.', 'Use local transport for sites beyond the old city.'], 'Sardar Vallabhbhai Patel International Airport', 'Ahmedabad Junction', 'October to February', '2-3 days', 'Gujarati vegetarian food, textiles and historic community neighbourhoods are prominent.', 'photo-1477587458883-47145ed94245'),
    city('kutch', 'Kutch', 'Kutch is a large region of salt desert, craft villages and coastal landscapes with seasonal access.', ['Great Rann of Kutch::Check festival dates and permit rules.', 'Bhujodi::Visit craft communities with permission.', 'Mandvi::Plan coastal travel and local transport.'], ['Choose community-led craft visits.', 'Carry water and confirm long-distance road arrangements.'], 'Bhuj Airport', 'Bhuj station', 'November to February; verify Rann access dates', '3-5 days', 'Kutch’s communities have distinctive textiles and craft traditions; buy directly and respectfully.', 'photo-1500530855697-b586d89ba3ee'),
    city('dwarka', 'Dwarka', 'Dwarka is a major coastal pilgrimage town where temple access and pilgrimage schedules shape the visit.', ['Dwarkadhish Temple::Check official darshan information.', 'Gomti Ghat::Follow bathing and riverfront guidance.', 'Bet Dwarka::Confirm ferry operations and weather.'], ['Allow time for queues and transport to Bet Dwarka.', 'Dress modestly and respect worshippers.'], 'Jamnagar Airport', 'Dwarka station', 'October to March', '1-2 days', 'Dwarka is an active sacred city; follow temple rules and avoid intrusive photography.', 'photo-1524492412937-b28074a5d7da'),
    city('somnath', 'Somnath', 'Somnath is a coastal pilgrimage town on the Saurashtra route, best planned around temple schedules.', ['Somnath Temple::Check official entry and event guidance.', 'Triveni Sangam::Follow local water-safety guidance.', 'Bhalka Tirth::Plan a local transfer.'], ['Allow time for evening temple programmes where published.', 'Combine with Veraval only with a clear transport plan.'], 'Diu Airport or Rajkot for wider routes', 'Veraval station', 'October to March', '1-2 days', 'An active pilgrimage destination; dress respectfully and follow posted rules.', 'photo-1524492412937-b28074a5d7da'),
    city('gir', 'Gir', 'Gir is a protected forest landscape best visited through authorised safari and conservation arrangements.', ['Gir National Park::Check seasonal opening and permit procedures.', 'Devalia Safari Park::Review current official booking guidance.', 'Sasan Gir::Use as the local stay and transfer base.'], ['Book authorised safaris only.', 'Wildlife sightings are never guaranteed; follow guide instructions.'], 'Diu or Keshod Airport (limited); Rajkot for wider services', 'Junagadh Junction (road onward)', 'Park season varies; confirm official dates', '2-3 nights', 'Respect wildlife, local communities and all protected-area rules.', 'photo-1516026672322-bc52d61a55d5'),
    city('statue-of-unity', 'Statue of Unity', 'The Statue of Unity visitor area is a large planned attraction near the Narmada, with timed access and transport arrangements.', ['Statue of Unity::Check official tickets and time slots.', 'Valley of Flowers::Review seasonal visitor routes.', 'Sardar Sarovar Dam viewpoints::Follow access rules.'], ['Plan the full visitor zone rather than a quick stop.', 'Use official shuttle and ticket information.'], 'Vadodara Airport', 'Ekta Nagar station', 'October to February', '1-2 days', 'The area includes local Adivasi communities; choose respectful, locally informed experiences.', 'photo-1477587458883-47145ed94245'),
  ],
  'madhya-pradesh': [
    city('bhopal', 'Bhopal', 'Bhopal is a lake city and a practical base for museums, heritage and nearby Sanchi or Bhimbetka.', ['Upper Lake::Use public access and water-safety guidance.', 'State Museum::Check current collections.', 'Taj-ul-Masajid::Follow mosque visitor etiquette.'], ['Explore the old city with a local guide.', 'Try Bhopali cuisine from established restaurants.'], 'Raja Bhoj Airport', 'Bhopal Junction', 'October to March', '2 days', 'Bhopali food and the city’s historic Muslim and tribal communities shape local culture.', 'photo-1477587458883-47145ed94245'),
    city('khajuraho', 'Khajuraho', 'Khajuraho is a temple heritage town where carved architecture and conservation merit a measured visit.', ['Western Group of Temples::Check site hours and visitor rules.', 'Eastern Group::Allow a separate walk or transfer.', 'Archaeological Museum::Review current access.'], ['Use a qualified guide for architectural context.', 'Follow conservation rules and avoid touching carvings.'], 'Khajuraho Airport', 'Khajuraho station', 'October to March', '1-2 days', 'The temples are active heritage sites; visit respectfully and follow photography rules.', 'photo-1477587458883-47145ed94245'),
    city('ujjain', 'Ujjain', 'Ujjain is a major pilgrimage city on the Shipra with temple visits shaped by darshan schedules and festivals.', ['Mahakaleshwar Temple::Use official booking and visitor guidance.', 'Ram Ghat::Follow bathing and river safety notices.', 'Kal Bhairav Temple::Check local access and queues.'], ['Plan temple visits around official timings.', 'Allow extra time during festival periods.'], 'Devi Ahilya Bai Holkar Airport, Indore', 'Ujjain Junction', 'October to March; major festivals are crowded', '1-2 days', 'Ujjain is a sacred city; dress modestly and follow temple instructions.', 'photo-1524492412937-b28074a5d7da'),
    city('gwalior', 'Gwalior', 'Gwalior is a historic city of hilltop fortifications, palaces and classical music heritage.', ['Gwalior Fort::Allow time for the hill route and monuments.', 'Jai Vilas Palace::Check museum opening details.', 'Tansen memorial::Visit with local cultural context.'], ['Use a guide for the fort complex.', 'Try regional snacks in the old city.'], 'Rajmata Vijaya Raje Scindia Airport', 'Gwalior Junction', 'October to March', '1-2 days', 'The city’s music and court history remain an important part of its identity.', 'photo-1477587458883-47145ed94245'),
    city('kanha', 'Kanha', 'Kanha is a protected forest and wildlife destination visited through regulated park safaris.', ['Kanha National Park::Check official opening, zones and permits.', 'Buffer areas::Use authorised local operators.', 'Nearby villages::Choose respectful community visits.'], ['Book authorised drives and remain quiet.', 'Do not expect guaranteed sightings or request off-route travel.'], 'Jabalpur Airport', 'Jabalpur Junction (road onward)', 'Park season varies; check official dates', '2-3 nights', 'Respect conservation rules and local communities around the park.', 'photo-1516026672322-bc52d61a55d5'),
    city('sanchi', 'Sanchi', 'Sanchi is a Buddhist heritage site with stupas, monasteries and a museum near Bhopal.', ['Great Stupa::Follow conservation and visitor rules.', 'Sanchi Museum::Check opening hours.', 'Udayagiri Caves::Plan a separate road transfer.'], ['Use a guide for Buddhist architectural history.', 'Carry sun protection for the open archaeological grounds.'], 'Raja Bhoj Airport, Bhopal', 'Sanchi station (limited); Bhopal Junction for wider rail', 'October to March', '1 day', 'Visit sacred heritage sites quietly and respect local worship and conservation guidance.', 'photo-1500530855697-b586d89ba3ee'),
  ],
}

const intentTypes = {
  'places-to-visit': {
    label: 'Places to Visit',
    pageType: 'intent',
    intro: (state, cities) => `Explore ${state.name} through a practical shortlist of places, from ${cities.slice(0, 3).map(({ name }) => name).join(', ')} to the landscapes and heritage sites between them. Choose stops that fit your season and available travel days.`,
    experiences: (state, cities) => [`Start with ${cities.slice(0, 3).map(({ name }) => name).join(', ')} and add nearby stops only when transfer time allows.`, `Use local guides at ${state.places[0][0]} and other complex heritage or cultural sites.`, 'Check opening notices, weather and local access rules before fixing the day plan.'],
  },
  'tour-packages': {
    label: 'Tour Packages',
    pageType: 'intent',
    intro: (state, cities) => `Compare ${state.name} tour ideas by route, pace and trip length. ${cities.slice(0, 2).map(({ name }) => name).join(' and ')} can anchor a focused itinerary; ask for written details before confirming any service.`,
    experiences: (state) => [`Use ${state.places[0][0]} and ${state.places[1][0]} as possible route anchors, subject to your dates and transport.`, 'Compare accommodation, guide, vehicle, meals and entry-fee inclusions line by line.', 'Request a current itinerary and itemised quotation; no unlisted package availability or price is implied here.'],
  },
  'travel-guide': {
    label: 'Travel Guide',
    pageType: 'guide',
    intro: (state) => `Use this ${state.name} travel guide to plan seasons, transport and a realistic route. ${state.intro}`,
    experiences: (state) => [`Plan around ${state.bestTime.toLowerCase()}`, `Use ${state.airport} and ${state.railway} as route-planning starting points; confirm live schedules before booking.`, `Allow ${state.duration.toLowerCase()} and keep a buffer for local travel conditions.`],
  },
  'family-tour-packages': {
    label: 'Family Tour Packages',
    pageType: 'intent',
    intro: (state, cities) => `Plan a family trip in ${state.name} around shorter travel days, suitable activities and practical accommodation. ${cities.slice(0, 2).map(({ name }) => name).join(' and ')} offer different starting points; check walking, heat and access needs for your group.`,
    experiences: (state) => [`Choose a manageable route using ${state.places[0][0]} as a base where it fits your interests.`, 'Share ages, mobility needs, dietary requirements and room arrangements before requesting a trip plan.', 'Confirm child-safety, transport and activity arrangements directly with each provider.'],
  },
  'honeymoon-packages': {
    label: 'Honeymoon Packages',
    pageType: 'intent',
    intro: (state, cities) => `Shape a couple’s journey in ${state.name} with a comfortable pace, stays that suit your preferences and time for private exploration. ${cities.slice(0, 2).map(({ name }) => name).join(' and ')} can anchor distinct heritage or nature routes.`,
    experiences: (state) => [`Choose between ${state.places[0][0]} and ${state.places[1][0]} based on the season and mood you want.`, 'Confirm room type, transfers, meal preferences and cancellation terms in writing.', 'Keep unscheduled time in the itinerary instead of adding a new stop every day.'],
  },
  'weekend-trips': {
    label: 'Weekend Trips',
    pageType: 'intent',
    intro: (state, cities) => `Plan a short ${state.name} break by choosing one base and nearby experiences. ${cities.slice(0, 2).map(({ name }) => name).join(' and ')} are possible starting points, but the right choice depends on your origin and transfer time.`,
    experiences: (state) => [`Select a single base such as ${state.places[0][0]} and avoid crossing the state on a short trip.`, 'Check Friday and Sunday transport schedules before booking.', 'Leave room for traffic, queues and weather rather than overfilling a weekend.'],
  },
  'heritage-places': {
    label: 'Heritage Places',
    pageType: 'intent',
    intro: (state) => `Explore ${state.name}’s historic places with time for context, conservation rules and the communities around each site. ${state.places.map(([name]) => name).join(', ')} provide route ideas for a focused heritage visit.`,
    experiences: (state) => [`Start with ${state.places[0][0]} and check official access information for monuments and museums.`, 'Choose a qualified local guide for complex heritage sites.', 'Respect active religious spaces and avoid touching protected structures.'],
  },
  temples: {
    label: 'Temples and Pilgrimage',
    pageType: 'intent',
    intro: (state) => `Plan temple and pilgrimage visits in ${state.name} around official access, local customs and realistic queue times. ${state.places.map(([name]) => name).join(', ')} are starting points; confirm current visitor guidance for each site.`,
    experiences: () => ['Check official darshan, registration, dress, photography and entry rules before travel.', 'Use locally informed guides and allow time for crowds on festival dates.', 'Keep sacred spaces clear and follow instructions from site staff.'],
  },
  'hill-stations': {
    label: 'Hill Stations',
    pageType: 'intent',
    intro: (state, cities) => `Find a hill-country route in ${state.name} with attention to altitude, road conditions and the season. ${cities.slice(0, 3).map(({ name }) => name).join(', ')} are possible stops; compare transfer times before combining them.`,
    experiences: () => ['Build acclimatisation and rest into higher-altitude trips.', 'Check current road, weather and trail conditions before departure.', 'Use registered local guides for trekking and outdoor activities.'],
  },
  'beach-holidays': {
    label: 'Beach Holidays',
    pageType: 'intent',
    intro: (state, cities) => `Plan a ${state.name} coastal break by choosing one beach base and checking the local sea and seasonal conditions. ${cities.slice(0, 3).map(({ name }) => name).join(', ')} offer different coast experiences and travel logistics.`,
    experiences: () => ['Follow lifeguard flags, posted notices and local swimming advice.', 'Check monsoon conditions and seasonal service availability before booking.', 'Use licensed operators for boat trips and water activities.'],
  },
  'wildlife-safaris': {
    label: 'Wildlife Safaris',
    pageType: 'intent',
    intro: (state, cities) => `Plan a responsible wildlife visit in ${state.name} around park seasons, official permits and authorised guides. ${cities.slice(0, 2).map(({ name }) => name).join(' and ')} offer possible starting points; sightings are never guaranteed.`,
    experiences: () => ['Check official park operating dates and permit rules.', 'Use authorised vehicles and maintain distance from wildlife.', 'Treat the habitat and local conservation rules as the priority.'],
  },
}

const commonIntents = ['places-to-visit', 'tour-packages', 'travel-guide']

function pathForState(state) {
  return directoryPath + '/' + state.slug
}

export function destinationRegionPath(region) {
  return directoryPath + '/regions/' + region.slug
}

function pageBase({
  path, parentPath, pageType, breadcrumbLabel, title, description, intro, image, alt, highlights, experiences,
  bestTime, reach, airport, railway, stay, transport, culture, duration, links, faqs,
}) {
  return {
    path, parentPath, pageType, breadcrumbLabel, title, description, intro, heroImage: image, heroAlt: alt,
    highlights, experiences, bestTime, reach, airport, railway, stay, transport, culture, duration,
    tourInfo: 'Browse the published India tour catalogue for current itineraries. Destination-specific dates, inclusions and quotations are confirmed by the travel team; enquire if this place is not listed.',
    links, faqs,
  }
}

const cityPagesByState = new Map()

for (const state of stateData) {
  const cityPages = (cityData[state.slug] ?? []).map((place, index, list) => {
    const path = pathForState(state) + '/' + place.slug
    const siblingLinks = list
      .filter((sibling) => sibling.slug !== place.slug)
      .slice(0, 3)
      .map((sibling) => pathForState(state) + '/' + sibling.slug)
    return pageBase({
      path,
      parentPath: pathForState(state),
      pageType: 'city',
      title: `${place.name}, ${state.name} Travel Guide`,
      description: `Plan a ${place.name} visit with local highlights, seasonal guidance, transport details and practical advice for exploring ${state.name}.`,
      intro: place.intro,
      image: place.image || state.image,
      alt: `${place.name} destination and landscape in ${state.name}`,
      highlights: place.highlights.map((highlight) => {
        const [title, detail] = highlight.split('::')
        return { title, detail }
      }),
      experiences: place.experiences,
      bestTime: place.bestTime + '. Check local forecasts and site access before travel.',
      reach: `${place.name} is reached by air via ${place.airport}, then onward by road where needed. Rail access is via ${place.railway}. Confirm current schedules and last-mile transport before booking.`,
      airport: place.airport,
      railway: place.railway,
      stay: `Choose accommodation according to the area you plan to explore in ${place.name}; confirm location, access, meals and seasonal services directly.`,
      transport: `Use confirmed local transfers for longer distances in ${place.name}. Agree pickup points and fares in advance, and allow time for local traffic or weather.`,
      culture: place.culture,
      duration: place.duration,
      links: [pathForState(state), ...siblingLinks, packagePath],
      faqs: [
        { question: `How long should I plan for ${place.name}?`, answer: `${place.duration} is a practical starting point. Add time for transfers, weather and any slower-paced visits.` },
        { question: `How do I reach ${place.name}?`, answer: `The nearest listed air gateway is ${place.airport}; rail access is via ${place.railway}. Verify schedules and onward transfers for your dates.` },
      ],
    })
  })
  cityPagesByState.set(state.slug, cityPages)
}

export const destinationRegionPages = destinationRegions.map((region) => {
  const states = stateData.filter((state) => state.region === region.slug)
  return pageBase({
    path: destinationRegionPath(region),
    breadcrumbLabel: region.name,
    parentPath: directoryPath,
    pageType: 'region',
    title: `${region.name} Travel Guide and Destinations`,
    description: `Explore ${region.name} destinations, state travel guides, city highlights and practical seasonal planning.`,
    intro: region.intro,
    image: region.image,
    alt: region.alt,
    highlights: region.highlights,
    experiences: region.experiences,
    bestTime: region.bestTime,
    reach: region.reach,
    culture: region.culture,
    duration: region.duration,
    stay: `Accommodation ranges from city hotels to local guesthouses and nature stays. Choose a base for each route and confirm transfers, facilities and seasonal availability directly.`,
    transport: 'Use rail or air for long distances and local transport for the last mile. Confirm road access, station transfers and weather conditions before travel.',
    links: states.map(pathForState),
    faqs: [
      { question: `How should I plan a ${region.name} trip?`, answer: region.duration + ' Choose connected destinations and leave realistic time for transfers.' },
      { question: `When is the best time to visit ${region.name}?`, answer: region.bestTime },
    ],
  })
})

export const destinationStatePages = stateData.map((state) => {
  const cities = cityPagesByState.get(state.slug) ?? []
  const intentPaths = (state.intents ?? commonIntents).map((intent) => pathForState(state) + '/' + intent)
  return pageBase({
    path: pathForState(state),
    breadcrumbLabel: state.name,
    parentPath: destinationRegionPath(destinationRegions.find((region) => region.slug === state.region)),
    pageType: 'state',
    title: `${state.name} Travel Guide: Places to Visit and Plan Your Trip`,
    description: `Explore ${state.name} destinations with a practical travel guide to popular places, experiences, seasons, airports and rail connections.`,
    intro: state.intro,
    image: state.image,
    alt: state.alt,
    highlights: state.places.map(([title, detail]) => ({ title, detail })),
    experiences: state.experiences,
    bestTime: state.bestTime,
    reach: `Air gateway: ${state.airport} Railway gateways: ${state.railway} Choose the arrival point for your first destination and confirm onward schedules.`,
    airport: state.airport,
    railway: state.railway,
    stay: `State-wide routes need more than one base. Compare accommodation location, accessibility and transport for each stop; confirm current rates directly with providers.`,
    transport: 'Use rail or domestic flights for long distances and a confirmed local driver or licensed operator for regional routes. Check seasonal road and protected-area access.',
    culture: state.culture,
    duration: state.duration,
    links: [...cities.map(({ path }) => path), ...intentPaths, packagePath],
    faqs: [
      { question: `What are popular places to visit in ${state.name}?`, answer: state.places.map(([name]) => name).join(', ') + ' are useful starting points. Choose a route around your time and interests.' },
      { question: `How do I plan transport in ${state.name}?`, answer: `Start with ${state.airport} and ${state.railway}, then confirm the current journey to each destination.` },
    ],
  })
})

const intentPages = stateData.flatMap((state) => {
  const cities = cityPagesByState.get(state.slug) ?? []
  return (state.intents ?? commonIntents).map((intentSlug) => {
    const intent = intentTypes[intentSlug]
    if (!intent) throw new Error(`Unknown destination intent: ${intentSlug}`)
    const path = pathForState(state) + '/' + intentSlug
    const title = intentSlug === 'places-to-visit'
      ? `Best Places to Visit in ${state.name}`
      : intentSlug === 'travel-guide'
        ? `${state.name} Travel Guide`
        : `${intent.label} in ${state.name}`
    return pageBase({
      path,
      parentPath: pathForState(state),
      pageType: intent.pageType,
      title,
      description: `Plan ${state.name} ${intent.label.toLowerCase()} with relevant destinations, seasonal advice and practical route guidance.`,
      intro: intent.intro(state, cities),
      image: state.image,
      alt: state.alt,
      highlights: state.places.map(([highlightTitle, detail]) => ({ title: highlightTitle, detail })),
      experiences: intent.experiences(state, cities),
      bestTime: state.bestTime,
      reach: `Air gateway: ${state.airport} Railway gateways: ${state.railway} Confirm the route to your chosen destination before booking.`,
      airport: state.airport,
      railway: state.railway,
      stay: `Select a base that matches the ${intent.label.toLowerCase()} route and your group’s needs. Confirm location, services and current rates with the provider.`,
      transport: 'Compare rail, air and road time for the complete route. For local experiences, confirm the operator, pickup point and inclusions in writing.',
      culture: state.culture,
      duration: state.duration,
      links: [pathForState(state), ...cities.slice(0, 4).map(({ path: cityPath }) => cityPath), packagePath],
      faqs: [
        { question: `How do I choose ${state.name} ${intent.label.toLowerCase()}?`, answer: `Start with ${state.places.map(([name]) => name).join(', ')} and select the route that fits your dates, travel pace and interests.` },
        { question: `Are prices or bookings confirmed on this page?`, answer: 'No. The page is a planning guide. Confirm current package inclusions, availability and an itemised quotation with the travel team before booking.' },
      ],
    })
  })
})

export const destinationCityPages = [...cityPagesByState.values()].flat()
export const destinationPages = [...destinationRegionPages, ...destinationStatePages, ...destinationCityPages, ...intentPages]

export const destinationDirectoryPage = pageBase({
  path: directoryPath,
  parentPath: '/india',
  pageType: 'directory',
  title: 'Destinations in India: Explore by Region, State and City',
  description: 'Explore India destinations by region and state. Find city guides, practical travel information and route ideas for your next trip.',
  intro: 'From Himalayan hill towns and historic cities to tropical coasts and forest landscapes, use this directory to compare places and plan a route that fits your time.',
  image: '/amber-fort-hero.png',
  alt: 'Amber Fort in Rajasthan, one of India’s many travel destinations',
  highlights: [
    { title: 'Choose a region', detail: 'Start with North, South, East, West or Central India to narrow the distance and season.' },
    { title: 'Explore state guides', detail: 'Compare practical transport, cultural context and popular places before fixing an itinerary.' },
    { title: 'Build a city route', detail: 'Open individual destination guides for local highlights, airport and railway information.' },
  ],
  experiences: ['Search by destination name, state or region.', 'Compare regional seasons before combining distant places.', 'Check current opening, transport and safety information before travelling.'],
  bestTime: 'India has no single travel season. Weather varies by state, coast, altitude and activity; check local guidance for every destination.',
  reach: 'International gateways and state-level airports connect with rail and road networks. Choose arrival and departure points to minimise backtracking.',
  stay: 'Accommodation options range from city hotels to homestays and nature lodges. Confirm exact location, accessibility, services and current rates directly.',
  transport: 'Use rail and air for long distances and confirmed local transport for the last mile. Allow realistic time for traffic, weather and seasonal road conditions.',
  culture: 'India is culturally diverse. Learn local etiquette, ask before photographing people and follow guidance at active religious and community sites.',
  duration: 'Choose a focused region for a short trip; a multi-state route needs additional days for transfers and time on the ground.',
  links: [
    ...destinationRegions.map(destinationRegionPath),
    ...stateData.map(pathForState),
    packagePath,
    '/india-travel-packages',
  ],
  faqs: [
    { question: 'How can I search destinations in India?', answer: 'Use the directory search or browse by region and state, then open a city guide for transport, season and local planning information.' },
    { question: 'Where can I see current tour package details?', answer: 'Browse the published India tour catalogue and confirm dates, inclusions and current quotations with the travel team.' },
  ],
})

export const featuredDestinationPaths = [
  '/destinations-in-india/rajasthan/jaipur',
  '/destinations-in-india/himachal-pradesh/manali',
  '/destinations-in-india/uttarakhand/rishikesh',
  '/destinations-in-india/kerala/munnar',
  '/destinations-in-india/goa/north-goa',
  '/destinations-in-india/uttar-pradesh/agra',
  '/destinations-in-india/karnataka/hampi',
  '/destinations-in-india/west-bengal/darjeeling',
]

export const allDestinationPages = [destinationDirectoryPage, ...destinationPages]

export function getDirectoryBreadcrumbs(page, findPage) {
  return getPageBreadcrumbs(page, findPage)
}
