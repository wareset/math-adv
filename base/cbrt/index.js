/* eslint-disable */
/*
dester builds:
base/cbrt.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../lib/Math"), r = require("../../lib/Infinity"), t = require("../abs"), u = require("../exp"), a = require("../log");

function f(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var l = f(e), i = f(r), d = f(t), n = f(u), o = f(a), b = l.default.cbrt || (e => {
    if (0 !== e && e !== i.default && e !== -i.default && e == e) {
        var r = d.default(e), t = n.default(o.default(r) / 3);
        e = e / r * (t + (r / (t * t) - t) / 3);
    }
    return e;
});

exports.default = b;
