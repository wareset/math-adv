/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Math.imul || function(e, r) {
    var t = 65535, u = t & (e = +e), a = t & (r = +r);
    return 0 | u * a + ((t & e >>> 16) * a + u * (t & r >>> 16) << 16 >>> 0);
};

exports.default = e;
