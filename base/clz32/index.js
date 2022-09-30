/* eslint-disable */
/*
dester builds:
base/clz32.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../floor"), r = require("../log");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var l = u(e), a = u(t), f = u(r), o = l.default.clz32 || (e => 0 != (e = +e >>> 0) ? 31 - a.default(f.default(e + .5) / f.default(2)) : 32);

exports.default = o;
