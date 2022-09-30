/* eslint-disable */
/*
dester builds:
base/expm1.ts
*/
import r from "../../lib/Math";

import m from "../exp";

var o = r.expm1 || (r => 0 === r ? r : m(r) - 1);

export { o as default };
