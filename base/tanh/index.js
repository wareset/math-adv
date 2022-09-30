/* eslint-disable */
/*
dester builds:
base/tanh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../../lib/Infinity"), u = require("../exp");

function a(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = a(e), l = a(t), r = a(u), d = f.default.tanh || (e => e === l.default ? 1 : e === -l.default ? -1 : (r.default(e) - r.default(-e)) / (r.default(e) + r.default(-e)));

exports.default = d;
