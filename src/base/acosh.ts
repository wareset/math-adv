import __Math__ from '../lib/Math'
import log from './log'
import sqrt from './sqrt'
const acosh = __Math__.acosh ||
  ((x: number): number => log(x + sqrt(x * x - 1)))
export default acosh
