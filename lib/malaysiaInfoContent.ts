// Malaysia authority pages — batch 1 (2026-10). Same CityInfoData shape as
// lib/thailandInfoContent.ts. Called from getCityInfoContent's default case
// so all existing imports keep working.
import type { CityInfoData } from './cityInfoContent';

export function getMalaysiaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {

        // ============ KUALA LUMPUR ============

        case "best-time-to-visit-kuala-lumpur":
            return {
                title: "Best Time to Visit Kuala Lumpur: Weather, Haze Season & Festival Guide (2026)",
                description: "KL is hot and humid year-round with no real dry season. Here's what actually changes month to month: the Sumatra haze window, monsoon rain patterns, and the festivals worth planning around.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1428644/img0/1600.webp",
                sections: [
                    {
                        title: "There Is No Dry Season — Plan Around Rain Patterns Instead",
                        content: "Kuala Lumpur sits almost exactly on the equator, which means the temperature barely moves across the year — expect 32-34°C by day and 23-25°C at night in every month. There is no cool season and no truly dry one. What changes is how the rain falls, and that's the detail most generic guides skip.\n\nKL gets two monsoon influences. The **Southwest Monsoon (roughly May to September)** brings the city's drier stretch — rain still falls, usually as short, violent afternoon thunderstorms that clear within an hour, leaving the rest of the day fine. The **Northeast Monsoon (October to March)** is wetter and more persistent, with the heaviest, most sustained downpours typically landing around November and December. Flash flooding on low-lying roads (Jalan Tun Razak, parts of Chinatown) is a real, recurring nuisance in this window, not a scare story.\n\nThe practical upshot: there's no month where you should cancel a KL trip over weather, but afternoon thunderstorms are a daily near-certainty whenever you go, so build a 2-3pm indoor buffer (a mall, Batu Caves' covered sections, a museum) into every day's plan rather than fighting it.",
                    },
                    {
                        title: "The Haze Window: July to October",
                        content: "This is the detail that actually matters and most travel sites don't mention it by name. Seasonal agricultural burning in Sumatra and Kalimantan, Indonesia, periodically blows smoke haze across the Strait of Malacca into Peninsular Malaysia, and Kuala Lumpur sits directly in its path. The risk window runs roughly **July through October**, peaking in some years in August-September, and is driven by Indonesia's own dry season — it does not happen every year with the same severity, but in bad years (2015, 2019, 2023 were notable) the API (Air Pollutant Index) climbed into \"unhealthy\" territory for days at a stretch, KLCC Park's skyline view of the Petronas Towers disappeared into grey haze, and outdoor activities became genuinely unpleasant for anyone with respiratory sensitivity.\n\nThere's no way to predict a specific year's haze severity months out, so the realistic approach is: if your trip falls in this window, check Malaysia's Department of Environment API readings a week or two before you fly, and have an indoor backup plan (malls, museums, the Petronas Towers' own indoor observation deck) rather than banking on open-air sightseeing.",
                        tourCard: { slug: "kuala-lumpur-petronas-twin-towers-klcc-park", title: "Kuala Lumpur: Petronas Twin Towers & KLCC Park Photoshoot", description: "The twin towers are the one KL view worth having a backup plan for on a hazy day — this tour gets you the ground-level shot regardless.", price: "From $114", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1428644/img0/1600.webp" }
                    },
                    {
                        title: "Festivals Worth Timing Your Trip Around",
                        content: "**Thaipusam** (late January or early February, date shifts with the lunar calendar) is Malaysia's most visually intense Hindu festival — devotees carrying kavadi (ornate frames pierced through skin) walk in procession to the Batu Caves temple complex, climbing all 272 steps. If you're in KL for this, go to Batu Caves itself rather than central KL; it's the epicentre.\n\n**Ramadan and Hari Raya Aidilfitri** move through the Islamic calendar roughly 10-11 days earlier each year, so check the dates for your travel year specifically. During Ramadan, Muslim-majority eateries run reduced daytime hours and the city's Ramadan bazaars (temporary street-food markets that appear in the late afternoon) are genuinely worth seeking out even if you're not fasting. Hari Raya itself brings a short burst of nationwide travel as Malaysians return to their hometowns, which can mean quieter KL streets and fuller intercity transport.\n\n**Chinese New Year** (late January/February) lights up Chinatown (Petaling Street) with lanterns and lion dances, though many family-run restaurants close for several days around it.",
                    }
                ],
                faqs: [
                    { q: "What is the best month to visit Kuala Lumpur?", a: "There's no single best month weather-wise since KL is hot and rainy year-round, but **June and July** sit in the comparatively drier Southwest Monsoon window before the July-October haze risk peaks. If avoiding haze matters to you, aim for December through April instead." },
                    { q: "What is the haze season in Kuala Lumpur?", a: "Roughly **July to October**, caused by agricultural burning in Sumatra and Kalimantan drifting across the Strait of Malacca. Severity varies hugely year to year — check Malaysia's Department of Environment API readings close to your travel dates rather than assuming the worst." },
                    { q: "Does it rain every day in Kuala Lumpur?", a: "Often, yes, especially October-December — but usually as a short, heavy afternoon thunderstorm rather than all-day rain. Plan outdoor activities for morning and build in a midday indoor buffer." },
                    { q: "Is Kuala Lumpur worth visiting during Ramadan?", a: "Yes, with adjustments — some restaurants have shorter daytime hours, but Ramadan bazaars (evening street-food markets) are one of the best food experiences in the city. Confirm exact dates for your travel year since the Islamic calendar shifts annually." }
                ],
                fastFacts: [
                    { icon: 'Thermometer', label: 'Temperature', value: '32-34°C year-round' },
                    { icon: 'AlertTriangle', label: 'Haze Risk', value: 'July – October' },
                    { icon: 'CloudRain', label: 'Wettest Months', value: 'November – December' }
                ]
            };

        case "things-to-do-in-kuala-lumpur":
            return {
                title: "15 Best Things to Do in Kuala Lumpur (2026 Guide)",
                description: "From the Petronas Towers skybridge to Batu Caves' 272 steps and Jalan Alor's night-market food — the things actually worth your time in KL, honestly ranked.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-803183/img0/1600.webp",
                sections: [
                    {
                        title: "The Headline Sights",
                        content: "**Petronas Twin Towers** — At 451.9 metres, these were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers on Earth. The Skybridge connects the two towers at the 41st-42nd floor; the Observation Deck sits higher, on the 86th floor. Tickets sell out, especially the first morning slots — book several days ahead through the official site or a guided tour, not at the door.\n\n**Batu Caves** — A limestone hill 13km north of the city, reachable by KTM Komuter train from KL Sentral in about 30 minutes. Climb the famous 272 rainbow-painted steps (repainted in 2018, replacing the old grey ones) past long-tailed macaques to the 42.7-metre golden statue of Lord Murugan and the cave temple inside. Entry to the main Temple Cave is free; the Dark Cave further up requires a paid guided tour and is genuinely worth it for the cave biology, not just the Instagram shot.\n\n**KLCC Park** — The green space at the foot of the Petronas Towers, with the best free photo angle of the towers from across the fountain lake, especially at the evening light-and-water show (roughly 8pm and 9pm nightly).",
                        tourCard: { slug: "kuala-lumpur-batu-caves-petronas-towers-guided", title: "Kuala Lumpur: Batu Caves & Petronas Towers Guided Tour", description: "Both headline sights, one guide, no queue guesswork on timed-entry tickets.", price: "From $592", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1366794/img0/1600.webp" }
                    },
                    {
                        title: "Culture, Food & Neighbourhoods",
                        content: "**Bukit Bintang** is KL's main shopping and nightlife spine — Pavilion KL and Fahrenheit88 for malls, Jalan Alor for the city's best-known night-market hawker street.\n\n**Chinatown (Petaling Street)** mixes a bargain-hunting night market with genuinely old food institutions — look past the knock-off handbags for the decades-old noodle and bak kut teh shops on the side streets.\n\n**Merdeka Square and the old colonial quarter** around the Sultan Abdul Samad Building show KL's Moorish-colonial architecture, the spot where Malaysia's independence was declared in 1957.\n\n**Thean Hou Temple**, a six-tiered Chinese temple on a hill south of the centre, is far less crowded than Batu Caves and has sweeping city views, especially around Chinese New Year when it's lit up.\n\n**Street food** worth seeking out specifically: nasi lemak (coconut rice with sambal, the unofficial national breakfast), char kway teow, and banana leaf rice in Brickfields (KL's Little India).",
                        tourCard: { slug: "kuala-lumpur-sambal-streets-food-tour-with-15", title: "Kuala Lumpur: Sambal Streets Food Tour with 15+ Tastings", description: "A guided route through the dishes a first-timer would otherwise never find on their own.", price: "From $90", image: "https://images.asiabylocals.com/asiabylocals/tours/my-203827/img0/1600.webp" }
                    },
                    {
                        title: "Day Trips From the City",
                        content: "**Genting Highlands** — A hilltop resort town 1.5-2 hours from KL by road, reached by the Awana SkyWay cable car from the base. Cooler mountain air, casino, theme parks.\n\n**Putrajaya** — Malaysia's purpose-built federal administrative capital, 25km south of KL, known for the pink-domed Putra Mosque and the man-made lake it sits beside — a popular sunset-cruise add-on.\n\n**Cameron Highlands** — Tea plantations and cooler climate, but it's a genuine 3-3.5 hour drive each way, so treat it as an overnight rather than a rushed day trip if you can.\n\nMost of these pair naturally with Batu Caves on a single guided day, since all three leave from the same side of the city.",
                    }
                ],
                faqs: [
                    { q: "How many days do you need in Kuala Lumpur?", a: "**2-3 days** covers the headline sights (Petronas Towers, Batu Caves, Bukit Bintang, Chinatown) comfortably. Add a 4th day if you want to fit in Genting Highlands or Putrajaya as a day trip." },
                    { q: "Is Batu Caves worth visiting?", a: "Yes — it's free to enter the main Temple Cave, the 272-step climb is a genuine sight in itself, and the Dark Cave's guided tour adds real substance beyond the photo. Go before 10am to beat both the heat and the crowds." },
                    { q: "Do I need to book Petronas Towers tickets in advance?", a: "Yes, strongly recommended. Observation Deck and Skybridge tickets are capped per time slot and routinely sell out days ahead, especially weekends — book online or through a guided tour rather than risking it at the counter." }
                ],
                fastFacts: [
                    { icon: 'Star', label: 'Must-See', value: 'Petronas Towers + Batu Caves' },
                    { icon: 'Clock', label: 'Minimum Stay', value: '2-3 days' },
                    { icon: 'MapPin', label: 'Batu Caves Steps', value: '272' }
                ]
            };

        case "kuala-lumpur-travel-guide-2026":
            return {
                title: "Kuala Lumpur Travel Guide 2026: Everything First-Time Visitors Need to Know",
                description: "A practical first-timer's guide to KL — getting in, getting around, where to stay, what it costs, and the cultural basics that actually matter in a majority-Muslim, multi-ethnic capital.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-837144/img0/1600.webp",
                sections: [
                    {
                        title: "Getting In and Getting Around",
                        content: "Most international flights land at **Kuala Lumpur International Airport (KLIA)**, about 45km south of the city, or the budget-carrier terminal **klia2** next door. The **KLIA Ekspres** train runs direct to KL Sentral in about 28 minutes and is the fastest, most reliable way into town; airport taxis and ride-hailing (Grab is the regional standard, far more common than Uber here) cost more but go door to door.\n\nWithin the city, KL's public transport is a genuinely confusing patchwork run by different operators — LRT (Kelana Jaya and Ampang lines), MRT (Kajang and Putrajaya lines), the KL Monorail, and KTM Komuter commuter rail all overlap but aren't always physically connected at interchange stations, meaning a 5-minute walk between platforms is common. The fix: get a **Touch 'n Go card** (sold at any station and most convenience stores) which now works across nearly all of these systems with a single tap, removing the need to buy separate tickets for each line. Grab is cheap enough that most visitors use it for anything the rail network doesn't cover directly.",
                    },
                    {
                        title: "Money, Language and Everyday Basics",
                        content: "The currency is the **Malaysian Ringgit (RM)**. Cards are widely accepted in malls and mid-range restaurants; cash (and Touch 'n Go e-wallet / DuitNow QR) still dominates at hawker stalls and markets. Tipping isn't customary — restaurant bills usually already carry a 10% service charge plus 6% SST (Sales and Service Tax).\n\nMalay (Bahasa Malaysia) is the official language, but English is widely spoken in KL specifically, a legacy of British colonial rule, and nearly all signage, menus and transport information appear in English alongside Malay. Mandarin and Tamil are also common given the city's large Chinese and Indian communities — KL genuinely functions as a multi-ethnic, multi-faith capital, which shows up everywhere from the food to the public holidays.\n\nMalaysia is majority Muslim, and Islam visibly shapes daily rhythm — the call to prayer, modest dress norms expected at mosques and some religious sites (headscarves/robes are usually provided free at the door), and widespread halal food availability. It doesn't mean alcohol is unavailable — it's sold and served openly in most restaurants and bars, just not in Muslim-run establishments.",
                    },
                    {
                        title: "Where to Stay and What Things Cost",
                        content: "**Bukit Bintang** is the default tourist base — walkable, well-connected by monorail, dense with malls, hotels and Jalan Alor's food street, but noisier and pricier. **KLCC** (around the Petronas Towers) is quieter and more upscale, with the towers and KLCC Park on your doorstep. **Bangsar** suits travellers who want a more local, less touristy evening scene with good restaurants and bars, a short Grab ride from the centre.\n\nKL is one of the better-value capitals in Southeast Asia: a hawker meal runs roughly RM10-15, a mid-range restaurant dinner RM40-80 per person, and a 3-4 star hotel room commonly RM150-350/night depending on season and location. Grab rides within the city centre are typically RM10-25.",
                        tourCard: { slug: "kuala-lumpur-full-day-private-city-tour-with-22", title: "Kuala Lumpur Full-Day Private City Tour with 22 Attractions", description: "A broad first-day overview of the city's layout before you decide where to spend your remaining time.", price: "From $195", image: "https://images.asiabylocals.com/asiabylocals/tours/my-803183/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Is Kuala Lumpur safe for tourists?", a: "Yes, generally — KL is one of the safer major Southeast Asian capitals for tourists, with the usual city-centre precautions (watch bags on public transport, avoid empty streets late at night). Violent crime against tourists is rare; opportunistic theft is the main risk." },
                    { q: "What currency does Malaysia use?", a: "The Malaysian Ringgit (RM/MYR). ATMs are widely available; cards work in malls and most restaurants, while cash or Touch 'n Go e-wallet is standard at hawker stalls." },
                    { q: "Is English widely spoken in Kuala Lumpur?", a: "Yes — English is very widely spoken and understood in KL specifically, more so than in many other Malaysian towns, a legacy of British colonial administration. Signage and menus are typically bilingual Malay-English." },
                    { q: "How do I get from KLIA airport to the city?", a: "The KLIA Ekspres train is fastest — about 28 minutes to KL Sentral. Grab (ride-hailing) or a licensed airport taxi go door-to-door but take 45-60 minutes depending on traffic and cost more." }
                ],
                fastFacts: [
                    { icon: 'DollarSign', label: 'Currency', value: 'Malaysian Ringgit (RM)' },
                    { icon: 'Globe', label: 'Language', value: 'Malay (English widely spoken)' },
                    { icon: 'Train', label: 'Airport to City', value: 'KLIA Ekspres, ~28 min' }
                ]
            };

        case "petronas-towers-tickets-guide":
            return {
                title: "Petronas Towers Tickets 2026: Prices, Skybridge vs Observation Deck & Booking Tips",
                description: "What the Skybridge and Observation Deck tickets actually include, how far ahead to book, and why the morning slots sell out first.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1428644/img0/1600.webp",
                sections: [
                    {
                        title: "Skybridge vs Observation Deck: What You're Actually Buying",
                        content: "A standard ticket to the Petronas Towers includes both stops on a single timed visit, in sequence: first the **Skybridge** on the 41st-42nd floor — the double-decker bridge connecting the two towers, famous as the world's tallest twin-tower skybridge — then the **Observation Deck** on the 86th floor, which is higher and gives the full 360° city panorama including a level looking back at the Skybridge itself from above.\n\nEntry is strictly timed: you're assigned a specific slot (visits run through the day in batches) and a guide walks your group through on a fixed schedule — this isn't a wander-at-leisure ticket, it's managed for safety and crowd flow. The whole visit, including both stops, typically takes around 45-75 minutes.\n\nTowers are closed to visitors on Mondays for maintenance — check this before planning your KL days around it.",
                        tourCard: { slug: "petronas-twin-towers-skybridge-view-dining", title: "Petronas Twin Towers Skybridge View & Dining Experience", description: "Combines the Skybridge visit with a sit-down meal that extends the experience beyond the timed ticket window.", price: "From $121", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1380041/img0/1600.webp" }
                    },
                    {
                        title: "Booking: Why the First Morning Slot Sells Out First",
                        content: "Tickets are capped per time slot to manage crowd density on the Skybridge, and the earliest morning slots sell out fastest for two practical reasons: cooler haze-free visibility (the skyline is clearest before midday heat builds up) and the fact that most tour groups and day-trip itineraries book the same early window. Weekends and Malaysian school holidays compress availability further.\n\n**Book at least 3-5 days ahead** for a normal weekday; book a week or more ahead for weekends or if you specifically want morning light. Walk-up tickets exist but availability on the day is unreliable, especially for the time slot you'd actually want — treat walking up without a booking as a backup plan, not the default.\n\nIf your dates are flexible, a weekday mid-morning slot after the very first rush but before midday haze typically offers the best balance of visibility and availability.",
                    }
                ],
                faqs: [
                    { q: "Do I need to book Petronas Towers tickets in advance?", a: "Yes. Time slots are capped and the earliest morning slots in particular sell out 3-5+ days ahead, especially on weekends. Book online or through a guided tour rather than risking a walk-up." },
                    { q: "What's the difference between the Skybridge and the Observation Deck?", a: "The Skybridge (41st-42nd floor) connects the two towers; the Observation Deck (86th floor) is higher and gives the full 360° panorama, including a view back down at the Skybridge. A standard ticket includes both, visited in sequence." },
                    { q: "Are the Petronas Towers open every day?", a: "No — they're closed to visitors on Mondays for maintenance. Plan your KL itinerary around this if the towers are a priority." }
                ],
                fastFacts: [
                    { icon: 'Building', label: 'Height', value: '451.9 m' },
                    { icon: 'Calendar', label: 'Closed', value: 'Mondays (maintenance)' },
                    { icon: 'Clock', label: 'Visit Duration', value: '~45-75 minutes' }
                ]
            };

        case "kl-1-day-itinerary":
            return {
                title: "The Perfect 1-Day Kuala Lumpur Itinerary (2026)",
                description: "One tightly sequenced day covering Batu Caves in the cool morning, the Petronas Towers at the right light, and Jalan Alor's hawker street at night.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-848582/img0/1600.webp",
                sections: [
                    {
                        title: "Morning: Batu Caves First, Before the Heat",
                        content: "Start at **Batu Caves** as early as you comfortably can — 8-9am. The site is outdoors and shadeless on the steps; by midday both the heat and the crowds are noticeably worse, and the macaques that line the staircase are more active (and bolder around food) early in the day. Climb the 272 steps to the Temple Cave, then, if time allows, add the paid Dark Cave guided tour for a genuinely different, cooler, biologically interesting detour most day-trippers skip.\n\nBatu Caves is 13km north of central KL — a KTM Komuter train from KL Sentral takes about 30 minutes each way, or a Grab ride covers it faster if traffic cooperates. Budget the whole morning: travel, climb, caves, travel back.",
                        tourCard: { slug: "kuala-lumpur-batu-caves-private-tour", title: "Kuala Lumpur: Batu Caves Private Tour", description: "A private, timed-right morning visit that avoids the worst of the midday heat and crowds.", price: "From $57", image: "https://images.asiabylocals.com/asiabylocals/tours/my-761902/img0/1600.webp" }
                    },
                    {
                        title: "Afternoon: Petronas Towers & KLCC",
                        content: "Head back into the city for a late-afternoon or early-evening **Petronas Towers** visit if you've pre-booked a slot — the early-evening timing works well on a one-day plan since it bridges into golden hour for photos at **KLCC Park** afterwards. If you didn't book tickets ahead (see our [Petronas Towers tickets guide](/malaysia/kuala-lumpur/petronas-towers-tickets-guide)), the ground-level view from across KLCC Park's fountain lake is free and genuinely excellent, especially at the evening light-and-water show.\n\nThis is also your best window for a quick pass through **Bukit Bintang**'s malls if shopping interests you — Pavilion KL is a short walk from KLCC.",
                    },
                    {
                        title: "Evening: Jalan Alor",
                        content: "Finish the day at **Jalan Alor**, Bukit Bintang's open-air night-market food street — rows of stalls and plastic-chair restaurants serving grilled seafood, satay, and KL street-food staples from early evening into the night. It's touristy by now, but the food quality holds up, and it's the easiest, most atmospheric way to end a single KL day without needing a reservation anywhere.\n\nFor a more curated version with a guide who knows which specific stalls are worth the queue, a guided food-tour evening is the better use of your last few hours if you'd rather not gamble on a cold start.",
                        tourCard: { slug: "kuala-lumpur-nightlife-street-food-tour-with-6", title: "Kuala Lumpur: Nightlife Street Food Tour with 6 Tastings", description: "A guided end to the day through Bukit Bintang's night-market food scene.", price: "From $88", image: "https://images.asiabylocals.com/asiabylocals/tours/my-503395/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Can you do Batu Caves and Petronas Towers in one day?", a: "Yes, comfortably — Batu Caves in the morning (before the heat), Petronas Towers in the late afternoon/evening with a pre-booked slot, then Jalan Alor for dinner. This is the most efficient single-day sequence." },
                    { q: "What time should I go to Batu Caves?", a: "As early as possible, ideally 8-9am, both to beat the heat on the shadeless outdoor steps and to get ahead of the midday crowds and tour-bus groups." }
                ],
                fastFacts: [
                    { icon: 'Sunrise', label: 'Start Time', value: '8-9am at Batu Caves' },
                    { icon: 'MapPin', label: 'Route', value: 'Batu Caves → KLCC → Jalan Alor' }
                ]
            };

        case "kl-3-day-itinerary":
            return {
                title: "The Perfect 3-Day Kuala Lumpur Itinerary (2026)",
                description: "A field-tested 3-day KL plan: city landmarks and Batu Caves on day 1, culture and food neighbourhoods on day 2, and a Genting Highlands or Putrajaya day trip on day 3.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-869805/img0/1600.webp",
                sections: [
                    {
                        title: "Day 1: Batu Caves & the Petronas Towers",
                        content: "Follow the structure of our [1-day KL itinerary](/malaysia/kuala-lumpur/kl-1-day-itinerary): Batu Caves in the cool morning, Petronas Towers and KLCC Park in the late afternoon with a pre-booked timed ticket, Jalan Alor's hawker street for dinner. This front-loads the two sights every first-timer actually wants, so a flight delay or ticket mishap on a later day doesn't cost you the headline experiences.",
                    },
                    {
                        title: "Day 2: Culture, Markets & Neighbourhoods",
                        content: "Spend the morning in **Chinatown (Petaling Street)** and the old colonial quarter around **Merdeka Square** — the Sultan Abdul Samad Building's Moorish architecture and the spot where independence was declared in 1957. Walk down to **Thean Hou Temple** for city views without Batu Caves' crowds.\n\nAfternoon: **Brickfields**, KL's Little India, for banana-leaf rice and a genuinely different texture of the city from the glass-tower core. Evening: a guided heritage-and-food walking tour through the older parts of town pulls these threads together better than wandering solo, since the historical layers (Malay, Chinese, Indian, British colonial) aren't always obvious without context.",
                        tourCard: { slug: "kuala-lumpur-half-day-heritage-trail-guided", title: "Kuala Lumpur: Half-Day Heritage Trail Guided Walking Tour", description: "Context for the colonial, Chinese and Malay layers of the old city that are easy to miss on your own.", price: "From $84", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1409232/img0/1600.webp" }
                    },
                    {
                        title: "Day 3: Genting Highlands or Putrajaya",
                        content: "**Genting Highlands** is the bigger day out — a cable car ride up to a cooler hilltop resort town with theme parks and a casino, roughly 1.5-2 hours from KL by road to the base station. It's a full day commitment once you factor in the cable car and travel time.\n\n**Putrajaya**, Malaysia's purpose-built federal capital 25km south of the city, is a lighter half-day alternative — the pink-domed Putra Mosque and a lakeside cruise, often combined with Batu Caves on tour itineraries if you want to double up rather than split it from Day 1.\n\nChoose Genting if you want a genuine change of scenery and pace; choose Putrajaya if you'd rather keep Day 3 shorter and save energy for a final evening back in KL.",
                        tourCard: { slug: "kuala-lumpur-genting-full-day-tour", title: "From Kuala Lumpur: Genting Highlands Day Trip with Cable Car", description: "The full cable-car-and-hilltop-resort day out, transport included.", price: "From $106", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1503528/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Is 3 days enough for Kuala Lumpur?", a: "Yes — 3 days covers the headline sights, a culture/food day, and one day trip (Genting Highlands or Putrajaya) comfortably without feeling rushed." },
                    { q: "Should I do Genting Highlands or Putrajaya on a 3-day trip?", a: "Genting if you want a full-day change of scenery with a cable car and cooler air; Putrajaya if you'd rather keep the day shorter and lighter — it pairs well combined with Batu Caves instead of standing alone." }
                ],
                fastFacts: [
                    { icon: 'Calendar', label: 'Duration', value: '3 days' },
                    { icon: 'Mountain', label: 'Day Trip Options', value: 'Genting Highlands or Putrajaya' }
                ]
            };

        case "batu-caves-guide":
            return {
                title: "Batu Caves Guide 2026: 272 Steps, Dark Cave & How to Get There",
                description: "What's actually inside Batu Caves beyond the famous staircase photo — the Temple Cave, the paid Dark Cave tour, the macaques, and the train route from KL Sentral.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1368310/img0/1600.webp",
                sections: [
                    {
                        title: "What's There: Temple Cave, Dark Cave & the Statue",
                        content: "Batu Caves is a limestone hill riddled with cave temples, 13km north of central Kuala Lumpur, and one of the most important Hindu shrines outside India. The approach is dominated by the **42.7-metre gold statue of Lord Murugan**, the tallest statue of a Hindu deity in Malaysia, standing guard at the base of the famous **272-step staircase**, repainted in rainbow colours in 2018 (it was plain grey before).\n\nAt the top, the free-to-enter **Temple Cave** (also called Cathedral Cave) opens into a vast natural chamber with a Hindu shrine at the back and a hole in the cave roof that lets sunlight stream in.\n\nLess visited but arguably more interesting: the **Dark Cave**, reached via a separate ticketed entrance partway up the main staircase. It's a conservation area with its own ecosystem — rare cave-adapted species, a 45-minute guided walk through unlit passages with headlamps, and a genuinely different, cooler experience from the main photo-stop cave. It's not optional self-guided wandering — you go with a trained guide, which is part of what keeps the cave ecosystem intact.",
                        tourCard: { slug: "batu-caves-skywalk-and-waterfalls-adventure", title: "Batu Caves Skywalk and Waterfalls Adventure", description: "Goes beyond the main staircase with a skywalk and waterfall stop most day-trippers never see.", price: "From $101", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1368310/img0/1600.webp" }
                    },
                    {
                        title: "Practical Details: Getting There, Monkeys & Timing",
                        content: "**By train**: KTM Komuter from KL Sentral to Batu Caves station takes about 30 minutes and drops you right at the entrance — the easiest independent option. **By Grab**: faster when traffic cooperates, usually RM25-40 from central KL.\n\n**The macaques** that line the staircase are long-tailed macaques, and they're genuinely bold around food and loose items — don't carry food in open hands, and keep sunglasses, phones and bags zipped or held firmly; snatching incidents are common enough to be worth the warning, not a rare exception.\n\n**Dress code**: it's an active Hindu temple, so shoulders and knees should be covered; sarongs are available for rent at the entrance if you arrive in shorts.\n\n**Best time**: early morning (before 10am) for cooler temperatures and lighter crowds — tour buses tend to arrive mid-morning onward. During **Thaipusam** (late January/early February), the site becomes the epicentre of Malaysia's largest Hindu festival, with devotees carrying pierced kavadi frames up the steps — extraordinary to witness, but extremely crowded.",
                    }
                ],
                faqs: [
                    { q: "Is Batu Caves free to enter?", a: "The main Temple Cave is free. The Dark Cave requires a separate paid, guided ticket — it's a 45-minute conservation-area tour with headlamps, genuinely worth adding if you have the time." },
                    { q: "How many steps are at Batu Caves?", a: "272 steps, painted in rainbow colours since 2018 (previously plain grey), leading up to the Temple Cave past the 42.7-metre gold Lord Murugan statue." },
                    { q: "Are the monkeys at Batu Caves dangerous?", a: "They're bold rather than dangerous, but snatching food, sunglasses and loose items is common. Keep belongings secured and don't hold food in open hands on the staircase." },
                    { q: "How do I get to Batu Caves from KL Sentral?", a: "KTM Komuter train, about 30 minutes, dropping you directly at the entrance. It's the simplest independent route and avoids traffic." }
                ],
                fastFacts: [
                    { icon: 'MapPin', label: 'Distance from KL', value: '13 km north' },
                    { icon: 'TrendingUp', label: 'Steps', value: '272' },
                    { icon: 'Train', label: 'From KL Sentral', value: '~30 min by KTM Komuter' }
                ]
            };

        case "kl-public-transport-guide":
            return {
                title: "Kuala Lumpur Public Transport Guide: LRT, MRT, Monorail & KTM Explained",
                description: "KL's rail network is run by overlapping operators with confusing interchanges. Here's how the LRT, MRT, Monorail and KTM Komuter actually fit together, and why a Touch 'n Go card fixes most of it.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1471250/img0/1600.webp",
                sections: [
                    {
                        title: "Why KL's Transport Map Looks Confusing (Because It Is)",
                        content: "Kuala Lumpur's public transport isn't one unified system — it's several separate networks, built by different operators at different times, that happen to connect at a handful of interchange stations. The **LRT** (Light Rail Transit) has two lines, Kelana Jaya and Ampang/Sri Petaling. The **MRT** (Mass Rapid Transit) is newer, with the Kajang and Putrajaya lines. The **KL Monorail** is a single elevated loop through the city centre, useful for Bukit Bintang-KLCC hops. **KTM Komuter** is a separate commuter rail system that reaches further out — including Batu Caves.\n\nThe genuinely confusing part for first-timers: interchange stations between these systems (e.g. where the Monorail meets the LRT) sometimes require you to exit one station, walk a connecting corridor or even cross a street, and re-enter another — it isn't always a same-platform transfer the way it would be in Tokyo or Singapore. Google Maps' transit directions handle this reasonably well, but budget a few extra minutes at any interchange you haven't done before.",
                    },
                    {
                        title: "The Fix: Touch 'n Go, Not Separate Tickets",
                        content: "Get a **Touch 'n Go card** on day one — sold at any station ticket counter and most 7-Elevens for a small card fee, then topped up with cash or a local payment app. It now works as a single tap-in, tap-out card across LRT, MRT, Monorail and most KTM Komuter services, which removes the need to buy a separate paper ticket for each operator every time you switch lines. It's the single biggest quality-of-life fix for navigating KL independently.\n\nFor anything the rail network doesn't cover directly, or when you're carrying luggage, **Grab** (the regional ride-hailing app, far more dominant here than Uber) is cheap and reliable — most short rides within the city centre run RM10-25. Many visitors end up using rail for predictable point-to-point trips and Grab for the last-mile or anything awkward to reach by foot from a station.",
                        tourCard: { slug: "kuala-lumpur-klia-train-ticket-city-tour-and-drop", title: "Kuala Lumpur: KLIA Train Ticket, City Tour, and Drop-Off", description: "Takes the airport-transfer and transit logistics off your plate on arrival day.", price: "From $68", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1471250/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Do I need separate tickets for KL's LRT, MRT and Monorail?", a: "No, not if you have a Touch 'n Go card — it taps across nearly all of these systems, including most KTM Komuter services. It's the simplest way to avoid buying a new ticket every time you change operators." },
                    { q: "Is Grab cheaper than public transport in KL?", a: "Not usually, but it's still cheap by international standards (RM10-25 for most central city rides) and far more convenient for routes the rail network doesn't cover directly or when carrying luggage." },
                    { q: "How do you get to Batu Caves by public transport?", a: "KTM Komuter train from KL Sentral, about 30 minutes, direct to the entrance — this is a separate system from the LRT/MRT/Monorail, so confirm you're boarding the right platform at KL Sentral." }
                ],
                fastFacts: [
                    { icon: 'CreditCard', label: 'Key Tool', value: "Touch 'n Go card" },
                    { icon: 'Train', label: 'Systems', value: 'LRT, MRT, Monorail, KTM Komuter' },
                    { icon: 'Smartphone', label: 'Ride-Hailing', value: 'Grab (not Uber)' }
                ]
            };

        case "kl-halal-food-guide":
            return {
                title: "Kuala Lumpur Halal Food Guide: What to Eat & Where (2026)",
                description: "Malaysia is majority Muslim and most KL food is halal by default outside Chinatown — here's how certification works, what to actually order, and where non-halal food is concentrated.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1462806/img0/1600.webp",
                sections: [
                    {
                        title: "How Halal Works in KL, Practically",
                        content: "Malaysia is a majority-Muslim country and halal certification is overseen by **JAKIM** (the Department of Islamic Development Malaysia) — look for the official JAKIM halal logo displayed at the entrance or counter of certified restaurants. In practice, the vast majority of Malay and many Indian-Muslim eateries across KL are halal by default; it's non-Muslim-run Chinese food (much of Chinatown/Petaling Street, and pork-centric dishes like bak kut teh or char siu) where halal certification doesn't apply and travellers should ask or look for signage if it matters to them.\n\nAlcohol is a separate question from halal food — it's openly sold and served in most bars, hotels and non-Muslim restaurants across KL regardless of the food's halal status; you just won't find it served inside Muslim-owned establishments.",
                    },
                    {
                        title: "What to Actually Order",
                        content: "**Nasi lemak** — coconut rice with sambal, fried anchovies, peanuts and a boiled or fried egg, often with fried chicken added; the closest thing KL has to a national breakfast, and eaten any time of day.\n\n**Nasi kandar** — a Penang import now everywhere in KL: rice with a choice of curries and sides ladled on top, distinctively soaked together rather than served separately.\n\n**Roti canai (roti canai)** — flaky flatbread, usually with dhal or curry, a Mamak (Indian-Muslim) cafe staple available nearly around the clock.\n\n**Satay** — grilled skewered meat with peanut sauce, widely available and almost always halal given its Malay-Indonesian roots.\n\n**Mamak cafes** — open-air, often 24-hour Indian-Muslim restaurants serving the roti/nasi kandar/teh tarik (pulled milk tea) combination that defines a huge amount of everyday KL eating, and a genuinely good, cheap, halal-safe default anywhere in the city.",
                        tourCard: { slug: "kl-muslim-friendly-night-mosques-illuminated", title: "KL Muslim-Friendly Night: Mosques & Illuminated Heritage", description: "A food-and-sights evening built specifically around halal dining and the city's illuminated mosques.", price: "From $169", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1462806/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Is most food in Kuala Lumpur halal?", a: "Yes — the majority of Malay and Indian-Muslim food (the bulk of everyday KL eating) is halal by default. Non-halal food is mostly concentrated in non-Muslim-run Chinese restaurants, particularly around Chinatown/Petaling Street." },
                    { q: "How do I know if a restaurant in KL is halal-certified?", a: "Look for the official JAKIM halal certification logo displayed at the entrance or counter. Mamak cafes, most Malay eateries and chain restaurants typically display it visibly." },
                    { q: "Can you drink alcohol in Kuala Lumpur?", a: "Yes — it's legally sold and openly served in most bars, hotels and non-Muslim restaurants. It simply won't be available in Muslim-owned establishments, which is unrelated to a dish's halal status." }
                ],
                fastFacts: [
                    { icon: 'CheckCircle', label: 'Certifier', value: 'JAKIM' },
                    { icon: 'Utensils', label: 'Must-Try', value: 'Nasi lemak, roti canai, satay' },
                    { icon: 'Clock', label: 'Mamak Cafes', value: 'Often open 24 hours' }
                ]
            };

        case "bukit-bintang-shopping-guide":
            return {
                title: "Bukit Bintang Shopping Guide: Malls, Markets & Jalan Alor (2026)",
                description: "KL's shopping and nightlife spine, mapped out — which malls to actually prioritise, where the bargain-hunting is, and the night-market food street that caps off every evening.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1404503/img0/1600.webp",
                sections: [
                    {
                        title: "The Malls That Matter",
                        content: "**Pavilion KL** is Bukit Bintang's flagship mall — international luxury and mid-range brands, a genuinely impressive scale, and the area's most reliable air-conditioned escape from the afternoon heat and rain.\n\n**Fahrenheit88**, across the road, leans younger and more streetwear/local-brand focused, a useful contrast if Pavilion feels too upmarket.\n\n**Lot 10** and **Sungei Wang Plaza**, slightly older and grittier, are where KL's electronics and lower-price fashion bargain-hunting concentrates — Sungei Wang in particular has a maze-like, market-adjacent feel that rewards browsing rather than a targeted shopping list.\n\nFor anyone short on time, Pavilion alone covers most mainstream shopping needs within a single building.",
                    },
                    {
                        title: "Jalan Alor: The Night-Market Food Street",
                        content: "Once the evening shopping winds down, **Jalan Alor** is where Bukit Bintang actually comes alive — a pedestrianised street lined with open-air seafood grills, satay stalls and plastic-chair restaurants that spill into the road from early evening onward. It's firmly on the tourist circuit now, which means some price inflation versus a true local hawker spot, but the food quality genuinely holds up, and it's the single easiest, most atmospheric dinner option in the area with zero reservation needed.\n\nOrder grilled stingray, satay, or any of the seafood laid out on ice at the stall fronts — pointing at what looks good works fine even without Malay.",
                        tourCard: { slug: "kuala-lumpur-evening-street-food-tour", title: "Kuala Lumpur: Evening Street Food Tour", description: "A guided route through Bukit Bintang's night-market stalls if you'd rather not guess which ones are worth the queue.", price: "From $52", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1199184/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "What is Bukit Bintang known for?", a: "It's KL's main shopping and nightlife district — dense with malls (Pavilion KL, Fahrenheit88, Lot 10), hotels, and Jalan Alor, the area's famous open-air night-market food street." },
                    { q: "Is Jalan Alor worth visiting?", a: "Yes — it's touristy and slightly pricier than a true local hawker spot, but the food quality holds up and it's the easiest, most atmospheric no-reservation dinner option in central KL." }
                ],
                fastFacts: [
                    { icon: 'ShoppingBag', label: 'Top Mall', value: 'Pavilion KL' },
                    { icon: 'Utensils', label: 'Night Food Street', value: 'Jalan Alor' }
                ]
            };

        case "kl-to-penang-travel":
            return {
                title: "KL to Penang: Flight, Train & Bus Options Compared (2026)",
                description: "Three ways to cover the roughly 370km between Kuala Lumpur and Penang — a 1-hour flight, a 4-hour train-plus-ferry combo, or a budget overnight bus. Here's the honest trade-off on each.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-723228/img0/1600.webp",
                sections: [
                    {
                        title: "Flying: The Fast, Default Option",
                        content: "Flights between Kuala Lumpur (KLIA or the budget terminal klia2) and Penang International Airport take about **1 hour** in the air, with multiple daily departures on AirAsia, Malaysia Airlines and Batik Air. Factoring in airport transfers and check-in time on both ends, door-to-door it's realistically a half-day affair, but it's the fastest option by a wide margin and often the cheapest when booked a few weeks out on a budget carrier.",
                    },
                    {
                        title: "Train + Ferry: The Scenic, Slower Route",
                        content: "KTM's **ETS (Electric Train Service)** runs from KL Sentral to **Butterworth**, the mainland town directly across the channel from Penang island, in roughly **4 hours**. From Butterworth, a short ferry (or the Penang Bridge by road) crosses to George Town. All in, budget 5-5.5 hours door to door including the ferry crossing — slower than flying but a genuinely pleasant, scenic way to see the Malaysian countryside, and useful if you want to avoid airports entirely.",
                    },
                    {
                        title: "Bus: The Budget Option",
                        content: "Overnight or daytime coaches run directly between KL (usually from the Terminal Bersepadu Selatan or Pudu Sentral terminals) and Penang's Sungai Nibong terminal, taking roughly **5-6 hours** depending on traffic on the North-South Expressway. It's the cheapest option by far and the overnight service saves a hotel night, but comfort depends heavily on the operator — book a reputable one rather than the absolute cheapest listed fare.\n\n**Bottom line**: fly if time matters most, take the train if you want the scenic route without driving, and bus it if budget is the priority and you don't mind the longer haul.",
                    }
                ],
                faqs: [
                    { q: "How far is Penang from Kuala Lumpur?", a: "Roughly 370km by road. Flying takes about 1 hour; the train-plus-ferry combo via Butterworth takes 4-5.5 hours; the overnight bus takes 5-6 hours." },
                    { q: "Is it better to fly or take the train from KL to Penang?", a: "Fly if speed matters — it's roughly 1 hour versus 4+ hours by train. Take the train if you'd rather see the countryside and don't mind the longer, more scenic journey via Butterworth." }
                ],
                fastFacts: [
                    { icon: 'Plane', label: 'By Air', value: '~1 hour' },
                    { icon: 'Train', label: 'By Train + Ferry', value: '~4-5.5 hours' },
                    { icon: 'Bus', label: 'By Bus', value: '~5-6 hours' }
                ]
            };

        case "malaysia-visa-guide-for-tourists":
            return {
                title: "Malaysia Visa Guide for Tourists 2026: Who Needs One & How to Apply",
                description: "Most Western nationalities get visa-free entry to Malaysia for up to 90 days — here's who qualifies, who needs an eVisa, and the practical entry requirements.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-837144/img0/1600.webp",
                sections: [
                    {
                        title: "Who Gets Visa-Free Entry",
                        content: "Malaysia grants visa-free entry for tourism to a long list of nationalities, including most of the US, UK, EU, Australia, Canada, Japan, South Korea and ASEAN countries — typically for stays of **30 to 90 days** depending on nationality (many Western passport holders get 90 days; check the exact allowance for your specific passport, since it varies by country and occasionally changes). This visa-free entry is for tourism purposes and doesn't permit working in Malaysia.\n\nCitizens of a smaller number of countries — including China and India, among others — need to apply for an **eVisa** online before arrival, a process that's generally straightforward and processed within a few business days through Malaysia's official immigration portal.",
                    },
                    {
                        title: "What You Actually Need at the Border",
                        content: "Regardless of visa-free or eVisa status, immigration officers commonly expect: a **passport valid for at least 6 months** beyond your entry date, **proof of onward or return travel** (a flight out), and sometimes **proof of accommodation or sufficient funds** for your stay, though these aren't always checked in practice for visa-free arrivals from low-risk countries.\n\nMalaysia also requires most travellers to complete the **Malaysia Digital Arrival Card (MDAC)** online within 3 days before arrival — a straightforward passport and travel-details form, free to complete, and worth doing before you fly rather than scrambling for wifi at the airport.\n\nAlways check the current requirements for your specific nationality on Malaysia's official immigration website close to your travel date — visa policies do shift, and relying on a general guide for your exact entry allowance isn't a substitute for the official source.",
                    }
                ],
                faqs: [
                    { q: "Do US citizens need a visa for Malaysia?", a: "No — US passport holders get visa-free entry for tourism, typically up to 90 days. Confirm the current exact allowance on Malaysia's official immigration site before travel." },
                    { q: "What is the Malaysia Digital Arrival Card (MDAC)?", a: "A mandatory online arrival form most travellers must complete within 3 days before landing in Malaysia — free, and best done before you fly rather than at the airport." },
                    { q: "Which nationalities need an eVisa for Malaysia?", a: "A smaller group of countries, including China and India among others, require an eVisa applied for online before arrival. Check your specific nationality on the official portal, since the list isn't fixed." }
                ],
                fastFacts: [
                    { icon: 'FileCheck', label: 'Most Western Passports', value: 'Visa-free, up to 90 days' },
                    { icon: 'Clock', label: 'Passport Validity', value: '6+ months beyond entry' },
                    { icon: 'Smartphone', label: 'Required', value: 'MDAC arrival card online' }
                ]
            };

        // ============ PENANG ============

        case "best-time-to-visit-penang":
            return {
                title: "Best Time to Visit Penang: Weather, Festivals & Haze Guide (2026)",
                description: "Penang runs slightly cooler and breezier than KL thanks to its coastal position, but shares the same July-October haze risk. Here's the month-by-month breakdown.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-895884/img0/1600.webp",
                sections: [
                    {
                        title: "Penang's Climate: Similar Heat, Coastal Relief",
                        content: "Penang sits off Peninsular Malaysia's northwest coast and shares the country's year-round tropical warmth — daytime highs around 31-33°C in every month — but its coastal position and the sea breeze off the Strait of Malacca take the edge off compared to landlocked KL, especially around Batu Ferringhi and Georgetown's waterfront.\n\nLike the rest of Peninsular Malaysia, there's no true dry season. The **Southwest Monsoon (May-September)** brings Penang's relatively drier stretch with short afternoon storms; the **Northeast Monsoon (October-March)** brings heavier, more sustained rain, peaking around November.",
                    },
                    {
                        title: "The Same Haze Window as KL",
                        content: "Penang sits in the same regional haze corridor as Kuala Lumpur — smoke from agricultural burning in Sumatra, roughly **July through October**, can drift across the Strait of Malacca and reduce visibility and air quality island-wide, including views from Penang Hill and the beaches at Batu Ferringhi. Severity varies year to year and isn't guaranteed in any given season, but if your trip falls in this window, check Malaysia's Department of Environment API readings close to your dates and have an indoor backup (George Town's museums, mall-based activities) for a bad-air day.",
                    },
                    {
                        title: "Festivals Worth Planning Around",
                        content: "**Chinese New Year** (late January/February) is especially vivid in Penang given its large, historic Chinese community — expect lion dances, lantern displays and lively Chinatown streets, though some family restaurants close for several days.\n\n**George Town Festival** (typically held across a multi-week window in the middle of the year) brings arts, performances and installations across the UNESCO heritage zone — check the current year's exact dates, as they shift.\n\n**Thaipusam** also draws processions here, though on a smaller scale than Batu Caves in KL.",
                    }
                ],
                faqs: [
                    { q: "What is the best time to visit Penang?", a: "There's no sharply defined dry season, but the period outside July-October haze risk and outside the heaviest November-December rain — roughly December through March — offers the most reliable combination of clear skies and manageable rain." },
                    { q: "Is Penang affected by the Sumatra haze?", a: "Yes — the same regional haze corridor that affects KL reaches Penang, roughly July-October, with severity varying year to year. Check air quality readings close to your travel dates if visiting in this window." }
                ],
                fastFacts: [
                    { icon: 'Thermometer', label: 'Temperature', value: '31-33°C year-round' },
                    { icon: 'AlertTriangle', label: 'Haze Risk', value: 'July – October' },
                    { icon: 'Wind', label: 'Climate Note', value: 'Coastal breeze softens the heat' }
                ]
            };

        case "things-to-do-in-penang":
            return {
                title: "15 Best Things to Do in Penang (2026 Guide)",
                description: "From Georgetown's UNESCO heritage streets and Ernest Zacharevic's street art to Penang Hill and the clan jetties — what's actually worth your time on the island.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-723228/img0/1600.webp",
                sections: [
                    {
                        title: "George Town: The Heritage Core",
                        content: "**George Town** was jointly inscribed as a UNESCO World Heritage Site in 2008 alongside Malacca, recognised for its unique multicultural trading-port architecture — rows of Chinese shophouses, Peranakan (Baba Nyonya) mansions, British colonial buildings, mosques, temples and clan houses standing side by side. Walking the heritage zone is the single best way to understand why Penang feels different from anywhere else in Malaysia.\n\n**The street art** is the modern layer on top of the old one — Lithuanian artist Ernest Zacharevic's 2012 murals (most famously \"Kids on Bicycle\" on Armenian Street) kicked off a wave of interactive wall art across the old town that's now a genuine draw in its own right.\n\n**The clan jetties**, a row of Chinese stilt villages built out over the waterfront by different clan communities in the 19th century, are among the last of their kind still inhabited — Chew Jetty is the most visited and development-friendly of them.",
                        tourCard: { slug: "georgetown-street-art-tour-mixed-culture-local", title: "Georgetown Street Art Tour & Mixed-Culture Local Food Tasting", description: "Combines the mural hunt with the multicultural food that makes George Town's streets what they are.", price: "From $136", image: "https://images.asiabylocals.com/asiabylocals/tours/my-723228/img0/1600.webp" }
                    },
                    {
                        title: "Beyond the Old Town",
                        content: "**Penang Hill** — a funicular railway (one of the steepest in Southeast Asia) climbs to the island's highest point, with cooler air and city/strait views; The Habitat Penang Hill adds a rainforest canopy walk at the top.\n\n**Kek Lok Si Temple** in Air Itam — the largest Buddhist temple complex in Malaysia, a sprawling hillside site with a towering multi-tiered pagoda (the Pagoda of Rama VI) and a giant bronze statue of Guanyin.\n\n**Batu Ferringhi** — Penang's main beach strip, more about the resort-and-night-market scene than pristine sand, but the go-to for anyone wanting a beach-adjacent evening.\n\n**Food** deserves its own category entirely here — see our dedicated [Penang food guide](/malaysia/penang/penang-food-guide) for what to actually order.",
                        tourCard: { slug: "penang-penang-hill-and-kek-lok-si-temple-entry", title: "Penang: Penang Hill and Kek Lok Si Temple Entry Ticket", description: "The hill and the temple complex in one combined ticket, the two biggest sights outside George Town's old town.", price: "From $136", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1283404/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "How many days do you need in Penang?", a: "**2-3 days** covers George Town's heritage zone, street art, Penang Hill and Kek Lok Si comfortably. Food-focused travellers often extend to 4+ days given how deep Penang's culinary reputation runs." },
                    { q: "Is Penang worth visiting if I've already been to Kuala Lumpur?", a: "Yes — Penang's character is genuinely different: older, more multicultural-heritage focused, food-obsessed, and built around a walkable UNESCO old town rather than KL's skyline-and-malls identity." }
                ],
                fastFacts: [
                    { icon: 'Star', label: 'Must-See', value: 'George Town heritage zone' },
                    { icon: 'Award', label: 'UNESCO Status', value: 'Inscribed 2008 (with Malacca)' },
                    { icon: 'Clock', label: 'Minimum Stay', value: '2-3 days' }
                ]
            };

        case "penang-travel-guide-2026":
            return {
                title: "Penang Travel Guide 2026: Everything First-Time Visitors Need to Know",
                description: "A practical first-timer's guide to Penang — getting in, getting around George Town on foot, where to stay, and what makes this island distinct from the rest of Malaysia.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-67775/img0/1600.webp",
                sections: [
                    {
                        title: "Getting In and Around",
                        content: "**Penang International Airport** sits on the island's south side, roughly 1 hour via a direct flight from KL, with onward Grab rides or airport taxis into George Town taking about 30-40 minutes. Arriving overland from the mainland, the **Penang Bridge** (one of the longest bridges in Southeast Asia) or the Butterworth ferry both connect to the island.\n\nGeorge Town's heritage core is genuinely **walkable** — the UNESCO zone is compact enough to cover mostly on foot, which is part of its charm. For anything further (Penang Hill, Kek Lok Si, Batu Ferringhi), Grab is the easiest option; a free CAT (Central Area Transit) bus loop also covers the old town for short hops.",
                    },
                    {
                        title: "Where to Stay and What to Expect",
                        content: "**George Town's heritage zone** is the obvious base — heritage boutique hotels in converted shophouses put you within walking distance of nearly everything, though rooms in genuinely old buildings can be smaller and quirkier than a standard hotel. **Batu Ferringhi** suits travellers who want a beach-resort stay with George Town as a day trip rather than a base.\n\nPenang is noticeably more laid-back and less commercially intense than KL — fewer skyscrapers, more shophouses, and an identity built heavily around its food culture and multicultural heritage rather than modern development. It's also where many Malaysians themselves go for a long weekend, which says something about the pace on offer.",
                        tourCard: { slug: "george-town-penang-customizable-private-tour", title: "George Town: Penang Customizable Private Tour", description: "A flexible first day to get oriented before deciding where to focus your remaining time.", price: "From $216", image: "https://images.asiabylocals.com/asiabylocals/tours/my-892858/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "How do I get from Kuala Lumpur to Penang?", a: "Flying takes about 1 hour; the ETS train to Butterworth plus a short ferry takes roughly 4-5.5 hours; a bus takes 5-6 hours. See our [KL to Penang travel guide](/malaysia/kuala-lumpur/kl-to-penang-travel) for the full comparison." },
                    { q: "Is George Town walkable?", a: "Yes — the UNESCO heritage zone is compact and genuinely best explored on foot, with a free CAT bus loop covering it for anyone who wants a break from walking." }
                ],
                fastFacts: [
                    { icon: 'Plane', label: 'From KL', value: '~1 hour by air' },
                    { icon: 'Footprints', label: 'Getting Around', value: 'George Town is walkable' },
                    { icon: 'Award', label: 'Known For', value: 'UNESCO heritage + food' }
                ]
            };

        case "georgetown-street-art-guide":
            return {
                title: "George Town Street Art Guide: Where to Find Every Mural (2026)",
                description: "Ernest Zacharevic's 2012 murals started it, and the trend never stopped — here's where to find the originals and the best of what came after.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-723228/img0/1600.webp",
                sections: [
                    {
                        title: "How It Started: Ernest Zacharevic, 2012",
                        content: "George Town's street art scene has a specific origin point: in 2012, Lithuanian artist **Ernest Zacharevic** was commissioned to paint a series of murals for the George Town Festival, incorporating real objects (an actual bicycle, a real motorcycle) into painted scenes on the walls of the old town's shophouses. The most famous, **\"Kids on Bicycle\"** on Lebuh Armenian (Armenian Street), became one of the most photographed walls in Malaysia and is still the single most-sought-out piece today.\n\nThe success of Zacharevic's series sparked a wave of imitators and official commissions, and George Town now has dozens of murals scattered through the heritage zone, ranging from other Zacharevic pieces to later community and government-backed additions, plus a separate set of steel-rod caricature sculptures (the \"Marking George Town\" series) that tell local history through witty line-drawing figures mounted on walls.",
                    },
                    {
                        title: "Where to Find the Key Pieces",
                        content: "**Armenian Street (Lebuh Armenian)** is the epicentre — \"Kids on Bicycle\" and several other Zacharevic pieces concentrate here, and it's the busiest, most selfie-queue-heavy stretch, so early morning is genuinely better for photos without a line of people waiting their turn.\n\n**Cannon Street and Muntri Street** carry further murals and steel-rod caricatures with a bit more breathing room than Armenian Street.\n\nThe murals aren't static — some fade, get touched up, or are replaced over time, so a specific piece you've seen in an old photo may look different or be gone entirely by the time you visit; treat a mural hunt as an open-ended wander through the old town rather than a fixed checklist.",
                        tourCard: { slug: "georgetown-street-art-tour-mixed-culture-local", title: "Georgetown Street Art Tour & Mixed-Culture Local Food Tasting", description: "A guided route to the key murals that also weaves in the food George Town is equally famous for.", price: "From $136", image: "https://images.asiabylocals.com/asiabylocals/tours/my-723228/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Where is the famous 'Kids on Bicycle' mural in George Town?", a: "On Lebuh Armenian (Armenian Street), painted by Ernest Zacharevic in 2012 — it's the piece that started George Town's street art movement and remains the most photographed." },
                    { q: "Is George Town's street art free to see?", a: "Yes — it's all outdoors, scattered through the public streets of the heritage zone, with no entry fee. Early morning avoids the worst of the photo queues at the most famous pieces." }
                ],
                fastFacts: [
                    { icon: 'Palette', label: 'Started', value: '2012, Ernest Zacharevic' },
                    { icon: 'MapPin', label: 'Must-See Mural', value: '"Kids on Bicycle", Armenian St' },
                    { icon: 'Camera', label: 'Best Time', value: 'Early morning, fewer queues' }
                ]
            };

        case "penang-1-day-itinerary":
            return {
                title: "The Perfect 1-Day Penang Itinerary (2026)",
                description: "One tight day through George Town's heritage streets and street art, up Penang Hill for the view, and back down for Gurney Drive's hawker food at night.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-895884/img0/1600.webp",
                sections: [
                    {
                        title: "Morning: George Town Heritage Walk & Street Art",
                        content: "Start early, before the afternoon heat and the street-art photo queues build up. Walk the heritage zone — the clan houses, Peranakan mansions, and the mix of mosques, temples and shophouses that earned George Town its UNESCO listing — then hunt the street art around Armenian and Cannon Streets, anchored by Zacharevic's \"Kids on Bicycle\" mural.",
                        tourCard: { slug: "george-town-heritage-walking-tour-with-street", title: "George Town: Heritage Walking Tour with Street Food Tasting", description: "Covers the morning's heritage walk with food stops built in so you're not separately hunting for lunch.", price: "From $102", image: "https://images.asiabylocals.com/asiabylocals/tours/my-895884/img0/1600.webp" }
                    },
                    {
                        title: "Afternoon: Penang Hill & Kek Lok Si",
                        content: "Take the funicular up **Penang Hill** for cooler air and views over George Town and the strait, then head to **Kek Lok Si Temple** in Air Itam, Malaysia's largest Buddhist temple complex, on the way back down — the two sit close enough together that a single afternoon covers both comfortably.",
                    },
                    {
                        title: "Evening: Gurney Drive",
                        content: "Finish at **Gurney Drive**, Penang's best-known hawker food strip, right on the waterfront — assam laksa, char kway teow and cendol all within a short walk of each other. It's the natural, unhurried way to close out a single Penang day.",
                    }
                ],
                faqs: [
                    { q: "Can you see George Town in one day?", a: "You can cover the highlights — heritage walk, street art, and either Penang Hill or Kek Lok Si — in a single well-planned day, but a proper, unrushed exploration (and the food) really benefits from 2-3 days." }
                ],
                fastFacts: [
                    { icon: 'MapPin', label: 'Route', value: 'George Town → Penang Hill → Gurney Drive' },
                    { icon: 'Clock', label: 'Duration', value: '1 full day' }
                ]
            };

        case "penang-food-guide":
            return {
                title: "Penang Food Guide: What to Actually Eat (2026)",
                description: "Assam laksa, char kway teow, cendol and nasi kandar — Penang's food reputation is deserved, and this is what to order and where.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-679198/img0/1600.webp",
                sections: [
                    {
                        title: "The Dishes That Define Penang",
                        content: "**Assam laksa** — Penang's signature noodle soup, a tamarind-and-fish broth (distinctly sour rather than the coconut-based laksa found elsewhere in Malaysia) topped with mackerel, pineapple, cucumber and torch ginger flower — genuinely different from laksa anywhere else in the country.\n\n**Char kway teow** — flat rice noodles fried hard and fast over high heat with prawns, cockles, egg and Chinese sausage; Penang's version is widely considered the national benchmark, cooked over charcoal at the best stalls for a smokiness gas burners can't replicate.\n\n**Nasi kandar** — a Penang-born dish now found across Malaysia: rice served with a choice of curries and sides, distinctively doused together rather than kept separate on the plate.\n\n**Cendol** — shaved ice, palm sugar syrup, coconut milk and green pandan noodles; the definitive Penang dessert on a hot afternoon.",
                        tourCard: { slug: "good-morning-penang-food-tour-with-15-tastings", title: "Good Morning Penang Food Tour with 15+ Tastings", description: "A guided morning through the dishes above, with a local guide steering you to the right stalls.", price: "From $84", image: "https://images.asiabylocals.com/asiabylocals/tours/my-679198/img0/1600.webp" }
                    },
                    {
                        title: "Where to Eat",
                        content: "**Gurney Drive** — the best-known hawker strip, waterfront, touristy but reliably good, and the easiest single stop to try several dishes at once in the evening.\n\n**New Lane Hawker Centre** and the **Chulia Street** night stalls sit deeper in the heritage zone and skew a touch more local.\n\n**Air Itam market**, near Kek Lok Si Temple, is worth combining with a temple visit for lunch.\n\nMuch of Penang's best food is genuinely halal by default given the island's Malay and Indian-Muslim communities, but — as in KL — some of the most famous dishes (char kway teow with pork lard, certain noodle shops) are Chinese-run and not halal-certified; ask if it matters to you.",
                    }
                ],
                faqs: [
                    { q: "What is the most famous Penang dish?", a: "Char kway teow and assam laksa are the two most commonly cited — char kway teow for the charcoal-wok technique, assam laksa for its distinctly sour, Penang-specific tamarind broth found nowhere else in Malaysia in quite the same form." },
                    { q: "Is Penang food halal?", a: "Much of it, yes, given the island's Malay and Indian-Muslim communities — but several famous dishes (notably pork-based char kway teow variants) are Chinese-run and not halal-certified. Ask or look for JAKIM signage if it matters." }
                ],
                fastFacts: [
                    { icon: 'Utensils', label: 'Signature Dish', value: 'Assam laksa' },
                    { icon: 'MapPin', label: 'Top Food Street', value: 'Gurney Drive' }
                ]
            };

        case "penang-hill-guide":
            return {
                title: "Penang Hill Guide: Funicular, The Habitat & What to Expect (2026)",
                description: "One of Southeast Asia's steepest funicular railways climbs to Penang's highest point — here's what's actually up there and how to time your visit.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1371383/img0/1600.webp",
                sections: [
                    {
                        title: "The Funicular Railway",
                        content: "Penang Hill is reached by a funicular railway first opened in 1923 and modernised since, climbing at a steep gradient to the summit station in a matter of minutes — it's one of the steepest funicular systems in Southeast Asia, and the ride itself is part of the appeal, not just the view at the top. Queues build through the day, especially on weekends and school holidays, since cars run on a scheduled, capacity-limited basis.\n\nAt the summit, temperatures drop noticeably from the heat of George Town below — a genuine, welcome relief, which is historically exactly why British colonial residents built bungalows up here in the first place.",
                    },
                    {
                        title: "What's At the Top",
                        content: "**The Habitat Penang Hill** is the main paid attraction at the summit — a rainforest canopy walkway and nature trail through genuine tropical forest, with a treetop walk and a curved viewing platform (the \"Habitat Bridge\") looking out over the strait.\n\nBeyond The Habitat, the summit area has viewpoints over George Town and the Strait of Malacca, a small temple, and food stalls — enough to fill a couple of hours without feeling rushed.\n\n**Best timing**: either early morning for cooler air and shorter queues, or late afternoon into sunset for the light over the strait — avoid the early-afternoon window when both heat and crowds peak.",
                        tourCard: { slug: "sunrise-at-penang-hill-kek-lok-si-temple-and", title: "Sunrise at Penang Hill, Kek Lok Si Temple, and Market Tour", description: "Takes the guesswork out of beating the queues with a genuinely early sunrise timing.", price: "From $181", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1294852/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "How do you get up Penang Hill?", a: "A funicular railway, running since 1923 and modernised since, climbs steeply to the summit station in a few minutes. It's one of Southeast Asia's steepest funicular systems." },
                    { q: "What is The Habitat Penang Hill?", a: "A paid rainforest canopy walk and nature trail at the summit, with a treetop walkway and viewing platform over the Strait of Malacca — the main attraction once you're at the top." },
                    { q: "What is the best time to visit Penang Hill?", a: "Early morning or late afternoon/sunset — both avoid the midday heat and the heaviest queues for the funicular." }
                ],
                fastFacts: [
                    { icon: 'TrendingUp', label: 'Access', value: 'Funicular railway, since 1923' },
                    { icon: 'Thermometer', label: 'Summit Climate', value: 'Noticeably cooler than George Town' }
                ]
            };

        case "georgetown-unesco-heritage-guide":
            return {
                title: "George Town UNESCO Heritage Guide: Why It's Listed & What to See (2026)",
                description: "George Town was inscribed as a UNESCO World Heritage Site in 2008 alongside Malacca — here's exactly what earned that listing and the specific buildings worth seeking out.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1182916/img0/1600.webp",
                sections: [
                    {
                        title: "Why George Town Is UNESCO-Listed",
                        content: "In 2008, UNESCO inscribed **\"Melaka and George Town, Historic Cities of the Straits of Malacca\"** as a joint World Heritage Site — not for any single monument, but for the two cities' shared status as living examples of multicultural trading-port architecture and urban form built up over 500+ years of maritime trade through the Strait of Malacca. George Town's specific contribution is its exceptionally intact mix of British colonial administrative buildings, Chinese clan houses and shophouses, Peranakan (Baba Nyonya) architecture, Indian Muslim mosques and Hindu temples, all standing in close, functioning proximity within a compact old town — a physical record of the trading communities that built the port.",
                    },
                    {
                        title: "What to Actually See",
                        content: "**Khoo Kongsi** — the most elaborate of George Town's Chinese clan houses, an ornately decorated clan temple and meeting hall built by the Khoo clan, with intricate roof carvings and gilded detail.\n\n**Cheong Fatt Tze Mansion (the \"Blue Mansion\")** — an indigo-painted Peranakan mansion built by a 19th-century Chinese merchant, now a heritage hotel and museum open for guided tours, featuring traditional feng shui architecture.\n\n**Kapitan Keling Mosque, St. George's Church and the Sri Mahamariamman Temple** sit within a short walk of each other on and around Jalan Masjid Kapitan Keling — unofficially nicknamed \"Harmony Street\" for the density of different faiths' places of worship side by side.\n\nThe heritage zone's shophouses, with their narrow frontages and distinctive \"five-foot ways\" (covered pedestrian walkways mandated under British colonial building codes), are worth noticing as a category, not just the named landmarks.",
                        tourCard: { slug: "george-towns-dark-past-chinese-migration-gang-wars", title: "George Town's Dark Past: Chinese Migration & Gang Wars", description: "A different angle on the heritage zone — the clan rivalries and migration history behind the buildings.", price: "From $164", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1182916/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "When was George Town made a UNESCO World Heritage Site?", a: "2008, jointly with Malacca, under the listing \"Melaka and George Town, Historic Cities of the Straits of Malacca.\"" },
                    { q: "What is the Blue Mansion in George Town?", a: "The Cheong Fatt Tze Mansion, a 19th-century indigo-painted Peranakan merchant's mansion, now a heritage hotel and museum offering guided tours of its traditional architecture." }
                ],
                fastFacts: [
                    { icon: 'Award', label: 'UNESCO Since', value: '2008 (with Malacca)' },
                    { icon: 'Landmark', label: 'Key Site', value: 'Cheong Fatt Tze "Blue Mansion"' }
                ]
            };

        case "penang-beaches-guide":
            return {
                title: "Penang Beaches Guide: Batu Ferringhi & Beyond (2026)",
                description: "Penang isn't primarily a beach destination — here's an honest read on Batu Ferringhi and where the island's water actually gets clean.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-895884/img0/1600.webp",
                sections: [
                    {
                        title: "Batu Ferringhi: Convenient, Not Pristine",
                        content: "**Batu Ferringhi** is Penang's main beach strip, lined with resort hotels, a lively night market, and watersports operators — it's the convenient, resort-adjacent beach option, but honest expectations matter: the water quality here is noticeably murkier than Malaysia's east-coast islands (Perhentian, Redang) or Langkawi's clearer bays, owing to the busy shipping lane of the Strait of Malacca right offshore. Go for the resort atmosphere, the night market, and sunset, not for snorkelling-grade water clarity.",
                    },
                    {
                        title: "Setting Expectations Honestly",
                        content: "If beach quality is the priority of your Malaysia trip, Penang genuinely isn't the island to build it around — Langkawi, roughly 1.5 hours further north by ferry or flight, offers clearer water and more beach-focused infrastructure, and the east-coast island parks (Perhentian, Redang, Tioman) are in a different league again for snorkelling and diving.\n\nPenang's real strength is George Town's heritage and food, with Batu Ferringhi as a pleasant evening add-on rather than the main event. Visitors building a dedicated beach holiday should treat Penang as the culture-and-food leg of a trip and pair it with Langkawi for the beach leg.",
                    }
                ],
                faqs: [
                    { q: "Is Batu Ferringhi a good beach?", a: "It's convenient and resort-friendly with a good night market, but the water is noticeably murkier than Langkawi or Malaysia's east-coast islands due to the busy shipping lane offshore. Go for the atmosphere, not pristine snorkelling water." },
                    { q: "Should I go to Penang for the beaches?", a: "Not primarily — Penang's strength is George Town's heritage and food. If beaches are your priority, pair Penang with Langkawi or an east-coast island for that part of the trip." }
                ],
                fastFacts: [
                    { icon: 'Umbrella', label: 'Main Beach', value: 'Batu Ferringhi' },
                    { icon: 'AlertTriangle', label: 'Honest Note', value: 'Not clear-water snorkelling territory' }
                ]
            };

        case "penang-3-day-itinerary":
            return {
                title: "The Perfect 3-Day Penang Itinerary (2026)",
                description: "A field-tested 3-day Penang plan: George Town heritage and street art on day 1, Penang Hill and Kek Lok Si on day 2, and food plus the clan jetties on day 3.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-67775/img0/1600.webp",
                sections: [
                    {
                        title: "Day 1: George Town Heritage & Street Art",
                        content: "Follow our [1-day Penang itinerary](/malaysia/penang/penang-1-day-itinerary)'s morning plan at a slower pace — the clan houses, Peranakan mansions, Harmony Street's mosques and temples, and the street art hunt along Armenian and Cannon Streets, with no afternoon rush to Penang Hill today.",
                    },
                    {
                        title: "Day 2: Penang Hill, Kek Lok Si & the Clan Jetties",
                        content: "Morning funicular up **Penang Hill** for the view and The Habitat's canopy walk, then **Kek Lok Si Temple** in Air Itam on the way back into town. Late afternoon, walk the **clan jetties** — Chew Jetty specifically — for Penang's last-standing stilt-village waterfront community, now dotted with small cafes and shops but still genuinely inhabited.",
                        tourCard: { slug: "penang-scenic-hilltop-views-kek-lok-si-local", title: "Penang: Scenic Hilltop Views, Kek Lok Si & Local Flavor Tour", description: "Combines the hill, the temple and a food stop into one guided day.", price: "From $134", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1406974/img0/1600.webp" }
                    },
                    {
                        title: "Day 3: Food Deep-Dive & Balik Pulau",
                        content: "Dedicate day 3 to Penang's actual reputation: a guided food tour through assam laksa, char kway teow and cendol stops you'd otherwise never find, or a trip to **Balik Pulau**, the island's rural west side, known for durian orchards and a slower-paced countryside contrasting sharply with George Town's density.",
                        tourCard: { slug: "penang-plates-food-tour-with-15-tastings", title: "Penang Plates Food Tour with 15+ Tastings", description: "The dedicated food day Penang's reputation demands.", price: "From $84", image: "https://images.asiabylocals.com/asiabylocals/tours/my-672622/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Is 3 days enough for Penang?", a: "Yes — it comfortably covers George Town's heritage and street art, Penang Hill and Kek Lok Si, the clan jetties, and a dedicated food day without feeling rushed." }
                ],
                fastFacts: [
                    { icon: 'Calendar', label: 'Duration', value: '3 days' },
                    { icon: 'MapPin', label: 'Route', value: 'George Town → Penang Hill → Food & Clan Jetties' }
                ]
            };

        case "clan-jetties-penang":
            return {
                title: "The Clan Jetties of Penang: Chew Jetty & the Last Stilt Villages (2026)",
                description: "A row of 19th-century Chinese stilt villages still standing over George Town's waterfront — here's the history and which jetty to actually visit.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1466451/img0/1600.webp",
                sections: [
                    {
                        title: "What the Clan Jetties Actually Are",
                        content: "The clan jetties are a row of wooden stilt settlements built out over the water along George Town's waterfront, each established by a different Chinese clan community (surname-based kinship groups) of dockworkers and traders in the 19th century. Each jetty — Chew Jetty, Lim Jetty, Tan Jetty, Yeoh Jetty and others — historically housed only families of that specific clan surname, a structure that in some cases persists informally today. They're among the last surviving stilt settlements of their kind in Malaysia, and remarkably, they're still genuinely inhabited, not preserved as a museum piece.",
                    },
                    {
                        title: "Chew Jetty: The One to Visit",
                        content: "**Chew Jetty** is the largest and most visitor-accessible of the clan jetties, with a walkable wooden boardwalk lined with small shops, cafes and the occasional mural, alongside the residential houses that are still someone's actual home — a genuine working community, not a recreation. Treat it with the same courtesy you'd extend to any residential street: photograph the architecture and the waterfront views respectfully, and be mindful that families live here.\n\nIt's a short walk from George Town's main heritage zone, making it an easy add-on to a heritage-and-street-art day rather than a separate trip.",
                        tourCard: { slug: "penang-chew-jetty-heritage-street-food-night-tour", title: "Penang: Chew Jetty, Heritage & Street Food Night Tour", description: "An evening visit to the jetty combined with the surrounding heritage zone and food.", price: "From $121", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1466451/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "What are the clan jetties in Penang?", a: "19th-century Chinese stilt settlements built over George Town's waterfront, each historically housing one clan's families. They're among the last inhabited stilt villages of their kind in Malaysia." },
                    { q: "Which clan jetty should I visit in Penang?", a: "Chew Jetty — it's the largest and most visitor-accessible, with a walkable boardwalk, while still being a genuine, inhabited residential community worth visiting respectfully." }
                ],
                fastFacts: [
                    { icon: 'Home', label: 'Built', value: '19th century' },
                    { icon: 'MapPin', label: 'Most Visited', value: 'Chew Jetty' }
                ]
            };

        case "kek-lok-si-temple-guide":
            return {
                title: "Kek Lok Si Temple Guide: Malaysia's Largest Buddhist Temple (2026)",
                description: "A sprawling hillside complex in Air Itam with a towering pagoda and a giant Guanyin statue — what to see and how to time your visit around the crowds.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1371383/img0/1600.webp",
                sections: [
                    {
                        title: "What's Inside the Complex",
                        content: "**Kek Lok Si** ('Temple of Supreme Bliss') in Air Itam is the largest Buddhist temple complex in Malaysia, built up the hillside over decades starting in the late 19th century, blending Chinese, Thai and Burmese architectural styles across its different structures. The centrepiece is the **Pagoda of Rama VI (Ban Po Thar)**, a seven-tiered, 30-metre tower combining a Chinese octagonal base, a middle tier of Thai design and a Burmese crown — a visible record of the temple's pan-Asian Buddhist patronage.\n\nHigher up the hill stands a towering bronze statue of **Guanyin**, the Buddhist goddess of mercy, sheltered under a large pavilion roof — one of the most striking single images in the complex and visible from some distance around Air Itam.",
                    },
                    {
                        title: "Visiting Practically",
                        content: "An inclined lift (funicular-style) carries visitors up the steeper sections of the hillside between the main temple levels and the Guanyin statue, for those who'd rather not climb the full way on foot — useful in the heat.\n\nThe complex is especially lit up and crowded during **Chinese New Year**, when thousands of lanterns illuminate the pagoda and grounds nightly for weeks — spectacular, but expect significant crowds if visiting in that window.\n\nFor a quieter visit, go on a weekday morning outside Chinese New Year; combine it with Penang Hill, which sits close enough by road to cover both in one afternoon.",
                        tourCard: { slug: "ayer-itam-kek-lok-si-laksas-lok-lok-street", title: "Ayer Itam: Kek Lok Si, Laksas, Lok Lok Street Food Dinner", description: "Pairs the temple visit with the local Air Itam food scene right around it.", price: "From $129", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1345507/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "What is Kek Lok Si Temple known for?", a: "It's the largest Buddhist temple complex in Malaysia, known for the seven-tiered Pagoda of Rama VI (blending Chinese, Thai and Burmese design) and a towering bronze Guanyin statue higher up the hill." },
                    { q: "When is Kek Lok Si most crowded?", a: "During Chinese New Year, when the complex is illuminated with thousands of lanterns for weeks — spectacular but busy. A weekday morning outside that period is far quieter." }
                ],
                fastFacts: [
                    { icon: 'Landmark', label: 'Status', value: "Malaysia's largest Buddhist temple" },
                    { icon: 'MapPin', label: 'Location', value: 'Air Itam, Penang' }
                ]
            };

        // ============ LANGKAWI ============

        case "langkawi-cable-car-guide":
            return {
                title: "Langkawi Cable Car (SkyCab) Guide: Tickets, SkyBridge & Best Time to Go (2026)",
                description: "The SkyCab ride up Gunung Mat Cincang to the SkyBridge is Langkawi's signature non-beach attraction — here's how steep it actually is and when to go for clear views.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1358246/img0/1600.webp",
                sections: [
                    {
                        title: "What the Ride Involves",
                        content: "The **Langkawi SkyCab** climbs **Gunung Mat Cincang**, the island's second-highest peak, in a cable car ride notable for its steep gradient — one section is among the steepest cable car ascents of its kind, giving genuinely dramatic views over Langkawi's rainforest canopy and the Andaman Sea as you climb. The ride is split into two stages with a mid-station changeover.\n\nAt the top, the **SkyBridge** — a curved pedestrian suspension bridge suspended across a valley gap near the summit — is the signature photo stop, offering a near-360° panorama back across the island and out to the sea and neighbouring islands (and on a clear day, towards southern Thailand).",
                    },
                    {
                        title: "Timing & Practical Tips",
                        content: "**Go early morning** for the clearest visibility — cloud cover and haze build up through the day, and by mid-afternoon the summit view is frequently obscured, especially in the wetter months. Weekends and Malaysian school holidays mean longer queues for the cable car itself, since capacity per car is limited.\n\nThe SkyBridge has its own separate entry queue once you're at the top station — factor in extra time beyond just the cable car ride, and don't plan the visit as a quick 30-minute stop.",
                        tourCard: { slug: "langkawi-island-tour-with-cable-car-sky-bridge", title: "Langkawi: Island Tour with Cable Car & Sky Bridge Tickets", description: "Bundles the SkyCab and SkyBridge entry with a wider island tour so logistics are handled.", price: "From $1,206", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1358246/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "What is the Langkawi SkyCab?", a: "A cable car that climbs Gunung Mat Cincang, Langkawi's second-highest peak, known for one unusually steep ascent section, connecting to the SkyBridge suspension bridge near the summit." },
                    { q: "What time should I go to the Langkawi cable car?", a: "Early morning — visibility is clearest before cloud and haze build up through the day, and queues are shorter before weekend and holiday crowds arrive." }
                ],
                fastFacts: [
                    { icon: 'Mountain', label: 'Peak', value: 'Gunung Mat Cincang' },
                    { icon: 'Sunrise', label: 'Best Time', value: 'Early morning' }
                ]
            };

        case "langkawi-duty-free-shopping":
            return {
                title: "Langkawi Duty-Free Shopping Guide: What's Actually Worth Buying (2026)",
                description: "Langkawi is a designated duty-free island — here's what genuinely gets cheaper (chocolate, alcohol), what doesn't, and where the shops actually are.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-620115/img0/1600.webp",
                sections: [
                    {
                        title: "Why Langkawi Is Duty-Free",
                        content: "Langkawi holds **designated duty-free status**, exempting a range of imported goods from Malaysia's usual import and sales taxes — a policy aimed at boosting tourism to the island. In practice, this makes certain categories noticeably cheaper than mainland Malaysia or neighbouring countries, which is why duty-free shopping shows up consistently as a trip activity in its own right, not just an airport-departure habit.\n\n**Alcohol and chocolate** are the two categories where the savings are most obvious and most commonly bought by visitors — imported spirits, wine and beer, plus well-known chocolate brands, at prices meaningfully below what you'd pay in KL or Penang.",
                    },
                    {
                        title: "What's Worth Buying vs. Skipping",
                        content: "**Worth it**: alcohol (spirits and wine especially show the biggest gap versus mainland prices) and imported chocolate — these are the two categories where duty-free status translates into a real, noticeable discount.\n\n**Less clear-cut**: electronics and perfumes are sometimes marketed as duty-free bargains too, but the actual savings versus shopping at home or in a bigger regional hub (Singapore, KL's own duty-free zones) can be marginal — compare before assuming Langkawi automatically wins.\n\n**Where to shop**: duty-free outlets cluster around **Kuah** (the main town, near the ferry terminal) and **Pantai Cenang** (the main tourist beach strip), plus the airport itself on departure. Note that duty-free alcohol purchases are typically intended for personal consumption on the island or export, with quantity limits applying if you're carrying it elsewhere in Malaysia.",
                        tourCard: { slug: "langkawi-island-hopping-pregnant-maiden-lake-tour", title: "Langkawi: Island Hopping + Pregnant Maiden Lake Tour", description: "A full island day that can be paired with a duty-free shopping stop in Kuah or Cenang.", price: "From $36", image: "https://images.asiabylocals.com/asiabylocals/tours/my-620115/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Why is Langkawi duty-free?", a: "It holds a designated duty-free status that exempts certain imported goods from Malaysia's usual taxes, as a tourism-boosting policy. Alcohol and chocolate see the most noticeable price advantage." },
                    { q: "Where can I do duty-free shopping in Langkawi?", a: "Mainly around Kuah town (near the ferry terminal) and Pantai Cenang (the main beach strip), plus the airport on departure." }
                ],
                fastFacts: [
                    { icon: 'ShoppingBag', label: 'Best Buys', value: 'Alcohol, chocolate' },
                    { icon: 'MapPin', label: 'Shopping Areas', value: 'Kuah town, Pantai Cenang' }
                ]
            };

        // ============ MALACCA ============

        case "malacca-unesco-heritage-guide":
            return {
                title: "Malacca UNESCO Heritage Guide: A Famosa, Jonker Street & Baba Nyonya Culture (2026)",
                description: "Malacca shares its 2008 UNESCO listing with George Town — here's what earned it the status and the specific sights that tell the Portuguese-Dutch-British-Peranakan story.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1119805/img0/1600.webp",
                sections: [
                    {
                        title: "A Longer Colonial Layering Than Penang",
                        content: "Malacca (Melaka) shares its 2008 UNESCO World Heritage listing with George Town, but its specific history runs deeper and through more hands: a major 15th-century Malay sultanate trading port, then successively colonised by the **Portuguese (from 1511)**, the **Dutch (from 1641)**, and finally the **British** — each leaving distinct physical layers still visible today, a density of colonial succession George Town doesn't quite match.\n\n**A Famosa**, or what remains of it — a single surviving gatehouse, the **Porta de Santiago** — is the last visible fragment of the Portuguese fortress built in 1511, one of the oldest surviving European architectural remains in Southeast Asia. Most of the fort was demolished by the British in the early 19th century; the gatehouse survived only because Stamford Raffles personally intervened to save it.",
                    },
                    {
                        title: "Jonker Street & Baba Nyonya Heritage",
                        content: "**Jonker Street (Jalan Hang Jebat)** is Malacca's historic Chinatown commercial spine, lined with antique shops, cafes and Peranakan heritage houses, and transforms into a lively night market on weekend evenings.\n\nMalacca is also the historical heartland of **Baba Nyonya (Peranakan) culture** — the distinctive community descended from Chinese traders who settled and intermarried with local Malays centuries ago, producing a unique fusion of language, cuisine and architecture. The **Baba Nyonya Heritage Museum**, housed in a restored period mansion on Jonker Street, is the best single stop for understanding this culture's domestic life and aesthetic.\n\n**The Stadthuys**, the salmon-red Dutch colonial town hall built in the 1650s, anchors Dutch Square and is among the oldest Dutch buildings in Asia.",
                        tourCard: { slug: "melaka-rempah-routes-food-tour-with-15-tastings", title: "Melaka: Rempah Routes Food Tour with 15+ Tastings", description: "A food-led route through the Peranakan and Malay flavours this heritage city is known for.", price: "From $75", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1209075/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "Why is Malacca a UNESCO World Heritage Site?", a: "It was jointly inscribed with George Town in 2008 for its exceptional record of multicultural trading-port history — successive Portuguese, Dutch and British colonisation layered onto a major Malay sultanate port, still visibly intact today." },
                    { q: "What is left of A Famosa fort?", a: "Only the Porta de Santiago gatehouse survives — most of the 1511 Portuguese fortress was demolished by the British in the early 19th century, and the gatehouse was saved only by Stamford Raffles' personal intervention." }
                ],
                fastFacts: [
                    { icon: 'Award', label: 'UNESCO Since', value: '2008 (with George Town)' },
                    { icon: 'Landmark', label: 'Key Sight', value: 'A Famosa (Porta de Santiago)' }
                ]
            };

        case "best-time-to-visit-malacca":
            return {
                title: "Best Time to Visit Malacca: Weather & Festival Guide (2026)",
                description: "Malacca shares Peninsular Malaysia's year-round heat and monsoon pattern — here's the practical breakdown and the festivals that make a specific visit worth timing.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1498978/img0/1600.webp",
                sections: [
                    {
                        title: "Weather: The Same Peninsular Pattern as KL",
                        content: "Malacca sits on the west coast of the Malay Peninsula and follows the same broad pattern as KL and Penang — year-round heat (31-33°C by day), no true dry season, a comparatively drier **Southwest Monsoon window (May-September)** with short afternoon storms, and a wetter **Northeast Monsoon (October-March)** with heavier, more sustained rain. The same regional haze risk (roughly July-October) that affects the rest of Peninsular Malaysia applies here too, though Malacca's lower-rise, more spread-out layout feels slightly less oppressive on a hazy day than dense KL.",
                    },
                    {
                        title: "Festivals & Practical Timing",
                        content: "**Jonker Street's weekend night market** (Friday-Sunday evenings) is the single most time-specific reason to plan around a particular day — it transforms the old Chinatown street into a lively food-and-stalls market that doesn't run on weekday evenings, so a weekday visit genuinely misses it.\n\n**Chinese New Year** brings lion dances and lantern displays to the heritage district given Malacca's historic Peranakan Chinese community.\n\nAs a day-trip-friendly city only 1.5-2 hours from KL, many visitors pair Malacca with a weekend specifically to catch the Jonker Street market — worth building your dates around if that's on your list.",
                        tourCard: { slug: "from-kuala-lumpur-port-dickson-malacca-heritage", title: "From Kuala Lumpur: Port Dickson & Malacca Heritage Day Tour", description: "A day-trip option that pairs naturally with a weekend Jonker Street evening if timed right.", price: "From $475", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1498826/img0/1600.webp" }
                    }
                ],
                faqs: [
                    { q: "When is the Jonker Street night market in Malacca?", a: "Friday, Saturday and Sunday evenings only — it doesn't run on weekday nights, so plan your visit around a weekend if this is a priority." },
                    { q: "Is Malacca affected by the same haze as KL?", a: "Yes, the same regional haze risk window (roughly July-October) applies across Peninsular Malaysia, though severity varies year to year." }
                ],
                fastFacts: [
                    { icon: 'Calendar', label: 'Night Market', value: 'Fri-Sun evenings, Jonker St' },
                    { icon: 'Thermometer', label: 'Temperature', value: '31-33°C year-round' }
                ]
            };

        // ============ KOTA KINABALU ============

        case "mount-kinabalu-guide":
            return {
                title: "Mount Kinabalu Guide: Climbing Malaysia's Highest Peak (2026)",
                description: "At 4,095m, Mount Kinabalu is Southeast Asia's third-highest peak and climbable without mountaineering experience — but permits are capped and the 2-day structure is non-negotiable.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1008301/img0/1600.webp",
                sections: [
                    {
                        title: "What Climbing Kinabalu Actually Involves",
                        content: "**Mount Kinabalu**, at **4,095 metres**, is Malaysia's highest peak and one of the highest in Southeast Asia, located in Kinabalu Park (a UNESCO World Heritage Site in its own right) roughly 2 hours' drive from Kota Kinabalu. It doesn't require technical mountaineering skill or equipment — no ropes or climbing gear beyond sturdy boots and warm layers — but it is a genuinely demanding high-altitude trek, not a casual day hike.\n\nThe standard climb is structured over **2 days, 1 night**: day one is a steep ascent from Timpohon Gate (around 1,866m) up to Laban Rata resthouse (around 3,272m), typically taking 4-6 hours; climbers sleep there, then wake well before dawn (often around 2am) for the final push to the summit, **Low's Peak**, timed to arrive for sunrise before descending the same day all the way back down. This 2-day structure exists because the full ascent and descent in a single day isn't realistically achievable given the altitude gain and the pre-dawn summit timing that makes the sunrise views possible.",
                        tourCard: { slug: "sabah-3-days-2-night-mount-kinabalu-climb", title: "Sabah: 3 Days 2 Night Mount Kinabalu Climb", description: "The full structured climb with the overnight stay at Laban Rata built in, as the mountain requires.", price: "From $2,273", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1008301/img0/1600.webp" }
                    },
                    {
                        title: "Permits, Guides & Booking Ahead",
                        content: "**Climbing permits are capped daily** to manage trail impact and Laban Rata's limited bed capacity — this is the detail that catches people out. Independent, unplanned climbs essentially don't happen; permits and the mandatory accompanying guide must be arranged through Kinabalu Park's authorised operators, and **booking well in advance (weeks to months, more in peak season)** is standard practice rather than an exaggeration, since the daily permit cap genuinely does sell out.\n\nA certified mountain guide is mandatory for every climbing group, for safety and to manage the limited trail capacity — this isn't optional even for experienced hikers.\n\n**Altitude matters**: some degree of altitude-related discomfort (headache, breathlessness) is common even for fit climbers given the elevation gain, and a small minority need to turn back before the summit. Pace yourself on day one specifically to arrive at Laban Rata in reasonable shape for the pre-dawn push.",
                    }
                ],
                faqs: [
                    { q: "How long does it take to climb Mount Kinabalu?", a: "2 days, 1 night is the standard structure: a steep ascent to Laban Rata resthouse (around 3,272m) on day one, then a pre-dawn push to the summit for sunrise, followed by a full descent on day two." },
                    { q: "Do I need a permit to climb Mount Kinabalu?", a: "Yes — permits are capped daily and must be booked through Kinabalu Park's authorised operators, often weeks to months ahead since the daily cap genuinely sells out, especially in peak season." },
                    { q: "Do you need climbing experience for Mount Kinabalu?", a: "No technical mountaineering skill is required, but it's a genuinely demanding high-altitude trek — reasonable fitness matters, and some altitude discomfort is common even among fit climbers." }
                ],
                fastFacts: [
                    { icon: 'Mountain', label: 'Height', value: '4,095 m' },
                    { icon: 'Calendar', label: 'Standard Climb', value: '2 days, 1 night' },
                    { icon: 'FileCheck', label: 'Permits', value: 'Capped daily — book ahead' }
                ]
            };

        case "kota-kinabalu-island-hopping":
            return {
                title: "Kota Kinabalu Island Hopping Guide: Tunku Abdul Rahman Marine Park (2026)",
                description: "Five islands a short boat ride from the city centre — here's which of Manukan, Sapi, Mamutik, Gaya and Sulug are actually worth your limited time.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1397197/img0/1600.webp",
                sections: [
                    {
                        title: "The Five Islands of Tunku Abdul Rahman Marine Park",
                        content: "**Tunku Abdul Rahman Marine Park** comprises five islands just off Kota Kinabalu's coast — **Gaya, Sapi, Manukan, Mamutik and Sulug** — making this one of the few major Southeast Asian cities with protected marine park islands reachable by a short jetty ride (15-20 minutes from the city centre's ferry terminal) rather than a half-day boat transfer.\n\n**Manukan** is the most developed and most visited, with the best range of facilities (restaurants, chalets, changing rooms) and a long, popular beach. **Sapi** is generally considered to have the best snorkelling of the easily accessible islands, with clearer water and a more intact reef close to shore. **Gaya**, the largest, has limited beach access for day visitors compared to the others but offers short jungle trekking trails. **Mamutik** and **Sulug** are smaller and quieter, often included on multi-island hopping packages rather than visited standalone.",
                        tourCard: { slug: "kota-kinabalu-lovely-paradise-island-tour-seafood", title: "Kota Kinabalu: Lovely Paradise Island Tour + Seafood Lunch", description: "A multi-island hopping day covering several of the five park islands with lunch included.", price: "From $225", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1274321/img0/1600.webp" }
                    },
                    {
                        title: "Practical Tips",
                        content: "A **marine park entrance fee** applies on top of boat transfer costs, usually collected at the jetty or included in a packaged tour price — confirm what's included before booking independently.\n\nMost visitors combine **2-3 islands in a single day** via a hopping package rather than picking just one, since the short distances between them make it easy. If you only have time for one, **Sapi for snorkelling** or **Manukan for an easier, more comfortable beach day** are the two default recommendations.\n\nGo on a weekday if possible — weekends bring noticeably more local day-trippers from Kota Kinabalu itself, since the islands are as popular with residents as with tourists.",
                    }
                ],
                faqs: [
                    { q: "Which island should I visit from Kota Kinabalu?", a: "Sapi for the best easily accessible snorkelling; Manukan for the most developed, comfortable beach day. Most hopping tours combine 2-3 islands in a single day since they're close together." },
                    { q: "How far are the Tunku Abdul Rahman islands from Kota Kinabalu?", a: "About 15-20 minutes by boat from the city centre's jetty terminal — one of the more convenient marine-park island groups in Southeast Asia relative to a major city." }
                ],
                fastFacts: [
                    { icon: 'MapPin', label: 'Islands', value: 'Gaya, Sapi, Manukan, Mamutik, Sulug' },
                    { icon: 'Clock', label: 'From City Jetty', value: '15-20 minutes by boat' }
                ]
            };

        default:
            return null;
    }
}
