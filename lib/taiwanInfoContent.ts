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

    default:
      return null;
  }
}
