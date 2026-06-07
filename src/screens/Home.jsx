import React, { useState } from 'react';
import { KeyRound, Check } from 'lucide-react';
import { ScalesIcon, Overlay, CloseButton } from '../components/ui.jsx';
import { getApiKey, setApiKey, hasApiKey } from '../apikey.js';

function ApiKeyModal({ onClose }) {
  const [value, setValue] = useState(getApiKey());
  const [saved, setSaved] = useState(false);

  function save() {
    setApiKey(value);
    setSaved(true);
    setTimeout(onClose, 600);
  }

  return (
    <Overlay onClose={onClose}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-xl flex items-center gap-2" style={{ color: 'var(--gold)' }}>
            <KeyRound size={18} /> Anthropic API Key
          </h3>
          <CloseButton onClick={onClose} />
        </div>
        <p className="font-body text-[14px] mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          On a hosted static site (like GitHub Pages) there is no server to power the AI, so the
          trial uses your own Anthropic key. It is stored <span style={{ color: 'var(--gold)' }}>only in this
          browser</span> and sent directly to Anthropic — never to any other server. Leave this blank if
          you are running on the Claude platform or your own server.
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="sk-ant-..."
          className="w-full p-3 text-[14px] font-record mb-3"
          autoComplete="off"
          spellCheck={false}
        />
        <div className="flex items-center justify-between">
          <a
            href="https://console.anthropic.com/settings/keys"
            target="_blank"
            rel="noreferrer"
            className="font-ui text-[11px] tracking-widest uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            Get a key →
          </a>
          <button onClick={save} className="btn-gold px-5 py-2 text-sm flex items-center gap-1.5">
            {saved ? <><Check size={14} /> Saved</> : 'Save Key'}
          </button>
        </div>
      </div>
    </Overlay>
  );
}

export default function Home({ onBegin, onContinue, hasSave }) {
  const [showKey, setShowKey] = useState(false);
  const keySet = hasApiKey();

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

        <button
          onClick={() => setShowKey(true)}
          className="mt-5 font-ui text-[11px] tracking-widest uppercase flex items-center gap-1.5 transition-colors"
          style={{ color: keySet ? 'var(--teal)' : 'var(--text-secondary)' }}
        >
          <KeyRound size={13} />
          {keySet ? 'API Key Set' : 'Set API Key'}
        </button>
      </div>

      {showKey && <ApiKeyModal onClose={() => setShowKey(false)} />}
    </div>
  );
}
