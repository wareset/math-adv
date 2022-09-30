/* eslint-disable */
/*
dester builds:
base/sinh.ts
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

var u = r(e), a = r(t), f = u.default.sinh || (e => ((e = a.default(e)) - 1 / e) / 2);

exports.default = f;
