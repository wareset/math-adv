/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../log/index.js");

var t = Math.log1p || function(t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : e.default(1 + t);
};

exports.default = t;
