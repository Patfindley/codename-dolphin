import * as Tone from 'tone';

const createSynth = () => {
  // const oscillators = new Tone.PolySynth();
  // oscillators.set({
  //   oscillator: { type: 'square' },
  //   envelope: {
  //     attack: 2,
  //     decay: 2,
  //     sustain: 1,
  //     release: 1,
  //   },
  // });
  // const oscillators = new Tone.Synth()

  // const delayOptions = {
  //   delayTime: '4hz',
  //   feedback: 0.4,
  //   wet: 0.4,
  // };
  // const feedbackDelay = new Tone.FeedbackDelay(delayOptions);

  // const reverbOptions = {
  //   decay: 5,
  //   preDelay: 0.2,
  //   wet: 0.4,
  // };
  // const reverb = new Tone.Reverb(reverbOptions);

  // const filterOptions = {
  //   frequency: 800,
  //   type: 'lowpass',
  // };
  // const filter = new Tone.Filter(filterOptions);

  // const synthEngine = oscillators.chain(
  //   feedbackDelay,
  //   filter,
  //   reverb,
  //   Tone.Destination
  // );
  // return synthEngine;
  // SIMPLIFIED FOR TESTING 👇
  return new Tone.Synth().toDestination()
};

export default createSynth;
