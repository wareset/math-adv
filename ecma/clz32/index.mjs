/* eslint-disable */
import { v as r } from "../../_includes/dester-inject-Math.mjs";

import o from "../LOG2E/index.mjs";

import m from "../log/index.mjs";

import t from "../floor/index.mjs";

var e = r.clz32 || function(r) {
    return 0 != (r = +r >>> 0) ? 31 - t(m(r + .5) * o) : 32;
};

export { e as default };
