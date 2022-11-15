import log from './log'
const log1p = Math.log1p ||
  function(x: number): number {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x)
  }
export default log1p
