// Maldives (Male) authority pages (2026-10). Same CityInfoData shape as
// qatarInfoContent.ts / turkeyInfoContent.ts. Maldives launched with 67 live
// tours (single city: Male) and zero authority pages — this is the first
// batch, 16 pages. Reached via getMaldivesInfoContent() -> getCityInfoContent().
// Every tourCard slug is taken from the live tour list:
// GET /api/public/tours?country=Maldives&city=Male&status=approved
import type { CityInfoData } from './cityInfoContent';

export function getMaldivesInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-maldives":
      return {
        title: "Best Time to Visit the Maldives (2026): Dry Season, Wet Season and Marine Life Calendar",
        description: "The Maldives splits cleanly into a calmer, drier half of the year and a wetter half that brings the best whale shark and manta ray encounters — here's how to pick between them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda7256a80feec399244d280cc30a4fb0b34b1375524b2ac07ebcc96b97b9332.jpg",
        fastFacts: [
          { icon: "Sun", label: "Dry season", value: "November through April — calmest seas, sunniest skies, best diving visibility (December-May for the clearest water, 15-30m)" },
          { icon: "CloudRain", label: "Wet season", value: "May through October, driven by the southwest monsoon — more rain and choppier seas, but the stronger marine-life season" },
          { icon: "Fish", label: "Manta ray peak", value: "May through November, with the largest aggregations at Hanifaru Bay in Baa Atoll from June to November" },
          { icon: "Waves", label: "Whale sharks", value: "Present year-round in South Ari Atoll, arguably the most reliable spot on Earth for a sighting" },
        ],
        sections: [
          {
            title: "Dry Season (November-April): The Classic Postcard Window",
            content: "The Maldives' dry season, roughly November through April, is when most first-time visitors book — calmer seas, sunnier skies, and the lowest odds of a washed-out day lounging under a thatched roof instead of in the water. December through May specifically delivers the clearest underwater visibility of the year, often 15 to 30 meters, which matters more here than almost anywhere else, since the entire point of a Maldives trip for most travelers is what's below the surface rather than what's on land.\n\nThe tradeoff is predictable: this is also peak season, so resort rates climb and the most popular house reefs and dive sites see more boats. December and early January in particular carry a premium for the holiday period, so travelers chasing value sometimes do better in the shoulder weeks just before or after.",
          },
          {
            title: "Wet Season (May-October): Worse Weather, Better Marine Life",
            content: "May through October is driven by the southwest monsoon, which brings more rain, shorter but heavier downpours, and choppier seas than the dry half of the year — genuinely different conditions, not just a marketing distinction. What makes this season worth considering anyway is the marine life: the increased plankton the monsoon stirs up fuels feeding aggregations of manta rays and whale sharks that simply don't happen at the same scale in the calmer, clearer months.\n\nRain in the Maldives rarely means a lost day — showers tend to be short and heavy rather than day-long washouts, and between them the skies clear quickly. Travelers prioritizing a guaranteed calm, sunny week should still lean toward the dry season; travelers chasing a specific wildlife encounter should plan around that encounter's season instead.",
            tourCard: { slug: "maldives-manta-ray-snorkeling-at-rasfari-corner", title: "Maldives: Manta Ray Snorkeling at Rasfari Corner", description: "A snorkeling trip timed to the manta season's feeding aggregations.", price: "From $221", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda7256a80feec399244d280cc30a4fb0b34b1375524b2ac07ebcc96b97b9332.jpg" },
          },
          {
            title: "Picking a Window Around a Specific Encounter",
            content: "If a **whale shark** sighting is the priority, timing matters less than destination — South Ari Atoll holds whale sharks year-round, making it one of the only places worldwide where the season isn't really the deciding factor. If **manta rays** at Hanifaru Bay are the goal, June through November is the real window, with the bay's feeding frenzies at their most reliable in the second half of that stretch. For divers chasing maximum visibility over wildlife density, December through May remains the safer bet.\n\nWhichever window you pick, book liveaboards and multi-day dive packages well ahead — the Maldives' most sought-after months fill resort and boat capacity early, especially around the Hanifaru Bay season and the Northern Hemisphere winter holidays.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit the Maldives?", a: "December through May gives the calmest seas and clearest visibility (15-30m), making it the safest bet for a classic beach-and-snorkel trip. May through November instead favors wildlife — mantas at Hanifaru Bay peak June-November." },
          { q: "Does it rain a lot in the Maldives?", a: "The wet season (May-October) brings more frequent, heavier showers than the dry season, but rain tends to be short and intense rather than all-day — skies usually clear again quickly." },
          { q: "When can I see whale sharks in the Maldives?", a: "South Ari Atoll has whale sharks present year-round, making timing far less critical there than for other marine-life encounters." },
          { q: "When is manta ray season at Hanifaru Bay?", a: "May through November, with the largest feeding aggregations typically from June through November as the southwest monsoon's plankton blooms peak." },
        ],
      };

    case "things-to-do-in-male":
      return {
        title: "20+ Best Things to Do in Malé (2026): The Complete List",
        description: "Malé is a dense, walkable capital that most visitors blow through on the way to a resort transfer — here's what's actually worth stopping for before you board the boat.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/659bd1a3ae21ec75a02f3c82938dde311685054668a936ca2ccbcdf230fa8e3d.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Size", value: "One of the smallest and most densely populated capital cities in the world, easily walkable in a few hours" },
          { icon: "Building2", label: "Top landmark", value: "The Grand Friday Mosque (Masjid-al-Sultan Muhammad Thakurufaanu Al-Auzam), with its gold dome visible across the city" },
          { icon: "ShoppingBag", label: "Local market", value: "The local market and fish market along the harborfront, the best window into everyday Maldivian life" },
          { icon: "Waves", label: "Nearby escape", value: "Villingili and Hulhumalé, both a short ferry or bridge ride away, for beach time without leaving the capital area" },
        ],
        sections: [
          {
            title: "Walking Malé's Dense, Colorful Streets",
            content: "Malé packs an entire capital's worth of government buildings, markets, mosques and housing into a footprint you can walk end to end in under an hour, which makes it one of the more unusual capital cities to explore on foot anywhere in the world. The streets near the harbor are the most rewarding to wander — narrow lanes lined with pastel-colored buildings, small shops selling everyday goods rather than souvenirs, and the kind of unscripted local life that most Maldives itineraries, built entirely around resort islands, never actually show visitors.\n\nA guided walking tour adds useful context here specifically because Malé's history and layout aren't obvious from the street the way a palace or temple complex would be — a local guide filling in why the city is built the way it is changes the experience meaningfully.",
            tourCard: { slug: "male-guided-walking-tour-with-a-local-guide", title: "Malé: Guided Walking Tour with a Local Guide", description: "A walking tour through Malé's streets and markets with context most visitors never get.", price: "From $39", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/af7f58bdedab0ebed875cb07748c0749d8c66aa97018b86b12d1b426fe07bb34.jpg" },
          },
          {
            title: "The Grand Friday Mosque and the Local & Fish Markets",
            content: "The **Grand Friday Mosque**, with its distinctive gold dome, is Malé's most recognizable landmark and the country's largest mosque, visible from much of the harborfront. Nearby, the **local market** and **fish market** run along the waterfront and are genuinely worth a slow walk-through — stalls of tropical produce, dried fish and the daily tuna catch being unloaded and sorted, a working market rather than a staged tourist stop.\n\nThese two stops pair naturally with a city tour, since they sit close together near the harbor and give a far more textured sense of daily Maldivian life than any resort island will.",
            tourCard: { slug: "male-english-russian-chinese-or-italian-guided", title: "Malé: English, Russian, Chinese or Italian Guided City Tour", description: "A multilingual city tour covering the mosque, markets and harbor area.", price: "From $78", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e7c95026ca9332fb030b72a5f416d1d4773637bb86b8b30c40e5a9e4ceb463.jpeg" },
          },
          {
            title: "Villingili and Hulhumalé: Beach Time Without a Resort",
            content: "**Villingili**, a short ferry ride from Malé, is a quieter residential island with its own stretch of beach and a noticeably slower pace than the capital — a good half-day escape that doesn't require booking a full resort stay. **Hulhumalé**, connected to Malé by a bridge and now home to the airport, has grown into a more built-up extension of the capital with its own beach clubs and resort-style day-pass pools, making it the easiest place to get a taste of Maldivian beach life on a layover or short stopover.\n\nBoth islands work well as a half-day add-on to a Malé city tour, especially for travelers whose main trip is a resort stay elsewhere but who want to see the capital side of the country too.",
            tourCard: { slug: "male-villimale-half-day-trip-with-hotel-or", title: "Malé: Villimalé Half-Day Trip with Hotel or Airport Pickup", description: "A half-day trip to Villingili's quieter beaches, pickup included.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f5af09ce987347f8d1f241044edbfab270566e13ee8ce8acb303cdc07014f06.jpg" },
          },
        ],
        faqs: [
          { q: "Is Malé worth visiting, or should I go straight to my resort?", a: "If you have even a few hours before a transfer, yes — Malé's markets, the Grand Friday Mosque and the harbor area give a side of the Maldives that resort islands, each privately operated, simply don't show." },
          { q: "How long do you need in Malé?", a: "A few hours is enough to cover the main sights on foot; a half-day lets you add Villingili or Hulhumalé for beach time without booking a separate resort stay." },
          { q: "Can you walk around Malé on your own?", a: "Yes, it's small and walkable, but a guided tour adds historical and cultural context — particularly around the mosque and markets — that isn't obvious without local explanation." },
          { q: "What's the difference between Hulhumalé and Malé?", a: "Hulhumalé is a newer, more spread-out reclaimed island connected by bridge, home to the airport and several beach clubs. Malé is the dense, historic capital itself, a short bridge or ferry ride away." },
        ],
      };

    case "maldives-travel-guide-2026":
      return {
        title: "Maldives Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time Maldives guide — visa rules, the resort-vs-local-island split, currency, and the seaplane-or-speedboat transfer most travel blogs gloss over.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c569079d69c737d203960ca667443b7c69c31e19db6684e84435a34934295ee.png",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "Every nationality gets a free 30-day visa on arrival at Velana International Airport — no advance application needed" },
          { icon: "Plane", label: "Airport-to-resort", value: "A separate speedboat or seaplane transfer is required after landing, and it's rarely included in the room rate" },
          { icon: "DollarSign", label: "Currency", value: "Maldivian Rufiyaa (MVR), but US dollars and cards are accepted almost everywhere tourists go" },
          { icon: "Building2", label: "Island type", value: "Resort islands (each privately run, own rules) versus local islands (inhabited, more conservative, far cheaper)" },
        ],
        sections: [
          {
            title: "Entry Is Easy — The Transfer Afterward Is the Real Logistics Puzzle",
            content: "Every nationality qualifies for a **free 30-day visa on arrival** at Velana International Airport outside Malé, with no advance application and no visa fee — among the most open entry policies of any country. You will need a passport valid at least a month beyond your departure date, proof of onward travel, proof of accommodation for your stay, and to submit an online **IMUGA Traveller Declaration** within 96 hours before arrival.\n\nThe part most first-time visitors underestimate is what happens *after* landing: unlike almost any other beach destination, the airport does not sit beside your hotel. A **resort stay almost always requires a separate speedboat or seaplane transfer** booked on top of the room rate, and that transfer is a real cost and time factor, not a minor add-on.",
          },
          {
            title: "Seaplane or Speedboat: Know Which One Your Resort Uses Before You Book",
            content: "**Speedboat transfers** serve resorts within roughly 60km of Malé (North and South Malé Atoll), run 24 hours a day, take 15-90 minutes, and typically cost in the $150-400 per person round-trip range. **Seaplane transfers**, run by operators flying Twin Otter aircraft, serve more distant atolls (Ari, Baa, Noonu, Raa, Lhaviyani among others), take 25-50 minutes in the air, and cost more — commonly $450-800 round-trip — with a hard daylight-only flying window, generally around 6am to 4:30pm.\n\nThat daylight restriction matters for trip planning: a late-arriving flight can mean an unplanned overnight in Malé or Hulhumalé before a seaplane resort transfer is even possible the next morning. Always confirm which transfer type your specific resort uses, and whether it's included or billed separately, before you finalize flights.",
            tourCard: { slug: "mle-male-velana-international-airport-lounge", title: "MLE Malé Velana International Airport Lounge Access", description: "A comfortable way to wait out a layover or transfer gap at the airport.", price: "From $69", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42975bb43c4f058b5bf442a53337be07fd4666033eee25bcf2ba3ed951f71152.png" },
          },
          {
            title: "Resort Islands vs. Local Islands — A Genuinely Different Choice",
            content: "A **resort island** is typically one entire island leased to a single operator, with its own rules on alcohol, dress and pricing — a self-contained bubble, often the only way most travelers picture the Maldives. A **local island**, like Maafushi, is an inhabited Maldivian community where ordinary rules of a conservative, majority-Muslim country apply: no alcohol for sale (though Maafushi has an offshore bar boat), and modest dress required outside a single designated bikini beach.\n\nLocal islands are dramatically cheaper and let you experience actual Maldivian daily life rather than an engineered one, but they come with real behavioral expectations that a resort island doesn't impose. See our full resort-vs-local-island guide before booking, since picking the wrong one for your travel style is the single most common Maldives planning mistake.",
          },
        ],
        faqs: [
          { q: "Do I need a visa for the Maldives?", a: "No advance visa — every nationality gets a free 30-day visa on arrival, provided you have a valid passport, proof of onward travel, proof of accommodation, and have submitted the online IMUGA declaration within 96 hours of arrival." },
          { q: "Is the airport transfer included in my resort booking?", a: "Usually not — speedboat or seaplane transfers from Velana International Airport are typically quoted and billed separately from the room rate, and cost anywhere from roughly $150 to $800 per person round-trip depending on distance and transfer type." },
          { q: "What currency does the Maldives use?", a: "The Maldivian Rufiyaa (MVR), but US dollars and cards are accepted almost everywhere tourists go, including most resorts and local-island guesthouses." },
          { q: "What's the difference between a resort island and a local island?", a: "A resort island is privately operated with its own rules (alcohol generally allowed within the resort). A local island is an inhabited Maldivian community where national rules apply — no alcohol sold, and modest dress required outside a designated bikini beach." },
        ],
      };

    case "male-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Malé Itinerary (2026): Making the Most of a Layover or Transfer Day",
        description: "A realistic single-day plan for Malé, built around a transfer window before or after a resort stay — the mosque, the markets, and a half-day escape to Villingili.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7bd1226fa3e274aae41b5f4d996130533c392d502a7e9eea24e92ca1290124e.jpg",
        sections: [
          {
            title: "Morning: The Grand Friday Mosque and Harborfront",
            content: "Start at the **Grand Friday Mosque**, Malé's largest and most visible landmark, then walk the short distance to the **harborfront**, where fishing boats unload the day's catch and the city's working port life is on full display. Morning is the best time for this stretch — the heat builds through the day in a city with very little shade, and the fish market is liveliest early.",
            tourCard: { slug: "male-guided-city-tour", title: "Malé: Guided City Tour", description: "A guided morning loop covering the mosque, harbor and old town.", price: "From $52", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/659bd1a3ae21ec75a02f3c82938dde311685054668a936ca2ccbcdf230fa8e3d.jpg" },
          },
          {
            title: "Midday: The Local Market and Malé's Old Streets",
            content: "Head into the **local market** for tropical produce and everyday goods, then wander the narrow, pastel-painted backstreets of old Malé — the most atmospheric part of the capital and the part most transfer-day visitors never see, since they go straight from airport to speedboat jetty. A local guide adds real value here, filling in context on Malé's history and its unusual, ultra-dense urban layout that isn't obvious just by walking through.",
            tourCard: { slug: "maldives-male-city-private-walking-tour", title: "Maldives: Male City Private Walking Tour", description: "A private walking tour through the old town and local market.", price: "From $94", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7bd1226fa3e274aae41b5f4d996130533c392d502a7e9eea24e92ca1290124e.jpg" },
          },
          {
            title: "Afternoon: A Short Hop to Villingili for Beach Time",
            content: "Take the short ferry to **Villingili**, a quieter residential island with its own beach, for a few hours away from the capital's density before heading back for your evening transfer. This is the single best way to get actual beach time on a Malé transfer day without booking into a resort — a genuine taste of island life rather than an airport layover spent entirely indoors.\n\n**The honest tradeoff:** a full Hulhumalé beach-club day pass and a longer multi-island tour both compete for the same hours. If your flight or speedboat transfer timing is tight, confirm the return schedule before committing to Villingili, since missing the last ferry back complicates an onward transfer.",
            tourCard: { slug: "male-villimale-half-day-trip-with-hotel-or", title: "Malé: Villimalé Half-Day Trip with Hotel or Airport Pickup", description: "A half-day beach escape to Villingili, with pickup timed around your transfer.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f5af09ce987347f8d1f241044edbfab270566e13ee8ce8acb303cdc07014f06.jpg" },
          },
        ],
        faqs: [
          { q: "Is one day enough to see Malé?", a: "Yes for the city itself — the Grand Friday Mosque, local market and old town are all walkable within a few hours. Add Villingili or Hulhumalé if you want beach time in the same day." },
          { q: "Can I do a Malé day trip around my resort transfer?", a: "Yes, this is one of the most common ways travelers use a Malé day — most speedboat transfers run all day, so a morning or afternoon city tour fits around flight and transfer timing with some planning." },
          { q: "Do I need a guide to see Malé in a day?", a: "Not strictly, since the city is small and walkable, but a guide adds context on the mosque, markets and the city's unusual density that's easy to miss on your own." },
        ],
      };

    case "maldives-visa-guide-for-tourists":
      return {
        title: "Maldives Visa Guide 2026: Free 30-Day Visa on Arrival for Every Nationality",
        description: "The Maldives has one of the simplest visa policies of any country — every nationality gets a free 30-day visa on arrival — but a handful of entry requirements still trip up first-time visitors.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e7c95026ca9332fb030b72a5f416d1d4773637bb86b8b30c40e5a9e4ceb463.jpeg",
        fastFacts: [
          { icon: "CheckCircle", label: "Visa policy", value: "Free visa on arrival for every nationality, with no advance application or visa fee" },
          { icon: "Clock", label: "Length of stay", value: "Up to 30 days, issued directly at Velana International Airport immigration" },
          { icon: "FileText", label: "Required beforehand", value: "An online IMUGA Traveller Declaration, submitted within 96 hours of arrival" },
          { icon: "DollarSign", label: "Proof of funds", value: "Commonly cited at a minimum of USD 100 plus USD 50 per planned day of stay" },
        ],
        sections: [
          {
            title: "Free Visa on Arrival for Every Nationality — No Exceptions List",
            content: "Unlike most of its regional neighbors, the Maldives doesn't split visitors into visa-free, visa-on-arrival and advance-application tiers by nationality — **every nationality receives the same free 30-day visa on arrival**, issued at the immigration desk at **Velana International Airport** with no paperwork filed in advance and no fee charged. This makes the Maldives genuinely one of the simplest countries in the world to enter as a tourist, with no nationality-specific exceptions to check before booking flights.\n\nThe visa on arrival is strictly for tourism; anyone planning to work, study or stay long-term needs a different permit obtained separately through Maldives Immigration.",
          },
          {
            title: "What You Actually Need to Show at Immigration",
            content: "Arriving without the right documents is the real risk here, not nationality. You need: a **passport valid for at least one month beyond your planned departure date**; a **confirmed onward or return ticket** showing you'll leave within the 30-day window; **proof of accommodation** covering your full stay, whether that's a resort voucher, hotel booking, or a letter from a host if you're staying on a local island; and commonly cited **proof of funds**, around USD 100 plus USD 50 for each day you plan to stay.\n\nSeparately, every traveler must submit an online **IMUGA (Immigration, Maldives) Traveller Declaration** within 96 hours before arrival — this is a digital health and travel declaration, not a visa application, but immigration will ask for it, so complete it before you fly rather than at the airport.",
          },
          {
            title: "A Few Practical Notes Worth Knowing Before You Travel",
            content: "Because the Maldives' entire tourism model runs on resort and local-island stays booked in advance, immigration officers lean more heavily on your accommodation proof than many destinations do — have a printed or downloaded copy of your booking confirmation ready rather than relying on inflight wifi at the gate. The 30-day visa on arrival covers tourism only, and overstaying is handled strictly, so confirm your onward flight date lines up with your visa window if your plans change mid-trip.\n\nIf you're combining a resort stay with time on a local island like Maafushi, note that your accommodation proof should reasonably reflect your actual itinerary across both.",
          },
        ],
        faqs: [
          { q: "Does every nationality get a free Maldives visa on arrival?", a: "Yes — there is no nationality-based exceptions list. Every traveler receives the same free 30-day visa on arrival at Velana International Airport." },
          { q: "What is the IMUGA declaration?", a: "A mandatory online Traveller Declaration (immigration, customs and health) that every visitor must submit within 96 hours before arrival. It's separate from and in addition to the visa on arrival." },
          { q: "How long can I stay in the Maldives on the visa on arrival?", a: "Up to 30 days, issued free at the airport with no advance application." },
          { q: "Do I need proof of funds to enter the Maldives?", a: "Commonly cited guidance is a minimum of around USD 100 plus USD 50 per day of planned stay, though immigration primarily focuses on your accommodation and onward travel proof." },
        ],
      };

    case "maldives-snorkeling-diving-guide":
      return {
        title: "Maldives Snorkeling & Diving Guide 2026: Visibility, Seasons and Where to Go",
        description: "The Maldives' reefs are built for both snorkelers and certified divers, but visibility, marine-life sightings and the right site shift meaningfully by season and atoll.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/892ab4f4d135f6f6fc0d8e34f4d01b13d263d5abae264d7d5386a0a803bee2ab.jpg",
        fastFacts: [
          { icon: "Eye", label: "Best visibility", value: "December through May, with 15-30 meters of clear water in calmer seas" },
          { icon: "Fish", label: "Manta rays", value: "May-November, peaking at Hanifaru Bay (Baa Atoll) from June to November" },
          { icon: "Waves", label: "Whale sharks", value: "Year-round in South Ari Atoll — one of the most reliable sightings on Earth" },
          { icon: "Compass", label: "No certification needed", value: "House-reef and guided snorkeling trips work for non-divers; scuba requires certification or a resort beginner course" },
        ],
        sections: [
          {
            title: "Snorkeling Needs No Certification — and the Maldives Is Built for It",
            content: "Snorkeling in the Maldives doesn't require any training, and the country's reef structure makes it unusually rewarding for it: many resorts and guesthouses sit directly on a **house reef**, meaning you can snorkel from the beach without a boat, while guided boat trips reach sites further out for nurse sharks, stingrays and reef fish in close, shallow water. Guided snorkeling trips targeting specific wildlife — nurse sharks, stingrays, turtles — are widely available and generally the better choice for a first visit over a self-guided house-reef swim, since a guide knows where the animals actually are that day.\n\nWater temperature stays warm year-round (generally mid-to-high 20s°C), so a wetsuit is optional rather than necessary for most snorkelers.",
            tourCard: { slug: "male-snorkeling-turtles-dolphin-watching-tour", title: "Malé: Snorkeling, Turtles & Dolphin Watching Tour", description: "A guided snorkeling trip targeting turtles and dolphins in the same outing.", price: "From $189", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8ed47f7639bddb7854c92fb14aa5c6db391cecb92518206fc3efafcd33266608.png" },
          },
          {
            title: "Diving: Visibility vs. Wildlife Is a Real Tradeoff",
            content: "For divers, the Maldives' calendar genuinely splits into two different trips depending on priority. **December through May** gives the clearest water of the year — visibility commonly 15 to 30 meters — in calmer seas with less current, the easier and more comfortable diving conditions overall. **May through November**, driven by the southwest monsoon, trades some of that clarity for richer marine life: plankton blooms draw in the manta ray and whale shark aggregations that make this half of the year the stronger choice for wildlife-focused diving.\n\nBeginners with no certification can still dive through a resort's introductory scuba course, typically a shallow, supervised shore or shallow-water dive that doesn't require prior training.",
            tourCard: { slug: "maldives-beginner-scuba-dive-with-shallow-water", title: "Maldives: Beginner Scuba Dive with Shallow-Water Training", description: "An introductory dive for non-certified divers, training included.", price: "From $177", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/de22f339d55621804067650723bb02805802a51c1ca96c0d7394e21d5f69b619.jpg" },
          },
          {
            title: "Where to Go for Specific Marine Life",
            content: "**South Ari Atoll** holds whale sharks year-round, making it the single most reliable destination in the Maldives — or arguably the world — for a sighting without having to time your whole trip around a season. **Hanifaru Bay in Baa Atoll**, a UNESCO-recognized marine protected area, is the country's premier manta ray feeding site, with its biggest aggregations from June through November when plankton blooms peak. Closer to Malé, reef dive and snorkel sites around **Rasfari** and the nearby atoll corners are a far shorter boat ride and still reliably turn up manta rays, nurse sharks and stingrays without a multi-day liveaboard commitment.\n\nNight diving is also widely offered and shows a genuinely different reef — many species that hide during the day are active after dark, and the equipment and guide are provided as part of the trip.",
            tourCard: { slug: "maldives-night-dive-with-equipment-and-guide", title: "Maldives: Night Dive with Equipment and Guide", description: "A night dive showing the reef's nocturnal side, full gear included.", price: "From $195", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3ea0f0596165bb207ee2a67096dc25b70a297af5f8d1e0ee92ef5a32c8623e2.jpg" },
          },
        ],
        faqs: [
          { q: "Do I need a certification to snorkel in the Maldives?", a: "No — snorkeling requires no certification. Scuba diving does, unless you book a resort's introductory beginner course, which includes shallow-water training for non-certified divers." },
          { q: "What's the best time for diving visibility in the Maldives?", a: "December through May gives the clearest water, commonly 15-30 meters, in calmer seas with less current." },
          { q: "Where can I reliably see whale sharks?", a: "South Ari Atoll, where whale sharks are present year-round — one of the most consistent whale shark destinations anywhere." },
          { q: "When is the best time to see manta rays?", a: "May through November, with the largest aggregations at Hanifaru Bay in Baa Atoll typically from June through November." },
        ],
      };

    case "maldives-resort-vs-local-island-guide":
      return {
        title: "Maldives Resort Island vs. Local Island Guide 2026: Which One Actually Fits Your Trip",
        description: "A resort island and a local island are close to two different countries wearing the same Maldives label — here's exactly what each one means for your budget, rules and experience.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aa9554277e5c1832aaa0267b0921e2fdbd3ff8be2fd984d6834fcae205a2c0a3.png",
        fastFacts: [
          { icon: "Building2", label: "Resort islands", value: "An entire island leased to a single operator, its own rules, alcohol generally allowed within the resort" },
          { icon: "Home", label: "Local islands", value: "Inhabited Maldivian communities (e.g. Maafushi) where national conservative-Muslim-country rules apply" },
          { icon: "DollarSign", label: "Cost gap", value: "Local islands run dramatically cheaper — guesthouses instead of villas, no exclusive-island markup" },
          { icon: "Wine", label: "Alcohol", value: "Allowed on resort islands within the resort; prohibited on local islands, though Maafushi has an offshore bar boat" },
        ],
        sections: [
          {
            title: "A Resort Island Is Its Own Private World — That's the Entire Product",
            content: "A **resort island** in the Maldives is typically an entire island leased to one operator, with every structure on it built and run by that resort — there's no town, no local residents, and no rules beyond the ones the resort itself sets. This is the version of the Maldives most people picture: an overwater villa, a single house reef, a bar serving alcohol freely, and total privacy, because the whole island exists for exactly one purpose. It's also the most expensive version, since you're paying for exclusivity rather than just a room.\n\nEvery resort island transfer is a real logistics and cost item on top of the room rate — speedboat or seaplane, depending on distance from Malé — so factor that into the total cost comparison against a local island, not just the nightly rate.",
          },
          {
            title: "A Local Island Is a Real Maldivian Community, With Real Local Rules",
            content: "A **local island**, like **Maafushi**, is an inhabited Maldivian community where people actually live, work and raise families — and because the Maldives is a conservative, majority-Muslim country, the rules that apply to residents apply to visitors too. **Alcohol is not sold or permitted** on local islands (Maafushi is a partial exception, with a licensed **bar boat** moored offshore that tourists reach by a short transfer, typically costing in the €30-40 range round-trip). **Swimwear is restricted to a single designated bikini beach**; modest dress — shoulders and knees covered — is expected everywhere else on the island.\n\nWhat you get in exchange is a dramatically cheaper trip (guesthouses instead of resort villas), access to genuine Maldivian daily life, and easy day-trip access to snorkeling and excursion boats that leave from the same jetty, often cheaper than the same trip booked through a resort.",
            tourCard: { slug: "from-hulhumale-nurse-shark-stingray-snorkeling", title: "From Hulhumalé: Nurse Shark & Stingray Snorkeling Tour", description: "A snorkeling day trip that works equally well from a local-island or resort base.", price: "From $260", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aa9554277e5c1832aaa0267b0921e2fdbd3ff8be2fd984d6834fcae205a2c0a3.png" },
          },
          {
            title: "Which One Should You Actually Book?",
            content: "If total privacy, an overwater villa and alcohol with every dinner matter more to you than price, a resort island is the only version of the Maldives that delivers that. If budget matters more, or you want a closer look at actual Maldivian life rather than an entirely engineered one, a local island like Maafushi gets you the same turquoise water and reef access for a fraction of the cost — with the tradeoff of real dress-code and alcohol restrictions outside the designated bikini beach and, on Maafushi, the bar boat.\n\nMany travelers now split a trip between the two: a few nights on a local island for value and authenticity, a few nights on a resort island for the splurge — both reachable from Malé without a major re-routing of the trip.",
          },
        ],
        faqs: [
          { q: "Can you drink alcohol on a local island in the Maldives?", a: "Not on the island itself. Maafushi, the best-known local island for tourism, has a licensed bar boat moored offshore that tourists reach by a short paid transfer." },
          { q: "Do resort islands have dress code restrictions?", a: "No — within a resort island, guests can dress freely, including swimwear anywhere on the property." },
          { q: "Is Maafushi worth staying on instead of a resort?", a: "Yes for budget-conscious travelers or anyone wanting a more authentic look at Maldivian life — it's dramatically cheaper and has its own snorkeling and excursion boats, with the tradeoff of local dress-code and alcohol rules." },
          { q: "Can I visit a local island on a day trip from a resort?", a: "Yes, many resorts and tour operators run local-island visits as a half or full-day excursion, giving a taste of both without switching accommodation." },
        ],
      };

    case "male-local-island-guide":
      return {
        title: "Malé & Nearby Local Islands Guide 2026: Villingili, Hulhumalé and Maafushi",
        description: "Malé's own local-island neighbors — Villingili, Hulhumalé and the short hop out to Maafushi — give a budget-friendly, authentic side of the Maldives most resort-only itineraries skip entirely.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f5af09ce987347f8d1f241044edbfab270566e13ee8ce8acb303cdc07014f06.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Villingili", value: "A short ferry from Malé, a quieter residential island with its own beach" },
          { icon: "Building2", label: "Hulhumalé", value: "Connected by bridge, home to the airport, with beach clubs and day-pass pools" },
          { icon: "Waves", label: "Maafushi", value: "A short boat ride further out, the most established budget local-island destination" },
          { icon: "Wine", label: "Local-island rules", value: "No alcohol on the island itself; modest dress outside the designated bikini beach" },
        ],
        sections: [
          {
            title: "Villingili: The Quiet Local Island Right Next to the Capital",
            content: "**Villingili** sits a short ferry ride from Malé and functions as a genuinely local, residential island — a slower pace, its own beach, and a community feel that contrasts sharply with the capital's density just across the water. It's the easiest local-island taste available on a tight schedule, needing no overnight stay to feel the difference from Malé or a resort.\n\nAs with any local island, standard Maldivian conservative-country rules apply here: modest dress outside a designated swimming area, and no alcohol sold on the island.",
            tourCard: { slug: "male-villimale-half-day-trip-with-hotel-or", title: "Malé: Villimalé Half-Day Trip with Hotel or Airport Pickup", description: "A half-day visit to Villingili's quieter beach and streets.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f5af09ce987347f8d1f241044edbfab270566e13ee8ce8acb303cdc07014f06.jpg" },
          },
          {
            title: "Hulhumalé: A Newer, More Built-Up Extension of the Capital",
            content: "**Hulhumalé**, a reclaimed island connected to Malé by bridge and now home to **Velana International Airport**, has grown into the most developed of the capital-area islands — its own beach clubs, resort-style day-pass pools, and restaurants that give a genuinely resort-adjacent feel without the resort-island price tag. For travelers with a layover or an early/late flight, it's the easiest place nearby to spend a few comfortable hours by the water.\n\nDay-pass beach clubs here typically bundle pool and beach access with loungers for a flat fee, a popular option for stopover travelers without a resort booking.",
            tourCard: { slug: "male-hulhumale-resort-style-pool-beach-club-day", title: "Malé & Hulhumalé: Resort-Style Pool & Beach Club Day Pass", description: "A day-pass alternative to a full resort booking, right by the airport.", price: "From $104", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/675040ab5fbc0f7bddb2fa7676cce97efa9243e5d2e931c893630625ff9549f7.png" },
          },
          {
            title: "Maafushi: The Further-Out Local Island Most Budget Trips Build Around",
            content: "**Maafushi**, roughly an hour by speedboat from Malé, is the best-established budget local-island destination in the country — dense with guesthouses, excursion operators and a dedicated bikini beach, and genuinely built for international tourism despite being an inhabited local community. Its signature workaround to local-island alcohol rules is a licensed **bar boat** moored offshore, reached by a short paid transfer, typically around €30-40 round-trip.\n\nMaafushi's jetty is also a hub for snorkeling, diving and sandbank-trip boats heading out to South Malé Atoll's reefs, making it a practical base for an activity-heavy, budget-conscious Maldives trip rather than just a beach stop.",
            tourCard: { slug: "maafushi-beach-horse-ride-with-sunrise-sunset", title: "Maafushi: Beach Horse Ride with Sunrise & Sunset Options", description: "A beach activity based directly out of Maafushi's own shoreline.", price: "From $189", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6e13e77a3d2c232fb66fe504227cdb1fde6b48aff59af04eb86aa3f1a68e43b4.png" },
          },
        ],
        faqs: [
          { q: "What's the easiest local island to visit from Malé?", a: "Villingili, a short ferry ride away, for the quickest taste of local-island life. Hulhumalé is even closer (bridge-connected) but more built-up and less purely residential." },
          { q: "Is Maafushi far from Malé?", a: "Roughly an hour away by speedboat, making it a straightforward day trip or multi-night budget base." },
          { q: "Can I drink alcohol on these local islands?", a: "Not on the island itself. Maafushi has an offshore bar boat tourists can reach by a short paid transfer; Villingili and Hulhumalé don't have an equivalent." },
          { q: "Do I need a resort booking to enjoy beach time near Malé?", a: "No — Hulhumalé's day-pass beach clubs and Villingili's public beach both give real beach time without a resort reservation." },
        ],
      };

    case "maldives-budget-travel-guide":
      return {
        title: "Maldives Budget Travel Guide 2026: How to Actually Afford It",
        description: "The Maldives has a reputation as an unaffordable honeymoon destination, but local-island guesthouses, shared excursion boats and smart transfer choices bring it within reach of a real budget.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d673adaeb4884f18cfc63cbe1689ad050551f9052fc684d9e27e553e8fde051a.jpg",
        fastFacts: [
          { icon: "Home", label: "Biggest lever", value: "Local-island guesthouses instead of resort villas — the single largest cost difference in any Maldives trip" },
          { icon: "Boat", label: "Transfer savings", value: "Speedboat transfers to nearby atolls cost far less than seaplane transfers to distant resort atolls" },
          { icon: "Users", label: "Group activities", value: "Shared snorkeling and excursion boats cost a fraction of a private charter for the same reef access" },
          { icon: "Calendar", label: "Timing", value: "Shoulder weeks just outside December-January peak season carry noticeably lower rates" },
        ],
        sections: [
          {
            title: "The Single Biggest Decision: Local Island vs. Resort",
            content: "Choosing a **local island** like Maafushi over a resort island is, by a wide margin, the most effective way to cut the cost of a Maldives trip — guesthouse rooms run a small fraction of a resort villa rate, and you skip the per-person transfer premium that distant seaplane-only resorts charge. The tradeoff is accepting local-island rules (no alcohol on the island itself, modest dress outside the bikini beach), which for budget-focused travelers is usually an easy trade.\n\nEven within local islands, Maafushi's density of guesthouses means genuine price competition, so comparing a few options rather than booking the first one found is worth the extra few minutes.",
          },
          {
            title: "Transfers: Speedboat Beats Seaplane for Your Wallet",
            content: "Because **speedboat transfers** serve resorts and local islands within roughly 60km of Malé for $150-400 round-trip, while **seaplane transfers** to more distant atolls run $450-800, picking a destination reachable by speedboat is a straightforward way to cut a major line item from the trip. Maafushi and most North/South Malé Atoll local islands fall within speedboat range, which is part of why they're the default budget base for most cost-conscious visitors.\n\nA one-way airport speedboat transfer to a nearby local island, booked independently rather than bundled through an expensive resort package, is often the cheapest way to get out of Malé.",
            tourCard: { slug: "maafushi-one-way-airport-transfer-by-speed-boat", title: "Maafushi: One-Way Airport Transfer by Speed Boat", description: "A straightforward, affordable speedboat transfer straight from the airport.", price: "From $52", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b9da6b019680faf0a678e02d876b7d37db024aae5b9a5264d80157879d947fda.jpeg" },
          },
          {
            title: "Shared Boats Over Private Charters for Snorkeling and Excursions",
            content: "The Maldives' biggest draw — snorkeling with nurse sharks, stingrays and reef life — doesn't require a private boat to enjoy: **shared group snorkeling trips** cost dramatically less per person than a private charter covering the same reef, and for most travelers the actual experience in the water is identical. Group trips also run frequently from Maafushi's jetty and nearby local islands, so availability is rarely a problem the way it can be with a single-resort private excursion.\n\nSkip the private sandbank picnic and dolphin cruise charters unless a special occasion justifies the premium — a shared sunset dolphin-watching and snorkeling trip delivers much of the same experience for a fraction of the cost.",
            tourCard: { slug: "maldives-stingray-swim-3-reef-snorkeling-tour", title: "Maldives: Stingray Swim & 3-Reef Snorkeling Tour", description: "A shared group snorkeling trip covering three reef sites and a stingray swim.", price: "From $116", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8b03965455cdff828bd3bfa59af0f3d0f5a0ec57acd7c9a87aa51f8fc056041a.jpg" },
          },
        ],
        faqs: [
          { q: "Can you visit the Maldives on a tight budget?", a: "Yes — basing your trip on a local island like Maafushi instead of a resort, taking speedboat transfers over seaplanes, and joining shared excursion boats instead of private charters together make the Maldives dramatically more affordable than its reputation suggests." },
          { q: "Is alcohol unavailable on a budget Maldives trip?", a: "On the local island itself, yes. Maafushi has an offshore bar boat as a workaround, reached by a short paid transfer." },
          { q: "What's the cheapest way to get from the airport to a local island?", a: "A one-way speedboat transfer, booked independently rather than bundled into an expensive resort transfer package — these run to nearby local islands like Maafushi affordably." },
          { q: "Do shared snorkeling trips see the same marine life as private charters?", a: "Generally yes — the reef sites and wildlife sightings (nurse sharks, stingrays, turtles) are largely the same; a private charter mainly buys exclusivity and schedule flexibility, not better sightings." },
        ],
      };

    case "maldives-luxury-resort-guide":
      return {
        title: "Maldives Luxury Resort Guide 2026: Overwater Villas, Private Islands and What Justifies the Price",
        description: "A Maldives luxury resort stay is genuinely a different product from a budget local-island trip — here's what the premium actually buys and how to choose between resort styles.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3c7b1fb9b11599c72976f5223d93c0e3b83f0e906820198e3ad9f787504db1e0.jpg",
        fastFacts: [
          { icon: "Home", label: "Overwater villas", value: "The signature Maldives luxury product — private access to the lagoon directly from your room" },
          { icon: "Plane", label: "Seaplane transfer", value: "Many of the most exclusive resorts sit in distant atolls reachable only by seaplane, $450-800 round-trip" },
          { icon: "Utensils", label: "Underwater dining", value: "A handful of resorts offer dedicated underwater restaurants as a signature splurge experience" },
          { icon: "Compass", label: "Private excursions", value: "Private sandbank picnics, dolphin cruises and sunset charters are the norm at this tier" },
        ],
        sections: [
          {
            title: "What a Luxury Resort Island Actually Buys You",
            content: "At the top end, a **resort island** is an entirely private world: exclusive-use beaches, a house reef with no other guests sharing it, overwater villas built directly over the lagoon with private steps into the water, and staff-to-guest ratios that make nearly every request bespoke. The isolation itself is the product — because the resort occupies the entire island, there's no town, no local traffic, and no sharing the view with anyone outside your own travel party.\n\nThis isolation is also why transfers to the most exclusive properties, often in more distant atolls, run on **seaplane** rather than speedboat — expect $450-800 round-trip per person on top of the room rate, a cost worth confirming before booking rather than discovering afterward.",
          },
          {
            title: "Signature Splurge Experiences: Underwater Dining and Submarine Tours",
            content: "A small number of properties and operators have built entire experiences around the Maldives' underwater setting as the main event rather than a backdrop — a dedicated **underwater restaurant**, with floor-to-ceiling views of the reef and marine life while you eat a multi-course dinner, is the signature splurge for travelers wanting something genuinely unique to the destination. A **tourist submarine**, descending up to 45 meters without requiring any swimming or diving skill, offers a similar depth of access for guests who want the deep reef view without getting in the water at all.\n\nBoth experiences are priced as standalone bookings rather than resort-exclusive perks, so they're addable to a luxury stay at almost any resort within transfer range, not locked to one specific property.",
            tourCard: { slug: "maldives-underwater-restaurant-dining-experience", title: "Maldives Underwater Restaurant Dining Experience", description: "A multi-course dinner beneath the ocean surface, surrounded by reef views.", price: "From $702", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fb79bde5c28a1c1b661855337973d5210ed9b74f0096b9da70076728f5d9d715.jpg" },
          },
          {
            title: "Private Excursions: Sandbanks, Yachts and Sunset Charters",
            content: "Luxury-tier trips tend to replace shared group excursions with **private charters**: a private sandbank picnic on an uninhabited strip of sand reachable only by boat, a luxury yacht cruise with its own onboard pool and snorkeling stops, or a private beach bonfire dinner set up exclusively for your party. These cost multiples of the shared equivalent, but the privacy and customization — exact timing, exact menu, no other guests — is precisely what the price difference buys.\n\nMulti-day live-aboard or island-hopping packages targeting specific wildlife (whale sharks, mantas) also sit at this tier, bundling accommodation, diving and transfers into a single higher-end booking rather than day-by-day planning.",
            tourCard: { slug: "male-luxury-morning-yacht-cruise-with-snorkeling", title: "Malé: Luxury Morning Yacht Cruise with Snorkeling & Sea Pool", description: "A private yacht morning with an onboard sea pool and snorkeling stops.", price: "From $5,200", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3c7b1fb9b11599c72976f5223d93c0e3b83f0e906820198e3ad9f787504db1e0.jpg" },
          },
        ],
        faqs: [
          { q: "Is a seaplane transfer worth the extra cost for a luxury resort?", a: "If the resort's specific appeal is its remoteness and exclusivity, generally yes — the most isolated, highest-tier properties are often only reachable this way. Confirm the transfer cost and daylight-only flying window before booking regardless." },
          { q: "Are underwater restaurants available at every resort?", a: "No — they're a small number of standalone, bookable experiences rather than a feature at every property, so they're worth booking separately even if your resort doesn't have one on-site." },
          { q: "What's the difference between a private and shared sandbank trip?", a: "A shared trip visits the same sandbank alongside other guests on a set schedule; a private charter reserves the boat and timing exclusively for your party, at a correspondingly higher price." },
        ],
      };

    case "maldives-whale-shark-manta-ray-guide":
      return {
        title: "Maldives Whale Shark & Manta Ray Guide 2026: Where and When to Actually See Them",
        description: "South Ari Atoll and Hanifaru Bay are the two names every Maldives wildlife guide drops — here's what makes each one reliable, and when to actually go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f20a37f738bb04eacde2488f45c7cdf598f3cdb79feaffa46a90a9291c8c641c.jpg",
        fastFacts: [
          { icon: "Waves", label: "South Ari Atoll", value: "Whale sharks present year-round — one of the most reliable sighting spots anywhere on Earth" },
          { icon: "Fish", label: "Hanifaru Bay", value: "A UNESCO-recognized manta ray feeding site in Baa Atoll, peaking June-November" },
          { icon: "Calendar", label: "Manta season overall", value: "May through November, driven by southwest-monsoon plankton blooms" },
          { icon: "Compass", label: "Closer alternative", value: "Rasfari and nearby Malé Atoll corners for manta and reef-shark sightings on a shorter boat ride" },
        ],
        sections: [
          {
            title: "Whale Sharks: South Ari Atoll's Year-Round Reliability",
            content: "**South Ari Atoll** is home to whale sharks present **year-round**, a genuinely unusual feature since most whale shark destinations worldwide are tied to a tight seasonal migration window. That year-round presence is why South Ari has become one of the most consistently successful whale shark destinations on the planet — trips run daily rather than only during a short season, and operators track known individual sharks' general locations to improve sighting odds further.\n\nWhale shark encounters are snorkel-based, not scuba, since swimming alongside a filter-feeding shark at the surface doesn't require diving certification — just comfort in open water with a large, harmless animal nearby.",
          },
          {
            title: "Manta Rays: Hanifaru Bay's Feeding Frenzy Season",
            content: "**Hanifaru Bay**, a UNESCO-recognized marine protected area in **Baa Atoll**, is the Maldives' premier manta ray site, known for feeding aggregations where dozens of mantas can gather simultaneously when plankton conditions align. The season runs broadly **May through November**, with the largest, most reliable aggregations typically from **June through November** as the southwest monsoon's plankton blooms peak — outside this window, sightings become far less predictable.\n\nBecause Hanifaru Bay is a protected area, access is regulated with group-size and snorkel-only rules enforced to protect the feeding mantas, so trips there run through licensed operators rather than independent boats.",
            tourCard: { slug: "male-unesco-hanifaru-bay-mantas-reefs-dolphins", title: "Male: UNESCO Hanifaru Bay, Mantas, Reefs & Dolphins", description: "A trip to the protected Hanifaru Bay manta feeding site during its peak season.", price: "From $8,450", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/98597ee9b8f63fef5c5b284249cbae94fe729df94007eb779d326e1ed0f65cb0.png" },
          },
          {
            title: "A Closer, Cheaper Alternative: Rasfari and Malé Atoll Corners",
            content: "If a dedicated Hanifaru Bay or South Ari Atoll multi-day trip isn't realistic for your schedule or budget, sites like **Rasfari** and other corner reefs within **Malé Atoll** itself still reliably turn up manta rays, reef sharks and large schools of fish, reachable on a half-day boat trip directly from Malé or Hulhumalé rather than requiring travel to a distant atoll. Sightings here aren't guaranteed the way Hanifaru's protected feeding aggregations are, but the shorter, cheaper trip makes this the realistic option for most visitors without a dedicated wildlife-focused multi-day itinerary.\n\nEither way, book with an operator that limits group size and follows no-touch wildlife guidelines — both whale sharks and mantas are sensitive to disturbance, and responsible operators brief guests on this before entering the water.",
            tourCard: { slug: "maldives-manta-ray-snorkeling-at-rasfari-corner", title: "Maldives: Manta Ray Snorkeling at Rasfari Corner", description: "A shorter, closer-to-Malé alternative to a dedicated Hanifaru Bay trip.", price: "From $221", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda7256a80feec399244d280cc30a4fb0b34b1375524b2ac07ebcc96b97b9332.jpg" },
          },
        ],
        faqs: [
          { q: "Is South Ari Atoll really that reliable for whale sharks?", a: "Yes — whale sharks are present there year-round, which is unusual globally and makes South Ari one of the most consistent whale shark destinations anywhere." },
          { q: "When should I go to see manta rays at Hanifaru Bay?", a: "May through November for the season overall, with June through November being the most reliable window for the largest feeding aggregations." },
          { q: "Can I see mantas without traveling to a distant atoll?", a: "Yes, to a degree — sites like Rasfari within Malé Atoll turn up mantas and reef sharks on a shorter trip, though sightings there aren't as consistently guaranteed as Hanifaru Bay's protected feeding site." },
          { q: "Is swimming with whale sharks safe?", a: "Yes — they're filter feeders with no interest in humans. Reputable operators brief guests on no-touch, respectful-distance guidelines before entering the water." },
        ],
      };

    case "maldives-sandbank-tour-guide":
      return {
        title: "Maldives Sandbank Tour Guide 2026: Picnics, Snorkeling and the Perfect Private-Island Illusion",
        description: "A Maldives sandbank trip puts you on a strip of sand with nothing around but water and sky — here's what to expect, from shared day trips to private charters.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1924f20a37f738bb04eacde2488f45c7cdf598f3cdb79feaffa46a90a9291c.jpg",
        fastFacts: [
          { icon: "MapPin", label: "What it is", value: "A small, uninhabited sand formation rising above the lagoon, usually reachable only by boat" },
          { icon: "Fish", label: "Usual pairing", value: "Snorkeling at a nearby reef, often combined with a sunset cruise or dolphin watching" },
          { icon: "Clock", label: "Duration", value: "Most sandbank trips run a half-day; some extend into a full-day picnic or private charter" },
          { icon: "Compass", label: "Access", value: "Shared group boats cover most sandbanks; a handful of the most scenic ones are accessed via private charter" },
        ],
        sections: [
          {
            title: "What a Sandbank Trip Actually Is",
            content: "A **sandbank** is a small, shifting formation of sand that rises just above the lagoon's surface, with no vegetation and often no fixed location from year to year as currents reshape it — the closest thing the Maldives has to the single-palm-tree private-island cliché, minus the palm tree. Trips typically combine a short boat ride out with time to swim, sunbathe and photograph the sandbank, then move to a nearby reef for snorkeling before heading back, making it a well-rounded half-day rather than a single stop.\n\nBecause sandbanks are tidal and seasonal, the exact one visited can change between trips — a reputable operator will pick whichever sandbank is currently in good shape rather than always running to the same spot.",
            tourCard: { slug: "maldives-sandbank-snorkelling-sunset-cruise", title: "Maldives: Sandbank, Snorkelling & Sunset Cruise", description: "A combined sandbank, reef snorkel and sunset cruise half-day.", price: "From $372", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/63b6f89a915016e7d3c07b5ab15c6c3fc48c0d01890bd808cb7a78be7518da2f.jpg" },
          },
          {
            title: "Shared Trips vs. a Private Picnic Setup",
            content: "Most sandbank trips run as **shared group excursions** — a set boat, a set itinerary, and other travelers sharing the same stretch of sand, which still delivers the visual payoff at a fraction of the private-charter price. For a special occasion, a **private beach bonfire or picnic setup** reserves the sandbank exclusively, often with a catered meal, decor and sometimes a dedicated sunset timing — the Maldives' version of a proposal-worthy private dinner, minus the resort restaurant.\n\nEither version typically pairs naturally with dolphin watching on the same boat trip, since dolphins are commonly spotted en route to or from the same lagoon areas sandbanks sit in.",
            tourCard: { slug: "from-male-private-beach-bonfire-gourmet-dinner", title: "From Malé: Private Beach Bonfire & Gourmet Dinner", description: "A private, catered sandbank evening set up exclusively for your party.", price: "From $1,300", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7c1f197b9123d6e6e1d3cecfbab367d836894fad3c82047caa73f20d03d28629.png" },
          },
          {
            title: "What to Bring and When to Go",
            content: "Sandbanks have **zero shade** — no vegetation at all — so sun protection (reef-safe sunscreen, a hat, a cover-up) matters more here than almost anywhere else on a Maldives trip. Morning and late-afternoon trips avoid the most intense midday sun while still giving good light for photos; a sunset-timed trip trades some swimming time for the sandbank's most photogenic hour, when the low light flattens the turquoise water into its most saturated color.\n\nBring a dry bag or waterproof case for a phone or camera — getting on and off the boat onto soft sand usually means wading the last few meters.",
          },
        ],
        faqs: [
          { q: "Is a sandbank trip worth it if I'm already snorkeling elsewhere?", a: "Yes, as a different visual experience — sandbank trips are as much about the photos and the feeling of total isolation as the snorkeling, which most trips still include at a nearby reef." },
          { q: "Can I book a private sandbank picnic for a proposal or anniversary?", a: "Yes — private beach bonfire and picnic charters exist specifically for this, with catering and setup arranged exclusively for your party." },
          { q: "Do sandbanks have any shade or facilities?", a: "No — they're bare sand with no vegetation or structures, so sun protection and water are essential to bring." },
          { q: "Does a sandbank trip usually include dolphin watching?", a: "Often, yes — many operators combine the two since dolphins are commonly spotted in the same lagoon areas on the way to or from the sandbank." },
        ],
      };

    case "male-city-guide":
      return {
        title: "Malé City Guide 2026: Layout, Getting Around and What's Actually Where",
        description: "Malé is unlike any other capital you'll visit — tiny, packed and entirely walkable — here's how its layout actually works and how to get around it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5c739dcff556595116deced59d3286a3af7edb556c182b79f7775041ca8dc3a.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Size", value: "One of the smallest and most densely populated capitals in the world, fully walkable" },
          { icon: "Car", label: "Getting around", value: "Walking covers most sights; taxis handle the harbor-to-airport-ferry connection easily" },
          { icon: "Building2", label: "Key areas", value: "The harborfront and markets, the Grand Friday Mosque district, and the quieter residential streets inland" },
          { icon: "Boat", label: "Connections", value: "Bridge to Hulhumalé (and the airport); short ferries to Villingili and other nearby islands" },
        ],
        sections: [
          {
            title: "Why Malé's Layout Feels Unlike Any Other Capital",
            content: "Malé is built on a single small island with essentially no room left to expand horizontally, which has produced one of the densest urban layouts on Earth — narrow streets, closely packed buildings, and government, residential and commercial space all stacked within walking distance of each other. There's no sprawling suburb to drive through to reach the center, because there effectively is no separate center versus edge; the entire city reads as one dense core.\n\nThis makes Malé one of the few national capitals genuinely explorable entirely on foot in a single visit, without needing transport beyond the occasional short taxi ride.",
          },
          {
            title: "The Harborfront, the Mosque District and the Quieter Streets",
            content: "The **harborfront**, where the fish market and local market sit, is Malé's most active and visitor-friendly stretch, with the daily catch coming in and a steady flow of everyday commerce. A short walk inland brings you to the **Grand Friday Mosque** district, home to the country's largest mosque and several government buildings. Further from the water, Malé's **residential streets** turn noticeably quieter — colorful low-rise housing, small neighborhood shops, and far fewer visitors than the harborfront sees.\n\nA guided city tour efficiently links these three distinct zones, since they're close enough together to cover in a morning but easy to under-explore without knowing where to look.",
            tourCard: { slug: "maldives-male-city-highlights-tour-by-car-with", title: "Maldives: Male City Highlights Tour by Car with Local Guide", description: "A guided loop by car covering the harbor, mosque district and residential streets.", price: "From $64", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5c739dcff556595116deced59d3286a3af7edb556c182b79f7775041ca8dc3a.jpg" },
          },
          {
            title: "Getting Beyond Malé Itself",
            content: "Malé connects to **Hulhumalé** (and the airport) by a bridge, making that crossing simple by taxi, and to **Villingili** and other nearby islands by short, frequent public ferries from the harborfront. For a fuller look at the capital area in one outing, several tours combine Malé, Hulhumalé and Villingili into a single guided day, which is the most efficient way to see all three without arranging each leg separately.\n\nAny onward resort transfer — speedboat or seaplane — also departs from a jetty near Malé or Hulhumalé, so factor the city's layout into your transfer-day timing rather than treating it as a separate logistics problem.",
            tourCard: { slug: "male-hulhumale-male-and-villimale-guided-full-day", title: "Malé: Hulhumalé, Male, and Villimalé Guided Full-Day Tour", description: "A full-day guided tour linking all three capital-area islands.", price: "From $195", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0aa844889f904ab4851abb4d288f14920230745e93832abd00db36083e3355f8.jpg" },
          },
        ],
        faqs: [
          { q: "Is Malé walkable?", a: "Yes — it's one of the smallest, densest capitals in the world, and most sights are comfortably covered on foot in a few hours." },
          { q: "How do I get from Malé to the airport?", a: "The airport is on Hulhumalé, connected to Malé by bridge, so a short taxi ride covers the whole trip." },
          { q: "What's the best way to see Malé, Hulhumalé and Villingili in one trip?", a: "A combined full-day guided tour covering all three is the most efficient option, rather than arranging ferries and taxis separately for each." },
        ],
      };

    case "maldives-dolphin-watching-guide":
      return {
        title: "Maldives Dolphin Watching Guide 2026: Where, When and What to Expect",
        description: "Spinner dolphins are a near-daily sighting on boat trips out of Malé and Hulhumalé — here's how dolphin watching actually works and how to pair it with the rest of your day.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2819d52d49c4363ed3b90de5684bde0c6ff3aeada334ed2173c9bc7f7a25fe.jpg",
        fastFacts: [
          { icon: "Fish", label: "Common species", value: "Spinner dolphins, known for leaping and spinning clear of the water" },
          { icon: "Clock", label: "Best time of day", value: "Sunset trips are the most popular, combining dolphin sightings with the day's best light" },
          { icon: "Compass", label: "Sighting odds", value: "High on most trips from Malé Atoll waters, though never guaranteed since it's wild behavior" },
          { icon: "Waves", label: "Common pairing", value: "Reef snorkeling, sandbank stops or a sunset cruise on the same boat trip" },
        ],
        sections: [
          {
            title: "Spinner Dolphins Are a Genuine Highlight, Not a Gimmick",
            content: "**Spinner dolphins**, named for their habit of leaping and spinning several times in a single jump, are commonly spotted in Malé Atoll's open channel waters, and dolphin-watching boat trips built around them are one of the most consistently rewarding Maldives excursions — no certification, no gear, just a boat and open water. Pods can number from a handful to dozens of individuals, and sightings on most operator trips are frequent enough that dolphin watching has become a reliable standalone excursion rather than a bonus add-on.\n\nSightings are still wild-animal behavior and never guaranteed on any single trip, but operators running these routes daily have a strong track record, and many combine the dolphin search with other stops so the trip delivers value even on a quieter dolphin day.",
            tourCard: { slug: "hulhumale-male-small-group-maldives-dolphin-cruise", title: "Hulhumale & Male': Small-Group Maldives Dolphin Cruise", description: "A small-group cruise focused on spinner dolphin sightings in the open channel.", price: "From $116", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2819d52d49c4363ed3b90de5684bde0c6ff3aeada334ed2173c9bc7f7a25fe.jpg" },
          },
          {
            title: "Sunset Cruises Combine Dolphins With the Day's Best Light",
            content: "A **sunset dolphin cruise** times the trip for both the dolphins' typical early-evening activity and the lagoon's best light, stacking two of the Maldives' most photogenic moments into a single outing. These trips often add a short snorkeling stop at a nearby reef before the light fades, giving a well-rounded late-afternoon-to-evening excursion rather than a single-purpose dolphin search.\n\nBring a zoom lens or at least a steady grip on your phone — dolphins surface briefly and move fast, so photos require patience and quick reflexes rather than a single perfect setup shot.",
            tourCard: { slug: "maldives-sunset-cruise-with-dolphin-watching", title: "Maldives: Sunset Cruise with Dolphin Watching", description: "A sunset-timed cruise pairing dolphin sightings with the lagoon's best light.", price: "From $372", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/347e08f80cd19d29ff7374c3d68ee402d46998f33a8e42c006ee815da1f71ada.jpg" },
          },
          {
            title: "Pairing Dolphin Watching With Snorkeling and Sandbanks",
            content: "Because dolphin pods roam the same general channel waters that lead to good reef and sandbank spots, many boat trips bundle all three into a single half-day — a dolphin search on the way out, snorkeling at a reef, and a stop at a sandbank before heading back. This is generally better value than booking a dedicated single-purpose dolphin trip, since you're not paying separately for boat time that covers the same stretch of water anyway.\n\nFamilies and first-time snorkelers in particular benefit from this combined format, since it spreads the excursion across a few different activities rather than asking young kids to sit still scanning the horizon for the entire trip.",
            tourCard: { slug: "male-atoll-6-hour-dolphin-snorkeling-sandbank", title: "Malé Atoll: 6-Hour Dolphin Snorkeling & Sandbank Safari", description: "A full dolphin, snorkeling and sandbank combination day.", price: "From $1,924", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f20a37f738bb04eacde2488f45c7cdf598f3cdb79feaffa46a90a9291c8c641c.jpg" },
          },
        ],
        faqs: [
          { q: "Are dolphin sightings guaranteed?", a: "No — it's wild animal behavior, so sightings are never guaranteed on any single trip, though operators running daily Malé Atoll routes report frequent success." },
          { q: "What species of dolphin do you see in the Maldives?", a: "Spinner dolphins are the most commonly sighted species around Malé Atoll, known for their distinctive leaping, spinning jumps." },
          { q: "Is a sunset dolphin cruise better than a daytime one?", a: "It's a tradeoff — sunset gives the best light and matches dolphins' typical early-evening activity, while daytime trips often pair better with extended snorkeling since visibility is best in full daylight." },
          { q: "Can kids join a dolphin watching trip?", a: "Yes, these trips are generally family-friendly, especially combined dolphin-snorkel-sandbank trips that keep the day varied rather than a single long dolphin search." },
        ],
      };

    case "maldives-airport-transfer-guide":
      return {
        title: "Maldives Airport Transfer Guide 2026: Speedboat vs. Seaplane vs. Domestic Flight",
        description: "Landing at Velana International Airport is only step one — nearly every Maldives stay requires a second transfer by boat or plane, and picking the wrong one can blow your budget or your schedule.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42975bb43c4f058b5bf442a53337be07fd4666033eee25bcf2ba3ed951f71152.png",
        fastFacts: [
          { icon: "Boat", label: "Speedboat", value: "15-90 minutes, $150-400 round-trip, runs 24/7, covers resorts/islands within ~60km of Malé" },
          { icon: "Plane", label: "Seaplane", value: "25-50 minutes, $450-800 round-trip, daylight-only (roughly 6am-4:30pm), covers distant atolls" },
          { icon: "PlaneTakeoff", label: "Domestic flight + boat", value: "~50 min flight + 15-45 min boat, $450-700 round-trip, for the most remote atolls" },
          { icon: "AlertTriangle", label: "Biggest trap", value: "A late-arriving international flight can miss the seaplane's daylight cutoff entirely" },
        ],
        sections: [
          {
            title: "Why This Transfer Is Unlike Any Other Beach Destination",
            content: "In most beach destinations, landing at the airport puts you close enough to your hotel for a short taxi ride. In the Maldives, the airport sits on its own island (**Hulhumalé**, connected by bridge to **Malé**), and your actual accommodation — whether a resort or a local-island guesthouse — is almost always a separate island reachable only by water or air. This isn't a minor detail: the transfer is a real cost, often $150-800+ per person round-trip, and a real scheduling constraint, and it should be treated as its own line item when planning and budgeting a trip, not an afterthought bundled vaguely into 'getting there.'",
          },
          {
            title: "Speedboat: The Default for Anything Near Malé",
            content: "**Speedboat transfers** cover resorts and local islands within roughly 60km of Malé — North and South Malé Atoll, including Maafushi — taking 15 to 90 minutes and running **24 hours a day**, since boats don't face the daylight restriction aircraft do. Round-trip cost typically runs **$150-400 per person**. This is the transfer type for the large majority of budget and mid-range stays, and its round-the-clock schedule makes it far more forgiving of a late or delayed international flight.\n\nMost local-island guesthouses and nearby resorts will arrange this transfer directly, and independent speedboat transfer bookings are also widely available for added flexibility.",
            tourCard: { slug: "maafushi-one-way-airport-transfer-by-speed-boat", title: "Maafushi: One-Way Airport Transfer by Speed Boat", description: "A direct speedboat transfer from the airport, available any time of day.", price: "From $52", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b9da6b019680faf0a678e02d876b7d37db024aae5b9a5264d80157879d947fda.jpeg" },
          },
          {
            title: "Seaplane and Domestic Flight: Further Atolls, Real Time Constraints",
            content: "**Seaplane transfers**, flown by Twin Otter aircraft, reach more distant atolls — Ari, Baa, Noonu, Raa, Lhaviyani among others — in 25-50 minutes of flying time, but cost **$450-800 round-trip** and only operate in **daylight, roughly 6am to 4:30pm**. This daylight cutoff is the single biggest trap for first-time visitors: a delayed or late-evening international arrival can mean the seaplane simply isn't flying anymore that day, forcing an unplanned overnight in Malé or Hulhumalé before the resort transfer can happen the next morning.\n\nFor the most remote atolls beyond seaplane range, a **domestic flight plus a shorter boat transfer** — roughly 50 minutes flying plus 15-45 minutes by boat, $450-700 round-trip, usually bundled as one booking — is the alternative.",
            tourCard: { slug: "mle-male-velana-international-airport-lounge", title: "MLE Malé Velana International Airport Lounge Access", description: "A comfortable place to wait out a transfer gap or an unplanned overnight.", price: "From $69", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42975bb43c4f058b5bf442a53337be07fd4666033eee25bcf2ba3ed951f71152.png" },
          },
        ],
        faqs: [
          { q: "Is the airport transfer included in my resort or hotel rate?", a: "Usually not — it's typically quoted and billed separately, so confirm this explicitly with your resort or guesthouse before travel rather than assuming it's bundled." },
          { q: "What happens if my flight lands after the seaplane's daylight cutoff?", a: "You'll likely need an unplanned overnight near the airport (Malé or Hulhumalé) before the seaplane transfer can run the next morning — a real risk worth planning around if your resort is seaplane-only." },
          { q: "Which transfer type is cheapest?", a: "Speedboat, generally $150-400 round-trip, covering resorts and local islands within about 60km of Malé, including Maafushi." },
          { q: "Does the speedboat run at night?", a: "Yes — speedboat transfers run 24/7, unlike seaplanes, which only fly during daylight hours." },
        ],
      };

    case "best-tours-in-male":
      return {
        title: "Best Tours in Malé — 2026, Honestly Compared",
        seoTitle: "Best Tours in Male 2026: Top-Rated Picks by Category",
        description: "The best Malé (Maldives) tours for 2026, picked by category — a city walking tour, manta ray snorkeling, Villingili beach time and a multilingual Malé tour — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/af7f58bdedab0ebed875cb07748c0749d8c66aa97018b86b12d1b426fe07bb34.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **guided walking tour through Malé** — the Grand Friday Mosque, the local and fish markets, the harbor — gives a side of the Maldives that resort islands simply don't show, and most visitors never see it because they go straight from airport to speedboat jetty.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "male-guided-walking-tour-with-a-local-guide", title: "Malé: Guided Walking Tour with a Local Guide", description: "A walking tour through Malé's streets and markets with context most visitors never get.", price: "From $39", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/af7f58bdedab0ebed875cb07748c0749d8c66aa97018b86b12d1b426fe07bb34.jpg" },
          },
          {
            title: "Best for a Group: Multilingual City Tour",
            content: "A **multilingual guided city tour** — available in English, Russian, Chinese or Italian — covers the mosque, markets and harbor area, good for mixed-nationality groups or anyone more comfortable in a language other than English.",
            tourCard: { slug: "male-english-russian-chinese-or-italian-guided", title: "Malé: English, Russian, Chinese or Italian Guided City Tour", description: "A multilingual city tour covering the mosque, markets and harbor area.", price: "From $78", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e7c95026ca9332fb030b72a5f416d1d4773637bb86b8b30c40e5a9e4ceb463.jpeg" },
          },
          {
            title: "Best Beach Escape Without a Resort: Villingili",
            content: "A **half-day trip to Villingili**, a short ferry ride from Malé, is the single best way to get actual beach time on a transfer day without booking into a resort — a genuine taste of island life rather than an airport layover spent entirely indoors.",
            tourCard: { slug: "male-villimale-half-day-trip-with-hotel-or", title: "Malé: Villimalé Half-Day Trip with Hotel or Airport Pickup", description: "A half-day trip to Villingili's quieter beaches, pickup included.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f5af09ce987347f8d1f241044edbfab270566e13ee8ce8acb303cdc07014f06.jpg" },
          },
          {
            title: "Best Wildlife Experience: Manta Ray Snorkeling",
            content: "**Manta ray snorkeling at Rasfari Corner** is timed to the manta season's feeding aggregations — one of the Maldives' most memorable in-water wildlife encounters, bookable as a day trip from Malé rather than needing a liveaboard.",
            tourCard: { slug: "maldives-manta-ray-snorkeling-at-rasfari-corner", title: "Maldives: Manta Ray Snorkeling at Rasfari Corner", description: "A snorkeling trip timed to the manta season's feeding aggregations.", price: "From $221", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda7256a80feec399244d280cc30a4fb0b34b1375524b2ac07ebcc96b97b9332.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Malé tours](/maldives/male)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Malé?", a: "A guided walking tour covering the Grand Friday Mosque, the local and fish markets, and the harbor — a side of the Maldives most resort visitors never see." },
          { q: "Is Malé worth visiting if I'm going straight to a resort?", a: "Yes, if you have even a few hours before a transfer — Malé's markets, mosque and harbor area show a side of the Maldives that resort islands simply don't." },
          { q: "What is the best beach option in Malé without booking a resort?", a: "A half-day trip to Villingili, a short ferry ride from the capital, for a genuine taste of island life without a resort booking." },
          { q: "Can I do manta ray snorkeling as a day trip from Malé?", a: "Yes — manta ray snorkeling at Rasfari Corner is bookable as a day trip, timed to the manta season's feeding aggregations." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Malé?", "acceptedAnswer": { "@type": "Answer", "text": "A guided walking tour covering the Grand Friday Mosque, the local and fish markets, and the harbor." } },
                { "@type": "Question", "name": "Is Malé worth visiting if I'm going straight to a resort?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Malé's markets, mosque and harbor area show a side of the Maldives resort islands don't." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Guided Malé Walking Tour' },
          { icon: 'Waves', label: 'Best Beach Escape', value: 'Villingili Half-Day Trip' },
          { icon: 'Fish', label: 'Best Wildlife', value: 'Manta Ray Snorkeling' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-male-tour-direct-or-through-app":
      return {
        title: "Should You Book a Malé Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Malé Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Malé.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/af7f58bdedab0ebed875cb07748c0749d8c66aa97018b86b12d1b426fe07bb34.jpg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Malé tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA manta-ray snorkeling trip or a Villingili half-day transfer-day escape involves real logistics — exact pickup timing around a flight, whether snorkeling gear is included. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "maldives-manta-ray-snorkeling-at-rasfari-corner", title: "Maldives: Manta Ray Snorkeling at Rasfari Corner", description: "Ask whether snorkeling gear is included before booking.", price: "From $221", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda7256a80feec399244d280cc30a4fb0b34b1375524b2ac07ebcc96b97b9332.jpg" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the trip. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number found through a resort transfer desk is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the Malé walking tour or the Villingili trip would know — whether the schedule can flex around a flight connection, or what the backup plan is for bad weather. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Malé tour — the [best tours in Malé](/maldives/male/best-tours-in-male), the guided walking tour, the manta ray snorkeling trip — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Malé; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "male-villimale-half-day-trip-with-hotel-or", title: "Malé: Villimalé Half-Day Trip with Hotel or Airport Pickup", description: "Ask whether the pickup can flex around a flight connection before booking.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f5af09ce987347f8d1f241044edbfab270566e13ee8ce8acb303cdc07014f06.jpg" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Malé tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book Malé tours direct with an operator?", a: "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Malé tour operator is legit before booking?", a: "Message them a specific question — whether gear is included, a flight-connection timing concern — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Malé tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Malé tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Malé tours direct with an operator?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Malé tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Malé tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    default:
      return null;
  }
}
