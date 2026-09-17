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

    default:
      return null;
  }
}
