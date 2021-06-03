import React, { useState } from 'react';
import './Key.css';

const Key = ({ note, isSharp }) => {
  //   const [isActive, setIsActive] = useState(false);
  return (
    <div 
      className={isSharp ? 'key sharp' : 'key'} 
      note={note}>
      <div className='note-display'>{note.split(" ")[0].toUpperCase()}</div>
    </div>
  );
};

export default Key;
