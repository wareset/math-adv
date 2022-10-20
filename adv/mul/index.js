/* eslint-disable */
/*
dester builds:
adv/mul.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.default = (...e) => {
    for (var r = +e[0], t = e.length; 1 < t; ) r *= +e[1];
    return r;
};
