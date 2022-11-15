/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), t = require("../../_includes/dester-inject-isFinite.js"), r = require("../pow/index.js");

var i = e.v.cbrt || function(e) {
    return t.v(e = +e) && 0 !== e ? e > 0 ? r.default(e, 1 / 3) : -r.default(-e, 1 / 3) : e;
};

exports.default = i;
