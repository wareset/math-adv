/* eslint-disable */
/*
dester builds:
extra/distance.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../base/pow"), r = require("../../base/sqrt");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = t(e), a = t(r);

exports.default = (e, r) => {
    for (var t = 0, f = 0, o = e.length; f < o; f++) t += u.default(e[f] - r[f], 2);
    return a.default(t);
};
