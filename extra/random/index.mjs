/* eslint-disable */
/*
dester builds:
extra/random.ts
*/
import a from "../../base/random";

var r = () => a() || r(), o = (a = 0, o = a + 1) => r() * (o - a) + a;

export { o as default };
