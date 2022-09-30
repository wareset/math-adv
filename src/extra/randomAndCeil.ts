import ceilTo from './ceil'
import randomBetween from './random'

const randomAndCeil = (
  min: number, max: number, precision?: number
): number => ceilTo(randomBetween(min, max), precision)
export default randomAndCeil
