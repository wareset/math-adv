/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import t from "../abs/index.mjs";

import e from "../sqrt/index.mjs";

var o = r.hypot || function() {
    for (var r, o, i = 0, m = 0, n = 0, s = arguments.length; n < s; n++) m < (r = t(+(n < 0 || arguments.length <= n ? void 0 : arguments[n]))) ? (i = i * (o = m / r) * o + 1, 
    m = r) : i += r > 0 ? (o = r / m) * o : r;
    return m === 1 / 0 ? m : m * e(i);
};

export { o as default };
