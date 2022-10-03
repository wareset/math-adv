import pow from '../ecma/pow'
import ceil from '../ecma/ceil'
const ceilTo = (n: number, precision?: number): number =>
  !precision
    ? ceil(n)
    : ceil(n * (precision = pow(10, precision))) / precision
export default ceilTo
