import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import * as Tone from 'tone';
import './App.css';
import toggleActive from '../../util/activateKeyUtil';
import keyboardSwitch from '../../util/keyboardSwitch';
import {
  convertRangeScale,
  convertRangeValue,
  controlScroll,
} from '../../util/rangeScaling';

import Landing from '../Landing/Landing';
import createSynth from '../SynthEngine/SynthEngine';
import Scene from '../Scene/Scene';
import Keyboard from '../Keyboard/Keyboard';
import EffectKnob from '../EffectKnob/EffectKnob';
import EffectToggle from '../EffectToggle/EffectToggle';
import Dolphin from '../Dolphin/Dolphin';
import RotateMessage from '../RotateMessage/RotateMessage';
import About from '../About/About';

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
  const [currentNote, setCurrentNote] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [keyHelp, setKeyHelp] = useState('on');
  const [cameraX, setCameraX] = useState(Math.random() * 5);
  const [cameraY, setCameraY] = useState(Math.random() * 6);
  const [cameraZ, setCameraZ] = useState(Math.random() * 7);
  const [audioCheck, setAudioCheck] = useState(true);
  const [cameraPositions] = useState([cameraX, cameraY, cameraZ]);

  useEffect(() => {
    if (!window.BaseAudioContext) {
      setAudioCheck(false);
    }
  }, []);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const triggerKeyDownPlay = async (e) => {
      if (e.type === 'keydown' && keyboardSwitch(e)) {
        await Tone.start();
        const note = keyboardSwitch(e);
        synth.triggerAttackRelease(note, '8n');
        toggleActive(note);
        setCurrentNote(note);
        setTimeout(() => setCurrentNote(''), 0);
        return;
      }
    };
    window.addEventListener('keydown', triggerKeyDownPlay);
  }, [synth]);

  useEffect(() => {
    const triggerOnClickPlay = async (e) => {
      if (e.target.attributes.note) {
        await Tone.start();
        const note = e.target.attributes.note.value;
        synth.triggerAttackRelease(note, '8n');
        toggleActive(note);
        setCurrentNote(note);
        setTimeout(() => setCurrentNote(''), 0);
        return;
      }
    };
    window.addEventListener('click', triggerOnClickPlay);
  }, [synth]);

  useEffect(() => {
    oscillators.set({ detune: detune });
  }, [detune]);

  useEffect(() => {
    synth.set({ oscillator: { type: oscType } });
  }, [synth, oscType]);

  useEffect(() => {
    filter.set({ frequency: cutoff });
  }, [cutoff]);

  useEffect(() => {
    volume.set({ volume: gain });
  }, [gain]);

  useEffect(() => {
    distortion.set({ wet: distortionWet });
  }, [distortionWet]);

  const resetDetune = (e) => {
    e.target.value = 0;
    setDetune(e.target.value);
  };

  useEffect(() => {
    setCameraX(Math.floor(Math.random() * 6));
    setCameraY(Math.floor(Math.random() * 7));
    setCameraZ(Math.floor(Math.random() * 8));
  }, [oscType]);

  const distRange = convertRangeScale([0, 1], [0, 100], distortionWet);

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Landing audioCheck={audioCheck} />}
      />
      <Route exact path='/about' render={() => <About />}></Route>
      <Route
        exact
        path='/synth'
        render={() => (
          <div className='App'>
            {screenWidth <= 480 && <RotateMessage screenWidth={screenWidth} />}
            <section className='effects-section'>
              <EffectKnob
                name='distortion'
                label='Angeryness'
                min='0'
                max='100'
                value={distRange}
                handleChange={(e) => {
                  controlScroll(e, 6, distRange);
                  setDistortionWet(
                    convertRangeValue([0, 100], [0, 1], e.target.value)
                  );
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
              {screenWidth > 1024 && (
                <div className='key-help-toggle'>
                  <p>Key Help:</p>
                  <EffectToggle
                    name='keyhelp'
                    options={['on', '']}
                    labels={['On', 'Off']}
                    value={keyHelp}
                    handleClick={(e) => {
                      setKeyHelp(e.target.value);
                    }}
                  />
                </div>
              )}
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
              {screenWidth > 1024 && (
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
              )}
            </section>
            <Keyboard screenWidth={screenWidth} keyHelp={keyHelp} />
            <Dolphin detune={detune} cutoff={cutoff} gain={gain} />
            <Scene
              wave={oscType}
              currentNote={currentNote}
              distortionWet={distortionWet}
              cameraPositions={cameraPositions}
            />
            <Link to='/about'>
                <button
                  className='how-to-button'
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'fixed', bottom: '4%', left: '4%', zIndex: 9999}}
                >
                  How To Play
                </button>
            </Link>
          </div>
        )}
      />
      <Redirect to='/' />
    </Switch>
  );
}
