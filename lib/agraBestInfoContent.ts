// Human-phrased Agra tour pages (2026-10-31). Each page answers a question people actually type
// ("best X", "is X worth it") and sells real live Agra tours; cards come from the live
// tour database, so every slug below exists. No prices on cards: the listing shows the real ladder.
import type { CityInfoData } from './cityInfoContent';
const PAGES: Record<string, CityInfoData> = {
  "best-taj-mahal-tour-from-delhi": {
    "title": "Which Is the Best Taj Mahal Tour from Delhi?",
    "seoTitle": "Best Taj Mahal Tour from Delhi 2026: 4 Real Options",
    "description": "Delhi to the Taj Mahal and back in one day: which private-car tour to pick, what a good one includes, and four real options from budget to luxury.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-private-taj-mahal-agra-tour-all/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "sparkles",
        "content": "For most people the best Taj Mahal tour from Delhi is a **private car with a licensed guide, tickets handled, leaving Delhi by 6 am**. Agra is about 230 km away, roughly **3.5 to 4 hours each way** on the Yamuna Expressway, so the day is long and the car matters more than any other detail. A private car means you stop when you want, you are not waiting for a coach to fill, and the guide stays with you at the Taj instead of being shared among thirty people.\n\nPick by what you care about most: price, lunch, heat or comfort. Four real options are below, one for each. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Simple and all-inclusive: the one to book if you just want it done",
        "icon": "car",
        "content": "This is the straightforward version: private AC car from your Delhi hotel, a guide at the monuments and entry arranged, with nothing to organise on the day. If you have no strong preference, start here.",
        "tourCard": {
          "slug": "from-delhi-private-taj-mahal-agra-tour-all",
          "title": "From Delhi: Private Taj Mahal & Agra Tour – All-Inclusive",
          "description": "Private, all-inclusive Taj Mahal and Agra day from Delhi by car.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-private-taj-mahal-agra-tour-all/img0/1600.webp"
        }
      },
      {
        "title": "If you want a proper lunch stop",
        "icon": "utensils",
        "content": "A 12-hour day with no real meal turns into a headache by 3 pm. This one builds in a sit-down lunch, which also resets the pace after the Taj and Agra Fort.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-day-trip-by-ac-car",
          "title": "From Delhi: Taj Mahal Day Trip by AC Car with 5-Star Lunch",
          "description": "Delhi to the Taj by AC car with a 5-star lunch and a guide in several languages.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-day-trip-by-ac-car/img0/1600.webp"
        }
      },
      {
        "title": "If heat is your worry: go at sunrise",
        "icon": "sun",
        "content": "From April to June, Agra by midday is punishing. A sunrise start means the Taj in soft light with fewer people, then Agra Fort and Baby Taj before the heat peaks. It does mean leaving Delhi in the small hours.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-sunrise-agra-fort-and-baby",
          "title": "From Delhi: Taj Mahal Sunrise, Agra Fort and Baby Taj by Car",
          "description": "Sunrise Taj Mahal, Agra Fort and Baby Taj by car from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-sunrise-agra-fort-and-baby/img0/1600.webp"
        }
      },
      {
        "title": "If comfort matters most",
        "icon": "star",
        "content": "A luxury car makes the four-hour drives easy. Worth it for families with older parents, or anyone who wants to sleep on the way back.",
        "tourCard": {
          "slug": "delhi-taj-mahal-private-tour-by-luxury-car-all",
          "title": "Delhi: Taj Mahal Private Tour by Luxury Car – All Inclusive",
          "description": "Private Taj Mahal tour by luxury car, all inclusive.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/delhi-taj-mahal-private-tour-by-luxury-car-all/img0/1600.webp"
        }
      },
      {
        "title": "How to choose without overthinking it",
        "icon": "list-checks",
        "content": "- **Alone or as a couple:** the all-inclusive private car is enough.\n- **With older parents or kids:** go luxury car, and keep the day to the Taj and Fort only.\n- **Short on time or hate early mornings:** the Delhi to Agra train is faster. See our [train guide](/india/agra/best-taj-mahal-tour-by-train-from-delhi).\n- **Want to see more than one day lets you:** an [overnight tour](/india/agra/best-overnight-taj-mahal-tour-from-delhi) is calmer.\n\nThe Taj Mahal is **closed on Fridays**, so do not plan the trip for one. More in [is the Taj Mahal closed on Friday](/india/agra/is-taj-mahal-closed-on-friday)."
      }
    ],
    "faqs": [
      {
        "q": "How long does a Taj Mahal day trip from Delhi take?",
        "a": "Plan for 12 to 13 hours door to door. The drive is about 3.5 to 4 hours each way, and the Taj and Agra Fort together take around five hours with entry queues."
      },
      {
        "q": "Is it better to go by car or by train?",
        "a": "Car if you want door to door pickup and flexibility, train if you want to save about two hours of travel and do not mind a fixed schedule. Both are workable in a single day."
      },
      {
        "q": "Can I do the Taj Mahal from Delhi in one day without rushing?",
        "a": "Yes, for the Taj, Agra Fort and one extra stop. Trying to add Fatehpur Sikri as well usually means rushing at least one site."
      },
      {
        "q": "Do these tours include entry tickets?",
        "a": "It differs by listing, and each tour page states what is included. If it is unclear, ask us on WhatsApp before booking and we will tell you plainly."
      },
      {
        "q": "Which day should I avoid?",
        "a": "Friday, because the Taj Mahal is closed to regular visitors. Weekends and national holidays are also much busier."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does a Taj Mahal day trip from Delhi take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plan for 12 to 13 hours door to door. The drive is about 3.5 to 4 hours each way, and the Taj and Agra Fort together take around five hours with entry queues."
              }
            },
            {
              "@type": "Question",
              "name": "Is it better to go by car or by train?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Car if you want door to door pickup and flexibility, train if you want to save about two hours of travel and do not mind a fixed schedule. Both are workable in a single day."
              }
            },
            {
              "@type": "Question",
              "name": "Can I do the Taj Mahal from Delhi in one day without rushing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, for the Taj, Agra Fort and one extra stop. Trying to add Fatehpur Sikri as well usually means rushing at least one site."
              }
            },
            {
              "@type": "Question",
              "name": "Do these tours include entry tickets?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It differs by listing, and each tour page states what is included. If it is unclear, ask us on WhatsApp before booking and we will tell you plainly."
              }
            },
            {
              "@type": "Question",
              "name": "Which day should I avoid?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Friday, because the Taj Mahal is closed to regular visitors. Weekends and national holidays are also much busier."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-by-train-from-delhi": {
    "title": "Best Taj Mahal Tour by Train from Delhi: Gatimaan, Vande Bharat or First Class?",
    "seoTitle": "Best Taj Mahal Tour by Train from Delhi 2026",
    "description": "Which train to take for a Taj Mahal day trip from Delhi, how the Gatimaan, first class and Vande Bharat options differ, and four real tours that include the train.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-tour-from-delhi-by-superfast-train-gatim/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "train-front",
        "content": "The Gatimaan Express is the usual choice: it covers Delhi to Agra in about **100 minutes**, against 3.5 to 4 hours by road, with an early-morning departure and an evening return. That frees up time at the monuments, which is the whole point. A train tour also takes the Yamuna Expressway traffic out of your day.\n\nThe tour version matters because a guide meets you at Agra Cantt station, a car handles Agra, and the train tickets are sorted for you. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Classic: Gatimaan Express day trip",
        "icon": "train-front",
        "content": "The standard train-and-guide day trip. Early departure from Delhi, guided Taj Mahal and Agra Fort, back in Delhi in the evening.",
        "tourCard": {
          "slug": "taj-mahal-tour-from-delhi-by-superfast-train-gatim",
          "title": "Taj Mahal Tour from Delhi by Superfast Train-Gatiman Express",
          "description": "Taj Mahal tour from Delhi by the Gatimaan superfast train.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-tour-from-delhi-by-superfast-train-gatim/img0/1600.webp"
        }
      },
      {
        "title": "More comfort: first class by train",
        "icon": "armchair",
        "content": "Same route, a more comfortable seat and a calmer journey. Worth it if you will be tired after an early start.",
        "tourCard": {
          "slug": "luxury-taj-mahal-agra-tour-by-first-class-train",
          "title": "Luxury Taj Mahal & Agra Tour by First Class Train From Delhi",
          "description": "Luxury Taj Mahal and Agra tour by first class train from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/luxury-taj-mahal-agra-tour-by-first-class-train/img0/1600.webp"
        }
      },
      {
        "title": "Newer option: Vande Bharat",
        "icon": "zap",
        "content": "A modern train on the same corridor, with a tour built around it. A good pick if your dates match its timetable.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-day-trip-by-vande-bharat",
          "title": "From Delhi: Taj Mahal Day-Trip by Vande Bharat Express Train",
          "description": "Taj Mahal day trip from Delhi by Vande Bharat Express.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-day-trip-by-vande-bharat/img0/1600.webp"
        }
      },
      {
        "title": "Train plus Fatehpur Sikri",
        "icon": "landmark",
        "content": "Because the train saves two hours, you can fit Fatehpur Sikri into the same day, which is hard to do by road.",
        "tourCard": {
          "slug": "taj-mahal-agra-fort-fatehpur-sikri-tour-by",
          "title": "Taj Mahal, Agra Fort & Fatehpur Sikri Tour by Gatimaan Train",
          "description": "Taj Mahal, Agra Fort and Fatehpur Sikri tour by Gatimaan train.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-agra-fort-fatehpur-sikri-tour-by/img0/1600.webp"
        }
      },
      {
        "title": "When the train is not the right answer",
        "icon": "info",
        "content": "Trains have fixed times, so a sunrise at the Taj is not possible from a same-day train from Delhi; the earliest arrivals land mid-morning. If sunrise is the point, take the [overnight tour](/india/agra/best-overnight-taj-mahal-tour-from-delhi) or a [car from Delhi](/india/agra/best-taj-mahal-tour-from-delhi). Also remember the Taj is closed on Fridays."
      }
    ],
    "faqs": [
      {
        "q": "How long is the train from Delhi to Agra?",
        "a": "The Gatimaan Express takes about 100 minutes between Delhi and Agra Cantt, the fastest regular option on the route."
      },
      {
        "q": "Is the train tour cheaper than a car tour?",
        "a": "It depends on the class and what is included. Each tour page lists what is covered, and we can compare two options for your dates over WhatsApp."
      },
      {
        "q": "Can I see sunrise at the Taj on a day train?",
        "a": "No. A same-day train from Delhi arrives mid-morning. For sunrise, stay overnight in Agra or go by car in the early hours."
      },
      {
        "q": "What if the train is sold out or delayed?",
        "a": "Tell us before booking and we will tell you what the tour does in that case. Do not leave this to chance on a tight day."
      },
      {
        "q": "Do I need to arrange my own transport in Agra?",
        "a": "No. These tours include a car and a guide in Agra, so you do not have to bargain with anyone at the station."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long is the train from Delhi to Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Gatimaan Express takes about 100 minutes between Delhi and Agra Cantt, the fastest regular option on the route."
              }
            },
            {
              "@type": "Question",
              "name": "Is the train tour cheaper than a car tour?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on the class and what is included. Each tour page lists what is covered, and we can compare two options for your dates over WhatsApp."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see sunrise at the Taj on a day train?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A same-day train from Delhi arrives mid-morning. For sunrise, stay overnight in Agra or go by car in the early hours."
              }
            },
            {
              "@type": "Question",
              "name": "What if the train is sold out or delayed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tell us before booking and we will tell you what the tour does in that case. Do not leave this to chance on a tight day."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to arrange my own transport in Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. These tours include a car and a guide in Agra, so you do not have to bargain with anyone at the station."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-sunset-tour": {
    "title": "Is a Taj Mahal Sunset Tour Worth It? The Best Ones to Book",
    "seoTitle": "Best Taj Mahal Sunset Tour 2026: Worth It?",
    "description": "Whether a Taj Mahal sunset tour is worth it compared with sunrise, what you really see, and four real sunset tours with guide and skip-the-line entry.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/guided-sunset-tour-of-taj-mahal-with-skip-the/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "sunset",
        "content": "Yes, a sunset tour is worth it if you are already in Agra for the day or do not want a 5 am start. The light is warm, the afternoon crowds thin out, and you can pair it with **Mehtab Bagh** across the river, where the Taj is framed in the evening glow. Sunrise is quieter, sunset is easier. Both are good; neither is a mistake.\n\nOne practical point: the Taj closes around sunset, so a sunset slot really means arriving a couple of hours before and being inside while the light changes. A guide who has done it many times will time it. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Skip-the-line sunset with a guide",
        "icon": "sunset",
        "content": "The simplest booking. Skip-the-line entry matters most in the late afternoon, when the queue builds.",
        "tourCard": {
          "slug": "guided-sunset-tour-of-taj-mahal-with-skip-the",
          "title": "Guided Sunset Tour Of Taj Mahal with Skip-The-Line Entry",
          "description": "Guided Taj Mahal sunset tour with skip-the-line entry.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/guided-sunset-tour-of-taj-mahal-with-skip-the/img0/1600.webp"
        }
      },
      {
        "title": "A sunset with a bit more ceremony",
        "icon": "crown",
        "content": "A guided sunset tour, with the evening kept relaxed and unhurried.",
        "tourCard": {
          "slug": "agra-royal-sunset-taj-mahal-tour-with-guide",
          "title": "Agra:- Royal Sunset Taj Mahal Tour With Guide",
          "description": "Royal sunset Taj Mahal tour with a guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-royal-sunset-taj-mahal-tour-with-guide/img0/1600.webp"
        }
      },
      {
        "title": "Sunset by tuk-tuk",
        "icon": "bike",
        "content": "Petrol vehicles cannot go right up to the Taj, so the last stretch is on foot or by battery vehicle anyway. A tuk-tuk makes the rest of the evening more fun and takes you through the older parts of Agra.",
        "tourCard": {
          "slug": "taj-mahal-sunset-tour-by-tuk-tuk-with-private",
          "title": "Taj Mahal Sunset Tour By Tuk Tuk with Private Guide",
          "description": "Taj Mahal sunset tour by tuk-tuk with a private guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-sunset-tour-by-tuk-tuk-with-private/img0/1600.webp"
        }
      },
      {
        "title": "Sunset plus street food",
        "icon": "utensils",
        "content": "A good evening for people who want more than monuments: sunset at the Taj, then local street food after.",
        "tourCard": {
          "slug": "agra-evening-tour-with-sunset-at-taj-mahal-and",
          "title": "Agra Evening Tour with Sunset at Taj Mahal and Street Food",
          "description": "Agra evening tour with sunset at the Taj and street food.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-evening-tour-with-sunset-at-taj-mahal-and/img0/1600.webp"
        }
      },
      {
        "title": "Sunset or sunrise? How to decide",
        "icon": "scale",
        "content": "- **Pick sunrise** if you want the fewest people and softest light, and do not mind a very early start.\n- **Pick sunset** if you arrive in Agra by train or car during the day, are travelling with children or older relatives, or want to photograph from Mehtab Bagh.\n\nSee also [Mehtab Bagh](/india/agra/mehtab-bagh), [sunrise tours](/india/agra/best-taj-mahal-sunrise-tour) and [Taj Mahal opening times](/india/agra/taj-mahal-opening-time)."
      }
    ],
    "faqs": [
      {
        "q": "Is the Taj Mahal better at sunrise or sunset?",
        "a": "Sunrise is quieter and cooler; sunset is easier to fit into a day trip. Neither is wrong. Most photographers prefer sunrise, most families prefer sunset."
      },
      {
        "q": "Can I enter the Taj Mahal at sunset?",
        "a": "Yes, but the Taj closes around sunset, so you must be inside before then. A sunset tour is timed so you arrive early enough to enjoy it."
      },
      {
        "q": "Is the Taj closed on any day?",
        "a": "Yes, it is closed to regular visitors on Fridays."
      },
      {
        "q": "Where is the best sunset view of the Taj?",
        "a": "Inside the complex, and across the river from Mehtab Bagh, which is a calm place to watch the colour change."
      },
      {
        "q": "Do sunset tours include entry tickets?",
        "a": "It varies per listing and is stated on each tour page. Ask us on WhatsApp if you want it confirmed first."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is the Taj Mahal better at sunrise or sunset?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sunrise is quieter and cooler; sunset is easier to fit into a day trip. Neither is wrong. Most photographers prefer sunrise, most families prefer sunset."
              }
            },
            {
              "@type": "Question",
              "name": "Can I enter the Taj Mahal at sunset?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, but the Taj closes around sunset, so you must be inside before then. A sunset tour is timed so you arrive early enough to enjoy it."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Taj closed on any day?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, it is closed to regular visitors on Fridays."
              }
            },
            {
              "@type": "Question",
              "name": "Where is the best sunset view of the Taj?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inside the complex, and across the river from Mehtab Bagh, which is a calm place to watch the colour change."
              }
            },
            {
              "@type": "Question",
              "name": "Do sunset tours include entry tickets?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies per listing and is stated on each tour page. Ask us on WhatsApp if you want it confirmed first."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-street-food-tour": {
    "title": "What Is the Best Street Food Tour in Agra?",
    "seoTitle": "Best Agra Street Food Tour 2026: Where to Book",
    "description": "Agra is more than the Taj: street food tours through old markets, with petha, chaat and spice bazaars. Five real tours compared by format.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-street-food-walking-tour-spice-market-tuk/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "utensils",
        "content": "The best way to eat in Agra is with a local guide, in the **old city around Kinari Bazaar and the spice markets**, in the evening when stalls are busiest. Busy stalls mean fast turnover, which is the simplest rule for eating street food safely anywhere. A guide knows which ones those are, and what to order if you have never had chaat, bedai, jalebi or Agra's famous petha. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Walking tour with a tuk-tuk ride",
        "icon": "bike",
        "content": "A classic mix: walk the narrow lanes, then ride between stops. A good first-time choice.",
        "tourCard": {
          "slug": "agra-street-food-walking-tour-spice-market-tuk",
          "title": "Agra: Street Food Walking Tour, Spice Market, & Tuk-tuk Ride",
          "description": "Street food walking tour with spice market and tuk-tuk ride.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-street-food-walking-tour-spice-market-tuk/img0/1600.webp"
        }
      },
      {
        "title": "Private, by night",
        "icon": "moon",
        "content": "Private and in the evening, which is when the markets are alive.",
        "tourCard": {
          "slug": "agra-by-night-private-street-food-tour-with-local",
          "title": "Agra by Night: Private Street Food Tour With Local Markets",
          "description": "Private Agra by Night street food tour with local markets.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-by-night-private-street-food-tour-with-local/img0/1600.webp"
        }
      },
      {
        "title": "Guided tour by tuk-tuk",
        "icon": "bike",
        "content": "Covers more ground, so you reach stalls that are too far to walk between in the heat.",
        "tourCard": {
          "slug": "agra-guided-street-food-local-market-tour-by-tuk",
          "title": "Agra: Guided Street Food & Local Market Tour By Tuk-Tuk",
          "description": "Guided street food and local market tour by tuk-tuk.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-guided-street-food-local-market-tour-by-tuk/img0/1600.webp"
        }
      },
      {
        "title": "Old city by car, tuk-tuk or bike",
        "icon": "car",
        "content": "More flexibility for how you travel, good for small groups with different comfort levels.",
        "tourCard": {
          "slug": "agra-old-city-street-food-tour-in-car-tuk",
          "title": "Agra: Old City & Street Food Tour in Car, Tuk Tuk or Bike",
          "description": "Old City and street food tour in car, tuk-tuk or bike.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-old-city-street-food-tour-in-car-tuk/img0/1600.webp"
        }
      },
      {
        "title": "Prefer to cook it yourself?",
        "icon": "chef-hat",
        "content": "A cooking class is the calmer option, and a good fit for anyone cautious about street stalls.",
        "tourCard": {
          "slug": "cooking-class-with-taj",
          "title": "Cooking class with taj",
          "description": "Cooking class in Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/cooking-class-with-taj/img0/1600.webp"
        }
      },
      {
        "title": "Tips for first-time street food eaters",
        "icon": "info",
        "content": "- Go in the evening, not the heat of midday.\n- Eat what is cooked in front of you and served hot.\n- Bring hand sanitiser and bottled water.\n- Tell your guide about allergies or what you cannot eat, and go gently on the first day.\n\nCombine with a sunset at the Taj: see our [sunset tour guide](/india/agra/best-taj-mahal-sunset-tour)."
      }
    ],
    "faqs": [
      {
        "q": "Is street food in Agra safe for tourists?",
        "a": "It can be, if you choose busy stalls and eat things cooked fresh and hot. A local guide removes most of the guesswork."
      },
      {
        "q": "What should I try in Agra?",
        "a": "Chaat, bedai with aloo sabzi, jalebi, lassi, and Agra petha, the translucent sweet the city is known for."
      },
      {
        "q": "Are there vegetarian options?",
        "a": "Yes, much of Agra street food is vegetarian. Tell the guide your preferences in advance."
      },
      {
        "q": "How long does a food tour take?",
        "a": "Usually three to four hours. Evenings are best."
      },
      {
        "q": "Can I combine food with the Taj Mahal?",
        "a": "Yes, there are sunset-plus-street-food tours, and you can also add a food tour on the evening of a Taj day."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is street food in Agra safe for tourists?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It can be, if you choose busy stalls and eat things cooked fresh and hot. A local guide removes most of the guesswork."
              }
            },
            {
              "@type": "Question",
              "name": "What should I try in Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chaat, bedai with aloo sabzi, jalebi, lassi, and Agra petha, the translucent sweet the city is known for."
              }
            },
            {
              "@type": "Question",
              "name": "Are there vegetarian options?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, much of Agra street food is vegetarian. Tell the guide your preferences in advance."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a food tour take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usually three to four hours. Evenings are best."
              }
            },
            {
              "@type": "Question",
              "name": "Can I combine food with the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, there are sunset-plus-street-food tours, and you can also add a food tour on the evening of a Taj day."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-tour-with-fatehpur-sikri": {
    "title": "Is It Worth Adding Fatehpur Sikri to Your Agra Tour? The Best Tours That Include It",
    "seoTitle": "Best Agra Tour with Fatehpur Sikri 2026",
    "description": "Fatehpur Sikri is 40 km from Agra and worth a half day. Which tours bundle it with the Taj and Agra Fort, and which to pick, with four real options.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/private-guided-tour-taj-fort-fatehpur-sikri/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "landmark",
        "content": "Yes, if you have a full day. **Fatehpur Sikri** is Akbar's abandoned red-sandstone capital, 40 km from Agra, and one of the best preserved Mughal cities. It takes about two hours to see properly and sits directly on the road to Jaipur, so it is a natural stop whether you come from Delhi or are heading on. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Private, Taj, Fort and Fatehpur in one tour",
        "icon": "car",
        "content": "A private multi-language guide, a car and all three stops. The most relaxed version.",
        "tourCard": {
          "slug": "private-guided-tour-taj-fort-fatehpur-sikri",
          "title": "Private Guided Tour: Taj, Fort & Fatehpur Sikri",
          "description": "Private guided tour of the Taj, Agra Fort and Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-guided-tour-taj-fort-fatehpur-sikri/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi in one day",
        "icon": "map-pin",
        "content": "The full trio from Delhi in a long day. Start early, and expect a late return.",
        "tourCard": {
          "slug": "agra-delhi-guided-tour",
          "title": "From Delhi: Taj Mahal, Agra Fort & Fatehpur Sikri in One Day",
          "description": "Taj Mahal, Agra Fort and Fatehpur Sikri from Delhi in one day.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-delhi-guided-tour/img0/1600.webp"
        }
      },
      {
        "title": "From Agra, just Fatehpur Sikri",
        "icon": "landmark",
        "content": "If you already have the Taj covered, this is a short guided trip to Fatehpur Sikri alone.",
        "tourCard": {
          "slug": "from-agra-fatehpur-sikri-guided-tour",
          "title": "From Agra: Fatehpur Sikri Guided Tour",
          "description": "Fatehpur Sikri guided tour from Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-fatehpur-sikri-guided-tour/img0/1600.webp"
        }
      },
      {
        "title": "Taj, Agra Fort and Fatehpur Sikri, guided",
        "icon": "map",
        "content": "The same combination as a guided tour for those already in Agra.",
        "tourCard": {
          "slug": "agra-guided-tour-of-taj-mahal-agra-fort-and",
          "title": "Agra: Guided Tour of Taj Mahal, Agra Fort and Fatehpur Sikri",
          "description": "Guided tour of the Taj, Agra Fort and Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-guided-tour-of-taj-mahal-agra-fort-and/img0/1600.webp"
        }
      },
      {
        "title": "What to expect at Fatehpur Sikri",
        "icon": "info",
        "content": "The Buland Darwaza is among the tallest gateways in the world; the Panch Mahal is a five-storey pavilion; the Diwan-i-Khas has a single central carved pillar. Unlicensed helpers can be persistent here, so read [how to hire a guide in Agra](/india/agra/agra-tour-guide) before you go."
      }
    ],
    "faqs": [
      {
        "q": "How far is Fatehpur Sikri from Agra?",
        "a": "About 40 km, roughly an hour by road."
      },
      {
        "q": "How long do I need there?",
        "a": "About two hours."
      },
      {
        "q": "Can I visit Fatehpur Sikri on the way to Jaipur?",
        "a": "Yes. It is on the route, which makes it the best stop between Agra and Jaipur."
      },
      {
        "q": "Is it worth it if I am already tired from the Taj?",
        "a": "It is better to do it the next morning or keep it as a separate half day."
      },
      {
        "q": "Do guides here speak other languages?",
        "a": "Some tours offer German, French and Spanish. Check the listing, or ask us on WhatsApp."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How far is Fatehpur Sikri from Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 40 km, roughly an hour by road."
              }
            },
            {
              "@type": "Question",
              "name": "How long do I need there?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About two hours."
              }
            },
            {
              "@type": "Question",
              "name": "Can I visit Fatehpur Sikri on the way to Jaipur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. It is on the route, which makes it the best stop between Agra and Jaipur."
              }
            },
            {
              "@type": "Question",
              "name": "Is it worth it if I am already tired from the Taj?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is better to do it the next morning or keep it as a separate half day."
              }
            },
            {
              "@type": "Question",
              "name": "Do guides here speak other languages?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some tours offer German, French and Spanish. Check the listing, or ask us on WhatsApp."
              }
            }
          ]
        }
      ]
    }
  },
  "best-overnight-taj-mahal-tour-from-delhi": {
    "title": "Is an Overnight Taj Mahal Trip from Delhi Better Than a Day Trip?",
    "seoTitle": "Best Overnight Taj Mahal Tour from Delhi 2026",
    "description": "Overnight versus same-day Taj Mahal from Delhi: when to stay a night in Agra, what you gain, and four real two-day tours from Delhi.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-overnight-taj-mahal-agra-city-tour-by/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "moon",
        "content": "For most people, yes. Agra is 3.5 to 4 hours from Delhi each way, so a day trip spends eight hours on the road. One night in Agra lets you see the **Taj Mahal at sunrise**, add **Fatehpur Sikri** or **Mehtab Bagh**, and drive back in the afternoon without rushing. It costs more but buys you the best light and a calmer trip. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Overnight by car, simple version",
        "icon": "car",
        "content": "Two days from Delhi with an overnight in Agra, with the Taj and city tour covered.",
        "tourCard": {
          "slug": "from-delhi-overnight-taj-mahal-agra-city-tour-by",
          "title": "From Delhi: Overnight Taj Mahal & Agra City Tour by Car",
          "description": "Overnight Taj Mahal and Agra city tour by car from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-overnight-taj-mahal-agra-city-tour-by/img0/1600.webp"
        }
      },
      {
        "title": "Overnight with Fatehpur Sikri",
        "icon": "landmark",
        "content": "The same plan with Fatehpur Sikri added, so you leave nothing out.",
        "tourCard": {
          "slug": "from-delhi-overnight-agrataj-mahal-tour-with-fateh",
          "title": "From Delhi-Overnight Agra/Taj Mahal Tour with Fatehpur Sikri",
          "description": "Overnight Agra and Taj Mahal tour with Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-overnight-agrataj-mahal-tour-with-fateh/img0/1600.webp"
        }
      },
      {
        "title": "Private, two days",
        "icon": "user",
        "content": "A private two-day tour for those who want it unhurried.",
        "tourCard": {
          "slug": "2-days-private-agrataj-mahal-tour-overnight-in-agr",
          "title": "2-Days Private Agra/Taj Mahal Tour ( Overnight in Agra)",
          "description": "Two-day private Agra and Taj Mahal tour with overnight in Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/2-days-private-agrataj-mahal-tour-overnight-in-agr/img0/1600.webp"
        }
      },
      {
        "title": "Luxury overnight",
        "icon": "star",
        "content": "Higher comfort throughout, for anniversaries and special trips.",
        "tourCard": {
          "slug": "private-overnight-taj-mahal-luxury-tour-2-days1-ni",
          "title": "Private Overnight Taj Mahal Luxury Tour (2 Days/1 Night)",
          "description": "Private overnight Taj Mahal luxury tour, 2 days 1 night.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-overnight-taj-mahal-luxury-tour-2-days1-ni/img0/1600.webp"
        }
      },
      {
        "title": "Day trip or overnight? A simple guide",
        "icon": "scale",
        "content": "- **One day only:** see our [day-trip guide](/india/agra/best-taj-mahal-tour-from-delhi).\n- **Want sunrise or sunset at the Taj:** stay overnight.\n- **Travelling onward to Jaipur:** do Agra as an overnight, then continue; see [Agra to Jaipur](/india/agra/agra-to-jaipur).\n- **Older travellers or kids:** overnight is kinder.\n\nThe Taj is closed on Fridays, so plan your nights accordingly."
      }
    ],
    "faqs": [
      {
        "q": "Is one night in Agra enough?",
        "a": "Yes, for the Taj, Agra Fort, and either Fatehpur Sikri or Mehtab Bagh."
      },
      {
        "q": "Can I see the Taj at sunrise on an overnight trip?",
        "a": "Yes, that is the main advantage of staying overnight."
      },
      {
        "q": "Is the hotel included?",
        "a": "It depends on the listing; each tour page says. Ask us on WhatsApp if you need it confirmed."
      },
      {
        "q": "What if I want to go on to Jaipur afterwards?",
        "a": "Many people do Delhi, Agra overnight, then Jaipur, which is the classic Golden Triangle route."
      },
      {
        "q": "Is it worth the extra cost?",
        "a": "If you care about the Taj in good light and arriving rested, yes."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is one night in Agra enough?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, for the Taj, Agra Fort, and either Fatehpur Sikri or Mehtab Bagh."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see the Taj at sunrise on an overnight trip?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, that is the main advantage of staying overnight."
              }
            },
            {
              "@type": "Question",
              "name": "Is the hotel included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on the listing; each tour page says. Ask us on WhatsApp if you need it confirmed."
              }
            },
            {
              "@type": "Question",
              "name": "What if I want to go on to Jaipur afterwards?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many people do Delhi, Agra overnight, then Jaipur, which is the classic Golden Triangle route."
              }
            },
            {
              "@type": "Question",
              "name": "Is it worth the extra cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you care about the Taj in good light and arriving rested, yes."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-tour-from-delhi-airport-layover": {
    "title": "Can You See the Taj Mahal on a Delhi Airport Layover? The Best Tours",
    "seoTitle": "Taj Mahal Layover Tour from Delhi Airport 2026",
    "description": "Whether a Delhi layover is long enough for the Taj Mahal, what you need to leave the airport, and the real airport-to-airport tours that make it work.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/delhi-airport-to-airport-layover-taj-mahal-city/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "plane",
        "content": "Only if your layover is **long, at least 14 to 16 hours**. Agra is roughly 230 km from Delhi airport, about 3.5 to 4 hours each way, and you need time for immigration, the Taj and getting back for check-in. Shorter than that and the sensible plan is a Delhi city tour instead.\n\nMost passport holders also need an **Indian visa (an e-visa works)** to leave the airport; check yours before you book. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Airport to airport, Taj Mahal by car",
        "icon": "plane",
        "content": "Pickup at the airport, a car to Agra, the Taj and city sights, then back in time for your next flight.",
        "tourCard": {
          "slug": "delhi-airport-to-airport-layover-taj-mahal-city",
          "title": "Delhi: Airport to Airport Layover Taj Mahal City Tour By Car",
          "description": "Delhi airport to airport layover Taj Mahal city tour by car.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/delhi-airport-to-airport-layover-taj-mahal-city/img0/1600.webp"
        }
      },
      {
        "title": "Airport to Taj Mahal, 12 hours",
        "icon": "clock",
        "content": "A single-day trip designed for travellers with a long layover, with instant booking.",
        "tourCard": {
          "slug": "delhi-airport-to-taj-mahal-tour-instant-booking",
          "title": "Delhi Airport to Taj Mahal Tour Instant Booking",
          "description": "Delhi airport to Taj Mahal tour with instant booking.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/delhi-airport-to-taj-mahal-tour-instant-booking/img0/1600.webp"
        }
      },
      {
        "title": "Private layover day tour",
        "icon": "user",
        "content": "A private layover tour with a car and a guide to yourself.",
        "tourCard": {
          "slug": "from-delhi-private-layover-taj-mahal-day-tour-by",
          "title": "From Delhi: Private Layover Taj Mahal Day Tour By Car",
          "description": "Private layover Taj Mahal day tour by car from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-private-layover-taj-mahal-day-tour-by/img0/1600.webp"
        }
      },
      {
        "title": "For shorter layovers: a customisable Delhi tour",
        "icon": "timer",
        "content": "If the Taj does not fit, a flexible 5 to 8 hour layover tour covers Delhi's highlights without the risk of missing your flight.",
        "tourCard": {
          "slug": "from-delhi-5-8-hours-customizable-layover-guided",
          "title": "From Delhi : 5-8 Hours Customizable Layover Guided Tours",
          "description": "Customisable 5 to 8 hour layover guided tour from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-5-8-hours-customizable-layover-guided/img0/1600.webp"
        }
      },
      {
        "title": "How to protect your connection",
        "icon": "shield",
        "content": "- Book a **separate** flight for the return if the airline does not protect it.\n- Keep two hours spare at the end, not one.\n- Tell the operator your flight time so they can pick a safe return.\n\nSee also [Delhi to Agra](/india/agra/delhi-to-agra) and [same-day Agra tour from Delhi](/india/agra/same-day-agra-tour-from-delhi)."
      }
    ],
    "faqs": [
      {
        "q": "How long a layover do I need for the Taj Mahal?",
        "a": "At least 14 to 16 hours, to cover the drive each way, the Taj, immigration and check-in."
      },
      {
        "q": "Do I need a visa to leave Delhi airport?",
        "a": "Most nationals do, and an Indian e-visa works. Check your own rules before you plan."
      },
      {
        "q": "Is it safe to try on an 8 hour layover?",
        "a": "No. It is too tight for Agra. Take a Delhi city tour instead."
      },
      {
        "q": "Can the tour drop me back at the airport?",
        "a": "Yes, the airport-to-airport tours are designed for that."
      },
      {
        "q": "What if my flight is delayed?",
        "a": "Tell the operator in advance. For delays, message us on WhatsApp and we will help rearrange."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long a layover do I need for the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At least 14 to 16 hours, to cover the drive each way, the Taj, immigration and check-in."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a visa to leave Delhi airport?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most nationals do, and an Indian e-visa works. Check your own rules before you plan."
              }
            },
            {
              "@type": "Question",
              "name": "Is it safe to try on an 8 hour layover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. It is too tight for Agra. Take a Delhi city tour instead."
              }
            },
            {
              "@type": "Question",
              "name": "Can the tour drop me back at the airport?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the airport-to-airport tours are designed for that."
              }
            },
            {
              "@type": "Question",
              "name": "What if my flight is delayed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tell the operator in advance. For delays, message us on WhatsApp and we will help rearrange."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-tour-with-mathura-vrindavan": {
    "title": "Can You Combine the Taj Mahal with Mathura and Vrindavan? The Best Tours",
    "seoTitle": "Best Taj Mahal + Mathura Vrindavan Tour 2026",
    "description": "Mathura and Vrindavan lie on the Delhi to Agra road. Which tours combine them with the Taj, how long it takes, and four real options.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-agra-fort-mathura-vrindavan-private-day/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "temple",
        "content": "Yes, and it works well because **Mathura (Krishna's birthplace) and Vrindavan** sit about 55 to 65 km from Agra, roughly on the way from Delhi. A good combination tour does the Taj and Agra Fort, then the temples. It is a long 12-hour day, so it suits people who want spiritual sites alongside the Mughal ones.\n\nMany temples close in the afternoon, so the Mathura and Vrindavan leg is best done in the morning or at evening aarti. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Taj, Agra Fort, Mathura and Vrindavan, private",
        "icon": "car",
        "content": "The full combination as a private tour.",
        "tourCard": {
          "slug": "taj-mahal-agra-fort-mathura-vrindavan-private-day",
          "title": "Taj Mahal, Agra Fort, Mathura & Vrindavan Private Day Tour",
          "description": "Taj Mahal, Agra Fort, Mathura and Vrindavan private day tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-agra-fort-mathura-vrindavan-private-day/img0/1600.webp"
        }
      },
      {
        "title": "All-inclusive from Delhi",
        "icon": "star",
        "content": "An all-inclusive format from Delhi, with the Taj and Mathura together.",
        "tourCard": {
          "slug": "from-delhi-all-inclusive-taj-mahal-mathura",
          "title": "From Delhi: All-Inclusive Taj Mahal & Mathura Vrindavan Tour",
          "description": "All-inclusive Taj Mahal and Mathura Vrindavan tour from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-all-inclusive-taj-mahal-mathura/img0/1600.webp"
        }
      },
      {
        "title": "From Agra, evening Mathura and Vrindavan",
        "icon": "moon",
        "content": "If you are already in Agra, this is a six-hour evening trip, timed for the aarti.",
        "tourCard": {
          "slug": "mathura-vrindavan-evening-tour-from-agra",
          "title": "Mathura Vrindavan Evening Tour from Agra",
          "description": "Mathura Vrindavan evening tour from Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/mathura-vrindavan-evening-tour-from-agra/img0/1600.webp"
        }
      },
      {
        "title": "Private day from Delhi",
        "icon": "user",
        "content": "A private day tour combining the Taj with the temples.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-mathura-vrindavan-private-day",
          "title": "From Delhi: Taj Mahal & Mathura Vrindavan Private Day Tour",
          "description": "Taj Mahal and Mathura Vrindavan private day tour from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-mathura-vrindavan-private-day/img0/1600.webp"
        }
      },
      {
        "title": "Things to know before you go",
        "icon": "info",
        "content": "- Dress modestly for the temples; shoulders and knees covered.\n- Phones and bags may be restricted inside some temples.\n- The Taj is closed on Fridays.\n\nMore: [Delhi to Agra](/india/agra/delhi-to-agra) and [Agra Fort](/india/agra/agra-fort)."
      }
    ],
    "faqs": [
      {
        "q": "How far are Mathura and Vrindavan from Agra?",
        "a": "Mathura is about 55 km, Vrindavan about 10 km further."
      },
      {
        "q": "Is it too much for one day?",
        "a": "It is a long day, 12 hours or more. Many people do it as an overnight instead."
      },
      {
        "q": "Is the dress code strict?",
        "a": "Cover shoulders and knees for temples."
      },
      {
        "q": "Can I visit during Holi or Janmashtami?",
        "a": "These festivals are very crowded and very special. Ask us on WhatsApp for how it affects your date."
      },
      {
        "q": "Is a guide needed?",
        "a": "Recommended, as a guide helps with the crowds and explains the temples."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How far are Mathura and Vrindavan from Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mathura is about 55 km, Vrindavan about 10 km further."
              }
            },
            {
              "@type": "Question",
              "name": "Is it too much for one day?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is a long day, 12 hours or more. Many people do it as an overnight instead."
              }
            },
            {
              "@type": "Question",
              "name": "Is the dress code strict?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cover shoulders and knees for temples."
              }
            },
            {
              "@type": "Question",
              "name": "Can I visit during Holi or Janmashtami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "These festivals are very crowded and very special. Ask us on WhatsApp for how it affects your date."
              }
            },
            {
              "@type": "Question",
              "name": "Is a guide needed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Recommended, as a guide helps with the crowds and explains the temples."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-tour-with-female-guide": {
    "title": "Is There an Agra Tour with a Female Guide? The Best Options for Women Travellers",
    "seoTitle": "Agra Tour with Female Guide: Best for Women 2026",
    "description": "Real Agra tours led by women guides: Taj Mahal, shopping, henna and street food, and what solo women travellers should ask before booking.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-baby-taj-agra-fort-with/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "heart",
        "content": "Yes. Several operators offer **female guides** in Agra, for the Taj Mahal and for city experiences. Many women travelling solo or in a group prefer one, and for some experiences, like henna or women-only tours, it adds a lot. Ask for it explicitly when you book and confirm by WhatsApp. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "From Delhi: Taj Mahal, Baby Taj and Agra Fort",
        "icon": "user",
        "content": "A full day from Delhi with a female guide.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-baby-taj-agra-fort-with",
          "title": "From Delhi: Taj Mahal, Baby Taj, Agra Fort with Female Guide",
          "description": "Taj Mahal, Baby Taj and Agra Fort with a female guide from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-baby-taj-agra-fort-with/img0/1600.webp"
        }
      },
      {
        "title": "Taj Mahal VIP tickets with a female guide",
        "icon": "ticket",
        "content": "A shorter visit focused on the Taj, with a car.",
        "tourCard": {
          "slug": "agra-taj-mahal-vip-tickets-with-female-guide-car",
          "title": "Agra: Taj Mahal Vip Tickets with Female Guide & Car",
          "description": "Taj Mahal VIP tickets with a female guide and car.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-vip-tickets-with-female-guide-car/img0/1600.webp"
        }
      },
      {
        "title": "Women-focused day, temple and 5-star lunch",
        "icon": "star",
        "content": "A full day designed for women, with a temple visit and a buffet lunch.",
        "tourCard": {
          "slug": "women-spcl-taj-mahal-lord-shiva-temple-5-buffet",
          "title": "Women spcl: Taj Mahal & Lord Shiva Temple - 5* Buffet Lunch",
          "description": "Women special: Taj Mahal and temple with 5-star buffet lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/women-spcl-taj-mahal-lord-shiva-temple-5-buffet/img0/1600.webp"
        }
      },
      {
        "title": "Shopping with a female guide",
        "icon": "shopping-bag",
        "content": "A marble inlay workshop and shopping tour with a woman guide.",
        "tourCard": {
          "slug": "agra-shopping-tour-with-female-guide-marble-inlay",
          "title": "Agra Shopping Tour with Female Guide & Marble Inlay Workshop",
          "description": "Agra shopping tour with a female guide and marble inlay workshop.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-shopping-tour-with-female-guide-marble-inlay/img0/1600.webp"
        }
      },
      {
        "title": "Henna and street food, for women",
        "icon": "sparkles",
        "content": "An experience for women travellers, with henna, mehndi and food.",
        "tourCard": {
          "slug": "agra-henna-mehndi-and-street-food-tour-for-women",
          "title": "Agra: Henna, Mehndi, and Street Food Tour for Women",
          "description": "Henna, mehndi and street food tour for women.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-henna-mehndi-and-street-food-tour-for-women/img0/1600.webp"
        }
      },
      {
        "title": "Questions to ask before booking",
        "icon": "shield",
        "content": "- Is the female guide confirmed or only requested?\n- Is the driver a separate person, and is the vehicle private?\n- Where will you be picked up and dropped?\n\nRead [is Agra safe for tourists](/india/agra/is-agra-safe-for-tourists) and [how to hire a guide](/india/agra/agra-tour-guide)."
      }
    ],
    "faqs": [
      {
        "q": "Can I request a female guide for the Taj Mahal?",
        "a": "Yes, and several tours list it. Confirm by WhatsApp before you pay."
      },
      {
        "q": "Is Agra safe for solo women?",
        "a": "Most visitors have a fine trip; a licensed guide and a private car make it easier. See our safety guide."
      },
      {
        "q": "What should I wear?",
        "a": "Light, modest clothing; shoulders and knees covered is comfortable and respectful."
      },
      {
        "q": "Is a female driver available?",
        "a": "Not guaranteed. Ask."
      },
      {
        "q": "Can I take a guided tour alone?",
        "a": "Yes, private tours are designed for solo travellers."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I request a female guide for the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, and several tours list it. Confirm by WhatsApp before you pay."
              }
            },
            {
              "@type": "Question",
              "name": "Is Agra safe for solo women?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most visitors have a fine trip; a licensed guide and a private car make it easier. See our safety guide."
              }
            },
            {
              "@type": "Question",
              "name": "What should I wear?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Light, modest clothing; shoulders and knees covered is comfortable and respectful."
              }
            },
            {
              "@type": "Question",
              "name": "Is a female driver available?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not guaranteed. Ask."
              }
            },
            {
              "@type": "Question",
              "name": "Can I take a guided tour alone?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, private tours are designed for solo travellers."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-tuk-tuk-tour": {
    "title": "Is a Tuk-Tuk Tour of Agra a Good Idea? The Best Ones",
    "seoTitle": "Best Agra Tuk-Tuk Tour 2026: Real Options",
    "description": "Why tuk-tuk tours suit Agra, what they cover, and four real options including sunrise from Delhi, skip-the-line, sunset and street food.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/skip-the-line-agra-tour-with-tuk-tuk-live/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "bike",
        "content": "Yes, for the city part of the day. Petrol and diesel vehicles cannot go right up to the Taj Mahal, so the last stretch is on foot or by battery vehicle whatever you choose. A tuk-tuk then makes the rest, Agra Fort, Baby Taj, old bazaars, quick and fun, and gets you through traffic more easily than a car. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Skip-the-line tuk-tuk day with a live guide",
        "icon": "bike",
        "content": "A full Agra day by tuk-tuk, with entry arranged so you avoid queues.",
        "tourCard": {
          "slug": "skip-the-line-agra-tour-with-tuk-tuk-live",
          "title": "Skip The Line Agra Tour With Tuk Tuk & Live Guide",
          "description": "Skip-the-line Agra tour with tuk-tuk and live guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/skip-the-line-agra-tour-with-tuk-tuk-live/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi, with a tuk-tuk in Agra",
        "icon": "map-pin",
        "content": "Sunrise Taj, Agra Fort and Baby Taj, using a tuk-tuk in Agra.",
        "tourCard": {
          "slug": "from-delhi-sunrise-taj-agra-fort-baby-taj-with",
          "title": "From Delhi: Sunrise Taj, Agra Fort & Baby Taj with Tuk-Tuk",
          "description": "Sunrise Taj, Agra Fort and Baby Taj with tuk-tuk from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-sunrise-taj-agra-fort-baby-taj-with/img0/1600.webp"
        }
      },
      {
        "title": "Sunset by tuk-tuk",
        "icon": "sunset",
        "content": "The evening version, with a private guide.",
        "tourCard": {
          "slug": "taj-mahal-sunset-tour-by-tuk-tuk-with-private",
          "title": "Taj Mahal Sunset Tour By Tuk Tuk with Private Guide",
          "description": "Taj Mahal sunset tour by tuk-tuk with a private guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-sunset-tour-by-tuk-tuk-with-private/img0/1600.webp"
        }
      },
      {
        "title": "Street food by tuk-tuk",
        "icon": "utensils",
        "content": "For food lovers, a tuk-tuk through the markets.",
        "tourCard": {
          "slug": "agra-guided-street-food-local-market-tour-by-tuk",
          "title": "Agra: Guided Street Food & Local Market Tour By Tuk-Tuk",
          "description": "Guided street food and local market tour by tuk-tuk.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-guided-street-food-local-market-tour-by-tuk/img0/1600.webp"
        }
      },
      {
        "title": "Tuk-tuk or car?",
        "icon": "scale",
        "content": "- **Tuk-tuk:** better for short hops in the city, more atmosphere, less comfortable in heat or rain.\n- **Car:** better for the Delhi to Agra drive and for older passengers.\n\nSee [best Taj Mahal tour from Delhi](/india/agra/best-taj-mahal-tour-from-delhi)."
      }
    ],
    "faqs": [
      {
        "q": "Can a tuk-tuk go to the Taj Mahal?",
        "a": "Not right up to the gate. Motor vehicles are restricted nearby, so the last stretch is on foot or by battery vehicle."
      },
      {
        "q": "Is a tuk-tuk safe?",
        "a": "With a licensed driver on a tour, yes. Avoid unlicensed street drivers."
      },
      {
        "q": "Is it comfortable in summer?",
        "a": "It is open, so heat is felt. Prefer mornings and evenings."
      },
      {
        "q": "Can I take a tuk-tuk from Delhi to Agra?",
        "a": "No, it is far too long. Tuk-tuks are for use in the city."
      },
      {
        "q": "Is it good for families?",
        "a": "Yes for short hops, but a car is easier for small children."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a tuk-tuk go to the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not right up to the gate. Motor vehicles are restricted nearby, so the last stretch is on foot or by battery vehicle."
              }
            },
            {
              "@type": "Question",
              "name": "Is a tuk-tuk safe?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "With a licensed driver on a tour, yes. Avoid unlicensed street drivers."
              }
            },
            {
              "@type": "Question",
              "name": "Is it comfortable in summer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is open, so heat is felt. Prefer mornings and evenings."
              }
            },
            {
              "@type": "Question",
              "name": "Can I take a tuk-tuk from Delhi to Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, it is far too long. Tuk-tuks are for use in the city."
              }
            },
            {
              "@type": "Question",
              "name": "Is it good for families?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes for short hops, but a car is easier for small children."
              }
            }
          ]
        }
      ]
    }
  },
  "best-bharatpur-bird-sanctuary-tour-from-agra": {
    "title": "Is the Bharatpur Bird Sanctuary Worth Visiting from Agra? The Best Tours",
    "seoTitle": "Bharatpur Bird Sanctuary Tour from Agra 2026",
    "description": "Keoladeo National Park and Chambal safari from Agra: when to go, how long it takes, and four real tours.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/a-day-tour-of-bharatpur-bird-sanctuary-from-agra/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "bird",
        "content": "Yes, if you like birds, and especially **late October to March**, when migratory species arrive. **Keoladeo National Park** at Bharatpur is a UNESCO site about 55 km from Agra, and you tour it by cycle rickshaw or on foot. The Chambal river sanctuary, about 70 km away, is a different outing: a river safari for gharials and dolphins. Both fit a day from Agra. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Bharatpur day tour from Agra",
        "icon": "bird",
        "content": "A full day at the sanctuary with a guide.",
        "tourCard": {
          "slug": "a-day-tour-of-bharatpur-bird-sanctuary-from-agra",
          "title": "A Day Tour of Bharatpur Bird Sanctuary from Agra.",
          "description": "Day tour of Bharatpur Bird Sanctuary from Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/a-day-tour-of-bharatpur-bird-sanctuary-from-agra/img0/1600.webp"
        }
      },
      {
        "title": "Taj Mahal, Fatehpur Sikri and bird safari",
        "icon": "landmark",
        "content": "Mixes monuments and birds in one long day.",
        "tourCard": {
          "slug": "from-agra-taj-mahal-fatehpur-sikri-bird-safari",
          "title": "From Agra: Taj Mahal, Fatehpur Sikri & Bird Safari Tour",
          "description": "Taj Mahal, Fatehpur Sikri and bird safari tour from Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-taj-mahal-fatehpur-sikri-bird-safari/img0/1600.webp"
        }
      },
      {
        "title": "Chambal river safari with lunch",
        "icon": "ship",
        "content": "A river safari day trip with lunch. Different from Bharatpur, good for wildlife.",
        "tourCard": {
          "slug": "from-agra-day-trip-to-chambal-river-safari-with",
          "title": "From Agra: Day Trip to Chambal River Safari with Lunch",
          "description": "Day trip to Chambal River safari with lunch from Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-day-trip-to-chambal-river-safari-with/img0/1600.webp"
        }
      },
      {
        "title": "Bharatpur with Fatehpur Sikri",
        "icon": "map",
        "content": "A same-day tour combining the sanctuary with Fatehpur Sikri.",
        "tourCard": {
          "slug": "agra-to-bharatpur-same-day-tour-with-fatehpur",
          "title": "Agra To Bharatpur Same Day Tour with Fatehpur Sikri",
          "description": "Agra to Bharatpur same day tour with Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-to-bharatpur-same-day-tour-with-fatehpur/img0/1600.webp"
        }
      },
      {
        "title": "When to go",
        "icon": "calendar",
        "content": "October to March is best for birds. Summer is hot and quiet. Mornings are the best time of day.\n\nSee our [best time to visit Agra](/india/agra/best-time-to-visit-agra)."
      }
    ],
    "faqs": [
      {
        "q": "How far is Bharatpur from Agra?",
        "a": "About 55 km, roughly an hour and a half by road."
      },
      {
        "q": "When is the best time?",
        "a": "Late October to March."
      },
      {
        "q": "How do you see the park?",
        "a": "By cycle rickshaw or on foot."
      },
      {
        "q": "Is Chambal the same?",
        "a": "No. Chambal is a river safari; Bharatpur is a wetland park."
      },
      {
        "q": "Can I do it on the way to Jaipur?",
        "a": "Yes, Bharatpur is roughly on the route."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How far is Bharatpur from Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 55 km, roughly an hour and a half by road."
              }
            },
            {
              "@type": "Question",
              "name": "When is the best time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Late October to March."
              }
            },
            {
              "@type": "Question",
              "name": "How do you see the park?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By cycle rickshaw or on foot."
              }
            },
            {
              "@type": "Question",
              "name": "Is Chambal the same?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Chambal is a river safari; Bharatpur is a wetland park."
              }
            },
            {
              "@type": "Question",
              "name": "Can I do it on the way to Jaipur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Bharatpur is roughly on the route."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-with-german-speaking-guide": {
    "title": "Is There a German-Speaking Guide for the Taj Mahal? The Best Tours",
    "seoTitle": "German-Speaking Taj Mahal Guide 2026: Tours",
    "description": "Taj Mahal and Agra tours with a German-speaking guide: real options from Delhi and in Agra, and what to confirm before booking.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-and-mausoleum-skip-the-line-guided/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "languages",
        "content": "Yes. Several Agra and Delhi tours list **German** among the guide languages, for the Taj Mahal and for full-day trips from Delhi. Tours in German are available mostly from Delhi and in Agra. German visitors often prefer a full, unhurried explanation of the history and architecture, which a private guide allows. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Skip-the-line Taj Mahal and mausoleum, guided",
        "icon": "landmark",
        "content": "A focused guided visit of about three hours.",
        "tourCard": {
          "slug": "agra-taj-mahal-and-mausoleum-skip-the-line-guided",
          "title": "Agra: Taj Mahal and Mausoleum Skip-the-Line Guided Tour",
          "description": "Taj Mahal and mausoleum skip-the-line guided tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-and-mausoleum-skip-the-line-guided/img0/1600.webp"
        }
      },
      {
        "title": "Private: Taj, Fort and Fatehpur Sikri",
        "icon": "car",
        "content": "A private full-day option with several guide languages.",
        "tourCard": {
          "slug": "private-guided-tour-taj-fort-fatehpur-sikri",
          "title": "Private Guided Tour: Taj, Fort & Fatehpur Sikri",
          "description": "Private guided tour: Taj, Fort and Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-guided-tour-taj-fort-fatehpur-sikri/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi by AC car with a 5-star lunch",
        "icon": "utensils",
        "content": "A full day from Delhi with lunch.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-day-trip-by-ac-car",
          "title": "From Delhi: Taj Mahal Day Trip by AC Car with 5-Star Lunch",
          "description": "Taj Mahal day trip by AC car with 5-star lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-day-trip-by-ac-car/img0/1600.webp"
        }
      },
      {
        "title": "Sunrise private city tour",
        "icon": "sun",
        "content": "All-inclusive private sunrise tour in Agra.",
        "tourCard": {
          "slug": "sunrise-taj-mahal-agra-private-city-tour-all",
          "title": "Sunrise Taj Mahal & Agra Private City Tour (All Inclusive)",
          "description": "Sunrise Taj Mahal and Agra private city tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/sunrise-taj-mahal-agra-private-city-tour-all/img0/1600.webp"
        }
      },
      {
        "title": "Before you book",
        "icon": "shield",
        "content": "- Confirm the **German** guide for your date on WhatsApp; availability can change by season.\n- Ask whether the guide is government-approved.\n- Book early for peak months, October to March.\n\nRead [how to hire a licensed guide in Agra](/india/agra/agra-tour-guide)."
      }
    ],
    "faqs": [
      {
        "q": "Can I get a German-speaking guide at the Taj Mahal?",
        "a": "Yes, several tours list it. Confirm for your date before you pay."
      },
      {
        "q": "Is it more expensive?",
        "a": "Prices are shown per tour; ask us if there is a difference for your date."
      },
      {
        "q": "Which tour is best for first-timers?",
        "a": "The skip-the-line guided Taj Mahal tour is the simplest. For a full day, go from Delhi."
      },
      {
        "q": "Are tickets included?",
        "a": "It varies per listing; ask before booking."
      },
      {
        "q": "What if the guide is not available?",
        "a": "Tell us and we will suggest a replacement date or option."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I get a German-speaking guide at the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, several tours list it. Confirm for your date before you pay."
              }
            },
            {
              "@type": "Question",
              "name": "Is it more expensive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Prices are shown per tour; ask us if there is a difference for your date."
              }
            },
            {
              "@type": "Question",
              "name": "Which tour is best for first-timers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The skip-the-line guided Taj Mahal tour is the simplest. For a full day, go from Delhi."
              }
            },
            {
              "@type": "Question",
              "name": "Are tickets included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies per listing; ask before booking."
              }
            },
            {
              "@type": "Question",
              "name": "What if the guide is not available?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tell us and we will suggest a replacement date or option."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-with-french-speaking-guide": {
    "title": "Is There a French-Speaking Guide for the Taj Mahal? The Best Tours",
    "seoTitle": "French-Speaking Taj Mahal Guide 2026: Tours",
    "description": "Taj Mahal and Agra tours with a French-speaking guide: real options from Delhi and in Agra, and what to confirm before booking.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-beyond-the-taj-hidden-stories-crafts-and/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "languages",
        "content": "Yes. Several Agra and Delhi tours list **French** among the guide languages, for the Taj Mahal and for full-day trips from Delhi. French-speaking guides are listed on a good number of our Agra tours. There is also a local-life tour in French and English that goes beyond the monuments. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Agra beyond the Taj, in French or English",
        "icon": "heart",
        "content": "Hidden stories, crafts and local life, led in French or English.",
        "tourCard": {
          "slug": "agra-beyond-the-taj-hidden-stories-crafts-and",
          "title": "Agra Beyond the Taj- Hidden Stories, Crafts and Local  Life",
          "description": "Agra Beyond the Taj: hidden stories, crafts and local life.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-beyond-the-taj-hidden-stories-crafts-and/img0/1600.webp"
        }
      },
      {
        "title": "Skip-the-line Taj Mahal and mausoleum, guided",
        "icon": "landmark",
        "content": "A focused guided visit of about three hours.",
        "tourCard": {
          "slug": "agra-taj-mahal-and-mausoleum-skip-the-line-guided",
          "title": "Agra: Taj Mahal and Mausoleum Skip-the-Line Guided Tour",
          "description": "Taj Mahal and mausoleum skip-the-line guided tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-and-mausoleum-skip-the-line-guided/img0/1600.webp"
        }
      },
      {
        "title": "Private: Taj, Fort and Fatehpur Sikri",
        "icon": "car",
        "content": "A private full-day option with several guide languages.",
        "tourCard": {
          "slug": "private-guided-tour-taj-fort-fatehpur-sikri",
          "title": "Private Guided Tour: Taj, Fort & Fatehpur Sikri",
          "description": "Private guided tour: Taj, Fort and Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-guided-tour-taj-fort-fatehpur-sikri/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi by AC car with a 5-star lunch",
        "icon": "utensils",
        "content": "A full day from Delhi with lunch.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-day-trip-by-ac-car",
          "title": "From Delhi: Taj Mahal Day Trip by AC Car with 5-Star Lunch",
          "description": "Taj Mahal day trip by AC car with 5-star lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-day-trip-by-ac-car/img0/1600.webp"
        }
      },
      {
        "title": "Before you book",
        "icon": "shield",
        "content": "- Confirm the **French** guide for your date on WhatsApp; availability can change by season.\n- Ask whether the guide is government-approved.\n- Book early for peak months, October to March.\n\nRead [how to hire a licensed guide in Agra](/india/agra/agra-tour-guide)."
      }
    ],
    "faqs": [
      {
        "q": "Can I get a French-speaking guide at the Taj Mahal?",
        "a": "Yes, several tours list it. Confirm for your date before you pay."
      },
      {
        "q": "Is it more expensive?",
        "a": "Prices are shown per tour; ask us if there is a difference for your date."
      },
      {
        "q": "Which tour is best for first-timers?",
        "a": "The skip-the-line guided Taj Mahal tour is the simplest. For a full day, go from Delhi."
      },
      {
        "q": "Are tickets included?",
        "a": "It varies per listing; ask before booking."
      },
      {
        "q": "What if the guide is not available?",
        "a": "Tell us and we will suggest a replacement date or option."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I get a French-speaking guide at the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, several tours list it. Confirm for your date before you pay."
              }
            },
            {
              "@type": "Question",
              "name": "Is it more expensive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Prices are shown per tour; ask us if there is a difference for your date."
              }
            },
            {
              "@type": "Question",
              "name": "Which tour is best for first-timers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The skip-the-line guided Taj Mahal tour is the simplest. For a full day, go from Delhi."
              }
            },
            {
              "@type": "Question",
              "name": "Are tickets included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies per listing; ask before booking."
              }
            },
            {
              "@type": "Question",
              "name": "What if the guide is not available?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tell us and we will suggest a replacement date or option."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-with-spanish-speaking-guide": {
    "title": "Is There a Spanish-Speaking Guide for the Taj Mahal? The Best Tours",
    "seoTitle": "Spanish-Speaking Taj Mahal Guide 2026: Tours",
    "description": "Taj Mahal and Agra tours with a Spanish-speaking guide: real options from Delhi and in Agra, and what to confirm before booking.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/private-guided-tour-taj-fort-fatehpur-sikri/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "languages",
        "content": "Yes. Several Agra and Delhi tours list **Spanish** among the guide languages, for the Taj Mahal and for full-day trips from Delhi. Check the listing for the days a Spanish guide is available. Spanish-language guides are listed on many tours, often alongside French and German. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Private: Taj, Fort and Fatehpur Sikri",
        "icon": "car",
        "content": "A private full-day option with several guide languages.",
        "tourCard": {
          "slug": "private-guided-tour-taj-fort-fatehpur-sikri",
          "title": "Private Guided Tour: Taj, Fort & Fatehpur Sikri",
          "description": "Private guided tour: Taj, Fort and Fatehpur Sikri.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-guided-tour-taj-fort-fatehpur-sikri/img0/1600.webp"
        }
      },
      {
        "title": "Skip-the-line Taj Mahal and mausoleum, guided",
        "icon": "landmark",
        "content": "A focused guided visit of about three hours.",
        "tourCard": {
          "slug": "agra-taj-mahal-and-mausoleum-skip-the-line-guided",
          "title": "Agra: Taj Mahal and Mausoleum Skip-the-Line Guided Tour",
          "description": "Taj Mahal and mausoleum skip-the-line guided tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-and-mausoleum-skip-the-line-guided/img0/1600.webp"
        }
      },
      {
        "title": "All-inclusive Agra highlights from Delhi",
        "icon": "map-pin",
        "content": "All-inclusive Taj and Agra day trip from Delhi.",
        "tourCard": {
          "slug": "all-inclusive-taj-mahal-agra-highlight-day-trip",
          "title": "All-Inclusive Taj Mahal & Agra Highlight Day Trip from Delhi",
          "description": "All-inclusive Taj Mahal and Agra highlight day trip.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/all-inclusive-taj-mahal-agra-highlight-day-trip/img0/1600.webp"
        }
      },
      {
        "title": "Express train from Delhi",
        "icon": "train-front",
        "content": "Delhi to the Taj by express train, with a guide.",
        "tourCard": {
          "slug": "delhi-taj-mahal-agra-by-express-train",
          "title": "Delhi: Taj Mahal & Agra by Express Train",
          "description": "Delhi: Taj Mahal and Agra by express train.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/delhi-taj-mahal-agra-by-express-train/img0/1600.webp"
        }
      },
      {
        "title": "Before you book",
        "icon": "shield",
        "content": "- Confirm the **Spanish** guide for your date on WhatsApp; availability can change by season.\n- Ask whether the guide is government-approved.\n- Book early for peak months, October to March.\n\nRead [how to hire a licensed guide in Agra](/india/agra/agra-tour-guide)."
      }
    ],
    "faqs": [
      {
        "q": "Can I get a Spanish-speaking guide at the Taj Mahal?",
        "a": "Yes, several tours list it. Confirm for your date before you pay."
      },
      {
        "q": "Is it more expensive?",
        "a": "Prices are shown per tour; ask us if there is a difference for your date."
      },
      {
        "q": "Which tour is best for first-timers?",
        "a": "The skip-the-line guided Taj Mahal tour is the simplest. For a full day, go from Delhi."
      },
      {
        "q": "Are tickets included?",
        "a": "It varies per listing; ask before booking."
      },
      {
        "q": "What if the guide is not available?",
        "a": "Tell us and we will suggest a replacement date or option."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I get a Spanish-speaking guide at the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, several tours list it. Confirm for your date before you pay."
              }
            },
            {
              "@type": "Question",
              "name": "Is it more expensive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Prices are shown per tour; ask us if there is a difference for your date."
              }
            },
            {
              "@type": "Question",
              "name": "Which tour is best for first-timers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The skip-the-line guided Taj Mahal tour is the simplest. For a full day, go from Delhi."
              }
            },
            {
              "@type": "Question",
              "name": "Are tickets included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies per listing; ask before booking."
              }
            },
            {
              "@type": "Question",
              "name": "What if the guide is not available?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tell us and we will suggest a replacement date or option."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-from-jaipur": {
    "title": "Can You Do the Taj Mahal as a Day Trip from Jaipur? The Best Tours",
    "seoTitle": "Best Taj Mahal Tour from Jaipur 2026: Day Trip?",
    "description": "Jaipur to the Taj Mahal and back is a very long day. What it really involves, when it works, and four real tours from Jaipur.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/full-day-agra-trip-from-jaipur-by-car-with/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "car",
        "content": "It can be done, but be honest with yourself: Jaipur to Agra is about **240 km, four to five hours each way**, so a same-day return is roughly **15 hours** with the Taj in the middle. It works for people who are short on days and fine with a very early start. If you can spare a night, it is much kinder. And if you are heading Jaipur to Delhi anyway, the best plan is to go **Jaipur to Agra to Delhi** and end the day there. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Full-day trip by car with a guide",
        "icon": "car",
        "content": "The standard Jaipur day trip. Leave early, expect a late return.",
        "tourCard": {
          "slug": "full-day-agra-trip-from-jaipur-by-car-with",
          "title": "Full day Agra trip from Jaipur by car with guide.",
          "description": "Full day Agra trip from Jaipur by car with a guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/full-day-agra-trip-from-jaipur-by-car-with/img0/1600.webp"
        }
      },
      {
        "title": "Taj Mahal, Agra Fort and Baby Taj by car",
        "icon": "landmark",
        "content": "A shorter, tighter sightseeing set, for those who want the three essentials only.",
        "tourCard": {
          "slug": "from-jaipur-taj-mahal-agra-fort-baby-taj-day",
          "title": "From Jaipur: Taj Mahal, Agra Fort, Baby Taj Day Trip by Car",
          "description": "Taj Mahal, Agra Fort and Baby Taj day trip by car from Jaipur.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-jaipur-taj-mahal-agra-fort-baby-taj-day/img0/1600.webp"
        }
      },
      {
        "title": "Private, with a 5-star lunch",
        "icon": "utensils",
        "content": "A private day with a proper lunch built in, which matters on a 12-hour day.",
        "tourCard": {
          "slug": "from-jaipur-private-taj-mahal-agra-day-trip-with",
          "title": "From Jaipur: Private Taj Mahal & Agra Day Trip with 5* Lunch",
          "description": "Private Taj Mahal and Agra day trip from Jaipur with 5-star lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-jaipur-private-taj-mahal-agra-day-trip-with/img0/1600.webp"
        }
      },
      {
        "title": "Day tour with an optional transfer",
        "icon": "route",
        "content": "Flexible: do the Taj, then continue to Delhi instead of coming back.",
        "tourCard": {
          "slug": "from-jaipurdelhiagra-taj-mahal-day-touroptional-tr",
          "title": "From Jaipur/Delhi/Agra: Taj Mahal Day Tour+Optional Transfer",
          "description": "Taj Mahal day tour from Jaipur, Delhi or Agra with optional transfer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-jaipurdelhiagra-taj-mahal-day-touroptional-tr/img0/1600.webp"
        }
      },
      {
        "title": "Day trip or one-way? A quick guide",
        "icon": "scale",
        "content": "- **Returning to Jaipur the same night:** pick the full-day car tour and leave by 5 am.\n- **Going on to Delhi:** use the optional transfer and end in Delhi.\n- **Have a spare day:** see [Agra to Jaipur](/india/agra/agra-to-jaipur) and plan Fatehpur Sikri on the way.\n\nThe Taj is closed on Fridays. See [Taj Mahal opening times](/india/agra/taj-mahal-opening-time)."
      }
    ],
    "faqs": [
      {
        "q": "How far is Agra from Jaipur?",
        "a": "About 240 km, four to five hours by road each way."
      },
      {
        "q": "Is a same-day Jaipur to Taj Mahal trip too much?",
        "a": "It is long, around 15 hours in all. It works if you accept an early start and a late return, or if you end the day in Delhi."
      },
      {
        "q": "Can I stop at Fatehpur Sikri on the way?",
        "a": "Yes. It is on the road between Agra and Jaipur."
      },
      {
        "q": "Which day should I avoid?",
        "a": "Friday, as the Taj Mahal is closed to regular visitors."
      },
      {
        "q": "Can I be dropped in Delhi after the Taj?",
        "a": "Yes, with the optional transfer on the day-tour listing. Check the tour page for details."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How far is Agra from Jaipur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 240 km, four to five hours by road each way."
              }
            },
            {
              "@type": "Question",
              "name": "Is a same-day Jaipur to Taj Mahal trip too much?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is long, around 15 hours in all. It works if you accept an early start and a late return, or if you end the day in Delhi."
              }
            },
            {
              "@type": "Question",
              "name": "Can I stop at Fatehpur Sikri on the way?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. It is on the road between Agra and Jaipur."
              }
            },
            {
              "@type": "Question",
              "name": "Which day should I avoid?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Friday, as the Taj Mahal is closed to regular visitors."
              }
            },
            {
              "@type": "Question",
              "name": "Can I be dropped in Delhi after the Taj?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, with the optional transfer on the day-tour listing. Check the tour page for details."
              }
            }
          ]
        }
      ]
    }
  },
  "best-golden-triangle-tour-3-days": {
    "title": "Is 3 Days Enough for the Golden Triangle? The Best 3-Day Tours from Delhi",
    "seoTitle": "Best 3-Day Golden Triangle Tour from Delhi 2026",
    "description": "Delhi, Agra and Jaipur in three days: whether it is enough, what you will skip, and four real 3-day Golden Triangle tours.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-express-evening-tour/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "route",
        "content": "Three days is enough to **see the headline sights**, not to enjoy them. The loop is roughly 750 km, and Delhi to Agra to Jaipur to Delhi involves about 13 hours of driving across the three days. If you only have three days, a private car with a driver-guide keeps it painless. If you have four or five, take them. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "3 days, 2 nights with hotel, express format",
        "icon": "clock",
        "content": "A tight, well-organised version with hotels included.",
        "tourCard": {
          "slug": "agra-express-evening-tour",
          "title": "Golden Triangle 3 Days / 2 Nights Express Tour With Hotel",
          "description": "Golden Triangle 3 days, 2 nights express tour with hotel.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-express-evening-tour/img0/1600.webp"
        }
      },
      {
        "title": "3 days with a private car and guide",
        "icon": "car",
        "content": "The private-car version for those who want their own pace.",
        "tourCard": {
          "slug": "golden-triangle-tour-3-days-2-nights-with-private",
          "title": "Golden Triangle Tour 3 Days 2 Nights with Private Car &Guide",
          "description": "Golden Triangle 3 days, 2 nights with private car and guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/golden-triangle-tour-3-days-2-nights-with-private/img0/1600.webp"
        }
      },
      {
        "title": "Delhi, Agra and Jaipur with options",
        "icon": "settings-2",
        "content": "A 3-day tour with options, so you can adjust the stops.",
        "tourCard": {
          "slug": "3-days-delhi-agra-jaipur-tour-with-options",
          "title": "3 Days Delhi, Agra & Jaipur Tour with Options",
          "description": "3 days Delhi, Agra and Jaipur tour with options.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/3-days-delhi-agra-jaipur-tour-with-options/img0/1600.webp"
        }
      },
      {
        "title": "Agra, Fatehpur Sikri and Jaipur",
        "icon": "landmark",
        "content": "Adds Fatehpur Sikri on the Agra to Jaipur leg, which is the best stop on the route.",
        "tourCard": {
          "slug": "from-delhi-3-day-trip-to-agra-fatehpur-sikri",
          "title": "From Delhi: 3-Day Trip to Agra, Fatehpur Sikri and Jaipur",
          "description": "3-day trip to Agra, Fatehpur Sikri and Jaipur from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-3-day-trip-to-agra-fatehpur-sikri/img0/1600.webp"
        }
      },
      {
        "title": "What three days costs you",
        "icon": "info",
        "content": "- You will have **one full day per city at most**.\n- Old Delhi and the Delhi museums are the usual sacrifice.\n- You will spend a lot of time in the car; keep one rest stop for lunch.\n\nSee [Golden Triangle tour India](/india/agra/golden-triangle-tour-india), [Delhi to Agra](/india/agra/delhi-to-agra) and [Agra to Jaipur](/india/agra/agra-to-jaipur). The best season is October to March."
      }
    ],
    "faqs": [
      {
        "q": "How many days do you need for the Golden Triangle?",
        "a": "Four to five days is comfortable. Three is possible if you accept a fast pace."
      },
      {
        "q": "How far is the Golden Triangle loop?",
        "a": "Around 750 km in total."
      },
      {
        "q": "Is it better by car or train?",
        "a": "Private car for flexibility; train between Delhi and Agra saves time, but the Agra to Jaipur leg is better by road."
      },
      {
        "q": "When should I go?",
        "a": "October to March. April to June is very hot."
      },
      {
        "q": "Are hotels included?",
        "a": "Depends on the tour. The tour page says; ask us on WhatsApp if unclear."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How many days do you need for the Golden Triangle?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Four to five days is comfortable. Three is possible if you accept a fast pace."
              }
            },
            {
              "@type": "Question",
              "name": "How far is the Golden Triangle loop?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Around 750 km in total."
              }
            },
            {
              "@type": "Question",
              "name": "Is it better by car or train?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Private car for flexibility; train between Delhi and Agra saves time, but the Agra to Jaipur leg is better by road."
              }
            },
            {
              "@type": "Question",
              "name": "When should I go?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "October to March. April to June is very hot."
              }
            },
            {
              "@type": "Question",
              "name": "Are hotels included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depends on the tour. The tour page says; ask us on WhatsApp if unclear."
              }
            }
          ]
        }
      ]
    }
  },
  "best-luxury-golden-triangle-tour": {
    "title": "What Is the Best Luxury Golden Triangle Tour? 4 Private Options",
    "seoTitle": "Best Luxury Golden Triangle Tour India 2026",
    "description": "Private, luxury Golden Triangle tours from Delhi: what luxury actually means on this route, and four real tours from 4 to 6 days.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/indias-private-luxury-golden-triangle-tour-4-day/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "star",
        "content": "On the Golden Triangle, luxury means three things: **a private car and driver-guide** for the whole trip, **good hotels** that are well placed for the monuments, and **no rushed days**. The best luxury tours are not the longest; they are the ones that give you four or five days instead of three. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "4 days, private, luxury",
        "icon": "star",
        "content": "A four-day private luxury loop from Delhi.",
        "tourCard": {
          "slug": "indias-private-luxury-golden-triangle-tour-4-day",
          "title": "India’s Private Luxury Golden Triangle Tour 4 Day from Delhi",
          "description": "India's private luxury Golden Triangle tour, 4 days from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/indias-private-luxury-golden-triangle-tour-4-day/img0/1600.webp"
        }
      },
      {
        "title": "3 nights, 4 days, exclusive",
        "icon": "crown",
        "content": "An exclusive-format four-day version.",
        "tourCard": {
          "slug": "exclusive-golden-triangle-tour-03-nights-04-days",
          "title": "Exclusive, Golden Triangle Tour (03 Nights / 04 Days)",
          "description": "Exclusive Golden Triangle tour, 3 nights and 4 days.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/exclusive-golden-triangle-tour-03-nights-04-days/img0/1600.webp"
        }
      },
      {
        "title": "5 days, private luxury",
        "icon": "sparkles",
        "content": "A relaxed five days, with time at each city.",
        "tourCard": {
          "slug": "5-days-private-luxury-golden-triangle-tour-agra",
          "title": "5-Days Private Luxury Golden Triangle Tour Agra Jaipur Delhi",
          "description": "5-day private luxury Golden Triangle tour: Agra, Jaipur, Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/5-days-private-luxury-golden-triangle-tour-agra/img0/1600.webp"
        }
      },
      {
        "title": "6 days with a private guide",
        "icon": "user",
        "content": "The longest of the four, for those who want to add extras.",
        "tourCard": {
          "slug": "india-luxury-golden-triangle-tour-with-private",
          "title": "India: Luxury Golden Triangle Tour with Private Guide",
          "description": "Luxury Golden Triangle tour with private guide, 6 days.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/india-luxury-golden-triangle-tour-with-private/img0/1600.webp"
        }
      },
      {
        "title": "What to check before booking luxury",
        "icon": "shield",
        "content": "- Which **hotels**, by name, and in which part of each city.\n- Whether the **guide stays with you** or changes city by city.\n- What the **car** is, and how many hours a day you will be driving.\n\nMore: [Golden Triangle tour India](/india/agra/golden-triangle-tour-india)."
      }
    ],
    "faqs": [
      {
        "q": "How many days is a luxury Golden Triangle tour?",
        "a": "Typically four to six days."
      },
      {
        "q": "Is a private driver included?",
        "a": "Yes on these private tours; the tour page confirms."
      },
      {
        "q": "Can I choose the hotels?",
        "a": "Ask us on WhatsApp; some tours allow upgrades."
      },
      {
        "q": "When is the best season?",
        "a": "October to March."
      },
      {
        "q": "Can I add Ranthambore?",
        "a": "Yes; see our Golden Triangle with Ranthambore page."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How many days is a luxury Golden Triangle tour?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically four to six days."
              }
            },
            {
              "@type": "Question",
              "name": "Is a private driver included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes on these private tours; the tour page confirms."
              }
            },
            {
              "@type": "Question",
              "name": "Can I choose the hotels?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask us on WhatsApp; some tours allow upgrades."
              }
            },
            {
              "@type": "Question",
              "name": "When is the best season?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "October to March."
              }
            },
            {
              "@type": "Question",
              "name": "Can I add Ranthambore?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes; see our Golden Triangle with Ranthambore page."
              }
            }
          ]
        }
      ]
    }
  },
  "best-golden-triangle-tour-with-ranthambore-tiger-safari": {
    "title": "Can You Add a Tiger Safari to the Golden Triangle? The Best Tours with Ranthambore",
    "seoTitle": "Golden Triangle + Ranthambore Tiger Safari Tours 2026",
    "description": "Adding Ranthambore to Delhi, Agra and Jaipur: how many days it needs, what to expect from a safari, and four real tours.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-golden-triangle-with-ranthambore-5-day/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "trees",
        "content": "Yes, and it fits naturally: **Ranthambore is about 180 km from Jaipur**, so it adds roughly two days to the loop. A safari is never a guarantee of seeing a tiger, but Ranthambore is one of the better places in India to try. The park is closed during the monsoon, roughly July to September, so this is an October to June addition. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "5 days, Golden Triangle with Ranthambore",
        "icon": "trees",
        "content": "The classic five-day version.",
        "tourCard": {
          "slug": "from-delhi-golden-triangle-with-ranthambore-5-day",
          "title": "From Delhi: Golden Triangle with Ranthambore 5-Day Tour",
          "description": "Golden Triangle with Ranthambore, 5-day tour from Delhi.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-golden-triangle-with-ranthambore-5-day/img0/1600.webp"
        }
      },
      {
        "title": "5-day tiger safari, Delhi, Agra, Jaipur",
        "icon": "map",
        "content": "A guided five-day tour built around the safari.",
        "tourCard": {
          "slug": "from-delhi-5-day-tiger-safari-delhi-agra-jaipur",
          "title": "From Delhi: 5-Day Tiger Safari Delhi Agra Jaipur guided tour",
          "description": "5-day tiger safari Delhi, Agra and Jaipur guided tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-5-day-tiger-safari-delhi-agra-jaipur/img0/1600.webp"
        }
      },
      {
        "title": "Agra, Ranthambore, Jaipur and Delhi, multi-day",
        "icon": "route",
        "content": "A flexible multi-day route starting from Agra.",
        "tourCard": {
          "slug": "agra-ranthambore-jaipur-delhi-multi-day-tour",
          "title": "Agra: Ranthambore, Jaipur & Delhi Multi-Day Tour",
          "description": "Agra, Ranthambore, Jaipur and Delhi multi-day tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-ranthambore-jaipur-delhi-multi-day-tour/img0/1600.webp"
        }
      },
      {
        "title": "From Agra, 2 days and 1 night",
        "icon": "moon",
        "content": "A short add-on if you only want the safari.",
        "tourCard": {
          "slug": "from-agra-2-days-1-night-ranthambore-tiger-safari",
          "title": "From Agra: 2 Days 1 Night Ranthambore Tiger Safari Tour",
          "description": "From Agra: 2 days 1 night Ranthambore tiger safari.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-2-days-1-night-ranthambore-tiger-safari/img0/1600.webp"
        }
      },
      {
        "title": "What to expect from a safari",
        "icon": "info",
        "content": "- You go out in a **jeep or canter** in the morning or afternoon.\n- Sightings are possible but never guaranteed; the more safaris you do, the better the odds.\n- Dress in neutral colours and carry layers; early mornings are cold in winter.\n\nSee our [Ranthambore from Agra guide](/india/agra/best-ranthambore-tiger-safari-from-agra) and [Golden Triangle tour](/india/agra/golden-triangle-tour-india)."
      }
    ],
    "faqs": [
      {
        "q": "How many days does Ranthambore add?",
        "a": "About two days to the Golden Triangle."
      },
      {
        "q": "Will I see a tiger?",
        "a": "Possibly; it is never guaranteed. Doing more than one safari improves the odds."
      },
      {
        "q": "When is the park closed?",
        "a": "During the monsoon, roughly July to September."
      },
      {
        "q": "Jeep or canter?",
        "a": "A jeep is smaller and more flexible; a canter is a larger shared vehicle."
      },
      {
        "q": "Can I go from Agra?",
        "a": "Yes, there are 2-day tours from Agra."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How many days does Ranthambore add?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About two days to the Golden Triangle."
              }
            },
            {
              "@type": "Question",
              "name": "Will I see a tiger?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possibly; it is never guaranteed. Doing more than one safari improves the odds."
              }
            },
            {
              "@type": "Question",
              "name": "When is the park closed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "During the monsoon, roughly July to September."
              }
            },
            {
              "@type": "Question",
              "name": "Jeep or canter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A jeep is smaller and more flexible; a canter is a larger shared vehicle."
              }
            },
            {
              "@type": "Question",
              "name": "Can I go from Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, there are 2-day tours from Agra."
              }
            }
          ]
        }
      ]
    }
  },
  "best-ranthambore-tiger-safari-from-agra": {
    "title": "How Do You Get to Ranthambore from Agra? The Best Tiger Safari Tours",
    "seoTitle": "Ranthambore Tiger Safari from Agra 2026: Best Tours",
    "description": "Getting to Ranthambore from Agra, how many days you need, and four real tours and transfers.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-2-days-1-night-ranthambore-tiger-safari/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "trees",
        "content": "Ranthambore is about **five hours by road** from Agra, so the easiest plan is **two days and one night**: drive out, do an afternoon safari, a second safari at dawn, then continue to Jaipur or back. Trains stop at nearby Sawai Madhopur, but the last stretch is best arranged with a driver. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "2 days, 1 night from Agra",
        "icon": "moon",
        "content": "The straightforward version.",
        "tourCard": {
          "slug": "from-agra-2-days-1-night-ranthambore-tiger-safari",
          "title": "From Agra: 2 Days 1 Night Ranthambore Tiger Safari Tour",
          "description": "From Agra: 2 days 1 night Ranthambore tiger safari.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-2-days-1-night-ranthambore-tiger-safari/img0/1600.webp"
        }
      },
      {
        "title": "Safari only, by jeep or canter",
        "icon": "trees",
        "content": "For those who already have transport to the park.",
        "tourCard": {
          "slug": "ranthambore-national-park-tiger-safari-by-jeep-or",
          "title": "Ranthambore National Park: Tiger Safari by Jeep or Canter",
          "description": "Ranthambore National Park tiger safari by jeep or canter.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/ranthambore-national-park-tiger-safari-by-jeep-or/img0/1600.webp"
        }
      },
      {
        "title": "3 days: Agra, Ranthambore and Sariska",
        "icon": "map",
        "content": "A longer tour with a second tiger reserve.",
        "tourCard": {
          "slug": "3-day-adventure-discover-agra-ranthambore-sariska",
          "title": "3-Day Adventure: Discover Agra, Ranthambore & Sariska",
          "description": "3-day adventure: Agra, Ranthambore and Sariska.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/3-day-adventure-discover-agra-ranthambore-sariska/img0/1600.webp"
        }
      },
      {
        "title": "One-way transfer to Ranthambore",
        "icon": "car",
        "content": "A one-way car transfer between Jaipur, Agra, Delhi and Ranthambore.",
        "tourCard": {
          "slug": "jaipuragradelhi-tofrom-ranthambore-one-way",
          "title": "Jaipur/Agra/Delhi To/From Ranthambore One Way Transfer",
          "description": "Jaipur, Agra or Delhi to and from Ranthambore one-way transfer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/jaipuragradelhi-tofrom-ranthambore-one-way/img0/1600.webp"
        }
      },
      {
        "title": "Planning notes",
        "icon": "info",
        "content": "- The park closes for the monsoon, roughly July to September.\n- Book safari zones early in peak months.\n- Combine with the [Golden Triangle](/india/agra/best-golden-triangle-tour-with-ranthambore-tiger-safari)."
      }
    ],
    "faqs": [
      {
        "q": "How far is Ranthambore from Agra?",
        "a": "About 250 km, roughly five hours by road."
      },
      {
        "q": "Can I go by train?",
        "a": "Trains reach Sawai Madhopur nearby, but a car makes the last stretch easier."
      },
      {
        "q": "How many safaris should I do?",
        "a": "At least two; sightings are never guaranteed."
      },
      {
        "q": "When is it closed?",
        "a": "During the monsoon, roughly July to September."
      },
      {
        "q": "Can I continue to Jaipur?",
        "a": "Yes; Jaipur is about 180 km from the park."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How far is Ranthambore from Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 250 km, roughly five hours by road."
              }
            },
            {
              "@type": "Question",
              "name": "Can I go by train?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trains reach Sawai Madhopur nearby, but a car makes the last stretch easier."
              }
            },
            {
              "@type": "Question",
              "name": "How many safaris should I do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At least two; sightings are never guaranteed."
              }
            },
            {
              "@type": "Question",
              "name": "When is it closed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "During the monsoon, roughly July to September."
              }
            },
            {
              "@type": "Question",
              "name": "Can I continue to Jaipur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes; Jaipur is about 180 km from the park."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-instagram-photoshoot-tour": {
    "title": "Can You Get a Professional Photoshoot at the Taj Mahal? The Best Instagram Tours",
    "seoTitle": "Taj Mahal Instagram Photoshoot Tour 2026",
    "description": "Taj Mahal tours that include a photographer: what you get, when to go, and five real options from Agra and Delhi.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-guided-tour-with-cinematic/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "camera",
        "content": "Yes. Several tours pair a guide with a **professional photographer** who knows the angles, the light and the rules inside the complex. Go at **sunrise** for the fewest people. The famous bench in front of the Taj, the central pond and the archway frame are the classic shots, and a photographer will know when each is quiet. Drones are not allowed. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Cinematic Instagram shoot with a guided tour",
        "icon": "camera",
        "content": "A three-hour guided tour with a cinematic photo shoot.",
        "tourCard": {
          "slug": "agra-taj-mahal-guided-tour-with-cinematic",
          "title": "Agra: Taj Mahal Guided Tour with Cinematic Instagram Shoot",
          "description": "Taj Mahal guided tour with a cinematic Instagram shoot.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-guided-tour-with-cinematic/img0/1600.webp"
        }
      },
      {
        "title": "Guided tour with an Instagram photoshoot",
        "icon": "camera",
        "content": "A four-hour tour with the shoot included.",
        "tourCard": {
          "slug": "agra-taj-mahal-guided-tour-with-instagram",
          "title": "Agra: Taj Mahal Guided Tour with Instagram Photoshoot",
          "description": "Taj Mahal guided tour with an Instagram photoshoot.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-guided-tour-with-instagram/img0/1600.webp"
        }
      },
      {
        "title": "Expert photographer, Instagram focus",
        "icon": "sparkles",
        "content": "Led by a photographer, built around the shots.",
        "tourCard": {
          "slug": "taj-mahal-instagram-photography-tour-w-expert-phot",
          "title": "Taj Mahal Instagram Photography Tour w/ Expert Photographer",
          "description": "Taj Mahal Instagram photography tour with an expert photographer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-instagram-photography-tour-w-expert-phot/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi at sunrise with a photographer",
        "icon": "sun",
        "content": "If you are staying in Delhi, this goes at sunrise.",
        "tourCard": {
          "slug": "delhi-taj-mahal-sunrise-tour-with-professional",
          "title": "Delhi: Taj Mahal Sunrise Tour With Professional Photographer",
          "description": "Delhi: Taj Mahal sunrise tour with a professional photographer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/delhi-taj-mahal-sunrise-tour-with-professional/img0/1600.webp"
        }
      },
      {
        "title": "Sunrise photoshoot experience",
        "icon": "sun",
        "content": "A sunrise shoot in Agra.",
        "tourCard": {
          "slug": "agra-professional-sunrise-tour",
          "title": "Agra: Taj Mahal Sunrise Photoshoot Tour Experience with Professional Photographer",
          "description": "Agra: Taj Mahal sunrise photoshoot tour experience.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-professional-sunrise-tour/img0/1600.webp"
        }
      },
      {
        "title": "Tips before you go",
        "icon": "info",
        "content": "- Wear light, plain colours; white and pastels can wash out in the marble glare.\n- Ask how many edited photos you receive and in how long.\n- Rules on equipment change; a local photographer knows the current ones.\n\nMore: [best Taj Mahal photography tour](/india/agra/best-taj-mahal-photography-tour) and [sunrise tours](/india/agra/best-taj-mahal-sunrise-tour)."
      }
    ],
    "faqs": [
      {
        "q": "Can I bring a drone to the Taj Mahal?",
        "a": "No, drones are not allowed."
      },
      {
        "q": "What is the best time for photos?",
        "a": "Sunrise, for soft light and fewer people."
      },
      {
        "q": "How many photos do I get?",
        "a": "It varies per tour; ask before booking."
      },
      {
        "q": "What should I wear?",
        "a": "Plain light or pastel colours work well; avoid very busy patterns."
      },
      {
        "q": "Is it good for couples?",
        "a": "Yes; many couples book these for portraits."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can I bring a drone to the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, drones are not allowed."
              }
            },
            {
              "@type": "Question",
              "name": "What is the best time for photos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sunrise, for soft light and fewer people."
              }
            },
            {
              "@type": "Question",
              "name": "How many photos do I get?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies per tour; ask before booking."
              }
            },
            {
              "@type": "Question",
              "name": "What should I wear?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plain light or pastel colours work well; avoid very busy patterns."
              }
            },
            {
              "@type": "Question",
              "name": "Is it good for couples?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes; many couples book these for portraits."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-with-lunch": {
    "title": "Which Taj Mahal Tours Include Lunch? The Best Ones with a Proper Meal",
    "seoTitle": "Best Taj Mahal Tours with Lunch Included 2026",
    "description": "Taj Mahal tours that include a sit-down lunch, why it matters on a long day, and four real options from Delhi and Agra.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-skip-the-line-tour/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "utensils",
        "content": "On a 10 to 12 hour Taj day, lunch decides whether the afternoon is enjoyable. The best tours **include a sit-down meal**, often a buffet at a good Agra hotel, rather than a roadside stop. Check whether it is a set menu, whether it is vegetarian-friendly, and whether drinks are included. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Skip-the-line Taj and Fort with lunch",
        "icon": "utensils",
        "content": "A guided Taj and Agra Fort day, with lunch included.",
        "tourCard": {
          "slug": "agra-taj-mahal-agra-fort-skip-the-line-tour",
          "title": "Agra: Taj Mahal & Agra Fort Skip-the-Line Tour with Lunch",
          "description": "Taj Mahal and Agra Fort skip-the-line tour with lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-skip-the-line-tour/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi, 5-star Marriott lunch",
        "icon": "star",
        "content": "A day from Delhi with a hotel lunch.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-agra-tour-with-5-star",
          "title": "From Delhi: Taj Mahal & Agra Tour with 5-Star Marriott Lunch",
          "description": "Taj Mahal and Agra tour with a 5-star Marriott lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-agra-tour-with-5-star/img0/1600.webp"
        }
      },
      {
        "title": "From Delhi, all inclusive with lunch",
        "icon": "car",
        "content": "All-inclusive, lunch included.",
        "tourCard": {
          "slug": "from-delhi-all-inclusive-same-day-taj-mahal-tour",
          "title": "From Delhi: All Inclusive Same Day Taj Mahal Tour with lunch",
          "description": "All-inclusive same-day Taj Mahal tour with lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-all-inclusive-same-day-taj-mahal-tour/img0/1600.webp"
        }
      },
      {
        "title": "Skip the line, all inclusive, 5-star lunch",
        "icon": "crown",
        "content": "A simple all-inclusive Agra option.",
        "tourCard": {
          "slug": "taj-mahal-tour-skip-the-line-all-inclusive-with",
          "title": "Taj Mahal Tour - Skip the Line All Inclusive with 5* Lunch",
          "description": "Taj Mahal tour, skip the line, all inclusive with 5-star lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-tour-skip-the-line-all-inclusive-with/img0/1600.webp"
        }
      },
      {
        "title": "Questions to ask",
        "icon": "list-checks",
        "content": "- Is the lunch **vegetarian**, non-vegetarian or both?\n- Is it a **buffet** or a set menu?\n- Are drinks included?\n- Can the guide adjust the time if you are tired?\n\nSee [best full-day Agra tour](/india/agra/best-full-day-agra-tour)."
      }
    ],
    "faqs": [
      {
        "q": "Is lunch included in most Taj tours?",
        "a": "No; it varies by listing. These four include it."
      },
      {
        "q": "Are vegetarian meals available?",
        "a": "Yes in most cases; tell us in advance."
      },
      {
        "q": "Which hotel is the lunch at?",
        "a": "It depends on the tour; the page or WhatsApp will tell you."
      },
      {
        "q": "Is bottled water included?",
        "a": "Often yes, but check the listing."
      },
      {
        "q": "Can I request a different restaurant?",
        "a": "Sometimes; ask before booking."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is lunch included in most Taj tours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No; it varies by listing. These four include it."
              }
            },
            {
              "@type": "Question",
              "name": "Are vegetarian meals available?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes in most cases; tell us in advance."
              }
            },
            {
              "@type": "Question",
              "name": "Which hotel is the lunch at?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on the tour; the page or WhatsApp will tell you."
              }
            },
            {
              "@type": "Question",
              "name": "Is bottled water included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Often yes, but check the listing."
              }
            },
            {
              "@type": "Question",
              "name": "Can I request a different restaurant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sometimes; ask before booking."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-with-hotel-pickup": {
    "title": "Can I Get Picked Up from My Hotel in Agra for the Taj Mahal? The Best Tours",
    "seoTitle": "Taj Mahal Tour with Hotel Pickup and Drop 2026",
    "description": "Taj Mahal tours with hotel pickup and drop in Agra: why it matters, and four real options with a guide.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-vip-tickets-with-complimentary-guide-pic/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "car",
        "content": "Yes. Pickup and drop at your Agra hotel matters more than it sounds: petrol and diesel vehicles cannot go right up to the Taj, parking is far from the gates, and a driver who knows the drop-off point saves you a hot walk. Check that the **pickup time suits the slot** you want. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Taj Mahal VIP tickets with guide and pickup",
        "icon": "ticket",
        "content": "A short, simple visit with guide and transport.",
        "tourCard": {
          "slug": "taj-mahal-vip-tickets-with-complimentary-guide-pic",
          "title": "Taj Mahal VIP Tickets with Complimentary Guide & Pickup-Drop",
          "description": "Taj Mahal VIP tickets with a complimentary guide and pickup-drop.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-vip-tickets-with-complimentary-guide-pic/img0/1600.webp"
        }
      },
      {
        "title": "Sunset or morning view, with hotel pickup",
        "icon": "sun",
        "content": "Choose a morning or sunset visit.",
        "tourCard": {
          "slug": "taj-mahal-sunset-view-or-morning-view-tour-with",
          "title": "Taj Mahal Sunset View or Morning View Tour with Hotel Pickup",
          "description": "Taj Mahal sunset or morning tour with hotel pickup.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-sunset-view-or-morning-view-tour-with/img0/1600.webp"
        }
      },
      {
        "title": "Private 5-hour sightseeing with pickup",
        "icon": "user",
        "content": "A private half day around Agra.",
        "tourCard": {
          "slug": "agra-private-5-hour-sightseeing-tour-with-hotel",
          "title": "Agra: Private 5-Hour Sightseeing Tour with Hotel Pickup",
          "description": "Agra: private 5-hour sightseeing tour with hotel pickup.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-private-5-hour-sightseeing-tour-with-hotel/img0/1600.webp"
        }
      },
      {
        "title": "Skip the line, Taj and Fort with pickup",
        "icon": "zap",
        "content": "The Taj and Agra Fort with pickup, skip the line.",
        "tourCard": {
          "slug": "taj-mahal-pick-guided-tour",
          "title": "Agra: Skip-the-line Taj Mahal & Agra Fort Tour with Pick-Up",
          "description": "Skip-the-line Taj Mahal and Agra Fort tour with pickup.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-pick-guided-tour/img0/1600.webp"
        }
      },
      {
        "title": "Practical notes",
        "icon": "info",
        "content": "- Tell the operator your **hotel name and area**.\n- Confirm the pickup time the evening before.\n- If you stay far from the centre, add buffer time.\n\nSee [best hotel near Taj Mahal](/india/agra/best-hotel-near-taj-mahal)."
      }
    ],
    "faqs": [
      {
        "q": "Is hotel pickup free?",
        "a": "Included on these listings; the tour page confirms."
      },
      {
        "q": "Can I be picked up from the station?",
        "a": "Often yes; message us with your train details."
      },
      {
        "q": "What if my hotel is outside the city?",
        "a": "Tell us in advance so the time is adjusted."
      },
      {
        "q": "Is drop-off at the hotel included?",
        "a": "Yes on these listings."
      },
      {
        "q": "How early is the first pickup?",
        "a": "It depends on the slot; sunrise pickups are early."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is hotel pickup free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Included on these listings; the tour page confirms."
              }
            },
            {
              "@type": "Question",
              "name": "Can I be picked up from the station?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Often yes; message us with your train details."
              }
            },
            {
              "@type": "Question",
              "name": "What if my hotel is outside the city?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tell us in advance so the time is adjusted."
              }
            },
            {
              "@type": "Question",
              "name": "Is drop-off at the hotel included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes on these listings."
              }
            },
            {
              "@type": "Question",
              "name": "How early is the first pickup?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on the slot; sunrise pickups are early."
              }
            }
          ]
        }
      ]
    }
  },
  "is-a-group-tour-to-the-taj-mahal-worth-it": {
    "title": "Is a Group Tour to the Taj Mahal Worth It? When Shared Beats Private",
    "seoTitle": "Taj Mahal Group Tour from Delhi: Worth It? 2026",
    "description": "Shared group tours to the Taj Mahal: what you gain, what you lose, and three real group and small-group options from Delhi.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-agra-fort-shared-group-tour/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "users",
        "content": "A group tour is worth it if **price matters more than pace**. You share a vehicle and a guide, so it usually costs less per person, and the schedule is fixed. The trade-off is that you move with the group at the Taj, the busiest building in India, and you cannot linger or skip anything. If you are travelling alone and on a tight budget, group is a sensible choice. If you want photographs or have mobility needs, go private. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Shared group tour from Delhi, Taj and Agra Fort",
        "icon": "users",
        "content": "The standard shared day trip.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-agra-fort-shared-group-tour",
          "title": "From Delhi: Taj Mahal & Agra Fort Shared Group Tour",
          "description": "From Delhi: Taj Mahal and Agra Fort shared group tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-agra-fort-shared-group-tour/img0/1600.webp"
        }
      },
      {
        "title": "Same-day group tour with transfers",
        "icon": "car",
        "content": "A group tour with transfers from your Delhi hotel.",
        "tourCard": {
          "slug": "from-delhi-same-day-group-tour-to-taj-mahal",
          "title": "From Delhi: Same Day Group Tour to Taj Mahal with Transfers",
          "description": "From Delhi: same day group tour to the Taj Mahal with transfers.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-same-day-group-tour-to-taj-mahal/img0/1600.webp"
        }
      },
      {
        "title": "Step up: group tour with a hotel lunch",
        "icon": "utensils",
        "content": "A fuller day, including a hotel lunch.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-agra-tour-with-5-star",
          "title": "From Delhi: Taj Mahal & Agra Tour with 5-Star Marriott Lunch",
          "description": "Taj Mahal and Agra tour with a 5-star Marriott lunch.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-agra-tour-with-5-star/img0/1600.webp"
        }
      },
      {
        "title": "Group or private? Quick rules",
        "icon": "scale",
        "content": "- **Solo, budget, flexible:** group is fine.\n- **Couples or families:** private is worth the difference.\n- **Photography or sunrise:** go private; see [best private Taj tour](/india/agra/best-private-taj-mahal-tour).\n- **Older travellers:** private, so the pace can slow."
      }
    ],
    "faqs": [
      {
        "q": "How big are the groups?",
        "a": "It varies per tour; ask before you book."
      },
      {
        "q": "Is a group tour cheaper than private?",
        "a": "Usually per person, yes."
      },
      {
        "q": "Do group tours include entry tickets?",
        "a": "It varies; the tour page says."
      },
      {
        "q": "Can I leave the group?",
        "a": "Generally no; the schedule is fixed."
      },
      {
        "q": "Is it safe for solo travellers?",
        "a": "Yes, and it is a good way to meet people."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How big are the groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies per tour; ask before you book."
              }
            },
            {
              "@type": "Question",
              "name": "Is a group tour cheaper than private?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usually per person, yes."
              }
            },
            {
              "@type": "Question",
              "name": "Do group tours include entry tickets?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It varies; the tour page says."
              }
            },
            {
              "@type": "Question",
              "name": "Can I leave the group?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generally no; the schedule is fixed."
              }
            },
            {
              "@type": "Question",
              "name": "Is it safe for solo travellers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, and it is a good way to meet people."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-fort-tour": {
    "title": "Is a Guided Tour of Agra Fort Worth It? The Best Ones",
    "seoTitle": "Best Agra Fort Tour 2026: Guided Options",
    "description": "Whether Agra Fort deserves a guide of its own, what you will see, and four real tours: Fort only, Fort with the Taj, and Fort with Sikandra.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-fort-monument-visits-with-licensed-guide/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "castle",
        "content": "Yes, with a guide. **Agra Fort** is a UNESCO World Heritage Site, built largely in red sandstone, with marble palaces added by Shah Jahan. It is where he spent his last years, looking at the Taj from the Musamman Burj. Without a guide it is a big, confusing complex; with one it makes sense. Most tours pair it with the Taj, since the Fort is only about two kilometres away. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Agra Fort only, with a licensed guide",
        "icon": "castle",
        "content": "A two-hour visit focused on the Fort.",
        "tourCard": {
          "slug": "agra-fort-monument-visits-with-licensed-guide",
          "title": "Agra Fort monument visits with Licensed Guide",
          "description": "Agra Fort monument visit with a licensed guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-fort-monument-visits-with-licensed-guide/img0/1600.webp"
        }
      },
      {
        "title": "Taj Mahal and Agra Fort, skip the line",
        "icon": "zap",
        "content": "The classic pairing, private and skip-the-line.",
        "tourCard": {
          "slug": "agra-taj-mahal-agra-fort-skip-the-line-private",
          "title": "Agra: Taj Mahal & Agra Fort Skip-the-Line Private Tour",
          "description": "Taj Mahal and Agra Fort skip-the-line private tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-skip-the-line-private/img0/1600.webp"
        }
      },
      {
        "title": "Fort, Baby Taj and Mehtab Bagh",
        "icon": "landmark",
        "content": "Fort and two quieter stops.",
        "tourCard": {
          "slug": "agra-fort-baby-taj-mehtab-bagh-express-ticket",
          "title": "Agra fort, Baby Taj & Mehtab Bagh Express Ticket With Guide",
          "description": "Agra Fort, Baby Taj and Mehtab Bagh express ticket with guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-fort-baby-taj-mehtab-bagh-express-ticket/img0/1600.webp"
        }
      },
      {
        "title": "Akbar Tomb, Fort and Baby Taj",
        "icon": "crown",
        "content": "A private tour that adds Akbar's tomb.",
        "tourCard": {
          "slug": "private-agra-tour-akbar-tomb-agra-fort-and-baby",
          "title": "Private Agra Tour: Akbar Tomb, Agra Fort, and Baby Taj",
          "description": "Private Agra tour: Akbar Tomb, Agra Fort and Baby Taj.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-agra-tour-akbar-tomb-agra-fort-and-baby/img0/1600.webp"
        }
      },
      {
        "title": "Tips",
        "icon": "info",
        "content": "- Go in the **morning**; the red sandstone gets very hot by afternoon.\n- Allow two hours.\n- Read about [Agra Fort](/india/agra/agra-fort) and [hiring a guide](/india/agra/agra-tour-guide)."
      }
    ],
    "faqs": [
      {
        "q": "How long does Agra Fort take?",
        "a": "About two hours with a guide."
      },
      {
        "q": "How far is it from the Taj Mahal?",
        "a": "About two kilometres."
      },
      {
        "q": "Is it worth seeing if I have seen the Taj?",
        "a": "Yes; it is a different story and a very different building."
      },
      {
        "q": "Is it open every day?",
        "a": "Yes, including Fridays, when the Taj is closed."
      },
      {
        "q": "Which is better, Fort or Fatehpur Sikri?",
        "a": "See both if you can; the Fort is closer."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does Agra Fort take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About two hours with a guide."
              }
            },
            {
              "@type": "Question",
              "name": "How far is it from the Taj Mahal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About two kilometres."
              }
            },
            {
              "@type": "Question",
              "name": "Is it worth seeing if I have seen the Taj?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes; it is a different story and a very different building."
              }
            },
            {
              "@type": "Question",
              "name": "Is it open every day?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, including Fridays, when the Taj is closed."
              }
            },
            {
              "@type": "Question",
              "name": "Which is better, Fort or Fatehpur Sikri?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "See both if you can; the Fort is closer."
              }
            }
          ]
        }
      ]
    }
  },
  "best-akbars-tomb-sikandra-tour": {
    "title": "Is Akbar’s Tomb at Sikandra Worth Visiting? The Best Tours",
    "seoTitle": "Akbar Tomb Sikandra Tour 2026: Best Options",
    "description": "Akbar’s Tomb in Sikandra: what is there, how long it takes, and four real tours that include it with the Taj or Fatehpur Sikri.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/private-agra-tour-akbar-tomb-agra-fort-and-baby/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "landmark",
        "content": "Yes, and it is one of the **quietest major monuments** around Agra. The tomb of the Mughal emperor Akbar sits in a large garden in Sikandra, about 10 km out of the city centre, with a grand red sandstone gateway and inlaid marble. It takes about an hour, and it makes a good first stop on the road to or from Fatehpur Sikri. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Private Agra tour: Akbar Tomb, Fort and Baby Taj",
        "icon": "crown",
        "content": "A private half-day tour with Sikandra, the Fort and Baby Taj.",
        "tourCard": {
          "slug": "private-agra-tour-akbar-tomb-agra-fort-and-baby",
          "title": "Private Agra Tour: Akbar Tomb, Agra Fort, and Baby Taj",
          "description": "Private Agra tour: Akbar Tomb, Agra Fort and Baby Taj.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/private-agra-tour-akbar-tomb-agra-fort-and-baby/img0/1600.webp"
        }
      },
      {
        "title": "Fatehpur Sikri and Sikandra from Agra",
        "icon": "route",
        "content": "Akbar's capital and his tomb on the same day.",
        "tourCard": {
          "slug": "from-agra-explore-fatehpur-sikri-and-sikandra-akba",
          "title": "From Agra: Explore Fatehpur Sikri and Sikandra (Akbar Tomb)",
          "description": "From Agra: explore Fatehpur Sikri and Sikandra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-explore-fatehpur-sikri-and-sikandra-akba/img0/1600.webp"
        }
      },
      {
        "title": "Sunrise Taj, Fort and Akbar’s Tomb from Delhi",
        "icon": "sun",
        "content": "A Delhi-based day tour with Sikandra included.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-sunrise-agra-fort-akbars-tomb",
          "title": "From Delhi: Taj Mahal Sunrise, Agra Fort & Akbar’s Tomb Tour",
          "description": "From Delhi: Taj Mahal sunrise, Agra Fort and Akbar’s Tomb tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-sunrise-agra-fort-akbars-tomb/img0/1600.webp"
        }
      },
      {
        "title": "How to fit it in",
        "icon": "info",
        "content": "- Add Sikandra to the road toward [Fatehpur Sikri](/india/agra/best-agra-tour-with-fatehpur-sikri).\n- It is quiet, so it works well late in the day.\n- Allow about an hour."
      }
    ],
    "faqs": [
      {
        "q": "Where is Akbar’s Tomb?",
        "a": "In Sikandra, about 10 km from central Agra."
      },
      {
        "q": "How long does a visit take?",
        "a": "About an hour."
      },
      {
        "q": "Is it crowded?",
        "a": "Usually much quieter than the Taj."
      },
      {
        "q": "Can I see it with Fatehpur Sikri?",
        "a": "Yes; they are close on the same road."
      },
      {
        "q": "Is a guide needed?",
        "a": "Recommended, as the history is easy to miss otherwise."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Akbar’s Tomb?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In Sikandra, about 10 km from central Agra."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a visit take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About an hour."
              }
            },
            {
              "@type": "Question",
              "name": "Is it crowded?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usually much quieter than the Taj."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see it with Fatehpur Sikri?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes; they are close on the same road."
              }
            },
            {
              "@type": "Question",
              "name": "Is a guide needed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Recommended, as the history is easy to miss otherwise."
              }
            }
          ]
        }
      ]
    }
  },
  "best-taj-mahal-tour-with-mehtab-bagh": {
    "title": "Should You Visit Mehtab Bagh with Your Taj Mahal Tour? The Best Combined Tours",
    "seoTitle": "Taj Mahal + Mehtab Bagh Tour 2026: Best Options",
    "description": "Seeing the Taj Mahal from the river side: Mehtab Bagh, moonlight and sunset views, and five real tours that include it.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-agra-fort-mehtab-bagh-same/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "trees",
        "content": "Yes, if you have an evening. **Mehtab Bagh** is a Mughal garden across the Yamuna that faces the Taj head-on, so it is the best place to see the full building framed without the crowds. It works best at **sunset**, and it is a calm way to end a hot Taj day. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Taj, Fort and Mehtab Bagh from Delhi",
        "icon": "map-pin",
        "content": "A same-day tour from Delhi that includes Mehtab Bagh.",
        "tourCard": {
          "slug": "from-delhi-taj-mahal-agra-fort-mehtab-bagh-same",
          "title": "From Delhi: Taj Mahal, Agra Fort & Mehtab Bagh Same-Day Tour",
          "description": "From Delhi: Taj Mahal, Agra Fort and Mehtab Bagh same-day tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-taj-mahal-agra-fort-mehtab-bagh-same/img0/1600.webp"
        }
      },
      {
        "title": "Taj skip-the-line, Fort, Baby Taj and Mehtab Bagh",
        "icon": "landmark",
        "content": "A six-hour Agra tour with all four.",
        "tourCard": {
          "slug": "taj-mahal-mehtab-guided-tour",
          "title": "Agra: Taj Mahal Skip-The-Line, Agra Fort, Baby Taj  and Mehtab Bagh Tour",
          "description": "Taj Mahal skip-the-line, Agra Fort, Baby Taj and Mehtab Bagh.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-mehtab-guided-tour/img0/1600.webp"
        }
      },
      {
        "title": "Fort, Baby Taj and Mehtab Bagh with guide",
        "icon": "castle",
        "content": "Without the Taj itself, for those who have already been.",
        "tourCard": {
          "slug": "agra-fort-baby-taj-mehtab-bagh-express-ticket",
          "title": "Agra fort, Baby Taj & Mehtab Bagh Express Ticket With Guide",
          "description": "Agra Fort, Baby Taj and Mehtab Bagh express ticket with guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-fort-baby-taj-mehtab-bagh-express-ticket/img0/1600.webp"
        }
      },
      {
        "title": "Baby Taj and Mehtab Bagh, private",
        "icon": "user",
        "content": "A private four-hour tour.",
        "tourCard": {
          "slug": "agra-baby-taj-and-mehtab-bagh-private-guided-tour",
          "title": "Agra: Baby Taj and Mehtab Bagh Private Guided Tour w/ Pickup",
          "description": "Baby Taj and Mehtab Bagh private guided tour with pickup.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-baby-taj-and-mehtab-bagh-private-guided-tour/img0/1600.webp"
        }
      },
      {
        "title": "Moonlight viewing from the river side",
        "icon": "moon",
        "content": "A different view: the Taj from the Yamuna riverside.",
        "tourCard": {
          "slug": "taj-mahal-moonlight-viewing-tour-from-the-yamuna-r",
          "title": "Taj Mahal Moonlight Viewing Tour from the Yamuna River Side",
          "description": "Taj Mahal moonlight viewing tour from the Yamuna riverside.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-moonlight-viewing-tour-from-the-yamuna-r/img0/1600.webp"
        }
      },
      {
        "title": "More",
        "icon": "info",
        "content": "Read our [Mehtab Bagh guide](/india/agra/mehtab-bagh) and [night viewing](/india/agra/taj-mahal-night-viewing-tour)."
      }
    ],
    "faqs": [
      {
        "q": "What is Mehtab Bagh?",
        "a": "A Mughal garden on the Yamuna, directly opposite the Taj."
      },
      {
        "q": "When is the best time?",
        "a": "Sunset."
      },
      {
        "q": "Is it crowded?",
        "a": "Much less than the Taj."
      },
      {
        "q": "Do I need a ticket?",
        "a": "Yes, a small one; tours include it where listed."
      },
      {
        "q": "Can I see the Taj at night?",
        "a": "On full moon nights, subject to the schedule; see our night viewing page."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Mehtab Bagh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Mughal garden on the Yamuna, directly opposite the Taj."
              }
            },
            {
              "@type": "Question",
              "name": "When is the best time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sunset."
              }
            },
            {
              "@type": "Question",
              "name": "Is it crowded?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Much less than the Taj."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a ticket?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a small one; tours include it where listed."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see the Taj at night?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On full moon nights, subject to the schedule; see our night viewing page."
              }
            }
          ]
        }
      ]
    }
  },
  "can-i-build-my-own-agra-itinerary-with-a-private-car": {
    "title": "Can I Build My Own Agra Itinerary with a Private Car and Guide?",
    "seoTitle": "Custom Agra Itinerary with Private Car and Guide 2026",
    "description": "Create-your-own Agra itineraries: how they work, what to decide first, and four real flexible tours with a car and guide.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-with-private-car/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "settings-2",
        "content": "Yes. A flexible tour gives you a **private car and a guide** for a set number of hours, and you decide the stops. It suits repeat visitors, people with specific interests such as Mughal history, crafts or food, and families who do not want a fixed script. Send us your list on WhatsApp and we will tell you what fits in the time. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Create your own itinerary, car and guide",
        "icon": "settings-2",
        "content": "A flexible private day in Agra.",
        "tourCard": {
          "slug": "agra-create-your-own-itinerary-with-private-car",
          "title": "Agra: Create Your Own Itinerary with Private Car & Guide",
          "description": "Agra: create your own itinerary with a private car and guide.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-with-private-car/img0/1600.webp"
        }
      },
      {
        "title": "Create your own, private tour and transfer",
        "icon": "route",
        "content": "Private tour with a transfer included.",
        "tourCard": {
          "slug": "agra-create-your-own-itinerary-private-tour",
          "title": "Agra: Create Your Own Itinerary - Private Tour & Transfer",
          "description": "Agra: create your own itinerary, private tour and transfer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-private-tour/img0/1600.webp"
        }
      },
      {
        "title": "Private 5-hour sightseeing with pickup",
        "icon": "clock",
        "content": "A set 5-hour block, easy to adjust.",
        "tourCard": {
          "slug": "agra-private-5-hour-sightseeing-tour-with-hotel",
          "title": "Agra: Private 5-Hour Sightseeing Tour with Hotel Pickup",
          "description": "Agra: private 5-hour sightseeing tour with hotel pickup.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/agra-private-5-hour-sightseeing-tour-with-hotel/img0/1600.webp"
        }
      },
      {
        "title": "Taj and Fort, private, with transfers",
        "icon": "car",
        "content": "A fixed core with room to tweak.",
        "tourCard": {
          "slug": "taj-mahal-and-agra-fort-private-guided-tour-with",
          "title": "Taj Mahal and Agra Fort Private Guided Tour with Transfers",
          "description": "Taj Mahal and Agra Fort private guided tour with transfers.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-and-agra-fort-private-guided-tour-with/img0/1600.webp"
        }
      },
      {
        "title": "What to decide first",
        "icon": "list-checks",
        "content": "- **How many hours** you want.\n- Your **must-see** places, and one or two optional.\n- Whether you want a **sunrise** or **sunset** slot.\n- Any **mobility** or food needs.\n\nUse [1 day Agra itinerary](/india/agra/1-day-agra-itinerary) as a starting point."
      }
    ],
    "faqs": [
      {
        "q": "How long should a custom tour be?",
        "a": "Five to eight hours is typical."
      },
      {
        "q": "Can I include shopping or food?",
        "a": "Yes, though we suggest reading our shopping guide first."
      },
      {
        "q": "Can I change the plan on the day?",
        "a": "Within reason, yes."
      },
      {
        "q": "Is the guide licensed?",
        "a": "Ask us on WhatsApp to confirm for your date."
      },
      {
        "q": "Are tickets included?",
        "a": "Usually not; each page states."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long should a custom tour be?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Five to eight hours is typical."
              }
            },
            {
              "@type": "Question",
              "name": "Can I include shopping or food?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, though we suggest reading our shopping guide first."
              }
            },
            {
              "@type": "Question",
              "name": "Can I change the plan on the day?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Within reason, yes."
              }
            },
            {
              "@type": "Question",
              "name": "Is the guide licensed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ask us on WhatsApp to confirm for your date."
              }
            },
            {
              "@type": "Question",
              "name": "Are tickets included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usually not; each page states."
              }
            }
          ]
        }
      ]
    }
  },
  "how-much-is-a-private-car-from-delhi-to-agra-and-jaipur": {
    "title": "How Do I Get a Private Car from Delhi to Agra or Jaipur? One-Way Transfers with Sightseeing",
    "seoTitle": "Private Car Delhi to Agra / Jaipur One-Way 2026",
    "description": "One-way private car transfers between Delhi, Agra and Jaipur, and how to turn the drive into a sightseeing day. Three real options.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/delhiagrajaipur-private-one-way-premium-car/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "car",
        "content": "If you are moving on rather than coming back, a **one-way private car** is usually the best value: you leave from your Delhi hotel, see the Taj with a guide on the way, and arrive in Jaipur or wherever you are going that evening. Pricing depends on the car type and the stops you add, so ask for a quote for your exact dates. The Delhi to Agra drive is about 3.5 to 4 hours, Agra to Jaipur about 4 to 5. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Private one-way premium car",
        "icon": "car",
        "content": "A premium car for a one-way transfer between Delhi, Agra and Jaipur.",
        "tourCard": {
          "slug": "delhiagrajaipur-private-one-way-premium-car",
          "title": "Delhi/Agra/Jaipur: Private One-Way Premium Car Transfer",
          "description": "Delhi, Agra or Jaipur: private one-way premium car transfer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/delhiagrajaipur-private-one-way-premium-car/img0/1600.webp"
        }
      },
      {
        "title": "Day tour with an optional transfer",
        "icon": "route",
        "content": "Do the Taj and end in a different city.",
        "tourCard": {
          "slug": "from-jaipurdelhiagra-taj-mahal-day-touroptional-tr",
          "title": "From Jaipur/Delhi/Agra: Taj Mahal Day Tour+Optional Transfer",
          "description": "Taj Mahal day tour with optional transfer from Jaipur, Delhi or Agra.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-jaipurdelhiagra-taj-mahal-day-touroptional-tr/img0/1600.webp"
        }
      },
      {
        "title": "Transfer to or from Ranthambore",
        "icon": "trees",
        "content": "If your route includes the tiger reserve.",
        "tourCard": {
          "slug": "jaipuragradelhi-tofrom-ranthambore-one-way",
          "title": "Jaipur/Agra/Delhi To/From Ranthambore One Way Transfer",
          "description": "Jaipur, Agra or Delhi to and from Ranthambore one-way transfer.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/jaipuragradelhi-tofrom-ranthambore-one-way/img0/1600.webp"
        }
      },
      {
        "title": "Making the drive worth it",
        "icon": "info",
        "content": "- Add **Fatehpur Sikri** between Agra and Jaipur; it is on the road.\n- Leave early to beat Delhi traffic.\n- Ask for a driver who speaks English.\n\nSee [Delhi to Agra](/india/agra/delhi-to-agra) and [Agra to Jaipur](/india/agra/agra-to-jaipur)."
      }
    ],
    "faqs": [
      {
        "q": "How long is the drive from Delhi to Agra?",
        "a": "About 3.5 to 4 hours on the Yamuna Expressway."
      },
      {
        "q": "Can I stop at the Taj on the way to Jaipur?",
        "a": "Yes, with a day tour that ends in Jaipur."
      },
      {
        "q": "Is the price per car or per person?",
        "a": "Per car on transfers; tours can differ. Ask for the exact quote."
      },
      {
        "q": "Can I book a driver for several days?",
        "a": "Yes; see our Golden Triangle tours."
      },
      {
        "q": "Do drivers speak English?",
        "a": "Most do; ask when you book."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long is the drive from Delhi to Agra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 3.5 to 4 hours on the Yamuna Expressway."
              }
            },
            {
              "@type": "Question",
              "name": "Can I stop at the Taj on the way to Jaipur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, with a day tour that ends in Jaipur."
              }
            },
            {
              "@type": "Question",
              "name": "Is the price per car or per person?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Per car on transfers; tours can differ. Ask for the exact quote."
              }
            },
            {
              "@type": "Question",
              "name": "Can I book a driver for several days?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes; see our Golden Triangle tours."
              }
            },
            {
              "@type": "Question",
              "name": "Do drivers speak English?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most do; ask when you book."
              }
            }
          ]
        }
      ]
    }
  },
  "best-agra-to-varanasi-and-khajuraho-tour": {
    "title": "Can You Go from Agra to Varanasi or Khajuraho? The Best Rail Tours",
    "seoTitle": "Agra to Varanasi and Khajuraho Tour 2026",
    "description": "Extending a trip beyond the Golden Triangle: Agra to Varanasi and Khajuraho by rail, and what each leg takes. Three real tours.",
    "heroImage": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-varanasi-2-day-tour-with-train-tickets/img0/1600.webp",
    "sections": [
      {
        "title": "The Short Answer",
        "icon": "train-front",
        "content": "Yes, and rail is the sensible way to do it. From Agra, **Varanasi is a long overnight journey**, and Khajuraho needs a train to Jhansi followed by a road leg. A tour with train tickets arranged saves a lot of booking stress. Varanasi is best around dawn on the ghats and the evening aarti. Every tour below is a real listing you can message about before you pay: WhatsApp +91 84495 38716 or email, and a person answers."
      },
      {
        "title": "Agra to Varanasi, 2 days with train tickets",
        "icon": "train-front",
        "content": "A two-day trip with the rail booked.",
        "tourCard": {
          "slug": "from-agra-varanasi-2-day-tour-with-train-tickets",
          "title": "From Agra: Varanasi 2-Day Tour with Train Tickets",
          "description": "From Agra: Varanasi 2-day tour with train tickets.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-agra-varanasi-2-day-tour-with-train-tickets/img0/1600.webp"
        }
      },
      {
        "title": "5 days: Khajuraho, Varanasi and Agra by rail",
        "icon": "route",
        "content": "A longer loop covering all three.",
        "tourCard": {
          "slug": "from-delhi-5-day-khajuraho-varanasi-agra-rail-tour",
          "title": "From Delhi: 5-Day Khajuraho, Varanasi & Agra Rail Tour",
          "description": "From Delhi: 5-day Khajuraho, Varanasi and Agra rail tour.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/from-delhi-5-day-khajuraho-varanasi-agra-rail-tour/img0/1600.webp"
        }
      },
      {
        "title": "Orchha and Jhansi Fort from Khajuraho",
        "icon": "castle",
        "content": "A day trip from Khajuraho to Orchha and Jhansi Fort.",
        "tourCard": {
          "slug": "a-day-tour-of-orchha-jhansi-fort-from-khajuraho",
          "title": "A Day Tour of Orchha & Jhansi Fort from Khajuraho with Guide",
          "description": "Orchha and Jhansi Fort day tour from Khajuraho.",
          "image": "https://images.asiabylocals.com/asiabylocals/tours/a-day-tour-of-orchha-jhansi-fort-from-khajuraho/img0/1600.webp"
        }
      },
      {
        "title": "Planning notes",
        "icon": "info",
        "content": "- Rail tickets sell out early on these routes; book weeks ahead.\n- Two days for Varanasi is a minimum.\n- Pair with [Delhi to Agra](/india/agra/delhi-to-agra) for the first leg."
      }
    ],
    "faqs": [
      {
        "q": "How long is Agra to Varanasi?",
        "a": "A long journey, overnight by train."
      },
      {
        "q": "Is two days enough for Varanasi?",
        "a": "It is enough for the main ghats and the aarti."
      },
      {
        "q": "How do I reach Khajuraho?",
        "a": "By train to Jhansi, then road."
      },
      {
        "q": "When should I go?",
        "a": "October to March."
      },
      {
        "q": "Are tickets included?",
        "a": "On the rail tours, yes; each page says."
      }
    ],
    "jsonLd": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long is Agra to Varanasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A long journey, overnight by train."
              }
            },
            {
              "@type": "Question",
              "name": "Is two days enough for Varanasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is enough for the main ghats and the aarti."
              }
            },
            {
              "@type": "Question",
              "name": "How do I reach Khajuraho?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By train to Jhansi, then road."
              }
            },
            {
              "@type": "Question",
              "name": "When should I go?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "October to March."
              }
            },
            {
              "@type": "Question",
              "name": "Are tickets included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On the rail tours, yes; each page says."
              }
            }
          ]
        }
      ]
    }
  }
};
export const AGRA_BEST_SLUGS = Object.keys(PAGES);

export function getAgraBestInfoContent(slug: string): CityInfoData | null {
  return PAGES[slug] ?? null;
}
