# Trial By Argument

**A high-fidelity criminal trial simulator.** Argue real felony cases as prosecution or
defense across five courtroom phases — pretrial motions, opening statements, witness
examination, closing arguments, and a jury verdict — against an AI judge, AI opposing
counsel, AI witnesses, and an AI jury.

Built with React + Vite, styled in the "Mahogany Courtroom" aesthetic (Tailwind +
custom CSS), with `lucide-react` icons. State is local (`useState`/`useReducer`) and trial
progress is saved to `localStorage` so you can resume between sessions.

## Gameplay

1. **Browse** 20 hand-authored high-felony cases (murder, fraud, trafficking, RICO,
   arson, and more), filterable by crime type, complexity, and side favorability.
2. **Review** a case: backstory, charges, evidence exhibits, witnesses, and the pretrial
   motions you can file.
3. **Choose your side** — prosecution or defense — each with its own theory, advantages,
   challenges, and difficulty rating.
4. **Run the trial** through five phases:
   - **Pretrial Motions** — write legal arguments; the judge rules on their merit. Granted
     exclusionary motions suppress evidence from your locker.
   - **Opening Statements** — address the jury; AI opposing counsel responds.
   - **Witness Examination** — conduct direct/cross of each witness (AI witnesses answer in
     character), with a live `⚡ OBJECT` system (hearsay / relevance / leading / speculation)
     ruled on by the judge — a sustained objection strikes the last answer.
   - **Closing Arguments** — a trial-summary cheat sheet, then your closing vs. the AI's.
   - **Jury Deliberation & Verdict** — the AI jury weighs the full transcript and returns a
     per-count verdict, a foreperson's statement, and a scorecard of what worked, what hurt,
     and the turning points.

## AI integration

The app talks to the Anthropic Messages API through `src/api.js`, using
`claude-haiku-4-5-20251001` to keep cost minimal (≈8–12 calls per full trial). All AI
responses are cached in the trial state so the same content is never re-requested.

There are two transports, chosen automatically:

- **Platform** — a direct `fetch` to `api.anthropic.com`. The Claude artifact/host platform
  intercepts this and injects authentication, so no API key is needed.
- **Proxy** — a same-origin `POST /api/messages` handled by the bundled server middleware
  (`server/proxy-middleware.js`), which adds your `ANTHROPIC_API_KEY` **server-side**. This is
  what makes the app work **outside the platform**. The browser never sees the key.

On the platform the direct call is used; on `localhost` (or with `VITE_FORCE_PROXY=true`) the
proxy is used. The first working transport is remembered for the session.

## Run locally (standalone, outside the platform)

```bash
npm install
cp .env.example .env          # then put your ANTHROPIC_API_KEY in .env

npm run dev                   # dev server with proxy at http://localhost:5173
# — or —
npm run build && npm start    # production build served by server.js (http://localhost:4173)
npm run preview               # preview the build (also proxies /api/messages)
```

The proxy reads `ANTHROPIC_API_KEY` from the environment or a local `.env` file. Without a key
the AI calls return a graceful "Court Reporter Technical Difficulty" message.

The app ships an inline PWA manifest (with a gavel icon) so it can be installed on mobile.

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy-pages.yml` builds the app and publishes it to
GitHub Pages on every push to this branch (and `main`). The Vite `base` is set to
`/courtsim/` for Pages builds.

Once Pages is enabled for the repo (the workflow attempts to enable it automatically; if
that is blocked, set **Settings → Pages → Source: GitHub Actions** once), the site is live at:

> **https://blindmo.github.io/courtsim/**

**AI on the live site:** GitHub Pages is static and cannot run the proxy, so the deployed
app uses **bring-your-own-key** mode — click **Set API Key** on the home screen and paste an
Anthropic API key. The key is stored only in your browser and sent directly to Anthropic; it
never touches any other server. Without a key the UI is fully browsable and AI responses show a
graceful "Court Reporter Technical Difficulty" message.

## Project structure

```
server.js             Standalone production server (static dist/ + proxy)
server/
  proxy-middleware.js Same-origin Anthropic proxy (injects the key server-side)
src/
  api.js              Anthropic API client (platform + proxy transports)
  cases.js            All 20 fully-authored cases
  glossary.js         Plain-English legal-concept tooltips
  storage.js          localStorage save/load
  pwa.js              Inline web-app manifest + icons
  components/ui.jsx   Shared UI primitives (scales, badges, exhibits, overlays…)
  screens/            Home, Browse, CaseDetail, SideSelect
  trial/
    prompts.js        System/user prompt builders + ruling/JSON parsers
    Trial.jsx         Persistent trial-room shell (stepper, sidebars, autosave)
    phases/           Pretrial, Opening, Examination, Closing, Verdict
  App.jsx             Screen routing + trial lifecycle
```
