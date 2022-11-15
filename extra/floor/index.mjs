/* eslint-disable */
import e from "../../ecma/pow/index.mjs";

import m from "../../ecma/floor/index.mjs";

import "../../_includes/dester-inject-Math.mjs";

function o(o, r) {
    return r ? m(o * (r = e(10, r))) / r : m(o);
}

export { o as default };
