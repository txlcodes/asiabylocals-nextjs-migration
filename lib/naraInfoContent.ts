// Nara authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getNaraInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const TOUR_CARD_DEER = {
  slug: 'nara-park-walking-tour',
  title: "Nara: Deer Park, Todai-ji Temple, & Great Buddha Walking Tour",
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 30.32',
  duration: '2.5 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788031886/asiabylocals/tours/nara-deer-park-todaiji-walking-tour/img0.jpg',
};

const TOUR_CARD_MORNING = {
  slug: 'nara-park-morning-tour',
  title: 'Nara Early Morning Deer Park & Todai-ji Walk (Beat the Crowds)',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 48.73',
  duration: '4 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788031879/asiabylocals/tours/nara-early-morning-tour/img0.jpg',
};

const TOUR_CARD_KIMONO = {
  slug: 'naramachi-old-town-mini-tour',
  title: 'Nara Kimono Rental & Traditional Tea Ceremony Experience',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 57.72',
  duration: '1.5 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788031909/asiabylocals/tours/nara-kimono-tea-ceremony-experience/img0.jpg',
};

const TOUR_CARD_DEEP = {
  slug: 'yakushi-ji-temple-spiritual-tour',
  title: 'Deep Nara: Private Temple & Mountain Escape Beyond the Deer Park',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 497.80',
  duration: '8 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788031897/asiabylocals/tours/nara-deep-temple-mountain-escape/img0.png',
};

export function getNaraInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case 'best-time-to-visit-nara':
      return {
        title: 'The Best Time to Visit Nara: A Season-by-Season Guide',
        seoTitle: 'Best Time to Visit Nara',
        description: 'When to visit Nara for the deer, the crowds, cherry blossom and autumn colour — an honest month-by-month breakdown.',
        fastFacts: [
          { icon: 'calendar', label: 'Founded', value: '710 CE, as Heijo-kyo, Japan\'s first permanent capital' },
          { icon: 'flower', label: 'Cherry blossom', value: 'Late March to early April, Nara Park and Yoshinoyama' },
          { icon: 'leaf', label: 'Autumn colour', value: 'Mid-to-late November, peaking around Nara Park and Todai-ji' },
          { icon: 'sun', label: 'Deer rutting season', value: 'October-December — bucks are more aggressive; Nara city issues an annual warning' },
        ],
        sections: [
          {
            title: 'Nara Is a Day Trip Almost Everyone Does — Time It to Avoid the Crush',
            icon: 'calendar-days',
            content: "Nara sits roughly 45 minutes from Kyoto and 40 minutes from Osaka by train, which makes it one of the most common day trips in the Kansai region — and also one of the most crowded by early afternoon. Tour buses from both cities converge on Nara Park and Todai-ji between about 11am and 3pm, when the approach to the Great Buddha Hall can genuinely bottleneck. The single biggest lever you have isn't the season, it's the hour: arrive before 9:30am or after 3:30pm and the same sights feel completely different.\n\nThat said, season does matter. Nara has no rainy-season or typhoon concerns that would push you away from a date, but it does have two genuine peaks worth planning around — cherry blossom and autumn colour — and one genuine reason for caution, deer rutting season.",
            tourCard: TOUR_CARD_MORNING,
          },
          {
            title: 'Spring: Cherry Blossom and the Best All-Round Weather',
            icon: 'flower',
            content: "Late March into early April brings cherry blossom to Nara Park itself, with the deer wandering beneath pink canopies — a genuinely striking combination you don't get in Kyoto's more manicured gardens. Temperatures in April sit comfortably in the high teens Celsius, making it the most pleasant month to be walking around outdoors all day. The trade-off is that this is also peak domestic travel season in Japan, so hotels in nearby Kyoto and Osaka book up and Nara Park itself is busiest during exactly this window.\n\nFor blossom further afield, Yoshinoyama, about an hour south of central Nara, is one of Japan's most famous cherry blossom mountains, with over 30,000 trees blooming in a staggered wave up the slopes from early to mid April. It's a serious day trip in its own right, not a Nara Park add-on.",
            tourCard: TOUR_CARD_DEER,
          },
          {
            title: 'Autumn: Quieter Than Spring, Arguably Better Light',
            icon: 'leaf',
            content: "Mid-to-late November is Nara's autumn colour peak, when the maples around Todai-ji, Kasuga Taisha and Nara Park turn deep red and gold against the temples' dark wood. Crowds are real here too, but generally lighter than the cherry blossom weeks, and the cooler air — daytime highs around 15-18°C — makes the walking between sights more comfortable than a humid summer visit. This is our pick for the best overall balance of weather, light and crowd levels.",
            tourCard: TOUR_CARD_DEEP,
          },
          {
            title: 'Summer and the Deer Rutting Season Warning',
            icon: 'sun',
            content: "July and August in Nara are hot and humid, typically in the low-to-mid 30s°C, and while the deer and temples are unaffected, walking the full loop from Kintetsu Nara Station to Kasuga Taisha in midday heat is genuinely tiring. Early morning visits matter even more in summer for comfort, not just crowds.\n\nOne thing worth knowing regardless of when you visit: October through December is rutting season for Nara's sika deer, and Nara city issues an annual public warning that bucks become notably more aggressive during this window, occasionally headbutting or charging visitors, particularly around feeding. It doesn't mean avoid Nara in autumn — the colour is excellent and incidents are a small minority of encounters — but keep children back from bucks with antlers, and follow the same caution locals do: don't run, don't tease with crackers, and back away calmly if a deer squares up.",
            tourCard: TOUR_CARD_KIMONO,
          },
        ],
        faqs: [
          { q: 'Is Nara worth visiting outside cherry blossom or autumn?', a: 'Yes — Todai-ji and the deer park are the draw year-round, and outside the two peak color windows you get noticeably lighter crowds for the same core experience. Winter (December-February) is the quietest and coldest, with occasional light snow dusting the temple roofs, which photographs beautifully and is rarely photographed by other tourists simply because fewer people come then.' },
          { q: 'How many hours do I actually need in Nara?', a: 'Nara Park, Todai-ji and Kasuga Taisha comfortably fill 3-4 hours of walking. Add Naramachi\'s old merchant quarter and you\'re looking at a full day, which is exactly how most Kyoto- or Osaka-based visitors treat it — one day trip covers the essentials.' },
          { q: 'Are the deer dangerous?', a: 'Generally no — they\'re genuinely tame from centuries of contact with visitors — but they are wild animals, not pets. They can nip at clothing, bags or hands holding crackers, and bucks get more assertive during the October-December rutting season. Keep crackers out of sight until you\'re ready to feed, and don\'t corner or chase a deer for a photo.' },
          { q: 'Is Nara better as a day trip from Kyoto or Osaka?', a: 'Both work almost equally well — Kyoto is about 45 minutes by JR or Kintetsu, Osaka about 40 minutes by Kintetsu from Namba. If you\'re short on time, Osaka\'s Kintetsu line is marginally faster and drops you closer to Nara Park.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is Nara worth visiting outside cherry blossom or autumn?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — Todai-ji and the deer park are the draw year-round, and outside the two peak color windows you get noticeably lighter crowds for the same core experience. Winter (December-February) is the quietest and coldest, with occasional light snow dusting the temple roofs, which photographs beautifully and is rarely photographed by other tourists simply because fewer people come then."}}, {"@type": "Question", "name": "How many hours do I actually need in Nara?", "acceptedAnswer": {"@type": "Answer", "text": "Nara Park, Todai-ji and Kasuga Taisha comfortably fill 3-4 hours of walking. Add Naramachi's old merchant quarter and you're looking at a full day, which is exactly how most Kyoto- or Osaka-based visitors treat it — one day trip covers the essentials."}}, {"@type": "Question", "name": "Are the deer dangerous?", "acceptedAnswer": {"@type": "Answer", "text": "Generally no — they're genuinely tame from centuries of contact with visitors — but they are wild animals, not pets. They can nip at clothing, bags or hands holding crackers, and bucks get more assertive during the October-December rutting season. Keep crackers out of sight until you're ready to feed, and don't corner or chase a deer for a photo."}}, {"@type": "Question", "name": "Is Nara better as a day trip from Kyoto or Osaka?", "acceptedAnswer": {"@type": "Answer", "text": "Both work almost equally well — Kyoto is about 45 minutes by JR or Kintetsu, Osaka about 40 minutes by Kintetsu from Namba. If you're short on time, Osaka's Kintetsu line is marginally faster and drops you closer to Nara Park."}}]}]},
        heroImage: TOUR_CARD_DEER.image,
      };

    case 'nara-deer-park-guide':
      return {
        title: "Nara Park's Sacred Deer: A Practical Visitor's Guide",
        seoTitle: 'Nara Deer Park Guide',
        description: "How to feed Nara's deer safely, what shika senbei crackers cost, and the Shinto history behind why over a thousand wild deer roam freely through the city.",
        fastFacts: [
          { icon: 'map', label: 'Park size', value: '660 hectares, home to over 1,000 free-roaming sika deer' },
          { icon: 'wallet', label: 'Deer crackers', value: 'Shika senbei sold by licensed vendors, roughly ¥200 a stack' },
          { icon: 'calendar', label: 'Protected status', value: 'Designated a National Natural Treasure in 1957' },
          { icon: 'alert-triangle', label: 'Caution window', value: 'October-December rutting season — bucks are more assertive' },
        ],
        sections: [
          {
            title: 'Why Nara Has Wild Deer Roaming the Streets',
            icon: 'info',
            content: "According to Shinto legend, the deity Takemikazuchi arrived in Nara riding a white deer to guard the newly built capital in 768 CE, when Kasuga Taisha shrine was founded. From that point, the sika deer of Nara were considered sacred messengers of the gods, and killing one was a capital offense for over a thousand years of the city's history. That protected status shaped the deer's behaviour over centuries of safe contact with people — this is why Nara's deer are so unusually calm around humans compared with wild deer almost anywhere else in the world.\n\nToday they're formally protected as a National Natural Treasure, designated in 1957, and the population is managed but not confined — they move freely between the park, the temple grounds and the surrounding streets, including occasionally into shopfronts and train station forecourts.",
            tourCard: TOUR_CARD_DEER,
          },
          {
            title: 'Feeding the Deer: What to Actually Do',
            icon: 'gift',
            content: "Shika senbei, plain rice crackers made specifically for the deer (they contain no sugar or salt, unlike human snacks), are sold from small carts throughout the park by licensed vendors for around ¥200 a stack. The deer recognise the cracker's distinctive colour and shape from meters away, and many will bow their heads before taking one — a behaviour that developed from repeated positive reinforcement with visitors, not a trained trick in the traditional sense.\n\nThe practical advice locals give matches common sense: buy crackers from an actual vendor rather than feeding the deer anything else, don't wave a cracker around to tease a deer, and once you're holding crackers expect to be surrounded quickly — deer can and do nip at bags, pockets or hands that they can smell food in, even after the crackers are gone. If you don't want the attention, keep any paper bags or visible food out of sight.",
            tourCard: TOUR_CARD_MORNING,
          },
          {
            title: 'The Rutting Season Warning, and General Deer Etiquette',
            icon: 'alert-triangle',
            content: "Nara city puts out a public advisory every year covering October through December, the deer's mating season, when bucks with fully grown antlers become measurably more aggressive and territorial. Local reports of headbutting or charging incidents rise noticeably in this window, and it isn't limited to bucks with visible antlers — startled or crowded deer of either sex can react defensively at any time of year.\n\nSensible etiquette: don't run near deer, don't corner one for a photo, keep small children within reach rather than letting them approach alone, and if a deer lowers its head and stares at you, back away slowly rather than turning your back and walking off quickly. None of this should put you off — millions of visitors interact with the deer safely every year — it's simply the difference between treating them as photogenic wildlife (which they are) versus tame pets (which they aren't).",
            tourCard: TOUR_CARD_DEEP,
          },
        ],
        faqs: [
          { q: 'Do I need to buy crackers to see the deer?', a: 'No — the deer are visible throughout the park regardless, wandering freely near the paths, Todai-ji and Kasuga Taisha. Crackers just get you closer interaction and the bowing behaviour; plenty of visitors enjoy watching without feeding at all.' },
          { q: 'Can the deer actually hurt you?', a: 'Minor nips and bumps happen and are the most common complaint, usually from deer trying to get at crackers rather than genuine aggression. Serious injuries are rare but not zero, particularly from bucks during the October-December rutting season — treat them as wild animals and keep a sensible distance when not actively feeding.' },
          { q: 'Are the deer only in Nara Park itself?', a: "No — they range through the surrounding streets, the approach to Todai-ji and Kasuga Taisha, and occasionally into Naramachi's lanes or even train station forecourts. Nara Park is simply where the highest concentration gathers, especially near the cracker vendors." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need to buy crackers to see the deer?", "acceptedAnswer": {"@type": "Answer", "text": "No — the deer are visible throughout the park regardless, wandering freely near the paths, Todai-ji and Kasuga Taisha. Crackers just get you closer interaction and the bowing behaviour; plenty of visitors enjoy watching without feeding at all."}}, {"@type": "Question", "name": "Can the deer actually hurt you?", "acceptedAnswer": {"@type": "Answer", "text": "Minor nips and bumps happen and are the most common complaint, usually from deer trying to get at crackers rather than genuine aggression. Serious injuries are rare but not zero, particularly from bucks during the October-December rutting season — treat them as wild animals and keep a sensible distance when not actively feeding."}}, {"@type": "Question", "name": "Are the deer only in Nara Park itself?", "acceptedAnswer": {"@type": "Answer", "text": "No — they range through the surrounding streets, the approach to Todai-ji and Kasuga Taisha, and occasionally into Naramachi's lanes or even train station forecourts. Nara Park is simply where the highest concentration gathers, especially near the cracker vendors."}}]}]},
        heroImage: TOUR_CARD_DEER.image,
      };

    case 'todai-ji-temple-guide':
      return {
        title: "Todai-ji Temple: The Great Buddha Hall Visitor's Guide",
        seoTitle: 'Todai-ji Temple Guide',
        description: "The history of Todai-ji's 15-metre bronze Great Buddha, why the Daibutsuden was once the largest wooden building on Earth, and what to actually look for inside.",
        fastFacts: [
          { icon: 'calendar', label: 'Built', value: '752 CE, commissioned by Emperor Shomu' },
          { icon: 'ruler', label: 'Great Buddha height', value: 'Roughly 15 metres, one of the largest bronze Buddha statues in the world' },
          { icon: 'home', label: 'Daibutsuden', value: "Rebuilt 1709 at two-thirds its original width, yet still one of the world's largest wooden buildings" },
          { icon: 'ticket', label: 'Entry', value: 'Paid entry to the Great Buddha Hall, typically open year-round with seasonal hour changes' },
        ],
        sections: [
          {
            title: 'Why Emperor Shomu Built the World\'s Largest Bronze Buddha',
            icon: 'landmark',
            content: "Todai-ji was commissioned in the 740s by Emperor Shomu, partly as a response to a run of famines, epidemics and political unrest that shook Nara-period Japan, and partly to establish Buddhism as a unifying, protective force across the country. The centrepiece, the Daibutsu, a seated bronze Buddha now standing roughly 15 metres tall, was cast in stages and formally dedicated in 752 CE in a ceremony attended by dignitaries from across East Asia — one of the most significant religious events of the era. Casting a bronze statue at that scale with 8th-century technology required an enormous share of the country's copper and tin reserves, and the project is often cited by historians as having strained the Nara-period economy.",
            tourCard: TOUR_CARD_MORNING,
          },
          {
            title: 'The Daibutsuden: Once the Largest Wooden Building on Earth',
            icon: 'home',
            content: "The hall enclosing the Great Buddha, the Daibutsuden, has burned down and been rebuilt twice across Todai-ji's history, most recently in 1709 after a 1567 fire. The current structure is actually about two-thirds the width of the original 8th-century hall — and it is still one of the largest wooden buildings in the world, which gives a sense of just how much larger the original must have been. Inside, the scale is disorienting in person: photographs don't convey how small visitors look standing at the Buddha's feet, and the hand alone is taller than an adult.\n\nA well-known detail inside the hall is a wooden pillar with a hole cut through its base, said to be exactly the size of the Great Buddha's nostril. Local tradition holds that anyone who crawls through it is guaranteed enlightenment — in practice it's mostly children and flexible adults who try, and it's a genuinely fun, low-stakes stop rather than a serious ritual.",
            tourCard: TOUR_CARD_DEER,
          },
          {
            title: 'Beyond the Great Buddha Hall',
            icon: 'map-pin',
            content: "Todai-ji's grounds extend well beyond the Daibutsuden. The Nandaimon, the Great South Gate, houses two fierce wooden guardian statues (Nio) carved in the 13th century by the sculptor Unkei and his workshop, considered among the finest examples of Kamakura-period sculpture in Japan. Further into the grounds, Nigatsu-do hall sits on a hillside with one of the best elevated views over Nara Park, and is far less crowded than the main hall — worth the short uphill walk if you have time after the Daibutsu.",
            tourCard: TOUR_CARD_DEEP,
          },
        ],
        faqs: [
          { q: 'How long should I spend at Todai-ji?', a: 'Budget 45 minutes to an hour for the Great Buddha Hall itself, plus another 20-30 minutes if you walk up to Nigatsu-do for the hillside view. It sits directly within the Nara Park deer-roaming area, so most visitors combine it naturally with feeding the deer on the walk in.' },
          { q: 'Is Todai-ji crowded?', a: "Yes, particularly from late morning through mid-afternoon and during cherry blossom and autumn colour season. Arriving at opening time or after 3:30pm noticeably thins the crowd around the Great Buddha itself." },
          { q: 'What is the pillar with the hole in it?', a: "It's a wooden support pillar inside the Daibutsuden with a hole cut through its base, said to match the exact dimensions of the Great Buddha's nostril. Local tradition says crawling through guarantees enlightenment in your next life — it's a popular, good-natured photo stop, especially for kids and smaller adults." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long should I spend at Todai-ji?", "acceptedAnswer": {"@type": "Answer", "text": "Budget 45 minutes to an hour for the Great Buddha Hall itself, plus another 20-30 minutes if you walk up to Nigatsu-do for the hillside view. It sits directly within the Nara Park deer-roaming area, so most visitors combine it naturally with feeding the deer on the walk in."}}, {"@type": "Question", "name": "Is Todai-ji crowded?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, particularly from late morning through mid-afternoon and during cherry blossom and autumn colour season. Arriving at opening time or after 3:30pm noticeably thins the crowd around the Great Buddha itself."}}, {"@type": "Question", "name": "What is the pillar with the hole in it?", "acceptedAnswer": {"@type": "Answer", "text": "It's a wooden support pillar inside the Daibutsuden with a hole cut through its base, said to match the exact dimensions of the Great Buddha's nostril. Local tradition says crawling through guarantees enlightenment in your next life — it's a popular, good-natured photo stop, especially for kids and smaller adults."}}]}]},
        heroImage: TOUR_CARD_MORNING.image,
      };

    case 'nara-day-trip-from-kyoto-osaka':
      return {
        title: 'Nara Day Trip from Kyoto or Osaka: Trains, Timing and Logistics',
        seoTitle: 'Nara Day Trip from Kyoto or Osaka',
        description: 'JR vs Kintetsu, journey times, and how to plan a Nara day trip from either Kyoto or Osaka without wasting half the day in transit.',
        fastFacts: [
          { icon: 'train', label: 'From Kyoto', value: 'About 45 min via JR Nara Line or Kintetsu Kyoto Line' },
          { icon: 'train', label: 'From Osaka', value: 'About 35-40 min via Kintetsu Nara Line from Namba' },
          { icon: 'clock', label: 'Time needed in Nara', value: '4-6 hours covers Nara Park, Todai-ji, Kasuga Taisha and Naramachi' },
          { icon: 'map-pin', label: 'Main station', value: 'Kintetsu Nara Station — closer to Nara Park than JR Nara Station' },
        ],
        sections: [
          {
            title: 'JR or Kintetsu: Which Line to Take',
            icon: 'train',
            content: "From Kyoto, the JR Nara Line runs directly to JR Nara Station in about 45 minutes on the faster Miyakoji Rapid service, and is covered by the Japan Rail Pass if you're holding one. The Kintetsu Kyoto Line also connects Kyoto to Nara in a similar time, arriving instead at Kintetsu Nara Station, which sits noticeably closer to Nara Park's main entrance — a genuinely useful difference if you're walking rather than taking a taxi.\n\nFrom Osaka, most visitors depart from Namba on the Kintetsu Nara Line, which reaches Kintetsu Nara Station in as little as 35-40 minutes on the limited express and is the fastest, most direct route from central Osaka. There's also a JR option from Osaka Station via the Yamatoji Line, useful mainly if you're already near JR Osaka rather than Namba.",
            tourCard: TOUR_CARD_MORNING,
          },
          {
            title: 'Building a Realistic Day-Trip Schedule',
            icon: 'clock',
            content: "A comfortable day trip runs: depart your base by 8-8:30am, arrive Nara by 9-9:15am, and spend the morning at Nara Park and Todai-ji before the tour-bus crowds peak around 11am. Break for lunch in Naramachi's old merchant quarter, then either continue on to Kasuga Taisha or explore Naramachi's craft shops and cafes in the afternoon, before heading back to Kyoto or Osaka by early evening.\n\nThat schedule leaves Nara feeling unrushed rather than a box-ticking sprint, which is the most common complaint from visitors who try to combine Nara with another full city in the same day. If you only have a half day free, prioritise Nara Park and Todai-ji — they're the two sights genuinely worth the trip on their own — and treat Kasuga Taisha and Naramachi as bonuses if time allows.",
            tourCard: TOUR_CARD_DEER,
          },
        ],
        faqs: [
          { q: 'Can I do Nara and Kyoto in the same day?', a: "It's possible but tight — Nara alone deserves at least 4-5 hours to be worthwhile, which leaves little of the day for a second city on top of transit time. Most visitors treat Nara as its own full day trip rather than splitting it with Kyoto sightseeing on the same date." },
          { q: 'Is Kintetsu or JR better for a Nara day trip?', a: 'Kintetsu Nara Station is closer to Nara Park, which matters if you\'re walking, while JR is the better choice if you already hold a Japan Rail Pass, since Kintetsu isn\'t covered by it. Journey times from Kyoto are similar either way.' },
          { q: 'Do I need to book train tickets in advance?', a: 'No — both the JR Nara Line and Kintetsu Nara Line run frequent regular services throughout the day, and you can simply buy a ticket or tap an IC card (like ICOCA or Suica) at the station without reservations.' },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I do Nara and Kyoto in the same day?", "acceptedAnswer": {"@type": "Answer", "text": "It's possible but tight — Nara alone deserves at least 4-5 hours to be worthwhile, which leaves little of the day for a second city on top of transit time. Most visitors treat Nara as its own full day trip rather than splitting it with Kyoto sightseeing on the same date."}}, {"@type": "Question", "name": "Is Kintetsu or JR better for a Nara day trip?", "acceptedAnswer": {"@type": "Answer", "text": "Kintetsu Nara Station is closer to Nara Park, which matters if you're walking, while JR is the better choice if you already hold a Japan Rail Pass, since Kintetsu isn't covered by it. Journey times from Kyoto are similar either way."}}, {"@type": "Question", "name": "Do I need to book train tickets in advance?", "acceptedAnswer": {"@type": "Answer", "text": "No — both the JR Nara Line and Kintetsu Nara Line run frequent regular services throughout the day, and you can simply buy a ticket or tap an IC card (like ICOCA or Suica) at the station without reservations."}}]}]},
        heroImage: TOUR_CARD_DEEP.image,
      };

    case 'nara-half-day-itinerary':
      return {
        title: 'Nara in Half a Day: A Realistic Hour-by-Hour Itinerary',
        seoTitle: 'Nara Half-Day Itinerary',
        description: 'A realistic 4-hour Nara itinerary covering Nara Park, Todai-ji and Kasuga Taisha, timed for when you only have half a day.',
        fastFacts: [
          { icon: 'clock', label: 'Total time', value: 'About 4 hours, Kintetsu Nara Station to Kasuga Taisha and back' },
          { icon: 'footprints', label: 'Walking distance', value: 'Roughly 3-4 km round trip, entirely on foot' },
          { icon: 'sunrise', label: 'Best start time', value: 'Before 9:30am to beat the tour-bus crowds' },
        ],
        sections: [
          {
            title: 'Hour by Hour',
            icon: 'clock',
            content: "**Hour 1 — Kintetsu Nara Station to Nara Park:** Start at the station and walk roughly 15 minutes into Nara Park itself. This is your best window with the deer, before crowds and heat build — buy a stack of shika senbei from a licensed vendor if you want to feed them, and budget real time here rather than rushing through.\n\n**Hour 2 — Todai-ji:** Continue to Todai-ji and its Great Buddha Hall, the single most important stop in Nara. Give the Daibutsu itself 30-40 minutes, then, if your legs are willing, the short uphill walk to Nigatsu-do for a quieter elevated view over the park.\n\n**Hour 3 — Kasuga Taisha approach:** Walk the stone-lantern-lined path toward Kasuga Taisha, Nara's most important Shinto shrine, founded in 768 CE and famous for its thousands of donated bronze and stone lanterns. You don't need to go deep into the shrine complex on a half-day schedule — the walk itself, through forest and lanterns, is much of the experience.\n\n**Hour 4 — Naramachi or return:** With time left, detour into Naramachi's old merchant quarter for a coffee or light lunch in a converted Edo-period townhouse, then head back to Kintetsu Nara Station for your return train.",
            tourCard: TOUR_CARD_DEER,
          },
        ],
        faqs: [
          { q: 'Is 4 hours really enough for Nara?', a: "It covers the essentials comfortably — Nara Park, Todai-ji and the walk to Kasuga Taisha — but you'll be moving at a steady pace rather than lingering. If you can stretch to a full day, add proper time in Naramachi and consider a guided tour so you're not spending part of your limited hours navigating." },
          { q: 'What should I skip if I only have 3 hours?', a: 'Cut the walk to Kasuga Taisha and Naramachi, and focus entirely on Nara Park and Todai-ji — those two alone are worth the trip and can be done unhurried in about 2.5-3 hours including deer time.' },
          { q: 'Should I book a guide for a half-day visit?', a: "It genuinely helps on a tight schedule — a guide keeps the route efficient and adds historical context you'd otherwise miss reading signage on the move, which matters more when time is short than when you have a full day to explore at your own pace." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is 4 hours really enough for Nara?", "acceptedAnswer": {"@type": "Answer", "text": "It covers the essentials comfortably — Nara Park, Todai-ji and the walk to Kasuga Taisha — but you'll be moving at a steady pace rather than lingering. If you can stretch to a full day, add proper time in Naramachi and consider a guided tour so you're not spending part of your limited hours navigating."}}, {"@type": "Question", "name": "What should I skip if I only have 3 hours?", "acceptedAnswer": {"@type": "Answer", "text": "Cut the walk to Kasuga Taisha and Naramachi, and focus entirely on Nara Park and Todai-ji — those two alone are worth the trip and can be done unhurried in about 2.5-3 hours including deer time."}}, {"@type": "Question", "name": "Should I book a guide for a half-day visit?", "acceptedAnswer": {"@type": "Answer", "text": "It genuinely helps on a tight schedule — a guide keeps the route efficient and adds historical context you'd otherwise miss reading signage on the move, which matters more when time is short than when you have a full day to explore at your own pace."}}]}]},
        heroImage: TOUR_CARD_MORNING.image,
      };

    default:
      return null;
  }
}
