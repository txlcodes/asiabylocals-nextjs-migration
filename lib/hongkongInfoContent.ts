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

    case "hong-kong-food-guide-beyond-dim-sum":
      return {
        title: "Hong Kong Food Guide 2026: What to Eat Beyond Dim Sum",
        description: "Dim sum gets all the attention, but Hong Kong's everyday food culture runs through cha chaan tengs, wonton noodles, roast meats and dai pai dong street stalls — here's what to actually order.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg",
        fastFacts: [
          { icon: "Utensils", label: "Everyday institution", value: "Cha chaan teng — Hong Kong-style diners, open long hours" },
          { icon: "Soup", label: "Signature noodle dish", value: "Wonton noodles (wonton mein) — thin egg noodles, shrimp dumplings" },
          { icon: "Drumstick", label: "Roast meats", value: "Siu mei — roast goose, char siu, soy chicken, hung alongside" },
          { icon: "Coffee", label: "Signature drink", value: "Yuenyeung — coffee and tea mixed, a genuine Hong Kong invention" },
        ],
        sections: [
          {
            title: "The Cha Chaan Teng Is the Real Backbone of Eating in Hong Kong",
            content: "If dim sum is the meal visitors plan a trip around, the **cha chaan teng** is the one locals actually eat at most days — a Hong Kong-style diner hybrid that emerged from the city's mix of British and Cantonese influences, serving everything from Hong Kong French toast and macaroni soup to baked pork chop rice and the city's own instant-noodle-with-everything combos. These places are usually open long hours, fast-paced, and often still run on handwritten order slips rather than tablets, with communal seating and a no-nonsense, slightly brusque service style that's part of the charm rather than a flaw.\n\nThe drink to try here is **yuenyeung**, a genuinely Hong Kong invention that mixes coffee and tea with condensed milk — it sounds odd on paper and works far better than expected. Pair it with a slice of **Hong Kong French toast**, deep-fried bread with peanut butter or condensed milk, for the full cha chaan teng breakfast experience.",
          },
          {
            title: "Wonton Noodles and the Noodle Shop Culture",
            content: "**Wonton noodles (wonton mein)** are Hong Kong's defining noodle dish: thin, springy egg noodles in a light shrimp-and-pork broth, topped with a handful of shrimp-and-pork wontons. The good versions are judged on the noodle's bounce (a result of the specific flour and the traditional bamboo-pole kneading some old-school shops still use) as much as the broth itself, and a genuinely great bowl is a small, inexpensive thing most visitors never think to seek out deliberately.\n\nBeef brisket noodles and congee are the other everyday staples worth knowing — congee in particular is a common breakfast or late-night dish, served plain or with century egg, pork, or fish, and it's one of the gentlest, most approachable dishes for anyone easing into Cantonese food for the first time.",
          },
          {
            title: "Siu Mei: Hong Kong's Roast Meat Culture",
            content: "Walk past any siu mei shop window and you'll see **roast goose, char siu (barbecue pork), soy sauce chicken and roast pork belly** hanging on hooks or laid out under heat lamps — this is Hong Kong's roast meat tradition, and a plate of sliced roast meats over rice is one of the most satisfying, fastest lunches in the city. Roast goose in particular is a Hong Kong specialty worth actively seeking out rather than defaulting to char siu, since it's less commonly exported to Cantonese restaurants abroad and genuinely tastes different done well, with crisp skin and a richer, fattier meat than roast duck.\n\nMost siu mei shops are counter-service, fast and cheap, and a plate rarely costs more than a casual fast-food meal elsewhere — treat it as a legitimate meal, not a snack, even though the format feels informal.",
            tourCard: { slug: "hong-kong-small-group-dim-sum-lunch-with-30", title: "Hong Kong: Small-Group Dim Sum Lunch with 30+ Items", description: "If dim sum is still the priority, a guided small-group tasting covers the range properly before you branch out to noodles and roast meats on your own.", price: "From $1105", duration: "2.5 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg" },
          },
          {
            title: "Dai Pai Dong and Street Food That's Disappearing",
            content: "**Dai pai dong** — open-air street food stalls, often with simple metal tables and stools set up on the pavement — were once common across Hong Kong but have been steadily licensed out of existence over the decades; the surviving ones (a handful in areas like Sham Shui Po and parts of Central) are worth seeking out specifically because the format itself is vanishing, not just for the food. Expect stir-fried noodles, clay-pot rice, and simple seafood dishes cooked fast over high heat, eaten at communal tables with the city's traffic and noise as the backdrop.\n\nFor something more portable, Hong Kong's street snack culture still thrives: curry fish balls on skewers, egg waffles (gai daan jai), stinky tofu for the adventurous, and roasted chestnuts in cooler months are all sold from small stalls and hole-in-the-wall counters across Kowloon and Hong Kong Island alike.",
          },
        ],
        faqs: [
          { q: "What is a cha chaan teng?", a: "A Hong Kong-style diner blending British and Cantonese influences, serving everything from French toast and macaroni soup to baked pork chop rice. It's the city's everyday eating institution, more than dim sum for most locals." },
          { q: "What should I order besides dim sum in Hong Kong?", a: "Wonton noodles, roast goose or char siu over rice from a siu mei shop, congee, and a yuenyeung (coffee-tea mix) from a cha chaan teng are the core everyday dishes beyond dim sum." },
          { q: "What is roast goose and where can I try it?", a: "A Hong Kong siu mei specialty — roasted whole goose with crisp skin, sliced and served over rice. It's less commonly found abroad than char siu, so it's worth seeking out specifically in Hong Kong." },
          { q: "Is street food safe to eat in Hong Kong?", a: "Generally yes — stick to stalls with a visible local crowd and food cooked fresh in front of you, the same rule that applies to street food anywhere." },
        ],
      };

    case "lantau-island-guide":
      return {
        title: "Lantau Island Guide 2026: Beyond the Big Buddha Day Trip",
        description: "Lantau Island is Hong Kong's largest island and mostly rural — the Big Buddha is one stop among several, and a proper visit covers hiking trails, beaches and Tai O's stilt houses too.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/207dd90465dd6b901d24827a7b867448fc42101b69682ca46ced4a8e0c673833.jpg",
        fastFacts: [
          { icon: "Map", label: "Size", value: "Hong Kong's largest island, mostly rural and mountainous" },
          { icon: "Train", label: "Getting there", value: "MTR to Tung Chung, then cable car or bus" },
          { icon: "Mountain", label: "Highest peak", value: "Lantau Peak (Fung Wong Shan), 934 metres" },
          { icon: "Fish", label: "Don't skip", value: "Tai O fishing village — stilt houses and a different pace entirely" },
        ],
        sections: [
          {
            title: "Lantau Is Bigger — and Emptier — Than Most Visitors Expect",
            content: "Lantau Island is physically Hong Kong's largest island, larger than Hong Kong Island itself, but the vast majority of it is mountainous country park rather than built-up city — a sharp contrast to the density most visitors associate with Hong Kong. Most of the population and development sits around Tung Chung (the MTR terminus and gateway town) and the airport, which occupies reclaimed land on the island's north side; the interior and south coast remain genuinely rural, with hiking trails, small villages and beaches that see a fraction of the tourist traffic the Big Buddha draws.\n\nTreating Lantau as a single half-day Big Buddha errand undersells it. A fuller day, or even an overnight, opens up hiking, Tai O, and south-coast beaches that most itineraries skip entirely.",
          },
          {
            title: "Hiking: Lantau Peak and the Lantau Trail",
            content: "**Lantau Peak (Fung Wong Shan)**, at 934 metres, is Hong Kong's second-highest peak and a genuinely popular sunrise hike — climbers set out well before dawn specifically to catch the sunrise above the clouds, a view locals rate among the best in the territory. The full **Lantau Trail** runs about 70km in sections around the island's mountainous spine, but shorter segments near Ngong Ping or Tung Chung are entirely manageable as a half-day add-on to a Big Buddha visit for anyone with reasonable fitness and proper footwear.\n\nThese trails are unmarked by the crowds the cable car draws — a useful reset if the Ngong Ping Village and Big Buddha queues have felt like too much tourist density for the day.",
          },
          {
            title: "Tai O: A Genuinely Different Hong Kong",
            content: "**Tai O**, on Lantau's western edge, is a fishing village built on stilts over tidal flats, home to one of Hong Kong's last visible traditional fishing communities. Narrow boardwalks wind between stilt houses, dried seafood stalls line the main lanes, and small boat tours take visitors out to (occasionally) spot the rare Chinese white dolphin in the surrounding waters. It's a short bus ride from Ngong Ping and routinely paired with the Big Buddha and cable car as a single day, but it rewards unhurried wandering rather than a quick photo stop — budget at least an hour just walking the stilt-house lanes.\n\nTai O also has its own small, low-key temples and a genuinely different food scene from central Hong Kong, built around dried seafood and simple seaside cooking rather than dim sum or roast meats.",
            tourCard: { slug: "hong-kong-6-hours-cable-car-big-buddha-fish", title: "Hong Kong: 6 Hours Cable Car, Big Buddha & Fish Village Tour", description: "Combines the cable car, Big Buddha and Tai O fishing village into a single half-day loop — the standard way to see Lantau's highlights together.", price: "From $92", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be6ad4af1f9ce26a835f5a9091f2c53bed0a094f73d6c5098717644155bba575.jpg" },
          },
          {
            title: "Beaches and Discovery Bay: Lantau's Quieter Side",
            content: "Lantau's south coast holds several beaches — **Cheung Sha** in particular is Hong Kong's longest beach, long enough that it's rarely crowded even on a warm weekend, with a handful of beachside cafes rather than dense development. **Discovery Bay**, on the island's north-east, is a planned residential community reachable by ferry from Central, notable mainly for its car-free streets and a laid-back, almost resort-like pace that's a world away from Central's density, though it's more of a residential curiosity than a must-see attraction.\n\nFor a Lantau day that skips the Big Buddha crowds entirely, a Cheung Sha beach visit paired with a short hike is a legitimate, much quieter alternative — just note that bus connections to the south coast run less frequently than the Tung Chung-Ngong Ping corridor, so check timetables before committing to a schedule.",
          },
        ],
        faqs: [
          { q: "Is Lantau Island just the Big Buddha?", a: "No — the Big Buddha and Ngong Ping are the most-visited stop, but Lantau is Hong Kong's largest island, mostly rural, with hiking trails, Tai O fishing village, and quiet south-coast beaches like Cheung Sha." },
          { q: "How do you get to Lantau Island?", a: "MTR to Tung Chung station, then either the Ngong Ping 360 cable car or a bus up to Ngong Ping Village and the Big Buddha. Discovery Bay is reached by a separate ferry from Central." },
          { q: "Is Tai O worth visiting separately from the Big Buddha?", a: "It's usually paired with the Big Buddha as a single day via a short bus ride from Ngong Ping, and that combination works well — Tai O rewards at least an hour of unhurried walking through its stilt-house lanes." },
          { q: "What is the best hike on Lantau Island?", a: "Lantau Peak, Hong Kong's second-highest at 934 metres, is the signature hike, especially as a pre-dawn sunrise climb. Shorter sections of the broader Lantau Trail work well as a half-day add-on near Ngong Ping." },
        ],
      };

    case "hong-kong-museums-guide":
      return {
        title: "Hong Kong Museums Guide 2026: Which Ones Are Actually Worth Your Time",
        description: "From the harbourside M+ to the smaller Hong Kong Museum of History, here's which museums genuinely reward a visit and which you can skip on a short trip.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e5f8ade148fd775fd2803eaba29a102d35124f5c1a5d05081c9a2ed202a48d0a.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Biggest draw", value: "M+ — Asia's largest museum of visual culture, West Kowloon" },
          { icon: "Clock", label: "Most museums", value: "Closed one weekday, typically Thursday — check before going" },
          { icon: "Ticket", label: "Free entry", value: "Several government museums are free or near-free on standard days" },
          { icon: "MapPin", label: "Museum cluster", value: "Tsim Sha Tsui and West Kowloon Cultural District" },
        ],
        sections: [
          {
            title: "M+: The One Museum Worth Building a Half-Day Around",
            content: "**M+**, in the West Kowloon Cultural District, opened as Asia's largest museum devoted to visual culture — contemporary art, design, architecture and moving image, housed in a striking building with genuinely excellent harbour views from its upper floors. The collection draws heavily on 20th and 21st century Asian art and design in a way few other museums in the region attempt at this scale, and the building itself, combined with the West Kowloon waterfront promenade right outside, makes it easy to turn into a half-day rather than a quick in-and-out.\n\nIt sits alongside the **Hong Kong Palace Museum** in the same cultural district, which focuses on Chinese imperial art and historical artefacts on loan from Beijing's Forbidden City — the two make a natural pairing if culture museums are a priority on your trip.",
          },
          {
            title: "Hong Kong Museum of History: The Context Most Visitors Skip",
            content: "The **Hong Kong Museum of History** in Tsim Sha Tsui East covers the territory's story from prehistory through the handover, with a particularly well-regarded permanent exhibition walking through colonial-era Hong Kong, the Japanese occupation, and post-war development into the city you're walking around today. For visitors who want context behind what they're seeing — why the Peak Tram exists, why Hong Kong's governance looks the way it does — this is genuinely more useful than it sounds, and it's a reasonable rainy-day or midday-heat retreat given it's fully air-conditioned and not overly large.\n\nIt pairs naturally with the nearby **Hong Kong Science Museum**, which is more oriented toward families and hands-on exhibits than serious museum-going, but is a solid option if traveling with kids who've had enough walking for the day.",
          },
          {
            title: "Smaller, Specialist Museums Worth Knowing About",
            content: "The **Hong Kong Maritime Museum**, on the Central waterfront near the Star Ferry pier, covers the city's identity as a trading port and naval history — a tight, well-curated museum that doesn't demand more than an hour and fits naturally into a Central/harbour day. The **Hong Kong Museum of Art**, also in Tsim Sha Tsui, holds Chinese antiquities and contemporary works and recently went through a major renovation that's generally well-reviewed.\n\nFor a more local, less polished angle, the **Hong Kong Heritage Museum** in Sha Tin (further from the tourist core, but reachable by MTR) covers Cantonese opera, local folk culture and temporary exhibitions that change regularly — worth checking what's currently showing if you have a specific interest rather than visiting blind.",
          },
          {
            title: "Practical Notes: Closures, Tickets and What to Skip",
            content: "Most Hong Kong museums close one weekday — commonly Thursday for government-run museums — so check specific opening days before planning a museum-heavy day, since getting this wrong is a common first-timer mistake. Several government museums, including the Hong Kong Museum of History and the Science Museum, charge only a nominal fee or are free on certain days, making them easy, low-cost additions to a day that's otherwise light on paid activities.\n\nOn a short 2-3 day trip, **M+** is the one museum worth prioritizing if you only have time for one; everything else here is a genuine bonus for longer stays or specific interests rather than a must-do alongside the Peak, Lantau and the markets.",
          },
        ],
        faqs: [
          { q: "What is the best museum in Hong Kong?", a: "M+ in West Kowloon, Asia's largest museum of visual culture, is the standout for most visitors — strong contemporary art and design collection, a striking building, and harbour views from the upper floors." },
          { q: "Are Hong Kong museums free?", a: "Several government-run museums, including the Hong Kong Museum of History and Science Museum, charge only nominal fees or are free on certain days. M+ and the Hong Kong Palace Museum charge standard admission." },
          { q: "What day are museums closed in Hong Kong?", a: "Most government museums close one weekday, commonly Thursday — always check the specific museum's current schedule before planning around it." },
          { q: "Is the Hong Kong Museum of History worth visiting?", a: "Yes, especially for context on the city's colonial, wartime and post-handover history — it's a well-regarded, fully indoor option that works well as a rainy-day or midday-heat retreat." },
        ],
      };

    case "victoria-peak-vs-sky100":
      return {
        title: "Victoria Peak vs Sky100: Which Hong Kong Skyline View Is Worth It",
        description: "The Peak Tram and Sky100 both sell a Hong Kong skyline view, but they're not the same experience or the same price — here's the real comparison.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        fastFacts: [
          { icon: "Mountain", label: "Victoria Peak", value: "View from above the harbour, on Hong Kong Island's hillside" },
          { icon: "Building", label: "Sky100", value: "Indoor observation deck, 393m up in the ICC tower, Kowloon side" },
          { icon: "Compass", label: "Key difference", value: "Peak looks down on the harbour; Sky100 looks across it" },
          { icon: "Clock", label: "Time needed", value: "Peak: half-day with the tram and walk; Sky100: 45-60 minutes" },
        ],
        sections: [
          {
            title: "They're Not Actually the Same Kind of View",
            content: "It's worth being clear upfront: **Victoria Peak** and **Sky100** aren't competing versions of the same experience, even though both get marketed as 'the Hong Kong skyline view'. The Peak sits on Hong Kong Island's hillside, so you're looking down and across the harbour at Kowloon's skyline from an elevated, outdoor-adjacent vantage point, with the Peak Tram itself as part of the experience. **Sky100**, by contrast, is an indoor observation deck on the 100th floor of the ICC tower in West Kowloon, 393 metres up, looking back the other way across the harbour at Hong Kong Island's famously dense skyline.\n\nIf you only have time for one, the Peak is the more complete experience — the tram ride, the outdoor terrace, the hiking paths nearby — while Sky100 is a faster, more purely photo-driven stop.",
          },
          {
            title: "The Peak Tram Experience, in Context",
            content: "Victoria Peak's appeal is as much about the journey as the destination: the 1888 funicular railway itself, the Sky Terrace 428 viewing deck, and the surrounding Peak Garden paths make it a half-day activity rather than a quick stop. It also costs more in total time — queues, the tram ride up and down, and walking around at the top — but it rewards that time with a genuinely different, elevated perspective on the harbour that no indoor deck replicates. See our dedicated Peak Tram ticket guide for current pricing tiers and how to avoid the worst of the weekend queue.",
            tourCard: { slug: "hong-kong-peak-tram-sky-terrace-428-photos-tour", title: "Hong Kong: Peak Tram Sky Terrace 428 & Photos Tour", description: "Pre-booked Peak Tram and Sky Terrace access — the fuller, more time-intensive of the two skyline views.", price: "From $119", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
          {
            title: "Sky100: Faster, Indoor, and Looking the Other Way",
            content: "**Sky100** is a straightforward observation deck visit: elevator up, floor-to-ceiling windows, interactive touch-screen displays identifying landmarks, and a gift shop and small cafe at the top — the whole visit comfortably fits inside an hour. Being fully indoor and air-conditioned makes it a genuinely useful backup on a rainy or extremely hot day when the Peak's outdoor elements are less appealing, and its position directly above the West Kowloon waterfront and the M+ museum means it pairs easily with a cultural-district day rather than requiring a separate trip across the harbour.\n\nThe view itself, looking at Hong Kong Island's dense skyline from Kowloon, is arguably the more dramatic single photograph of the two — it's the classic 'wall of skyscrapers' shot — even though the Peak's harbour-and-both-shores panorama is more complete.",
          },
          {
            title: "So Which One Should You Actually Do?",
            content: "If you only have time or budget for one: choose the **Peak** if you want the fuller half-day experience with the historic tram and some outdoor walking, or if weather is good and you have 3+ hours free. Choose **Sky100** if you're tight on time, the weather is poor, or you specifically want the 'looking at Hong Kong Island's skyscraper wall' photo rather than the Peak's broader harbour view.\n\nOn a longer trip (3+ days), doing both isn't redundant — they're different enough views, from opposite sides of the harbour, that seeing the skyline both ways genuinely adds something rather than repeating the same photo twice.",
          },
        ],
        faqs: [
          { q: "Is Victoria Peak or Sky100 better?", a: "Victoria Peak gives the fuller experience with the historic tram ride and outdoor terrace; Sky100 is faster, fully indoor, and gives the classic view looking at Hong Kong Island's skyline from across the harbour. Neither is strictly 'better' — they show different sides of the same city." },
          { q: "Can I see both Victoria Peak and Sky100 in one trip?", a: "Yes, and on a 3+ day trip it's worth doing — they look at the harbour from opposite directions, so the views genuinely differ rather than repeating each other." },
          { q: "Which is better in bad weather, the Peak or Sky100?", a: "Sky100 — it's fully indoor and air-conditioned, while the Peak's main appeal includes outdoor terrace time that's diminished by rain or haze." },
          { q: "How long does a Sky100 visit take?", a: "Comfortably under an hour including the elevator ride, the deck itself and a look at the interactive displays — much faster than a full Peak Tram visit." },
        ],
      };

    case "hong-kong-with-kids-guide":
      return {
        title: "Hong Kong with Kids: A Family Travel Guide 2026",
        description: "Hong Kong is more family-friendly than its skyscraper reputation suggests — here's what actually works with children, from Disneyland to the Peak Tram to easy, kid-proof transport.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg",
        fastFacts: [
          { icon: "Train", label: "Getting around with kids", value: "MTR is stroller-accessible with lifts at most stations" },
          { icon: "Smile", label: "Top kid attraction", value: "Hong Kong Disneyland — smaller and less overwhelming than other parks" },
          { icon: "TreePine", label: "Good for burning energy", value: "Ocean Park's rides and animal exhibits, or a Lantau cable car ride" },
          { icon: "Utensils", label: "Easy food wins", value: "Cha chaan tengs have simple, kid-friendly menus and fast service" },
        ],
        sections: [
          {
            title: "Transport Logistics Are Easier Than Expected",
            content: "Hong Kong's density can look daunting for parents picturing crowded streets and a stroller, but the practical reality is better than it looks: the **MTR** has lifts or escalators at the overwhelming majority of stations, platforms are well-signed in English, and trains run frequently enough that missing one rarely matters. The **Star Ferry** is an easy, novel win with kids specifically because it feels like an activity rather than transport — a short, cheap boat ride that most children find genuinely exciting regardless of age.\n\nTaxis are plentiful for when a stroller and multiple tired kids make transit less appealing, and having your hotel write destinations in Chinese characters smooths over any language friction with drivers.",
          },
          {
            title: "Hong Kong Disneyland: The Obvious, Correct Choice",
            content: "**Hong Kong Disneyland** is specifically well-suited to families with younger children precisely because it's the smallest of the global Disney parks — less walking, shorter lines relative to the bigger US and Japan parks, and a single day genuinely covers it without the exhaustion a multi-day Orlando trip can produce. The **Bibbidi Bobbidi Boutique** princess makeover experience is a reliable hit for kids who are into it, and the dedicated Disneyland Resort Line MTR with Mickey-shaped train windows makes even the journey there feel like part of the day.\n\nBook character dining or the boutique experience ahead rather than hoping for same-day availability, especially during school holiday periods when the park runs fuller.",
            tourCard: { slug: "hong-kong-disneyland-bibbidi-bobbidi-boutique", title: "Hong Kong Disneyland: Bibbidi Bobbidi Boutique Package", description: "Park entry with the princess makeover bundled in — a reliable win for families with young kids.", price: "From $113", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg" },
          },
          {
            title: "Beyond Disneyland: Ocean Park, the Peak Tram and the Science Museum",
            content: "**Ocean Park**, on Hong Kong Island's south side, splits between a marine-life and animal exhibit side and a rides-and-thrills side, and its cable car and funicular connections between the two levels are an attraction in themselves for kids. It's a genuinely different day from Disneyland — less character-driven, more animal- and ride-focused — and works well as a second theme-park day on a longer trip without feeling redundant.\n\nThe **Peak Tram** itself is a hit with most kids regardless of age purely as a ride — a steep funicular climbing through hillside is inherently more exciting to a child than most 'viewpoint' attractions — and the **Hong Kong Science Museum** in Tsim Sha Tsui gives a reliable, air-conditioned, hands-on option for a tired-feet or rainy-day afternoon.",
          },
          {
            title: "Food and Practical Family Tips",
            content: "**Cha chaan tengs** are a genuinely easy food option with kids: fast service, simple familiar dishes (toast, noodles, fried rice, macaroni soup), and a casual, no-pressure atmosphere that tolerates restless children better than a formal restaurant would. Dim sum works well with kids too, since the small-dish format means pickier eaters can find something among the variety without committing to one unfamiliar dish.\n\nPractical notes: Hong Kong's humidity and heat from May through September can wear children out faster than parents expect, so building in midday air-conditioned breaks (a mall, a museum, a mid-afternoon hotel rest) tends to produce a better overall day than pushing through a packed sightseeing schedule in the heat.",
          },
        ],
        faqs: [
          { q: "Is Hong Kong good for traveling with young kids?", a: "Yes — the MTR is largely stroller-accessible, Hong Kong Disneyland is sized for shorter attention spans than the bigger Disney parks, and food options like cha chaan tengs and dim sum are easy with picky eaters." },
          { q: "Disneyland or Ocean Park for a Hong Kong family trip?", a: "Disneyland for character-driven rides and younger kids; Ocean Park for animal exhibits and more ride-focused thrills. On a longer trip, both work well as separate days rather than choosing one over the other." },
          { q: "Is the MTR stroller-friendly?", a: "Mostly yes — lifts or escalators exist at the large majority of stations, and the system is well-signed in English, making it manageable for parents without local help." },
          { q: "What's the best time of year for Hong Kong with kids?", a: "October through December, for the same reason it's best for everyone — lower humidity and heat make outdoor time with children far more comfortable than the summer months." },
        ],
      };

    case "hong-kong-shopping-districts-guide":
      return {
        title: "Hong Kong Shopping Districts Guide 2026: Where to Go for What",
        description: "From Causeway Bay's malls to Mong Kok's sneaker streets and Central's luxury flagships, Hong Kong's shopping splits sharply by neighborhood — here's which district matches what you're actually after.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png",
        fastFacts: [
          { icon: "ShoppingBag", label: "Luxury flagships", value: "Central and Admiralty — Landmark, IFC Mall" },
          { icon: "ShoppingBag", label: "Mainstream malls, dense crowds", value: "Causeway Bay — Times Square, SOGO" },
          { icon: "ShoppingBag", label: "Electronics, sneakers, street markets", value: "Mong Kok" },
          { icon: "ShoppingBag", label: "Jewelry, watches, antiques", value: "Tsim Sha Tsui's Nathan Road and side streets" },
        ],
        sections: [
          {
            title: "Central and Admiralty: Where the Luxury Flagships Are",
            content: "**Central**, Hong Kong's financial and business core, holds the city's densest concentration of international luxury flagships — the **Landmark** mall and its connected buildings house a tight cluster of designer stores, and **IFC Mall**, directly above the Airport Express and MTR interchange, pairs high-end retail with easy transit access and harbour views from its upper levels. This is the district for browsing or buying designer goods in an air-conditioned, polished setting, not for bargains.\n\nThe **Mid-Levels Escalator**, the world's longest outdoor covered escalator system, runs through this area and up into SoHo, a smaller strip of boutiques, bars and restaurants worth a wander even if shopping specifically isn't the goal.",
          },
          {
            title: "Causeway Bay: Dense, Mainstream and Always Busy",
            content: "**Causeway Bay** is Hong Kong's most intensely commercial shopping district by foot traffic — **Times Square** and **SOGO** anchor a dense cluster of malls and department stores aimed at mainstream, mid-range shopping rather than luxury, and the surrounding streets are packed with smaller boutiques, cosmetics shops and cafes. It's genuinely one of the busiest retail areas in the world by pedestrian density, which makes it exciting to walk through but exhausting if you're not prepared for the crowds, especially on weekends.\n\nIf mainstream fashion brands, cosmetics and a broad, department-store style shopping day are what you're after, Causeway Bay delivers more variety per block than almost anywhere else in the city.",
          },
          {
            title: "Mong Kok: Electronics, Sneakers and Street-Level Density",
            content: "**Mong Kok** is less about malls and more about street-level specialization: specific blocks dedicated to sneakers, others to phone and electronics accessories, and the **Ladies' Market** along Tung Choi Street for clothing and souvenirs at stall prices with bargaining expected. This is the district for feeling the city's retail density at ground level rather than inside air-conditioned malls, and it overlaps with the Temple Street night market area for an evening that combines shopping with street food and atmosphere.\n\nSee our dedicated night markets guide for the full Mong Kok and Temple Street evening combination — most visitors do this as one trip rather than treating shopping and the night market as separate outings.",
            tourCard: { slug: "hong-kong-yau-ma-tei-temple-street-night-walking", title: "Hong Kong: Yau Ma Tei Temple Street Night Walking Tour", description: "A guided evening through the Mong Kok-adjacent market district, pairing shopping streets with the night market atmosphere.", price: "From $228", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png" },
          },
          {
            title: "Tsim Sha Tsui: Watches, Jewelry and Tourist-Facing Retail",
            content: "**Tsim Sha Tsui**, along Nathan Road and its side streets, is where much of Hong Kong's tourist-facing jewelry, watch and electronics retail concentrates — genuine deals exist here, but so do well-documented overcharging schemes at certain shops targeting tourists specifically, so stick to shops with clearly displayed prices and be wary of anyone steering you toward a 'special back room' deal. **Harbour City** and **K11 Musea**, two large malls in the area, offer a more straightforward, fixed-price shopping experience if the street-level watch and jewelry shops feel too high-pressure.\n\nK11 Musea in particular blends retail with art installations and a genuinely pleasant design, making it a worthwhile stop even for browsing rather than buying, with harbour-adjacent dining options attached.",
          },
        ],
        faqs: [
          { q: "Where is the best shopping district in Hong Kong?", a: "It depends on what you want: Central and Admiralty for luxury flagships, Causeway Bay for mainstream malls and department stores, Mong Kok for electronics and street-market bargains, Tsim Sha Tsui for watches and jewelry." },
          { q: "Is Mong Kok good for bargain shopping?", a: "Yes, especially the Ladies' Market and surrounding electronics streets — bargaining is expected, though treat it as atmosphere and modest savings rather than deep discounts on quality goods." },
          { q: "Should I buy watches or jewelry from Tsim Sha Tsui street shops?", a: "Be cautious — some shops in this area target tourists with overcharging schemes. Stick to shops with clearly displayed prices, or use the fixed-price retail inside malls like Harbour City or K11 Musea instead." },
          { q: "What is the Mid-Levels Escalator?", a: "The world's longest outdoor covered escalator system, running through Central up into SoHo — a functional piece of transit infrastructure that's also a pleasant, free way to see the area on foot without the steep hill climb." },
        ],
      };

    case "hong-kong-tram-ding-ding-guide":
      return {
        title: "Hong Kong Tram ('Ding Ding') Guide 2026: Routes, Fares and Why It's Worth Riding",
        description: "Hong Kong Tramways has run along the north shore of Hong Kong Island since 1904 — slow, cheap and a genuinely good way to see Central, Wan Chai and Causeway Bay at street level.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3ceacc25ef88c5e40dab7ac06997ce1f95254de542309fec168d5c07e50ca0f.png",
        fastFacts: [
          { icon: "Clock", label: "Running since", value: "1904 — over a century of continuous service" },
          { icon: "DollarSign", label: "Flat fare (adult)", value: "HK$3, paid with Octopus or exact cash on exit" },
          { icon: "MapPin", label: "Route", value: "Along the north shore of Hong Kong Island, Kennedy Town to Shau Kei Wan" },
          { icon: "Clock", label: "Why it's called 'ding ding'", value: "The bell sound the tram makes — the local nickname stuck" },
        ],
        sections: [
          {
            title: "A Century-Old Tram That's Still a Real Commuter Line",
            content: "Hong Kong Tramways has operated continuously along the north shore of Hong Kong Island since **1904**, making it one of the oldest tram systems in the world still running double-decker trams as its standard fleet. Locals call it the **'ding ding'**, after the bell sound it makes, and despite being a genuine tourist draw for the nostalgia and the low-level street view it offers, it remains a real working commuter service used daily by residents along its route — not a heritage attraction kept running purely for visitors.\n\nThe tram runs at a genuinely slow pace compared to the MTR, which is precisely the appeal: it's a way to actually see the streets of Central, Wan Chai, Causeway Bay and beyond rather than passing beneath them in a subway tunnel.",
          },
          {
            title: "The Route and What You'll See",
            content: "The main line runs from **Kennedy Town** in the west through **Central, Admiralty, Wan Chai, Causeway Bay** and on to **Shau Kei Wan** in the east, with a branch looping through Happy Valley. Riding even a portion of this — say, Central through Causeway Bay — gives a street-level cross-section of Hong Kong Island's older, denser neighborhoods that the elevated or underground MTR simply doesn't show.\n\nFor the best experience, climb to the **upper deck** and sit at the front — the view over the tram's own windshield, watching the street scene unfold at walking-adjacent speed, is the whole point of choosing this over faster transit.",
            tourCard: { slug: "h1hong-kong-central-escalator-tram-and-peak-tram", title: "(H1)Hong Kong: Central Escalator, Tram, and Peak Tram Tour", description: "A guided loop covering the tram alongside the Mid-Levels escalator and Peak Tram — good for seeing several of Hong Kong's distinctive transit landmarks in one outing.", price: "From $112", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3ceacc25ef88c5e40dab7ac06997ce1f95254de542309fec168d5c07e50ca0f.png" },
          },
          {
            title: "Fares and How to Pay",
            content: "The tram runs on a genuinely simple **flat fare** regardless of distance travelled — currently HK$3 for adults, with lower rates for children and seniors. Board at the rear doors and pay as you exit at the front, either by tapping an Octopus card or dropping exact cash into the fare box (the driver can't make change, so having coins ready matters if paying cash).\n\nAt roughly the price of a snack, it's one of the cheapest things to do in the entire city, and genuinely useful as transport, not just a novelty ride — many visitors end up using it multiple times across a trip once they realize how convenient it is for short hops between Central and Causeway Bay.",
          },
          {
            title: "Is It Worth Riding If You're Not Going Anywhere Specific?",
            content: "Yes, for most visitors — a tram ride with no particular destination, just riding a few stops and watching the city go by from the upper deck, is a legitimately good use of 20-30 minutes and almost no money. It pairs naturally with a Central or Causeway Bay shopping day, or as a slower alternative to the MTR when you're not in a rush between neighborhoods along the route.\n\nThe one caveat: during rush hour, trams can get crowded and the upper-deck front seats fill quickly, so for the best photo-and-view experience, aim for a mid-morning or early-afternoon ride rather than peak commuting hours.",
          },
        ],
        faqs: [
          { q: "Why is the Hong Kong tram called 'ding ding'?", a: "After the bell sound the tram makes — it's a widely used local nickname for Hong Kong Tramways, not an official name." },
          { q: "How much does the Hong Kong tram cost?", a: "A flat HK$3 fare for adults regardless of distance, paid by Octopus card or exact cash when exiting at the front of the tram." },
          { q: "What is the best tram route to ride for sightseeing?", a: "Central through Wan Chai to Causeway Bay covers a good cross-section of Hong Kong Island's denser, older neighborhoods at street level — sit on the upper deck, front seats, for the best view." },
          { q: "How old is the Hong Kong tram system?", a: "It has run continuously since 1904, making it one of the oldest tram systems still operating in its original double-decker form anywhere in the world." },
        ],
      };

    case "hong-kong-harbour-cruise-guide":
      return {
        title: "Hong Kong Harbour Cruise Guide 2026: Sunset, Dinner and Junk Boat Options",
        description: "From a quick Star Ferry crossing to a full sunset dinner cruise, Hong Kong's harbour can be seen at very different budgets and paces — here's how the main options compare.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b4e977f13c491c10e6e35d2a0c05539387c38827e122f004319c18d33786167.jpg",
        fastFacts: [
          { icon: "Ship", label: "Cheapest option", value: "Star Ferry crossing, under HK$5 one way" },
          { icon: "Clock", label: "Dinner cruise length", value: "Typically 2-3 hours, timed around sunset and the 8pm light show" },
          { icon: "Sailboat", label: "Junk boat cruises", value: "Traditional wooden boats, often half-day with a swim stop" },
          { icon: "Sparkles", label: "Best timed activity", value: "Any harbour cruise around 8pm catches the Symphony of Lights" },
        ],
        sections: [
          {
            title: "Why the Harbour Is Worth Seeing From the Water, Not Just the Shore",
            content: "Victoria Harbour is the organizing feature of the entire city, and while the Peak and the waterfront promenades both give good land-based views, actually being **on the water** changes the perspective meaningfully — skyscrapers tower more dramatically from sea level than from a distant hillside, and the famous **Symphony of Lights** show (nightly, roughly 8pm) hits differently when the buildings are lighting up on both sides of you rather than viewed from one shore.\n\nThe options range widely in price and formality, from a few-dollar Star Ferry crossing to a multi-hour dinner cruise, so the right choice depends on budget and how much of an 'experience' versus simple transport you're after.",
          },
          {
            title: "The Budget Option: Star Ferry",
            content: "If budget is the priority, the **Star Ferry** crossing between Central and Tsim Sha Tsui remains the best-value harbour experience in the city — under HK$5, under 10 minutes, and a genuine slice of harbour-level skyline view. Timed for roughly 30-45 minutes before the 8pm Symphony of Lights, it functions as a free mini-cruise rather than dedicated transport. See our dedicated Star Ferry guide for route details and timing advice.",
            tourCard: { slug: "hk-sail-on-star-ferry-to-million-dollars-view", title: "HK: sail on Star ferry to million-dollars view Central Tour", description: "A guided Star Ferry crossing explaining the skyline as you cross — the simplest, cheapest harbour experience.", price: "From $29", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg" },
          },
          {
            title: "Sunset and Dinner Cruises: The Mid-Range Experience",
            content: "A step up from the Star Ferry, dedicated **sunset and dinner cruises** run on larger, purpose-built boats with open decks, bar service, and often a meal included — typically a dim sum tasting or a broader dinner menu depending on the operator. These run 2-3 hours, timed to catch both the sunset over the western harbour and the 8pm light show from open water, which gives an unobstructed view neither the promenade nor the Star Ferry quite matches.\n\nThis is the format most worth choosing if you want a genuine evening activity rather than quick transport — book ahead during peak season (October-December), since good sunset timing slots fill first.",
            tourCard: { slug: "hk-victoria-sunset-harbour-cruise-dim-sum-tasting", title: "HK Victoria Sunset Harbour Cruise Dim Sum Tasting Night Tour", description: "A sunset cruise with a dim sum tasting, timed to catch both the sunset and the 8pm Symphony of Lights from open water.", price: "From $73", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b4e977f13c491c10e6e35d2a0c05539387c38827e122f004319c18d33786167.jpg" },
          },
          {
            title: "Junk Boat Cruises: A Different, Longer Experience Entirely",
            content: "Traditional **junk boats** — wooden-hulled vessels styled after historic Chinese sailing junks, though most modern tourist versions are motorized rather than true sail — offer a different kind of cruise, usually half-day trips out to quieter waters around the outlying islands or Sai Kung, often with a swim stop, rather than a tight loop around the central harbour. These are less about the skyline and more about a relaxed, social afternoon on the water, popular with groups and often booked privately rather than as a shared tour.\n\nIf skyline views specifically are the goal, stick with a harbour-focused sunset or dinner cruise; if a relaxed afternoon on the water with swimming is more the draw, a junk boat trip out to the islands is the better fit.",
          },
        ],
        faqs: [
          { q: "What is the cheapest way to see Hong Kong's harbour from the water?", a: "The Star Ferry crossing between Central and Tsim Sha Tsui, at under HK$5 one way — it doubles as an informal mini-cruise, especially timed before the 8pm light show." },
          { q: "How long do Hong Kong dinner cruises last?", a: "Typically 2-3 hours, timed to catch the sunset and the nightly Symphony of Lights show around 8pm from open water." },
          { q: "What's the difference between a harbour cruise and a junk boat trip?", a: "A harbour cruise stays close to the central skyline and is built around the view and the light show; a junk boat trip usually heads further out to quieter waters near the outlying islands, often with a swim stop, and is less skyline-focused." },
          { q: "When is the best time for a Hong Kong harbour cruise?", a: "Any cruise timed to be on the water around 8pm catches the nightly Symphony of Lights show, which is the single best-timed moment for a harbour cruise regardless of which option you choose." },
        ],
      };

    case "sai-kung-hiking-guide":
      return {
        title: "Sai Kung Hiking Guide 2026: Hong Kong's Backcountry Side",
        description: "Sai Kung, on Hong Kong's eastern edge, holds some of the territory's best coastal hiking and beaches — a genuinely different Hong Kong from the skyline and markets most visitors see.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/780a1532697b1ffe23798f0e598de19e9c1fcca32c911cbd86b31a6eeb58b68d.png",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Eastern New Territories, roughly 40-60 minutes from Central" },
          { icon: "Mountain", label: "Signature trail", value: "MacLehose Trail Stage 1-2, through Sai Kung Country Park" },
          { icon: "Waves", label: "Known for", value: "High Island Reservoir's volcanic rock formations, sandy beaches" },
          { icon: "Fish", label: "Also worth it", value: "Sai Kung town's seafood restaurants on the waterfront" },
        ],
        sections: [
          {
            title: "Hong Kong's Backcountry Is Closer Than Most Visitors Realize",
            content: "**Sai Kung**, in the eastern New Territories, is roughly 40-60 minutes from Central by bus or a combination of MTR and bus, yet it feels like an entirely different territory once you arrive — country parks, sandy beaches and a genuinely rural coastal landscape that contradicts the dense-skyscraper image most visitors carry of Hong Kong. The area is popular with hikers, weekend beachgoers and seafood diners, but sees a fraction of the international tourist traffic the Peak or Lantau draw, which makes it feel comparatively uncrowded even on a nice weekend.\n\nMost visitors reach Sai Kung as a half-day or full-day trip rather than an overnight, though the area has enough hiking and beach options to fill more time for anyone specifically prioritizing the outdoors over city sightseeing.",
          },
          {
            title: "The MacLehose Trail and High Island Reservoir",
            content: "The **MacLehose Trail**, Hong Kong's longest and most famous hiking trail at roughly 100km total, begins its first stages in Sai Kung Country Park, and Stages 1-2 are the most accessible and popular section for visitors without a full-day commitment. The highlight is **High Island Reservoir**, where a dam wall exposes dramatic hexagonal volcanic rock formations along the coastline — a genuinely striking, less-expected landscape that photographs don't always do justice until you're standing on it.\n\nThis section is moderately strenuous with some exposed, hot stretches in summer, so bring more water than feels necessary and avoid starting in the middle of a hot afternoon; morning starts are standard practice among regular hikers here.",
          },
          {
            title: "Beaches: Hap Mun Bay and the Outlying Options",
            content: "Sai Kung's coastline holds some of Hong Kong's best beaches, with **Hap Mun Bay** (Half Moon Bay) a particular favorite, reached by a short sampan (small motorboat) ride from Sai Kung's public pier rather than by road. The water quality and sand here consistently rate among the best in Hong Kong's beach rankings, and the lack of road access keeps crowds more manageable than beaches reachable directly by bus.\n\nSeveral other outlying islands and coves around Sai Kung are reachable by chartered sampan or kayak, and this area is also a popular base for sea kayaking and stand-up paddleboarding if hiking specifically isn't the draw.",
          },
          {
            title: "Sai Kung Town: Seafood and a Different Pace",
            content: "**Sai Kung town** itself, on the waterfront, is known for its seafood restaurants — many with live tanks where you pick your own fish, prawns or shellfish before it's cooked — and a noticeably slower, more relaxed pace than central Hong Kong. It's a natural place to end a hiking or beach day, with outdoor seating along the waterfront promenade and a genuinely local, non-touristy feel despite being a known weekend destination for Hong Kong residents themselves.\n\nGetting back to central Hong Kong from Sai Kung in the evening is straightforward by bus or minibus to the nearest MTR interchange, so there's no need to rush the day to catch transport.",
          },
        ],
        faqs: [
          { q: "How do you get to Sai Kung from central Hong Kong?", a: "By bus, or a combination of MTR to a connecting station followed by bus or minibus — the full trip typically takes 40-60 minutes from Central." },
          { q: "What is the best hike near Sai Kung?", a: "Stages 1-2 of the MacLehose Trail, Hong Kong's longest trail, which pass High Island Reservoir's striking hexagonal volcanic rock formations along the coast." },
          { q: "What is Hap Mun Bay?", a: "Also called Half Moon Bay, one of Sai Kung's best beaches, reached by a short sampan boat ride from the public pier rather than by road — the lack of direct road access keeps it less crowded." },
          { q: "Is Sai Kung worth visiting if I only have a few days in Hong Kong?", a: "It's a strong add-on for a 4+ day trip or for hikers and beach-focused travelers specifically, but on a tight 2-3 day trip it generally loses out to Lantau Island and Hong Kong Island's core sights." },
        ],
      };

    case "hong-kong-afternoon-tea-guide":
      return {
        title: "Hong Kong Afternoon Tea Guide 2026: Colonial Tradition Meets Harbour Views",
        description: "Hong Kong's British colonial history left behind a genuine afternoon tea culture, now served everywhere from grand colonial-era hotels to harbour-view towers — here's how to do it properly.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg",
        fastFacts: [
          { icon: "Clock", label: "Typical service hours", value: "2pm to 6pm, varies by hotel" },
          { icon: "Landmark", label: "Classic venue", value: "The Peninsula Hong Kong's lobby lounge — a genuine institution" },
          { icon: "Utensils", label: "What's served", value: "Tiered stands of sandwiches, scones, pastries, with Cantonese twists common" },
          { icon: "FileText", label: "Booking", value: "Reservations strongly recommended at the well-known hotels" },
        ],
        sections: [
          {
            title: "Why Afternoon Tea Is a Real Hong Kong Tradition, Not an Import",
            content: "Hong Kong's 150+ years as a British colonial territory left a genuine afternoon tea culture behind, and it's been running continuously at the city's grand hotels since well before Hong Kong became the financial hub it is today — this isn't a recent import aimed at tourists but an actual institution with its own local history and rituals. The **Peninsula Hong Kong**, open since 1928, is the most famous venue, its lobby lounge serving afternoon tea beneath a colonial-era ceiling with a live string quartet, and it remains genuinely busy with both tourists and long-time local regulars rather than one or the other exclusively.\n\nMany venues have adapted the format with Cantonese touches — egg tart variations, Chinese tea pairings alongside the classic English black tea, or dim sum-inspired savory items — making Hong Kong afternoon tea a genuine hybrid rather than a straight British transplant.",
          },
          {
            title: "The Classic Experience: Grand Hotel Lounges",
            content: "Beyond the Peninsula, several other colonial-era and grand hotels run well-regarded afternoon tea services, typically in a lobby lounge setting with tiered stands holding finger sandwiches, scones with clotted cream and jam, and a rotating selection of pastries. These sittings run roughly 2pm to 6pm, and reservations are strongly advisable at the best-known venues, particularly on weekends, since walk-in availability is unreliable during peak hours.\n\nPrices at these flagship venues run noticeably higher than a casual cafe tea, reflecting both the setting and the ingredient quality — treat it as a dedicated experience and activity for an afternoon, not a quick snack stop.",
          },
          {
            title: "Modern and Harbour-View Alternatives",
            content: "A newer wave of afternoon tea has moved into Hong Kong's high-rise hotels and harbour-view venues, pairing the classic tiered-stand format with floor-to-ceiling windows over Victoria Harbour — a meaningfully different atmosphere from the colonial-lounge experience, trading history for a skyline backdrop. Several of these venues lean into seasonal or themed menus more aggressively than the traditional hotels, rotating offerings tied to holidays or collaborations.\n\nFor a less formal, more affordable take on the tradition, local cafes and bakeries across the city increasingly offer simplified afternoon tea sets at a fraction of the grand-hotel price, usually without the full silver-service presentation but with the same core format of small sandwiches, scones and pastries.",
          },
          {
            title: "Practical Tips for Booking and Timing",
            content: "Book at least a few days ahead for well-known venues, longer for weekends or if a specific window seat matters to you. Dress codes at the grand hotel lounges tend to be smart-casual rather than strictly formal, but very casual beachwear or gym clothes are generally discouraged at the flagship venues.\n\nAfternoon tea pairs naturally with a Central sightseeing day — most of the classic venues sit within walking distance of the Peak Tram terminus, the Star Ferry pier, or Hong Kong Island's main shopping districts, making it easy to build into an afternoon lull between morning and evening activities rather than a separate dedicated outing.",
          },
        ],
        faqs: [
          { q: "Where is the best afternoon tea in Hong Kong?", a: "The Peninsula Hong Kong's lobby lounge is the most famous and historic option, running since 1928 with a live string quartet, though several other grand hotels and harbour-view venues offer well-regarded alternatives." },
          { q: "Do I need a reservation for Hong Kong afternoon tea?", a: "Strongly recommended at the well-known venues, especially on weekends — walk-in availability is unreliable during peak 2-6pm hours at popular hotels." },
          { q: "Is Hong Kong afternoon tea just British sandwiches and scones?", a: "Many venues blend the classic British format with Cantonese touches — egg tart variations, Chinese tea pairings or dim sum-inspired savory items — making it a genuine local hybrid rather than a straight import." },
          { q: "Is there a cheaper alternative to grand hotel afternoon tea?", a: "Yes — local cafes and bakeries across the city offer simplified, more affordable afternoon tea sets with the same basic format, minus the silver-service presentation of the flagship hotel lounges." },
        ],
      };

    case "wong-tai-sin-temple-guide":
      return {
        title: "Wong Tai Sin Temple Guide 2026: Hong Kong's Most Visited Temple",
        description: "Wong Tai Sin Temple draws fortune-seekers and casual visitors alike with its fortune-telling stalls and kau cim fortune sticks — here's what it is and how to visit respectfully.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e5f8ade148fd775fd2803eaba29a102d35124f5c1a5d05081c9a2ed202a48d0a.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Built", value: "1921, dedicated to the Taoist deity Wong Tai Sin" },
          { icon: "Train", label: "Getting there", value: "Wong Tai Sin MTR station, exit directly outside the temple" },
          { icon: "DollarSign", label: "Entry", value: "Free (small donation requested for the Nine Dragon Wall garden)" },
          { icon: "Sparkles", label: "Known for", value: "Kau cim fortune-telling sticks and an arcade of fortune-teller stalls" },
        ],
        sections: [
          {
            title: "What Wong Tai Sin Temple Actually Is",
            content: "**Wong Tai Sin Temple**, built in 1921 in Kowloon, is dedicated to the Taoist deity of the same name, believed to have the power to heal the sick and grant wishes — a reputation that's made it one of Hong Kong's most consistently busy temples, visited year-round by people seeking blessings for health, business success, exams or general good fortune, not just on major festival days. Its proximity to an MTR station bearing the same name makes it one of the easiest major temples in the city to reach without a taxi.\n\nUnlike some temples that feel primarily historical or touristic, Wong Tai Sin remains an active, functioning place of worship where the majority of visitors on any given day are local residents rather than tourists, which gives it a genuine, lived-in atmosphere rather than a curated heritage-site feel.",
          },
          {
            title: "Kau Cim: The Fortune-Telling Ritual Everyone Comes For",
            content: "The temple's signature practice is **kau cim**, a fortune-telling ritual involving a cylindrical container of numbered bamboo sticks: worshippers kneel, pray, and shake the container until a single stick falls out, its number corresponding to a specific fortune. Many visitors then take their numbered fortune to one of the dozens of professional fortune tellers in the arcade adjoining the temple grounds for an interpretation, often covering a wide range of specialties from palm reading to face reading to Chinese astrology.\n\nTourists are welcome to try kau cim themselves, and it's a genuinely interesting, low-cost cultural experience even for the skeptical — treat the fortune-teller interpretations as entertainment and cultural insight rather than literal prediction, and agree on a price before any extended consultation, since rates aren't always clearly posted.",
          },
          {
            title: "The Grounds: Nine Dragon Wall and Good Wish Garden",
            content: "Beyond the main worship hall, the temple complex includes the **Good Wish Garden**, a landscaped Chinese garden styled after classical imperial gardens, and the **Nine Dragon Wall**, a replica of the famous nine-dragon glazed wall in Beijing's Forbidden City — both charge a small separate admission that goes toward garden upkeep, distinct from the temple itself, which is free to enter.\n\nIncense smoke is a constant, heavy presence throughout the main temple courtyard — worshippers burn large bundles as offerings, and visitors sensitive to smoke should be prepared for a genuinely thick atmosphere near the main altar, especially during busier hours.",
          },
          {
            title: "Visiting Respectfully",
            content: "As an active place of worship, dress modestly (covered shoulders and reasonably covered legs are appreciated, though not strictly enforced) and be mindful around people actively praying — walking directly through someone's prayer space for a photo is considered rude. Photography is generally permitted in the outdoor courtyard areas but check for posted restrictions near the main altar and inside any enclosed shrine areas.\n\nThe temple is busiest around Chinese New Year and on the Wong Tai Sin deity's birthday in the lunar calendar, when crowds multiply significantly — visiting on an ordinary weekday gives a calmer, more contemplative experience if a packed, festival-level atmosphere isn't what you're after.",
          },
        ],
        faqs: [
          { q: "What is Wong Tai Sin Temple known for?", a: "Kau cim fortune-telling — worshippers shake a container of numbered sticks to receive a fortune, then often consult one of dozens of professional fortune tellers in an adjoining arcade for interpretation." },
          { q: "Is Wong Tai Sin Temple free to visit?", a: "Yes, the temple itself is free. A small separate donation is requested for the adjoining Good Wish Garden and Nine Dragon Wall." },
          { q: "How do you get to Wong Tai Sin Temple?", a: "Take the MTR to Wong Tai Sin station — the temple entrance is directly outside the station exit, making it one of the most accessible major temples in Hong Kong." },
          { q: "Can tourists try kau cim fortune-telling?", a: "Yes — tourists are welcome to try it themselves. Treat the subsequent fortune-teller interpretation as cultural entertainment, and agree on a price before an extended consultation since rates aren't always clearly posted." },
        ],
      };

    case "hong-kong-nightlife-lan-kwai-fong":
      return {
        title: "Hong Kong Nightlife Guide 2026: Lan Kwai Fong, Soho and Beyond",
        description: "Lan Kwai Fong is the obvious answer for Hong Kong nightlife, but Soho, Wan Chai and a growing rooftop bar scene give it real competition — here's how the districts actually differ.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        fastFacts: [
          { icon: "MapPin", label: "Lan Kwai Fong", value: "Dense bar-and-club strip, Central — loud, crowded, especially weekends" },
          { icon: "MapPin", label: "Soho", value: "More relaxed bars and restaurants, walking distance from LKF" },
          { icon: "MapPin", label: "Wan Chai", value: "Mixed local and expat bars, less tourist-dense than LKF" },
          { icon: "Building", label: "Rooftop scene", value: "Growing across Central and Kowloon hotel towers, harbour views" },
        ],
        sections: [
          {
            title: "Lan Kwai Fong: The Obvious, Crowded Default",
            content: "**Lan Kwai Fong (LKF)**, a tight cluster of streets in Central, is Hong Kong's best-known nightlife district by reputation, and on weekend nights it lives up to that reputation with a genuinely dense, loud, crowded bar-and-club scene that spills out onto the streets themselves. It's where most first-time visitors end up by default, and for a specific kind of high-energy, see-and-be-seen night out, it delivers exactly what the reputation promises.\n\nThe tradeoff is real crowding, inflated drink prices relative to elsewhere in the city, and an atmosphere that leans heavily toward a younger, louder crowd — if that's not the night you're after, it's worth knowing the alternatives covered below before defaulting here.",
          },
          {
            title: "Soho: The Calmer Alternative Right Next Door",
            content: "**Soho**, immediately adjacent to Lan Kwai Fong and connected via the Mid-Levels Escalator, offers a noticeably calmer version of the same general area — more restaurants and wine bars than clubs, a more international and slightly older crowd, and streets that don't get anywhere near as densely packed even on a Saturday night. It's the better choice for a conversation-friendly evening, a proper dinner followed by drinks, or anyone who wants to be near the LKF energy without being fully inside it.\n\nThe escalator itself, running late into the evening, makes moving between Soho and LKF (or down to Central generally) easy without needing a taxi for a short hop.",
          },
          {
            title: "Wan Chai: Less Touristy, More Local Mix",
            content: "**Wan Chai**, a short ride east of Central, holds a genuinely mixed nightlife scene — some streets lean toward a more local crowd and live-music bars, others carry a long-standing (and somewhat faded) reputation from its red-light-district history that's less prominent today than it once was. It's generally less saturated with tourists than Lan Kwai Fong, which some visitors prefer specifically for that reason, with drink prices often somewhat lower too.\n\nIt's a reasonable choice if you want nightlife with a more local flavor without needing to venture into less central, harder-to-reach neighborhoods.",
          },
          {
            title: "Rooftop Bars: The Growing Third Option",
            content: "Hong Kong's hotel towers, on both the Central and Kowloon sides, have built out a genuinely strong rooftop bar scene in recent years — paying a premium for a drink with a harbour or skyline view that neither LKF nor Soho can match from street level. These venues tend to skew toward a more polished, dress-code-enforced crowd and work well for an earlier-evening drink (sunset through the 8pm light show) before moving on somewhere livelier, rather than as a full night's destination given the higher prices and quieter atmosphere later on.\n\nFor a Hong Kong nightlife evening that covers the range, a reasonable sequence is: a rooftop drink at sunset, dinner in Soho, and LKF or Wan Chai afterward if more energy is wanted — treating the three as stages of an evening rather than mutually exclusive choices.",
          },
        ],
        faqs: [
          { q: "Is Lan Kwai Fong worth visiting?", a: "Yes, for a high-energy, crowded bar-and-club night out, which is exactly its reputation. If that's not the vibe you want, Soho next door or Wan Chai offer calmer, less tourist-dense alternatives." },
          { q: "What's the difference between Lan Kwai Fong and Soho?", a: "They're adjacent, but LKF is denser, louder and more club-and-bar focused, while Soho leans toward restaurants and wine bars with a calmer, slightly older crowd." },
          { q: "Where can I get a rooftop bar with a harbour view in Hong Kong?", a: "Several hotel towers on both the Central and Kowloon sides run rooftop bars with skyline or harbour views — best for an earlier evening drink around sunset rather than a full late night out." },
          { q: "Is Wan Chai safe for a night out?", a: "Yes, generally — it carries a faded historical red-light-district reputation that's far less prominent today, and most of the area functions as an ordinary, somewhat more local-leaning nightlife district." },
        ],
      };

    case "hong-kong-cantonese-opera-guide":
      return {
        title: "Cantonese Opera in Hong Kong: A Visitor's Guide 2026",
        description: "Cantonese opera is a living, UNESCO-recognized art form still performed regularly in Hong Kong — here's where to see it, what to expect, and how to follow a performance as an outsider.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/780a1532697b1ffe23798f0e598de19e9c1fcca32c911cbd86b31a6eeb58b68d.png",
        fastFacts: [
          { icon: "Award", label: "UNESCO status", value: "Inscribed on the Intangible Cultural Heritage list since 2009" },
          { icon: "MapPin", label: "Main venue", value: "Hong Kong Cultural Centre and temporary bamboo theatres" },
          { icon: "Clock", label: "Performance length", value: "A full traditional performance can run 3+ hours" },
          { icon: "Theater", label: "Style", value: "Elaborate costumes, painted faces, stylized singing in Cantonese" },
        ],
        sections: [
          {
            title: "A Living Art Form, Not a Museum Piece",
            content: "**Cantonese opera** combines singing, stylized movement, martial arts and elaborate costume and makeup into a performance tradition that UNESCO recognized as part of humanity's Intangible Cultural Heritage in 2009 — but crucially, it's still actively performed, not preserved only in recordings or museum exhibits. Hong Kong remains one of the strongest living centers for the art form, with regular performances at dedicated venues and, distinctively, temporary bamboo theatres erected for specific festivals, particularly during the Hungry Ghost Festival and other traditional occasions.\n\nFor a visitor with even a passing interest, seeing a performance in a Hong Kong bamboo theatre — a genuinely striking piece of temporary architecture built without nails, specifically for a festival run — is a very different experience from a formal theatre setting and worth prioritizing if the timing of your trip happens to align with one.",
          },
          {
            title: "Where to See It: Formal Venues",
            content: "The **Hong Kong Cultural Centre** in Tsim Sha Tsui and the **Hong Kong Heritage Museum** in Sha Tin both host regular Cantonese opera performances and have dedicated exhibition space explaining the art form's history, costumes and instruments — the Heritage Museum's permanent Cantonese Opera gallery is a useful primer even if you don't catch a live performance during your visit. Smaller community centers and temples across the city also host performances tied to specific festivals or deity birthdays throughout the year, though these are less consistently scheduled and often require some local knowledge or a Cantonese-speaking contact to track down in advance.\n\nTicketed performances at the Cultural Centre are the most reliable way to guarantee seeing one during a planned trip, since bamboo-theatre performances depend on the festival calendar lining up with your dates.",
          },
          {
            title: "What to Expect If You Don't Speak Cantonese",
            content: "A full traditional performance can run **three hours or more**, structured around a small number of classical or newly written stories, often drawn from Chinese history and folklore, performed with elaborate painted-face makeup for certain character types and highly stylized, symbolic movement rather than naturalistic acting. Some formal venues provide English or Chinese subtitle screens for major performances, which makes a significant difference for a non-Cantonese-speaking visitor trying to follow the plot rather than just the spectacle.\n\nEven without understanding the dialogue, the visual craft — costumes, makeup, the live orchestra of traditional instruments, and the acrobatic martial-arts sequences in certain scenes — carries real value on its own; treat the language barrier as a limitation rather than a reason to skip it entirely.",
          },
          {
            title: "A Shorter Introduction If a Full Performance Doesn't Fit Your Schedule",
            content: "If a 3+ hour commitment doesn't fit your itinerary, the **Hong Kong Heritage Museum's** Cantonese Opera gallery offers a much shorter, self-paced introduction: costumes, instruments, backstage recreations and video excerpts that give a real sense of the art form in 30-45 minutes. Some cultural tour operators also run shorter, curated excerpt performances specifically aimed at visitors, cutting a highlights reel from a longer traditional piece rather than committing to the full runtime.\n\nEither approach gives genuine exposure to a UNESCO-recognized living tradition that most visitors to Hong Kong never encounter at all, which makes it a distinctive addition to a trip focused mainly on food, shopping and skyline views.",
          },
        ],
        faqs: [
          { q: "Is Cantonese opera still performed in Hong Kong?", a: "Yes — it's a living tradition, not a museum piece, with regular performances at the Hong Kong Cultural Centre and temporary bamboo theatres erected for specific festivals throughout the year." },
          { q: "Do Cantonese opera performances have English subtitles?", a: "Some formal venue performances provide subtitle screens for major shows, which helps non-Cantonese speakers follow the plot. Bamboo-theatre festival performances are less consistently subtitled." },
          { q: "How long does a Cantonese opera performance last?", a: "A full traditional performance can run three hours or more. Shorter, curated excerpt performances aimed at visitors are sometimes available through cultural tour operators." },
          { q: "Where can I learn about Cantonese opera without attending a full performance?", a: "The Hong Kong Heritage Museum in Sha Tin has a dedicated permanent Cantonese Opera gallery with costumes, instruments and video excerpts — a solid 30-45 minute introduction." },
        ],
      };

    case "hong-kong-7-day-itinerary":
      return {
        title: "The Perfect 7-Day Hong Kong Itinerary (2026): A Full Week, Done Right",
        description: "A week in Hong Kong is enough to cover the city core, Lantau Island properly, a Macau day trip, and genuinely slower, off-the-main-track days — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/780a1532697b1ffe23798f0e598de19e9c1fcca32c911cbd86b31a6eeb58b68d.png",
        sections: [
          {
            title: "Days 1-3: The Core, As Covered in Our 3-Day Itinerary",
            content: "Spend your first three days as laid out in our dedicated 3-day itinerary: Day 1 on Hong Kong Island covering the Peak Tram, dim sum and the Star Ferry; Day 2 on Lantau Island for the Big Buddha, Ngong Ping 360 cable car and Tai O; Day 3 in Kowloon's markets, finishing at Temple Street Night Market. This gets the headline sights out of the way efficiently and leaves the remaining four days for depth and pace that a shorter trip can't accommodate.",
            tourCard: { slug: "premium-lantau-tour-vip-cable-car-big-buddha-tai", title: "Premium Lantau Tour: VIP Cable Car, Big Buddha, Tai O, Lunch", description: "The full Lantau day in one booking, covering the cable car, Big Buddha, Tai O and lunch.", price: "From $224", duration: "7 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9245ae2573acd2bdc4fbcf85d76ae21ffbe9e4222855c692577cd7c011c4c735.jpg" },
          },
          {
            title: "Day 4: Macau",
            content: "Dedicate day four to a **Macau day trip** — roughly an hour each way by high-speed ferry, giving a full day in the UNESCO-listed old town, the Ruins of St. Paul's, and either the casinos or more historic-centre wandering depending on your interest. See our dedicated Macau guide for ferry logistics and what to prioritize once there; treat it as a clean, self-contained day rather than trying to combine it with anything else given the ferry and immigration time on both ends.",
            tourCard: { slug: "from-hong-kong-macau-day-tour-with-ferry-lunch", title: "From Hong Kong: Macau Day Tour with Ferry, Lunch, Pickup", description: "Ferry, lunch and a guided Macau day bundled together with hotel pickup — the simplest way to handle a day trip's logistics.", price: "From $272", duration: "10 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf36bb0e528532d27f1d1bcac310f881664fa4a95f405c4f7a9519d0bb7058c2.jpg" },
          },
          {
            title: "Day 5: Museums and West Kowloon Cultural District",
            content: "Use day five for the museum side of the city — **M+** and the **Hong Kong Palace Museum** in West Kowloon, paired with the waterfront promenade and, if timing allows, **Sky100** for a different skyline angle looking back at Hong Kong Island. This is a good lower-intensity day after the Macau trip, mostly indoors and air-conditioned with manageable walking distances between the cultural district's main sites.",
          },
          {
            title: "Day 6: Sai Kung or a Slower, Local Day",
            content: "By day six, most visitors have covered the obvious highlights and benefit from a genuinely different pace. **Sai Kung**, in the eastern New Territories, offers hiking, beaches and seafood far from the tourist core — a legitimate full day for anyone with even moderate interest in the outdoors. Alternatively, use this day for neighborhoods you've only passed through so far: Sham Shui Po's local markets, a proper look at Wan Chai, or simply a slower repeat visit to whichever district most caught your interest earlier in the week.",
          },
          {
            title: "Day 7: Wrap-Up and Whatever Got Missed",
            content: "Reserve your final day as flex time — a second visit to the Peak at a different time of day for different light, a dim sum restaurant you didn't make it to, last-minute shopping in Causeway Bay, or simply resting before a flight. A full week leaves enough slack that nothing has to be perfectly scheduled; the main risk with 7 days is over-planning rather than running out of things to do.",
          },
        ],
        faqs: [
          { q: "Is 7 days too long for Hong Kong?", a: "No — a week comfortably covers the city core, a full Lantau Island day, a Macau day trip, the West Kowloon museums, and at least one slower, off-the-main-track day like Sai Kung, without feeling rushed anywhere." },
          { q: "Should I add Macau to a 7-day Hong Kong trip?", a: "Yes — a week gives enough slack to dedicate a full day to Macau without displacing anything else, unlike a shorter 3-day trip where it competes directly with Lantau or Kowloon time." },
          { q: "What should I do on a 7-day trip that a 3-day trip skips?", a: "Macau, the West Kowloon museums (M+ and the Hong Kong Palace Museum), and a slower outdoor day like Sai Kung hiking are the three additions a week allows that a 3-day itinerary typically can't fit." },
        ],
      };

    case "hong-kong-budget-travel-guide":
      return {
        title: "Hong Kong on a Budget 2026: How to Do It Cheap Without Missing the Highlights",
        description: "Hong Kong has a reputation as an expensive city, but its best experiences — the Star Ferry, the tram, street food, hiking — are genuinely cheap. Here's how to keep costs down.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1adedc55131203d80fbc40423126d42070bc78cfe083f583f7d5741c5b8626a7.jpeg",
        fastFacts: [
          { icon: "DollarSign", label: "Cheapest harbour view", value: "Star Ferry crossing, under HK$5" },
          { icon: "DollarSign", label: "Cheapest city transport", value: "Hong Kong Tramways flat fare, HK$3" },
          { icon: "Utensils", label: "Cheap, good food", value: "Cha chaan tengs and siu mei roast meat shops" },
          { icon: "Mountain", label: "Free attractions", value: "Dragon's Back and most hiking trails, Nightly light show" },
        ],
        sections: [
          {
            title: "Hong Kong's Reputation for Expense Is Mostly About Hotels, Not Activities",
            content: "Hong Kong's cost-of-living reputation comes largely from its hotel and real-estate prices, not from the cost of actually doing and eating things day to day — many of the city's single best experiences are genuinely cheap. A Star Ferry crossing costs under HK$5, the historic tram runs a flat HK$3 fare regardless of distance, and the nightly Symphony of Lights show over the harbour is entirely free to watch from the Tsim Sha Tsui or Central promenade.\n\nThe real budget lever, if accommodation costs are a concern, is staying slightly outside the most central districts (Kowloon generally runs cheaper than Hong Kong Island's core) and leaning on the efficient, inexpensive public transport network rather than taxis.",
          },
          {
            title: "Eating Cheap Without Eating Badly",
            content: "**Cha chaan tengs** are the single best budget-food move in the city — a full meal with a drink rarely costs more than a casual fast-food order elsewhere, and the food is genuinely good, not a compromise. **Siu mei** shops selling sliced roast meats over rice offer a similarly fast, cheap, satisfying meal, and dim sum, while it can run expensive at the fanciest restaurants, has plenty of no-frills, locally-oriented options at a fraction of the hotel-restaurant price.\n\nStreet snacks — curry fish balls, egg waffles, roasted chestnuts in cooler months — round out genuinely cheap eating between meals, and tipping culture here (a built-in 10% service charge at most restaurants, with further tipping optional rather than expected) means you're not padding the bill further than the menu price suggests.",
          },
          {
            title: "Free and Near-Free Activities",
            content: "Hiking is entirely free and genuinely world-class relative to the cost: the **Dragon's Back** trail on Hong Kong Island's south side and sections of the Lantau Trail or MacLehose Trail near Sai Kung cost nothing beyond transport to the trailhead. The **Octopus card** (see our dedicated guide) keeps transport costs low and predictable across the whole trip, and several government museums charge only nominal fees or are free on certain days.\n\nThe **Mid-Levels Escalator** in Central, a functional piece of transit infrastructure, is also a legitimately interesting, entirely free thing to ride through SoHo and Central's hillside streets, and temples like Wong Tai Sin Temple are free to enter, with only the adjoining garden charging a small fee.",
          },
          {
            title: "Where Not to Cut Corners",
            content: "A few things are worth paying for even on a tight budget: the **Peak Tram** and **Big Buddha cable car** are genuine, singular experiences rather than easily substituted sights, and skipping them to save a relatively modest ticket fee tends to be regretted more than most other cost cuts. Booking tickets in advance for these, rather than paying premium walk-up or skip-the-line prices on the day, is the smarter budget move than skipping the attraction entirely.\n\nSimilarly, the Octopus card's small upfront cost (HK$39 for the tourist version) pays for itself quickly in convenience and avoided ticket-machine queuing across even a short multi-day trip.",
          },
        ],
        faqs: [
          { q: "Is Hong Kong an expensive city to visit?", a: "Hotels and shopping can be expensive, but the core sightseeing experiences — the Star Ferry, the tram, hiking trails, street food — are genuinely cheap. Overall trip cost depends heavily on accommodation choices more than activities." },
          { q: "What is the cheapest way to see Hong Kong's harbour?", a: "The Star Ferry crossing, under HK$5 one way, remains the best-value harbour view in the city." },
          { q: "What is the cheapest good food in Hong Kong?", a: "Cha chaan tengs (Hong Kong-style diners) and siu mei roast meat shops both offer full, satisfying meals at close to fast-food prices." },
          { q: "Are there free things to do in Hong Kong?", a: "Yes — hiking trails like Dragon's Back, the nightly Symphony of Lights show, the Mid-Levels Escalator, and most temples are entirely free." },
        ],
      };

    case "hong-kong-luxury-travel-guide":
      return {
        title: "Hong Kong Luxury Travel Guide 2026: How to Do the City at the Top End",
        description: "From harbour-view suites and Michelin-starred dim sum to private junk charters and the Ruby Special Peak Tram experience, here's how Hong Kong's high end actually works.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e5f8ade148fd775fd2803eaba29a102d35124f5c1a5d05081c9a2ed202a48d0a.jpg",
        fastFacts: [
          { icon: "Star", label: "Classic luxury stay", value: "The Peninsula Hong Kong — colonial-era flagship, open since 1928" },
          { icon: "Utensils", label: "Fine dining dim sum", value: "Multiple Michelin-starred dim sum restaurants, a genuine Hong Kong specialty" },
          { icon: "Sailboat", label: "Private experience", value: "Private junk boat charters out to the outlying islands" },
          { icon: "Ticket", label: "Peak Tram premium", value: "Ruby Special — priority boarding, dedicated car, welcome drink" },
        ],
        sections: [
          {
            title: "Where to Stay: Harbour Views Are the Real Luxury",
            content: "Hong Kong's top hotels compete most directly on **harbour views** — a room with a direct, unobstructed outlook over Victoria Harbour, ideally positioned to catch the nightly Symphony of Lights from your own window, commands a genuine premium over an equivalent room without one, and most visitors who've paid for it describe it as worth it precisely because the view is the city's single best, most repeatable asset. The **Peninsula Hong Kong**, the colonial-era flagship open since 1928, remains the classic choice on the Kowloon side, with its own fleet of Rolls-Royce cars for airport transfers and the lobby's famous afternoon tea service.\n\nNewer luxury towers on both sides of the harbour compete on more contemporary design and amenities — infinity pools, higher floors, more minimalist interiors — but the fundamental value proposition across the top tier remains the same: pay for the view and the service, since Hong Kong's density means a mediocre room location genuinely diminishes the experience more than in a sprawling, lower-rise city.",
          },
          {
            title: "Fine Dining: Michelin-Starred Dim Sum and Beyond",
            content: "One of Hong Kong's genuine luxury-dining distinctions is how many **Michelin-starred restaurants serve dim sum** specifically, elevating a traditionally casual, affordable meal format into a fine-dining experience with premium ingredients (abalone, lobster, truffle) worked into classic dumpling and bun formats. This is worth seeking out specifically because it's a genuinely Hong Kong twist on luxury dining rather than an imported Western fine-dining template — few other cities apply this level of culinary ambition to dim sum as a category.\n\nBeyond dim sum, Hong Kong's fine-dining scene spans a genuine range of Cantonese, broader Chinese regional, and international cuisines at the top end, frequently paired with the same harbour views that define the hotel market — many of the city's best tables sit in hotel towers specifically to leverage that view alongside the food.",
          },
          {
            title: "Private and Premium Experiences",
            content: "A **private junk boat charter** — booking an entire traditional-style vessel rather than joining a shared tour — opens up a slower, more flexible day around the outlying islands, with full control over timing, swim stops and route, typically with catering included. This is a popular choice for groups wanting a genuinely private day on the water rather than a shared tour schedule.\n\nFor the Peak Tram specifically, the **Ruby Special** ticket tier (around HK$342 per adult) includes priority boarding that skips the general queue entirely, a dedicated tram car, a welcome drink, and express Sky Terrace access — a legitimate way to buy back time during peak season when the standard queue can run well over an hour, and the kind of small premium that genuinely changes the experience rather than just the price.",
            tourCard: { slug: "hong-kong-city-highlights-tour-with-peak-tram-ride", title: "Hong Kong: City Highlights Tour with Peak Tram Ride", description: "A guided, pre-arranged Peak Tram experience that removes the ticket-counter and queue hassle entirely.", price: "From $129", duration: "3.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5196545510eb1c4bad8b7f6e41d941809ee7398f82fe41fef3cdf72211b1aa7e.jpg" },
          },
          {
            title: "Private Guides and Skip-the-Line Access",
            content: "Across almost every major Hong Kong attraction — the Peak Tram, the Big Buddha cable car, M+ — private guided tours with pre-booked, skip-the-line or priority access are available at a premium over standard shared tours, and on a time-constrained luxury trip, these are usually worth the extra cost purely for the time saved during peak season queues. A dedicated private guide also opens up a more customized day than a fixed shared-group itinerary allows, which matters more in a dense city like Hong Kong where logistics between neighborhoods can eat into a day faster than expected.\n\nFor shopping specifically, several luxury malls in Central offer by-appointment personal shopping services at their flagship stores — worth arranging ahead if a specific high-demand item or a dedicated styling session is the goal.",
          },
        ],
        faqs: [
          { q: "What is the best luxury hotel in Hong Kong?", a: "The Peninsula Hong Kong is the classic choice, open since 1928 with its own Rolls-Royce fleet and famous afternoon tea. Newer luxury towers on both sides of the harbour compete on more contemporary design, but a harbour view is the consistent premium feature across the top tier." },
          { q: "Why does Hong Kong have Michelin-starred dim sum?", a: "Several Hong Kong restaurants apply fine-dining ingredients and technique to the traditionally casual dim sum format, elevating dumplings and buns with premium ingredients — a distinctly Hong Kong take on luxury dining." },
          { q: "What is the Ruby Special Peak Tram ticket?", a: "A premium Peak Tram tier (around HK$342/adult) with priority boarding that skips the general queue, a dedicated tram car, a welcome drink and express Sky Terrace access." },
          { q: "Is a private junk boat charter worth it in Hong Kong?", a: "For groups wanting full control over timing and route around the outlying islands, yes — it trades the cost premium of a shared tour for genuine flexibility and privacy." },
        ],
      };

    case "hong-kong-rainy-day-activities":
      return {
        title: "Hong Kong Rainy Day Guide 2026: What to Do When the Weather Doesn't Cooperate",
        description: "Hong Kong's humid, rain-prone climate means a washed-out day is a real possibility on any trip — here's a genuinely good backup plan, not just 'go to a mall'.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg",
        fastFacts: [
          { icon: "CloudRain", label: "Rainiest months", value: "May through September, overlapping typhoon season" },
          { icon: "Building", label: "Best indoor view", value: "Sky100 observation deck — fully indoor, still delivers a skyline view" },
          { icon: "Landmark", label: "Museum options", value: "M+, Hong Kong Museum of History, Hong Kong Science Museum" },
          { icon: "Utensils", label: "Easy fallback", value: "A long dim sum or cha chaan teng meal — indoor, unhurried, no weather dependency" },
        ],
        sections: [
          {
            title: "Swap the Peak Tram for Sky100",
            content: "If rain or heavy haze ruins the Peak Tram's outdoor appeal, **Sky100**, the fully indoor observation deck in the ICC tower on the Kowloon side, delivers a comparable skyline-view experience without any outdoor exposure — floor-to-ceiling windows mean the view is often still reasonably clear even in moderate rain, and the whole visit stays under an hour. See our dedicated Victoria Peak vs Sky100 comparison for how the two actually differ beyond the weather factor.",
          },
          {
            title: "Museums: A Genuinely Strong Rainy-Day Lineup",
            content: "Hong Kong's museum scene is strong enough to fill an entire rainy day without feeling like a consolation plan. **M+** in West Kowloon covers contemporary art and design at a scale matched by few museums in Asia; the **Hong Kong Museum of History** gives real context on the city's colonial and wartime past in a fully indoor, air-conditioned setting; and the **Hong Kong Science Museum**, hands-on and family-friendly, works well if traveling with kids who've had enough of being told to look rather than touch.\n\nAll three sit within reasonable MTR distance of each other on the Kowloon side, making a two-museum day entirely feasible without excessive transit time between them.",
          },
          {
            title: "Shopping Malls Done Right, Not as a Last Resort",
            content: "Malls get dismissed as the boring rainy-day default, but Hong Kong's better ones are genuinely worth treating as a destination rather than a fallback: **IFC Mall** in Central connects directly to the Airport Express and MTR without stepping outside, pairs retail with harbour-view dining, and sits a short covered walk from the Star Ferry pier if the rain lets up. **K11 Musea** in Tsim Sha Tsui blends retail with rotating art installations and a genuinely well-designed interior that rewards unhurried wandering rather than a quick in-and-out.\n\nBoth let you string together shopping, a meal and even a harbour view entirely under cover, which is the real rainy-day skill in a city built as vertically and densely as Hong Kong.",
          },
          {
            title: "A Long, Unhurried Meal Is Underrated as a Weather Plan",
            content: "When the alternative is slogging around outdoor sightseeing in the rain, a deliberately long, unhurried **dim sum lunch** or a leisurely afternoon tea becomes a genuinely good use of a rainy afternoon rather than a consolation activity — order in rounds, linger over tea, and let the meal stretch out longer than you normally would. See our dedicated dim sum and afternoon tea guides for how to do either properly rather than rushing through either as filler.\n\nIndoor food halls inside Hong Kong's bigger malls also work well here, offering enough variety to turn 'waiting out the rain' into an actual food-exploration afternoon rather than dead time.",
            tourCard: { slug: "hong-kong-small-group-dim-sum-lunch-with-30", title: "Hong Kong: Small-Group Dim Sum Lunch with 30+ Items", description: "A guided, unhurried dim sum tasting lunch — a genuinely good rainy-day plan rather than a consolation activity.", price: "From $1105", duration: "2.5 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/238b5465b7fe6311243810dfcdc5da07c8c7341098818628dc4e91ead1c8c84b.jpg" },
          },
        ],
        faqs: [
          { q: "What should I do in Hong Kong if it rains?", a: "Swap the Peak Tram for the fully indoor Sky100 observation deck, spend the day at M+ or the Hong Kong Museum of History, or treat a mall like IFC Mall or K11 Musea as a proper destination rather than a last resort." },
          { q: "When is Hong Kong's rainy season?", a: "Roughly May through September, overlapping with typhoon season (also May-November), with the heaviest and most frequent rain concentrated in the summer months." },
          { q: "Is Sky100 a good alternative to the Peak Tram in bad weather?", a: "Yes — it's fully indoor and still delivers a genuine skyline view, unlike the Peak Tram's outdoor terrace element, which loses most of its appeal in rain or heavy haze." },
          { q: "Are Hong Kong malls worth visiting as an activity, not just shelter from rain?", a: "The better ones, yes — IFC Mall and K11 Musea in particular combine retail with harbour views or art installations well enough to be a legitimate destination rather than just a rain shelter." },
        ],
      };

    case "ocean-park-vs-disneyland-hong-kong":
      return {
        title: "Ocean Park vs Hong Kong Disneyland: Which Theme Park Is Right for You",
        description: "Hong Kong has two major theme parks with genuinely different identities — Disneyland's character-driven rides versus Ocean Park's animals and thrill rides. Here's how to pick, or whether to do both.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg",
        fastFacts: [
          { icon: "Castle", label: "Hong Kong Disneyland", value: "Smallest global Disney park, character-driven rides, Lantau Island" },
          { icon: "Fish", label: "Ocean Park", value: "Marine life, animal exhibits plus thrill rides, Hong Kong Island's south side" },
          { icon: "Users", label: "Best for Disneyland", value: "Younger kids, first-time Disney visitors, families wanting a lower-stress day" },
          { icon: "Zap", label: "Best for Ocean Park", value: "Older kids and thrill-ride fans, animal and marine-life interest" },
        ],
        sections: [
          {
            title: "They're Not Really Competing for the Same Visitor",
            content: "It's tempting to frame **Hong Kong Disneyland** and **Ocean Park** as rivals selling the same day out, but they're built around genuinely different experiences. Disneyland leans entirely on character-driven storytelling, classic rides and parades — the identity is unmistakably Disney, scaled down from the bigger US and Japan parks into something more manageable in a single day. **Ocean Park** splits its identity between a marine-life and conservation-focused side (aquariums, panda exhibits, animal shows) and a genuine thrill-ride side with roller coasters and a cable car and funicular connecting its two main areas across a hillside.\n\nFamilies with young children generally default to Disneyland for its gentler pacing and recognizable characters; families with older kids or anyone who specifically wants roller coasters and animal exhibits over character meet-and-greets tend to prefer Ocean Park.",
          },
          {
            title: "Hong Kong Disneyland: Compact and Character-Driven",
            content: "As the smallest of the global Disney resorts, Hong Kong Disneyland's main advantage is that it's genuinely doable as a single, unhurried day — fewer lands and attractions than Disneyland California or Tokyo Disneyland means less walking, shorter overall queue time, and a lower risk of the exhaustion a bigger park can produce in young children. The dedicated Disneyland Resort Line MTR, with its Mickey-themed train windows, and add-ons like the Bibbidi Bobbidi Boutique princess makeover round out an experience that's specifically tuned for families rather than thrill-seekers.\n\nFor travelers without kids, or those who've been to a bigger Disney park elsewhere, Hong Kong's version offers comparatively less novelty — weigh it against Lantau Island's other attractions (the Big Buddha, Ngong Ping 360, Tai O) covered in our things-to-do guide, since they occupy similar territory on the same island.",
            tourCard: { slug: "hong-kong-disneyland-bibbidi-bobbidi-boutique", title: "Hong Kong Disneyland: Bibbidi Bobbidi Boutique Package", description: "Park entry with the popular princess makeover experience — best suited to families with younger children.", price: "From $113", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg" },
          },
          {
            title: "Ocean Park: Animals, Thrills and a Hillside Setting",
            content: "Ocean Park's dual identity is its main differentiator: on one side, aquariums, a giant panda exhibit and marine conservation-focused shows; on the other, a genuine roller-coaster and thrill-ride lineup that skews toward older kids, teens and adults who want more adrenaline than Disneyland's family-paced rides provide. The park is built across a hillside on Hong Kong Island's south side, and the cable car and funicular connecting its upper and lower sections are attractions in their own right, giving views over the South China Sea that neither Disneyland nor most other Hong Kong attractions match.\n\nThis makes Ocean Park a stronger single choice for families with a wider age range — older kids and teens get real thrill rides while younger ones and less adventurous visitors can spend the day on the animal and aquarium side without feeling shortchanged.",
          },
          {
            title: "Can You Do Both, and Should You?",
            content: "On a longer trip (4+ days), doing both parks on separate days is entirely reasonable and genuinely non-redundant, given how differently they're built. On a shorter 2-3 day trip, choosing one over the other usually makes more sense than splitting limited time between two theme-park days when Lantau's Big Buddha, Hong Kong Island's Peak, and Kowloon's markets are competing for the same days.\n\nIf forced to choose on a short trip: pick Disneyland for younger-skewing families prioritizing a calm, recognizable experience; pick Ocean Park for families with a wider age spread, thrill-ride interest, or a stronger pull toward animals and marine life over character-driven storytelling.",
          },
        ],
        faqs: [
          { q: "Which is better, Ocean Park or Hong Kong Disneyland?", a: "Depends on the group: Disneyland suits younger kids and a calmer, character-driven day; Ocean Park suits older kids, thrill-ride fans, and anyone drawn to animal and marine-life exhibits over Disney characters." },
          { q: "Can you visit both Ocean Park and Disneyland in one Hong Kong trip?", a: "Yes, comfortably on a 4+ day trip as two separate days. On a shorter 2-3 day trip, most visitors pick one rather than splitting time between both theme parks." },
          { q: "Is Ocean Park good for thrill-ride fans?", a: "Yes — it has a genuine roller-coaster and thrill-ride lineup on one side of the park, distinct from its marine-life and animal-exhibit side, skewing toward older kids, teens and adults." },
          { q: "Is Hong Kong Disneyland worth it if I've been to a bigger Disney park?", a: "Less novel for repeat Disney visitors, since it's the smallest global park — consider weighing the day against Lantau Island's other attractions like the Big Buddha and Ngong Ping 360 instead." },
        ],
      };

    case "best-tours-in-hong-kong":
      return {
        title: "Best Tours in Hong Kong — 2026, Honestly Compared",
        seoTitle: "Best Tours in Hong Kong 2026: Top-Rated Picks by Category",
        description: "The best Hong Kong tours for 2026, picked by category — Victoria Peak, Lantau Island and the Big Buddha, Temple Street night market, a harbour sunset cruise and Disneyland — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        sections: [
          {
            title: "The Short Answer",
            content: "**Victoria Peak**, reached by the historic Peak Tram funicular, is Hong Kong's single most-visited attraction — a pre-booked ticket skips the counter queue entirely and gets you straight to the Sky Terrace 428 view over the full skyline and harbour.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "hong-kong-peak-tram-sky-terrace-428-photos-tour", title: "Hong Kong: Peak Tram Sky Terrace 428 & Photos Tour", description: "The funicular ride plus the viewing deck, without the ticket-booking hassle.", price: "From $119", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
          {
            title: "Best Day Trip: Lantau Island & the Big Buddha",
            content: "**Lantau Island** is mountainous, rural and home to the 34-metre bronze Big Buddha at Ngong Ping, reached by the dramatic Ngong Ping 360 cable car. Combined with Tai O, a stilt-house fishing village, it's a totally different side of Hong Kong from the glass towers.",
            tourCard: { slug: "hong-kong-lantau-vip-priority-cable-car-big", title: "Hong Kong: Lantau VIP Priority Cable Car, Big Buddha & Tai O", description: "Priority cable car access plus the Tai O fishing village in one day — skips the weekend queue.", price: "From $131", duration: "7 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b06e15f219028b4aa5249305d094571ec9394403bf321771f4700b13020c336.jpg" },
          },
          {
            title: "Best Night Market Experience: Temple Street",
            content: "**Temple Street Night Market** in Kowloon's Yau Ma Tei runs from late afternoon into the night with street food, fortune tellers and stall after stall — genuinely more atmosphere than bargain, worth it for the experience rather than deep discounts.",
            tourCard: { slug: "hong-kong-yau-ma-tei-temple-street-night-walking", title: "Hong Kong: Yau Ma Tei Temple Street Night Walking Tour", description: "A guided evening through Temple Street's market stalls, fortune tellers and street food.", price: "From $228", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5008587fb56e196dfaa948d1b25a7357b621c7e284237a865eb6869d279bda8.png" },
          },
          {
            title: "Best Evening on the Harbour",
            content: "A **sunset harbour cruise with dim sum** is the best way to see the Victoria Harbour skyline without the midday heat, and tasting dim sum on the water is a genuinely good version of a Hong Kong classic.",
            tourCard: { slug: "hk-victoria-sunset-harbour-cruise-dim-sum-tasting", title: "HK Victoria Sunset Harbour Cruise Dim Sum Tasting Night Tour", description: "A sunset cruise and dim sum tasting that sidesteps the midday heat entirely.", price: "From $73", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b4e977f13c491c10e6e35d2a0c05539387c38827e122f004319c18d33786167.jpg" },
          },
          {
            title: "Best for Families: Disneyland",
            content: "**Hong Kong Disneyland** is smaller and more compact than its US or Tokyo counterparts, which makes it genuinely doable as a single focused day — good for families with limited time who still want the Disney experience.",
            tourCard: { slug: "hong-kong-disneyland-bibbidi-bobbidi-boutique", title: "Hong Kong Disneyland: Bibbidi Bobbidi Boutique Package", description: "A Disneyland day with the princess-makeover package bundled in — popular with families.", price: "From $113", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c164053dede917013a86e81394967aed912e526c8639d6b67c477d1f04c7f0c.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Hong Kong tours](/hong-kong/hongkong)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Hong Kong?", a: "Victoria Peak via the Peak Tram, with a pre-booked Sky Terrace 428 ticket — it's the single most-visited attraction and the best full-skyline view in the city." },
          { q: "What is the best day trip from Hong Kong city?", a: "Lantau Island — the Big Buddha, the Ngong Ping 360 cable car, and the Tai O fishing village, all a different side of Hong Kong from the glass towers." },
          { q: "Is Temple Street Night Market worth visiting?", a: "Yes, for the atmosphere — street food, fortune tellers and stall after stall of goods — though go for the experience rather than expecting deep bargains." },
          { q: "Is Hong Kong Disneyland worth it with limited time?", a: "Yes — it's the smallest global Disney park, which makes it genuinely doable as a single focused day rather than a multi-day commitment." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Hong Kong?", "acceptedAnswer": { "@type": "Answer", "text": "Victoria Peak via the Peak Tram, with a pre-booked Sky Terrace 428 ticket." } },
                { "@type": "Question", "name": "What is the best day trip from Hong Kong city?", "acceptedAnswer": { "@type": "Answer", "text": "Lantau Island — the Big Buddha, the cable car, and the Tai O fishing village." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Victoria Peak Tram' },
          { icon: 'Map', label: 'Best Day Trip', value: 'Lantau Island' },
          { icon: 'Moon', label: 'Best Night Market', value: 'Temple Street' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-hong-kong-tour-direct-or-through-app":
      return {
        title: "Should You Book a Hong Kong Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Hong Kong Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Hong Kong.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Hong Kong tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA Lantau Island day trip or a Victoria Peak visit involves real logistics — whether the cable car has a weather-related closure policy, what time slot actually avoids the crowd. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "hong-kong-peak-tram-sky-terrace-428-photos-tour", title: "Hong Kong: Peak Tram Sky Terrace 428 & Photos Tour", description: "Ask which time slot actually avoids the crowds before you book.", price: "From $119", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the tour. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number found through a hotel concierge is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the Lantau cable car trip or the harbour cruise would know — the weather-closure policy, or whether dim sum on the cruise handles a dietary restriction. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Hong Kong tour — the [best tours in Hong Kong](/hong-kong/hongkong/best-tours-in-hong-kong), the Victoria Peak tram, the Lantau Island day trip — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Hong Kong; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "hong-kong-lantau-vip-priority-cable-car-big", title: "Hong Kong: Lantau VIP Priority Cable Car, Big Buddha & Tai O", description: "Ask about the cable car's weather-closure policy before booking.", price: "From $131", duration: "7 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b06e15f219028b4aa5249305d094571ec9394403bf321771f4700b13020c336.jpg" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Hong Kong tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book Hong Kong tours direct with an operator?", a: "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Hong Kong tour operator is legit before booking?", a: "Message them a specific question — a cable car weather policy, a dietary need on a cruise — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Hong Kong tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Hong Kong tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Hong Kong tours direct with an operator?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Hong Kong tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Hong Kong tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-10/31)
    case "how-much-should-a-private-tour-guide-cost-in-hong-kong":
      return {
        title: "How Much Should a Private Tour Guide Cost in Hong Kong?",
        seoTitle: "Hong Kong Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guide or car tour in Hong Kong in 2026, by tour type, so you know what's fair before you book.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png",
        sections: [
          {
            title: "The Short Answer",
            content: "A **private Lantau Island or city highlights tour by car** typically runs **$400-620 flat for 1-2 people**, stepping up roughly $270-400 for a third traveller once a bigger vehicle or extra ticket cost is needed. A shorter private market or photo-walk experience runs cheaper, around **$22-315 flat for 1-2 people**, depending on length and whether a professional photographer is involved. A **private boat or speedboat trip** (Geopark, outlying islands) prices considerably higher, **$1,000-1,500+ for 1-2 people**, because you're paying for the vessel and crew.",
            tourCard: { slug: "hong-kong-private-lantau-island-big-buddha-tai-o", title: "Hong Kong: Private Lantau Island, Big Buddha & Tai O Tour", description: "A real example of standard private-car-tour pricing that steps up for a third traveller.", price: "From $402", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
          {
            title: "Why the Price Range Is So Wide",
            content: "A private car tour's cost is mostly the driver and vehicle, which is why many quotes stay flat for 1-2 people before stepping up. A private boat trip's cost is the vessel itself, so it prices high even solo. A photo-walk or market-hopping tour is priced on the guide or photographer's time, which is why the cheapest options here are the walking, no-vehicle experiences. Compare the product, not just the headline price.",
          },
          {
            title: "Red Flags on Price",
            content: "A private car-tour quote well under $400 for a full Lantau Island or city highlights day usually means a shorter route, a shared minivan marketed as private, or a jewellery or electronics-shop detour built into the schedule. For boat trips, confirm the boat is genuinely chartered and not a shared departure re-labelled.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly what's included — which sites, transport type, whether a licensed guide travels with you — and whether a boat quote is a full charter or a shared seat. On AsiaByLocals, every Hong Kong tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Hong Kong tours](/hong-kong/hongkong) to compare real, current prices directly.",
            tourCard: { slug: "private-hong-kong-local-market-hopper", title: "Private: Hong Kong Local Market Hopper", description: "A real example of flat, lower-cost pricing for a walking, no-vehicle private experience.", price: "From $315", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a770dcde68e54570c682cc4a54dbb1eb621ccf4700edddb505edcf5c667b19b8.png" },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Hong Kong?", a: "A private Lantau Island or city highlights tour by car typically runs $400-620 flat for 1-2 people. A shorter private market or photo-walk experience runs $22-315 flat for 1-2 people." },
          { q: "How much does a private boat trip cost in Hong Kong?", a: "A private boat or speedboat trip to the Geopark or outlying islands runs $1,000-1,500+ for 1-2 people, since you're paying for the vessel and crew." },
          { q: "Is a very cheap private tour quote in Hong Kong a red flag?", a: "Often yes — it can mean a shorter route, a shared minivan marketed as private, or a jewellery or electronics-shop detour." },
          { q: "What's usually included in a Hong Kong private tour price?", a: "Typically the driver or guide's fee and transport. Entrance fees and meals are usually listed separately — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Hong Kong?", "acceptedAnswer": { "@type": "Answer", "text": "A private Lantau Island or city highlights tour by car typically runs $400-620 flat for 1-2 people." } },
            { "@type": "Question", "name": "How much does a private boat trip cost in Hong Kong?", "acceptedAnswer": { "@type": "Answer", "text": "A private boat trip to the Geopark or outlying islands runs $1,000-1,500+ for 1-2 people." } },
            { "@type": "Question", "name": "Is a very cheap private tour quote in Hong Kong a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shorter route or a shared minivan marketed as private." } },
            { "@type": "Question", "name": "What's usually included in a Hong Kong private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the driver or guide's fee and transport; entrance fees and meals are usually separate." } },
          ],
        },
      };

    default:
      return null;
  }
}
