/* eslint-disable */
import e from "../scale/index.mjs";

import m from "../../ecma/fround/index.mjs";

import "../../ecma/pow/index.mjs";

import "../../ecma/sign/index.mjs";

function fscale(i, o, r, n, s) {
    return m(e(i, o, r, n, s));
}

export { fscale as default };
