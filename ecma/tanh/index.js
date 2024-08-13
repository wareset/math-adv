/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../exp/index.js"), t = require("../expm1/index.js");

var r = Math.tanh || function(r) {
    var u, a;
    return (u = t.default(r = +r)) === 1 / 0 ? 1 : (a = t.default(-r)) === 1 / 0 ? -1 : (u - a) / (e.default(r) + e.default(-r));
};

exports.default = r;
