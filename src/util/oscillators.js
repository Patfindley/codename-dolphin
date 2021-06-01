import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: 'fatsawtooth32',
  },
  envelope: {
    attack: 1,
    decay: 10,
    sustain: 0.3,
    release: 1,
  },
});

export default synth;