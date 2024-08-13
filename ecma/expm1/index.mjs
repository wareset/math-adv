/* eslint-disable */
import e from "../exp/index.mjs";

var r = Math.expm1 || function(r) {
    return (r = +r) ? r > -1e-6 && r < 1e-6 ? r + r * r / 2 : e(r) - 1 : r;
};

export { r as default };
