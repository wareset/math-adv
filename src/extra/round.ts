import pow from '../ecma/pow'
import round from '../ecma/round'
function roundTo(n: number, precision?: number): number {
  return !precision
    ? round(n)
    : round(n * (precision = pow(10, precision))) / precision
}
export default roundTo
