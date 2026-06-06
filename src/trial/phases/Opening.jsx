import React, { useState } from 'react';
import { Megaphone, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { callClaude } from '../../api.js';
import { counselSystem, openingUser } from '../prompts.js';
import { CourtLoading, CourtError, SectionTitle, InfoTip } from '../../components/ui.jsx';

function oppName(caseData, side) {
  const opp = side === 'prosecution' ? 'defense' : 'prosecution';
  return caseData.opposingCounsel[opp];
}

export default function Opening({ caseData, side, state, patch, addRecord, goToPhase }) {
  const oppSide = side === 'prosecution' ? 'defense' : 'prosecution';
  const savedUser = state.transcript.openings[side] || '';
  const savedOpp = state.transcript.openings[oppSide] || '';

  const [draft, setDraft] = useState(savedUser);
  const [tipsOpen, setTipsOpen] = useState(false);
  const [status, setStatus] = useState(savedUser ? 'done' : 'idle'); // idle | loading | done | error

  const len = draft.trim().length;
  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;
  const canDeliver = len >= 120;

  const tips =
    side === 'prosecution'
      ? caseData.prosecutionStrategies
      : caseData.defenseStrategies;

  async function deliver() {
    setStatus('loading');
    const newOpenings = { ...state.transcript.openings, [side]: draft.trim() };
    patch({ transcript: { ...state.transcript, openings: newOpenings } });
    addRecord('You delivered your opening statement.');
    const text = await callClaude(counselSystem(caseData, side), openingUser(), 600);
    if (text === '__ERROR__') {
      setStatus('error');
      return;
    }
    const finalOpenings = { ...newOpenings, [oppSide]: text };
    patch({ transcript: { ...state.transcript, openings: finalOpenings } });
    addRecord(`${oppName(caseData, side)} delivered their opening statement.`);
    setStatus('done');
  }

  const oppText = state.transcript.openings[oppSide] || savedOpp;

  return (
    <div className="anim-fade">
      <SectionTitle icon={Megaphone}>OPENING STATEMENTS</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* User column */}
        <div className="panel p-5" style={{ borderColor: side === 'prosecution' ? 'var(--crimson-dim)' : 'var(--teal-dim)' }}>
          <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
            Your Opening Statement
          </h3>
          <p className="font-body text-[14px] mb-3" style={{ color: 'var(--text-secondary)' }}>
            As {side === 'prosecution' ? 'Prosecution' : 'Defense'}, address the jury directly. Tell
            them what the evidence will show. Do not argue — preview.{' '}
            <InfoTip term="reasonable doubt" />
          </p>

          <button
            onClick={() => setTipsOpen((t) => !t)}
            className="flex items-center gap-1 font-ui text-[11px] uppercase tracking-widest mb-2"
            style={{ color: 'var(--gold)' }}
          >
            {tipsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />} Strategic Tips
          </button>
          {tipsOpen && (
            <ul className="mb-3 space-y-1 anim-fade">
              {tips.slice(0, 3).map((t, i) => (
                <li key={i} className="font-body text-[13px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--gold)' }}>▸</span> {t}
                </li>
              ))}
            </ul>
          )}

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
                rows={9}
                disabled={status === 'loading'}
                placeholder="Members of the jury, the evidence in this case will show…"
                className="w-full p-3 text-[15px] leading-relaxed"
                style={{ minHeight: 200 }}
              />
              <div className="flex justify-between items-center mt-1">
                <span className="font-ui text-[10px]" style={{ color: 'var(--text-dim)' }}>
                  {words} words
                </span>
                <span className="font-ui text-[10px]" style={{ color: len >= 120 ? 'var(--teal)' : 'var(--text-dim)' }}>
                  {len} / 120 characters minimum
                </span>
              </div>
              <div className="flex justify-end mt-3">
                <button onClick={deliver} disabled={!canDeliver || status === 'loading'} className="btn-gold px-5 py-2.5 text-sm">
                  DELIVER OPENING STATEMENT
                </button>
              </div>
            </>
          )}
        </div>

        {/* Opposing column */}
        <div className="panel p-5" style={{ opacity: status === 'done' ? 1 : 0.6 }}>
          <h3 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-secondary)' }}>
            Opposing Counsel — {oppName(caseData, side)}
          </h3>
          {status === 'loading' && (
            <CourtLoading text={`${oppName(caseData, side)} is delivering their opening statement…`} />
          )}
          {status === 'error' && <CourtError onRetry={deliver} />}
          {status === 'done' && oppText && (
            <div className="exhibit p-4 anim-slide" style={{ borderLeft: '4px solid var(--text-dim)' }}>
              <p className="font-record text-[12.5px] leading-relaxed whitespace-pre-wrap">{oppText}</p>
            </div>
          )}
          {status === 'idle' && (
            <p className="font-body italic text-[14px]" style={{ color: 'var(--text-dim)' }}>
              Opposing counsel will respond once you have delivered your opening.
            </p>
          )}
        </div>
      </div>

      {status === 'done' && (
        <div className="flex justify-end pt-5">
          <button onClick={() => goToPhase('examination')} className="btn-gold px-6 py-3 text-sm flex items-center gap-2">
            PROCEED TO WITNESS EXAMINATION <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
