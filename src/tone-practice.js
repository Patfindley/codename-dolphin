import React, {
  useEffect
} from 'react';
import * as Tone from 'tone';

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

synth.chain(feedbackDelay, filter, reverb, widener, Tone.Destination);
const playSynth = async (e) => {
  await Tone.start();
  synth.triggerAttackRelease(keyboard(e), '8n');
};

const keyboard = (e) => {
  let note;
  switch (e.keyCode) {
    case 65:
      note = 'C4';
      break;
    case 87:
      note = 'C#4';
      break;
    case 83:
      note = 'D4';
      break;
    case 69:
      note = 'D#4';
      break;
    case 68:
      note = 'E4';
      break;
    case 70:
      note = 'F4';
      break;
    case 84:
      note = 'F#4';
      break;
    case 71:
      note = 'G4';
      break;
    case 89:
      note = 'G#4';
      break;
    case 72:
      note = 'A4';
      break;
    case 85:
      note = 'A#4';
      break;
    case 74:
      note = 'B4';
      break;
    case 75:
      note = 'C5';
      break;
    case 79:
      note = 'C#5';
      break;
    case 76:
      note = 'D5';
      break;
    case 80:
      note = 'D#5';
      break;
    case 186:
      note = 'E5';
      break;
    case 222:
      note = 'F5';
      break;
    default:
      break;
  }
  return note;
};

export default function App() {
  useEffect(() => {
    window.addEventListener('keydown', playSynth);
  }, []);
  return (
    <div>
      <label>
        Frequency Cutoff:
        <input
          type='range'
          name='freq'
          min='100'
          max='13000'
          onChange={(e) => {
            // probably want to change e.target.value to reflect state instead
            filter.set({ frequency: e.target.value });
          }}
        />
      </label>
    </div>
  );
}
