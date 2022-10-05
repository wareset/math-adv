/* eslint-disable */
/*
dester builds:
ecma/trunc.ts
*/
import r from "../../lib/Math";

import o from "../ceil";

import t from "../floor";

var m = r.trunc || (r => (r > 0 ? t : o)(r));

export { m as default };
