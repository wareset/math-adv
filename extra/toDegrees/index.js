/* eslint-disable */
/*
dester builds:
extra/toDegrees.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = 180 / e(require("../../base/PI")).default;

exports.default = e => e * t;
