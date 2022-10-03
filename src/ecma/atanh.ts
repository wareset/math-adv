// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.atanh.js
import __Math__ from '../lib/Math'
import log from './log'
const atanh = __Math__.atanh ||
  ((x: number): number => (x = +x) === 0 ? x : log((1 + x) / (1 - x)) / 2)
export default atanh
