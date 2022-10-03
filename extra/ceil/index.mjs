/* eslint-disable */
/*
dester builds:
extra/ceil.ts
*/
import m from "../../ecma/pow";

import o from "../../ecma/ceil";

var r = (r, a) => a ? o(r * (a = m(10, a))) / a : o(r);

export { r as default };
