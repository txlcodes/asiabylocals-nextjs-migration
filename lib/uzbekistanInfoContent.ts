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

        case "best-plov-cooking-class-samarkand":
            return {
                title: "Which Is the Best Plov Cooking Class in Samarkand?",
                seoTitle: "Best Samarkand Plov Cooking Class 2026",
                description: "Compare real plov cooking classes in Samarkand — Uzbekistan's national rice dish, taught hands-on, with a standalone class or a fuller village tour version.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0d56dffe16631fb0bfbf0d0f955e8f838af70bdb8f87043b28945b856795e759.jpg",
                sections: [
                    { title: "The Short Answer", content: "Plov, Uzbekistan's national rice dish, is traditionally cooked in a large kazan (cauldron) over an open flame — this standalone class teaches the technique directly.", tourCard: { slug: "samarkand-plov-cooking-class", title: "Samarkand: Plov Cooking Class", description: "A hands-on plov cooking class.", price: "From $65", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0d56dffe16631fb0bfbf0d0f955e8f838af70bdb8f87043b28945b856795e759.jpg" } },
                    { title: "Best for a Fuller Day: Village Tour with Plov Class & Home Visit", content: "This extends the cooking class into a half-day village tour with a visit to a local home, giving broader cultural context beyond just the cooking itself.", tourCard: { slug: "samarkand-village-tour-with-plov-cooking-class", title: "Samarkand: Village Tour with Plov Cooking Class & Home Visit", description: "A village tour combining a plov cooking class with a local home visit.", price: "From $129", duration: "6.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f3ed354e03627fc6e9775cafbf2fc4a6dfa9cf01c4ff45cbb236bd02b26e797c.jpg" } },
                    { title: "Practical Tips", content: "Plov is traditionally eaten communally from a shared platter — most classes end with everyone sitting down to eat what was cooked." }
                ],
                faqs: [
                    { q: "What is plov?", a: "Uzbekistan's national rice dish, traditionally cooked in a large kazan cauldron over an open flame." },
                    { q: "Which plov cooking class is best in Samarkand?", a: "The standalone class for a focused lesson, or the village tour version for broader cultural context with a home visit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is plov?", "acceptedAnswer": { "@type": "Answer", "text": "Uzbekistan's national rice dish, cooked in a kazan cauldron." } }
                ] },
            };

        case "is-metro-tour-worth-it-tashkent":
            return {
                title: "Is the Tashkent Metro Tour Worth It?",
                seoTitle: "Tashkent Metro Tour 2026 | Honest Review",
                description: "An honest look at Tashkent's metro tour, visiting the Soviet-era metro's ornately decorated stations, paired with Chorsu Bazaar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce6200a9baa439125e13ac191a2a315293b5c07c0e09e8f9bb48b597cf0f1058.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tashkent's Soviet-era metro stations are ornately decorated with marble, chandeliers, and themed murals — genuinely striking architecture most visitors never associate with a subway system, paired here with a visit to Chorsu Bazaar.", tourCard: { slug: "tashkent-exclusive-metro-tour-with-chorsu-bazaar", title: "Tashkent: Exclusive Metro Tour with Chorsu Bazaar Visit", description: "A metro tour of Tashkent's ornate stations with a Chorsu Bazaar visit.", price: "From $52", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce6200a9baa439125e13ac191a2a315293b5c07c0e09e8f9bb48b597cf0f1058.jpg" } },
                    { title: "Practical Tips", content: "Photography inside the metro was once restricted — rules have relaxed significantly, but check current guidance with your guide." }
                ],
                faqs: [
                    { q: "Why is the Tashkent metro worth visiting?", a: "Its Soviet-era stations are ornately decorated with marble, chandeliers, and themed murals, unusual for a metro system." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Why is the Tashkent metro worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Its ornately decorated Soviet-era stations." } }
                ] },
            };

        case "is-plov-samsa-cooking-class-worth-it-tashkent":
            return {
                title: "Is the Plov & Samsa Cooking Class Worth It in Tashkent?",
                seoTitle: "Tashkent Plov Samsa Cooking Class 2026 | Honest Review",
                description: "An honest look at Tashkent's hands-on plov and samsa cooking class, covering two of Uzbekistan's defining dishes.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1cb3b6ba01a9ae6c77d1da4bd4ad9a3a901e82b30a309a100f15cbb2f50eb47.jpg",
                sections: [
                    { title: "The Short Answer", content: "This class covers both plov (the national rice dish) and samsa (savory baked pastries), giving a broader hands-on introduction to Uzbek cuisine than a single-dish class.", tourCard: { slug: "tashkent-hands-on-plov-and-samsa-cooking-class", title: "Tashkent: Hands-On Plov and Samsa Cooking Class", description: "A hands-on cooking class covering plov and samsa.", price: "From $208", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1cb3b6ba01a9ae6c77d1da4bd4ad9a3a901e82b30a309a100f15cbb2f50eb47.jpg" } },
                    { title: "Practical Tips", content: "Go with an appetite — you'll eat what you cook, and two dishes means a substantial meal by the end." }
                ],
                faqs: [
                    { q: "What is samsa?", a: "A savory baked pastry, typically filled with meat and onion, a staple Uzbek snack." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is samsa?", "acceptedAnswer": { "@type": "Answer", "text": "A savory baked pastry, typically filled with meat and onion." } }
                ] },
            };

        case "is-plov-workshop-worth-it-bukhara":
            return {
                title: "Is the Plov Cooking Workshop Worth It in Bukhara?",
                seoTitle: "Bukhara Plov Cooking Workshop 2026 | Honest Review",
                description: "An honest look at Bukhara's traditional plov cooking workshop.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ae39944912098dd74156f845925a196fcc5eafffd3ed9ea70e96583166be0f5.jpg",
                sections: [
                    { title: "The Short Answer", content: "This workshop teaches the traditional kazan-cauldron method of cooking plov, Uzbekistan's national dish, directly from a local cook.", tourCard: { slug: "bukhara-master-the-art-of-plov-in-a-traditional", title: "Bukhara: Master the Art of Plov in a Traditional Workshop", description: "A traditional plov cooking workshop in Bukhara.", price: "From $117", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ae39944912098dd74156f845925a196fcc5eafffd3ed9ea70e96583166be0f5.jpg" } },
                    { title: "Practical Tips", content: "A good evening activity after a day of exploring Bukhara's old town monuments." }
                ],
                faqs: [
                    { q: "Is the plov workshop worth it in Bukhara?", a: "Yes, for a hands-on introduction to Uzbekistan's national dish, cooked the traditional way." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the plov workshop worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a hands-on introduction to Uzbekistan's national dish." } }
                ] },
            };

        case "is-folklore-fashion-show-worth-it-bukhara":
            return {
                title: "Is the Folklore & Fashion Show at Nadir Divan-Begi Worth It?",
                seoTitle: "Bukhara Folklore Fashion Show 2026 | Honest Review",
                description: "An honest look at the Folklore & Fashion Show at Nadir Divan-Begi, a traditional Uzbek dance and costume performance in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f128370509d3dbf3c8d094b9d9fc3436f02cb8682b8855ffed232fb7d3b95be.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Held at the historic Nadir Divan-Begi madrasah, this short show features traditional Uzbek dance and costume displays — an easy, affordable evening cultural activity in a genuinely atmospheric setting.", tourCard: { slug: "bukhara-folklore-fashion-show-at-nadir-divan-begi", title: "Bukhara: Folklore & Fashion Show at Nadir Divan-Begi", description: "A folklore and fashion show at the historic Nadir Divan-Begi.", price: "From $26", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f128370509d3dbf3c8d094b9d9fc3436f02cb8682b8855ffed232fb7d3b95be.jpeg" } },
                    { title: "Practical Tips", content: "At just an hour and a low price, this is an easy add-on to an evening in Bukhara's old town." }
                ],
                faqs: [
                    { q: "What is the Nadir Divan-Begi folklore show?", a: "A short traditional Uzbek dance and costume performance held at the historic Nadir Divan-Begi madrasah." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the Nadir Divan-Begi folklore show?", "acceptedAnswer": { "@type": "Answer", "text": "A traditional Uzbek dance and costume performance at a historic madrasah." } }
                ] },
            };

        case "is-cooking-class-worth-it-khiva":
            return {
                title: "Is a Traditional Cooking Class Worth It in Khiva?",
                seoTitle: "Khiva Cooking Class 2026 | Honest Review",
                description: "An honest look at Khiva's traditional cooking class with a market visit and lunch.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fbccd9b29a9707c2ded34f2528249dda3c034ebbee9ae35596a4eee3e6e340a0.jpg",
                sections: [
                    { title: "The Short Answer", content: "This class pairs a local market visit with hands-on cooking of traditional Khivan dishes, giving context on fresh ingredients before you cook with them — a good cultural pairing with a day exploring Itchan Kala's old town.", tourCard: { slug: "traditional-khiva-cooking-class-with-market-visit", title: "Traditional Khiva Cooking Class with Market Visit & Lunch", description: "A traditional cooking class with a market visit and lunch.", price: "From $195", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fbccd9b29a9707c2ded34f2528249dda3c034ebbee9ae35596a4eee3e6e340a0.jpg" } },
                    { title: "Practical Tips", content: "Khiva's cuisine includes regional specialties distinct from Samarkand or Bukhara's plov-centric dishes — ask what's on the day's menu before booking." }
                ],
                faqs: [
                    { q: "Is a cooking class worth it in Khiva?", a: "Yes, especially with the market visit, which gives useful context on the regional ingredients used." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a cooking class worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially with a market visit for ingredient context." } }
                ] },
            };

        case "best-desert-fortresses-tour-khiva":
            return {
                title: "Which Is the Best Desert Fortresses Tour from Khiva?",
                seoTitle: "Best Khiva Desert Fortresses Tour 2026 | Honest Comparison",
                description: "Compare real day trips to the ancient Khorezm desert fortresses (Ayaz-Kala, Toprak-Kala, Kizil-Kala) from Khiva — from a $85 private transfer to a fuller guided day.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d371ef9283199c847c9f87ff8df3ac6a9598f258a75fc4992aa84a9084dd5820.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Khorezm desert around Khiva holds dozens of ancient fortress ruins, and nearly every real tour covers the same core three — Ayaz-Kala, Toprak-Kala and Kizil-Kala — in the Kyzylkum desert. The differences are whether it's a bare transfer with photo stops or a fuller guided day with context at each site.", tourCard: { slug: "ayazkala-toprakkala-kizilkala-fortress-tour-from", title: "Ayazkala, Toprakkala & Kizilkala Fortress Tour From Khiva", description: "A guided day trip to the three main Khorezm desert fortresses.", price: "From $117", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d371ef9283199c847c9f87ff8df3ac6a9598f258a75fc4992aa84a9084dd5820.jpeg" } },
                    { title: "Cheapest: Private Transfer with Photo Stops", content: "At $85, this is a bare-bones version — transport to the fortresses with photo stops, without a deep guided explanation at each site.", tourCard: { slug: "private-transfer-photostops-ayazkala-toprakkala", title: "Private Transfer & Photo-Stops: Ayaz-Kala & Toprak-Kala", description: "A budget private transfer with photo stops at the fortresses.", price: "From $85", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8973f570c75df913bbb42f28b2d0be1e7b070cf920c332bc0693b018197d067.jpg" } },
                    { title: "Best Guided Option: Full Daytrip to Ancient Fortresses", content: "This covers more ground with proper guiding throughout, a better fit if you want the history explained rather than just transport and a view.", tourCard: { slug: "daytrip-from-khiva-to-ancient-fortresses", title: "Daytrip From Khiva To Ancient Fortresses", description: "A fully guided day trip to the ancient desert fortresses.", price: "From $111", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70b7fd9c42d7dc28da335ab3fa23adbde1faed1f8485607d52f7236d160543ac.jpg" } },
                    { title: "Practical Tips", content: "These fortresses sit in open desert with essentially no shade — bring water, sun protection, and comfortable walking shoes regardless of which version you book." }
                ],
                faqs: [
                    { q: "What is the best desert fortresses tour from Khiva?", a: "A guided day trip covering Ayaz-Kala, Toprak-Kala and Kizil-Kala suits most visitors; the bare transfer version is cheaper but skips the historical context." },
                    { q: "How many desert fortresses can I see from Khiva in one day?", a: "The three main ones — Ayaz-Kala, Toprak-Kala and Kizil-Kala — are the standard core; some longer tours add more for travelers with extra time." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best desert fortresses tour from Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "A guided day trip covering the three main fortresses suits most visitors." } }
                ] },
            };

        case "is-ceramic-tile-workshop-worth-it-khiva":
            return {
                title: "Is the Khiva Hand-Painted Ceramic Tile Workshop Worth It?",
                seoTitle: "Khiva Ceramic Tile Workshop 2026 | Honest Review",
                description: "An honest look at the hand-painted ceramic tile workshop with a local master in Khiva, home to Uzbekistan's distinctive blue-tiled architecture.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18f0febb00b344b5eb57e5f94779cab81d4cad02fdc8075f21851897d84a4fe2.jpg",
                sections: [
                    { title: "The Short Answer", content: "Khiva's old town is covered in distinctive blue-and-white ceramic tilework, and this workshop with a local master lets you paint your own tile rather than just admiring the buildings from outside — a hands-on way to engage with the city's signature craft.", tourCard: { slug: "khiva-hand-painted-ceramic-tile-workshop-with-a", title: "Khiva: Hand-Painted Ceramic Tile Workshop with a Local Master", description: "A hands-on ceramic tile painting workshop with a local master.", price: "From $104", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18f0febb00b344b5eb57e5f94779cab81d4cad02fdc8075f21851897d84a4fe2.jpg" } },
                    { title: "Practical Tips", content: "This pairs well right after walking through Itchan Kala's old town, while the tilework you've just seen is still fresh in mind." }
                ],
                faqs: [
                    { q: "Is the Khiva ceramic tile workshop worth it?", a: "Yes, it's a hands-on way to engage with the city's signature blue-and-white tilework craft, best paired with a walk through Itchan Kala." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Khiva ceramic tile workshop worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a hands-on way to engage with Khiva's signature blue-and-white tilework." } }
                ] },
            };

        case "is-wood-carving-masterclass-worth-it-khiva":
            return {
                title: "Is the Khiva Wood Carving Masterclass Worth It?",
                seoTitle: "Khiva Wood Carving Masterclass 2026 | Honest Review",
                description: "An honest look at the wood carving masterclass with a generational master in Khiva.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/533eb3f08dee026a1e860ef798dda3ea2cdcd2f81bcf05d222cb9470aef12de7.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Khiva's old town is full of intricately carved wooden doors and columns, and this short masterclass with a generational master gives a genuine hands-on sense of the technique behind what you'll have just been looking at around Itchan Kala.", tourCard: { slug: "khiva-wood-carving-masterclass-with-generational", title: "Khiva: Wood Carving Masterclass with Generational Master", description: "A hands-on wood carving masterclass with a generational master craftsman.", price: "From $32", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/533eb3f08dee026a1e860ef798dda3ea2cdcd2f81bcf05d222cb9470aef12de7.jpeg" } },
                    { title: "Practical Tips", content: "At just 1 hour and a low price, this is an easy add-on alongside the Itchan Kala walking tour rather than a separate day's activity." }
                ],
                faqs: [
                    { q: "Is the Khiva wood carving masterclass worth it?", a: "Yes, it's a quick, affordable way to understand the carving technique behind the intricately carved doors and columns around Itchan Kala." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Khiva wood carving masterclass worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a quick, affordable way to understand the carving behind Itchan Kala's doors and columns." } }
                ] },
            };

        case "is-savitsky-museum-tour-worth-it-khiva":
            return {
                title: "Is the Savitsky Museum Day Trip Worth It from Khiva?",
                seoTitle: "Savitsky Museum Nukus Day Trip 2026 | Honest Review",
                description: "An honest look at the Khiva to Nukus day trip covering the Savitsky Museum's renowned Soviet avant-garde art collection.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be3bf4e605e2b8604161891e6e00937223762966d594d05ab73cab6f059059ad.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Savitsky Museum in Nukus holds a genuinely world-class collection of banned Soviet avant-garde art, smuggled and preserved far from Moscow's censors — a completely different kind of day from Khiva's Silk Road architecture, worth it specifically for art-interested travelers.", tourCard: { slug: "khiva-to-nukus-savitsky-museum-soviet-aircraft", title: "Khiva to Nukus: Savitsky Museum & Soviet Aircraft Day Trip", description: "A day trip to Nukus covering the Savitsky Museum and a Soviet aircraft graveyard.", price: "From $190", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be3bf4e605e2b8604161891e6e00937223762966d594d05ab73cab6f059059ad.jpg" } },
                    { title: "Practical Tips", content: "This is a genuine full-day commitment given the drive to Nukus — worth it specifically if Soviet-era art history is a real interest, less so if you're only mildly curious." }
                ],
                faqs: [
                    { q: "Is the Savitsky Museum day trip worth it from Khiva?", a: "Yes for art-interested travelers — it holds a genuinely world-class collection of banned Soviet avant-garde art, a completely different day from Khiva's Silk Road architecture." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Savitsky Museum day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for art-interested travelers, given its world-class Soviet avant-garde art collection." } }
                ] },
            };

        case "is-aral-sea-ship-cemetery-tour-worth-it-khiva":
            return {
                title: "Is the Moynaq Aral Sea Ship Cemetery Tour Worth It from Khiva?",
                seoTitle: "Moynaq Aral Sea Ship Cemetery Tour 2026 | Honest Review",
                description: "An honest look at the Moynaq Aral Sea Ship Cemetery tour, a long day trip to see rusting ships stranded on the former seabed.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f461eb0b229433b4545b4fb48bbd1d653b97aa468634a0a99f00fc09b32e423d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Moynaq's stranded fishing fleet, rusting on what was once the floor of the Aral Sea, is one of the most striking and sobering sights in Central Asia — a genuinely unique environmental-history destination, though the 14-hour round trip is a serious time commitment.", tourCard: { slug: "moynaq-aral-sea-ship-cemetery-tour", title: "Moynaq: Aral Sea Ship Cemetery Tour", description: "A long day trip from Khiva to the Aral Sea ship cemetery at Moynaq.", price: "From $249", duration: "14 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f461eb0b229433b4545b4fb48bbd1d653b97aa468634a0a99f00fc09b32e423d.jpg" } },
                    { title: "Practical Tips", content: "This is a genuine full-day commitment at 14 hours round trip — only worth it if you specifically want to see the ship cemetery, not as a casual add-on." }
                ],
                faqs: [
                    { q: "Is the Moynaq Aral Sea ship cemetery tour worth it from Khiva?", a: "Yes, for a genuinely unique and sobering environmental-history sight, but only if you're prepared for the full 14-hour round trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Aral Sea ship cemetery tour worth it from Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a unique environmental-history sight, given the full-day time commitment." } }
                ] },
            };

        case "is-miniature-painting-workshop-worth-it-khiva":
            return {
                title: "Is the Traditional Miniature Painting Workshop Worth It in Khiva?",
                seoTitle: "Khiva Miniature Painting Workshop 2026 | Honest Review",
                description: "An honest look at Khiva's traditional miniature painting workshop experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ba8c0f4326c77ba77a74746b205fdae8d759d528ff7d33161e7171c72c78abe1.jpg",
                sections: [
                    { title: "The Short Answer", content: "Miniature painting is a genuine Central Asian art tradition using fine detail and natural pigments, and learning it hands-on in Khiva gives a slower, craft-focused counterpoint to a day of Itchan Kala sightseeing.", tourCard: { slug: "khiva-traditional-miniature-painting-workshop", title: "Khiva: Traditional Miniature Painting Workshop Experience", description: "A hands-on traditional miniature painting workshop in Khiva.", price: "From $117", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ba8c0f4326c77ba77a74746b205fdae8d759d528ff7d33161e7171c72c78abe1.jpg" } },
                    { title: "Practical Tips", content: "Expect a slow, detail-focused pace — this rewards patience over speed, so don't rush straight from a packed morning of sightseeing." }
                ],
                faqs: [
                    { q: "Is the miniature painting workshop worth it in Khiva?", a: "Yes, for a genuine, slower-paced craft tradition distinct from the city's architecture-focused sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the miniature painting workshop worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine, slower-paced craft tradition distinct from sightseeing." } }
                ] },
            };

        case "is-shivit-oshi-cooking-class-worth-it-khiva":
            return {
                title: "Is the Shivit Oshi Cooking Class Worth It in Khiva?",
                seoTitle: "Khiva Shivit Oshi Cooking Class 2026 | Honest Review",
                description: "An honest look at the Shivit Oshi cooking class with a local chef in Khiva, a Khorezm regional noodle dish colored with dill.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c33ced73da044aadccb5e582955bb4f22e8d123534a34f4f59c79a66b193bc73.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shivit oshi is a genuinely regional Khorezm specialty, green-colored noodles flavored with dill, that you won't find as a dedicated class anywhere else in Uzbekistan — a more specific, dish-focused booking than the city's general cooking class with market visit.", tourCard: { slug: "khiva-shivit-oshi-cooking-class-with-local-chef", title: "Khiva: Shivit Oshi Cooking Class with Local Chef", description: "A hands-on Shivit Oshi cooking class with a local chef in Khiva.", price: "From $46", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c33ced73da044aadccb5e582955bb4f22e8d123534a34f4f59c79a66b193bc73.jpg" } },
                    { title: "Practical Tips", content: "Book this specifically if you want to learn the regional dish itself — the city's other cooking class covers a broader menu plus a market visit." }
                ],
                faqs: [
                    { q: "Is the Shivit Oshi cooking class worth it in Khiva?", a: "Yes, for a genuinely regional Khorezm dish you won't find taught as a dedicated class elsewhere in Uzbekistan." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Shivit Oshi cooking class worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a regional dish unique to Khorezm, not taught elsewhere in Uzbekistan." } }
                ] },
            };

        case "is-japanese-language-walking-tour-worth-it-khiva":
            return {
                title: "Is the Japanese-Language Walking Tour Worth It in Khiva?",
                seoTitle: "Khiva Japanese Language Walking Tour 2026 | Honest Review",
                description: "An honest look at Khiva's Japanese-language guided walking tour with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09bf49b9d137d77237a82c81022b4ee275365225341096c52fc9d3bc41dfedf2.jpeg",
                sections: [
                    { title: "The Short Answer", content: "For Japanese-speaking travelers, a guide fluent in the language removes the real friction of following an English-only tour, making this genuinely worth seeking out specifically if English isn't your strongest second language.", tourCard: { slug: "khiva-japanese-language-walking-tour-with-local", title: "Khiva: Japanese-Language Walking Tour with Local Guide", description: "A guided walking tour of Khiva delivered in Japanese.", price: "From $65", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/09bf49b9d137d77237a82c81022b4ee275365225341096c52fc9d3bc41dfedf2.jpeg" } },
                    { title: "Practical Tips", content: "Book ahead, since Japanese-speaking guides are a limited niche compared to the city's many English-language tour options." }
                ],
                faqs: [
                    { q: "Is the Japanese-language walking tour worth it in Khiva?", a: "Yes, specifically for Japanese-speaking travelers who want to avoid the friction of an English-only tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Japanese-language walking tour worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, specifically for Japanese-speaking travelers wanting a tour in their own language." } }
                ] },
            };

        case "is-bread-baking-worth-it-samarkand":
            return {
                title: "Is the Samarkand Bread Baking Experience Worth It?",
                seoTitle: "Samarkand Bread Baking 2026 | Honest Review",
                description: "An honest look at Samarkand's legendary bread baking experience in a local bakery, a hands-on food tradition distinct from the city's Registan and mausoleum sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a2bab57beca9b890bad9f7471c0b89cc730642bfa1c3c864e60fbccd4c621d28.png",
                sections: [
                    { title: "The Short Answer", content: "Samarkand's distinctive round bread, baked in traditional tandoor ovens, is famous across Central Asia, and this hands-on class in a local bakery gives genuine insight into the craft — a different kind of cultural activity from touring mausoleums and the Registan.", tourCard: { slug: "bake-legendary-samarkand-bread-in-a-local-bakery", title: "Bake Legendary Samarkand Bread in a Local Bakery", description: "A hands-on bread baking class in a traditional Samarkand bakery.", price: "From $36", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a2bab57beca9b890bad9f7471c0b89cc730642bfa1c3c864e60fbccd4c621d28.png" } },
                    { title: "Practical Tips", content: "You take your freshly baked bread with you, so it's a nice activity to do before a picnic or a long travel day." },
                ],
                faqs: [
                    { q: "Is the Samarkand bread baking experience worth it?", a: "Yes, for genuine hands-on insight into a Central Asian food tradition, a nice change of pace from monument sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Samarkand bread baking experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine hands-on insight into a Central Asian food tradition." } },
                ] },
            };

        case "is-puppet-making-workshop-worth-it-bukhara":
            return {
                title: "Is the Puppet Magic Workshop Worth It in Bukhara?",
                seoTitle: "Bukhara Puppet Workshop 2026 | Honest Review",
                description: "An honest look at Bukhara's puppet magic and puppet-making workshop, a hands-on traditional craft activity distinct from the city's madrasa and mosque sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/94900079fb19fb2110cbf7eafdf5157c57fdd7c9e829978ef0431de43ee3aa71.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bukhara has a traditional puppet-making craft, and this workshop lets you watch a performance before making your own, a genuinely hands-on cultural activity that's a nice complement to the city's heavy architecture-and-monument sightseeing.", tourCard: { slug: "bukhara-dicover-puppet-magic-and-make-your-own", title: "Bukhara: Discover Puppet Magic and Make Your Own", description: "A workshop combining a puppet show with hands-on puppet making in Bukhara.", price: "From $104", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/94900079fb19fb2110cbf7eafdf5157c57fdd7c9e829978ef0431de43ee3aa71.jpg" } },
                    { title: "Practical Tips", content: "You take your finished puppet home as a souvenir, a nice alternative to the usual ceramics or textiles most visitors buy." },
                ],
                faqs: [
                    { q: "Is the puppet workshop worth it in Bukhara?", a: "Yes, for a genuinely hands-on craft activity that's a nice complement to the city's monument-heavy sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the puppet workshop worth it in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely hands-on traditional craft activity." } },
                ] },
            };

        case "is-gold-embroidery-workshop-worth-it-bukhara":
            return {
                title: "Is the Gold Embroidery (Zardozlik) Workshop Worth It in Bukhara?",
                seoTitle: "Bukhara Gold Embroidery Workshop 2026 | Honest Review",
                description: "An honest look at Bukhara's gold zardozlik embroidery workshop, a traditional craft technique unique to the city, distinct from its usual sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/22370d94e0a3e913e1d4d99e1f866fa1ca418ec142f1c2c2be23bde3d92d8203.jpg",
                sections: [
                    { title: "The Short Answer", content: "Zardozlik, gold-thread embroidery historically used on royal and ceremonial garments, is a craft specifically associated with Bukhara — this hands-on workshop gives genuine insight into a technique most visitors would otherwise just see displayed in a shop window.", tourCard: { slug: "bukhara-gold-zardozlik-embroidery-workshop-and", title: "Bukhara: Gold Zardozlik Embroidery Workshop", description: "A hands-on gold zardozlik embroidery workshop in Bukhara.", price: "From $169", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/22370d94e0a3e913e1d4d99e1f866fa1ca418ec142f1c2c2be23bde3d92d8203.jpg" } },
                    { title: "Practical Tips", content: "No prior embroidery experience is needed — this is a hands-on introduction rather than a technical masterclass." },
                ],
                faqs: [
                    { q: "Is the gold embroidery workshop worth it in Bukhara?", a: "Yes, for genuine hands-on insight into a craft technique uniquely associated with Bukhara." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the gold embroidery workshop worth it in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine insight into a craft technique unique to Bukhara." } },
                ] },
            };

        case "is-chor-bakr-countryside-tour-worth-it-bukhara":
            return {
                title: "Is the Private Countryside Tour to Chor Bakr Worth It from Bukhara?",
                seoTitle: "Chor Bakr Necropolis Bukhara 2026 | Honest Review",
                description: "An honest look at the private countryside tour to Chor Bakr necropolis and nearby palaces from Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/71a5e9cd6c0cfae3acbc831cb7d639c7942088f522ab266a39b094ef340f3f22.jpg",
                sections: [
                    { title: "The Short Answer", content: "Chor Bakr is a vast necropolis complex outside the city, a quieter, more spread-out historical site than the dense monument cluster of Bukhara's old town — worth it for travelers who want a change of pace and scale from the walking tours.", tourCard: { slug: "bukhara-private-countryside-tour-to-chor-bakr", title: "Bukhara: Private Countryside Tour to Chor Bakr & Palaces", description: "A private countryside tour to Chor Bakr necropolis and nearby palaces.", price: "From $111", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/71a5e9cd6c0cfae3acbc831cb7d639c7942088f522ab266a39b094ef340f3f22.jpg" } },
                    { title: "Practical Tips", content: "This is a genuinely different pace from the old town's dense walking tours — a good choice specifically if you want open space and fewer crowds rather than more monuments packed close together." }
                ],
                faqs: [
                    { q: "Is the Chor Bakr countryside tour worth it from Bukhara?", a: "Yes for a quieter, more spread-out historical experience, a change of pace from the dense old-town walking tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Chor Bakr countryside tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quieter, more spread-out change of pace from Bukhara's old town." } }
                ] },
            };

        case "is-hammam-bath-worth-it-bukhara":
            return {
                title: "Is the Bukharian Hammam Bath with Massage Worth It?",
                seoTitle: "Bukhara Hammam Bath 2026 | Honest Review",
                description: "An honest look at the Bukharian bath in an ancient hammam with massage.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f19d297b8dd8feffb165c5fa7cef4c0457b52f9f4b0eb4d3a11b40175962c4b8.png",
                sections: [
                    { title: "The Short Answer", content: "Bathing in a genuinely centuries-old hammam building, rather than a modern spa, gives this a real sense of history alongside the relaxation — a good way to unwind after a day of walking tours through the old town.", tourCard: { slug: "bukharian-bath-in-ancient-hammam-with-massage", title: "Bukharian Bath in Ancient Hammam with Massage", description: "A traditional bath and massage in an ancient Bukhara hammam.", price: "From $116", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f19d297b8dd8feffb165c5fa7cef4c0457b52f9f4b0eb4d3a11b40175962c4b8.png" } },
                    { title: "Practical Tips", content: "Book this for the end of a walking-heavy day — it works well as a recovery activity rather than something to rush before more sightseeing." }
                ],
                faqs: [
                    { q: "Is the Bukhara hammam bath worth it?", a: "Yes, bathing in a genuinely centuries-old building adds real historical character to the relaxation, a good way to recover after a day of walking tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Bukhara hammam bath worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a genuinely centuries-old building, adding history to the relaxation." } }
                ] },
            };

        case "is-wood-carving-masterclass-worth-it-bukhara":
            return {
                title: "Is the Bukhara Wood Carving Masterclass Worth It?",
                seoTitle: "Bukhara Wood Carving Masterclass 2026 | Honest Review",
                description: "An honest look at the wood carving masterclass with a generational master craftsman in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/44609d4127e17ee2b5c3044e15f9bfca66c78b93e9048fc1f85181c21751515a.jpg",
                sections: [
                    { title: "The Short Answer", content: "Learning directly from a generational master craftsman gives genuine insight into a traditional Uzbek craft passed down through family lines, distinct from the gold embroidery and other textile-focused workshops the city also offers.", tourCard: { slug: "bukhara-wood-carving-masterclass-with", title: "Bukhara: Wood Carving Masterclass with Generational Master", description: "A hands-on wood carving masterclass with a generational master craftsman.", price: "From $117", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/44609d4127e17ee2b5c3044e15f9bfca66c78b93e9048fc1f85181c21751515a.jpg" } },
                    { title: "Practical Tips", content: "This is a genuine craft lesson from a family-trained master, not a quick souvenir-making stop — expect real instruction and technique." }
                ],
                faqs: [
                    { q: "Is the Bukhara wood carving masterclass worth it?", a: "Yes, for genuine insight into a traditional craft taught directly by a generational master, distinct from the city's textile-focused workshops." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Bukhara wood carving masterclass worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's taught directly by a generational master craftsman." } }
                ] },
            };

        case "is-gijduvan-pottery-workshop-worth-it-bukhara":
            return {
                title: "Is the Gijduvan Pottery Workshop Worth It from Bukhara?",
                seoTitle: "Gijduvan Pottery Workshop 2026 | Honest Review",
                description: "An honest look at the transfer and workshop visit to Gijduvan, a village famous for its distinctive pottery tradition near Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9cc3ffecf6a563084c04569b4f505668a515e0f2beb229f68eaab07c37594eda.jpg",
                sections: [
                    { title: "The Short Answer", content: "Gijduvan is specifically known for its distinctive green-and-brown glazed pottery tradition, passed down through generations of a single family workshop — a genuine craft destination rather than a generic souvenir stop, worth the short trip out of Bukhara.", tourCard: { slug: "bukhara-transfer-to-gijduvan-pottery-workshop", title: "Bukhara: Transfer to Gijduvan Pottery Workshop", description: "A transfer to the Gijduvan pottery workshop near Bukhara.", price: "From $111", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9cc3ffecf6a563084c04569b4f505668a515e0f2beb229f68eaab07c37594eda.jpg" } },
                    { title: "Practical Tips", content: "Gijduvan pottery is distinctive enough to be a genuine souvenir worth the trip — look for the characteristic green-and-brown glaze when choosing a piece." }
                ],
                faqs: [
                    { q: "Is the Gijduvan pottery workshop worth it from Bukhara?", a: "Yes, Gijduvan has a genuinely distinctive, generations-old pottery tradition, worth the short trip for a real craft destination rather than a generic souvenir stop." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Gijduvan pottery workshop worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a genuinely distinctive, generations-old pottery tradition." } }
                ] },
            };

        case "is-miniature-painting-workshop-worth-it-bukhara":
            return {
                title: "Is the Miniature Painting Workshop Worth It in Bukhara?",
                seoTitle: "Bukhara Miniature Painting Workshop 2026 | Honest Review",
                description: "An honest look at Bukhara's miniature painting workshop and cultural immersion.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f87d4636d7d60f93443b949f99d972ee9cee1c180dd40f7c3f8528cb6707362.jpg",
                sections: [
                    { title: "The Short Answer", content: "Miniature painting is a genuine Central Asian art tradition using fine detail and natural pigments, and this workshop teaches it hands-on, a distinctly different craft from Bukhara's suzani embroidery and wood-carving workshops.", tourCard: { slug: "bukhara-miniature-painting-workshop-and-cultural", title: "Bukhara: Miniature Painting Workshop and Cultural Immersion", description: "A hands-on miniature painting workshop and cultural immersion in Bukhara.", price: "From $117", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f87d4636d7d60f93443b949f99d972ee9cee1c180dd40f7c3f8528cb6707362.jpg" } },
                    { title: "Practical Tips", content: "Expect a slow, detail-focused pace — miniature painting rewards patience over speed." }
                ],
                faqs: [
                    { q: "Is the miniature painting workshop worth it in Bukhara?", a: "Yes, for a genuine, distinctly different craft tradition from the city's embroidery and wood-carving workshops." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the miniature painting workshop worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine, detail-focused craft tradition distinct from the city's other workshops." } }
                ] },
            };

        case "is-carpet-making-workshop-worth-it-bukhara":
            return {
                title: "Is the Immersive Old City Walk and Carpet Making Workshop Worth It in Bukhara?",
                seoTitle: "Bukhara Carpet Making Workshop 2026 | Honest Review",
                description: "An honest look at the immersive old city walk and carpet making workshop in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a82b581405875d4f7255e8e15734a3704e5c5eb6f6c4b5881eccdd4634dc2e1.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bukhara has a genuine carpet-weaving heritage, and pairing a hands-on weaving workshop with an old city walk gives practical craft context alongside the sightseeing, rather than just browsing finished carpets in a shop.", tourCard: { slug: "bukhara-immersive-old-city-walk-carpet-making", title: "Bukhara: Immersive Old City Walk & Carpet Making Workshop", description: "An old city walking tour paired with a hands-on carpet making workshop.", price: "From $104", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a82b581405875d4f7255e8e15734a3704e5c5eb6f6c4b5881eccdd4634dc2e1.jpg" } },
                    { title: "Practical Tips", content: "Ask about the loom technique used — Bukhara's carpet tradition has distinctive regional patterns worth understanding before you shop for one." }
                ],
                faqs: [
                    { q: "Is the carpet making workshop worth it in Bukhara?", a: "Yes, it gives genuine hands-on context for the city's carpet-weaving heritage alongside the old city walk." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the carpet making workshop worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it gives genuine hands-on context for Bukhara's carpet-weaving heritage." } }
                ] },
            };

        case "is-desert-safari-emirs-palace-worth-it-bukhara":
            return {
                title: "Is the Desert Safari, Camel Ride and Emir's Summer Palace Tour Worth It from Bukhara?",
                seoTitle: "Bukhara Desert Safari Camel Ride 2026 | Honest Review",
                description: "An honest look at the desert safari, camel ride, and Emir's Summer Palace tour from Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b211584c54b8771c1db80a5145cae2f5116c97aa606fbf9f3f3751d620250180.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Combining a desert camel ride with a visit to the Emir's ornate summer palace gives a genuinely varied day — nature and adventure paired with a specific piece of royal history — distinct from Bukhara's old-town-focused walking tours.", tourCard: { slug: "bukhara-desert-safari-camel-ride-and-emirs-summer", title: "Bukhara: Desert Safari, Camel Ride And Emir's Summer Palace", description: "A desert safari and camel ride combined with a visit to the Emir's Summer Palace.", price: "From $182", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b211584c54b8771c1db80a5145cae2f5116c97aa606fbf9f3f3751d620250180.jpeg" } },
                    { title: "Practical Tips", content: "Dress for sun and dust on the desert portion — bring sunglasses and a hat for the camel ride." }
                ],
                faqs: [
                    { q: "Is the desert safari and Emir's palace tour worth it from Bukhara?", a: "Yes, for a genuinely varied day combining desert adventure with royal history, distinct from the city's old-town walking tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the desert safari and Emir's palace tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a varied day combining desert adventure with royal history." } }
                ] },
            };

        case "is-bread-making-class-worth-it-bukhara":
            return {
                title: "Is the Traditional Uzbek Bread-Making Class Worth It in Bukhara?",
                seoTitle: "Bukhara Bread-Making Class 2026 | Honest Review",
                description: "An honest look at the traditional Uzbek bread-making class with tea in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a69bd91842b4271dac74bbcdd5e9c31e360e92754fe4c9f322f888da39580d32.jpg",
                sections: [
                    { title: "The Short Answer", content: "Uzbek non (flatbread) baked in a tandir oven is a genuinely distinct culinary skill from the city's plov cooking workshop, and this short, affordable class with tea is an easy, low-commitment way to pick it up.", tourCard: { slug: "bukhara-traditional-uzbek-bread-making-class-with", title: "Bukhara: Traditional Uzbek Bread-Making Class with Tea", description: "A hands-on traditional Uzbek bread-making class with tea.", price: "From $39", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a69bd91842b4271dac74bbcdd5e9c31e360e92754fe4c9f322f888da39580d32.jpg" } },
                    { title: "Practical Tips", content: "A good short, low-commitment activity to slot between old-town sightseeing stops." }
                ],
                faqs: [
                    { q: "Is the bread-making class worth it in Bukhara?", a: "Yes, it's a distinct culinary skill from the city's plov workshop and an easy, affordable add-on between sightseeing stops." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the bread-making class worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a distinct, affordable culinary skill easy to slot between sightseeing stops." } }
                ] },
            };

        case "is-solar-furnace-tour-worth-it-tashkent":
            return {
                title: "Is the 1 MW Solar Furnace Tour Worth It from Tashkent?",
                seoTitle: "Tashkent Solar Furnace Tour 2026 | Honest Review",
                description: "An honest look at the 1 MW Solar Furnace tour near Tashkent, a unique Soviet-era scientific facility distinct from the city's mosque and bazaar sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4bbba9c2f5b00f08e0509a8303541b55e564cdd66e155efca288ba6372b97e4a.png",
                sections: [
                    { title: "The Short Answer", content: "This Soviet-era solar furnace, one of the largest of its kind in the world, is a genuinely unusual scientific and industrial site that most visitors have never heard of — a sharp contrast to Tashkent's usual mosque, bazaar, and metro sightseeing.", tourCard: { slug: "from-tashkent-1-mw-solar-furnace-tour-new", title: "From Tashkent: 1 MW Solar Furnace Tour", description: "A tour of the massive 1 MW Soviet-era solar furnace near Tashkent.", price: "From $103", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4bbba9c2f5b00f08e0509a8303541b55e564cdd66e155efca288ba6372b97e4a.png" } },
                    { title: "Practical Tips", content: "This appeals specifically to travelers with an interest in Soviet-era engineering and science — set expectations as an industrial curiosity rather than scenic sightseeing." },
                ],
                faqs: [
                    { q: "Is the Solar Furnace tour worth it from Tashkent?", a: "Yes, for travelers interested in unusual Soviet-era science and engineering, a sharp contrast to the city's usual sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Solar Furnace tour worth it from Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely unusual Soviet-era scientific site." } },
                ] },
            };

        case "is-fergana-valley-tour-worth-it-tashkent":
            return {
                title: "Is the Fergana Valley Tour Worth It from Tashkent?",
                seoTitle: "Fergana Valley Tour from Tashkent 2026 | Honest Review",
                description: "An honest look at the 2-day Fergana Valley tour from Tashkent, a region known for craft traditions and distinct from Uzbekistan's standard Silk Road city circuit.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b24c7baddeea24a6f1f0e43edfaf98e337c6831e14ce94a4e8d3750ebca636f5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Fergana Valley, known for ceramics, silk weaving, and knife-making traditions, sits outside the standard Samarkand-Bukhara-Khiva Silk Road circuit — a genuinely different regional focus for travelers wanting craft culture over monumental architecture.", tourCard: { slug: "from-tashkent-2-day-1-night-fergana-valley", title: "From Tashkent: 2-Day 1-Night Fergana Valley Tour", description: "A 2-day tour of the Fergana Valley's craft traditions from Tashkent.", price: "From $757", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b24c7baddeea24a6f1f0e43edfaf98e337c6831e14ce94a4e8d3750ebca636f5.jpeg" } },
                    { title: "Practical Tips", content: "This requires crossing a mountain pass to reach the valley, so check seasonal road conditions before booking in winter." },
                ],
                faqs: [
                    { q: "Is the Fergana Valley tour worth it from Tashkent?", a: "Yes, for travelers wanting genuine craft culture and a region outside the standard Silk Road city circuit." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Fergana Valley tour worth it from Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine craft culture outside the standard Silk Road circuit." } },
                ] },
            };

        case "is-seven-lakes-tour-worth-it-samarkand":
            return {
                title: "Is the Seven Lakes (Fann Mountains) Tour Worth It from Samarkand?",
                seoTitle: "Samarkand Seven Lakes Tour 2026 | Honest Review",
                description: "An honest look at the Seven Lakes day trip to the Fann Mountains from Samarkand, a dramatic natural landscape distinct from the city's Registan and madrasa sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0b69a1468598c678dafa61ae53331be1e695257136ae80f716ac2c595d40127c.png",
                sections: [
                    { title: "The Short Answer", content: "The Seven Lakes, a chain of turquoise mountain lakes in the Fann Mountains, is a completely different landscape from Samarkand's desert-city architecture — worth the full-day trip specifically for travelers wanting genuine mountain scenery alongside the city's monuments.", tourCard: { slug: "explore-seven-lakes-in-the-fann-mountains", title: "Explore Seven Lakes in the Fann Mountains", description: "A day trip to the turquoise Seven Lakes in the Fann Mountains from Samarkand.", price: "From $182", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0b69a1468598c678dafa61ae53331be1e695257136ae80f716ac2c595d40127c.png" } },
                    { title: "Practical Tips", content: "This is a long day given the drive into the mountains, so budget the full day rather than combining it with city sightseeing." },
                ],
                faqs: [
                    { q: "Is the Seven Lakes tour worth it from Samarkand?", a: "Yes, for travelers wanting genuine mountain scenery, a completely different landscape from the city's desert architecture." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Seven Lakes tour worth it from Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuinely different mountain scenery from the city's architecture." } },
                ] },
            };

        case "is-winemaking-tour-worth-it-samarkand":
            return {
                title: "Is the Samarkand Winemaking History and Tasting Tour Worth It?",
                seoTitle: "Samarkand Winemaking Tour 2026 | Honest Review",
                description: "An honest look at Samarkand's winemaking history tour with local wine tasting, a genuinely surprising activity given Uzbekistan's Muslim-majority culture, distinct from the city's usual sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1a628a9a51812d1e179af4e348639dafec1f426250ec3857f2958efded054a8.jpg",
                sections: [
                    { title: "The Short Answer", content: "Samarkand has a surprisingly long winemaking history dating back to Russian imperial influence, and this tour pairs that history with a tasting of local wines — a genuinely unexpected angle on the city for travelers who assume Central Asia has no wine culture.", tourCard: { slug: "discover-samarkand-winemaking-history-taste-local", title: "Discover Samarkand Winemaking History & Taste Local Wine", description: "A tour covering Samarkand's winemaking history with a local wine tasting.", price: "From $91", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d1a628a9a51812d1e179af4e348639dafec1f426250ec3857f2958efded054a8.jpg" } },
                    { title: "Practical Tips", content: "This is a short, inexpensive add-on, good paired with an afternoon of sightseeing rather than a standalone outing." },
                ],
                faqs: [
                    { q: "Is the Samarkand winemaking tour worth it?", a: "Yes, for a genuinely unexpected angle on the city's history, especially surprising given assumptions about Central Asian wine culture." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Samarkand winemaking tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely unexpected angle on the city's history." } },
                ] },
            };

        case "is-jewish-legacy-tour-worth-it-samarkand":
            return {
                title: "Is the Jewish Legacy Tour Worth It in Samarkand?",
                seoTitle: "Samarkand Jewish Legacy Tour 2026 | Honest Review",
                description: "An honest look at Samarkand's Jewish legacy guided tour, exploring the city's Bukharan Jewish history and quarter, distinct from the standard Registan and Silk Road sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ebf36bb8c338e05565ed7ff1134ea40d2880004c0809164fbbff30c3616412df.jpg",
                sections: [
                    { title: "The Short Answer", content: "Samarkand has a centuries-old Bukharan Jewish community and quarter, a genuinely distinct historical thread that most standard Registan and Silk Road itineraries skip entirely — worth it for travelers interested in the city's religious and cultural diversity beyond the main monuments.", tourCard: { slug: "discover-jewish-legacy-in-samarkand-guided", title: "Discover Jewish Legacy in Samarkand: Guided Tour", description: "A guided tour exploring Samarkand's Bukharan Jewish history and quarter.", price: "From $104", duration: "6.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ebf36bb8c338e05565ed7ff1134ea40d2880004c0809164fbbff30c3616412df.jpg" } },
                    { title: "Practical Tips", content: "A knowledgeable local guide makes a real difference here, since the sites themselves often lack obvious signage explaining their significance." },
                ],
                faqs: [
                    { q: "Is the Jewish legacy tour worth it in Samarkand?", a: "Yes, for genuine insight into a distinct historical thread most standard itineraries skip entirely." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Jewish legacy tour worth it in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine insight into Samarkand's Bukharan Jewish history." } },
                ] },
            };

        case "is-old-city-walking-tour-worth-it-tashkent":
            return {
                title: "Is the Tashkent Old City Walking Tour with Local Artisans Worth It?",
                seoTitle: "Tashkent Old City Walking Tour 2026 | Honest Review",
                description: "An honest look at the Old City walking tour with local artisans in Tashkent, broader than the metro-focused tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95a9cf8c1d08048dde80d16ba8aff25c4dab7541d242dd6f027dfa34c59749c5.jpg",
                sections: [
                    { title: "The Short Answer", content: "Where the metro tour focuses on the ornate Soviet-era stations, this one covers Tashkent's older, pre-Soviet urban fabric and working artisans — a genuinely different side of the city, better for travelers wanting craft and street-level local life rather than architecture alone.", tourCard: { slug: "tashkent-old-city-walking-tour-with-local-artisans", title: "Tashkent: Old City Walking Tour with Local Artisans", description: "A walking tour of Tashkent's Old City with visits to local artisans.", price: "From $44", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95a9cf8c1d08048dde80d16ba8aff25c4dab7541d242dd6f027dfa34c59749c5.jpg" } },
                    { title: "Practical Tips", content: "Pair this with the metro tour rather than choosing one or the other — they cover genuinely different sides of Tashkent (Soviet architecture vs. older urban life and craft)." },
                ],
                faqs: [
                    { q: "Is the Tashkent Old City walking tour worth it?", a: "Yes, it covers the city's older urban fabric and working artisans, a genuinely different focus from the Soviet-era metro tour." },
                ],
            };

        case "is-tv-tower-worth-it-tashkent":
            return {
                title: "Is the Tashkent TV Tower Worth It?",
                seoTitle: "Tashkent TV Tower 2026 | Honest Review",
                description: "An honest look at the Tashkent TV Tower tour, the tallest structure in Central Asia.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dd52e2fc20ec3277e32211fd382ef13e54082cdf63b4b88f4435cdc3d41b32fd.jpg",
                sections: [
                    { title: "The Short Answer", content: "At over 375 meters, the Tashkent TV Tower is the tallest structure in Central Asia, and the observation deck gives a genuine panoramic view of the city that street-level walking tours can't match — a good short stop to orient yourself early in a Tashkent visit.", tourCard: { slug: "tashkenttv-tower-tourthe-tallest-structure-in", title: "Tashkent: TV Tower Tour, the Tallest Structure in Central Asia", description: "A visit to the Tashkent TV Tower's observation deck.", price: "From $39", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dd52e2fc20ec3277e32211fd382ef13e54082cdf63b4b88f4435cdc3d41b32fd.jpg" } },
                    { title: "Practical Tips", content: "At just 1.5 hours, this is an easy early addition to a Tashkent itinerary — good for orienting yourself before exploring the city at street level." },
                ],
                faqs: [
                    { q: "Is the Tashkent TV Tower worth visiting?", a: "Yes, it's the tallest structure in Central Asia and gives a genuine panoramic view to help orient yourself in the city." },
                ],
            };

        case "is-culinary-tour-worth-it-tashkent":
            return {
                title: "Is the Tashkent Culinary Tour with Food Tastings Worth It?",
                seoTitle: "Tashkent Culinary Tour 2026 | Honest Review",
                description: "An honest look at the Tashkent culinary tour with food tastings and a souvenir, distinct from the standard plov/samsa cooking class.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff947145983cb6c5aec7b528873017c67eb4a76e603ed8a31b1040e4df254e2c.jpg",
                sections: [
                    { title: "The Short Answer", content: "Where the cooking class has you making a dish yourself, this is a tasting-led tour across multiple spots — better if you want to sample a wider range of Uzbek food in one outing rather than focus on preparing one dish.", tourCard: { slug: "tashkent-culinary-tour-with-food-tastings-and", title: "Tashkent: Culinary Tour with Food Tastings and Souvenir", description: "A guided food-tasting tour across Tashkent with a souvenir included.", price: "From $64", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ff947145983cb6c5aec7b528873017c67eb4a76e603ed8a31b1040e4df254e2c.jpg" } },
                    { title: "Practical Tips", content: "Come hungry and pace yourself — the format is multiple tastings across stops rather than one large sit-down meal." },
                ],
                faqs: [
                    { q: "Is the Tashkent culinary tour worth it?", a: "Yes, especially if you want to sample a wider range of Uzbek dishes in one outing rather than focus on cooking just one, as the plov/samsa class does." },
                ],
            };

        case "is-registan-night-tour-worth-it-samarkand":
            return {
                title: "Is the Registan Square Night Tour with Ice Cream Worth It in Samarkand?",
                seoTitle: "Samarkand Registan Night Tour 2026 | Honest Review",
                description: "An honest look at the Registan Square night tour with ice cream, a short evening experience distinct from the standard daytime walking tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/613ec6f1b03a2c339d0613d5f7a526ebc99881e43676296907a88a6ad4918e50.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Registan's three madrasas lit up after dark give a genuinely different atmosphere from the daytime crowds covered by the standard walking tours, and pairing it with ice cream keeps this specifically a short, relaxed evening add-on rather than a full history lesson.", tourCard: { slug: "samarkand-registan-square-night-tour-with-ice", title: "Samarkand: Registan Square Night Tour with Ice Cream", description: "A short evening visit to the lit-up Registan with ice cream.", price: "From $20", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/613ec6f1b03a2c339d0613d5f7a526ebc99881e43676296907a88a6ad4918e50.jpg" } },
                    { title: "Practical Tips", content: "Pair this with a daytime walking tour rather than treating it as a replacement — the night lighting is a nice add-on to seeing the Registan properly during the day, not a substitute for it." }
                ],
                faqs: [
                    { q: "Is the Registan night tour worth it in Samarkand?", a: "Yes as a relaxed evening add-on with a genuinely different atmosphere than the daytime crowds, but pair it with a full daytime walking tour rather than relying on it alone." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Registan night tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes as a short evening add-on, best paired with a full daytime walking tour." } }
                ] },
            };

        case "is-shakhrisabz-day-trip-worth-it-samarkand":
            return {
                title: "Is the Shakhrisabz Day Trip Worth It from Samarkand?",
                seoTitle: "Shakhrisabz Day Trip from Samarkand 2026 | Honest Review",
                description: "An honest look at the Shakhrisabz day trip from Samarkand, the UNESCO-listed birthplace of Timur (Tamerlane).",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9c3c488fdcb0cd41c3cc74b001d01887bb59f3bea3dbce35065b4db00204fba0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shakhrisabz was Timur's birthplace and once held his planned mausoleum, giving it a genuine historical significance that complements Samarkand's monuments rather than duplicating them — a worthwhile day trip for travelers who want the fuller Timurid-era story.", tourCard: { slug: "from-samarkand-shakhrisabz-day-trip-with-a-guide", title: "From Samarkand: Shakhrisabz Day Trip with a Guide", description: "A guided day trip to Shakhrisabz, Timur's birthplace.", price: "From $52", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9c3c488fdcb0cd41c3cc74b001d01887bb59f3bea3dbce35065b4db00204fba0.jpg" } },
                    { title: "Practical Tips", content: "This is a genuine full-day trip given the drive each way — plan it as a dedicated day rather than squeezing it in alongside Samarkand's own sightseeing." }
                ],
                faqs: [
                    { q: "Is the Shakhrisabz day trip worth it from Samarkand?", a: "Yes for travelers wanting the fuller Timurid-era story — it was Timur's birthplace, complementing rather than duplicating Samarkand's own monuments." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Shakhrisabz day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it was Timur's birthplace and complements Samarkand's own Timurid monuments." } }
                ] },
            };

        case "is-imam-al-bukhari-complex-worth-it-samarkand":
            return {
                title: "Is the Imam Al-Bukhari Complex Worth It from Samarkand?",
                seoTitle: "Imam Al-Bukhari Complex Samarkand 2026 | Honest Review",
                description: "An honest look at the Imam Al-Bukhari Complex tour from Samarkand, a significant Islamic pilgrimage site distinct from the city's Timurid-era monuments.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b6c231f773fcd04e03c7e34730718ce2cec8293f6e3660172bd0c777c4cd8e37.jpg",
                sections: [
                    { title: "The Short Answer", content: "Imam al-Bukhari was a major Islamic scholar whose hadith collection is still widely studied today, and this complex near Samarkand is a genuine pilgrimage site for many visitors — a different kind of significance from the Registan's architectural grandeur.", tourCard: { slug: "from-samarkand-imam-al-bukhari-complex-with-guide", title: "From Samarkand: Imam Al-Bukhari Complex with Guide", description: "A guided visit to the Imam Al-Bukhari Complex near Samarkand.", price: "From $40", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b6c231f773fcd04e03c7e34730718ce2cec8293f6e3660172bd0c777c4cd8e37.jpg" } },
                    { title: "Practical Tips", content: "A knowledgeable guide adds real value here, since the complex's religious significance isn't always obvious without context for visitors unfamiliar with Islamic scholarly history." }
                ],
                faqs: [
                    { q: "Is the Imam Al-Bukhari Complex worth visiting?", a: "Yes, especially for visitors interested in Islamic scholarly history — it's a genuine pilgrimage site, distinct from Samarkand's Timurid-era architectural monuments." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Imam Al-Bukhari Complex worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a genuine Islamic pilgrimage site distinct from Samarkand's Timurid monuments." } }
                ] },
            };

        case "is-bike-tour-worth-it-samarkand":
            return {
                title: "Is the Samarkand Bike Tour Worth It?",
                seoTitle: "Samarkand Bike Tour 2026 | Honest Review",
                description: "An honest look at the Samarkand bike tour covering top highlights and hidden neighbourhoods, an alternative to the standard walking tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e40efb39d5545f4be924b89f16df9b035f23e7b28fe07b18a07df9d18102aa92.jpg",
                sections: [
                    { title: "The Short Answer", content: "Covering Samarkand by bike lets you reach hidden neighbourhoods beyond the main monument circuit that a walking tour wouldn't have time for, at a faster pace than walking but slower and more exploratory than a car tour.", tourCard: { slug: "samarkand-bike-tour-top-highlights-hidden", title: "Samarkand Bike Tour: Top Highlights & Hidden Neighbourhoods", description: "A bike tour covering Samarkand's highlights and lesser-known neighbourhoods.", price: "From $51", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e40efb39d5545f4be924b89f16df9b035f23e7b28fe07b18a07df9d18102aa92.jpg" } },
                    { title: "Practical Tips", content: "This suits travelers comfortable cycling in city traffic — if you'd rather be guided on foot at a slower pace, one of the standard walking tours is the better fit." }
                ],
                faqs: [
                    { q: "Is the Samarkand bike tour worth it?", a: "Yes if you want to reach hidden neighbourhoods beyond the main monument circuit at a faster pace than walking." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Samarkand bike tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it reaches hidden neighbourhoods a standard walking tour wouldn't have time for." } }
                ] },
            };

        case "is-pottery-masterclass-worth-it-tashkent":
            return {
                title: "Is the Tashkent Uzbek Pottery Masterclass Worth It?",
                seoTitle: "Tashkent Pottery Masterclass 2026 | Honest Review",
                description: "An honest look at the Uzbek pottery masterclass with museum entry in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ad4a3e1d6b3a5b249db9e9e0c91076da41b7a9c25063a9b17b871dd96b73646b.jpg",
                sections: [
                    { title: "The Short Answer", content: "Pairing hands-on pottery-making with a museum visit gives genuine context on Uzbek ceramic tradition before you try it yourself, rather than just following rote instructions.", tourCard: { slug: "tashkent-uzbek-pottery-masterclass-with-museum", title: "Tashkent: Uzbek Pottery Masterclass with Museum Entry", description: "An Uzbek pottery masterclass with museum entry in Tashkent.", price: "From $75", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ad4a3e1d6b3a5b249db9e9e0c91076da41b7a9c25063a9b17b871dd96b73646b.jpg" } },
                    { title: "Practical Tips", content: "No prior pottery experience is needed — this is a hands-on introduction, not a technical masterclass despite the name." }
                ],
                faqs: [
                    { q: "Is the Tashkent pottery masterclass worth it?", a: "Yes, the museum entry gives genuine context on Uzbek ceramic tradition before you try making your own piece." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the pottery masterclass worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the museum entry adds genuine context before the hands-on portion." } }
                ] },
            };

        case "is-embroidery-masterclass-worth-it-tashkent":
            return {
                title: "Is the Tashkent Uzbek Embroidery Masterclass Worth It?",
                seoTitle: "Tashkent Embroidery Masterclass 2026 | Honest Review",
                description: "An honest look at the Uzbek embroidery craft masterclass with tea and a keepsake in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/05ca53822c81820ae97e60c888e6def4ad44347ea780d9460125e94161e5622b.jpg",
                sections: [
                    { title: "The Short Answer", content: "Suzani embroidery is a genuine Uzbek textile tradition, and this class gives a hands-on introduction with tea and a keepsake piece to take home, rather than just admiring finished embroidery in a shop.", tourCard: { slug: "tashkent-uzbek-embroidery-craft-masterclass-tea", title: "Tashkent: Uzbek Embroidery Craft Masterclass, Tea & Keepsake", description: "An Uzbek embroidery craft masterclass with tea and a keepsake.", price: "From $75", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/05ca53822c81820ae97e60c888e6def4ad44347ea780d9460125e94161e5622b.jpg" } },
                    { title: "Practical Tips", content: "You keep the piece you make, so this doubles as a genuinely handmade souvenir rather than just an activity." }
                ],
                faqs: [
                    { q: "Is the Tashkent embroidery masterclass worth it?", a: "Yes, for a hands-on introduction to genuine Suzani embroidery tradition, and you keep a handmade keepsake." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the embroidery masterclass worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine Suzani embroidery tradition and a handmade keepsake." } }
                ] },
            };

        case "is-islamic-civilization-center-worth-it-tashkent":
            return {
                title: "Is the Islamic Civilization Center Worth It in Tashkent?",
                seoTitle: "Tashkent Islamic Civilization Center 2026 | Honest Review",
                description: "An honest look at the Islamic Civilization Center tour including tickets and traditional food.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/84dbff815a5682f105ecf3f5e6b852ca3317be2d87148d839242b26d3817f42e.jpg",
                sections: [
                    { title: "The Short Answer", content: "This museum covers Islamic scientific and cultural history across Central Asia, a genuinely different focus from the city's Soviet-era metro and old-town sightseeing, and pairing it with traditional food rounds out the visit.", tourCard: { slug: "islamic-civilization-center-incl-tickets", title: "Islamic Civilization Center incl. Tickets & Traditional Food", description: "A visit to the Islamic Civilization Center including tickets and traditional food.", price: "From $104", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/84dbff815a5682f105ecf3f5e6b852ca3317be2d87148d839242b26d3817f42e.jpg" } },
                    { title: "Practical Tips", content: "A good pick for travelers specifically interested in the region's Islamic scientific and cultural contributions, beyond the standard architecture-focused sightseeing." }
                ],
                faqs: [
                    { q: "Is the Islamic Civilization Center worth visiting in Tashkent?", a: "Yes, for a genuinely different focus on Islamic scientific and cultural history across Central Asia, beyond the city's architecture-focused sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Islamic Civilization Center worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely different focus on Islamic scientific and cultural history." } }
                ] },
            };

        case "is-lashkerak-forest-hike-worth-it-tashkent":
            return {
                title: "Is the Lashkerak Forest Guided Hike Worth It from Tashkent?",
                seoTitle: "Lashkerak Forest Hike Tashkent 2026 | Honest Review",
                description: "An honest look at the Lashkerak Forest guided hike with picnic from Tashkent, distinct from the city's Amirsoy/Chimgan mountain day trips.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5a4c2157db38f2b20d32e5a2d4dccc75d9975c9051a5c81a82684968e6372bb.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This is a genuine forest hike rather than the resort-and-chairlift format of the Amirsoy/Chimgan mountain day trips, better suited to travelers wanting real walking distance and a picnic over a sightseeing-paced mountain visit.", tourCard: { slug: "from-tashkent-lashkerak-forest-guided-hike-with", title: "From Tashkent: Lashkerak Forest Guided Hike with Picnic", description: "A guided forest hike with picnic from Tashkent.", price: "From $91", duration: "6.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5a4c2157db38f2b20d32e5a2d4dccc75d9975c9051a5c81a82684968e6372bb.jpeg" } },
                    { title: "Practical Tips", content: "Wear proper hiking shoes — this is a genuine walking hike, not the chairlift-assisted format of the more popular Amirsoy mountain trips." }
                ],
                faqs: [
                    { q: "Is the Lashkerak Forest hike worth it from Tashkent?", a: "Yes if you want genuine hiking distance and a picnic, distinct from the resort-paced Amirsoy/Chimgan mountain day trips." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Lashkerak Forest hike worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine hiking distance distinct from the resort-paced mountain day trips." } }
                ] },
            };

        case "is-legend-of-love-show-worth-it-samarkand":
            return {
                title: "Is the Marokand Hall Legend of Love Dance Show Worth It in Samarkand?",
                seoTitle: "Marokand Hall Legend of Love Samarkand 2026 | Honest Review",
                description: "An honest look at the Legend of Love Uzbek dance and cultural show at Marokand Hall in Samarkand.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/39f679e2beac7501074a332ba1439c457a84d0cfd77e585eada59e18c4e9b450.jpg",
                sections: [
                    { title: "The Short Answer", content: "This is a traditional Uzbek dance and cultural performance, a good easy evening activity after a day of monument walking tours — a performance rather than a hands-on workshop or history lesson.", tourCard: { slug: "marokand-hall-the-legend-of-love-uzbek-dance", title: "Marokand Hall: The Legend of Love - Uzbek Dance & Cultural Show", description: "A traditional Uzbek dance and cultural show at Marokand Hall.", price: "From $20", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/39f679e2beac7501074a332ba1439c457a84d0cfd77e585eada59e18c4e9b450.jpg" } },
                    { title: "Practical Tips", content: "At just 1 hour and a low price, this is an easy evening add-on after a day of sightseeing." }
                ],
                faqs: [
                    { q: "Is the Legend of Love show worth it in Samarkand?", a: "Yes as an easy, affordable evening activity — a traditional dance performance rather than a hands-on experience." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Legend of Love show worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for an easy, affordable evening performance after sightseeing." } }
                ] },
            };

        case "is-astronomical-heritage-tour-worth-it-samarkand":
            return {
                title: "Is the Samarkand Astronomical Heritage Tour Worth It?",
                seoTitle: "Samarkand Astronomical Heritage Tour 2026 | Honest Review",
                description: "An honest look at the 5-hour astronomical heritage and history tour in Samarkand, centered on Ulugbek's observatory legacy.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2bc0ec6a888634dc1afead389c1f8364e59262b5340e88fcf2173ec5c4b89ed4.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Samarkand was a genuine center of astronomical science under Timurid ruler Ulugbek, and this tour specifically explores that scientific heritage — a different angle from the Registan's architectural grandeur.", tourCard: { slug: "samarkand-the-astronomical-heritage-history-5", title: "Samarkand: The Astronomical Heritage & History: 5-hour Tour", description: "A tour exploring Samarkand's astronomical heritage and history.", price: "From $52", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2bc0ec6a888634dc1afead389c1f8364e59262b5340e88fcf2173ec5c4b89ed4.jpeg" } },
                    { title: "Practical Tips", content: "A good pick specifically for travelers interested in the history of science, beyond the standard architecture-focused monument tours." }
                ],
                faqs: [
                    { q: "Is the astronomical heritage tour worth it in Samarkand?", a: "Yes, for genuine insight into the city's scientific history under Ulugbek, a different angle from the Registan's architectural focus." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the astronomical heritage tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine insight into Samarkand's scientific history under Ulugbek." } }
                ] },
            };

        case "is-horseback-riding-worth-it-samarkand":
            return {
                title: "Is the Samarkand Horseback Riding Tour Worth It?",
                seoTitle: "Samarkand Horseback Riding 2026 | Honest Review",
                description: "An honest look at the Samarkand horseback riding tour with pickup and drop-off.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e83761aec7cfc91ec8bf0c26882bd28fc9ef256e6b4b304a421abcc1d943bfa.jpg",
                sections: [
                    { title: "The Short Answer", content: "This is a genuine outdoor activity rather than monument sightseeing, giving a different pace and perspective on the Samarkand countryside than a walking tour of the city's historic core.", tourCard: { slug: "samarkand-horseback-riding-tour-with-pickup-and", title: "Samarkand: Horseback Riding Tour with Pickup and Drop-off", description: "A horseback riding tour around Samarkand with pickup and drop-off.", price: "From $104", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e83761aec7cfc91ec8bf0c26882bd28fc9ef256e6b4b304a421abcc1d943bfa.jpg" } },
                    { title: "Practical Tips", content: "No prior riding experience is typically needed, but confirm with the operator if you're a complete beginner." }
                ],
                faqs: [
                    { q: "Is horseback riding worth it in Samarkand?", a: "Yes for a genuinely different outdoor activity and countryside perspective, distinct from the city's monument walking tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is horseback riding worth it in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely different outdoor countryside activity." } }
                ] },
            };

        case "is-shahi-zinda-guided-tour-worth-it-samarkand":
            return {
                title: "Is the Shahi Zinda Complex Guided Tour Worth It in Samarkand?",
                seoTitle: "Shahi Zinda Complex Samarkand 2026 | Honest Review",
                description: "An honest look at the Shahi Zinda necropolis complex guided tour with a local expert in Samarkand.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4d4cc87cf25c295603a1f6872f0600a8278796283864681775673e5894d638f5.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shahi Zinda is a genuinely striking avenue of tiled mausoleums built up over centuries, and a local expert guide adds real value here since the site's layered history across different dynasties isn't obvious from the tilework alone.", tourCard: { slug: "shahi-zinda-complex-guided-tour-with-a-local", title: "Shahi Zinda Complex Guided Tour with a Local Expert", description: "A guided tour of the Shahi Zinda necropolis complex with a local expert.", price: "From $15", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4d4cc87cf25c295603a1f6872f0600a8278796283864681775673e5894d638f5.jpg" } },
                    { title: "Practical Tips", content: "Go in the morning for softer light on the tilework and fewer crowds along the narrow mausoleum avenue." }
                ],
                faqs: [
                    { q: "Is the Shahi Zinda tour worth it in Samarkand?", a: "Yes, a local guide adds real value to understanding the site's layered, centuries-spanning history across the tiled mausoleum avenue." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Shahi Zinda tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for the site's layered, centuries-spanning history explained by a local guide." } }
                ] },
            };

        case "is-moonlight-tour-worth-it-samarkand":
            return {
                title: "Is the Samarkand Moonlight Tour Worth It?",
                seoTitle: "Samarkand Moonlight Tour 2026 | Honest Review",
                description: "An honest look at the Samarkand Moonlight Tour, a timeless night experience across the city's illuminated monuments.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ea4ac95ba7d351950ad955cfb1b4d8cf1f6d2dc155d23df56638965f8b5cc8.jpg",
                sections: [
                    { title: "The Short Answer", content: "Samarkand's major monuments light up dramatically at night, and this broader moonlight tour covers more ground across the city after dark than the dedicated Registan night tour alone, suited to travelers wanting a fuller after-dark city experience rather than one single site.", tourCard: { slug: "samarkand-moonlight-tour-a-timeless-night", title: "Samarkand Moonlight Tour: A Timeless Night Experience", description: "A guided night tour across Samarkand's illuminated monuments.", price: "From $20", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ea4ac95ba7d351950ad955cfb1b4d8cf1f6d2dc155d23df56638965f8b5cc8.jpg" } },
                    { title: "Practical Tips", content: "Bring a jacket — desert nights in Samarkand cool off quickly even after a hot day." }
                ],
                faqs: [
                    { q: "Is the Samarkand Moonlight Tour worth it?", a: "Yes, for a fuller after-dark city experience covering more ground than a single-site night tour like Registan alone." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Samarkand Moonlight Tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a fuller after-dark city experience beyond a single illuminated site." } }
                ] },
            };

        case "is-tea-heritage-walk-worth-it-samarkand":
            return {
                title: "Is the Silk Road Sips Tea and Heritage Walk Worth It in Samarkand?",
                seoTitle: "Samarkand Tea Heritage Walk 2026 | Honest Review",
                description: "An honest look at the Silk Road Sips tea and heritage walking tour in Samarkand.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/66125f791457f238dfe558a5ddf5446708a1704b76ca2b7e1d85cf155c9781dc.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tea was a genuine Silk Road trade good, and this walk ties that history to actual tea tastings along the route, a slower and more flavor-focused pace than the city's standard monument-hopping walking tours.", tourCard: { slug: "silk-road-sips-a-samarkand-tea-heritage-walk", title: "Silk Road Sips: A Samarkand Tea & Heritage Walk", description: "A guided tea-tasting and heritage walking tour of Samarkand.", price: "From $28", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/66125f791457f238dfe558a5ddf5446708a1704b76ca2b7e1d85cf155c9781dc.jpg" } },
                    { title: "Practical Tips", content: "Come with an appetite for tea specifically — this walk is paced around tastings, not a fast-moving sightseeing circuit." }
                ],
                faqs: [
                    { q: "Is the Silk Road Sips tea walk worth it in Samarkand?", a: "Yes, for a slower-paced, flavor-focused alternative to the city's standard monument-hopping walking tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the tea heritage walk worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a slower, flavor-focused alternative to standard monument-hopping walking tours." } }
                ] },
            };

        case "is-street-food-walking-tour-worth-it-samarkand":
            return {
                title: "Is the Samarkand Walking Tour with Street Food Tastings Worth It?",
                seoTitle: "Samarkand Street Food Walking Tour 2026 | Honest Review",
                description: "An honest look at the Samarkand walking tour with local street food tastings.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2fc7d49c6db0f922dc506a79edd702fd2977b99724a4353d15d2a7185b9986fd.jpg",
                sections: [
                    { title: "The Short Answer", content: "Sampling street food along a guided walk gets you eating like a local rather than guessing at unfamiliar stalls on your own, a genuinely different focus from the city's hands-on plov and bread cooking classes.", tourCard: { slug: "samarkand-walking-tour-with-local-street-food", title: "Samarkand: Walking Tour with Local Street Food Tastings", description: "A guided walking tour of Samarkand with local street food tastings.", price: "From $51", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2fc7d49c6db0f922dc506a79edd702fd2977b99724a4353d15d2a7185b9986fd.jpg" } },
                    { title: "Practical Tips", content: "Arrive with an empty stomach — the tastings add up across the route." }
                ],
                faqs: [
                    { q: "Is the Samarkand street food walking tour worth it?", a: "Yes, for sampling local food confidently with a guide rather than guessing at unfamiliar stalls alone." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the street food walking tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for confidently sampling local food with a guide." } }
                ] },
            };

        case "is-handmade-paper-making-worth-it-samarkand":
            return {
                title: "Is the Samarkand Handmade Paper-Making Experience Worth It?",
                seoTitle: "Samarkand Paper-Making Experience 2026 | Honest Review",
                description: "An honest look at the mulberry-bark-to-handmade-paper-making experience in Samarkand, reviving a historically significant local craft.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0898483b936a6c518fcc7557e427f62c7dbf4aff2ded07e8f5547c9c2e0a1161.jpg",
                sections: [
                    { title: "The Short Answer", content: "Samarkand paper, made from mulberry bark, was historically significant along the Silk Road, and this hands-on experience revives a craft that nearly disappeared — a genuinely unique activity you won't find duplicated by other workshops in the city.", tourCard: { slug: "samarkand-mulberry-bark-to-handmade-paper-making", title: "Samarkand: Mulberry Bark to Handmade Paper-Making Experience", description: "A hands-on traditional Samarkand paper-making experience from mulberry bark.", price: "From $111", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0898483b936a6c518fcc7557e427f62c7dbf4aff2ded07e8f5547c9c2e0a1161.jpg" } },
                    { title: "Practical Tips", content: "You take home the paper you make — a genuinely unique, historically rooted souvenir unlike anything found in a typical souvenir shop." }
                ],
                faqs: [
                    { q: "Is the handmade paper-making experience worth it in Samarkand?", a: "Yes, it's a genuinely unique, historically significant Silk Road craft, and you keep the paper you make." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the paper-making experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a historically significant Silk Road craft you can take home a piece of." } }
                ] },
            };

        case "is-audio-theater-walking-tour-worth-it-tashkent":
            return {
                title: "Is the Tashkent Audio Theater Walking Tour Worth It?",
                seoTitle: "Tashkent Audio Theater Walking Tour 2026 | Honest Review",
                description: "An honest look at Tashkent's audio theater walking tour with archival sounds.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f612fc97138395ac611686caf3b380b3966f816ecf26723d29c939654cb620d4.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour pairs a self-guided walk with archival audio recordings layered over the city's streets, a genuinely different format from a live-guide walking tour, suited to travelers who prefer an immersive, self-paced experience.", tourCard: { slug: "tashkent-audio-theater-walking-tour-with-archival", title: "Tashkent: Audio Theater Walking Tour with Archival Sounds", description: "A self-guided audio theater walking tour layered with archival sounds.", price: "From $20", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f612fc97138395ac611686caf3b380b3966f816ecf26723d29c939654cb620d4.jpg" } },
                    { title: "Practical Tips", content: "Bring headphones and keep your phone charged — the experience depends on the audio layer running smoothly as you walk." }
                ],
                faqs: [
                    { q: "Is the audio theater walking tour worth it in Tashkent?", a: "Yes, for travelers who prefer a self-paced, immersive format over a live-guide walking tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the audio theater walking tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a self-paced, immersive alternative to a live-guide walking tour." } }
                ] },
            };

        case "is-city-night-tour-with-dinner-photography-worth-it-tashkent":
            return {
                title: "Is the Tashkent City Night Tour with Dinner and Photography Worth It?",
                seoTitle: "Tashkent Night Tour with Photography 2026 | Honest Review",
                description: "An honest look at Tashkent's city night tour bundling dinner and free professional photography.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ccd1f382762e2ceaf407333d5108c9146df29b7b0e4a5dcfe4b9feb951645192.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bundling a guided night tour with dinner and a complimentary professional photo session is a genuinely good value combination for travelers who want both an evening meal out and quality photos without separately booking a photographer.", tourCard: { slug: "tashkent-city-night-tour-with-dinner-free-pro", title: "Tashkent city Night Tour with Dinner & Free Pro Photography", description: "A guided night tour of Tashkent with dinner and complimentary professional photography.", price: "From $102", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ccd1f382762e2ceaf407333d5108c9146df29b7b0e4a5dcfe4b9feb951645192.jpg" } },
                    { title: "Practical Tips", content: "Confirm the photo-delivery process with your operator in advance — ask how and when you'll actually receive the edited images." }
                ],
                faqs: [
                    { q: "Is the Tashkent night tour with dinner and photography worth it?", a: "Yes, it's a good-value bundle for travelers wanting an evening meal plus quality photos without booking a separate photographer." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Tashkent night tour with dinner and photography worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it bundles a good dinner and professional photos into one booking." } }
                ] },
            };

        case "is-bread-baking-class-worth-it-tashkent":
            return {
                title: "Is the Tashkent Uzbek Bread-Baking Class Worth It?",
                seoTitle: "Tashkent Bread-Baking Class 2026 | Honest Review",
                description: "An honest look at the Uzbek bread-baking class paired with a Chorsu Bazaar tour in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e2a803d29f3c5e6e24a918f2ccde7b16911f3161880a807afe829a7646578957.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Uzbek non (flatbread) is baked in a traditional tandir oven, a distinct skill from the plov and samsa cooking classes already covered, and pairing the lesson with a Chorsu Bazaar visit gives practical context for where the bread fits into daily Uzbek life.", tourCard: { slug: "tashkent-uzbek-bread-baking-class-chorsu-bazaar", title: "Tashkent: Uzbek Bread-Baking Class & Chorsu Bazaar Tour", description: "A hands-on Uzbek bread-baking class paired with a Chorsu Bazaar tour.", price: "From $111", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e2a803d29f3c5e6e24a918f2ccde7b16911f3161880a807afe829a7646578957.jpeg" } },
                    { title: "Practical Tips", content: "Go hungry — you'll be sampling bread fresh from the tandir oven as part of the class." }
                ],
                faqs: [
                    { q: "Is the Tashkent bread-baking class worth it?", a: "Yes, it's a genuinely distinct culinary skill from the city's plov and samsa cooking classes, and pairing it with Chorsu Bazaar adds useful context." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Tashkent bread-baking class worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a distinct culinary skill from the plov and samsa classes, paired usefully with a bazaar tour." } }
                ] },
            };

        case "is-andijan-market-food-tour-worth-it-tashkent":
            return {
                title: "Is the Andijan Market Visit and Lagman Food Tour Worth It from Tashkent?",
                seoTitle: "Andijan Market Food Tour from Tashkent 2026 | Honest Review",
                description: "An honest look at the Andijan market visit and food tour with hand-pulled lagman, a day trip into the Fergana Valley region.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9045127673cf5aeb32b797956f1ba1ed255c626079773b99268186b089453066.jpg",
                sections: [
                    { title: "The Short Answer", content: "Andijan's local market and hand-pulled lagman noodles give a genuine taste of Fergana Valley daily life, distinct from Tashkent's capital-city sightseeing and worth it specifically for travelers curious about the wider region beyond the capital.", tourCard: { slug: "andijan-market-visit-and-food-tour-with-hand", title: "Andijan: Market Visit and Food Tour with Hand-Pulled Lagman", description: "A market visit and food tour in Andijan featuring hand-pulled lagman noodles.", price: "From $33", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9045127673cf5aeb32b797956f1ba1ed255c626079773b99268186b089453066.jpg" } },
                    { title: "Practical Tips", content: "Confirm travel time from Tashkent with your operator — Andijan is in the Fergana Valley, a genuine regional trip rather than a quick city add-on." }
                ],
                faqs: [
                    { q: "Is the Andijan market and food tour worth it?", a: "Yes, for travelers wanting a genuine taste of Fergana Valley life beyond Tashkent's capital-city sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Andijan market and food tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine regional taste of Fergana Valley life beyond the capital." } }
                ] },
            };

        case "is-human-house-walking-tour-worth-it-tashkent":
            return {
                title: "Is the Guided Walking Tour with Human House Visit Worth It?",
                description: "An honest look at the guided walking tour with a Human House visit in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42d113e0b318849e5cb84d347ee2876824a522e10cafbec67bdd5325ba6a1c59.jpg",
                sections: [
                    { title: "The Short Answer", content: "Combining a city walking tour with a visit to a traditional Uzbek 'Human House' gives genuine insight into local domestic life and hospitality, worth it for travelers who want more than monument sightseeing.", tourCard: { slug: "tashkent-guided-walking-tour-with-human-house", title: "Tashkent: Guided Walking Tour with Human House Visit", description: "A guided walking tour of Tashkent including a visit to a traditional Human House.", price: "From $25", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42d113e0b318849e5cb84d347ee2876824a522e10cafbec67bdd5325ba6a1c59.jpg" } },
                    { title: "Practical Tips", content: "Ask your guide about the family's daily life and customs — the home visit is the part that gives this tour real depth." }
                ],
                faqs: [
                    { q: "Is the guided walking tour with Human House visit worth it in Tashkent?", a: "Yes, it gives genuine insight into local domestic life beyond standard monument sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Human House walking tour worth it in Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it gives genuine insight into local domestic life beyond standard sightseeing." } }
                ] },
            };

        case "is-soviet-metro-baker-dishes-tour-worth-it-tashkent":
            return {
                title: "Is the Soviet Metro Tour, Baker Visit & 6 Uzbek Dishes Worth It?",
                description: "An honest look at the Soviet metro tour with a baker visit and 6 Uzbek dish tasting in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ad953abdd500c42667eb0bf152e2d19cf9cd1e7b8a86239655107f49b6ac691a.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tashkent's Soviet-era metro stations are genuinely striking, ornate underground architecture, and pairing them with a traditional baker visit and a 6-dish tasting gives a varied, well-rounded half-day worth it for travelers wanting architecture, craft, and food in one booking.", tourCard: { slug: "tashkent-soviet-metro-tour-baker-visit-6-uzbek", title: "Tashkent: Soviet Metro Tour, Baker Visit & 6 Uzbek Dishes", description: "A tour covering Tashkent's Soviet-era metro stations, a traditional baker, and 6 Uzbek dishes.", price: "From $65", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ad953abdd500c42667eb0bf152e2d19cf9cd1e7b8a86239655107f49b6ac691a.jpg" } },
                    { title: "Practical Tips", content: "Photography rules vary by metro station — check with your guide before taking photos underground." }
                ],
                faqs: [
                    { q: "Is the Soviet metro tour with baker visit and 6 Uzbek dishes worth it?", a: "Yes, it combines striking underground architecture, a traditional craft visit, and real food variety in one well-rounded half-day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Soviet metro and food tour worth it in Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it combines striking architecture with a traditional craft visit and real food variety." } }
                ] },
            };

        case "is-parks-and-nature-walking-tour-worth-it-tashkent":
            return {
                title: "Is the Parks and Nature Walking Tour Worth It in Tashkent?",
                description: "An honest look at the parks and nature walking tour in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb0f8d27be5503c1012855114e8642fa8e0e98d5cdc1ee11dc92d5470694ea6a.jpg",
                sections: [
                    { title: "The Short Answer", content: "A relaxed walk through Tashkent's green spaces gives a quieter, slower-paced side of the city, worth it for travelers who want a break from monument and metro sightseeing rather than another packed cultural stop.", tourCard: { slug: "tashkent-parks-and-nature-walking-tour-with-guide", title: "Tashkent: Parks and Nature Walking Tour with Guide", description: "A guided walking tour through Tashkent's parks and green spaces.", price: "From $39", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb0f8d27be5503c1012855114e8642fa8e0e98d5cdc1ee11dc92d5470694ea6a.jpg" } },
                    { title: "Practical Tips", content: "A good pick for a lighter day in your itinerary, between heavier sightseeing days." }
                ],
                faqs: [
                    { q: "Is the parks and nature walking tour worth it in Tashkent?", a: "Yes, as a relaxed, quieter break from the city's monument and metro sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the parks and nature walking tour worth it in Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a relaxed, quieter break from monument sightseeing." } }
                ] },
            };

        case "is-food-bazaar-local-life-tour-worth-it-tashkent":
            return {
                title: "Is the Food, Bazaar & Local Life Walking Tour Worth It in Tashkent?",
                description: "An honest look at the food, bazaar, and local life walking tour in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg",
                sections: [
                    { title: "The Short Answer", content: "This walk combines market stalls, food tastings, and everyday local life into one route, worth it for travelers who want a genuine sense of how residents actually shop and eat rather than a monument-focused itinerary.", tourCard: { slug: "tashkent-food-bazaar-local-life-walking-tour", title: "Tashkent: Food, Bazaar & Local Life Walking Tour", description: "A walking tour combining food tastings, market stalls, and local life in Tashkent.", price: "From $65", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg" } },
                    { title: "Practical Tips", content: "Go hungry and pace yourself — the tastings add up across the market stops." }
                ],
                faqs: [
                    { q: "Is the Food, Bazaar and Local Life walking tour worth it in Tashkent?", a: "Yes, for a genuine sense of how residents actually shop and eat, beyond a monument-focused itinerary." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Food, Bazaar and Local Life tour worth it in Tashkent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine sense of local daily life beyond monument sightseeing." } }
                ] },
            };

        case "is-khushtak-clay-figurine-painting-worth-it-tashkent":
            return {
                title: "Is Painting a Traditional Khushtak Uzbek Clay Figurine Worth It?",
                description: "An honest look at the traditional Khushtak Uzbek clay figurine painting workshop in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Khushtak are traditional Uzbek clay whistle-figurines, and painting your own gives a genuine hands-on craft experience distinct from Tashkent's pottery-wheel workshops, worth it for travelers wanting a quick, beginner-friendly creative activity and a distinctive souvenir.", tourCard: { slug: "tashkent-paint-a-traditional-khushtak-uzbek-clay", title: "Tashkent: Paint a Traditional Khushtak Uzbek Clay Figurine", description: "A hands-on painting workshop for a traditional Khushtak Uzbek clay figurine.", price: "From $85", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg" } },
                    { title: "Practical Tips", content: "No prior craft experience is needed — this is a short, beginner-friendly painting session on a pre-made clay figurine." }
                ],
                faqs: [
                    { q: "Is the Khushtak clay figurine painting workshop worth it in Tashkent?", a: "Yes, for a quick, beginner-friendly craft activity and a distinctive, traditional Uzbek souvenir." }
                ],
            };

        case "is-beldersay-mountain-hike-worth-it-tashkent":
            return {
                title: "Is the Beldersay Mountain Hike with Picnic Worth It from Tashkent?",
                description: "An honest look at the Beldersay mountain hike with picnic from Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Beldersay is a quieter mountain alternative to the heavily-touristed Amirsoy and Chimgan circuit, worth it specifically for travelers wanting a genuine hiking day with a picnic rather than the region's more crowded resort-style mountain tours.", tourCard: { slug: "from-tashkent-beldersay-mountain-hike-with-picnic", title: "From Tashkent: Beldersay Mountain Hike with Picnic", description: "A guided mountain hike with a picnic at Beldersay, near Tashkent.", price: "From $98", duration: "6.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg" } },
                    { title: "Practical Tips", content: "Wear proper hiking shoes and bring a light jacket, since mountain weather can shift quickly even in warmer months." }
                ],
                faqs: [
                    { q: "Is the Beldersay mountain hike worth it from Tashkent?", a: "Yes, specifically for travelers wanting a genuine, quieter hiking day away from the more crowded Amirsoy and Chimgan resort circuit." }
                ],
            };

        case "is-uzbekistan-6-city-tour-worth-it-tashkent":
            return {
                title: "Is the Uzbekistan 6-City Tour Guide with Transport Worth It?",
                description: "An honest look at the Uzbekistan 6-city tour guide with transport, starting from Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Covering six cities with a dedicated guide and transport handled takes the logistics burden off travelers trying to see Uzbekistan's major Silk Road stops in one trip, worth it specifically for those without the time or inclination to plan each city-to-city leg themselves.", tourCard: { slug: "uzbekistan-6-city-tour-guide-with-transport", title: "Uzbekistan: 6-City Tour guide with Transport", description: "A multi-city Uzbekistan tour with a dedicated guide and transport.", price: "From $65", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg" } },
                    { title: "Practical Tips", content: "Confirm exactly which six cities are included and the total trip length before booking, since itineraries can vary by operator." }
                ],
                faqs: [
                    { q: "Is the Uzbekistan 6-city tour worth it?", a: "Yes, specifically for travelers who want the city-to-city logistics handled rather than planning each leg of a multi-city Silk Road trip themselves." }
                ],
            };

        case "is-private-city-tour-photo-session-worth-it-tashkent":
            return {
                title: "Is the Tashkent Private Guided City Tour with Photo Session Worth It?",
                description: "An honest look at the private guided city tour by car with a photo session in Tashkent.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bundling a private car city tour with a dedicated photo session gives travelers professional-quality photos at Tashkent's landmarks without arranging a separate photoshoot, worth it specifically for those wanting both sightseeing and quality photos in one booking.", tourCard: { slug: "tashkent-private-guided-city-tour-by-car-with", title: "Tashkent: Private Guided City Tour by Car with Photo Session", description: "A private city tour by car with a dedicated photo session in Tashkent.", price: "From $94", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6fce14e3310c5ecabd29be4d82fc0107b374a3cdf5425c2a66c9ae130de7a0b3.jpg" } },
                    { title: "Practical Tips", content: "Mention which landmarks you most want photographed at, so your guide can prioritize the route around the best light and timing." }
                ],
                faqs: [
                    { q: "Is the private city tour with photo session worth it in Tashkent?", a: "Yes, for travelers wanting both sightseeing and professional-quality photos handled in one booking rather than two." }
                ],
            };

        case "is-marokand-concert-hall-show-worth-it-samarkand":
            return {
                title: "Is the Marokand Concert Hall Show Worth It in Samarkand?",
                description: "An honest look at the Marokand Concert Hall show ticket in Samarkand.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9661a47ec3f3511f3404905c126904687fc9fab6f960c060008a8d7cbb5d1bc.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A genuine evening performance venue giving a different kind of cultural experience than the city's daytime monument sightseeing, worth it as an easy, relaxed way to close out a day in Samarkand.", tourCard: { slug: "marokand-concert-hall-show-ticket", title: "Marokand Concert Hall Show Ticket", description: "A ticket to a performance at the Marokand Concert Hall in Samarkand.", price: "From $33", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9661a47ec3f3511f3404905c126904687fc9fab6f960c060008a8d7cbb5d1bc.jpeg" } },
                    { title: "Practical Tips", content: "Book ahead for a good seat — confirm the night's specific program with the venue before buying." }
                ],
                faqs: [
                    { q: "Is the Marokand Concert Hall show worth it in Samarkand?", a: "Yes, as an easy, relaxed evening activity distinct from the city's daytime monument sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Marokand Concert Hall show worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a relaxed evening activity distinct from daytime sightseeing." } }
                ] },
            };

        case "is-uzbek-folklore-show-worth-it-samarkand":
            return {
                title: "Is the Uzbek Folklore Show Worth It in Samarkand?",
                description: "An honest look at the Uzbek folklore show in Samarkand.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/19d78222425a7163217aef6125761a0cabcb172fcb3998431210afb749e29b00.jpg",
                sections: [
                    { title: "The Short Answer", content: "This show covers traditional Uzbek music and dance, giving genuine cultural context that complements the city's historic architecture, worth it for travelers wanting a living cultural performance alongside the monuments.", tourCard: { slug: "uzbek-folklore-show-in-samarkand", title: "Uzbek Folklore Show in Samarkand", description: "A traditional Uzbek music and dance folklore show in Samarkand.", price: "From $39", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/19d78222425a7163217aef6125761a0cabcb172fcb3998431210afb749e29b00.jpg" } },
                    { title: "Practical Tips", content: "A good evening pairing after a day of monument sightseeing." }
                ],
                faqs: [
                    { q: "Is the Uzbek folklore show worth it in Samarkand?", a: "Yes, it gives genuine living cultural context that complements the city's historic architecture." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Uzbek folklore show worth it in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it gives genuine living cultural context alongside the city's monuments." } }
                ] },
            };

        case "is-legendary-bread-acrobatic-class-worth-it-samarkand":
            return {
                title: "Is the Legendary Bread Making Class & Acrobatic Bread Worth It?",
                description: "An honest look at the legendary bread making class and acrobatic bread experience in Samarkand.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0333efe189c692853ad420c43410d74b1c2e0e6cd909e1e3c71b6f98c4693834.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This class adds a playful acrobatic bread-shaping element to the standard non-baking lesson, worth it for travelers who want a more entertaining, hands-on version of Samarkand's traditional bread-making craft.", tourCard: { slug: "samarkand-legendary-bread-making-class-acrobatic", title: "Samarkand: Legendary Bread Making Class & Acrobatic Bread", description: "A bread making class featuring an acrobatic bread-shaping element.", price: "From $37", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0333efe189c692853ad420c43410d74b1c2e0e6cd909e1e3c71b6f98c4693834.jpeg" } },
                    { title: "Practical Tips", content: "Expect a livelier, more performance-driven class than a standard bread-baking lesson." }
                ],
                faqs: [
                    { q: "Is the legendary bread making class and acrobatic bread experience worth it?", a: "Yes, for a more entertaining, hands-on version of the traditional bread-making craft." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the legendary bread making class worth it in Samarkand?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a livelier, more entertaining version of the traditional bread-making craft." } }
                ] },
            };

        case "is-after-sunset-slow-evening-worth-it-samarkand":
            return {
                title: "Is Samarkand After Sunset: A Slow Evening Experience Worth It?",
                description: "An honest look at the Samarkand After Sunset slow evening experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This slow-paced evening experience shows the city's monuments under evening lighting with a more relaxed, contemplative pace than daytime sightseeing, worth it for travelers who want to see Samarkand's architecture in a completely different mood.", tourCard: { slug: "samarkand-after-sunset-a-slow-evening-experience", title: "Samarkand After Sunset: A Slow Evening Experience", description: "A slow-paced evening experience exploring Samarkand's monuments under evening lighting.", price: "From $51", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg" } },
                    { title: "Practical Tips", content: "Bring a jacket — evenings cool down noticeably compared to Samarkand's daytime heat." }
                ],
                faqs: [
                    { q: "Is Samarkand After Sunset worth it?", a: "Yes, it shows the city's monuments in a completely different, more relaxed evening mood than daytime sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Samarkand After Sunset worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a relaxed, contemplative evening view of the city's monuments." } }
                ] },
            };

        case "is-village-tour-homemade-dinner-worth-it-samarkand":
            return {
                title: "Is the Samarkand Village Tour with Homemade Dinner Worth It?",
                description: "An honest look at the Samarkand village tour with homemade dinner and local snacks.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Visiting a rural village outside Samarkand and eating a homemade dinner with a local family gives a genuinely different, slower experience than the city's monument-focused tours, worth it for travelers wanting real cultural contact rather than another historical walk.", tourCard: { slug: "samarkand-village-tour-with-homemade-dinner-local", title: "Samarkand: Village Tour with Homemade Dinner & Local Snacks", description: "A village tour near Samarkand with a homemade dinner and local snacks.", price: "From $65", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg" } },
                    { title: "Practical Tips", content: "Come with an appetite — homemade meals in rural Uzbek households are typically generous, multi-dish spreads." }
                ],
                faqs: [
                    { q: "Is the Samarkand village tour with homemade dinner worth it?", a: "Yes, for genuine cultural contact and a real home-cooked meal, a slower change of pace from the city's monument-focused tours." }
                ],
            };

        case "is-spiritual-cultural-walk-tea-worth-it-samarkand":
            return {
                title: "Is the Samarkand Spiritual and Cultural Walk with Tea Worth It?",
                description: "An honest look at the Samarkand spiritual and cultural walk with tea and stories.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This walk pairs Samarkand's spiritual sites with storytelling and tea stops at a deliberately slower pace, worth it specifically for travelers wanting narrative depth and a contemplative tone rather than a fast-paced highlights circuit.", tourCard: { slug: "samarkand-spiritual-cultural-walk-with-tea-and", title: "Samarkand: Spiritual & Cultural Walk with Tea and Stories", description: "A spiritual and cultural walk through Samarkand with tea stops and storytelling.", price: "From $52", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg" } },
                    { title: "Practical Tips", content: "Go in with an open mind for storytelling and reflection — the pace is deliberately slower than the city's standard highlights walks." }
                ],
                faqs: [
                    { q: "Is the spiritual and cultural walk with tea worth it in Samarkand?", a: "Yes, specifically for travelers wanting narrative depth and a contemplative pace rather than a fast highlights circuit." }
                ],
            };

        case "is-museum-tour-small-group-worth-it-samarkand":
            return {
                title: "Is the Samarkand Museum Tour (Small Group & Private Options) Worth It?",
                description: "An honest look at the Samarkand museum tour with small group and private options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This museum-focused tour gives historical and archaeological context behind Samarkand's monuments, worth it specifically for travelers wanting deeper background before or after seeing the city's famous sites in person.", tourCard: { slug: "museum-tour-small-group-private-options", title: "Museum Tour – Small Group & Private Options!", description: "A museum tour of Samarkand with small group and private options.", price: "From $43", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg" } },
                    { title: "Practical Tips", content: "Choose the private option if you want to move at your own pace through the exhibits rather than following a group schedule." }
                ],
                faqs: [
                    { q: "Is the Samarkand museum tour worth it?", a: "Yes, for travelers wanting deeper historical context behind the city's famous monuments before or after seeing them." }
                ],
            };

        case "is-qurtob-family-masterclass-worth-it-samarkand":
            return {
                title: "Is the Samarkand Countryside Qurtob Family Masterclass Worth It?",
                description: "An honest look at the traditional Qurtob family cooking masterclass in the Samarkand countryside.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Qurtob is a specific regional dish rarely taught in the city's more common plov and bread classes, worth it for travelers wanting a genuinely different dish and a countryside setting rather than another urban cooking class.", tourCard: { slug: "samarkand-countryside-traditional-qurtob-family", title: "Samarkand Countryside: Traditional Qurtob Family Masterclass", description: "A traditional Qurtob cooking masterclass with a family in the Samarkand countryside.", price: "From $72", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0978919f912cc5b58df09690ec7eb5514fda011940c0b764e855a0cce398b936.jpeg" } },
                    { title: "Practical Tips", content: "Come hungry — like most Uzbek cooking classes, you'll eat what you make as a full meal." }
                ],
                faqs: [
                    { q: "Is the Qurtob family masterclass worth it in Samarkand?", a: "Yes, for a genuinely different regional dish and countryside setting, distinct from the city's more common plov and bread classes." }
                ],
            };

        case "is-private-tennis-experience-worth-it-bukhara":
            return {
                title: "Is the Private Tennis Experience with a Coach Worth It in Bukhara?",
                description: "An honest look at the private tennis experience with a coach in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5190adc28e763af5fca5099884228d8baaaceadc3399a48e47e04462aa89cd5d.jpg",
                sections: [
                    { title: "The Short Answer", content: "A genuinely unusual activity to find in Bukhara, this private coached tennis session gives active travelers a break from monument walking, worth it for those wanting physical activity alongside the city's heritage sightseeing.", tourCard: { slug: "bukhara-private-tennis-experience-with-coach", title: "Bukhara Private Tennis Experience with Coach", description: "A private coached tennis session in Bukhara.", price: "From $91", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5190adc28e763af5fca5099884228d8baaaceadc3399a48e47e04462aa89cd5d.jpg" } },
                    { title: "Practical Tips", content: "Confirm court availability and equipment rental with the operator in advance." },
                ],
                faqs: [
                    { q: "Is the private tennis experience with a coach worth it in Bukhara?", a: "Yes, for active travelers wanting a genuine physical break from monument-heavy sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the private tennis experience worth it in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for active travelers wanting a physical break from sightseeing." } },
                ] },
            };

        case "is-jewish-heritage-house-plov-worth-it-bukhara":
            return {
                title: "Is the Jewish Heritage House Tour and Plov Cooking Class Worth It?",
                description: "An honest look at the Jewish heritage house tour and plov cooking class in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3222f17b15abeadedefd6b03eb7fc9a952c77a7b29f735d747523077d9861197.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bukhara has one of Central Asia's oldest Jewish communities, and this tour pairs a visit to a heritage house with a hands-on plov cooking class, worth it for travelers wanting genuine cultural depth beyond the main Islamic monuments.", tourCard: { slug: "bukhara-jewish-heritage-house-tour-and-plov", title: "Bukhara: Jewish Heritage House Tour and Plov Cooking Class", description: "A tour of a Jewish heritage house paired with a plov cooking class.", price: "From $97", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3222f17b15abeadedefd6b03eb7fc9a952c77a7b29f735d747523077d9861197.jpg" } },
                    { title: "Practical Tips", content: "Come hungry — the class ends with eating the plov you helped cook." },
                ],
                faqs: [
                    { q: "Is the Jewish heritage house tour and plov cooking class worth it in Bukhara?", a: "Yes, it gives genuine cultural depth into the city's Jewish history, beyond the main Islamic monuments." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Jewish heritage house tour worth it in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine cultural depth into the city's Jewish history." } },
                ] },
            };

        case "is-suzani-embroidery-workshop-worth-it-bukhara":
            return {
                title: "Is the Suzani Embroidery Workshop and Cultural Exploration Worth It?",
                description: "An honest look at the Suzani embroidery workshop and cultural exploration in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/77735d6b8dddc0369ba6ef1f28d3176784af40ac70efc3abfe05e1f40c70d7c9.jpg",
                sections: [
                    { title: "The Short Answer", content: "Suzani is a genuine traditional Uzbek embroidery technique, and this hands-on workshop teaches the basics while giving real cultural context, worth it for travelers wanting a craft activity with actual historical substance.", tourCard: { slug: "bukhara-suzani-embroidery-workshop-and-cultural", title: "Bukhara: Suzani Embroidery Workshop and Cultural Exploration", description: "A hands-on Suzani embroidery workshop with cultural context.", price: "From $117", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/77735d6b8dddc0369ba6ef1f28d3176784af40ac70efc3abfe05e1f40c70d7c9.jpg" } },
                    { title: "Practical Tips", content: "Your finished embroidery piece makes a genuinely distinctive, lightweight souvenir to pack." },
                ],
                faqs: [
                    { q: "Is the Suzani embroidery workshop worth it in Bukhara?", a: "Yes, it's a genuine traditional craft with real historical substance, not just a souvenir-making session." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Suzani embroidery workshop worth it in Bukhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a genuine traditional craft with real historical substance." } },
                ] },
            };

        case "is-sarmish-soy-petroglyphs-tour-worth-it-bukhara":
            return {
                title: "Is the Sarmish-Soy Gorge Petroglyphs Day Trip Worth It from Bukhara?",
                description: "An honest look at the Sarmish-Soy Gorge petroglyphs day trip from Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg",
                sections: [
                    { title: "The Short Answer", content: "Sarmish-Soy Gorge holds thousands of ancient rock carvings dating back millennia, giving a genuinely different, much older historical layer than Bukhara's Islamic-era architecture, worth it for travelers interested in prehistoric history.", tourCard: { slug: "bukhara-sarmish-soy-gorge-petroglyphs-day-trip", title: "Bukhara: Sarmish-Soy Gorge Petroglyphs Day Trip", description: "A day trip to the Sarmish-Soy Gorge petroglyphs from Bukhara.", price: "From $195", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg" } },
                    { title: "Practical Tips", content: "Wear sturdy shoes and bring water — the gorge involves walking over uneven rocky terrain under open sun." },
                ],
                faqs: [
                    { q: "Is the Sarmish-Soy Gorge petroglyphs day trip worth it from Bukhara?", a: "Yes, for travelers interested in prehistoric history, a genuinely older layer than the city's Islamic-era architecture." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Sarmish-Soy petroglyphs day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely older prehistoric history layer than the city's Islamic architecture." } },
                ] },
            };

        case "is-laghman-cooking-class-worth-it-bukhara":
            return {
                title: "Is the Silk Road Laghman Cooking Class Worth It in Bukhara?",
                description: "An honest look at the Silk Road laghman cooking class with a local chef in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg",
                sections: [
                    { title: "The Short Answer", content: "Laghman, a hand-pulled noodle dish with Silk Road roots, is a genuinely different cooking skill from the city's more common plov and bread classes, worth it for travelers wanting to learn a distinct noodle-making technique rather than another rice or dough class.", tourCard: { slug: "bukhara-silk-road-laghman-cooking-class-with", title: "Bukhara: Silk Road Laghman Cooking Class with Local Chef", description: "A hand-pulled noodle laghman cooking class with a local chef in Bukhara.", price: "From $72", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg" } },
                    { title: "Practical Tips", content: "Hand-pulling noodles takes practice — don't be discouraged if your first attempts aren't perfectly even, it's part of learning the technique." },
                ],
                faqs: [
                    { q: "Is the laghman cooking class worth it in Bukhara?", a: "Yes, for learning a genuinely distinct hand-pulled noodle technique, different from the city's more common plov and bread classes." },
                ],
            };

        case "is-somsa-home-cooking-class-worth-it-bukhara":
            return {
                title: "Is the Uzbek Family Home Cooking Class for Somsa Worth It in Bukhara?",
                description: "An honest look at the Uzbek family home cooking class for somsa in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg",
                sections: [
                    { title: "The Short Answer", content: "Learning to make somsa in a real family home rather than a dedicated cooking-school kitchen gives a genuinely more personal, domestic setting, worth it specifically for travelers wanting authentic home-style cooking context rather than a studio-style class.", tourCard: { slug: "bukhara-uzbek-family-home-cooking-class-somsa", title: "Bukhara: Uzbek Family Home Cooking Class Somsa", description: "A somsa cooking class held in a real Uzbek family home in Bukhara.", price: "From $111", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg" } },
                    { title: "Practical Tips", content: "Ask about the family's own recipe variations — home cooking classes often differ meaningfully from the standardized versions taught at cooking schools." },
                ],
                faqs: [
                    { q: "Is the somsa home cooking class worth it in Bukhara?", a: "Yes, for a genuinely more personal, authentic setting than a studio-style cooking class, learning real family recipe variations." },
                ],
            };

        case "is-great-silk-route-tour-worth-it-bukhara":
            return {
                title: "Is the Great Silk Route Small Group Tour Worth It in Bukhara?",
                description: "An honest look at the Great Silk Route small group tour in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg",
                sections: [
                    { title: "The Short Answer", content: "This small-group tour frames Bukhara's monuments specifically through its Silk Road trading history, worth it for travelers wanting that historical lens explained clearly rather than a generic highlights walk without a consistent narrative thread.", tourCard: { slug: "bukhara-great-silk-route-small-group-tour", title: "Bukhara: Great Silk Route small group tour", description: "A small-group tour of Bukhara framed around its Silk Road trading history.", price: "From $52", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg" } },
                    { title: "Practical Tips", content: "The small-group format keeps the guide's storytelling audible and personal — ask questions as you go rather than saving them for the end." },
                ],
                faqs: [
                    { q: "Is the Great Silk Route tour worth it in Bukhara?", a: "Yes, for travelers wanting the city's Silk Road trading history explained as a clear, consistent narrative rather than a generic highlights walk." },
                ],
            };

        case "is-living-eastern-tale-tour-worth-it-bukhara":
            return {
                title: "Is Living Eastern Tale: A Journey Through Time Worth It in Bukhara?",
                description: "An honest look at the Living Eastern Tale journey through time tour in Bukhara.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour leans into storytelling and atmosphere, framing Bukhara's sights as chapters in a larger narrative rather than a straightforward monument checklist, worth it for travelers who respond better to narrative-driven tours than fact-heavy ones.", tourCard: { slug: "bukhara-a-journey-through-the-ages", title: "Bukhara: A Journey Through the Ages", description: "A narrative-driven tour of Bukhara framed as a journey through time.", price: "From $169", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51657c2bc8689e555ce5091917582319487e6b5091280f998876e7cea2116db.jpg" } },
                    { title: "Practical Tips", content: "This suits travelers who want atmosphere and storytelling over a dense, fact-heavy itinerary — pick a standard walking tour instead if you want more hard history packed in." },
                ],
                faqs: [
                    { q: "Is the Living Eastern Tale tour worth it in Bukhara?", a: "Yes, for travelers who respond better to narrative, atmosphere-driven storytelling than a fact-heavy monument checklist." },
                ],
            };

        case "is-manti-cooking-tea-ceremony-worth-it-khiva":
            return {
                title: "Is the Manti Cooking Class with Tea Ceremony & Souvenirs Worth It?",
                description: "An honest look at the manti cooking class with a tea ceremony and souvenirs in Khiva.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/47269e995dc56fdb960197825f17cbcba6fbee9f3fd5a6d30253615aac16908c.jpg",
                sections: [
                    { title: "The Short Answer", content: "Learning to make manti, steamed dumplings common across Central Asia, paired with a traditional tea ceremony and souvenirs included, gives this class genuine added value beyond a basic cooking lesson.", tourCard: { slug: "khiva-manti-cooking-class-with-tea-ceremony", title: "Khiva: Manti Cooking Class with Tea Ceremony & Souvenirs", description: "A hands-on manti cooking class paired with a tea ceremony and souvenirs.", price: "From $65", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/47269e995dc56fdb960197825f17cbcba6fbee9f3fd5a6d30253615aac16908c.jpg" } },
                    { title: "Practical Tips", content: "Come hungry — the class ends with eating the manti you helped make, alongside the tea ceremony." },
                ],
                faqs: [
                    { q: "Is the manti cooking class with tea ceremony worth it in Khiva?", a: "Yes, the tea ceremony and souvenirs give this genuine added value beyond a basic cooking lesson." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the manti cooking class worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the tea ceremony and souvenirs add genuine value beyond a basic cooking lesson." } },
                ] },
            };

        case "is-barak-dumpling-cooking-class-worth-it-khiva":
            return {
                title: "Is the Traditional Barak Dumpling Cooking Class Worth It in Khiva?",
                description: "An honest look at the traditional Barak dumpling cooking class in Khiva.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bec9adb64bf8c2b7b56c090f7f1e515de705268de6903fa63d50929dcc1eb2c0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Barak is a distinct regional Khorezm dumpling, different from manti in both shape and filling, and this class teaches the specific technique, worth it for travelers who've already tried manti and want to compare the region's dumpling varieties.", tourCard: { slug: "khiva-traditional-barak-dumpling-cooking-class", title: "Khiva: Traditional Barak Dumpling Cooking Class", description: "A hands-on traditional Barak dumpling cooking class.", price: "From $65", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bec9adb64bf8c2b7b56c090f7f1e515de705268de6903fa63d50929dcc1eb2c0.jpg" } },
                    { title: "Practical Tips", content: "If you want to compare dumpling styles, pair this with a separate manti class on another day rather than booking both the same day." },
                ],
                faqs: [
                    { q: "Is the Barak dumpling cooking class worth it in Khiva?", a: "Yes, it teaches a genuinely distinct regional dumpling technique, different from manti in shape and filling." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Barak dumpling cooking class worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it teaches a genuinely distinct regional dumpling technique." } },
                ] },
            };

        case "is-rooftop-cooking-class-dinner-worth-it-khiva":
            return {
                title: "Is the Rooftop Cooking Class with Dinner and Tea Ceremony Worth It?",
                description: "An honest look at the rooftop cooking class with dinner and tea ceremony in Khiva.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6bf8345e512508eaa314dc80d4f32a9464b57e88b0fd2e5499727075977f7da5.jpg",
                sections: [
                    { title: "The Short Answer", content: "A rooftop setting over Khiva's old city gives this cooking class genuinely striking views alongside the hands-on cooking and tea ceremony, worth it for travelers who want atmosphere as much as the culinary lesson itself.", tourCard: { slug: "khiva-rooftop-cooking-class-with-dinner-and-tea", title: "Khiva: Rooftop Cooking Class with Dinner and Tea Ceremony", description: "A rooftop cooking class with dinner and a tea ceremony overlooking the old city.", price: "From $117", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6bf8345e512508eaa314dc80d4f32a9464b57e88b0fd2e5499727075977f7da5.jpg" } },
                    { title: "Practical Tips", content: "Book a slot timed for sunset if possible, to get the best rooftop views over the old city skyline." },
                ],
                faqs: [
                    { q: "Is the rooftop cooking class with dinner worth it in Khiva?", a: "Yes, the rooftop setting gives genuinely striking views alongside the cooking lesson and tea ceremony." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the rooftop cooking class worth it in Khiva?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuinely striking rooftop views alongside the cooking lesson." } },
                ] },
            };

        case "is-kunya-urgench-day-tour-worth-it-khiva":
            return {
                title: "Is the Kunya Urgench Day Tour Worth It from Khiva?",
                description: "An honest look at the Kunya Urgench day tour from Khiva.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4aa92ae256775a75c829901b2e98bf8559ffe9ab85016a644ad7f27dda4d5e5d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kunya Urgench, a UNESCO-listed former capital just across the border in Turkmenistan, holds genuinely significant medieval Islamic monuments distinct from Khiva's own architecture, worth it for travelers with a deep interest in Silk Road history and the logistics to cross the border.", tourCard: { slug: "kunya-urgench-day-tour-from-uzbekistan", title: "Kunya Urgench Day Tour from Uzbekistan", description: "A day tour to the UNESCO-listed Kunya Urgench site from Uzbekistan.", price: "From $468", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4aa92ae256775a75c829901b2e98bf8559ffe9ab85016a644ad7f27dda4d5e5d.jpg" } },
                    { title: "Practical Tips", content: "Confirm visa and border-crossing requirements for Turkmenistan well in advance — this is a genuine international crossing, not a simple day trip." },
                ],
                faqs: [
                    { q: "Is the Kunya Urgench day tour worth it from Khiva?", a: "Yes, for travelers with a deep interest in Silk Road history and the logistics to handle a Turkmenistan border crossing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Kunya Urgench day tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travelers with a deep Silk Road history interest and the logistics for a border crossing." } },
                ] },
            };

        default:
            return null;
    }
}
