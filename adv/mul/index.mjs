/* eslint-disable */
function mul(...r) {
    for (var t = +r[0], u = 1, e = r.length; u < e; u++) t *= +r[u];
    return t;
}

export { mul as default };
