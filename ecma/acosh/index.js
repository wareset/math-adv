/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../LN2/index.js"), r = require("../log/index.js"), t = require("../sqrt/index.js"), u = require("../log1p/index.js");

var d = Math.acosh || function(d) {
    return (d = +d) < 1 ? NaN : d > 94906265.62425156 ? r.default(d) + e.default : u.default(d - 1 + t.default(d - 1) * t.default(d + 1));
};

exports.default = d;
