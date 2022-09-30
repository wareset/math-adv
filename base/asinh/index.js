/* eslint-disable */
/*
dester builds:
base/asinh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../../lib/Infinity"), r = require("../log"), u = require("../sqrt");

function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var i = a(e), l = a(t), f = a(r), d = a(u), n = i.default.asinh || (e => e === -l.default ? e : f.default(e + d.default(e * e + 1)));

exports.default = n;
