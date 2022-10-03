/* eslint-disable */
/*
dester builds:
ecma/clz32.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../LOG2E"), t = require("../log"), u = require("../floor");

function l(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = l(e), f = l(r), o = l(t), d = l(u), i = a.default.clz32 || (e => 0 != (e = +e >>> 0) ? 31 - d.default(o.default(e + .5) * f.default) : 32);

exports.default = i;
