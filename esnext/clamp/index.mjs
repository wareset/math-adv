/* eslint-disable */
/*
dester builds:
esnext/clamp.ts
*/
import m from "../../ecma/max";

import a from "../../ecma/min";

var r = (r, o, e) => a(e, m(o, r));

export { r as default };
