// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.imul.js

import __Math__ from '../lib/Math'

const imul = __Math__.imul || (
  (x: number, y: number): number => {
    const UINT16 = 0xFFFF
    const xl = UINT16 & (x = +x)
    const yl = UINT16 & (y = +y)
    return 0 | xl * yl + ((UINT16 & x >>> 16) * yl + xl * (UINT16 & y >>> 16) << 16 >>> 0)
  })

// export default (x: number, y: number): number => ((x | 0) * (y | 0)) | 0

export default imul
