/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import t from "../ceil/index.mjs";

import e from "../floor/index.mjs";

var o = r.trunc || function(r) {
    return (r > 0 ? e : t)(r);
};

export { o as default };
