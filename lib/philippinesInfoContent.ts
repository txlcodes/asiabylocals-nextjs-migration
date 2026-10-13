// Philippines (Manila + Cebu) authority pages (2026-10). Same CityInfoData
// shape as lib/taiwanInfoContent.ts / lib/malaysiaInfoContent.ts. Philippines
// launched with 677 live tours (Manila 213, Cebu 464) and zero authority
// pages — this is the first batch, 30 pages (13 Manila, 17 Cebu, weighted
// toward Cebu's larger tour count). Reached via getPhilippinesInfoContent()
// -> getCityInfoContent(). Every tourCard slug is taken from the live tour
// list: GET /api/public/tours?country=Philippines&city=Manila&status=approved
// and city=Cebu.
import type { CityInfoData } from './cityInfoContent';

export function getPhilippinesInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    // ============ MANILA ============

    case "best-time-to-visit-manila":
      return {
        title: "Best Time to Visit Manila (2026): Weather, Typhoons and Heat Month by Month",
        description: "Manila runs hot and humid year-round with a real typhoon season from June through November. Here's when to actually go, and what each season means for your itinerary.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c8d25b1bc8b9093b24ce020a81b9aaab739c288090ce928c9f2877c5033dffcf.jpg",
        fastFacts: [
          { icon: "Sun", label: "Best overall window", value: "December to February — driest, least humid, no typhoon risk" },
          { icon: "AlertTriangle", label: "Typhoon season", value: "June to November, peaking July-October" },
          { icon: "Thermometer", label: "Hottest, driest months", value: "March to May, 'summer' — temperatures often exceed 35°C" },
          { icon: "CloudRain", label: "Wettest months", value: "July to September, driven by the southwest monsoon (habagat)" },
        ],
        sections: [
          {
            title: "December to February Is the Genuinely Comfortable Window",
            content: "Manila sits close enough to the equator that there's no real cold season, but December through February is as close as it gets to comfortable: humidity drops from the suffocating mid-year peak, daytime highs settle into the low 30s°C rather than pushing 36-38°C, and typhoon risk is essentially zero. This is also the Philippines' most popular domestic travel season because of Christmas and New Year, which means flights and hotels in Manila itself are not cheap, but the weather dividend is real if you're walking Intramuros for hours or doing a Tagaytay day trip where visibility over Taal Lake actually matters.\n\nThe tradeoff is crowding at major sights and higher prices around the holidays specifically; late January through February threads the needle of good weather with lower demand.",
          },
          {
            title: "June to November Carries Genuine Typhoon Risk, Not Just Rain",
            content: "The Philippines sits directly in the Pacific typhoon belt, and Metro Manila's own typhoon season runs roughly June through November, peaking from July to October. This isn't a minor planning footnote — a direct or near-direct typhoon hit can shut down flights into and out of NAIA for a day or more, flood low-lying streets across the metro (Manila's drainage system struggles with sustained heavy rain even without a typhoon), and suspend outdoor activities and sometimes work and school city-wide. Signal warnings are issued ahead of time and are worth checking (PAGASA, the Philippine weather bureau, publishes them), but a trip booked in this window should build in at least one flexible buffer day rather than assuming a tight itinerary will hold.\n\nWithin this window, the **southwest monsoon (habagat, roughly July-September)** adds its own sustained heavy rain on top of typhoon risk, distinct from a typhoon itself in that it's a steady wet pattern rather than a single storm system. August and September are typically the wettest calendar months in Manila for this reason.",
            tourCard: { slug: "manila-manila-bay-sunset-walking-tour-waterfront", title: "Manila: Manila Bay Sunset Walking Tour & Waterfront History", description: "An evening-focused walk that works around daytime heat or an afternoon downpour.", price: "From $79", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c8d25b1bc8b9093b24ce020a81b9aaab739c288090ce928c9f2877c5033dffcf.jpg" },
          },
          {
            title: "March to May: Manila's Hot, Dry 'Summer'",
            content: "March through May is the Philippines' hot dry season, and in Manila that means daytime highs frequently exceeding 35°C with intense sun and minimal cloud cover — the heat is more of a planning issue here than the humidity, which is lower than the June-November stretch. April and May specifically are when most Manila residents try to get out of the city to the beach or mountains, which is worth knowing if you're trying to book a Tagaytay or Batangas day trip during this window.\n\nThis is a reasonable season for walking tours of Intramuros if you schedule them for early morning or late afternoon rather than midday, and it's the safest weather window outside December-February for anyone specifically avoiding typhoon risk while still wanting warm, dry days.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Manila?", a: "January and February are the strongest overall months: typhoon season has fully ended, humidity is at its lowest, and daytime temperatures are the mildest the city gets, without the holiday-season crowding of December." },
          { q: "When is typhoon season in the Philippines?", a: "Roughly June through November for Metro Manila, peaking July through October. A direct hit can suspend flights, flood streets and shut down outdoor activities city-wide for a day or more, so build flexibility into trips during this window." },
          { q: "Is Manila always hot?", a: "Yes, essentially — there's no true cold season. March to May is the hottest, driest stretch; June to November is hot and increasingly wet with typhoon risk; December to February is the mildest and driest comfortable window." },
          { q: "What is the southwest monsoon (habagat)?", a: "A seasonal wind pattern, roughly July through September, that brings sustained heavy rain to Manila distinct from a typhoon's single storm track. It overlaps with typhoon season and is the main reason August-September are the wettest calendar months." },
        ],
      };

    case "things-to-do-in-manila":
      return {
        title: "20+ Best Things to Do in Manila (2026): The Complete List",
        description: "From Intramuros and Fort Santiago to jeepney food crawls and a Manila Bay sunset — the real list of what's worth your time in the Philippine capital.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/35b2c0e467012b43d605518d1fac67230f37b8c185310e2f2326b06a6c53bb28.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Top historic site", value: "Intramuros, Manila's walled Spanish colonial core" },
          { icon: "Sunset", label: "Best free activity", value: "A Manila Bay sunset walk along the waterfront" },
          { icon: "Utensils", label: "Don't skip", value: "A guided food crawl through Binondo, the world's oldest Chinatown" },
          { icon: "MapPin", label: "Easiest day trip", value: "Tagaytay, for the Taal Volcano ridge view" },
        ],
        sections: [
          {
            title: "Intramuros: Manila's Walled Spanish Core",
            content: "**Intramuros** is the obvious starting point for any first visit — a walled district built by Spanish colonizers starting in 1571, and the historic seat of Spanish, then American, then Japanese colonial administration until much of it was flattened in the 1945 Battle of Manila. What survives and has been restored is genuinely striking: cobblestone streets, Baroque churches including San Agustin Church (a UNESCO World Heritage Site and the oldest stone church in the Philippines), and the old city walls themselves.\n\nInside Intramuros, **Fort Santiago** is the single most important stop — a citadel that served as a Spanish military fort, then infamously as a Japanese prison and execution site during WWII, and is where Filipino national hero José Rizal spent his final night before his 1896 execution. His cell and the bronze footsteps marking his last walk to the execution site are genuinely moving rather than a staged tourist add-on.",
            tourCard: { slug: "manila-tour-of-fort-santiagos-dungeons-rizals", title: "Manila: Tour of Fort Santiago's Dungeons & Rizal's Last Walk", description: "A guided walk through the citadel's WWII dungeons and Rizal's final hours.", price: "From $47", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36fa199a7cab779366613d14f92d23bfa6c36f3abd4701ea8785946e5fb05aa2.jpg" },
          },
          {
            title: "Binondo and Chinatown: The World's Oldest Chinatown",
            content: "**Binondo**, founded in 1594, claims the title of the world's oldest continuously operating Chinatown, predating most others by centuries. It's a genuinely dense food destination — dumpling houses, century-old noodle shops and Hokkien-Filipino fusion dishes that don't exist quite the same way anywhere else, a legacy of Chinese merchants who settled Manila under Spanish rule. A guided food tour is worth it here specifically because the best stalls and shops aren't always obvious from the street, and a local guide gets you past the language and ordering barrier quickly.\n\nBinondo sits adjacent to Intramuros across the Pasig River, so the two pair naturally into a single half-day covering history and food back to back.",
            tourCard: { slug: "manila-binondo-chinatown-walking-tour-with-food", title: "Manila: Binondo Chinatown Walking Tour with Food Samples", description: "A guided crawl through the world's oldest Chinatown with tastings along the way.", price: "From $194", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2adfd9286c73fc964db3fc7c7ca20b32f882093c176da73e237ebc5e4a5b318d.jpg" },
          },
          {
            title: "Manila Bay, Ocean Park and the Waterfront",
            content: "**Manila Bay's** sunset is one of the city's best free attractions, best experienced along the Baywalk promenade between Roxas Boulevard and the Cultural Center of the Philippines — a genuinely spectacular, nearly year-round orange-red sunset over the bay's open water that locals treat as a daily ritual rather than a tourist spectacle. **Manila Ocean Park**, right next to Rizal Park, is a solid indoor option for an underwater-tunnel walk through a shark and ray tank if you want a break from the heat or a rainy-day backup.\n\nRizal Park itself (Luneta), where José Rizal was executed in 1896, anchors the waterfront with his monument and is a reasonable spot to decompress between Intramuros and the bay.",
            tourCard: { slug: "manila-ocean-park-tour-with-an-underwater-tunnel", title: "Manila Ocean Park: Tour with an Underwater Tunnel Walk", description: "An indoor aquarium walk-through that works as a heat or rain backup.", price: "From $87", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3739d74f1d646c641834f815c2ffe1dd4c2ed6d9ffa0cc1e09bd3532045f057b.jpg" },
          },
          {
            title: "If You Have More Time: Tagaytay and Beyond",
            content: "**Tagaytay**, roughly 1.5-2 hours south of Manila by road, sits on a ridge overlooking **Taal Lake and Taal Volcano**, one of the smallest active volcanoes in the world and genuinely impressive to see from the ridge with a coffee in hand. It's the most popular day trip from Manila for a reason — cooler highland air, the volcano view, and local specialties like bulalo (beef shank soup) and fresh produce from the surrounding farms.\n\nFor anyone with a full extra day, the **Banaue and Batad rice terraces** further north are a genuine bucket-list detour, though they require an overnight commitment rather than a single day. See our dedicated Taal Volcano day trip guide for the specifics on the Tagaytay option.",
            tourCard: { slug: "private-tour-manila-tagaytay-taal-volcano-day-tour", title: "Private Tour! Manila, Tagaytay & Taal Volcano Day Tour", description: "A full day covering the Tagaytay ridge view and Taal Volcano in one private trip.", price: "From $201", duration: "11 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6304876ee6b3c390549e2de990309b11d031c6621df95405850d1fbf2bca7faa.jpg" },
          },
        ],
        faqs: [
          { q: "What is Manila's number one attraction?", a: "Intramuros, the walled Spanish colonial core, is the single most important historic site, with Fort Santiago inside it as the standout stop for its WWII and José Rizal history. Binondo's Chinatown food scene and a Manila Bay sunset are close behind." },
          { q: "Is one day enough to see Manila?", a: "You can cover Intramuros, Fort Santiago, a Binondo food stop and a Manila Bay sunset in one focused day, but a Tagaytay/Taal Volcano day trip needs an additional full day of its own." },
          { q: "What is there to do in Manila besides history?", a: "A genuine amount: Binondo's food scene, Manila Ocean Park, a Manila Bay sunset walk, Makati's modern skyline and nightlife, and day trips to Tagaytay for the Taal Volcano view." },
          { q: "Is Manila good for a short layover?", a: "Reasonably — NAIA is roughly 30-45 minutes from Intramuros depending on traffic, and a focused half-day covering Intramuros and Fort Santiago fits into a long layover, though Manila's traffic makes timing tighter than it looks on a map." },
        ],
      };

    case "manila-travel-guide-2026":
      return {
        title: "Manila Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Manila — entry rules, money, getting around, language and the traffic reality that shapes every itinerary in this city.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dd6771bdecc93347e02fe6676f14ce2aa9ce7aa4e5f271eea882a7318d5454e8.jpg",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "Most Western and many Asian nationalities visa-free for up to 30 days" },
          { icon: "DollarSign", label: "Currency", value: "Philippine Peso (PHP/₱)" },
          { icon: "Car", label: "Getting around", value: "Grab ride-hailing, jeepneys, LRT/MRT — traffic is the main planning constraint" },
          { icon: "MessageCircle", label: "Languages", value: "Filipino (Tagalog) and English, both official; English is very widely spoken" },
        ],
        sections: [
          {
            title: "Entry Rules: Visa-Free for Most, 30 Days Standard",
            content: "The Philippines runs one of the more generous visa-free regimes in Southeast Asia. Citizens of the United States, Canada, the United Kingdom, most of the EU, Australia, New Zealand and a wide range of other nationalities can enter visa-free for stays of up to **30 days**, extendable at a Bureau of Immigration office for those wanting to stay longer. Entry requires a passport valid for at least six months beyond arrival and, technically, proof of onward travel, though this is inconsistently checked.\n\nEvery arriving traveler must also complete the **eTravel registration**, a free online arrival form similar to other countries' digital arrival cards, ideally completed within 72 hours before landing. See our dedicated Philippines visa guide for the full nationality breakdown and extension process.",
          },
          {
            title: "Money and Costs",
            content: "The **Philippine Peso (₱/PHP)** is the local currency. Cards are widely accepted in malls, hotels and chain restaurants in Manila, but a large share of jeepney fares, street food, sari-sari stores and smaller eateries are cash-only, so carry pesos rather than assuming card payment everywhere. GCash, a mobile wallet, is extremely widely used by Filipinos for everyday payments but typically requires a local SIM and bank-linkable setup, so it's not a practical default for a short-term visitor.\n\nManila is good value by most standards: a hawker-style meal or jeepney-stop eatery runs roughly ₱100-200, a mid-range restaurant dinner ₱500-1,200 per person, and a 3-4 star hotel room commonly ₱3,000-6,000/night depending on location and season. Tipping isn't mandatory but is appreciated and increasingly expected in tourist-facing restaurants and for tour guides.",
          },
          {
            title: "Getting Around: Traffic Is the Real Planning Variable",
            content: "Manila's traffic is a genuine, daily, citywide constraint on itinerary planning, not an occasional inconvenience — see our dedicated traffic reality guide for the specifics, but the short version is: budget far more transit time between points than the map distance suggests, especially during weekday rush hours (roughly 7-9am and 5-8pm). **Grab** (ride-hailing) is the practical default for most visitors, far more reliable and comfortable than hailing a metered taxi, though surge pricing during rush hour and rain is common. The **LRT and MRT** elevated rail lines cover some key corridors (including a useful connection toward Intramuros) and avoid surface traffic entirely, worth using when your route lines up with a station.\n\n**Jeepneys**, the Philippines' iconic modified-jeep public transport, are the cheapest option and a genuine piece of local culture worth experiencing at least once — see our dedicated jeepney guide for how routes and fares actually work.",
            tourCard: { slug: "manila-food-tour-cooking-local-market-visit-via", title: "Manila: Food Tour! Cooking & Local Market Visit via Jeepney", description: "A guided food and market tour that uses jeepneys as transport, not just a photo op.", price: "From $82", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0383216b8ddad3cad5ea7067eeca7d08916a68c1adefa530ee5ddb78961f7f15.png" },
          },
          {
            title: "Language, Food and Everyday Etiquette",
            content: "**Filipino (Tagalog)** and **English** are both official languages, and English is spoken extremely widely — more so than in most other Southeast Asian capitals, a legacy of American colonial-era schooling, and nearly all signage, menus and transport information appear in English. This makes Manila genuinely easy to navigate independently compared to cities where a language barrier complicates every interaction.\n\nFilipino food culture is built around rice, grilled and adobo-style dishes, and a strong Spanish-Chinese-Malay fusion identity — adobo, sinigang (sour tamarind soup), lechon (whole roast pig, especially associated with Cebu) and halo-halo (a shaved-ice dessert) are the dishes worth prioritizing. Filipinos are broadly warm and hospitality-oriented toward visitors; directly asking for help is rarely met with reluctance, even through a minor communication gap.",
          },
        ],
        faqs: [
          { q: "Do I need a visa for the Philippines?", a: "Most Western nationalities and many Asian ones do not — citizens of the US, UK, most of the EU, Australia, New Zealand and others can enter visa-free for up to 30 days. Everyone must complete the free online eTravel registration before arrival regardless." },
          { q: "What currency does the Philippines use?", a: "The Philippine Peso (₱/PHP). Cards work in malls and hotels, but cash is needed for jeepneys, street food and many smaller local eateries." },
          { q: "Is English spoken in Manila?", a: "Yes, very widely — English is a co-official language and spoken fluently by most residents, a legacy of American colonial-era education. Signage and menus are typically bilingual or English-only." },
          { q: "What is the biggest practical challenge of visiting Manila?", a: "Traffic. It affects almost every itinerary decision in the city — budget significantly more transit time than map distance suggests, especially on weekdays, and see our dedicated traffic reality guide before planning a tight schedule." },
        ],
      };

    case "manila-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Manila Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Manila itinerary built around Intramuros, Fort Santiago and a Manila Bay sunset — honest about what fits given the city's traffic.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e8a9a78b3d24eade6a0b93f0e3079bbe6e7a46b0ace2ba8c72ede3dae4f3544e.jpg",
        sections: [
          {
            title: "Morning: Intramuros and Fort Santiago",
            content: "Start inside **Intramuros** as early as you reasonably can — the walled district is at its most walkable before midday heat sets in, and Fort Santiago in particular benefits from fewer crowds early. Walk the old city walls, visit San Agustin Church, and give Fort Santiago itself proper time for the WWII dungeons and the José Rizal exhibit covering his final hours before execution.",
            tourCard: { slug: "manila-3-hour-intramuros-guided-walking-tour", title: "Manila: 3-Hour Intramuros Guided Walking Tour", description: "A guided morning loop through the walled city's key sights.", price: "From $76", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/35b2c0e467012b43d605518d1fac67230f37b8c185310e2f2326b06a6c53bb28.jpeg" },
          },
          {
            title: "Midday: Binondo Food Crawl",
            content: "Cross into **Binondo**, the world's oldest Chinatown, for lunch via a food tour or self-guided wandering through its noodle shops and dumpling houses — this is a short trip from Intramuros but Manila traffic means it's still worth budgeting 20-30 minutes for what looks like a nearby crossing on a map. A guided food stop here solves the ordering-language gap quickly if you're short on time.",
            tourCard: { slug: "flavors-of-manila-guided-7-food-tasting-tour-with", title: "Flavors of Manila: Guided 7+ Food Tasting Tour with a Local", description: "A compact midday food crawl that fits neatly into a one-day itinerary.", price: "From $81", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4b1974bdbe8c2ee31bdb359d1afbaf7d41777510b2ba9fc06f3f98040da33756.jpg" },
          },
          {
            title: "Evening: Manila Bay Sunset",
            content: "Close the day along **Manila Bay's Baywalk**, between Roxas Boulevard and the Cultural Center of the Philippines, for one of the city's best free experiences — a genuinely dramatic sunset over open water that's become a daily local ritual. Combine it with Rizal Park nearby if you still have energy.\n\n**The honest tradeoff of a one-day itinerary:** you will not have time to add a Tagaytay/Taal Volcano day trip or Makati's modern district. If either matters more than the Intramuros-to-bay loop above, swap this plan — Manila genuinely rewards a 3-day trip; see our 3-day itinerary for the fuller version.",
            tourCard: { slug: "manila-manila-bay-sunset-walking-tour-waterfront", title: "Manila: Manila Bay Sunset Walking Tour & Waterfront History", description: "A guided evening walk timed to the bay's sunset.", price: "From $79", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c8d25b1bc8b9093b24ce020a81b9aaab739c288090ce928c9f2877c5033dffcf.jpg" },
          },
        ],
        faqs: [
          { q: "Can you see Manila in one day?", a: "You can realistically cover Intramuros, Fort Santiago, a Binondo food stop and a Manila Bay sunset in one focused day. Tagaytay's Taal Volcano day trip and Makati won't fit — those need an additional day." },
          { q: "What's the best order for a Manila day trip?", a: "Intramuros and Fort Santiago in the morning before the heat builds, Binondo for lunch, and Manila Bay for sunset in the evening — this keeps outdoor walking in the cooler parts of the day." },
          { q: "Is traffic a problem for a one-day Manila itinerary?", a: "Yes, budget for it — even the short Intramuros-to-Binondo crossing can take longer than a map suggests. Stick to a geographically compact loop like the one above rather than zigzagging across the metro." },
        ],
      };

    case "philippines-visa-guide-for-tourists":
      return {
        title: "Philippines Visa Guide 2026: Who Needs One, Who Doesn't, and the eTravel Form",
        description: "The Philippines runs a generous 30-day visa-free regime for most nationalities. Here's who qualifies, how extensions work, and what the mandatory eTravel registration actually requires.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dd6771bdecc93347e02fe6676f14ce2aa9ce7aa4e5f271eea882a7318d5454e8.jpg",
        fastFacts: [
          { icon: "Clock", label: "Most nationalities (US/Canada/UK/EU/Australia/NZ and more)", value: "30 days visa-free on arrival" },
          { icon: "FileText", label: "Mandatory for everyone", value: "Free online eTravel registration, ideally within 72 hours before arrival" },
          { icon: "Calendar", label: "Extensions", value: "Available at a Bureau of Immigration office, typically in increments up to 59 days then beyond" },
          { icon: "Globe", label: "Passport validity", value: "At least 6 months beyond your planned departure date" },
        ],
        sections: [
          {
            title: "Who Can Enter Visa-Free, and for How Long",
            content: "The Philippines' visa-free list covers a very wide range of nationalities. **United States, Canada, United Kingdom, Japan, South Korea, Australia, New Zealand** and almost all **European Union** nationalities can enter visa-free for up to **30 days**. This is one of the more straightforward entry regimes in the region — there's no separate trial program complexity to track, as there sometimes is elsewhere in Southeast Asia, and the 30-day allowance applies consistently across most eligible passports.\n\nIf your nationality isn't on the visa-free list, you'll need to apply at a Philippine embassy or consulate in advance; this generally cannot be arranged on arrival.",
          },
          {
            title: "The eTravel Registration Is Mandatory for Everyone",
            content: "Regardless of visa-free status, every visitor must complete the **eTravel** online form, ideally within **72 hours** before arrival, through the Philippines' official government portal. This covers passport, flight and health-declaration-style details and is free — it is not a visa application, but skipping it can cause delays at the immigration counter, and third-party sites sometimes charge a fee for something free to do directly through the official portal.\n\nKeep your passport valid for at least six months beyond your planned departure, and be ready to show proof of onward or return travel if asked, though enforcement of this specific check varies.",
          },
          {
            title: "Extending Your Stay Beyond 30 Days",
            content: "Visitors wanting to stay longer than the initial 30-day visa-free period can extend at a **Bureau of Immigration** office in Manila or other major cities, typically in further increments, with fees that increase the longer and more frequently you extend. This is a routine, well-trodden process for long-stay travelers and digital nomads in the Philippines, but it does require an in-person visit and should be planned a few days ahead of your current permit's expiry rather than left to the last day.",
          },
        ],
        faqs: [
          { q: "Do Americans need a visa for the Philippines?", a: "No — US citizens can enter visa-free for up to 30 days, but must still complete the free online eTravel registration before arrival." },
          { q: "What is the Philippines' eTravel form?", a: "A mandatory online registration, separate from any visa, completed within 72 days before arrival through the official government portal. It's free and covers passport, flight and basic health details." },
          { q: "Can I extend my stay in the Philippines past 30 days?", a: "Yes — visit a Bureau of Immigration office before your current permit expires to extend in further increments. This is routine for travelers wanting to stay longer than the initial visa-free period." },
          { q: "How long must my passport be valid to enter the Philippines?", a: "At least six months beyond your planned departure date, which is checked at check-in and immigration." },
        ],
      };

    case "intramuros-fort-santiago-guide":
      return {
        title: "Intramuros and Fort Santiago Guide 2026: What to See and Rizal's Last Walk",
        description: "Manila's walled Spanish colonial core and the fort where José Rizal spent his final night — what's actually worth your time inside Intramuros and Fort Santiago.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36fa199a7cab779366613d14f92d23bfa6c36f3abd4701ea8785946e5fb05aa2.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Built", value: "Spanish colonial walled city, construction began 1571" },
          { icon: "Church", label: "Key stop", value: "San Agustin Church — UNESCO World Heritage, oldest stone church in the Philippines" },
          { icon: "History", label: "Fort Santiago's dark history", value: "Spanish military fort, later a Japanese WWII prison and execution site" },
          { icon: "Clock", label: "Time needed", value: "Half a day minimum to cover the walls, San Agustin and Fort Santiago properly" },
        ],
        sections: [
          {
            title: "Intramuros: What Survived and What Was Rebuilt",
            content: "**Intramuros** ('within the walls') was Manila's entire fortified city under Spanish rule, built starting in 1571 to defend against raids and foreign incursion. Much of what you see today is reconstruction — the district was devastated in the 1945 Battle of Manila during WWII, when Japanese forces made their last stand here and American artillery leveled most of the original structures. **San Agustin Church**, a UNESCO World Heritage Site and the oldest stone church in the Philippines (completed 1607), is the one major building that survived largely intact, and its interior ceiling trompe l'oeil paintings are worth slowing down for.\n\nWalking the old city walls themselves, particularly the Baluarte de San Diego bastion, gives a sense of the fortification's original scale even where buildings inside have been rebuilt.",
            tourCard: { slug: "manila-3-hour-intramuros-guided-walking-tour", title: "Manila: 3-Hour Intramuros Guided Walking Tour", description: "A guided loop covering the walls, San Agustin Church and the district's layout.", price: "From $76", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/35b2c0e467012b43d605518d1fac67230f37b8c185310e2f2326b06a6c53bb28.jpeg" },
          },
          {
            title: "Fort Santiago: Rizal's Final Hours and the WWII Dungeons",
            content: "**Fort Santiago**, at the river mouth within Intramuros, served first as the Spanish colonial military headquarters, then — far more darkly — as a Japanese prison and execution site during the WWII occupation. The fort's **dungeons**, partially flooded by the Pasig River at high tide, held and killed an unknown number of prisoners, and walking through them is a genuinely sobering experience rather than a staged attraction.\n\nThe fort's best-known association is with **José Rizal**, the Philippines' national hero, executed by Spanish colonial authorities in 1896 for his writing and advocacy against colonial rule. His former cell is preserved as a shrine, and bronze footprints embedded in the ground trace his actual final walk from the cell to the execution site at what is now Rizal Park nearby — a detail that makes the history concrete rather than abstract.",
            tourCard: { slug: "manila-tour-of-fort-santiagos-dungeons-rizals", title: "Manila: Tour of Fort Santiago's Dungeons & Rizal's Last Walk", description: "A guided walk through the fort's WWII history and Rizal's final hours.", price: "From $47", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36fa199a7cab779366613d14f92d23bfa6c36f3abd4701ea8785946e5fb05aa2.jpg" },
          },
          {
            title: "Timing, Tickets and What to Pair It With",
            content: "Both Intramuros and Fort Santiago are best visited in the morning, before midday heat and crowds build — the district is largely outdoors and shadeless on its open plazas and walls. Entry to the fort carries a modest admission fee; a guided tour bundles this in and adds the historical context that's easy to miss reading signage alone, especially the Rizal narrative, which rewards a guide's storytelling.\n\nPair the visit with **Binondo**, the world's oldest Chinatown, a short crossing away, for a food stop that naturally follows a morning of history. See our dedicated Binondo and 1-day Manila itinerary guides for how to sequence the rest of the day.",
          },
        ],
        faqs: [
          { q: "How much time do you need for Intramuros and Fort Santiago?", a: "Budget at least half a day — roughly 2-3 hours for Fort Santiago alone if you want the dungeons and Rizal exhibit properly, plus another hour or two for the walls and San Agustin Church." },
          { q: "What happened to José Rizal at Fort Santiago?", a: "He spent his final night in a cell there before being executed by Spanish colonial authorities in 1896. Bronze footprints trace his actual last walk from the cell to the execution site, now Rizal Park." },
          { q: "Is San Agustin Church worth visiting?", a: "Yes — it's a UNESCO World Heritage Site and the oldest stone church in the Philippines, one of the few Intramuros structures that survived WWII largely intact, with a notable trompe l'oeil ceiling inside." },
          { q: "Is Intramuros walkable without a guide?", a: "Yes, the layout is straightforward, but a guide adds real value for Fort Santiago's history specifically — the WWII and Rizal context isn't fully conveyed by signage alone." },
        ],
      };

    case "manila-jeepney-guide":
      return {
        title: "Manila Jeepney Guide 2026: How to Actually Ride the Philippines' Icon",
        description: "Jeepneys are cheap, everywhere, and genuinely confusing on a first try. Here's how routes, fares and boarding actually work for a visitor.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0383216b8ddad3cad5ea7067eeca7d08916a68c1adefa530ee5ddb78961f7f15.png",
        fastFacts: [
          { icon: "History", label: "Origin", value: "Adapted from surplus US military jeeps left after WWII" },
          { icon: "DollarSign", label: "Base fare", value: "Roughly ₱13-15 for the first 4km, a few pesos more per additional km" },
          { icon: "MapPin", label: "Routes", value: "Painted or signed on the windshield, not centrally mapped — ask locals or a driver to confirm" },
          { icon: "FileText", label: "Note", value: "A phased 'modernization' program is gradually replacing older jeepneys with newer minibus-style units" },
        ],
        sections: [
          {
            title: "Where Jeepneys Came From and Why They Look Like That",
            content: "The jeepney grew directly out of WWII surplus — American military jeeps left behind after the war were stripped, extended, and rebuilt by Filipino mechanics into longer, open-sided passenger vehicles, then decorated with increasingly elaborate paint jobs, chrome ornaments and personal mottos that became a genuine folk art form. For decades they've been the backbone of Philippine public transport, carrying passengers along fixed routes at a flat, cheap fare, and they remain one of the country's most recognizable cultural symbols, celebrated as much as they're relied upon.\n\nA government-led **jeepney modernization program** has been gradually phasing in newer, more efficient minibus-style units to replace the classic open-sided design, a shift that's controversial among traditional drivers and operators but ongoing — expect to see both classic and modern jeepneys sharing the same routes for the foreseeable future.",
          },
          {
            title: "How to Actually Board, Pay and Get Off",
            content: "Jeepneys run **fixed routes**, usually displayed on a sign or painted directly on the vehicle's windshield or side, but there's no single centralized route map the way a metro system has one — locals learn routes by familiarity, and the easiest approach for a visitor is to ask a driver or a local at a jeepney stop whether a particular jeepney passes near your destination before boarding. Flag one down anywhere along its route (they stop on request rather than only at fixed stops), climb in through the open back, and find a seat on one of the two long benches facing each other.\n\nPay the flat **base fare** (roughly ₱13-15 for the first 4km) by passing your money forward hand to hand to other passengers until it reaches the driver — this passenger-chain payment system is standard and nobody will think it's strange that you're participating in it. Ask the driver or a passenger near the front to let you off ('Para po' — 'stop please' — is the standard phrase) when you're near your destination; jeepneys don't announce stops.",
            tourCard: { slug: "manila-food-tour-cooking-local-market-visit-via", title: "Manila: Food Tour! Cooking & Local Market Visit via Jeepney", description: "A guided tour that uses jeepneys as actual transport, with someone showing you the ropes.", price: "From $82", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0383216b8ddad3cad5ea7067eeca7d08916a68c1adefa530ee5ddb78961f7f15.png" },
          },
          {
            title: "Is It Worth the Hassle for a Visitor?",
            content: "If your main goal is efficient, predictable point-to-point transport, Grab or the LRT/MRT are more reliable choices — jeepneys don't have fixed schedules, routes can be hard to confirm with certainty, and they add to Manila's traffic and emissions. But riding at least one jeepney, even for a short stretch, is a genuinely worthwhile cultural experience precisely because of the informal, communal systems around it — the hand-to-hand fare passing, the shared bench seating, the drivers' decorated cabs.\n\nThe easiest way to try it without the route-confirmation stress is through a guided food or city tour that incorporates a jeepney leg deliberately, which is exactly what several Manila tours now do.",
          },
        ],
        faqs: [
          { q: "How much does a jeepney ride cost in Manila?", a: "Roughly ₱13-15 for the first 4km, with a few additional pesos per kilometre beyond that — one of the cheapest transport options in the city." },
          { q: "How do I know which jeepney to take?", a: "Check the route sign or windshield painting, and when in doubt, ask the driver or a local at the stop whether that jeepney passes near your destination before boarding — there's no single centralized route map." },
          { q: "How do you pay on a jeepney?", a: "Pass your fare forward hand to hand through other passengers until it reaches the driver — this is the standard system, not an informal workaround." },
          { q: "Are jeepneys being phased out?", a: "A gradual government modernization program is replacing older classic jeepneys with newer minibus-style units on some routes, but both types will likely coexist for years to come." },
        ],
      };

    case "manila-food-guide":
      return {
        title: "Manila Food Guide 2026: What to Actually Eat and Where",
        description: "Adobo, sisig, Binondo's Chinese-Filipino dumplings and halo-halo — the dishes and neighborhoods worth prioritizing on a first food-focused visit to Manila.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4b1974bdbe8c2ee31bdb359d1afbaf7d41777510b2ba9fc06f3f98040da33756.jpg",
        fastFacts: [
          { icon: "Utensils", label: "Signature dish", value: "Adobo — meat braised in vinegar, soy sauce, garlic and bay leaf" },
          { icon: "MapPin", label: "Best food neighborhood", value: "Binondo, the world's oldest Chinatown" },
          { icon: "Flame", label: "Try at least once", value: "Sisig — sizzling chopped pork, often served still crackling on a hot plate" },
          { icon: "Dessert", label: "Classic dessert", value: "Halo-halo, a shaved-ice dessert layered with beans, jelly, fruit and leche flan" },
        ],
        sections: [
          {
            title: "The Essentials: Adobo, Sinigang and Sisig",
            content: "**Adobo** is the closest thing the Philippines has to a national dish — meat (usually chicken or pork, sometimes both together) slow-braised in vinegar, soy sauce, garlic and bay leaf until the sauce reduces into something tangy and deeply savory. Every family and restaurant has its own version, and there's genuine, good-natured national debate over whether the 'correct' version includes coconut milk, a Southern Philippine variant.\n\n**Sinigang**, a sour soup usually built on tamarind broth with pork, shrimp or fish and vegetables, is the dish most Filipinos reach for when craving home cooking. **Sisig**, originally a Pampanga specialty made from chopped pig face and offal seasoned with calamansi and chili, then popularized nationwide as a beer-hall staple served sizzling on a hot plate, is the one dish worth actively seeking out even if the description sounds unfamiliar — the texture and char matter more than the cut.",
          },
          {
            title: "Binondo: The World's Oldest Chinatown's Food Scene",
            content: "**Binondo**, founded in 1594, is Manila's single best food destination precisely because of its centuries-long Chinese-Filipino fusion — dumpling houses, noodle shops and specialties like fried siopao (steamed buns, often deep-fried in Binondo's version) and hopia (a flaky pastry with sweet mung bean or ube filling) that reflect generations of Hokkien immigrant cooking adapted to local ingredients. Eng Bee Tin, a decades-old hopia shop, and the noodle houses along Ongpin Street are the kind of stops a guided food tour specifically exists to find, since the best options aren't always the ones with English signage.\n\nA guided tour through Binondo also solves the real practical problem of a first visit: with dozens of stalls and shops crowded into a few dense blocks, it's easy to fill up on the wrong first few dishes without local guidance.",
            tourCard: { slug: "manila-binondo-chinatown-walking-tour-with-food", title: "Manila: Binondo Chinatown Walking Tour with Food Samples", description: "A guided crawl through the world's oldest Chinatown's dumpling houses and noodle shops.", price: "From $194", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2adfd9286c73fc964db3fc7c7ca20b32f882093c176da73e237ebc5e4a5b318d.jpg" },
          },
          {
            title: "Street Food, Markets and Halo-Halo",
            content: "Manila's street food scene runs on skewered grilled items (isaw — grilled chicken or pork intestine, genuinely popular rather than a dare-you dish), fish balls and kwek-kwek (orange-battered quail eggs) sold from carts across the city, best eaten standing at the cart rather than packaged to go. **Balut** (a fertilized duck egg, boiled and eaten from the shell) is the dish most visitors are curious and nervous about in equal measure — it's a genuine regional specialty worth trying with an open mind if you're inclined, not a shock-value gimmick.\n\n**Halo-halo**, a shaved-ice dessert layered with sweetened beans, jellies, fruit preserves, ube (purple yam) ice cream and leche flan, is the essential cooling dessert in Manila's heat and worth having at least once from a dedicated halo-halo spot rather than a mall food court version.",
            tourCard: { slug: "makati-discover-the-flavors-of-street-food-with", title: "Makati: Discover the Flavors of Street Food with the Balut Experience", description: "A guided street food crawl that includes trying balut with context, not just a dare.", price: "From $87", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2c2668dd0ee8c604a79abd7ceb03467ee020e90807f699be7b81d490bbb924c8.jpg" },
          },
        ],
        faqs: [
          { q: "What is the Philippines' national dish?", a: "Adobo is the closest thing — meat braised in vinegar, soy sauce, garlic and bay leaf — though every family and region has its own variant, with genuine debate over whether coconut milk belongs in it." },
          { q: "What is sisig?", a: "A Pampanga-originated dish of chopped pork face and offal, seasoned with calamansi and chili and served sizzling on a hot plate — now a beer-hall staple found across Manila." },
          { q: "Is Binondo worth a food tour?", a: "Yes — it's the world's oldest Chinatown, founded in 1594, with centuries of Chinese-Filipino fusion cooking packed into a few dense blocks. A guide helps you find the best stalls rather than guessing among dozens of options." },
          { q: "Should I try balut?", a: "If you're curious, yes, with an open mind — it's a genuine regional specialty (a boiled fertilized duck egg), not a shock-value stunt, though the texture surprises most first-timers." },
        ],
      };

    case "manila-to-boracay-travel":
      return {
        title: "Manila to Boracay Travel Guide 2026: Flights, Transfers and What to Expect",
        description: "Boracay isn't a day trip from Manila — here's the realistic flight-and-ferry route, timing and what the island looks like since its 2018 rehabilitation closure.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1048b09bdef40fc12ddb62a47f31d9c233807d3a0babfb68a2198f1a0a02d507.png",
        fastFacts: [
          { icon: "Plane", label: "Flight", value: "Manila to Caticlan (Boracay's nearest airport), roughly 1-1.25 hours" },
          { icon: "Ship", label: "Final leg", value: "A short boat transfer from Caticlan jetty port to Boracay island itself" },
          { icon: "Clock", label: "Total door-to-door", value: "Roughly 4-5 hours including airport transfers and the boat crossing" },
          { icon: "History", label: "2018 closure", value: "Boracay was closed for 6 months for environmental rehabilitation; it's reopened with stricter capacity and environmental rules" },
        ],
        sections: [
          {
            title: "There Is No Direct Road or Rail Route — You're Flying",
            content: "Boracay is not reachable overland from Manila in any practical sense; the standard route is a domestic flight from Manila to **Caticlan Airport** (officially Godofredo P. Ramos Airport), roughly 1 to 1.25 hours in the air, followed by a short tricycle or van transfer to the Caticlan jetty port, and finally a **boat crossing** of about 10-15 minutes to Boracay island itself. A secondary option flies into **Kalibo Airport**, further from the island (roughly 1.5-2 hours by road to the jetty port), used mainly when Caticlan flights are full or pricier.\n\nBudget the full journey, door to door, at around 4-5 hours including airport procedures, the road transfer and the boat crossing — this is a genuine multi-leg trip, not a quick hop, and shouldn't be treated as a day-trip option from Manila.",
          },
          {
            title: "Boracay Since the 2018 Closure: What Actually Changed",
            content: "In 2018, the Philippine government closed Boracay entirely to tourists for **six months** for environmental rehabilitation, after years of unregulated development had overwhelmed the island's sewage infrastructure and visibly degraded the water quality that made it famous in the first place. The closure was controversial and economically painful for the island's workforce, but the rehabilitation genuinely changed what Boracay looks like today: stricter **environmental regulations** (no more beachfront bars extending onto the sand, mandatory wastewater treatment connections for resorts, restrictions on certain water sports close to shore), a **daily tourist carrying capacity cap**, and ongoing enforcement that's held up reasonably well in the years since reopening.\n\nThe honest result for a visitor: White Beach's water quality is meaningfully better than its pre-2018 reputation suggested, but the island is also more regulated and less of a free-for-all than older guidebooks or reviews describe — book accommodation and activities with current operators rather than relying on pre-2018 accounts of the island.",
          },
          {
            title: "Booking the Trip and What to Pair It With",
            content: "Most visitors book the Manila-Caticlan flight and the jetty-to-island boat transfer as separate line items unless using a package that bundles them; budget airlines run multiple daily flights on this route, so flexibility on timing is rarely an issue outside peak holiday periods. If your primary interest is marine life rather than the party-beach reputation, note that whale shark encounters near Boracay are a different, smaller-scale experience than Cebu's Oslob — see our Oslob vs. Donsot comparison if you're deciding between regions for that specifically.\n\nBoracay is a worthwhile addition to a Philippines trip that includes Manila, but treat it as its own multi-day leg rather than a side trip squeezed into a Manila-based itinerary.",
            tourCard: { slug: "boracay-premium-whale-shark-tour-with-free", title: "Boracay: Premium Whale Shark Tour with Free Underwater Media", description: "A whale shark encounter option for travelers continuing on to Boracay after Manila.", price: "From $113", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1048b09bdef40fc12ddb62a47f31d9c233807d3a0babfb68a2198f1a0a02d507.png" },
          },
        ],
        faqs: [
          { q: "Can you get from Manila to Boracay in one day?", a: "You can reach Boracay within a single day's travel (roughly 4-5 hours door to door via flight and boat), but it's not a day-trip destination — plan it as a multi-day leg, not an out-and-back from Manila." },
          { q: "How do you get from Manila to Boracay?", a: "Fly from Manila to Caticlan Airport (about 1-1.25 hours), then take a short road transfer to the jetty port followed by a 10-15 minute boat crossing to the island." },
          { q: "Is Boracay still worth visiting after the 2018 closure?", a: "Yes — the rehabilitation genuinely improved water quality and enforcement, though the island is now more regulated (capacity caps, stricter beachfront rules) than its pre-2018 reputation suggests." },
          { q: "Is Kalibo or Caticlan airport better for Boracay?", a: "Caticlan is closer to the jetty port and the standard choice; Kalibo is a fallback when Caticlan flights are unavailable or costlier, adding roughly an hour of extra road transfer." },
        ],
      };

    case "manila-traffic-reality-guide":
      return {
        title: "Manila Traffic Reality Guide 2026: How Bad It Actually Is and How to Plan Around It",
        description: "Manila's traffic is a genuine itinerary constraint, not an exaggeration — here's how long things actually take and how to structure a trip around it honestly.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea8b4edeb399b891569e5f5f35891825ab1978ffb171e4233fb4830ef0a34652.jpg",
        fastFacts: [
          { icon: "Clock", label: "Rush hour", value: "Roughly 7-9am and 5-8pm on weekdays, worse on paydays (15th/30th of the month)" },
          { icon: "AlertTriangle", label: "Rule of thumb", value: "Budget double the map-estimated travel time within Metro Manila" },
          { icon: "Train", label: "Best traffic-avoider", value: "LRT/MRT elevated rail lines, where your route lines up with a station" },
          { icon: "Car", label: "Default transport", value: "Grab ride-hailing — reliable, metered pricing, but surge-prone during rush hour and rain" },
        ],
        sections: [
          {
            title: "Why Manila's Traffic Is Different From 'Big City Traffic' Generally",
            content: "Manila's congestion is driven by a specific combination: one of the highest population densities of any capital region in the world packed into a road network that wasn't built for current vehicle volumes, a heavy reliance on private cars and ride-hailing that has grown faster than infrastructure, and a public transport system (jeepneys, buses, a limited rail network) that, while extensive, doesn't fully substitute for car trips the way denser metro systems do elsewhere in Asia. The result is traffic that's bad essentially all day on weekdays, not just at two rush-hour peaks — mid-morning and mid-afternoon trips that would be free-flowing in most cities are often still slow in Manila.\n\nRain makes it meaningfully worse, both because of flooding on low-lying roads and because more people shift from walking or jeepneys to cars and Grab during downpours, adding volume exactly when the roads are already compromised by standing water.",
          },
          {
            title: "What This Actually Means for Trip Timing",
            content: "The practical rule most frequent visitors land on: **budget roughly double** whatever a map application estimates for a trip within Metro Manila, especially during weekday daytime hours. A trip that Google Maps estimates at 20 minutes can genuinely take 45-60 minutes at midday, and considerably longer during the 5-8pm evening peak. Paydays — the 15th and 30th of each month, when many Filipino workers get paid and traffic volume spikes with shopping and errands — are reliably worse than an average weekday.\n\nThis changes how an itinerary should be built: cluster activities geographically (do everything in and around Intramuros in one block, everything in Makati in another) rather than zigzagging across the metro in a single day, and build real buffer time into any plan involving an airport transfer, since a flight missed over traffic is a common, avoidable mistake.",
            tourCard: { slug: "manila-shore-excursion-private-city-tour-from", title: "Manila Shore Excursion: Private City Tour from Cruise Port", description: "A private tour structured for exactly this constraint, with routing planned around traffic patterns.", price: "From $238", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3b510e4e3935f0ad0ba81406d0c8b1b691188f9901de77950f4a75918118f479.jpeg" },
          },
          {
            title: "What Actually Beats the Traffic",
            content: "The **LRT and MRT** elevated rail lines run above the traffic entirely and are genuinely fast when your route lines up with a station — worth actively choosing over a car or Grab trip whenever it covers the distance you need, even if it means a bit more walking at either end. **Grab** is the realistic default for most point-to-point travel since metered taxis are less consistently reliable, but build in rush-hour and rain-related surge pricing as an expected cost, not a surprise.\n\nFor anything involving a flight, treat NAIA transfer time as its own planning category: a transfer that looks like 30 minutes on a map can take well over an hour during evening rush hour, and airlines won't hold a flight for traffic.",
          },
        ],
        faqs: [
          { q: "How bad is Manila's traffic really?", a: "Genuinely bad, essentially all day on weekdays rather than just at two rush-hour peaks — budget roughly double what a map estimates for any trip within the metro." },
          { q: "What are Manila's rush hours?", a: "Roughly 7-9am and 5-8pm on weekdays, with paydays (the 15th and 30th of each month) reliably worse than an average day due to added shopping and errand traffic." },
          { q: "Is the LRT/MRT worth using to avoid traffic?", a: "Yes, whenever your route lines up with a station — it runs above surface traffic and is often the fastest option in the city for the stretches it covers." },
          { q: "How much extra time should I budget for a Manila airport transfer?", a: "Significantly more than a map suggests during rush hour — treat it as its own planning category and leave a real buffer rather than timing it tightly." },
        ],
      };

    case "boracay-day-trip-guide":
      return {
        title: "Boracay Day Trip Guide 2026: Can You Actually Do It in a Day?",
        description: "Boracay is a flight-and-boat trip, not a quick hop — here's the honest answer on whether a day trip works and what the realistic alternative looks like.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a779a9c10d9f30412d03ed1ef7ba3d247abcadabad666eaa434158333641063c.png",
        fastFacts: [
          { icon: "AlertTriangle", label: "Honest answer", value: "A true Boracay day trip from Manila is not realistic — plan it as an overnight minimum" },
          { icon: "MapPin", label: "Closer alternative", value: "Calatagan's 'Little Boracay' floating cottages, reachable from Manila in a single day" },
          { icon: "Plane", label: "If going to the real Boracay", value: "Budget 2-3 days minimum given the flight-plus-boat transfer time each way" },
          { icon: "Sun", label: "Best season", value: "November to May, outside the June-October wet and typhoon-risk season" },
        ],
        sections: [
          {
            title: "Why 'Boracay Day Trip' Is Usually the Wrong Search",
            content: "Boracay sits on a separate island reached from Manila by a roughly 1-1.25 hour flight to Caticlan followed by a boat crossing — a journey that alone consumes 4-5 hours door to door each way before you've spent any time on the island itself. Attempting it as a same-day round trip from Manila would mean more hours in transit than on the beach, and most flight schedules don't realistically support a comfortable same-day return anyway. If 'Boracay day trip from Manila' is what brought you here, the honest answer is: this isn't a day-trip destination, and it's worth adjusting expectations before booking flights.\n\nA genuine Boracay visit deserves at least 2-3 days once you've committed to the travel time required to get there — see our Manila to Boracay travel guide for the full route breakdown.",
          },
          {
            title: "The Real Manila Day-Trip Alternative: Calatagan's 'Little Boracay'",
            content: "If what you actually want is a white-sand, turquoise-water beach day without committing to a multi-day Boracay trip, **Calatagan** in Batangas — roughly 2-3 hours from Manila by road — has earned the nickname 'Little Boracay' for its own stretch of pale sand and clear shallow water, with floating cottages and island-hopping day trips that are genuinely doable as a single long day from Manila. It's not Boracay's scale or exact quality, but it solves the specific problem of wanting that beach experience without the flight.\n\nThis is the honest substitution most Manila-based itineraries should make if beach time matters more than the Boracay name specifically.",
            tourCard: { slug: "manila-little-boracay-private-tour-with-floating", title: "Manila: Little Boracay Private Tour with Floating Cottage", description: "A genuine single-day beach trip from Manila, without the flight Boracay itself requires.", price: "From $421", duration: "12 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a779a9c10d9f30412d03ed1ef7ba3d247abcadabad666eaa434158333641063c.png" },
          },
          {
            title: "If You Do Commit to Boracay, What to Prioritize",
            content: "Once you've budgeted the flight and boat transfer properly, Boracay's **White Beach** is the main draw, now operating under the stricter post-2018 environmental rules covering water quality, beach-vendor regulation and a daily visitor capacity. Island-hopping, sunset sailing on a traditional paraw boat and whale shark tours near the island are the activities most visitors add once they're there, though whale shark encounters here are a different, smaller-scale experience than the larger, more established Oslob interaction near Cebu.\n\nTime your trip for **November through May** to avoid the June-October wet and typhoon-risk window that affects this part of the Philippines much as it does Manila.",
          },
        ],
        faqs: [
          { q: "Can you visit Boracay in one day from Manila?", a: "Not realistically — the flight-plus-boat journey alone takes 4-5 hours each way, consuming most of a day before you've spent time on the island. Plan at least 2-3 days if Boracay specifically is the goal." },
          { q: "Is there a closer alternative to Boracay from Manila?", a: "Yes — Calatagan in Batangas, nicknamed 'Little Boracay,' offers a genuine white-sand beach day trip roughly 2-3 hours from Manila by road, doable in a single long day." },
          { q: "When is the best time to visit Boracay?", a: "November through May, outside the June-October wet and typhoon-risk season that affects this region of the Philippines." },
          { q: "Is Boracay's water quality actually good now?", a: "Yes, meaningfully improved since the 2018 six-month closure and environmental rehabilitation, with stricter ongoing wastewater and development regulations in place." },
        ],
      };

    case "manila-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Manila Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Manila enough room for the city core, a Tagaytay/Taal Volcano day trip and Makati's modern side — here's how to structure it around the traffic.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6304876ee6b3c390549e2de990309b11d031c6621df95405850d1fbf2bca7faa.jpg",
        sections: [
          {
            title: "Day 1: The Historic Core — Intramuros, Fort Santiago and Binondo",
            content: "Follow the one-day plan as your first day: Intramuros and Fort Santiago in the morning before the heat and crowds build, Binondo's Chinatown for lunch, and a Manila Bay sunset to close it out. This front-loads the headline historic sights in one geographically compact zone, which matters given Manila's traffic — see our traffic reality guide before planning any day that crosses the metro more than once.",
          },
          {
            title: "Day 2: Tagaytay and Taal Volcano",
            content: "Dedicate a full day to **Tagaytay**, roughly 1.5-2 hours south of Manila, for the ridge-top view over **Taal Lake and Taal Volcano**, one of the smallest active volcanoes in the world. Most day trips combine the volcano viewpoint with a local lunch (bulalo, the beef shank soup Tagaytay is known for) and sometimes a coffee farm or art museum stop. Leave Manila early to beat both the heat and the return traffic back into the city in the evening.",
            tourCard: { slug: "private-tour-manila-tagaytay-taal-volcano-day-tour", title: "Private Tour! Manila, Tagaytay & Taal Volcano Day Tour", description: "A full day covering the Tagaytay ridge and Taal Volcano view, departing early to manage traffic both ways.", price: "From $201", duration: "11 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6304876ee6b3c390549e2de990309b11d031c6621df95405850d1fbf2bca7faa.jpg" },
          },
          {
            title: "Day 3: Makati, Local Life and a Final Food Crawl",
            content: "Spend your final day in **Makati**, Manila's modern financial and shopping district, a sharp contrast to Intramuros' colonial core — malls, rooftop bars and a genuinely different pace. Balance it with something more grounded: a community-life tour through one of Manila's dense residential districts, which several operators run specifically to give an honest, non-sanitized picture of how most Manila residents actually live, alongside the skyscrapers.\n\nClose the trip with one more food stop — a street food crawl through Makati or a return to Binondo if you didn't get enough the first time.",
            tourCard: { slug: "manila-chef-curated-food-tour-of-makati-by", title: "Manila: Chef-Curated Food Tour of Makati by Motorcycle", description: "A guided food crawl through Makati that skips the traffic by using motorcycle transport between stops.", price: "From $113", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f662d2a7f11233b2fb18a7584c3d9ed1737efea4bb2a56b0945ef172a4522272.jpg" },
          },
          {
            title: "If You Have a 4th Day: Hundred Islands or Banaue",
            content: "A fourth day opens up a genuine further-afield option: **Hundred Islands National Park** in Pangasinan for island-hopping and snorkeling, or the **Banaue and Batad rice terraces** further north, both long but doable overnight additions rather than something to squeeze into the three-day core above.",
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Manila?", a: "Yes, for a well-rounded first visit — the historic core (Intramuros, Fort Santiago, Binondo), a full day for Tagaytay and Taal Volcano, and a day in Makati covers Manila's genuinely different sides without overreaching given the traffic." },
          { q: "Should I add Boracay to a 3-day Manila trip?", a: "No — Boracay requires its own multi-day commitment given the flight-and-boat travel time. Treat it as a separate leg of a longer Philippines trip, not an add-on to a 3-day Manila itinerary." },
          { q: "What's the best day to do the Tagaytay trip?", a: "Any day with a clear-weather forecast, departing as early as possible — both for the Taal Volcano view and to get back into Manila before the worst of the evening traffic." },
        ],
      };

    case "taal-volcano-day-trip":
      return {
        title: "Taal Volcano Day Trip Guide 2026: Tagaytay, the Ridge View and Visiting the Crater",
        description: "One of the smallest active volcanoes in the world sits an easy day trip from Manila — here's the ridge-view option most visitors take and what actually visiting the crater involves.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6304876ee6b3c390549e2de990309b11d031c6621df95405850d1fbf2bca7faa.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Distance from Manila", value: "Tagaytay ridge, roughly 1.5-2 hours by road" },
          { icon: "Mountain", label: "Taal Volcano", value: "One of the smallest active volcanoes in the world, sitting inside Taal Lake" },
          { icon: "AlertTriangle", label: "Access note", value: "Crater access has been restricted at times since the 2020 eruption — check current alert status before planning a crater hike" },
          { icon: "Coffee", label: "Local specialty", value: "Bulalo (beef shank soup) and Tagaytay-grown coffee" },
        ],
        sections: [
          {
            title: "The Ridge View: What Most Visitors Actually Do",
            content: "**Tagaytay** sits on a ridge overlooking **Taal Lake**, with Taal Volcano itself rising from an island within the lake — a genuinely striking geography where you're looking at a volcano that sits inside a lake that itself occupies the caldera of an even older, larger volcanic system. For the vast majority of day-trippers from Manila, the visit is this ridge view, enjoyed from a restaurant terrace, a viewpoint park or one of Tagaytay's coffee shops, rather than an actual hike to the crater — and this alone is worth the trip for the view and the cooler highland air compared to Manila's heat.\n\nTagaytay itself has developed into a genuine weekend destination for Manila residents, with restaurants, resorts and farm-to-table produce stops that make the ridge-view option a relaxed half-day rather than a strenuous outing.",
            tourCard: { slug: "manila-tagaytay-half-day-tour-with-local-snack", title: "Manila: Tagaytay Half-Day Tour with Local Snack & Art Museum", description: "A relaxed ridge-view visit paired with a local snack stop and an art museum, no crater hike required.", price: "From $216", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c0666e1810b4a5fc8e42cb2f06c00e91aa4e6b91bc769373d97785b014f6efc.jpg" },
          },
          {
            title: "Visiting the Crater: What It Actually Involves, and the 2020 Eruption",
            content: "For visitors who want more than the ridge view, reaching the volcano's actual crater historically involved a boat crossing from the lakeshore followed by a hike or horseback ride up to the crater rim overlooking Taal's own smaller crater lake inside. This changed meaningfully after Taal's **January 2020 eruption**, a significant event that forced evacuations across the region and led to periods of restricted or fully closed access to the volcano island itself depending on the current alert level set by PHIVOLCS, the Philippine volcanology institute.\n\nAccess has reopened and tightened multiple times since 2020 depending on volcanic activity — if a crater visit specifically matters to your trip, check PHIVOLCS' current alert level and tour operator availability close to your travel dates rather than assuming historical crater-hike itineraries are currently running.",
          },
          {
            title: "Combining It With a Wider Tagaytay-Area Day",
            content: "Most full-day tours from Manila pair the Taal Volcano ridge view with other Tagaytay-area stops: a coffee farm visit and tasting (Tagaytay grows a notable amount of the Philippines' civet-processed kape barako and kopi luwak-style coffee), Sky Ranch for a quick amusement-park stop with its own ridge view, or Picnic Grove's viewpoint. A private tour with hotel pickup makes the most sense given Manila's traffic — see our traffic reality guide for why timing the departure early matters as much for the return as the arrival.",
            tourCard: { slug: "manila-coffee-farm-tour-tasting-experience-in", title: "Manila: Coffee Farm Tour & Tasting Experience in Tagaytay", description: "A coffee-focused add-on to the Taal Volcano ridge view, covering the region's distinctive civet and kopi luwak-style coffee.", price: "From $345", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/41b59fb7ff848f74031853156fa59745b01adc7d6244f1244c7c71bc6390030a.jpg" },
          },
        ],
        faqs: [
          { q: "Can you visit Taal Volcano from Manila in a day?", a: "Yes — Tagaytay, the ridge-view town overlooking the volcano, is roughly 1.5-2 hours from Manila by road, making a half or full day trip genuinely practical." },
          { q: "Can you still hike to Taal Volcano's crater?", a: "Access has been restricted at times since the volcano's January 2020 eruption, depending on current volcanic activity. Check PHIVOLCS' alert level and operator availability close to your travel dates rather than assuming historical crater-hike tours are running." },
          { q: "Do you need to hike to enjoy Taal Volcano?", a: "No — most visitors only do the ridge view from Tagaytay, which requires no hiking and is the standard, relaxed version of this day trip." },
          { q: "What should I eat in Tagaytay?", a: "Bulalo, a beef shank soup the area is known for, and locally grown coffee, including civet and kopi luwak-style varieties, are the two specialties worth prioritizing." },
        ],
      };

    // ============ CEBU ============

    case "best-time-to-visit-cebu":
      return {
        title: "Best Time to Visit Cebu (2026): Weather, Typhoons and Whale Shark Season",
        description: "Cebu is drier than Manila overall but still sits in the Pacific typhoon belt. Here's when to go, and why the timing matters differently depending on whether diving or island-hopping is the priority.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg",
        fastFacts: [
          { icon: "Sun", label: "Best overall window", value: "December to May — drier, lower typhoon risk, clearer diving visibility" },
          { icon: "AlertTriangle", label: "Typhoon season", value: "June to November, peaking July-October, with some years hit harder than others" },
          { icon: "Fish", label: "Whale sharks at Oslob", value: "Present year-round — unlike seasonal sightings elsewhere, Oslob's provisioning makes them a consistent draw" },
          { icon: "CloudRain", label: "Wettest months", value: "October to December in Cebu's southern towns including Oslob and Moalboal" },
        ],
        sections: [
          {
            title: "December to May Is the Reliable Window",
            content: "Cebu runs drier overall than Manila thanks to its geography, but it still sits inside the Pacific typhoon belt, and the comfortable, lower-risk window runs roughly **December through May**. Within that stretch, December through February brings the mildest temperatures and lowest humidity, while March through May heats up noticeably (often exceeding 33-35°C) but stays largely dry, making it workable for beach and island days if you manage sun exposure.\n\nThis window also lines up with the best underwater visibility for diving and snorkeling around Moalboal and the Camotes Islands, since calmer seas and less runoff from rain keep the water clearer than during the wetter months.",
          },
          {
            title: "June to November: Typhoon Risk, Real but Regionally Variable",
            content: "Cebu's typhoon season runs roughly **June through November**, peaking July through October, similar to the rest of the Philippines — but the island's central location means it's sometimes spared direct hits that devastate Luzon or the Visayas' more exposed coasts in a given year, and sometimes isn't. There's no way to predict a specific year's severity months ahead, so the realistic approach for a trip in this window is building flexibility into any multi-day plan, particularly for boat-dependent activities like Oslob's whale shark tours or island-hopping, which are the first things cancelled in rough seas or storm warnings.\n\nSouthern Cebu towns including Oslob and Moalboal see their heaviest rainfall roughly October through December, somewhat later than the June-peak pattern further north, worth knowing if your itinerary is specifically built around those towns.",
            tourCard: { slug: "cebu-oslob-whale-shark-tour-sumilon-island", title: "Cebu: Oslob Whale Shark Tour, Sumilon Island & Tumalog Falls", description: "A boat-dependent day combining three of southern Cebu's highlights — worth having flexible dates during storm season.", price: "From $227", duration: "12 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg" },
          },
          {
            title: "Why Whale Shark Timing Works Differently Here",
            content: "Unlike many whale shark destinations worldwide where sightings cluster around a seasonal plankton bloom, **Oslob's** whale sharks are present essentially **year-round** because local fishermen provision them with shrimp daily, a practice that's made encounters near-certain on any given morning but is also genuinely controversial — see our dedicated Oslob whale sharks guide for the honest rundown of the ethics debate. This means the 'best time' question for Oslob specifically is less about the whale sharks themselves and more about sea conditions and crowd levels, which both favor the December-May window.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Cebu?", a: "January through April offers the best combination of dry weather, calm seas for island-hopping and diving, and lower typhoon risk — though March-May adds real heat." },
          { q: "Is Oslob's whale shark season year-round?", a: "Yes, unusually — because the whale sharks are provisioned daily by local fishermen rather than drawn by a seasonal plankton bloom, sightings are near-certain any day of the year, weather permitting." },
          { q: "When is typhoon season in Cebu?", a: "Roughly June through November, peaking July-October, similar to the rest of the Philippines, though Cebu's central location sometimes spares it from the direct hits that affect more exposed coasts." },
          { q: "When is the rainiest time in southern Cebu towns like Oslob and Moalboal?", a: "Roughly October through December, somewhat later in the year than the June-peak pattern seen further north in the Philippines." },
        ],
      };

    case "things-to-do-in-cebu":
      return {
        title: "25+ Best Things to Do in Cebu (2026): The Complete List",
        description: "From Oslob's whale sharks and Kawasan Falls canyoneering to Magellan's Cross and the Camotes Islands — the real list of what's worth your time in Cebu, organized by region.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a585eec8aa1511eff1f7180824adc66ea6d09cfb817452a7dca98d9eacff84f3.png",
        fastFacts: [
          { icon: "Fish", label: "Top marine experience", value: "Oslob's whale sharks, though see our ethics guide before booking" },
          { icon: "Droplet", label: "Best adventure activity", value: "Kawasan Falls canyoneering" },
          { icon: "Landmark", label: "Essential history stop", value: "Magellan's Cross and the Basilica Minore del Santo Niño" },
          { icon: "Fish", label: "World-class diving", value: "Moalboal's sardine run and Pescador Island" },
        ],
        sections: [
          {
            title: "Cebu City: History, Lechon and the Basilica",
            content: "**Magellan's Cross**, planted in 1521 and marking the site of the Philippines' first Catholic baptism, and the adjacent **Basilica Minore del Santo Niño** (the country's oldest Roman Catholic church) anchor Cebu City's historic core — see our dedicated Magellan's Cross and Basilica guide for the full history. **Fort San Pedro**, a Spanish military fort built shortly after, rounds out the colonial-era sights within easy walking distance.\n\nNo visit to Cebu City is complete without **lechon** — whole roast pig, and Cebu's version is widely regarded (including by Filipinos from other regions) as the country's best, thanks to a distinctive stuffing of lemongrass, onions and spices that flavors the meat from the inside during the long roast.",
            tourCard: { slug: "cebu-city-tour-of-christianitys-roots-in-the", title: "Cebu: City Tour of Christianity's Roots in the Philippines", description: "A guided loop through Magellan's Cross, the Basilica and Fort San Pedro.", price: "From $76", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f0eeca47f1d1602377dcfb453880973dcc660fea9fc2fe32783b5f98dbecc7.png" },
          },
          {
            title: "South Cebu: Whale Sharks, Canyoneering and Waterfalls",
            content: "**Oslob**, roughly 2.5-3 hours south of Cebu City, is where the vast majority of visitors swim with whale sharks, provisioned daily by local fishermen, making encounters near-certain but also genuinely controversial on conservation grounds — read our Oslob whale sharks guide before booking rather than treating it as an uncomplicated must-do. **Kawasan Falls**, further north along the same southern coast, offers the region's best adventure activity: canyoneering down a series of waterfalls and natural pools via jumps, rappels and swims, finishing at the main falls' striking turquoise pool.\n\nMany day tours pair Oslob with **Tumalog Falls**, a lighter, curtain-style waterfall nearby, and **Sumilon Island**, a sandbar island reachable by boat known for its shifting sandbar and marine sanctuary.",
            tourCard: { slug: "cebu-kawasan-falls-canyoneering-tour-with-hotel", title: "Cebu: Kawasan Falls Canyoneering Tour with Hotel Pickup", description: "The full canyoneering route down Kawasan's waterfalls and pools.", price: "From $345", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a585eec8aa1511eff1f7180824adc66ea6d09cfb817452a7dca98d9eacff84f3.png" },
          },
          {
            title: "Moalboal and the Diving Scene",
            content: "**Moalboal**, on Cebu's southwestern coast, is built around two world-class underwater draws within easy reach of shore: the **sardine run**, a dense, swirling shoal of millions of sardines visible just offshore essentially year-round, and **Pescador Island**, a short boat ride out with some of the region's best reef diving and a chance of thresher sharks for certified divers. Moalboal's shore-accessible sardine run in particular is unusual — most destinations require a longer boat trip for anything this dramatic.\n\nSee our dedicated Moalboal sardine run and Cebu diving guides for logistics on both.",
            tourCard: { slug: "cebu-moalboal-scuba-diving-sardines-run-pescador", title: "Cebu: Moalboal Scuba Diving, Sardines Run & Pescador Snorkel", description: "Both of Moalboal's signature underwater experiences in one guided day.", price: "From $259", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg" },
          },
          {
            title: "Island Hopping and Day Trips From Cebu",
            content: "**Bohol**, reachable by a roughly 2-hour fast ferry from Cebu City, makes a genuinely worthwhile day trip for the Chocolate Hills and a Loboc River cruise — see our Cebu to Bohol travel guide for the full route. Closer to Cebu City, **Mactan Island** (where Cebu's international airport sits) and nearby reef spots offer easier half-day island-hopping and freediving without the ferry commitment.\n\nFor something further afield and less touristed, the **Camotes Islands**, a few hours by boat, pair caves, a freshwater lake and quieter beaches in a single long day trip, and **Siquijor**, reachable from southern Cebu or neighboring islands, adds a genuinely different, slower island atmosphere with its own folklore reputation — see our Siquijor day trip guide.",
            tourCard: { slug: "from-cebu-bohol-day-trip-with-loboc-river-cruise", title: "From Cebu: Bohol Day Trip with Loboc River Cruise & Lunch", description: "The Chocolate Hills and a river cruise lunch, round-tripped from Cebu in a single day.", price: "From $235", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png" },
          },
        ],
        faqs: [
          { q: "What is Cebu's number one attraction?", a: "Oslob's whale shark encounters draw the most visitors, though Kawasan Falls canyoneering and Moalboal's sardine run and diving are equally strong draws depending on what you're after — and the whale shark experience specifically carries an ethics debate worth reading about first." },
          { q: "Is one day enough to see Cebu?", a: "You can cover Cebu City's historic core and lechon in one focused day, but Cebu genuinely rewards 3+ days once you add Oslob/Kawasan Falls to the south and a Bohol or Moalboal day trip." },
          { q: "What is there to do in Cebu besides beaches?", a: "A great deal: Magellan's Cross and the Basilica's history, Cebu City's lechon and heritage food scene, Kawasan Falls canyoneering, and the Chocolate Hills on a Bohol day trip." },
          { q: "Is Cebu good for diving?", a: "Yes, genuinely world-class in parts — Moalboal's shore-accessible sardine run and Pescador Island are the standout spots, with Camotes and Mactan offering easier, more casual options." },
        ],
      };

    case "cebu-travel-guide-2026":
      return {
        title: "Cebu Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Cebu — getting in, getting around, where to base yourself, and how this island differs from Manila for a first-time Philippines visitor.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png",
        fastFacts: [
          { icon: "Plane", label: "Airport", value: "Mactan-Cebu International Airport (CEB), with direct international connections" },
          { icon: "DollarSign", label: "Currency", value: "Philippine Peso (PHP/₱)" },
          { icon: "Car", label: "Getting around", value: "Grab in Cebu City; private van or driver for south Cebu day trips" },
          { icon: "MessageCircle", label: "Languages", value: "Cebuano (Bisaya) locally, with Filipino and English widely spoken" },
        ],
        sections: [
          {
            title: "Getting In and the Case for Flying Direct to Cebu",
            content: "**Mactan-Cebu International Airport (CEB)** has enough direct international connections (from parts of East Asia, the Middle East and beyond) that many visitors skip Manila entirely and fly straight into Cebu, which is worth considering if Cebu and the Visayas are your main interest — it avoids Manila's traffic and an internal domestic flight. If you are connecting through Manila, the domestic flight to Cebu runs under 1.5 hours and multiple carriers operate it frequently throughout the day.\n\nThe airport sits on Mactan Island, a short bridge crossing from Cebu City itself, and many beach resorts are also on Mactan, meaning some visitors barely need to enter Cebu City proper if their focus is beach time plus day trips.",
          },
          {
            title: "Where to Base Yourself",
            content: "**Cebu City** proper is the practical base for history, food and access to south Cebu day trips (Oslob, Kawasan Falls, Moalboal), with a wider range of hotel price points than Mactan's resort-heavy stretch. **Mactan Island**, across the bridge from Cebu City and home to the airport, concentrates Cebu's beach resorts and is the better base if relaxing poolside or beachside between day trips matters more than city access.\n\nFor travelers prioritizing south Cebu specifically — whale sharks, canyoneering, Moalboal diving — basing in or near **Moalboal or Oslob** for a night or two cuts out the long round-trip drive from Cebu City and is worth considering over a rushed single-day tour from the city.",
            tourCard: { slug: "cebu-private-full-day-customizable-car-charter", title: "Cebu: Private Full-Day Customizable Car Charter with Driver", description: "A flexible private charter useful for structuring your own base-and-day-trip combination.", price: "From $130", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bea537d3939623dc173be01f063ad6247ad5f5387bd8265942b7c15a821d1f7f.jpeg" },
          },
          {
            title: "Money, Language and How Cebu Differs From Manila",
            content: "**Cebuano (Bisaya)** is the dominant local language rather than Tagalog, though Filipino (Tagalog) is understood and English remains very widely spoken, including in tourist-facing businesses, so communication is rarely a barrier. The currency and general cost structure mirror Manila's — cards work in malls and hotels, cash is needed for markets, jeepneys (also present in Cebu) and smaller eateries.\n\nThe biggest practical difference from Manila is pace and traffic: Cebu City has real congestion of its own, especially around rush hour, but nothing approaching Manila's scale, and south Cebu's rural roads move at a genuinely relaxed pace once you're clear of the city. This makes Cebu feel considerably less frantic for a first-time Philippines visitor, even though it's the country's second-largest metro area.",
          },
          {
            title: "Planning South Cebu Day Trips Realistically",
            content: "Oslob (for whale sharks) and Kawasan Falls sit roughly 2.5-3 hours south of Cebu City by road, which makes an early departure essential if you want a full, unrushed day — most tours leave Cebu City hotels around 4-5am specifically to catch Oslob's whale shark window before the boats get crowded and the sea gets choppier later in the morning. Moalboal sits a further stretch beyond Oslob, meaning combining both whale sharks and Moalboal diving in a single day is a long, early day rather than a relaxed one; splitting them across two days is the more comfortable option if your schedule allows it.",
          },
        ],
        faqs: [
          { q: "Should I fly directly to Cebu or via Manila?", a: "If Cebu and the Visayas are your main focus, flying directly into Mactan-Cebu International Airport saves a domestic connection and avoids Manila's traffic entirely. Connect via Manila only if you're also spending time there." },
          { q: "Is Cebu City or Mactan Island the better base?", a: "Cebu City suits travelers prioritizing history, food and south Cebu day trips; Mactan suits those who want beach-resort access and don't mind a bridge crossing into the city when needed." },
          { q: "Is English widely spoken in Cebu?", a: "Yes — while Cebuano (Bisaya) is the dominant local language rather than Tagalog, English remains very widely spoken, especially in tourist-facing businesses." },
          { q: "How early should I leave for an Oslob or Kawasan Falls day trip?", a: "Most tours depart Cebu City around 4-5am to reach Oslob's whale sharks before crowds and choppier seas set in later in the morning — this isn't optional padding, it's the standard schedule." },
        ],
      };

    case "cebu-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Cebu Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Cebu itinerary — and an honest note that the headline south Cebu activities genuinely need their own full day, not a squeeze-in.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f0eeca47f1d1602377dcfb453880973dcc660fea9fc2fe32783b5f98dbecc7.png",
        sections: [
          {
            title: "If You Only Have One Day: Stay in Cebu City",
            content: "With just one day, the honest answer is to stay within Cebu City rather than attempting Oslob or Kawasan Falls, both of which require 2.5-3 hours of driving each way and deserve a dedicated day. Start at **Magellan's Cross** and the **Basilica Minore del Santo Niño**, then walk to nearby **Fort San Pedro**, covering the city's Spanish colonial founding in a compact morning loop.",
            tourCard: { slug: "cebu-city-tour-of-christianitys-roots-in-the", title: "Cebu: City Tour of Christianity's Roots in the Philippines", description: "A guided morning loop through Magellan's Cross, the Basilica and Fort San Pedro.", price: "From $76", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f0eeca47f1d1602377dcfb453880973dcc660fea9fc2fe32783b5f98dbecc7.png" },
          },
          {
            title: "Afternoon: Lechon Lunch and a Heritage Walk",
            content: "Make time for a proper **lechon** lunch — Cebu's version, roast whole pig stuffed with lemongrass and spices, is widely considered the country's best — then spend the afternoon on a heritage walking tour through Cebu City's older districts, pairing history with local food stops you'd otherwise miss on your own.",
            tourCard: { slug: "cebu-city-heritage-walk-and-food-crawl", title: "Cebu City Heritage Walk and Food Crawl", description: "An afternoon loop combining heritage sites with local food stops, including lechon.", price: "From $100", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b7fd2825254b05dbcb9bfc76ad0ef74f950cccc579f9edab5a171f00c76f0e3a.jpg" },
          },
          {
            title: "Evening: Mactan Sunset or Food Crawl",
            content: "If you're based near Mactan, close the day with a sunset by the water; if you're in Cebu City, an after-dark food crawl through the city's night markets and casual eateries is the better fit.\n\n**The honest tradeoff of a one-day Cebu itinerary:** Oslob's whale sharks, Kawasan Falls canyoneering and Moalboal's sardine run will not fit — each genuinely needs its own full day given the drive time south. If any of those matter more than the city-core loop above, this isn't the plan for you; see our 3-day itinerary instead.",
            tourCard: { slug: "cebu-after-dark-private-city-tour-with-food-crawl", title: "Cebu: After Dark Private City Tour with Food Crawl and Guide", description: "An evening alternative that covers the city's night food scene.", price: "From $194", duration: "4.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/79cfd680deb524767c69dd8a40007f6790d841f3d94f3014e860e7e231917eb6.jpeg" },
          },
        ],
        faqs: [
          { q: "Can you do Oslob whale sharks in a one-day Cebu city-focused itinerary?", a: "No, not comfortably alongside anything else — Oslob is 2.5-3 hours each way from Cebu City, and the whale shark window is early morning, so it genuinely needs its own dedicated day." },
          { q: "What's the best single-day plan if you're only in Cebu briefly?", a: "Stay within Cebu City: Magellan's Cross, the Basilica, Fort San Pedro, a lechon lunch and a heritage or food-focused walk cover the city's highlights without the long south-Cebu drive." },
          { q: "Is Cebu City worth a day on its own, without the south Cebu day trips?", a: "Yes — the historic core, food scene and heritage walks genuinely fill a satisfying single day even without Oslob or Kawasan Falls." },
        ],
      };

    case "cebu-island-hopping-guide":
      return {
        title: "Cebu Island Hopping Guide 2026: Which Islands, and How to Choose",
        description: "From quick Mactan-area reef stops to multi-day Camotes and Siquijor trips — here's how Cebu's island-hopping options actually differ and which fits your timeframe.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png",
        fastFacts: [
          { icon: "Clock", label: "Quickest option", value: "Mactan-area reef islands (Gilutungan, Nalusuan) — half-day from Cebu City" },
          { icon: "Ship", label: "Classic full-day option", value: "Bohol via fast ferry, roughly 2 hours each way" },
          { icon: "MapPin", label: "Further and quieter", value: "Camotes Islands — caves, a freshwater lake, fewer crowds" },
          { icon: "Compass", label: "Most atmospheric", value: "Siquijor — slower pace, folklore reputation, best as an overnight" },
        ],
        sections: [
          {
            title: "Half-Day Options Close to Cebu City: Gilutungan and Nalusuan",
            content: "For visitors without a full day to spare, the **Gilutungan and Nalusuan** marine sanctuary islands off Mactan's coast offer a genuinely worthwhile half-day island-hopping and snorkeling trip without the long drive south toward Oslob or the ferry commitment to Bohol. Expect clear water over a protected reef, a sandbar stop, and lunch typically included on guided packages — a reasonable option if your schedule is tight or you're easing into a trip before tackling the longer south Cebu day.",
            tourCard: { slug: "cebu-gilutungan-and-nalusuan-island-hopping-tour", title: "Cebu: Gilutungan and Nalusuan Island Hopping Tour with Lunch", description: "A half-day reef and sandbar trip close to Mactan, no long drive required.", price: "From $108", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png" },
          },
          {
            title: "Bohol: The Classic Full-Day Ferry Trip",
            content: "**Bohol**, reachable by a roughly 2-hour fast ferry from Cebu City's pier, is the most popular single-island day trip, built around the **Chocolate Hills** (over a thousand distinctive grass-covered limestone mounds that turn brown in the dry season, giving them their name) and a **Loboc River cruise** lunch on a floating restaurant. It's a long day — ferry both ways plus the inland drive to the Chocolate Hills eats a real chunk of time — but it's genuinely one of the Philippines' most recognizable landscapes and worth the commitment. See our dedicated Cebu to Bohol travel guide for the full logistics.",
            tourCard: { slug: "from-cebu-bohol-day-trip-with-loboc-river-cruise", title: "From Cebu: Bohol Day Trip with Loboc River Cruise & Lunch", description: "The Chocolate Hills and a river cruise lunch, round-tripped from Cebu in a single long day.", price: "From $235", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png" },
          },
          {
            title: "Camotes and Siquijor: For a Longer, Quieter Trip",
            content: "The **Camotes Islands**, a few hours by boat from Cebu, pair caves, a freshwater lake and noticeably quieter beaches than Mactan or Bohol's more trafficked spots — worth it specifically if the goal is fewer crowds rather than headline landmarks. **Siquijor**, reached from southern Cebu or neighboring islands, has a genuinely different, slower atmosphere and a long-standing local reputation for folk healing and mysticism that shapes how Filipinos themselves talk about the island — see our dedicated Siquijor day trip guide, though an overnight is the better way to actually experience it rather than a rushed single day.\n\nBoth are better suited to travelers with an extra day or two to spend, rather than being squeezed into a south-Cebu-focused itinerary.",
            tourCard: { slug: "cebu-full-day-camotes-islands-tour-caves-lake", title: "Cebu: Full-Day Camotes Islands Tour - Caves, Lake & Beach", description: "A full day covering Camotes' caves, freshwater lake and beaches.", price: "From $326", duration: "14 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a41b0b3471aaa32dcc9f80c2ab43b82a068f359d934c615367cb493ff463dfa.jpg" },
          },
        ],
        faqs: [
          { q: "What's the easiest island-hopping option from Cebu City?", a: "The Gilutungan and Nalusuan reef islands off Mactan, doable as a half-day trip without a long drive or ferry commitment." },
          { q: "How long does the Bohol day trip from Cebu take?", a: "A full day — roughly 2 hours each way by fast ferry plus inland driving time to the Chocolate Hills, typically structured as an 8+ hour round trip." },
          { q: "Is Siquijor worth visiting from Cebu?", a: "Yes, but it's better as an overnight than a rushed day trip — the island's slower pace and folklore reputation are part of the appeal, and a single day doesn't do it justice." },
          { q: "Are the Camotes Islands touristy?", a: "Less so than Mactan or Bohol — that's the main draw if you want caves, a freshwater lake and beaches without the crowds." },
        ],
      };

    case "oslob-whale-sharks-guide":
      return {
        title: "Oslob Whale Sharks Guide 2026: What It Involves and the Ethics Debate, Honestly",
        description: "Oslob's whale shark encounters are near-guaranteed and genuinely spectacular, but the daily provisioning that makes them possible is a real conservation controversy. Here's both sides.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Oslob, roughly 2.5-3 hours south of Cebu City" },
          { icon: "Clock", label: "Best time", value: "Early morning, 6-9am, before crowds and choppier seas" },
          { icon: "AlertTriangle", label: "The core issue", value: "Whale sharks are fed daily by local fishermen, altering their natural migratory behavior" },
          { icon: "Fish", label: "What you get", value: "Near-certain sightings, unlike wild encounters elsewhere that depend on seasonal migration" },
        ],
        sections: [
          {
            title: "What Actually Happens on an Oslob Whale Shark Tour",
            content: "Visitors board small outrigger boats before dawn and paddle or motor out to a designated area just offshore, where local fishermen — who have fed whale sharks here daily for years — draw the animals close with shrimp (uyap), allowing snorkelers and divers in the water to see and swim near them at close range. The experience is genuinely spectacular: whale sharks are the largest fish in the ocean, often 5-7 metres long at Oslob, and seeing one glide past at arm's length is unlike almost any other wildlife encounter available to a non-diver at this price point.\n\nStrict rules are enforced on-site: no touching the animals, no sunscreen before entering the water (it affects their skin), a flotation vest is typically required for non-swimmers, and boats operate in a tightly managed, numbered rotation to limit crowding in the water at any one time.",
            tourCard: { slug: "from-panglao-oslob-whale-shark-snorkeling-day", title: "From Panglao: Oslob Whale Shark Snorkeling Day Trip by Ferry", description: "The core Oslob whale shark experience, for travelers based in Bohol rather than Cebu City.", price: "From $127", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af44ac0c6a024808a73f203c0fd249a21632dac36b9f44eb73d323105caaaf8.jpg" },
          },
          {
            title: "The Honest Ethics Debate: Provisioning Changes Wild Behavior",
            content: "This is the part most tour marketing skips, and it deserves a direct answer: whale sharks are naturally migratory, filter-feeding animals that typically pass through an area seasonally rather than staying put. Oslob's daily provisioning has effectively trained a resident population to linger near the feeding site year-round, a behavioral change that marine biologists and conservation groups (including WWF Philippines) have raised genuine concern about — habituation to boats and hand-feeding, increased risk of boat-strike injuries (documented on some individual sharks), and disruption of natural feeding and migration patterns that we don't yet fully understand the long-term consequences of.\n\nThe counterargument, made by the local community and some tourism economists, is that the provisioning program has given Oslob's fishing families a far more stable, lucrative income than fishing itself ever did, with that income tied directly to the whale sharks' wellbeing and survival, creating a strong local incentive against harming them even as the practice remains scientifically debated. Both things are true at once: Oslob's program likely helps local livelihoods and almost certainly alters wild whale shark behavior in ways that aren't fully understood.",
          },
          {
            title: "If You Decide to Go, How to Do It More Responsibly",
            content: "If you choose to visit despite the ethics debate, a few things reduce harm: never touch the sharks even if a guide seems lax about enforcing it, skip sunscreen before entering the water or use a reef-safe variety applied well before arrival, keep a respectful distance rather than crowding a shark that's clearly trying to move away, and choose an operator that visibly limits group sizes in the water rather than packing boats to capacity. If the ethics genuinely don't sit right with you, **Donsol** in Luzon offers a wild, unprovisioned whale shark encounter during its seasonal window — see our Oslob vs. Donsol comparison for the tradeoffs between the two.",
            tourCard: { slug: "cebu-oslob-whale-shark-tour-sumilon-island", title: "Cebu: Oslob Whale Shark Tour, Sumilon Island & Tumalog Falls", description: "Pairs the whale shark encounter with Sumilon Island and Tumalog Falls for a fuller day.", price: "From $227", duration: "12 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg" },
          },
        ],
        faqs: [
          { q: "Are whale sharks guaranteed at Oslob?", a: "Sightings are near-certain, weather permitting, because the sharks are fed daily by local fishermen rather than appearing seasonally — this is also the core of the ethics debate around the practice." },
          { q: "Is swimming with whale sharks at Oslob ethical?", a: "It's genuinely debated — daily provisioning alters natural migratory and feeding behavior and raises boat-strike risk, while also funding local fishing families whose income is now tied to the sharks' survival. There's no fully clean answer." },
          { q: "What's the alternative to Oslob for whale sharks?", a: "Donsol, in Luzon, offers wild, unprovisioned encounters during its seasonal window (roughly November-June), generally considered the more ethical option, though sightings there are seasonal rather than guaranteed." },
          { q: "What time should I arrive at Oslob for whale sharks?", a: "As early as possible, ideally in the 6-9am window — both because sea conditions are calmer and because crowds and boat traffic increase significantly later in the morning." },
        ],
      };

    case "moalboal-sardine-run-guide":
      return {
        title: "Moalboal Sardine Run Guide 2026: The Shore-Accessible Spectacle Explained",
        description: "Millions of sardines swirl just offshore at Moalboal, visible to snorkelers without a boat — here's how reliable it is and how to actually see it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg",
        fastFacts: [
          { icon: "Fish", label: "What it is", value: "A dense, swirling shoal of millions of sardines, present near-year-round" },
          { icon: "MapPin", label: "Access", value: "Shore-accessible from Panagsama Beach — no boat required for snorkelers" },
          { icon: "Clock", label: "Best time of day", value: "Early morning, before boat traffic and other swimmers disperse the shoal" },
          { icon: "Fish", label: "Bonus wildlife", value: "Sea turtles and occasional thresher sharks nearby at Pescador Island" },
        ],
        sections: [
          {
            title: "Why Moalboal's Sardine Run Is Unusual",
            content: "Most large-shoal fish spectacles around the world require a boat trip to a specific offshore location and often depend on a seasonal migration window. Moalboal's sardine run is different: the shoal — millions of sardines moving as a single, shifting silver mass — congregates close enough to **Panagsama Beach** that snorkelers can swim out directly from shore and be inside or alongside it within minutes, no boat required, and it's present near year-round rather than on a tight seasonal schedule. This combination of scale, accessibility and reliability is genuinely rare, and it's the main reason Moalboal has built an entire dive-town identity around this one phenomenon.\n\nSwimming inside the shoal as it parts and reforms around you, sometimes with free-divers or scuba divers passing beneath, is one of the more disorienting and memorable few minutes of marine wildlife most visitors will experience anywhere.",
          },
          {
            title: "How Reliable Is It, and When to Go",
            content: "The sardine run isn't a 100% daily guarantee — the shoal can shift position along the reef, move slightly further out, or thin out on an unlucky day — but local dive shops track its general location closely and have a strong track record of finding it. Morning visits, before the day's boat traffic, snorkel tour groups and general swimmer volume increase, give the best odds of an undisturbed encounter, since the sardines are sensitive to disruption and tend to compress tighter or disperse when crowded.\n\nA guided tour isn't strictly necessary for the shore-accessible version, but one adds genuine value by knowing the shoal's current position on a given day rather than you guessing from the beach.",
            tourCard: { slug: "cebu-twin-falls-tour-with-sardine-run-sea-turtle", title: "Cebu: Twin Falls Tour with Sardine Run & Sea Turtle Search", description: "Pairs the sardine run with a sea turtle search and a waterfall stop for a fuller day.", price: "From $227", duration: "14 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c8798cd2cdcec4d3a613bad75b7b7b87c8857e25ac57976d273d9a782f23036.jpg" },
          },
          {
            title: "Pescador Island and What to Pair It With",
            content: "**Pescador Island**, a short boat ride from Panagsama Beach, extends the Moalboal underwater experience with better reef diving, clearer water further from shore, and occasional **thresher shark** sightings for certified divers willing to go deeper. It's a natural pairing with the shore-accessible sardine run for a fuller day: sardines in the morning close to the beach, then a boat trip to Pescador for a second, more involved dive or snorkel session.\n\nSee our Cebu diving guide for how Moalboal compares to the island's other dive spots if you're deciding where to spend limited dive days.",
            tourCard: { slug: "cebu-moalboal-scuba-diving-sardines-run-pescador", title: "Cebu: Moalboal Scuba Diving, Sardines Run & Pescador Snorkel", description: "The full Moalboal combination — sardine run plus a Pescador Island boat trip.", price: "From $259", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg" },
          },
        ],
        faqs: [
          { q: "Do you need a boat to see Moalboal's sardine run?", a: "No — it's shore-accessible from Panagsama Beach, and snorkelers can swim out directly. A boat trip is only needed to extend the day to Pescador Island for diving." },
          { q: "Is the sardine run guaranteed at Moalboal?", a: "Not 100%, but it's present near year-round and local dive shops track its position reliably — morning visits before crowds build give the best odds." },
          { q: "What else can you see near the sardine run?", a: "Sea turtles are commonly spotted nearby, and Pescador Island, a short boat ride away, adds a chance of thresher sharks for certified divers." },
          { q: "Is Moalboal good for non-divers?", a: "Yes — the sardine run itself is a snorkeling-level experience accessible to non-divers directly from the beach, no certification required." },
        ],
      };

    case "kawasan-falls-canyoneering":
      return {
        title: "Kawasan Falls Canyoneering Guide 2026: What the Full Route Actually Involves",
        description: "Jumps, rappels and swims down a series of waterfalls finishing at Kawasan's turquoise main pool — here's what canyoneering actually involves and how fit you need to be.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a585eec8aa1511eff1f7180824adc66ea6d09cfb817452a7dca98d9eacff84f3.png",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Badian, roughly 3 hours south of Cebu City" },
          { icon: "Droplet", label: "Activity", value: "Canyoneering — a mix of hiking, cliff jumps, rope rappels and swims through a series of waterfalls" },
          { icon: "Clock", label: "Duration", value: "Roughly 3-4 hours for the canyoneering route itself" },
          { icon: "AlertTriangle", label: "Fitness note", value: "Moderate fitness required; not recommended for non-swimmers or those uncomfortable with heights" },
        ],
        sections: [
          {
            title: "What Canyoneering at Kawasan Actually Involves",
            content: "Unlike simply hiking to Kawasan Falls' famous turquoise main pool (which is also possible on its own, without the canyoneering route), the canyoneering experience starts further upstream and works its way down through a series of smaller waterfalls and natural rock pools via a mix of hiking, scrambling, rope-assisted rappels down rock faces, and cliff jumps of varying heights (typically with the option to opt out of the higher jumps if you're not comfortable). Guides lead every group, fit harnesses and helmets, and set the pace based on group confidence — this isn't a solo or unguided activity, and operators won't let you attempt it without a guide.\n\nThe route finishes at Kawasan Falls' main, most photographed pool — a genuinely striking turquoise basin fed by the final, largest waterfall — which makes for a dramatic conclusion after the series of smaller drops leading up to it.",
            tourCard: { slug: "cebu-kawasan-falls-canyoneering-tour-with-hotel", title: "Cebu: Kawasan Falls Canyoneering Tour with Hotel Pickup", description: "The full guided canyoneering route, with equipment and hotel pickup included.", price: "From $345", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a585eec8aa1511eff1f7180824adc66ea6d09cfb817452a7dca98d9eacff84f3.png" },
          },
          {
            title: "How Fit Do You Need to Be",
            content: "Canyoneering at Kawasan requires moderate fitness and basic swimming ability — you'll be in and out of water repeatedly, climbing over wet rocks, and the rope rappels, while guided, do require some upper-body strength and nerve. It's not an extreme-fitness activity, and operators accommodate a wide range of ages and ability levels by adjusting which jumps and rappels a given group attempts, but it is genuinely more physical than a standard waterfall hike, and non-swimmers or anyone uncomfortable with heights should talk to the operator beforehand rather than being surprised mid-route.\n\nWear quick-dry clothing and secure footwear (not flip-flops); most operators provide a dry bag for phones and valuables but water damage risk is real throughout the route.",
          },
          {
            title: "Timing, Crowds and Pairing It With Oslob",
            content: "Kawasan Falls sits close enough to Oslob (roughly 30-45 minutes further along the southern coast) that many day tours combine a morning whale shark swim with afternoon canyoneering, though this makes for a genuinely long, physically demanding day — worth splitting across two days if your schedule allows rather than cramming both into one. Weekday visits see noticeably fewer groups on the route than weekends, when the main pool in particular can get crowded with both canyoneering groups and casual day visitors who hiked in without the canyoneering route.",
          },
        ],
        faqs: [
          { q: "Do I need to be an experienced swimmer for Kawasan canyoneering?", a: "Basic swimming ability is required since the route involves repeated water crossings and swims, but you don't need to be an expert — guides manage pacing and can adjust which jumps you attempt." },
          { q: "How long does Kawasan Falls canyoneering take?", a: "Roughly 3-4 hours for the guided canyoneering route itself, not including the drive from Cebu City, which adds about 3 hours each way." },
          { q: "Can I skip the canyoneering and just see Kawasan Falls?", a: "Yes — the main pool is also reachable by a standard hike without the canyoneering route, if you want the view without the jumps and rappels." },
          { q: "Can you combine Kawasan Falls with Oslob's whale sharks in one day?", a: "Yes, they're roughly 30-45 minutes apart, but it makes for a long, physically demanding day — consider splitting them across two days if your schedule allows." },
        ],
      };

    case "cebu-food-guide":
      return {
        title: "Cebu Food Guide 2026: Lechon, Sutukil and What to Actually Eat",
        description: "Cebu's lechon is the country's best by most Filipinos' own admission — here's that, plus sutukil, dried mangoes and the other dishes worth your appetite.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c7085f662b41c318fff9a3612274d4789d737c80dab97ec493e57d1af1cd6cd9.png",
        fastFacts: [
          { icon: "Utensils", label: "Signature dish", value: "Lechon — whole roast pig, stuffed with lemongrass and spices" },
          { icon: "Flame", label: "Local dining concept", value: "Sutukil (sugba-tola-kilaw) — grilled, soup and raw-marinated seafood in one meal" },
          { icon: "Dessert", label: "Souvenir food", value: "Dried mangoes — Cebu's export-quality version is considered the country's best" },
          { icon: "MapPin", label: "Best food neighborhood", value: "Carbon Market area and Larsian for street-level grilled food" },
        ],
        sections: [
          {
            title: "Lechon: Why Cebu's Version Is Considered the Country's Best",
            content: "**Lechon** — whole pig, slow-roasted over charcoal until the skin crackles — is cooked across the Philippines, but Cebu's version has a specific reputation, even among Filipinos from other regions, for being the country's best, owed to a distinctive stuffing of lemongrass, onions, garlic and native spices packed inside the cavity before roasting, which flavors the meat from the inside out as it cooks. The result needs minimal sauce, unlike some regional versions that lean on a liver-based gravy to carry the flavor.\n\nSeveral long-standing Cebu lechon institutions (CnT and Rico's among the best known) have built national reputations specifically on this technique, and trying lechon here rather than elsewhere in the Philippines is a genuine, defensible food pilgrimage, not hype.",
          },
          {
            title: "Sutukil: Grilled, Soup and Raw, All in One Meal",
            content: "**Sutukil** is a Cebuano dining concept, not a single dish — the name is a portmanteau of **su**gba (grilled), **tu**la (soup) and **ki**law (raw fish marinated in vinegar and calamansi, similar to ceviche) — where you pick fresh seafood at a market stall and have it prepared all three ways for the same meal. It's most associated with Mactan's Lapu-Lapu area, where seafood markets sit directly beside the restaurants that cook what you've just chosen, letting you watch the whole process from catch to plate.\n\nThis is worth seeking out specifically for the variety it packs into one seating — grilled squid, a sour fish soup, and fresh kilawin all from the same catch, rather than committing to one preparation style for the whole meal.",
            tourCard: { slug: "cebu-city-heritage-walk-and-food-crawl", title: "Cebu City Heritage Walk and Food Crawl", description: "A guided food crawl that includes Cebu's local specialties with heritage context.", price: "From $100", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b7fd2825254b05dbcb9bfc76ad0ef74f950cccc579f9edab5a171f00c76f0e3a.jpg" },
          },
          {
            title: "Street Food, Markets and Dried Mangoes",
            content: "**Larsian**, a cluster of grilled-food stalls in Cebu City, is the classic spot for cheap, casual grilled pork and chicken skewers (pork barbecue and chicken inasal-style) eaten standing or at shared outdoor tables, a genuinely local evening habit rather than a tourist construction. The **Carbon Market** area offers a denser, more chaotic produce-and-street-food scene for anyone wanting to see where Cebu's own households shop.\n\n**Dried mangoes** are Cebu's best-known food souvenir — the island's export-grade dried mango (brands like 7D and Philippine Brand are widely available) is considered the Philippines' benchmark for the product internationally, and it's worth buying here specifically rather than assuming any Philippine dried mango is the same quality.",
          },
        ],
        faqs: [
          { q: "Why is Cebu's lechon considered the best in the Philippines?", a: "Its distinctive lemongrass-and-spice stuffing flavors the meat from inside the cavity during roasting, a technique long-standing Cebu institutions have built national reputations on — most other regional lechon relies more heavily on a sauce." },
          { q: "What is sutukil?", a: "A Cebuano dining concept combining grilled (sugba), soup (tula) and raw marinated (kilaw) preparations of the same fresh seafood catch in one meal, most associated with Mactan's Lapu-Lapu seafood markets." },
          { q: "Where can I try cheap, casual grilled food in Cebu City?", a: "Larsian, a long-standing cluster of grilled-food stalls serving pork and chicken skewers, is the classic local spot for an informal evening meal." },
          { q: "Are Cebu's dried mangoes actually better than elsewhere in the Philippines?", a: "They're widely considered the country's benchmark for export-grade dried mango, so yes — worth buying here specifically as a food souvenir." },
        ],
      };

    case "cebu-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Cebu Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Cebu enough room for the city core, Oslob and Kawasan Falls in the south, and either Moalboal or Bohol — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg",
        sections: [
          {
            title: "Day 1: Cebu City — History, Lechon and Heritage",
            content: "Follow the one-day plan as your first day: Magellan's Cross, the Basilica and Fort San Pedro in the morning, a proper lechon lunch, and a heritage walk or food crawl through the afternoon and evening. This front-loads the city's history and food before the long south-Cebu days ahead.",
          },
          {
            title: "Day 2: Oslob Whale Sharks and Kawasan Falls Canyoneering",
            content: "Dedicate a long day to the south: an early (4-5am) departure for **Oslob's** whale sharks before crowds build, followed by **Kawasan Falls** canyoneering roughly 30-45 minutes further along the coast. This is a genuinely demanding day physically and in terms of travel time — budget for an early start and a late return, and read our Oslob whale sharks ethics guide before committing to this stop specifically.",
            tourCard: { slug: "cebu-south-highlights-tour-of-oslob-sumilon", title: "Cebu: South Highlights Tour of Oslob, Sumilon & Moalboal", description: "A combined south-Cebu day touching whale sharks and Moalboal's coastline.", price: "From $141", duration: "14 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/937623030f32f282609f0f262f994de3fcc90cf8a03834fec41072ef8400c30e.png" },
          },
          {
            title: "Day 3: Moalboal's Sardine Run or a Bohol Day Trip",
            content: "Choose based on your interest: **Moalboal** for the shore-accessible sardine run and Pescador Island diving if underwater wildlife is the priority, or a **Bohol** day trip via fast ferry for the Chocolate Hills and a Loboc River cruise if you'd rather see a different island's landscape. Both are full days in their own right and shouldn't be combined with each other or with the Oslob/Kawasan day above.",
            tourCard: { slug: "cebu-moalboal-scuba-diving-sardines-run-pescador", title: "Cebu: Moalboal Scuba Diving, Sardines Run & Pescador Snorkel", description: "The full Moalboal day if underwater wildlife is your priority for day three.", price: "From $259", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg" },
          },
          {
            title: "If You Have a 4th Day: Camotes or Siquijor",
            content: "A fourth day opens up the quieter **Camotes Islands** or an overnight start toward **Siquijor** for its slower pace and folklore reputation — both genuine additions rather than something to squeeze into the three-day core above.",
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Cebu?", a: "Yes, for a well-rounded first visit — the city core, a south Cebu day covering Oslob and Kawasan Falls, and a third day for either Moalboal or Bohol covers Cebu's genuinely different sides." },
          { q: "Should I do Oslob and Moalboal on the same day?", a: "It's possible but makes for a very long day given the distances involved — splitting Kawasan Falls (near Oslob) and Moalboal across two separate days is more comfortable if your schedule allows it." },
          { q: "Should I add Bohol or Camotes to a 3-day Cebu trip?", a: "Bohol fits well as day three if Moalboal doesn't interest you as much; Camotes and Siquijor are better suited to a 4th day or a longer trip given their own travel time." },
        ],
      };

    case "cebu-to-bohol-travel":
      return {
        title: "Cebu to Bohol Travel Guide 2026: The Ferry Route and Day Trip Logistics",
        description: "The Chocolate Hills and a Loboc River cruise are a genuine day trip from Cebu via fast ferry — here's the route, timing and what the day actually looks like.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png",
        fastFacts: [
          { icon: "Ship", label: "Ferry time", value: "Roughly 2 hours each way by fast ferry from Cebu City pier" },
          { icon: "Clock", label: "Total day length", value: "Roughly 8-10 hours round trip including inland travel on Bohol" },
          { icon: "MapPin", label: "Headline sight", value: "The Chocolate Hills — over a thousand grass-covered limestone mounds" },
          { icon: "Ship", label: "Signature activity", value: "A Loboc River cruise lunch on a floating restaurant" },
        ],
        sections: [
          {
            title: "The Ferry Route: What to Expect",
            content: "Multiple fast ferry operators run between **Cebu City's pier** and **Tagbilaran**, Bohol's main port, with the crossing taking roughly **2 hours** each way. Several daily departures run in both directions, so there's flexibility in timing, though the earliest morning departure is the standard choice for a day trip since it maximizes time on Bohol itself before the return crossing. Bring a form of ID for ferry check-in, similar to a domestic flight, and arrive at the pier with some buffer time before departure given standard port security and boarding procedures.\n\nSeasickness is rarely an issue on the larger fast ferries operating this specific route, but anyone particularly prone to it should consider the earliest, generally calmer morning crossing.",
          },
          {
            title: "What a Bohol Day Trip Actually Covers",
            content: "Once on Bohol, the standard day-trip circuit covers the **Chocolate Hills** — a genuinely striking landscape of over a thousand grass-covered limestone mounds that turn a distinctive brown color in the dry season, giving them their name — followed by a **Loboc River cruise**, where lunch is served buffet-style on a floating restaurant drifting gently down the river, often with live local music performed on board. Many itineraries also add a stop at the **Tarsier Sanctuary**, home to one of the world's smallest primates, native to Bohol and parts of the southern Philippines, and the **Baclayon Church**, one of the oldest stone churches in the country.\n\nThe full circuit, including the inland drive between Tagbilaran port and the Chocolate Hills (roughly 1-1.5 hours each way), makes this a genuinely full day rather than a relaxed half-day trip.",
            tourCard: { slug: "from-cebu-bohol-day-trip-with-loboc-river-cruise", title: "From Cebu: Bohol Day Trip with Loboc River Cruise & Lunch", description: "The ferry crossing bundled with the Chocolate Hills circuit and river cruise lunch.", price: "From $235", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fd7bc0d5db837d86b5c768005af8bf1acc87efd45a3fb712604a2c5af54b82c.png" },
          },
          {
            title: "Day Trip vs. Overnight: Which Makes More Sense",
            content: "A day trip genuinely works for the Chocolate Hills and Loboc River circuit specifically, but it leaves no time for Bohol's other draws — Panglao Island's beaches and the Oslob-style whale shark tours departing from Panglao itself, or Balicasag Island's diving and snorkeling. If those interest you as much as the Chocolate Hills, an overnight or two-night stay on Bohol is a better use of the ferry crossing than cramming everything into a single long day from Cebu.",
          },
        ],
        faqs: [
          { q: "How long is the ferry from Cebu to Bohol?", a: "Roughly 2 hours each way on a fast ferry between Cebu City's pier and Tagbilaran, Bohol's main port." },
          { q: "Can you see the Chocolate Hills in a day trip from Cebu?", a: "Yes — it's the standard day-trip circuit, combined with a Loboc River cruise lunch, though it makes for a full 8-10 hour day including the ferry crossings and inland driving." },
          { q: "Is it better to do Bohol as a day trip or an overnight?", a: "A day trip covers the Chocolate Hills and river cruise well, but an overnight is better if you also want Panglao's beaches or Balicasag's diving." },
          { q: "What else is on a typical Bohol day-trip itinerary?", a: "The Tarsier Sanctuary (home to one of the world's smallest primates) and Baclayon Church, one of the Philippines' oldest stone churches, are common additions alongside the Chocolate Hills and river cruise." },
        ],
      };

    case "magellan-cross-basilica-guide":
      return {
        title: "Magellan's Cross and Basilica Minore del Santo Niño Guide 2026",
        description: "The 1521 cross marking the Philippines' first Catholic baptism and the country's oldest Roman Catholic church sit side by side in Cebu City — here's the history and what to actually see.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f0eeca47f1d1602377dcfb453880973dcc660fea9fc2fe32783b5f98dbecc7.png",
        fastFacts: [
          { icon: "History", label: "Magellan's Cross", value: "Planted 1521, marking the first Catholic baptism in the Philippines" },
          { icon: "Church", label: "Basilica Minore del Santo Niño", value: "The Philippines' oldest Roman Catholic church, founded 1565" },
          { icon: "MapPin", label: "Location", value: "Both sit side by side in Cebu City's historic downtown core" },
          { icon: "Landmark", label: "Nearby", value: "Fort San Pedro, a short walk away, rounds out the colonial-era sights" },
        ],
        sections: [
          {
            title: "Magellan's Cross: Marking 1521",
            content: "**Magellan's Cross** commemorates the cross planted by Portuguese explorer Ferdinand Magellan's expedition in 1521, marking the site of the first Catholic baptism in what would become the Philippines — a pivotal moment in the islands' colonial and religious history, since it preceded over three centuries of Spanish colonial rule that followed. The cross housed today, inside an octagonal kiosk-style chapel, is widely believed to be a later replica encasing fragments of the original, a detail historians debate but that doesn't diminish the site's symbolic weight for Filipino Catholics, who still visit to light candles and pray rather than treating it as a purely historical relic.\n\nThe surrounding plaza is small and easy to see in minutes, but its significance as the starting point of Philippine Christianity is worth understanding before a quick photo and move-on.",
          },
          {
            title: "Basilica Minore del Santo Niño: The Country's Oldest Church",
            content: "Standing directly beside Magellan's Cross, the **Basilica Minore del Santo Niño**, founded in 1565, is the oldest Roman Catholic church in the Philippines, built to house the **Santo Niño** image — a statue of the Child Jesus reputedly given by Magellan's expedition to the local queen as a baptismal gift, and considered one of the most venerated Catholic icons in the country. The basilica hosts the massive **Sinulog Festival** every January, one of the Philippines' largest religious and cultural celebrations, drawing enormous crowds of devotees and dancers in a street parade honoring the Santo Niño.\n\nInside, the basilica's interior and an attached museum display historical artifacts related to the Santo Niño's veneration and Cebu's early colonial history, worth the extra time if you're visiting outside a service.",
            tourCard: { slug: "cebu-city-tour-of-christianitys-roots-in-the", title: "Cebu: City Tour of Christianity's Roots in the Philippines", description: "A guided loop through Magellan's Cross, the Basilica and Fort San Pedro with historical context.", price: "From $76", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f0eeca47f1d1602377dcfb453880973dcc660fea9fc2fe32783b5f98dbecc7.png" },
          },
          {
            title: "Practical Tips and What to Pair It With",
            content: "Both sites are free to visit, though the basilica may ask for a modest donation and dress modestly expected inside (covered shoulders, no very short shorts). Weekday mornings are noticeably calmer than weekends, when local devotees visit in larger numbers for mass and personal prayer, and January's Sinulog Festival period is both the most atmospheric and most crowded time to be here by a wide margin.\n\n**Fort San Pedro**, a Spanish-built military fort from the same colonial period, sits a short walk away and naturally extends a historic-core visit into a half-day loop, often paired with a lechon lunch stop given how central this district is to Cebu City.",
          },
        ],
        faqs: [
          { q: "What is Magellan's Cross?", a: "A cross marking the site of the first Catholic baptism in the Philippines in 1521, planted during Ferdinand Magellan's expedition. The cross on display today is widely believed to encase fragments of the original inside a later replica." },
          { q: "What is the oldest church in the Philippines?", a: "The Basilica Minore del Santo Niño in Cebu City, founded in 1565, standing directly beside Magellan's Cross in the city's historic downtown core." },
          { q: "Is there an entrance fee for Magellan's Cross or the Basilica?", a: "No, both are free to visit, though the basilica may welcome a modest donation and expects modest dress inside." },
          { q: "What is the Sinulog Festival?", a: "One of the Philippines' largest religious and cultural celebrations, held every January at the Basilica Minore del Santo Niño, honoring the Santo Niño with a massive street parade and dance competition." },
        ],
      };

    case "cebu-beaches-guide":
      return {
        title: "Cebu Beaches Guide 2026: Mactan, Bantayan, Camotes and Which to Choose",
        description: "From resort-lined Mactan to Bantayan's quieter white sand and the Camotes Islands — here's how Cebu's beach options actually differ.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a16a72585927842964febcf8171a2630d696431da0b9d67bca5fd1d8abcd90e.jpeg",
        fastFacts: [
          { icon: "MapPin", label: "Easiest access", value: "Mactan Island — resort beaches a short bridge crossing from Cebu City" },
          { icon: "Ship", label: "Quieter, further option", value: "Bantayan Island — a few hours by road and boat, less developed" },
          { icon: "MapPin", label: "Mid-distance option", value: "Camotes Islands — caves and lake plus beaches, a few hours by boat" },
          { icon: "Sun", label: "Best season", value: "December to May, drier and calmer seas for beach and water activities" },
        ],
        sections: [
          {
            title: "Mactan Island: Convenient, Resort-Dense, Not Untouched",
            content: "**Mactan Island**, home to Cebu's international airport and a short bridge crossing from Cebu City, concentrates most of the island's beach resorts, making it the obvious choice for travelers who want beach access without a long day-trip commitment. The beaches here are mostly resort-managed rather than wild public stretches — **Bluewater Maribago** and similar properties sell day-pass access to their pools, beach frontage and buffet dining even for non-guests, a practical option if you're not staying at a beach resort but still want a beach day.\n\nMactan's water is generally clear and calm, good for casual swimming and freediving trips to nearby reef spots, though it's not the untouched, empty-beach experience some visitors picture before arriving.",
            tourCard: { slug: "bluewater-maribago-beach-resort-entry-ticket", title: "Bluewater Maribago Beach Resort Entry Ticket", description: "Day-pass access to a Mactan beach resort's pool, beach and buffet without staying overnight.", price: "From $97", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a16a72585927842964febcf8171a2630d696431da0b9d67bca5fd1d8abcd90e.jpeg" },
          },
          {
            title: "Bantayan Island: Further, Quieter, Genuinely White Sand",
            content: "**Bantayan Island**, reachable by a few hours of road travel to a port followed by a ferry crossing, offers noticeably quieter, whiter-sand beaches than Mactan's resort strip, with a more laid-back, less developed atmosphere overall. It's a worthwhile destination specifically for travelers prioritizing beach quality and fewer crowds over convenience, and it also offers freediving and scuba diving options for those wanting to add an underwater element to a beach-focused day or overnight.",
            tourCard: { slug: "bantayan-mangroves-eco-park-and-beaches-tour-with", title: "Bantayan: Mangroves Eco Park and Beaches Tour with Transfer", description: "Covers Bantayan's beaches alongside a mangrove eco park stop, with transfer included.", price: "From $82", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/def9afc802946ac4fbdef12fe9b7eef5a828e7a29fd4122e5d04425bbc1ab9b6.jpg" },
          },
          {
            title: "Camotes Islands: Beaches Plus Caves and a Freshwater Lake",
            content: "The **Camotes Islands**, a few hours by boat from Cebu, pair their own quieter beaches with two genuinely distinct additions: cave systems with swimmable underground pools, and **Lake Danao**, a freshwater lake unusual for an island this size. This combination makes Camotes worth considering over a straightforward beach-only destination if variety matters as much as the beach itself — see our Cebu island hopping guide for how it compares to Bantayan and Bohol as a destination choice.",
          },
        ],
        faqs: [
          { q: "Which Cebu beach is most convenient from the city?", a: "Mactan Island — a short bridge crossing from Cebu City, concentrating most of the island's beach resorts, though it's more developed and resort-managed than a wild beach experience." },
          { q: "Which Cebu beach is quietest and least developed?", a: "Bantayan Island generally offers quieter, whiter sand and fewer crowds than Mactan, at the cost of a longer road-and-ferry journey to reach." },
          { q: "Can you visit a Mactan beach resort without staying overnight?", a: "Yes — most Mactan resorts, including Bluewater Maribago, sell day-pass access covering the beach, pool and buffet for non-overnight guests." },
          { q: "What makes the Camotes Islands different from other Cebu beach options?", a: "They pair quiet beaches with cave systems and Lake Danao, a freshwater lake unusual for an island this size, adding variety beyond the beach itself." },
        ],
      };

    case "siquijor-day-trip-guide":
      return {
        title: "Siquijor Day Trip Guide 2026: Getting There and Whether a Day Is Enough",
        description: "Siquijor's slower pace and folklore reputation are part of its appeal — here's how to get there from Cebu and the honest answer on whether a day trip does it justice.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a38d4330845723cacde97cb49d4f4f156870cb27d414cac620f18a12c05d6015.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Access", value: "Boat from southern Cebu, Bohol (Tagbilaran) or Negros, not direct from Cebu City" },
          { icon: "History", label: "Reputation", value: "A long-standing Filipino association with folk healing and mysticism" },
          { icon: "Clock", label: "Honest verdict", value: "A day trip is possible but an overnight captures the island's actual character better" },
          { icon: "Droplet", label: "Highlights", value: "Cambugahay Falls, Salagdoong Beach, old Spanish-era churches" },
        ],
        sections: [
          {
            title: "Siquijor's Folklore Reputation, and Why It's Not Just Marketing",
            content: "**Siquijor** carries a genuine, long-standing reputation within the Philippines itself as a center of folk healing, herbal medicine and mysticism, dating back generations — local healers (mananambal) practicing traditional remedies and rituals are a real, living part of island culture, not an invention for tourists. This reputation shapes how Filipinos themselves talk about and visit the island, often with a mix of curiosity and genuine respect, distinct from how most beach-destination islands get marketed.\n\nThat said, the island's actual day-to-day character for a visitor is calm and unhurried rather than ominous — quiet roads, old Spanish-era churches, and a noticeably slower pace than Cebu or Bohol.",
          },
          {
            title: "Getting There: No Direct Route From Cebu City",
            content: "Siquijor has no direct ferry or flight connection from Cebu City itself — the practical routes run via a boat from **southern Cebu** (near Oslob/Santander), from **Tagbilaran** on Bohol, or from **Negros Island** (Dumaguete), with Dumaguete generally offering the most frequent crossings. This makes a true day trip from Cebu City logistically demanding: you're combining a multi-hour road trip south plus a boat crossing each way, leaving a genuinely short window on the island itself once travel time is subtracted.\n\nTravelers based in Bohol or already near Dumaguete have a considerably easier day-trip logistics picture than those starting from Cebu City directly.",
            tourCard: { slug: "the-best-of-siquijor-island-tour", title: "The Best of Siquijor Island Tour", description: "A guided loop covering the island's main highlights for travelers who've made the crossing.", price: "From $61", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a38d4330845723cacde97cb49d4f4f156870cb27d414cac620f18a12c05d6015.jpg" },
          },
          {
            title: "What a Day on Siquijor Actually Covers, and Why an Overnight Is Better",
            content: "A typical single-day circuit covers **Cambugahay Falls** (a multi-tiered waterfall with a rope swing into one of its pools), **Salagdoong Beach**, a cliff-diving spot with clear water, and a stop at one of the island's centuries-old Spanish colonial churches. This is a satisfying but rushed version of what Siquijor offers — the island's real appeal is its unhurried pace, and a single day spent mostly in transit and moving between stops doesn't let that register the way staying even one night does.\n\nGiven the travel time involved from Cebu specifically, an overnight is the more honest recommendation if Siquijor genuinely interests you, rather than treating it as a quick add-on to a Cebu-based trip.",
          },
        ],
        faqs: [
          { q: "Can you visit Siquijor in a day trip from Cebu City?", a: "Technically yes, but it's logistically demanding — there's no direct route, requiring a road trip south plus a boat crossing each way, leaving limited time on the island itself." },
          { q: "Is Siquijor actually about witchcraft and folklore?", a: "It has a genuine, long-standing Filipino reputation as a center of folk healing and traditional medicine, which is real local culture rather than tourist marketing, though the island's day-to-day feel is calm rather than ominous." },
          { q: "What are Siquijor's main highlights?", a: "Cambugahay Falls (with a rope swing), Salagdoong Beach for cliff diving, and several centuries-old Spanish colonial churches." },
          { q: "Is an overnight better than a day trip to Siquijor?", a: "Yes — given the travel time involved from Cebu and the island's slower-paced appeal, an overnight lets you actually experience what makes Siquijor distinct rather than rushing through a checklist." },
        ],
      };

    case "cebu-diving-guide":
      return {
        title: "Cebu Diving Guide 2026: Moalboal, Pescador, Bantayan and Choosing a Spot",
        description: "From Moalboal's sardine run and thresher sharks to Bantayan's calmer reefs — here's how Cebu's main dive destinations compare for different experience levels.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg",
        fastFacts: [
          { icon: "Fish", label: "Signature dive site", value: "Pescador Island, off Moalboal — reef wall, occasional thresher sharks" },
          { icon: "Fish", label: "Non-diver highlight", value: "Moalboal's shore-accessible sardine run, snorkel-friendly" },
          { icon: "Droplet", label: "Beginner-friendly option", value: "Bantayan Island and Mactan's reef spots — calmer, shallower" },
          { icon: "Sun", label: "Best visibility", value: "December to May, drier season with calmer seas" },
        ],
        sections: [
          {
            title: "Moalboal and Pescador Island: The Main Draw for Experienced Divers",
            content: "**Moalboal**, on Cebu's southwestern coast, is the island's most important dive destination, built around two features within a short boat ride of each other: the shore-accessible **sardine run** (a snorkeling-level experience as much as a diving one) and **Pescador Island**, a short boat trip out offering a dramatic reef wall, dense fish life, and a real — though not guaranteed — chance of **thresher sharks**, a deep-water species rarely seen this accessibly elsewhere without a liveaboard trip. Pescador rewards divers with some open-water comfort and buoyancy control more than complete beginners, given depths and occasional current.\n\nMoalboal has a dense cluster of dive shops offering everything from single fun dives to full certification courses, making it a practical base for a multi-day diving stay rather than a single day trip from Cebu City.",
            tourCard: { slug: "cebu-moalboal-scuba-diving-sardines-run-pescador", title: "Cebu: Moalboal Scuba Diving, Sardines Run & Pescador Snorkel", description: "A combined scuba and snorkel day covering both Moalboal signature experiences.", price: "From $259", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c79efd74626b51b0b930ddebb991094b0ecfe753eced67e4f2996403a29dd8.jpg" },
          },
          {
            title: "Oslob and Sumilon: Diving Alongside Whale Sharks",
            content: "For divers wanting to add scuba to the Oslob whale shark experience rather than snorkeling, some operators offer a **diving option during the whale shark encounter** itself, plus separate dive trips to **Sumilon Island's** marine sanctuary nearby, known for healthy reef and a sandbar that shifts position with the tides and seasons. This is a reasonable way to combine south Cebu's headline marine attraction with a proper dive day, though see our Oslob whale sharks ethics guide before treating the whale shark portion as an uncomplicated choice.",
            tourCard: { slug: "cebu-oslob-whaleshark-scuba-diving-sumilon", title: "Cebu: Oslob Whaleshark Scuba Diving & Sumilon Sanctuary", description: "A diving-focused version of the Oslob experience, paired with Sumilon's marine sanctuary.", price: "From $442", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f225126f53bc4048328a6b7ca9ddb9442e5d355ce66836916ee8395032d176c3.jpg" },
          },
          {
            title: "Calmer, Beginner-Friendly Options: Bantayan and Mactan",
            content: "If you're newer to diving or traveling with mixed-experience groups, **Bantayan Island** and the reef spots around **Mactan** offer shallower, calmer conditions better suited to discover-scuba experiences and open-water students than Moalboal's current-exposed sites. These areas won't deliver Pescador's drama, but they're a sensible, lower-pressure way to try diving for the first time or log easy dives without committing to Moalboal's more demanding conditions.",
            tourCard: { slug: "bantayan-island-discover-scuba-diving", title: "Bantayan Island: Discover Scuba Diving", description: "A beginner-friendly introductory dive in Bantayan's calmer waters.", price: "From $86", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/71e0315539977b0c0ca7feb49eeab47d77a93f663367bc26dc8440576abcdcf3.jpg" },
          },
        ],
        faqs: [
          { q: "Where is the best diving in Cebu?", a: "Moalboal and its offshore Pescador Island are the island's standout dive destination, combining the shore-accessible sardine run with a dramatic reef wall and occasional thresher shark sightings." },
          { q: "Can beginners dive in Cebu?", a: "Yes — Bantayan Island and Mactan's reef spots offer calmer, shallower conditions well suited to discover-scuba experiences and new open-water divers, as an alternative to Moalboal's more demanding sites." },
          { q: "Can you dive with whale sharks at Oslob?", a: "Some operators offer a diving option alongside the standard snorkeling encounter, often paired with a separate trip to Sumilon Island's marine sanctuary." },
          { q: "When is the best diving visibility in Cebu?", a: "December through May, during the drier season with calmer seas, generally offers the clearest water for diving across Cebu's main sites." },
        ],
      };

    case "oslob-vs-donsol-whale-sharks":
      return {
        title: "Oslob vs. Donsol Whale Sharks 2026: Which Should You Actually Choose?",
        description: "Oslob guarantees sightings through daily feeding; Donsol offers a wild, seasonal, unprovisioned encounter. Here's an honest comparison of both.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Oslob", value: "Cebu, year-round sightings via daily shrimp feeding — near-guaranteed" },
          { icon: "MapPin", label: "Donsol", value: "Luzon (Sorsogon), seasonal (roughly November-June), wild and unprovisioned" },
          { icon: "AlertTriangle", label: "Ethics", value: "Donsol is generally considered the more conservation-conscious choice" },
          { icon: "Fish", label: "Reliability tradeoff", value: "Oslob near-certain; Donsol genuinely depends on the day and season" },
        ],
        sections: [
          {
            title: "The Core Difference: Provisioned vs. Wild",
            content: "**Oslob**, in southern Cebu, offers near-guaranteed whale shark sightings because local fishermen feed the animals shrimp daily, drawing them close to shore in a designated area where snorkelers and divers interact with them at close range essentially any day of the year. **Donsol**, on the Bicol Peninsula in Luzon, takes the opposite approach: whale sharks appear there seasonally (roughly November through June, peaking February-May) as part of their natural feeding migration drawn by seasonal plankton blooms, with strict no-touch, no-feeding protocols enforced by the local tourism office in partnership with WWF Philippines.\n\nThis single difference — fed versus wild — shapes essentially every other tradeoff between the two destinations.",
          },
          {
            title: "Reliability and Access",
            content: "Oslob's near-certainty is its biggest practical advantage: if your trip dates are fixed and you specifically want to guarantee a whale shark encounter, Oslob delivers that far more reliably than Donsol, where sightings depend on the day's conditions and are genuinely not guaranteed even within the main season, and are essentially absent outside it. Oslob is also considerably easier to reach as a day trip from Cebu City (roughly 2.5-3 hours by road), while Donsol requires its own dedicated trip to the Bicol region, generally not combinable with a Cebu-based itinerary in the same visit.\n\nIf your Philippines trip is centered on Cebu specifically, Donsol simply isn't a practical add-on; it's a separate regional destination.",
            tourCard: { slug: "cebu-oslob-whale-shark-tour-sumilon-island", title: "Cebu: Oslob Whale Shark Tour, Sumilon Island & Tumalog Falls", description: "The practical choice for Cebu-based travelers who want a near-guaranteed whale shark encounter.", price: "From $227", duration: "12 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg" },
          },
          {
            title: "The Honest Ethics Comparison",
            content: "Marine biologists and conservation groups, including WWF Philippines, have generally been more supportive of Donsol's model — strict distance rules, no feeding, no touching, trained local spotters and boatmen, and an encounter structure built around observing natural wild behavior rather than altering it. Oslob's daily provisioning, by contrast, has drawn documented concern over habituation, altered migratory behavior and boat-strike injury risk to individual sharks, even as it's provided Oslob's fishing community a more stable livelihood than fishing itself did.\n\nThere's no obligation to choose Donsol on ethical grounds alone — reasonable people land on different sides of this — but it's worth making the choice knowingly rather than assuming both options are ethically equivalent. See our dedicated Oslob whale sharks guide for the fuller breakdown of that specific debate.",
          },
        ],
        faqs: [
          { q: "Which is better, Oslob or Donsol, for whale sharks?", a: "It depends on your priority: Oslob offers near-guaranteed, easily accessible sightings from Cebu; Donsol offers a wild, seasonal, more conservation-conscious encounter but requires its own trip to Luzon and isn't guaranteed." },
          { q: "Can you visit Donsol from Cebu easily?", a: "No — Donsol is on Luzon's Bicol Peninsula and isn't a practical day trip or easy add-on from a Cebu-based itinerary; it requires its own separate trip." },
          { q: "Is Donsol's whale shark season year-round like Oslob's?", a: "No — Donsol's sightings are seasonal, roughly November through June and peaking February-May, tied to a natural plankton-driven feeding migration rather than daily provisioning." },
          { q: "Which is considered more ethical, Oslob or Donsol?", a: "Donsol is generally viewed more favorably by marine conservation groups for its wild, unprovisioned, strictly regulated model, though Oslob's program does support local fishing livelihoods directly." },
        ],
      };

    case "cebu-waterfalls-guide":
      return {
        title: "Cebu Waterfalls Guide 2026: Kawasan, Tumalog, Twin Falls and More Compared",
        description: "From Kawasan's canyoneering route to Tumalog's curtain-style falls and Twin Falls near Moalboal — here's how Cebu's main waterfalls actually differ.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/251f11cb53903c84ea5c2149952270a2ecf7199dc730d1f2f3c9f56790115f6a.png",
        fastFacts: [
          { icon: "Droplet", label: "Most adventurous", value: "Kawasan Falls — full canyoneering route with jumps and rappels" },
          { icon: "Droplet", label: "Easiest access, most photogenic", value: "Tumalog Falls — a wide, curtain-style waterfall near Oslob" },
          { icon: "Droplet", label: "Combine with wildlife", value: "Twin Falls — often paired with the Moalboal sardine run and sea turtle search" },
          { icon: "MapPin", label: "Region", value: "Most of Cebu's notable waterfalls sit in the island's south, near Oslob and Moalboal" },
        ],
        sections: [
          {
            title: "Kawasan Falls: The Canyoneering Headliner",
            content: "**Kawasan Falls**, in Badian, is the island's best-known waterfall largely because of its canyoneering route — a guided, multi-stage descent through a series of smaller waterfalls via jumps, rope rappels and swims, finishing at the main falls' striking turquoise pool. See our dedicated Kawasan Falls canyoneering guide for exactly what the route involves; the short version is that it's genuinely physical and not simply a scenic walk, though the main pool is also reachable by a standard hike for anyone who wants the view without the adventure activity.",
            tourCard: { slug: "cebu-kawasan-falls-canyoneering-tour-with-hotel", title: "Cebu: Kawasan Falls Canyoneering Tour with Hotel Pickup", description: "The full guided canyoneering route down to Kawasan's main pool.", price: "From $345", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a585eec8aa1511eff1f7180824adc66ea6d09cfb817452a7dca98d9eacff84f3.png" },
          },
          {
            title: "Tumalog Falls: The Easy, Photogenic Pair to Oslob",
            content: "**Tumalog Falls**, a short distance from Oslob, is a wide, gentle, curtain-style waterfall cascading down in multiple thin sheets rather than a single dramatic drop — easy to reach via a short walk or motorbike habal-habal ride from the parking area, and genuinely photogenic without requiring the fitness or commitment Kawasan's canyoneering route demands. It's the natural pairing for anyone already in Oslob for the whale sharks, since it adds a scenic, low-effort stop to the same day without much extra travel.",
            tourCard: { slug: "cebu-oslob-whale-shark-tour-sumilon-island", title: "Cebu: Oslob Whale Shark Tour, Sumilon Island & Tumalog Falls", description: "Pairs the whale shark encounter with a stop at Tumalog Falls in the same day.", price: "From $227", duration: "12 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26eb511bcac63318af95c2418702f563a17f3567d203a2776c2fbb3245a7c3ef.jpg" },
          },
          {
            title: "Twin Falls and Other Southern Cebu Waterfalls",
            content: "**Twin Falls**, near Moalboal, is often bundled into day tours alongside the sardine run and a sea turtle search, functioning more as a scenic add-on to a marine-wildlife-focused day than a standalone destination the way Kawasan is. Several smaller, less-marketed waterfalls exist across southern Cebu's interior, generally reached only through local guides or as part of broader countryside tours, worth asking about if you're specifically looking to get away from the better-known, more crowded spots.",
            tourCard: { slug: "cebu-twin-falls-tour-with-sardine-run-sea-turtle", title: "Cebu: Twin Falls Tour with Sardine Run & Sea Turtle Search", description: "Combines Twin Falls with Moalboal's sardine run and a sea turtle search in one day.", price: "From $227", duration: "14 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c8798cd2cdcec4d3a613bad75b7b7b87c8857e25ac57976d273d9a782f23036.jpg" },
          },
        ],
        faqs: [
          { q: "Which Cebu waterfall is best for an adventure activity?", a: "Kawasan Falls, specifically for its canyoneering route — a guided descent with jumps, rappels and swims through a series of smaller falls before reaching the main turquoise pool." },
          { q: "Which Cebu waterfall is easiest to visit?", a: "Tumalog Falls, near Oslob — a short walk or habal-habal ride from the parking area, with no canyoneering or hiking commitment required, making it an easy pairing with a whale shark day." },
          { q: "Can you see Kawasan Falls without doing the canyoneering route?", a: "Yes — the main pool is also reachable by a standard hike for visitors who want the view without the jumps, rappels and swims of the full canyoneering route." },
          { q: "Where is Twin Falls?", a: "Near Moalboal, usually visited as part of a combined day with the sardine run and a sea turtle search rather than as a standalone destination." },
        ],
      };

    default:
      return null;
  }
}
