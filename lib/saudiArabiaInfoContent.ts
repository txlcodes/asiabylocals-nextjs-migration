import { CityInfoData } from './cityInfoContent';

export function getSaudiArabiaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-edge-of-the-world-tour-riyadh":
            return {
                title: "Which Is the Best Edge of the World Tour from Riyadh?",
                seoTitle: "Best Edge of the World Tour Riyadh 2026 | Honest Comparison",
                description: "Compare real Edge of the World (Jebel Fihrayn) tours from Riyadh — from a $59 sunrise/sunset shared tour to private 4x4 trips with dinner.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg",
                sections: [
                    { title: "The Short Answer", content: "Edge of the World is Riyadh's single most popular day trip — a dramatic escarpment about 90 minutes outside the city. Nearly every tour covers the same destination; the real differences are sunrise vs. sunset timing, shared vs. private group, and whether camels, 4x4 dune driving, or dinner are included.", tourCard: { slug: "riyadh-group-edge-of-the-world-sunset-tour", title: "Riyadh: Group Edge of the World Sunset Tour", description: "The standard shared sunset trip to Edge of the World.", price: "From $59", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" } },
                    { title: "Cheapest: Group Sunrise or Sunset Tour", content: "At $59, these shared group trips are the lowest-priced way to see the escarpment at either sunrise or sunset.", tourCard: { slug: "riyadh-group-edge-of-the-world-sunrise-tour", title: "Riyadh: Group Edge of the World Sunrise Tour", description: "The budget shared sunrise trip.", price: "From $59", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" } },
                    { title: "Best with Wildlife: 4x4, Camels & Gazelles", content: "This version adds a 4x4 dune-driving segment plus stops to see camels and gazelles, giving more to do beyond the viewpoint itself.", tourCard: { slug: "riyadhedge-of-the-world-sunset-tour-by-4x4camels", title: "Riyadh: Edge of the World Sunset Tour by 4x4, Camels & Gazelles", description: "Edge of the World with 4x4 dune driving and wildlife stops.", price: "From $65", duration: "6.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" } },
                    { title: "Best for a Full Evening: Tour with Dinner at a Campsite", content: "This extends the trip into the evening with a campsite dinner after sunset, turning the day trip into a fuller experience.", tourCard: { slug: "riyadh-edge-of-the-world-tour-with-dinner-at", title: "Riyadh: Edge of the World Tour with Dinner at a Campsite", description: "The sunset tour extended with a campsite dinner.", price: "From $169", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" } },
                    { title: "Best for Privacy: VIP Private 4x4 Excursion", content: "For travellers who don't want to share the trip with a larger group, this private version covers the same destination at your own pace.", tourCard: { slug: "riyadh-vip-edge-of-the-world-4x4excursion-private", title: "Riyadh: VIP Edge of the World 4x4 Excursion (Private)", description: "A private 4x4 version of the Edge of the World trip.", price: "From $260", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" } },
                    { title: "Most Premium: Private Sunrise/Sunset Tour", content: "The top-tier private option, bookable for either sunrise or sunset, for travellers who want full flexibility on timing without joining a shared group.", tourCard: { slug: "riyadh-premier-private-edge-of-the-world-tour", title: "Riyadh Premier Private Edge of The World Tour Sunrise/Sunset", description: "The premium private Edge of the World experience.", price: "From $520", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" } },
                    { title: "Practical Tips", content: "Sunset tours are generally preferred for photography since the escarpment faces west, but sunrise trips avoid the afternoon heat. The site has no barriers at the cliff edge, so sturdy footwear and caution near the drop are essential." }
                ],
                faqs: [
                    { q: "What is the best Edge of the World tour from Riyadh?", a: "A standard group sunset tour suits most visitors; go private if you want flexibility, or add dinner for a fuller evening." },
                    { q: "Is sunrise or sunset better at Edge of the World?", a: "Sunset is generally preferred for photography since the escarpment faces west." },
                    { q: "How far is Edge of the World from Riyadh?", a: "About 90 minutes by road, making it a half-day to full-day round trip." },
                    { q: "Is Edge of the World safe to visit?", a: "Yes with caution — there are no barriers at the cliff edge, so sturdy footwear and care near the drop are important." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Edge of the World tour from Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "A standard group sunset tour suits most visitors." } },
                    { "@type": "Question", "name": "Is sunrise or sunset better?", "acceptedAnswer": { "@type": "Answer", "text": "Sunset is generally preferred for photography." } },
                    { "@type": "Question", "name": "How far is it from Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "About 90 minutes by road." } },
                    { "@type": "Question", "name": "Is it safe to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes with caution, there are no barriers at the cliff edge." } }
                ] },
            };

        case "best-desert-safari-tour-riyadh":
            return {
                title: "Which Is the Best Desert Safari Tour in Riyadh?",
                seoTitle: "Best Desert Safari Tour Riyadh 2026 | Honest Comparison",
                description: "Compare real Riyadh desert safari tours — from a $86 red sands 4x4 ride to full dune bashing, sandboarding, and camel/ATV combo adventures.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh's desert safaris center on the Red Sands outside the city, combining 4x4 dune driving with activities like camel riding, ATV/quad biking, and sandboarding in varying combinations and durations.", tourCard: { slug: "riyadh-red-sands-desert-safari-with-4x4-ride", title: "Riyadh: Red Sands Desert Safari with 4x4 Ride", description: "A straightforward red sands desert safari with 4x4 dune driving.", price: "From $86", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Cheapest: Red Sands Safari with 4x4 Ride", content: "At $86, this is the lowest-priced way to experience 4x4 dune driving in the Red Sands.", tourCard: { slug: "riyadh-red-sands-desert-safari-with-4x4-ride", title: "Riyadh: Red Sands Desert Safari with 4x4 Ride", description: "The budget-friendly 4x4 desert safari.", price: "From $86", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Combo: Camel Ride, ATV Tour & Snacks", content: "This adds camel riding and an ATV segment to the dune driving, plus snacks, for a fuller half-day experience.", tourCard: { slug: "riyadh-desert-camel-ride-atv-tour-and-snacks", title: "Riyadh: Desert Camel Ride, ATV Tour, and Snacks", description: "A combo desert safari with camel riding, ATV, and snacks.", price: "From $128", duration: "5.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best for Adrenaline: Dune Bashing, ATV, Camels and Sandboarding", content: "This packs in the widest range of activities — dune bashing, ATV, camel riding, and sandboarding — for travellers who want maximum variety in one outing.", tourCard: { slug: "riyadh-desert-safari-dune-bashing-atv-camels-and", title: "Riyadh Desert Safari Dune Bashing, ATV, camels and Sandboard", description: "The most activity-packed desert safari option.", price: "From $221", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best for an Evening Out: Desert Sunset with Tea & Dinner", content: "This times the safari for sunset and adds traditional tea and a Kabsa dinner, turning the activity into a full evening experience.", tourCard: { slug: "riyadh-desert-sunset-camel-ridetea-dinner-kabsa", title: "Riyadh: Desert Sunset (Camel Ride+Tea + Dinner (Kabsa))", description: "A sunset desert outing with camel ride, tea, and a traditional Kabsa dinner.", price: "From $298", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Most Private: Private 4x4 Desert Safari with Dinner", content: "For travellers who want the full safari-plus-dinner experience without joining a shared group, this private version covers the same ground on your own schedule.", tourCard: { slug: "riyadh-private-desert-safari-with-dinner", title: "Riyadh: Private Desert Safari with Dinner", description: "A private desert safari including dinner.", price: "From $572", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "4x4 dune bashing can be intense — let your guide know in advance if anyone in your group is prone to motion sickness. Evening/sunset safaris avoid the harshest desert heat, especially outside the cooler winter months." }
                ],
                faqs: [
                    { q: "What is the best desert safari tour in Riyadh?", a: "A combo tour with camel riding and ATV suits most visitors; go for the dune-bashing/sandboarding version for more adrenaline." },
                    { q: "Is desert safari dune bashing intense?", a: "Yes, it can be — mention any motion sickness concerns to your guide beforehand." },
                    { q: "What's the cheapest desert safari in Riyadh?", a: "A basic Red Sands safari with 4x4 ride, the lowest-priced option." },
                    { q: "Is it better to do a desert safari at sunset?", a: "Yes, generally — it avoids the harshest daytime heat and offers better light for photos." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best desert safari tour in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "A combo tour with camel riding and ATV suits most visitors." } },
                    { "@type": "Question", "name": "Is dune bashing intense?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, mention motion sickness concerns beforehand." } },
                    { "@type": "Question", "name": "What's the cheapest desert safari?", "acceptedAnswer": { "@type": "Answer", "text": "A basic Red Sands safari with 4x4 ride." } },
                    { "@type": "Question", "name": "Is sunset better for a desert safari?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it avoids the harshest daytime heat." } }
                ] },
            };

        case "best-old-riyadh-walking-tour-riyadh":
            return {
                title: "Which Is the Best Old Riyadh Walking Tour?",
                seoTitle: "Best Old Riyadh Walking Tour 2026 | Honest Comparison",
                description: "Compare real walking tours through Old Riyadh and Al Masmak Fortress — two honest, similarly-priced options.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Both real options cover the same core ground — Al Masmak Fortress and the historic Old Riyadh district — with slightly different framing and added stops like Souq Al Zal.", tourCard: { slug: "walking-through-old-riyadh-almasmak-palace-hidden", title: "Walking Through Old Riyadh, AlMasmak Palace & Hidden Stories", description: "A walking tour through Old Riyadh and Al Masmak Palace.", price: "From $41", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Value: Old Riyadh & Al Masmak Palace", content: "At $41, this covers Al Masmak and Old Riyadh's hidden stories at the lowest price among the two real options.", tourCard: { slug: "walking-through-old-riyadh-almasmak-palace-hidden", title: "Walking Through Old Riyadh, AlMasmak Palace & Hidden Stories", description: "The lower-priced Old Riyadh walking tour.", price: "From $41", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best with a Market Stop: + Souq Al Zal", content: "This slightly longer version adds a stop at Souq Al Zal, Riyadh's traditional market, to the Al Masmak Fortress walking route.", tourCard: { slug: "walking-tour-in-old-riyadh-al-masmak-fortress", title: "Walking Tour in Old Riyadh, Al Masmak Fortress, Souq Al Zal", description: "The Old Riyadh walking tour with an added souq stop.", price: "From $43", duration: "2.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Old Riyadh is best walked in the morning or evening given Riyadh's daytime heat — most operators schedule around this." }
                ],
                faqs: [
                    { q: "What is the best Old Riyadh walking tour?", a: "Either real option covers Al Masmak Fortress well; pick the Souq Al Zal version if you want a market stop included." },
                    { q: "When is the best time for an Old Riyadh walking tour?", a: "Morning or evening, to avoid the harshest midday heat." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Old Riyadh walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "Either option covers Al Masmak Fortress well." } },
                    { "@type": "Question", "name": "Best time for an Old Riyadh walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "Morning or evening, to avoid midday heat." } }
                ] },
            };

        case "best-city-tour-riyadh":
            return {
                title: "Which Is the Best City Tour in Riyadh?",
                seoTitle: "Best Riyadh City Tour 2026 | Honest Comparison",
                description: "Compare real Riyadh city tours — from a $95 half-day group tour to full-day and VIP private options.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh city tours generally cover the same landmark circuit — Kingdom Tower, Al Faisaliah, Old Riyadh — with group vs. private and half-day vs. full-day as the main differences.", tourCard: { slug: "riyadh-half-day-city-tour", title: "Riyadh half day city tour", description: "A standard half-day group city tour.", price: "From $95", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Cheapest: Half Day City Tour", content: "At $95, this covers Riyadh's main landmarks in half a day at the lowest price among the city tour options.", tourCard: { slug: "riyadh-half-day-city-tour", title: "Riyadh half day city tour", description: "The budget-friendly half-day city tour.", price: "From $95", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Full-Day Option: Guided with Transport", content: "This extends the city tour to a full day with transport included, covering more ground than the half-day version.", tourCard: { slug: "riyadh-full-day-city-tour-guided-with-transport", title: "Riyadh: Full Day City Tour Guided with Transport", description: "A full-day city tour with transport included.", price: "From $241", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Most Private: VIP Private City Tour", content: "For travellers who want a private, unhurried version of the city tour, this VIP option covers the landmarks at your own pace.", tourCard: { slug: "riyadh-vip-private-city-tour", title: "Riyadh: VIP Private City Tour", description: "A private VIP version of the city tour.", price: "From $351", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Riyadh's major landmarks are spread out, so any city tour worth taking includes transport between stops rather than expecting you to walk the whole route." }
                ],
                faqs: [
                    { q: "What is the best city tour in Riyadh?", a: "A half-day group tour suits most visitors; go full-day or VIP private for more time and flexibility." },
                    { q: "Are Riyadh's landmarks walkable between stops?", a: "No, they're spread out — a proper city tour includes transport between them." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day group tour suits most visitors." } },
                    { "@type": "Question", "name": "Are the landmarks walkable?", "acceptedAnswer": { "@type": "Answer", "text": "No, a proper tour includes transport between stops." } }
                ] },
            };

        case "best-national-museum-tour-riyadh":
            return {
                title: "Is the Saudi National Museum Tour in Riyadh Worth It?",
                seoTitle: "Saudi National Museum Riyadh Tour 2026 | Honest Review",
                description: "Compare the two real National Museum tour options in Riyadh — a basic guided visit versus one with tickets fully included.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "The National Museum traces Saudi Arabia's history from pre-Islamic times to the modern kingdom — a worthwhile stop for understanding the country's context, with both real options offering a guided visit.", tourCard: { slug: "riyadh-the-national-museum", title: "Riyadh: The National Museum", description: "A guided visit to the Saudi National Museum.", price: "From $420", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Value: Tour with Guide and Tickets", content: "This version bundles the entrance tickets directly into the tour price, removing a separate purchase step.", tourCard: { slug: "riyadh-saudi-national-museum-tour-with-guide-and", title: "Riyadh: Saudi National Museum Tour with Guide and Tickets", description: "The National Museum tour with tickets included.", price: "From $423", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "The museum is air-conditioned and a good midday option if you're trying to avoid Riyadh's heat during the hottest hours." }
                ],
                faqs: [
                    { q: "Is the Saudi National Museum worth visiting?", a: "Yes, for understanding Saudi Arabia's history from pre-Islamic times to the modern kingdom." },
                    { q: "Are entrance tickets included in the museum tour?", a: "One of the two real options bundles tickets directly into the price." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Saudi National Museum worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for understanding Saudi Arabia's history." } },
                    { "@type": "Question", "name": "Are tickets included?", "acceptedAnswer": { "@type": "Answer", "text": "One option bundles tickets into the price." } }
                ] },
            };

        case "best-diriyah-tour-riyadh":
            return {
                title: "Which Is the Best Diriyah Tour from Riyadh?",
                seoTitle: "Best Diriyah Tour Riyadh 2026 | Honest Comparison",
                description: "Compare real Diriyah UNESCO heritage site tours from Riyadh — from a standalone historic visit to combos with the Black Gold Museum.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Diriyah, the birthplace of the first Saudi state and a UNESCO World Heritage Site, is usually visited either as a standalone historic tour or combined with a nearby museum stop.", tourCard: { slug: "riyadh-diriyah-historic", title: "Riyadh: Diriyah Historic", description: "A standalone historic tour of Diriyah.", price: "From $254", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Standalone: Diriyah Historic", content: "This focuses entirely on Diriyah's At-Turaif district and mudbrick architecture without adding extra stops.", tourCard: { slug: "riyadh-diriyah-historic", title: "Riyadh: Diriyah Historic", description: "The focused Diriyah historic tour.", price: "From $254", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Combo: Diriyah & Oil (Black Gold) Museum", content: "This pairs Diriyah with the Black Gold Museum, adding context on Saudi Arabia's oil industry to the historical visit.", tourCard: { slug: "riyadh-diriyah-oil-black-gold-museum-tour", title: "Riyadh: Diriyah & Oil (Black Gold) Museum Tour", description: "Diriyah combined with the Black Gold Museum.", price: "From $471", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "At-Turaif's mudbrick buildings have limited shade, so an early morning or late afternoon visit is more comfortable than midday." }
                ],
                faqs: [
                    { q: "What is the best Diriyah tour from Riyadh?", a: "A standalone historic tour suits most visitors; add the Black Gold Museum for broader context on Saudi Arabia's oil industry." },
                    { q: "Is Diriyah a UNESCO site?", a: "Yes, its At-Turaif district is a UNESCO World Heritage Site." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Diriyah tour from Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "A standalone historic tour suits most visitors." } },
                    { "@type": "Question", "name": "Is Diriyah a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, its At-Turaif district is." } }
                ] },
            };

        case "best-horseback-riding-tour-riyadh":
            return {
                title: "Which Is the Best Horseback Riding Tour in Riyadh?",
                seoTitle: "Best Horseback Riding Tour Riyadh 2026 | Honest Comparison",
                description: "Compare real horseback riding experiences in Riyadh — from a guided ride with photography and tea to a mountain oasis adventure.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh's horseback riding tours are generally short, scenic rides with added touches like photography or tea rather than long trekking routes.", tourCard: { slug: "riyadh-guided-horseback-riding-tour-with", title: "Riyadh: Guided Horseback Riding Tour with photography & Tea", description: "A guided horseback ride with photography and tea included.", price: "From $150", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best with Extras: Guided Ride with Photography & Tea", content: "This includes professional photography and tea as part of the ride, good for travellers who want keepsake photos without arranging their own photographer.", tourCard: { slug: "riyadh-guided-horseback-riding-tour-with", title: "Riyadh: Guided Horseback Riding Tour with photography & Tea", description: "The horseback ride with photography and tea.", price: "From $150", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Scenic Option: Hidden Oasis Mountain Ride", content: "This takes the ride through a mountain oasis setting, a more scenic backdrop than a standard desert or stable ride.", tourCard: { slug: "riyadh-hidden-oasis-mountain-horseback-riding", title: "Riyadh Hidden Oasis: Mountain Horseback Riding Adventure", description: "A scenic mountain oasis horseback ride.", price: "From $180", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "These are short, roughly 1-hour experiences rather than full-day treks — manage expectations accordingly if you want an extended ride." }
                ],
                faqs: [
                    { q: "What is the best horseback riding tour in Riyadh?", a: "The photography-and-tea package suits most visitors; the mountain oasis ride offers a more scenic setting." },
                    { q: "How long are Riyadh's horseback riding tours?", a: "Typically around 1 hour, not full-day treks." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best horseback riding tour in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "The photography-and-tea package suits most visitors." } },
                    { "@type": "Question", "name": "How long are these tours?", "acceptedAnswer": { "@type": "Answer", "text": "Typically around 1 hour." } }
                ] },
            };

        case "best-red-sand-dunes-tour-riyadh":
            return {
                title: "Which Is the Best Red Sand Dunes Tour in Riyadh?",
                seoTitle: "Best Red Sand Dunes Tour Riyadh 2026 | Honest Comparison",
                description: "Compare real Red Sand Dunes tours in Riyadh — quad biking, camel riding, and sandboarding combos at different price points.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh's Red Sand Dunes tours combine quad biking, camel riding, and sometimes sandboarding in varying combinations — the main choice is how many activities are bundled together.", tourCard: { slug: "red-sand-adventure-riyadh-quad-bikingcamel", title: "Red Sand Adventure Riyadh (Quad Biking,Camel Ride,Heritage)", description: "A red sand dunes adventure with quad biking, camel riding, and a heritage stop.", price: "From $129", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Value: Quad Biking, Camel Ride & Heritage", content: "This bundles quad biking, a camel ride, and a heritage stop at a mid-range price.", tourCard: { slug: "red-sand-adventure-riyadh-quad-bikingcamel", title: "Red Sand Adventure Riyadh (Quad Biking,Camel Ride,Heritage)", description: "The balanced red sand dunes combo.", price: "From $129", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best for Full Adventure: Camel Ride, Quad & Sandboarding", content: "This adds sandboarding to the camel ride and quad bike combo, for the most activity-packed version of the red sand dunes experience.", tourCard: { slug: "riyadh-red-sand-dunes-camel-ride-quad", title: "Riyadh: Red Sand Dunes Camel Ride & Quad & Sandboarding Adventure", description: "The most complete red sand dunes activity combo.", price: "From $715", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Sandboarding requires the dunes to be reasonably dry and firm — check with your operator if conditions have been unusually wet before your date." }
                ],
                faqs: [
                    { q: "What is the best Red Sand Dunes tour in Riyadh?", a: "A combo with quad biking and camel riding suits most visitors; add sandboarding for a fuller adventure." },
                    { q: "What activities are included in Red Sand Dunes tours?", a: "Typically quad biking, camel riding, and sometimes sandboarding and a heritage stop." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Red Sand Dunes tour in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "A combo with quad biking and camel riding suits most visitors." } },
                    { "@type": "Question", "name": "What activities are included?", "acceptedAnswer": { "@type": "Answer", "text": "Typically quad biking, camel riding, and sometimes sandboarding." } }
                ] },
            };

        case "best-architecture-tour-riyadh":
            return {
                title: "Which Is the Best Modern Architecture Tour in Riyadh?",
                seoTitle: "Best Riyadh Architecture Tour 2026 | Honest Comparison",
                description: "Compare real modern architecture tours in Riyadh covering KAFD and KAPSARC, two of the city's most striking contemporary buildings.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh's modern architecture tours focus on KAFD (King Abdullah Financial District) and KAPSARC, two architecturally distinct contemporary landmarks, sometimes combined with the metro system and street food stops.", tourCard: { slug: "kafd-architectural-wonders-a-guided-architectural", title: "KAFD Architectural Wonders, A Guided Architectural Tour.", description: "A guided architectural tour of KAFD.", price: "From $195", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Focused Option: KAFD Architectural Wonders", content: "This focuses entirely on KAFD's striking modern towers and design.", tourCard: { slug: "kafd-architectural-wonders-a-guided-architectural", title: "KAFD Architectural Wonders, A Guided Architectural Tour.", description: "The focused KAFD architecture tour.", price: "From $195", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best for Two Landmarks: KAPSARC & Black Gold Museum", content: "This pairs KAPSARC's architecture with the Black Gold Museum, adding cultural context to the design-focused visit.", tourCard: { slug: "kapsarc-black-gold-museum-architectural-cultural", title: "KAPSARC & Black Gold Museum, Architectural & Cultural Tour", description: "KAPSARC combined with the Black Gold Museum.", price: "From $208", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best with Food: Modern Riyadh — KAFD, Metro & Street Food", content: "This widens the scope to include the Riyadh Metro system and a street food stop alongside KAFD's architecture, for a broader modern-city experience.", tourCard: { slug: "modern-riyadh-kafd-architecture-metro-street-food", title: "Modern Riyadh: KAFD, Architecture, Metro, & Street Food", description: "KAFD architecture combined with the metro and street food.", price: "From $228", duration: "4.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "These tours suit travellers specifically interested in architecture and urban design — if that's not your main interest, a standard city/landmarks tour covers more general ground." }
                ],
                faqs: [
                    { q: "What is the best architecture tour in Riyadh?", a: "A focused KAFD tour suits architecture enthusiasts; the metro and street food version suits those who want a broader modern-city experience." },
                    { q: "What landmarks do Riyadh architecture tours cover?", a: "Typically KAFD (King Abdullah Financial District) and KAPSARC." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best architecture tour in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "A focused KAFD tour suits architecture enthusiasts." } },
                    { "@type": "Question", "name": "What landmarks are covered?", "acceptedAnswer": { "@type": "Answer", "text": "Typically KAFD and KAPSARC." } }
                ] },
            };

        case "best-shaqra-ushaiqer-tour-riyadh":
            return {
                title: "Which Is the Best Shaqra & Ushaiqer Heritage Tour from Riyadh?",
                seoTitle: "Best Shaqra Ushaiqer Tour from Riyadh 2026 | Honest Comparison",
                description: "Compare real Shaqra and Ushaiqer heritage day trips from Riyadh, both covering the Najd region's mudbrick village architecture.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Shaqra and Ushaiqer are historic Najd villages known for preserved mudbrick architecture, visited as a long day trip from Riyadh — the two real options differ slightly in framing (heritage-focused vs. a broader journey narrative) but cover similar ground.", tourCard: { slug: "shaqra-ushaiqer-heritage-tour-salt-lake-burudan", title: "Shaqra & Ushaiqer Heritage Tour: Salt Lake & Burudan Oasis", description: "A heritage day trip to Shaqra and Ushaiqer with a salt lake and oasis stop.", price: "From $578", duration: "12 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best with Nature Stops: Heritage Tour with Salt Lake & Oasis", content: "This adds a salt lake and the Burudan Oasis to the heritage village visits, broadening the day beyond architecture alone.", tourCard: { slug: "shaqra-ushaiqer-heritage-tour-salt-lake-burudan", title: "Shaqra & Ushaiqer Heritage Tour: Salt Lake & Burudan Oasis", description: "The heritage tour with added natural stops.", price: "From $578", duration: "12 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Best Narrative Framing: A Journey Through Heritage", content: "This version frames the same core villages as a broader heritage journey, slightly different pacing and storytelling emphasis.", tourCard: { slug: "shaqra-ushayqir-a-journey-through-heritage-day", title: "Shaqra & Ushayqir: A Journey Through Heritage Day Tour", description: "A heritage-journey framed version of the Shaqra/Ushaiqer day trip.", price: "From $1165", duration: "12 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "This is a full 12-hour day given the distance from Riyadh — plan for an early departure and a long day rather than a half-day add-on." }
                ],
                faqs: [
                    { q: "What is the best Shaqra & Ushaiqer tour from Riyadh?", a: "Either real option covers the core heritage villages well; pick based on whether you want the salt lake/oasis stops included." },
                    { q: "How long is the Shaqra & Ushaiqer day trip?", a: "A full 12-hour day given the distance from Riyadh." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Shaqra & Ushaiqer tour from Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "Either option covers the core heritage villages well." } },
                    { "@type": "Question", "name": "How long is this day trip?", "acceptedAnswer": { "@type": "Answer", "text": "A full 12-hour day." } }
                ] },
            };

        case "is-riyadh-snow-city-worth-it":
            return {
                title: "Is Riyadh Snow City Worth It?",
                seoTitle: "Riyadh Snow City 2026 | Honest Review",
                description: "An honest look at Riyadh Snow City, an indoor snow attraction in the Saudi capital.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh Snow City is an indoor snow attraction offering a genuinely different experience in a desert capital — a fun novelty stop, especially for families or anyone missing cold-weather activities.", tourCard: { slug: "riyadh-snow-city-inclusive-3-hour-entry-with-gear", title: "Riyadh Snow City: Inclusive 3-Hour Entry with Gear Provided", description: "Entry to Riyadh Snow City with gear included.", price: "From $168", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Gear is provided with the ticket, so no need to bring your own cold-weather clothing — dress in layers you can add under the provided gear." }
                ],
                faqs: [
                    { q: "Is Riyadh Snow City worth it?", a: "Yes as a novelty activity, especially for families or anyone wanting a cold-weather experience in the desert." },
                    { q: "Is gear provided at Riyadh Snow City?", a: "Yes, the ticket includes gear, so you don't need to bring your own." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Riyadh Snow City worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes as a novelty activity for families." } },
                    { "@type": "Question", "name": "Is gear provided?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, included with the ticket." } }
                ] },
            };

        case "is-riyadh-virtual-reality-experience-worth-it":
            return {
                title: "Is the Riyadh Virtual Reality Experience Worth It?",
                seoTitle: "Riyadh VR Experience 2026 | Honest Review",
                description: "An honest look at Riyadh's Immersive Group Virtual Reality Experience.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "This is a short, group-based immersive VR experience — a good rainy-day or extreme-heat alternative to outdoor sightseeing, though it's a modern-tech novelty rather than a cultural or historical stop.", tourCard: { slug: "immersive-group-virtual-reality-experience-riyadh", title: "Immersive Group Virtual Reality Experience – Riyadh", description: "A group VR experience in Riyadh.", price: "From $182", duration: "45 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "At 45 minutes, this fits easily alongside other activities in the same day rather than needing a dedicated half-day slot." }
                ],
                faqs: [
                    { q: "Is the Riyadh VR experience worth it?", a: "Yes as a short novelty activity, good for extreme-heat days or as an add-on to a fuller itinerary." },
                    { q: "How long is the VR experience?", a: "About 45 minutes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Riyadh VR experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes as a short novelty activity." } },
                    { "@type": "Question", "name": "How long is it?", "acceptedAnswer": { "@type": "Answer", "text": "About 45 minutes." } }
                ] },
            };

        case "is-desert-falconry-experience-worth-it-riyadh":
            return {
                title: "Is the Desert Falconry Experience Worth It in Riyadh?",
                seoTitle: "Riyadh Desert Falconry Experience 2026 | Honest Review",
                description: "An honest look at Riyadh's Desert Falconry, Camel Ride & Traditional Camp Dinner experience.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Falconry is a genuinely traditional Saudi/Bedouin heritage activity, and this experience combines it with a camel ride and a traditional camp dinner — a strong pick for travellers specifically interested in Bedouin culture rather than just desert scenery.", tourCard: { slug: "desert-falconry-camel-ride-traditional-camp-dinner", title: "Desert Falconry, Camel Ride & Traditional Camp Dinner", description: "A falconry experience combined with camel riding and a camp dinner.", price: "From $195", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Falconry is a hands-on cultural activity, not just a photo opportunity — expect a guide to explain the tradition's history alongside the demonstration." }
                ],
                faqs: [
                    { q: "Is the desert falconry experience worth it?", a: "Yes, especially for travellers interested in Bedouin heritage and traditions, not just desert scenery." },
                    { q: "What does the falconry experience include?", a: "Falconry, a camel ride, and a traditional camp dinner." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the desert falconry experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for travellers interested in Bedouin heritage." } },
                    { "@type": "Question", "name": "What does it include?", "acceptedAnswer": { "@type": "Answer", "text": "Falconry, a camel ride, and a traditional camp dinner." } }
                ] },
            };

        case "is-nofa-wildlife-park-safari-worth-it-riyadh":
            return {
                title: "Is the Nofa Wildlife Park Safari Worth It from Riyadh?",
                seoTitle: "Nofa Wildlife Park Safari Riyadh 2026 | Honest Review",
                description: "An honest look at the private Nofa Wildlife Park Safari tour from Riyadh.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Nofa Wildlife Park is a private reserve with African and Arabian wildlife, a distinct option for travellers who want a safari-style experience without leaving the Riyadh region.", tourCard: { slug: "riyadh-nofa-wildlife-park-safari-private-tour", title: "Riyadh: Nofa Wildlife Park Safari Private Tour", description: "A private safari tour of Nofa Wildlife Park.", price: "From $637", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Being a private tour, timing and pace can be arranged around your group's preferences — worth confirming what wildlife is typically visible on the day you book." }
                ],
                faqs: [
                    { q: "Is the Nofa Wildlife Park safari worth it?", a: "Yes for wildlife enthusiasts wanting a safari-style experience near Riyadh." },
                    { q: "What wildlife is at Nofa Wildlife Park?", a: "A mix of African and Arabian wildlife species." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Nofa Wildlife Park safari worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for wildlife enthusiasts." } },
                    { "@type": "Question", "name": "What wildlife is there?", "acceptedAnswer": { "@type": "Answer", "text": "A mix of African and Arabian species." } }
                ] },
            };

        case "is-night-stargazing-experience-worth-it-riyadh":
            return {
                title: "Is the Riyadh Night Stargazing Experience Worth It?",
                seoTitle: "Riyadh Night Stargazing 2026 | Honest Review",
                description: "An honest look at the Night Stargazing with Dinner at Camp experience from Riyadh.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "The desert outside Riyadh has minimal light pollution, making stargazing genuinely rewarding — this experience pairs it with a camp dinner for a full evening out.", tourCard: { slug: "from-riyadh-night-stargazing-with-dinner-at-camp", title: "From Riyadh: Night Stargazing with dinner at Camp", description: "A night stargazing experience with camp dinner.", price: "From $1950", duration: "4.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Clear, moonless nights give the best stargazing conditions — ask your operator if dates can be adjusted around the lunar calendar if that's a priority." }
                ],
                faqs: [
                    { q: "Is the Riyadh night stargazing experience worth it?", a: "Yes, the desert's low light pollution makes for genuinely good stargazing." },
                    { q: "When is the best time for stargazing near Riyadh?", a: "Clear, moonless nights give the best viewing conditions." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the night stargazing experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the desert's low light pollution makes for good stargazing." } },
                    { "@type": "Question", "name": "Best time for stargazing?", "acceptedAnswer": { "@type": "Answer", "text": "Clear, moonless nights." } }
                ] },
            };

        case "is-bedouin-desert-experience-worth-it-riyadh":
            return {
                title: "Is the Bedouin Desert Experience with Camel Ride Worth It?",
                seoTitle: "Riyadh Bedouin Desert Experience 2026 | Honest Review",
                description: "An honest look at Riyadh's Bedouin Desert Experience with Camel Ride.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "This is a deeper cultural immersion than a standard desert safari, focused on traditional Bedouin life alongside the camel ride rather than just activities and scenery.", tourCard: { slug: "riyadh-bedouin-desert-experience-with-camel-ride", title: "Riyadh: Bedouin Desert Experience with Camel Ride", description: "A cultural Bedouin desert experience with a camel ride.", price: "From $2574", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp" } },
                    { title: "Practical Tips", content: "This runs as a full 8-hour day given its depth — worth it specifically for travellers wanting cultural immersion over a quick activity-focused safari." }
                ],
                faqs: [
                    { q: "Is the Bedouin desert experience worth it?", a: "Yes for travellers wanting genuine cultural immersion rather than just desert activities." },
                    { q: "How long is the Bedouin desert experience?", a: "A full 8-hour day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Bedouin desert experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for genuine cultural immersion." } },
                    { "@type": "Question", "name": "How long is it?", "acceptedAnswer": { "@type": "Answer", "text": "A full 8-hour day." } }
                ] },
            };

        case "riyadh-travel-guide-2026":
            return {
                title: "Riyadh Travel Guide 2026",
                description: "Saudi Arabia's capital has opened rapidly to tourism in recent years — here's what first-time visitors need to know.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "Why Visit Riyadh", content: "Riyadh mixes ultra-modern architecture (Kingdom Tower, KAFD) with deep history (Diriyah, Al Masmak Fortress) and the dramatic desert escarpment at Edge of the World just outside the city." },
                    { title: "Getting Around", content: "The Riyadh Metro covers major areas, and ride-hailing apps are widely used for anything else. Most desert day trips (Edge of the World, Red Sand Dunes) require a tour or private transport rather than public transit." }
                ],
                faqs: [
                    { q: "Is Riyadh worth visiting?", a: "Yes, for its mix of modern architecture, history, and the dramatic Edge of the World day trip." },
                    { q: "How do I get around Riyadh?", a: "The Metro for central areas, ride-hailing apps for everything else." }
                ],
            };

        case "best-time-to-visit-riyadh":
            return {
                title: "Best Time to Visit Riyadh",
                description: "Riyadh's desert climate means timing matters a lot more than in most of this project's typical destinations.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "Weather Patterns", content: "November to March is noticeably cooler and the best time for outdoor activities like desert safaris and Edge of the World. Summer (June-August) regularly exceeds 40°C, making outdoor activities genuinely difficult during the day." }
                ],
                faqs: [
                    { q: "What is the best time to visit Riyadh?", a: "November to March, when temperatures are cooler and outdoor activities are comfortable." },
                    { q: "Is Riyadh too hot to visit in summer?", a: "Daytime temperatures regularly exceed 40°C in summer, making outdoor sightseeing difficult — plan around early morning or evening if visiting then." }
                ],
            };

        case "riyadh-1-day-itinerary":
            return {
                title: "Riyadh 1-Day Itinerary",
                description: "A realistic one-day plan for Riyadh covering its main historic and modern sides.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "Morning", content: "Start with Al Masmak Fortress and an Old Riyadh walking tour while it's still cool out." },
                    { title: "Afternoon", content: "Visit the National Museum for historical context, or KAFD for modern architecture." },
                    { title: "Evening", content: "Finish at Kingdom Tower's Sky Bridge or Al Faisaliah Tower for sunset views over the city." }
                ],
                faqs: [
                    { q: "Can Riyadh be seen in one day?", a: "The city center highlights, yes — but Edge of the World and desert day trips need a separate full day." },
                    { q: "What's a must-do in Riyadh in one day?", a: "Al Masmak Fortress, the National Museum, and a sunset view from Kingdom Tower or Al Faisaliah Tower." }
                ],
            };

        case "saudi-arabia-visa-guide-for-tourists":
            return {
                title: "Saudi Arabia Visa Guide for Tourists (Riyadh)",
                description: "Visa requirements for visiting Riyadh and Saudi Arabia.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "Visa Requirements", content: "Saudi Arabia introduced an e-visa system for many nationalities in recent years, a significant change from its historically closed tourism policy. Check Saudi Arabia's official e-visa portal for your specific nationality's requirements before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Riyadh?", a: "Most nationalities need an e-visa, applied for online in advance; verify current requirements for your passport before travel." }
                ],
            };

        case "is-riyadh-safe":
            return {
                title: "Is Riyadh Safe for Tourists?",
                description: "An honest look at safety in Riyadh for visitors.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Riyadh is generally very safe for tourists, with low rates of street crime. The main practical considerations are cultural/dress norms rather than personal safety concerns." },
                    { title: "Practical Tips", content: "Modest dress is expected in public, especially for women (loose-fitting clothing covering shoulders and knees is a safe default) — this is a cultural expectation, not usually strictly enforced for tourists, but worth respecting." }
                ],
                faqs: [
                    { q: "Is Riyadh safe for tourists?", a: "Yes, generally very safe with low rates of street crime." },
                    { q: "What should tourists know about dress code in Riyadh?", a: "Modest, loose-fitting clothing covering shoulders and knees is the respectful default, especially for women." }
                ],
            };

        case "riyadh-food-guide":
            return {
                title: "Riyadh Food Guide",
                description: "What to eat in Riyadh, from traditional Najdi dishes to modern dining.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "Local Specialties", content: "Kabsa (spiced rice with meat) is the Saudi national dish and widely available. Riyadh also has a fast-growing modern dining scene, especially around Boulevard World and JAX district." }
                ],
                faqs: [
                    { q: "What food is Riyadh known for?", a: "Kabsa, the Saudi national dish, alongside a growing modern dining scene." }
                ],
            };

        case "riyadh-public-transport-guide":
            return {
                title: "Riyadh Public Transport Guide",
                description: "How to get around Riyadh using the Metro and ride-hailing apps.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/my-1253838/img0/1600.webp",
                sections: [
                    { title: "Getting Around", content: "The Riyadh Metro, a relatively new system, covers major central areas efficiently. For anywhere outside its reach, ride-hailing apps (Uber and Careem are both widely used) are the practical option." }
                ],
                faqs: [
                    { q: "Is there a metro in Riyadh?", a: "Yes, a relatively new Metro system covering major central areas." },
                    { q: "What ride-hailing apps work in Riyadh?", a: "Both Uber and Careem are widely used." }
                ],
            };

        case "best-al-balad-walking-tour-jeddah":
            return {
                title: "Which Is the Best Al-Balad Walking Tour in Jeddah?",
                seoTitle: "Best Al-Balad Walking Tour Jeddah 2026 | Honest Comparison",
                description: "Compare real Al-Balad (historic Jeddah) walking tours — from a budget guided walk with tea and music to night tours and private certified-guide options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Al-Balad, Jeddah's UNESCO-listed historic district, is the most-toured spot in the city, with dozens of similar walking tours differing mainly on group size, timing (day vs. night), and whether tea/coffee is included.", tourCard: { slug: "jeddah-al-balad-guided-walking-tour-with-tea-music", title: "Jeddah: Al-Balad Guided Walking Tour with Tea & Music", description: "A guided Al-Balad walk with tea and live music.", price: "From $143", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg" } },
                    { title: "Best Value: Guided Walk with Tea & Music", content: "A well-rounded standard option including tea and live music alongside the walking tour itself.", tourCard: { slug: "jeddah-al-balad-guided-walking-tour-with-tea-music", title: "Jeddah: Al-Balad Guided Walking Tour with Tea & Music", description: "The standard Al-Balad walk with tea and music.", price: "From $143", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg" } },
                    { title: "Best Budget Option: Local Guide Walking Tour", content: "A simpler, lower-cost walking tour with a local guide, without the tea/music add-on.", tourCard: { slug: "al-balad-old-town-walking-tour-with-local-guide", title: "Al-Balad Old Town Walking Tour with Local Guide", description: "A straightforward budget Al-Balad walking tour.", price: "From $219", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0b0fbf4113169cd8881aa84696869521b01dacb2f0a672ea7770f388ee6299e8.jpg" } },
                    { title: "Best After Dark: Al-Balad Night Tour", content: "This runs in the evening rather than daytime, when Al-Balad's old coral-stone buildings are lit differently and the heat has eased.", tourCard: { slug: "jeddah-al-balad-night-tour-with-coffee-and-guide", title: "Jeddah: Al-Balad Night Tour with Coffee and Guide", description: "An evening Al-Balad walking tour with coffee.", price: "From $245", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e3ae467a02ecdeee5823865d78c505d93db6612580c13a3c34740a6aedd589e.jpg" } },
                    { title: "Best Private Option: Private Walking Tour with Coffee", content: "A private version rather than a shared group walk, for travellers who want a more personal pace through the old city.", tourCard: { slug: "jeddah-al-balad-private-walking-tour-with-coffee", title: "Jeddah: Al-Balad Private Walking Tour with Coffee", description: "A private Al-Balad walking tour with coffee.", price: "From $312", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/990f7f15f3c79bff97aad6e43c724b269c0ec30811c686144f80e713a6a1aeec.png" } },
                    { title: "Practical Tips", content: "Al-Balad's coral-stone merchant houses and wooden mashrabiya balconies are best appreciated with a guide who can point out details easy to miss — this is a genuine case where local knowledge adds real value beyond just walking around yourself." }
                ],
                faqs: [
                    { q: "What is the best Al-Balad walking tour in Jeddah?", a: "A standard guided walk with tea/music suits most visitors; go private for a personal pace or night tours for the evening atmosphere." },
                    { q: "Is Al-Balad worth visiting in Jeddah?", a: "Yes, it's Jeddah's UNESCO-listed historic district and the city's top attraction for history and architecture." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Al-Balad walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard guided walk with tea/music suits most visitors." } },
                    { "@type": "Question", "name": "Is Al-Balad worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's Jeddah's UNESCO-listed historic district." } }
                ] },
            };

        case "best-bayada-island-boat-trip-jeddah":
            return {
                title: "Which Is the Best Bayada Island Boat Trip from Jeddah?",
                seoTitle: "Best Bayada Island Boat Trip Jeddah 2026 | Honest Comparison",
                description: "Compare real Bayada Island boat trips from Jeddah — from snorkeling-included leisure trips to lunch-included and donut-ride combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed4f210e0e6517f350848334bd097ee92bedc36e6ca660610ef4bb4d10cffdcc.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bayada Island's clear shallow water has earned it the nickname 'Maldives of Jeddah,' and most boat trips there include some form of snorkeling. The differences come down to what else is added — lunch, a donut-ride tow, or private vs. shared boat.", tourCard: { slug: "jeddah-bayada-leisure-boat-trip-with-snorkeling", title: "Jeddah: Bayada Leisure Boat Trip with Snorkeling", description: "A leisure boat trip to Bayada Island with snorkeling.", price: "From $143", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed4f210e0e6517f350848334bd097ee92bedc36e6ca660610ef4bb4d10cffdcc.jpg" } },
                    { title: "Cheapest: Leisure Boat Trip with Snorkeling", content: "At $143, this is the standard entry point for a Bayada Island trip with snorkeling included.", tourCard: { slug: "jeddah-bayada-leisure-boat-trip-with-snorkeling", title: "Jeddah: Bayada Leisure Boat Trip with Snorkeling", description: "The standard-priced Bayada Island snorkeling trip.", price: "From $143", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed4f210e0e6517f350848334bd097ee92bedc36e6ca660610ef4bb4d10cffdcc.jpg" } },
                    { title: "Best Private Option: Private Sea Trip to Bayadah Island", content: "A private rather than shared boat, for groups who want the island to themselves rather than joining other travellers.", tourCard: { slug: "from-jeddah-private-sea-trip-to-bayadah-island", title: "From Jeddah: Private Sea Trip to Bayadah Island", description: "A private boat trip to Bayada Island.", price: "From $195", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2469033c809fd7842d40750ffc9bb505198bffaa695c090d584dc8349d8103b4.jpg" } },
                    { title: "Best for Fun Extras: Boat Trip with Donut Ride", content: "This adds an inflatable donut-ride tow behind the boat, a playful extra for groups or families wanting more than just sunbathing and snorkeling.", tourCard: { slug: "jeddah-bayada-island-boat-trip-with-donut-ride", title: "Jeddah: Bayada Island Boat Trip with Donut Ride", description: "A Bayada Island trip with a donut-ride tow included.", price: "From $779", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f2ba3985497bf0be730157bf6e7a4e2822e5cc55dfc3d31bc6bcc19f1c76ff5b.jpg" } },
                    { title: "Best with Lunch: Lunch Boat Trip to Swim & Snorkel", content: "Pairs the Bayada (or nearby Abu Tair) island trip with a proper lunch, good for making a full day of it rather than a half-day outing.", tourCard: { slug: "bayada-or-abu-tair-island-lunch-boat-trip-to", title: "Bayada or Abu Tair Island: Lunch Boat Trip to Swim & Snorkel", description: "An island boat trip with lunch included.", price: "From $1001", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c0387e76855e764c115f1e8e3387f7cafa24a998ae19fc72c84c9b064c0d98c.jpg" } },
                    { title: "Practical Tips", content: "Water visibility at Bayada is best in calm conditions, typically morning departures — afternoon wind can stir up the shallows. Bring reef-safe sunscreen since the coral here is a genuine, living reef system, not a dive-park attraction." }
                ],
                faqs: [
                    { q: "What is the best Bayada Island boat trip from Jeddah?", a: "A standard leisure trip with snorkeling suits most visitors; go private for an island to yourselves, or add lunch for a fuller day." },
                    { q: "Why is Bayada Island called the 'Maldives of Jeddah'?", a: "Its clear shallow turquoise water and white sand resemble Maldivian beaches, despite being a short boat ride from Jeddah." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Bayada Island boat trip?", "acceptedAnswer": { "@type": "Answer", "text": "A standard leisure trip with snorkeling suits most visitors." } },
                    { "@type": "Question", "name": "Why is it called the 'Maldives of Jeddah'?", "acceptedAnswer": { "@type": "Answer", "text": "Its clear shallow turquoise water and white sand resemble the Maldives." } }
                ] },
            };

        case "best-taif-day-trip-jeddah":
            return {
                title: "Which Is the Best Taif Day Trip from Jeddah?",
                seoTitle: "Best Taif Day Trip from Jeddah 2026 | Honest Comparison",
                description: "Compare real Taif day trips from Jeddah — the 'City of Roses' in the mountains above the Red Sea heat.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9037f256d7717b0a2fa7803baaecce533ec11a8d3d7bf3d148099a9eca613c38.jpg",
                sections: [
                    { title: "The Short Answer", content: "Taif sits in the mountains above Jeddah, noticeably cooler and known for its rose gardens and distillation farms. Most day trips cover the drive up via the scenic Al-Hada escarpment road plus the city's sights.", tourCard: { slug: "from-jeddah-taif-city-of-roses-private-day-tour", title: "From Jeddah: Taif City of Roses Private Day Tour", description: "A private day trip to Taif, the City of Roses.", price: "From $428", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9037f256d7717b0a2fa7803baaecce533ec11a8d3d7bf3d148099a9eca613c38.jpg" } },
                    { title: "Best Value: Private Day Tour", content: "A full private day trip covering Taif's rose gardens and city sights without joining a larger group.", tourCard: { slug: "from-jeddah-taif-city-of-roses-private-day-tour", title: "From Jeddah: Taif City of Roses Private Day Tour", description: "The standard private Taif day trip.", price: "From $428", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9037f256d7717b0a2fa7803baaecce533ec11a8d3d7bf3d148099a9eca613c38.jpg" } },
                    { title: "Best with Lunch Included: Full Day Tour with Lunch", content: "This version, departing from both Jeddah and Makkah, adds lunch to the full-day Taif itinerary.", tourCard: { slug: "from-jeddah-makkah-taif-full-day-tour-with-lunch", title: "From Jeddah & Makkah: Taif Full Day Tour with Lunch", description: "A Taif day trip with lunch included, departing from Jeddah or Makkah.", price: "From $454", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e3e3832f2c8fd284.jpeg" } },
                    { title: "Practical Tips", content: "The Al-Hada road up to Taif has dramatic mountain switchbacks and is itself part of the appeal — try to get a window seat. Temperatures in Taif run noticeably cooler than Jeddah's coastal heat, a welcome break in summer." }
                ],
                faqs: [
                    { q: "What is the best Taif day trip from Jeddah?", a: "A private day tour covering the rose gardens and city sights suits most visitors; add lunch for convenience on the full-day version." },
                    { q: "Why is Taif called the City of Roses?", a: "It's known for its rose gardens and traditional rose-water distillation farms in the surrounding mountains." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Taif day trip from Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "A private day tour covering the rose gardens and city sights." } },
                    { "@type": "Question", "name": "Why is Taif called the City of Roses?", "acceptedAnswer": { "@type": "Answer", "text": "It's known for its rose gardens and rose-water distillation farms." } }
                ] },
            };

        case "best-desert-safari-tour-jeddah":
            return {
                title: "Which Is the Best Desert Safari Tour in Jeddah?",
                seoTitle: "Best Desert Safari Tour Jeddah 2026 | Honest Comparison",
                description: "Compare real desert safari tours from Jeddah — from quad-bike mornings to dune bashing and camel farm combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c31fb6627ad733bc.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Jeddah's desert safaris run on the dunes just outside the city, usually combining dune bashing or quad biking with a stop at a camel farm. Timing (morning vs. full day) and vehicle type are the main differences.", tourCard: { slug: "jeddah-morning-desert-safari-with-quad-bike-tour", title: "Jeddah: Morning Desert Safari with Quad Bike Tour", description: "A morning desert safari with quad biking.", price: "From $325", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c31fb6627ad733bc.jpeg" } },
                    { title: "Best Value: Morning Safari with Quad Bike", content: "A straightforward morning desert outing combining dune scenery with quad biking.", tourCard: { slug: "jeddah-morning-desert-safari-with-quad-bike-tour", title: "Jeddah: Morning Desert Safari with Quad Bike Tour", description: "The standard morning quad-bike desert safari.", price: "From $325", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c31fb6627ad733bc.jpeg" } },
                    { title: "Best for Dune Bashing: Private Desert Dune Bashing Adventure", content: "This focuses specifically on 4WD dune bashing itself as the main activity, run as a private experience.", tourCard: { slug: "jeddah-3-hour-private-desert-dune-bashing", title: "Jeddah: 3-Hour Private Desert Dune Bashing Adventure", description: "A private 4WD dune-bashing adventure.", price: "From $319", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/faec7b78fb369bfe41a60b6a09ee34058bc0a394a56e5a05fe2e4b8597c3f42f.jpg" } },
                    { title: "Practical Tips", content: "Morning or late-afternoon departures avoid the harshest midday desert heat — this matters more here than in a lot of other desert destinations given Jeddah's climate." }
                ],
                faqs: [
                    { q: "What is the best desert safari tour in Jeddah?", a: "A morning quad-bike safari suits most visitors; go for a dedicated dune-bashing tour if that's the main draw." },
                    { q: "What's included in a Jeddah desert safari?", a: "Typically dune bashing or quad biking plus a camel farm stop; timing varies by tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best desert safari tour in Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "A morning quad-bike safari suits most visitors." } },
                    { "@type": "Question", "name": "What's included?", "acceptedAnswer": { "@type": "Answer", "text": "Typically dune bashing or quad biking plus a camel farm stop." } }
                ] },
            };

        case "best-red-sea-boat-tour-jeddah":
            return {
                title: "Which Is the Best Red Sea Jet Ski or Speedboat Tour in Jeddah?",
                seoTitle: "Best Red Sea Jet Ski Speedboat Tour Jeddah 2026 | Comparison",
                description: "Compare real Red Sea jet ski and speedboat tours from Jeddah's Corniche and Obhur Beach.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b2948167b64e44c3d69128910b14e61b3ee5446bde3167fe2e4abb40704d00c7.jpeg",
                sections: [
                    { title: "The Short Answer", content: "For a short, fast burst of activity on the Red Sea rather than a full boat trip, jet ski and speedboat rides are the go-to — both run short sessions, typically 30-40 minutes, with the main choice being jet ski (self-driven) vs. speedboat (with a captain).", tourCard: { slug: "jeddah-red-sea-jet-ski-tour-with-photos", title: "Jeddah: Red Sea Jet Ski Tour with Photos", description: "A self-driven jet ski tour on the Red Sea with photos included.", price: "From $448", duration: "35 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b2948167b64e44c3d69128910b14e61b3ee5446bde3167fe2e4abb40704d00c7.jpeg" } },
                    { title: "Best for Driving Yourself: Jet Ski Tour with Photos", content: "A self-driven jet ski session with photos included to capture the ride.", tourCard: { slug: "jeddah-red-sea-jet-ski-tour-with-photos", title: "Jeddah: Red Sea Jet Ski Tour with Photos", description: "The standard self-driven jet ski experience.", price: "From $448", duration: "35 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b2948167b64e44c3d69128910b14e61b3ee5446bde3167fe2e4abb40704d00c7.jpeg" } },
                    { title: "Best for a Guided Ride: Speedboat Tour with Captain", content: "This has a captain driving, suiting travellers who want the speed and spray without needing a driving license or steering themselves.", tourCard: { slug: "jeddah-red-sea-speedboat-tour-with-captain", title: "Jeddah: Red Sea Speedboat Tour with Captain", description: "A captained speedboat ride on the Red Sea.", price: "From $332", duration: "40 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6d73061814c1017d0a00f96bc2033b67535408bf5ba1a1acc6a8e7e1c1fbb49b.jpg" } },
                    { title: "Practical Tips", content: "Both run short, so pair with a longer Al-Balad walk or Bayada Island trip the same day if you want a fuller itinerary rather than just the water activity alone." }
                ],
                faqs: [
                    { q: "What is the best Red Sea jet ski or speedboat tour in Jeddah?", a: "Jet ski if you want to drive yourself; speedboat with a captain if you'd rather just enjoy the ride." },
                    { q: "Do I need a license for the Jeddah jet ski tour?", a: "Operators typically provide a brief orientation rather than requiring a formal license, but check specifics when booking." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best jet ski or speedboat tour in Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "Jet ski to drive yourself; speedboat with a captain for a guided ride." } },
                    { "@type": "Question", "name": "Do I need a license?", "acceptedAnswer": { "@type": "Answer", "text": "Operators typically provide a brief orientation instead of requiring a formal license." } }
                ] },
            };

        case "best-snorkeling-diving-tour-jeddah":
            return {
                title: "Which Is the Best Snorkeling or Diving Tour in Jeddah?",
                seoTitle: "Best Snorkeling Diving Tour Jeddah 2026 | Honest Comparison",
                description: "Compare real Red Sea snorkeling and diving tours from Jeddah, separate from the Bayada Island boat trips.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18a970c362bfda61a78075d99acbeeca6f1b3ca3ef79231829e5760e6e615da2.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Jeddah's Red Sea reefs are a genuine diving and snorkeling destination separate from the island day-trips — these tours focus specifically on the reef itself rather than beach/island time.", tourCard: { slug: "jeddah-guided-snorkeling-trip-with-snacks-and", title: "Jeddah: Guided Snorkeling Trip with Snacks and Drinks", description: "A guided Red Sea snorkeling trip with snacks and drinks.", price: "From $143", duration: "5.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe2e2c258a34ded4e90a46a1360e1a72ff2d94a384b5bb396936306eb80e16dc.jpg" } },
                    { title: "Best Value: Guided Snorkeling Trip", content: "A straightforward guided snorkeling outing with snacks and drinks included.", tourCard: { slug: "jeddah-guided-snorkeling-trip-with-snacks-and", title: "Jeddah: Guided Snorkeling Trip with Snacks and Drinks", description: "The standard guided snorkeling trip.", price: "From $143", duration: "5.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe2e2c258a34ded4e90a46a1360e1a72ff2d94a384b5bb396936306eb80e16dc.jpg" } },
                    { title: "Best for Certified Divers: Snorkeling & Diving Yacht Trip", content: "This runs on a yacht rather than a basic boat and caters to both snorkelers and certified divers in the same trip.", tourCard: { slug: "jeddah-red-sea-snorkeling-and-diving-yacht-trip", title: "Jeddah: Red Sea Snorkeling and Diving Yacht Trip", description: "A yacht trip combining snorkeling and scuba diving.", price: "From $156", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18a970c362bfda61a78075d99acbeeca6f1b3ca3ef79231829e5760e6e615da2.jpeg" } },
                    { title: "Practical Tips", content: "Certified divers should confirm their certification level and bring proof of certification — some operators require it before allowing deeper reef dives, while snorkeling has no such requirement." }
                ],
                faqs: [
                    { q: "What is the best snorkeling or diving tour in Jeddah?", a: "A guided snorkeling trip suits casual swimmers; the yacht trip suits certified divers wanting to go deeper." },
                    { q: "Do I need certification to dive in Jeddah?", a: "Yes for scuba diving; snorkeling has no certification requirement." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best snorkeling or diving tour in Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "A guided snorkeling trip suits casual swimmers." } },
                    { "@type": "Question", "name": "Do I need certification to dive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for scuba diving, no for snorkeling." } }
                ] },
            };

        case "is-moon-mountain-hike-worth-it-jeddah":
            return {
                title: "Is the Moon Mountain/Valley Hike Near Jeddah Worth It?",
                seoTitle: "Moon Mountain Hike Jeddah 2026 | Honest Review",
                description: "An honest look at the Moon Mountain and Moon Valley guided hikes near Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/079dc3f54799dcc007322973c37732ca0c5fa63bc1d197e0202fdbc8ff9f0e78.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Moon Mountain (and the nearby Moon Valley) offer a genuinely different landscape from Jeddah's coast — rocky desert terrain good for sunrise/sunset hikes. Two real versions exist: a standard guided hike with snacks, and a meditation-focused hike through Moon Valley.", tourCard: { slug: "jeddah-moon-mountain-guided-hiking-tour-with", title: "Jeddah: Moon Mountain Guided Hiking Tour with Snacks", description: "A guided hike up Moon Mountain with snacks included.", price: "From $156", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/079dc3f54799dcc007322973c37732ca0c5fa63bc1d197e0202fdbc8ff9f0e78.jpeg" } },
                    { title: "Alternative: Moon Valley Hike with Meditation", content: "This version runs through Moon Valley specifically and adds a meditation component, a slower-paced alternative to the standard mountain hike.", tourCard: { slug: "from-jeddah-moon-valley-guided-hike-with", title: "From Jeddah: Moon Valley Guided Hike with Meditation", description: "A meditation-focused guided hike through Moon Valley.", price: "From $155", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e59191b2cca5e8ef73eb30e6c28067a9a4b7b3ab5beadd4ac7f92de7c0068242.jpg" } },
                    { title: "Practical Tips", content: "Worth it for travellers wanting a landscape break from Jeddah's beaches and old town — sunrise or sunset timing is strongly recommended over midday heat." }
                ],
                faqs: [
                    { q: "Is the Moon Mountain hike near Jeddah worth it?", a: "Yes, for a different desert-landscape experience away from the coast — time it for sunrise or sunset." },
                    { q: "What's the difference between the Moon Mountain and Moon Valley hikes?", a: "Moon Mountain is a standard guided hike with snacks; Moon Valley adds a meditation component." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Moon Mountain hike worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different desert-landscape experience." } },
                    { "@type": "Question", "name": "What's the difference between the two hikes?", "acceptedAnswer": { "@type": "Answer", "text": "Moon Mountain is standard; Moon Valley adds meditation." } }
                ] },
            };

        case "is-teamlab-borderless-jeddah-worth-it":
            return {
                title: "Is teamLab Borderless Jeddah Worth It?",
                seoTitle: "teamLab Borderless Jeddah 2026 | Honest Review",
                description: "An honest look at teamLab Borderless Jeddah, the immersive digital art museum.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bba99e3f039216a5ca91e2655f7cebcfe01e9e22a7bdd02f6549e765a70d11d5.jpg",
                sections: [
                    { title: "The Short Answer", content: "teamLab Borderless brings over 50 immersive digital art installations to Jeddah, the same globally known format seen in Tokyo and other cities. Worth it for travellers who enjoy interactive, photogenic art experiences.", tourCard: { slug: "teamlab-borderless-jeddah-digital-art-museum-with", title: "teamLab Borderless Jeddah: Digital Art Museum with 50+ Works", description: "Entry to the teamLab Borderless immersive digital art museum.", price: "From $150", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bba99e3f039216a5ca91e2655f7cebcfe01e9e22a7bdd02f6549e765a70d11d5.jpg" } },
                    { title: "Combo Option: Marina Tour, Art Workshop & teamLab", content: "This bundles the teamLab visit with a marina tour and an art workshop for a fuller day out.", tourCard: { slug: "jeddah-marina-tour-art-workshop-teamlab-exhibition", title: "Jeddah Marina Tour, Art Workshop & teamLab Exhibition", description: "teamLab combined with a marina tour and art workshop.", price: "From $233", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23aecc511d9b380eb39b835fe26938b0189b638b4d4107b7dc3a37de85ad82c5.jpeg" } },
                    { title: "Practical Tips", content: "Allow a full 2-3 hours inside to see the installations properly — rushing through defeats the point of an immersive space like this." }
                ],
                faqs: [
                    { q: "Is teamLab Borderless Jeddah worth it?", a: "Yes, for travellers who enjoy immersive digital art — it's the same acclaimed format as teamLab's other global locations." },
                    { q: "How long should I spend at teamLab Borderless Jeddah?", a: "At least 2-3 hours to properly experience the installations." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is teamLab Borderless Jeddah worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travellers who enjoy immersive digital art." } },
                    { "@type": "Question", "name": "How long should I spend there?", "acceptedAnswer": { "@type": "Answer", "text": "At least 2-3 hours." } }
                ] },
            };

        case "best-jeddah-city-tour":
            return {
                title: "Which Is the Best Jeddah City Tour?",
                seoTitle: "Best Jeddah City Tour 2026 | Honest Comparison",
                description: "Compare real Jeddah city tours covering Al-Balad, the Corniche, and the city's modern landmarks.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c80e086564d78e8946d30565fb77d1bf54d3a7603fbdfec57526bdff624e8cde.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A city tour covers more ground than a dedicated Al-Balad walk alone — typically Al-Balad plus the Corniche waterfront and modern city highlights like the King Fahd Fountain.", tourCard: { slug: "jeddah-city-highlights-tour-with-local-guide", title: "Jeddah: City Highlights Tour with Local Guide", description: "A city tour covering Jeddah's key highlights.", price: "From $325", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c80e086564d78e8946d30565fb77d1bf54d3a7603fbdfec57526bdff624e8cde.jpeg" } },
                    { title: "Best Combo: City Tour with Al-Balad and Corniche", content: "This explicitly pairs the historic Al-Balad district with a Corniche waterfront visit in one tour.", tourCard: { slug: "jeddah-private-city-tour-with-al-balad-and", title: "Jeddah: Private City Tour with Al-Balad and Corniche", description: "A private city tour combining Al-Balad and the Corniche.", price: "From $351", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c97ac459237c8482729608abd767841331cffa8df1865f7ca1abddb0dc3f7598.jpeg" } },
                    { title: "Practical Tips", content: "If you've already booked a dedicated Al-Balad walking tour separately, a full city tour may feel repetitive — in that case, a Corniche-focused add-on alone is more efficient than a second full city tour." }
                ],
                faqs: [
                    { q: "What is the best Jeddah city tour?", a: "One covering both Al-Balad and the Corniche gives the broadest overview in a single outing." },
                    { q: "Should I book a city tour if I'm already doing an Al-Balad walk?", a: "Consider a Corniche-focused add-on instead, to avoid repeating the same historic-district content." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Jeddah city tour?", "acceptedAnswer": { "@type": "Answer", "text": "One covering both Al-Balad and the Corniche." } },
                    { "@type": "Question", "name": "Should I book both a city tour and an Al-Balad walk?", "acceptedAnswer": { "@type": "Answer", "text": "Probably not both — pick a Corniche add-on instead to avoid repetition." } }
                ] },
            };

        case "is-mecca-day-trip-worth-it-from-jeddah":
            return {
                title: "Is a Mecca Day Trip from Jeddah Worth It?",
                seoTitle: "Mecca Day Trip from Jeddah 2026 | Honest Review",
                description: "An honest look at the Mecca Historical & Religious Tour from Jeddah — who it's for and what's actually included.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd30ecf865a5c25978ee112c392504f8efec610e4930909d10668b2d30fdbee5.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour covers Mecca's historical and religious sites viewable by non-pilgrims from outside the Grand Mosque's restricted areas — note that access to the Grand Mosque itself and Umrah/Hajj rites are restricted to Muslims under Saudi law, so this is a historical-context tour, not a religious pilgrimage package.", tourCard: { slug: "mecca-historical-religious-tour-with-from-jeddah", title: "Mecca Historical & Religious Tour with from Jeddah", description: "A historical and religious context tour of Mecca from Jeddah.", price: "From $624", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd30ecf865a5c25978ee112c392504f8efec610e4930909d10668b2d30fdbee5.jpg" } },
                    { title: "Practical Tips", content: "Confirm with the operator exactly what's included before booking — access rules around Mecca are strictly regulated, and what's viewable differs significantly depending on faith and status." }
                ],
                faqs: [
                    { q: "Can non-Muslims visit Mecca?", a: "No, access to Mecca's central holy sites is restricted to Muslims under Saudi law — confirm exactly what any tour includes before booking." },
                    { q: "Is the Mecca day trip from Jeddah worth it?", a: "Worth checking the specifics with the operator first, since Mecca access is religiously and legally restricted." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Can non-Muslims visit Mecca?", "acceptedAnswer": { "@type": "Answer", "text": "No, access to Mecca's central holy sites is restricted to Muslims." } },
                    { "@type": "Question", "name": "Is the Mecca day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Check specifics with the operator given access restrictions." } }
                ] },
            };

        case "is-jeddah-stargazing-camp-worth-it":
            return {
                title: "Is the Jeddah Private Mobile Stargazing Camp Worth It?",
                seoTitle: "Jeddah Stargazing Camp 2026 | Honest Review",
                description: "An honest look at Jeddah's private mobile stargazing camp experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/586a20e59edecb85ed600c3357e8b031751911f02ac6987bae12afc593b5437e.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This takes you out beyond Jeddah's city light pollution for a telescope-equipped stargazing session, set up as a private mobile camp rather than a fixed observatory.", tourCard: { slug: "jeddah-private-mobile-stargazing-camp-experience", title: "Jeddah: Private Mobile Stargazing Camp Experience", description: "A private stargazing camp experience outside Jeddah.", price: "From $1039", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/586a20e59edecb85ed600c3357e8b031751911f02ac6987bae12afc593b5437e.jpeg" } },
                    { title: "Practical Tips", content: "Worth it specifically for clear, moonless nights — check the lunar calendar before booking since a bright moon washes out fainter stars." }
                ],
                faqs: [
                    { q: "Is the Jeddah stargazing camp worth it?", a: "Yes on a clear, moonless night away from city light pollution." },
                    { q: "How long does the stargazing experience take?", a: "Around 10 hours including the drive out and back." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Jeddah stargazing camp worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes on a clear, moonless night." } },
                    { "@type": "Question", "name": "How long does it take?", "acceptedAnswer": { "@type": "Answer", "text": "Around 10 hours including the drive." } }
                ] },
            };

        case "jeddah-travel-guide-2026":
            return {
                title: "Jeddah Travel Guide 2026",
                description: "Saudi Arabia's Red Sea gateway city, mixing a UNESCO-listed old town with modern beaches and a growing cultural scene.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "Why Visit Jeddah", content: "Jeddah blends Al-Balad's historic coral-stone architecture with Red Sea beaches, island day trips, and newer cultural additions like teamLab Borderless — a good mix of history and modern attractions in one coastal city." },
                    { title: "Getting Around", content: "Taxis and ride-hailing apps (Uber/Careem) are the standard way to get around; Al-Balad itself is best explored on foot once you're there." }
                ],
                faqs: [
                    { q: "Is Jeddah worth visiting?", a: "Yes, for Al-Balad's history, Red Sea beaches and island trips, and a growing modern cultural scene." },
                    { q: "How do I get around Jeddah?", a: "Ride-hailing apps for getting between areas; walking within Al-Balad itself." }
                ],
            };

        case "best-time-to-visit-jeddah":
            return {
                title: "Best Time to Visit Jeddah",
                description: "Jeddah's coastal heat and humidity make timing matter more than in Riyadh's drier desert climate.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "Weather Patterns", content: "November to March is noticeably more comfortable, with temperatures in the 25-30°C range. Summer (June-September) is hot and humid given the Red Sea coastal location, making outdoor activities like Al-Balad walks or desert safaris much tougher." }
                ],
                faqs: [
                    { q: "What is the best time to visit Jeddah?", a: "November to March, for cooler and less humid conditions." }
                ],
            };

        case "jeddah-1-day-itinerary":
            return {
                title: "Jeddah 1-Day Itinerary",
                description: "A realistic one-day plan for Jeddah covering its historic and coastal sides.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "Morning", content: "Start with an Al-Balad walking tour while temperatures are still manageable." },
                    { title: "Afternoon", content: "Head to the Corniche waterfront or book a Bayada Island boat trip if you have more time." },
                    { title: "Evening", content: "Finish with dinner along the Corniche, or an Al-Balad night tour if you skipped the morning version." }
                ],
                faqs: [
                    { q: "Can Jeddah be seen in one day?", a: "The core sights, yes — Al-Balad and the Corniche fit comfortably into a day; island trips need their own half-day." }
                ],
            };

        case "is-jeddah-safe":
            return {
                title: "Is Jeddah Safe for Tourists?",
                description: "An honest look at safety in Jeddah for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Jeddah is generally very safe for tourists, with low violent crime rates. The main things to be mindful of are local dress-code and cultural norms rather than personal safety concerns." }
                ],
                faqs: [
                    { q: "Is Jeddah safe for tourists?", a: "Yes, generally very safe — be mindful of local dress codes and cultural norms rather than safety concerns." }
                ],
            };

        case "jeddah-dress-code-guide":
            return {
                title: "Jeddah Dress Code Guide for Tourists",
                description: "What to wear in Jeddah as a visitor, and where the rules differ from the rest of Saudi Arabia.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "What to Wear", content: "Modest dress (covering shoulders and knees) is expected in public areas for both men and women; an abaya is not legally required for foreign women, but conservative clothing is still expected. Swimwear is fine at private beach clubs and resort areas but not in public spaces." }
                ],
                faqs: [
                    { q: "Do foreign women need to wear an abaya in Jeddah?", a: "No, it's not legally required, but modest, conservative clothing is still expected in public." },
                    { q: "Can I wear swimwear in Jeddah?", a: "Yes, at private beach clubs and resorts, but not in general public spaces." }
                ],
            };

        case "is-pottery-workshop-worth-it-jeddah":
            return {
                title: "Is the Jeddah Pottery Workshop Worth It?",
                seoTitle: "Jeddah Pottery Workshop 2026 | Honest Review",
                description: "An honest look at Jeddah's make-and-take pottery workshop with coffee and dates.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f8012aba81cfcddb5d95217ea2eabfc13dffc0afc450c32678bc9eb7e713eaa2.jpg",
                sections: [
                    { title: "The Short Answer", content: "A hands-on pottery workshop where you make and keep your own piece, served with traditional Saudi coffee and dates — a slower, creative alternative to sightseeing-heavy days.", tourCard: { slug: "jeddah-make-and-take-pottery-workshop-with-coffee", title: "Jeddah: Make-and-Take Pottery Workshop with Coffee & Dates", description: "A hands-on pottery workshop with Saudi coffee and dates.", price: "From $59", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f8012aba81cfcddb5d95217ea2eabfc13dffc0afc450c32678bc9eb7e713eaa2.jpg" } },
                    { title: "Practical Tips", content: "Worth it for travellers wanting a creative, hands-on break between sightseeing days — you take your finished piece home as a souvenir." }
                ],
                faqs: [
                    { q: "Is the Jeddah pottery workshop worth it?", a: "Yes, for a creative hands-on activity and a souvenir you make yourself." }
                ],
            };

        case "is-paddleboarding-worth-it-jeddah":
            return {
                title: "Is Jeddah's Red Sea Stand-Up Paddleboarding Worth It?",
                seoTitle: "Jeddah Stand-Up Paddleboarding 2026 | Honest Review",
                description: "An honest look at Jeddah's Red Sea stand-up paddleboarding experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0b19fc5035b6ace23cf58822c12a1fe58cdbb00907c6be9924ced09f1db6555a.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A short, low-cost paddleboarding session on calm Red Sea water near Jeddah's coast — a gentler alternative to jet ski or speedboat tours.", tourCard: { slug: "jeddah-red-sea-stand-up-paddleboarding-experience", title: "Jeddah: Red Sea Stand-Up Paddleboarding Experience", description: "A stand-up paddleboarding session on the Red Sea.", price: "From $33", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0b19fc5035b6ace23cf58822c12a1fe58cdbb00907c6be9924ced09f1db6555a.jpeg" } },
                    { title: "Practical Tips", content: "Good for beginners since no prior experience is needed; calmer morning water makes balancing easier than later in the day." }
                ],
                faqs: [
                    { q: "Is Jeddah's paddleboarding experience worth it?", a: "Yes, it's an affordable, beginner-friendly way to get on the Red Sea." }
                ],
            };

        case "is-museum-of-islamic-art-worth-it-jeddah":
            return {
                title: "Is the Museum of Islamic Art in Jeddah Worth It?",
                seoTitle: "Museum of Islamic Art Jeddah 2026 | Honest Review",
                description: "An honest look at the Museum of Islamic Art guided tour in Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f0c1a38f4e33a66638f50e79a5935e10c7d50154879c1670701abd529bab32c7.jpg",
                sections: [
                    { title: "The Short Answer", content: "A guided tour of Jeddah's Islamic art collection, a good lower-key cultural stop if you want a break from outdoor heat or want to pair history-focused sightseeing with a museum visit.", tourCard: { slug: "museum-of-islamic-art-guided-tour", title: "Museum of Islamic Art Guided Tour", description: "A guided tour of the Museum of Islamic Art in Jeddah.", price: "From $201", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f0c1a38f4e33a66638f50e79a5935e10c7d50154879c1670701abd529bab32c7.jpg" } },
                    { title: "Practical Tips", content: "A good midday option when outdoor heat makes Al-Balad walking less appealing — air-conditioned and indoors." }
                ],
                faqs: [
                    { q: "Is the Museum of Islamic Art in Jeddah worth it?", a: "Yes, especially as a midday indoor break from the heat, with genuine cultural depth." }
                ],
            };

        case "jeddah-food-guide":
            return {
                title: "Jeddah Food Guide",
                description: "What to eat in Jeddah, from Al-Balad street food to Red Sea seafood.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1c6e7d2ba651075f4b60f42eee190b03d60f6866cb3b79052fea97e72fd9ca2.jpeg",
                sections: [
                    { title: "Local Specialties", content: "Jeddah is known for fresh Red Sea seafood given its coastal location, plus regional Hejazi dishes like mandi and saleeg. Al-Balad's old streets have traditional cafes worth seeking out for the full local experience." }
                ],
                faqs: [
                    { q: "What food is Jeddah known for?", a: "Fresh Red Sea seafood and regional Hejazi dishes like mandi and saleeg." }
                ],
            };

        case "best-hegra-tour-alula":
            return {
                title: "Which Is the Best Hegra Tour in AlUla?",
                seoTitle: "Best Hegra Tour AlUla 2026 | Honest Comparison",
                description: "Compare real Hegra (Madain Saleh) tours in AlUla — Saudi's first UNESCO World Heritage Site — from a $46 basic tour to vintage Land Rover and local-guide combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "The Short Answer", content: "Hegra's Nabataean rock tombs are AlUla's single biggest draw and Saudi's first UNESCO site. A basic guided tour covers the tombs; pricier versions add a local guide, vintage transport, or pair it with Dadan and Old Town.", tourCard: { slug: "from-alula-hegra-tour", title: "From AlUla: Hegra Tour", description: "A straightforward guided tour of Hegra's Nabataean tombs.", price: "From $46", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png" } },
                    { title: "Cheapest: Basic Hegra Tour", content: "At $46, this is the lowest-priced way to see Hegra's tombs with a guide.", tourCard: { slug: "from-alula-hegra-tour", title: "From AlUla: Hegra Tour", description: "The budget Hegra tour option.", price: "From $46", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png" } },
                    { title: "Best Value Group Tour: UNESCO Shuttle Bus Tour", content: "This runs as a shuttle-bus group tour of the UNESCO-listed site, a practical middle option between the cheapest and the private versions.", tourCard: { slug: "al-ula-group-shuttle-bus-tour-of-unesco-listed", title: "Al-Ula: Group Shuttle Bus Tour of UNESCO-Listed Hegra", description: "A group shuttle-bus tour of Hegra.", price: "From $496", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/313a2aa40bfe6a85f0964f682c2c84888ca5594e273455f6adcbb7496a936b37.jpeg" } },
                    { title: "Best Combo: Old Town, Hegra Tombs & More", content: "Pairs Hegra with AlUla's Old Town in a single day, efficient if you want both without two separate bookings.", tourCard: { slug: "al-ula-day-tour-of-old-town-hegra-tombs", title: "Al-Ula: Day Tour of Old Town, Hegra Tombs & Elephant Rock", description: "A combo day covering Old Town, Hegra, and Elephant Rock.", price: "From $259", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/067c27e7250e4c399d25aa1e10bad4c43bd014be55c7a33a4e86a868383aefbb.jpg" } },
                    { title: "Practical Tips", content: "Hegra can only be visited with an official guide (independent entry isn't permitted), so every tour here already includes that requirement built in. Midday heat is intense outside winter months — early morning or sunset slots are more comfortable." }
                ],
                faqs: [
                    { q: "What is the best Hegra tour in AlUla?", a: "A basic guided tour suits most visitors; combo tours add Old Town or Elephant Rock for a fuller day." },
                    { q: "Can I visit Hegra without a guide?", a: "No, independent entry isn't permitted — all visits require an official guide, which every tour includes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Hegra tour in AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "A basic guided tour suits most visitors." } },
                    { "@type": "Question", "name": "Can I visit Hegra without a guide?", "acceptedAnswer": { "@type": "Answer", "text": "No, independent entry isn't permitted." } }
                ] },
            };

        case "best-dadan-jabal-ikmah-tour-alula":
            return {
                title: "Which Is the Best Dadan & Jabal Ikmah Tour in AlUla?",
                seoTitle: "Best Dadan Jabal Ikmah Tour AlUla 2026 | Comparison",
                description: "Compare real Dadan and Jabal Ikmah ancient rock inscription tours in AlUla, from a $25 budget option to optional-pickup versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e3d32074bdc6e38fb5d1c1038e59f5fa9cfdbbed4d87e96005ffb238ec9fb8f7.jpg",
                sections: [
                    { title: "The Short Answer", content: "Dadan (one of the ancient Arabian Peninsula's largest cities) and Jabal Ikmah's open-air rock inscriptions are usually visited together as a shorter, less crowded alternative to Hegra.", tourCard: { slug: "alula-dadan-jabal-ikmah-tour-of-ancient-rock", title: "AlUla: Dadan & Jabal Ikmah Tour of Ancient Rock Inscriptions", description: "A guided tour of Dadan and Jabal Ikmah's ancient inscriptions.", price: "From $25", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e3d32074bdc6e38fb5d1c1038e59f5fa9cfdbbed4d87e96005ffb238ec9fb8f7.jpg" } },
                    { title: "Cheapest: Standard Tour", content: "At $25, this is the lowest-priced way to see both sites with a guide.", tourCard: { slug: "alula-dadan-jabal-ikmah-tour-of-ancient-rock", title: "AlUla: Dadan & Jabal Ikmah Tour of Ancient Rock Inscriptions", description: "The budget option for Dadan and Jabal Ikmah.", price: "From $25", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e3d32074bdc6e38fb5d1c1038e59f5fa9cfdbbed4d87e96005ffb238ec9fb8f7.jpg" } },
                    { title: "Best with Pickup: Optional Hotel Pickup Version", content: "This adds optional hotel pickup to the standard tour, convenient if you don't want to arrange your own transport to the meeting point.", tourCard: { slug: "al-ula-dadan-jabal-ikmah-tour-with-optional-pickup", title: "Al-Ula: Dadan & Jabal Ikmah Tour with Optional Pickup", description: "The same tour with optional hotel pickup.", price: "From $28", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62540f47a7ef9.jpeg" } },
                    { title: "Practical Tips", content: "Dadan and Jabal Ikmah are far less crowded than Hegra, making this a good choice if you want a quieter, more contemplative visit to AlUla's ancient inscriptions." }
                ],
                faqs: [
                    { q: "What is the best Dadan and Jabal Ikmah tour in AlUla?", a: "A standard guided tour suits most visitors; add hotel pickup for convenience." },
                    { q: "Is Dadan less crowded than Hegra?", a: "Yes, generally — it's a quieter alternative covering a different part of AlUla's ancient history." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Dadan and Jabal Ikmah tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard guided tour suits most visitors." } },
                    { "@type": "Question", "name": "Is Dadan less crowded than Hegra?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, generally quieter." } }
                ] },
            };

        case "best-old-town-tour-alula":
            return {
                title: "Which Is the Best Old Town Tour in AlUla?",
                seoTitle: "Best Old Town Tour AlUla 2026 | Honest Comparison",
                description: "Compare real AlUla Old Town tours — from a basic $64 walking tour to a private sunset version with the Oasis and Harrat.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a2db9ebff323fde0435b8a5e2ff238183662e034ef002f64f6d6d5fba59d1536.png",
                sections: [
                    { title: "The Short Answer", content: "AlUla's mudbrick Old Town, inhabited for centuries until the 1980s, is walkable in under an hour with a basic guide — pricier private versions extend into the Oasis and Harrat lava field at sunset.", tourCard: { slug: "tour-alulas-old-town", title: "Tour AlUla's Old Town", description: "A basic walking tour of AlUla's historic mudbrick Old Town.", price: "From $64", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a2db9ebff323fde0435b8a5e2ff238183662e034ef002f64f6d6d5fba59d1536.png" } },
                    { title: "Cheapest: Basic Old Town Walk", content: "At $64, this covers the Old Town's mudbrick lanes with a guide in under an hour.", tourCard: { slug: "tour-alulas-old-town", title: "Tour AlUla's Old Town", description: "The budget Old Town walking tour.", price: "From $64", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a2db9ebff323fde0435b8a5e2ff238183662e034ef002f64f6d6d5fba59d1536.png" } },
                    { title: "Best for Sunset: Private Old Town, Oasis & Harrat Sunset", content: "This private version extends the Old Town visit into the palm Oasis and the Harrat lava field, timed for sunset light.", tourCard: { slug: "alula-private-old-town-oasis-harrat-sunset", title: "AlUla Private Old Town, Oasis & Harrat Sunset", description: "A private sunset tour covering Old Town, Oasis, and Harrat.", price: "From $298", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b977d84c9ff11d53d2a1a517275aa3f50d4e6c01e0d198b5052c0a6a52c38dc.png" } },
                    { title: "Practical Tips", content: "The Old Town's narrow lanes offer welcome shade from AlUla's intense sun — a good midday option when outdoor desert activities are less comfortable." }
                ],
                faqs: [
                    { q: "What is the best Old Town tour in AlUla?", a: "A basic walking tour suits most visitors; the private sunset version adds the Oasis and Harrat lava field." },
                    { q: "How long does the Old Town tour take?", a: "The basic version runs about an hour; extended private versions run 3-4 hours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Old Town tour in AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "A basic walking tour suits most visitors." } },
                    { "@type": "Question", "name": "How long does the Old Town tour take?", "acceptedAnswer": { "@type": "Answer", "text": "About an hour for the basic version." } }
                ] },
            };

        case "is-elephant-rock-tour-worth-it-alula":
            return {
                title: "Is AlUla's Elephant Rock Tour Worth It?",
                seoTitle: "Elephant Rock AlUla Tour 2026 | Honest Review",
                description: "An honest look at AlUla's Elephant Rock and Hidden Gems private tour — one of AlUla's most photographed natural rock formations.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fffaf98c74de77c6dcb69cf5960ccb89133127d791fef28d89545ab9f866e56a.jpg",
                sections: [
                    { title: "The Short Answer", content: "Elephant Rock (Jabal AlFil) is a massive natural sandstone formation shaped like an elephant, best visited near sunset when the rock glows orange — this private tour pairs it with other lesser-known spots nearby.", tourCard: { slug: "alula-elephant-rock-and-hidden-gems-private-tour", title: "AlUla: Elephant Rock and Hidden Gems Private Tour", description: "A private tour of Elephant Rock and nearby hidden spots.", price: "From $748", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fffaf98c74de77c6dcb69cf5960ccb89133127d791fef28d89545ab9f866e56a.jpg" } },
                    { title: "Practical Tips", content: "Elephant Rock is free to visit on your own if you have transport — this tour's value is in the 'hidden gems' add-ons and private guiding, not the rock itself, which has a public viewing area with food trucks and seating." }
                ],
                faqs: [
                    { q: "Is the Elephant Rock tour worth it?", a: "Worth it for the hidden-gems add-ons and private guiding; the rock itself is free to view independently if you have transport." },
                    { q: "When is the best time to see Elephant Rock?", a: "Near sunset, when the sandstone glows orange." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Elephant Rock tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Worth it for the hidden-gems add-ons and private guiding." } },
                    { "@type": "Question", "name": "Best time to see Elephant Rock?", "acceptedAnswer": { "@type": "Answer", "text": "Near sunset." } }
                ] },
            };

        case "is-maraya-experience-worth-it-alula":
            return {
                title: "Is AlUla's Maraya Experience Worth It?",
                seoTitle: "Maraya AlUla Experience 2026 | Honest Review",
                description: "An honest look at AlUla's Maraya, the world's largest mirrored building — ticket tour vs. photoshoot experiences.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b83fb4a3d2c396c2992392eafd7902de687e07701af850739df07e3bc8fa0ac6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Maraya is the world's largest mirrored building, reflecting the surrounding desert landscape — a basic ticket-and-tour covers the building itself, while pricier options add a professional or luxury photoshoot.", tourCard: { slug: "alula-ticket-and-tour-of-the-maraya-reflecting", title: "AlUla: Ticket and Tour of the Maraya Reflecting Hall", description: "A basic ticket and tour of the mirrored Maraya hall.", price: "From $34", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b83fb4a3d2c396c2992392eafd7902de687e07701af850739df07e3bc8fa0ac6.jpg" } },
                    { title: "Practical Tips", content: "Maraya also hosts concerts and events, so check what's on during your visit — the building's program changes, and some experiences may only be available alongside a scheduled event." }
                ],
                faqs: [
                    { q: "Is Maraya worth visiting?", a: "Yes, as the world's largest mirrored building it's a genuinely unique architectural sight." },
                    { q: "What is Maraya used for besides tours?", a: "It also hosts concerts and events — check the program for your visit dates." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Maraya worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as the world's largest mirrored building." } },
                    { "@type": "Question", "name": "What else happens at Maraya?", "acceptedAnswer": { "@type": "Answer", "text": "It hosts concerts and events." } }
                ] },
            };

        case "best-desert-4x4-tour-alula":
            return {
                title: "Which Is the Best Desert 4x4 Tour in AlUla?",
                seoTitle: "Best Desert 4x4 Tour AlUla 2026 | Honest Comparison",
                description: "Compare real desert 4x4 and dune buggy adventures in AlUla — from a canyon tour to Mount Al-Qaws dune bashing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/80896d3467da25a69af64f30b9d5709e23b0586b547dce1aeda4f42e88b1a765.jpg",
                sections: [
                    { title: "The Short Answer", content: "AlUla's desert landscape is as much a draw as its ancient sites, and 4x4/dune buggy tours cover Wadi Al Disah's canyons and Mount Al-Qaws's dunes — pick based on canyon scenery versus pure dune-bashing adrenaline.", tourCard: { slug: "from-alula-private-wadi-al-disah-4x4-canyon-tour", title: "From AlUla: Private Wadi Al Disah 4x4 Canyon Tour", description: "A private 4x4 tour through Wadi Al Disah's canyons.", price: "From $450", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/80896d3467da25a69af64f30b9d5709e23b0586b547dce1aeda4f42e88b1a765.jpg" } },
                    { title: "Best for Canyon Scenery: Wadi Al Disah 4x4 Canyon Tour", content: "This focuses on the dramatic canyon scenery of Wadi Al Disah rather than pure dune-bashing.", tourCard: { slug: "from-alula-private-wadi-al-disah-4x4-canyon-tour", title: "From AlUla: Private Wadi Al Disah 4x4 Canyon Tour", description: "Canyon-focused 4x4 adventure.", price: "From $450", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/80896d3467da25a69af64f30b9d5709e23b0586b547dce1aeda4f42e88b1a765.jpg" } },
                    { title: "Best for Adrenaline: Mount Al-Qaws & Al-Gharameel 4x4", content: "This leans into dune-bashing and off-road thrills at Mount Al-Qaws, a more adrenaline-focused version than the canyon tour.", tourCard: { slug: "alula-mount-al-qaws-al-gharameel-guided-4x4-tour", title: "AlUla: Mount Al-Qaws & Al-Gharameel Guided 4x4 Tour", description: "A dune-bashing focused 4x4 tour.", price: "From $718", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e3d32074bdc6e38fb5d1c1038e59f5fa9cfdbbed4d87e96005ffb238ec9fb8f7.jpg" } },
                    { title: "Best Short Thrill: Guided Dune Buggy Adventure", content: "A shorter, more affordable dune buggy option with a driver, good if you want a quick adrenaline hit without committing to a half-day 4x4 trip.", tourCard: { slug: "alula-guided-dune-buggy-adventure-with-driver", title: "AlUla Guided Dune Buggy Adventure with Driver", description: "A short dune buggy adventure with a driver.", price: "From $520", duration: "30 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ede8dc41b93fabd55885854e9f5b89155fe04f60871c7fb36f621d3ceed070fc.jpg" } },
                    { title: "Practical Tips", content: "These tours run in open or semi-open vehicles — dress for sun and dust, and bring a scarf or buff for your face during dune-bashing sections." }
                ],
                faqs: [
                    { q: "What is the best desert 4x4 tour in AlUla?", a: "Wadi Al Disah for canyon scenery; Mount Al-Qaws for pure dune-bashing adrenaline." },
                    { q: "Is a dune buggy tour shorter than a 4x4 canyon tour?", a: "Yes, dune buggy tours typically run 30 minutes versus several hours for a full canyon 4x4 tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best desert 4x4 tour in AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "Wadi Al Disah for canyon scenery; Mount Al-Qaws for dune-bashing." } },
                    { "@type": "Question", "name": "Is a dune buggy tour shorter?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, typically 30 minutes versus several hours." } }
                ] },
            };

        case "best-multi-day-tour-alula":
            return {
                title: "Which Is the Best Multi-Day Tour in AlUla?",
                seoTitle: "Best Multi-Day Tour AlUla 2026 | Honest Comparison",
                description: "Compare real multi-day AlUla tour packages — from a 2-day private guide tour to a 4-day gallery and stargazing itinerary.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0281258be860252a2723ff76cf6266dfee4baa16ad3b98e78a0f056bd2c1e220.jpg",
                sections: [
                    { title: "The Short Answer", content: "AlUla genuinely rewards more than a day trip — multi-day packages let you cover Hegra, Dadan, Old Town, and the desert landscapes without rushing, and the longer options add galleries and stargazing.", tourCard: { slug: "alula-2-day-tour-with-private-local-guide", title: "AlUla: 2-Day Tour with Private Local Guide & Transport", description: "A 2-day private guided tour with transport included.", price: "From $623", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25e1f47ad246f06fd0f8d12e9bccacd1c2e0c7f7ac6421a382bc445ed77d8916.png" } },
                    { title: "Best Value: 2-Day Private Local Guide Tour", content: "This covers AlUla's main sites over two unrushed days with a private guide and transport included.", tourCard: { slug: "alula-2-day-tour-with-private-local-guide", title: "AlUla: 2-Day Tour with Private Local Guide & Transport", description: "A well-rounded 2-day private tour.", price: "From $623", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25e1f47ad246f06fd0f8d12e9bccacd1c2e0c7f7ac6421a382bc445ed77d8916.png" } },
                    { title: "Most Comprehensive: 4-Day Tour with Galleries & Stargazing", content: "The longest option, adding art gallery visits and dedicated stargazing sessions to the standard multi-day sightseeing itinerary.", tourCard: { slug: "al-ula-saudi-arabia-4-day-tour-with-galleries", title: "Al-Ula, Saudi Arabia: 4-Day Tour with Galleries & Stargazing", description: "A comprehensive 4-day tour with galleries and stargazing.", price: "From $1681", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0281258be860252a2723ff76cf6266dfee4baa16ad3b98e78a0f056bd2c1e220.jpg" } },
                    { title: "Practical Tips", content: "AlUla's night skies are genuinely dark given its remote desert location, making the stargazing add-on in longer tours a real differentiator rather than a gimmick." }
                ],
                faqs: [
                    { q: "What is the best multi-day tour in AlUla?", a: "A 2-day private guide tour covers the essentials; the 4-day version adds galleries and stargazing for a deeper trip." },
                    { q: "Is AlUla worth more than a day trip?", a: "Yes, it genuinely rewards 2+ days given the spread of sites and desert landscapes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best multi-day tour in AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "A 2-day private guide tour covers the essentials." } },
                    { "@type": "Question", "name": "Is AlUla worth more than a day trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it rewards 2+ days." } }
                ] },
            };

        case "best-madinah-to-alula-tour":
            return {
                title: "Which Is the Best Madinah to AlUla Tour?",
                seoTitle: "Best Madinah to AlUla Tour 2026 | Honest Comparison",
                description: "Compare real day trips from Madinah to AlUla, for travellers based in Madinah who want to see Hegra and AlUla's highlights without relocating.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ece27b59d97ff2b2d55092be6fec2b2b9662eea73caba54d21f935d9ab1cad.jpg",
                sections: [
                    { title: "The Short Answer", content: "AlUla is a few hours from Madinah, making it a feasible (if long) day trip for travellers who'd rather not change hotels — these tours bundle round-trip transport with AlUla's highlights.", tourCard: { slug: "medina-al-ula-discovery-tour", title: "Medina: Al Ula Discovery Tour", description: "A day trip to AlUla's highlights from Madinah.", price: "From $608", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ece27b59d97ff2b2d55092be6fec2b2b9662eea73caba54d21f935d9ab1cad.jpg" } },
                    { title: "Best Value: Discovery Tour from Madinah", content: "A full-day round trip covering AlUla's main highlights with transport from Madinah included.", tourCard: { slug: "medina-al-ula-discovery-tour", title: "Medina: Al Ula Discovery Tour", description: "The standard Madinah-to-AlUla day trip.", price: "From $608", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07ece27b59d97ff2b2d55092be6fec2b2b9662eea73caba54d21f935d9ab1cad.jpg" } },
                    { title: "Best with Round-Trip Transport: Wonders Tour", content: "This explicitly packages round-trip transport from Madinah with AlUla sightseeing, useful for travellers without their own vehicle.", tourCard: { slug: "al-ula-wonders-tour-with-round-trip-transport", title: "Al-Ula Wonders Tour with Round-Trip Transport from Madinah", description: "AlUla sightseeing with round-trip Madinah transport.", price: "From $991", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23a2eb6ff1aa55907582a6625f51d652b86bb57126bc5c11b59d3fd2c287567c.jpg" } },
                    { title: "Practical Tips", content: "This is a genuinely long day given the drive each way — if your schedule allows it, staying overnight in AlUla instead gives a much less rushed experience for roughly similar total cost." }
                ],
                faqs: [
                    { q: "What is the best Madinah to AlUla tour?", a: "A discovery tour or wonders tour with round-trip transport, both covering AlUla's highlights in a long single day." },
                    { q: "Is a day trip from Madinah to AlUla worth it?", a: "It works if you can't stay overnight, but it's a long day — an overnight stay in AlUla is less rushed." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Madinah to AlUla tour?", "acceptedAnswer": { "@type": "Answer", "text": "A discovery or wonders tour with round-trip transport." } },
                    { "@type": "Question", "name": "Is a day trip from Madinah worth it?", "acceptedAnswer": { "@type": "Answer", "text": "It works but is a long day; an overnight stay is less rushed." } }
                ] },
            };

        case "is-hot-air-balloon-worth-it-alula":
            return {
                title: "Is AlUla's Sunrise Hot Air Balloon Flight Worth It?",
                seoTitle: "AlUla Hot Air Balloon Flight 2026 | Honest Review",
                description: "An honest look at the Hegra AlUla sunrise hot air balloon flight over the desert landscape.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/447dff525b8a138a3b2aa9822911cfbc9aa4c2044220408ca78dbd602a056ffa.jpg",
                sections: [
                    { title: "The Short Answer", content: "A sunrise hot air balloon flight over AlUla's sandstone formations and desert landscape is one of the most scenic (and expensive) ways to see the region from above.", tourCard: { slug: "hegra-al-ula-sunrise-hot-air-balloon-flight", title: "Hegra Al Ula: Sunrise Hot Air Balloon Flight", description: "A sunrise hot air balloon flight over AlUla's desert landscape.", price: "From $449", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/447dff525b8a138a3b2aa9822911cfbc9aa4c2044220408ca78dbd602a056ffa.jpg" } },
                    { title: "Practical Tips", content: "Balloon flights are weather-dependent and can be cancelled on short notice for wind — avoid booking this on your last morning in AlUla if possible." }
                ],
                faqs: [
                    { q: "Is the AlUla hot air balloon flight worth it?", a: "Yes, for a genuinely scenic aerial view of the desert landscape, though it's a pricier activity." },
                    { q: "Can weather cancel the balloon flight?", a: "Yes, wind can cause last-minute cancellations — avoid scheduling it on your final morning if you can." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the hot air balloon flight worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a scenic aerial desert view." } },
                    { "@type": "Question", "name": "Can weather cancel it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, wind can cause cancellations." } }
                ] },
            };

        case "best-oasis-cultural-experience-alula":
            return {
                title: "Which Is the Best Oasis & Cultural Experience in AlUla?",
                seoTitle: "Best Oasis Cultural Experience AlUla 2026 | Comparison",
                description: "Compare real oasis farm and traditional Saudi hospitality experiences in AlUla.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe6eea19d351d8621030745348ad11019babc88b68d5798701320d81cbc4b525.jpeg",
                sections: [
                    { title: "The Short Answer", content: "AlUla's palm oasis is a working agricultural area, not just scenery, and these experiences pair a farm visit with a traditional Saudi meal and hospitality.", tourCard: { slug: "alula-oasis-farm-tour-and-traditional-feast-with", title: "AlUla: Oasis Farm Tour and Traditional Feast with Locals", description: "An oasis farm visit paired with a traditional Saudi feast.", price: "From $322", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe6eea19d351d8621030745348ad11019babc88b68d5798701320d81cbc4b525.jpeg" } },
                    { title: "Best Value: Oasis Farm Tour & Traditional Feast", content: "Combines a working oasis farm visit with a shared traditional meal with locals.", tourCard: { slug: "alula-oasis-farm-tour-and-traditional-feast-with", title: "AlUla: Oasis Farm Tour and Traditional Feast with Locals", description: "The standard oasis and feast experience.", price: "From $322", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe6eea19d351d8621030745348ad11019babc88b68d5798701320d81cbc4b525.jpeg" } },
                    { title: "Best for Deeper Hospitality: Authentic Saudi Hospitality & Meal", content: "This leans further into the cultural hosting side, with a more involved traditional hospitality experience and meal.", tourCard: { slug: "alula-authentic-saudi-hospitality-traditional-meal", title: "AlUla: Authentic Saudi Hospitality & Traditional Meal", description: "A deeper traditional Saudi hospitality and meal experience.", price: "From $589", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe6eea19d351d8621030745348ad11019babc88b68d5798701320d81cbc4b525.jpeg" } },
                    { title: "Practical Tips", content: "These experiences are a genuine way to meet locals rather than just see sights — a good pick if cultural connection matters more to you than checking off landmarks." }
                ],
                faqs: [
                    { q: "What is the best oasis experience in AlUla?", a: "The farm tour and feast for a standard experience; the authentic hospitality version for deeper cultural immersion." },
                    { q: "Is AlUla's oasis a real working farm?", a: "Yes, it's a genuine agricultural area, not just a scenic backdrop." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best oasis experience in AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "The farm tour and feast for a standard experience." } },
                    { "@type": "Question", "name": "Is the oasis a real working farm?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a genuine agricultural area." } }
                ] },
            };

        case "is-desert-dinner-safari-worth-it-alula":
            return {
                title: "Is AlUla's Desert Dinner Safari Worth It?",
                seoTitle: "AlUla Desert Dinner Safari 2026 | Honest Review",
                description: "An honest look at AlUla's Sharaan Platinum Dinner Safari, a 4-course desert dining experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6cf9c61cfa44ce614f385f80801961f0ef28d26bffd9c6618b6ee1c46bd3a5c7.jpg",
                sections: [
                    { title: "The Short Answer", content: "This is a sit-down 4-course dinner set up in the desert at Sharaan, combining fine dining with AlUla's dramatic landscape and sunset.", tourCard: { slug: "alula-sharaan-platinum-dinner-safari-with-4", title: "AlUla: Sharaan Platinum Dinner Safari with 4-Course Braai", description: "A 4-course desert dinner safari at Sharaan.", price: "From $449", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6cf9c61cfa44ce614f385f80801961f0ef28d26bffd9c6618b6ee1c46bd3a5c7.jpg" } },
                    { title: "Practical Tips", content: "This is more a dining experience than an active tour — go for it if you want a memorable evening meal with scenery, not if you're looking for an adventure activity." }
                ],
                faqs: [
                    { q: "Is the desert dinner safari worth it?", a: "Yes, for a memorable fine-dining evening with desert scenery rather than an adventure activity." },
                    { q: "What does the dinner safari include?", a: "A 4-course meal served in the desert at Sharaan, typically timed around sunset." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the desert dinner safari worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a memorable fine-dining evening with scenery." } },
                    { "@type": "Question", "name": "What does it include?", "acceptedAnswer": { "@type": "Answer", "text": "A 4-course meal served in the desert." } }
                ] },
            };

        case "is-private-guided-tour-worth-it-alula":
            return {
                title: "Is a Private Guided Tour Worth It in AlUla?",
                seoTitle: "AlUla Private Guided Tour 2026 | Honest Review",
                description: "An honest look at AlUla's solo-explorer and private cultural highlights tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/671398ad50f589a9a9e786fe272a45b81f18629b3bee8f58519cc70b6cfb2d15.jpg",
                sections: [
                    { title: "The Short Answer", content: "A private guided tour gives full flexibility over pace and which sites to prioritize, at a higher price than joining a shared group tour.", tourCard: { slug: "alula-solo-explorer-private-cultural-highlights", title: "AlUla Solo Explorer: Private Cultural Highlights Tour", description: "A private cultural highlights tour for solo travellers or small groups.", price: "From $363", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/671398ad50f589a9a9e786fe272a45b81f18629b3bee8f58519cc70b6cfb2d15.jpg" } },
                    { title: "Practical Tips", content: "Worth it if you want to set your own pace or skip sites that don't interest you — shared group tours are cheaper but follow a fixed itinerary." }
                ],
                faqs: [
                    { q: "Is a private guided tour worth it in AlUla?", a: "Yes, if flexibility on pace and sites matters more to you than cost savings from a group tour." },
                    { q: "How much more does a private tour cost?", a: "Noticeably more than shared group tours, but with full control over the itinerary." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a private guided tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if flexibility matters more than cost savings." } },
                    { "@type": "Question", "name": "How much more does it cost?", "acceptedAnswer": { "@type": "Answer", "text": "Noticeably more than shared group tours." } }
                ] },
            };

        case "is-full-day-tour-worth-it-alula":
            return {
                title: "Is a Full-Day AlUla Tour Worth It?",
                seoTitle: "AlUla Full-Day Tour 2026 | Honest Review",
                description: "An honest look at AlUla's full-day tour with snacks and drinks included.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ba2a94789b57439a40c600b2fab66bb7b74b1a78e6f7e30fb6d55d0b93c8611.jpg",
                sections: [
                    { title: "The Short Answer", content: "A full-day tour covers more ground than a half-day visit and typically includes snacks and drinks, useful given how spread out AlUla's sites are.", tourCard: { slug: "alula-day-trip-with-snacks-and-drinks", title: "AlUla: Day Trip with Snacks and Drinks", description: "A full-day AlUla tour with snacks and drinks included.", price: "From $631", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ba2a94789b57439a40c600b2fab66bb7b74b1a78e6f7e30fb6d55d0b93c8611.jpg" } },
                    { title: "Practical Tips", content: "Worth it if you want to cover multiple sites without arranging your own food logistics in AlUla's spread-out, car-dependent layout." }
                ],
                faqs: [
                    { q: "Is a full-day AlUla tour worth it?", a: "Yes, given how spread out the sites are — a full day with food included avoids logistics headaches." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a full-day AlUla tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, given how spread out the sites are." } }
                ] },
            };

        case "alula-travel-guide-2026":
            return {
                title: "AlUla Travel Guide 2026",
                description: "AlUla is Saudi Arabia's flagship heritage destination, home to Hegra, Saudi's first UNESCO World Heritage Site — here's what first-timers need to know.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "Why Visit AlUla", content: "AlUla combines ancient Nabataean history (Hegra), dramatic desert rock formations (Elephant Rock), and striking modern architecture (Maraya) in one region, with heavy government investment making it one of Saudi's most polished tourist destinations." },
                    { title: "Getting Around", content: "AlUla is spread out and effectively requires a car or organized tour — there's no walkable city center connecting the main sites, and Hegra specifically can only be visited with an official guide." }
                ],
                faqs: [
                    { q: "Is AlUla worth visiting?", a: "Yes, for Hegra's Nabataean history, striking desert scenery, and sites like Elephant Rock and Maraya." },
                    { q: "Do I need a car in AlUla?", a: "Effectively yes, or an organized tour — the sites are spread out with no walkable connecting center." }
                ],
            };

        case "best-time-to-visit-alula":
            return {
                title: "Best Time to Visit AlUla",
                description: "AlUla's desert climate makes timing matter a lot more than in most of this project's destinations.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "Weather Patterns", content: "Winter (November-February) is the most comfortable season, with mild days and cool nights. Summer (June-August) brings intense desert heat often exceeding 40°C, making outdoor activities like Hegra tours and 4x4 trips far less pleasant." }
                ],
                faqs: [
                    { q: "What is the best time to visit AlUla?", a: "November to February for comfortable temperatures; summer is intensely hot for outdoor sightseeing." }
                ],
            };

        case "alula-1-day-itinerary":
            return {
                title: "AlUla 1-Day Itinerary",
                description: "A realistic one-day plan for AlUla if you don't have the 2+ days the region really rewards.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "Morning", content: "Start early with a guided Hegra tour before the heat builds, since the tombs require an official guide anyway." },
                    { title: "Afternoon", content: "Visit Old Town and Maraya, both more manageable in shorter visits than the desert activities." },
                    { title: "Evening", content: "Finish at Elephant Rock for sunset, when the sandstone glows orange — a fitting close to a packed day." }
                ],
                faqs: [
                    { q: "Can AlUla be seen in one day?", a: "You can hit the highlights, but AlUla genuinely rewards 2+ days given how spread out the sites are." }
                ],
            };

        case "is-alula-safe":
            return {
                title: "Is AlUla Safe for Tourists?",
                description: "An honest look at safety in AlUla, one of Saudi Arabia's most tourism-focused regions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "The Short Answer", content: "AlUla is very safe for tourists — it's a heavily developed, government-backed tourism destination with significant infrastructure investment specifically for international visitors." }
                ],
                faqs: [
                    { q: "Is AlUla safe for tourists?", a: "Yes, it's a heavily developed tourism destination with strong infrastructure for visitors." }
                ],
            };

        case "how-to-get-to-alula":
            return {
                title: "How to Get to AlUla",
                description: "AlUla has its own airport, making it more accessible than its remote desert location might suggest.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "By Air", content: "AlUla International Airport (ULH) has direct flights from Riyadh, Jeddah, and other Saudi cities, making it the most practical way to reach the region." },
                    { title: "By Road", content: "AlUla is also reachable by road from Madinah (a few hours) for travellers who'd rather drive or join a day-trip tour." }
                ],
                faqs: [
                    { q: "Does AlUla have its own airport?", a: "Yes, AlUla International Airport (ULH) has direct flights from major Saudi cities." },
                    { q: "Can I reach AlUla from Madinah by road?", a: "Yes, it's a few hours' drive, also doable as an organized day trip." }
                ],
            };

        case "alula-hegra-entrance-guide":
            return {
                title: "AlUla Hegra Entrance Guide",
                description: "What to know before visiting Hegra, Saudi Arabia's first UNESCO World Heritage Site.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "Entrance Requirements", content: "Hegra cannot be visited independently — entry requires booking through an official guided tour, which handles tickets and access as part of the package." }
                ],
                faqs: [
                    { q: "Can I enter Hegra without a tour?", a: "No, all entry requires an official guided tour that handles tickets and access." }
                ],
            };

        case "alula-dress-code-guide":
            return {
                title: "AlUla Dress Code Guide",
                description: "What to wear in AlUla as a tourist, balancing comfort with local cultural norms.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6253ef5fa00ba.png",
                sections: [
                    { title: "What to Wear", content: "Modest, loose-fitting clothing covering shoulders and knees is appropriate for both men and women; AlUla's tourism zone is relatively relaxed compared to some other Saudi regions, but modesty is still expected, especially at religious or heritage sites." }
                ],
                faqs: [
                    { q: "What should I wear in AlUla?", a: "Modest, loose-fitting clothing covering shoulders and knees, especially at heritage sites." }
                ],
            };

        case "best-king-khalid-reserve-cycling-tour-riyadh":
            return {
                title: "Which Is the Best King Khalid Royal Reserve Cycling Tour in Riyadh?",
                seoTitle: "Best King Khalid Reserve Cycling Tour Riyadh 2026",
                description: "Compare real cycling and biking tours in King Khalid Royal Reserve, Riyadh — a quick budget ride versus a longer guided biking adventure.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fd4f4f2aa16e967603cc61481afe8be964b40afafdfed9840c1369beebf961b5.jpg",
                sections: [
                    { title: "The Short Answer", content: "King Khalid Royal Reserve offers dedicated cycling trails through desert landscape right near Riyadh — the main choice is a quick 1-hour ride versus a longer 3-hour biking session.", tourCard: { slug: "riyadh-cycling-tour-at-king-khalid-reserve", title: "Riyadh: Cycling Tour at King Khalid Reserve", description: "A cycling tour through King Khalid Royal Reserve.", price: "From $30", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fd4f4f2aa16e967603cc61481afe8be964b40afafdfed9840c1369beebf961b5.jpg" } },
                    { title: "Best for Longer Ride: Biking in King Khalid Royal Reserve", content: "This extends the ride to a longer 3-hour session, covering more of the reserve's trails for cyclists who want a proper workout.", tourCard: { slug: "biking-in-king-khalid-royal-reserve", title: "Biking in King Khalid Royal Reserve", description: "A longer guided biking session through the reserve.", price: "From $78", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ef2be71320d2a7e1307988d822b10e6c8fd8a5746ff730ffdd65626896f2add9.jpg" } },
                    { title: "Practical Tips", content: "Early morning or late afternoon rides avoid the harshest midday heat — this matters even more on a bike than in a car or on a standard walking tour." }
                ],
                faqs: [
                    { q: "What is the best King Khalid Reserve cycling tour?", a: "A quick 1-hour ride for a taste of it, or the 3-hour version for a proper cycling session." },
                    { q: "When is the best time to cycle in Riyadh?", a: "Early morning or late afternoon, to avoid the harshest midday heat." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best King Khalid Reserve cycling tour?", "acceptedAnswer": { "@type": "Answer", "text": "A quick 1-hour ride, or the longer 3-hour version." } },
                    { "@type": "Question", "name": "Best time to cycle?", "acceptedAnswer": { "@type": "Answer", "text": "Early morning or late afternoon." } }
                ] },
            };

        case "is-riyadh-boulevard-world-tour-worth-it":
            return {
                title: "Is the Riyadh Boulevard World Tour with Saudi Meal Worth It?",
                seoTitle: "Riyadh Boulevard World Tour 2026 | Honest Review",
                description: "An honest look at the Riyadh Boulevard World tour with a traditional Saudi meal included.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f99f49ed270e6b5ccde8b1b76666e815a5e79d5b35441bbd4b01b4615d01e772.png",
                sections: [
                    { title: "The Short Answer", content: "Boulevard World is one of Riyadh's major modern entertainment developments, themed around different world cultures — a genuinely different angle from the historic sites, and the included Saudi meal adds real value for a half-day outing.", tourCard: { slug: "riyadh-boulevard-world-tour-and-saudi-meal", title: "Riyadh Boulevard World Tour and Saudi Meal", description: "A tour of Boulevard World with a traditional Saudi meal.", price: "From $137", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f99f49ed270e6b5ccde8b1b76666e815a5e79d5b35441bbd4b01b4615d01e772.png" } },
                    { title: "Practical Tips", content: "This is a modern entertainment-district visit rather than historical sightseeing — good as a contrast to a heritage-focused day earlier or later in your trip." }
                ],
                faqs: [
                    { q: "Is the Boulevard World tour worth it?", a: "Yes, for a modern entertainment contrast to Riyadh's historic sites, with a Saudi meal included." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Boulevard World tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a modern entertainment contrast with a meal included." } }
                ] },
            };

        case "best-al-dahna-desert-tour-riyadh":
            return {
                title: "Which Is the Best Al Dahna Desert Experience from Riyadh?",
                seoTitle: "Best Al Dahna Desert Tour Riyadh 2026 | Comparison",
                description: "Compare real Al Dahna Desert experiences from Riyadh — a full-day desert trip versus a dedicated dune bashing and sandboarding adventure.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52a8bfecd7c00daf768fdff0724765bae287082bbc2b51dd317716f66a05c042.jpg",
                sections: [
                    { title: "The Short Answer", content: "Al Dahna's red sand desert offers both a general full-day desert experience and a more adrenaline-focused dune bashing and sandboarding version, depending on whether you want scenery or activity to be the main draw.", tourCard: { slug: "riyadh-al-dahna-desert-full-day-trip", title: "Riyadh: Al Dahna Desert Full-Day Trip", description: "A full-day desert experience in Al Dahna.", price: "From $793", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52a8bfecd7c00daf768fdff0724765bae287082bbc2b51dd317716f66a05c042.jpg" } },
                    { title: "Best for Adrenaline: Dune Bashing & Sandboarding Tour", content: "This leans specifically into 4x4 dune bashing and sandboarding as the main activities, a more adrenaline-focused version than the general desert trip.", tourCard: { slug: "riyadh-desert-dune-bashing-and-sandboarding-tour", title: "Riyadh: Desert Dune Bashing and Sandboarding Tour", description: "A dune bashing and sandboarding adventure in the Riyadh desert.", price: "From $988", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cb964d9a4e1380e9bbf768edeff1693929b550f8c0623c894463c62d7bed23d9.jpg" } },
                    { title: "Practical Tips", content: "Sandboarding requires reasonable balance and a willingness to get sandy — ask your operator about the exact dune heights involved if you want to gauge the activity level beforehand." }
                ],
                faqs: [
                    { q: "What is the best Al Dahna Desert experience from Riyadh?", a: "A full-day trip for general desert scenery, or dune bashing/sandboarding for more adrenaline." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Al Dahna Desert experience?", "acceptedAnswer": { "@type": "Answer", "text": "A full-day trip, or dune bashing/sandboarding for adrenaline." } }
                ] },
            };

        case "is-tuwaiq-mountains-tour-worth-it-riyadh":
            return {
                title: "Is the Tuwaiq Mountains & Najd Plateau Tour from Riyadh Worth It?",
                seoTitle: "Tuwaiq Mountains Tour Riyadh 2026 | Honest Review",
                description: "An honest look at the Tuwaiq Mountains and Najd Plateau day tour from Riyadh, a dramatic escarpment landscape distinct from the Edge of the World.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/feb68194d3c8f639.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Tuwaiq Mountains and Najd Plateau offer dramatic escarpment scenery distinct from the more famous Edge of the World viewpoint — a genuinely good alternative or addition if you want more of this landscape type without repeating the same spot.", tourCard: { slug: "from-riyadh-tuwaiq-mountains-and-najd-plateau-day", title: "From Riyadh: Tuwaiq Mountains and Najd Plateau Day Tour", description: "A day tour of the Tuwaiq Mountains and Najd Plateau escarpment.", price: "From $156", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/feb68194d3c8f639.jpeg" } },
                    { title: "Practical Tips", content: "Sunset timing gives the escarpment's layered rock formations their best light — ask your operator about timing if photography is a priority." }
                ],
                faqs: [
                    { q: "Is the Tuwaiq Mountains tour worth it?", a: "Yes, for dramatic escarpment scenery distinct from the Edge of the World." },
                    { q: "How is this different from the Edge of the World?", a: "It's a different section of the same type of escarpment landscape, good for seeing more without repeating the same viewpoint." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Tuwaiq Mountains tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for dramatic escarpment scenery." } }
                ] },
            };

        case "best-ziyarat-tour-mecca":
            return {
                title: "Which Is the Best Ziyarat (Holy Sites) Tour in Mecca?",
                seoTitle: "Best Ziyarat Tour Mecca 2026 | Honest Comparison",
                description: "Compare real Ziyarat tours of Mecca's Islamic holy sites for Muslim pilgrims — a general sacred-sites guide versus a spiritual tour of sites specifically visited during Hajj.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/371ea4d6c49bf78e338bea15d65e44a81986a32f241746003ad9b25d7ec801e9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Mecca is restricted to Muslims under Saudi law — these Ziyarat (visitation) tours are designed for Muslim pilgrims performing Hajj or Umrah, guiding them to historically and spiritually significant sites around the city.", tourCard: { slug: "ziyarat-guide-exploring-the-sacred-sites-of-makkah", title: "Ziyarat Guide: Exploring the Sacred Sites of Makkah", description: "A general guided Ziyarat tour of Mecca's sacred sites.", price: "From $168", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/371ea4d6c49bf78e338bea15d65e44a81986a32f241746003ad9b25d7ec801e9.jpeg" } },
                    { title: "Best for Hajj Context: Spiritual Tour of Holy Sites Visited During Hajj", content: "This specifically covers the sites visited during Hajj, useful context whether you're performing Hajj yourself or want to understand the pilgrimage's geography.", tourCard: { slug: "makkah-spiritual-tour-of-holy-sites-visited", title: "Makkah: Spiritual Tour of Holy Sites Visited During Hajj", description: "A guided tour of the specific sites visited during Hajj.", price: "From $130", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2867a011eeadb1a9aa37824a5453264df12c69dfb07567c84ecaa80489d3774a.jpeg" } },
                    { title: "Practical Tips", content: "Only Muslims are permitted entry to Mecca itself under Saudi law — these tours are specifically for Muslim travellers performing Umrah or Hajj, or visiting for other religious purposes." }
                ],
                faqs: [
                    { q: "What is the best Ziyarat tour in Mecca?", a: "A general sacred-sites guide for broad coverage, or the Hajj-specific version for pilgrimage context." },
                    { q: "Can non-Muslims visit Mecca?", a: "No, entry to Mecca is restricted to Muslims under Saudi law." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Ziyarat tour in Mecca?", "acceptedAnswer": { "@type": "Answer", "text": "A general sacred-sites guide, or the Hajj-specific version." } },
                    { "@type": "Question", "name": "Can non-Muslims visit Mecca?", "acceptedAnswer": { "@type": "Answer", "text": "No, entry is restricted to Muslims under Saudi law." } }
                ] },
            };

        case "best-jabal-al-nour-tour-mecca":
            return {
                title: "Which Is the Best Jabal al-Nour & Cave Hira Tour in Mecca?",
                seoTitle: "Best Jabal al-Nour Cave Hira Tour Mecca 2026",
                description: "Compare real Jabal al-Nour and Cave Hira tours in Mecca — a focused cultural district visit versus a private tour adding Mount Arafat.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4805764d06c0e01e2aa0a6664da812d3f53999d1869d731970a17a6d678cc674.png",
                sections: [
                    { title: "The Short Answer", content: "Cave Hira, on Jabal al-Nour, holds deep significance in Islamic history, and tours here range from a focused visit to the cultural district to a private version that also covers Mount Arafat.", tourCard: { slug: "makkah-hira-cultural-district-private-tour-with", title: "Makkah: Hira Cultural District Private Tour with Guide", description: "A private tour of the Hira cultural district.", price: "From $259", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e52eca0bbdefe0c5d9231e88984f1bbd8ca831cd354d2fbdf78c105376965daf.jpg" } },
                    { title: "Best Full Combo: Jabal Al-Nour, Cave Hira & Mount Arafat Tour", content: "This extends the visit to include Mount Arafat as well, covering more of the sites significant to Islamic history and the Hajj pilgrimage in one trip.", tourCard: { slug: "makkah-private-jabal-al-nour-cave-hira-mount", title: "Makkah: Private Jabal Al-Nour, Cave Hira & Mount Arafat Tour", description: "A private tour covering Jabal al-Nour, Cave Hira, and Mount Arafat.", price: "From $260", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4805764d06c0e01e2aa0a6664da812d3f53999d1869d731970a17a6d678cc674.png" } },
                    { title: "Practical Tips", content: "Reaching the cave itself involves a genuine hike up Jabal al-Nour — comfortable footwear matters, and the climb can be warm during the day, so an early start is worth considering." }
                ],
                faqs: [
                    { q: "What is the best Jabal al-Nour and Cave Hira tour?", a: "A focused cultural district tour, or add Mount Arafat for a fuller historical visit." },
                    { q: "Is reaching Cave Hira difficult?", a: "It requires a genuine hike up Jabal al-Nour — comfortable footwear and an early start help." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Jabal al-Nour tour?", "acceptedAnswer": { "@type": "Answer", "text": "A focused cultural district tour, or add Mount Arafat." } },
                    { "@type": "Question", "name": "Is reaching the cave difficult?", "acceptedAnswer": { "@type": "Answer", "text": "It requires a genuine hike up Jabal al-Nour." } }
                ] },
            };

        case "is-clock-tower-museum-worth-it-mecca":
            return {
                title: "Is the Makkah Clock Tower Museum Worth It?",
                seoTitle: "Makkah Clock Tower Museum 2026 | Honest Review",
                description: "An honest look at the Makkah Clock Tower Museum, including general entry and the panoramic terrace option.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c09b8ef3b20b6b781aa53d4856cbb0fd249a6ca0def685c9c42a98ba7128e396.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Clock Tower Museum, inside one of the tallest buildings in the world, covers the history of Mecca and the Two Holy Mosques — the general entry ticket covers the museum, while the panoramic terrace adds sweeping views over the Grand Mosque complex.", tourCard: { slug: "makkah-clock-tower-museum-general-entry-ticket", title: "Makkah Clock Tower Museum: General Entry Ticket", description: "General entry to the Makkah Clock Tower Museum.", price: "From $129", duration: "20 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c09b8ef3b20b6b781aa53d4856cbb0fd249a6ca0def685c9c42a98ba7128e396.jpg" } },
                    { title: "Best for Views: Clock Tower Museum & Panoramic Terrace", content: "This adds the panoramic terrace to the museum entry, giving sweeping views over the Grand Mosque complex below.", tourCard: { slug: "makkah-clock-tower-museum-panoramic-terrace", title: "Makkah: Clock Tower Museum & Panoramic Terrace Tickets", description: "Museum entry plus access to the panoramic terrace.", price: "From $52", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b3243f88e7e7e78fe70a61785dd48ae3fab08c1c19f4882966bb83b2e1a4f5df.jpg" } },
                    { title: "Practical Tips", content: "The terrace views over the Grand Mosque are genuinely striking, especially around prayer times when the complex is at its busiest — worth timing your visit around that if you want to see it at its most active." }
                ],
                faqs: [
                    { q: "Is the Clock Tower Museum worth it?", a: "Yes, for the history covered and especially the panoramic terrace views over the Grand Mosque." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Clock Tower Museum worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for the panoramic terrace views." } }
                ] },
            };

        case "is-umrah-guidance-tour-worth-it-mecca":
            return {
                title: "Is Private Umrah Guidance with a Local Guide in Mecca Worth It?",
                seoTitle: "Private Umrah Guidance Mecca 2026 | Honest Review",
                description: "An honest look at private Umrah guidance tours in Mecca for Muslim pilgrims performing the pilgrimage.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aeccc0b8dc75fb3aa0ca8df7fb630334bff131a3447d4d18c5ec7af6fed44e9a.jpeg",
                sections: [
                    { title: "The Short Answer", content: "For Muslim pilgrims performing Umrah, especially first-timers, private guidance from a local guide who knows the rituals, logistics, and crowd patterns can genuinely ease the experience, particularly around the Grand Mosque's busiest times.", tourCard: { slug: "makkah-private-umrah-guidance-with-local-guide", title: "Makkah: Private Umrah Guidance with Local Guide", description: "Private Umrah guidance with a local guide.", price: "From $143", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aeccc0b8dc75fb3aa0ca8df7fb630334bff131a3447d4d18c5ec7af6fed44e9a.jpeg" } },
                    { title: "Practical Tips", content: "This is especially useful for first-time pilgrims unfamiliar with the Grand Mosque's layout and the specific sequence of Umrah rituals." }
                ],
                faqs: [
                    { q: "Is private Umrah guidance worth it?", a: "Yes, especially for first-time pilgrims, for help navigating the rituals and the Grand Mosque's busiest times." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is private Umrah guidance worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for first-time pilgrims." } }
                ] },
            };

        case "mecca-travel-guide-2026":
            return {
                title: "Mecca Travel Guide 2026 (For Muslim Pilgrims)",
                description: "What Muslim pilgrims need to know about visiting Mecca for Umrah or Hajj.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/371ea4d6c49bf78e338bea15d65e44a81986a32f241746003ad9b25d7ec801e9.jpeg",
                sections: [
                    { title: "Important: Entry Restrictions", content: "Mecca is restricted to Muslims under Saudi law — non-Muslims are not permitted entry to the city. All tours and guidance here are intended for Muslim travellers performing Umrah, Hajj, or other religious visits." },
                    { title: "What to Know", content: "Beyond the Grand Mosque itself, Mecca has historically and religiously significant sites including Jabal al-Nour, Cave Hira, the Clock Tower Museum, and sites associated with the Hajj pilgrimage route." }
                ],
                faqs: [
                    { q: "Can non-Muslims visit Mecca?", a: "No, entry is restricted to Muslims under Saudi law." },
                    { q: "What should Muslim pilgrims know before visiting?", a: "Beyond the Grand Mosque, sites like Jabal al-Nour, Cave Hira, and the Clock Tower Museum hold real historical and religious significance." }
                ],
            };

        case "best-ziyarah-tour-medina":
            return {
                title: "Which Is the Best Ziyarah (Holy Sites) Tour in Medina?",
                seoTitle: "Best Ziyarah Tour Medina 2026 | Honest Comparison",
                description: "Compare real Ziyarah tours of Medina's Islamic historical and holy sites — a choose-your-own 6-of-10 private tour versus a half-day sacred heritage experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76313f4ab80012a12962d2d53c02af6f0c259ebaf173745415274f9529b7d044.jpg",
                sections: [
                    { title: "The Short Answer", content: "Ziyarah tours in Medina guide visitors to sites significant to early Islamic history, around the Prophet's Mosque and beyond — the choice is mainly flexibility (pick your own sites) versus a set half-day itinerary.", tourCard: { slug: "madinah-3-hour-private-ziyarah-tour-choose-6-of", title: "Madinah: 3-Hour Private Ziyarah Tour, Choose 6 of 10 Sites", description: "A flexible private Ziyarah tour where you choose 6 of 10 sites.", price: "From $154", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76313f4ab80012a12962d2d53c02af6f0c259ebaf173745415274f9529b7d044.jpg" } },
                    { title: "Best Set Itinerary: Sacred Heritage Half-Day Experience", content: "This covers a fixed half-day route of sacred heritage sites, simpler if you'd rather not choose from a list.", tourCard: { slug: "guided-madinah-ziyarah-sacred-heritage-half-day", title: "Guided Madinah Ziyarah: Sacred Heritage Half-Day Experience", description: "A fixed half-day Ziyarah route of sacred heritage sites.", price: "From $168", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4189fd84f8ba6a005545553313351f21419b2068a4c69c159c9dc864e136a197.jpeg" } },
                    { title: "Practical Tips", content: "Medina itself is open to visitors generally, unlike Mecca — but the Prophet's Mosque's innermost sanctuary areas have their own access rules, so confirm with your guide what's included on any given tour." }
                ],
                faqs: [
                    { q: "What is the best Ziyarah tour in Medina?", a: "A flexible choose-your-own-sites tour, or a fixed half-day itinerary if you'd rather not choose." },
                    { q: "Can non-Muslims visit Medina?", a: "Medina itself is generally open to visitors, though the Prophet's Mosque's innermost areas have their own access rules." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Ziyarah tour in Medina?", "acceptedAnswer": { "@type": "Answer", "text": "A flexible choose-your-own tour, or a fixed half-day itinerary." } },
                    { "@type": "Question", "name": "Can non-Muslims visit Medina?", "acceptedAnswer": { "@type": "Answer", "text": "Medina is generally open to visitors, with specific rules for the Mosque's innermost areas." } }
                ] },
            };

        case "is-uhud-battlefield-tour-worth-it-medina":
            return {
                title: "Is the Uhud Battlefield Tour in Medina Worth It?",
                seoTitle: "Uhud Battlefield Tour Medina 2026 | Honest Review",
                description: "An honest look at the Battle of Uhud battlefield tour in Medina, a genuinely significant site in early Islamic history.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/80f300a35c05ebc8f97c8a59777ccb4a5898deccf7eaa13d37047e73bd9271a1.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Battle of Uhud site, including Sayyid al-Shuhada Square, is genuinely significant to early Islamic history — worthwhile for understanding the events here, with a guide who can walk through the historical context.", tourCard: { slug: "madinah-uhud-battlefield-private-tour-of-key", title: "Madinah: Uhud Battlefield Private Tour of Key Landmarks", description: "A private tour of the key landmarks at the Uhud battlefield.", price: "From $130", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/80f300a35c05ebc8f97c8a59777ccb4a5898deccf7eaa13d37047e73bd9271a1.jpg" } },
                    { title: "Best Combined: Uhud Mountain and Seven Mosques Experience", content: "This extends the visit to include the Seven Mosques, a cluster of historically significant small mosques nearby, for a fuller historical day.", tourCard: { slug: "medina-uhud-mountain-and-seven-mosques-experience", title: "Medina: Uhud Mountain and Seven Mosques Experience Tour", description: "A tour combining Uhud Mountain with the Seven Mosques.", price: "From $225", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/83e5338d72877d5e8811264134e0be32a260cd577377a2db0b7ed3eb764ceddf.jpg" } },
                    { title: "Practical Tips", content: "A knowledgeable guide genuinely adds value at this site, since the historical events aren't explained on-site in much detail without one." }
                ],
                faqs: [
                    { q: "Is the Uhud Battlefield tour worth it?", a: "Yes, for understanding genuinely significant early Islamic history with a knowledgeable guide." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Uhud Battlefield tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for significant early Islamic history with a knowledgeable guide." } }
                ] },
            };

        case "best-city-tour-medina":
            return {
                title: "Which Is the Best City Tour in Medina?",
                seoTitle: "Best Medina City Tour 2026 | Honest Comparison",
                description: "Compare real Medina city tours — a hop-on hop-off bus for flexible general sightseeing versus a private culture and history tour with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/59d215320eba9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Medina's general sightseeing can be done at your own pace on the hop-on hop-off bus, or with more depth and context via a private guided tour.", tourCard: { slug: "al-madinah-city-sightseeing-hop-on-hop-off-bus", title: "Al Madinah: City Sightseeing Hop-On Hop-Off Bus Tour", description: "A flexible hop-on hop-off bus tour of Medina.", price: "From $32", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/59d215320eba9.jpeg" } },
                    { title: "Best for Depth: Private Culture & History Tour with a Local Guide", content: "This swaps the self-paced bus format for a private guide who can provide real historical and cultural context along the way.", tourCard: { slug: "madinah-private-culture-history-tour-with-a-local", title: "Madinah: Private Culture & History Tour with a Local Guide", description: "A private, guided culture and history tour of Medina.", price: "From $216", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/88992b0a278a529f471ed49db749c18198af93923f7e64a21d7556e8c40e3517.jpg" } },
                    { title: "Practical Tips", content: "The hop-on hop-off bus is the cheaper, more flexible option for general sightseeing; the private tour is better if you specifically want historical depth and context explained along the way." }
                ],
                faqs: [
                    { q: "What is the best city tour in Medina?", a: "The hop-on hop-off bus for flexible general sightseeing, or a private guided tour for depth." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Medina?", "acceptedAnswer": { "@type": "Answer", "text": "The hop-on hop-off bus, or a private guided tour for depth." } }
                ] },
            };

        case "medina-travel-guide-2026":
            return {
                title: "Medina Travel Guide 2026",
                description: "What visitors need to know about Medina, Islam's second-holiest city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cfb6e4403bc3898ea1618b93ee13f2fe97b810ea67ec67efaf031ec16557c8fe.jpg",
                sections: [
                    { title: "Why Visit", content: "Medina is home to the Prophet's Mosque and sites significant to early Islamic history, including the Battle of Uhud site and the Seven Mosques — a major destination for Muslim pilgrims, with general city sightseeing (via hop-on hop-off bus or guided tours) also available." },
                    { title: "Access Notes", content: "Medina itself is generally open to visitors, unlike Mecca — but the Prophet's Mosque's innermost sanctuary areas have their own specific access rules. Confirm with your tour operator what any given tour includes." }
                ],
                faqs: [
                    { q: "Is Medina worth visiting?", a: "Yes, for its deep Islamic historical significance and genuinely open general city sightseeing." },
                    { q: "Can non-Muslims visit Medina?", a: "Medina is generally open to visitors, though the Prophet's Mosque's innermost areas have specific access rules." }
                ],
            };

        case "best-riyadh-local-culture-experience-riyadh":
            return {
                title: "Best Ways to Experience Local Riyadh Beyond the Main Sights",
                seoTitle: "Best Riyadh Local Experience 2026 | Wadi Hanifah, Library, Noor Festival",
                description: "Compare three distinct local Riyadh experiences — a Wadi Hanifah evening bike ride, the King Fahad National Library, and the Noor Riyadh art festival with metro stations.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e887d230311c19dc6ebc62a3336b5ef506548b954aace4e7d1f9ffadda6d6c71.png",
                sections: [
                    { title: "The Short Answer", content: "Beyond Edge of the World and Diriyah, Riyadh has a few lower-key local experiences worth knowing about, each quite different from the rest.", tourCard: { slug: "evening-bike-tour-in-wadi-hanifah", title: "Evening Bike Tour in Wadi Hanifah", description: "An evening bike tour through Wadi Hanifah valley.", price: "From $52", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e887d230311c19dc6ebc62a3336b5ef506548b954aace4e7d1f9ffadda6d6c71.png" } },
                    { title: "For Architecture Fans: King Fahad National Library", content: "A guided tour of Riyadh's striking modern library building, a different kind of landmark from the historical sites most tours focus on.", tourCard: { slug: "riyadh-king-fahad-national-library-guided-tour", title: "Riyadh: King Fahad National Library Guided Tour", description: "A guided tour of the King Fahad National Library.", price: "From $85", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/98c0f24a9f2b9243abb1137f3c3eca28e8e3d32b483fbe37a9dfe05dedcbaf24.jpeg" } },
                    { title: "For Art & Transit Fans: Riyadh Metro & Noor Riyadh Festival", content: "This covers the Riyadh Metro's architecturally distinctive stations alongside the Noor Riyadh light and art festival, when it is running.", tourCard: { slug: "iconic-stations-of-riyadh-metro-noor-riyadh", title: "Iconic Stations of Riyadh Metro, Noor Riyadh Festival", description: "A tour of Riyadh Metro's iconic stations and the Noor Riyadh festival.", price: "From $208", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b7ad7a7b08f472fad0aa592c8723ea0ef02da6a5b5bbc3de0b5acaa81892581.jpeg" } },
                    { title: "Practical Tips", content: "Noor Riyadh is a seasonal festival, so confirm dates before booking that specific combination." }
                ],
                faqs: [
                    { q: "What is Wadi Hanifah?", a: "A green valley running through Riyadh, popular for evening walks and bike rides." },
                    { q: "What is Noor Riyadh?", a: "A seasonal light and art festival held across the city." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Wadi Hanifah?", "acceptedAnswer": { "@type": "Answer", "text": "A green valley through Riyadh, popular for evening bike rides." } }
                ] },
            };

        case "is-jet-car-ride-worth-it-jeddah":
            return {
                title: "Is the Red Sea Jet Car Ride at Obhur Beach Worth It?",
                seoTitle: "Jeddah Jet Car Ride 2026 | Honest Review",
                description: "An honest look at the private jet car ride at Obhur Beach in Jeddah, a short high-speed water activity on the Red Sea.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7476ea637d19638a69e449f1e718605e375f9be25f65478f4f7b28a73618e419.jpg",
                sections: [
                    { title: "The Short Answer", content: "A jet car is a small, high-speed personal watercraft, offering a quick adrenaline burst on the Red Sea at Obhur Beach — worth it as a short add-on, not a full day's activity.", tourCard: { slug: "jeddah-private-red-sea-jet-car-ride-at-obhur", title: "Jeddah: Private Red Sea Jet Car Ride at Obhur Beach", description: "A private jet car ride on the Red Sea at Obhur Beach.", price: "From $519", duration: "30 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7476ea637d19638a69e449f1e718605e375f9be25f65478f4f7b28a73618e419.jpg" } },
                    { title: "Practical Tips", content: "Obhur Beach is north of central Jeddah — worth combining with a broader Red Sea or beach day given the short duration of the jet car ride itself." }
                ],
                faqs: [
                    { q: "Is the jet car ride worth it in Jeddah?", a: "Yes, as a short, high-speed add-on to a Red Sea beach day at Obhur." },
                    { q: "What is Obhur Beach?", a: "A beach area north of central Jeddah known for water sports." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the jet car ride worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a short add-on to a Red Sea beach day." } }
                ] },
            };

        case "best-vintage-land-rover-tour-alula":
            return {
                title: "Which Vintage Land Rover Tour Is Best in AlUla?",
                seoTitle: "Best AlUla Vintage Land Rover Tour 2026 | Hegra vs Dadan",
                description: "Compare AlUla's vintage Land Rover tours — one to Hegra, one to the ancient Dadan kingdom site.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1e6e0f42e74361d2689756b57958ba563214de4a986f674d409037bc7082e4ae.jpg",
                sections: [
                    { title: "The Short Answer", content: "Both tours use the same vintage Land Rover format, a novel and photogenic way to reach AlUla's ancient sites — the choice is simply which site interests you more.", tourCard: { slug: "fancy-tour-of-hegra-in-a-vintage-land-rover", title: "Fancy Tour of Hegra in a Vintage Land Rover", description: "A vintage Land Rover tour of Hegra.", price: "From $649", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1e6e0f42e74361d2689756b57958ba563214de4a986f674d409037bc7082e4ae.jpg" } },
                    { title: "Alternative: Dadan Ancient Tour in a Vintage Land Rover", content: "This version visits Dadan, capital of an ancient kingdom that predates Hegra, in the same vintage Land Rover format.", tourCard: { slug: "private-dadan-ancient-tour-in-a-vintage-land-rover", title: "Private Dadan Ancient Tour in a Vintage Land Rover", description: "A vintage Land Rover tour of the ancient Dadan kingdom site.", price: "From $649", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/22902660833db24285301f2a420c8261dbd12212a0c4ea48e000d5d11265ac33.jpg" } },
                    { title: "Practical Tips", content: "Both are private tours priced the same — choose based on whether Hegra (Nabataean) or Dadan (an earlier kingdom) interests you more." }
                ],
                faqs: [
                    { q: "What is Dadan?", a: "The capital of an ancient kingdom near AlUla that predates the Nabataean site of Hegra." },
                    { q: "Which vintage Land Rover tour is better, Hegra or Dadan?", a: "Both use the same format — pick based on which ancient site interests you more." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Dadan?", "acceptedAnswer": { "@type": "Answer", "text": "The capital of an ancient kingdom near AlUla predating Hegra." } }
                ] },
            };

        case "is-kashta-coffee-workshop-worth-it-alula":
            return {
                title: "Is the Desert Kashta & Coffee Workshop Worth It in AlUla?",
                seoTitle: "AlUla Kashta Coffee Workshop 2026 | Honest Review",
                description: "An honest look at AlUla's private desert kashta (traditional gathering) with a coffee workshop and sunset.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cfabf6cda41151e240908185fa34c3176a09fc925c8468785bd8d6a953fa6b44.jpg",
                sections: [
                    { title: "The Short Answer", content: "A kashta is a traditional outdoor desert gathering — this version pairs it with a hands-on Saudi coffee workshop and sunset, a relaxed cultural activity distinct from AlUla's archaeological sites.", tourCard: { slug: "alula-private-desert-kashta-coffee-workshop-sunset", title: "AlUla: Private Desert Kashta, Coffee Workshop & Sunset", description: "A private desert kashta with a coffee workshop and sunset.", price: "From $233", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cfabf6cda41151e240908185fa34c3176a09fc925c8468785bd8d6a953fa6b44.jpg" } },
                    { title: "Practical Tips", content: "This works well as an evening activity after a day spent at Hegra or Dadan, pairing well with the desert sunset timing." }
                ],
                faqs: [
                    { q: "What is a kashta?", a: "A traditional outdoor desert gathering, often with coffee and conversation." },
                    { q: "Is the coffee workshop worth it in AlUla?", a: "Yes, as a relaxed cultural evening activity distinct from the archaeological day tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is a kashta?", "acceptedAnswer": { "@type": "Answer", "text": "A traditional outdoor desert gathering, often with coffee and conversation." } }
                ] },
            };

        case "is-scuba-certification-course-worth-it-jeddah":
            return {
                title: "Is the Beginner Scuba Diving Certification Course Worth It in Jeddah?",
                seoTitle: "Jeddah Scuba Certification Course 2026 | Honest Review",
                description: "An honest look at Jeddah's beginner scuba diving course that ends with actual certification, distinct from a standard guided dive or snorkeling trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/faf24d0196daf1bc241a7389638a209c1f390148540c3d115e0188e26657418a.jpg",
                sections: [
                    { title: "The Short Answer", content: "Unlike a one-off guided dive or snorkeling trip, this course ends with an actual diving certification you keep and can use anywhere in the world — worth it specifically if you want to start diving as a hobby, not just try it once.", tourCard: { slug: "jeddah-beginner-scuba-diving-course-with", title: "Jeddah: Beginner Scuba Diving Course with Certification", description: "A beginner scuba diving course ending in certification.", price: "From $247", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/faf24d0196daf1bc241a7389638a209c1f390148540c3d115e0188e26657418a.jpg" } },
                    { title: "Practical Tips", content: "If you just want to see the Red Sea's reefs once without a long-term commitment, a standard guided dive or snorkeling trip is cheaper and faster than this certification course." }
                ],
                faqs: [
                    { q: "Do I keep the certification from this course?", a: "Yes, it's a real diving certification usable anywhere in the world, not just a one-off guided dive." },
                    { q: "Is this course worth it for a single Jeddah visit?", a: "Only if you plan to dive again elsewhere — otherwise a standard guided dive or snorkeling trip is more efficient." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Do I keep the certification?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a real certification usable anywhere in the world." } }
                ] },
            };

        case "is-local-woman-guided-tour-worth-it-jeddah":
            return {
                title: "Is the Jeddah Tour Guided by a Local Woman Worth It?",
                seoTitle: "Jeddah Local Woman Guided Tour 2026 | Honest Review",
                description: "An honest look at Jeddah's guided tour led by a local woman, offering a different cultural perspective on the city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25a0d7cb7507d6473beb40a701a51babf4221f0ab04a39ec38d917e6604e2b8c.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour is led by a local Saudi woman, offering a personal, firsthand perspective on daily life and culture in Jeddah that a standard guide tour doesn't always provide.", tourCard: { slug: "guided-tour-in-jeddah-by-local-woman", title: "Guided Tour in Jeddah by Local Woman", description: "A guided tour of Jeddah led by a local woman.", price: "From $163", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25a0d7cb7507d6473beb40a701a51babf4221f0ab04a39ec38d917e6604e2b8c.jpg" } },
                    { title: "Practical Tips", content: "A good option for travelers specifically interested in a woman's perspective on contemporary life in Saudi Arabia, beyond standard sightseeing commentary." }
                ],
                faqs: [
                    { q: "What makes this tour different from a standard Jeddah tour?", a: "It's led by a local Saudi woman, offering a personal, firsthand perspective on daily life and culture." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What makes this tour different?", "acceptedAnswer": { "@type": "Answer", "text": "It's led by a local Saudi woman, offering a personal perspective on daily life." } }
                ] },
            };

        case "is-food-trail-tour-worth-it-riyadh":
            return {
                title: "Is the Qasr Al-Hukm Food Trail Tour Worth It in Riyadh?",
                seoTitle: "Riyadh Food Trail Tour 2026 | Honest Review",
                description: "An honest look at Riyadh's guided food trail tour around Qasr Al-Hukm, the historic governance district.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b3555e5ccf98369fd0b62af549a6a1aadeba87999de4f937929a9f6ae16a2702.jpg",
                sections: [
                    { title: "The Short Answer", content: "This food-focused walking tour covers Qasr Al-Hukm, Riyadh's historic governance district, pairing local tastings with the area's heritage architecture — a genuinely different angle than a standard Old Riyadh walking or museum tour.", tourCard: { slug: "riyadh-food-trail-guided-tour-at-qasr-al-hukm", title: "Riyadh: Food Trail Guided Tour at Qasr Al-Hukm", description: "A guided food trail tour around Qasr Al-Hukm.", price: "From $422", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b3555e5ccf98369fd0b62af549a6a1aadeba87999de4f937929a9f6ae16a2702.jpg" } },
                    { title: "Practical Tips", content: "Go hungry — this tour's draw is the tastings along the route, so a light breakfast beforehand is the right call." }
                ],
                faqs: [
                    { q: "What is Qasr Al-Hukm?", a: "Riyadh's historic governance district, combining heritage architecture with the adjacent souqs." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Qasr Al-Hukm?", "acceptedAnswer": { "@type": "Answer", "text": "Riyadh's historic governance district with heritage architecture and souqs." } }
                ] },
            };

        case "is-floating-mosque-al-balad-tour-worth-it-jeddah":
            return {
                title: "Is the Floating Mosque and Al-Balad Tour Worth It in Jeddah?",
                seoTitle: "Jeddah Floating Mosque Tour 2026 | Honest Review",
                description: "An honest look at Jeddah's floating mosque and UNESCO-listed Al-Balad tour, combining a striking Red Sea landmark with the city's historic district.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d99b7a2f578cf7662987f7bfc4fb216ead1be52a9575810e50e9052c1ed2ae3.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Floating Mosque sits right at the edge of the Red Sea, appearing to float above the water at high tide, a striking architectural sight paired here with Al-Balad's UNESCO-listed historic coral-stone architecture for a fuller half-day of Jeddah's distinct landmarks.", tourCard: { slug: "jeddah-floating-mosque-unesco-listed-al-balad-tour", title: "Jeddah: Floating Mosque & UNESCO-Listed Al-Balad Tour", description: "A tour combining Jeddah's Floating Mosque with the UNESCO-listed Al-Balad district.", price: "From $249", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d99b7a2f578cf7662987f7bfc4fb216ead1be52a9575810e50e9052c1ed2ae3.jpeg" } },
                    { title: "Practical Tips", content: "Visit the Floating Mosque near high tide for the best effect, since the 'floating' illusion is strongest when water surrounds the structure." },
                ],
                faqs: [
                    { q: "Is the Floating Mosque and Al-Balad tour worth it in Jeddah?", a: "Yes, for a striking architectural landmark paired with the city's UNESCO-listed historic district in one half-day." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Floating Mosque tour worth it in Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a striking landmark paired with the historic Al-Balad district." } },
                ] },
            };

        case "is-paragliding-buggy-adventure-worth-it-riyadh":
            return {
                title: "Is the Paragliding and Buggy Sand Dunes Adventure Worth It in Riyadh?",
                seoTitle: "Riyadh Paragliding and Buggy Adventure 2026 | Honest Review",
                description: "An honest look at Riyadh's paragliding and buggy sand dunes adventure, a combined aerial-and-off-road activity distinct from the city's standard desert safari.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/538ef5a03a786cf3bb7344af14772beadc8f7908293dcb7a967a0e5b712715f1.png",
                sections: [
                    { title: "The Short Answer", content: "This adventure combines a paragliding flight over the sand dunes with a buggy ride across them, a genuinely two-sided activity that gives both an aerial and ground-level perspective — a more active format than a standard desert safari with camel rides and photo stops.", tourCard: { slug: "paragliding-and-buggy-riyadh-sand-dunes-adventure", title: "Paragliding and Buggy: Riyadh Sand Dunes Adventure", description: "A combined paragliding and buggy adventure across Riyadh's sand dunes.", price: "From $286", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/538ef5a03a786cf3bb7344af14772beadc8f7908293dcb7a967a0e5b712715f1.png" } },
                    { title: "Practical Tips", content: "Both activities depend on weather and wind conditions, so build flexibility into your schedule in case of a reschedule." },
                ],
                faqs: [
                    { q: "Is the paragliding and buggy adventure worth it in Riyadh?", a: "Yes, for a genuinely more active two-sided adventure than a standard desert safari with camel rides and photo stops." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the paragliding and buggy adventure worth it in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a more active aerial-and-off-road combination than a standard desert safari." } },
                ] },
            };

        case "is-misk-institute-art-tour-worth-it-riyadh":
            return {
                title: "Is the Misk Institute Art Tour Worth It in Riyadh?",
                seoTitle: "Riyadh Misk Institute Art Tour 2026 | Honest Review",
                description: "An honest look at Riyadh's art tour at the Misk Institute, a contemporary art venue distinct from the city's historic Diriyah and National Museum sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5abca193792c67c936ed23949c56aa4f619d1482de43aee1c641063b9bef2bec.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Misk Institute showcases contemporary Saudi art and culture, a genuinely different side of Riyadh from the historic Diriyah and National Museum sightseeing most visitors prioritize — worth it for travelers wanting a sense of the city's current creative scene rather than only its history.", tourCard: { slug: "riyadh-art-tour-at-misk-institute-and-jacks", title: "Riyadh: Art Tour at Misk Institute", description: "An art tour at Riyadh's Misk Institute contemporary art venue.", price: "From $372", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5abca193792c67c936ed23949c56aa4f619d1482de43aee1c641063b9bef2bec.jpeg" } },
                    { title: "Practical Tips", content: "Exhibitions rotate, so check current programming with the operator before booking if a specific exhibit is the draw." },
                ],
                faqs: [
                    { q: "Is the Misk Institute art tour worth it in Riyadh?", a: "Yes, for a genuine sense of Riyadh's current contemporary art and creative scene, distinct from the city's historic sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Misk Institute art tour worth it in Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine sense of Riyadh's contemporary art scene." } },
                ] },
            };

        case "is-masmak-fort-souq-tour-worth-it-riyadh":
            return {
                title: "Is the Masmak Fort, Souq Alzal & Murabba Palace Tour Worth It in Riyadh?",
                description: "An honest look at the combined tour of Masmak Fort, Souq Alzal, and Murabba Palace in old Riyadh.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f997e8e77a57d49f2f2f9ce4497f7fdc77fa99c1f17f06770785d137aded3af0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Masmak Fort holds genuine significance as the site of the 1902 battle that founded modern Saudi Arabia, and pairing it with Souq Alzal's traditional market and Murabba Palace covers three distinct pieces of old Riyadh history in one reasonably priced day.", tourCard: { slug: "riyadh-masmak-fort-souq-alzal-and-murabba-palace", title: "Riyadh: Masmak Fort, Souq Alzal & Murabba Palace Tour", description: "A combined tour of Masmak Fort, Souq Alzal, and Murabba Palace in Riyadh.", price: "From $194", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f997e8e77a57d49f2f2f9ce4497f7fdc77fa99c1f17f06770785d137aded3af0.jpg" } },
                    { title: "Practical Tips", content: "A good first-day activity to build historical context before heading out to Diriyah or the Edge of the World." },
                ],
                faqs: [
                    { q: "Is the Masmak Fort and Souq Alzal tour worth it in Riyadh?", a: "Yes, it covers three distinct pieces of old Riyadh history in one reasonably priced day." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Masmak Fort tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it covers three distinct pieces of old Riyadh history in one day." } },
                ] },
            };

        case "is-farm-adventure-atv-horse-worth-it-riyadh":
            return {
                title: "Is the Riyadh Farm Adventure with ATV & Horse Riding Worth It?",
                description: "An honest look at the Riyadh farm adventure combining ATV riding and horse riding.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2d1a8be52a909c3672e65afd7ef21b01d73b037d3305999d196ae9ea59743c75.jpg",
                sections: [
                    { title: "The Short Answer", content: "Combining ATV riding and horse riding at a private farm gives genuine variety in a single outing, a good pick for families or groups wanting a mix of adrenaline and a more traditional activity without splitting them into separate bookings.", tourCard: { slug: "riyadh-farm-adventure-with-atv-ride-horse-riding", title: "Riyadh Farm Adventure with ATV Ride & Horse Riding", description: "A farm adventure in Riyadh combining ATV riding and horse riding.", price: "From $1937", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2d1a8be52a909c3672e65afd7ef21b01d73b037d3305999d196ae9ea59743c75.jpg" } },
                    { title: "Practical Tips", content: "This is priced as a genuine premium private experience, so confirm group size and inclusions with the operator before booking." },
                ],
                faqs: [
                    { q: "Is the farm adventure with ATV and horse riding worth it in Riyadh?", a: "Yes, it gives genuine variety in one outing for groups wanting a mix of adrenaline and traditional activities." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the farm adventure worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it gives genuine variety combining ATV and horse riding in one outing." } },
                ] },
            };

        case "is-vip-city-tour-saudi-cuisine-worth-it-riyadh":
            return {
                title: "Is the VIP Private City Tour with Saudi Cuisine Worth It in Riyadh?",
                description: "An honest look at the VIP private city tour of Riyadh paired with a genuine Saudi cuisine experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f34e16c7129cdd1cb097d91865012a7bc315136416e85e0f544833d6c83cab43.jpg",
                sections: [
                    { title: "The Short Answer", content: "Pairing a VIP private city tour with a genuine Saudi cuisine meal gives this day real culinary depth beyond just sightseeing, a good fit for travelers wanting a more premium, personalized introduction to the capital.", tourCard: { slug: "riyadh-vip-private-city-tour-with-saudi-cuisine", title: "Riyadh VIP Private City Tour with Saudi Cuisine", description: "A VIP private city tour of Riyadh with a Saudi cuisine experience.", price: "From $715", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f34e16c7129cdd1cb097d91865012a7bc315136416e85e0f544833d6c83cab43.jpg" } },
                    { title: "Practical Tips", content: "This is priced as a genuine VIP private experience, so it suits travelers wanting a more personalized, premium introduction to the city." },
                ],
                faqs: [
                    { q: "Is the VIP city tour with Saudi cuisine worth it in Riyadh?", a: "Yes, it adds real culinary depth beyond sightseeing with a more premium, personalized experience." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the VIP city tour with cuisine worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it adds real culinary depth to a premium, personalized city tour." } },
                ] },
            };

        case "is-kingdom-tower-faisaliah-tour-worth-it-riyadh":
            return {
                title: "Is the Kingdom Tower, Al Faisaliah Tower & Skyline Tour Worth It in Riyadh?",
                description: "An honest look at the tour combining Kingdom Tower, Al Faisaliah Tower, and Riyadh's modern skyline.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Covering both of Riyadh's most recognizable modern towers in one tour gives a genuinely different, contemporary angle on the city distinct from the old Riyadh heritage circuit, a good fit for travelers interested in modern architecture.", tourCard: { slug: "riyadh-kingdom-tower-al-faisaliah-tower-and-al", title: "Riyadh Kingdom Tower, Al Faisaliah Tower & Skyline Tour", description: "A tour covering Kingdom Tower, Al Faisaliah Tower, and Riyadh's modern skyline.", price: "From $744", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg" } },
                    { title: "Practical Tips", content: "Time the Kingdom Tower observation deck visit for sunset if possible, for the best skyline lighting." },
                ],
                faqs: [
                    { q: "Is the Kingdom Tower and Al Faisaliah Tower tour worth it in Riyadh?", a: "Yes, it gives a genuinely different, modern architectural angle on the city distinct from the heritage circuit." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Kingdom Tower and Al Faisaliah tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it gives a modern architectural angle distinct from the heritage circuit." } },
                ] },
            };

        case "is-desert-horse-ride-worth-it-riyadh":
            return {
                title: "Is the Desert Horse Ride Tour Worth It in Riyadh?",
                description: "An honest look at the desert horse ride tour near Riyadh.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Riding a horse through the desert gives a genuinely different pace and experience than the city's camel-and-ATV combo tours, worth it specifically for travelers with some riding experience wanting a calmer, more focused equestrian activity.", tourCard: { slug: "desert-horse-ride-tour-riyadh", title: "Desert Horse Ride Tour Riyadh", description: "A guided desert horse ride tour near Riyadh.", price: "From $259", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg" } },
                    { title: "Practical Tips", content: "Mention your riding experience level when booking, since pacing and routes can be adjusted for beginners versus more experienced riders." },
                ],
                faqs: [
                    { q: "Is the desert horse ride tour worth it in Riyadh?", a: "Yes, specifically for travelers with some riding experience wanting a calmer, equestrian-focused desert activity, distinct from the city's camel-and-ATV combos." },
                ],
            };

        case "is-national-museum-souq-ushaiger-tour-worth-it-riyadh":
            return {
                title: "Is the Riyadh Heritage Tour from National Museum to Souq Ushaiger Worth It?",
                description: "An honest look at the Riyadh heritage tour from the National Museum to Souq Ushaiger.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Pairing the National Museum with the historic village of Souq Ushaiger covers both curated exhibits and an authentic mud-brick village, worth it specifically for travelers wanting deeper historical range beyond the city's main Masmak Fort and souq circuit.", tourCard: { slug: "riyadh-heritage-tour-from-national-museum-to-souq", title: "Riyadh: Heritage Tour from National Museum to Souq Ushaiger", description: "A heritage tour from Riyadh's National Museum to Souq Ushaiger village.", price: "From $272", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg" } },
                    { title: "Practical Tips", content: "Wear comfortable shoes for Souq Ushaiger's uneven, historic mud-brick streets." },
                ],
                faqs: [
                    { q: "Is the National Museum to Souq Ushaiger heritage tour worth it?", a: "Yes, specifically for travelers wanting deeper historical range beyond the city's main Masmak Fort and souq circuit." },
                ],
            };

        case "is-riyadh-highlights-local-food-tour-worth-it-riyadh":
            return {
                title: "Is the Riyadh Highlights City Tour & Local Food Experience Worth It?",
                description: "An honest look at the Riyadh highlights city tour combined with a local food experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Bundling the city's main highlights with a dedicated local food experience covers both sightseeing and cuisine in one booking, worth it specifically for travelers wanting a well-rounded introduction without arranging a separate food tour.", tourCard: { slug: "riyadh-highlights-city-tour-local-food-experience", title: "Riyadh Highlights City Tour & Local Food Experience", description: "A city highlights tour combined with a local food experience in Riyadh.", price: "From $780", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9b71ddfedb512fa944fc533e08e4fdb315b1e3e7ab60e91aa8c1d0da674d0ed9.jpeg" } },
                    { title: "Practical Tips", content: "Come hungry for the food portion, and confirm which specific landmarks are included in the sightseeing half." },
                ],
                faqs: [
                    { q: "Is the Riyadh highlights and local food tour worth it?", a: "Yes, for travelers wanting a well-rounded introduction covering both main sights and cuisine in one booking." },
                ],
            };

        case "is-hajj-route-artisans-alley-tour-worth-it-jeddah":
            return {
                title: "Is the Historic Hajj Route & Artisans' Alley Tour Worth It in Jeddah?",
                description: "An honest look at the Historic Hajj Route and Artisans' Alley tour in Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbd4c0d9f83d892fe332d6d60929e63b13c947fd27c28610044b7ded3911fef4.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour covers the historic route pilgrims once walked through Jeddah on their way to Mecca, alongside a lane of traditional artisans still working today, worth it for travelers wanting real historical depth beyond a standard Al-Balad walk.", tourCard: { slug: "historic-hajj-route-artisans-alley-tour", title: "Historic Hajj Route & Artisans' Alley Tour", description: "A guided tour of Jeddah's historic Hajj route and artisans' alley.", price: "From $236", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbd4c0d9f83d892fe332d6d60929e63b13c947fd27c28610044b7ded3911fef4.jpg" } },
                    { title: "Practical Tips", content: "Ask your guide about the route's specific historical significance for pilgrims — that context is the main reason this tour stands apart from a general Al-Balad walk." },
                ],
                faqs: [
                    { q: "Is the Historic Hajj Route and Artisans' Alley tour worth it in Jeddah?", a: "Yes, it gives real historical depth on the pilgrim route and traditional crafts, beyond a standard Al-Balad walking tour." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Hajj Route and Artisans' Alley tour worth it in Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for real historical depth on the pilgrim route and traditional crafts." } },
                ] },
            };

        case "is-discovery-dive-underwater-photography-worth-it-jeddah":
            return {
                title: "Is the Discovery Dive with Underwater Photography Worth It in Jeddah?",
                description: "An honest look at the discovery dive with underwater photography in Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f79b0a7b90825b16a6a85a76b848bddaafac3911cc7f0b9158568cf12534d7b2.jpg",
                sections: [
                    { title: "The Short Answer", content: "Aimed at first-time or non-certified divers, this discovery dive comes with professional underwater photography included, worth it for travelers who want a real Red Sea diving taste along with photos to prove it, without needing certification.", tourCard: { slug: "jeddah-discovery-dive-with-underwater-photography", title: "Jeddah: Discovery Dive with Underwater Photography", description: "A beginner discovery dive in the Red Sea with underwater photography included.", price: "From $397", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f79b0a7b90825b16a6a85a76b848bddaafac3911cc7f0b9158568cf12534d7b2.jpg" } },
                    { title: "Practical Tips", content: "No certification is required for a discovery dive, but confirm the depth and safety briefing details with the operator beforehand." },
                ],
                faqs: [
                    { q: "Is the discovery dive with underwater photography worth it in Jeddah?", a: "Yes, for a genuine Red Sea diving taste with photos included, no certification required." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the discovery dive worth it in Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine Red Sea diving taste with photos, no certification needed." } },
                ] },
            };

        case "is-durrat-al-arous-beach-day-worth-it-jeddah":
            return {
                title: "Is the Durrat Al-Arous Private Beach Day Worth It from Jeddah?",
                description: "An honest look at the Durrat Al-Arous private beach day with swimming and a cruise from Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/848009257294a0e165d32d2b10e82e835ddb7cf8656f0b8bfa5ee92c3ff4e421.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Durrat Al-Arous is a developed lagoon resort area north of Jeddah with genuinely calm, clear water, and this private day combines beach time with a cruise, worth it for travelers wanting a resort-style beach escape distinct from Bayada Island's snorkeling focus.", tourCard: { slug: "jeddah-durrat-al-arous-private-beach-day-to-swim", title: "Jeddah: Durrat Al-Arous Private Beach Day to Swim & Cruise", description: "A private beach day at Durrat Al-Arous with swimming and a cruise.", price: "From $2860", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/848009257294a0e165d32d2b10e82e835ddb7cf8656f0b8bfa5ee92c3ff4e421.jpeg" } },
                    { title: "Practical Tips", content: "Given the full-day format and private pricing, this suits groups splitting the cost rather than solo travelers." },
                ],
                faqs: [
                    { q: "Is the Durrat Al-Arous private beach day worth it from Jeddah?", a: "Yes, for groups wanting a resort-style beach escape distinct from Bayada Island's snorkeling-focused trips." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Durrat Al-Arous worth it from Jeddah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a resort-style beach escape distinct from Bayada Island's snorkeling trips." } },
                ] },
            };

        case "is-king-abdullah-economic-city-day-trip-worth-it-jeddah":
            return {
                title: "Is the King Abdullah Economic City Day Trip Worth It from Jeddah?",
                description: "An honest look at the King Abdullah Economic City day trip from Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f024ecf78872a0165ccffbd120b0c8782c1857526a6f0b351afb487ad110d1.jpg",
                sections: [
                    { title: "The Short Answer", content: "King Abdullah Economic City is a genuinely distinct planned mega-development north of Jeddah, worth it for travelers interested in Saudi Arabia's Vision 2030 infrastructure push rather than traditional heritage or beach sightseeing.", tourCard: { slug: "from-jeddah-king-abdullah-economic-city-day-trip", title: "From Jeddah: King Abdullah Economic City Day Trip", description: "A day trip to the King Abdullah Economic City development from Jeddah.", price: "From $3250", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f024ecf78872a0165ccffbd120b0c8782c1857526a6f0b351afb487ad110d1.jpg" } },
                    { title: "Practical Tips", content: "This is a niche interest trip — confirm with your operator exactly what's included before booking at this price point." },
                ],
                faqs: [
                    { q: "Is the King Abdullah Economic City day trip worth it from Jeddah?", a: "Yes, specifically for travelers interested in Saudi Arabia's modern development push, rather than heritage or beach sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the King Abdullah Economic City day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travelers interested in Saudi Arabia's modern development push." } },
                ] },
            };

        case "is-al-balad-wholesale-souq-tour-worth-it-jeddah":
            return {
                title: "Is the Al-Balad Wholesale Souq Shopping Tour Worth It in Jeddah?",
                description: "An honest look at the Al-Balad wholesale souq shopping tour with a guide in Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e0895f2c53c63c1b0a76773c8c514f6476f8d323d8832a9fe5602defaf692875.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour focuses specifically on Al-Balad's wholesale souq trade, a genuinely different commercial angle than the standard heritage-architecture walking tours of the same district, worth it for travelers interested in how the old city actually trades today.", tourCard: { slug: "jeddah-al-balad-wholesale-souq-shopping-tour-with", title: "Jeddah Al-Balad: Wholesale Souq Shopping Tour with a Guide", description: "A guided wholesale souq shopping tour in Jeddah's Al-Balad district.", price: "From $446", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e0895f2c53c63c1b0a76773c8c514f6476f8d323d8832a9fe5602defaf692875.jpg" } },
                    { title: "Practical Tips", content: "Bring cash and be ready to haggle — wholesale souq pricing works differently from fixed-price retail shops." },
                ],
                faqs: [
                    { q: "Is the Al-Balad wholesale souq tour worth it in Jeddah?", a: "Yes, for travelers wanting a genuine commercial angle on Al-Balad, distinct from the standard heritage-architecture walking tours." },
                ],
            };

        case "is-deep-sea-fishing-reef-swim-worth-it-jeddah":
            return {
                title: "Is the Private Deep-Sea Fishing and Reef Swim at Bayada Island Worth It?",
                description: "An honest look at the private deep-sea fishing and reef swim at Bayada Island from Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f09eb8fe9b1f73fc517b91f15fd1b8091255ff27c58e33ed0d4b79ff5ce938d4.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Combining real deep-sea fishing with a reef swim stop at Bayada Island gives a more active, outcome-focused day than the standard Bayadah snorkeling boat trips, worth it for travelers who actually want to fish rather than just visit the island.", tourCard: { slug: "jeddah-private-deep-sea-fishing-reef-swim-at", title: "Jeddah: Private Deep-Sea Fishing, Reef Swim at Bayada Island", description: "A private deep-sea fishing trip with a reef swim stop at Bayada Island.", price: "From $1039", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f09eb8fe9b1f73fc517b91f15fd1b8091255ff27c58e33ed0d4b79ff5ce938d4.jpeg" } },
                    { title: "Practical Tips", content: "Ask whether the catch is kept or released, and confirm fishing gear is provided before the trip." },
                ],
                faqs: [
                    { q: "Is the deep-sea fishing and reef swim trip worth it in Jeddah?", a: "Yes, for travelers who actually want to fish, not just visit Bayada Island on a standard snorkeling boat trip." },
                ],
            };

        case "is-desert-safari-buggy-beach-horse-worth-it-jeddah":
            return {
                title: "Is the Private Desert Safari, Buggy Ride and Beach Horse Ride Worth It?",
                description: "An honest look at the private desert safari, buggy ride and beach horse ride in Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cb87fc33acd025626d790bdec2fefbc84e6e9b87c5be45bb9120b3989bbeeb12.jpg",
                sections: [
                    { title: "The Short Answer", content: "Pairing a desert buggy ride with a beach horse ride gives a genuinely varied mix of terrain and activity in one outing, distinct from Jeddah's standard quad-bike-only desert safaris, worth it for travelers wanting both dune and coastal adventure in a single day.", tourCard: { slug: "jeddah-private-desert-safari-buggy-ride-beach", title: "Jeddah: Private Desert Safari, Buggy Ride & Beach Horse Ride", description: "A private desert safari combining a buggy ride and a beach horse ride in Jeddah.", price: "From $1039", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cb87fc33acd025626d790bdec2fefbc84e6e9b87c5be45bb9120b3989bbeeb12.jpg" } },
                    { title: "Practical Tips", content: "Confirm riding experience requirements for the beach horse ride segment, since skill levels needed can vary by operator." },
                ],
                faqs: [
                    { q: "Is the desert safari, buggy ride and beach horse ride worth it in Jeddah?", a: "Yes, for travelers wanting both dune and coastal adventure in one outing, distinct from the standard quad-bike-only safari." },
                ],
            };

        case "is-red-sea-boat-rental-worth-it-jeddah":
            return {
                title: "Is the Red Sea Boat Rental with Crew and Water Activities Worth It?",
                description: "An honest look at the Red Sea boat rental with crew and water activities in Jeddah.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/781ba7a18a3c90ba3d842c06c9a655514d686d8ef7b7ce3873ed4c2d892d39dc.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Renting a crewed boat gives genuine flexibility to set your own Red Sea itinerary and water activities, worth it for groups wanting a private, self-paced day rather than a fixed-route island tour.", tourCard: { slug: "jeddah-red-sea-boat-rental-with-crew-and-water", title: "Jeddah: Red Sea Boat Rental with Crew and Water Activities", description: "A crewed boat rental with water activities on the Red Sea from Jeddah.", price: "From $650", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/781ba7a18a3c90ba3d842c06c9a655514d686d8ef7b7ce3873ed4c2d892d39dc.jpeg" } },
                    { title: "Practical Tips", content: "Discuss your preferred route and activities with the crew beforehand to make the most of the flexible format." },
                ],
                faqs: [
                    { q: "Is the Red Sea boat rental worth it in Jeddah?", a: "Yes, for groups wanting a private, self-paced day on the water rather than a fixed-route island tour." },
                ],
            };

        default:
            return null;
    }
}
