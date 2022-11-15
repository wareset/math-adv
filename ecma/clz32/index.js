/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../_includes/dester-inject-Math.js"), r = require("../LOG2E/index.js"), t = require("../log/index.js"), u = require("../floor/index.js");

var d = e.v.clz32 || function(e) {
    return 0 != (e = +e >>> 0) ? 31 - u.default(t.default(e + .5) * r.default) : 32;
};

exports.default = d;
