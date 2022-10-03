/* eslint-disable */
/*
dester builds:
ecma/trunc.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../lib/Math")).default.trunc || (e => (e = +e) - e % 1 || (e < 0 ? -0 : 0 === e ? e : 0));

exports.default = t;
