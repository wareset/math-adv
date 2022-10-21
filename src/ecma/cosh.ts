// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.cosh.js
// https://github.com/josdejong/mathjs/blob/develop/src/number.js
import __Math__ from '../lib/Math'
import exp from './exp'
const cosh = __Math__.cosh ||
  ((x: number): number => (exp(x) + exp(-x)) / 2)
export default cosh
