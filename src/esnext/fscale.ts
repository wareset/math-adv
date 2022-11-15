import scale from './scale'
import fround from '../ecma/fround'
function fscale(
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number { return fround(scale(x, inLow, inHigh, outLow, outHigh)) }
export default fscale
