/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function mean(...e) {
    for (var r = +e[0], t = e.length, n = 1; n < t; n++) r += +e[n];
    return r / t;
};
