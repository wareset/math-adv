# math-safe
Math with all the necessary polyfills and additional functions

### What for?

In older browsers, methods such as `imul`, `hypot`, `fround`, etc, may not exist. There are polyfills in this library so that everything works even in the "IE".

All of polyfills were taken from the [core-js](https://github.com/zloirock/core-js) or [MDN](https://developer.mozilla.org/)

A few more additional methods have been added and more may be added.

`tree-shaking` is work.

## ecma methods
All standard `js` methods like `Math`, but some contain polyfills:
```js
import { round, random, abs, sign... } from 'math-safe';
// or
import * as MathSafeFull from 'math-safe'
// or
import * as MathSafe from 'math-safe/ecma' // like Math origin
// or
import random from 'math-safe/ecma/random'
// or
const random = require('math-safe').random
// or
const random = require('math-safe/ecma/random').default
```

## extra methods
There are 4 methods in total:
```js
import { randomExtra, ceilExtra, floorExtra, roundExtra } from 'math-safe';
// or
import randomExtra from 'math-safe/extra/random'

// random
// The method "Math.random" can return 0.
// This method "random" will never return 0
randomExtra() // => a float number between 0 and 1
randomExtra(5) // => a float number between 0 and 5
randomExtra(-5, 5) // => a float number between -5 and 5

// ceil, round and floor
ceilExtra(4.006) // => 5 (like Math.ceil)
ceilExtra(6.004, 2) // => 6.01
ceilExtra(6040, -2) // => 6100

floorExtra(4.006) // => 4 (like Math.floor)
floorExtra(0.046, 2) // => 0.04
floorExtra(4060, -2) // => 4000

roundExtra(4.006) // => 4 (like Math.round)
roundExtra(4.006, 2) // => 4.01
roundExtra(4060, -2) // => 4100
```

## esnext methods
See proposal [https://rwaldron.github.io/proposal-math-extensions](https://rwaldron.github.io/proposal-math-extensions/)

There are 5 methods and 2 constants in total:
```js
// Convert to degrees and to radians:
import { degrees, radians, DEG_PER_RAD, RAD_PER_DEG } from 'math-safe';
// or
import degrees from 'math-safe/esnext/degrees'

DEG_PER_RAD // Math.PI / 180
RAD_PER_DEG // 180 / Math.PI

degrees(1.5) // => 1.5 * RAD_PER_DEG
radians(180) // => 180 * DEG_PER_RAD

// Other:
import { clamp, scale, fscale} from 'math-safe';

// returns a "value" if it is between "min" and "max"
// otherwise it will return "min" or "max"
clamp(value, min, max)
```

## adv. methods
There are 5:
```js
import { mean, mul, div, sum, sub } from 'math-safe';
// or
import mean from 'math-safe/adv/mean'

// returns the average value of all arguments
mean(1, 2, 3, 4) // => 2.5

// returns the multiply of all arguments
mul(1, 2, 3, 4) // => 24

// returns the divide of all arguments
div(12, 3, 2) // => 12 / 3 / 2 = 2

// returns the sum of all arguments
sum(1, 2, 3, 4) // => 10

// returns the substract of all arguments
sub(5, 2, 1) // => 5 - 2 - 1 = 2
```

### License
[MIT](LICENSE)
