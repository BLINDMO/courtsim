import React, { useState, useEffect, useRef } from 'react';
import { Users, ArrowRight, Zap, Send } from 'lucide-react';
import { callClaude } from '../../api.js';
import {
  witnessSystem,
  witnessUser,
  opposingExamSystem,
  opposingExamUser,
  objectionSystem,
  objectionUser,
} from '../prompts.js';
import { SectionTitle, CourtLoading, CourtError, Overlay, CloseButton, InfoTip } from '../../components/ui.jsx';

const MAX_QUESTIONS = 5;
const OBJECTIONS = ['HEARSAY', 'RELEVANCE', 'LEADING', 'SPECULATION'];

function oppCounsel(caseData, side) {
  const opp = side === 'prosecution' ? 'defense' : 'prosecution';
  return caseData.opposingCounsel[opp];
}

function buildQueue(caseData) {
  return [
    ...caseData.witnesses.prosecution.map((w) => ({ ...w, side: 'prosecution' })),
    ...caseData.witnesses.defense.map((w) => ({ ...w, side: 'defense' })),
  ];
}

function WitnessExam({ caseData, side, witness, record, onComplete }) {
  const userMode = witness.side === side ? 'direct' : 'cross'; // user examines own witness on direct, opposing on cross
  const opposingMode = userMode === 'direct' ? 'cross' : 'direct';

  // record: existing examination record for this witness, if returning
  const [qas, setQas] = useState(record?.[userMode] || []);
  const [opposingSummary, setOpposingSummary] = useState(record?.opposingSummary || '');
  const [question, setQuestion] = useState('');
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState(false);

  // For opposing witnesses, AI conducts direct BEFORE user cross.
  const [preLoaded, setPreLoaded] = useState(userMode === 'direct'); // direct mode: no pre-load needed
  const [loadingOpp, setLoadingOpp] = useState(false);
  const [finishing, setFinishing] = useState(false);

  // Objection overlay
  const [objOpen, setObjOpen] = useState(false);
  const [objRuling, setObjRuling] = useState(null); // {type, text, sustained}
  const [objLoading, setObjLoading] = useState(false);

  const inputRef = useRef(null);

  // Pre-load opposing DIRECT for opposing-side witnesses.
  useEffect(() => {
    let cancelled = false;
    if (userMode === 'cross' && !opposingSummary) {
      setLoadingOpp(true);
      callClaude(
        opposingExamSystem(caseData, side),
        opposingExamUser(witness, 'direct'),
        300
      ).then((text) => {
        if (cancelled) return;
        setLoadingOpp(false);
        if (text === '__ERROR__') {
          setOpposingSummary('(Opposing counsel conducted a brief direct examination.)');
        } else {
          setOpposingSummary(text);
        }
        setPreLoaded(true);
      });
    }
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [witness.id]);

  async function ask() {
    const q = question.trim();
    if (!q || asking || qas.length >= MAX_QUESTIONS) return;
    setAsking(true);
    setError(false);
    const text = await callClaude(witnessSystem(caseData, witness), witnessUser(q, userMode), 350);
    if (text === '__ERROR__') {
      setError(true);
      setAsking(false);
      return;
    }
    setQas((prev) => [...prev, { q, a: text, struck: false }]);
    setQuestion('');
    setAsking(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  async function rule(type) {
    setObjLoading(true);
    const last = qas[qas.length - 1];
    const text = await callClaude(
      objectionSystem(caseData),
      objectionUser(type, last?.q || '', last?.a || ''),
      120
    );
    const sustained = /sustained/i.test(text) && !/overruled/i.test(text);
    setObjLoading(false);
    setObjRuling({ type, text: text === '__ERROR__' ? 'Overruled.' : text, sustained });
    if (sustained && last) {
      setQas((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { ...copy[copy.length - 1], struck: true };
        return copy;
      });
    }
  }

  async function endExamination() {
    setFinishing(true);
    let summary = opposingSummary;
    // For own (direct) witnesses, generate the opposing CROSS now.
    if (userMode === 'direct' && !summary) {
      const text = await callClaude(
        opposingExamSystem(caseData, side),
        opposingExamUser(witness, 'cross'),
        300
      );
      summary = text === '__ERROR__' ? '(Opposing counsel conducted a brief cross-examination.)' : text;
      setOpposingSummary(summary);
    }
    onComplete({
      witnessId: witness.id,
      witnessName: witness.name,
      side: witness.side,
      [userMode]: qas,
      opposingSummary: summary,
    });
  }

  const accent = witness.side === 'prosecution' ? 'var(--crimson)' : 'var(--teal)';

  if (userMode === 'cross' && !preLoaded) {
    return <CourtLoading text={`${oppCounsel(caseData, side)} is conducting direct examination of ${witness.name}…`} />;
  }

  return (
    <div className="anim-fade space-y-4">
      {/* Witness profile */}
      <div className="panel p-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>
              {witness.name}
            </div>
            <div className="font-ui text-[11px] uppercase tracking-wide" style={{ color: accent }}>
              {witness.role} — Sworn in and seated
            </div>
          </div>
          <span className="font-ui text-[11px] uppercase tracking-widest px-3 py-1.5" style={{ color: 'var(--gold)', border: '1px solid var(--border-brass)' }}>
            Your {userMode} examination <InfoTip term={userMode === 'direct' ? 'direct examination' : 'cross examination'} />
          </span>
        </div>
        <p className="font-body text-[14px] mt-3 pt-3 border-t" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-dim)' }}>
          <span style={{ color: 'var(--gold)' }}>Expected testimony:</span> {witness.testimony}
        </p>
      </div>

      {/* Opposing direct shown first for cross witnesses */}
      {userMode === 'cross' && opposingSummary && (
        <div className="exhibit p-4" style={{ borderLeft: '4px solid var(--text-dim)' }}>
          <div className="font-record text-[10px] uppercase tracking-widest mb-1">Opposing Counsel's Direct Examination</div>
          <p className="font-record text-[12px] leading-relaxed whitespace-pre-wrap">{opposingSummary}</p>
        </div>
      )}

      {/* Q&A transcript */}
      {qas.length > 0 && (
        <div className="space-y-2">
          {qas.map((qa, i) => (
            <div key={i} className="panel-dim p-3 anim-slide">
              <div className="font-body text-[15px]" style={{ color: 'var(--gold-bright)' }}>
                Q: {qa.q}
              </div>
              <div
                className="font-body text-[15px] mt-1"
                style={{
                  color: qa.struck ? 'var(--text-dim)' : 'var(--text-primary)',
                  textDecoration: qa.struck ? 'line-through' : 'none',
                }}
              >
                A: {qa.a}
              </div>
              {qa.struck && (
                <div className="font-ui text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--crimson)' }}>
                  Stricken from the record
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {error && <CourtError onRetry={ask} />}

      {/* Question input */}
      {qas.length < MAX_QUESTIONS ? (
        <div className="panel p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-ui text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
              Question {qas.length + 1} of {MAX_QUESTIONS}
            </span>
            <button
              onClick={() => {
                if (qas.length === 0) return;
                setObjRuling(null);
                setObjOpen(true);
              }}
              disabled={qas.length === 0}
              className="ml-auto font-ui text-[11px] font-semibold px-3 py-1.5 tracking-widest uppercase flex items-center gap-1 transition-colors"
              style={{
                color: qas.length === 0 ? 'var(--text-dim)' : 'var(--gold)',
                border: `1px solid ${qas.length === 0 ? 'var(--border-dim)' : 'var(--border-brass)'}`,
              }}
            >
              <Zap size={13} /> Object
            </button>
          </div>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  ask();
                }
              }}
              disabled={asking}
              placeholder="Q: Your question here…"
              className="flex-1 p-3 text-[15px]"
            />
            <button onClick={ask} disabled={asking || !question.trim()} className="btn-gold px-4 py-2 text-sm flex items-center gap-1">
              {asking ? '…' : <><Send size={14} /> Ask</>}
            </button>
          </div>
        </div>
      ) : (
        <p className="font-body italic text-center" style={{ color: 'var(--text-secondary)' }}>
          You have used all {MAX_QUESTIONS} questions for this witness.
        </p>
      )}

      <div className="flex justify-end">
        <button onClick={endExamination} disabled={finishing} className="btn-ghost px-5 py-2.5 text-sm">
          {finishing ? 'Recording…' : 'End Examination'}
        </button>
      </div>

      {/* Objection overlay */}
      {objOpen && (
        <Overlay onClose={() => setObjOpen(false)}>
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-xl flex items-center gap-2" style={{ color: 'var(--gold)' }}>
                <Zap size={18} /> Objection!
              </h3>
              <CloseButton onClick={() => setObjOpen(false)} />
            </div>
            {!objRuling && !objLoading && (
              <>
                <p className="font-body text-[14px] mb-3" style={{ color: 'var(--text-secondary)' }}>
                  State your grounds. The court will rule at once.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {OBJECTIONS.map((o) => (
                    <button key={o} onClick={() => rule(o)} className="btn-ghost px-3 py-3 text-[12px] tracking-widest">
                      {o} <InfoTip term="objection" />
                    </button>
                  ))}
                </div>
              </>
            )}
            {objLoading && <CourtLoading text="The court is ruling…" />}
            {objRuling && (
              <div className="anim-fade">
                <div className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-dim)' }}>
                  Objection: {objRuling.type}
                </div>
                <div
                  className="exhibit p-4 mb-3"
                  style={{ borderLeft: `4px solid ${objRuling.sustained ? 'var(--teal)' : 'var(--crimson)'}` }}
                >
                  <p className="font-record text-[13px]">{objRuling.text}</p>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => setObjOpen(false)} className="btn-gold px-5 py-2 text-sm">
                    {objRuling.sustained ? 'Answer Stricken — Continue' : 'Continue'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </Overlay>
      )}
    </div>
  );
}

export default function Examination({ caseData, side, state, patch, addRecord, goToPhase }) {
  const queue = buildQueue(caseData);
  const done = state.transcript.examinations || [];
  const [index, setIndex] = useState(done.length);

  function handleComplete(examRecord) {
    const updated = [...(state.transcript.examinations || [])];
    // Replace if re-examining, else append.
    const existing = updated.findIndex((e) => e.witnessId === examRecord.witnessId);
    if (existing >= 0) updated[existing] = examRecord;
    else updated.push(examRecord);
    patch({ transcript: { ...state.transcript, examinations: updated } });
    const qCount = (examRecord.direct || examRecord.cross || []).length;
    addRecord(`Examined ${examRecord.witnessName} (${qCount} question${qCount === 1 ? '' : 's'}).`);
    setIndex((i) => i + 1);
  }

  const allDone = index >= queue.length;

  return (
    <div className="anim-fade">
      <SectionTitle icon={Users}>WITNESS EXAMINATION</SectionTitle>

      {/* progress */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {queue.map((w, i) => (
          <span
            key={w.id}
            className="font-ui text-[10px] px-2 py-1 tracking-wide uppercase"
            style={{
              background: i < index ? 'rgba(26,188,156,0.14)' : i === index ? 'rgba(201,168,76,0.16)' : 'transparent',
              color: i < index ? 'var(--teal)' : i === index ? 'var(--gold-bright)' : 'var(--text-dim)',
              border: `1px solid ${i === index ? 'var(--gold)' : 'var(--border-dim)'}`,
            }}
          >
            {i < index ? '✓ ' : ''}
            {w.name.split(' ').slice(-1)[0]}
          </span>
        ))}
      </div>

      {!allDone ? (
        <WitnessExam
          key={queue[index].id}
          caseData={caseData}
          side={side}
          witness={queue[index]}
          record={done.find((d) => d.witnessId === queue[index].id)}
          onComplete={handleComplete}
        />
      ) : (
        <div className="panel p-6 text-center anim-fade">
          <p className="font-display text-xl mb-2" style={{ color: 'var(--gold)' }}>
            All witnesses have been examined.
          </p>
          <p className="font-body italic mb-5" style={{ color: 'var(--text-secondary)' }}>
            Both sides have rested. It is time for closing arguments.
          </p>
          <button onClick={() => goToPhase('closing')} className="btn-gold px-6 py-3 text-sm inline-flex items-center gap-2">
            PROCEED TO CLOSING ARGUMENTS <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
