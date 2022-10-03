/* eslint-disable */
/*
dester builds:
extra/round.ts
*/
import o from "../../ecma/pow";

import r from "../../ecma/round";

var m = (m, a) => a ? r(m * (a = o(10, a))) / a : r(m);

export { m as default };
