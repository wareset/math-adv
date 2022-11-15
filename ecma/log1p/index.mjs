/* eslint-disable */
import { v as e } from "../../_includes/dester-inject-Math.mjs";

import r from "../log/index.mjs";

var t = e.log1p || function(e) {
    return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : r(1 + e);
};

export { t as default };
