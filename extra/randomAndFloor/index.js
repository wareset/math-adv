/* eslint-disable */
/*
dester builds:
extra/randomAndFloor.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../floor"), r = require("../random");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var u = t(e), o = t(r);

exports.default = (e, r, t) => u.default(o.default(e, r), t);
