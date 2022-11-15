/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import e from "../exp/index.mjs";

import t from "../expm1/index.mjs";

var m = r.tanh || function(r) {
    var m, i;
    return (m = t(r = +r)) === 1 / 0 ? 1 : (i = t(-r)) === 1 / 0 ? -1 : (m - i) / (e(r) + e(-r));
};

export { m as default };
