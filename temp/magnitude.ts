import pow from '../ecma/pow'
import sqrt from '../ecma/sqrt'

const magnitude = (...n: number[]): number =>
  sqrt(n.reduce((a, c) => a + pow(c, 2), 0))
export default magnitude
