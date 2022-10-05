/* eslint-disable */
/*
dester builds:
ecma/asinh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../../lib/isFinite"), r = require("../log"), u = require("../sqrt");

function i(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = i(e), l = i(t), f = i(r), d = i(u), o = a.default.asinh || (e => l.default(e = +e) && 0 !== e ? e < 0 ? -o(-e) : f.default(e + d.default(e * e + 1)) : e);

exports.default = o;
