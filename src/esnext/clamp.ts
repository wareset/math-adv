// https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.math.clamp.js
function clamp(x: number, lower: number, upper: number): number {
  return (x = +x) < lower ? +lower : x > upper ? +upper : x
}
export default clamp
