import { CityInfoData } from './cityInfoContent';

// Uzbekistan GEO pages, first built 2026-11-12. 662 live tours across
// Tashkent/Samarkand/Bukhara/Khiva/Nukus/Fergana (city routing already
// existed via cityCountryMap.ts) but zero info-content pages until now.
// Starting with the two biggest cities: Samarkand (Registan/Silk Road
// walking tours) and Tashkent (Chimgan/Amirsoy mountain day trips).
export function getUzbekistanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-tours-in-samarkand":
            return {
                title: "Best Tours in Samarkand — 2026, Honestly Compared",
                seoTitle: "Best Tours in Samarkand 2026: Top-Rated Picks by Category",
                description: "The best Samarkand tours for 2026, picked by category — Registan walking tours, Silk Road history, local crafts and day trips — with real prices and an honest note on how we chose them.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/samarkand-private-full-day-city-tour-with-guide/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Samarkand's Registan Square and its surrounding madrasas are the reason almost everyone visits — a half-day walking tour of the city's historical monuments is the right starting point for nearly every traveller, and most other Samarkand tours build outward from there (crafts workshops, Silk Road history, day trips to the Seven Lakes). Below is our honest, by-category breakdown with real prices, not a marketing list.",
                        tourCard: { slug: "walking-tour-of-samarkands-historical-monuments", title: "Walking Tour of Samarkand's Historical Monuments", description: "Registan Square and the city's major monuments on foot with a local guide — the standard first-day itinerary.", price: "From $24", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ee6e464ca7b833ef243ba9cc4d39b45b70a57de3397b7281161d9dc213100df.png" },
                    },
                    {
                        title: "Best Private Option: 5 Iconic Sites",
                        content: "For travellers who want their own pace rather than a group schedule, a private walking tour covering five of Samarkand's most important sites trades the group-tour price for flexibility — useful if you want to linger at the Registan for photos or skip a stop that doesn't interest you.",
                        tourCard: { slug: "samarkand-private-walking-tour-of-5-iconic-sites", title: "Samarkand: Private Walking Tour of 5 Iconic Sites", description: "A private, pace-your-own version of the classic Samarkand monument circuit.", price: "From $99", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ef0edd491f75de845da495ef68851aec87d3b16a2ff403cc8b6ee8583d9dcd08.jpg" },
                    },
                    {
                        title: "Best for Silk Road History",
                        content: "Samarkand was one of the most important cities on the Silk Road, and a tour framed specifically around that history — rather than just listing monuments — connects the Registan, the old trading routes, and the city's role as a crossroads between China, Persia and Europe. Good for travellers who want the story behind the buildings, not just the buildings.",
                        tourCard: { slug: "samarkand-private-tour-on-the-ancient-silk-road", title: "Samarkand: Private Tour On the Ancient Silk Road 10+ locs.", description: "A private tour built around Samarkand's Silk Road history across ten-plus locations.", price: "From $37", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/177a1f4e1a0f282685757b0e4dd412a1da9ee15c5039f84046a82027f7f35fde.jpg" },
                    },
                    {
                        title: "Best Full-Day Option",
                        content: "If one tour slot is all you have in Samarkand, a full-day city tour covering nine must-see attractions packs in the Registan, Shah-i-Zinda, Gur-e-Amir, and the Siab Bazaar in one trip — a sensible choice for travellers passing through on a tight Silk Road itinerary with Bukhara and Khiva still ahead.",
                        tourCard: { slug: "samarkand-full-day-city-tour-with-9-must-see", title: "Samarkand: Full-Day City Tour with 9 Must-See Attractions", description: "A packed full day covering the Registan and eight more of Samarkand's must-see sites.", price: "From $78", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f3445ee56e4c4834971f66a739b22124bb8f135e1963c38ae6e6fbda16e2b74.jpg" },
                    },
                    {
                        title: "Best Private Full-Day Option",
                        content: "The private version of the full-day circuit, with your own guide and vehicle rather than a group schedule — a better fit for families or anyone who wants to adjust the pace around meals, heat, or a specific site they want to spend extra time at.",
                        tourCard: { slug: "samarkand-private-full-day-city-tour-with-guide", title: "Samarkand: Private Full-Day City Tour with Guide", description: "A private full day through Samarkand's major sites at your own pace.", price: "From $130", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7149071dde1f31215193f76c7d924d2ea5bb53b6898266e2c2756a3d84f1a347.jpg" },
                    },
                    {
                        title: "How We Picked These",
                        content: "Every tour above is run by a verified local operator we've vetted directly. We don't claim to be the cheapest option in Samarkand — several of these tours are also sold on other platforms by the same operator, who sets their own rate. What we commit to is confirming every booking directly with the operator by WhatsApp before it's treated as final, and refunding in full if they can't take your date. Browse [all Samarkand tours](/uzbekistan/samarkand) if you'd rather pick your own instead of our picks."
                    }
                ],
                faqs: [
                    { q: "What is the best tour in Samarkand?", a: "A half-day walking tour of Samarkand's historical monuments — the Registan, Shah-i-Zinda, Gur-e-Amir — is the right starting point for almost every visitor." },
                    { q: "Is a private tour worth it in Samarkand?", a: "Yes if you want your own pace rather than a group schedule — private tours cost more but let you linger at specific sites or skip ones that don't interest you." },
                    { q: "How many days do I need in Samarkand?", a: "A full day covers the main monuments; two days allows time for crafts workshops, the Siab Bazaar, and a slower pace at the Registan." },
                    { q: "Do I need to book Samarkand tours in advance?", a: "A few days ahead is usually enough outside peak spring/autumn season, when small-group slots can sell out faster." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best tour in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day walking tour of Samarkand's historical monuments — the Registan, Shah-i-Zinda, Gur-e-Amir." } },
                        { "@type": "Question", "name": "Is a private tour worth it in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes if you want your own pace — private tours cost more but let you linger or skip sites freely." } },
                        { "@type": "Question", "name": "How many days do I need in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "A full day covers the main monuments; two days allows for crafts workshops and a slower pace." } },
                        { "@type": "Question", "name": "Do I need to book Samarkand tours in advance?", "acceptedAnswer": { "@type": "Answer", "text": "A few days ahead is usually enough outside peak season." } }
                    ]
                },
            };

        case "best-registan-walking-tour-samarkand":
            return {
                title: "Which Is the Best Registan Walking Tour in Samarkand?",
                seoTitle: "Best Registan Walking Tour Samarkand 2026 | Honest Comparison",
                description: "Compare real Registan and Samarkand monument walking tours — from a $24 group tour to a private Silk Road history tour and a full-day 9-site circuit.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ee6e464ca7b833ef243ba9cc4d39b45b70a57de3397b7281161d9dc213100df.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "The Registan — three monumental madrasas facing a shared square — is Samarkand's single most important sight, and nearly every walking tour in the city is built around it, usually paired with Shah-i-Zinda's necropolis and Gur-e-Amir's mausoleum. Prices range from $24 for a standard group walking tour to $130+ for a full private day, and the difference is mostly pacing and group size rather than which sites you see.",
                        tourCard: { slug: "walking-tour-of-samarkands-historical-monuments", title: "Walking Tour of Samarkand's Historical Monuments", description: "The standard group walking tour covering the Registan and Samarkand's other major monuments.", price: "From $24", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ee6e464ca7b833ef243ba9cc4d39b45b70a57de3397b7281161d9dc213100df.png" },
                    },
                    {
                        title: "Cheapest: Standard Group Walking Tour",
                        content: "If you just want the Registan and the city's other major monuments explained well, the standard group tour covers it at the lowest price point — a solid choice for most first-time visitors.",
                        tourCard: { slug: "walking-tour-of-samarkands-historical-monuments", title: "Walking Tour of Samarkand's Historical Monuments", description: "The most budget-friendly way to see the Registan and surrounding monuments with a guide.", price: "From $24", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ee6e464ca7b833ef243ba9cc4d39b45b70a57de3397b7281161d9dc213100df.png" },
                    },
                    {
                        title: "If You Want It Private",
                        content: "A private version of the five-icon-sites walking tour means your own guide and schedule rather than a fixed group pace — useful for photographers who want extra time at the Registan or families travelling with kids.",
                        tourCard: { slug: "samarkand-private-walking-tour-of-5-iconic-sites", title: "Samarkand: Private Walking Tour of 5 Iconic Sites", description: "A private walking tour of Samarkand's five most important monuments.", price: "From $99", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ef0edd491f75de845da495ef68851aec87d3b16a2ff403cc8b6ee8583d9dcd08.jpg" },
                    },
                    {
                        title: "If You Want the Silk Road Story",
                        content: "This private tour frames the same monuments around Samarkand's role as a Silk Road crossroads rather than listing buildings one by one — a better fit if you want the history explained as a connected story.",
                        tourCard: { slug: "samarkand-private-tour-on-the-ancient-silk-road", title: "Samarkand: Private Tour On the Ancient Silk Road 10+ locs.", description: "A private Silk Road-history-focused tour across ten-plus Samarkand locations.", price: "From $37", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/177a1f4e1a0f282685757b0e4dd412a1da9ee15c5039f84046a82027f7f35fde.jpg" },
                    },
                    {
                        title: "If You Want a Fuller Day: 9 Must-See Sites",
                        content: "For travellers with only one day in Samarkand, this full-day tour adds the Siab Bazaar and several further sites to the Registan/Shah-i-Zinda/Gur-e-Amir core, maximizing what one tour slot can cover.",
                        tourCard: { slug: "samarkand-full-day-city-tour-with-9-must-see", title: "Samarkand: Full-Day City Tour with 9 Must-See Attractions", description: "A packed single day covering nine of Samarkand's must-see sites.", price: "From $78", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f3445ee56e4c4834971f66a739b22124bb8f135e1963c38ae6e6fbda16e2b74.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Visit the Registan early morning or late afternoon both for softer light and smaller crowds — midday sun on the tiled facades is harsh for photos. Modest dress is appreciated when entering working mosque areas inside the complex, though it's not strictly enforced for tourists at most sites."
                    }
                ],
                faqs: [
                    { q: "What is the best Registan walking tour in Samarkand?", a: "A standard half-day group walking tour covering the Registan, Shah-i-Zinda and Gur-e-Amir suits most visitors; go private if you want your own pace." },
                    { q: "How much does a Registan walking tour cost?", a: "Group tours start around $24; private tours range from $37 to $130+ depending on length and exclusivity." },
                    { q: "What else is usually included besides the Registan?", a: "Shah-i-Zinda's tiled necropolis and Gur-e-Amir's mausoleum are the two most common additional stops." },
                    { q: "When is the best time of day to visit the Registan?", a: "Early morning or late afternoon, for softer light and fewer crowds than midday." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Registan walking tour in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "A standard half-day group walking tour covering the Registan, Shah-i-Zinda and Gur-e-Amir suits most visitors." } },
                        { "@type": "Question", "name": "How much does a Registan walking tour cost?", "acceptedAnswer": { "@type": "Answer", "text": "Group tours start around $24; private tours range from $37 to $130+." } },
                        { "@type": "Question", "name": "What else is usually included besides the Registan?", "acceptedAnswer": { "@type": "Answer", "text": "Shah-i-Zinda's necropolis and Gur-e-Amir's mausoleum are common additional stops." } },
                        { "@type": "Question", "name": "When is the best time of day to visit the Registan?", "acceptedAnswer": { "@type": "Answer", "text": "Early morning or late afternoon, for softer light and fewer crowds." } }
                    ]
                },
            };

        case "best-tours-in-tashkent":
            return {
                title: "Best Tours in Tashkent — 2026, Honestly Compared",
                seoTitle: "Best Tours in Tashkent 2026: Top-Rated Picks by Category",
                description: "The best Tashkent tours for 2026, picked by category — mountain day trips to Chimgan and Amirsoy, Chorsu Bazaar food walks, and city tours — with real prices and an honest note on how we chose them.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/45cee0072220499fdac7dfee90264e775b4db16aaaf47a5fa34785c37d04d0ac.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Tashkent's biggest draw isn't inside the city at all — it's the Chimgan/Amirsoy/Charvak Lake mountain region an hour or two outside town, which is why mountain day trips dominate Tashkent's tour catalogue. Inside the city, a Chorsu Bazaar food walking tour is the top-rated way to spend a half day. Below is our honest, by-category breakdown with real prices, not a marketing list.",
                        tourCard: { slug: "tashkent-mountain-tour-amirsoy-chimgan-and", title: "Tashkent Mountain Tour: Amirsoy, Chimgan and Charvak Lake", description: "The standard mountain day trip covering Tashkent's three biggest outdoor draws in one trip.", price: "From $52", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/45cee0072220499fdac7dfee90264e775b4db16aaaf47a5fa34785c37d04d0ac.jpg" },
                    },
                    {
                        title: "Best Food Tour in Tashkent",
                        content: "Chorsu Bazaar is Tashkent's biggest and most atmospheric market, and a guided street-food walking tour through it is the top-rated way to eat your way through the city — someone who knows which stalls are actually good saves you from guessing in a market this large.",
                        tourCard: { slug: "tashkent-chorsu-bazaar-and-street-food-walking", title: "Tashkent: Chorsu Bazaar and Street Food Walking Tour", description: "A guided tasting walk through Tashkent's biggest bazaar.", price: "From $13", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ee6e464ca7b833ef243ba9cc4d39b45b70a57de3397b7281161d9dc213100df.png" },
                    },
                    {
                        title: "Best Private Mountain Day Trip",
                        content: "For travellers who want the full mountain circuit without sharing a group schedule, this private all-mountains day trip covers Chimgan, Amirsoy and Charvak Lake at your own pace, with more time at whichever stop interests you most.",
                        tourCard: { slug: "tashkent-all-the-best-mountains-in-one-private", title: "Tashkent: All the Best Mountains in One Private Day Trip", description: "A private version of the full mountain circuit, paced to what you want to see most.", price: "From $194", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bf6b8056eff6f8c8ba07d1b24a554dbba90e03b830f75bc0fb9c1d8e4fcdf658.jpg" },
                    },
                    {
                        title: "Best for Wine: Chimgan + Winery Combo",
                        content: "Uzbekistan has a growing wine scene, and this day trip pairs the Chimgan Mountains with a winery visit — a good option if you want the mountain scenery plus something to do that isn't purely hiking or sightseeing.",
                        tourCard: { slug: "from-tashkent-chimgan-mountains-winery-day-trip", title: "From Tashkent: Chimgan Mountains & Winery Day Trip", description: "Mountain scenery paired with a local winery visit.", price: "From $180", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7725adbbc7a3997a227c14b4d09ce36d855c2acc43811047891807abf79d85bb.jpg" },
                    },
                    {
                        title: "Cheapest Mountain Day Trip",
                        content: "If budget matters more than covering every mountain stop, this Tian Shan and Charvak Lake trip is one of the lower-priced ways to get out of the city and into the mountains for a full day.",
                        tourCard: { slug: "from-tashkent-tian-shan-peaks-charvak-lake", title: "From Tashkent: Tian Shan Peaks & Charvak Lake Excursion", description: "A budget-friendly mountain and lake day trip from Tashkent.", price: "From $55", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d54f0fcc09c7cbd320431e74db0cdfaafb5d6f4c1f628c7116e1f0fcc6ed595d.jpg" },
                    },
                    {
                        title: "How We Picked These",
                        content: "Every tour above is run by a verified local operator we've vetted directly. We don't claim to be the cheapest option in Tashkent — several of these tours are also sold on other platforms by the same operator, who sets their own rate. What we commit to is confirming every booking directly with the operator by WhatsApp before it's treated as final, and refunding in full if they can't take your date. Browse [all Tashkent tours](/uzbekistan/tashkent) if you'd rather pick your own instead of our picks."
                    }
                ],
                faqs: [
                    { q: "What is the best tour in Tashkent?", a: "A mountain day trip to Chimgan, Amirsoy and Charvak Lake is Tashkent's top draw; a Chorsu Bazaar food walking tour is the best way to spend a half day inside the city itself." },
                    { q: "How far are the mountains from Tashkent?", a: "The Chimgan/Amirsoy/Charvak Lake region is about an hour to two hours outside the city, making it an easy full-day trip." },
                    { q: "What is the best food tour in Tashkent?", a: "A guided street-food walking tour through Chorsu Bazaar, Tashkent's biggest and most atmospheric market." },
                    { q: "Is a private mountain day trip worth it from Tashkent?", a: "Yes if you want to set your own pace at each stop — it costs more than a group tour but removes the fixed schedule." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best tour in Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "A mountain day trip to Chimgan, Amirsoy and Charvak Lake is Tashkent's top draw." } },
                        { "@type": "Question", "name": "How far are the mountains from Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "About one to two hours outside the city." } },
                        { "@type": "Question", "name": "What is the best food tour in Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "A guided street-food walking tour through Chorsu Bazaar." } },
                        { "@type": "Question", "name": "Is a private mountain day trip worth it from Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes if you want to set your own pace — it costs more than a group tour." } }
                    ]
                },
            };

        case "best-chimgan-mountain-tour-tashkent":
            return {
                title: "Which Is the Best Chimgan Mountain Tour from Tashkent?",
                seoTitle: "Best Chimgan Mountain Tour Tashkent 2026 | Honest Comparison",
                description: "Compare real Chimgan, Amirsoy and Charvak Lake day trips from Tashkent — from a $52 standard tour to a private all-mountains trip and a winery combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/45cee0072220499fdac7dfee90264e775b4db16aaaf47a5fa34785c37d04d0ac.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "The Chimgan Mountains, Amirsoy ski resort, and Charvak Lake sit together in the Tian Shan foothills about an hour or two from Tashkent, and most day trips combine two or three of them in one outing. Standard group tours run around $52-58 for a full day; private versions and specialty combos (winery, extra peaks) run from $105 up to $195+.",
                        tourCard: { slug: "tashkent-mountain-tour-amirsoy-chimgan-and", title: "Tashkent Mountain Tour: Amirsoy, Chimgan and Charvak Lake", description: "The standard group day trip covering all three of the region's main draws.", price: "From $52", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/45cee0072220499fdac7dfee90264e775b4db16aaaf47a5fa34785c37d04d0ac.jpg" },
                    },
                    {
                        title: "Cheapest: Standard Group Day Trip",
                        content: "This is the lowest-priced way to see all three of the region's main draws — Amirsoy, Chimgan and Charvak Lake — in one group day trip.",
                        tourCard: { slug: "tashkent-mountain-tour-amirsoy-chimgan-and", title: "Tashkent Mountain Tour: Amirsoy, Chimgan and Charvak Lake", description: "The most budget-friendly way to cover the full mountain circuit.", price: "From $52", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/45cee0072220499fdac7dfee90264e775b4db16aaaf47a5fa34785c37d04d0ac.jpg" },
                    },
                    {
                        title: "If You Want It Private",
                        content: "A private version of the full mountain circuit means no group schedule to follow — useful if you want extra time at Amirsoy's cable car or a longer stop at Charvak Lake's viewpoints.",
                        tourCard: { slug: "tashkent-all-the-best-mountains-in-one-private", title: "Tashkent: All the Best Mountains in One Private Day Trip", description: "A private day trip through the full mountain region at your own pace.", price: "From $194", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bf6b8056eff6f8c8ba07d1b24a554dbba90e03b830f75bc0fb9c1d8e4fcdf658.jpg" },
                    },
                    {
                        title: "If You Want Wine Added",
                        content: "This combo trip pairs the Chimgan Mountains with a stop at a local winery — a good option if you want to try Uzbekistan's wine scene alongside the mountain scenery rather than booking two separate trips.",
                        tourCard: { slug: "from-tashkent-chimgan-mountains-winery-day-trip", title: "From Tashkent: Chimgan Mountains & Winery Day Trip", description: "Mountain scenery combined with a local winery visit.", price: "From $180", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7725adbbc7a3997a227c14b4d09ce36d855c2acc43811047891807abf79d85bb.jpg" },
                    },
                    {
                        title: "If You Want More Peaks: Amirsoy, Chimgan, Charvak and Chinorkent",
                        content: "For travellers who want to maximize the day rather than stick to the classic three stops, this trip adds Chinorkent to the circuit — good for anyone who specifically wants the fullest possible tour of the region in one trip.",
                        tourCard: { slug: "amirsoy-chimgan-charvak-and-chinorkent-day-trip", title: "Amirsoy, Chimgan, Charvak and Chinorkent Day Trip", description: "A four-stop mountain day trip for travellers who want the fullest regional circuit.", price: "From $105", duration: "7.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe06bf1316a9c1dcd094c355d822cd54ad2932373d7b2dea2701e1c495f4e417.jpg" },
                    },
                    {
                        title: "Budget Alternative: Tian Shan Peaks & Charvak Lake",
                        content: "If the full three-stop circuit is more than you need, this trip focuses on the Tian Shan Peaks and Charvak Lake alone at a lower price point — a good fit if you mainly want the lake views without the full mountain-resort stop.",
                        tourCard: { slug: "from-tashkent-tian-shan-peaks-charvak-lake", title: "From Tashkent: Tian Shan Peaks & Charvak Lake Excursion", description: "A focused, lower-priced trip to the Tian Shan Peaks and Charvak Lake.", price: "From $55", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d54f0fcc09c7cbd320431e74db0cdfaafb5d6f4c1f628c7116e1f0fcc6ed595d.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Amirsoy's cable car and Chimgan's scenery are best visited in clear weather — check the forecast before booking if your dates are flexible. Charvak Lake's water level and color vary noticeably by season, with late spring through summer generally the most scenic."
                    }
                ],
                faqs: [
                    { q: "What is the best Chimgan mountain tour from Tashkent?", a: "A standard group day trip covering Amirsoy, Chimgan and Charvak Lake suits most visitors; go private if you want your own pace at each stop." },
                    { q: "How far is Chimgan from Tashkent?", a: "About one to two hours by road, making it a comfortable full-day trip without an overnight stay." },
                    { q: "Can I add a winery to a Chimgan mountain tour?", a: "Yes — a combined Chimgan Mountains and winery day trip is a common option for travellers who want both." },
                    { q: "When is the best time to visit Charvak Lake?", a: "Late spring through summer generally offers the most scenic water color and conditions." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Chimgan mountain tour from Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "A standard group day trip covering Amirsoy, Chimgan and Charvak Lake suits most visitors." } },
                        { "@type": "Question", "name": "How far is Chimgan from Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "About one to two hours by road." } },
                        { "@type": "Question", "name": "Can I add a winery to a Chimgan mountain tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a combined Chimgan Mountains and winery day trip is a common option." } },
                        { "@type": "Question", "name": "When is the best time to visit Charvak Lake?", "acceptedAnswer": { "@type": "Answer", "text": "Late spring through summer generally offers the most scenic conditions." } }
                    ]
                },
            };

        case "best-tours-in-bukhara":
            return {
                title: "Best Tours in Bukhara — 2026, Honestly Compared",
                seoTitle: "Best Tours in Bukhara 2026: Top-Rated Picks by Category",
                description: "The best Bukhara tours for 2026, picked by category — Old Town walking tours, Uzbek cooking classes and historical monuments — with real prices and an honest note on how we chose them.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d91bc77966a07a4ffa9345436d72e8bd9690385221195c7bf7d5bb4119575788.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Bukhara's entire Old Town is a UNESCO World Heritage Site, dense enough that a walking tour covers most of it in a few hours — the Ark Fortress, Lyabi-Hauz, the trading domes, and the Poi Kalon complex all sit within easy walking distance of each other. A historical walking tour with a local guide is the right starting point for almost every visitor; cooking classes and crafts workshops are the best way to round out a second day.",
                        tourCard: { slug: "bukhara-historical-walking-tour-with-local-guide", title: "Bukhara: Historical Walking Tour with Local Guide", description: "The standard way to see Bukhara's dense Old Town with a local guide explaining the history.", price: "From $25", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d91bc77966a07a4ffa9345436d72e8bd9690385221195c7bf7d5bb4119575788.jpg" },
                    },
                    {
                        title: "Best for a Longer, Deeper Walk",
                        content: "This longer version of the Old Town walk goes further into Bukhara's ancient monuments, worth it if you have more than a half day and want more context than the standard 3-hour circuit covers.",
                        tourCard: { slug: "bukhara-ancient-monuments-guided-walking-tour", title: "Bukhara: Ancient Monuments Guided Walking Tour", description: "A longer, deeper walking tour through Bukhara's ancient monuments.", price: "From $52", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6c6454ffb122acbcd8cef096e384c7307090b8dfa2449a634311407b6cbb90a8.png" },
                    },
                    {
                        title: "Best for a Specific Route: Lyabi-Hauz to the Ark",
                        content: "Rather than a general city overview, this tour follows a specific route from the Lyabi-Hauz ensemble (Bukhara's social heart, built around a centuries-old pond) to the Ark Fortress — good if you want a clear narrative thread rather than a scattered list of stops.",
                        tourCard: { slug: "bukhara-from-lyabi-hauz-ensemble-to-the-ark", title: "Bukhara: From Lyabi-Hauz Ensemble to the Ark Fortress", description: "A route-based walking tour from Bukhara's central pond to its fortress.", price: "From $30", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7c78c2ec3b1cbbb92569e8fc1c53096c086eb1da196644fd6759359e5e6fb8ac.jpg" },
                    },
                    {
                        title: "Best Cooking Class",
                        content: "Uzbek plov (the national rice dish) has regional variations across the country, and a hands-on cooking class with a local family is the best way to understand Bukhara's version specifically, with a real meal at the end rather than just a demonstration.",
                        tourCard: { slug: "bukhara-traditional-plov-and-uzbek-salad-cooking", title: "Bukhara: Traditional Plov and Uzbek Salad Cooking Class", description: "A hands-on plov cooking class with a local family, finishing with the meal.", price: "From $215", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ede1909bdc174d3f22ae6d10caf440751f4bcd39520c707db1b16697e84f929.png" },
                    },
                    {
                        title: "Cheapest Way to See the Old Town",
                        content: "If budget is the deciding factor, the standard historical walking tour is already the lowest-priced option for covering Bukhara's main sights — a cooking class or workshop is the better add-on for a second day, not a cheaper substitute for the walking tour itself.",
                        tourCard: { slug: "bukhara-guided-walking-tour-of-old-town", title: "Bukhara: Guided Walking Tour of Old Town", description: "A budget-friendly guided walk through Bukhara's Old Town.", price: "From $29", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/441b16ea72bbd26cdfd280153c86be11be9033f29070093f73e926037d7ddb1b.png" },
                    },
                    {
                        title: "How We Picked These",
                        content: "Every tour above is run by a verified local operator we've vetted directly. We don't claim to be the cheapest option in Bukhara — several of these tours are also sold on other platforms by the same operator, who sets their own rate. What we commit to is confirming every booking directly with the operator by WhatsApp before it's treated as final, and refunding in full if they can't take your date. Browse [all Bukhara tours](/uzbekistan/bukhara) if you'd rather pick your own instead of our picks."
                    }
                ],
                faqs: [
                    { q: "What is the best tour in Bukhara?", a: "A historical walking tour of Bukhara's Old Town — the Ark Fortress, Lyabi-Hauz, and the Poi Kalon complex — is the right starting point for almost every visitor." },
                    { q: "How many days do I need in Bukhara?", a: "A full day covers the main Old Town walking circuit; two days allows time for a cooking class or craft workshop as well." },
                    { q: "What is the best cooking class in Bukhara?", a: "A hands-on Uzbek plov and salad cooking class with a local family, which ends with the meal you made." },
                    { q: "Is Bukhara's Old Town walkable?", a: "Yes — nearly all of Bukhara's major sights sit within a compact, walkable UNESCO-listed Old Town." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best tour in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "A historical walking tour of Bukhara's Old Town is the right starting point for almost every visitor." } },
                        { "@type": "Question", "name": "How many days do I need in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "A full day covers the main walking circuit; two days allows for a cooking class or workshop." } },
                        { "@type": "Question", "name": "What is the best cooking class in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "A hands-on Uzbek plov and salad cooking class with a local family." } },
                        { "@type": "Question", "name": "Is Bukhara's Old Town walkable?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — nearly all major sights sit within a compact, walkable UNESCO-listed Old Town." } }
                    ]
                },
            };

        case "best-old-town-walking-tour-bukhara":
            return {
                title: "Which Is the Best Old Town Walking Tour in Bukhara?",
                seoTitle: "Best Old Town Walking Tour Bukhara 2026 | Honest Comparison",
                description: "Compare real Bukhara Old Town walking tours — from a $25 standard guided walk to a deeper ancient-monuments tour and a route-based Lyabi-Hauz to Ark Fortress walk.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f7e0f797f2bd4dc90772de5705237cf9cf4c3c9f9fd341d5d8ee94407c15125d.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Bukhara's Old Town is compact enough that most walking tours cover similar ground — the Ark Fortress, Lyabi-Hauz, the trading domes, and the Poi Kalon minaret complex — with the real differences coming down to tour length (2.5 to 4.5 hours) and how deep into the history each guide goes. Prices run $25-52 for these guided walks.",
                        tourCard: { slug: "bukhara-historical-walking-tour-with-local-guide", title: "Bukhara: Historical Walking Tour with Local Guide", description: "The standard guided walk through Bukhara's main Old Town sights.", price: "From $25", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d91bc77966a07a4ffa9345436d72e8bd9690385221195c7bf7d5bb4119575788.jpg" },
                    },
                    {
                        title: "Cheapest: Standard Old Town Walk",
                        content: "This guided walk covers Bukhara's main Old Town sights at the lowest price point — a solid choice if you mainly want the sights explained without a longer commitment.",
                        tourCard: { slug: "bukhara-guided-walking-tour-of-old-town", title: "Bukhara: Guided Walking Tour of Old Town", description: "The most budget-friendly guided walk through the Old Town.", price: "From $29", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/441b16ea72bbd26cdfd280153c86be11be9033f29070093f73e926037d7ddb1b.png" },
                    },
                    {
                        title: "If You Want More Depth: Ancient Monuments Tour",
                        content: "This longer version goes further into Bukhara's ancient monuments than the standard circuit — a better fit if you have more time and want more historical context per stop.",
                        tourCard: { slug: "bukhara-ancient-monuments-guided-walking-tour", title: "Bukhara: Ancient Monuments Guided Walking Tour", description: "A longer, more in-depth walking tour of Bukhara's ancient monuments.", price: "From $52", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6c6454ffb122acbcd8cef096e384c7307090b8dfa2449a634311407b6cbb90a8.png" },
                    },
                    {
                        title: "If You Want a Clear Route: Lyabi-Hauz to the Ark",
                        content: "Instead of a general overview, this tour follows a specific path from the Lyabi-Hauz ensemble to the Ark Fortress, giving the walk a clear narrative thread rather than a scattered stop list.",
                        tourCard: { slug: "bukhara-from-lyabi-hauz-ensemble-to-the-ark", title: "Bukhara: From Lyabi-Hauz Ensemble to the Ark Fortress", description: "A route-based walk connecting Bukhara's central pond to its fortress.", price: "From $30", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7c78c2ec3b1cbbb92569e8fc1c53096c086eb1da196644fd6759359e5e6fb8ac.jpg" },
                    },
                    {
                        title: "If You Want the Longest Version",
                        content: "This is the longest Old Town walking tour available, pairing the main circuit with extra time at each stop — a good fit for history-focused travellers who want to linger rather than move quickly between sights.",
                        tourCard: { slug: "bukhara-old-town-walking-tour-with-local-guide", title: "Bukhara: Old Town Walking Tour with Local Guide", description: "The longest version of the Old Town walking tour, with more time at each stop.", price: "From $46", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f7e0f797f2bd4dc90772de5705237cf9cf4c3c9f9fd341d5d8ee94407c15125d.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Bukhara's Old Town is mostly flat and walkable in regular shoes — no special footwear needed. Summer afternoons get very hot; a morning or early-evening tour is more comfortable than a midday one."
                    }
                ],
                faqs: [
                    { q: "What is the best Old Town walking tour in Bukhara?", a: "A standard 3-hour guided walk covering the Ark Fortress, Lyabi-Hauz and the trading domes suits most visitors." },
                    { q: "How long is a Bukhara Old Town walking tour?", a: "Most run 2.5 to 4.5 hours, depending on how much depth and how many stops are included." },
                    { q: "What's included in a Bukhara walking tour?", a: "Typically the Ark Fortress, Lyabi-Hauz, the trading domes and the Poi Kalon minaret complex." },
                    { q: "Is Bukhara hot for walking tours?", a: "Summer afternoons get very hot — a morning or early-evening tour is more comfortable." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Old Town walking tour in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 3-hour guided walk covering the Ark Fortress, Lyabi-Hauz and the trading domes suits most visitors." } },
                        { "@type": "Question", "name": "How long is a Bukhara Old Town walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "Most run 2.5 to 4.5 hours depending on depth and stops." } },
                        { "@type": "Question", "name": "What's included in a Bukhara walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the Ark Fortress, Lyabi-Hauz, the trading domes and the Poi Kalon minaret complex." } },
                        { "@type": "Question", "name": "Is Bukhara hot for walking tours?", "acceptedAnswer": { "@type": "Answer", "text": "Summer afternoons get very hot — morning or early-evening tours are more comfortable." } }
                    ]
                },
            };

        case "best-tours-in-khiva":
            return {
                title: "Best Tours in Khiva — 2026, Honestly Compared",
                seoTitle: "Best Tours in Khiva 2026: Top-Rated Picks by Category",
                description: "The best Khiva tours for 2026, picked by category — Itchan Kala walking tours, craft workshops and day trips to the Aral Sea — with real prices and an honest note on how we chose them.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/49abb72b2fa6961a6a09013a56e9e21246ffc959e279bf47bdbc250711b02ccc.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Itchan Kala, Khiva's walled inner city, is one of the best-preserved old towns in Central Asia and the reason almost everyone visits — a guided walking tour through it is the right starting point for nearly every traveller. Khiva is also the jumping-off point for day trips to the Aral Sea's ship cemetery, a genuinely different kind of experience from the old-city sightseeing.",
                        tourCard: { slug: "khiva-cultural-sightseeing-tour-of-itchan-kala", title: "Khiva: Cultural Sightseeing Tour of Itchan Kala with Local Guide", description: "The standard way to see Khiva's walled inner city with a local guide explaining its history.", price: "From $208", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/49abb72b2fa6961a6a09013a56e9e21246ffc959e279bf47bdbc250711b02ccc.jpg" },
                    },
                    {
                        title: "Cheapest: Old Town Guided Walk",
                        content: "This lower-priced guided walk covers Khiva's Old Town and Itchan Kala's main sights without the premium of the full cultural sightseeing package — a good choice for budget-conscious travellers who still want a local guide.",
                        tourCard: { slug: "khivas-old-town-guided-walking-tour", title: "Khiva's Old Town Guided Walking Tour", description: "A budget-friendly guided walk through Khiva's Old Town.", price: "From $37", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/567a21f8507f7ffa88fb96ff33cd1cd9053611323225762842d5746804bce9f1.png" },
                    },
                    {
                        title: "Best for the Silk Road Story",
                        content: "This tour frames Khiva's walled city specifically around its Silk Road history rather than listing monuments one by one — a good fit if you want the historical narrative explained as a connected story.",
                        tourCard: { slug: "walking-through-khivas-silk-road-heritage", title: "Walking Through Khiva's Silk Road Heritage", description: "A Silk Road-history-focused walk through Khiva's ancient sites.", price: "From $42", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1fdb9257cc7f4075e70acd4439dd51a6266e483e737ffe678d2f9305ae46f13.png" },
                    },
                    {
                        title: "Best Full Day Out: Khiva to Muynak",
                        content: "For travellers who want to see the Aral Sea's famous ship cemetery — stranded fishing boats on what used to be seabed — this long day trip from Khiva covers the drying sea, the ship graveyard, and the Savitsky Museum of Soviet-era art in Nukus.",
                        tourCard: { slug: "khiva-to-muynak-aral-sea-ship-cemetery-savitsky", title: "Khiva to Muynak: Aral Sea, Ship Cemetery & Savitsky Museum", description: "A full day trip to the Aral Sea's ship cemetery and the Savitsky Museum.", price: "From $241", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/90669fe72614e4ab5bf8903ef0a491b3a3394ebb5e1063ab452e9193f7d8907d.jpg" },
                    },
                    {
                        title: "Best Multi-Day Option: 2-Day Khiva Tour",
                        content: "If you want to go beyond Itchan Kala, this 2-day package adds five fortresses and a yurt camp stay to the standard old-city sightseeing, giving a much fuller picture of the Khorezm region than a single-day visit.",
                        tourCard: { slug: "all-in-2-day-khiva-tour-5-fortress-yurt", title: "All In 2-Day Khiva Tour: 5 Fortresses & Yurt Camp, Itchan Kala", description: "A 2-day package covering Itchan Kala, five desert fortresses and a yurt camp stay.", price: "From $319", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2bc04024a0b2dc273e1d0c77f83b38b6b85b3927ddaefe7d5012f9fcf9388d4c.png" },
                    },
                    {
                        title: "How We Picked These",
                        content: "Every tour above is run by a verified local operator we've vetted directly. We don't claim to be the cheapest option in Khiva — several of these tours are also sold on other platforms by the same operator, who sets their own rate. What we commit to is confirming every booking directly with the operator by WhatsApp before it's treated as final, and refunding in full if they can't take your date. Browse [all Khiva tours](/uzbekistan/khiva) if you'd rather pick your own instead of our picks."
                    }
                ],
                faqs: [
                    { q: "What is the best tour in Khiva?", a: "A guided walking tour of Itchan Kala, Khiva's walled inner city, is the right starting point for almost every visitor." },
                    { q: "Is the Aral Sea day trip from Khiva worth it?", a: "Yes if you have a full day to spare — the ship cemetery at Muynak and the Savitsky Museum in Nukus are a genuinely different experience from Khiva's old-city sightseeing." },
                    { q: "How many days do I need in Khiva?", a: "A single day covers Itchan Kala; a 2-day package lets you add nearby desert fortresses and a yurt camp stay." },
                    { q: "What is Itchan Kala?", a: "Khiva's walled inner city, one of the best-preserved old towns in Central Asia and a UNESCO World Heritage Site." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best tour in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "A guided walking tour of Itchan Kala, Khiva's walled inner city, is the right starting point." } },
                        { "@type": "Question", "name": "Is the Aral Sea day trip from Khiva worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes if you have a full day — the ship cemetery and Savitsky Museum are a different experience from old-city sightseeing." } },
                        { "@type": "Question", "name": "How many days do I need in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "A single day covers Itchan Kala; a 2-day package adds desert fortresses and a yurt camp stay." } },
                        { "@type": "Question", "name": "What is Itchan Kala?", "acceptedAnswer": { "@type": "Answer", "text": "Khiva's walled inner city, one of the best-preserved old towns in Central Asia." } }
                    ]
                },
            };

        case "best-itchan-kala-walking-tour-khiva":
            return {
                title: "Which Is the Best Itchan Kala Walking Tour in Khiva?",
                seoTitle: "Best Itchan Kala Walking Tour Khiva 2026 | Honest Comparison",
                description: "Compare real Khiva Itchan Kala walking tours — from a $26 budget guided walk to a $208 full cultural sightseeing package and a Silk Road heritage walk.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2da87a27c74d49d0267b2f70e2c43e6abc7c86c9727666467775dac9a2c6fc50.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Itchan Kala, Khiva's walled inner city, is compact enough to walk end to end in under an hour, but a guided tour of 3-4 hours is what most visitors actually book to get the history behind the mosques, minarets and madrasas rather than just the view. Prices range from $26 for a basic guided walk to $208 for a fuller cultural sightseeing package.",
                        tourCard: { slug: "khiva-historical-monuments-guided-walking-tour", title: "Khiva: Historical Monuments Guided Walking Tour", description: "A guided walk through Itchan Kala's historical monuments.", price: "From $26", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2da87a27c74d49d0267b2f70e2c43e6abc7c86c9727666467775dac9a2c6fc50.png" },
                    },
                    {
                        title: "Cheapest: Historical Monuments Walk",
                        content: "This is the lowest-priced way to get a guided walk through Itchan Kala's main historical monuments, covering the walled city's mosques and minarets.",
                        tourCard: { slug: "khiva-historical-monuments-guided-walking-tour", title: "Khiva: Historical Monuments Guided Walking Tour", description: "The most budget-friendly guided walk through Itchan Kala.", price: "From $26", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2da87a27c74d49d0267b2f70e2c43e6abc7c86c9727666467775dac9a2c6fc50.png" },
                    },
                    {
                        title: "If You Want More Sites: Ancient Sites Walk",
                        content: "This version covers more of Khiva's ancient sites within the walled city than the basic historical walk — a middle-ground option between the cheapest tour and the full cultural package.",
                        tourCard: { slug: "khiva-guided-walking-tour-in-khivas-ancient-sites", title: "Khiva: Guided Walking Tour in Khiva's Ancient Sites", description: "A broader guided walk across more of Itchan Kala's ancient sites.", price: "From $32", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2bc04024a0b2dc273e1d0c77f83b38b6b85b3927ddaefe7d5012f9fcf9388d4c.png" },
                    },
                    {
                        title: "If You Want the Silk Road Story",
                        content: "This tour frames Itchan Kala specifically around Khiva's role in Silk Road trade, rather than a general sightseeing list — a good fit for history-focused travellers.",
                        tourCard: { slug: "walking-through-khivas-silk-road-heritage", title: "Walking Through Khiva's Silk Road Heritage", description: "A Silk Road-history-focused walk through Itchan Kala.", price: "From $42", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1fdb9257cc7f4075e70acd4439dd51a6266e483e737ffe678d2f9305ae46f13.png" },
                    },
                    {
                        title: "If You Want the Fullest Package",
                        content: "This cultural sightseeing tour is the most comprehensive version available, covering Itchan Kala in full with a guide who goes deeper into context than the shorter walks — worth it if Khiva is your main stop rather than a brief Silk Road waypoint.",
                        tourCard: { slug: "khiva-cultural-sightseeing-tour-of-itchan-kala", title: "Khiva: Cultural Sightseeing Tour of Itchan Kala with Local Guide", description: "The fullest, most comprehensive tour of Itchan Kala available.", price: "From $208", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/49abb72b2fa6961a6a09013a56e9e21246ffc959e279bf47bdbc250711b02ccc.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Itchan Kala charges a general entry ticket separate from most guided tour prices — confirm with your operator whether it's included. Climbing the Islam Khoja or Kalta Minor minarets (where open) gives the best overview photos of the walled city."
                    }
                ],
                faqs: [
                    { q: "What is the best Itchan Kala walking tour in Khiva?", a: "A standard 3-4 hour guided walk covering the walled city's main monuments suits most visitors." },
                    { q: "Does the Itchan Kala tour price include entry?", a: "Not always — confirm with your operator whether the general entry ticket is included in the tour price." },
                    { q: "How long does it take to walk Itchan Kala?", a: "The walled city is compact enough to cross in under an hour, but a guided tour of 3-4 hours is typical for seeing it properly." },
                    { q: "What's the best viewpoint in Itchan Kala?", a: "Climbing one of the open minarets, like Islam Khoja, gives the best overview photos of the walled city." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Itchan Kala walking tour in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 3-4 hour guided walk covering the walled city's main monuments suits most visitors." } },
                        { "@type": "Question", "name": "Does the Itchan Kala tour price include entry?", "acceptedAnswer": { "@type": "Answer", "text": "Not always — confirm with your operator whether entry is included." } },
                        { "@type": "Question", "name": "How long does it take to walk Itchan Kala?", "acceptedAnswer": { "@type": "Answer", "text": "Under an hour to cross, but a guided tour of 3-4 hours is typical." } },
                        { "@type": "Question", "name": "What's the best viewpoint in Itchan Kala?", "acceptedAnswer": { "@type": "Answer", "text": "Climbing one of the open minarets, like Islam Khoja." } }
                    ]
                },
            };

        default:
            return null;
    }
}
