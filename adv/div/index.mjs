/* eslint-disable */
function div(...r) {
    for (var t = +r[0], e = 1, n = r.length; e < n; e++) t /= +r[e];
    return t;
}

export { div as default };
