import styled from "styled-components";
import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react'

const AboutContainer = styled.h1`
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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


