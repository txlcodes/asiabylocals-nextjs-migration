// Shanghai authority pages (2026-10). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getShanghaiInfoContent() -> getChinaInfoContent() -> getCityInfoContent().
// Every tourCard slug is taken from the live China tour list (GET /api/public/tours?country=China&city=Shanghai).
import type { CityInfoData } from './cityInfoContent';

export function getShanghaiInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-shanghai":
      return {
        title: "Best Time to Visit Shanghai: Weather, Typhoons & Crowds by Month (2026)",
        description: "Shanghai's climate is humid subtropical with a real typhoon season. Spring and autumn are the sweet spots — here's the month-by-month breakdown and the weeks worth avoiding.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f00744670e8541da39765d",
        fastFacts: [
          { icon: "Flower", label: "Best months", value: "March-May and September-November" },
          { icon: "CloudRain", label: "Typhoon season", value: "July-September (direct hits rare, heavy rain common)" },
          { icon: "Thermometer", label: "Hottest, most humid", value: "July-August" },
          { icon: "Snowflake", label: "Coldest", value: "January (near-freezing possible, damp cold)" },
        ],
        sections: [
          {
            title: "Shanghai's Climate Is Humid Subtropical, Not Tropical",
            content: "Shanghai gets lumped in with the rest of China's travel season advice, but its weather pattern is genuinely its own: a humid subtropical climate with four real seasons, hot and sticky summers, cold damp winters, and — unlike Beijing — a measurable **typhoon season** running roughly July through September, since Shanghai sits directly on the East China Sea coast at the mouth of the Yangtze.\n\n**Spring (March-May)** is generally considered the best window: mild temperatures, blooming trees along the Bund and in the French Concession, and manageable humidity before summer sets in. **Autumn (September-November)** is the other strong option — the heat and worst of typhoon risk have passed, and the air is often clearer and crisper than any other season.",
          },
          {
            title: "Summer Heat, Humidity and Typhoons",
            content: "**June through August** is Shanghai's hot season, with daytime temperatures commonly in the low-to-mid 30s°C (high 80s-90s°F) and humidity that makes it feel significantly hotter — this is also the city's rainiest stretch, including a plum-rain period in June that brings extended damp, overcast weather before the full summer heat arrives.\n\n**Typhoon season (July-September)** rarely means a direct, destructive hit on the city itself — Shanghai is more often affected by the heavy rain and wind bands on a typhoon's periphery than a full landfall — but it does mean flight delays, occasional flooding on low-lying streets, and outdoor activities like river cruises or Zhujiajiao boat rides getting cancelled on short notice during active storm warnings. If you're traveling in this window, build in flexibility rather than a tightly packed schedule with no slack days.",
            tourCard: { slug: "shanghai-river-ferry-and-bund-tour-with-local", title: "Shanghai: River Ferry and Bund Tour with Local English Guide", description: "A good weather-flexible option outside peak storm warnings — the Huangpu stays calmer than the open sea even when a typhoon is nearby.", price: "From $101", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f00744670e8541da39765d" }
          },
          {
            title: "Winter and Crowds",
            content: "**Winter (December-February)** is cold and damp rather than dry-cold like Beijing — Shanghai has no central heating infrastructure built into most older buildings, which can make indoor spaces feel colder than the outdoor temperature suggests. January can dip near freezing on its coldest nights, with occasional light snow, though it rarely sticks.\n\nOn crowds: **Chinese New Year** (dates shift yearly, typically late January to mid-February) empties much of the city as residents travel home for the holiday, which paradoxically makes central Shanghai quieter but also closes many smaller restaurants and shops for up to a week. **Golden Week** (around October 1st, National Day) is the opposite — among the single busiest and most expensive travel weeks in the country, worth avoiding if your dates are flexible at all.",
          }
        ],
        faqs: [
          { q: "What is the best month to visit Shanghai?", a: "April, May, October or November — spring and autumn both offer mild temperatures and lower humidity than summer, without winter's damp cold." },
          { q: "Does Shanghai get hit by typhoons?", a: "Direct landfalls on the city itself are relatively rare; more commonly Shanghai feels the heavy rain and wind on the edge of a typhoon passing nearby, July through September, which can disrupt flights and outdoor river activities." },
          { q: "Is Shanghai cold in winter?", a: "Yes, and damply so — January can dip near freezing, and many older buildings lack strong central heating, so indoor spaces can feel colder than the outdoor temperature suggests." },
          { q: "Should I avoid Golden Week in Shanghai?", a: "If your dates are flexible, yes — the National Day holiday around October 1st is one of China's busiest and most expensive travel weeks nationwide, including in Shanghai." },
        ],
      };

    case "things-to-do-in-shanghai":
      return {
        title: "25 Best Things to Do in Shanghai (2026): The Complete List",
        description: "From the Bund's skyline to Zhujiajiao's canals — everything genuinely worth your time in Shanghai, organized by what kind of day you're planning.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-bund-skyline",
        sections: [
          {
            title: "The Skyline: Bund, Pudong & Shanghai Tower",
            content: "**The Bund** — Shanghai's riverside promenade of colonial-era buildings facing Pudong's futuristic skyline across the Huangpu River; free, and best at dusk when both sides light up.\n\n**Shanghai Tower** — the world's second-tallest building, with an observation deck near the top floor and the fastest elevators of any building when it opened.\n\n**Huangpu River night cruise** — the single most efficient way to see both the historic Bund and modern Pudong skylines from the water in one trip.\n\n**Oriental Pearl Tower** — the older, more retro-futuristic Pudong landmark, still a solid viewpoint and genuinely photogenic from across the river.",
          },
          {
            title: "Old Shanghai: Yu Garden, Old Town & French Concession",
            content: "**Yu Garden** — a Ming dynasty classical garden surrounded by a lively bazaar; go early to see the garden itself before the bazaar crowds peak.\n\n**French Concession** — Shanghai's former French colonial district, now the city's best neighborhood for tree-lined streets, independent cafes and boutique shopping; Wukang Road is its most photographed corner.\n\n**City God Temple** — a Taoist temple adjoining Yu Garden, genuinely active rather than purely a tourist stop.\n\n**Jing'an Temple** — a gold-roofed Buddhist temple that feels startlingly out of place amid Jing'an district's glass office towers, which is exactly why it's worth the stop.",
            tourCard: { slug: "shanghai-yu-garden-and-city-god-temple-culture", title: "Shanghai: Yu Garden and City God Temple Culture Tour", description: "The old-town pairing done properly — garden and temple together with context, rather than a rushed bazaar walk-through.", price: "From $102", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-yu-garden" }
          },
          {
            title: "Day Trips and Family Activities",
            content: "**Zhujiajiao water town** — a canal town around an hour from the city, the easiest authentic water-town day trip without the longer haul to Suzhou.\n\n**Suzhou** — a bullet train away (roughly 25-40 minutes depending on the service), home to UNESCO-listed classical gardens and generally considered the better day-trip option if you only have time for one.\n\n**Shanghai Disneyland** — the first Disney park on the Chinese mainland, genuinely worth a dedicated day rather than a half-day add-on.\n\n**ERA Intersection of Time** — Shanghai's resident acrobatics show, a long-running and consistently well-reviewed evening activity.",
            tourCard: { slug: "modern-suzhou-ancient-water-town-tour-with-boat", title: "Modern Suzhou & Ancient Water Town Tour with Boat Ride", description: "Suzhou's gardens and canals in one day trip from Shanghai, with a boat ride included.", price: "From $440", duration: "Full day", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/suzhou-canal" }
          }
        ],
        faqs: [
          { q: "What is Shanghai most famous for?", a: "The Bund's skyline view across the Huangpu River to Pudong's futuristic towers is Shanghai's signature sight, alongside Yu Garden, the French Concession's old streets, and day trips to Zhujiajiao or Suzhou." },
          { q: "Is Shanghai or Suzhou better for a day trip?", a: "Suzhou generally, if you only have time for one — its classical gardens are UNESCO-listed and the bullet train makes it roughly 25-40 minutes away. Zhujiajiao is closer and good if you want a shorter half-day water-town taste instead." },
          { q: "Is Shanghai Disneyland worth a full day?", a: "Yes — it's a full-scale park, the first on the Chinese mainland, and most visitors find a half-day insufficient to cover the major rides and shows." },
        ],
      };

    case "shanghai-travel-guide-2026":
      return {
        title: "Shanghai Travel Guide 2026: Everything You Need to Plan Your Trip",
        description: "A practical Shanghai travel guide — getting around, when to go, what to see, and how Shanghai differs from Beijing for first-time China visitors.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-bund-night",
        sections: [
          {
            title: "Before You Go",
            content: "The visa situation for Shanghai is the same as the rest of mainland China — check our [China visa guide](/china/beijing/china-visa-guide-for-tourists) before booking, since Shanghai is also an eligible port for the 240-hour visa-free transit exemption if you're routing onward to a third country.\n\nOn timing, spring (March-May) and autumn (September-November) are Shanghai's best months — see our [best time to visit](/china/shanghai/best-time-to-visit-shanghai) guide for the full month-by-month breakdown, including the real typhoon-season risk in summer.",
          },
          {
            title: "Getting Around",
            content: "Shanghai's metro is one of the largest in the world by route length, and is the fastest, cheapest way to move between the Bund, French Concession, and outer districts — see our [metro guide](/china/shanghai/shanghai-metro-guide). Didi works well for door-to-door trips, and having your destination in Chinese characters (the app itself can generate this) smooths over the language barrier with most drivers.\n\nShanghai is also the easiest Chinese city for a cashless-app setup, since Alipay and WeChat Pay QR codes are accepted almost everywhere, including small street vendors.",
          },
          {
            title: "What to See",
            content: "The essentials — Bund, Yu Garden, French Concession, Zhujiajiao or Suzhou as a day trip — are covered in our [things to do](/china/shanghai/things-to-do-in-shanghai) guide. If you're deciding between Shanghai and Beijing with limited time for a China trip overall, see our direct [Shanghai vs Beijing](/china/shanghai/shanghai-vs-beijing-which-to-visit) comparison — the short version is that Shanghai is the more modern, walkable, Western-visitor-friendly city, while Beijing has the heavier historic weight with the Great Wall and Forbidden City.",
            tourCard: { slug: "shanghai-zhujiajiao-french-concession-bund-day", title: "Shanghai: Zhujiajiao, French Concession & Bund Day Tour", description: "A one-day sampler covering the water town, the old colonial district and the skyline — a good first-timer's overview.", price: "From $152", duration: "Full day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-zhujiajiao" }
          }
        ],
        faqs: [
          { q: "Do I need a visa to visit Shanghai?", a: "The same rules apply as the rest of mainland China — most Western travelers need a visa unless their nationality is on the unilateral visa-free list or they qualify for the 240-hour transit exemption, for which Shanghai is an eligible port." },
          { q: "How many days do you need in Shanghai?", a: "Three days covers the essentials well — see our 3-day itinerary — with a fourth day worth adding if you want a Suzhou or Disneyland day trip without cutting into city time." },
          { q: "Is Shanghai easier for tourists than Beijing?", a: "Generally yes — it's more Western-visitor-friendly day-to-day, with more English signage in the central districts and a less spread-out layout, though Beijing has the deeper historic sites." },
        ],
      };

    case "shanghai-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Shanghai Itinerary",
        description: "A realistic one-day Shanghai plan covering the Bund, Yu Garden and the French Concession without rushing any of them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-yu-garden-bund",
        sections: [
          {
            title: "Morning: Old Shanghai",
            content: "**9:00am** — Start at **Yu Garden**, ideally right at opening before the surrounding bazaar fills with both tourists and the day's retail crowd. Budget an hour inside the garden itself.\n**10:30am** — Walk through the **Yu Garden Bazaar** and stop at the adjoining **City God Temple**.\n**12:00pm** — Lunch nearby; the old town has good, casual local food if you skip the tourist-facing restaurants directly on the bazaar's main lane.",
            tourCard: { slug: "shanghai-yu-garden-and-city-god-temple-culture", title: "Shanghai: Yu Garden and City God Temple Culture Tour", description: "The morning done with context rather than a rushed solo walk through the bazaar crowds.", price: "From $102", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-yu-garden" }
          },
          {
            title: "Afternoon: French Concession",
            content: "**1:30-4:30pm** — Head to the **French Concession**, Shanghai's best neighborhood for an unhurried walk: tree-lined streets, independent cafes, and Wukang Road's distinctive colonial architecture. This is the part of the day with no fixed schedule — the point is to wander rather than tick off sites.",
          },
          {
            title: "Evening: The Bund",
            content: "**5:30pm** — Make your way to **the Bund** in time for golden hour and the transition to night, when both the historic Bund buildings and Pudong's skyline across the river light up.\n**7:00pm** — Dinner at a Bund-facing restaurant, or walk across to Pudong for dinner with the reverse view back at the Bund.\n**8:30pm** — A Huangpu River night cruise is the natural close to the day if you haven't done one yet — it's the single most efficient way to see both skylines from the water.",
            tourCard: { slug: "shanghaivip-huangpu-night-cruise-with-guide-bund", title: "Shanghai: VIP Huangpu Night Cruise with Guide & Bund Views", description: "The evening close to a one-day Shanghai itinerary — both skylines from the water after dark.", price: "From $41", duration: "1-2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-night-cruise" }
          }
        ],
        faqs: [
          { q: "Can you see Shanghai's highlights in one day?", a: "Yes, for the core trio of Yu Garden, the French Concession and the Bund — it's a realistic single day if you don't also try to fit in a day trip to Zhujiajiao or Suzhou." },
          { q: "What's the best time to see the Bund?", a: "Dusk through early evening, when both the historic Bund side and Pudong's skyline across the river light up for the night." },
        ],
      };

    case "shanghai-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Shanghai Itinerary",
        description: "A complete 3-day Shanghai plan — the city center on days one and two, a Suzhou or Zhujiajiao day trip on day three.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-skyline-pudong",
        sections: [
          {
            title: "Day 1: Old Town, French Concession & the Bund",
            content: "Morning at **Yu Garden** and the **City God Temple**, afternoon wandering the **French Concession**, evening on **the Bund** for sunset into night, closing with a Huangpu river cruise if you haven't already. This is the full version of our [1-day itinerary](/china/shanghai/shanghai-1-day-itinerary) — if you have three days, don't rush it into half a day.",
          },
          {
            title: "Day 2: Pudong Skyline & Shanghai Tower",
            content: "Spend day two on the Pudong side you admired from across the river the night before. Go up the **Shanghai Tower's** observation deck in the morning when visibility is typically best, before afternoon haze builds. In the afternoon, Nanjing Road's pedestrian shopping street connects back toward the Bund if you want a second pass at street level, or the **Jade Buddha Temple** for a quieter, less crowded religious site than Yu Garden's busy old town.",
            tourCard: { slug: "shanghai-tower-observation-deck-admission-ticket", title: "Shanghai Tower: Observation Deck Admission Ticket", description: "The world's second-tallest building, best visited in the morning before afternoon haze sets in.", price: "From $66", duration: "1-2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-tower" }
          },
          {
            title: "Day 3: Suzhou or Zhujiajiao",
            content: "Use the third day for a day trip. **Suzhou** is the stronger pick if you want UNESCO-listed classical gardens and have the roughly 25-40 minute bullet train journey each way built into your day — this is the better choice if you can only pick one. **Zhujiajiao** is closer (around an hour) and a good lighter option if you'd rather spend less of the day in transit and more time wandering canals. Either works as a full day with return by early evening.",
            tourCard: { slug: "private-suzhou-day-trip-from-shanghai-by-bullet", title: "Private Suzhou Day Trip from Shanghai by Bullet Train", description: "The stronger day-trip pick if you can only do one — classical gardens via a fast, comfortable train.", price: "From $585", duration: "Full day", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/suzhou-garden" }
          }
        ],
        faqs: [
          { q: "Is 3 days enough for Shanghai?", a: "Yes, comfortably — two days for the city center (old town, French Concession, Bund, Pudong skyline) and a third for a Suzhou or Zhujiajiao day trip." },
          { q: "Should I do Suzhou or Zhujiajiao as my day trip?", a: "Suzhou if you only have time for one and want classical UNESCO-listed gardens; Zhujiajiao if you'd rather spend less time in transit and more time wandering canals close to the city." },
        ],
      };

    case "the-bund-shanghai":
      return {
        title: "The Bund, Shanghai: Complete Visitor Guide",
        description: "What the Bund actually is, why it looks the way it does, the best viewpoints on both sides of the river, and when to go for the best light.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-bund-skyline",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Western bank of the Huangpu River, central Shanghai" },
          { icon: "Clock", label: "Best time", value: "Dusk into early evening, both sides lit" },
          { icon: "DollarSign", label: "Cost", value: "Free to walk the promenade" },
          { icon: "Building", label: "Architecture", value: "~52 buildings in varying historic Western styles, 1920s-30s heyday" },
        ],
        sections: [
          {
            title: "Why the Bund Looks the Way It Does",
            content: "The Bund is a roughly 1.5 km riverside strip of early-20th-century buildings — neoclassical banks, art deco hotels, trading houses — built largely in the 1920s and 30s when Shanghai was an international treaty port carved into foreign concessions, with British, French and other powers operating effectively autonomous zones within the city. That history is uncomfortable and contested, but it's also precisely why this stretch of riverfront ended up looking more like a European financial district than anywhere else in China, and why it survived largely intact rather than being redeveloped.\n\nDirectly across the Huangpu River sits **Pudong**, which was essentially farmland and warehouses until a 1990s government push transformed it into Shanghai's futuristic financial district — the two riverbanks facing each other are effectively a single, deliberate visual statement: colonial-era history on one side, 21st-century ambition on the other, in the same frame.",
          },
          {
            title: "Which Side to Walk and When",
            content: "Most visitors default to walking the Bund promenade itself, looking across at Pudong's skyline — this is the classic photo, especially once the **Oriental Pearl Tower**, **Jin Mao Tower** and **Shanghai Tower** all light up after dark. Fewer visitors realize the reverse view, from Pudong's riverside promenade (near the IFC mall or Lujiazui) looking back at the Bund's historic facades, is arguably just as good and noticeably less crowded.\n\n**Best time**: arrive around 30-45 minutes before sunset to see the transition from daylight to the full night lighting, which generally switches on shortly after dusk. Weekday evenings are meaningfully less crowded than weekends; Chinese public holidays can make the promenade genuinely packed.",
            tourCard: { slug: "shanghai-the-bund-decoded-archi-economy-politics", title: "Shanghai: The Bund Decoded: Archi, Economy, Politics Stories", description: "A guided walk that explains why the buildings look the way they do, rather than just a photo stop.", price: "From $156", duration: "2-3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-bund-walk" }
          },
          {
            title: "Combining the Bund With a Cruise",
            content: "A **Huangpu River cruise**, ranging from short public ferry hops to dedicated evening sightseeing cruises, is the way to see the full skyline from the water rather than from either bank — genuinely worth doing once, since the perspective from mid-river is different from either static viewpoint. Cruises range from quick and inexpensive public ferries to longer dedicated tourist boats with better seating and narration.\n\nThe Bund pairs naturally with **Nanjing Road**, Shanghai's main pedestrian shopping street, which runs inland from the Bund's northern end — a reasonable way to fill the hour before sunset if you arrive early.",
          }
        ],
        faqs: [
          { q: "Is the Bund free to visit?", a: "Yes, the riverside promenade is free and open at all hours. The only costs come from optional add-ons like a river cruise or entry to the Pudong towers across the river." },
          { q: "What is the best time to see the Bund?", a: "Around sunset, roughly 30-45 minutes before, to catch the transition from daylight to the Pudong skyline's night lighting." },
          { q: "Should I view the Bund from the Bund side or Pudong side?", a: "Both are worthwhile — the classic photo is from the Bund promenade looking at Pudong's skyline, but the reverse view from Pudong looking back at the Bund's historic buildings is less crowded and arguably just as striking." },
        ],
      };

    case "shanghai-tower-tickets":
      return {
        title: "Shanghai Tower Tickets: Prices, Floors and Is It Worth It",
        description: "Everything to know before booking Shanghai Tower's observation deck — ticket prices, which floor you actually reach, and how it compares to the Oriental Pearl Tower and Jin Mao Tower.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-tower-observation",
        fastFacts: [
          { icon: "Building2", label: "Height", value: "World's second-tallest building" },
          { icon: "Ticket", label: "Observation deck ticket", value: "Roughly ¥180-200" },
          { icon: "ArrowUp", label: "Observation floor", value: "Around the 118th floor" },
          { icon: "Clock", label: "Best time", value: "Morning for clearer visibility, before afternoon haze" },
        ],
        sections: [
          {
            title: "What Makes Shanghai Tower Different From Its Neighbors",
            content: "Shanghai Tower, the Jin Mao Tower and the Oriental Pearl Tower stand together in Pudong's Lujiazui financial district, and visitors regularly confuse which one to pick. Shanghai Tower is the newest and tallest of the three — the world's second-tallest building — distinguished by its twisting, spiraling glass facade, an engineering design specifically built to reduce wind load in a city that does get typhoon-adjacent weather.\n\nIts observation deck sits around the 118th floor, among the highest publicly accessible viewing decks in the world, and includes a famously fast elevator ride that was, when the building opened, among the fastest in the world — part of the attraction for some visitors is genuinely the elevator itself, not just the view.",
          },
          {
            title: "Ticket Prices and Booking",
            content: "Observation deck entry generally runs roughly **¥180-200**, noticeably more than either the Jin Mao Tower or Oriental Pearl Tower's equivalent decks, reflecting both its height and its newer, more premium presentation. Advance online booking is recommended, especially on weekends, though it's generally less of a hard sellout risk than Forbidden City tickets in Beijing — same-day tickets are usually available, just with potentially longer queues.\n\nSome evening-specific tickets or combined packages pair the observation deck with a Bund walking tour or river cruise — worth considering if you want the day bookended by the same skyline from two different angles, ground level at the Bund and from 118 floors up.",
            tourCard: { slug: "shanghai-tower-observation-deck-admission-ticket", title: "Shanghai Tower: Observation Deck Admission Ticket", description: "Standard advance-booked entry to the observation deck near the 118th floor.", price: "From $66", duration: "1-2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-tower" }
          },
          {
            title: "Is It Worth It Compared to the Alternatives",
            content: "If you only go up one Pudong tower, Shanghai Tower generally gives the best pure height and the most dramatic single view, but the **Jin Mao Tower** is noticeably cheaper and still gives a strong view of the skyline including Shanghai Tower itself, which the Shanghai Tower's own deck obviously can't show you. The **Oriental Pearl Tower** is the most recognizable landmark shape and the oldest of the three, with a more retro, slightly kitsch presentation that some visitors specifically enjoy for the nostalgia.\n\nThe honest trade-off: pay the premium for Shanghai Tower if height and modern presentation matter most to you; choose Jin Mao or the Pearl Tower if budget matters more and you're satisfied with a still-excellent, just slightly lower, view.",
          }
        ],
        faqs: [
          { q: "How much does it cost to go up Shanghai Tower?", a: "Observation deck tickets generally run roughly ¥180-200, more expensive than the nearby Jin Mao Tower or Oriental Pearl Tower, reflecting its greater height and newer facilities." },
          { q: "What floor is the Shanghai Tower observation deck on?", a: "Around the 118th floor — among the highest publicly accessible observation decks anywhere in the world." },
          { q: "Should I visit Shanghai Tower or the Oriental Pearl Tower?", a: "Shanghai Tower for the best pure height and view; the Oriental Pearl Tower for a cheaper, more iconic-shaped landmark with a retro character, since it's the oldest of Pudong's three towers." },
        ],
      };

    case "yu-garden-shanghai":
      return {
        title: "Yu Garden, Shanghai: Complete Visitor Guide",
        description: "What to see in Yu Garden, how it differs from the surrounding bazaar, ticket prices and the best time to go before the crowds peak.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-yu-garden",
        fastFacts: [
          { icon: "Ticket", label: "Entry", value: "Around ¥40" },
          { icon: "Clock", label: "Time needed", value: "1-1.5 hours for the garden itself" },
          { icon: "Landmark", label: "Built", value: "1559, Ming Dynasty, private family garden" },
          { icon: "AlertTriangle", label: "Common mistake", value: "Confusing the free bazaar with the ticketed garden" },
        ],
        sections: [
          {
            title: "The Garden and the Bazaar Are Two Different Things",
            content: "This trips up a lot of first-time visitors: **Yu Garden** itself is a ticketed, enclosed classical Chinese garden built in 1559 as a private retreat for a Ming dynasty official's family, and it is distinct from the sprawling, free-to-enter **Yu Garden Bazaar** that surrounds it — a dense maze of traditional-style shopping streets, snack stalls and souvenir shops that most people photograph and assume is the garden, when it's actually a separate commercial district built around the real attraction.\n\nThe garden proper is a genuinely well-preserved example of classical Jiangnan-style landscaping: rockeries, ponds, pavilions and covered walkways designed to create the illusion of a much larger space than its actual footprint, using borrowed views and winding paths rather than straight sightlines.",
          },
          {
            title: "What to See Inside",
            content: "Highlights include the **Exquisite Jade Rock**, a famous limestone rock formation said to have been intended for the imperial palace before ending up here, the **Grand Rockery**, one of the oldest and largest rock formations of its kind south of the Yangtze, and several pavilions whose carved details reward slow walking rather than a quick pass-through.\n\nBudget around an hour to ninety minutes for the garden itself — it's not large, but the winding layout and crowds (especially midday) make it feel slower to move through than its actual size suggests.",
            tourCard: { slug: "shanghai-yu-garden-and-city-god-temple-culture", title: "Shanghai: Yu Garden and City God Temple Culture Tour", description: "A guided visit that separates the garden's real history from the surrounding bazaar's commercial noise.", price: "From $102", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-yu-garden" }
          },
          {
            title: "Tickets and Timing",
            content: "Entry runs roughly **¥40**, and unlike the Forbidden City there's generally no advance-booking requirement for most travelers — same-day tickets are typically available at the gate, though peak-season weekends can mean queuing.\n\n**Go early**, ideally at or shortly after opening — both to see the garden with fewer people and because the surrounding bazaar genuinely does get crowded by late morning, making the walk in and out slower. The adjoining **City God Temple**, a working Taoist temple, is worth the extra 20-30 minutes if you're already there.",
          }
        ],
        faqs: [
          { q: "Is Yu Garden the same as the bazaar around it?", a: "No — Yu Garden is a separate, ticketed classical Chinese garden, while the surrounding Yu Garden Bazaar is a free commercial district of shops and food stalls. Many visitors photograph the bazaar's architecture without realizing they haven't entered the actual garden." },
          { q: "How much does Yu Garden cost?", a: "Roughly ¥40 for garden entry, with no advance booking generally required for most travelers." },
          { q: "How long do you need at Yu Garden?", a: "About an hour to ninety minutes for the garden itself, plus extra time if you want to see the adjoining City God Temple or wander the bazaar." },
        ],
      };

    case "zhujiajiao-water-town":
      return {
        title: "Zhujiajiao Water Town: Complete Guide to Shanghai's Easiest Day Trip",
        description: "What Zhujiajiao is, how it compares to Suzhou, how to get there, and what's actually worth doing once you arrive.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/zhujiajiao-water-town",
        fastFacts: [
          { icon: "Clock", label: "Distance from Shanghai", value: "Around 1 hour" },
          { icon: "Ticket", label: "Old town entry", value: "Free to walk; individual sites and boat rides ticketed separately" },
          { icon: "Boat", label: "Signature activity", value: "Hand-poled gondola boat ride through the canals" },
          { icon: "Clock", label: "Time needed", value: "Half day (4-6 hours including travel)" },
        ],
        sections: [
          {
            title: "What Zhujiajiao Is and Why It's the Easy Option",
            content: "Zhujiajiao is a canal town roughly an hour from central Shanghai, one of several so-called 'water towns' in the Yangtze delta region built around a network of canals, stone bridges and Ming-and-Qing-era buildings that once formed the region's trading infrastructure before roads replaced waterways. It's the most practical day-trip option from Shanghai specifically because of the distance — close enough for a genuine half-day trip without eating your whole day in transit, unlike the more distant water towns favored by some tour itineraries.\n\nThe old town itself is free to walk — narrow lanes, stone bridges (the Fangsheng Bridge, a five-arch Ming-era bridge, is the town's most photographed structure), and canal-front teahouses and shops. Individual historic houses and the signature **gondola boat rides** are ticketed separately, generally inexpensive individually but worth budgeting for since the boat ride is the activity most visitors actually remember.",
          },
          {
            title: "Zhujiajiao vs Suzhou: Which One to Pick",
            content: "If you can only do one water-town-style day trip from Shanghai, the honest comparison is: **Zhujiajiao** is closer, simpler, and a good half-day taste of canal-town atmosphere, but it is smaller and, being so close to Shanghai, noticeably more touristy and commercialized than it might appear in photos. **Suzhou** is further (a 25-40 minute bullet train versus an hour-plus drive or bus to Zhujiajiao) but delivers genuinely more — UNESCO-listed classical gardens, a larger historic old town, and a city that functions as a real destination rather than a single afternoon stop.\n\nOur honest take: if you have a full day to spare, go to Suzhou. If you only have a half day, or you're combining the water town with the French Concession and the Bund in the same day, Zhujiajiao's shorter travel time makes more sense.",
            tourCard: { slug: "from-shanghai-zhujiajiao-water-town-day-trip-with", title: "From Shanghai: Zhujiajiao Water Town Day Trip with Boat Ride", description: "A standard half-day version including the canal boat ride, built for exactly the shorter-trip case.", price: "From $676", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/zhujiajiao-boat" }
          },
          {
            title: "Getting There and Practical Tips",
            content: "Independent travel is possible by metro plus bus or a direct tourist bus from central Shanghai, but a tour or private transfer removes the transfer complexity and typically includes the boat ride as part of the package rather than a separate on-the-spot ticket purchase, which can involve some queuing at the dock on busy weekends.\n\nGo on a weekday if your schedule allows — Zhujiajiao's proximity to Shanghai makes weekend crowds, both domestic tourists and other visitors on the same day-trip circuit, noticeably heavier than a Tuesday or Wednesday visit.",
          }
        ],
        faqs: [
          { q: "How far is Zhujiajiao from Shanghai?", a: "Around an hour by car, bus or combined metro-and-bus route — the closest and easiest water-town day trip from the city center." },
          { q: "Is Zhujiajiao or Suzhou better?", a: "Suzhou if you have a full day and want UNESCO-listed classical gardens and a real destination city. Zhujiajiao if you only have a half day or are combining it with other Shanghai sightseeing on the same day." },
          { q: "What is there to do in Zhujiajiao?", a: "Walking the free canal-front old town, crossing the Ming-era Fangsheng Bridge, and taking a hand-poled gondola boat ride through the canals, which is the activity most visitors remember best." },
        ],
      };

    case "shanghai-french-concession-guide":
      return {
        title: "Shanghai French Concession Guide: History, Streets & What to See",
        description: "What the French Concession actually was, why it looks different from the rest of Shanghai, and the specific streets worth walking.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-french-concession",
        sections: [
          {
            title: "What the French Concession Was",
            content: "Between 1849 and 1943, a large section of central Shanghai operated as an autonomous French-administered concession, one of several foreign-controlled zones carved out of the city during the treaty-port era — a history, like the Bund's, that is genuinely uncomfortable in its origins but left a distinct physical legacy that didn't get erased in the decades since.\n\nUnlike the dense commercial Bund area, the French Concession was built as a residential and institutional district — tree-lined streets (plane trees specifically, a deliberate colonial-era planting choice that still defines the area's look today), low-rise villas, churches and schools, giving it a noticeably European, almost Parisian feel that persists despite the surrounding modern city having grown up around it.",
          },
          {
            title: "The Streets and Corners Worth Seeking Out",
            content: "**Wukang Road** is the single most photographed street, anchored by the distinctive curved Normandie Apartments building at its southern end — genuinely worth the walk even though it's become a popular photo spot and can get crowded.\n\n**Xintiandi** is a redeveloped, more polished and commercialized stretch of restored shikumen (traditional Shanghai row-house) architecture, now packed with restaurants and bars — more a nightlife and dining district than a historic walk, but worth knowing as distinct from the quieter residential streets nearby.\n\n**Tianzifang** is a warren of narrow alleys converted into boutique shops, galleries and cafes within original shikumen housing, with a scrappier, less polished feel than Xintiandi.",
            tourCard: { slug: "shanghai-former-french-concession-bike-tour-with", title: "Shanghai: Former French Concession Bike Tour with Brunch", description: "Covers more ground than walking alone, with a brunch stop built into the route.", price: "From $323", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/french-concession-bike" }
          },
          {
            title: "How to Spend Time There",
            content: "Unlike Yu Garden or the Bund, the French Concession doesn't have a single must-see ticketed site — the point is slower, undirected wandering, ideally with a coffee or food stop built in rather than a checklist of landmarks. A guided walking or bike tour is worth it mainly for the history and context (why a particular building survived, what the shikumen housing style actually represents) rather than for access to anything otherwise closed.\n\nEvening works as well as daytime here, arguably better for the restaurant and bar side of Xintiandi, while daytime suits the quieter residential streets like Wukang Road for photography.",
          }
        ],
        faqs: [
          { q: "What is the French Concession in Shanghai?", a: "A former autonomous French-administered district (1849-1943), now a residential and dining neighborhood known for tree-lined streets, European-style villas and the shikumen row-house architecture style." },
          { q: "What is the most famous street in the French Concession?", a: "Wukang Road, anchored by the curved Normandie Apartments building, is the most photographed street in the area." },
          { q: "Is the French Concession worth visiting?", a: "Yes, as an unhurried walking neighborhood rather than a single ticketed attraction — it's the best part of Shanghai for slower wandering, cafes and architecture rather than a specific must-see site." },
        ],
      };

    case "shanghai-food-guide":
      return {
        title: "Shanghai Food Guide 2026: What to Eat and Where",
        description: "From xiaolongbao to a proper hairy crab dinner — a practical guide to Shanghai's food culture and the dishes worth seeking out.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-xiaolongbao",
        sections: [
          {
            title: "Xiaolongbao: Shanghai's Essential Dish",
            content: "**Xiaolongbao** (soup dumplings) are Shanghai's most famous food export, and the city takes its version seriously enough that there's genuine local debate about the best spot — the trick with eating them properly is to bite a small hole first and sip the broth before eating the rest, rather than popping the whole dumpling in and burning yourself on the hot soup inside, which is the classic tourist mistake.\n\nA hands-on **xiaolongbao or dumpling-making class** is a popular way to get both the dish and the technique explained properly rather than guessing at a restaurant table, and pairs well with a Suzhou day trip for travelers who want to combine a cooking lesson with the canal-town sightseeing.",
          },
          {
            title: "Beyond Dumplings: Local Shanghai Cuisine",
            content: "Shanghainese cuisine proper (benbangcai) leans sweeter and richer than much of Chinese cooking, built around soy and sugar-based braising — **hongshao rou** (red-braised pork belly) is the signature dish, along with **drunken chicken**, chilled and steeped in Shaoxing wine, and **hairy crab**, a genuinely seasonal autumn delicacy (roughly October-November) worth timing a trip around if you're a serious food traveler, since it's a completely different experience outside that window.\n\nStreet food and snack culture is strongest in the old-town lanes near Yu Garden and in the French Concession's smaller side streets, away from the more tourist-facing main bazaar stalls.",
            tourCard: { slug: "shanghai-suzhou-day-trip-with-dumpling-making", title: "Shanghai: Suzhou Day Trip with Dumpling-Making Class", description: "Combines a proper hands-on dumpling lesson with the Suzhou day trip, rather than treating food as an afterthought.", price: "From $494", duration: "Full day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dumpling-class" }
          },
          {
            title: "Practical Food Tips",
            content: "Tap water is not drinkable without boiling or filtering, as throughout mainland China — bottled water is cheap and available everywhere, and hotel rooms generally include an electric kettle.\n\nFor a sit-down meal that showcases Shanghainese cuisine beyond dumplings, look specifically for restaurants branded around benbangcai rather than a generic 'Chinese restaurant' menu, which tends toward a flattened, less regionally specific version. The old French Concession's smaller streets are a better hunting ground for this than the main tourist strips around the Bund or Yu Garden.",
          }
        ],
        faqs: [
          { q: "What is the best food to try in Shanghai?", a: "Xiaolongbao (soup dumplings) is the essential dish, along with Shanghainese specialties like red-braised pork belly and drunken chicken. Hairy crab, in season roughly October-November, is a prized seasonal delicacy." },
          { q: "How do you eat xiaolongbao properly?", a: "Bite a small hole in the top first and sip the hot broth inside before eating the rest — eating the whole dumpling in one bite is the classic way to burn yourself on the soup." },
          { q: "Can you drink tap water in Shanghai?", a: "No, not without boiling or filtering, as in the rest of mainland China. Bottled water is inexpensive and widely available." },
        ],
      };

    case "shanghai-disneyland-guide":
      return {
        title: "Shanghai Disneyland Guide 2026: Tickets, Tips and What to Prioritize",
        description: "Everything to know before visiting Shanghai Disneyland — the first Disney park on mainland China, including its signature ride not found anywhere else.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-disneyland",
        fastFacts: [
          { icon: "Calendar", label: "Opened", value: "2016" },
          { icon: "MapPin", label: "Location", value: "Pudong, roughly 40-60 min from central Shanghai" },
          { icon: "Star", label: "Signature attraction", value: "Tron Lightcycle Power Run" },
          { icon: "Clock", label: "Recommended time", value: "A full day, or two for a relaxed visit" },
        ],
        sections: [
          {
            title: "What Makes Shanghai Disneyland Different",
            content: "Shanghai Disneyland, which opened in 2016, was the first Disney park built on the Chinese mainland, and it was designed with several attractions unique to this park rather than simply replicating Disneyland California or Tokyo Disneyland. Its most famous original attraction, the **Tron Lightcycle Power Run** roller coaster, debuted here years before an adapted version eventually opened at Walt Disney World in Florida — for a period it was the only place in the world to ride it, and it remains one of the park's biggest draws and longest queues.\n\nThe park's layout and theming also draw more directly on Chinese cultural elements in places than other Disney parks, blended with the standard Disney IP lineup across its themed lands.",
          },
          {
            title: "Tickets and When to Go",
            content: "Tickets are tiered by date (standard vs peak pricing on weekends, holidays and Chinese school breaks), and advance online booking is standard practice — this is a park, not an open-access attraction, and showing up without a pre-purchased ticket on a busy day risks a sold-out gate.\n\n**Weekdays outside Chinese school holidays** are the best time to minimize queues; Chinese public holidays and summer weekends can mean waits well over an hour for the most popular rides, including Tron. Shanghai's queue-jump system (Disney Premier Access, a paid line-skip option) is worth strongly considering for Tron specifically if your visit falls on a busier day.",
            tourCard: { slug: "shanghai-disneyland-guided-tour-6-hour", title: "Shanghai Disneyland Guided Tour: 6-Hour Group/Private", description: "A guided option for travelers who want ticketing and logistics handled rather than navigating the park's queue systems solo.", price: "From $40", duration: "6 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-disneyland-tour" }
          },
          {
            title: "Practical Tips",
            content: "The park is in Pudong, roughly 40-60 minutes from central Shanghai depending on traffic and starting point, and is reachable directly by metro (Line 11 has a dedicated Disney Resort station), which makes an independent visit genuinely straightforward without a private transfer.\n\nGive it a full day at minimum — this is a complete theme park, not a half-day attraction, and visitors consistently report that trying to combine it with other Shanghai sightseeing on the same day leaves both halves of the day feeling rushed. If budget allows, a second day lets you revisit the park's headline rides without the first day's inevitable orientation time.",
          }
        ],
        faqs: [
          { q: "Is Shanghai Disneyland worth visiting?", a: "Yes, especially for the Tron Lightcycle Power Run coaster, a signature attraction that debuted here before any other Disney park worldwide. It's a full-scale park worth a dedicated day." },
          { q: "How do I get to Shanghai Disneyland?", a: "Metro Line 11 has a dedicated Disney Resort station, making it reachable independently without a private transfer; the journey from central Shanghai takes roughly 40-60 minutes." },
          { q: "Do I need to book Shanghai Disneyland tickets in advance?", a: "Yes, advance online booking is standard, with tiered pricing by date. Busy days can sell out, so don't plan to buy at the gate." },
        ],
      };

    case "suzhou-day-trip-from-shanghai":
      return {
        title: "Suzhou Day Trip from Shanghai: Complete Planning Guide",
        description: "How to plan a day trip to Suzhou's classical gardens from Shanghai — train times, which gardens to prioritize, and whether to go independently or with a guide.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/suzhou-garden",
        fastFacts: [
          { icon: "Train", label: "Travel time", value: "Roughly 25-40 minutes by bullet train from Shanghai" },
          { icon: "Landmark", label: "Highlight", value: "UNESCO-listed classical gardens" },
          { icon: "Clock", label: "Recommended time", value: "Full day" },
          { icon: "Star", label: "Known for", value: "Classical Chinese gardens and canal old town" },
        ],
        sections: [
          {
            title: "Why Suzhou Is the Stronger Day-Trip Option",
            content: "If you're choosing between Suzhou and Zhujiajiao for a single Shanghai day trip, Suzhou is generally the better pick when you have a full day to spend — it's home to several UNESCO World Heritage-listed classical gardens, a genuine historic old town with its own canal network (Suzhou has long been nicknamed the 'Venice of the East'), and enough depth that you're visiting a real city rather than a single afternoon attraction.\n\nThe trade-off is time: Zhujiajiao is about an hour from Shanghai by car; Suzhou requires the roughly 25-40 minute bullet train from Shanghai (typically from Shanghai Hongqiao station) each way, plus getting to and from stations on both ends — budget closer to 1.5-2 hours door-to-door each direction once transfers are factored in.",
          },
          {
            title: "Which Gardens to Prioritize",
            content: "Suzhou has multiple classical gardens and you will not see them all in a day — the two most commonly recommended for a first visit are the **Humble Administrator's Garden** (Zhuozheng Yuan), the largest and most celebrated of Suzhou's gardens, and the **Lingering Garden** (Liu Yuan), known for its architectural variety and considered by many garden scholars among the finest examples of the style.\n\nEach garden rewards 1-1.5 hours of unhurried walking; trying to fit three or more into a single day tends to produce a blur of similar-looking rockeries and ponds rather than genuine appreciation of what makes each one distinct. Pick two gardens plus a walk through the old town's canal streets as a realistic full day.",
            tourCard: { slug: "private-suzhou-highlights-day-tour-from-shanghai", title: "Private Suzhou Highlights Day Tour From Shanghai", description: "A paced day covering the garden highlights without the rush of trying to see everything.", price: "From $572", duration: "Full day", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/suzhou-highlights" }
          },
          {
            title: "Independent vs Guided",
            content: "Suzhou is doable independently — the bullet train system is straightforward, station signage is bilingual, and the gardens all sell same-day tickets at the gate without the advance-booking pressure of somewhere like the Forbidden City. The case for a guided day trip is less about access and more about logistics and context: a guide handles train tickets and timing, explains the symbolism behind each garden's layout (which is genuinely dense with meaning that's invisible without explanation), and in many cases builds in a canal boat ride or a specific neighborhood like Pingjiang Road that independent visitors often miss.\n\nFor a first visit with limited time, a guided day trip generally gets you more content per hour; for a slower, more independent-minded trip, DIY with the bullet train works fine.",
          }
        ],
        faqs: [
          { q: "How do you get from Shanghai to Suzhou?", a: "By bullet train, typically from Shanghai Hongqiao station, taking roughly 25-40 minutes depending on the service. It's the fastest and most comfortable option for a day trip." },
          { q: "Which Suzhou gardens should I visit?", a: "The Humble Administrator's Garden and the Lingering Garden are the two most commonly recommended for a first visit — both UNESCO-listed and considered among the finest examples of Chinese classical garden design." },
          { q: "Is Suzhou or Zhujiajiao better for a day trip from Shanghai?", a: "Suzhou if you have a full day and want UNESCO-listed gardens and a genuine historic city. Zhujiajiao is closer and better if you only have a half day." },
        ],
      };

    case "shanghai-metro-guide":
      return {
        title: "Shanghai Metro Guide 2026: How to Use the Subway as a Tourist",
        description: "How ticketing and navigation work on Shanghai's metro — one of the largest systems in the world by route length — for foreign visitors.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-metro",
        fastFacts: [
          { icon: "Train", label: "Network size", value: "One of the largest metro systems in the world by route length" },
          { icon: "CreditCard", label: "Payment", value: "Alipay/WeChat QR code, Shanghai Public Transportation Card, or contactless bank card on some lines" },
          { icon: "Coins", label: "Fare", value: "Distance-based, typically ¥3-10 for most tourist trips" },
          { icon: "MapPin", label: "Key line", value: "Line 2 connects Pudong Airport through the Bund area toward Hongqiao" },
        ],
        sections: [
          {
            title: "Payment Options for Tourists",
            content: "Shanghai's metro is, in practice, the easiest major Chinese transit system for a foreign tourist to use cashlessly: QR code payment through **Alipay** or **WeChat Pay** works at every station, and Alipay's 'Tour Pass' feature lets you load a foreign credit card into a usable in-app wallet without needing a Chinese bank account — set this up before you land if possible, since it removes the biggest friction point in getting around the whole city, not just the metro.\n\nShanghai has also rolled out **contactless bank card payment** on parts of the network, similar to London or Hong Kong's systems, letting some foreign-issued contactless cards tap directly at the turnstile without any app setup at all — availability varies by line and station, so don't rely on it exclusively, but it's worth trying if your card supports it. The physical alternative is a **Shanghai Public Transportation Card**, sold at station counters, which also works on buses and some taxis.",
          },
          {
            title: "Navigating the Network",
            content: "All signage and in-train announcements are bilingual in Chinese and English, and station entrances have the same airport-style security bag-scanning common across Chinese metro systems — budget a few extra minutes per trip for this.\n\n**Line 2** is the backbone most tourists end up using most: it runs from **Pudong Airport** through the Lujiazui/Bund financial district area and continues toward **Hongqiao** (the domestic airport and high-speed rail hub for Suzhou day trips), making it genuinely possible to handle most of a Shanghai trip's major transit needs — airport arrival, Bund-area sightseeing, and departure toward Suzhou — on a single line.",
            tourCard: { slug: "shanghai-former-french-concession-bike-tour-with", title: "Shanghai: Former French Concession Bike Tour with Brunch", description: "A good complement to metro-based sightseeing for the French Concession's smaller streets, which the metro doesn't reach as directly.", price: "From $323", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/french-concession-bike" }
          },
          {
            title: "Practical Tips",
            content: "Rush hour (roughly 7:30-9am and 5:30-7pm weekdays) on central interchange stations is genuinely busy, given the overall size and ridership of the network — shift sightseeing trips outside these windows where your schedule allows.\n\nThe network generally runs from around 5-6am to 10:30-11:30pm depending on the line, with Didi or taxis covering anything later. Keep a charged phone or your transit card as backup — a dead phone with no loaded QR code is the one situation that genuinely strands you at a turnstile.",
          }
        ],
        faqs: [
          { q: "Can I use a contactless bank card on the Shanghai metro?", a: "On parts of the network, yes — Shanghai has rolled out contactless card payment on some lines and stations, similar to London or Hong Kong, though availability varies, so don't rely on it exclusively." },
          { q: "How do tourists pay for the Shanghai metro?", a: "Most commonly via QR code through Alipay or WeChat Pay, set up in advance with a foreign credit card through Alipay's Tour Pass feature, or with a physical Shanghai Public Transportation Card." },
          { q: "Which metro line is most useful for tourists?", a: "Line 2 — it runs from Pudong Airport through the central Bund/Lujiazui area to Hongqiao, covering airport arrival, central sightseeing, and departure toward Suzhou on a single line." },
        ],
      };

    case "shanghai-vs-beijing-which-to-visit":
      return {
        title: "Shanghai vs Beijing: Which Should You Visit First?",
        description: "An honest comparison of China's two biggest tourist cities — history, pace, food, logistics — to help decide which to prioritize if you can't do both.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/shanghai-vs-beijing",
        sections: [
          {
            title: "The Short Answer",
            content: "If you can only pick one and this is your first trip to China, the honest answer depends on what you actually want. **Beijing** has the heavier historic weight — the Great Wall, the Forbidden City, the Temple of Heaven, the Summer Palace — sites that define most people's mental image of China and that you genuinely cannot see anywhere else. **Shanghai** is the more modern, walkable, visually striking city day-to-day, with a skyline, a colonial-era riverfront, and a food and nightlife scene that feels more immediately accessible to a first-time visitor, but without the same density of must-see historic monuments.\n\nIf you have 7-10 days or more, do both — they're genuinely different experiences of China and most travelers who do both come away saying each city surprised them in a different way. If you only have 4-5 days total, pick based on the trade-off below rather than trying to split limited time between both and seeing neither properly.",
          },
          {
            title: "History and Sightseeing",
            content: "**Beijing wins decisively here.** The Great Wall alone is worth the trip for most first-time visitors, and the Forbidden City is the largest and most significant surviving imperial palace complex in the world. Shanghai's historic sites — Yu Garden, the Bund's colonial architecture — are genuinely interesting but operate on a smaller scale and a shorter historic timeline (19th-20th century treaty-port era, versus Beijing's centuries of imperial dynasties).\n\nIf seeing 'the' sites that define historic China matters most to you, Beijing is the clear choice.",
            tourCard: { slug: "bj-in-a-day-great-wall-forbidden-city-hutong", title: "BJ in a Day: Great Wall, Forbidden City, Hutong & Acrobatics", description: "The case for Beijing in one day — the sites a first-time China visitor is least likely to forgive themselves for skipping.", price: "From $246", duration: "8 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/beijing-bj-in-a-day" }
          },
          {
            title: "Pace, Logistics and Food",
            content: "**Shanghai wins on ease of daily life.** It's more walkable in the central districts, has a more Western-visitor-friendly English signage density, and its metro and cashless payment infrastructure are, in our experience, slightly smoother for a first-time tourist to figure out quickly. Shanghai's air quality is also generally more consistent and less prone to the severe winter smog spikes Beijing can see — see our [Beijing air quality guide](/china/beijing/beijing-air-quality-when-to-visit) for the detail.\n\nOn food: both cities are excellent, but differently — Beijing for Peking duck and northern Chinese cooking, Shanghai for xiaolongbao and the sweeter, soy-and-sugar-based Shanghainese style. Neither city is a letdown on food; this one comes down to personal taste rather than a clear winner.\n\n**Our recommendation**: if this is a once-in-a-lifetime China trip and you can only pick one, go to Beijing for the historic weight. If you want an easier, more immediately comfortable introduction to modern China with strong but lighter sightseeing, go to Shanghai.",
          }
        ],
        faqs: [
          { q: "Should a first-time visitor go to Beijing or Shanghai?", a: "Beijing, if seeing the Great Wall and Forbidden City matters most. Shanghai, if an easier, more modern, more walkable introduction to China matters more than historic monument density." },
          { q: "Can you visit both Beijing and Shanghai in one trip?", a: "Yes — they're connected by frequent flights and a high-speed rail link, and most travelers with 7-10 days or more do both. With only 4-5 days total, splitting time between both tends to shortchange each city." },
          { q: "Which city has better food, Beijing or Shanghai?", a: "Both are excellent but different — Beijing for Peking duck and northern cooking, Shanghai for xiaolongbao and sweeter Shanghainese cuisine. It comes down to personal taste rather than a clear winner." },
        ],
      };

    default:
      return null;
  }
}
