/* eslint-disable */
import r from "../ceil/index.mjs";

import o from "../floor/index.mjs";

var t = Math.trunc || function(t) {
    return (t > 0 ? o : r)(t);
};

export { t as default };
