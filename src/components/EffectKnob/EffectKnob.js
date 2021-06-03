import React from 'react';

export default function EffectKnob({
  name,
  min,
  max,
  value,
  handleChange,
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
        onChange={handleChange}
      />
    </label>
  );
}
