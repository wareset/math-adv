import __Math__ from '../lib/Math'
const fround = __Math__.fround ||
  ((x: number): number => new Float32Array([x])[0])
export default fround
