/* eslint-disable */
/*
dester builds:
ecma/tanh.ts
*/
import r from "../../lib/Math";

import t from "../../lib/Infinity";

import m from "../exp";

import o from "../expm1";

var i = r.tanh || (r => {
    var i, p;
    return (i = o(r = +r)) === t ? 1 : (p = o(-r)) === t ? -1 : (i - p) / (m(r) + m(-r));
});

export { i as default };
