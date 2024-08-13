/* eslint-disable */
import r from "../exp/index.mjs";

import t from "../expm1/index.mjs";

var e = Math.tanh || function(e) {
    var m, a;
    return (m = t(e = +e)) === 1 / 0 ? 1 : (a = t(-e)) === 1 / 0 ? -1 : (m - a) / (r(e) + r(-e));
};

export { e as default };
