// https://github.com/zloirock/core-js/blob/afcc1481cd/packages/core-js/internals/math-fround.js
import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import pow from './pow'
import sign from './sign'

const fround = __Math__.fround || ((pow, sign, __Infinity__) => {
  let EPSILON: number, EPSILON32: number, MAX32: number, MIN32: number
  const roundTiesToEven = (n: number): number => n + 1 / EPSILON - 1 / EPSILON

  let isInit = false
  const init = (): void => {
    isInit = true
    EPSILON = pow(2, -52)
    EPSILON32 = pow(2, -23)
    MAX32 = pow(2, 127) * (2 - EPSILON32)
    MIN32 = pow(2, -126)
  }

  return (n: number): number => {
    isInit || init()
    const $sign = sign(n = +n), $abs = n * $sign
    let a: number, result: number
    return $abs < MIN32
      ? $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32
      : (result = (a = (1 + EPSILON32 / EPSILON) * $abs) - (a - $abs)) > MAX32 ||
      result !== result
        ? $sign * __Infinity__
        : $sign * result
  }
})(pow, sign, __Infinity__)

export default fround
