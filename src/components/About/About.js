import styled from "styled-components";
import { gsap } from 'gsap';
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
const Contributor = styled.a`
  font-family: 'Bungee', cursive;
  text-decoration: none;
  color: white;
  font-size: 1em;
  font-weight: 300;
`

const About = () => {

  return (
    <AboutContainer>
      <div>
      <Heading> How To: </Heading>
      <p>Mobile: Make sure your sound is on!
        <br />
        Play synth by touching, clicking, or typing
        <br />
        <em>Toggles</em>
        <br />
        'Angeryness' will adjust gain the Synth's gain
        <br />
        'Bendyness' will detune the synth
        <br />
        'Sharpyness' will add a lowpass filter
        <br /> 


      </p>
      </div>
      <div>
      <Heading>Contributors:</Heading>
         <br />
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


