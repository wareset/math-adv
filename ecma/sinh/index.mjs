/* eslint-disable */
/*
dester builds:
ecma/sinh.ts
*/
import r from "../../lib/Math";

import m from "../E";

import o from "../abs";

import p from "../exp";

import t from "../expm1";

var i = r.sinh || (r => o(r = +r) < 1 ? (t(r) - t(-r)) / 2 : (p(r - 1) - p(-r - 1)) * (m / 2));

export { i as default };
