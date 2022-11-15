/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../_includes/dester-inject-Math.js").v.sign || function(e) {
    return (e = +e) > 0 ? 1 : e < 0 ? -1 : e;
};

exports.default = e;
