/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../ecma/pow/index.js"), o = require("../../ecma/floor/index.js");

exports.default = function floorTo(r, t) {
    return t ? o.default(r * (t = e.default(10, t))) / t : o.default(r);
};
