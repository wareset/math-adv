/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../ecma/pow/index.js"), r = require("../../ecma/floor/index.js");

require("../../_includes/dester-inject-Math.js"), exports.default = function(t, u) {
    return u ? r.default(t * (u = e.default(10, u))) / u : r.default(t);
};
