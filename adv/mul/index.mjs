/* eslint-disable */
/*
dester builds:
adv/mul.ts
*/
var r = (...r) => {
    for (var a = +r[0], e = r.length; 1 < e; ) a *= +r[1];
    return a;
};

export { r as default };
