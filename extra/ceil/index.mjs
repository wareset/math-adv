/* eslint-disable */
import e from "../../ecma/pow/index.mjs";

import o from "../../ecma/ceil/index.mjs";

function ceilTo(i, m) {
    return m ? o(i * (m = e(10, m))) / m : o(i);
}

export { ceilTo as default };
