import React, { useEffect } from 'react';
import { gsap, TweenLite, TimelineMax } from 'gsap';
import dolphinImg from '../../assets/dolphin.svg';
import './Dolphin.css';

const Dolphin = ({ detune, cutoff }) => {

  useEffect(() => {
    gsap.to('.dolphin-container', { y: -Math.min(Math.max(detune, -100), 100), duration: 1, ease: 'elastic' });
  }, [detune]);

  useEffect(() => {
    gsap.to('.dolphin-container', { x: Math.min(Math.max(cutoff - 1200, -100), 100), duration: 0.5, ease: 'bounce' });
  }, [cutoff]);

  return (
    <div className='dolphin-container'>
      <img className='dolphin' src={dolphinImg} alt='dolphin' />
    </div>
  );
};

export default Dolphin;
