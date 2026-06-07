// API-key / provider storage for use outside the Claude platform (e.g. the public
// GitHub Pages build). Everything is stored ONLY in the visitor's own browser
// (localStorage) and sent directly to the chosen provider — never anywhere else.
//
// Supported providers:
//   - 'anthropic' : Claude (Messages API). Key from console.anthropic.com.
//   - 'groq'      : Llama 3.3 70B etc. via Groq's free tier. Key from console.groq.com.
//
// On the Claude platform/artifact, NO key is needed — auth is injected there.

const PROVIDER_KEY = 'trial-by-argument-provider';
const keyName = (p) => `trial-by-argument-key-${p}`;

export function getProvider() {
  try {
    return localStorage.getItem(PROVIDER_KEY) || 'anthropic';
  } catch (e) {
    return 'anthropic';
  }
}

export function setProvider(provider) {
  try {
    localStorage.setItem(PROVIDER_KEY, provider);
  } catch (e) {
    /* ignore */
  }
}

export function getKey(provider) {
  const p = provider || getProvider();
  try {
    return localStorage.getItem(keyName(p)) || '';
  } catch (e) {
    return '';
  }
}

export function setKey(provider, value) {
  try {
    if (value && value.trim()) localStorage.setItem(keyName(provider), value.trim());
    else localStorage.removeItem(keyName(provider));
  } catch (e) {
    /* ignore */
  }
}

export function hasAnyKey() {
  return !!getKey('anthropic') || !!getKey('groq');
}

// Backwards-compatible helpers (Anthropic).
export function getApiKey() {
  return getKey('anthropic');
}
export function hasApiKey() {
  return hasAnyKey();
}
