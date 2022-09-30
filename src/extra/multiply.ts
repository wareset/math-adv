const mul = (...n: number[]): number =>
  +n.reduce((a, c) => a * c)
export default mul
