// Remove duplicate TourOption rows (same title+price+duration+description) within a tour.
// Keeps the lowest id, deletes the rest. Backs up deleted rows first.
// Usage: node fix_dup_options.mjs           (dry run)
//        node fix_dup_options.mjs --apply
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const prisma = new PrismaClient();

async function main() {
  const tours = await prisma.tour.findMany({
    where: { city: { equals: 'Bangkok', mode: 'insensitive' } },
    select: { id: true, title: true, options: { orderBy: { id: 'asc' } } },
  });

  const toDelete = [];
  for (const t of tours) {
    const seen = new Set();
    for (const o of t.options) {
      const key = `${o.optionTitle}|${o.price}|${o.durationHours}|${o.optionDescription}`;
      if (seen.has(key)) toDelete.push(o);
      else seen.add(key);
    }
  }

  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — duplicate option rows to delete: ${toDelete.length}`);
  for (const o of toDelete) console.log(`  optId=${o.id} (tour #${o.tourId}) "${o.optionTitle.slice(0, 40)}" $${o.price}`);

  if (!APPLY) { console.log('\nDry run only. Re-run with --apply.'); await prisma.$disconnect(); return; }
  if (!toDelete.length) { console.log('Nothing to delete.'); await prisma.$disconnect(); return; }

  fs.writeFileSync('./dup_options_backup.json', JSON.stringify(toDelete, null, 2));
  console.log('\nBackup: ./dup_options_backup.json');
  const res = await prisma.tourOption.deleteMany({ where: { id: { in: toDelete.map((o) => o.id) } } });
  console.log(`Deleted ${res.count} duplicate option rows.`);
  await prisma.$disconnect();
}

main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
