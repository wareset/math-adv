/* eslint-disable */
/*
dester builds:
ecma/fround.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../../lib/Infinity"), t = require("../pow"), u = require("../sign");

function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = a(e), i = a(r), l = a(t), n = a(u), d = f.default.fround || ((e, r, t) => {
    var u, a, f, i, l = !1;
    return n => {
        l || (l = !0, u = e(2, -52), a = e(2, -23), f = e(2, 127) * (2 - a), i = e(2, -126));
        var d, o, p = r(n = +n), v = n * p;
        return v < i ? p * (e => e + 1 / u - 1 / u)(v / i / a) * i * a : (o = (d = (1 + a / u) * v) - (d - v)) > f || o != o ? p * t : p * o;
    };
})(l.default, n.default, i.default);

exports.default = d;
