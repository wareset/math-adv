/* eslint-disable */
/*
dester builds:
extra/distance.ts
*/
import r from "../../base/pow";

import o from "../../base/sqrt";

var t = (t, a) => {
    for (var e = 0, f = 0, m = t.length; f < m; f++) e += r(t[f] - a[f], 2);
    return o(e);
};

export { t as default };
