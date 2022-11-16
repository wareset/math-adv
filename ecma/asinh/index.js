/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-isFinite.js"), r = require("../../_includes/dester-inject-Math.js"), t = require("../log/index.js"), i = require("../sqrt/index.js");

var s = r.v.asinh || function(r) {
    return e.v(r = +r) && 0 !== r ? r < 0 ? -s(-r) : t.default(r + i.default(r * r + 1)) : r;
};

exports.default = s;
