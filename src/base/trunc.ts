import __Math__ from '../lib/Math'
const trunc = __Math__.trunc ||
  ((n: number): number => n - n % 1 || (n < 0 ? -0 : n === 0 ? n : 0))
export default trunc
