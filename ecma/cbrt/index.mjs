/* eslint-disable */
import t from "../pow/index.mjs";

var r = Math.cbrt || function(r) {
    return isFinite(r = +r) && 0 !== r ? r > 0 ? t(r, 1 / 3) : -t(-r, 1 / 3) : r;
};

export { r as default };
