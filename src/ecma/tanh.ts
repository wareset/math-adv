// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.tanh.js
import exp from './exp'
import expm1 from './expm1'
const tanh = Math.tanh ||
  function(x: number): number {
    let a: number, b: number
    return (a = expm1(x = +x)) === Infinity
      ? 1
      : (b = expm1(-x)) === Infinity
        ? -1
        : (a - b) / (exp(x) + exp(-x))
  }
export default tanh
