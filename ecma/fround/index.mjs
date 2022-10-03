/* eslint-disable */
/*
dester builds:
ecma/fround.ts
*/
import r from "../../lib/Math";

import o from "../../lib/Infinity";

import i from "../abs";

import m from "../pow";

import t from "../sign";

var f, p, a, n, b, e, l = r.fround || (f = m(2, -52), p = m(2, -23), a = 1 + p / f, 
n = m(2, 127) * (2 - p), b = m(2, -126), e = 1 / f, r => {
    var m = i(r = +r), f = t(r);
    return m < b ? (m / b / p + e - e) * f * b * p : (r = m * a) > n || r != r ? f * o : f * r;
});

export { l as default };
