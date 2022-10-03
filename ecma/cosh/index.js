/* eslint-disable */
/*
dester builds:
ecma/cosh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../E"), u = require("../abs"), r = require("../expm1");

function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = a(e), l = a(t), d = a(u), i = a(r), o = f.default.cosh || (e => ((e = i.default(d.default(+e) - 1) + 1) + 1 / (e * l.default * l.default)) * (l.default / 2));

exports.default = o;
