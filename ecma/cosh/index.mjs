/* eslint-disable */
/*
dester builds:
ecma/cosh.ts
*/
import o from "../../lib/Math";

import r from "../E";

import m from "../abs";

import t from "../expm1";

var p = o.cosh || (o => ((o = t(m(+o) - 1) + 1) + 1 / (o * r * r)) * (r / 2));

export { p as default };
