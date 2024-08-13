/* eslint-disable */
import r from "../exp/index.mjs";

var t = Math.sinh || function(t) {
    return (r(t) - r(-t)) / 2;
};

export { t as default };
