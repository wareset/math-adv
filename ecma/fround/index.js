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

var l, d, i, n, o, b, p = f(e), q = f(r), s = f(t), v = f(u), c = f(a), y = p.default.fround || (l = v.default(2, -52), 
d = v.default(2, -23), i = 1 + d / l, n = v.default(2, 127) * (2 - d), o = v.default(2, -126), 
b = 1 / l, e => {
    var r = s.default(e = +e), t = c.default(e);
    return r < o ? (r / o / d + b - b) * t * o * d : (e = r * i) > n || e != e ? t * q.default : t * e;
});

exports.default = y;
