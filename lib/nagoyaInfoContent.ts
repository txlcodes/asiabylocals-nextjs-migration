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

    default:
      return null;
  }
}
