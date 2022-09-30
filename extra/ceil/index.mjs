/* eslint-disable */
/*
dester builds:
extra/ceil.ts
*/
import o from "../../base/pow";

import r from "../../base/ceil";

var a = (a, e) => e ? r(a * (e = o(10, e))) / e : r(a);

export { a as default };
