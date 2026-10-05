// Beijing authority pages (2026-10). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getBeijingInfoContent() -> getChinaInfoContent() -> getCityInfoContent().
// Every tourCard slug is taken from the live China tour list (GET /api/public/tours?country=China&city=Beijing).
import type { CityInfoData } from './cityInfoContent';

export function getBeijingInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "china-visa-guide-for-tourists":
      return {
        title: "China Visa Guide for Tourists (2026): Who Needs One, Who Doesn't, and the 240-Hour Transit Rule",
        description: "China is not visa-free for most Western travelers the way Southeast Asia is. Here is who actually qualifies for visa-free entry, who needs a visa in advance, and how the 240-hour transit exemption works in Beijing and Shanghai.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70c602548385993fe63184f846c1d0b664db7cfcd45baf6fc9d31370e08f4080.jpg",
        fastFacts: [
          { icon: "FileText", label: "Most Western nationals", value: "Need a visa before arrival" },
          { icon: "Globe", label: "Unilateral visa-free list", value: "38+ countries (mostly EU, ASEAN) — up to 30 days" },
          { icon: "Clock", label: "Transit exemption", value: "240 hours (10 days) visa-free via Beijing/Shanghai" },
          { icon: "AlertTriangle", label: "USA, Canada, Australia", value: "Not on the unilateral list — visa required unless transiting" },
        ],
        sections: [
          {
            title: "China Is Not Visa-Free the Way Thailand or Vietnam Is",
            content: "This is the single most common planning mistake we see for China trips, and it catches people who have just come from backpacking Southeast Asia, where visa-free entry is close to universal. China is different. Unless your passport is on a specific list, you need a visa arranged before you fly, and it has to be applied for in person or through an approved agent — there is no visa-on-arrival or e-visa for most nationalities at Beijing or Shanghai airports.\n\nChina has expanded a **unilateral visa-free entry** policy since late 2023, and it now covers more than 38 countries, mostly in Europe (France, Germany, Italy, Spain, Netherlands, Switzerland, and others), plus a run of Southeast Asian and Gulf countries including Malaysia, Singapore, Thailand and the UAE. Nationals of these countries can enter for tourism, business or family visits for up to 30 days per entry without applying for anything in advance. This policy has been extended repeatedly and is generally in effect through at least the end of 2026, but check the current list on the Chinese embassy site for your passport before booking, because countries have been added and the exact end date of the policy keeps being renewed in stages rather than made permanent.\n\n**The United States, Canada, Australia, the United Kingdom and New Zealand are not on this list.** Travelers from these countries need a standard tourist (L) visa applied for at a Chinese visa center before departure, unless they qualify for the transit exemption below.",
          },
          {
            title: "The 240-Hour Transit Exemption: China's Real Workaround",
            content: "If you don't qualify for unilateral visa-free entry, the next option is the **240-hour (10-day) visa-free transit policy**, and it is genuinely useful for a Beijing or Shanghai stopover even if you're American, Canadian or Australian.\n\nThe rule: if you're flying into one eligible Chinese city and out of a different eligible city (or the same city) en route to a third country — not back to your country of origin — you can stay up to 240 hours without a visa. Beijing and Shanghai are both on the eligible port list, along with dozens of other cities. So a US traveler flying New York → Beijing → Bangkok can spend up to 10 days in Beijing visa-free, as long as the onward ticket to a genuine third country is booked and shown at immigration.\n\n**What trips this up in practice:** round-trip tickets back to your home country don't qualify — immigration officers have turned people away at the counter for this. You also need to register your onward itinerary and sometimes a hotel address on arrival. Build your trip around this from day one rather than discovering the rule after booking a round-trip flight, because changing it at the airport is not something staff can fix for you.",
            tourCard: { slug: "bj-in-a-day-great-wall-forbidden-city-hutong", title: "BJ in a Day: Great Wall, Forbidden City, Hutong & Acrobatics", description: "If you're using the 240-hour transit window, this is the one-day version that gets the headline sights done without wasting a travel day.", price: "From $246", duration: "8 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70c602548385993fe63184f846c1d0b664db7cfcd45baf6fc9d31370e08f4080.jpg" }
          },
          {
            title: "Applying for a Standard Tourist Visa",
            content: "If neither exemption applies — most commonly if you're American, Canadian or Australian and flying in and out of the same country — you apply for an **L visa** at a Chinese Visa Application Service Center (not the embassy directly, in most countries) or a Chinese consulate. You'll need: a passport valid at least six months beyond your trip with blank pages, a completed application form with a specific passport-style photo format, a detailed day-by-day itinerary, proof of round-trip flights, and hotel confirmations for every night of the stay. Processing is typically four working days for standard service, with faster paid options available in most cities.\n\nMost L visas issued to first-time applicants are single or double entry, valid for a defined stay (commonly 30 days per entry), though US citizens have historically been eligible for 10-year multiple-entry visas under a reciprocal agreement — worth asking for explicitly if you expect to return to China.\n\n**Practically:** apply 3–4 weeks before departure, not the week before — centers get backed up and a rejected or delayed application with no time buffer can cost you the whole trip. Note that **Hong Kong and Macau are separate immigration zones** with their own, generally easier, entry rules, so a layover there does not satisfy or interact with mainland China's visa requirements either way.",
          }
        ],
        faqs: [
          { q: "Do US citizens need a visa for China?", a: "Yes, in almost all cases. The US is not on China's unilateral visa-free list, so unless you qualify for the 240-hour transit exemption (flying to a genuine third country, not back to the US), you need to apply for an L visa before departure." },
          { q: "What is the 240-hour visa-free transit rule?", a: "If you enter China through an eligible port (Beijing and Shanghai both qualify) and your onward ticket is to a different country, not back to your point of origin, you can stay up to 240 hours (10 days) without a visa, covering multiple cities in some cases." },
          { q: "Which countries can enter China visa-free?", a: "More than 38 countries, mostly European (France, Germany, Italy, Spain and others) plus Malaysia, Singapore, Thailand and some Gulf states, can enter visa-free for up to 30 days under China's unilateral exemption policy. The US, UK, Canada and Australia are not on this list." },
          { q: "How long does a China visa take to process?", a: "Standard processing is typically around 4 working days at a Chinese Visa Application Service Center, with express and rush options available for an extra fee in most countries. Apply at least 3–4 weeks before departure to leave room for delays." },
        ],
      };

    case "great-wall-of-china-which-section":
      return {
        title: "Which Section of the Great Wall Should You Visit From Beijing? (2026)",
        description: "Badaling, Mutianyu, Jinshanling or Jiankou — an honest comparison of distance, crowds, restoration level and difficulty to help you pick the right Great Wall section for your trip from Beijing.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03",
        fastFacts: [
          { icon: "MapPin", label: "Closest to Beijing", value: "Badaling (~80 km, ~1.5-2 hr)" },
          { icon: "Star", label: "Best overall balance", value: "Mutianyu" },
          { icon: "Mountain", label: "Best for hikers, least restored", value: "Jiankou (unofficial, no services)" },
          { icon: "Camera", label: "Best for photography, fewer crowds", value: "Jinshanling (~130 km)" },
        ],
        sections: [
          {
            title: "There Is No Single 'Great Wall' — It's a Choice Between Sections",
            content: "The Great Wall near Beijing isn't one site, it's a scattering of restored and semi-restored sections stretching across the mountains north of the city, and which one you visit changes the entire day more than almost any other decision in a Beijing itinerary. Get it right and you see dramatic watchtowers marching over ridgelines with room to actually enjoy it; get it wrong and you spend the day shuffling shoulder-to-shoulder up a staircase.\n\nThe four sections worth knowing: **Badaling** is the one everyone has seen in photographs because it's the closest to Beijing and the one state visits are taken to — which also makes it the single most crowded stretch of wall on earth most weekends. **Mutianyu** is the practical recommendation for most travelers: a similar level of restoration and dramatic scenery to Badaling, roughly the same distance, but materially less crowded because tour buses default to Badaling. **Jinshanling** is further out (around 130 km, roughly 2.5 hours each way) and rewards the extra distance with a longer, less-restored stretch that's genuinely good for photography and far quieter. **Jiankou** is the wild, largely unrestored wall that hikers chase for Instagram-famous shots like the 'arrow nock' — it has no cable car, no railings in places, and has caused injuries and even deaths, so it is not for casual visitors or anyone without hiking experience and the right footwear.",
          },
          {
            title: "Picking by Trip Type",
            content: "**First-time visitor with one day in Beijing, wants the classic photo without the crowd crush:** Mutianyu. It's the section most private tours default to for exactly this reason.\n\n**Traveling with elderly relatives or young kids, limited mobility:** Badaling, specifically because it has the most infrastructure — cable car, toboggan slide down, paved sections, food stalls — even though it's the most crowded. The convenience outweighs the crowd for this group.\n\n**Serious hikers who want a proper trek and don't mind rough terrain:** Jinshanling, or Jiankou only with a guide, the right boots, and realistic expectations about risk — sections of unrestored wall collapse in places and there are no safety rails.\n\n**Visiting on a weekend or Chinese public holiday:** avoid Badaling entirely regardless of which category you fall into; it becomes genuinely unpleasant, not just busy. Mutianyu or Jinshanling absorb crowds far better.\n\nA growing number of operators now sell 'off-peak' Mutianyu slots timed for early morning entry or late-afternoon last entry, specifically to dodge the midday tour-bus wave — worth paying the small premium for if your main goal is photos without strangers in every frame.",
            tourCard: { slug: "off-peak-mutianyu-great-wall-tour-early", title: "Off-Peak Mutianyu Great Wall Tour: Early Morning/Last Entry", description: "Timed specifically around the tour-bus crowd wave at Mutianyu — early morning or last-entry slots for a quieter Wall.", price: "From $181", duration: "Half day", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03" }
          },
          {
            title: "Getting There and What to Bring",
            content: "None of these sections are realistically reachable by public transport on a tight schedule except Badaling, which has a direct high-speed rail option from Beijing North Station (around 20-30 minutes) — genuinely the easiest independent option if you don't want a tour. Mutianyu and Jinshanling are best reached by a private car, tour van or guided tour; a round trip by public bus to either is possible but slow and involves transfers.\n\nWhatever section you pick, bring more water than you think you'll need — there's minimal shade on the wall itself, especially in summer — and solid closed-toe shoes; the steps are steep, uneven in height, and worn smooth in places by decades of foot traffic. Cable cars exist at Badaling, Mutianyu and Jinshanling and are worth the extra cost if your main goal is the view rather than the climb, since the approach walk up to the wall itself can be as demanding as the wall walk.",
          }
        ],
        faqs: [
          { q: "Which section of the Great Wall is closest to Beijing?", a: "Badaling, at around 80 km and roughly 1.5-2 hours by road, or about 20-30 minutes by direct high-speed rail from Beijing North Station — the only section with an easy independent public-transport option." },
          { q: "Is Mutianyu or Badaling better?", a: "Mutianyu, for most travelers. Both are similarly restored and similarly far from Beijing, but Badaling gets the bulk of tour-bus traffic and is noticeably more crowded most days. Choose Badaling only if easy access via train, cable car and a toboggan ride matters more than crowd levels." },
          { q: "Which Great Wall section is best for photos?", a: "Jinshanling, for travelers willing to go further (around 130 km / 2.5 hours). It's less restored than Mutianyu or Badaling, with a longer uninterrupted ridge of watchtowers and far fewer people in frame." },
          { q: "Is Jiankou Great Wall dangerous?", a: "Yes, relative to the other sections. It's unrestored, has no cable car or safety rails in most places, and sections have collapsed. It has caused serious injuries. Only attempt it with a guide, proper hiking boots and realistic fitness expectations." },
        ],
      };

    case "mutianyu-vs-badaling":
      return {
        title: "Mutianyu vs Badaling: Which Great Wall Section to Choose",
        description: "The two most popular Great Wall day trips from Beijing, compared head to head on distance, crowds, restoration, facilities and price — with a clear recommendation for most travelers.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03",
        fastFacts: [
          { icon: "Clock", label: "Distance from Beijing", value: "Both roughly 70-90 km, 1.5-2 hr by road" },
          { icon: "Users", label: "Crowd level", value: "Badaling significantly busier most weekends" },
          { icon: "CableCar", label: "Facilities", value: "Both have cable cars; Badaling also has rail access" },
          { icon: "Award", label: "Recommendation for most travelers", value: "Mutianyu" },
        ],
        sections: [
          {
            title: "The Core Difference: Crowds, Not Quality",
            content: "Mutianyu and Badaling are more similar than most comparisons suggest — both are heavily restored, both have dramatic watchtower-studded ridgelines, both have cable cars, and both are a comparable distance and drive time from central Beijing, generally 1.5 to 2 hours depending on traffic and your starting point. The real difference is crowd management: Badaling is the section used for official state visits and is the default stop for large coach tours, which means on weekends and holidays it can feel more like a crowd-control exercise than a hike. Mutianyu absorbs visitors more comfortably because it has a longer walkable stretch (around 2.25 km open to the public, versus Badaling's shorter main section) and sees a lower volume of mass tour buses.\n\nNeither is 'wild' Great Wall — if you want unrestored, overgrown sections, that's Jiankou, not either of these. Both Mutianyu and Badaling have gift shops, food stalls, paved approach paths and clearly marked routes.",
          },
          {
            title: "Getting There: Badaling's Rail Advantage",
            content: "Badaling has one real logistical edge: a direct high-speed rail connection from Beijing North Railway Station, with a journey time of roughly 20-30 minutes, making it the only Great Wall section genuinely practical to visit independently without a car or tour. If you want to DIY this trip without booking a tour, Badaling via train is the most straightforward option.\n\nMutianyu has no rail station nearby and is reached by private car, tour van, or a public bus plus transfer combination that eats most of a morning. For most visitors this means Mutianyu is effectively a tour or private-car day, while Badaling can be done solo. If independence matters more to you than crowd levels, that tips the decision toward Badaling regardless of the crowd difference.",
            tourCard: { slug: "beijing-mutianyu-great-wall-bus-tour-with-guide", title: "Beijing: Mutianyu Great Wall Bus Tour with Guide", description: "A straightforward guided bus day to Mutianyu that removes the transport problem without the cost of a private car.", price: "From $16", duration: "Full day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68cf1ea2154466309633bfd" }
          },
          {
            title: "The Verdict",
            content: "For a first and only Great Wall visit, **choose Mutianyu** unless train access matters more to you than crowd levels, or you're traveling with people who specifically want the toboggan slide down from the wall, which exists at both but is a signature feature at Badaling. Mutianyu's cable car, chairlift and toboggan options are also available, so you aren't giving up convenience to avoid the crowds — you're mainly giving up the train.\n\nBudget-wise, the two are broadly comparable: entrance tickets are similarly priced, and the real cost difference comes from transport — a public bus/tour to Mutianyu or a guided tour with pickup will generally cost more than a DIY train ticket to Badaling, but less than a private car and guide to either.",
          }
        ],
        faqs: [
          { q: "Is Mutianyu or Badaling closer to Beijing?", a: "Both are roughly 70-90 km and 1.5-2 hours by road from central Beijing — there is no meaningful distance advantage either way. Badaling additionally has a 20-30 minute high-speed rail option that Mutianyu lacks." },
          { q: "Can I visit Badaling without a tour?", a: "Yes — it's the one section with a direct high-speed rail connection from Beijing North Railway Station, making it genuinely practical as an independent day trip without a car or guide." },
          { q: "Why is Badaling more crowded than Mutianyu?", a: "Badaling is the default stop for large coach tours and official visits, and its main publicly accessible section is shorter than Mutianyu's roughly 2.25 km open stretch, so the same crowd feels denser." },
          { q: "Do both Mutianyu and Badaling have cable cars?", a: "Yes, both offer cable car or chairlift access, and both have toboggan slides down from the wall as an alternative to walking back." },
        ],
      };

    case "forbidden-city-tickets-guide":
      return {
        title: "Forbidden City Tickets Guide 2026: Prices, Booking Rules and What Actually Sells Out",
        description: "How to book Forbidden City tickets, what they cost in peak and low season, why it closes Mondays, and the easy mistakes — like forgetting the real-name booking rule — that get travelers turned away at the gate.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/91fe6e96cc216fe2cce77c3",
        fastFacts: [
          { icon: "Ticket", label: "Peak season (Apr-Oct)", value: "Around ¥60" },
          { icon: "Ticket", label: "Low season (Nov-Mar)", value: "Around ¥40" },
          { icon: "CalendarX", label: "Closed", value: "Mondays (except public holidays)" },
          { icon: "AlertTriangle", label: "Booking", value: "Must be booked in advance online with passport details; often sells out days ahead" },
        ],
        sections: [
          {
            title: "You Cannot Just Walk Up and Buy a Ticket",
            content: "This is the detail that trips up more visitors than anything else about the Forbidden City: there is no meaningful walk-up ticket window anymore. Entry is capped at a daily visitor limit and tickets are sold online, tied to your exact passport details, for a specific date. During peak travel periods — national holidays, summer, and any weekend in spring or autumn — tickets can sell out several days in advance. If you're building a Beijing itinerary around 'we'll figure out the Forbidden City when we get there,' you are taking a real risk of simply not getting in.\n\nThe official booking channel is the Palace Museum's own site and WeChat mini-program, which is often difficult for foreign visitors without a Chinese phone number or ID, which is the practical reason most international travelers book through a tour operator or ticketing service that handles the passport-based reservation on their behalf. If you do book directly, you will need every visitor's passport number entered correctly — a mismatched passport at the gate is a hard stop, not a formality.",
          },
          {
            title: "Prices, Hours and the Monday Closure",
            content: "Entry runs on a two-tier seasonal price: roughly **¥60 in peak season** (April through October) and roughly **¥40 in low season** (November through March). These are base palace-grounds entry prices; several halls and exhibition areas inside — the Treasure Gallery, the Clock and Watch Gallery, the Hall of Martial Valor — charge a small additional fee on top and are ticketed separately, so budget a little more if you want to see everything rather than just walk the main axis.\n\nThe Forbidden City is **closed every Monday** except during national holiday weeks, when it switches its closure to another day instead — always check the specific week rather than assuming Monday is a universal rule, because holiday-week schedules get republished and can catch out visitors who checked a generic rule online months earlier. Opening hours are typically 8:30am to 4:30pm (last entry around 3:30-4pm) in peak months, with shorter winter hours — build in a full morning at minimum, since rushing the main halls alone takes 2-3 hours and most visitors spend 3-4.",
            tourCard: { slug: "forbidden-city-entry-ticket-with-optional-guided", title: "Forbidden City Entry Ticket with Optional Guided Tour", description: "Pre-booked entry that handles the passport-reservation requirement for you, with an optional guide if you want context on each hall.", price: "From $23", duration: "Flexible", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/add00cf78fed65721b700cf" }
          },
          {
            title: "What's Worth Pairing It With",
            content: "The Forbidden City sits at the heart of Beijing's old imperial axis, directly north of Tiananmen Square and directly south of Jingshan Park, whose hilltop pavilion gives the single best overview photo of the palace's golden roofs — a detail most first-time visitors miss because they exit south the way they came in rather than continuing north and up.\n\nBecause of the booking and time pressure, most travelers either combine the Forbidden City into a single-day loop with Tiananmen Square and the nearby 798 Art Zone, or pair it with a full guided day that also covers the Temple of Heaven and Summer Palace with transport and tickets handled, which removes the booking-risk problem entirely since the operator reserves your slot as part of the package.",
          }
        ],
        faqs: [
          { q: "Do I need to book Forbidden City tickets in advance?", a: "Yes, always. Tickets are tied to passport details and capped by a daily visitor limit; they regularly sell out several days ahead during peak season, so there is no reliable walk-up option." },
          { q: "How much does it cost to enter the Forbidden City?", a: "Roughly ¥60 in peak season (April-October) and roughly ¥40 in low season (November-March) for base palace entry. Several galleries inside charge small separate fees on top." },
          { q: "Is the Forbidden City closed on Mondays?", a: "Yes, except during national holiday weeks, when the closure day shifts — always check the specific week rather than assuming a fixed Monday rule year-round." },
          { q: "How long should I spend at the Forbidden City?", a: "Most visitors spend 3-4 hours covering the main halls; a fast walk-through of just the central axis takes 2-3 hours. Allow a full morning if you also want to see the side galleries." },
        ],
      };

    case "beijing-1-day-itinerary":
      return {
        title: "The Perfect 1-Day Beijing Itinerary: What's Actually Possible in 24 Hours",
        description: "A realistic one-day Beijing itinerary — the honest version, since the Great Wall and the Forbidden City genuinely cannot both be done well in a single day without cutting corners.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70c602548385993fe63184f846c1d0b664db7cfcd45baf6fc9d31370e08f4080.jpg",
        sections: [
          {
            title: "The Honest Trade-Off: You Can't Do Everything Well",
            content: "Most 'perfect 1-day Beijing' lists promise the Great Wall, Forbidden City, Temple of Heaven and a hutong walk all in one day, and the honest answer is that doing all four properly in one day means doing none of them properly. The Great Wall alone is a 1.5-2 hour drive each way from central Beijing, so a Wall day genuinely is a Wall day — you leave early, you get back in the evening, and that's the day.\n\nIf you only have one day, the real decision is: **Great Wall day, or city-center day.** Both are legitimate, but they are different days, and the operators who sell 'Great Wall + Forbidden City in one day' tours are almost always compressing the Forbidden City into a rushed hour or skipping its side galleries entirely to make the math work. We'd rather tell you that upfront than sell you a day that disappoints.",
          },
          {
            title: "Option A: The Great Wall Day",
            content: "**7:00am** — Early pickup, essential for beating both traffic and crowds at the Wall.\n**9:00-9:30am** — Arrive Mutianyu (or Badaling if you want the train option). Walk and/or cable car up, 2-3 hours on the Wall itself.\n**Early afternoon** — Lunch, usually included on guided day trips, then the drive back.\n**4:00-5:00pm** — Back in central Beijing with the evening free for a hutong wander or dinner.\n\nThis is the version worth prioritizing if the Great Wall is the single thing you came to see — which for most first-time visitors, it is.",
            tourCard: { slug: "off-peak-mutianyu-great-wall-tour-early", title: "Off-Peak Mutianyu Great Wall Tour: Early Morning/Last Entry", description: "Timed to the exact rhythm this itinerary needs — early entry before the crowd wave, back in the city by late afternoon.", price: "From $181", duration: "Half day", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03" }
          },
          {
            title: "Option B: The Imperial City Day",
            content: "**8:30am** — Tiananmen Square, before the midday heat and crowds build.\n**9:30am-12:30pm** — Forbidden City (book the specific timed entry in advance — see our ticket guide). Budget 3 hours for the main axis.\n**1:30pm** — Lunch near Jingshan Park, then climb the hill for the best photo of the palace's roofline.\n**3:00-4:30pm** — Temple of Heaven, a very different, more peaceful architectural complex a short taxi ride south.\n**Evening** — A hutong dinner walk through the lanes around Nanluoguxiang or Shichahai, Beijing's most atmospheric old neighborhoods.\n\nThis day stays entirely within the city, uses no long highway transfers, and gives each site real time rather than a drive-by.",
            tourCard: { slug: "beijing-hutong-drum-tower-fortune-temple-tour", title: "Beijing Hutong, Drum Tower & Fortune Temple Tour", description: "The evening-appropriate close to the imperial-city day — old lanes, the Drum Tower, and a temple most tourists miss entirely.", price: "From $78", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad" }
          }
        ],
        faqs: [
          { q: "Can I visit the Great Wall and Forbidden City in one day?", a: "Not well. The Great Wall alone requires 3-4 hours of driving round trip, which leaves little time to do the Forbidden City justice. Most operators selling a combined day compress one site into a rushed stop." },
          { q: "What's the best use of a single day in Beijing?", a: "Pick one: a Great Wall day (if this is your main reason for visiting), or an Imperial City day covering Tiananmen Square, the Forbidden City, Temple of Heaven and a hutong evening — both are complete, satisfying days on their own." },
          { q: "How early should I start a Great Wall day trip?", a: "By 7am if possible. Early arrival beats both the worst of the traffic on the way out and the midday tour-bus crowd wave at the wall itself." },
        ],
      };

    case "beijing-3-day-itinerary":
      return {
        title: "The Perfect 3-Day Beijing Itinerary: Great Wall, Forbidden City & Hutongs",
        description: "A field-tested 3-day Beijing plan — imperial sites on day one, the Great Wall on day two, hutongs and food culture on day three — built around real travel times, not a wishlist.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/91fe6e96cc216fe2cce77c3",
        sections: [
          {
            title: "Why Three Days Is the Right Minimum",
            content: "Beijing rewards three days far more than one or two, mostly because of a single fact that surprises first-time visitors: the Great Wall is a half-day-eating round trip on its own, which means any one-day visit either skips the Wall or rushes everything else. Three days lets you give the Wall its own day, the old imperial core its own day, and the living city — hutongs, food, markets — its own day, without any of them feeling compressed.\n\nThe order matters less than making sure you don't schedule the Wall for your last day; if weather or smog forces a reschedule (see our Beijing air-quality guide), you want spare days left, not none.",
          },
          {
            title: "Day 1: The Imperial Axis",
            content: "Tiananmen Square at opening, then the **Forbidden City** (book ahead — tickets sell out) for a full 3-hour visit, lunch near Jingshan Park with the climb up for the palace-roof photo, then the **Temple of Heaven** in the afternoon — a genuinely different architectural mood, built for Ming and Qing emperors' annual harvest prayers rather than daily rule. Close with a sunset walk through Qianmen Street.",
            tourCard: { slug: "beijing-temple-of-heaven-detective-tour-with", title: "Beijing: Temple of Heaven Detective Tour with Tickets", description: "A game-format guided visit that keeps the Temple of Heaven's history engaging rather than a straight lecture — tickets included.", price: "From $81", duration: "Half day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0cab3f" }
          },
          {
            title: "Day 2: The Great Wall",
            content: "Full day at **Mutianyu** — early departure, 2-3 hours on the wall, lunch, return by late afternoon. If you have energy left, a quiet hutong dinner; if not, an early night, because day 2 of most Beijing trips is physically the most demanding, between the walking at the wall and the drive.",
            tourCard: { slug: "beijing-mutianyu-great-wall-private-photo-tour", title: "Beijing: Mutianyu Great Wall Private Photo Tour with Guide", description: "A private, paced-for-you version of the Wall day, with a guide who knows where the empty stretches are for photos.", price: "From $566", duration: "Full day", rating: "4.9", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03" }
          },
          {
            title: "Day 3: Summer Palace, Hutongs & Food",
            content: "Morning at the **Summer Palace** — the Qing dynasty's lakeside retreat, large enough that a rushed visit does it a disservice; budget 2-3 hours minimum for Kunming Lake and Longevity Hill. Afternoon in the hutongs around Nanluoguxiang and the Drum and Bell Towers, with a dumpling or home-cooking class as the day's anchor rather than a standard restaurant meal — it's consistently the highest-rated single activity among travelers who've done both. Close with Peking duck, Beijing's one unmissable dish, ideally at a restaurant specializing in the wood-fired version rather than the mass hotel-buffet version.",
            tourCard: { slug: "beijing-dumpling-making-class-with-local-host", title: "Beijing: Dumpling-Making Class with Local Host", description: "Hands-on, in a local home rather than a tourist kitchen — the kind of afternoon that turns into the trip's best memory.", price: "From $117", duration: "3 hours", rating: "4.9", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68cf1ea2154466309633bfd" }
          }
        ],
        faqs: [
          { q: "Is 3 days enough for Beijing?", a: "Yes, for the headline sites — Great Wall, Forbidden City, Temple of Heaven, Summer Palace and hutongs — provided you dedicate a full day to the Wall alone and don't try to combine it with another major site." },
          { q: "What should I prioritize if I only have 3 days?", a: "One full day for the Great Wall, one for the Forbidden City plus Temple of Heaven, and one for the Summer Palace plus hutongs and food. Don't schedule the Wall for your last day in case of weather or air-quality rescheduling." },
          { q: "How much walking is involved in a Beijing itinerary?", a: "A lot. The Forbidden City alone covers roughly 720,000 square meters end to end, and the Great Wall involves steep, uneven steps. Comfortable broken-in shoes matter more here than almost any other packing decision." },
        ],
      };

    case "things-to-do-in-beijing":
      return {
        title: "25 Best Things to Do in Beijing (2026): A Local's Honest List",
        description: "Beyond the Great Wall and Forbidden City — the full range of what's actually worth your time in Beijing, from imperial sites to hutong food culture to the 798 Art Zone.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad",
        sections: [
          {
            title: "Imperial & Historic Beijing",
            content: "**The Forbidden City** — the walled palace complex at the heart of the city, home to 24 emperors across the Ming and Qing dynasties; book tickets days ahead, it sells out.\n\n**The Great Wall** — Mutianyu or Badaling for most visitors, a half-day-minimum round trip from the city.\n\n**Temple of Heaven** — a circular complex of altars and halls where emperors prayed for good harvests; architecturally distinct from the Forbidden City's rectilinear palace design, and far less crowded.\n\n**Summer Palace** — Empress Dowager Cixi's lakeside retreat, built around the vast Kunming Lake; a genuinely different pace from the city-center sites.\n\n**Lama Temple (Yonghegong)** — Beijing's largest functioning Tibetan Buddhist temple, with a 26-meter sandalwood Buddha statue in its final hall.",
          },
          {
            title: "Neighborhoods & Living Culture",
            content: "**Hutongs** — the old courtyard-house lane neighborhoods, best explored around Nanluoguxiang, Shichahai lake and the Drum and Bell Towers; a rickshaw or e-bike tour covers more ground than walking alone.\n\n**798 Art Zone** — a former military-electronics factory complex converted into Beijing's contemporary art district, with galleries, street art and a noticeably younger, more design-forward energy than the historic sites.\n\n**Wangfujing and Qianmen Street** — Beijing's classic shopping streets, good for a sense of the modern city without leaving the center.\n\n**Beijing Hutong, Drum Tower & Fortune Temple** — a half-day guided loop that strings the lane neighborhoods together with a stop at a lesser-known fortune-telling temple most visitors never find on their own.",
            tourCard: { slug: "beijing-forbidden-city-and-798-art-zone-guided", title: "Beijing: Forbidden City and 798 Art Zone Guided Day Tour", description: "Imperial history in the morning, contemporary art in the afternoon — the sharpest contrast in a single Beijing day.", price: "From $402", duration: "Full day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/91fe6e96cc216fe2cce77c3" }
          },
          {
            title: "Food, Craft & Hands-On Experiences",
            content: "**Peking duck** — book a restaurant specializing in the wood-fired roasting method, not a hotel buffet version.\n\n**A dumpling or home-cooking class** — consistently rated by past visitors as the single best half-day activity in the city, because it's hosted in a real home rather than a commercial kitchen.\n\n**Paper-cutting and tea tasting** — a traditional craft workshop with a local artist, a quiet counterpoint to the big historic sites.\n\n**National Art Museum of China and the China Science and Technology Museum** — both excellent, both chronically under-visited by tourists racing between the Wall and the Palace.\n\n**Chairman Mao Memorial Hall** — a sobering, free-entry site requiring ID and advance online reservation, still visited daily by long lines of Chinese citizens — worth seeing for what it reveals about how modern China relates to its own history.",
            tourCard: { slug: "beijing-chinese-home-cooking-class-with-local-host", title: "Beijing: Chinese Home Cooking Class with Local Host", description: "A real family kitchen, not a tourist cooking studio — market shopping, then cooking a full home-style meal together.", price: "From $117", duration: "3 hours", rating: "4.9", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed259f9300e7ac7505eb8a1" }
          }
        ],
        faqs: [
          { q: "What is Beijing most famous for?", a: "The Great Wall and the Forbidden City are the two sites Beijing is globally known for, but the Temple of Heaven, Summer Palace, hutong neighborhoods and 798 Art Zone are all genuinely worth a traveler's time and far less crowded." },
          { q: "What should first-time visitors not miss in Beijing?", a: "The Forbidden City (book ahead), one Great Wall section, and at least a half-day in the hutongs — ideally with a food-focused activity like a dumpling class, which consistently rates as travelers' favorite single experience." },
          { q: "Is 798 Art Zone worth visiting?", a: "Yes, especially as a contrast to the historic sites — it's a former factory complex turned contemporary gallery district, and gives a very different sense of the city than the Forbidden City or Great Wall." },
        ],
      };

    case "beijing-travel-guide-2026":
      return {
        title: "Beijing Travel Guide 2026: Everything You Need to Plan Your Trip",
        description: "A practical, no-fluff Beijing travel guide — visas, getting around, when to go, what to see, and the mistakes first-time visitors most commonly make.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/91fe6e96cc216fe2cce77c3",
        sections: [
          {
            title: "Before You Go: Visas and Timing",
            content: "China is not visa-free for most Western travelers — see our full [visa guide](/china/beijing/china-visa-guide-for-tourists) before booking flights, since the rules differ sharply by nationality and the 240-hour transit exemption only works with the right onward routing.\n\nOn timing: Beijing's best weather and air quality generally fall in **September and October** — see our [air quality guide](/china/beijing/beijing-air-quality-when-to-visit) — while winter (Nov-Mar) brings the worst smog days alongside genuinely cold, dry weather, and summer (Jun-Aug) is hot, humid and occasionally smoggy from a different cause (ozone and heat rather than coal heating).",
          },
          {
            title: "Getting Around",
            content: "Beijing's subway is extensive, cheap and the fastest way to beat the city's famous traffic — see our [subway guide](/china/beijing/beijing-subway-guide) for how ticketing actually works for foreign visitors. Didi (China's Uber-equivalent) works well and most drivers don't speak English, so having your destination typed in Chinese characters, which the app itself can usually generate, solves most communication problems.\n\nTaxis are plentiful but a language barrier is near-universal; having your hotel's address written in Chinese to show the driver is a small habit that saves real frustration.",
          },
          {
            title: "What to See and Common Mistakes",
            content: "The essential sites — Great Wall, Forbidden City, Temple of Heaven, Summer Palace — are covered in depth in our [things to do](/china/beijing/things-to-do-in-beijing) and [itinerary](/china/beijing/beijing-3-day-itinerary) guides. The single most common planning mistake is underestimating travel time to the Great Wall and trying to combine it with another major site in one day; the second most common is not booking Forbidden City tickets far enough ahead and getting turned away.\n\nOn food: Peking duck is the one dish worth planning a specific meal around, and a hands-on dumpling or home-cooking class is, by a wide margin, the activity past visitors rate highest — higher, in survey after survey of return travelers, than most paid attractions.",
            tourCard: { slug: "bj-in-a-day-great-wall-forbidden-city-hutong", title: "BJ in a Day: Great Wall, Forbidden City, Hutong & Acrobatics", description: "For travelers with very limited time, a single packed day covering the headline sights with tickets and transport handled.", price: "From $246", duration: "8 hours", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70c602548385993fe63184f846c1d0b664db7cfcd45baf6fc9d31370e08f4080.jpg" }
          }
        ],
        faqs: [
          { q: "Do I need a visa to visit Beijing?", a: "Most Western travelers do, unless their nationality is on China's unilateral visa-free list or they qualify for the 240-hour transit exemption. See our full visa guide before booking flights." },
          { q: "What is the best time to visit Beijing?", a: "September and October, for the best combination of mild weather and the clearest air of the year. Winter brings worse smog alongside cold, dry conditions; summer is hot and humid." },
          { q: "How many days do you need in Beijing?", a: "Three days is the practical minimum to see the Great Wall, Forbidden City, Temple of Heaven and Summer Palace without rushing — see our 3-day itinerary." },
        ],
      };

    case "beijing-subway-guide":
      return {
        title: "Beijing Subway Guide 2026: How to Use the Metro as a Tourist",
        description: "How ticketing, payment and navigation actually work on the Beijing subway for foreign visitors — QR codes, the Yikatong card, and which lines matter most for tourists.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad",
        fastFacts: [
          { icon: "Train", label: "Network size", value: "One of the largest metro systems in the world by length" },
          { icon: "CreditCard", label: "Payment", value: "Alipay/WeChat QR code, or a Yikatong transit card" },
          { icon: "Coins", label: "Fare", value: "Distance-based, typically ¥3-10 for most tourist trips" },
          { icon: "Shield", label: "Security", value: "Bag X-ray scanning at every station entrance" },
        ],
        sections: [
          {
            title: "How to Actually Pay for a Ride",
            content: "Beijing's subway is cash-unfriendly in practice, even though ticket machines technically accept cash — the real default for both locals and increasingly for tourists is a QR code payment through **Alipay** or **WeChat Pay**, tapped at turnstile scanners on entry and exit. Setting up Alipay's 'Tour Pass' feature (which lets foreign credit cards load a usable in-app wallet without a Chinese bank account) before you land is the single most useful piece of prep for getting around Beijing smoothly, not just for the subway but for virtually everything else cash-based in the city.\n\nThe alternative is a physical **Yikatong** transit card, sold and topped up at station service counters and some convenience stores, which also works on buses and some taxis. It requires a cash or card deposit, refundable when you return the card before leaving — useful if you'd rather not set up a Chinese payment app at all.",
          },
          {
            title: "Navigating the System",
            content: "Station and train signage is bilingual throughout — Chinese and English — with all announcements also given in English, so the system itself is more foreign-visitor-friendly than its reputation suggests. Every station entrance has an **airport-style security check** with bag X-ray scanning, which is standard across the whole network and adds a few minutes to every trip; budget for it rather than being surprised by the queue.\n\nLine 1 runs east-west roughly along Chang'an Avenue past Tiananmen Square; Line 2 loops the old city wall boundary; Line 8 runs past the Olympic sites in the north. For most tourist itineraries, the central loop lines (1, 2) plus a taxi or Didi for the final stretch to specific sites covers the bulk of what you need — the subway doesn't go anywhere near the Great Wall sections, which require a car or tour regardless.",
            tourCard: { slug: "beijing-hutong-drum-tower-fortune-temple-tour", title: "Beijing Hutong, Drum Tower & Fortune Temple Tour", description: "A guided half-day that removes the navigation question entirely for the old-lane neighborhoods near Line 2's northern stations.", price: "From $78", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad" }
          },
          {
            title: "Practical Tips",
            content: "Rush hour (roughly 7:30-9am and 5:30-7pm on weekdays) on the central lines is genuinely intense — Beijing's subway carries tens of millions of rides a day, and central interchange stations at peak times involve real crowd pressure. If your schedule allows it, shift sightseeing trips outside these windows.\n\nThe network closes late evening (times vary by line, generally around 10:30-11:30pm) and starts early (around 5am), so it's rarely the limiting factor for an evening out — taxis and Didi cover the gap fine. Keep your phone charged; a dead phone with no QR code and no Yikatong card is the one scenario that genuinely strands you at a turnstile.",
          }
        ],
        faqs: [
          { q: "How do tourists pay for the Beijing subway?", a: "Most commonly via a QR code through Alipay or WeChat Pay, which can be set up with a foreign credit card through Alipay's Tour Pass feature before arrival. A physical Yikatong transit card is the cash-based alternative." },
          { q: "Is the Beijing subway easy for foreign tourists to use?", a: "Yes — all signage and announcements are bilingual in Chinese and English. The main adjustment is the mandatory security bag-check at every station entrance, which adds a few minutes to each trip." },
          { q: "Does the subway go to the Great Wall?", a: "No. The subway doesn't reach any Great Wall section; Badaling is reachable by a separate high-speed rail line from Beijing North Station, and other sections require a car, bus tour or private transfer." },
        ],
      };

    case "temple-of-heaven":
      return {
        title: "Temple of Heaven, Beijing: Complete Visitor Guide",
        description: "What the Temple of Heaven actually is, why it looks so different from the Forbidden City, ticket prices, and how much time to budget — plus why it's one of Beijing's most underrated sites.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0cab3f",
        fastFacts: [
          { icon: "Ticket", label: "Entry (through-ticket)", value: "Around ¥34-35 in peak season" },
          { icon: "Clock", label: "Time needed", value: "1.5-2.5 hours" },
          { icon: "MapPin", label: "Location", value: "South-central Beijing, short taxi from Forbidden City" },
          { icon: "Landmark", label: "Built", value: "1420, Ming Dynasty, for imperial harvest-prayer rituals" },
        ],
        sections: [
          {
            title: "What the Temple of Heaven Actually Is",
            content: "Where the Forbidden City was the emperor's seat of government, the Temple of Heaven was his place of ritual — built in 1420 under the same Ming emperor who built the Forbidden City, specifically for the annual ceremonies where the emperor prayed to heaven for a good harvest on behalf of the entire empire. This distinction matters because it shapes everything about the site: it's circular rather than rectilinear, set within a vast park rather than walled city blocks, and designed around cosmological symbolism rather than administrative hierarchy — every structure, staircase count and tier is built around numerology tied to heaven and the emperor's role as intermediary between the human and divine.\n\nThe centerpiece, the **Hall of Prayer for Good Harvests**, is the building most people picture when they think of Beijing's circular blue-roofed temple — a triple-eaved wooden structure built without a single nail or metal fastener, standing on a three-tiered marble terrace.",
          },
          {
            title: "What to See Inside",
            content: "Beyond the Hall of Prayer for Good Harvests, the complex includes the **Echo Wall**, a circular wall famous for carrying a whispered voice clearly to the opposite side (though modern crowd noise makes this harder to test than guidebooks suggest), the **Circular Mound Altar**, an open-air three-tiered marble platform where the actual sacrificial rituals were performed, and the surrounding **cypress grove**, some trees centuries old, that makes the walk between structures genuinely peaceful compared to the Forbidden City's more processional, crowd-managed feel.\n\nThe park around the temple complex is also where many older Beijing residents gather daily for tai chi, ballroom dancing and card games — arriving mid-morning rather than at opening sometimes means seeing more local life, not less.",
            tourCard: { slug: "beijing-temple-of-heaven-detective-tour-with", title: "Beijing: Temple of Heaven Detective Tour with Tickets", description: "A game-format guided visit using the complex's history and layout as the backdrop — tickets included, no separate booking needed.", price: "From $81", duration: "Half day", rating: "4.6", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0cab3f" }
          },
          {
            title: "Tickets and Timing",
            content: "A through-ticket covering the main sites (Hall of Prayer, Circular Mound Altar and the Echo Wall complex) runs roughly ¥34-35 in peak season, with separate cheaper park-only entry if you just want to walk the grounds without the ticketed halls. Unlike the Forbidden City, Temple of Heaven tickets rarely sell out and can generally be bought same-day at the gate, which makes it a far easier add-on if your schedule is loose.\n\nBudget 1.5-2.5 hours for a proper visit — less than the Forbidden City, since the site is smaller and more walkable, but still enough to see the grove, the altar and the hall without rushing. It pairs naturally with the Forbidden City on the same day since both sit on Beijing's historic north-south axis, roughly a 15-20 minute taxi ride apart.",
          }
        ],
        faqs: [
          { q: "What is the Temple of Heaven used for?", a: "It was built in 1420 as the site where Ming and Qing emperors performed annual rituals praying to heaven for a good harvest — a religious and ceremonial complex, distinct from the Forbidden City's role as the seat of government." },
          { q: "How much does the Temple of Heaven cost to enter?", a: "Roughly ¥34-35 for the through-ticket covering the main halls and altar in peak season, with a cheaper park-only ticket available if you only want to walk the grounds." },
          { q: "Do Temple of Heaven tickets sell out?", a: "Rarely — unlike the Forbidden City, same-day tickets are generally available at the gate, making it a much easier same-day add-on to a Beijing itinerary." },
          { q: "How long do you need at the Temple of Heaven?", a: "1.5 to 2.5 hours for a proper visit covering the Hall of Prayer for Good Harvests, the Circular Mound Altar and the Echo Wall." },
        ],
      };

    case "summer-palace-beijing":
      return {
        title: "Summer Palace, Beijing: Complete Guide to Kunming Lake and Longevity Hill",
        description: "Everything to know about the Summer Palace — the Qing dynasty's imperial retreat, why it was looted and rebuilt, ticket prices, and how to see it without rushing.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/beijing-lama-temple-summer-palace",
        fastFacts: [
          { icon: "Ticket", label: "Entry (through-ticket)", value: "Around ¥60 in peak season" },
          { icon: "Clock", label: "Time needed", value: "2.5-4 hours" },
          { icon: "MapPin", label: "Location", value: "Northwest Beijing, roughly 40-50 min from the city center" },
          { icon: "Landmark", label: "Size", value: "Around 290 hectares, three-quarters of it Kunming Lake" },
        ],
        sections: [
          {
            title: "A Palace Built Mostly of Water",
            content: "The Summer Palace is unlike every other imperial site in Beijing in one obvious way: roughly three-quarters of its 290-hectare grounds is water — **Kunming Lake**, a largely artificial lake expanded over centuries, with **Longevity Hill** rising from its northern shore and the palace buildings arranged across the hill and shoreline rather than contained within a single walled compound.\n\nIt was built as a retreat from the formality and heat of the Forbidden City, used most famously — and most notoriously — by the **Empress Dowager Cixi**, who in the late 19th century diverted naval modernization funds to rebuild and expand the palace after it was burned by British and French forces in 1860 during the Second Opium War, a decision historians still cite as a contributing factor in the Qing navy's catastrophic defeat against Japan in 1894-95. The marble boat on the lake's edge, built with some of those diverted funds, is now one of the site's most photographed — and most pointed — landmarks.",
          },
          {
            title: "What to See and How Long It Takes",
            content: "The **Long Corridor**, a roughly 728-meter covered walkway along the lake's north shore painted with thousands of individual scenes from Chinese mythology and literature, is the site's signature feature and worth slowing down for rather than walking through quickly. **Longevity Hill** rewards the climb with the Tower of Buddhist Incense, visible across much of the lake, and a genuinely good overview of the whole complex from its base.\n\nBudget 2.5 to 4 hours — more than the Temple of Heaven, less than a full Forbidden City day, but enough that trying to combine it with the Forbidden City or Great Wall on the same day means rushing one or both. Many visitors underestimate the walking distance around the lake itself; it is a large site and comfortable shoes matter here as much as anywhere else in Beijing.",
            tourCard: { slug: "beijing-private-tour-with-forbidden-city-and", title: "Beijing: Private Tour with Forbidden City and Summer Palace", description: "A private, paced day covering both the Forbidden City and Summer Palace for travelers short on time who still want proper time at each.", price: "From $1157", duration: "Full day", rating: "4.9", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/beijing-lama-temple-summer-palace" }
          },
          {
            title: "Getting There and Tickets",
            content: "The Summer Palace sits in northwest Beijing, roughly 40-50 minutes from the city center by taxi or Didi, and is also reachable by subway (Line 4 to Beigongmen station) for travelers comfortable navigating the system independently. A through-ticket covering the main buildings costs roughly ¥60 in peak season, with a cheaper grounds-only option if you skip the ticketed interior halls.\n\nIt's a reasonable combination with the nearby **Lama Temple**, Beijing's largest functioning Tibetan Buddhist temple, if you want a full day in this part of the city rather than rushing back to the center.",
          }
        ],
        faqs: [
          { q: "How much time do you need at the Summer Palace?", a: "2.5 to 4 hours for a proper visit covering Kunming Lake's shoreline, the Long Corridor and Longevity Hill. It's a large site and best not combined with another major attraction on the same day." },
          { q: "Why is the Summer Palace famous for being rebuilt?", a: "It was burned by British and French forces in 1860 and later rebuilt and expanded by Empress Dowager Cixi using funds diverted from naval modernization — a decision widely cited as contributing to the Qing navy's defeat against Japan in 1894-95." },
          { q: "How do I get to the Summer Palace from central Beijing?", a: "By taxi or Didi (roughly 40-50 minutes), or by subway Line 4 to Beigongmen station for travelers comfortable navigating independently." },
        ],
      };

    case "hutong-tours-beijing":
      return {
        title: "Hutong Tours in Beijing: What They Are and Which Ones Are Worth It",
        description: "What a hutong actually is, why these old lane neighborhoods are disappearing, and how to tell a genuinely good hutong tour from a rickshaw-and-gift-shop loop.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad",
        sections: [
          {
            title: "What a Hutong Actually Is",
            content: "A hutong is a narrow lane formed between rows of traditional courtyard houses (siheyuan), a street pattern dating back centuries that once covered most of old Beijing. Much of that fabric was demolished through the 20th century and especially in the run-up to the 2008 Olympics, which makes the surviving hutong neighborhoods — concentrated around **Nanluoguxiang**, **Shichahai lake**, and the area near the **Drum and Bell Towers** — genuinely historic rather than a recreated tourist set.\n\nThe experience inside a well-preserved hutong is a real contrast to the monumental scale of the Forbidden City: narrow lanes, courtyard doorways, small shops and a residential texture where people actually still live, alongside the inevitable modern layer of cafes and souvenir stalls that have moved in as the areas gentrified.",
          },
          {
            title: "What Separates a Good Tour From a Bad One",
            content: "The low-value version of a hutong tour is a quick rickshaw loop that stops at a single courtyard house set up as a gift shop, with a ten-minute tea-pouring demonstration clearly aimed at a sales pitch rather than genuine cultural content — this exists in abundance and is worth avoiding.\n\nThe better version goes further than the postcard lanes: it includes a stop at the **Drum Tower** or **Bell Tower** (both genuinely interesting, used historically to mark time for the whole city), takes you to a less-touristed fortune-telling temple most visitors never find alone, or builds the walk around food — a dumpling-making class in an actual family home being the single highest-rated activity among past visitors to Beijing according to repeat survey data, consistently outscoring the big-ticket paid attractions.",
            tourCard: { slug: "beijing-hutong-drum-tower-fortune-temple-tour", title: "Beijing Hutong, Drum Tower & Fortune Temple Tour", description: "The version of a hutong tour that goes past the postcard lanes — a fortune temple and the Drum Tower most rickshaw loops skip entirely.", price: "From $78", duration: "Half day", rating: "4.7", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9179579e8225c71c901c7ad" }
          },
          {
            title: "Doing It Independently",
            content: "Hutongs are entirely walkable without a guide, and Shichahai lake in particular is a pleasant self-guided wander, especially in the early evening when locals come out for walks and the lakeside bars light up. The trade-off of going independently is context — a lot of what makes a hutong interesting (why a particular doorway's lintel decoration signals the former resident's rank, why a specific lane survived demolition, where to actually find the best dumpling spot that isn't geared toward tourists) is invisible without someone who knows the neighborhood.\n\nEither way, go in the late afternoon or early evening rather than midday — the light is better for photos, the heat (in summer) is more bearable, and the lanes feel more lived-in once the day's deliveries and errands are underway.",
          }
        ],
        faqs: [
          { q: "What is a hutong in Beijing?", a: "A narrow lane formed between traditional courtyard houses, part of old Beijing's historic street pattern. Much of it was demolished through the 20th century; surviving hutong areas cluster around Nanluoguxiang, Shichahai lake and the Drum and Bell Towers." },
          { q: "Are hutong tours worth it?", a: "A good one is — especially those including the Drum Tower, a less-touristed temple, or a cooking class. A basic rickshaw loop stopping only at a gift-shop courtyard is the low-value version to avoid." },
          { q: "Can you walk the hutongs without a guide?", a: "Yes, they're fully walkable independently, especially around Shichahai lake. You trade some historical context for flexibility and timing — many visitors go late afternoon when the lanes feel more lived-in." },
        ],
      };

    case "beijing-food-guide":
      return {
        title: "Beijing Food Guide 2026: What to Eat and Where",
        description: "From Peking duck to dumplings to street-food alleys — a practical guide to Beijing's food scene, including the dishes worth planning a specific meal around.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed259f9300e7ac7505eb8a1",
        sections: [
          {
            title: "Peking Duck: The One Dish Worth Planning Around",
            content: "Peking duck is Beijing's signature dish and the one meal worth building an evening around rather than treating as an incidental stop. The real version is roasted in a wood-fired oven (the traditional method, versus the faster, less distinctive hung-oven version used by lower-end restaurants), carved tableside into thin slices of crisp skin and meat, and eaten wrapped in thin pancakes with scallion, cucumber and sweet bean sauce.\n\nThe practical advice: book ahead at a restaurant known specifically for the wood-fired method rather than ordering duck as one dish among many at a general hotel restaurant, where it's routinely a disappointing version of the same name. It's also one of Beijing's more expensive standard meals, so treat it as the planned centerpiece of one dinner rather than an easy lunch option.",
          },
          {
            title: "Beyond Duck: Dumplings, Noodles and Street Food",
            content: "**Jiaozi (dumplings)** are the everyday staple, and a hands-on dumpling-making class with a local host is, by a wide margin, the single most highly rated activity among past Beijing visitors — not a paid attraction, a cooking class, which says something about how much the food culture itself is the draw.\n\n**Zhajiangmian** (noodles in fermented soybean paste) is Beijing's classic everyday noodle dish, worth seeking out at a no-frills local spot rather than a tourist-facing restaurant. Street-food alleys and night markets have been cleaned up significantly compared to a decade ago — the famous scorpion-and-insect skewer stalls near Wangfujing are more spectacle than genuinely representative local eating, worth seeing once but not the best measure of Beijing's actual food culture.",
            tourCard: { slug: "beijing-dumpling-making-class-with-local-host", title: "Beijing: Dumpling-Making Class with Local Host", description: "Hands-on in a real home kitchen — consistently the highest-rated single activity among past Beijing visitors.", price: "From $117", duration: "3 hours", rating: "4.9", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68cf1ea2154466309633bfd" }
          },
          {
            title: "A Practical Food Day",
            content: "A good approach: breakfast simple (congee or a local bakery), a dumpling or home-cooking class for lunch or mid-afternoon rather than a sit-down restaurant, and Peking duck booked in advance for dinner on one specific night of the trip. Tea culture is also worth a slower, dedicated stop — a traditional tea tasting paired with a craft like paper-cutting gives a quieter counterpoint to the bigger, louder food experiences.\n\nTap water is not drinkable without boiling or filtering in most of China, including Beijing — bottled or boiled water is standard and widely available, and most hotels provide an electric kettle for exactly this reason.",
            tourCard: { slug: "beijing-paper-cutting-workshop-and-tea-tasting", title: "Beijing: Paper-Cutting Workshop and Tea Tasting Experience", description: "A quieter, craft-focused counterpoint to the bigger food experiences — traditional tea culture in a local artist's home.", price: "From $123", duration: "2 hours", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2781edc31918e27ba7d0b8a768d9c1c460ee043921f828d659a8063f438841ec.png" }
          }
        ],
        faqs: [
          { q: "What is the best Peking duck restaurant in Beijing?", a: "Look specifically for restaurants that roast using the traditional wood-fired method and carve tableside, and book ahead. Hotel restaurants that list duck as one dish among many are routinely a disappointing version." },
          { q: "What is the most highly rated food activity in Beijing?", a: "A hands-on dumpling or home-cooking class with a local host, hosted in a real kitchen rather than a tourist studio — it consistently outrates paid attractions in past-visitor feedback." },
          { q: "Can you drink tap water in Beijing?", a: "No, not without boiling or filtering. Bottled water is cheap and widely available, and most hotel rooms include an electric kettle for boiling." },
        ],
      };

    case "beijing-air-quality-when-to-visit":
      return {
        title: "Beijing Air Quality: When to Visit to Avoid the Smog",
        description: "An honest look at Beijing's air pollution patterns by season — why winter is worst, why autumn is the real sweet spot, and how to check the AQI before you commit to an outdoor day.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/beijing-skyline",
        fastFacts: [
          { icon: "Wind", label: "Best air quality months", value: "September-October (autumn)" },
          { icon: "AlertTriangle", label: "Worst air quality months", value: "November-February (coal heating season)" },
          { icon: "Thermometer", label: "Secondary pollution season", value: "Summer ozone/haze on hot, still days" },
          { icon: "Smartphone", label: "How to check", value: "US Embassy AQI feed or apps like AirVisual/IQAir" },
        ],
        sections: [
          {
            title: "Why Beijing's Air Quality Has a Season",
            content: "Beijing's air pollution isn't constant — it has a strong seasonal pattern tied largely to coal-based winter heating across northern China, combined with the city's geography: it sits in a basin ringed by mountains to the north and west, which traps pollution during temperature inversions rather than letting wind clear it out. This has meaningfully improved since the mid-2010s, when the government began a sustained effort to cut coal use, relocate heavy industry and tighten vehicle emissions — Beijing's air today is measurably better than the hazardous extremes of 2013-2015 that first made international headlines — but it is still not clean air by global standards, and bad-AQI days still happen, concentrated in winter.\n\n**Winter (November-February)**, when the city's central heating system runs on a mix including coal, produces the worst and most frequent smog days, often compounded by wind-still cold-air inversions that trap particulates at street level for days at a time. **Summer (June-August)** has its own, different pollution pattern — ground-level ozone and haze build on hot, still, humid days, which is a different mechanism from winter's particulate smog but still degrades visibility and air quality.",
          },
          {
            title: "Why Autumn Is the Real Answer",
            content: "**September and October** are consistently when Beijing's air is at its best — heating season hasn't started, summer's heat and humidity have broken, and the city tends to get clearer, windier weather that disperses pollution rather than trapping it. This is also, not coincidentally, when most seasoned Beijing travelers and photographers specifically plan Great Wall trips, since clear-sky days at Mutianyu or Jinshanling in October produce the kind of photo that a hazy July day simply cannot.\n\n**Spring (March-May)** is a reasonable second choice — generally better than winter, though spring also brings occasional dust storms blown in from Mongolia and northern China's deserts, a separate weather phenomenon from urban smog that can spike particulate readings for a day or two at a time.",
            tourCard: { slug: "off-peak-mutianyu-great-wall-tour-early", title: "Off-Peak Mutianyu Great Wall Tour: Early Morning/Last Entry", description: "Best booked for an autumn clear-sky day if your dates are flexible — this is when Great Wall photos actually look like the postcards.", price: "From $181", duration: "Half day", rating: "4.8", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c6c2e541f4e7c143070d03" }
          },
          {
            title: "Checking the AQI and What to Do on a Bad Day",
            content: "The most reliable real-time source for Beijing's AQI has historically been the **US Embassy's own air quality monitoring feed**, available through apps like AirVisual (IQAir) and various Chinese weather apps that now also report official government readings. Check it the morning of any outdoor-heavy day — Great Wall sections and the Summer Palace in particular reward checking ahead, since there's little point driving 1.5-2 hours to a hazy viewpoint.\n\nOn a genuinely bad AQI day (readings above roughly 150-200 on the US AQI scale), consider swapping an outdoor day for an indoor one — the Forbidden City's halls, museums, a cooking class or the 798 Art Zone's indoor galleries — and pushing the Great Wall or Summer Palace to a clearer day later in the trip. This is exactly why we recommend not scheduling the Great Wall for your last day: it gives you room to reschedule around the weather rather than being stuck with whatever the sky does.",
          }
        ],
        faqs: [
          { q: "What is the best month for air quality in Beijing?", a: "September and October, generally. Heating season hasn't started and summer's heat and haze have broken, producing the city's clearest, windiest stretch of the year." },
          { q: "Why is Beijing's air worst in winter?", a: "Coal-based central heating across northern China ramps up, and Beijing's basin geography, ringed by mountains, traps pollutants during still, cold temperature inversions rather than letting them disperse." },
          { q: "Has Beijing's air quality improved?", a: "Yes, substantially since the mid-2010s, after a sustained government push to cut coal use and tighten emissions. It's measurably better than the hazardous extremes of 2013-2015, but still not clean by global standards, especially in winter." },
          { q: "How do I check Beijing's air quality before a day out?", a: "Apps like IQAir (AirVisual) report real-time AQI readings, historically cross-referenced against the US Embassy's own monitoring feed. Check the morning of any Great Wall or outdoor-heavy day." },
        ],
      };

    default:
      return null;
  }
}
