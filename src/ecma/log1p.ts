import __Math__ from '../lib/Math'
import log from './log'
const log1p = __Math__.log1p ||
  ((x: number): number => (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x))
export default log1p
