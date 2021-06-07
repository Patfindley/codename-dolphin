import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from "styled-components";
import { convertRangeScale } from '../../util/rangeScaling';
import dolphinImg from '../../assets/dolphin.svg';

const DolphinContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  user-select: none;
  pointer-events: none;
`
const DolphinImg = styled.img`
  position: relative;
  width: 300px;
  height: 300px;
  left:150px;
  top: -50px;
`

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
    <DolphinContainer className='dolphin-container'>
      <DolphinImg className='dolphin' src={dolphinImg} alt='dolphin' />
    </DolphinContainer>
  );
};

export default Dolphin;
