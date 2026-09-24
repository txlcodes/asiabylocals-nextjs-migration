// Replace the Japanese theme paragraph that leaked into Vietnam and Thailand
// tour bodies (vn2/ and th/ deepen.py both read jp/themes.py) with the correct
// country paragraph. Only Tour.fullDescription is touched.
// Usage: node apply_theme_fix.mjs            (dry run)
//        node apply_theme_fix.mjs --apply
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const SRC = process.env.PATCH_FILE;
const JP = JSON.parse(fs.readFileSync(process.env.JP_PARAS, 'utf8'));
const prisma = new PrismaClient();

const data = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const ids = Object.keys(data).map(Number);

const rows = await prisma.tour.findMany({
  where: { id: { in: ids } },
  select: { id: true, slug: true, country: true, fullDescription: true },
});

// Only write where the body is still the one the patch was built from, so a
// concurrent edit is skipped rather than overwritten.
const stale = [];
const todo = rows.filter(r => {
  const want = data[String(r.id)];
  if (!want) return false;
  const body = r.fullDescription || '';
  if (JP.some(p => body.includes(p))) return true;   // still contaminated -> fix
  if (body !== want.fullDescription) { stale.push(r.id); return false; } // edited elsewhere
  return false;                                       // already clean
});

console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — patch rows ${ids.length}, found ${rows.length}, to write ${todo.length}, skipped-as-clean/stale ${stale.length}`);
const byCountry = {};
for (const r of todo) byCountry[r.country] = (byCountry[r.country] || 0) + 1;
console.log(byCountry);

if (!APPLY) { console.log('\nDry run only. Re-run with --apply.'); await prisma.$disconnect(); process.exit(0); }

fs.writeFileSync('./theme_fix_backup.json', JSON.stringify(rows, null, 1));
let n = 0;
for (const r of todo) {
  await prisma.tour.update({ where: { id: r.id }, data: { fullDescription: data[String(r.id)].fullDescription } });
  if (++n % 100 === 0) console.log(`  ${n}/${todo.length}`);
}
console.log(`Done. Rewrote ${n} tour bodies. Backup: server/theme_fix_backup.json`);
await prisma.$disconnect();
