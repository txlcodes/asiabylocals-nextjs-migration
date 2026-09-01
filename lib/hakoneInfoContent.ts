// Hakone & Mt. Fuji authority pages (2026-09). Same CityInfoData shape as
// cityInfoContent.ts. Reached via getHakoneInfoContent() -> getCityInfoContent().
//
// Hakone and the Fuji Five Lakes are treated as one destination here because
// that is how they are actually sold and travelled: nearly every operator we
// list runs across both, and the searches that matter are about Mt Fuji.
import type { CityInfoData } from './cityInfoContent';

const CARD_0 = {
    slug: "mount-fuji-sunrise-summit-climb-2-days",
    title: "Mount Fuji Sunrise Summit Climb Over Two Days with Tokyo Transfers",
    description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
    price: 'From USD 525',
    duration: "2 days / 1 night",
    image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271570/asiabylocals/tours/mount-fuji-sunrise-summit-2day-guided-climb/img0.png",
  };

const CARD_1 = {
    slug: "hakone-caldera-fuji-lakes-day-tour",
    title: "Hakone Caldera and Fuji Lakes Day Tour: Hakone Shrine, Ropeway and Lake Ashi Cruise",
    description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
    price: 'From USD 58.6',
    duration: "1 day",
    image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788270636/asiabylocals/tours/hakone-mt-fuji-ropeway-lake-ashi-cruise-day-tour/img0.jpg",
  };

const CARD_2 = {
    slug: "hakone-loop-guided-day-tour-tozan-ropeway",
    title: "The Hakone Loop with a Local Guide: Tozan Railway, Owakudani Ropeway and Lake Ashinoko",
    description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
    price: 'From USD 526',
    duration: "Public transport version ~8 hours (9:30 AM - 5:30 PM); private transport version ~11 hours (8:00 AM - 7:00 PM)",
    image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271747/asiabylocals/tours/hakone-explorer-guided-day-tour/img0.webp",
  };

const CARD_3 = {
    slug: "hakone-private-day-tour-licensed-guide",
    title: "Private Hakone Day with a Government-Licensed Guide: Owakudani, Lake Ashinoko and the Lakeside Torii",
    description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
    price: 'From USD 398.14',
    duration: "1 day",
    image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788270648/asiabylocals/tours/hakone-customised-private-day-tour-licensed-guide/img0.png",
  };

const CARD_4 = {
    slug: "mount-fuji-signature-private-day-tour-kawaguchiko",
    title: "Mount Fuji Signature Private Day Tour from Kawaguchiko",
    description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
    price: 'From USD 488',
    duration: "6 hours",
    image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271475/asiabylocals/tours/kawaguchiko-fuji-signature-private-day-tour/img0.jpg",
  };

const CARD_5 = {
    slug: "hakone-day-tour-from-tokyo-lake-ashi-owakudani",
    title: "Hakone in a Day from Tokyo: Lake Ashi Cruise, Owakudani Ropeway, Museum and Onsen",
    description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
    price: 'From USD 840',
    duration: "About 11 hours door-to-door",
    image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271623/asiabylocals/tours/hakone-private-day-tour-onsen-open-air-museum/img0.jpg",
  };

export function getHakoneInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "climbing-mount-fuji-guide":
      return {
        title: "Climbing Mount Fuji: Routes, Season, Permits and What It Actually Takes",
        seoTitle: "Climbing Mount Fuji: Complete Guide",
        description: "Which of Fuji's four routes to climb, when the season opens, the new climbing fees and daily caps, altitude sickness, huts, and how to time sunrise properly.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271570/asiabylocals/tours/mount-fuji-sunrise-summit-2day-guided-climb/img0.png",
        fastFacts: [
          { icon: "mountain", label: "Summit height", value: "3,776 m (Kengamine, the true high point on the crater rim)" },
          { icon: "mountain", label: "Official season", value: "Roughly early July to early September; exact opening dates differ by route and are announced each year" },
          { icon: "mountain", label: "Routes", value: "Four: Yoshida, Subashiri, Gotemba, Fujinomiya" },
          { icon: "mountain", label: "Typical time", value: "5-7 hours up, 3-5 hours down on Yoshida, excluding hut rest" },
          { icon: "mountain", label: "Fifth-station altitude", value: "About 1,450 m (Gotemba) to about 2,400 m (Fujinomiya) - altitude sickness starts here, not at the top" },
          { icon: "mountain", label: "Fees and caps", value: "Yamanashi introduced a climbing fee and a daily entry cap on the Yoshida route; Shizuoka has since applied fees to its three routes. Amounts have changed year to year - check the official prefectural site before you book" },
        ],
        sections: [
          {
            title: "Climbing Mount Fuji: Routes, Season, Permits and What It Actually Takes",
            icon: "mountain",
            content: "Mount Fuji is 3,776 metres high, which makes it a serious mountain by any measure, and it is also a walk-up with no technical climbing at all, which is why roughly two hundred thousand people a year get to the top. Those two facts sit awkwardly together and they explain almost every problem climbers run into: people arrive treating it as a long staircase and discover that a long staircase at nearly four thousand metres, in weather that changes by the hour, is a different proposition entirely.\n\nThe mountain is an active stratovolcano. Its last eruption, in 1707, is known as the Hoei eruption; it blew a crater into the southeast flank that you can still see from the Gotemba side and dropped ash on Edo, a hundred kilometres away. It has been quiet since, but it is monitored, not retired. In 2013 UNESCO inscribed it as a World Heritage Site under the cultural criteria rather than the natural ones, recognising the mountain's role in Japanese religion, pilgrimage and art rather than its geology. Fuji has been climbed as an act of worship for centuries, and the summit shrine, the stone huts and the counting of stations up the slope are all inherited from that tradition.\n\nThe official climbing season runs roughly from early July to early September. Outside it, the huts are shuttered, the toilets are closed, the buses to the fifth stations mostly stop, and the mountain becomes a genuine winter mountaineering objective on hard ice with severe wind. Prefectural authorities strongly discourage off-season attempts, and people die on Fuji in the shoulder months most years. This guide assumes you are climbing in season.",
            tourCard: CARD_0,
          },
          {
            title: "The four routes, and how to pick one",
            icon: "mountain",
            content: "The Yoshida route on the Yamanashi side is the one most people mean when they say they climbed Fuji. It starts from the Fuji Subaru Line 5th Station at around 2,300 metres, has by far the highest concentration of mountain huts, the most first aid provision, and separate ascent and descent trails for much of its length. It is also the busiest, and in peak season the final switchbacks above the eighth station can back up into a slow-moving queue before dawn. If it is your first big mountain, or you are climbing without a guide, this is the sensible choice, and it is the easiest to reach from Tokyo.\n\nSubashiri starts lower on the east side and spends its first few hours in forest, which is a real pleasure after the bare cinder of the other routes, then breaks out above the treeline and merges with the Yoshida trail high up, around the eighth station. It is quieter than Yoshida but shares its crowded upper section. Its descent includes a long run of soft volcanic sand that is much faster than a rocky path once you trust it.\n\nGotemba is the longest and starts the lowest, at roughly 1,450 metres, which means the most vertical gain and the fewest huts. Its reward is solitude and the Osunabashiri, the Great Sand Run, a descent through deep ash where you can cover ground startlingly fast. The Prince Route, a variant that starts higher at Fujinomiya's fifth station and traverses across to join Gotemba, is a common way to get Gotemba's quiet descent without its punishing ascent. Fujinomiya on the Shizuoka side is the shortest in distance and the steepest in gradient, starting from the highest fifth station at around 2,400 metres. Short does not mean easy: it is a single narrow trail used in both directions, rockier underfoot, and the high start gives your body the least time to adjust.",
          },
          {
            title: "Permits, fees and the daily cap",
            icon: "mountain",
            content: "For most of its modern history Fuji was free to climb, with a voluntary conservation donation collected at the fifth station. That changed after years of overcrowding and a rising accident count. Yamanashi Prefecture introduced a mandatory climbing fee on the Yoshida route along with a daily cap on the number of climbers and a gate that closes overnight to stop people starting a night ascent without a hut booking. Shizuoka Prefecture subsequently brought in fees for the Subashiri, Gotemba and Fujinomiya routes.\n\nThe amounts, the cap number and the gate hours have all been revised between seasons, so treat any figure you read on a travel blog with suspicion, including this one. What has stayed consistent is the shape of the system: you reserve and pay online in advance where reservation is offered, you carry proof, and if you intend to pass the gate late in the day you need a confirmed hut booking to do it. Reserve early. The Yoshida cap is reached on the busiest summer weekends.\n\nThere is a separate, older payment you will still be asked for at the trailhead in some seasons: a conservation contribution, historically around a thousand yen, which funds trail maintenance and rescue. It is worth paying regardless of whether it is framed as voluntary.",
          },
          {
            title: "Altitude is the thing that actually stops people",
            icon: "mountain",
            content: "The single most common reason people turn back is not fitness. It is altitude sickness, and the mistake that causes it is made at the bottom, not the top. Bus passengers are lifted from near sea level to a fifth station at 2,300 to 2,400 metres in about two hours, then start walking immediately. That is a rapid gain by any standard, and it is why headache, nausea and dizziness are so common above the seventh station.\n\nThe standard mitigation is dull and effective: spend at least an hour, ideally two, at the fifth station before you start walking. Eat something. Drink steadily, well before you feel thirsty. Then climb deliberately slowly, slower than feels natural, and treat any pace that leaves you breathing hard as too fast. Sleeping a few hours in a hut at the seventh or eighth station gives your body a further several hours at altitude and is the best acclimatisation available on a one-night climb.\n\nCanned oxygen is sold everywhere on the mountain. It relieves symptoms briefly, but it does not acclimatise you and it is not a fix. The only reliable treatment for altitude sickness is descent, and descending a few hundred metres usually resolves it quickly. If your headache is not responding to rest and fluids, or if anyone in your group becomes confused or unsteady on their feet, go down. The summit will be there next year.",
          },
          {
            title: "Huts, and why bullet climbing is a bad idea",
            icon: "mountain",
            content: "Mountain huts run from roughly the fifth station to the ninth, thickest on the Yoshida route. What you are buying is a place in a communal sleeping platform, usually a mattress space in a row with a shared blanket, plus a hot meal, typically curry rice, and a slot to leave at an ungodly hour. They are not comfortable, they are not private, and they are close to essential if you want a decent chance at the summit sunrise without wrecking yourself. Book weeks ahead for weekends.\n\nBullet climbing means climbing straight through the night from the fifth station to the summit without a hut rest, timed to hit the top at dawn. It is popular because it saves a night's cost, and it is the single behaviour the prefectural authorities have campaigned hardest against. You are ascending 1,400 vertical metres, in the dark, in the cold, with no sleep and no acclimatisation stop, and the accident and rescue statistics reflect it. The overnight gate closure on the Yoshida route exists specifically to stop it.\n\nIf your schedule genuinely cannot accommodate a hut night, the safer alternative is a full daylight climb: start early in the morning, summit in the early afternoon, descend, and accept that you will not see the sunrise from the top. You will see Fuji's shadow and a great deal more of the mountain than you would in the dark.",
          },
          {
            title: "Goraiko, Ohachi-meguri and Kengamine",
            icon: "mountain",
            content: "Goraiko is the word for the sunrise seen from the summit, and it carries religious weight; the term comes from the arrival of a divine presence. In practice it means standing on a cold, wind-scoured rim, in a crowd, waiting for the sun to come up over the Pacific and the cloud sea below. It is genuinely worth the effort, and it is genuinely miserable if you are underdressed. It can be near freezing at the top in August with wind on top of that.\n\nOhachi-meguri is the walk around the crater rim, ohachi meaning the bowl. The circuit takes roughly an hour to ninety minutes and takes you past the summit shrine, the old weather station buildings, and the highest point. Almost everyone skips it because they are cold and tired at dawn, which is a shame, because the crater itself is the most interesting thing on the mountain and looks nothing like the smooth cone you see from below.\n\nKengamine, on the southwest of the rim, is the true 3,776-metre high point and carries the summit marker. If you arrive at the top of the Yoshida trail, you are on the rim but not at the highest point, and reaching Kengamine means walking part of the circuit including a short steep pull. If summiting Japan's highest point matters to you as a fact rather than an experience, plan the extra time for it.",
          },
          {
            title: "What to carry, and what the weather does",
            icon: "mountain",
            content: "Layers, in this order of importance: a genuinely windproof and waterproof shell, an insulating mid layer, gloves, and a hat. The mountain generates its own weather, cloud rolls in with little warning, and the temperature difference between the fifth station on a summer afternoon and the summit before dawn can be twenty degrees or more before you account for wind chill. Cotton is the wrong choice at every layer.\n\nBoots or trail shoes with real grip and ankle support, already broken in. The descent trails on Yoshida and Gotemba are deep loose ash, and gaiters keep it out of your shoes; many climbers improvise with the plastic bags sold at the fifth station. A headtorch with fresh batteries is mandatory for any night section, and holding a phone light does not count. Bring cash in small denominations. Huts, toilets and summit vending all take coins and notes, card acceptance is patchy, and prices climb with the altitude, which is fair given everything is carried or tractored up.\n\nCarry your own rubbish down. There are no bins on the mountain, and the litter problem on Fuji was severe enough to complicate its World Heritage bid. The toilets are composting or chemical and ask for a small fee per use, again in coins. Finally, watch the typhoon forecast in late August and early September; a route can close at short notice, and the honest answer to bad weather on Fuji is to not be on it.",
          },
          {
            title: "Getting to the trailheads",
            icon: "mountain",
            content: "For Yoshida, the usual approach is to Kawaguchiko or Fujisan Station, by the Fuji Excursion limited express from Shinjuku or a highway bus, then a connecting bus up the Fuji Subaru Line toll road to the 5th Station. Private cars are barred from the toll road during much of the climbing season, so almost everyone shuttles up from a car park lower down regardless.\n\nFujinomiya's fifth station is reached from Shin-Fuji or Mishima on the Tokaido Shinkansen by bus, which makes it the natural route if you are coming from Kyoto or Osaka rather than Tokyo. Gotemba and Subashiri are served by buses from Gotemba Station, which is also on the Odakyu network from Shinjuku, so it combines cleanly with a Hakone leg either side of the climb.\n\nA sensible itinerary is to sleep near the base the night before, at Kawaguchiko or Fujiyoshida for Yoshida, rather than travelling from Tokyo on the morning of the climb. It removes the pre-dawn logistics from the hardest day of the trip and gives you a decent chance at seeing the mountain from below, which you will not do from halfway up it.",
          },
        ],
        faqs: [
          { q: "Do I need to be fit to climb Mount Fuji?", a: "You need to be able to walk uphill for six hours or so with a small pack, and downhill for four. That is a moderate rather than an elite standard, and plenty of unremarkably fit people in their sixties do it. Fitness helps far less than pacing and acclimatisation do, and very fit people who charge up from the fifth station get altitude sickness more often than slow walkers." },
          { q: "Can I climb Fuji outside the July to September season?", a: "It is not illegal but it is a completely different undertaking. Huts and toilets are shut, buses to the fifth stations largely stop, and the upper mountain carries hard ice and severe wind, requiring crampons, an ice axe and the skills to use them. Prefectural authorities discourage it, ask off-season climbers to file a plan, and there are fatalities most years. If you are not already an experienced winter mountaineer, do not." },
          { q: "How much does it cost to climb Mount Fuji?", a: "Budget for the prefectural climbing fee, transport to the fifth station, a hut night with dinner, food and drinks bought on the mountain at altitude-inflated prices, and coins for the toilets. The hut is usually the largest single item. Fee amounts have been revised between seasons, so confirm the current figure on the official Yamanashi or Shizuoka page rather than relying on a published total." },
          { q: "Which route is best for a first climb?", a: "Yoshida, for practical reasons rather than scenic ones: the most huts, the best first aid coverage, separate up and down trails, the easiest access from Tokyo, and other people around if something goes wrong. Accept that you will be sharing it. If crowds are the thing you most want to avoid and you have hill experience, Subashiri up and Gotemba's sand run down is the connoisseur's version." },
          { q: "Do I need a guide?", a: "No. The trails are marked, staffed and busy in season, and most climbers go independently. A guide is worth it if you want the hut and fee logistics handled, if you are climbing with children or older relatives, or if you want someone qualified to make the turn-back call for you, which is the decision people get wrong." },
          { q: "Will I definitely see the sunrise from the summit?", a: "No. Cloud, rain and wind on the summit are common even in August, and there are mornings when the top is inside the cloud and there is nothing to see. Plan the climb for the mountain rather than for the photograph, and if you have flexible dates, watch the forecast and pick your night." },
          { q: "Is there a bag drop at the fifth station?", a: "Coin lockers and paid luggage storage are generally available at the Fuji Subaru Line 5th Station and at Kawaguchiko Station, and using them is strongly advised. Nothing you do not need on the mountain should go up the mountain with you." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Do I need to be fit to climb Mount Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "You need to be able to walk uphill for six hours or so with a small pack, and downhill for four. That is a moderate rather than an elite standard, and plenty of unremarkably fit people in their sixties do it. Fitness helps far less than pacing and acclimatisation do, and very fit people who charge up from the fifth station get altitude sickness more often than slow walkers." },
            },
            {
              '@type': 'Question',
              name: "Can I climb Fuji outside the July to September season?",
              acceptedAnswer: { '@type': 'Answer', text: "It is not illegal but it is a completely different undertaking. Huts and toilets are shut, buses to the fifth stations largely stop, and the upper mountain carries hard ice and severe wind, requiring crampons, an ice axe and the skills to use them. Prefectural authorities discourage it, ask off-season climbers to file a plan, and there are fatalities most years. If you are not already an experienced winter mountaineer, do not." },
            },
            {
              '@type': 'Question',
              name: "How much does it cost to climb Mount Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "Budget for the prefectural climbing fee, transport to the fifth station, a hut night with dinner, food and drinks bought on the mountain at altitude-inflated prices, and coins for the toilets. The hut is usually the largest single item. Fee amounts have been revised between seasons, so confirm the current figure on the official Yamanashi or Shizuoka page rather than relying on a published total." },
            },
            {
              '@type': 'Question',
              name: "Which route is best for a first climb?",
              acceptedAnswer: { '@type': 'Answer', text: "Yoshida, for practical reasons rather than scenic ones: the most huts, the best first aid coverage, separate up and down trails, the easiest access from Tokyo, and other people around if something goes wrong. Accept that you will be sharing it. If crowds are the thing you most want to avoid and you have hill experience, Subashiri up and Gotemba's sand run down is the connoisseur's version." },
            },
            {
              '@type': 'Question',
              name: "Do I need a guide?",
              acceptedAnswer: { '@type': 'Answer', text: "No. The trails are marked, staffed and busy in season, and most climbers go independently. A guide is worth it if you want the hut and fee logistics handled, if you are climbing with children or older relatives, or if you want someone qualified to make the turn-back call for you, which is the decision people get wrong." },
            },
            {
              '@type': 'Question',
              name: "Will I definitely see the sunrise from the summit?",
              acceptedAnswer: { '@type': 'Answer', text: "No. Cloud, rain and wind on the summit are common even in August, and there are mornings when the top is inside the cloud and there is nothing to see. Plan the climb for the mountain rather than for the photograph, and if you have flexible dates, watch the forecast and pick your night." },
            },
            {
              '@type': 'Question',
              name: "Is there a bag drop at the fifth station?",
              acceptedAnswer: { '@type': 'Answer', text: "Coin lockers and paid luggage storage are generally available at the Fuji Subaru Line 5th Station and at Kawaguchiko Station, and using them is strongly advised. Nothing you do not need on the mountain should go up the mountain with you." },
            },
          ],
        },
      };

    case "best-time-to-visit-hakone":
      return {
        title: "The Best Time to Visit Hakone, Season by Season (Including When Fuji Is Actually Visible)",
        seoTitle: "Best Time to Visit Hakone: Season Guide",
        description: "Hakone month by month: hydrangea season on the Tozan railway, autumn colour, why winter gives the best odds of seeing Mount Fuji, and when to avoid the crowds.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788270636/asiabylocals/tours/hakone-mt-fuji-ropeway-lake-ashi-cruise-day-tour/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "Best odds of seeing Fuji", value: "December to February, in the early morning - dry, clear winter air" },
          { icon: "calendar-days", label: "Worst odds of seeing Fuji", value: "June to August, when humidity and afternoon cloud usually hide it" },
          { icon: "calendar-days", label: "Hydrangeas", value: "Along the Hakone Tozan Railway, roughly mid-June to early July" },
          { icon: "calendar-days", label: "Autumn colour", value: "Roughly early to late November, arriving earlier at higher elevations around Lake Ashi and Gora" },
          { icon: "calendar-days", label: "Busiest periods", value: "Golden Week in early May, mid-August Obon, autumn weekends in November, and New Year" },
          { icon: "calendar-days", label: "Altitude effect", value: "Lake Ashi sits over 700 m up and Owakudani higher again - expect noticeably colder and windier conditions than central Tokyo" },
        ],
        sections: [
          {
            title: "The Best Time to Visit Hakone, Season by Season (Including When Fuji Is Actually Visible)",
            icon: "calendar-days",
            content: "Hakone has two separate calendars and they do not agree. One is the calendar of the landscape: hydrangeas along the mountain railway in June, pampas grass at Sengokuhara in autumn, maples turning through November. The other is the calendar of Mount Fuji's visibility, which runs almost exactly opposite to it, peaking in the cold dry months when the gardens are bare.\n\nMost visitors plan around cherry blossom or autumn leaves and are surprised to find the mountain absent for their entire stay. Fuji is visible from the Hakone side on something like half the days in December and January and on a small minority of days in July and August. The reason is straightforward atmospheric physics: summer air over the Kanto plain is humid and hazy, and the mountain generates its own cap of cloud through the warm afternoon. Winter air is dry, cold and clear, and the mountain is snow-covered on top of it, which is also when it looks the way people imagine it.\n\nThat trade-off is the single most useful thing to understand before booking. Whatever season you choose, the same rule applies within the day: Fuji is most often clear in the first two or three hours after sunrise and clouds over as the day warms. If seeing the mountain matters to you, stay overnight in the area and be outside early. Day-trippers arriving from Tokyo at eleven in the morning are arriving at the wrong time of day.",
            tourCard: CARD_1,
          },
          {
            title: "Winter: the season for seeing the mountain",
            icon: "calendar-days",
            content: "December through February is when Hakone delivers what most people came for, which is Fuji itself. The winter monsoon pattern brings dry continental air over the Kanto region, and on a clear cold morning the mountain stands out from Lake Ashi with the definition of a photograph. It is also capped with snow, which is the form in which it appears in almost every painting and print you have seen of it.\n\nThe cost is that the region is cold and comparatively bare. Lake Ashi sits above seven hundred metres and Owakudani higher still, so temperatures run well below Tokyo's, wind on the lake is biting, and the ropeway occasionally suspends service in high winds. Gardens are dormant, and some of the smaller museums and outdoor attractions cut their hours. Against that, the onsen are at their best; sitting in an outdoor rotenburo with cold air on your face and steam coming off the water is a fundamentally winter pleasure.\n\nJanuary brings the Hakone Ekiden, the university relay race run over two days on 2 and 3 January along the road from Tokyo to Lake Ashi and back. It is a national television event, the roads along the route are lined with spectators, and accommodation around Hakone-Yumoto and Motohakone is difficult and expensive across the New Year period. If you are not there for the race, avoid those dates.",
          },
          {
            title: "Spring: blossom, then Golden Week",
            icon: "calendar-days",
            content: "Cherry blossom reaches Hakone slightly later than Tokyo because of the altitude, and it does not arrive everywhere at once; lower Hakone-Yumoto colours before Gora and the lake. Late March into mid-April is the general window, but it swings by a week or more with the year, and the higher parts of the caldera can still be cold enough for the mountain railway to run past bare branches while Tokyo is already finished blooming.\n\nLate April into May is arguably the best all-round period. The weather is mild, the new leaves on the Tozan railway line are a very particular green, the azaleas around the Onshi Hakone Park and various hillside gardens come out in May, and Fuji visibility, while past its winter peak, is still reasonable in the mornings before the humid season sets in.\n\nThe exception is Golden Week, the cluster of national holidays from late April to the first week of May, when Hakone is one of the most heavily visited places in Japan. The loop transport runs at capacity, boat and ropeway queues run to an hour or more, ryokan rates jump, and the road through Hakone-Yumoto can sit in traffic. If your dates are flexible, take the week before or the week after and you will have a materially different experience of the same place.",
          },
          {
            title: "June: hydrangeas and the rainy season",
            icon: "calendar-days",
            content: "The tsuyu rainy season typically covers June and part of July. It rains, though not usually all day; the pattern is more often grey with heavy bursts. Fuji visibility is close to its annual low, and if the mountain is your priority this is the wrong month. The ropeway can be a slow ride through white cloud with nothing to see out of the window.\n\nWhat June has instead is the ajisai, the hydrangeas, which grow in banks along the Hakone Tozan Railway between Hakone-Yumoto and Gora and are at their best from roughly mid-June into early July. The railway leans into it; trains run with illumination on the flowers in the evening during the season, and reserved seating on the special evening services sells ahead. The plants like the wet, and rain is genuinely the right weather for looking at them, which is a rare thing to be able to say.\n\nJune is also a sensible month for anyone whose real interest is the onsen and the museums rather than the views. Midweek crowds are lighter than in spring or autumn, indoor attractions like the Pola Museum and the Venetian Glass Museum are unaffected by weather, and a wet afternoon is an excellent excuse to spend four hours in hot water.",
          },
          {
            title: "Summer: hot, hazy, and the reason to be here anyway",
            icon: "calendar-days",
            content: "July and August in Hakone are humid and warm, though the altitude keeps it several degrees cooler than Tokyo, which is exactly why the region became a summer retreat for the capital's wealthy in the Meiji era. The greenery is at its fullest, the lake is pleasant, and the higher parts of the caldera are a real relief from the city's heat.\n\nFuji is mostly invisible. This is the frustrating irony of the region: the two months when the mountain is open to climbers are the two months when you are least likely to see it from a distance. Climbers on the summit at dawn are usually above the haze looking down at it. Visitors on the lake shore are underneath it looking at grey.\n\nAugust brings Obon in the middle of the month, when much of Japan travels and Hakone fills accordingly, and the Lake Ashi fireworks displays that run on set dates through the summer. It is also the tail end of typhoon season by late August into September; a passing system can shut the ropeway, suspend the boats and, in serious cases, damage the mountain railway, as happened when Typhoon Hagibis hit in 2019 and the Tozan line was out of service for months.",
          },
          {
            title: "Autumn: the best-looking and most crowded season",
            icon: "calendar-days",
            content: "Autumn colour typically peaks in Hakone through November, arriving first at the higher elevations around Owakudani and Lake Ashi and working down towards Hakone-Yumoto over several weeks. Because of that elevation spread, a visit in mid-November will usually find colour somewhere in the caldera even if it has passed or not yet arrived at a particular spot. The maples around the Gora area and the museum gardens are the reliable performers.\n\nSengokuhara's susuki grassland, a hillside of pampas grass, turns silver-gold in October and November and photographs unusually well in low afternoon light. It is a short bus ride from the standard loop and one of the few genuinely distinctive autumn sights in the region that is not a maple.\n\nAutumn weekends are the single busiest normal-season period in Hakone outside Golden Week. Ryokan book out well in advance for November Saturdays, and the loop transport queues meaningfully lengthen. October is quieter than November, is usually settled once the typhoon season eases, and has better Fuji odds as the air begins to dry out. If you want autumn without the crush, aim for a weekday in late October.",
          },
          {
            title: "How to read Fuji's daily rhythm",
            icon: "calendar-days",
            content: "Whatever the month, the mountain follows a daily pattern worth planning around. The clearest views come in the first two or three hours after sunrise. As the ground warms, moist air rises up the cone, condenses, and forms a cap of cloud that often persists through the afternoon. By late afternoon it can clear again briefly around sunset, which is when the alpenglow shots are taken.\n\nThe practical consequence is that a day trip from Tokyo, which typically puts you on the lake between midday and mid-afternoon, is the worst possible timing for the view in any season. Staying a night in Hakone or on the Kawaguchiko side and being outside by seven in the morning changes your odds substantially, and costs nothing but a rearranged itinerary.\n\nBefore committing to a particular morning, it is worth checking one of the live webcams pointed at the mountain from the Fuji Five Lakes side; several run continuously and will tell you within seconds whether the mountain is out. Regional forecasts also report visibility. A clear cold day after a cold front has passed through is the classic setup.",
          },
          {
            title: "Choosing your season by what you actually want",
            icon: "calendar-days",
            content: "If the mountain is the point, go in December, January or February, stay overnight, and be at Lake Ashi or on the ropeway early. Accept cold, wind and a shorter day, and get an onsen out of it in the season when hot water is most welcome.\n\nIf the landscape is the point, go in late April, early May or November, and treat any Fuji sighting as a bonus rather than a plan. Avoid Golden Week and November Saturdays if you can move your dates by even a few days.\n\nIf you want the region cheap and quiet, June and early July on a weekday are the softest period of the year, with the hydrangeas as compensation. And if you are combining Hakone with climbing Fuji, you are locked into July or August by the climbing season, so plan the Hakone leg around museums, onsen and the historical Tokaido sites rather than around the view, and you will not be disappointed by what the weather does.",
          },
        ],
        faqs: [
          { q: "What month gives the best chance of seeing Mount Fuji?", a: "December and January, in the early morning. Winter air over the Kanto plain is dry and clear, and the mountain is snow-capped. Summer, especially July and August, gives the worst odds despite being the climbing season, because humidity and afternoon cloud usually hide it." },
          { q: "Is Hakone worth visiting if Fuji is not visible?", a: "Yes, and this is worth internalising before you go. The caldera landscape, the sulphur vents at Owakudani, the Open-Air Museum, the Edo-period checkpoint and cedar avenue, the lake, and the hot springs all stand on their own. The view of Fuji is the thing you cannot book, so build a trip that does not depend on it." },
          { q: "When is the hydrangea season on the Hakone Tozan Railway?", a: "Roughly mid-June to early July, overlapping with the rainy season. The railway runs illuminated evening services during the peak, and reserved seats on those trains are sold in advance and go quickly." },
          { q: "How busy is Hakone during Golden Week?", a: "Very. It is among the most visited destinations in Japan during the late April to early May holiday cluster. Expect long queues for the boats and ropeway, higher ryokan rates, and road traffic around Hakone-Yumoto. Shifting your dates by a week in either direction transforms the visit." },
          { q: "Does it snow in Hakone?", a: "Yes, occasionally, mostly in January and February. It rarely lasts long at lower elevations but can settle around Lake Ashi and the higher parts of the caldera, and heavy snow or high wind can suspend the ropeway. Roads are cleared but a snowy day is a good day to prioritise the onsen over the loop." },
          { q: "How cold does it get compared with Tokyo?", a: "Noticeably colder. Lake Ashi is over seven hundred metres above sea level and Owakudani higher again, with wind exposure on both. A jacket that is adequate in Tokyo in November is likely to be thin on the ropeway. In summer, the same altitude works in your favour." },
          { q: "Is there a bad month to visit Hakone?", a: "Late August into September carries the highest typhoon risk, which can close the ropeway and boats and, in the worst cases, damage the railway. Otherwise there is no dead month, only trade-offs between crowds, colour and how likely you are to see the mountain." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What month gives the best chance of seeing Mount Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "December and January, in the early morning. Winter air over the Kanto plain is dry and clear, and the mountain is snow-capped. Summer, especially July and August, gives the worst odds despite being the climbing season, because humidity and afternoon cloud usually hide it." },
            },
            {
              '@type': 'Question',
              name: "Is Hakone worth visiting if Fuji is not visible?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, and this is worth internalising before you go. The caldera landscape, the sulphur vents at Owakudani, the Open-Air Museum, the Edo-period checkpoint and cedar avenue, the lake, and the hot springs all stand on their own. The view of Fuji is the thing you cannot book, so build a trip that does not depend on it." },
            },
            {
              '@type': 'Question',
              name: "When is the hydrangea season on the Hakone Tozan Railway?",
              acceptedAnswer: { '@type': 'Answer', text: "Roughly mid-June to early July, overlapping with the rainy season. The railway runs illuminated evening services during the peak, and reserved seats on those trains are sold in advance and go quickly." },
            },
            {
              '@type': 'Question',
              name: "How busy is Hakone during Golden Week?",
              acceptedAnswer: { '@type': 'Answer', text: "Very. It is among the most visited destinations in Japan during the late April to early May holiday cluster. Expect long queues for the boats and ropeway, higher ryokan rates, and road traffic around Hakone-Yumoto. Shifting your dates by a week in either direction transforms the visit." },
            },
            {
              '@type': 'Question',
              name: "Does it snow in Hakone?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, occasionally, mostly in January and February. It rarely lasts long at lower elevations but can settle around Lake Ashi and the higher parts of the caldera, and heavy snow or high wind can suspend the ropeway. Roads are cleared but a snowy day is a good day to prioritise the onsen over the loop." },
            },
            {
              '@type': 'Question',
              name: "How cold does it get compared with Tokyo?",
              acceptedAnswer: { '@type': 'Answer', text: "Noticeably colder. Lake Ashi is over seven hundred metres above sea level and Owakudani higher again, with wind exposure on both. A jacket that is adequate in Tokyo in November is likely to be thin on the ropeway. In summer, the same altitude works in your favour." },
            },
            {
              '@type': 'Question',
              name: "Is there a bad month to visit Hakone?",
              acceptedAnswer: { '@type': 'Answer', text: "Late August into September carries the highest typhoon risk, which can close the ropeway and boats and, in the worst cases, damage the railway. Otherwise there is no dead month, only trade-offs between crowds, colour and how likely you are to see the mountain." },
            },
          ],
        },
      };

    case "getting-around-hakone":
      return {
        title: "Getting Around Hakone: The Free Pass, the Round Course, and How the Loop Actually Works",
        seoTitle: "Getting Around Hakone: Free Pass & Loop",
        description: "How the Hakone Round Course fits together - switchback railway, cable car, ropeway, boat and bus - what the Free Pass covers, and which direction to go.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271747/asiabylocals/tours/hakone-explorer-guided-day-tour/img0.webp",
        fastFacts: [
          { icon: "train-front", label: "The pass", value: "Hakone Free Pass (Odakyu), sold in 2-day and 3-day versions, from Shinjuku or from Odawara at a lower price" },
          { icon: "train-front", label: "What it covers", value: "Tozan railway, cable car, ropeway, Lake Ashi sightseeing boats, Hakone Tozan and Odakyu buses in the designated area, plus discounts at many museums" },
          { icon: "train-front", label: "What it does not cover", value: "The Romancecar limited express surcharge, which is bought separately with a seat reservation" },
          { icon: "train-front", label: "Access from Tokyo", value: "Odakyu Romancecar, Shinjuku to Hakone-Yumoto, roughly 85-95 minutes; or Shinkansen to Odawara in around 35 minutes from Tokyo Station, then the Tozan line" },
          { icon: "train-front", label: "Full loop time", value: "Around 4 hours of pure travel, so a realistic day with stops is 7-9 hours" },
          { icon: "train-front", label: "Weather risk", value: "The ropeway suspends in high wind, and Owakudani closes on volcanic activity warnings - substitute buses run the section when it does" },
        ],
        sections: [
          {
            title: "Getting Around Hakone: The Free Pass, the Round Course, and How the Loop Actually Works",
            icon: "train-front",
            content: "Hakone's transport is not a network so much as a single designed circuit. Because the region sits inside a collapsed caldera, with a steep wall on the Odawara side and a lake in the middle, the route in was built as a sequence of increasingly specialised vehicles: a mountain railway that switchbacks up a slope too steep for a normal train, a funicular where even that gives up, a ropeway over an active sulphur field where no ground transport is possible at all, boats across the crater lake, and a bus back around the rim.\n\nThat sequence is marketed as the Hakone Round Course, and it is the standard way people see the region. It is not a tourist gimmick bolted onto ordinary transport; each leg exists because the terrain made the previous mode impossible. Understanding this makes the day make sense, and makes it obvious why nobody drives the loop.\n\nThe ticket that ties it together is the Hakone Free Pass, sold by Odakyu, which covers the whole circuit plus most of the local bus network for a fixed price over two or three days. Almost every visitor should buy one. The exceptions are narrow: if you are going straight to one ryokan in Hakone-Yumoto, soaking, and coming home, the pass will not pay for itself.",
            tourCard: CARD_2,
          },
          {
            title: "The Round Course, leg by leg",
            icon: "train-front",
            content: "The conventional direction starts at Hakone-Yumoto, the gateway town at the bottom of the valley, and runs clockwise. The Hakone Tozan Railway climbs from Yumoto to Gora, gaining several hundred metres on a gradient steep enough that the line uses three switchbacks: the train stops, the driver and conductor swap ends, and it reverses up the next section. It is Japan's oldest mountain railway of its kind and the ride takes around forty minutes for a very short distance on the map. In June and early July the banks alongside are dense with hydrangeas.\n\nFrom Gora, the Hakone Tozan Cable Car, a funicular hauled on a cable rather than an aerial gondola, climbs a straight steep line to Sounzan in about ten minutes, with several stops along the way that serve residential Gora and a couple of museums. At Sounzan the ground genuinely runs out and the Hakone Ropeway takes over, running in two sections: up over the ridge and down into Owakudani, then on across to Togendai on the shore of Lake Ashi. The Owakudani leg is the one people remember, passing directly over the steaming vents.\n\nAt Togendai you board a Lake Ashi sightseeing boat, built as a mock galleon with a figurehead and gilded stern, to Hakone-machi or Moto-Hakone at the southern end. Those two ports are a walk apart along the shore and both sit near the historical sites: the reconstructed checkpoint, the cedar avenue, and the shrine with its torii in the water. From there a Hakone Tozan bus runs back down the old Tokaido road to Hakone-Yumoto in about forty minutes, closing the circle.",
          },
          {
            title: "Which direction to go, and why it matters",
            icon: "train-front",
            content: "The loop works in both directions and the pass does not care. The argument for clockwise, starting with the railway, is that the sequence builds; you finish at the lake and the historical sites in the afternoon light and return by bus, which is the least interesting leg and therefore the right one to do when you are tired.\n\nThe argument for anticlockwise is crowd management. On a busy day the great majority of visitors arrive at Hakone-Yumoto in mid-morning and set off clockwise together, which means the ropeway and the boats develop long queues in the middle of the day at the exact points where you would reach them. Running the loop backwards, by taking the bus straight from Yumoto to the lake first, puts you out of phase with that wave.\n\nThe other variable is Fuji. The best views on the circuit are from the ropeway between Owakudani and Togendai and from the lake looking north, and both are more likely to deliver early in the day. If the mountain is the priority, go anticlockwise and get to the lake in the morning. If the museums are the priority, go clockwise; they cluster around Gora and Miyanoshita on the railway side.",
          },
          {
            title: "Is the Hakone Free Pass worth it?",
            icon: "train-front",
            content: "For anyone doing the loop, yes, comfortably. Buying the ropeway, cable car, railway, boat and buses separately costs substantially more than the two-day pass, and the pass also removes the friction of buying six tickets at six counters, which on a busy day is worth something in itself. It comes as a two-day or three-day version and can be bought from Shinjuku, including the outbound and return journey on the Odakyu line, or from Odawara at a lower price if you are arriving by Shinkansen.\n\nThe pass does not include the Romancecar surcharge. The Romancecar is Odakyu's limited express, fully reserved, and the extra charge buys you a specific seat and a direct run to Hakone-Yumoto without changing. It is worth paying for on a weekend or holiday. If you skip it, the pass still covers ordinary Odakyu express trains, which require a change at Odawara and take somewhat longer.\n\nThe pass also carries discounts at a long list of local attractions, including the major museums and several day-use onsen. They are individually small but add up over two days, and the discount list is printed with the pass. A Japan Rail Pass, by contrast, is close to useless inside Hakone: the Odakyu line and the entire loop are private railways and are not covered. A JR pass gets you to Odawara and no further.",
          },
          {
            title: "When the ropeway is down",
            icon: "train-front",
            content: "The Hakone Ropeway is the most weather-sensitive link in the chain. High wind suspends it, and it can go down at short notice. Separately, Owakudani sits on an active geothermal field, and when volcanic gas levels rise or the alert level is raised, the Owakudani station and the walking trails there close; in 2015 the ropeway was suspended for an extended period and access was restricted for months.\n\nWhen this happens the operators run substitute buses along the road between Sounzan or Gora and Togendai, and the Free Pass covers them. You still complete the loop, you just do a section on tarmac instead of in the air, and you may not be able to stop at Owakudani for the eggs. This is not a disaster and it is not a reason to cancel a trip, but it is a reason to check the ropeway's operating status on the morning you travel rather than discovering it at Sounzan.\n\nIf Owakudani is closed and eating a black egg was on your list, kuro-tamago are usually sold at other points around the region, including at Togendai and some shops in Hakone-Yumoto, though buying one at the vent where it was boiled is the entire point of it.",
          },
          {
            title: "Buses, and getting to the places off the loop",
            icon: "train-front",
            content: "The loop covers the famous sights, but several of the best things in Hakone sit off it and are reached by bus. The Pola Museum of Art and the Hakone Venetian Glass Museum are in the Sengokuhara area, north of the ropeway line. The susuki grassland is the same direction. Various day-use onsen and the more secluded ryokan are scattered through valleys the loop does not enter.\n\nTwo main bus operators run in the area, Hakone Tozan Bus and Odakyu Hakone Highway Bus, and the Free Pass covers both within the designated zone. Routes are numbered and signed in English at the main stops, and the key hubs are Hakone-Yumoto, Gora, Togendai and Hakone-machi. Buses on the mountain roads are slower than the map suggests and can bunch in traffic on busy weekends, so allow more time than the timetable implies for any leg that involves the road between Yumoto and the lake.\n\nLuggage is the other thing worth planning. The Tozan railway carriages are small, the cable car and ropeway cabins more so, and hauling large suitcases around the circuit is genuinely unpleasant. Hakone-Yumoto station has coin lockers, which fill early on weekends, and there is a well-used luggage delivery service that will take your bags from the station to a participating ryokan in the region for an afternoon delivery, and back again. Use it.",
          },
          {
            title: "Should you drive?",
            icon: "train-front",
            content: "Generally, no. The loop is designed around the fact that its most interesting sections have no road, so driving means you cannot do the railway, the cable car, the ropeway or the boat as a circuit; you would have to park, do an out-and-back on each, and return to the car. The roads through Hakone are narrow and winding, parking at the popular sites is limited and fills on weekends, and traffic through Hakone-Yumoto backs up badly in peak season.\n\nDriving does make sense in two situations. One is if you are combining Hakone with the Fuji Five Lakes on the same trip, since the connection between the two regions is much more flexible by road than by public transport, which requires a bus and offers limited departures. The other is if you are staying at a remote ryokan on a poorly served bus route with several people and a lot of luggage.\n\nIf you do drive, park at your accommodation and do the loop on the pass anyway, buying it at Odawara rather than Shinjuku. The pass without the Tokyo travel legs is inexpensive and it is still the cheapest way to ride the circuit.",
          },
        ],
        faqs: [
          { q: "How long does the Hakone Round Course take?", a: "The moving parts alone total around four hours. With a stop at Owakudani, a museum, lunch, and time at the shrine and checkpoint, a realistic full day is seven to nine hours. It can be compressed into a long day trip from Tokyo, but staying a night is a much better experience and improves your odds of seeing Fuji." },
          { q: "Is the Hakone Free Pass covered by the Japan Rail Pass?", a: "No. The Odakyu line and the entire Hakone loop are private railways outside the JR network. A JR pass will get you to Odawara on the Shinkansen and no further into Hakone. Buy the Free Pass separately, from Odawara if you arrived that way." },
          { q: "Do I need to reserve the Romancecar?", a: "Yes, it is a fully reserved limited express and the surcharge is separate from the Free Pass. On weekends, holidays and in autumn it sells out, so book ahead. If you do not, you can still travel to Hakone-Yumoto on ordinary Odakyu trains with a change at Odawara, covered by the pass." },
          { q: "What happens if the ropeway is closed?", a: "Substitute buses run the section and are covered by the Free Pass, so you can still complete the loop by road. You may lose access to Owakudani itself if the closure is for volcanic activity. Check the ropeway's operating status on the morning you travel." },
          { q: "Can I do the loop in reverse?", a: "Yes, and on a busy day it is the better choice. Most visitors start clockwise from Hakone-Yumoto in mid-morning, so going anticlockwise puts you ahead of the crowd at the ropeway and the boats, and gets you to Lake Ashi earlier when Fuji is more likely to be visible." },
          { q: "What do I do with my luggage?", a: "Do not take large suitcases around the loop; the railway carriages, cable car and ropeway cabins are small. Use the coin lockers at Hakone-Yumoto, which fill early on weekends, or the local luggage delivery service that runs bags from the station to participating ryokan and back." },
          { q: "Is the two-day or three-day pass better?", a: "Two days suits the standard itinerary of a loop plus an onsen night. Three days is worth it if you plan to add the Sengokuhara museums, more of the historical Tokaido sites, or a slower pace with several onsen stops. The price difference between them is small relative to the total." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "How long does the Hakone Round Course take?",
              acceptedAnswer: { '@type': 'Answer', text: "The moving parts alone total around four hours. With a stop at Owakudani, a museum, lunch, and time at the shrine and checkpoint, a realistic full day is seven to nine hours. It can be compressed into a long day trip from Tokyo, but staying a night is a much better experience and improves your odds of seeing Fuji." },
            },
            {
              '@type': 'Question',
              name: "Is the Hakone Free Pass covered by the Japan Rail Pass?",
              acceptedAnswer: { '@type': 'Answer', text: "No. The Odakyu line and the entire Hakone loop are private railways outside the JR network. A JR pass will get you to Odawara on the Shinkansen and no further into Hakone. Buy the Free Pass separately, from Odawara if you arrived that way." },
            },
            {
              '@type': 'Question',
              name: "Do I need to reserve the Romancecar?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, it is a fully reserved limited express and the surcharge is separate from the Free Pass. On weekends, holidays and in autumn it sells out, so book ahead. If you do not, you can still travel to Hakone-Yumoto on ordinary Odakyu trains with a change at Odawara, covered by the pass." },
            },
            {
              '@type': 'Question',
              name: "What happens if the ropeway is closed?",
              acceptedAnswer: { '@type': 'Answer', text: "Substitute buses run the section and are covered by the Free Pass, so you can still complete the loop by road. You may lose access to Owakudani itself if the closure is for volcanic activity. Check the ropeway's operating status on the morning you travel." },
            },
            {
              '@type': 'Question',
              name: "Can I do the loop in reverse?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, and on a busy day it is the better choice. Most visitors start clockwise from Hakone-Yumoto in mid-morning, so going anticlockwise puts you ahead of the crowd at the ropeway and the boats, and gets you to Lake Ashi earlier when Fuji is more likely to be visible." },
            },
            {
              '@type': 'Question',
              name: "What do I do with my luggage?",
              acceptedAnswer: { '@type': 'Answer', text: "Do not take large suitcases around the loop; the railway carriages, cable car and ropeway cabins are small. Use the coin lockers at Hakone-Yumoto, which fill early on weekends, or the local luggage delivery service that runs bags from the station to participating ryokan and back." },
            },
            {
              '@type': 'Question',
              name: "Is the two-day or three-day pass better?",
              acceptedAnswer: { '@type': 'Answer', text: "Two days suits the standard itinerary of a loop plus an onsen night. Three days is worth it if you plan to add the Sengokuhara museums, more of the historical Tokaido sites, or a slower pace with several onsen stops. The price difference between them is small relative to the total." },
            },
          ],
        },
      };

    case "hakone-onsen-guide":
      return {
        title: "Hakone Onsen Guide: Spring Types, Bathing Etiquette, Tattoo Rules and Day-Use vs Ryokan",
        seoTitle: "Hakone Onsen Guide: Etiquette & Tattoos",
        description: "How Hakone's hot springs differ by mineral content, the bathing rules that matter, what to do about tattoos, and choosing day-use baths or a ryokan night.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788270648/asiabylocals/tours/hakone-customised-private-day-tour-licensed-guide/img0.png",
        fastFacts: [
          { icon: "droplets", label: "Spring types", value: "Hakone has multiple distinct water chemistries, from clear simple springs to sulphur, chloride and sulphate waters" },
          { icon: "droplets", label: "Bathing basics", value: "Wash and rinse thoroughly at the seated showers before entering; the bath is for soaking, not cleaning" },
          { icon: "droplets", label: "No swimwear", value: "Traditional baths are nude and gender-separated. Swimsuit-friendly spa complexes exist but are a different kind of place" },
          { icon: "droplets", label: "The small towel", value: "Used for washing and modesty while walking; it never goes into the water. Most people rest it on their head or the rim" },
          { icon: "droplets", label: "Tattoos", value: "Policies vary by property. Many traditional baths refuse, some allow with cover stickers, and a private kashikiri bath sidesteps the question entirely" },
          { icon: "droplets", label: "Day-use", value: "Higaeri onsen let you bathe without staying overnight, typically for an entry fee, and many ryokan open their baths to day visitors during set hours" },
        ],
        sections: [
          {
            title: "Hakone Onsen Guide: Spring Types, Bathing Etiquette, Tattoo Rules and Day-Use vs Ryokan",
            icon: "droplets",
            content: "Hakone is one of the oldest and densest hot-spring regions in Japan, and the reason is the same geology that produced everything else here. The caldera sits over an active geothermal system, water percolates through volcanic rock, and it comes back up hot and loaded with dissolved minerals. What began as a handful of Edo-period spring towns strung along the road has grown into a region with a large number of distinct sources, and they are not interchangeable; two baths a few kilometres apart can differ in temperature, clarity, smell and mineral content.\n\nThis matters more than the marketing suggests. The milky sulphurous water at Owakudani and the higher spring areas is a different experience from the clear, near-odourless simple springs down in Hakone-Yumoto, and people develop preferences. Traditional Japanese bathing culture takes these differences seriously, with each spring type associated with particular effects, which is a claim best treated as tradition rather than medicine but which does reflect real chemical differences.\n\nThe practical questions for a visitor are three: what the rules are, what happens if you have tattoos, and whether to book a ryokan or just walk into a day-use bath. All three have clear answers, and none of them should stop you going.",
            tourCard: CARD_3,
          },
          {
            title: "Why Hakone has so many different waters",
            icon: "droplets",
            content: "The original Edo-period hot-spring settlements of Hakone were a small cluster along the Tokaido, serving travellers on the road, and they were counted as a fixed set of named springs. Development over the following centuries, including drilling to reach deeper sources, expanded that considerably, and the region is now described in terms of a much larger number of distinct spring areas, each with its own source characteristics.\n\nThe practical differences are visible and smellable. Sulphur waters, associated with the geothermal activity around Owakudani, are often cloudy white or grey and carry the characteristic egg smell; they are the ones people picture. Simple springs, common lower down around Hakone-Yumoto, are clear, mild and low in dissolved solids, which makes them gentle and suitable for long soaks. Chloride springs hold heat well and leave your skin feeling coated. Some sources are acidic enough to be hard on sensitive skin and on silver jewellery, which you should take off anyway.\n\nJapanese onsen are legally required to post an analysis of the water, and it is usually displayed near the changing room: source name, temperature at source, mineral composition and whether the water is circulated or free-flowing. Kakenagashi means the water flows through and out continuously rather than being recirculated and filtered, which is what enthusiasts look for. You will not understand the whole notice without Japanese, but the word is worth recognising.",
          },
          {
            title: "The etiquette that actually matters",
            icon: "droplets",
            content: "Wash before you get in. This is the rule everything else hangs off. There is a row of low seated showers with a stool and a bucket; you sit, soap, scrub and rinse completely, and only then step into the bath. The bath water is shared and is not changed between bathers, so entering it dirty or soapy is the one genuinely offensive thing you can do. Rinse the stool and the area when you finish.\n\nNo swimwear in a traditional bath. Baths are gender-separated and everyone is naked, which is a bigger hurdle in the imagination than in the room, where nobody is looking at you. You are given or can rent two towels: a large one that stays in the changing room and a small one you carry. The small towel does not go in the water. Fold it on your head, which is what most people do, or set it on the rim.\n\nLong hair goes up, off the water. Do not swim, splash, dunk your head, or take photographs; the changing room and bathing area are absolutely not places to have a phone out. Keep your voice down. If you have been drinking heavily, stay out; the combination of alcohol and hot water is a genuine cause of accidents, and most facilities post a warning about it. Get out and cool off if you start feeling light-headed, and drink water afterwards, because a long soak dehydrates you more than it feels like it does.",
          },
          {
            title: "Tattoos: the honest situation",
            icon: "droplets",
            content: "The prohibition on tattoos in Japanese bathing facilities has its roots in the association with organised crime, and although that association is close to meaningless for a foreign visitor with a small tattoo, the rules were written as blanket rules and many properties still enforce them as such. You will see signs. Staff do sometimes ask.\n\nIn practice there are three tiers. A large number of traditional public baths and older ryokan still refuse tattooed guests outright. A growing number, particularly those with international clientele, permit tattoos if they are covered with a skin-coloured patch or sticker, which are sold at convenience stores and sometimes at the facility; this works for small designs and not for a sleeve. And an increasing number, especially newer or foreign-facing places, simply allow them.\n\nThe reliable solution is a kashikiri buro, a private bath booked by the hour or included with certain rooms. Many Hakone ryokan offer them, some as a free amenity for guests and some for a supplement, and a room with its own private open-air bath removes the question entirely. It is also the answer for mixed-gender couples and families who want to bathe together, and for anyone who simply does not want to be naked in front of strangers. If tattoos are a factor, ask the property directly before booking rather than relying on a booking site listing, and ask specifically rather than in general terms.",
          },
          {
            title: "Day-use bathing without staying over",
            icon: "droplets",
            content: "Higaeri onsen means a day-trip bath, and Hakone has a great many. Some are dedicated day-use facilities with several pools, indoor and outdoor, at a set entry fee. Others are ryokan that open their baths to non-guests during a limited window, typically in the middle of the day between checkout and check-in, at a similar price. Both are easy to walk into and neither requires a reservation in most cases.\n\nThe practical advantages are obvious for anyone doing Hakone as a day trip: a bath after the loop, before the train back, costs an hour and turns the day into something better. Hakone-Yumoto, being the arrival town, has the highest concentration of day-use options within walking distance of the station, which makes it the natural place to do this on the way out.\n\nCheck two things before you commit. First, whether the price includes towel rental; some places charge a small extra fee and others expect you to bring your own, and buying a set on site is a common minor annoyance. Second, the last admission time, which is usually well before the closing time. Facilities also differ enormously in character: some are large modern complexes with restaurants and rest areas, others are small, old and plain in a way that is more atmospheric and less comfortable. Neither is better; decide which you want.",
          },
          {
            title: "Ryokan onsen: what you are actually paying for",
            icon: "droplets",
            content: "Staying at a ryokan with its own spring is the full version of the experience, and it is expensive because the price is not really for the room. A traditional ryokan rate is quoted per person and includes dinner and breakfast, usually a multi-course kaiseki dinner served either in a dining room or in your room, and that meal is a substantial part of what you are buying. Comparing a ryokan rate to a hotel room rate is comparing the wrong things.\n\nThe rhythm of a ryokan night has a shape: arrive in the afternoon, change into the yukata provided, bathe before dinner, eat a long dinner, bathe again later when the baths are quiet, sleep on a futon laid out on tatami, and bathe once more before breakfast. Many properties switch the men's and women's baths overnight so that guests staying the night get to use both, which is worth knowing so you do not walk into the wrong one in the morning.\n\nThe premium tier is a room with its own private open-air bath, which in Hakone often means a small stone or cypress tub on a balcony overlooking a wooded valley. It costs a good deal more and it solves the tattoo question, the privacy question and the timing question at once. Book Hakone ryokan well ahead for autumn weekends, New Year and Golden Week, when the good ones fill months out.",
          },
          {
            title: "Swimsuit spas and the other kind of bathing",
            icon: "droplets",
            content: "Hakone also has large mixed-gender spa complexes where swimwear is worn and the pools are themed, some of them famously filled with wine, coffee or green tea. These are amusement parks with hot water rather than onsen in the traditional sense, and they are genuinely good for families with children, for groups who want to be together, and for anyone unwilling to bathe nude.\n\nThey typically sit alongside a traditional bathing section on the same site, sold as a separate or combined ticket, so it is possible to do both in one visit: the water-park half with your family, then the quiet nude bath afterwards. Bring or rent swimwear; you will not be allowed into the themed pools without it, and you will not be allowed into the traditional section with it.\n\nWhichever kind you choose, the underlying advice is the same. Go more than once. The single most common mistake visitors make is treating the onsen as one item on a checklist, bathing once for twenty minutes and moving on. The pleasure of a hot-spring region is cumulative and the baths are best early in the morning and late at night, when the day visitors have gone and the water is quiet.",
          },
        ],
        faqs: [
          { q: "Can I go to an onsen in Hakone with tattoos?", a: "Sometimes. Policies vary by property: some refuse outright, some allow tattoos covered with skin-coloured patches, and some permit them freely. The dependable workaround is a private kashikiri bath, offered by many ryokan by the hour or as part of certain rooms. Contact the specific property before booking rather than trusting a general listing." },
          { q: "Do I have to be naked?", a: "In a traditional gender-separated onsen, yes; swimwear is not permitted in the bath. The alternatives are a private bath booked for your own use, or one of the swimsuit-required spa complexes, which are a different sort of place but perfectly enjoyable." },
          { q: "Can I visit an onsen without staying the night?", a: "Yes. Day-use bathing, higaeri onsen, is widespread in Hakone, both at dedicated facilities and at ryokan that open their baths to non-guests during set midday hours. Hakone-Yumoto has the most options within walking distance of the station. Check the last admission time and whether towel rental is included." },
          { q: "What do I do with the small towel?", a: "Use it for washing and to cover yourself while walking between the showers and the bath, then keep it out of the water. Most bathers fold it and rest it on their head or place it on the edge of the pool. The large towel stays in the changing room for drying off." },
          { q: "Is it safe to bathe if I have a medical condition?", a: "Hot bathing raises heart rate and lowers blood pressure, and facilities post cautions for people with heart conditions, high or low blood pressure, or who are pregnant. If any of that applies, ask a doctor first, keep soaks short, and get out at the first sign of dizziness. Never bathe after drinking alcohol." },
          { q: "How long should I stay in the water?", a: "Shorter than you would think. Ten to fifteen minutes at a time, then out to cool down, then back in, is the normal pattern, and the water in many Hakone baths is hot enough that longer is uncomfortable anyway. Drink water before and after; a long soak dehydrates you noticeably." },
          { q: "Are children allowed?", a: "Generally yes, and family bathing is normal in Japan, with young children accompanying a parent into the corresponding gender's bath. Some upmarket ryokan set a minimum age. The swimsuit spa complexes are the easiest option with children, and a private family bath is the other." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Can I go to an onsen in Hakone with tattoos?",
              acceptedAnswer: { '@type': 'Answer', text: "Sometimes. Policies vary by property: some refuse outright, some allow tattoos covered with skin-coloured patches, and some permit them freely. The dependable workaround is a private kashikiri bath, offered by many ryokan by the hour or as part of certain rooms. Contact the specific property before booking rather than trusting a general listing." },
            },
            {
              '@type': 'Question',
              name: "Do I have to be naked?",
              acceptedAnswer: { '@type': 'Answer', text: "In a traditional gender-separated onsen, yes; swimwear is not permitted in the bath. The alternatives are a private bath booked for your own use, or one of the swimsuit-required spa complexes, which are a different sort of place but perfectly enjoyable." },
            },
            {
              '@type': 'Question',
              name: "Can I visit an onsen without staying the night?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes. Day-use bathing, higaeri onsen, is widespread in Hakone, both at dedicated facilities and at ryokan that open their baths to non-guests during set midday hours. Hakone-Yumoto has the most options within walking distance of the station. Check the last admission time and whether towel rental is included." },
            },
            {
              '@type': 'Question',
              name: "What do I do with the small towel?",
              acceptedAnswer: { '@type': 'Answer', text: "Use it for washing and to cover yourself while walking between the showers and the bath, then keep it out of the water. Most bathers fold it and rest it on their head or place it on the edge of the pool. The large towel stays in the changing room for drying off." },
            },
            {
              '@type': 'Question',
              name: "Is it safe to bathe if I have a medical condition?",
              acceptedAnswer: { '@type': 'Answer', text: "Hot bathing raises heart rate and lowers blood pressure, and facilities post cautions for people with heart conditions, high or low blood pressure, or who are pregnant. If any of that applies, ask a doctor first, keep soaks short, and get out at the first sign of dizziness. Never bathe after drinking alcohol." },
            },
            {
              '@type': 'Question',
              name: "How long should I stay in the water?",
              acceptedAnswer: { '@type': 'Answer', text: "Shorter than you would think. Ten to fifteen minutes at a time, then out to cool down, then back in, is the normal pattern, and the water in many Hakone baths is hot enough that longer is uncomfortable anyway. Drink water before and after; a long soak dehydrates you noticeably." },
            },
            {
              '@type': 'Question',
              name: "Are children allowed?",
              acceptedAnswer: { '@type': 'Answer', text: "Generally yes, and family bathing is normal in Japan, with young children accompanying a parent into the corresponding gender's bath. Some upmarket ryokan set a minimum age. The swimsuit spa complexes are the easiest option with children, and a private family bath is the other." },
            },
          ],
        },
      };

    case "mount-fuji-viewpoints":
      return {
        title: "Where to See Mount Fuji: The Viewpoints That Are Worth the Trip",
        seoTitle: "Best Mount Fuji Viewpoints & Photo Spots",
        description: "Chureito Pagoda, Kawaguchiko's reflected Fuji, Oshino Hakkai and Lake Ashi - which viewpoints deliver, when to go, and why winter beats summer.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271475/asiabylocals/tours/kawaguchiko-fuji-signature-private-day-tour/img0.jpg",
        fastFacts: [
          { icon: "camera", label: "Best months", value: "December to February for visibility; late March to mid-April adds cherry blossom and November adds autumn colour" },
          { icon: "camera", label: "Best time of day", value: "The first two or three hours after sunrise, before the cone builds its own cloud cap" },
          { icon: "camera", label: "The classic shot", value: "Chureito Pagoda in Arakurayama Sengen Park, above Fujiyoshida - roughly 400 steps up from the shrine" },
          { icon: "camera", label: "The reflection", value: "Sakasa Fuji, the inverted mirror image on still water, best on the north shore of Lake Kawaguchiko and at Lake Motosu on a windless morning" },
          { icon: "camera", label: "From Hakone", value: "Lake Ashi looking north, the Motohakone torii, and the ropeway leg between Owakudani and Togendai" },
          { icon: "camera", label: "Distance", value: "The Fuji Five Lakes sit at the mountain's foot; Hakone is roughly 40 km east, so Fuji reads smaller and more distant from there" },
        ],
        sections: [
          {
            title: "Where to See Mount Fuji: The Viewpoints That Are Worth the Trip",
            icon: "camera",
            content: "Fuji is a very large object visible from a very long way away, and yet a surprising number of people spend two days near it and never see it. The mountain sits behind haze for much of the summer, generates its own cloud cap through the afternoon, and rewards the specific and slightly unglamorous discipline of being outside early on a cold day.\n\nThe viewpoints below fall into two groups. On the north side, in Yamanashi, the Fuji Five Lakes give you the mountain reflected in water with a foreground of pagodas, shrines and villages, and this is where nearly every famous photograph of Fuji is taken. On the east, Hakone gives you the mountain across the caldera lake, more distant and less dominant, but paired with the torii of a shrine that turns it into a different kind of image.\n\nBefore any of them, absorb the one fact that changes results: Fuji is far more reliably visible in winter than in summer. Dry cold continental air in December, January and February clears the view, and the snow cap makes it look like the mountain of the prints. Summer, when the climbing routes are open, is the worst time to see it from below. Almost nobody plans around this, and it is the difference between a trip that works and one that does not.",
            tourCard: CARD_4,
          },
          {
            title: "Chureito Pagoda, the image everyone has seen",
            icon: "camera",
            content: "The five-storey pagoda on the hillside above Fujiyoshida, with Fuji rising behind it, is the most reproduced view of the mountain in existence, and it is on more Japan tourism posters than anything else in the country. It stands in Arakurayama Sengen Park, above Arakura Fuji Sengen Shrine, and reaching it means climbing a long flight of steps, around four hundred of them, from the shrine below. There is a longer, gentler switchback path for anyone who does not want the stairs.\n\nWhat is not obvious from the photographs is that the pagoda is modern. It was built in the 1960s as a peace memorial to local war dead, which is worth knowing partly because it is interesting and partly because the assumption that it is ancient leads people to expect a different kind of place. The viewing platform above it is where the shot is taken from, and in cherry blossom season and peak autumn it is genuinely crowded, with a queue for the best position.\n\nGo at dawn. The pagoda faces roughly towards the mountain in a way that works well in early light, and the crowds thin dramatically outside the middle of the day. Access is from Shimoyoshida Station on the Fujikyu line, a short walk from the shrine at the base of the steps. Late March into April for blossom and November for the maples are the two peak windows, and both are worth timing for if the dates work.",
          },
          {
            title: "Lake Kawaguchiko and the reflected mountain",
            icon: "camera",
            content: "Kawaguchiko is the most accessible of the Fuji Five Lakes and the base most visitors use. The mountain sits to the south, so the north shore is the side you want, and on a still morning the lake gives you Sakasa Fuji, the upside-down mountain reflected in the water. Wind ruins it, so this is strictly a first-light phenomenon before the surface picks up.\n\nOishi Park on the northwest shore is the reliable spot: an open lakeside stretch with a planted foreground that changes through the year, lavender in summer and kochia turning red in autumn, and an unobstructed line to the mountain. The northern shore road generally offers repeated openings, and walking a stretch of it at dawn will find you several compositions. The Kachi Kachi Yama ropeway climbs the eastern side of the lake to a viewpoint that gives you both the lake and the mountain in one frame, which no ground-level position does.\n\nThe reflection shot that appears on the reverse of the thousand-yen note is not from Kawaguchiko but from Lake Motosu, the westernmost and deepest of the five lakes, based on a photograph by Koyo Okada. Motosu is quieter, harder to reach and less developed than Kawaguchiko, and the walk along its northern shore to the spot is a rewarding detour for anyone who wants the mountain without a coach park attached.",
          },
          {
            title: "Oshino Hakkai and the water from the mountain",
            icon: "camera",
            content: "Oshino Hakkai is a small village between Kawaguchiko and Yamanakako built around eight ponds fed by snowmelt from Fuji that has percolated down through the mountain's porous lava layers over a very long period, commonly described as decades. The water arrives extraordinarily clear and cold, and the ponds are deep enough that you can see straight to the bottom past shoals of fish, with the mountain standing behind the thatched roofs.\n\nThe eight ponds were historically a purification site for pilgrims preparing to climb Fuji, which is the reason they exist as a set rather than as a curiosity, and they are included in the Fuji World Heritage listing as part of the mountain's cultural landscape. That religious function is easy to miss now, with the site surrounded by souvenir stalls and food stands, but the ponds themselves are unchanged and remain the reason to go.\n\nIt is very busy from mid-morning onwards, with tour coaches arriving in sequence. Go early, walk the ponds in twenty minutes, and you will have had an entirely different experience from the one most visitors have. Access is by bus from Kawaguchiko or Fujisan Station, and it slots naturally into a morning that also includes Chureito if you are moving efficiently.",
          },
          {
            title: "Lake Yamanakako and the rest of the Five Lakes",
            icon: "camera",
            content: "Yamanakako is the largest of the five lakes and the closest to the mountain, which changes the proportions: Fuji looms rather than sits on the horizon. It has a long open shoreline, a swan-boat and cycling culture around it, and fewer coach tours than Kawaguchiko. In winter it produces the diamond dust and frozen shoreline conditions that landscape photographers come for.\n\nThe other two, Saiko and Shojiko, are smaller and quieter, ringed by forest, and Saiko sits near the Aokigahara forest and a set of lava caves formed by the same eruptive history. Shojiko is the smallest and is often cited as offering the most classical composition of the five. Neither has much in the way of facilities, which is precisely their appeal.\n\nTwo phenomena are worth knowing about if your timing is flexible. Diamond Fuji is the sun setting or rising exactly on the summit, visible from specific points around the lakes on specific dates in the colder months, and it draws a serious crowd of photographers who know the calendar. Pearl Fuji is the same alignment with the full moon. Both are predictable, both are published in local guides, and both require being in an exact place on an exact day.",
          },
          {
            title: "Seeing Fuji from Hakone",
            icon: "camera",
            content: "Hakone gives you a more distant Fuji, around forty kilometres away, which means it appears smaller and is more easily lost in haze. What Hakone offers instead is composition: the mountain seen across Lake Ashi, framed by the caldera rim, often with a boat in the middle distance.\n\nThe Heiwa no Torii, the vermilion gate standing in the shallows below Hakone Shrine at Motohakone, is the region's signature image, with Fuji behind it when the mountain cooperates. The gate was erected in the twentieth century to mark the post-war peace treaty, and the shrine behind it dates to 757. There is usually a queue to photograph from the gate itself; the shoreline either side gives you the same mountain without the wait.\n\nThe other Hakone vantage points are the ropeway leg between Owakudani and Togendai, where the cabin descends towards the lake with the mountain directly ahead on a clear day, and the deck of a Lake Ashi sightseeing boat running north to south. Both are on the standard loop, so no detour is needed; the only thing you control is timing, and the answer is again to be there in the morning.",
          },
          {
            title: "Why winter beats summer, and how to check before you go",
            icon: "camera",
            content: "The counterintuitive rule is worth stating plainly: the two months when you can climb Fuji are the two months when you are least likely to see it. Summer air over the Kanto plain carries a great deal of moisture, which scatters light and produces the flat white haze that swallows a distant mountain even under a technically clear sky. On top of that, daytime heating drives moist air up the cone where it condenses into a cloud cap by late morning.\n\nWinter reverses all of it. The seasonal pattern brings dry, cold, stable air, visibility runs to tens of kilometres, and the mountain is snow-covered from roughly October or November through into spring. December and January mornings after a cold front has passed are as good as it gets. The cost is that you will be standing in wind at seven in the morning in near-freezing temperatures, which is the entire deal.\n\nBefore committing a morning to a viewpoint, check a live webcam. Several run continuously from the Fuji Five Lakes side and from Hakone, and thirty seconds will tell you whether the mountain is out. If it is not, do the indoor half of your itinerary and try again tomorrow at dawn, which is a much better plan than standing at a lake looking at grey and calling it bad luck.",
          },
        ],
        faqs: [
          { q: "What is the single best viewpoint for Mount Fuji?", a: "For the iconic image, Chureito Pagoda in Arakurayama Sengen Park above Fujiyoshida, ideally at dawn during cherry blossom or autumn colour. For the mountain reflected in water, the north shore of Lake Kawaguchiko on a windless morning. From Hakone, the Motohakone torii on Lake Ashi. All three depend entirely on the weather, not the spot." },
          { q: "Can you see Fuji from Hakone?", a: "Yes, on a clear day, from Lake Ashi, the shoreline near the Hakone Shrine torii, and the ropeway leg down to Togendai. Hakone is around forty kilometres from the mountain, so it appears smaller and more distant than from the Fuji Five Lakes and is more easily lost to haze." },
          { q: "Why can't I see Mount Fuji even though it is sunny?", a: "Summer humidity produces haze that hides a distant mountain under a blue sky, and daytime heating drives cloud formation around the cone by late morning. Clear sky and clear air are different things. Winter mornings give dry air and the best odds; any time of year, early morning beats afternoon." },
          { q: "How many steps are there to Chureito Pagoda?", a: "Around four hundred from the shrine at the base, in a single long flight. There is a longer switchback path for anyone who prefers a gentler gradient, and it is the better option with luggage, small children or limited mobility." },
          { q: "What is Sakasa Fuji?", a: "The inverted reflection of the mountain in still lake water. It needs a windless surface, so it is a dawn phenomenon that disappears as soon as a breeze picks up. Lake Kawaguchiko's north shore and Lake Motosu are the classic locations, the latter being the view depicted on the thousand-yen note." },
          { q: "Are the Fuji Five Lakes or Hakone better for viewing Fuji?", a: "The Fuji Five Lakes, without much argument. They sit at the mountain's foot, so it dominates the sky, and the famous compositions are all there. Hakone's strengths are the caldera scenery, the hot springs and the Tokaido history, with Fuji as a bonus when it appears." },
          { q: "What is Diamond Fuji?", a: "The sun rising or setting exactly on the summit, seen from specific vantage points on specific dates in the colder months. The alignment is predictable and published locally, and it draws crowds of photographers. Pearl Fuji is the same effect with the full moon." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What is the single best viewpoint for Mount Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "For the iconic image, Chureito Pagoda in Arakurayama Sengen Park above Fujiyoshida, ideally at dawn during cherry blossom or autumn colour. For the mountain reflected in water, the north shore of Lake Kawaguchiko on a windless morning. From Hakone, the Motohakone torii on Lake Ashi. All three depend entirely on the weather, not the spot." },
            },
            {
              '@type': 'Question',
              name: "Can you see Fuji from Hakone?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, on a clear day, from Lake Ashi, the shoreline near the Hakone Shrine torii, and the ropeway leg down to Togendai. Hakone is around forty kilometres from the mountain, so it appears smaller and more distant than from the Fuji Five Lakes and is more easily lost to haze." },
            },
            {
              '@type': 'Question',
              name: "Why can't I see Mount Fuji even though it is sunny?",
              acceptedAnswer: { '@type': 'Answer', text: "Summer humidity produces haze that hides a distant mountain under a blue sky, and daytime heating drives cloud formation around the cone by late morning. Clear sky and clear air are different things. Winter mornings give dry air and the best odds; any time of year, early morning beats afternoon." },
            },
            {
              '@type': 'Question',
              name: "How many steps are there to Chureito Pagoda?",
              acceptedAnswer: { '@type': 'Answer', text: "Around four hundred from the shrine at the base, in a single long flight. There is a longer switchback path for anyone who prefers a gentler gradient, and it is the better option with luggage, small children or limited mobility." },
            },
            {
              '@type': 'Question',
              name: "What is Sakasa Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "The inverted reflection of the mountain in still lake water. It needs a windless surface, so it is a dawn phenomenon that disappears as soon as a breeze picks up. Lake Kawaguchiko's north shore and Lake Motosu are the classic locations, the latter being the view depicted on the thousand-yen note." },
            },
            {
              '@type': 'Question',
              name: "Are the Fuji Five Lakes or Hakone better for viewing Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "The Fuji Five Lakes, without much argument. They sit at the mountain's foot, so it dominates the sky, and the famous compositions are all there. Hakone's strengths are the caldera scenery, the hot springs and the Tokaido history, with Fuji as a bonus when it appears." },
            },
            {
              '@type': 'Question',
              name: "What is Diamond Fuji?",
              acceptedAnswer: { '@type': 'Answer', text: "The sun rising or setting exactly on the summit, seen from specific vantage points on specific dates in the colder months. The alignment is predictable and published locally, and it draws crowds of photographers. Pearl Fuji is the same effect with the full moon." },
            },
          ],
        },
      };

    case "hakone-2-day-itinerary":
      return {
        title: "A Realistic 2-Day Hakone Itinerary, With an Onsen Night in the Middle",
        seoTitle: "Hakone 2-Day Itinerary That Actually Works",
        description: "A workable two-day Hakone plan from Tokyo: the loop, Owakudani, the Open-Air Museum, an onsen ryokan night, the Edo checkpoint and dawn on Lake Ashi.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788271623/asiabylocals/tours/hakone-private-day-tour-onsen-open-air-museum/img0.jpg",
        fastFacts: [
          { icon: "map", label: "Getting there", value: "Odakyu Romancecar from Shinjuku to Hakone-Yumoto, around 85-95 minutes, reserved seat surcharge on top of the Free Pass" },
          { icon: "map", label: "Ticket", value: "A 2-day Hakone Free Pass covers the railway, cable car, ropeway, boats and area buses, and discounts most museums" },
          { icon: "map", label: "Where to sleep", value: "Gora or Sengokuhara for the loop and a dawn Fuji chance; Hakone-Yumoto for cheapest and best-connected" },
          { icon: "map", label: "Luggage", value: "Do not take suitcases round the loop. Use Hakone-Yumoto coin lockers or the local ryokan delivery service" },
          { icon: "map", label: "Booking ahead", value: "Ryokan and Romancecar seats for autumn weekends, Golden Week and New Year sell out well in advance" },
          { icon: "map", label: "Contingency", value: "Check the ropeway status in the morning - it suspends in high wind and Owakudani closes on volcanic warnings, with substitute buses covered by the pass" },
        ],
        sections: [
          {
            title: "A Realistic 2-Day Hakone Itinerary, With an Onsen Night in the Middle",
            icon: "map",
            content: "Two days is the right length for Hakone. One day forces you to run the loop without stopping and skips the reason most people come, which is a night in hot water. Three days is comfortable but starts to duplicate. The plan below assumes a start from Tokyo, a night in the region, and a return in the late afternoon of the second day.\n\nThe key structural decision is which way round the loop you go. Almost everyone arrives at Hakone-Yumoto mid-morning and travels clockwise, so the ropeway and the boats develop their worst queues in the early afternoon precisely where the crowd reaches them. This itinerary follows the conventional clockwise direction on day one because it sequences the sights better, but it starts early enough to stay ahead of the wave. If you cannot leave Tokyo early, reverse it: bus straight to the lake first, and come back over the ropeway.\n\nThe second structural decision is where to sleep. Staying up at Gora, Sengokuhara or near Lake Ashi puts you in position for a dawn look at Fuji on day two, which is the single highest-value hour of the trip. Staying down at Hakone-Yumoto is cheaper and better connected but leaves you an hour from the view.",
            tourCard: CARD_5,
          },
          {
            title: "Day one, morning: Shinjuku to Gora, the long way up",
            icon: "map",
            content: "Take an early Romancecar from Shinjuku, ideally before eight, and you will be at Hakone-Yumoto before ten. Buy or collect your Free Pass, put your luggage in a locker or hand it to the delivery service for your ryokan, and get onto the Hakone Tozan Railway.\n\nThe railway is the first attraction, not just transport. It climbs to Gora over about forty minutes on a gradient steep enough to need three switchbacks, where the train stops and the driver and conductor swap ends before it reverses up the next leg. Sit on the right coming up for the better valley views, and in June and early July expect the banks alongside to be dense with hydrangeas.\n\nGet off at Chokoku-no-Mori, one stop before Gora, for the Hakone Open-Air Museum. It opened in 1969 as Japan's first open-air sculpture park, sits on a hillside with the mountains behind it, and holds a significant collection of Picasso works in a dedicated pavilion alongside the outdoor pieces. Give it ninety minutes to two hours. It is the single best cultural stop in the region and it is genuinely good rather than merely convenient, and it has a foot bath fed by hot spring water where you can sit at the end of it.",
          },
          {
            title: "Day one, midday: the cable car, the ropeway and Owakudani",
            icon: "map",
            content: "From Gora take the Hakone Tozan Cable Car, a funicular hauled up a straight steep line to Sounzan in about ten minutes, then transfer to the Hakone Ropeway. The first leg climbs over the ridge and drops into Owakudani, and as the cabin comes over the top the whole vent field opens up below: bare yellow-grey ground, steam pouring out of fumaroles, and the smell of sulphur that gets into the cabin.\n\nOwakudani is the surviving active zone of a volcano whose last major eruption was around three thousand years ago, when part of the mountain collapsed and left this. Get out at the station and walk the accessible section. The thing to eat is kuro-tamago, black eggs, boiled in the sulphur pools; the shells turn black through a reaction between the sulphur compounds in the water and iron, and local tradition holds that each one adds seven years to your life. They are sold in bags of five, they taste like ordinary boiled eggs, and buying them where they are cooked is the point.\n\nThis area closes when volcanic activity rises, as it did for an extended period in 2015, so check before you plan a stop here. If it is shut, the substitute buses covered by the Free Pass will carry you across the section by road and you will lose the vent field but not the day.",
          },
          {
            title: "Day one, afternoon: down to Lake Ashi and the historical shore",
            icon: "map",
            content: "The second ropeway leg descends towards Togendai on the shore of Lake Ashi, and this is the best Fuji vantage point on the whole circuit; the mountain sits directly ahead as you come down. At Togendai board a sightseeing boat, built as an ornate mock galleon, and cross the lake to Hakone-machi or Moto-Hakone at the southern end. The crossing takes around half an hour. Stand outside on the deck, cold or not, because the views inside the cabin are not the same thing.\n\nThe southern shore is the historical half of Hakone and the part most day-trippers skip because they are running out of daylight. The Hakone Sekisho is a careful reconstruction of the Tokaido checkpoint where the shogunate controlled traffic on the road between Edo and Kyoto. Its inspectors were concerned above all with two categories, summarised in the old phrase about incoming guns and outgoing women: firearms entering the capital, and the wives of provincial lords, held in Edo as hostages against rebellion, attempting to leave. The site includes the guardhouse, the cells and a small museum.\n\nA short walk away is the Sugi Namiki, an avenue of cedars planted along the old road in 1618, and the stone-paved sections of the Hakone Hachiri, the mountain stretch of the Tokaido. Walking even a few hundred metres of it in the shade of the cedars gives you a clearer sense of the road than any display case. Finish at Hakone Shrine, founded in 757, whose vermilion torii stands in the shallows of the lake and is the region's most photographed object. Then take the bus back down the old road to your accommodation, or up to Gora if you are staying there.",
          },
          {
            title: "Day one, evening: the onsen night",
            icon: "map",
            content: "Check into your ryokan in the late afternoon, change into the yukata that will be laid out for you, and bathe before dinner. That order matters: the traditional ryokan rhythm is bath, dinner, bath again later when it is quiet, sleep, bath once more before breakfast, and following it is most of what makes a ryokan night different from a hotel.\n\nDinner at a traditional ryokan is usually a multi-course kaiseki meal, served at a set time either in a private dining room or in your room, built around seasonal ingredients and local specialities. It is a substantial part of what the per-person rate covers, which is why comparing ryokan prices to hotel room prices misleads. Turning up late for it causes real problems in the kitchen, so be back in time.\n\nWash thoroughly at the seated showers before entering any bath, keep the small towel out of the water, tie long hair up, and leave your phone in the changing room. If you have tattoos, check the property's policy in advance and consider booking a kashikiri, a private bath by the hour, which many Hakone ryokan offer and which also solves the problem for couples and families who want to bathe together. Many properties swap the men's and women's baths overnight so overnight guests can use both.",
          },
          {
            title: "Day two, early: dawn on the lake, then the museums",
            icon: "map",
            content: "Get up for sunrise. This is the highest-value hour of the trip and the one almost everyone sleeps through. Fuji is most often visible in the first two or three hours after dawn before the cone builds its own cloud cap, and if you are staying near the lake or up at Gora you are within reach of a view. Check a live webcam before you get dressed if you want to know whether it is worth it.\n\nAfter breakfast, take the bus over to the Sengokuhara side for the museums that sit off the main loop. The Pola Museum of Art is built largely underground in a beech forest to keep its profile low, and holds a strong collection of French Impressionist and modern Japanese work. The Hakone Venetian Glass Museum is a smaller, more decorative proposition with an outdoor glass installation that catches the light. Pick one rather than both unless you are very keen; the Pola is the stronger museum, the Glass Museum is the more photogenic.\n\nIn October and November, add the Sengokuhara susuki grassland, a hillside of pampas grass that turns silver-gold and photographs well in low afternoon light. It is a short bus hop and takes half an hour to walk.",
          },
          {
            title: "Day two, afternoon: a last bath, then back",
            icon: "map",
            content: "Work your way back down to Hakone-Yumoto by bus or railway with enough time to spare for one more bath. Hakone-Yumoto has the highest concentration of day-use onsen within walking distance of the station, and a soak between checking your luggage out of the locker and boarding the Romancecar is the correct way to end the trip. Check the last admission time, which is usually well before closing, and whether towel rental is included in the entry fee.\n\nHakone-Yumoto's main street is also where to buy anything you want to take home. Yosegi-zaiku, the local marquetry made from naturally different-coloured woods fitted into geometric patterns, is the regional craft and has been made here for around two centuries; the puzzle boxes that open through a sequence of hidden slides are the best-known form. There are workshops in the area where you can see it made, if you have an hour.\n\nBook a Romancecar seat back to Shinjuku rather than gambling on availability, particularly on a Sunday afternoon in autumn, when the returning day-trip traffic fills the trains. That puts you back in Tokyo in the early evening.",
          },
          {
            title: "Adapting the plan",
            icon: "map",
            content: "If you only have one day, do the loop anticlockwise: bus from Hakone-Yumoto directly to Moto-Hakone, see the shrine, checkpoint and cedars in the morning, take the boat north, ride the ropeway up to Owakudani, come down the cable car and the railway, and finish with a bath at Yumoto. You lose the Open-Air Museum and the dawn view, but you avoid the worst of the queues and you see the important things.\n\nIf you have three days, add the Fuji Five Lakes. There is a direct bus between Hakone and Kawaguchiko, which turns Hakone plus Fuji into one trip rather than two, and Kawaguchiko is where the mountain actually dominates the sky. That leg is worth planning around a winter morning at Chureito Pagoda or Oshino Hakkai.\n\nIf you are travelling in July or August, adjust your expectations rather than your route. Fuji is usually hidden by summer haze and afternoon cloud, so weight the itinerary towards the museums, the historical Tokaido sites and the onsen, which are unaffected by whether the mountain is out. And if a typhoon is forecast, or the ropeway is suspended in high wind, move the museums and the bathing forward and treat the loop as flexible; the pass covers substitute buses and nothing about this itinerary has to happen in the order written.",
          },
        ],
        faqs: [
          { q: "Is two days enough for Hakone?", a: "It is the right length for most people. One day means running the loop without stopping and skipping the onsen night, which is the main reason to come. Two days covers the full circuit, one or two museums, the historical sites on the lake, a ryokan night and a dawn attempt at Fuji." },
          { q: "Should I stay in Hakone-Yumoto or higher up?", a: "Hakone-Yumoto is cheapest, best connected and has the most day-use baths within walking distance. Gora, Sengokuhara and the Lake Ashi area put you closer to the loop and, more importantly, within reach of a dawn Fuji view on day two. If seeing the mountain matters, stay high." },
          { q: "Can I do this itinerary as a day trip from Tokyo?", a: "The loop alone, yes, on a long day with an early start. What you lose is the onsen night, the Open-Air Museum and any realistic chance of a clear Fuji view, since day-trippers arrive at the lake in the early afternoon when cloud has usually built. It is doable and it is a lesser trip." },
          { q: "Which direction should I do the loop?", a: "Clockwise from Hakone-Yumoto sequences the sights better and is what this plan follows, but it is the direction the crowd goes. If you cannot leave Tokyo early, go anticlockwise: bus straight to Moto-Hakone, then boat and ropeway back, and stay out of phase with the mid-morning wave." },
          { q: "What should I do if the ropeway is closed?", a: "Substitute buses run the section and the Free Pass covers them, so the loop still works by road. You may lose Owakudani itself if the closure is for volcanic activity. Check the operating status first thing in the morning and reorder your day around the museums if needed." },
          { q: "How much should I budget for a ryokan night?", a: "Ryokan rates are quoted per person and normally include a multi-course dinner and breakfast, so they look expensive next to hotel room rates but are not comparable. Rooms with a private open-air bath cost considerably more. Rates rise sharply for autumn weekends, Golden Week and New Year, all of which need booking months out." },
          { q: "What should I buy in Hakone?", a: "Yosegi-zaiku, the local wood marquetry made from naturally contrasting timbers, most famously as puzzle boxes that open through a hidden sequence of slides. It has been made in the region for roughly two centuries and the shops along the main street in Hakone-Yumoto are the easiest place to find it." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Is two days enough for Hakone?",
              acceptedAnswer: { '@type': 'Answer', text: "It is the right length for most people. One day means running the loop without stopping and skipping the onsen night, which is the main reason to come. Two days covers the full circuit, one or two museums, the historical sites on the lake, a ryokan night and a dawn attempt at Fuji." },
            },
            {
              '@type': 'Question',
              name: "Should I stay in Hakone-Yumoto or higher up?",
              acceptedAnswer: { '@type': 'Answer', text: "Hakone-Yumoto is cheapest, best connected and has the most day-use baths within walking distance. Gora, Sengokuhara and the Lake Ashi area put you closer to the loop and, more importantly, within reach of a dawn Fuji view on day two. If seeing the mountain matters, stay high." },
            },
            {
              '@type': 'Question',
              name: "Can I do this itinerary as a day trip from Tokyo?",
              acceptedAnswer: { '@type': 'Answer', text: "The loop alone, yes, on a long day with an early start. What you lose is the onsen night, the Open-Air Museum and any realistic chance of a clear Fuji view, since day-trippers arrive at the lake in the early afternoon when cloud has usually built. It is doable and it is a lesser trip." },
            },
            {
              '@type': 'Question',
              name: "Which direction should I do the loop?",
              acceptedAnswer: { '@type': 'Answer', text: "Clockwise from Hakone-Yumoto sequences the sights better and is what this plan follows, but it is the direction the crowd goes. If you cannot leave Tokyo early, go anticlockwise: bus straight to Moto-Hakone, then boat and ropeway back, and stay out of phase with the mid-morning wave." },
            },
            {
              '@type': 'Question',
              name: "What should I do if the ropeway is closed?",
              acceptedAnswer: { '@type': 'Answer', text: "Substitute buses run the section and the Free Pass covers them, so the loop still works by road. You may lose Owakudani itself if the closure is for volcanic activity. Check the operating status first thing in the morning and reorder your day around the museums if needed." },
            },
            {
              '@type': 'Question',
              name: "How much should I budget for a ryokan night?",
              acceptedAnswer: { '@type': 'Answer', text: "Ryokan rates are quoted per person and normally include a multi-course dinner and breakfast, so they look expensive next to hotel room rates but are not comparable. Rooms with a private open-air bath cost considerably more. Rates rise sharply for autumn weekends, Golden Week and New Year, all of which need booking months out." },
            },
            {
              '@type': 'Question',
              name: "What should I buy in Hakone?",
              acceptedAnswer: { '@type': 'Answer', text: "Yosegi-zaiku, the local wood marquetry made from naturally contrasting timbers, most famously as puzzle boxes that open through a hidden sequence of slides. It has been made in the region for roughly two centuries and the shops along the main street in Hakone-Yumoto are the easiest place to find it." },
            },
          ],
        },
      };

    default:
      return null;
  }
}
