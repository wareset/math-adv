/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../LN2/index.js"), t = require("../log/index.js"), u = require("../sqrt/index.js"), d = require("../log1p/index.js");

var i = e.v.acosh || function(e) {
    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? t.default(e) + r.default : d.default(e - 1 + u.default(e - 1) * u.default(e + 1));
};

exports.default = i;
