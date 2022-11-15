/* eslint-disable */
import { v as t } from "../../_includes/dester-inject-Math.mjs";

import r from "../log/index.mjs";

var e = t.atanh || function(t) {
    return (t = +t) ? r((1 + t) / (1 - t)) / 2 : t;
};

export { e as default };
