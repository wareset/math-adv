/* eslint-disable */
/*
dester builds:
ecma/expm1.ts
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

var u = r(e), a = r(t), f = u.default.expm1 || (e => (e = +e) ? e > -1e-6 && e < 1e-6 ? e + e * e / 2 : a.default(e) - 1 : e);

exports.default = f;
