/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../ecma/pow/index.js"), t = require("../../ecma/ceil/index.js");

require("../../_includes/dester-inject-Math.js"), exports.default = function(r, u) {
    return u ? t.default(r * (u = e.default(10, u))) / u : t.default(r);
};
