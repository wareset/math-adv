/* eslint-disable */
/*
dester builds:
base/cosh.ts
*/
import o from "../../lib/Math";

import r from "../exp";

var t = o.cosh || (o => ((o = r(o)) + 1 / o) / 2);

export { t as default };
