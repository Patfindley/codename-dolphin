import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import * as Tone from 'tone';
import './App.css';
import toggleActive from '../../util/activateKeyUtil';
import keyboardSwitch from '../../util/keyboardSwitch';

import Landing from '../Landing/Landing'
import createSynth from '../SynthEngine/SynthEngine';
import Scene from '../Scene/Scene';
import Keyboard from '../Keyboard/Keyboard';
import EffectKnob from '../EffectKnob/EffectKnob';
import EffectToggle from '../EffectToggle/EffectToggle';
import Dolphin from '../Dolphin/Dolphin';

const { oscillators, delay, reverb, filter, volume, compressor, distortion } =
  createSynth();
const engine = oscillators.chain(
  delay,
  distortion,
  reverb,
  filter,
  volume,
  compressor,
  Tone.Destination
);

export default function App() {
  const [synth] = useState(engine);
  const [detune, setDetune] = useState(0);
  const [cutoff, setCutoff] = useState(filter.get().frequency);
  const [oscType, setOscType] = useState(synth.get().oscillator.type);
  const [gain, setGain] = useState(volume.get().volume);
  const [distortionWet, setDistortionWet] = useState(distortion.get().wet);

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
    volume.set({ volume: gain });
  }, [gain]);

  useEffect(() => {
    distortion.set({ wet: distortionWet });
  }, [distortionWet]);

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
    setDetune(e.target.value);
  };

  const convertDistortionRange = (value) => {
    const xMax = 100;
    const xMin = 0;
    const xInput = value;
    const yMax = 1;
    const yMin = 0;
    const percent = (xInput - xMin) / (xMax - xMin);
    return percent * (yMax - yMin) + yMin;
  };

  const convertDistortionValue = (value) => {
    const xMax = 100;
    const xMin = 0;
    const yMax = 1;
    const yMin = 0;
    const yInput = value;
    const percent = (yInput - yMin) / (yMax - yMin);
    return percent * (xMax - xMin) + xMin;
  };

  const distRange = convertDistortionValue(distortionWet);

  return (
    <Switch>
      <Route exact path='/'
        render={() => (
            <Landing />
        )} />
      <Route exact path='/synth'
        render={() => (
    <div className='App'>
      <section className='effects-section'>
        <EffectKnob
          name='distortion'
          label='Angeryness'
          min='0'
          max='100'
          value={distRange}
          handleChange={(e) => {
            controlScroll(e, 6, distRange);
            setDistortionWet(convertDistortionRange(e.target.value));
          }}
        />
        <EffectKnob
          name='detune'
          label='Bendyness'
          min='-1200'
          max='1200'
          value={detune}
          handleChange={(e) => {
            controlScroll(e, 500, detune);
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
          label='Volumeyness'
          min='-30'
          max='-9'
          value={gain}
          handleChange={(e) => {
            controlScroll(e, 1, gain);
            setGain(e.target.value);
          }}
        />
      </section>
      <Keyboard />
      <Dolphin detune={detune} cutoff={cutoff} gain={gain} />
      <Scene wave={oscType} />
    </div>
    )} />
    </Switch>
  );
}
