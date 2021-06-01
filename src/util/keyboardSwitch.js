const keyboardSwitch = (e, octave) => {
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
  const keyCodes = Object.keys(noteValues).map((c) => parseInt(c));
  if (e.repeat) {
    return;
  }
  return noteValues[e.keyCode];
};

// const keyboardSwitch = (e) => {
//   let note;
//   switch (e.keyCode) {
//     case 65:
//       note = `C4`;
//       break;
//     case 87:
//       note = `C#4`;
//       break;
//     case 83:
//       note = `D4`;
//       break;
//     case 69:
//       note = `D#4`;
//       break;
//     case 68:
//       note = `E4`;
//       break;
//     case 70:
//       note = `F4`;
//       break;
//     case 84:
//       note = `F#4`;
//       break;
//     case 71:
//       note = `G4`;
//       break;
//     case 89:
//       note = `G#4`;
//       break;
//     case 72:
//       note = `A4`;
//       break;
//     case 85:
//       note = `A#4`;
//       break;
//     case 74:
//       note = `B4`;
//       break;
//     case 75:
//       note = `C5`;
//       break;
//     case 79:
//       note = `C#5`;
//       break;
//     case 76:
//       note = `D5`;
//       break;
//     case 80:
//       note = `D#5`;
//       break;
//     case 186:
//       note = `E5`;
//       break;
//     case 222:
//       note = `F5`;
//       break;
//     default:
//       break;
//   }
//   return note;
// };

export { keyboardSwitch };
