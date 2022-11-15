// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.cbrt.js
import pow from './pow'
const cbrt = Math.cbrt ||
  function(x: number): number {
    return !isFinite(x = +x) || x === 0
      ? x
      : x > 0
        ? pow(x, 1 / 3)
        : -pow(-x, 1 / 3)
  }

export default cbrt
