import type { CityInfoData } from './cityInfoContent';

export function getBengaluruInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "is-city-guide-tour-worth-it-bengaluru":
            return {
                title: "Is an Official Guide Worth It to Explore Bengaluru City?",
                description: "An honest look at booking an official tour guide to explore Bengaluru, India's tech capital and a city with surprisingly little standard sightseeing infrastructure for visitors.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/book-official-tour-guide-to-explore-bengaluru-city/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Bengaluru is better known as India's tech capital than as a traditional tourist destination, which means it lacks the dense, well-signposted sightseeing circuit of cities like Jaipur or Delhi — an official local guide genuinely helps piece together the city's parks, markets, and colonial-era landmarks into a coherent day.",
                        tourCard: { slug: "book-official-tour-guide-to-explore-bengaluru-city", title: "Book Official Tour Guide to Explore Bengaluru City", description: "An official local guide to explore Bengaluru city.", price: "From $18", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/book-official-tour-guide-to-explore-bengaluru-city/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Agree on a rough itinerary and timeframe with your guide in advance, since Bengaluru doesn't have one obvious sightseeing route the way more historic Indian cities do.",
                    },
                ],
                faqs: [
                    { q: "Is a guide worth it in Bengaluru?", a: "Yes, since the city lacks the dense, well-signposted tourist circuit of more historic Indian cities, a local guide genuinely helps piece together a coherent day." },
                ],
            };

        case "is-taj-mahal-flight-tour-worth-it-bengaluru":
            return {
                title: "Is the Taj Mahal Flight Tour Worth It from Bengaluru?",
                description: "An honest look at flying from Bengaluru to see the Taj Mahal, the practical way to visit Agra given the roughly 2,000-kilometre distance between the two cities.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/same-day-taj-mahal-tour-from-bengaluru/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Bengaluru sits roughly 2,000 kilometres from Agra, far too distant for a road trip, so flying is genuinely the only practical way to see the Taj Mahal without a multi-day overland journey — same-day and overnight flight packages both exist depending on how much time you want in Agra itself.",
                        tourCard: { slug: "same-day-taj-mahal-tour-from-bengaluru", title: "Same Day Taj Mahal Tour from Bengaluru with Flight", description: "A same-day Taj Mahal tour from Bengaluru including flights.", price: "From $280", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/same-day-taj-mahal-tour-from-bengaluru/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "A same-day trip means a genuinely long day given the flight times both ways — the overnight version gives a far more relaxed pace if your schedule allows it.",
                    },
                ],
                faqs: [
                    { q: "Is a same-day Taj Mahal flight tour worth it from Bengaluru?", a: "Yes, specifically for travelers without time for an overnight stay — it's a long day given the distance, but the only practical way to see the Taj Mahal without a multi-day overland trip." },
                ],
            };

        default:
            return null;
    }
}
