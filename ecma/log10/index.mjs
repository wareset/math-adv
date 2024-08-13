/* eslint-disable */
import o from "../LOG10E/index.mjs";

import r from "../log/index.mjs";

var t = Math.log10 || function(t) {
    return r(+t) * o;
};

export { t as default };
