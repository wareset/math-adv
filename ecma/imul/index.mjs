/* eslint-disable */
/*
dester builds:
ecma/imul.ts
*/
import r from "../../lib/Math";

var a = r.imul || ((r, a) => {
    var t = 65535, e = t & (r = +r), i = t & (a = +a);
    return 0 | e * i + ((t & r >>> 16) * i + e * (t & a >>> 16) << 16 >>> 0);
});

export { a as default };
