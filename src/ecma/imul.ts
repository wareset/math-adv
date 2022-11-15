// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.math.imul.js
const imul = Math.imul ||
 function(x: number, y: number): number {
   const UINT16 = 0xFFFF
   const xl = UINT16 & (x = +x)
   const yl = UINT16 & (y = +y)
   return 0 | xl * yl + ((UINT16 & x >>> 16) * yl + xl * (UINT16 & y >>> 16) << 16 >>> 0)
 }
export default imul
