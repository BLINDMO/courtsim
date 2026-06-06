// Standalone production server: serves the built `dist/` and proxies
// `/api/messages` to Anthropic with the server-side API key.
//
//   npm run build && npm start
//
// Requires Node 18+ (for global fetch). Set ANTHROPIC_API_KEY in the environment
// or in a local .env file.

import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { anthropicProxy } from './server/proxy-middleware.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 4173;

// Minimal .env loader (no dependency) so `npm start` picks up a local .env.
(function loadDotEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!existsSync(envPath)) return;
  try {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      const k = m[1];
      let v = m[2].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!(k in process.env)) process.env[k] = v;
    }
  } catch {
    /* ignore */
  }
})();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
};

const proxy = anthropicProxy();

async function serveStatic(req, res) {
  if (!existsSync(DIST)) {
    res.statusCode = 500;
    res.end('dist/ not found — run `npm run build` first.');
    return;
  }
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  let filePath = path.join(DIST, urlPath);
  // Prevent path traversal.
  if (!filePath.startsWith(DIST)) filePath = path.join(DIST, 'index.html');

  try {
    const s = await stat(filePath).catch(() => null);
    if (!s || s.isDirectory()) filePath = path.join(DIST, 'index.html');
    const data = await readFile(filePath);
    res.statusCode = 200;
    res.setHeader('content-type', MIME[path.extname(filePath)] || 'application/octet-stream');
    res.end(data);
  } catch {
    // SPA fallback
    try {
      const data = await readFile(path.join(DIST, 'index.html'));
      res.statusCode = 200;
      res.setHeader('content-type', 'text/html; charset=utf-8');
      res.end(data);
    } catch {
      res.statusCode = 404;
      res.end('Not found');
    }
  }
}

const server = http.createServer((req, res) => {
  proxy(req, res, () => serveStatic(req, res));
});

server.listen(PORT, () => {
  const hasKey = !!process.env.ANTHROPIC_API_KEY;
  console.log(`Trial By Argument running at http://localhost:${PORT}`);
  console.log(hasKey ? 'ANTHROPIC_API_KEY detected — AI calls enabled.' : 'WARNING: ANTHROPIC_API_KEY not set — AI calls will fail.');
});
