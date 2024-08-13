/* eslint-disable */
import i from "../log/index.mjs";

import r from "../sqrt/index.mjs";

var t = Math.asinh || function(n) {
    return isFinite(n = +n) && 0 !== n ? n < 0 ? -t(-n) : i(n + r(n * n + 1)) : n;
};

export { t as default };
