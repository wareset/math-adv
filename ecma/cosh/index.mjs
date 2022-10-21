/* eslint-disable */
/*
dester builds:
ecma/cosh.ts
*/
import o from "../../lib/Math";

import r from "../exp";

var t = o.cosh || (o => (r(o) + r(-o)) / 2);

export { t as default };
