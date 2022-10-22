const scale = (
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number => (inLow = +inLow, outLow = +outLow,
(+x - inLow) * (+outHigh - outLow) / (+inHigh - inLow) + outLow)
export default scale
