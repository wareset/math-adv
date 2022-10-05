/* eslint-disable */
/*
dester builds:
ecma/cbrt.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../../lib/isFinite"), r = require("../pow");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = u(e), i = u(t), l = u(r), f = a.default.cbrt || (e => i.default(e = +e) && 0 !== e ? e > 0 ? l.default(e, 1 / 3) : -l.default(-e, 1 / 3) : e);

exports.default = f;
