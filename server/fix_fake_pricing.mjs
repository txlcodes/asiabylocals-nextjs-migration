// Remove auto-generated (synthetic) group-discount tiers so pricing is flat +20%.
// Only touches options whose tiers EXACTLY match the importer's 0.95/0.90/0.85 formula.
// Usage: node fix_fake_pricing.mjs           (dry run)
//        node fix_fake_pricing.mjs --apply
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const APPLY = process.argv.includes('--apply');
const prisma = new PrismaClient();
const arr = (s) => { try { const a = JSON.parse(s || '[]'); return Array.isArray(a) ? a : []; } catch { return []; } };

const isSynthetic = (tiers) => {
  if (tiers.length < 5) return false;
  const base = Number(tiers[0].price);
  const t = tiers.slice(0, 5);
  const exp = [base, base, Math.floor(base * 0.95), Math.floor(base * 0.90), Math.floor(base * 0.85)];
  return t.every((x, i) => Number(x.price) === exp[i]) && t[2].minPeople === 3 && t[4].maxPeople === 10;
};

async function main() {
  const opts = await prisma.tourOption.findMany({ select: { id: true, tourId: true, price: true, groupPricingTiers: true } });
  const targets = opts.filter((o) => isSynthetic(arr(o.groupPricingTiers)));

  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — option rows with fake tiers: ${targets.length}`);
  for (const o of targets) console.log(`  opt #${o.id} (tour #${o.tourId}) base $${o.price} -> flat (tiers removed)`);

  if (!APPLY) { console.log('\nDry run only. Re-run with --apply.'); await prisma.$disconnect(); return; }

  fs.writeFileSync('./fake_pricing_backup.json', JSON.stringify(targets, null, 2));
  console.log('\nBackup: ./fake_pricing_backup.json');
  for (const o of targets) {
    await prisma.tourOption.update({ where: { id: o.id }, data: { groupPricingTiers: null } });
  }
  console.log(`Cleared fake tiers on ${targets.length} options. Pricing is now flat per-person (+20%).`);
  await prisma.$disconnect();
}

main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
