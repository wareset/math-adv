/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

var t = r.imul || function(r, t) {
    var e = 65535, a = e & (r = +r), i = e & (t = +t);
    return 0 | a * i + ((e & r >>> 16) * i + a * (e & t >>> 16) << 16 >>> 0);
};

export { t as default };
