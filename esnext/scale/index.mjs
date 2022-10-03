/* eslint-disable */
/*
dester builds:
esnext/scale.ts
*/
import i from "../../lib/Infinity";

var r = (r, t, a, f, o) => (r = +r) === i || r === -i ? r : (f = +f) + (r - t) * ((o = +o) - f) / (a - t);

export { r as default };
