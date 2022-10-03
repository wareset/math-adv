/* eslint-disable */
/*
dester builds:
extra/random.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../ecma/random")), r = () => t.default() || r();

exports.default = (e = 0, t = e + 1) => r() * (t - e) + e;
