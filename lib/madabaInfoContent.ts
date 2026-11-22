import type { CityInfoData } from './cityInfoContent';

export function getMadabaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "is-madaba-mount-nebo-dead-sea-tour-worth-it":
            return {
                title: "Is the Madaba, Mount Nebo and Dead Sea Tour Worth It?",
                description: "An honest look at the classic Madaba, Mount Nebo, and Dead Sea day tour, Jordan's most common combination of mosaic heritage, biblical history, and a float in the Dead Sea.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02b0f6740ee72b1fa33e9787b0a6154a9c44c45fae1552ea64f1af288f1ead32.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Madaba is famous for its ancient Byzantine mosaics, including a 6th-century map of the Holy Land, and this tour pairs it with Mount Nebo, where Moses is traditionally said to have viewed the Promised Land, and a stop to float in the Dead Sea, covering mosaic heritage, biblical history, and a genuinely unique swim in one day.",
                        tourCard: { slug: "madaba-mt-nebo-baptism-site-dead-sea-shared-or", title: "Madaba, Mt Nebo, Baptism Site, Dead Sea", description: "A combined tour of Madaba, Mount Nebo, the Baptism Site, and the Dead Sea.", price: "From $99", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02b0f6740ee72b1fa33e9787b0a6154a9c44c45fae1552ea64f1af288f1ead32.png" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Bring swimwear and water shoes for the Dead Sea float — the salt concentration makes the lake bed genuinely sharp underfoot in places.",
                    },
                ],
                faqs: [
                    { q: "Is the Madaba, Mount Nebo and Dead Sea tour worth it?", a: "Yes, for covering ancient mosaic heritage, biblical history, and a genuinely unique float in the Dead Sea all in one day." },
                ],
            };

        case "is-madaba-mosaic-workshop-worth-it":
            return {
                title: "Is the Madaba Mosaic Workshop Worth It?",
                description: "An honest look at the Madaba mosaic-making workshop, a hands-on craft class in a city famous for its ancient Byzantine mosaic art.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/969a85104b848c4f01c129d60ca02fbc05278e9b3de4352d2e59ddd7056feb6e.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Madaba is often called the 'City of Mosaics' for its ancient Byzantine mosaic art, and this hands-on workshop teaches the traditional technique directly rather than just viewing finished pieces in a church, giving a more meaningful souvenir than anything shop-bought.",
                        tourCard: { slug: "from-amman-madaba-mosaic-workshop-baptism-site", title: "From Amman: Madaba Mosaic Workshop & Baptism Site", description: "A mosaic-making workshop in Madaba paired with a visit to the Baptism Site.", price: "From $248", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/969a85104b848c4f01c129d60ca02fbc05278e9b3de4352d2e59ddd7056feb6e.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "The piece you make is yours to take home — a genuinely more personal souvenir than a shop-bought mosaic tile.",
                    },
                ],
                faqs: [
                    { q: "Is the Madaba mosaic workshop worth it?", a: "Yes, for a genuinely hands-on introduction to the craft that gave Madaba its name, and a more meaningful souvenir than anything shop-bought." },
                ],
            };

        case "is-umm-ar-rasas-tour-worth-it-madaba":
            return {
                title: "Is the Umm ar-Rasas Tour Worth It near Madaba?",
                description: "An honest look at Umm ar-Rasas, a UNESCO World Heritage archaeological site with more ancient mosaics than Madaba's own town churches.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3ac7f2874bb8abfaea2890446bdad2ceccea5b9631b101030a6cec0ae25335ea.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Umm ar-Rasas is a UNESCO World Heritage archaeological site with the ruins of several Byzantine churches and genuinely extensive mosaic floors, a quieter and less-visited counterpart to Madaba's own in-town mosaic churches for travelers who want more depth on the region's mosaic heritage.",
                        tourCard: { slug: "amman-umm-ar-rasas-madaba-mount-nebo-dead-sea", title: "Amman: Umm ar-Rasas, Madaba, Mount Nebo, Dead Sea", description: "A day tour combining Umm ar-Rasas with Madaba, Mount Nebo, and the Dead Sea.", price: "From $174", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3ac7f2874bb8abfaea2890446bdad2ceccea5b9631b101030a6cec0ae25335ea.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Bring sun protection — the ruins sit in open desert terrain with little shade.",
                    },
                ],
                faqs: [
                    { q: "Is Umm ar-Rasas worth visiting?", a: "Yes, for travelers with genuine interest in the region's mosaic heritage, it's a UNESCO site with more extensive mosaic floors than Madaba's own town churches." },
                ],
            };

        default:
            return null;
    }
}
