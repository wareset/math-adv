/* eslint-disable */
function clamp(a, t, c) {
    return (a = +a) < t ? +t : a > c ? +c : a;
}

export { clamp as default };
