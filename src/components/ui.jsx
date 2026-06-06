import React, { useState, useRef, useEffect } from 'react';
import { Info, Scale, Gavel, X } from 'lucide-react';
import { glossaryLookup } from '../glossary.js';

/* ---------- Decorative scales of justice (inline SVG) ---------- */
export function ScalesIcon({ size = 120, tilt = 0, color = 'var(--gold)' }) {
  // tilt: negative = left/prosecution heavy, positive = right/defense heavy
  const leftY = 70 + tilt * 6;
  const rightY = 70 - tilt * 6;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden>
      <g stroke={color} strokeWidth="3.5" strokeLinecap="round">
        <line x1="100" y1="28" x2="100" y2="150" />
        <line x1="70" y1="150" x2="130" y2="150" />
        <line x1="55" y1="160" x2="145" y2="160" />
        <circle cx="100" cy="24" r="6" fill={color} />
        {/* beam */}
        <line x1="40" y1={48 + tilt * 6} x2="160" y2={48 - tilt * 6} />
        {/* left pan */}
        <line x1="40" y1={48 + tilt * 6} x2="40" y2={leftY} />
        <path d={`M22 ${leftY} Q40 ${leftY + 26} 58 ${leftY}`} />
        <line x1="22" y1={leftY} x2="58" y2={leftY} />
        {/* right pan */}
        <line x1="160" y1={48 - tilt * 6} x2="160" y2={rightY} />
        <path d={`M142 ${rightY} Q160 ${rightY + 26} 178 ${rightY}`} />
        <line x1="142" y1={rightY} x2="178" y2={rightY} />
      </g>
    </svg>
  );
}

export function GavelIcon({ size = 20, className = '' }) {
  return <Gavel size={size} className={className} />;
}

/* ---------- Strength dots ●●●○○ ---------- */
export function StrengthDots({ strength }) {
  const map = { strong: 3, moderate: 2, weak: 1 };
  const filled = map[strength] || 0;
  const dots = [1, 2, 3, 4, 5];
  const color =
    strength === 'strong'
      ? 'var(--teal)'
      : strength === 'moderate'
      ? 'var(--gold)'
      : 'var(--crimson)';
  return (
    <span className="font-record text-sm tracking-widest" title={`Strength: ${strength}`}>
      {dots.map((d) => (
        <span key={d} style={{ color: d <= filled ? color : 'var(--text-dim)' }}>
          ●
        </span>
      ))}
    </span>
  );
}

/* ---------- Star rating ★★★☆☆ ---------- */
export function StarRating({ value = 3, max = 5 }) {
  return (
    <span className="tracking-widest" style={{ color: 'var(--gold)' }} aria-label={`${value} of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i}>{i < value ? '★' : '☆'}</span>
      ))}
    </span>
  );
}

/* ---------- Badge / chip ---------- */
const COMPLEXITY_COLORS = {
  low: { bg: 'rgba(26,188,156,0.15)', fg: '#2fe0bd', bd: 'var(--teal-dim)' },
  medium: { bg: 'rgba(201,168,76,0.15)', fg: 'var(--gold-bright)', bd: 'var(--border-brass)' },
  high: { bg: 'rgba(230,120,40,0.15)', fg: '#f0a050', bd: '#a05a16' },
  extreme: { bg: 'rgba(192,57,43,0.18)', fg: '#e7665a', bd: 'var(--crimson-dim)' },
};

export function ComplexityBadge({ level }) {
  const c = COMPLEXITY_COLORS[level] || COMPLEXITY_COLORS.medium;
  return (
    <span
      className="font-ui text-[10px] font-semibold px-2 py-0.5 tracking-widest uppercase"
      style={{ background: c.bg, color: c.fg, border: `1px solid ${c.bd}` }}
    >
      {level}
    </span>
  );
}

export function CrimeBadge({ type }) {
  return (
    <span
      className="font-ui text-[10px] font-semibold px-2 py-0.5 tracking-widest uppercase"
      style={{ background: 'rgba(139,105,20,0.12)', color: 'var(--gold)', border: '1px solid var(--border-brass)' }}
    >
      {type}
    </span>
  );
}

export function SideBadge({ side }) {
  const isPros = side === 'prosecution';
  return (
    <span
      className="font-ui text-[11px] font-semibold px-3 py-1 tracking-widest uppercase"
      style={{
        background: isPros ? 'rgba(192,57,43,0.16)' : 'rgba(26,188,156,0.16)',
        color: isPros ? '#e7665a' : '#2fe0bd',
        border: `1px solid ${isPros ? 'var(--crimson-dim)' : 'var(--teal-dim)'}`,
      }}
    >
      {isPros ? '⚖ PROSECUTION' : '⚖ DEFENSE'}
    </span>
  );
}

/* ---------- Glossary tooltip ⓘ ---------- */
export function InfoTip({ term, label }) {
  const [open, setOpen] = useState(false);
  const text = glossaryLookup(term) || label;
  const ref = useRef(null);
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('mousedown', onClick);
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);
  if (!text) return null;
  return (
    <span className="relative inline-block align-middle" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="text-[var(--gold)] hover:text-[var(--gold-bright)] align-middle"
        aria-label={`Explain: ${term}`}
      >
        <Info size={13} />
      </button>
      {open && (
        <span
          className="absolute z-50 left-1/2 -translate-x-1/2 mt-1 w-60 p-3 text-[13px] leading-snug font-body anim-fade"
          style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-brass)',
            color: 'var(--text-primary)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
          }}
        >
          <span className="block font-ui text-[10px] uppercase tracking-widest text-[var(--gold)] mb-1">
            {term}
          </span>
          {text}
        </span>
      )}
    </span>
  );
}

/* ---------- Court order ruling box (parchment) ---------- */
export function RulingBox({ granted, title, children }) {
  const color = granted ? 'var(--teal)' : 'var(--crimson)';
  return (
    <div
      className="exhibit p-4 relative anim-slide"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="font-record text-[13px] font-bold uppercase tracking-wide pr-16">{title}</div>
        <span
          className="font-ui text-[11px] font-bold px-2 py-1 tracking-widest uppercase shrink-0"
          style={{
            color: '#fff',
            background: color,
            transform: 'rotate(-3deg)',
            border: '2px solid rgba(0,0,0,0.2)',
          }}
        >
          {granted ? 'GRANTED' : 'DENIED'}
        </span>
      </div>
      <div className="font-record text-[12.5px] leading-relaxed whitespace-pre-wrap">{children}</div>
    </div>
  );
}

/* ---------- Exhibit display box ---------- */
export function ExhibitBox({ label, children, suppressed }) {
  return (
    <div className="exhibit p-3" style={suppressed ? { opacity: 0.55 } : undefined}>
      <div className="flex items-center justify-between mb-1.5 border-b border-[#b8a878] pb-1">
        <span className="font-record text-[11px] font-bold uppercase tracking-widest">{label}</span>
        {suppressed && (
          <span className="font-ui text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest" style={{ background: 'var(--crimson)', color: '#fff' }}>
            Suppressed
          </span>
        )}
      </div>
      <div className="font-record text-[12px] leading-relaxed" style={suppressed ? { textDecoration: 'line-through' } : undefined}>
        {children}
      </div>
    </div>
  );
}

/* ---------- Modal / overlay ---------- */
export function Overlay({ children, onClose, wide }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 anim-fade"
      style={{ background: 'rgba(7,8,13,0.82)', backdropFilter: 'blur(3px)' }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className={`panel anim-scale w-full ${wide ? 'max-w-2xl' : 'max-w-md'} max-h-[88vh] overflow-y-auto`}>
        {children}
      </div>
    </div>
  );
}

export function CloseButton({ onClick }) {
  return (
    <button onClick={onClick} className="text-[var(--text-secondary)] hover:text-[var(--gold)]" aria-label="Close">
      <X size={18} />
    </button>
  );
}

/* ---------- Loading shimmer panel ---------- */
export function CourtLoading({ text }) {
  return (
    <div className="panel p-8 text-center anim-fade">
      <div className="flex justify-center mb-4">
        <Scale size={36} className="shimmer" style={{ color: 'var(--gold)' }} />
      </div>
      <p className="font-display text-lg shimmer" style={{ color: 'var(--gold)' }}>
        {text}
      </p>
    </div>
  );
}

/* ---------- Error / retry ---------- */
export function CourtError({ onRetry }) {
  return (
    <div className="panel p-6 text-center anim-fade" style={{ borderColor: 'var(--crimson-dim)' }}>
      <p className="font-display text-lg mb-1" style={{ color: '#e7665a' }}>
        Court Reporter Technical Difficulty
      </p>
      <p className="font-body text-[var(--text-secondary)] mb-4 text-sm">
        The transcript could not be recorded. The proceedings may continue once the connection is restored.
      </p>
      <button onClick={onRetry} className="btn-gold px-5 py-2 text-sm">
        RETRY
      </button>
    </div>
  );
}

/* ---------- Section heading ---------- */
export function SectionTitle({ icon: Icon, children, accent = 'var(--gold)' }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {Icon && <Icon size={20} style={{ color: accent }} />}
      <h2 className="font-display text-xl tracking-wide" style={{ color: accent }}>
        {children}
      </h2>
    </div>
  );
}
