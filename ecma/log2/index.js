/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../LN2/index.js"), r = require("../log/index.js");

var t = Math.log2 || function(t) {
    return r.default(+t) / e.default;
};

exports.default = t;
