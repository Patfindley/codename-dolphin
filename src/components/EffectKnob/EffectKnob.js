import React from 'react';
import './EffectKnob.css';

// var slide = $('#slide');
// var img = $('#img');
// var mousewheelevt = /Firefox/i.test(navigator.userAgent)
//   ? 'DOMMouseScroll'
//   : 'mousewheel';

// // active mouse scroll when mouse is over element
// slide.on('mouseover', function () {
//   slide.bind(mousewheelevt, moveSlider);
//   centerSlider(slide);
// });

// // active mouse scroll when mouse is over element
// img.on('mouseover', function () {
//   img.bind(mousewheelevt, moveSlider);
//   centerSlider(img);
// });

// move the slider based on scrolling

// resets slider when middle click over elem
// const centerSlider = (elem) => {
//   $(elem).on('click', function (e) {
//     if (e.which == 2) {
//       var evt = e || window.event;
//       e.preventDefault();
//       console.log('middle button');

//       // set slide val to default
//       slide.val(slide[0].defaultValue);

//       // trigger the change event
//       slide.trigger('change');
//     }
//   });
// };
export default function EffectKnob({
  name,
  label,
  min,
  max,
  value,
  handleChange,
}) {
  return (
    <label className='effect-knob'>
      {label}
      <input
        type='range'
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        onWheel={handleChange}
      />
    </label>
  );
}
