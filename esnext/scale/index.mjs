/* eslint-disable */
function scale(e, a, t, c, l) {
    return (+e - (a = +a)) * (+l - (c = +c)) / (+t - a) + c;
}

export { scale as default };
