/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../ceil/index.js"), r = require("../floor/index.js");

var t = Math.trunc || function(t) {
    return (t > 0 ? r.default : e.default)(t);
};

exports.default = t;
