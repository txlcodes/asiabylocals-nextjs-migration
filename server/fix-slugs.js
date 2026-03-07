/**
 * fix-slugs.js
 *
 * Updates 20 bad/misleading tour slugs across Agra, Delhi, and Jaipur
 * to SEO-friendly, keyword-rich slugs that match the actual tour content.
 *
 * Usage:  cd server && node fix-slugs.js
 */

import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SLUG_UPDATES = [
  // ─── AGRA (6) ───
  {
    old: 'agra-walking-sunrise-tour',
    new: 'taj-mahal-sunrise-skip-the-line-tour',
    reason: 'Missing "taj-mahal" — main keyword',
  },
  {
    old: 'taj-mahal-sunrise-sunrise-tour',
    new: 'private-sunrise-taj-mahal-agra-fort-tour',
    reason: '"sunrise" repeated twice — typo',
  },
  {
    old: 'agra-gatimaan-entry-ticket',
    new: 'delhi-agra-round-trip-gatimaan-train',
    reason: '"entry-ticket" is wrong — it\'s a train trip',
  },
  {
    old: 'agra-same-guided-tour',
    new: 'same-day-delhi-to-agra-tour',
    reason: '"same" is meaningless in slug',
  },
  {
    old: 'taj-mahal-delhi-guided-tour',
    new: 'taj-mahal-same-day-tour-from-delhi',
    reason: 'Under /india/agra/ but slug says "delhi" — confusing',
  },
  {
    old: 'female-guide-for-taj-mahal',
    new: 'taj-mahal-tour-with-female-guide',
    reason: 'Weak SEO — restructured for better ranking',
  },

  // ─── DELHI (8) ───
  {
    old: 'agra-fort-sunrise-tour',
    new: 'taj-mahal-sunrise-elephant-conservation-tour',
    reason: 'Slug says "agra-fort" but tour is about Taj Mahal & Elephants',
  },
  {
    old: 'agra-fort-express-tour',
    new: 'taj-mahal-same-day-express-train-tour',
    reason: 'Slug says "agra-fort" but it\'s a train tour to Taj Mahal',
  },
  {
    old: 'india-gate-inclusive-guided-tour',
    new: 'golden-triangle-tour-delhi-agra-jaipur',
    reason: 'Slug says "india-gate" but it\'s a Golden Triangle tour',
  },
  {
    old: 'india-gate-guided-tour-heritage',
    new: 'old-new-delhi-guided-tour',
    reason: 'Slug says "india-gate" but it\'s all of Delhi',
  },
  {
    old: 'india-gate-triangle-guided-tour',
    new: '6-days-golden-triangle-tour-from-delhi',
    reason: 'Slug says "india-gate" — it\'s Golden Triangle',
  },
  {
    old: 'delhi-luxury-premium-tour',
    new: 'taj-mahal-agra-day-trip-luxury-car',
    reason: 'Too generic — missing "taj-mahal" and "agra"',
  },
  {
    old: 'delhi-golden-guided-tour',
    new: '5-days-golden-triangle-tour-from-delhi',
    reason: '"golden" alone doesn\'t help SEO',
  },
  {
    old: 'agra-overnight-tour',
    new: 'delhi-to-agra-overnight-tour',
    reason: 'Under /india/delhi/ but slug starts with "agra"',
  },

  // ─── JAIPUR (6) ───
  {
    old: 'elepahnt-village-walking-tour',
    new: 'elephant-village-tour-jaipur',
    reason: 'TYPO — "elepahnt" instead of "elephant"',
  },
  {
    old: 'hawa-mahal-food-tour',
    new: 'jaipur-heritage-walk-street-food-tour',
    reason: 'Not about Hawa Mahal — it\'s a heritage walk + food tour',
  },
  {
    old: 'hawa-mahal-full-day-tour',
    new: 'jaipur-private-full-day-sightseeing-tour',
    reason: 'Not Hawa Mahal specific — it\'s full city sightseeing',
  },
  {
    old: 'hawa-mahal-private-tour',
    new: 'jaipur-full-day-sightseeing-tour-by-car',
    reason: 'Not Hawa Mahal specific — it\'s full day by car',
  },
  {
    old: 'amber-fort-guided-tour',
    new: 'jaipur-city-tour-with-official-guide',
    reason: 'Not Amber Fort only — it\'s full Jaipur tour',
  },
  {
    old: 'jaipur-enjoy-private-tour',
    new: 'jaipur-to-agra-taj-mahal-day-trip',
    reason: '"enjoy" is meaningless — tour is Jaipur to Agra Taj Mahal',
  },
];

async function main() {
  console.log('=== Slug Update Migration ===\n');
  console.log(`Updating ${SLUG_UPDATES.length} slugs...\n`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const { old: oldSlug, new: newSlug, reason } of SLUG_UPDATES) {
    try {
      // Check if old slug exists
      const tour = await prisma.tour.findUnique({ where: { slug: oldSlug } });
      if (!tour) {
        console.log(`  [SKIP] "${oldSlug}" — not found in database`);
        skipped++;
        continue;
      }

      // Check if new slug already exists
      const existing = await prisma.tour.findUnique({ where: { slug: newSlug } });
      if (existing) {
        console.log(`  [SKIP] "${oldSlug}" → "${newSlug}" — new slug already exists (tour #${existing.id})`);
        skipped++;
        continue;
      }

      await prisma.tour.update({
        where: { slug: oldSlug },
        data: { slug: newSlug },
      });

      console.log(`  [OK] "${oldSlug}"`);
      console.log(`     → "${newSlug}"`);
      console.log(`       (${reason})\n`);
      updated++;
    } catch (err) {
      console.error(`  [ERROR] "${oldSlug}": ${err.message}`);
      errors++;
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors:  ${errors}`);

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('Fatal error:', err);
  prisma.$disconnect();
  process.exit(1);
});
