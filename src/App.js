import React, { useEffect } from 'react';
import * as Tone from 'tone';
import './App.css';
import synthEngine from './util/synthEngine';
import keyboardSwitch from './util/keyboardSwitch';

export default function App() {
  const playSynth = async (e) => {
      await Tone.start();
      synthEngine.triggerAttackRelease(keyboardSwitch(e, 4), '8n');
  };

  useEffect(() => {
    window.addEventListener('keydown', playSynth);
  });

  return (
    <div>
      <label>
        Frequency Cutoff:
        <input
          type='range'
          name='freq'
          min='100'
          max='13000'
          onChange={(e) => {
            // probably want to change e.target.value to reflect state instead
            // filter.set({ frequency: e.target.value });
          }}
        />
      </label>
    </div>
  );
}
