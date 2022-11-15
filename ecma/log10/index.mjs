/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import o from "../LOG10E/index.mjs";

import t from "../log/index.mjs";

var e = r.log10 || function(r) {
    return t(+r) * o;
};

export { e as default };
