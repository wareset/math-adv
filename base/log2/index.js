/* eslint-disable */
/*
dester builds:
base/log2.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../LN2"), r = require("../log");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var l = u(e), a = u(t), f = u(r), o = l.default.log2 || (e => f.default(e) / a.default);

exports.default = o;
