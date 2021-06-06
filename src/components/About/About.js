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
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: .70em;
`
const ListItem = styled.li`
  text-align: left;
`
const ContributorWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 950px ) {
    text-align: center;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
  }
`
const Contributor = styled.a`
  font-family: 'Bungee', cursive;
  text-decoration: none;
  color: white;
  font-size: .8em;
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
      <Heading> How To: </Heading>
      <HowTo>
        <ListItem>Make sure the sound is on!</ListItem>
        <ListItem>Play the synth by clicking/touching the keys, or try using your computer keyboard!</ListItem>
        <ListItem>Morph the sound by playing with the effects sliders (if you have a scroll wheel, this can be used to change the sliders)</ListItem>
        <ListItem>Look around by clicking & dragging the space behind the keyboard (holding shift will change your position)</ListItem>
      </HowTo>
      <Link to='/synth' style={{ textDecoration: 'none', color: 'white'}}>
        <h3 className="to-synth" style={{ fontFamily: 'Bungee, cursive' }}>Get Down With The Synthness</h3>
      </Link>
      <Heading>Contributors:</Heading>
      <ContributorWrap>
         <Contributor href="https://github.com/mistercanderson" target="_blank">Chris Anderson</Contributor>
         {/* <br /> */}
         <Contributor href="https://github.com/tysnj" target="_blank">Tyson McNutt</Contributor>
         {/* <br /> */}
         <Contributor href="https://github.com/Patfindley" target="_blank" >Pat Findley</Contributor>
      </ContributorWrap>
    </AboutContainer>
  )
}

export default About;


