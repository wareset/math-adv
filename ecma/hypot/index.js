/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../abs/index.js"), r = require("../sqrt/index.js");

var t = Math.hypot || function(...t) {
    for (var u, a, n = 0, o = 0, s = 0, d = t.length; s < d; s++) o < (u = e.default(+t[s])) ? (n = n * (a = o / u) * a + 1, 
    o = u) : n += u > 0 ? (a = u / o) * a : u;
    return o === 1 / 0 ? o : o * r.default(n);
};

exports.default = t;
