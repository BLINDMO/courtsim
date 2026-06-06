import React, { useState, useRef, useEffect, useCallback } from 'react';
import { LogOut, Check, PanelLeft, ScrollText, X } from 'lucide-react';
import { writeSave } from '../storage.js';
import { SideBadge, Overlay, CloseButton } from '../components/ui.jsx';
import Pretrial from './phases/Pretrial.jsx';
import Opening from './phases/Opening.jsx';
import Examination from './phases/Examination.jsx';
import Closing from './phases/Closing.jsx';
import Verdict from './phases/Verdict.jsx';

const PHASES = [
  { key: 'pretrial', label: 'Pretrial' },
  { key: 'opening', label: 'Opening' },
  { key: 'examination', label: 'Examination' },
  { key: 'closing', label: 'Closing' },
  { key: 'verdict', label: 'Verdict' },
];

const PHASE_SUMMARY = {
  pretrial: 'The court has ruled on your pretrial motions. The admissible evidence is now set.',
  opening: 'Both sides have delivered their opening statements to the jury.',
  examination: 'All witnesses have been examined and both sides have rested.',
  closing: 'Closing arguments are complete. The case now goes to the jury.',
};

/* ---------- Evidence Locker ---------- */
function EvidenceLocker({ caseData, side, suppressed, notes, onNotes }) {
  const exhibits = caseData.evidence[side] || [];
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
          Evidence Locker
        </h3>
        <div className="space-y-1.5">
          {exhibits.map((e) => {
            const isSup = suppressed.includes(e.id);
            return (
              <button
                key={e.id}
                onClick={() => setOpen(open === e.id ? null : e.id)}
                className="w-full text-left p-2 panel-dim transition-colors"
                style={{ borderColor: isSup ? 'var(--crimson-dim)' : 'var(--border-dim)' }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-record text-[12px]"
                    style={{ color: isSup ? 'var(--text-dim)' : 'var(--text-primary)', textDecoration: isSup ? 'line-through' : 'none' }}
                  >
                    {e.label}
                  </span>
                  {isSup && (
                    <span className="font-ui text-[8px] font-bold px-1 py-0.5 uppercase tracking-widest" style={{ background: 'var(--crimson)', color: '#fff' }}>
                      Suppressed
                    </span>
                  )}
                </div>
                {open === e.id && (
                  <p className="font-record text-[11px] mt-1.5 leading-relaxed anim-fade" style={{ color: 'var(--text-secondary)' }}>
                    {e.description}
                  </p>
                )}
              </button>
            );
          })}
          {exhibits.length === 0 && (
            <p className="font-body italic text-[13px]" style={{ color: 'var(--text-dim)' }}>
              No exhibits for your side.
            </p>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
          Case Notes
        </h3>
        <textarea
          value={notes}
          onChange={(e) => onNotes(e.target.value)}
          rows={5}
          placeholder="Private notes (saved automatically)…"
          className="w-full p-2 text-[13px] leading-snug"
        />
      </div>
    </div>
  );
}

/* ---------- Court Record ---------- */
function CourtRecord({ record }) {
  return (
    <div>
      <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
        Court Record
      </h3>
      <div className="space-y-2">
        {(record || []).length === 0 && (
          <p className="font-body italic text-[13px]" style={{ color: 'var(--text-dim)' }}>
            Proceedings have not yet begun.
          </p>
        )}
        {(record || []).map((r, i) => (
          <div key={i} className="font-record text-[11px] leading-snug pb-2 border-b" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-dim)' }}>
            {r.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Trial({ caseData, side, initialState, onSaveExit, onNewCase, onRetrySame, onTryOpposite }) {
  const [trialState, setTrialState] = useState(initialState);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [pendingPhase, setPendingPhase] = useState(null);
  const [confirmExit, setConfirmExit] = useState(false);

  const stateRef = useRef(trialState);
  stateRef.current = trialState;

  // Persist on every change.
  useEffect(() => {
    writeSave(trialState);
  }, [trialState]);

  const patch = useCallback((partial) => {
    setTrialState((prev) => ({ ...prev, ...partial }));
  }, []);

  const addRecord = useCallback((text) => {
    setTrialState((prev) => ({
      ...prev,
      record: [...(prev.record || []), { text, ts: Date.now() }],
    }));
  }, []);

  const requestPhase = useCallback((next) => {
    setPendingPhase(next);
  }, []);

  function confirmPhase() {
    const next = pendingPhase;
    setPendingPhase(null);
    setTrialState((prev) => {
      const completed = Array.from(new Set([...(prev.completedPhases || []), prev.phase]));
      return { ...prev, phase: next, completedPhases: completed };
    });
    setLeftOpen(false);
    setRightOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const phaseProps = {
    caseData,
    side,
    state: trialState,
    patch,
    addRecord,
    goToPhase: requestPhase,
  };

  const currentIdx = PHASES.findIndex((p) => p.key === trialState.phase);
  const inExamination = trialState.phase === 'examination';

  const sidebar = (
    <EvidenceLocker
      caseData={caseData}
      side={side}
      suppressed={trialState.suppressedEvidence || []}
      notes={trialState.notes || ''}
      onNotes={(v) => patch({ notes: v })}
    />
  );

  // Verdict takes over the full screen.
  if (trialState.phase === 'verdict') {
    return (
      <Verdict
        {...phaseProps}
        onRetrySame={onRetrySame}
        onTryOpposite={onTryOpposite}
        onNewCase={onNewCase}
      />
    );
  }

  return (
    <div className="chamber-texture min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b" style={{ background: 'var(--bg-void)', borderColor: 'var(--border-brass)' }}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setLeftOpen(true)} className="lg:hidden btn-ghost px-2 py-1.5" aria-label="Evidence">
              <PanelLeft size={16} />
            </button>
            <div className="font-display text-base sm:text-lg truncate max-w-[40vw]" style={{ color: 'var(--text-primary)' }}>
              {caseData.title}
            </div>
            <div className="hidden sm:block ml-1">
              <SideBadge side={side} />
            </div>
            <button onClick={() => setRightOpen(true)} className="lg:hidden btn-ghost px-2 py-1.5 ml-auto" aria-label="Court record">
              <ScrollText size={16} />
            </button>
            <button
              onClick={() => setConfirmExit(true)}
              className="btn-ghost px-3 py-1.5 text-[11px] flex items-center gap-1 lg:ml-auto"
            >
              <LogOut size={14} /> <span className="hidden sm:inline">Save &amp; Exit</span>
            </button>
          </div>

          {/* Phase stepper */}
          <div className="flex items-center gap-1 mt-3 overflow-x-auto">
            {PHASES.map((p, i) => {
              const done = (trialState.completedPhases || []).includes(p.key);
              const active = p.key === trialState.phase;
              return (
                <React.Fragment key={p.key}>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-ui"
                      style={{
                        background: active ? 'var(--gold)' : done ? 'var(--teal-dim)' : 'var(--bg-elevated)',
                        color: active ? '#1a1505' : done ? '#fff' : 'var(--text-dim)',
                        border: `1px solid ${active ? 'var(--gold)' : done ? 'var(--teal)' : 'var(--border-dim)'}`,
                      }}
                    >
                      {done ? <Check size={11} /> : i + 1}
                    </span>
                    <span
                      className="font-ui text-[10px] uppercase tracking-widest"
                      style={{ color: active ? 'var(--gold-bright)' : done ? 'var(--teal)' : 'var(--text-dim)' }}
                    >
                      {p.label}
                    </span>
                  </div>
                  {i < PHASES.length - 1 && (
                    <span className="w-4 h-px shrink-0" style={{ background: i < currentIdx ? 'var(--teal-dim)' : 'var(--border-dim)' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Three-column layout */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex gap-5">
        {/* Left sidebar (desktop) */}
        <aside className="hidden lg:block w-[240px] shrink-0">
          <div className="panel p-4 sticky top-28">{sidebar}</div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {trialState.phase === 'pretrial' && <Pretrial {...phaseProps} />}
          {trialState.phase === 'opening' && <Opening {...phaseProps} />}
          {trialState.phase === 'examination' && <Examination {...phaseProps} />}
          {trialState.phase === 'closing' && <Closing {...phaseProps} />}
        </main>

        {/* Right info panel (desktop) */}
        <aside className="hidden lg:block w-[200px] shrink-0">
          <div className="panel p-4 sticky top-28 max-h-[75vh] overflow-y-auto">
            <CourtRecord record={trialState.record} />
          </div>
        </aside>
      </div>

      {/* Mobile left drawer */}
      {leftOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex" onMouseDown={(e) => e.target === e.currentTarget && setLeftOpen(false)} style={{ background: 'rgba(7,8,13,0.7)' }}>
          <div className="panel w-72 max-w-[85vw] h-full overflow-y-auto p-4 anim-slide">
            <div className="flex justify-end mb-2"><CloseButton onClick={() => setLeftOpen(false)} /></div>
            {sidebar}
          </div>
        </div>
      )}

      {/* Mobile right drawer */}
      {rightOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end" onMouseDown={(e) => e.target === e.currentTarget && setRightOpen(false)} style={{ background: 'rgba(7,8,13,0.7)' }}>
          <div className="panel w-72 max-w-[85vw] h-full overflow-y-auto p-4 anim-slide">
            <div className="flex justify-end mb-2"><CloseButton onClick={() => setRightOpen(false)} /></div>
            <CourtRecord record={trialState.record} />
          </div>
        </div>
      )}

      {/* Phase transition confirmation */}
      {pendingPhase && (
        <Overlay onClose={() => setPendingPhase(null)}>
          <div className="p-6 text-center">
            <h3 className="font-display text-xl mb-2" style={{ color: 'var(--gold)' }}>
              {PHASES.find((p) => p.key === trialState.phase)?.label} Complete
            </h3>
            <p className="font-body text-[15px] mb-5" style={{ color: 'var(--text-secondary)' }}>
              {PHASE_SUMMARY[trialState.phase]}
            </p>
            <div className="flex justify-center gap-3">
              <button onClick={() => setPendingPhase(null)} className="btn-ghost px-4 py-2 text-sm">
                Not Yet
              </button>
              <button onClick={confirmPhase} className="btn-gold px-5 py-2 text-sm">
                Proceed to {PHASES.find((p) => p.key === pendingPhase)?.label}
              </button>
            </div>
          </div>
        </Overlay>
      )}

      {/* Save & exit confirm */}
      {confirmExit && (
        <Overlay onClose={() => setConfirmExit(false)}>
          <div className="p-6 text-center">
            <h3 className="font-display text-xl mb-2" style={{ color: 'var(--gold)' }}>
              Save &amp; Exit
            </h3>
            <p className="font-body text-[15px] mb-5" style={{ color: 'var(--text-secondary)' }}>
              {inExamination
                ? 'A witness examination is in progress. Your progress is saved — you can resume this trial from the home screen.'
                : 'Your trial progress is saved. You can resume from the home screen at any time.'}
            </p>
            <div className="flex justify-center gap-3">
              <button onClick={() => setConfirmExit(false)} className="btn-ghost px-4 py-2 text-sm">
                Stay in Court
              </button>
              <button onClick={onSaveExit} className="btn-gold px-5 py-2 text-sm">
                Save &amp; Exit
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}
