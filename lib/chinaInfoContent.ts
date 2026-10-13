// China authority pages dispatcher (2026-10). Same pattern as thailandInfoContent.ts:
// combines per-city files and is called from getCityInfoContent's default case.
import type { CityInfoData } from './cityInfoContent';
import { getBeijingInfoContent } from './beijingInfoContent';
import { getShanghaiInfoContent } from './shanghaiInfoContent';

export function getChinaInfoContent(slug: string): CityInfoData | null {
    const beijing = getBeijingInfoContent(slug);
    if (beijing) return beijing;

    const shanghai = getShanghaiInfoContent(slug);
    if (shanghai) return shanghai;

    return null;
}

// Hong Kong is a separate dispatcher (own file, own import below in
// cityInfoContent.ts) since it's not part of mainland China for this
// platform's purposes, but documented here for discoverability.
