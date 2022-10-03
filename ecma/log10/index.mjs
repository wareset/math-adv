/* eslint-disable */
/*
dester builds:
ecma/log10.ts
*/
import o from "../../lib/Math";

import r from "../LOG10E";

import m from "../log";

var t = o.log10 || (o => m(+o) * r);

export { t as default };
