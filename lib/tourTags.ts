// Topic tags for the city listing filter chips, derived from the tour title.
// Order here is display priority when counts tie. A tag only shows on a city
// page when at least MIN_TAG_COUNT tours carry it, so small cities stay clean.
export const MIN_TAG_COUNT = 4;

const RULES: [string, string[]][] = [
  ['Mount Batur', ['batur']],
  ['Waterfalls', ['waterfall', 'tibumana', 'tegenungan', 'kanto lampo', 'sekumpul', 'tukad cepung', 'nungnung', 'banyumala', 'gitgit']],
  ['Rice terraces', ['rice terrace', 'rice field', 'tegalalang', 'tegallalang', 'jatiluwih']],
  ['Temples', ['temple', 'tirta empul', 'lempuyang', 'besakih', 'tanah lot', 'ulun danu', 'gate of heaven', 'gates of heaven']],
  ['ATV & rafting', ['atv', 'quad', 'rafting', 'buggy', 'tubing', 'dirt bike']],
  ['Snorkelling & diving', ['snorkel', 'diving', 'dive', 'manta', 'scuba', 'sea walk']],
  ['Nusa Penida', ['penida', 'kelingking', 'diamond beach', 'broken beach']],
  ['Uluwatu & Kecak', ['uluwatu', 'kecak', 'fire dance']],
  ['Surf', ['surf']],
  ['Swings & photo spots', ['swing', 'instagram', 'photo', 'photoshoot']],
  ['Cooking & food', ['cooking', 'food', 'culinary', 'market', 'dinner', 'tasting', 'coffee']],
  ['Spa & wellness', ['spa', 'massage', 'yoga', 'wellness', 'healing', 'retreat', 'sound', 'meditation', 'flower bath']],
  ['Classes & crafts', ['class', 'workshop', 'jewelry', 'jewellery', 'silver', 'carving', 'batik', 'painting', 'pottery', 'craft']],
  ['Monkey Forest', ['monkey']],
  ['East Bali', ['sidemen', 'tirta gangga', 'amed', 'tulamben', 'east bali', 'candidasa', 'taman ujung']],
  ['North Bali', ['north bali', 'munduk', 'lovina', 'dolphin', 'bedugul', 'handara', 'wanagiri', 'twin lakes']],
  ['Beach clubs & sunsets', ['beach club', 'daybed', 'sunset', 'jimbaran', 'pool']],
  ['Private day tours', ['private', 'customiz', 'customis', 'full-day', 'full day', 'highlights']],
  ['Transfers & drivers', ['transfer', 'airport', 'driver', 'charter', 'fast boat', 'shuttle']],
  // Japan
  ['Mount Fuji', ['fuji', 'kawaguchiko', 'hakone']],
  ['Food tours', ['food tour', 'street food', 'izakaya', 'ramen', 'sushi', 'sake', 'tsukiji', 'kuromon', 'nishiki', 'wagyu', 'okonomiyaki', 'yakitori', 'bar hopping', 'dining']],
  ['Kimono & tea ceremony', ['kimono', 'tea ceremony', 'yukata', 'geisha', 'maiko', 'gion']],
  ['Samurai & ninja', ['samurai', 'ninja', 'sword', 'kendo', 'katana', 'archery', 'kyudo']],
  ['Anime & pop culture', ['anime', 'manga', 'akihabara', 'otaku', 'pokemon', 'ghibli', 'maid cafe', 'cosplay', 'game']],
  ['Onsen & ryokan', ['onsen', 'hot spring', 'ryokan', 'sento', 'bath']],
  ['Go-karting & driving', ['go-kart', 'go kart', 'gokart', 'kart', 'drift', 'jdm']],
  ['Theme parks', ['disney', 'universal', 'usj', 'nintendo', 'theme park', 'fuji-q', 'nagashima']],
  ['Shrines & temples', ['shrine', 'inari', 'torii', 'todai', 'kinkaku', 'kiyomizu', 'buddha', 'nikko', 'koyasan', 'zen', 'meditation']],
  ['Day trips by train', ['bullet train', 'shinkansen', 'day trip from', 'kamakura', 'nara from', 'kobe', 'himeji', 'miyajima', 'hiroshima from', 'kyoto from', 'osaka from']],
  ['Sumo & shows', ['sumo', 'kabuki', 'baseball', 'show', 'cabaret', 'concert', 'theatre', 'theater']],
  ['Cherry blossom & seasons', ['cherry', 'sakura', 'autumn', 'koyo', 'illumination', 'snow monkey', 'wisteria', 'hydrangea', 'ski', 'snow']],
  ['Hokkaido nature', ['otaru', 'noboribetsu', 'lake toya', 'furano', 'biei', 'niseko', 'shikotsu', 'hakodate', 'asahiyama']],
  ['Trekking & cycling', ['trek', 'hike', 'hiking', 'cycling', 'bike', 'e-bike', 'ridge walk', 'campuhan']],
  ['Multi-day', ['2-day', '3-day', '4-day', '2 day', '3 day', 'days ', 'night stay', '2d1n']],
  ['Wildlife & parks', ['zoo', 'safari', 'elephant', 'bird', 'butterfly', 'turtle', 'horse']],
  // Thailand
  ['Islands & boat trips', ['phi phi', 'james bond', 'phang nga', 'similan', 'coral island', 'racha', 'hong island', '4 islands', 'four islands', 'koh larn', 'ko larn', 'lanta', 'speedboat', 'longtail', 'long-tail', 'catamaran', 'island hopping', 'yacht']],
  ['Floating & night markets', ['floating market', 'damnoen', 'maeklong', 'railway market', 'amphawa', 'night market', 'chatuchak', 'train market']],
  ['Ayutthaya & day trips', ['ayutthaya', 'kanchanaburi', 'river kwai', 'erawan', 'khao yai', 'hua hin', 'chiang rai', 'white temple', 'golden triangle', 'doi inthanon', 'khao sok', 'khao lak']],
  ['Elephants & wildlife', ['elephant', 'sanctuary', 'wildlife', 'gibbon', 'safari']],
  ['Muay Thai & shows', ['muay thai', 'thai boxing', 'cabaret', 'simon', 'tiffany', 'alcazar', 'siam niramit', 'show']],
  ['Temples & Grand Palace', ['grand palace', 'wat ', 'temple', 'doi suthep', 'big buddha', 'sanctuary of truth']],
  ['Cooking classes', ['cooking', 'cook ', 'culinary']],
  ['Spa & massage', ['spa', 'massage', 'wellness']],
  ['Ziplines & adventure', ['zipline', 'zip line', 'atv', 'rafting', 'trek', 'hike', 'kayak', 'canoe', 'rock climbing', 'bungee', 'jet ski', 'parasail']],
  ['Old town & walking', ['old town', 'walking tour', 'chinatown', 'yaowarat', 'tuk tuk', 'tuk-tuk', 'bike tour', 'cycling']],
];

export function tagsForTitle(title: string): string[] {
  const t = (title || '').toLowerCase();
  const out: string[] = [];
  for (const [tag, keys] of RULES) {
    if (keys.some((k) => t.includes(k))) out.push(tag);
  }
  return out;
}

/** Tags worth showing for a list of tours: [tag, count], most common first. */
export function tagCounts(tours: { title: string }[]): [string, number][] {
  const counts = new Map<string, number>();
  for (const tour of tours) for (const tag of tagsForTitle(tour.title)) counts.set(tag, (counts.get(tag) || 0) + 1);
  return [...counts.entries()].filter(([, n]) => n >= MIN_TAG_COUNT).sort((a, b) => b[1] - a[1]);
}
