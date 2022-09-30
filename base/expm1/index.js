/* eslint-disable */
/*
dester builds:
base/expm1.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../exp");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), a = r(t), f = u.default.expm1 || (e => 0 === e ? e : a.default(e) - 1);

exports.default = f;
