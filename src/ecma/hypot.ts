// https://bugs.chromium.org/p/v8/issues/detail?id=9546

import __Math__ from '../lib/Math'
import __isFinite__ from '../lib/isFinite'
import sqrt from './sqrt'
const hypot = __Math__.hypot ||
  (
    (...values: number[]): number => sqrt(
      values.reduce((a, c) =>
        !__isFinite__(a) && a === a
          ? a
          : a + c * c, 0)
    )
  )
export default hypot
