import __Math__ from '../lib/Math'

const __im__ = 0xffff
const imul = __Math__.imul || (
  (a: number, b: number): number => {
    const ah = a >>> 16 & __im__
    const al = a & __im__
    const bh = b >>> 16 & __im__
    const bl = b & __im__

    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0
  })

// export default (x: number, y: number): number => ((x | 0) * (y | 0)) | 0

export default imul
