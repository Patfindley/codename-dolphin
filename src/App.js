import React, { useState, useEffect } from 'react';
import * as Tone from 'tone'
import createSynth from './SynthEngine';
import { keyboardSwitch } from './util/keyboardSwitch.js';
import Keyboard from './components/Keyboard/Keyboard.js'
import './App.css';


function App() {
  let synth;
  if (!synth) {
     synth = createSynth()

  }
  const [octave, setOctave] = useState(4);

  const playSynth = async (e) => {
    await Tone.start();
    synth.triggerAttackRelease(
      keyboardSwitch(e, parseInt(octave)),
      '8n'
    );
    console.log(synth, 'synth');
  };

  useEffect(() => {
    if (synth) {
      return synth.dispose();
    }
  }, [octave])

  useEffect(() => {
    window.addEventListener('keydown', playSynth);
  }, []);

  const handleChange = (e) => {
    setOctave(e.target.value)
  }

  return (
    <div>
      <label>
        Octave Select:
        <input className="input"
          type='range'
          name='octave'
          min='2'
          max='5'
          value={octave}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </label>
      <Keyboard />
    </div>
  );
}

export default App;

