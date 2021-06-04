import React, { useCallback } from 'react';
import './EffectToggle.css';

export default function EffectToggle({ name, options, labels, value, handleClick }) {
  const toggleSelect = useCallback(
    (node) => {
      if (node !== null && node.value === value) {
        node.className = 'selected';
      } else if (node !== null) {
        node.className = '';
      }
    },
    [value]
  );

  const mapOptions = (options) => {
    return options.map((o, index) => (
      <button
        ref={toggleSelect}
        key={index}
        name={name}
        value={o}
        onClick={handleClick}
      >
        {labels[index]}
      </button>
    ));
  };

  const selectors = mapOptions(options);

  return <div>{selectors}</div>;
}
