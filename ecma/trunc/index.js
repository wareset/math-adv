/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../ceil/index.js"), t = require("../floor/index.js");

var u = e.v.trunc || function(e) {
    return (e > 0 ? t.default : r.default)(e);
};

exports.default = u;
