import max from '../base/max'
import min from '../base/min'
const clamp = (
  value: number,
  minValue: number = value,
  maxValue: number = value
): number => max(minValue, min(maxValue, value))
export default clamp
