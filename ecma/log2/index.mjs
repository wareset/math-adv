/* eslint-disable */
import o from "../LN2/index.mjs";

import r from "../log/index.mjs";

var t = Math.log2 || function(t) {
    return r(+t) / o;
};

export { t as default };
