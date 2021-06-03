import React from 'react';
import Key from '../Key/Key.js';
import './Keyboard.css';
import '../../util/keyboardSwitch';
import notesUtil from '../../util/notesUtil';

const Keyboard = ({ activateKey }) => {
  const notes = notesUtil.map((n) => n.split(' ').join(''));

  const noteIsSharp = (note) => {
    return note.includes('#');
  };

  const mapNotes = (notes) => {
    return notes.map((note, index) => {
      let name = notesUtil[index].split(' ')[0];
      if (noteIsSharp(note)) {
        return <Key key={index} note={note} name={name} isSharp={true} />;
      } else {
        return <Key key={index} note={note} name={name} />;
      }
    });
  };

  return (
    <div className='keyboard' onClick={activateKey}>
      {mapNotes(notes)}
    </div>
  );
};

export default Keyboard;
