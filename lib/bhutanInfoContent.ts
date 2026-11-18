import { CityInfoData } from './cityInfoContent';

export function getBhutanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "thimphu-food-guide":
            return {
                title: "Thimphu Food Guide",
                description: "What to eat in Thimphu, Bhutan's capital.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/950028b6c7a24ffc0a32c57c4f1644c6944e9b3fc99ddd762426de523b153edc.jpg",
                sections: [
                    { title: "Local Specialties", content: "Ema datshi (chili and cheese stew) is Bhutan's national dish and a near-constant on local menus. Red rice, momos (dumplings, shared with Tibetan/Nepali cuisine), and butter tea are also common." }
                ],
                faqs: [
                    { q: "What food is Thimphu known for?", a: "Ema datshi (chili and cheese stew), red rice, momos, and butter tea." }
                ],
            };

        case "is-thimphu-safe":
            return {
                title: "Is Thimphu Safe for Tourists?",
                description: "An honest look at safety in Thimphu for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/950028b6c7a24ffc0a32c57c4f1644c6944e9b3fc99ddd762426de523b153edc.jpg",
                sections: [
                    { title: "The Short Answer", content: "Thimphu is widely considered very safe for tourists — Bhutan has low crime rates overall, and the mandatory licensed-guide system means visitors are rarely navigating unfamiliar situations alone." }
                ],
                faqs: [
                    { q: "Is Thimphu safe for tourists?", a: "Yes, Bhutan has low crime rates and the guide system means tourists are rarely alone in unfamiliar situations." }
                ],
            };

        case "thimphu-dress-code-guide":
            return {
                title: "Thimphu Dress Code Guide",
                description: "What to wear when visiting Thimphu's dzongs, temples, and public buildings.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/950028b6c7a24ffc0a32c57c4f1644c6944e9b3fc99ddd762426de523b153edc.jpg",
                sections: [
                    { title: "What to Wear", content: "Modest dress (shoulders and knees covered) is expected at dzongs, temples, and government buildings — some sites require long trousers or skirts rather than shorts. Many Bhutanese still wear the traditional gho and kira daily, especially in government and formal settings." }
                ],
                faqs: [
                    { q: "What should I wear visiting Thimphu's dzongs?", a: "Modest dress with shoulders and knees covered; some sites require long trousers or skirts." }
                ],
            };

        case "thimphu-weather-guide":
            return {
                title: "Thimphu Weather Guide",
                description: "What to expect from Thimphu's high-altitude climate across the year.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/950028b6c7a24ffc0a32c57c4f1644c6944e9b3fc99ddd762426de523b153edc.jpg",
                sections: [
                    { title: "Climate Overview", content: "Thimphu sits at roughly 2,300m elevation, giving it a cooler climate than most of this project's typical destinations — spring and autumn are mild, winter can be cold with occasional snow, and summer brings monsoon rain." }
                ],
                faqs: [
                    { q: "What is the weather like in Thimphu?", a: "Cooler than typical due to its 2,300m elevation — mild spring/autumn, cold winters, rainy summers." }
                ],
            };

        default:
            return null;
    }
}
