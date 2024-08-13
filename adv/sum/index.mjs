/* eslint-disable */
function sum(...r) {
    for (var t = +r[0], u = 1, e = r.length; u < e; u++) t += +r[u];
    return t;
}

export { sum as default };
