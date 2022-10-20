const mean = (...n: number[]): number => {
  let res = +n[0]
  const l = n.length
  for (let i = 1; i < l; i++) res += +n[i]
  return res / l
}
export default mean
