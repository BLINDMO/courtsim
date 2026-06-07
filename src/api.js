// AI integration with multiple transports, chosen automatically:
//
//   1. PLATFORM  — direct fetch to api.anthropic.com; the Claude artifact/host
//      platform injects authentication (free, uses your Pro). No key needed.
//   2. PROXY     — same-origin POST /api/messages handled by the bundled server
//      (server/proxy-middleware.js); adds ANTHROPIC_API_KEY server-side.
//   3. BYO-KEY   — direct browser call to Anthropic with a key the visitor stored
//      in their own browser (for static hosts).
//   4. GROQ      — direct browser call to Groq's OpenAI-compatible API using a
//      free Groq key the visitor stored. Runs Llama 3.3 70B etc.
//
// On the Claude platform no key is set, so PLATFORM is used (free). On the public
// site the visitor picks a provider + key in the Set API Key panel.
//
// Anthropic calls use Haiku 4.5; Groq uses a strong open model. Both are cheap/free
// and a full trial is only ~8-15 calls (all responses are cached in trial state).

import { getProvider, getKey } from './apikey.js';

const ANTHROPIC_MODEL = 'claude-haiku-4-5-20251001';
const PLATFORM_URL = 'https://api.anthropic.com/v1/messages';
const PROXY_URL = import.meta.env.VITE_PROXY_PATH || '/api/messages';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile';

function isLocalHost() {
  if (typeof location === 'undefined') return false;
  return /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/.test(location.hostname);
}

// Remembered fallback transport for the Anthropic platform/proxy pair.
let preferred = null;
if (import.meta.env.VITE_FORCE_PROXY === 'true') preferred = 'proxy';
else if (import.meta.env.VITE_FORCE_PLATFORM === 'true') preferred = 'platform';
else if (isLocalHost()) preferred = 'proxy';

async function tryEndpoint(mode, system, user, maxTokens, opts) {
  // ----- Groq (OpenAI-compatible chat completions) -----
  if (mode === 'groq') {
    const key = getKey('groq');
    if (!key) return { ok: false };
    const body = {
      model: GROQ_MODEL,
      max_tokens: maxTokens,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    };
    if (opts && opts.json) body.response_format = { type: 'json_object' };
    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify(body),
    });
    if (!res.ok) return { ok: false };
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    return text ? { ok: true, text } : { ok: false };
  }

  // ----- Anthropic (platform / proxy / byo-key) -----
  let url;
  const headers = { 'Content-Type': 'application/json' };
  if (mode === 'byokey') {
    const key = getKey('anthropic');
    if (!key) return { ok: false };
    url = PLATFORM_URL;
    headers['x-api-key'] = key;
    headers['anthropic-version'] = '2023-06-01';
    headers['anthropic-dangerous-direct-browser-access'] = 'true';
  } else {
    url = mode === 'platform' ? PLATFORM_URL : PROXY_URL;
  }
  const body = {
    model: ANTHROPIC_MODEL,
    max_tokens: maxTokens,
    system,
    messages: [{ role: 'user', content: user }],
  };
  const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
  if (!res.ok) return { ok: false };
  const data = await res.json();
  const text = data?.content?.[0]?.text;
  return text ? { ok: true, text } : { ok: false };
}

export async function callClaude(systemPrompt, userMessage, maxTokens = 700, opts = {}) {
  const provider = getProvider();
  const order = [];

  // Visitor-selected provider + key wins (the static-host case).
  if (provider === 'groq' && getKey('groq')) order.push('groq');
  if (getKey('anthropic')) order.push('byokey');
  // Platform/proxy fallbacks (Claude artifact = platform/free; local server = proxy).
  if (preferred === 'proxy') order.push('proxy', 'platform');
  else order.push('platform', 'proxy');

  const seen = new Set();
  for (const mode of order) {
    if (seen.has(mode)) continue;
    seen.add(mode);
    try {
      const result = await tryEndpoint(mode, systemPrompt, userMessage, maxTokens, opts);
      if (result.ok) return result.text;
    } catch (err) {
      // network/CORS failure — fall through to the next transport
    }
  }
  return '__ERROR__';
}

// Attempt to extract a JSON object from a model response that may contain stray
// prose or markdown fences. Returns null if nothing parseable is found.
export function extractJSON(text) {
  if (!text || text === '__ERROR__') return null;
  let cleaned = text.trim();
  cleaned = cleaned.replace(/```(?:json)?/gi, '').trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  let candidate = cleaned.slice(start, end + 1);
  try {
    return JSON.parse(candidate);
  } catch (e) {
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
