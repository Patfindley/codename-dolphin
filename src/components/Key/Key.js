import React, { useState } from 'react';
import './Key.css';

const Key = ({ note, isSharp, name }) => {
  return (
    <div className={isSharp ? 'key sharp' : 'key'} note={note}>
      <div className='note-display'>{name}</div>
    </div>
  );
};

export default Key;
