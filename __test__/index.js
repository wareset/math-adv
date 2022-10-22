const MathSafe = require('../ecma')
const MathAll = require('..')

console.log(MathSafe)
console.log(MathAll)

const scale = require('..').scale

console.log(scale(40, 1, 100, 0.1, 10))

console.log(scale === require('../esnext/scale').default)
