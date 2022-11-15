/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../scale/index.js"), r = require("../../ecma/fround/index.js");

require("../../_includes/dester-inject-Math.js"), require("../../ecma/pow/index.js"), 
require("../../ecma/sign/index.js"), exports.default = function(i, u, n, s, t) {
    return r.default(e.default(i, u, n, s, t));
};
