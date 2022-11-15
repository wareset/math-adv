/* eslint-disable */
import e from "../../ecma/pow/index.mjs";

import m from "../../ecma/ceil/index.mjs";

import "../../_includes/dester-inject-Math.mjs";

function t(t, i) {
    return i ? m(t * (i = e(10, i))) / i : m(t);
}

export { t as default };
