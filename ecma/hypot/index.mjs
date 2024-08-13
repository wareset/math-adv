/* eslint-disable */
import r from "../abs/index.mjs";

import t from "../sqrt/index.mjs";

var o = Math.hypot || function(...o) {
    for (var a, e, m = 0, n = 0, f = 0, i = o.length; f < i; f++) n < (a = r(+o[f])) ? (m = m * (e = n / a) * e + 1, 
    n = a) : m += a > 0 ? (e = a / n) * e : a;
    return n === 1 / 0 ? n : n * t(m);
};

export { o as default };
