import DelayLink from '../DelayLink/DelayLink.js'
import Dolphin from '../Dolphin/Dolphin';
import { gsap } from 'gsap';
import dolphinImg from '../../assets/dolphin.svg';
import './Landing.css'

const Landing = () => {

  // var tl = new Timelinelite({repeat:-1})
  const clickAnimation = () => {
    gsap.to(".dolphin-arm", 5, {rotation:-360, transformOrigin:"left"})
    gsap.to(".dolphin-title", 5, {rotation:200, visibility: "visible"}, 0)
  }

  return (
    <div className="landing-container">
      <DelayLink delay={1500}
      to="/synth">
        <h1 className="landing-title" onClick={clickAnimation}> Fuck It Up </h1>
        </DelayLink>
      <div className="dolphin-arm">
        <img className="dolphin-title" src={dolphinImg} alt="dolphin" />
      </div>
    </div>
  )
}

export default Landing;