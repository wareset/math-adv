// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.asinh.js
import log from './log'
import sqrt from './sqrt'
const asinh = Math.asinh ||
  function(x: number): number {
    return !isFinite(x = +x) || x === 0
      ? x
      : x < 0
        ? -asinh(-x)
        : log(x + sqrt(x * x + 1))
  }
export default asinh
