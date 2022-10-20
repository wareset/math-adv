/* eslint-disable */
/*
dester builds:
adv/mul.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.default = (...e) => {
    for (var r = +e[0], t = 1, o = e.length; t < o; t++) r *= +e[t];
    return r;
};
