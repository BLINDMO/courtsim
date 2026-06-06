import React, { useState, useEffect } from 'react';
import { CASES } from './cases.js';
import { loadSave, writeSave, clearSave, hasSave } from './storage.js';
import Home from './screens/Home.jsx';
import Browse from './screens/Browse.jsx';
import CaseDetail from './screens/CaseDetail.jsx';
import SideSelect from './screens/SideSelect.jsx';
import Trial from './trial/Trial.jsx';

function buildInitialTrialState(caseData, side) {
  const allEvidence = [
    ...caseData.evidence.prosecution.map((e) => e.id),
    ...caseData.evidence.defense.map((e) => e.id),
  ];
  return {
    caseId: caseData.id,
    side,
    phase: 'pretrial',
    completedPhases: [],
    transcript: {
      motionsFiled: [],
      openings: { prosecution: '', defense: '' },
      examinations: [],
      closings: { prosecution: '', defense: '' },
    },
    admittedEvidence: allEvidence,
    suppressedEvidence: [],
    notes: '',
    record: [],
    verdict: null,
    startedAt: Date.now(),
    completedAt: null,
  };
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);
  const [trialState, setTrialState] = useState(null);
  const [saveExists, setSaveExists] = useState(hasSave());

  useEffect(() => {
    setSaveExists(hasSave());
  }, [screen]);

  function findCase(id) {
    return CASES.find((c) => c.id === id) || null;
  }

  function startTrial(caseData, side, existing) {
    const st = existing || buildInitialTrialState(caseData, side);
    setSelectedCase(caseData);
    setSelectedSide(side);
    setTrialState(st);
    writeSave(st);
    setScreen('trial');
  }

  function handleContinue() {
    const saved = loadSave();
    if (!saved) return;
    const caseData = findCase(saved.caseId);
    if (!caseData) {
      clearSave();
      setSaveExists(false);
      return;
    }
    setSelectedCase(caseData);
    setSelectedSide(saved.side);
    setTrialState(saved);
    setScreen('trial');
  }

  function handleSaveExit() {
    setScreen('home');
    setSaveExists(hasSave());
  }

  function handleRetrySame() {
    clearSave();
    startTrial(selectedCase, selectedSide);
  }

  function handleTryOpposite() {
    const opp = selectedSide === 'prosecution' ? 'defense' : 'prosecution';
    clearSave();
    startTrial(selectedCase, opp);
  }

  function handleNewCase() {
    clearSave();
    setSaveExists(false);
    setScreen('browse');
  }

  return (
    <>
      {screen === 'home' && (
        <Home
          onBegin={() => setScreen('browse')}
          onContinue={handleContinue}
          hasSave={saveExists}
        />
      )}

      {screen === 'browse' && (
        <Browse
          onBack={() => setScreen('home')}
          onSelectCase={(c) => {
            setSelectedCase(c);
            setScreen('case');
          }}
        />
      )}

      {screen === 'case' && selectedCase && (
        <CaseDetail
          caseData={selectedCase}
          onBack={() => setScreen('browse')}
          onSelectSide={() => setScreen('side')}
        />
      )}

      {screen === 'side' && selectedCase && (
        <SideSelect
          caseData={selectedCase}
          onBack={() => setScreen('case')}
          onChoose={(side) => startTrial(selectedCase, side)}
        />
      )}

      {screen === 'trial' && selectedCase && selectedSide && trialState && (
        <Trial
          key={`${selectedCase.id}-${selectedSide}-${trialState.startedAt}`}
          caseData={selectedCase}
          side={selectedSide}
          initialState={trialState}
          onSaveExit={handleSaveExit}
          onNewCase={handleNewCase}
          onRetrySame={handleRetrySame}
          onTryOpposite={handleTryOpposite}
        />
      )}
    </>
  );
}
