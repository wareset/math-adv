/* eslint-disable */
/*
dester builds:
extra/clamp.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../base/max"), t = require("../../base/min");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = r(e), u = r(t);

exports.default = (e, t = e, r = e) => a.default(t, u.default(r, e));
