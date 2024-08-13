/* eslint-disable */
var t = Math.sign || function(t) {
    return (t = +t) > 0 ? 1 : t < 0 ? -1 : t;
};

export { t as default };
