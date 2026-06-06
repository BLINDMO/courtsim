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

The app calls the Anthropic Messages API directly via `fetch` (see `src/api.js`), using
`claude-haiku-4-5-20251001` to keep cost minimal (≈8–12 calls per full trial). Authentication
is handled by the host platform — no API key is embedded in the client. All AI responses are
cached in the trial state so the same content is never re-requested.

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

The app ships an inline PWA manifest (with a gavel icon) so it can be installed on mobile.

## Project structure

```
src/
  api.js              Anthropic API client + JSON extraction
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
