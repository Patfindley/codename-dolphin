import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: 'fatsawtooth32',
  },
  envelope: {
    attack: 1,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  },
  portamento: 4,
});

const delayOptions = {
  delayTime: '4hz',
  feedback: 0.4,
  wet: 0.4,
};
const feedbackDelay = new Tone.FeedbackDelay(delayOptions);

const reverbOptions = {
  decay: 5,
  preDelay: 0.2,
  wet: 0.4,
};
const reverb = new Tone.Reverb(reverbOptions);

const filterOptions = {
  type: 'lowpass',
};
const filter = new Tone.Filter(filterOptions);

const widener = new Tone.StereoWidener(0.6);

const synthEngine = synth.chain(feedbackDelay, filter, reverb, widener, Tone.Destination);

export default synthEngine