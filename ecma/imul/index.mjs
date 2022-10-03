/* eslint-disable */
/*
dester builds:
ecma/imul.ts
*/
import r from "../../lib/Math";

var a = r.imul || ((r, a) => {
    var t = (r = +r) >>> 16 & 65535, e = 65535 & r, i = (a = +a) >>> 16 & 65535, l = 65535 & a;
    return e * l + (t * l + e * i << 16 >>> 0) | 0;
});

export { a as default };
