import __Math__ from '../lib/Math'
import LOG2E from './LOG2E'
import log from './log'
import floor from './floor'
const clz32 = __Math__.clz32 ||
  ((x: number): number => (x = +x >>> 0) !== 0 ? 31 - floor(log(x + 0.5) * LOG2E) : 32)
export default clz32
