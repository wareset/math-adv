/* eslint-disable */
/*
dester builds:
base/sinh.ts
*/
import r from "../../lib/Math";

import o from "../exp";

var t = r.sinh || (r => ((r = o(r)) - 1 / r) / 2);

export { t as default };
