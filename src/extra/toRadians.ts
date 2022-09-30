import PI from '../base/PI'
const DEG2RAD = PI / 180
const toRadians = (degrees: number): number => degrees * DEG2RAD
export default toRadians
