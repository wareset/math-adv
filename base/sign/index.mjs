/* eslint-disable */
/*
dester builds:
base/sign.ts
*/
import a from "../../lib/Math";

var r = a.sign || (a => a !== (a = +a) ? NaN : a > 0 ? 1 : a < 0 ? -1 : a);

export { r as default };
