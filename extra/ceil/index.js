/* eslint-disable */
/*
dester builds:
extra/ceil.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../base/pow"), t = require("../../base/ceil");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), a = r(t);

exports.default = (e, t) => t ? a.default(e * (t = u.default(10, t))) / t : a.default(e);
