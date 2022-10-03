const sum = (...n: number[]): number =>
  n.reduce((a, c) => a + c, 0)
export default sum
