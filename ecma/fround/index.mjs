/* eslint-disable */
import n from "../pow/index.mjs";

import r from "../sign/index.mjs";

var o = Math.fround || function(n, r) {
    var o, t, i, u;
    var e = !1;
    return function(f) {
        e || function init() {
            e = !0, o = n(2, -52), t = n(2, -23), i = n(2, 127) * (2 - t), u = n(2, -126);
        }();
        var a, m, d = r(f = +f), s = f * d;
        return s < u ? d * function roundTiesToEven(n) {
            return n + 1 / o - 1 / o;
        }(s / u / t) * u * t : (m = (a = (1 + t / o) * s) - (a - s)) > i || m != m ? d * (1 / 0) : d * m;
    };
}(n, r);

export { o as default };
