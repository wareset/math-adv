/* eslint-disable */
/*
dester builds:
ecma/index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./abs"), r = require("./acos"), t = require("./acosh"), n = require("./asin"), u = require("./asinh"), o = require("./atan"), i = require("./atan2"), f = require("./atanh"), a = require("./cbrt"), l = require("./ceil"), c = require("./clz32"), p = require("./cos"), d = require("./cosh"), b = require("./exp"), s = require("./expm1"), g = require("./E"), m = require("./floor"), x = require("./fround"), O = require("./hypot"), y = require("./imul"), P = require("./log"), j = require("./log10"), q = require("./log1p"), h = require("./log2"), L = require("./LN10"), E = require("./LN2"), G = require("./LOG10E"), N = require("./LOG2E"), Q = require("./max"), R = require("./min"), S = require("./pow"), T = require("./PI"), _ = require("./random"), v = require("./round"), w = require("./sign"), z = require("./sin"), I = require("./sinh"), M = require("./sqrt"), k = require("./SQRT1_2"), A = require("./SQRT2"), B = require("./tan"), C = require("./tanh"), D = require("./trunc");

function F(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}

var H = F(e), J = F(r), K = F(t), U = F(n), V = F(u), W = F(o), X = F(i), Y = F(f), Z = F(a), $ = F(l), ee = F(c), re = F(p), te = F(d), ne = F(b), ue = F(s), oe = F(g), ie = F(m), fe = F(x), ae = F(O), le = F(y), ce = F(P), pe = F(j), de = F(q), be = F(h), se = F(L), ge = F(E), me = F(G), xe = F(N), Oe = F(Q), ye = F(R), Pe = F(S), je = F(T), qe = F(_), he = F(v), Le = F(w), Ee = F(z), Ge = F(I), Ne = F(M), Qe = F(k), Re = F(A), Se = F(B), Te = F(C), _e = F(D);

Object.defineProperty(exports, "abs", {
    enumerable: !0,
    get: function() {
        return H.default;
    }
}), Object.defineProperty(exports, "acos", {
    enumerable: !0,
    get: function() {
        return J.default;
    }
}), Object.defineProperty(exports, "acosh", {
    enumerable: !0,
    get: function() {
        return K.default;
    }
}), Object.defineProperty(exports, "asin", {
    enumerable: !0,
    get: function() {
        return U.default;
    }
}), Object.defineProperty(exports, "asinh", {
    enumerable: !0,
    get: function() {
        return V.default;
    }
}), Object.defineProperty(exports, "atan", {
    enumerable: !0,
    get: function() {
        return W.default;
    }
}), Object.defineProperty(exports, "atan2", {
    enumerable: !0,
    get: function() {
        return X.default;
    }
}), Object.defineProperty(exports, "atanh", {
    enumerable: !0,
    get: function() {
        return Y.default;
    }
}), Object.defineProperty(exports, "cbrt", {
    enumerable: !0,
    get: function() {
        return Z.default;
    }
}), Object.defineProperty(exports, "ceil", {
    enumerable: !0,
    get: function() {
        return $.default;
    }
}), Object.defineProperty(exports, "clz32", {
    enumerable: !0,
    get: function() {
        return ee.default;
    }
}), Object.defineProperty(exports, "cos", {
    enumerable: !0,
    get: function() {
        return re.default;
    }
}), Object.defineProperty(exports, "cosh", {
    enumerable: !0,
    get: function() {
        return te.default;
    }
}), Object.defineProperty(exports, "exp", {
    enumerable: !0,
    get: function() {
        return ne.default;
    }
}), Object.defineProperty(exports, "expm1", {
    enumerable: !0,
    get: function() {
        return ue.default;
    }
}), Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function() {
        return oe.default;
    }
}), Object.defineProperty(exports, "floor", {
    enumerable: !0,
    get: function() {
        return ie.default;
    }
}), Object.defineProperty(exports, "fround", {
    enumerable: !0,
    get: function() {
        return fe.default;
    }
}), Object.defineProperty(exports, "hypot", {
    enumerable: !0,
    get: function() {
        return ae.default;
    }
}), Object.defineProperty(exports, "imul", {
    enumerable: !0,
    get: function() {
        return le.default;
    }
}), Object.defineProperty(exports, "log", {
    enumerable: !0,
    get: function() {
        return ce.default;
    }
}), Object.defineProperty(exports, "log10", {
    enumerable: !0,
    get: function() {
        return pe.default;
    }
}), Object.defineProperty(exports, "log1p", {
    enumerable: !0,
    get: function() {
        return de.default;
    }
}), Object.defineProperty(exports, "log2", {
    enumerable: !0,
    get: function() {
        return be.default;
    }
}), Object.defineProperty(exports, "LN10", {
    enumerable: !0,
    get: function() {
        return se.default;
    }
}), Object.defineProperty(exports, "LN2", {
    enumerable: !0,
    get: function() {
        return ge.default;
    }
}), Object.defineProperty(exports, "LOG10E", {
    enumerable: !0,
    get: function() {
        return me.default;
    }
}), Object.defineProperty(exports, "LOG2E", {
    enumerable: !0,
    get: function() {
        return xe.default;
    }
}), Object.defineProperty(exports, "max", {
    enumerable: !0,
    get: function() {
        return Oe.default;
    }
}), Object.defineProperty(exports, "min", {
    enumerable: !0,
    get: function() {
        return ye.default;
    }
}), Object.defineProperty(exports, "pow", {
    enumerable: !0,
    get: function() {
        return Pe.default;
    }
}), Object.defineProperty(exports, "PI", {
    enumerable: !0,
    get: function() {
        return je.default;
    }
}), Object.defineProperty(exports, "random", {
    enumerable: !0,
    get: function() {
        return qe.default;
    }
}), Object.defineProperty(exports, "round", {
    enumerable: !0,
    get: function() {
        return he.default;
    }
}), Object.defineProperty(exports, "sign", {
    enumerable: !0,
    get: function() {
        return Le.default;
    }
}), Object.defineProperty(exports, "sin", {
    enumerable: !0,
    get: function() {
        return Ee.default;
    }
}), Object.defineProperty(exports, "sinh", {
    enumerable: !0,
    get: function() {
        return Ge.default;
    }
}), Object.defineProperty(exports, "sqrt", {
    enumerable: !0,
    get: function() {
        return Ne.default;
    }
}), Object.defineProperty(exports, "SQRT1_2", {
    enumerable: !0,
    get: function() {
        return Qe.default;
    }
}), Object.defineProperty(exports, "SQRT2", {
    enumerable: !0,
    get: function() {
        return Re.default;
    }
}), Object.defineProperty(exports, "tan", {
    enumerable: !0,
    get: function() {
        return Se.default;
    }
}), Object.defineProperty(exports, "tanh", {
    enumerable: !0,
    get: function() {
        return Te.default;
    }
}), Object.defineProperty(exports, "trunc", {
    enumerable: !0,
    get: function() {
        return _e.default;
    }
});
