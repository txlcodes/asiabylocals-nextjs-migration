// Ubud authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getUbudInfoContent() -> getCityInfoContent().
//
// Prices are given as ranges in rupiah with a rough dollar figure, because
// entry fees here change every year or two and a precise number dates the
// page. Tour cards are added once the Bali import has landed and the slugs
// exist; a card pointing at a slug that 404s is worse than no card.
import type { CityInfoData } from './cityInfoContent';

const IMG = '/bali-hero.webp';

export function getUbudInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "mount-batur-sunrise-guide":
      return {
        title: "Mount Batur Sunrise Trek from Ubud: Start Time, the Cold, and Whether to Hike or Jeep",
        seoTitle: "Mount Batur Sunrise Trek Guide 2026",
        description: "What a 2am pickup actually looks like, how hard the climb is, why the summit is cold in the tropics, and the jeep option for anyone who does not want to walk.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-hike-jeep-tour-all-inclusive/img0/1600.webp",
        fastFacts: [
          { icon: "mountain", label: "Height", value: "1,717 m; the trail climbs about 700 m" },
          { icon: "clock", label: "Pickup from Ubud", value: "Around 2:00 to 2:30am" },
          { icon: "footprints", label: "Walking time", value: "About 2 hours up, 1.5 down" },
          { icon: "thermometer", label: "Summit temperature", value: "Often 8 to 12°C before sunrise" },
          { icon: "shield", label: "Guides", value: "Local rule: guided only, through the village association" },
        ],
        sections: [
          {
            title: "Mount Batur Sunrise Trek from Ubud: Start Time, the Cold, and Whether to Hike or Jeep",
            icon: "mountain",
            content: "Batur is an active volcano inside a much older caldera, and the sunrise trek up it is the most booked thing in the Ubud area. It works because the summit faces east across Lake Batur to Mount Agung, and on a clear morning the sun comes up behind Agung's cone with Lombok's Rinjani showing further out.\n\nThe day starts at about two in the morning. Ubud to the trailhead at Toya Bungkah is roughly an hour and a quarter, the walk begins around 3:30 or 4:00 by torchlight, and you want to be on top by about 5:30 for a sunrise that lands between 6:00 and 6:30 depending on the month.\n\nThe climb itself is not technical. It is a steady uphill on volcanic sand and loose rock, and the final stretch to the rim is steep enough that most people use their hands in places. Reasonably fit adults do it without trouble; the ones who struggle are those who did not sleep and those who came in sandals.",
            tourCard: {
              slug: "mount-batur-sunrise-hike-jeep-tour-all-inclusive",
              title: "Mount Batur Sunrise Hike/Jeep Tour All Inclusive",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 44.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-hike-jeep-tour-all-inclusive/img0/1600.webp",
            },
          },
          {
            title: "Why you need a guide, and what that buys",
            icon: "shield",
            content: "Trekking on Batur is organised by the local village association, and in practice you cannot walk up alone: the trailhead is staffed and independent hikers are turned back or made to hire a guide on the spot. Every tour, ours included, works through this system.\n\nWhat you get for it is a guide who knows the route in the dark, carries a torch for you if yours dies, sets a pace that gets you up in time, and cooks eggs in the steam vents near the top, which is a small thing that everyone remembers.\n\nThe trek fee is bundled into the tour price. If someone quotes you a price that seems to exclude it, ask, because a surprise fee at 4am in the dark is not a negotiation you want to have.",
            tourCard: {
              slug: "sunrise-mount-batur-guided-hike-with-breakfast",
              title: "Sunrise Mount Batur Guided Hike with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sunrise-mount-batur-guided-hike-with-breakfast/img0/1600.webp",
            },
          },
          {
            title: "The cold, and what to bring",
            icon: "thermometer",
            content: "This is the part people get wrong. Ubud at midnight is warm. The summit of Batur before sunrise is regularly 8 to 12°C with wind, and you will stand still in it for forty minutes waiting for the light. Nearly everyone who is miserable up there is miserable because they dressed for Bali.\n\nBring a proper warm layer and a windproof one, long trousers, closed shoes with grip, and a headtorch rather than a phone torch. Guides carry spare jackets, but not enough for a full group.\n\nAfter sunrise the temperature climbs quickly and the walk down is in full sun by 7:30, so the layers come off again. A litre of water is the right amount; there is nowhere to refill.",
            tourCard: {
              slug: "mount-batur-sunrise-guided-hike-and-natural-hot-spring",
              title: "Mount Batur Sunrise Guided Hike and Natural Hot Spring",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 47.00",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-guided-hike-and-natural-hot-spring/img0/1600.webp",
            },
          },
          {
            title: "The jeep alternative",
            icon: "car",
            content: "Four-wheel-drive jeeps now run to a viewpoint on the flank of the volcano for the same sunrise, and this is the honest answer for anyone with knees, small children, or no interest in a two-hour climb in the dark. The view is lower than the summit but faces the same way and the black lava field is more dramatic from the jeep track than from the rim.\n\nPickup is later, usually around 3:00 to 3:30am, and the whole outing is shorter.\n\nBoth versions typically finish at the hot springs on the lake shore, which is where the morning becomes worth it for the people who did not enjoy the cold.",
            tourCard: {
              slug: "mount-batur-sunrise-trek-with-guide-and-breakfast",
              title: "Mount Batur Sunrise Trek With Guide and Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-trek-with-guide-and-breakfast/img0/1600.webp",
            },
          },
          {
            title: "Season and cloud",
            icon: "cloud",
            content: "The dry months from April to October give the highest chance of a clear sunrise. In the wet season, November to March, the summit is often inside cloud at dawn and the view is a white wall. Tours run anyway; the operator cannot control the weather and does not refund for it.\n\nIf you have flexible dates in the wet season, book the trek for the first clear-looking morning rather than a fixed day, and keep the jeep option as a fallback.",
            tourCard: {
              slug: "mount-batur-shared-jeep-sunrise-and-hot-spring-tour",
              title: "Mount Batur Shared Jeep Sunrise and Hot Spring Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 27.00",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-shared-jeep-sunrise-and-hot-spring-tour/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How hard is the Mount Batur trek?", a: "It is a steady two-hour uphill on loose volcanic ground with a steep final section. Anyone of average fitness can do it; the people who find it hard are usually those who came without sleep or in the wrong shoes." },
          { q: "What time does a Mount Batur trek start from Ubud?", a: "Pickup is around 2:00 to 2:30am. The trailhead is about an hour and a quarter away and the walk begins around 3:30 to 4:00 so you reach the summit before a 6:00 to 6:30 sunrise." },
          { q: "Can I climb Mount Batur without a guide?", a: "In practice no. The trail is managed by the local village association and independent hikers are stopped at the trailhead. Every tour, including ours, works through that system and the fee is included." },
          { q: "How cold is the summit of Mount Batur?", a: "Regularly 8 to 12°C before sunrise, with wind. Bring a warm layer and a windproof one; dressing for Bali's lowland heat is the single most common mistake." },
          { q: "Is there an easier way to see the Batur sunrise?", a: "Yes. Jeep tours drive to a viewpoint on the volcano's flank for the same sunrise with no hiking. Pickup is later and the outing is shorter." },
        ],
      };

    case "tegallalang-rice-terrace-guide":
      return {
        title: "Tegallalang Rice Terraces: When to Go, the Swings, and Why Jatiluwih Might Be Better",
        seoTitle: "Tegallalang Rice Terraces Guide 2026",
        description: "The hour that makes Tegallalang worth it, how the swings and 'donation' stops work, and the larger, quieter terraces an hour further out.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tegalalang-rice-terrace-instagram-tour-and-jungle-swing-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "From central Ubud", value: "About 20 to 30 minutes north" },
          { icon: "clock", label: "Best hours", value: "Before 8:30am, or after 4pm" },
          { icon: "ticket", label: "Entry", value: "A small fee at the main viewpoint plus optional 'donation' gates on the walk" },
          { icon: "sun", label: "Greenest", value: "Roughly February to April and September to October, between plantings" },
          { icon: "camera", label: "Swings", value: "Privately run, priced separately, wait times on busy days" },
        ],
        sections: [
          {
            title: "Tegallalang Rice Terraces: When to Go, the Swings, and Why Jatiluwih Might Be Better",
            icon: "map",
            content: "Tegallalang is the terraced valley twenty minutes north of Ubud that appears on every Bali poster. The terraces are real, working paddies fed by the subak irrigation system, and the view from the road above them is genuinely beautiful in the right light.\n\nWhat the posters leave out is that the road above them is also lined, end to end, with cafes, swings, photo platforms and souvenir stalls, and that by mid-morning the viewpoint is shoulder to shoulder.\n\nThe terraces have not changed. The way to see them well has: go early, walk down into them, and treat the road as somewhere to leave rather than somewhere to stay.",
            tourCard: {
              slug: "tegalalang-rice-terrace-instagram-tour-and-jungle-swing-in-ubud",
              title: "Tegalalang Rice Terrace Instagram Tour and Jungle Swing in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tegalalang-rice-terrace-instagram-tour-and-jungle-swing-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The hour that matters",
            icon: "clock",
            content: "Before about 8:30am the valley belongs to farmers and a handful of visitors. The light comes in low from the east, the paddies are wet from the night and mirror the sky, and it is cool enough to walk the paths down through the terraces and up the far side without misery.\n\nBy ten the tour coaches from the south of the island have arrived and the swings are running. By noon the light is flat and hard.\n\nLate afternoon, after four, is the second good window. Fewer people, warm light from the west, and the cafes are useful for once.",
            tourCard: {
              slug: "jatiluwih-rice-terraces-1-hour-electric-bike-tour",
              title: "Jatiluwih Rice Terraces 1-Hour Electric Bike Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.00",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/jatiluwih-rice-terraces-1-hour-electric-bike-tour/img0/1600.webp",
            },
          },
          {
            title: "Swings, gates and 'donations'",
            icon: "ticket",
            content: "There is a modest entry fee at the main viewpoint, collected in a booth. Expect it to be tens of thousands of rupiah, not hundreds; the exact figure changes.\n\nAs you walk the paths through the terraces you will meet informal gates where a farmer asks for a donation to cross their land. These are not scams exactly, but they are not official either. A few thousand rupiah at each is normal and expected; you are walking through someone's field.\n\nThe swings are separate businesses. Each has its own price, usually with a photo package, and on a busy day you will queue. If a swing photo is the point of the trip, come at opening time. If it is not, the terraces are better without one.",
            tourCard: {
              slug: "day-trip-to-rice-terraces-swings-waterfall-and-temples-in-ubud",
              title: "Day Trip to Rice Terraces, Swings, Waterfall and Temples in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 95.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/day-trip-to-rice-terraces-swings-waterfall-and-temples-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Jatiluwih: the bigger, quieter alternative",
            icon: "mountain",
            content: "Jatiluwih, about an hour and a half west of Ubud on the slopes of Mount Batukaru, is the terrace landscape that Tegallalang is a postcard of. It is many times larger, UNESCO-listed as part of Bali's subak system, and it has walking routes of one to three hours through the paddies with almost no one on them.\n\nThere is a proper entry fee, and it is worth every rupiah. It does mean a half day rather than an hour, so it suits a north-Ubud loop with a temple and a waterfall rather than a quick stop.\n\nIf you only have time for one, and you want to walk rather than photograph, go to Jatiluwih.",
            tourCard: {
              slug: "bali-pulina-tour-with-swing-and-tegalalang-rice-terrace",
              title: "Bali Pulina Tour with Swing and Tegalalang Rice Terrace",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 12.00",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-pulina-tour-with-swing-and-tegalalang-rice-terrace/img0/1600.webp",
            },
          },
          {
            title: "When the terraces are green",
            icon: "sun",
            content: "Rice is planted and harvested on a rolling schedule, so at any moment some terraces are brilliant green, some are golden and ready to cut, and some are brown mud between crops. There is no month when the whole valley is uniformly green, whatever the photographs imply.\n\nThe best odds for lush terraces are a month or two after planting, which in Tegallalang tends to fall around February to April and again around September to October. Straight after harvest, expect stubble and water.",
            tourCard: {
              slug: "tirta-empul-kanto-lampo-waterfall-rice-terraces-and-swing-in-ubud",
              title: "Tirta Empul, Kanto Lampo Waterfall, Rice Terraces and Swing in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 92.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-kanto-lampo-waterfall-rice-terraces-and-swing-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What time should I visit Tegallalang?", a: "Before 8:30am or after 4pm. From about ten until three the viewpoint road is crowded and the light is flat." },
          { q: "How much does Tegallalang cost?", a: "A small entry fee at the main viewpoint, in the tens of thousands of rupiah, plus small informal donations at gates on the walking paths through the terraces. Swings are priced separately by their owners." },
          { q: "Is Jatiluwih better than Tegallalang?", a: "For walking and for scale, yes. Jatiluwih is far larger, UNESCO-listed and almost empty, but it is about an hour and a half from Ubud, so it is a half day rather than a quick stop." },
          { q: "When are the rice terraces green?", a: "A month or two after planting, which tends to be around February to April and September to October. Terraces are on a rolling cycle, so some sections are always brown or golden." },
        ],
      };

    case "ubud-monkey-forest-guide":
      return {
        title: "Ubud Monkey Forest: How to Visit Without Losing Your Sunglasses",
        seoTitle: "Ubud Monkey Forest Guide 2026",
        description: "What the sanctuary actually is, the rules that keep you out of trouble with the macaques, and the best hour to walk it.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sacred-monkey-forest-sanctuary-ticket-and-guided-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "Where", value: "Padangtegal, at the south end of central Ubud" },
          { icon: "clock", label: "Hours", value: "Morning to late afternoon, daily" },
          { icon: "users", label: "Residents", value: "Over a thousand long-tailed macaques in several troops" },
          { icon: "landmark", label: "Temples", value: "Three, dating to the 14th century; the site is sacred ground" },
          { icon: "alert", label: "Rule one", value: "No food, no loose items, no eye contact with a monkey that is staring at you" },
        ],
        sections: [
          {
            title: "Ubud Monkey Forest: How to Visit Without Losing Your Sunglasses",
            icon: "users",
            content: "The Sacred Monkey Forest Sanctuary is a patch of old forest at the bottom of Monkey Forest Road, owned and run by the village of Padangtegal, with three Hindu temples inside it and something over a thousand long-tailed macaques who have never known a day without tourists.\n\nIt is genuinely worth an hour. The forest is tall and cool, the paths are paved and shaded, the temple of the dead at the far end is atmospheric, and watching a troop of macaques go about its politics at close range is better than any zoo.\n\nIt is also where more visitors lose a pair of sunglasses, a water bottle or a phone than anywhere else in Bali, and every one of those losses was avoidable.",
            tourCard: {
              slug: "sacred-monkey-forest-sanctuary-ticket-and-guided-tour-in-ubud",
              title: "Sacred Monkey Forest Sanctuary Ticket and Guided Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 23.00",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sacred-monkey-forest-sanctuary-ticket-and-guided-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The rules, and why they exist",
            icon: "alert",
            content: "Do not bring food in. Not in your bag, not in your pocket. The monkeys know what a rustling packet sounds like and they will go into a bag to get it.\n\nDo not carry anything loose: sunglasses on your head, a hat, a water bottle in a side pocket, a phone held out for a photo at arm's length. Put things away and zip the bag.\n\nDo not touch, feed or stare down a monkey. A macaque that stares at you with its mouth slightly open is threatening you; look away and walk on. Do not run, scream or grab at one that has taken something; the staff have bananas and will trade for it.\n\nMost of all, do not put a child on your shoulders with a monkey nearby. The monkey sees a platform.",
            tourCard: {
              slug: "zip-line-sacred-temple-and-monkey-forest-tour-in-ubud",
              title: "Zip-Line, Sacred Temple, and Monkey Forest Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 72.50",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/zip-line-sacred-temple-and-monkey-forest-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "When to go",
            icon: "clock",
            content: "Opening time is the best hour. The troops are active and feeding, the light through the canopy is good, and the paths are empty. Mid-morning to mid-afternoon is busy and the monkeys are lethargic in the heat; late afternoon picks up again.\n\nAllow about an hour to walk the loop and see the three temples. Longer if you like watching primates, which most people find they do once they are in front of them.",
            tourCard: {
              slug: "bali-adventure-atv-ride-and-sacred-monkey-forest-experience-ubud",
              title: "Bali Adventure: ATV Ride and Sacred Monkey Forest Experience (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 126.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-adventure-atv-ride-and-sacred-monkey-forest-experience-ubud/img0/1600.webp",
            },
          },
          {
            title: "The temples",
            icon: "landmark",
            content: "The forest is a temple complex before it is a monkey attraction. Pura Dalem Agung Padangtegal, the temple of the dead, is the main one and the most striking, with Rangda figures guarding it. There is a bathing temple by the stream and a cremation temple.\n\nThey are working temples and locals come to pray. Sarongs are available if you want to enter the inner courtyards, though most visitors see them from the paths. Dress with the shoulders and knees covered as a courtesy, as you would at any temple on the island.",
            tourCard: {
              slug: "bali-s-hidden-gems-temples-waterfalls-and-monkey-trails-ubud",
              title: "Bali\u2019s Hidden Gems: Temples, Waterfalls and Monkey Trails (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 141.50",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bali-s-hidden-gems-temples-waterfalls-and-monkey-trails-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is the Ubud Monkey Forest safe?", a: "Yes if you follow the rules: no food, nothing loose, no touching or staring. Bites happen almost only when someone feeds a monkey or grabs at one that has taken something." },
          { q: "How long do you need at the Monkey Forest?", a: "About an hour for the loop and the three temples. Opening time is the best hour for both the light and the monkeys' activity." },
          { q: "Can you bring a bag into the Monkey Forest?", a: "Yes, but zipped and with nothing dangling. No food inside it at all. Sunglasses go in the bag, not on your head." },
          { q: "Do you need a sarong for the Monkey Forest?", a: "Not for the paths. Sarongs are available if you want to enter the temple courtyards. Covering shoulders and knees is the polite default." },
        ],
      };

    case "ubud-waterfalls-guide":
      return {
        title: "Waterfalls Around Ubud: Which Ones, In What Order, and the Cave That Only Works Before 11",
        seoTitle: "Ubud Waterfalls Guide 2026",
        description: "Tegenungan, Tibumana, Kanto Lampo, Tukad Cepung and Sekumpul compared honestly, with the timing that makes each one worth the drive.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tibumana-tukad-cepung-kanto-lampo-and-tegenungan-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "Closest", value: "Tegenungan, about 30 minutes; the busiest by far" },
          { icon: "camera", label: "Best light", value: "Tukad Cepung's cave beams, roughly 9 to 11am" },
          { icon: "mountain", label: "Biggest", value: "Sekumpul, 2 hours north, a real hike" },
          { icon: "ticket", label: "Entry", value: "Each has its own fee, tens of thousands of rupiah; sarong sometimes required" },
          { icon: "umbrella", label: "Wet season", value: "Fuller falls, browner water, slippery steps" },
        ],
        sections: [
          {
            title: "Waterfalls Around Ubud: Which Ones, In What Order, and the Cave That Only Works Before 11",
            icon: "map",
            content: "Ubud sits on a plateau cut by river gorges, so there are waterfalls in every direction and a whole industry of tours that string three or four of them together. They are not interchangeable. Some are ten minutes from the car, some are a hard hike; some are at their best in a specific hour and disappointing outside it.\n\nThis is a comparison of the ones people actually ask about, ordered by how a day is best built around them.",
            tourCard: {
              slug: "tibumana-tukad-cepung-kanto-lampo-and-tegenungan-tour-in-ubud",
              title: "Tibumana, Tukad Cepung, Kanto Lampo, and Tegenungan Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tibumana-tukad-cepung-kanto-lampo-and-tegenungan-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Tegenungan: closest, busiest, and fine",
            icon: "map",
            content: "Tegenungan is about half an hour south of Ubud, a wide, powerful single drop into a pool you can swim in, reached by a paved staircase past cafes and a swing. Because it is the nearest, it is on every itinerary and by ten in the morning it is heaving.\n\nIt is a perfectly good waterfall. It is not a peaceful one. Go at opening time or make it the last stop of the day, and expect to share the pool.",
            tourCard: {
              slug: "besakih-temple-tukad-cepung-waterfall-penglipuran-in-ubud",
              title: "Besakih temple, Tukad Cepung waterfall, Penglipuran in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.00",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/besakih-temple-tukad-cepung-waterfall-penglipuran-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Tibumana and Kanto Lampo: the pair worth the morning",
            icon: "camera",
            content: "Tibumana, east of Ubud towards Bangli, is the pretty one: a single slender fall into a green pool inside a fern-lined bowl, a ten-minute walk from the car. Early it is close to perfect.\n\nKanto Lampo, nearby, is a cascade over stepped black rock that you wade into and climb; it is the one in the photos of people standing in the water with the fall behind them. There is usually a queue for that exact spot on a busy day and a local photographer who has the angle.\n\nThe two are close enough to do together in a morning and they suit different moods, so most tours pair them.",
            tourCard: {
              slug: "tirta-empul-kanto-lampo-waterfall-rice-terraces-and-swing-in-ubud",
              title: "Tirta Empul, Kanto Lampo Waterfall, Rice Terraces and Swing in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 92.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-kanto-lampo-waterfall-rice-terraces-and-swing-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Tukad Cepung: the cave, and the hour it works",
            icon: "sun",
            content: "Tukad Cepung is a waterfall inside a slot canyon, reached by wading up a shallow river through a narrow cave. When the sun is high enough to come down through the opening, beams of light cut through the mist and it looks like nothing else on the island.\n\nThat window is roughly nine to eleven in the morning and it depends on the sun being out. Before nine the light has not reached the canyon; after eleven it has passed over; on a cloudy day there are no beams at all. It is the most timing-sensitive stop in Bali, and a tour that puts it in the afternoon has not been there.",
            tourCard: {
              slug: "tirta-empul-kanto-lampo-waterfall-rice-terraces-and-swings-in-ubud",
              title: "Tirta Empul, Kanto Lampo Waterfall, Rice Terraces and Swings in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 95.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-kanto-lampo-waterfall-rice-terraces-and-swings-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Sekumpul: the big one, and a real hike",
            icon: "mountain",
            content: "Sekumpul is in the north, around two hours from Ubud, and it is a different scale: a set of tall falls pouring out of jungle cliffs into a gorge. Reaching the base is a proper walk, with several hundred steps down and back up and a river crossing, and local guides accompany you.\n\nIt is the best waterfall on the island and it costs a full day. Combine it with the northern temples or Munduk rather than trying to squeeze it into an Ubud loop, and do not attempt it in flip-flops.",
            tourCard: {
              slug: "mount-batur-sunrise-hike-and-tibumana-waterfall",
              title: "Mount Batur Sunrise Hike and Tibumana Waterfall",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-hike-and-tibumana-waterfall/img0/1600.webp",
            },
          },
          {
            title: "Wet season and safety",
            icon: "umbrella",
            content: "From November to March the falls are fuller and louder, which is good, and the water is browner and the steps are slick, which is not. After heavy rain some of the canyon falls, Tukad Cepung especially, are closed for flash-flood risk. A local operator will know that morning; a printed itinerary will not.\n\nWear shoes that can get wet and that grip. Every serious injury at these places is a slip on wet rock, not the water itself.",
            tourCard: {
              slug: "rice-terrace-waterfall-and-elephant-cave-in-ubud",
              title: "Rice Terrace, Waterfall, and Elephant Cave in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/rice-terrace-waterfall-and-elephant-cave-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which waterfall near Ubud is best?", a: "For a quick stop, Tibumana. For the famous photo, Kanto Lampo. For light beams, Tukad Cepung between 9 and 11am. For sheer scale, Sekumpul, which is a two-hour drive and a real hike." },
          { q: "What time should I visit Tukad Cepung?", a: "Between about nine and eleven in the morning on a sunny day. That is the only window when sunlight reaches the canyon floor and creates the light beams." },
          { q: "Can you swim at Ubud's waterfalls?", a: "At most of them, yes. Tegenungan and Tibumana have swimmable pools. After heavy rain some canyon falls are closed for flash-flood risk." },
          { q: "How many waterfalls can you see in a day from Ubud?", a: "Three comfortably, four if they are close together. Tibumana, Kanto Lampo and Tukad Cepung form a natural morning loop east of Ubud." },
        ],
      };

    case "best-time-to-visit-ubud":
      return {
        title: "Best Time to Visit Ubud: Dry Season, Wet Season, and the One Day the Whole Island Stops",
        seoTitle: "Best Time to Visit Ubud 2026",
        description: "Month by month honestly, including Nyepi, the Balinese day of silence, when the airport closes and nobody may leave the house.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/temple-visit-with-palm-reader-and-fortune-telling-option-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Dry season", value: "April to October" },
          { icon: "umbrella", label: "Wet season", value: "November to March; afternoon storms, not all-day rain" },
          { icon: "users", label: "Peak crowds", value: "July, August, and the Christmas fortnight" },
          { icon: "moon", label: "Nyepi", value: "One day in March: airport shut, streets empty, lights off" },
          { icon: "thermometer", label: "Ubud vs coast", value: "A few degrees cooler and noticeably wetter than the beaches" },
        ],
        sections: [
          {
            title: "Best Time to Visit Ubud: Dry Season, Wet Season, and the One Day the Whole Island Stops",
            icon: "sun",
            content: "Ubud is inland and a few hundred metres up, which makes it cooler than the coast and gives it more rain. The year splits into a dry season from roughly April to October and a wet season from November to March, and neither is a bad time to come. They are different.\n\nWhat matters more than the month is one specific day that generic guides routinely forget to mention, and it can wreck a short trip.",
            tourCard: {
              slug: "temple-visit-with-palm-reader-and-fortune-telling-option-in-ubud",
              title: "Temple Visit with Palm Reader and Fortune Telling Option in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.00",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/temple-visit-with-palm-reader-and-fortune-telling-option-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Nyepi: the day of silence",
            icon: "moon",
            content: "Nyepi is the Balinese New Year, and it falls on the day after the new moon in March, so the date moves every year. For twenty-four hours from six in the morning, the entire island observes silence. No one may leave their home or hotel. No lights, no traffic, no work, no noise. The airport closes to all flights. Streets are patrolled by village wardens, and tourists are confined to their hotel grounds along with everyone else.\n\nIt is a remarkable thing to be on the island for, and the night before, when giant ogoh-ogoh demon effigies are paraded and burned, is one of the best spectacles in Bali. But if your flight lands on Nyepi, it will not land. If you planned a Batur trek that morning, it is cancelled. Check the date before you book anything in March.",
            tourCard: {
              slug: "ujung-water-palace-candidasa-and-sidemen-village-tour",
              title: "Ujung Water Palace, Candidasa and Sidemen Village Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.00",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ujung-water-palace-candidasa-and-sidemen-village-tour/img0/1600.webp",
            },
          },
          {
            title: "Dry season, April to October",
            icon: "sun",
            content: "Reliable sun, lower humidity, and the best odds for a clear Batur sunrise and light beams at Tukad Cepung. May, June and September are the sweet spot: dry, but before or after the July and August peak when prices rise and the popular sites are crowded from mid-morning.\n\nAugust is also the month of the Galungan and Kuningan cycle in some years, when villages decorate with penjor bamboo poles and temple ceremonies are constant; the dates follow a 210-day calendar so they move.",
            tourCard: {
              slug: "exclusive-private-snorkeling-at-4-best-spots-in-ubud",
              title: "Exclusive Private Snorkeling at 4 Best Spots in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 122.50",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/exclusive-private-snorkeling-at-4-best-spots-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Wet season, November to March",
            icon: "umbrella",
            content: "Wet season in Ubud usually means a bright morning, cloud building through midday, and a heavy storm in the afternoon that clears by evening. Days of unbroken rain do happen, mostly in January and February, but they are not the norm.\n\nEverything is greener, the waterfalls are full, the terraces are at their most lush after planting, and outside the Christmas fortnight prices and crowds are at their lowest. Plan sunrise and outdoor things for the morning and keep afternoons flexible. Batur is a gamble on cloud.",
            tourCard: {
              slug: "sidemen-tour-waterfall-with-optional-koli-koli-bali-visit-ubud",
              title: "Sidemen Tour Waterfall with Optional Koli Koli Bali Visit (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 52.50",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sidemen-tour-waterfall-with-optional-koli-koli-bali-visit-ubud/img0/1600.webp",
            },
          },
          {
            title: "Ubud versus the beaches",
            icon: "thermometer",
            content: "If you are splitting time between Ubud and the south coast, note that Ubud is measurably wetter. A wet-season afternoon that is a passing shower in Uluwatu can be an hour of solid rain in Ubud. In the dry season the difference is small.\n\nTemperatures in Ubud sit a few degrees below the coast, which after a week of beach heat is a relief rather than a drawback.",
            tourCard: {
              slug: "sidemen-valley-open-top-jeep-tour-with-waterfall-visit",
              title: "Sidemen Valley Open-Top Jeep Tour with Waterfall Visit",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 92.00",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sidemen-valley-open-top-jeep-tour-with-waterfall-visit/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best month to visit Ubud?", a: "May, June or September: dry, clear mornings for Batur and the waterfalls, and lighter crowds than July and August." },
          { q: "What is Nyepi and does it affect tourists?", a: "The Balinese day of silence, one day in March on a moving date. The airport closes, no one may leave their hotel, and lights and noise are forbidden for 24 hours. It affects everyone on the island, tourists included. Check the date before booking a March trip." },
          { q: "Is Ubud worth visiting in the rainy season?", a: "Yes. Rain usually comes as an afternoon storm, mornings are often bright, the landscape is at its greenest and prices are lower. Sunrise activities are a gamble on cloud." },
          { q: "Is Ubud cooler than the beach areas?", a: "By a few degrees, yes, because it is inland and higher. It is also wetter, especially in the wet season." },
        ],
      };

    case "ubud-temples-guide":
      return {
        title: "Temples Around Ubud: Tirta Empul's Purification Ritual, Goa Gajah, Gunung Kawi and How to Behave",
        seoTitle: "Ubud Temples Guide 2026",
        description: "What the water purification at Tirta Empul involves and who it is for, the two older sites nearby, and the sarong and ceremony etiquette that keeps you welcome.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "droplet", label: "Tirta Empul", value: "Holy spring; the purification is a real ritual, not a photo stop" },
          { icon: "landmark", label: "Goa Gajah", value: "The Elephant Cave, 11th century, close to Ubud" },
          { icon: "footprints", label: "Gunung Kawi", value: "Rock-cut shrines at the bottom of about 300 steps" },
          { icon: "shirt", label: "Dress", value: "Sarong and sash at every temple; provided at the gate" },
          { icon: "alert", label: "Menstruation", value: "Women who are menstruating are asked not to enter temples; this is observed" },
        ],
        sections: [
          {
            title: "Temples Around Ubud: Tirta Empul's Purification Ritual, Goa Gajah, Gunung Kawi and How to Behave",
            icon: "landmark",
            content: "The temples north-east of Ubud along the Pakerisan river are among the oldest on the island and they sit close enough together to see in a morning. They are also working places of worship where ceremonies happen around visitors, not for them, and the difference between a good visit and an awkward one is mostly about knowing the etiquette.",
            tourCard: {
              slug: "half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud",
              title: "Half-Day Tirta Empul Purification and Gunung Kawi Temple in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 69.50",
              duration: "6.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Tirta Empul and the purification",
            icon: "droplet",
            content: "Tirta Empul is built around a spring that Balinese Hindus have considered holy for a thousand years. The central courtyard has two long pools fed by a row of carved spouts, and the melukat purification ritual involves entering the water in a sarong, praying, and bowing under each spout in turn, except the ones reserved for the dead.\n\nVisitors are permitted to take part and many do. If you do, do it properly: use the changing rooms, wear the green sarong provided for the water, follow the sequence from left to right, skip the spouts a local guide tells you to skip, and do not treat it as a swim. If you would rather watch, the walkways around the pools are fine for that.\n\nThe temple is busiest between ten and two. Early morning is calm and the light on the water is good.",
            tourCard: {
              slug: "tirta-empul-temple-tour-and-sacred-purification-ritual-in-ubud",
              title: "Tirta Empul Temple Tour and Sacred Purification Ritual in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-temple-tour-and-sacred-purification-ritual-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Goa Gajah and Gunung Kawi",
            icon: "footprints",
            content: "Goa Gajah, the Elephant Cave, is a few minutes from central Ubud: a small meditation cave with a carved demon mouth as its entrance, bathing pools excavated in the 1950s, and a shaded ravine behind. It is quick, and better than its size suggests.\n\nGunung Kawi is further up the same river: ten shrines carved into the cliff face on both sides of a gorge in the 11th century, reached by a long staircase down through rice terraces. It is the most impressive of the three and the least visited, because of the steps. Budget the climb back up in the heat.",
            tourCard: {
              slug: "east-bali-lempuyang-temple-tirta-gangga-and-taman-ujung-ubud",
              title: "East Bali: Lempuyang Temple, Tirta Gangga, and Taman Ujung (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 80.50",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/east-bali-lempuyang-temple-tirta-gangga-and-taman-ujung-ubud/img0/1600.webp",
            },
          },
          {
            title: "Etiquette that actually matters",
            icon: "shirt",
            content: "Wear a sarong and sash at every temple; they are provided at the entrance and included in the fee. Cover shoulders. Do not climb on structures, sit on shrines, or stand higher than a priest during a ceremony. Do not step over offerings on the ground.\n\nIf a ceremony is in progress, you may usually watch from the side; do not walk through it or between the priest and the congregation. Ask before photographing people praying.\n\nWomen who are menstruating are asked not to enter temple grounds. This is a genuine rule here, not a formality, and it is respected quietly rather than policed.",
            tourCard: {
              slug: "tirta-empul-purification-ritual-and-temple-tour-in-ubud",
              title: "Tirta Empul: Purification Ritual and Temple Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-purification-ritual-and-temple-tour-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can tourists do the purification ritual at Tirta Empul?", a: "Yes, and many do. Use the changing rooms, wear the sarong provided for the water, follow the spouts left to right and skip the ones reserved for the dead. Treat it as a ritual rather than a swim." },
          { q: "Do I need a sarong for temples in Ubud?", a: "Yes, at every temple. Sarongs and sashes are provided at the gate and included in the entry fee. Shoulders should be covered too." },
          { q: "Which temple near Ubud is the most impressive?", a: "Gunung Kawi, for its rock-cut shrines in a river gorge. It involves roughly three hundred steps each way, which is why it is the least crowded." },
          { q: "How long does the Tirta Empul visit take?", a: "About an hour without the purification, an hour and a half to two hours with it, including changing. Early morning is quietest." },
        ],
      };

    case "day-trips-from-ubud":
      return {
        title: "Day Trips from Ubud: East Bali's Gates and Water Palaces, Sidemen, the North, and Nusa Penida",
        seoTitle: "Day Trips from Ubud 2026",
        description: "Which directions pay off from Ubud, the real drive times, the Lempuyang queue, and why Nusa Penida from Ubud is a long day.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sidemen-trekking-a-walk-from-a-different-perspective-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "compass", label: "East", value: "Lempuyang gates, Tirta Gangga, Sidemen: 1.5 to 2 hours each way" },
          { icon: "mountain", label: "North", value: "Batur, Kintamani, Jatiluwih, Munduk lakes" },
          { icon: "ship", label: "Nusa Penida", value: "Sanur boat 45 minutes, but Ubud to Sanur first; a 12-hour day" },
          { icon: "clock", label: "Lempuyang queue", value: "Commonly 1 to 3 hours for the gate photo on a busy day" },
          { icon: "car", label: "Driver", value: "A private car for 8 to 10 hours is the normal way to do any of these" },
        ],
        sections: [
          {
            title: "Day Trips from Ubud: East Bali's Gates and Water Palaces, Sidemen, the North, and Nusa Penida",
            icon: "compass",
            content: "Ubud is roughly central on the island, which makes it a good base for day trips in every direction except the far south. The trade-off is that Bali's roads are slow: thirty kilometres is an hour, and most of the day trips below involve three to four hours in the car in total. Choose one direction per day and do it properly.",
            tourCard: {
              slug: "sidemen-trekking-a-walk-from-a-different-perspective-ubud",
              title: "Sidemen Trekking: A Walk from a Different Perspective (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 27.50",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sidemen-trekking-a-walk-from-a-different-perspective-ubud/img0/1600.webp",
            },
          },
          {
            title: "East: Lempuyang, Tirta Gangga and Sidemen",
            icon: "map",
            content: "The east is the classic Ubud day trip. Lempuyang temple's split gate, with Mount Agung framed between the halves, is the most photographed spot in Bali, and the photograph is produced by a man with a phone and a piece of glass under the lens to create the reflection. There is no lake. Expect to queue for that photo, often an hour or more by mid-morning; a 6am departure from Ubud is how you avoid it.\n\nTirta Gangga, the water palace with its stepping stones across carp pools, is twenty minutes away and far calmer. Sidemen valley, between the two and Ubud, has terraces as fine as Tegallalang's with almost nobody in them, and is the place to stop for lunch.\n\nThe whole loop is a ten-hour day with an early start.",
            tourCard: {
              slug: "east-bali-lempuyang-temple-tirta-gangga-and-taman-ujung-ubud",
              title: "East Bali: Lempuyang Temple, Tirta Gangga, and Taman Ujung (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 80.50",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/east-bali-lempuyang-temple-tirta-gangga-and-taman-ujung-ubud/img0/1600.webp",
            },
          },
          {
            title: "North: Kintamani, Jatiluwih and the lakes",
            icon: "mountain",
            content: "North is the volcano and the highlands. The Kintamani rim road looks down on Batur and its lake and is where the sunrise trekkers eat breakfast. From there a loop west takes in the Jatiluwih terraces, the lake temple at Ulun Danu Beratan, and the twin lakes and waterfalls around Munduk.\n\nIt is a long loop, the roads are winding, and the highlands are cool and often cloudy by afternoon. Start early and do not try to combine it with the east.",
            tourCard: {
              slug: "tegalalang-rice-terrace-instagram-tour-and-jungle-swing-in-ubud",
              title: "Tegalalang Rice Terrace Instagram Tour and Jungle Swing in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tegalalang-rice-terrace-instagram-tour-and-jungle-swing-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Nusa Penida from Ubud",
            icon: "ship",
            content: "Nusa Penida is reachable as a day trip from Ubud, but be honest about what it involves: an hour to Sanur, a 45-minute fast boat, a full day on rough island roads to Kelingking, Broken Beach and Angel's Billabong, the boat back, and an hour home. Twelve hours, most of it moving.\n\nIt is worth it once. If you are also staying on the south coast, do Penida from there instead and save two hours. If you are staying only in Ubud and have the time, a night on the island is a far better version of the trip.",
            tourCard: {
              slug: "ujung-water-palace-candidasa-and-sidemen-village-tour",
              title: "Ujung Water Palace, Candidasa and Sidemen Village Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.00",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ujung-water-palace-candidasa-and-sidemen-village-tour/img0/1600.webp",
            },
          },
          {
            title: "How the day works with a driver",
            icon: "car",
            content: "The normal way to do any of these is a private car with a driver for eight to ten hours. Drivers know which sites have queues that morning, where the road is closed for a ceremony, and which warung to stop at. The tours listed on this site for these routes are exactly that: a driver, a car, and a route, with a guide added where the site needs one.",
            tourCard: {
              slug: "private-car-charter-with-english-speaking-driver-in-ubud",
              title: "Private Car Charter With English Speaking Driver in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 53.50",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-car-charter-with-english-speaking-driver-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How far is Lempuyang temple from Ubud?", a: "About an hour and a half to two hours each way. Leave by 6am to reach the gate before the photo queue builds; by mid-morning the wait is commonly an hour or more." },
          { q: "Is there a lake at Lempuyang temple?", a: "No. The famous reflection is made by holding glass under the camera lens. Knowing that beforehand saves the disappointment on arrival." },
          { q: "Can you do Nusa Penida as a day trip from Ubud?", a: "Yes, but it is about twelve hours door to door: an hour to Sanur, a 45-minute boat, a full day on the island, and the return. From the south coast it is two hours shorter." },
          { q: "What is the best day trip from Ubud?", a: "For scenery and calm, Sidemen valley with Tirta Gangga. For the famous photo, Lempuyang with an early start. For volcano views, the Kintamani rim." },
        ],
      };

    case "getting-around-ubud":
      return {
        title: "Getting Around Ubud: Drivers, Scooters, and Why Ride-Hailing Apps Behave Differently Here",
        seoTitle: "Getting Around Ubud 2026",
        description: "What a private driver day costs and covers, the scooter licence problem, and the local transport arrangement that catches app users out.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/quad-ride-waterfalls-and-authentic-cooking-class-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "car", label: "Private driver", value: "Roughly USD 40 to 60 for an 8 to 10 hour day, fuel included" },
          { icon: "bike", label: "Scooter", value: "Cheap to rent; an international licence with a motorcycle category is legally required" },
          { icon: "phone", label: "Apps", value: "Work for drop-offs; pickups inside central Ubud are often refused or redirected" },
          { icon: "footprints", label: "Centre", value: "Walkable, but pavements are narrow and traffic is constant" },
          { icon: "plane", label: "Airport", value: "About 1.5 hours; longer in evening traffic" },
        ],
        sections: [
          {
            title: "Getting Around Ubud: Drivers, Scooters, and Why Ride-Hailing Apps Behave Differently Here",
            icon: "car",
            content: "Ubud's centre is a handful of streets you can walk. Everything worth seeing outside it, which is most things, needs a vehicle, and the choice is a private driver, a scooter, or a ride-hailing app. Each has a catch worth knowing before you arrive.",
            tourCard: {
              slug: "quad-ride-waterfalls-and-authentic-cooking-class-in-ubud",
              title: "Quad ride, waterfalls and Authentic Cooking Class in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 67.00",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/quad-ride-waterfalls-and-authentic-cooking-class-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "A driver for the day",
            icon: "car",
            content: "The standard arrangement in Ubud is a car with a driver for a day, typically eight to ten hours, at a flat rate that usually works out around forty to sixty US dollars, fuel and parking included. That covers any of the day trips on this site and is, per person for two or more, the cheapest and least stressful way to see the island.\n\nA good driver is half guide: they know which waterfall is closed after last night's rain and which temple has a ceremony this morning. The tours we list for the Ubud area are built on this model, with a named operator behind the car rather than a stranger flagged down on the street.",
            tourCard: {
              slug: "private-car-charter-with-english-speaking-driver-in-ubud",
              title: "Private Car Charter With English Speaking Driver in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 53.50",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-car-charter-with-english-speaking-driver-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Scooters: the licence problem",
            icon: "bike",
            content: "Scooter rental is everywhere and costs very little per day. Two things to know.\n\nFirst, to ride legally you need an international driving permit that includes a motorcycle category, and police checkpoints around Ubud do stop foreigners and fine those without one. Your home car licence is not enough.\n\nSecond, travel insurance almost universally excludes motorcycle accidents unless you are licensed for the vehicle. An accident without the licence is uninsured. Ubud's roads are narrow, potholed and shared with trucks, and scooter injuries are the most common serious problem for visitors on the island. Ride if you are an experienced rider with the right licence; otherwise take a driver.",
            tourCard: {
              slug: "private-hot-air-balloon-ride-in-ubud",
              title: "Private Hot-Air Balloon Ride in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 203.50",
              duration: "10 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-hot-air-balloon-ride-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Ride-hailing apps in Ubud",
            icon: "phone",
            content: "The Indonesian ride apps work across Bali, and they will happily drop you in Ubud. Getting picked up inside central Ubud is another matter: the local driver cooperatives have long resisted the apps on their patch, and drivers will often decline a pickup in the centre, ask you to walk to the edge of town, or quote a price above the app's.\n\nThis is a known arrangement rather than a scam, and it is why so many visitors end up with a driver's card in their pocket by day two. For an airport transfer or a day out, book it in advance. For a short hop across town, walk or ask your accommodation to call someone.",
            tourCard: {
              slug: "mount-batur-sunrise-atv-ride-and-rafting-adventure",
              title: "Mount Batur Sunrise ATV Ride and Rafting Adventure",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 34.50",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-atv-ride-and-rafting-adventure/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How much does a private driver cost in Ubud?", a: "Roughly forty to sixty US dollars for an eight to ten hour day, fuel and parking included, for the car rather than per person. Longer routes to the far east or north cost a little more." },
          { q: "Do I need a licence to rent a scooter in Ubud?", a: "Legally, yes: an international driving permit with a motorcycle category. Police checkpoints do fine foreigners without one, and travel insurance generally will not cover an accident on an unlicensed rider." },
          { q: "Do Grab and Gojek work in Ubud?", a: "For drop-offs, yes. For pickups inside central Ubud, drivers often decline or ask you to walk to the edge of town because of the local driver cooperatives. Book transfers in advance." },
          { q: "How far is Ubud from the airport?", a: "About an hour and a half, and more in evening traffic. A pre-booked car is the reliable option." },
        ],
      };

    case "lempuyang-gate-of-heaven-guide":
      return {
        title: "Lempuyang Temple and the Gate of Heaven from Ubud: The Queue, the Mirror Trick, and How to Beat Both",
        seoTitle: "Lempuyang Gate of Heaven Guide 2026",
        description: "What the famous reflection photo really is, how long the queue runs, when Agung is clear, and what else to do in east Bali once you have your picture.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/lempuyang-temple-gate-of-heaven-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "From Ubud", value: "About 2 hours each way, Karangasem" },
          { icon: "clock", label: "Leave Ubud", value: "5:00am to be near the front of the queue" },
          { icon: "users", label: "Queue", value: "1 to 3 hours from mid-morning" },
          { icon: "ticket", label: "Entry", value: "Donation plus shuttle, tens of thousands of rupiah" },
          { icon: "mountain", label: "The view", value: "Mount Agung, 3,031 m, framed in the split gate" },
          { icon: "shield", label: "Dress", value: "Sarong and sash, provided at the entrance" },
        ],
        sections: [
          {
            title: "The Gate of Heaven: what you are looking at",
            icon: "landmark",
            content: "Pura Penataran Agung Lempuyang is the lowest of seven temples that climb Mount Lempuyang in Karangasem, east Bali. Its candi bentar, the split gate, faces west towards Mount Agung, and on a clear morning the volcano sits exactly between the two halves. That framing is the photograph, and the photograph is the reason a temple that was quiet ten years ago now has a queue.\n\nThe temple itself is a working one, and the higher six take a few hours of stairs through forest to reach; almost nobody who comes for the gate goes further, and the priests are used to that. Treat the courtyard as a temple, not a set: sarong on, quiet, no climbing on the walls, and no entry for anyone menstruating or in mourning, which is the rule at every temple on Bali.",
            tourCard: {
              slug: "lempuyang-temple-gate-of-heaven-ubud",
              title: "Lempuyang Temple: Gate of Heaven (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 104.90",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/lempuyang-temple-gate-of-heaven-ubud/img0/1600.webp",
            },
          },
          {
            title: "The reflection is a piece of glass",
            icon: "camera",
            content: "The mirror-still lake under the gate does not exist. A photographer at the front of the queue holds a small sheet of glass under the lens of your phone, tilts it, and the gate reflects in it. It is a neat trick, it takes ten seconds, and the tip is voluntary. Knowing this in advance saves the disappointment that a surprising number of people feel on arrival, and it also means you can decide whether the queue is worth it for a photo that is, in the end, a mirror trick with a real volcano behind it.\n\nIf you want a photograph of the gate with the mountain and nobody in it, the first fifteen minutes after opening, around 7:00, are the only window.",
            tourCard: {
              slug: "half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud",
              title: "Half-Day Tirta Empul Purification and Gunung Kawi Temple in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 69.42",
              duration: "6.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The queue, honestly",
            icon: "clock",
            content: "You take a number at the desk in the lower car park, ride the shuttle up, and wait your turn at the gate; each group gets about a minute with the photographer. By 9:00 on a dry-season morning the wait is an hour, by eleven it can be three, and there is little shade. Tours from Ubud leave at 5:00 for a reason.\n\nThe alternative is not to fight it: go for the temple and the walk, or go late afternoon in the wet season when the queue thins and the light is soft, accepting that Agung may be in cloud.",
            tourCard: {
              slug: "east-bali-lempuyang-temple-tirta-gangga-and-taman-ujung-ubud",
              title: "East Bali: Lempuyang Temple, Tirta Gangga, and Taman Ujung (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 80.11",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/east-bali-lempuyang-temple-tirta-gangga-and-taman-ujung-ubud/img0/1600.webp",
            },
          },
          {
            title: "When Agung is actually clear",
            icon: "sun",
            content: "Agung is most often visible from about 6:30 to 9:00 in the dry season, April to October. Cloud builds around the summit from late morning almost every day, and in the wet season it can be hidden for days at a time. Nobody can promise the view, and an operator who does is guessing. If the mountain matters more than the gate, ask your driver on the morning; from the coast road near Amlapura you can see whether the top is out before you commit to the queue.",
            tourCard: {
              slug: "mount-agung-sunrise-trekking-tour-via-besakih-temple-in-ubud",
              title: "Mount Agung Sunrise Trekking Tour via Besakih Temple in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 74.39",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-agung-sunrise-trekking-tour-via-besakih-temple-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The rest of an east Bali day",
            icon: "map",
            content: "Lempuyang is two hours from Ubud, so it anchors a full day rather than a stop. The standard loop continues to Tirta Gangga, the water palace built by the last raja of Karangasem in 1946, with its stepping stones across a carp pond, then to Taman Ujung, the same family's earlier palace on the coast, and back by the Sidemen valley, where the terraces are as good as Tegallalang without the swings. Some tours add a lunch stop at a rice-field warung near Sidemen, which is the better of the options.\n\nFor the other side of Ubud's day trips, see the [day trips from Ubud guide](/indonesia/ubud/day-trips-from-ubud) and the [temples guide](/indonesia/ubud/ubud-temples-guide), which covers Tirta Empul and the closer sites.",
            tourCard: {
              slug: "sidemen-trekking-a-walk-from-a-different-perspective-ubud",
              title: "Sidemen Trekking: A Walk from a Different Perspective (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 27.47",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sidemen-trekking-a-walk-from-a-different-perspective-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is the Gate of Heaven reflection real?", a: "No. A photographer holds a piece of glass under your phone to create the mirror effect. There is no water at the gate. The volcano behind it is real." },
          { q: "How long is the queue at Lempuyang?", a: "Fifteen minutes at opening around 7:00, an hour by 9:00, and two to three hours by late morning in the dry season. Leave Ubud at 5:00 to be near the front." },
          { q: "How far is Lempuyang from Ubud?", a: "Roughly two hours each way by car, so it is a full-day trip usually combined with Tirta Gangga, Taman Ujung and the Sidemen valley." },
          { q: "What should I wear to Lempuyang?", a: "A sarong and sash, which are provided at the entrance, over clothes that cover the knees and shoulders. It is a working temple and the dress rule is applied." },
        ],
      };

    case "tirta-empul-purification-guide":
      return {
        title: "Tirta Empul from Ubud: The Purification Ritual, What to Wear, and When It Is Quiet",
        seoTitle: "Tirta Empul Purification Guide 2026",
        description: "How the melukat ritual works spout by spout, what you need to bring, the days when the pools are full of worshippers, and what to combine it with nearby.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "From Ubud", value: "About 30 minutes north-east, Tampaksiring" },
          { icon: "landmark", label: "Founded", value: "962 AD, around a sacred spring" },
          { icon: "droplet", label: "The pools", value: "Two, fed by around 30 spouts; two spouts are not used" },
          { icon: "ticket", label: "Entry", value: "Tens of thousands of rupiah, sarong included" },
          { icon: "clock", label: "Quiet", value: "Before 9:00, or late afternoon" },
          { icon: "shield", label: "Bring", value: "A change of clothes and a towel" },
        ],
        sections: [
          {
            title: "What Tirta Empul is",
            icon: "landmark",
            content: "Tirta Empul is a water temple on the Pakerisan river at Tampaksiring, founded in 962 AD during the Warmadewa dynasty around a spring the Balinese believe was created by the god Indra. The spring feeds a bathing pool with a row of carved spouts, and for a thousand years people have come to wash under them for melukat, a purification. It is one of the six most important temples on Bali and it is busy with worshippers every day, which is part of the experience rather than a problem.\n\nThe complex has three courtyards: the outer one with the market and changing rooms, the middle one with the pools, and the inner one with the shrines, which is for prayer only.",
            tourCard: {
              slug: "half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud",
              title: "Half-Day Tirta Empul Purification and Gunung Kawi Temple in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 69.42",
              duration: "6.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/half-day-tirta-empul-purification-and-gunung-kawi-temple-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "How the ritual works",
            icon: "droplet",
            content: "You change into a sarong and a separate bathing sarong, make an offering at the small shrine by the pool, then enter the water at the left and move along the spouts in order, bowing under each, letting the water run over your head three times. Two spouts near the right-hand end are reserved for the rites of the dead and are not used; guides point them out and there is usually a sign. Then the second pool, then you change and, if you wish, go into the inner courtyard to pray.\n\nGo with a guide the first time. The order matters to the people around you, and a guide who explains why the offering goes where it does makes the difference between a ritual and a queue for a shower.",
            tourCard: {
              slug: "tirta-empul-temple-tour-and-sacred-purification-ritual-in-ubud",
              title: "Tirta Empul Temple Tour and Sacred Purification Ritual in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26.32",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-temple-tour-and-sacred-purification-ritual-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Dress, and what to bring",
            icon: "shield",
            content: "A sarong is included in the entry price and a bathing sarong is rented at the pool, but bring your own towel and a full change of clothes; the water is spring-cold and you will be wet through. Swimwear is worn under the sarong, not on its own. Lockers exist and are cheap. Phones are allowed at the pool, and it is fine to photograph the temple, but not to photograph people mid-prayer at close range.\n\nWomen who are menstruating are asked not to enter the pools, which is the rule at every Balinese temple and is not negotiable here.",
            tourCard: {
              slug: "tirta-empul-purification-ritual-and-temple-tour-in-ubud",
              title: "Tirta Empul: Purification Ritual and Temple Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19.07",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-purification-ritual-and-temple-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "When it is quiet, and when it is full",
            icon: "clock",
            content: "Before 9:00 on an ordinary weekday the pools have a few dozen people. Late morning brings the tour groups. On the full moon, the new moon, Galungan and Kuningan, and the days before Nyepi, the temple fills with Balinese families in white, and the pools become a slow procession; it is the most moving time to see it and the worst time to bathe quickly. If you want the ritual without the crowd, 7:30 on a weekday. If you want to see it as the Balinese use it, come on a holy day and wait.\n\nOur [best time to visit Ubud guide](/indonesia/ubud/best-time-to-visit-ubud) lists the ceremony calendar for the year.",
            tourCard: {
              slug: "full-day-ulun-danu-beratan-temple-and-gitgit-waterfall-in-ubud",
              title: "Full Day Ulun Danu Beratan Temple and Gitgit Waterfall in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 78.57",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/full-day-ulun-danu-beratan-temple-and-gitgit-waterfall-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Nearby",
            icon: "map",
            content: "Gunung Kawi, ten minutes south, is a row of 11th-century shrines cut into the rock face of the Pakerisan gorge, reached down about 300 steps through rice terraces, and it is the quieter, older neighbour that most Tirta Empul visitors skip. The Tegallalang terraces are fifteen minutes west. The presidential palace built by Sukarno stands on the hill above the springs; it is not open, but the view of it from the temple explains why the site was chosen. A morning that does Tirta Empul early, Gunung Kawi second and Tegallalang before eleven is one of the best half-days out of Ubud; see the [temples guide](/indonesia/ubud/ubud-temples-guide) and the [Tegallalang guide](/indonesia/ubud/tegallalang-rice-terrace-guide).",
            tourCard: {
              slug: "tirta-empul-temple-purification-ritual-with-guide-in-ubud",
              title: "Tirta Empul Temple Purification Ritual with Guide in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 41.96",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tirta-empul-temple-purification-ritual-with-guide-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can tourists do the purification ritual at Tirta Empul?", a: "Yes. Visitors are welcome in the pools if they follow the order, wear a sarong, make the small offering first and skip the two spouts reserved for funeral rites. A guide makes the first time straightforward." },
          { q: "What should I bring to Tirta Empul?", a: "A towel and a full change of clothes. Sarongs are provided, a bathing sarong is rented at the pool, and lockers are available." },
          { q: "What time should I go to Tirta Empul?", a: "Before 9:00 for a quiet pool. From late morning the tour groups arrive, and on full-moon and holy days the pools are full of local worshippers all day." },
          { q: "Is Tirta Empul near Tegallalang?", a: "Yes, about fifteen minutes apart. Gunung Kawi is ten minutes from Tirta Empul. The three make a natural half-day from Ubud." },
        ],
      };

    case "tukad-cepung-waterfall-guide":
      return {
        title: "Tukad Cepung Waterfall: The Light Beams, the Timing, and the Walk Through the Canyon",
        seoTitle: "Tukad Cepung Waterfall Guide 2026",
        description: "Why the photographs show beams of light, the two-hour window when they happen, the walk in, and what to pair it with in Bangli.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tibumana-tukad-cepung-kanto-lampo-and-tegenungan-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "From Ubud", value: "45 minutes east, Tembuku, Bangli" },
          { icon: "sun", label: "Light beams", value: "Roughly 10:00 to noon on a clear day" },
          { icon: "footprints", label: "Walk in", value: "10 minutes down steps, then along the stream" },
          { icon: "ticket", label: "Entry", value: "Tens of thousands of rupiah, plus parking" },
          { icon: "umbrella", label: "Wet season", value: "Higher flow, brown water after rain" },
          { icon: "shield", label: "Footwear", value: "Sandals that can get wet" },
        ],
        sections: [
          {
            title: "What makes Tukad Cepung different",
            icon: "sun",
            content: "Most waterfalls are seen from the front. Tukad Cepung falls inside a cleft in the rock, and you stand at the bottom of a narrow canyon looking up at water coming over a rim with sky above it. When the sun is high enough to clear the canyon walls, its rays cut through the spray in visible beams, and that is the picture the place is known for.\n\nThe beams are real, but they are a two-hour event. Before ten the canyon is in shade; after noon the sun has moved past the gap. On an overcast day there are no beams at all, only a pretty fall in a green slot, which is still worth the walk but is not the photograph.",
            tourCard: {
              slug: "tibumana-tukad-cepung-kanto-lampo-and-tegenungan-tour-in-ubud",
              title: "Tibumana, Tukad Cepung, Kanto Lampo, and Tegenungan Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 67.90",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tibumana-tukad-cepung-kanto-lampo-and-tegenungan-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Timing it",
            icon: "clock",
            content: "Aim to be at the fall between 10:00 and 11:30 in the dry season, April to October. Tours from Ubud that put Tukad Cepung first, leaving at 8:30, get it right; tours that put it after Tegallalang and a coffee stop arrive at one and miss the light. Ask the operator what order the day runs in. If you are driving yourself, park at the top, allow ten minutes down and fifteen back up, and add time for the queue at the fall on a weekend, since everyone wants the same spot at the same hour.",
            tourCard: {
              slug: "mount-batur-sunrise-hike-and-tibumana-waterfall",
              title: "Mount Batur Sunrise Hike and Tibumana Waterfall",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.24",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-hike-and-tibumana-waterfall/img0/1600.webp",
            },
          },
          {
            title: "The walk",
            icon: "footprints",
            content: "From the car park a path of stone steps drops into the gorge, then the route follows the stream bed upstream for a few minutes, wading through ankle-deep water and ducking under a rock ledge, before the canyon opens at the fall. It is easy for anyone who can manage steps, but it is wet from the knee down, the rocks are slippery, and flip-flops are the wrong shoe; strap sandals or old trainers are right. After heavy rain the stream rises and the walk closes for the day; the operator will swap in another fall.",
            tourCard: {
              slug: "campuhan-ridge-walk-temple-and-waterfalls-tour-in-ubud",
              title: "Campuhan Ridge Walk, Temple, and Waterfalls Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.65",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/campuhan-ridge-walk-temple-and-waterfalls-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Pairing it",
            icon: "map",
            content: "Tukad Cepung sits in Bangli among a cluster of falls that are usually done as one day: Tibumana, fifteen minutes away, with a single clean curtain into a swimming pool; Kanto Lampo, where the water fans across a stepped rock face; and Goa Rang Reng, a smaller cascade on a rock slab. Penglipuran village, the traditional bamboo-roofed village, is twenty minutes north, and Kintamani's caldera viewpoint is forty minutes beyond that. A day of Tukad Cepung at ten, Tibumana for a swim, lunch in Bangli and Penglipuran in the afternoon is a full one.\n\nThe [Ubud waterfalls guide](/indonesia/ubud/ubud-waterfalls-guide) ranks all of them by what they are good for.",
            tourCard: {
              slug: "besakih-temple-tukad-cepung-waterfall-penglipuran-in-ubud",
              title: "Besakih temple, Tukad Cepung waterfall, Penglipuran in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.77",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/besakih-temple-tukad-cepung-waterfall-penglipuran-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What time do the light beams appear at Tukad Cepung?", a: "Roughly 10:00 to noon on a clear day, when the sun is high enough to clear the canyon walls. Outside that window, or under cloud, there are no beams." },
          { q: "How hard is the walk to Tukad Cepung?", a: "Easy but wet: ten minutes down stone steps, then a few minutes wading upstream through ankle-deep water and under a ledge. Wear sandals that can get wet." },
          { q: "Can you swim at Tukad Cepung?", a: "You can stand under the fall and paddle, but the pool is shallow and rocky. For swimming, Tibumana fifteen minutes away is the better fall." },
          { q: "How far is Tukad Cepung from Ubud?", a: "About 45 minutes by car, east into Bangli. It is usually combined with Tibumana and Kanto Lampo, and sometimes Penglipuran village." },
        ],
      };

    case "ubud-atv-and-rafting-guide":
      return {
        title: "ATV and White-Water Rafting Around Ubud: Which River, How Muddy, and Who Should Not",
        seoTitle: "Ubud ATV & Rafting Guide 2026",
        description: "The Ayung against the Telaga Waja, what an ATV track around Payangan is really like, age and health limits, and how the combined days are structured.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/atv-quad-bike-and-white-water-rafting-adventure-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "droplet", label: "Ayung river", value: "Class II-III, about 12 km, 2 hours on the water" },
          { icon: "droplet", label: "Telaga Waja", value: "Class III-IV, steeper, in the east" },
          { icon: "car", label: "ATV ride", value: "1.5 to 2 hours on the machine, mostly mud" },
          { icon: "users", label: "Minimum ages", value: "Vary by operator; children ride as passengers" },
          { icon: "umbrella", label: "Season", value: "Wet season is the bigger ride, rivers cancel if too high" },
          { icon: "shield", label: "Bring", value: "Clothes you can throw away, a change, no jewellery" },
        ],
        sections: [
          {
            title: "The two rivers",
            icon: "droplet",
            content: "The Ayung runs below Payangan on the west side of Ubud and is the river most rafting days use: about twelve kilometres of class II to III water through a gorge with waterfalls coming in from the sides, two hours in the raft, nothing that frightens a beginner. The Telaga Waja in Karangasem, an hour and a half east, is narrower and steeper, class III to IV, with a weir drop near the end, and operators who want a livelier run use it.\n\nBoth rise fast after rain. In the wet season, November to March, the Ayung is quick and brown and the Telaga Waja can be closed for the day; in the dry season the Ayung is gentle enough for children of about seven and up. The guide reads the river on the morning and will not launch on a flood.",
            tourCard: {
              slug: "atv-quad-bike-and-white-water-rafting-adventure-in-ubud",
              title: "ATV Quad Bike and White Water Rafting Adventure in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30.51",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/atv-quad-bike-and-white-water-rafting-adventure-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "What an ATV day is really like",
            icon: "car",
            content: "The tracks are in the villages north of Ubud around Payangan, Tegallalang and Bongkasa: a loop of plantation lanes, a river bed, a section of village road, and a stretch of deep, red mud that is the part everyone remembers. Rides are 1.5 to 2 hours on the machine, on single or tandem quads with a guide in front and often a second at the back. Some tracks include a tunnel or a waterfall crossing.\n\nYou will be filthy. Operators lend boots and helmets and have showers at the end; wear clothes you do not mind ruining, leave watches and rings in the locker, and put your phone in the dry bag or the camera guide's hands. Contact lenses are better than glasses.",
            tourCard: {
              slug: "river-cave-tubing-adventure-and-gorilla-atv-quad-bike-in-ubud",
              title: "River Cave Tubing Adventure and Gorilla ATV Quad Bike in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 29.76",
              duration: "40 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/river-cave-tubing-adventure-and-gorilla-atv-quad-bike-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Who should not",
            icon: "shield",
            content: "Rafting: anyone pregnant, anyone with a heart or back condition, and children under about seven on the Ayung; the operator's own limit is on the option. ATV: driving age is usually 16 or 18 depending on the operator, younger children ride as passengers with a parent or a guide, and pregnancy and back injuries rule it out. Both are outdoors for hours, so the very sunburnt and the badly hungover have worse days than they expected. Bali's heat matters less than it sounds; the river and the mud are cool.",
            tourCard: {
              slug: "atv-quad-bike-and-ayung-river-rafting-with-lunch-in-ubud",
              title: "ATV Quad Bike and Ayung River Rafting with Lunch in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30.51",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/atv-quad-bike-and-ayung-river-rafting-with-lunch-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Combined days",
            icon: "clock",
            content: "The common package is ATV in the morning and rafting after lunch, from around 8:00 to 3:00, with lunch at the rafting base. It is a long day and the order matters: mud first, then the river rinses it off. Hotel pickup from Ubud is usually included and from the south is priced separately. A single activity is a half-day. For the gentler outdoor option, the [Campuhan ridge walk](/indonesia/ubud/campuhan-ridge-walk-guide) costs nothing and takes an hour; for the volcano, see the [Mount Batur guide](/indonesia/ubud/mount-batur-sunrise-guide).",
            tourCard: {
              slug: "atv-quad-biking-and-water-rafting-adventure-tour-in-ubud",
              title: "ATV Quad Biking and Water Rafting Adventure Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 119.85",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/atv-quad-biking-and-water-rafting-adventure-tour-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which river is better for rafting near Ubud?", a: "The Ayung for most people: class II-III, two hours, fine for beginners and children from about seven. The Telaga Waja in the east is class III-IV and better for a livelier run." },
          { q: "How dirty do you get on a Bali ATV ride?", a: "Completely. Most tracks include deep mud. Operators provide boots, helmets and showers; wear clothes you can throw away and bring a change." },
          { q: "Can children do ATV in Ubud?", a: "As passengers with a parent or guide, yes, from around five or six on most tracks. Driving age is usually 16 or 18 depending on the operator." },
          { q: "Is rafting in Bali safe in the wet season?", a: "Yes when it runs. Rivers rise after rain and operators cancel on a flood; a wet-season Ayung is faster and browner but still a class II-III river with guides in every raft." },
        ],
      };

    case "ubud-cooking-class-guide":
      return {
        title: "Balinese Cooking Classes in Ubud: What You Cook, the Market Visit, and How to Choose One",
        seoTitle: "Ubud Cooking Class Guide 2026",
        description: "The dishes a real Balinese class teaches, why base genep is the point, what the market visit is for, and the difference between a compound kitchen and a school.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/balinese-cooking-class-for-couples-with-market-visit-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Length", value: "3 to 5 hours, morning classes start with the market" },
          { icon: "utensils", label: "The base", value: "Base genep, the spice paste under everything" },
          { icon: "leaf", label: "Vegetarian", value: "Standard on request; most dishes adapt" },
          { icon: "users", label: "Group size", value: "Usually 6 to 12; private classes available" },
          { icon: "map", label: "Where", value: "Family compounds around Ubud, or a purpose-built kitchen" },
          { icon: "ticket", label: "Includes", value: "All ingredients and the meal you cook" },
        ],
        sections: [
          {
            title: "What you actually cook",
            icon: "utensils",
            content: "Every Balinese class starts with base genep, the spice paste of shallots, garlic, galangal, turmeric, ginger, chillies, candlenut, coriander seed and shrimp paste, pounded in a stone mortar until it is smooth. Once you have it, most of the cuisine is variations on it: sate lilit, minced fish or chicken mixed with the paste and coconut, pressed round lemongrass stalks and grilled; pepes ikan, fish in the paste steamed in banana leaf; lawar, the chopped salad of long beans, coconut and spice, which in its traditional form includes raw blood and in classes usually does not; and the yellow rice, nasi kuning, with turmeric and coconut milk.\n\nA good class makes six to eight dishes and you eat all of them at the end. If the menu is mostly fried rice and satay, it is a tourist menu, not a Balinese one.",
            tourCard: {
              slug: "balinese-cooking-class-for-couples-with-market-visit-in-ubud",
              title: "Balinese Cooking Class for Couples with Market Visit in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 137.80",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/balinese-cooking-class-for-couples-with-market-visit-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The market visit",
            icon: "map",
            content: "Morning classes begin at Ubud's market, or one of the village markets, around 8:00, and it is not decoration: the instructor buys the day's ingredients and explains what they are. You see turmeric root rather than powder, salam leaf, torch ginger flower, the small hot chillies and the big mild ones, and the fresh grated coconut that goes into almost everything. Afternoon classes skip the market and cost a little less. If you have never seen the raw ingredients, the market is the half of the class that stays with you.",
            tourCard: {
              slug: "ubud-balinese-cooking-class-9-dishes-and-local-market-ubud",
              title: "Ubud Balinese Cooking Class: 9 Dishes and Local Market (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 22.88",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-balinese-cooking-class-9-dishes-and-local-market-ubud/img0/1600.webp",
            },
          },
          {
            title: "Compound or school",
            icon: "home",
            content: "Classes run in two settings. A family compound is a home: you cook in the household kitchen or an open pavilion, the grandmother may be pounding the paste beside you, and the class is as much about how a Balinese household eats as about recipes. A purpose-built cooking school has individual stations, aprons, printed recipes and better English; it is more efficient and less personal. Neither is wrong. Families with children and people who want to actually learn the techniques often prefer the school; people who want the afternoon in a village prefer the compound. The listing says which it is.",
            tourCard: {
              slug: "balinese-cooking-class-with-market-tour-in-ubud",
              title: "Balinese Cooking Class with Market Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.43",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/balinese-cooking-class-with-market-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Choosing one",
            icon: "users",
            content: "Look for a class that names the dishes, states the group size and says who teaches. Vegetarian and vegan versions are normal in Ubud and worth confirming when you book rather than on the day. Halal is easy since most classes use chicken and fish. Morning classes are cooler and include the market; afternoon classes fit around a sunrise trek. Most run 3 to 5 hours and end with lunch or an early dinner. Pair a morning class with the [Monkey Forest](/indonesia/ubud/ubud-monkey-forest-guide) in the late afternoon, or a night one with a dance performance in town.",
            tourCard: {
              slug: "3-course-balinese-cooking-class-in-ubud",
              title: "3-Course Balinese Cooking Class in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 34.33",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-course-balinese-cooking-class-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What do you cook in a Balinese cooking class?", a: "Base genep spice paste first, then dishes built on it: sate lilit, pepes ikan, lawar, chicken or tempe in the paste, vegetables with coconut, and nasi kuning. Six to eight dishes in a good class, eaten at the end." },
          { q: "Do Ubud cooking classes include a market visit?", a: "Morning classes usually do, starting around 8:00 at a local market where the instructor buys the ingredients. Afternoon classes skip it." },
          { q: "Are cooking classes in Ubud vegetarian-friendly?", a: "Yes, vegetarian and vegan versions are standard on request. Confirm when booking so the ingredients are bought accordingly." },
          { q: "How long is a cooking class in Ubud?", a: "Three to five hours including the market visit and the meal. Private classes can be shorter." },
        ],
      };

    case "ubud-swings-guide":
      return {
        title: "The Ubud Jungle Swings: Which One, How High, What It Costs, and the Queue",
        seoTitle: "Ubud Bali Swing Guide 2026",
        description: "The swing parks around Ubud compared, what the tallest swings are like, how the pricing and dress rental work, and the only way to avoid a two-hour queue.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/day-trip-to-rice-terraces-swings-waterfall-and-temples-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "Where", value: "Bongkasa on the Ayung gorge, and the Tegallalang road" },
          { icon: "ruler", label: "Heights", value: "Single swings from about 10 m to 78 m" },
          { icon: "ticket", label: "Price", value: "Per swing or a package; photo packages extra" },
          { icon: "clock", label: "Queue", value: "Short at opening, up to 2 hours mid-afternoon" },
          { icon: "shield", label: "Safety", value: "Harness and staff push; weight limits apply" },
          { icon: "camera", label: "Dresses", value: "Rented on site for the photograph" },
        ],
        sections: [
          {
            title: "What the swings are",
            icon: "camera",
            content: "The jungle swing is a Bali invention of the last decade: a giant swing hung from two tall posts on the edge of a gorge or a rice terrace, so the arc carries you out over the drop. The originals are along the Ayung river gorge near Bongkasa, west of Ubud, and a second cluster grew along the road above the Tegallalang terraces. Each park has several swings of different heights, plus hanging nests, a bird's-nest platform, a hanging bed and a clear-floored viewpoint, all of which exist for the photograph.\n\nIt is fun. It is also a business built entirely on Instagram, and the way to enjoy it is to know that in advance and go early.",
            tourCard: {
              slug: "day-trip-to-rice-terraces-swings-waterfall-and-temples-in-ubud",
              title: "Day Trip to Rice Terraces, Swings, Waterfall and Temples in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 95.35",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/day-trip-to-rice-terraces-swings-waterfall-and-temples-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "How high, and how it feels",
            icon: "ruler",
            content: "A park will have a swing at about 10 metres for the nervous, one or two at 15 to 20, and a tallest one somewhere between 50 and 78 metres above the valley floor, which is the one on the sign. You sit in a harness clipped to the ropes, staff pull you back and let go, and the swing carries out over the gorge for a few arcs before they slow it. It is smoother than it looks and the height registers mostly on the first outward swing. Weight limits are posted and applied. Anyone with a heart condition, pregnant, or badly afraid of heights should choose the low swing or the nest.",
            tourCard: {
              slug: "guided-atv-quad-bike-jungle-adventure-with-lunch-in-ubud",
              title: "Guided ATV Quad Bike Jungle Adventure with Lunch in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.01",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/guided-atv-quad-bike-jungle-adventure-with-lunch-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Pricing and the dress",
            icon: "ticket",
            content: "Parks price either per swing or as a package for all of them, and the packages are the better value if you will do more than one. Photographs are separate: staff photographers sell a package, or you hand your phone to a friend. The long flowing dresses in every swing photograph are rented at the park for a few tens of thousands of rupiah, in a rack of colours, and put on over your clothes. Tours from Ubud usually include the swing entry but not the photo package or the dress; check the option.",
            tourCard: {
              slug: "swing-and-flying-dress-with-coffee-tasting-and-transfer-in-ubud",
              title: "Swing and Flying Dress with Coffee Tasting and Transfer in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 38.53",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/swing-and-flying-dress-with-coffee-tasting-and-transfer-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The queue, and when to go",
            icon: "clock",
            content: "At opening, around 8:00, you walk onto the swing. By eleven there is a line at each one, and on a dry-season afternoon the tallest swing can be a two-hour wait in the sun for thirty seconds of arc. There is no trick; go first thing, or go on a wet-season weekday. The swing parks near Tegallalang can be combined with the terraces before the coaches; see the [Tegallalang guide](/indonesia/ubud/tegallalang-rice-terrace-guide). The Bongkasa parks combine naturally with a morning at the [Ayung river](/indonesia/ubud/ubud-atv-and-rafting-guide).",
            tourCard: {
              slug: "jungle-waterfall-and-tunnel-atv-tour-and-lunch-options-in-ubud",
              title: "Jungle, Waterfall, and Tunnel ATV Tour and Lunch Options in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 112.93",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/jungle-waterfall-and-tunnel-atv-tour-and-lunch-options-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How much does the Bali swing cost?", a: "Parks price per swing or as a package for all of them; expect a few hundred thousand rupiah for a package. Photos and dress rental are extra." },
          { q: "How high is the tallest swing in Ubud?", a: "The tallest single swings advertise 70 to 78 metres above the valley floor. Most parks also have swings at 10 to 20 metres." },
          { q: "Is the Bali swing safe?", a: "You are in a harness clipped to the ropes and staff control the push and the stop. Weight limits are posted. It is not for anyone pregnant or with a heart condition." },
          { q: "When is the best time to go to the swings?", a: "At opening, around 8:00. From late morning there is a queue at every swing, and mid-afternoon on a dry-season day the tallest one can be a two-hour wait." },
        ],
      };

    case "campuhan-ridge-walk-guide":
      return {
        title: "The Campuhan Ridge Walk: When to Go, How Far, and What Is at the End",
        seoTitle: "Campuhan Ridge Walk Ubud Guide 2026",
        description: "Ubud's free walk along a grass ridge between two rivers, the times of day it works, the distance, and what to do at the far end.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/campuhan-ridge-walk-temple-and-waterfalls-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "footprints", label: "Distance", value: "About 2 km one way on the paved path" },
          { icon: "clock", label: "Time", value: "30 to 40 minutes each way" },
          { icon: "sun", label: "Best hours", value: "Before 8:00 or after 4:30; no shade" },
          { icon: "ticket", label: "Cost", value: "Free" },
          { icon: "map", label: "Start", value: "Beside Pura Gunung Lebah, off the Campuhan bridge" },
          { icon: "mountain", label: "End", value: "Karsa cafe and the road to Bangkiang Sidem" },
        ],
        sections: [
          {
            title: "The walk",
            icon: "footprints",
            content: "Campuhan means confluence: the ridge runs between the Wos Barat and Wos Timur rivers, which meet below the old bridge on the west edge of Ubud town. From the temple of Pura Gunung Lebah in the valley, a paved path climbs onto the ridge and follows its spine for about two kilometres through tall elephant grass, with the valleys falling away on both sides and a view back over the rooftops of Ubud. It is flat once you are up, and paved all the way, and it is the easiest walk on Bali that still feels like being outside a town.\n\nAt the far end the path drops to the village of Bangkiang Sidem, where there are a few cafes among rice fields, the best known being Karsa, and a road back to Ubud by scooter or on foot.",
            tourCard: {
              slug: "campuhan-ridge-walk-temple-and-waterfalls-tour-in-ubud",
              title: "Campuhan Ridge Walk, Temple, and Waterfalls Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.65",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/campuhan-ridge-walk-temple-and-waterfalls-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "When to go",
            icon: "sun",
            content: "There is no shade on the ridge. Before 8:00 the light is low and gold, the grass is still wet and the temperature is bearable; after about 9:30 the path is in full sun and the walk becomes a chore. Late afternoon after 4:30 is the second window, with sunset around 6:15 and the light on the grass from the west. Most Ubud hotels are within a short walk or a five-minute drive of the start, which is why the ridge fits before breakfast better than anything else in town.",
            tourCard: {
              slug: "sunrise-mount-batur-guided-hike-with-breakfast",
              title: "Sunrise Mount Batur Guided Hike with Breakfast",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.24",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sunrise-mount-batur-guided-hike-with-breakfast/img0/1600.webp",
            },
          },
          {
            title: "Getting there and back",
            icon: "map",
            content: "The start is signposted from the Campuhan bridge on the road towards Kedewatan, beside the Warwick Ibah hotel; you go down towards the temple and up the far side. Walk out and back for a 4 km loop, or walk out, have breakfast at the cafes in Bangkiang Sidem and take a scooter taxi back. There is no entrance fee and no gate. Combine it with a morning at the [Monkey Forest](/indonesia/ubud/ubud-monkey-forest-guide) or a market breakfast in town; for the harder walks, Batur and the Bangli waterfalls, see the [Mount Batur guide](/indonesia/ubud/mount-batur-sunrise-guide) and the [waterfalls guide](/indonesia/ubud/ubud-waterfalls-guide).",
            tourCard: {
              slug: "mount-batur-sunrise-guided-hike-and-natural-hot-spring",
              title: "Mount Batur Sunrise Guided Hike and Natural Hot Spring",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.99",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mount-batur-sunrise-guided-hike-and-natural-hot-spring/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How long is the Campuhan Ridge Walk?", a: "About two kilometres one way on a paved path, 30 to 40 minutes each way at an easy pace, or a four-kilometre loop out and back." },
          { q: "Is the Campuhan Ridge Walk free?", a: "Yes. There is no gate and no ticket." },
          { q: "What time should I do the Campuhan Ridge Walk?", a: "Before 8:00 or after 4:30. The ridge has no shade and is in full sun from mid-morning." },
          { q: "Where does the Campuhan Ridge Walk start?", a: "Beside Pura Gunung Lebah temple below the Campuhan bridge on the west edge of Ubud, signposted from the road towards Kedewatan." },
        ],
      };

    case "kintamani-and-penglipuran-guide":
      return {
        title: "Kintamani and Penglipuran from Ubud: The Caldera Viewpoint, the Bamboo Village, and the Coffee Stops",
        seoTitle: "Kintamani & Penglipuran Guide 2026",
        description: "What you see from the rim at Penelokan, how Penglipuran village works and its rules, the truth about the kopi luwak stops on the road up, and how to build the day.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/amazing-kintamani-ubud-tour-with-volcano-view-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "mountain", label: "Kintamani", value: "Caldera rim at about 1,500 m; viewpoint at Penelokan" },
          { icon: "thermometer", label: "Temperature", value: "10 degrees cooler than Ubud; bring a layer" },
          { icon: "map", label: "From Ubud", value: "Penglipuran 45 min, Kintamani 1 hr 15" },
          { icon: "landmark", label: "Penglipuran", value: "Traditional village with a bamboo forest behind it" },
          { icon: "ticket", label: "Entry", value: "Small fees at both; tens of thousands of rupiah" },
          { icon: "clock", label: "Cloud", value: "Batur is clearest before 11:00" },
        ],
        sections: [
          {
            title: "Kintamani and the view",
            icon: "mountain",
            content: "Kintamani is the district along the rim of the Batur caldera, the huge crater left by an eruption around 28,000 years ago, inside which the younger cone of Mount Batur and Lake Batur now sit. The viewpoint at Penelokan, at about 1,500 metres, looks straight down at the volcano, the black lava field of the 1968 eruption on its flank, and the lake curving away to Trunyan village on the far shore. It is one of the great views on Bali and it costs a small entry fee and a jacket; the rim is windy and ten degrees colder than Ubud.\n\nThe restaurants along the rim sell a buffet lunch with the view, which is fine for the view. Batur is usually clear until late morning and wrapped in cloud by early afternoon, so lunch here is for the earlier arrivals.",
            tourCard: {
              slug: "amazing-kintamani-ubud-tour-with-volcano-view-ubud",
              title: "Amazing Kintamani Ubud Tour with Volcano View (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 59.50",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/amazing-kintamani-ubud-tour-with-volcano-view-ubud/img0/1600.webp",
            },
          },
          {
            title: "Penglipuran village",
            icon: "landmark",
            content: "Penglipuran, in Bangli on the road up, is a village that has kept its traditional layout under its own rules: one straight stone-paved lane running uphill to the village temple, with family compounds on both sides, each entered through a gate of the same design, roofs of bamboo shingle, and no motor vehicles on the lane. It is not a museum; families live in every compound and will show you their kitchen and the family shrine if you ask. Behind the village is a bamboo forest with a walking path.\n\nGo in the morning before the coaches. It is genuinely one of the cleanest villages in Indonesia, the local rule on litter is strict, and the residents ask the same of visitors.",
            tourCard: {
              slug: "penglipuran-village-rice-terrace-and-waterfall-tour-in-ubud",
              title: "Penglipuran Village, Rice Terrace and Waterfall Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 20.98",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/penglipuran-village-rice-terrace-and-waterfall-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "The coffee plantations",
            icon: "leaf",
            content: "The road from Ubud to Kintamani is lined with agro-tourism stops calling themselves coffee plantations: a walk past coffee, cocoa, vanilla and cinnamon plants, then a tasting tray of a dozen flavoured teas and coffees, free, with a shop at the end. The product they push is kopi luwak, coffee cherries eaten and passed by the palm civet, sold by the cup at a high price. Some of these stops keep civets in small cages to show visitors, which is the part to ask about; the answer tells you what kind of place it is. A ten-minute tasting is a pleasant break on the road. It is not a plantation visit.",
            tourCard: {
              slug: "ubud-balinese-cooking-class-9-dishes-and-local-market-ubud",
              title: "Ubud Balinese Cooking Class: 9 Dishes and Local Market (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 22.88",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-balinese-cooking-class-9-dishes-and-local-market-ubud/img0/1600.webp",
            },
          },
          {
            title: "Building the day",
            icon: "map",
            content: "The usual order from Ubud is Penglipuran first, at about 9:00, then Kintamani for the view while Batur is clear, lunch on the rim, and a stop at Tegallalang or a coffee garden on the way down. The day pairs well with a Bangli waterfall on the way up; see the [waterfalls guide](/indonesia/ubud/ubud-waterfalls-guide). Anyone doing the [Batur sunrise trek](/indonesia/ubud/mount-batur-sunrise-guide) has already been in the caldera and can skip the viewpoint. For the eastern alternative, the [Lempuyang guide](/indonesia/ubud/lempuyang-gate-of-heaven-guide) covers the other big day out.",
            tourCard: {
              slug: "market-to-table-cooking-class-and-local-herb-discovery-in-ubud",
              title: "Market to Table Cooking Class and Local Herb Discovery in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.27",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/market-to-table-cooking-class-and-local-herb-discovery-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is the Kintamani viewpoint worth it?", a: "Yes, especially before 11:00 when Batur and the lake are clear. From Penelokan on the caldera rim you look down on the volcano, the 1968 lava field and Lake Batur. Bring a layer; it is windy and cool." },
          { q: "What is Penglipuran village?", a: "A traditional Balinese village in Bangli that keeps its original layout: one stone lane, matching compound gates, bamboo-shingle roofs and no vehicles. Families live in every compound. There is a small entry fee." },
          { q: "Is kopi luwak ethical?", a: "Often not. Some coffee stops on the Kintamani road keep civets in cages for display. Ask before buying; the tasting itself is free." },
          { q: "How far is Kintamani from Ubud?", a: "About an hour and a quarter by car to the Penelokan viewpoint. Penglipuran is on the way, about 45 minutes from Ubud." },
        ],
      };

    case "ubud-art-villages-guide":
      return {
        title: "Ubud's Art Villages: Celuk Silver, Mas Woodcarving, Batuan Painting, and the Museums",
        seoTitle: "Ubud Art Villages Guide 2026",
        description: "Which village makes what, how the workshops work, where the real collections are, and how to see the craft road without the coach-tour showrooms.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/craft-your-own-silver-ring-and-arma-art-gallery-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "landmark", label: "Celuk", value: "Silver and gold work, on the road from Denpasar" },
          { icon: "landmark", label: "Mas", value: "Woodcarving in hibiscus, jackfruit and ebony" },
          { icon: "landmark", label: "Batuan", value: "The Batuan painting style since the 1930s" },
          { icon: "landmark", label: "Batubulan", value: "Stone carving and the Barong dance" },
          { icon: "ticket", label: "Museums", value: "Neka, Puri Lukisan, ARMA; entry under 150,000 rupiah" },
          { icon: "clock", label: "Time", value: "A morning for the villages, an afternoon for a museum" },
        ],
        sections: [
          {
            title: "The craft road",
            icon: "map",
            content: "The road from Denpasar up to Ubud passes through a string of villages that each specialise, a pattern that goes back to the courts that patronised them. Batubulan carves paras stone into the statues at every temple gate; Celuk works silver and gold, mostly for jewellery; Mas carves wood, from tourist masks to the fine hibiscus pieces in the galleries; and Batuan paints in the dense, dark, crowded style that a group of its painters developed in the 1930s. Sukawati has the art market and Peliatan, at Ubud's edge, is the dance village.\n\nEvery coach tour stops at a showroom in each, and those showrooms are large, air-conditioned and expensive. The workshops behind them are where the work is done, and most will let you watch.",
            tourCard: {
              slug: "craft-your-own-silver-ring-and-arma-art-gallery-tour-in-ubud",
              title: "Craft Your Own Silver Ring and ARMA Art Gallery Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 64.84",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/craft-your-own-silver-ring-and-arma-art-gallery-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Workshops and classes",
            icon: "users",
            content: "Watching is free at most family workshops if you ask; buying is not expected. Classes take the same skills into a few hours with an instructor and you leave with the piece: a silver ring or pendant made from sheet and wire with saw, file and torch in Celuk or Ubud; a small carving in soft wood in Mas; a batik panel with wax and dye; a painting lesson in the Batuan or Keliki miniature style. Classes run three to four hours, the studios provide everything, and the results are better than you expect because the instructors do the hard cuts. Book for the morning; workshops are hot by afternoon.",
            tourCard: {
              slug: "ubud-tour-with-royal-palace-art-village-and-museums",
              title: "Ubud Tour with Royal Palace, Art Village and Museums",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 123.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-tour-with-royal-palace-art-village-and-museums/img0/1600.webp",
            },
          },
          {
            title: "The museums",
            icon: "landmark",
            content: "Three collections are worth an afternoon. Puri Lukisan, on the main street, was founded in 1956 and holds the Pita Maha generation, the painters who worked with Walter Spies and Rudolf Bonnet in the 1930s and created the Ubud style. The Neka Art Museum in Sanggingan has the broadest survey, including foreign painters who settled on Bali. ARMA, the Agung Rai museum in Pengosekan, has a fine Batuan collection, gardens, and a dance stage most evenings. Entry to each is modest and includes a drink at Neka and ARMA. None takes more than an hour and a half unless you want it to.",
            tourCard: {
              slug: "hands-on-silver-jewelry-making-near-ubud-s-monkey-forest-ubud",
              title: "Hands-On Silver Jewelry Making Near Ubud's Monkey Forest (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.21",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hands-on-silver-jewelry-making-near-ubud-s-monkey-forest-ubud/img0/1600.webp",
            },
          },
          {
            title: "Buying, honestly",
            icon: "ticket",
            content: "Prices in the showrooms are two to three times the workshop price and the coach driver's commission is inside them. In a workshop, ask the price, offer about two-thirds, and settle in the middle; silver is sold by weight plus work, and 925 should be stamped. Genuine antiques are rare and export of anything old is regulated, so treat every antique as a reproduction unless there is paperwork. For a day that combines the villages with a class, see the [cooking class guide](/indonesia/ubud/ubud-cooking-class-guide) for the food side and the [getting around guide](/indonesia/ubud/getting-around-ubud) for hiring a driver for the loop.",
            tourCard: {
              slug: "traditional-heritage-batik-painting-experience-in-ubud",
              title: "Traditional Heritage Batik Painting Experience in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 38.14",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/traditional-heritage-batik-painting-experience-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which village near Ubud is famous for silver?", a: "Celuk, on the road up from Denpasar, is the silver and gold village. Workshops let you watch and many run half-day jewellery-making classes." },
          { q: "Where is woodcarving done near Ubud?", a: "Mas, just south of Ubud, in hibiscus, jackfruit and ebony. The showrooms on the main road are expensive; the workshops behind them are where the carving happens." },
          { q: "Which museum in Ubud is best?", a: "Puri Lukisan for the original Ubud school of the 1930s, Neka for the broadest survey, ARMA for Batuan paintings and gardens. Each takes an hour or two." },
          { q: "Can I take a craft class in Ubud?", a: "Yes: silver jewellery, woodcarving, batik and painting classes run three to four hours with an instructor and materials, and you keep what you make." },
        ],
      };

    case "how-many-days-in-ubud":
      return {
        title: "How Many Days in Ubud: Two, Three, or a Week, and What Each Gets You",
        seoTitle: "How Many Days in Ubud 2026",
        description: "A straight answer on how long Ubud needs, what fits in two days and three, when a week makes sense, and how it balances against the coast and Nusa Penida.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/buggy-adventure-two-waterfalls-and-lunch-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Minimum", value: "Two nights for the terraces, a temple and a waterfall" },
          { icon: "clock", label: "Right", value: "Three to four nights, with Batur or east Bali" },
          { icon: "clock", label: "Week", value: "Only if you want the classes and the slow days" },
          { icon: "map", label: "To the coast", value: "Canggu and Uluwatu 1 to 1.5 hours" },
          { icon: "map", label: "To Nusa Penida", value: "Sanur boat 45 min from Ubud, then 45 min crossing" },
          { icon: "moon", label: "Nyepi", value: "One day a year, everything closes; plan around it" },
        ],
        sections: [
          {
            title: "Two days",
            icon: "clock",
            content: "Two nights in Ubud is enough for the essentials if you start early both days. Day one: Tegallalang before 8:30, Tirta Empul and Gunung Kawi, the Monkey Forest at four, dinner and a dance performance. Day two: a Bangli waterfall or two in the morning, a swing or the art villages, the Campuhan ridge at sunset. You will not have done Batur or east Bali, and you will not have sat still for an hour, but you will have seen why people come.",
            tourCard: {
              slug: "buggy-adventure-two-waterfalls-and-lunch-tour-in-ubud",
              title: "Buggy Adventure, Two Waterfalls, and Lunch Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 97.50",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/buggy-adventure-two-waterfalls-and-lunch-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Three or four days",
            icon: "clock",
            content: "This is the right length for most people. It adds the Mount Batur sunrise, which takes a night's sleep out of the schedule and needs a slow day after it, and one of the big days out: east Bali for Lempuyang, Tirta Gangga and Sidemen, or north to Kintamani and Penglipuran. It also leaves room for one thing that is not a sight: a cooking class, a silver workshop, a morning at a spa, or an ATV and rafting day. Four nights lets you take the afternoons off, which in Ubud's heat is not a luxury.",
            tourCard: {
              slug: "ubud-s-waterfall-trail-four-hidden-falls-ubud",
              title: "Ubud\u2019s Waterfall Trail: Four Hidden Falls (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 91.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-s-waterfall-trail-four-hidden-falls-ubud/img0/1600.webp",
            },
          },
          {
            title: "A week",
            icon: "clock",
            content: "A week only makes sense if you want Ubud as a base rather than a list. That means yoga or a retreat, several classes, a few days of doing very little in a villa with a rice-field view, and day trips that spread out rather than stack. It works well for the wet season, when an early start each morning gets the sights before the two o'clock rain and the afternoons are for the pool. It works badly if you are counting sights, because by day four you have seen them.",
            tourCard: {
              slug: "waterfall-rice-terraces-and-monkey-forest-private-tour-in-ubud",
              title: "Waterfall, Rice Terraces and Monkey Forest Private Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.04",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/waterfall-rice-terraces-and-monkey-forest-private-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "Against the rest of Bali",
            icon: "map",
            content: "Most first visits split between Ubud and the coast. The usual shape is three nights here then three or four in Canggu or Uluwatu, with Nusa Penida as a day trip or one night from the south. Ubud first means the sunrise trek is done before the beach days; coast first means arriving in Ubud rested. Either order works and the transfer is 60 to 90 minutes. The [Bali itineraries](/indonesia/itineraries) lay out 3, 5, 7 and 10 day versions with real tours on each day, and the [best time to visit guide](/indonesia/ubud/best-time-to-visit-ubud) covers the seasons and Nyepi.",
            tourCard: {
              slug: "romantic-buggy-for-two-and-couples-swing-experience-in-ubud",
              title: "Romantic Buggy for Two and Couples Swing Experience in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 267.01",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/romantic-buggy-for-two-and-couples-swing-experience-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "How many days do you need in Ubud?", a: "Three to four nights for most people: the terraces, temples and waterfalls, a Batur sunrise with a slow day after, and one big day out to east or north Bali. Two nights covers the essentials; a week only if you want a base for classes and rest." },
          { q: "Is two days enough for Ubud?", a: "Yes for the essentials if you start early: Tegallalang, Tirta Empul, a waterfall, the Monkey Forest and the ridge walk. Not enough for Batur or east Bali." },
          { q: "Should I stay in Ubud or Canggu?", a: "Both, on a first visit: three nights in Ubud for the interior, three or four on the coast. The transfer is 60 to 90 minutes." },
          { q: "Is Ubud worth a week?", a: "As a base for yoga, classes and slow days, yes. As a sightseeing stop, no; four days covers the sights." },
        ],
      };

    case "ubud-with-kids":
      return {
        title: "Ubud with Kids: What Works, What Does Not, and the Ages That Matter",
        seoTitle: "Ubud with Kids Guide 2026",
        description: "Which Ubud activities suit children by age, the ones to skip, the heat and pool question, and how to keep a family day short enough to enjoy.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/waterfall-rice-terraces-and-monkey-forest-private-tour-in-ubud/img0/1600.webp",
        fastFacts: [
          { icon: "users", label: "Best ages", value: "5 and up for most activities; under 5 is a pool holiday" },
          { icon: "sun", label: "Heat", value: "Plan sights before 11:00 and after 4:00" },
          { icon: "droplet", label: "Rafting", value: "Ayung river from about 7 years old" },
          { icon: "mountain", label: "Batur", value: "Realistic from about 10, and only for keen walkers" },
          { icon: "shield", label: "Monkeys", value: "Fine for children who follow rules; no food, no eye contact" },
          { icon: "car", label: "Getting about", value: "A driver for the day; no car seats by default, bring your own" },
        ],
        sections: [
          {
            title: "What works",
            icon: "users",
            content: "Children like Ubud more than parents expect, provided the days are short. The Monkey Forest is the obvious hit from about five, with the rules explained first. Tegallalang works if you walk down into the terraces rather than look at them, and the swings are a guaranteed win from about six, on the low swing with a parent. The Ayung river rafting takes children from around seven and is the most talked-about day of most family trips. A cooking class in a family compound, the Bali Bird Park at Batubulan, the Mason Elephant Park at Taro and the Bali Zoo at Singapadu are the reliable half-days, and Tibumana waterfall is a safe swim for confident swimmers.",
            tourCard: {
              slug: "waterfall-rice-terraces-and-monkey-forest-private-tour-in-ubud",
              title: "Waterfall, Rice Terraces and Monkey Forest Private Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.04",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/waterfall-rice-terraces-and-monkey-forest-private-tour-in-ubud/img0/1600.webp",
            },
          },
          {
            title: "What does not",
            icon: "shield",
            content: "Mount Batur is a 2am start and a two-hour climb in the dark and cold; from about ten and only for a child who genuinely wants to. Lempuyang is two hours each way for a queue. Tirta Empul is fine to see but the cold pool and the ritual are not for small children. ATV driving ages are 16 or 18 and passengers from about five, which is fine, but the mud is total. Temple visits in general need to be short, in the morning, and the sarong rule applies to children too. Long private-car loops of five or six stops are the days that end in tears.",
            tourCard: {
              slug: "ubud-full-day-all-inclusive-highlights-tour",
              title: "Ubud Full-Day All-Inclusive Highlights Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.21",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-full-day-all-inclusive-highlights-tour/img0/1600.webp",
            },
          },
          {
            title: "Heat, food and pools",
            icon: "sun",
            content: "Ubud is hot and humid from mid-morning, and the single best decision for a family is a hotel or villa with a pool and a plan that puts the sights before eleven and after four. Warungs serve plain rice, chicken satay, fried noodles and fruit that every child eats; ask for tidak pedas, not spicy, and it will come without the sambal. Bottled water everywhere, and nobody minds a child in a restaurant. Pharmacies in town stock what you need, and the international clinics in Ubud handle the usual scrapes.",
            tourCard: {
              slug: "ubud-balinese-cooking-class-9-dishes-and-local-market-ubud",
              title: "Ubud Balinese Cooking Class: 9 Dishes and Local Market (Ubud)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 22.88",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ubud-balinese-cooking-class-9-dishes-and-local-market-ubud/img0/1600.webp",
            },
          },
          {
            title: "Building a family day",
            icon: "clock",
            content: "One sight in the morning, lunch, pool, one thing at four. That is a good day. A driver for the day makes it possible, since taxis are scarce and scooters with children are a bad idea; note that cars come without child seats unless you ask, and even then bring your own for the very small. For the full list of what each activity involves, see the [waterfalls](/indonesia/ubud/ubud-waterfalls-guide), [Monkey Forest](/indonesia/ubud/ubud-monkey-forest-guide) and [ATV and rafting](/indonesia/ubud/ubud-atv-and-rafting-guide) guides, and the [getting around guide](/indonesia/ubud/getting-around-ubud) for drivers.",
            tourCard: {
              slug: "gianyar-family-friendly-horse-riding-tour-in-ubud",
              title: "Gianyar: Family-Friendly Horse Riding Tour in Ubud",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.58",
              duration: "30 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/gianyar-family-friendly-horse-riding-tour-in-ubud/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Ubud good for kids?", a: "Yes from about five, with short days: the Monkey Forest, the swings, the Ayung river rafting from about seven, the bird park and a cooking class are the reliable hits. Under five it is mostly a pool holiday with one outing a day." },
          { q: "Can children go rafting in Ubud?", a: "On the Ayung river, from about seven years old in the dry season. The Telaga Waja is for older children and adults." },
          { q: "Can kids climb Mount Batur?", a: "From about ten, and only keen walkers: it is a 2am start and a two-hour climb in the dark and cold." },
          { q: "Are there car seats in Bali?", a: "Not by default. Ask the operator when booking and bring your own seat for very small children." },
        ],
      };

    default:
      return null;
  }
}
