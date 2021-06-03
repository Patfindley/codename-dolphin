import React, { useState, useEffect } from 'react';
import Key from '../Key/Key.js';
import './Keyboard.css';
import '../../util/keyboardSwitch';

const Keyboard = (props) => {
  const [activeKeys, setActiveKeys] = useState([]);
  const notes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
  ];
  const noteIsSharp = (note) => {
    return note.includes('#');
  };

  const activateKey = (key) => {
    //if note === key.note
    //keyClassName += " active"
  };

  const mapNotes = (notes) => {
    return notes.map((note, index) => {
      if (noteIsSharp(note)) {
        console.log(note, 'sharp')
        return (
          <Key
            key={index}
            note={note}
            activateKey={activateKey}
            isSharp={true}
          /> 
        );
      } else {
        return (
          <Key
            key={index}
            note={note}
            activateKey={activateKey}
          />
        );
      }
    });
  };

  return <div className='keyboard'>{mapNotes(notes)}</div>;
};

export default Keyboard;
