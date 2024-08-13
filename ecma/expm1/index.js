/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../exp/index.js");

var t = Math.expm1 || function(t) {
    return (t = +t) ? t > -1e-6 && t < 1e-6 ? t + t * t / 2 : e.default(t) - 1 : t;
};

exports.default = t;
