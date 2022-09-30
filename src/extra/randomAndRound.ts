import roundTo from './round'
import randomBetween from './random'

const randomAndRound = (
  min: number, max: number, precision?: number
): number => roundTo(randomBetween(min, max), precision)
export default randomAndRound
