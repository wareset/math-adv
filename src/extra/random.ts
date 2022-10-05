import random from '../ecma/random'

const __random__ = (): number => random() || __random__()
const randomBetween = (
  min?: number, max?: number,
): number =>
  min === void 0
    ? __random__()
    : max === void 0
      ? __random__() * min
      : __random__() * (max - min) + min
export default randomBetween
