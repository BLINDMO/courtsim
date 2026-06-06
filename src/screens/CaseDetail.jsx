import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  ComplexityBadge,
  CrimeBadge,
  StrengthDots,
  ExhibitBox,
  InfoTip,
} from '../components/ui.jsx';

const TABS = ['Overview', 'Charges', 'Evidence', 'Witnesses', 'Pretrial Motions'];

function ProfileCard({ title, profile, accent }) {
  if (!profile) return null;
  return (
    <div className="panel-dim p-4">
      <h4 className="font-ui text-[11px] uppercase tracking-widest mb-2" style={{ color: accent }}>
        {title}
      </h4>
      <div className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
        {profile.name}
      </div>
      <div className="font-body text-[15px] mt-1 space-y-1" style={{ color: 'var(--text-secondary)' }}>
        {profile.age != null && <div>Age: {profile.age}</div>}
        {profile.occupation && <div>{profile.occupation}</div>}
        {profile.relationship && <div>Relationship to case: {profile.relationship}</div>}
        {profile.background && <div className="pt-1">{profile.background}</div>}
        {profile.priorRecord && (
          <div className="pt-1" style={{ color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--gold)' }}>Prior record:</span> {profile.priorRecord}
          </div>
        )}
      </div>
    </div>
  );
}

function WitnessCard({ w, accent }) {
  return (
    <div className="panel-dim p-4">
      <div className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
        {w.name}
      </div>
      <div className="font-ui text-[11px] uppercase tracking-wide mb-2" style={{ color: accent }}>
        {w.role}
      </div>
      <p className="font-body text-[15px] mb-2" style={{ color: 'var(--text-secondary)' }}>
        <span style={{ color: 'var(--gold)' }}>Testifies to:</span> {w.testimony}
      </p>
      <div>
        <span className="font-ui text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          Potential weaknesses (hover to reveal)
        </span>
        <p className="font-body text-[14px] mt-1 blur-prep" style={{ color: 'var(--text-secondary)' }}>
          {w.weaknesses}
        </p>
      </div>
    </div>
  );
}

export default function CaseDetail({ caseData, onBack, onSelectSide }) {
  const [tab, setTab] = useState('Overview');
  const c = caseData;

  return (
    <div className="chamber-texture min-h-screen anim-fade">
      {/* Sticky header */}
      <div
        className="sticky top-0 z-30 border-b"
        style={{ background: 'var(--bg-void)', borderColor: 'var(--border-brass)' }}
      >
        <div className="max-w-5xl mx-auto px-5 py-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                {c.title}
              </h1>
              <div className="font-ui text-[12px] mt-1" style={{ color: 'var(--text-secondary)' }}>
                {c.jurisdiction} &nbsp;|&nbsp; {c.year} &nbsp;|&nbsp; Presiding: {c.judge}
              </div>
              <div className="flex gap-2 mt-2">
                <CrimeBadge type={c.crimeType} />
                <ComplexityBadge level={c.complexity} />
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={onBack} className="btn-ghost px-3 py-2 text-[12px] flex items-center gap-1">
                <ArrowLeft size={15} /> Back
              </button>
              <button onClick={onSelectSide} className="btn-gold px-4 py-2 text-[12px] flex items-center gap-1">
                Select Your Side <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1 mt-4">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="font-ui text-[11px] px-3 py-2 tracking-widest uppercase transition-colors"
                style={{
                  color: tab === t ? 'var(--gold-bright)' : 'var(--text-secondary)',
                  borderBottom: `2px solid ${tab === t ? 'var(--gold)' : 'transparent'}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab body */}
      <div className="max-w-5xl mx-auto px-5 py-6 anim-fade" key={tab}>
        {tab === 'Overview' && (
          <div className="space-y-6">
            <div className="panel p-5">
              {c.backstory.split('\n').filter(Boolean).map((para, i) => (
                <p key={i} className="font-body text-[16px] leading-relaxed mb-3" style={{ color: 'var(--text-primary)' }}>
                  {para.trim()}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProfileCard title="The Accused" profile={c.accused} accent="var(--crimson)" />
              <ProfileCard title="The Victim" profile={c.victim} accent="var(--teal)" />
            </div>
          </div>
        )}

        {tab === 'Charges' && (
          <div className="panel overflow-hidden">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'var(--bg-void)' }}>
                  {['#', 'Charge', 'Penal Code', 'Maximum Sentence'].map((h) => (
                    <th key={h} className="font-ui text-[10px] uppercase tracking-widest text-left px-4 py-3" style={{ color: 'var(--gold)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.charges.map((ch, i) => (
                  <tr key={i} className="border-t" style={{ borderColor: 'var(--border-dim)' }}>
                    <td className="px-4 py-3 font-record text-sm align-top" style={{ color: 'var(--text-secondary)' }}>
                      <span
                        className="inline-block w-2 h-6 mr-1 align-middle"
                        style={{
                          background:
                            i === 0 ? 'var(--crimson)' : i === 1 ? '#a05a16' : 'var(--gold)',
                        }}
                      />
                      {ch.count}
                    </td>
                    <td className="px-4 py-3 font-display text-[16px] align-top" style={{ color: 'var(--text-primary)' }}>
                      {ch.charge}
                    </td>
                    <td className="px-4 py-3 font-record text-[12px] align-top" style={{ color: 'var(--text-secondary)' }}>
                      {ch.penal}
                    </td>
                    <td className="px-4 py-3 font-body text-[15px] align-top" style={{ color: 'var(--gold-bright)' }}>
                      {ch.maxSentence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'Evidence' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-ui text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--crimson)' }}>
                Prosecution Exhibits
              </h3>
              <div className="space-y-3">
                {c.evidence.prosecution.map((e) => (
                  <ExhibitBox key={e.id} label={`${e.label} — ${e.strength.toUpperCase()}`}>
                    {e.description}
                    <div className="mt-2">
                      <StrengthDots strength={e.strength} />
                    </div>
                  </ExhibitBox>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-ui text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--teal)' }}>
                Defense Exhibits
              </h3>
              <div className="space-y-3">
                {c.evidence.defense.map((e) => (
                  <ExhibitBox key={e.id} label={`${e.label} — ${e.strength.toUpperCase()}`}>
                    {e.description}
                    <div className="mt-2">
                      <StrengthDots strength={e.strength} />
                    </div>
                  </ExhibitBox>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'Witnesses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-ui text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--crimson)' }}>
                Prosecution Witnesses
              </h3>
              <div className="space-y-3">
                {c.witnesses.prosecution.map((w) => (
                  <WitnessCard key={w.id} w={w} accent="var(--crimson)" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-ui text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--teal)' }}>
                Defense Witnesses
              </h3>
              <div className="space-y-3">
                {c.witnesses.defense.map((w) => (
                  <WitnessCard key={w.id} w={w} accent="var(--teal)" />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'Pretrial Motions' && (
          <div className="space-y-3">
            <p className="font-body italic text-[15px] mb-2" style={{ color: 'var(--text-secondary)' }}>
              You will write the legal arguments yourself during trial. These are the motions available to file.
            </p>
            {c.pretrialMotions.available.map((m) => (
              <div key={m.id} className="panel p-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
                    {m.title}
                  </h4>
                  <span className="font-ui text-[10px] uppercase tracking-widest px-2 py-1 shrink-0" style={{ color: 'var(--gold)', border: '1px solid var(--border-brass)' }}>
                    {m.likelyOutcome}
                  </span>
                </div>
                <p className="font-body text-[15px] mt-1" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--gold)' }}>Legal basis:</span> {m.basis}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-6" />
    </div>
  );
}
