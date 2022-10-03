/* eslint-disable */
/*
dester builds:
ecma/log1p.ts
*/
import o from "../../lib/Math";

import r from "../log";

var t = o.log1p || (o => (o = +o) > -1e-8 && o < 1e-8 ? o - o * o / 2 : r(1 + o));

export { t as default };
