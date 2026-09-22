import CityPage, { generateMetadata as genMeta } from '@/app/[country]/[city]/page';
import type { Metadata } from 'next';
export const revalidate = 60;
type P = { params: Promise<{ country: string; city: string }> };
const withLang = async (params: P['params']) => Promise.resolve({ ...(await params), lang: 'de' });
export async function generateMetadata({ params }: P): Promise<Metadata> { return genMeta({ params: withLang(params) } as any); }
export default async function Page({ params }: P) { return CityPage({ params: withLang(params) } as any); }
