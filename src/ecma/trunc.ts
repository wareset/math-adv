import ceil from './ceil'
import floor from './floor'
const trunc = Math.trunc ||
  function(x: number): number { return (x > 0 ? floor : ceil)(x) }
export default trunc
