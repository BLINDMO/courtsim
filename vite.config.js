import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { anthropicProxy } from './server/proxy-middleware.js';

// Adds the Anthropic proxy middleware to both the dev server and the
// `vite preview` server so `/api/messages` works locally with an API key.
function anthropicProxyPlugin() {
  return {
    name: 'anthropic-proxy',
    configureServer(server) {
      server.middlewares.use(anthropicProxy());
    },
    configurePreviewServer(server) {
      server.middlewares.use(anthropicProxy());
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load all env vars (including unprefixed ANTHROPIC_API_KEY) from .env files
  // and expose the key to the server-side middleware via process.env.
  const env = loadEnv(mode, process.cwd(), '');
  if (env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_API_KEY) {
    process.env.ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY;
  }

  return {
    // On GitHub Pages the app is served from /<repo>/; locally and on the
    // standalone server it is served from root. The Pages workflow sets
    // GITHUB_PAGES=true (and optionally PAGES_BASE to override the repo name).
    base: process.env.GITHUB_PAGES ? process.env.PAGES_BASE || '/courtsim/' : '/',
    plugins: [react(), anthropicProxyPlugin()],
    server: {
      port: 5173,
      host: true,
    },
    preview: {
      port: 4173,
      host: true,
    },
  };
});
