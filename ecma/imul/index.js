/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../_includes/dester-inject-Math.js").v.imul || function(e, r) {
    var t = 65535, u = t & (e = +e), i = t & (r = +r);
    return 0 | u * i + ((t & e >>> 16) * i + u * (t & r >>> 16) << 16 >>> 0);
};

exports.default = e;
