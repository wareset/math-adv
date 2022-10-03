/* eslint-disable */
/*
dester builds:
extra/floor.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../ecma/pow"), t = require("../../ecma/floor");

function r(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = r(e), a = r(t);

exports.default = (e, t) => t ? a.default(e * (t = u.default(10, t))) / t : a.default(e);
