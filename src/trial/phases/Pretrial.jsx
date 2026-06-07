import React, { useState } from 'react';
import { Gavel, ArrowRight } from 'lucide-react';
import { callClaude } from '../../api.js';
import { judgeSystem, judgeUser, parseJudgeRulings } from '../prompts.js';
import { InfoTip, RulingBox, CourtLoading, CourtError, SectionTitle } from '../../components/ui.jsx';

const STOPWORDS = new Set([
  'motion', 'to', 'the', 'of', 'a', 'an', 'and', 'for', 'on', 'in', 'exclude',
  'suppress', 'sever', 'count', 'evidence', 'defendant', 'defendants', 's',
  'admit', 'grounds', 'as', 'from', 'his', 'her',
]);

// Infer which exhibits a granted exclusionary motion removes, via keyword overlap.
function inferSuppressed(motion, caseData) {
  const title = motion.title.toLowerCase();
  const isExclusion = /(exclude|suppress)/.test(title);
  if (!isExclusion) return [];
  const tokens = title
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
  const all = [...caseData.evidence.prosecution, ...caseData.evidence.defense];
  const hits = [];
  all.forEach((e) => {
    const desc = (e.description + ' ' + e.label).toLowerCase();
    const overlap = tokens.filter((t) => desc.includes(t)).length;
    if (overlap >= 2) hits.push(e.id);
  });
  return hits;
}

export default function Pretrial({ caseData, side, state, patch, addRecord, goToPhase }) {
  const available = caseData.pretrialMotions.available;
  const existing = state.transcript.motionsFiled || [];
  const alreadyFiled = existing.length > 0;

  const [selected, setSelected] = useState({});
  const [args, setArgs] = useState({});
  const [status, setStatus] = useState(alreadyFiled ? 'done' : 'idle'); // idle | loading | done | error
  const [rulings, setRulings] = useState(
    alreadyFiled
      ? existing.reduce((acc, m) => {
          acc[m.motionId] = { granted: m.outcome === 'GRANTED', ruling: m.judgeRuling, impact: m.impact || '' };
          return acc;
        }, {})
      : {}
  );

  function toggle(id) {
    setSelected((s) => ({ ...s, [id]: !s[id] }));
  }

  const selectedMotions = available.filter((m) => selected[m.id]);
  const canFile =
    selectedMotions.length > 0 &&
    selectedMotions.every((m) => (args[m.id] || '').trim().length >= 80);

  async function fileMotions() {
    setStatus('loading');
    const motionPayload = selectedMotions.map((m) => ({
      id: m.id,
      title: m.title,
      basis: m.basis,
      argument: args[m.id].trim(),
    }));
    const text = await callClaude(
      judgeSystem(caseData),
      judgeUser(caseData, side, motionPayload),
      900
    );
    if (text === '__ERROR__') {
      setStatus('error');
      return;
    }
    const parsed = parseJudgeRulings(text, motionPayload);
    if (!parsed) {
      setStatus('error');
      return;
    }
    const rulingMap = {};
    const filedRecords = [];
    let newlySuppressed = [];
    motionPayload.forEach((m, i) => {
      const r = parsed[i] || { granted: false, ruling: 'The motion is denied.', impact: '' };
      rulingMap[m.id] = r;
      filedRecords.push({
        motionId: m.id,
        motionTitle: m.title,
        userArgument: m.argument,
        judgeRuling: r.ruling,
        impact: r.impact,
        outcome: r.granted ? 'GRANTED' : 'DENIED',
      });
      addRecord(`Motion "${m.title}" — ${r.granted ? 'GRANTED' : 'DENIED'}.`);
      if (r.granted) {
        newlySuppressed = newlySuppressed.concat(inferSuppressed(available.find((a) => a.id === m.id), caseData));
      }
    });
    const suppressedSet = Array.from(new Set([...(state.suppressedEvidence || []), ...newlySuppressed]));
    const admitted = (state.admittedEvidence || []).filter((id) => !suppressedSet.includes(id));
    setRulings(rulingMap);
    patch({
      transcript: { ...state.transcript, motionsFiled: filedRecords },
      suppressedEvidence: suppressedSet,
      admittedEvidence: admitted,
    });
    if (newlySuppressed.length) {
      addRecord(`Evidence suppressed: ${newlySuppressed.join(', ')}.`);
    }
    setStatus('done');
  }

  return (
    <div className="anim-fade">
      <SectionTitle icon={Gavel}>PRETRIAL MOTIONS</SectionTitle>

      {status !== 'done' && (
        <p className="font-body text-[15px] mb-4" style={{ color: 'var(--text-secondary)' }}>
          Select the motions you wish to file. For each, write your legal argument. The judge will
          rule based on the merit of your argument.
        </p>
      )}

      {status === 'loading' && <CourtLoading text={`The Honorable ${caseData.judge} is reviewing your motions…`} />}

      {status === 'error' && <CourtError onRetry={fileMotions} />}

      {status !== 'done' && status !== 'loading' && (
        <div className="space-y-3">
          {available.map((m) => {
            const isSel = !!selected[m.id];
            const text = args[m.id] || '';
            const len = text.trim().length;
            return (
              <div key={m.id} className="panel p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSel}
                    onChange={() => toggle(m.id)}
                    className="mt-1 w-4 h-4 accent-[var(--gold)]"
                  />
                  <div className="flex-1">
                    <div className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
                      {m.title}
                    </div>
                    <div className="font-body text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--gold)' }}>Basis:</span> {m.basis}
                      <span className="ml-1"><InfoTip term="fre 403" label={m.basis} /></span>
                    </div>
                  </div>
                </label>
                {isSel && (
                  <div className="mt-3 anim-fade">
                    <textarea
                      value={text}
                      onChange={(e) => setArgs((a) => ({ ...a, [m.id]: e.target.value }))}
                      onKeyDown={(e) => {
                        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && canFile) fileMotions();
                      }}
                      rows={4}
                      placeholder="Write your legal argument here. Cite relevant case law, constitutional provisions, or statutes. The judge will evaluate the quality and relevance of your reasoning…"
                      className="w-full p-3 text-[15px] leading-relaxed"
                    />
                    <div className="flex justify-end mt-1">
                      <span className="font-ui text-[10px]" style={{ color: len >= 80 ? 'var(--teal)' : 'var(--text-dim)' }}>
                        {len} / 80 characters minimum
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => goToPhase('opening')}
              className="font-ui text-[11px] uppercase tracking-widest transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              Skip (Waive All Motions)
            </button>
            <button onClick={fileMotions} disabled={!canFile} className="btn-gold px-6 py-3 text-sm">
              FILE ALL MOTIONS
            </button>
          </div>
        </div>
      )}

      {status === 'done' && (
        <div className="space-y-4">
          <p className="font-body italic" style={{ color: 'var(--text-secondary)' }}>
            The court has entered its rulings.
          </p>
          {existing.map((m) => {
            const r = rulings[m.motionId] || { granted: m.outcome === 'GRANTED', ruling: m.judgeRuling, impact: m.impact };
            return (
              <RulingBox key={m.motionId} granted={r.granted} title={m.motionTitle}>
                {r.ruling}
                {r.impact ? `\n\nIMPACT: ${r.impact}` : ''}
              </RulingBox>
            );
          })}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => goToPhase('opening')}
              className="btn-gold px-6 py-3 text-sm flex items-center gap-2"
            >
              PROCEED TO OPENING STATEMENTS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
