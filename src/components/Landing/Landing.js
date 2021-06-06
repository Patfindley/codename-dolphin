import React, { useEffect } from 'react';
import DelayLink from '../DelayLink/DelayLink.js';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import styled from "styled-components";
import dolphinImg from '../../assets/dolphin.svg';
import './Landing.css';

const LandingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const LandingTitle = styled.h1`
  font-family: 'Bungee', cursive;
  cursor: crosshair;
`

const DolphinArm = styled.div`
  position: absolute;
  left: 53%;
  top: 50%;
  z-index: -1;
  user-select: none;
  pointer-events: none;
`


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
    <LandingContainer>
      {!audioCheck && window.alert('Sorry, this browser does not support Web Audio, which is required to use the instrument. You can still mess around but it probably won\'t be as fun. Anyways, have a great day! 🤠')}
      <DelayLink delay={1150} to='/synth'>
        <LandingTitle className='landing-title' onClick={clickAnimation}>
          {' '}
          Fuck It Up{' '}
        </LandingTitle>
      </DelayLink>
      <DolphinArm className='dolphin-arm'>
        <img className='dolphin-title' src={dolphinImg} alt='dolphin' />
      </DolphinArm>
      <Link to='/About'>
        <h3>
          About
        </h3>
      </Link>
    </LandingContainer>
  );

  // return (
  //   <div className='landing-container'>
  //     {!audioCheck && window.alert('Sorry, this browser does not support Web Audio, which is required to use the instrument. You can still mess around but it probably won\'t be as fun. Anyways, have a great day! 🤠')}
  //     <DelayLink delay={1150} to='/synth'>
  //       <h1 className='landing-title' onClick={clickAnimation}>
  //         {' '}
  //         Fuck It Up{' '}
  //       </h1>
  //     </DelayLink>
  //     <div className='dolphin-arm'>
  //       <img className='dolphin-title' src={dolphinImg} alt='dolphin' />
  //     </div>
  //     <Link to='/About'>
  //       <h3>
  //         About
  //       </h3>
  //     </Link>
  //   </div>
  // );
};

export default Landing;
