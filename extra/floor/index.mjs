/* eslint-disable */
/*
dester builds:
extra/floor.ts
*/
import o from "../../ecma/pow";

import r from "../../ecma/floor";

var m = (m, a) => a ? r(m * (a = o(10, a))) / a : r(m);

export { m as default };
