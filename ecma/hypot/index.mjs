/* eslint-disable */
/*
dester builds:
ecma/hypot.ts
*/
import r from "../../lib/Math";

import t from "../../lib/Infinity";

import o from "../abs";

import i from "../sqrt";

var m = r.hypot || ((...r) => {
    for (var m, f, a = 0, p = 0, e = 0, l = r.length; e < l; e++) p < (m = o(+r[e])) ? (a = a * (f = p / m) * f + 1, 
    p = m) : a += m > 0 ? (f = m / p) * f : m;
    return p === t ? p : p * i(a);
});

export { m as default };
