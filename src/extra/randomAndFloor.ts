import floorTo from './floor'
import randomBetween from './random'

const randomAndFloor = (
  min: number, max: number, precision?: number
): number => floorTo(randomBetween(min, max), precision)
export default randomAndFloor
