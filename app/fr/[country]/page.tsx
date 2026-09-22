import CountryPage, { generateMetadata as genMeta } from '@/app/[country]/page';
import type { Metadata } from 'next';
export const revalidate = 60;
type P = { params: Promise<{ country: string }> };
const withLang = async (params: P['params']) => Promise.resolve({ ...(await params), lang: 'fr' });
export async function generateMetadata({ params }: P): Promise<Metadata> { return genMeta({ params: withLang(params) } as any); }
export default async function Page({ params }: P) { return CountryPage({ params: withLang(params) } as any); }
