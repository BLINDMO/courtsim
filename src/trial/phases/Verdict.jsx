import React, { useState, useEffect } from 'react';
import { Scale, FileText, RotateCcw, Repeat, Folder } from 'lucide-react';
import { callClaude, extractJSON } from '../../api.js';
import { jurySystem, juryUser } from '../prompts.js';
import { Overlay, CloseButton, CourtError } from '../../components/ui.jsx';

const FLAVOR = [
  'The jury is reviewing the evidence…',
  'Jurors are discussing the key arguments…',
  'The foreperson is tallying the votes…',
  'A unanimous decision is being confirmed…',
];

function Jurors() {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
      {Array.from({ length: 12 }).map((_, i) => (
        <svg
          key={i}
          width="34"
          height="40"
          viewBox="0 0 34 40"
          className="juror-pulse"
          style={{ animationDelay: `${(i % 6) * 0.18}s`, color: 'var(--gold)' }}
        >
          <circle cx="17" cy="11" r="8" fill="currentColor" />
          <path d="M3 40 Q3 22 17 22 Q31 22 31 40 Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

function ScoreBar({ score }) {
  const s = Math.max(0, Math.min(100, score || 0));
  const color = s >= 70 ? 'var(--teal)' : s >= 45 ? 'var(--gold)' : 'var(--crimson)';
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="font-ui text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
          Argument Strength
        </span>
        <span className="font-display text-lg" style={{ color }}>
          {s}
        </span>
      </div>
      <div className="h-3 w-full" style={{ background: 'var(--bg-void)', border: '1px solid var(--border-dim)' }}>
        <div className="h-full anim-bar" style={{ width: `${s}%`, background: color }} />
      </div>
    </div>
  );
}

function CountReveal({ count, delay }) {
  const guilty = /^guilty/i.test(count.verdict);
  const color = guilty ? 'var(--verdict-guilty)' : 'var(--verdict-not)';
  return (
    <div className="text-center anim-fade" style={{ animationDelay: `${delay}ms` }}>
      <div className="font-ui text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
        Count {count.count}: {count.charge}
      </div>
      <div className="font-display text-3xl sm:text-4xl my-1 anim-stamp" style={{ color, animationDelay: `${delay + 150}ms` }}>
        {count.verdict.toUpperCase()}
      </div>
      {count.votes && (
        <div className="font-record text-[12px]" style={{ color: 'var(--text-dim)' }}>
          Jury vote: {count.votes}
        </div>
      )}
    </div>
  );
}

function fallbackVerdict(caseData, text) {
  return {
    counts: caseData.charges.map((ch) => ({
      count: ch.count,
      charge: ch.charge,
      verdict: 'NOT GUILTY',
      votes: '—',
    })),
    forepersonStatement:
      text && text !== '__ERROR__'
        ? text.slice(0, 600)
        : 'After deliberation, the jury was unable to reach a clear consensus and returns its findings as recorded.',
    score: 50,
    whatWorked: ['You completed the trial and presented your case.'],
    whatHurt: ['The jury could not fully parse the deliberation transcript.'],
    turningPoints: ['The strength of the closing arguments.'],
    _narrative: text && text !== '__ERROR__' ? text : null,
  };
}

function TranscriptModal({ caseData, side, state, onClose }) {
  const t = state.transcript;
  const allEvidence = [...caseData.evidence.prosecution, ...caseData.evidence.defense];
  return (
    <Overlay onClose={onClose} wide>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl" style={{ color: 'var(--gold)' }}>
            Full Trial Transcript
          </h3>
          <CloseButton onClick={onClose} />
        </div>
        <div className="space-y-5 font-body text-[14px]" style={{ color: 'var(--text-secondary)' }}>
          <section>
            <h4 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--crimson)' }}>
              Pretrial Motions
            </h4>
            {(t.motionsFiled || []).length === 0 && <p className="italic">No motions filed.</p>}
            {(t.motionsFiled || []).map((m) => (
              <div key={m.motionId} className="mb-2">
                <div style={{ color: 'var(--text-primary)' }}>
                  {m.motionTitle} — <span style={{ color: m.outcome === 'GRANTED' ? 'var(--teal)' : 'var(--crimson)' }}>{m.outcome}</span>
                </div>
                <div className="text-[13px] italic">Your argument: {m.userArgument}</div>
                <div className="text-[13px]">Ruling: {m.judgeRuling}</div>
              </div>
            ))}
          </section>

          <section>
            <h4 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
              Opening Statements
            </h4>
            <p><b style={{ color: 'var(--text-primary)' }}>Prosecution:</b> {t.openings.prosecution || '—'}</p>
            <p className="mt-2"><b style={{ color: 'var(--text-primary)' }}>Defense:</b> {t.openings.defense || '—'}</p>
          </section>

          <section>
            <h4 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--teal)' }}>
              Witness Examination
            </h4>
            {(t.examinations || []).map((ex) => (
              <div key={ex.witnessId} className="mb-3">
                <div style={{ color: 'var(--text-primary)' }}>{ex.witnessName} ({ex.side})</div>
                {[...(ex.direct || []), ...(ex.cross || [])].map((qa, i) => (
                  <div key={i} className="ml-2 text-[13px]">
                    Q: {qa.q}<br />A: {qa.struck ? <s>{qa.a}</s> : qa.a}
                  </div>
                ))}
                {ex.opposingSummary && <div className="ml-2 text-[13px] italic mt-1">Opposing: {ex.opposingSummary}</div>}
              </div>
            ))}
          </section>

          <section>
            <h4 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
              Closing Arguments
            </h4>
            <p><b style={{ color: 'var(--text-primary)' }}>Prosecution:</b> {t.closings.prosecution || '—'}</p>
            <p className="mt-2"><b style={{ color: 'var(--text-primary)' }}>Defense:</b> {t.closings.defense || '—'}</p>
          </section>
        </div>
      </div>
    </Overlay>
  );
}

export default function Verdict({ caseData, side, state, patch, addRecord, onRetrySame, onTryOpposite, onNewCase }) {
  const [phase, setPhase] = useState(state.verdict ? 'reveal' : 'deliberating'); // deliberating | reveal | error
  const [flavorIdx, setFlavorIdx] = useState(0);
  const [verdict, setVerdict] = useState(state.verdict || null);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    if (state.verdict) return;
    let cancelled = false;
    const flavorTimer = setInterval(() => setFlavorIdx((i) => (i + 1) % FLAVOR.length), 1800);
    const start = Date.now();

    async function deliberate() {
      const text = await callClaude(
        jurySystem(caseData, side, state.admittedEvidence || [], state.suppressedEvidence || []),
        juryUser(caseData, state.transcript, side),
        1000
      );
      const parsed = extractJSON(text);
      const result = parsed && parsed.counts ? parsed : fallbackVerdict(caseData, text);
      // enforce minimum 4s drama
      const elapsed = Date.now() - start;
      const wait = Math.max(0, 4000 - elapsed);
      setTimeout(() => {
        if (cancelled) return;
        setVerdict(result);
        patch({ verdict: result, completedAt: Date.now() });
        addRecord('The jury has rendered its verdict.');
        setPhase('reveal');
      }, wait);
    }
    deliberate();
    return () => {
      cancelled = true;
      clearInterval(flavorTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'deliberating') {
    return (
      <div className="void-grain fixed inset-0 z-[90] flex flex-col items-center justify-center px-6 anim-fade">
        <Scale size={40} className="shimmer mb-6" style={{ color: 'var(--gold)' }} />
        <Jurors />
        <p className="font-display text-xl mt-8 shimmer" style={{ color: 'var(--gold)' }}>
          {FLAVOR[flavorIdx]}
        </p>
        <p className="font-body italic mt-2" style={{ color: 'var(--text-secondary)' }}>
          The jury is deliberating.
        </p>
      </div>
    );
  }

  if (!verdict) {
    return (
      <div className="p-6">
        <CourtError onRetry={() => window.location.reload()} />
      </div>
    );
  }

  return (
    <div className="void-grain fixed inset-0 z-[90] overflow-y-auto anim-fade">
      <div className="max-w-3xl mx-auto px-5 py-10 text-center">
        <h1 className="font-display text-4xl sm:text-5xl tracking-[0.2em] anim-scale" style={{ color: 'var(--gold)' }}>
          ALL RISE
        </h1>
        <p className="font-body italic mt-2 mb-1" style={{ color: 'var(--text-secondary)' }}>
          The jury has reached a verdict.
        </p>
        <p className="font-ui text-[11px] uppercase tracking-widest mb-8" style={{ color: 'var(--text-dim)' }}>
          {caseData.title} — {caseData.jurisdiction}
        </p>

        <div className="space-y-7 mb-9">
          {verdict.counts.map((c, i) => (
            <CountReveal key={c.count} count={c} delay={400 + i * 500} />
          ))}
        </div>

        <div className="panel p-5 text-left mb-6 anim-fade" style={{ animationDelay: '900ms' }}>
          <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
            Foreperson's Statement
          </h3>
          <p className="font-body text-[16px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {verdict.forepersonStatement}
          </p>
        </div>

        {/* Score card */}
        <div className="panel p-5 text-left mb-7 anim-fade" style={{ animationDelay: '1100ms' }}>
          <ScoreBar score={verdict.score} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            <div>
              <h4 className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--teal)' }}>
                What worked for you
              </h4>
              <ul className="space-y-1">
                {(verdict.whatWorked || []).map((w, i) => (
                  <li key={i} className="font-body text-[13px] flex gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--teal)' }}>+</span> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--crimson)' }}>
                What hurt your case
              </h4>
              <ul className="space-y-1">
                {(verdict.whatHurt || []).map((w, i) => (
                  <li key={i} className="font-body text-[13px] flex gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--crimson)' }}>−</span> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
                Key turning points
              </h4>
              <ul className="space-y-1">
                {(verdict.turningPoints || []).map((w, i) => (
                  <li key={i} className="font-body text-[13px] flex gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--gold)' }}>◆</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 anim-fade" style={{ animationDelay: '1300ms' }}>
          <button onClick={() => setShowTranscript(true)} className="btn-ghost px-4 py-2.5 text-[12px] flex items-center gap-1.5">
            <FileText size={14} /> Review Transcript
          </button>
          <button onClick={onRetrySame} className="btn-ghost px-4 py-2.5 text-[12px] flex items-center gap-1.5">
            <RotateCcw size={14} /> Try Again — Same Case
          </button>
          <button onClick={onTryOpposite} className="btn-ghost px-4 py-2.5 text-[12px] flex items-center gap-1.5">
            <Repeat size={14} /> Try Opposite Side
          </button>
          <button onClick={onNewCase} className="btn-gold px-4 py-2.5 text-[12px] flex items-center gap-1.5">
            <Folder size={14} /> New Case
          </button>
        </div>
      </div>

      {showTranscript && (
        <TranscriptModal caseData={caseData} side={side} state={state} onClose={() => setShowTranscript(false)} />
      )}
    </div>
  );
}
