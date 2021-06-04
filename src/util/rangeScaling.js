const convertRangeScale = (oldScale, newScale, initValue) => {
  const yMax = oldScale[1];
  const yMin = oldScale[0];
  const xMax = newScale[1];
  const xMin = newScale[0];
  const percent = (initValue - yMin) / (yMax - yMin);
  return percent * (xMax - xMin) + xMin;
};

const convertRangeValue = (oldScale, newScale, value) => {
  const xMax = oldScale[1];
  const xMin = oldScale[0];
  const yMax = newScale[1];
  const yMin = newScale[0];
  const percent = (value - xMin) / (xMax - xMin);
  return percent * (yMax - yMin) + yMin;
};

const controlScroll = (e, power, state) => {
  if (e.type === 'wheel') {
    if (e.deltaY < 0) {
      e.target.value = parseInt(state) + power;
    } else {
      e.target.value = parseInt(state) - power;
    }
  }
};

export { convertRangeScale, convertRangeValue, controlScroll };
