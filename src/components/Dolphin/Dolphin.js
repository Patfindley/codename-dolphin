import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import dolphinImg from '../../assets/dolphin.svg';
import { convertRangeScale } from '../../util/rangeScaling';
import './Dolphin.css';

const Dolphin = ({ detune, cutoff, gain }) => {
  useEffect(() => {
    gsap.to('.dolphin-container', {
      y: -convertRangeScale([-1200, 1200], [-200, 200], detune),
      duration: 2,
      ease: 'elastic',
    });
  }, [detune]);

  useEffect(() => {
    gsap.to('.dolphin-container', {
      x: convertRangeScale([-500, 8000], [-200, 200], cutoff),
      duration: 2,
      ease: 'elastic',
    });
  }, [cutoff]);

  useEffect(() => {
    gsap.to('.dolphin-container', {
      scale: convertRangeScale([-30, -9], [0.1, 2], gain),
      duration: 1,
      ease: 'elastic',
    });
  }, [gain]);

  return (
    <div className='dolphin-container'>
      <img className='dolphin' src={dolphinImg} alt='dolphin' />
    </div>
  );
};

export default Dolphin;
