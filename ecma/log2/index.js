/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../LN2/index.js"), t = require("../log/index.js");

var u = e.v.log2 || function(e) {
    return t.default(+e) / r.default;
};

exports.default = u;
