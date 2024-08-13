/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../pow/index.js");

var t = Math.cbrt || function(t) {
    return isFinite(t = +t) && 0 !== t ? t > 0 ? e.default(t, 1 / 3) : -e.default(-t, 1 / 3) : t;
};

exports.default = t;
