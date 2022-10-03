// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.acosh.js
// https://bugs.chromium.org/p/v8/issues/detail?id=3509
import __Math__ from '../lib/Math'
import LN2 from './LN2'
import log from './log'
import sqrt from './sqrt'
import log1p from './log1p'
const acosh = __Math__.acosh ||
  ((x: number): number => (x = +x) < 1
    ? NaN
    : x > 94906265.62425156
      ? log(x) + LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1)))
export default acosh
