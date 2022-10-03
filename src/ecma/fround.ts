// https://github.com/zloirock/core-js/blob/afcc1481cd/packages/core-js/internals/math-fround.js
import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import abs from './abs'
import pow from './pow'
import sign from './sign'

const fround = __Math__.fround ||
  ((): typeof __Math__.fround => {
    const EPSILON = pow(2, -52), EPSILON32 = pow(2, -23)
    const ONE_PLUS_EPSILON32_DIV_EPSILON = 1 + EPSILON32 / EPSILON
    const MAX32 = pow(2, 127) * (2 - EPSILON32), MIN32 = pow(2, -126)

    const ONE_DIV_EPSILON = 1 / EPSILON

    return (x: number): number => {
      const xAbs = abs(x = +x), xSign = sign(x)
      return xAbs < MIN32
        ? (xAbs / MIN32 / EPSILON32 + ONE_DIV_EPSILON - ONE_DIV_EPSILON) *
        xSign * MIN32 * EPSILON32
        : (x = xAbs * ONE_PLUS_EPSILON32_DIV_EPSILON) > MAX32 || x !== x
          ? xSign * __Infinity__
          : xSign * x
    }
  })()
export default fround
