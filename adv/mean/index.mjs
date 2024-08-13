/* eslint-disable */
function mean(...e) {
    for (var n = +e[0], a = e.length, r = 1; r < a; r++) n += +e[r];
    return n / a;
}

export { mean as default };
