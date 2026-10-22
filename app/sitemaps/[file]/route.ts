import { BASE_URL, getSitemapChunk, getSitemapChunkCount } from '@/lib/sitemapEntries';

// One chunk of the sitemap, served at /sitemaps/<n>.xml and listed by the index
// at /sitemap.xml (app/sitemap.xml/route.ts). Search Console rejects a single
// sitemap over 50,000 URLs, so the entries are split 10,000 per file.
//
// ⚠️ Without a revalidate window this would be a fully static route: Next would
// build it once per deploy and serve that copy for ever (x-nextjs-cache: HIT on
// every request). Approving 804 Cambodian tours put 187 of them in the old
// sitemap and left 617 invisible to Google until somebody happened to deploy.
// Tours are approved from a script, not from a commit.
export const revalidate = 3600;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(_req: Request, ctx: { params: Promise<{ file: string }> }) {
  const { file } = await ctx.params;
  const m = /^(\d+)\.xml$/.exec(file);
  if (!m) return new Response('Not Found', { status: 404 });
  const index = Number(m[1]);
  if (index >= (await getSitemapChunkCount())) return new Response('Not Found', { status: 404 });

  const entries = await getSitemapChunk(index);
  const urls = entries.map(e => {
    let x = `  <url>\n    <loc>${esc(e.url)}</loc>`;
    const langs = e.alternates?.languages as Record<string, string> | undefined;
    if (langs) {
      for (const [lang, href] of Object.entries(langs)) {
        x += `\n    <xhtml:link rel="alternate" hreflang="${esc(lang)}" href="${esc(href)}" />`;
      }
    }
    if (e.lastModified) x += `\n    <lastmod>${new Date(e.lastModified).toISOString()}</lastmod>`;
    if (e.changeFrequency) x += `\n    <changefreq>${e.changeFrequency}</changefreq>`;
    if (e.priority !== undefined) x += `\n    <priority>${e.priority}</priority>`;
    return x + '\n  </url>';
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
