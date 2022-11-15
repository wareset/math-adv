/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), t = require("../exp/index.js"), r = require("../expm1/index.js");

var u = e.v.tanh || function(e) {
    var u, d;
    return (u = r.default(e = +e)) === 1 / 0 ? 1 : (d = r.default(-e)) === 1 / 0 ? -1 : (u - d) / (t.default(e) + t.default(-e));
};

exports.default = u;
