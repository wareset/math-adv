/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./extra/ceil"), r = require("./extra/clamp"), t = require("./extra/distance"), n = require("./extra/floor"), u = require("./extra/magnitude"), a = require("./extra/mean"), o = require("./extra/multiply"), i = require("./extra/random"), f = require("./extra/randomAndCeil"), b = require("./extra/randomAndFloor"), d = require("./extra/randomAndRound"), l = require("./extra/round"), c = require("./extra/sum"), p = require("./extra/toDegrees"), s = require("./extra/toRadians"), m = require("./base/abs"), x = require("./base/acos"), g = require("./base/acosh"), y = require("./base/asin"), O = require("./base/asinh"), P = require("./base/atan"), j = require("./base/atan2"), q = require("./base/atanh"), h = require("./base/cbrt"), L = require("./base/clz32"), R = require("./base/cos"), A = require("./base/cosh"), E = require("./base/exp"), G = require("./base/expm1"), N = require("./base/E"), Q = require("./base/fround"), S = require("./base/hypot"), T = require("./base/imul"), _ = require("./base/log"), v = require("./base/log10"), w = require("./base/log1p"), z = require("./base/log2"), C = require("./base/LN10"), D = require("./base/LN2"), F = require("./base/LOG10E"), I = require("./base/LOG2E"), M = require("./base/max"), k = require("./base/min"), B = require("./base/pow"), H = require("./base/PI"), J = require("./base/sign"), K = require("./base/sin"), U = require("./base/sinh"), V = require("./base/sqrt"), W = require("./base/SQRT1_2"), X = require("./base/SQRT2"), Y = require("./base/tan"), Z = require("./base/tanh"), $ = require("./base/trunc");

function ee(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var re = ee(e), te = ee(r), ne = ee(t), ue = ee(n), ae = ee(u), oe = ee(a), ie = ee(o), fe = ee(i), be = ee(f), de = ee(b), le = ee(d), ce = ee(l), pe = ee(c), se = ee(p), me = ee(s), xe = ee(m), ge = ee(x), ye = ee(g), Oe = ee(y), Pe = ee(O), je = ee(P), qe = ee(j), he = ee(q), Le = ee(h), Re = ee(L), Ae = ee(R), Ee = ee(A), Ge = ee(E), Ne = ee(G), Qe = ee(N), Se = ee(Q), Te = ee(S), _e = ee(T), ve = ee(_), we = ee(v), ze = ee(w), Ce = ee(z), De = ee(C), Fe = ee(D), Ie = ee(F), Me = ee(I), ke = ee(M), Be = ee(k), He = ee(B), Je = ee(H), Ke = ee(J), Ue = ee(K), Ve = ee(U), We = ee(V), Xe = ee(W), Ye = ee(X), Ze = ee(Y), $e = ee(Z), er = ee($);

Object.defineProperty(exports, "ceil", {
    enumerable: !0,
    get: function() {
        return re.default;
    }
}), Object.defineProperty(exports, "clamp", {
    enumerable: !0,
    get: function() {
        return te.default;
    }
}), Object.defineProperty(exports, "distance", {
    enumerable: !0,
    get: function() {
        return ne.default;
    }
}), Object.defineProperty(exports, "floor", {
    enumerable: !0,
    get: function() {
        return ue.default;
    }
}), Object.defineProperty(exports, "magnitude", {
    enumerable: !0,
    get: function() {
        return ae.default;
    }
}), Object.defineProperty(exports, "mean", {
    enumerable: !0,
    get: function() {
        return oe.default;
    }
}), Object.defineProperty(exports, "multiply", {
    enumerable: !0,
    get: function() {
        return ie.default;
    }
}), Object.defineProperty(exports, "random", {
    enumerable: !0,
    get: function() {
        return fe.default;
    }
}), Object.defineProperty(exports, "randomAndCeil", {
    enumerable: !0,
    get: function() {
        return be.default;
    }
}), Object.defineProperty(exports, "randomAndFloor", {
    enumerable: !0,
    get: function() {
        return de.default;
    }
}), Object.defineProperty(exports, "randomAndRound", {
    enumerable: !0,
    get: function() {
        return le.default;
    }
}), Object.defineProperty(exports, "round", {
    enumerable: !0,
    get: function() {
        return ce.default;
    }
}), Object.defineProperty(exports, "sum", {
    enumerable: !0,
    get: function() {
        return pe.default;
    }
}), Object.defineProperty(exports, "toDegrees", {
    enumerable: !0,
    get: function() {
        return se.default;
    }
}), Object.defineProperty(exports, "toRadians", {
    enumerable: !0,
    get: function() {
        return me.default;
    }
}), Object.defineProperty(exports, "abs", {
    enumerable: !0,
    get: function() {
        return xe.default;
    }
}), Object.defineProperty(exports, "acos", {
    enumerable: !0,
    get: function() {
        return ge.default;
    }
}), Object.defineProperty(exports, "acosh", {
    enumerable: !0,
    get: function() {
        return ye.default;
    }
}), Object.defineProperty(exports, "asin", {
    enumerable: !0,
    get: function() {
        return Oe.default;
    }
}), Object.defineProperty(exports, "asinh", {
    enumerable: !0,
    get: function() {
        return Pe.default;
    }
}), Object.defineProperty(exports, "atan", {
    enumerable: !0,
    get: function() {
        return je.default;
    }
}), Object.defineProperty(exports, "atan2", {
    enumerable: !0,
    get: function() {
        return qe.default;
    }
}), Object.defineProperty(exports, "atanh", {
    enumerable: !0,
    get: function() {
        return he.default;
    }
}), Object.defineProperty(exports, "cbrt", {
    enumerable: !0,
    get: function() {
        return Le.default;
    }
}), Object.defineProperty(exports, "clz32", {
    enumerable: !0,
    get: function() {
        return Re.default;
    }
}), Object.defineProperty(exports, "cos", {
    enumerable: !0,
    get: function() {
        return Ae.default;
    }
}), Object.defineProperty(exports, "cosh", {
    enumerable: !0,
    get: function() {
        return Ee.default;
    }
}), Object.defineProperty(exports, "exp", {
    enumerable: !0,
    get: function() {
        return Ge.default;
    }
}), Object.defineProperty(exports, "expm1", {
    enumerable: !0,
    get: function() {
        return Ne.default;
    }
}), Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function() {
        return Qe.default;
    }
}), Object.defineProperty(exports, "fround", {
    enumerable: !0,
    get: function() {
        return Se.default;
    }
}), Object.defineProperty(exports, "hypot", {
    enumerable: !0,
    get: function() {
        return Te.default;
    }
}), Object.defineProperty(exports, "imul", {
    enumerable: !0,
    get: function() {
        return _e.default;
    }
}), Object.defineProperty(exports, "log", {
    enumerable: !0,
    get: function() {
        return ve.default;
    }
}), Object.defineProperty(exports, "log10", {
    enumerable: !0,
    get: function() {
        return we.default;
    }
}), Object.defineProperty(exports, "log1p", {
    enumerable: !0,
    get: function() {
        return ze.default;
    }
}), Object.defineProperty(exports, "log2", {
    enumerable: !0,
    get: function() {
        return Ce.default;
    }
}), Object.defineProperty(exports, "LN10", {
    enumerable: !0,
    get: function() {
        return De.default;
    }
}), Object.defineProperty(exports, "LN2", {
    enumerable: !0,
    get: function() {
        return Fe.default;
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
        return He.default;
    }
}), Object.defineProperty(exports, "PI", {
    enumerable: !0,
    get: function() {
        return Je.default;
    }
}), Object.defineProperty(exports, "sign", {
    enumerable: !0,
    get: function() {
        return Ke.default;
    }
}), Object.defineProperty(exports, "sin", {
    enumerable: !0,
    get: function() {
        return Ue.default;
    }
}), Object.defineProperty(exports, "sinh", {
    enumerable: !0,
    get: function() {
        return Ve.default;
    }
}), Object.defineProperty(exports, "sqrt", {
    enumerable: !0,
    get: function() {
        return We.default;
    }
}), Object.defineProperty(exports, "SQRT1_2", {
    enumerable: !0,
    get: function() {
        return Xe.default;
    }
}), Object.defineProperty(exports, "SQRT2", {
    enumerable: !0,
    get: function() {
        return Ye.default;
    }
}), Object.defineProperty(exports, "tan", {
    enumerable: !0,
    get: function() {
        return Ze.default;
    }
}), Object.defineProperty(exports, "tanh", {
    enumerable: !0,
    get: function() {
        return $e.default;
    }
}), Object.defineProperty(exports, "trunc", {
    enumerable: !0,
    get: function() {
        return er.default;
    }
});
