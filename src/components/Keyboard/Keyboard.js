import React from 'react';
import Key from '../Key/Key.js';
import './Keyboard.css';
import '../../util/keyboardSwitch';
import notesUtil from '../../util/notesUtil';
import computerKeys from '../../util/computerKeys';

const Keyboard = ({ screenWidth, keyHelp }) => {
  const notes = notesUtil;

  const mapNotes = (notes) => {
    const noteIsSharp = (note) => {
      return note.includes('#');
    };
    return notes.map((note, index) => {
      let name;
      if (screenWidth < 1024) {
        name = '';
      } else {
        name = computerKeys[index];
      }
      if (noteIsSharp(note)) {
        return (
          <Key key={index} note={note} name={keyHelp && name} isSharp={true} />
        );
      } else {
        return <Key key={index} note={note} name={keyHelp && name} />;
      }
    });
  };

  const keys = mapNotes(notes);

  return <div className='keyboard'>{keys}</div>;
};

export default Keyboard;
