import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
// import pow from './pow'
// const _13_ = 1 / 3
// const cbrt = __Math__.cbrt ||
//   ((x: number): number => x === 0 ? x : x < 0 ? -pow(-x, _13_) : pow(x, _13_))

import abs from './abs'
import exp from './exp'
import log from './log'
const cbrt = __Math__.cbrt ||
  ((x: number): number => {
    if (!(x === 0 || x === __Infinity__ || x === -__Infinity__ || x !== x)) {
      const a = abs(x)
      const y = exp(log(a) / 3)
      x = x / a * (y + (a / (y * y) - y) / 3)
    }
    return x
  })

export default cbrt
