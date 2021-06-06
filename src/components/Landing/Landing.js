import React, { useEffect } from 'react';
import DelayLink from '../DelayLink/DelayLink.js';
import { gsap } from 'gsap';
import dolphinImg from '../../assets/dolphin.svg';
import './Landing.css';

const Landing = ({ audioCheck }) => {
  const clickAnimation = () => {
    gsap.to('.dolphin-arm', 5, { rotation: -360, transformOrigin: 'left' });
    gsap.to('.dolphin-title', 5, { rotation: 200, opacity: 1 }, 0);
  };
  useEffect(() => {
    gsap.fromTo(
      '.landing-title',
      {
        color: () => {
          return `hsl(360, 100%, 50% )`;
        },
      },
      {
        color: 'hsl(+=360, +=0%, +=0%)',
        duration: 5.5,
        repeat: -1,
        ease: 'none',
      }
    );
  });

  return (
    <div className='landing-container'>
      {!audioCheck && window.alert('Sorry, this browser does not support Web Audio, which is required to use the instrument. You can still mess around but it probably won\'t be as fun. Anyways, have a great day! 🤠')}
      <DelayLink delay={1150} to='/synth'>
        <h1 className='landing-title' onClick={clickAnimation}>
          CLICK EM' ALL
        </h1>
      </DelayLink>
      <div className='dolphin-arm'>
        <img className='dolphin-title' src={dolphinImg} alt='dolphin' />
      </div>
    </div>
  );
};

export default Landing;
