/* eslint-disable */
/*
dester builds:
base/imul.ts
*/
import r from "../../lib/Math";

var a = r.imul || ((r, a) => {
    var t = 65535 & r, e = 65535 & a;
    return t * e + ((r >>> 16 & 65535) * e + t * (a >>> 16 & 65535) << 16 >>> 0) | 0;
});

export { a as default };
