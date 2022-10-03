/* eslint-disable */
/*
dester builds:
ecma/clz32.ts
*/
import o from "../../lib/Math";

import r from "../LOG2E";

import m from "../log";

import t from "../floor";

var f = o.clz32 || (o => 0 != (o = +o >>> 0) ? 31 - t(m(o + .5) * r) : 32);

export { f as default };
