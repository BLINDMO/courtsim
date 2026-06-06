import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import { StarRating } from '../components/ui.jsx';

const COMPLEXITY_SCORE = { low: 2, medium: 3, high: 4, extreme: 5 };

function difficultyFor(caseData, side) {
  let d = COMPLEXITY_SCORE[caseData.complexity] || 3;
  if (caseData.favorability === side) d -= 1;
  else if (caseData.favorability !== 'balanced') d += 1;
  return Math.max(1, Math.min(5, d));
}

function jurisdictionState(jurisdiction) {
  const parts = jurisdiction.split(',');
  return parts[parts.length - 1].trim();
}

function SideCard({ caseData, side, onChoose }) {
  const isPros = side === 'prosecution';
  const accent = isPros ? 'var(--crimson)' : 'var(--teal)';
  const accentDim = isPros ? 'var(--crimson-dim)' : 'var(--teal-dim)';
  const theory = isPros ? caseData.prosecutionTheory : caseData.defenseTheory;
  const strategies = isPros ? caseData.prosecutionStrategies : caseData.defenseStrategies;
  const challenges = isPros ? caseData.defenseStrategies : caseData.prosecutionStrategies;
  const state = jurisdictionState(caseData.jurisdiction);
  const role = isPros
    ? `You represent the People of ${state}. Your burden: prove guilt beyond a reasonable doubt.`
    : `You represent the accused. Your burden: create reasonable doubt.`;

  return (
    <div
      className="panel p-6 flex flex-col anim-slide"
      style={{
        borderColor: accentDim,
        background: isPros
          ? 'linear-gradient(180deg, rgba(192,57,43,0.06), var(--bg-panel))'
          : 'linear-gradient(180deg, rgba(26,188,156,0.06), var(--bg-panel))',
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Scale size={22} style={{ color: accent }} />
        <h2 className="font-display text-2xl tracking-wide uppercase" style={{ color: accent }}>
          {side}
        </h2>
      </div>
      <p className="font-body text-[15px] italic mb-4" style={{ color: 'var(--text-primary)' }}>
        {role}
      </p>

      <div className="mb-4">
        <h3 className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
          Theory of the Case
        </h3>
        <p className="font-body text-[15px]" style={{ color: 'var(--text-secondary)' }}>
          {theory}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
          Strategic Advantages
        </h3>
        <ul className="space-y-1">
          {strategies.slice(0, 3).map((s, i) => (
            <li key={i} className="font-body text-[14px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: accent }}>▸</span> {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-ui text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--gold)' }}>
          Key Challenges
        </h3>
        <ul className="space-y-1">
          {challenges.slice(0, 2).map((s, i) => (
            <li key={i} className="font-body text-[14px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--text-dim)' }}>✕</span> {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between border-t" style={{ borderColor: 'var(--border-dim)' }}>
        <div>
          <div className="font-ui text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
            Difficulty
          </div>
          <StarRating value={difficultyFor(caseData, side)} />
        </div>
        <button
          onClick={() => onChoose(side)}
          className="font-ui px-5 py-3 text-[12px] font-semibold tracking-widest uppercase transition-all"
          style={{ background: accent, color: '#fff', border: `1px solid ${accent}` }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 18px ${accentDim}`)}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          {isPros ? 'Prosecute This Case' : 'Defend This Case'}
        </button>
      </div>
    </div>
  );
}

export default function SideSelect({ caseData, onBack, onChoose }) {
  return (
    <div className="chamber-texture min-h-screen anim-fade">
      <div className="max-w-5xl mx-auto px-5 py-8">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={onBack} className="btn-ghost px-3 py-2" aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-display text-3xl tracking-wide" style={{ color: 'var(--gold)' }}>
            CHOOSE YOUR POSITION
          </h1>
        </div>
        <p className="font-body italic mb-7 ml-1" style={{ color: 'var(--text-secondary)' }}>
          {caseData.title} — {caseData.jurisdiction}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SideCard caseData={caseData} side="prosecution" onChoose={onChoose} />
          <SideCard caseData={caseData} side="defense" onChoose={onChoose} />
        </div>
      </div>
    </div>
  );
}
