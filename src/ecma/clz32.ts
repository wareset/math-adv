import LOG2E from './LOG2E'
import log from './log'
import floor from './floor'
const clz32 = Math.clz32 ||
  function(x: number): number {
    return (x = +x >>> 0) !== 0 ? 31 - floor(log(x + 0.5) * LOG2E) : 32
  }
export default clz32
