// Kashmir authority pages (2026-11). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getKashmirInfoContent() -> getCityInfoContent().
// These 14 slugs were already registered in KASHMIR_INFO_SLUGS / sitemapEntries.ts
// since the 2026-10 Kashmir launch, but no dispatcher file ever existed for them —
// they were 404ing. Every tourCard slug is taken from the live tour list for Kashmir.
import type { CityInfoData } from './cityInfoContent';

export function getKashmirInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "things-to-do-in-kashmir":
            return {
                title: "Things to Do in Kashmir: Srinagar, Gulmarg, Pahalgam and Sonamarg",
                description: "A real list of what there is to do across the Kashmir Valley — Dal Lake's houseboats and shikaras, the Mughal gardens, Gulmarg's gondola and skiing, and the day trips to Pahalgam and Sonamarg.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6e32cb3ee365e7e814e379491c2c996f60f14e77399f8ae14b96b2eb3157941.jpg",
                sections: [
                    { title: "In Srinagar Itself", content: "Dal Lake's houseboats and shikara rides are the single image most people associate with Kashmir, and the Mughal gardens (Nishat, Shalimar, Chashme Shahi) along the lake's edge are the easiest half-day stop to pair with it. The Old City's narrow lanes and the Jamia Masjid add a working, lived-in contrast to the gardens' formality.", tourCard: { slug: "srinagar-the-treasure-of-gardens", title: "Srinagar: The Treasure of Gardens", description: "A guided tour of Srinagar's Mughal gardens.", price: "From $69", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6e32cb3ee365e7e814e379491c2c996f60f14e77399f8ae14b96b2eb3157941.jpg" } },
                    { title: "Gulmarg: The Gondola and Skiing", content: "Gulmarg runs Asia's highest-altitude cable car, and in winter it's a genuine ski destination, not just a viewpoint — a different kind of day from the lake-and-garden pace of Srinagar.", tourCard: { slug: "srinagar-gulmarg-day-tour-explore-the-meadow-of", title: "Srinagar: Gulmarg Day Tour, Explore the Meadow of Flowers", description: "A day trip from Srinagar to Gulmarg's meadows and gondola.", price: "From $59", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a8875dadbd794addd8bcfa9320bc62ffd8a9cd9d0e77a67bb10f6967bc77cf7.jpg" } },
                    { title: "Pahalgam and Sonamarg Day Trips", content: "Both are easy day trips from Srinagar built around valley and meadow scenery rather than a single landmark — Pahalgam leans toward apple orchards and riverside walks, Sonamarg ('Meadow of Gold') toward alpine views closer to the Ladakh road.", tourCard: { slug: "srinagar-sonamarg-day-tour-the-golden-meadow", title: "Srinagar: Sonamarg Day Tour, The Golden Meadow Adventure", description: "A day trip from Srinagar to Sonamarg's alpine meadows.", price: "From $50", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c824662e1172587d4b6e9510eec3cd03578ca58465379086c94f62e0b8df2c85.jpg" } },
                    { title: "Practical Tips", content: "Most visitors base in Srinagar and day-trip out to Gulmarg, Pahalgam and Sonamarg rather than moving hotels each night — the drives are 1.5-2.5 hours each way, manageable as day trips." },
                ],
                faqs: [
                    { q: "What are the best things to do in Kashmir?", a: "A Dal Lake shikara ride and the Mughal gardens in Srinagar, plus day trips to Gulmarg, Pahalgam and Sonamarg cover the valley's main draws." },
                    { q: "Do I need to stay in multiple towns in Kashmir?", a: "Not necessarily — most visitors base in Srinagar and day-trip to Gulmarg, Pahalgam and Sonamarg." },
                ],
            };

        case "places-to-visit-in-kashmir":
            return {
                title: "Places to Visit in Kashmir",
                description: "The core landmarks across the Kashmir Valley, from Srinagar's lake and gardens to the hill towns of Gulmarg, Pahalgam and Sonamarg.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a644a25aaa417ed8c218b7195a11f458988c21245feddf31dc62151b63ed43ac.jpg",
                sections: [
                    { title: "Dal Lake and the Mughal Gardens", content: "Dal Lake's houseboats and shikaras, paired with the Mughal-era gardens (Nishat, Shalimar) along its banks, form the core Srinagar sightseeing loop.", tourCard: { slug: "srinagar-old-city-and-mughal-gardens-guided-tour", title: "Srinagar: Old City and Mughal Gardens Guided Tour", description: "A guided tour of Srinagar's Old City and Mughal gardens.", price: "From $59", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a644a25aaa417ed8c218b7195a11f458988c21245feddf31dc62151b63ed43ac.jpg" } },
                    { title: "Gulmarg", content: "A hill station built around its gondola and, in winter, genuine skiing — distinct from Srinagar's lake-and-garden pace." },
                    { title: "Pahalgam", content: "Known for apple orchards and the Lidder River valley, a greener, more pastoral stop than Gulmarg's alpine terrain." },
                    { title: "Sonamarg", content: "The 'Meadow of Gold', closer to the road toward Ladakh, with higher-altitude alpine scenery." },
                ],
                faqs: [
                    { q: "What are the must-visit places in Kashmir?", a: "Dal Lake and the Mughal gardens in Srinagar, plus Gulmarg, Pahalgam and Sonamarg as day trips or short stays." },
                ],
            };

        case "best-time-to-visit-kashmir":
            return {
                title: "Best Time to Visit Kashmir",
                description: "Kashmir has genuinely distinct seasons — spring gardens, summer hill-station relief, autumn color, and a real winter with snow and skiing at Gulmarg.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbcca3b2f2c9ff65b187a901c60b64ce56477e6b4a7f44da073c99d027f7ca28.png",
                sections: [
                    { title: "Spring (April-May): Gardens in Bloom", content: "The Mughal gardens and tulip gardens are at their best, with mild temperatures across the valley." },
                    { title: "Summer (June-August): Escaping the Plains' Heat", content: "This is peak season — Kashmir's cool hill-station climate is a deliberate escape from the heat across the rest of India, so expect larger crowds at Dal Lake and Gulmarg." },
                    { title: "Autumn (September-October): Quieter and Colorful", content: "Fewer crowds than summer, with chinar trees turning color across Srinagar — a good shoulder-season pick." },
                    { title: "Winter (December-February): Snow and Skiing", content: "Genuinely cold with real snowfall, and Gulmarg specifically becomes a proper ski destination rather than just a viewpoint.", tourCard: { slug: "gulmarg-guided-freeride-skiing-with-gulmarg", title: "Gulmarg: Guided Freeride Skiing with Gulmarg Snowkings", description: "Guided freeride skiing at Gulmarg in winter.", price: "From $137", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbcca3b2f2c9ff65b187a901c60b64ce56477e6b4a7f44da073c99d027f7ca28.png" } },
                ],
                faqs: [
                    { q: "What is the best time to visit Kashmir?", a: "Summer for the classic cool-escape experience, spring for garden blooms, autumn for fewer crowds, or winter specifically for snow and Gulmarg skiing." },
                    { q: "Is Kashmir open to visit in winter?", a: "Yes, and Gulmarg in particular becomes a real ski destination with genuine snowfall." },
                ],
            };

        case "dal-lake-srinagar":
            return {
                title: "Dal Lake, Srinagar: Houseboats, Shikaras and What to Know Before You Go",
                description: "A practical guide to Dal Lake — the houseboat stays, the shikara boat rides, and the floating gardens that make it Kashmir's signature image.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3235f8dc52ff92a603a97508eb5c94165f638f2286dceb77ad1fd5d00f7acd65.jpg",
                sections: [
                    { title: "Houseboats and Shikaras", content: "A multi-day houseboat stay is Kashmir's most distinctive accommodation, and a shikara ride (a traditional flat-bottomed boat) is the standard way to see the lake's floating gardens and markets from the water.", tourCard: { slug: "kashmir-houseboat-tour-package-for-3-days", title: "Kashmir Houseboat Tour Package for 3 Days", description: "A 3-day houseboat tour package on Dal Lake.", price: "From $272", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3235f8dc52ff92a603a97508eb5c94165f638f2286dceb77ad1fd5d00f7acd65.jpg" } },
                    { title: "Practical Tips", content: "Book a houseboat with clear reviews on cleanliness and the operator's response time — quality varies significantly between boats, and photos online don't always reflect current condition." },
                ],
                faqs: [
                    { q: "Is a Dal Lake houseboat worth it?", a: "Yes for a genuinely distinctive stay, but check recent reviews carefully since quality varies a lot between individual boats." },
                    { q: "What is a shikara?", a: "A traditional flat-bottomed boat used to tour Dal Lake's floating gardens and markets." },
                ],
            };

        case "gulmarg-travel-guide":
            return {
                title: "Gulmarg Travel Guide",
                description: "Gulmarg's gondola, skiing and meadow scenery, and how it differs from a day trip to Srinagar's lake and gardens.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a8875dadbd794addd8bcfa9320bc62ffd8a9cd9d0e77a67bb10f6967bc77cf7.jpg",
                sections: [
                    { title: "The Gondola", content: "Asia's highest-altitude cable car carries visitors up toward Apharwat Peak in stages, with meadow and mountain views year-round." },
                    { title: "Winter: Skiing", content: "Gulmarg genuinely functions as a ski resort in winter, with both groomed runs and off-piste freeride terrain for more experienced skiers.", tourCard: { slug: "gulmarg-guided-freeride-skiing-with-gulmarg", title: "Gulmarg: Guided Freeride Skiing with Gulmarg Snowkings", description: "Guided freeride skiing with a local ski outfit.", price: "From $137", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbcca3b2f2c9ff65b187a901c60b64ce56477e6b4a7f44da073c99d027f7ca28.png" } },
                    { title: "Summer: Meadows and Horse Rides", content: "Outside ski season, Gulmarg's rolling meadows (the name literally means 'meadow of flowers') are the draw, often toured by horse.", tourCard: { slug: "gulmarg-day-trip-horse-ride-through-scenic", title: "Gulmarg Day Trip: Horse Ride Through Scenic Landscapes", description: "A horse ride through Gulmarg's meadow scenery.", price: "From $58", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a8875dadbd794addd8bcfa9320bc62ffd8a9cd9d0e77a67bb10f6967bc77cf7.jpg" } },
                    { title: "Practical Tips", content: "It's about 1.5-2 hours each way from Srinagar — doable as a day trip, though a 2-3 night stay suits winter skiers who want multiple days on the slopes." },
                ],
                faqs: [
                    { q: "Can Gulmarg be a day trip from Srinagar?", a: "Yes, about 1.5-2 hours each way, though skiers typically stay 2-3 nights to get more time on the slopes." },
                    { q: "Is Gulmarg good for skiing?", a: "Yes, it has genuine groomed runs and off-piste freeride terrain, a real ski destination in winter." },
                ],
            };

        case "pahalgam-travel-guide":
            return {
                title: "Pahalgam Travel Guide",
                description: "Pahalgam's apple orchards and riverside scenery, and how a day trip from Srinagar works.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/080cda65e7cae6a1ea86b37566991eff1c6cb185df5f9840ad7aa21ae0f3b08f.jpeg",
                sections: [
                    { title: "The Apple Orchards and Lidder Valley", content: "Pahalgam leans toward a greener, more pastoral landscape than Gulmarg's alpine terrain, with apple orchards and the Lidder River running through town.", tourCard: { slug: "best-selling-pahalgam-tour-via-apple-orchid-from", title: "Best-Selling Pahalgam Tour via Apple Orchid from Srinagar", description: "A day trip to Pahalgam via the apple orchards from Srinagar.", price: "From $44", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/080cda65e7cae6a1ea86b37566991eff1c6cb185df5f9840ad7aa21ae0f3b08f.jpeg" } },
                    { title: "Practical Tips", content: "About 2-2.5 hours from Srinagar each way, making it a fuller day trip than Gulmarg — plan for a longer day out if you're not staying overnight." },
                ],
                faqs: [
                    { q: "How far is Pahalgam from Srinagar?", a: "About 2-2.5 hours each way, making it a fuller day trip than Gulmarg." },
                    { q: "What makes Pahalgam different from Gulmarg?", a: "Pahalgam is greener and more pastoral, built around apple orchards and a river valley rather than Gulmarg's alpine, ski-resort terrain." },
                ],
            };

        case "sonamarg-travel-guide":
            return {
                title: "Sonamarg Travel Guide",
                description: "Sonamarg, the 'Meadow of Gold', and its alpine scenery on the road toward Ladakh.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c824662e1172587d4b6e9510eec3cd03578ca58465379086c94f62e0b8df2c85.jpg",
                sections: [
                    { title: "The Meadow of Gold", content: "Sonamarg sits closer to the road toward Ladakh than Gulmarg or Pahalgam, with higher-altitude alpine meadows and glacier views.", tourCard: { slug: "srinagar-sonamarg-day-tour-the-golden-meadow", title: "Srinagar: Sonamarg Day Tour, The Golden Meadow Adventure", description: "A day trip from Srinagar to Sonamarg.", price: "From $50", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c824662e1172587d4b6e9510eec3cd03578ca58465379086c94f62e0b8df2c85.jpg" } },
                    { title: "Practical Tips", content: "Sonamarg can be snowbound and inaccessible for parts of winter — check current road conditions if visiting outside the main summer season." },
                ],
                faqs: [
                    { q: "Is Sonamarg accessible year-round?", a: "No, it can be snowbound in winter — check current road conditions, especially outside summer." },
                ],
            };

        case "mughal-gardens-srinagar":
            return {
                title: "The Mughal Gardens of Srinagar",
                description: "Nishat, Shalimar and Chashme Shahi — the Mughal-era terraced gardens along Dal Lake's edge.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6e32cb3ee365e7e814e379491c2c996f60f14e77399f8ae14b96b2eb3157941.jpg",
                sections: [
                    { title: "Nishat, Shalimar and Chashme Shahi", content: "These terraced gardens, built during the Mughal era, sit along Dal Lake's edge and form the standard Srinagar sightseeing circuit alongside the lake itself.", tourCard: { slug: "srinagar-the-treasure-of-gardens", title: "Srinagar: The Treasure of Gardens", description: "A guided tour of Srinagar's Mughal gardens.", price: "From $69", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e6e32cb3ee365e7e814e379491c2c996f60f14e77399f8ae14b96b2eb3157941.jpg" } },
                    { title: "Practical Tips", content: "Spring is when these gardens are at their most photogenic, with flowers in bloom — visit earlier in the day to avoid the warmest, most crowded hours." },
                ],
                faqs: [
                    { q: "What are Srinagar's main Mughal gardens?", a: "Nishat, Shalimar and Chashme Shahi, all terraced gardens along Dal Lake's edge." },
                    { q: "When are the Mughal gardens best?", a: "Spring, when the flowers are in bloom." },
                ],
            };

        case "kashmir-houseboat-guide":
            return {
                title: "Kashmir Houseboat Guide: What a Stay on Dal Lake Is Really Like",
                description: "What to expect from a Dal Lake houseboat stay — booking, quality variation, and whether a multi-day package is worth it.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3235f8dc52ff92a603a97508eb5c94165f638f2286dceb77ad1fd5d00f7acd65.jpg",
                sections: [
                    { title: "What a Houseboat Stay Involves", content: "Traditional carved-wood houseboats are moored along Dal Lake, typically including meals and a shikara ride to and from shore, since the boats themselves aren't connected to a road.", tourCard: { slug: "kashmir-houseboat-tour-package-for-3-days", title: "Kashmir Houseboat Tour Package for 3 Days", description: "A 3-day houseboat package on Dal Lake.", price: "From $272", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3235f8dc52ff92a603a97508eb5c94165f638f2286dceb77ad1fd5d00f7acd65.jpg" } },
                    { title: "Practical Tips", content: "Quality varies significantly between individual boats — check recent reviews on cleanliness and maintenance rather than relying on photos alone, which can be outdated." },
                ],
                faqs: [
                    { q: "Are Kashmir houseboats worth the money?", a: "Yes for the distinctive experience, but quality varies a lot between boats — check recent reviews carefully before booking." },
                    { q: "Do houseboat stays include meals?", a: "Typically yes, along with a shikara ride to and from shore." },
                ],
            };

        case "srinagar-travel-guide":
            return {
                title: "Srinagar Travel Guide",
                description: "Srinagar's Dal Lake, Mughal gardens and Old City, and how to use it as a base for day trips across the Kashmir Valley.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/98dd5f36c3a29c9fd47b245e799fc32b32d4ca70a57cd574f8da2c476a497d8c.png",
                sections: [
                    { title: "Dal Lake, Gardens and the Old City", content: "Srinagar's core sightseeing covers the lake, the Mughal gardens along its banks, and the working Old City lanes around Jamia Masjid — a mix of the formal and the everyday.", tourCard: { slug: "all-inclusive-srinagar-full-half-day-tour-with", title: "All-Inclusive Srinagar Full & Half-Day Tour with Pickup", description: "A full or half-day Srinagar city tour with pickup.", price: "From $62", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/98dd5f36c3a29c9fd47b245e799fc32b32d4ca70a57cd574f8da2c476a497d8c.png" } },
                    { title: "Base for Day Trips", content: "Most visitors use Srinagar as their base, day-tripping out to Gulmarg, Pahalgam and Sonamarg rather than changing hotels for each." },
                ],
                faqs: [
                    { q: "Is Srinagar a good base for exploring Kashmir?", a: "Yes, most visitors base there and day-trip to Gulmarg, Pahalgam and Sonamarg rather than moving hotels each night." },
                ],
            };

        case "kashmir-food-guide":
            return {
                title: "Kashmir Food Guide",
                description: "Kahwa tea, Wazwan feasts and the dishes that define Kashmiri cuisine.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c15ecf4e32b82cce5a1ade29ca68ae3d29566789e18652dd082cf7cfad0289a.jpg",
                sections: [
                    { title: "Kahwa Tea and Old City Eating", content: "Kahwa, a green tea spiced with saffron, cardamom and almonds, is Kashmir's signature drink, often had while walking the Old City's lanes.", tourCard: { slug: "srinagar-old-city-heritage-walking-tour-with", title: "Srinagar Old City Heritage Walking Tour with Kahwa Tea", description: "An Old City walking tour including Kahwa tea.", price: "From $42", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c15ecf4e32b82cce5a1ade29ca68ae3d29566789e18652dd082cf7cfad0289a.jpg" } },
                    { title: "Wazwan", content: "A traditional multi-course Kashmiri feast, typically centered on meat dishes, usually experienced at a wedding or a dedicated restaurant rather than as everyday food." },
                ],
                faqs: [
                    { q: "What should I try in Kashmiri food?", a: "Kahwa tea is the easiest everyday introduction; a Wazwan feast is the fuller, more involved experience." },
                ],
            };

        case "kashmir-in-winter":
            return {
                title: "Kashmir in Winter",
                description: "What visiting Kashmir in winter actually involves — snow, cold, and Gulmarg's real ski season.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbcca3b2f2c9ff65b187a901c60b64ce56477e6b4a7f44da073c99d027f7ca28.png",
                sections: [
                    { title: "What to Expect", content: "Winter brings genuine cold and snowfall across the valley, with Gulmarg specifically transforming into a proper ski resort rather than just a scenic meadow.", tourCard: { slug: "gulmarg-guided-freeride-skiing-with-gulmarg", title: "Gulmarg: Guided Freeride Skiing with Gulmarg Snowkings", description: "Guided freeride skiing at Gulmarg in winter.", price: "From $137", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbcca3b2f2c9ff65b187a901c60b64ce56477e6b4a7f44da073c99d027f7ca28.png" } },
                    { title: "Practical Tips", content: "Some roads, including toward Sonamarg, can be affected by snow — check conditions in advance, and pack genuine cold-weather layers rather than relying on mild-climate assumptions." },
                ],
                faqs: [
                    { q: "Is winter a good time to visit Kashmir?", a: "Yes if snow and skiing are what you want — Gulmarg becomes a real ski destination, though some roads can be affected by snowfall." },
                ],
            };

        case "kashmir-in-summer":
            return {
                title: "Kashmir in Summer",
                description: "Why summer is Kashmir's peak season, and what to expect from the crowds and weather.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a8875dadbd794addd8bcfa9320bc62ffd8a9cd9d0e77a67bb10f6967bc77cf7.jpg",
                sections: [
                    { title: "Why Summer Is Peak Season", content: "Kashmir's cool hill-station climate is a deliberate escape from the heat across the rest of India, making summer the busiest season at Dal Lake and Gulmarg alike.", tourCard: { slug: "srinagar-gulmarg-day-tour-explore-the-meadow-of", title: "Srinagar: Gulmarg Day Tour, Explore the Meadow of Flowers", description: "A summer day trip from Srinagar to Gulmarg's meadows.", price: "From $59", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a8875dadbd794addd8bcfa9320bc62ffd8a9cd9d0e77a67bb10f6967bc77cf7.jpg" } },
                    { title: "Practical Tips", content: "Book houseboats and day-trip tours ahead in summer — this is when demand and prices both peak across the valley." },
                ],
                faqs: [
                    { q: "Why is Kashmir busy in summer?", a: "Its cool climate is a popular escape from the heat across the rest of India, making summer the peak season for both crowds and prices." },
                ],
            };

        case "kashmir-budget-guide":
            return {
                title: "Kashmir Budget Guide",
                description: "What a Kashmir trip actually costs, from day tours to multi-day houseboat and valley packages.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c824662e1172587d4b6e9510eec3cd03578ca58465379086c94f62e0b8df2c85.jpg",
                sections: [
                    { title: "Day Trips", content: "Single-day tours to Gulmarg, Pahalgam or Sonamarg from Srinagar typically run $40-60 per person for a shared or small-group day, covering transport and a guide.", tourCard: { slug: "srinagar-doodhpathri-day-trip-with-transfers", title: "Srinagar: Doodhpathri Day Trip with Transfers", description: "A budget day trip from Srinagar with transfers included.", price: "From $40", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a8875dadbd794addd8bcfa9320bc62ffd8a9cd9d0e77a67bb10f6967bc77cf7.jpg" } },
                    { title: "Multi-Day Packages", content: "Full valley packages covering Srinagar, Gulmarg and Pahalgam over 5-7 days, including a houseboat stay, generally run from a few hundred dollars up depending on season and inclusions — summer and winter-ski periods price higher than shoulder seasons." },
                    { title: "Practical Tips", content: "Shoulder seasons (spring and autumn) tend to offer the best value, since summer and peak winter-ski periods see both tours and houseboats price up with demand." },
                ],
                faqs: [
                    { q: "How much does a Kashmir day trip cost?", a: "Roughly $40-60 per person for a shared day trip to Gulmarg, Pahalgam or Sonamarg from Srinagar." },
                    { q: "When is Kashmir cheapest to visit?", a: "Shoulder seasons, spring and autumn, tend to offer better value than the summer and peak winter-ski crowds." },
                ],
            };

        default:
            return null;
    }
}
