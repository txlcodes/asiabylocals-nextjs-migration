import { CityInfoData } from './cityInfoContent';

export function getIsraelInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-old-city-tour-jerusalem":
            return {
                title: "Which Is the Best Old City Tour in Jerusalem?",
                description: "Compare real Jerusalem Old City tours — from a 3-hour circle walk to private tours of all four quarters and a Mount of Olives combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jerusalem's Old City is divided into four quarters (Jewish, Muslim, Christian, Armenian), and tours differ mainly in whether they cover all four or focus on specific sites like the Mount of Olives.", tourCard: { slug: "jerusalem-old-city-3-hours-circle-walking-tour", title: "Jerusalem: Old City 3 Hours Circle Walking Tour", description: "A standard circular walking tour of the Old City.", price: "From $1239", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg" } },
                    { title: "Best for Full Coverage: All Four Quarters", content: "This explicitly covers all four quarters of the Old City rather than focusing on just one or two.", tourCard: { slug: "jerusalem-old-city-private-tour-of-all-four", title: "Jerusalem Old City: Private Tour of All Four Quarters", description: "A private tour covering all four Old City quarters.", price: "From $1078", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg" } },
                    { title: "Best Combo: + Mount of Olives", content: "Pairs the Old City walk with the Mount of Olives viewpoint overlooking it.", tourCard: { slug: "jerusalem-guided-old-city-tour-with-mount-of", title: "Jerusalem: Guided Old City Tour with Mount of Olives Visit", description: "The Old City combined with a Mount of Olives visit.", price: "From $325", duration: "5 hours" } },
                    { title: "Best Flexible Option: Customizable Private Highlights", content: "Lets you customize which highlights to prioritize rather than following a fixed route.", tourCard: { slug: "jerusalem-customizable-private-highlights-walking", title: "Jerusalem: Customizable Private Highlights Walking Tour", description: "A flexible private tour you can customize.", price: "From $263", duration: "3 hours" } },
                    { title: "Best for Sacred Sites: Private Walking Tour", content: "Focused specifically on the Old City's must-see sacred sites rather than general sightseeing.", tourCard: { slug: "jerusalem-private-walking-tour-of-must-see-sacred", title: "Jerusalem: Private Walking Tour of Must-See Sacred Sites", description: "A sacred-sites-focused private walking tour.", price: "From $263", duration: "4 hours" } },
                ],
                faqs: [
                    { q: "What is the best Old City tour in Jerusalem?", a: "A standard circular walk suits most visitors; go for the all-four-quarters version if you want full coverage." },
                    { q: "How long does it take to see Jerusalem's Old City?", a: "A half-day covers the highlights; a full private day covers all four quarters properly." }
                ],
            };

        case "best-bethlehem-day-trip-jerusalem":
            return {
                title: "Which Is the Best Bethlehem Day Trip from Jerusalem?",
                description: "Compare real Bethlehem day trips from Jerusalem — from a half-day guided tour to combos with Jericho and the Jordan River.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bethlehem (in the West Bank) requires a checkpoint crossing, so nearly every tour is guided door-to-door. The main choice is half-day Bethlehem-only versus a fuller day adding Jericho and other sacred sites.", tourCard: { slug: "from-jerusalem-half-day-bethlehem-guided-tour", title: "From Jerusalem: Half-Day Bethlehem Guided Tour", description: "A half-day guided tour to Bethlehem.", price: "From $98", duration: "4 hours" } },
                    { title: "Cheapest: Half-Day Guided Tour", content: "At $98, this is the lowest-priced way to visit Bethlehem with a guide handling checkpoint logistics.", tourCard: { slug: "from-jerusalem-half-day-bethlehem-guided-tour", title: "From Jerusalem: Half-Day Bethlehem Guided Tour", description: "The budget half-day Bethlehem tour.", price: "From $98", duration: "4 hours" } },
                    { title: "Best Full-Day Option: Jerusalem & Bethlehem Full-Day", content: "Extends the Bethlehem visit into a full day combined with more of Jerusalem itself.", tourCard: { slug: "jerusalem-and-bethlehem-full-day-tour-from", title: "Jerusalem and Bethlehem Full-Day Tour from Jerusalem", description: "A full-day combo of Jerusalem and Bethlehem.", price: "From $138", duration: "10 hours" } },
                    { title: "Best with Sacred Sites: Jerusalem & Bethlehem Sacred Sites", content: "Pairs Bethlehem with Jerusalem's own sacred sites in one organized day.", tourCard: { slug: "from-jerusalem-jerusalem-bethlehem-sacred-sites", title: "From Jerusalem: Jerusalem & Bethlehem Sacred Sites Tour", description: "Bethlehem combined with Jerusalem's sacred sites.", price: "From $195", duration: "7 hours" } },
                    { title: "Most Comprehensive: + Jericho & Jordan River", content: "The widest-ranging version, adding Jericho and the Jordan River to the Bethlehem visit.", tourCard: { slug: "from-jerusalem-bethlehem-jericho-jordan-river-day", title: "From Jerusalem: Bethlehem, Jericho & Jordan River Day Tour", description: "Bethlehem combined with Jericho and the Jordan River.", price: "From $195", duration: "10 hours" } },
                ],
                faqs: [
                    { q: "What is the best Bethlehem day trip from Jerusalem?", a: "A half-day guided tour suits most visitors; add Jericho and the Jordan River for a fuller day." },
                    { q: "Do I need a guide to visit Bethlehem?", a: "Practically yes — Bethlehem is in the West Bank and requires a checkpoint crossing that guided tours handle for you." }
                ],
            };

        case "best-dead-sea-day-trip-jerusalem":
            return {
                title: "Which Is the Best Dead Sea Day Trip from Jerusalem?",
                description: "Compare real Dead Sea day trips from Jerusalem — from a half-day floating-focused trip to combos with Masada and Ein Gedi.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "A half-day trip covers just the Dead Sea float; most full-day versions combine it with Masada's clifftop fortress and Ein Gedi's nature reserve, since all three sit along the same route.", tourCard: { slug: "dead-sea-half-day-tour-from-jerusalem", title: "Dead Sea: Half-day Tour from Jerusalem", description: "A half-day trip focused on the Dead Sea float.", price: "From $719", duration: "4.5 hours" } },
                    { title: "Best Full-Day Combo: Masada, Ein Gedi & Dead Sea", content: "The classic full-day combo covering all three major Judean Desert sites.", tourCard: { slug: "jerusalem-masada-ein-gedi-dead-sea-tour", title: "Jerusalem: Masada, Ein Gedi & Dead Sea Tour", description: "The full-day Masada/Ein Gedi/Dead Sea combo.", price: "From $129", duration: "1 day" } },
                    { title: "Best via Bethlehem: Dead Sea with Bethlehem & Jericho", content: "Routes through Bethlehem and Jericho on the way to the Dead Sea, combining the West Bank sites with the float.", tourCard: { slug: "from-jerusalem-dead-sea-day-trip-via-bethlehem", title: "From Jerusalem: Dead Sea Day Trip via Bethlehem & Jericho", description: "A Dead Sea trip routed through Bethlehem and Jericho.", price: "From $212", duration: "8 hours" } },
                    { title: "Best Overnight Option: 2-Day Hidden Gems & Dead Sea", content: "For travellers who want to stay overnight near the Dead Sea rather than rushing back the same day.", tourCard: { slug: "jerusalem-2-day-hidden-gems-dead-sea-overnight", title: "Jerusalem: 2-Day Hidden Gems & Dead Sea Overnight Tour", description: "A 2-day trip with an overnight Dead Sea stay.", price: "From $1755", duration: "2 days" } },
                ],
                faqs: [
                    { q: "What is the best Dead Sea day trip from Jerusalem?", a: "The full-day Masada/Ein Gedi/Dead Sea combo suits most visitors; a half-day trip works if the float is your only priority." },
                    { q: "Can the Dead Sea be visited as a half-day trip?", a: "Yes, a half-day tour focuses just on the float without Masada or Ein Gedi." }
                ],
            };

        case "is-western-wall-heritage-tour-worth-it-jerusalem":
            return {
                title: "Is a Western Wall Jewish Heritage Tour Worth It in Jerusalem?",
                description: "An honest look at Jerusalem's Jewish Heritage Tour with Western Wall Visit.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour pairs a visit to the Western Wall, one of Judaism's holiest sites, with broader Jewish heritage context — worth it for travellers wanting depth beyond just seeing the wall itself.", tourCard: { slug: "jerusalem-jewish-heritage-tour-with-western-wall", title: "Jerusalem: Jewish Heritage Tour with Western Wall Visit", description: "A Jewish heritage tour including the Western Wall.", price: "From $1299", duration: "7 hours" } }
                ],
                faqs: [
                    { q: "Is a Jewish heritage tour with Western Wall visit worth it?", a: "Yes for travellers wanting historical and religious context beyond just viewing the wall." }
                ],
            };

        case "is-city-of-david-mount-of-olives-worth-it-jerusalem":
            return {
                title: "Is the City of David & Mount of Olives Tour Worth It?",
                description: "An honest look at Jerusalem's City of David & Mountain of Olives History Tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "The City of David is an active archaeological site revealing Jerusalem's earliest history, paired here with the panoramic Mount of Olives viewpoint — a solid pick for history-focused visitors.", tourCard: { slug: "jerusalem-city-of-david-mountain-of-olives", title: "Jerusalem: City of David & Mountain of Olives History Tour", description: "A history tour combining the City of David and Mount of Olives.", price: "From $234", duration: "2 hours" } }
                ],
                faqs: [
                    { q: "Is the City of David tour worth it?", a: "Yes for history-focused visitors — it's an active archaeological dig site paired with great city views." }
                ],
            };

        case "is-mamilla-mahane-yehuda-tour-worth-it-jerusalem":
            return {
                title: "Is the Mamilla Mall & Mahane Yehuda Market Tour Worth It?",
                description: "An honest look at Jerusalem's New City Tour of Mamilla Mall and Mehane Yehuda.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "This covers Jerusalem's modern side — Mamilla's upscale shopping promenade and Mahane Yehuda's lively food market — a good contrast if you've spent the rest of your trip in the Old City.", tourCard: { slug: "jerusalem-new-city-tour-of-mamilla-mall-and", title: "Jerusalem: New City Tour of Mamilla Mall and Mehane Yehuda", description: "A tour of Jerusalem's modern shopping and market areas.", price: "From $169", duration: "3 hours" } }
                ],
                faqs: [
                    { q: "Is the Mamilla/Mahane Yehuda tour worth it?", a: "Yes as a contrast to the Old City — it shows Jerusalem's modern commercial and food scene." }
                ],
            };

        case "is-judean-desert-jeep-tour-worth-it-jerusalem":
            return {
                title: "Is the Judean Desert Jeep Adventure Worth It from Jerusalem?",
                description: "An honest look at the Judean Desert Jeep Adventure from Jerusalem.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "A 4x4 jeep tour through the dramatic Judean Desert landscape just outside Jerusalem — a good active option for travellers who've had enough walking tours and want something more adventurous.", tourCard: { slug: "from-jerusalem-judean-desert-jeep-adventure", title: "From Jerusalem: Judean Desert Jeep Adventure", description: "A 4x4 jeep adventure through the Judean Desert.", price: "From $172", duration: "4 hours" } }
                ],
                faqs: [
                    { q: "Is the Judean Desert jeep tour worth it?", a: "Yes for travellers wanting an active, scenic break from walking tours." }
                ],
            };

        case "is-dig-for-a-day-worth-it-jerusalem":
            return {
                title: "Is Dig for a Day Worth It Near Jerusalem?",
                description: "An honest look at the Dig for a Day Archaeological Experience near Jerusalem.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "This lets you participate in a real archaeological excavation near Jerusalem rather than just viewing sites from the outside — a genuinely hands-on option for history enthusiasts, especially families with curious kids.", tourCard: { slug: "dig-for-a-day-archaeological-experience-near", title: "Dig for a Day Archaeological Experience near Jerusalem", description: "A hands-on archaeological dig experience.", price: "From $660", duration: "3 hours" } }
                ],
                faqs: [
                    { q: "Is Dig for a Day worth it?", a: "Yes for history enthusiasts and families wanting a hands-on alternative to standard sightseeing." }
                ],
            };

        case "jerusalem-travel-guide-2026":
            return {
                title: "Jerusalem Travel Guide 2026",
                description: "One of the world's most historically layered cities — what first-timers need to know about visiting Jerusalem.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Why Visit Jerusalem", content: "Jerusalem's Old City holds sites sacred to Judaism, Christianity, and Islam within walking distance of each other — the Western Wall, Church of the Holy Sepulchre, and Dome of the Rock among them. Bethlehem and the Dead Sea are both easy day trips." },
                    { title: "Getting Around", content: "The Old City is pedestrian-only and best explored on foot or with a guide given its maze-like layout; the light rail and buses cover the newer parts of the city." }
                ],
                faqs: [
                    { q: "Is Jerusalem worth visiting?", a: "Yes, for its layered religious history and easy access to Bethlehem and the Dead Sea." }
                ],
            };

        case "best-time-to-visit-jerusalem":
            return {
                title: "Best Time to Visit Jerusalem",
                description: "When to visit Jerusalem for comfortable weather and manageable crowds.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Seasonal Overview", content: "Spring (March-May) and autumn (September-November) offer the most comfortable temperatures. Summer is hot and dry; winter is mild but can see occasional rain and even rare snow. Major religious holidays (Jewish, Christian, Muslim) bring significant crowds and should be factored into timing." }
                ],
                faqs: [
                    { q: "What is the best time to visit Jerusalem?", a: "Spring or autumn for comfortable weather, avoiding major religious holiday periods if you want smaller crowds." }
                ],
            };

        case "jerusalem-1-day-itinerary":
            return {
                title: "Jerusalem 1-Day Itinerary",
                description: "A realistic one-day plan for Jerusalem's Old City.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Morning", content: "Start at the Western Wall and Jewish Quarter, then walk to the Church of the Holy Sepulchre in the Christian Quarter." },
                    { title: "Afternoon", content: "Explore the Muslim Quarter's markets, then head up to the Mount of Olives for panoramic views over the Old City." },
                    { title: "Evening", content: "Finish with dinner in the New City, around Mamilla or Mahane Yehuda market." }
                ],
                faqs: [
                    { q: "Can Jerusalem's Old City be seen in one day?", a: "The core highlights yes, though many travellers prefer two days to go deeper into each quarter." }
                ],
            };

        case "israel-visa-guide-for-tourists":
            return {
                title: "Israel Visa Guide for Tourists (Jerusalem)",
                description: "Visa requirements for visiting Jerusalem and Israel.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Visa Requirements", content: "Many nationalities get visa-free entry to Israel for a set period on arrival. Check Israel's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Jerusalem/Israel?", a: "Many nationalities get visa-free entry; verify current requirements for your passport before travel." }
                ],
            };

        case "is-jerusalem-safe":
            return {
                title: "Is Jerusalem Safe for Tourists?",
                description: "An honest look at safety in Jerusalem for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jerusalem's main tourist areas are generally safe for visitors who stay aware of their surroundings. Regional security conditions can shift, so check current travel advisories for Israel and the West Bank before your trip regardless of how the city feels day to day." }
                ],
                faqs: [
                    { q: "Is Jerusalem safe for tourists?", a: "Generally yes in the main tourist areas, but check current regional travel advisories before your trip." }
                ],
            };

        case "jerusalem-dress-code-guide":
            return {
                title: "Jerusalem Dress Code Guide",
                description: "What to wear when visiting Jerusalem's religious sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Dress Code Basics", content: "Modest dress (shoulders and knees covered) is expected at the Western Wall, Church of the Holy Sepulchre, and other religious sites — bring a scarf or light cover-up even in summer heat." }
                ],
                faqs: [
                    { q: "What should I wear in Jerusalem's Old City?", a: "Modest clothing covering shoulders and knees for religious sites; a scarf is a useful backup." }
                ],
            };

        case "jerusalem-food-guide":
            return {
                title: "Jerusalem Food Guide",
                description: "What to eat in Jerusalem, from market stalls to traditional dishes.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Where and What to Eat", content: "Mahane Yehuda Market is the best place for a hands-on food experience, with everything from fresh produce to ready-to-eat stalls. Try hummus, sabich, and fresh-baked bread from the Old City's bakeries." }
                ],
                faqs: [
                    { q: "What food is Jerusalem known for?", a: "Hummus, sabich, and fresh market food, especially around Mahane Yehuda Market." }
                ],
            };

        case "jerusalem-public-transport-guide":
            return {
                title: "Jerusalem Public Transport Guide",
                description: "How to get around Jerusalem without a car.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "Getting Around", content: "The Old City is pedestrian-only, so walking (or a guided tour) is the only way to see it. The light rail and bus network cover the newer parts of the city efficiently." }
                ],
                faqs: [
                    { q: "Is there public transport in Jerusalem's Old City?", a: "No, it's pedestrian-only — walking or a guide is required there; the light rail covers the newer city." }
                ],
            };

        case "jerusalem-old-city-quarters-guide":
            return {
                title: "Jerusalem Old City Quarters Guide",
                description: "Understanding the four quarters of Jerusalem's Old City.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "The Four Quarters", content: "The Old City is divided into the Jewish Quarter (Western Wall), Muslim Quarter (Dome of the Rock, markets), Christian Quarter (Church of the Holy Sepulchre), and the smaller Armenian Quarter — each with a distinct character worth exploring separately if you have time." }
                ],
                faqs: [
                    { q: "What are the four quarters of Jerusalem's Old City?", a: "Jewish, Muslim, Christian, and Armenian Quarters, each centered on different religious and historical sites." }
                ],
            };

        case "jerusalem-to-tel-aviv-guide":
            return {
                title: "Jerusalem to Tel Aviv: Getting There",
                description: "How to get from Jerusalem to Tel Aviv, Israel's two largest cities.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "How to Get There", content: "The train from Jerusalem's Yitzhak Navon station to Tel Aviv takes about an hour and is the most comfortable option; buses are cheaper and run frequently, making a day trip between the two cities easy in either direction." }
                ],
                faqs: [
                    { q: "How far is Tel Aviv from Jerusalem?", a: "About an hour by train or bus, making a day trip between the two cities easy." }
                ],
            };

        case "jerusalem-to-bethlehem-checkpoint-guide":
            return {
                title: "Jerusalem to Bethlehem: Crossing the Checkpoint",
                description: "What to know about crossing into Bethlehem from Jerusalem.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-jerusalem.jpg",
                sections: [
                    { title: "How It Works", content: "Bethlehem is in the West Bank and requires crossing a checkpoint. A guided tour is the simplest way to handle this, since the operator manages the crossing logistics for you — independent travel is possible but less straightforward for first-time visitors." }
                ],
                faqs: [
                    { q: "Do I need to cross a checkpoint to visit Bethlehem?", a: "Yes, Bethlehem is in the West Bank — a guided tour handles this crossing for you." }
                ],
            };

        case "best-jaffa-old-city-tour-tel-aviv":
            return {
                title: "Which Is the Best Jaffa Old City Tour from Tel Aviv?",
                description: "Compare real Jaffa Old City tours — from a $78 sunset walk to archaeology-focused, flea market, and private storytelling tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jaffa's old port, flea market, and winding alleys support several different angles on the same compact area — sunset views, archaeology, legends, and food/history combos all cover overlapping ground differently.", tourCard: { slug: "tel-aviv-old-jaffa-sunset-tour-legends-sea-views", title: "Tel Aviv: Old Jaffa Sunset Tour — Legends & Sea Views", description: "A sunset-timed walk through Jaffa with sea views.", price: "From $78", duration: "1.5 hours" } },
                    { title: "Best for Archaeology: Hidden Jaffa", content: "This leans into Jaffa's archaeology and ancient-port history rather than general sightseeing.", tourCard: { slug: "hidden-jaffa-archaeology-art-legends-of-the", title: "Hidden Jaffa: Archaeology, Art & Legends of the Ancient Port", description: "An archaeology-focused walk through Jaffa.", price: "From $78", duration: "1.5 hours" } },
                    { title: "Best for Views: Skyline Walking Tour", content: "Focused specifically on Jaffa's skyline and sunset viewpoints over the sea.", tourCard: { slug: "jaffa-sunset-skyline-walking-tour", title: "Jaffa Sunset Skyline Walking Tour", description: "A viewpoint-focused Jaffa sunset walk.", price: "From $117", duration: "1.5 hours" } },
                    { title: "Best for Food & History: Flea Market Combo", content: "Pairs Jaffa's history with its flea market and food scene in one tour.", tourCard: { slug: "tel-avivfood-history-tour-of-jaffa-old-city-flea", title: "Tel Aviv: Food & History Tour of Jaffa Old City & Flea Market", description: "Jaffa's history combined with its flea market and food.", price: "From $169", duration: "2 hours" } },
                    { title: "Best for Hidden Spots: Jaffa Hidden Gems", content: "Aims at lesser-known corners of Jaffa beyond the standard sights.", tourCard: { slug: "jaffa-tour-hidden-gems", title: "Jaffa Tour: Hidden Gems", description: "A tour of Jaffa's lesser-known spots.", price: "From $189", duration: "2 hours" } },
                    { title: "Best Private Option: Timeless Tales", content: "A private storytelling-focused version of the Jaffa walk for those wanting a more personal pace.", tourCard: { slug: "jaffas-timeless-tales-legends-labyrinths-private", title: "Jaffa's Timeless Tales: Legends & Labyrinths Private Tour", description: "A private, story-driven Jaffa tour.", price: "From $532", duration: "3 hours" } },
                ],
                faqs: [
                    { q: "What is the best Jaffa tour from Tel Aviv?", a: "A sunset walking tour suits most visitors; go private for a more personal pace." },
                    { q: "Is Jaffa walkable without a guide?", a: "Yes, but a guide adds context to its layered history and hidden corners." }
                ],
            };

        case "best-carmel-market-food-tour-tel-aviv":
            return {
                title: "Which Is the Best Carmel Market Food Tour in Tel Aviv?",
                description: "Compare real Carmel Market and Sarona Market food tours in Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Carmel Market is Tel Aviv's classic food-tour setting; Sarona Market offers a more modern, upscale alternative.", tourCard: { slug: "carmel-market-food-tour", title: "Carmel Market Food Tour", description: "A food tour through Tel Aviv's classic Carmel Market.", price: "From $98", duration: "2 hours" } },
                    { title: "Best with Neighborhood Context: Carmel Market & Walking Tour", content: "Combines the market with a walk through surrounding neighborhoods.", tourCard: { slug: "tel-aviv-carmel-market-neighborhood-guided", title: "Tel Aviv: Carmel Market & Neighborhood Guided Walking Tour", description: "Carmel Market combined with a neighborhood walk.", price: "From $117", duration: "1.5 hours" } },
                    { title: "Best Modern Alternative: Sarona Market", content: "A more upscale, modern market food tour, a different vibe from Carmel's classic bazaar.", tourCard: { slug: "food-tour-of-sarona-market-and-azraeli-center", title: "Food Tour of Sarona Market and Azraeli Center", description: "A food tour of the modern Sarona Market.", price: "From $215", duration: "2 hours" } },
                ],
                faqs: [
                    { q: "What is the best food market tour in Tel Aviv?", a: "Carmel Market for the classic bazaar experience; Sarona Market for something more modern." }
                ],
            };

        case "best-boat-cruise-tour-tel-aviv":
            return {
                title: "Which Is the Best Boat Cruise in Tel Aviv?",
                description: "Compare real Tel Aviv and Jaffa coastline boat cruises, from a quick skyline sail to a private yacht.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Most Tel Aviv boat cruises cover the same coastline between Tel Aviv and Jaffa, differing mainly in length and whether it's shared or private.", tourCard: { slug: "tel-aviv-sightseeing-cruise-of-tel-aviv-and-jaffa", title: "Tel Aviv: Sightseeing Cruise of Tel Aviv and Jaffa Skyline", description: "A short sightseeing cruise along the Tel Aviv/Jaffa skyline.", price: "From $195", duration: "30 minutes" } },
                    { title: "Best with Water Activities: Skyline Cruise with Stop", content: "Adds a stop for water activities to the standard skyline cruise.", tourCard: { slug: "tel-aviv-skyline-boat-cruise-with-stop-for-water", title: "Tel Aviv: Skyline Boat Cruise with Stop for Water Activities", description: "A skyline cruise with a water-activity stop.", price: "From $169", duration: "2 hours" } },
                    { title: "Best Longer Route: Bat Yam Sightseeing Cruise", content: "Extends the route further down the coast to Bat Yam.", tourCard: { slug: "tel-aviv-jaffa-tel-aviv-and-bat-yam-sightseeing", title: "Tel Aviv: Jaffa, Tel Aviv, and Bat Yam Sightseeing Cruise", description: "An extended coastal cruise reaching Bat Yam.", price: "From $519", duration: "1 hour" } },
                    { title: "Best Private Option: Private Yacht Tour", content: "A private yacht with wine and a guide, for a more exclusive version of the same coastline.", tourCard: { slug: "tel-aviv-private-yacht-tour-with-wine-and-guide", title: "Tel Aviv: Private Yacht Tour with Wine and Guide", description: "A private yacht cruise with wine included.", price: "From $1885", duration: "3 hours" } },
                ],
                faqs: [
                    { q: "What is the best boat cruise in Tel Aviv?", a: "A short sightseeing cruise suits most visitors; go private yacht for something more exclusive." }
                ],
            };

        case "best-bauhaus-white-city-tour-tel-aviv":
            return {
                title: "Which Is the Best Bauhaus / White City Tour in Tel Aviv?",
                description: "Compare real Bauhaus architecture tours of Tel Aviv's UNESCO-listed White City.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tel Aviv's White City has the world's largest concentration of Bauhaus buildings — a dedicated architecture tour or a combo with Old Jaffa and Neve Tzedek are the two real options.", tourCard: { slug: "tel-aviv-bauhaus-white-city-tour", title: "Tel Aviv Bauhaus White City Tour", description: "A dedicated Bauhaus architecture tour of the White City.", price: "From $195", duration: "2 hours" } },
                    { title: "Best Combo: + Old Jaffa & Neve Tzedek Private Tour", content: "Combines the Bauhaus White City with Old Jaffa and Neve Tzedek in one private day.", tourCard: { slug: "tel-aviv-old-jaffa-white-city-neve-tzedek-private", title: "Tel Aviv: Old Jaffa, White City & Neve Tzedek Private Tour", description: "A private combo of three of Tel Aviv's architectural/historic districts.", price: "From $573", duration: "4 hours" } },
                ],
                faqs: [
                    { q: "What is the best Bauhaus tour in Tel Aviv?", a: "A dedicated White City tour suits architecture-focused visitors; the combo private tour covers more ground." }
                ],
            };

        case "best-caesarea-haifa-acre-day-trip-tel-aviv":
            return {
                title: "Which Is the Best Caesarea, Haifa & Acre Day Trip from Tel Aviv?",
                description: "Compare real day trips from Tel Aviv to Caesarea, Haifa, and Acre.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "This classic northern-coast day trip is available either as a Russian-language group tour or a private day tour.", tourCard: { slug: "caesarea-haifa-and-acre-private-day-tour", title: "Caesarea, Haifa, and Acre - Private Day Tour", description: "A private day trip covering Caesarea, Haifa, and Acre.", price: "From $1050", duration: "8 hours" } },
                    { title: "Russian-Language Group Option", content: "The same route run as a group tour conducted in Russian.", tourCard: { slug: "from-tel-aviv-area-caesarea-haifa-and-acre-tour", title: "From Tel Aviv Area: Caesarea, Haifa and Acre Tour in Russian", description: "A Russian-language group tour of the same route.", price: "From $117", duration: "6 hours" } },
                ],
                faqs: [
                    { q: "What is the best Caesarea/Haifa/Acre day trip from Tel Aviv?", a: "A private day tour for flexibility; the Russian-language group tour for a lower-cost shared option." }
                ],
            };

        case "best-beach-activity-tel-aviv":
            return {
                title: "Which Is the Best Beach Activity in Tel Aviv?",
                description: "Compare real Tel Aviv beach club activities — surfboard/boogie board rental, kayak rental, and surfing lessons.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tel Aviv's beach clubs offer rental and lesson options for the same stretch of coastline — the choice is mainly about whether you want to rent gear or be taught.", tourCard: { slug: "tel-aviv-surf-board-or-boogie-board-rental-at", title: "Tel Aviv: Surf Board or Boogie Board Rental at Beach Club", description: "Board rental at a Tel Aviv beach club.", price: "From $26", duration: "1 hour" } },
                    { title: "Best for Flat Water: Kayak Rental", content: "A calmer-water alternative to surfing for exploring the coastline.", tourCard: { slug: "tel-aviv-kayak-rental-at-beach-club", title: "Tel Aviv: Kayak Rental at Beach Club", description: "Kayak rental at a Tel Aviv beach club.", price: "From $65", duration: "1 hour" } },
                    { title: "Best for Beginners: Professional Surfing Lessons", content: "An instructor-led option for those who want to actually learn rather than just rent a board.", tourCard: { slug: "tel-aviv-professional-surfing-lessons-at-beach", title: "Tel Aviv: Professional Surfing Lessons at Beach Club TLV", description: "Instructor-led surfing lessons.", price: "From $104", duration: "1 hour" } },
                ],
                faqs: [
                    { q: "What is the best beach activity in Tel Aviv?", a: "Board rental for independent use; lessons if you're a beginner wanting instruction." }
                ],
            };

        case "best-private-city-tour-tel-aviv":
            return {
                title: "Which Is the Best Private City Tour in Tel Aviv?",
                description: "Compare real private sightseeing tours of Tel Aviv and Jaffa.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Private city tours here mostly cover the same highlights — Jaffa, the beach promenade, Rothschild, Dizengoff — differing in format (walking, car, or VIP).", tourCard: { slug: "tel-aviv-must-see-attractions-private-walking-tour", title: "Tel Aviv: Must-See Attractions Private Walking Tour", description: "A private walking tour of Tel Aviv's main sights.", price: "From $263", duration: "3 hours" } },
                    { title: "Best with a Driver: Private Highlights Tour", content: "Covers more ground by car with a private driver rather than walking.", tourCard: { slug: "tel-aviv-private-highlights-tour-with-driver", title: "Tel Aviv: Private Highlights Tour with Driver", description: "A private driven highlights tour.", price: "From $518", duration: "2 hours" } },
                    { title: "Most Comprehensive: VIP Tour", content: "The most complete private option, combining Tel Aviv and Jaffa into one VIP day.", tourCard: { slug: "tel-aviv-and-jaffa-vip-tour", title: "Tel Aviv and Jaffa VIP Tour", description: "A comprehensive private VIP tour of both areas.", price: "From $501", duration: "3 hours" } },
                ],
                faqs: [
                    { q: "What is the best private city tour in Tel Aviv?", a: "A walking tour for city-centre sights; a driven or VIP tour to cover Tel Aviv and Jaffa together." }
                ],
            };

        case "best-neve-tzedek-tour-tel-aviv":
            return {
                title: "Which Is the Best Neve Tzedek Tour in Tel Aviv?",
                description: "Compare real tours of Neve Tzedek, Tel Aviv's oldest and most artsy neighborhood.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Neve Tzedek's narrow lanes and galleries support both a general cultural walk and an art-focused version.", tourCard: { slug: "tel-aviv-neve-tzedek-cultural-walking-tour", title: "Tel Aviv: Neve Tzedek Cultural Walking Tour", description: "A cultural walking tour of Neve Tzedek.", price: "From $130", duration: "1.5 hours" } },
                    { title: "Best for Art: Neve Tzedek Art Tour", content: "Focuses specifically on the neighborhood's art galleries and scene.", tourCard: { slug: "tel-aviv-art-tour-of-neve-tzedek", title: "Tel Aviv Art Tour of Neve Tzedek", description: "An art-focused tour of Neve Tzedek.", price: "From $189", duration: "2 hours" } },
                ],
                faqs: [
                    { q: "What is the best Neve Tzedek tour?", a: "A cultural walk for general context; the art tour for gallery-focused visitors." }
                ],
            };

        case "is-masada-dead-sea-day-trip-worth-it-tel-aviv":
            return {
                title: "Is the Masada & Dead Sea Day Trip from Tel Aviv Worth It?",
                description: "An honest look at the Masada & Dead Sea private day trip from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "This combines Masada's clifftop ruins with floating in the Dead Sea in one long private day — worth it if both are on your list, since they're normally visited together anyway.", tourCard: { slug: "masada-dead-sea-private-day-trip", title: "Masada & Dead Sea Private Day Trip", description: "A private day trip to Masada and the Dead Sea.", price: "From $1050", duration: "8.5 hours" } }
                ],
                faqs: [
                    { q: "Is the Masada and Dead Sea day trip worth it?", a: "Yes, since the two sites are normally combined anyway and this covers both in one organized day." }
                ],
            };

        case "is-golan-heights-day-trip-worth-it-tel-aviv":
            return {
                title: "Is the Golan Heights Day Trip from Tel Aviv Worth It?",
                description: "An honest look at the private Golan Heights day tour from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "A long day given the distance, but it covers Israel's northern border region and Golan's volcanic landscape that nothing closer to Tel Aviv replicates.", tourCard: { slug: "golan-heights-private-day-tour", title: "Golan Heights Private Day Tour", description: "A private day tour of the Golan Heights.", price: "From $1050", duration: "9 hours" } }
                ],
                faqs: [
                    { q: "Is the Golan Heights day trip worth it from Tel Aviv?", a: "Yes if you have a full day to spare — it's the only way to see this region from Tel Aviv." }
                ],
            };

        case "is-wineries-tour-worth-it-tel-aviv":
            return {
                title: "Is the Central Israel Wineries Tour Worth It?",
                description: "An honest look at the private Wineries of Central Israel tour from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Israel's wine regions are less known internationally but genuinely worth visiting if wine is a priority for your trip — this private tour covers several central-region wineries in one day.", tourCard: { slug: "wineries-of-central-israel-private-tour", title: "Wineries of Central Israel private tour", description: "A private tour of central Israel's wineries.", price: "From $1494", duration: "7 hours" } }
                ],
                faqs: [
                    { q: "Is a wineries tour worth it near Tel Aviv?", a: "Yes if you're specifically interested in Israeli wine — it's a niche but genuine regional specialty." }
                ],
            };

        case "is-bethlehem-day-trip-worth-it-tel-aviv":
            return {
                title: "Is the Bethlehem Day Trip from Tel Aviv Worth It?",
                description: "An honest look at the private half-day Bethlehem tour from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bethlehem (in the West Bank) requires crossing a checkpoint, so a guided private tour handling logistics is the practical way to visit for most travellers based in Tel Aviv.", tourCard: { slug: "bethlehem-private-guided-tour-for-half-day-from", title: "Bethlehem: Private Guided Tour for half day from Tel Aviv", description: "A private half-day guided tour to Bethlehem.", price: "From $2537", duration: "4 hours" } }
                ],
                faqs: [
                    { q: "Is visiting Bethlehem from Tel Aviv worth it?", a: "Yes for its religious/historical significance, but a guided tour is the practical way to handle the checkpoint crossing." }
                ],
            };

        case "is-pub-crawl-worth-it-tel-aviv":
            return {
                title: "Is the Tel Aviv Pub Crawl Worth It?",
                description: "An honest look at Tel Aviv's pub crawl and nightlife tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "A guided pub crawl is a good way to quickly find Tel Aviv's nightlife scene without research, especially for solo travellers wanting company.", tourCard: { slug: "tel-aviv-pub-crawl-and-nightlife-tour-with-shots", title: "Tel Aviv: Pub Crawl and Nightlife Tour with Shots", description: "A guided pub crawl through Tel Aviv's nightlife.", price: "From $34", duration: "4 hours" } }
                ],
                faqs: [
                    { q: "Is the Tel Aviv pub crawl worth it?", a: "Yes for solo travellers or groups wanting an easy intro to the nightlife scene." }
                ],
            };

        case "is-coffee-culture-tour-worth-it-tel-aviv":
            return {
                title: "Is the Tel Aviv Coffee Culture Tour Worth It?",
                description: "An honest look at Tel Aviv's guided coffee culture tour with tastings.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tel Aviv has a genuinely strong café culture, and this tour is a pleasant, low-key way to sample it with some context rather than just wandering into cafés at random.", tourCard: { slug: "tel-aviv-guided-coffee-culture-tour-with-tastings", title: "Tel Aviv: Guided Coffee Culture Tour with Tastings", description: "A guided tour of Tel Aviv's coffee culture with tastings.", price: "From $93", duration: "2 hours" } }
                ],
                faqs: [
                    { q: "Is the coffee culture tour worth it in Tel Aviv?", a: "Yes for coffee enthusiasts wanting context behind the city's café scene." }
                ],
            };

        case "is-scavenger-hunt-worth-it-tel-aviv":
            return {
                title: "Is the Tel Aviv Scavenger Hunt Worth It?",
                description: "An honest look at Tel Aviv's scavenger hunt adventure with riddles and challenges.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "A fun, active alternative to a standard walking tour, good for groups or families who want a game-like way to explore the city rather than just listening to a guide.", tourCard: { slug: "tel-aviv-scavenger-hunt-adventure-with-riddles", title: "Tel Aviv: Scavenger Hunt Adventure with Riddles & Challenges", description: "A scavenger-hunt-style exploration of Tel Aviv.", price: "From $315", duration: "2 hours" } }
                ],
                faqs: [
                    { q: "Is the Tel Aviv scavenger hunt worth it?", a: "Yes for groups or families wanting an interactive, game-like way to explore the city." }
                ],
            };

        case "tel-aviv-travel-guide-2026":
            return {
                title: "Tel Aviv Travel Guide 2026",
                description: "Israel's beach-and-nightlife city, with Jaffa's old port on its doorstep — what first-timers should know.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "Why Visit Tel Aviv", content: "Tel Aviv combines a long Mediterranean beach promenade, UNESCO-listed Bauhaus architecture, and a strong food and nightlife scene, with the ancient port of Jaffa right at its southern edge." },
                    { title: "Getting Around", content: "Tel Aviv is flat and bike-friendly (Tel-O-Fun bike share is widely used); the city centre is also very walkable, with buses and taxis covering anything further." }
                ],
                faqs: [
                    { q: "Is Tel Aviv worth visiting?", a: "Yes, for its beaches, architecture, food, and nightlife, with Jaffa's old port easily combined." }
                ],
            };

        case "best-time-to-visit-tel-aviv":
            return {
                title: "Best Time to Visit Tel Aviv",
                description: "When to visit Tel Aviv for the best weather and beach conditions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "Seasonal Overview", content: "April-June and September-October offer warm but not extreme heat with good beach weather. July-August is hot and humid but peak beach season; winter (December-February) is mild and rainy, less ideal for beach time." }
                ],
                faqs: [
                    { q: "What is the best time to visit Tel Aviv?", a: "April-June or September-October for warm, comfortable beach weather without peak-summer heat." }
                ],
            };

        case "tel-aviv-1-day-itinerary":
            return {
                title: "Tel Aviv 1-Day Itinerary",
                description: "A realistic one-day plan for Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "Morning", content: "Start at Carmel Market, then walk into Neve Tzedek's art galleries and boutiques." },
                    { title: "Afternoon", content: "Head to Old Jaffa for its port, flea market, and sea views." },
                    { title: "Evening", content: "Finish with dinner and a walk along the beach promenade, or a pub crawl if you want nightlife." }
                ],
                faqs: [
                    { q: "Can Tel Aviv be seen in one day?", a: "The core highlights yes — Carmel Market, Neve Tzedek, and Jaffa fit comfortably into a day." }
                ],
            };

        case "is-tel-aviv-safe":
            return {
                title: "Is Tel Aviv Safe for Tourists?",
                description: "An honest look at safety in Tel Aviv for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tel Aviv is generally safe for tourists in the main city areas, with standard city-travel precautions. Regional security conditions can shift, so check current travel advisories for Israel before your trip regardless of how safe the city itself feels day to day." }
                ],
                faqs: [
                    { q: "Is Tel Aviv safe for tourists?", a: "Generally yes in the main city areas, but check current regional travel advisories before your trip." }
                ],
            };

        case "tel-aviv-to-jerusalem-guide":
            return {
                title: "Tel Aviv to Jerusalem: Getting There",
                description: "How to get from Tel Aviv to Jerusalem, Israel's two largest cities.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-tel-aviv.jpg",
                sections: [
                    { title: "How to Get There", content: "Tel Aviv and Jerusalem are about an hour apart by train or bus, making a day trip in either direction easy. The train from Tel Aviv HaHagana or Savidor Center to Jerusalem Yitzhak Navon station is the most comfortable option; buses are cheaper and run frequently." }
                ],
                faqs: [
                    { q: "How far is Jerusalem from Tel Aviv?", a: "About an hour by train or bus, making a day trip between the two cities easy." }
                ],
            };

        case "best-bahai-gardens-tour-haifa":
            return {
                title: "Which Is the Best Bahai Gardens Tour in Haifa?",
                seoTitle: "Best Bahai Gardens Tour Haifa 2026 | Honest Comparison",
                description: "Compare real Bahai Gardens tours in Haifa — from a walking-and-car combo tour to a version adding the German Colony and Mediterranean views.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52f4b772e6a1f985f9bb66c69752a25a67d2aef0e8a110c28f4ba775d5815bbf.jpg",
                sections: [
                    { title: "The Short Answer", content: "The UNESCO-listed Bahai Gardens cascade down Mount Carmel in terraces, and most tours pair them with either a car ride up for the view or an extended walk into the German Colony below.", tourCard: { slug: "haifa-guided-walking-car-tour-with-bahai-gardens", title: "Haifa: Guided Walking & Car Tour with Bahai Gardens Entry", description: "A combined walking and car tour with Bahai Gardens entry.", price: "From $320", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52f4b772e6a1f985f9bb66c69752a25a67d2aef0e8a110c28f4ba775d5815bbf.jpg" } },
                    { title: "Best Full Experience: Bahai Gardens, German Colony & Views", content: "This extends the Bahai Gardens visit into the German Colony neighborhood below and adds Mediterranean viewpoints, a fuller half-day itinerary.", tourCard: { slug: "haifa-bahai-gardens-german-colony-mediterranean", title: "Haifa: Bahai Gardens, German Colony & Mediterranean Views", description: "A fuller tour adding the German Colony and coastal views.", price: "From $439", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/649df316a7b93.jpeg" } },
                    { title: "Practical Tips", content: "The gardens are terraced down a steep hillside — a car-assisted tour saves real effort over walking the full height, worth considering if mobility or time is a concern." }
                ],
                faqs: [
                    { q: "What is the best Bahai Gardens tour in Haifa?", a: "A walking-and-car combo suits most visitors; add the German Colony for a fuller half-day." },
                    { q: "Are the Bahai Gardens a UNESCO site?", a: "Yes, listed as a UNESCO World Heritage Site." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Bahai Gardens tour in Haifa?", "acceptedAnswer": { "@type": "Answer", "text": "A walking-and-car combo suits most visitors." } },
                    { "@type": "Question", "name": "Are the gardens a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a UNESCO World Heritage Site." } }
                ] },
            };

        case "is-nazareth-day-trip-worth-it-haifa":
            return {
                title: "Is a Nazareth & Sea of Galilee Day Trip from Haifa Worth It?",
                seoTitle: "Nazareth Sea of Galilee Day Trip Haifa 2026 | Review",
                description: "An honest look at the Nazareth and Sea of Galilee guided day trip from Haifa.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62ea75aa47e1d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This combines two of Christianity's most significant sites — Nazareth and the Sea of Galilee — in one day, genuinely worthwhile for travellers interested in either religious history or the region's dramatic landscapes.", tourCard: { slug: "from-haifa-guided-day-trip-to-nazareth-and-sea", title: "From Haifa: Guided Day Trip to Nazareth and Sea of Galilee", description: "A guided day trip covering Nazareth and the Sea of Galilee.", price: "From $156", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62ea75aa47e1d.jpeg" } },
                    { title: "Practical Tips", content: "This is a full 9-hour day given the driving distances around the Galilee region — comfortable shoes and sun protection help, especially in summer." }
                ],
                faqs: [
                    { q: "Is the Nazareth and Sea of Galilee day trip worth it?", a: "Yes, for religious history or the region's landscapes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Nazareth/Galilee day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for religious history or landscapes." } }
                ] },
            };

        case "haifa-travel-guide-2026":
            return {
                title: "Haifa Travel Guide 2026",
                description: "What visitors need to know about Haifa, Israel's main northern port city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52f4b772e6a1f985f9bb66c69752a25a67d2aef0e8a110c28f4ba775d5815bbf.jpg",
                sections: [
                    { title: "Why Visit", content: "Haifa is best known for the UNESCO-listed Bahai Gardens cascading down Mount Carmel, and serves as a convenient base for day trips to Acre, Nazareth, and the Sea of Galilee." }
                ],
                faqs: [
                    { q: "Is Haifa worth visiting?", a: "Yes, mainly for the Bahai Gardens and as a base for regional day trips." }
                ],
            };

        case "best-glass-bottom-boat-tour-eilat":
            return {
                title: "Is the Glass-Bottom Boat Tour in Eilat Worth It?",
                seoTitle: "Eilat Glass-Bottom Boat Tour 2026 | Honest Review",
                description: "An honest look at Eilat's glass-bottom boat tour over the Red Sea's coral reefs.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/63c11e1c57ac5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A glass-bottom boat is the easiest way to see Eilat's Red Sea coral without getting in the water — genuinely good for travellers who don't swim or snorkel but still want to see the reef.", tourCard: { slug: "eilat-2-hour-glass-bottom-boat-tour", title: "Eilat: 2-Hour Glass-Bottom Boat Tour", description: "A glass-bottom boat tour over Eilat's coral reefs.", price: "From $32", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/63c11e1c57ac5.jpeg" } },
                    { title: "Practical Tips", content: "Visibility is best on calmer days — if snorkeling or diving is an option for you physically, you'll see considerably more detail that way, but this is the easiest no-effort option." }
                ],
                faqs: [
                    { q: "Is the Eilat glass-bottom boat tour worth it?", a: "Yes, especially for non-swimmers who still want to see the Red Sea coral." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the glass-bottom boat tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for non-swimmers." } }
                ] },
            };

        case "best-desert-jeep-tour-eilat":
            return {
                title: "Which Is the Best Desert Jeep Tour from Eilat?",
                seoTitle: "Best Desert Jeep Tour Eilat 2026 | Honest Comparison",
                description: "Compare real desert jeep tours from Eilat — Timna Park versus Red Canyon versus a sunset jeep adventure to Mount Joash.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e18bbf3985c0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Eilat's desert surroundings offer several distinct jeep options — Timna Park's ancient copper mines, Red Canyon's dramatic rock formations, or a sunset-timed trip up Mount Joash.", tourCard: { slug: "from-eilat-timna-park-guided-jeep-tour", title: "From Eilat: Timna Park Guided Jeep Tour", description: "A guided jeep tour of Timna Park's desert landscapes.", price: "From $110", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e18bbf3985c0.jpeg" } },
                    { title: "Best for Scenery: Red Canyon Guided Tour", content: "This focuses on Red Canyon's narrow, dramatically colored rock formations rather than Timna's historical mining sites.", tourCard: { slug: "from-eilat-red-canyon-guided-tour", title: "From Eilat: Red Canyon Guided Tour", description: "A guided tour of Red Canyon's dramatic rock formations.", price: "From $110", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e18db269dcb9.jpeg" } },
                    { title: "Best at Sunset: Mount Joash Sunset Jeep Adventure", content: "This times the jeep route specifically for sunset views from Mount Joash, trading daytime clarity for golden-hour scenery.", tourCard: { slug: "eilat-mountains-sunset-jeep-adventure-to-mount", title: "Eilat Mountains: Sunset Jeep Adventure to Mount Joash", description: "A sunset-timed jeep adventure to Mount Joash.", price: "From $89", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e18a87d9241f.jpeg" } },
                    { title: "Practical Tips", content: "Desert temperatures swing a lot between day and night — bring a layer even for a sunset tour, since it cools quickly once the sun is down." }
                ],
                faqs: [
                    { q: "What is the best desert jeep tour from Eilat?", a: "Timna Park suits history/mining interest, Red Canyon suits scenery, and the Mount Joash tour suits sunset views." },
                    { q: "Does it get cold in the desert at night near Eilat?", a: "Yes, temperatures drop quickly after sunset — bring a layer." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best desert jeep tour from Eilat?", "acceptedAnswer": { "@type": "Answer", "text": "Timna Park, Red Canyon, or Mount Joash at sunset, depending on interest." } },
                    { "@type": "Question", "name": "Does it get cold at night?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, bring a layer for after sunset." } }
                ] },
            };

        case "best-snorkeling-diving-tour-eilat":
            return {
                title: "Which Is the Best Snorkeling or Diving Tour in Eilat?",
                seoTitle: "Best Eilat Snorkeling Diving Tour 2026 | Comparison",
                description: "Compare real snorkeling and diving options in Eilat's Red Sea — from a coral reef snorkel trip to an intro scuba dive and a full certification course.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5cf27c269bf9a.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Eilat's Red Sea coral is a major draw, and the right option depends on experience level — snorkeling needs no training, an intro dive is beginner-friendly, and a full course is for those wanting certification.", tourCard: { slug: "eliat-coral-reef-snorkeling-trip-with-instructor", title: "Eliat: Coral Reef Snorkeling Trip with Instructor", description: "A guided snorkeling trip over Eilat's coral reef.", price: "From $140", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5cf27c269bf9a.jpeg" } },
                    { title: "Best for Beginners: Introduction to Scuba Diving", content: "This is a genuine beginner-friendly intro dive, no certification required, for travellers curious about diving without committing to a full course.", tourCard: { slug: "eliat-introduction-to-scuba-diving", title: "Eliat: Introduction to Scuba Diving", description: "A beginner intro scuba dive, no certification needed.", price: "From $116", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5dfdce73a9e8d.jpeg" } },
                    { title: "Best for Serious Divers: Open Water + Advanced Course", content: "A full multi-day course covering both Open Water and Advanced certification, the choice for travellers who want to leave Eilat as a certified diver.", tourCard: { slug: "open-water-diver-course-advanced-open-water-diver", title: "Open Water Diver Course + Advanced Open Water Diver Course", description: "A full certification course covering Open Water and Advanced diving.", price: "From $1156", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5cf27b708cd95.jpeg" } },
                    { title: "Practical Tips", content: "Eilat's Red Sea has notably good year-round visibility compared to many dive destinations, so even outside peak season the diving and snorkeling conditions stay solid." }
                ],
                faqs: [
                    { q: "What is the best snorkeling or diving tour in Eilat?", a: "Snorkeling for no-training coral viewing, an intro dive for curious beginners, or the full course for certification." },
                    { q: "Is Eilat good for diving year-round?", a: "Yes, the Red Sea here has notably good visibility most of the year." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best snorkeling or diving option in Eilat?", "acceptedAnswer": { "@type": "Answer", "text": "Depends on experience: snorkeling, an intro dive, or a full certification course." } },
                    { "@type": "Question", "name": "Is Eilat good for diving year-round?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, generally good visibility year-round." } }
                ] },
            };

        case "eilat-travel-guide-2026":
            return {
                title: "Eilat Travel Guide 2026",
                description: "What visitors need to know about Eilat, Israel's Red Sea resort city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5cf27c269bf9a.jpeg",
                sections: [
                    { title: "Why Visit", content: "Eilat is Israel's main Red Sea resort town, known for coral reef diving and snorkeling, desert jeep tours into Timna Park and Red Canyon, and a warm, dry climate year-round." }
                ],
                faqs: [
                    { q: "Is Eilat worth visiting?", a: "Yes, mainly for Red Sea diving/snorkeling and desert day trips." }
                ],
            };

        case "is-old-city-night-tour-worth-it-jerusalem":
            return {
                title: "Is the Old City After-Dark Tour Worth It in Jerusalem?",
                seoTitle: "Jerusalem Old City Night Tour 2026 | Honest Review",
                description: "An honest look at Jerusalem's Old City after-dark sunset walking tour, a quieter, cooler alternative to daytime sightseeing in the walled city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0ee26e0c2fb9d3b6ed3f609dc05150703f3e438bab483ebdd654d2e7fbc5293.png",
                sections: [
                    { title: "The Short Answer", content: "Walking the Old City's narrow lanes as the light fades and crowds thin out gives a genuinely different atmosphere from the packed daytime tours, with the illuminated walls and quieter alleys as the main draw.", tourCard: { slug: "jerusalem-after-dark-old-city-sunset-walking-tour", title: "Jerusalem After Dark: Old City Sunset Walking Tour", description: "An evening walking tour of Jerusalem's Old City at sunset and after dark.", price: "From $129", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0ee26e0c2fb9d3b6ed3f609dc05150703f3e438bab483ebdd654d2e7fbc5293.png" } },
                    { title: "Practical Tips", content: "Wear comfortable walking shoes — the Old City's lanes are cobbled and often involve stairs." }
                ],
                faqs: [
                    { q: "Is the Jerusalem Old City night tour worth it?", a: "Yes, for a quieter, atmospheric alternative to daytime sightseeing, with illuminated walls and thinner crowds." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Jerusalem Old City night tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quieter, atmospheric alternative to daytime sightseeing." } }
                ] },
            };

        case "is-paragliding-worth-it-tel-aviv":
            return {
                title: "Is Paragliding Worth It Near Tel Aviv?",
                seoTitle: "Tel Aviv Paragliding 2026 | Honest Review",
                description: "An honest look at the 30-minute paragliding flight near Herzliya and Netanya, a coastal aerial activity distinct from Tel Aviv's beach and city sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/78a447563aef847273ae111fd4e2b18c8e11718977e65ce3041a533a6671722d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This tandem paragliding flight launches along the coast near Herzliya and Netanya, giving aerial views of the Mediterranean coastline that no beach walk or boat cruise can match — a genuinely different perspective on the area, though the 30-minute flight comes at a premium price.", tourCard: { slug: "herzliya-netanya-israel-30-minute-paragliding", title: "Herzliya/Netanya, Israel: 30-Minute Paragliding", description: "A tandem paragliding flight along the coast near Herzliya and Netanya.", price: "From $483", duration: "30 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/78a447563aef847273ae111fd4e2b18c8e11718977e65ce3041a533a6671722d.jpeg" } },
                    { title: "Practical Tips", content: "Flights depend on wind conditions, so build flexibility into your schedule in case of a reschedule." }
                ],
                faqs: [
                    { q: "Is paragliding worth it near Tel Aviv?", a: "Yes, for a genuinely different aerial view of the coastline, though it's a premium-priced short flight rather than an all-day activity." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is paragliding worth it near Tel Aviv?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely different aerial view of the Mediterranean coastline." } }
                ] },
            };

        case "is-private-bike-tour-worth-it-tel-aviv":
            return {
                title: "Is the Private Bike Tour Worth It in Tel Aviv?",
                seoTitle: "Tel Aviv Private Bike Tour 2026 | Honest Review",
                description: "An honest look at Tel Aviv's private bike tour, a flat, bike-friendly way to cover more ground than walking without the structure of a bus tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5bb228fe9259e.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Tel Aviv is flat and bike-friendly, and this private cycling tour covers beach promenades, Bauhaus neighborhoods, and city streets faster than walking while staying more flexible than a bus tour.", tourCard: { slug: "tel-aviv-private-bike-tour", title: "Tel Aviv Private Bike Tour", description: "A private cycling tour through Tel Aviv's beaches, neighborhoods, and streets.", price: "From $208", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5bb228fe9259e.jpeg" } },
                    { title: "Practical Tips", content: "Being a private tour, the route and pace can be adjusted to your interests, so mention any specific neighborhoods you want to prioritize." }
                ],
                faqs: [
                    { q: "Is the private bike tour worth it in Tel Aviv?", a: "Yes, for covering more ground than walking in a flat, bike-friendly city while keeping a flexible, private pace." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the private bike tour worth it in Tel Aviv?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for covering more ground than walking at a flexible, private pace." } }
                ] },
            };

        case "is-israel-museum-ein-kerem-tour-worth-it-jerusalem":
            return {
                title: "Is the Israel Museum and Ein Kerem Jerusalem Tour Worth It?",
                description: "An honest look at the Israel Museum and Ein Kerem tour in Jerusalem.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c0fe2c08ab787c079ca2d8b021f69af32bacfb20f462bb1353cfd11bb0496885.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Pairing the Israel Museum, home to the Dead Sea Scrolls, with Ein Kerem's picturesque old village gives a genuine mix of world-class culture and a quieter, charming neighborhood, worth it for travelers who've already covered the Old City's main sacred sites.", tourCard: { slug: "the-israel-museum-and-ein-kerem-jerusalem-tour", title: "The Israel Museum and Ein Kerem Jerusalem Tour", description: "A tour combining the Israel Museum and the Ein Kerem neighborhood.", price: "From $228", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c0fe2c08ab787c079ca2d8b021f69af32bacfb20f462bb1353cfd11bb0496885.jpeg" } },
                    { title: "Practical Tips", content: "Allow real time at the Israel Museum for the Dead Sea Scrolls and the Shrine of the Book — it's genuinely worth more than a quick walkthrough." },
                ],
                faqs: [
                    { q: "Is the Israel Museum and Ein Kerem tour worth it in Jerusalem?", a: "Yes, it mixes world-class culture with a quieter, charming neighborhood, a good follow-up once you've covered the Old City." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Israel Museum and Ein Kerem tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it mixes world-class culture with a quieter, charming neighborhood." } },
                ] },
            };

        case "is-shfela-judaean-lowlands-tour-worth-it-jerusalem":
            return {
                title: "Is the Shfela Judaean Lowlands Tour Worth It from Jerusalem?",
                description: "An honest look at the Shfela Judaean Lowlands tour covering Beit Guvrin and Herodeon.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e81cd1a773f4495571e26eccdb7cb9998e8bf52a72a310c99dd137f87a396d9d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Beit Guvrin's ancient underground cave complexes and Herod's palace-fortress at Herodeon are genuinely significant archaeological sites most Jerusalem itineraries skip entirely, worth it for travelers with a deeper interest in ancient history beyond the Old City.", tourCard: { slug: "the-shfela-judaean-lowlands-tour-beit-guvrin-and", title: "The Shfela Judaean Lowlands Tour: Beit Guvrin and Herodeon", description: "A tour of the Shfela region covering Beit Guvrin's caves and Herodeon.", price: "From $936", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e81cd1a773f4495571e26eccdb7cb9998e8bf52a72a310c99dd137f87a396d9d.jpeg" } },
                    { title: "Practical Tips", content: "Wear sturdy shoes — Beit Guvrin's cave complexes involve genuine underground walking on uneven surfaces." },
                ],
                faqs: [
                    { q: "Is the Shfela Judaean Lowlands tour worth it from Jerusalem?", a: "Yes, for travelers with a deeper interest in ancient history, covering significant sites most itineraries skip entirely." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Shfela Judaean Lowlands tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for ancient history most Jerusalem itineraries skip entirely." } },
                ] },
            };

        case "is-jerusalems-secrets-van-tour-worth-it-jerusalem":
            return {
                title: "Is Jerusalem's Secrets Private Full-Day Guided Van Tour Worth It?",
                description: "An honest look at the Jerusalem's Secrets private full-day guided van tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4b7c642d817b2a11d1f4dfbce369b2742440bfbbc86efb97ebe368e9447bda3c.jpg",
                sections: [
                    { title: "The Short Answer", content: "This private van tour is framed around lesser-known corners of Jerusalem beyond the main Old City circuit, worth it for travelers who've already done the major sacred sites and want a deeper, more personalized day.", tourCard: { slug: "jerusalems-secrets-private-full-day-guided-van", title: "Jerusalem's Secrets: Private Full-Day Guided Van Tour", description: "A private full-day van tour covering lesser-known parts of Jerusalem.", price: "From $1057", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4b7c642d817b2a11d1f4dfbce369b2742440bfbbc86efb97ebe368e9447bda3c.jpg" } },
                    { title: "Practical Tips", content: "Tell your guide in advance which neighborhoods or themes interest you most, since the private format allows real customization." },
                ],
                faqs: [
                    { q: "Is Jerusalem's Secrets private van tour worth it?", a: "Yes, for travelers who've already covered the main sacred sites and want a deeper, more personalized day." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Jerusalem's Secrets tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a deeper, more personalized day beyond the main sacred sites." } },
                ] },
            };

        case "is-half-day-jerusalem-highlights-tel-aviv-worth-it":
            return {
                title: "Is the Half-Day Jerusalem Highlights Private Tour from Tel Aviv Worth It?",
                description: "An honest look at the half-day Jerusalem highlights private tour from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c19dfdfe833962fa689eaeaced170e5420667d851a52679fccd42a3d68747e7a.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This condensed, private half-day tour lets Tel Aviv-based travelers see Jerusalem's main highlights without committing a full day, worth it specifically if your time is limited and you want the essentials rather than a comprehensive deep dive.", tourCard: { slug: "half-day-jerusalem-highlights-private-tour-from", title: "Half-Day Jerusalem Highlights Private Tour from Tel Aviv", description: "A condensed half-day private tour of Jerusalem's highlights from Tel Aviv.", price: "From $806", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c19dfdfe833962fa689eaeaced170e5420667d851a52679fccd42a3d68747e7a.jpeg" } },
                    { title: "Practical Tips", content: "If you have more than a half-day to spare, a full-day tour will cover considerably more ground given the drive time involved." },
                ],
                faqs: [
                    { q: "Is the half-day Jerusalem highlights tour from Tel Aviv worth it?", a: "Yes, specifically for travelers with limited time who want the essentials rather than a full comprehensive day." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the half-day Jerusalem tour from Tel Aviv worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travelers with limited time wanting the essentials." } },
                ] },
            };

        case "is-sunset-art-wine-beach-worth-it-tel-aviv":
            return {
                title: "Is Tel Aviv Sunset, Art & Local Wine on the Beach Worth It?",
                description: "An honest look at the Tel Aviv sunset, art, and local wine experience on the beach.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f1cbbe1e3c6172ae0842dc9cf2bf17392d342d1727dce06dcb385de299f298a2.png",
                sections: [
                    { title: "The Short Answer", content: "Combining sunset beach views with local wine and an artistic element, this short experience gives a relaxed, social evening activity, worth it as an easy way to unwind rather than another guided city walk.", tourCard: { slug: "tel-aviv-sunset-art-local-wine-on-the-beach", title: "Tel Aviv: Sunset, Art & Local Wine on the Beach", description: "A relaxed beach experience combining sunset views, art, and local wine.", price: "From $63", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f1cbbe1e3c6172ae0842dc9cf2bf17392d342d1727dce06dcb385de299f298a2.png" } },
                    { title: "Practical Tips", content: "Check the exact beach location and sunset time before booking to plan your evening around it." },
                ],
                faqs: [
                    { q: "Is the Tel Aviv sunset, art, and wine beach experience worth it?", a: "Yes, as a relaxed, social evening activity, a good change of pace from guided city walks." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the sunset art and wine beach experience worth it in Tel Aviv?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a relaxed, social evening activity." } },
                ] },
            };

        case "is-art-museum-habima-tour-worth-it-tel-aviv":
            return {
                title: "Is the Tel Aviv Art Museum and Habima Tour Worth It?",
                description: "An honest look at the Tel Aviv Art Museum and Habima Theatre tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0b3581c469fe0c07f6d73c3671f705788653d3f34aa740f80cbd4c5e2fc17ef.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Pairing the Tel Aviv Museum of Art with Habima Theatre, Israel's national theatre, gives a genuine cultural half-day covering visual art and performing arts history, worth it for travelers interested in the city's cultural institutions beyond the beach.", tourCard: { slug: "tel-aviv-art-museum-and-habima-tour", title: "Tel Aviv Art Museum and Habima Tour", description: "A tour combining the Tel Aviv Art Museum and Habima Theatre.", price: "From $247", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0b3581c469fe0c07f6d73c3671f705788653d3f34aa740f80cbd4c5e2fc17ef.jpeg" } },
                    { title: "Practical Tips", content: "Check the museum's current exhibition schedule before booking, since the collection on display rotates." },
                ],
                faqs: [
                    { q: "Is the Tel Aviv Art Museum and Habima tour worth it?", a: "Yes, for travelers interested in the city's cultural institutions, covering both visual and performing arts history." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Art Museum and Habima tour worth it in Tel Aviv?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travelers interested in the city's cultural institutions beyond the beach." } },
                ] },
            };

        case "is-anu-palmach-museum-tour-worth-it-tel-aviv":
            return {
                title: "Is the Anu Museum and Palmach Museum Tour Worth It in Tel Aviv?",
                description: "An honest look at the Anu Museum and Palmach Museum tour in Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85f246cb12b3a9e60703610e25ccfd12f62525153bd9159612e8982e2e8b9541.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Anu Museum covers the story of the Jewish people worldwide, and Palmach commemorates Israel's pre-state fighting force, giving this tour genuine historical depth distinct from the city's beach and nightlife reputation.", tourCard: { slug: "the-anu-museum-and-palmach-museum-tour-in-tel", title: "The Anu Museum and Palmach Museum Tour in Tel Aviv", description: "A tour combining the Anu Museum and the Palmach Museum.", price: "From $286", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85f246cb12b3a9e60703610e25ccfd12f62525153bd9159612e8982e2e8b9541.jpeg" } },
                    { title: "Practical Tips", content: "Allow genuine time for both museums — they cover distinct historical periods and each rewards unhurried attention." },
                ],
                faqs: [
                    { q: "Is the Anu Museum and Palmach Museum tour worth it in Tel Aviv?", a: "Yes, it gives genuine historical depth distinct from the city's beach and nightlife reputation." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Anu and Palmach museum tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine historical depth beyond the city's beach reputation." } },
                ] },
            };

        case "is-nazareth-cana-galilee-tour-worth-it-tel-aviv":
            return {
                title: "Is the Nazareth and Cana Galilee Day Trip Worth It from Tel Aviv?",
                description: "An honest look at the Nazareth and Cana Galilee day trip from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e7ce57bb99719a892d94462ce776a92d382b268396d32a64ecb4bd1cddf877f.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Covering both Nazareth and Cana, two significant Christian biblical sites in the Galilee, gives this day trip genuine religious-history depth, worth it for travelers interested in biblical sites beyond Jerusalem and Bethlehem.", tourCard: { slug: "nazareth-and-cana-discover-the-galilee-and", title: "Nazareth and Cana: Discover the Galilee and Israel's North", description: "A day trip to Nazareth and Cana in Israel's Galilee region.", price: "From $286", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e7ce57bb99719a892d94462ce776a92d382b268396d32a64ecb4bd1cddf877f.jpeg" } },
                    { title: "Practical Tips", content: "This is a genuinely long day given the distance to the Galilee — confirm start and return times with your operator." },
                ],
                faqs: [
                    { q: "Is the Nazareth and Cana Galilee day trip worth it from Tel Aviv?", a: "Yes, for travelers interested in biblical sites beyond Jerusalem and Bethlehem, though it's a genuinely long day." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Nazareth and Cana day trip worth it from Tel Aviv?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for biblical sites beyond Jerusalem and Bethlehem, though a long day." } },
                ] },
            };

        case "is-highlights-beach-rothschild-dizengoff-worth-it-tel-aviv":
            return {
                title: "Is the Tel Aviv Highlights, Beach, Rothschild & Dizengoff Tour Worth It?",
                description: "An honest look at the short walking tour covering Tel Aviv's beach, Rothschild Boulevard, and Dizengoff Street.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea361627cf246121.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you want a quick, local-led orientation to the city rather than a full-day commitment — covering the beach, Rothschild Boulevard, and Dizengoff Street in 90 minutes gives genuine neighborhood context without eating into your whole day.", tourCard: { slug: "tel-aviv-highlights-beach-rothschild-dizengoff", title: "Tel Aviv: Highlights Beach Rothschild & Dizengoff", description: "A short walking tour covering Tel Aviv's beach, Rothschild Boulevard, and Dizengoff Street.", price: "From $130", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea361627cf246121.jpeg" } },
                    { title: "Practical Tips", content: "A good first-day pick to orient yourself before exploring Tel Aviv's neighborhoods further on your own." },
                ],
                faqs: [
                    { q: "Is the Tel Aviv highlights, beach, and boulevard tour worth it?", a: "Yes, for travelers wanting a quick, local-led city orientation without a full-day commitment." },
                ],
            };

        case "is-mount-tabor-beit-shean-yardenit-worth-it-tel-aviv":
            return {
                title: "Is the Mount Tabor, Beit She'an and Yardenit Baptismal Site Tour Worth It from Tel Aviv?",
                description: "An honest look at the full-day tour covering Mount Tabor, Beit She'an, and the Yardenit baptismal site from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e81cd1a773f4495571e26eccdb7cb9998e8bf52a72a310c99dd137f87a396d9d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Yes, for travelers with specific interest in biblical and archaeological sites beyond Jerusalem — Mount Tabor's biblical significance, Beit She'an's extensive Roman ruins, and the Yardenit baptismal site on the Jordan River together cover genuinely distinct ground in northern Israel.", tourCard: { slug: "mount-tabor-beit-shean-and-yardenit-baptismal", title: "Mount Tabor, Beit She'an and Yardenit Baptismal Site Tour", description: "A full-day tour covering Mount Tabor, Beit She'an, and the Yardenit baptismal site from Tel Aviv.", price: "From $384", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e81cd1a773f4495571e26eccdb7cb9998e8bf52a72a310c99dd137f87a396d9d.jpeg" } },
                    { title: "Practical Tips", content: "Bring a change of clothes if you plan to participate in a baptism ceremony at Yardenit, since many visitors do." },
                ],
                faqs: [
                    { q: "Is the Mount Tabor, Beit She'an, and Yardenit tour worth it from Tel Aviv?", a: "Yes, for travelers with specific interest in biblical and Roman archaeological sites in northern Israel." },
                ],
            };

        case "is-jaffa-sunset-skyline-walk-worth-it-jerusalem":
            return {
                title: "Is the Jaffa Sunset Skyline Walking Tour to Jaffa Port Worth It?",
                description: "An honest look at the 1.5-hour sunset walking tour to Jaffa Port with panoramic views of the Tel Aviv skyline.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/28bd2d02352d8880e2f64691126d811a940b8e8172bd79f6174f87ea7b7fca3d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you want a short, scenic evening walk rather than a packed sightseeing day — Jaffa Port's panoramic sunset views over the Tel Aviv skyline give a genuinely relaxing, photogenic close to the day in just 90 minutes.", tourCard: { slug: "jaffa-sunset-skyline-walking-tour-to-jaffa-port", title: "Jaffa: Sunset Skyline Walking Tour to Jaffa Port", description: "A 1.5-hour sunset walking tour to Jaffa Port with panoramic views of the Tel Aviv skyline.", price: "From $117", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/28bd2d02352d8880e2f64691126d811a940b8e8172bd79f6174f87ea7b7fca3d.jpeg" } },
                    { title: "Practical Tips", content: "Time your start to arrive at the port roughly 30 minutes before actual sunset for the best light over the skyline." }
                ],
                faqs: [
                    { q: "Is the Jaffa sunset skyline walking tour worth it?", a: "Yes, for travelers wanting a short, scenic evening walk with panoramic sunset views over the Tel Aviv skyline." }
                ],
            };

        case "is-tel-aviv-highlights-jerusalem-old-city-worth-it-jerusalem":
            return {
                title: "Are the Tel Aviv Highlights of Jerusalem's Old City Worth It?",
                description: "An honest look at the full-day tour covering Jerusalem's Old City highlights and historic sites from Tel Aviv.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/61dc465de2149.png",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you want an efficient day covering Jerusalem's major historic sites from a Tel Aviv base — this tour is specifically structured as a highlights circuit, hitting the Old City's most significant stops without requiring an overnight stay in Jerusalem.", tourCard: { slug: "from-tel-aviv-highlights-of-jerusalems-old-city", title: "From Tel Aviv: Highlights of Jerusalem's Old City", description: "A full-day tour covering Jerusalem's Old City highlights and historic sites from Tel Aviv.", price: "From $120", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/61dc465de2149.png" } },
                    { title: "Practical Tips", content: "Wear comfortable walking shoes — the Old City's cobblestone streets and uneven terrain make for a genuinely demanding day of walking." }
                ],
                faqs: [
                    { q: "Is the Jerusalem Old City highlights tour worth it from Tel Aviv?", a: "Yes, for travelers wanting an efficient day covering Jerusalem's major historic sites without an overnight stay." }
                ],
            };

        case "is-bethlehem-christian-jerusalem-russian-worth-it-jerusalem":
            return {
                title: "Is the Bethlehem & Christian Jerusalem Tour in Russian Worth It?",
                description: "An honest look at the half-day Bethlehem and Christian Jerusalem tour conducted in Russian, including the Church of the Nativity.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c8e3e56949e9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Yes, specifically for Russian-speaking travelers — removing the language barrier for sites as historically layered as the Church of the Nativity and Christian Jerusalem matters more than any generic English tour.", tourCard: { slug: "bethlehem-christian-jerusalem-in-russian", title: "Bethlehem & Christian Jerusalem in Russian", description: "A half-day Bethlehem and Christian Jerusalem tour conducted in Russian, including the Church of the Nativity.", price: "From $94", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c8e3e56949e9.jpeg" } },
                    { title: "Practical Tips", content: "Dress modestly for the Church of the Nativity, covering shoulders and knees as expected at active religious sites." }
                ],
                faqs: [
                    { q: "Is the Bethlehem and Christian Jerusalem tour worth it in Russian?", a: "Yes, for Russian-speaking travelers wanting full historical context at Bethlehem and Christian Jerusalem's sites without a language barrier." }
                ],
            };

        default:
            return null;
    }
}
