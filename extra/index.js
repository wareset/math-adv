/* eslint-disable */
/*
dester builds:
extra/index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./ceil"), r = require("./floor"), t = require("./random"), n = require("./round");

function u(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var o = u(e), a = u(r), f = u(t), i = u(n);

Object.defineProperty(exports, "ceilExtra", {
    enumerable: !0,
    get: function() {
        return o.default;
    }
}), Object.defineProperty(exports, "floorExtra", {
    enumerable: !0,
    get: function() {
        return a.default;
    }
}), Object.defineProperty(exports, "randomExtra", {
    enumerable: !0,
    get: function() {
        return f.default;
    }
}), Object.defineProperty(exports, "roundExtra", {
    enumerable: !0,
    get: function() {
        return i.default;
    }
});
