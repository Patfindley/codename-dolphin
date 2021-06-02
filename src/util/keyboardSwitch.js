const keyboardSwitch = (e, octave) => {
  const noteValues = {
    // 65: `C`,
    // 87: `C#`,
    // 83: `D`,
    // 69: `D#`,
    // 68: `E`,
    // 70: `F`,
    // 84: `F#`,
    // 71: `G`,
    // 89: `G#`,
    // 72: `A`,
    // 85: `A#`,
    // 74: `B`,
    // 75: `C`,
    // 79: `C#`,
    // 76: `D`,
    // 80: `D#`,
    // 186: `E`,
    // 222: `F`,
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
  const keyCodes = Object.keys(noteValues).map((c) => parseInt(c));
  if (e.repeat) {
    return;
  }
  if (keyCodes.includes(e.keyCode)) {
    return noteValues[e.keyCode];
  }
};

export default keyboardSwitch;
