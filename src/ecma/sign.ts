import __Math__ from '../lib/Math'
const sign = __Math__.sign ||
  ((x: number): number => (x = +x) > 0 ? 1 : x < 0 ? -1 : x)
export default sign
