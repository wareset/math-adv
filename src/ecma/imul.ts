import __Math__ from '../lib/Math'

const __im__ = 0xffff
const imul = __Math__.imul || (
  (x: number, y: number): number => {
    const ah = (x = +x) >>> 16 & __im__
    const al = x & __im__
    const bh = (y = +y) >>> 16 & __im__
    const bl = y & __im__

    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0
  })

// export default (x: number, y: number): number => ((x | 0) * (y | 0)) | 0

export default imul
