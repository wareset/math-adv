import scale from './scale'
import fround from '../ecma/fround'
const fscale = (
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number => fround(scale(x, inLow, inHigh, outLow, outHigh))
export default fscale
