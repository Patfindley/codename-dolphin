import * as Tone from 'tone'

// const bitcrusher = new Tone.BitCrusher(4)
const bitcrusher = new Tone.AutoWah(50, 6, -30)

export default bitcrusher;