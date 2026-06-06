// Anthropic Messages API integration.
// The platform handles authentication — no API key is sent from the client.
// Haiku 4.5 is used for every call to keep total trial cost minimal (8-12 calls/trial).

const MODEL = 'claude-haiku-4-5-20251001';

export async function callClaude(systemPrompt, userMessage, maxTokens = 700) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: maxTokens,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });
    if (!response.ok) {
      return '__ERROR__';
    }
    const data = await response.json();
    const text = data?.content?.[0]?.text;
    return text || 'The court reporter experienced a technical difficulty. Please retry.';
  } catch (err) {
    return '__ERROR__';
  }
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
