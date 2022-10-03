// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.tanh.js
import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import exp from './exp'
import expm1 from './expm1'
const tanh = __Math__.tanh ||
  ((x: number): number => {
    let a: number, b: number
    return (a = expm1(x = +x)) === __Infinity__
      ? 1
      : (b = expm1(-x)) === __Infinity__
        ? -1
        : (a - b) / (exp(x) + exp(-x))
  })
export default tanh
