// Bring-your-own-key support for static hosting (e.g. GitHub Pages), where no
// server-side proxy exists. The key is stored only in the visitor's own browser
// (localStorage) and sent directly to the Anthropic API from the browser using
// the anthropic-dangerous-direct-browser-access header. It is never transmitted
// anywhere except to api.anthropic.com.

const KEY = 'trial-by-argument-api-key';

export function getApiKey() {
  try {
    return localStorage.getItem(KEY) || '';
  } catch (e) {
    return '';
  }
}

export function setApiKey(value) {
  try {
    if (value && value.trim()) localStorage.setItem(KEY, value.trim());
    else localStorage.removeItem(KEY);
  } catch (e) {
    /* storage unavailable */
  }
}

export function clearApiKey() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    /* ignore */
  }
}

export function hasApiKey() {
  return !!getApiKey();
}
