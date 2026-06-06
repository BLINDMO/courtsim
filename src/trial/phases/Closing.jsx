import React, { useState } from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { callClaude } from '../../api.js';
import { counselSystem, counselName, closingUser } from '../prompts.js';
import { CourtLoading, CourtError, SectionTitle, InfoTip } from '../../components/ui.jsx';

function oppName(caseData, side) {
  const opp = side === 'prosecution' ? 'defense' : 'prosecution';
  return caseData.opposingCounsel[opp];
}

function TrialSummary({ caseData, state }) {
  const motions = state.transcript.motionsFiled || [];
  const granted = motions.filter((m) => m.outcome === 'GRANTED').length;
  const denied = motions.length - granted;
  const allEvidence = [...caseData.evidence.prosecution, ...caseData.evidence.defense];
  const admitted = allEvidence.filter((e) => !(state.suppressedEvidence || []).includes(e.id));
  const exams = state.transcript.examinations || [];

  return (
    <div className="panel p-4 mb-5">
      <h3 className="font-ui text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
        Trial Summary — Your Cheat Sheet
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px]">
        <div>
          <div className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-dim)' }}>
            Motions
          </div>
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--teal)' }}>{granted} granted</span>,{' '}
            <span style={{ color: 'var(--crimson)' }}>{denied} denied</span>
          </p>
        </div>
        <div>
          <div className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-dim)' }}>
            Evidence Admitted
          </div>
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            {admitted.map((e) => e.label.replace('Exhibit ', '')).join(', ') || '—'}
          </p>
        </div>
        <div>
          <div className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-dim)' }}>
            Witnesses Examined
          </div>
          <ul className="font-body" style={{ color: 'var(--text-secondary)' }}>
            {exams.map((ex) => (
              <li key={ex.witnessId}>• {ex.witnessName}</li>
            ))}
            {exams.length === 0 && <li>—</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Closing({ caseData, side, state, patch, addRecord, goToPhase }) {
  const oppSide = side === 'prosecution' ? 'defense' : 'prosecution';
  const savedUser = state.transcript.closings[side] || '';
  const [draft, setDraft] = useState(savedUser);
  const [status, setStatus] = useState(savedUser ? 'done' : 'idle');

  const len = draft.trim().length;
  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;
  const canDeliver = len >= 150;
  const oppText = state.transcript.closings[oppSide] || '';

  async function deliver() {
    setStatus('loading');
    const newClosings = { ...state.transcript.closings, [side]: draft.trim() };
    patch({ transcript: { ...state.transcript, closings: newClosings } });
    addRecord('You delivered your closing argument.');
    const text = await callClaude(counselSystem(caseData, side), closingUser(), 700);
    if (text === '__ERROR__') {
      setStatus('error');
      return;
    }
    const finalClosings = { ...newClosings, [oppSide]: text };
    patch({ transcript: { ...state.transcript, closings: finalClosings } });
    addRecord(`${oppName(caseData, side)} delivered their closing argument.`);
    setStatus('done');
  }

  return (
    <div className="anim-fade">
      <SectionTitle icon={Scale}>CLOSING ARGUMENTS</SectionTitle>
      <TrialSummary caseData={caseData} state={state} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="panel p-5" style={{ borderColor: side === 'prosecution' ? 'var(--crimson-dim)' : 'var(--teal-dim)' }}>
          <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
            Your Closing Argument
          </h3>
          <p className="font-body text-[14px] mb-3" style={{ color: 'var(--text-secondary)' }}>
            Now you may argue. Tie the evidence and testimony together and tell the jury what verdict
            to return. <InfoTip term="reasonable doubt" />
          </p>

          {status === 'done' ? (
            <div className="exhibit p-4" style={{ borderLeft: '4px solid var(--gold)' }}>
              <p className="font-record text-[12.5px] leading-relaxed whitespace-pre-wrap">{draft}</p>
            </div>
          ) : (
            <>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && canDeliver && status === 'idle') deliver();
                }}
                rows={10}
                disabled={status === 'loading'}
                placeholder="Members of the jury, you have now heard all the evidence…"
                className="w-full p-3 text-[15px] leading-relaxed"
                style={{ minHeight: 220 }}
              />
              <div className="flex justify-between items-center mt-1">
                <span className="font-ui text-[10px]" style={{ color: 'var(--text-dim)' }}>
                  {words} words
                </span>
                <span className="font-ui text-[10px]" style={{ color: len >= 150 ? 'var(--teal)' : 'var(--text-dim)' }}>
                  {len} / 150 characters minimum
                </span>
              </div>
              <div className="flex justify-end mt-3">
                <button onClick={deliver} disabled={!canDeliver || status === 'loading'} className="btn-gold px-5 py-2.5 text-sm">
                  DELIVER CLOSING ARGUMENT
                </button>
              </div>
            </>
          )}
        </div>

        <div className="panel p-5" style={{ opacity: status === 'done' ? 1 : 0.6 }}>
          <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-secondary)' }}>
            Opposing Counsel — {oppName(caseData, side)}
          </h3>
          {status === 'loading' && <CourtLoading text={`${oppName(caseData, side)} is delivering their closing argument…`} />}
          {status === 'error' && <CourtError onRetry={deliver} />}
          {status === 'done' && oppText && (
            <div className="exhibit p-4 anim-slide" style={{ borderLeft: '4px solid var(--text-dim)' }}>
              <p className="font-record text-[12.5px] leading-relaxed whitespace-pre-wrap">{oppText}</p>
            </div>
          )}
          {status === 'idle' && (
            <p className="font-body italic text-[14px]" style={{ color: 'var(--text-dim)' }}>
              Opposing counsel will respond once you have delivered your closing.
            </p>
          )}
        </div>
      </div>

      {status === 'done' && (
        <div className="flex justify-end pt-5">
          <button onClick={() => goToPhase('verdict')} className="btn-gold px-6 py-3 text-sm flex items-center gap-2">
            SUBMIT TO THE JURY <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
