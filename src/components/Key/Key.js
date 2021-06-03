import React, { useState } from 'react';
import './Key.css';

const Key = ({ note, index, activateKey, isSharp }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={isSharp ? 'key sharp' : 'key'}>
      <div className='note-display'>{note.toUpperCase()}</div>
    </div>
  );
};

export default Key;
