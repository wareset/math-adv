/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../pow/index.js"), n = require("../sign/index.js");

var t = e.v.fround || function(e, r) {
    var n, t, u, i;
    var d = !1;
    return function(o) {
        d || (d = !0, n = e(2, -52), t = e(2, -23), u = e(2, 127) * (2 - t), i = e(2, -126));
        var s, a, f = r(o = +o), c = o * f;
        return c < i ? f * function(e) {
            return e + 1 / n - 1 / n;
        }(c / i / t) * i * t : (a = (s = (1 + t / n) * c) - (s - c)) > u || a != a ? f * (1 / 0) : f * a;
    };
}(r.default, n.default);

exports.default = t;
