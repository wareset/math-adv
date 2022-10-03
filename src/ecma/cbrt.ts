// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.cbrt.js
import __Math__ from '../lib/Math'
// import pow from './pow'
// const _13_ = 1 / 3
// const cbrt = __Math__.cbrt ||
//   ((x: number): number => x === 0 ? x : x < 0 ? -pow(-x, _13_) : pow(x, _13_))

import pow from './pow'
const cbrt = __Math__.cbrt ||
  ((x: number): number => !(x = +x)
    ? x
    : x > 0
      ? pow(x, 1 / 3)
      : -pow(-x, 1 / 3))

export default cbrt
