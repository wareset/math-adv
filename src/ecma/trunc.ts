import __Math__ from '../lib/Math'
// import ceil from './ceil'
// import floor from './floor'
// (x > 0 ? floor : ceil)(x)
const trunc = __Math__.trunc ||
  ((x: number): number => (x = +x) - x % 1 || (x < 0 ? -0 : x === 0 ? x : 0))
export default trunc
