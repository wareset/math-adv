/* eslint-disable */
/*
dester builds:
base/acosh.ts
*/
import o from "../../lib/Math";

import r from "../log";

import t from "../sqrt";

var m = o.acosh || (o => r(o + t(o * o - 1)));

export { m as default };
