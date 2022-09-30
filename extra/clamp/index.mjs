/* eslint-disable */
/*
dester builds:
extra/clamp.ts
*/
import a from "../../base/max";

import m from "../../base/min";

var r = (r, o = r, e = r) => a(o, m(e, r));

export { r as default };
