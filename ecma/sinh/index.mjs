/* eslint-disable */
/*
dester builds:
ecma/sinh.ts
*/
import r from "../../lib/Math";

import o from "../exp";

var t = r.sinh || (r => (o(r) - o(-r)) / 2);

export { t as default };
