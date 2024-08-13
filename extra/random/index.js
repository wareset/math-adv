/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
    value: !0
});

const _ = require("../../ecma/random/index.js");

var r = function() {
    function __random__() {
        return _.default() || __random__();
    }
    return function(_, r) {
        return void 0 === _ ? __random__() : void 0 === r ? __random__() * _ : __random__() * (r - _) + +_;
    };
}();

exports.default = r;
