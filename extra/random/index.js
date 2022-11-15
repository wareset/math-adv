/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const e = require("../../ecma/random/index.js");

require("../../_includes/dester-inject-Math.js");

var r = function() {
    function r() {
        return e.default() || r();
    }
    return function(e, t) {
        return void 0 === e ? r() : void 0 === t ? r() * e : r() * (t - e) + e;
    };
}();

exports.default = r;
