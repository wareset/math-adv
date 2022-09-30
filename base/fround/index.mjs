/* eslint-disable */
/*
dester builds:
base/fround.ts
*/
import r from "../../lib/Math";

var a = r.fround || (r => new Float32Array([ r ])[0]);

export { a as default };
