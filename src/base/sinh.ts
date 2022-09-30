import __Math__ from '../lib/Math'
import exp from './exp'
const sinh = __Math__.sinh ||
  ((x: number): number => (x = exp(x), (x - 1 / x) / 2))
export default sinh
