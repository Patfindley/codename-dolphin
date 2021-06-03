import React, { useState } from 'react';

export default function EffectKnob({
  name,
  hardware,
  min,
  max,
  value,
  setState,
}) {
  return (
    <label className='effect-knob'>
      {name}
      <input
        type='range'
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          setState(e.target.value);
          hardware.set({ [name]: value });
        }}
      />
    </label>
  );
}
