/* eslint-disable */
import { v as t } from "../../_includes/dester-inject-Math.mjs";

import { v as e } from "../../_includes/dester-inject-isFinite.mjs";

import r from "../pow/index.mjs";

var i = t.cbrt || function(t) {
    return e(t = +t) && 0 !== t ? t > 0 ? r(t, 1 / 3) : -r(-t, 1 / 3) : t;
};

export { i as default };
