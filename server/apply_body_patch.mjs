// Generic: write Tour.fullDescription from a {id: {slug, fullDescription}} patch
// file, only where the DB body still differs. Usage:
//   PATCH_FILE=x.json node apply_body_patch.mjs [--apply]
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
const APPLY = process.argv.includes('--apply');
const prisma = new PrismaClient();
const data = JSON.parse(fs.readFileSync(process.env.PATCH_FILE, 'utf8'));
const ids = Object.keys(data).map(Number);
const rows = await prisma.tour.findMany({ where: { id: { in: ids } }, select: { id: true, slug: true, country: true, fullDescription: true } });
const todo = rows.filter(r => (r.fullDescription || '') !== data[String(r.id)].fullDescription);
const by = {}; for (const r of todo) by[r.country] = (by[r.country] || 0) + 1;
console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — patch ${ids.length}, found ${rows.length}, to write ${todo.length}`, by);
if (!APPLY) { await prisma.$disconnect(); process.exit(0); }
fs.writeFileSync(`./body_patch_backup_${Date.now()}.json`, JSON.stringify(rows, null, 1));
let n = 0;
for (const r of todo) { await prisma.tour.update({ where: { id: r.id }, data: { fullDescription: data[String(r.id)].fullDescription } }); n++; }
console.log(`Done. Rewrote ${n}.`);
await prisma.$disconnect();
