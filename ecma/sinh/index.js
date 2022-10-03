/* eslint-disable */
/*
dester builds:
ecma/sinh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../E"), u = require("../abs"), r = require("../exp"), a = require("../expm1");

function f(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var l = f(e), d = f(t), i = f(u), o = f(r), n = f(a), p = l.default.sinh || (e => i.default(e = +e) < 1 ? (n.default(e) - n.default(-e)) / 2 : (o.default(e - 1) - o.default(-e - 1)) * (d.default / 2));

exports.default = p;
