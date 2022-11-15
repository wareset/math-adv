/* eslint-disable */
import { v as t } from "../../_includes/dester-inject-Math.mjs";

var e = t.sign || function(t) {
    return (t = +t) > 0 ? 1 : t < 0 ? -1 : t;
};

export { e as default };
