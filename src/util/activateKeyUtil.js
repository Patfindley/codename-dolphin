import { gsap } from 'gsap';
import { BooleanKeyframeTrack } from 'three';

// const toggleActiveClick = (note, e) => {
//   const keyboard = document.querySelector('.keyboard');
//   const keys = Array.from(keyboard.childNodes);
//   const key = keys.find((k) => note === k.attributes.note.value);
//   keyAnimation(key)
// };

const toggleActive = (note) => {
  const keyboard = document.querySelector('.keyboard');
  const keys = Array.from(keyboard.childNodes);
  const key = keys.find((k) => note === k.attributes.note.value);
  setTimeout(() => keyAnimation(key), 0);
};

const keyAnimation = (key) => {
  gsap.from(
    key,
    {
      backgroundColor: () => {
        return `hsl(360, 100%, 50% )`;
      },
    },
    {
      backgroundColor: 'hsl(+=360, +=0%, +=0%)',
      duration: 0.8,
      repeat: 0,
      ease: 'none',
    }
  );
};

export default toggleActive;
