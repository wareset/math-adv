/* eslint-disable */
/*
dester builds:
base/max.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../lib/Math")).default.max;

exports.default = t;
