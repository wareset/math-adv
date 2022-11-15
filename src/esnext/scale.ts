function scale(
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number {
  return inLow = +inLow, outLow = +outLow,
  (+x - inLow) * (+outHigh - outLow) / (+inHigh - inLow) + outLow
}
export default scale
