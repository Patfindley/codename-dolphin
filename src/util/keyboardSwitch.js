const keyboardSwitch = (e) => {
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

  export default keyboardSwitch;