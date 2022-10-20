/* eslint-disable */
/*
dester builds:
adv/mul.ts
*/
var r = (...r) => {
    for (var a = +r[0], e = 1, t = r.length; e < t; e++) a *= +r[e];
    return a;
};

export { r as default };
