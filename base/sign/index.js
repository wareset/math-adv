/* eslint-disable */
/*
dester builds:
base/sign.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../lib/Math")).default.sign || (e => e !== (e = +e) ? NaN : e > 0 ? 1 : e < 0 ? -1 : e);

exports.default = t;
