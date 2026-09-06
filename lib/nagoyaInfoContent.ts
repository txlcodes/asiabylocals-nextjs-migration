// Nagoya authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getNagoyaInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const TOUR_CARD_CASTLE = {
  slug: 'chubu-electric-power-mirai-tower-walking-tour',
  title: 'Nagoya Castle & Samurai Heritage Private Walking Tour',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 100.80',
  duration: '3 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194159/asiabylocals/tours/nagoya-nagoya-private-castle-samurai-history-city-icons-tour/img0.jpg',
};

const TOUR_CARD_GUJO = {
  slug: 'nagoya-gujo-full-day-tour',
  title: 'Gujo, Hida-Takayama & Shirakawa-go: Full-Day Trip from Nagoya',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 71.23',
  duration: '11 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194057/asiabylocals/tours/nagoya-from-nagoya-gujo-hida-takayama-and-shirakawa-go-day-t/img0.jpg',
};

const TOUR_CARD_NIGHT = {
  slug: 'nagoya-tv-tower-evening-tour',
  title: 'Nagoya by Night: TV Tower & Sky Promenade Walking Tour',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 95.03',
  duration: '2.5 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194186/asiabylocals/tours/nagoya-nagoya-two-towers-one-night-of-urban-elegance/img0.jpg',
};

const TOUR_CARD_FOOD = {
  slug: 'kinjo-pier-food-tour',
  title: 'Nagoya Food Tour at Kinjo Pier for Cruise Passengers',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 104.96',
  duration: '2 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194099/asiabylocals/tours/nagoya-nagoya-cruise-friendly-food-tour-at-kinjo-pier/img0.jpg',
};

const TOUR_CARD_INUYAMA = {
  slug: 'inuyama-castle-full-day-tour',
  title: 'Inuyama Castle & Nakasendo Post Towns Day Trip from Nagoya',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 82.85',
  duration: '10 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194246/asiabylocals/tours/nagoya-nagoya-inuyama-castle-magome-juku-tsumago-juku-tour/img0.jpg',
};

const TOUR_CARD_TOYOTA = {
  slug: 'toyota-commemorative-museum-of-industry',
  title: 'Nagoya Full-Day Private Tour: Toyota Museum, Castle & Atsuta Shrine',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 245',
  duration: '6.5 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194134/asiabylocals/tours/nagoya-nagoya-private-day-tour-to-toyota-museum-castle-shrin/img0.jpg',
};

const TOUR_CARD_MAGOME = {
  slug: 'magome-juku-guided-tour',
  title: 'Magome-juku, Tsumago-juku & Ryujin Falls Day Tour from Nagoya',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 90',
  duration: '10 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194110/asiabylocals/tours/nagoya-magome-juku-tsumago-juku-ryujin-falls-day-tour-from-n/img0.jpg',
};

const TOUR_CARD_RAIL = {
  slug: 'scmaglev-and-railway-park-heritage-tour',
  title: 'Private Nagoya Railway, Aviation & Port Industrial Heritage Tour',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 444',
  duration: '8 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194293/asiabylocals/tours/nagoya-nagoya-private-8h-railway-aviation-port-tour/img0.png',
};

const TOUR_CARD_SUSHI = {
  slug: 'nagoya-cutting-mini-tour',
  title: 'Nagoya Tuna Cutting Show & Sushi-Making Class',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 150',
  duration: '2 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194169/asiabylocals/tours/nagoya-nagoya-tuna-cutting-show-sushi-making-experience/img0.jpg',
};

const TOUR_CARD_TOKONAME = {
  slug: 'tokoname-full-day-tour',
  title: 'Tokoname Pottery Path: Ancient Kiln Town Day Trip',
  description: 'A top-rated Nagoya experience, bookable directly through AsiaByLocals.',
  price: 'From USD 108',
  duration: '6.5 hours',
  image: 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788194199/asiabylocals/tours/nagoya-tokoname-pottery-village-day-trip-from-nagoya/img0.jpg',
};

export function getNagoyaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case 'best-time-to-visit-nagoya':
      return {
        title: 'The Best Time to Visit Nagoya: A Season-by-Season Guide',
        seoTitle: 'Best Time to Visit Nagoya',
        description: 'Cherry blossom, Korankei autumn colour, and the humid summer you should plan around — an honest month-by-month guide to Nagoya.',
        fastFacts: [
          { icon: 'calendar', label: 'Founded', value: 'Castle town from 1612, when Tokugawa Ieyasu built Nagoya Castle' },
          { icon: 'flower', label: 'Cherry blossom', value: 'Late March to early April, Nagoya Castle grounds and Yamazaki River' },
          { icon: 'leaf', label: 'Autumn colour', value: 'Mid-to-late November, peaking at Korankei Gorge' },
          { icon: 'thermometer', label: 'Summer', value: 'July-August, hot and humid, often mid-30s°C with high humidity' },
        ],
        sections: [
          {
            title: "Nagoya Doesn't Have a Bad Season — But It Has a Punishing One",
            icon: 'calendar-days',
            content: "Nagoya sits in a river-plain basin between the mountains and Ise Bay, which gives it hot, humid summers and cold winters more pronounced than Kyoto or Osaka just a couple of hours away. Unlike a city built around one narrow seasonal spectacle, Nagoya's appeal — the castle, the museums, the food, the day trips into the surrounding mountains — holds up in most months. The one season worth actively planning around is July and August, when the combination of heat and humidity makes walking the castle grounds or Osu shopping streets a genuinely different experience than the same walk in October.\n\nAs Japan's fourth-largest city and the industrial heart of the Chubu region — Toyota's global headquarters sits in nearby Toyota City — Nagoya also has a business-travel rhythm that Kyoto and Osaka don't: expect hotel prices to firm up around major trade fairs and conventions, not just the tourist calendar.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: 'Spring: Castle Cherry Blossom and Comfortable Days',
            icon: 'flower',
            content: "Late March into early April brings cherry blossom to Nagoya Castle's grounds and the Yamazaki River, with the reconstructed keep's white walls and golden shachihoko roof ornaments framed against the pink canopy — a genuinely photogenic pairing. Daytime temperatures in April sit comfortably in the high teens to low 20s Celsius, making this one of the most pleasant windows for walking-heavy days, whether that's the castle grounds themselves or a day trip into the mountains toward Gujo or Hida-Takayama before the peak summer heat sets in.",
            tourCard: TOUR_CARD_GUJO,
          },
          {
            title: 'Autumn: Korankei Gorge and the Best Light of the Year',
            icon: 'leaf',
            content: "Mid-to-late November is Nagoya's autumn colour peak, and the standout destination is Korankei Gorge in nearby Toyota City, one of the Tokai region's most celebrated maple-viewing spots — over 4,000 maple trees line the Tomoe River, and the gorge runs an evening illumination during the peak weeks that turns the reflections on the water into the main event. Shikizakura, an unusual cherry variety that blooms lightly in autumn alongside the maples at nearby Obara, adds a second, less crowded reason to time a visit for this window. Daytime highs around 15-18°C make this comfortable walking weather without summer's humidity.",
            tourCard: TOUR_CARD_INUYAMA,
          },
          {
            title: 'Summer and Winter: What to Actually Expect',
            icon: 'thermometer',
            content: "July and August are Nagoya's least forgiving months — daytime highs regularly reach the mid-30s°C with humidity that makes it feel hotter, and this is also when the city's food culture (hitsumabushi, tebasaki, miso katsu) becomes genuinely appealing as an excuse to sit indoors. If you're here in summer, front-load outdoor plans for early morning and treat the afternoon as air-conditioned museum and shopping time — the Toyota Commemorative Museum and SCMAGLEV and Railway Park are both built for exactly this kind of day.\n\nWinter (December-February) is cold but rarely severe, with occasional light snow rather than the heavy accumulation of Hokkaido or the Japan Alps proper. It's Nagoya's quietest, cheapest season, and a legitimate option if you're prioritising indoor sights and day trips like Kamikochi's winter closure aside — most of the surrounding mountain routes stay accessible with proper layers.",
            tourCard: TOUR_CARD_NIGHT,
          },
        ],
        faqs: [
          { q: 'Is Nagoya worth visiting outside cherry blossom or autumn?', a: "Yes — Nagoya's appeal is broader than a single seasonal spectacle. The castle, Atsuta Shrine, the Toyota museums and the food scene all hold up year-round, and the surrounding day trips (Inuyama, Tokoname, the Nakasendo post towns) don't depend on a bloom or colour window the way, say, Kyoto's gardens do. Summer heat is the main thing to plan around, not a lack of things to do in other months." },
          { q: 'How hot does Nagoya get in summer?', a: "Genuinely hot and humid — daytime highs commonly reach the mid-30s°C in July and August, with humidity that makes it feel worse than the number suggests. If you're visiting in summer, plan outdoor sightseeing for morning and evening, and treat midday as indoor time." },
          { q: 'When is the Korankei Gorge autumn colour at its peak?', a: 'Roughly mid-to-late November, when the gorge runs an evening illumination through the peak weeks. It sits in Toyota City, about an hour from central Nagoya, and is the single best autumn day trip from the city.' },
          { q: 'Does Nagoya have a rainy season?', a: "Yes — like the rest of central Japan, Nagoya has a tsuyu (rainy season) roughly from early June to mid-July, with frequent overcast, humid days and periodic heavy rain. It's not a reason to avoid the city entirely, but it's worth knowing before booking a trip built around outdoor walking." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is Nagoya worth visiting outside cherry blossom or autumn?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — Nagoya's appeal is broader than a single seasonal spectacle. The castle, Atsuta Shrine, the Toyota museums and the food scene all hold up year-round, and the surrounding day trips (Inuyama, Tokoname, the Nakasendo post towns) don't depend on a bloom or colour window the way, say, Kyoto's gardens do. Summer heat is the main thing to plan around, not a lack of things to do in other months."}}, {"@type": "Question", "name": "How hot does Nagoya get in summer?", "acceptedAnswer": {"@type": "Answer", "text": "Genuinely hot and humid — daytime highs commonly reach the mid-30s°C in July and August, with humidity that makes it feel worse than the number suggests. If you're visiting in summer, plan outdoor sightseeing for morning and evening, and treat midday as indoor time."}}, {"@type": "Question", "name": "When is the Korankei Gorge autumn colour at its peak?", "acceptedAnswer": {"@type": "Answer", "text": "Roughly mid-to-late November, when the gorge runs an evening illumination through the peak weeks. It sits in Toyota City, about an hour from central Nagoya, and is the single best autumn day trip from the city."}}, {"@type": "Question", "name": "Does Nagoya have a rainy season?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — like the rest of central Japan, Nagoya has a tsuyu (rainy season) roughly from early June to mid-July, with frequent overcast, humid days and periodic heavy rain. It's not a reason to avoid the city entirely, but it's worth knowing before booking a trip built around outdoor walking."}}]}]},
        heroImage: TOUR_CARD_CASTLE.image,
      };

    case 'nagoya-castle-guide':
      return {
        title: "Nagoya Castle: A Visitor's Guide to the Golden Shachihoko City Symbol",
        seoTitle: 'Nagoya Castle Guide',
        description: "The history behind Nagoya Castle's golden roof ornaments, why the keep is concrete not wood, and what's actually worth seeing on the grounds.",
        fastFacts: [
          { icon: 'calendar', label: 'Built', value: '1612, commissioned by Tokugawa Ieyasu for his ninth son' },
          { icon: 'flame', label: 'Destroyed', value: 'May 1945, in Allied bombing raids — only a handful of turrets and gates survived' },
          { icon: 'building', label: 'Rebuilt', value: '1959, in concrete rather than the original wood' },
          { icon: 'star', label: 'City symbol', value: "The pair of golden shachihoko (mythical tiger-fish) on the roof ridge" },
        ],
        sections: [
          {
            title: 'Why Tokugawa Ieyasu Built a Castle Here in 1612',
            icon: 'landmark',
            content: "Nagoya Castle was commissioned in 1612 by Tokugawa Ieyasu, founder of the Tokugawa shogunate, for his ninth son Yoshinao — part of a strategic ring of castles meant to secure the routes between Osaka and Edo (Tokyo) as the newly unified Japan settled into peace after centuries of civil war. The site put Nagoya at the center of a planned castle town, and the Owari branch of the Tokugawa family that ruled from it became one of the three most senior branches of the shogunate.\n\nThe castle's defining feature from the outset was its pair of golden shachihoko — mythical creatures with a tiger's head and a fish's body, believed in folklore to protect buildings from fire — mounted on the main keep's roof ridge. They became so closely associated with the city that a stylised shachihoko still appears on Nagoya's municipal emblem today.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: 'Why the Keep Is Concrete, Not the Original Wood',
            icon: 'flame',
            content: "In May 1945, Allied bombing raids destroyed the main keep along with most of the castle's original structures — a fate shared by a number of Japan's historic castles in the final months of the war. Only a handful of corner turrets and gates on the outer grounds survived intact, and those original structures are now designated Important Cultural Properties, distinct from the reconstructed keep itself.\n\nThe current main keep dates to 1959, rebuilt in ferroconcrete rather than traditional wood — a common postwar choice driven by cost and fire-safety codes rather than a lack of will to rebuild authentically. Inside, it now functions largely as a museum, with displays on the castle's history and Owari-era artifacts; the observation floor gives a wide view over the castle grounds and the city beyond.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: 'What to Actually See on the Grounds',
            icon: 'map-pin',
            content: "Beyond the main keep, the grounds include the reconstructed Honmaru Palace, rebuilt using traditional wooden techniques and completed in 2018 after a painstaking, decades-long project — arguably a more historically faithful experience than the concrete keep itself, with elaborately painted sliding doors reproduced from surviving pre-war photographs and fragments. The surviving original structures — several corner turrets and the Ote-mon gate — are worth seeking out specifically if authentic Edo-period construction matters to you, since they're easy to walk past without realising their significance next to the much larger reconstructed keep.",
            tourCard: TOUR_CARD_INUYAMA,
          },
        ],
        faqs: [
          { q: 'Is Nagoya Castle worth visiting if I\'ve already seen Osaka or Himeji Castle?', a: "Yes, for a different reason each time. Himeji is the country's best-preserved original wooden castle; Osaka Castle, like Nagoya's, is a postwar concrete reconstruction, but Nagoya's reconstructed Honmaru Palace — rebuilt with traditional wooden techniques and finished in 2018 — is a genuinely rare, historically faithful addition that neither of the other two has." },
          { q: 'How long should I spend at Nagoya Castle?', a: "About 1.5 to 2 hours covers the main keep, the Honmaru Palace, and a walk around the grounds to the surviving original turrets and gates. Add more time if the museum displays inside the keep interest you." },
          { q: 'What do the golden shachihoko actually represent?', a: "They're mythical creatures — tiger-headed, fish-bodied — from Japanese folklore, believed to protect buildings from fire by summoning rain. They're a common feature on Japanese castle roofs, but Nagoya's pair became so iconic that a stylised version appears on the city's own municipal emblem." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is Nagoya Castle worth visiting if I've already seen Osaka or Himeji Castle?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, for a different reason each time. Himeji is the country's best-preserved original wooden castle; Osaka Castle, like Nagoya's, is a postwar concrete reconstruction, but Nagoya's reconstructed Honmaru Palace — rebuilt with traditional wooden techniques and finished in 2018 — is a genuinely rare, historically faithful addition that neither of the other two has."}}, {"@type": "Question", "name": "How long should I spend at Nagoya Castle?", "acceptedAnswer": {"@type": "Answer", "text": "About 1.5 to 2 hours covers the main keep, the Honmaru Palace, and a walk around the grounds to the surviving original turrets and gates. Add more time if the museum displays inside the keep interest you."}}, {"@type": "Question", "name": "What do the golden shachihoko actually represent?", "acceptedAnswer": {"@type": "Answer", "text": "They're mythical creatures — tiger-headed, fish-bodied — from Japanese folklore, believed to protect buildings from fire by summoning rain. They're a common feature on Japanese castle roofs, but Nagoya's pair became so iconic that a stylised version appears on the city's own municipal emblem."}}]}]},
        heroImage: TOUR_CARD_CASTLE.image,
      };

    case 'getting-around-nagoya':
      return {
        title: 'Getting Around Nagoya: Subway, Buses and Day-Trip Trains',
        seoTitle: 'Getting Around Nagoya',
        description: "Nagoya's subway network, the Me-guru sightseeing bus loop, and the train lines that reach Inuyama, Tokoname and the mountains beyond.",
        fastFacts: [
          { icon: 'train', label: 'Subway', value: '6 lines, flat-ish fares from ¥210, covers almost every major sight' },
          { icon: 'bus', label: 'Me-guru bus', value: 'Tourist loop bus linking Nagoya Castle, museums and Atsuta Shrine, one-day pass available' },
          { icon: 'map-pin', label: 'Main hub', value: 'Nagoya Station — JR, Meitetsu, Kintetsu and subway all converge here' },
          { icon: 'plane', label: 'Airport', value: 'Chubu Centrair International Airport, ~30-40 min by Meitetsu train' },
        ],
        sections: [
          {
            title: 'The Subway Covers Almost Everything You Need',
            icon: 'train',
            content: "Nagoya's subway network has six lines and is genuinely comprehensive for a city its size — the Sakuradori and Higashiyama lines alone connect Nagoya Station to the castle, Sakae's entertainment district, and Higashiyama Zoo, while the Meijo Line loops past Nagoya Castle and out toward Atsuta Shrine. Fares start around ¥210 for short hops, and a one-day subway pass is worth it if you're making more than a few trips, since it also unlocks small discounts at some museums.\n\nNagoya Station itself is the connecting point for almost everything beyond the subway — JR lines for the Shinkansen and regional trains, Meitetsu lines toward Chubu Centrair Airport and Inuyama, and Kintetsu lines toward Nara and Osaka.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: 'The Me-guru Bus: Built for Tourists, Not Locals',
            icon: 'bus',
            content: "The Me-guru is a dedicated sightseeing loop bus that stops at Nagoya Station, Nagoya Castle, the Tokugawa Art Museum, Atsuta Shrine and several other major sights, running at roughly 20-30 minute intervals. A one-day pass costs a modest flat fee and also gets you small discounts at several of the attractions it stops at — it's specifically designed to solve the problem of Nagoya's sights being spread out rather than clustered in one walkable core, unlike central Kyoto.",
            tourCard: TOUR_CARD_NIGHT,
          },
          {
            title: 'Day Trips: Where the Trains Actually Go',
            icon: 'map',
            content: "Meitetsu's Inuyama Line reaches Inuyama Castle — one of Japan's twelve surviving original castle keeps — in about 30 minutes, making it the easiest genuine day trip from Nagoya. Tokoname, the pottery town near Chubu Centrair Airport, is a similar distance on the Meitetsu Airport Line. For the mountain routes — Gujo, Hida-Takayama, Shirakawa-go, and the Nakasendo post towns of Magome-juku and Tsumago-juku — direct trains exist but connections are limited enough that most visitors use a guided day tour with private transport rather than piecing together local buses on unfamiliar mountain roads.",
            tourCard: TOUR_CARD_GUJO,
          },
        ],
        faqs: [
          { q: 'Do I need a car in Nagoya?', a: "No — the subway and Meitetsu/JR trains cover the city and its nearest day trips (Inuyama, Tokoname) comfortably. The exception is the mountain routes further out (Shirakawa-go, Kamikochi, the Nakasendo trail), where a guided tour with a private vehicle is genuinely more practical than public transport." },
          { q: 'Is the Me-guru bus worth it over the subway?', a: "If your day is built around the castle, Atsuta Shrine and the Tokugawa Art Museum specifically, yes — it links them directly with a one-day pass and small attraction discounts. For anything else, the regular subway is usually faster and covers more ground." },
          { q: 'How do I get from Chubu Centrair Airport into the city?', a: "The Meitetsu Airport Line runs directly from the airport to Nagoya Station in about 30-40 minutes on the fastest services, making it one of the more convenient airport-to-city-center connections in Japan." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need a car in Nagoya?", "acceptedAnswer": {"@type": "Answer", "text": "No — the subway and Meitetsu/JR trains cover the city and its nearest day trips (Inuyama, Tokoname) comfortably. The exception is the mountain routes further out (Shirakawa-go, Kamikochi, the Nakasendo trail), where a guided tour with a private vehicle is genuinely more practical than public transport."}}, {"@type": "Question", "name": "Is the Me-guru bus worth it over the subway?", "acceptedAnswer": {"@type": "Answer", "text": "If your day is built around the castle, Atsuta Shrine and the Tokugawa Art Museum specifically, yes — it links them directly with a one-day pass and small attraction discounts. For anything else, the regular subway is usually faster and covers more ground."}}, {"@type": "Question", "name": "How do I get from Chubu Centrair Airport into the city?", "acceptedAnswer": {"@type": "Answer", "text": "The Meitetsu Airport Line runs directly from the airport to Nagoya Station in about 30-40 minutes on the fastest services, making it one of the more convenient airport-to-city-center connections in Japan."}}]}]},
        heroImage: TOUR_CARD_GUJO.image,
      };

    case 'nagoya-food-guide':
      return {
        title: "Nagoya Food Guide: Hitsumabushi, Tebasaki and Miso Katsu Explained",
        seoTitle: 'Nagoya Food Guide',
        description: "Why Nagoya's food scene is genuinely distinct from Kyoto or Osaka — hitsumabushi, tebasaki, miso katsu and where to actually try them.",
        fastFacts: [
          { icon: 'utensils', label: 'Signature dish', value: 'Hitsumabushi — grilled eel over rice, traditionally eaten three different ways' },
          { icon: 'flame', label: 'Wings', value: 'Tebasaki — twice-fried chicken wings, a Nagoya bar-food invention' },
          { icon: 'droplet', label: 'The sauce', value: 'Haccho miso — a dark, intensely savoury red miso used across Nagoya cuisine' },
          { icon: 'coffee', label: 'Morning custom', value: "Nagoya's kissaten (cafes) serve free toast/egg with morning coffee — a distinct local tradition" },
        ],
        sections: [
          {
            title: 'Nagoya-meshi: A Food Identity Distinct From Kyoto and Osaka',
            icon: 'utensils',
            content: "Nagoya's food culture, collectively nicknamed Nagoya-meshi, runs on a different flavour base than the delicate dashi of Kyoto or the punchy street food of Osaka: haccho miso, a dark, intensely savoury red soybean paste fermented for at least two years, shows up across the city's signature dishes and gives Nagoya cuisine a heavier, more robust character. It's easy to miss Nagoya-meshi entirely if you're passing through on the Shinkansen without stopping, but the city treats its food identity as seriously as its castle.",
            tourCard: TOUR_CARD_FOOD,
          },
          {
            title: 'Hitsumabushi: Grilled Eel, Eaten Three Ways',
            icon: 'flame',
            content: "Hitsumabushi is Nagoya's best-known specialty: grilled unagi (freshwater eel) served over rice in a wooden tub, but eaten in a specific, deliberate sequence rather than all at once. The first quarter is eaten plain, to appreciate the eel and rice on their own; the second is topped with condiments like nori, wasabi and scallions; the third is doused in dashi broth to turn it into a light ochazuke; and the fourth is eaten however you preferred the first three. The ritual turns a single dish into three or four distinct eating experiences, and it's genuinely part of the appeal, not a gimmick.",
            tourCard: TOUR_CARD_FOOD,
          },
          {
            title: 'Tebasaki, Miso Katsu and the Nagoya Bar Snack Tradition',
            icon: 'beer',
            content: "Tebasaki — twice-fried chicken wings finished in a sweet-savoury glaze and dusted with sesame and pepper — were invented in Nagoya as a bar snack and have since spread across Japan, but the originals here are still considered the standard. Miso katsu applies the same haccho miso logic to tonkatsu: a breaded, deep-fried pork cutlet finished with a dark, sweet-savoury miso sauce instead of the usual Worcestershire-style tonkatsu sauce found elsewhere in Japan. Both are best tried in Nagoya's izakaya and casual eateries around Sakae and the station area rather than at tourist-facing restaurants, where the versions tend to be milder than the local original.",
            tourCard: TOUR_CARD_INUYAMA,
          },
        ],
        faqs: [
          { q: 'Is Nagoya food spicier or heavier than Kyoto/Osaka food?', a: "Heavier and more savoury rather than spicier — the defining flavour is haccho miso, a dark, fermented red miso used across Nagoya-meshi dishes, which gives everything from katsu sauce to soup a deeper, more intense base than Kyoto's lighter dashi-driven cuisine or Osaka's sauce-forward street food." },
          { q: "What's the proper way to eat hitsumabushi?", a: "Traditionally in three or four stages: first plain, to taste the eel and rice on their own; then with condiments like nori and wasabi; then with dashi broth poured over to make an ochazuke; and the last portion however you liked the previous three best. It's meant to be a deliberate ritual, not eaten all in one go." },
          { q: 'Where did tebasaki chicken wings actually come from?', a: "They're a genuine Nagoya invention — twice-fried wings finished in a sweet-savoury glaze, originally created as an izakaya bar snack. They've since spread across Japan, but Nagoya's originals are still considered the reference version." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is Nagoya food spicier or heavier than Kyoto/Osaka food?", "acceptedAnswer": {"@type": "Answer", "text": "Heavier and more savoury rather than spicier — the defining flavour is haccho miso, a dark, fermented red miso used across Nagoya-meshi dishes, which gives everything from katsu sauce to soup a deeper, more intense base than Kyoto's lighter dashi-driven cuisine or Osaka's sauce-forward street food."}}, {"@type": "Question", "name": "What's the proper way to eat hitsumabushi?", "acceptedAnswer": {"@type": "Answer", "text": "Traditionally in three or four stages: first plain, to taste the eel and rice on their own; then with condiments like nori and wasabi; then with dashi broth poured over to make an ochazuke; and the last portion however you liked the previous three best. It's meant to be a deliberate ritual, not eaten all in one go."}}, {"@type": "Question", "name": "Where did tebasaki chicken wings actually come from?", "acceptedAnswer": {"@type": "Answer", "text": "They're a genuine Nagoya invention — twice-fried wings finished in a sweet-savoury glaze, originally created as an izakaya bar snack. They've since spread across Japan, but Nagoya's originals are still considered the reference version."}}]}]},
        heroImage: TOUR_CARD_FOOD.image,
      };

    case 'nagoya-day-trips':
      return {
        title: 'The Best Day Trips from Nagoya: Castles, Mountains and Pottery Towns',
        seoTitle: 'Best Day Trips from Nagoya',
        description: "Inuyama's original castle, the Nakasendo post towns, Tokoname pottery village, and the mountain routes to Shirakawa-go — honestly ranked.",
        fastFacts: [
          { icon: 'train', label: 'Closest', value: 'Inuyama Castle, ~30 min by Meitetsu train' },
          { icon: 'mountain', label: 'Furthest common trip', value: 'Shirakawa-go / Hida-Takayama, ~2-3 hours, best by guided tour' },
          { icon: 'droplet', label: 'Pottery town', value: 'Tokoname, near Chubu Centrair Airport' },
          { icon: 'leaf', label: 'Autumn pick', value: 'Korankei Gorge, Toyota City, ~1 hour' },
        ],
        sections: [
          {
            title: 'Inuyama Castle: The Closest Genuinely Great Day Trip',
            icon: 'landmark',
            content: "Inuyama Castle is one of only twelve castles in Japan with an original wooden keep still standing from the feudal era — unlike Nagoya's own concrete reconstruction, this one predates World War II entirely and is designated a National Treasure. It sits about 30 minutes from central Nagoya on the Meitetsu Inuyama Line, making it the easiest legitimate castle-focused day trip in the region, and the old town below the castle retains enough Edo-period character to justify a couple of extra hours of walking beyond the keep itself.",
            tourCard: TOUR_CARD_INUYAMA,
          },
          {
            title: 'Magome-juku and Tsumago-juku: Walking the Nakasendo',
            icon: 'route',
            content: "The Nakasendo was one of five official Edo-period routes connecting Edo (Tokyo) and Kyoto through the mountains, and its best-preserved stretch runs between the post towns of Magome-juku and Tsumago-juku — a roughly 8km hiking trail through forest that's become one of Japan's most popular short historic walks. Both towns have restored their Edo-period streetscapes without cars, and the trail between them (with luggage-forwarding services available) is genuinely walkable in a half-day for most fitness levels, making it a rare combination of real history and manageable hiking.",
            tourCard: TOUR_CARD_GUJO,
          },
          {
            title: "Tokoname: Nagoya's Pottery Town, Right by the Airport",
            icon: 'droplet',
            content: 'Tokoname is one of Japan\'s Six Ancient Kilns, a pottery tradition dating back roughly a thousand years, and its "Pottery Footpath" (Yakimono Sanpo-michi) winds through a hillside neighbourhood lined with kiln walls, ceramic pipe fences and maneki-neko (lucky cat) figures — Tokoname is also the country\'s largest producer of these ceramic cats. Its proximity to Chubu Centrair Airport makes it a genuinely practical stop on a departure day, not just a dedicated day trip.',
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: 'Further Out: Shirakawa-go, Hida-Takayama and Gujo',
            icon: 'mountain',
            content: "Shirakawa-go, a UNESCO World Heritage village of steep thatched-roof gassho-zukuri farmhouses built to shed heavy mountain snow, and the nearby preserved Edo-period merchant town of Hida-Takayama, are the standout mountain day trips from Nagoya — but at 2-3 hours each way with limited direct public transport, most visitors do these as a guided day tour with private transport rather than assembling local trains and buses themselves. Gujo, en route, adds a smaller castle town with its own clear mountain-stream water running through the streets.",
            tourCard: TOUR_CARD_GUJO,
          },
        ],
        faqs: [
          { q: "What's the single best day trip from Nagoya?", a: "For most first-time visitors, Inuyama Castle — it's the closest (about 30 minutes by train), has a genuine original wooden castle keep rather than a reconstruction, and pairs with a walkable old town, all doable independently without a guided tour." },
          { q: 'Can I do Shirakawa-go as a day trip from Nagoya?', a: "Yes, but it's a long day — 2-3 hours each way with limited direct public transport, so most visitors book a guided day tour with private transport rather than piecing it together themselves. It's usually combined with Hida-Takayama and/or Gujo on the same day." },
          { q: 'Is the Magome-juku to Tsumago-juku walk difficult?', a: "No — it's roughly 8km through forest and small hills, manageable for most fitness levels in about 3 hours at a relaxed pace, and luggage-forwarding services exist so you don't have to carry bags between the two towns." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What's the single best day trip from Nagoya?", "acceptedAnswer": {"@type": "Answer", "text": "For most first-time visitors, Inuyama Castle — it's the closest (about 30 minutes by train), has a genuine original wooden castle keep rather than a reconstruction, and pairs with a walkable old town, all doable independently without a guided tour."}}, {"@type": "Question", "name": "Can I do Shirakawa-go as a day trip from Nagoya?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but it's a long day — 2-3 hours each way with limited direct public transport, so most visitors book a guided day tour with private transport rather than piecing it together themselves. It's usually combined with Hida-Takayama and/or Gujo on the same day."}}, {"@type": "Question", "name": "Is the Magome-juku to Tsumago-juku walk difficult?", "acceptedAnswer": {"@type": "Answer", "text": "No — it's roughly 8km through forest and small hills, manageable for most fitness levels in about 3 hours at a relaxed pace, and luggage-forwarding services exist so you don't have to carry bags between the two towns."}}]}]},
        heroImage: TOUR_CARD_INUYAMA.image,
      };

    case 'nagoya-2-day-itinerary':
      return {
        title: 'Nagoya in Two Days: A Realistic Hour-by-Hour Itinerary',
        seoTitle: 'Nagoya 2-Day Itinerary',
        description: 'A practical two-day Nagoya itinerary — castle and city on day one, a mountain or pottery day trip on day two.',
        fastFacts: [
          { icon: 'calendar', label: 'Day 1', value: 'Nagoya Castle, Osu shopping district, Sakae at night' },
          { icon: 'calendar', label: 'Day 2', value: 'One day trip — Inuyama, Tokoname, or a mountain route' },
          { icon: 'train', label: 'Getting around', value: 'Subway day pass on Day 1, train or guided tour on Day 2' },
        ],
        sections: [
          {
            title: 'Day 1: The City Itself',
            icon: 'calendar',
            content: "**Morning (9am-12pm):** Start at Nagoya Castle — give it 1.5-2 hours to cover the main keep, the reconstructed Honmaru Palace, and a walk around the grounds to the surviving original turrets. Arriving near opening avoids the worst of the midday crowds, especially in cherry blossom or autumn colour season.\n\n**Afternoon (12pm-4pm):** Head to Osu, Nagoya's atmospheric shopping and food district, built around the historic Osu Kannon temple — it's a good lunch stop and a genuinely interesting mix of old shotengai arcades, electronics shops and vintage clothing. If museums interest you more than shopping, the Tokugawa Art Museum (Owari-Tokugawa family treasures) or the Toyota Commemorative Museum of Industry and Technology are both worth the detour instead.\n\n**Evening (5pm onward):** Sakae is Nagoya's main nightlife and dining district — this is where to try tebasaki and miso katsu properly, in an izakaya rather than a tourist restaurant. The Nagoya TV Tower and Sky Promenade give a good elevated view over the city if you want a proper evening finish.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: 'Day 2: Pick One Day Trip',
            icon: 'map',
            content: "**Closest option — Inuyama (half day):** Take the Meitetsu Inuyama Line (~30 min) to see one of Japan's twelve original wooden castle keeps, then walk the old town below it. Doable independently, back in Nagoya by early afternoon if you want to combine it with something else.\n\n**Craft option — Tokoname (half day):** A similar train distance, built around the Pottery Footpath's kiln walls and maneki-neko figures — a good choice if you're departing from Chubu Centrair Airport that evening, since it's right on the way.\n\n**Mountain option — full day:** Gujo, Hida-Takayama and Shirakawa-go, or the Magome-juku to Tsumago-juku Nakasendo walk, both work as full-day trips but are genuinely better done as a guided tour given the limited direct public transport — book this the night before if you want it locked in for your second day.",
            tourCard: TOUR_CARD_GUJO,
          },
        ],
        faqs: [
          { q: 'Is two days enough for Nagoya?', a: "Two days covers the city itself comfortably plus one meaningful day trip. If mountain routes like Shirakawa-go are the priority, consider a third day, since those are full-day commitments on their own." },
          { q: 'Should I book Day 2 in advance?', a: "If you're doing a guided tour to the mountains (Shirakawa-go, Hida-Takayama, the Nakasendo trail), yes — book at least the night before, since these run on fixed group departure times. Inuyama and Tokoname are flexible, walk-in options via regular trains." },
          { q: 'What should I skip if I only have one day, not two?', a: "Skip the day trip and focus entirely on Nagoya Castle, Osu, and Sakae — that's a complete, unrushed day covering the city's essentials without a long train or tour commitment eating into your time." },
        ],
        jsonLd: {"@context": "https://schema.org", "@graph": [{"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is two days enough for Nagoya?", "acceptedAnswer": {"@type": "Answer", "text": "Two days covers the city itself comfortably plus one meaningful day trip. If mountain routes like Shirakawa-go are the priority, consider a third day, since those are full-day commitments on their own."}}, {"@type": "Question", "name": "Should I book Day 2 in advance?", "acceptedAnswer": {"@type": "Answer", "text": "If you're doing a guided tour to the mountains (Shirakawa-go, Hida-Takayama, the Nakasendo trail), yes — book at least the night before, since these run on fixed group departure times. Inuyama and Tokoname are flexible, walk-in options via regular trains."}}, {"@type": "Question", "name": "What should I skip if I only have one day, not two?", "acceptedAnswer": {"@type": "Answer", "text": "Skip the day trip and focus entirely on Nagoya Castle, Osu, and Sakae — that's a complete, unrushed day covering the city's essentials without a long train or tour commitment eating into your time."}}]}]},
        heroImage: TOUR_CARD_CASTLE.image,
      };

    case "ghibli-park-guide":
      return {
        title: "Ghibli Park: How the Tickets Actually Work, and What It Is Not",
        seoTitle: "Ghibli Park Guide",
        description: "Tickets go on sale on the 10th, two months ahead, first-come-first-served — not a lottery. What Ghibli Park is, what it is not, and how to get in from overseas.",
        fastFacts: [
          { icon: "map-pin", label: "Where", value: "Aichi Expo Memorial Park, Nagakute — about 40 minutes from central Nagoya" },
          { icon: "ticket", label: "Tickets released", value: "The 10th of each month, 2pm Japan time, for two months ahead" },
          { icon: "users", label: "Sale type", value: "First-come, first-served queue — not a lottery, except the summer break" },
          { icon: "alert-triangle", label: "Important", value: "No rides. It is a walk-through world, not a theme park" },
        ],
        sections: [
          {
            title: "The Ticket Rule Almost Everyone Gets Wrong",
            icon: "ticket",
            content: "The single most common piece of bad advice about Ghibli Park is that tickets are a lottery. They are not, for most of the year.\n\nEach month's tickets are released **on the 10th of the month, at 2:00pm Japan time, for the month two months ahead**. So November's tickets go on sale on 10 September. It is a first-come, first-served queue — you join a virtual waiting room and you either get through or you do not.\n\nThe exception is the Japanese summer break, roughly July and August, when an advance lottery is added because demand is extreme. Outside that window, it is purely a matter of being online and ready at the right minute.\n\nFrom overseas you buy through **Lawson Ticket** or **Klook**. Make the account days before, not on the day — creating one while a queue is moving is how people miss out. Set an alarm for 2:00pm JST and convert it to your own timezone properly; being ten minutes late is usually the difference between going and not going.",
            tourCard: TOUR_CARD_TOYOTA,
          },
          {
            title: "It Is Not a Theme Park, and That Trips People Up",
            icon: "alert-triangle",
            content: "Ghibli Park has **no rides**. There is no rollercoaster, no log flume, no parade. It is a set of built environments dropped into an existing park, designed to be walked through and looked at.\n\nWhat you get instead is craftsmanship: rooms recreated from the films at full scale, with the objects on the desks and the food on the tables built as real props. The **Grand Warehouse** is the indoor centrepiece and the one with a timed entry slot. **Dondoko Forest** holds Satsuki and Mei's house from *My Neighbour Totoro*, built as a working 1950s Japanese home. **Valley of Witches** covers *Kiki's Delivery Service* and *Howl's Moving Castle*. **Hill of Youth** and **Mononoke Village** complete the set.\n\nIf you arrive expecting Disneyland with Totoro, you will be disappointed within an hour. If you arrive expecting to walk slowly through the inside of the films, it is one of the most detailed things of its kind anywhere. Manage the expectation of anyone you bring, especially children who have been promised a 'theme park'.",
            tourCard: TOUR_CARD_NIGHT,
          },
          {
            title: "Getting There from Nagoya",
            icon: "train",
            content: "Ghibli Park sits inside **Aichi Expo Memorial Park** in Nagakute, east of the city, on the site of the 2005 World Expo.\n\nFrom Nagoya Station take the subway Higashiyama Line east to Fujigaoka, then change to the **Linimo** — a short magnetic-levitation line, itself a small novelty — to **Ai-Chikyuhaku-Kinen-Koen** station. The park entrance is right there. Allow roughly 40 minutes door to door, more at peak times.\n\nThe park areas are spread across a large site with real distances between them. Walking between the furthest points takes time, and the Grand Warehouse timed slot is not flexible, so plan the order rather than wandering. Comfortable shoes matter more here than at most attractions.",
            tourCard: TOUR_CARD_RAIL,
          },
          {
            title: "If You Could Not Get Tickets",
            icon: "lightbulb",
            content: "Sellouts are normal, and a failed ticket grab does not have to sink the day. **Aichi Expo Memorial Park itself is free and open**, and it is a genuinely large, pleasant park with a public pool, ice rink and cycling paths — you can go, see the exteriors and the setting, and not pay anything.\n\nMore usefully, Nagoya's own attractions are underrated precisely because visitors treat the city as a Ghibli transit stop. The **Toyota Commemorative Museum of Industry and Technology**, **Atsuta Shrine** and the SCMaglev and Railway Park all sit within the city and none require months of planning.\n\nAnd if the trip is specifically about Studio Ghibli, the **Ghibli Museum in Mitaka**, Tokyo, is a separate institution with its own separate ticketing — smaller, older, and a completely different experience. People conflate the two constantly. They are not the same place and one ticket does not cover the other.",
            tourCard: TOUR_CARD_CASTLE,
          },
        ],
        faqs: [
          { q: "Are Ghibli Park tickets a lottery?", a: "Not usually. Tickets go on sale on the 10th of each month at 2pm Japan time, for the month two months ahead, on a first-come first-served basis through Lawson Ticket or Klook. A lottery is added only for the Japanese summer break in July and August." },
          { q: "Does Ghibli Park have rides?", a: "No. It is a walk-through park of recreated sets and buildings from the films, not a ride-based theme park. Expect detailed environments to explore rather than attractions to queue for." },
          { q: "How do I get to Ghibli Park from Nagoya?", a: "Subway Higashiyama Line to Fujigaoka, then the Linimo maglev line to Ai-Chikyuhaku-Kinen-Koen station, which is at the park entrance. About 40 minutes in total from Nagoya Station." },
          { q: "Is Ghibli Park the same as the Ghibli Museum?", a: "No. The Ghibli Museum is in Mitaka, Tokyo, and is a separate, smaller institution with its own ticketing. Ghibli Park is in Nagakute near Nagoya. A ticket for one does not admit you to the other." },
          { q: "What are the five areas of Ghibli Park?", a: "Ghibli's Grand Warehouse, Hill of Youth, Dondoko Forest, Mononoke Village and Valley of Witches. The Grand Warehouse is indoors and requires a timed entry slot." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Are Ghibli Park tickets a lottery?", acceptedAnswer: { "@type": "Answer", text: "Not usually. Tickets go on sale on the 10th of each month at 2pm Japan time, for the month two months ahead, on a first-come first-served basis through Lawson Ticket or Klook. A lottery is added only for the Japanese summer break in July and August." } },
            { "@type": "Question", name: "Does Ghibli Park have rides?", acceptedAnswer: { "@type": "Answer", text: "No. It is a walk-through park of recreated sets and buildings from the films, not a ride-based theme park. Expect detailed environments to explore rather than attractions to queue for." } },
            { "@type": "Question", name: "How do I get to Ghibli Park from Nagoya?", acceptedAnswer: { "@type": "Answer", text: "Subway Higashiyama Line to Fujigaoka, then the Linimo maglev line to Ai-Chikyuhaku-Kinen-Koen station, which is at the park entrance. About 40 minutes in total from Nagoya Station." } },
            { "@type": "Question", name: "Is Ghibli Park the same as the Ghibli Museum?", acceptedAnswer: { "@type": "Answer", text: "No. The Ghibli Museum is in Mitaka, Tokyo, and is a separate, smaller institution with its own ticketing. Ghibli Park is in Nagakute near Nagoya. A ticket for one does not admit you to the other." } },
            { "@type": "Question", name: "What are the five areas of Ghibli Park?", acceptedAnswer: { "@type": "Answer", text: "Ghibli's Grand Warehouse, Hill of Youth, Dondoko Forest, Mononoke Village and Valley of Witches. The Grand Warehouse is indoors and requires a timed entry slot." } },
          ],
        },
        heroImage: TOUR_CARD_TOYOTA.image,
      };

    case "nagoya-castle-keep-closure":
      return {
        title: "Nagoya Castle: The Keep Is Closed — Here Is What You Can Still See",
        seoTitle: "Nagoya Castle Keep Closure",
        description: "The main keep has been shut since 2018 and will be for years. The Honmaru Palace beside it is open, brand new, and arguably the better building.",
        fastFacts: [
          { icon: "alert-triangle", label: "Main keep", value: "Closed to visitors since May 2018 on seismic and ageing grounds" },
          { icon: "hammer", label: "Being rebuilt", value: "In wood, as originally built; completion targeted around 2032" },
          { icon: "door-open", label: "Open instead", value: "Honmaru Palace, reconstructed with traditional methods, opened 2018" },
          { icon: "landmark", label: "Grounds", value: "Open — gardens, walls, moats and the palace are all accessible" },
        ],
        sections: [
          {
            title: "The Keep You See in Photos, You Cannot Go Into",
            icon: "alert-triangle",
            content: "Nagoya Castle's main keep — the big green-roofed tower with the golden *shachihoko* fish on the ridge — **closed to the public in May 2018** and has not reopened. It is structurally aged and does not meet modern seismic standards.\n\nThere is a second thing worth knowing: the tower standing there now is not the original. The castle burned in 1945 and the keep was rebuilt in 1959 in ferro-concrete, in the postwar style of a lot of Japanese castle reconstructions. What is happening now is a second reconstruction — this time in **wood**, using traditional methods, with completion targeted around 2032.\n\nSo if your mental image of visiting Nagoya Castle is climbing the tower for the view, adjust it. You can walk the grounds, photograph the keep from outside, and see it from every angle. You cannot go in, and you will not be able to for years.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: "The Palace Is the Reason to Come Now",
            icon: "door-open",
            content: "The **Honmaru Palace** is the answer, and it is a better building than the concrete keep ever was.\n\nIt was the residence and audience hall of the Owari branch of the Tokugawa family, destroyed in 1945, and rebuilt over roughly a decade using **only traditional materials and methods**, following detailed prewar plans, photographs and surveys that had survived. It opened fully in 2018 — the same year the keep closed.\n\nWhat you walk through is hinoki cypress, gold-leaf sliding screens repainted from the originals, and rooms arranged by rank so that the further in you are admitted, the more elaborate the decoration. It is loud, gold and startlingly bright, which is what these interiors actually looked like before four centuries of soot.\n\nBecause it is new, everything is crisp. Because it is a faithful reconstruction, it is not a museum display — it is the building. That combination is rare and it is why the castle is still very much worth the ticket despite the closed keep.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: "If You Want an Original Keep, Go to Inuyama",
            icon: "landmark",
            content: "Only twelve castle keeps in Japan survive from the feudal era without having been destroyed and rebuilt. Nagoya's is not one of them. **Inuyama Castle**, about 40 minutes north of Nagoya, is.\n\nIt is small, steep and wooden, with worn stairs you climb in socks and a top-floor balcony over the Kiso River. It is a National Treasure and it is what a castle keep is actually like — cramped, dark, and built for defence rather than display. Standing in it after seeing Nagoya's concrete tower from the outside is a useful contrast.\n\nInuyama pairs naturally with the Nakasendo post towns further north, which is how most day trips out of Nagoya are structured. If castles are the reason you came to this region, do Nagoya's palace and Inuyama's keep, in that order.",
            tourCard: TOUR_CARD_INUYAMA,
          },
          {
            title: "What Else Is on the Grounds",
            icon: "trees",
            content: "The site is large and the ticket covers all of it. The **Ninomaru Garden** is a formal Edo-period garden in the second bailey, quiet and mostly ignored by visitors heading straight for the keep. The stone walls and moats are original in large stretches and worth walking the perimeter for.\n\n**Kinshachi Yokocho**, a food street beside the east and west gates, does Nagoya's specialities — *miso katsu*, *hitsumabushi* grilled eel, *tebasaki* wings — in a compact row. It is aimed at visitors but the food is genuinely local rather than generic.\n\nAllow about two hours for the palace, garden and grounds. Cherry blossom in early April and autumn colour in late November are the two windows when the grounds themselves become the attraction.",
            tourCard: TOUR_CARD_SUSHI,
          },
        ],
        faqs: [
          { q: "Can you go inside Nagoya Castle?", a: "Not the main keep — it has been closed to the public since May 2018 for ageing and seismic reasons, and is being rebuilt in wood with completion targeted around 2032. The Honmaru Palace next to it is open, as are the grounds and gardens." },
          { q: "Is Nagoya Castle still worth visiting with the keep closed?", a: "Yes, for the Honmaru Palace. It was rebuilt using only traditional materials and methods from surviving prewar plans and opened in 2018 — gold-leaf screens, hinoki cypress and rooms graded by rank. The grounds, moats and Ninomaru Garden are also open." },
          { q: "Why is Nagoya Castle's keep being rebuilt in wood?", a: "The tower standing today is a 1959 ferro-concrete reconstruction of the original, which burned in 1945. It closed in 2018 as ageing and seismically unsound, and the decision was taken to rebuild it in wood using traditional methods rather than repair the concrete." },
          { q: "Where can I see an original Japanese castle keep near Nagoya?", a: "Inuyama Castle, about 40 minutes north. It is one of only twelve keeps in Japan surviving from the feudal era and is designated a National Treasure." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Can you go inside Nagoya Castle?", acceptedAnswer: { "@type": "Answer", text: "Not the main keep — it has been closed to the public since May 2018 for ageing and seismic reasons, and is being rebuilt in wood with completion targeted around 2032. The Honmaru Palace next to it is open, as are the grounds and gardens." } },
            { "@type": "Question", name: "Is Nagoya Castle still worth visiting with the keep closed?", acceptedAnswer: { "@type": "Answer", text: "Yes, for the Honmaru Palace. It was rebuilt using only traditional materials and methods from surviving prewar plans and opened in 2018 — gold-leaf screens, hinoki cypress and rooms graded by rank. The grounds, moats and Ninomaru Garden are also open." } },
            { "@type": "Question", name: "Why is Nagoya Castle's keep being rebuilt in wood?", acceptedAnswer: { "@type": "Answer", text: "The tower standing today is a 1959 ferro-concrete reconstruction of the original, which burned in 1945. It closed in 2018 as ageing and seismically unsound, and the decision was taken to rebuild it in wood using traditional methods rather than repair the concrete." } },
            { "@type": "Question", name: "Where can I see an original Japanese castle keep near Nagoya?", acceptedAnswer: { "@type": "Answer", text: "Inuyama Castle, about 40 minutes north. It is one of only twelve keeps in Japan surviving from the feudal era and is designated a National Treasure." } },
          ],
        },
        heroImage: TOUR_CARD_CASTLE.image,
      };

    case "atsuta-shrine-guide":
      return {
        title: "Atsuta Shrine: The Sword You Will Never See",
        seoTitle: "Atsuta Shrine Guide",
        description: "Atsuta holds one of the three Imperial Regalia of Japan, and it is never displayed to anyone. What you can actually see at Nagoya's oldest and most important shrine.",
        fastFacts: [
          { icon: "landmark", label: "Founded", value: "Traditionally around 1,900 years ago — among Japan's oldest shrines" },
          { icon: "sword", label: "Enshrined here", value: "Kusanagi-no-Tsurugi, one of the three Imperial Regalia" },
          { icon: "eye-off", label: "On display", value: "Never. The sword is not shown to the public, or to almost anyone" },
          { icon: "trees", label: "Grounds", value: "About 190,000 m² of forest inside the city; free to enter" },
        ],
        sections: [
          {
            title: "The Most Important Object in Nagoya Is Invisible",
            icon: "eye-off",
            content: "Atsuta Jingu enshrines the **Kusanagi-no-Tsurugi**, the Grass-Cutting Sword — one of the three Imperial Regalia of Japan, alongside the mirror at Ise and the jewel in Tokyo.\n\nIt is not on display. It has never been a museum object, and it is not shown to the public, to visitors, or in practice to almost anyone at all. Even the emperor is not held to view it directly. Descriptions of it that circulate come from a handful of disputed historical accounts.\n\nThis is worth understanding before you go, because it defines the visit. You are not going to see the sword. You are going to a working shrine whose significance is entirely a matter of what is understood to be inside a building you cannot enter. If you need an object to look at, the **Treasure Hall** on the grounds displays swords, masks and documents from the shrine's collection, and is the closest thing to a physical payoff.",
            tourCard: TOUR_CARD_TOYOTA,
          },
          {
            title: "What You Actually Experience",
            icon: "trees",
            content: "What Atsuta gives you is space and trees. The grounds run to roughly 190,000 square metres of forest in the middle of a large industrial city, and the approach — a long gravel path under camphor trees, some of them said to be a thousand years old — is the point.\n\nIt is not visually spectacular in the way Kyoto's famous shrines are. There is no vermilion tunnel, no photogenic gate over water. The buildings are in the plain **Shinmei-zukuri** style, unpainted cypress with a thatched roof, the same architectural language as Ise. Restraint is the aesthetic.\n\nThat plainness is why it is quiet. Atsuta receives millions of visitors a year, overwhelmingly Japanese, and outside New Year it absorbs them easily. On an ordinary weekday morning you can walk the main approach nearly alone, ten minutes from a subway station in Japan's fourth-largest city.",
            tourCard: TOUR_CARD_CASTLE,
          },
          {
            title: "Eat the Kishimen on the Grounds",
            icon: "utensils",
            content: "Inside the shrine precinct is **Miyakishimen**, an open-sided restaurant serving *kishimen* — Nagoya's flat, wide wheat noodle — under the trees.\n\nIt is the local speciality and this is the canonical place to eat it: broth, flat noodles, a scatter of dried bonito, spring onion and fried tofu, eaten at wooden tables with the forest around you. There is usually a queue at lunch and it moves.\n\nKishimen is one of the reasons Nagoya's food is worth taking seriously rather than treating as a stopover. The city has a genuinely distinct regional cuisine — red *hatcho* miso in everything, *miso katsu*, *tebasaki* wings, *hitsumabushi* eel served three ways in one bowl — and none of it tastes like Tokyo or Osaka.",
            tourCard: TOUR_CARD_SUSHI,
          },
          {
            title: "Getting There, and What to Pair It With",
            icon: "train",
            content: "Atsuta is south of the city centre, a few minutes' walk from **Jingu-mae** on the Meitetsu line or **Jingu-nishi** on the Meijo subway line. From Nagoya Station it is about fifteen minutes.\n\nIt pairs naturally with the **SCMaglev and Railway Park** further south near the port, or with Osu, the covered shopping district, on the way back in. A common half-day is Atsuta in the morning while it is quiet, kishimen for lunch on the grounds, then Osu or the port in the afternoon.\n\nOne timing note: the shrine's biggest day by a wide margin is *hatsumode*, the first shrine visit of the New Year, when attendance runs into the millions across the first few days of January. If you are in Nagoya then, going is a genuine cultural experience — but it is a crowd event, not a quiet walk under trees.",
            tourCard: TOUR_CARD_RAIL,
          },
        ],
        faqs: [
          { q: "Can you see the sword at Atsuta Shrine?", a: "No. Kusanagi-no-Tsurugi, one of the three Imperial Regalia, is enshrined at Atsuta but is never displayed — not to the public and in practice not to anyone. The Treasure Hall on the grounds shows other swords and artefacts from the shrine's collection." },
          { q: "Is Atsuta Shrine worth visiting?", a: "Yes, if you want a working shrine with genuine significance rather than a photogenic one. The draw is 190,000 m² of ancient forest in the middle of Nagoya, plain Ise-style architecture, and how quiet it stays despite millions of annual visitors." },
          { q: "What should I eat at Atsuta Shrine?", a: "Kishimen — Nagoya's flat wheat noodle — at Miyakishimen, the open-sided restaurant inside the shrine grounds. It is the local speciality and the canonical place to try it." },
          { q: "How do I get to Atsuta Shrine?", a: "Jingu-mae station on the Meitetsu line, or Jingu-nishi on the Meijo subway line — both a few minutes' walk. About fifteen minutes from Nagoya Station." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Can you see the sword at Atsuta Shrine?", acceptedAnswer: { "@type": "Answer", text: "No. Kusanagi-no-Tsurugi, one of the three Imperial Regalia, is enshrined at Atsuta but is never displayed — not to the public and in practice not to anyone. The Treasure Hall on the grounds shows other swords and artefacts from the shrine's collection." } },
            { "@type": "Question", name: "Is Atsuta Shrine worth visiting?", acceptedAnswer: { "@type": "Answer", text: "Yes, if you want a working shrine with genuine significance rather than a photogenic one. The draw is 190,000 m² of ancient forest in the middle of Nagoya, plain Ise-style architecture, and how quiet it stays despite millions of annual visitors." } },
            { "@type": "Question", name: "What should I eat at Atsuta Shrine?", acceptedAnswer: { "@type": "Answer", text: "Kishimen — Nagoya's flat wheat noodle — at Miyakishimen, the open-sided restaurant inside the shrine grounds. It is the local speciality and the canonical place to try it." } },
            { "@type": "Question", name: "How do I get to Atsuta Shrine?", acceptedAnswer: { "@type": "Answer", text: "Jingu-mae station on the Meitetsu line, or Jingu-nishi on the Meijo subway line — both a few minutes' walk. About fifteen minutes from Nagoya Station." } },
          ],
        },
        heroImage: TOUR_CARD_TOYOTA.image,
      };

    case "toyota-museums-guide":
      return {
        title: "The Three Toyota Attractions Near Nagoya, and Which One to Pick",
        seoTitle: "Toyota Museums Nagoya Guide",
        description: "There are three different Toyota sites around Nagoya and people book the wrong one constantly. What each is, where it is, and which one you actually want.",
        fastFacts: [
          { icon: "factory", label: "In the city", value: "Toyota Commemorative Museum of Industry and Technology — looms and cars" },
          { icon: "car", label: "At head office", value: "Toyota Kaikan Museum, Toyota City — current models, plus the plant tour" },
          { icon: "calendar", label: "Plant tour", value: "Advance booking essential; runs on weekdays and pauses for shutdowns" },
          { icon: "landmark", label: "Out of town", value: "Toyota Automobile Museum, Nagakute — global motoring history, not just Toyota" },
        ],
        sections: [
          {
            title: "Three Different Places, Very Similar Names",
            icon: "alert-triangle",
            content: "This is the single most common Nagoya planning mistake, and it costs people a day.\n\n**Toyota Commemorative Museum of Industry and Technology** is in Nagoya city itself, in the original Toyoda brick weaving mill. It covers how a loom company became a car company.\n\n**Toyota Kaikan Museum** is at the company's head office in Toyota City, about an hour away. It shows current and near-future models, and it is the departure point for the **factory tour**.\n\n**Toyota Automobile Museum** is in Nagakute, near Ghibli Park, and is a general history of the automobile worldwide — Fords, Mercedes, Citroëns — not a Toyota showroom.\n\nThey are three separate sites with three separate purposes. Booking a hotel near one because you meant another is an easy and annoying error.",
            tourCard: TOUR_CARD_TOYOTA,
          },
          {
            title: "The One in the City Is the Best of Them",
            icon: "factory",
            content: "If you only do one, do the **Commemorative Museum of Industry and Technology**, and the reason is the looms.\n\nToyota did not begin as a car maker. Sakichi Toyoda invented automatic looms, and the textile machinery pavilion runs those machines — actual working nineteenth and twentieth-century looms, operated in front of you, getting progressively more automated as you walk the room. It is loud, mechanical and genuinely gripping in a way a car showroom is not.\n\nThe automobile pavilion then picks up the same thread: how the metalworking and precision the loom business demanded became the basis for building cars. It is a museum about *how a company changes what it makes*, which is a far more interesting subject than the cars themselves.\n\nIt is inside Nagoya, reachable on the Meitetsu line in minutes, and takes two to three hours.",
            tourCard: TOUR_CARD_TOYOTA,
          },
          {
            title: "The Factory Tour Needs Planning",
            icon: "calendar",
            content: "The **plant tour** at Toyota City is the one people most want and most often miss, because it cannot be done on a whim.\n\nIt requires **advance reservation**, places are limited, it runs on weekdays only, and it pauses entirely during company shutdowns — New Year, Golden Week, the summer break — as well as for maintenance periods. English-supported sessions are fewer than Japanese ones.\n\nIf you want it, book it before you fix the rest of your Nagoya dates, then build around it. Treating it as a maybe on the day means not going. Check the official reservation page for the current window, since the rules and capacity have changed more than once.\n\nThe Kaikan Museum at the same site is walk-in and does not need a reservation, so a failed plant booking is not a wasted trip — but the assembly line is the actual draw.",
            tourCard: TOUR_CARD_RAIL,
          },
          {
            title: "Pairing It with the Rest of the Region",
            icon: "route",
            content: "The city museum slots into a normal Nagoya day: castle in the morning, Toyota museum after lunch, Atsuta or Osu in the evening. That is the efficient version and it is what most private day tours here are built around.\n\nThe **Automobile Museum in Nagakute** is the one to combine with **Ghibli Park**, since both sit in the same eastern suburb on the Linimo line. If you have a Ghibli ticket for a morning slot, the car museum is a sensible afternoon.\n\nFor anyone whose interest is industrial rather than automotive specifically, Nagoya has an unusually deep bench: the **SCMaglev and Railway Park** near the port has the record-holding maglev test vehicles, and the region's ceramics and aviation heritage are both museum-grade. This is a manufacturing city and its best attractions reflect that honestly.",
            tourCard: TOUR_CARD_TOKONAME,
          },
        ],
        faqs: [
          { q: "Which Toyota museum should I visit in Nagoya?", a: "The Toyota Commemorative Museum of Industry and Technology, inside Nagoya city. It runs original working looms and traces how a textile machinery company became a car maker — more interesting than a model showroom and much easier to reach than the head office." },
          { q: "How do I book the Toyota factory tour?", a: "Reserve in advance through Toyota's official site. It runs on weekdays only, has limited places, English sessions are fewer, and it pauses for New Year, Golden Week, the summer break and maintenance. Book it before fixing your other Nagoya dates." },
          { q: "What is the difference between the Toyota museums?", a: "Three sites: the Commemorative Museum of Industry and Technology in Nagoya city covers looms and the origins of the company; the Toyota Kaikan Museum at head office in Toyota City shows current models and hosts the plant tour; the Toyota Automobile Museum in Nagakute is a global history of the car, not Toyota-specific." },
          { q: "Can I combine a Toyota museum with Ghibli Park?", a: "Yes — the Toyota Automobile Museum in Nagakute is in the same eastern suburb as Ghibli Park, on the Linimo line, so the two pair naturally in one day." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Which Toyota museum should I visit in Nagoya?", acceptedAnswer: { "@type": "Answer", text: "The Toyota Commemorative Museum of Industry and Technology, inside Nagoya city. It runs original working looms and traces how a textile machinery company became a car maker — more interesting than a model showroom and much easier to reach than the head office." } },
            { "@type": "Question", name: "How do I book the Toyota factory tour?", acceptedAnswer: { "@type": "Answer", text: "Reserve in advance through Toyota's official site. It runs on weekdays only, has limited places, English sessions are fewer, and it pauses for New Year, Golden Week, the summer break and maintenance. Book it before fixing your other Nagoya dates." } },
            { "@type": "Question", name: "What is the difference between the Toyota museums?", acceptedAnswer: { "@type": "Answer", text: "Three sites: the Commemorative Museum of Industry and Technology in Nagoya city covers looms and the origins of the company; the Toyota Kaikan Museum at head office in Toyota City shows current models and hosts the plant tour; the Toyota Automobile Museum in Nagakute is a global history of the car, not Toyota-specific." } },
            { "@type": "Question", name: "Can I combine a Toyota museum with Ghibli Park?", acceptedAnswer: { "@type": "Answer", text: "Yes — the Toyota Automobile Museum in Nagakute is in the same eastern suburb as Ghibli Park, on the Linimo line, so the two pair naturally in one day." } },
          ],
        },
        heroImage: TOUR_CARD_TOYOTA.image,
      };

    case "nakasendo-magome-tsumago-guide":
      return {
        title: "Walking the Nakasendo: Magome to Tsumago from Nagoya",
        seoTitle: "Magome to Tsumago Nakasendo Guide",
        description: "The most accessible surviving stretch of Japan's Edo-era highway — an 8 km walk between two preserved post towns, done as a day trip from Nagoya.",
        fastFacts: [
          { icon: "footprints", label: "The walk", value: "About 8 km, Magome-juku to Tsumago-juku, roughly 2.5 to 3 hours" },
          { icon: "mountain", label: "Terrain", value: "Uphill from Magome to the Magome Pass, then downhill to Tsumago" },
          { icon: "landmark", label: "What it is", value: "Two preserved post towns on the Edo-era Nakasendo highway" },
          { icon: "train", label: "From Nagoya", value: "About 1.5 hours by train and bus to the Magome end" },
        ],
        sections: [
          {
            title: "What the Nakasendo Was",
            icon: "landmark",
            content: "In the Edo period two highways connected Kyoto and Edo. The Tokaido ran along the coast; the **Nakasendo** ran inland through the mountains. Along it were sixty-nine *shukuba* — post towns where travellers, merchants and daimyo processions rested, changed horses and slept.\n\nMost of the Nakasendo is now road. Two adjacent post towns in the Kiso Valley, **Magome-juku** and **Tsumago-juku**, were preserved instead — Tsumago in particular was the subject of a deliberate conservation campaign from the 1960s, when residents agreed not to sell, rent or destroy the buildings.\n\nThe result is a village where power lines are buried, vending machines are hidden behind wooden screens and cars are kept out during the day. It is not a reconstruction. These are the actual buildings, still lived in.",
            tourCard: TOUR_CARD_MAGOME,
          },
          {
            title: "The Walk Itself",
            icon: "footprints",
            content: "The trail between them is roughly **8 km and takes about two and a half to three hours** at a steady pace. It is a real walk but not a hard one — a stone-paved and forest path climbing from Magome to the Magome Pass, then descending through cedar and bamboo into Tsumago.\n\nDo it **Magome to Tsumago**, not the reverse. Magome sits higher on its own hillside but the pass is between them, and this direction puts the climb in the first hour when you are fresh and the long descent at the end. It also finishes in the better-preserved of the two towns, which is the right way round.\n\nAlong the way you pass waterfalls, a teahouse where a volunteer serves free tea, and **bear bells** mounted on posts that walkers ring as they pass. The bells are not decorative. Ring them.\n\nBoth towns run a **luggage forwarding service** between them in season — drop your bag in Magome in the morning, collect it in Tsumago in the afternoon. If you are walking with a suitcase in tow, use it.",
            tourCard: TOUR_CARD_MAGOME,
          },
          {
            title: "Doing It from Nagoya",
            icon: "train",
            content: "Nagoya is the natural base, better than Tokyo or Kyoto, and this is one of the strongest arguments for stopping in the city at all.\n\nThe standard route is a JR train up the Chuo Line to **Nakatsugawa**, then a local bus to Magome. Allow about an hour and a half. At the Tsumago end, a bus runs to **Nagiso** station to pick the line back up. Buses are infrequent — check the return times before you start walking, because missing the last one is the classic mistake here.\n\nThat timetable dependency is why a lot of people do this on an organised day trip instead: transport is handled, the timing is guaranteed, and you walk rather than watch a clock. Either works. Independently it is entirely doable, but it needs the bus times written down.",
            tourCard: TOUR_CARD_INUYAMA,
          },
          {
            title: "When to Go",
            icon: "calendar",
            content: "**Late October into November** is the best window. The Kiso Valley turns properly, the walking temperature is ideal, and the cedar forest sections are at their most atmospheric.\n\nSpring is the second choice — fresh green and manageable temperatures. **Summer** is humid and the forest holds the heat; it is doable but start early. **Winter** brings snow and ice on the pass; the towns are beautiful and very quiet, but the trail can be genuinely slippery and daylight is short.\n\nWhatever the season, start early. Both towns are day-trip destinations and both empty by late afternoon, which means the last hour of the walk and the first hour in Tsumago are often the quietest and best part of the day. Staying overnight in a Tsumago *minshuku* is the upgrade — the town after the buses leave is a different place entirely.",
            tourCard: TOUR_CARD_MAGOME,
          },
        ],
        faqs: [
          { q: "How long is the Magome to Tsumago walk?", a: "About 8 km, taking roughly two and a half to three hours at a steady pace. It climbs from Magome to the Magome Pass, then descends into Tsumago." },
          { q: "Should I walk Magome to Tsumago or the other way?", a: "Magome to Tsumago. The pass sits between them, so this direction puts the climb first while you are fresh and gives you a long descent at the end — and it finishes in Tsumago, the better-preserved of the two towns." },
          { q: "Can I do the Nakasendo walk as a day trip from Nagoya?", a: "Yes, and Nagoya is the best base for it. JR Chuo Line to Nakatsugawa, then a bus to Magome — about an hour and a half. Return by bus from Tsumago to Nagiso station. Check the bus times before you start walking; they are infrequent." },
          { q: "When is the best time to walk the Nakasendo?", a: "Late October into November for autumn colour and ideal walking temperatures. Spring is a good second. Summer is humid, and winter brings snow and ice on the pass with short daylight." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How long is the Magome to Tsumago walk?", acceptedAnswer: { "@type": "Answer", text: "About 8 km, taking roughly two and a half to three hours at a steady pace. It climbs from Magome to the Magome Pass, then descends into Tsumago." } },
            { "@type": "Question", name: "Should I walk Magome to Tsumago or the other way?", acceptedAnswer: { "@type": "Answer", text: "Magome to Tsumago. The pass sits between them, so this direction puts the climb first while you are fresh and gives you a long descent at the end — and it finishes in Tsumago, the better-preserved of the two towns." } },
            { "@type": "Question", name: "Can I do the Nakasendo walk as a day trip from Nagoya?", acceptedAnswer: { "@type": "Answer", text: "Yes, and Nagoya is the best base for it. JR Chuo Line to Nakatsugawa, then a bus to Magome — about an hour and a half. Return by bus from Tsumago to Nagiso station. Check the bus times before you start walking; they are infrequent." } },
            { "@type": "Question", name: "When is the best time to walk the Nakasendo?", acceptedAnswer: { "@type": "Answer", text: "Late October into November for autumn colour and ideal walking temperatures. Spring is a good second. Summer is humid, and winter brings snow and ice on the pass with short daylight." } },
          ],
        },
        heroImage: TOUR_CARD_MAGOME.image,
      };
    default:
      return null;
  }
}
