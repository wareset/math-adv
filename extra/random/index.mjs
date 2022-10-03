/* eslint-disable */
/*
dester builds:
extra/random.ts
*/
import a from "../../ecma/random";

var r = () => a() || r(), m = (a = 0, m = a + 1) => r() * (m - a) + a;

export { m as default };
