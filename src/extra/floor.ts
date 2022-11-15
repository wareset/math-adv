import pow from '../ecma/pow'
import floor from '../ecma/floor'
function floorTo(n: number, precision?: number): number {
  return !precision
    ? floor(n)
    : floor(n * (precision = pow(10, precision))) / precision
}
export default floorTo
