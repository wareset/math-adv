/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), t = require("../exp/index.js");

var r = e.v.cosh || function(e) {
    return (t.default(e) + t.default(-e)) / 2;
};

exports.default = r;
