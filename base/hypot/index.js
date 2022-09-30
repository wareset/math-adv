/* eslint-disable */
/*
dester builds:
base/hypot.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../sqrt");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), a = r(t), d = u.default.hypot || ((...e) => a.default(e.reduce(((e, t) => e + t * t), 0)));

exports.default = d;
