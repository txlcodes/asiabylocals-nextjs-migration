/**
 * Cloudflare Worker — Razorpay API proxy
 * -------------------------------------------------------------
 * WHY: Razorpay's edge returns HTTP 406 to requests from our Render
 * (US/Oregon) server IP. Requests from a non-blocked origin succeed.
 * This Worker forwards Razorpay API calls from a Cloudflare IP, so the
 * 406 block on the origin server no longer applies.
 *
 * The backend calls:  POST https://<worker-url>/v1/orders
 * The Worker forwards: POST https://api.razorpay.com/v1/orders
 * (passing through the Authorization: Basic <key:secret> header).
 *
 * SECURITY: protected by a shared secret so it is not an open relay.
 * Set PROXY_SECRET as a Worker variable; the backend sends the same
 * value in the `x-proxy-secret` header.
 *
 * DEPLOY (no CLI needed):
 *   1. Cloudflare dashboard → Workers & Pages → Create → Worker.
 *   2. Replace the default code with this file's contents → Deploy.
 *   3. Settings → Variables → add PROXY_SECRET = <a long random string>.
 *   4. Copy the Worker URL (e.g. https://razorpay-proxy.<you>.workers.dev).
 */

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Only POST allowed', { status: 405 });
    }

    // Shared-secret check — reject anything that isn't our backend.
    if (!env.PROXY_SECRET || request.headers.get('x-proxy-secret') !== env.PROXY_SECRET) {
      return new Response('Forbidden', { status: 403 });
    }

    const url = new URL(request.url);
    // Only allow forwarding to the Razorpay v1 API surface.
    if (!url.pathname.startsWith('/v1/')) {
      return new Response('Not found', { status: 404 });
    }

    const target = 'https://api.razorpay.com' + url.pathname + url.search;
    const body = await request.text();

    let upstream;
    try {
      upstream = await fetch(target, {
        method: 'POST',
        headers: {
          'Authorization': request.headers.get('authorization') || '',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body,
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: { description: 'Proxy upstream fetch failed: ' + err.message } }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const respBody = await upstream.text();
    return new Response(respBody, {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
