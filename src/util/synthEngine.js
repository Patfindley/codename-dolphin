import * as Tone from 'tone'
import synth from './oscillators'
import filter from './filter'
import bitcrusher from './bitcrusher'

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



const widener = new Tone.StereoWidener(0.6);

// const synthEngine = synth.chain(feedbackDelay, filter, reverb, widener, bitcrusher, Tone.Destination);
const synthEngine = synth.chain(Tone.Destination);

export default synthEngine