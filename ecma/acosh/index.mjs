/* eslint-disable */
import o from "../LN2/index.mjs";

import r from "../log/index.mjs";

import m from "../sqrt/index.mjs";

import t from "../log1p/index.mjs";

var i = Math.acosh || function(i) {
    return (i = +i) < 1 ? NaN : i > 94906265.62425156 ? r(i) + o : t(i - 1 + m(i - 1) * m(i + 1));
};

export { i as default };
