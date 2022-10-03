/* eslint-disable */
/*
dester builds:
ecma/asinh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../log"), r = require("../sqrt");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = u(e), i = u(t), l = u(r), f = a.default.asinh || (e => isFinite(e = +e) && 0 !== e ? e < 0 ? -f(-e) : i.default(e + l.default(e * e + 1)) : e);

exports.default = f;
