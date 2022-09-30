import PI from '../base/PI'
const RAD2DEG = 180 / PI
const toDegrees = (radians: number): number => radians * RAD2DEG
export default toDegrees
