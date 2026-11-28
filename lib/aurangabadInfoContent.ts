import { CityInfoData } from './cityInfoContent';

// Aurangabad launched 2026-11-28 with 3 live tours, all centered on the
// Ajanta & Ellora caves and the Daulatabad Fort.
export function getAurangabadInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-ajanta-ellora-caves-tour-aurangabad":
            return {
                title: "Which Is the Best Ajanta & Ellora Caves Tour from Aurangabad?",
                description: "Compare real Ajanta & Ellora caves tours from Aurangabad — the $180 guided tour with pickup versus the $195 full-day version.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Both tours cover the UNESCO-listed Ajanta and Ellora cave complexes — ancient Buddhist, Hindu, and Jain rock-cut temples and monasteries — with the main difference being whether the day is structured as a standard guided tour or stretched into a fuller day.", tourCard: { slug: "ajanta-caves-guided-tour", title: "Ajanta & Ellora Caves Guided Tour with Pick Up from City.", description: "A guided tour of Ajanta & Ellora caves with city pickup included.", price: "From $180", duration: "1 day" } },
                    { title: "Standard Option: Guided Tour with Pickup", content: "At $180, this covers both cave complexes with a guide and hotel pickup included, suiting most first-time visitors.", tourCard: { slug: "ajanta-caves-guided-tour", title: "Ajanta & Ellora Caves Guided Tour with Pick Up from City.", description: "The standard guided caves tour with pickup.", price: "From $180", duration: "1 day" } },
                    { title: "Most Thorough: Full-Day Tour", content: "At $195, this allows more time at each cave complex rather than rushing between them, worthwhile if you want to actually study the carvings rather than just glance at them.", tourCard: { slug: "ajanta-caves-full-day-tour", title: "From Aurangabad: Ajanta & Ellora Caves Full-Day Tour", description: "A full-day version of the Ajanta & Ellora caves tour.", price: "From $195", duration: "1 day" } },
                    { title: "Practical Tips", content: "Ajanta and Ellora are roughly 100km apart and both large sites, so most single-day tours prioritize one over the other or move quickly through both — ask in advance how the day is split if you have a strong preference." }
                ],
                faqs: [
                    { q: "What is the best Ajanta and Ellora caves tour from Aurangabad?", a: "The full-day version gives more time at each site; the standard guided tour with pickup is fine if you're comfortable moving at a brisker pace." },
                    { q: "Can you visit both Ajanta and Ellora caves in one day?", a: "Yes, though it's a long day given the distance between them — some tours prioritize one site with more time and the other as a shorter stop." }
                ],
            };

        case "is-daulatabad-fort-tour-worth-it-aurangabad":
            return {
                title: "Is the Aurangabad Daulatabad Fort Half-Day Tour Worth It?",
                description: "An honest look at Aurangabad's $98 half-day tour with private car and expert guide, centered on Daulatabad Fort.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you have a half day free around your caves visit — Daulatabad Fort's hilltop defenses and the nearby Bibi Ka Maqbara (a smaller echo of the Taj Mahal) make for a solid half-day add-on with a private car and guide.", tourCard: { slug: "daulatabad-fort-half-day-tour", title: "Aurangabad Half-Day Tour with Private Car & Expert Guide", description: "A half-day private tour covering Daulatabad Fort and nearby sights.", price: "From $98", duration: "4 hours" } },
                    { title: "What You Actually See", content: "Daulatabad Fort is a massive hilltop fortress with elaborate defensive engineering, and most half-day tours pair it with Bibi Ka Maqbara, built as a tribute modeled on the Taj Mahal." },
                    { title: "Who It's For", content: "Best as a complement to an Ajanta/Ellora caves day rather than a standalone trip — it fills a half day well if you're already basing yourself in Aurangabad for the caves." },
                    { title: "Practical Tips", content: "The fort involves a fair amount of walking and some climbing, so wear comfortable shoes and expect direct sun with limited shade in parts of the complex." }
                ],
                faqs: [
                    { q: "Is the Daulatabad Fort tour worth it from Aurangabad?", a: "Yes, as a half-day complement to an Ajanta/Ellora caves visit, especially paired with nearby Bibi Ka Maqbara." }
                ],
            };

        default:
            return null;
    }
}
