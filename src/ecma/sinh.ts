// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.sinh.js
// https://github.com/josdejong/mathjs/blob/develop/src/number.js
import __Math__ from '../lib/Math'
import exp from './exp'
const sinh = __Math__.sinh ||
  ((x: number): number => (exp(x) - exp(-x)) / 2)
export default sinh
