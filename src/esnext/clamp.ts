// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.math.clamp.js
import max from '../ecma/max'
import min from '../ecma/min'
const clamp = (
  x: number,
  lower: number,
  upper: number
): number => min(upper, max(lower, x))
export default clamp
