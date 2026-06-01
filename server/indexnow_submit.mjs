// Submit URLs to IndexNow (Bing + Yandex). Free, instant, unlimited.
// Google does NOT use IndexNow, but your sitemap already auto-feeds Google.
//
// Usage:
//   node indexnow_submit.mjs                 -> submit ALL URLs from the live sitemap
//   node indexnow_submit.mjs <url> [url...]  -> submit specific URLs (e.g. new tours)
//   node indexnow_submit.mjs --dry           -> show what would be submitted, send nothing
//
// Setup: the key file public/<KEY>.txt must be deployed and reachable at
//   https://www.asiabylocals.com/<KEY>.txt   (IndexNow verifies ownership via it)

const KEY = '5eff5d82ad212f5e420f3656d19732b0';
const HOST = 'www.asiabylocals.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const explicitUrls = args.filter((a) => a.startsWith('http'));

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submitBatch(urlList) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // IndexNow returns 200 or 202 on success; 422/403 indicate key/host problems.
  return res.status;
}

async function main() {
  const urls = explicitUrls.length ? explicitUrls : await urlsFromSitemap();
  console.log(`URLs to submit: ${urls.length}`);
  urls.slice(0, 8).forEach((u) => console.log('  ' + u));
  if (urls.length > 8) console.log(`  ...and ${urls.length - 8} more`);

  // Verify the key file is reachable before submitting (the #1 cause of silent failure)
  const keyCheck = await fetch(KEY_LOCATION).then((r) => r.status).catch(() => 'ERR');
  console.log(`\nKey file ${KEY_LOCATION} -> HTTP ${keyCheck}`);
  if (keyCheck !== 200) {
    console.log('⚠️  Key file not reachable (deploy public/<KEY>.txt first). IndexNow will reject submissions until it is.');
  }

  if (DRY) {
    console.log('\n--dry: nothing submitted.');
    return;
  }

  // IndexNow allows up to 10,000 URLs per request; batch to be safe.
  const BATCH = 5000;
  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH);
    const status = await submitBatch(batch);
    console.log(`Submitted ${batch.length} URLs -> HTTP ${status} ${status === 200 || status === 202 ? '✓' : '(check key/host)'}`);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
