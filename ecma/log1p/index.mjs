/* eslint-disable */
import e from "../log/index.mjs";

var o = Math.log1p || function(o) {
    return (o = +o) > -1e-8 && o < 1e-8 ? o - o * o / 2 : e(1 + o);
};

export { o as default };
