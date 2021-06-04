import React from 'react';
import Key from '../Key/Key.js';
import './Keyboard.css';
import '../../util/keyboardSwitch';
import notesUtil from '../../util/notesUtil';

const computerKeys = [
  'A',
  'W',
  'S',
  'E',
  'D',
  'F',
  'T',
  'G',
  'Y',
  'H',
  'J',
  'I',
  'K',
  'O',
  'L',
  'P',
  ';',
  "'",
];

const Keyboard = ({ screenWidth }) => {
  const notes = notesUtil.map((n) => n.split(' ').join(''));

  const noteIsSharp = (note) => {
    return note.includes('#');
  };

  const mapNotes = (notes) => {
    return notes.map((note, index) => {
      let name;
      if (screenWidth < 1024) {
        // name = '👇'; could put different symbol on mobile
      } else {
        name = computerKeys[index];
      }
      if (noteIsSharp(note)) {
        return <Key key={index} note={note} name={name} isSharp={true} />;
      } else {
        return <Key key={index} note={note} name={name} />;
      }
    });
  };

  return <div className='keyboard'>{mapNotes(notes)}</div>;
};

export default Keyboard;
