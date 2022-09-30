/* eslint-disable */
/*
dester builds:
extra/magnitude.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../base/pow"), r = require("../../base/sqrt");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = t(e), a = t(r);

exports.default = (...e) => a.default(e.reduce(((e, r) => e + u.default(r, 2)), 0));
