// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.math.clamp.js
const clamp = (
  x: number,
  lower: number,
  upper: number
): number => (x = +x) < lower ? lower : x > upper ? upper : x
export default clamp
