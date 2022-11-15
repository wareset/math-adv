/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../abs/index.js"), t = require("../sqrt/index.js");

var n = e.v.hypot || function() {
    for (var e, n, s = 0, u = 0, d = 0, i = arguments.length; d < i; d++) u < (e = r.default(+(d < 0 || arguments.length <= d ? void 0 : arguments[d]))) ? (s = s * (n = u / e) * n + 1, 
    u = e) : s += e > 0 ? (n = e / u) * n : e;
    return u === 1 / 0 ? u : u * t.default(s);
};

exports.default = n;
