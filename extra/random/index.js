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

var t, o = e(require("../../ecma/random")), r = (t = () => o.default() || t(), (e, o) => void 0 === e ? t() : void 0 === o ? t() * e : t() * (o - e) + e);

exports.default = r;
