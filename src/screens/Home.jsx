import React, { useState } from 'react';
import { KeyRound, Check, Wifi, WifiOff, Loader } from 'lucide-react';
import { ScalesIcon, Overlay, CloseButton } from '../components/ui.jsx';
import { getProvider, setProvider, getKey, setKey, hasAnyKey } from '../apikey.js';
import { testProviderKey } from '../api.js';

const PROVIDERS = {
  anthropic: {
    label: 'Anthropic (Claude)',
    placeholder: 'sk-ant-...',
    link: 'https://console.anthropic.com/settings/keys',
    note: 'Pay-as-you-go (cheap — uses the Haiku model). Separate from a Claude Pro plan.',
  },
  groq: {
    label: 'Groq (Llama — free)',
    placeholder: 'gsk_...',
    link: 'https://console.groq.com/keys',
    note: 'Free tier, no credit card required. Fast open models. Rate-limited but plenty for play.',
  },
};

function ApiKeyModal({ onClose }) {
  const [provider, setProv] = useState(getProvider());
  const [value, setValue] = useState(getKey(getProvider()));
  const [saved, setSaved] = useState(false);
  const [testStatus, setTestStatus] = useState(null); // null | 'testing' | 'ok' | 'fail'

  function switchProvider(p) {
    setProv(p);
    setValue(getKey(p));
    setSaved(false);
    setTestStatus(null);
  }

  function save() {
    setProvider(provider);
    setKey(provider, value);
    setSaved(true);
    setTimeout(onClose, 600);
  }

  async function testConnection() {
    if (!value.trim()) return;
    setTestStatus('testing');
    const ok = await testProviderKey(provider, value.trim());
    setTestStatus(ok ? 'ok' : 'fail');
  }

  const cfg = PROVIDERS[provider];

  return (
    <Overlay onClose={onClose}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-xl flex items-center gap-2" style={{ color: 'var(--gold)' }}>
            <KeyRound size={18} /> AI Provider &amp; Key
          </h3>
          <CloseButton onClick={onClose} />
        </div>

        <p className="font-body text-[14px] mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          On a hosted static site there is no server to power the AI, so the trial uses a provider
          key you supply. It is stored <span style={{ color: 'var(--gold)' }}>only in this browser</span> and
          sent directly to the provider. Leave blank when running inside Claude or on your own server.
        </p>

        {/* Provider segmented control */}
        <div className="flex gap-2 mb-3">
          {Object.entries(PROVIDERS).map(([key, p]) => (
            <button
              key={key}
              onClick={() => switchProvider(key)}
              className="flex-1 font-ui text-[11px] px-3 py-2 tracking-widest uppercase transition-colors"
              style={{
                background: provider === key ? 'rgba(201,168,76,0.18)' : 'transparent',
                color: provider === key ? 'var(--gold-bright)' : 'var(--text-secondary)',
                border: `1px solid ${provider === key ? 'var(--gold)' : 'var(--border-dim)'}`,
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={cfg.placeholder}
          className="w-full p-3 text-[14px] font-record mb-2"
          autoComplete="off"
          spellCheck={false}
        />
        <p className="font-body text-[12px] mb-3" style={{ color: 'var(--text-dim)' }}>
          {cfg.note}
        </p>

        <div className="flex items-center justify-between">
          <a
            href={cfg.link}
            target="_blank"
            rel="noreferrer"
            className="font-ui text-[11px] tracking-widest uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            Get a free key →
          </a>
          <div className="flex items-center gap-2">
            {value.trim() && (
              <button
                onClick={testConnection}
                disabled={testStatus === 'testing'}
                className="font-ui text-[11px] tracking-widest uppercase px-3 py-2 flex items-center gap-1.5 transition-colors"
                style={{
                  color: testStatus === 'ok' ? 'var(--teal)' : testStatus === 'fail' ? 'var(--crimson)' : 'var(--text-secondary)',
                  border: `1px solid ${testStatus === 'ok' ? 'var(--teal-dim)' : testStatus === 'fail' ? 'var(--crimson-dim)' : 'var(--border-dim)'}`,
                }}
              >
                {testStatus === 'testing' ? <><Loader size={12} className="animate-spin" /> Testing…</> :
                 testStatus === 'ok' ? <><Wifi size={12} /> Connected</> :
                 testStatus === 'fail' ? <><WifiOff size={12} /> Failed</> :
                 <><Wifi size={12} /> Test Key</>}
              </button>
            )}
            <button onClick={save} className="btn-gold px-5 py-2 text-sm flex items-center gap-1.5">
              {saved ? <><Check size={14} /> Saved</> : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

function activeProviderLabel() {
  const p = getProvider();
  if (getKey(p)) return PROVIDERS[p]?.label.split(' ')[0] + ' Key Active';
  return null;
}

export default function Home({ onBegin, onContinue, hasSave }) {
  const [showKey, setShowKey] = useState(false);
  const keySet = hasAnyKey();
  const providerLabel = activeProviderLabel();

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
          {keySet ? (providerLabel || 'AI Key Set') : 'Set API Key'}
        </button>
      </div>

      {showKey && <ApiKeyModal onClose={() => setShowKey(false)} />}
    </div>
  );
}
