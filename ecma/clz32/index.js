/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../LOG2E/index.js"), r = require("../log/index.js"), t = require("../floor/index.js");

var u = Math.clz32 || function(u) {
    return 0 != (u = +u >>> 0) ? 31 - t.default(r.default(u + .5) * e.default) : 32;
};

exports.default = u;
