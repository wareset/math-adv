/* eslint-disable */
/*
dester builds:
ecma/atanh.ts
*/
import a from "../../lib/Math";

import o from "../log";

var r = a.atanh || (a => (a = +a) ? o((1 + a) / (1 - a)) / 2 : a);

export { r as default };
