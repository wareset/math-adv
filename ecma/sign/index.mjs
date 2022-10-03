/* eslint-disable */
/*
dester builds:
ecma/sign.ts
*/
import a from "../../lib/Math";

var r = a.sign || (a => 0 == (a = +a) || a != a ? a : a > 0 ? 1 : -1);

export { r as default };
