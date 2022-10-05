/* eslint-disable */
/*
dester builds:
ecma/trunc.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../ceil"), t = require("../floor");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var l = u(e), a = u(r), f = u(t), o = l.default.trunc || (e => (e > 0 ? f.default : a.default)(e));

exports.default = o;
