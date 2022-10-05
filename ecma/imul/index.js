/* eslint-disable */
/*
dester builds:
ecma/imul.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../lib/Math")).default.imul || ((e, t) => {
    var r = 65535, u = r & (e = +e), a = r & (t = +t);
    return 0 | u * a + ((r & e >>> 16) * a + u * (r & t >>> 16) << 16 >>> 0);
});

exports.default = t;
