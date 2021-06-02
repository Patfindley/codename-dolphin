import React, { useState, useEffect } from 'react';
import Key from '../Key/Key.js'
import './Keyboard.css'
import '../../util/keyboardSwitch'
import keyboardSwitch from '../../util/keyboardSwitch'

const Keyboard = (props) => {
  const [pressedKeys, setPressedKeys] = useState([])
  const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
  const noteIsSharp = (note) => {
      return note.includes('#')
  }
  // const keyIsPressed = (note, pressedKeys) => {
  //   return 
  // }

  return (
  <div className="keyboard">
    {notes.map((note, index) => {
      let keyClassName = "key"
       if (noteIsSharp(note)) {
           keyClassName += " sharp"
        }
        if (noteIsSharp(note)) {
            return (
              <div className={keyClassName}>
              </div>    
            )   
        }

        return (
          <div className={keyClassName}>
             <Key 
                key={index}
                note={note}
                pressedKeys={pressedKeys} />
          </div>
    )})}
</div>
  )
}

export default Keyboard;