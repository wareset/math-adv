/* eslint-disable */
/*
dester builds:
extra/random.ts
*/
import o from "../../ecma/random";

var a = () => o() || a(), r = (o, r) => void 0 === o ? a() : void 0 === r ? a() * o : a() * (r - o) + o;

export { r as default };
