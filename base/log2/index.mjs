/* eslint-disable */
/*
dester builds:
base/log2.ts
*/
import o from "../../lib/Math";

import r from "../LN2";

import m from "../log";

var t = o.log2 || (o => m(o) / r);

export { t as default };
