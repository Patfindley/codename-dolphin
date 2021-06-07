import notesUtil from './notesUtil';

const keyCodes = [
  65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222,
];

const keyboardSwitch = (e) => {
  if (e.repeat) {
    return;
  }
  if (keyCodes.includes(e.keyCode)) {
    const index = keyCodes.indexOf(e.keyCode);
    return notesUtil[index];
  }
};

export default keyboardSwitch;
