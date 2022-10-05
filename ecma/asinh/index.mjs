/* eslint-disable */
/*
dester builds:
ecma/asinh.ts
*/
import r from "../../lib/Math";

import i from "../../lib/isFinite";

import o from "../log";

import t from "../sqrt";

var m = r.asinh || (r => i(r = +r) && 0 !== r ? r < 0 ? -m(-r) : o(r + t(r * r + 1)) : r);

export { m as default };
