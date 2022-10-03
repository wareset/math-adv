/* eslint-disable */
/*
dester builds:
esnext/RAD_PER_DEG.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = 180 / e(require("../../ecma/PI")).default;

exports.default = t;
