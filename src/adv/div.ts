const div = (...n: number[]): number => {
  let res = +n[0]
  for (let i = 1, l = n.length; i < l; i++) res /= +n[i]
  return res
}
export default div
