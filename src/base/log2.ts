import __Math__ from '../lib/Math'
import LN2 from './LN2'
import log from './log'
const log2 = __Math__.log2 ||
  ((x: number): number => log(x) / LN2)
export default log2
