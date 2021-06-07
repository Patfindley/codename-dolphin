import React from 'react';
import styled from "styled-components";
import Key from '../Key/Key.js';
import '../../util/keyboardSwitch';
import notesUtil from '../../util/notesUtil';
import computerKeys from '../../util/computerKeys';

const KeyboardDisplay = styled.div`
  width: 100%;
  min-width: 1045px;
  height: 15em;
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: 9999;
  padding: 0 5em;
  box-sizing: border-box;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    bottom: -20%;
    width: 100%;
    min-width: auto;
    padding: 1em
  }
`

const Keyboard = ({screenWidth, keyHelp}) => {
  const notes = notesUtil.map((n) => n.split(' ').join(''));
  
  const mapNotes = (notes) => {
    const noteIsSharp = (note) => {
      return note.includes('#');
    };
    return notes.map((note, index) => {
      let name;
      if (screenWidth < 1024) {
        // name = '👇'; could put different symbol on mobile
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

  return <KeyboardDisplay className='keyboard'>{keys}</KeyboardDisplay>;
};

export default Keyboard;
