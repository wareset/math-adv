/* eslint-disable */
/*
dester builds:
adv/mean.ts
*/
var r = (...r) => {
    for (var a = +r[0], e = r.length, t = 1; t < e; t++) a += +r[t];
    return a / e;
};

export { r as default };
