import random from '../base/random'

const __random__ = (): number => random() || __random__()
const randomBetween = (
  min = 0, max = 0,
): number => __random__() * (max - min) + min
export default randomBetween
