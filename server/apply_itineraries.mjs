// Apply scraped itineraries (/tmp/itineraries_out.json) to Tour.itineraryItems.
// Usage: node apply_itineraries.mjs           (dry run)
//        node apply_itineraries.mjs --apply
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const prisma = new PrismaClient();

async function main() {
  const data = JSON.parse(fs.readFileSync('/tmp/itineraries_out.json', 'utf8'));
  const ids = Object.keys(data).map(Number);
  const tours = await prisma.tour.findMany({ where: { id: { in: ids } }, select: { id: true, title: true, itineraryItems: true } });

  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — itineraries to write: ${ids.length}`);
  for (const t of tours) console.log(`  #${t.id} ${t.title.slice(0, 42)}: ${data[t.id].length} stops`);

  if (!APPLY) { console.log('\nDry run only. Re-run with --apply.'); await prisma.$disconnect(); return; }

  // backup existing (was empty, but keep for safety)
  fs.writeFileSync('./itinerary_backup.json', JSON.stringify(tours, null, 2));
  for (const t of tours) {
    await prisma.tour.update({ where: { id: t.id }, data: { itineraryItems: JSON.stringify(data[t.id]) } });
    console.log(`  ✓ #${t.id}`);
  }
  console.log(`\nDone. Wrote itineraries for ${tours.length} tours.`);
  await prisma.$disconnect();
}

main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
