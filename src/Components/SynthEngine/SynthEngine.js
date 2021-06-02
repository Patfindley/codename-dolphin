import * as Tone from 'tone';

const createSynth = () => {
  const oscillators = new Tone.PolySynth();
  oscillators.set({
    oscillator: { type: 'square' },
    envelope: {
      attack: .5,
      decay: 1,
      sustain: 0,
      release: 1,
    },
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
    wet: 0.2,
  };
  const reverb = new Tone.Reverb(reverbOptions);

  const filterOptions = {
    frequency: 1200,
    type: 'lowpass',
  };
  const filter = new Tone.Filter(filterOptions);

  const synthEngine = oscillators.chain(
    feedbackDelay,
    filter,
    reverb,
    Tone.Destination
  );
  console.log('I made a synth');
  return synthEngine;
  // SIMPLIFIED FOR TESTING 👇
  // const synth = new Tone.Synth()
  // console.log('I made a synth');
  // return new Tone.Synth().chain(Tone.Destination);
};

export default createSynth;
