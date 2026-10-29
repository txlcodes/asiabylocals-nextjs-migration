// Qatar (Doha) authority pages (2026-10). Same CityInfoData shape as
// turkeyInfoContent.ts / southKoreaInfoContent.ts. Qatar launched with 850
// live tours (single city: Doha) and zero authority pages — this is the
// first batch, 30 pages. Reached via getQatarInfoContent() -> getCityInfoContent().
// Every tourCard slug is taken from the live tour list:
// GET /api/public/tours?country=Qatar&city=Doha&status=approved
import type { CityInfoData } from './cityInfoContent';

export function getQatarInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-doha":
      return {
        title: "Best Time to Visit Doha (2026): Weather, Heat and When to Go",
        description: "Doha's weather swings from genuinely pleasant to genuinely dangerous across the year — here's exactly which months work for outdoor plans and which ones don't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd7ec2066806fb87bcfd64c29fc5d4ec37741c1703de2b6e2b3846f9af565cf0.jpeg",
        fastFacts: [
          { icon: "Sun", label: "Best overall window", value: "November through March — mild, dry, and comfortable for a full day outdoors" },
          { icon: "Thermometer", label: "Summer (June-September)", value: "Daytime highs routinely pass 40-45°C, with humidity pushing the 'feels like' figure into the 50s" },
          { icon: "AlertTriangle", label: "Heat risk", value: "Outdoor activity in peak summer carries a genuine risk of heat exhaustion, not just discomfort" },
          { icon: "CloudRain", label: "Rain", value: "Minimal year-round; Doha is a desert city with almost no rainy season to plan around" },
        ],
        sections: [
          {
            title: "Winter Is Doha's Real Travel Season",
            content: "From November through March, Doha settles into daytime highs typically in the low-to-mid 20s°C, dropping to comfortable, often genuinely cool evenings — the only stretch of the year where walking Souq Waqif at midday, spending hours at the Museum of Islamic Art's waterfront park, or doing a full-day desert safari all feel pleasant rather than something to be endured. This is also peak season for exactly that reason: hotel rates climb, and the city's packed winter calendar of sporting and cultural events draws larger crowds to the Corniche and The Pearl than you'll see in summer.\n\nDecember through February specifically is the sweet spot if you want outdoor time without compromise — desert safaris, dhow cruises and Corniche walks all work at any hour of the day, not just early morning or after sunset.",
          },
          {
            title: "Summer (June-September) Is Genuinely Dangerous for Outdoor Plans, Not Just Hot",
            content: "This matters more than most travel guides let on: June through September in Doha isn't simply uncomfortable, it's a stretch where daytime highs routinely exceed 40-45°C and coastal humidity near West Bay and The Pearl pushes the heat index well past 50°C. Qatar's own labour law bans outdoor work between 10:00 and 15:30 during this exact window, which is a useful proxy for how visitors should treat the same hours — a desert safari or Corniche walk scheduled for 1pm in August isn't an inconvenience, it's a real heat-exhaustion risk.\n\nIf summer travel is your only option — layover timing, work trips, school-holiday constraints — shift everything outdoor to early morning or after sunset, lean on Doha's air-conditioned malls, museums and souks for midday hours, and treat a night desert safari rather than a midday one as the default choice.",
            tourCard: { slug: "doha-night-safari-with-dune-bashing-clear-sky", title: "Doha: Night Safari with Dune Bashing & Clear-Sky Stargazing", description: "A desert safari scheduled entirely after sunset, sidestepping summer's dangerous midday heat.", price: "From $26", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9eb1727443af0361ec8886f3feb625d8a63aaad8e2f142e90251760e7d462d0e.jpeg" },
          },
          {
            title: "Spring and Autumn Shoulder Seasons",
            content: "April-May and October both run warm but not extreme, with daytime highs in the low-to-mid 30s°C — hot enough that midday outdoor stretches should still be kept short, but workable with the same early-morning-or-evening approach that peak summer requires more strictly. These shoulder months also carry noticeably lower hotel rates than winter's peak season, which makes them a reasonable compromise for visitors prioritizing value over guaranteed comfort.\n\nIf your trip falls in Ramadan (its dates shift each year on the Islamic lunar calendar), check our Ramadan travel guide separately — it changes restaurant and business hours regardless of season.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Doha?", a: "December through February is the strongest window — mild temperatures in the low-to-mid 20s°C that make every outdoor activity, from Souq Waqif to a desert safari, comfortable at any hour." },
          { q: "Is it too hot to visit Doha in summer?", a: "Summer (June-September) carries real heat risk, with daytime highs often 40-45°C and a heat index pushing past 50°C with humidity. It's not just uncomfortable — Qatar's own labour law bans outdoor work during the hottest midday hours in this exact window." },
          { q: "Does it rain much in Doha?", a: "Very little year-round — Doha is a desert city with no meaningful rainy season to plan a trip around." },
          { q: "Is a desert safari safe in the Qatari summer?", a: "A night safari, scheduled after sunset, is the safer summer choice. A midday desert safari in July or August carries genuine heat-exhaustion risk and isn't recommended." },
        ],
      };

    case "things-to-do-in-doha":
      return {
        title: "30+ Best Things to Do in Doha (2026): The Complete List",
        description: "From I.M. Pei's Museum of Islamic Art to dune bashing at the Inland Sea and a dhow cruise past the West Bay skyline — the real list of what's worth your time in Doha.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Top landmark", value: "The Museum of Islamic Art, designed by architect I.M. Pei, sitting on its own waterfront peninsula" },
          { icon: "MapPin", label: "Best half-day", value: "Souq Waqif's covered lanes, followed by a Corniche walk at sunset" },
          { icon: "Compass", label: "Best day trip", value: "A desert safari with dune bashing at the Inland Sea (Khor Al Adaid)" },
          { icon: "Building2", label: "Don't skip", value: "The Pearl-Qatar's artificial island marina and the West Bay skyline from the water" },
        ],
        sections: [
          {
            title: "The Museum of Islamic Art and Doha's Cultural Core",
            content: "The **Museum of Islamic Art (MIA)**, designed by the Pritzker Prize-winning architect **I.M. Pei** (also responsible for the Louvre's glass pyramid), sits on its own purpose-built island at the southern end of the Corniche, and the building itself — a geometric, fortress-like limestone form drawing on centuries of Islamic architectural motifs — is as much the attraction as the collection inside, which spans more than a millennium of Islamic art from Spain to China. The surrounding MIA Park, a wide waterfront green space, is one of the best free spots in the city for an evening walk with the West Bay skyline as a backdrop.\n\nA short drive or taxi away, **Katara Cultural Village** adds an amphitheater, galleries, and a public beach, while the Msheireb Downtown Doha redevelopment and the Fire Station arts center round out the city's cultural core for anyone wanting more than a single museum stop.",
            tourCard: { slug: "doha-guided-city-tour-with-museum-of-islamic-art", title: "Doha: Guided City Tour with Museum of Islamic Art Visit", description: "A guided city loop built around MIA, with the Corniche and skyline views folded in.", price: "From $46", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg" },
          },
          {
            title: "Souq Waqif, the Corniche and the West Bay Skyline",
            content: "**Souq Waqif**, a restored traditional market of narrow covered lanes near the Corniche, is Doha's most atmospheric place to shop and eat — spice stalls, textiles, falconry shops and a dense cluster of restaurants spilling onto outdoor terraces in the evening once the heat breaks. It sits a short walk from the **Doha Corniche**, a roughly 7-kilometer waterfront promenade curving around the bay, with the glass towers of **West Bay** rising directly across the water — the single best, free view of Doha's skyline, especially at sunset or once the towers light up after dark.\n\nFor the skyline from the water rather than the shore, a short dhow cruise or jet ski tour along the bay gets you the same West Bay backdrop from a completely different angle.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "A guided food walk through Souq Waqif's lanes, timed for the Corniche skyline at its best.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
          {
            title: "The Desert, The Pearl-Qatar, and What a World Cup Legacy Looks Like",
            content: "A **desert safari** out to the **Inland Sea (Khor Al Adaid)**, a UNESCO-recognized natural reserve where the desert meets the sea with no barrier between them, is the one Doha experience that genuinely requires leaving the city — dune bashing in a 4x4 across the Qatari dunes en route, often paired with camel rides, sandboarding or an overnight desert camp. Back in the city, **The Pearl-Qatar**, an entirely artificial island built in the shape of a string of pearls, has become Doha's upscale marina district, with Mediterranean-style promenades, yacht-lined waterfronts and a noticeably different pace from the rest of the city.\n\nDoha's hosting of the **2022 FIFA World Cup** left behind a genuinely usable tourist infrastructure beyond the stadiums themselves — the Metro network, much of the West Bay hotel stock, and several of the stadium precincts (Lusail, Al Bayt) now double as sightseeing stops with guided tours covering the build and the legacy.",
            tourCard: { slug: "from-doha-khor-al-adaid-inland-sea-4x4-desert", title: "From Doha: Khor Al Adaid & Inland Sea 4x4 Desert Tour", description: "A full desert and Inland Sea run by 4x4, the single trip outside the city most visitors prioritize.", price: "From $78", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg" },
          },
        ],
        faqs: [
          { q: "What is Doha's number one attraction?", a: "The Museum of Islamic Art, designed by I.M. Pei, is the single most significant landmark for both its architecture and its collection. Souq Waqif and a desert safari to the Inland Sea are the two other most-booked experiences." },
          { q: "Is one day enough to see Doha?", a: "You can cover MIA, Souq Waqif and the Corniche in a focused single day, but a desert safari and The Pearl-Qatar genuinely need additional time — most visitors find 2-3 days gives a fuller picture." },
          { q: "What is the Inland Sea (Khor Al Adaid)?", a: "A UNESCO-recognized natural area south of Doha where the desert dunes meet the sea directly, with no coastline barrier. It's reached by a 4x4 desert safari, usually including dune bashing along the way." },
          { q: "Is The Pearl-Qatar worth visiting?", a: "Yes if you want to see a different side of Doha — it's an entirely artificial island with a Mediterranean-style marina, upscale shopping and a slower, more leisurely pace than the city center." },
        ],
      };

    case "doha-travel-guide-2026":
      return {
        title: "Doha Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Doha — visa rules, currency, the Metro system and the everyday habits that make this city genuinely different from the rest of the Gulf.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ae23113f8999cedfed3e9b535ecc017bb7491054129cd53ea2ee93a6f80964f.jpeg",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "Most nationalities get a free visa on arrival; a handful need to book through Discover Qatar in advance" },
          { icon: "DollarSign", label: "Currency", value: "Qatari Riyal (QAR), pegged to the US dollar — cards widely accepted everywhere, even in souks" },
          { icon: "Train", label: "Getting around", value: "The Doha Metro, built for the World Cup, covers most tourist areas cheaply and reliably" },
          { icon: "MessageCircle", label: "Languages", value: "Arabic is official; English is extremely widely spoken, including in taxis and souks" },
        ],
        sections: [
          {
            title: "Entry Rules: Mostly Visa-Free, With a Few Exceptions",
            content: "Qatar is genuinely easy to enter for most travelers: citizens of more than 100 countries qualify for a **free visa on arrival**, issued at the airport with no advance application needed, while GCC nationals (Bahrain, Kuwait, Oman, Saudi Arabia, UAE) need no visa at all. A smaller set of nationalities — including India, Pakistan, Iran, Thailand and Ukraine — must book their entire stay through the official **Discover Qatar** platform in advance rather than arriving visa-free, and a stay beyond 30 days now requires health insurance regardless of nationality.\n\nCheck your specific passport's requirement on Qatar's official visa portal before booking flights — the rules vary meaningfully by nationality, and a few nationalities face a paid Hayya application fee rather than a free visa on arrival. See our full Qatar visa guide for the nationality-by-nationality breakdown.",
          },
          {
            title: "Money and Cards: Simpler Than Most Destinations",
            content: "The **Qatari Riyal (QAR)** is pegged to the US dollar at a fixed rate, which removes the currency-swing anxiety some destinations carry, and **cards are accepted virtually everywhere** — hotels, restaurants, malls, and even most Souq Waqif stalls take cards without hesitation, a contrast to bazaar cultures elsewhere in the region that still lean cash-heavy. Carrying some riyals is still useful for small vendors, tipping, and the odd taxi that prefers cash, but Doha is one of the easier Gulf cities to get by on cards alone.\n\nATMs are widespread and reliable, and tipping, while not mandatory, is appreciated at 10% or rounding up at restaurants.",
          },
          {
            title: "Getting Around and a Few Everyday Habits Worth Knowing",
            content: "The **Doha Metro**, built out rapidly ahead of the 2022 World Cup, is clean, modern and covers most areas visitors care about — the airport, West Bay, Souq Waqif's vicinity (via Souq Waqif station) and the Education City area — at a fraction of taxi cost. Taxis and ride-hailing apps fill the gaps the Metro doesn't reach, and traffic can be heavy around rush hour in West Bay and the Corniche corridor.\n\nA few habits worth knowing: Qatar is a conservative, alcohol-restricted country outside licensed hotel bars and restaurants, so public drinking and public displays of affection are best avoided; modest dress is appreciated in Souq Waqif and religious sites even though it's not strictly enforced for tourists; and Friday is the start of the weekend (Friday-Saturday), which shifts opening hours for government offices and some businesses compared to a Western Monday-Friday week.",
            tourCard: { slug: "doha-stopover-transit-tour-with-airport-pickup", title: "Doha: Stopover & Transit Tour with Airport Pickup & Drop-Off", description: "A guided first look at the city timed around a layover, airport pickup included.", price: "From $45", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/29076eaf0916d243832851ae706fa2fe41579dd676c7606fa1b6508cd156122a.jpg" },
          },
        ],
        faqs: [
          { q: "Do I need a visa for Qatar in 2026?", a: "Most nationalities get a free visa on arrival at the airport with no advance application. A smaller list, including India, Pakistan, Iran, Thailand and Ukraine, must book their stay through Discover Qatar in advance instead." },
          { q: "What currency does Doha use?", a: "The Qatari Riyal (QAR), pegged to the US dollar. Cards are accepted almost everywhere, including most Souq Waqif stalls, which is unusually card-friendly for a traditional market." },
          { q: "Is alcohol available in Doha?", a: "Only in licensed hotel bars, restaurants and a few specific venues — Qatar is a conservative country and public drinking outside those venues isn't permitted." },
          { q: "What is the Doha Metro like?", a: "Clean, modern and fast, built out rapidly for the 2022 World Cup. It covers the airport, West Bay and the areas near Souq Waqif, and costs far less than taxis for the same routes." },
        ],
      };

    case "doha-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Doha Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Doha itinerary built around the Museum of Islamic Art, Souq Waqif and a Corniche sunset — honest about what fits and what doesn't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg",
        sections: [
          {
            title: "Morning: The Museum of Islamic Art and MIA Park",
            content: "Start at the **Museum of Islamic Art**, ideally near opening when both the light on I.M. Pei's limestone exterior and the galleries themselves are at their quietest. Spend an hour or two inside, then walk the surrounding **MIA Park** waterfront for the first good look at the West Bay skyline across the bay — this works even in warmer months since the museum itself is fully air-conditioned, giving your morning a built-in heat break.",
            tourCard: { slug: "doha-guided-city-tour-with-museum-of-islamic-art", title: "Doha: Guided City Tour with Museum of Islamic Art Visit", description: "A guided morning combining MIA with a wider city loop, skipping the planning.", price: "From $46", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg" },
          },
          {
            title: "Midday: Souq Waqif for Lunch and Shopping",
            content: "Head to **Souq Waqif** for lunch in its covered lanes and shaded courtyards — the covered sections make midday there more bearable than most open-air Doha stops. Browse the spice stalls, textiles and the falcon souq section if falconry interests you, and treat the heat of the day as the natural time to be somewhere covered and air-conditioned rather than fighting it outdoors.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "A guided lunch-hour food walk through the souq's lanes.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
          {
            title: "Evening: The Corniche at Sunset and a Dhow Cruise",
            content: "Close the day on the **Doha Corniche** as the sun drops behind the West Bay towers, then board a **traditional dhow cruise** for the same skyline from the water, often the single most-photographed view in the city once the towers light up after dark.\n\n**The honest tradeoff of a one-day itinerary:** a desert safari to the Inland Sea and The Pearl-Qatar won't fit comfortably alongside MIA and the souq. If the desert matters more to you than an evening cruise, swap it in and plan the souq and Corniche for a second day — Doha genuinely rewards 3 days; see our 3-day itinerary for the fuller version.",
            tourCard: { slug: "doha-traditional-dhow-sunset-cruise-with-optional", title: "Doha: Traditional Dhow Sunset Cruise with Optional Dinner", description: "A sunset cruise past the West Bay skyline that closes a full day without extra planning.", price: "From $24", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg" },
          },
        ],
        faqs: [
          { q: "Can you see Doha in one day?", a: "You can realistically cover the Museum of Islamic Art, Souq Waqif, the Corniche and a sunset dhow cruise in one focused day. A desert safari and The Pearl-Qatar won't fit — those need additional time." },
          { q: "What's the best order for a Doha day trip?", a: "MIA in the morning while it's cool, Souq Waqif at midday for shaded, covered browsing and lunch, then the Corniche and a dhow cruise timed for sunset." },
          { q: "Is a single day in Doha worth it on a layover?", a: "Yes — a stopover tour built around MIA, the souq and the Corniche works well within a long layover window, especially with airport pickup and drop-off arranged." },
        ],
      };

    case "doha-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Doha Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Doha enough room for the city's cultural core, a full desert day, and The Pearl-Qatar's marina side — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg",
        sections: [
          {
            title: "Day 1: The Cultural Core and a Sunset Cruise",
            content: "Follow the one-day plan as your first day: the Museum of Islamic Art and MIA Park in the morning, Souq Waqif at midday, the Corniche and a dhow cruise at sunset. This front-loads the city's signature sights and leaves days two and three free to go further without rushing.",
          },
          {
            title: "Day 2: Desert Safari and the Inland Sea",
            content: "Dedicate day two to the desert — a **4x4 desert safari to Khor Al Adaid (the Inland Sea)**, with dune bashing en route and the UNESCO-recognized spot where the dunes meet the sea as the payoff. Most operators run this as a half or full day, often adding camel rides, sandboarding or an evening camp with dinner under the stars if you choose the later-starting option.",
            tourCard: { slug: "from-doha-singing-dunes-and-khor-al-adaid-desert", title: "From Doha: Singing Dunes and Khor Al Adaid Desert Tour", description: "A full desert day covering the singing dunes and the Inland Sea.", price: "From $52", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd7ec2066806fb87bcfd64c29fc5d4ec37741c1703de2b6e2b3846f9af565cf0.jpeg" },
          },
          {
            title: "Day 3: The Pearl-Qatar and Katara Cultural Village",
            content: "Spend your final day at **The Pearl-Qatar**, the artificial island marina district, walking its Mediterranean-style promenades or kayaking its calm waters, then cross to **Katara Cultural Village** nearby for its amphitheater, galleries and public beach. This day is noticeably more relaxed in pace than the first two, and works well as a wind-down before departure.",
            tourCard: { slug: "doha-guided-kayaking-experience-at-the-pearl", title: "Doha: Guided Kayaking Experience at The Pearl", description: "A guided paddle through The Pearl-Qatar's marina on your final, slower day.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dd224a9dcbc2ef5c6a8e8226de462ceca1b1b2de037bf15df5955eee7395cb6.jpg" },
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Doha?", a: "Yes, for a well-rounded first visit — the cultural core, a full desert day and a relaxed Pearl-Qatar/Katara day covers Doha's genuinely different sides without rushing." },
          { q: "Should I do the desert safari on day 1 or later?", a: "Later in the trip works better for most visitors — it's the most physically involved day (dune bashing, heat exposure even with AC vehicles), so doing it once you're settled in rather than straight off a flight is more comfortable." },
          { q: "Is The Pearl-Qatar worth a full day?", a: "Combined with Katara Cultural Village nearby, yes — it's a noticeably slower-paced day that works well as a third-day wind-down rather than a standalone highlight." },
        ],
      };

    case "qatar-visa-guide-for-tourists":
      return {
        title: "Qatar Visa Guide 2026: Who Gets Visa-Free Entry and Who Needs to Book Ahead",
        description: "Qatar is visa-free or visa-on-arrival for over 100 nationalities, but a specific list of countries must book their entire stay through Discover Qatar in advance — here's exactly who needs what.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ae23113f8999cedfed3e9b535ecc017bb7491054129cd53ea2ee93a6f80964f.jpeg",
        fastFacts: [
          { icon: "FileText", label: "Most nationalities", value: "Free visa on arrival at the airport, no advance application needed — covers 100+ countries" },
          { icon: "CheckCircle", label: "GCC citizens", value: "Bahrain, Kuwait, Oman, Saudi Arabia and UAE nationals need no visa at all" },
          { icon: "AlertTriangle", label: "Must book ahead", value: "India, Pakistan, Iran, Thailand and Ukraine must book their entire stay through Discover Qatar in advance" },
          { icon: "DollarSign", label: "Paid visa", value: "Select other nationalities pay a Hayya application fee rather than getting a free visa on arrival" },
        ],
        sections: [
          {
            title: "Free Visa on Arrival for Most Nationalities",
            content: "Qatar is genuinely one of the easier Gulf countries to enter: travelers from **more than 100 countries**, including most of North America, Europe, Australia and much of Asia, qualify for a **free visa on arrival**, issued directly at the airport with no advance paperwork required. GCC nationals — Bahrain, Kuwait, Oman, Saudi Arabia and the UAE — need no visa at all, reflecting the bloc's open-border arrangement.\n\nA free visa on arrival typically covers a tourist stay of several weeks; check the exact duration for your passport on Qatar's official visa portal before travel, since it can vary by nationality.",
          },
          {
            title: "The Exception: Nationalities That Must Book Through Discover Qatar",
            content: "A specific, smaller list of nationalities — **India, Pakistan, Iran, Thailand and Ukraine** among them — cannot simply arrive and get a visa on arrival the way most other travelers can. Instead, these travelers must book their **entire stay (flights and accommodation) through the official Discover Qatar platform** in advance, which then issues the visa as part of that booking process. This is a meaningfully different process from a standard visa-on-arrival country, so travelers from this list should plan well ahead of their trip rather than assuming the general rule applies to them.\n\nIf your nationality isn't on the free-visa-on-arrival list and isn't on this Discover Qatar list either, check Qatar's official visa portal directly — a smaller set of other nationalities pay a **Hayya application fee** (commonly cited around QAR 100) for a paid visa on arrival or advance application instead.",
          },
          {
            title: "Health Insurance and Practical Entry Notes",
            content: "Any visitor planning to stay beyond **30 days** now needs health insurance covering that stay, regardless of nationality or visa type — a relatively recent addition to Qatar's entry requirements worth checking if your trip runs long. Passports should be valid well beyond the planned stay, and immigration officers can ask for proof of onward travel or accommodation, so keep a return flight itinerary and hotel confirmation accessible on arrival.\n\nQatar's visa rules have shifted a few times in recent years as the country expanded visa-free access following the 2022 World Cup, so even frequent travelers to the region should re-check their specific nationality's current requirement rather than relying on an earlier trip's experience.",
          },
        ],
        faqs: [
          { q: "Is Qatar visa-free for most tourists?", a: "Effectively yes for over 100 nationalities, which get a free visa on arrival at the airport with no advance application. GCC nationals need no visa at all." },
          { q: "Do Indian tourists need to book Qatar travel in advance?", a: "Yes — Indian nationals, along with Pakistan, Iran, Thailand and Ukraine, must book their entire stay through the official Discover Qatar platform in advance rather than arriving visa-free or visa-on-arrival." },
          { q: "Is there a visa fee for Qatar?", a: "Most of the 100+ visa-on-arrival nationalities pay nothing. A smaller set of other nationalities pay a Hayya application fee, commonly cited around QAR 100, for a paid visa." },
          { q: "Do I need health insurance to visit Qatar?", a: "Only if your stay exceeds 30 days — health insurance covering that period is required in that case, regardless of nationality." },
        ],
      };

    case "museum-of-islamic-art-doha":
      return {
        title: "Museum of Islamic Art Doha Guide 2026: I.M. Pei's Masterpiece, Collection and Visiting",
        description: "I.M. Pei came out of retirement specifically to design MIA, and the building itself is as significant as the thousand years of Islamic art inside it — here's how to actually visit.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Architect", value: "I.M. Pei, who came out of retirement for the commission, also designed the Louvre's glass pyramid" },
          { icon: "MapPin", label: "Location", value: "A purpose-built island at the southern end of the Doha Corniche, surrounded by MIA Park" },
          { icon: "Clock", label: "Collection span", value: "Islamic art from Spain to China spanning more than 1,000 years" },
          { icon: "Compass", label: "Best for", value: "A couple of hours indoors, plus a waterfront walk through MIA Park afterward" },
        ],
        sections: [
          {
            title: "A Building Designed by One of the 20th Century's Most Significant Architects",
            content: "The **Museum of Islamic Art** was designed by **I.M. Pei**, the architect behind the Louvre's glass pyramid and the East Building of the National Gallery of Art in Washington, who came out of retirement specifically for this commission after studying Islamic architecture across the region, including the Ahmad ibn Tulun Mosque in Cairo, for inspiration. The result is a geometric, fortress-like limestone structure sitting entirely alone on its own artificial island, deliberately isolated from Doha's skyline to let the building's form read clearly against open water on nearly every side.\n\nPei's design draws on centuries of Islamic architectural motifs — domes, geometric patterning, deliberate plays of light through a central atrium — translated into a thoroughly modern structure rather than a literal pastiche, which is part of why the museum reads as a landmark in its own right rather than simply a container for its collection.",
          },
          {
            title: "What's Inside: A Thousand Years of Islamic Art",
            content: "The collection spans more than a millennium of Islamic art from across the historical Islamic world — Spain (Al-Andalus) and North Africa through the Middle East, Persia, Central Asia and as far as China — including ceramics, textiles, manuscripts, metalwork, glass and jewelry. The galleries are arranged thematically rather than strictly chronologically, so a single visit can move between a centuries-old illuminated Quran manuscript and intricately carved Mughal jade within the same hour, a deliberate curatorial choice that rewards an unhurried pace rather than a room-by-room checklist approach.\n\nTemporary exhibitions rotate through dedicated gallery space, so it's worth checking what's currently showing before your visit if a specific era or region interests you most.",
            tourCard: { slug: "doha-guided-city-tour-with-museum-of-islamic-art", title: "Doha: Guided City Tour with Museum of Islamic Art Visit", description: "A guided visit pairing MIA with the wider city, with context on both the building and the collection.", price: "From $46", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg" },
          },
          {
            title: "Visiting: Timing, MIA Park and What's Nearby",
            content: "Budget **a couple of hours** for the galleries themselves, plus extra time for **MIA Park**, the wide waterfront green space wrapping the island, which doubles as one of the best free spots in Doha for a sunset or evening walk with the West Bay skyline across the water as a backdrop. Mornings are quieter than afternoons, and the museum's full air conditioning makes it a genuinely useful midday stop during Doha's hotter months, when an outdoor itinerary needs a built-in break.\n\nThe museum sits at the southern end of the **Doha Corniche**, within walking distance of Souq Waqif, making it easy to combine both in a single morning-to-afternoon outing.",
          },
        ],
        faqs: [
          { q: "Who designed the Museum of Islamic Art in Doha?", a: "I.M. Pei, the architect behind the Louvre's glass pyramid, who came out of retirement specifically for this commission after studying Islamic architecture across the region for inspiration." },
          { q: "How much time do I need at the Museum of Islamic Art?", a: "A couple of hours for the galleries, plus extra time for a walk through the surrounding MIA Park waterfront, which has some of the best skyline views in the city." },
          { q: "What does the museum's collection cover?", a: "More than 1,000 years of Islamic art spanning Spain and North Africa through the Middle East, Persia, Central Asia and China, arranged thematically across ceramics, textiles, manuscripts, metalwork and more." },
          { q: "Is the Museum of Islamic Art within walking distance of Souq Waqif?", a: "Yes — it sits at the southern end of the Doha Corniche, an easy walk from Souq Waqif, making the two a natural single-outing pairing." },
        ],
      };

    case "souq-waqif-guide":
      return {
        title: "Souq Waqif Guide 2026: Doha's Traditional Market, What to Buy and When to Go",
        description: "Souq Waqif's covered lanes, spice stalls and falcon souq give Doha its most atmospheric market experience — here's how to actually navigate it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg",
        fastFacts: [
          { icon: "ShoppingBag", label: "What it is", value: "A restored traditional market of narrow covered lanes near the Doha Corniche" },
          { icon: "MapPin", label: "Best time", value: "Evening, once the heat breaks and restaurants spill onto outdoor terraces" },
          { icon: "Bird", label: "Don't miss", value: "The falcon souq section, where falconry gear and live falcons are traded" },
          { icon: "DollarSign", label: "Payment", value: "Cards widely accepted, unusual for a traditional souq in the region" },
        ],
        sections: [
          {
            title: "What Souq Waqif Actually Is and Why It Feels Different from Other Gulf Markets",
            content: "**Souq Waqif**, meaning 'standing market,' has operated on this spot for generations as a trading post for Bedouin and local merchants, and today's version is a carefully restored take on that history — narrow covered and semi-covered lanes built from mud-rendered walls and wooden beams, deliberately avoiding the glass-and-steel mall aesthetic found elsewhere in Doha. Stalls sell spices, textiles, traditional clothing, perfumes (attar) and souvenirs, and the density of restaurants lining its edges and courtyards makes it as much a dining destination as a shopping one.\n\nUnlike bazaars elsewhere in the region that lean cash-only, **most Souq Waqif stalls and restaurants accept cards**, which makes it an unusually easy traditional market to navigate for first-time Gulf visitors.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "A guided food walk through the souq's lanes and restaurants with a local explaining what's worth trying.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
          {
            title: "The Falcon Souq: A Genuinely Unusual Section",
            content: "A dedicated section of Souq Waqif, the **falcon souq**, trades in falconry equipment — hoods, gloves, perches, scales — and, in dedicated shops, live falcons themselves, reflecting falconry's deep cultural standing in Qatar and the wider Gulf as a traditional sport still actively practiced rather than a museum-piece tradition. Even for visitors with no interest in buying, walking through and seeing hooded falcons perched in the shop windows is one of the more distinctive things to see anywhere in Doha, and shop owners are generally happy to explain the sport's history and the care involved.\n\nSome shops offer a photo-with-a-falcon experience for a small fee, a popular stop even for visitors not otherwise drawn to the souq's shopping side.",
          },
          {
            title: "When to Go and How to Pair It with the Rest of the City",
            content: "**Evening is Souq Waqif's best hour** — daytime heat (especially outside the winter months) makes the open courtyards less comfortable, while a cooler evening brings the souq to life, with outdoor terraces filling up and the lanes lit warmly after dark. It sits within easy walking distance of the **Doha Corniche**, making a souq-then-Corniche-sunset-walk a natural single evening, and it's also close enough to the **Museum of Islamic Art** to combine both in one extended afternoon-to-evening outing.\n\nHaggling happens in Souq Waqif but less aggressively than at some other regional bazaars — a polite ask for a better price on textiles or souvenirs is normal, though food and card-priced goods are generally fixed.",
            tourCard: { slug: "doha-private-city-tour-with-corniche-and-souq", title: "Doha: Private City Tour with Corniche and Souq Waqif", description: "A guided loop pairing the souq with a Corniche walk in one outing.", price: "From $202", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ae23113f8999cedfed3e9b535ecc017bb7491054129cd53ea2ee93a6f80964f.jpeg" },
          },
        ],
        faqs: [
          { q: "What is Souq Waqif known for?", a: "Its restored traditional covered lanes, dense restaurant scene, and a distinctive falcon souq section trading falconry gear and live falcons, reflecting the sport's deep standing in Qatari culture." },
          { q: "Can I pay by card at Souq Waqif?", a: "Yes — most stalls and restaurants accept cards, which is unusually convenient for a traditional market and different from cash-heavy bazaars elsewhere in the region." },
          { q: "When is the best time to visit Souq Waqif?", a: "Evening, once the heat breaks — the courtyards and outdoor restaurant terraces come alive after dark, and it's noticeably more comfortable than a daytime visit outside winter months." },
          { q: "Is haggling expected at Souq Waqif?", a: "To a lesser degree than some other regional bazaars — a polite counter-offer on textiles or souvenirs is normal, but food and most card-priced goods are generally fixed price." },
        ],
      };

    case "doha-desert-safari-guide":
      return {
        title: "Doha Desert Safari Guide 2026: Dune Bashing, the Inland Sea and What to Expect",
        description: "A Doha desert safari can mean a budget half-day dune-bashing trip or a full overnight camp at the Inland Sea — here's what each actually involves and which one fits your trip.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd7ec2066806fb87bcfd64c29fc5d4ec37741c1703de2b6e2b3846f9af565cf0.jpeg",
        fastFacts: [
          { icon: "Compass", label: "Main destination", value: "Khor Al Adaid (the Inland Sea), a UNESCO-recognized spot where the desert meets the sea" },
          { icon: "Car", label: "Core activity", value: "Dune bashing — a 4x4 driven over steep dunes in a controlled, roller-coaster-like pattern" },
          { icon: "Clock", label: "Duration options", value: "From a budget half-day trip to a full-day or overnight camp experience" },
          { icon: "Sun", label: "Best timing", value: "Morning, late afternoon or night in summer; any time of day is fine in winter" },
        ],
        sections: [
          {
            title: "What a Desert Safari Actually Involves",
            content: "A standard Doha desert safari starts with a drive out of the city into the Qatari desert, usually 60-90 minutes south toward **Khor Al Adaid**, followed by **dune bashing** — an experienced driver takes a 4x4 over a sequence of steep dune crests and drops in a deliberately controlled, roller-coaster-like pattern, which is the single most talked-about part of the experience and genuinely not for anyone prone to motion sickness. From there, most itineraries add a stop at the Inland Sea itself, plus optional extras depending on the package: camel rides, sandboarding, quad biking, or a desert camp with Qatari food and entertainment.\n\nVehicles are air-conditioned between dune-bashing stretches, which matters more than it sounds in Doha's heat — the discomfort of a desert safari is almost entirely about the time spent outside the vehicle, not inside it.",
            tourCard: { slug: "doha-budget-friendly-desert-safari-with-dune", title: "Doha: Budget-Friendly Desert Safari with Dune Bashing", description: "An entry-level dune-bashing trip covering the core experience without the extras.", price: "From $19", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ecaf6343c8b14f45ccc01475cfa91710fd7fcd15dca19bc95414b631871a03c.png" },
          },
          {
            title: "Khor Al Adaid: The Inland Sea Itself",
            content: "**Khor Al Adaid**, commonly called the Inland Sea, is a UNESCO-recognized natural inlet where the Gulf's water reaches directly into the desert dunes with no coastline barrier between them — a genuinely unusual landscape that's the reason most desert safaris exist as a product in the first place. Most tours stop here for photos, a short walk along the shoreline, and, on longer packages, swimming or a picnic lunch with the dunes rising directly from the water's edge.\n\nThe drive to and from Khor Al Adaid through open desert, not just the destination itself, is a meaningful part of the experience — long stretches of dune landscape with essentially nothing else in view.",
            tourCard: { slug: "from-doha-khor-al-adaid-inland-sea-4x4-desert", title: "From Doha: Khor Al Adaid & Inland Sea 4x4 Desert Tour", description: "A full desert and Inland Sea run, dune bashing included both ways.", price: "From $78", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg" },
          },
          {
            title: "Timing: Day, Sunset or Night Safari, and Why It Matters More in Summer",
            content: "In **winter (November-March)**, timing is mostly about preference — morning, afternoon and sunset safaris are all comfortable. In **summer (June-September)**, timing genuinely matters for safety: a midday desert safari during peak heat carries real heat-exhaustion risk, and a **night safari** — dune bashing after dark, often paired with clear-sky stargazing away from city light pollution — is the smarter choice for that season, not just a novelty option.\n\nFamilies with young children or anyone prone to motion sickness should ask operators about a gentler dune-bashing pace before booking, since intensity varies noticeably between operators and vehicles.",
            tourCard: { slug: "doha-night-safari-with-dune-bashing-clear-sky", title: "Doha: Night Safari with Dune Bashing & Clear-Sky Stargazing", description: "A night-time desert safari that avoids summer's dangerous midday heat entirely.", price: "From $26", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9eb1727443af0361ec8886f3feb625d8a63aaad8e2f142e90251760e7d462d0e.jpeg" },
          },
        ],
        faqs: [
          { q: "What is dune bashing?", a: "An experienced 4x4 driver takes guests over a sequence of steep desert dunes in a controlled, roller-coaster-like pattern. It's the signature activity of a Qatar desert safari and not recommended for anyone prone to motion sickness." },
          { q: "What is the Inland Sea (Khor Al Adaid)?", a: "A UNESCO-recognized natural area south of Doha where the Gulf's water reaches directly into the desert dunes with no coastal barrier — the main destination of most Doha desert safaris." },
          { q: "Is a desert safari safe in the Qatari summer?", a: "A night safari, scheduled after sunset, is the safer summer option. A midday safari in peak summer (June-September) carries genuine heat-exhaustion risk." },
          { q: "How long does a Doha desert safari take?", a: "Anywhere from a half-day budget trip to a full day or overnight camp experience, depending on the package — most include the drive out, dune bashing, and time at the Inland Sea itself." },
        ],
      };

    case "the-pearl-qatar-guide":
      return {
        title: "The Pearl-Qatar Guide 2026: Doha's Artificial Island, Marina and What to Do",
        description: "The Pearl-Qatar is an entirely man-made island shaped like a string of pearls, and it feels like a different city from the rest of Doha — here's what it's actually for.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dd224a9dcbc2ef5c6a8e8226de462ceca1b1b2de037bf15df5955eee7395cb6.jpg",
        fastFacts: [
          { icon: "Building2", label: "What it is", value: "An artificial island built in the shape of a string of pearls, reclaimed entirely from the Gulf" },
          { icon: "Compass", label: "Vibe", value: "Mediterranean-style promenades, yacht marinas and upscale shopping, a notably different pace from central Doha" },
          { icon: "Waves", label: "Best activity", value: "Kayaking the calm marina waters, or simply walking the waterfront promenades" },
          { icon: "MapPin", label: "Nearby", value: "Katara Cultural Village, a short distance away, pairs naturally with a Pearl visit" },
        ],
        sections: [
          {
            title: "An Entirely Man-Made Island, Built in the Shape of a Pearl Necklace",
            content: "**The Pearl-Qatar** is a large-scale land reclamation project off Doha's West Bay Lagoon coast, built from scratch starting in the early 2000s on the site of what was historically a natural pearl-diving area — the island's overall shape, visible from above, is designed to echo a string of pearls, a direct reference to Qatar's pre-oil pearling economy. It now functions as an upscale residential and leisure district, with yacht-lined marinas, low-rise Mediterranean and Arabian-influenced architecture, and a noticeably slower, more leisurely rhythm than the glass towers of West Bay just across the water.\n\nThe island is connected to the mainland by road, making it an easy taxi or drive from central Doha rather than requiring a boat to reach.",
          },
          {
            title: "What to Actually Do There",
            content: "**Porto Arabia**, the Pearl's main marina district, is built for walking — waterfront promenades lined with cafés, restaurants and yachts, styled loosely after a Mediterranean harbor town, and genuinely one of the more pleasant places in Doha for an unhurried evening stroll. The marina's calm, sheltered water also makes it a good spot for **kayaking**, a gentler water activity than the open bay elsewhere in the city, with guided tours explaining the island's layout and history as you paddle.\n\n**Qanat Quartier**, a smaller district within the Pearl, leans into a Venice-inspired canal theme with colorfully painted buildings, while the island's retail mix skews toward international luxury brands, reflecting its positioning as Doha's most upscale residential address.",
            tourCard: { slug: "doha-guided-kayaking-experience-at-the-pearl", title: "Doha: Guided Kayaking Experience at The Pearl", description: "A guided paddle through the marina's calm waters with the island's history explained along the way.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dd224a9dcbc2ef5c6a8e8226de462ceca1b1b2de037bf15df5955eee7395cb6.jpg" },
          },
          {
            title: "Pairing It with Katara Cultural Village",
            content: "**Katara Cultural Village**, a short drive from the Pearl, is a natural pairing for the same outing — it adds an amphitheater, art galleries and a public beach to the day, with a cultural programming focus that contrasts with the Pearl's more purely leisure-and-retail character. Together, the two make for a noticeably slower-paced half-day or full day compared to the busier Souq Waqif and Corniche side of Doha, useful as a deliberate change of pace partway through a longer trip.\n\nEvening is the Pearl's best hour for a walk, once the marina lights come on and the daytime heat (outside winter) has eased.",
          },
        ],
        faqs: [
          { q: "Is The Pearl-Qatar a natural island?", a: "No — it's entirely artificial, built through land reclamation starting in the early 2000s on the site of a historic pearl-diving area, with its overall shape designed to echo a string of pearls." },
          { q: "What is there to do at The Pearl-Qatar?", a: "Walking the Porto Arabia marina promenades, kayaking the sheltered marina waters, dining at its waterfront restaurants, and shopping at its international retail mix. Qanat Quartier's canal-themed district is also worth a look." },
          { q: "How do you get to The Pearl-Qatar?", a: "By road — it's connected to the mainland and reachable by taxi or car from central Doha, no boat required." },
          { q: "Can I combine The Pearl with Katara Cultural Village?", a: "Yes — they're a short drive apart and pair naturally into a single relaxed half-day or full day, each with a different character (leisure/retail versus cultural programming)." },
        ],
      };

    case "doha-corniche-guide":
      return {
        title: "Doha Corniche Guide 2026: The Waterfront Promenade and Best Skyline Views",
        description: "The Doha Corniche's roughly 7-kilometer curve is the single best free view in the city — here's where to walk it and when the skyline looks its best.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2c2f8e94404807720d6aea3da8413ea3fcf190d3d43c96626d37209c6052a8fa.jpeg",
        fastFacts: [
          { icon: "MapPin", label: "Length", value: "Roughly 7 kilometers, curving around Doha Bay from the Museum of Islamic Art to West Bay" },
          { icon: "Building2", label: "Best view", value: "The West Bay skyline across the bay, especially at sunset or once the towers light up" },
          { icon: "Clock", label: "Best time", value: "Early morning or evening — the promenade is fully exposed with little shade" },
          { icon: "DollarSign", label: "Cost", value: "Free — it's a public waterfront promenade with no entry charge" },
        ],
        sections: [
          {
            title: "A 7-Kilometer Curve Connecting Doha's Two Faces",
            content: "The **Doha Corniche** traces roughly 7 kilometers around Doha Bay, running from the **Museum of Islamic Art** at its southern end up toward the **West Bay** skyline at its northern reach, and walking any stretch of it gives a genuine sense of the contrast between the city's historic core near Souq Waqif and its ultra-modern glass towers. It's entirely free and open to the public, lined with palm trees, dhow harbors, fountains and a handful of small parks, and it's one of the few places in Doha where you can take in the full sweep of the skyline in a single unobstructed view.\n\nThe promenade is well used by joggers and cyclists in the cooler morning and evening hours, and dedicated cycling and walking lanes run much of its length.",
          },
          {
            title: "The Best Skyline View Is From the Water, Not Just the Shore",
            content: "While the Corniche itself gives a strong land-based view of **West Bay's** cluster of glass towers across the bay, the same skyline looks genuinely different from the water — traditional **dhow boats** moor along the Corniche specifically for short sightseeing cruises, and jet ski tours cover the same stretch at a faster pace. Both put the skyline, the Museum of Islamic Art's island and the Corniche's palm-lined curve all in view simultaneously, a vantage point the shoreline walk alone doesn't give you.\n\nSunset is the single best timing for either the shore walk or a boat trip — the glass towers catch the fading light directly, and most light up with their own illumination shortly after.",
            tourCard: { slug: "doha-jet-ski-tour-with-west-bay-skyline-views", title: "Doha: Jet Ski Tour with West Bay Skyline Views", description: "A faster-paced way to see the same Corniche and West Bay skyline from the water.", price: "From $91", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2c2f8e94404807720d6aea3da8413ea3fcf190d3d43c96626d37209c6052a8fa.jpeg" },
          },
          {
            title: "Timing Your Visit Around the Heat",
            content: "The Corniche has almost no shade along most of its length, which makes it a genuinely different proposition depending on the season — a pleasant hour-long walk in **winter (November-March)** at almost any time of day, versus something best restricted to **early morning or evening** in the hotter months, when the open, sun-exposed promenade can be uncomfortable by mid-morning. The Corniche Park sections near MIA and the public gardens dotted along the route offer occasional shaded rest stops if you're walking the full length.\n\nIt connects easily on foot to both Souq Waqif and the Museum of Islamic Art, making it a natural link between the two rather than a separate destination requiring its own dedicated outing.",
          },
        ],
        faqs: [
          { q: "How long is the Doha Corniche?", a: "Roughly 7 kilometers, curving around Doha Bay from the Museum of Islamic Art at the southern end to the West Bay skyline at the northern end." },
          { q: "Is the Doha Corniche free to visit?", a: "Yes — it's a public waterfront promenade with no entry charge, open at all hours." },
          { q: "When is the best time to walk the Corniche?", a: "Early morning or evening, especially outside winter — the promenade has very little shade and can be uncomfortable at midday in the hotter months." },
          { q: "What's the best way to see the West Bay skyline?", a: "Both the Corniche walk itself and a dhow cruise or jet ski tour on the water work well, with the water-based view adding the Museum of Islamic Art's island and the Corniche curve to the same frame." },
        ],
      };

    case "katara-cultural-village-guide":
      return {
        title: "Katara Cultural Village Guide 2026: Amphitheater, Galleries and the Public Beach",
        description: "Katara Cultural Village blends an open-air amphitheater, art galleries and one of Doha's few public beaches into a single cultural district — here's how to spend time there.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e8d684fcbd3565a01574d9fea12f9e7648f0d0fb20e5f98525c19a3b3c49c8c.jpeg",
        fastFacts: [
          { icon: "Theater", label: "Amphitheater", value: "An open-air Greek-style venue hosting concerts, opera and cultural festivals year-round" },
          { icon: "Image", label: "Galleries", value: "Multiple art galleries and cultural institutions spread through the village's low-rise buildings" },
          { icon: "Waves", label: "Beach", value: "A public beach, one of relatively few easily accessible options in central Doha" },
          { icon: "MapPin", label: "Nearby", value: "The Pearl-Qatar is a short distance away, making the two an easy same-day pairing" },
        ],
        sections: [
          {
            title: "What Katara Actually Is: A Purpose-Built Cultural District",
            content: "**Katara Cultural Village**, developed as a dedicated arts and culture precinct, sits between West Bay and The Pearl-Qatar, built in a low-rise architectural style drawing on traditional Qatari and wider Gulf design rather than the glass-tower aesthetic found elsewhere in the city. Its centerpiece is an **open-air amphitheater** modeled loosely on Greek and Roman theater design, which hosts a regular calendar of concerts, opera performances and cultural festivals, making it worth checking the events calendar before a visit rather than treating it purely as a daytime sightseeing stop.\n\nThe village's Katara Mosque, with its distinctive golden mosaic minaret, is one of the district's most photographed structures and a notable piece of contemporary Islamic architecture in its own right.",
          },
          {
            title: "Galleries, Public Art and a Genuinely Different Pace",
            content: "Scattered through Katara's low-rise buildings are **multiple art galleries and cultural institutions**, ranging from contemporary Qatari and regional art to rotating exhibitions, giving the village a genuinely different texture from Doha's larger single-building museums like MIA. Public art installations are dotted throughout the pedestrian walkways, and the overall pace is noticeably slower and more browsable than Souq Waqif's denser market energy.\n\nA cluster of restaurants and cafés along the pedestrian promenade makes Katara a reasonable lunch or dinner stop on its own, independent of any specific gallery visit or event.",
          },
          {
            title: "The Beach and Pairing with The Pearl-Qatar",
            content: "Katara's **public beach** is one of the more easily accessible options in central Doha, a straightforward add-on for anyone wanting water and sand without traveling out of the city, though it's a developed urban beach rather than a remote natural stretch. **The Pearl-Qatar**'s marina district sits a short distance away, making a combined Katara-and-Pearl day a natural pairing — Katara for the cultural programming and beach, the Pearl for the marina promenades and upscale dining.\n\nEvening is Katara's liveliest hour when an event is scheduled at the amphitheater; otherwise, late afternoon through sunset gives the most comfortable walking conditions outside winter months.",
          },
        ],
        faqs: [
          { q: "What is Katara Cultural Village known for?", a: "Its open-air Greek-style amphitheater hosting concerts and festivals, multiple art galleries, the distinctive golden-mosaic Katara Mosque, and one of Doha's more accessible public beaches." },
          { q: "Is Katara Cultural Village free to visit?", a: "Walking the village, its public art and the pedestrian promenade is free; specific gallery exhibitions or amphitheater events may carry their own ticket price." },
          { q: "Can I combine Katara with The Pearl-Qatar in one day?", a: "Yes — they're a short distance apart and pair naturally, with Katara covering the cultural and beach side and The Pearl covering the marina and upscale retail side." },
          { q: "Does Katara have restaurants?", a: "Yes — a cluster of restaurants and cafés line its pedestrian promenade, making it a reasonable standalone lunch or dinner stop." },
        ],
      };

    case "doha-skyline-west-bay-guide":
      return {
        title: "Doha Skyline & West Bay Guide 2026: The Towers, the Views and How to See Them",
        description: "West Bay's cluster of glass towers defines Doha's skyline from almost every angle in the city — here's where that skyline actually comes from and how to see it best.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36d45f54b7e2dd71e2a6ccdae226c965958494e982fa81a36bc584b028c1f864.jpg",
        fastFacts: [
          { icon: "Building2", label: "What it is", value: "Doha's modern financial and hotel district, built almost entirely from the 2000s onward" },
          { icon: "Eye", label: "Best viewpoint", value: "Across the bay from the Corniche or the Museum of Islamic Art side, especially at sunset" },
          { icon: "Ship", label: "Alternative viewpoint", value: "From the water, by dhow cruise or jet ski, putting the full skyline in one frame" },
          { icon: "Clock", label: "Best time", value: "Sunset through early night, once the towers' own lighting comes on" },
        ],
        sections: [
          {
            title: "West Bay: Built Almost Entirely Within One Generation",
            content: "**West Bay**, Doha's dense cluster of skyscrapers housing international hotels, banks and corporate headquarters, was built almost entirely from the 2000s onward as part of Qatar's broader push to diversify its economy beyond oil and gas, and the speed and density of that construction is part of why the skyline reads as so uniformly modern compared to the historic Souq Waqif area a short distance south. Several of the towers carry distinctive architectural signatures — twisting forms, tapered profiles, illuminated crowns — making the skyline recognizable even from a single photo rather than reading as generic glass-and-steel.\n\nWest Bay also functions as Doha's main business and five-star hotel district, so it's as much a place to stay or do business as a sightseeing destination in its own right.",
          },
          {
            title: "Where to Actually See the Skyline Best",
            content: "The classic view is from across **Doha Bay**, along the Corniche near the Museum of Islamic Art, where the full cluster of West Bay towers rises directly across the water with nothing obstructing the frame — this is the single most photographed Doha skyline shot, and it works especially well at **sunset**, when the glass catches the fading light before the towers' own illumination takes over after dark.\n\nFor a genuinely different angle, seeing the skyline **from the water** — a dhow cruise or jet ski tour across the bay — puts the towers, the Corniche's palm-lined curve and MIA's island all in the same continuous view, something the shoreline vantage alone can't give you.",
            tourCard: { slug: "doha-jet-ski-tour-with-west-bay-skyline-views", title: "Doha: Jet Ski Tour with West Bay Skyline Views", description: "A fast-paced way to see the full skyline from the bay itself.", price: "From $91", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2c2f8e94404807720d6aea3da8413ea3fcf190d3d43c96626d37209c6052a8fa.jpeg" },
          },
          {
            title: "Visiting West Bay Itself",
            content: "West Bay is navigable on foot in sections, though its scale and heat (outside winter) make it less of a pure walking district than the Corniche or Souq Waqif — many visitors see it from a car, taxi or tour bus window as part of a wider city loop rather than dedicating standalone walking time to it. Several of its hotels have rooftop bars and restaurants open to non-guests, which double as elevated skyline viewpoints looking back toward the Corniche and MIA, a useful alternative to the ground-level shoreline view.\n\nA guided city tour that loops through West Bay alongside the Corniche and Souq Waqif is the most efficient way to see the district without needing a car of your own.",
            tourCard: { slug: "doha-premium-city-tour-gondola-ride-with-airport", title: "Doha: Premium City Tour & Gondola Ride with Airport Pickup", description: "A guided city loop that takes in West Bay alongside the Corniche and other sights.", price: "From $221", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36d45f54b7e2dd71e2a6ccdae226c965958494e982fa81a36bc584b028c1f864.jpg" },
          },
        ],
        faqs: [
          { q: "What is West Bay in Doha?", a: "Doha's dense modern skyscraper district, housing international hotels, banks and corporate headquarters, built almost entirely from the 2000s onward." },
          { q: "Where is the best place to photograph the Doha skyline?", a: "Across Doha Bay along the Corniche near the Museum of Islamic Art, especially at sunset when the towers catch the light before their own illumination takes over after dark." },
          { q: "Can you see the skyline from the water?", a: "Yes — a dhow cruise or jet ski tour across the bay puts the full West Bay skyline, the Corniche and MIA's island all in one continuous view." },
          { q: "Is West Bay worth visiting on foot?", a: "It's walkable in sections, but its scale and heat outside winter make it less of a pure walking district — many visitors see it as part of a wider guided city tour instead." },
        ],
      };

    case "doha-food-guide":
      return {
        title: "Doha Food Guide 2026: What to Eat, Where and the Ramadan Timing to Know",
        description: "From Souq Waqif's dense restaurant lanes to a dhow dinner cruise — here's what Doha's food scene actually looks like and when restaurant hours shift.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg",
        fastFacts: [
          { icon: "UtensilsCrossed", label: "Where to eat", value: "Souq Waqif's restaurant lanes are the densest single concentration in the city" },
          { icon: "Globe", label: "What to expect", value: "A genuinely international mix — Qatari, Lebanese, Indian, Iranian and international chains all compete for the same diners" },
          { icon: "Moon", label: "Ramadan", value: "Daytime dining shifts significantly; many restaurants open only after sunset (iftar) during the month" },
          { icon: "Ship", label: "Signature experience", value: "A dhow dinner cruise, combining the meal with the West Bay skyline view" },
        ],
        sections: [
          {
            title: "Where to Actually Eat in Doha",
            content: "**Souq Waqif**'s dense cluster of restaurants, spilling onto outdoor courtyards and terraces once the day's heat breaks, is Doha's single best concentration of food options in one walkable area — Qatari and wider Gulf cuisine alongside Lebanese, Iranian, Indian and international chain restaurants, reflecting the city's genuinely international population. **The Pearl-Qatar**'s Porto Arabia marina adds a more upscale, Mediterranean-leaning dining scene with a waterfront setting, while West Bay's hotel restaurants cover everything from fine dining to international buffet spreads.\n\nTraditional Qatari cuisine, less globally known than some of its neighbors' food cultures, centers on dishes like machbous (spiced rice with meat or seafood) and seafood drawing on Qatar's Gulf coastline — worth actively seeking out at a dedicated Qatari restaurant rather than assuming it'll appear by default on a general Middle Eastern menu.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "A guided food walk through the souq's restaurant lanes with a local picking the stops.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
          {
            title: "A Dhow Dinner Cruise: Doha's Signature Food-and-View Combination",
            content: "A **traditional dhow cruise with dinner**, sailing a slow loop across Doha Bay as the sun sets behind the West Bay towers, is the city's most distinctive combined food-and-sightseeing experience — a buffet or set menu served on deck while the skyline lights up, typically running a couple of hours. It's a genuinely different pace from a restaurant meal, closer to a scenic dinner cruise found in other major harbor cities, but with the specific backdrop of Doha's modern skyline against the historic shape of the dhow boat itself.\n\nBooking the dinner option specifically (rather than a shorter sightseeing-only cruise) matters if the meal is the point — check which version a given cruise offers before booking.",
            tourCard: { slug: "doha-traditional-dhow-sunset-cruise-with-optional", title: "Doha: Traditional Dhow Sunset Cruise with Optional Dinner", description: "A sunset cruise with a dinner option, the classic Doha food-and-skyline combination.", price: "From $24", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg" },
          },
          {
            title: "Ramadan: The Timing Shift Every Visitor Should Know",
            content: "During **Ramadan**, whose dates shift each year on the Islamic lunar calendar, daytime dining in Doha changes significantly: many restaurants reduce hours or close entirely during daylight fasting hours, reopening for **iftar** (the sunset meal breaking the fast) with a noticeably livelier atmosphere than the rest of the year. Hotel restaurants and some international venues continue serving non-fasting guests privately during the day, but it's far from guaranteed, and eating or drinking visibly in public during daylight hours is generally discouraged out of respect even for non-fasting visitors.\n\nIf your trip overlaps Ramadan, check our dedicated Ramadan travel guide — it affects far more than restaurant hours and is worth planning around specifically rather than treating as a minor footnote.",
          },
        ],
        faqs: [
          { q: "What is traditional Qatari food?", a: "Dishes like machbous (spiced rice with meat or seafood) and a range of Gulf seafood preparations, drawing on Qatar's coastline. It's worth seeking out at a dedicated Qatari restaurant rather than assuming it appears on general Middle Eastern menus." },
          { q: "Where is the best place to eat in Doha?", a: "Souq Waqif has the densest concentration of restaurant options in one walkable area, spanning Qatari, Lebanese, Iranian, Indian and international cuisine." },
          { q: "What is a dhow dinner cruise?", a: "A traditional wooden boat cruise across Doha Bay with dinner served on deck as the sun sets behind the West Bay skyline — Doha's signature combined food-and-sightseeing experience." },
          { q: "Do restaurants close during Ramadan in Doha?", a: "Many reduce hours or close during daylight fasting hours and reopen for the sunset iftar meal. Hotel restaurants sometimes serve non-fasting guests privately during the day, but it isn't guaranteed everywhere." },
        ],
      };

    case "doha-shopping-malls-guide":
      return {
        title: "Doha Shopping & Malls Guide 2026: Villaggio, Souq Waqif and What's Worth Buying",
        description: "From Villaggio Mall's indoor gondola rides to Souq Waqif's traditional stalls, Doha's shopping scene splits sharply between air-conditioned mall culture and open-air souk tradition.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8cf64db8dbc75e1891d1bd36f9754618618136ff082f43d201be060f46f5b47.png",
        fastFacts: [
          { icon: "ShoppingBag", label: "Mall highlight", value: "Villaggio Mall's indoor Venetian-style canal with gondola rides, a genuinely unusual mall feature" },
          { icon: "Compass", label: "Traditional option", value: "Souq Waqif for spices, textiles, falconry gear and souvenirs" },
          { icon: "DollarSign", label: "Payment", value: "Cards accepted virtually everywhere, including most souq stalls" },
          { icon: "Snowflake", label: "Why malls matter", value: "Air-conditioned malls double as a heat-relief destination, not just a shopping stop, outside winter" },
        ],
        sections: [
          {
            title: "Villaggio Mall: The Gondola Rides Are Genuinely Not a Gimmick",
            content: "**Villaggio Mall** is built around a Venetian theme carried through to its most distinctive feature: an **indoor canal with gondola rides**, winding under a painted sky ceiling past the mall's retail units — a feature that reads as a gimmick until you're actually floating past shopfronts under climate-controlled comfort while it's 45°C outside. Beyond the canal, Villaggio houses a large international retail mix, an indoor ice rink, and a cinema, making it a reasonable half-day stop on its own for families or anyone needing a break from outdoor sightseeing.\n\nIt's one of the more visited malls specifically for the gondola novelty rather than the shopping alone, and it's commonly paired with a wider city tour rather than visited as a standalone destination.",
            tourCard: { slug: "doha-city-tour-with-villaggio-mall-gondola-ride", title: "Doha: City Tour with Villaggio Mall Gondola Ride", description: "A guided city loop that includes the Villaggio gondola ride as part of the itinerary.", price: "From $168", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8cf64db8dbc75e1891d1bd36f9754618618136ff082f43d201be060f46f5b47.png" },
          },
          {
            title: "Souq Waqif for Traditional Shopping",
            content: "For a completely different shopping register, **Souq Waqif** covers spices, textiles, perfumes (attar), traditional clothing and souvenirs across its covered lanes, plus the distinctive **falcon souq** section for falconry gear. Unlike some regional bazaars, most stalls here accept cards, and a polite counter-offer on textiles or souvenirs is normal, though prices on food and most goods are increasingly fixed rather than purely negotiable.\n\nIt's the better choice specifically for souvenirs with a genuine sense of place, rather than the international brand mix found in malls.",
            tourCard: { slug: "doha-heritage-culture-shopping-and-relaxation-tour", title: "Doha: heritage, culture, shopping, and relaxation tour", description: "A guided outing that pairs traditional souk shopping with wider cultural stops.", price: "From $65", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f0167135e48bdbb8cddf65c6d6f7bcee7ad630e9dc90f4afaaf99c5b5b920028.png" },
          },
          {
            title: "Why Malls Matter More in Doha Than in Most Cities",
            content: "In Doha's hotter months, air-conditioned malls function as a genuine **heat-relief destination**, not just a shopping errand — many residents and visitors alike use a mall visit as the deliberate midday plan during the hottest stretch of the day, between outdoor morning and evening activities. This is worth building into an itinerary consciously: treating a mall stop as a scheduled break rather than an afterthought makes a hot-season Doha day noticeably more comfortable.\n\nBeyond Villaggio, City Center Doha and Mall of Qatar are two of the other larger options, each with its own international retail mix and food court variety.",
          },
        ],
        faqs: [
          { q: "What is special about Villaggio Mall?", a: "An indoor Venetian-style canal with gondola rides running through the mall, alongside an ice rink and cinema — a genuinely distinctive feature beyond standard mall shopping." },
          { q: "Can I pay by card in Doha's shops and souks?", a: "Yes — cards are accepted almost everywhere, including most Souq Waqif stalls, which is unusually convenient for a traditional market." },
          { q: "Why do malls matter so much in Doha's travel planning?", a: "Air-conditioned malls double as heat-relief stops during the hottest parts of the day, especially outside winter, making them a practical midday plan rather than just a shopping destination." },
          { q: "Is Souq Waqif or a mall better for souvenirs?", a: "Souq Waqif, generally — it has a stronger sense of local character for textiles, spices and traditional goods, while malls lean toward international brands." },
        ],
      };

    case "qatar-world-cup-2022-legacy-doha":
      return {
        title: "Qatar World Cup 2022 Legacy in Doha: What's Still Worth Visiting Today",
        description: "The 2022 FIFA World Cup left Doha with a Metro system, stadium precincts and a hotel stock built for the tournament — here's what's genuinely still worth a visit years later.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/33ab269d71c75dc60c8482417126329f2d4181f4b2aaa371b2680d9aca8819d1.png",
        fastFacts: [
          { icon: "Train", label: "Biggest legacy", value: "The Doha Metro network, built out rapidly ahead of the tournament and still the city's main transit backbone" },
          { icon: "Landmark", label: "Stadiums", value: "Several venues, including Lusail Stadium and Al Bayt, remain active and offer tours" },
          { icon: "Building2", label: "Hotels", value: "A significant chunk of Doha's current hotel stock was built or expanded specifically for the tournament" },
          { icon: "Compass", label: "Worth visiting", value: "Stadium precinct tours combining the architecture with the tournament's history" },
        ],
        sections: [
          {
            title: "The Metro: The Legacy Most Visitors Actually Use Daily",
            content: "The **Doha Metro**, built out at an unusually rapid pace specifically to be ready ahead of the 2022 tournament, remains the single most-used piece of World Cup infrastructure for any visitor today — clean, modern and covering the airport, West Bay, and the areas near Souq Waqif and Education City, at a fraction of taxi cost. It's easy to take this kind of transit infrastructure for granted, but Doha built essentially an entire metro system within a relatively tight construction window, a scale of project that in most cities takes considerably longer.\n\nMost visitors interact with this legacy without necessarily realizing it's a World Cup-era build, simply as the fastest way to get between the airport and West Bay.",
          },
          {
            title: "The Stadiums: Still Active, Still Visitable",
            content: "Several of the tournament's stadiums remain active venues rather than one-off relics — **Lusail Stadium**, the venue for the 2022 final, and **Al Bayt Stadium**, with its distinctive tent-inspired design referencing traditional Bedouin architecture, both continue hosting events and offer guided tours covering the construction story and the tournament's atmosphere. These tours tend to combine the stadium visit with wider context about Qatar's infrastructure push around the tournament, rather than being a purely architectural walkthrough.\n\nThe precincts around several stadiums have also been developed into broader mixed-use areas since the tournament, giving them a life beyond match days.",
            tourCard: { slug: "doha-world-cup-stadium-souq-waqif-villaggio", title: "Doha: World Cup Stadium, Souq Waqif & Villaggio Gondola Ride", description: "A guided loop covering a World Cup stadium alongside the souq and Villaggio's gondola ride.", price: "From $155", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/33ab269d71c75dc60c8482417126329f2d4181f4b2aaa371b2680d9aca8819d1.png" },
          },
          {
            title: "Hotels and the Wider Infrastructure Push",
            content: "A significant portion of Doha's current **hotel stock**, particularly in West Bay, was built or substantially expanded in the years leading up to the tournament, part of a broader national infrastructure push that also included road networks, the new international airport terminal expansion, and public space developments like sections of the Corniche. This is part of why Doha's modern districts feel so uniformly recent — much of what defines the current skyline and visitor infrastructure dates from this same concentrated building period.\n\nFor visitors specifically interested in the tournament's legacy rather than just using the infrastructure incidentally, a guided tour pairing a stadium visit with the city's other World Cup-era builds gives the fullest picture.",
          },
        ],
        faqs: [
          { q: "What World Cup infrastructure can you still visit in Doha?", a: "The Doha Metro (used daily by most visitors), several active stadiums including Lusail Stadium and Al Bayt Stadium, and much of West Bay's hotel stock, all built or expanded for the 2022 tournament." },
          { q: "Can you tour the World Cup stadiums?", a: "Yes — several, including Lusail Stadium and Al Bayt Stadium, offer guided tours covering the construction story and tournament history, and remain active venues for other events." },
          { q: "Is the Doha Metro part of the World Cup legacy?", a: "Yes — it was built out at an unusually rapid pace specifically to be ready ahead of the 2022 tournament and remains the city's main transit backbone today." },
          { q: "What makes Al Bayt Stadium architecturally distinctive?", a: "Its design references traditional Bedouin tent architecture, making it one of the more visually distinctive World Cup venues rather than a generic stadium bowl." },
        ],
      };

    case "doha-7-day-itinerary":
      return {
        title: "The Perfect 7-Day Doha Itinerary (2026): A Full Week Done Right",
        description: "A week in Doha gives enough room for the cultural core, multiple desert days, the coast, and a genuinely relaxed pace — here's how to structure the full seven days.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/718e806450bd26850f5a9c37738fa17ad0fbb89e9838a69e71534021432e5666.jpeg",
        sections: [
          {
            title: "Days 1-3: The Core Itinerary",
            content: "Follow the 3-day itinerary as your foundation: day one covers the Museum of Islamic Art, Souq Waqif and a Corniche sunset; day two is the desert safari to Khor Al Adaid; day three is The Pearl-Qatar and Katara Cultural Village. This front-loads Doha's headline sights and gives you three full days of momentum before the week's pace slows down.",
          },
          {
            title: "Days 4-5: Al Zubarah, the West Coast and Zekreet",
            content: "Spend day four on a trip to **Al Zubarah Fort**, a UNESCO World Heritage site and one of the best-preserved examples of an 18th/19th-century Gulf pearling and trading town, reached via a drive along the coast often combined with a stop at Purple Island or Al Khor. Day five heads to Qatar's **west coast**, including **Zekreet**'s dramatic eroded rock formations and the nearby **Film City**, a purpose-built, now-abandoned movie set standing in the open desert — both deliver a genuinely different landscape from the dunes closer to Doha.",
            tourCard: { slug: "from-doha-al-zubarah-fort-tour-via-al-khor", title: "From Doha: Al Zubarah Fort Tour via Al Khor & Purple Island", description: "A full day reaching the UNESCO-listed fort via the coastal route.", price: "From $50", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf0a6f0d5079ce7b10e2916a453fa4b09c588e3d97d9f8f92428f3a30fb20adf.png" },
          },
          {
            title: "Day 6: A Full-Day Desert Safari with an Overnight-Style Beach Camp",
            content: "Dedicate day six to a longer **full-day desert safari combining dune bashing with a beach camp**, including a BBQ lunch or dinner by the water's edge — a more relaxed, extended version of the day-two desert trip, useful once you've already covered the core Inland Sea experience and want a slower-paced repeat with a different finish.",
            tourCard: { slug: "dohafull-day-desert-safari-beach-camp-bbq-lunch", title: "Doha: Full-Day Desert Safari & Beach Camp BBQ Lunch or Dinner", description: "An extended desert day finishing at a beach camp with a BBQ meal.", price: "From $442", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/718e806450bd26850f5a9c37738fa17ad0fbb89e9838a69e71534021432e5666.jpeg" },
          },
          {
            title: "Day 7: A Slow Final Day — Villaggio, Souq Waqif Encore and Departure Prep",
            content: "Close the week gently: a morning at **Villaggio Mall** for the gondola ride and any last shopping, then a final evening back at **Souq Waqif** for dinner, since by day seven it's become familiar territory worth one more relaxed visit rather than a new destination to figure out. This kind of bookend — opening the week with the big sights, closing it with a comfortable repeat — makes a full week feel complete rather than rushed at either end.",
            tourCard: { slug: "doha-city-tour-with-villaggio-mall-gondola-ride", title: "Doha: City Tour with Villaggio Mall Gondola Ride", description: "An easy final-day stop combining the gondola ride with a light city loop.", price: "From $168", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8cf64db8dbc75e1891d1bd36f9754618618136ff082f43d201be060f46f5b47.png" },
          },
        ],
        faqs: [
          { q: "Is a week too long for Doha?", a: "Not if you add Al Zubarah Fort, the west coast's Zekreet rock formations and a second, more relaxed desert day to the core 3-day itinerary — a week lets you see Qatar beyond the city itself without rushing." },
          { q: "What's worth adding on day 4 or 5 of a Doha trip?", a: "Al Zubarah Fort (UNESCO-listed) and the west coast's Zekreet rock formations and Film City are the two best additions once you've covered Doha's core sights in the first three days." },
          { q: "Should I repeat the desert safari on a 7-day trip?", a: "A longer, beach-camp-style desert day later in the week is a reasonable repeat, since it's a different, more relaxed format than the dune-bashing-focused Inland Sea day earlier in the trip." },
        ],
      };

    case "doha-with-kids-guide":
      return {
        title: "Doha with Kids Guide 2026: What Actually Works for Families",
        description: "From Villaggio's gondola rides and indoor ice rink to a gentler desert safari with camel rides, here's what Doha offers families and what to plan around.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/40ee709538b8fc81ca1522bfbbd4065d99e56b1dea5a990ecb9162625c39622e.jpeg",
        fastFacts: [
          { icon: "Snowflake", label: "Heat planning", value: "Build in air-conditioned stops — malls, MIA — between outdoor activities, especially outside winter" },
          { icon: "Car", label: "Desert safari for kids", value: "Ask operators about a gentler dune-bashing pace; private family-focused packages exist" },
          { icon: "ShoppingBag", label: "Indoor fun", value: "Villaggio Mall's gondola rides and ice rink are genuine kid-pleasers, not just shopping" },
          { icon: "Compass", label: "Easy wins", value: "Souq Waqif's falcon souq and a short dhow cruise both land well with most ages" },
        ],
        sections: [
          {
            title: "Planning Around the Heat Is the Real Family Strategy",
            content: "The single biggest factor in a successful Doha family trip isn't finding kid-friendly activities — there are plenty — it's **sequencing outdoor and indoor time around the heat**, especially outside the winter months. A practical rhythm: an outdoor morning activity before the heat peaks, an air-conditioned midday stop (a mall, the Museum of Islamic Art, an indoor attraction), then outdoor time again in the cooler evening. Kids dehydrate and overheat faster than adults, so this planning matters more here than in a milder-climate city.\n\nWinter (November-March) removes most of this constraint, making it genuinely the easier season for a family trip if your travel dates are flexible.",
          },
          {
            title: "A Gentler Desert Safari for Families",
            content: "A desert safari with dune bashing can be a highlight for kids old enough to enjoy the motion, but it's worth specifically asking operators about a **gentler driving pace** before booking, since intensity varies noticeably between vehicles and drivers, and standard dune bashing isn't designed with young children in mind. A **private family-focused 4x4 desert safari**, often including camel rides and a more relaxed overall pace, is the safer choice over a shared group tour built around a faster, rougher dune-bashing style.\n\nCamel rides and sandboarding stops, common add-ons, tend to land well with a wider age range than dune bashing alone.",
            tourCard: { slug: "doha-private-family-4x4-desert-safari-to-the", title: "Doha: Private Family 4x4 Desert Safari to the Inland Sea", description: "A desert safari specifically paced and packaged for families, private rather than shared.", price: "From $208", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2173674048252174633a7b079cfa255ab776dd2104c5461873a2a802460597ef.jpg" },
          },
          {
            title: "Indoor and Easy Wins Around the City",
            content: "**Villaggio Mall**'s indoor gondola canal and ice rink are genuine attractions in their own right for kids, not just shopping-trip add-ons, and work as a reliable midday heat-relief stop that doesn't feel like a consolation prize. **Souq Waqif**'s falcon souq, with live falcons visible in shop windows, is a consistently popular stop across a wide age range, and a short **dhow cruise** at sunset — calm water, a manageable duration, a clear visual payoff with the lit-up skyline — tends to work better for younger kids than a longer boat trip.\n\nThe Museum of Islamic Art's striking building and open MIA Park grounds give older kids and teens more to engage with than the collection alone might suggest, especially combined with the park's open waterfront space to run around in afterward.",
          },
        ],
        faqs: [
          { q: "Is Doha a good destination for families with young kids?", a: "Yes, with deliberate planning around the heat — alternating outdoor mornings and evenings with air-conditioned midday stops makes the city workable for most of the year, and it's straightforwardly comfortable in winter." },
          { q: "Is dune bashing safe for children?", a: "Standard group dune bashing isn't specifically designed for young children — ask about a gentler pace, or book a private family-focused desert safari package instead of a faster shared group tour." },
          { q: "What indoor activities work well for kids in Doha?", a: "Villaggio Mall's gondola rides and ice rink, and the air-conditioned Museum of Islamic Art, both double as genuine attractions and necessary heat-relief stops." },
          { q: "Is a dhow cruise good for young kids?", a: "A short sunset cruise generally works well — calm water, manageable duration, and a clear visual payoff with the lit-up skyline, better suited to younger kids than a longer boat trip." },
        ],
      };

    case "doha-budget-travel-guide":
      return {
        title: "Doha Budget Travel Guide 2026: Keeping Costs Down in a Genuinely Expensive City",
        description: "Doha isn't a cheap destination, but the Metro, free sights and a budget desert safari option all help — here's how to actually keep costs reasonable.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ecaf6343c8b14f45ccc01475cfa91710fd7fcd15dca19bc95414b631871a03c.png",
        fastFacts: [
          { icon: "Train", label: "Biggest saving", value: "The Doha Metro over taxis — a fraction of the cost for most tourist-area routes" },
          { icon: "Landmark", label: "Free sights", value: "The Museum of Islamic Art's exterior and MIA Park, the Corniche, and walking Souq Waqif are all free" },
          { icon: "Car", label: "Budget desert safari", value: "Entry-level dune-bashing trips exist at a fraction of the cost of full-day or overnight packages" },
          { icon: "DollarSign", label: "Watch for", value: "Hotel rates spike noticeably in winter's peak season — shoulder months save meaningfully" },
        ],
        sections: [
          {
            title: "Transit: The Metro Is the Single Biggest Lever",
            content: "The **Doha Metro** covers the airport, West Bay and the areas near Souq Waqif at a fraction of what the equivalent taxi rides cost, and it's genuinely the single biggest lever for keeping a Doha trip's daily costs down, especially given how spread out the city's districts are. Reserve taxis or ride-hailing apps for routes the Metro doesn't reach directly rather than defaulting to them for every trip.\n\nMany of the city's free sights — walking the Corniche, browsing Souq Waqif's lanes without buying, admiring MIA's exterior and MIA Park without going inside — add up to a genuinely full day of sightseeing without spending beyond transit and food.",
          },
          {
            title: "A Budget Desert Safari Still Covers the Core Experience",
            content: "Desert safari pricing varies enormously depending on extras — overnight camps, private vehicles, beach BBQ dinners all add significant cost — but an **entry-level shared group tour with dune bashing** covers the core experience (the drive out, the dune bashing itself, a stop at the Inland Sea) at a fraction of the premium package price. For budget travelers, this stripped-down version delivers the same headline experience most visitors are actually after.\n\nSkip the add-ons (camel rides, sandboarding, overnight camps) on a first visit if budget is the priority — they're genuinely optional extras rather than essential parts of the experience.",
            tourCard: { slug: "doha-budget-friendly-desert-safari-with-dune", title: "Doha: Budget-Friendly Desert Safari with Dune Bashing", description: "The core desert safari experience without the premium add-ons.", price: "From $19", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ecaf6343c8b14f45ccc01475cfa91710fd7fcd15dca19bc95414b631871a03c.png" },
          },
          {
            title: "Timing Your Trip for Lower Hotel Rates",
            content: "Doha's **winter peak season (roughly November-March)** carries noticeably higher hotel rates alongside its comfortable weather, while the **shoulder months (April-May, October)** run warmer but offer meaningfully lower rates for travelers willing to manage the heat with the early-morning-or-evening approach outdoor activities need in those months. Summer itself (June-September) is cheapest of all for hotels, but the genuine heat risk outdoors makes it a harder budget tradeoff to recommend outright.\n\nCards are widely accepted everywhere, including most souk stalls, removing the usual currency-exchange fee concern that affects budget travel in some other destinations.",
          },
        ],
        faqs: [
          { q: "Is Doha an expensive city to visit?", a: "Yes, generally, especially hotels in peak winter season — but the Metro, free sights like the Corniche and MIA's exterior, and a budget desert safari option all help keep daily costs reasonable." },
          { q: "What is the cheapest way to get around Doha?", a: "The Doha Metro, by a wide margin, for any route it covers — it's a fraction of the equivalent taxi cost for trips to the airport, West Bay and the areas near Souq Waqif." },
          { q: "Is there a budget desert safari option in Doha?", a: "Yes — entry-level shared group tours cover the core dune-bashing and Inland Sea experience without the premium add-ons like overnight camps or private vehicles." },
          { q: "When are Doha hotel rates lowest?", a: "Summer (June-September) is cheapest, though the genuine heat risk outdoors is a real tradeoff. Shoulder months (April-May, October) offer a reasonable middle ground." },
        ],
      };

    case "doha-luxury-travel-guide":
      return {
        title: "Doha Luxury Travel Guide 2026: Private Tours, The Pearl and Where to Spend",
        description: "Doha has a genuinely developed luxury travel layer — private desert camps, Pearl-Qatar marina dining, premium city tours — here's where it's actually worth spending more.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e8d684fcbd3565a01574d9fea12f9e7648f0d0fb20e5f98525c19a3b3c49c8c.jpeg",
        fastFacts: [
          { icon: "Compass", label: "Private desert experience", value: "A private 4x4 safari with camel rides and falconry adds genuine exclusivity over shared group tours" },
          { icon: "Building2", label: "Marina dining", value: "The Pearl-Qatar's Porto Arabia offers Doha's most upscale waterfront restaurant scene" },
          { icon: "Car", label: "Premium city touring", value: "A private city tour covering MIA, Katara, the Pearl and Gewan Island in one curated loop" },
          { icon: "Building", label: "Where to stay", value: "West Bay's international five-star hotel stock, much of it built for the 2022 World Cup" },
        ],
        sections: [
          {
            title: "A Private Desert Experience, Not a Shared Group Tour",
            content: "The single clearest upgrade over a standard desert safari is swapping a **shared group tour for a private 4x4 experience**, typically including falconry demonstrations, camel rides and a more relaxed, less crowded version of the dune-bashing-to-Inland-Sea route, often with a private guide able to adjust pacing and stops to your group specifically. For travelers wanting the desert experience without the shared-vehicle, fixed-schedule feel of a budget tour, this is where the extra spend genuinely changes the experience rather than just the price tag.\n\nA private desert camp dinner, arranged as part of the same booking, extends the day into an evening with Qatari food and entertainment in a setting a group tour can't replicate.",
            tourCard: { slug: "from-doha-private-desert-safari-with-camel-ride", title: "From Doha: Private Desert Safari with Camel Ride & Falconry", description: "A private desert day built around falconry and camel rides, a genuine step up from shared tours.", price: "From $98", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/40ee709538b8fc81ca1522bfbbd4065d99e56b1dea5a990ecb9162625c39622e.jpeg" },
          },
          {
            title: "The Pearl-Qatar and a Curated City Loop",
            content: "**The Pearl-Qatar**'s Porto Arabia marina is Doha's clearest upscale dining and strolling district, with waterfront restaurants and a Mediterranean-influenced atmosphere that contrasts with the souq's more traditional register, and pairing it with **Katara Cultural Village** and **Gewan Island** in a single curated private tour covers the city's most design-forward districts in one well-sequenced day rather than piecing them together independently.\n\nA private guide for this kind of loop generally adds context on the architecture and development history of each district that a self-guided visit misses, particularly useful given how recently much of this has been built.",
            tourCard: { slug: "doha-secrets-luxury-souq-alleys-katara-gewan", title: "Doha Secrets & Luxury: Souq Alleys, Katara & Gewan Island", description: "A curated private loop through Doha's most design-forward districts.", price: "From $260", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e8d684fcbd3565a01574d9fea12f9e7648f0d0fb20e5f98525c19a3b3c49c8c.jpeg" },
          },
          {
            title: "Where to Stay and How to Get Around",
            content: "**West Bay**'s international five-star hotel stock, much of it built or expanded ahead of the 2022 World Cup, remains Doha's clearest luxury accommodation district, with skyline and bay views as a built-in amenity for many properties. A private car or chauffeur service, rather than the Metro or standard taxis, is the natural upgrade for getting between West Bay, The Pearl and Katara on a luxury-focused itinerary, particularly given Doha's summer heat making any wait for transport genuinely uncomfortable outside winter.\n\nBooking private, guided versions of the city's headline experiences — MIA, Souq Waqif, a dhow cruise — generally adds real value here specifically because of the depth of historical and architectural context a private guide can go into, beyond what a shared group tour's pace allows.",
          },
        ],
        faqs: [
          { q: "What's the best luxury upgrade for a Doha desert safari?", a: "A private 4x4 experience with falconry and camel rides, rather than a shared group dune-bashing tour — it adds genuine exclusivity and flexibility, not just a higher price tag." },
          { q: "Where is Doha's most upscale dining district?", a: "The Pearl-Qatar's Porto Arabia marina, with its Mediterranean-influenced waterfront restaurant scene, is the clearest upscale dining concentration in the city." },
          { q: "Where should luxury travelers stay in Doha?", a: "West Bay's international five-star hotel stock, much of it built or expanded for the 2022 World Cup, remains the city's clearest luxury accommodation district." },
          { q: "Is a private city tour worth it over a shared one in Doha?", a: "Often yes for travelers prioritizing pace and depth — a private guide can adjust the route and go deeper into the architecture and history of districts like The Pearl and Katara than a shared tour's fixed schedule allows." },
        ],
      };

    case "doha-beaches-guide":
      return {
        title: "Doha Beaches Guide 2026: Katara Beach, The Pearl and What's Actually Swimmable",
        description: "Doha isn't primarily a beach destination, but Katara's public beach and a handful of other spots give genuine water access — here's what's actually worth your time.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dd224a9dcbc2ef5c6a8e8226de462ceca1b1b2de037bf15df5955eee7395cb6.jpg",
        fastFacts: [
          { icon: "Waves", label: "Most accessible public beach", value: "Katara Cultural Village's beach, a developed urban beach rather than a remote natural stretch" },
          { icon: "Compass", label: "Further out", value: "A proper beach day usually means a longer trip south, combined with a desert camp stop" },
          { icon: "Sun", label: "Best season", value: "Winter through spring; summer's water and air temperatures both run genuinely hot" },
          { icon: "Snowflake", label: "Dress norms", value: "More conservative than some beach destinations; swimwear is fine on dedicated beach areas but check context" },
        ],
        sections: [
          {
            title: "Doha Is Not Primarily a Beach City, and That's Worth Setting Expectations On",
            content: "Unlike some Gulf neighbors built heavily around beach tourism, **Doha's coastline is mostly developed waterfront** — the Corniche, marina districts, port infrastructure — rather than long stretches of open public beach, so visitors arriving expecting a beach-first destination should recalibrate expectations before the trip. The genuine beach experiences that do exist, Katara's public beach chief among them, are developed and urban rather than remote, and a proper open-sand, swim-focused day usually means pairing it with a trip further out of the city.",
          },
          {
            title: "Katara Beach: The Easiest Option",
            content: "**Katara Cultural Village**'s beach is the most straightforward public beach access point in central Doha, a developed stretch adjacent to the cultural village's galleries and amphitheater rather than an isolated natural coastline. It's a reasonable half-day add-on to a wider Katara visit rather than a standalone destination requiring its own dedicated trip, and facilities nearby (restaurants, shade structures) make it more comfortable than an undeveloped beach would be in Doha's climate.",
          },
          {
            title: "Beach Camps as Part of a Desert Day",
            content: "For visitors specifically wanting a fuller beach experience, several **full-day desert safari packages finish at a beach camp** by the water's edge, combining dune bashing with a BBQ lunch or dinner and swim time at a less developed stretch of coastline south of the city — a genuinely different pairing from the urban beach-and-cultural-village combination Katara offers. This works especially well as a slower, extended version of a standard desert day for visitors who've already done the core Inland Sea trip.\n\nWinter and spring are meaningfully better for any beach plan than summer, when both water and air temperatures run hot enough to limit how long swimming actually feels pleasant.",
            tourCard: { slug: "dohafull-day-desert-safari-beach-camp-bbq-lunch", title: "Doha: Full-Day Desert Safari & Beach Camp BBQ Lunch or Dinner", description: "A desert day finishing at a less developed beach stretch with a BBQ meal.", price: "From $442", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/718e806450bd26850f5a9c37738fa17ad0fbb89e9838a69e71534021432e5666.jpeg" },
          },
        ],
        faqs: [
          { q: "Is Doha a good beach destination?", a: "Not primarily — most of its coastline is developed waterfront (the Corniche, marinas) rather than long open beaches. Katara's public beach and desert-safari beach camps are the main genuine beach experiences available." },
          { q: "What is the best public beach in Doha?", a: "Katara Cultural Village's beach is the most accessible, a developed stretch adjacent to the cultural village's galleries, reasonable as a half-day add-on." },
          { q: "Can I combine a beach visit with a desert safari?", a: "Yes — several full-day desert safari packages finish at a beach camp with a BBQ meal and swim time, a different and less developed beach experience than Katara's urban stretch." },
          { q: "What is the best season for a beach day in Doha?", a: "Winter through spring — summer's water and air temperatures both run hot enough to limit how pleasant swimming feels for an extended period." },
        ],
      };

    case "doha-dhow-cruise-guide":
      return {
        title: "Doha Dhow Cruise Guide 2026: Sunset Cruises, Dinner Options and What to Expect",
        description: "A traditional dhow cruise across Doha Bay is the city's most relaxed way to see the skyline — here's what the different cruise types actually involve.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg",
        fastFacts: [
          { icon: "Ship", label: "What it is", value: "A cruise on a traditional wooden dhow boat across Doha Bay" },
          { icon: "Sunset", label: "Best timing", value: "Sunset, when the West Bay skyline catches the light and then lights up itself after dark" },
          { icon: "UtensilsCrossed", label: "Dinner option", value: "Many cruises offer an optional onboard dinner alongside the sightseeing route" },
          { icon: "Clock", label: "Typical duration", value: "Roughly 1-2 hours for a standard sunset cruise" },
        ],
        sections: [
          {
            title: "What a Dhow Cruise Actually Is",
            content: "A **dhow** is a traditional wooden sailing boat historically used across the Gulf for fishing, pearling and trade, and today's Doha dhow cruises use boats built in that same style — often modernized with comfortable seating and shade canopies — for sightseeing trips across **Doha Bay**. The core route covers the Corniche's curve, the Museum of Islamic Art's island, and the **West Bay skyline** from the water, a genuinely different vantage point from any shore-based view in the city.\n\nMost cruises depart from a dock along the Corniche near Souq Waqif, making them an easy add-on to a souq or Corniche visit on the same outing.",
          },
          {
            title: "Sunset Timing and the Optional Dinner",
            content: "**Sunset is the standard and strongest timing** for a Doha dhow cruise — the glass towers of West Bay catch the fading light directly from the water, then the skyline's own illumination takes over shortly after dark, giving the cruise two distinct visual payoffs within the same trip. Many operators offer an **optional dinner** served on deck, turning the sightseeing cruise into a full evening meal with the same skyline backdrop, worth booking specifically if the meal matters to your evening plans rather than just the view.\n\nA standard sunset cruise runs roughly **1-2 hours**, long enough to cover the bay's main sightlines without feeling padded.",
            tourCard: { slug: "doha-traditional-dhow-sunset-cruise-with-optional", title: "Doha: Traditional Dhow Sunset Cruise with Optional Dinner", description: "A standard sunset cruise with the choice to add dinner on deck.", price: "From $24", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg" },
          },
          {
            title: "Who a Dhow Cruise Works Best For",
            content: "The slow, calm pace of a dhow cruise makes it a reliably good fit across a wide range of travelers — couples, families with younger kids who'd struggle with a faster jet ski tour, and anyone wanting a low-effort, high-payoff evening activity after a more active day (a desert safari, a souq walk) earlier on. It's less suited to travelers specifically wanting an active water experience, where a jet ski tour or kayaking at The Pearl would be the better fit instead.\n\nBooking slightly ahead for sunset-specific departure times is worth doing in peak winter season, when demand for the exact sunset slot runs highest.",
          },
        ],
        faqs: [
          { q: "What is a dhow cruise in Doha?", a: "A sightseeing cruise on a traditional wooden dhow boat across Doha Bay, covering the Corniche, the Museum of Islamic Art's island and the West Bay skyline from the water." },
          { q: "When is the best time for a Doha dhow cruise?", a: "Sunset — the skyline catches the fading light from the water, then lights up itself shortly after dark, giving two distinct visual payoffs in one cruise." },
          { q: "Can you have dinner on a dhow cruise?", a: "Many operators offer an optional onboard dinner alongside the standard sightseeing route, turning the cruise into a full evening meal with the same skyline backdrop." },
          { q: "How long does a dhow cruise take?", a: "A standard sunset cruise runs roughly 1-2 hours, enough to cover the bay's main sightlines without feeling padded." },
        ],
      };

    case "al-zubarah-fort-day-trip":
      return {
        title: "Al Zubarah Fort Day Trip Guide 2026: Qatar's UNESCO Site and How to Get There",
        description: "Al Zubarah is Qatar's only UNESCO World Heritage site, a remarkably preserved 18th/19th-century pearling town — here's how to actually plan the trip from Doha.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf0a6f0d5079ce7b10e2916a453fa4b09c588e3d97d9f8f92428f3a30fb20adf.png",
        fastFacts: [
          { icon: "Landmark", label: "Status", value: "Qatar's only UNESCO World Heritage Site, inscribed for its exceptional preservation" },
          { icon: "Clock", label: "Historical period", value: "An 18th/19th-century Gulf pearling and trading town, largely abandoned by the early 20th century" },
          { icon: "MapPin", label: "Distance from Doha", value: "Roughly 100 km northwest, typically a half-day to full-day round trip" },
          { icon: "Compass", label: "Often combined with", value: "Al Khor and Purple Island on the same route out" },
        ],
        sections: [
          {
            title: "What Al Zubarah Actually Is and Why It's UNESCO-Listed",
            content: "**Al Zubarah** was a major Gulf pearling and trading town through the 18th and 19th centuries, and its UNESCO World Heritage inscription specifically recognizes the exceptional preservation of its archaeological remains — a largely intact layout of a fortified coastal Gulf town, including its original town walls, a harbor, and surrounding residential quarters, abandoned and left undisturbed since the early 20th century rather than built over by later development the way most historic Gulf towns were. This is genuinely rare: comparable towns elsewhere in the Gulf were absorbed into modern cities, while Al Zubarah survived specifically by being left alone.\n\nThe nearby **Al Zubarah Fort**, a restored early-20th-century fort (built after the original town's decline, used historically as a coast guard post), now houses a small museum and visitor center explaining the site's history and the archaeological work still ongoing there.",
          },
          {
            title: "Getting There and What to Combine It With",
            content: "Al Zubarah sits roughly **100 km northwest of Doha**, making it a half-day to full-day round trip depending on how much time you spend on-site and what else you combine it with. Most guided tours pair the fort with a stop at **Al Khor**, a coastal town with its own fishing harbor and mangrove scenery, and sometimes **Purple Island**, a small mangrove-fringed island reachable at low tide and notable for its own layer of ancient pottery-production history.\n\nSelf-driving is possible given Qatar's generally well-maintained road network, but a guided tour removes the navigation and gives historical context the site's relatively sparse on-site signage doesn't fully cover.",
            tourCard: { slug: "from-doha-al-zubarah-fort-tour-via-al-khor", title: "From Doha: Al Zubarah Fort Tour via Al Khor & Purple Island", description: "A full day combining the UNESCO fort with Al Khor and Purple Island along the coastal route.", price: "From $50", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf0a6f0d5079ce7b10e2916a453fa4b09c588e3d97d9f8f92428f3a30fb20adf.png" },
          },
          {
            title: "Who This Trip Is Actually For",
            content: "Al Zubarah rewards travelers genuinely interested in history and archaeology more than casual sightseers — there's no dramatic standing architecture the way Doha's modern landmarks offer, and much of the site's significance lies in its layout and preservation rather than visually striking structures. For that specific audience, it's one of the most genuinely unique day trips available from Doha, offering something none of the city's other attractions can.\n\nIf history isn't the main draw, the combined Al Khor and Purple Island stops on the same tour route still deliver worthwhile coastal scenery even without a deep interest in the fort itself.",
          },
        ],
        faqs: [
          { q: "What is Al Zubarah Fort known for?", a: "It's part of Qatar's only UNESCO World Heritage Site, recognizing the exceptional preservation of an 18th/19th-century Gulf pearling and trading town abandoned since the early 20th century." },
          { q: "How far is Al Zubarah from Doha?", a: "Roughly 100 km northwest, making it a half-day to full-day round trip depending on time spent on-site and what else is combined with it." },
          { q: "What else can I see on the way to Al Zubarah?", a: "Most tours combine it with Al Khor, a coastal town with its own fishing harbor, and sometimes Purple Island, a mangrove-fringed island reachable at low tide." },
          { q: "Is Al Zubarah worth visiting if I'm not into history?", a: "It's most rewarding for travelers genuinely interested in archaeology and history — the appeal is in the site's preservation and layout rather than dramatic standing structures." },
        ],
      };

    case "doha-nightlife-guide":
      return {
        title: "Doha Nightlife Guide 2026: What's Actually Available in a Conservative City",
        description: "Doha's nightlife is real but concentrated almost entirely in licensed hotel venues — here's what's genuinely available and what the local rules mean for visitors.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36d45f54b7e2dd71e2a6ccdae226c965958494e982fa81a36bc584b028c1f864.jpg",
        fastFacts: [
          { icon: "AlertTriangle", label: "Key rule", value: "Alcohol is only available in licensed hotel bars, restaurants and specific venues — not sold in regular shops" },
          { icon: "Building2", label: "Where it happens", value: "West Bay and Pearl-Qatar hotel rooftop bars and lounges are the main nightlife concentration" },
          { icon: "Moon", label: "Evening alternative", value: "Souq Waqif's restaurant terraces and a sunset dhow cruise are the strongest non-bar evening options" },
          { icon: "Shirt", label: "Dress and conduct", value: "More conservative norms than many destinations; public displays of affection and intoxication are best avoided" },
        ],
        sections: [
          {
            title: "The Core Rule: Alcohol Is Hotel-Venue-Only",
            content: "Qatar is a conservative country where **alcohol sales are restricted to licensed venues** — primarily international hotel bars, restaurants and a handful of specific standalone venues — rather than being available in regular shops, supermarkets or most standalone restaurants. This isn't a minor technicality; it's the single rule that shapes where Doha's nightlife actually happens, concentrating it almost entirely into hotel properties rather than a standalone bar district or nightlife strip the way many cities have.\n\nVisitors used to casual street-level bar culture elsewhere should recalibrate expectations: a 'night out' in Doha generally means a specific hotel's rooftop bar or lounge, booked or walked into directly, rather than wandering between venues.",
          },
          {
            title: "Where the Real Nightlife Concentration Is",
            content: "**West Bay**'s international five-star hotels house most of Doha's rooftop bars and lounges, many with skyline or bay views as part of the draw, and **The Pearl-Qatar**'s Porto Arabia marina adds a handful of waterfront restaurant-bars with a more relaxed, less hotel-lobby feel. These venues generally welcome non-hotel-guests, so staying elsewhere doesn't lock you out, but checking a specific venue's access policy (some skew private-event or members-focused on given nights) before heading over avoids a wasted trip.\n\nDress codes at these venues tend to be smart-casual at minimum, stricter than Doha's daytime norms.",
          },
          {
            title: "The Stronger Non-Bar Evening Options",
            content: "For an evening that doesn't center on alcohol at all, **Souq Waqif**'s restaurant terraces genuinely come alive after dark with a lively, family-friendly atmosphere that functions as Doha's closest equivalent to a nightlife district, just built around food and shisha cafés rather than bars. A **sunset dhow cruise** is the other strong evening option, delivering a clear visual and experiential payoff (the lit-up skyline from the water) without needing a licensed venue at all.\n\nGeneral public conduct norms are more conservative than many destinations — public intoxication and public displays of affection are best avoided regardless of venue, and this matters more in Doha than in many other nightlife-friendly cities.",
            tourCard: { slug: "doha-traditional-dhow-sunset-cruise-with-optional", title: "Doha: Traditional Dhow Sunset Cruise with Optional Dinner", description: "A strong non-bar evening option with the lit-up skyline as the payoff.", price: "From $24", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg" },
          },
        ],
        faqs: [
          { q: "Can you drink alcohol in Doha?", a: "Only in licensed venues — primarily international hotel bars, restaurants and a few specific standalone venues. It isn't sold in regular shops or most standalone restaurants." },
          { q: "Where is Doha's nightlife concentrated?", a: "West Bay's hotel rooftop bars and lounges, and The Pearl-Qatar's Porto Arabia marina restaurant-bars, are the two main concentrations." },
          { q: "What can I do in the evening if I don't want a bar scene?", a: "Souq Waqif's restaurant terraces, lively and family-friendly after dark, and a sunset dhow cruise are both strong non-bar evening options." },
          { q: "Are there dress codes at Doha's hotel bars?", a: "Generally smart-casual at minimum, stricter than the city's daytime dress norms." },
        ],
      };

    case "zekreet-film-city-guide":
      return {
        title: "Zekreet & Film City Guide 2026: Qatar's Desert Rock Formations and Abandoned Movie Set",
        description: "Zekreet's eroded limestone formations and a genuinely abandoned purpose-built movie set make Qatar's west coast one of its strangest, most photogenic day trips.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f577e335f7e25ee5db7f297ffdcf32c188220e96846340996bf9a6bd7d26d3f.jpeg",
        fastFacts: [
          { icon: "Mountain", label: "Zekreet landscape", value: "Eroded limestone rock formations rising from flat desert, including the mushroom-shaped Zekreet rock" },
          { icon: "Film", label: "Film City", value: "A purpose-built, now-abandoned movie set standing alone in the open desert" },
          { icon: "MapPin", label: "Location", value: "Qatar's west coast, roughly an hour-plus drive from Doha" },
          { icon: "Camera", label: "Best for", value: "Photography — both sites are among the most visually distinctive stops outside the city" },
        ],
        sections: [
          {
            title: "Zekreet's Rock Formations: A Landscape Unlike Anywhere Else in Qatar",
            content: "The **Zekreet peninsula** on Qatar's west coast holds a cluster of **eroded limestone rock formations**, shaped over millennia by wind and water into dramatic, often mushroom-like or pedestal shapes rising abruptly from otherwise flat desert — a landscape genuinely unlike the dune fields most visitors associate with Qatar's desert. The area also hosts rotating large-scale outdoor art installations as part of Qatar Museums' broader public art program, adding a contemporary layer on top of the natural geology.\n\nThe formations are scattered enough that a guided visit, rather than a self-navigated stop, helps make sure you actually find the most striking examples rather than missing them in the open terrain.",
          },
          {
            title: "Film City: An Abandoned Movie Set, Genuinely Standing Alone in the Desert",
            content: "**Film City (also known as Shahaniya Village or the Qatar Film City)** is a purpose-built set resembling a traditional Arabian village, constructed for film and television production use and now largely abandoned, standing isolated in the open desert with no surrounding development. Walking through its empty buildings and recognizing it as a constructed set rather than a genuine historic village gives it a specific, slightly eerie atmosphere that's become a popular stop for photographers and anyone drawn to abandoned-places curiosity.\n\nIt sits near Shahaniya, making a combined Film-City-and-village stop a natural single addition to a west-coast day trip.",
            tourCard: { slug: "film-city-and-shahaniya-village-tour", title: "Film City and Shahaniya Village Tour", description: "A guided visit to the abandoned movie set and the nearby village.", price: "From $272", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/abb596632cacaf56fbca86fe31cb2db193b373a53fe196e6f579e1fc83fa4f16.jpg" },
          },
          {
            title: "Planning the Trip from Doha",
            content: "Zekreet and Film City sit on Qatar's **west coast**, a drive of a little over an hour from Doha, and most tours combine both sites along with the drive's own scenery into a single half-day or full-day west-coast adventure. Morning departures work best for photography, since the low-angle light flatters both the rock formations' texture and the movie set's weathered, sun-bleached look.\n\nBring water and sun protection regardless of season — there's minimal shade at either site, and the open desert terrain offers no natural shelter from the sun at any time of year.",
            tourCard: { slug: "doha-west-coast-adventure-zekreet-rock-formations", title: "Doha: West Coast Adventure: Zekreet, Rock Formations / Serra", description: "A guided west-coast day covering Zekreet's rock formations and public art installations.", price: "From $77", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f577e335f7e25ee5db7f297ffdcf32c188220e96846340996bf9a6bd7d26d3f.jpeg" },
          },
        ],
        faqs: [
          { q: "What are the Zekreet rock formations?", a: "Eroded limestone formations on Qatar's west coast, shaped by wind and water into dramatic, often mushroom-like shapes rising from flat desert — a landscape distinct from Qatar's dune fields." },
          { q: "What is Film City in Qatar?", a: "A purpose-built, now largely abandoned movie set resembling a traditional Arabian village, constructed for film and TV production and standing alone in the open desert near Shahaniya." },
          { q: "How far is Zekreet from Doha?", a: "A little over an hour's drive on Qatar's west coast, usually combined with Film City and other west-coast stops into a half-day or full-day trip." },
          { q: "Is there shade at Zekreet or Film City?", a: "Very little at either site — bring water and sun protection regardless of season, since the open desert terrain offers no natural shelter." },
        ],
      };

    case "doha-islamic-architecture-guide":
      return {
        title: "Doha Islamic Architecture Guide 2026: MIA, Katara Mosque and the City's Modern Mosques",
        description: "From I.M. Pei's geometric Museum of Islamic Art to Katara's golden-mosaic mosque, Doha's modern Islamic architecture is one of the city's most underrated draws.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Signature building", value: "The Museum of Islamic Art, designed by I.M. Pei drawing on centuries of Islamic architectural motifs" },
          { icon: "Building2", label: "Most photographed mosque", value: "Katara Mosque, known for its distinctive golden mosaic minaret" },
          { icon: "Compass", label: "What makes it distinctive", value: "Doha blends traditional Islamic motifs into thoroughly modern structures rather than literal historic reproduction" },
          { icon: "Camera", label: "Best for", value: "Architecture-focused photography across both religious and secular buildings" },
        ],
        sections: [
          {
            title: "The Museum of Islamic Art: Modern Form, Historic Reference",
            content: "The **Museum of Islamic Art**, designed by **I.M. Pei**, translates centuries of Islamic architectural motifs — geometric patterning, deliberate plays of light through a central atrium, domed and fortress-like massing drawing partly on Cairo's Ahmad ibn Tulun Mosque — into a thoroughly modern limestone structure rather than a literal historic reproduction, sitting isolated on its own island to let the building's geometry read clearly against open water. It's arguably Doha's clearest statement of what contemporary Islamic-influenced architecture looks like when designed by a world-class modernist architect rather than built in a purely traditional style.",
          },
          {
            title: "Katara Mosque and the City's Religious Architecture",
            content: "**Katara Mosque**, within Katara Cultural Village, is one of Doha's most photographed religious buildings specifically for its **golden mosaic minaret**, a striking departure from the more muted stone and plaster finishes typical of mosque architecture across the wider Gulf region, and it functions as both an active place of worship and a notable piece of contemporary design. Elsewhere in the city, mosques tend to blend traditional Islamic forms — domes, minarets, geometric tilework — with the same modern materials and construction techniques shaping Doha's secular architecture, part of why the city's religious buildings don't read as disconnected from its broader architectural identity the way historic mosques sometimes can in older cities.",
            tourCard: { slug: "doha-secrets-luxury-souq-alleys-katara-gewan", title: "Doha Secrets & Luxury: Souq Alleys, Katara & Gewan Island", description: "A guided loop through Katara, including its distinctive mosque architecture.", price: "From $260", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e8d684fcbd3565a01574d9fea12f9e7648f0d0fb20e5f98525c19a3b3c49c8c.jpeg" },
          },
          {
            title: "Seeing It as a Single Architecture-Focused Day",
            content: "A dedicated architecture day works well in Doha precisely because the city's best examples — MIA, Katara Mosque, West Bay's distinctive tower silhouettes, and Souq Waqif's deliberately traditional mud-and-wood reconstruction — sit close enough together to combine without a long drive between any of them. Morning light suits MIA's limestone exterior best, while Katara's golden mosaic minaret photographs especially well in the lower, warmer light of late afternoon.\n\nA guided city tour that specifically frames stops around architecture and design, rather than a generic sightseeing loop, gets more out of this if architectural history is your main interest.",
          },
        ],
        faqs: [
          { q: "What makes the Museum of Islamic Art architecturally significant?", a: "Designed by I.M. Pei, it translates centuries of Islamic architectural motifs into a thoroughly modern limestone structure, sitting isolated on its own island, rather than a literal historic reproduction." },
          { q: "Why is Katara Mosque famous?", a: "For its distinctive golden mosaic minaret, a striking departure from the more muted stone and plaster finishes typical of mosque architecture across the wider Gulf region." },
          { q: "Can you visit Doha's mosques as a non-Muslim tourist?", a: "Many mosques welcome respectful visitors outside prayer times with modest dress, though policies vary by mosque — check current visitor access before planning a visit specifically built around interior viewing." },
          { q: "What's the best time of day to photograph Doha's Islamic architecture?", a: "Morning light suits the Museum of Islamic Art's limestone exterior best, while Katara Mosque's golden mosaic minaret photographs especially well in late-afternoon light." },
        ],
      };

    case "doha-falcon-souq-guide":
      return {
        title: "Doha Falcon Souq Guide 2026: Falconry Culture, Live Falcons and Visiting Etiquette",
        description: "Souq Waqif's falcon souq section is a genuinely active trading market for a sport deeply embedded in Qatari culture, not a tourist-only attraction — here's how to visit respectfully.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg",
        fastFacts: [
          { icon: "Bird", label: "What it is", value: "A dedicated section of Souq Waqif trading in falconry equipment and live falcons" },
          { icon: "MapPin", label: "Location", value: "Within Souq Waqif, a short walk from the market's main covered lanes" },
          { icon: "Compass", label: "Cultural context", value: "Falconry remains an actively practiced traditional sport in Qatar, not a museum-piece tradition" },
          { icon: "Camera", label: "Visitor experience", value: "Some shops offer a photo-with-a-falcon experience; shop owners are generally happy to explain the sport" },
        ],
        sections: [
          {
            title: "A Genuinely Active Market, Not a Tourist Replica",
            content: "The **falcon souq**, a dedicated section within Souq Waqif, is a real, ongoing trading market for falconry equipment and birds, reflecting falconry's deep and still-active standing across Qatar and the wider Gulf as a traditional hunting sport that genuinely continues today rather than existing only as cultural heritage. Shops here sell hoods, gloves, leashes, perches and scales alongside, in dedicated outlets, live falcons themselves, and the prices on serious falconry equipment and birds can run genuinely high, reflecting the sport's status as a prestige pursuit in local culture.\n\nThis matters for how visitors should approach it: it's worth treating as a working market with its own serious customers, not purely a photo-op curated for tourists, even though it's become a popular visitor stop in its own right.",
          },
          {
            title: "What to Expect as a Visitor",
            content: "Even without buying anything, walking through the falcon souq and seeing hooded falcons perched in shop windows is one of the more distinctive sights anywhere in Doha, and shop owners are generally welcoming to curious visitors, often happy to explain the sport's history, the care involved in training a falcon, and the significance of different falcon breeds. Some shops offer a **photo-with-a-falcon experience** for a small fee, a popular stop even for visitors with no deeper interest in falconry itself, and it's worth asking first rather than assuming photography is automatically welcome in every shop.\n\nA guided Souq Waqif tour that specifically includes the falcon souq, rather than a generic market walk, tends to add more context on the cultural significance than browsing alone.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "A guided souq walk that can be routed to include the falcon souq section.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
          {
            title: "Falconry's Place in Qatari Culture",
            content: "Falconry in Qatar and the wider Gulf traces back to a traditional Bedouin hunting practice adapted over generations into a prestige sport and cultural identity marker, and it remains genuinely practiced today, including organized falconry events and competitions, rather than surviving only as a tourist-facing cultural display. This context is part of why the falcon souq feels different from a typical souvenir market section — the birds and equipment traded here serve an active sporting culture, not primarily a tourism economy.\n\nVisiting with that context in mind — curious but respectful of a working trade — generally makes for a better interaction with shop owners than treating it as simply another photo stop.",
          },
        ],
        faqs: [
          { q: "What is the falcon souq in Doha?", a: "A dedicated section of Souq Waqif trading falconry equipment and live falcons, reflecting falconry's active, ongoing status as a traditional sport in Qatari and wider Gulf culture." },
          { q: "Can tourists visit the falcon souq?", a: "Yes — it welcomes curious visitors even without buying, and shop owners are generally happy to explain the sport. Some shops offer a paid photo-with-a-falcon experience." },
          { q: "Is falconry still practiced in Qatar today?", a: "Yes — it remains an actively practiced traditional sport with ongoing events and competitions, not a tradition that exists only as cultural heritage or tourism display." },
          { q: "Where is the falcon souq located?", a: "Within Souq Waqif, a short walk from the market's main covered shopping lanes." },
        ],
      };

    case "inland-sea-khor-al-adaid-guide":
      return {
        title: "Khor Al Adaid (The Inland Sea) Guide 2026: Qatar's UNESCO-Recognized Desert Meets Sea",
        description: "Khor Al Adaid is the single most distinctive natural landscape near Doha — where the Gulf's water reaches directly into the desert dunes. Here's how to actually get there and what to expect.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg",
        fastFacts: [
          { icon: "Award", label: "Status", value: "A UNESCO-recognized natural reserve, one of the few places on Earth where a desert meets a sea with no coastline barrier" },
          { icon: "MapPin", label: "Location", value: "Qatar's southeastern coast, roughly 60-90 minutes from Doha by 4x4" },
          { icon: "Car", label: "How to get there", value: "4x4 only — dune bashing across open desert is required to reach it, no standard road access" },
          { icon: "Compass", label: "What to do there", value: "Swimming, photography, a shoreline walk, sometimes a picnic lunch with dunes rising from the water" },
        ],
        sections: [
          {
            title: "A Genuinely Rare Landscape: No Barrier Between Desert and Sea",
            content: "**Khor Al Adaid**, commonly known in English as the **Inland Sea**, is a UNESCO-recognized natural inlet where the waters of the Arabian Gulf reach directly into the heart of Qatar's southern desert, with towering sand dunes rising immediately from the water's edge and no coastline, reef or barrier of any kind separating the two — a configuration genuinely rare worldwide and the specific reason this corner of Qatar has any tourism infrastructure built around it at all. The dunes here are also among the tallest and most dramatic in the country, part of what makes the dune-bashing drive to reach the Inland Sea as significant an experience as the destination itself.\n\nThe area sits within a protected nature reserve, home to some native desert and marine wildlife, and its remoteness — no roads, no permanent settlement — is central to what makes it feel genuinely different from anywhere else near Doha.",
          },
          {
            title: "Getting There: 4x4 and Dune Bashing Required",
            content: "There is **no standard road access** to Khor Al Adaid — reaching it requires a **4x4 vehicle driven across open desert**, typically a drive of roughly 60-90 minutes south from Doha, with the dune-bashing stretch itself (steep dune crests and drops navigated by an experienced driver) forming a core part of the journey rather than a separate add-on activity. This is why visiting the Inland Sea almost always means booking an organized desert safari rather than attempting independent travel — the terrain genuinely requires a capable vehicle and an experienced driver who knows the route.\n\nMost operators combine the Inland Sea stop with other desert sights along the same route, such as the 'singing dunes' (sand formations known for producing an audible sound as wind moves across them) or a desert camp.",
            tourCard: { slug: "from-doha-singing-dunes-and-khor-al-adaid-desert", title: "From Doha: Singing Dunes and Khor Al Adaid Desert Tour", description: "A desert tour combining the singing dunes with the Inland Sea itself.", price: "From $52", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd7ec2066806fb87bcfd64c29fc5d4ec37741c1703de2b6e2b3846f9af565cf0.jpeg" },
          },
          {
            title: "What to Actually Do Once You're There",
            content: "Once at the Inland Sea, most itineraries allow time for **swimming** directly off the dunes into the Gulf's warm, calm water, photography of the striking dune-meets-sea landscape, and a shoreline walk, with some packages including a **picnic lunch** served with the dunes rising directly behind you. The water here tends to be shallower and calmer than open coastline elsewhere in Qatar, making it a relatively easy, low-effort swim stop rather than requiring strong swimming ability.\n\nTiming matters: winter and the cooler shoulder months make the full experience (dune bashing, swimming, time outdoors at the water's edge) comfortable at almost any hour, while summer visits are better scheduled for morning, late afternoon or as part of a night safari to avoid the most dangerous midday heat.",
          },
        ],
        faqs: [
          { q: "What is Khor Al Adaid (the Inland Sea)?", a: "A UNESCO-recognized natural inlet in southern Qatar where the Gulf's water reaches directly into the desert dunes with no coastline barrier — one of the few places in the world with this exact landscape configuration." },
          { q: "How do you get to the Inland Sea from Doha?", a: "Only by 4x4, driven across open desert with a dune-bashing stretch required to reach it — there's no standard road access, which is why it's almost always visited as part of an organized desert safari." },
          { q: "Can you swim at the Inland Sea?", a: "Yes — most desert safari packages include swimming time directly off the dunes into the Gulf's calm, warm water, along with photography and sometimes a picnic lunch." },
          { q: "How far is Khor Al Adaid from Doha?", a: "Roughly 60-90 minutes by 4x4, including the dune-bashing portion of the drive, which forms part of the overall experience rather than just transit time." },
        ],
      };

    case "doha-ramadan-travel-guide":
      return {
        title: "Doha Ramadan Travel Guide 2026: What Actually Changes for Visitors",
        description: "Ramadan shifts restaurant hours, public conduct norms and the city's rhythm significantly — here's exactly what to expect if your Doha trip overlaps the holy month.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ae23113f8999cedfed3e9b535ecc017bb7491054129cd53ea2ee93a6f80964f.jpeg",
        fastFacts: [
          { icon: "Moon", label: "Key fact", value: "Ramadan dates shift each year on the Islamic lunar calendar — check the current year's dates before booking" },
          { icon: "UtensilsCrossed", label: "Daytime dining", value: "Many restaurants close or reduce hours during daylight fasting hours, reopening for iftar at sunset" },
          { icon: "Clock", label: "Business hours", value: "Many offices, shops and government services shift to shorter hours during the month" },
          { icon: "Shirt", label: "Public conduct", value: "Eating, drinking or smoking visibly in public during daylight hours is discouraged out of respect, even for non-fasting visitors" },
        ],
        sections: [
          {
            title: "Why Ramadan Timing Matters More in Qatar Than It Might Elsewhere",
            content: "**Ramadan**, the Islamic holy month of daytime fasting observed by practicing Muslims, falls on different dates each year because it follows the lunar Islamic calendar rather than the fixed Gregorian calendar — a roughly 10-11 day shift earlier each successive year, so the specific dates for any given year need checking fresh rather than assumed from a previous trip. Qatar, as a Muslim-majority country where fasting is widely observed, shifts noticeably during this month in ways that genuinely affect a visitor's day-to-day experience, more so than in destinations where the observance is less universal.",
          },
          {
            title: "Restaurant Hours and Where to Actually Eat During the Day",
            content: "**Many restaurants close or significantly reduce hours during daylight fasting hours**, reopening in the evening for **iftar**, the meal breaking the fast at sunset, which brings a noticeably livelier, more festive atmosphere to the city after dark than during the rest of the year — Souq Waqif in particular becomes busier and more celebratory in the evenings throughout Ramadan. During the day, hotel restaurants are the most reliable option for non-fasting visitors, often serving guests in designated areas away from public view, though this isn't guaranteed at every property, so checking ahead with your specific hotel is worth doing.\n\nEating, drinking or smoking visibly in public spaces during daylight fasting hours is generally discouraged out of respect, even for visitors not observing the fast themselves — this applies to places like malls' public areas and streets, not just religious sites.",
          },
          {
            title: "What Still Works Well During Ramadan, and What to Skip",
            content: "Indoor sights like the **Museum of Islamic Art** generally operate on adjusted but still reasonable hours, and evening activities — **Souq Waqif after iftar**, a **sunset dhow cruise**, Katara's evening programming — are genuinely at their best during Ramadan, arguably better than the rest of the year given the heightened evening energy. Daytime outdoor activities like a midday desert safari are worth reconsidering regardless of season, since many desert safari operators themselves also adjust their own operating schedules around the month.\n\nIf avoiding Ramadan's hour shifts and dining restrictions entirely is the priority, plan travel just before or after the month rather than attempting to work around it — but travelers specifically interested in the cultural experience of Ramadan evenings may find it adds a genuinely distinctive layer to a Doha trip.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "An evening souq tour, well timed to Ramadan's livelier after-iftar atmosphere.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
        ],
        faqs: [
          { q: "Do Ramadan dates change every year?", a: "Yes — Ramadan follows the lunar Islamic calendar, shifting roughly 10-11 days earlier each successive Gregorian year, so check the specific dates for your travel year rather than assuming from a previous trip." },
          { q: "Can tourists eat during the day in Doha during Ramadan?", a: "Hotel restaurants are the most reliable option, often serving non-fasting guests in designated areas, though this isn't guaranteed everywhere — check with your specific hotel. Eating visibly in public during daylight hours is discouraged out of respect." },
          { q: "Is Doha a good place to visit during Ramadan?", a: "Evenings are genuinely vibrant — Souq Waqif and other spots come alive after iftar — but daytime dining and business hours are more restricted, so it suits travelers specifically interested in that cultural rhythm more than those wanting an unrestricted daytime schedule." },
          { q: "Do museum and attraction hours change during Ramadan?", a: "Many adjust to shorter or shifted hours during the month — check specific opening times for attractions like the Museum of Islamic Art before visiting during Ramadan." },
        ],
      };

    case "doha-weekend-guide":
      return {
        title: "Doha Weekend Guide 2026: A Friday-Saturday Itinerary That Actually Works",
        description: "Qatar's weekend runs Friday-Saturday, not the Western Saturday-Sunday — here's how to structure a short Doha weekend around the city's real rhythm.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/202cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg",
        fastFacts: [
          { icon: "Calendar", label: "The weekend", value: "Friday-Saturday, not Saturday-Sunday — this shifts business hours and Friday mosque timing" },
          { icon: "Clock", label: "Friday mornings", value: "Many businesses open later on Fridays; Friday midday is mosque prayer time citywide" },
          { icon: "Compass", label: "Best two-day split", value: "Cultural core (MIA, souq, Corniche) on one day, a half-day desert safari on the other" },
          { icon: "Moon", label: "Evening strength", value: "Both Friday and Saturday evenings are genuinely lively across Souq Waqif and the marina districts" },
        ],
        sections: [
          {
            title: "Understanding Qatar's Friday-Saturday Weekend",
            content: "Qatar, like much of the Gulf region, runs its weekend **Friday-Saturday** rather than the Western Saturday-Sunday, which shifts both business hours and the broader rhythm of the city for anyone planning a short trip around specific days. **Friday mornings** in particular run differently from a typical weekday — many businesses open later, and **Friday midday** is the week's main mosque prayer time, which affects visiting hours at active mosques like the Katara Mosque and closes some religious sites to non-worshipping visitors during that specific window.\n\nIf your weekend trip includes a Friday, build mosque-adjacent sightseeing around the midday prayer closure rather than scheduling it directly into that window.",
          },
          {
            title: "A Two-Day Split That Actually Works",
            content: "For a short Friday-Saturday weekend, splitting the trip into a **cultural city day** (Museum of Islamic Art, Souq Waqif, the Corniche) and a **half-day desert safari** on the other day gives a genuine sense of both sides of Doha without overpacking either day. The desert safari day works well scheduled for the morning or afternoon depending on season, leaving the evening free for Souq Waqif or a sunset dhow cruise regardless of which day you choose for it.\n\nThis split also hedges against Friday's shifted business hours — if the desert safari falls on Friday, it sidesteps the midday mosque-closure consideration entirely, since it takes place outside the city.",
            tourCard: { slug: "doha-budget-friendly-desert-safari-with-dune", title: "Doha: Budget-Friendly Desert Safari with Dune Bashing", description: "A half-day desert safari that fits easily into one half of a short weekend.", price: "From $19", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ecaf6343c8b14f45ccc01475cfa91710fd7fcd15dca19bc95414b631871a03c.png" },
          },
          {
            title: "Both Evenings Are Genuinely Strong",
            content: "Unlike some cities where weekend evenings skew unevenly toward one specific night, both **Friday and Saturday evenings** in Doha are genuinely lively — Souq Waqif's restaurant terraces, West Bay's hotel bars and The Pearl-Qatar's marina restaurants all run at full energy across both nights, so there's no need to front-load your best evening plans into a single night out of caution. A sunset dhow cruise works equally well on either evening, making it a flexible addition to whichever day has more free time once the rest of the weekend is planned.",
          },
        ],
        faqs: [
          { q: "What days is the weekend in Qatar?", a: "Friday-Saturday, not the Western Saturday-Sunday. This shifts business hours, and Friday midday is the main weekly mosque prayer time citywide." },
          { q: "Does Friday affect sightseeing in Doha?", a: "Yes — many businesses open later on Friday mornings, and active mosques close to non-worshipping visitors during Friday midday prayers specifically." },
          { q: "How should I split a short Doha weekend?", a: "A cultural city day (MIA, Souq Waqif, the Corniche) paired with a half-day desert safari on the other day gives a genuine sense of both sides of the city without overpacking either." },
          { q: "Are both weekend evenings good for nightlife in Doha?", a: "Yes — Friday and Saturday evenings are both genuinely lively across Souq Waqif, West Bay's hotel bars and The Pearl-Qatar's marina restaurants." },
        ],
      };

    case "doha-airport-stopover-guide":
      return {
        title: "Doha Airport Stopover Guide 2026: Making the Most of a Qatar Airways Layover",
        description: "Hamad International Airport's hub status means many travelers pass through Doha on a layover without planning to — here's how to actually use that time well.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/29076eaf0916d243832851ae706fa2fe41579dd676c7606fa1b6508cd156122a.jpg",
        fastFacts: [
          { icon: "Plane", label: "Why it happens", value: "Qatar Airways routes huge volumes of long-haul traffic through Hamad International Airport, creating frequent layovers" },
          { icon: "Clock", label: "Minimum for a city stop", value: "A layover of roughly 6+ hours (with the right visa status) makes a short city tour realistic" },
          { icon: "FileText", label: "Visa check first", value: "Confirm your nationality's visa-on-arrival status before planning to leave the airport" },
          { icon: "Compass", label: "Best short-stop sights", value: "Souq Waqif, the Corniche and the Museum of Islamic Art's exterior all work within a few hours" },
        ],
        sections: [
          {
            title: "Why So Many Travelers End Up With a Doha Layover",
            content: "**Qatar Airways** operates Hamad International Airport as a major long-haul hub, routing significant volumes of traffic between Europe, the Americas, Africa, Asia and Australia through Doha specifically because of its geographically central position relative to all of these regions — which means a meaningful share of travelers flying Qatar Airways on a long-haul route pass through Doha not as a destination choice but simply as how the routing works. For many of these travelers, a Doha stopover is their first and possibly only exposure to the city, worth planning for rather than treating purely as dead time in a terminal.",
          },
          {
            title: "Checking Whether You Can Actually Leave the Airport",
            content: "Before planning any time outside the terminal, **confirm your nationality's visa status** — most nationalities get a free visa on arrival, which covers a stopover leaving the airport without issue, but the smaller list of nationalities requiring advance booking through Discover Qatar (see our Qatar visa guide) complicates a spontaneous city stop considerably. Qatar Airways itself offers a stopover program for eligible passengers that can include hotel stays for longer layovers, worth checking when booking the flight itself rather than figuring out on arrival.\n\nA layover of roughly **6 hours or more**, accounting for immigration, transit time and getting back through security, is the realistic minimum for a worthwhile short city stop rather than a rushed dash.",
            tourCard: { slug: "doha-stopover-transit-tour-with-airport-pickup", title: "Doha: Stopover & Transit Tour with Airport Pickup & Drop-Off", description: "A guided tour built specifically around layover timing, with airport transfers handled.", price: "From $45", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/29076eaf0916d243832851ae706fa2fe41579dd676c7606fa1b6508cd156122a.jpg" },
          },
          {
            title: "What Actually Fits in a Short Stopover",
            content: "Within a short window, **Souq Waqif**, the **Corniche** and the **Museum of Islamic Art**'s exterior and surrounding park give a genuine taste of the city without requiring the full day a complete sightseeing itinerary would need — a guided stopover tour with airport pickup and drop-off removes the logistics risk of timing your own return, which matters more here than on a leisurely multi-day trip where missing a single connection isn't catastrophic.\n\nFor a longer layover (12+ hours or an overnight), adding a short Corniche sunset walk or a quick dhow cruise to the souq-and-MIA combination rounds out the stop without overreaching into a full desert safari, which needs more buffer time than most layovers comfortably allow.",
          },
        ],
        faqs: [
          { q: "Can I leave Doha airport during a layover?", a: "Yes, for most nationalities with visa-on-arrival status — check your specific nationality's requirement first, since a smaller list of nationalities need advance booking through Discover Qatar instead." },
          { q: "How long of a layover do I need to see Doha?", a: "Roughly 6 hours or more, accounting for immigration, transit and return security time, is the realistic minimum for a worthwhile short city stop." },
          { q: "What can I see in a short Doha stopover?", a: "Souq Waqif, the Corniche and the Museum of Islamic Art's exterior and park all fit comfortably within a few hours, especially with a guided tour handling airport transfers." },
          { q: "Does Qatar Airways offer stopover packages?", a: "Yes — Qatar Airways runs a stopover program for eligible passengers, which can include hotel stays for longer layovers. Check it when booking your flight." },
        ],
      };

    case "best-tours-in-doha":
      return {
        title: "Best Tours in Doha — 2026, Honestly Compared",
        seoTitle: "Best Tours in Doha 2026: Top-Rated Picks by Category",
        description: "The best Doha tours for 2026, picked by category — the Museum of Islamic Art, Souq Waqif, a desert safari to the Inland Sea, and a Corniche sunset dhow cruise — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "The **Museum of Islamic Art**, designed by I.M. Pei, is Doha's single most significant landmark — a guided city tour built around it folds in the Corniche and West Bay skyline views too.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "doha-guided-city-tour-with-museum-of-islamic-art", title: "Doha: Guided City Tour with Museum of Islamic Art Visit", description: "A guided city loop built around MIA, with the Corniche and skyline views folded in.", price: "From $46", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg" },
          },
          {
            title: "Best Market Experience: Souq Waqif",
            content: "**Souq Waqif**, a restored traditional market of narrow covered lanes, is Doha's most atmospheric place to shop and eat — a guided food walk through its lanes is timed for the Corniche skyline at its best.",
            tourCard: { slug: "doha-souq-waqif-traditional-food-tour-with", title: "Doha: Souq Waqif Traditional Food Tour with Skyline Views", description: "A guided food walk through Souq Waqif's lanes, timed for the Corniche skyline at its best.", price: "From $71", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cab29b2b52f9ebf0f406d1a14f73ea0daa20f7124e88bd43053521f5b7d0fbf.jpeg" },
          },
          {
            title: "Best Desert Experience: the Inland Sea",
            content: "A **4x4 desert tour to Khor Al Adaid (the Inland Sea)**, a UNESCO-recognized reserve where the desert meets the sea with no barrier, is the one Doha experience that genuinely requires leaving the city — dune bashing, often paired with camel rides or sandboarding.",
            tourCard: { slug: "from-doha-khor-al-adaid-inland-sea-4x4-desert", title: "From Doha: Khor Al Adaid & Inland Sea 4x4 Desert Tour", description: "A full desert and Inland Sea run by 4x4, the single trip outside the city most visitors prioritize.", price: "From $78", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg" },
          },
          {
            title: "Best Evening Experience: Corniche Sunset Cruise",
            content: "A **traditional dhow sunset cruise** past the West Bay towers is often the single most-photographed view in the city once the skyline lights up after dark — the best way to close a day in Doha.",
            tourCard: { slug: "doha-traditional-dhow-sunset-cruise-with-optional", title: "Doha: Traditional Dhow Sunset Cruise with Optional Dinner", description: "A sunset cruise past the West Bay skyline that closes a full day without extra planning.", price: "From $24", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c79071ddb93a209cbadc7f3b633f6133a15bfa3dedb17afb96a715c938e049e5.jpeg" },
          },
          {
            title: "Best for a Layover: Stopover Tour",
            content: "A **stopover and transit tour with airport pickup** is built for Doha's huge transit traffic — a guided first look at the city timed around a layover, so you don't need to plan anything yourself.",
            tourCard: { slug: "doha-stopover-transit-tour-with-airport-pickup", title: "Doha: Stopover & Transit Tour with Airport Pickup & Drop-Off", description: "A guided first look at the city timed around a layover, airport pickup included.", price: "From $45", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/29076eaf0916d243832851ae706fa2fe41579dd676c7606fa1b6508cd156122a.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Doha tours](/qatar/doha)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Doha?", a: "A guided city tour built around the Museum of Islamic Art, folding in the Corniche and West Bay skyline views." },
          { q: "What is the best desert experience from Doha?", a: "A 4x4 tour to Khor Al Adaid (the Inland Sea), a UNESCO-recognized reserve where the desert meets the sea with no barrier." },
          { q: "What is the best evening activity in Doha?", a: "A traditional dhow sunset cruise past the West Bay towers — often the single most-photographed view in the city once it's lit up after dark." },
          { q: "Is there a good tour for a Doha layover?", a: "Yes — a stopover and transit tour with airport pickup is built exactly for Doha's huge transit traffic." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Doha?", "acceptedAnswer": { "@type": "Answer", "text": "A guided city tour built around the Museum of Islamic Art, with the Corniche and skyline views folded in." } },
                { "@type": "Question", "name": "What is the best desert experience from Doha?", "acceptedAnswer": { "@type": "Answer", "text": "A 4x4 tour to Khor Al Adaid, the Inland Sea, where the desert meets the sea with no barrier." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Museum of Islamic Art + City Tour' },
          { icon: 'Map', label: 'Best Desert Trip', value: 'Khor Al Adaid Inland Sea' },
          { icon: 'Sunset', label: 'Best Evening', value: 'Dhow Sunset Cruise' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-doha-tour-direct-or-through-app":
      return {
        title: "Should You Book a Doha Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Doha Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Doha.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6c79b6b925263a2b6cd4880b16c089bd9bc7195fb62e4a55132a3248954f2de.jpeg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Doha tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA Khor Al Adaid desert tour or a layover stopover tour involves real logistics — exact airport pickup timing for a transit traveller, dune-bashing comfort for a nervous passenger. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "from-doha-khor-al-adaid-inland-sea-4x4-desert", title: "From Doha: Khor Al Adaid & Inland Sea 4x4 Desert Tour", description: "Ask about dune-bashing comfort for a nervous passenger before you book.", price: "From $78", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b90cf497acfec171428d65cce1d7576ced2db4c7599284ca2eb9ac9b2aebdef1.jpeg" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the tour. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number found through a hotel desk is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the layover tour or the sunset cruise would know — the exact airport pickup window for a tight connection, or whether the dhow cruise has a dinner option. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Doha tour — the [best tours in Doha](/qatar/doha/best-tours-in-doha), the Khor Al Adaid desert tour, the Corniche sunset cruise — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Doha; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "doha-stopover-transit-tour-with-airport-pickup", title: "Doha: Stopover & Transit Tour with Airport Pickup & Drop-Off", description: "Ask about the exact pickup window for a tight connection before booking.", price: "From $45", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/29076eaf0916d243832851ae706fa2fe41579dd676c7606fa1b6508cd156122a.jpg" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Doha tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book Doha tours direct with an operator?", a: "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Doha tour operator is legit before booking?", a: "Message them a specific question — an airport pickup window for a tight connection, a dune-bashing comfort concern — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Doha tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Doha tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Doha tours direct with an operator?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Doha tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Doha tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    default:
      return null;
  }
}
