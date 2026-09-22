import LangLinks from '@/components/LangLinks';
// Literal /es folder: Next.js forbids [lang] next to [country], so each language gets its own folder.
export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es"><LangLinks lang="es" />{children}</div>;
}
