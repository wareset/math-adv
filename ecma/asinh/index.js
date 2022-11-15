/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../../_includes/dester-inject-isFinite.js"), t = require("../log/index.js"), i = require("../sqrt/index.js");

var s = e.v.asinh || function(e) {
    return r.v(e = +e) && 0 !== e ? e < 0 ? -s(-e) : t.default(e + i.default(e * e + 1)) : e;
};

exports.default = s;
