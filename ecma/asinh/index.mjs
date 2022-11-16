/* eslint-disable */
import { v as i } from "../../_includes/dester-inject-isFinite.mjs";

import { v as r } from "../../_includes/dester-inject-Math.mjs";

import t from "../log/index.mjs";

import e from "../sqrt/index.mjs";

var s = r.asinh || function(r) {
    return i(r = +r) && 0 !== r ? r < 0 ? -s(-r) : t(r + e(r * r + 1)) : r;
};

export { s as default };
