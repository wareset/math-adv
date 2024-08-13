/* eslint-disable */
var a = Math.imul || function(a, r) {
    var t = 65535, u = t & (a = +a), e = t & (r = +r);
    return 0 | u * e + ((t & a >>> 16) * e + u * (t & r >>> 16) << 16 >>> 0);
};

export { a as default };
