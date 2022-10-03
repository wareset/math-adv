/* eslint-disable */
/*
dester builds:
ecma/hypot.ts
*/
import r from "../../lib/Math";

import t from "../sqrt";

var o = r.hypot || ((...r) => t(r.reduce(((r, t) => r + t * t), 0)));

export { o as default };
