const scale = (
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number => (outHigh = +outHigh, outLow = +outLow) +
  ((x = +x) - inLow) * (outHigh - outLow) / (inHigh - inLow)
export default scale
