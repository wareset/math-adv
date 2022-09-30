/* eslint-disable */
/*
dester builds:
base/log1p.ts
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

var u = r(e), l = r(t), a = u.default.log1p || (e => l.default(1 + e));

exports.default = a;
