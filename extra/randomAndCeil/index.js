/* eslint-disable */
/*
dester builds:
extra/randomAndCeil.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../ceil"), r = require("../random");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = t(e), a = t(r);

exports.default = (e, r, t) => u.default(a.default(e, r), t);
