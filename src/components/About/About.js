import styled from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const AboutContainer = styled.div`
  height: 95%;
  padding-top: 40px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 950px) {
    padding-top: 200px;
  }
  @media only screen and (max-width: 425px) {
    padding-top: 300px;
  }
  @media only screen and (max-width: 375px) {
    padding-top: 200px;
  }
  @media only screen and (max-width: 320px) {
    padding-top: 275px;
  }
`;
const Heading = styled.h1`
  font-family: 'Bungee', cursive;
  @media only screen and (max-width: 950px) {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 375px) {
    font-size: 1.1em;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1em;
  }
`;
const HowTo = styled.ol`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.7em;
`;
const ListItem = styled.li`
  text-align: left;
  @media only screen and (max-width: 375px) {
    font-size: 0.85em;
  }
`;
const ContributorWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 950px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
  }

  @media only screen and (max-width: 375px) {
    font-size: 0.85em;
  }
`;
const Contributor = styled.a`
  font-family: 'Bungee', cursive;
  text-decoration: none;
  color: white;
  font-size: 0.8em;
  font-weight: 300;
`;

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.to-synth',
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
    <AboutContainer>
      <Heading> How To: </Heading>
      <HowTo>
        <ListItem>Make sure the sound is on!</ListItem>
        <ListItem>
          Play the synth by clicking/touching the keys, or try using your
          computer keyboard!
        </ListItem>
        <ListItem>
          Morph the sound by playing with the effects sliders (if you have a
          scroll wheel, this can be used to change the sliders)
        </ListItem>
        <ListItem>
          Look around by clicking & dragging the space behind the keyboard
          (holding shift will change your position)
        </ListItem>
      </HowTo>
      <Link to='/synth' style={{ textDecoration: 'none', color: 'white' }}>
        <h3 className='to-synth' style={{ fontFamily: 'Bungee, cursive' }}>
          Get Down With The Synthness
        </h3>
      </Link>
      <Heading>Contributors:</Heading>
      <ContributorWrap>
        <Contributor href='https://github.com/mistercanderson' target='_blank'>
          Chris Anderson
        </Contributor>
        <Contributor href='https://github.com/tysnj' target='_blank'>
          Tyson McNutt
        </Contributor>
        <Contributor href='https://github.com/Patfindley' target='_blank'>
          Pat Findley
        </Contributor>
      </ContributorWrap>
    </AboutContainer>
  );
};

export default About;
