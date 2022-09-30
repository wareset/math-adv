/* eslint-disable */
/*
dester builds:
base/tanh.ts
*/
import r from "../../lib/Math";

import t from "../../lib/Infinity";

import i from "../exp";

var o = r.tanh || (r => r === t ? 1 : r === -t ? -1 : (i(r) - i(-r)) / (i(r) + i(-r)));

export { o as default };
