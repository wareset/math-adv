/* eslint-disable */
import o from "../../ecma/pow/index.mjs";

import r from "../../ecma/round/index.mjs";

function roundTo(m, n) {
    return n ? r(m * (n = o(10, n))) / n : r(m);
}

export { roundTo as default };
