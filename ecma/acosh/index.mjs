/* eslint-disable */
/*
dester builds:
ecma/acosh.ts
*/
import o from "../../lib/Math";

import r from "../LN2";

import m from "../log";

import t from "../sqrt";

import p from "../log1p";

var a = o.acosh || (o => (o = +o) < 1 ? NaN : o > 94906265.62425156 ? m(o) + r : p(o - 1 + t(o - 1) * t(o + 1)));

export { a as default };
