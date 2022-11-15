import LOG10E from './LOG10E'
import log from './log'
const log10 = Math.log10 ||
  function(x: number): number { return log(+x) * LOG10E }
export default log10
