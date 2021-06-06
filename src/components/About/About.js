import styled from "styled-components";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const AboutContainer = styled.h1`
height: 95%;
overflow-y: scroll;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
const Heading = styled.h1`
  font-family: 'Bungee', cursive;
`
const HowTo = styled.ol`
  text-align: left;
  font-size: .70em;
`
const Contributor = styled.a`
  font-family: 'Bungee', cursive;
  text-decoration: none;
  color: white;
  font-size: 1em;
  font-weight: 300;
`


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
  })

  return (
    <AboutContainer>
      <div>
      <Heading> How To: </Heading>
      <HowTo>
        <li>Make sure the sound is on!</li>
        <li>Play the synth by clicking/touching the keys, or try using your computer keyboard!</li>
        <li>Morph the sound by playing with the effects sliders (if you have a scroll wheel, this can be used to change the sliders)</li>
        <li>Look around by clicking & dragging the space behind the keyboard (holding shift will change your position)</li>
      </HowTo>
      </div>
      <div>
      <Link to='/synth' style={{ textDecoration: 'none', color: 'white'}}>
        <h3 className="to-synth">Get Down with The Synthness</h3>
      </Link>
      <Heading>Contributors:</Heading>
         <Contributor href="https://github.com/mistercanderson" target="_blank">Chris Anderson</Contributor>
         <br />
         <Contributor href="https://github.com/tysnj" target="_blank">Tyson McNutt</Contributor>
         <br />
         <Contributor href="https://github.com/Patfindley" target="_blank" >Pat Findley</Contributor>
      </div>
    </AboutContainer>
  )
}

export default About;


