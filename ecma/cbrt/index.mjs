/* eslint-disable */
import { v as t } from "../../_includes/dester-inject-isFinite.mjs";

import { v as e } from "../../_includes/dester-inject-Math.mjs";

import r from "../pow/index.mjs";

var i = e.cbrt || function(e) {
    return t(e = +e) && 0 !== e ? e > 0 ? r(e, 1 / 3) : -r(-e, 1 / 3) : e;
};

export { i as default };
