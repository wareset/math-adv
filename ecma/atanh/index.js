/* eslint-disable */
/*
dester builds:
ecma/atanh.ts
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

var a = r(e), u = r(t), l = a.default.atanh || (e => (e = +e) ? u.default((1 + e) / (1 - e)) / 2 : e);

exports.default = l;
