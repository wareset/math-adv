import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import exp from './exp'

const tanh = __Math__.tanh ||
  ((x: number): number =>
    x === __Infinity__
      ? 1
      : x === -__Infinity__
        ? -1
        : (exp(x) - exp(-x)) / (exp(x) + exp(-x)))
export default tanh
