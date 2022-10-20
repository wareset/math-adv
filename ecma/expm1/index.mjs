/* eslint-disable */
/*
dester builds:
ecma/expm1.ts
*/
import e from "../../lib/Math";

import r from "../exp";

var m = e.expm1 || (e => (e = +e) ? e > -1e-6 && e < 1e-6 ? e + e * e / 2 : r(e) - 1 : e);

export { m as default };
