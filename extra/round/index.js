/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../ecma/pow/index.js"), r = require("../../ecma/round/index.js");

exports.default = function roundTo(u, t) {
    return t ? r.default(u * (t = e.default(10, t))) / t : r.default(u);
};
