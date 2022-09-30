import pow from '../base/pow'
import round from '../base/round'
const roundTo = (n: number, precision?: number): number =>
  !precision
    ? round(n)
    : round(n * (precision = pow(10, precision))) / precision
export default roundTo
