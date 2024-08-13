/* eslint-disable */
import _ from "../../ecma/random/index.mjs";

var n = function() {
    function __random__() {
        return _() || __random__();
    }
    return function(_, n) {
        return void 0 === _ ? __random__() : void 0 === n ? __random__() * _ : __random__() * (n - _) + +_;
    };
}();

export { n as default };
