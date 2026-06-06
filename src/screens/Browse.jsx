import React, { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { CASES } from '../cases.js';
import { ComplexityBadge, CrimeBadge, ScalesIcon } from '../components/ui.jsx';

const COMPLEXITIES = ['ALL', 'LOW', 'MEDIUM', 'HIGH', 'EXTREME'];
const FAVORS = [
  { key: 'ALL', label: 'ALL' },
  { key: 'prosecution', label: 'PROSECUTION-FAVORED' },
  { key: 'defense', label: 'DEFENSE-FAVORED' },
  { key: 'balanced', label: 'BALANCED' },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="font-ui text-[11px] px-3 py-1 tracking-widest uppercase transition-colors"
      style={{
        background: active ? 'rgba(201,168,76,0.18)' : 'transparent',
        color: active ? 'var(--gold-bright)' : 'var(--text-secondary)',
        border: `1px solid ${active ? 'var(--gold)' : 'var(--border-dim)'}`,
      }}
    >
      {children}
    </button>
  );
}

function FavorIndicator({ favorability }) {
  const tilt = favorability === 'prosecution' ? -1.4 : favorability === 'defense' ? 1.4 : 0;
  const label =
    favorability === 'prosecution'
      ? 'Prosecution-favored'
      : favorability === 'defense'
      ? 'Defense-favored'
      : 'Balanced';
  return (
    <div className="flex items-center gap-2" title={label}>
      <ScalesIcon size={26} tilt={tilt} />
      <span className="font-ui text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </span>
    </div>
  );
}

function CaseCard({ c, onReview }) {
  return (
    <button
      onClick={() => onReview(c)}
      className="panel text-left p-5 flex flex-col group transition-all duration-200 hover:-translate-y-1"
      style={{ outline: 'none' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 26px rgba(201,168,76,0.28)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(139,105,20,0.07)')}
    >
      <div className="font-ui text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-dim)' }}>
        Case No. {c.id.replace('case-', '').padStart(3, '0')}-CR-{String(c.year).slice(-2)}
      </div>
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        <CrimeBadge type={c.crimeType} />
        <ComplexityBadge level={c.complexity} />
      </div>
      <h3 className="font-display text-xl leading-tight" style={{ color: 'var(--text-primary)' }}>
        {c.title}
      </h3>
      <div className="font-ui text-[11px] mt-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
        {c.jurisdiction} • {c.year}
      </div>
      <p className="font-body text-[15px] leading-snug line-clamp-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
        {c.summary}
      </p>
      <div className="mt-auto flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-dim)' }}>
        <FavorIndicator favorability={c.favorability} />
        <span
          className="font-ui text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: 'var(--gold)' }}
        >
          Review Case →
        </span>
      </div>
    </button>
  );
}

export default function Browse({ onBack, onSelectCase }) {
  const [crimeType, setCrimeType] = useState('ALL');
  const [complexity, setComplexity] = useState('ALL');
  const [favor, setFavor] = useState('ALL');

  const crimeTypes = useMemo(() => {
    const set = new Set(CASES.map((c) => c.crimeType));
    return ['ALL', ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    return CASES.filter((c) => {
      if (crimeType !== 'ALL' && c.crimeType !== crimeType) return false;
      if (complexity !== 'ALL' && c.complexity !== complexity.toLowerCase()) return false;
      if (favor !== 'ALL' && c.favorability !== favor) return false;
      return true;
    });
  }, [crimeType, complexity, favor]);

  return (
    <div className="chamber-texture min-h-screen anim-fade">
      <div className="max-w-6xl mx-auto px-5 py-6">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={onBack} className="btn-ghost px-3 py-2" aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-display text-2xl tracking-wide" style={{ color: 'var(--gold)' }}>
            SELECT YOUR CASE
          </h1>
          <span className="font-ui text-xs ml-auto" style={{ color: 'var(--text-secondary)' }}>
            {filtered.length} of {CASES.length} cases
          </span>
        </div>

        {/* Filters */}
        <div className="panel-dim p-4 mb-6 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-ui text-[10px] uppercase tracking-widest w-24" style={{ color: 'var(--text-dim)' }}>
              Crime Type
            </span>
            <select
              value={crimeType}
              onChange={(e) => setCrimeType(e.target.value)}
              className="font-ui text-[12px] px-3 py-1.5"
            >
              {crimeTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-ui text-[10px] uppercase tracking-widest w-24" style={{ color: 'var(--text-dim)' }}>
              Complexity
            </span>
            {COMPLEXITIES.map((lvl) => (
              <Chip key={lvl} active={complexity === lvl} onClick={() => setComplexity(lvl)}>
                {lvl}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-ui text-[10px] uppercase tracking-widest w-24" style={{ color: 'var(--text-dim)' }}>
              Favorability
            </span>
            {FAVORS.map((f) => (
              <Chip key={f.key} active={favor === f.key} onClick={() => setFavor(f.key)}>
                {f.label}
              </Chip>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <CaseCard key={c.id} c={c} onReview={onSelectCase} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center font-body italic mt-12" style={{ color: 'var(--text-secondary)' }}>
            No cases match these filters.
          </p>
        )}
      </div>
    </div>
  );
}
