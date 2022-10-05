/* eslint-disable */
/*
dester builds:
ecma/hypot.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../../lib/isFinite"), r = require("../sqrt");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var i = u(e), a = u(t), l = u(r), d = i.default.hypot || ((...e) => l.default(e.reduce(((e, t) => a.default(e) || e != e ? e + t * t : e), 0)));

exports.default = d;
