/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import m from "../LN2/index.mjs";

import o from "../log/index.mjs";

import t from "../sqrt/index.mjs";

import i from "../log1p/index.mjs";

var e = r.acosh || function(r) {
    return (r = +r) < 1 ? NaN : r > 94906265.62425156 ? o(r) + m : i(r - 1 + t(r - 1) * t(r + 1));
};

export { e as default };
