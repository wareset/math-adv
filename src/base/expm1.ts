import __Math__ from '../lib/Math'
import exp from './exp'
const expm1 = __Math__.expm1 ||
  ((x: number): number => x === 0 ? x : exp(x) - 1)
export default expm1
