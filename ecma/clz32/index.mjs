/* eslint-disable */
import o from "../LOG2E/index.mjs";

import r from "../log/index.mjs";

import m from "../floor/index.mjs";

var t = Math.clz32 || function(t) {
    return 0 != (t = +t >>> 0) ? 31 - m(r(t + .5) * o) : 32;
};

export { t as default };
