/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../log/index.js");

var t = e.v.log1p || function(e) {
    return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : r.default(1 + e);
};

exports.default = t;
