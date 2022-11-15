/* eslint-disable */
import { v as e } from "../../_includes/dester-inject-Math.mjs";

import r from "../exp/index.mjs";

var t = e.sinh || function(e) {
    return (r(e) - r(-e)) / 2;
};

export { t as default };
