import { CityInfoData } from './cityInfoContent';

export function getAzerbaijanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-gobustan-tour-baku":
            return {
                title: "Which Is the Best Gobustan Tour from Baku?",
                seoTitle: "Best Gobustan Tour from Baku 2026 | Honest Comparison",
                description: "Compare real Gobustan day trips from Baku — from a $3 budget guided tour to combos with Absheron's mud volcanoes and fire sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-gobustan.jpg",
                sections: [
                    { title: "The Short Answer", content: "Gobustan's prehistoric rock carvings are almost always paired with Absheron's mud volcanoes and fire sites in the same day trip — the differences are mainly price tier and exactly which extra stops are bundled in.", tourCard: { slug: "baku-absheron-entry-ticket", title: "Baku: Gobustan/Absheron guided tour with lunch and tickets", description: "The lowest-priced Gobustan and Absheron day trip with lunch included.", price: "From $3", duration: "7.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-gobustan.jpg" } },
                    { title: "Cheapest: Guided Tour with Lunch", content: "At $3, this is the lowest-priced way to see Gobustan and Absheron together, with lunch and entrance tickets included.", tourCard: { slug: "baku-absheron-entry-ticket", title: "Baku: Gobustan/Absheron guided tour with lunch and tickets", description: "Budget Gobustan/Absheron day trip with lunch and tickets.", price: "From $3", duration: "7.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-gobustan.jpg" } },
                    { title: "Best with Mud Volcanoes: Gobustan & Absheron Guided Tour", content: "This version explicitly adds the mud volcano stop and fire sites to the standard Gobustan visit.", tourCard: { slug: "baku-absheron-guided-tour", title: "Baku: Gobustan & Absheron with Mud Volcanoes & Fire", description: "Gobustan paired with mud volcanoes and fire sites.", price: "From $7", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-gobustan.jpg" } },
                    { title: "Best for Fire Mountain: Gobustan, Mud Volcanoes & Fire Mountain Tour", content: "This adds Yanar Dag's naturally burning hillside to the Gobustan and mud volcano combo, for a fuller day covering Azerbaijan's geological oddities.", tourCard: { slug: "baku-gobustan-mud-volcanoes-fire-mountain-tour", title: "Baku: Gobustan, Mud Volcanoes & Fire Mountain Tour", description: "Gobustan, mud volcanoes, and the Yanar Dag fire mountain in one trip.", price: "From $15", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-gobustan.jpg" } },
                    { title: "Practical Tips", content: "Gobustan's rock carvings date back thousands of years and are a UNESCO site — bring water and sun protection since there's little shade at the open-air carving fields. Mud volcano visits can be muddy underfoot, so wear shoes you don't mind getting dirty." }
                ],
                faqs: [
                    { q: "What is the best Gobustan tour from Baku?", a: "A combo tour covering Gobustan, Absheron's mud volcanoes, and fire sites suits most visitors." },
                    { q: "Is Gobustan worth visiting?", a: "Yes, for its UNESCO-listed prehistoric rock carvings, usually combined with the nearby mud volcanoes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gobustan tour from Baku?", "acceptedAnswer": { "@type": "Answer", "text": "A combo tour covering Gobustan, Absheron's mud volcanoes, and fire sites." } },
                    { "@type": "Question", "name": "Is Gobustan worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for its UNESCO-listed prehistoric rock carvings." } }
                ] },
            };

        case "best-old-city-walking-tour-baku":
            return {
                title: "Which Is the Best Old City Walking Tour in Baku?",
                seoTitle: "Best Old City Walking Tour Baku 2026 | Honest Comparison",
                description: "Compare real Icherisheher (Old City) walking tours in Baku — from a $3 sunset funicular walk to a focused historical walking tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-oldcity.jpg",
                sections: [
                    { title: "The Short Answer", content: "Baku's walled Old City (Icherisheher) is compact and walkable, and tours here differ mainly in timing (sunset vs. daytime) and whether the funicular ride up to Highland Park is included.", tourCard: { slug: "baku-sunset-walking-tour-with-funicular-ride", title: "Baku Sunset Walking Tour with Funicular Ride", description: "A sunset walking tour through the Old City with a funicular ride.", price: "From $3", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-oldcity.jpg" } },
                    { title: "Cheapest: Sunset Walking Tour with Funicular", content: "At $3, this covers the Old City at sunset plus a funicular ride for panoramic views, the best value option.", tourCard: { slug: "baku-sunset-walking-tour-with-funicular-ride", title: "Baku Sunset Walking Tour with Funicular Ride", description: "Budget sunset walk with funicular included.", price: "From $3", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-oldcity.jpg" } },
                    { title: "Best for History: Icherisheher Historical Walking Tour", content: "This version focuses specifically on the Old City's history and architecture with a dedicated guide, rather than being combined with sunset views.", tourCard: { slug: "icherisheher-historical-walking-tour", title: "Icherisheher Historical Walking Tour", description: "A history-focused walking tour of Baku's Old City.", price: "From $17", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-oldcity.jpg" } },
                    { title: "Practical Tips", content: "The Old City's narrow lanes are easy to get lost in without a guide — a short guided walk is genuinely useful here beyond just the history, for orientation alone." }
                ],
                faqs: [
                    { q: "What is the best Old City walking tour in Baku?", a: "A sunset tour with funicular ride is the best value; a dedicated historical walk suits those wanting more depth." },
                    { q: "Is Baku's Old City walkable without a tour?", a: "Yes, but its narrow lanes can be confusing — a short guided walk helps with orientation." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Old City walking tour in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "A sunset tour with funicular ride is the best value." } },
                    { "@type": "Question", "name": "Is Baku's Old City walkable without a tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but a guide helps with orientation in its narrow lanes." } }
                ] },
            };

        case "best-ateshgah-yanar-dag-tour-baku":
            return {
                title: "Which Is the Best Ateshgah & Yanar Dag Fire Tour in Baku?",
                seoTitle: "Best Ateshgah Yanar Dag Fire Tour Baku 2026 | Comparison",
                description: "Compare real Ateshgah Fire Temple and Yanar Dag burning mountain tours from Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-firetemple.jpg",
                sections: [
                    { title: "The Short Answer", content: "Ateshgah (a fire-worshippers' temple) and Yanar Dag (a naturally, continuously burning hillside) are Baku's two signature 'land of fire' sites, usually visited together on one tour.", tourCard: { slug: "baku-yanar-spiritual-tour", title: "From Baku: Ateshgah Fire Temple and Yanar Dag Tour", description: "A dedicated tour covering both the fire temple and burning mountain.", price: "From $72", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-firetemple.jpg" } },
                    { title: "Practical Tips", content: "Yanar Dag has been burning continuously for decades due to a natural gas leak — it's most dramatic to see after dark, so check if your tour includes an evening slot." }
                ],
                faqs: [
                    { q: "What is Yanar Dag?", a: "A hillside in Azerbaijan that burns continuously due to a natural underground gas leak." },
                    { q: "Are Ateshgah and Yanar Dag visited together?", a: "Usually yes, as they're both part of Baku's 'land of fire' theme and relatively close to each other." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Yanar Dag?", "acceptedAnswer": { "@type": "Answer", "text": "A hillside that burns continuously due to a natural gas leak." } },
                    { "@type": "Question", "name": "Are Ateshgah and Yanar Dag visited together?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, on the same tour." } }
                ] },
            };

        case "best-caspian-sea-boat-tour-baku":
            return {
                title: "Which Is the Best Caspian Sea Boat Tour in Baku?",
                seoTitle: "Best Caspian Sea Boat Tour Baku 2026 | Honest Comparison",
                description: "Compare real Caspian Sea boat tours from Baku — standard cruises versus a sunset cruise with Flame Towers views.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-caspian.jpg",
                sections: [
                    { title: "The Short Answer", content: "A Caspian Sea boat tour gives you Baku's skyline — including the Flame Towers — from the water, with the main choice being standard daytime cruise versus sunset timing.", tourCard: { slug: "baku-caspian-sea-cruise-tour-with-skyline-views", title: "Baku: Caspian Sea Cruise Tour with Skyline Views & Entry Fee", description: "A standard Caspian Sea cruise with skyline views.", price: "From $46", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-caspian.jpg" } },
                    { title: "Best for Sunset: Sunset Boat Cruise with Flame Towers", content: "This timed-for-sunset version is the better pick if you want the Flame Towers lit up against an evening sky rather than daytime views.", tourCard: { slug: "baku-sunset-boat-cruise-with-flame-towers-skyline", title: "Baku: Sunset Boat Cruise with Flame Towers & Skyline Views", description: "A sunset cruise timed for Flame Towers views.", price: "From $59", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-caspian.jpg" } },
                    { title: "Practical Tips", content: "The Caspian is the world's largest inland body of water — these cruises stay close to the Baku Boulevard coastline rather than venturing far out, so don't expect open-ocean scenery." }
                ],
                faqs: [
                    { q: "What is the best Caspian Sea boat tour in Baku?", a: "A sunset cruise for the best Flame Towers views; a standard daytime cruise otherwise." },
                    { q: "Do Caspian Sea cruises go far from shore?", a: "No, they stay close to the Baku Boulevard coastline for skyline views." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Caspian Sea boat tour in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "A sunset cruise for the best Flame Towers views." } },
                    { "@type": "Question", "name": "Do these cruises go far from shore?", "acceptedAnswer": { "@type": "Answer", "text": "No, they stay close to the Baku Boulevard coastline." } }
                ] },
            };

        case "best-city-tour-baku":
            return {
                title: "Which Is the Best City Tour in Baku?",
                seoTitle: "Best City Tour Baku 2026 | Honest Comparison",
                description: "Compare real Baku city tours — day, night, and wine-tasting combo versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-citytour.jpg",
                sections: [
                    { title: "The Short Answer", content: "Baku city tours split mainly between day and night versions, with many bundling in a wine tasting or funicular ride — the right pick depends on whether you want the city's modern Flame Towers lighting (best at night) or a more complete daytime sightseeing loop.", tourCard: { slug: "baku-highlights-day-night-city-tour-with-wine", title: "Baku Highlights: Day & Night City Tour with Wine Tasting", description: "A combined day and night city tour with wine tasting.", price: "From $13", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-citytour.jpg" } },
                    { title: "Cheapest: Day & Night Combo with Wine Tasting", content: "At $13, this covers both day and night city views plus a wine tasting, the best value option.", tourCard: { slug: "baku-highlights-day-night-city-tour-with-wine", title: "Baku Highlights: Day & Night City Tour with Wine Tasting", description: "Budget combined day/night city tour.", price: "From $13", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-citytour.jpg" } },
                    { title: "Best for Evening Views: Evening City Tour with Lights", content: "This version focuses entirely on the evening, when Baku's modern skyline and the Flame Towers are lit up — a genuinely different visual experience from the daytime city.", tourCard: { slug: "baku-evening-city-tour-with-lights-panoramic-views", title: "Baku: Evening City Tour with Lights & Panoramic Views", description: "An evening-only tour focused on Baku's illuminated skyline.", price: "From $24", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-citytour.jpg" } },
                    { title: "Best with Wine & Funicular: Old & Modern City Tour", content: "This version pairs both the old and modern parts of the city with a wine tasting and funicular ride, a well-rounded single-tour option.", tourCard: { slug: "baku-wine-guided-tour", title: "Baku: Old & Modern City Tour, Wine Tasting & Funicular Ride", description: "Old and modern Baku combined with wine tasting and a funicular ride.", price: "From $24", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-citytour.jpg" } },
                    { title: "Practical Tips", content: "Baku's Flame Towers change color at night as part of a programmed light show — timing a city tour for after dark is worth it specifically for this." }
                ],
                faqs: [
                    { q: "What is the best city tour in Baku?", a: "A combined day/night tour with wine tasting gives the best overview; an evening-only tour is best for skyline photography." },
                    { q: "When do the Flame Towers light up?", a: "After dark, as part of a programmed color-changing light show." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "A combined day/night tour with wine tasting gives the best overview." } },
                    { "@type": "Question", "name": "When do the Flame Towers light up?", "acceptedAnswer": { "@type": "Answer", "text": "After dark, as part of a programmed light show." } }
                ] },
            };

        case "best-highland-park-tour-baku":
            return {
                title: "Which Is the Best Highland Park Tour in Baku?",
                seoTitle: "Best Highland Park Tour Baku 2026 | Honest Comparison",
                description: "Compare real Highland Park tours in Baku — evening viewpoint tours versus a dedicated panoramic photoshoot stop.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-highland.jpg",
                sections: [
                    { title: "The Short Answer", content: "Highland Park sits above the Old City with the best panoramic view over Baku Bay and the Flame Towers — most visits are either folded into an evening city tour or done as a dedicated photo stop.", tourCard: { slug: "baku-evening-city-tour-with-highland-park", title: "Baku: Evening City Tour with Highland Park Viewpoint", description: "An evening city tour centered on the Highland Park viewpoint.", price: "From $25", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-highland.jpg" } },
                    { title: "Practical Tips", content: "The funicular is the easiest way up to Highland Park rather than walking the steep streets — most tours include it." }
                ],
                faqs: [
                    { q: "What is Highland Park in Baku known for?", a: "Its panoramic viewpoint over Baku Bay and the Flame Towers." },
                    { q: "How do you get to Highland Park?", a: "Most visitors take the funicular rather than walking the steep streets up." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Highland Park known for?", "acceptedAnswer": { "@type": "Answer", "text": "Its panoramic viewpoint over Baku Bay and the Flame Towers." } },
                    { "@type": "Question", "name": "How do you get there?", "acceptedAnswer": { "@type": "Answer", "text": "Most visitors take the funicular." } }
                ] },
            };

        case "is-maidens-tower-tour-worth-it-baku":
            return {
                title: "Is Baku's Maiden's Tower & Shirvanshah Palace Tour Worth It?",
                seoTitle: "Maiden's Tower Shirvanshah Palace Tour Baku 2026 | Review",
                description: "An honest look at Baku's Maiden's Tower, Shirvanshah Palace, and Secret Underground Bath tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-maidens.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour bundles three of Baku's most significant historic monuments — the UNESCO-listed Maiden's Tower, the Shirvanshah Palace, and a lesser-known underground bath — into one guided walk through the Old Town.", tourCard: { slug: "baku-maidens-tower-shirvanshah-palace-and-secret", title: "Baku: Maiden's Tower, Shirvanshah Palace and Secret Underground Bath + Old Town", description: "A guided tour of three major Old Town historic monuments.", price: "From $43", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-maidens.jpg" } },
                    { title: "Practical Tips", content: "Worth it specifically for history-focused travellers — the underground bath stop is a genuinely less-visited site most self-guided visitors would miss entirely." }
                ],
                faqs: [
                    { q: "Is the Maiden's Tower worth visiting?", a: "Yes, it's a UNESCO-listed landmark and one of Baku's most recognizable monuments." },
                    { q: "What's included in this tour?", a: "Maiden's Tower, Shirvanshah Palace, a secret underground bath, and the Old Town." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Maiden's Tower worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a UNESCO-listed landmark." } },
                    { "@type": "Question", "name": "What's included in this tour?", "acceptedAnswer": { "@type": "Answer", "text": "Maiden's Tower, Shirvanshah Palace, an underground bath, and the Old Town." } }
                ] },
            };

        case "is-shamakhi-day-trip-worth-it-baku":
            return {
                title: "Is the Shamakhi Day Trip from Baku Worth It?",
                seoTitle: "Shamakhi Day Trip from Baku 2026 | Honest Review",
                description: "An honest look at the Shamakhi Nature & Historic tour with Wine Tasting from Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-shamakhi.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shamakhi, once Azerbaijan's ancient capital, pairs historic sites with the surrounding wine-growing countryside — this tour combines both with a tasting included.", tourCard: { slug: "from-baku-shamakhi-nature-historic-tour-with-wine", title: "From Baku: Shamakhi Nature & Historic tour with Wine Tasting", description: "A day trip combining Shamakhi's history and wine region.", price: "From $36", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-shamakhi.jpg" } },
                    { title: "Practical Tips", content: "Worth it for travellers who want a slower-paced countryside day away from Baku's city sights, rather than another monument-heavy itinerary." }
                ],
                faqs: [
                    { q: "What is Shamakhi known for?", a: "Being Azerbaijan's historic ancient capital and part of its wine-growing region." },
                    { q: "Is the Shamakhi day trip worth it?", a: "Yes, for a change of pace from Baku's city sights, combining history and countryside wine tasting." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Shamakhi known for?", "acceptedAnswer": { "@type": "Answer", "text": "Being Azerbaijan's historic ancient capital." } },
                    { "@type": "Question", "name": "Is it worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a countryside change of pace with wine tasting." } }
                ] },
            };

        case "is-azerbaijan-multiday-tour-worth-it-baku":
            return {
                title: "Is the 4-Day Azerbaijan Tour from Baku Worth It?",
                seoTitle: "4-Day Azerbaijan Tour from Baku 2026 | Honest Review",
                description: "An honest look at the 4-Day Azerbaijan Tour covering Baku, a Caspian cruise, Absheron, and Gabala.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-multiday.jpg",
                sections: [
                    { title: "The Short Answer", content: "This is the most comprehensive multi-region Azerbaijan itinerary available, combining Baku's city sights, a Caspian Sea cruise, the Absheron peninsula, and a trip out to Gabala in the mountains — covering ground a single day trip can't.", tourCard: { slug: "4-day-azerbaijan-tour-baku-cruise-absheron-gabala", title: "4-Day Azerbaijan Tour: Baku, Cruise, Absheron & Gabala", description: "A 4-day multi-region tour of Azerbaijan.", price: "From $234", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-multiday.jpg" } },
                    { title: "Practical Tips", content: "Worth it if you have the full 4 days and want to see beyond Baku itself — Gabala in particular offers a very different mountain landscape from the capital." }
                ],
                faqs: [
                    { q: "Is the 4-day Azerbaijan tour worth it?", a: "Yes if you have the time — it covers Baku, a Caspian cruise, Absheron, and Gabala's mountain scenery in one trip." },
                    { q: "What does the 4-day tour include?", a: "Baku city sights, a Caspian Sea cruise, the Absheron peninsula, and a trip to Gabala." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the 4-day Azerbaijan tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes if you have the time to see beyond Baku." } },
                    { "@type": "Question", "name": "What does it include?", "acceptedAnswer": { "@type": "Answer", "text": "Baku, a Caspian cruise, Absheron, and Gabala." } }
                ] },
            };

        case "baku-travel-guide-2026":
            return {
                title: "Baku Travel Guide 2026",
                description: "Azerbaijan's capital mixes a UNESCO-listed walled Old City with futuristic Flame Towers architecture and nearby fire-themed natural wonders — here's what first-timers need to know.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-guide.jpg",
                sections: [
                    { title: "Why Visit Baku", content: "Baku is a striking mix of old and new: the walled Icherisheher Old City sits minutes from the futuristic Flame Towers skyline. Day trips reach Gobustan's prehistoric carvings, Absheron's mud volcanoes, and the naturally burning Yanar Dag hillside." },
                    { title: "Getting Around", content: "Baku has a metro covering central areas, and ride-hailing apps are widely used for anything further out. Most day trips to Gobustan or Shamakhi are easiest booked as organized tours." }
                ],
                faqs: [
                    { q: "Is Baku worth visiting?", a: "Yes, for its Old City, Flame Towers, and nearby fire-themed natural sites." },
                    { q: "How do I get around Baku?", a: "Metro for central areas, ride-hailing apps for everything else." }
                ],
            };

        case "best-time-to-visit-baku":
            return {
                title: "Best Time to Visit Baku",
                description: "Baku has a distinct Caspian climate with real seasons — timing affects both weather and how comfortable outdoor day trips will be.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-weather.jpg",
                sections: [
                    { title: "Seasonal Overview", content: "Spring (April-June) and autumn (September-October) offer the most comfortable weather for sightseeing and outdoor day trips. Summer (July-August) can be hot, while winter is cool and sometimes windy — Baku is known as the 'City of Winds'." }
                ],
                faqs: [
                    { q: "What is the best time to visit Baku?", a: "Spring or autumn for the most comfortable weather." },
                    { q: "Is Baku windy?", a: "Yes, it's nicknamed the 'City of Winds' due to frequent strong winds, especially in winter." }
                ],
            };

        case "baku-1-day-itinerary":
            return {
                title: "Baku 1-Day Itinerary",
                description: "A realistic one-day plan for Baku if you don't have time for a Gobustan or Shamakhi day trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-itinerary.jpg",
                sections: [
                    { title: "Morning", content: "Start in the Old City (Icherisheher), visiting Maiden's Tower and the Shirvanshah Palace." },
                    { title: "Afternoon", content: "Take the funicular up to Highland Park for panoramic views, then walk the Baku Boulevard along the Caspian waterfront." },
                    { title: "Evening", content: "Finish with an evening city tour or boat cruise to see the Flame Towers lit up after dark." }
                ],
                faqs: [
                    { q: "Can Baku be seen in one day?", a: "The central Old City and modern landmarks, yes — day trips to Gobustan or Shamakhi need separate days." },
                    { q: "What's a must-do in Baku in one day?", a: "The Old City, Highland Park viewpoint, and the Flame Towers at night." }
                ],
            };

        case "azerbaijan-visa-guide-for-tourists":
            return {
                title: "Azerbaijan Visa Guide for Tourists (Baku)",
                description: "Visa requirements for visiting Baku and Azerbaijan.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-visa.jpg",
                sections: [
                    { title: "Visa Requirements", content: "Azerbaijan offers an e-visa system (ASAN Visa) for many nationalities, typically processed online before travel. Check Azerbaijan's official immigration requirements for your specific nationality before booking, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Baku/Azerbaijan?", a: "Many nationalities can apply for an e-visa online; verify current requirements for your passport before travel." }
                ],
            };

        case "is-baku-safe":
            return {
                title: "Is Baku Safe for Tourists?",
                description: "An honest look at safety in Baku for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-safety.jpg",
                sections: [
                    { title: "The Short Answer", content: "Baku is generally considered very safe for tourists, with low rates of violent crime. Standard city-travel precautions (watching belongings in crowded areas, using licensed taxis/ride-hailing) are sufficient." }
                ],
                faqs: [
                    { q: "Is Baku safe for tourists?", a: "Yes, generally very safe with low crime rates — standard city precautions apply." }
                ],
            };

        case "baku-food-guide":
            return {
                title: "Baku Food Guide",
                description: "What to eat in Baku, from classic Azerbaijani dishes to tea culture.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-food.jpg",
                sections: [
                    { title: "Local Specialties", content: "Try plov (saffron rice dishes), dolma, and Baku's strong tea culture — tea houses are a genuine social institution here, not just a tourist stop." }
                ],
                faqs: [
                    { q: "What food is Baku known for?", a: "Plov, dolma, and a strong local tea-house culture." }
                ],
            };

        case "baku-currency-guide":
            return {
                title: "Baku Currency Guide",
                description: "How to handle money in Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-currency.jpg",
                sections: [
                    { title: "Currency Basics", content: "Azerbaijani Manat (AZN) is the local currency. Cards are widely accepted in central Baku, though smaller vendors and taxis outside the city may prefer cash." }
                ],
                faqs: [
                    { q: "What currency does Baku use?", a: "Azerbaijani Manat (AZN)." },
                    { q: "Are cards accepted in Baku?", a: "Yes widely in central areas, though cash is useful for smaller vendors and taxis outside the city." }
                ],
            };

        case "baku-public-transport-guide":
            return {
                title: "Baku Public Transport Guide",
                description: "How to get around Baku without a rental car.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-transport.jpg",
                sections: [
                    { title: "Getting Around", content: "Baku has a metro system covering the central city, plus the BakuCard for buses and metro combined. Ride-hailing apps are widely used for anything the metro doesn't reach directly." }
                ],
                faqs: [
                    { q: "Does Baku have a metro?", a: "Yes, covering the central city, paid via the BakuCard which also works on buses." }
                ],
            };

        case "baku-shopping-guide":
            return {
                title: "Baku Shopping Guide",
                description: "Where to shop in Baku, from traditional carpets to modern malls.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-shopping.jpg",
                sections: [
                    { title: "Where to Shop", content: "The Old City has traditional carpet shops and souvenirs, while Nizami Street and modern malls cover international brands. Carpet shopping specifically benefits from going with a guide who can help assess authenticity and pricing." }
                ],
                faqs: [
                    { q: "What is Baku known for shopping-wise?", a: "Traditional Azerbaijani carpets in the Old City, plus modern malls on Nizami Street." }
                ],
            };

        case "baku-nightlife-guide":
            return {
                title: "Baku Nightlife Guide",
                description: "What Baku's evening and nightlife scene looks like.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-nightlife.jpg",
                sections: [
                    { title: "What to Expect", content: "Baku has a genuinely active nightlife by regional standards, with bars and lounges along the Boulevard and in the city center, plus the Flame Towers' nightly light show as a free evening draw." }
                ],
                faqs: [
                    { q: "Does Baku have nightlife?", a: "Yes, bars and lounges along the Boulevard and city center, plus the free nightly Flame Towers light show." }
                ],
            };

        case "baku-weather-guide":
            return {
                title: "Baku Weather Guide",
                description: "What to expect from Baku's climate across the year.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-baku-weather2.jpg",
                sections: [
                    { title: "Climate Overview", content: "Baku has a semi-arid climate with hot, dry summers (up to 35°C) and mild, sometimes windy winters (around 4-9°C). Rain is light year-round, with slightly more in autumn and winter." }
                ],
                faqs: [
                    { q: "What is the weather like in Baku?", a: "Hot, dry summers and mild, windy winters, with light rainfall year-round." }
                ],
            };

        case "best-old-town-tour-sheki":
            return {
                title: "Which Is the Best Old Town Tour in Sheki?",
                seoTitle: "Best Sheki Old Town Tour 2026 | Honest Comparison",
                description: "Compare real Sheki Old Town tours — from a focused walking tour to a UNESCO heritage and hiking combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9465a8f27634e0043ccfd2ece808ec6e8e2ac831eee20baead6484e24a63ba4.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Sheki's UNESCO-listed old town, including the famous Khan's Palace, can be seen with a focused walking tour or extended with hiking into the surrounding hills.", tourCard: { slug: "from-sheki-sheki-old-town-walking-tour", title: "From Sheki: Sheki Old Town Walking Tour", description: "A focused walking tour of Sheki's UNESCO-listed old town.", price: "From $71", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9465a8f27634e0043ccfd2ece808ec6e8e2ac831eee20baead6484e24a63ba4.jpeg" } },
                    { title: "Best with Hiking: UNESCO Heritage and Hiking Tour", content: "This extends the old town visit into a guided hike through the surrounding hills, good for travellers who want more than a walking tour.", tourCard: { slug: "sheki-unesco-heritage-and-hiking-tour-with-guide", title: "Sheki: UNESCO Heritage and Hiking Tour with Guide", description: "The old town combined with a guided hike.", price: "From $117", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be37b92d386fdedf6cfbe3e53632fffe635e8b06049088cef173e960ea1904f9.jpg" } },
                    { title: "Practical Tips", content: "The Khan's Palace's stained-glass shebeke windows (made without glue or nails) are a highlight worth timing for good natural light, since they're most striking with sun coming through them." }
                ],
                faqs: [
                    { q: "What is the best old town tour in Sheki?", a: "A focused walking tour suits most visitors; add hiking for a more active day." },
                    { q: "Is Sheki's old town a UNESCO site?", a: "Yes, including the Khan's Palace, known for its stained-glass shebeke windows." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best old town tour in Sheki?", "acceptedAnswer": { "@type": "Answer", "text": "A focused walking tour suits most visitors." } },
                    { "@type": "Question", "name": "Is it a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, including the Khan's Palace." } }
                ] },
            };

        case "best-day-trip-from-baku-sheki":
            return {
                title: "Which Is the Best Day Trip to Sheki from Baku?",
                seoTitle: "Best Sheki Day Trip from Baku 2026 | Comparison",
                description: "Compare real day trips to Sheki from Baku — from a 4-region tour via Shamakhi and Gabala to a focused Sheki and Kish village trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f700c4a27cefe085bf2f2b399903288a3822258df576057624a18f4c338f2a70.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Sheki is far enough from Baku (about 4-5 hours each way) that most day trips bundle in several other regions along the way, since the journey itself takes up a big chunk of the day.", tourCard: { slug: "from-baku-day-trip-to-shamakhi-ismayilli-gabala", title: "From Baku: Day Trip to Shamakhi, Ismayilli, Gabala & Sheki", description: "A 4-region day trip to Sheki via Shamakhi, Ismayilli, and Gabala.", price: "From $117", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f700c4a27cefe085bf2f2b399903288a3822258df576057624a18f4c338f2a70.jpeg" } },
                    { title: "Best Focused Option: Sheki, Shamakhi & Kish Day Trip", content: "A slightly more focused version of the long day trip, centering on Sheki and Kish village rather than spreading across four regions.", tourCard: { slug: "from-baku-sheki-shamakhi-and-kish-day-trip", title: "From Baku: Sheki, Shamakhi, and Kish Day Trip", description: "A day trip focused on Sheki, Shamakhi, and Kish village.", price: "From $246", duration: "14 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/74b420f808aea116f82cd3760c79c995e3009adf15dcd0bdb14f6ea8cf61fef3.jpeg" } },
                    { title: "Practical Tips", content: "These are genuinely long days (12-14 hours round trip) — if you'd rather not spend most of the day in a vehicle, consider staying overnight in Sheki instead of a single-day round trip from Baku." }
                ],
                faqs: [
                    { q: "What is the best day trip to Sheki from Baku?", a: "A 4-region tour covers the most ground; a focused Sheki/Kish trip is simpler if you don't want to spread across four regions." },
                    { q: "How far is Sheki from Baku?", a: "About 4-5 hours each way, making it a long day trip or better as an overnight stay." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best day trip to Sheki from Baku?", "acceptedAnswer": { "@type": "Answer", "text": "A 4-region tour covers the most ground." } },
                    { "@type": "Question", "name": "How far is Sheki from Baku?", "acceptedAnswer": { "@type": "Answer", "text": "About 4-5 hours each way." } }
                ] },
            };

        case "is-sheki-overnight-tour-worth-it":
            return {
                title: "Is a 2-Day Sheki Mountain Village Overnight Tour Worth It?",
                seoTitle: "Sheki Overnight Tour 2026 | Honest Review",
                description: "An honest look at the 2-day Sheki mountain village overnight experience from Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8b8723cd44be15f403e38339640e8fcdb040d21dc66e3b630df5ddae7680e5a5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Given Sheki's distance from Baku, an overnight 2-day version genuinely beats a single long day trip — you get a relaxed evening in the mountain town rather than rushing back the same day.", tourCard: { slug: "from-baku-2-day-sheki-mountain-village-experience", title: "From Baku: 2-Day Sheki Mountain Village Experience", description: "An overnight 2-day Sheki experience from Baku.", price: "From $556", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8b8723cd44be15f403e38339640e8fcdb040d21dc66e3b630df5ddae7680e5a5.jpeg" } },
                    { title: "Practical Tips", content: "Check what accommodation is included — Sheki has a range from basic guesthouses to restored caravanserai hotels, and standards vary significantly between operators." }
                ],
                faqs: [
                    { q: "Is the 2-day Sheki overnight tour worth it?", a: "Yes, given the distance from Baku, an overnight stay is more relaxed than a single long day trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the 2-day Sheki tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, more relaxed than a single long day trip." } }
                ] },
            };

        case "sheki-travel-guide-2026":
            return {
                title: "Sheki Travel Guide 2026",
                description: "What visitors need to know about Sheki, Azerbaijan's UNESCO-listed mountain town.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9465a8f27634e0043ccfd2ece808ec6e8e2ac831eee20baead6484e24a63ba4.jpeg",
                sections: [
                    { title: "Why Visit", content: "Sheki is known for the UNESCO-listed Khan's Palace, traditional caravanserai architecture, and a cooler mountain climate — a genuine change of pace from Baku's coastal city feel." }
                ],
                faqs: [
                    { q: "Is Sheki worth visiting?", a: "Yes, for the Khan's Palace, caravanserai architecture, and mountain scenery." }
                ],
            };

        case "best-time-to-visit-sheki":
            return {
                title: "Best Time to Visit Sheki",
                description: "Sheki's mountain setting means a cooler, different climate than Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e9465a8f27634e0043ccfd2ece808ec6e8e2ac831eee20baead6484e24a63ba4.jpeg",
                sections: [
                    { title: "Weather Patterns", content: "Late spring through early autumn (May-September) is best, with milder temperatures than Baku given the elevation. Winters can be cold and occasionally snowy." }
                ],
                faqs: [
                    { q: "What is the best time to visit Sheki?", a: "May to September for milder mountain weather." }
                ],
            };

        case "best-gabala-tour-baku":
            return {
                title: "Which Is the Best Gabala Day Trip from Baku?",
                seoTitle: "Best Gabala Day Trip from Baku 2026 | Comparison",
                description: "Compare real Gabala day trips from Baku — a standard full-day tour versus a version adding Diri Baba's shrine, a winery, and the Gabala cable car.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9111dfef03569a1a7f559c71c63fe2d025dd2407217c6611a698757f80df155b.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Gabala, a mountain resort town, is reachable as a day trip from Baku, and tours differ mainly in whether they add the Diri Baba shrine, a local winery, and the Gabala cable car to the standard sightseeing.", tourCard: { slug: "baku-gabala-full-day-tour", title: "Baku Gabala Full Day Tour", description: "A standard full-day Gabala sightseeing tour from Baku.", price: "From $59", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9111dfef03569a1a7f559c71c63fe2d025dd2407217c6611a698757f80df155b.jpeg" } },
                    { title: "Best Full Combo: Diri Baba, Winery & Cable Car Tour", content: "This adds the Diri Baba shrine, a winery visit, and the Gabala cable car to the standard route, the most complete version of the day trip.", tourCard: { slug: "baku-gabala-diri-baba-winery-tour-with-cable-car", title: "Baku: Gabala, Diri Baba, Winery Tour with Cable Car", description: "A full Gabala day trip with Diri Baba shrine, winery, and cable car.", price: "From $73", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0da0638c8568ecb8734f73189fb3820286011e17cc1c699370351a039e779c41.jpeg" } },
                    { title: "Practical Tips", content: "Gabala's cooler mountain climate is a genuine escape from Baku's heat in summer — worth factoring in if you're visiting during the hottest months." }
                ],
                faqs: [
                    { q: "What is the best Gabala day trip from Baku?", a: "A standard full-day tour covers the basics; add the winery and cable car for a fuller day." },
                    { q: "Is Gabala cooler than Baku?", a: "Yes, its mountain setting makes it noticeably cooler, especially welcome in summer." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gabala day trip?", "acceptedAnswer": { "@type": "Answer", "text": "A standard full-day tour, or add the winery and cable car." } },
                    { "@type": "Question", "name": "Is Gabala cooler than Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, noticeably cooler given its mountain setting." } }
                ] },
            };

        case "is-carpet-museum-worth-it-baku":
            return {
                title: "Is the Azerbaijan Carpet Museum in Baku Worth It?",
                seoTitle: "Azerbaijan Carpet Museum Baku 2026 | Honest Review",
                description: "An honest look at the Azerbaijan Carpet Museum tour in Baku, housed in a building shaped like a rolled-up carpet.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/167c39b19791081f63ee35287a4d3c726d9703144489b1e0013d67da0d36fbfb.png",
                sections: [
                    { title: "The Short Answer", content: "Azerbaijan's carpet weaving is a UNESCO-recognized intangible cultural heritage, and this museum (itself shaped like a rolled-up carpet) covers centuries of regional weaving traditions — genuinely worthwhile for understanding a craft that's easy to walk past at a bazaar without appreciating.", tourCard: { slug: "azerbaijan-carpet-museum-tour-a-journey-from", title: "Azerbaijan Carpet Museum Tour: A Journey from Wool to Art", description: "A guided tour of the Azerbaijan Carpet Museum.", price: "From $38", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/167c39b19791081f63ee35287a4d3c726d9703144489b1e0013d67da0d36fbfb.png" } },
                    { title: "Practical Tips", content: "A guided visit genuinely adds value here over wandering alone, since regional carpet patterns carry specific symbolic meanings that aren't obvious without explanation." }
                ],
                faqs: [
                    { q: "Is the Azerbaijan Carpet Museum worth it?", a: "Yes, for understanding a UNESCO-recognized craft with a guide who can explain the regional patterns and symbolism." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Carpet Museum worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for understanding a UNESCO-recognized craft with guided context." } }
                ] },
            };

        case "best-khinalug-lahij-village-tour-baku":
            return {
                title: "Which Is the Best Mountain Village Tour from Baku: Khinalug or Lahij?",
                seoTitle: "Khinalug vs Lahij Village Tour Baku 2026 | Comparison",
                description: "Compare real day trips to Khinalug and Lahij from Baku — two of Azerbaijan's most remote and distinctive mountain villages.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06286ae695ac5bfb61710d27a85fe2e17494516458444a390200e06159dd1eb9.jpg",
                sections: [
                    { title: "The Short Answer", content: "Khinalug and Lahij are two of Azerbaijan's most distinctive remote villages — Khinalug is one of the highest and most isolated settlements in the Caucasus, while Lahij is known for its centuries-old copper-smithing tradition.", tourCard: { slug: "baku-khinalug-guided-tour", title: "Baku: Khinalug Guided Tour", description: "A guided day trip to the remote mountain village of Khinalug.", price: "From $90", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06286ae695ac5bfb61710d27a85fe2e17494516458444a390200e06159dd1eb9.jpg" } },
                    { title: "Best for Craft Culture: Lahij Guided Tour", content: "This heads to Lahij instead, known for centuries-old copper-smithing workshops still active today — a different cultural angle than Khinalug's isolation and altitude.", tourCard: { slug: "baku-lahij-guided-tour", title: "Baku: Lahij Guided Tour", description: "A guided day trip to the copper-smithing village of Lahij.", price: "From $320", duration: "14 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26185c6d8eff1779568bad22b6f51e24c22b8b8168fafa38836d333087da3657.jpg" } },
                    { title: "Practical Tips", content: "Both are genuinely long days given the distance from Baku — Khinalug especially, given its high altitude and remote access roads, so check weather conditions before booking outside summer." }
                ],
                faqs: [
                    { q: "Should I visit Khinalug or Lahij from Baku?", a: "Khinalug for remote, high-altitude isolation; Lahij for its living copper-smithing craft tradition." },
                    { q: "Are these long day trips?", a: "Yes, both require significant travel time given their distance and mountain roads from Baku." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Khinalug or Lahij?", "acceptedAnswer": { "@type": "Answer", "text": "Khinalug for isolation, Lahij for craft tradition." } },
                    { "@type": "Question", "name": "Are these long trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, given the distance and mountain roads." } }
                ] },
            };

        case "best-quba-shahdag-tour-baku":
            return {
                title: "Which Is the Best Quba & Shahdag Tour from Baku?",
                seoTitle: "Best Quba Shahdag Tour from Baku 2026 | Comparison",
                description: "Compare real Quba and Shahdag day trips from Baku — a full-day guided tour versus a private 2-day version.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/956447ba459d08076b706ef3ac70e73c8e01efb4fbdb7e52b5eefa09d17a03c3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Quba's apple orchards and historic old town, combined with Shahdag's mountain resort scenery, make a solid day trip from Baku — or a more relaxed 2-day version if you want to linger in the mountains.", tourCard: { slug: "baku-quba-shahdag-full-day-guided-tour", title: "Baku: Quba & Shahdag Full-Day Guided Tour", description: "A full-day guided tour of Quba and Shahdag from Baku.", price: "From $59", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/956447ba459d08076b706ef3ac70e73c8e01efb4fbdb7e52b5eefa09d17a03c3.jpg" } },
                    { title: "Best for More Time: Private 2-Day Shahdag & Quba Tour", content: "This spreads the same regions over two days with an overnight stay, better if you'd rather not rush through both in a single day trip.", tourCard: { slug: "baku-private-2-day-shahdag-and-quba-tour", title: "Baku: Private 2-Day Shahdag and Quba Tour", description: "A private 2-day version of the Quba and Shahdag tour.", price: "From $416", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/92de6bad4b8b131afa306bc6c956e69e8bb08c539841e01006dd582758d688a7.jpeg" } },
                    { title: "Practical Tips", content: "Shahdag has a genuine ski resort if visiting in winter — worth checking if snow activities interest you beyond just sightseeing." }
                ],
                faqs: [
                    { q: "What is the best Quba/Shahdag tour from Baku?", a: "A full-day tour for a focused visit, or 2 days for a more relaxed pace with an overnight stay." },
                    { q: "Can I ski at Shahdag?", a: "Yes, it has a genuine ski resort in winter." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Quba/Shahdag tour?", "acceptedAnswer": { "@type": "Answer", "text": "A full-day tour, or 2 days for a relaxed pace." } },
                    { "@type": "Question", "name": "Can I ski at Shahdag?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it has a ski resort in winter." } }
                ] },
            };

        case "is-ganja-day-trip-worth-it-baku":
            return {
                title: "Is a Ganja Day Trip Worth It from Baku?",
                seoTitle: "Ganja Day Trip from Baku 2026 | Honest Review",
                description: "An honest look at Ganja, Azerbaijan's second-largest city and a full-day private trip from Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dfabafb346cce53fc22d4bd080db56d32a6f37fc00110122fa9da3dccca323bb.jpg",
                sections: [
                    { title: "The Short Answer", content: "Ganja, Azerbaijan's second-largest city, has its own distinct historical architecture and atmosphere away from Baku's modern skyline and Old City — a genuinely different side of the country for travelers with an extra day.", tourCard: { slug: "a-full-day-private-ganja-tour", title: "A Full Day Private Ganja Tour", description: "A full-day private tour of Ganja from Baku.", price: "From $254", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dfabafb346cce53fc22d4bd080db56d32a6f37fc00110122fa9da3dccca323bb.jpg" } },
                    { title: "Practical Tips", content: "This is a long day trip (12 hours) given the distance from Baku — plan for a full day with an early start." }
                ],
                faqs: [
                    { q: "Is Ganja worth visiting from Baku?", a: "Yes, for travelers with an extra day who want to see a genuinely different side of Azerbaijan beyond Baku." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Ganja?", "acceptedAnswer": { "@type": "Answer", "text": "Azerbaijan's second-largest city, with distinct historical architecture from Baku." } }
                ] },
            };

        case "is-windsurfing-wakeboarding-worth-it-baku":
            return {
                title: "Is Windsurfing or Wakeboarding Worth It in Baku?",
                seoTitle: "Baku Windsurfing Wakeboarding 2026 | Honest Review",
                description: "An honest look at Baku's windsurfing, wakeboarding, or yacht Caspian Sea activity package, a water-sports option distinct from the city's Old City and fire-site sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8a4413570c16ae2d4a6284d54d806659366746761dfa1b44d299cb046dba1c25.jpg",
                sections: [
                    { title: "The Short Answer", content: "This activity package lets you choose between windsurfing, wakeboarding, or a yacht outing on the Caspian Sea, a genuine water-sports option that's a complete change of pace from Baku's Old City walks and fire-temple sightseeing.", tourCard: { slug: "baku-choose-windsurfing-wakeboarding-or-yacht", title: "Baku: Choose Windsurfing, Wakeboarding, or Yacht", description: "A choice of windsurfing, wakeboarding, or yacht activity on the Caspian Sea.", price: "From $111", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8a4413570c16ae2d4a6284d54d806659366746761dfa1b44d299cb046dba1c25.jpg" } },
                    { title: "Practical Tips", content: "No prior experience is needed for the beginner-friendly options, though wakeboarding and windsurfing both involve some physical effort to pick up." },
                ],
                faqs: [
                    { q: "Is windsurfing or wakeboarding worth it in Baku?", a: "Yes, for a genuine water-sports change of pace from the city's Old City and fire-temple sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is windsurfing or wakeboarding worth it in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine Caspian Sea water-sports activity." } },
                ] },
            };

        case "is-balloon-adventure-worth-it-baku":
            return {
                title: "Is the Balloon Adventure Tour Worth It near Baku?",
                seoTitle: "Baku Balloon Adventure 2026 | Honest Review",
                description: "An honest look at the 2-day balloon adventure tour near Baku, a premium aerial sightseeing experience distinct from the city's standard walking and fire-site tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d756a730accef1c4150e450e498e941e304b25461978489fb27ec87b1b750659.jpg",
                sections: [
                    { title: "The Short Answer", content: "This 2-day balloon adventure gives an aerial perspective on the Azerbaijani landscape that no ground tour can match, a premium, multi-day splurge activity rather than a quick add-on.", tourCard: { slug: "baku-balloon-adventure-tour", title: "Baku Balloon Adventure Tour", description: "A 2-day hot air balloon adventure tour near Baku.", price: "From $1170", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d756a730accef1c4150e450e498e941e304b25461978489fb27ec87b1b750659.jpg" } },
                    { title: "Practical Tips", content: "Flights depend on weather conditions, so the 2-day format builds in flexibility for a reschedule if needed." },
                ],
                faqs: [
                    { q: "Is the balloon adventure tour worth it near Baku?", a: "Yes, for travelers wanting a premium aerial perspective on the landscape, though it's a significant multi-day splurge." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the balloon adventure tour worth it near Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a premium aerial perspective on the landscape." } },
                ] },
            };

        case "is-yacht-tour-worth-it-baku":
            return {
                title: "Is the Private Yacht Tour Worth It from Baku?",
                description: "An honest look at the private yacht tour on the Caspian Sea from Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1f0704ca0ba06893.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Seeing Baku's skyline and Flame Towers from the water on a private yacht gives a genuinely different, more relaxed perspective than the standard city walking tours, worth the premium for a special occasion or small-group outing.", tourCard: { slug: "from-baku-private-yacht-tour-tour", title: "From Baku: Private Yacht Tour", description: "A private yacht tour on the Caspian Sea from Baku.", price: "From $520", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1f0704ca0ba06893.jpeg" } },
                    { title: "Practical Tips", content: "Book a sunset slot if possible for the best skyline lighting from the water." },
                ],
                faqs: [
                    { q: "Is the private yacht tour worth it from Baku?", a: "Yes, it gives a genuinely different, relaxed perspective on the skyline than standard city walking tours." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the private yacht tour worth it from Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it offers a genuinely different, relaxed perspective on the skyline from the water." } },
                ] },
            };

        case "is-paragliding-worth-it-baku":
            return {
                title: "Is the Paragliding Tour Worth It from Baku?",
                description: "An honest look at the paragliding tour near Baku, a genuine aerial adrenaline activity.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/649448eb58e1e.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Paragliding over the Azerbaijani landscape gives a genuinely different adrenaline perspective than the hot air balloon option, with a more active, in-the-moment flying sensation rather than a slow, drifting ride.", tourCard: { slug: "from-baku-paragliding-tour-tour", title: "From Baku: Paragliding Tour", description: "A paragliding tour over the landscape near Baku.", price: "From $390", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/649448eb58e1e.jpeg" } },
                    { title: "Practical Tips", content: "No prior paragliding experience is needed — you fly tandem with a certified pilot." },
                ],
                faqs: [
                    { q: "Is the paragliding tour worth it from Baku?", a: "Yes, it gives a genuinely more active flying sensation than a hot air balloon ride, for travelers wanting real adrenaline." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the paragliding tour worth it from Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely more active flying sensation than a balloon ride." } },
                ] },
            };

        case "is-massage-spa-worth-it-baku":
            return {
                title: "Is the Baku Massage & Spa Experience Worth It?",
                description: "An honest look at the Baku massage and spa experience, a relaxing wind-down activity.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2064a38a7b8d67d8f25ca904755a219bc12d53262858bd7099ab60aa72491580.jpeg",
                sections: [
                    { title: "The Short Answer", content: "At a genuinely low price for 3 hours, a proper massage and spa session is an easy, affordable way to recover after a day of walking Baku's Old City or a desert day trip, without the premium pricing of a resort spa.", tourCard: { slug: "baku-massage-guided-tour", title: "Baku Massage & Spa", description: "A massage and spa experience in Baku.", price: "From $26", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2064a38a7b8d67d8f25ca904755a219bc12d53262858bd7099ab60aa72491580.jpeg" } },
                    { title: "Practical Tips", content: "Book for later in the day after heavier sightseeing — it works well as a genuine recovery session." },
                ],
                faqs: [
                    { q: "Is the Baku massage and spa experience worth it?", a: "Yes, at a genuinely low price, it's an easy, affordable way to recover from a day of sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Baku massage and spa worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's an affordable way to recover from a day of sightseeing." } },
                ] },
            };

        case "is-pink-lake-beshbarmag-tour-worth-it-baku":
            return {
                title: "Is the Pink Lake & Beshbarmag Mountain Tour Worth It from Baku?",
                description: "An honest look at the private tour combining the Pink Lake and Beshbarmag Mountain near Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20392cfa864beba0774818d9465b460b568303460daab24a5672e5448b9f8c37.jpg",
                sections: [
                    { title: "The Short Answer", content: "Pairing the genuinely striking pink-hued salt lake with Beshbarmag Mountain, a site of real pilgrimage significance, gives this tour two visually and culturally distinct stops in one half-day outing, a good alternative to the more commonly visited Gobustan circuit.", tourCard: { slug: "lake-beshbarmag-private-tour", title: "Baku: Private Pink Lake & Beshbarmag Mountain Tour", description: "A private tour combining the Pink Lake and Beshbarmag Mountain near Baku.", price: "From $225", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20392cfa864beba0774818d9465b460b568303460daab24a5672e5448b9f8c37.jpg" } },
                    { title: "Practical Tips", content: "The lake's pink color intensity varies seasonally, so check with your operator about current conditions before booking." },
                ],
                faqs: [
                    { q: "Is the Pink Lake and Beshbarmag Mountain tour worth it from Baku?", a: "Yes, it combines two visually and culturally distinct stops, a good alternative to the more commonly visited Gobustan circuit." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Pink Lake and Beshbarmag tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it combines two visually and culturally distinct stops near Baku." } },
                ] },
            };

        case "is-socialist-architecture-mosaic-tour-worth-it-baku":
            return {
                title: "Is the Local Historian's Socialist Architecture & Mosaic Tour Worth It?",
                description: "An honest look at the socialist architecture and mosaic walking tour led by a local historian in Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e2ace79192a14138021562b83b3a249ee197e9d81c8b6fe953f11e18a285ccb.jpg",
                sections: [
                    { title: "The Short Answer", content: "Led by a genuine historian specializing in the subject, this tour covers Baku's Soviet-era mosaics and socialist architecture, a genuinely niche angle on the city's history distinct from the Old City and modern skyline sightseeing most visitors focus on.", tourCard: { slug: "baku-local-historians-socialist-architecture", title: "Baku: Local Historian's Socialist Architecture & Mosaic Tour", description: "A walking tour of Baku's socialist architecture and mosaics led by a local historian.", price: "From $26", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e2ace79192a14138021562b83b3a249ee197e9d81c8b6fe953f11e18a285ccb.jpg" } },
                    { title: "Practical Tips", content: "Ask the historian plenty of questions — their specialist knowledge is the main reason this tour is worth it over a generic city walk." },
                ],
                faqs: [
                    { q: "Is the socialist architecture and mosaic tour worth it in Baku?", a: "Yes, it gives a genuinely niche, expert-led angle on the city's Soviet-era history, distinct from the Old City and skyline sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the socialist architecture and mosaic tour worth it in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely niche, expert-led angle on the city's Soviet-era history." } },
                ] },
            };

        case "is-caspian-sea-rowing-worth-it-baku":
            return {
                title: "Is Rowing a Boat on the Caspian Sea Worth It in Baku?",
                description: "An honest look at rowing a boat on the Caspian Sea with skyline views in Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6985cf8873f97cd4c0826aa2352a287c74f84fe4282a956bb8b5fdd88b13acbc.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A simple, self-powered rowing experience on the Caspian Sea gives genuinely good skyline views of Baku's Flame Towers and waterfront from the water, worth it for travelers wanting an active, low-cost alternative to a standard boat cruise.", tourCard: { slug: "baku-rowing-a-boat-on-the-caspian-sea-with", title: "Baku: Rowing a Boat on the Caspian Sea with Skyline Views", description: "A self-powered rowing boat experience on the Caspian Sea with Baku skyline views.", price: "From $37", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6985cf8873f97cd4c0826aa2352a287c74f84fe4282a956bb8b5fdd88b13acbc.jpeg" } },
                    { title: "Practical Tips", content: "Go in the early morning or evening for calmer water and better light on the skyline." },
                ],
                faqs: [
                    { q: "Is rowing a boat on the Caspian Sea worth it in Baku?", a: "Yes, as an active, low-cost way to get genuinely good skyline views of the city from the water." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Caspian Sea rowing worth it in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for active, low-cost skyline views of the city from the water." } },
                ] },
            };

        case "is-eastern-bazaar-tour-worth-it-baku":
            return {
                title: "Is the Eastern Bazaar Guided Tour Worth It in Baku?",
                description: "An honest look at the Eastern Bazaar guided tour in Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aa0b250a8e0040b075c42fff44d1d249753f7f11cb7be5d56cda12cf1bebbead.jpg",
                sections: [
                    { title: "The Short Answer", content: "A guided walk through the Eastern Bazaar gives real context on local produce, spices, and shopping customs that are easy to miss browsing on your own, worth it for travelers who want more than a quick photo stop at the market.", tourCard: { slug: "baku-eastern-bazaar-guided-tour", title: "Baku: Eastern Bazaar Guided Tour", description: "A guided tour through Baku's Eastern Bazaar market.", price: "From $38", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aa0b250a8e0040b075c42fff44d1d249753f7f11cb7be5d56cda12cf1bebbead.jpg" } },
                    { title: "Practical Tips", content: "Bring small cash for any extra snacks or produce you want to sample or buy along the way." },
                ],
                faqs: [
                    { q: "Is the Eastern Bazaar guided tour worth it in Baku?", a: "Yes, a guide adds real context on local produce and shopping customs that's easy to miss browsing alone." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Eastern Bazaar tour worth it in Baku?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a guide adds real context on local produce and shopping customs." } },
                ] },
            };

        case "is-paint-baku-by-sea-worth-it-baku":
            return {
                title: "Is Paint Baku by the Sea Worth It?",
                description: "An honest look at the Paint Baku by the Sea painting workshop in Baku.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ee81f691a6be9f22f4c1734f0652c56284b56ba85dfc400be2853f76b763d49.png",
                sections: [
                    { title: "The Short Answer", content: "A relaxed outdoor painting session along Baku's seafront, worth it as a calm, creative activity with a genuine seaside-skyline souvenir to take home, rather than another guided sightseeing stop.", tourCard: { slug: "paint-baku-by-the-sea", title: "Paint Baku by the Sea", description: "An outdoor painting workshop along Baku's seafront.", price: "From $35", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ee81f691a6be9f22f4c1734f0652c56284b56ba85dfc400be2853f76b763d49.png" } },
                    { title: "Practical Tips", content: "No prior painting experience is needed — this is designed as a relaxed, beginner-friendly session." },
                ],
                faqs: [
                    { q: "Is Paint Baku by the Sea worth it?", a: "Yes, as a calm, creative activity with a genuine seaside-skyline souvenir, a nice change from sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Paint Baku by the Sea worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a calm, creative activity with a genuine seaside-skyline souvenir." } },
                ] },
            };

        default:
            return null;
    }
}
