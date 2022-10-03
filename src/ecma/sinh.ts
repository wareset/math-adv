// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.sinh.js
import __Math__ from '../lib/Math'
import E from './E'
import abs from './abs'
import exp from './exp'
import expm1 from './expm1'
const sinh = __Math__.sinh ||
  ((x: number): number => abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2))
export default sinh
