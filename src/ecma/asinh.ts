// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.asinh.js
import __Math__ from '../lib/Math'
import __isFinite__ from '../lib/isFinite'
import log from './log'
import sqrt from './sqrt'
const asinh = __Math__.asinh ||
  ((x: number): number => !__isFinite__(x = +x) || x === 0
    ? x
    : x < 0
      ? -asinh(-x)
      : log(x + sqrt(x * x + 1)))
export default asinh
