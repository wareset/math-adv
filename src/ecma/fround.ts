// https://github.com/zloirock/core-js/blob/afcc1481cd/packages/core-js/internals/math-fround.js
import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import abs from './abs'
import pow from './pow'
import sign from './sign'

const fround = __Math__.fround || ((abs, pow, sign, __Infinity__) => {
  const EPSILON = pow(2, -52)
  const EPSILON32 = pow(2, -23)
  const MAX32 = pow(2, 127) * (2 - EPSILON32)
  const MIN32 = pow(2, -126)

  const roundTiesToEven = (n: number): number => n + 1 / EPSILON - 1 / EPSILON

  return (n: number): number => {
    const $abs = abs(n = +n), $sign = sign(n)
    let a: number, result: number
    return $abs < MIN32
      ? $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32
      : (result = (a = (1 + EPSILON32 / EPSILON) * $abs) - (a - $abs)) > MAX32 ||
      result !== result
        ? $sign * __Infinity__
        : $sign * result
    // if ($abs < MIN32) {
    //   return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32
    // }
    // const a = (1 + EPSILON32 / EPSILON) * $abs
    // const result = a - (a - $abs)
    // return result > MAX32 || result !== result
    //   ? $sign * __Infinity__
    //   : $sign * result
  }
})(abs, pow, sign, __Infinity__)

export default fround
