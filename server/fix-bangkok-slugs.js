
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const SLUG_UPDATES = [
  {
    id: 351,
    oldSlug: 'learn-hands-on-photography-skills',
    newSlug: 'bangkok-photography-class-workshop',
    title: 'Bangkok Photography Class with the Pros',
  },
  {
    id: 350,
    oldSlug: 'bangkok-phography-photo-walk-with',
    newSlug: 'bangkok-private-photography-tour',
    title: 'Your Private Bangkok Photographer Friend',
  },
  {
    id: 346,
    oldSlug: 'pak-khlong-talat-flower-market-evening-tour',
    newSlug: 'bangkok-street-food-tuk-tuk-night-tour',
    title: 'Bangkok After Dark: Street Food & Tuk-Tuk Night Tour',
  },
  {
    id: 331,
    oldSlug: 'bangkok-ancient-city-erawan-museum-tickets',
    newSlug: 'bangkok-ancient-city-erawan-museum-tour',
    title: 'Ancient City and Erawan Museum Entrance Tickets',
  },
];

async function main() {
  console.log(`Updating ${SLUG_UPDATES.length} Bangkok slugs...\n`);

  for (const { id, oldSlug, newSlug, title } of SLUG_UPDATES) {
    const updated = await prisma.tour.update({
      where: { id },
      data: { slug: newSlug },
    });
    console.log(`✅ Tour ${id}: "${oldSlug}" → "${updated.slug}"`);
    console.log(`   ${title}`);
    console.log(`   https://www.asiabylocals.com/thailand/bangkok/${updated.slug}\n`);
  }

  console.log('Done! Now add 301 redirects in next.config.ts for old slugs.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
