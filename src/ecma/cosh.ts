// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.cosh.js
// https://github.com/josdejong/mathjs/blob/develop/src/number.js
import exp from './exp'
const cosh = Math.cosh ||
  function(x: number): number { return (exp(x) + exp(-x)) / 2 }
export default cosh
