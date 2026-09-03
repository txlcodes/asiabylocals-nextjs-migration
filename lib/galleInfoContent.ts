// Galle authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getGalleInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

export function getGalleInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "galle-fort-guide":
      return {
        title: "Galle Fort: What to See, When to Walk the Ramparts and How Long It Takes",
        seoTitle: "Galle Fort Guide, Sri Lanka",
        description: "A 1663 Dutch walled town that people still live in: the ramparts, the lighthouse, the streets worth walking, and the two hours it actually needs.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
        fastFacts: [
          { icon: "ticket", label: "Entry", value: "Free — it is a living town, not a site" },
          { icon: "clock", label: "Time needed", value: "2-3 hours to walk it properly" },
          { icon: "clock", label: "Best time", value: "Late afternoon — the ramparts face west" },
          { icon: "info", label: "Built", value: "Portuguese 1588, rebuilt by the Dutch from 1649" },
          { icon: "landmark", label: "UNESCO listed", value: "Since 1988" },
          { icon: "map", label: "From Colombo", value: "125 km, about 2 hours on the E01 expressway" },
        ],
        sections: [
          {
            title: "Galle Fort: What to See, When to Walk the Ramparts and How Long It Takes",
            icon: "landmark",
            content: "Galle Fort is a walled town of about 52 hectares on a promontory on Sri Lanka's south coast, and the thing that makes it unusual is not the walls but the fact that people never left. It is not a preserved ruin or a museum site. It is a functioning neighbourhood with houses, schools, mosques, a working court, and roughly four hundred families living inside the ramparts.\n\nThe Portuguese built the first fortifications in 1588. The Dutch took Galle in 1640 and rebuilt it properly from 1649, and what stands today is essentially their work: bastions with Dutch names, a grid of streets, a drainage system that used the tide to flush the sewers, and warehouses built to hold cinnamon.\n\nThe British took it in 1796 and largely left it alone, which is why the Dutch layout survives so completely. UNESCO listed it in 1988 as the best-preserved example of a European fortified city in South and Southeast Asia.\n\nThe 2004 tsunami hit the coast around Galle hard and killed thousands in the town outside. Inside the ramparts, the Dutch walls held and the fort was largely undamaged — a four-hundred-year-old piece of engineering doing exactly what it was built for.\n\nThere is no ticket. You walk in.",
            tourCard: {
              slug: "galle-countryside-cycling-tour-through-villages-paddy-fields",
              title: "Galle Countryside Cycling Tour through Villages, Paddy Fields and Plantations",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84.5",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
            },
          },
          {
            title: "The ramparts, and when to walk them",
            icon: "sunset",
            content: "The rampart walk is the thing to do, and the timing matters more than the route. The walls run roughly two kilometres around the promontory, they are walkable almost the whole way, and the western section faces the sea.\n\nGo late in the afternoon. The ramparts catch the sea breeze, the light is on the walls rather than behind them, and the sunset from the western bastions is the best in southern Sri Lanka. This is also when the town comes out — local families, cricket on the grass by the lighthouse, boys jumping off the walls into the sea at Flag Rock.\n\nStart at the main gate and go clockwise: Sun Bastion, Star Bastion and Moon Bastion on the landward side, then Aeolus, Clippenberg and Neptune along the sea, then Triton, Flag Rock and the lighthouse on the southern point.\n\nAn hour at a slow pace. There is no railing on much of it and the drop is real, so watch children.\n\nThe cliff jumpers at Flag Rock will jump for a tip. It is genuinely dangerous — the water is shallow and rocky in places — and paying for it is your call.",
            tourCard: {
              slug: "galle-countryside-cycling-tour-through-villages-paddy-fields",
              title: "Galle Countryside Cycling Tour through Villages, Paddy Fields and Plantations",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84.5",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
            },
          },
          {
            title: "Inside the walls",
            icon: "map",
            content: "The streets are a grid and the whole town is walkable in an afternoon, but the pleasure is in wandering rather than ticking off.\n\nThe lighthouse at the southern point, built in 1939, is the most photographed thing in Sri Lanka after the Nine Arch Bridge. You cannot go up it.\n\nThe Dutch Reformed Church, from 1755, has a floor paved with gravestones moved from an older cemetery — you walk on seventeenth-century Dutch names. The Meeran Mosque next to the lighthouse is a striking white building that looks Portuguese-baroque and is entirely a mosque; Galle has had a Muslim community since Arab traders used the port centuries before the Europeans arrived.\n\nThe Maritime Archaeology Museum in a Dutch warehouse is small and good on the wrecks off this coast. The National Museum in the old Dutch commander's house is modest.\n\nPedlar Street, Church Street and Leyn Baan Street have the boutiques, galleries and cafés — Galle Fort is now expensive by Sri Lankan standards and knows it. The residential lanes behind them are where the town is still a town.",
            tourCard: {
              slug: "hikkaduwa-reef-scuba-diving-session",
              title: "Hikkaduwa Reef Scuba Diving Session",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 127.78",
              duration: "3 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
            },
          },
          {
            title: "How long, and what it costs",
            icon: "clock",
            content: "Two to three hours covers the fort properly: an hour on the ramparts, an hour in the streets, and time for a coffee. People who allow half a day are rarely sorry; people who allow forty minutes see a wall and a lighthouse.\n\nThere is no entrance fee to the fort itself. The museums charge small amounts. Guides offer their services at the main gate and a good one is worth it — the Dutch history and the details of the drainage, the bastions and the church floor are not signed.\n\nStaying inside the walls is a genuinely different experience from visiting, and it is the reason to give Galle a night rather than an afternoon. The town empties of day-trippers around five, and the couple of hours after that, with the light going and the streets quiet, is when the fort is at its best. Accommodation inside is boutique and priced accordingly; there are cheaper options immediately outside.\n\nAs a day trip from Colombo it is two hours each way on the expressway, which makes it comfortably doable and usually paired with the Madu River mangroves or a turtle hatchery on the way back.",
            tourCard: {
              slug: "galle-countryside-cycling-tour-through-villages-paddy-fields",
              title: "Galle Countryside Cycling Tour through Villages, Paddy Fields and Plantations",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84.5",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
            },
          },
          {
            title: "Beyond the walls",
            icon: "waves",
            content: "Most visitors see the fort and leave, which misses the point of this coast.\n\nThe countryside directly behind Galle is paddy, cinnamon smallholdings and rubber, threaded with lanes that carry almost no traffic. A morning cycling through it is the best half-day available here and shows you a working landscape rather than a preserved one.\n\nUnawatuna, five kilometres east, is the nearest swimming beach and is developed. Jungle Beach beyond it is smaller and quieter. Hikkaduwa, twenty kilometres north, has the reef and the dive schools — coral in poor condition compared to thirty years ago, but a genuine reef nonetheless, with turtles reliably present.\n\nMirissa, forty minutes east, is where the whale boats go out between November and April. Blue whales pass close to shore here and the trips leave at 6.30am.\n\nThe stilt fishermen on this stretch now pose for money rather than fish. Worth photographing, not worth believing.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "Is there an entrance fee for Galle Fort?", a: "No. It is a living town of about four hundred families, not a heritage site with a gate. You walk in. The small museums inside charge modestly." },
          { q: "How long do you need at Galle Fort?", a: "Two to three hours: an hour on the ramparts, an hour in the streets and time for a coffee. A night inside the walls is better still — the day-trippers leave around five and the following two hours are when the fort is at its best." },
          { q: "What is the best time of day to visit Galle Fort?", a: "Late afternoon. The ramparts face west, so they catch the breeze and the light, the sunset from the western bastions is the best on the south coast, and that is when local families come out onto the walls." },
          { q: "Who built Galle Fort?", a: "The Portuguese fortified it in 1588; the Dutch took Galle in 1640 and rebuilt it properly from 1649, and what stands today is essentially their work. The British took it in 1796 and largely left it alone, which is why the Dutch layout survives so completely." },
          { q: "Did the 2004 tsunami damage Galle Fort?", a: "The coast around Galle was hit hard and thousands died in the town outside the walls. Inside, the Dutch ramparts held and the fort was largely undamaged — a four-hundred-year-old piece of engineering doing what it was built for." },
          { q: "Can you climb the Galle lighthouse?", a: "No, it is not open to visitors. Built in 1939 at the southern point of the fort, it is the most photographed structure in Sri Lanka after the Nine Arch Bridge, and photographing it is what people do." },
          { q: "Can you do Galle as a day trip from Colombo?", a: "Yes — 125 km and about two hours each way on the E01 expressway, which is the easiest major day trip out of the capital. Most trips pair it with the Madu River mangroves or a turtle hatchery on the way back." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is there an entrance fee for Galle Fort?", acceptedAnswer: { "@type": "Answer", text: "No. It is a living town of about four hundred families, not a heritage site with a gate. You walk in. The small museums inside charge modestly." } },
            { "@type": "Question", name: "How long do you need at Galle Fort?", acceptedAnswer: { "@type": "Answer", text: "Two to three hours: an hour on the ramparts, an hour in the streets and time for a coffee. A night inside the walls is better still — the day-trippers leave around five and the following two hours are when the fort is at its best." } },
            { "@type": "Question", name: "What is the best time of day to visit Galle Fort?", acceptedAnswer: { "@type": "Answer", text: "Late afternoon. The ramparts face west, so they catch the breeze and the light, the sunset from the western bastions is the best on the south coast, and that is when local families come out onto the walls." } },
            { "@type": "Question", name: "Who built Galle Fort?", acceptedAnswer: { "@type": "Answer", text: "The Portuguese fortified it in 1588; the Dutch took Galle in 1640 and rebuilt it properly from 1649, and what stands today is essentially their work. The British took it in 1796 and largely left it alone, which is why the Dutch layout survives so completely." } },
            { "@type": "Question", name: "Did the 2004 tsunami damage Galle Fort?", acceptedAnswer: { "@type": "Answer", text: "The coast around Galle was hit hard and thousands died in the town outside the walls. Inside, the Dutch ramparts held and the fort was largely undamaged — a four-hundred-year-old piece of engineering doing what it was built for." } },
            { "@type": "Question", name: "Can you climb the Galle lighthouse?", acceptedAnswer: { "@type": "Answer", text: "No, it is not open to visitors. Built in 1939 at the southern point of the fort, it is the most photographed structure in Sri Lanka after the Nine Arch Bridge, and photographing it is what people do." } },
            { "@type": "Question", name: "Can you do Galle as a day trip from Colombo?", acceptedAnswer: { "@type": "Answer", text: "Yes — 125 km and about two hours each way on the E01 expressway, which is the easiest major day trip out of the capital. Most trips pair it with the Madu River mangroves or a turtle hatchery on the way back." } },
          ],
        },
      };

    case "mirissa-whale-watching-guide":
      return {
        title: "Whale Watching at Mirissa: Season, Boats and Honest Odds",
        seoTitle: "Mirissa Whale Watching Guide",
        description: "Blue whales pass within a few kilometres of Mirissa from November to April. When to go, what a responsible operator looks like, and what the trip is really like.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "Season", value: "Roughly November to April" },
          { icon: "clock", label: "Departure", value: "6.00-6.30am; back by about 11am" },
          { icon: "info", label: "Main species", value: "Blue whales and sperm whales; spinner dolphins in numbers" },
          { icon: "info", label: "Sighting rate in season", value: "High but never guaranteed" },
          { icon: "waves", label: "Sea state", value: "Real swell — take a tablet an hour before boarding" },
          { icon: "info", label: "Legal minimum distance", value: "Boats should stay 100 m from a whale" },
        ],
        sections: [
          {
            title: "Whale Watching at Mirissa: Season, Boats and Honest Odds",
            icon: "waves",
            content: "The continental shelf comes unusually close to shore off Sri Lanka's southern tip, which puts deep water within a few kilometres of Mirissa. Blue whales — the largest animal that has ever lived — pass along that edge on migration, and a resident population appears to stay in the area. Sperm whales, Bryde's whales and enormous pods of spinner dolphins use the same water.\n\nThat proximity is why Mirissa works. In most of the world, seeing a blue whale means a long offshore trip and low odds. Here the boats are often in position within an hour of leaving harbour.\n\nThe season is roughly November to April, when the southwest monsoon is not churning this coast. Outside those months the sea is rough, most operators stop running, and the ones that do not are taking small boats into water they should not be in.\n\nSighting rates in season are high — most operators report success on the large majority of trips — but nothing is guaranteed, and a boat that promises a whale is promising something it cannot control. Some operators offer a free repeat trip instead, which is the honest version of the same reassurance.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "What the trip is actually like",
            icon: "clock",
            content: "Boats leave Mirissa harbour between 6 and 6.30 in the morning and are typically back between 10 and 11. You are collected from your hotel earlier than that.\n\nThe first hour is the run out to the shelf edge. Then the boat slows and everybody scans, which can go on for a while — the reality of a whale trip is a lot of open water, and the sighting, when it comes, is a blow on the horizon before it is anything else. A blue whale surfaces to breathe several times over a few minutes and then dives, and the fluke coming up as it goes down is the shot everybody wants.\n\nDolphins are more reliable and more immediate: spinner pods here number in the hundreds and will ride the bow.\n\nBreakfast and water are usually included. Life jackets should be.\n\nThe swell off this coast is real and the boats are not large. Seasickness is common enough that operators carry bags as standard. Take a tablet an hour before boarding rather than when you start feeling it, sit outside and low, and look at the horizon.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "Choosing an operator, and the crowding problem",
            icon: "info",
            content: "This is the part that deserves care. Mirissa's whale watching grew fast and the regulation has not entirely kept up. On a busy morning in season, twenty or more boats can converge on the same animal.\n\nSri Lankan guidelines require boats to stay at least 100 metres from a whale, to approach from the side rather than head-on, and not to cut across an animal's path. Plenty of operators observe this. Some do not, and there have been documented incidents of boats crowding and even striking whales off this coast.\n\nWhat to look for: a smaller boat with a limited passenger count rather than a packed one; a stated commitment to the distance rules; a naturalist on board rather than only a skipper; and an operator who talks about a free second trip rather than a guarantee.\n\nWhat to do on board: if your boat is racing others or pushing close, say so. Paying passengers asking a skipper to back off works more often than people expect.\n\nAvoid the boats that leave latest and are cheapest. They are usually the most crowded and the most aggressive, because they are behind.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "Season by season, and the alternative",
            icon: "calendar-days",
            content: "November and December are the start, with numbers building. January to March is the reliable core of the season, with the calmest sea and the best odds. April is the tail end and still good.\n\nFrom May to September the southwest monsoon makes this coast rough and most operators stop. This is the correct time to be on the east coast instead: Trincomalee runs blue whale trips from roughly May to September, in the season that is the mirror of Mirissa's, and it is far less crowded.\n\nIf you are on the south coast outside the season and want to be on the water, the reef at Hikkaduwa and the dive sites along this coast are the alternative, though the sea is rough there too in the monsoon.\n\nOne planning note: Mirissa is a forty-minute drive east of Galle and about two and a half hours from Colombo airport on the expressway. Since the boats leave at six, staying in Mirissa or Weligama the night before is effectively required — day-tripping from Galle means leaving at five.",
            tourCard: {
              slug: "hikkaduwa-reef-scuba-diving-session",
              title: "Hikkaduwa Reef Scuba Diving Session",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 127.78",
              duration: "3 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "When is whale watching season in Mirissa?", a: "Roughly November to April, when the southwest monsoon is not churning the south coast. January to March is the reliable core, with the calmest sea. From May to September most operators stop running and Trincomalee on the east coast takes over." },
          { q: "What time do the whale boats leave Mirissa?", a: "Between 6 and 6.30am, back between 10 and 11. Hotel pickup is earlier. Since the boats go at dawn, staying in Mirissa or Weligama the night before is effectively required." },
          { q: "Are whale sightings guaranteed at Mirissa?", a: "No, and an operator promising one is promising something they cannot control. Sighting rates in season are high, and the honest operators offer a free repeat trip rather than a guarantee." },
          { q: "How do I choose an ethical whale watching operator?", a: "Look for a smaller boat with limited passengers, a stated commitment to the 100-metre distance rule, a naturalist on board rather than only a skipper, and a free second trip rather than a guarantee. Avoid the cheapest, latest-departing boats — they are the most crowded and the most aggressive." },
          { q: "Is the sea rough at Mirissa?", a: "The swell is real and the boats are not large. Seasickness is common enough that operators carry bags as standard. Take a tablet an hour before boarding rather than when symptoms start, sit outside and low, and watch the horizon." },
          { q: "What will I see besides whales?", a: "Spinner dolphins in pods that can number in the hundreds, and they will ride the bow — more reliable and more immediate than the whales. Sperm whales and Bryde's whales also use this water alongside the blue whales." },
          { q: "Why are blue whales so close to shore at Mirissa?", a: "The continental shelf comes unusually close to Sri Lanka's southern tip, putting deep water within a few kilometres of the coast. Elsewhere in the world seeing a blue whale means a long offshore trip; here boats are often in position within an hour of leaving harbour." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "When is whale watching season in Mirissa?", acceptedAnswer: { "@type": "Answer", text: "Roughly November to April, when the southwest monsoon is not churning the south coast. January to March is the reliable core, with the calmest sea. From May to September most operators stop running and Trincomalee on the east coast takes over." } },
            { "@type": "Question", name: "What time do the whale boats leave Mirissa?", acceptedAnswer: { "@type": "Answer", text: "Between 6 and 6.30am, back between 10 and 11. Hotel pickup is earlier. Since the boats go at dawn, staying in Mirissa or Weligama the night before is effectively required." } },
            { "@type": "Question", name: "Are whale sightings guaranteed at Mirissa?", acceptedAnswer: { "@type": "Answer", text: "No, and an operator promising one is promising something they cannot control. Sighting rates in season are high, and the honest operators offer a free repeat trip rather than a guarantee." } },
            { "@type": "Question", name: "How do I choose an ethical whale watching operator?", acceptedAnswer: { "@type": "Answer", text: "Look for a smaller boat with limited passengers, a stated commitment to the 100-metre distance rule, a naturalist on board rather than only a skipper, and a free second trip rather than a guarantee. Avoid the cheapest, latest-departing boats — they are the most crowded and the most aggressive." } },
            { "@type": "Question", name: "Is the sea rough at Mirissa?", acceptedAnswer: { "@type": "Answer", text: "The swell is real and the boats are not large. Seasickness is common enough that operators carry bags as standard. Take a tablet an hour before boarding rather than when symptoms start, sit outside and low, and watch the horizon." } },
            { "@type": "Question", name: "What will I see besides whales?", acceptedAnswer: { "@type": "Answer", text: "Spinner dolphins in pods that can number in the hundreds, and they will ride the bow — more reliable and more immediate than the whales. Sperm whales and Bryde's whales also use this water alongside the blue whales." } },
            { "@type": "Question", name: "Why are blue whales so close to shore at Mirissa?", acceptedAnswer: { "@type": "Answer", text: "The continental shelf comes unusually close to Sri Lanka's southern tip, putting deep water within a few kilometres of the coast. Elsewhere in the world seeing a blue whale means a long offshore trip; here boats are often in position within an hour of leaving harbour." } },
          ],
        },
      };

    case "south-coast-beaches-guide":
      return {
        title: "South Coast Beaches: Which One, and the Monsoon Nobody Explains",
        seoTitle: "Sri Lanka South Coast Beaches",
        description: "Unawatuna, Mirissa, Hikkaduwa, Weligama, Tangalle compared — and why the south coast is unswimmable for half the year while the east is perfect.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "South coast swimmable", value: "Roughly November to April" },
          { icon: "calendar-days", label: "South coast rough", value: "May to September — strong rip currents" },
          { icon: "calendar-days", label: "East coast is the reverse", value: "Dry and calm May to September" },
          { icon: "waves", label: "Best for beginners' surf", value: "Weligama" },
          { icon: "waves", label: "Best for reef and diving", value: "Hikkaduwa" },
          { icon: "info", label: "Lifeguards", value: "Rare outside the main resort beaches" },
        ],
        sections: [
          {
            title: "South Coast Beaches: Which One, and the Monsoon Nobody Explains",
            icon: "waves",
            content: "The single most useful thing to know about Sri Lankan beaches is that the country has two monsoons hitting opposite coasts at opposite times, and no month is bad for the whole island.\n\nThe southwest, or Yala, monsoon runs roughly May to September and hits the west and south coasts — Colombo, Bentota, Hikkaduwa, Galle, Unawatuna, Weligama, Mirissa, Tangalle. In those months the sea here builds, rip currents strengthen, and swimming becomes genuinely dangerous even on days that look calm.\n\nThe northeast, or Maha, monsoon runs roughly October to January and hits the east and north — Trincomalee, Pasikuda, Arugam Bay, Jaffna.\n\nSo the south coast is a November-to-April destination and the east coast is a May-to-September one. A guide that gives you a single Sri Lankan beach season is describing half the country and quietly ignoring the other half.\n\nIf your dates fall in the southwest monsoon and beach time matters, the honest advice is to cross to the east rather than swim in a red-flag sea. It is a five-hour drive from Kandy and it is worth it.",
            tourCard: {
              slug: "hikkaduwa-reef-scuba-diving-session",
              title: "Hikkaduwa Reef Scuba Diving Session",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 127.78",
              duration: "3 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
            },
          },
          {
            title: "The beaches, north to south",
            icon: "map",
            content: "**Bentota**, an hour and a half south of Colombo, is the resort strip — larger hotels, the Bentota river for mangrove safaris, water sports, and a long beach. Convenient rather than characterful, and the natural first or last stop from the airport.\n\n**Hikkaduwa**, 20 km north of Galle, has the reef. The coral is in far poorer condition than it was thirty years ago, hit by bleaching and the 2004 tsunami, but it is a genuine reef with reliable turtle sightings and a cluster of dive schools. A slightly rougher, older backpacker feel.\n\n**Unawatuna**, five minutes from Galle, is the most convenient swimming beach on this coast and the most developed. A sheltered curve of bay, calm in season, and busy. Jungle Beach just beyond it is smaller and quieter.\n\n**Weligama**, a wide shallow bay, is where everybody learns to surf. Gentle waves, sand bottom, and a dozen surf schools on the beach.\n\n**Mirissa**, next door, is the whale-watching harbour and has a prettier beach than Weligama.\n\n**Tangalle**, an hour further east, is where the coast opens out — long empty beaches, fewer people, and the strongest currents on this list.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "Currents, and why this matters more here",
            icon: "info",
            content: "Sri Lanka's south coast drowns tourists every year, and almost every case follows the same pattern: a beach that looks calm, no lifeguard, and a rip current that takes a strong swimmer out faster than they can swim back.\n\nMost beaches here have no lifeguard at all. The main resort stretches at Unawatuna and Bentota sometimes do; Tangalle, Jungle Beach and the smaller bays generally do not.\n\nRed flags mean what they say. So does the absence of Sri Lankans in the water — locals on this coast know which days and which spots are dangerous, and an empty sea on a hot afternoon is information.\n\nIf you are caught in a rip, do not swim against it. Swim parallel to the beach until you are out of the pull, then come in.\n\nBetween May and September, treat the south coast as a place to look at the sea rather than get into it. Hotel pools exist for this reason and there is no shame in using them.\n\nThe reef at Hikkaduwa and the sheltered end of Unawatuna are the two spots that stay swimmable longest into the shoulder season.",
            tourCard: {
              slug: "hikkaduwa-reef-scuba-diving-session",
              title: "Hikkaduwa Reef Scuba Diving Session",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 127.78",
              duration: "3 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
            },
          },
          {
            title: "What to do when you are not swimming",
            icon: "leaf",
            content: "The country behind this coast is more interesting than the beach in front of it, and almost nobody goes there.\n\nCycling through the paddy and cinnamon smallholdings behind Galle is the best half-day on the south coast — flat lanes with no traffic, villages where nothing is arranged for visitors, and a working landscape rather than a preserved one.\n\nGalle Fort itself is two to three hours and free, best in the late afternoon on the ramparts.\n\nThe Madu River mangroves near Balapitiya are a two-hour boat trip through mangrove tunnels and islands, including a cinnamon island where bark is still peeled by hand.\n\nTurtle hatcheries dot this coast and vary enormously in quality. The better ones release hatchlings the same night; the worse ones keep them in tanks for photographs, which reduces their survival odds. Ask what happens to the hatchlings before you pay.\n\nAnd the stilt fishermen, who appear on every Sri Lanka poster, now pose for money rather than fish. Worth a photograph, not worth believing.",
            tourCard: {
              slug: "galle-countryside-cycling-tour-through-villages-paddy-fields",
              title: "Galle Countryside Cycling Tour through Villages, Paddy Fields and Plantations",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84.5",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "When can you swim on Sri Lanka's south coast?", a: "Roughly November to April. From May to September the southwest monsoon builds the sea and strengthens rip currents, and swimming becomes genuinely dangerous even on days that look calm." },
          { q: "Which is the best beach near Galle?", a: "Unawatuna for convenience and calm water in season, five minutes away. Weligama if you want to learn to surf. Mirissa for the whale harbour and a prettier beach. Hikkaduwa, 20 km north, for the reef and diving." },
          { q: "Where should I go if I visit during the southwest monsoon?", a: "The east coast — Trincomalee, Pasikuda or Arugam Bay — which is dry and calm from roughly May to September, exactly when the south is not. It is about five hours from Kandy and it is the right call rather than a compromise." },
          { q: "Are there lifeguards on Sri Lankan beaches?", a: "Rarely. The main resort stretches at Unawatuna and Bentota sometimes have them; most beaches, including Tangalle and the smaller bays, do not. Red flags mean what they say, and an empty sea on a hot afternoon is information — locals know which days are dangerous." },
          { q: "What do I do if I am caught in a rip current?", a: "Do not swim against it. Swim parallel to the beach until you are out of the pull, then come in. Rips take strong swimmers out faster than they can swim back, and this is how most drownings on this coast happen." },
          { q: "Is the coral at Hikkaduwa still worth seeing?", a: "It is in far poorer condition than thirty years ago, damaged by bleaching and the 2004 tsunami, but it is a genuine reef with reliable turtle sightings and a cluster of established dive schools. Go with expectations set accordingly." },
          { q: "Are the turtle hatcheries on this coast ethical?", a: "They vary enormously. The better ones release hatchlings the same night they emerge; the worse ones keep them in tanks for visitor photographs, which sharply reduces survival odds. Ask what happens to the hatchlings before you pay." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "When can you swim on Sri Lanka's south coast?", acceptedAnswer: { "@type": "Answer", text: "Roughly November to April. From May to September the southwest monsoon builds the sea and strengthens rip currents, and swimming becomes genuinely dangerous even on days that look calm." } },
            { "@type": "Question", name: "Which is the best beach near Galle?", acceptedAnswer: { "@type": "Answer", text: "Unawatuna for convenience and calm water in season, five minutes away. Weligama if you want to learn to surf. Mirissa for the whale harbour and a prettier beach. Hikkaduwa, 20 km north, for the reef and diving." } },
            { "@type": "Question", name: "Where should I go if I visit during the southwest monsoon?", acceptedAnswer: { "@type": "Answer", text: "The east coast — Trincomalee, Pasikuda or Arugam Bay — which is dry and calm from roughly May to September, exactly when the south is not. It is about five hours from Kandy and it is the right call rather than a compromise." } },
            { "@type": "Question", name: "Are there lifeguards on Sri Lankan beaches?", acceptedAnswer: { "@type": "Answer", text: "Rarely. The main resort stretches at Unawatuna and Bentota sometimes have them; most beaches, including Tangalle and the smaller bays, do not. Red flags mean what they say, and an empty sea on a hot afternoon is information — locals know which days are dangerous." } },
            { "@type": "Question", name: "What do I do if I am caught in a rip current?", acceptedAnswer: { "@type": "Answer", text: "Do not swim against it. Swim parallel to the beach until you are out of the pull, then come in. Rips take strong swimmers out faster than they can swim back, and this is how most drownings on this coast happen." } },
            { "@type": "Question", name: "Is the coral at Hikkaduwa still worth seeing?", acceptedAnswer: { "@type": "Answer", text: "It is in far poorer condition than thirty years ago, damaged by bleaching and the 2004 tsunami, but it is a genuine reef with reliable turtle sightings and a cluster of established dive schools. Go with expectations set accordingly." } },
            { "@type": "Question", name: "Are the turtle hatcheries on this coast ethical?", acceptedAnswer: { "@type": "Answer", text: "They vary enormously. The better ones release hatchlings the same night they emerge; the worse ones keep them in tanks for visitor photographs, which sharply reduces survival odds. Ask what happens to the hatchlings before you pay." } },
          ],
        },
      };

    case "galle-2-day-itinerary":
      return {
        title: "Two Days on the South Coast: Galle Fort, the Country Behind It and a Whale Boat",
        seoTitle: "Galle 2-Day Itinerary",
        description: "A south-coast plan that uses the hours properly: cycling before the heat, the ramparts at sunset, and a dawn whale boat out of Mirissa.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Day 1", value: "Countryside cycling, then Galle Fort at sunset" },
          { icon: "clock", label: "Day 2", value: "Dawn whale boat from Mirissa, then nothing" },
          { icon: "calendar-days", label: "Season", value: "November to April — whales and swimmable sea" },
          { icon: "ticket", label: "Galle Fort", value: "Free" },
          { icon: "map", label: "Galle to Mirissa", value: "About 40 minutes" },
          { icon: "map", label: "Colombo to Galle", value: "2 hours on the E01 expressway" },
        ],
        sections: [
          {
            title: "Two Days on the South Coast: Galle Fort, the Country Behind It and a Whale Boat",
            icon: "clock",
            content: "The south coast is where most Sri Lanka itineraries finish, and it is usually given one rushed morning in Galle Fort before the drive to the airport. Two nights changes that entirely, and it costs one hotel night.\n\nThe plan below is built around three fixed hours. Cycling in the early morning, because the country behind Galle is flat and hot and unpleasant after ten. Galle Fort in the late afternoon, because the ramparts face west and that is both the light and the breeze. And the whale boat at six the next morning, because that is when it leaves.\n\nEverything between those is deliberately empty. After the standard Sri Lankan loop — the cultural triangle, Kandy, the hill train, a safari — the south coast should be where the trip slows down.\n\nThis works November to April. Outside those months the sea is rough, the whale boats mostly stop, and the plan becomes Galle Fort and the countryside without the water.",
            tourCard: {
              slug: "galle-countryside-cycling-tour-through-villages-paddy-fields",
              title: "Galle Countryside Cycling Tour through Villages, Paddy Fields and Plantations",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84.5",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
            },
          },
          {
            title: "Day 1, morning: cycling behind Galle",
            icon: "bike",
            content: "The best half-day on this coast and the one almost nobody does. Behind Galle the land is paddy, cinnamon smallholdings and rubber, threaded with lanes carrying almost no traffic, and it is dead flat.\n\nA guided ride goes out through villages where the ride is unremarkable enough that nobody performs for it — people at their gates, children going to school, a man peeling cinnamon under an awning. Stops at a cinnamon plot, a paddy field being worked, a lagoon with birds on it, and a stretch where the lanes come out onto the coast.\n\nAbout 15 to 20 kilometres over a morning, flat to gently undulating, so no particular fitness is needed. Bikes and helmets are provided.\n\nStart at 7.30. It is hot and humid on this coast even at eight, and the ride is designed to be finished before the heat peaks.\n\nBack by late morning, which leaves the middle of the day for a swim, a long lunch, or the hotel pool.",
            tourCard: {
              slug: "galle-countryside-cycling-tour-through-villages-paddy-fields",
              title: "Galle Countryside Cycling Tour through Villages, Paddy Fields and Plantations",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84.5",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788375761/asiabylocals/tours/from-galle-all-inclusive-countryside-cycling-tour/img0.jpg",
            },
          },
          {
            title: "Day 1, late afternoon: the fort",
            icon: "sunset",
            content: "Arrive around four. Galle Fort is a walled Dutch town of 1663 that people still live in — four hundred families, a working court, schools and mosques inside the ramparts. There is no ticket.\n\nWalk the streets first while the light is still high: the Dutch Reformed Church from 1755, whose floor is paved with seventeenth-century gravestones you walk across; the Meeran Mosque by the lighthouse; the Maritime Archaeology Museum in a Dutch warehouse. Pedlar Street and Church Street for the shops and cafés, and the residential lanes behind them for the town as it actually is.\n\nThen the ramparts, clockwise from the main gate, timed to reach the western bastions for sunset. Two kilometres of wall, an hour at a slow pace, and the best sunset on the south coast. Local families come out onto the walls, there is cricket on the grass by the lighthouse, and boys jump off Flag Rock into the sea.\n\nStay for dinner inside the walls. The day-trippers leave around five and the two hours after that are when the fort is at its best.",
            tourCard: {
              slug: "hikkaduwa-reef-scuba-diving-session",
              title: "Hikkaduwa Reef Scuba Diving Session",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 127.78",
              duration: "3 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
            },
          },
          {
            title: "Day 2, dawn: the whale boat",
            icon: "waves",
            content: "Mirissa harbour is forty minutes east of Galle and the boats leave between six and six-thirty, so this means staying in Mirissa or Weligama the night before, or a five o'clock start.\n\nThe continental shelf comes close to shore here, which puts blue whales — the largest animal that has ever lived — within an hour of the harbour. Sperm whales and spinner dolphin pods in the hundreds use the same water.\n\nThe trip is four to five hours: an hour out to the shelf edge, then scanning. A blue whale is a blow on the horizon before it is anything else, then several surfacings over a few minutes, then the fluke as it dives.\n\nTake a seasickness tablet an hour before boarding rather than when you start feeling it. The swell here is real.\n\nChoose a smaller boat with a naturalist aboard and a stated commitment to the 100-metre distance rule. On a busy morning twenty boats can converge on one animal, and the cheapest, latest-departing ones are usually the most aggressive.\n\nBack by eleven, which leaves the whole afternoon.",
            tourCard: {
              slug: "mirissa-whale-dolphin-watching-boat-trip-breakfast",
              title: "Mirissa Whale and Dolphin Watching Boat Trip with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 28.85",
              duration: "4 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369139/asiabylocals/tours/mirissa-whale-dolphin-watching-cruise-with-geeth-s-crew/img0.jpg",
            },
          },
          {
            title: "Day 2, afternoon: stop",
            icon: "sun",
            content: "Do nothing. This is the recommendation.\n\nIf you cannot, the reef at Hikkaduwa is twenty minutes north and has dive schools, turtles and coral that is a shadow of its former self but still a reef. Unawatuna, five minutes from Galle, is the most sheltered swimming beach on this stretch.\n\nThe Madu River mangroves near Balapitiya, an hour north, are a two-hour boat trip through mangrove tunnels and islands including a cinnamon island where bark is peeled by hand — a good option if you are heading back towards Colombo anyway.\n\nBe careful with turtle hatcheries. The better ones release hatchlings the same night; the worse ones keep them in tanks for photographs, which sharply reduces their odds. Ask before you pay.\n\nIf you are flying out, Galle to the airport is two and a half hours on the expressway. Allow four hours door to gate — the expressway is fast and the Colombo end is not.",
            tourCard: {
              slug: "hikkaduwa-reef-scuba-diving-session",
              title: "Hikkaduwa Reef Scuba Diving Session",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 127.78",
              duration: "3 hours",
              image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368965/asiabylocals/tours/scuba-diving-in-hikkaduwa/img0.jpg",
            },
          },
        ],
        faqs: [
          { q: "How many days do you need in Galle?", a: "Two nights on the south coast: one full day for the countryside and the fort, and a second morning for the whale boat out of Mirissa. The fort alone is two to three hours, but a night inside the walls is what makes the stop worthwhile." },
          { q: "What is the best time of day for Galle Fort?", a: "Late afternoon into sunset. The ramparts face west, so that is both the light and the sea breeze, and the day-trippers leave around five — the two hours after that are when the fort is at its best." },
          { q: "Do I need to stay in Mirissa for the whale trip?", a: "Effectively yes, or in Weligama. The boats leave between six and six-thirty in the morning, so day-tripping from Galle forty minutes away means a five o'clock start." },
          { q: "What is the best time of year for this itinerary?", a: "November to April. That is when the south coast sea is calm enough to swim and when the Mirissa whale boats run. From May to September the southwest monsoon makes the coast rough and most operators stop." },
          { q: "What is the best thing to do near Galle that most people miss?", a: "Cycling the lanes behind the town — paddy, cinnamon smallholdings and rubber, flat and almost traffic-free. It is the best half day on this coast and shows you a working landscape rather than a preserved one. Go at 7.30 before the heat." },
          { q: "How long is Galle to Colombo airport?", a: "About two and a half hours on the E01 expressway. Allow four hours door to gate — the expressway is fast but the Colombo end is not." },
          { q: "Is Unawatuna or Mirissa the better beach?", a: "Unawatuna is closer to Galle, more sheltered and more developed — the easier swim. Mirissa has the prettier beach and the whale harbour. Weligama between them is the place to learn to surf." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How many days do you need in Galle?", acceptedAnswer: { "@type": "Answer", text: "Two nights on the south coast: one full day for the countryside and the fort, and a second morning for the whale boat out of Mirissa. The fort alone is two to three hours, but a night inside the walls is what makes the stop worthwhile." } },
            { "@type": "Question", name: "What is the best time of day for Galle Fort?", acceptedAnswer: { "@type": "Answer", text: "Late afternoon into sunset. The ramparts face west, so that is both the light and the sea breeze, and the day-trippers leave around five — the two hours after that are when the fort is at its best." } },
            { "@type": "Question", name: "Do I need to stay in Mirissa for the whale trip?", acceptedAnswer: { "@type": "Answer", text: "Effectively yes, or in Weligama. The boats leave between six and six-thirty in the morning, so day-tripping from Galle forty minutes away means a five o'clock start." } },
            { "@type": "Question", name: "What is the best time of year for this itinerary?", acceptedAnswer: { "@type": "Answer", text: "November to April. That is when the south coast sea is calm enough to swim and when the Mirissa whale boats run. From May to September the southwest monsoon makes the coast rough and most operators stop." } },
            { "@type": "Question", name: "What is the best thing to do near Galle that most people miss?", acceptedAnswer: { "@type": "Answer", text: "Cycling the lanes behind the town — paddy, cinnamon smallholdings and rubber, flat and almost traffic-free. It is the best half day on this coast and shows you a working landscape rather than a preserved one. Go at 7.30 before the heat." } },
            { "@type": "Question", name: "How long is Galle to Colombo airport?", acceptedAnswer: { "@type": "Answer", text: "About two and a half hours on the E01 expressway. Allow four hours door to gate — the expressway is fast but the Colombo end is not." } },
            { "@type": "Question", name: "Is Unawatuna or Mirissa the better beach?", acceptedAnswer: { "@type": "Answer", text: "Unawatuna is closer to Galle, more sheltered and more developed — the easier swim. Mirissa has the prettier beach and the whale harbour. Weligama between them is the place to learn to surf." } },
          ],
        },
      };

    default:
      return null;
  }
}
