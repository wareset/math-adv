/* eslint-disable */
import n from "../../ecma/random/index.mjs";

import "../../_includes/dester-inject-Math.mjs";

var r = function() {
    function r() {
        return n() || r();
    }
    return function(n, t) {
        return void 0 === n ? r() : void 0 === t ? r() * n : r() * (t - n) + n;
    };
}();

export { r as default };
