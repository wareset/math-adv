import pow from '../base/pow'
import floor from '../base/floor'
const floorTo = (n: number, precision?: number): number =>
  !precision
    ? floor(n)
    : floor(n * (precision = pow(10, precision))) / precision
export default floorTo
