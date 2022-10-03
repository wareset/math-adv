/* eslint-disable */
/*
dester builds:
esnext/radians.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../DEG_PER_RAD"));

exports.default = e => e * t.default;
