import random from '../ecma/random'

const randomBetween = (function() {
  function __random__(): number { return random() || __random__() }
  return function(
    min?: number, max?: number,
  ): number {
    return min === void 0
      ? __random__()
      : max === void 0
        ? __random__() * min
        : __random__() * (max - min) + +min
  }
})()
export default randomBetween
