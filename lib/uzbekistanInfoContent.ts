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

        default:
            return null;
    }
}
