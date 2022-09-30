/* eslint-disable */
/*
dester builds:
base/imul.ts
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
    var r = 65535 & e, u = 65535 & t;
    return r * u + ((e >>> 16 & 65535) * u + r * (t >>> 16 & 65535) << 16 >>> 0) | 0;
});

exports.default = r;
