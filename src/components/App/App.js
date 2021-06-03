import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import './App.css';
import createSynth from '../SynthEngine/SynthEngine';
import keyboardSwitch from '../../util/keyboardSwitch';
import notesUtil from '../../util/notesUtil';
import Scene from '../Scene/Scene';
import Keyboard from '../Keyboard/Keyboard';

const { oscillators, delay, reverb, filter } = createSynth();
const engine = oscillators.chain(delay, reverb, filter, Tone.Destination);

export default function App() {
  const [synth, setSynth] = useState(engine);
  const [detune, setDetune] = useState(0);
  const [osc, setOsc] = useState(synth.get().oscillator.type);

  const playSynth = async (e) => {
    await triggerKeyDownPlay(e);
    await triggerOnClickPlay(e);
  };

  const triggerKeyDownPlay = async (e) => {
    if (e.type === 'keydown' && keyboardSwitch(e)) {
      await Tone.start();
      const note = keyboardSwitch(e);
      synth.triggerAttackRelease(note, '8n');
      toggleActiveKeydown(note);
      return;
    }
  };

  const triggerOnClickPlay = async (e) => {
    if (e.target.attributes.note) {
      await Tone.start();
      const note = e.target.attributes.note.value;
      synth.triggerAttackRelease(note, '8n');
      console.log(note);
      return;
    }
  };

  const activateKey = (e) => {
    toggleActiveClick(e);
  };

  const toggleActiveClick = (e) => {
    e.target.classList.toggle('active');
    setTimeout(() => e.target.classList.toggle('active'), 100);
  };

  const toggleActiveKeydown = (note) => {
    const keyboard = document.querySelector('.keyboard');
    const keys = Array.from(keyboard.childNodes);
    const key = keys.find((k) => note === k.attributes.note.value);
    key.classList.toggle('active');
    setTimeout(() => key.classList.toggle('active'), 100);
  };

  useEffect(() => {
    window.addEventListener('keydown', playSynth);
    window.addEventListener('click', playSynth);
  }, []);

  return (
    <div className='App'>
      <label>
        Detune:
        <input
          type='range'
          name='detune'
          min='-1200'
          max='1200'
          value={detune}
          onChange={(e) => {
            setDetune(e.target.value);
            synth.set({ detune: detune });
          }}
        />
      </label>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          AM Sine:
          <input
            type='radio'
            name='octave'
            value='amsine'
            onChange={(e) => {
              setOsc(e.target.value);
            }}
          />
        </label>
        <label>
          Square:
          <input
            type='radio'
            name='octave'
            value='square'
            defaultChecked
            onChange={(e) => {
              setOsc(e.target.value);
            }}
          />
        </label>
        <label>
          FM Triange:
          <input
            type='radio'
            name='octave'
            value='fmtriangle'
            onChange={(e) => {
              setOsc(e.target.value);
            }}
          />
        </label>
        <button onClick={() => synth.set({ oscillator: { type: osc } })}>
          Set Oscillator Type
        </button>
      </form>
      <Keyboard activateKey={activateKey} />
      <Scene />
    </div>
  );
}
