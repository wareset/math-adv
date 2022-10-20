/* eslint-disable */
/*
dester builds:
ecma/hypot.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../../lib/Infinity"), t = require("../abs"), u = require("../sqrt");

function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = a(e), l = a(r), i = a(t), d = a(u), n = f.default.hypot || ((...e) => {
    for (var r, t, u = 0, a = 0, f = 0, n = e.length; f < n; f++) a < (r = i.default(+e[f])) ? (u = u * (t = a / r) * t + 1, 
    a = r) : u += r > 0 ? (t = r / a) * t : r;
    return a === l.default ? a : a * d.default(u);
});

exports.default = n;
