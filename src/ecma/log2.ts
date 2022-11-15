import LN2 from './LN2'
import log from './log'
const log2 = Math.log2 ||
  function(x: number): number { return log(+x) / LN2 }
export default log2
