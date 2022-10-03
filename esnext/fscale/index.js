/* eslint-disable */
/*
dester builds:
esnext/fscale.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../scale"), r = require("../../ecma/fround");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = t(e), a = t(r);

exports.default = (e, r, t, f, d) => a.default(u.default(e, r, t, f, d));
