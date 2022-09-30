import __Math__ from '../lib/Math'
import log from './log'
const log1p = __Math__.log1p ||
  ((x: number): number => log(1 + x))
export default log1p
