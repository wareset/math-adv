import __Math__ from '../lib/Math'
import LOG10E from './LOG10E'
import log from './log'
const log10 = __Math__.log10 ||
  ((x: number): number => log(+x) * LOG10E)
export default log10
