/* eslint-disable */
/*
dester builds:
ecma/sinh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../exp");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), a = r(t), f = u.default.sinh || (e => (a.default(e) - a.default(-e)) / 2);

exports.default = f;
