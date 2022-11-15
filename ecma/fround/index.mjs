/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import n from "../pow/index.mjs";

import t from "../sign/index.mjs";

var o = r.fround || function(r, n) {
    var t, o, e, i;
    var m = !1;
    return function(u) {
        m || (m = !0, t = r(2, -52), o = r(2, -23), e = r(2, 127) * (2 - o), i = r(2, -126));
        var a, f, s = n(u = +u), d = u * s;
        return d < i ? s * function(r) {
            return r + 1 / t - 1 / t;
        }(d / i / o) * i * o : (f = (a = (1 + o / t) * d) - (a - d)) > e || f != f ? s * (1 / 0) : s * f;
    };
}(n, t);

export { o as default };
