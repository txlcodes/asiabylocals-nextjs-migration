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

        default:
            return null;
    }
}
