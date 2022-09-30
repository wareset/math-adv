import pow from '../base/pow'
import sqrt from '../base/sqrt'

const distance = (x: number[], y: number[]): number => {
  let a = 0
  for (let i = 0, I = x.length; i < I; i++) { a += pow(x[i] - y[i], 2) }
  return sqrt(a)
}
export default distance
