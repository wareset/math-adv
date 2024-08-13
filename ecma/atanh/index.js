/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../log/index.js");

var t = Math.atanh || function(t) {
    return (t = +t) ? e.default((1 + t) / (1 - t)) / 2 : t;
};

exports.default = t;
