import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { gsap } from 'gsap';
import './App.css';
import toggleActive from '../../util/activateKeyUtil';
import keyboardSwitch from '../../util/keyboardSwitch';

import createSynth from '../SynthEngine/SynthEngine';
import Scene from '../Scene/Scene';
import Keyboard from '../Keyboard/Keyboard';
import EffectKnob from '../EffectKnob/EffectKnob';
import EffectToggle from '../EffectToggle/EffectToggle';
import Dolphin from '../Dolphin/Dolphin';

const { oscillators, delay, reverb, filter, volume } = createSynth();
const engine = oscillators.chain(delay, reverb, filter, volume, Tone.Destination);

export default function App() {
  const [synth] = useState(engine);
  const [detune, setDetune] = useState(0);
  const [cutoff, setCutoff] = useState(filter.get().frequency);
  const [oscType, setOscType] = useState(synth.get().oscillator.type);
  const [gain, setGain] = useState(volume.get().volume)

  useEffect(() => {
    const triggerKeyDownPlay = async (e) => {
      if (e.type === 'keydown' && keyboardSwitch(e)) {
        await Tone.start();
        const note = keyboardSwitch(e);
        synth.triggerAttackRelease(note, '8n');
        toggleActive(note);
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
        toggleActive(note);
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

  useEffect(() => {
    volume.set({volume: gain})
  }, [gain])

  const controlScroll = (e, power, state) => {
    if (e.type === 'wheel') {
      if (e.deltaY < 0) {
        e.target.value = parseInt(state) + power;
      } else {
        e.target.value = parseInt(state) - power;
      }
    }
  };

  const resetDetune = (e) => {
    e.target.value = 0;
    setDetune(e.target.value)
  }

  return (
    <div className='App'>
      <section className='effects-section'>
        <EffectKnob
          name='detune'
          label='Bendyness'
          min='-1200'
          max='1200'
          value={detune}
          handleChange={(e) => {
            controlScroll(e, 60, detune);
            setDetune(e.target.value);
          }}
          resetDetune={resetDetune}
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
        <EffectKnob
          name='lpfilter'
          label='Sharpyness'
          min='500'
          max='8000'
          value={cutoff}
          handleChange={(e) => {
            controlScroll(e, 400, cutoff);
            setCutoff(e.target.value);
          }}
        />
        <EffectKnob 
          name='volume'
          label='Volume'
          min='-30'
          max='-9'
          value={gain}
          handleChange={(e) => {
            controlScroll(e, 1, gain);
            setGain(e.target.value)
          }}
        />
      </section>
      <Keyboard />
      <Dolphin detune={detune} cutoff={cutoff} gain={gain}/>
      <Scene wave={oscType} />
    </div>
  );
}
