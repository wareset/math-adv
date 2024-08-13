/* eslint-disable */
import o from "../../ecma/pow/index.mjs";

import r from "../../ecma/floor/index.mjs";

function floorTo(m, e) {
    return e ? r(m * (e = o(10, e))) / e : r(m);
}

export { floorTo as default };
