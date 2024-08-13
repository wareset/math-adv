/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../LOG10E/index.js"), r = require("../log/index.js");

var t = Math.log10 || function(t) {
    return r.default(+t) * e.default;
};

exports.default = t;
