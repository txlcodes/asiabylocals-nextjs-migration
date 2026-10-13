// Hong Kong authority pages (2026-10). Same CityInfoData shape as cityInfoContent.ts.
// Hong Kong launched with 197 live tours and zero authority pages — this is the first batch.
// Reached via getHongKongInfoContent() -> getCityInfoContent(). Every tourCard slug is taken
// from the live tour list: GET /api/public/tours?country=Hong%20Kong&city=Hongkong&status=approved
// (note: the DB city field is literally "Hongkong", one word, with no hyphen — the URL segment
// is 'hong-kong' per lib/cityCountryMap.ts, which is what isInfoSlug() and this dispatcher gate on).
import type { CityInfoData } from './cityInfoContent';

export function getHongKongInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-hong-kong":
      return {
        title: "Best Time to Visit Hong Kong (2026): Month-by-Month Weather and Crowds",
        description: "Hong Kong's weather swings harder than most travelers expect — a humid, typhoon-prone summer and a dry, mild autumn-winter. Here's when to actually go, and when to avoid it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        fastFacts: [
          { icon: "Sun", label: "Best overall window", value: "October to December — dry, mild, low humidity" },
          { icon: "CloudRain", label: "Avoid if possible", value: "June to August — heat, humidity, typhoon risk" },
          { icon: "Thermometer", label: "Coolest months", value: "January-February, 14-18°C, occasional cold fronts" },
          { icon: "AlertTriangle", label: "Typhoon season", value: "May to November, peaking July-September" },
        ],
        sections: [
          {
            title: "October to December Is the Window Almost Everyone Should Target",
            content: "Hong Kong's autumn is the closest the city gets to universally pleasant weather: daytime temperatures sit in the low-to-mid 20s°C, humidity drops out of the oppressive summer range, and rainfall tapers off sharply after the typhoon season winds down in October. It's also when the skyline looks its best from the Peak or Victoria Harbour, since clearer air means fewer hazy days than summer's humidity produces. This is the period local tour operators and ferry crossings run at their fullest schedules, and it overlaps with Hong Kong's own IFC Light Show season extensions and the run-up to Christmas, when Central and Tsim Sha Tsui light displays are genuinely worth seeing even if you don't care about the shopping.\n\nThe tradeoff is that this is also peak tourist season for exactly these reasons, so expect fuller hotels and the Peak Tram queue to run longer on weekends — book timed-entry tickets like the Peak Tram or Ngong Ping 360 cable car in advance rather than assuming you can walk up.",
          },
          {
            title: "Why Summer (June-August) Is the Season Most Visitors Regret",
            content: "June through August is Hong Kong at its most physically uncomfortable: daytime humidity routinely sits above 80%, temperatures hover in the low-to-mid 30s°C, and afternoon thunderstorms are a near-daily occurrence. It's also peak typhoon season (see our typhoon guide for what a direct hit actually does to a trip), which means a real, non-trivial chance that at least one day of a week-long summer trip gets disrupted by a Signal 8 or higher warning that shuts down ferries, outdoor attractions and some transport.\n\nThe one upside: this is also the cheapest period for hotels, and indoor attractions — the Hong Kong Museum of History, big shopping malls, most dim sum restaurants — are unaffected by the heat. If you're summer-only on your calendar, build the trip around air-conditioned indoor time in the hottest hours and save the Peak, Lantau Island and harbour walks for early morning or after sunset.",
            tourCard: { slug: "hk-victoria-sunset-harbour-cruise-dim-sum-tasting", title: "HK Victoria Sunset Harbour Cruise Dim Sum Tasting Night Tour", description: "A sunset cruise and dim sum tasting sidesteps the worst of the midday summer heat entirely.", price: "From $73", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b4e977f13c491c10e6e35d2a0c05539387c38827e122f004319c18d33786167.jpg" },
          },
          {
            title: "Winter (January-March): Cool, Dry, and Underrated",
            content: "Hong Kong winters are mild by most standards — daytime highs of 14-18°C with occasional cold fronts that can drop it closer to 10°C, rarely lower — but locals genuinely bundle up because the humidity makes even moderate cold feel sharper than the number suggests, and most buildings outside hotels aren't heavily heated. Rainfall is low, skies are often clear, and this is arguably the best season for hiking the Dragon's Back trail or walking the full Lantau Island loop without the summer sweat.\n\nSpring (March-May) sits in between: warming up, more humid, with scattered rain building toward the early typhoon season, but still clearly more comfortable than summer. If your dates are flexible, aim for the back half of October through early December for the best balance of weather, daylight and reasonable crowds.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Hong Kong?", a: "November is generally the single best month: typhoon season has wound down, humidity is low, and daytime temperatures sit in a comfortable low-to-mid 20s°C range." },
          { q: "Should I avoid Hong Kong in summer?", a: "Not entirely, but go in knowing it's hot, humid and carries real typhoon risk from May through November, peaking July-September. Plan outdoor sightseeing for early morning or evening and keep a flexible itinerary." },
          { q: "Is Hong Kong cold in winter?", a: "Mildly — daytime highs of 14-18°C, occasionally lower during cold fronts. It rarely drops near freezing, but high humidity makes it feel colder than the number alone suggests." },
          { q: "When is Hong Kong typhoon season?", a: "Officially May through November, with the highest risk concentrated in July, August and September. See our typhoon season guide for what a Signal 8 warning actually means for your day." },
        ],
      };

    case "things-to-do-in-hong-kong":
      return {
        title: "25+ Best Things to Do in Hong Kong (2026): The Complete List",
        description: "From the Peak Tram and Big Buddha to dim sum and the Star Ferry — the real list of what's worth your time in Hong Kong, organized by how much time you have.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/78b8cdc0b3b074980e2b7e9d89315712fee9c9444af006d906d3756218b124de.jpg",
        fastFacts: [
          { icon: "Mountain", label: "Top attraction", value: "Victoria Peak & Peak Tram" },
          { icon: "Landmark", label: "Best half-day trip", value: "Lantau Island (Big Buddha + Ngong Ping 360)" },
          { icon: "Utensils", label: "Don't skip", value: "A proper dim sum lunch, not a tourist-menu version" },
          { icon: "Ship", label: "Cheapest great view", value: "Star Ferry across Victoria Harbour, under HK$5" },
        ],
        sections: [
          {
            title: "The Essentials: What Everyone Should Do At Least Once",
            content: "Hong Kong Island and Kowloon face each other across Victoria Harbour, and that geography is the backbone of almost everything worth doing here. Start with the **Peak Tram** up to Victoria Peak — the funicular itself, not just the view at the top, is a 19th-century piece of engineering that climbs a genuinely steep gradient through the hillside — and the Sky Terrace 428 viewing deck at the summit gives the single best full-skyline photograph in the city. Pair it, on a different day or even the same evening, with the **Star Ferry** crossing between Central and Tsim Sha Tsui: a working ferry route that's been running since 1888, costs a few Hong Kong dollars, and gives a harbour-level view of the skyline that the Peak can't.\n\nFor food, treat **dim sum** as a non-negotiable, not a box to tick — a proper small-group dim sum lunch with 20-30 dishes shows you a much wider range than ordering off a hotel breakfast buffet ever will. And for an evening, the free **Symphony of Lights** show over the harbour (nightly, roughly 8pm) is worth timing a dinner or ferry ride around, even though it's a notch less dazzling than the hype suggests.",
            tourCard: { slug: "hong-kong-peak-tram-sky-terrace-428-photos-tour", title: "Hong Kong: Peak Tram Sky Terrace 428 & Photos Tour", description: "The funicular ride plus the viewing deck, without the ticket-booking hassle.", price: "From $119", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
          {
            title: "Lantau Island: A Different Hong Kong Entirely",
            content: "Most first-time visitors picture Hong Kong as skyscrapers and harbour, but **Lantau Island**, reachable by MTR and cable car, is mountainous, rural and home to the **Big Buddha (Tian Tan Buddha)** at Ngong Ping — a 34-metre bronze statue reached either by a 268-step climb or the **Ngong Ping 360 cable car**, a 25-minute ride over genuinely dramatic terrain that's worth doing for its own sake. The adjacent Ngong Ping Village and Po Lin Monastery round out a half-day easily, and most operators combine it with **Tai O**, a stilt-house fishing village on the island's western edge, for a totally different side of Hong Kong — slower, older, and a sharp contrast to Central's glass towers.\n\nBudget a half day minimum for Lantau; the cable car queue alone can run long on weekends, and the island rewards slowing down rather than rushing the Buddha photo and leaving.",
            tourCard: { slug: "hong-kong-lantau-vip-priority-cable-car-big", title: "Hong Kong: Lantau VIP Priority Cable Car, Big Buddha & Tai O", description: "Priority cable car access plus the Tai O fishing village in one day — skips the weekend queue.", price: "From $131", duration: "7 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b06e15f219028b4aa5249305d094571ec9394403bf321771f4700b13020c336.jpg" },
          },
          {
            title: "Kowloon's Street Life: Temple Street and the Markets",
            content: "Across the harbour, Kowloon's older districts — Mong Kok, Yau Ma Tei, Sham Shui Po — hold the markets and street culture that the Central skyline hides entirely. **Temple Street Night Market** in Yau Ma Tei runs from late afternoon into the night with street food stalls, fortune tellers, and stall after stall of souvenirs and knockoff goods — genuinely more atmosphere than bargain, so go for the experience rather than expecting deep discounts. Nearby, the **Jade Market** and the wet markets of Sham Shui Po give a much more local, unpolished look at how the neighborhood actually shops and eats, well away from the tourist strip of Nathan Road.\n\nFor shopping with air conditioning, Causeway Bay and Tsim Sha Tsui's malls cover the mainstream end; for something more specific, Mong Kok's electronics and sneaker streets are worth a wander even if you're not buying.",
            tourCard: { slug: "hong-kong-yau-ma-tei-temple-street-night-walking", title: "Hong Kong: Yau Ma Tei Temple Street Night Walking Tour", description: "A guided evening through Temple Street's market stalls, fortune tellers and street food.", price: "From $228", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png" },
          },
          {
            title: "If You Have More Time: Disneyland, Hiking and Macau",
            content: "**Hong Kong Disneyland** is a smaller, more compact version of the park than its US or Tokyo counterparts, which makes it genuinely doable as a single focused day rather than a multi-day commitment — good for families with limited time. Outdoor types should look at the **Dragon's Back** hiking trail on Hong Kong Island's south side, a ridgeline walk with harbour and coastline views that feels nothing like the dense urban core a 30-minute taxi ride away.\n\nAnd if your trip has more than three days, a **day trip to Macau** is genuinely worth the roughly one-hour high-speed ferry crossing — Portuguese colonial architecture, a very different food culture, and (if that's your interest) the casinos, all reachable without an overnight stay. See our dedicated Macau day-trip guide for the logistics.",
            tourCard: { slug: "hong-kong-disneyland-bibbidi-bobbidi-boutique", title: "Hong Kong Disneyland: Bibbidi Bobbidi Boutique Package", description: "A Disneyland day with the princess-makeover package bundled in — popular with families.", price: "From $113", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg" },
          },
        ],
        faqs: [
          { q: "What is Hong Kong's number one attraction?", a: "Victoria Peak, reached by the historic Peak Tram funicular, is the single most-visited attraction, mainly for the full-skyline view from the Sky Terrace 428 viewing deck at the top." },
          { q: "Is one day enough to see Hong Kong?", a: "You can hit the main highlights — the Peak, Star Ferry, a dim sum lunch — in a focused single day, but Hong Kong genuinely rewards 3+ days once you add Lantau Island, Kowloon's markets and a Macau side trip." },
          { q: "What is there to do in Hong Kong besides shopping?", a: "A great deal: the Peak Tram and harbour views, the Big Buddha and cable car on Lantau Island, Temple Street's night market, hiking trails like Dragon's Back, and a genuinely deep local food scene built around dim sum and street food." },
          { q: "Is Hong Kong good for a short layover?", a: "Yes — the Peak Tram, Star Ferry and a dim sum meal can realistically fit into a single layover day if your connection gives you 10+ hours, since the airport sits on its own island with a direct express train into the city." },
        ],
      };

    case "hong-kong-travel-guide-2026":
      return {
        title: "Hong Kong Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Hong Kong — getting in, getting around, money, language, food and what makes this city different from mainland China.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e5f8ade148fd775fd2803eaba29a102d35124f5c1a5d05081c9a2ed202a48d0a.jpg",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "Separate immigration from mainland China — most Western nationalities visa-free" },
          { icon: "DollarSign", label: "Currency", value: "Hong Kong Dollar (HKD), pegged to USD" },
          { icon: "Train", label: "Getting around", value: "MTR subway, trams, ferries — Octopus card covers all of it" },
          { icon: "MessageCircle", label: "Languages", value: "Cantonese and English both official; English widely spoken" },
        ],
        sections: [
          {
            title: "Hong Kong Is Not Mainland China — Entry Rules Are Different",
            content: "The single most useful thing to understand before booking: Hong Kong operates its own immigration system, separate from mainland China, under the 'one country, two systems' framework. This means the mainland Chinese visa rules — the ones requiring most Western nationals to apply in advance — do not apply here. Hong Kong has one of the more generous visa-free entry regimes in Asia: visitors from over 170 countries can enter without a visa, with permitted stays ranging from 7 to 180 days depending on nationality (see our dedicated visa guide for specifics by passport). If your trip also includes mainland China or Macau, each has its own separate entry requirement, so don't assume one visa or exemption covers all three.\n\nThe airport, Hong Kong International Airport on Lantau Island, connects to the city centre via the Airport Express train (about 24 minutes to Central) or cheaper but slower bus options.",
          },
          {
            title: "Money, Cards and the Octopus Card",
            content: "The Hong Kong Dollar (HKD) is pegged to the US Dollar at a stable rate, which makes budgeting predictable compared to currencies that float freely. Credit cards are widely accepted in restaurants, malls and hotels, but the single most useful purchase for any visitor is an **Octopus card** — a tap-to-pay smart card that covers the MTR, buses, trams, ferries and a huge range of shops and restaurants (see our dedicated Octopus card guide for exactly how to get one and what it costs).\n\nTipping is not deeply embedded in Hong Kong culture the way it is in the US — restaurants typically add a 10% service charge automatically, and further tipping is optional, not expected, for most services.",
          },
          {
            title: "Getting Around: The MTR Does Most of the Work",
            content: "Hong Kong's MTR subway system is fast, clean, frequent and covers almost everywhere a visitor needs to go, including a direct line to the airport. It's genuinely one of the best metro systems in Asia for a short-term visitor to navigate without local help — stations are signed in English as well as Chinese, and announcements are bilingual. For getting across the harbour specifically, the **Star Ferry** is cheaper and more scenic than the MTR for short Central-to-Kowloon hops, and the century-old **Hong Kong Tramways** ('ding ding') along the north shore of Hong Kong Island is a slow but charming way to see Central, Wan Chai and Causeway Bay from street level.\n\nTaxis are plentiful and metered but language can be a barrier with older drivers outside tourist areas — having your destination written in Chinese characters (hotels will do this for you) smooths this out considerably.",
            tourCard: { slug: "h1hong-kong-central-escalator-tram-and-peak-tram", title: "(H1)Hong Kong: Central Escalator, Tram, and Peak Tram Tour", description: "A guided loop through Hong Kong's distinctive transit landmarks — the Mid-Levels escalator, the tram, and the Peak Tram.", price: "From $112", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3ceacc25ef88c5e40dab7ac06997ce1f95254de542309fec168d5c07e50ca0f.png" },
          },
          {
            title: "Food, Language and Everyday Etiquette",
            content: "Cantonese is the dominant everyday language, distinct from Mandarin in both speech and the slang used, but English is an official language and widely spoken in hospitality, retail and by younger residents — menus are typically bilingual in tourist-facing restaurants. Dim sum is the signature food experience, traditionally a morning-to-early-afternoon meal built around small steamed and fried dishes ordered off a trolley or checklist; see our dedicated dim sum guide for how to order like you know what you're doing.\n\nHong Kong is dense, fast-paced and efficient rather than overtly warm in first interactions — it's a working city before it's a tourist city, and locals generally appreciate visitors who match that pace rather than expecting slow, leisurely service everywhere.",
          },
        ],
        faqs: [
          { q: "Do I need a visa for Hong Kong?", a: "Most Western nationalities do not — Hong Kong's visa-free regime covers 170+ countries with permitted stays from 7 to 180 days depending on passport. See our dedicated visa guide for exact figures by nationality." },
          { q: "What currency does Hong Kong use?", a: "The Hong Kong Dollar (HKD), pegged to the US Dollar at a stable rate. Credit cards are widely accepted; an Octopus card covers most transport and small purchases." },
          { q: "Is English spoken in Hong Kong?", a: "Yes — English is an official language alongside Cantonese and is widely spoken in hospitality, retail and by most younger residents, though Cantonese remains the dominant everyday language." },
          { q: "Is Hong Kong the same as mainland China for visa purposes?", a: "No. Hong Kong runs its own separate immigration system under 'one country, two systems'. A mainland China visa requirement or exemption does not automatically apply to Hong Kong, and vice versa." },
        ],
      };

    case "hong-kong-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Hong Kong Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Hong Kong itinerary built around the Peak, the harbour and a proper dim sum lunch — honest about what fits and what doesn't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg",
        sections: [
          {
            title: "Morning: Victoria Peak Before the Crowds",
            content: "Start early — the Peak Tram's queue builds fast after 10am, and a 9am ride up gets you the view before the midday haze and crowds set in. Spend 60-90 minutes at the Sky Terrace 428 viewing deck and the surrounding Peak Garden paths; it's a genuinely different skyline view than the harbour-level shots everyone has seen. Walk back down via one of the Peak's hiking paths if you want the exercise, or take the tram back down to Central to save time.",
            tourCard: { slug: "hong-kong-peak-tram-sky-terrace-428-photos-tour", title: "Hong Kong: Peak Tram Sky Terrace 428 & Photos Tour", description: "Pre-booked Peak Tram and Sky Terrace access — skip the ticket-counter line entirely.", price: "From $119", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
          {
            title: "Midday: Dim Sum, Then the Star Ferry",
            content: "Head back into Central for a proper dim sum lunch — this is the one meal of the day worth planning around rather than grabbing something quick. From Central, walk to the Star Ferry pier and take the short, cheap crossing to Tsim Sha Tsui on the Kowloon side. The ferry alone takes under 10 minutes but gives a harbour-level view of the skyline the Peak can't replicate, and it's genuinely one of the best-value things to do in the city at a few Hong Kong dollars a ride.",
            tourCard: { slug: "hk-sail-on-star-ferry-to-million-dollars-view", title: "HK: sail on Star ferry to million-dollars view Central Tour", description: "A guided Star Ferry crossing that explains the harbour skyline as you cross it.", price: "From $29", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg" },
          },
          {
            title: "Afternoon and Evening: Tsim Sha Tsui and the Symphony of Lights",
            content: "Spend the afternoon along the Tsim Sha Tsui promenade — the Avenue of Stars, the clock tower, and the shopping along Nathan Road and Canton Road if that interests you. As evening falls, grab a spot along the promenade for the nightly **Symphony of Lights** show over the harbour, roughly 8pm, which is a reasonable payoff for the time even if it's less dramatic than the marketing suggests.\n\n**The honest tradeoff of a one-day itinerary:** you will not have time to add Lantau Island's Big Buddha, a Kowloon night market walk, or anything beyond a quick skim of Tsim Sha Tsui. If any of those matter more to you than the Peak-to-harbour loop above, swap this plan rather than trying to cram everything in — Hong Kong genuinely rewards a 3-day trip over a 1-day one; see our 3-day itinerary for the fuller version.",
          },
        ],
        faqs: [
          { q: "Can you see Hong Kong in one day?", a: "You can realistically cover the Peak Tram, a dim sum lunch, the Star Ferry crossing and the Tsim Sha Tsui waterfront in one focused day. Lantau Island, Kowloon's markets and Macau won't fit — those need additional days." },
          { q: "What's the best order for a Hong Kong day trip?", a: "Peak Tram first thing in the morning (before the queue builds), dim sum around midday, then cross to Kowloon via the Star Ferry in the afternoon, finishing at the harbour for the evening Symphony of Lights show." },
          { q: "Is the Peak Tram worth doing if I only have one day?", a: "Yes — it's the single highest-value stop for a short visit, combining a genuinely distinctive ride with the best full-skyline view in the city, in about 90 minutes including the tram itself." },
        ],
      };

    case "hong-kong-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Hong Kong Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Hong Kong enough room for the Peak, Lantau Island's Big Buddha, Kowloon's markets and a proper dim sum crawl — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/780a1532697b1ffe23798f0e598de19e9c1fcca32c911cbd86b31a6eeb58b68d.png",
        sections: [
          {
            title: "Day 1: Hong Kong Island — the Peak, the Harbour, Central",
            content: "Follow the one-day plan as your first day: Peak Tram early, dim sum for lunch, Star Ferry across to Tsim Sha Tsui in the afternoon, Symphony of Lights at night. This gives you the headline sights immediately and leaves days two and three free to go deeper without rushing.",
          },
          {
            title: "Day 2: Lantau Island — Big Buddha, Ngong Ping 360 and Tai O",
            content: "Dedicate a full day to Lantau Island. Take the Ngong Ping 360 cable car — a 25-minute ride over mountainous terrain that's worth doing in its own right — up to the Big Buddha and Po Lin Monastery, then continue to **Tai O**, a stilt-house fishing village that feels like a different country from Central's towers. This is comfortably a half-to-full day depending on how long you linger, and it's the single best contrast to the skyline-and-shopping version of Hong Kong most visitors expect.",
            tourCard: { slug: "premium-lantau-tour-vip-cable-car-big-buddha-tai", title: "Premium Lantau Tour: VIP Cable Car, Big Buddha, Tai O, Lunch", description: "The cable car, the Buddha, Tai O village and lunch bundled into one full day — no separate bookings to juggle.", price: "From $224", duration: "7 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9245ae2573acd2bdc4fbcf85d76ae21ffbe9e4222855c692577cd7c011c4c735.jpg" },
          },
          {
            title: "Day 3: Kowloon's Markets and Street Culture",
            content: "Spend your final day in Kowloon's older districts. Walk the markets of **Mong Kok** and **Yau Ma Tei** during the day, then stay for **Temple Street Night Market** as evening sets in — street food, stalls and fortune tellers in a totally different register from Hong Kong Island's financial-district polish. Sham Shui Po's wet markets and the Jade Market round out a morning if you want a less touristy version of the same theme.\n\nIf you have any energy left on the evening of day three, a harbour-cruise dinner is a good way to close the trip, giving you one more skyline view from the water before you fly out.",
            tourCard: { slug: "hong-kong-yau-ma-tei-temple-street-night-walking", title: "Hong Kong: Yau Ma Tei Temple Street Night Walking Tour", description: "An evening walk through Temple Street's stalls and street food — the right way to close out a Kowloon day.", price: "From $228", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png" },
          },
          {
            title: "If You Have a 4th Day: Macau or Disneyland",
            content: "A fourth day opens up a genuine day trip to **Macau** by high-speed ferry (around an hour each way) for Portuguese colonial architecture and a very different food scene, or a full day at **Hong Kong Disneyland** if traveling with kids. Either is a clean, self-contained add-on rather than something you need to squeeze into the three-day core above.",
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Hong Kong?", a: "Yes, for a well-rounded first visit — Hong Kong Island's Peak and harbour, a full day on Lantau Island for the Big Buddha and Tai O, and a day in Kowloon's markets covers the city's genuinely different sides without rushing." },
          { q: "Should I add Macau to a 3-day Hong Kong trip?", a: "Only as a 4th day, not instead of one of the three core days above — Macau is a worthwhile but separate day trip, roughly an hour each way by ferry, and shouldn't eat into Lantau Island or Kowloon time." },
          { q: "What's the best day to do Lantau Island?", a: "Any weekday, if you can choose — the Ngong Ping 360 cable car queue runs noticeably longer on weekends. Aim to arrive at opening time regardless of day." },
        ],
      };

    case "hong-kong-visa-guide":
      return {
        title: "Hong Kong Visa Guide 2026: Who Needs One and Who Doesn't",
        description: "Hong Kong runs a separate, more generous visa-free regime than mainland China. Here's who can enter without a visa, for how long, and what still needs arranging in advance.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e5f8ade148fd775fd2803eaba29a102d35124f5c1a5d05081c9a2ed202a48d0a.jpg",
        fastFacts: [
          { icon: "Globe", label: "Visa-free nationalities", value: "170+ countries" },
          { icon: "Clock", label: "US / Canada / Australia / NZ / Singapore", value: "Up to 90 days visa-free" },
          { icon: "Clock", label: "UK citizens", value: "Up to 180 days visa-free" },
          { icon: "FileText", label: "Passport validity", value: "At least 1 month beyond your stay, required for all visitors" },
        ],
        sections: [
          {
            title: "Hong Kong's Entry Rules Are Separate From Mainland China's",
            content: "This is the detail that trips up travelers combining a China and Hong Kong trip: **Hong Kong operates its own immigration system** under the 'one country, two systems' framework, distinct from mainland China's. Mainland China is not visa-free for most Western nationalities and requires an application in advance (see our China visa guide if your trip includes the mainland); Hong Kong is a different story entirely, with one of the more generous visa-free regimes in Asia. Visitors from more than 170 countries can enter Hong Kong without any visa application at all, for periods that vary by nationality.\n\nThis also cuts the other way: a Hong Kong visa exemption does not extend into mainland China, and vice versa. If your itinerary includes both, treat them as two separate entry requirements from the start, not one combined trip.",
          },
          {
            title: "How Long You Can Stay, By Nationality",
            content: "The permitted visa-free stay varies meaningfully by passport. **United States, Canada, Australia, New Zealand and Singapore** citizens can stay up to **90 days** without a visa. **United Kingdom** citizens get the longest standard exemption at up to **180 days**. Most EU nationalities, along with a long list of others, also qualify for visa-free entry, generally in the 30-90 day range depending on the specific country.\n\nShorter stays apply to some nationalities: **Thailand, Indonesia and Qatar** citizens get 30 days; **Bhutan, the Philippines and Haiti** get 14 days. **Indian passport holders** get 14 days visa-free but must complete a **Pre-Arrival Registration (PAR)** online before traveling — this is not optional and is a different requirement from a full visa application, but skipping it can mean denied boarding. Always check the current list for your specific passport on the Hong Kong Immigration Department's official site before booking, since individual country terms are reviewed periodically.",
          },
          {
            title: "What You Need Regardless of Visa-Free Status",
            content: "Every visitor, visa-free or not, needs a passport valid for **at least one month beyond** the planned stay — immigration officers can and do deny entry for passports cutting it closer than that, even for otherwise visa-exempt nationalities. It's also standard practice to be asked for proof of onward travel (a return or connecting flight) and sometimes accommodation details at the immigration counter, so have these readily accessible rather than buried in email.\n\nIf your nationality isn't on the visa-free list, or you plan to stay longer than the exempt period, you'll need to apply for a visa through a Chinese embassy or consulate (Hong Kong visas, despite the separate immigration system, are issued through Chinese diplomatic missions) well in advance of travel — don't assume this can be arranged on arrival.",
          },
        ],
        faqs: [
          { q: "Do Americans need a visa for Hong Kong?", a: "No — US citizens can enter visa-free for up to 90 days. This is separate from mainland China, where most Americans do need a visa in advance." },
          { q: "How long can UK citizens stay in Hong Kong without a visa?", a: "Up to 180 days, the longest standard visa-free allowance Hong Kong grants to any nationality." },
          { q: "Do Indians need a visa for Hong Kong?", a: "Indian passport holders get 14 days visa-free, but must complete an online Pre-Arrival Registration (PAR) before traveling — a lighter requirement than a full visa, but still mandatory." },
          { q: "Is a Hong Kong visa the same as a China visa?", a: "No. Hong Kong has its own separate immigration system from mainland China. A China visa or exemption does not cover Hong Kong, and a Hong Kong exemption does not cover mainland China." },
        ],
      };

    case "octopus-card-guide":
      return {
        title: "Octopus Card Guide 2026: The One Thing Every Hong Kong Visitor Should Buy",
        description: "What the Octopus card actually costs, where to buy one, and why it's worth getting on arrival rather than paying cash for every MTR ride and ferry crossing.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3ceacc25ef88c5e40dab7ac06997ce1f95254de542309fec168d5c07e50ca0f.png",
        fastFacts: [
          { icon: "CreditCard", label: "Tourist Octopus Card", value: "HK$39, no refundable deposit" },
          { icon: "CreditCard", label: "Standard Adult Card", value: "HK$150 (HK$100 stored value + HK$50 refundable deposit)" },
          { icon: "Smartphone", label: "Digital Octopus (iPhone)", value: "Free, set up in-app in under 2 minutes" },
          { icon: "MapPin", label: "Where to buy", value: "Airport MTR counters, vending machines, 7-Eleven stores citywide" },
        ],
        sections: [
          {
            title: "What It Actually Is and Why You Want One",
            content: "The Octopus card is a rechargeable, contactless smart card that covers almost every small payment a visitor makes in Hong Kong: the MTR subway, buses, trams, the Star Ferry, and a long list of convenience stores, fast-food chains and vending machines. You tap it on a reader rather than queuing at a ticket machine for every single MTR journey, which on a multi-day trip adds up to real time saved, not just convenience.\n\nIt is not strictly required — single-journey MTR tickets exist, and some visitors get by on cash for everything — but given how often you'll be tapping through a turnstile or boarding a tram, almost every repeat visitor ends up recommending it to first-timers specifically because the alternative (counting exact change or queuing at ticket machines repeatedly) is a worse use of trip time.",
          },
          {
            title: "Which Version to Buy: Tourist Card vs Standard vs Digital",
            content: "There are effectively three options. The **Tourist Octopus Card** costs **HK$39** with no refundable deposit — the fee is a flat cost, not money you get back, but it's the simplest option if you don't want to deal with a refund process at the end of your trip. The **Standard Adult Octopus Card** costs **HK$150**, split into **HK$100 of usable stored value** and a **HK$50 refundable deposit** you get back (minus a small service charge if returned within three months) when you hand the card back at an MTR customer service counter before leaving.\n\nIf you have a compatible **iPhone**, **Digital Octopus** is the best option of the three: it's free, has no deposit, sets up inside the Apple Wallet app in under two minutes, and tops up instantly with a linked card rather than requiring a physical top-up. Android support has historically lagged behind iPhone for Octopus's digital version, so check current compatibility if you're on Android before counting on it.",
          },
          {
            title: "Where to Buy and Top Up",
            content: "At Hong Kong International Airport, Octopus cards are sold at **MTR Customer Service Centres** in the arrivals hall and near the Airport Express platforms, as well as 24-hour vending machines. Once in the city, **7-Eleven** and other convenience store chains sell the tourist version and handle top-ups, as do MTR station customer service counters and add-value machines inside most stations.\n\nTo use it, simply place the card flat on the reader at a turnstile, bus farebox or shop counter and hold it there until you hear the confirmation beep — the display usually shows your remaining balance after each tap, which is worth glancing at so you're not caught short mid-trip with an empty card at a turnstile.",
          },
        ],
        faqs: [
          { q: "How much does an Octopus card cost?", a: "The Tourist Octopus Card is HK$39 with no deposit. The Standard Adult Card is HK$150, split into HK$100 usable value plus a HK$50 refundable deposit. Digital Octopus on compatible iPhones is free." },
          { q: "Can I get a refund on my Octopus card deposit?", a: "Yes, for the Standard Adult Card — return it at an MTR customer service counter before leaving and you'll get the HK$50 deposit back, minus a small service charge if returned within three months of purchase. The Tourist card's HK$39 fee is not refundable." },
          { q: "Where can I buy an Octopus card in Hong Kong?", a: "MTR Customer Service Centres and vending machines at the airport and most MTR stations, plus 7-Eleven and other convenience stores across the city for the tourist version and top-ups." },
          { q: "Does Octopus work on the Star Ferry and buses?", a: "Yes — Octopus covers the MTR, buses, trams, the Star Ferry, and a wide range of shops, convenience stores and fast-food chains, making it the single most useful purchase for a Hong Kong visit." },
        ],
      };

    case "peak-tram-tickets-guide":
      return {
        title: "Hong Kong Peak Tram Tickets Guide 2026: Prices and the Queue Reality",
        description: "What the Peak Tram and Sky Terrace 428 actually cost, the real difference between ticket tiers, and why booking ahead matters more than most guides admit.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        fastFacts: [
          { icon: "Ticket", label: "Sky Pass round-trip (adult)", value: "HK$182; children/seniors HK$118" },
          { icon: "Ticket", label: "Single-journey (adult)", value: "HK$146; children/seniors HK$95" },
          { icon: "Eye", label: "Sky Terrace 428 only", value: "HK$80 adult, HK$50 child/senior" },
          { icon: "Star", label: "Premium option", value: "Ruby Special, HK$342/adult — priority boarding + dedicated car" },
        ],
        sections: [
          {
            title: "The Peak Tram Is the Attraction, Not Just Transport",
            content: "It's worth being clear about what you're actually paying for: the **Peak Tram** itself, a funicular railway that has run up Victoria Peak since 1888, is a genuine historic attraction in its own right, climbing a steep gradient through dense hillside with views that open up dramatically as you ascend. The **Sky Terrace 428** at the top is the open-air viewing deck that gives the full, unobstructed 360-degree skyline and harbour view most people are chasing for photos.\n\nTicket pricing is typically bundled as a **'Sky Pass'** covering both the tram ride and Sky Terrace access, though you can buy either separately. If you only want the viewing deck and are happy walking or taking a bus up, Sky Terrace 428 alone is **HK$80 for adults, HK$50 for children and seniors** — a meaningfully cheaper option if the tram ride itself isn't the priority for you.",
          },
          {
            title: "Ticket Prices, Tier by Tier",
            content: "The standard **Sky Pass round-trip** (tram both ways plus Sky Terrace access) runs **HK$182 for adults, HK$118 for children and seniors**. A **single-journey** version (tram one way plus Sky Terrace) costs **HK$146 for adults, HK$95 for children and seniors** — useful if you plan to walk down via one of the Peak's hiking trails rather than taking the tram back.\n\nThere's also a premium tier, the **Ruby Special**, at **HK$342 per adult and HK$222 per child/senior**, which includes priority boarding (skipping the general queue), a dedicated tram car, a welcome drink, and express Sky Terrace access. For most visitors this is unnecessary, but on a short layover or during peak-season weekends when the standard queue can run well over an hour, it's a legitimate way to buy back time.\n\nOnline bookings through tour platforms frequently discount these official rates and bundle photo services or guided context — worth comparing against the standalone ticket price before you go, especially since advance booking guarantees a timed entry slot rather than joining a same-day line.",
            tourCard: { slug: "hong-kong-city-highlights-tour-with-peak-tram-ride", title: "Hong Kong: City Highlights Tour with Peak Tram Ride", description: "Peak Tram access bundled with a guided city highlights loop, avoiding a separate ticket-counter trip.", price: "From $129", duration: "3.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5196545510eb1c4bad8b7f6e41d941809ee7398f82fe41fef3cdf72211b1aa7e.jpg" },
          },
          {
            title: "The Queue Reality: When to Go",
            content: "Here's the part most official pricing pages don't mention: on weekends and during peak tourist season (October-December, and around major holidays), the walk-up ticket queue at the Peak Tram's Garden Road terminus can run well over an hour, especially mid-morning through late afternoon. Arriving at or near opening time (typically 8am) is the single most effective way to avoid this without paying for a premium ticket. The second-best option is booking a timed-entry ticket online in advance through the official Peak Tram site or a tour platform, which generally lets you skip the general ticket-purchase line even if there's still some wait to board.\n\nAvoid the worst of it entirely by going either at opening or in the last hour or two before sunset — the light for photos is often better then anyway, and the crowd thins out as dinner time approaches.",
          },
        ],
        faqs: [
          { q: "How much is the Peak Tram ticket?", a: "A round-trip Sky Pass (tram plus Sky Terrace 428) is HK$182 for adults, HK$118 for children/seniors. Sky Terrace access alone, without the tram, is HK$80/HK$50." },
          { q: "Should I book Peak Tram tickets in advance?", a: "Yes, especially on weekends or during peak season (October-December) — walk-up queues can run over an hour. Advance online booking secures a timed slot and generally skips the ticket-purchase line." },
          { q: "What is Sky Terrace 428?", a: "The open-air viewing deck at the top of Victoria Peak, giving a 360-degree skyline and harbour view. It's usually bundled with Peak Tram tickets as a 'Sky Pass' but can be bought alone." },
          { q: "Is the Peak Tram worth the money?", a: "Most visitors say yes — it's a genuine 19th-century engineering attraction in its own right, not just a way to reach the viewpoint, and the Sky Terrace view is regularly cited as the best single photo opportunity in the city." },
        ],
      };

    case "star-ferry-guide":
      return {
        title: "Hong Kong Star Ferry Guide 2026: History, Routes and Why It's Worth Doing",
        description: "The Star Ferry has crossed Victoria Harbour since 1888 and still costs only a few Hong Kong dollars — here's why it's one of the best-value things to do in the city.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg",
        fastFacts: [
          { icon: "Clock", label: "Running since", value: "1888" },
          { icon: "DollarSign", label: "Fare", value: "Under HK$5 one way (lower deck, Octopus pay)" },
          { icon: "MapPin", label: "Main routes", value: "Central ↔ Tsim Sha Tsui; Wan Chai ↔ Tsim Sha Tsui" },
          { icon: "Clock", label: "Crossing time", value: "Under 10 minutes" },
        ],
        sections: [
          {
            title: "A Working Ferry That's Also One of the Best Views in the City",
            content: "The Star Ferry is not a tourist attraction dressed up to look like transport — it's a genuine working ferry service that's carried passengers across Victoria Harbour since 1888, making it one of the oldest continuously operating passenger ferry services in the world. That history is part of why it's worth doing even though the MTR could get you between Hong Kong Island and Kowloon faster: the green-and-white boats, the low harbour-level vantage point on the skyline, and the fact that locals genuinely still use it for daily commuting give it a texture the subway can't match.\n\nAt under HK$5 for a one-way trip on the lower deck, paid with cash or an Octopus tap, it's also one of the cheapest things to do in the entire city relative to the view it delivers.",
          },
          {
            title: "Routes and Timing",
            content: "The two main routes are **Central ↔ Tsim Sha Tsui** and **Wan Chai ↔ Tsim Sha Tsui**, both running frequently throughout the day into the evening. The Central-Tsim Sha Tsui crossing is the one most visitors use, since it links Hong Kong Island's main business and shopping district directly to Kowloon's Tsim Sha Tsui waterfront, where the Avenue of Stars and the nightly Symphony of Lights viewing spot are located.\n\nFor the best experience, time a crossing for **early evening**, roughly 30-45 minutes before the Symphony of Lights show (around 8pm) — you get the skyline in changing light, a short wait on the Tsim Sha Tsui side, and a good vantage point for the light show without fighting for promenade space afterward.",
            tourCard: { slug: "hk-sail-on-star-ferry-to-million-dollars-view", title: "HK: sail on Star ferry to million-dollars view Central Tour", description: "A guided crossing with context on the harbour's history and skyline landmarks as you sail.", price: "From $29", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg" },
          },
          {
            title: "Upper Deck vs Lower Deck",
            content: "The Star Ferry sells two fare tiers: a slightly cheaper lower deck and a marginally pricier upper deck, both under HK$5-6 either way, so the cost difference is close to negligible. The **upper deck** is generally preferred for photos and views since it sits higher above the water with less obstruction from the boat's own structure, while the lower deck puts you closer to the water itself. Either way, pay with Octopus at the turnstile rather than queuing for a paper ticket — it's faster and the fare difference from cash is minimal.",
          },
        ],
        faqs: [
          { q: "How much does the Star Ferry cost?", a: "Under HK$5 for a one-way lower-deck trip, slightly more for the upper deck. It's one of the cheapest attractions in the city relative to the view." },
          { q: "How long has the Star Ferry been running?", a: "Since 1888, making it one of the oldest continuously operating passenger ferry services in the world and a genuine piece of Hong Kong transport history, not a tourist recreation." },
          { q: "Which Star Ferry route should I take?", a: "Central to Tsim Sha Tsui is the main route most visitors use, linking Hong Kong Island's business district directly to Kowloon's waterfront promenade." },
          { q: "When is the best time to ride the Star Ferry?", a: "Early evening, roughly 30-45 minutes before the 8pm Symphony of Lights show, gives you good skyline light and a solid vantage point for the light show afterward." },
        ],
      };

    case "big-buddha-ngong-ping-360":
      return {
        title: "Big Buddha & Ngong Ping 360 Guide 2026: Cable Car, Tickets and What to Expect",
        description: "The Tian Tan Buddha on Lantau Island and the cable car ride to reach it — how long it takes, what it costs, and whether the cable car or the 268-step climb is the better call.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/207dd90465dd6b901d24827a7b867448fc42101b69682ca46ced4a8e0c673833.jpg",
        fastFacts: [
          { icon: "Mountain", label: "Statue height", value: "34 metres, bronze, seated Buddha" },
          { icon: "CableCar", label: "Ngong Ping 360 cable car", value: "~25-minute ride each way" },
          { icon: "Footprints", label: "Alternative to cable car", value: "268-step climb to the Buddha's base" },
          { icon: "MapPin", label: "Location", value: "Ngong Ping, Lantau Island — reached via MTR + cable car or bus" },
        ],
        sections: [
          {
            title: "What You're Actually Visiting",
            content: "The **Tian Tan Buddha**, generally called the Big Buddha, is a 34-metre bronze statue of a seated Buddha at Ngong Ping on Lantau Island, completed in 1993 and one of the largest outdoor seated bronze Buddha statues anywhere. It sits beside **Po Lin Monastery**, an active Buddhist monastery that predates the statue, and the surrounding **Ngong Ping Village** — a small purpose-built complex of shops, a tea house and attractions that functions as the arrival point for most visitors.\n\nReaching the statue itself from the village requires climbing **268 steps** up to its base — there's no way around this part on foot, though the climb is gradual with landings and benches along the way, and most visitors in reasonable fitness manage it without major difficulty.",
          },
          {
            title: "The Ngong Ping 360 Cable Car Is Worth It on Its Own Terms",
            content: "The **Ngong Ping 360** cable car connects Tung Chung MTR station to Ngong Ping Village in a roughly 25-minute ride, crossing mountainous terrain and open water (Tung Chung Bay) along the way — it's genuinely scenic enough to be an attraction in its own right, not just transport to the Buddha. Standard cabins hold up to 10 passengers; a 'Crystal Cabin' option with a glass floor is available at a premium for those who want it.\n\nThe alternative is a bus from Tung Chung MTR station, which is cheaper and doesn't involve the cable car queue, but gives up the aerial views entirely. For most first-time visitors, the cable car is the better call specifically because the ride is part of the experience, not a logistics problem to minimize.",
            tourCard: { slug: "ngong-ping-360-cable-car-fast-lane-ticket-with", title: "Ngong Ping 360 cable car fast lane ticket with hotel pick up", description: "Fast-lane cable car access with hotel pickup included, cutting the queue on busy days.", price: "From $68", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/207dd90465dd6b901d24827a7b867448fc42101b69682ca46ced4a8e0c673833.jpg" },
          },
          {
            title: "Queue Reality and What to Pair It With",
            content: "Weekends and public holidays see significantly longer cable car queues than weekdays — arriving early or booking a fast-lane / priority ticket in advance meaningfully cuts the wait, especially in peak travel months (October-December). Budget at least half a day for the round trip including the cable car, the climb to the Buddha, and time at Po Lin Monastery and Ngong Ping Village.\n\nMost visitors pair this trip with **Tai O**, a stilt-house fishing village a short bus ride from Ngong Ping, giving a full day on Lantau Island that covers both the religious/cultural site and a genuinely different, older side of Hong Kong life. See our full things-to-do guide for how this fits into a broader Hong Kong itinerary.",
            tourCard: { slug: "hong-kong-6-hours-cable-car-big-buddha-fish", title: "Hong Kong: 6 Hours Cable Car, Big Buddha & Fish Village Tour", description: "Combines the cable car, Big Buddha and Tai O fishing village into a single half-day loop.", price: "From $92", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be6ad4af1f9ce26a835f5a9091f2c53bed0a094f73d6c5098717644155bba575.jpg" },
          },
        ],
        faqs: [
          { q: "How many steps are there to the Big Buddha?", a: "268 steps from Ngong Ping Village to the statue's base — there's no cable car or lift that bypasses this part; everyone climbs it on foot." },
          { q: "How long is the Ngong Ping 360 cable car ride?", a: "Roughly 25 minutes each way, crossing mountainous terrain and open water between Tung Chung MTR station and Ngong Ping Village." },
          { q: "Is it better to take the cable car or the bus to the Big Buddha?", a: "The cable car, for most first-time visitors — the ride itself is scenic enough to be worth the extra cost over the cheaper bus alternative from Tung Chung." },
          { q: "How long should I budget for a Big Buddha / Ngong Ping visit?", a: "At least half a day round trip including the cable car, the climb, and time at the monastery and village — a full day if you're also adding Tai O fishing village nearby." },
        ],
      };

    case "hong-kong-dim-sum-guide":
      return {
        title: "Hong Kong Dim Sum Guide 2026: How to Order and What Not to Miss",
        description: "Dim sum in Hong Kong is a specific morning-to-early-afternoon tradition with its own ordering logic — here's how to actually do it right, not just order randomly off a menu.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg",
        fastFacts: [
          { icon: "Clock", label: "Traditional timing", value: "Morning through early afternoon, not dinner" },
          { icon: "Utensils", label: "Must-order dishes", value: "Har gow, siu mai, char siu bao, cheung fun" },
          { icon: "Users", label: "Best format", value: "Group of 3+ so you can order a real variety" },
          { icon: "TeaCup", label: "Pairs with", value: "Chinese tea (yum cha — 'drink tea' — is the broader term for this meal)" },
        ],
        sections: [
          {
            title: "Dim Sum Is a Morning Meal, Built Around Tea",
            content: "The Cantonese term for this whole dining tradition is actually **yum cha**, literally 'drink tea' — dim sum is the food side of a meal that's structured around tea drinking first, with small dishes ordered to accompany it, traditionally from late morning through early afternoon rather than as a dinner. Hong Kong formalized this into its modern dim sum restaurant culture: trolleys or checklist order sheets circulating small steamer baskets and plates, meant to be shared across the table rather than ordered as individual mains.\n\nMany restaurants still serve dim sum only until early-to-mid afternoon before switching their kitchen over to standard dinner service — if dim sum specifically is the goal, go before 2-3pm rather than assuming it's available all day.",
          },
          {
            title: "What to Order: The Non-Negotiables",
            content: "A few dishes are close to mandatory on a first dim sum visit. **Har gow** (shrimp dumplings in a translucent steamed wrapper) and **siu mai** (open-topped pork and shrimp dumplings) are the two most iconic steamed dumplings and a near-universal starting point. **Char siu bao** (barbecue pork buns, either steamed-soft or baked-glazed) and **cheung fun** (rice noodle rolls, often filled with shrimp or beef and served with soy sauce) round out the essentials.\n\nBeyond those, look for **egg tarts** for dessert, **turnip cake (law bak go)** if you want something less sweet and more savoury-textured, and if the restaurant does it, **chicken feet** or **phoenix claws** — not for everyone, but a genuinely traditional dish worth trying once if you're curious. A 20-30 item tasting format, ordered as a group, is the best way to actually get through this range rather than picking two or three dishes and missing most of it.",
            tourCard: { slug: "hong-kong-small-group-dim-sum-lunch-with-30", title: "Hong Kong: Small-Group Dim Sum Lunch with 30+ Items", description: "A guided tasting lunch covering the full range of dim sum dishes in one sitting, with context on what each one is.", price: "From $1105", duration: "2.5 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg" },
          },
          {
            title: "Etiquette and Ordering Logic",
            content: "At traditional dim sum restaurants, dishes used to come via **trolleys** wheeled between tables — you flag one down and point at what you want, and your table's checklist card gets stamped. Many restaurants, especially newer or busier ones, have moved to a **checklist order sheet** instead: you tick boxes for what you want and hand it to staff, which tends to be faster and more reliable than waiting for a trolley to pass with the dish you want still on it.\n\nOrder in rounds rather than all at once if the restaurant is busy — steamed dishes are best eaten fresh out of the basket, and a single huge order can mean some dishes sit and cool while others are still being eaten. If you're served tea and it runs low, it's normal (and expected) to flip the teapot lid open or upside-down slightly to signal a server for a refill, rather than waving someone down verbally.",
          },
        ],
        faqs: [
          { q: "What is the difference between dim sum and yum cha?", a: "Yum cha ('drink tea') is the broader meal tradition built around tea drinking; dim sum refers specifically to the small dishes served during it. In everyday use the terms are often used interchangeably." },
          { q: "What dim sum dishes should I order first?", a: "Har gow (shrimp dumplings), siu mai (pork and shrimp dumplings), char siu bao (barbecue pork buns) and cheung fun (rice noodle rolls) are the essential starting four." },
          { q: "Is dim sum available all day in Hong Kong?", a: "No — most restaurants serve it from morning through early-to-mid afternoon before switching to dinner service. Go before 2-3pm if dim sum specifically is the goal." },
          { q: "How many dim sum dishes should a group order?", a: "For a group of 3 or more, 20-30 small dishes ordered in rounds gives genuine variety without overwhelming the table — ordering everything at once means some dishes cool before you get to them." },
        ],
      };

    case "mong-kok-night-markets":
      return {
        title: "Mong Kok & Temple Street Night Markets Guide 2026: What to Expect",
        description: "Temple Street in Yau Ma Tei and the street markets around Mong Kok are more about atmosphere than bargains — here's how to actually enjoy them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png",
        fastFacts: [
          { icon: "Clock", label: "Best hours", value: "Late afternoon into evening, roughly 6-11pm" },
          { icon: "MapPin", label: "Main market", value: "Temple Street, Yau Ma Tei — adjacent to Mong Kok" },
          { icon: "ShoppingBag", label: "What's there", value: "Street food, souvenirs, fortune tellers, clothing, electronics" },
          { icon: "AlertTriangle", label: "Reality check", value: "More atmosphere than deep bargains — bargaining is expected but modest" },
        ],
        sections: [
          {
            title: "Temple Street: Hong Kong's Classic Night Market",
            content: "**Temple Street** in Yau Ma Tei, directly adjacent to Mong Kok, is the market most people picture when they think of a Hong Kong night market — stalls selling clothing, souvenirs, electronics, jade and watches, interspersed with food stalls and, distinctively, **fortune tellers** who set up folding tables and will read your palm or face for a fee. It runs from the late afternoon well into the night, with the atmosphere building as it gets darker and the street food stalls fill up.\n\nThe honest take: this is a market to experience rather than one to shop seriously at. Prices on souvenirs and goods are generally not dramatically cheaper than elsewhere once you account for the bargaining dance, and quality on electronics and 'brand name' goods especially should be treated with skepticism. Go for the atmosphere, the street food, and maybe a cheap souvenir — not expecting to find deep discounts on anything you actually need.",
            tourCard: { slug: "hong-kong-yau-ma-tei-temple-street-night-walking", title: "Hong Kong: Yau Ma Tei Temple Street Night Walking Tour", description: "A guided evening through Temple Street with context on the stalls, fortune tellers and street food scene.", price: "From $228", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png" },
          },
          {
            title: "Mong Kok Proper: Electronics, Sneakers and Density",
            content: "Mong Kok itself, just north of Yau Ma Tei, is less a single market and more one of the densest, most intensely commercial neighborhoods in the city — narrow streets packed with small shops specializing in specific niches: sneakers on certain blocks, electronics and phone accessories on others, and the **Ladies' Market** along Tung Choi Street for clothing, accessories and souvenirs at street-stall prices. It's genuinely one of the best places in Hong Kong to feel the density and pace of the city at street level, even if, again, you're not finding dramatic deals.\n\nNearby, the **Flower Market** and **Goldfish Market** on connecting streets are worth a quick walk-through even if you're not buying — they're a glimpse into very specific, very local retail niches that most visitors never see on a standard sightseeing route.",
          },
          {
            title: "Practical Tips: Bargaining, Food and Safety",
            content: "Bargaining is expected at Temple Street and the Ladies' Market, but keep it modest and good-natured — a counter-offer at 50-70% of the asking price is a reasonable opening move, not an insult, but aggressive haggling over small amounts tends to sour the interaction for both sides. The street food stalls along Temple Street range from solid to excellent; look for stalls with a visible local crowd rather than the ones most aggressively flagging down tourists.\n\nThe area is well-lit, heavily trafficked and generally safe by any reasonable standard — petty pickpocketing in dense crowds is the realistic risk, not anything more serious, so standard city awareness (bag zipped, valuables not in a back pocket) is sufficient.",
          },
        ],
        faqs: [
          { q: "What time does Temple Street Night Market open?", a: "It builds through the late afternoon and runs well into the night, with the fullest atmosphere typically from around 6pm to 11pm." },
          { q: "Is Temple Street Night Market worth visiting?", a: "Yes, for the atmosphere, street food and fortune tellers — go expecting an experience rather than deep bargains on goods, since prices aren't dramatically lower than elsewhere once you factor in bargaining." },
          { q: "What is the Ladies' Market in Mong Kok?", a: "A street market along Tung Choi Street in Mong Kok selling clothing, accessories and souvenirs at stall prices, distinct from but near Temple Street in Yau Ma Tei." },
          { q: "Is it safe to walk around Mong Kok at night?", a: "Yes, generally — it's well-lit and heavily trafficked. The realistic risk is petty pickpocketing in dense crowds, not anything more serious; ordinary city awareness is sufficient." },
        ],
      };

    case "hong-kong-disneyland-guide":
      return {
        title: "Hong Kong Disneyland Guide 2026: Tickets, Size and Who It's Actually For",
        description: "Hong Kong Disneyland is smaller and more compact than its US or Tokyo counterparts — here's what that means in practice, and whether it's worth a full day of your trip.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Lantau Island, reached by dedicated MTR line" },
          { icon: "Clock", label: "Realistic visit length", value: "A single full day covers the park comfortably" },
          { icon: "Users", label: "Best for", value: "Families with younger kids, first-time Disney visitors" },
          { icon: "Train", label: "Getting there", value: "Disneyland Resort Line MTR, direct from Sunny Bay station" },
        ],
        sections: [
          {
            title: "Smaller Than You Might Expect — and That's Not a Bad Thing",
            content: "Hong Kong Disneyland is genuinely the smallest of the global Disney resorts, with fewer themed lands and attractions than Disneyland California, Walt Disney World or Tokyo Disneyland. For some travelers that's a disappointment if they're expecting the full scale of the US parks; for most short-trip visitors, it's actually an advantage — the compact size means a single focused day can realistically cover the whole park without the multi-day commitment Orlando or Anaheim demands.\n\nThe park still delivers the core Disney experience: classic rides, character meet-and-greets, parades and a nightly fireworks show over the castle, just at a scale that fits neatly into a broader multi-day Hong Kong itinerary rather than requiring you to dedicate your whole trip to it.",
          },
          {
            title: "Getting There and Tickets",
            content: "Hong Kong Disneyland sits on Lantau Island and is reached via its own dedicated **Disneyland Resort Line** on the MTR, branching off from Sunny Bay station — the trains themselves are Disney-themed, with Mickey-shaped windows, a nice touch that signals you've arrived before you even reach the gates. From central Hong Kong, the full journey including transfers typically takes under an hour.\n\nStandard single-day tickets cover general park entry; various packages bundle hotel stays (there are two Disney-operated hotels on-site) or add-ons like character dining and the Bibbidi Bobbidi Boutique princess makeover experience, which is popular enough with families that advance booking is worth doing rather than trying to walk in same-day.",
            tourCard: { slug: "hong-kong-disneyland-bibbidi-bobbidi-boutique", title: "Hong Kong Disneyland: Bibbidi Bobbidi Boutique Package", description: "Park entry bundled with the princess makeover experience — book ahead, as same-day slots fill fast.", price: "From $113", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg" },
          },
          {
            title: "Is It Worth a Day of Your Trip?",
            content: "For families traveling with young kids, yes, generally — it's a lower-stress, lower-logistics version of the Disney experience than the bigger parks, and the compact layout means less walking and queueing fatigue for small children. For solo travelers or couples without kids on a short Hong Kong trip, it's more of a toss-up: a day at Disneyland is a day not spent on Lantau's Big Buddha, Hong Kong Island's Peak, or Kowloon's markets, all of which arguably show you more of what makes Hong Kong distinctly Hong Kong.\n\nIf your trip is 4+ days, adding Disneyland as a dedicated day is an easy call with little tradeoff. On a tighter 2-3 day trip, weigh it against the other Lantau Island activities (Big Buddha, Ngong Ping 360, Tai O) covered in our things-to-do guide, since they occupy similar territory geographically but offer a more distinctly local experience.",
          },
        ],
        faqs: [
          { q: "Is Hong Kong Disneyland worth visiting?", a: "For families with young children, generally yes — it's smaller and lower-stress than the US parks while still delivering the core Disney experience in a single comfortable day." },
          { q: "How do you get to Hong Kong Disneyland?", a: "Via the dedicated Disneyland Resort Line on the MTR, branching from Sunny Bay station. From central Hong Kong, the full trip with transfers takes under an hour." },
          { q: "How big is Hong Kong Disneyland compared to other Disney parks?", a: "It's the smallest of the global Disney resorts, with fewer lands and attractions than Disneyland California, Walt Disney World or Tokyo Disneyland — which makes it realistically doable in a single day." },
          { q: "Should I book Hong Kong Disneyland tickets in advance?", a: "Yes, especially for add-ons like the Bibbidi Bobbidi Boutique experience, which is popular with families and can sell out same-day slots." },
        ],
      };

    case "hong-kong-typhoon-season":
      return {
        title: "Hong Kong Typhoon Season Guide 2026: What a Signal 8 Actually Means for Your Trip",
        description: "Typhoon season runs May through November, peaking July-September. Here's what each signal level means in practice, and how it actually affects a traveler's day.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b4e977f13c491c10e6e35d2a0c05539387c38827e122f004319c18d33786167.jpg",
        fastFacts: [
          { icon: "CalendarRange", label: "Season", value: "May to November, peaking July-September" },
          { icon: "AlertTriangle", label: "Signal 8 (T8)", value: "City largely shuts down — public transport, schools, most shops close" },
          { icon: "Clock", label: "Typical warning time", value: "Around 2 hours' notice before T8 is hoisted" },
          { icon: "Plane", label: "Flights and hotels", value: "Airlines and hotels are well-practised at rebooking around typhoons" },
        ],
        sections: [
          {
            title: "How the Signal System Works",
            content: "Hong Kong's typhoon warnings run on a tiered signal system, and the jump that actually matters for travelers is between **Signal 3** and **Signal 8**. Signal 1 and 3 are precautionary — strong winds are possible or occurring, but daily life continues largely unaffected. **Signal 8 (T8)** is the threshold where the city genuinely changes gear: schools close, most offices and shops shut, and — critically for visitors — most public transport, including buses and above-ground MTR sections, suspends service, and ferries (including the Star Ferry) stop running entirely. Signal 9 and 10 escalate further and are reserved for direct, severe typhoon conditions.\n\nThe Hong Kong Observatory typically gives around **two hours' notice** before raising a T8 signal, which is enough time to get back to your hotel, grab supplies, and make arrangements — but not enough time to finish an outdoor itinerary or complete a half-done sightseeing day, so treat any typhoon watch or advisory as a signal to simplify your plans for that day well before the actual T8 is called.",
          },
          {
            title: "What to Actually Do During a T8",
            content: "The practical advice is blunt: when a T8 is announced or imminent, **do not head to the waterfront or any outdoor attraction**, and get back to your hotel rather than trying to wait it out somewhere else. Once T8 is hoisted, stay indoors — most restaurants outside your hotel building will likely be closed too, so plan to rely on room service or whatever dining options exist within your hotel. Insurance coverage for most vehicles, public or private, is suspended roughly two hours after T8 is raised, which is part of why taxis and ride-hailing effectively stop operating as well.\n\nThis typically lasts anywhere from a few hours to, in worse cases, a full day or more before signals are lowered and normal life resumes — Hong Kong generally returns to normal quickly once a signal drops back to 3 or below.",
            tourCard: { slug: "hk-victoria-sunset-harbour-cruise-dim-sum-tasting", title: "HK Victoria Sunset Harbour Cruise Dim Sum Tasting Night Tour", description: "A good lower-risk evening activity to book outside the peak typhoon months if your dates are flexible.", price: "From $73", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b4e977f13c491c10e6e35d2a0c05539387c38827e122f004319c18d33786167.jpg" },
          },
          {
            title: "The Real Operational Risk Is Lower Than It Sounds",
            content: "Here's the genuinely reassuring part: airlines and hotels operating in Hong Kong are **well-practised** at handling typhoon disruption. Flight rebooking around a T8 closure is routine rather than exceptional for carriers flying in and out of Hong Kong regularly, and hotels are generally accommodating about extending a stay by a night if a departure gets caught by one. The disruption to a trip is usually a lost half-day to a full day of outdoor plans, not the trip-ending event first-time visitors sometimes fear.\n\nIf you're traveling during peak typhoon months (July-September) and your itinerary is tight, build in one buffer day if you can, and keep at least one strong indoor-attraction backup plan (a museum, a mall, an indoor dining crawl) ready so a T8 day doesn't feel like a wasted one.",
          },
        ],
        faqs: [
          { q: "When is Hong Kong typhoon season?", a: "May through November, with the highest risk concentrated in July, August and September." },
          { q: "What happens when Signal 8 (T8) is raised?", a: "Most public transport, including buses and ferries, suspends service; schools and most offices and shops close. Travelers should return to their hotel and stay indoors until the signal is lowered." },
          { q: "How much warning do you get before a T8 typhoon signal?", a: "The Hong Kong Observatory typically gives around two hours' notice before raising T8, enough time to get to safety but not to finish an outdoor day's plans." },
          { q: "Will a typhoon ruin my Hong Kong trip?", a: "Unlikely to ruin it entirely — airlines and hotels in Hong Kong are well-practised at rebooking flights and extending stays around typhoon disruption. Expect at most a lost day of outdoor plans, not a cancelled trip." },
        ],
      };

    case "macau-day-trip-from-hong-kong":
      return {
        title: "Macau Day Trip from Hong Kong (2026): Ferry, Logistics and What to See",
        description: "Macau is roughly an hour from Hong Kong by high-speed ferry and makes a genuinely worthwhile day trip — Portuguese colonial architecture, a distinct food culture, and the casinos if that's your interest.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f01d0b6cc09b3b9cca8ab21197365f6e2d31011054e198a3b993e822aaa7f6bd.jpg",
        fastFacts: [
          { icon: "Ship", label: "Ferry crossing time", value: "Roughly 1 hour, high-speed ferry" },
          { icon: "Bridge", label: "Alternative route", value: "Hong Kong-Zhuhai-Macao Bridge (HZMB) by bus" },
          { icon: "FileText", label: "Immigration", value: "Separate entry/exit — Macau is its own administrative zone" },
          { icon: "Landmark", label: "Main draw", value: "Portuguese colonial old town (UNESCO-listed), plus the casinos" },
        ],
        sections: [
          {
            title: "Macau Is Its Own Territory — Expect an Immigration Check",
            content: "Like Hong Kong, **Macau** is a separate Special Administrative Region of China with its own immigration system, distinct from both Hong Kong and mainland China. This means a Macau day trip involves a genuine border crossing: you'll clear Hong Kong exit immigration, then Macau entry immigration, and the same in reverse on the way back. For most visa-free nationalities this is a formality — a passport stamp, not a visa application — but it does mean budgeting extra time at the ferry terminal on both ends rather than assuming it's a seamless hop.\n\nMost nationalities that can enter Hong Kong visa-free have similarly easy visa-free access to Macau, but check your specific passport's terms for Macau separately rather than assuming Hong Kong's rules carry over automatically.",
          },
          {
            title: "Getting There: Ferry vs the Bridge",
            content: "The classic route is the **high-speed ferry** between Hong Kong (departing from the Hong Kong-Macau Ferry Terminal in Sheung Wan, or from the airport's SkyPier for connecting travelers) and Macau, taking roughly **one hour** each way. Ferries run frequently throughout the day, and tickets can be bought in advance or often same-day, though booking ahead is safer during peak season or holidays.\n\nThe newer alternative is the **Hong Kong-Zhuhai-Macao Bridge (HZMB)**, a sea-crossing bridge-and-tunnel system connecting Hong Kong, Zhuhai (mainland China) and Macau, traveled by shuttle bus rather than ferry. It's a genuinely different experience — you get the engineering spectacle of the bridge itself — and can be faster or slower than the ferry depending on traffic and which Hong Kong terminal you're starting from. For a straightforward day trip, the ferry remains the simpler, more established option; the bridge route suits travelers who specifically want that experience or are combining the trip with a Zhuhai stop.",
            tourCard: { slug: "from-hong-kong-macau-day-tour-with-ferry-lunch", title: "From Hong Kong: Macau Day Tour with Ferry, Lunch, Pickup", description: "Ferry crossing, lunch and a guided Macau day bundled together, with hotel pickup handled for you.", price: "From $272", duration: "10 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf36bb0e528532d27f1d1bcac310f881664fa4a95f405c4f7a9519d0bb7058c2.jpg" },
          },
          {
            title: "What to See: More Than Just Casinos",
            content: "Macau's reputation internationally leans heavily on its casino industry — it's genuinely one of the largest gambling markets in the world, well beyond Las Vegas in gross revenue — but the historic **old town**, a UNESCO World Heritage-listed mix of Portuguese colonial and Chinese architecture, is worth the trip even if casinos hold zero interest for you. The **Ruins of St. Paul's**, the cobbled streets of the historic centre, and a food culture blending Portuguese and Cantonese influences (try Macanese egg tarts and African chicken) give Macau a genuinely different character from Hong Kong, despite the short crossing.\n\nA full day trip realistically covers the historic centre, a meal, and either a casino visit or more old-town wandering depending on interest — trying to add the casinos, the old town and significant shopping all in one day tends to feel rushed. If any single element matters most to you, build the day around that and treat the rest as a bonus rather than trying to do it all.",
            tourCard: { slug: "macau-pre-portuguese-history-walking-tour-with", title: "Macau: Pre-Portuguese History Walking Tour with Guide", description: "A walking tour through Macau's old town and colonial history, good for the non-casino side of a day trip.", price: "From $105", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a07ba562522367558ca7747e826d0b6a5ff5043baa859f1f9866c9c13a7ea40d.jpg" },
          },
        ],
        faqs: [
          { q: "How long does it take to get from Hong Kong to Macau?", a: "Roughly one hour by high-speed ferry, the most common route. The Hong Kong-Zhuhai-Macao Bridge by shuttle bus is an alternative, with travel time varying by traffic and starting terminal." },
          { q: "Do I need a visa for Macau if I already have one for Hong Kong?", a: "Macau has its own separate immigration system — a Hong Kong visa or exemption doesn't automatically cover it. Most visa-free nationalities for Hong Kong also get easy visa-free entry to Macau, but check your specific passport's Macau terms separately." },
          { q: "Is Macau worth visiting if I'm not interested in casinos?", a: "Yes — the UNESCO-listed historic centre, Portuguese colonial architecture like the Ruins of St. Paul's, and a distinct Macanese food culture make it worth the day trip independent of the gambling industry." },
          { q: "Can you do Macau as a day trip from Hong Kong?", a: "Yes, comfortably — the roughly one-hour ferry each way leaves a full day in Macau itself, enough time for the historic centre, a meal, and either casinos or more sightseeing depending on interest." },
        ],
      };

    default:
      return null;
  }
}
