import pow from '../ecma/pow'
import round from '../ecma/round'
const roundTo = (n: number, precision?: number): number =>
  !precision
    ? round(n)
    : round(n * (precision = pow(10, precision))) / precision
export default roundTo
