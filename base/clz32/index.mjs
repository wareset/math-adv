/* eslint-disable */
/*
dester builds:
base/clz32.ts
*/
import o from "../../lib/Math";

import r from "../floor";

import m from "../log";

var t = o.clz32 || (o => 0 != (o = +o >>> 0) ? 31 - r(m(o + .5) / m(2)) : 32);

export { t as default };
