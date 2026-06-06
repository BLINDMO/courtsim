import React from 'react';
import { ScalesIcon } from '../components/ui.jsx';

export default function Home({ onBegin, onContinue, hasSave }) {
  return (
    <div className="void-grain min-h-screen flex flex-col items-center justify-center px-6 text-center anim-fade">
      <div className="anim-slide flex flex-col items-center">
        <ScalesIcon size={140} />
        <h1
          className="font-display mt-6 text-4xl sm:text-5xl font-bold tracking-[0.18em]"
          style={{ color: 'var(--gold)' }}
        >
          TRIAL BY ARGUMENT
        </h1>
        <p className="font-body italic mt-3 text-lg" style={{ color: 'var(--text-secondary)' }}>
          High-Fidelity Criminal Trial Simulator
        </p>
        <hr className="hr-gold my-7" style={{ width: 50 }} />

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <button onClick={onBegin} className="btn-gold px-8 py-4 text-base tracking-widest">
            BEGIN A TRIAL
          </button>
          {hasSave && (
            <button onClick={onContinue} className="btn-ghost px-8 py-4 text-base tracking-widest">
              CONTINUE TRIAL
            </button>
          )}
        </div>

        <p className="font-ui text-xs mt-12 tracking-widest" style={{ color: 'var(--text-dim)' }}>
          20 HIGH-FELONY CASES &nbsp;•&nbsp; REAL LEGAL STRATEGY &nbsp;•&nbsp; AI-POWERED JURY
        </p>
      </div>
    </div>
  );
}
