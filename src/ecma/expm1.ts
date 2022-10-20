// https://github.com/zloirock/core-js/blob/afcc1481cd/packages/core-js/internals/math-expm1.js
import __Math__ from '../lib/Math'
import exp from './exp'
const expm1 = __Math__.expm1 ||
  ((x: number): number => !(x = +x)
    ? x
    : x > -1e-6 && x < 1e-6
      ? x + x * x / 2
      : exp(x) - 1)
export default expm1
