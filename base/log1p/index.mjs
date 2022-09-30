/* eslint-disable */
/*
dester builds:
base/log1p.ts
*/
import o from "../../lib/Math";

import r from "../log";

var t = o.log1p || (o => r(1 + o));

export { t as default };
