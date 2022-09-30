import pow from '../base/pow'
import sqrt from '../base/sqrt'

const magnitude = (...n: number[]): number =>
  sqrt(n.reduce((a, c) => a + pow(c, 2), 0))
export default magnitude
