/* eslint-disable */
/*
dester builds:
ecma/asinh.ts
*/
import r from "../../lib/Math";

import i from "../log";

import o from "../sqrt";

var t = r.asinh || (r => isFinite(r = +r) && 0 !== r ? r < 0 ? -t(-r) : i(r + o(r * r + 1)) : r);

export { t as default };
