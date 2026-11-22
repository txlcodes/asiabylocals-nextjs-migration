import type { CityInfoData } from './cityInfoContent';

export function getCameronHighlandsInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "is-tea-plantation-tour-worth-it-cameron-highlands":
            return {
                title: "Is the Tea Plantation Sunrise Tour Worth It in Cameron Highlands?",
                description: "An honest look at the Cameron Highlands tea plantation sunrise tour, a quick visit to the region's rolling tea estates in the cool highland air.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cameron-highlands-sunrise-tour-at-tea-plantation/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Cameron Highlands is Malaysia's best-known tea-growing region, and catching the rolling plantation hills at sunrise gives a genuinely different, cooler-climate landscape from the rest of tropical Malaysia, with a tea tasting usually included.",
                        tourCard: { slug: "cameron-highlands-sunrise-tour-at-tea-plantation", title: "Cameron Highlands Sunrise Tour at Tea Plantation", description: "A sunrise tour of the Cameron Highlands tea plantations.", price: "From $39", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/cameron-highlands-sunrise-tour-at-tea-plantation/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Bring a light jacket — the highland air is genuinely cool, especially at sunrise, a real contrast to lowland Malaysia's heat.",
                    },
                ],
                faqs: [
                    { q: "Is the tea plantation tour worth it in Cameron Highlands?", a: "Yes, for a quick, genuinely cool-climate landscape distinct from the rest of tropical Malaysia, with a tea tasting included." },
                ],
            };

        case "is-mossy-forest-4wd-tour-worth-it-cameron-highlands":
            return {
                title: "Is the Mossy Forest 4WD Tour Worth It in Cameron Highlands?",
                description: "An honest look at the Mossy Forest private Land Rover tour, reaching a genuinely different high-altitude cloud forest ecosystem.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cameron-highlands-mossy-forest-private-land-rover/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "The Mossy Forest sits at a high enough altitude to form a genuine cloud forest ecosystem, with stunted, moss-covered trees and cooler, mistier air than the rest of Cameron Highlands, reached by vintage Land Rover over rough mountain roads.",
                        tourCard: { slug: "cameron-highlands-mossy-forest-private-land-rover", title: "Cameron Highlands Mossy Forest Private Land Rover", description: "A private Land Rover tour to the Mossy Forest.", price: "From $216", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/cameron-highlands-mossy-forest-private-land-rover/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "The Land Rover ride itself is genuinely bumpy on rough mountain roads — part of the experience, not a smooth scenic drive.",
                    },
                ],
                faqs: [
                    { q: "Is the Mossy Forest tour worth it?", a: "Yes, for a genuinely different high-altitude cloud forest ecosystem, cooler and mistier than the rest of Cameron Highlands." },
                ],
            };

        case "is-rafflesia-trek-worth-it-cameron-highlands":
            return {
                title: "Is the Rafflesia Trek Worth It in Cameron Highlands?",
                description: "An honest look at the Rafflesia trek with 4WD transfer, a chance to see the world's largest flower in bloom.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/from-cameron-highlands-rafflesia-trek-with-4wd/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "The rafflesia is the world's largest individual flower, blooming unpredictably and only for a few days at a time, and this short trek with 4WD transfer gives a genuine chance to see one in bloom rather than just photos — though no sighting is ever guaranteed given how unpredictable its blooming is.",
                        tourCard: { slug: "from-cameron-highlands-rafflesia-trek-with-4wd", title: "From Cameron Highlands: Rafflesia Trek with 4WD", description: "A trek to see the rafflesia flower with 4WD transfer.", price: "From $55", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/from-cameron-highlands-rafflesia-trek-with-4wd/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Ask your operator about current blooming conditions before booking — the rafflesia flowers unpredictably and a sighting is never guaranteed.",
                    },
                ],
                faqs: [
                    { q: "Is the Rafflesia trek worth it?", a: "Yes, for a genuine chance to see the world's largest flower in bloom, though sightings depend on unpredictable blooming conditions." },
                ],
            };

        case "is-coral-hill-adventure-worth-it-cameron-highlands":
            return {
                title: "Is the Coral Hill Adventure Worth It in Cameron Highlands?",
                description: "An honest look at the Coral Hill adventure, a guided hike through highland jungle terrain distinct from the region's tea plantation sightseeing.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cameron-highlands-coral-hill-adventure/img0/1600.webp",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Coral Hill is a genuine jungle hiking route through highland terrain, a more active alternative to the region's usual tea plantation and strawberry farm sightseeing, for travelers specifically wanting a physical hike over a scenic drive.",
                        tourCard: { slug: "cameron-highlands-coral-hill-adventure", title: "Cameron Highlands Coral Hill Adventure", description: "A guided jungle hike at Coral Hill in Cameron Highlands.", price: "From $151", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/cameron-highlands-coral-hill-adventure/img0/1600.webp" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Wear real hiking shoes — the highland jungle trail is genuinely uneven and can be slippery after rain.",
                    },
                ],
                faqs: [
                    { q: "Is the Coral Hill adventure worth it?", a: "Yes, for a genuinely active jungle hike, a good alternative to the region's usual tea plantation and farm sightseeing." },
                ],
            };

        default:
            return null;
    }
}
