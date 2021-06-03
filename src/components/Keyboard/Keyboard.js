import React, { useState, useEffect } from 'react';
import Key from '../Key/Key.js';
import './Keyboard.css';
import '../../util/keyboardSwitch';

const Keyboard = ({ activateKey }) => {

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

  const mapNotes = (notes) => {
    return notes.map((note, index) => {
      if (noteIsSharp(note)) {
        return <Key key={index} note={note + " " + index} isSharp={true} />;
      } else {
        return <Key key={index} note={note + " " + index} />;
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
