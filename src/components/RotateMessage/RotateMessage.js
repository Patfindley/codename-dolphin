import React, { useEffect } from 'react';
import './RotateMessage.css';
import { gsap } from 'gsap';

export default function RotateMessage({ screenWidth }) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo(
      '.rotate-text',
      { y: 250, rotation: -15, scale: 1.5},
      { y: 250, rotation: 25, scale: 1.5}
    );
  }, [screenWidth]);
  return (
    <p className='rotate-text'>Rotate Me! 📱 ⤵</p>
  );
}
