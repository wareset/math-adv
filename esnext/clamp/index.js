/* eslint-disable */
/*
dester builds:
esnext/clamp.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../ecma/max"), t = require("../../ecma/min");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = r(e), u = r(t);

exports.default = (e, t, r) => u.default(r, a.default(t, e));
