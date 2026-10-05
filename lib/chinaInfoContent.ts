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
