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
        "content": "- Check that both flights are on **one ticket**, so the airline looks after you if the return is late.\n- Keep two hours spare at the end, not one.\n- Tell the operator your flight time so they can pick a safe return.\n\nSee also [Delhi to Agra](/india/agra/delhi-to-agra) and [same-day Agra tour from Delhi](/india/agra/same-day-agra-tour-from-delhi)."
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
  }
};
export const AGRA_BEST_SLUGS = Object.keys(PAGES);

export function getAgraBestInfoContent(slug: string): CityInfoData | null {
  return PAGES[slug] ?? null;
}
