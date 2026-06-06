// Framework-agnostic connect-style middleware that proxies the app's
// `/api/messages` endpoint to the Anthropic Messages API, injecting the API key
// server-side. The browser only ever talks to this same-origin endpoint, so the
// API key is never exposed to the client and there are no CORS issues.
//
// Works as a Vite dev/preview middleware and inside the standalone server.js.

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';

export function anthropicProxy(routePath = '/api/messages') {
  return function (req, res, next) {
    const url = (req.url || '').split('?')[0];
    if (req.method !== 'POST' || url !== routePath) {
      return next ? next() : undefined;
    }

    const key = process.env.ANTHROPIC_API_KEY;
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) req.destroy(); // basic guard
    });
    req.on('end', async () => {
      if (!key) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json');
        res.end(
          JSON.stringify({
            error: 'ANTHROPIC_API_KEY is not set on the server. Add it to your environment or .env file.',
          })
        );
        return;
      }
      try {
        const upstream = await fetch(ANTHROPIC_URL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01',
          },
          body,
        });
        const text = await upstream.text();
        res.statusCode = upstream.status;
        res.setHeader('content-type', 'application/json');
        res.end(text);
      } catch (err) {
        res.statusCode = 502;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({ error: 'Upstream request failed: ' + String(err) }));
      }
    });
    req.on('error', () => {
      res.statusCode = 400;
      res.end();
    });
  };
}
