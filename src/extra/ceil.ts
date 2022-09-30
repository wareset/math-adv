import pow from '../base/pow'
import ceil from '../base/ceil'
const ceilTo = (n: number, precision?: number): number =>
  !precision
    ? ceil(n)
    : ceil(n * (precision = pow(10, precision))) / precision
export default ceilTo
