/* eslint-disable */
/*
dester builds:
ecma/imul.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var r = t(e).default.imul || ((e, t) => {
    var r = (e = +e) >>> 16 & 65535, u = 65535 & e, a = (t = +t) >>> 16 & 65535, l = 65535 & t;
    return u * l + (r * l + u * a << 16 >>> 0) | 0;
});

exports.default = r;
