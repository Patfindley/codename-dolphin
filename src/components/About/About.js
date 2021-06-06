import styled from "styled-components";

const AboutContainer = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const HowTo = styled.h1`
    
`
const Contributor = styled.a`
    text-decoration: none;
    color: white;
    font-size: .5em;
    font-weight: 300;
  `

const About = () => {
  return (
    <AboutContainer>
      <HowTo> How To: 
        
      </HowTo>
      <h1 className="contributors">
         Contributors: 
         <br />
         <Contributor href="https://github.com/mistercanderson" target="_blank">Chris Anderson</Contributor>
         <br />
         <Contributor href="https://github.com/tysnj" target="_blank">Tyson McNutt</Contributor>
         <br />
         <Contributor href="https://github.com/Patfindley" target="_blank">Pat Findley</Contributor>
         </h1>
    </AboutContainer>
  )
}

export default About;


