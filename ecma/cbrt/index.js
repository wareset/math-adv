/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-isFinite.js"), t = require("../../_includes/dester-inject-Math.js"), r = require("../pow/index.js");

var i = t.v.cbrt || function(t) {
    return e.v(t = +t) && 0 !== t ? t > 0 ? r.default(t, 1 / 3) : -r.default(-t, 1 / 3) : t;
};

exports.default = i;
