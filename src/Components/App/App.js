import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import * as Tone from 'tone';
import './App.css';
import createSynth from '../SynthEngine/SynthEngine';
import keyboardSwitch from '../../util/keyboardSwitch';
import Scene from '../Scene/Scene';

const { oscillators, delay, reverb, filter } = createSynth();
const engine = oscillators.chain(delay, reverb, filter, Tone.Destination);

export default function App() {
  const [synth, setSynth] = useState(engine);
  const [octave, setOctave] = useState(4);
  const [detune, setDetune] = useState(0);
  const [osc, setOsc] = useState(synth.get().oscillator.type);
  
  const playSynth = async (e) => {
    await Tone.start();
    if (keyboardSwitch(e, octave)) {
      let note = keyboardSwitch(e, octave);
      synth.triggerAttackRelease(note, '8n');
      console.log(note);
      console.log(synth.get());
      console.log(synth);
    }
  };
  
  useEffect(() => {
    console.log(delay);
    window.addEventListener('keydown', playSynth);
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
      <Scene/>
    </div>
  );
}
