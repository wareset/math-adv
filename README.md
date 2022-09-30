# math-adv
Math with all the necessary polyfills and additional functions

## What for?

In older browsers, methods such as "imul", "hypot", "fround", etc, may not exist. There are polyfills in this library so that everything works even in the "IE".

Also, some methods are slightly improved, they will be described further.

A few more additional methods have been added and more may be added.

## Improved methods
```js
import { random, ceil, floor, round } from 'math-adv';

// random
// The method "Math.random" can return 0.
// This method "random" will never return 0
random() // => a float number between 0 and 1
random(5) // => a float number between 5 and 6
random(-5, 5) // => a float number between -5 and 5

// ceil, round and floor
ceil(4.006) // => 5 (like Math.ceil)
ceil(6.004, 2) // => 6.01
ceil(6040, -2) // => 6100

floor(4.006) // => 4 (like Math.floor)
floor(0.046, 2) // => 0.04
floor(4060, -2) // => 4000

round(4.006) // => 4 (like Math.round)
round(4.006, 2) // => 4.01
round(4060, -2) // => 4100
```

## Additional methods
```js

// Additional random methods:
import {
  randomAndCeil,
  randomAndFloor,
  randomAndRound
} from 'math-adv';

randomAndCeil(0, 4) // => must be 1, 2, 3 or 4
randomAndFloor(0, 4) // => must be 0, 1, 2 or 3
randomAndRound(0, 4) // => must be 0, 1, 2, 3 or 4

// Convert to degrees and to radians:
import { toDegrees, toRadians } from 'math-adv';
toDegrees(radians)
toRadians(degrees)

// Other:
import { 
  clamp,
  mean,
  multiply,
  sum
} from 'math-adv';

// returns a "value" if it is between "min" and "max"
// otherwise it will return "min" or "max"
clamp(value, min, max)

// returns the average value of all arguments
mean(1, 2, 3, 4) // => 2.5

// returns the product of all arguments
multiply(1, 2, 3, 4) // => 24

// returns the sum of all arguments
sum(1, 2, 3, 4) // => 10

```

## License
[MIT](LICENSE)
