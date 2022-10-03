/* eslint-disable */
/*
dester builds:
ecma/cbrt.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../pow");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), a = r(t), f = u.default.cbrt || (e => (e = +e) ? e > 0 ? a.default(e, 1 / 3) : -a.default(-e, 1 / 3) : e);

exports.default = f;
