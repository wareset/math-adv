/* eslint-disable */
/*
dester builds:
esnext/scale.ts
*/
function e(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../lib/Infinity"));

exports.default = (e, u, f, r, l) => (e = +e) === t.default || e === -t.default ? e : (r = +r) + (e - u) * ((l = +l) - r) / (f - u);
