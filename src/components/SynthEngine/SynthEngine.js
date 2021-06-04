import * as Tone from 'tone';

const createSynth = () => {
  const oscillators = new Tone.PolySynth();
  oscillators.set({
    oscillator: { type: 'square' },
    envelope: {
      attack: 0.5,
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
    rolloff: -24,
    Q: 3
  };
  const filter = new Tone.Filter(filterOptions);

  const volume = new Tone.Volume(-20)

  const synthHardware = {
    oscillators: oscillators,
    delay: feedbackDelay,
    reverb: reverb,
    filter: filter,
    volume: volume
  };

  console.log('I made a synth');

  return synthHardware;
};

export default createSynth;
