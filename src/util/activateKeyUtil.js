import { gsap } from "gsap";
import { BooleanKeyframeTrack } from "three";

const toggleActiveClick = (e, note) => {
  const keyboard = document.querySelector('.keyboard');
  const keys = Array.from(keyboard.childNodes);
  const key = keys.find((k) => note === k.attributes.note.value);
  keyAnimation(key)
};

const toggleActiveKeydown = (note) => {
  const keyboard = document.querySelector('.keyboard');
  const keys = Array.from(keyboard.childNodes);
  const key = keys.find((k) => note === k.attributes.note.value);
  keyAnimation(key)
};

const keyAnimation = (key) => { 
  console.log(key, 'key')
  gsap.from(key, {
    backgroundColor: () => {
      return `hsl(360, 100%, 50% )`;
    }
  },{
    backgroundColor: "hsl(+=360, +=0%, +=0%)",
    duration: 2.75,
    repeat: 0,
    ease: "none"
  })
}

export { toggleActiveClick, toggleActiveKeydown };
