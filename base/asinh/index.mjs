/* eslint-disable */
/*
dester builds:
base/asinh.ts
*/
import r from "../../lib/Math";

import o from "../../lib/Infinity";

import i from "../log";

import t from "../sqrt";

var m = r.asinh || (r => r === -o ? r : i(r + t(r * r + 1)));

export { m as default };
