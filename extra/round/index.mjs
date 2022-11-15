/* eslint-disable */
import e from "../../ecma/pow/index.mjs";

import m from "../../ecma/round/index.mjs";

import "../../_includes/dester-inject-Math.mjs";

function r(r, t) {
    return t ? m(r * (t = e(10, t))) / t : m(r);
}

export { r as default };
