// Turkey (Istanbul) authority pages (2026-10). Same CityInfoData shape as
// southKoreaInfoContent.ts / taiwanInfoContent.ts. Turkey launched with 687
// live tours (single city: Istanbul) and zero authority pages — this is the
// first batch, 30 pages. Reached via getTurkeyInfoContent() -> getCityInfoContent().
// Every tourCard slug is taken from the live tour list:
// GET /api/public/tours?country=Turkey&city=Istanbul&status=approved
import type { CityInfoData } from './cityInfoContent';

export function getTurkeyInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-istanbul":
      return {
        title: "Best Time to Visit Istanbul (2026): Weather, Crowds and Festivals Month by Month",
        description: "Istanbul straddles two continents and two climate moods — here's when the Bosphorus weather, crowd levels and festival calendar actually line up for a first visit.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        fastFacts: [
          { icon: "Sun", label: "Best overall windows", value: "April-May and September-October — mild, dry, and before/after the summer crowd peak" },
          { icon: "Thermometer", label: "Summer (June-August)", value: "Hot, humid, often 28-32°C, with the heaviest cruise-ship and tour-group crowds" },
          { icon: "Snowflake", label: "Winter (December-February)", value: "Cold and often grey, occasionally snowy, but the cheapest flights and hotels of the year" },
          { icon: "CloudRain", label: "Rain risk", value: "Winter carries the most rain; Istanbul has no true dry monsoon-free season the way some Mediterranean cities do" },
        ],
        sections: [
          {
            title: "Spring and Autumn Are Istanbul's Real Sweet Spot",
            content: "Istanbul's spring, April through May, and autumn, September through October, both deliver the city's most comfortable combination of mild temperatures — typically high teens to low 20s°C — and manageable crowds at Hagia Sophia, the Blue Mosque and Topkapi Palace. Neither season has a single headline event the way Seoul has cherry blossoms, but both avoid the two things that genuinely degrade a visit: summer's heat-and-crowd combination and winter's grey, wet stretches. Tulip season specifically, usually peaking in April, turns Emirgan Park and several palace gardens into a genuinely worthwhile free stop if your dates line up.\n\nBook timed-entry tickets for Topkapi Palace and the Basilica Cistern a few days ahead even in shoulder season — Istanbul's tourist numbers have grown enough since the pandemic that even April and October see real queues at the headline sites by mid-morning.",
          },
          {
            title: "Summer Brings the Cruise Crowds and the Heat Together",
            content: "June through August runs hot and humid, with daytime highs regularly in the high 20s to low 30s°C, and this is also when Istanbul absorbs its heaviest volume of cruise-ship day-trippers and summer tour groups, which compounds queue times at Sultanahmet's main sights rather than just the heat. The upside is a genuinely lively evening scene — Bosphorus dinner cruises, outdoor rooftop bars and the Princes' Islands day-trip season are all at their best, since swimming off Büyükada's rocky coves and open-deck ferry rides only really work in warm weather.\n\nIf you're visiting in summer, front-load the big indoor-adjacent sights (Hagia Sophia, Topkapi, the Basilica Cistern) for early morning before the heat and crowds peak, and save the Bosphorus cruise and island day trip for when the sun is at its best.",
            tourCard: { slug: "istanbul-bosphorus-sunset-yacht-tour-with-guide", title: "Istanbul: Bosphorus Sunset Yacht Tour With Guide & Snacks", description: "A late-afternoon cruise timed for the golden-hour light that summer evenings deliver best.", price: "From $35", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6024c78ccbf626cabea49fd9701ff28924340966fc088184d649b880daf1a73e.jpeg" },
          },
          {
            title: "Winter Is Cold, Sometimes Snowy, and the Cheapest Time to Go",
            content: "December through February runs cold and often grey in Istanbul, with daytime highs frequently in the single digits Celsius and occasional snow that, when it settles over the Blue Mosque's domes, produces some of the city's most photographed scenes of the year. It's also unambiguously the cheapest season for flights and hotels, and the headline sights go from queue-heavy to genuinely walkable without a crowd. The tradeoff is real: a Bosphorus cruise in January is a colder, choppier experience than in May, and the Princes' Islands are a much quieter, shuttered-up version of their summer selves.\n\nIndoor attractions — the Grand Bazaar, Topkapi's interior halls, the Basilica Cistern, hamam visits — are unaffected by winter weather and arguably more atmospheric without summer's heat.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Istanbul?", a: "April, May, September or October are the strongest months — mild temperatures, manageable crowds, and April adds tulip season in the city's parks. All four avoid both summer's heat-and-crowd peak and winter's cold, grey stretches." },
          { q: "Is Istanbul very hot in summer?", a: "Yes — June through August runs hot and humid with highs in the high 20s to low 30s°C, and this is also when cruise-ship and tour-group volume peaks at the main historic sights." },
          { q: "Does it snow in Istanbul?", a: "Occasionally — winter (December-February) can bring snow, sometimes settling over the Blue Mosque and Hagia Sophia for a few photogenic days, though it isn't a reliable annual event." },
          { q: "Is winter a bad time to visit Istanbul?", a: "Not necessarily — it's genuinely cold and often grey, but it's the cheapest season for flights and hotels, and the indoor sights (Grand Bazaar, Topkapi, the cisterns) are unaffected by the weather." },
        ],
      };

    case "things-to-do-in-istanbul":
      return {
        title: "30+ Best Things to Do in Istanbul (2026): The Complete List",
        description: "From Hagia Sophia's layered history to the Grand Bazaar's 4,000 shops and a sunset Bosphorus cruise — the real list of what's worth your time in Istanbul, organized by neighborhood.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5607be4dd08f484cc80fcd27b73def85102de6e9ec8ad711fcfaf0526b2025b.png",
        fastFacts: [
          { icon: "Landmark", label: "Top landmark", value: "Hagia Sophia — a Byzantine church, then a mosque, then a museum, and a mosque again since 2020" },
          { icon: "MapPin", label: "Best half-day trip", value: "A Bosphorus cruise, by public ferry or a guided sunset boat" },
          { icon: "ShoppingBag", label: "Don't skip", value: "The Grand Bazaar's covered lanes and the Spice Bazaar's scent-heavy stalls nearby" },
          { icon: "Waves", label: "Best day trip", value: "The Princes' Islands — a short ferry ride, no cars, horse carriages and bicycles instead" },
        ],
        sections: [
          {
            title: "The Historic Peninsula: Hagia Sophia, the Blue Mosque and Topkapi Palace",
            content: "**Hagia Sophia** is the obvious starting point and genuinely one of the most historically layered buildings anywhere — built as a Byzantine Orthodox cathedral in 537 AD, converted to a mosque after the 1453 Ottoman conquest, turned into a secular museum under the Turkish Republic in 1935, and converted back into an active mosque in 2020, a decision that drew international criticism from UNESCO and several governments at the time and remains a point of genuine debate. It's a working mosque today, so visiting respectfully — modest dress, headscarves available for women, shoes off in carpeted prayer areas — matters more here than at a typical museum stop.\n\nDirectly across Sultanahmet Square sits the **Blue Mosque (Sultan Ahmed Mosque)**, still an active mosque named for its interior blue İznik tiles, and a short walk away is **Topkapi Palace**, the Ottoman sultans' primary residence for roughly 400 years, whose Harem section requires a separate ticket and is worth the extra time for anyone interested in the empire's internal politics.",
            tourCard: { slug: "istanbul-hagia-sophia-blue-mosque-cistern-guided", title: "Istanbul: Hagia Sophia, Blue Mosque & Cistern Guided Tour", description: "A guided morning covering the three headline Sultanahmet sights with the historical context explained on the spot.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg" },
          },
          {
            title: "The Grand Bazaar, the Spice Bazaar and Galata Tower",
            content: "The **Grand Bazaar**, one of the world's oldest and largest covered markets with roughly 4,000 shops across dozens of covered lanes, is built for haggling — starting prices are inflated for tourists almost everywhere, and a calm counter-offer around 40-60% of the asking price is a normal opening move, not an insult. A ten-minute walk away, the **Spice Bazaar (Mısır Çarşısı)** is smaller, scent-heavy with saffron, sumac and loose teas, and sits right beside the New Mosque and the Golden Horn waterfront.\n\nAcross the Galata Bridge, **Galata Tower**, a 14th-century Genoese watchtower, gives one of the city's best panoramic viewpoints over the old city, the Bosphorus and the Golden Horn simultaneously, and the surrounding Galata and Karaköy neighborhoods have become Istanbul's trendiest concentration of specialty coffee shops and design stores.",
            tourCard: { slug: "istanbul-private-grand-bazaar-shopping-tour-with", title: "Istanbul: Private Grand Bazaar Shopping Tour with Guide", description: "A guided walk through the Grand Bazaar's lanes with a local explaining what's worth buying and what to haggle on.", price: "From $104", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09e5af000b61afab317a5e87bc9d9c28f47e0a4575a4cc3eb8408c4f1c53871c.jpg" },
          },
          {
            title: "The Bosphorus, the Princes' Islands and What Food You Came For",
            content: "A **Bosphorus cruise** — whether a budget public ferry ride or a guided sunset yacht tour — is the one Istanbul experience that genuinely requires water, showing both the European and Asian shorelines, the Ottoman-era waterfront palaces (Dolmabahçe among them) and the two suspension bridges connecting the continents. For a full day trip, the **Princes' Islands**, a short ferry ride from the city center, ban private cars entirely — getting around is by foot, bicycle or horse-drawn carriage, and Büyükada, the largest island, has a genuinely different, slower pace than anywhere in the city proper.\n\nClose out any Istanbul day with a **Turkish coffee** — thick, unfiltered, served with the grounds settled at the bottom, traditionally followed by a fortune-telling reading of the dried residue — and, if your schedule allows one evening for it, a **Whirling Dervish Sema ceremony**, the Mevlevi Sufi order's meditative spinning ritual, now performed as a cultural and spiritual demonstration for visitors rather than in its original monastic context.",
            tourCard: { slug: "istanbul-princess-islands-day-trip-with-lunch", title: "Istanbul: Princess Islands Day Trip with Lunch & Ferry", description: "A full day on the car-free Princes' Islands, ferry and lunch included.", price: "From $88", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd18bf79d05f81d3cb769e7839dcee3ad0e68a5a30a717ccbd01b56db5e1c91.jpg" },
          },
        ],
        faqs: [
          { q: "What is Istanbul's number one attraction?", a: "Hagia Sophia is the single most historically significant landmark, both for its architecture and its unique journey from church to mosque to museum and back to mosque. The Blue Mosque and Topkapi Palace are the two other must-see Sultanahmet sights most itineraries build around." },
          { q: "Is one day enough to see Istanbul?", a: "You can cover the Sultanahmet core — Hagia Sophia, the Blue Mosque, the Basilica Cistern — plus the Grand Bazaar in a single focused day, but Istanbul genuinely rewards 3+ days once you add a Bosphorus cruise and the Princes' Islands." },
          { q: "Can you still visit Hagia Sophia as a tourist since it became a mosque again?", a: "Yes — it remains open to visitors outside prayer times, free of charge, though modest dress is required and women need a headscarf available at the entrance. Prayer times can close off sections temporarily, so check timing if visiting around midday on a Friday." },
          { q: "Is the Grand Bazaar worth visiting if I don't plan to buy anything?", a: "Yes — it's worth a walk-through for the architecture and atmosphere alone, though be ready for a steady stream of shop owners inviting you in, which is normal bazaar culture rather than aggressive sales tactics." },
        ],
      };

    case "istanbul-travel-guide-2026":
      return {
        title: "Istanbul Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Istanbul — e-Visa rules, the Istanbulkart transit card, currency, language and what makes this city genuinely different from the rest of Europe or the Middle East.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5607be4dd08f484cc80fcd27b73def85102de6e9ec8ad711fcfaf0526b2025b.png",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "Most Western nationalities need an e-Visa, applied for online before travel — not visa-free" },
          { icon: "DollarSign", label: "Currency", value: "Turkish Lira (TRY) — cards widely accepted, but small vendors and bazaars often prefer cash" },
          { icon: "Train", label: "Getting around", value: "Metro, tram, ferry and bus — an Istanbulkart contactless card covers all of it" },
          { icon: "MessageCircle", label: "Languages", value: "Turkish is the official language; English is common in tourist areas, much less so elsewhere" },
        ],
        sections: [
          {
            title: "Entry Rules: The e-Visa, Not Visa-Free",
            content: "Unlike several of its regional neighbors, Turkey doesn't offer blanket visa-free entry to most Western travelers — citizens of the US, UK, Canada, Australia and many other countries need to apply for an **e-Visa online before arrival**, a straightforward process through Turkey's official e-Visa portal that typically takes minutes and is approved almost immediately by email. Fees vary by nationality, generally landing somewhere in the USD 20-90 range, and an approved e-Visa is usually valid for 180 days from issue with a maximum stay of 30 to 90 days depending on passport.\n\nApply only through the official government e-Visa site — a long list of third-party sites charge a markup for the same service, and some citizens of certain countries can only get the e-Visa if they already hold a valid Schengen, US, UK or Irish visa, so check your specific nationality's requirement rather than assuming the general rule applies.",
          },
          {
            title: "Money, Cards and the Lira",
            content: "The **Turkish Lira (TRY)** is the local currency, and Turkey has run through a stretch of significant inflation in recent years, which means prices in lira can look large and shift quickly — many tour operators and hotels quote in USD or EUR specifically to sidestep this. Cards are widely accepted at hotels, restaurants and most shops, but the **Grand Bazaar, Spice Bazaar and smaller vendors often prefer or only take cash**, and having some lira on hand smooths over haggling in the bazaars in a way a card transaction doesn't.\n\nATMs are everywhere and generally reliable, but Turkey's dynamic currency conversion prompts (being asked whether to charge in your home currency instead of lira) almost always carry a worse exchange rate — always choose to be charged in Turkish Lira when given the option.",
          },
          {
            title: "Getting Around and a Few Everyday Habits Worth Knowing",
            content: "Istanbul's public transit — metro, tram, bus, funicular and ferry — is extensive and genuinely essential given how spread out the city is across two continents, and the **Istanbulkart**, a rechargeable contactless card, covers all of it at a meaningful discount over single-journey tickets, with free or discounted transfers within a set window. **Istanbul Airport**, the main international gateway on the European side, connects to the city center by metro or the cheaper, slower bus.\n\nA few everyday notes that matter more than most guides mention: tipping (10% or rounding up) is appreciated but not strictly mandatory at restaurants; Turkish tea (çay), not coffee, is the default social drink offered constantly in shops and bazaars; and Istanbul's call to prayer, sounded five times daily from minarets across the city, is a normal part of the soundscape rather than something to be alarmed by.",
            tourCard: { slug: "istanbul-food-tour-small-group-history-photo-spots", title: "Istanbul Food Tour: Small Group, History & Photo Spots", description: "A guided first dinner-and-walk that also covers the city's everyday rhythms most guidebooks skip.", price: "From $117", duration: "3.5 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/838b47cab4965458e2bd87e4c8c9d30ef843b2c4a03aff5e5ed74f4f665636ba.jpg" },
          },
        ],
        faqs: [
          { q: "Do I need a visa for Turkey in 2026?", a: "Most Western nationalities need an e-Visa applied for online before travel — Turkey isn't visa-free for the US, UK, Canada or Australia the way some other Asian destinations are. Apply only through the official government e-Visa portal." },
          { q: "What currency does Istanbul use?", a: "The Turkish Lira (TRY). Cards are widely accepted at hotels and restaurants, but bazaars and smaller vendors often prefer cash, and some haggling goes more smoothly with lira in hand." },
          { q: "What is an Istanbulkart?", a: "A rechargeable contactless transit card covering the metro, tram, bus, funicular and ferry network, sold at machines in metro stations and many kiosks, at a meaningful discount over single-journey tickets." },
          { q: "Is English widely spoken in Istanbul?", a: "Reliably so in tourist areas, hotels and with most tour guides, but it drops off quickly at small local shops and outside the historic peninsula — a translation app smooths over the gap." },
        ],
      };

    case "istanbul-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Istanbul Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Istanbul itinerary built around the Sultanahmet core and a sunset Bosphorus cruise — honest about what fits and what doesn't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        sections: [
          {
            title: "Morning: Hagia Sophia, the Blue Mosque and the Basilica Cistern",
            content: "Start early at **Hagia Sophia** — arriving near opening avoids both the heaviest crowds and the midday prayer-time closures to non-worshippers. Cross Sultanahmet Square to the **Blue Mosque**, then walk a few minutes to the **Basilica Cistern**, a sixth-century underground water reservoir whose columns, dim lighting and reflecting pools make it one of the more atmospheric indoor stops in the old city, famous partly from its James Bond cameo.",
            tourCard: { slug: "istanbul-5-in-1-hagia-sophia-topkapi-cistern", title: "Istanbul: 5-in-1 Hagia Sophia Topkapi Cistern & Grand Bazaar", description: "A guided morning-to-afternoon loop covering the Sultanahmet core in one booking.", price: "From $116", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5607be4dd08f484cc80fcd27b73def85102de6e9ec8ad711fcfaf0526b2025b.png" },
          },
          {
            title: "Midday: Topkapi Palace and the Grand Bazaar",
            content: "Spend the early afternoon at **Topkapi Palace** — the main courtyards and treasury alone take a couple of hours, and the Harem section, ticketed separately, adds real depth if history interests you. From there, walk or take a short tram ride to the **Grand Bazaar** for lunch and an hour of browsing its covered lanes, picking up Turkish delight, textiles or jewelry if haggling appeals to you.",
          },
          {
            title: "Evening: A Bosphorus Cruise at Sunset",
            content: "Close the day with a **Bosphorus cruise**, timed for sunset — whether a budget public ferry from Eminönü or a guided sunset yacht tour, seeing the European and Asian shorelines, Dolmabahçe Palace and the suspension bridges from the water is the single experience a land-only day misses entirely.\n\n**The honest tradeoff of a one-day itinerary:** the Spice Bazaar, Galata Tower and a full Princes' Islands day trip won't fit comfortably alongside the Sultanahmet core and a cruise. If the islands matter more to you than the bazaar, swap it in and save the Grand Bazaar for a later day — Istanbul genuinely rewards a 3-day trip; see our 3-day itinerary for the fuller version.",
            tourCard: { slug: "istanbul-bosphorus-sunset-yacht-tour-with-guide", title: "Istanbul: Bosphorus Sunset Yacht Tour With Guide & Snacks", description: "A guided sunset cruise that closes a full Sultanahmet day without needing to plan the route yourself.", price: "From $35", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6024c78ccbf626cabea49fd9701ff28924340966fc088184d649b880daf1a73e.jpeg" },
          },
        ],
        faqs: [
          { q: "Can you see Istanbul in one day?", a: "You can realistically cover Hagia Sophia, the Blue Mosque, the Basilica Cistern, Topkapi Palace, the Grand Bazaar and a sunset Bosphorus cruise in one focused day. The Princes' Islands and a full Spice Bazaar visit won't fit — those need additional days." },
          { q: "What's the best order for an Istanbul day trip?", a: "Hagia Sophia and the Blue Mosque first thing in the morning before crowds and prayer-time closures build, Topkapi and the Grand Bazaar at midday, then a Bosphorus cruise timed for sunset." },
          { q: "Should I book Topkapi Palace tickets in advance?", a: "It's worth booking a few days ahead in peak season (April-May, September-October) or a skip-the-line option, since the main ticket line can run long by mid-morning." },
        ],
      };

    case "istanbul-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Istanbul Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Istanbul enough room for the Sultanahmet core, a full Bosphorus day and the Princes' Islands — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd18bf79d05f81d3cb769e7839dcee3ad0e68a5a30a717ccbd01b56db5e1c91.jpg",
        sections: [
          {
            title: "Day 1: The Sultanahmet Core and a Sunset Cruise",
            content: "Follow the one-day plan as your first day: Hagia Sophia, the Blue Mosque and the Basilica Cistern in the morning, Topkapi Palace and the Grand Bazaar at midday, a Bosphorus cruise at sunset. This front-loads the headline historic sights and leaves days two and three free to go further without rushing.",
          },
          {
            title: "Day 2: The Spice Bazaar, Galata Tower and a Hamam Evening",
            content: "Spend the morning at the **Spice Bazaar** and the Golden Horn waterfront around the New Mosque, then cross the **Galata Bridge** to climb **Galata Tower** for a panoramic view over the old city and the Bosphorus. Spend the afternoon wandering Galata and Karaköy's coffee shops and design stores, and close the evening with a proper **Turkish hamam** — the steam room, exfoliating scrub and foam massage are a genuinely different kind of tired-feet relief than a regular spa visit.",
            tourCard: { slug: "istanbul-karakoy-hammam-experience", title: "Istanbul: Karakoy Hammam Experience", description: "A traditional hammam visit right in the Galata/Karaköy neighborhood you'll already be exploring that day.", price: "From $146", duration: "1.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6d10d65383c41f9bba8a2857bc84d3bff2fc729bcb382b85b07d0ad94f180fa.jpeg" },
          },
          {
            title: "Day 3: The Princes' Islands",
            content: "Dedicate your final day to a **Princes' Islands** trip — a short ferry ride from the city center to a place with no private cars, where getting around means walking, cycling or a horse-drawn carriage. Büyükada, the largest island, has Ottoman-era wooden mansions, quiet coves and a noticeably slower pace than anywhere in the city proper, and a guided lunch-and-ferry package removes the guesswork of island-hopping on your own schedule.",
            tourCard: { slug: "from-istanbul-princes-islands-boat-trip-with-lunch", title: "From Istanbul: Princes' Islands Boat Trip with Lunch", description: "A full day on the car-free islands, lunch and the return ferry handled for you.", price: "From $73", duration: "7 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b6f54a7a8efaed4adce1198e83f72ecb08ccc52ac8a4787c6a223120f2eb549c.jpg" },
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Istanbul?", a: "Yes, for a well-rounded first visit — the Sultanahmet core, a Galata/hamam day and a full Princes' Islands day covers Istanbul's genuinely different sides without rushing." },
          { q: "Should I add Cappadocia to a 3-day Istanbul trip?", a: "Only as additional days — Cappadocia isn't a day trip from Istanbul given the distance (a domestic flight plus ground transport each way); treat it as a separate multi-day add-on, not a side trip squeezed into a 3-day core." },
          { q: "Is the Princes' Islands day trip worth the time it takes?", a: "Yes for most visitors — the complete absence of cars and the slower pace is a genuinely different experience from the rest of the city, and the ferry ride itself is a scenic stretch of the Bosphorus and Sea of Marmara." },
        ],
      };

    case "turkey-visa-guide-for-tourists":
      return {
        title: "Turkey Visa Guide 2026: The e-Visa, Who Needs What and How to Apply",
        description: "Turkey isn't visa-free for most Western travelers — the e-Visa is mandatory, and getting the process right before you fly avoids a scramble at check-in. Here's exactly what each traveler actually needs.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5607be4dd08f484cc80fcd27b73def85102de6e9ec8ad711fcfaf0526b2025b.png",
        fastFacts: [
          { icon: "FileText", label: "Who needs it", value: "Most Western nationalities, including the US, UK, Canada and Australia — Turkey is not visa-free for these passports" },
          { icon: "DollarSign", label: "Typical cost", value: "Roughly USD 20-90 depending on nationality, paid online when applying" },
          { icon: "Clock", label: "Validity", value: "Usually 180 days from issue, with a maximum stay of 30-90 days depending on passport" },
          { icon: "AlertTriangle", label: "Watch for", value: "Only apply through Turkey's official e-Visa portal — third-party sites charge an unnecessary markup" },
        ],
        sections: [
          {
            title: "Who Needs an e-Visa and Who Doesn't",
            content: "Turkey's e-Visa system covers travelers from a large list of countries, but it is **not** a visa-free arrangement — citizens of the US, UK, Canada, Australia and most of the EU still need to apply for and receive an approved e-Visa before travel, even though the process itself is quick and entirely online. A smaller set of nationalities, including several where conditional approval applies, can only get the Turkey e-Visa if they already hold a valid Schengen, US, UK or Irish visa — if your passport falls into this category, check the current rule for your specific nationality rather than assuming the general process applies.\n\nSome nationalities remain visa-free for short stays and don't need the e-Visa at all. The one universal rule: check your own passport's specific requirement on Turkey's official e-Visa site before booking flights, since the requirement varies meaningfully by nationality in a way few other popular destinations do.",
          },
          {
            title: "Applying Online: Cost, Timing and the Official Portal",
            content: "The e-Visa application itself takes a few minutes on Turkey's official government portal, requiring passport details, travel dates and a payment, typically landing somewhere in the **USD 20-90 range** depending on nationality — US, Australian and Canadian citizens generally pay toward the higher end of that range. Approval usually arrives by email within minutes to a few hours, and it's sensible to apply at least a few days before travel rather than at the airport, since Turkey does not offer visa-on-arrival for most of these nationalities the way some destinations do.\n\n**Only use the official government e-Visa site.** A long list of third-party booking sites mimic the official portal's look and charge a significant markup for processing the identical application — if a site is asking for a fee noticeably above the standard range, it's very likely one of these resellers rather than the government portal itself.",
          },
          {
            title: "Stay Length and What Changes for Longer Trips",
            content: "Most approved e-Visas allow a stay of **30 to 90 days** within a **180-day validity window**, which covers the vast majority of tourist trips without further paperwork, and many are multiple-entry, useful if your trip includes a side trip to Greece or elsewhere in the region and back into Turkey. If you're planning a longer stay, study, or work trip, you'll need a different visa category arranged through a Turkish embassy or consulate in advance, which can't be arranged through the e-Visa portal.\n\nPassports should be valid for at least 6 months beyond the planned stay, and immigration officers can ask for proof of onward travel or accommodation, so keep a return flight itinerary and hotel confirmation accessible on arrival.",
          },
        ],
        faqs: [
          { q: "Is Turkey visa-free for Americans?", a: "No — US citizens need an approved e-Visa applied for online before travel, generally costing toward the higher end of the typical USD 20-90 range. It is not a visa-on-arrival or visa-free arrangement." },
          { q: "How much does the Turkey e-Visa cost?", a: "Roughly USD 20-90 depending on nationality, paid during the online application on Turkey's official e-Visa portal. US, Australian and Canadian citizens typically pay toward the higher end." },
          { q: "How long can tourists stay in Turkey on an e-Visa?", a: "Typically 30 to 90 days per visit within a 180-day validity window, depending on nationality — check your specific passport's allowance on the official portal." },
          { q: "Can I apply for the Turkey e-Visa on arrival at the airport?", a: "No — apply online before you travel. Turkey does not offer visa-on-arrival for most nationalities that need the e-Visa, so arriving without an approved one can cause serious problems at immigration." },
        ],
      };

    case "hagia-sophia-guide":
      return {
        title: "Hagia Sophia Guide 2026: History, the 2020 Reconversion and Visiting as a Tourist",
        description: "Hagia Sophia has been a Byzantine cathedral, an Ottoman mosque, a secular museum and, since 2020, a mosque again — a genuinely rare building history. Here's how to visit it respectfully and what to actually expect.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Built", value: "537 AD, as the Byzantine Empire's Hagia Sophia Cathedral under Emperor Justinian I" },
          { icon: "Clock", label: "Current status", value: "An active mosque since July 2020, open to visitors outside prayer times" },
          { icon: "Ticket", label: "Entry", value: "Free, as with other active mosques in Turkey — donations are welcomed but not mandatory" },
          { icon: "Shirt", label: "Dress code", value: "Modest dress required; headscarves provided for women at the entrance; shoes off inside" },
        ],
        sections: [
          {
            title: "A Genuinely Unusual History: Cathedral, Mosque, Museum, Mosque",
            content: "Hagia Sophia was built in 537 AD as the main cathedral of the Byzantine Empire, standing as the largest Christian church in the world for nearly a thousand years and a defining example of Byzantine architecture, particularly its massive central dome. After the Ottoman conquest of Constantinople in 1453, Sultan Mehmed II converted it into a mosque, adding minarets and covering (rather than destroying) most of its Christian mosaics with plaster, a practice that inadvertently preserved them for centuries. In 1935, the secular Turkish Republic under Atatürk converted it into a museum, stripping back some of the plaster to reveal the Byzantine mosaics alongside Islamic calligraphy — a deliberate symbol of a shared, layered heritage open to all.\n\nIn **July 2020**, Turkey's Council of State annulled the 1935 museum decree and President Erdoğan signed a decree reconverting Hagia Sophia into an active mosque, a decision that drew significant international criticism, including from UNESCO (which maintains the site on its World Heritage list) and several governments, over concerns about the status of its Christian iconography and its symbolic weight. The decision remains genuinely contested and politically significant in a way most tourist landmarks aren't, worth knowing before you visit rather than treating it as simply another historic sight.",
          },
          {
            title: "What Actually Happens to the Mosaics and Christian Elements Today",
            content: "Since reconverting to a mosque, some of Hagia Sophia's most famous Christian mosaics — including depictions of Christ and the Virgin Mary in the upper galleries — are **covered during prayer times with curtains or screens** rather than removed, and visible to visitors outside those windows, a compromise that satisfies neither side completely but keeps both the religious function and the heritage visible in practice. The upper gallery, where many of the best-preserved mosaics are located, has had restricted or separate access arrangements since the conversion, so check current visitor information before planning a visit built specifically around mosaic viewing.\n\nThe building's floor is now carpeted for prayer, a visible, immediate difference from its museum-era bare marble, and the overall visitor experience shifted from a self-paced museum wander to something closer to visiting any other major working mosque in Istanbul, just with far more history attached.",
            tourCard: { slug: "istanbul-turkish-coffee-workshop-rumi-bendir", title: "Istanbul: Turkish Coffee Workshop & Rumi Bendir Hagia Sophia", description: "A Hagia Sophia-adjacent cultural experience pairing a coffee workshop with Sufi music context.", price: "From $16", duration: "1.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0eabcf0405e4cef788cc4a450891a606d52f4159a968fa34a81ae1ade3942f3f.jpeg" },
          },
          {
            title: "Visiting as a Tourist: Dress Code, Timing and Etiquette",
            content: "Entry is **free**, as with other active mosques in Turkey, and there's no advance ticket required the way there is for Topkapi Palace. **Modest dress is required**: shoulders and knees covered for everyone, and headscarves are provided for women at the entrance if needed (bring your own if you'd rather). Shoes come off before entering the carpeted prayer area, with bags provided to carry them. Arrive outside the five daily prayer times for the fullest, least-restricted visit — Friday midday prayers in particular draw the largest crowds and the tightest visitor access.\n\nPhotography is generally allowed in the main hall, but be mindful and quiet around anyone actively praying, and avoid flash photography or treating worshippers as photo subjects. A guided tour that times the visit around prayer schedules and explains the layered history on-site adds genuine value here, more than at almost any other Istanbul landmark.",
            tourCard: { slug: "istanbul-mosques-sightseeing-tour", title: "Istanbul Mosques Sightseeing Tour", description: "A guided tour covering Hagia Sophia and the city's other major mosques with the etiquette and history explained together.", price: "From $77", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd104fb02012b2e5d0532555fab36946b1349780b77710d0a132814348dc62f.jpg" },
          },
        ],
        faqs: [
          { q: "Is Hagia Sophia a church or a mosque?", a: "It's currently an active mosque, reconverted in July 2020 after being a secular museum since 1935. It was originally built as a Byzantine Christian cathedral in 537 AD and was also an Ottoman mosque from 1453 until the 1935 museum conversion." },
          { q: "Do I need to pay to visit Hagia Sophia?", a: "No — entry is free, as with Turkey's other active mosques. Donations are welcomed but not required." },
          { q: "What should I wear to visit Hagia Sophia?", a: "Modest dress — shoulders and knees covered. Headscarves are provided for women at the entrance, and shoes must come off before entering the carpeted prayer area." },
          { q: "Can I still see Hagia Sophia's famous mosaics?", a: "Many remain visible outside prayer times, though some are curtained during prayers, and upper-gallery access (where several key mosaics are located) has had restricted arrangements since the 2020 conversion — check current visitor information before your trip." },
        ],
      };

    case "blue-mosque-guide":
      return {
        title: "Blue Mosque Guide 2026: Visiting Sultan Ahmed Mosque, Hours and Etiquette",
        description: "The Blue Mosque sits directly across Sultanahmet Square from Hagia Sophia and remains an active mosque throughout — here's how to time a visit and what the famous blue tiles actually are.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6244de32e4c2d7ed13e0549b9ae449402dd3118f4d7562418d38378984748e5b.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Official name", value: "Sultan Ahmed Mosque, built 1609-1616 under Sultan Ahmed I" },
          { icon: "Ticket", label: "Entry", value: "Free, as with all active mosques in Turkey" },
          { icon: "Palette", label: "The 'blue' in the name", value: "More than 20,000 handmade İznik ceramic tiles lining the interior walls" },
          { icon: "Clock", label: "Closed to visitors", value: "During the five daily prayer times, especially Friday midday prayers" },
        ],
        sections: [
          {
            title: "Why It's Called the Blue Mosque, and Where the Name Actually Comes From",
            content: "The **Blue Mosque**, officially **Sultan Ahmed Mosque (Sultanahmet Camii)**, gets its popular name from the more than **20,000 handmade İznik ceramic tiles** lining its interior walls and lower domes, predominantly in blue, green and white floral and geometric patterns — a defining feature of 17th-century Ottoman religious architecture produced in the İznik workshops specifically renowned for ceramic quality. Built between 1609 and 1616 under Sultan Ahmed I, it was designed to rival and complement Hagia Sophia directly across the square, and its six minarets (an unusually high number, historically controversial at the time since only the Great Mosque of Mecca had the same count) remain one of its most distinctive exterior features.\n\nUnlike Hagia Sophia, the Blue Mosque has functioned continuously as a mosque since its construction — there was never a museum-era interruption, which makes its visitor experience more consistently mosque-like year-round.",
          },
          {
            title: "Visiting: Entry, Dress Code and Timing Around Prayers",
            content: "Entry is **free**, with a separate visitor entrance from the one used for worshippers. **Modest dress is required**: shoulders and knees covered, with headscarves provided for women who need one at the entrance. Shoes come off before entering, with plastic bags provided to carry them through the visit. The mosque **closes to non-worshipping visitors during the five daily prayer times**, and Friday midday prayers specifically draw the mosque's largest weekly crowd and the longest visitor-access closure of the week.\n\nThe interior courtyard alone is worth time even before entering the prayer hall — its proportions and the view up toward the cascading domes and six minarets are genuinely striking, and it's a popular, free photo spot regardless of whether you go inside.",
            tourCard: { slug: "istanbul-cistern-guided-tour", title: "Istanbul: Blue Mosque, Hagia Sophia & Basilica Cistern Tour", description: "A guided half-day covering the Blue Mosque alongside Hagia Sophia and the cistern, with prayer-time timing handled for you.", price: "From $22", duration: "3 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8837dfd423716cbdde698ce68fcfc77e8a38eb4cc5bd18c3af921f9867789042.jpeg" },
          },
          {
            title: "Combining It with the Rest of Sultanahmet",
            content: "The Blue Mosque sits in the same square as Hagia Sophia, a two-minute walk, making it the easiest pairing in the entire city — most itineraries cover both in a single morning along with the nearby **Basilica Cistern** and the **Hippodrome**, the ancient Byzantine chariot-racing ground whose obelisks still stand in the square between the two mosques. Going early, before the midday crowds and the first major prayer closure of the day, gives the best combination of light for photos and a genuinely uncrowded courtyard experience.\n\nThe mosque's blue-tiled interior and six minarets also make it one of Istanbul's best sunset and evening photo subjects from across the square or from a rooftop terrace nearby, floodlit after dark.",
          },
        ],
        faqs: [
          { q: "Is the Blue Mosque free to visit?", a: "Yes — entry is free, as with all active mosques in Turkey, with donations welcomed but not required." },
          { q: "Why is it called the Blue Mosque?", a: "For the more than 20,000 handmade İznik ceramic tiles lining its interior, predominantly in blue, green and white patterns. Its official name is Sultan Ahmed Mosque." },
          { q: "When can I not visit the Blue Mosque?", a: "During the five daily prayer times, when it closes to non-worshipping visitors. Friday midday prayers draw the largest closure window of the week." },
          { q: "How far is the Blue Mosque from Hagia Sophia?", a: "They sit directly across Sultanahmet Square from each other, roughly a two-minute walk apart, making them the easiest pairing in Istanbul's historic peninsula." },
        ],
      };

    case "topkapi-palace-tickets-guide":
      return {
        title: "Topkapi Palace Tickets Guide 2026: What's Included, the Harem and Skip-the-Line Options",
        description: "The Harem isn't covered by the standard Topkapi Palace ticket — a detail that catches first-time visitors off guard. Here's exactly what each ticket type actually gets you.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/082f1a0813c0644e768877f4e3459078114df9ddbed36abd44102b627936bdbc.jpg",
        fastFacts: [
          { icon: "Landmark", label: "What it was", value: "The Ottoman sultans' primary residence and administrative seat for roughly 400 years" },
          { icon: "Ticket", label: "Standard ticket", value: "Covers the four main courtyards and the Treasury; does NOT include the Harem" },
          { icon: "AlertTriangle", label: "Harem", value: "Requires a separate ticket, purchased in addition to the standard entry" },
          { icon: "Clock", label: "Time needed", value: "2-3 hours for the main palace, longer with the Harem added" },
        ],
        sections: [
          {
            title: "What the Standard Ticket Covers, and What It Doesn't",
            content: "**Topkapi Palace** served as the primary residence and administrative center of the Ottoman sultans for roughly 400 years from the 15th century, and the standard entry ticket covers its four main courtyards, the Imperial Treasury (home to the Topkapi Dagger and the Spoonmaker's Diamond), the Sacred Relics section and the palace kitchens. What catches first-time visitors off guard is that the **Harem — the sultan's private family quarters, where his wives, concubines and children lived — requires a separate ticket**, purchased in addition to standard entry, not included in the base price the way some visitors assume.\n\nThe Harem is genuinely worth the extra ticket for anyone interested in the empire's internal politics and daily palace life beyond the treasury's spectacle — it's a different, more intimate architectural experience than the grand courtyards, with intricately tiled private rooms.",
            tourCard: { slug: "istanbul-topkapi-palace-harem-fast-track-with", title: "Istanbul: Topkapi Palace & Harem Fast-Track with Audio Guide", description: "A combined ticket covering both the main palace and the separately-ticketed Harem, with fast-track entry.", price: "From $112", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/082f1a0813c0644e768877f4e3459078114df9ddbed36abd44102b627936bdbc.jpg" },
          },
          {
            title: "Skip-the-Line vs Standard Entry: Is It Worth Paying More?",
            content: "Topkapi Palace is one of Istanbul's most visited sites, and the standard ticket line can run genuinely long by mid-morning in peak season (April-May, September-October) — a **skip-the-line ticket**, usually sold at a modest premium over standard entry, removes that wait and is worth it specifically during those months or on weekends. In quieter winter months, the time saved is smaller and the premium may not be worth paying.\n\nA guided tour adds historical context that a self-guided walk or audio guide alone can struggle to match, particularly in the Treasury, where object labels are sparse relative to the significance of what's on display.",
          },
          {
            title: "Timing Your Visit and What's Nearby",
            content: "Arrive early, ideally close to opening, both for lighter crowds in the courtyards and for better light for photos from the palace's sea-facing terraces, which offer one of the best Bosphorus and Golden Horn views in the old city. The palace sits directly adjacent to **Hagia Sophia**, making it a natural pairing for a single Sultanahmet-focused morning or early afternoon, and the **Gülhane Park** gardens just outside the palace walls are a pleasant, free green space to decompress afterward.\n\nBudget at least half a day if combining Topkapi with the Harem and the nearby sights rather than treating it as a quick one-hour stop — the courtyards alone cover significant ground.",
            tourCard: { slug: "topkapi-palace-and-harem-guided-tour-skip-the", title: "Topkapi Palace and Harem Guided Tour - Skip-the-Ticket-Line", description: "A guided walk through both the palace and the Harem with skip-the-line access included.", price: "From $111", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9a09db283609975ebf57a5a1422ca4c72c3c832788fbc63ca83d424dff0c92a.jpg" },
          },
        ],
        faqs: [
          { q: "Does the Topkapi Palace ticket include the Harem?", a: "No — the Harem requires a separate ticket purchased in addition to standard entry. Many visitors assume it's included and are surprised at the gate." },
          { q: "Is a skip-the-line ticket worth it for Topkapi Palace?", a: "Yes in peak season (April-May, September-October) or on weekends, when the standard line can run long. In quieter winter months, the time saved is smaller." },
          { q: "How much time should I budget for Topkapi Palace?", a: "2-3 hours for the main palace and courtyards; longer, closer to half a day, if you add the Harem and want to explore at an unhurried pace." },
          { q: "What's the most famous object in Topkapi Palace's Treasury?", a: "The Topkapi Dagger and the Spoonmaker's Diamond are the two most famous pieces, both housed in the Imperial Treasury section covered by the standard ticket." },
        ],
      };

    case "grand-bazaar-spice-bazaar-guide":
      return {
        title: "Grand Bazaar & Spice Bazaar Guide 2026: Haggling, What to Buy and Getting Between Them",
        description: "The Grand Bazaar's 4,000 shops and the Spice Bazaar's scent-heavy stalls are a ten-minute walk apart but very different experiences — here's how to actually navigate both.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09e5af000b61afab317a5e87bc9d9c28f47e0a4575a4cc3eb8408c4f1c53871c.jpg",
        fastFacts: [
          { icon: "ShoppingBag", label: "Grand Bazaar size", value: "Roughly 4,000 shops across dozens of covered lanes, one of the world's oldest covered markets" },
          { icon: "MapPin", label: "Distance between them", value: "About a 10-minute walk, connected through the Nuruosmaniye and Sirkeci neighborhoods" },
          { icon: "DollarSign", label: "Haggling norm", value: "Counter-offering 40-60% of the asking price is a normal opening move, not an insult" },
          { icon: "Clock", label: "Hours", value: "Both close on Sundays — plan bazaar visits for a weekday or Saturday" },
        ],
        sections: [
          {
            title: "The Grand Bazaar: What to Buy and How to Haggle",
            content: "The **Grand Bazaar (Kapalıçarşı)**, dating back to the 15th century and one of the world's oldest and largest covered markets, spans roughly 4,000 shops organized loosely by trade across dozens of covered lanes — carpets and kilims, gold and silver jewelry, ceramics, leather goods, Turkish lamps, and Turkish delight among the most popular tourist purchases. Prices are almost universally inflated for tourists at the opening ask, and **haggling is the normal, expected mode of transaction**, not an awkward exception — a calm counter-offer around 40-60% of the first price quoted is a reasonable opening move, with the final price usually landing somewhere in between after a bit of back-and-forth.\n\nCarpet shops specifically are worth extra caution: genuine hand-knotted carpets can be a worthwhile, expensive purchase, but high-pressure sales tactics and inflated claims about a carpet's age or origin are common enough that buying only from a shop you've researched, or with a guide who isn't on commission, is the safer approach.",
            tourCard: { slug: "istanbul-grand-bazaar-private-carpet-shopping-tour", title: "Istanbul: Grand Bazaar Private Carpet Shopping Tour", description: "A guided carpet-shopping visit that helps navigate quality, pricing and the haggling process.", price: "From $52", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f9f472a2991b86a0de3d98c7c86a2b13277cac1458e39b49072d9c9e33f85d4.png" },
          },
          {
            title: "The Spice Bazaar: Smaller, Scented and Right by the Water",
            content: "The **Spice Bazaar (Mısır Çarşısı)**, built in the 17th century and far smaller than the Grand Bazaar, is a single long L-shaped hall thick with the scent of saffron, sumac, dried fruits, nuts, Turkish delight and loose teas stacked in colorful pyramids at nearly every stall. It sits right beside the **New Mosque (Yeni Camii)** and the Golden Horn waterfront, making it an easy, quick stop to pair with a Bosphorus-side walk rather than a destination requiring its own dedicated half-day.\n\nSame haggling norms apply here as at the Grand Bazaar, though prices on food items tend to be lower-stakes and less aggressively negotiated than carpets or jewelry — a polite ask for a better price on a larger spice or tea purchase is still normal and often rewarded.",
            tourCard: { slug: "taste-of-istanbul-spice-bazaar-tastings-bosphorus", title: "Taste of Istanbul: Spice Bazaar Tastings & Bosphorus Cruise", description: "A guided Spice Bazaar tasting walk paired with a Bosphorus cruise for the same afternoon.", price: "From $146", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/93e58257cf21a8e1a03f83c2518bcae4dfed01805036e754848d09fab501298d.png" },
          },
          {
            title: "Getting Between the Two and Timing Your Visit",
            content: "The Grand Bazaar and Spice Bazaar are roughly a **10-minute walk** apart, connected through a stretch of smaller shopping streets around Nuruosmaniye and down toward Sirkeci — walkable for most visitors, and a genuinely pleasant transition between the two markets' very different atmospheres. Both bazaars **close on Sundays**, a detail that trips up visitors planning a Sunday shopping day, so build the bazaar visit into a weekday or Saturday instead.\n\nGo in the morning on a weekday for the calmest browsing experience in either market; Saturday afternoons draw the heaviest combined tourist and local shopping crowds of the week.",
            tourCard: { slug: "istanbul-private-shopping-tour-grand-bazaar-and", title: "Istanbul Private Shopping Tour Grand Bazaar and Spice Market", description: "A single guided day covering both bazaars back to back with a local who knows the lanes.", price: "From $52", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b95ceb4f3cf8e2e1fa1eb84847eebeb0f503cc2023bdbee344c8c8e08f0c94a.png" },
          },
        ],
        faqs: [
          { q: "Is haggling expected at the Grand Bazaar?", a: "Yes — it's the normal mode of transaction, not an exception. Counter-offering 40-60% of the first price quoted is a reasonable opening move." },
          { q: "What's the difference between the Grand Bazaar and the Spice Bazaar?", a: "The Grand Bazaar is much larger (roughly 4,000 shops) and covers carpets, jewelry, leather and general goods. The Spice Bazaar is smaller, food- and spice-focused, and sits right by the Golden Horn waterfront." },
          { q: "Are the bazaars open on Sundays?", a: "No — both the Grand Bazaar and Spice Bazaar close on Sundays. Plan a bazaar visit for a weekday or Saturday instead." },
          { q: "Is it safe to buy a carpet at the Grand Bazaar?", a: "Genuine carpets can be a worthwhile purchase, but high-pressure sales and inflated age/origin claims happen often enough that buying only from a researched shop, or with a non-commission guide, is the safer approach." },
        ],
      };

    case "bosphorus-cruise-guide":
      return {
        title: "Bosphorus Cruise Guide 2026: Public Ferry vs Private Boat, and What You'll Actually See",
        description: "A Bosphorus cruise can mean a $5 public ferry or a $1,000 private yacht — here's what each actually gets you and which one fits your trip.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4cc293e956beb5d0287816e36d47d4f0e4ebe636a8a64a257865fc5b6849eddf.jpeg",
        fastFacts: [
          { icon: "Ship", label: "What you'll see", value: "Dolmabahçe Palace, the two suspension bridges, Ortaköy Mosque, and waterfront mansions (yalıs)" },
          { icon: "DollarSign", label: "Price range", value: "From roughly $15 for a short public cruise to over $1,000 for a private luxury yacht" },
          { icon: "Clock", label: "Best time", value: "Sunset — the light on the water and the European/Asian shoreline is at its best" },
          { icon: "MapPin", label: "Main departure points", value: "Eminönü (public ferries) and Karaköy/Beşiktaş (private tour boats)" },
        ],
        sections: [
          {
            title: "Public Ferry vs Private Tour: What's the Actual Difference",
            content: "The cheapest way to cruise the Bosphorus is a **public ferry from Eminönü**, run by İstanbul Şehir Hatları, which follows a loop with stops along both the European and Asian shorelines for a fraction of a private tour's price — genuinely scenic, though with no guide narration and a fixed schedule rather than a sunset-timed departure. A **private tour boat or yacht** costs considerably more but adds a guide explaining what you're passing (Dolmabahçe Palace, the two suspension bridges, Ortaköy Mosque, waterfront yalı mansions), flexible timing around sunset, and often food or drinks included.\n\nFor a first visit with limited time, a guided sunset cruise is the better value despite the higher price — the timing and narration add real value that the public ferry's lower cost doesn't offset for most visitors.",
            tourCard: { slug: "istanbul-bosphorus-yacht-cruise-with-turkish", title: "Istanbul: Bosphorus Yacht Cruise with Turkish Breakfast", description: "A mid-tier private cruise pairing the Bosphorus views with a proper Turkish breakfast on board.", price: "From $160", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4cc293e956beb5d0287816e36d47d4f0e4ebe636a8a64a257865fc5b6849eddf.jpeg" },
          },
          {
            title: "Dinner Cruises vs Daytime Cruises",
            content: "**Evening dinner cruises** add a sit-down meal, often with a Turkish folk or belly-dance live show, turning the cruise into a full evening's entertainment rather than a sightseeing add-on — a genuinely different experience from a daytime sightseeing-focused cruise, priced accordingly higher. **Daytime cruises** focus purely on the views and architecture, better for photography and for actually seeing the shoreline details rather than the darker, show-focused evening version.\n\nBudget-conscious travelers can get a similar dinner-cruise experience at a lower price point on tours explicitly marketed as family or budget-friendly, which trim the show and premium drinks while keeping the meal and the cruise itself.",
            tourCard: { slug: "istanbul-budget-family-bosphorus-dinner-cruise", title: "Istanbul: Budget Family Bosphorus Dinner Cruise with Music", description: "A lower-priced dinner cruise alternative that keeps the meal and live music without the premium yacht markup.", price: "From $44", duration: "3 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/69c3d1652ff05946ceb42fb78f757eb55057c907ceb50bc6a2a95602f0a9ed50.jpg" },
          },
          {
            title: "What You'll Actually See Along the Way",
            content: "A full Bosphorus cruise passes **Dolmabahçe Palace**, the 19th-century Ottoman waterfront palace that replaced Topkapi as the primary royal residence; the **Bosphorus Bridge and Fatih Sultan Mehmet Bridge**, two of the three suspension bridges connecting the European and Asian continents; **Ortaköy Mosque**, a small, photogenic waterfront mosque sitting almost directly beneath the first bridge; and a stretch of **yalı mansions**, historic wooden Ottoman-era waterfront houses still occupied as private residences by some of Istanbul's wealthiest families today.\n\nLonger cruises extend further north toward the Bosphorus's narrower upper reaches and the fortress of Rumeli Hisarı, while shorter sunset cruises typically stay within the more central, palace-and-bridge-dense stretch.",
          },
        ],
        faqs: [
          { q: "What's the cheapest way to cruise the Bosphorus?", a: "A public ferry from Eminönü, run by İstanbul Şehir Hatları, costs a fraction of a private tour and still covers the main shoreline, though without guide narration or sunset-timed scheduling." },
          { q: "What's the best time for a Bosphorus cruise?", a: "Sunset — the light on the water and the shoreline silhouettes of the palaces, bridges and mosques is consistently rated the best time of day for both photos and atmosphere." },
          { q: "Do Bosphorus dinner cruises include a show?", a: "Many do, typically a Turkish folk or belly-dance performance alongside the meal. Budget-tier dinner cruises trim the show and premium drinks while keeping the meal and cruise." },
          { q: "What will I see on a Bosphorus cruise?", a: "Dolmabahçe Palace, the suspension bridges connecting Europe and Asia, Ortaköy Mosque, and historic yalı waterfront mansions are the consistent highlights on both public and private cruises." },
        ],
      };

    case "istanbul-hamam-turkish-bath-guide":
      return {
        title: "Istanbul Hamam Guide 2026: What a Turkish Bath Actually Involves and the Etiquette",
        description: "A Turkish hamam isn't just a steam room — the scrub, the foam massage and the social ritual behind it have centuries of history. Here's exactly what to expect and how to behave.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6d10d65383c41f9bba8a2857bc84d3bff2fc729bcb382b85b07d0ad94f180fa.jpeg",
        fastFacts: [
          { icon: "Droplets", label: "The core ritual", value: "Steam room, then an exfoliating scrub (kese) and a foam massage, usually in that order" },
          { icon: "Users", label: "Separation", value: "Most historic hamams are gender-separated, with distinct sections or separate hours for men and women" },
          { icon: "Clock", label: "Typical duration", value: "60-90 minutes for a standard scrub-and-massage package" },
          { icon: "DollarSign", label: "Price range", value: "Roughly $50-150 for a tourist-oriented hamam package, more at historic landmark hamams" },
        ],
        sections: [
          {
            title: "What Actually Happens During a Hamam Visit",
            content: "A traditional **hamam (Turkish bath)** visit follows a fairly consistent structure: you're given a thin cotton wrap (peştemal) and wooden sandals, then spend time in a heated marble steam room to open your pores and relax, followed by the **kese**, a vigorous full-body exfoliation scrub using a rough mitt that removes a genuinely surprising amount of dead skin — first-timers are often startled by how much comes off. After the scrub comes a **foam massage**, where a mountain of soap bubbles is worked over your body in a technique unique to the hamam tradition, often followed by a basic oil massage as part of higher-tier packages.\n\nThe entire ritual, rooted in Ottoman-era bathing culture that itself drew on Roman and Byzantine bathhouse traditions, was historically as much a social occasion — a place for conversation, business and even matchmaking discussions among women — as a hygiene practice, and some of that communal, unhurried pace survives in how a proper hamam visit is meant to feel.",
            tourCard: { slug: "istanbul-rumeli-turkish-hammam-experience-with", title: "Istanbul: Rumeli Turkish Hammam Experience with Hotel Pickup", description: "A full scrub-and-foam-massage hamam package with transport handled, good for a first-timer.", price: "From $91", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8d76d5886096a5e532051d73d8c93d449a9523a69065cbff343055930b77ef25.jpeg" },
          },
          {
            title: "Etiquette, Modesty and What to Bring",
            content: "Most historic hamams are **gender-separated**, either through distinct sections of the building or separate hours for men and women, and modesty expectations differ somewhat by hamam — some provide disposable underwear, others expect you to keep the provided peştemal wrap on throughout, and some tourist-oriented hamams are mixed-gender with swimwear required. Check a specific hamam's policy before booking if this matters to your comfort level, since it varies more than most first-time visitors expect.\n\nBring nothing more than yourself — towels, wraps, sandals and basic toiletries are provided — though many visitors bring their own flip-flops for comfort on wet marble floors. Tipping the attendant performing the scrub and massage, roughly 10-15% of the package price, is customary and appreciated.",
          },
          {
            title: "Historic Hamams vs Modern Spa-Style Experiences",
            content: "Istanbul has both centuries-old **historic hamams** — some dating to the Ottoman era, with original domed architecture and star-shaped skylights casting light through steam — and modern, spa-style hamam experiences in hotels or dedicated wellness centers that replicate the ritual with contemporary comfort and sometimes added extras like a party atmosphere, live music or food. Both are legitimate ways to experience the tradition; historic hamams offer the more authentic atmosphere, while modern versions often add comfort and flexibility that first-timers may prefer.\n\nA Taksim-area hamam combined with a pool and massage package is a convenient option if you're staying centrally and want to pair the hamam with other relaxation elements in a single booking.",
            tourCard: { slug: "istanbul-private-turkish-bath-massage-and-pool-in", title: "Istanbul: Private Turkish Bath, Massage, and Pool in Taksim", description: "A modern, centrally located hamam package combining the bath ritual with a pool and massage.", price: "From $66", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dbc3a9b28f2eb0ab2e36df51ef9bd3d5a0cbbd7161443d82c7d07fb5a4f1234f.jpeg" },
          },
        ],
        faqs: [
          { q: "What actually happens in a Turkish hamam?", a: "A steam room session to open your pores, followed by a vigorous full-body exfoliation scrub (kese) and a distinctive foam massage, typically in that order, over roughly 60-90 minutes." },
          { q: "Are hamams gender-separated?", a: "Most historic hamams are, either through separate sections or hours for men and women. Some modern, tourist-oriented hamams are mixed-gender with swimwear required — check the specific hamam's policy before booking." },
          { q: "Do I need to bring anything to a hamam?", a: "No — towels, wraps, sandals and toiletries are provided, though some visitors bring their own flip-flops for the wet marble floors." },
          { q: "Should I tip at a hamam?", a: "Yes — roughly 10-15% of the package price for the attendant performing the scrub and massage is customary and appreciated." },
        ],
      };

    case "cappadocia-from-istanbul-guide":
      return {
        title: "Cappadocia from Istanbul Guide 2026: Why It's Not a Day Trip, and How to Actually Plan It",
        description: "Cappadocia is roughly 700km from Istanbul — too far for a single-day trip despite how some tour listings are worded. Here's the honest logistics of getting there and back.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86359121caba650145f294ac954ce5d5a6ecde96f5ae3dd84aa1d06fc326c1de.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Distance from Istanbul", value: "Roughly 700km, requiring a domestic flight, not a drivable day trip" },
          { icon: "Plane", label: "Travel time by air", value: "About 1.5 hours flight each way, plus ground transport to Cappadocia's hotel areas" },
          { icon: "Calendar", label: "Realistic minimum", value: "2 days / 1 night, though most operators recommend 2-3 nights to actually enjoy it" },
          { icon: "Sunrise", label: "The main draw", value: "Sunrise hot air balloon rides over the fairy chimney rock formations" },
        ],
        sections: [
          {
            title: "Why Cappadocia Genuinely Isn't a Day Trip from Istanbul",
            content: "Cappadocia sits roughly **700km from Istanbul**, in central Anatolia, and some tour marketing uses language loose enough to make it sound like a feasible day trip — it isn't. Reaching Cappadocia requires a **domestic flight** (roughly 1.5 hours each way, typically to Kayseri or Nevşehir airport) followed by ground transport of an hour or more to the hotel and balloon-launch areas around Göreme and Ürgüp, which makes a genuine round trip in a single day both exhausting and largely pointless, since the single biggest reason to go — the sunrise hot air balloon ride — requires an overnight stay to catch the pre-dawn launch window.\n\nAny listing promising a true one-day Cappadocia experience from Istanbul should be read with real skepticism about what it actually delivers versus what it implies.",
          },
          {
            title: "The Realistic Minimum: 2 Days, 1 Night",
            content: "The shortest genuinely worthwhile Cappadocia trip from Istanbul is a **2-day, 1-night package**: fly out in the morning, explore the Göreme Open Air Museum and the region's underground cities or fairy chimney valleys that afternoon, sleep over (often in a cave hotel, one of the region's signature experiences), wake before dawn for the **hot air balloon ride**, then fly back to Istanbul that same day. This covers the headline experience but leaves little room for anything beyond it.\n\nMost tour operators and past visitors recommend **2-3 nights** if your schedule allows, giving time for a proper look at Cappadocia's underground cities (Derinkuyu and Kaymaklı among the largest), the Red and Rose Valley hikes, and the region's distinctive cave-hotel accommodations without the rushed, flight-to-flight pace of the shortest package.",
            tourCard: { slug: "cappadocia-2day-tour-balloon-ride-cave-hotel-from", title: "Cappadocia 2Day Tour Balloon Ride, Cave Hotel, from Istanbul", description: "The realistic minimum Cappadocia package — flight, cave hotel overnight and the sunrise balloon ride.", price: "From $1016", duration: "2 days", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a6f274cd19ed7520a817e14472a3b32ea2534a11888d0addb52d5b889164e62.jpg" },
          },
          {
            title: "Extending Further: 6-Day Combined Turkey Trips",
            content: "For travelers with more time, several operators run **multi-day combined trips** pairing Cappadocia with other major Turkish destinations like Ephesus, the ancient Greco-Roman city near the Aegean coast, letting a single extended trip cover Istanbul, central Anatolia and the Aegean region without separate bookings for each leg. These run 5-7 days typically and are a genuinely different proposition from a quick balloon-and-back weekend — budget accordingly in both time and cost.\n\nWhichever length you choose, book the balloon ride component specifically with some flexibility in mind — rides are weather-dependent and can be cancelled or rescheduled at short notice if wind conditions aren't safe, which is a real possibility worth planning around rather than assuming guaranteed on a fixed one-night visit.",
            tourCard: { slug: "from-istanbul-6-day-turkey-tour-with-cappadocia", title: "From Istanbul: 6-Day Turkey Tour with Cappadocia & Ephesus", description: "A full multi-region Turkey trip combining Cappadocia and Ephesus with Istanbul as the base.", price: "From $845", duration: "6 days", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86359121caba650145f294ac954ce5d5a6ecde96f5ae3dd84aa1d06fc326c1de.jpg" },
          },
        ],
        faqs: [
          { q: "Can I visit Cappadocia as a day trip from Istanbul?", a: "Not realistically — it's roughly 700km away and requires a domestic flight plus ground transport each way. The main draw, the sunrise balloon ride, also requires an overnight stay to catch the pre-dawn launch." },
          { q: "What's the minimum amount of time needed for Cappadocia?", a: "2 days / 1 night is the realistic minimum to catch the balloon ride, though most recommend 2-3 nights to properly see the underground cities and valley hikes without rushing." },
          { q: "How do I get to Cappadocia from Istanbul?", a: "By domestic flight, roughly 1.5 hours each way, typically to Kayseri or Nevşehir airport, followed by about an hour of ground transport to the Göreme/Ürgüp hotel areas." },
          { q: "Is the Cappadocia balloon ride guaranteed?", a: "No — rides are weather-dependent and can be cancelled or rescheduled at short notice if wind conditions aren't safe. Build some flexibility into your schedule rather than assuming a guaranteed single-morning flight." },
        ],
      };

    case "istanbulkart-transit-guide":
      return {
        title: "Istanbulkart Guide 2026: Price, Where to Buy It and How Transfers Work",
        description: "The Istanbulkart covers Istanbul's entire metro, tram, bus and ferry network at a real discount over single tickets — here's exactly what it costs and how to use it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4023bf5f156e251d7fa46e50c05db037b9bc0361725d2819745401858189808b.jpeg",
        fastFacts: [
          { icon: "CreditCard", label: "Card cost", value: "A non-refundable card fee is charged on top of the balance you load, roughly in the low hundreds of Turkish Lira" },
          { icon: "Train", label: "Covers", value: "Metro, tram, bus, funicular, metrobus and public ferries citywide" },
          { icon: "MapPin", label: "Where to buy", value: "Yellow vending machines at metro/tram stations, and many kiosks and convenience stores" },
          { icon: "DollarSign", label: "Transfer discount", value: "Discounted fares on transfers made within 2 hours of the first tap" },
        ],
        sections: [
          {
            title: "What the Istanbulkart Is and Why You Want One",
            content: "The **Istanbulkart** is a rechargeable contactless smart card covering essentially all of Istanbul's public transport — metro lines, trams, city buses, the funiculars, the metrobus rapid-transit corridor, and the public ferries across the Bosphorus and Golden Horn — functionally the same role Seoul's T-money or Hong Kong's Octopus play, and genuinely close to mandatory given how spread out the city is across two continents. Tapping in with an Istanbulkart is both faster than buying single-journey tokens and meaningfully cheaper, especially once transfers are factored in.\n\nIstanbul's transit prices and card fees have risen with the country's inflation in recent years, so treat any specific number as approximate and check current pricing at a station machine or the official İstanbulkart app before relying on an exact figure from an older guide.",
          },
          {
            title: "Where to Buy and Load the Card",
            content: "Istanbulkarts are sold from **yellow vending machines** at virtually every metro and tram station, as well as many street kiosks (büfe) and some convenience stores, with the purchase requiring a one-time non-refundable card fee charged on top of whatever balance you load. Topping up works the same way — station machines accept cash and card for reloading — and the İstanbulkart mobile app allows balance checks and some top-up functionality directly from a phone for travelers who prefer not to carry cash for every reload.\n\nSingle-journey paper tickets exist as an alternative but cost meaningfully more per ride and don't unlock the transfer discount, making them a poor choice for anyone staying more than a day or two.",
            tourCard: { slug: "istanbul-asian-side-tour-with-ferry-ride", title: "Istanbul: Asian Side Tour with Ferry Ride", description: "A guided day using the ferry network as part of the route, a good way to learn the system with a guide alongside.", price: "From $52", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4023bf5f156e251d7fa46e50c05db037b9bc0361725d2819745401858189808b.jpeg" },
          },
          {
            title: "How Transfers and Discounts Actually Work",
            content: "Istanbul's fare system applies a **declining-price transfer discount** for multiple taps made within a set window (roughly two hours) of your first tap, meaning a multi-leg journey — metro to tram to ferry, for example — costs progressively less per additional leg rather than charging full fare each time. This matters more in Istanbul than in many single-mode transit systems precisely because reaching some neighborhoods genuinely requires combining a ferry crossing with a tram or bus leg on either side.\n\nA single Istanbulkart can be shared among a small group tapping in sequence (the machine allows multiple taps per transaction with a brief pause between each), though it's simpler and avoids confusion for each traveler in a group to carry their own card.",
          },
        ],
        faqs: [
          { q: "How much does an Istanbulkart cost?", a: "A non-refundable card fee is charged on top of the balance you load, roughly in the low hundreds of Turkish Lira — check current pricing at a station machine since it has risen with inflation in recent years." },
          { q: "Where can I buy an Istanbulkart?", a: "Yellow vending machines at metro and tram stations, plus many street kiosks and some convenience stores across the city." },
          { q: "Does the Istanbulkart work on ferries?", a: "Yes — it covers the public ferry network across the Bosphorus and Golden Horn alongside the metro, tram, bus and funicular systems." },
          { q: "Do transfers get a discount with Istanbulkart?", a: "Yes — taps made within roughly two hours of your first tap get a declining-price transfer discount, which matters especially for journeys combining a ferry with a tram or bus leg." },
        ],
      };

    case "princes-islands-day-trip":
      return {
        title: "Princes' Islands Day Trip Guide 2026: Büyükada, No Cars and the Ferry Options",
        description: "The Princes' Islands ban private cars entirely — getting around means walking, cycling or a horse-drawn carriage. Here's how to plan a day trip that actually works.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd18bf79d05f81d3cb769e7839dcee3ad0e68a5a30a717ccbd01b56db5e1c91.jpg",
        fastFacts: [
          { icon: "Ship", label: "Ferry time", value: "Roughly 1-1.5 hours from Kabataş or Eminönü, depending on the specific island and ferry service" },
          { icon: "Car", label: "No private cars", value: "Banned entirely on the islands — getting around means walking, bicycle or horse-drawn carriage" },
          { icon: "MapPin", label: "Largest island", value: "Büyükada, with Ottoman-era wooden mansions and the island's main shopping street" },
          { icon: "Sun", label: "Best season", value: "Late spring through early autumn — many services and rentals scale back in winter" },
        ],
        sections: [
          {
            title: "Why the Islands Are a Genuinely Different Experience from the City",
            content: "The **Princes' Islands (Adalar)**, a small archipelago in the Sea of Marmara a short ferry ride from the city center, have **banned private motor vehicles entirely** — the only way to get around is on foot, by bicycle, or by horse-drawn carriage (fayton), a restriction with roots in the islands' history as a quiet retreat for Istanbul's wealthy and, historically, for exiled political figures. The result is a pace of life and a soundscape — clopping hooves instead of traffic, pine-forested hills instead of apartment blocks — that feels like a genuinely different place rather than just a quieter neighborhood of the same city.\n\nHistorically, horse-drawn carriages were the default way to tour the larger islands, though bicycle rentals have become the more common choice for visitors in recent years, both cheaper and more flexible for stopping wherever you like along the coastal roads.",
          },
          {
            title: "Büyükada: The Largest Island and the Easiest First Visit",
            content: "**Büyükada**, the largest and most-visited of the islands, has the archipelago's main shopping street near the ferry dock, a cluster of seafood restaurants, and a hillside dotted with grand Ottoman and Greek-era wooden mansions, many now restored as private homes or small hotels. A loop around the island by bicycle or on foot takes you past quiet coves suitable for a swim in warmer months, up toward the Monastery of St. George for a panoramic hilltop view, and through residential lanes genuinely worth wandering without a fixed plan.\n\nFor a first visit, Büyükada alone fills a comfortable half to full day, and most guided day trips focus on it specifically rather than attempting to cover multiple islands in one visit.",
            tourCard: { slug: "beyond-istanbul-princes-islands-full-day-tour", title: "Beyond Istanbul: Princes' Islands Full Day Tour with Lunch", description: "A full day on Büyükada and the surrounding islands with lunch and the return ferry included.", price: "From $66", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b3dff9894ef7560d47969a910de0e85b5405114b07d702e3d9bcf725c92db75e.jpg" },
          },
          {
            title: "Ferry Options and Timing Your Day",
            content: "Public ferries run from **Kabataş** (on the European side, close to Taksim via the funicular) and sometimes from **Eminönü**, taking roughly **1-1.5 hours** depending on the specific route and whether it's a direct or multi-stop service — faster seabus services exist at a higher price for travelers short on time. Departing by mid-morning gives enough time on the island for lunch, a bike loop and some beach or hillside time before the return ferry, without rushing the last boat back.\n\nThe islands are busiest in summer (June-August) when the swimming coves and outdoor restaurants are at their best, and noticeably quieter — some rental shops and restaurants scaled back or closed — in winter, when the trip becomes more of a scenic, atmospheric walk than a beach day.",
            tourCard: { slug: "from-istanbul-princes-islands-adventure", title: "From Istanbul: Princes' Islands Adventure", description: "A flexible island day trip covering the ferry crossing and time to explore Büyükada at your own pace.", price: "From $54", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ceef3496c90009de2fdff86f3e5b0b15f0950e3b6b68445c083493c6f6c8e49.jpg" },
          },
        ],
        faqs: [
          { q: "Can you drive a car on the Princes' Islands?", a: "No — private motor vehicles are banned entirely. Getting around means walking, renting a bicycle, or taking a horse-drawn carriage (fayton)." },
          { q: "How long does the ferry to the Princes' Islands take?", a: "Roughly 1-1.5 hours from Kabataş or Eminönü, depending on the specific route and whether the service makes multiple stops." },
          { q: "Which Princes' Island should a first-time visitor choose?", a: "Büyükada, the largest and most-visited island, with the main shopping street, restaurants and Ottoman-era mansions, is the standard first-visit choice and fills a comfortable half to full day." },
          { q: "What's the best season for a Princes' Islands trip?", a: "Late spring through early autumn, when the swimming coves and outdoor restaurants are fully operating. Winter is quieter and some rentals scale back." },
        ],
      };

    case "istanbul-food-guide":
      return {
        title: "Istanbul Food Guide 2026: What to Actually Eat, from Street Food to a Proper Sit-Down Meal",
        description: "Istanbul's food scene runs from simit carts to meze-heavy seafood dinners — here's a real guide to what's worth seeking out and where the best food tours actually take you.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/838b47cab4965458e2bd87e4c8c9d30ef843b2c4a03aff5e5ed74f4f665636ba.jpg",
        fastFacts: [
          { icon: "Coffee", label: "Turkish coffee", value: "Thick and unfiltered, grounds settle at the bottom, traditionally followed by a fortune-reading of the residue" },
          { icon: "Utensils", label: "Street food staples", value: "Simit (sesame bread ring), balık ekmek (fish sandwich), döner, and midye dolma (stuffed mussels)" },
          { icon: "MapPin", label: "Best neighborhoods for eating", value: "Karaköy and Kadıköy for modern/trendy, Fener-Balat for a quieter local scene" },
          { icon: "Wine", label: "Classic pairing", value: "Rakı, an anise-flavored spirit, traditionally drunk with a meze spread" },
        ],
        sections: [
          {
            title: "Street Food: Simit, Balık Ekmek and Midye Dolma",
            content: "**Simit**, a sesame-crusted bread ring sold from red carts on nearly every corner, is Istanbul's default grab-and-go breakfast, best eaten fresh and warm with a glass of çay (tea). Down by the Galata Bridge and the Eminönü waterfront, **balık ekmek** — grilled fish, usually mackerel, served in a simple bread roll with onion and lettuce from boats and stalls along the water — is one of the city's most genuinely local, inexpensive meals. **Midye dolma**, mussels stuffed with spiced rice and served with a squeeze of lemon, is sold from carts across the city and is one of the more distinctly Istanbul street-food items most visitors haven't heard of before arriving.\n\nA guided food-walking tour through the old city's back streets covers several of these in one outing, with the history and photo-spot context a solo wander through unfamiliar stalls can't easily replicate.",
            tourCard: { slug: "istanbul-guided-food-walking-tour-with-tastings", title: "Istanbul: Guided Food Walking Tour with Tastings", description: "A guided walk through multiple street-food stops with the history and context explained as you go.", price: "From $102", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/94a51816693cb51a95814e3cfc6893edc5bd62ff37dac9d55e81f082f30b5c0d.jpeg" },
          },
          {
            title: "A Proper Sit-Down Meal: Meze, Rakı and Turkish BBQ",
            content: "A traditional Turkish dinner, particularly a seafood-focused one, is built around **meze** — a spread of small cold and hot starters (hummus-adjacent dips, stuffed vegetables, grilled octopus, fried calamari) shared across the table before a main course, traditionally paired with **rakı**, an anise-flavored spirit drunk neat or diluted with water, which turns milky-white, earning it the nickname 'lion's milk.' Meat-focused meals lean on grilled kebabs and köfte (meatballs), often finished with baklava or künefe, a warm, cheese-filled pastry soaked in syrup.\n\nFor a deeper neighborhood-level food experience away from the tourist-dense Sultanahmet restaurants, the **Fener and Balat** districts along the Golden Horn offer a quieter, more residential food scene worth a dedicated walking tour.",
            tourCard: { slug: "istanbul-fener-balat-food-tour", title: "Istanbul: Fener & Balat Food Tour", description: "A guided food walk through two quieter, colorful neighborhoods away from the main tourist food crawl.", price: "From $52", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/195b5abf5515ef2dd7d8155981b6d592b459a77cbdeb4a82108b3576069f1f9a.jpeg" },
          },
          {
            title: "Turkish Coffee and the Fortune-Telling Ritual",
            content: "**Turkish coffee** is finely ground and brewed unfiltered in a small pot (cezve), served in a small cup with the grounds settling at the bottom rather than being filtered out — don't drink the last sip, which is nothing but sediment. A genuinely distinctive tradition that's survived into the modern tourist experience is **fal (fortune-telling)**: once the cup is finished and turned upside down to cool, a reader interprets the patterns left by the grounds, a practice taken half-seriously by locals as entertainment and genuinely enjoyed by most visitors who try it as a novelty rather than literal prediction.\n\nA dedicated Turkish coffee workshop, sometimes paired with Sufi music context near Hagia Sophia, is an easy, inexpensive way to experience the ritual properly rather than a rushed tourist-stall version.",
            tourCard: { slug: "istanbul-turkish-coffee-fortune-reading-experience", title: "Istanbul: Turkish Coffee Fortune Reading Experience", description: "A guided Turkish coffee and fortune-reading session covering the full ritual properly.", price: "From $442", duration: "1.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/333acb30cb35fdaee046651399ad86f594d9b393db47b283786db286f6967380.png" },
          },
        ],
        faqs: [
          { q: "What is the most iconic Istanbul street food?", a: "Simit, a sesame-crusted bread ring, is the most ubiquitous, but balık ekmek (grilled fish sandwich) by the Galata Bridge and midye dolma (stuffed mussels) are the two most distinctly local options." },
          { q: "What is rakı?", a: "An anise-flavored Turkish spirit, traditionally drunk with a meze spread. It turns milky-white when diluted with water, earning it the nickname 'lion's milk.'" },
          { q: "What is Turkish coffee fortune-telling?", a: "A tradition where the patterns left by coffee grounds in an emptied, cooled cup are interpreted by a reader — taken as light entertainment rather than literal prediction by most locals and visitors." },
          { q: "Where can I find a quieter, more local food scene in Istanbul?", a: "The Fener and Balat neighborhoods along the Golden Horn offer a quieter, more residential food experience away from the tourist-dense Sultanahmet restaurants." },
        ],
      };

    case "istanbul-7-day-itinerary":
      return {
        title: "The Perfect 7-Day Istanbul Itinerary (2026): A Full Week Done Right",
        description: "A week in Istanbul has room for the historic core, both bazaars, the Bosphorus, the Princes' Islands and a genuine day trip beyond the city — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9a09db283609975ebf57a5a1422ca4c72c3c832788fbc63ca83d424dff0c92a.jpg",
        sections: [
          {
            title: "Days 1-3: Follow the 3-Day Core",
            content: "Use the 3-day itinerary as your foundation: Day 1 covers Hagia Sophia, the Blue Mosque, the Basilica Cistern, Topkapi Palace and a sunset Bosphorus cruise. Day 2 covers the Spice Bazaar, Galata Tower and a hamam evening. Day 3 is a full Princes' Islands trip. This front-loads everything most visitors come specifically to see.",
          },
          {
            title: "Day 4: The Asian Side and Kadıköy",
            content: "Cross the Bosphorus by ferry to Istanbul's **Asian side**, centered on **Kadıköy**, a genuinely different, more local neighborhood than anything on the European side's tourist trail — a dense street-food and bar scene, a well-regarded Tuesday and Friday market, and a noticeably younger, less tourist-focused atmosphere. It's one of the better ways to see how a huge share of Istanbul's population actually lives day to day, rather than only its historic and monument-dense core.",
            tourCard: { slug: "istanbul-asian-side-tour-with-ferry-ride", title: "Istanbul: Asian Side Tour with Ferry Ride", description: "A guided crossing and walk through Kadıköy and the Asian side's neighborhoods.", price: "From $52", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4023bf5f156e251d7fa46e50c05db037b9bc0361725d2819745401858189808b.jpeg" },
          },
          {
            title: "Day 5: Dolmabahçe Palace and a Deeper Bosphorus Day",
            content: "Spend the day at **Dolmabahçe Palace**, the 19th-century Ottoman waterfront palace built in a European Baroque style that replaced Topkapi as the primary royal residence, then continue along the Bosphorus shoreline toward Ortaköy and Bebek for an afternoon of waterfront cafes and a slower, more residential stretch of the city than Sultanahmet.",
            tourCard: { slug: "dolmabahce-palace-bosphorus-cruise-tour-with-lunch", title: "Dolmabahce Palace & Bosphorus Cruise Tour with Lunch", description: "A guided day combining the palace with a Bosphorus cruise and lunch.", price: "From $407", duration: "6 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dca9049e85118e882cef4bdfe90f4dbc9d8bb951acc169b894c656021b3de21b.jpg" },
          },
          {
            title: "Days 6-7: A Whirling Dervish Evening and a Buffer Day",
            content: "Spend an evening at a **Whirling Dervish Sema ceremony**, the Mevlevi Sufi order's meditative spinning ritual, now performed culturally for visitors. Use your final day as a genuine buffer — revisit a favorite neighborhood, do the Grand Bazaar haggling round you didn't have time for earlier, or simply let the week's pace slow down before departure rather than cramming in one more big sight.",
            tourCard: { slug: "istanbul-mesmerizing-whirling-dervishes-sema", title: "Istanbul: Mesmerizing Whirling Dervishes Sema Ceremony", description: "A full Sema ceremony evening with the ritual's history and meaning explained beforehand.", price: "From $103", duration: "1.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4096e07cd93a71345623c12247ef4147659db690a8ee4477b79fb154a92d6cc.png" },
          },
        ],
        faqs: [
          { q: "Is 7 days too long for Istanbul?", a: "Not at all for a traveler who wants both the headline sights and a real feel for the Asian side and Bosphorus neighborhoods beyond Sultanahmet. A week comfortably avoids the rushed pace a 3-day trip requires." },
          { q: "Should I day-trip to another Turkish city during a 7-day Istanbul stay?", a: "Only if it's genuinely reachable — Bursa or a shorter regional trip can work as a single day, but Cappadocia and Ephesus require their own dedicated multi-day legs rather than a day-trip slot." },
          { q: "What's worth adding on a 7-day trip that a 3-day trip skips?", a: "The Asian side/Kadıköy, Dolmabahçe Palace, and a Whirling Dervish ceremony are the most commonly recommended additions once the Sultanahmet core and islands are already covered." },
        ],
      };

    case "istanbul-nightlife-guide":
      return {
        title: "Istanbul Nightlife Guide 2026: Rooftop Bars, Bosphorus Clubs and What's Actually Open Late",
        description: "Istanbul's nightlife runs from quiet rooftop wine bars to Bosphorus-front superclubs — here's where the real scene is and what a typical night actually looks like.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/162215d36e0f941130191e903476c166f528cd4988045efc4a287f2f42abe29c.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Main nightlife districts", value: "Taksim/Beyoğlu for density and variety, Bebek and Ortaköy for upscale Bosphorus-front venues" },
          { icon: "Clock", label: "When it gets going", value: "Most venues don't fill up until after 11pm, with many running until 3-4am on weekends" },
          { icon: "Wine", label: "What to drink", value: "Rakı is the traditional choice, but Istanbul also has a growing local craft cocktail and wine-bar scene" },
          { icon: "Music", label: "Live music", value: "Beyoğlu's side streets (particularly around Nevizade) are dense with meyhane (taverns) featuring live Turkish music" },
        ],
        sections: [
          {
            title: "Taksim and Beyoğlu: The Density Center",
            content: "**Taksim Square and the surrounding Beyoğlu district** form Istanbul's densest concentration of bars, clubs and meyhane (traditional taverns), with **İstiklal Street**, the long pedestrian avenue running from Taksim down toward Galata, as the main spine. Side streets off İstiklal, particularly around **Nevizade**, are packed with meyhane serving meze and rakı alongside live Turkish folk and pop music performed tableside — a genuinely different nightlife register from a standard bar crawl, built around shared food and drink rather than just drinking.\n\nBeyoğlu also holds Istanbul's most internationally-styled nightclubs and late bars, catering to both a young local crowd and the city's substantial tourist nightlife traffic.",
          },
          {
            title: "Bebek and Ortaköy: The Upscale Bosphorus-Front Scene",
            content: "For a quieter, more upscale evening, **Bebek and Ortaköy**, both Bosphorus-front neighborhoods, hold Istanbul's best-regarded waterfront bars and rooftop lounges, many with direct views across to the Asian side and the suspension bridges lit up at night. Summer turns several of these into genuinely glamorous open-air venues, while winter shifts the same crowd indoors to warmer, more intimate wine bars and lounges in the same neighborhoods.\n\nA private night tour that covers the city's illuminated landmarks by car or boat before settling into a late dinner or bar is a good way to experience Istanbul after dark without needing to plan a route between neighborhoods yourself.",
            tourCard: { slug: "istanbul-private-night-tour", title: "Istanbul: Private Night Tour", description: "A guided evening covering the city's illuminated landmarks before or alongside a night out.", price: "From $222", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/162215d36e0f941130191e903476c166f528cd4988045efc4a287f2f42abe29c.jpg" },
          },
          {
            title: "A Bosphorus Dinner Cruise as a Nightlife Option",
            content: "A **Bosphorus dinner cruise with a live show** is less a bar-hopping night out and more a self-contained evening of entertainment — dinner, music, sometimes a folk or belly-dance performance, all set against the lit-up shoreline passing by. It's a genuinely good option for travelers who want a memorable night out without navigating Beyoğlu's bar scene or Taksim's later, rowdier hours, and it works well for groups with a wider range of comfort levels around a traditional nightlife crawl.\n\nWhichever route you take, note that alcohol prices in Istanbul's tourist-facing bars and clubs run noticeably higher than at a neighborhood meyhane, a gap worth knowing before committing to a full night at a premium rooftop venue.",
            tourCard: { slug: "istanbul-by-night-bosphorus-dinner-cruise-drinks", title: "Istanbul by Night: Bosphorus Dinner Cruise & Drinks", description: "A full evening cruise with dinner and drinks, an easy self-contained alternative to a bar crawl.", price: "From $54", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e7e5112d33e8de52c85543b103bb8260e33a43a33e95912f1379ed89ea1fd20b.jpg" },
          },
        ],
        faqs: [
          { q: "Where is the best nightlife in Istanbul?", a: "Taksim and Beyoğlu for density and variety, including the meyhane-heavy Nevizade side streets; Bebek and Ortaköy for a more upscale, Bosphorus-front scene." },
          { q: "What time does Istanbul nightlife get going?", a: "Most venues don't really fill up until after 11pm, with many running until 3-4am on weekends, later than a typical early-evening dinner crowd." },
          { q: "What is a meyhane?", a: "A traditional Turkish tavern serving meze and rakı, often with live Turkish folk or pop music performed tableside, concentrated especially around Beyoğlu's Nevizade side streets." },
          { q: "Is a Bosphorus dinner cruise a good alternative to bar-hopping?", a: "Yes — it's a self-contained evening of dinner, music and sometimes a live show, a good option for groups or travelers who'd rather not navigate a late-night bar crawl." },
        ],
      };

    case "istanbul-shopping-guide":
      return {
        title: "Istanbul Shopping Guide 2026: Bazaars, Modern Malls and What's Worth Bringing Home",
        description: "Istanbul's shopping spans 15th-century covered bazaars and glass-fronted modern malls — here's what's genuinely worth buying at each and where to go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09e5af000b61afab317a5e87bc9d9c28f47e0a4575a4cc3eb8408c4f1c53871c.jpg",
        fastFacts: [
          { icon: "ShoppingBag", label: "Best for souvenirs", value: "The Grand Bazaar — carpets, ceramics, Turkish lamps, leather goods, jewelry" },
          { icon: "MapPin", label: "Best for modern/local brands", value: "Nişantaşı and Bağdat Caddesi for upscale Turkish fashion labels" },
          { icon: "DollarSign", label: "Tax refund", value: "Non-EU visitors can claim a VAT refund on purchases above a minimum threshold at participating stores" },
          { icon: "Coffee", label: "Best food souvenirs", value: "Turkish delight, saffron, sumac, and loose teas from the Spice Bazaar" },
        ],
        sections: [
          {
            title: "The Grand Bazaar: Still the Default Souvenir Stop",
            content: "For traditional souvenirs, the **Grand Bazaar** remains the default stop — hand-knotted carpets and kilims, hand-painted ceramics (particularly from İznik and Kütahya traditions), Turkish lamps with their distinctive colored-glass mosaic patterns, leather goods, and gold or silver jewelry sold by weight. Quality and pricing vary enormously between shops selling genuinely handmade pieces and those selling mass-produced imports at tourist prices, so a little research or a guided shopping tour pays off, particularly for a significant carpet or jewelry purchase.\n\nHaggling is the norm here, not an exception — treat the first quoted price as a starting point for negotiation rather than a fixed figure.",
            tourCard: { slug: "istanbul-private-grand-bazaar-shopping-tour-with", title: "Istanbul: Private Grand Bazaar Shopping Tour with Guide", description: "A guided shopping walk through the bazaar's lanes with quality and pricing context explained.", price: "From $104", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09e5af000b61afab317a5e87bc9d9c28f47e0a4575a4cc3eb8408c4f1c53871c.jpg" },
          },
          {
            title: "Modern Istanbul: Nişantaşı, Bağdat Caddesi and the Malls",
            content: "For modern Turkish fashion, design and homeware brands rather than traditional crafts, **Nişantaşı** on the European side and **Bağdat Caddesi** on the Asian side are Istanbul's two upscale shopping streets, lined with both international brands and well-regarded Turkish designers. Istanbul also has several large, modern shopping malls with international and domestic retailers, air conditioning and a far more straightforward fixed-price experience than bazaar haggling, for travelers who'd rather skip the negotiation entirely.\n\nTurkish textile and homeware brands in particular — towels, robes and linens, building on the country's long textile-manufacturing history — are a less-obvious but genuinely good-value purchase at either the modern retail strips or in smaller boutique shops around Galata and Karaköy.",
          },
          {
            title: "Tax Refunds and Getting Purchases Home",
            content: "Non-EU visitors can claim a **VAT refund** on purchases made at participating stores above a minimum spend threshold, processed either at the airport on departure or through a refund service's kiosk — ask for the refund paperwork at checkout and keep receipts and tags accessible for the departure process. Carpets and larger items bought at the Grand Bazaar can often be arranged for international shipping directly by the shop, worth asking about before deciding to carry a large purchase home yourself.\n\nFor food souvenirs — Turkish delight, saffron, sumac and loose teas — the **Spice Bazaar** remains the best single stop, with vacuum-sealed packaging commonly available on request for anything perishable or strong-smelling you're planning to check in luggage.",
            tourCard: { slug: "istanbul-private-shopping-tour-grand-bazaar-and", title: "Istanbul Private Shopping Tour Grand Bazaar and Spice Market", description: "A combined guided shopping day across both the traditional bazaar and the food-focused Spice Bazaar.", price: "From $52", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b95ceb4f3cf8e2e1fa1eb84847eebeb0f503cc2023bdbee344c8c8e08f0c94a.png" },
          },
        ],
        faqs: [
          { q: "What should I buy as a souvenir in Istanbul?", a: "Hand-knotted carpets, Turkish lamps, ceramics, Turkish delight, saffron and loose teas are the most commonly recommended items, with the Grand Bazaar for crafts and the Spice Bazaar for food souvenirs." },
          { q: "Can tourists get a tax refund on purchases in Istanbul?", a: "Yes — non-EU visitors can claim a VAT refund on purchases above a minimum threshold at participating stores, processed at the airport or a refund kiosk on departure." },
          { q: "Where can I shop for modern Turkish fashion, not just bazaar souvenirs?", a: "Nişantaşı on the European side and Bağdat Caddesi on the Asian side are Istanbul's two main upscale shopping streets for modern Turkish and international brands." },
          { q: "Can I ship a carpet home from the Grand Bazaar?", a: "Many shops can arrange international shipping directly for larger purchases like carpets — ask about this before deciding whether to carry a large item home yourself." },
        ],
      };

    case "istanbul-mosques-guide":
      return {
        title: "Istanbul Mosques Guide 2026: Beyond Hagia Sophia and the Blue Mosque",
        description: "Istanbul has far more significant mosques than the two everyone visits — Süleymaniye, the New Mosque and the smaller neighborhood mosques all offer a quieter, equally genuine look at the city's religious architecture.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd104fb02012b2e5d0532555fab36946b1349780b77710d0a132814348dc62f.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Beyond the big two", value: "Süleymaniye Mosque and the New Mosque (Yeni Camii) are the next most significant" },
          { icon: "Ticket", label: "Entry", value: "Free at every active mosque in Turkey, as a standard rule" },
          { icon: "Shirt", label: "Dress code", value: "Consistent across all mosques: shoulders/knees covered, headscarves for women, shoes off" },
          { icon: "Clock", label: "Avoid", value: "Friday midday prayers at any major mosque, when visitor access is most restricted" },
        ],
        sections: [
          {
            title: "Süleymaniye Mosque: The Architectural Masterpiece Fewer Visitors See",
            content: "**Süleymaniye Mosque**, built between 1550 and 1557 by the legendary Ottoman architect Mimar Sinan for Sultan Suleiman the Magnificent, is widely regarded by architectural historians as one of the finest achievements of classical Ottoman mosque design, with a dome and proportions many consider more technically accomplished than the Blue Mosque's, despite drawing a fraction of the visitor numbers. Its elevated position on one of Istanbul's seven hills gives sweeping views over the Golden Horn, and its quieter courtyard — genuinely peaceful compared to Sultanahmet's crowds — makes it one of the city's most underrated stops.\n\nThe mosque complex also includes Mimar Sinan's own tomb and a historic hamam still in limited operation nearby, adding a deeper architectural-history layer than a quick photo stop.",
            tourCard: { slug: "istanbul-hagia-sophia-blue-mosque-suleymaniye", title: "Istanbul: Hagia Sophia, Blue Mosque, Suleymaniye Mosque Tour", description: "A guided tour that extends beyond the two headline mosques to include Süleymaniye's quieter, architecturally significant grounds.", price: "From $77", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd104fb02012b2e5d0532555fab36946b1349780b77710d0a132814348dc62f.jpg" },
          },
          {
            title: "The New Mosque and the Golden Horn Waterfront",
            content: "The **New Mosque (Yeni Camii)**, despite its name, actually dates to the 17th century and sits right at the edge of the Golden Horn beside the Spice Bazaar, making it a natural stop while shopping or waiting for a ferry rather than a separate dedicated trip. Its waterfront position, with feeding pigeons and vendors nearby, gives it a lived-in, local atmosphere distinct from the more tourist-dense Sultanahmet mosques.\n\nAcross the Galata Bridge, several smaller neighborhood mosques in Karaköy and Galata offer a genuinely quiet, non-touristed look at everyday Islamic worship in the city, worth a respectful visit if your interest runs toward religious architecture beyond just the headline landmarks.",
          },
          {
            title: "General Mosque Etiquette That Applies Everywhere",
            content: "Across every active mosque in Istanbul, the same basic rules apply: entry is **free**, shoulders and knees must be covered, headscarves are provided for women who need one, and shoes come off before entering carpeted prayer areas. Visiting outside the **five daily prayer times** gives the fullest, least-restricted access, and **Friday midday prayers** specifically draw the week's largest crowds and tightest visitor-access windows at any major mosque, not just the Blue Mosque.\n\nPhotography is generally fine in main halls but should stop around anyone actively praying — a rule of basic respect that applies regardless of which specific mosque you're visiting.",
          },
        ],
        faqs: [
          { q: "What is the most underrated mosque in Istanbul?", a: "Süleymaniye Mosque — widely regarded by architectural historians as a technical peak of classical Ottoman design, with far fewer visitors than the Blue Mosque despite comparable significance." },
          { q: "Is entry free at all Istanbul mosques?", a: "Yes — entry is free at every active mosque in Turkey as a standard rule, including Hagia Sophia, the Blue Mosque, Süleymaniye and the New Mosque." },
          { q: "What is the New Mosque (Yeni Camii) despite its name?", a: "A 17th-century mosque, not actually new — the name refers to its construction period relative to other older mosques nearby. It sits right beside the Spice Bazaar on the Golden Horn." },
          { q: "When should I avoid visiting an Istanbul mosque?", a: "During the five daily prayer times, especially Friday midday prayers, when any major mosque sees its largest crowds and tightest visitor-access restrictions." },
        ],
      };

    case "istanbul-museums-guide":
      return {
        title: "Istanbul Museums Guide 2026: Beyond Topkapi, from Islamic Art to Immersive Experiences",
        description: "Istanbul's museum scene goes well past the palace circuit — here's what else is genuinely worth a visit, from classical collections to newer immersive formats.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5acb2d7870084ecc4fc97b701aca828365ab7eac426b53833e5495423fac188f.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Classical collection", value: "Museum of Turkish and Islamic Arts, housed in a 16th-century palace building" },
          { icon: "Sparkles", label: "Immersive/modern format", value: "Istanbul Müzeverse — a VR-based immersive experience, a newer addition to the museum scene" },
          { icon: "Ticket", label: "Istanbul Museum Pass", value: "A multi-site pass can be worth it if visiting several paid museums in a short window" },
          { icon: "Clock", label: "Closing day", value: "Many state-run museums close on Mondays — check before planning a specific museum day" },
        ],
        sections: [
          {
            title: "The Museum of Turkish and Islamic Arts",
            content: "The **Museum of Turkish and Islamic Arts**, housed in a 16th-century Ottoman palace building on the Hippodrome in Sultanahmet, holds one of the world's most significant collections of Islamic calligraphy, ceramics and, notably, antique carpets — a genuinely useful stop before or after a Grand Bazaar carpet-shopping trip, since it gives a real reference point for what historic quality actually looks like. The collection's depth on Seljuk and Ottoman-era decorative arts goes well beyond what the Topkapi Treasury covers, focused specifically on craft and design rather than royal treasure.\n\nAn audio guide adds real value here, since object labeling, while present, benefits from additional historical and cultural context that a guide or audio track supplies better than a self-guided wander alone.",
            tourCard: { slug: "museum-of-turkish-and-islamic-arts-ticket-with", title: "Museum of Turkish and Islamic Arts Ticket With Audio Guide", description: "Entry with an audio guide covering the museum's significant Islamic art and antique carpet collection.", price: "From $26", duration: "1.5 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5acb2d7870084ecc4fc97b701aca828365ab7eac426b53833e5495423fac188f.jpg" },
          },
          {
            title: "Newer Immersive and VR Formats",
            content: "Alongside its classical museum collections, Istanbul has added newer **immersive and VR-based experiences**, such as the Istanbul Müzeverse, which uses virtual reality technology to present historical or cultural content in an interactive, non-traditional format — a genuinely different kind of museum visit from a glass-case collection, and one that appeals especially to travelers with kids or anyone looking for a change of pace from a full day of historic-site walking.\n\nThese newer formats are typically shorter, more self-contained experiences than a full museum visit, making them easy to slot into an afternoon alongside other sightseeing rather than requiring a dedicated half-day.",
            tourCard: { slug: "istanbul-muzeverse-immersive-vr-experience", title: "Istanbul Müzeverse Immersive VR Experience", description: "A VR-based immersive cultural experience, a change of pace from traditional museum collections.", price: "From $44", duration: "1 hour", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/44f36badeff258b97987092178caba499e30a5c5b6de8378c4bb2821c6871994.jpg" },
          },
          {
            title: "Planning a Museum-Focused Day: Hours and Passes",
            content: "Many state-run museums in Istanbul close on **Mondays**, a detail worth checking before building a dedicated museum day around a specific closing schedule — Topkapi Palace, by contrast, has its own separate closing day that doesn't always align with other state museums, so verify each site individually rather than assuming a single rule covers them all. An **Istanbul Museum Pass**, covering multiple paid sites over a set number of days, can be worth the upfront cost for travelers planning to visit several museums and historic sites in a short window, though it's only genuine value if you'll actually use enough of the included sites to beat individual ticket pricing.\n\nPairing a museum visit with the Grand Bazaar or Sultanahmet's mosque circuit on the same day works well logistically, since most of Istanbul's major museums sit within walking distance of the historic peninsula's other headline sights.",
          },
        ],
        faqs: [
          { q: "What is the best museum in Istanbul besides Topkapi Palace?", a: "The Museum of Turkish and Islamic Arts, for its significant collection of Islamic calligraphy, ceramics and antique carpets, housed in a 16th-century Ottoman palace building on the Hippodrome." },
          { q: "Are Istanbul museums closed on any particular day?", a: "Many state-run museums close on Mondays, though individual sites like Topkapi Palace can have their own separate closing day — check each specific site rather than assuming one rule covers all." },
          { q: "Is the Istanbul Museum Pass worth it?", a: "Only if you're planning to visit enough paid museums and historic sites within the pass's validity window to beat individual ticket pricing — otherwise single tickets for the sights you actually want may work out cheaper." },
          { q: "What is Istanbul Müzeverse?", a: "A VR-based immersive cultural experience, a newer addition to the city's museum scene offering a shorter, interactive alternative to a traditional collection visit." },
        ],
      };

    case "istanbul-with-kids-guide":
      return {
        title: "Istanbul with Kids Guide 2026: What Actually Works for a Family Trip",
        description: "Istanbul isn't an obvious kids' destination on paper, but a theme park, boat rides and hands-on cultural experiences make it work better than most visitors expect.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ea600c404862ef54f76c879b2e1cc842d5bcea72a7cef2fe357b6062c3aaaea.jpg",
        fastFacts: [
          { icon: "Smile", label: "Theme park option", value: "Istanbul's Nickelodeon-themed park, reachable from the Old City or Taksim" },
          { icon: "Ship", label: "Always a hit", value: "Any boat ride — Bosphorus cruise, Princes' Islands ferry, or a short local ferry crossing" },
          { icon: "Landmark", label: "Palaces and mosques", value: "Mostly fine for kids, but long queue times and quiet-voice expectations in mosques need managing" },
          { icon: "Utensils", label: "Easy food wins", value: "Simit, Turkish delight and döner are all easy, familiar-enough textures for most kids" },
        ],
        sections: [
          {
            title: "Boat Rides Are the Easiest Win with Kids",
            content: "Of everything Istanbul offers, a **boat ride is the single most reliable kid-pleasing activity** — a Bosphorus cruise, the Princes' Islands ferry, or even just a short local commuter ferry crossing to the Asian side all deliver the same basic appeal of open decks, passing boats and ships, and a break from walking tours and queue lines. Building at least one water-based activity into most days of a family Istanbul trip is a genuinely effective way to keep kids engaged between the more adult-paced historic sights.\n\nA horse-drawn carriage ride on the Princes' Islands adds a second, equally reliable win on top of the ferry crossing itself, given that private cars are banned entirely on the islands.",
          },
          {
            title: "The Theme Park and Other Dedicated Kids' Activities",
            content: "Istanbul has its own **Nickelodeon-themed amusement park**, reachable from both the Old City and Taksim, offering a straightforward break from sightseeing for families with younger children who need a day built around rides and characters rather than historic monuments. It's a genuinely useful pressure-release valve partway through a longer Istanbul trip, rather than something to build an entire day's schedule around on its own.\n\nFor slightly older kids with more patience for history, the Basilica Cistern's underground, dimly-lit atmosphere and the Topkapi Palace treasury's jewels and weapons tend to land better than a standard mosque interior, which asks for more quiet patience than most young children naturally have.",
            tourCard: { slug: "istanbul-nickelodeon-theme-park-from-old-city-or", title: "Istanbul: Nickelodeon Theme Park from Old City or Taksim", description: "A dedicated theme-park day, a good midpoint break for families on a longer Istanbul trip.", price: "From $88", duration: "Full day", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ea600c404862ef54f76c879b2e1cc842d5bcea72a7cef2fe357b6062c3aaaea.jpg" },
          },
          {
            title: "Managing Mosques, Queues and Food with Kids",
            content: "Mosque visits require real quiet and the dress-code expectations (shoes off, modest dress) that can be a genuine ask for younger kids, so budget for a shorter visit than you'd plan for yourself and pick a less crowded time of day rather than peak midday hours. Queue times at Topkapi Palace and the Basilica Cistern can run long in peak season — a skip-the-line ticket is worth the small premium specifically to avoid a restless wait with young children.\n\nFood-wise, Istanbul is genuinely kid-friendly: simit, Turkish delight, döner and simple grilled meat dishes are all easy, familiar-enough textures and flavors for most kids, and ice cream (dondurma, famously chewy and stretchy due to its mastic and salep ingredients) is a fun, distinctly Turkish treat worth seeking out specifically for the novelty.",
            tourCard: { slug: "istanbul-budget-family-bosphorus-dinner-cruise", title: "Istanbul: Budget Family Bosphorus Dinner Cruise with Music", description: "A family-friendly dinner cruise option that keeps the boat-ride appeal without a premium price tag.", price: "From $44", duration: "3 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/69c3d1652ff05946ceb42fb78f757eb55057c907ceb50bc6a2a95602f0a9ed50.jpg" },
          },
        ],
        faqs: [
          { q: "Is Istanbul a good destination for a family with young kids?", a: "Yes, with some planning — boat rides, a dedicated theme park and generally kid-friendly food make up for the parts of the trip (mosque etiquette, museum queues) that ask more patience of younger children." },
          { q: "What's the easiest activity for kids in Istanbul?", a: "Any boat ride — a Bosphorus cruise, the Princes' Islands ferry, or a short local ferry crossing — is consistently the most reliable kid-pleasing activity in the city." },
          { q: "Does Istanbul have a theme park for kids?", a: "Yes — a Nickelodeon-themed amusement park reachable from the Old City or Taksim, a good midpoint break for families on a longer trip." },
          { q: "Are mosque visits manageable with young kids?", a: "Yes with planning — budget a shorter visit, go at a quieter time, and prepare kids for the shoes-off, quiet-voice expectations beforehand rather than expecting them to adapt on the spot." },
        ],
      };

    case "istanbul-budget-travel-guide":
      return {
        title: "Istanbul Budget Travel Guide 2026: How to See the City Without Overspending",
        description: "Istanbul can run from genuinely cheap to surprisingly expensive depending on how you book — here's where the real savings are and where cutting corners backfires.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e325519d7581d7e83be663ccb29fadbf9886ff22799a0ff6661977781e16f89e.jpg",
        fastFacts: [
          { icon: "DollarSign", label: "Free entry", value: "Every active mosque — Hagia Sophia, Blue Mosque, Süleymaniye — costs nothing to enter" },
          { icon: "Ship", label: "Cheapest Bosphorus view", value: "A public ferry from Eminönü instead of a private cruise" },
          { icon: "CreditCard", label: "Must-have card", value: "An Istanbulkart for transit, which saves meaningfully over single-journey tickets" },
          { icon: "Utensils", label: "Cheap eats", value: "Simit, balık ekmek and midye dolma street food cost a fraction of a sit-down meal" },
        ],
        sections: [
          {
            title: "Free and Nearly-Free Sights That Carry Most of the Trip",
            content: "Istanbul's biggest budget advantage over most major European cities is that its single most important landmarks — **Hagia Sophia, the Blue Mosque, Süleymaniye Mosque and the New Mosque** — are all **free to enter**, since they're active mosques, a genuine rarity among world-class landmark cities. Walking the Galata Bridge, wandering the Grand Bazaar and Spice Bazaar without buying anything, and crossing to the Asian side on a cheap local ferry are all effectively free experiences that still deliver real highlights.\n\nThis means a genuinely tight-budget Istanbul trip can still cover the city's most iconic sights without the ticket costs that eat into budgets in cities where every major sight charges admission.",
          },
          {
            title: "Where the Real Savings Are: Transit and Food",
            content: "An **Istanbulkart** is the single best money-saving purchase for transit, cutting meaningfully off single-journey ticket prices and unlocking transfer discounts across the metro, tram, bus and ferry network. For food, **street food** — simit, balık ekmek, midye dolma, döner — costs a fraction of a sit-down restaurant meal and is genuinely good, not a compromise purchase, making it realistic to eat well on a tight budget rather than treating cheap eating as a sacrifice.\n\nA public ferry instead of a private Bosphorus cruise delivers much of the same scenic payoff — the shoreline, the bridges, the palaces from the water — at a small fraction of the private tour price, the single biggest line-item savings opportunity for sightseeing specifically.",
            tourCard: { slug: "istanbul-old-town-guided-walking-tour-with-tasting", title: "Istanbul: Old Town Guided Walking Tour with Tasting", description: "A budget-friendly guided walking tour covering the historic core with some food tastings included.", price: "From $23", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e325519d7581d7e83be663ccb29fadbf9886ff22799a0ff6661977781e16f89e.jpg" },
          },
          {
            title: "Where Cutting Corners Backfires",
            content: "**Skip-the-line tickets** at Topkapi Palace and the Basilica Cistern are worth paying for in peak season — the time saved genuinely outweighs the modest premium when the standard queue runs over an hour, and a wasted morning in line is a worse budget outcome than the small extra cost. Similarly, booking **currency exchange or hamam experiences from unverified street vendors** to save a small amount often leads to worse exchange rates or lower-quality, rushed services than a slightly pricier, properly reviewed option.\n\nThe other real budget trap is **dynamic currency conversion** at card terminals, where choosing to be charged in your home currency instead of Turkish Lira almost always carries a worse exchange rate — always select Lira when a card machine asks, a free choice that saves real money across an entire trip's worth of purchases.",
          },
        ],
        faqs: [
          { q: "Are Istanbul's main attractions free?", a: "Several of the biggest — Hagia Sophia, the Blue Mosque, Süleymaniye Mosque — are free, since they're active mosques. Topkapi Palace, the Basilica Cistern and the Harem do charge admission." },
          { q: "What's the cheapest way to see the Bosphorus?", a: "A public ferry from Eminönü, run by İstanbul Şehir Hatları, delivers much of the same scenic shoreline view as a private cruise at a fraction of the price." },
          { q: "Is street food safe and worth it in Istanbul?", a: "Yes — simit, balık ekmek and midye dolma are genuinely good, not compromise purchases, and cost a fraction of a sit-down restaurant meal." },
          { q: "What's a common budget mistake tourists make in Istanbul?", a: "Choosing to pay in their home currency rather than Turkish Lira at card terminals (dynamic currency conversion), which almost always carries a worse exchange rate than letting the Lira charge go through." },
        ],
      };

    case "istanbul-luxury-travel-guide":
      return {
        title: "Istanbul Luxury Travel Guide 2026: Private Yachts, Fine Dining and the High End of the City",
        description: "Istanbul's luxury tier runs from private Bosphorus yachts to palace-adjacent fine dining — here's what a genuinely high-end Istanbul trip actually looks like.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e10bb1fe7513622bf756e9e33f32061e2c425e64789f70b6315c5f023380e802.jpg",
        fastFacts: [
          { icon: "Ship", label: "Signature luxury experience", value: "A private luxury yacht on the Bosphorus, running well into four figures for a full charter" },
          { icon: "Landmark", label: "Palace-level history", value: "A private, guided Topkapi and Dolmabahçe day with a dedicated historian guide" },
          { icon: "Droplets", label: "Hamam upgrade", value: "A historic, less touristed hamam with a private session rather than a shared time slot" },
          { icon: "MapPin", label: "Where to base yourself", value: "Bebek, Beşiktaş or the Bosphorus waterfront rather than Sultanahmet's dense tourist core" },
        ],
        sections: [
          {
            title: "A Private Yacht on the Bosphorus",
            content: "The signature Istanbul luxury experience is a **private yacht charter on the Bosphorus**, running well into four figures for a full-boat booking rather than a shared tour — a genuinely different experience from even a mid-tier guided cruise, with a dedicated crew, flexible routing and the ability to time the entire outing around sunset without sharing the deck with other passengers. These charters typically include premium catering and drinks, and some extend to a full evening with dinner served on board as the lit-up shoreline passes by.\n\nFor travelers who want the Bosphorus experience without compromise, this is the clearest step up from the budget-tier public ferry and the mid-tier shared sunset cruise alike.",
            tourCard: { slug: "istanbul-luxury-yacht-experience-on-the-bosphorus", title: "Istanbul: Luxury Yacht Experience on the Bosphorus", description: "A full private yacht charter with premium service, the clearest step up from a shared Bosphorus cruise.", price: "From $1045", duration: "3 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e10bb1fe7513622bf756e9e33f32061e2c425e64789f70b6315c5f023380e802.jpg" },
          },
          {
            title: "Palace History Without the Crowds",
            content: "A **private, guided day covering Topkapi Palace and Dolmabahçe Palace**, with a historian guide and the fast-track or skip-the-line access that cuts out the standard queues entirely, turns Istanbul's two defining Ottoman palaces into a genuinely unhurried, in-depth experience rather than a crowd-managed walk-through. This matters more at the Topkapi Harem specifically, where a knowledgeable private guide fills in the political and personal history that object labels alone can't carry.\n\nPairing this with a private shore-excursion-style day that covers the Old City at a flexible, unhurried pace — useful for cruise passengers or anyone with limited time who still wants the full depth of a longer visit — is a common high-end booking pattern.",
            tourCard: { slug: "istanbul-private-shore-excursion-with-old-city", title: "Istanbul: Private Shore Excursion with Old City Tour", description: "A flexible private day covering the Old City's headline sights at an unhurried pace with a dedicated guide.", price: "From $349", duration: "8 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ac65c9b2e68323cbca2936611c08d677515ff77e0ed5649fbbe909e7c9fbaf04.jpg" },
          },
          {
            title: "Where to Base Yourself and the Hamam Upgrade",
            content: "For a genuinely high-end stay, basing yourself in **Bebek, Beşiktaş, or along the Bosphorus waterfront** rather than Sultanahmet's dense historic core puts you closer to the city's best fine-dining restaurants, upscale hotels with waterfront views, and the Bebek/Ortaköy nightlife scene, with a short taxi or private transfer to the historic sights when needed rather than being immersed in the tourist density of the old city around the clock.\n\nOn the hamam front, the luxury upgrade from a standard tourist package is a **private, less touristed historic hamam session**, booked for exclusive use rather than a shared time slot — a genuinely different pace and intimacy than the group experience most visitors get, and worth seeking out specifically if the ritual itself matters more to you than the convenience of a central, heavily-booked location.",
          },
        ],
        faqs: [
          { q: "What is the signature luxury experience in Istanbul?", a: "A private yacht charter on the Bosphorus, running well into four figures for a full-boat booking, with a dedicated crew and flexible sunset-timed routing." },
          { q: "Is a private guide worth it for Topkapi Palace?", a: "Yes for a genuinely in-depth visit — a historian guide fills in political and personal history, particularly at the Harem, that object labels alone don't carry, and skip-the-line access removes the standard queue entirely." },
          { q: "Where should I stay in Istanbul for a luxury trip?", a: "Bebek, Beşiktaş or along the Bosphorus waterfront, rather than Sultanahmet's dense historic core, puts you closer to upscale dining and nightlife with a short transfer to the main sights when needed." },
          { q: "What's the luxury version of a hamam visit?", a: "A private session at a less touristed historic hamam, booked for exclusive use rather than a shared time slot, giving a genuinely different pace and intimacy than the standard group experience." },
        ],
      };

    case "istanbul-rainy-day-activities":
      return {
        title: "Istanbul Rainy Day Activities 2026: What Actually Works When the Weather Turns",
        description: "Istanbul's winter and shoulder-season rain doesn't need to derail a trip — here's exactly what holds up indoors, from the Grand Bazaar to a proper hamam afternoon.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9a09db283609975ebf57a5a1422ca4c72c3c832788fbc63ca83d424dff0c92a.jpg",
        fastFacts: [
          { icon: "CloudRain", label: "When rain is likeliest", value: "Winter (December-February) carries the heaviest rain risk of the year" },
          { icon: "ShoppingBag", label: "Best covered activity", value: "The Grand Bazaar and Spice Bazaar — both fully covered, dry regardless of weather" },
          { icon: "Droplets", label: "Weather-proof relaxation", value: "A hamam visit is entirely indoors and arguably more atmospheric in cold, wet weather" },
          { icon: "Landmark", label: "Indoor history fix", value: "Topkapi Palace's interior halls, the Basilica Cistern, and the Museum of Turkish and Islamic Arts" },
        ],
        sections: [
          {
            title: "The Bazaars Are Fully Covered and Unaffected by Weather",
            content: "The **Grand Bazaar and Spice Bazaar** are both entirely covered structures, making them the single most reliable rainy-day activity in the city — you can spend hours browsing, haggling and eating without stepping outside once, and a wet day arguably makes the bazaars' already-crowded lanes feel more purposeful, since fewer casual browsers compete with you for shop attention. This is also genuinely one of the few Istanbul activities where rain doesn't meaningfully change the experience at all.\n\nPairing a bazaar day with a nearby indoor lunch stop keeps the entire afternoon dry from door to door, a real advantage over open-air sightseeing on a wet day.",
          },
          {
            title: "The Basilica Cistern and Topkapi's Interior Halls",
            content: "The **Basilica Cistern**, already an atmospheric underground space on a sunny day, becomes genuinely more fitting on a grey, rainy one — the dim lighting and dripping water feel appropriately moody rather than incidental. **Topkapi Palace's interior halls** — the Treasury, the Sacred Relics section, the Harem — are all indoors, meaning a rainy day doesn't meaningfully change the palace experience beyond crossing between courtyards, where a bit of weather is a minor inconvenience rather than a trip-altering problem.\n\nThe **Museum of Turkish and Islamic Arts**, similarly fully indoors, is a solid rainy-day pairing with either of these for a half-day entirely under cover.",
            tourCard: { slug: "basilica-cistern-fast-track-entry-ticket-audio", title: "Basilica Cistern Fast-Track Entry Ticket & Audio Guide", description: "Skip-the-line entry to Istanbul's most atmospheric indoor sight, ideal regardless of weather.", price: "From $104", duration: "1 hour", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c8e682c3384ebca77eaff80a18eebe1f39e4ce740cb34166fb4a7781d9bb231.jpeg" },
          },
          {
            title: "A Hamam Afternoon Turns Bad Weather Into an Advantage",
            content: "A **Turkish hamam** visit is entirely indoors and, if anything, feels more appropriate on a cold, wet day than a hot summer afternoon — the steam room's heat is a genuine comfort against outside weather rather than an odd choice in already-warm conditions. Booking a longer, more leisurely hamam session specifically for a rainy afternoon turns what could be a wasted, weather-compromised day into one of the trip's better-remembered stops.\n\nFor evening entertainment that doesn't depend on weather at all, a **Whirling Dervish Sema ceremony**, performed indoors in a dedicated hall, works as a reliable rainy-evening booking regardless of what the forecast does outside.",
            tourCard: { slug: "istanbul-hamam-party-food-scrub-foam-make-live", title: "Istanbul: Hamam Party, Food, Scrub, Foam-Make, & Live Shows", description: "A longer indoor hamam experience with food and live entertainment, a strong full-afternoon rainy-day booking.", price: "From $128", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c039356199c9e5beccf62e13fe49abff6e8b3674410926455e4e93d6969d29e8.png" },
          },
        ],
        faqs: [
          { q: "What's the best rainy-day activity in Istanbul?", a: "The Grand Bazaar and Spice Bazaar — both fully covered structures where you can spend hours entirely dry, with the added benefit of fewer casual browsers competing for shop attention." },
          { q: "Is Topkapi Palace a good rainy-day option?", a: "Yes — its main attractions (Treasury, Sacred Relics, Harem) are all indoors, so rain only affects the short walks between courtyards rather than the core experience." },
          { q: "Does rain affect a hamam visit?", a: "No — a hamam is entirely indoors and arguably feels more fitting on a cold, wet day, with the steam room's heat a genuine comfort against the weather outside." },
          { q: "When is rain most likely in Istanbul?", a: "Winter (December-February) carries the heaviest rain risk of the year, though scattered rain can occur in other seasons too — build at least one indoor-heavy day into any winter Istanbul itinerary." },
        ],
      };

    case "dolmabahce-palace-guide":
      return {
        title: "Dolmabahce Palace Guide 2026: The Ottoman Palace That Replaced Topkapi",
        description: "Dolmabahçe Palace is a European Baroque-style waterfront palace that became the empire's primary residence for its last decades — here's what makes it genuinely different from Topkapi.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dca9049e85118e882cef4bdfe90f4dbc9d8bb951acc169b894c656021b3de21b.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Built", value: "1843-1856, under Sultan Abdülmecid I, replacing Topkapi as the primary residence" },
          { icon: "MapPin", label: "Location", value: "Directly on the Bosphorus waterfront in Beşiktaş, a short distance from Taksim" },
          { icon: "Crown", label: "Historical significance", value: "Where Mustafa Kemal Atatürk, founder of modern Turkey, died in 1938" },
          { icon: "Sparkles", label: "Architectural style", value: "European Baroque, Rococo and Neoclassical, a deliberate departure from traditional Ottoman style" },
        ],
        sections: [
          {
            title: "Why the Ottomans Built a European-Style Palace",
            content: "**Dolmabahçe Palace**, built between 1843 and 1856 under Sultan Abdülmecid I, marked a deliberate shift away from Topkapi's traditional Ottoman architecture toward a **European Baroque, Rococo and Neoclassical style**, reflecting the empire's broader 19th-century push toward modernization and closer ties with European powers. It became the empire's primary administrative and residential palace for its final decades, a symbolic and practical move away from the older palace that had served sultans for roughly 400 years.\n\nThe palace's scale and ornamentation — a massive crystal chandelier in the Ceremonial Hall, among the largest of its kind, gold leaf throughout, and a genuinely European layout and furnishing style — makes it a striking contrast to Topkapi's more traditionally Ottoman courtyards and tiled interiors, worth visiting specifically for that comparison if you've already seen Topkapi.",
            tourCard: { slug: "dolmabahce-palace-bosphorus-cruise-tour-with-lunch", title: "Dolmabahce Palace & Bosphorus Cruise Tour with Lunch", description: "A guided palace visit paired with a Bosphorus cruise and lunch for a full day on the water and in the palace.", price: "From $407", duration: "6 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dca9049e85118e882cef4bdfe90f4dbc9d8bb951acc169b894c656021b3de21b.jpg" },
          },
          {
            title: "Where Atatürk Died, and the Palace's Role in Modern Turkey",
            content: "Dolmabahçe Palace holds genuine significance for modern Turkish history beyond its Ottoman-era role: **Mustafa Kemal Atatürk**, founder and first president of the Turkish Republic, died in the palace on **November 10, 1938**, and the clock in his bedroom remains stopped at the exact time of his death, 9:05am, as a lasting memorial. This detail is one of the palace's most solemn, widely-known stops for Turkish visitors specifically, and it's worth understanding the weight it carries domestically even as an international tourist passing through.\n\nThe palace functions today as a state museum rather than a residence, and visiting hours and ticketing follow a standard museum format rather than Topkapi's separately-ticketed sections.",
          },
          {
            title: "Visiting: Location, Combining with the Bosphorus",
            content: "Dolmabahçe sits directly on the **Bosphorus waterfront in Beşiktaş**, a short distance from Taksim and easily combined with a Bosphorus cruise, given the palace's own prominent waterfront facade that's actually one of the highlights visible from the water on any standard cruise. Visiting the palace itself, then boarding a cruise that passes directly in front of it, gives a genuinely complete sense of the building — interior opulence first, then its full exterior scale from the water.\n\nGuided tours here add real value given the depth of 19th-century Ottoman political history tied to the building, more than a glass-case-and-label self-guided visit alone typically conveys.",
          },
        ],
        faqs: [
          { q: "Why did the Ottomans build Dolmabahçe Palace if they already had Topkapi?", a: "As part of a 19th-century push toward modernization and closer ties with Europe — Dolmabahçe was built in a European Baroque and Neoclassical style and became the primary residence for the empire's final decades, replacing Topkapi's more traditional Ottoman architecture." },
          { q: "What happened at Dolmabahçe Palace in 1938?", a: "Mustafa Kemal Atatürk, founder of the Turkish Republic, died there on November 10, 1938. The clock in his bedroom remains stopped at 9:05am, the time of his death, as a memorial." },
          { q: "Where is Dolmabahçe Palace located?", a: "Directly on the Bosphorus waterfront in the Beşiktaş district, a short distance from Taksim, and visible from any standard Bosphorus cruise route." },
          { q: "Should I visit Dolmabahçe or Topkapi if I only have time for one?", a: "Topkapi is the more essential stop for Ottoman-era history and the Harem; Dolmabahçe is worth adding specifically for the architectural contrast and its significance to modern Turkish history if your schedule allows both." },
        ],
      };

    case "galata-tower-guide":
      return {
        title: "Galata Tower Guide 2026: Tickets, the View and the Surrounding Neighborhood",
        description: "Galata Tower gives one of Istanbul's best panoramic views over the old city and the Bosphorus at once — here's how to time a visit and what's worth exploring around it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95425173ff99b4b7ad681526a3225d7f5ea539af7b0b7d516481fdc868230905.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Built", value: "1348, by the Genoese as part of their fortified Galata colony" },
          { icon: "MapPin", label: "Location", value: "Galata/Karaköy neighborhood, across the Golden Horn from the historic peninsula" },
          { icon: "Eye", label: "The view", value: "A 360-degree panorama covering the old city, the Bosphorus and the Golden Horn simultaneously" },
          { icon: "Clock", label: "Best time", value: "Early morning or just before sunset, to avoid both crowds and the midday haze" },
        ],
        sections: [
          {
            title: "A Genoese Watchtower That Outlasted the Colony That Built It",
            content: "**Galata Tower** was built in **1348** by Genoese merchants as the highest point of their fortified trading colony of Galata, across the Golden Horn from Byzantine Constantinople — a reminder that medieval Istanbul wasn't a single unified city but a patchwork of distinct communities, each with its own walls and towers. The tower has survived earthquakes, fires and centuries of changing ownership since, functioning at various points as a fire-watch tower and, more apocryphally, as the launch point for Hezârfen Ahmet Çelebi's legendary 17th-century glider flight across the Bosphorus to Üsküdar, a story that remains part local legend, part historical claim.\n\nToday it's a dedicated tourist viewpoint with an elevator up to the observation deck, a straightforward but genuinely rewarding stop that doesn't require the depth of historical context a palace or mosque visit benefits from.",
          },
          {
            title: "The View: What You're Actually Looking At",
            content: "From the top, Galata Tower delivers a genuine **360-degree panorama** that few other single viewpoints in Istanbul match — the historic peninsula's domes and minarets (Hagia Sophia, the Blue Mosque, Süleymaniye) to one side, the Bosphorus stretching toward the Asian side on another, and the modern skyline of Beşiktaş and Şişli on a third. This combination of old-city and waterway views in one spot is the tower's real draw over other viewpoints like N Seoul Tower-style standalone towers that only offer a single city panorama.\n\nGo in the **early morning or just before sunset** for both lighter crowds and softer light — midday visits coincide with the heaviest tourist volume and a hazier atmospheric view.",
            tourCard: { slug: "from-taksim-square-through-galata-tower-audio", title: "From Taksim Square Through Galata Tower Audio Guide", description: "A self-paced audio-guided walk from Taksim through Galata, ending at the tower's panoramic viewpoint.", price: "From $22", duration: "2 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95425173ff99b4b7ad681526a3225d7f5ea539af7b0b7d516481fdc868230905.jpg" },
          },
          {
            title: "The Galata and Karaköy Neighborhood Around the Tower",
            content: "The surrounding **Galata and Karaköy neighborhoods** have become Istanbul's trendiest concentration of specialty coffee shops, independent design stores and contemporary restaurants in recent years, a genuinely different register from both Sultanahmet's historic density and Beyoğlu's nightlife strip. Winding, steep cobblestone streets around the tower are worth wandering before or after your visit, rather than treating the tower as an isolated stop to tick off and leave.\n\nCombining a Galata Tower visit with a walk along the nearby **Spice Bazaar and Old City, Spice Bazaar & Galata Sunset Tour** route gives a full afternoon-to-evening arc across the Golden Horn's two sides.",
            tourCard: { slug: "istanbul-old-city-spice-bazaar-galata-sunset-tour", title: "Istanbul: Old City, Spice Bazaar & Galata Sunset Tour", description: "A guided route connecting the Old City, Spice Bazaar and Galata Tower in a single sunset-timed walk.", price: "From $51", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9123f6c9c446dfacc4b4f154e270de52e3661f7260be58a94d73c116dc395284.jpg" },
          },
        ],
        faqs: [
          { q: "Who built Galata Tower?", a: "Genoese merchants, in 1348, as the highest point of their fortified trading colony of Galata, across the Golden Horn from Byzantine Constantinople." },
          { q: "What's the best time to visit Galata Tower?", a: "Early morning or just before sunset, for both lighter crowds and softer light. Midday visits coincide with peak tourist volume and a hazier view." },
          { q: "What can you see from the top of Galata Tower?", a: "A 360-degree panorama covering the historic peninsula's mosques and domes, the Bosphorus toward the Asian side, and the modern Beşiktaş/Şişli skyline — a combination few other single viewpoints in the city match." },
          { q: "What neighborhood is Galata Tower in?", a: "Galata/Karaköy, now one of Istanbul's trendiest areas for specialty coffee shops and design stores, across the Golden Horn from the historic peninsula." },
        ],
      };

    case "istanbul-whirling-dervishes-guide":
      return {
        title: "Istanbul Whirling Dervishes Guide 2026: The Sema Ceremony's Real History and What to Expect",
        description: "The Whirling Dervish ceremony is a meditative Sufi ritual, not a staged performance in its original form — here's its actual meaning and how it's presented to visitors today.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4096e07cd93a71345623c12247ef4147659db690a8ee4477b79fb154a92d6cc.png",
        fastFacts: [
          { icon: "Users", label: "Origin", value: "The Mevlevi Order, a Sufi Islamic sect founded by followers of the 13th-century poet Rumi" },
          { icon: "Heart", label: "True purpose", value: "A meditative act of worship (dhikr) symbolizing spiritual ascent, not originally a performance" },
          { icon: "Clock", label: "Typical ceremony length", value: "Around 1-1.5 hours, including explanatory introduction and live Sufi music" },
          { icon: "Shirt", label: "What dervishes wear", value: "A tall camel-hair hat (sikke) and a long white skirt (tennure) that flares during the spinning" },
        ],
        sections: [
          {
            title: "The Sema Ceremony's Real Religious Meaning",
            content: "The **Sema ceremony**, performed by dervishes of the **Mevlevi Order**, a Sufi Islamic sect that traces its origins to followers of the 13th-century Persian poet and mystic **Rumi (Mevlana Jalaluddin Rumi)**, is in its original form a devotional act of **dhikr** — remembrance of God — rather than entertainment. The dervishes' slow, sustained spinning, with the right palm turned upward toward heaven and the left turned down toward earth, symbolizes the soul's spiritual journey, ascending toward divine love before returning to serve humanity grounded in that experience. The tall camel-hair hat (sikke) represents a tombstone, and the long white skirt (tennure) represents a burial shroud — the entire ritual is built around themes of spiritual death and rebirth.\n\nWhat visitors in Istanbul attend today is almost always a **respectful cultural presentation of this same ceremony**, performed by trained practitioners for an audience, rather than the ritual in its original closed monastic context — a meaningful distinction worth understanding rather than treating the event as purely a photo-friendly show.",
          },
          {
            title: "What a Visitor Ceremony Actually Looks Like",
            content: "A typical visitor-oriented Sema ceremony runs **around 1-1.5 hours**, usually opening with a brief explanation of the ritual's history and meaning, followed by live Sufi music (typically featuring the ney, a reed flute central to Mevlevi musical tradition) and then the dervishes' sustained, hypnotic spinning performed in a dedicated hall. Photography is generally allowed, though flash and excessive movement during the ceremony itself is discouraged out of respect for what remains, even in its presentational form, a genuinely meaningful ritual to many attendees and performers alike.\n\nSitting through the full explanation beforehand rather than arriving just for the spinning itself adds real understanding of what you're watching, turning what could be a purely visual curiosity into something with actual context.",
            tourCard: { slug: "istanbul-whirling-dervish-ceremony-with-live-music", title: "Istanbul: Whirling Dervish Ceremony with Live Music", description: "A full Sema ceremony with live Sufi music and context explained before the ritual begins.", price: "From $66", duration: "1.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/062d3136414b99fd4d81e9c208d3d4ee63543c5ead028b939f2692b0d26a9164.jpg" },
          },
          {
            title: "Choosing a Venue and What to Expect Practically",
            content: "Ceremonies are held at several venues across Istanbul, ranging from more intimate, traditionally-styled halls to larger, more tourist-oriented theater settings, with the smaller, more traditional venues generally offering a more atmospheric and respectful presentation than a large theater format. Booking ahead is worth doing specifically for the smaller, more atmospheric venues, since capacity is genuinely limited in a way that larger performance halls aren't.\n\nDress modestly and keep conversation to a minimum during the ceremony itself — while this is a cultural presentation rather than an active religious service, the dervishes performing are typically genuine practitioners, and a quiet, attentive audience is part of what makes the experience land rather than feel like background entertainment.",
            tourCard: { slug: "istanbul-whirling-dervish-sema-ceremony", title: "Istanbul: Whirling Dervish Sema Ceremony", description: "A traditional-venue Sema ceremony with the ritual's full context and meaning explained.", price: "From $37", duration: "1.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/89b5fad68075c53ba532ec560e22e7f817ac10fabc5ac829d6fc94a4ac6fd47a.jpeg" },
          },
        ],
        faqs: [
          { q: "What does the Whirling Dervish ceremony actually mean?", a: "It's a Sufi devotional act (dhikr) performed by the Mevlevi Order, symbolizing the soul's spiritual ascent toward divine love and return to serve humanity — the spinning, hat and skirt all carry specific symbolic meaning tied to spiritual death and rebirth." },
          { q: "Is the ceremony I attend as a tourist the real religious ritual?", a: "It's a respectful cultural presentation of the same ceremony performed for an audience, by trained practitioners, rather than the original closed monastic ritual — a meaningful distinction worth knowing." },
          { q: "How long does a Whirling Dervish ceremony last?", a: "Typically around 1-1.5 hours, including an explanatory introduction and live Sufi music before the spinning itself." },
          { q: "Who founded the Mevlevi Order behind the Sema ceremony?", a: "The order traces its origins to followers of the 13th-century Persian poet and mystic Rumi (Mevlana Jalaluddin Rumi)." },
        ],
      };

    case "istanbul-turkish-coffee-culture-guide":
      return {
        title: "Istanbul Turkish Coffee Culture Guide 2026: How It's Made, Served and Read",
        description: "Turkish coffee is UNESCO-recognized intangible cultural heritage, not just a brewing method — here's how it's actually prepared, the social ritual around it, and the fortune-telling tradition.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/333acb30cb35fdaee046651399ad86f594d9b393db47b283786db286f6967380.png",
        fastFacts: [
          { icon: "Coffee", label: "Brewing method", value: "Finely ground coffee brewed unfiltered in a small pot (cezve), grounds settle at the bottom" },
          { icon: "Award", label: "UNESCO status", value: "Turkish coffee culture and tradition is recognized on UNESCO's Intangible Cultural Heritage list" },
          { icon: "Sparkles", label: "Fortune-telling", value: "Fal — reading the pattern left by grounds in an emptied, cooled cup — a popular tradition, not literal prediction" },
          { icon: "Clock", label: "Typically served", value: "After a meal, alongside Turkish delight, in a small cup rather than a large mug" },
        ],
        sections: [
          {
            title: "How Turkish Coffee Is Actually Brewed",
            content: "**Turkish coffee** is made from very finely ground coffee beans — finer than espresso grind — brewed **unfiltered** with cold water in a small, long-handled copper or brass pot called a **cezve**, slowly heated (traditionally over hot sand, though a stovetop works too) until a foam rises just before boiling, at which point it's poured carefully into small cups, foam first. The grounds settle naturally at the bottom of the cup rather than being filtered out, giving the coffee its distinctively thick, strong character — and the one universal rule every local will tell a first-timer is to stop drinking before you reach the sediment at the bottom.\n\nIn 2013, **Turkish coffee culture and tradition was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity**, recognition of the brewing method's centuries-old history and its continued role in Turkish social and hospitality customs, not just as a drink but as an entire ritual around preparation, serving and conversation.",
          },
          {
            title: "The Social Ritual: Hospitality, Sweetness Levels and Turkish Delight",
            content: "Offering Turkish coffee to a guest is a core hospitality gesture in Turkish culture, traditionally prepared to the guest's specified **sweetness level** — sade (no sugar), az şekerli (a little sugar), orta (medium) or çok şekerli (sweet) — decided before brewing, since sugar is added during preparation rather than stirred in afterward. It's typically served **after a meal** rather than alongside or before one, often paired with a small piece of **Turkish delight (lokum)** or a glass of water on the side to cleanse the palate beforehand.\n\nA proper Turkish coffee experience takes real time — it's meant to be sipped slowly over conversation, not consumed quickly the way a to-go espresso might be, and rushing through a cup runs somewhat against the entire point of the ritual.",
          },
          {
            title: "Fal: The Fortune-Telling Tradition",
            content: "Once a cup of Turkish coffee is finished, a tradition called **fal** involves turning the empty cup upside down onto its saucer, letting it cool for several minutes, then having someone experienced in the practice interpret the patterns left by the settled grounds as symbolic shapes and signs — a tradition most Turks today engage with as light, genuinely enjoyable entertainment among friends rather than literal fortune-telling. It's become one of the more popular tourist-facing cultural experiences in Istanbul specifically because it's interactive, quick and personal in a way a standard museum visit isn't.\n\nA dedicated workshop that walks through both the brewing process and a proper fal reading gives a far more complete picture of the tradition than a rushed tourist-stall version squeezed between other sightseeing.",
            tourCard: { slug: "istanbul-turkish-coffee-workshop-rumi-bendir", title: "Istanbul: Turkish Coffee Workshop & Rumi Bendir Hagia Sophia", description: "A hands-on coffee-brewing workshop paired with cultural context near Hagia Sophia.", price: "From $16", duration: "1.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0eabcf0405e4cef788cc4a450891a606d52f4159a968fa34a81ae1ade3942f3f.jpeg" },
          },
        ],
        faqs: [
          { q: "What makes Turkish coffee different from regular coffee?", a: "It's brewed unfiltered from very finely ground beans in a small pot (cezve), with the grounds settling at the bottom of the cup rather than being filtered out — giving it a distinctively thick, strong character." },
          { q: "Is Turkish coffee UNESCO-recognized?", a: "Yes — Turkish coffee culture and tradition was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2013." },
          { q: "What is Turkish coffee fortune-telling (fal)?", a: "A tradition of interpreting the patterns left by coffee grounds in an emptied, cooled cup, taken as light entertainment by most locals rather than literal prediction." },
          { q: "How do I order Turkish coffee with the right sweetness?", a: "Specify your sweetness level when ordering — sade (no sugar), az şekerli (a little), orta (medium) or çok şekerli (sweet) — since sugar is added during brewing, not stirred in afterward." },
        ],
      };

    case "istanbul-weekend-guide":
      return {
        title: "Istanbul Weekend Guide 2026: Making a 2-Day Trip Actually Work",
        description: "A weekend in Istanbul means hard choices — here's a realistic two-day plan that covers the essentials without the rushed, checklist feeling a tight schedule can create.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        fastFacts: [
          { icon: "Calendar", label: "Realistic scope", value: "The Sultanahmet core plus one additional experience — Bosphorus, bazaar or hamam, not all three" },
          { icon: "Clock", label: "Arrival timing", value: "A Friday evening or early Saturday arrival maximizes the two full days available" },
          { icon: "MapPin", label: "Stay near", value: "Sultanahmet or Beyoğlu/Taksim for minimal transit time between sights" },
          { icon: "AlertTriangle", label: "What to skip", value: "The Princes' Islands and Cappadocia both need more time than a weekend allows" },
        ],
        sections: [
          {
            title: "Saturday: The Sultanahmet Core, Front-Loaded",
            content: "Spend Saturday entirely on the **historic peninsula**: Hagia Sophia and the Blue Mosque first thing in the morning, the Basilica Cistern and Topkapi Palace through midday, and the Grand Bazaar for a late-afternoon haggling session before dinner. This is the same core as the 1-day itinerary, but with a weekend's slightly more relaxed pacing rather than racing against a single sunset deadline.\n\nBook skip-the-line tickets for Topkapi and the Cistern specifically for a weekend trip, since Saturday draws the heaviest combined tourist and local visitor volume of the week at most major sights.",
            tourCard: { slug: "istanbul-5-in-1-hagia-sophia-topkapi-cistern", title: "Istanbul: 5-in-1 Hagia Sophia Topkapi Cistern & Grand Bazaar", description: "A single guided booking covering the entire Sultanahmet core, well-suited to a tight weekend schedule.", price: "From $116", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5607be4dd08f484cc80fcd27b73def85102de6e9ec8ad711fcfaf0526b2025b.png" },
          },
          {
            title: "Sunday: Choose One — Bosphorus, Galata or a Hamam",
            content: "With one day left, pick a **single additional experience** rather than trying to cram in several — a Bosphorus cruise for the water views and palace glimpses, a Galata Tower and Karaköy coffee-shop wander for a different neighborhood feel, or a proper hamam session if relaxation after Saturday's walking matters more than another sight. Attempting all three in a single Sunday generally backfires, leaving each one rushed rather than properly enjoyed.\n\nNote that both the **Grand Bazaar and Spice Bazaar close on Sundays**, so if bazaar shopping is a priority, make sure it happens on Saturday instead.",
            tourCard: { slug: "istanbul-karakoy-hammam-experience", title: "Istanbul: Karakoy Hammam Experience", description: "A relaxing Sunday option that pairs well with a Galata Tower visit in the same neighborhood.", price: "From $146", duration: "1.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6d10d65383c41f9bba8a2857bc84d3bff2fc729bcb382b85b07d0ad94f180fa.jpeg" },
          },
          {
            title: "What a Weekend Genuinely Can't Fit",
            content: "Be honest with yourself about scope: the **Princes' Islands** need most of a dedicated day given the ferry time alone, and **Cappadocia** requires a flight each way plus an overnight stay for the balloon ride — neither fits into a standard two-day weekend without turning the entire trip into a rushed transit exercise. If either matters enough to you, it's worth extending the trip by even one additional day rather than attempting to force it into a tight Saturday-Sunday window.\n\nA weekend trip genuinely works best when you accept it as a focused introduction to Istanbul's historic core rather than a complete tour, with the Bosphorus, islands and day trips saved for a longer return visit.",
          },
        ],
        faqs: [
          { q: "Is a weekend enough time for Istanbul?", a: "Enough for a focused introduction to the Sultanahmet historic core plus one additional experience (Bosphorus, Galata, or a hamam) — not enough for the Princes' Islands or a Cappadocia side trip." },
          { q: "What should I prioritize on a 2-day Istanbul weekend?", a: "Front-load the Sultanahmet core (Hagia Sophia, Blue Mosque, Basilica Cistern, Topkapi, Grand Bazaar) on day one, then pick a single additional experience for day two rather than trying to fit several." },
          { q: "Are the bazaars open on a Sunday weekend trip?", a: "No — both the Grand Bazaar and Spice Bazaar close on Sundays, so plan any bazaar shopping for Saturday instead." },
        ],
      };

    case "best-tours-in-istanbul":
      return {
        title: "Best Tours in Istanbul — 2026, Honestly Compared",
        seoTitle: "Best Tours in Istanbul 2026: Top-Rated Picks by Category",
        description: "The best Istanbul tours for 2026, picked by category — Hagia Sophia & Sultanahmet, the Grand Bazaar, a Bosphorus sunset cruise, the Princes' Islands and food — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "A first-time visitor should default to the **Sultanahmet core circuit** — Hagia Sophia, the Blue Mosque and the Basilica Cistern with a guide who explains the layered Byzantine-Ottoman history, which is what makes these sights mean something beyond the architecture. Add a Bosphorus cruise at sunset to close the day.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "istanbul-hagia-sophia-blue-mosque-cistern-guided", title: "Istanbul: Hagia Sophia, Blue Mosque & Cistern Guided Tour", description: "A guided morning covering the three headline Sultanahmet sights with the historical context explained on the spot.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg" },
          },
          {
            title: "Best Sunset Experience: Bosphorus Cruise",
            content: "A **Bosphorus sunset yacht tour** is the one Istanbul experience that genuinely requires water — both the European and Asian shorelines, the Ottoman waterfront palaces, and the two continental suspension bridges, timed for golden hour.",
            tourCard: { slug: "istanbul-bosphorus-sunset-yacht-tour-with-guide", title: "Istanbul: Bosphorus Sunset Yacht Tour With Guide & Snacks", description: "A late-afternoon cruise timed for the golden-hour light.", price: "From $35", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6024c78ccbf626cabea49fd9701ff28924340966fc088184d649b880daf1a73e.jpeg" },
          },
          {
            title: "Best Shopping & Market Tour",
            content: "The **Grand Bazaar**, one of the world's oldest covered markets with roughly 4,000 shops, is built for haggling — a guide who knows which stalls are worth it and what a fair counter-offer looks like turns a confusing maze into an actually enjoyable couple of hours.",
            tourCard: { slug: "istanbul-private-grand-bazaar-shopping-tour-with", title: "Istanbul: Private Grand Bazaar Shopping Tour with Guide", description: "A guided walk through the Grand Bazaar's lanes with a local explaining what's worth buying and what to haggle on.", price: "From $104", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09e5af000b61afab317a5e87bc9d9c28f47e0a4575a4cc3eb8408c4f1c53871c.jpg" },
          },
          {
            title: "Best Day Trip: Princes' Islands",
            content: "The **Princes' Islands**, a short ferry ride from the city center, ban private cars entirely — walking, cycling or a horse-drawn carriage only. Büyükada, the largest island, has a genuinely slower pace than anywhere in the city proper, and it's the best full-day escape from Istanbul's density.",
            tourCard: { slug: "istanbul-princess-islands-day-trip-with-lunch", title: "Istanbul: Princess Islands Day Trip with Lunch & Ferry", description: "A full day on the car-free Princes' Islands, ferry and lunch included.", price: "From $88", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bd18bf79d05f81d3cb769e7839dcee3ad0e68a5a30a717ccbd01b56db5e1c91.jpg" },
          },
          {
            title: "Best Food Tour",
            content: "A small-group **food tour** through Istanbul's neighbourhoods covers the everyday dishes and photo spots most guidebooks skip, run by a local rather than a script.",
            tourCard: { slug: "istanbul-food-tour-small-group-history-photo-spots", title: "Istanbul Food Tour: Small Group, History & Photo Spots", description: "A guided first dinner-and-walk that also covers the city's everyday rhythms most guidebooks skip.", price: "From $117", duration: "3.5 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/838b47cab4965458e2bd87e4c8c9d30ef843b2c4a03aff5e5ed74f4f665636ba.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Istanbul tours](/turkey/istanbul)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Istanbul?", a: "A guided Sultanahmet core circuit — Hagia Sophia, the Blue Mosque and the Basilica Cistern — covers the three headline sights with the historical context that makes them mean something. Add a Bosphorus sunset cruise to close the day." },
          { q: "What is the best day trip from Istanbul?", a: "The Princes' Islands — a short ferry ride to a place with no private cars at all, and a noticeably slower pace than the rest of the city." },
          { q: "Is the Grand Bazaar worth a guided tour?", a: "Yes — it's built for haggling and a local guide who knows which stalls are worth it turns a confusing 4,000-shop maze into a genuinely enjoyable couple of hours." },
          { q: "What is the best Bosphorus cruise?", a: "A sunset yacht tour, timed for golden hour, showing both the European and Asian shorelines and the Ottoman waterfront palaces." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "A guided Sultanahmet core circuit covering Hagia Sophia, the Blue Mosque and the Basilica Cistern, plus a Bosphorus sunset cruise." } },
                { "@type": "Question", "name": "What is the best day trip from Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "The Princes' Islands, a car-free island escape a short ferry ride from the city." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Sultanahmet Core Circuit' },
          { icon: 'Sunset', label: 'Best Sunset', value: 'Bosphorus Cruise' },
          { icon: 'Map', label: 'Best Day Trip', value: "Princes' Islands" }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-istanbul-tour-direct-or-through-app":
      return {
        title: "Should You Book an Istanbul Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book an Istanbul Tour",
        description: "Direct-with-the-guide vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Istanbul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Istanbul guides will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA Sultanahmet circuit or a Princes' Islands day trip involves real logistics — whether the Blue Mosque's dress code is handled on-site, which ferry the island trip actually uses. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through a guide's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "istanbul-hagia-sophia-blue-mosque-cistern-guided", title: "Istanbul: Hagia Sophia, Blue Mosque & Cistern Guided Tour", description: "Ask about the Blue Mosque dress code or timing around prayer hours before you book.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local guide removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the guide who actually runs the tour. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number found through a hotel concierge is also \"direct,\" and has none of the accountability of a platform that vets guides and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or a guide's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the Bosphorus cruise or the Grand Bazaar walk would know — whether the yacht trip runs in choppy weather, or what a fair haggling range looks like. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the guide can't take your date.** If a platform or guide can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Istanbul tour — the [best tours in Istanbul](/turkey/istanbul/best-tours-in-istanbul), the Sultanahmet circuit, the Bosphorus sunset cruise — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local guide directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Istanbul; several of our tours are also run by the same guides through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "istanbul-bosphorus-sunset-yacht-tour-with-guide", title: "Istanbul: Bosphorus Sunset Yacht Tour With Guide & Snacks", description: "Ask whether the cruise runs in choppy weather before booking.", price: "From $35", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6024c78ccbf626cabea49fd9701ff28924340966fc088184d649b880daf1a73e.jpeg" },
          },
        ],
        faqs: [
          { q: "Is it better to book an Istanbul tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local guide's own contact." },
          { q: "Is it cheaper to book Istanbul tours direct with a guide?", a: "Sometimes, but not always — many local guides sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if an Istanbul tour guide is legit before booking?", a: "Message them a specific question — the Blue Mosque dress code, a weather contingency for the Bosphorus cruise — before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking an Istanbul tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local guide before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book an Istanbul tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Istanbul tours direct with a guide?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local guides sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if an Istanbul tour guide is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking an Istanbul tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local guide before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-10/31)
    case "how-much-should-a-private-tour-guide-cost-in-istanbul":
      return {
        title: "How Much Should a Private Tour Guide Cost in Istanbul?",
        seoTitle: "Istanbul Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guide or driver in Istanbul in 2026, by tour type, so you know what's fair before you book.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **private Old Town guided walking tour** (Hagia Sophia, Blue Mosque, Grand Bazaar) typically runs **$48-230 for 1-2 people**, depending on whether it's a standard guide or a premium \"best of\" small-group-turned-private format, and often climbs by roughly $48-70 per added traveller. A **private airport layover city tour** runs considerably more, **$550-800 for 1-2 people**, since it includes a longer route and private transport across the city. A **private day trip outside Istanbul** (Pamukkale by plane, Göbeklitepe) runs into the **$700-2,000+** range for the group, reflecting flights or long drives, not just guide time.",
            tourCard: { slug: "istanbul-old-town-private-guided-tour-with-tram", title: "Istanbul: Old Town Private Guided Tour with Tram Ride", description: "A real example of standard private guided-tour pricing that steps up per added traveller.", price: "From $48", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg" },
          },
          {
            title: "Why the Price Range Is So Wide",
            content: "Istanbul's private-tour market spans a standard local guide on foot or by tram, a chauffeured \"premium\" or \"VIP\" version of the same route, and a flight-inclusive day trip to Pamukkale or Cappadocia-adjacent sites — three very different products that all get labelled \"private tour.\" The guide's own fee is a small part of the total once flights, a private vehicle, or entrance tickets for major sites (Topkapı Palace, Hagia Sophia) are added — ask what's bundled before comparing headline numbers.",
          },
          {
            title: "Red Flags on Price",
            content: "A private Old Town tour quote well under $48 for a full day often means a shortened route, an unlicensed guide, or a carpet-shop or jewellery-shop detour built in to make up the margin — a long-documented pattern in Istanbul specifically. For a flight-inclusive day trip, confirm the flight is actually included in the quote, not an extra cost revealed later.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly whether entrance tickets, transport and any flights are included, and whether the guide is licensed. On AsiaByLocals, every Istanbul tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Istanbul tours](/turkey/istanbul) to compare real, current prices directly.",
            tourCard: { slug: "istanbul-private-customized-tour-with-local-guide", title: "Istanbul: Private Customized Tour with Local Guide", description: "A real example of a flat-for-1-2 local guided tour, distinct from the premium or flight-inclusive formats.", price: "From $363", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcf68b321ccac985456d2efce5ad90f9daa43d9ee56aee55d69bdf3bbb43258c.jpeg" },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Istanbul?", a: "A private Old Town guided walking tour typically runs $48-230 for 1-2 people. A private airport layover city tour runs $550-800 for 1-2 people since it covers a longer route." },
          { q: "How much does a private day trip from Istanbul cost?", a: "A flight-inclusive private day trip (Pamukkale, Göbeklitepe) runs roughly $700-2,000+ for the group, reflecting flight costs, not just guide time." },
          { q: "Is a very cheap private Istanbul tour quote a red flag?", a: "Often yes — it can mean a shortened route, an unlicensed guide, or a carpet or jewellery shop detour built in to make up the margin." },
          { q: "What's usually included in an Istanbul private tour price?", a: "Typically the guide's fee and transport. Major site entrance tickets and any flights are sometimes separate — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Istanbul?", "acceptedAnswer": { "@type": "Answer", "text": "A private Old Town guided walking tour typically runs $48-230 for 1-2 people." } },
            { "@type": "Question", "name": "How much does a private day trip from Istanbul cost?", "acceptedAnswer": { "@type": "Answer", "text": "A flight-inclusive private day trip runs roughly $700-2,000+ for the group." } },
            { "@type": "Question", "name": "Is a very cheap private Istanbul tour quote a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shortened route, an unlicensed guide, or a shop detour built in." } },
            { "@type": "Question", "name": "What's usually included in an Istanbul private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the guide's fee and transport; major entrance tickets and flights are sometimes separate." } },
          ],
        },
      };

    default:
      return null;
  }
}
