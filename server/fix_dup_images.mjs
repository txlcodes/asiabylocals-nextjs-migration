// Remove duplicate photos (same GetYourGuide image hash) from tour image arrays.
// The scraper captured the cover photo multiple times at different sizes; after
// Cloudinary re-hosting those became distinct URLs but identical pictures.
// Uses gyg_images_backup_bangkok.json (original GYG URLs, same order as the
// current Cloudinary URLs) to find which positions are dupes.
// Usage: node fix_dup_images.mjs           (dry run)
//        node fix_dup_images.mjs --apply
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const prisma = new PrismaClient();

// Extract the photo hash (long hex run) from a GYG URL; ignores size suffix.
const hashOf = (u) => {
  const m = String(u).match(/([a-f0-9]{16,})/);
  return m ? m[1] : String(u);
};
const arr = (s) => { try { const a = JSON.parse(s || '[]'); return Array.isArray(a) ? a : []; } catch { return []; } };

async function main() {
  const backup = JSON.parse(fs.readFileSync('./gyg_images_backup_bangkok.json', 'utf8'));
  const byId = new Map(backup.map((b) => [b.id, arr(b.images)]));

  const tours = await prisma.tour.findMany({
    where: { id: { in: backup.map((b) => b.id) } },
    select: { id: true, title: true, images: true },
  });

  const plan = [];
  for (const t of tours) {
    const orig = byId.get(t.id) || [];      // original GYG URLs (ordered)
    const current = arr(t.images);           // current Cloudinary URLs (same order)
    if (orig.length !== current.length) {
      console.log(`  ! #${t.id} length mismatch (orig ${orig.length} vs db ${current.length}) — skipping to be safe`);
      continue;
    }
    const seen = new Set();
    const keepIdx = [];
    orig.forEach((u, i) => {
      const h = hashOf(u);
      if (!seen.has(h)) { seen.add(h); keepIdx.push(i); }
    });
    if (keepIdx.length !== current.length) {
      plan.push({ id: t.id, title: t.title, before: current.length, after: keepIdx.length,
        newImages: keepIdx.map((i) => current[i]) });
    }
  }

  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — tours with duplicate photos: ${plan.length}`);
  for (const p of plan) console.log(`  #${p.id} ${p.title.slice(0, 40)}: ${p.before} -> ${p.after} unique`);

  if (!APPLY) { console.log('\nDry run only. Re-run with --apply.'); await prisma.$disconnect(); return; }

  for (const p of plan) {
    await prisma.tour.update({ where: { id: p.id }, data: { images: JSON.stringify(p.newImages) } });
    console.log(`  ✓ #${p.id}`);
  }
  console.log(`\nDone. Deduped ${plan.length} tours.`);
  await prisma.$disconnect();
}

main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
