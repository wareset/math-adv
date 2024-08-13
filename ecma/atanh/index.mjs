/* eslint-disable */
import t from "../log/index.mjs";

var a = Math.atanh || function(a) {
    return (a = +a) ? t((1 + a) / (1 - a)) / 2 : a;
};

export { a as default };
