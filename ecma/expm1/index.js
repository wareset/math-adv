/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../exp/index.js");

var t = e.v.expm1 || function(e) {
    return (e = +e) ? e > -1e-6 && e < 1e-6 ? e + e * e / 2 : r.default(e) - 1 : e;
};

exports.default = t;
