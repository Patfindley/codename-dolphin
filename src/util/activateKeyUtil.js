const toggleActiveClick = (e) => {
  e.target.classList.toggle('active');
  setTimeout(() => e.target.classList.toggle('active'), 500);
};

const toggleActiveKeydown = (note) => {
  const keyboard = document.querySelector('.keyboard');
  const keys = Array.from(keyboard.childNodes);
  const key = keys.find((k) => note === k.attributes.note.value);
  key.classList.toggle('active');
  setTimeout(() => key.classList.toggle('active'), 500);
};

export { toggleActiveClick, toggleActiveKeydown };
