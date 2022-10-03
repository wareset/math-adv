// https://github.com/tc39/proposal-Math.signbit
import __Infinity__ from '../lib/Infinity'
const signbit = (
  x: number,
): boolean => (x = +x) === x && x === 0 ? 1 / x === -__Infinity__ : x < 0
export default signbit
