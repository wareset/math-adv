/* eslint-disable */
/*
dester builds:
ecma/fround.ts
*/
import r from "../../lib/Math";

import o from "../../lib/Infinity";

import t from "../abs";

import i from "../pow";

import m from "../sign";

var f = r.fround || ((r, o, t, i) => {
    var m = o(2, -52), f = o(2, -23), a = o(2, 127) * (2 - f), p = o(2, -126);
    return o => {
        var n, e, u = r(o = +o), b = t(o);
        return u < p ? b * (r => r + 1 / m - 1 / m)(u / p / f) * p * f : (e = (n = (1 + f / m) * u) - (n - u)) > a || e != e ? b * i : b * e;
    };
})(t, i, m, o);

export { f as default };
