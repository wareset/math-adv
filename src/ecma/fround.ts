// https://github.com/zloirock/core-js/blob/afcc1481cd/packages/core-js/internals/math-fround.js
import pow from './pow'
import sign from './sign'

const fround = Math.fround || (function(pow, sign) {
  let EPSILON: number, EPSILON32: number, MAX32: number, MIN32: number
  function roundTiesToEven(n: number): number { return n + 1 / EPSILON - 1 / EPSILON }

  let isInit = false
  function init(): void {
    isInit = true
    EPSILON = pow(2, -52)
    EPSILON32 = pow(2, -23)
    MAX32 = pow(2, 127) * (2 - EPSILON32)
    MIN32 = pow(2, -126)
  }

  return function(n: number): number {
    isInit || init()
    const $sign = sign(n = +n), $abs = n * $sign
    let a: number, result: number
    return $abs < MIN32
      ? $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32
      : (result = (a = (1 + EPSILON32 / EPSILON) * $abs) - (a - $abs)) > MAX32 ||
      result !== result
        ? $sign * Infinity
        : $sign * result
  }
})(pow, sign)

export default fround
