/* eslint-disable */
/*
dester builds:
ecma/log1p.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../log");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), l = r(t), a = u.default.log1p || (e => (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : l.default(1 + e));

exports.default = a;
