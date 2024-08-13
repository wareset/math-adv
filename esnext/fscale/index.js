/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../scale/index.js"), r = require("../../ecma/fround/index.js");

require("../../ecma/pow/index.js"), require("../../ecma/sign/index.js"), exports.default = function fscale(u, i, n, s, d) {
    return r.default(e.default(u, i, n, s, d));
};
