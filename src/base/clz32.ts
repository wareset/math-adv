import __Math__ from '../lib/Math'
import floor from './floor'
import log from './log'
const clz32 = __Math__.clz32 ||
  ((x: number): number => (x = +x >>> 0) !== 0 ? 31 - floor(log(x + 0.5) / log(2)) : 32)
export default clz32
