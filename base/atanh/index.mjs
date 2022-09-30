/* eslint-disable */
/*
dester builds:
base/atanh.ts
*/
import a from "../../lib/Math";

import o from "../log";

var r = a.atanh || (a => o((1 + a) / (1 - a)) / 2);

export { r as default };
