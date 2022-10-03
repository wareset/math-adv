/* eslint-disable */
/*
dester builds:
esnext/DEG_PER_RAD.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../ecma/PI")).default / 180;

exports.default = t;
