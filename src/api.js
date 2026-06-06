// Anthropic Messages API integration.
//
// Two transports are supported, chosen automatically:
//   1. PLATFORM — a direct fetch to api.anthropic.com. The Claude artifact/host
//      platform intercepts this and injects authentication; no API key needed.
//   2. PROXY — a same-origin POST to /api/messages, handled by the bundled
//      server middleware (see server/proxy-middleware.js), which adds the
//      ANTHROPIC_API_KEY server-side. This is what makes the app work OUTSIDE
//      the platform (local dev, `npm run preview`, `npm start`, any host).
//
// The two are tried in order and the first that works is remembered, so there is
// at most one wasted attempt per session. Locally (or with VITE_FORCE_PROXY) the
// proxy is tried first to avoid a guaranteed cross-origin failure.
//
// Haiku 4.5 is used for every call to keep cost minimal (8-12 calls per trial).

const MODEL = 'claude-haiku-4-5-20251001';
const PLATFORM_URL = 'https://api.anthropic.com/v1/messages';
const PROXY_URL = import.meta.env.VITE_PROXY_PATH || '/api/messages';

function isLocalHost() {
  if (typeof location === 'undefined') return false;
  return /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/.test(location.hostname);
}

// 'platform' | 'proxy' | null (unknown — try both)
let preferred = null;
if (import.meta.env.VITE_FORCE_PROXY === 'true') preferred = 'proxy';
else if (import.meta.env.VITE_FORCE_PLATFORM === 'true') preferred = 'platform';
else if (isLocalHost()) preferred = 'proxy';

async function tryEndpoint(mode, payload) {
  const url = mode === 'platform' ? PLATFORM_URL : PROXY_URL;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) return { ok: false };
  const data = await response.json();
  const text = data?.content?.[0]?.text;
  if (!text) return { ok: false };
  return { ok: true, text };
}

export async function callClaude(systemPrompt, userMessage, maxTokens = 700) {
  const payload = {
    model: MODEL,
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: 'user', content: userMessage }],
  };

  const order =
    preferred === 'proxy'
      ? ['proxy', 'platform']
      : preferred === 'platform'
      ? ['platform', 'proxy']
      : ['platform', 'proxy'];

  for (const mode of order) {
    try {
      const result = await tryEndpoint(mode, payload);
      if (result.ok) {
        preferred = mode; // remember the working transport
        return result.text;
      }
    } catch (err) {
      // network/CORS failure — fall through to the next transport
    }
  }
  return '__ERROR__';
}

// Attempt to extract a JSON object from a model response that may contain
// stray prose or markdown fences. Returns null if nothing parseable is found.
export function extractJSON(text) {
  if (!text || text === '__ERROR__') return null;
  let cleaned = text.trim();
  // Strip ```json ... ``` fences if present.
  cleaned = cleaned.replace(/```(?:json)?/gi, '').trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  let candidate = cleaned.slice(start, end + 1);
  try {
    return JSON.parse(candidate);
  } catch (e) {
    // Try to repair common smart-quote / trailing-comma issues.
    try {
      candidate = candidate
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/,\s*([}\]])/g, '$1');
      return JSON.parse(candidate);
    } catch (e2) {
      return null;
    }
  }
}
