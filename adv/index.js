/* eslint-disable */
/*
dester builds:
adv/index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./div"), r = require("./mean"), t = require("./mul"), u = require("./sub"), n = require("./sum");

function o(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var f = o(e), i = o(r), a = o(t), d = o(u), l = o(n);

Object.defineProperty(exports, "div", {
    enumerable: !0,
    get: function() {
        return f.default;
    }
}), Object.defineProperty(exports, "mean", {
    enumerable: !0,
    get: function() {
        return i.default;
    }
}), Object.defineProperty(exports, "mul", {
    enumerable: !0,
    get: function() {
        return a.default;
    }
}), Object.defineProperty(exports, "sub", {
    enumerable: !0,
    get: function() {
        return d.default;
    }
}), Object.defineProperty(exports, "sum", {
    enumerable: !0,
    get: function() {
        return l.default;
    }
});
