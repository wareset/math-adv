/* eslint-disable */
/*
dester builds:
adv/mean.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.default = (...e) => {
    for (var r = +e[0], t = e.length, o = 1; o < t; o++) r += +e[o];
    return r / t;
};
