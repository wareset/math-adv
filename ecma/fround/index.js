/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../pow/index.js"), n = require("../sign/index.js");

var r = Math.fround || function(e, n) {
    var r, t, u, i;
    var o = !1;
    return function(a) {
        o || function init() {
            o = !0, r = e(2, -52), t = e(2, -23), u = e(2, 127) * (2 - t), i = e(2, -126);
        }();
        var d, f, s = n(a = +a), c = a * s;
        return c < i ? s * function roundTiesToEven(e) {
            return e + 1 / r - 1 / r;
        }(c / i / t) * i * t : (f = (d = (1 + t / r) * c) - (d - c)) > u || f != f ? s * (1 / 0) : s * f;
    };
}(e.default, n.default);

exports.default = r;
