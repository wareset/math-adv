// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.cosh.js
import __Math__ from '../lib/Math'
import E from './E'
import abs from './abs'
import expm1 from './expm1'
const cosh = __Math__.cosh ||
  ((x: number): number => (x = expm1(abs(+x) - 1) + 1, (x + 1 / (x * E * E)) * (E / 2)))
export default cosh
