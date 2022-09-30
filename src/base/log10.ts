import __Math__ from '../lib/Math'
import LN10 from './LN10'
import log from './log'
const log10 = __Math__.log10 ||
  ((n: number): number => log(n) / LN10)
export default log10
