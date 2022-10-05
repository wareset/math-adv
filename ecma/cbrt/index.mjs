/* eslint-disable */
/*
dester builds:
ecma/cbrt.ts
*/
import r from "../../lib/Math";

import i from "../../lib/isFinite";

import o from "../pow";

var t = r.cbrt || (r => i(r = +r) && 0 !== r ? r > 0 ? o(r, 1 / 3) : -o(-r, 1 / 3) : r);

export { t as default };
