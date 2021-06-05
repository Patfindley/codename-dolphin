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
    delayTime: 0.1,
    feedback: 0.2,
    wet: 0.3,
  };
  const feedbackDelay = new Tone.PingPongDelay(delayOptions);

  const reverbOptions = {
    decay: 5,
    preDelay: 0.4,
    wet: 0.2,
  };
  const reverb = new Tone.Reverb(reverbOptions);

  const filterOptions = {
    frequency: 1200,
    type: 'lowpass',
    rolloff: -24,
    Q: 3,
  };
  const filter = new Tone.Filter(filterOptions);

  const distortionOptions = {
    distortion: 0.9,
    wet: 0,
  };
  const distortion = new Tone.Distortion(distortionOptions);

  const volume = new Tone.Volume(-20);

  const compressorOptions = {
    attack: 0.01,
    ratio: 5,
    release: 0.5,
    threshold: -40,
    knee: 10,
  };

  const compressor = new Tone.Compressor(compressorOptions);

  const synthHardware = {
    oscillators: oscillators,
    delay: feedbackDelay,
    reverb: reverb,
    filter: filter,
    volume: volume,
    compressor: compressor,
    distortion: distortion,
  };

  console.log('I made a synth');

  return synthHardware;
};

export default createSynth;
