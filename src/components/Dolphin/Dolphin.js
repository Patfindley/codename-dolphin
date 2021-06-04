import React, { useEffect } from 'react';
import { gsap, TweenLite, TimelineMax } from 'gsap';
import dolphinImg from '../../assets/dolphin.svg';
import './Dolphin.css';

const Dolphin = ({ detune, cutoff, gain }) => {
  const detuneToScale = () => {
    const xMax = 200;
    const xMin = -200;
    const yMax = 1200;
    const yMin = -1200;
    const yInput = detune;
    const percent = (yInput - yMin) / (yMax - yMin);
    return percent * (xMax - xMin) + xMin;
  };

  const gainToScale = () => {
    const xMax = 2;
    const xMin = 0.1;
    const yMax = -9;
    const yMin = -30;
    const yInput = gain;
    const percent = (yInput - yMin) / (yMax - yMin);
    return percent * (xMax - xMin) + xMin;
  };

  const cutoffToScale = () => {
    const xMax = 200;
    const xMin = -200;
    const yMax = 8000;
    const yMin = 500;
    const yInput = cutoff;
    const percent = (yInput - yMin) / (yMax - yMin);
    return percent * (xMax - xMin) + xMin;
  };

  useEffect(() => {
    gsap.to('.dolphin-container', {
      y: -detuneToScale(),
      duration: 2,
      ease: 'elastic',
    });
  }, [detune]);

  useEffect(() => {
    gsap.to('.dolphin-container', {
      x: cutoffToScale(),
      duration: 2,
      ease: 'elastic',
    });
  }, [cutoff]);

  useEffect(() => {
    gsap.to('.dolphin-container', {
      scale: gainToScale(),
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
