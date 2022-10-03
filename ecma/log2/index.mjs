/* eslint-disable */
/*
dester builds:
ecma/log2.ts
*/
import o from "../../lib/Math";

import r from "../LN2";

import m from "../log";

var t = o.log2 || (o => m(+o) / r);

export { t as default };
