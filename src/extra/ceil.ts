import pow from '../ecma/pow'
import ceil from '../ecma/ceil'
function ceilTo(n: number, precision?: number): number {
  return !precision
    ? ceil(n)
    : ceil(n * (precision = pow(10, precision))) / precision
}
export default ceilTo
