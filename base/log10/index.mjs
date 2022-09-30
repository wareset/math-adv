/* eslint-disable */
/*
dester builds:
base/log10.ts
*/
import o from "../../lib/Math";

import r from "../LN10";

import m from "../log";

var t = o.log10 || (o => m(o) / r);

export { t as default };
