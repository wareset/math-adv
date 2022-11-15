/* eslint-disable */
import { v as i } from "../../_includes/dester-inject-Math.mjs";

import { v as r } from "../../_includes/dester-inject-isFinite.mjs";

import t from "../log/index.mjs";

import e from "../sqrt/index.mjs";

var s = i.asinh || function(i) {
    return r(i = +i) && 0 !== i ? i < 0 ? -s(-i) : t(i + e(i * i + 1)) : i;
};

export { s as default };
