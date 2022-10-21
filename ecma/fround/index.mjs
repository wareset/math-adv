/* eslint-disable */
/*
dester builds:
ecma/fround.ts
*/
import r from "../../lib/Math";

import o from "../../lib/Infinity";

import t from "../pow";

import i from "../sign";

var m = r.fround || ((r, o, t) => {
    var i, m, f, a, n = !1;
    return p => {
        n || (n = !0, i = r(2, -52), m = r(2, -23), f = r(2, 127) * (2 - m), a = r(2, -126));
        var e, u, l = o(p = +p), v = p * l;
        return v < a ? l * (r => r + 1 / i - 1 / i)(v / a / m) * a * m : (u = (e = (1 + m / i) * v) - (e - v)) > f || u != u ? l * t : l * u;
    };
})(t, i, o);

export { m as default };
