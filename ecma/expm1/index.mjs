/* eslint-disable */
import { v as e } from "../../_includes/dester-inject-Math.mjs";

import r from "../exp/index.mjs";

var t = e.expm1 || function(e) {
    return (e = +e) ? e > -1e-6 && e < 1e-6 ? e + e * e / 2 : r(e) - 1 : e;
};

export { t as default };
