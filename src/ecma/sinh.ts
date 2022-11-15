// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.sinh.js
// https://github.com/josdejong/mathjs/blob/develop/src/number.js
import exp from './exp'
const sinh = Math.sinh ||
  function(x: number): number { return (exp(x) - exp(-x)) / 2 }
export default sinh
