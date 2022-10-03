import __Infinity__ from '../lib/Infinity'
const scale = (
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number => (x = +x) === __Infinity__ || x === -__Infinity__
  ? x
  : (outHigh = +outHigh, outLow = +outLow) +
    (x - inLow) * (outHigh - outLow) / (inHigh - inLow)
export default scale
