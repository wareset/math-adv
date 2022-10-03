import __Math__ from '../lib/Math'
const sign = __Math__.sign ||
  ((x: number): number => (x = +x) === 0 || x !== x ? x : x > 0 ? 1 : -1)
export default sign
