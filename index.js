/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./adv"), r = require("./ecma"), t = require("./esnext"), n = require("./extra");

Object.keys(e).forEach((function(r) {
    "default" === r || exports.hasOwnProperty(r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    });
})), Object.keys(r).forEach((function(e) {
    "default" === e || exports.hasOwnProperty(e) || Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return r[e];
        }
    });
})), Object.keys(t).forEach((function(e) {
    "default" === e || exports.hasOwnProperty(e) || Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return t[e];
        }
    });
})), Object.keys(n).forEach((function(e) {
    "default" === e || exports.hasOwnProperty(e) || Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return n[e];
        }
    });
}));
