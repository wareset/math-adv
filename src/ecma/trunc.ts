import __Math__ from '../lib/Math'
import ceil from './ceil'
import floor from './floor'
const trunc = __Math__.trunc ||
  ((x: number): number => (x > 0 ? floor : ceil)(x))
export default trunc
