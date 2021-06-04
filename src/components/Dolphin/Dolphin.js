import {gsap, TimelineLite} from 'gsap';
import dolphinImg from '../../assets/dolphin.svg';
import './Dolphin.css';

const Dolphin = () => {

  // TweenLite.defaultEase = Linear.easeNone;

  var tl = new TimelineLite({repeat:-1})

  tl.to(".dolphin-container", 5, {rotation:-360, transformOrigin:"left"})
 .to(".dolphin", 5, {rotation:200}, 0)

  return (
    <div className="dolphin-container">
    <img className="dolphin" src={dolphinImg} alt="dolphin"/>
    </div>
  )
}

export default Dolphin;