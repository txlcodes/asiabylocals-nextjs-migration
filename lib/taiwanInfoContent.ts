// Taiwan (Taipei) authority pages (2026-10). Same CityInfoData shape as
// hongkongInfoContent.ts / cityInfoContent.ts. Taipei launched with 157 live
// tours and zero authority pages — this is the first batch, 15 pages.
// Reached via getTaiwanInfoContent() -> getCityInfoContent(). Every tourCard
// slug is taken from the live tour list: GET /api/public/tours?country=Taiwan&city=Taipei&status=approved
import type { CityInfoData } from './cityInfoContent';

export function getTaiwanInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-taipei":
      return {
        title: "Best Time to Visit Taipei (2026): Weather, Typhoons and Crowds Month by Month",
        description: "Taipei's weather is mild but humid most of the year, with a real typhoon risk from July through October. Here's when to actually go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6372d948037878a6e34ad1f4372d7b7e8d465401e9e5117513061493b6cf362f.jpg",
        fastFacts: [
          { icon: "Sun", label: "Best overall window", value: "October to December — drier, cooler, lower typhoon risk" },
          { icon: "AlertTriangle", label: "Typhoon season", value: "July to October, peaking August-September" },
          { icon: "CloudRain", label: "Wettest months", value: "May to June (plum rain season, 'meiyu')" },
          { icon: "Thermometer", label: "Coolest months", value: "December to February, 12-18°C, occasional cold fronts" },
        ],
        sections: [
          {
            title: "October to December Is the Safest, Most Comfortable Window",
            content: "Taipei's autumn is the period most visitors end up happiest with: typhoon season is winding down by late October, humidity drops out of the oppressive summer range, and daytime temperatures settle into a comfortable low-to-mid 20s°C. Rainfall is lower than spring or summer, and the light is generally clearer, which matters if you're planning a Jiufen or Yangmingshan day trip where views are the whole point. This window also lines up with the city's own seasonal food calendar — persimmon season in the hills around Taipei, and the cooler evenings that make a night market crawl through Shilin or Raohe genuinely pleasant rather than a sweat-soaked errand.\n\nThe tradeoff is that this is also when most other travelers are thinking the same thing, so book Jiufen day-trip transport and any timed-entry tickets (Taipei 101, the National Palace Museum) a few days ahead rather than assuming same-day availability.",
          },
          {
            title: "Why Summer (June-September) Carries Real Typhoon Risk, Not Just Heat",
            content: "June through September in Taipei is hot and humid — daytime highs regularly in the low-to-mid 30s°C with afternoon humidity that makes it feel hotter still — but the bigger planning issue is typhoon season, which runs roughly July through October and peaks in August and September. A direct hit doesn't just mean rain: Taiwan issues work-and-school suspension orders for the whole city when a typhoon is expected to make a close pass, which shuts down the MRT above-ground sections, outdoor attractions, cable cars like Maokong, and most day-trip transport to Jiufen or Yangmingshan for at least a day. Trips during this window should build in at least one flexible day and avoid stacking a single must-see activity (a mountain day trip, a specific food tour) into the only day you have.\n\nThe upside: this is also when hotel rates are softest, and indoor attractions — the National Palace Museum, Taipei 101's indoor observatory, the city's dense indoor food scene — are entirely unaffected by a storm.",
            tourCard: { slug: "taipei-city-highlights-tour-with-taipei-101", title: "Taipei: City Highlights Tour with Taipei 101 Observatory", description: "An indoor-heavy highlights loop that still works on a rainy or storm-adjacent day.", price: "From $89", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png" },
          },
          {
            title: "Spring's Plum Rain and Winter's Mild, Overcast Cool",
            content: "May and June bring Taiwan's 'meiyu' or plum rain season — a stretch of persistent, often heavy rain driven by a seasonal front, distinct from a typhoon in that it's steady drizzle and downpours rather than a single storm system. It's workable if you don't mind an umbrella as a daily accessory, but it's not the season to count on clear Yangmingshan or Jiufen views.\n\nWinter (December-February) is mild by most standards — daytime highs of 12-18°C, rarely colder — but Taipei's basin geography traps humidity and cloud cover, so expect more grey, drizzly days than genuinely cold ones. It's a reasonable time to visit if your priority is indoor food culture and museums over hiking and lookout points, and hotel rates tend to be gentler outside the Lunar New Year period itself, which shifts year to year and briefly shuts many local businesses.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Taipei?", a: "November is generally the strongest single month: typhoon season has largely wound down, humidity is lower, and daytime temperatures sit in a comfortable low-to-mid 20s°C range." },
          { q: "When is Taiwan's typhoon season?", a: "Roughly July through October, peaking in August and September. A direct hit can suspend work, school, the MRT's above-ground sections and most day-trip transport for a day or more, so build flexibility into trips during this window." },
          { q: "Is Taipei humid year-round?", a: "Mostly yes — even winter carries noticeable humidity because of the city's basin geography. Summer (June-September) is the most oppressive stretch; autumn (October-December) is the driest comfortable window." },
          { q: "What is Taiwan's plum rain season?", a: "A period of persistent rain, called 'meiyu', typically in May and June, driven by a seasonal weather front rather than a single storm. It's distinct from typhoon season but equally worth planning around if clear skies matter to your itinerary." },
        ],
      };

    case "things-to-do-in-taipei":
      return {
        title: "25+ Best Things to Do in Taipei (2026): The Complete List",
        description: "From Taipei 101 and Longshan Temple to night markets and Jiufen — the real list of what's worth your time in Taipei, organized by how much time you have.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        fastFacts: [
          { icon: "Building", label: "Top landmark", value: "Taipei 101 Observatory" },
          { icon: "Landmark", label: "Best day trip", value: "Jiufen's old mountain streets and teahouses" },
          { icon: "Utensils", label: "Don't skip", value: "A proper night market crawl — Shilin, Raohe or Ningxia" },
          { icon: "Mountain", label: "Free afternoon", value: "Elephant Mountain (Xiangshan) for the classic Taipei 101 skyline shot" },
        ],
        sections: [
          {
            title: "The Essentials: What Everyone Should Do At Least Once",
            content: "**Taipei 101** anchors the Xinyi district and is the obvious starting point — once the world's tallest building, it still holds one of the better city views in Asia from its 89th-floor observatory, and the tuned mass damper visible through glass on one of the upper floors is a genuinely interesting piece of engineering most visitors have never seen in person. Pair a Taipei 101 visit with a short hike up **Elephant Mountain (Xiangshan)** nearby, which gives the reverse view — the tower itself lit up against the Taipei skyline — and is free, requiring only a steep but short climb up stone steps.\n\nFor religious and historic sites, **Longshan Temple** in Wanhua is the most atmospheric: a working Buddhist and Taoist temple founded in 1738, still busy with locals burning incense and praying rather than staged for tourists. Combine it with a walk through **Dadaocheng** and **Dihua Street**, Taipei's old merchant quarter of herbal medicine shops, dried-goods stalls and restored Qing-and-Japanese-era shophouses.",
            tourCard: { slug: "taipei-longshan-temple-dihua-street-taipei-101", title: "Taipei: Longshan Temple, Dihua Street & Taipei 101 Tour", description: "Longshan Temple, the Dadaocheng old quarter and Taipei 101 in one guided loop.", price: "From $466", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c6e6382cd4e43257d35e28c523c9ac75b5c4bd79122f4ce9656a2ca3ef3fbd4.png" },
          },
          {
            title: "Night Markets: Taipei's Real Evening Culture",
            content: "Night markets are not a tourist add-on in Taipei, they're how a large part of the city actually eats dinner. **Shilin Night Market** is the biggest and most famous, sprawling across a covered market building and surrounding streets near Jiantan MRT station, with everything from giant fried chicken cutlets to stinky tofu. **Raohe Street Night Market**, entered through a dramatic temple gate, is more compact and widely considered to have a stronger food-to-tourist-trap ratio. **Ningxia Night Market** is smaller again and leans harder into Taiwanese comfort-food classics — oyster omelets, braised pork rice, herbal soups — in a tighter, more walkable footprint than Shilin's sprawl.\n\nNone of these require a guide to enjoy, but a guided food walk is worth it on a first visit specifically to get past the language barrier at stalls and to avoid wasting stomach space on the wrong first few dishes.",
            tourCard: { slug: "taipei-2-hour-raohe-night-market-walking-tour", title: "Taipei: 2-Hour Raohe Night Market Walking Tour", description: "A guided walk through Raohe's stalls with a local pointing out what's actually good.", price: "From $78", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png" },
          },
          {
            title: "Jiufen and the Northeast Coast: A Half-Day Out of the City",
            content: "**Jiufen**, a former gold-mining town built into a steep hillside about an hour from Taipei, is famous for its narrow lantern-lit old street and the teahouses that inspired comparisons to Hayao Miyazaki's *Spirited Away* — the resemblance is more atmosphere than direct reference, but it's real enough that the town draws heavy crowds, especially on weekends and holidays. Go on a weekday if your schedule allows it; the alleys are narrow enough that weekend crowds genuinely slow movement to a shuffle.\n\nMost day trips pair Jiufen with **Shifen**, where you can release your own sky lantern over the old train tracks, and sometimes **Yehliu Geopark**, known for its wind-and-wave-carved rock formations including the famous 'Queen's Head'. Budget a full day for the combination rather than trying to rush all three.",
            tourCard: { slug: "from-taipei-jiufen-and-shifen-day-trip-with-guide", title: "From Taipei: Jiufen and Shifen Day Trip with Guide Bus Tour", description: "A guided day covering Jiufen's old street and Shifen's lantern release and waterfall.", price: "From $62", duration: "7.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg" },
          },
          {
            title: "If You Have More Time: Hot Springs, Tea Culture and the Mountains",
            content: "**Beitou**, a 20-minute MRT ride from the city center, has been a hot-spring district since the Japanese colonial era, with both public bathhouses and private hotel springs fed by the same geothermal valley that still steams visibly at Beitou Thermal Valley. **Maokong**, reachable by a scenic gondola from Taipei Zoo station, is a tea-growing hillside with open-air teahouses looking back over the city — a slower, greener contrast to the Xinyi skyline.\n\nFor hikers, **Yangmingshan National Park** sits inside the city's administrative boundary yet feels like a different province entirely, with sulfur vents, grassland trails and seasonal flower blooms. See our dedicated guides to Jiufen, Beitou, Maokong and Yangmingshan for the specifics on each.",
            tourCard: { slug: "from-taipei-private-maokong-gondola-tea-culture", title: "From Taipei: Private Maokong Gondola & Tea Culture Day Tour", description: "The gondola ride up and a proper tea-tasting stop in the hills above the city.", price: "From $546", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4582daf2ac14268b503fdf943a54e9cf5b7f442c689b80a04ef2d861aca7a428.jpeg" },
          },
        ],
        faqs: [
          { q: "What is Taipei's number one attraction?", a: "Taipei 101 is the single most-visited landmark, mainly for the 89th-floor observatory view and the visible tuned mass damper, but Longshan Temple and the night markets are close behind for what locals consider essential." },
          { q: "Is one day enough to see Taipei?", a: "You can cover Taipei 101, a temple or old-quarter walk and one night market in a focused single day, but Taipei rewards 3+ days once you add Jiufen, Beitou's hot springs and Yangmingshan." },
          { q: "What is there to do in Taipei besides shopping?", a: "A great deal: Taipei 101 and Elephant Mountain's skyline views, Longshan Temple, night market food crawls, Jiufen's old street, Beitou's hot springs, and Maokong's tea-growing hills reached by gondola." },
          { q: "Is Taipei good for a short layover?", a: "Yes — Taoyuan Airport is roughly 40-50 minutes from the city center by MRT, and Taipei 101 plus a night market can realistically fit into a single layover day of 10+ hours." },
        ],
      };

    case "taipei-travel-guide-2026":
      return {
        title: "Taipei Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Taipei — entry rules, money, getting around, language and what makes this city different from mainland China.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6372d948037878a6e34ad1f4372d7b7e8d465401e9e5117513061493b6cf362f.jpg",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "Most Western and many Asian nationalities visa-free, 30-90 days depending on passport" },
          { icon: "DollarSign", label: "Currency", value: "New Taiwan Dollar (TWD/NT$)" },
          { icon: "Train", label: "Getting around", value: "MRT subway, buses — EasyCard covers all of it" },
          { icon: "MessageCircle", label: "Languages", value: "Mandarin Chinese and Taiwanese Hokkien widely spoken; English limited outside tourist areas" },
        ],
        sections: [
          {
            title: "Entry Rules: Who Needs a Visa, and the Arrival Card",
            content: "Taiwan runs one of the more generous visa-free regimes in Asia for a wide range of nationalities. Citizens of the United States, Canada, the United Kingdom, most of the EU, Australia, New Zealand, Japan and South Korea, among others, can enter visa-free for up to 90 days. Several Southeast Asian nationalities, including Thailand, Brunei and the Philippines, have had a shorter visa-free trial extended into 2026 as well, typically for 14 days. Regardless of visa-free status, every visitor needs a passport valid well beyond the planned stay and must complete Taiwan's online **Arrival Card (TWAC)** within three days before landing — this is a straightforward form, not a visa application, but skipping it can cause delays at immigration.\n\nTaiwan's entry system is entirely separate from mainland China's and from Hong Kong's — don't assume any exemption or visa from one covers the others if your trip spans more than one.",
          },
          {
            title: "Money, Cards and the EasyCard",
            content: "The **New Taiwan Dollar (TWD, often written NT$)** is the local currency. Credit cards are widely accepted in malls, hotels and chain restaurants, but a large share of night market stalls, small eateries and local shops are cash-only or prefer it, so carry some NT$ rather than assuming card payment everywhere. The single most useful purchase for any visitor is an **EasyCard** — a rechargeable contactless smart card that covers the MRT, city buses, many convenience store purchases, and bike-share docks, functionally the same role Hong Kong's Octopus or Japan's Suica play in their own cities.\n\nTipping is not expected in Taiwan — restaurants often add a 10% service charge automatically on larger bills, and further tipping beyond that is unusual rather than appreciated.",
          },
          {
            title: "Getting Around: The MRT and EasyCard Do Most of the Work",
            content: "Taipei's **MRT** subway system is clean, frequent, and easy for a first-time visitor to navigate without local help — stations are signed in English as well as Chinese, announcements are bilingual, and a direct line connects **Taoyuan International Airport** to the city center in roughly 40-50 minutes. Buy an EasyCard at any MRT station or convenience store on arrival and top it up at station machines or 7-Eleven counters; tapping in and out is faster than buying single-journey tickets for every ride, especially if you're adding a few day trips to Jiufen or Beitou that start from an MRT station.\n\nTaxis are plentiful, metered and reasonably priced, though language can be a barrier outside the tourist core — having your destination written in Chinese characters (most hotels will do this for you) smooths this out considerably. Scooters are everywhere and part of the city's texture, but renting one as a short-term visitor without a Taiwan-recognized license is legally complicated and not advisable.",
            tourCard: { slug: "airport-transfer-from-tpe-airport-to-taipei-city", title: "Airport Transfer: From TPE Airport to Taipei City", description: "A private transfer that skips the MRT learning curve on arrival day.", price: "From $121", duration: "1.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eba596335b324cca4d31cd6ee96c04a55d022a8989e855f46c20a540be7bc9b8.jpg" },
          },
          {
            title: "Language, Food and Everyday Etiquette",
            content: "**Mandarin Chinese** is the official and dominant language, with **Taiwanese Hokkien** widely spoken among older generations and in daily life, especially outside the city center. English is taught in schools and spoken by many younger residents and in hospitality settings, but it's noticeably less universal than in Hong Kong or Singapore — menus at smaller local eateries and night market stalls are often Chinese-only, which is part of why a guided food tour is worth it on a first visit.\n\nNight market food culture, dim-sum-adjacent dumpling houses and genuinely excellent bubble tea (invented in Taiwan, with competing claims between a Taichung and a Tainan teahouse over who did it first) define Taipei's food identity more than formal restaurants do. Taipei is dense and efficient but generally warmer and more patient with visitors than some other major Asian cities — locals are often willing to help with directions even through a language gap.",
          },
        ],
        faqs: [
          { q: "Do I need a visa for Taiwan?", a: "Most Western nationalities and many Asian ones do not — Taiwan's visa-free regime covers the US, UK, most of the EU, Australia, New Zealand, Japan and South Korea for up to 90 days, with some Southeast Asian nationalities on a shorter extended trial. Everyone must complete the online Arrival Card before landing regardless." },
          { q: "What currency does Taiwan use?", a: "The New Taiwan Dollar (TWD/NT$). Credit cards are widely accepted in malls and hotels, but cash is still preferred or required at many night market stalls and small local eateries." },
          { q: "Is English spoken in Taipei?", a: "To a moderate degree — younger residents and hospitality staff often speak some English, but it's less universal than in Hong Kong or Singapore, and many night market and local-eatery menus are Chinese-only." },
          { q: "Is Taiwan the same as mainland China for visa purposes?", a: "No. Taiwan runs its own entirely separate immigration and visa system. A mainland China or Hong Kong visa or exemption does not apply to Taiwan, and vice versa." },
        ],
      };

    case "taipei-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Taipei Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Taipei itinerary built around Taipei 101, a temple walk and a night market dinner — honest about what fits and what doesn't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        sections: [
          {
            title: "Morning: Longshan Temple and the Old Quarter",
            content: "Start at **Longshan Temple** in Wanhua — it's at its most atmospheric early, before tour groups arrive, with locals already burning incense and praying. From there, walk or take a short MRT ride to **Dadaocheng and Dihua Street**, the old merchant quarter of herbal medicine shops and restored shophouses, for an hour of unhurried wandering and maybe a Taiwanese tea or snack stop.",
            tourCard: { slug: "taipei-dadaocheng-dihua-street-temple-walking-tour", title: "Taipei: Dadaocheng & Dihua Street & Temple Walking Tour", description: "A guided morning loop through the old quarter and a working temple.", price: "From $39", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e1691519237b4ea9ec23e517b15ec654856d59ce80f87675df46559414d26b.jpg" },
          },
          {
            title: "Midday: Taipei 101 and Elephant Mountain",
            content: "Head to Xinyi district for **Taipei 101**'s 89th-floor observatory, timing it for a clear-weather window if the forecast allows — the city view is the whole point, and a hazy or rainy day blunts it. Afterward, if you still have energy, climb **Elephant Mountain (Xiangshan)** a short walk from the tower: a steep but short set of stone steps that rewards you with the classic reverse shot of Taipei 101 against the skyline, best around late afternoon or just before sunset.",
            tourCard: { slug: "taipei-city-landmarks-taipei-101-express-din-tai", title: "Taipei: City Landmarks, Taipei 101 Express & Din Tai Fung", description: "Fast-track Taipei 101 access bundled with a city landmarks loop and a Din Tai Fung meal.", price: "From $477", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6372d948037878a6e34ad1f4372d7b7e8d465401e9e5117513061493b6cf362f.jpg" },
          },
          {
            title: "Evening: A Night Market Dinner",
            content: "Close the day at a night market — **Raohe** if you want something more compact and food-focused, **Shilin** if you want the full sprawling experience with more browsing alongside the eating. Either way, go hungry and order small portions from several stalls rather than filling up on the first thing you see.\n\n**The honest tradeoff of a one-day itinerary:** you will not have time to add Jiufen, Beitou's hot springs, or a proper museum visit. If any of those matter more than the temple-to-tower-to-market loop above, swap this plan rather than cramming — Taipei genuinely rewards a 3-day trip; see our 3-day itinerary for the fuller version.",
            tourCard: { slug: "taipei-private-night-market-food-tour", title: "Taipei: Private Night Market Food Tour", description: "A guided evening crawl that gets past the language barrier at the stalls.", price: "From $176", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8daab221e31cf4b4164f0555ebea8bc61021f2fd4f1f8f934d28876f7386ed10.jpg" },
          },
        ],
        faqs: [
          { q: "Can you see Taipei in one day?", a: "You can realistically cover Longshan Temple, the Dadaocheng old quarter, Taipei 101 and a night market dinner in one focused day. Jiufen, Beitou and the museums won't fit — those need additional days." },
          { q: "What's the best order for a Taipei day trip?", a: "Longshan Temple and the old quarter in the morning before crowds build, Taipei 101 around midday, Elephant Mountain in late afternoon for the skyline light, then a night market for dinner." },
          { q: "Is Taipei 101 worth doing if I only have one day?", a: "Yes, if the weather forecast is clear — the observatory view is the single highest-value stop for a short visit, and it pairs naturally with the free Elephant Mountain hike nearby." },
        ],
      };

    case "taipei-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Taipei Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Taipei enough room for the city core, a Jiufen day trip and Beitou's hot springs — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg",
        sections: [
          {
            title: "Day 1: The City Core — Temples, Taipei 101 and a Night Market",
            content: "Follow the one-day plan as your first day: Longshan Temple and Dadaocheng in the morning, Taipei 101 and Elephant Mountain around midday and late afternoon, a night market for dinner. This front-loads the headline sights and leaves days two and three free to go further out without rushing.",
          },
          {
            title: "Day 2: Jiufen, Shifen and the Northeast Coast",
            content: "Dedicate a full day to **Jiufen**'s lantern-lit old street and teahouses, paired with **Shifen** for a sky lantern release over the old train tracks. Go early and, if your schedule allows any flexibility at all, pick a weekday — Jiufen's narrow alleys genuinely struggle under weekend and holiday crowd volume. Some day-trip itineraries also add **Yehliu Geopark**'s wind-carved coastal rock formations; decide whether you want the fuller three-stop version or a more relaxed two-stop day before booking.",
            tourCard: { slug: "taipei-jiufen-half-day-trip-with-guide-bus-tour", title: "Taipei: Jiufen Half-Day Trip with Guide │Bus Tour", description: "A focused half-day to Jiufen if you'd rather spend the rest of the day elsewhere.", price: "From $33", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8634492ea2e010718b8cf7d39aa8ab9183b537c586c805fb935f62fbcdef5e35.jpg" },
          },
          {
            title: "Day 3: Beitou's Hot Springs and Yangmingshan",
            content: "Spend your final day in Taipei's volcanic north. **Beitou**, a short MRT ride from the city center, has been a hot-spring resort district since the Japanese colonial era, with both public bathhouses and private hotel springs. Combine it with **Yangmingshan National Park**, sitting inside the city limits but feeling like a different province, with sulfur vents, grassland trails and seasonal flower blooms depending on the month.\n\nIf you have any energy left on the evening of day three, Ningxia or Shilin night market is a good way to close the trip with one more round of local food before you fly out.",
            tourCard: { slug: "from-taipei-beitou-tamsui-day-tour-with-a-hot", title: "From Taipei: Beitou & Tamsui Day Tour with a Hot Spring Bath", description: "The Beitou hot spring district paired with the Tamsui riverside, including a bath.", price: "From $348", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/84536ba39b45cab8a028a2a8ef621b01dd6d33e49f49a01e4ab5e73b0432cc8a.jpg" },
          },
          {
            title: "If You Have a 4th Day: Taroko Gorge or Sun Moon Lake",
            content: "A fourth day opens up a genuine day trip further afield — either **Taroko Gorge** near Hualien on the east coast by high-speed rail, or **Sun Moon Lake** in the central mountains — both long but doable days, or better as an overnight if your schedule allows it. Either is a clean, self-contained add-on rather than something to squeeze into the three-day core above.",
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Taipei?", a: "Yes, for a well-rounded first visit — the city core's temples and Taipei 101, a full day for Jiufen and Shifen on the northeast coast, and a day in Beitou's hot springs and Yangmingshan covers Taipei's genuinely different sides without rushing." },
          { q: "Should I add Taroko Gorge to a 3-day Taipei trip?", a: "Only as a 4th day or a separate overnight, not instead of one of the three core days above — Taroko Gorge is a worthwhile but long day trip by high-speed rail and shouldn't eat into Jiufen or Beitou time." },
          { q: "What's the best day to visit Jiufen?", a: "Any weekday, if you can choose — the old street's narrow alleys get noticeably more crowded on weekends and around public holidays. Arrive earlier in the day regardless." },
        ],
      };

    case "taiwan-visa-guide-for-tourists":
      return {
        title: "Taiwan Visa Guide 2026: Who Needs One, Who Doesn't, and the Arrival Card",
        description: "Taiwan runs a generous, separate visa-free regime from mainland China. Here's who can enter without a visa, for how long, and what the online Arrival Card actually requires.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6372d948037878a6e34ad1f4372d7b7e8d465401e9e5117513061493b6cf362f.jpg",
        fastFacts: [
          { icon: "Clock", label: "US / Canada / UK / most EU / Australia / NZ / Japan / South Korea", value: "Up to 90 days visa-free" },
          { icon: "Clock", label: "Singapore / Malaysia and some others", value: "Up to 30 days visa-free" },
          { icon: "Clock", label: "Thailand / Brunei / Philippines", value: "14-day visa-free trial, extended into 2026" },
          { icon: "FileText", label: "Mandatory for everyone", value: "Online Taiwan Arrival Card (TWAC), completed within 3 days before arrival" },
        ],
        sections: [
          {
            title: "Who Can Enter Visa-Free, and for How Long",
            content: "Taiwan's visa-free list is broad for a country its size. **United States, Canada, United Kingdom, Japan, South Korea, Australia, New Zealand** and most **European Union** nationalities can enter visa-free for up to **90 days**. A number of other nationalities, including **Singapore and Malaysia**, get a shorter **30-day** visa-free allowance. Taiwan has also extended a trial visa-free entry program for **Thailand, Brunei and the Philippines** covering stays of up to **14 days**, running through July 2026 at the time of writing — check the current status before booking if you're traveling on one of these passports, since trial programs can be adjusted or made permanent.\n\nIf your nationality isn't covered by any of these arrangements, you'll need to apply for a visa through a Taiwan representative office in advance; this cannot be arranged on arrival.",
          },
          {
            title: "The Taiwan Arrival Card (TWAC) Is Mandatory for Everyone",
            content: "Regardless of visa-free status, every visitor must complete the **Taiwan Arrival Card (TWAC)** online, within **three days** before landing. This is a straightforward digital form covering passport details, flight information and a Taiwan contact address, not a visa application or a payment — but it's a hard requirement, and arriving without having completed it can cause delays or complications at the immigration counter. Complete it through Taiwan's official immigration portal rather than a third-party site charging a service fee for something free to do directly.\n\nPassports should be valid well beyond the planned stay, and immigration officers can ask for proof of onward travel, so keep a return or connecting flight itinerary accessible rather than only in email.",
          },
          {
            title: "Taiwan's Entry System Is Separate From China's and Hong Kong's",
            content: "This is the detail that trips up travelers combining a multi-stop Asia itinerary: Taiwan, mainland China and Hong Kong each run their own, entirely separate immigration systems. A visa-free allowance or visa for one does not extend to either of the others. If your trip includes more than one of these, treat each as its own entry requirement from the start, with its own arrival card or visa process, rather than assuming one covers the trip.",
          },
        ],
        faqs: [
          { q: "Do Americans need a visa for Taiwan?", a: "No — US citizens can enter visa-free for up to 90 days, but must still complete the online Taiwan Arrival Card within three days before arrival." },
          { q: "What is the Taiwan Arrival Card?", a: "A mandatory online form, separate from any visa, that every visitor completes within three days before landing. It covers passport, flight and contact details and is free through Taiwan's official immigration portal." },
          { q: "Do Southeast Asian travelers need a visa for Taiwan?", a: "It depends on nationality — Singapore and Malaysia get 30 days visa-free, while Thailand, Brunei and the Philippines are on an extended 14-day visa-free trial through July 2026. Check current status before booking since trial programs can change." },
          { q: "Is a Taiwan visa the same as a China visa?", a: "No. Taiwan, mainland China and Hong Kong each run entirely separate immigration systems. A visa or exemption for one does not cover the others." },
        ],
      };

    case "taipei-101-tickets-guide":
      return {
        title: "Taipei 101 Observatory Tickets Guide 2026: Prices, Floors and What's Worth Booking",
        description: "What Taipei 101's observatory actually costs, the difference between the 89th-floor deck and the premium options, and whether an express ticket is worth paying for.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        fastFacts: [
          { icon: "Ticket", label: "Standard 89F Observatory", value: "Roughly NT$600 / US$19 per adult" },
          { icon: "Ticket", label: "89F + 101F combo", value: "Roughly US$28 per adult" },
          { icon: "Star", label: "Fast-track 89F", value: "Roughly US$36, skips the general entry queue" },
          { icon: "MapPin", label: "Note", value: "Ticket counter temporarily relocated to the 1st floor of the Office Tower as of July 2026" },
        ],
        sections: [
          {
            title: "What You're Actually Paying For",
            content: "The main **89th-floor Observatory** is the standard ticket almost everyone buys, giving an enclosed, climate-controlled 360-degree view of Taipei from roughly 390 metres up, along with a close look at the building's famous **tuned mass damper** — a giant steel sphere suspended between the 87th and 92nd floors that counteracts building sway during typhoons and earthquakes, visible through glass and genuinely one of the more interesting pieces of structural engineering open to the public anywhere. A combo ticket extending access to the **101st floor** outdoor-adjacent deck costs more but adds a higher, more exposed vantage point for visitors who want it.\n\nA premium outdoor experience, marketed as a 'Skyline' ticket, takes small groups onto an open-air platform near the top for a meaningfully higher price than the standard deck — worth it only if an open-air photo opportunity specifically matters to you, since the enclosed 89F deck already delivers the main view.",
          },
          {
            title: "Standard, Combo and Fast-Track Pricing",
            content: "As of 2026, the standard **89th-floor Observatory** ticket runs roughly **NT$600, around US$19** per adult. A combo covering both the **89F and 101F** decks runs closer to **US$28**. A **fast-track 89F** ticket, which skips the general ticket-counter queue, costs roughly **US$36** — worth considering on weekends or during peak tourist months (October-December) when the standard line can run long, less necessary on a quiet weekday morning.\n\nBundled packages combining the observatory ticket with a Taipei MRT day pass and a stored-value EasyCard are also sold, which make sense if you haven't already bought an EasyCard for the rest of your trip and plan to use the MRT heavily that day.",
            tourCard: { slug: "taipei-city-highlights-tour-with-taipei-101", title: "Taipei: City Highlights Tour with Taipei 101 Observatory", description: "Observatory access bundled into a guided city highlights day, without a separate ticket-counter stop.", price: "From $89", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png" },
          },
          {
            title: "Timing, the Entrance Relocation and What to Pair It With",
            content: "As of July 2026, the **ticket counter and entrance** were temporarily relocated to the **1st floor of the Office Tower** rather than the mall-level entrance most guides and signage still reference — worth checking the official site for the current entry point on the day of your visit rather than relying on an older map. For the clearest views, aim for a clear-weather morning or the hour before sunset; midday haze is common in warmer months.\n\nPair the visit with the **Elephant Mountain (Xiangshan)** hike nearby for the reverse shot — the tower itself against the skyline — which is free and takes most visitors well under an hour round trip.",
          },
        ],
        faqs: [
          { q: "How much does the Taipei 101 Observatory cost?", a: "The standard 89th-floor deck is roughly NT$600, about US$19 per adult. A combo adding the 101st floor runs closer to US$28, and fast-track entry costs roughly US$36." },
          { q: "Is Taipei 101's fast-track ticket worth it?", a: "On weekends or during peak season (October-December), yes — the standard queue can run long. On a quiet weekday, the time saved is usually minor." },
          { q: "What is the tuned mass damper at Taipei 101?", a: "A giant steel sphere suspended inside the building between the 87th and 92nd floors that counteracts sway from wind and earthquakes. It's visible through glass from inside the observatory and is one of the tower's most distinctive features beyond the view itself." },
          { q: "Where is the Taipei 101 Observatory entrance?", a: "As of July 2026, the ticket counter and entrance were temporarily moved to the 1st floor of the Office Tower rather than the previous mall-level entrance — check the official site for the current entry point before your visit." },
        ],
      };

    case "taipei-mrt-easycard-guide":
      return {
        title: "Taipei MRT and EasyCard Guide 2026: How to Get Around Without the Confusion",
        description: "What an EasyCard actually costs, where to buy one, and how Taipei's MRT system covers almost everywhere a first-time visitor needs to go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eba596335b324cca4d31cd6ee96c04a55d022a8989e855f46c20a540be7bc9b8.jpg",
        fastFacts: [
          { icon: "CreditCard", label: "EasyCard cost", value: "Roughly NT$100 for the card itself, no deposit required for most versions" },
          { icon: "Train", label: "Airport to city", value: "Taoyuan Airport MRT, roughly 40-50 minutes to Taipei Main Station" },
          { icon: "MapPin", label: "Where to buy", value: "Any MRT station counter or vending machine, or 7-Eleven and other convenience stores" },
          { icon: "DollarSign", label: "Discount", value: "EasyCard fares are roughly 20% cheaper than single-journey paper tickets on the MRT" },
        ],
        sections: [
          {
            title: "What the EasyCard Actually Is and Why You Want One",
            content: "The **EasyCard** is a rechargeable contactless smart card that covers the Taipei MRT, city buses, many convenience stores and fast-food chains, and bike-share docks across the city — functionally the same role Hong Kong's Octopus card or Japan's Suica play in their own transit systems. Tapping in and out at MRT turnstiles is faster than buying a single-journey paper ticket every ride, and EasyCard fares are discounted roughly 20% compared to paying with cash or paper tickets on the MRT, so it pays for itself quickly on anything beyond a single short visit.\n\nIt isn't strictly mandatory — paper tickets exist for every MRT journey — but given how often a multi-day visitor taps through a station or boards a bus, almost everyone recommends getting one on arrival rather than dealing with ticket machines repeatedly.",
          },
          {
            title: "Where to Buy and Top Up",
            content: "EasyCards are sold at **any MRT station's customer service counter or vending machine**, including at Taoyuan Airport's MRT station on arrival, as well as at **7-Eleven, Family Mart and other convenience store chains** found on nearly every block in the city. The card itself typically costs a flat fee with no refundable deposit on standard versions, which simplifies things compared to transit cards elsewhere that require a deposit return process before leaving.\n\nTopping up is just as easy: MRT station add-value machines, convenience store counters, and increasingly mobile top-up through a linked app all work. Keep a rough mental tally of your balance on a multi-day trip so you're not caught with an empty card at a turnstile.",
            tourCard: { slug: "airport-transfer-from-tpe-airport-to-taipei-city", title: "Airport Transfer: From TPE Airport to Taipei City", description: "A private transfer for arrival day, before you've set up an EasyCard for independent MRT travel.", price: "From $121", duration: "1.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eba596335b324cca4d31cd6ee96c04a55d022a8989e855f46c20a540be7bc9b8.jpg" },
          },
          {
            title: "The MRT System Itself: What It Covers and Doesn't",
            content: "Taipei's MRT network is clean, frequent and signed bilingually in Chinese and English, with announcements in both languages plus Taiwanese and Hakka on some lines. It covers the city core comprehensively, including a direct line to **Taoyuan International Airport** (roughly 40-50 minutes to Taipei Main Station) and out to **Beitou**'s hot spring district.\n\nWhat it doesn't cover: day trips to **Jiufen**, **Shifen** or **Yangmingshan**, which require a bus, a tour, or a taxi from the nearest MRT station, since none of those sit directly on the rail network. Factor that transfer into your day-trip planning rather than assuming the MRT gets you the whole way.",
          },
        ],
        faqs: [
          { q: "How much does an EasyCard cost in Taipei?", a: "Roughly NT$100 for the card itself on standard versions, with no refundable deposit required — simpler than some other cities' transit card systems." },
          { q: "Where can I buy an EasyCard?", a: "Any MRT station counter or vending machine, including at Taoyuan Airport on arrival, plus 7-Eleven, Family Mart and other convenience stores across the city." },
          { q: "Does the EasyCard save money over paper tickets?", a: "Yes — EasyCard fares on the MRT run roughly 20% cheaper than single-journey paper tickets, on top of the convenience of not queuing at a ticket machine each ride." },
          { q: "Does the MRT go to Jiufen or Yangmingshan?", a: "No — neither sits directly on the MRT network. Both require a bus, guided tour or taxi connection from the nearest station, so budget that transfer time separately." },
        ],
      };

    case "shilin-night-market-guide":
      return {
        title: "Shilin Night Market Guide 2026: What to Eat and How to Navigate It",
        description: "Taipei's biggest night market is a maze of stalls and side streets — here's what's actually worth eating and how to avoid wasting your appetite on the wrong first stop.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8daab221e31cf4b4164f0555ebea8bc61021f2fd4f1f8f934d28876f7386ed10.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Near Jiantan MRT station, Shilin District" },
          { icon: "Clock", label: "Busiest hours", value: "7pm to 11pm, later on weekends" },
          { icon: "Utensils", label: "Signature dish", value: "Giant fried chicken cutlet (da ji pai)" },
          { icon: "DollarSign", label: "Payment", value: "Mostly cash; some larger stalls now take mobile payment" },
        ],
        sections: [
          {
            title: "Taipei's Biggest Night Market, Not Its Most Intimate",
            content: "**Shilin Night Market** is the largest and most famous night market in Taipei, sprawling across an underground food court building (the Shilin Market proper) and the surrounding streets of stalls, clothing shops and arcade games. It's a genuine local institution, not a tourist construction, but its scale and fame mean it's also the most crowded option on weekend evenings, so arrive earlier (around 6-7pm) if you want room to move and shorter stall queues.\n\nThe layout can be disorienting on a first visit — stalls spill across several intersecting streets beyond the main covered market — so picking a rough direction and committing to it works better than trying to see everything in one pass.",
          },
          {
            title: "What to Actually Eat",
            content: "The **giant fried chicken cutlet (da ji pai)**, larger than your face and a genuine Shilin specialty, is the single most photographed dish here and worth the hype. **Stinky tofu**, fermented and deep-fried, smells far stronger than it tastes and is worth trying with an open mind rather than skipping on smell alone. Other staples worth seeking out include oyster omelets, grilled squid on a stick, bubble tea from one of the market's many stands, and shaved ice piles for dessert in warmer months.\n\nSkip the generic souvenir t-shirt stalls unless something specifically catches your eye — the food is why this market has its reputation, not the retail.",
            tourCard: { slug: "taipei-private-night-market-food-tour", title: "Taipei: Private Night Market Food Tour", description: "A guided crawl that picks the right stalls and skips the generic ones.", price: "From $176", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8daab221e31cf4b4164f0555ebea8bc61021f2fd4f1f8f934d28876f7386ed10.jpg" },
          },
          {
            title: "Getting There and When to Go",
            content: "Shilin Night Market sits a short walk from **Jiantan MRT station** on the Red Line, well signed from the exit. It runs into the night, but the busiest window is roughly **7pm to 11pm**, stretching later on Friday and Saturday. If you want to eat without queuing extensively at every stall, a weekday evening or an early-evening weekend visit before 7pm is the better call.\n\nBring cash — most stalls are cash-only or strongly prefer it, and while mobile payment has spread to some of the larger vendors, it's not universal enough to rely on.",
          },
        ],
        faqs: [
          { q: "How do I get to Shilin Night Market?", a: "Take the MRT Red Line to Jiantan station — the market is a short, well-signed walk from the exit." },
          { q: "What should I eat at Shilin Night Market?", a: "The giant fried chicken cutlet is the signature dish. Stinky tofu, oyster omelets, grilled squid and bubble tea are also classic choices worth seeking out." },
          { q: "Is Shilin Night Market cash-only?", a: "Mostly, yes — bring cash. Some larger stalls accept mobile payment, but it isn't universal across the market." },
          { q: "When is the best time to visit Shilin Night Market?", a: "Around 6-7pm on a weekday for the shortest queues, or expect heavier crowds after 7pm, especially on weekends." },
        ],
      };

    case "jiufen-day-trip-guide":
      return {
        title: "Jiufen Day Trip Guide 2026: Getting There, Crowds and the Spirited Away Connection",
        description: "Jiufen's lantern-lit old street draws Spirited Away comparisons and heavy weekend crowds in equal measure — here's how to actually enjoy it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Distance from Taipei", value: "About an hour by bus or guided tour" },
          { icon: "Clock", label: "Best time", value: "Weekday, arriving before 11am" },
          { icon: "Camera", label: "Known for", value: "Narrow lantern-lit old street, teahouses, Spirited Away comparisons" },
          { icon: "Utensils", label: "Try", value: "Taro balls (yu yuan) and local tea at a hillside teahouse" },
        ],
        sections: [
          {
            title: "A Former Gold-Mining Town, Now Taipei's Most Photographed Day Trip",
            content: "**Jiufen** grew up as a gold-mining settlement in the Japanese colonial era, and its steep, narrow streets built into the hillside above the coast still reflect that layout today. The town's fame exploded internationally after visitors began drawing comparisons between its lantern-lit teahouses and alleys and the bathhouse town in Hayao Miyazaki's *Spirited Away* — the connection is more atmospheric resemblance than a confirmed direct inspiration, but it's strong enough that the comparison now drives a large share of Jiufen's visitor numbers, especially from fans specifically seeking that feeling.\n\nThe result is a genuinely beautiful, atmospheric old street that is also, by most visitor accounts, badly overcrowded on weekends and holidays — the narrow alleys weren't built for the current volume of foot traffic, and movement can slow to a shuffle at peak hours.",
          },
          {
            title: "When to Go: Weekday Mornings Are the Real Answer",
            content: "If your schedule allows any choice at all, visit Jiufen on a **weekday**, and arrive **before 11am** if possible — the difference in crowd density between a weekday morning and a Saturday afternoon is dramatic, not subtle. Avoid Taiwanese public holidays entirely if you can; crowd levels on those days are reported as dramatically worse than even a normal weekend.\n\nMost visitors reach Jiufen either by public bus from Taipei (cheaper, slower, requires a transfer) or by joining a guided day tour that handles transport and often pairs it with Shifen's sky lantern release and sometimes Yehliu Geopark's coastal rock formations.",
            tourCard: { slug: "taipei-jiufen-half-day-trip-with-guide-bus-tour", title: "Taipei: Jiufen Half-Day Trip with Guide │Bus Tour", description: "A focused half-day trip that gets you there and back without the public-bus transfer logistics.", price: "From $33", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8634492ea2e010718b8cf7d39aa8ab9183b537c586c805fb935f62fbcdef5e35.jpg" },
          },
          {
            title: "What to Do and Eat Once You're There",
            content: "Walk the main old street (Jiufen Old Street / Shuqi Road) for its shop stalls, then climb one of the side staircases for the classic red-lantern photo looking back down toward the sea — this shot is genuinely worth the detour and less crowded than the main thoroughfare. Stop at one of the hillside teahouses for a pot of local tea with a view, and try **taro balls (yu yuan)**, a Jiufen specialty served in a sweet syrup or soup, alongside other street snacks along the main street.\n\nMost day trips pair Jiufen with **Shifen**, a short distance away, where visitors write wishes on paper sky lanterns and release them over the old train tracks — book this as part of a combined day rather than a separate trip, since the two towns are naturally paired by most tour operators and transport routes.",
            tourCard: { slug: "from-taipei-jiufen-and-shifen-day-trip-with-guide", title: "From Taipei: Jiufen and Shifen Day Trip with Guide Bus Tour", description: "Jiufen's old street and Shifen's lantern release in a single guided day.", price: "From $62", duration: "7.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg" },
          },
        ],
        faqs: [
          { q: "Is Jiufen really the inspiration for Spirited Away?", a: "Not confirmed directly — the resemblance between Jiufen's lantern-lit teahouses and the film's bathhouse town is atmospheric rather than an acknowledged direct source, but the comparison is strong enough that it now drives much of the town's tourism." },
          { q: "How do I get from Taipei to Jiufen?", a: "By public bus (cheaper, with a transfer) or a guided day tour (simpler, usually combined with Shifen and sometimes Yehliu Geopark), roughly an hour each way." },
          { q: "When should I visit Jiufen to avoid crowds?", a: "A weekday morning, arriving before 11am, and avoiding Taiwanese public holidays entirely — weekend and holiday crowds are reported as dramatically worse than weekday visits." },
          { q: "What should I eat in Jiufen?", a: "Taro balls (yu yuan) served in syrup or soup are the local specialty, alongside tea at one of the hillside teahouses and various street snacks along the old street." },
        ],
      };

    case "taipei-hot-springs-guide":
      return {
        title: "Taipei Hot Springs Guide 2026: Beitou, Wulai and Yangmingshan Compared",
        description: "Taipei sits on real volcanic geology, which means genuine hot springs inside and near the city limits — here's how Beitou, Wulai and Yangmingshan's options actually differ.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fb8ecdd3799b61e6b317f26aff64bda69434b789d0e131a1085ee9a6516fbabd.jpeg",
        fastFacts: [
          { icon: "MapPin", label: "Closest option", value: "Beitou — roughly 20 minutes from the city center by MRT" },
          { icon: "Droplet", label: "Spring types", value: "White sulfur and green sulfur springs, fed by the Datun Volcano Group" },
          { icon: "MapPin", label: "Furthest option", value: "Wulai — an indigenous Atayal town with springs and a waterfall, about an hour out" },
          { icon: "FileText", label: "Etiquette", value: "Most public bathhouses require full nudity in gender-separated sections; private rooms available for mixed groups" },
        ],
        sections: [
          {
            title: "Beitou: The Closest, Most Historic Option",
            content: "**Beitou** has been a hot-spring resort district since the Japanese colonial era, roughly a 20-minute MRT ride from central Taipei, with the geothermal heat sourced from the same **Datun Volcano Group** that shapes much of Taipei's northern geography. **Beitou Thermal Valley**, a visibly steaming, milky-green sulfur pool too hot to bathe in directly, is the area's signature sight and free to view from a walking path. The actual bathing options range from inexpensive public bathhouses (gender-separated, typically requiring nudity) to private hotel spring rooms that cost more but suit couples, families or anyone uncomfortable with a communal bathhouse setting.\n\nBeitou's proximity makes it the easiest of the three options to add onto a half-day that also includes Tamsui's riverside promenade nearby.",
            tourCard: { slug: "taipei-4-hour-beitou-hot-springs-heritage-walking", title: "Taipei: 4-Hour Beitou Hot Springs & Heritage Walking Tour", description: "A guided walk through Beitou's hot spring valley and historic bathhouse district.", price: "From $181", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fb8ecdd3799b61e6b317f26aff64bda69434b789d0e131a1085ee9a6516fbabd.jpeg" },
          },
          {
            title: "Yangmingshan: Hot Springs Inside a National Park",
            content: "**Yangmingshan National Park**, also fed by the Datun Volcano Group, holds its own cluster of hot spring facilities alongside hiking trails, grassland and seasonal flower blooms, with **Sulfur Valley (Liuhuang Valley)** showing visible steam vents and sulfur deposits similar to Beitou's thermal valley but in a more rugged, less developed setting. This is the better choice if you want hot springs combined with genuine hiking in the same outing, rather than a standalone bathhouse visit.\n\nMost visitors reach Yangmingshan by bus from an MRT station rather than directly by rail, so budget the connection time when planning a half-day or full-day visit.",
            tourCard: { slug: "yangmingshan-beitou-geothermal-wonders-day-tour", title: "Yangmingshan & Beitou Geothermal Wonders Day Tour", description: "Both volcanic districts in one guided day, covering hiking and hot-spring sights together.", price: "From $85", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eca81846d78ade2e6748fbd0bef0773b8e8ff71e55f81896820fe66d22f22266.png" },
          },
          {
            title: "Wulai: Further Out, With a Waterfall and Indigenous Culture",
            content: "**Wulai**, about an hour from Taipei, is an Atayal indigenous mountain town with its own hot springs, a notable waterfall, a cable car and an old street of food stalls — a fuller day-trip destination than Beitou or Yangmingshan rather than a quick add-on. It's the pick if you want the hot spring experience paired with a genuinely different cultural and scenic setting, at the cost of a longer round trip.\n\nAcross all three, expect gender-separated public bathing areas to require full nudity by local custom, while private rooms (rented by time, not per-person) suit mixed-gender groups or anyone who'd rather not use a communal bath.",
            tourCard: { slug: "taipei-wulai-hot-spring-waterfall-cable-car-old", title: "Taipei: Wulai Hot Spring, Waterfall, Cable Car & Old Street", description: "The fuller Wulai day — hot spring, waterfall, cable car and old street food in one trip.", price: "From $140", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/74e42dfb2d94c90e64733dc3e48881ec3e2e70fcf8ced83d1356f1028934b97e.jpg" },
          },
        ],
        faqs: [
          { q: "Which Taipei hot spring area is closest to the city?", a: "Beitou, roughly a 20-minute MRT ride from central Taipei, making it the easiest to fit into a half-day." },
          { q: "Do I have to be naked at Taipei's hot springs?", a: "In most gender-separated public bathhouses, yes, by local custom. Private rooms, rented by time rather than per person, are the alternative for mixed-gender groups or anyone who prefers not to use a communal bath." },
          { q: "What's the difference between Beitou and Yangmingshan hot springs?", a: "Both are fed by the same Datun Volcano Group geothermal system. Beitou is closer and more developed with hotels and bathhouses; Yangmingshan combines its springs with national park hiking trails in a more rugged setting." },
          { q: "Is Wulai worth the longer trip compared to Beitou?", a: "If you want a hot spring paired with a waterfall, cable car and indigenous Atayal culture in one outing, yes — it's a fuller day trip rather than Beitou's quicker half-day option." },
        ],
      };

    case "taipei-food-guide":
      return {
        title: "Taipei Food Guide 2026: What to Actually Eat, Beyond the Famous Dishes",
        description: "Beef noodle soup, night market staples, and a bubble tea origin story with two competing claims — here's how to eat your way through Taipei properly.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dc20318200f555efdf09b66042c6ea37d7463a8f659e757a3d0dd5756d79e8de.jpeg",
        fastFacts: [
          { icon: "Utensils", label: "Signature dish", value: "Beef noodle soup (niu rou mian)" },
          { icon: "Utensils", label: "Night market must-try", value: "Giant fried chicken cutlet, oyster omelet, stinky tofu" },
          { icon: "Coffee", label: "Taiwan's global export", value: "Bubble tea — origin claimed by both a Taichung and a Tainan teahouse" },
          { icon: "Utensils", label: "Famous dumpling chain", value: "Din Tai Fung — originated in Taipei, now a global name" },
        ],
        sections: [
          {
            title: "Beef Noodle Soup: The Dish Locals Argue About, Not Tourists",
            content: "**Beef noodle soup (niu rou mian)** is arguably Taipei's defining dish — a rich, usually five-spice or soy-braised broth over hand-pulled noodles with tender beef chunks, served everywhere from humble street stalls to an annual citywide competition that draws genuine local rivalry over whose version is best. Every neighborhood has its own locally beloved shop, and asking a Taipei resident for their personal favorite usually gets a strong, specific opinion rather than a shrug.\n\nTaipei is also the birthplace of **Din Tai Fung**, now a globally recognized dumpling chain, but the original branches still draw queues from locals as much as tourists for their soup dumplings (xiao long bao) — worth a stop even knowing it's not an undiscovered secret.",
            tourCard: { slug: "taipei-taipei-101-din-tai-fung-dinner-raohe-night", title: "Taipei: Taipei 101, Din Tai Fung Dinner & Raohe Night Market", description: "A Taipei 101 visit, a proper Din Tai Fung dinner and a Raohe market walk in one evening.", price: "From $465", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/615a63ccba5bc.jpeg" },
          },
          {
            title: "Night Market Staples Worth Seeking Out",
            content: "Beyond beef noodle soup, Taipei's night market food culture is where most visitors build their real sense of the city's flavors: the **giant fried chicken cutlet**, **oyster omelets** (a savory egg-and-starch pancake with fresh oysters), **stinky tofu** (fermented and deep-fried, stronger in smell than taste), **braised pork rice (lu rou fan)**, and grilled or fried squid on a stick. Most of these show up across multiple markets — Shilin, Raohe and Ningxia each have their own strong versions — so repetition across a multi-day trip isn't a bad thing.\n\nA guided food tour on your first night is genuinely useful here, less for the logistics of finding stalls and more for navigating a mostly Chinese-language ordering process at smaller vendors.",
            tourCard: { slug: "taipei-food-tour-with-12-taiwanese-tastings", title: "Taipei: Food Tour with 12+ Taiwanese Tastings", description: "Twelve-plus tastings guided by a local, built for a first-night orientation to the food scene.", price: "From $73", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a87893e8407e0d0bfe688b382f3e7103a4fac2681896191c8aaaaf9ebce8665.jpeg" },
          },
          {
            title: "Bubble Tea's Disputed Birthplace",
            content: "**Bubble tea** (boba, or pearl milk tea) was invented in Taiwan, though the exact origin is genuinely disputed between two competing claims — a Taichung teahouse and a Tainan teahouse both claim to have created the drink, and the dispute has never been definitively settled. Whichever version came first, Taipei is full of excellent, inexpensive bubble tea shops on nearly every block, and it's worth trying several different styles — classic black milk tea, fruit teas, and brown sugar versions with fresh tapioca — rather than assuming one shop represents the whole category.\n\nFor a sit-down meal beyond street food, Taipei's dense scene of small, specialized restaurants — a shop that only does beef noodle soup, another that only does dumplings — rewards seeking out a specific dish rather than a generalist restaurant.",
          },
        ],
        faqs: [
          { q: "What is Taipei's most famous dish?", a: "Beef noodle soup (niu rou mian) is widely considered the city's defining dish, with intense local rivalry over which shop makes the best version, including an annual citywide competition." },
          { q: "Where was bubble tea invented?", a: "In Taiwan, though the exact origin is disputed between competing claims from a Taichung teahouse and a Tainan teahouse — the dispute has never been definitively resolved." },
          { q: "Is Din Tai Fung worth visiting in Taipei if it's a global chain now?", a: "Yes, for most visitors — it originated in Taipei, and the original branches still draw genuine local demand for the soup dumplings, not just tourist traffic." },
          { q: "What should I try at a Taipei night market?", a: "The giant fried chicken cutlet, oyster omelet, stinky tofu, braised pork rice and grilled squid are the core staples, appearing in slightly different versions across Shilin, Raohe and Ningxia night markets." },
        ],
      };

    case "taipei-temples-guide":
      return {
        title: "Taipei Temples Guide 2026: Longshan, Confucius and the City's Working Faith",
        description: "Taipei's temples are active places of worship, not museum pieces — here's how to visit Longshan Temple and others respectfully and get the most out of them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ee1f514ef3b84e0c0c0781cfcb37438fdee4f2e95d15bbe98e93c4ba3e6274.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Most-visited temple", value: "Longshan Temple, Wanhua district, founded 1738" },
          { icon: "MapPin", label: "Nearest MRT", value: "Longshan Temple station, Blue Line, direct exit" },
          { icon: "Users", label: "Faith practiced", value: "A blend of Buddhism, Taoism and folk religion — common across Taiwanese temples" },
          { icon: "FileText", label: "Etiquette", value: "Dress modestly, keep voices low, don't walk through the center of the main door threshold" },
        ],
        sections: [
          {
            title: "Longshan Temple: Taipei's Most Atmospheric and Most Visited",
            content: "**Longshan Temple**, founded in 1738 in the Wanhua district, is Taipei's best-known and most atmospheric temple — a working house of worship blending Buddhist, Taoist and folk religious practice, still genuinely busy with locals praying, burning incense and consulting fortune-telling blocks rather than staged for visitors. The temple has survived fires, an earthquake and WWII bombing damage over its history, with the current structure reflecting several waves of rebuilding and restoration.\n\nA direct MRT stop (Longshan Temple station, Blue Line) makes it one of the easiest major sights in the city to reach without any planning, and it's free to enter, though donations are appreciated.",
            tourCard: { slug: "taipeis-origin-longshan-temple-taiwan-cultural", title: "Taipei's Origin & Longshan Temple - Taiwan Cultural Tour", description: "A guided cultural walk centered on Longshan Temple and the old Wanhua district around it.", price: "From $26", duration: "2.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ee1f514ef3b84e0c0c0781cfcb37438fdee4f2e95d15bbe98e93c4ba3e6274.jpeg" },
          },
          {
            title: "Etiquette: What's Expected, Not Just Suggested",
            content: "Because Taipei's major temples are active places of worship rather than tourist attractions dressed up as religious sites, a few etiquette points matter more than at a purely historic monument: dress reasonably modestly, keep voices low inside the main halls, and avoid stepping directly through the center of the main entrance threshold, which is traditionally reserved — enter slightly to one side instead, as locals do. Photography is generally fine in most areas, but be considerate around people actively praying rather than treating them as photo subjects.\n\nIncense burning follows a specific order and hand position at most temples; if you want to participate rather than just observe, watching how locals do it first, or asking a guide, avoids an awkward misstep.",
          },
          {
            title: "Beyond Longshan: Other Temples Worth a Visit",
            content: "Taipei's **Confucius Temple** in Datong district offers a different, quieter register — a scholarly, Ming-and-Qing-style complex built to honor Confucius rather than a deity, with none of Longshan's incense smoke or crowd noise, making it a good contrast if you've already done Longshan. Several smaller neighborhood temples throughout Dadaocheng and Dihua Street are worth a passing look if you're already walking that area, even without planning a dedicated stop.\n\nMost visitors pair a Longshan Temple visit with the nearby Dadaocheng and Dihua Street old quarter and sometimes a stop at Taipei 101, since all three sit within a reasonable MRT-connected loop across the western and central parts of the city.",
            tourCard: { slug: "taipei-longshan-temple-dihua-street-taipei-101", title: "Taipei: Longshan Temple, Dihua Street & Taipei 101 Tour", description: "Links Longshan Temple with the old quarter and the modern skyline in one guided day.", price: "From $466", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c6e6382cd4e43257d35e28c523c9ac75b5c4bd79122f4ce9656a2ca3ef3fbd4.png" },
          },
        ],
        faqs: [
          { q: "What is the most famous temple in Taipei?", a: "Longshan Temple in Wanhua district, founded in 1738, is Taipei's best-known and most visited, blending Buddhist, Taoist and folk religious practice in a still-active house of worship." },
          { q: "How do I get to Longshan Temple?", a: "Take the MRT Blue Line to Longshan Temple station, which has a direct exit near the temple entrance." },
          { q: "Is it free to visit Longshan Temple?", a: "Yes, entry is free, though donations toward the temple's upkeep are appreciated." },
          { q: "What should I wear or avoid doing at Taipei's temples?", a: "Dress reasonably modestly, keep your voice down inside the main halls, and avoid walking directly through the center of the main entrance threshold — enter slightly to one side, as locals do." },
        ],
      };

    case "yangmingshan-national-park-guide":
      return {
        title: "Yangmingshan National Park Guide 2026: Hiking, Hot Springs and When to Go",
        description: "A volcanic national park inside Taipei's own city limits — sulfur vents, grassland trails and seasonal flower blooms, all reachable by bus from the MRT.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbb024dd3226f8cc19f6f86e505db9bf0d5f5ad4c73f81a468a03c1f5f4bcfd7.jpeg",
        fastFacts: [
          { icon: "Mountain", label: "Terrain", value: "Volcanic — part of the Datun Volcano Group, with active fumaroles" },
          { icon: "MapPin", label: "Access", value: "Bus from Jiantan or Shilin MRT stations; no direct MRT line" },
          { icon: "Flower", label: "Peak bloom", value: "Cherry blossoms and azaleas, typically February-April depending on species" },
          { icon: "Droplet", label: "Feature", value: "Sulfur Valley (Liuhuang Valley) — visible steam vents and sulfur deposits" },
        ],
        sections: [
          {
            title: "A National Park Inside the City Limits",
            content: "**Yangmingshan National Park** sits almost entirely within Taipei's own administrative boundary, yet its volcanic terrain — part of the **Datun Volcano Group** — makes it feel like an entirely different landscape from the dense urban core just down the mountain. Active geothermal features including fumaroles (steam and gas vents) and sulfur deposits are visible at several points in the park, most dramatically at **Sulfur Valley (Liuhuang Valley)**, where hiking trails wind past steaming ground and mineral-stained rock.\n\nThe park's elevation and volcanic soil also support a genuinely different ecosystem from lowland Taipei — grassland, reed fields and seasonal flower displays that draw their own dedicated visitors separate from the hot-spring crowd.",
          },
          {
            title: "Hiking Trails and What to See",
            content: "Yangmingshan offers a range of trail difficulties, from short, accessible boardwalk paths near the visitor center to longer routes up **Qixing Mountain**, the highest peak in the Taipei basin area, for visitors wanting a genuine hiking day rather than a scenic drive-through. Seasonal highlights shift through the year: **cherry blossoms and azaleas** bloom roughly February through April depending on species and elevation, while **silver grass (miscanthus)** turns the hillsides a distinctive silvery color in autumn, typically October-November.\n\nBring layers regardless of season — the park's elevation means noticeably cooler and often windier conditions than central Taipei, even on a day that feels warm down in the city.",
            tourCard: { slug: "taipei-yangmingshan-national-park-hiking-day-tour", title: "Taipei: Yangmingshan National Park Hiking Day Tour", description: "A full guided hiking day through the park's trails and volcanic features.", price: "From $581", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbb024dd3226f8cc19f6f86e505db9bf0d5f5ad4c73f81a468a03c1f5f4bcfd7.jpeg" },
          },
          {
            title: "Getting There and Pairing It With Beitou",
            content: "There's no direct MRT line into Yangmingshan — the standard route is an MRT ride to **Jiantan or Shilin station**, followed by a connecting bus up the mountain. This makes a guided tour or a private transfer meaningfully more convenient than public transit alone if you're short on time, since the bus schedule and transfer add real logistics overhead for a first-time visitor.\n\nBecause Yangmingshan shares the same Datun Volcano Group geothermal system as **Beitou**'s hot springs, many day trips combine both — hiking and volcanic sightseeing in the park, followed by a hot spring soak in Beitou on the way back toward the city center. See our dedicated Taipei hot springs guide for how the two compare.",
            tourCard: { slug: "from-taipei-beitou-yangmingshan-private-day-tour", title: "From Taipei: Beitou & Yangmingshan Private Day Tour", description: "Combines the national park's trails with a Beitou hot spring stop in one private day.", price: "From $273", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5adf02b9a92dc2465d171e149d64887572c8c7932681c4c9d489fdaec9cb52c6.jpg" },
          },
        ],
        faqs: [
          { q: "How do I get to Yangmingshan from Taipei?", a: "Take the MRT to Jiantan or Shilin station, then a connecting bus up the mountain — there's no direct MRT line into the park itself." },
          { q: "When do the flowers bloom at Yangmingshan?", a: "Cherry blossoms and azaleas typically bloom February through April depending on species and elevation; silver grass turns the hillsides silvery in October-November." },
          { q: "Is Yangmingshan the same volcanic system as Beitou's hot springs?", a: "Yes — both are fed by the Datun Volcano Group's geothermal activity, which is why many day trips combine Yangmingshan's hiking with a Beitou hot spring soak." },
          { q: "Is Yangmingshan good for a casual visit, or only serious hikers?", a: "Both — short boardwalk paths near the visitor center suit a casual visit, while longer routes up Qixing Mountain give genuine hikers a full day." },
        ],
      };

    case "taroko-gorge-day-trip":
      return {
        title: "Taroko Gorge Day Trip from Taipei (2026): Is It Actually Doable in a Day?",
        description: "Taroko Gorge's marble canyon is Taiwan's most dramatic natural landmark, but it's a genuinely long day from Taipei — here's the honest logistics.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/914e6dd4cbb598a32d3d83becf65282b1eca7473b0710116e60936d530f99cef.jpeg",
        fastFacts: [
          { icon: "Train", label: "Getting there", value: "High-speed/express rail to Hualien, roughly 2-2.5 hours each way from Taipei" },
          { icon: "Clock", label: "Honest day length", value: "12+ hours round trip including gorge time — a long day, not a leisurely one" },
          { icon: "Mountain", label: "Highlight", value: "Swallow Grotto and Tunnel of Nine Turns marble-walled trails" },
          { icon: "AlertTriangle", label: "Risk factor", value: "Trail and road closures are common after rain or seismic activity — check conditions before booking" },
        ],
        sections: [
          {
            title: "What Taroko Gorge Actually Is",
            content: "**Taroko Gorge**, part of Taroko National Park near Hualien on Taiwan's east coast, is a dramatic marble-walled canyon carved by the Liwu River over millions of years, with sheer cliff faces, suspension bridges and trails cut directly into the rock. It's consistently rated among Taiwan's most spectacular natural sights, with trails like **Swallow Grotto (Yanzikou)** and the **Tunnel of Nine Turns** letting visitors walk directly along the marble canyon walls rather than just viewing it from a distance.\n\nThe area sits in an active seismic and typhoon-prone zone, which means trail and road closures after heavy rain or earthquakes are a real, recurring part of visiting — check current conditions close to your travel date rather than assuming the trails you've read about are open.",
          },
          {
            title: "The Honest Logistics of a Day Trip from Taipei",
            content: "Taroko Gorge is roughly a **2 to 2.5-hour train ride** from Taipei to Hualien by express or high-speed rail, followed by further transport (bus, taxi or tour vehicle) into the gorge itself. A round-trip day adds up to **12 or more hours** once you include the gorge time, making this a genuinely long, early-start-to-late-return day rather than a relaxed outing — doable, but tiring, and with limited buffer if transport runs late in either direction.\n\nAn overnight in Hualien, splitting the gorge across parts of two days, is the more comfortable version of this trip if your overall itinerary has room for it — a day trip is the compressed, higher-effort option for visitors who specifically don't have a spare night to give it.",
            tourCard: { slug: "taipei-taipei-hualien-one-day-tour", title: "Taipei: Taipei-Hualien One Day Tour", description: "A single-day Hualien and Taroko-area trip, handling the long rail and transport logistics for you.", price: "From $485", duration: "1 day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/914e6dd4cbb598a32d3d83becf65282b1eca7473b0710116e60936d530f99cef.jpeg" },
          },
          {
            title: "If You Can Spare an Overnight",
            content: "Splitting the trip across **two days** — traveling to Hualien in the afternoon, exploring the gorge the following morning before a more relaxed return — removes almost all of the time pressure a single day imposes, and leaves room to add Hualien's own coastal sights or Yilan on the way back. Several operators run combined **Hualien and Yilan** overnight packages structured exactly this way.\n\nWhichever version you choose, book transport and any gorge-area accommodation in advance during peak domestic travel periods (Taiwanese national holidays), when both trains and hotel rooms in Hualien fill up well ahead of the date.",
            tourCard: { slug: "from-taipei-2-day-hualien-private-tour-with-hotel", title: "From Taipei: 2-Day Hualien Private Tour with Hotel Stay", description: "The overnight version, removing the single-day time pressure entirely.", price: "From $1703", duration: "2 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e8e7383b8959d017c2c556c35fc260a4d3f00951741841d604f808adba4e41a.jpeg" },
          },
        ],
        faqs: [
          { q: "Can you visit Taroko Gorge in a day trip from Taipei?", a: "Yes, but it's a genuinely long day — roughly 12 or more hours round trip including a 2-2.5 hour train ride each way to Hualien plus gorge time. It's doable but tiring, with little buffer for delays." },
          { q: "Is Taroko Gorge ever closed?", a: "Trail and road sections close periodically after heavy rain or seismic activity, since the area sits in an active typhoon and earthquake zone. Check current conditions close to your travel date rather than assuming full access." },
          { q: "Is an overnight in Hualien better than a day trip?", a: "For most visitors, yes — it removes the time pressure of a single long day and leaves room to see more of the gorge and Hualien's coastal area without rushing." },
          { q: "What are the best trails in Taroko Gorge?", a: "Swallow Grotto (Yanzikou) and the Tunnel of Nine Turns are the most commonly recommended, letting visitors walk directly along the marble canyon walls rather than viewing them from a distance." },
        ],
      };

    case "taipei-bubble-tea-origin-guide":
      return {
        title: "Taipei Bubble Tea Guide 2026: The Disputed Origin and Where to Actually Drink It",
        description: "Bubble tea was born in Taiwan, but two teahouses still argue over who invented it. Here's the real history and where to try it properly in Taipei.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dc20318200f555efdf09b66042c6ea37d7463a8f659e757a3d0dd5756d79e8de.jpeg",
        fastFacts: [
          { icon: "Coffee", label: "Invented", value: "Taiwan, early-to-mid 1980s" },
          { icon: "MapPin", label: "Competing origin claims", value: "Chun Shui Tang (Taichung) vs. Hanlin Tea Room (Tainan)" },
          { icon: "DollarSign", label: "Typical price in Taipei", value: "NT$40-70 (roughly US$1.30-2.30) per cup" },
          { icon: "Utensils", label: "Classic order", value: "Pearl milk tea (zhenzhu naicha) — black tea, milk, tapioca pearls" },
        ],
        sections: [
          {
            title: "Two Teahouses, One Unresolved Argument",
            content: "Bubble tea — known locally as 'pearl milk tea' (zhenzhu naicha) or simply boba — was invented in Taiwan in the early 1980s, and that part isn't disputed. Who invented it is. **Chun Shui Tang** in Taichung says a staff member first dropped sweetened tapioca balls into iced tea during a 1980s product meeting, and the chain has pursued the claim seriously enough to take it to court in Taiwan, without a definitive ruling in their favor. **Hanlin Tea Room** in Tainan tells a different story, tracing their own tapioca-milk-tea recipe to a local market ingredient their founder started using around the same period. Neither account has been settled as the official history, and most food writers who've looked into it treat the dispute as permanently unresolved rather than leaning toward either side.\n\nWhat's not in dispute is the scale of what followed: bubble tea became one of Taiwan's most recognizable cultural exports, with Taiwanese-founded chains now operating in dozens of countries, long after the drink outgrew its origin story.",
          },
          {
            title: "What Makes a Proper Cup, Beyond the Pearls",
            content: "A classic pearl milk tea is built on three things done well: a black tea base brewed strong enough to hold up against milk and sugar, fresh tapioca pearls cooked that day (pearls left sitting too long turn hard and chalky, a real quality marker worth noticing), and a sugar level you choose yourself — nearly every Taipei shop lets you specify sugar at 0%, 30%, 50%, 70% or 100%, along with ice level, which is a level of customization most visitors haven't encountered at home. Brown sugar versions, made with fresh tapioca cooked in brown sugar syrup rather than plain sugar water, became their own sub-category in the 2010s and are worth trying as a variant rather than a replacement for the classic.\n\nBeyond milk tea, Taipei's bubble tea shops also do fruit teas (grapefruit and passionfruit are common strong versions), cheese foam teas, and taro-flavored drinks — none of these are lesser options, they're just a different branch of the same shop's menu.",
            tourCard: { slug: "taipei-formosa-flavours-food-tour-with-12-tastings", title: "Taipei: Formosa Flavours Food Tour with 12+ Tastings", description: "A guided tastings tour that puts bubble tea in context alongside Taipei's other defining flavors.", price: "From $73", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a87893e8407e0d0bfe688b382f3e7103a4fac2681896191c8aaaaf9ebce8665.jpeg" },
          },
          {
            title: "Where to Drink It in Taipei",
            content: "You don't need a destination shop — bubble tea stands are on nearly every block in Taipei, and a small independent stand is often just as good as a famous chain's flagship. That said, both Chun Shui Tang and Hanlin Tea Room operate Taipei branches if you want to taste each side of the origin debate for yourself and form your own opinion. Night markets (Shilin, Raohe, Ningxia) are reliable spots for a quick cup between food stalls, and most shops serve cups meant to be finished within an hour or two rather than nursed, since the ice dilutes the tea and the pearls firm up as they cool.\n\nPrices run roughly NT$40-70 (about US$1.30-2.30) for a standard cup, making it one of the cheapest, most repeatable small pleasures of a Taipei trip.",
          },
        ],
        faqs: [
          { q: "Who really invented bubble tea?", a: "It's genuinely disputed. Chun Shui Tang in Taichung and Hanlin Tea Room in Tainan both claim to have created it in the early-to-mid 1980s, and the dispute has never been definitively resolved, including a court case that didn't settle it either way." },
          { q: "What should I order at a Taipei bubble tea shop?", a: "Classic pearl milk tea (zhenzhu naicha) — black tea, milk and tapioca pearls — is the standard starting point. You'll be asked to specify a sugar level (0-100%) and ice level, which is normal and expected." },
          { q: "How much does bubble tea cost in Taipei?", a: "Roughly NT$40-70, about US$1.30-2.30, for a standard cup at most stands and shops." },
          { q: "Is brown sugar bubble tea different from regular bubble tea?", a: "Yes — it uses fresh tapioca pearls cooked in brown sugar syrup rather than plain sugar water, giving a deeper caramel note. It's a popular variant from the 2010s, not a replacement for the classic version." },
        ],
      };

    case "elephant-mountain-hike-guide":
      return {
        title: "Elephant Mountain (Xiangshan) Hike Guide 2026: Taipei's Free Skyline View",
        description: "A short, steep stone staircase above Xinyi district delivers Taipei's single best Taipei 101 photo. Here's how to time it and what to expect.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        fastFacts: [
          { icon: "Mountain", label: "Climb time", value: "20-40 minutes to the main viewpoint, depending on pace" },
          { icon: "MapPin", label: "Nearest MRT", value: "Xiangshan station, Red Line — direct trailhead access" },
          { icon: "Camera", label: "Best for", value: "The classic Taipei 101 skyline shot from Six Giant Rocks viewpoint" },
          { icon: "Clock", label: "Best time", value: "Late afternoon into sunset and blue hour; arrive before golden hour on weekends" },
        ],
        sections: [
          {
            title: "A Short, Steep Climb With an Outsized Reward",
            content: "**Elephant Mountain**, known locally as Xiangshan, is a low hill directly behind Taipei's Xinyi district that happens to sit at exactly the right angle to frame Taipei 101 against the rest of the skyline — which is why it's become the single most repeated skyline photo of the city. The climb itself is a set of stone steps, steep enough to raise your heart rate but short enough that most reasonably fit visitors reach the main viewpoint, known as **Six Giant Rocks**, in well under 40 minutes. It's not a wilderness hike; it's closer to a long, vertical staircase with trees on either side and lookout platforms at a few points along the way.\n\nThe trail is free, open-air and unticketed, which makes it one of the better value stops in the entire city for the amount of visual payoff it delivers.",
            tourCard: { slug: "taipei-city-highlights-tour-with-taipei-101", title: "Taipei: City Highlights Tour with Taipei 101 Observatory", description: "Pair the Taipei 101 observatory with the reverse skyline view from Elephant Mountain nearby.", price: "From $89", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png" },
          },
          {
            title: "Timing It Around Sunset, and Managing the Crowd",
            content: "The viewpoint's popularity means the window around sunset and the half-hour after (blue hour, when the city lights come on but the sky still holds some color) draws a genuine crowd, especially on clear evenings and weekends — expect to share the main rock ledge with other photographers and to wait a turn for an unobstructed shot. Arriving 30-45 minutes before sunset gets you there ahead of the peak crush and gives time to find a spot before the light gets good. A weekday evening is noticeably calmer than a weekend one.\n\nBring a headlamp or phone flashlight for the walk back down after dark — the steps are lit but unevenly, and footing matters more descending than climbing.",
          },
          {
            title: "What to Bring and What Not to Expect",
            content: "Wear real shoes, not sandals — the steps are uneven stone and can be damp after rain, when they also get genuinely slippery. There are a couple of lower viewpoints along the way if you don't want to go all the way to Six Giant Rocks, though the view improves meaningfully the higher you go. This is not a full nature hike with varied terrain; it's a focused, single-purpose climb to one specific view, which is exactly why it works well as a 30-60 minute add-on to a Taipei 101 or Xinyi district visit rather than a standalone half-day outing.",
          },
        ],
        faqs: [
          { q: "How long does the Elephant Mountain hike take?", a: "Roughly 20-40 minutes to the main Six Giant Rocks viewpoint, depending on pace and how many photo stops you make along the way." },
          { q: "Is Elephant Mountain free?", a: "Yes — it's an open, unticketed public trail with no entry fee." },
          { q: "When is the best time to hike Elephant Mountain?", a: "30-45 minutes before sunset, to arrive ahead of the peak crowd and catch both daylight and blue-hour shots of Taipei 101." },
          { q: "How do I get to the Elephant Mountain trailhead?", a: "Take the MRT Red Line to Xiangshan station — the trailhead is a short, well-signed walk from the station exit." },
        ],
      };

    case "taipei-with-kids-guide":
      return {
        title: "Taipei with Kids 2026: What Actually Works for a Family Trip",
        description: "Taipei is an easier family destination than it gets credit for — here's what genuinely works for kids, from the zoo to the night markets.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eca81846d78ade2e6748fbd0bef0773b8e8ff71e55f81896820fe66d22f22266.png",
        fastFacts: [
          { icon: "MapPin", label: "Top family stop", value: "Taipei Zoo — one of Asia's largest, with a dedicated panda house and gondola" },
          { icon: "Train", label: "Getting around", value: "MRT is stroller-friendly with elevators at most stations" },
          { icon: "Utensils", label: "Night markets with kids", value: "Go earlier (6-7pm) before peak crowds make strollers hard to navigate" },
          { icon: "Building", label: "Rainy-day backup", value: "Taipei 101 observatory and the National Palace Museum are both fully indoor" },
        ],
        sections: [
          {
            title: "Taipei Zoo Is the Single Best Family Anchor",
            content: "**Taipei Zoo**, reached directly by MRT (Taipei Zoo station, Brown Line), is one of the largest zoos in Asia and genuinely well laid out for a family day — spacious enclosures organized by continent/habitat, a dedicated panda house, and a cable car (the Maokong Gondola connects from a station near the zoo) that doubles as its own attraction for kids who'd enjoy a scenic ride regardless of what's at the other end. Budget a half-day minimum; it's large enough that rushing through in under two hours means missing most of it.\n\nPairing the zoo with Taipei Children's Amusement Park (TCAP), a short distance away with kid-scaled rides, rounds out a full day aimed squarely at younger children rather than trying to force a toddler through an adult-paced sightseeing itinerary.",
            tourCard: { slug: "taipei-family-friendly-tour-taipei-zoo-tcap-day", title: "Taipei Family-Friendly Tour (Taipei Zoo & TCAP Day Trip)", description: "A day built specifically around the zoo and the kids' amusement park, paced for families.", price: "From $150", duration: "Full day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eca81846d78ade2e6748fbd0bef0773b8e8ff71e55f81896820fe66d22f22266.png" },
          },
          {
            title: "The MRT Makes Taipei Easier With Kids Than It Looks",
            content: "Taipei's MRT system is stroller-friendly in a way a lot of first-time visiting parents don't expect: elevators exist at the large majority of stations, platforms are wide, and trains run frequently enough that missing one isn't a real setback. This matters because it means families aren't locked into taxis to move around, which keeps costs down and gives kids something to look at (the system is clean and visually simple to follow even for a child).\n\nNight markets work with kids too, but timing matters more than with an adult-only visit — go earlier, around 6-7pm, before the densest crowds arrive; a stroller or a tired toddler in a packed 9pm Shilin crowd is a genuinely different experience than the same market at 6:30.",
          },
          {
            title: "Rainy-Day and Indoor Backup Options",
            content: "Taipei's typhoon season and generally humid climate mean a backup plan matters. The **Taipei 101 observatory** is fully indoor and climate-controlled, and most kids are entertained by the height and the visible tuned mass damper regardless of weather outside. The **National Palace Museum** is less obviously kid-oriented on paper but has enough genuinely strange and striking objects (the jadeite cabbage carving is a reliable hit with children specifically because it looks like a vegetable made of jade) to hold attention for an hour or so if paced right rather than treated as a full scholarly visit.\n\nDin Tai Fung and other dumpling restaurants are an easy, kid-friendly food fallback across the city if night market food feels like too much of a gamble on a given night.",
          },
        ],
        faqs: [
          { q: "Is Taipei a good city for families with young kids?", a: "Yes — the MRT is stroller-friendly with elevators at most stations, Taipei Zoo is one of Asia's largest and well laid out, and food options range from adventurous night market stalls to reliably kid-friendly dumpling restaurants." },
          { q: "What's the best single family activity in Taipei?", a: "Taipei Zoo, paired with the nearby Maokong Gondola cable car and Taipei Children's Amusement Park for a full, kid-paced day." },
          { q: "Can you take kids to Taipei's night markets?", a: "Yes, but go earlier — around 6-7pm — before the densest evening crowds make strollers and tired kids harder to manage." },
          { q: "What's a good rainy-day option with kids in Taipei?", a: "The Taipei 101 observatory and the National Palace Museum are both fully indoor and climate-controlled, and work for a shorter, well-paced visit rather than a full scholarly tour." },
        ],
      };

    case "ximending-guide":
      return {
        title: "Ximending Guide 2026: Taipei's Youth Culture and Shopping District",
        description: "Ximending is Taipei's answer to a Harajuku or a Myeongdong — pedestrianized streets, street fashion, cheap eats and a genuine youth-culture energy.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ee1f514ef3b84e0c0c0781cfcb37438fdee4f2e95d15bbe98e93c4ba3e6274.jpeg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Wanhua district, around Ximen MRT station" },
          { icon: "Users", label: "Known for", value: "Youth fashion, street performers, cinemas, cheap street food" },
          { icon: "Clock", label: "Busiest", value: "Weekend afternoons and evenings" },
          { icon: "MapPin", label: "Nearby pairing", value: "Longshan Temple, a short MRT ride away" },
        ],
        sections: [
          {
            title: "A Pedestrianized District Built Around Youth Culture",
            content: "**Ximending**, centered on a pedestrianized grid of streets around Ximen MRT station in Wanhua district, is Taipei's main youth-culture and street-fashion district — the closest local equivalent to Tokyo's Harajuku or Seoul's Myeongdong, though with its own distinct Taiwanese character rather than a copy of either. Street performers, buskers and small impromptu dance crews regularly set up in the open plazas, especially on weekend evenings, giving the area a genuinely lively, unscripted energy that's different from the more curated shopping streets elsewhere in the city.\n\nThe area's roots as a cinema and entertainment district go back to the Japanese colonial era, and several of its original theater buildings are still standing, now mixed in among newer fast-fashion stores and themed cafes.",
          },
          {
            title: "What to Do and Eat There",
            content: "Shopping in Ximending leans toward affordable, trend-driven fashion, sneakers, K-pop and anime merchandise, and novelty items rather than luxury retail — it's a browsing district more than a destination-purchase one. Food is a strong draw in its own right: small stalls and shops serving things like oyster mee sua (a thick, savory noodle soup with oysters), stinky tofu, and a range of bubble tea and dessert shops are dense throughout the grid, and prices run noticeably lower than in more tourist-oriented parts of the city.\n\nA cluster of cinemas, including some historic ones, still operates in the district, and a visit here pairs naturally with a walk to Longshan Temple, a short MRT ride or a 15-20 minute walk away, for a contrast between the area's modern energy and the temple's older, quieter atmosphere.",
            tourCard: { slug: "ximending-private-photoshoot-with-taipei", title: "Ximending: Private Photoshoot with Taipei Photographer", description: "A guided photoshoot that uses Ximending's street-art backdrops and energy as the setting.", price: "From $150", duration: "1 hour", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ee1f514ef3b84e0c0c0781cfcb37438fdee4f2e95d15bbe98e93c4ba3e6274.jpeg" },
          },
          {
            title: "When to Go",
            content: "Weekend afternoons and evenings are when Ximending is most alive — street performers out in force, plazas busy, shops and food stalls at full swing — but that also means the heaviest foot traffic. A weekday visit trades some of that energy for an easier, less crowded walk through the same streets. Either way, this is a district best explored on foot without a fixed itinerary; wandering the side streets off the main pedestrian grid often turns up smaller, more interesting shops than the main thoroughfare.",
          },
        ],
        faqs: [
          { q: "What is Ximending known for?", a: "Youth fashion, street performers, cinemas and cheap, dense street food, centered on a pedestrianized grid of streets around Ximen MRT station — often compared to Harajuku or Myeongdong." },
          { q: "How do I get to Ximending?", a: "Take the MRT to Ximen station — the pedestrianized shopping grid starts right at the station exit." },
          { q: "Is Ximending good for shopping?", a: "For affordable, trend-driven fashion and novelty items, yes. It's not a luxury shopping district — think browsing and street finds rather than destination purchases." },
          { q: "When is the best time to visit Ximending?", a: "Weekend evenings for the most street-performer energy, or a weekday if you'd rather have an easier, less crowded walk through the same streets." },
        ],
      };

    case "taipei-museums-guide-national-palace":
      return {
        title: "Taipei Museums Guide 2026: The National Palace Museum and Beyond",
        description: "The National Palace Museum holds one of the world's great collections of Chinese imperial art — here's what to see, how long to budget, and what else is worth a stop.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbb024dd3226f8cc19f6f86e505db9bf0d5f5ad4c73f81a468a03c1f5f4bcfd7.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "Headline collection", value: "National Palace Museum — nearly 700,000 Chinese imperial artifacts" },
          { icon: "Clock", label: "Minimum visit time", value: "2-3 hours for the highlights; a full day for serious enthusiasts" },
          { icon: "MapPin", label: "Famous object", value: "The jadeite 'Jadeite Cabbage' carving" },
          { icon: "MapPin", label: "Access", value: "Bus from Shilin MRT station; no direct MRT line" },
        ],
        sections: [
          {
            title: "The National Palace Museum: One of the World's Great Collections",
            content: "The **National Palace Museum** holds nearly 700,000 pieces of Chinese imperial art and artifacts, much of it brought from Beijing's Forbidden City collection during the Chinese Civil War, making it one of the most significant collections of Chinese imperial material culture anywhere in the world, rivaled mainly by its counterpart institution in Beijing. The collection spans bronzes, ceramics, calligraphy, paintings and jade carvings across several millennia, with only a rotating fraction on display at any time given the scale of the full holdings.\n\nThe single most famous individual object is the **Jadeite Cabbage**, a small jade carving shaped into a remarkably lifelike Chinese cabbage with a locust and katydid perched on its leaves — disproportionately popular relative to its size, and usually the first thing visitors ask museum staff to point them toward.",
            tourCard: { slug: "taipei-national-palace-museum-guided-tour", title: "Taipei National Palace Museum Guided Tour", description: "A guided walk through the museum's highlights, including the Jadeite Cabbage, with context a self-guided visit would miss.", price: "From $45", duration: "2.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbb024dd3226f8cc19f6f86e505db9bf0d5f5ad4c73f81a468a03c1f5f4bcfd7.jpeg" },
          },
          {
            title: "Getting There and How Long to Budget",
            content: "The museum sits outside the MRT network proper — the standard route is an MRT ride to **Shilin station**, followed by a connecting bus, or a taxi from there. Budget at least **2-3 hours** to see the acknowledged highlights without rushing; the full collection and building complex can easily absorb a half-day or more for anyone with a genuine interest in Chinese art history. A guided tour is worth considering here specifically because the context and history behind individual pieces — why certain bronzes or scrolls matter, how the collection ended up in Taiwan — adds considerably more than reading object labels alone.\n\nWeekday mornings are calmer than weekend afternoons, when tour groups and school visits both tend to cluster.",
          },
          {
            title: "Beyond the Palace Museum: Other Taipei Museums Worth a Stop",
            content: "Taipei's museum scene beyond the National Palace Museum is smaller but has genuine standouts. The **Taipei Fine Arts Museum** focuses on Taiwanese and international modern/contemporary art in a striking modernist building near Yuanshan station. The **Confucius Temple** in Datong functions partly as a museum of Confucian philosophy and ritual alongside its role as an active site. For a very different register, the **National Taiwan Museum**, housed in a grand colonial-era building near NTU Hospital station, covers natural history and Taiwan's own cultural history in a smaller, more manageable visit than the Palace Museum.\n\nMost first-time visitors with limited time should prioritize the National Palace Museum over the others unless a specific personal interest (contemporary art, natural history) points elsewhere.",
          },
        ],
        faqs: [
          { q: "How long should I spend at the National Palace Museum?", a: "At least 2-3 hours for the acknowledged highlights, including the Jadeite Cabbage. Serious enthusiasts can easily spend a half-day or more given the scale of the full collection." },
          { q: "How do I get to the National Palace Museum?", a: "Take the MRT to Shilin station, then a connecting bus or taxi — there's no direct MRT line to the museum itself." },
          { q: "What is the most famous object at the museum?", a: "The Jadeite Cabbage, a small jade carving shaped into a remarkably lifelike cabbage with a locust and katydid on its leaves. It's disproportionately popular relative to its size." },
          { q: "Are there other museums worth visiting in Taipei besides the National Palace Museum?", a: "Yes — the Taipei Fine Arts Museum for modern and contemporary art, and the National Taiwan Museum for natural history and local cultural history, both smaller, more manageable visits." },
        ],
      };

    case "dadaocheng-old-street-guide":
      return {
        title: "Dadaocheng and Dihua Street Guide 2026: Taipei's Old Merchant Quarter",
        description: "Herbal medicine shops, dried-goods stalls and restored Qing-and-Japanese-era shophouses — Dadaocheng is Taipei's best-preserved historic quarter.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e1691519237b4ea9ec23e517b15ec654856d59ce80f87675df46559414d26b.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Main street", value: "Dihua Street — restored Qing dynasty and Japanese colonial-era shophouses" },
          { icon: "MapPin", label: "Nearest MRT", value: "Daqiaotou or Beimen station, short walk" },
          { icon: "Utensils", label: "Known for", value: "Dried goods, herbal medicine, tea shops and Chinese New Year market stalls" },
          { icon: "Clock", label: "Visit length", value: "1.5-2.5 hours for an unhurried walk" },
        ],
        sections: [
          {
            title: "Taipei's Best-Preserved Historic Merchant Quarter",
            content: "**Dadaocheng**, the riverside district centered on **Dihua Street**, was Taipei's commercial heart in the late 19th and early 20th centuries, when the area grew rich on tea, cloth and herbal medicine trade through the nearby Tamsui River port. Much of that era's architecture survives in a way few other parts of the city can match — Qing dynasty shophouses alongside Japanese colonial baroque-revival facades, many carefully restored rather than demolished during Taipei's broader modernization. Walking Dihua Street today still means passing dried-goods shops, herbal medicine dispensaries and fabric merchants whose businesses, in some cases, have operated from the same storefronts for generations.\n\nThe area avoids feeling like a preserved museum piece specifically because these are still working, family-run businesses rather than retail fronts built for tourists.",
            tourCard: { slug: "taipei-dadaocheng-dihua-street-temple-walking-tour", title: "Taipei: Dadaocheng & Dihua Street & Temple Walking Tour", description: "A guided walk through the old quarter's shophouses and a nearby working temple.", price: "From $39", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e1691519237b4ea9ec23e517b15ec654856d59ce80f87675df46559414d26b.jpg" },
          },
          {
            title: "What to Buy and Eat",
            content: "Dihua Street is the place to buy dried fruit, Chinese medicinal herbs, high-quality loose-leaf tea and traditional snacks like sun cakes and dried persimmons, often at prices and quality that beat what's sold in more tourist-facing shops elsewhere in the city. In the weeks before Lunar New Year, the street transforms into one of Taipei's busiest seasonal markets, with stalls spilling further out onto the sidewalks and crowds that can take real patience to move through — worth experiencing once, but go with lower expectations of a relaxed browse during that window.\n\nFood-wise, look beyond the dried-goods shops for small noodle and dumpling spots tucked into side streets, several of which have operated quietly for decades without much signage beyond a hand-painted sign.",
            tourCard: { slug: "dadaocheng-walking-tour-of-taipeis-past-present", title: "Dadaocheng: Walking Tour of Taipei's Past & Present", description: "A deeper historical walk through the district's architecture and working shops.", price: "From $45", duration: "2.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e1691519237b4ea9ec23e517b15ec654856d59ce80f87675df46559414d26b.jpg" },
          },
          {
            title: "Getting There and Pairing It With Other Sights",
            content: "Dadaocheng is reachable by a short walk from **Daqiaotou** or **Beimen MRT station**, or combined naturally with a visit to **Longshan Temple** and **Taipei 101** as part of a broader old-quarter-to-modern-skyline loop across the western and central city. The riverside Dadaocheng Wharf, a short walk from Dihua Street, is also worth a stop for its sunset views over the Tamsui River and a rotating lineup of small cafes and bars that have moved into the area's restored warehouses in recent years.\n\nBudget 1.5-2.5 hours for an unhurried walk through the main street and a side street or two, longer if you plan to sit down for tea or a meal along the way.",
          },
        ],
        faqs: [
          { q: "What is Dadaocheng known for?", a: "Restored Qing dynasty and Japanese colonial-era shophouses along Dihua Street, historically Taipei's center for tea, cloth and herbal medicine trade, with many of those businesses still operating today." },
          { q: "How do I get to Dihua Street?", a: "A short walk from Daqiaotou or Beimen MRT station." },
          { q: "What should I buy on Dihua Street?", a: "Dried fruit, Chinese medicinal herbs, loose-leaf tea and traditional snacks like sun cakes, generally at better prices and quality than more tourist-facing shops elsewhere." },
          { q: "Is Dadaocheng busy during Lunar New Year?", a: "Yes, significantly — the street becomes one of the city's busiest seasonal markets in the weeks before the holiday, with heavier crowds than a normal visit." },
        ],
      };

    case "beitou-hot-springs-guide":
      return {
        title: "Beitou Hot Springs Guide 2026: Bathhouses, Etiquette and What to Expect",
        description: "Beitou has been Taipei's hot-spring district since the Japanese colonial era. Here's how public bathhouses and private hotel springs actually differ.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fb8ecdd3799b61e6b317f26aff64bda69434b789d0e131a1085ee9a6516fbabd.jpeg",
        fastFacts: [
          { icon: "MapPin", label: "Distance from city center", value: "Roughly 20 minutes by MRT" },
          { icon: "Droplet", label: "Spring types", value: "White sulfur (milky, mild) and green sulfur (clear, more acidic)" },
          { icon: "DollarSign", label: "Public bathhouse cost", value: "As low as NT$40-60 for basic public pools" },
          { icon: "FileText", label: "Etiquette", value: "Shower thoroughly before entering; most public pools require full nudity, gender-separated" },
        ],
        sections: [
          {
            title: "A Hot-Spring District With a Century of History",
            content: "**Beitou** became a hot-spring resort under Japanese colonial rule in the early 20th century, and the district still carries that era's architectural fingerprints — the restored **Beitou Hot Spring Museum**, originally a Japanese-era public bathhouse, is now a small museum you can tour (shoes off, as it once required of bathers) to see what the original facility looked like. The geothermal heat itself comes from the **Datun Volcano Group**, the same system feeding Yangmingshan's features nearby, and produces two distinct spring types: milky-white sulfur springs and clearer, more acidic green sulfur springs, each marketed slightly differently by the hotels and bathhouses that use them.",
            tourCard: { slug: "taipei-4-hour-beitou-hot-springs-heritage-walking", title: "Taipei: 4-Hour Beitou Hot Springs & Heritage Walking Tour", description: "A guided walk through Beitou's thermal valley and historic bathhouse district before a soak.", price: "From $181", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fb8ecdd3799b61e6b317f26aff64bda69434b789d0e131a1085ee9a6516fbabd.jpeg" },
          },
          {
            title: "Public Bathhouses vs. Private Hotel Rooms",
            content: "Beitou's bathing options split cleanly into two categories. **Public bathhouses** are inexpensive — some basic municipal pools cost as little as NT$40-60 — but are gender-separated and generally require full nudity, following standard Japanese-influenced bathhouse etiquette: shower thoroughly before entering the pool, keep long hair tied up and out of the water, and don't bring towels or phones into the bathing area itself. **Private hotel spring rooms**, rented by time rather than per person, cost considerably more but allow mixed-gender groups, couples or families to bathe together, and typically come with a private tub fed by the same thermal water.\n\nFirst-timers uncomfortable with communal nudity should default to a private room rather than forcing a public bathhouse visit; neither option is considered the 'correct' or more authentic way to experience Beitou.",
          },
          {
            title: "Thermal Valley, Timing and What to Bring",
            content: "**Beitou Thermal Valley**, a visibly steaming, milky-green sulfur pool too hot to bathe in directly, is the district's free, walkable signature sight and worth a stop even if you're not planning to bathe elsewhere that day. Bring your own towel and flip-flops for public bathhouses (some provide rentals, but not always), and avoid bathing on a full stomach or after heavy alcohol, which is both poor etiquette and genuinely unwise given the water temperature.\n\nBeitou pairs naturally with a visit to nearby **Tamsui**'s riverside promenade for sunset, or with **Yangmingshan National Park** further up the same volcanic system for a combined hiking-and-bathing day.",
          },
        ],
        faqs: [
          { q: "Do I have to be naked at Beitou's public bathhouses?", a: "In most gender-separated public pools, yes, by standard local etiquette. Private hotel rooms, rented by time, are the alternative for mixed-gender groups or anyone who prefers not to bathe communally." },
          { q: "How much does a Beitou hot spring cost?", a: "Basic public pools can cost as little as NT$40-60. Private hotel spring rooms cost considerably more but allow mixed-gender bathing in a private tub." },
          { q: "What's the difference between white and green sulfur springs in Beitou?", a: "White sulfur springs are milky in appearance and milder; green sulfur springs are clearer and more acidic. Both are fed by the same Datun Volcano Group geothermal system." },
          { q: "How do I get to Beitou from central Taipei?", a: "By MRT, roughly 20 minutes from the city center, with no transfer required on the main line." },
        ],
      };

    case "taipei-budget-travel-guide":
      return {
        title: "Taipei on a Budget 2026: How Cheap It Actually Is",
        description: "Taipei is one of the better value capitals in Asia for a visitor watching costs — here's where the savings are real and where they're not.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8daab221e31cf4b4164f0555ebea8bc61021f2fd4f1f8f934d28876f7386ed10.jpg",
        fastFacts: [
          { icon: "DollarSign", label: "Night market meal", value: "NT$60-150 (roughly US$2-5) per dish" },
          { icon: "Train", label: "EasyCard fare savings", value: "Roughly 20% cheaper than paper tickets on the MRT" },
          { icon: "Building", label: "Free sights", value: "Longshan Temple, Elephant Mountain, Beitou Thermal Valley, Dadaocheng's streets" },
          { icon: "Home", label: "Budget hostel bed", value: "Roughly US$15-25 per night in the city center" },
        ],
        sections: [
          {
            title: "Food Is Where Taipei's Value Is Most Obvious",
            content: "Taipei's night market economy means a genuinely good meal rarely costs more than a few dollars — most individual stall dishes run **NT$60-150, roughly US$2-5**, and a full night's worth of grazing across several stalls at Shilin, Raohe or Ningxia typically lands under US$15 even eating generously. This isn't a compromise on quality; night market food is a core part of Taiwanese food culture, not a cheap substitute for 'real' restaurants, and some of the city's most locally beloved dishes (beef noodle soup, oyster omelets, the Shilin fried chicken cutlet) are built around this price point by design, not by budget necessity.\n\nSit-down restaurants and Din Tai Fung-tier dining cost more, but even mid-range Taipei restaurants are noticeably cheaper than equivalent quality in Tokyo, Hong Kong or Singapore.",
            tourCard: { slug: "taipei-2-hour-raohe-night-market-walking-tour", title: "Taipei: 2-Hour Raohe Night Market Walking Tour", description: "A guided night market walk that maximizes value by skipping the mediocre stalls.", price: "From $78", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png" },
          },
          {
            title: "Transport and Free Sights",
            content: "An **EasyCard** cuts MRT fares roughly 20% below paper ticket prices and covers buses too, making public transit the clear cost-effective choice over taxis for almost every trip within the city. A number of Taipei's best sights cost nothing at all: **Longshan Temple** is free to enter, the **Elephant Mountain** hike is an unticketed public trail, **Beitou Thermal Valley** is a free walkway, and simply wandering **Dadaocheng**'s old streets or a night market costs only what you choose to spend on food.\n\nTaipei 101's observatory and the National Palace Museum are the main paid exceptions among the headline sights, and both are reasonably priced relative to comparable attractions elsewhere in Asia.",
          },
          {
            title: "Accommodation and Realistic Daily Budgets",
            content: "Budget hostel beds in central Taipei run roughly **US$15-25 per night**, and clean, simple guesthouse or budget hotel rooms are available from around US$35-50. Combined with cheap night market food and EasyCard-discounted transit, a genuinely frugal daily budget of US$35-50 covers accommodation, food and local transport for most budget-conscious travelers, with day trips (Jiufen, Beitou) adding modest extra cost on top via bus or train fares rather than requiring an expensive tour every time.\n\nWhere costs rise fastest: private day-trip tours, fast-track attraction tickets, and alcohol at bars rather than convenience stores — all avoidable if cost matters more than convenience.",
          },
        ],
        faqs: [
          { q: "Is Taipei cheap to visit?", a: "Relative to Tokyo, Hong Kong or Singapore, yes — night market meals cost a few dollars, EasyCard transit is discounted and efficient, and several top sights (Longshan Temple, Elephant Mountain, Beitou Thermal Valley) are free." },
          { q: "What's a realistic daily budget for Taipei?", a: "Roughly US$35-50 per day covers budget accommodation, night market food and EasyCard-discounted local transport for a frugal traveler." },
          { q: "What are the free things to do in Taipei?", a: "Longshan Temple, the Elephant Mountain hike, Beitou Thermal Valley, and walking the old streets of Dadaocheng or any night market (food itself isn't free, but entry and browsing are)." },
          { q: "Does the EasyCard actually save money?", a: "Yes — EasyCard fares on the MRT run roughly 20% cheaper than single-journey paper tickets, and it also works on buses." },
        ],
      };

    case "taipei-luxury-travel-guide":
      return {
        title: "Luxury Taipei 2026: High-End Hotels, Private Tours and Fine Dining",
        description: "Taipei's luxury tier is quieter and less flashy than Hong Kong's or Singapore's, but it's genuinely there — here's where the money goes well.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c6e6382cd4e43257d35e28c523c9ac75b5c4bd79122f4ce9656a2ca3ef3fbd4.png",
        fastFacts: [
          { icon: "Star", label: "Known for", value: "High-end private dining, premium chauffeured day tours, understated five-star hotels" },
          { icon: "MapPin", label: "Fine dining district", value: "Xinyi, around Taipei 101" },
          { icon: "Utensils", label: "Michelin presence", value: "Multiple starred restaurants, including Taiwanese and Cantonese fine dining" },
          { icon: "Car", label: "Private transport", value: "Premium sedan/van charters common for full-day private touring" },
        ],
        sections: [
          {
            title: "A Quieter, More Food-Focused Luxury Scene",
            content: "Taipei's luxury travel identity is less about flash than Hong Kong's harbor-view hotels or Singapore's branded towers, and more about an exceptional, understated fine-dining scene and genuinely attentive five-star hospitality. The **Xinyi district**, anchored by Taipei 101, holds the densest concentration of high-end hotels and restaurants, including multiple **Michelin-starred** establishments covering everything from refined Taiwanese cuisine to Cantonese and French fine dining. The city's top hotels lean toward understated design and exceptional service over the most ostentatious lobbies, which matches a broader Taiwanese hospitality style that prizes attentiveness over spectacle.",
          },
          {
            title: "Private Touring and Chauffeured Days",
            content: "A premium sedan or van charter with a private driver is the standard way to do Taipei at the luxury tier — covering Jiufen, Beitou or a multi-stop city day without any public-transit logistics, on a schedule set entirely by the traveler rather than a group tour's timetable. This matters more in Taipei than in some destinations because several of the best day trips (Jiufen, Yangmingshan, Wulai) involve winding mountain roads where a private, air-conditioned vehicle with a driver who knows the route well is a genuine upgrade over a public bus, not just a comfort indulgence.",
            tourCard: { slug: "taipei-private-guided-tour-by-premium-sedanvan", title: "Taipei: Private Guided Tour by Premium Sedan/Van", description: "A fully private, chauffeured day built around whatever itinerary you set.", price: "From $350", duration: "Full day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c6e6382cd4e43257d35e28c523c9ac75b5c4bd79122f4ce9656a2ca3ef3fbd4.png" },
          },
          {
            title: "Where the Spending Actually Pays Off",
            content: "The clearest luxury upgrades in Taipei are a premium Taipei 101 observatory experience with the open-air 'Skyline' tier, a private driver for multi-stop day trips, reservations at one of the city's Michelin-starred restaurants (book well ahead, especially for Taiwanese tasting-menu spots), and a private Maokong Gondola or teahouse experience away from the general public cabin queue. Luxury hotel spa packages, including private Beitou hot spring suites at five-star properties, are also a genuine step up from the public bathhouse experience for travelers specifically prioritizing privacy and comfort over the more communal, cheaper version.\n\nWhat doesn't scale with spending: night market food, which is excellent regardless of budget tier and arguably loses something in a formalized, white-tablecloth version.",
          },
        ],
        faqs: [
          { q: "Does Taipei have a serious fine-dining scene?", a: "Yes — Xinyi district holds multiple Michelin-starred restaurants spanning Taiwanese, Cantonese and French cuisine, alongside a broader scene of highly regarded independent restaurants." },
          { q: "Is a private driver worth it in Taipei?", a: "For multi-stop day trips like Jiufen or Yangmingshan, yes — it removes public-transit logistics on routes that often involve winding mountain roads, and runs on your own schedule rather than a group tour's." },
          { q: "What's a worthwhile luxury upgrade at Taipei 101?", a: "The premium open-air 'Skyline' observatory tier, for travelers who specifically want an exposed, higher vantage point beyond the standard enclosed 89th-floor deck." },
          { q: "Can you get a private hot spring experience in Beitou?", a: "Yes — several five-star hotels in Beitou offer private spring suites, a step up in privacy and comfort from the public bathhouse option." },
        ],
      };

    case "keelung-day-trip-guide":
      return {
        title: "Keelung Day Trip from Taipei 2026: The Port City Guide",
        description: "Keelung is both a cruise port and a genuine day-trip destination in its own right, built around its famous Miaokou night market and a working harbor.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png",
        fastFacts: [
          { icon: "MapPin", label: "Distance from Taipei", value: "Roughly 45-60 minutes by train or bus" },
          { icon: "Ship", label: "Also known for", value: "A major cruise port — many shore excursions start here" },
          { icon: "Utensils", label: "Signature stop", value: "Miaokou Night Market, one of Taiwan's most famous food markets" },
          { icon: "MapPin", label: "Nearby pairing", value: "Yehliu Geopark's rock formations, a short distance further" },
        ],
        sections: [
          {
            title: "A Working Port City, Not a Polished Tourist Town",
            content: "**Keelung** sits on Taiwan's northern coast, roughly 45-60 minutes from Taipei by train or bus, and functions as both a genuine cruise port — a meaningful share of visitors arrive here specifically on a shore excursion day — and a worthwhile independent day trip for anyone based in Taipei. Unlike Jiufen's postcard prettiness, Keelung reads as a real, working harbor city, which gives it a different, less staged character: fishing boats, a functioning container port, and a downtown built around decades of maritime trade rather than a curated old-street experience.",
            tourCard: { slug: "keelung-shore-excursion-taipei-city-one-day-tour", title: "Keelung Shore Excursion: Taipei City One Day Tour", description: "Built for cruise arrivals, covering Taipei's highlights in the window a port call allows.", price: "From $120", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png" },
          },
          {
            title: "Miaokou Night Market: Keelung's Main Event",
            content: "**Miaokou Night Market**, named for the temple at one end of the street, is consistently ranked among Taiwan's best night markets by locals, built around a compact, walkable strip dense with long-running food stalls rather than Shilin's sprawl. Specialties worth seeking out include tempura-style fried fish cakes, a thick seafood soup called 'ding bian hu', and braised pork rice variations distinct from the Taipei versions. Because Keelung sees fewer international tourists than Taipei's major markets, prices and the overall pace feel a notch more local, even though the market is well known within Taiwan itself.",
            tourCard: { slug: "keelung-guided-walking-tour-with-snacks-and-drink", title: "Keelung: Guided Walking Tour with Snacks and Drink", description: "A guided walk through Keelung's harbor and Miaokou market with a local pointing out the specialties.", price: "From $55", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png" },
          },
          {
            title: "Pairing Keelung With Yehliu and the Northeast Coast",
            content: "Keelung sits naturally on the way to **Yehliu Geopark**, famous for its wind-and-wave-carved rock formations including the 'Queen's Head', making it easy to combine both into a single northeast-coast day rather than treating Keelung as a standalone trip. If you're arriving by cruise ship on a shore excursion, most operators build a combined itinerary covering Keelung's harbor area and a transfer into central Taipei for the headline sights, given the limited window a port call typically allows.\n\nIndependent travelers based in Taipei can reach Keelung directly by train from Taipei Main Station, making it one of the more straightforward rail day trips in the region without needing a bus transfer.",
          },
        ],
        faqs: [
          { q: "How far is Keelung from Taipei?", a: "Roughly 45-60 minutes by train or bus, making it a straightforward half-day or full-day trip." },
          { q: "What is Keelung known for?", a: "Its working harbor, status as a major cruise port, and Miaokou Night Market, consistently ranked among Taiwan's best food markets." },
          { q: "Can I combine Keelung with Yehliu Geopark?", a: "Yes — Keelung sits naturally on the route to Yehliu's famous rock formations, and many day trips combine both into a single northeast-coast itinerary." },
          { q: "Do cruise ships stop in Keelung?", a: "Yes, Keelung is a major cruise port for northern Taiwan, and many shore excursions use it as the gateway into central Taipei." },
        ],
      };

    case "sun-moon-lake-day-trip":
      return {
        title: "Sun Moon Lake Day Trip from Taipei 2026: Is It Worth the Distance?",
        description: "Taiwan's largest lake sits in the central mountains, a genuinely long way from Taipei — here's the honest travel time and whether a day trip makes sense.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5adf02b9a92dc2465d171e149d64887572c8c7932681c4c9d489fdaec9cb52c6.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Distance from Taipei", value: "Roughly 3-3.5 hours each way by bus or high-speed rail plus transfer" },
          { icon: "Droplet", label: "What it is", value: "Taiwan's largest natural lake, in the central Nantou mountains" },
          { icon: "Clock", label: "Honest day length", value: "12+ hours round trip for a single-day visit" },
          { icon: "Ship", label: "Signature activity", value: "A boat cruise across the lake, stopping at Ita Thao and Xuanguang Temple" },
        ],
        sections: [
          {
            title: "Taiwan's Largest Lake, Deep in the Central Mountains",
            content: "**Sun Moon Lake**, in Nantou County in Taiwan's central mountains, is the island's largest natural lake and one of its most photographed landscapes — named for the contrasting round (sun) and crescent (moon) shapes of its two halves, split by Lalu Island near the center. The lake is surrounded by forested hills and several cultural sites tied to the local indigenous Thao people, including the lakeside village of **Ita Thao**, and the hillside **Wenwu Temple** and **Xuanguang Temple**, both popular boat-cruise stops.\n\nThe lake's main appeal is the combination of scenery and a slower pace than Taipei — a boat ride across calm water framed by mountains, rather than a single specific landmark to check off.",
            tourCard: { slug: "from-taipei-private-sun-moon-lake-tour-with-boat", title: "From Taipei: Private Sun Moon Lake Tour with Boat Cruise", description: "A private day trip that handles the long transfer and includes the signature lake cruise.", price: "From $420", duration: "12 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5adf02b9a92dc2465d171e149d64887572c8c7932681c4c9d489fdaec9cb52c6.jpg" },
          },
          {
            title: "The Honest Travel Time, and Whether a Day Trip Makes Sense",
            content: "Sun Moon Lake sits roughly **3 to 3.5 hours** from Taipei each way by direct bus, or by high-speed rail to Taichung followed by a connecting bus — there's no direct train to the lake itself. A single-day round trip adds up to **12 or more hours**, including boat-cruise and sightseeing time at the lake, which makes this one of the longer day trips offered out of Taipei and a genuinely tiring one if you're also planning a full day in the city before or after.\n\nFor travelers with a flexible itinerary, pairing Sun Moon Lake with **Alishan** as a 2-3 day loop through central Taiwan, rather than a single exhausting day from Taipei, gets considerably more out of the region without the same round-trip time penalty.",
            tourCard: { slug: "from-taipei-city-3-day-sun-moon-lake-alishan", title: "From Taipei City: 3-Day Sun Moon Lake & Alishan Private Tour", description: "The unhurried version, covering both central Taiwan highlights without a single-day time crunch.", price: "From $1200", duration: "3 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5adf02b9a92dc2465d171e149d64887572c8c7932681c4c9d489fdaec9cb52c6.jpg" },
          },
          {
            title: "What to Do Once You're There",
            content: "The boat cruise, stopping at **Ita Thao** village, **Xuanguang Temple** and **Shuishe Pier**, is the standard way to see the lake and covers its main sights in a few hours. Cyclists rate the lake's paved bikeway, considered one of Taiwan's best, as a genuine highlight if time allows a longer visit. Ita Thao village itself has a small market and food stalls reflecting Thao indigenous culture, worth a slower look rather than a rushed stop between boat departures.\n\nIf you do commit to the single-day version from Taipei, prioritize the boat cruise and one of the two temples over trying to add a lakeside hike, given how much of the day the round-trip transfer already consumes.",
          },
        ],
        faqs: [
          { q: "How far is Sun Moon Lake from Taipei?", a: "Roughly 3-3.5 hours each way by direct bus or high-speed rail to Taichung plus a connecting bus. There's no direct train to the lake." },
          { q: "Is a Sun Moon Lake day trip from Taipei worth it?", a: "It's doable but genuinely long — 12 or more hours round trip. If your schedule allows it, pairing the lake with Alishan over 2-3 days gets considerably more out of the region for similar total effort." },
          { q: "What is there to do at Sun Moon Lake?", a: "A boat cruise stopping at Ita Thao village, Xuanguang and Wenwu temples, plus one of Taiwan's best-rated paved cycling routes around the lakeshore." },
          { q: "What is Ita Thao?", a: "A lakeside village tied to the local indigenous Thao people, with a small market and food stalls, and a regular stop on the Sun Moon Lake boat cruise." },
        ],
      };

    case "alishan-day-trip-guide":
      return {
        title: "Alishan Day Trip and Overnight Guide 2026: The Sunrise Mountain Railway",
        description: "Alishan's alpine forests and narrow-gauge railway are one of Taiwan's signature mountain experiences — but the famous sunrise viewing really needs an overnight.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e8e7383b8959d017c2c556c35fc260a4d3f00951741841d604f808adba4e41a.jpeg",
        fastFacts: [
          { icon: "Mountain", label: "What it is", value: "A high-altitude national scenic area in central Taiwan, roughly 2,200m elevation" },
          { icon: "Train", label: "Signature feature", value: "The historic narrow-gauge Alishan Forest Railway" },
          { icon: "Sun", label: "Famous for", value: "Sunrise viewing from Zhushan, and a 'sea of clouds' below the peaks" },
          { icon: "Clock", label: "Honest recommendation", value: "An overnight, not a day trip, if sunrise viewing matters to you" },
        ],
        sections: [
          {
            title: "Alpine Forest, a Historic Railway and a Famous Sunrise",
            content: "**Alishan**, a national scenic area in Taiwan's central mountains at roughly 2,200 meters elevation, is known for ancient cypress and cedar forest trails, cool mountain air that's a genuine relief from Taipei's lowland humidity, and the **Alishan Forest Railway**, a narrow-gauge line built originally for logging during the Japanese colonial era and now run as a scenic passenger service through switchbacks and forest. The area's most famous single experience is the **sunrise viewing point at Zhushan**, where visitors gather before dawn to watch the sun rise over a 'sea of clouds' settled in the valleys below — a genuinely spectacular sight on a clear morning, and one of Taiwan's most iconic mountain images.",
          },
          {
            title: "Why This One Really Needs an Overnight",
            content: "Alishan sits far enough from Taipei, and the sunrise viewing happens early enough before dawn, that a genuine single-day round trip from Taipei can't realistically include it — the logistics require either an overnight in or near the scenic area, or accepting that you'll see Alishan's forests and railway without the sunrise. Most operators sell this honestly as a **2-day** trip: travel and afternoon arrival on day one, a pre-dawn sunrise viewing and forest walk on day two before heading back. Treat any itinerary promising a same-day Taipei-to-Alishan-sunrise-and-back trip with real skepticism; the geography doesn't support it comfortably.",
            tourCard: { slug: "from-taipei-alishan-2-days-private-tour", title: "From Taipei: Alishan 2 Days Private Tour", description: "The honest version — an overnight that actually allows time for the sunrise viewing.", price: "From $890", duration: "2 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e8e7383b8959d017c2c556c35fc260a4d3f00951741841d604f808adba4e41a.jpeg" },
          },
          {
            title: "Combining Alishan With Sun Moon Lake",
            content: "Because both destinations sit in Taiwan's central region and require a similarly long transfer from Taipei, combining **Alishan and Sun Moon Lake** into a single 3-day trip is the most efficient way to see both without doubling up on travel time. This also spreads the sunrise-viewing early wake-up across a fuller itinerary rather than making it the sole purpose of an overnight stay. Pack warm layers regardless of season — Alishan's altitude means noticeably cooler temperatures than lowland Taiwan, especially before dawn at the sunrise viewpoint.",
            tourCard: { slug: "from-taipei-private-3-day-tour-to-sun-moon", title: "From Taipei: Private 3-Day Tour to Sun Moon Lake and Alishan", description: "Both central Taiwan highlights in one trip, sharing the long transfer time efficiently.", price: "From $1350", duration: "3 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5adf02b9a92dc2465d171e149d64887572c8c7932681c4c9d489fdaec9cb52c6.jpg" },
          },
        ],
        faqs: [
          { q: "Can you see Alishan's sunrise on a day trip from Taipei?", a: "Realistically, no — the distance and the pre-dawn timing of the sunrise viewing require an overnight in or near the scenic area. Treat any same-day promise with skepticism." },
          { q: "What is the Alishan Forest Railway?", a: "A historic narrow-gauge railway originally built for logging during the Japanese colonial era, now run as a scenic passenger line through the area's switchbacks and forest." },
          { q: "How cold is it at Alishan?", a: "Noticeably cooler than lowland Taiwan given the roughly 2,200m elevation, especially before dawn — pack warm layers regardless of the season you're visiting." },
          { q: "Should I combine Alishan with Sun Moon Lake?", a: "Yes, if your schedule allows — both sit in the same central region, so combining them into a 3-day trip is more efficient than two separate long trips from Taipei." },
        ],
      };

    case "taipei-7-day-itinerary":
      return {
        title: "The Perfect 7-Day Taiwan Itinerary (2026): Taipei Plus the Rest of the Island",
        description: "A week gives Taipei's 3-day core room to extend into Sun Moon Lake, Alishan or Taroko Gorge — here's how to structure the full week without rushing.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg",
        sections: [
          {
            title: "Days 1-3: The Taipei Core",
            content: "Follow the 3-day Taipei itinerary as the foundation of the week: temples, Taipei 101 and a night market on day one, Jiufen and Shifen on day two, Beitou's hot springs and Yangmingshan on day three. This covers Taipei's genuine essentials thoroughly rather than skimming them to rush toward the rest of the island, and it's worth resisting the urge to compress this into two days just to free up more time elsewhere — Taipei rewards the full three.",
          },
          {
            title: "Days 4-5: Central Taiwan — Sun Moon Lake and Alishan",
            content: "Use a high-speed rail connection or a long-distance bus to reach **Taichung** or directly toward **Nantou**, and spend two days covering **Sun Moon Lake**'s boat cruise and **Alishan**'s forest railway and sunrise viewing — the pairing we recommend over attempting either as an exhausting single day from Taipei. This is also the point in the trip where the pace shifts from Taipei's density to Taiwan's slower, greener interior, which is a meaningful contrast most visitors comment on afterward.",
            tourCard: { slug: "from-taipei-private-3-day-tour-to-sun-moon", title: "From Taipei: Private 3-Day Tour to Sun Moon Lake and Alishan", description: "Covers both central Taiwan highlights; adapt to 2 days if your week is tighter elsewhere.", price: "From $1350", duration: "3 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5adf02b9a92dc2465d171e149d64887572c8c7932681c4c9d489fdaec9cb52c6.jpg" },
          },
          {
            title: "Days 6-7: Hualien and Taroko Gorge, or Back to Taipei for a Slower Finish",
            content: "If your route and transport allow it, close the trip with **Taroko Gorge** near Hualien — ideally as an overnight rather than a rushed day trip, given how much of a single day the transfer alone consumes. Alternatively, if logistics make a return to Taipei more practical from wherever central Taiwan left you, spend the final two days back in the city on anything the first three days didn't cover: a proper National Palace Museum visit, Ximending, Dadaocheng's streets at a slower pace, or a second attempt at Elephant Mountain if the weather wasn't cooperative the first time.\n\nEither version closes a full week well; which one fits depends more on your return flight's airport and your tolerance for one more long transfer day.",
            tourCard: { slug: "from-taipei-two-day-journey-through-hualien-and", title: "From Taipei: Two-Day Journey Through Hualien and Yilan Trip", description: "An overnight structure for Taroko Gorge and the east coast, removing the single-day time crunch.", price: "From $980", duration: "2 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/914e6dd4cbb598a32d3d83becf65282b1eca7473b0710116e60936d530f99cef.jpeg" },
          },
        ],
        faqs: [
          { q: "Is 7 days enough to see Taiwan beyond Taipei?", a: "It's enough for a well-paced trip combining Taipei's 3-day core with 2 days in central Taiwan (Sun Moon Lake and Alishan) and 2 more for either Taroko Gorge or a slower Taipei finish — not enough to also add the south or east coast in depth." },
          { q: "Should I spend all 7 days in Taipei instead?", a: "Only if you'd genuinely rather go deep on the city than see the rest of the island — Taipei alone can absorb a week, but most first-time visitors get more out of splitting time between the capital and at least one of the central mountain regions." },
          { q: "What's the most efficient way to see Sun Moon Lake and Alishan in a week-long trip?", a: "Treat them as a single 2-day central Taiwan block via high-speed rail to Taichung, rather than two separate trips from Taipei." },
          { q: "Is Taroko Gorge worth adding to a 7-day Taiwan trip?", a: "Yes, if your route allows an overnight near Hualien rather than squeezing it into a single exhausting day — it's one of Taiwan's most dramatic landscapes." },
        ],
      };

    case "taiwan-high-speed-rail-guide":
      return {
        title: "Taiwan High-Speed Rail Guide 2026: Booking, Routes and Whether It's Worth It",
        description: "Taiwan's bullet train connects Taipei to the west coast in a fraction of the drive time. Here's how booking actually works and which routes matter for visitors.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg",
        fastFacts: [
          { icon: "Train", label: "Top speed", value: "Up to 300 km/h" },
          { icon: "Clock", label: "Taipei to Taichung", value: "Roughly 50 minutes" },
          { icon: "Clock", label: "Taipei to Kaohsiung", value: "Roughly 1.5-2 hours" },
          { icon: "Ticket", label: "Booking", value: "Official THSR website or app, up to 28 days ahead; standby fares for same-day travel" },
        ],
        sections: [
          {
            title: "What the THSR Covers, and What It Doesn't",
            content: "Taiwan's **High Speed Rail (THSR)** runs down the island's west coast, connecting Taipei to Taoyuan, Hsinchu, Taichung, Tainan and Kaohsiung at speeds up to 300 km/h, cutting a drive that could take 4-5 hours down to **under 2 hours** end to end. It's the fastest and most comfortable way to reach Taichung (for Sun Moon Lake and Alishan connections) or the southern cities from Taipei. What it doesn't cover is the east coast — Hualien and Taroko Gorge are reached by a separate conventional rail line (the TRA), not the THSR, since the mountainous eastern geography has made a high-speed line there impractical to build.\n\nStations sit outside some city centers (THSR Taichung, for instance, is separate from the conventional Taichung rail station, requiring a short transfer), which is worth factoring into connection times.",
          },
          {
            title: "Booking: Easier Than It Looks",
            content: "Tickets can be booked online through the official **THSR website or app** up to 28 days in advance, with English-language booking fully supported and no need for a Taiwan phone number or local payment method for most booking paths. Walk-up and standby tickets are also available at stations for same-day travel, though reserved seats on popular routes and times (Friday evenings, holiday weekends) can sell out, so booking ahead is worth it if your schedule is fixed. A rail pass covering multiple days of THSR travel exists for visitors planning several inter-city trips, though it only pays off if you're making more than two or three rides during your visit.\n\nSeat classes are straightforward: standard cars and a pricier Business car with wider seats and a quieter cabin, plus a dedicated car for passengers with large luggage on some routes.",
            tourCard: { slug: "taipei-taipei-hualien-one-day-tour", title: "Taipei: Taipei-Hualien One Day Tour", description: "Uses the conventional TRA line rather than the THSR, since Hualien sits outside the high-speed network.", price: "From $485", duration: "1 day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/914e6dd4cbb598a32d3d83becf65282b1eca7473b0710116e60936d530f99cef.jpeg" },
          },
          {
            title: "When the THSR Is Actually Worth It for a Visitor",
            content: "For a Taipei-based trip extending to **Sun Moon Lake, Alishan or Kaohsiung**, the THSR is close to essential — the time saved over a bus is substantial, and the comfort difference on a multi-hour journey matters. For destinations the THSR doesn't reach directly (Jiufen, Beitou, Yangmingshan, Hualien), it's irrelevant; those are MRT, bus or conventional-rail trips instead. Budget the short transfer time at THSR stations that sit outside city centers, and don't assume every THSR stop drops you exactly where you want to be without a connecting ride.",
          },
        ],
        faqs: [
          { q: "Does Taiwan's high-speed rail go to Hualien or Taroko Gorge?", a: "No — the east coast is served by a separate conventional rail line (TRA), not the THSR. The mountainous terrain has made a high-speed line to the east coast impractical." },
          { q: "How do I book THSR tickets?", a: "Through the official THSR website or app, up to 28 days in advance, with full English-language support. Walk-up and standby tickets are also available at stations for same-day travel." },
          { q: "How long does Taipei to Taichung take by THSR?", a: "Roughly 50 minutes, compared to several hours by car or conventional bus." },
          { q: "Is a Taiwan rail pass worth buying?", a: "Only if you're making more than two or three THSR trips during your visit — for a single round trip, buying individual tickets is usually simpler and not meaningfully more expensive." },
        ],
      };

    case "taipei-coffee-culture-guide":
      return {
        title: "Taipei Coffee Culture Guide 2026: Specialty Shops and the City's Cafe Scene",
        description: "Taipei's coffee scene has grown into one of Asia's more serious specialty markets, with a strong parallel culture of slow, design-forward independent cafes.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e1691519237b4ea9ec23e517b15ec654856d59ce80f87675df46559414d26b.jpg",
        fastFacts: [
          { icon: "Coffee", label: "Known for", value: "A dense independent specialty-coffee scene, strong in third-wave roasting" },
          { icon: "MapPin", label: "Dense cafe districts", value: "Da'an, Zhongshan, and the Dadaocheng old quarter" },
          { icon: "DollarSign", label: "Typical specialty coffee price", value: "NT$120-200 (roughly US$4-6.50)" },
          { icon: "Building", label: "Café style", value: "Ranges from minimalist third-wave bars to restored old shophouses" },
        ],
        sections: [
          {
            title: "A Specialty Scene That Grew Up Fast",
            content: "Taipei's coffee culture has developed into one of the more serious specialty-coffee markets in Asia over roughly the past decade, driven by a wave of independent roasters and baristas who've competed internationally, including Taiwanese representation at the World Barista Championship. The scene isn't concentrated in one tourist-facing strip; it's spread across neighborhoods, with **Da'an district** holding a particularly dense cluster of small, design-conscious cafes, many run by owner-baristas who roast their own beans or source carefully from small international roasters.\n\nThis matters for visitors because it means a genuinely good cup of coffee is easy to find without hunting for a single famous address — the depth of the scene is broad rather than concentrated in a handful of landmark cafes.",
          },
          {
            title: "Old Shophouses Turned Into Cafes",
            content: "Alongside the minimalist third-wave bars, Taipei has a parallel strand of cafes set inside restored old buildings — particularly in **Dadaocheng**, where several Qing-and-Japanese-era shophouses along and near Dihua Street have been converted into slow, atmospheric cafes that lean into the architecture rather than hiding it. These spots tend to be slower-paced than the espresso-bar style common in Da'an, better suited to sitting with a book or a conversation for an hour than a quick takeaway order.\n\nTaiwan also grows its own coffee in small quantities, mainly in the mountains around Yunlin and Chiayi counties, and a handful of Taipei cafes specifically feature Taiwan-grown beans as a point of pride, worth seeking out if you want something distinct from the imported-bean norm.",
            tourCard: { slug: "dadaocheng-walking-tour-of-taipeis-past-present", title: "Dadaocheng: Walking Tour of Taipei's Past & Present", description: "A walk through the old quarter that naturally passes several of its restored shophouse cafes.", price: "From $45", duration: "2.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e1691519237b4ea9ec23e517b15ec654856d59ce80f87675df46559414d26b.jpg" },
          },
          {
            title: "What to Expect Price- and Etiquette-Wise",
            content: "A specialty pour-over or espresso drink typically runs **NT$120-200, roughly US$4-6.50**, noticeably more than a convenience-store coffee but in line with specialty pricing elsewhere in the region. Many independent cafes, especially smaller ones, limit laptop use or working sessions during busy hours, or charge a modest minimum spend for longer stays — a sign of the scene's seriousness about hospitality and table turnover rather than an unusual restriction, and worth checking a shop's posted policy before settling in for a multi-hour work session.",
          },
        ],
        faqs: [
          { q: "Is Taipei known for good coffee?", a: "Yes — it has one of the more developed specialty-coffee scenes in Asia, with independent roasters and baristas who've competed internationally, concentrated especially in the Da'an district." },
          { q: "How much does specialty coffee cost in Taipei?", a: "Roughly NT$120-200, about US$4-6.50, for a specialty pour-over or espresso drink at an independent cafe." },
          { q: "Does Taiwan grow its own coffee?", a: "Yes, in small quantities, mainly in the mountains around Yunlin and Chiayi counties. A handful of Taipei cafes specifically feature Taiwan-grown beans." },
          { q: "Where are Taipei's best cafe districts?", a: "Da'an district for a dense cluster of minimalist specialty-coffee bars, and Dadaocheng for slower, atmospheric cafes set inside restored old shophouses." },
        ],
      };

    case "taipei-lgbtq-friendly-guide":
      return {
        title: "LGBTQ+ Travel in Taipei 2026: Taiwan's Status as Asia's Most Progressive Country",
        description: "Taiwan legalized same-sex marriage in 2019, the first in Asia, and Taipei hosts the region's largest Pride parade. Here's what that means for visiting travelers.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ee1f514ef3b84e0c0c0781cfcb37438fdee4f2e95d15bbe98e93c4ba3e6274.jpeg",
        fastFacts: [
          { icon: "FileText", label: "Legal status", value: "Same-sex marriage legal since May 2019 — the first in Asia" },
          { icon: "Users", label: "Pride parade", value: "Taiwan Pride, held in Taipei each autumn — the largest in Asia" },
          { icon: "MapPin", label: "LGBTQ+ nightlife district", value: "Red House area, Ximending" },
          { icon: "Heart", label: "General attitude", value: "Widely considered Asia's most socially progressive country on LGBTQ+ issues" },
        ],
        sections: [
          {
            title: "Taiwan's Legal and Social Standing",
            content: "Taiwan became the **first place in Asia** to legalize same-sex marriage, in May 2019, following a 2017 constitutional court ruling and a subsequent legislative process. This legal milestone reflects a broader social position: Taiwan is widely regarded, including by LGBTQ+ advocacy organizations, as the most socially progressive country in Asia on LGBTQ+ issues, with anti-discrimination protections, visible public support, and a political mainstream that includes openly LGBTQ+ legislators. This doesn't mean every corner of Taiwanese society is uniformly accepting — older generations and more conservative families can hold more traditional views — but visitors, including same-sex couples, generally report Taipei as a comfortable, low-friction destination with little of the overt difficulty some other Asian capitals present.",
          },
          {
            title: "Taiwan Pride and the Red House Scene",
            content: "**Taiwan Pride**, held in Taipei each autumn, is the largest Pride event in Asia by attendance, drawing both domestic and international visitors and functioning as a genuine city-wide celebration rather than a small gathering. Outside Pride season, Taipei's LGBTQ+ nightlife centers on the area around the **Red House** in Ximending, a historic octagonal building now surrounded by bars, cafes and a small weekend market with a strong LGBTQ+-owned and LGBTQ+-friendly business presence. This gives visitors a reliable, concentrated area to find community-oriented venues rather than needing to search across the whole city.",
            tourCard: { slug: "ximending-private-photoshoot-with-taipei", title: "Ximending: Private Photoshoot with Taipei Photographer", description: "Covers the Ximending district, including the Red House area, as part of a guided photo session.", price: "From $150", duration: "1 hour", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ee1f514ef3b84e0c0c0781cfcb37438fdee4f2e95d15bbe98e93c4ba3e6274.jpeg" },
          },
          {
            title: "Practical Notes for LGBTQ+ Travelers",
            content: "Hotel bookings for same-sex couples are routine and uneventful in Taipei, and public displays of affection, while still more common among younger generations generally across Taiwanese society regardless of orientation, don't draw the kind of attention they might in more conservative parts of Asia. Outside the capital, attitudes can be somewhat more conservative in smaller towns and rural areas, though this is a difference of degree rather than a meaningfully unsafe situation — nothing on the order of destinations where LGBTQ+ travelers need to actively plan around legal risk.\n\nFor specific venue recommendations beyond the Red House area, LGBTQ+ travel community resources and apps tend to stay current with Taipei's nightlife turnover better than a static guide can.",
          },
        ],
        faqs: [
          { q: "Is Taiwan safe for LGBTQ+ travelers?", a: "Yes — Taiwan is widely regarded as Asia's most socially progressive country on LGBTQ+ issues, with same-sex marriage legal since 2019 and strong anti-discrimination protections. Taipei specifically is considered a comfortable, low-friction destination." },
          { q: "When is Taiwan Pride?", a: "Each autumn in Taipei. It's the largest Pride event in Asia by attendance." },
          { q: "Where is Taipei's LGBTQ+ nightlife concentrated?", a: "Around the Red House in Ximending, a historic building surrounded by bars, cafes and a small market with a strong LGBTQ+-friendly business presence." },
          { q: "Was Taiwan really the first in Asia to legalize same-sex marriage?", a: "Yes — in May 2019, following a 2017 constitutional court ruling, making it the first place in Asia to do so." },
        ],
      };

    case "taipei-rainy-day-activities":
      return {
        title: "Taipei Rainy Day Guide 2026: What to Do When Typhoon Season Hits",
        description: "Taipei's humid, typhoon-prone climate means rainy days are common — here's a real backup plan that doesn't waste the day.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        fastFacts: [
          { icon: "Building", label: "Top indoor pick", value: "Taipei 101 Observatory — fully enclosed, unaffected by rain" },
          { icon: "Landmark", label: "Also indoor", value: "National Palace Museum, Taipei Fine Arts Museum" },
          { icon: "Utensils", label: "Rain-proof food plan", value: "Covered night market sections, department store basement food halls" },
          { icon: "AlertTriangle", label: "When to actually stay in", value: "A direct typhoon warning, not ordinary rain" },
        ],
        sections: [
          {
            title: "Ordinary Rain vs. a Typhoon Warning — Know the Difference",
            content: "Most rainy days in Taipei are entirely manageable with an umbrella and a shift toward indoor plans; this is not the same as a **typhoon warning day**, when the city can issue work-and-school suspension orders that shut down above-ground MRT sections, outdoor attractions and most day-trip transport. On an ordinary rainy day, almost everything in the city core still operates normally — this guide is about making the most of that kind of day, not about riding out an actual storm, which simply calls for staying in and waiting it out.",
          },
          {
            title: "The Best Fully Indoor Options",
            content: "**Taipei 101's observatory** is entirely climate-controlled and arguably better on a rainy day for dramatic cloud-level views than a clear one in a different way — the city disappearing into mist from the 89th floor has its own appeal. The **National Palace Museum** offers hours of fully indoor content, and the **Taipei Fine Arts Museum** is a solid contemporary-art alternative if you've already done the Palace Museum on a previous trip. Shopping malls throughout Xinyi and Zhongshan districts, several connected to MRT stations by underground passages, let you move between stores without stepping outside at all.",
            tourCard: { slug: "taipei-city-highlights-tour-with-taipei-101", title: "Taipei: City Highlights Tour with Taipei 101 Observatory", description: "A largely indoor-heavy highlights loop that holds up well on a rainy day.", price: "From $89", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png" },
          },
          {
            title: "Eating and Getting Around in the Rain",
            content: "Shilin Night Market's underground section and several covered arcades keep night market eating viable even in steady rain, though the outdoor street stalls thin out noticeably. Department store basement food halls, common throughout the city, are a reliable rainy-day meal option with a wide variety of stalls under one roof. For getting around, the MRT's underground sections are entirely unaffected by rain, and most stations connect to nearby malls and buildings via covered walkways, so a rainy day in Taipei rarely means being stuck without a dry way to move between activities.",
          },
        ],
        faqs: [
          { q: "What should I do in Taipei on a rainy day?", a: "The Taipei 101 observatory, the National Palace Museum, and shopping malls connected by underground MRT passages are all fully indoor options that work regardless of weather." },
          { q: "Does rain shut down Taipei's attractions?", a: "Ordinary rain doesn't — most attractions and the MRT operate normally. Only an actual typhoon warning triggers closures and transport suspensions." },
          { q: "Can you still visit night markets in the rain?", a: "Yes, largely — Shilin's underground section and various covered arcades keep eating viable, though outdoor stalls thin out in steady rain." },
          { q: "How do I know if it's a typhoon day versus just rain?", a: "Official typhoon warnings and any work-and-school suspension announcements are the clear signal — check local news or your hotel if conditions look severe, rather than assuming based on rainfall alone." },
        ],
      };

    case "taipei-christmas-new-year-guide":
      return {
        title: "Taipei at Christmas and New Year 2026: What's Actually Open and Worth Seeing",
        description: "Taipei doesn't shut down for Christmas, but it does light up for it, and New Year's Eve brings one of Asia's biggest fireworks shows at Taipei 101.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        fastFacts: [
          { icon: "Calendar", label: "Christmas status", value: "Not a public holiday, but widely celebrated commercially" },
          { icon: "Star", label: "New Year's Eve highlight", value: "Taipei 101's fireworks show, one of Asia's largest" },
          { icon: "Thermometer", label: "Weather", value: "Cool, mild and often drizzly — 12-18°C" },
          { icon: "Building", label: "Season's displays", value: "Light-up installations at Xinyi malls and Taipei City Hall Plaza" },
        ],
        sections: [
          {
            title: "Christmas: Commercial, Not Religious or a Public Holiday",
            content: "Christmas is not a public holiday in Taiwan and carries no deep religious significance for most of the population, but Taipei still embraces the season commercially with real enthusiasm — malls in Xinyi and department stores across the city put up elaborate light displays and decorated trees, and Christmas markets with a European-style stall format have become a regular December fixture in recent years. This means a visitor arriving in December gets a genuinely festive-feeling city without the holiday-closure disruptions common in Christian-majority countries, where restaurants, shops and attractions all remain open and operating on normal schedules.",
          },
          {
            title: "New Year's Eve: Taipei 101's Fireworks Show",
            content: "**New Year's Eve** is where Taipei's calendar peaks for the season — **Taipei 101's fireworks display**, launched from the tower itself at midnight, is one of the largest and most-watched fireworks shows in Asia, drawing enormous crowds to viewing areas around Xinyi district. Public transit typically runs extended hours to handle the crowds, and getting a good viewing spot requires arriving hours early or securing a restaurant or bar reservation with a view in advance — both fill up well ahead of the date. If crowds aren't your preference, several rooftop bars and restaurants across the city offer a quieter alternative with the fireworks still visible from a distance.",
            tourCard: { slug: "taipei-city-highlights-tour-with-taipei-101", title: "Taipei: City Highlights Tour with Taipei 101 Observatory", description: "A good way to see Taipei 101 itself up close before the New Year's Eve crowds arrive for the fireworks.", price: "From $89", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png" },
          },
          {
            title: "Weather and What to Pack",
            content: "December and early January in Taipei sit within the city's cooler, milder season — daytime temperatures of roughly **12-18°C**, with a real chance of overcast or drizzly days given the basin's winter humidity. It's comfortable layering weather rather than genuinely cold, but pack a light rain jacket regardless, since clear skies aren't guaranteed for outdoor plans, including New Year's Eve viewing itself. Hotel rates around New Year's Eve in particular rise with demand, so book well ahead if your trip specifically targets this period.",
          },
        ],
        faqs: [
          { q: "Is Taipei festive at Christmas?", a: "Yes, commercially — elaborate mall light displays, decorated trees and European-style Christmas markets are now a regular December fixture, even though Christmas isn't a public holiday or a major traditional occasion in Taiwan." },
          { q: "What happens at Taipei 101 on New Year's Eve?", a: "A major fireworks display launched from the tower at midnight, one of the largest and most-watched in Asia, drawing large crowds to Xinyi district." },
          { q: "How cold is Taipei in December?", a: "Mild by most standards — roughly 12-18°C daytime, with a real chance of overcast or drizzly days given the city's winter humidity." },
          { q: "Do I need to book ahead for New Year's Eve in Taipei?", a: "Yes — good viewing spots, restaurant reservations with a view, and hotel rooms around this period all fill up well in advance given the popularity of the Taipei 101 fireworks show." },
        ],
      };

    case "best-tours-in-taipei":
      return {
        title: "Best Tours in Taipei — 2026, Honestly Compared",
        seoTitle: "Best Tours in Taipei 2026: Top-Rated Picks by Category",
        description: "The best Taipei tours for 2026, picked by category — Taipei 101, Longshan Temple and Dihua Street, a night market food crawl, Jiufen and Maokong's tea hills — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png",
        sections: [
          {
            title: "The Short Answer",
            content: "**Taipei 101's 89th-floor observatory** is the single most-visited landmark, mainly for the city view and the visible tuned mass damper — but Longshan Temple and a night market food crawl are what locals consider equally essential.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "taipei-city-highlights-tour-with-taipei-101", title: "Taipei: City Highlights Tour with Taipei 101 Observatory", description: "An indoor-heavy highlights loop that still works on a rainy or storm-adjacent day.", price: "From $89", duration: "9 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dc72d786636f64e3a6ab0305d5d38e68f59356f59f82436e69ef6baabbe1080.png" },
          },
          {
            title: "Best Cultural Walk: Longshan Temple & Dihua Street",
            content: "**Longshan Temple, the Dadaocheng old quarter and Taipei 101** in one guided loop covers Taipei's working temple culture alongside its modern skyline — a sharp, well-paced contrast.",
            tourCard: { slug: "taipei-longshan-temple-dihua-street-taipei-101", title: "Taipei: Longshan Temple, Dihua Street & Taipei 101 Tour", description: "Longshan Temple, the Dadaocheng old quarter and Taipei 101 in one guided loop.", price: "From $466", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c6e6382cd4e43257d35e28c523c9ac75b5c4bd79122f4ce9656a2ca3ef3fbd4.png" },
          },
          {
            title: "Best Food Tour: Night Market Crawl",
            content: "Night markets aren't a tourist add-on in Taipei, they're how the city actually eats dinner. A guided walk through **Raohe Street Night Market** gets past the language barrier at the stalls and steers you to what's actually good, rather than wasting stomach space on the wrong first few dishes.",
            tourCard: { slug: "taipei-2-hour-raohe-night-market-walking-tour", title: "Taipei: 2-Hour Raohe Night Market Walking Tour", description: "A guided walk through Raohe's stalls with a local pointing out what's actually good.", price: "From $78", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a93e9c213f8958b4ec19e656eddff00cf009f5799d4da38df6f883acb67576b.png" },
          },
          {
            title: "Best Day Trip: Jiufen & Shifen",
            content: "**Jiufen**, a former gold-mining town with a lantern-lit old street that inspired comparisons to Spirited Away, paired with **Shifen**'s sky lantern release, is the best half-day escape from the city — go on a weekday if your schedule allows, since weekend crowds slow the narrow alleys to a shuffle.",
            tourCard: { slug: "from-taipei-jiufen-and-shifen-day-trip-with-guide", title: "From Taipei: Jiufen and Shifen Day Trip with Guide Bus Tour", description: "A guided day covering Jiufen's old street and Shifen's lantern release and waterfall.", price: "From $62", duration: "7.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1e47d3f0f962cc7bd362da4d85a5ae1f321fceebb78a91f3c8ffaa921ddf757.jpg" },
          },
          {
            title: "Best for a Slower Pace: Maokong Tea Hills",
            content: "**Maokong**, reached by a scenic gondola from Taipei Zoo station, is a tea-growing hillside with open-air teahouses looking back over the city — a slower, greener contrast to the Xinyi skyline.",
            tourCard: { slug: "from-taipei-private-maokong-gondola-tea-culture", title: "From Taipei: Private Maokong Gondola & Tea Culture Day Tour", description: "The gondola ride up and a proper tea-tasting stop in the hills above the city.", price: "From $546", duration: "8 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4582daf2ac14268b503fdf943a54e9cf5b7f442c689b80a04ef2d861aca7a428.jpeg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Taipei tours](/taiwan/taipei)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Taipei?", a: "Taipei 101's observatory is the single most-visited landmark, but Longshan Temple and a night market food crawl are equally essential to locals." },
          { q: "What is the best day trip from Taipei?", a: "Jiufen's lantern-lit old street paired with Shifen's sky lantern release — go on a weekday to avoid the weekend crowds in the narrow alleys." },
          { q: "What is the best food experience in Taipei?", a: "A guided night market crawl, usually at Raohe Street Night Market — it gets past the language barrier at the stalls and steers you away from the wrong first dishes." },
          { q: "Is Maokong worth visiting?", a: "Yes, for a slower pace — a scenic gondola ride to tea-growing hills with open-air teahouses overlooking the city." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Taipei?", "acceptedAnswer": { "@type": "Answer", "text": "Taipei 101's observatory, Longshan Temple, and a night market food crawl." } },
                { "@type": "Question", "name": "What is the best day trip from Taipei?", "acceptedAnswer": { "@type": "Answer", "text": "Jiufen's lantern-lit old street paired with Shifen's sky lantern release." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Taipei 101 Observatory' },
          { icon: 'Map', label: 'Best Day Trip', value: 'Jiufen + Shifen' },
          { icon: 'Utensils', label: 'Best Food Tour', value: 'Raohe Night Market' }
        ]
      };

    default:
      return null;
  }
}
