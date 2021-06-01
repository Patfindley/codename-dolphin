import * as Tone from 'tone'

const filterOptions = {
  type: 'lowpass',
};
const filter = new Tone.Filter(filterOptions);

export default filter