import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import './App.css';
import {
  toggleActiveClick,
  toggleActiveKeydown,
} from '../../util/activateKeyUtil';
import keyboardSwitch from '../../util/keyboardSwitch';

import createSynth from '../SynthEngine/SynthEngine';
import Scene from '../Scene/Scene';
import Keyboard from '../Keyboard/Keyboard';
import EffectKnob from '../EffectKnob/EffectKnob';
import EffectToggle from '../EffectToggle/EffectToggle';

const { oscillators, delay, reverb, filter } = createSynth();
const engine = oscillators.chain(delay, reverb, filter, Tone.Destination);

export default function App() {
  const [synth] = useState(engine);
  const [detune, setDetune] = useState(0);
  const [cutoff, setCutoff] = useState(filter.get().frequency);
  const [oscType, setOscType] = useState(synth.get().oscillator.type);

  useEffect(() => {
    const triggerKeyDownPlay = async (e) => {
      if (e.type === 'keydown' && keyboardSwitch(e)) {
        await Tone.start();
        const note = keyboardSwitch(e);
        synth.triggerAttackRelease(note, '8n');
        toggleActiveKeydown(note);
        console.log(note);
        return;
      }
    };
    window.addEventListener('keydown', triggerKeyDownPlay);
  }, []);

  useEffect(() => {
    const triggerOnClickPlay = async (e) => {
      if (e.target.attributes.note) {
        await Tone.start();
        const note = e.target.attributes.note.value;
        synth.triggerAttackRelease(note, '8n');
        toggleActiveClick(e);
        console.log(note);
        return;
      }
    };
    window.addEventListener('click', triggerOnClickPlay);
  }, []);

  useEffect(() => {
    oscillators.set({ detune: detune });
  }, [detune]);

  useEffect(() => {
    synth.set({ oscillator: { type: oscType } });
  }, [oscType]);

  useEffect(() => {
    filter.set({ frequency: cutoff });
  }, [cutoff]);

  return (
    <div className='App'>
      <EffectKnob
        name='detune'
        label='Pitchy Bender'
        min='-1200'
        max='1200'
        value={detune}
        handleChange={(e) => {
          setDetune(e.target.value);
        }}
      />
      <EffectKnob
        name='lpfilter'
        label='LP Filter Cutoff'
        min='300'
        max='8000'
        value={cutoff}
        handleChange={(e) => {
          setCutoff(e.target.value);
        }}
      />
      <EffectToggle
        name='oscillator type'
        options={['amsine', 'square', 'fmtriangle']}
        labels={['AM Sine', 'Square', 'FM Triangle']}
        value={oscType}
        handleClick={(e) => {
          setOscType(e.target.value);
        }}
      />
      <Keyboard />
      <Scene
        wave={synth.options.oscillator.type}
      />
    </div>
  );
}
