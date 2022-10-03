/* eslint-disable */
/*
dester builds:
esnext/degrees.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../RAD_PER_DEG"));

exports.default = e => e * t.default;
