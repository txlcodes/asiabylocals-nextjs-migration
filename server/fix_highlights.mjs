// Strip junk single-character entries from corrupted Tour.highlights.
// Real GYG highlights are full phrases; the scraper injected 1-2 char garbage.
// Usage: node fix_highlights.mjs            (dry run)
//        node fix_highlights.mjs --apply    (backup + update)
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const prisma = new PrismaClient();

const isJunk = (s) => typeof s !== 'string' || s.trim().length < 3;

async function main() {
  const all = await prisma.tour.findMany({ select: { id: true, title: true, highlights: true } });
  const changes = [];
  for (const t of all) {
    let h;
    try { h = JSON.parse(t.highlights || '[]'); } catch { continue; }
    if (!Array.isArray(h)) continue;
    const cleaned = h.filter((x) => !isJunk(x));
    if (cleaned.length !== h.length) {
      changes.push({ id: t.id, title: t.title, before: h, after: cleaned });
    }
  }

  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — tours to clean: ${changes.length}`);
  for (const c of changes) {
    console.log(`  #${c.id} ${c.title.slice(0, 42)}: ${c.before.length} -> ${c.after.length} highlights`);
  }

  if (!APPLY) { console.log('\nDry run only. Re-run with --apply.'); await prisma.$disconnect(); return; }

  fs.writeFileSync('./highlights_backup.json', JSON.stringify(changes.map(c => ({ id: c.id, highlights: c.before })), null, 2));
  console.log('\nBackup: ./highlights_backup.json');
  for (const c of changes) {
    await prisma.tour.update({ where: { id: c.id }, data: { highlights: JSON.stringify(c.after) } });
    console.log(`  ✓ #${c.id}`);
  }
  console.log(`\nDone. Cleaned ${changes.length} tours.`);
  await prisma.$disconnect();
}

main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
