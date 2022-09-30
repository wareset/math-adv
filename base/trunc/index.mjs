/* eslint-disable */
/*
dester builds:
base/trunc.ts
*/
import r from "../../lib/Math";

var t = r.trunc || (r => r - r % 1 || (r < 0 ? -0 : 0 === r ? r : 0));

export { t as default };
