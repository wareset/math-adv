/* eslint-disable */
/*
dester builds:
ecma/acosh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../LN2"), t = require("../log"), u = require("../sqrt"), a = require("../log1p");

function l(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = l(e), d = l(r), o = l(t), i = l(u), q = l(a), n = f.default.acosh || (e => (e = +e) < 1 ? NaN : e > 94906265.62425156 ? o.default(e) + d.default : q.default(e - 1 + i.default(e - 1) * i.default(e + 1)));

exports.default = n;
