/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import o from "../LN2/index.mjs";

import t from "../log/index.mjs";

var e = r.log2 || function(r) {
    return t(+r) / o;
};

export { e as default };
