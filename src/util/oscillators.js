import * as Tone from 'tone';

const synth = new Tone.PolySynth();
synth.set({
  oscillator: { type: 'square' },
  envelope: {
    attack: 2,
    decay: 2,
    sustain: 1,
    release: 1,
  },
});

export default synth;

// state would hold value of knob on DOM
// change handler that would call synth.set(put value of state in here)
