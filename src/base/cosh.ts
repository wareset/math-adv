import __Math__ from '../lib/Math'
import exp from './exp'
const cosh = __Math__.cosh ||
  ((x: number): number => (x = exp(x), (x + 1 / x) / 2))
export default cosh
