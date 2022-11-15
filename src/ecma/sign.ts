const sign = Math.sign ||
  function(x: number): number { return (x = +x) > 0 ? 1 : x < 0 ? -1 : x }
export default sign
