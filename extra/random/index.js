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

var t = e(require("../../ecma/random")), o = () => t.default() || o();

exports.default = (e, t) => void 0 === e ? o() : void 0 === t ? o() * e : o() * (t - e) + e;
