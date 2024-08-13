/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../exp/index.js");

var t = Math.cosh || function(t) {
    return (e.default(t) + e.default(-t)) / 2;
};

exports.default = t;
