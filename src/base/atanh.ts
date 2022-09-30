import __Math__ from '../lib/Math'
import log from './log'
const atanh = __Math__.atanh ||
  ((x: number): number => log((1 + x) / (1 - x)) / 2)
export default atanh
