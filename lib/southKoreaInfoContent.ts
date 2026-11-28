// South Korea (Seoul + Busan) authority pages (2026-10). Same CityInfoData
// shape as taiwanInfoContent.ts / hongkongInfoContent.ts. South Korea launched
// with 570 live tours (Seoul 430, Busan 140) and zero authority pages — this
// is the first batch, 30 pages weighted 20 Seoul / 10 Busan. Reached via
// getSouthKoreaInfoContent() -> getCityInfoContent(). Every tourCard slug is
// taken from the live tour list: GET /api/public/tours?country=South%20Korea&city=Seoul&status=approved
// (and city=Busan for the Busan pages).
import type { CityInfoData } from './cityInfoContent';

export function getSouthKoreaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    // ============================= SEOUL (20) =============================
    case "best-time-to-visit-seoul":
      return {
        title: "Best Time to Visit Seoul (2026): Weather, Festivals and Crowds Month by Month",
        description: "Seoul has four genuinely distinct seasons, and the gap between a spring cherry-blossom week and a January cold snap is bigger than most first-time visitors expect. Here's when to actually go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f22db89ef34172db93ebdf393a78522f5baaac78cdb20c9683f16a06317eadd0.jpg",
        fastFacts: [
          { icon: "Sun", label: "Best overall windows", value: "April-May and September-October — mild, dry, and the city's two festival seasons" },
          { icon: "Thermometer", label: "Summer (June-August)", value: "Hot, humid, with a distinct monsoon rain season (jangma) in July" },
          { icon: "Snowflake", label: "Winter (December-February)", value: "Cold, often below freezing, but dry and clear with low humidity" },
          { icon: "Flower2", label: "Cherry blossoms", value: "Late March to early April, peaking for roughly a week — dates shift year to year" },
        ],
        sections: [
          {
            title: "Spring and Autumn Are the Reasons Seoul Has Peak Season Twice a Year",
            content: "Seoul's spring, roughly late March through May, opens with the city's most photographed week: cherry blossoms along the Yeouido riverside and Seokchon Lake, usually peaking for a short window somewhere between late March and early April depending on how the winter ran. Temperatures climb steadily through the season into comfortable daytime highs in the high teens to low 20s°C, making it one of the two best stretches for walking Bukchon's hanok alleys, Gyeongbokgung's palace grounds, or Namsan's hiking trails without fighting heat or heavy rain.\n\nAutumn, September through November, mirrors spring's appeal from the other direction — the heat and humidity of summer break, and the foliage season (usually peaking in late October to early November around Seoul, later than Japan's but following a similar pattern) turns Namsan and the palace grounds a genuine orange-and-red spectacle. Both shoulder seasons draw the heaviest domestic and international tourist volume of the year, so popular palace time slots and well-reviewed guided tours are worth booking a few days ahead rather than assuming same-day availability.",
          },
          {
            title: "Summer's Real Issue Is the Jangma Monsoon, Not Just Heat",
            content: "June through August in Seoul brings genuinely hot, humid weather with daytime highs regularly in the low 30s°C, but the detail that catches first-time visitors off guard is the **jangma**, Korea's monsoon rain season, which typically runs through most of July and can dump heavy, sustained rainfall for days at a stretch. It isn't a single storm system the way a typhoon is — it's a persistent wet pattern that can derail an outdoor-heavy itinerary, particularly a DMZ day trip or a Han River picnic, if you don't build in flexible days.\n\nThe upside: indoor attractions, the city's dense museum and palace-adjacent cafe culture, and night markets under covered stalls are largely unaffected, and accommodation can be slightly cheaper outside the peak cherry-blossom and foliage windows.",
            tourCard: { slug: "seoul-han-river-sunset-picnic-with-food-and-night", title: "Seoul: Han River Sunset Picnic with Food and Night Walk", description: "A lower-key outdoor evening that still works outside the heaviest jangma weeks.", price: "From $91", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f22db89ef34172db93ebdf393a78522f5baaac78cdb20c9683f16a06317eadd0.jpg" },
          },
          {
            title: "Winter Is Cold But Clear, and Genuinely Worth Considering",
            content: "December through February runs cold by most visitors' standards, with daytime highs often sitting below freezing and occasional cold fronts pushing temperatures lower still, but the air is dry and the skies are frequently clear rather than grey, which actually suits a Gyeongbokgung or N Seoul Tower visit better than summer's haze. It's also the quietest and cheapest season for flights and hotels, and it's when Seoul's hot drink and heated-floor cafe culture, and winter illumination displays around Myeongdong and the palaces, come into their own.\n\nPack for genuine cold — a proper coat, not just layers — and know that outdoor hanbok photoshoots at Gyeongbokgung, while still popular, are a colder experience than the same rental in April or October.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Seoul?", a: "April or October are usually the strongest single months — cherry blossoms in early April, foliage in late October, both with comfortable, dry weather. Both are also the city's busiest tourist weeks, so book ahead." },
          { q: "Is Seoul very hot in summer?", a: "Yes — June through August runs hot and humid with highs in the low 30s°C, and July specifically carries jangma monsoon rain that can run heavy for days. Build flexible days into a summer outdoor itinerary." },
          { q: "Is winter a bad time to visit Seoul?", a: "Not necessarily — it's genuinely cold, often below freezing, but the air is dry and skies are clear more often than in summer, and flights and hotels are cheaper outside the holiday weeks." },
          { q: "When do cherry blossoms bloom in Seoul?", a: "Typically a short window between late March and early April, shifting year to year with how cold the preceding winter ran. Check a current bloom forecast rather than fixing dates months in advance." },
        ],
      };

    case "things-to-do-in-seoul":
      return {
        title: "25+ Best Things to Do in Seoul (2026): The Complete List",
        description: "From Gyeongbokgung's hanbok crowds to Hongdae's nightlife and the DMZ day trip — the real list of what's worth your time in Seoul, organized by how much time you have.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        fastFacts: [
          { icon: "Landmark", label: "Top landmark", value: "Gyeongbokgung Palace, especially in a rented hanbok" },
          { icon: "MapPin", label: "Best day trip", value: "The DMZ — the Third Tunnel, Dora Observatory and Imjingak" },
          { icon: "Utensils", label: "Don't skip", value: "A proper Korean BBQ dinner and a night market food crawl" },
          { icon: "Building", label: "Free skyline view", value: "N Seoul Tower's base at Namsan, climbable on foot for free" },
        ],
        sections: [
          {
            title: "The Palaces and Hanoks: Seoul's Historic Core",
            content: "**Gyeongbokgung Palace**, the largest of Seoul's Five Grand Palaces and the former main royal residence of the Joseon dynasty, is the obvious starting point, and the single detail every first-time visitor should know is that wearing a hanbok (traditional Korean dress, rented or your own, with a proper top and bottom rather than just an accessory) gets you in free, instead of paying the standard adult admission. Pair it with the changing-of-the-guard ceremony at the main gate if your timing lines up, and walk a few minutes further to **Bukchon Hanok Village**, a hillside neighborhood of restored traditional houses still partly lived in, for the quieter, more residential version of old Seoul.\n\n**Changdeokgung Palace**, a UNESCO World Heritage Site, and its attached **Secret Garden (Huwon)** are the more atmospheric, less-crowded alternative to Gyeongbokgung — the Secret Garden requires a separate timed, guided entry and is worth booking ahead specifically because of that cap.",
            tourCard: { slug: "seoul-gyeongbokgung-tour-with-hanbok-as-a-king-or", title: "Seoul: Gyeongbokgung Tour with Hanbok as a King or Queen", description: "A guided palace walk with the hanbok rental and free-entry angle handled for you.", price: "From $340", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg" },
          },
          {
            title: "Myeongdong, Hongdae and Insadong: Three Very Different Neighborhoods",
            content: "**Myeongdong** is Seoul's dense shopping and K-beauty district, packed with cosmetics stores, street-food stalls and department stores, best visited in the evening when the street-food carts come out in force. **Hongdae**, built around the gates of Hongik University, is the opposite register — indie music venues, street performances, affordable fashion and the city's most reliable nightlife strip, especially from Friday night onward. **Insadong**, by contrast, is the traditional-crafts and tea-house district, home to Jogyesa Temple (the center of Korean Seon Buddhism) and a slower pace of browsing galleries and calligraphy shops.\n\nNone of the three require a guide, but a guided evening in Hongdae specifically helps with navigating which venues are tourist-facing versus genuinely local, and Insadong's calligraphy and name-seal workshops are easy to book on the spot.",
            tourCard: { slug: "seoul-insadong-jogye-temple-cultural-guided", title: "Seoul: Insadong & Jogye Temple Cultural Guided Walking Tour", description: "The traditional-crafts district and its central Buddhist temple in one guided walk.", price: "From $68", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5b2ff5b4df99e336e8fd31561f43c38a89fea5af32db715b593eb8d05e51188.png" },
          },
          {
            title: "The DMZ, K-Pop and the Food You Came For",
            content: "The **DMZ (Demilitarized Zone)**, roughly an hour from central Seoul, is the single most-booked day trip, typically covering the Third Infiltration Tunnel, Dora Observatory (overlooking North Korean territory) and Imjingak Park. The JSA/Panmunjom blue-hut area has been closed to civilian tours since 2023 and should be treated as unavailable when booking, whatever an individual listing implies — a standard DMZ tour covers everything that's actually open.\n\nFor K-pop, dedicated dance-class-and-video-shoot studios around Hongdae and Gangnam let visitors record a short choreography video without any prior experience, and it's one of the more purely fun, photo-ready bookings in the city. Close out any visit with a proper **Korean BBQ** dinner — grilled meat cooked tableside, with banchan side dishes and soju — and, if your schedule allows one more evening, a night-market food crawl for fried chicken, tteokbokki and hotteok.",
            tourCard: { slug: "be-a-k-pop-star-in-seoul-studio-recording", title: "Be a K-Pop Star in Seoul: Studio Recording, Makeup & Video", description: "A full K-pop styling, choreography and video-shoot experience, no dance background needed.", price: "From $379", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg" },
          },
        ],
        faqs: [
          { q: "What is Seoul's number one attraction?", a: "Gyeongbokgung Palace is the single most-visited landmark, helped by the fact that wearing a hanbok gets you in free. The DMZ day trip and a Hongdae or Myeongdong evening are close behind for what most itineraries build around." },
          { q: "Is one day enough to see Seoul?", a: "You can cover Gyeongbokgung, Bukchon and a Myeongdong or Insadong walk in a single focused day, but Seoul rewards 3+ days once you add the DMZ, Hongdae nightlife and a proper food-tour evening." },
          { q: "Can tourists still visit the JSA at the DMZ?", a: "No — the JSA (the blue conference huts at Panmunjom) has been closed to civilian tours since 2023. A standard DMZ tour covering the Third Tunnel, Dora Observatory and Imjingak remains open and is what every current booking actually includes." },
          { q: "Is Seoul good for K-pop fans specifically?", a: "Yes — dedicated K-pop dance-class-and-video studios, some K-pop filming-location walking tours, and entertainment-company neighborhoods around Hongdae and Gangnam give fans several bookable, hands-on options beyond just sightseeing." },
        ],
      };

    case "seoul-travel-guide-2026":
      return {
        title: "Seoul Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Seoul — entry rules, the T-money card, getting around, language and what makes this city different from the rest of East Asia.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        fastFacts: [
          { icon: "Globe", label: "Entry", value: "K-ETA exemption extended through December 31, 2026 for 67 nationalities; e-Arrival Card still mandatory for everyone" },
          { icon: "DollarSign", label: "Currency", value: "South Korean Won (KRW)" },
          { icon: "Train", label: "Getting around", value: "Subway and buses — a T-money card covers all of it" },
          { icon: "MessageCircle", label: "Languages", value: "Korean is the official language; English signage is strong in the subway and tourist areas, weaker at small local shops" },
        ],
        sections: [
          {
            title: "Entry Rules: K-ETA, the e-Arrival Card and Visa-Free Stays",
            content: "South Korea's Ministry of Justice has extended a temporary exemption from the **K-ETA (Korea Electronic Travel Authorization)** requirement through **December 31, 2026** for citizens of 67 countries, including the United States, Canada, Australia, New Zealand and most of the EU, as well as for travelers aged 17 and under or 65 and over. Most of these same nationalities can stay visa-free for up to 90 days. This exemption only waives the K-ETA application, though — every visitor, exempt or not, must still complete the **mandatory e-Arrival Card** online within three days before landing, a free digital form covering passport, flight and contact details.\n\nDon't assume 'K-ETA exempt' means 'nothing to do before you fly' — the e-Arrival Card is the one step that still applies across the board, and skipping it can cause delays at Incheon or Gimpo immigration.",
          },
          {
            title: "Money and the T-Money Card",
            content: "The **South Korean Won (KRW)** is the local currency, and South Korea runs one of the more card-friendly economies in Asia — credit and debit cards are accepted almost everywhere, including most small restaurants and convenience stores, which makes it less cash-dependent than Japan or much of Southeast Asia. That said, the single most useful physical purchase for any visitor is a **T-money card**, a rechargeable contactless transit card that covers the subway, city buses, many taxis and convenience store purchases across Seoul (and, with the right card, Busan too) — functionally the same role Hong Kong's Octopus or Japan's Suica play.\n\nTipping is not customary in South Korea — restaurant and taxi tipping is unusual rather than expected, and attempting to tip can occasionally cause mild confusion rather than appreciation.",
          },
          {
            title: "Getting Around and a Few Everyday Habits Worth Knowing",
            content: "Seoul's subway network is extensive, frequent, bilingually signed in Korean and English, and genuinely one of the easier systems in Asia for a first-time visitor to navigate independently. Tap a T-money card at the gates rather than buying single-journey tickets for every ride — it's faster and slightly cheaper. **Incheon International Airport**, the main international gateway, connects to central Seoul by the AREX express train (roughly 45 minutes to Seoul Station) or by airport bus.\n\nA few etiquette notes that matter more than most guides mention: use both hands (or support your pouring hand with the other) when receiving or giving something to someone older, remove shoes when entering a traditional restaurant's floor seating area, and expect Korean BBQ and most communal meals to be eaten with both chopsticks and a spoon, rather than chopsticks alone.",
            tourCard: { slug: "seoul-korean-dinner-food-tour-with-a-seoul-born", title: "Seoul: Korean Dinner Food Tour with a Seoul-Born Local", description: "A guided first dinner that also covers the everyday etiquette most guidebooks skip.", price: "From $87", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5d60c40773d64923501b0bf8693b4ea167edbab859a3b55d94f3f7c2122fc40d.jpg" },
          },
        ],
        faqs: [
          { q: "Do I need a K-ETA for South Korea in 2026?", a: "Most Western nationalities don't currently — the K-ETA exemption has been extended through December 31, 2026 for 67 countries. Everyone, exempt or not, must still complete the separate, mandatory e-Arrival Card online before landing." },
          { q: "What currency does South Korea use?", a: "The South Korean Won (KRW). Cards are widely accepted, including at most small restaurants, making it less cash-dependent than many of its regional neighbors." },
          { q: "What is a T-money card?", a: "A rechargeable contactless transit card covering the subway, buses, many taxis and convenience stores. Buy one at any subway station or convenience store on arrival rather than relying on single-journey paper tickets." },
          { q: "Is English widely spoken in Seoul?", a: "Subway and major tourist-site signage is reliably bilingual, but English drops off quickly at small local restaurants and shops — a translation app or a guided tour smooths over the gap on a first visit." },
        ],
      };

    case "seoul-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Seoul Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Seoul itinerary built around Gyeongbokgung, Bukchon and a Hongdae or Myeongdong evening — honest about what fits and what doesn't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        sections: [
          {
            title: "Morning: Gyeongbokgung Palace and Bukchon Hanok Village",
            content: "Start early at **Gyeongbokgung Palace** — rent a hanbok nearby beforehand if you want the classic photos and the free palace entry that comes with wearing one, and aim to arrive in time for the changing-of-the-guard ceremony if the schedule lines up. From there, walk uphill into **Bukchon Hanok Village** for an hour of wandering restored traditional houses, several of which now hold cafes and small craft workshops.",
            tourCard: { slug: "seoul-bukchon-village-gyeongbokgung-gwangjang", title: "Seoul: Bukchon Village, Gyeongbokgung, Gwangjang Market", description: "A guided morning loop covering the palace, the hanok village and a market stop.", price: "From $56", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c06b62fe9a354db85eec52efc79810b4d224c99289b0ede41528bb15f22a75f1.jpg" },
          },
          {
            title: "Midday: Insadong or Gwangjang Market for Lunch",
            content: "Head to **Gwangjang Market**, one of Seoul's oldest traditional markets, for a lunch of bindaetteok (mung bean pancakes), mayak gimbap and other street-food staples at the stalls inside the covered market hall. If markets aren't your pace, **Insadong** nearby offers the calmer alternative — tea houses, calligraphy shops and Jogyesa Temple for a slower midday.",
          },
          {
            title: "Evening: Myeongdong or Hongdae",
            content: "Close the day with either **Myeongdong**, for K-beauty shopping and an evening street-food crawl, or **Hongdae**, if live music and nightlife matter more to you than shopping. Either way, go hungry before you arrive — both districts are built around grazing from multiple stalls rather than one sit-down meal.\n\n**The honest tradeoff of a one-day itinerary:** the DMZ, Namsan Tower and a proper Korean BBQ dinner sitting down won't fit comfortably alongside a full palace-and-market day. If the DMZ matters more than an evening shopping crawl, swap it in and move Myeongdong to a later day — Seoul genuinely rewards a 3-day trip; see our 3-day itinerary for the fuller version.",
            tourCard: { slug: "seoul-night-market-food-tour-with-k-fried-chicken", title: "Seoul: Night Market Food Tour with K-Fried Chicken & Beer", description: "A guided evening food crawl that picks the stalls worth your appetite.", price: "From $182", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0635b5ea661c196168d3b42d6892f0fb8826982f661d4fe4cb7ff621b650568.jpg" },
          },
        ],
        faqs: [
          { q: "Can you see Seoul in one day?", a: "You can realistically cover Gyeongbokgung, Bukchon, a market lunch and an evening in Myeongdong or Hongdae in one focused day. The DMZ and Namsan Tower won't fit — those need additional days." },
          { q: "What's the best order for a Seoul day trip?", a: "Gyeongbokgung and Bukchon in the morning before the heat and crowds build, a market lunch around midday, then Myeongdong or Hongdae for the evening." },
          { q: "Should I book the hanbok rental in advance?", a: "Not usually necessary — rental shops cluster right outside Gyeongbokgung's gates with same-day availability, though weekends and cherry-blossom or foliage season can mean a short wait for popular styles." },
        ],
      };

    case "seoul-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Seoul Itinerary (2026): A Full, Realistic Plan",
        description: "Three days gives Seoul enough room for the palace core, a full DMZ day and a proper nightlife evening in Hongdae — here's how to structure it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg",
        sections: [
          {
            title: "Day 1: The Palace Core — Gyeongbokgung, Bukchon and Myeongdong",
            content: "Follow the one-day plan as your first day: Gyeongbokgung and Bukchon in the morning, a market lunch around midday, Myeongdong for the evening. This front-loads the headline historic sights and leaves days two and three free to go further without rushing.",
          },
          {
            title: "Day 2: The DMZ, Then Namsan Tower at Sunset",
            content: "Dedicate the morning and early afternoon to a guided **DMZ** day trip — typically the Third Infiltration Tunnel, Dora Observatory and Imjingak Park, roughly an hour each way from central Seoul. Back in the city by late afternoon, head to **Namsan** and either climb or cable-car up to **N Seoul Tower** for sunset and the skyline lighting up afterward, then walk down through Myeongdong for dinner.",
            tourCard: { slug: "seoul-dmz-small-group-tour-with-lunch-north-korea", title: "Seoul: DMZ Small-Group Tour with Lunch & North Korea View", description: "A half-day DMZ tour timed to leave your afternoon free for Namsan.", price: "From $129", duration: "5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43e4f501bad3975debe95bac8919a4e4e2045b5609d8340fdc276487c1c8c01a.png" },
          },
          {
            title: "Day 3: Hongdae, Korean BBQ and a Proper Night Out",
            content: "Spend your final day lighter — a slower morning, then **Hongdae** in the afternoon for its indie shops and street performances, building toward a sit-down **Korean BBQ** dinner and an evening exploring the neighborhood's live-music venues and bars. If you have any energy left, a late Han River picnic or night cruise is a quieter way to close the trip instead.",
            tourCard: { slug: "seoul-hongdae-indie-live-music-night-korean-bbq", title: "Seoul: Hongdae Indie Live Music Night & Korean BBQ Dinner", description: "A guided evening pairing a proper BBQ dinner with Hongdae's indie music scene.", price: "From $57", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3c7bd3c113aadb41d2f84904d24696c89bc6d1f1d5babf6e2472c8ba9a17082.jpg" },
          },
        ],
        faqs: [
          { q: "Is 3 days enough for Seoul?", a: "Yes, for a well-rounded first visit — the palace core, a full DMZ day with Namsan Tower at sunset, and a Hongdae evening with Korean BBQ covers Seoul's genuinely different sides without rushing." },
          { q: "Should I add Busan to a 3-day Seoul trip?", a: "Only as a 4th day or a separate trip — Busan is roughly 2 hours 15 minutes away by KTX and deserves at least a full day of its own, not a rushed add-on to a 3-day Seoul core." },
          { q: "Is the DMZ day trip worth the time it takes?", a: "Yes for most visitors — it's a genuinely unusual, nowhere-else experience, though the JSA/Panmunjom blue-hut area has been closed to civilian visits since 2023, so set expectations around the Third Tunnel and observatory, not the JSA." },
        ],
      };

    case "south-korea-visa-guide-for-tourists":
      return {
        title: "South Korea Visa Guide 2026: K-ETA, the e-Arrival Card and Who Needs What",
        description: "K-ETA's exemption has been extended through 2026 for dozens of nationalities, but the mandatory e-Arrival Card still applies to everyone. Here's exactly what each traveler actually needs.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        fastFacts: [
          { icon: "Clock", label: "K-ETA exemption", value: "67 countries exempt through December 31, 2026, including US / Canada / Australia / NZ / most EU" },
          { icon: "Clock", label: "Age exemptions", value: "Travelers 17 and under or 65 and over are exempt from K-ETA regardless of nationality" },
          { icon: "FileText", label: "Mandatory for everyone", value: "e-Arrival Card, completed online within 3 days before landing" },
          { icon: "Calendar", label: "Visa-free stay", value: "Up to 90 days for most exempted nationalities" },
        ],
        sections: [
          {
            title: "K-ETA: What It Is and Who's Currently Exempt",
            content: "**K-ETA (Korea Electronic Travel Authorization)** was introduced as a pre-screening system similar to the US ESTA, but South Korea's Ministry of Justice has repeatedly extended a temporary exemption from the requirement, most recently through **December 31, 2026**, for citizens of **67 countries** — including the United States, Canada, Australia, New Zealand, Singapore and most of the European Union. Travelers **17 and under or 65 and over** are exempt from K-ETA regardless of nationality. If your passport isn't on the current exempt list, you'll still need to apply for K-ETA online before traveling, a process separate from a full visa.\n\nBecause this exemption has been extended multiple times on a rolling basis rather than made permanent, check the current status close to your travel dates rather than assuming last year's rule still applies a year later.",
          },
          {
            title: "The e-Arrival Card Is Mandatory Regardless of K-ETA Status",
            content: "This is the detail that trips people up: South Korea introduced a **mandatory digital e-Arrival Card** alongside the K-ETA exemption extension, and it applies to **every visitor**, K-ETA-exempt or not. It's a free online form covering passport, flight and contact details, completed within **three days before landing**. Skipping it, or assuming a K-ETA exemption covers it, can cause delays at the immigration counter at Incheon or Gimpo.\n\nComplete it through South Korea's official immigration portal rather than a third-party site charging a fee for something that's free to do directly, and keep a screenshot or printout as backup in case of a connectivity issue on arrival.",
          },
          {
            title: "Visa-Free Stay Length and What's Different for Longer Stays",
            content: "Most nationalities covered by the K-ETA exemption, including the US, Canada, UK, most of the EU, Australia and New Zealand, can stay visa-free for up to **90 days**, which covers the vast majority of tourist trips without any further paperwork. If you're planning a longer stay, a working trip, or you're traveling on a nationality not covered by the current exemption or visa-free list, you'll need to apply for the appropriate visa through a Korean embassy or consulate in advance — this can't be arranged on arrival.\n\nPassports should be valid well beyond the planned stay, and immigration officers can ask for proof of onward travel, so keep a return or connecting flight itinerary accessible.",
          },
        ],
        faqs: [
          { q: "Do Americans need a K-ETA for South Korea?", a: "Not currently — US citizens are among the 67 nationalities with a K-ETA exemption extended through December 31, 2026. They must still complete the separate, mandatory e-Arrival Card before landing." },
          { q: "What is the e-Arrival Card and is it the same as K-ETA?", a: "No — they're separate. The e-Arrival Card is a free, mandatory online form for every visitor, completed within three days before arrival, regardless of whether you're K-ETA exempt." },
          { q: "How long can tourists stay in South Korea visa-free?", a: "Up to 90 days for most K-ETA-exempt nationalities, including the US, Canada, UK, most of the EU, Australia and New Zealand." },
          { q: "Are children and seniors exempt from K-ETA?", a: "Yes — travelers 17 and under or 65 and over are exempt from K-ETA regardless of nationality, though the e-Arrival Card still applies to them." },
        ],
      };

    case "dmz-tour-guide":
      return {
        title: "DMZ Tour Guide 2026: What You Can Actually See from Seoul",
        description: "The DMZ is Seoul's most-booked day trip, but the JSA's blue conference huts have been closed to civilians since 2023. Here's exactly what a current tour includes.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43e4f501bad3975debe95bac8919a4e4e2045b5609d8340fdc276487c1c8c01a.png",
        fastFacts: [
          { icon: "MapPin", label: "Distance from Seoul", value: "About an hour each way to the Paju/Imjingak area" },
          { icon: "AlertTriangle", label: "JSA status", value: "Closed to civilian tours since 2023 — treat it as unavailable when booking" },
          { icon: "Eye", label: "What's open", value: "Third Infiltration Tunnel, Dora Observatory, Dorasan Station, Imjingak Park" },
          { icon: "FileText", label: "ID required", value: "A physical passport or alien registration card; no photocopies or digital scans accepted" },
        ],
        sections: [
          {
            title: "What a Standard DMZ Tour Actually Includes in 2026",
            content: "A standard DMZ tour from Seoul covers **Imjingak Park**, a Korean War memorial site with the Freedom Bridge and abandoned train carriages; the **Third Infiltration Tunnel**, one of several tunnels North Korea dug toward Seoul (this one discovered in 1978), which visitors walk through part of on foot; **Dora Observatory**, where binoculars let you look across the border into North Korean territory, including the so-called Propaganda Village (Kijong-dong) and its 160-metre flagpole; and **Dorasan Station**, a fully built but unused 'ghost station' constructed in anticipation of a future unification rail line.\n\nStandard tours run roughly ₩55,000-95,000 and take a half to a full day depending on how many stops are included and whether lunch is bundled in.",
            tourCard: { slug: "seoul-dmz-small-group-tour-with-lunch-north-korea", title: "Seoul: DMZ Small-Group Tour with Lunch & North Korea View", description: "The standard stops — tunnel, observatory, Imjingak — in a small-group half-day format.", price: "From $129", duration: "5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43e4f501bad3975debe95bac8919a4e4e2045b5609d8340fdc276487c1c8c01a.png" },
          },
          {
            title: "The JSA Is Closed — Don't Book Expecting to See It",
            content: "The **JSA (Joint Security Area), also called Panmunjom** — the blue conference huts where soldiers from both sides once stood meters apart and visitors could technically step across the border line — has been **closed to civilian tours since 2023**, after an American soldier crossed into North Korean territory during a visit. Treat it as unavailable for 2026 bookings. If a tour listing advertises JSA access, read the fine print carefully: any such departure depends on shifting political and military conditions, cancellations can come the same morning without warning, and no operator can actually guarantee entry regardless of what the listing implies.\n\nBook a standard DMZ tour instead and go in expecting the tunnel-and-observatory experience described above, which remains genuinely worthwhile on its own.",
          },
          {
            title: "Rules, Photography and What to Bring",
            content: "Every visitor, Korean or foreign, needs a **physical passport or alien registration card** — photocopies, screenshots and expired or past-permitted-stay documents are refused at the checkpoint. **Photography is restricted at specific points along the route**, particularly near military installations and at some observatory positions, and tour guides will tell you exactly where cameras need to go away; ignoring this isn't a minor rule-bending moment, it's taken seriously. Drones, action cameras and body cameras are banned outright, and the restriction on footage extends to what you post afterward from restricted zones.\n\nDress is casual, but tours involve walking across uneven ground and some underground tunnel sections with low clearance, so comfortable closed-toe shoes matter more than they do for most Seoul day trips.",
          },
        ],
        faqs: [
          { q: "Can I still visit the JSA at the DMZ in 2026?", a: "No — the JSA has been closed to civilian tours since 2023. Book a standard DMZ tour covering the Third Tunnel, Dora Observatory and Imjingak instead, and be skeptical of any listing promising guaranteed JSA access." },
          { q: "What do I need to bring for a DMZ tour?", a: "A physical passport or alien registration card is mandatory — no photocopies, screenshots or expired documents. Comfortable closed-toe shoes matter for the tunnel sections." },
          { q: "Can I take photos on a DMZ tour?", a: "Only in permitted areas — photography is restricted at specific points near military installations and some observatory positions, and your guide will tell you exactly where to put the camera away." },
          { q: "How far is the DMZ from Seoul?", a: "The Paju/Imjingak area is roughly an hour from central Seoul by tour bus, making it a realistic half-day or full-day trip rather than requiring an overnight stay." },
        ],
      };

    case "gyeongbokgung-palace-hanbok-guide":
      return {
        title: "Gyeongbokgung Palace & Hanbok Guide 2026: Free Entry Rules, Rental Prices and Timing",
        description: "Wearing a hanbok gets you into Gyeongbokgung Palace for free, but the rule is specific about what counts. Here's exactly how the free-entry policy, rental costs and timing actually work.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        fastFacts: [
          { icon: "Ticket", label: "Standard adult admission", value: "Around ₩3,000" },
          { icon: "CheckCircle2", label: "Hanbok entry", value: "Free, if wearing a proper jeogori top and matching bottom (skirt or pants)" },
          { icon: "DollarSign", label: "Rental cost", value: "Roughly ₩15,000-25,000 for a basic hanbok rental near the palace gates" },
          { icon: "Clock", label: "Changing of the guard", value: "Held at the main Gwanghwamun Gate on a published schedule — check timing before you plan around it" },
        ],
        sections: [
          {
            title: "The Free-Entry Rule: What Actually Counts as a Hanbok",
            content: "**Anyone wearing a hanbok — your own or rented — gets into Gyeongbokgung Palace for free**, instead of paying the standard adult admission of around ₩3,000. The rule is specific, though: it requires a **proper jeogori (the fitted upper garment) paired with a matching lower garment**, a skirt or pants, worn as an actual outfit. Borrowing just a hairpiece, a decorative accessory, or a loosely draped scarf-like item does not qualify for free entry, and staff at the gate do check.\n\nThis makes a rental shop visit before the palace a genuinely practical first stop, not just a photo-op add-on — you save the admission fee and get the full visual experience at the same time.",
          },
          {
            title: "Renting a Hanbok Nearby, and What It Costs",
            content: "A dense cluster of hanbok rental shops sits within a short walk of Gyeongbokgung's gates, offering everything from a basic modern-cut hanbok for roughly **₩15,000-25,000** for a few hours up to premium or hand-embroidered styles at a higher price. Most shops include basic hair accessories in the rental price, and some offer simple hairstyling as a paid add-on. Same-day walk-in availability is normal outside peak cherry-blossom and foliage weeks; during those windows, arriving earlier in the day or booking ahead avoids a wait for popular sizes and styles.\n\nA guided photoshoot package, run either independently or alongside a palace tour, is worth it if you want more than phone-camera photos without having to direct the shoot yourself.",
            tourCard: { slug: "seoul-gyeongbokgung-palace-hanbok-photoshoot", title: "Seoul: Gyeongbokgung Palace Hanbok Photoshoot", description: "A guided hanbok photoshoot inside the palace grounds, rental and styling handled for you.", price: "From $246", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f22db89ef34172db93ebdf393a78522f5baaac78cdb20c9683f16a06317eadd0.jpg" },
          },
          {
            title: "Timing Your Visit: The Guard Ceremony and the Crowds",
            content: "Gyeongbokgung's **changing-of-the-guard ceremony** at the main Gwanghwamun Gate runs on a published daily schedule (with closures on the palace's regular closed day, typically Tuesday) and is worth timing a visit around if you want to see it — check the current schedule close to your visit date since timing can shift. The palace is busiest midday and on weekends; an early-morning visit, shortly after opening, gives both better light for hanbok photos and noticeably thinner crowds in the main courtyards.\n\nCombine the visit with nearby **Bukchon Hanok Village**, a short uphill walk away, to get a full morning out of the palace area without needing to travel further.",
          },
        ],
        faqs: [
          { q: "Does wearing a hanbok really get you into Gyeongbokgung for free?", a: "Yes — anyone wearing a proper hanbok (a jeogori top with a matching skirt or pants, rented or your own) gets free entry instead of the standard roughly ₩3,000 adult admission." },
          { q: "What doesn't count as a hanbok for free entry?", a: "A hair accessory, decorative piece or loosely worn item alone doesn't qualify — staff check for an actual jeogori-and-bottom outfit worn as a full set." },
          { q: "How much does a hanbok rental cost near Gyeongbokgung?", a: "Roughly ₩15,000-25,000 for a basic rental for a few hours, with premium or hand-embroidered styles costing more. Most shops are a short walk from the palace gates." },
          { q: "What's the best time to visit Gyeongbokgung for photos?", a: "Shortly after opening in the morning, for softer light and thinner crowds in the main courtyards, before midday and weekend visitor numbers build." },
        ],
      };

    case "seoul-subway-tmoney-guide":
      return {
        title: "Seoul Subway and T-Money Card Guide 2026: How to Get Around Without the Confusion",
        description: "What a T-money card actually costs, where to buy one, and how Seoul's subway network covers almost everywhere a first-time visitor needs to go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c54f54e286e0185e264407afc8225d948b51f76501d7917165db31ec86fe1e08.jpg",
        fastFacts: [
          { icon: "CreditCard", label: "T-money card cost", value: "Roughly ₩2,500-4,000 for the card itself, no deposit required" },
          { icon: "Train", label: "Airport to city", value: "AREX express train, roughly 45 minutes from Incheon to Seoul Station" },
          { icon: "MapPin", label: "Where to buy", value: "Any subway station kiosk or convenience store (CU, GS25, 7-Eleven)" },
          { icon: "DollarSign", label: "Transfer discount", value: "Free transfers between subway lines and most buses within a set time window when tapping with T-money" },
        ],
        sections: [
          {
            title: "What the T-Money Card Actually Is and Why You Want One",
            content: "The **T-money card** is a rechargeable contactless smart card that covers the Seoul subway, city buses, many taxis, and convenience store purchases — functionally the same role Hong Kong's Octopus or Japan's Suica play, and it also works on Busan's transit system, which matters if a KTX side trip is part of your plans. Tapping in and out at subway gates is faster than buying single-journey tickets, and T-money unlocks **free transfers between the subway and most buses** within a set time window, which paper tickets don't offer — meaning multi-leg trips can end up genuinely cheaper, not just more convenient.\n\nIt isn't strictly mandatory — single-journey paper tickets exist at every station — but given how often a multi-day visitor taps through a turnstile or boards a bus, almost every guide and local recommends getting one on arrival.",
          },
          {
            title: "Where to Buy and Top Up",
            content: "T-money cards are sold at **subway station customer-service kiosks and ticket machines**, and at **convenience stores** (CU, GS25, 7-Eleven) found on nearly every block across the city, typically for around ₩2,500-4,000 for the physical card with no refundable deposit. Topping up works the same way — subway station machines or any convenience store counter — and an increasing number of visitors simply load the card onto a linked mobile wallet instead of carrying the plastic card.\n\nKeep a rough mental tally of your balance on a multi-day trip, particularly before a longer bus ride, since running out mid-journey means a scramble to top up at the next stop.",
            tourCard: { slug: "seoul-itaewon-to-namsan-walking-tour", title: "Seoul: Itaewon to Namsan Walking Tour", description: "A guided walk that uses the subway network as part of the route, good for learning the system with a guide alongside.", price: "From $146", duration: "3.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c54f54e286e0185e264407afc8225d948b51f76501d7917165db31ec86fe1e08.jpg" },
          },
          {
            title: "The Subway System Itself: What It Covers",
            content: "Seoul's subway network is extensive, frequent and signed bilingually in Korean and English, with numbered lines and color-coded maps that make a first-time visitor's navigation genuinely manageable without local help. It covers the city core comprehensively, including a direct connection from **Incheon International Airport** via the AREX express train (roughly 45 minutes to Seoul Station) and reaches most of the neighborhoods covered in a typical itinerary — Myeongdong, Hongdae, Insadong, Gangnam and the palace district are all a short walk from a station.\n\nWhat it doesn't cover directly: the DMZ day trip, which requires a tour bus or private transport rather than public transit, since the area sits outside the subway's reach entirely.",
          },
        ],
        faqs: [
          { q: "How much does a T-money card cost in Seoul?", a: "Roughly ₩2,500-4,000 for the physical card, with no refundable deposit — simpler than some transit card systems elsewhere that require a deposit return process." },
          { q: "Where can I buy a T-money card?", a: "Any subway station kiosk or ticket machine, plus convenience stores like CU, GS25 and 7-Eleven found across the city." },
          { q: "Does T-money work in Busan too?", a: "Yes — T-money is a nationwide system and works on Busan's subway and buses as well, useful if a KTX day trip or longer Busan stay is part of your itinerary." },
          { q: "Does the subway go to the DMZ?", a: "No — the DMZ sits outside the subway network's reach and requires a tour bus or private transport rather than public transit." },
        ],
      };

    case "myeongdong-shopping-guide":
      return {
        title: "Myeongdong Shopping Guide 2026: K-Beauty, Street Food and What to Actually Buy",
        description: "Myeongdong is Seoul's densest shopping district — here's what's genuinely worth buying, when to go, and how the street-food side of the neighborhood works.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72181adabda65850009a3e75b893559387c981526472d20e04447c912aed2c11.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Central Seoul, near Myeongdong Station on Line 4" },
          { icon: "Clock", label: "Best time", value: "Evening, when the street-food carts come out in force" },
          { icon: "ShoppingBag", label: "Known for", value: "K-beauty and cosmetics stores, department stores, street food" },
          { icon: "CreditCard", label: "Tax refund", value: "Many K-beauty stores offer on-the-spot tax refunds for tourists above a minimum spend" },
        ],
        sections: [
          {
            title: "Why Myeongdong Is Seoul's K-Beauty Capital",
            content: "**Myeongdong** is packed with K-beauty and cosmetics chains — Innisfree, Etude House, Olive Young and dozens of smaller independent stores — stacked close enough together that comparison shopping across brands takes minutes rather than a cross-city trip. Many stores offer free sample sachets with purchase, and staff are generally used to tourist traffic and often speak at least functional English or Chinese alongside Korean. Several larger cosmetics stores also offer **on-the-spot tax refunds for tourists** spending above a minimum threshold, which is worth asking about at checkout rather than assuming it only happens at the airport.\n\nBeyond cosmetics, Myeongdong holds major department stores (Lotte, Shinsegae) and a dense strip of fashion retail, making it a reasonable one-stop district if your shopping list spans several categories.",
          },
          {
            title: "The Street Food Is the Other Half of Myeongdong",
            content: "From late afternoon into the evening, **street-food carts** fill the main pedestrian strip, selling everything from giant lobster-and-cheese skewers and tornado potatoes on a stick to tteokbokki, hotteok (sweet filled pancakes) and grilled cheese corn dogs. The food here is more photogenic-tourist-fare than Seoul's most authentic eating, but it's genuinely fun and reasonably priced, and it's the easiest sampler of Korean street food for a visitor who doesn't want to seek out a dedicated night market.\n\nGo hungry and plan to share several small items across stalls rather than filling up on the first thing that looks good — the strip is long and there's more worth trying further down.",
            tourCard: { slug: "seoul-n-seoul-tower-myeongdong-night-tour", title: "Seoul: N Seoul Tower & Myeongdong Night Tour", description: "Myeongdong's evening street food paired with the N Seoul Tower skyline in one guided night.", price: "From $135", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72181adabda65850009a3e75b893559387c981526472d20e04447c912aed2c11.jpg" },
          },
          {
            title: "Getting There and a Few Practical Notes",
            content: "**Myeongdong Station** on Line 4 sits directly beneath the district, making it one of the easiest Seoul neighborhoods to reach with no walking beyond the station exit. The area is also known for its spa and massage culture, with several Korean-style jjimjilbang-adjacent spa and massage outlets catering specifically to tourists who want a relaxing stop between shopping sessions.\n\nWeekday evenings are noticeably calmer than weekends; if a quieter browsing experience matters more to you than peak street-food-cart volume, aim for a Tuesday or Wednesday evening instead of Friday or Saturday.",
            tourCard: { slug: "seoul-korean-spa-massage-in-myeongdong", title: "Seoul: Korean Spa & Massage in Myeongdong", description: "A relaxing break built into a Myeongdong shopping day, right in the district itself.", price: "From $117", duration: "1.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b7dcdf8bc3a2100460342e36b68bf21d368c295307f3461b4c74ecc4fdc3e1c5.png" },
          },
        ],
        faqs: [
          { q: "What should I buy in Myeongdong?", a: "K-beauty and cosmetics are the district's real strength — sheet masks, skincare and makeup from brands like Innisfree and Etude House, often with free samples and in-store tax refunds for tourists." },
          { q: "When is the best time to visit Myeongdong?", a: "Evening, when the street-food carts are in full swing along the main pedestrian strip. Weekday evenings are calmer than weekends if you prefer less crowding." },
          { q: "How do I get to Myeongdong?", a: "Myeongdong Station on subway Line 4 sits directly under the district, with no significant walk from the station exit." },
          { q: "Can I get a tax refund on K-beauty purchases?", a: "Many larger cosmetics stores offer on-the-spot tax refunds for tourists spending above a minimum amount — ask at checkout rather than assuming it's airport-only." },
        ],
      };

    case "seoul-korean-bbq-guide":
      return {
        title: "Seoul Korean BBQ Guide 2026: How It Works, What to Order and the Etiquette",
        description: "Korean BBQ is Seoul's defining meal, but the grilling, side-dish and drinking etiquette trips up first-timers. Here's how a proper meal actually works.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4e4466afb1e3eabc616f4cf2f179a87767e7f40e3ea51a22fdc44d677fe15aa.png",
        fastFacts: [
          { icon: "Utensils", label: "What to order", value: "Samgyeopsal (pork belly) or galbi (short rib) are the classic first-timer choices" },
          { icon: "Users", label: "How it's served", value: "Meat grilled tableside, usually by staff or self-grilled, with a spread of banchan (side dishes) included" },
          { icon: "Drumstick", label: "Minimum order", value: "Many restaurants require a minimum of 2 servings per table, not per person" },
          { icon: "Wine", label: "The classic pairing", value: "Soju, often mixed half-and-half with beer as 'somaek'" },
        ],
        sections: [
          {
            title: "What to Order, and the Difference Between Samgyeopsal and Galbi",
            content: "**Samgyeopsal** (pork belly, usually unmarinated and sliced thick) and **galbi** (marinated short rib, usually beef) are the two most-ordered cuts and the right place to start if you've never had Korean BBQ before. Beyond those two, menus commonly include **bulgogi** (thin-sliced marinated beef, often cooked differently from the thicker cuts), **samgyeop-moksal** variations and, at higher-end places, hanwoo (Korean beef) at a significant price premium over standard beef.\n\nMost restaurants automatically bring a spread of **banchan** — kimchi, bean sprouts, pickled radish, a simple salad — as a free accompaniment, refilled on request, alongside the main grilled order. A bowl of doenjang jjigae (fermented soybean stew) or naengmyeon (cold noodles) often rounds out the meal at the end, ordered separately.",
          },
          {
            title: "How the Grilling and Wrapping Actually Works",
            content: "At most Korean BBQ restaurants, meat is grilled on a tabletop grill — sometimes by waitstaff who manage the timing and cutting for you, sometimes self-service, depending on the restaurant's style and how busy it is. The classic way to eat it is to wrap a piece of grilled meat in a lettuce leaf (ssam), add a smear of ssamjang (a thick, savory-spicy dipping paste), a sliver of garlic or green chili, and maybe a bit of rice, then eat it in one bite rather than cutting it up on a plate.\n\nMany restaurants set a **minimum order of two servings per table**, not per person, which trips up solo travelers specifically — check this before sitting down if you're dining alone, or look for restaurants explicitly marketed as solo-friendly.",
            tourCard: { slug: "private-korean-bbq-in-seoul-with-jason-grilled", title: "Private Korean BBQ in Seoul with Jason — Grilled & Explained", description: "A guided BBQ dinner where the grilling, wrapping and ordering etiquette is explained as you go.", price: "From $165", duration: "2 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4e4466afb1e3eabc616f4cf2f179a87767e7f40e3ea51a22fdc44d677fe15aa.png" },
          },
          {
            title: "Soju, Somaek and the Drinking Side of the Table",
            content: "**Soju**, a clear distilled spirit typically 16-20% ABV, is the standard pairing, often drunk neat in small shot glasses or mixed roughly half-and-half with beer as **somaek**. The etiquette that actually matters: pour for others at the table before yourself, and when someone older is pouring for you or you're pouring for them, use both hands or support your pouring arm with your free hand — this single gesture reads as noticeably more polite to Korean dining companions than most visitors realize.\n\nTipping isn't expected at Korean BBQ restaurants any more than elsewhere in the country, and the bill is typically settled at the counter on the way out rather than at the table.",
            tourCard: { slug: "seoul-hongdae-indie-live-music-night-korean-bbq", title: "Seoul: Hongdae Indie Live Music Night & Korean BBQ Dinner", description: "A BBQ dinner paired with Hongdae's live-music scene for an evening that doesn't stop at the meal.", price: "From $57", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3c7bd3c113aadb41d2f84904d24696c89bc6d1f1d5babf6e2472c8ba9a17082.jpg" },
          },
        ],
        faqs: [
          { q: "What should I order for my first Korean BBQ meal?", a: "Samgyeopsal (pork belly) or galbi (marinated short rib) are the classic first choices, served alongside a free spread of banchan side dishes." },
          { q: "Do I grill the meat myself at Korean BBQ?", a: "It depends on the restaurant — some have staff manage the grill and cutting for you, others are self-service. Either way, wrap grilled pieces in lettuce with ssamjang paste rather than eating straight off the grill." },
          { q: "Is there a minimum order at Korean BBQ restaurants?", a: "Many require a minimum of two servings per table rather than per person, which matters specifically for solo diners — check before you sit down, or look for solo-friendly listings." },
          { q: "What's somaek?", a: "A mix of soju and beer, drunk roughly half-and-half, and the most common drink pairing with a Korean BBQ meal alongside soju on its own." },
        ],
      };

    case "hongdae-nightlife-guide":
      return {
        title: "Hongdae Nightlife Guide 2026: Bars, Live Music and How to Navigate the District",
        description: "Hongdae is Seoul's most reliable nightlife district — here's how the live-music scene, bar streets and street-performance culture actually fit together.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3c7bd3c113aadb41d2f84904d24696c89bc6d1f1d5babf6e2472c8ba9a17082.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Around Hongik University, western Seoul, near Hongik Univ. Station Line 2" },
          { icon: "Clock", label: "Peak hours", value: "10pm onward, busiest Friday and Saturday" },
          { icon: "Music", label: "Known for", value: "Indie live-music venues, street performances, affordable fashion by day" },
          { icon: "Beer", label: "The classic combo", value: "Chimaek (fried chicken and beer) before heading to a bar or club" },
        ],
        sections: [
          {
            title: "Hongdae by Day vs. Hongdae by Night",
            content: "**Hongdae**, built around the gates of Hongik University, runs on two different clocks: daytime is affordable streetwear, indie fashion boutiques, cafes and the neighborhood's famous **street performances** — buskers, dance crews and small pop-up art stalls that cluster especially around the main 'Playground' plaza on weekend afternoons. Once the sun sets, the same streets shift into Seoul's most consistent nightlife strip, with bars, clubs and live-music venues opening in roughly the same density that fashion shops occupy during the day.\n\nIf you only have one visit to spend, an early evening arrival lets you catch the tail end of the street-performance culture before the nightlife crowd takes over.",
          },
          {
            title: "Live Music, Indie Venues and What Sets Hongdae Apart",
            content: "Hongdae's **indie live-music scene** is genuinely distinct from the rest of Seoul's nightlife — small venues scattered through the side streets host everything from solo acoustic sets to full bands most nights of the week, and it's one of the few parts of the city where K-pop isn't the dominant soundtrack. A guided evening that pairs a Korean BBQ dinner with one of these indie venues is a solid way to sample the scene without having to guess which bar has a decent act on any given night.\n\nChimaek — Korean fried chicken paired with beer — is the neighborhood's unofficial starting ritual before a night out, and Hongdae has some of the city's best-regarded fried chicken spots clustered within a few blocks of the main plaza.",
            tourCard: { slug: "seoul-night-tour-with-chimaek-and-photo-spot-visit", title: "Seoul Night Tour with Chimaek and Photo Spot Visit", description: "The chimaek ritual paired with a guided evening photo walk through the district's best-lit spots.", price: "From $41", duration: "2.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9c6575386e8dd3d83aa32a5a6b917128304192f4cb1930101cdf21b6d27bd837.jpeg" },
          },
          {
            title: "Getting There, Safety and Practical Notes",
            content: "**Hongik University Station** on Line 2 (and the AREX line, useful if you're coming straight from Incheon Airport) puts you a short walk from the district's core. Hongdae is generally safe to walk at night by Seoul's overall standards, with a heavy enough foot-traffic volume on weekend nights that solo visitors shouldn't feel unusually exposed, though the usual city-nightlife caution around drink spiking and overly persistent club promoters still applies.\n\nMany venues have a cover charge on weekend nights, sometimes redeemable against a first drink — check at the door rather than assuming a flat entry fee everywhere.",
            tourCard: { slug: "seoul-korean-dinner-food-tour-with-a-seoul-born", title: "Seoul: Korean Dinner Food Tour with a Seoul-Born Local", description: "A guided dinner that can set you up with a local's read on Hongdae before you head out on your own.", price: "From $87", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5d60c40773d64923501b0bf8693b4ea167edbab859a3b55d94f3f7c2122fc40d.jpg" },
          },
        ],
        faqs: [
          { q: "What is Hongdae known for?", a: "Indie live-music venues, street performances and a dense nightlife strip of bars and clubs, alongside affordable fashion shopping by day near Hongik University." },
          { q: "When is Hongdae busiest at night?", a: "From around 10pm onward, peaking Friday and Saturday. Weeknights are noticeably calmer if you prefer a quieter bar scene." },
          { q: "How do I get to Hongdae?", a: "Hongik University Station on subway Line 2 (also served by the AREX airport line) is a short walk from the district's core streets." },
          { q: "Is Hongdae safe at night?", a: "Generally yes, by Seoul's overall standards, with heavy weekend foot traffic. The usual nightlife-district caution around drinks and persistent promoters still applies." },
        ],
      };

    case "seoul-to-busan-travel":
      return {
        title: "Seoul to Busan Travel Guide 2026: KTX, Bus and Flight Compared",
        description: "KTX is the fastest and most convenient way from Seoul to Busan, but it isn't the only option. Here's how the train, bus and flight actually compare on time and price.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7e2bf8c38fe0fc6578d44ab745f0c670e9d6e95a3ce416f66be64607691c319.jpg",
        fastFacts: [
          { icon: "Train", label: "KTX direct", value: "2 hours 15 minutes, standard fare roughly ₩54,400" },
          { icon: "Bus", label: "Intercity bus", value: "Around 4-4.5 hours, cheaper than KTX" },
          { icon: "Plane", label: "Flight", value: "Roughly 1 hour in the air, but airport transfers often erase the time saved" },
          { icon: "MapPin", label: "Stations", value: "KTX departs Seoul Station (central) and arrives at Busan Station (central), no airport-style transfer needed" },
        ],
        sections: [
          {
            title: "KTX: The Fastest, Most Convenient Option for Almost Everyone",
            content: "The **KTX high-speed train** between Seoul Station and Busan Station is the default choice for a reason: direct trains cover the roughly 325-kilometer route in **2 hours 15 minutes**, with trains that stop at Daejeon or Daegu along the way taking 2 hours 30 to 2 hours 45 minutes instead. Standard-class fare runs around **₩54,400** one-way, with first class costing more for a roomier 2+1 seat layout. Both Seoul Station and Busan Station sit in the center of their respective cities, so unlike a flight, there's no airport transfer eating into the time saved.\n\nTrains run frequently, roughly every 20-30 minutes during peak hours between about 5:15am and 10:30pm from Seoul Station, which makes a same-day round trip or a flexible departure time genuinely realistic rather than something that needs booking weeks ahead — though booking a specific popular time slot (early morning, Friday evening) a few days out is still worth doing.",
            tourCard: { slug: "from-seoul-busan-premium-ktx-4-day-tour-with", title: "From Seoul: Busan Premium KTX 4-Day Tour with Private Guide", description: "A multi-day Seoul-to-Busan trip with the KTX travel and a private guide bundled together.", price: "From $2909", duration: "4 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7e2bf8c38fe0fc6578d44ab745f0c670e9d6e95a3ce416f66be64607691c319.jpg" },
          },
          {
            title: "The Bus and Flight Alternatives, and When They Actually Make Sense",
            content: "An **intercity express bus** between Seoul and Busan takes roughly **4 to 4.5 hours** and costs noticeably less than KTX, making it the better call if budget matters more than time and you don't mind a longer, less scenic ride. Buses depart from Seoul's various intercity bus terminals rather than Seoul Station, so factor in a different starting point when comparing total door-to-door time.\n\nFlying covers the distance in about an hour in the air, but once you add check-in time, airport transfers on both ends (Gimpo and Busan's Gimhae Airport are both outside their respective city centers), and security, the total door-to-door time often ends up close to or longer than KTX — flights make more sense if you're already near an airport for another reason, or if a specific schedule gap makes it the only option that fits.",
          },
          {
            title: "Booking Tips and Making the Most of the Trip",
            content: "KTX tickets can be booked online through Korail's official booking system or through major booking platforms, and reserved seating is standard rather than optional on most services — don't expect to simply board and find a seat the way some regional trains work elsewhere. If your schedule allows it, a single-day KTX round trip from Seoul to Busan is genuinely doable for a focused look at Haeundae Beach or Jagalchi Market, though an overnight stay gives Busan's food and nightlife scene the time it deserves rather than rushing back for the last train.\n\nA T-money card works on both Seoul's and Busan's local transit once you arrive, so there's no need for a separate transit card at either end.",
          },
        ],
        faqs: [
          { q: "How long does it take to get from Seoul to Busan?", a: "A direct KTX train takes 2 hours 15 minutes; trains stopping at Daejeon or Daegu take 2 hours 30 to 2 hours 45 minutes. The bus takes roughly 4-4.5 hours, and flying is about an hour in the air before transfers." },
          { q: "How much does the KTX from Seoul to Busan cost?", a: "Standard-class fare runs around ₩54,400 one-way as of late 2026, with first class costing more for extra space." },
          { q: "Is flying faster than KTX for Seoul to Busan?", a: "Not usually in total door-to-door time — airport transfers on both ends often cancel out the shorter time in the air, since both cities' airports sit outside the center while the KTX stations don't." },
          { q: "Can I do a Seoul to Busan day trip?", a: "Yes, with KTX — a same-day round trip is realistic for a focused visit to one or two Busan highlights like Haeundae Beach or Jagalchi Market, though an overnight stay is better if you want more than a rushed look." },
        ],
      };

    case "namsan-tower-guide":
      return {
        title: "N Seoul Tower (Namsan Tower) Guide 2026: Tickets, Hiking Up and the Best Time to Go",
        description: "N Seoul Tower sits atop Namsan Mountain and is reachable for free on foot — here's how the ticket options, cable car and hiking route actually compare.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72181adabda65850009a3e75b893559387c981526472d20e04447c912aed2c11.jpg",
        fastFacts: [
          { icon: "Mountain", label: "Getting to the base", value: "Free on foot via several hiking trails, or a cable car for a fee" },
          { icon: "Ticket", label: "Observatory ticket", value: "Separate paid admission to the tower's observation deck" },
          { icon: "Clock", label: "Best time", value: "Late afternoon into sunset, so you catch both daylight and the night skyline" },
          { icon: "Heart", label: "Known for", value: "Thousands of padlocks left by couples on the observation deck's 'Locks of Love' railings" },
        ],
        sections: [
          {
            title: "Getting Up Namsan: Hiking vs. the Cable Car vs. a Bus",
            content: "**Namsan Mountain**, at the heart of Seoul, is climbable for free via several well-marked hiking trails from different starting points around the city — the walk up takes most visitors 30-45 minutes at a moderate pace and is a genuinely pleasant forested route rather than a grueling climb. The **Namsan Cable Car** is the paid alternative, covering the steepest portion of the ascent in a few minutes for anyone who'd rather save the legs for later in the day. A city bus route also runs up to near the summit for those who want neither option.\n\nMost visitors mix approaches — walk up one way for the experience, then take the cable car or a bus back down, or vice versa, rather than committing to the same route both directions.",
          },
          {
            title: "The Observatory Ticket and What You're Actually Paying For",
            content: "Reaching Namsan's summit is free; the **observatory deck inside N Seoul Tower itself** requires a separate paid ticket, giving an enclosed, elevated 360-degree view over Seoul that goes meaningfully higher than the summit viewpoint alone. The observatory is also where the tower's famous **'Locks of Love'** railings sit — thousands of padlocks left by couples and visitors, a tradition that's become one of the more photographed small details of a Seoul visit even for people who skip the lock-buying ritual themselves.\n\nA combo ticket bundling the cable car ride with observatory admission is commonly sold and usually works out cheaper than buying each separately if you plan to use the cable car anyway.",
            tourCard: { slug: "seoul-n-seoul-tower-myeongdong-night-tour", title: "Seoul: N Seoul Tower & Myeongdong Night Tour", description: "The tower's night skyline paired with Myeongdong's evening street food in one guided outing.", price: "From $135", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72181adabda65850009a3e75b893559387c981526472d20e04447c912aed2c11.jpg" },
          },
          {
            title: "Timing Your Visit for the Best View",
            content: "The strongest single window is **late afternoon into sunset** — you get the daylight city view on arrival, then watch Seoul's skyline light up as evening falls, without needing two separate trips. Clear-weather days obviously matter most for the view itself; a hazy or heavily overcast day blunts the payoff regardless of timing.\n\nPair the visit with **Itaewon** on the way up or down, a multicultural neighborhood of international restaurants and bars at Namsan's base, for a meal that bridges the walk and the tower visit into a fuller evening out.",
            tourCard: { slug: "seoul-itaewon-to-namsan-walking-tour", title: "Seoul: Itaewon to Namsan Walking Tour", description: "A guided route up from Itaewon that turns the climb itself into part of the experience.", price: "From $146", duration: "3.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c54f54e286e0185e264407afc8225d948b51f76501d7917165db31ec86fe1e08.jpg" },
          },
        ],
        faqs: [
          { q: "Is it free to visit N Seoul Tower?", a: "Reaching the summit of Namsan is free via hiking trails. The observatory deck inside the tower itself requires a separate paid admission ticket." },
          { q: "How do I get up Namsan Mountain?", a: "On foot via several free hiking trails (30-45 minutes), by the paid Namsan Cable Car for the steepest section, or by a city bus route to near the summit." },
          { q: "What is the Locks of Love wall at N Seoul Tower?", a: "A set of railings on the observatory deck covered in thousands of padlocks left by couples and visitors — one of the tower's most photographed features, even for visitors who don't buy a lock themselves." },
          { q: "What's the best time to visit N Seoul Tower?", a: "Late afternoon into sunset, so you see both the daylight city view and the skyline lighting up at night in a single visit." },
        ],
      };

    case "seoul-k-pop-tour-guide":
      return {
        title: "Seoul K-Pop Tour Guide 2026: Dance Classes, Studio Shoots and Filming Locations",
        description: "From a one-off dance-class video shoot to walking the actual filming locations from hit K-pop content — here's how to actually do a K-pop-focused day in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg",
        fastFacts: [
          { icon: "Music", label: "No experience needed", value: "Most dance-class-and-video sessions are built for complete beginners" },
          { icon: "MapPin", label: "Where they cluster", value: "Hongdae and Gangnam have the highest concentration of K-pop studios" },
          { icon: "Camera", label: "What you get", value: "A recorded video of your choreography, usually included in the session price" },
          { icon: "Clock", label: "Typical length", value: "2-3 hours for a dance class and video shoot" },
        ],
        sections: [
          {
            title: "Dance Classes and Studio Video Shoots: The Core Experience",
            content: "The most popular K-pop-themed booking in Seoul is a **dance-class-and-video-shoot session**, run by small studios clustered mainly around Hongdae and Gangnam, where an instructor teaches a simplified version of a well-known K-pop choreography, then records a short video of your group performing it, usually with basic styling or makeup touch-ups included depending on the package. These sessions are explicitly built for people with zero dance background — the choreography is broken down slowly and the goal is a fun, shareable video rather than an actual performance showcase.\n\nSome studios go further with a full **'K-pop star' studio package**, adding a recorded vocal track, professional styling and a more produced music-video-style shoot for a fuller fantasy-fulfillment experience rather than just a dance lesson.",
            tourCard: { slug: "be-a-k-pop-star-in-seoul-studio-recording", title: "Be a K-Pop Star in Seoul: Studio Recording, Makeup & Video", description: "A full styling, vocal recording and video-shoot package built around the K-pop idol fantasy.", price: "From $379", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg" },
          },
          {
            title: "Filming Location Walks and Themed Street Tours",
            content: "Beyond the studio experience, several guided walking tours trace actual **K-pop filming and music-video locations**, as well as neighborhoods tied to specific entertainment companies, letting fans see the real streets and buildings behind content they already know rather than a generic city walk with K-pop mentioned in passing. Seongsu-dong in particular has become a genuine hub for this — a formerly industrial neighborhood now dense with the kind of trendy cafes and photo-ready corners that show up constantly in K-pop content and idol social media.\n\nThese walks work well paired with a cafe stop or two along the route, since much of Seongsu-dong's appeal is exactly that kind of slow, photo-driven browsing rather than a fast point-to-point tour.",
            tourCard: { slug: "seoul-k-pop-dance-class-and-video-shoot-at", title: "Seoul: K-Pop Dance Class and Video Shoot at Kpop Center", description: "A beginner-friendly dance class at a dedicated K-pop studio, video included.", price: "From $218", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a67aa92baa6916c824ba2797bf7bc54bdad278eefd402d771131c5105162f120.jpeg" },
          },
          {
            title: "Booking Tips: Group Size, Styling and What to Wear",
            content: "Most dance-class sessions welcome solo travelers and small groups equally, and some actively market themselves toward friend groups wanting a shared video rather than individual bookings — check the listing for whether it's priced per person or per group before booking for a larger party. Wear comfortable clothing you can move in; most studios don't require (or provide) special outfits for the basic dance-class package, though the fuller styling packages typically include costume and makeup as part of the price.\n\nBook a session for earlier in your trip rather than the last day if photos and video matter to you — it gives you content to actually use and share for the rest of the visit instead of an afterthought on departure day.",
          },
        ],
        faqs: [
          { q: "Do I need dance experience for a K-pop dance class in Seoul?", a: "No — these sessions are built specifically for complete beginners, with choreography broken down slowly and a short recorded video as the main takeaway rather than a performance test." },
          { q: "Where are most K-pop studios located in Seoul?", a: "Hongdae and Gangnam have the highest concentration of K-pop dance studios and themed experiences, with Seongsu-dong also popular for filming-location and cafe-focused walking tours." },
          { q: "What's included in a typical K-pop dance class package?", a: "A simplified choreography lesson and a recorded video, usually 2-3 hours total. Fuller 'K-pop star' packages add vocal recording, professional styling and a more produced shoot." },
          { q: "Can groups book K-pop dance classes together in Seoul?", a: "Yes — many studios specifically market toward friend groups, though it's worth checking whether pricing is per person or per group before booking for a larger party." },
        ],
      };

    case "bukchon-hanok-village-guide":
      return {
        title: "Bukchon Hanok Village Guide 2026: What It Is, Where to Walk and the 'No Noise' Rule",
        description: "Bukchon is a living residential neighborhood, not a recreated attraction — here's how to actually visit it without being one of the tourists locals complain about.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/83e70af009e0a87e12091a420f75f241377a550623de11cbad045be0a2a78ff2.png",
        fastFacts: [
          { icon: "Home", label: "What it is", value: "A hillside neighborhood of restored traditional hanok houses, partly still residential" },
          { icon: "MapPin", label: "Location", value: "Between Gyeongbokgung and Changdeokgung palaces" },
          { icon: "AlertTriangle", label: "The key rule", value: "Many alleys are posted 'quiet zones' — residents live here, and noise complaints have led to restricted hours in places" },
          { icon: "Camera", label: "Best photo spot", value: "The viewpoint near Bukchon-ro 11-gil, looking down over the tiled roofs toward the city" },
        ],
        sections: [
          {
            title: "A Living Neighborhood, Not a Reconstructed Attraction",
            content: "**Bukchon Hanok Village**, sitting on a hillside between Gyeongbokgung and Changdeokgung palaces, is a genuine residential neighborhood of traditional hanok houses — some centuries old, many restored — where real people still live, which makes it meaningfully different from a purpose-built heritage attraction. That's exactly why it's worth visiting, but it's also why the single most important thing to know before you go is that **tourist noise and crowding have become a real friction point**, leading some alleys to post quiet-hours restrictions or outright closures to visitor foot traffic at certain times.\n\nTreat it the way you'd treat walking through any residential street: keep voices down, especially early morning or evening, and don't peer into open doorways or private courtyards even if a shot looks tempting.",
          },
          {
            title: "Where to Actually Walk",
            content: "**Bukchon-ro 11-gil** is the most-photographed single stretch — a street view looking downhill over a sea of traditional tiled rooftops with the modern city skyline behind them, and it's busy enough on weekends that a weekday or early-morning visit genuinely changes the experience. Beyond that signature shot, the surrounding alleys hold small craft workshops, tea houses and a scattering of museums in converted hanoks, worth slower browsing rather than a single photo stop.\n\nA guided tour is worth it here specifically because a knowledgeable guide can route you through the quieter, still-open alleys and explain which spots are genuinely fine to photograph versus which cross into someone's front step.",
            tourCard: { slug: "seoul-bukchon-village-walking-tour", title: "Seoul: Bukchon Village Walking Tour", description: "A guided route through Bukchon's photogenic alleys that respects the residential quiet-hours rules.", price: "From $99", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/83e70af009e0a87e12091a420f75f241377a550623de11cbad045be0a2a78ff2.png" },
          },
          {
            title: "Pairing It With Nearby Sights",
            content: "Bukchon's location between the two palaces makes it a natural midday stop on a palace-focused morning — Gyeongbokgung on one side, Changdeokgung and its Secret Garden on the other, with Bukchon's alleys as the walkable bridge between them. A pedicab tour is a lower-effort alternative to walking the hillier upper alleys, and some include a brief dancheong (traditional palace-painting pattern) craft demonstration as part of the route.\n\nAvoid trying to combine Bukchon with a hanbok rental and expecting easy mobility — the steeper alleys and narrower steps aren't especially hanbok-friendly footwear territory, so save the full hanbok look for the flatter palace grounds nearby instead.",
            tourCard: { slug: "seoul-bukchon-pedicab-tour-dancheong-experience", title: "Seoul: Bukchon Pedicab Tour & Dancheong Experience", description: "A pedicab route through Bukchon paired with a traditional painting-pattern craft activity.", price: "From $158", duration: "2 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/77b3838183d3c23870a9fd5c87586114173bc226edf3fc0c81bad106a23987b4.jpg" },
          },
        ],
        faqs: [
          { q: "Is Bukchon Hanok Village a real neighborhood or a tourist attraction?", a: "A real, still partly residential neighborhood — many of the hanok houses are lived-in homes, not exhibits, which is why noise and quiet-hours rules in some alleys are genuinely enforced." },
          { q: "What's the best photo spot in Bukchon?", a: "Bukchon-ro 11-gil, a street looking downhill over traditional tiled rooftops with the city skyline behind — busiest on weekends, calmer early on a weekday morning." },
          { q: "Can I wear a hanbok to walk around Bukchon?", a: "You can, but the steeper alleys and steps aren't especially hanbok-friendly — it's more comfortable to save a full hanbok look for the flatter nearby palace grounds." },
          { q: "How long does a Bukchon visit take?", a: "A focused walk through the main photogenic alleys takes about an hour to 90 minutes; pairing it with a nearby palace makes for a natural half-day combination." },
        ],
      };

    case "insadong-guide":
      return {
        title: "Insadong Guide 2026: Traditional Crafts, Tea Houses and Jogyesa Temple",
        description: "Insadong is Seoul's slower, traditional-crafts district — here's what's actually worth doing among the calligraphy shops, tea houses and the city's central Buddhist temple.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5b2ff5b4df99e336e8fd31561f43c38a89fea5af32db715b593eb8d05e51188.png",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Central Seoul, near Anguk and Jonggak subway stations" },
          { icon: "Landmark", label: "Key site", value: "Jogyesa Temple, the headquarters of the Jogye Order of Korean Buddhism" },
          { icon: "Palette", label: "Known for", value: "Traditional crafts, calligraphy, antiques, tea houses and galleries" },
          { icon: "Clock", label: "Main street closure", value: "Insadong-gil, the main street, is pedestrianized on weekends" },
        ],
        sections: [
          {
            title: "A Slower District Built Around Traditional Crafts",
            content: "**Insadong** is the traditional-arts counterpart to Myeongdong's shopping and Hongdae's nightlife — a dense cluster of galleries, antique dealers, calligraphy shops, hanji (traditional paper) stores and tea houses spread along Insadong-gil, the main street, which becomes **pedestrian-only on weekends**, making it noticeably more walkable and browse-friendly than on a weekday when car traffic shares the street. It's a better fit for a slower, unhurried pace than a checklist of must-see stops — the real appeal is wandering into whichever gallery or tea house catches your eye.\n\nCalligraphy and name-seal workshops are genuinely accessible to drop-in visitors here, letting you write your own scroll or carve a personal stamp with a few minutes of instruction, and they make for one of the more personal, take-home-able souvenirs available anywhere in Seoul.",
            tourCard: { slug: "seoul-write-a-special-korean-calligraphy-scroll", title: "Seoul: Write a Special Korean Calligraphy Scroll in Insadong", description: "A hands-on calligraphy session that produces an actual souvenir you write yourself.", price: "From $64", duration: "1 hour", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eafbda405306b4682ae5c67a47de533d26e92426040d292dc660e2b272150187.jpg" },
          },
          {
            title: "Jogyesa Temple: A Working Buddhist Headquarters, Not a Museum",
            content: "**Jogyesa Temple**, a short walk from Insadong's main street, is the headquarters of the **Jogye Order**, the largest sect of Korean Buddhism, and remains an active place of worship rather than a staged tourist site — expect to see monks and lay practitioners going about actual temple business alongside visitors. The main hall's vivid dancheong painted eaves and a pair of centuries-old trees in the courtyard are the visual highlights, and the temple hosts a notably vibrant Buddha's Birthday lantern display when that date falls during your visit.\n\nDress and behave as you would at any active place of worship — modest clothing and a quieter tone inside the halls, even though the courtyard itself is relatively relaxed about tourist foot traffic.",
            tourCard: { slug: "seoul-insadong-jogye-temple-cultural-guided", title: "Seoul: Insadong & Jogye Temple Cultural Guided Walking Tour", description: "A guided walk covering both the crafts district and the temple's history and etiquette.", price: "From $68", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5b2ff5b4df99e336e8fd31561f43c38a89fea5af32db715b593eb8d05e51188.png" },
          },
          {
            title: "Tea Houses, Souvenirs and Pairing It With Nearby Sights",
            content: "Insadong's traditional **tea houses** — many tucked into converted hanok buildings off the main street — serve Korean teas like omija (five-flavor berry) or jujube tea, often alongside simple traditional sweets, and are worth a sit-down break between shop browsing rather than a quick takeaway stop. For souvenirs, Insadong's antique and craft shops genuinely stock handmade items you won't find in Myeongdong's chain stores, though prices at the more tourist-facing stalls along the main street run higher than the smaller shops in the side alleys.\n\nInsadong sits close enough to Gyeongbokgung, Bukchon and Gwangjang Market that it fits naturally into a palace-district day without needing a separate trip.",
          },
        ],
        faqs: [
          { q: "What is Insadong known for?", a: "Traditional crafts, calligraphy, antiques, tea houses and galleries, plus Jogyesa Temple, the headquarters of Korean Buddhism's Jogye Order, a short walk from the main street." },
          { q: "Is Jogyesa Temple an active temple or a tourist site?", a: "It's an active, working Buddhist headquarters — monks and practitioners use it daily, so dress modestly and keep a quieter tone inside the halls even though visitors are welcome." },
          { q: "When is the best time to visit Insadong?", a: "Weekends, when the main street Insadong-gil is pedestrianized and noticeably easier to browse without car traffic sharing the road." },
          { q: "Can I do a calligraphy workshop in Insadong without booking ahead?", a: "Many shops accept drop-ins, but booking a specific guided session ahead guarantees a slot and usually includes more instruction than a walk-in quick session." },
        ],
      };

    case "gwangjang-market-guide":
      return {
        title: "Gwangjang Market Guide 2026: What to Eat and How to Navigate Seoul's Oldest Market",
        description: "Gwangjang Market is Seoul's oldest traditional market and one of its best food stops — here's what's actually worth eating and how the stalls are laid out.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/507fff94036e70a54c771e892c28ee36217033464971c66d09f38eecaaee7565.png",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Jongno-gu, central Seoul, near Jongno 5(o)-ga Station" },
          { icon: "Clock", label: "Founded", value: "1905 — Korea's first permanent market" },
          { icon: "Utensils", label: "Signature dish", value: "Bindaetteok (mung bean pancake) and mayak gimbap" },
          { icon: "DollarSign", label: "Payment", value: "Mostly cash at individual food stalls, though more now accept cards" },
        ],
        sections: [
          {
            title: "Seoul's Oldest Market Is Still a Genuine Food Destination",
            content: "**Gwangjang Market**, established in 1905, is Korea's first permanent market and has evolved from a general textiles-and-goods bazaar into one of Seoul's most reliable food destinations, with its covered food-stall section drawing both locals on a lunch break and visitors specifically seeking out its street-food reputation. The market still sells fabric, hanbok materials and secondhand clothing in its other sections, but the food alleys are where almost every visitor's actual time gets spent.\n\nIt gets genuinely crowded at peak lunch and dinner hours; an early-afternoon visit, between the lunch and dinner rushes, gives more room to actually see what each stall is cooking before committing to an order.",
          },
          {
            title: "What to Actually Eat",
            content: "**Bindaetteok**, a savory mung bean pancake fried until crisp on the outside, is the market's signature dish and sold at numerous competing stalls, each with loyal regulars. **Mayak gimbap** ('narcotic' gimbap, nicknamed for how addictive it supposedly is) — small, bite-sized seaweed rice rolls dipped in a mustard-soy sauce — has become one of the market's most Instagrammed items and is worth trying specifically here, where it originated as a market specialty. Beyond those two, look for yukhoe (Korean-style beef tartare, a market specialty some stalls are particularly known for), various jeon (savory pancakes) and sundae (Korean blood sausage).\n\nMost stalls expect cash, though card acceptance has grown; carry some won regardless rather than risking a stall that doesn't take cards.",
          },
          {
            title: "Getting There and Pairing It With a Nearby Stop",
            content: "Gwangjang Market sits a short walk from **Jongno 5(o)-ga Station** on Line 1, and it's close enough to Insadong and the palace district to fold into a broader morning or midday itinerary rather than requiring a dedicated trip. Several guided food tours route through Gwangjang specifically because navigating which stall to try first, among dozens of near-identical-looking options, is the market's one real friction point for first-time visitors — a guide who already knows the standout stalls saves a lot of trial and error.",
            tourCard: { slug: "seoul-han-river-night-cruise-63-building", title: "Seoul Han River Night Cruise: 63 Building & Gwangjang Market", description: "A Gwangjang Market food stop paired with a Han River evening cruise.", price: "From $77", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/507fff94036e70a54c771e892c28ee36217033464971c66d09f38eecaaee7565.png" },
          },
        ],
        faqs: [
          { q: "What should I eat at Gwangjang Market?", a: "Bindaetteok (mung bean pancake) is the signature dish. Mayak gimbap, yukhoe (beef tartare) and various jeon pancakes are also market specialties worth seeking out." },
          { q: "How do I get to Gwangjang Market?", a: "Jongno 5(o)-ga Station on subway Line 1 is a short walk from the market entrance." },
          { q: "Is Gwangjang Market cash-only?", a: "Mostly cash at individual food stalls, though card acceptance has grown over time — carry some won to be safe." },
          { q: "When is the best time to visit Gwangjang Market?", a: "Early afternoon, between the lunch and dinner rushes, for noticeably less crowding at the food stalls." },
        ],
      };

    case "seoul-palaces-guide":
      return {
        title: "Seoul's Five Grand Palaces Guide 2026: Which Ones to Actually Visit",
        description: "Seoul has five royal Joseon-dynasty palaces still standing — here's how Gyeongbokgung, Changdeokgung and the others actually differ, and which ones are worth your limited time.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bad5aded21ad081f5519f659809804dacc102d3083b0e65bff9066a17679de12.jpeg",
        fastFacts: [
          { icon: "Landmark", label: "The Five Grand Palaces", value: "Gyeongbokgung, Changdeokgung, Changgyeonggung, Deoksugung, Gyeonghuigung" },
          { icon: "Star", label: "Must-see pair", value: "Gyeongbokgung (grandest, free with hanbok) and Changdeokgung (UNESCO, Secret Garden)" },
          { icon: "Ticket", label: "Integrated ticket", value: "A combined pass covering several palaces plus Jongmyo Shrine is sold at a discount" },
          { icon: "Clock", label: "Closed day", value: "Most palaces close one day a week, typically Tuesday — check before you plan around a specific one" },
        ],
        sections: [
          {
            title: "Gyeongbokgung: The Grandest, and the One to Prioritize",
            content: "**Gyeongbokgung**, the largest and most visually grand of the five, was the primary royal residence and seat of government for most of the Joseon dynasty, and its scale, the throne hall, and the surrounding mountain backdrop make it the single palace worth prioritizing if you only have time for one. It's also the only one of the five where the hanbok-free-entry rule gets the most visible use, given its popularity for rental photoshoots.\n\nThe National Folk Museum and National Palace Museum sit within or adjacent to the grounds, worth a stop if the main palace buildings leave you wanting more historical context.",
          },
          {
            title: "Changdeokgung and the Secret Garden: The UNESCO Alternative",
            content: "**Changdeokgung**, a UNESCO World Heritage Site, is widely considered the most architecturally and landscape-harmonious of the five, built to follow the natural contours of the land rather than imposing a rigid symmetrical layout the way Gyeongbokgung does. Its attached **Secret Garden (Huwon)**, a rear garden built for royal leisure, requires a **separate timed, guided-entry ticket** capped at a limited number of visitors per session — book this specifically ahead of time, since it's the one part of the Seoul palace circuit that genuinely sells out rather than just getting crowded.\n\nThe pairing of main palace plus Secret Garden makes for a half-day visit on its own, distinct enough from Gyeongbokgung that doing both isn't repetitive.",
            tourCard: { slug: "seoul-old-town-changdeokgung-palace-bukchon", title: "Seoul Old Town: Changdeokgung Palace & Bukchon Hidden Tour", description: "A guided visit to Changdeokgung paired with Bukchon's hanok alleys right next door.", price: "From $132", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b82d3d3d82b100c9be53e076ef1feabb65eef6bd0182fd78e9a99ee4d8006f0f.jpg" },
          },
          {
            title: "The Other Three: Changgyeonggung, Deoksugung and Gyeonghuigung",
            content: "**Changgyeonggung**, adjacent to Changdeokgung, was originally built as a residence for queens and royal relatives and today is known for its attached botanical garden and greenhouse. **Deoksugung**, in the heart of modern downtown Seoul, is smaller but notable for mixing traditional Korean architecture with a Western-style stone hall from the late Joseon period, and for its own changing-of-the-guard ceremony and popular evening illumination. **Gyeonghuigung**, the smallest and least visited, mainly suits visitors who've already covered the other four and want the complete set.\n\nFor most itineraries, Gyeongbokgung plus Changdeokgung covers the genuinely essential experience; Deoksugung is worth adding if its downtown location fits naturally into your route, while Changgyeonggung and Gyeonghuigung are optional extras rather than must-sees.",
            tourCard: { slug: "seoul-royal-palaces-secret-garden-hanok-village", title: "Seoul: Royal Palaces, Secret Garden & Hanok Village Tour", description: "A guided day combining multiple palaces, the Secret Garden and a hanok village stop.", price: "From $299", duration: "6 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bad5aded21ad081f5519f659809804dacc102d3083b0e65bff9066a17679de12.jpeg" },
          },
        ],
        faqs: [
          { q: "Which Seoul palace should I visit if I only have time for one?", a: "Gyeongbokgung — it's the largest, grandest and most historically central of the five, and the one where the hanbok free-entry rule and guard ceremony are most visible." },
          { q: "Do I need to book Changdeokgung's Secret Garden in advance?", a: "Yes, strongly recommended — it's a separate timed, guided-entry ticket with a capped number of visitors per session, and it's the one part of the palace circuit that genuinely sells out." },
          { q: "Are Seoul's palaces closed on certain days?", a: "Most close one day a week, typically Tuesday, though this varies by palace — check the current schedule before planning a visit around a specific one." },
          { q: "Is there a combined ticket for multiple Seoul palaces?", a: "Yes — an integrated pass covering several of the Five Grand Palaces plus Jongmyo Shrine is sold at a discount compared to buying each admission separately." },
        ],
      };

    case "seoul-night-market-food-guide":
      return {
        title: "Seoul Night Market and Night Food Guide 2026: Where to Actually Eat After Dark",
        description: "Seoul's night food culture spans covered markets, river picnics and fried-chicken-and-beer crawls — here's where it's actually worth going once the sun goes down.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0635b5ea661c196168d3b42d6892f0fb8826982f661d4fe4cb7ff621b650568.jpg",
        fastFacts: [
          { icon: "Utensils", label: "The classic combo", value: "Chimaek — Korean fried chicken paired with beer" },
          { icon: "MapPin", label: "Best areas", value: "Gwangjang Market's food alleys, Myeongdong's street carts, Hongdae's late-night strip" },
          { icon: "Clock", label: "Peak hours", value: "8pm to midnight for most night-food activity" },
          { icon: "DollarSign", label: "Budget", value: "A full night of market and street food typically runs cheaper than a sit-down restaurant dinner" },
        ],
        sections: [
          {
            title: "Chimaek: The Default Seoul Night-Food Ritual",
            content: "**Chimaek** — a portmanteau of chicken and maekju (beer) — is Seoul's most ingrained night-food habit, less a specific dish than a whole evening format: Korean-style double-fried chicken, often sauced in soy-garlic or spicy-sweet gochujang glaze, paired with cold beer at a dedicated chimaek restaurant or chain. It's casual, social and built for sharing across a table rather than individual plates, and it works equally well as a light late dinner or as the anchor of a longer night out before or after a bar crawl.\n\nMost chimaek spots stay open late, making this one of the easiest night-food options to fit around whatever else your evening includes.",
            tourCard: { slug: "seoul-night-tour-with-chimaek-and-photo-spot-visit", title: "Seoul Night Tour with Chimaek and Photo Spot Visit", description: "The chimaek ritual paired with a guided evening photo walk.", price: "From $41", duration: "2.5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9c6575386e8dd3d83aa32a5a6b917128304192f4cb1930101cdf21b6d27bd837.jpeg" },
          },
          {
            title: "Where to Go: Markets, Carts and a River Picnic",
            content: "**Gwangjang Market's** covered food alleys run well into the evening and are a genuine local dinner stop, not just a daytime tourist draw — bindaetteok and mayak gimbap taste just as good after dark, with a different, more local crowd than the daytime visitor mix. **Myeongdong's** street-food carts are at their liveliest from early evening onward, trading more on spectacle (giant skewers, tornado potatoes) than deep authenticity, but genuinely fun as a grazing crawl. For something lower-key, a **Han River picnic**, with food and drinks bought from a riverside convenience store or delivered, is a quieter, scenic night-food option that doesn't involve a crowd at all.\n\nHongdae's late-night strip rounds things out for anyone wanting food that bridges straight into bars and live music afterward, rather than a standalone meal.",
            tourCard: { slug: "seoul-night-market-food-tour-with-k-fried-chicken", title: "Seoul: Night Market Food Tour with K-Fried Chicken & Beer", description: "A guided night crawl through market food stalls with fried chicken and beer built in.", price: "From $182", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0635b5ea661c196168d3b42d6892f0fb8826982f661d4fe4cb7ff621b650568.jpg" },
          },
          {
            title: "Practical Notes for a Night-Food Crawl",
            content: "Convenience stores (CU, GS25, 7-Eleven) are a legitimate part of Seoul's night-food culture in their own right — many have seating areas out front and sell surprisingly solid instant ramyeon, kimbap and snacks, functioning almost as a backup night-food stop when everything else is closed or you just want something fast and cheap after midnight. Public drinking in parks and along the riverside is legal and genuinely common, which is part of why the Han River picnic option works as well as it does.\n\nA guided night-food tour is worth it mainly for navigating which of several near-identical-looking stalls in a market or street actually has the better reputation — the kind of local knowledge that's hard to pick up from a single visit on your own.",
          },
        ],
        faqs: [
          { q: "What is chimaek?", a: "A combination of Korean fried chicken and beer, eaten together as a social evening ritual rather than a single dish — one of Seoul's most ingrained night-food habits." },
          { q: "Is it legal to drink in public in Seoul?", a: "Yes — drinking in parks and along the riverside is legal and common, which is part of why a Han River picnic with food and drinks is such a popular casual night-out option." },
          { q: "Is Gwangjang Market open at night?", a: "Yes — its covered food alleys run well into the evening and are a genuine local dinner stop, not just a daytime draw." },
          { q: "What time does Seoul's street food scene get busy?", a: "Roughly 8pm to midnight is the peak window for most night-food activity across markets, street carts and chimaek restaurants." },
        ],
      };

    // ============================= BUSAN (10) =============================
    case "best-time-to-visit-busan":
      return {
        title: "Best Time to Visit Busan (2026): Beach Season, Typhoons and the Shoulder Months",
        description: "Busan's beach season peaks hard in summer, but that's also when crowds and occasional typhoon risk are highest. Here's when to actually go.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c895d2bf545e11bcb18babfbaed378fa5445cab12454d3b107553a9b434ccbb9.png",
        fastFacts: [
          { icon: "Sun", label: "Best overall windows", value: "May-June and September-October — mild, fewer crowds than peak summer" },
          { icon: "Waves", label: "Beach season peak", value: "July-August, hottest and busiest at Haeundae and Gwangalli" },
          { icon: "AlertTriangle", label: "Typhoon risk", value: "August-September carries the highest chance of a direct or near-pass typhoon" },
          { icon: "Snowflake", label: "Winter", value: "Mild for Korea — Busan's coastal location keeps it noticeably warmer than Seoul" },
        ],
        sections: [
          {
            title: "Late Spring and Early Autumn Are the Sweet Spot",
            content: "**May through June** and **September through October** give Busan comfortable temperatures for walking the coastal trails and beaches without the peak-summer heat, humidity or the crowd density that packs Haeundae Beach shoulder to shoulder in August. These windows also line up well with Gamcheon Culture Village and Jagalchi Market visits, both of which are considerably more pleasant to walk through without summer's heat radiating off the pavement.\n\nSeptember specifically avoids the worst of typhoon season while still catching warm-enough water temperatures for a beach day, making it arguably the single best all-round month if you want both comfortable sightseeing weather and a viable beach visit.",
          },
          {
            title: "Summer: Peak Beach Season, Peak Crowds and Real Typhoon Risk",
            content: "**July and August** are when Busan's identity as Korea's beach city is most on display — Haeundae and Gwangalli beaches fill with both domestic tourists and locals, the Busan International Rock Festival and other summer events run, and the water is warm enough for a proper swim. The tradeoff is real crowding at the beaches and nearby restaurants, hotter and more humid conditions than most visitors expect from Korea, and a genuine **typhoon risk through August and into September** that can disrupt beach days, boat tours and the cable car at Songdo or Haedong Yonggungsa with little warning.\n\nIf you're set on summer specifically for the beach experience, build at least one flexible day into the itinerary rather than stacking every outdoor plan into a tight schedule.",
            tourCard: { slug: "busan-day-trip-to-haeundae-sky-capsule-yonggungsa", title: "Busan: Day Trip to Haeundae Sky Capsule & Yonggungsa Temple", description: "A flexible half-day covering Haeundae and the coastal temple, easy to shift if weather turns.", price: "From $28", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea6b12d36ba6e580fbaaccfc6ba380582658f36b52e98713e5f29e7b60c17815.jpg" },
          },
          {
            title: "Winter in Busan: Korea's Mildest Major City",
            content: "Busan's coastal position makes its winters noticeably milder than Seoul's — daytime temperatures rarely drop as harshly, and heavy snow is uncommon, which makes it one of the more comfortable Korean cities to visit in December through February if you'd rather avoid genuine cold. The beaches aren't swimmable, but Haeundae and Gwangalli remain pleasant for a walk, and Gamcheon Culture Village's pastel houses and Jagalchi's indoor fish market stalls are entirely unaffected by the season.\n\nIt's also the cheapest and quietest time for hotels along the Haeundae strip, which otherwise command premium summer rates.",
          },
        ],
        faqs: [
          { q: "What is the best month to visit Busan?", a: "September is a strong single answer — it largely avoids peak typhoon risk while still offering warm-enough weather for the beaches, alongside comfortable sightseeing conditions." },
          { q: "Is Busan good for a beach trip in summer?", a: "Yes, July-August is peak beach season with warm water, but expect heavy crowds at Haeundae and Gwangalli and build in flexibility for typhoon risk through August-September." },
          { q: "Is Busan warmer than Seoul in winter?", a: "Yes — its coastal location keeps winters noticeably milder than Seoul's, with less severe cold and less snow, making it a comfortable off-season option." },
          { q: "When is typhoon season in Busan?", a: "Roughly August through September carries the highest risk of a direct or near-pass typhoon, which can disrupt beach days and coastal cable car or boat activities." },
        ],
      };

    case "things-to-do-in-busan":
      return {
        title: "20+ Best Things to Do in Busan (2026): The Complete List",
        description: "From Haeundae Beach and Gamcheon's pastel alleys to Jagalchi's fish stalls and the city's nightlife — the real list of what's worth your time in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        fastFacts: [
          { icon: "Waves", label: "Top beach", value: "Haeundae Beach — Busan's most famous and most crowded stretch of sand" },
          { icon: "Palette", label: "Most photographed", value: "Gamcheon Culture Village's pastel hillside houses" },
          { icon: "Fish", label: "Don't skip", value: "Jagalchi Market, Korea's largest seafood market" },
          { icon: "Landmark", label: "Coastal temple", value: "Haedong Yonggungsa, one of the only major Korean temples built right on the water" },
        ],
        sections: [
          {
            title: "The Beaches: Haeundae, Gwangalli and the Coastal Walk Between Them",
            content: "**Haeundae Beach**, Busan's most famous stretch of sand, anchors the city's beach-resort identity, backed by a dense strip of hotels, restaurants and the elevated **Haeundae Sky Capsule** cable car running along the shoreline. A short distance away, **Gwangalli Beach** offers a quieter, more local alternative with a clear view of the Gwangandaegyo (Diamond) Bridge lit up at night, making it arguably the better pick for an evening walk over Haeundae's daytime crowds. The coastal path connecting the two via **Dalmaji Hill** and the Igidae coastal trail is worth walking rather than skipping between them by taxi, especially on a clear day.",
            tourCard: { slug: "busan-night-views-tour-with-yacht-ride-and", title: "Busan: Night Views Tour with Yacht Ride and Fireworks", description: "A night on the water taking in both beaches' skylines from the sea.", price: "From $228", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/928beadadd31968dd237c66c60408a6a05da367ecf83bc45c655d7524ed42650.jpg" },
          },
          {
            title: "Gamcheon Culture Village and Jagalchi Market",
            content: "**Gamcheon Culture Village**, nicknamed Korea's 'Machu Picchu' or 'Santorini' for its cascading pastel-colored houses climbing a steep hillside, began as a settlement for refugees during and after the Korean War and was later reborn as a cultural and arts district through government-funded urban regeneration — it remains an actual residential neighborhood today, not a built attraction, so the same quiet-respect etiquette that applies at Seoul's Bukchon applies here too. **Jagalchi Market**, Korea's largest seafood market on Busan's shoreside road, has operated as a fish market since shortly after the Korean War, staffed largely by women vendors known locally as 'Jagalchi ajumma' — browsing the live and dried seafood stalls, and eating fresh sashimi or grilled fish at one of the market's upstairs restaurants, is one of Busan's most essential food experiences.",
            tourCard: { slug: "busan-jagalchi-market-gamcheon-village-walking", title: "Busan: Jagalchi Market & Gamcheon Village Walking Tour", description: "Both of Busan's signature sights in a single guided walking day.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
          {
            title: "The Coastal Temple, Nightlife and What to Eat",
            content: "**Haedong Yonggungsa**, built directly on coastal rocks rather than in the mountains where most major Korean temples sit, is a genuinely unusual sight — waves breaking against the temple's base and a sunrise-facing orientation that makes it a popular New Year's sunrise-viewing spot. For nightlife, **BIFF Square** and **Gwangalli's** bar strip anchor the evening scene, with options ranging from a rooftop bar overlooking the Diamond Bridge to a full nightclub crawl for a louder night out.\n\nFood-wise, Busan's seafood-forward cuisine (centered on Jagalchi but spread across the city) and the city's own milmyeon (cold wheat noodles, a Korean War-era refugee dish distinct from Pyongyang-style naengmyeon) are worth seeking out specifically, rather than assuming Seoul's food scene simply repeats here.",
            tourCard: { slug: "busan-coastal-tour-yonggungsa-cruise-gamcheon", title: "Busan Coastal Tour: Yonggungsa, Cruise & Gamcheon", description: "The coastal temple, a cruise and Gamcheon Village combined into one guided day.", price: "From $84", duration: "5 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5239b4b23acbf7e552df50ab6d99ba88f739f1b75e818f19993c9816b8a98329.png" },
          },
        ],
        faqs: [
          { q: "What is Busan's number one attraction?", a: "Haeundae Beach is the most famous single sight, but Gamcheon Culture Village and Jagalchi Market are close behind and together form the core of most first-time itineraries." },
          { q: "Is one day enough to see Busan?", a: "You can cover Gamcheon Village, Jagalchi Market and one beach in a focused single day, but Busan rewards 2-3 days once you add Haedong Yonggungsa, Gwangalli's nightlife and the coastal walking trails." },
          { q: "What makes Haedong Yonggungsa different from other Korean temples?", a: "It's built directly on coastal rocks rather than in the mountains, with waves breaking at its base — one of the only major Korean temples in this setting, and a popular spot for sunrise viewing." },
          { q: "Is Busan good for nightlife?", a: "Yes — BIFF Square and the Gwangalli beach strip anchor a genuine nightlife scene, from rooftop bars with bridge views to full nightclub crawls." },
        ],
      };

    case "busan-travel-guide-2026":
      return {
        title: "Busan Travel Guide 2026: Everything You Need to Know Before You Go",
        description: "A practical first-time guide to Busan — getting there, getting around, the coastal layout and what makes Korea's second city different from Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7e2bf8c38fe0fc6578d44ab745f0c670e9d6e95a3ce416f66be64607691c319.jpg",
        fastFacts: [
          { icon: "Train", label: "Getting there from Seoul", value: "KTX, 2 hours 15 minutes direct, roughly ₩54,400" },
          { icon: "Plane", label: "Local airport", value: "Gimhae International Airport, with some direct international connections" },
          { icon: "Train", label: "Getting around", value: "Subway and buses, same T-money card as Seoul works here" },
          { icon: "MapPin", label: "Layout", value: "Spread along the coast — Haeundae, Gwangalli, Jagalchi and Gamcheon are in different districts, not walkable from each other" },
        ],
        sections: [
          {
            title: "Getting to Busan and Around the City",
            content: "Most visitors reach Busan by **KTX** from Seoul (2 hours 15 minutes direct), though **Gimhae International Airport** also runs some direct international routes, useful if Busan is a standalone trip rather than an add-on to Seoul. Within the city, Busan's **subway network** covers the major districts — Haeundae, Seomyeon (the central business and nightlife hub), Nampo-dong (near Jagalchi) and Gamcheon are all subway- or short-bus-reachable — and the same **T-money card** used in Seoul works here without needing a separate card.\n\nBusan's layout is genuinely spread out along the coast rather than compact like central Seoul; Haeundae and Jagalchi/Gamcheon sit a meaningful subway ride apart, so plan days by geographic cluster rather than trying to zigzag across the city.",
          },
          {
            title: "The City's Coastal Identity, and What Sets It Apart from Seoul",
            content: "Busan is Korea's largest port city and second-largest overall, and its identity is built around that coastline far more than Seoul's river-adjacent but inland character — beaches, a working fish market, a mountainside former-refugee neighborhood turned arts district, and a coastal temple define Busan's sightseeing in a way that has no real Seoul equivalent. The city also carries a distinct Korean War history as the wartime provisional capital and a major refugee destination, which shaped neighborhoods like Gamcheon Culture Village directly.\n\nPace tends to feel slightly slower and less dense than Seoul, and the local Gyeongsang-dialect Korean sounds noticeably different to anyone who's spent time listening to Seoul-dialect Korean first, though this doesn't affect English signage or tourist navigation.",
            tourCard: { slug: "busan-local-food-experience-korean-pancake-cooking", title: "Busan Local Food Experience & Korean Pancake Cooking", description: "A hands-on introduction to Busan's own food identity, distinct from Seoul's.", price: "From $77", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/058ceb394d9c137736b85c72ad83cb6c037275c80186b7ae384baaad3ecd87d9.png" },
          },
          {
            title: "Practical Notes: Entry Rules and Where to Stay",
            content: "Entry rules are identical to the rest of South Korea — the same K-ETA exemption (extended through December 31, 2026 for 67 nationalities) and mandatory e-Arrival Card apply whether you land in Seoul or fly directly into Gimhae. For accommodation, **Haeundae** is the obvious choice if beach access and a resort-like strip of restaurants matter most, while **Seomyeon** or **Nampo-dong** put you closer to Jagalchi Market, Gamcheon Culture Village and the city's more local, less beach-resort feel.\n\nBudget at least two full days if Busan is a standalone destination rather than a Seoul day trip — the coastal spread genuinely needs that much time to cover Haeundae, Gamcheon and Jagalchi without rushing.",
          },
        ],
        faqs: [
          { q: "How do I get from Seoul to Busan?", a: "KTX high-speed train is the standard choice, covering the direct route in 2 hours 15 minutes for roughly ₩54,400. Gimhae International Airport also offers some direct international flights for a standalone Busan trip." },
          { q: "Do the same visa rules apply to Busan as Seoul?", a: "Yes — South Korea's entry rules, including the current K-ETA exemption and mandatory e-Arrival Card, apply nationwide regardless of which city you fly into." },
          { q: "Where should I stay in Busan?", a: "Haeundae for beach access and a resort-like strip of restaurants, or Seomyeon/Nampo-dong for easier access to Jagalchi Market and Gamcheon Culture Village." },
          { q: "How many days do I need in Busan?", a: "At least two full days if it's a standalone trip — the city's coastal spread between Haeundae, Gamcheon and Jagalchi needs that much time to see properly." },
        ],
      };

    case "busan-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Busan Itinerary (2026): What's Actually Possible",
        description: "A realistic single-day Busan itinerary built around Gamcheon Village, Jagalchi Market and a Haeundae evening — honest about what fits and what doesn't.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        sections: [
          {
            title: "Morning: Gamcheon Culture Village",
            content: "Start early at **Gamcheon Culture Village**, before both the heat and the crowds build on the steep hillside alleys — the pastel houses photograph best in soft morning light, and the climb is genuinely easier when it isn't baking midday sun. Budget about two hours for a thorough wander, including the small art installations and viewpoints tucked throughout the village.",
            tourCard: { slug: "beach-train-gamcheon-village-and-oryukdo-skywalk", title: "Beach Train, Gamcheon Village and Oryukdo Skywalk from Busan", description: "A morning combining the village with a scenic coastal beach-train ride.", price: "From $89", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ffce1bd51f5a6df83a4bc835522f7f1a07841578ebaf24e57efbd459d340d927.jpg" },
          },
          {
            title: "Midday: Jagalchi Market for Lunch",
            content: "Head to **Jagalchi Market** for lunch — browse the live and dried seafood stalls on the ground floor, then eat fresh sashimi, grilled fish or a seafood stew at one of the upstairs restaurants that will cook what you've just bought. It's Busan's single best lunch stop and close enough to Gamcheon by subway or taxi to fit naturally into the day's first half.",
          },
          {
            title: "Evening: Haeundae Beach and Dinner",
            content: "Spend the afternoon and evening at **Haeundae Beach** — a walk along the sand, the Sky Capsule cable car if you want the elevated coastal view, and dinner at one of the many restaurants lining the beachfront strip. If you'd rather end the day on the water instead, swap in a sunset or night yacht tour for a different angle on the same stretch of coast.\n\n**The honest tradeoff of a one-day itinerary:** Haedong Yonggungsa's coastal temple and a proper Gwangalli nightlife evening won't both fit alongside Gamcheon and Jagalchi. If the temple matters more to you, swap it in for the second half of the day and save Haeundae for a longer stay — Busan genuinely benefits from 2+ days if your schedule allows it.",
            tourCard: { slug: "busan-night-views-tour-with-yacht-ride-and", title: "Busan: Night Views Tour with Yacht Ride and Fireworks", description: "An evening alternative to a beachfront dinner, seeing Haeundae's skyline from the water.", price: "From $228", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/928beadadd31968dd237c66c60408a6a05da367ecf83bc45c655d7524ed42650.jpg" },
          },
        ],
        faqs: [
          { q: "Can you see Busan in one day?", a: "You can realistically cover Gamcheon Village, a Jagalchi Market lunch and a Haeundae Beach evening in one focused day. Haedong Yonggungsa and a proper nightlife evening won't both fit — those need an additional day." },
          { q: "What's the best order for a Busan day trip?", a: "Gamcheon Village in the morning before the heat and crowds build, Jagalchi Market for lunch, then Haeundae Beach for the afternoon and evening." },
          { q: "Is Busan walkable between its main sights?", a: "No — Haeundae, Gamcheon and Jagalchi sit in different districts a subway or taxi ride apart, so plan transit time between stops rather than assuming a walkable city center." },
        ],
      };

    case "haeundae-beach-guide":
      return {
        title: "Haeundae Beach Guide 2026: What to Do, the Sky Capsule and When to Go",
        description: "Haeundae is Busan's most famous beach and most crowded one — here's how to actually enjoy it, including the Sky Capsule cable car and the best time to avoid peak crowds.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c895d2bf545e11bcb18babfbaed378fa5445cab12454d3b107553a9b434ccbb9.png",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Haeundae District, eastern Busan, near Haeundae Station" },
          { icon: "Waves", label: "Beach length", value: "About 1.5 kilometers of sand" },
          { icon: "Cable", label: "Sky Capsule", value: "An elevated cable car running along the coastline, a short walk from the main beach" },
          { icon: "Clock", label: "Crowd peak", value: "July-August weekends; early morning or weekday visits are far calmer" },
        ],
        sections: [
          {
            title: "Why Haeundae Is Busan's Signature Beach",
            content: "**Haeundae Beach**, roughly 1.5 kilometers of sand backed by a dense strip of high-rise hotels and restaurants, is the beach most visitors picture when they think of Busan, and it earns that reputation through sheer scale and accessibility — it's a short subway ride from central Busan, and the surrounding neighborhood has built an entire resort-town identity around it. In summer it's genuinely crowded, closer to a festival atmosphere than a quiet seaside walk, which is either the appeal or the drawback depending on what you're after.\n\nOutside peak summer weekends, particularly early morning, the same stretch of sand is noticeably calmer and better suited to an actual relaxing walk rather than navigating a packed beach towel patchwork.",
          },
          {
            title: "The Sky Capsule and Other Things to Do Beyond Swimming",
            content: "The **Haeundae Sky Capsule**, an elevated cable car running along a section of the coastline, gives an aerial view of the beach and coast that's worth the ride even outside swimming season, with both a standard and a transparent-floor capsule option at different price points. The adjacent **Dalmaji Hill** offers a quieter coastal walking and cafe-hopping alternative above the beach itself, and the **Haeundae Beach Train**, a scenic seaside tram, connects the area toward Songjeong and Daritdol Skywalk further along the coast for visitors wanting to extend the trip.\n\nWater sports rental (jet skis, banana boats) operate seasonally along the beach in summer for anyone wanting more than a swim.",
            tourCard: { slug: "haeundae-beach-yonggungsa-boat-tour", title: "Busan: Haedong Yonggungsa & Haeundae", description: "Haeundae paired with the nearby coastal temple in one guided outing.", price: "From $135", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c895d2bf545e11bcb18babfbaed378fa5445cab12454d3b107553a9b434ccbb9.png" },
          },
          {
            title: "When to Go and Getting There",
            content: "**July-August weekends** are the single busiest window by a wide margin; if swimming specifically isn't the priority, late spring or early autumn gives a noticeably more pleasant walking and photography experience. **Haeundae Station** on Busan's subway puts you a short walk from the main beach, and the surrounding area is dense enough with restaurants and convenience stores that no advance food planning is needed.\n\nFor an evening alternative that skips the beach crowd entirely, a night yacht tour off the coast gives the same skyline from the water, with Gwangalli's Diamond Bridge visible further along the coastline.",
            tourCard: { slug: "busan-day-trip-to-haeundae-sky-capsule-yonggungsa", title: "Busan: Day Trip to Haeundae Sky Capsule & Yonggungsa Temple", description: "The Sky Capsule ride bundled with the coastal temple visit in a single half-day.", price: "From $28", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea6b12d36ba6e580fbaaccfc6ba380582658f36b52e98713e5f29e7b60c17815.jpg" },
          },
        ],
        faqs: [
          { q: "Is Haeundae Beach always crowded?", a: "It's genuinely busy on summer weekends, July-August especially, but early mornings and the shoulder seasons (late spring, early autumn) are noticeably calmer." },
          { q: "What is the Haeundae Sky Capsule?", a: "An elevated cable car running along the coastline near the beach, with standard and transparent-floor capsule options, giving an aerial view of the coast." },
          { q: "How do I get to Haeundae Beach?", a: "Haeundae Station on Busan's subway is a short walk from the main beach, with the surrounding district dense with hotels and restaurants." },
          { q: "What else is there to do near Haeundae besides swimming?", a: "The Sky Capsule cable car, Dalmaji Hill's quieter coastal walk, the Haeundae Beach Train toward Songjeong, and seasonal water sports rentals in summer." },
        ],
      };

    case "gamcheon-culture-village-guide":
      return {
        title: "Gamcheon Culture Village Guide 2026: Korea's 'Machu Picchu,' and How to Visit Respectfully",
        description: "Gamcheon's pastel hillside houses are one of Busan's most photographed sights, but it's also a real, still-lived-in neighborhood with a genuine refugee history. Here's how to visit it properly.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        fastFacts: [
          { icon: "Palette", label: "Nickname", value: "Korea's 'Machu Picchu' or 'Santorini,' for its cascading pastel houses" },
          { icon: "History", label: "Origin", value: "Settled by Korean War refugees in the 1920s-30s and post-war era, later a government-funded urban-regeneration project" },
          { icon: "Home", label: "Status today", value: "A genuine, still-residential neighborhood, not a built attraction" },
          { icon: "MapPin", label: "Getting there", value: "Short bus or taxi ride from Toseong Station, no direct subway stop at the village itself" },
        ],
        sections: [
          {
            title: "A Refugee Settlement Turned Cultural District",
            content: "**Gamcheon Culture Village** began as a settlement area in the 1920s and 1930s, when Busan's city administration relocated its poorer Korean population to a hillside location away from the port but still close enough to supply labor to it, and the neighborhood grew significantly again as a destination for refugees during and after the Korean War. For decades it remained a simple, dense hillside residential area; it was only later reborn as a cultural and arts hub when the district received government urban-regeneration funding, adding murals, small sculptures and art installations throughout the existing alleys rather than replacing the housing itself.\n\nThat history matters for how you approach a visit: this is genuinely still a residential neighborhood, not a recreated attraction, and the same etiquette that applies at Seoul's Bukchon Hanok Village applies here — quiet voices, no peering into private homes, and respect for the fact that people live behind the photogenic doors.",
          },
          {
            title: "What to Actually Do There",
            content: "The village is built for slow wandering rather than a checklist — narrow stairways and alleys wind between the pastel-painted houses, punctuated by small art installations (a well-known Little Prince and fox statue is one of the most-photographed) and a handful of cafes and craft shops run by residents. A **stamp tour map**, available at the entrance information center, marks a self-guided route past the village's main art pieces and viewpoints, useful if you want structure without needing a formal guided tour.\n\nThe steep stairs and uneven paths mean comfortable walking shoes matter more here than almost anywhere else on a typical Busan itinerary — this isn't a flat, easy stroll.",
            tourCard: { slug: "busan-tour-gamcheon-village-yonggungsa-temple", title: "Busan Tour: Gamcheon Village & Yonggungsa Temple + Lunch", description: "A guided Gamcheon visit paired with the coastal temple and lunch included.", price: "From $208", duration: "5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e27d5add2a26b2a144a86a71d24168b477c8bbb9a8288d2a1d9ac0610f8bfa0.png" },
          },
          {
            title: "Getting There and Pairing It With Other Sights",
            content: "Gamcheon doesn't have a direct subway stop; most visitors take a short bus or taxi ride from **Toseong Station** on Busan's subway, with signage and local shuttle buses specifically marked for the village from the station area. It pairs naturally with **Jagalchi Market**, a short distance away on the same side of the city, making a Gamcheon-then-Jagalchi half-day a genuinely efficient combination rather than requiring separate trips.\n\nMorning visits avoid both the day's heat and the tour-bus crowds that build from late morning onward, and give the pastel houses their best light for photos.",
            tourCard: { slug: "busan-jagalchi-market-gamcheon-village-walking", title: "Busan: Jagalchi Market & Gamcheon Village Walking Tour", description: "Both of Busan's signature sights combined into a single guided walk.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
        ],
        faqs: [
          { q: "Why is Gamcheon Culture Village called Korea's Machu Picchu?", a: "Because of its cascading pastel-colored houses climbing a steep hillside, visually resembling the terraced look of Machu Picchu — the comparison to Santorini also circulates for the same reason." },
          { q: "Is Gamcheon Culture Village a real neighborhood?", a: "Yes — it originated as a settlement for Korea's poorer population in the 1920s-30s and later Korean War refugees, and remains a genuine, still-residential neighborhood today despite its cultural-district rebrand." },
          { q: "How do I get to Gamcheon Culture Village?", a: "Take the subway to Toseong Station, then a short bus or taxi ride — there's no direct subway stop at the village itself." },
          { q: "Is Gamcheon Culture Village hard to walk around?", a: "It involves genuinely steep stairs and uneven alleys, more physically demanding than most Busan sightseeing, so wear proper walking shoes rather than sandals." },
        ],
      };

    case "jagalchi-fish-market-guide":
      return {
        title: "Jagalchi Fish Market Guide 2026: Korea's Largest Seafood Market Explained",
        description: "Jagalchi is Korea's biggest seafood market and one of Busan's essential food stops — here's how to browse, buy and eat there without feeling lost.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b956fe1c7404209d99fd39fd66a55e5ee559cc82eaa908da151fec3bb53e1e4.jpg",
        fastFacts: [
          { icon: "MapPin", label: "Location", value: "Jung-gu, on Busan's shoreside road, near Jagalchi Station" },
          { icon: "Fish", label: "What it is", value: "Korea's largest seafood market, selling live and dried fish" },
          { icon: "Users", label: "Known for", value: "'Jagalchi ajumma' — the market's traditionally female vendors" },
          { icon: "Utensils", label: "How to eat", value: "Buy seafood downstairs, then have it prepared at an upstairs restaurant for a small fee" },
        ],
        sections: [
          {
            title: "What Makes Jagalchi Different from a Typical Market",
            content: "**Jagalchi Market**, on the shoreside road in Busan's Jung-gu district, is Korea's **largest seafood market**, solidifying its role in the local economy especially after the Korean War, when it became a central hub for the fish trade. Its vendors are traditionally and still predominantly women, locally known as **'Jagalchi ajumma'** — a term of respect for middle-aged and married women that's become closely tied to the market's identity and history.\n\nThe ground-floor stalls hold both live seafood in tanks (octopus, crab, abalone, various fish) and dried goods, and the sheer density and noise of a working wholesale-adjacent market is part of the experience, not a drawback.",
          },
          {
            title: "How the 'Buy Downstairs, Eat Upstairs' System Works",
            content: "The market's signature system is straightforward once you know it: pick your seafood from a downstairs stall, agree a price, and the vendor will either prepare it on the spot or direct you to one of the **upstairs restaurants**, where the fish you bought gets cooked or sliced as sashimi for a separate small preparation fee. It's a genuinely interactive way to eat rather than ordering off a fixed menu, and vendors are generally used to tourists navigating this for the first time, even without a shared language.\n\nIf picking your own seafood feels intimidating on a first visit, a guided market walk removes that friction and usually includes a tasting without requiring you to negotiate anything yourself.",
            tourCard: { slug: "busan-night-tour-with-jagalchi-market-and-skywalk", title: "Busan: Night Tour with Jagalchi Market and Skywalk", description: "A guided evening visit to Jagalchi paired with a coastal skywalk stop.", price: "From $98", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b956fe1c7404209d99fd39fd66a55e5ee559cc82eaa908da151fec3bb53e1e4.jpg" },
          },
          {
            title: "Getting There and What Else to Pair It With",
            content: "**Jagalchi Station** on Busan's subway sits right at the market's doorstep, and the area connects easily on foot to **Nampo-dong's** shopping streets and the nearby **BIFF Square**, the historic home of the Busan International Film Festival's street-level activity, making a Jagalchi-Nampo-dong half-day a natural combination. It's also a short distance from the ferry terminal connecting to Yeongdo Island, if a quieter coastal walk afterward appeals.\n\nMornings bring the freshest selection and the most authentic working-market atmosphere, before the midday tourist-tour volume builds; an evening visit trades some of that for the market's night-lit exterior stalls and a livelier Nampo-dong nightlife handoff afterward.",
            tourCard: { slug: "busan-bites-food-tour-with-10-tastings", title: "Busan Bites Food Tour with 10+ Tastings", description: "A guided food crawl that includes Jagalchi alongside other Busan food stops.", price: "From $114", duration: "3.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/347d35bea00bcf482b619cf80c8ef11ae07547c04664a9d41f605552cdfabeb4.jpg" },
          },
        ],
        faqs: [
          { q: "What is Jagalchi Market known for?", a: "Being Korea's largest seafood market, selling both live and dried fish, and for its traditionally female vendors known as 'Jagalchi ajumma.'" },
          { q: "How does eating at Jagalchi Market work?", a: "Buy seafood at a downstairs stall, then take it to one of the upstairs restaurants, where it's prepared or sliced for a separate small fee — a genuinely interactive system rather than a fixed menu." },
          { q: "How do I get to Jagalchi Market?", a: "Jagalchi Station on Busan's subway sits right at the market's entrance." },
          { q: "What's the best time to visit Jagalchi Market?", a: "Morning for the freshest selection and most authentic working atmosphere; evening for a livelier, more lit-up visit that connects naturally into Nampo-dong's nightlife." },
        ],
      };

    case "busan-food-guide":
      return {
        title: "Busan Food Guide 2026: Seafood, Milmyeon and What's Actually Different from Seoul",
        description: "Busan's food identity runs on seafood and its own Korean War-era dishes — here's what to actually eat that you won't get the same way in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/058ceb394d9c137736b85c72ad83cb6c037275c80186b7ae384baaad3ecd87d9.png",
        fastFacts: [
          { icon: "Fish", label: "Signature category", value: "Fresh seafood, centered on Jagalchi Market" },
          { icon: "Utensils", label: "Local specialty", value: "Milmyeon — cold wheat noodles, a Korean War-era refugee dish" },
          { icon: "Utensils", label: "Also try", value: "Dwaeji gukbap (pork and rice soup), ssiat hotteok (seed-filled sweet pancake)" },
          { icon: "MapPin", label: "Where to eat it", value: "Jagalchi Market, Seomyeon and Busan's own gukbap-street clusters" },
        ],
        sections: [
          {
            title: "Seafood Is the Obvious Starting Point",
            content: "Busan's status as Korea's largest port city makes fresh seafood the backbone of its food identity, most visibly at **Jagalchi Market**, where you buy fish or shellfish downstairs and have it prepared upstairs, but also across countless smaller seafood restaurants throughout the city that don't require the market's full browse-and-negotiate ritual. Raw fish (hoe), grilled mackerel and eel, and seafood-based stews and hot pots all show up constantly on menus here in a way that's noticeably more central than in Seoul's more varied, less coastal-dependent food scene.\n\nA guided food tour that stops at multiple seafood-adjacent spots is a good way to sample widely without committing an entire meal to a single dish you might not love.",
            tourCard: { slug: "busan-bites-food-tour-with-10-tastings", title: "Busan Bites Food Tour with 10+ Tastings", description: "A wide sampler across Busan's seafood and street-food specialties in one guided outing.", price: "From $114", duration: "3.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/347d35bea00bcf482b619cf80c8ef11ae07547c04664a9d41f605552cdfabeb4.jpg" },
          },
          {
            title: "Milmyeon and Busan's Korean War Food History",
            content: "**Milmyeon**, cold wheat noodles served in a chilled broth, is Busan's own distinct answer to Pyongyang-style naengmyeon (buckwheat cold noodles) — the dish emerged during the Korean War era, when wartime wheat flour supplies (often from US aid) were more available in refugee-packed Busan than the buckwheat traditionally used further north, and local cooks adapted accordingly. It's a specifically Busan dish rather than a regional variation of something found everywhere in Korea, and worth seeking out at a dedicated milmyeon restaurant rather than assuming any noodle shop serves an equivalent version.\n\n**Dwaeji gukbap**, a pork and rice soup, carries similar wartime-refugee-cuisine roots and remains a Busan comfort-food staple, sold at dedicated 'gukbap street' clusters in a few neighborhoods around the city.",
          },
          {
            title: "Street Food and Where to Find It",
            content: "**Ssiat hotteok**, a version of the sweet filled pancake stuffed with seeds and nuts rather than the more common cinnamon-sugar filling found elsewhere in Korea, is a Busan street-food specialty particularly associated with the BIFF Square area. Beyond that, Busan's markets and beach-area food stalls carry the same broader Korean street-food staples found in Seoul — tteokbokki, fish cakes, hotteok — but seafood-adjacent versions (seafood pancakes, grilled squid) show up more often here given the city's coastal supply.\n\nSeomyeon, Busan's central business and entertainment hub, has the densest concentration of restaurants if you want a wide choice without traveling toward the coast specifically for a meal.",
            tourCard: { slug: "busan-local-food-experience-korean-pancake-cooking", title: "Busan Local Food Experience & Korean Pancake Cooking", description: "A hands-on cooking session covering Busan's own take on the Korean pancake.", price: "From $77", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/058ceb394d9c137736b85c72ad83cb6c037275c80186b7ae384baaad3ecd87d9.png" },
          },
        ],
        faqs: [
          { q: "What food is Busan known for?", a: "Fresh seafood centered on Jagalchi Market, plus milmyeon (cold wheat noodles) and dwaeji gukbap (pork and rice soup), both Korean War-era dishes specific to the city." },
          { q: "What is milmyeon and how is it different from naengmyeon?", a: "Milmyeon is Busan's wheat-noodle version of cold noodle soup, developed during the Korean War when wheat flour was more available locally than the buckwheat used in Pyongyang-style naengmyeon." },
          { q: "Where can I find Busan's best local food?", a: "Jagalchi Market for seafood, dedicated gukbap-street clusters for dwaeji gukbap, and Seomyeon for the widest general restaurant selection." },
          { q: "What is ssiat hotteok?", a: "A Busan street-food specialty — a sweet filled pancake stuffed with seeds and nuts rather than the more common cinnamon-sugar filling, especially associated with the BIFF Square area." },
        ],
      };

    case "seoul-to-busan-ktx-guide":
      return {
        title: "Seoul to Busan KTX Guide 2026: Times, Fares and How to Book",
        description: "The KTX high-speed train is the fastest practical way between Seoul and Busan — here's exactly how long it takes, what it costs, and how to book it.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7e2bf8c38fe0fc6578d44ab745f0c670e9d6e95a3ce416f66be64607691c319.jpg",
        fastFacts: [
          { icon: "Clock", label: "Direct journey time", value: "2 hours 15 minutes" },
          { icon: "Clock", label: "With stops (Daejeon/Daegu)", value: "2 hours 30 to 2 hours 45 minutes" },
          { icon: "DollarSign", label: "Standard fare", value: "Roughly ₩54,400 one-way" },
          { icon: "MapPin", label: "Stations", value: "Seoul Station to Busan Station, both in their respective city centers" },
        ],
        sections: [
          {
            title: "How Fast and How Much the KTX Actually Is",
            content: "A **direct KTX** service covers the roughly 325-kilometer route between **Seoul Station** and **Busan Station** in **2 hours 15 minutes**, while trains making stops at Daejeon and/or Daegu along the way take **2 hours 30 to 2 hours 45 minutes** instead. Standard-class fare runs around **₩54,400** one-way as of late 2026 — reduced from ₩59,800 after Korail and the former SR operator merged their high-speed services on September 1, 2026 — with first class costing more for a roomier 2+1 seat layout instead of standard's 2+2.\n\nBoth endpoint stations sit in the center of their respective cities, unlike an airport, so there's no additional transfer time to budget beyond the train journey itself.",
            tourCard: { slug: "from-seoul-busan-premium-ktx-4-day-tour-with", title: "From Seoul: Busan Premium KTX 4-Day Tour with Private Guide", description: "The KTX leg bundled into a full guided multi-day Seoul-to-Busan trip.", price: "From $2909", duration: "4 days", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d7e2bf8c38fe0fc6578d44ab745f0c670e9d6e95a3ce416f66be64607691c319.jpg" },
          },
          {
            title: "Schedule and Booking",
            content: "KTX trains between Seoul and Busan run frequently, departing roughly **every 20-30 minutes during peak hours**, with Seoul Station services running from about **5:15am to 10:30pm**. Reserved seating is standard on KTX, unlike some regional or metro-style trains — book your seat through Korail's official booking platform or a major third-party booking site, and plan to book a few days ahead for a specific popular departure time (early morning, Friday evening, holiday weekends), even though same-day tickets are often available for less popular time slots.\n\nArrive at the station with enough buffer for security and finding your platform, similar to any major train system, though Korean stations generally move faster through this process than airport security.",
          },
          {
            title: "What to Do Once You Arrive",
            content: "Busan Station connects directly to the local subway system, and the same **T-money card** used on Seoul's transit works here without needing anything separate. If you're arriving for a single focused day trip, Haeundae Beach, Gamcheon Culture Village and Jagalchi Market are all realistic within a day via the local subway and short taxi rides, though an overnight stay gives the trip more breathing room and lets you catch Busan's evening and nightlife scene properly rather than rushing for the last train back.",
          },
        ],
        faqs: [
          { q: "How long is the KTX from Seoul to Busan?", a: "2 hours 15 minutes for a direct train; 2 hours 30 to 2 hours 45 minutes for trains stopping at Daejeon or Daegu along the way." },
          { q: "How much does the KTX cost?", a: "Roughly ₩54,400 for standard class one-way as of late 2026, following a fare reduction after Korail and SR's high-speed services merged on September 1, 2026." },
          { q: "Do I need to book KTX tickets in advance?", a: "Reserved seating is standard, and booking a few days ahead is worth it for popular departure times, though same-day tickets are often available for less popular slots." },
          { q: "Does my T-money card work in Busan after arriving by KTX?", a: "Yes — the same T-money card used in Seoul works on Busan's local subway and buses without needing a separate card." },
        ],
      };

    case "busan-nightlife-guide":
      return {
        title: "Busan Nightlife Guide 2026: BIFF Square, Gwangalli and the Beach-City Scene",
        description: "Busan's nightlife runs on a beach-city rhythm different from Seoul's — here's how BIFF Square, Gwangalli's bar strip and the city's yacht and rooftop options actually fit together.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fd933d16204d4be426eaf525c290841273572ea1e3169cb0e88f30e9e445fd9e.jpeg",
        fastFacts: [
          { icon: "MapPin", label: "Main areas", value: "BIFF Square (Nampo-dong), Gwangalli Beach strip, Seomyeon, Haeundae" },
          { icon: "Clock", label: "Peak hours", value: "10pm onward, especially Friday and Saturday" },
          { icon: "Waves", label: "Busan's specific angle", value: "Yacht and night-cruise options not available the same way in landlocked Seoul districts" },
          { icon: "Film", label: "BIFF connection", value: "BIFF Square takes its name from the Busan International Film Festival's historic street-level home" },
        ],
        sections: [
          {
            title: "BIFF Square and Nampo-dong: The Historic Entertainment Core",
            content: "**BIFF Square**, in the Nampo-dong district, takes its name from the **Busan International Film Festival**, whose early editions were held in and around this street before the festival's main venues moved elsewhere — the area retains a dense cluster of bars, street food and a cinema-and-entertainment-district feel even outside festival dates. It sits close enough to Jagalchi Market that an evening bar crawl here naturally follows a seafood dinner without needing to relocate across the city.\n\nA guided nightscape walk through BIFF Square and nearby waterfront spots like The Bay 101 gives a structured first-night introduction if you'd rather not guess which bars are worth your time on arrival.",
            tourCard: { slug: "busan-nightscape-experience-from-biff-square-to", title: "Busan Nightscape Experience: From BIFF Square to The Bay 101", description: "A guided evening linking BIFF Square's historic entertainment core to the city's modern waterfront nightlife.", price: "From $546", duration: "3 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d66ba674c9946e105ba898ba5ba80f1c0ddf51e30ce2bdb462968fd8cc24cc9d.jpg" },
          },
          {
            title: "Gwangalli's Bar Strip and the Diamond Bridge Backdrop",
            content: "**Gwangalli Beach's** bar and restaurant strip runs along the sand with a direct, lit-up view of the **Gwangandaegyo (Diamond) Bridge**, making it arguably the single best backdrop for an evening drink anywhere in the city. It's generally a more relaxed, scenic register than a full nightclub crawl — rooftop bars and beachfront seating rather than loud dance floors — though dedicated nightclub options exist nearby for anyone wanting a louder night.\n\nHaeundae's own restaurant-and-bar strip offers a similar beachfront evening a short distance away, with Haeundae trading some of Gwangalli's quieter local feel for a busier, more resort-town atmosphere.",
          },
          {
            title: "Busan's Own Angle: The Water",
            content: "What genuinely sets Busan's nightlife apart from Seoul's is the **coastline itself** — night yacht tours and cruises along Haeundae and Gwangalli's lit-up shoreline, sometimes paired with fireworks on specific nights, give an evening option with no real landlocked-Seoul equivalent. For a louder, more conventional night out, dedicated **nightclub crawls** operate in the city's main entertainment districts, typically bundling multiple venues and skip-the-line entry into a single booked evening.\n\nWhichever register you want, Busan's nightlife spreads across more distinct neighborhoods than Seoul's Hongdae-centric scene, so pick a district based on the kind of evening you want rather than assuming one area covers everything.",
            tourCard: { slug: "busan-nightclub-crawl-dance-drink-party-all-night", title: "Busan: Nightclub Crawl, Dance & Drink & Party All Night!", description: "A multi-venue nightclub crawl for a louder, more conventional night out.", price: "From $142", duration: "5 hours", rating: "4.5", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fd933d16204d4be426eaf525c290841273572ea1e3169cb0e88f30e9e445fd9e.jpeg" },
          },
        ],
        faqs: [
          { q: "What is BIFF Square?", a: "A street-level entertainment district in Nampo-dong named for the Busan International Film Festival, whose early editions were held there. It remains a dense cluster of bars and street food today." },
          { q: "Where is the best nightlife area in Busan?", a: "It depends on the vibe — Gwangalli for a scenic bar strip with Diamond Bridge views, BIFF Square/Nampo-dong for a historic entertainment core near Jagalchi, or a dedicated nightclub crawl for a louder night." },
          { q: "What makes Busan's nightlife different from Seoul's?", a: "The coastline — night yacht tours and cruises along the lit-up shoreline give Busan an evening option Seoul's landlocked nightlife districts simply can't offer." },
          { q: "When is Busan's nightlife busiest?", a: "From around 10pm onward, peaking Friday and Saturday nights, similar to Seoul's rhythm." },
        ],
      };

    case "best-tours-in-busan":
      return {
        title: "Best Tours in Busan — 2026, Honestly Compared",
        seoTitle: "Best Tours in Busan 2026: Top-Rated Picks by Category",
        description: "The best Busan tours for 2026, picked by category — Gamcheon Culture Village, Jagalchi Market, Haeundae Beach and Yonggungsa Temple, and a local food experience — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "**Gamcheon Culture Village and Jagalchi Market** combined into one guided walk is Busan's single best half-day — the cascading pastel houses (Korea's 'Machu Picchu') followed by Korea's largest seafood market for lunch.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "busan-jagalchi-market-gamcheon-village-walking", title: "Busan: Jagalchi Market & Gamcheon Village Walking Tour", description: "Both of Busan's signature sights combined into a single guided walk.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
          {
            title: "Best Coastal Experience: Haeundae & Yonggungsa",
            content: "**Haedong Yonggungsa**, a coastal temple built directly on the rocks above the sea, paired with Haeundae Beach, is Busan's best combination of nature and culture — go in the morning or shoulder season to avoid the July-August weekend crowds.",
            tourCard: { slug: "haeundae-beach-yonggungsa-boat-tour", title: "Busan: Haedong Yonggungsa & Haeundae", description: "Haeundae paired with the nearby coastal temple in one guided outing.", price: "From $135", duration: "4 hours", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c895d2bf545e11bcb18babfbaed378fa5445cab12454d3b107553a9b434ccbb9.png" },
          },
          {
            title: "Best Food Experience",
            content: "A **Korean pancake cooking session** paired with other Busan-specific dishes is a hands-on introduction to the city's own food identity — distinct from Seoul's, built around milmyeon (cold wheat noodles) and dwaeji gukbap, both Korean War-era dishes specific to Busan.",
            tourCard: { slug: "busan-local-food-experience-korean-pancake-cooking", title: "Busan Local Food Experience & Korean Pancake Cooking", description: "A hands-on introduction to Busan's own food identity, distinct from Seoul's.", price: "From $77", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/058ceb394d9c137736b85c72ad83cb6c037275c80186b7ae384baaad3ecd87d9.png" },
          },
          {
            title: "Best Evening Experience",
            content: "A **night yacht tour with fireworks** seeing Haeundae's skyline from the water is the best evening alternative to a beachfront dinner — Gwangalli's Diamond Bridge is visible further along the coastline.",
            tourCard: { slug: "busan-night-views-tour-with-yacht-ride-and", title: "Busan: Night Views Tour with Yacht Ride and Fireworks", description: "An evening alternative to a beachfront dinner, seeing Haeundae's skyline from the water.", price: "From $228", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/928beadadd31968dd237c66c60408a6a05da367ecf83bc45c655d7524ed42650.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Busan tours](/south-korea/busan)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Busan?", a: "Gamcheon Culture Village combined with Jagalchi Market in one guided walk — the cascading pastel houses followed by Korea's largest seafood market for lunch." },
          { q: "Is Haeundae Beach worth visiting?", a: "Yes, especially paired with the nearby Haedong Yonggungsa coastal temple. Avoid July-August weekends if swimming isn't the priority — late spring or early autumn is noticeably calmer." },
          { q: "What food should I try in Busan specifically?", a: "Milmyeon (cold wheat noodles) and dwaeji gukbap (pork and rice soup) — both Korean War-era dishes specific to Busan, distinct from Seoul's food culture." },
          { q: "Can you see Busan in one day?", a: "You can cover Gamcheon Village, a Jagalchi Market lunch and a Haeundae Beach evening in one focused day, but Haedong Yonggungsa and nightlife won't both fit." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Busan?", "acceptedAnswer": { "@type": "Answer", "text": "Gamcheon Culture Village combined with Jagalchi Market in one guided walk." } },
                { "@type": "Question", "name": "Is Haeundae Beach worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially paired with the nearby Haedong Yonggungsa coastal temple." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Gamcheon + Jagalchi Market' },
          { icon: 'Waves', label: 'Best Coastal', value: 'Haeundae + Yonggungsa' },
          { icon: 'Moon', label: 'Best Evening', value: 'Night Yacht Tour' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-busan-tour-direct-or-through-app":
      return {
        title: "Should You Book a Busan Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Busan Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Busan tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA Gamcheon Village and Jagalchi Market walk or a night yacht tour involves real logistics — how much walking the village hills actually involve, whether the fireworks are weather-dependent. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "busan-jagalchi-market-gamcheon-village-walking", title: "Busan: Jagalchi Market & Gamcheon Village Walking Tour", description: "Ask how much walking the hillside village actually involves before you book.", price: "From $262", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the tour. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number found through a hotel desk is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the yacht tour or the Haeundae outing would know — whether fireworks are weather-dependent, or how crowded the beach gets in summer. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Busan tour — the [best tours in Busan](/south-korea/busan/best-tours-in-busan), the Gamcheon and Jagalchi walk, the Haeundae and Yonggungsa outing — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Busan; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "busan-night-views-tour-with-yacht-ride-and", title: "Busan: Night Views Tour with Yacht Ride and Fireworks", description: "Ask whether the fireworks display is weather-dependent before booking.", price: "From $228", duration: "2 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/928beadadd31968dd237c66c60408a6a05da367ecf83bc45c655d7524ed42650.jpg" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Busan tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book Busan tours direct with an operator?", a: "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Busan tour operator is legit before booking?", a: "Message them a specific question — the weather-dependency of a fireworks show, how hilly a walk is — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Busan tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Busan tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Busan tours direct with an operator?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Busan tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Busan tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    case "best-tours-in-seoul":
      return {
        title: "Best Tours in Seoul — 2026, Honestly Compared",
        seoTitle: "Best Tours in Seoul 2026: Top-Rated Picks by Category",
        description: "The best Seoul tours for 2026, picked by category — Gyeongbokgung with hanbok, the DMZ, Hongdae nightlife with Korean BBQ, Insadong culture and a K-pop experience — with real prices and an honest note on how we chose them.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "**Gyeongbokgung Palace in a rented hanbok** is Seoul's single most-visited experience — and the hanbok gets you free entry, which is a nice bonus on top of the photos. Pair it with the DMZ for the one experience you can't get anywhere else on Earth.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: { slug: "seoul-gyeongbokgung-tour-with-hanbok-as-a-king-or", title: "Seoul: Gyeongbokgung Tour with Hanbok as a King or Queen", description: "A guided palace walk with the hanbok rental and free-entry angle handled for you.", price: "From $340", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg" },
          },
          {
            title: "Best Unique Experience: the DMZ",
            content: "The **DMZ day trip** — the Third Infiltration Tunnel, Dora Observatory and Imjingak Park — is the single most-booked day trip from Seoul, and genuinely unlike anything else available anywhere. Note the JSA/Panmunjom blue-hut area has been closed to civilian tours since 2023; a standard DMZ tour covers everything currently open.",
            tourCard: { slug: "seoul-dmz-small-group-tour-with-lunch-north-korea", title: "Seoul: DMZ Small-Group Tour with Lunch & North Korea View", description: "A half-day DMZ tour timed to leave your afternoon free.", price: "From $129", duration: "5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43e4f501bad3975debe95bac8919a4e4e2045b5609d8340fdc276487c1c8c01a.png" },
          },
          {
            title: "Best Evening Out: Hongdae & Korean BBQ",
            content: "**Hongdae**, built around the gates of Hongik University, is Seoul's most reliable nightlife strip — indie music, street performances and affordable fashion. Pairing it with a proper sit-down Korean BBQ dinner (grilled meat cooked tableside, with banchan and soju) is the classic way to close out a Seoul day.",
            tourCard: { slug: "seoul-hongdae-indie-live-music-night-korean-bbq", title: "Seoul: Hongdae Indie Live Music Night & Korean BBQ Dinner", description: "A guided evening pairing a proper BBQ dinner with Hongdae's indie music scene.", price: "From $57", duration: "4 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a3c7bd3c113aadb41d2f84904d24696c89bc6d1f1d5babf6e2472c8ba9a17082.jpg" },
          },
          {
            title: "Best Cultural Walk: Insadong",
            content: "**Insadong**, the traditional-crafts and tea-house district, home to Jogyesa Temple (the center of Korean Seon Buddhism), is the slower, calmer counterpoint to Myeongdong and Hongdae — good for a mid-trip breather.",
            tourCard: { slug: "seoul-insadong-jogye-temple-cultural-guided", title: "Seoul: Insadong & Jogye Temple Cultural Guided Walking Tour", description: "The traditional-crafts district and its central Buddhist temple in one guided walk.", price: "From $68", duration: "2.5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5b2ff5b4df99e336e8fd31561f43c38a89fea5af32db715b593eb8d05e51188.png" },
          },
          {
            title: "Best for K-Pop Fans",
            content: "A dedicated **K-pop studio experience** — full styling, choreography and a video shoot, no dance background needed — is one of the more purely fun, photo-ready bookings in the city, and a genuine draw for fans beyond standard sightseeing.",
            tourCard: { slug: "be-a-k-pop-star-in-seoul-studio-recording", title: "Be a K-Pop Star in Seoul: Studio Recording, Makeup & Video", description: "A full K-pop styling, choreography and video-shoot experience, no dance background needed.", price: "From $379", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg" },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Seoul tours](/south-korea/seoul)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Seoul?", a: "Gyeongbokgung Palace in a rented hanbok — it's the single most-visited Seoul experience, and the hanbok gets you free palace entry as a bonus." },
          { q: "Is the DMZ day trip worth it?", a: "Yes for most visitors — it's a genuinely unusual experience available nowhere else, though the JSA blue-hut area has been closed to civilian tours since 2023, so a standard tour covers the Third Tunnel and observatory, not the JSA." },
          { q: "What is the best nightlife tour in Seoul?", a: "Hongdae paired with a proper Korean BBQ dinner — indie music and street performances plus the classic grilled-meat, banchan and soju evening." },
          { q: "Is there a good K-pop experience for fans?", a: "Yes — dedicated K-pop studio experiences with full styling, choreography and a video shoot, no dance background required." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Seoul?", "acceptedAnswer": { "@type": "Answer", "text": "Gyeongbokgung Palace in a rented hanbok, which also gets you free palace entry." } },
                { "@type": "Question", "name": "Is the DMZ day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a genuinely unusual experience, though the JSA area has been closed to civilian tours since 2023." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Gyeongbokgung + Hanbok' },
          { icon: 'Flag', label: 'Most Unique', value: 'DMZ Day Trip' },
          { icon: 'Moon', label: 'Best Nightlife', value: 'Hongdae + Korean BBQ' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-seoul-tour-direct-or-through-app":
      return {
        title: "Should You Book a Seoul Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Seoul Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Seoul tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA DMZ day trip or a hanbok palace visit involves real logistics — passport requirements at the DMZ checkpoint, hanbok sizing for a specific body type. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own contact or a polished app — you're booking blind either way.",
            tourCard: { slug: "seoul-dmz-small-group-tour-with-lunch-north-korea", title: "Seoul: DMZ Small-Group Tour with Lunch & North Korea View", description: "Ask about the exact passport/ID requirement for the DMZ checkpoint before booking.", price: "From $129", duration: "5 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43e4f501bad3975debe95bac8919a4e4e2045b5609d8340fdc276487c1c8c01a.png" },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the tour. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number found on a travel forum is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the hanbok palace walk or the K-pop studio session would know — hanbok sizing, or what happens if a dance session needs rescheduling. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Seoul tour — the [best tours in Seoul](/south-korea/seoul/best-tours-in-seoul), the Gyeongbokgung hanbok walk, the DMZ day trip — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Seoul; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: { slug: "seoul-gyeongbokgung-tour-with-hanbok-as-a-king-or", title: "Seoul: Gyeongbokgung Tour with Hanbok as a King or Queen", description: "Ask about hanbok sizing before booking.", price: "From $340", duration: "3 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg" },
          },
        ],
        faqs: [
          { q: "Is it better to book a Seoul tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book Seoul tours direct with an operator?", a: "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Seoul tour operator is legit before booking?", a: "Message them a specific question — a passport requirement for the DMZ, a hanbok sizing concern — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Seoul tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Seoul tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Seoul tours direct with an operator?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Seoul tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Seoul tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-10/31)
    case "how-much-should-a-private-tour-guide-cost-in-seoul":
      return {
        title: "How Much Should a Private Tour Guide Cost in Seoul?",
        seoTitle: "Seoul Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guide or interpreter in Seoul in 2026, by tour type, so you know what's fair before you book.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **private city tour** in Seoul (palaces, night views) typically starts around **$280-480 flat for 1-2 people**, stepping up roughly $250-350 for a third traveller. A **private airport layover tour from Incheon** runs similarly, **$320-520 for 1-2 people**. A **private day trip outside Seoul** (Nami Island, the DMZ, Suwon) runs **$280-620 for 1-2 people**, and a multi-day private tour with KTX train travel and hotels (Busan, Gyeongju) runs into the **$1,600-2,900+** range for the group. Specialty VIP tours with an interpreter or a Russian/other-language guide price noticeably higher, often $1,500+ even solo, since they're a different, premium product.",
            tourCard: { slug: "seoul-private-city-tour-with-palace-night-views", title: "Seoul: Private City Tour with Palace & Night Views", description: "A real example of standard private city-tour pricing that steps up for a third traveller.", price: "From $481", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg" },
          },
          {
            title: "Why the Price Range Is So Wide",
            content: "Seoul's \"private tour\" label covers a standard local guide, a VIP tour with a specific-language interpreter (Russian, Japanese) built for a specific traveller segment, and multi-day trips bundling KTX high-speed rail and hotels. The interpreter-led VIP tours price far above standard guided tours even for one person, because the guide's qualification (fluent in a less-common language) is the scarce resource being sold, not just their time.",
          },
          {
            title: "Red Flags on Price",
            content: "A private day-tour quote well under $280 for a full day with transport usually means a shorter route or a driver without real guiding commentary. For DMZ tours specifically, confirm whether a passport check and advance registration are actually arranged — a very cheap quote sometimes means a shortened itinerary that skips the harder-to-access DMZ sites.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly what's included — transport, meals, specific sites — and whether you need a standard guide or a specific-language interpreter. On AsiaByLocals, every Seoul tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Seoul tours](/south-korea/seoul) to compare real, current prices directly.",
            tourCard: { slug: "seoul-nami-island-private-day-tour-with-coex-cafe", title: "Seoul: Nami Island Private Day Tour with COEX & Café Pokpo", description: "A real example of a private day trip outside Seoul and its actual tiered price.", price: "From $364", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg" },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Seoul?", a: "A private city tour (palaces, night views) typically starts around $280-480 flat for 1-2 people. A private day trip outside Seoul runs $280-620 for 1-2 people." },
          { q: "Why do VIP interpreter-led Seoul tours cost so much more?", a: "The guide's language qualification (Russian, Japanese, etc.) is the scarce resource, not just their time, so these price well above standard guided tours even for a solo traveller." },
          { q: "Is a very cheap private day-tour quote in Seoul a red flag?", a: "Often yes — it can mean a shorter route or a driver without real guiding commentary, and for DMZ tours specifically, a shortened itinerary that skips harder-to-access sites." },
          { q: "What's usually included in a Seoul private tour price?", a: "Typically the guide's fee and private transport. Meals and specific site entrance fees are sometimes separate — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Seoul?", "acceptedAnswer": { "@type": "Answer", "text": "A private city tour typically starts around $280-480 flat for 1-2 people." } },
            { "@type": "Question", "name": "Why do VIP interpreter-led Seoul tours cost so much more?", "acceptedAnswer": { "@type": "Answer", "text": "The guide's language qualification is the scarce resource, not just their time." } },
            { "@type": "Question", "name": "Is a very cheap private day-tour quote in Seoul a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shorter route or a shortened DMZ itinerary." } },
            { "@type": "Question", "name": "What's usually included in a Seoul private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the guide's fee and private transport; meals and entrance fees are sometimes separate." } },
          ],
        },
      };

    // GEO single-topic page (2026-11-01)
    case "how-much-should-a-private-tour-guide-cost-in-busan":
      return {
        title: "How Much Should a Private Tour Guide Cost in Busan?",
        seoTitle: "Busan Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guide or cruise shore excursion in Busan in 2026, so you know what's fair before you book.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A **private cruise shore excursion** in Busan typically runs **$285-340 flat for 1-2 people**, stepping up roughly $140-170 per added traveller. A **private movie filming locations tour** runs similarly, **$233 solo**, roughly $117 per extra person. A **private full-day van tour** (hidden gems, temple, spa, East Coast with luge) runs **$519-665 flat for 1-2 people**. A **multi-day private South Korea tour** including Busan on a wider circuit (palaces, islands, beaches) runs **$364 solo**, scaling up per traveller since it includes multiple full days.",
            tourCard: { slug: "busan-cruise-shore-excursion-private-tour-with", title: "Busan Cruise Shore Excursion: Private Tour with Local Guide", description: "A real example of standard private shore-excursion pricing that steps up per added traveller.", price: "From $340", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
          {
            title: "Why Cruise Shore Excursions Price the Way They Do",
            content: "Busan's private cruise shore excursions are a specific product built around the ship's docking schedule — the guide plans the route backward from your return-to-ship deadline, which is why they cost more than an equivalent land tour booked without a time constraint. If you're not on a cruise, a standard full-day van tour at a similar or lower price often covers more ground without the strict timing pressure.",
          },
          {
            title: "Red Flags on Price",
            content: "A private shore excursion quote well under $285 often means a shorter route that risks cutting it close to your ship's departure, or a driver without real cruise-schedule experience — a genuine risk if you miss the ship. Confirm the operator has handled cruise excursions before, not just regular city tours.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly whether they build in a safety buffer before your ship's departure time, and what happens if the ship is delayed. On AsiaByLocals, every Busan tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Busan tours](/south-korea/busan) to compare real, current prices directly.",
            tourCard: { slug: "busan-private-van-tour-of-hidden-gems-food-cafe", title: "Busan: Private Van Tour of Hidden Gems, Food & Cafe Spots", description: "A real example of flat pricing for 1-2 people on a non-cruise-timed full-day tour.", price: "From $582", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Busan?", a: "A private cruise shore excursion typically runs $285-340 flat for 1-2 people. A private full-day van tour runs $519-665 flat for 1-2 people." },
          { q: "Why do cruise shore excursions cost more than a regular Busan tour?", a: "The route is planned backward from your ship's departure deadline, which costs more in planning and risk than a tour without that time constraint." },
          { q: "Is a very cheap private shore excursion quote a red flag?", a: "Often yes — it can mean a shorter route that risks cutting it close to your ship's departure, a genuine risk, not just a comfort issue." },
          { q: "What's usually included in a Busan private tour price?", a: "Typically the guide and driver's fee and the vehicle. Entrance fees and meals are usually listed separately — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Busan?", "acceptedAnswer": { "@type": "Answer", "text": "A private cruise shore excursion typically runs $285-340 flat for 1-2 people. A private full-day van tour runs $519-665 flat for 1-2 people." } },
            { "@type": "Question", "name": "Why do cruise shore excursions cost more than a regular Busan tour?", "acceptedAnswer": { "@type": "Answer", "text": "The route is planned backward from your ship's departure deadline, costing more in planning and risk." } },
            { "@type": "Question", "name": "Is a very cheap private shore excursion quote a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shorter route that risks missing your ship's departure." } },
            { "@type": "Question", "name": "What's usually included in a Busan private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the guide and driver's fee and the vehicle; entrance fees and meals are usually separate." } },
          ],
        },
      };

    case "is-nami-island-tour-worth-it-seoul":
      return {
        title: "Is the Nami Island Day Trip Worth It from Seoul?",
        description: "An honest look at the Nami Island, Petite France, and Gangchon Railbike day trip from Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/27c029b48e05133ecaec4e7dab954711fd1da1d0b4a6f683f1f11222235484b8.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Nami Island, famous as a K-drama filming location with its tree-lined paths, is paired here with the themed Petite France village and a scenic Gangchon railbike ride — a full day outside the city covering several distinct attractions.",
            tourCard: { slug: "nami-island-petite-france-and-gangchon-railbike", title: "Nami Island, Petite France and Gangchon Railbike from Seoul", description: "A day trip to Nami Island, Petite France, and the Gangchon Railbike.", price: "From $103", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/27c029b48e05133ecaec4e7dab954711fd1da1d0b4a6f683f1f11222235484b8.png" },
          },
          {
            title: "Practical Tips",
            content: "Autumn is Nami Island's most famous season, when the tree-lined paths turn golden — expect larger crowds during that period." },
        ],
        faqs: [
          { q: "Why is Nami Island famous?", a: "As a popular K-drama filming location with distinctive tree-lined paths, especially photogenic in autumn." },
        ],
      };

    case "is-han-river-cruise-worth-it-seoul":
      return {
        title: "Is the Han River Cruise Worth It in Seoul?",
        description: "An honest look at the Hangang Bus guided Han River journey in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c112b22fdf7c3c5abed4f23f973f45d0cdc956c51d0caeb1554f9a084982bbb.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "The Hangang Bus is a hybrid bus-boat that cruises along the Han River, showing Seoul's skyline and riverside parks from the water — a relaxed way to see the city from a different angle than walking or the subway.",
            tourCard: { slug: "seoul-guided-han-river-journey-aboard-the-hangang", title: "Seoul: Guided Han River Journey Aboard the Hangang Bus", description: "A guided Han River journey aboard the Hangang Bus.", price: "From $194", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1c112b22fdf7c3c5abed4f23f973f45d0cdc956c51d0caeb1554f9a084982bbb.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Evening departures catch Seoul's skyline lit up after dark, a popular reason travelers choose this over a daytime slot." },
        ],
        faqs: [
          { q: "What is the Hangang Bus?", a: "A hybrid bus-boat vehicle that cruises along Seoul's Han River." },
        ],
      };

    case "is-kimchi-cooking-class-worth-it-seoul":
      return {
        title: "Is a Kimchi Cooking Class Worth It in Seoul?",
        description: "An honest look at Seoul's Korean kimchi cooking class in the heart of the city.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2c30f083353be9861b24bfdb593e67efd65a7761d8695f16bc68826a78e1c0f7.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This class teaches you to make kimchi, Korea's defining fermented dish, by hand — a genuine hands-on cultural activity distinct from simply eating it at a restaurant.",
            tourCard: { slug: "seoul-korean-kimchi-cooking-class-in-the-heart-of", title: "Seoul: Korean Kimchi Cooking Class in the Heart of the City", description: "A Korean kimchi cooking class in central Seoul.", price: "From $111", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2c30f083353be9861b24bfdb593e67efd65a7761d8695f16bc68826a78e1c0f7.jpg" },
          },
          {
            title: "Practical Tips",
            content: "You typically take your finished kimchi home, so bring a way to transport it in your luggage if you're not staying long after." },
        ],
        faqs: [
          { q: "Is a kimchi cooking class worth it in Seoul?", a: "Yes, for a genuine hands-on introduction to Korea's defining fermented dish." },
        ],
      };

    case "is-everland-worth-it-seoul":
      return {
        title: "Is Everland Theme Park Worth It from Seoul?",
        description: "An honest look at Everland, South Korea's largest theme park, reached by round-trip shuttle bus from Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5bb34cc493678.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "Everland is South Korea's largest theme park, with roller coasters, a zoo, and seasonal festivals — this round-trip shuttle bus makes the day trip from Seoul straightforward without needing to navigate transit yourself.",
            tourCard: { slug: "seoul-everland-theme-park-round-trip-shuttle-bus", title: "Seoul: Everland Theme Park Round Trip Shuttle Bus", description: "A round-trip shuttle bus to Everland Theme Park.", price: "From $40", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5bb34cc493678.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "This is a full-day commitment at 12 hours including transfers — plan for an early start to maximize time in the park." },
        ],
        faqs: [
          { q: "Is Everland worth visiting from Seoul?", a: "Yes, it's South Korea's largest theme park, and this shuttle bus makes the day trip straightforward." },
        ],
      };

    case "is-dmz-tour-worth-it-seoul":
      return {
        title: "Is the DMZ Tour Worth It from Seoul?",
        description: "An honest look at the half-day DMZ small-group tour, visiting the heavily fortified border between North and South Korea.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/88dbae4db7452a79549b0915e3ae42009c04d6421c9223c0db0e829a6e59df82.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "The DMZ is one of the most heavily fortified borders in the world, and this is widely considered Seoul's single most unique day trip, offering a genuinely sobering, historically significant experience that nothing else in the city can match.",
            tourCard: { slug: "dmz-half-day-small-group-max-13-with-north", title: "DMZ Half-Day Small Group Tour, Max 13, with North Korea Views", description: "A half-day small-group DMZ tour with views toward North Korea.", price: "From $614", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/88dbae4db7452a79549b0915e3ae42009c04d6421c9223c0db0e829a6e59df82.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring your passport — it's required for DMZ entry, and some zones have dress codes and photography restrictions that your guide will explain beforehand.",
          },
        ],
        faqs: [
          { q: "Is the DMZ tour worth it from Seoul?", a: "Yes, it's widely considered Seoul's single most unique day trip, offering a genuinely sobering look at one of the world's most fortified borders." },
        ],
      };

    case "is-deoksugung-palace-tour-worth-it-seoul":
      return {
        title: "Is the Deoksugung Palace Heritage Walking Tour Worth It?",
        description: "An honest look at the Deoksugung Palace guided heritage walking tour, a smaller, less-crowded royal palace compared to Gyeongbokgung.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9856c5c4852d895.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Deoksugung is noticeably smaller and quieter than Gyeongbokgung, Seoul's largest and most-visited palace, which makes it a good pick for travelers who've already done the main palace and want a calmer heritage visit without the crowds.",
            tourCard: { slug: "deoksugung-palace-guided-heritage-walking-tour-in", title: "Deoksugung Palace Guided Heritage Walking Tour", description: "A guided heritage walking tour of Deoksugung Palace.", price: "From $128", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9856c5c4852d895.png" },
          },
          {
            title: "Practical Tips",
            content: "Catch the Royal Guard Changing Ceremony at the main gate if the timing works with your visit — it runs on a set daily schedule.",
          },
        ],
        faqs: [
          { q: "Is Deoksugung Palace worth visiting instead of Gyeongbokgung?", a: "It's a good complement rather than a replacement — smaller and quieter, best for a second palace visit after Gyeongbokgung." },
        ],
      };

    case "is-bukchon-cooking-class-worth-it-seoul":
      return {
        title: "Is the Bukchon Hanok Cooking Class Worth It in Seoul?",
        description: "An honest look at the authentic Korean cooking class held inside a traditional Bukchon hanok house, pairing the cooking lesson with the setting itself.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85b18d9b3a34e88b08a75a708ee615d57f6b1aa60560c5b63336019fcdeedfda.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Taking place inside a genuine traditional hanok house in the Bukchon district rather than a commercial kitchen, this cooking class pairs the hands-on lesson with an atmospheric setting, a genuinely different experience from a standard classroom-style cooking class.",
            tourCard: { slug: "authentic-korean-cooking-class-in-a-bukchon-hanok", title: "Authentic Korean Cooking Class in a Bukchon Hanok", description: "A hands-on Korean cooking class inside a traditional Bukchon hanok house.", price: "From $110", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85b18d9b3a34e88b08a75a708ee615d57f6b1aa60560c5b63336019fcdeedfda.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Pair this with a walk through Bukchon Hanok Village before or after — you're already in the neighborhood.",
          },
        ],
        faqs: [
          { q: "Is the Bukchon hanok cooking class worth it?", a: "Yes, for the atmospheric traditional house setting itself, a genuinely different experience from a standard classroom cooking class." },
        ],
      };

    case "is-suwon-hwaseong-fortress-tour-worth-it-seoul":
      return {
        title: "Is the Suwon Hwaseong Fortress Night Tour Worth It from Seoul?",
        description: "An honest look at the Suwon Hwaseong Fortress night tour, a UNESCO World Heritage site lit up after dark outside Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64b626ebd195d.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "Hwaseong Fortress is a UNESCO World Heritage site, and seeing its walls and gates lit up at night gives a genuinely different atmosphere than a daytime visit, while also sidestepping the daytime heat and crowds.",
            tourCard: { slug: "from-seoul-suwon-hwaseong-fortress-night-tour", title: "From Seoul: Suwon Hwaseong Fortress Night Tour", description: "A night tour of the UNESCO-listed Suwon Hwaseong Fortress.", price: "From $180", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64b626ebd195d.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes — the fortress walls involve genuine walking distance and some uneven ground in the dark.",
          },
        ],
        faqs: [
          { q: "Is the Hwaseong Fortress night tour worth it?", a: "Yes, for a genuinely different lit-up atmosphere than a daytime visit, while avoiding the heat and crowds." },
        ],
      };

    case "is-seoraksan-day-trip-worth-it-seoul":
      return {
        title: "Is the Seoraksan National Park Day Trip Worth It from Seoul?",
        description: "An honest look at the Seoraksan National Park and Sokcho day trip, South Korea's most famous national park reached on a genuinely long day from Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9dbbbb076c661f88de62418844174e7109e48489180f7ff144522a89709cbfb4.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Seoraksan is South Korea's most famous national park, with dramatic granite peaks and a cable car to a viewing platform, but it's a genuinely long day trip from Seoul given the distance to the east coast near Sokcho, worth it specifically for travelers without time for an overnight stay.",
            tourCard: { slug: "from-seoulseoraksan-national-park-and-sokcho", title: "From Seoul: Seoraksan National Park and Sokcho", description: "A day trip to Seoraksan National Park and the coastal city of Sokcho.", price: "From $1234", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9dbbbb076c661f88de62418844174e7109e48489180f7ff144522a89709cbfb4.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Given the 12-hour round trip, an overnight stay near Sokcho gives a far more relaxed pace if your schedule allows it.",
          },
        ],
        faqs: [
          { q: "Is Seoraksan worth a day trip from Seoul?", a: "Yes, for travelers without time for an overnight stay, though it's a genuinely long day given the distance to the east coast." },
        ],
      };

    case "is-dongdaemun-market-tour-worth-it-seoul":
      return {
        title: "Is the Dongdaemun and Gwangjang Market Tour Worth It in Seoul?",
        description: "An honest look at the Dongdaemun jewelry market and Gwangjang market tour, pairing wholesale shopping with Seoul's oldest traditional food market.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f1fcb137c42df6bec3f2ff6c37d03267baf59929a04d3988e665a59f08e36ffb.png",
        sections: [
          {
            title: "The Short Answer",
            content: "This pairs Dongdaemun's wholesale jewelry market with Gwangjang Market, one of Seoul's oldest traditional markets known for its street food stalls, a genuinely different shopping-and-eating combination from the city's more mainstream Myeongdong retail district.",
            tourCard: { slug: "dongdaemun-jewelry-market-gwangjang-market", title: "Dongdaemun Jewelry Market & Gwangjang Market", description: "A tour combining the Dongdaemun jewelry market with Gwangjang traditional market.", price: "From $64", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f1fcb137c42df6bec3f2ff6c37d03267baf59929a04d3988e665a59f08e36ffb.png" },
          },
          {
            title: "Practical Tips",
            content: "Come hungry — Gwangjang Market is famous for its street food stalls, particularly bindaetteok (mung bean pancakes) and mayak gimbap.",
          },
        ],
        faqs: [
          { q: "Is the Dongdaemun and Gwangjang market tour worth it?", a: "Yes, for a genuinely different shopping-and-eating combination than the mainstream Myeongdong retail district." },
        ],
      };

    case "is-perfume-making-workshop-worth-it-seoul":
      return {
        title: "Is the Perfume Making Workshop Worth It in Seoul?",
        description: "An honest look at the create-your-own-perfume workshop with a professional perfumer, a hands-on beauty-focused activity distinct from standard cosmetics shopping.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f8a6181cdb330d5e25993cc700c29c0a1d0f54bc50c5a95061e0a5c6dcc1686.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Rather than simply buying Korean cosmetics off the shelf, this workshop with a professional perfumer has you blend your own custom scent, a hands-on beauty-focused activity and a genuinely personal souvenir to take home.",
            tourCard: { slug: "create-your-perfume-with-a-professional-perfumer", title: "Create Your Perfume with a Professional Perfumer", description: "A hands-on perfume-making workshop with a professional perfumer.", price: "From $91", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f8a6181cdb330d5e25993cc700c29c0a1d0f54bc50c5a95061e0a5c6dcc1686.png" },
          },
          {
            title: "Practical Tips",
            content: "A good rainy-day or evening activity, and the custom scent you create makes a more personal souvenir than shelf-bought cosmetics.",
          },
        ],
        faqs: [
          { q: "Is the perfume making workshop worth it in Seoul?", a: "Yes, for a hands-on, genuinely personal souvenir beyond standard cosmetics shopping." },
        ],
      };

    case "is-gamcheon-village-tour-worth-it-busan":
      return {
        title: "Is the Gamcheon Culture Village Tour Worth It in Busan?",
        description: "An honest look at Busan's Gamcheon Culture Village coastal tour, a colorful hillside neighborhood turned open-air art village.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/216617996100e11b761da1fd0770fedfbe58848bbafec5b62aa80d2d10eda4b8.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Gamcheon was once a plain hillside slum neighborhood, transformed through a public art project into a maze of colorful houses, murals, and small galleries, now one of Busan's most photographed spots and genuinely different from the city's beach and seafood market circuit.",
            tourCard: { slug: "busan-coastal-experience-with-gamcheon-village", title: "Busan: Coastal Experience with Gamcheon Village", description: "A coastal tour of Busan including the Gamcheon Culture Village.", price: "From $74", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/216617996100e11b761da1fd0770fedfbe58848bbafec5b62aa80d2d10eda4b8.jpg" },
          },
          {
            title: "Practical Tips",
            content: "The village is built on a steep hillside with lots of stairs and narrow alleys — wear comfortable shoes for the walking involved.",
          },
        ],
        faqs: [
          { q: "Is Gamcheon Village worth visiting in Busan?", a: "Yes, it's one of Busan's most photographed spots, a colorful former hillside slum transformed into an open-air art village." },
        ],
      };

    case "is-haedong-yonggungsa-temple-tour-worth-it-busan":
      return {
        title: "Is the Haedong Yonggungsa Temple Tour Worth It in Busan?",
        description: "An honest look at the Haedong Yonggungsa and Haeundae tour, visiting one of the few Korean Buddhist temples built directly on the coastline.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f1147f6e8e7c6e9f11bee985c7e6091ea0400cb1640b32cb50bd3d5fd7d5ee8b.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Most Korean Buddhist temples sit in the mountains, which makes Haedong Yonggungsa's coastal, oceanfront setting genuinely unusual, pairing it on this tour with a stop at Haeundae, Busan's most famous beach.",
            tourCard: { slug: "busan-haedong-yonggungsa-haeundaechinese-driver", title: "Busan: Haedong Yonggungsa & Haeundae Tour", description: "A tour combining the coastal Haedong Yonggungsa temple with Haeundae beach.", price: "From $135", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f1147f6e8e7c6e9f11bee985c7e6091ea0400cb1640b32cb50bd3d5fd7d5ee8b.png" },
          },
          {
            title: "Practical Tips",
            content: "Go early to avoid both the crowds at the temple and the midday heat, since much of the walk is along exposed coastal paths.",
          },
        ],
        faqs: [
          { q: "Is Haedong Yonggungsa worth visiting?", a: "Yes, its oceanfront setting is genuinely unusual for a Korean Buddhist temple, most of which sit in the mountains." },
        ],
      };

    case "is-gyeongju-day-trip-worth-it-busan":
      return {
        title: "Is the Gyeongju Day Trip Worth It from Busan?",
        description: "An honest look at the Gyeongju UNESCO day trip from Busan, reaching the former capital of the ancient Silla Kingdom and one of Korea's richest historical sites.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a4c5010afca559b02f25e3d1f357b6f0af6162402628110f9bdefe6b945fb7d4.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Gyeongju was the capital of the ancient Silla Kingdom for close to a thousand years, and it's packed with UNESCO-listed tombs, temples, and historic sites, making this full-day trip a genuinely substantial history lesson rather than a quick photo stop.",
            tourCard: { slug: "busan-gyeongju-unesco-authentic-full-day-guided", title: "Busan: Gyeongju UNESCO Authentic Full-Day Guided Tour", description: "A full-day guided tour to the UNESCO-listed historic city of Gyeongju.", price: "From $33", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a4c5010afca559b02f25e3d1f357b6f0af6162402628110f9bdefe6b945fb7d4.jpg" },
          },
          {
            title: "Practical Tips",
            content: "At 12 hours this is a full day, but it's genuinely worth it for travelers with real interest in Korean history — the Silla Kingdom sites here are some of the country's richest.",
          },
        ],
        faqs: [
          { q: "Is Gyeongju worth a day trip from Busan?", a: "Yes, for travelers with genuine interest in Korean history — it was the Silla Kingdom's capital for close to a thousand years and is packed with UNESCO sites." },
        ],
      };

    case "is-taekwondo-experience-worth-it-busan":
      return {
        title: "Is the Taekwondo Experience Worth It in Busan?",
        description: "An honest look at the 1-hour taekwondo experience with a master, a hands-on introduction to Korea's national martial art.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ee180c64df08462f31706b7f171322f36896e3b684634a700287a299cedd96d6.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "Taekwondo is Korea's national martial art and an Olympic sport, and this hands-on session with a genuine master teaches real basic techniques rather than just watching a demonstration, making it a genuinely active alternative to Busan's usual sightseeing pace.",
            tourCard: { slug: "busan-1-hour-taekwondo-experience-with-master", title: "Busan: 1-Hour Taekwondo Experience with Master", description: "A 1-hour hands-on taekwondo lesson with a master instructor.", price: "From $70", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ee180c64df08462f31706b7f171322f36896e3b684634a700287a299cedd96d6.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable, loose clothing you can move in — this is a genuine hands-on lesson, not a seated demonstration.",
          },
        ],
        faqs: [
          { q: "Is the taekwondo experience worth it in Busan?", a: "Yes, for a genuinely hands-on introduction to Korea's national martial art with a real master instructor." },
        ],
      };

    case "is-cable-car-tower-tour-worth-it-busan":
      return {
        title: "Is the Busan Cable Car and Tower Tour Worth It?",
        description: "An honest look at the Busan city trip combining a cable car ride with a tower viewpoint, covering the city's two most common elevated-view attractions.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fecbe9f45d2267f2dbf2fb01b7fb64872ec25296bdb3bc5231abc3410207d5b0.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing a cable car ride with a tower viewpoint gives two different elevated perspectives of Busan's coastline and city sprawl in one outing, a straightforward way to get your bearings on the city's layout early in a trip.",
            tourCard: { slug: "busan-city-trip-cable-car-towerchinese-driver", title: "Busan City Trip: Cable Car & Tower", description: "A city tour combining a cable car ride with a tower viewpoint.", price: "From $122", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fecbe9f45d2267f2dbf2fb01b7fb64872ec25296bdb3bc5231abc3410207d5b0.png" },
          },
          {
            title: "Practical Tips",
            content: "A good first-day activity to get oriented with Busan's layout before venturing out to specific neighborhoods independently.",
          },
        ],
        faqs: [
          { q: "Is the Busan cable car and tower tour worth it?", a: "Yes, for two different elevated perspectives of the city in one outing, a good way to get oriented early in a trip." },
        ],
      };

    case "is-night-yacht-cruise-worth-it-busan":
      return {
        title: "Is the Busan Night Yacht Cruise Worth It?",
        description: "An honest look at the Busan by night yacht cruise with food and night views, seeing the city's illuminated skyline and bridges from the water after dark.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1e4323eca746cfab8abdd7dd75835670e513412bf628cb932c378a583add6348.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Busan's coastal skyline and bridges, including the Gwangan Bridge, light up dramatically after dark, and seeing them from a yacht with food included gives a genuinely different, more relaxed evening than a daytime sightseeing tour.",
            tourCard: { slug: "busan-by-night-yacht-food-night-views", title: "Busan by Night: Yacht, Food & Night Views", description: "A night yacht cruise with food, taking in Busan's illuminated skyline.", price: "From $494", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1e4323eca746cfab8abdd7dd75835670e513412bf628cb932c378a583add6348.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Book ahead for a sunset departure if you want to catch both the golden hour and the full night lighting during the same cruise.",
          },
        ],
        faqs: [
          { q: "Is the Busan night yacht cruise worth it?", a: "Yes, for a genuinely relaxed evening seeing the city's illuminated bridges and skyline from the water." },
        ],
      };

    case "is-kpop-recording-experience-worth-it-seoul":
      return {
        title: "Is the 'Be a K-Pop Star' Studio Recording Experience Worth It in Seoul?",
        description: "An honest look at the K-pop studio recording experience in Seoul, where you record a track in a real professional studio.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Recording a track in a real professional studio with vocal coaching is a genuinely unique souvenir for K-pop fans, going well beyond a typical K-pop-themed photo stop or dance class.",
            tourCard: { slug: "be-a-k-pop-star-in-seoul-studio-recording", title: "Be a K-Pop Star in Seoul: Studio Recording Experience", description: "A professional studio recording experience with vocal coaching in Seoul.", price: "From $379", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/735a6acd3c7d0a5f204f0723432e2cc29280f51e07f766a6afb5f850c99ad885.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This is priced well above a casual K-pop activity, so it suits genuine fans wanting a real studio recording to keep, not just a quick photo op.",
          },
        ],
        faqs: [
          { q: "Is the K-pop studio recording experience worth it in Seoul?", a: "Yes, for genuine fans, recording a real track with vocal coaching is a far more unique souvenir than a typical photo stop." },
        ],
      };

    case "is-taekwondo-lesson-worth-it-seoul":
      return {
        title: "Is a Private Taekwondo Lesson Worth It in Seoul?",
        description: "An honest look at the private taekwondo lesson for trainees in Seoul, learning South Korea's national martial art.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9404551919c446328661e7e589718752482387cb8faddc9027c58fa01cb385fc.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A private, one-on-one lesson in taekwondo, South Korea's national martial art, gives genuine hands-on instruction rather than just watching a demonstration, and at 1.5 hours it's a solid non-sightseeing activity to break up a Seoul itinerary.",
            tourCard: { slug: "seoul-private-taekwondo-lesson-for-trainees", title: "Seoul Private Taekwondo Lesson for Trainees", description: "A private, one-on-one taekwondo lesson in Seoul.", price: "From $146", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9404551919c446328661e7e589718752482387cb8faddc9027c58fa01cb385fc.jpg" },
          },
          {
            title: "Practical Tips",
            content: "No prior martial arts experience is needed — this is genuinely designed for trainees, with instruction starting from the basics.",
          },
        ],
        faqs: [
          { q: "Is a private taekwondo lesson worth it in Seoul?", a: "Yes, it gives genuine one-on-one instruction in South Korea's national martial art, suited even for complete beginners." },
        ],
      };

    case "is-moonlight-rainbow-fountain-show-worth-it-seoul":
      return {
        title: "Is the Moonlight Rainbow Fountain Night Show Worth It in Seoul?",
        description: "An honest look at the Moonlight Rainbow Fountain night show at Banpo Bridge, a free-to-watch evening spectacle on the Han River.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ed8dd51efba2d398135e0339aaae5000d6f071333b517e1ac0f00809e2cc7c9.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "The world's longest bridge fountain lighting up with colored water jets is a genuinely striking free spectacle, and a guided evening tour around it adds context and a better viewing spot without the hassle of figuring out timing yourself.",
            tourCard: { slug: "seoul-moonlight-rainbow-fountain-show-night", title: "Seoul Moonlight Rainbow Fountain Show Night Tour", description: "A guided evening tour to see the Moonlight Rainbow Fountain show at Banpo Bridge.", price: "From $286", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ed8dd51efba2d398135e0339aaae5000d6f071333b517e1ac0f00809e2cc7c9.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "The fountain show runs on a schedule and is seasonal, so a guide who knows the current showtimes saves you from showing up at the wrong hour.",
          },
        ],
        faqs: [
          { q: "Is the Moonlight Rainbow Fountain show worth it in Seoul?", a: "Yes, it's a genuinely striking free spectacle, and a guided tour adds context and better timing than figuring it out yourself." },
        ],
      };

    case "is-gwangjang-market-food-crawl-worth-it-seoul":
      return {
        title: "Is the Gwangjang Market Food Crawl Worth It in Seoul?",
        description: "An honest look at the Gwangjang Market food crawl with drinking, a guided tasting tour through Seoul's oldest traditional market.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d961bff343cc430e9b7cda7ac7aa8607b6d3c355561173900473990139133d68.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Gwangjang is Seoul's oldest traditional market, and a guided food crawl with drinking pairings makes it easy to try the market's famous bindaetteok and mayak gimbap without the overwhelm of navigating hundreds of stalls on your own.",
            tourCard: { slug: "seoul-gwangjang-market-food-crawl-drinking", title: "Seoul Gwangjang Market Food Crawl with Drinking", description: "A guided food and drink crawl through Seoul's Gwangjang Market.", price: "From $94", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d961bff343cc430e9b7cda7ac7aa8607b6d3c355561173900473990139133d68.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Come hungry but not full — the format is several small tastings across stalls, not one large sit-down meal.",
          },
        ],
        faqs: [
          { q: "Is the Gwangjang Market food crawl worth it in Seoul?", a: "Yes, a guide makes it easy to find the market's famous dishes without the overwhelm of navigating hundreds of stalls alone." },
        ],
      };

    case "is-spa-land-worth-it-busan":
      return {
        title: "Is Spa Land Centum City Worth It in Busan?",
        description: "An honest look at Spa Land Centum City, one of the world's largest jjimjilbang-style spa and sauna complexes.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20f910a25e3d1cf43bb0ad3a45f3a201d6ca49bae18d8f35a0fc719b5874219d.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Spa Land is one of the world's largest jjimjilbang-style complexes, with a wide variety of themed saunas and soaking pools, making for a genuinely relaxing full afternoon break from Busan's beaches and sightseeing at a modest entry price.",
            tourCard: { slug: "busan-spaland-centum-city-entry-ticket", title: "Busan Spa Land Centum City Entry Ticket", description: "An entry ticket to Spa Land, a large jjimjilbang spa complex in Busan.", price: "From $26", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20f910a25e3d1cf43bb0ad3a45f3a201d6ca49bae18d8f35a0fc719b5874219d.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Most saunas are gender-separated and clothing-optional in the bathing areas, following standard Korean jjimjilbang etiquette — the common lounge areas are mixed and require the provided spa clothing.",
          },
        ],
        faqs: [
          { q: "Is Spa Land worth it in Busan?", a: "Yes, it's one of the world's largest jjimjilbang complexes and a genuinely relaxing full-afternoon break at a modest price." },
        ],
      };

    case "is-kdrama-filming-locations-tour-worth-it-busan":
      return {
        title: "Is the K-Drama Filming Locations Tour Worth It in Busan?",
        description: "An honest look at the private movie and K-drama filming locations tour in Busan, visiting spots recognizable from Korean screen productions.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/94b852863934669c1d58bf528507d549dc206bf49d4cf5fb8d8ddafb0c796f14.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Visiting real locations recognizable from Korean films and dramas gives genuine fans a different lens on Busan's neighborhoods than standard sightseeing, and a private guide helps track down spots that aren't obviously marked.",
            tourCard: { slug: "busan-private-movie-filming-locations-tour-with", title: "Busan Private Movie & K-Drama Filming Locations Tour", description: "A private tour of movie and K-drama filming locations around Busan.", price: "From $233", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/94b852863934669c1d58bf528507d549dc206bf49d4cf5fb8d8ddafb0c796f14.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Worth confirming with the guide beforehand which specific productions' locations are included, since there are many to choose from.",
          },
        ],
        faqs: [
          { q: "Is the K-drama filming locations tour worth it in Busan?", a: "Yes, for genuine fans, it offers a different lens on the city's neighborhoods than standard sightseeing." },
        ],
      };

    case "is-rice-wine-brewing-worth-it-busan":
      return {
        title: "Is the Korean Rice Wine Brewing & Tasting Worth It in Busan?",
        description: "An honest look at the Korean rice wine brewing and tasting session in Busan, covering makgeolli and other traditional rice wines.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/882e3e466b52e100d5319864eb54f9d00185d3db6f0c1d18cb1d1a10716681c5.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "Learning how traditional Korean rice wines like makgeolli are actually brewed, rather than just drinking it at a restaurant, gives real insight into a drink most visitors only ever try casually, and at 1.5 hours it's an easy evening activity.",
            tourCard: { slug: "busan-korean-rice-wine-brewing-tasting", title: "Busan Korean Rice Wine Brewing & Tasting", description: "A hands-on session on brewing and tasting traditional Korean rice wine in Busan.", price: "From $59", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/882e3e466b52e100d5319864eb54f9d00185d3db6f0c1d18cb1d1a10716681c5.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "A good rainy-day or evening activity, since the session runs under 2 hours and ends with the tasting.",
          },
        ],
        faqs: [
          { q: "Is the Korean rice wine brewing session worth it in Busan?", a: "Yes, it gives real insight into how makgeolli and other traditional rice wines are actually made, beyond just drinking it at a restaurant." },
        ],
      };

    case "is-jagalchi-market-walking-tour-worth-it-busan":
      return {
        title: "Is the Jagalchi Market & Gamcheon Village Walking Tour Worth It in Busan?",
        description: "An honest look at the guided walking tour combining Jagalchi Fish Market and Gamcheon Culture Village in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Jagalchi is Korea's largest seafood market and Gamcheon's colorful hillside houses are visually striking in a totally different way, and pairing the two in one guided walk covers two of Busan's most distinct neighborhoods in a single outing.",
            tourCard: { slug: "busan-jagalchi-market-gamcheon-village-walking", title: "Busan Jagalchi Market & Gamcheon Village Walking Tour", description: "A guided walking tour combining Jagalchi Fish Market and Gamcheon Culture Village.", price: "From $262", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3dab2e37e064f0ebeef9b3bbb9ad0bf893ff1b16eefdf4fae1e358afde878f.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes — Gamcheon's hillside streets involve genuine uphill walking and stairs.",
          },
        ],
        faqs: [
          { q: "Is the Jagalchi Market and Gamcheon Village walking tour worth it in Busan?", a: "Yes, it covers two of Busan's most visually and culturally distinct neighborhoods in a single guided outing." },
        ],
      };

    case "is-najeonchilgi-mother-of-pearl-craft-worth-it-busan":
      return {
        title: "Is the Najeonchilgi Mother-of-Pearl Craft Class Worth It in Busan?",
        description: "An honest look at the Najeonchilgi mother-of-pearl craft class with Korean tea in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a64645e4e2dd8c56ad20b2ca8582374790d50c7d6ee2f9ceb3326416f8382021.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Najeonchilgi, Korean mother-of-pearl lacquerware, is a genuine traditional craft most visitors never encounter, and this hands-on class paired with Korean tea gives real insight into a technique rarely offered as a tourist workshop.",
            tourCard: { slug: "busan-najeonchilgi-mother-of-pearl-craft-class", title: "Busan: Najeonchilgi Mother-of-Pearl Craft Class & Korean Tea", description: "A hands-on Najeonchilgi mother-of-pearl craft class paired with Korean tea.", price: "From $46", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a64645e4e2dd8c56ad20b2ca8582374790d50c7d6ee2f9ceb3326416f8382021.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Your finished piece makes a genuinely distinctive souvenir — pack it carefully since mother-of-pearl inlay can be delicate.",
          },
        ],
        faqs: [
          { q: "Is the Najeonchilgi mother-of-pearl craft class worth it in Busan?", a: "Yes, it's a rare hands-on introduction to a traditional Korean lacquerware technique most visitors never otherwise encounter." },
        ],
      };

    case "is-dark-history-ghost-stories-tour-worth-it-busan":
      return {
        title: "Is the Dark History & Ghost Stories Night Walking Tour Worth It in Busan?",
        description: "An honest look at the Dark History and Ghost Stories night walking tour in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/223d4b1906e35ebb6a4ee13b0a41ee1e721f867645a24073e975259fc001aeea.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour covers local folklore and darker historical stories tied to specific Busan locations at night, worth it for travelers who want a genuinely different evening angle on the city beyond its usual beach and seafood sightseeing.",
            tourCard: { slug: "busan-dark-history-ghost-stories-night-walking", title: "Busan: Dark History & Ghost Stories Night Walking Tour", description: "A guided night walking tour covering Busan's dark history and ghost stories.", price: "From $54", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/223d4b1906e35ebb6a4ee13b0a41ee1e721f867645a24073e975259fc001aeea.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Go in with an open mind for storytelling and folklore rather than expecting jump-scares — the format leans toward history and atmosphere.",
          },
        ],
        faqs: [
          { q: "Is the Dark History & Ghost Stories night walking tour worth it in Busan?", a: "Yes, it offers a genuinely different evening angle on the city's history beyond the usual beach and seafood sightseeing." },
        ],
      };

    case "is-ocean-view-ring-making-worth-it-busan":
      return {
        title: "Is the Ocean-View Ring-Making Workshop Worth It in Busan?",
        description: "An honest look at the ocean-view ring-making workshop in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/59b04fa4456b8d25755a83030b7333c5ea09080d117e9e3d2eb01b1ed19f98b6.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Making your own ring with an ocean view setting gives this a genuinely romantic, personal angle distinct from Busan's usual K-beauty and food-focused workshops, worth it for travelers wanting a craft activity with a meaningful, wearable result.",
            tourCard: { slug: "busan-ocean-view-ring-making-workshop", title: "Busan: Ocean-View Ring-Making Workshop", description: "A hands-on ring-making workshop with an ocean view setting.", price: "From $97", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/59b04fa4456b8d25755a83030b7333c5ea09080d117e9e3d2eb01b1ed19f98b6.png" },
          },
          {
            title: "Practical Tips",
            content: "Book a daytime or sunset slot specifically to get the ocean view while you work, since the setting is part of the appeal.",
          },
        ],
        faqs: [
          { q: "Is the ocean-view ring-making workshop worth it in Busan?", a: "Yes, for a genuinely personal, romantic craft activity with a wearable result, set apart by its ocean-view location." },
        ],
      };

    case "is-korean-flower-arrangement-worth-it-busan":
      return {
        title: "Is the Hands-on Korean Flower Arrangement Experience Worth It in Busan?",
        description: "An honest look at the hands-on Korean flower arrangement experience with tea in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Korean flower arrangement follows its own distinct aesthetic principles, and this hands-on session paired with tea gives a calm, genuinely cultural activity worth it for travelers wanting a relaxed craft experience between more active sightseeing days.",
            tourCard: { slug: "busan-hands-on-korean-flower-arrangement", title: "Busan: Hands-on Korean Flower Arrangement Experience & Tea", description: "A hands-on Korean flower arrangement class paired with tea.", price: "From $88", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Your arrangement won't travel well internationally — treat it as a same-trip experience rather than something to carry home.",
          },
        ],
        faqs: [
          { q: "Is the Korean flower arrangement experience worth it in Busan?", a: "Yes, as a calm, genuinely cultural craft activity, a good change of pace between more active sightseeing days." },
        ],
      };

    case "is-tea-ceremony-experience-worth-it-busan":
      return {
        title: "Is the Korean Tea Ceremony Experience Worth It in Busan?",
        description: "An honest look at the Korean tea ceremony experience at Bibibidang in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A proper Korean tea ceremony follows specific, deliberate steps around brewing and serving, and this session walks you through the real ritual rather than just handing you a cup, worth it for travelers wanting a calm, genuinely cultural hour between busier sightseeing days.",
            tourCard: { slug: "busan-korean-tea-ceremony-experience-at-bibibidang", title: "Busan: Korean Tea Ceremony Experience at Bibibidang", description: "A guided Korean tea ceremony experience in Busan.", price: "From $43", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Arrive with an open mind about pacing — the ceremony is deliberately slow and unhurried, which is the actual point of the ritual.",
          },
        ],
        faqs: [
          { q: "Is the Korean tea ceremony experience worth it in Busan?", a: "Yes, for a genuinely calm, cultural hour that walks you through the real ritual rather than just serving you a cup of tea." },
        ],
      };

    case "is-rice-cake-making-worth-it-busan":
      return {
        title: "Is the Korean Rice Cake Making Class Worth It in Busan?",
        description: "An honest look at the Korean rice cake making class with tasting in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Tteok (Korean rice cakes) come in dozens of regional varieties rarely explained to visitors, and this hands-on class teaches the actual technique behind them with a tasting at the end, worth it for travelers wanting a real food-craft skill rather than just eating rice cakes from a street stall.",
            tourCard: { slug: "busan-korean-rice-cake-making-class-with-tasting", title: "Busan: Korean Rice Cake Making Class with Tasting", description: "A hands-on Korean rice cake making class with a tasting.", price: "From $46", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Come hungry — you'll be eating what you make, and most classes send you home with extras too.",
          },
        ],
        faqs: [
          { q: "Is the rice cake making class worth it in Busan?", a: "Yes, for a genuine hands-on food craft and tasting, rather than just buying rice cakes from a street stall." },
        ],
      };

    case "is-night-photography-tour-worth-it-busan":
      return {
        title: "Is the Guided Night Photography Tour Worth It in Busan?",
        description: "An honest look at the guided night photography tour with hotel drop-off in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Busan's coastline and cityscape genuinely look different after dark, and this guided tour hits photogenic spots with a local who knows the best angles and timing, worth it specifically for travelers wanting better night shots than they'd get wandering alone.",
            tourCard: { slug: "busan-guided-night-photography-tour-with-hotel", title: "Busan: Guided Night Photography Tour with Hotel Drop-Off", description: "A guided night photography tour of Busan's best photo spots.", price: "From $59", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring a phone or camera that handles low light reasonably well, and ask your guide about tripod availability if you don't have your own.",
          },
        ],
        faqs: [
          { q: "Is the night photography tour worth it in Busan?", a: "Yes, specifically for travelers wanting better night shots at Busan's best angles than they'd find wandering alone." },
        ],
      };

    case "is-k-beauty-makeup-experience-worth-it-busan":
      return {
        title: "Is the Korean-Style Makeup Experience Worth It in Busan?",
        description: "An honest look at the Korean-style makeup experience in Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A professional walks you through the specific techniques behind the K-beauty look — layering, gradient lips, dewy base — rather than you just buying the products, worth it for travelers wanting to actually learn the technique, not just shop for cosmetics.",
            tourCard: { slug: "busan-korean-style-makeup-experience", title: "Busan: Korean-style Makeup Experience", description: "A guided Korean-style makeup application experience in Busan.", price: "From $65", duration: "40 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1b81ab6eda5016437365fc36e31a1fb5c257969773a95bee836209a54a3e28c0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Ask questions during the session about product names and technique — most professionals are happy to share tips you can repeat at home.",
          },
        ],
        faqs: [
          { q: "Is the Korean-style makeup experience worth it in Busan?", a: "Yes, for travelers wanting to actually learn the K-beauty technique, not just shop for the products." },
        ],
      };

    case "is-ulsan-petroglyphs-onggi-village-worth-it-busan":
      return {
        title: "Is the Ulsan Bangudae Petroglyphs and Onggi Village Tour Worth It from Busan?",
        description: "An honest look at the Ulsan Bangudae Petroglyphs, Onggi Village and park tour from Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f2c68a9f52bb79a610be1b2f0d90486362e47e8371793672536231bcc7eb6ae1.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Bangudae's prehistoric rock carvings are one of Korea's oldest and least-visited heritage sites, and pairing them with Onggi Village's traditional pottery craft gives a genuinely deep history day, worth it for travelers wanting something older and quieter than Busan's beach-and-market circuit.",
            tourCard: { slug: "ulsan-bangudae-petroglyphs-onggi-village-park-tour", title: "Ulsan: Bangudae Petroglyphs, Onggi Village & Park Tour", description: "A tour covering Ulsan's Bangudae Petroglyphs, Onggi Village and a local park.", price: "From $922", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f2c68a9f52bb79a610be1b2f0d90486362e47e8371793672536231bcc7eb6ae1.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Ask about binoculars or a zoom lens for the petroglyphs, since the carvings sit on a rock face best viewed from a distance.",
          },
        ],
        faqs: [
          { q: "Is the Ulsan Bangudae Petroglyphs tour worth it from Busan?", a: "Yes, for travelers wanting one of Korea's oldest and least-visited heritage sites, paired with traditional pottery craft." },
        ],
      };

    case "is-oedo-island-geoje-worth-it-busan":
      return {
        title: "Is the Oedo Island Botania and Geoje Day Tour Worth It from Busan?",
        description: "An honest look at the Oedo Island Botania and Geoje private day tour from Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5af82cb157289b1d52a3706abfd3b0268b9dc8241bc896136b3d222b85fd86b6.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Oedo Island's landscaped botanical gardens on a small sea-bound island, paired with Geoje's coastal scenery, give a genuinely different island day from Busan's city beaches, worth it for travelers wanting a scenic, relaxed day trip by boat.",
            tourCard: { slug: "oedo-island-botania-geoje-private-day-tour-from", title: "Oedo Island Botania & Geoje Private Day Tour from Busan", description: "A private day tour to Oedo Island's Botania gardens and Geoje from Busan.", price: "From $666", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5af82cb157289b1d52a3706abfd3b0268b9dc8241bc896136b3d222b85fd86b6.png" },
          },
          {
            title: "Practical Tips",
            content: "Check the ferry schedule to Oedo Island in advance, since sailings depend on weather and can be limited in number per day.",
          },
        ],
        faqs: [
          { q: "Is the Oedo Island and Geoje day tour worth it from Busan?", a: "Yes, for a genuinely different, relaxed island day with landscaped gardens and coastal scenery, distinct from Busan's city beaches." },
        ],
      };

    case "is-screen-golf-experience-worth-it-busan":
      return {
        title: "Is the Busan Screen Golf Experience Worth It?",
        description: "An honest look at the Busan screen golf experience with a local business owner.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9daf1ece5bf9aa063b7563fc5697389e784d103076bc4169a6674205b0927e02.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Screen golf is a genuinely huge part of everyday Korean social life that most visitors never encounter, and trying it with a local business owner gives real context on the culture behind it, worth it for travelers curious about how Koreans actually socialize rather than just sightseeing.",
            tourCard: { slug: "busan-screen-golf-experience-with-a-local", title: "Busan Screen Golf Experience with a Local Business Owner", description: "A screen golf experience in Busan hosted by a local business owner.", price: "From $669", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9daf1ece5bf9aa063b7563fc5697389e784d103076bc4169a6674205b0927e02.jpg" },
          },
          {
            title: "Practical Tips",
            content: "No golf experience is needed — screen golf simulators are beginner-friendly and most venues provide basic instruction.",
          },
        ],
        faqs: [
          { q: "Is the screen golf experience worth it in Busan?", a: "Yes, for travelers curious about a genuinely huge part of everyday Korean social life that most visitors never encounter." },
        ],
      };

    case "is-east-coast-luge-temple-tour-worth-it-busan":
      return {
        title: "Is the Busan East Coast Private Tour with Luge Ride Worth It?",
        description: "An honest look at the Busan East Coast private tour with luge ride and temple visit.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b370d2a63013d562f71fad5033c9e27328e70c989e96c5643e2d6857e09eda18.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing a coastal luge ride with a temple visit along Busan's east coast gives a genuinely fun mix of activity and culture in one day, worth it for travelers wanting something more active than a standard sightseeing tour.",
            tourCard: { slug: "busan-east-coast-private-tour-with-luge-ride", title: "Busan: East Coast Private Tour with Luge Ride & Temple Visit", description: "A private East Coast tour from Busan including a luge ride and temple visit.", price: "From $624", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b370d2a63013d562f71fad5033c9e27328e70c989e96c5643e2d6857e09eda18.png" },
          },
          {
            title: "Practical Tips",
            content: "Wear closed-toe shoes for the luge ride, since open sandals aren't allowed on most coastal luge tracks.",
          },
        ],
        faqs: [
          { q: "Is the East Coast luge ride and temple tour worth it in Busan?", a: "Yes, for travelers wanting a fun, active mix of a luge ride and culture in one day along Busan's coast." },
        ],
      };

    case "is-geoje-jungle-dome-pow-camp-worth-it-busan":
      return {
        title: "Is the Geoje Jungle Dome, Cable and POW Camp Day Trip Worth It from Busan?",
        description: "An honest look at the Geoje Jungle Dome, cable car, and POW camp day trip from Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff632b13673e06869458f8fa2eff4f3cc8a20ca7b30d2678dce1c6b8e6182b27.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Combining Geoje's Jungle Dome botanical attraction, a scenic cable car ride, and the historic Korean War POW camp gives a genuinely varied day mixing nature, views, and history, distinct from Geoje's more common botanical-garden-focused day trips.",
            tourCard: { slug: "from-busan-geoje-jungle-dome-cable-and-pow-camp", title: "From Busan: Geoje Jungle Dome, Cable and POW Camp Day Trip", description: "A day trip to Geoje's Jungle Dome, cable car, and POW camp from Busan.", price: "From $601", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff632b13673e06869458f8fa2eff4f3cc8a20ca7b30d2678dce1c6b8e6182b27.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Allow extra time at the POW camp if Korean War history interests you, since it offers more depth than a quick walkthrough suggests.",
          },
        ],
        faqs: [
          { q: "Is the Geoje Jungle Dome, cable car and POW camp day trip worth it from Busan?", a: "Yes, for travelers wanting a genuinely varied day mixing nature, views, and Korean War history, distinct from the standard botanical-garden day trips." },
        ],
      };

    case "is-pohang-day-trip-worth-it-busan":
      return {
        title: "Is the Private Pohang Day Trip Worth It from Busan?",
        description: "An honest look at the private Pohang day trip with hotel pickup from Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fa4e2419c3be015c824545fb652588bddf0ec1de2f1b8250091a494857e17fdb.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Pohang's steel-industry port city and coastal landmarks sit well off Busan's usual day-trip circuit, giving travelers a genuinely different industrial-coastal city to explore for those who've already covered Gyeongju and the main Busan sights.",
            tourCard: { slug: "from-busan-private-pohang-day-trip-with-hotel", title: "From Busan: Private Pohang Day Trip with Hotel Pickup", description: "A private day trip to Pohang with hotel pickup from Busan.", price: "From $597", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fa4e2419c3be015c824545fb652588bddf0ec1de2f1b8250091a494857e17fdb.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This suits travelers who've already done Busan's main sights and Gyeongju, wanting somewhere genuinely different for a final day trip.",
          },
        ],
        faqs: [
          { q: "Is the private Pohang day trip worth it from Busan?", a: "Yes, for travelers who've already covered Gyeongju and Busan's main sights, wanting a genuinely different industrial-coastal city to explore." },
        ],
      };

    case "is-maritime-industrial-tour-worth-it-busan":
      return {
        title: "Is the Busan Maritime and Industrial Tour Worth It?",
        description: "An honest look at the Busan Maritime and Industrial Tour with a licensed guide.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/24e2e561b4b02e814002ddb27d923caf3f0c3ac24eb1eeb2d876b9f408f8f7db.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Busan's working port and shipbuilding industry get a dedicated tour here rather than a quick harbor photo stop, worth it for travelers with genuine interest in maritime trade and industrial history, led by a licensed guide who knows the sector.",
            tourCard: { slug: "busan-maritime-and-industrial-tourlicensed-guide", title: "Busan: Maritime and Industrial Tour(Licensed Guide, up to 8)", description: "A maritime and industrial tour of Busan's port with a licensed guide.", price: "From $650", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/24e2e561b4b02e814002ddb27d923caf3f0c3ac24eb1eeb2d876b9f408f8f7db.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This suits travelers with genuine professional or academic interest in shipping and industry, more than casual sightseers.",
          },
        ],
        faqs: [
          { q: "Is the Busan Maritime and Industrial Tour worth it?", a: "Yes, for travelers with genuine interest in maritime trade and industrial history, led by a guide who knows the sector in depth." },
        ],
      };

    case "is-bongnaesan-hiking-worth-it-busan":
      return {
        title: "Is the Bongnaesan Mountain Morning Hiking Tour Worth It in Busan?",
        description: "An honest look at the Bongnaesan mountain morning hiking tour, a 395-meter peak hike near Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff98827690f6352083212e90333034f1c8640c48f7f6479655e06c2236ae9efb.jpg",
        sections: [
          { title: "The Short Answer", content: "Bongnaesan's 395-meter peak gives a genuinely achievable morning hike with real coastal views, worth it for travelers wanting outdoor activity and a scenic payoff without committing to a full-day trek.", tourCard: { slug: "busan-bongnaesan-mountain-395m-morning-hiking-tour", title: "Busan Bongnaesan Mountain 395m Morning Hiking Tour", description: "A morning hiking tour up Bongnaesan's 395-meter peak near Busan.", price: "From $429", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff98827690f6352083212e90333034f1c8640c48f7f6479655e06c2236ae9efb.jpg" } },
          { title: "Practical Tips", content: "Go early for the morning light and genuinely cooler hiking temperatures, before the midday heat sets in." },
        ],
        faqs: [
          { q: "Is the Bongnaesan hiking tour worth it in Busan?", a: "Yes, for a genuinely achievable morning hike with real coastal views, without committing to a full-day trek." },
        ],
      };

    case "is-kdrama-pet-cafe-tour-worth-it-busan":
      return {
        title: "Is the Guided K-Drama Day Tour with Pet Cafe Worth It in Busan?",
        description: "An honest look at Busan's guided K-Drama day tour combined with a pet cafe visit, a fan-focused city experience.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/46745dc35179fa858d397384d25002de332ca714f71fd2701a932d19d461267e.jpeg",
        sections: [
          { title: "The Short Answer", content: "Visiting genuine K-Drama filming locations paired with a pet cafe stop gives a lighthearted, fan-focused day distinct from Busan's usual beach and temple sightseeing, worth it specifically for K-Drama fans wanting that connection.", tourCard: { slug: "busan-guided-k-drama-day-tour-with-pet-cafe", title: "Busan: Guided K-Drama Day Tour with Pet Cafe & Magnate", description: "A guided K-Drama filming location tour with a pet cafe visit in Busan.", price: "From $259", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/46745dc35179fa858d397384d25002de332ca714f71fd2701a932d19d461267e.jpeg" } },
          { title: "Practical Tips", content: "Watch the relevant K-Dramas beforehand — the filming location visits genuinely mean more when you recognize the scenes." },
        ],
        faqs: [
          { q: "Is the K-Drama day tour with pet cafe worth it in Busan?", a: "Yes, specifically for K-Drama fans wanting a genuine connection to filming locations, paired with a lighthearted pet cafe stop." },
        ],
      };

    case "is-personal-color-analysis-worth-it-busan":
      return {
        title: "Is Personal Color Analysis Worth It in Busan?",
        description: "An honest look at Busan's personal color analysis service, a trending Korean style-consultation experience.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e2bb4a26e4c2ca03be2902daf185759151469ab8291439c45df1cbf7f1c3be8d.jpg",
        sections: [
          { title: "The Short Answer", content: "A professional color analysis gives genuinely practical, personalized style guidance based on your skin tone and features, worth it specifically for travelers curious about the trending Korean beauty and styling culture rather than general sightseeing.", tourCard: { slug: "busan-personal-color-analysis", title: "Busan: Personal Color Analysis", description: "A personal color analysis style consultation in Busan.", price: "From $130", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e2bb4a26e4c2ca03be2902daf185759151469ab8291439c45df1cbf7f1c3be8d.jpg" } },
          { title: "Practical Tips", content: "Wear minimal makeup to the session — natural skin tone genuinely gives the consultant a clearer read for analysis." },
        ],
        faqs: [
          { q: "Is personal color analysis worth it in Busan?", a: "Yes, for travelers genuinely curious about Korean beauty and styling culture, with real practical takeaways for future wardrobe choices." },
        ],
      };

    case "is-blue-line-capsule-yacht-worth-it-busan":
      return {
        title: "Is the Blue Line Capsule and Yacht Luxury Ocean Journey Worth It in Busan?",
        description: "An honest look at Busan's Blue Line Capsule train combined with a yacht experience along the coast.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eba4ff155c9ddae13d66b86b55191a7c762ee8802c239b7954d5dcbcee861ece.jpeg",
        sections: [
          { title: "The Short Answer", content: "Combining the scenic Blue Line Capsule coastal train with a yacht segment gives genuinely varied perspectives on Busan's coastline, from a fixed rail route to open water, worth it for travelers wanting a premium, photogenic coastal day.", tourCard: { slug: "busan-luxury-ocean-journey-blue-line-capsule-yacht", title: "Busan: Luxury Ocean Journey – Blue Line Capsule & Yacht", description: "A combined Blue Line Capsule train and yacht experience along Busan's coast.", price: "From $168", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eba4ff155c9ddae13d66b86b55191a7c762ee8802c239b7954d5dcbcee861ece.jpeg" } },
          { title: "Practical Tips", content: "Book a clear-weather day — both the capsule train and yacht segments genuinely depend on good visibility for the coastal views." },
        ],
        faqs: [
          { q: "Is the Blue Line Capsule and yacht journey worth it in Busan?", a: "Yes, for travelers wanting genuinely varied, photogenic perspectives on the coastline, combining a scenic train with open water." },
        ],
      };

    case "is-tongdosa-gourmet-tour-worth-it-busan":
      return {
        title: "Is the Tongdosa UNESCO and Gourmet Half-Day Tour Worth It from Busan?",
        description: "An honest look at the Tongdosa UNESCO temple and gourmet half-day private tour from Busan.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f96135ff4710f5676b07a536ba4884479a72a5f43ef91e65cb8b41573e999a2.jpg",
        sections: [
          { title: "The Short Answer", content: "Tongdosa is genuinely one of Korea's three jewel temples and a UNESCO World Heritage site, and pairing the visit with a proper gourmet meal gives real cultural and culinary value in a single half-day trip from Busan.", tourCard: { slug: "tongdosa-unesco-gourmet-half-day-private-tour", title: "Tongdosa UNESCO & Gourmet Half Day Private Tour from Busan", description: "A half-day tour of the UNESCO-listed Tongdosa temple with a gourmet meal from Busan.", price: "From $465", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2f96135ff4710f5676b07a536ba4884479a72a5f43ef91e65cb8b41573e999a2.jpg" } },
          { title: "Practical Tips", content: "Dress modestly for the temple visit, since Tongdosa remains a genuinely active place of worship, not just a heritage site." },
        ],
        faqs: [
          { q: "Is the Tongdosa UNESCO and gourmet tour worth it from Busan?", a: "Yes, for genuine cultural and culinary value in one trip, visiting one of Korea's three jewel temples paired with a proper meal." },
        ],
      };

    case "is-nanta-show-worth-it-seoul":
      return {
        title: "Is the NANTA Show Worth It in Seoul?",
        description: "An honest look at the NANTA non-verbal comedy percussion show in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6666efe59ef.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "NANTA is a long-running, non-verbal percussion comedy show set in a kitchen, genuinely accessible regardless of language and distinct from Seoul's K-pop and palace sightseeing, worth it as an easy, entertaining evening activity.",
            tourCard: { slug: "seoul-nanta-show-ticket", title: "Seoul: NANTA Show Ticket", description: "A ticket to the NANTA non-verbal percussion comedy show.", price: "From $42", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6666efe59ef.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "No Korean language needed — the show is entirely non-verbal, built around percussion and physical comedy, so it works for any audience.",
          },
        ],
        faqs: [
          { q: "Is the NANTA show worth it in Seoul?", a: "Yes, it's an easy, entertaining, language-independent evening activity, a good change of pace from sightseeing." },
        ],
      };

    case "is-norigae-keyring-making-worth-it-seoul":
      return {
        title: "Is the Norigae Keyring Making Experience Worth It in Seoul?",
        description: "An honest look at the Norigae keyring making experience with a Korean drink in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9cdf0a5831c84d1c54474154083e8bab7b6543db014845deb15855617bedebc3.png",
        sections: [
          {
            title: "The Short Answer",
            content: "Norigae are traditional Korean decorative tassel ornaments, and this quick workshop lets you make your own as a keyring, paired with a Korean drink, worth it as a short, inexpensive craft activity rather than a major cultural deep-dive.",
            tourCard: { slug: "seoul-norigae-keyring-making-experience-with-a", title: "Seoul: Norigae Keyring Making Experience with a Korean Drink", description: "A hands-on Norigae keyring making workshop paired with a Korean drink.", price: "From $40", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9cdf0a5831c84d1c54474154083e8bab7b6543db014845deb15855617bedebc3.png" },
          },
          {
            title: "Practical Tips",
            content: "A good short add-on to slot between bigger sightseeing stops rather than a destination activity on its own.",
          },
        ],
        faqs: [
          { q: "Is the Norigae keyring making experience worth it in Seoul?", a: "Yes, as a short, inexpensive craft activity with a genuine traditional-ornament souvenir to take home." },
        ],
      };

    case "is-korean-knot-art-workshop-worth-it-seoul":
      return {
        title: "Is the Korean Knot Art Workshop Worth It in Seoul?",
        description: "An honest look at the Korean knot art workshop with souvenir in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1db8529bf721f51ffbadb057deb7faed85fc6d5ebbefcdd03a95426a6542197b.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "Korean knot art (dongbaekjang-style knotting) is a genuine traditional decorative craft, and this workshop teaches the technique hands-on with a souvenir to take home, worth it for travelers wanting a quieter, more niche craft experience than the usual pottery or calligraphy class.",
            tourCard: { slug: "seoul-korean-knot-art-workshop-with-souvenir", title: "Seoul: Korean Knot Art Workshop with Souvenir", description: "A hands-on traditional Korean knot art workshop with a souvenir included.", price: "From $56", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1db8529bf721f51ffbadb057deb7faed85fc6d5ebbefcdd03a95426a6542197b.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "Your finished knot piece makes a genuinely distinctive, lightweight souvenir that packs easily.",
          },
        ],
        faqs: [
          { q: "Is the Korean knot art workshop worth it in Seoul?", a: "Yes, it's a quieter, more niche traditional craft experience than the usual pottery or calligraphy class, with a genuine souvenir included." },
        ],
      };

    case "is-insadong-name-seal-worth-it-seoul":
      return {
        title: "Is Creating Your Name Seal with a Calligrapher in Insadong Worth It?",
        description: "An honest look at the name seal making experience with a calligrapher in Insadong, Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9cca74fbc4a5f7e5bb3e863d677979253934bb6df9a3fdeee0f26569b65d914.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Having a calligrapher carve a personal name seal (dojang) in Insadong, Seoul's traditional arts district, gives a genuinely personal, lasting souvenir with real craft behind it, worth it for travelers wanting something more meaningful than a mass-produced trinket.",
            tourCard: { slug: "seoul-create-your-name-seal-with-a-calligrapher", title: "Seoul: Create Your Name Seal with a Calligrapher in Insadong", description: "A personal name seal carving experience with a calligrapher in Insadong.", price: "From $64", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9cca74fbc4a5f7e5bb3e863d677979253934bb6df9a3fdeee0f26569b65d914.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Decide on the name or phrase you want carved before the session so the calligrapher can prepare the design in advance.",
          },
        ],
        faqs: [
          { q: "Is creating a name seal with a calligrapher in Insadong worth it in Seoul?", a: "Yes, it's a genuinely personal, lasting souvenir with real craft behind it, more meaningful than a mass-produced trinket." },
        ],
      };

    case "is-korean-tea-tasting-worth-it-seoul":
      return {
        title: "Is the Korean Fine Tea Tasting Experience Worth It in Seoul?",
        description: "An honest look at the Korean fine tea tasting with three teas and traditional sweets in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9cca74fbc4a5f7e5bb3e863d677979253934bb6df9a3fdeee0f26569b65d914.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Tasting three distinct Korean teas paired with traditional sweets gives genuine depth beyond the single cup most visitors default to, worth it specifically for travelers curious about Korean tea culture beyond coffee shops and convenience-store drinks.",
            tourCard: { slug: "seoul-korean-fine-tea-tasting-3-tea-traditional", title: "Seoul: Korean Fine Tea Tasting (3 Tea & Traditional Sweets)", description: "A guided tasting of three Korean teas paired with traditional sweets.", price: "From $59", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9cca74fbc4a5f7e5bb3e863d677979253934bb6df9a3fdeee0f26569b65d914.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Go on a lighter stomach beforehand, since the sweets pairing is meant to complement the tea's flavor, not serve as a full meal.",
          },
        ],
        faqs: [
          { q: "Is the Korean tea tasting worth it in Seoul?", a: "Yes, for travelers curious about Korean tea culture beyond coffee shops, with real variety across three distinct teas." },
        ],
      };

    case "is-indigo-dyeing-workshop-worth-it-seoul":
      return {
        title: "Is the Indigo Dyeing Workshop with a Local Expert Worth It in Seoul?",
        description: "An honest look at the indigo dyeing workshop with a local expert in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a64645e4e2dd8c56ad20b2ca8582374790d50c7d6ee2f9ceb3326416f8382021.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Traditional Korean indigo dyeing is a genuine natural-dye craft most visitors never encounter, and this hands-on workshop with a local expert gives real technique behind the process, worth it for travelers wanting a tactile, one-of-a-kind souvenir rather than a passive demonstration.",
            tourCard: { slug: "seoul-indigo-dyeing-workshop-with-local-expert", title: "Seoul: Indigo Dyeing Workshop with Local Expert", description: "A hands-on traditional indigo dyeing workshop with a local expert in Seoul.", price: "From $65", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a64645e4e2dd8c56ad20b2ca8582374790d50c7d6ee2f9ceb3326416f8382021.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting a bit stained, since indigo dye can be stubborn on fabric even with care.",
          },
        ],
        faqs: [
          { q: "Is the indigo dyeing workshop worth it in Seoul?", a: "Yes, for a genuinely tactile, one-of-a-kind souvenir and real technique behind a traditional natural-dye craft." },
        ],
      };

    case "is-hongdae-mother-of-pearl-workshop-worth-it-seoul":
      return {
        title: "Is the Hongdae Mother-of-Pearl Art Workshop Worth It in Seoul?",
        description: "An honest look at the Hongdae mother-of-pearl art workshop in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a64645e4e2dd8c56ad20b2ca8582374790d50c7d6ee2f9ceb3326416f8382021.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This Seoul workshop teaches the same traditional Najeonchilgi mother-of-pearl craft found in Busan, worth it specifically for Seoul-based travelers who want a rare, hands-on introduction to the technique without a separate trip south.",
            tourCard: { slug: "seoul-hongdae-mother-of-pearl-art-workshop", title: "Seoul: Hongdae Mother-of-Pearl Art Workshop", description: "A hands-on mother-of-pearl art workshop in Hongdae, Seoul.", price: "From $44", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a64645e4e2dd8c56ad20b2ca8582374790d50c7d6ee2f9ceb3326416f8382021.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Pack your finished piece carefully — mother-of-pearl inlay can be delicate on the trip home.",
          },
        ],
        faqs: [
          { q: "Is the Hongdae mother-of-pearl workshop worth it in Seoul?", a: "Yes, for a rare hands-on introduction to this traditional craft without needing a separate trip to Busan." },
        ],
      };

    case "is-kpop-dance-class-worth-it-seoul":
      return {
        title: "Is the K-Pop Dance Class near Lotte World Worth It in Seoul?",
        description: "An honest look at the K-pop dance class near Lotte World/Tower in Seoul, with video included.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a67aa92baa6916c824ba2797bf7bc54bdad278eefd402d771131c5105162f120.jpeg",
        sections: [
          {
            title: "The Short Answer",
            content: "This beginner-friendly dance class teaches a real K-pop choreography routine with a video to take home, worth it specifically for fans who want an active, participatory experience rather than just watching performers or recording a track.",
            tourCard: { slug: "seoul-k-pop-dance-class-near-lotte-worldtower", title: "Seoul: K-Pop Dance Class near Lotte World/Tower + Video Incl", description: "A beginner-friendly K-pop dance class near Lotte World, with video included.", price: "From $63", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a67aa92baa6916c824ba2797bf7bc54bdad278eefd402d771131c5105162f120.jpeg" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable clothes and shoes you can move in — this is an active dance class, not a seated demonstration.",
          },
        ],
        faqs: [
          { q: "Is the K-pop dance class worth it in Seoul?", a: "Yes, for fans wanting an active, participatory experience with a real choreography routine and a video to take home." },
        ],
      };

    case "is-bukhansan-trekking-worth-it-seoul":
      return {
        title: "Is the Bukhansan National Park Private Trekking Tour Worth It in Seoul?",
        description: "An honest look at the Bukhansan National Park private trekking tour, one of the few major national parks reachable within city limits.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/285b1d63d7e4473dca34cbba8f133d98c6500ddc7edf7ce29b275cdca3dfe767.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Bukhansan is a genuine granite-peak national park sitting almost entirely within Seoul's city limits, giving real mountain hiking without a day-trip commute, worth it for travelers wanting an active outdoor day without leaving the city.",
            tourCard: { slug: "seoul-bukhansan-national-park-private-trekking", title: "Seoul: Bukhansan National Park Private Trekking Tour", description: "A private trekking tour through Bukhansan National Park in Seoul.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/285b1d63d7e4473dca34cbba8f133d98c6500ddc7edf7ce29b275cdca3dfe767.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear real hiking footwear — Bukhansan's granite sections involve genuine scrambling, not a paved park walk.",
          },
        ],
        faqs: [
          { q: "Is Bukhansan National Park worth trekking in Seoul?", a: "Yes, it's a genuine mountain park within the city limits, giving real hiking without a day-trip commute out of Seoul." },
        ],
      };

    case "is-namhansanseong-fortress-tour-worth-it-seoul":
      return {
        title: "Is the Royal Tombs and Namhansanseong Fortress Tour Worth It in Seoul?",
        description: "An honest look at the royal tombs and Namhansanseong Fortress tour, a UNESCO mountain fortress outside central Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5e04f44d1e4c1629d2a813e22e26e6033f7d08c060fa84111dd4c285f3f9957.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Namhansanseong is a UNESCO-listed mountain fortress with a genuinely different, less-visited atmosphere than the city's main palaces, and pairing it with the Joseon royal tombs gives a fuller historical day, worth it for travelers who've already covered Gyeongbokgung and want deeper history.",
            tourCard: { slug: "seoul-royal-tombs-namhansanseong-fortress-tour", title: "Seoul: Royal Tombs & Namhansanseong Fortress Tour", description: "A tour combining the Joseon royal tombs with Namhansanseong Fortress near Seoul.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5e04f44d1e4c1629d2a813e22e26e6033f7d08c060fa84111dd4c285f3f9957.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes, since the fortress walls involve a genuine walking circuit along the mountain ridge.",
          },
        ],
        faqs: [
          { q: "Is the royal tombs and Namhansanseong Fortress tour worth it in Seoul?", a: "Yes, for travelers who've already seen the main palaces and want deeper, less-visited history." },
        ],
      };

    case "is-pocheon-day-trip-worth-it-seoul":
      return {
        title: "Is the Pocheon Day Trip with Herb Island and Hantan Geo Park Worth It from Seoul?",
        description: "An honest look at the Pocheon day trip covering Herb Island and Hantan GEO Park.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/59f39fe937732f1e86bc1e52450022663bed3a65b25b6fc46101ac53def5c419.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing Herb Island's gardens with Hantan Geo Park's volcanic basalt cliffs gives a genuinely varied nature day north of Seoul, worth it for travelers wanting scenery and photo stops distinct from the usual palace-and-market circuit.",
            tourCard: { slug: "pocheon-day-trip-with-herb-island-hantan-geo-park", title: "Pocheon Day Trip with Herb Island, Hantan GEO Park & Others", description: "A day trip to Pocheon covering Herb Island and Hantan GEO Park.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/59f39fe937732f1e86bc1e52450022663bed3a65b25b6fc46101ac53def5c419.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring a camera with a wide lens, since Hantan Geo Park's basalt cliffs and suspension bridges are the visual highlight.",
          },
        ],
        faqs: [
          { q: "Is the Pocheon day trip worth it from Seoul?", a: "Yes, for a genuinely varied nature day combining gardens and volcanic basalt scenery, distinct from the usual city circuit." },
        ],
      };

    case "is-cheorwon-hantangang-geo-park-worth-it-seoul":
      return {
        title: "Is the Cheorwon Hantangang GEO Park Skywalk and Temple Tour Worth It from Seoul?",
        description: "An honest look at the Cheorwon Hantangang GEO Park skywalk and temple day tour.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8f9cae3ed2ff094c357d8663fac3b74aef70fba99402bea16ef5304a82771113.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Cheorwon's Hantangang Geo Park skywalk sits over a dramatic volcanic gorge near the DMZ border region, giving a genuinely striking view most Seoul itineraries skip entirely, worth it for travelers wanting a dramatic nature stop paired with border-area history.",
            tourCard: { slug: "cheorwon-hantangang-geo-park-skywalk-and-temple", title: "Cheorwon Hantangang GEO Park Skywalk, and Temple Day Tour", description: "A day tour to Cheorwon's Hantangang GEO Park skywalk and a nearby temple.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8f9cae3ed2ff094c357d8663fac3b74aef70fba99402bea16ef5304a82771113.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Check the skywalk's glass-floor section if you're uneasy with heights, since it's the centerpiece of the stop.",
          },
        ],
        faqs: [
          { q: "Is the Cheorwon Hantangang GEO Park tour worth it from Seoul?", a: "Yes, for a genuinely striking volcanic gorge skywalk most Seoul itineraries skip, paired with border-area history." },
        ],
      };

    case "is-kpop-debut-premium-package-worth-it-seoul":
      return {
        title: "Is the Seoul K-pop Debut Premium Package Worth It?",
        description: "An honest look at the K-pop Debut Premium Package in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d2e2e6b10876a7568dfdb71ebbcbf52b8d70aaaad898b3b5ee55734620262ca.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A premium production package covering styling, choreography, and a polished music-video-style shoot gives fans a genuine taste of the K-pop idol experience, worth it specifically for travelers wanting a memorable, highly produced souvenir rather than a casual photo.",
            tourCard: { slug: "seoul-your-k-pop-debut-premium-package", title: "Seoul: Your K-pop Debut Premium Package", description: "A premium K-pop styling, choreography, and photo/video shoot package in Seoul.", price: "From $1332", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d2e2e6b10876a7568dfdb71ebbcbf52b8d70aaaad898b3b5ee55734620262ca.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Practice the choreography beforehand if provided, since the session time is limited and goes faster than expected once filming starts.",
          },
        ],
        faqs: [
          { q: "Is the K-pop Debut Premium Package worth it in Seoul?", a: "Yes, specifically for K-pop fans wanting a genuinely polished, memorable production experience rather than a casual photo session." },
        ],
      };

    case "is-incheon-landing-operation-history-worth-it-seoul":
      return {
        title: "Is the Incheon Landing Operation History Tour with Col VINCERO Worth It?",
        description: "An honest look at the Incheon Landing Operation history tour led by Col VINCERO.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a87472b00b35b6912e8af194e0a8e60c58f63db15a0c52d2170a1f11cff81519.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A tour led by a retired colonel specializing in military history gives genuine expert depth on the 1950 Incheon Landing, one of the Korean War's pivotal operations, worth it for travelers with real interest in military history rather than a general sightseeing stop.",
            tourCard: { slug: "incheon-landing-operation-history-tour-with-col", title: "Incheon Landing Operation: History Tour with Col VINCERO", description: "A history tour of the Incheon Landing Operation led by a retired colonel.", price: "From $873", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a87472b00b35b6912e8af194e0a8e60c58f63db15a0c52d2170a1f11cff81519.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Read up on the broader Korean War timeline beforehand, since the expert-led commentary carries more weight with that context.",
          },
        ],
        faqs: [
          { q: "Is the Incheon Landing Operation history tour worth it?", a: "Yes, for travelers with real interest in military history wanting genuine expert depth, led by a retired colonel specializing in the subject." },
        ],
      };

    case "is-daegwallyeong-ranch-bts-bus-stop-worth-it-seoul":
      return {
        title: "Is the Daegwallyeong Ranch & BTS Bus Stop Private Tour Worth It from Seoul?",
        description: "An honest look at the Daegwallyeong Ranch and BTS bus stop private tour from Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff57f593107a863a3540baf62d3e2eb0f500359b7ce66e285e7b8187e661062f.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing Daegwallyeong's scenic highland ranch with a stop at a bus shelter made famous by BTS gives fans a genuine landmark pilgrimage alongside real countryside scenery, worth it for K-pop fans wanting both nature and fandom in one trip.",
            tourCard: { slug: "from-seoul-daegwallyeong-ranch-bts-bus-stop", title: "From Seoul: Daegwallyeong Ranch & BTS Bus Stop Private Tour", description: "A private tour to Daegwallyeong Ranch and a BTS-famous bus stop from Seoul.", price: "From $909", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff57f593107a863a3540baf62d3e2eb0f500359b7ce66e285e7b8187e661062f.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This is a long 12-hour day given the distance to Daegwallyeong, so prepare for substantial travel time each way.",
          },
        ],
        faqs: [
          { q: "Is the Daegwallyeong Ranch and BTS bus stop tour worth it from Seoul?", a: "Yes, for K-pop fans wanting a genuine landmark pilgrimage alongside real highland countryside scenery in one trip." },
        ],
      };

    case "is-effortless-transit-layover-worth-it-seoul":
      return {
        title: "Is the Seoul Effortless Transit & Tailored 10-Hour Layover Experience Worth It?",
        description: "An honest look at the tailored 10-hour layover experience in Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "A tailored layover tour built specifically around a long transit window makes genuine use of what would otherwise be dead airport time, worth it for travelers with a long layover who want a real taste of Seoul without missing their connection.",
            tourCard: { slug: "seoul-effortless-transit-tailored-10hr-layover", title: "Seoul: Effortless Transit & Tailored 10hr Layover Experience", description: "A tailored 10-hour layover experience in Seoul built around transit timing.", price: "From $970", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e83adac682525068c13880ea43e0dcf685f0e9146feb0243a603171589a2f62e.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Confirm your visa and transit status allows leaving the airport before booking, since rules vary by nationality.",
          },
        ],
        faqs: [
          { q: "Is the tailored 10-hour layover experience worth it in Seoul?", a: "Yes, for travelers with a long layover wanting a genuine taste of the city without risking their connection." },
        ],
      };

    case "is-mt-gwanaksan-trek-worth-it-seoul":
      return {
        title: "Is the Mt. Gwanaksan Full-Day Trek Worth It in Seoul?",
        description: "An honest look at the Mt. Gwanaksan full-day trek, a demanding hike within Seoul's own city limits.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/618c0f735c3b8a840ffdfe0afc0ebe33aeee042746a170efd1000971c649dbaf.jpg",
        sections: [
          { title: "The Short Answer", content: "Gwanaksan genuinely offers one of the more demanding hikes accessible directly from within Seoul, giving real elevation and rocky terrain without leaving the city, worth it for serious hikers wanting a proper trek rather than a casual park walk.", tourCard: { slug: "seoul-mt-gwanaksan-full-day-trek", title: "Seoul: Mt. Gwanaksan Full-Day Trek", description: "A full-day trek up Mt. Gwanaksan within Seoul.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/618c0f735c3b8a840ffdfe0afc0ebe33aeee042746a170efd1000971c649dbaf.jpg" } },
          { title: "Practical Tips", content: "Wear proper hiking boots — Gwanaksan's rocky sections genuinely require more grip than sneakers provide." },
        ],
        faqs: [
          { q: "Is the Mt. Gwanaksan trek worth it in Seoul?", a: "Yes, for serious hikers wanting a genuinely demanding trek with real elevation, accessible directly from within the city." },
        ],
      };

    case "is-mt-dobongsan-hiking-worth-it-seoul":
      return {
        title: "Is the Mt. Dobongsan National Park Hiking Tour Worth It in Seoul?",
        description: "An honest look at the Mt. Dobongsan National Park hiking tour with Sapaesan, a granite-peak trek on Seoul's northern edge.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b620570f4cc3b5db0b0835ed288f5d0d4486b4897c3c0084b91fd987130b8a92.jpg",
        sections: [
          { title: "The Short Answer", content: "Dobongsan's dramatic granite peaks give genuinely striking mountain scenery within easy reach of the city, worth it for hikers wanting real alpine-style views without a long trip outside Seoul.", tourCard: { slug: "seoul-mt-dobongsan-national-park-hiking-with", title: "Seoul: Mt. Dobongsan National Park Hiking with Sapaesan", description: "A hiking tour of Mt. Dobongsan National Park and Sapaesan in Seoul.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b620570f4cc3b5db0b0835ed288f5d0d4486b4897c3c0084b91fd987130b8a92.jpg" } },
          { title: "Practical Tips", content: "Go on a clear day — Dobongsan's granite peak views are genuinely the highlight, and they're lost in fog or haze." },
        ],
        faqs: [
          { q: "Is the Mt. Dobongsan hiking tour worth it in Seoul?", a: "Yes, for hikers wanting genuinely striking granite-peak mountain scenery without a long trip outside the city." },
        ],
      };

    case "is-seoul-city-wall-trekking-worth-it-seoul":
      return {
        title: "Is the Seoul City Wall Trekking Tour Worth It?",
        description: "An honest look at the Seoul City Wall trekking tour, following the historic fortress wall around the old city.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d07989bd8c3052d8b2f9c016189f2dfca0f727d87d0fd469e60a2fda048ac476.jpg",
        sections: [
          { title: "The Short Answer", content: "Tracing the historic Seoul City Wall gives a genuinely different way to see the old city's layout and skyline than visiting individual palaces, worth it for travelers wanting both exercise and a real sense of the capital's historic fortifications.", tourCard: { slug: "seoul-city-wall-trekking-tour", title: "Seoul City Wall Trekking Tour", description: "A trekking tour along the historic Seoul City Wall.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d07989bd8c3052d8b2f9c016189f2dfca0f727d87d0fd469e60a2fda048ac476.jpg" } },
          { title: "Practical Tips", content: "Wear comfortable walking shoes — the full wall trek genuinely covers significant distance and some steep sections." },
        ],
        faqs: [
          { q: "Is the Seoul City Wall trekking tour worth it?", a: "Yes, for a genuinely different, more active way to see the old city's historic fortifications and skyline." },
        ],
      };

    case "is-paju-mt-gamaksan-gloucester-worth-it-seoul":
      return {
        title: "Is the Paju Mt. Gamaksan Hike and Gloucester Monument Tour Worth It?",
        description: "An honest look at the Paju Mt. Gamaksan hike combined with a visit to the Gloucester Monument near Seoul.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fea8d35c4f9985b4613a8ed60461c21473052dc6421883d2601c5b9a7ff934a.jpg",
        sections: [
          { title: "The Short Answer", content: "Combining a genuine mountain hike with the Gloucester Monument's Korean War history gives a worthwhile mix of nature and history, distinct from Seoul's more commonly visited DMZ tours, worth it for travelers wanting a less crowded perspective on the war's history.", tourCard: { slug: "paju-mt-gamaksan-hike-and-gloucester-monument", title: "Paju Mt. Gamaksan Hike and Gloucester Monument", description: "A hike up Mt. Gamaksan combined with a visit to the Gloucester Monument near Seoul.", price: "From $669", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1fea8d35c4f9985b4613a8ed60461c21473052dc6421883d2601c5b9a7ff934a.jpg" } },
          { title: "Practical Tips", content: "Read up on the Battle of the Imjin River beforehand — the Gloucester Monument's significance genuinely means more with that context." },
        ],
        faqs: [
          { q: "Is the Paju Mt. Gamaksan hike and Gloucester Monument tour worth it?", a: "Yes, for travelers wanting a genuine mix of nature and lesser-known Korean War history, distinct from the standard DMZ tours." },
        ],
      };

    case "is-street-food-sashimi-dinner-worth-it-seoul":
      return {
        title: "Is the Seoul Street Food and Sashimi Dinner with a Gourmet Guide Worth It?",
        description: "An honest look at Seoul's street food and sashimi dinner tour led by a gourmet guide.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9456407f62bc10ba8a758af8a186343b1c1846207c92178d170769f2521e2487.jpg",
        sections: [
          { title: "The Short Answer", content: "Pairing street food stops with a proper sashimi dinner, led by a genuinely knowledgeable gourmet guide, gives a well-rounded culinary evening spanning both casual and refined Korean dining, worth it for food-focused travelers wanting curated variety in one night.", tourCard: { slug: "seoul-street-food-and-sashimi-dinner-with-gourmet", title: "Seoul: Street Food and Sashimi Dinner with Gourmet Guide", description: "A street food and sashimi dinner tour with a gourmet guide in Seoul.", price: "From $679", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9456407f62bc10ba8a758af8a186343b1c1846207c92178d170769f2521e2487.jpg" } },
          { title: "Practical Tips", content: "Pace yourself across the street food stops — you'll genuinely want room left for the sashimi dinner portion." },
        ],
        faqs: [
          { q: "Is the Seoul street food and sashimi dinner tour worth it?", a: "Yes, for food-focused travelers wanting genuinely curated variety spanning both casual and refined Korean dining in one evening." },
        ],
      };

    default:
      return null;
  }
}
