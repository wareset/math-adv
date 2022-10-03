import __Math__ from '../lib/Math'
import sqrt from './sqrt'
const hypot = __Math__.hypot ||
  ((...values: number[]): number => sqrt(values.reduce((a, c) => a + c * c, 0)))
export default hypot
