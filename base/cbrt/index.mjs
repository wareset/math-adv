/* eslint-disable */
/*
dester builds:
base/cbrt.ts
*/
import r from "../../lib/Math";

import o from "../../lib/Infinity";

import t from "../abs";

import i from "../exp";

import m from "../log";

var f = r.cbrt || (r => {
    if (0 !== r && r !== o && r !== -o && r == r) {
        var f = t(r), p = i(m(f) / 3);
        r = r / f * (p + (f / (p * p) - p) / 3);
    }
    return r;
});

export { f as default };
