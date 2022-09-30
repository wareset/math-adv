/* eslint-disable */
/*
dester builds:
extra/toRadians.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../base/PI")).default / 180;

exports.default = e => e * t;
