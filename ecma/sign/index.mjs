/* eslint-disable */
/*
dester builds:
ecma/sign.ts
*/
import a from "../../lib/Math";

var r = a.sign || (a => (a = +a) > 0 ? 1 : a < 0 ? -1 : a);

export { r as default };
