/* eslint-disable */
/*
dester builds:
ecma/hypot.ts
*/
import r from "../../lib/Math";

import t from "../../lib/isFinite";

import i from "../sqrt";

var o = r.hypot || ((...r) => i(r.reduce(((r, i) => t(r) || r != r ? r + i * i : r), 0)));

export { o as default };
