// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.atanh.js
import log from './log'
const atanh = Math.atanh ||
  function(x: number): number { return !(x = +x) ? x : log((1 + x) / (1 - x)) / 2 }
export default atanh
