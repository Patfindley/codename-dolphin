import React, { useEffect } from 'react';
import DelayLink from '../DelayLink/DelayLink.js';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import styled from 'styled-components';
import dolphinImg from '../../assets/dolphin.svg';

const LandingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 2em;
`;
const LandingTitle = styled.h1`
  font-size: 3em;
  font-family: 'Bungee', cursive;
  cursor: crosshair;
  width: 40%
  text-align: center
`;
const DolphinArm = styled.div`
  position: absolute;
  left: 53%;
  top: 50%;
  z-index: -1;
  user-select: none;
  pointer-events: none;
`;
const DolphinTitle = styled.img`
  position: relative;
  opacity: 0;
  width: 300px;
  height: 300px;
  left: 150px;
  top: -50px;
`;

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
      {!audioCheck &&
        window.alert(
          "Sorry, this browser does not support Web Audio, which is required to use the instrument. You can still mess around but it probably won't be as fun. Anyways, have a great day! 🤠"
        )}
      <DelayLink delay={1150} to='/synth'>
        <LandingTitle className='landing-title' onClick={clickAnimation}>
          Get Down With The Synthness
        </LandingTitle>
      </DelayLink>
      <DolphinArm className='dolphin-arm'>
        <DolphinTitle
          className='dolphin-title'
          src={dolphinImg}
          alt='dolphin'
        />
      </DolphinArm>
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <h3
          style={{
            color: 'white',
            marginTop: '1em',
            fontSize: '2em',
          }}
        >
          How To Play
        </h3>
      </Link>
    </LandingContainer>
  );
};

export default Landing;
