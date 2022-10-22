/* eslint-disable */
/*
dester builds:
esnext/index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./clamp"), r = require("./DEG_PER_RAD"), t = require("./degrees"), n = require("./fscale"), u = require("./RAD_PER_DEG"), a = require("./radians"), f = require("./scale");

function o(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var i = o(e), l = o(r), c = o(t), d = o(n), p = o(u), s = o(a), b = o(f);

Object.defineProperty(exports, "clamp", {
    enumerable: !0,
    get: function() {
        return i.default;
    }
}), Object.defineProperty(exports, "DEG_PER_RAD", {
    enumerable: !0,
    get: function() {
        return l.default;
    }
}), Object.defineProperty(exports, "degrees", {
    enumerable: !0,
    get: function() {
        return c.default;
    }
}), Object.defineProperty(exports, "fscale", {
    enumerable: !0,
    get: function() {
        return d.default;
    }
}), Object.defineProperty(exports, "RAD_PER_DEG", {
    enumerable: !0,
    get: function() {
        return p.default;
    }
}), Object.defineProperty(exports, "radians", {
    enumerable: !0,
    get: function() {
        return s.default;
    }
}), Object.defineProperty(exports, "scale", {
    enumerable: !0,
    get: function() {
        return b.default;
    }
});
