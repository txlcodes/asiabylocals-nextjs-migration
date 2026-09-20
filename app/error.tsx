'use client';
// Route error boundary. Without one, any client exception rendered Next's blank
// "Application error" page. The common case on this site is a stale tab after a
// deploy (we ship several times a day): the old bundle asks for a chunk hash
// that no longer exists -> ChunkLoadError. That is fixed by a reload, so we do
// it once automatically; anything else gets a real page with a way out.
import { useEffect } from 'react';

const isStaleChunk = (e: Error) =>
  /ChunkLoadError|Loading chunk|Loading CSS chunk|dynamically imported module|Failed to fetch/i.test(`${e?.name} ${e?.message}`);

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[route error]', error);
    if (isStaleChunk(error)) {
      const key = 'abl-chunk-reload';
      try {
        const last = Number(sessionStorage.getItem(key) || 0);
        if (Date.now() - last > 60_000) { // one auto-reload per minute, so a real crash cannot loop
          sessionStorage.setItem(key, String(Date.now()));
          window.location.reload();
          return;
        }
      } catch { /* storage blocked: fall through to the manual button */ }
    }
  }, [error]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-black text-[#001A33] mb-3">Something went wrong loading this page</h1>
        <p className="text-gray-600 mb-6">
          This usually happens when the site was updated while your tab was open. Reloading fixes it.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => window.location.reload()} className="px-5 py-3 rounded-xl bg-[#10B981] text-white font-bold">Reload page</button>
          <button onClick={() => reset()} className="px-5 py-3 rounded-xl border border-gray-200 font-bold text-[#001A33]">Try again</button>
          <a href="/" className="px-5 py-3 rounded-xl border border-gray-200 font-bold text-[#001A33]">Home</a>
        </div>
      </div>
    </main>
  );
}
