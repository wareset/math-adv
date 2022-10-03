/* eslint-disable */
/*
dester builds:
ecma/sign.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../lib/Math")).default.sign || (e => 0 == (e = +e) || e != e ? e : e > 0 ? 1 : -1);

exports.default = t;
