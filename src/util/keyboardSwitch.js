const octave = 4

const noteValues = {
  65: `C${octave}`,
  87: `C#${octave}`,
  83: `D${octave}`,
  69: `D#${octave}`,
  68: `E${octave}`,
  70: `F${octave}`,
  84: `F#${octave}`,
  71: `G${octave}`,
  89: `G#${octave}`,
  72: `A${octave}`,
  85: `A#${octave}`,
  74: `B${octave}`,
  75: `C${octave + 1}`,
  79: `C#${octave + 1}`,
  76: `D${octave + 1}`,
  80: `D#${octave + 1}`,
  186: `E${octave + 1}`,
  222: `F${octave + 1}`,
};

const keyboardSwitch = (e, octave) => {
  const keyCodes = Object.keys(noteValues).map((c) => parseInt(c));
  if (e.repeat) {
    return;
  }
  if (keyCodes.includes(e.keyCode)) {
    return noteValues[e.keyCode];
  }
};

export { keyboardSwitch, noteValues };
