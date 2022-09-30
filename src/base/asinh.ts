import __Math__ from '../lib/Math'
import __Infinity__ from '../lib/Infinity'
import log from './log'
import sqrt from './sqrt'
const asinh = __Math__.asinh ||
  ((x: number): number => x === -__Infinity__ ? x : log(x + sqrt(x * x + 1)))
export default asinh
