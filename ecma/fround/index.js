/* eslint-disable */
/*
dester builds:
ecma/fround.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../../lib/Infinity"), t = require("../abs"), u = require("../pow"), a = require("../sign");

function f(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var i = f(e), l = f(r), d = f(t), n = f(u), o = f(a), b = i.default.fround || ((e, r, t, u) => {
    var a = r(2, -52), f = r(2, -23), i = r(2, 127) * (2 - f), l = r(2, -126);
    return r => {
        var d, n, o = e(r = +r), b = t(r);
        return o < l ? b * (e => e + 1 / a - 1 / a)(o / l / f) * l * f : (n = (d = (1 + f / a) * o) - (d - o)) > i || n != n ? b * u : b * n;
    };
})(d.default, n.default, o.default, l.default);

exports.default = b;
