/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../log/index.js"), t = require("../sqrt/index.js");

var r = Math.asinh || function(i) {
    return isFinite(i = +i) && 0 !== i ? i < 0 ? -r(-i) : e.default(i + t.default(i * i + 1)) : i;
};

exports.default = r;
