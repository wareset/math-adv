/* eslint-disable */
/*
dester builds:
extra/magnitude.ts
*/
import r from "../../base/pow";

import e from "../../base/sqrt";

var o = (...o) => e(o.reduce(((e, o) => e + r(o, 2)), 0));

export { o as default };
