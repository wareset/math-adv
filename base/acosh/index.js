/* eslint-disable */
/*
dester builds:
base/acosh.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), t = require("../log"), r = require("../sqrt");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var a = u(e), l = u(t), f = u(r), o = a.default.acosh || (e => l.default(e + f.default(e * e - 1)));

exports.default = o;
