import random from '../ecma/random'

const randomBetween = (() => {
  const __random__ = (): number => random() || __random__()
  return (
    min?: number, max?: number,
  ): number =>
    min === void 0
      ? __random__()
      : max === void 0
        ? __random__() * min
        : __random__() * (max - min) + min
})()
export default randomBetween
