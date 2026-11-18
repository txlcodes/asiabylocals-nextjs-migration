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

        default:
            return null;
    }
}
