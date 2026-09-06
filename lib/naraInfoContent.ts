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


const TOUR_CARD_KASUGA = {
  slug: 'kasuga-taisha-morning-tour',
  title: 'Nara Morning Trip from Kyoto by Coach: Kasuga Taisha, Deer Park and the Great Buddha',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 90',
  duration: '4 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788084416/asiabylocals/tours/nara-from-kyoto-nara-guided-morning-tour/img0.png',
};

const TOUR_CARD_UNESCO = {
  slug: 'kintetsu-nara-station-guided-tour',
  title: 'Nara in Three UNESCO Sites: Kofuku-ji, Todai-ji and Kasuga Taisha',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 87',
  duration: '3 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788084380/asiabylocals/tours/nara-nara-3-unesco-sites-tour-with-big-buddha-deer/img0.jpg',
};

const TOUR_CARD_MOCHI = {
  slug: 'nara-park-walking-walking-tour',
  title: 'Nara Walking Tour: Sacred Deer, the Great Buddha and Naramachi Mochi',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 59',
  duration: '4 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788084467/asiabylocals/tours/nara-nara-deer-great-buddha-traditional-mochi-tasting/img0.jpg',
};

const TOUR_CARD_SAKE = {
  slug: 'kintetsu-nara-station-walking-tour',
  title: 'Nara Sake Walk: Tastings, Specialty Shops and Back Streets',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 128',
  duration: '3 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788084430/asiabylocals/tours/nara-nara-sake-walk-brewery-visit-tastings-local-streets/img0.jpg',
};

const TOUR_CARD_YOSHINO = {
  slug: 'kimpusenji-temple-full-day-tour',
  title: 'Mt Yoshino Cherry Blossom Day Trip from Osaka with Blue Symphony Train',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 178',
  duration: '8 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788086099/asiabylocals/tours/nara-direct-nara-30-000-cherry-blossom-tour-to-mt-yoshin/img0.webp',
};

const TOUR_CARD_YOSHINO_AUT = {
  slug: 'kimpusenji-temple-symphony-full-day-tour',
  title: 'Mount Yoshino Autumn Foliage Day Trip by Blue Symphony Train from Osaka',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 166',
  duration: '8 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788086203/asiabylocals/tours/nara-direct-autumn-in-japan-nara-fall-foliage-tour-from-/img0.webp',
};

const TOUR_CARD_BIKE = {
  slug: 'nara-park-beaten-bike-tour',
  title: "Nara E-Bike Tour: Todai-ji, Deer Park & Off-the-Beaten-Path Knife Shop",
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 63',
  duration: '3 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788083800/asiabylocals/tours/nara-ebike-highlights-tour/img0.jpg',
};

const TOUR_CARD_MORNING2 = {
  slug: 'nara-park-morning-morning-tour',
  title: 'Early Morning Nara from Kyoto: Deer Park, Kasuga Taisha & the Great Buddha',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 70',
  duration: '5 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788086074/asiabylocals/tours/nara-direct-nara-morning-tour-from-kyoto-deer-park-todai/img0.webp',
};

const TOUR_CARD_TATAMI = {
  slug: 'nara-townhouse-mini-tour',
  title: 'Make Your Own Mini Tatami Mat in a Nara Townhouse, with Tea and Sweets',
  description: 'A top-rated Nara experience, bookable directly through AsiaByLocals.',
  price: 'From USD 49',
  duration: '1 hour',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788084350/asiabylocals/tours/nara-nara-tatami-making-workshop-with-tea-and-sweets/img0.jpg',
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

    case "kasuga-taisha-guide":
      return {
        title: "Kasuga Taisha: The Lantern Shrine, and the Two Nights They Are Lit",
        seoTitle: "Kasuga Taisha Guide",
        description: "Three thousand lanterns, but they are lit on only three nights a year. What Kasuga Taisha actually looks like on a normal day, and how to see the ones that are always burning.",
        fastFacts: [
          { icon: "calendar", label: "Founded", value: "768 CE, as the tutelary shrine of the Fujiwara clan" },
          { icon: "flame", label: "Lanterns", value: "About 3,000 — roughly 2,000 stone, 1,000 bronze, donated over 800 years" },
          { icon: "sparkles", label: "Lit on", value: "3 February (Setsubun Mantoro) and 14–15 August (Chugen Mantoro) only" },
          { icon: "ticket", label: "Grounds", value: "Free to enter; the inner offering hall and Man'yo garden are paid" },
        ],
        sections: [
          {
            title: "The Photograph You Have Seen Is Three Nights a Year",
            icon: "flame",
            content: "Nearly every image of Kasuga Taisha that circulates online shows the same thing: hundreds of bronze lanterns glowing along a vermilion corridor, or stone lanterns burning in the dark under cedar trees. It is a genuinely extraordinary sight, and it is also the single most misleading picture in Nara tourism, because those lanterns are lit on **three nights of the year** and no others.\n\nThe two festivals are Setsubun Mantoro, on 3 February, and Chugen Mantoro, on 14 and 15 August. On those nights all roughly 3,000 lanterns are lit at once — the stone ones lining the approach from the Ninotorii gate up to the main sanctuary, the bronze ones hanging along the painted corridors. Outside those dates the lanterns are still there, still beautiful, but unlit: weathered stone under moss, green-black bronze in the shade.\n\nThis is worth knowing before you plan, not after. If the lantern photograph is the reason you are going, you need to be in Nara in early February or mid-August. If you cannot be, go anyway — but go for the shrine, the forest and the deer, and set expectations accordingly.",
            tourCard: TOUR_CARD_KASUGA,
          },
          {
            title: "There Is One Place the Lanterns Are Always Lit",
            icon: "lightbulb",
            content: "There is a workaround, and most day-trippers walk straight past it. Inside the paid inner area sits the **Fujinami-no-Ya**, a dark corridor room where a section of hanging bronze lanterns is kept lit year-round, with mirrors at either end multiplying them into what looks like an infinite tunnel of flame.\n\nIt costs a small additional admission on top of the free outer grounds, it takes about ten minutes, and it is the closest you will get to the festival image on an ordinary Tuesday in May. Almost nobody queues for it. If you have seen the Mantoro photographs and are visiting outside the festival dates, this is the thing to pay for.",
            tourCard: TOUR_CARD_UNESCO,
          },
          {
            title: "The Walk Up Matters More Than the Building",
            icon: "trees",
            content: "Kasuga Taisha is not a single structure you photograph and leave. The approach runs roughly 1.3 km from the edge of Nara Park through **Kasugayama Primeval Forest**, a stretch of woodland where logging and hunting have been banned since 841 CE — nearly twelve centuries of protection, which is why the trees are the size they are.\n\nStone lanterns line the path the whole way, donated over centuries by aristocrats, samurai and ordinary worshippers; look closely and you will find family names and dates carved into them. Deer drift across the path throughout. The walk takes about twenty-five minutes at a normal pace and it is the actual experience — the vermilion buildings at the top are the punctuation, not the sentence.\n\nIf you are short on time, a bus runs from Kintetsu Nara Station to the Kasuga Taisha Honden stop, which puts you near the top and skips the forest. That is a reasonable trade if you have ninety minutes in Nara. It is a poor one if you have a full day.",
            tourCard: TOUR_CARD_MOCHI,
          },
          {
            title: "When to Go, and What Else Is Right There",
            icon: "clock",
            content: "The shrine opens early — the outer grounds from around 6:00 or 6:30 depending on the season — and this is the one sight in Nara where an early start changes the character of the place rather than just the crowd count. At 7am the forest approach is often empty, misty, and loud with birds. By 11am it is a queue of tour groups.\n\nKasuga Taisha also sits at the far end of the classic Nara walking route, which is why it is usually visited last and usually rushed. Consider reversing it: start at Kasuga Taisha at opening, walk back down through the forest to **Todai-ji** and the Great Buddha mid-morning, and finish in Naramachi for lunch. You will hit each site before its own peak rather than after.\n\nThe **Man'yo Botanical Garden**, immediately beside the shrine, plants some 300 species mentioned in the Man'yoshu, Japan's oldest poetry anthology. Its wisteria trellises peak from late April into early May and are the reason to add it; outside that window it is pleasant but skippable.",
            tourCard: TOUR_CARD_MORNING2,
          },
        ],
        faqs: [
          { q: "Are the lanterns at Kasuga Taisha lit every night?", a: "No. All 3,000 are lit on only three nights a year — 3 February for Setsubun Mantoro, and 14 and 15 August for Chugen Mantoro. On every other night they are unlit. The exception is the Fujinami-no-Ya room inside the paid area, where a mirrored corridor of bronze lanterns is kept lit year-round." },
          { q: "Is Kasuga Taisha free to visit?", a: "The outer grounds and the lantern-lined approach through the forest are free. The inner offering hall, the Fujinami-no-Ya lantern room and the Man'yo Botanical Garden each charge a small separate admission." },
          { q: "How long does Kasuga Taisha take?", a: "Budget about 90 minutes including the 1.3 km forest approach each way. Add 30 minutes if you are also doing the Man'yo Botanical Garden, and about 10 for the lantern room." },
          { q: "Can I walk to Kasuga Taisha from Todai-ji?", a: "Yes, and it is the normal way to do it — roughly 20 to 25 minutes through Nara Park, with deer the whole way. A bus from Kintetsu Nara Station also runs to the Kasuga Taisha Honden stop if you would rather skip the walk." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Are the lanterns at Kasuga Taisha lit every night?", acceptedAnswer: { "@type": "Answer", text: "No. All 3,000 are lit on only three nights a year — 3 February for Setsubun Mantoro, and 14 and 15 August for Chugen Mantoro. On every other night they are unlit. The exception is the Fujinami-no-Ya room inside the paid area, where a mirrored corridor of bronze lanterns is kept lit year-round." } },
            { "@type": "Question", name: "Is Kasuga Taisha free to visit?", acceptedAnswer: { "@type": "Answer", text: "The outer grounds and the lantern-lined approach through the forest are free. The inner offering hall, the Fujinami-no-Ya lantern room and the Man'yo Botanical Garden each charge a small separate admission." } },
            { "@type": "Question", name: "How long does Kasuga Taisha take?", acceptedAnswer: { "@type": "Answer", text: "Budget about 90 minutes including the 1.3 km forest approach each way. Add 30 minutes if you are also doing the Man'yo Botanical Garden, and about 10 for the lantern room." } },
            { "@type": "Question", name: "Can I walk to Kasuga Taisha from Todai-ji?", acceptedAnswer: { "@type": "Answer", text: "Yes, and it is the normal way to do it — roughly 20 to 25 minutes through Nara Park, with deer the whole way. A bus from Kintetsu Nara Station also runs to the Kasuga Taisha Honden stop if you would rather skip the walk." } },
          ],
        },
        heroImage: TOUR_CARD_KASUGA.image,
      };

    case "naramachi-guide":
      return {
        title: "Naramachi: The Merchant Quarter Most Day-Trippers Never Reach",
        seoTitle: "Naramachi Guide",
        description: "Nara's old townhouse district — the red monkey charms hanging from the eaves, what a machiya interior actually looks like inside, and why almost nobody on the day-trip circuit gets here.",
        fastFacts: [
          { icon: "map-pin", label: "Where", value: "South of Sarusawa Pond, about 10 minutes' walk from Kofuku-ji" },
          { icon: "home", label: "What it is", value: "A surviving grid of Edo and Meiji-era merchant townhouses (machiya)" },
          { icon: "ticket", label: "Cost", value: "Free to wander; the preserved Koshi-no-Ie townhouse is also free" },
          { icon: "clock", label: "Time needed", value: "1 to 2 hours, best in the late afternoon once the park empties" },
        ],
        sections: [
          {
            title: "The Red Monkeys Hanging Outside the Houses",
            icon: "eye",
            content: "Walk into Naramachi and you start noticing small red cloth figures strung above doorways and under eaves — limbless, faceless, hanging by a thread. They are **migawari-zaru**, 'substitute monkeys', and they are the most distinctive thing in the district.\n\nThe belief is that the monkey hangs in your place and takes on misfortune that would otherwise reach the household. Families hang one for each member, and some houses have a string of five or six. Older ones have a wish written on the back and are never displayed outward.\n\nThey are tied to Koshin-do, a small hall in the district devoted to the blue-faced Koshin deity, whose messenger is the monkey. You can buy one for a few hundred yen. It is the rare souvenir in Japan that is genuinely local to one neighbourhood rather than to the whole country.",
            tourCard: TOUR_CARD_MOCHI,
          },
          {
            title: "What a Machiya Is Actually Like Inside",
            icon: "home",
            content: "Merchant townhouses across Japan share a shape — narrow at the street, very deep back — because for centuries frontage was taxed. Naramachi's are the Nara version of that, and one of them is open free of charge as **Naramachi Koshi-no-Ie**, a faithfully restored townhouse you can walk through.\n\nIt is worth twenty minutes because it explains the shape. You enter through a shop space at the front, pass along a *tori-niwa* — an earth-floored corridor running the full depth of the building that functioned as kitchen, workspace and ventilation shaft — and emerge at a small rear courtyard garden. Skylights and that courtyard are the only sources of daylight in the middle of the house, which is why the interior feels like a series of glowing rooms strung along a dark spine.\n\nOnce you have seen the inside of one, the closed façades along the rest of the district stop reading as a pretty street and start reading as buildings.",
            tourCard: TOUR_CARD_TATAMI,
          },
          {
            title: "Why the Crowds Do Not Come Here",
            icon: "users",
            content: "The standard Nara day trip is a loop: arrive from Kyoto or Osaka, walk to Kofuku-ji, feed the deer, see the Great Buddha at Todai-ji, maybe reach Kasuga Taisha, walk back, catch the train. That loop runs entirely north and east of Sarusawa Pond. Naramachi is south of it.\n\nThe result is a preserved historic district roughly ten minutes on foot from the single busiest attraction in the city that stays comparatively quiet all day. It is not undiscovered — there are cafés, craft shops and a well-signposted walking route — but the difference in density either side of that pond is stark, and it is the reason Naramachi is the answer to 'Nara was too crowded, what did I miss'.\n\nThe practical move: do the park in the morning when it is genuinely worth being there, then come south for the afternoon. Naramachi's shops and cafés keep going after the coaches have left, and the light down these lanes at 4pm is better than anything you will get in the park at noon.",
            tourCard: TOUR_CARD_SAKE,
          },
          {
            title: "What to Actually Do in Two Hours",
            icon: "footprints",
            content: "Naramachi rewards drifting more than ticking off, but there is a workable spine. Start at **Sarusawa Pond** for the reflection of Kofuku-ji's five-storey pagoda, cross south, and pick up the lanes behind Sanjo-dori.\n\nGive twenty minutes to **Koshi-no-Ie** for the townhouse interior, find **Koshin-do** for the monkeys, and then let the grid take you. The district is small enough that you cannot get properly lost and dense enough that every third doorway is a workshop, a *kakigori* shop in summer, or somebody's ceramics studio.\n\nCraft experiences cluster here rather than in the park — tatami-making, chopstick carving, kimono dressing and tea ceremony are all run out of townhouses within a few streets of each other. If you want something from Nara that is not a photograph of a deer, this is where it is.",
            tourCard: TOUR_CARD_BIKE,
          },
        ],
        faqs: [
          { q: "What are the little red monkeys hanging in Naramachi?", a: "They are migawari-zaru, or 'substitute monkeys' — cloth charms hung above doorways that are believed to take on misfortune in place of the household. Families hang one per member. They come from the Koshin faith, whose messenger is the monkey, centred on Koshin-do hall in the district." },
          { q: "Is Naramachi worth visiting if I only have a day in Nara?", a: "Yes, if you do the park early. The whole day-trip circuit runs north of Sarusawa Pond; Naramachi is ten minutes south of it and stays far quieter. Doing the park at opening and Naramachi in the afternoon gets you both without fighting a crowd for either." },
          { q: "Does it cost anything to visit Naramachi?", a: "No. Wandering the district is free, and the restored Naramachi Koshi-no-Ie townhouse is also free to enter. You only pay for craft workshops, cafés and shops." },
          { q: "How far is Naramachi from Nara Park?", a: "About a ten-minute walk. From the deer at Nara Park, head south past Sarusawa Pond and you are at the northern edge of the district." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What are the little red monkeys hanging in Naramachi?", acceptedAnswer: { "@type": "Answer", text: "They are migawari-zaru, or 'substitute monkeys' — cloth charms hung above doorways that are believed to take on misfortune in place of the household. Families hang one per member. They come from the Koshin faith, whose messenger is the monkey, centred on Koshin-do hall in the district." } },
            { "@type": "Question", name: "Is Naramachi worth visiting if I only have a day in Nara?", acceptedAnswer: { "@type": "Answer", text: "Yes, if you do the park early. The whole day-trip circuit runs north of Sarusawa Pond; Naramachi is ten minutes south of it and stays far quieter. Doing the park at opening and Naramachi in the afternoon gets you both without fighting a crowd for either." } },
            { "@type": "Question", name: "Does it cost anything to visit Naramachi?", acceptedAnswer: { "@type": "Answer", text: "No. Wandering the district is free, and the restored Naramachi Koshi-no-Ie townhouse is also free to enter. You only pay for craft workshops, cafés and shops." } },
            { "@type": "Question", name: "How far is Naramachi from Nara Park?", acceptedAnswer: { "@type": "Answer", text: "About a ten-minute walk. From the deer at Nara Park, head south past Sarusawa Pond and you are at the northern edge of the district." } },
          ],
        },
        heroImage: TOUR_CARD_MOCHI.image,
      };

    case "nara-food-guide":
      return {
        title: "What to Eat in Nara: Persimmon-Leaf Sushi, Pounded Mochi and Sake",
        seoTitle: "Nara Food Guide",
        description: "Nara's food is older and stranger than Kyoto's — sushi wrapped in persimmon leaves, mochi pounded at a speed you can barely follow, and the town where Japanese sake was arguably invented.",
        fastFacts: [
          { icon: "utensils", label: "Signature dish", value: "Kakinoha-zushi — cured fish sushi wrapped in a persimmon leaf" },
          { icon: "wheat", label: "Noodle claim", value: "Miwa somen, from Sakurai in Nara, is held to be Japan's oldest somen" },
          { icon: "wine", label: "Sake claim", value: "Shoryaku-ji, south-east of the city, is credited as a birthplace of clear refined sake" },
          { icon: "clock", label: "Where to eat", value: "Naramachi and Sanjo-dori; the park itself is mostly tourist stalls" },
        ],
        sections: [
          {
            title: "Kakinoha-zushi Is the One Thing to Try",
            icon: "utensils",
            content: "Nara is landlocked and mountainous, and for most of its history fresh sea fish was not arriving here in any usable state. **Kakinoha-zushi** is the solution people arrived at: mackerel or salmon salted and cured, pressed onto vinegared rice, and wrapped tightly in a persimmon leaf.\n\nThe leaf is not decoration. Persimmon leaves have antibacterial properties, and the wrap kept the fish edible across the mountain roads from the coast at Kumano. What began as preservation became the regional dish, and it is now sold everywhere from department-store basements to station kiosks.\n\nYou do not eat the leaf. Unwrap it, eat the block, and notice that the rice has taken on a faint tannic note from the leaf. It travels well — it was designed to — which makes it the single best thing to buy for a train journey out of Nara.",
            tourCard: TOUR_CARD_MOCHI,
          },
          {
            title: "The Mochi Pounding You Have Probably Seen a Video Of",
            icon: "flame",
            content: "On Sanjo-dori, the main approach street between the station and the park, a crowd forms several times an hour around a shop called **Nakatanidou**. Two men pound mochi in a wooden mortar — one swinging a heavy mallet, the other turning and wetting the dough between strikes at a rhythm that looks genuinely unsafe.\n\nThe speed is the point and it is not a gimmick: the dough is worked with *yomogi*, Japanese mugwort, and has to be pounded fast while it is hot to get the texture right. The finished mochi is rolled in kinako soybean flour and sold single, warm, for a few hundred yen.\n\nGo for the demonstration, but eat it too — warm yomogi mochi is a different food from the packaged kind. The performances run at unannounced intervals through the day; if there is a crowd gathering, wait the two minutes.",
            tourCard: TOUR_CARD_MOCHI,
          },
          {
            title: "Nara Has a Serious Claim on Sake",
            icon: "wine",
            content: "Kyoto gets the reputation, but the technical history sits here. **Shoryaku-ji**, a temple in the hills south-east of the city, is widely credited with developing the methods behind clear refined sake in the Muromachi period — multiple-stage brewing, lactic fermentation, pasteurisation practices that the industry still runs on.\n\nThat lineage is still live. Nara Prefecture has a cluster of small breweries, several within the city, and a handful in Naramachi run tastings without ceremony or a reservation system. It is a markedly easier place to actually drink good sake than Kyoto, where the good breweries are out in Fushimi and the city-centre options lean touristy.\n\nThe other thing to eat here is **narazuke** — vegetables, usually gourd or cucumber, pickled repeatedly in sake lees until they turn amber and taste sharply of alcohol and sugar. It is an acquired taste and a direct by-product of the brewing. Buy one piece before you buy a box.",
            tourCard: TOUR_CARD_SAKE,
          },
          {
            title: "Where to Eat, and Where Not To",
            icon: "map-pin",
            content: "The rule in Nara is simple: **the park feeds tourists, Naramachi feeds people**. Around the deer and the Todai-ji approach you will find soft-serve, senbei stalls and a few large restaurants running set menus for coach groups. It is fine and it is not why you came.\n\nTen minutes south, Naramachi has the small places — soba counters, kamameshi rice pots, coffee in converted townhouses, and *kakigori* shaved ice in summer that Nara takes unusually seriously. Sanjo-dori, between the station and the pond, is the middle ground and where Nakatanidou sits.\n\nOne timing note: Nara is a day-trip town, and a lot of kitchens close early because the visitors leave on the 5pm trains. If you want dinner rather than lunch, check hours before you commit, and consider that staying the night is the only way to eat here properly.",
            tourCard: TOUR_CARD_TATAMI,
          },
        ],
        faqs: [
          { q: "What food is Nara famous for?", a: "Kakinoha-zushi — cured mackerel or salmon sushi wrapped in a persimmon leaf, originally a preservation method for carrying fish over the mountains. Also yomogi mugwort mochi, narazuke sake-lees pickles, and Miwa somen noodles from nearby Sakurai." },
          { q: "Do you eat the persimmon leaf on kakinoha-zushi?", a: "No. The leaf is a wrapper with antibacterial properties, not food. Unwrap it and eat the pressed sushi block inside." },
          { q: "Where is the famous mochi pounding in Nara?", a: "Nakatanidou, on Sanjo-dori between Kintetsu Nara Station and Sarusawa Pond. The high-speed pounding demonstrations run at intervals through the day rather than on a fixed schedule." },
          { q: "Is Nara good for sake?", a: "Yes, and it is underrated. Shoryaku-ji temple near the city is credited with developing the techniques behind clear refined sake, and the prefecture still has a cluster of small breweries, several of which run walk-in tastings in Naramachi." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What food is Nara famous for?", acceptedAnswer: { "@type": "Answer", text: "Kakinoha-zushi — cured mackerel or salmon sushi wrapped in a persimmon leaf, originally a preservation method for carrying fish over the mountains. Also yomogi mugwort mochi, narazuke sake-lees pickles, and Miwa somen noodles from nearby Sakurai." } },
            { "@type": "Question", name: "Do you eat the persimmon leaf on kakinoha-zushi?", acceptedAnswer: { "@type": "Answer", text: "No. The leaf is a wrapper with antibacterial properties, not food. Unwrap it and eat the pressed sushi block inside." } },
            { "@type": "Question", name: "Where is the famous mochi pounding in Nara?", acceptedAnswer: { "@type": "Answer", text: "Nakatanidou, on Sanjo-dori between Kintetsu Nara Station and Sarusawa Pond. The high-speed pounding demonstrations run at intervals through the day rather than on a fixed schedule." } },
            { "@type": "Question", name: "Is Nara good for sake?", acceptedAnswer: { "@type": "Answer", text: "Yes, and it is underrated. Shoryaku-ji temple near the city is credited with developing the techniques behind clear refined sake, and the prefecture still has a cluster of small breweries, several of which run walk-in tastings in Naramachi." } },
          ],
        },
        heroImage: TOUR_CARD_MOCHI.image,
      };

    case "getting-around-nara":
      return {
        title: "Getting Around Nara: The Two Stations, and Why It Matters",
        seoTitle: "Getting Around Nara",
        description: "Nara has two unconnected stations with the same name. Picking the wrong one adds a 20-minute walk at both ends of your day — here is how to get it right.",
        fastFacts: [
          { icon: "train", label: "Two stations", value: "Kintetsu Nara and JR Nara — different companies, about 1 km apart" },
          { icon: "map-pin", label: "Closest to the sights", value: "Kintetsu Nara — roughly 5 minutes' walk to Nara Park" },
          { icon: "footprints", label: "From JR Nara", value: "About 20 minutes on foot to the park, or a short bus" },
          { icon: "clock", label: "From Kyoto", value: "About 35–45 minutes on the Kintetsu line, longer on JR" },
        ],
        sections: [
          {
            title: "The Single Most Useful Fact About Nara",
            icon: "train",
            content: "Nara has two railway stations called Nara, run by two different companies, about a kilometre apart, and they are not interchangeable.\n\n**Kintetsu Nara Station** is the one you want. It sits at the western edge of the sightseeing district — Sarusawa Pond and Kofuku-ji are about five minutes on foot, the deer maybe eight, Todai-ji fifteen. You come up the stairs and you are essentially there.\n\n**JR Nara Station** is roughly a kilometre further west. From there it is about a twenty-minute walk east to the park, or a bus. Nothing is wrong with it, but if you have a JR Pass and default to JR without thinking, you have added forty minutes of walking to your day for no reason.\n\nThe practical rule: if you are not tied to a rail pass, use Kintetsu. If you are on a JR Pass and the free travel matters more than the walk, use JR and take the bus at the Nara end.",
            tourCard: TOUR_CARD_MORNING2,
          },
          {
            title: "Getting There from Kyoto and Osaka",
            icon: "route",
            content: "From **Kyoto**, the Kintetsu Kyoto Line runs direct from Kyoto Station to Kintetsu Nara. Limited express services are quickest and require a surcharge; the ordinary express costs less, takes a little longer, and needs no reservation. The JR Nara Line also runs Kyoto to JR Nara, which is the sensible choice on a JR Pass.\n\nFrom **Osaka**, Kintetsu runs from Osaka-Namba to Kintetsu Nara in around forty minutes. JR runs from Osaka and Tennoji to JR Nara. Either works; the same station-position logic applies at the Nara end.\n\nBoth cities are close enough that Nara is genuinely doable as a half day, which is exactly why the middle of the day is so crowded. The trains start early — going out on the first sensible service and being at Todai-ji when it opens is the difference between the two Naras people describe.",
            tourCard: TOUR_CARD_UNESCO,
          },
          {
            title: "Once You Are There, Walk",
            icon: "footprints",
            content: "The core of Nara is walkable and that is the correct way to do it. From Kintetsu Nara, the whole classic route — Kofuku-ji, Nara Park and the deer, Todai-ji and the Great Buddha, then the forest approach to Kasuga Taisha — is a loop of roughly 4 to 5 km on flat ground, done comfortably in half a day with stops.\n\nWhere transport helps is at the ends. A loop bus runs around the sightseeing district and is genuinely useful if you are staying near JR Nara, travelling with someone who cannot walk far, or want to skip the uphill approach to Kasuga Taisha and walk back down instead.\n\nAn **e-bike** is the other good answer, and an underrated one. It puts Naramachi, the park and the outer temples — Yakushi-ji and Toshodai-ji, which almost no day-tripper reaches — into a single day without the bus timetables.",
            tourCard: TOUR_CARD_BIKE,
          },
          {
            title: "Day Trips Onward",
            icon: "map",
            content: "Nara is also a junction, and this is where the Kintetsu network earns its keep. **Mount Yoshino**, Japan's most famous cherry blossom mountain, is reachable on the Kintetsu Yoshino Line and is a day trip from Nara or Osaka rather than an overnight. **Uji**, for tea, sits on the JR Nara Line between Nara and Kyoto and slots neatly into a return journey.\n\nHoryu-ji, home to some of the oldest surviving wooden buildings anywhere, is a short JR hop west of Nara and gets a fraction of the visitors of Todai-ji despite being older and, to many people, more affecting.\n\nIf you are building a Kansai week, the thing worth internalising is that Nara is not a dead end at the bottom of the map. It is the gateway to a whole southern half of the region that most itineraries skip entirely.",
            tourCard: TOUR_CARD_YOSHINO,
          },
        ],
        faqs: [
          { q: "Which Nara station should I use, JR or Kintetsu?", a: "Kintetsu Nara, unless a JR Pass makes JR free for you. Kintetsu Nara is about a five-minute walk from Nara Park; JR Nara is roughly a kilometre further west, about twenty minutes on foot or a short bus ride." },
          { q: "How long does it take to get from Kyoto to Nara?", a: "Roughly 35 to 45 minutes on the Kintetsu Kyoto Line to Kintetsu Nara, depending on whether you take the limited express or the ordinary express. The JR Nara Line takes longer but is covered by a JR Pass." },
          { q: "Do I need transport once I am in Nara?", a: "No. The classic route — Kofuku-ji, the deer, Todai-ji and Kasuga Taisha — is a flat 4 to 5 km loop on foot. A loop bus and e-bike rentals exist and are useful if you are based near JR Nara or want to reach the outer temples." },
          { q: "Can I visit Nara as a day trip from Osaka?", a: "Yes — about 40 minutes from Osaka-Namba on Kintetsu. It is one of the easiest day trips in Kansai, which is also why it is busiest between about 11am and 3pm." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Which Nara station should I use, JR or Kintetsu?", acceptedAnswer: { "@type": "Answer", text: "Kintetsu Nara, unless a JR Pass makes JR free for you. Kintetsu Nara is about a five-minute walk from Nara Park; JR Nara is roughly a kilometre further west, about twenty minutes on foot or a short bus ride." } },
            { "@type": "Question", name: "How long does it take to get from Kyoto to Nara?", acceptedAnswer: { "@type": "Answer", text: "Roughly 35 to 45 minutes on the Kintetsu Kyoto Line to Kintetsu Nara, depending on whether you take the limited express or the ordinary express. The JR Nara Line takes longer but is covered by a JR Pass." } },
            { "@type": "Question", name: "Do I need transport once I am in Nara?", acceptedAnswer: { "@type": "Answer", text: "No. The classic route — Kofuku-ji, the deer, Todai-ji and Kasuga Taisha — is a flat 4 to 5 km loop on foot. A loop bus and e-bike rentals exist and are useful if you are based near JR Nara or want to reach the outer temples." } },
            { "@type": "Question", name: "Can I visit Nara as a day trip from Osaka?", acceptedAnswer: { "@type": "Answer", text: "Yes — about 40 minutes from Osaka-Namba on Kintetsu. It is one of the easiest day trips in Kansai, which is also why it is busiest between about 11am and 3pm." } },
          ],
        },
        heroImage: TOUR_CARD_MORNING2.image,
      };

    case "mount-yoshino-cherry-blossom-guide":
      return {
        title: "Mount Yoshino: Why Its Cherry Blossom Season Lasts Two Weeks",
        seoTitle: "Mount Yoshino Cherry Blossom Guide",
        description: "Thirty thousand cherry trees planted in four bands up a mountainside, blooming in sequence from bottom to top — how Yoshino works, and how to time it.",
        fastFacts: [
          { icon: "flower", label: "Trees", value: "Around 30,000, mostly Shiroyama-zakura, planted over roughly 1,300 years" },
          { icon: "mountain", label: "Four bands", value: "Shimo, Naka, Kami and Oku Senbon — low to high" },
          { icon: "calendar", label: "Season", value: "Roughly the first half of April, moving up the mountain as it goes" },
          { icon: "landmark", label: "Status", value: "UNESCO World Heritage, as part of the Kii Mountain sacred sites" },
        ],
        sections: [
          {
            title: "The Reason the Season Is Long Here and Nowhere Else",
            icon: "mountain",
            content: "In most of Japan cherry blossom is a five-to-seven day event. Miss the window and you have missed the year. Yoshino is the exception, and the reason is elevation.\n\nThe roughly 30,000 trees are spread up a mountainside in four bands, named from the bottom: **Shimo Senbon** (lower thousand), **Naka Senbon** (middle), **Kami Senbon** (upper) and **Oku Senbon** (inner). Each band is a few hundred metres higher than the last, so each one blooms a few days later.\n\nThe result is a rolling wave. In a typical year the lower slopes peak in the first third of April, the middle a couple of days behind, the upper a few days after that, and the innermost last of all — stretching what is normally a week into something closer to a fortnight. Seen from the opposite ridge, the mountain has bloomed, blooming and not-yet-bloomed bands visible at the same time.",
            tourCard: TOUR_CARD_YOSHINO,
          },
          {
            title: "How to Time It",
            icon: "calendar",
            content: "Because of the banding, 'is Yoshino in bloom?' is the wrong question. The right one is 'which band is in bloom on my date?'\n\nIf you are locked to an early-April date, aim low — Shimo and Naka Senbon are the closest to the station and the ropeway, and they carry the densest planting. If your date is mid-April and everywhere else in Kansai has already dropped its petals, Yoshino is very often still delivering higher up, and this is its real trick: **it is the reliable answer for a trip that arrived a week late.**\n\nForecasts move year to year with the winter, so check the current-season prediction rather than last year's dates. What does not move is the ordering — lower always first, Oku Senbon always last.",
            tourCard: TOUR_CARD_YOSHINO,
          },
          {
            title: "It Is a Sacred Mountain, Not a Park",
            icon: "landmark",
            content: "The trees are here for a religious reason. Yoshino is a centre of **Shugendo**, the mountain ascetic tradition, and cherry trees have been planted as offerings around **Kinpusen-ji** for well over a millennium. That is why there are thirty thousand of them and why they are the wild Shiroyama-zakura rather than the cloned Somei-Yoshino found in city parks.\n\nKinpusen-ji's main hall, the Zao-do, is one of the largest wooden structures in Japan and worth the visit independent of the blossom. The whole area is inscribed by UNESCO as part of the Sacred Sites and Pilgrimage Routes in the Kii Mountain Range.\n\nPractically, this means the walk up is a temple path, not a promenade: shrines, small halls and pilgrim lodgings the whole way. A ropeway covers the first climb from the station; above that it is walking, and the higher bands take real effort.",
            tourCard: TOUR_CARD_YOSHINO_AUT,
          },
          {
            title: "Autumn, and the Case for Going Off-Season",
            icon: "leaf",
            content: "Blossom season is why Yoshino is famous and it is also when the mountain is at its most crowded — narrow roads, full trains, and a village of a few thousand people absorbing a great many visitors.\n\nAutumn is the quiet counter-argument. The same slopes turn over in **November**, and because the maples and the cherry foliage are banded by the same elevation logic, the colour also arrives in waves. Crowds are a fraction of April's, accommodation is available, and the Blue Symphony sightseeing train from Osaka — a proper observation-car service rather than a commuter run — is far easier to get a seat on.\n\nIf your dates are flexible and you care more about the mountain than about the specific fact of cherry blossom, November is the better trip.",
            tourCard: TOUR_CARD_YOSHINO_AUT,
          },
        ],
        faqs: [
          { q: "When do the cherry blossoms bloom at Mount Yoshino?", a: "Roughly through the first half of April, but not all at once. The four bands bloom in sequence up the mountain — Shimo Senbon lowest and first, then Naka, then Kami, with Oku Senbon last, typically stretching the season to around two weeks." },
          { q: "Why does Yoshino's blossom last longer than elsewhere?", a: "Elevation. The 30,000 trees are planted in four bands at increasing heights, and each band blooms a few days after the one below it, so the mountain flowers as a rolling wave rather than all at once." },
          { q: "Can I visit Mount Yoshino as a day trip?", a: "Yes, from Osaka or Nara on the Kintetsu Yoshino Line. A ropeway covers the first climb from Yoshino Station; the upper bands are a walk from there. In peak blossom season expect crowded trains and slow going." },
          { q: "Is Mount Yoshino worth visiting outside cherry blossom season?", a: "Yes — November autumn colour follows the same elevation banding and draws a fraction of the crowds. Kinpusen-ji's Zao-do hall, one of Japan's largest wooden buildings, is worth the trip on its own." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "When do the cherry blossoms bloom at Mount Yoshino?", acceptedAnswer: { "@type": "Answer", text: "Roughly through the first half of April, but not all at once. The four bands bloom in sequence up the mountain — Shimo Senbon lowest and first, then Naka, then Kami, with Oku Senbon last, typically stretching the season to around two weeks." } },
            { "@type": "Question", name: "Why does Yoshino's blossom last longer than elsewhere?", acceptedAnswer: { "@type": "Answer", text: "Elevation. The 30,000 trees are planted in four bands at increasing heights, and each band blooms a few days after the one below it, so the mountain flowers as a rolling wave rather than all at once." } },
            { "@type": "Question", name: "Can I visit Mount Yoshino as a day trip?", acceptedAnswer: { "@type": "Answer", text: "Yes, from Osaka or Nara on the Kintetsu Yoshino Line. A ropeway covers the first climb from Yoshino Station; the upper bands are a walk from there. In peak blossom season expect crowded trains and slow going." } },
            { "@type": "Question", name: "Is Mount Yoshino worth visiting outside cherry blossom season?", acceptedAnswer: { "@type": "Answer", text: "Yes — November autumn colour follows the same elevation banding and draws a fraction of the crowds. Kinpusen-ji's Zao-do hall, one of Japan's largest wooden buildings, is worth the trip on its own." } },
          ],
        },
        heroImage: TOUR_CARD_YOSHINO.image,
      };
    default:
      return null;
  }
}
