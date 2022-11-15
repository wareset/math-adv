/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../LOG10E/index.js"), t = require("../log/index.js");

var u = e.v.log10 || function(e) {
    return t.default(+e) * r.default;
};

exports.default = u;
