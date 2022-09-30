/* eslint-disable */
/*
dester builds:
extra/round.ts
*/
import o from "../../base/pow";

import r from "../../base/round";

var a = (a, e) => e ? r(a * (e = o(10, e))) / e : r(a);

export { a as default };
