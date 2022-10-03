/* eslint-disable */
/*
dester builds:
ecma/tanh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../../lib/Infinity"), r = require("../exp"), u = require("../expm1");

function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = a(e), l = a(t), d = a(r), i = a(u), n = f.default.tanh || (e => {
    var t, r;
    return (t = i.default(e = +e)) === l.default ? 1 : (r = i.default(-e)) === l.default ? -1 : (t - r) / (d.default(e) + d.default(-e));
});

exports.default = n;
