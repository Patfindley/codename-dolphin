import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as Tone from 'tone';
import './App.css';
import createSynth from '../SynthEngine/SynthEngine';
import keyboardSwitch from '../../util/keyboardSwitch';

const synth = createSynth();

export default function App() {
  const [octave, setOctave] = useState(4);
  const [test, setTest] = useState(false);

  const playSynth = async (e) => {
    await Tone.start();
    let note = keyboardSwitch(e, parseInt(octave));
    synth.triggerAttackRelease(note, '8n');
    // this shows the issue, first keydown logs a single node, then when input value changes keydown logs multiple nodes 👇
    console.log(synth);
  };

  useEffect(() => {
    window.addEventListener('keydown', playSynth);
  });

  return (
    <div>
      <label>
        Octave Select:
        {test && test}
        <input
          type='range'
          name='octave'
          min='2'
          max='5'
          // value={octave}
          onChange={(e) => {
            // setOctave(e.target.value)
            setTest(<div>hello</div>);
          }}
        />
      </label>
    </div>
  );
}
