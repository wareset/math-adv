/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./esnext/clamp"), r = require("./esnext/DEG_PER_RAD"), t = require("./esnext/degrees"), n = require("./esnext/fscale"), u = require("./esnext/RAD_PER_DEG"), a = require("./esnext/radians"), o = require("./esnext/scale"), i = require("./adv/div"), f = require("./adv/mean"), c = require("./adv/mul"), l = require("./adv/sub"), d = require("./adv/sum"), p = require("./extra/ceil"), b = require("./extra/floor"), m = require("./extra/random"), s = require("./extra/round"), x = require("./ecma/abs"), g = require("./ecma/acos"), P = require("./ecma/acosh"), O = require("./ecma/asin"), y = require("./ecma/asinh"), j = require("./ecma/atan"), q = require("./ecma/atan2"), E = require("./ecma/atanh"), h = require("./ecma/cbrt"), R = require("./ecma/ceil"), _ = require("./ecma/clz32"), v = require("./ecma/cos"), D = require("./ecma/cosh"), G = require("./ecma/exp"), L = require("./ecma/expm1"), A = require("./ecma/E"), N = require("./ecma/floor"), Q = require("./ecma/fround"), S = require("./ecma/hypot"), T = require("./ecma/imul"), w = require("./ecma/log"), z = require("./ecma/log10"), I = require("./ecma/log1p"), M = require("./ecma/log2"), k = require("./ecma/LN10"), B = require("./ecma/LN2"), C = require("./ecma/LOG10E"), F = require("./ecma/LOG2E"), H = require("./ecma/max"), J = require("./ecma/min"), K = require("./ecma/pow"), U = require("./ecma/PI"), V = require("./ecma/random"), W = require("./ecma/round"), X = require("./ecma/sign"), Y = require("./ecma/sin"), Z = require("./ecma/sinh"), $ = require("./ecma/sqrt"), ee = require("./ecma/SQRT1_2"), re = require("./ecma/SQRT2"), te = require("./ecma/tan"), ne = require("./ecma/tanh"), ue = require("./ecma/trunc");

function ae(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var oe = ae(e), ie = ae(r), fe = ae(t), ce = ae(n), le = ae(u), de = ae(a), pe = ae(o), be = ae(i), me = ae(f), se = ae(c), xe = ae(l), ge = ae(d), Pe = ae(p), Oe = ae(b), ye = ae(m), je = ae(s), qe = ae(x), Ee = ae(g), he = ae(P), Re = ae(O), _e = ae(y), ve = ae(j), De = ae(q), Ge = ae(E), Le = ae(h), Ae = ae(R), Ne = ae(_), Qe = ae(v), Se = ae(D), Te = ae(G), we = ae(L), ze = ae(A), Ie = ae(N), Me = ae(Q), ke = ae(S), Be = ae(T), Ce = ae(w), Fe = ae(z), He = ae(I), Je = ae(M), Ke = ae(k), Ue = ae(B), Ve = ae(C), We = ae(F), Xe = ae(H), Ye = ae(J), Ze = ae(K), $e = ae(U), er = ae(V), rr = ae(W), tr = ae(X), nr = ae(Y), ur = ae(Z), ar = ae($), or = ae(ee), ir = ae(re), fr = ae(te), cr = ae(ne), lr = ae(ue);

Object.defineProperty(exports, "clamp", {
    enumerable: !0,
    get: function() {
        return oe.default;
    }
}), Object.defineProperty(exports, "DEG_PER_RAD", {
    enumerable: !0,
    get: function() {
        return ie.default;
    }
}), Object.defineProperty(exports, "degrees", {
    enumerable: !0,
    get: function() {
        return fe.default;
    }
}), Object.defineProperty(exports, "fscale", {
    enumerable: !0,
    get: function() {
        return ce.default;
    }
}), Object.defineProperty(exports, "RAD_PER_DEG", {
    enumerable: !0,
    get: function() {
        return le.default;
    }
}), Object.defineProperty(exports, "radians", {
    enumerable: !0,
    get: function() {
        return de.default;
    }
}), Object.defineProperty(exports, "scale", {
    enumerable: !0,
    get: function() {
        return pe.default;
    }
}), Object.defineProperty(exports, "div", {
    enumerable: !0,
    get: function() {
        return be.default;
    }
}), Object.defineProperty(exports, "mean", {
    enumerable: !0,
    get: function() {
        return me.default;
    }
}), Object.defineProperty(exports, "mul", {
    enumerable: !0,
    get: function() {
        return se.default;
    }
}), Object.defineProperty(exports, "sub", {
    enumerable: !0,
    get: function() {
        return xe.default;
    }
}), Object.defineProperty(exports, "sum", {
    enumerable: !0,
    get: function() {
        return ge.default;
    }
}), Object.defineProperty(exports, "ceilExtra", {
    enumerable: !0,
    get: function() {
        return Pe.default;
    }
}), Object.defineProperty(exports, "floorExtra", {
    enumerable: !0,
    get: function() {
        return Oe.default;
    }
}), Object.defineProperty(exports, "randomExtra", {
    enumerable: !0,
    get: function() {
        return ye.default;
    }
}), Object.defineProperty(exports, "roundExtra", {
    enumerable: !0,
    get: function() {
        return je.default;
    }
}), Object.defineProperty(exports, "abs", {
    enumerable: !0,
    get: function() {
        return qe.default;
    }
}), Object.defineProperty(exports, "acos", {
    enumerable: !0,
    get: function() {
        return Ee.default;
    }
}), Object.defineProperty(exports, "acosh", {
    enumerable: !0,
    get: function() {
        return he.default;
    }
}), Object.defineProperty(exports, "asin", {
    enumerable: !0,
    get: function() {
        return Re.default;
    }
}), Object.defineProperty(exports, "asinh", {
    enumerable: !0,
    get: function() {
        return _e.default;
    }
}), Object.defineProperty(exports, "atan", {
    enumerable: !0,
    get: function() {
        return ve.default;
    }
}), Object.defineProperty(exports, "atan2", {
    enumerable: !0,
    get: function() {
        return De.default;
    }
}), Object.defineProperty(exports, "atanh", {
    enumerable: !0,
    get: function() {
        return Ge.default;
    }
}), Object.defineProperty(exports, "cbrt", {
    enumerable: !0,
    get: function() {
        return Le.default;
    }
}), Object.defineProperty(exports, "ceil", {
    enumerable: !0,
    get: function() {
        return Ae.default;
    }
}), Object.defineProperty(exports, "clz32", {
    enumerable: !0,
    get: function() {
        return Ne.default;
    }
}), Object.defineProperty(exports, "cos", {
    enumerable: !0,
    get: function() {
        return Qe.default;
    }
}), Object.defineProperty(exports, "cosh", {
    enumerable: !0,
    get: function() {
        return Se.default;
    }
}), Object.defineProperty(exports, "exp", {
    enumerable: !0,
    get: function() {
        return Te.default;
    }
}), Object.defineProperty(exports, "expm1", {
    enumerable: !0,
    get: function() {
        return we.default;
    }
}), Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function() {
        return ze.default;
    }
}), Object.defineProperty(exports, "floor", {
    enumerable: !0,
    get: function() {
        return Ie.default;
    }
}), Object.defineProperty(exports, "fround", {
    enumerable: !0,
    get: function() {
        return Me.default;
    }
}), Object.defineProperty(exports, "hypot", {
    enumerable: !0,
    get: function() {
        return ke.default;
    }
}), Object.defineProperty(exports, "imul", {
    enumerable: !0,
    get: function() {
        return Be.default;
    }
}), Object.defineProperty(exports, "log", {
    enumerable: !0,
    get: function() {
        return Ce.default;
    }
}), Object.defineProperty(exports, "log10", {
    enumerable: !0,
    get: function() {
        return Fe.default;
    }
}), Object.defineProperty(exports, "log1p", {
    enumerable: !0,
    get: function() {
        return He.default;
    }
}), Object.defineProperty(exports, "log2", {
    enumerable: !0,
    get: function() {
        return Je.default;
    }
}), Object.defineProperty(exports, "LN10", {
    enumerable: !0,
    get: function() {
        return Ke.default;
    }
}), Object.defineProperty(exports, "LN2", {
    enumerable: !0,
    get: function() {
        return Ue.default;
    }
}), Object.defineProperty(exports, "LOG10E", {
    enumerable: !0,
    get: function() {
        return Ve.default;
    }
}), Object.defineProperty(exports, "LOG2E", {
    enumerable: !0,
    get: function() {
        return We.default;
    }
}), Object.defineProperty(exports, "max", {
    enumerable: !0,
    get: function() {
        return Xe.default;
    }
}), Object.defineProperty(exports, "min", {
    enumerable: !0,
    get: function() {
        return Ye.default;
    }
}), Object.defineProperty(exports, "pow", {
    enumerable: !0,
    get: function() {
        return Ze.default;
    }
}), Object.defineProperty(exports, "PI", {
    enumerable: !0,
    get: function() {
        return $e.default;
    }
}), Object.defineProperty(exports, "random", {
    enumerable: !0,
    get: function() {
        return er.default;
    }
}), Object.defineProperty(exports, "round", {
    enumerable: !0,
    get: function() {
        return rr.default;
    }
}), Object.defineProperty(exports, "sign", {
    enumerable: !0,
    get: function() {
        return tr.default;
    }
}), Object.defineProperty(exports, "sin", {
    enumerable: !0,
    get: function() {
        return nr.default;
    }
}), Object.defineProperty(exports, "sinh", {
    enumerable: !0,
    get: function() {
        return ur.default;
    }
}), Object.defineProperty(exports, "sqrt", {
    enumerable: !0,
    get: function() {
        return ar.default;
    }
}), Object.defineProperty(exports, "SQRT1_2", {
    enumerable: !0,
    get: function() {
        return or.default;
    }
}), Object.defineProperty(exports, "SQRT2", {
    enumerable: !0,
    get: function() {
        return ir.default;
    }
}), Object.defineProperty(exports, "tan", {
    enumerable: !0,
    get: function() {
        return fr.default;
    }
}), Object.defineProperty(exports, "tanh", {
    enumerable: !0,
    get: function() {
        return cr.default;
    }
}), Object.defineProperty(exports, "trunc", {
    enumerable: !0,
    get: function() {
        return lr.default;
    }
});
