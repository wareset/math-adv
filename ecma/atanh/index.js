/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), t = require("../log/index.js");

var r = e.v.atanh || function(e) {
    return (e = +e) ? t.default((1 + e) / (1 - e)) / 2 : e;
};

exports.default = r;
