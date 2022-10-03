/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./esnext/clamp"), r = require("./esnext/DEG_PER_RAD"), t = require("./esnext/degrees"), n = require("./esnext/fscale"), u = require("./esnext/RAD_PER_DEG"), a = require("./esnext/radians"), o = require("./esnext/scale"), i = require("./adv/mean"), c = require("./adv/multiply"), f = require("./adv/sum"), l = require("./extra/ceil"), d = require("./extra/floor"), p = require("./extra/random"), b = require("./extra/round"), m = require("./ecma/abs"), s = require("./ecma/acos"), x = require("./ecma/acosh"), g = require("./ecma/asin"), P = require("./ecma/asinh"), y = require("./ecma/atan"), O = require("./ecma/atan2"), j = require("./ecma/atanh"), q = require("./ecma/cbrt"), h = require("./ecma/clz32"), E = require("./ecma/cos"), R = require("./ecma/cosh"), _ = require("./ecma/exp"), D = require("./ecma/expm1"), G = require("./ecma/E"), L = require("./ecma/fround"), v = require("./ecma/hypot"), A = require("./ecma/imul"), N = require("./ecma/log"), Q = require("./ecma/log10"), S = require("./ecma/log1p"), T = require("./ecma/log2"), w = require("./ecma/LN10"), z = require("./ecma/LN2"), I = require("./ecma/LOG10E"), M = require("./ecma/LOG2E"), k = require("./ecma/max"), B = require("./ecma/min"), C = require("./ecma/pow"), F = require("./ecma/PI"), H = require("./ecma/sign"), J = require("./ecma/sin"), K = require("./ecma/sinh"), U = require("./ecma/sqrt"), V = require("./ecma/SQRT1_2"), W = require("./ecma/SQRT2"), X = require("./ecma/tan"), Y = require("./ecma/tanh"), Z = require("./ecma/trunc");

function $(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var ee = $(e), re = $(r), te = $(t), ne = $(n), ue = $(u), ae = $(a), oe = $(o), ie = $(i), ce = $(c), fe = $(f), le = $(l), de = $(d), pe = $(p), be = $(b), me = $(m), se = $(s), xe = $(x), ge = $(g), Pe = $(P), ye = $(y), Oe = $(O), je = $(j), qe = $(q), he = $(h), Ee = $(E), Re = $(R), _e = $(_), De = $(D), Ge = $(G), Le = $(L), ve = $(v), Ae = $(A), Ne = $(N), Qe = $(Q), Se = $(S), Te = $(T), we = $(w), ze = $(z), Ie = $(I), Me = $(M), ke = $(k), Be = $(B), Ce = $(C), Fe = $(F), He = $(H), Je = $(J), Ke = $(K), Ue = $(U), Ve = $(V), We = $(W), Xe = $(X), Ye = $(Y), Ze = $(Z);

Object.defineProperty(exports, "clamp", {
    enumerable: !0,
    get: function() {
        return ee.default;
    }
}), Object.defineProperty(exports, "DEG_PER_RAD", {
    enumerable: !0,
    get: function() {
        return re.default;
    }
}), Object.defineProperty(exports, "degrees", {
    enumerable: !0,
    get: function() {
        return te.default;
    }
}), Object.defineProperty(exports, "fscale", {
    enumerable: !0,
    get: function() {
        return ne.default;
    }
}), Object.defineProperty(exports, "RAD_PER_DEG", {
    enumerable: !0,
    get: function() {
        return ue.default;
    }
}), Object.defineProperty(exports, "radians", {
    enumerable: !0,
    get: function() {
        return ae.default;
    }
}), Object.defineProperty(exports, "scale", {
    enumerable: !0,
    get: function() {
        return oe.default;
    }
}), Object.defineProperty(exports, "mean", {
    enumerable: !0,
    get: function() {
        return ie.default;
    }
}), Object.defineProperty(exports, "multiply", {
    enumerable: !0,
    get: function() {
        return ce.default;
    }
}), Object.defineProperty(exports, "sum", {
    enumerable: !0,
    get: function() {
        return fe.default;
    }
}), Object.defineProperty(exports, "ceil", {
    enumerable: !0,
    get: function() {
        return le.default;
    }
}), Object.defineProperty(exports, "floor", {
    enumerable: !0,
    get: function() {
        return de.default;
    }
}), Object.defineProperty(exports, "random", {
    enumerable: !0,
    get: function() {
        return pe.default;
    }
}), Object.defineProperty(exports, "round", {
    enumerable: !0,
    get: function() {
        return be.default;
    }
}), Object.defineProperty(exports, "abs", {
    enumerable: !0,
    get: function() {
        return me.default;
    }
}), Object.defineProperty(exports, "acos", {
    enumerable: !0,
    get: function() {
        return se.default;
    }
}), Object.defineProperty(exports, "acosh", {
    enumerable: !0,
    get: function() {
        return xe.default;
    }
}), Object.defineProperty(exports, "asin", {
    enumerable: !0,
    get: function() {
        return ge.default;
    }
}), Object.defineProperty(exports, "asinh", {
    enumerable: !0,
    get: function() {
        return Pe.default;
    }
}), Object.defineProperty(exports, "atan", {
    enumerable: !0,
    get: function() {
        return ye.default;
    }
}), Object.defineProperty(exports, "atan2", {
    enumerable: !0,
    get: function() {
        return Oe.default;
    }
}), Object.defineProperty(exports, "atanh", {
    enumerable: !0,
    get: function() {
        return je.default;
    }
}), Object.defineProperty(exports, "cbrt", {
    enumerable: !0,
    get: function() {
        return qe.default;
    }
}), Object.defineProperty(exports, "clz32", {
    enumerable: !0,
    get: function() {
        return he.default;
    }
}), Object.defineProperty(exports, "cos", {
    enumerable: !0,
    get: function() {
        return Ee.default;
    }
}), Object.defineProperty(exports, "cosh", {
    enumerable: !0,
    get: function() {
        return Re.default;
    }
}), Object.defineProperty(exports, "exp", {
    enumerable: !0,
    get: function() {
        return _e.default;
    }
}), Object.defineProperty(exports, "expm1", {
    enumerable: !0,
    get: function() {
        return De.default;
    }
}), Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function() {
        return Ge.default;
    }
}), Object.defineProperty(exports, "fround", {
    enumerable: !0,
    get: function() {
        return Le.default;
    }
}), Object.defineProperty(exports, "hypot", {
    enumerable: !0,
    get: function() {
        return ve.default;
    }
}), Object.defineProperty(exports, "imul", {
    enumerable: !0,
    get: function() {
        return Ae.default;
    }
}), Object.defineProperty(exports, "log", {
    enumerable: !0,
    get: function() {
        return Ne.default;
    }
}), Object.defineProperty(exports, "log10", {
    enumerable: !0,
    get: function() {
        return Qe.default;
    }
}), Object.defineProperty(exports, "log1p", {
    enumerable: !0,
    get: function() {
        return Se.default;
    }
}), Object.defineProperty(exports, "log2", {
    enumerable: !0,
    get: function() {
        return Te.default;
    }
}), Object.defineProperty(exports, "LN10", {
    enumerable: !0,
    get: function() {
        return we.default;
    }
}), Object.defineProperty(exports, "LN2", {
    enumerable: !0,
    get: function() {
        return ze.default;
    }
}), Object.defineProperty(exports, "LOG10E", {
    enumerable: !0,
    get: function() {
        return Ie.default;
    }
}), Object.defineProperty(exports, "LOG2E", {
    enumerable: !0,
    get: function() {
        return Me.default;
    }
}), Object.defineProperty(exports, "max", {
    enumerable: !0,
    get: function() {
        return ke.default;
    }
}), Object.defineProperty(exports, "min", {
    enumerable: !0,
    get: function() {
        return Be.default;
    }
}), Object.defineProperty(exports, "pow", {
    enumerable: !0,
    get: function() {
        return Ce.default;
    }
}), Object.defineProperty(exports, "PI", {
    enumerable: !0,
    get: function() {
        return Fe.default;
    }
}), Object.defineProperty(exports, "sign", {
    enumerable: !0,
    get: function() {
        return He.default;
    }
}), Object.defineProperty(exports, "sin", {
    enumerable: !0,
    get: function() {
        return Je.default;
    }
}), Object.defineProperty(exports, "sinh", {
    enumerable: !0,
    get: function() {
        return Ke.default;
    }
}), Object.defineProperty(exports, "sqrt", {
    enumerable: !0,
    get: function() {
        return Ue.default;
    }
}), Object.defineProperty(exports, "SQRT1_2", {
    enumerable: !0,
    get: function() {
        return Ve.default;
    }
}), Object.defineProperty(exports, "SQRT2", {
    enumerable: !0,
    get: function() {
        return We.default;
    }
}), Object.defineProperty(exports, "tan", {
    enumerable: !0,
    get: function() {
        return Xe.default;
    }
}), Object.defineProperty(exports, "tanh", {
    enumerable: !0,
    get: function() {
        return Ye.default;
    }
}), Object.defineProperty(exports, "trunc", {
    enumerable: !0,
    get: function() {
        return Ze.default;
    }
});
