import __Math__ from '../lib/Math'
const sign = __Math__.sign ||
  ((n: number): number => n !== (n = +n) ? NaN : n > 0 ? 1 : n < 0 ? -1 : n)
export default sign
