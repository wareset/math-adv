// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.hypot.js
// https://bugs.chromium.org/p/v8/issues/detail?id=9546

import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import abs from './abs'
import sqrt from './sqrt'
const hypot = __Math__.hypot ||
  (
    (...n: number[]): number => {
      let sum = 0, larg = 0, arg: number, div: number
      for (let i = 0, l = n.length; i < l; i++) {
        arg = abs(+n[i])
        if (larg < arg) {
          div = larg / arg
          sum = sum * div * div + 1
          larg = arg
        } else if (arg > 0) {
          div = arg / larg
          sum += div * div
        } else sum += arg
      }
    
      return larg === __Infinity__ ? larg : larg * sqrt(sum)
    }
  )
export default hypot
