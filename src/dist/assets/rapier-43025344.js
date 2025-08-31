let Ht, le, he, Re, cr, or, Ae, mr, ut, oe, T, wr, ze, Mt, ve, Te, _r, fr, Ql, ot, Ye, er, dr, Me, Z, tr, Ke, ar, nt, z, br, et, se, $, sr, lr, pr, _t, bt, xe, Ze, rr, ne, ae, ur, $l, ft, qt, yt, $e, nr, ie, B, Xe, G, g, Fe, Tt, Ce, He, Ie, je, ce, F, gt, st, ct, S, de, Qe, ir, yr, hr, Pe, Ee, ge, Se, Ue, h, Vt, eh, th;
let __tla = (async () => {
  const Sr = "" + new URL("rapier_wasm3d_bg-6982ba4b.wasm", import.meta.url).href, Rr = async (o = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function")
        n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const s = atob(r);
        n = new Uint8Array(s.length);
        for (let a = 0; a < s.length; a++)
          n[a] = s.charCodeAt(a);
      } else
        throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(n, o);
    } else {
      const r = await fetch(t), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm"))
        e = await WebAssembly.instantiateStreaming(r, o);
      else {
        const s = await r.arrayBuffer();
        e = await WebAssembly.instantiate(s, o);
      }
    }
    return e.instance.exports;
  }, C = new Array(32).fill(void 0);
  C.push(void 0, null, true, false);
  function A(o) {
    return C[o];
  }
  let lt = C.length;
  function vr(o) {
    o < 36 || (C[o] = lt, lt = o);
  }
  function Ct(o) {
    const t = A(o);
    return vr(o), t;
  }
  function H(o) {
    lt === C.length && C.push(C.length + 1);
    const t = lt;
    return lt = C[t], C[t] = o, t;
  }
  function f(o) {
    return o == null;
  }
  let $t = new Float64Array();
  function At() {
    return $t.byteLength === 0 && ($t = new Float64Array(at.buffer)), $t;
  }
  let Qt = new Int32Array();
  function j() {
    return Qt.byteLength === 0 && (Qt = new Int32Array(at.buffer)), Qt;
  }
  const Cr = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Le = new Cr("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Le.decode();
  let te = new Uint8Array();
  function Ar() {
    return te.byteLength === 0 && (te = new Uint8Array(at.buffer)), te;
  }
  function Ge(o, t) {
    return Le.decode(Ar().subarray(o, o + t));
  }
  function jr() {
    try {
      const e = v(-16);
      Yr(e);
      var o = j()[e / 4 + 0], t = j()[e / 4 + 1];
      return Ge(o, t);
    } finally {
      v(16), vt(o, t);
    }
  }
  function c(o, t) {
    if (!(o instanceof t))
      throw new Error(`expected instance of ${t.name}`);
    return o.ptr;
  }
  let ee = new Float32Array();
  function X() {
    return ee.byteLength === 0 && (ee = new Float32Array(at.buffer)), ee;
  }
  let E = 32;
  function x(o) {
    if (E == 1)
      throw new Error("out of js stack");
    return C[--E] = o, E;
  }
  function De(o, t) {
    return X().subarray(o / 4, o / 4 + t);
  }
  let re = new Uint32Array();
  function Be() {
    return re.byteLength === 0 && (re = new Uint32Array(at.buffer)), re;
  }
  function Er(o, t) {
    return Be().subarray(o / 4, o / 4 + t);
  }
  let k = 0;
  function tt(o, t) {
    const e = t(o.length * 4);
    return X().set(o, e / 4), k = o.length, e;
  }
  function Rt(o, t) {
    const e = t(o.length * 4);
    return Be().set(o, e / 4), k = o.length, e;
  }
  function we(o, t) {
    try {
      return o.apply(this, t);
    } catch (e) {
      Zl(H(e));
    }
  }
  const zt = Object.freeze({
    X: 0,
    0: "X",
    Y: 1,
    1: "Y",
    Z: 2,
    2: "Z",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ"
  });
  class K {
    static __wrap(t) {
      const e = Object.create(K.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      $s(t);
    }
    constructor() {
      const t = Qs();
      return K.__wrap(t);
    }
  }
  class it {
    static __wrap(t) {
      const e = Object.create(it.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      xn(t);
    }
    constructor() {
      const t = Pn();
      return it.__wrap(t);
    }
  }
  class ht {
    static __wrap(t) {
      const e = Object.create(ht.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      vn(t);
    }
    constructor() {
      const t = Cn();
      return ht.__wrap(t);
    }
    handle() {
      return mt(this.ptr);
    }
    translationApplied() {
      const t = An(this.ptr);
      return d.__wrap(t);
    }
    translationRemaining() {
      const t = jn(this.ptr);
      return d.__wrap(t);
    }
    toi() {
      return rt(this.ptr);
    }
    worldWitness1() {
      const t = Bt(this.ptr);
      return d.__wrap(t);
    }
    worldWitness2() {
      const t = En(this.ptr);
      return d.__wrap(t);
    }
    worldNormal1() {
      const t = ye(this.ptr);
      return d.__wrap(t);
    }
    worldNormal2() {
      const t = In(this.ptr);
      return d.__wrap(t);
    }
  }
  class P {
    static __wrap(t) {
      const e = Object.create(P.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      da(t);
    }
    coTranslation(t) {
      const e = to(this.ptr, t);
      return d.__wrap(e);
    }
    coRotation(t) {
      const e = eo(this.ptr, t);
      return R.__wrap(e);
    }
    coSetTranslation(t, e, r, n) {
      ro(this.ptr, t, e, r, n);
    }
    coSetTranslationWrtParent(t, e, r, n) {
      no(this.ptr, t, e, r, n);
    }
    coSetRotation(t, e, r, n, s) {
      io(this.ptr, t, e, r, n, s);
    }
    coSetRotationWrtParent(t, e, r, n, s) {
      so(this.ptr, t, e, r, n, s);
    }
    coIsSensor(t) {
      return oo(this.ptr, t) !== 0;
    }
    coShapeType(t) {
      return ao(this.ptr, t) >>> 0;
    }
    coHalfspaceNormal(t) {
      const e = co(this.ptr, t);
      return e === 0 ? void 0 : d.__wrap(e);
    }
    coHalfExtents(t) {
      const e = lo(this.ptr, t);
      return e === 0 ? void 0 : d.__wrap(e);
    }
    coSetHalfExtents(t, e) {
      c(e, d), ho(this.ptr, t, e.ptr);
    }
    coRadius(t) {
      try {
        const n = v(-16);
        wo(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = X()[n / 4 + 1];
        return e === 0 ? void 0 : r;
      } finally {
        v(16);
      }
    }
    coSetRadius(t, e) {
      po(this.ptr, t, e);
    }
    coHalfHeight(t) {
      try {
        const n = v(-16);
        uo(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = X()[n / 4 + 1];
        return e === 0 ? void 0 : r;
      } finally {
        v(16);
      }
    }
    coSetHalfHeight(t, e) {
      _o(this.ptr, t, e);
    }
    coRoundRadius(t) {
      try {
        const n = v(-16);
        fo(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = X()[n / 4 + 1];
        return e === 0 ? void 0 : r;
      } finally {
        v(16);
      }
    }
    coSetRoundRadius(t, e) {
      mo(this.ptr, t, e);
    }
    coVertices(t) {
      try {
        const n = v(-16);
        bo(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = j()[n / 4 + 1];
        let s;
        return e !== 0 && (s = De(e, r).slice(), vt(e, r * 4)), s;
      } finally {
        v(16);
      }
    }
    coIndices(t) {
      try {
        const n = v(-16);
        yo(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = j()[n / 4 + 1];
        let s;
        return e !== 0 && (s = Er(e, r).slice(), vt(e, r * 4)), s;
      } finally {
        v(16);
      }
    }
    coHeightfieldHeights(t) {
      try {
        const n = v(-16);
        go(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = j()[n / 4 + 1];
        let s;
        return e !== 0 && (s = De(e, r).slice(), vt(e, r * 4)), s;
      } finally {
        v(16);
      }
    }
    coHeightfieldScale(t) {
      const e = So(this.ptr, t);
      return e === 0 ? void 0 : d.__wrap(e);
    }
    coHeightfieldNRows(t) {
      try {
        const n = v(-16);
        Ro(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = j()[n / 4 + 1];
        return e === 0 ? void 0 : r >>> 0;
      } finally {
        v(16);
      }
    }
    coHeightfieldNCols(t) {
      try {
        const n = v(-16);
        vo(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = j()[n / 4 + 1];
        return e === 0 ? void 0 : r >>> 0;
      } finally {
        v(16);
      }
    }
    coParent(t) {
      try {
        const n = v(-16);
        Co(n, this.ptr, t);
        var e = j()[n / 4 + 0], r = At()[n / 8 + 1];
        return e === 0 ? void 0 : r;
      } finally {
        v(16);
      }
    }
    coSetEnabled(t, e) {
      Ao(this.ptr, t, e);
    }
    coIsEnabled(t) {
      return jo(this.ptr, t) !== 0;
    }
    coFriction(t) {
      return Eo(this.ptr, t);
    }
    coRestitution(t) {
      return Io(this.ptr, t);
    }
    coDensity(t) {
      return xo(this.ptr, t);
    }
    coMass(t) {
      return Po(this.ptr, t);
    }
    coVolume(t) {
      return Mo(this.ptr, t);
    }
    coCollisionGroups(t) {
      return To(this.ptr, t) >>> 0;
    }
    coSolverGroups(t) {
      return Ho(this.ptr, t) >>> 0;
    }
    coActiveHooks(t) {
      return zo(this.ptr, t) >>> 0;
    }
    coActiveCollisionTypes(t) {
      return Fo(this.ptr, t);
    }
    coActiveEvents(t) {
      return ko(this.ptr, t) >>> 0;
    }
    coContactForceEventThreshold(t) {
      return Do(this.ptr, t);
    }
    coContainsPoint(t, e) {
      return c(e, d), No(this.ptr, t, e.ptr) !== 0;
    }
    coCastShape(t, e, r, n, s, a, l, w) {
      c(e, d), c(r, b), c(n, d), c(s, R), c(a, d);
      const p = Lo(this.ptr, t, e.ptr, r.ptr, n.ptr, s.ptr, a.ptr, l, w);
      return p === 0 ? void 0 : Lt.__wrap(p);
    }
    coCastCollider(t, e, r, n, s, a) {
      c(e, d), c(n, d);
      const l = Go(this.ptr, t, e.ptr, r, n.ptr, s, a);
      return l === 0 ? void 0 : Nt.__wrap(l);
    }
    coIntersectsShape(t, e, r, n) {
      return c(e, b), c(r, d), c(n, R), Bo(this.ptr, t, e.ptr, r.ptr, n.ptr) !== 0;
    }
    coContactShape(t, e, r, n, s) {
      c(e, b), c(r, d), c(n, R);
      const a = Wo(this.ptr, t, e.ptr, r.ptr, n.ptr, s);
      return a === 0 ? void 0 : pt.__wrap(a);
    }
    coContactCollider(t, e, r) {
      const n = Oo(this.ptr, t, e, r);
      return n === 0 ? void 0 : pt.__wrap(n);
    }
    coProjectPoint(t, e, r) {
      c(e, d);
      const n = qo(this.ptr, t, e.ptr, r);
      return Ft.__wrap(n);
    }
    coIntersectsRay(t, e, r, n) {
      return c(e, d), c(r, d), Vo(this.ptr, t, e.ptr, r.ptr, n) !== 0;
    }
    coCastRay(t, e, r, n, s) {
      return c(e, d), c(r, d), Jo(this.ptr, t, e.ptr, r.ptr, n, s);
    }
    coCastRayAndGetNormal(t, e, r, n, s) {
      c(e, d), c(r, d);
      const a = Uo(this.ptr, t, e.ptr, r.ptr, n, s);
      return a === 0 ? void 0 : Dt.__wrap(a);
    }
    coSetSensor(t, e) {
      Xo(this.ptr, t, e);
    }
    coSetRestitution(t, e) {
      Ko(this.ptr, t, e);
    }
    coSetFriction(t, e) {
      Yo(this.ptr, t, e);
    }
    coFrictionCombineRule(t) {
      return Zo(this.ptr, t) >>> 0;
    }
    coSetFrictionCombineRule(t, e) {
      $o(this.ptr, t, e);
    }
    coRestitutionCombineRule(t) {
      return Qo(this.ptr, t) >>> 0;
    }
    coSetRestitutionCombineRule(t, e) {
      ta(this.ptr, t, e);
    }
    coSetCollisionGroups(t, e) {
      ea(this.ptr, t, e);
    }
    coSetSolverGroups(t, e) {
      ra(this.ptr, t, e);
    }
    coSetActiveHooks(t, e) {
      na(this.ptr, t, e);
    }
    coSetActiveEvents(t, e) {
      ia(this.ptr, t, e);
    }
    coSetActiveCollisionTypes(t, e) {
      sa(this.ptr, t, e);
    }
    coSetShape(t, e) {
      c(e, b), oa(this.ptr, t, e.ptr);
    }
    coSetContactForceEventThreshold(t, e) {
      aa(this.ptr, t, e);
    }
    coSetDensity(t, e) {
      ca(this.ptr, t, e);
    }
    coSetMass(t, e) {
      la(this.ptr, t, e);
    }
    coSetMassProperties(t, e, r, n, s) {
      c(r, d), c(n, d), c(s, R), ha(this.ptr, t, e, r.ptr, n.ptr, s.ptr);
    }
    constructor() {
      const t = wa();
      return P.__wrap(t);
    }
    len() {
      return pa(this.ptr) >>> 0;
    }
    contains(t) {
      return Ne(this.ptr, t) !== 0;
    }
    createCollider(t, e, r, n, s, a, l, w, p, u, _, m, y, I, N, V, J, Q, Jt, Ut, Xt, Kt, Yt, St) {
      try {
        const Zt = v(-16);
        c(e, b), c(r, d), c(n, R), c(l, d), c(w, d), c(p, R), c(St, M), ua(Zt, this.ptr, t, e.ptr, r.ptr, n.ptr, s, a, l.ptr, w.ptr, p.ptr, u, _, m, y, I, N, V, J, Q, Jt, Ut, Xt, Kt, Yt, St.ptr);
        var ke = j()[Zt / 4 + 0], gr = At()[Zt / 8 + 1];
        return ke === 0 ? void 0 : gr;
      } finally {
        v(16);
      }
    }
    remove(t, e, r, n) {
      c(e, O), c(r, M), _a(this.ptr, t, e.ptr, r.ptr, n);
    }
    isHandleValid(t) {
      return Ne(this.ptr, t) !== 0;
    }
    forEachColliderHandle(t) {
      try {
        fa(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
  }
  class pe {
    static __wrap(t) {
      const e = Object.create(pe.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      al(t);
    }
    collider1() {
      return mt(this.ptr);
    }
    collider2() {
      return cl(this.ptr);
    }
    total_force() {
      const t = Je(this.ptr);
      return d.__wrap(t);
    }
    total_force_magnitude() {
      return ll(this.ptr);
    }
    max_force_direction() {
      const t = hl(this.ptr);
      return d.__wrap(t);
    }
    max_force_magnitude() {
      return dl(this.ptr);
    }
  }
  class ue {
    static __wrap(t) {
      const e = Object.create(ue.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Aa(t);
    }
    normal() {
      const t = Pa(this.ptr);
      return d.__wrap(t);
    }
    local_n1() {
      const t = Ma(this.ptr);
      return d.__wrap(t);
    }
    local_n2() {
      const t = Ta(this.ptr);
      return d.__wrap(t);
    }
    subshape1() {
      return Ha(this.ptr) >>> 0;
    }
    subshape2() {
      return za(this.ptr) >>> 0;
    }
    num_contacts() {
      return Fa(this.ptr) >>> 0;
    }
    contact_local_p1(t) {
      const e = ka(this.ptr, t);
      return e === 0 ? void 0 : d.__wrap(e);
    }
    contact_local_p2(t) {
      const e = Da(this.ptr, t);
      return e === 0 ? void 0 : d.__wrap(e);
    }
    contact_dist(t) {
      return Na(this.ptr, t);
    }
    contact_fid1(t) {
      return La(this.ptr, t) >>> 0;
    }
    contact_fid2(t) {
      return Ga(this.ptr, t) >>> 0;
    }
    contact_impulse(t) {
      return Ba(this.ptr, t);
    }
    contact_tangent_impulse_x(t) {
      return Wa(this.ptr, t);
    }
    contact_tangent_impulse_y(t) {
      return Oa(this.ptr, t);
    }
    num_solver_contacts() {
      return qa(this.ptr) >>> 0;
    }
    solver_contact_point(t) {
      const e = Va(this.ptr, t);
      return e === 0 ? void 0 : d.__wrap(e);
    }
    solver_contact_dist(t) {
      return Ja(this.ptr, t);
    }
    solver_contact_friction(t) {
      return Ua(this.ptr, t);
    }
    solver_contact_restitution(t) {
      return Xa(this.ptr, t);
    }
    solver_contact_tangent_velocity(t) {
      const e = Ka(this.ptr, t);
      return d.__wrap(e);
    }
  }
  class _e {
    static __wrap(t) {
      const e = Object.create(_e.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Vl(t);
    }
    collider1() {
      return ja(this.ptr);
    }
    collider2() {
      return Ea(this.ptr);
    }
    numContactManifolds() {
      return Ia(this.ptr) >>> 0;
    }
    contactManifold(t) {
      const e = xa(this.ptr, t);
      return e === 0 ? void 0 : ue.__wrap(e);
    }
  }
  class jt {
    static __wrap(t) {
      const e = Object.create(jt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      el(t);
    }
    constructor() {
      const t = rl();
      return jt.__wrap(t);
    }
    vertices() {
      const t = nl(this.ptr);
      return Ct(t);
    }
    colors() {
      const t = il(this.ptr);
      return Ct(t);
    }
    render(t, e, r, n, s) {
      c(t, M), c(e, P), c(r, W), c(n, q), c(s, U), sl(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr);
    }
  }
  class fe {
    static __wrap(t) {
      const e = Object.create(fe.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Hl(t);
    }
    takeGravity() {
      const t = zl(this.ptr);
      return t === 0 ? void 0 : d.__wrap(t);
    }
    takeIntegrationParameters() {
      const t = Fl(this.ptr);
      return t === 0 ? void 0 : Y.__wrap(t);
    }
    takeIslandManager() {
      const t = kl(this.ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    takeBroadPhase() {
      const t = Dl(this.ptr);
      return t === 0 ? void 0 : K.__wrap(t);
    }
    takeNarrowPhase() {
      const t = Nl(this.ptr);
      return t === 0 ? void 0 : U.__wrap(t);
    }
    takeBodies() {
      const t = Ll(this.ptr);
      return t === 0 ? void 0 : M.__wrap(t);
    }
    takeColliders() {
      const t = Gl(this.ptr);
      return t === 0 ? void 0 : P.__wrap(t);
    }
    takeImpulseJoints() {
      const t = Bl(this.ptr);
      return t === 0 ? void 0 : W.__wrap(t);
    }
    takeMultibodyJoints() {
      const t = Wl(this.ptr);
      return t === 0 ? void 0 : q.__wrap(t);
    }
  }
  class dt {
    static __wrap(t) {
      const e = Object.create(dt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ol(t);
    }
    constructor(t) {
      const e = wl(t);
      return dt.__wrap(e);
    }
    drainCollisionEvents(t) {
      try {
        pl(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
    drainContactForceEvents(t) {
      try {
        ul(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
    clear() {
      _l(this.ptr);
    }
  }
  class D {
    static __wrap(t) {
      const e = Object.create(D.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      vi(t);
    }
    static spherical(t, e) {
      c(t, d), c(e, d);
      const r = Ci(t.ptr, e.ptr);
      return D.__wrap(r);
    }
    static prismatic(t, e, r, n, s, a) {
      c(t, d), c(e, d), c(r, d);
      const l = Ai(t.ptr, e.ptr, r.ptr, n, s, a);
      return l === 0 ? void 0 : D.__wrap(l);
    }
    static fixed(t, e, r, n) {
      c(t, d), c(e, R), c(r, d), c(n, R);
      const s = ji(t.ptr, e.ptr, r.ptr, n.ptr);
      return D.__wrap(s);
    }
    static revolute(t, e, r) {
      c(t, d), c(e, d), c(r, d);
      const n = Ei(t.ptr, e.ptr, r.ptr);
      return n === 0 ? void 0 : D.__wrap(n);
    }
  }
  class W {
    static __wrap(t) {
      const e = Object.create(W.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Yn(t);
    }
    jointType(t) {
      return Mn(this.ptr, t) >>> 0;
    }
    jointBodyHandle1(t) {
      return Tn(this.ptr, t);
    }
    jointBodyHandle2(t) {
      return Hn(this.ptr, t);
    }
    jointFrameX1(t) {
      const e = zn(this.ptr, t);
      return R.__wrap(e);
    }
    jointFrameX2(t) {
      const e = Fn(this.ptr, t);
      return R.__wrap(e);
    }
    jointAnchor1(t) {
      const e = kn(this.ptr, t);
      return d.__wrap(e);
    }
    jointAnchor2(t) {
      const e = Dn(this.ptr, t);
      return d.__wrap(e);
    }
    jointSetAnchor1(t, e) {
      c(e, d), Nn(this.ptr, t, e.ptr);
    }
    jointSetAnchor2(t, e) {
      c(e, d), Ln(this.ptr, t, e.ptr);
    }
    jointContactsEnabled(t) {
      return Gn(this.ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      Bn(this.ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return Wn(this.ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return On(this.ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return qn(this.ptr, t, e);
    }
    jointSetLimits(t, e, r, n) {
      Vn(this.ptr, t, e, r, n);
    }
    jointConfigureMotorModel(t, e, r) {
      Jn(this.ptr, t, e, r);
    }
    jointConfigureMotorVelocity(t, e, r, n) {
      Un(this.ptr, t, e, r, n);
    }
    jointConfigureMotorPosition(t, e, r, n, s) {
      Xn(this.ptr, t, e, r, n, s);
    }
    jointConfigureMotor(t, e, r, n, s, a) {
      Kn(this.ptr, t, e, r, n, s, a);
    }
    constructor() {
      const t = Zn();
      return W.__wrap(t);
    }
    createJoint(t, e, r, n) {
      return c(t, D), $n(this.ptr, t.ptr, e, r, n);
    }
    remove(t, e) {
      Qn(this.ptr, t, e);
    }
    len() {
      return ti(this.ptr) >>> 0;
    }
    contains(t) {
      return ei(this.ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        ri(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        ni(this.ptr, t, x(e));
      } finally {
        C[E++] = void 0;
      }
    }
  }
  class Y {
    static __wrap(t) {
      const e = Object.create(Y.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ii(t);
    }
    constructor() {
      const t = si();
      return Y.__wrap(t);
    }
    get dt() {
      return Wt(this.ptr);
    }
    get erp() {
      return rt(this.ptr);
    }
    get allowedLinearError() {
      return oi(this.ptr);
    }
    get predictionDistance() {
      return ai(this.ptr);
    }
    get maxVelocityIterations() {
      return ci(this.ptr) >>> 0;
    }
    get maxVelocityFrictionIterations() {
      return li(this.ptr) >>> 0;
    }
    get maxStabilizationIterations() {
      return hi(this.ptr) >>> 0;
    }
    get minIslandSize() {
      return di(this.ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return wi(this.ptr) >>> 0;
    }
    set dt(t) {
      We(this.ptr, t);
    }
    set erp(t) {
      Oe(this.ptr, t);
    }
    set allowedLinearError(t) {
      pi(this.ptr, t);
    }
    set predictionDistance(t) {
      ui(this.ptr, t);
    }
    set maxVelocityIterations(t) {
      _i(this.ptr, t);
    }
    set maxVelocityFrictionIterations(t) {
      fi(this.ptr, t);
    }
    set maxStabilizationIterations(t) {
      mi(this.ptr, t);
    }
    set minIslandSize(t) {
      bi(this.ptr, t);
    }
    set maxCcdSubsteps(t) {
      yi(this.ptr, t);
    }
  }
  class O {
    static __wrap(t) {
      const e = Object.create(O.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      gi(t);
    }
    constructor() {
      const t = Si();
      return O.__wrap(t);
    }
    forEachActiveRigidBodyHandle(t) {
      try {
        Ri(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
  }
  class Et {
    static __wrap(t) {
      const e = Object.create(Et.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Zr(t);
    }
    constructor(t) {
      const e = $r(t);
      return Et.__wrap(e);
    }
    up() {
      const t = Qr(this.ptr);
      return d.__wrap(t);
    }
    setUp(t) {
      c(t, d), tn(this.ptr, t.ptr);
    }
    offset() {
      return en(this.ptr);
    }
    setOffset(t) {
      rn(this.ptr, t);
    }
    slideEnabled() {
      return nn(this.ptr) !== 0;
    }
    setSlideEnabled(t) {
      sn(this.ptr, t);
    }
    autostepMaxHeight() {
      try {
        const r = v(-16);
        on(r, this.ptr);
        var t = j()[r / 4 + 0], e = X()[r / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        v(16);
      }
    }
    autostepMinWidth() {
      try {
        const r = v(-16);
        an(r, this.ptr);
        var t = j()[r / 4 + 0], e = X()[r / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        v(16);
      }
    }
    autostepIncludesDynamicBodies() {
      const t = cn(this.ptr);
      return t === 16777215 ? void 0 : t !== 0;
    }
    autostepEnabled() {
      return ln(this.ptr) !== 0;
    }
    enableAutostep(t, e, r) {
      hn(this.ptr, t, e, r);
    }
    disableAutostep() {
      dn(this.ptr);
    }
    maxSlopeClimbAngle() {
      return wn(this.ptr);
    }
    setMaxSlopeClimbAngle(t) {
      pn(this.ptr, t);
    }
    minSlopeSlideAngle() {
      return un(this.ptr);
    }
    setMinSlopeSlideAngle(t) {
      _n(this.ptr, t);
    }
    snapToGroundDistance() {
      try {
        const r = v(-16);
        fn(r, this.ptr);
        var t = j()[r / 4 + 0], e = X()[r / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        v(16);
      }
    }
    enableSnapToGround(t) {
      mn(this.ptr, t);
    }
    disableSnapToGround() {
      bn(this.ptr);
    }
    snapToGroundEnabled() {
      return yn(this.ptr) !== 0;
    }
    computeColliderMovement(t, e, r, n, s, a, l, w, p, u, _) {
      try {
        c(e, M), c(r, P), c(n, wt), c(a, d), gn(this.ptr, t, e.ptr, r.ptr, n.ptr, s, a.ptr, l, !f(w), f(w) ? 0 : w, p, !f(u), f(u) ? 0 : u, x(_));
      } finally {
        C[E++] = void 0;
      }
    }
    computedMovement() {
      const t = Gt(this.ptr);
      return d.__wrap(t);
    }
    computedGrounded() {
      return be(this.ptr) !== 0;
    }
    numComputedCollisions() {
      return Sn(this.ptr) >>> 0;
    }
    computedCollision(t, e) {
      return c(e, ht), Rn(this.ptr, t, e.ptr) !== 0;
    }
  }
  class q {
    static __wrap(t) {
      const e = Object.create(q.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ni(t);
    }
    jointType(t) {
      return Ii(this.ptr, t) >>> 0;
    }
    jointFrameX1(t) {
      const e = xi(this.ptr, t);
      return R.__wrap(e);
    }
    jointFrameX2(t) {
      const e = Pi(this.ptr, t);
      return R.__wrap(e);
    }
    jointAnchor1(t) {
      const e = Mi(this.ptr, t);
      return d.__wrap(e);
    }
    jointAnchor2(t) {
      const e = Ti(this.ptr, t);
      return d.__wrap(e);
    }
    jointContactsEnabled(t) {
      return Hi(this.ptr, t) !== 0;
    }
    jointSetContactsEnabled(t, e) {
      zi(this.ptr, t, e);
    }
    jointLimitsEnabled(t, e) {
      return Fi(this.ptr, t, e) !== 0;
    }
    jointLimitsMin(t, e) {
      return ki(this.ptr, t, e);
    }
    jointLimitsMax(t, e) {
      return Di(this.ptr, t, e);
    }
    constructor() {
      const t = Li();
      return q.__wrap(t);
    }
    createJoint(t, e, r, n) {
      return c(t, D), Gi(this.ptr, t.ptr, e, r, n);
    }
    remove(t, e) {
      Bi(this.ptr, t, e);
    }
    contains(t) {
      return Wi(this.ptr, t) !== 0;
    }
    forEachJointHandle(t) {
      try {
        Oi(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(t, e) {
      try {
        qi(this.ptr, t, x(e));
      } finally {
        C[E++] = void 0;
      }
    }
  }
  class U {
    static __wrap(t) {
      const e = Object.create(U.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ya(t);
    }
    constructor() {
      const t = ga();
      return U.__wrap(t);
    }
    contacts_with(t, e) {
      Sa(this.ptr, t, H(e));
    }
    contact_pair(t, e) {
      const r = Ra(this.ptr, t, e);
      return r === 0 ? void 0 : _e.__wrap(r);
    }
    intersections_with(t, e) {
      va(this.ptr, t, H(e));
    }
    intersection_pair(t, e) {
      return Ca(this.ptr, t, e) !== 0;
    }
  }
  class It {
    static __wrap(t) {
      const e = Object.create(It.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      fl(t);
    }
    constructor() {
      const t = ml();
      return It.__wrap(t);
    }
    step(t, e, r, n, s, a, l, w, p, u) {
      c(t, d), c(e, Y), c(r, O), c(n, K), c(s, U), c(a, M), c(l, P), c(w, W), c(p, q), c(u, it), bl(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a.ptr, l.ptr, w.ptr, p.ptr, u.ptr);
    }
    stepWithEvents(t, e, r, n, s, a, l, w, p, u, _, m, y, I) {
      c(t, d), c(e, Y), c(r, O), c(n, K), c(s, U), c(a, M), c(l, P), c(w, W), c(p, q), c(u, it), c(_, dt), yl(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a.ptr, l.ptr, w.ptr, p.ptr, u.ptr, _.ptr, H(m), H(y), H(I));
    }
  }
  class xt {
    static __wrap(t) {
      const e = Object.create(xt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Za(t);
    }
    colliderHandle() {
      return $a(this.ptr);
    }
    point() {
      const t = Gt(this.ptr);
      return d.__wrap(t);
    }
    isInside() {
      return be(this.ptr) !== 0;
    }
    featureType() {
      return Qa(this.ptr) >>> 0;
    }
    featureId() {
      try {
        const r = v(-16);
        tc(r, this.ptr);
        var t = j()[r / 4 + 0], e = j()[r / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        v(16);
      }
    }
  }
  class Ft {
    static __wrap(t) {
      const e = Object.create(Ft.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ya(t);
    }
    point() {
      const t = Gt(this.ptr);
      return d.__wrap(t);
    }
    isInside() {
      return be(this.ptr) !== 0;
    }
  }
  class wt {
    static __wrap(t) {
      const e = Object.create(wt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      gl(t);
    }
    constructor() {
      const t = Sl();
      return wt.__wrap(t);
    }
    update(t, e) {
      c(t, M), c(e, P), Rl(this.ptr, t.ptr, e.ptr);
    }
    castRay(t, e, r, n, s, a, l, w, p, u, _) {
      try {
        c(t, M), c(e, P), c(r, d), c(n, d);
        const m = vl(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s, a, l, !f(w), f(w) ? 0 : w, !f(p), f(p) ? 0 : p, !f(u), f(u) ? 0 : u, x(_));
        return m === 0 ? void 0 : me.__wrap(m);
      } finally {
        C[E++] = void 0;
      }
    }
    castRayAndGetNormal(t, e, r, n, s, a, l, w, p, u, _) {
      try {
        c(t, M), c(e, P), c(r, d), c(n, d);
        const m = Cl(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s, a, l, !f(w), f(w) ? 0 : w, !f(p), f(p) ? 0 : p, !f(u), f(u) ? 0 : u, x(_));
        return m === 0 ? void 0 : kt.__wrap(m);
      } finally {
        C[E++] = void 0;
      }
    }
    intersectionsWithRay(t, e, r, n, s, a, l, w, p, u, _, m) {
      try {
        c(t, M), c(e, P), c(r, d), c(n, d), Al(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s, a, x(l), w, !f(p), f(p) ? 0 : p, !f(u), f(u) ? 0 : u, !f(_), f(_) ? 0 : _, x(m));
      } finally {
        C[E++] = void 0, C[E++] = void 0;
      }
    }
    intersectionWithShape(t, e, r, n, s, a, l, w, p, u) {
      try {
        const y = v(-16);
        c(t, M), c(e, P), c(r, d), c(n, R), c(s, b), jl(y, this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a, !f(l), f(l) ? 0 : l, !f(w), f(w) ? 0 : w, !f(p), f(p) ? 0 : p, x(u));
        var _ = j()[y / 4 + 0], m = At()[y / 8 + 1];
        return _ === 0 ? void 0 : m;
      } finally {
        v(16), C[E++] = void 0;
      }
    }
    projectPoint(t, e, r, n, s, a, l, w, p) {
      try {
        c(t, M), c(e, P), c(r, d);
        const u = El(this.ptr, t.ptr, e.ptr, r.ptr, n, s, !f(a), f(a) ? 0 : a, !f(l), f(l) ? 0 : l, !f(w), f(w) ? 0 : w, x(p));
        return u === 0 ? void 0 : xt.__wrap(u);
      } finally {
        C[E++] = void 0;
      }
    }
    projectPointAndGetFeature(t, e, r, n, s, a, l, w) {
      try {
        c(t, M), c(e, P), c(r, d);
        const p = Il(this.ptr, t.ptr, e.ptr, r.ptr, n, !f(s), f(s) ? 0 : s, !f(a), f(a) ? 0 : a, !f(l), f(l) ? 0 : l, x(w));
        return p === 0 ? void 0 : xt.__wrap(p);
      } finally {
        C[E++] = void 0;
      }
    }
    intersectionsWithPoint(t, e, r, n, s, a, l, w, p) {
      try {
        c(t, M), c(e, P), c(r, d), xl(this.ptr, t.ptr, e.ptr, r.ptr, x(n), s, !f(a), f(a) ? 0 : a, !f(l), f(l) ? 0 : l, !f(w), f(w) ? 0 : w, x(p));
      } finally {
        C[E++] = void 0, C[E++] = void 0;
      }
    }
    castShape(t, e, r, n, s, a, l, w, p, u, _, m, y) {
      try {
        c(t, M), c(e, P), c(r, d), c(n, R), c(s, d), c(a, b);
        const I = Pl(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a.ptr, l, w, p, !f(u), f(u) ? 0 : u, !f(_), f(_) ? 0 : _, !f(m), f(m) ? 0 : m, x(y));
        return I === 0 ? void 0 : Nt.__wrap(I);
      } finally {
        C[E++] = void 0;
      }
    }
    intersectionsWithShape(t, e, r, n, s, a, l, w, p, u, _) {
      try {
        c(t, M), c(e, P), c(r, d), c(n, R), c(s, b), Ml(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, x(a), l, !f(w), f(w) ? 0 : w, !f(p), f(p) ? 0 : p, !f(u), f(u) ? 0 : u, x(_));
      } finally {
        C[E++] = void 0, C[E++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      try {
        c(t, d), c(e, d), Tl(this.ptr, t.ptr, e.ptr, x(r));
      } finally {
        C[E++] = void 0;
      }
    }
  }
  class kt {
    static __wrap(t) {
      const e = Object.create(kt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Jl(t);
    }
    colliderHandle() {
      return mt(this.ptr);
    }
    normal() {
      const t = ic(this.ptr);
      return d.__wrap(t);
    }
    toi() {
      return sc(this.ptr);
    }
    featureType() {
      return oc(this.ptr) >>> 0;
    }
    featureId() {
      try {
        const r = v(-16);
        ac(r, this.ptr);
        var t = j()[r / 4 + 0], e = j()[r / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        v(16);
      }
    }
  }
  class me {
    static __wrap(t) {
      const e = Object.create(me.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      cc(t);
    }
    colliderHandle() {
      return mt(this.ptr);
    }
    toi() {
      return rt(this.ptr);
    }
  }
  class Dt {
    static __wrap(t) {
      const e = Object.create(Dt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ec(t);
    }
    normal() {
      const t = Bt(this.ptr);
      return d.__wrap(t);
    }
    toi() {
      return rt(this.ptr);
    }
    featureType() {
      return rc(this.ptr) >>> 0;
    }
    featureId() {
      try {
        const r = v(-16);
        nc(r, this.ptr);
        var t = j()[r / 4 + 0], e = j()[r / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        v(16);
      }
    }
  }
  class M {
    static __wrap(t) {
      const e = Object.create(M.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      qs(t);
    }
    rbTranslation(t) {
      const e = Vi(this.ptr, t);
      return d.__wrap(e);
    }
    rbRotation(t) {
      const e = Ji(this.ptr, t);
      return R.__wrap(e);
    }
    rbSleep(t) {
      Ui(this.ptr, t);
    }
    rbIsSleeping(t) {
      return Xi(this.ptr, t) !== 0;
    }
    rbIsMoving(t) {
      return Ki(this.ptr, t) !== 0;
    }
    rbNextTranslation(t) {
      const e = Yi(this.ptr, t);
      return d.__wrap(e);
    }
    rbNextRotation(t) {
      const e = Zi(this.ptr, t);
      return R.__wrap(e);
    }
    rbSetTranslation(t, e, r, n, s) {
      $i(this.ptr, t, e, r, n, s);
    }
    rbSetRotation(t, e, r, n, s, a) {
      Qi(this.ptr, t, e, r, n, s, a);
    }
    rbSetLinvel(t, e, r) {
      c(e, d), ts(this.ptr, t, e.ptr, r);
    }
    rbSetAngvel(t, e, r) {
      c(e, d), es(this.ptr, t, e.ptr, r);
    }
    rbSetNextKinematicTranslation(t, e, r, n) {
      rs(this.ptr, t, e, r, n);
    }
    rbSetNextKinematicRotation(t, e, r, n, s) {
      ns(this.ptr, t, e, r, n, s);
    }
    rbRecomputeMassPropertiesFromColliders(t, e) {
      c(e, P), is(this.ptr, t, e.ptr);
    }
    rbSetAdditionalMass(t, e, r) {
      ss(this.ptr, t, e, r);
    }
    rbSetAdditionalMassProperties(t, e, r, n, s, a) {
      c(r, d), c(n, d), c(s, R), os(this.ptr, t, e, r.ptr, n.ptr, s.ptr, a);
    }
    rbLinvel(t) {
      const e = as(this.ptr, t);
      return d.__wrap(e);
    }
    rbAngvel(t) {
      const e = cs(this.ptr, t);
      return d.__wrap(e);
    }
    rbLockTranslations(t, e, r) {
      ls(this.ptr, t, e, r);
    }
    rbSetEnabledTranslations(t, e, r, n, s) {
      hs(this.ptr, t, e, r, n, s);
    }
    rbLockRotations(t, e, r) {
      ds(this.ptr, t, e, r);
    }
    rbSetEnabledRotations(t, e, r, n, s) {
      ws(this.ptr, t, e, r, n, s);
    }
    rbDominanceGroup(t) {
      return ps(this.ptr, t);
    }
    rbSetDominanceGroup(t, e) {
      us(this.ptr, t, e);
    }
    rbEnableCcd(t, e) {
      _s(this.ptr, t, e);
    }
    rbMass(t) {
      return fs(this.ptr, t);
    }
    rbWakeUp(t) {
      ms(this.ptr, t);
    }
    rbIsCcdEnabled(t) {
      return bs(this.ptr, t) !== 0;
    }
    rbNumColliders(t) {
      return ys(this.ptr, t) >>> 0;
    }
    rbCollider(t, e) {
      return gs(this.ptr, t, e);
    }
    rbBodyType(t) {
      return Ss(this.ptr, t) >>> 0;
    }
    rbSetBodyType(t, e, r) {
      Rs(this.ptr, t, e, r);
    }
    rbIsFixed(t) {
      return vs(this.ptr, t) !== 0;
    }
    rbIsKinematic(t) {
      return Cs(this.ptr, t) !== 0;
    }
    rbIsDynamic(t) {
      return As(this.ptr, t) !== 0;
    }
    rbLinearDamping(t) {
      return js(this.ptr, t);
    }
    rbAngularDamping(t) {
      return Es(this.ptr, t);
    }
    rbSetLinearDamping(t, e) {
      Is(this.ptr, t, e);
    }
    rbSetAngularDamping(t, e) {
      xs(this.ptr, t, e);
    }
    rbSetEnabled(t, e) {
      Ps(this.ptr, t, e);
    }
    rbIsEnabled(t) {
      return Ms(this.ptr, t) !== 0;
    }
    rbGravityScale(t) {
      return Ts(this.ptr, t);
    }
    rbSetGravityScale(t, e, r) {
      Hs(this.ptr, t, e, r);
    }
    rbResetForces(t, e) {
      zs(this.ptr, t, e);
    }
    rbResetTorques(t, e) {
      Fs(this.ptr, t, e);
    }
    rbAddForce(t, e, r) {
      c(e, d), ks(this.ptr, t, e.ptr, r);
    }
    rbApplyImpulse(t, e, r) {
      c(e, d), Ds(this.ptr, t, e.ptr, r);
    }
    rbAddTorque(t, e, r) {
      c(e, d), Ns(this.ptr, t, e.ptr, r);
    }
    rbApplyTorqueImpulse(t, e, r) {
      c(e, d), Ls(this.ptr, t, e.ptr, r);
    }
    rbAddForceAtPoint(t, e, r, n) {
      c(e, d), c(r, d), Gs(this.ptr, t, e.ptr, r.ptr, n);
    }
    rbApplyImpulseAtPoint(t, e, r, n) {
      c(e, d), c(r, d), Bs(this.ptr, t, e.ptr, r.ptr, n);
    }
    rbUserData(t) {
      return Ws(this.ptr, t) >>> 0;
    }
    rbSetUserData(t, e) {
      Os(this.ptr, t, e);
    }
    constructor() {
      const t = Vs();
      return M.__wrap(t);
    }
    createRigidBody(t, e, r, n, s, a, l, w, p, u, _, m, y, I, N, V, J, Q, Jt, Ut, Xt, Kt, Yt, St) {
      return c(e, d), c(r, R), c(l, d), c(w, d), c(p, d), c(u, d), c(_, R), Js(this.ptr, t, e.ptr, r.ptr, n, s, a, l.ptr, w.ptr, p.ptr, u.ptr, _.ptr, m, y, I, N, V, J, Q, Jt, Ut, Xt, Kt, Yt, St);
    }
    remove(t, e, r, n, s) {
      c(e, O), c(r, P), c(n, W), c(s, q), Us(this.ptr, t, e.ptr, r.ptr, n.ptr, s.ptr);
    }
    len() {
      return Xs(this.ptr) >>> 0;
    }
    contains(t) {
      return Ks(this.ptr, t) !== 0;
    }
    forEachRigidBodyHandle(t) {
      try {
        Ys(this.ptr, x(t));
      } finally {
        C[E++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(t) {
      c(t, P), Zs(this.ptr, t.ptr);
    }
  }
  class R {
    static __wrap(t) {
      const e = Object.create(R.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ul(t);
    }
    constructor(t, e, r, n) {
      const s = Oc(t, e, r, n);
      return R.__wrap(s);
    }
    static identity() {
      const t = qc();
      return R.__wrap(t);
    }
    get x() {
      return Wt(this.ptr);
    }
    get y() {
      return Ve(this.ptr);
    }
    get z() {
      return rt(this.ptr);
    }
    get w() {
      return Vc(this.ptr);
    }
  }
  class Pt {
    static __wrap(t) {
      const e = Object.create(Pt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Yl(t);
    }
    constructor() {
      const t = Kl();
      return Pt.__wrap(t);
    }
    serializeAll(t, e, r, n, s, a, l, w, p) {
      c(t, d), c(e, Y), c(r, O), c(n, K), c(s, U), c(a, M), c(l, P), c(w, W), c(p, q);
      const u = Ol(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a.ptr, l.ptr, w.ptr, p.ptr);
      return Ct(u);
    }
    deserializeAll(t) {
      const e = ql(this.ptr, H(t));
      return e === 0 ? void 0 : fe.__wrap(e);
    }
  }
  class b {
    static __wrap(t) {
      const e = Object.create(b.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      lc(t);
    }
    static cuboid(t, e, r) {
      const n = hc(t, e, r);
      return b.__wrap(n);
    }
    static roundCuboid(t, e, r, n) {
      const s = dc(t, e, r, n);
      return b.__wrap(s);
    }
    static ball(t) {
      const e = wc(t);
      return b.__wrap(e);
    }
    static halfspace(t) {
      c(t, d);
      const e = pc(t.ptr);
      return b.__wrap(e);
    }
    static capsule(t, e) {
      const r = uc(t, e);
      return b.__wrap(r);
    }
    static cylinder(t, e) {
      const r = _c(t, e);
      return b.__wrap(r);
    }
    static roundCylinder(t, e, r) {
      const n = fc(t, e, r);
      return b.__wrap(n);
    }
    static cone(t, e) {
      const r = mc(t, e);
      return b.__wrap(r);
    }
    static roundCone(t, e, r) {
      const n = bc(t, e, r);
      return b.__wrap(n);
    }
    static polyline(t, e) {
      const r = tt(t, L), n = k, s = Rt(e, L), l = yc(r, n, s, k);
      return b.__wrap(l);
    }
    static trimesh(t, e) {
      const r = tt(t, L), n = k, s = Rt(e, L), l = gc(r, n, s, k);
      return b.__wrap(l);
    }
    static heightfield(t, e, r, n) {
      const s = tt(r, L), a = k;
      c(n, d);
      const l = Sc(t, e, s, a, n.ptr);
      return b.__wrap(l);
    }
    static segment(t, e) {
      c(t, d), c(e, d);
      const r = Rc(t.ptr, e.ptr);
      return b.__wrap(r);
    }
    static triangle(t, e, r) {
      c(t, d), c(e, d), c(r, d);
      const n = vc(t.ptr, e.ptr, r.ptr);
      return b.__wrap(n);
    }
    static roundTriangle(t, e, r, n) {
      c(t, d), c(e, d), c(r, d);
      const s = Cc(t.ptr, e.ptr, r.ptr, n);
      return b.__wrap(s);
    }
    static convexHull(t) {
      const e = tt(t, L), n = Ac(e, k);
      return n === 0 ? void 0 : b.__wrap(n);
    }
    static roundConvexHull(t, e) {
      const r = tt(t, L), s = jc(r, k, e);
      return s === 0 ? void 0 : b.__wrap(s);
    }
    static convexMesh(t, e) {
      const r = tt(t, L), n = k, s = Rt(e, L), l = Ec(r, n, s, k);
      return l === 0 ? void 0 : b.__wrap(l);
    }
    static roundConvexMesh(t, e, r) {
      const n = tt(t, L), s = k, a = Rt(e, L), w = Ic(n, s, a, k, r);
      return w === 0 ? void 0 : b.__wrap(w);
    }
    castShape(t, e, r, n, s, a, l, w, p) {
      c(t, d), c(e, R), c(r, d), c(n, b), c(s, d), c(a, R), c(l, d);
      const u = xc(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a.ptr, l.ptr, w, p);
      return u === 0 ? void 0 : Lt.__wrap(u);
    }
    intersectsShape(t, e, r, n, s) {
      return c(t, d), c(e, R), c(r, b), c(n, d), c(s, R), Pc(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr) !== 0;
    }
    contactShape(t, e, r, n, s, a) {
      c(t, d), c(e, R), c(r, b), c(n, d), c(s, R);
      const l = Mc(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s.ptr, a);
      return l === 0 ? void 0 : pt.__wrap(l);
    }
    containsPoint(t, e, r) {
      return c(t, d), c(e, R), c(r, d), Tc(this.ptr, t.ptr, e.ptr, r.ptr) !== 0;
    }
    projectPoint(t, e, r, n) {
      c(t, d), c(e, R), c(r, d);
      const s = Hc(this.ptr, t.ptr, e.ptr, r.ptr, n);
      return Ft.__wrap(s);
    }
    intersectsRay(t, e, r, n, s) {
      return c(t, d), c(e, R), c(r, d), c(n, d), zc(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s) !== 0;
    }
    castRay(t, e, r, n, s, a) {
      return c(t, d), c(e, R), c(r, d), c(n, d), Fc(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s, a);
    }
    castRayAndGetNormal(t, e, r, n, s, a) {
      c(t, d), c(e, R), c(r, d), c(n, d);
      const l = kc(this.ptr, t.ptr, e.ptr, r.ptr, n.ptr, s, a);
      return l === 0 ? void 0 : Dt.__wrap(l);
    }
  }
  class Nt {
    static __wrap(t) {
      const e = Object.create(Nt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Bc(t);
    }
    colliderHandle() {
      return mt(this.ptr);
    }
    toi() {
      return rt(this.ptr);
    }
    witness1() {
      const t = Bt(this.ptr);
      return d.__wrap(t);
    }
    witness2() {
      const t = qe(this.ptr);
      return d.__wrap(t);
    }
    normal1() {
      const t = ye(this.ptr);
      return d.__wrap(t);
    }
    normal2() {
      const t = Wc(this.ptr);
      return d.__wrap(t);
    }
  }
  class pt {
    static __wrap(t) {
      const e = Object.create(pt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ma(t);
    }
    distance() {
      return ba(this.ptr);
    }
    point1() {
      const t = Gt(this.ptr);
      return d.__wrap(t);
    }
    point2() {
      const t = Bt(this.ptr);
      return d.__wrap(t);
    }
    normal1() {
      const t = qe(this.ptr);
      return d.__wrap(t);
    }
    normal2() {
      const t = ye(this.ptr);
      return d.__wrap(t);
    }
  }
  class Lt {
    static __wrap(t) {
      const e = Object.create(Lt.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Dc(t);
    }
    toi() {
      return Wt(this.ptr);
    }
    witness1() {
      const t = Nc(this.ptr);
      return d.__wrap(t);
    }
    witness2() {
      const t = Je(this.ptr);
      return d.__wrap(t);
    }
    normal1() {
      const t = Lc(this.ptr);
      return d.__wrap(t);
    }
    normal2() {
      const t = Gc(this.ptr);
      return d.__wrap(t);
    }
  }
  class d {
    static __wrap(t) {
      const e = Object.create(d.prototype);
      return e.ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.ptr;
      return this.ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Xl(t);
    }
    static zero() {
      const t = Jc();
      return d.__wrap(t);
    }
    constructor(t, e, r) {
      const n = Uc(t, e, r);
      return d.__wrap(n);
    }
    get x() {
      return Wt(this.ptr);
    }
    set x(t) {
      We(this.ptr, t);
    }
    get y() {
      return Ve(this.ptr);
    }
    set y(t) {
      Xc(this.ptr, t);
    }
    get z() {
      return rt(this.ptr);
    }
    set z(t) {
      Oe(this.ptr, t);
    }
    xyz() {
      const t = Kc(this.ptr);
      return d.__wrap(t);
    }
    yxz() {
      const t = Yc(this.ptr);
      return d.__wrap(t);
    }
    zxy() {
      const t = Zc(this.ptr);
      return d.__wrap(t);
    }
    xzy() {
      const t = $c(this.ptr);
      return d.__wrap(t);
    }
    yzx() {
      const t = Qc(this.ptr);
      return d.__wrap(t);
    }
    zyx() {
      const t = tl(this.ptr);
      return d.__wrap(t);
    }
  }
  function Ir(o) {
    Ct(o);
  }
  function xr(o) {
    return H(o);
  }
  function Pr(o, t) {
    const e = A(t), r = typeof e == "number" ? e : void 0;
    At()[o / 8 + 1] = f(r) ? 0 : r, j()[o / 4 + 0] = !f(r);
  }
  function Mr(o) {
    const t = A(o);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function Tr(o) {
    return typeof A(o) == "function";
  }
  function Hr(o) {
    const t = kt.__wrap(o);
    return H(t);
  }
  function zr(o) {
    const t = pe.__wrap(o);
    return H(t);
  }
  function Fr() {
    return we(function(o, t, e) {
      const r = A(o).call(A(t), A(e));
      return H(r);
    }, arguments);
  }
  function kr() {
    return we(function(o, t, e, r) {
      const n = A(o).call(A(t), A(e), A(r));
      return H(n);
    }, arguments);
  }
  function Dr() {
    return we(function(o, t, e, r, n) {
      const s = A(o).call(A(t), A(e), A(r), A(n));
      return H(s);
    }, arguments);
  }
  function Nr(o, t, e, r) {
    const n = A(o).bind(A(t), A(e), A(r));
    return H(n);
  }
  function Lr(o) {
    const t = A(o).buffer;
    return H(t);
  }
  function Gr(o, t, e) {
    const r = new Uint8Array(A(o), t >>> 0, e >>> 0);
    return H(r);
  }
  function Br(o) {
    const t = new Uint8Array(A(o));
    return H(t);
  }
  function Wr(o, t, e) {
    A(o).set(A(t), e >>> 0);
  }
  function Or(o) {
    return A(o).length;
  }
  function qr(o, t, e) {
    const r = new Float32Array(A(o), t >>> 0, e >>> 0);
    return H(r);
  }
  function Vr(o, t, e) {
    A(o).set(A(t), e >>> 0);
  }
  function Jr(o) {
    return A(o).length;
  }
  function Ur(o) {
    const t = new Float32Array(o >>> 0);
    return H(t);
  }
  function Xr(o, t) {
    throw new Error(Ge(o, t));
  }
  function Kr() {
    return H(at);
  }
  URL = globalThis.URL;
  const i = await Rr({
    "./rapier_wasm3d_bg.js": {
      __wbindgen_object_drop_ref: Ir,
      __wbindgen_number_new: xr,
      __wbindgen_number_get: Pr,
      __wbindgen_boolean_get: Mr,
      __wbindgen_is_function: Tr,
      __wbg_rawraycolliderintersection_new: Hr,
      __wbg_rawcontactforceevent_new: zr,
      __wbg_call_168da88779e35f61: Fr,
      __wbg_call_3999bee59e9f7719: kr,
      __wbg_call_e1f72c051cdab859: Dr,
      __wbg_bind_10dfe70e95d2a480: Nr,
      __wbg_buffer_3f3d764d4747d564: Lr,
      __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: Gr,
      __wbg_new_8c3f0052272a457a: Br,
      __wbg_set_83db9690f9353e79: Wr,
      __wbg_length_9e1ae1900cb0fbd5: Or,
      __wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4: qr,
      __wbg_set_0e0314cf6675c1b9: Vr,
      __wbg_length_9a2deed95d22668d: Jr,
      __wbg_newwithlength_a7168e4a1e8f5e12: Ur,
      __wbindgen_throw: Xr,
      __wbindgen_memory: Kr
    }
  }, Sr), at = i.memory, Yr = i.version, Zr = i.__wbg_rawkinematiccharactercontroller_free, $r = i.rawkinematiccharactercontroller_new, Qr = i.rawkinematiccharactercontroller_up, tn = i.rawkinematiccharactercontroller_setUp, en = i.rawkinematiccharactercontroller_offset, rn = i.rawkinematiccharactercontroller_setOffset, nn = i.rawkinematiccharactercontroller_slideEnabled, sn = i.rawkinematiccharactercontroller_setSlideEnabled, on = i.rawkinematiccharactercontroller_autostepMaxHeight, an = i.rawkinematiccharactercontroller_autostepMinWidth, cn = i.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, ln = i.rawkinematiccharactercontroller_autostepEnabled, hn = i.rawkinematiccharactercontroller_enableAutostep, dn = i.rawkinematiccharactercontroller_disableAutostep, wn = i.rawkinematiccharactercontroller_maxSlopeClimbAngle, pn = i.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, un = i.rawkinematiccharactercontroller_minSlopeSlideAngle, _n = i.rawkinematiccharactercontroller_setMinSlopeSlideAngle, fn = i.rawkinematiccharactercontroller_snapToGroundDistance, mn = i.rawkinematiccharactercontroller_enableSnapToGround, bn = i.rawkinematiccharactercontroller_disableSnapToGround, yn = i.rawkinematiccharactercontroller_snapToGroundEnabled, gn = i.rawkinematiccharactercontroller_computeColliderMovement, Gt = i.rawkinematiccharactercontroller_computedMovement, be = i.rawkinematiccharactercontroller_computedGrounded, Sn = i.rawkinematiccharactercontroller_numComputedCollisions, Rn = i.rawkinematiccharactercontroller_computedCollision, vn = i.__wbg_rawcharactercollision_free, Cn = i.rawcharactercollision_new, mt = i.rawcharactercollision_handle, An = i.rawcharactercollision_translationApplied, jn = i.rawcharactercollision_translationRemaining, rt = i.rawcharactercollision_toi, Bt = i.rawcharactercollision_worldWitness1, En = i.rawcharactercollision_worldWitness2, ye = i.rawcharactercollision_worldNormal1, In = i.rawcharactercollision_worldNormal2, xn = i.__wbg_rawccdsolver_free, Pn = i.rawccdsolver_new, Mn = i.rawimpulsejointset_jointType, Tn = i.rawimpulsejointset_jointBodyHandle1, Hn = i.rawimpulsejointset_jointBodyHandle2, zn = i.rawimpulsejointset_jointFrameX1, Fn = i.rawimpulsejointset_jointFrameX2, kn = i.rawimpulsejointset_jointAnchor1, Dn = i.rawimpulsejointset_jointAnchor2, Nn = i.rawimpulsejointset_jointSetAnchor1, Ln = i.rawimpulsejointset_jointSetAnchor2, Gn = i.rawimpulsejointset_jointContactsEnabled, Bn = i.rawimpulsejointset_jointSetContactsEnabled, Wn = i.rawimpulsejointset_jointLimitsEnabled, On = i.rawimpulsejointset_jointLimitsMin, qn = i.rawimpulsejointset_jointLimitsMax, Vn = i.rawimpulsejointset_jointSetLimits, Jn = i.rawimpulsejointset_jointConfigureMotorModel, Un = i.rawimpulsejointset_jointConfigureMotorVelocity, Xn = i.rawimpulsejointset_jointConfigureMotorPosition, Kn = i.rawimpulsejointset_jointConfigureMotor, Yn = i.__wbg_rawimpulsejointset_free, Zn = i.rawimpulsejointset_new, $n = i.rawimpulsejointset_createJoint, Qn = i.rawimpulsejointset_remove, ti = i.rawimpulsejointset_len, ei = i.rawimpulsejointset_contains, ri = i.rawimpulsejointset_forEachJointHandle, ni = i.rawimpulsejointset_forEachJointAttachedToRigidBody, ii = i.__wbg_rawintegrationparameters_free, si = i.rawintegrationparameters_new, Wt = i.rawintegrationparameters_dt, oi = i.rawintegrationparameters_allowedLinearError, ai = i.rawintegrationparameters_predictionDistance, ci = i.rawintegrationparameters_maxVelocityIterations, li = i.rawintegrationparameters_maxVelocityFrictionIterations, hi = i.rawintegrationparameters_maxStabilizationIterations, di = i.rawintegrationparameters_minIslandSize, wi = i.rawintegrationparameters_maxCcdSubsteps, We = i.rawintegrationparameters_set_dt, Oe = i.rawintegrationparameters_set_erp, pi = i.rawintegrationparameters_set_allowedLinearError, ui = i.rawintegrationparameters_set_predictionDistance, _i = i.rawintegrationparameters_set_maxVelocityIterations, fi = i.rawintegrationparameters_set_maxVelocityFrictionIterations, mi = i.rawintegrationparameters_set_maxStabilizationIterations, bi = i.rawintegrationparameters_set_minIslandSize, yi = i.rawintegrationparameters_set_maxCcdSubsteps, gi = i.__wbg_rawislandmanager_free, Si = i.rawislandmanager_new, Ri = i.rawislandmanager_forEachActiveRigidBodyHandle, vi = i.__wbg_rawgenericjoint_free, Ci = i.rawgenericjoint_spherical, Ai = i.rawgenericjoint_prismatic, ji = i.rawgenericjoint_fixed, Ei = i.rawgenericjoint_revolute, Ii = i.rawmultibodyjointset_jointType, xi = i.rawmultibodyjointset_jointFrameX1, Pi = i.rawmultibodyjointset_jointFrameX2, Mi = i.rawmultibodyjointset_jointAnchor1, Ti = i.rawmultibodyjointset_jointAnchor2, Hi = i.rawmultibodyjointset_jointContactsEnabled, zi = i.rawmultibodyjointset_jointSetContactsEnabled, Fi = i.rawmultibodyjointset_jointLimitsEnabled, ki = i.rawmultibodyjointset_jointLimitsMin, Di = i.rawmultibodyjointset_jointLimitsMax, Ni = i.__wbg_rawmultibodyjointset_free, Li = i.rawmultibodyjointset_new, Gi = i.rawmultibodyjointset_createJoint, Bi = i.rawmultibodyjointset_remove, Wi = i.rawmultibodyjointset_contains, Oi = i.rawmultibodyjointset_forEachJointHandle, qi = i.rawmultibodyjointset_forEachJointAttachedToRigidBody, Vi = i.rawrigidbodyset_rbTranslation, Ji = i.rawrigidbodyset_rbRotation, Ui = i.rawrigidbodyset_rbSleep, Xi = i.rawrigidbodyset_rbIsSleeping, Ki = i.rawrigidbodyset_rbIsMoving, Yi = i.rawrigidbodyset_rbNextTranslation, Zi = i.rawrigidbodyset_rbNextRotation, $i = i.rawrigidbodyset_rbSetTranslation, Qi = i.rawrigidbodyset_rbSetRotation, ts = i.rawrigidbodyset_rbSetLinvel, es = i.rawrigidbodyset_rbSetAngvel, rs = i.rawrigidbodyset_rbSetNextKinematicTranslation, ns = i.rawrigidbodyset_rbSetNextKinematicRotation, is = i.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, ss = i.rawrigidbodyset_rbSetAdditionalMass, os = i.rawrigidbodyset_rbSetAdditionalMassProperties, as = i.rawrigidbodyset_rbLinvel, cs = i.rawrigidbodyset_rbAngvel, ls = i.rawrigidbodyset_rbLockTranslations, hs = i.rawrigidbodyset_rbSetEnabledTranslations, ds = i.rawrigidbodyset_rbLockRotations, ws = i.rawrigidbodyset_rbSetEnabledRotations, ps = i.rawrigidbodyset_rbDominanceGroup, us = i.rawrigidbodyset_rbSetDominanceGroup, _s = i.rawrigidbodyset_rbEnableCcd, fs = i.rawrigidbodyset_rbMass, ms = i.rawrigidbodyset_rbWakeUp, bs = i.rawrigidbodyset_rbIsCcdEnabled, ys = i.rawrigidbodyset_rbNumColliders, gs = i.rawrigidbodyset_rbCollider, Ss = i.rawrigidbodyset_rbBodyType, Rs = i.rawrigidbodyset_rbSetBodyType, vs = i.rawrigidbodyset_rbIsFixed, Cs = i.rawrigidbodyset_rbIsKinematic, As = i.rawrigidbodyset_rbIsDynamic, js = i.rawrigidbodyset_rbLinearDamping, Es = i.rawrigidbodyset_rbAngularDamping, Is = i.rawrigidbodyset_rbSetLinearDamping, xs = i.rawrigidbodyset_rbSetAngularDamping, Ps = i.rawrigidbodyset_rbSetEnabled, Ms = i.rawrigidbodyset_rbIsEnabled, Ts = i.rawrigidbodyset_rbGravityScale, Hs = i.rawrigidbodyset_rbSetGravityScale, zs = i.rawrigidbodyset_rbResetForces, Fs = i.rawrigidbodyset_rbResetTorques, ks = i.rawrigidbodyset_rbAddForce, Ds = i.rawrigidbodyset_rbApplyImpulse, Ns = i.rawrigidbodyset_rbAddTorque, Ls = i.rawrigidbodyset_rbApplyTorqueImpulse, Gs = i.rawrigidbodyset_rbAddForceAtPoint, Bs = i.rawrigidbodyset_rbApplyImpulseAtPoint, Ws = i.rawrigidbodyset_rbUserData, Os = i.rawrigidbodyset_rbSetUserData, qs = i.__wbg_rawrigidbodyset_free, Vs = i.rawrigidbodyset_new, Js = i.rawrigidbodyset_createRigidBody, Us = i.rawrigidbodyset_remove, Xs = i.rawrigidbodyset_len, Ks = i.rawrigidbodyset_contains, Ys = i.rawrigidbodyset_forEachRigidBodyHandle, Zs = i.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, $s = i.__wbg_rawbroadphase_free, Qs = i.rawbroadphase_new, to = i.rawcolliderset_coTranslation, eo = i.rawcolliderset_coRotation, ro = i.rawcolliderset_coSetTranslation, no = i.rawcolliderset_coSetTranslationWrtParent, io = i.rawcolliderset_coSetRotation, so = i.rawcolliderset_coSetRotationWrtParent, oo = i.rawcolliderset_coIsSensor, ao = i.rawcolliderset_coShapeType, co = i.rawcolliderset_coHalfspaceNormal, lo = i.rawcolliderset_coHalfExtents, ho = i.rawcolliderset_coSetHalfExtents, wo = i.rawcolliderset_coRadius, po = i.rawcolliderset_coSetRadius, uo = i.rawcolliderset_coHalfHeight, _o = i.rawcolliderset_coSetHalfHeight, fo = i.rawcolliderset_coRoundRadius, mo = i.rawcolliderset_coSetRoundRadius, bo = i.rawcolliderset_coVertices, yo = i.rawcolliderset_coIndices, go = i.rawcolliderset_coHeightfieldHeights, So = i.rawcolliderset_coHeightfieldScale, Ro = i.rawcolliderset_coHeightfieldNRows, vo = i.rawcolliderset_coHeightfieldNCols, Co = i.rawcolliderset_coParent, Ao = i.rawcolliderset_coSetEnabled, jo = i.rawcolliderset_coIsEnabled, Eo = i.rawcolliderset_coFriction, Io = i.rawcolliderset_coRestitution, xo = i.rawcolliderset_coDensity, Po = i.rawcolliderset_coMass, Mo = i.rawcolliderset_coVolume, To = i.rawcolliderset_coCollisionGroups, Ho = i.rawcolliderset_coSolverGroups, zo = i.rawcolliderset_coActiveHooks, Fo = i.rawcolliderset_coActiveCollisionTypes, ko = i.rawcolliderset_coActiveEvents, Do = i.rawcolliderset_coContactForceEventThreshold, No = i.rawcolliderset_coContainsPoint, Lo = i.rawcolliderset_coCastShape, Go = i.rawcolliderset_coCastCollider, Bo = i.rawcolliderset_coIntersectsShape, Wo = i.rawcolliderset_coContactShape, Oo = i.rawcolliderset_coContactCollider, qo = i.rawcolliderset_coProjectPoint, Vo = i.rawcolliderset_coIntersectsRay, Jo = i.rawcolliderset_coCastRay, Uo = i.rawcolliderset_coCastRayAndGetNormal, Xo = i.rawcolliderset_coSetSensor, Ko = i.rawcolliderset_coSetRestitution, Yo = i.rawcolliderset_coSetFriction, Zo = i.rawcolliderset_coFrictionCombineRule, $o = i.rawcolliderset_coSetFrictionCombineRule, Qo = i.rawcolliderset_coRestitutionCombineRule, ta = i.rawcolliderset_coSetRestitutionCombineRule, ea = i.rawcolliderset_coSetCollisionGroups, ra = i.rawcolliderset_coSetSolverGroups, na = i.rawcolliderset_coSetActiveHooks, ia = i.rawcolliderset_coSetActiveEvents, sa = i.rawcolliderset_coSetActiveCollisionTypes, oa = i.rawcolliderset_coSetShape, aa = i.rawcolliderset_coSetContactForceEventThreshold, ca = i.rawcolliderset_coSetDensity, la = i.rawcolliderset_coSetMass, ha = i.rawcolliderset_coSetMassProperties, da = i.__wbg_rawcolliderset_free, wa = i.rawcolliderset_new, pa = i.rawcolliderset_len, Ne = i.rawcolliderset_contains, ua = i.rawcolliderset_createCollider, _a = i.rawcolliderset_remove, fa = i.rawcolliderset_forEachColliderHandle, ma = i.__wbg_rawshapecontact_free, ba = i.rawshapecontact_distance, ya = i.__wbg_rawnarrowphase_free, ga = i.rawnarrowphase_new, Sa = i.rawnarrowphase_contacts_with, Ra = i.rawnarrowphase_contact_pair, va = i.rawnarrowphase_intersections_with, Ca = i.rawnarrowphase_intersection_pair, Aa = i.__wbg_rawcontactmanifold_free, ja = i.rawcontactpair_collider1, Ea = i.rawcontactpair_collider2, Ia = i.rawcontactpair_numContactManifolds, xa = i.rawcontactpair_contactManifold, Pa = i.rawcontactmanifold_normal, Ma = i.rawcontactmanifold_local_n1, Ta = i.rawcontactmanifold_local_n2, Ha = i.rawcontactmanifold_subshape1, za = i.rawcontactmanifold_subshape2, Fa = i.rawcontactmanifold_num_contacts, ka = i.rawcontactmanifold_contact_local_p1, Da = i.rawcontactmanifold_contact_local_p2, Na = i.rawcontactmanifold_contact_dist, La = i.rawcontactmanifold_contact_fid1, Ga = i.rawcontactmanifold_contact_fid2, Ba = i.rawcontactmanifold_contact_impulse, Wa = i.rawcontactmanifold_contact_tangent_impulse_x, Oa = i.rawcontactmanifold_contact_tangent_impulse_y, qa = i.rawcontactmanifold_num_solver_contacts, Va = i.rawcontactmanifold_solver_contact_point, Ja = i.rawcontactmanifold_solver_contact_dist, Ua = i.rawcontactmanifold_solver_contact_friction, Xa = i.rawcontactmanifold_solver_contact_restitution, Ka = i.rawcontactmanifold_solver_contact_tangent_velocity, Ya = i.__wbg_rawpointprojection_free, Za = i.__wbg_rawpointcolliderprojection_free, $a = i.rawpointcolliderprojection_colliderHandle, Qa = i.rawpointcolliderprojection_featureType, tc = i.rawpointcolliderprojection_featureId, ec = i.__wbg_rawrayintersection_free, rc = i.rawrayintersection_featureType, nc = i.rawrayintersection_featureId, ic = i.rawraycolliderintersection_normal, sc = i.rawraycolliderintersection_toi, oc = i.rawraycolliderintersection_featureType, ac = i.rawraycolliderintersection_featureId, cc = i.__wbg_rawraycollidertoi_free, lc = i.__wbg_rawshape_free, hc = i.rawshape_cuboid, dc = i.rawshape_roundCuboid, wc = i.rawshape_ball, pc = i.rawshape_halfspace, uc = i.rawshape_capsule, _c = i.rawshape_cylinder, fc = i.rawshape_roundCylinder, mc = i.rawshape_cone, bc = i.rawshape_roundCone, yc = i.rawshape_polyline, gc = i.rawshape_trimesh, Sc = i.rawshape_heightfield, Rc = i.rawshape_segment, vc = i.rawshape_triangle, Cc = i.rawshape_roundTriangle, Ac = i.rawshape_convexHull, jc = i.rawshape_roundConvexHull, Ec = i.rawshape_convexMesh, Ic = i.rawshape_roundConvexMesh, xc = i.rawshape_castShape, Pc = i.rawshape_intersectsShape, Mc = i.rawshape_contactShape, Tc = i.rawshape_containsPoint, Hc = i.rawshape_projectPoint, zc = i.rawshape_intersectsRay, Fc = i.rawshape_castRay, kc = i.rawshape_castRayAndGetNormal, Dc = i.__wbg_rawshapetoi_free, Nc = i.rawshapetoi_witness1, Lc = i.rawshapetoi_normal1, Gc = i.rawshapetoi_normal2, Bc = i.__wbg_rawshapecollidertoi_free, qe = i.rawshapecollidertoi_witness2, Wc = i.rawshapecollidertoi_normal2, Oc = i.rawrotation_new, qc = i.rawrotation_identity, Ve = i.rawrotation_y, Vc = i.rawrotation_w, Jc = i.rawvector_zero, Uc = i.rawvector_new, Xc = i.rawvector_set_y, Kc = i.rawvector_xyz, Yc = i.rawvector_yxz, Zc = i.rawvector_zxy, $c = i.rawvector_xzy, Qc = i.rawvector_yzx, tl = i.rawvector_zyx, el = i.__wbg_rawdebugrenderpipeline_free, rl = i.rawdebugrenderpipeline_new, nl = i.rawdebugrenderpipeline_vertices, il = i.rawdebugrenderpipeline_colors, sl = i.rawdebugrenderpipeline_render, ol = i.__wbg_raweventqueue_free, al = i.__wbg_rawcontactforceevent_free, cl = i.rawcontactforceevent_collider2, Je = i.rawcontactforceevent_total_force, ll = i.rawcontactforceevent_total_force_magnitude, hl = i.rawcontactforceevent_max_force_direction, dl = i.rawcontactforceevent_max_force_magnitude, wl = i.raweventqueue_new, pl = i.raweventqueue_drainCollisionEvents, ul = i.raweventqueue_drainContactForceEvents, _l = i.raweventqueue_clear, fl = i.__wbg_rawphysicspipeline_free, ml = i.rawphysicspipeline_new, bl = i.rawphysicspipeline_step, yl = i.rawphysicspipeline_stepWithEvents, gl = i.__wbg_rawquerypipeline_free, Sl = i.rawquerypipeline_new, Rl = i.rawquerypipeline_update, vl = i.rawquerypipeline_castRay, Cl = i.rawquerypipeline_castRayAndGetNormal, Al = i.rawquerypipeline_intersectionsWithRay, jl = i.rawquerypipeline_intersectionWithShape, El = i.rawquerypipeline_projectPoint, Il = i.rawquerypipeline_projectPointAndGetFeature, xl = i.rawquerypipeline_intersectionsWithPoint, Pl = i.rawquerypipeline_castShape, Ml = i.rawquerypipeline_intersectionsWithShape, Tl = i.rawquerypipeline_collidersWithAabbIntersectingAabb, Hl = i.__wbg_rawdeserializedworld_free, zl = i.rawdeserializedworld_takeGravity, Fl = i.rawdeserializedworld_takeIntegrationParameters, kl = i.rawdeserializedworld_takeIslandManager, Dl = i.rawdeserializedworld_takeBroadPhase, Nl = i.rawdeserializedworld_takeNarrowPhase, Ll = i.rawdeserializedworld_takeBodies, Gl = i.rawdeserializedworld_takeColliders, Bl = i.rawdeserializedworld_takeImpulseJoints, Wl = i.rawdeserializedworld_takeMultibodyJoints, Ol = i.rawserializationpipeline_serializeAll, ql = i.rawserializationpipeline_deserializeAll, Vl = i.__wbg_rawcontactpair_free, Jl = i.__wbg_rawraycolliderintersection_free, Ul = i.__wbg_rawrotation_free, Xl = i.__wbg_rawvector_free;
  i.rawvector_set_x;
  i.rawvector_set_z;
  i.rawpointprojection_isInside;
  i.rawpointcolliderprojection_isInside;
  i.rawcolliderset_isHandleValid;
  i.rawshapecontact_point1;
  i.rawshapecontact_point2;
  i.rawshapecontact_normal2;
  i.rawpointprojection_point;
  i.rawpointcolliderprojection_point;
  i.rawrayintersection_normal;
  i.rawshapecollidertoi_witness1;
  i.rawshapecontact_normal1;
  i.rawshapecollidertoi_normal1;
  i.rawshapetoi_witness2;
  const Kl = i.rawserializationpipeline_new;
  i.rawintegrationparameters_erp;
  i.rawrayintersection_toi;
  i.rawraycollidertoi_toi;
  i.rawshapetoi_toi;
  i.rawshapecollidertoi_toi;
  i.rawrotation_x;
  i.rawrotation_z;
  i.rawvector_x;
  i.rawvector_y;
  i.rawvector_z;
  i.rawraycolliderintersection_colliderHandle;
  i.rawraycollidertoi_colliderHandle;
  i.rawshapecollidertoi_colliderHandle;
  i.rawcontactforceevent_collider1;
  const Yl = i.__wbg_rawserializationpipeline_free, v = i.__wbindgen_add_to_stack_pointer, vt = i.__wbindgen_free, L = i.__wbindgen_malloc, Zl = i.__wbindgen_exn_store;
  Ue = class {
    constructor(t, e, r) {
      this.x = t, this.y = e, this.z = r;
    }
  };
  h = class {
    static new(t, e, r) {
      return new Ue(t, e, r);
    }
    static intoRaw(t) {
      return new d(t.x, t.y, t.z);
    }
    static zeros() {
      return h.new(0, 0, 0);
    }
    static fromRaw(t) {
      if (!t)
        return null;
      let e = h.new(t.x, t.y, t.z);
      return t.free(), e;
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z;
    }
  };
  ne = class {
    constructor(t, e, r, n) {
      this.x = t, this.y = e, this.z = r, this.w = n;
    }
  };
  g = class {
    static identity() {
      return new ne(0, 0, 0, 1);
    }
    static fromRaw(t) {
      if (!t)
        return null;
      let e = new ne(t.x, t.y, t.z, t.w);
      return t.free(), e;
    }
    static intoRaw(t) {
      return new R(t.x, t.y, t.z, t.w);
    }
    static copy(t, e) {
      t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
    }
  };
  (function(o) {
    o[o.Dynamic = 0] = "Dynamic", o[o.Fixed = 1] = "Fixed", o[o.KinematicPositionBased = 2] = "KinematicPositionBased", o[o.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(G || (G = {}));
  ie = class {
    constructor(t, e, r) {
      this.rawSet = t, this.colliderSet = e, this.handle = r;
    }
    finalizeDeserialization(t) {
      this.colliderSet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    lockTranslations(t, e) {
      return this.rawSet.rbLockTranslations(this.handle, t, e);
    }
    lockRotations(t, e) {
      return this.rawSet.rbLockRotations(this.handle, t, e);
    }
    setEnabledTranslations(t, e, r, n) {
      return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, r, n);
    }
    restrictTranslations(t, e, r, n) {
      this.setEnabledTranslations(t, e, r, n);
    }
    setEnabledRotations(t, e, r, n) {
      return this.rawSet.rbSetEnabledRotations(this.handle, t, e, r, n);
    }
    restrictRotations(t, e, r, n) {
      this.setEnabledRotations(t, e, r, n);
    }
    dominanceGroup() {
      return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(t) {
      this.rawSet.rbSetDominanceGroup(this.handle, t);
    }
    enableCcd(t) {
      this.rawSet.rbEnableCcd(this.handle, t);
    }
    translation() {
      let t = this.rawSet.rbTranslation(this.handle);
      return h.fromRaw(t);
    }
    rotation() {
      let t = this.rawSet.rbRotation(this.handle);
      return g.fromRaw(t);
    }
    nextTranslation() {
      let t = this.rawSet.rbNextTranslation(this.handle);
      return h.fromRaw(t);
    }
    nextRotation() {
      let t = this.rawSet.rbNextRotation(this.handle);
      return g.fromRaw(t);
    }
    setTranslation(t, e) {
      this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
    }
    setLinvel(t, e) {
      let r = h.intoRaw(t);
      this.rawSet.rbSetLinvel(this.handle, r, e), r.free();
    }
    gravityScale() {
      return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(t, e) {
      this.rawSet.rbSetGravityScale(this.handle, t, e);
    }
    setRotation(t, e) {
      this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
    }
    setAngvel(t, e) {
      let r = h.intoRaw(t);
      this.rawSet.rbSetAngvel(this.handle, r, e), r.free();
    }
    setNextKinematicTranslation(t) {
      this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
    }
    setNextKinematicRotation(t) {
      this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    linvel() {
      return h.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    angvel() {
      return h.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
      return this.rawSet.rbMass(this.handle);
    }
    sleep() {
      this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
      this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
      return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
      return this.rawSet.rbNumColliders(this.handle);
    }
    collider(t) {
      return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
    }
    setEnabled(t) {
      this.rawSet.rbSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
      return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(t, e) {
      return this.rawSet.rbSetBodyType(this.handle, t, e);
    }
    isSleeping() {
      return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
      return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
      return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
      return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
      return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
      return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
      return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(t) {
      this.rawSet.rbSetLinearDamping(this.handle, t);
    }
    recomputeMassPropertiesFromColliders() {
      this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(t, e) {
      this.rawSet.rbSetAdditionalMass(this.handle, t, e);
    }
    setAdditionalMassProperties(t, e, r, n, s) {
      let a = h.intoRaw(e), l = h.intoRaw(r), w = g.intoRaw(n);
      this.rawSet.rbSetAdditionalMassProperties(this.handle, t, a, l, w, s), a.free(), l.free(), w.free();
    }
    setAngularDamping(t) {
      this.rawSet.rbSetAngularDamping(this.handle, t);
    }
    resetForces(t) {
      this.rawSet.rbResetForces(this.handle, t);
    }
    resetTorques(t) {
      this.rawSet.rbResetTorques(this.handle, t);
    }
    addForce(t, e) {
      const r = h.intoRaw(t);
      this.rawSet.rbAddForce(this.handle, r, e), r.free();
    }
    applyImpulse(t, e) {
      const r = h.intoRaw(t);
      this.rawSet.rbApplyImpulse(this.handle, r, e), r.free();
    }
    addTorque(t, e) {
      const r = h.intoRaw(t);
      this.rawSet.rbAddTorque(this.handle, r, e), r.free();
    }
    applyTorqueImpulse(t, e) {
      const r = h.intoRaw(t);
      this.rawSet.rbApplyTorqueImpulse(this.handle, r, e), r.free();
    }
    addForceAtPoint(t, e, r) {
      const n = h.intoRaw(t), s = h.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, n, s, r), n.free(), s.free();
    }
    applyImpulseAtPoint(t, e, r) {
      const n = h.intoRaw(t), s = h.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, n, s, r), n.free(), s.free();
    }
  };
  B = class {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = h.zeros(), this.rotation = g.identity(), this.gravityScale = 1, this.linvel = h.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = h.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = h.zeros(), this.principalAngularInertia = h.zeros(), this.angularInertiaLocalFrame = g.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.dominanceGroup = 0;
    }
    static dynamic() {
      return new B(G.Dynamic);
    }
    static kinematicPositionBased() {
      return new B(G.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new B(G.KinematicVelocityBased);
    }
    static fixed() {
      return new B(G.Fixed);
    }
    static newDynamic() {
      return new B(G.Dynamic);
    }
    static newKinematicPositionBased() {
      return new B(G.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new B(G.KinematicVelocityBased);
    }
    static newStatic() {
      return new B(G.Fixed);
    }
    setDominanceGroup(t) {
      return this.dominanceGroup = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number")
        throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return g.copy(this.rotation, t), this;
    }
    setGravityScale(t) {
      return this.gravityScale = t, this;
    }
    setAdditionalMass(t) {
      return this.mass = t, this.massOnly = true, this;
    }
    setLinvel(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number")
        throw TypeError("The linvel components must be numbers.");
      return this.linvel = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setAngvel(t) {
      return h.copy(this.angvel, t), this;
    }
    setAdditionalMassProperties(t, e, r, n) {
      return this.mass = t, h.copy(this.centerOfMass, e), h.copy(this.principalAngularInertia, r), g.copy(this.angularInertiaLocalFrame, n), this.massOnly = false, this;
    }
    enabledTranslations(t, e, r) {
      return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = r, this;
    }
    restrictTranslations(t, e, r) {
      return this.enabledTranslations(t, e, r);
    }
    lockTranslations() {
      return this.enabledTranslations(false, false, false);
    }
    enabledRotations(t, e, r) {
      return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = r, this;
    }
    restrictRotations(t, e, r) {
      return this.enabledRotations(t, e, r);
    }
    lockRotations() {
      return this.restrictRotations(false, false, false);
    }
    setLinearDamping(t) {
      return this.linearDamping = t, this;
    }
    setAngularDamping(t) {
      return this.angularDamping = t, this;
    }
    setCanSleep(t) {
      return this.canSleep = t, this;
    }
    setSleeping(t) {
      return this.sleeping = t, this;
    }
    setCcdEnabled(t) {
      return this.ccdEnabled = t, this;
    }
    setUserData(t) {
      return this.userData = t, this;
    }
  };
  class Ot {
    constructor() {
      this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
    }
    set(t, e) {
      let r = this.index(t);
      for (; this.data.length <= r; )
        this.data.push(null);
      this.data[r] == null && (this.size += 1), this.data[r] = e;
    }
    len() {
      return this.size;
    }
    delete(t) {
      let e = this.index(t);
      e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
    }
    clear() {
      this.data = new Array();
    }
    get(t) {
      let e = this.index(t);
      return e < this.data.length ? this.data[e] : null;
    }
    forEach(t) {
      for (const e of this.data)
        e != null && t(e);
    }
    getAll() {
      return this.data.filter((t) => t != null);
    }
    index(t) {
      return this.fconv[0] = t, this.uconv[0];
    }
  }
  Xe = class {
    constructor(t) {
      this.raw = t || new M(), this.map = new Ot(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new ie(t, null, e));
      });
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let r = h.intoRaw(e.translation), n = g.intoRaw(e.rotation), s = h.intoRaw(e.linvel), a = h.intoRaw(e.centerOfMass), l = h.intoRaw(e.angvel), w = h.intoRaw(e.principalAngularInertia), p = g.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createRigidBody(e.enabled, r, n, e.gravityScale, e.mass, e.massOnly, a, s, l, w, p, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.ccdEnabled, e.dominanceGroup);
      r.free(), n.free(), s.free(), a.free(), l.free(), w.free(), p.free();
      const _ = new ie(this.raw, t, u);
      return _.userData = e.userData, this.map.set(u, _), _;
    }
    remove(t, e, r, n, s) {
      for (let a = 0; a < this.raw.rbNumColliders(t); a += 1)
        r.unmap(this.raw.rbCollider(t, a));
      n.forEachJointHandleAttachedToRigidBody(t, (a) => n.unmap(a)), s.forEachJointHandleAttachedToRigidBody(t, (a) => s.unmap(a)), this.raw.remove(t, e.raw, r.raw, n.raw, s.raw), this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachActiveRigidBody(t, e) {
      t.forEachActiveRigidBodyHandle((r) => {
        e(this.get(r));
      });
    }
    getAll() {
      return this.map.getAll();
    }
  };
  Ke = class {
    constructor(t) {
      this.raw = t || new Y();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
      return this.raw.dt;
    }
    get erp() {
      return this.raw.erp;
    }
    get allowedLinearError() {
      return this.raw.allowedLinearError;
    }
    get predictionDistance() {
      return this.raw.predictionDistance;
    }
    get maxVelocityIterations() {
      return this.raw.maxVelocityIterations;
    }
    get maxVelocityFrictionIterations() {
      return this.raw.maxVelocityFrictionIterations;
    }
    get maxStabilizationIterations() {
      return this.raw.maxStabilizationIterations;
    }
    get minIslandSize() {
      return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
      return this.raw.maxCcdSubsteps;
    }
    set dt(t) {
      this.raw.dt = t;
    }
    set erp(t) {
      this.raw.erp = t;
    }
    set allowedLinearError(t) {
      this.raw.allowedLinearError = t;
    }
    set predictionDistance(t) {
      this.raw.predictionDistance = t;
    }
    set maxVelocityIterations(t) {
      this.raw.maxVelocityIterations = t;
    }
    set maxVelocityFrictionIterations(t) {
      this.raw.maxVelocityFrictionIterations = t;
    }
    set maxStabilizationIterations(t) {
      this.raw.maxStabilizationIterations = t;
    }
    set minIslandSize(t) {
      this.raw.minIslandSize = t;
    }
    set maxCcdSubsteps(t) {
      this.raw.maxCcdSubsteps = t;
    }
  };
  (function(o) {
    o[o.Revolute = 0] = "Revolute", o[o.Fixed = 1] = "Fixed", o[o.Prismatic = 2] = "Prismatic", o[o.Spherical = 3] = "Spherical";
  })(z || (z = {}));
  (function(o) {
    o[o.AccelerationBased = 0] = "AccelerationBased", o[o.ForceBased = 1] = "ForceBased";
  })(se || (se = {}));
  Z = class {
    constructor(t, e, r) {
      this.rawSet = t, this.bodySet = e, this.handle = r;
    }
    static newTyped(t, e, r) {
      switch (t.jointType(r)) {
        case z.Revolute:
          return new $e(t, e, r);
        case z.Prismatic:
          return new Ze(t, e, r);
        case z.Fixed:
          return new Ye(t, e, r);
        case z.Spherical:
          return new Qe(t, e, r);
        default:
          return new Z(t, e, r);
      }
    }
    finalizeDeserialization(t) {
      this.bodySet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    body1() {
      return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
      return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
      return this.rawSet.jointType(this.handle);
    }
    frameX1() {
      return g.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
      return g.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
      return h.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
      return h.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(t) {
      const e = h.intoRaw(t);
      this.rawSet.jointSetAnchor1(this.handle, e), e.free();
    }
    setAnchor2(t) {
      const e = h.intoRaw(t);
      this.rawSet.jointSetAnchor2(this.handle, e), e.free();
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  };
  ge = class extends Z {
    limitsEnabled() {
      return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
      return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
      return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(t, e) {
      this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
    }
    configureMotorModel(t) {
      this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
    }
    configureMotorVelocity(t, e) {
      this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
    }
    configureMotorPosition(t, e, r) {
      this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, r);
    }
    configureMotor(t, e, r, n) {
      this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, r, n);
    }
  };
  Ye = class extends Z {
  };
  Ze = class extends ge {
    rawAxis() {
      return zt.X;
    }
  };
  $e = class extends ge {
    rawAxis() {
      return zt.AngX;
    }
  };
  Qe = class extends Z {
  };
  nt = class {
    constructor() {
    }
    static fixed(t, e, r, n) {
      let s = new nt();
      return s.anchor1 = t, s.anchor2 = r, s.frame1 = e, s.frame2 = n, s.jointType = z.Fixed, s;
    }
    static spherical(t, e) {
      let r = new nt();
      return r.anchor1 = t, r.anchor2 = e, r.jointType = z.Spherical, r;
    }
    static prismatic(t, e, r) {
      let n = new nt();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = z.Prismatic, n;
    }
    static revolute(t, e, r) {
      let n = new nt();
      return n.anchor1 = t, n.anchor2 = e, n.axis = r, n.jointType = z.Revolute, n;
    }
    intoRaw() {
      let t = h.intoRaw(this.anchor1), e = h.intoRaw(this.anchor2), r, n, s = false, a = 0, l = 0;
      switch (this.jointType) {
        case z.Fixed:
          let w = g.intoRaw(this.frame1), p = g.intoRaw(this.frame2);
          n = D.fixed(t, w, e, p), w.free(), p.free();
          break;
        case z.Prismatic:
          r = h.intoRaw(this.axis), this.limitsEnabled && (s = true, a = this.limits[0], l = this.limits[1]), n = D.prismatic(t, e, r, s, a, l), r.free();
          break;
        case z.Spherical:
          n = D.spherical(t, e);
          break;
        case z.Revolute:
          r = h.intoRaw(this.axis), n = D.revolute(t, e, r), r.free();
          break;
      }
      return t.free(), e.free(), n;
    }
  };
  tr = class {
    constructor(t) {
      this.raw = t || new W(), this.map = new Ot(), t && t.forEachJointHandle((e) => {
        this.map.set(e, Z.newTyped(t, null, e));
      });
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, r, n, s) {
      const a = e.intoRaw(), l = this.raw.createJoint(a, r, n, s);
      a.free();
      let w = Z.newTyped(this.raw, t, l);
      return this.map.set(l, w), w;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.unmap(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  };
  $ = class {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case z.Revolute:
          return new nr(t, e);
        case z.Prismatic:
          return new rr(t, e);
        case z.Fixed:
          return new er(t, e);
        case z.Spherical:
          return new ir(t, e);
        default:
          return new $(t, e);
      }
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  };
  Se = class extends $ {
  };
  er = class extends $ {
  };
  rr = class extends Se {
    rawAxis() {
      return zt.X;
    }
  };
  nr = class extends Se {
    rawAxis() {
      return zt.AngX;
    }
  };
  ir = class extends $ {
  };
  sr = class {
    constructor(t) {
      this.raw = t || new q(), this.map = new Ot(), t && t.forEachJointHandle((e) => {
        this.map.set(e, $.newTyped(this.raw, e));
      });
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    createJoint(t, e, r, n) {
      const s = t.intoRaw(), a = this.raw.createJoint(s, e, r, n);
      s.free();
      let l = $.newTyped(this.raw, a);
      return this.map.set(a, l), l;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.map.delete(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    getAll() {
      return this.map.getAll();
    }
  };
  (function(o) {
    o[o.Average = 0] = "Average", o[o.Min = 1] = "Min", o[o.Multiply = 2] = "Multiply", o[o.Max = 3] = "Max";
  })(ut || (ut = {}));
  or = class {
    constructor(t) {
      this.raw = t || new it();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
  };
  ar = class {
    constructor(t) {
      this.raw = t || new O();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  };
  cr = class {
    constructor(t) {
      this.raw = t || new K();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
  };
  lr = class {
    constructor(t) {
      this.raw = t || new U(), this.tempManifold = new hr(null);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    contactsWith(t, e) {
      this.raw.contacts_with(t, e);
    }
    intersectionsWith(t, e) {
      this.raw.intersections_with(t, e);
    }
    contactPair(t, e, r) {
      const n = this.raw.contact_pair(t, e);
      if (n) {
        const s = n.collider1() != t;
        let a;
        for (a = 0; a < n.numContactManifolds(); ++a)
          this.tempManifold.raw = n.contactManifold(a), this.tempManifold.raw && r(this.tempManifold, s), this.tempManifold.free();
        n.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  };
  hr = class {
    constructor(t) {
      this.raw = t;
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    normal() {
      return h.fromRaw(this.raw.normal());
    }
    localNormal1() {
      return h.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
      return h.fromRaw(this.raw.local_n2());
    }
    subshape1() {
      return this.raw.subshape1();
    }
    subshape2() {
      return this.raw.subshape2();
    }
    numContacts() {
      return this.raw.num_contacts();
    }
    localContactPoint1(t) {
      return h.fromRaw(this.raw.contact_local_p1(t));
    }
    localContactPoint2(t) {
      return h.fromRaw(this.raw.contact_local_p2(t));
    }
    contactDist(t) {
      return this.raw.contact_dist(t);
    }
    contactFid1(t) {
      return this.raw.contact_fid1(t);
    }
    contactFid2(t) {
      return this.raw.contact_fid2(t);
    }
    contactImpulse(t) {
      return this.raw.contact_impulse(t);
    }
    contactTangentImpulseX(t) {
      return this.raw.contact_tangent_impulse_x(t);
    }
    contactTangentImpulseY(t) {
      return this.raw.contact_tangent_impulse_y(t);
    }
    numSolverContacts() {
      return this.raw.num_solver_contacts();
    }
    solverContactPoint(t) {
      return h.fromRaw(this.raw.solver_contact_point(t));
    }
    solverContactDist(t) {
      return this.raw.solver_contact_dist(t);
    }
    solverContactFriction(t) {
      return this.raw.solver_contact_friction(t);
    }
    solverContactRestitution(t) {
      return this.raw.solver_contact_restitution(t);
    }
    solverContactTangentVelocity(t) {
      return h.fromRaw(this.raw.solver_contact_tangent_velocity(t));
    }
  };
  st = class {
    constructor(t, e, r, n, s) {
      this.distance = t, this.point1 = e, this.point2 = r, this.normal1 = n, this.normal2 = s;
    }
    static fromRaw(t) {
      if (!t)
        return null;
      const e = new st(t.distance(), h.fromRaw(t.point1()), h.fromRaw(t.point2()), h.fromRaw(t.normal1()), h.fromRaw(t.normal2()));
      return t.free(), e;
    }
  };
  (function(o) {
    o[o.Vertex = 0] = "Vertex", o[o.Edge = 1] = "Edge", o[o.Face = 2] = "Face", o[o.Unknown = 3] = "Unknown";
  })(ot || (ot = {}));
  bt = class {
    constructor(t, e) {
      this.point = t, this.isInside = e;
    }
    static fromRaw(t) {
      if (!t)
        return null;
      const e = new bt(h.fromRaw(t.point()), t.isInside());
      return t.free(), e;
    }
  };
  _t = class {
    constructor(t, e, r, n, s) {
      this.featureType = ot.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = r, s !== void 0 && (this.featureId = s), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e)
        return null;
      const r = new _t(t.get(e.colliderHandle()), h.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
      return e.free(), r;
    }
  };
  $l = class {
    constructor(t, e) {
      this.origin = t, this.dir = e;
    }
    pointAt(t) {
      return {
        x: this.origin.x + this.dir.x * t,
        y: this.origin.y + this.dir.y * t,
        z: this.origin.z + this.dir.z * t
      };
    }
  };
  yt = class {
    constructor(t, e, r, n) {
      this.featureType = ot.Unknown, this.featureId = void 0, this.toi = t, this.normal = e, n !== void 0 && (this.featureId = n), r !== void 0 && (this.featureType = r);
    }
    static fromRaw(t) {
      if (!t)
        return null;
      const e = new yt(t.toi(), h.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), e;
    }
  };
  ft = class {
    constructor(t, e, r, n, s) {
      this.featureType = ot.Unknown, this.featureId = void 0, this.collider = t, this.toi = e, this.normal = r, s !== void 0 && (this.featureId = s), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(t, e) {
      if (!e)
        return null;
      const r = new ft(t.get(e.colliderHandle()), e.toi(), h.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), r;
    }
  };
  qt = class {
    constructor(t, e) {
      this.collider = t, this.toi = e;
    }
    static fromRaw(t, e) {
      if (!e)
        return null;
      const r = new qt(t.get(e.colliderHandle()), e.toi());
      return e.free(), r;
    }
  };
  ct = class {
    constructor(t, e, r, n, s) {
      this.toi = t, this.witness1 = e, this.witness2 = r, this.normal1 = n, this.normal2 = s;
    }
    static fromRaw(t, e) {
      if (!e)
        return null;
      const r = new ct(e.toi(), h.fromRaw(e.witness1()), h.fromRaw(e.witness2()), h.fromRaw(e.normal1()), h.fromRaw(e.normal2()));
      return e.free(), r;
    }
  };
  gt = class extends ct {
    constructor(t, e, r, n, s, a) {
      super(e, r, n, s, a), this.collider = t;
    }
    static fromRaw(t, e) {
      if (!e)
        return null;
      const r = new gt(t.get(e.colliderHandle()), e.toi(), h.fromRaw(e.witness1()), h.fromRaw(e.witness2()), h.fromRaw(e.normal1()), h.fromRaw(e.normal2()));
      return e.free(), r;
    }
  };
  F = class {
    static fromRaw(t, e) {
      const r = t.coShapeType(e);
      let n, s, a, l, w, p, u;
      switch (r) {
        case S.Ball:
          return new Re(t.coRadius(e));
        case S.Cuboid:
          return n = t.coHalfExtents(e), new ve(n.x, n.y, n.z);
        case S.RoundCuboid:
          return n = t.coHalfExtents(e), s = t.coRoundRadius(e), new Ce(n.x, n.y, n.z, s);
        case S.Capsule:
          return w = t.coHalfHeight(e), p = t.coRadius(e), new Ae(w, p);
        case S.Segment:
          return a = t.coVertices(e), new je(h.new(a[0], a[1], a[2]), h.new(a[3], a[4], a[5]));
        case S.Polyline:
          return a = t.coVertices(e), l = t.coIndices(e), new xe(a, l);
        case S.Triangle:
          return a = t.coVertices(e), new Ee(h.new(a[0], a[1], a[2]), h.new(a[3], a[4], a[5]), h.new(a[6], a[7], a[8]));
        case S.RoundTriangle:
          return a = t.coVertices(e), s = t.coRoundRadius(e), new Ie(h.new(a[0], a[1], a[2]), h.new(a[3], a[4], a[5]), h.new(a[6], a[7], a[8]), s);
        case S.HalfSpace:
          return u = h.fromRaw(t.coHalfspaceNormal(e)), new dr(u);
        case S.TriMesh:
          return a = t.coVertices(e), l = t.coIndices(e), new Pe(a, l);
        case S.HeightField:
          const _ = t.coHeightfieldScale(e), m = t.coHeightfieldHeights(e), y = t.coHeightfieldNRows(e), I = t.coHeightfieldNCols(e);
          return new Me(y, I, m, _);
        case S.ConvexPolyhedron:
          return a = t.coVertices(e), l = t.coIndices(e), new Mt(a, l);
        case S.RoundConvexPolyhedron:
          return a = t.coVertices(e), l = t.coIndices(e), s = t.coRoundRadius(e), new Tt(a, l, s);
        case S.Cylinder:
          return w = t.coHalfHeight(e), p = t.coRadius(e), new Te(w, p);
        case S.RoundCylinder:
          return w = t.coHalfHeight(e), p = t.coRadius(e), s = t.coRoundRadius(e), new He(w, p, s);
        case S.Cone:
          return w = t.coHalfHeight(e), p = t.coRadius(e), new ze(w, p);
        case S.RoundCone:
          return w = t.coHalfHeight(e), p = t.coRadius(e), s = t.coRoundRadius(e), new Fe(w, p, s);
        default:
          throw new Error("unknown shape type: " + r);
      }
    }
    castShape(t, e, r, n, s, a, l, w, p) {
      let u = h.intoRaw(t), _ = g.intoRaw(e), m = h.intoRaw(r), y = h.intoRaw(s), I = g.intoRaw(a), N = h.intoRaw(l), V = this.intoRaw(), J = n.intoRaw(), Q = ct.fromRaw(null, V.castShape(u, _, m, J, y, I, N, w, p));
      return u.free(), _.free(), m.free(), y.free(), I.free(), N.free(), V.free(), J.free(), Q;
    }
    intersectsShape(t, e, r, n, s) {
      let a = h.intoRaw(t), l = g.intoRaw(e), w = h.intoRaw(n), p = g.intoRaw(s), u = this.intoRaw(), _ = r.intoRaw(), m = u.intersectsShape(a, l, _, w, p);
      return a.free(), l.free(), w.free(), p.free(), u.free(), _.free(), m;
    }
    contactShape(t, e, r, n, s, a) {
      let l = h.intoRaw(t), w = g.intoRaw(e), p = h.intoRaw(n), u = g.intoRaw(s), _ = this.intoRaw(), m = r.intoRaw(), y = st.fromRaw(_.contactShape(l, w, m, p, u, a));
      return l.free(), w.free(), p.free(), u.free(), _.free(), m.free(), y;
    }
    containsPoint(t, e, r) {
      let n = h.intoRaw(t), s = g.intoRaw(e), a = h.intoRaw(r), l = this.intoRaw(), w = l.containsPoint(n, s, a);
      return n.free(), s.free(), a.free(), l.free(), w;
    }
    projectPoint(t, e, r, n) {
      let s = h.intoRaw(t), a = g.intoRaw(e), l = h.intoRaw(r), w = this.intoRaw(), p = bt.fromRaw(w.projectPoint(s, a, l, n));
      return s.free(), a.free(), l.free(), w.free(), p;
    }
    intersectsRay(t, e, r, n) {
      let s = h.intoRaw(e), a = g.intoRaw(r), l = h.intoRaw(t.origin), w = h.intoRaw(t.dir), p = this.intoRaw(), u = p.intersectsRay(s, a, l, w, n);
      return s.free(), a.free(), l.free(), w.free(), p.free(), u;
    }
    castRay(t, e, r, n, s) {
      let a = h.intoRaw(e), l = g.intoRaw(r), w = h.intoRaw(t.origin), p = h.intoRaw(t.dir), u = this.intoRaw(), _ = u.castRay(a, l, w, p, n, s);
      return a.free(), l.free(), w.free(), p.free(), u.free(), _;
    }
    castRayAndGetNormal(t, e, r, n, s) {
      let a = h.intoRaw(e), l = g.intoRaw(r), w = h.intoRaw(t.origin), p = h.intoRaw(t.dir), u = this.intoRaw(), _ = yt.fromRaw(u.castRayAndGetNormal(a, l, w, p, n, s));
      return a.free(), l.free(), w.free(), p.free(), u.free(), _;
    }
  };
  (function(o) {
    o[o.Ball = 0] = "Ball", o[o.Cuboid = 1] = "Cuboid", o[o.Capsule = 2] = "Capsule", o[o.Segment = 3] = "Segment", o[o.Polyline = 4] = "Polyline", o[o.Triangle = 5] = "Triangle", o[o.TriMesh = 6] = "TriMesh", o[o.HeightField = 7] = "HeightField", o[o.ConvexPolyhedron = 9] = "ConvexPolyhedron", o[o.Cylinder = 10] = "Cylinder", o[o.Cone = 11] = "Cone", o[o.RoundCuboid = 12] = "RoundCuboid", o[o.RoundTriangle = 13] = "RoundTriangle", o[o.RoundCylinder = 14] = "RoundCylinder", o[o.RoundCone = 15] = "RoundCone", o[o.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", o[o.HalfSpace = 17] = "HalfSpace";
  })(S || (S = {}));
  Re = class extends F {
    constructor(t) {
      super(), this.type = S.Ball, this.radius = t;
    }
    intoRaw() {
      return b.ball(this.radius);
    }
  };
  dr = class extends F {
    constructor(t) {
      super(), this.type = S.HalfSpace, this.normal = t;
    }
    intoRaw() {
      let t = h.intoRaw(this.normal), e = b.halfspace(t);
      return t.free(), e;
    }
  };
  ve = class extends F {
    constructor(t, e, r) {
      super(), this.type = S.Cuboid, this.halfExtents = h.new(t, e, r);
    }
    intoRaw() {
      return b.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
    }
  };
  Ce = class extends F {
    constructor(t, e, r, n) {
      super(), this.type = S.RoundCuboid, this.halfExtents = h.new(t, e, r), this.borderRadius = n;
    }
    intoRaw() {
      return b.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
    }
  };
  Ae = class extends F {
    constructor(t, e) {
      super(), this.type = S.Capsule, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return b.capsule(this.halfHeight, this.radius);
    }
  };
  je = class extends F {
    constructor(t, e) {
      super(), this.type = S.Segment, this.a = t, this.b = e;
    }
    intoRaw() {
      let t = h.intoRaw(this.a), e = h.intoRaw(this.b), r = b.segment(t, e);
      return t.free(), e.free(), r;
    }
  };
  Ee = class extends F {
    constructor(t, e, r) {
      super(), this.type = S.Triangle, this.a = t, this.b = e, this.c = r;
    }
    intoRaw() {
      let t = h.intoRaw(this.a), e = h.intoRaw(this.b), r = h.intoRaw(this.c), n = b.triangle(t, e, r);
      return t.free(), e.free(), r.free(), n;
    }
  };
  Ie = class extends F {
    constructor(t, e, r, n) {
      super(), this.type = S.RoundTriangle, this.a = t, this.b = e, this.c = r, this.borderRadius = n;
    }
    intoRaw() {
      let t = h.intoRaw(this.a), e = h.intoRaw(this.b), r = h.intoRaw(this.c), n = b.roundTriangle(t, e, r, this.borderRadius);
      return t.free(), e.free(), r.free(), n;
    }
  };
  xe = class extends F {
    constructor(t, e) {
      super(), this.type = S.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
    }
    intoRaw() {
      return b.polyline(this.vertices, this.indices);
    }
  };
  Pe = class extends F {
    constructor(t, e) {
      super(), this.type = S.TriMesh, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return b.trimesh(this.vertices, this.indices);
    }
  };
  Mt = class extends F {
    constructor(t, e) {
      super(), this.type = S.ConvexPolyhedron, this.vertices = t, this.indices = e;
    }
    intoRaw() {
      return this.indices ? b.convexMesh(this.vertices, this.indices) : b.convexHull(this.vertices);
    }
  };
  Tt = class extends F {
    constructor(t, e, r) {
      super(), this.type = S.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = r;
    }
    intoRaw() {
      return this.indices ? b.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : b.roundConvexHull(this.vertices, this.borderRadius);
    }
  };
  Me = class extends F {
    constructor(t, e, r, n) {
      super(), this.type = S.HeightField, this.nrows = t, this.ncols = e, this.heights = r, this.scale = n;
    }
    intoRaw() {
      let t = h.intoRaw(this.scale), e = b.heightfield(this.nrows, this.ncols, this.heights, t);
      return t.free(), e;
    }
  };
  Te = class extends F {
    constructor(t, e) {
      super(), this.type = S.Cylinder, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return b.cylinder(this.halfHeight, this.radius);
    }
  };
  He = class extends F {
    constructor(t, e, r) {
      super(), this.type = S.RoundCylinder, this.borderRadius = r, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return b.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
    }
  };
  ze = class extends F {
    constructor(t, e) {
      super(), this.type = S.Cone, this.halfHeight = t, this.radius = e;
    }
    intoRaw() {
      return b.cone(this.halfHeight, this.radius);
    }
  };
  Fe = class extends F {
    constructor(t, e, r) {
      super(), this.type = S.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = r;
    }
    intoRaw() {
      return b.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
  };
  (function(o) {
    o[o.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", o[o.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", o[o.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", o[o.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", o[o.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", o[o.FIXED_FIXED = 32] = "FIXED_FIXED", o[o.DEFAULT = 15] = "DEFAULT", o[o.ALL = 60943] = "ALL";
  })(Ht || (Ht = {}));
  oe = class {
    constructor(t, e, r, n) {
      this.colliderSet = t, this.handle = e, this._parent = r, this._shape = n;
    }
    finalizeDeserialization(t) {
      this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = F.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
      return this.ensureShapeIsCached(), this._shape;
    }
    isValid() {
      return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
      return h.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    rotation() {
      return g.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    isSensor() {
      return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(t) {
      this.colliderSet.raw.coSetSensor(this.handle, t);
    }
    setShape(t) {
      let e = t.intoRaw();
      this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
    }
    setEnabled(t) {
      this.colliderSet.raw.coSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(t) {
      this.colliderSet.raw.coSetRestitution(this.handle, t);
    }
    setFriction(t) {
      this.colliderSet.raw.coSetFriction(this.handle, t);
    }
    frictionCombineRule() {
      return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(t) {
      this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
    }
    restitutionCombineRule() {
      return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(t) {
      this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
    }
    setCollisionGroups(t) {
      this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
    }
    setSolverGroups(t) {
      this.colliderSet.raw.coSetSolverGroups(this.handle, t);
    }
    activeHooks() {
      return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(t) {
      this.colliderSet.raw.coSetActiveHooks(this.handle, t);
    }
    activeEvents() {
      return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(t) {
      this.colliderSet.raw.coSetActiveEvents(this.handle, t);
    }
    activeCollisionTypes() {
      return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(t) {
      return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
    }
    contactForceEventThreshold() {
      return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(t) {
      this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
    }
    setDensity(t) {
      this.colliderSet.raw.coSetDensity(this.handle, t);
    }
    setMass(t) {
      this.colliderSet.raw.coSetMass(this.handle, t);
    }
    setMassProperties(t, e, r, n) {
      let s = h.intoRaw(e), a = h.intoRaw(r), l = g.intoRaw(n);
      this.colliderSet.raw.coSetMassProperties(this.handle, t, s, a, l), s.free(), a.free(), l.free();
    }
    setTranslation(t) {
      this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
    }
    setTranslationWrtParent(t) {
      this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
    }
    setRotation(t) {
      this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
    }
    setRotationWrtParent(t) {
      this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
    }
    shapeType() {
      return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
      return h.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(t) {
      const e = h.intoRaw(t);
      this.colliderSet.raw.coSetHalfExtents(this.handle, e);
    }
    radius() {
      return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(t) {
      this.colliderSet.raw.coSetRadius(this.handle, t);
    }
    roundRadius() {
      return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(t) {
      this.colliderSet.raw.coSetRoundRadius(this.handle, t);
    }
    halfHeight() {
      return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(t) {
      this.colliderSet.raw.coSetHalfHeight(this.handle, t);
    }
    vertices() {
      return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
      return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
      return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
      let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
      return h.fromRaw(t);
    }
    heightfieldNRows() {
      return this.colliderSet.raw.coHeightfieldNRows(this.handle);
    }
    heightfieldNCols() {
      return this.colliderSet.raw.coHeightfieldNCols(this.handle);
    }
    parent() {
      return this._parent;
    }
    friction() {
      return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
      return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
      return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
      return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
      return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
      return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
      return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(t) {
      let e = h.intoRaw(t), r = this.colliderSet.raw.coContainsPoint(this.handle, e);
      return e.free(), r;
    }
    projectPoint(t, e) {
      let r = h.intoRaw(t), n = bt.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, r, e));
      return r.free(), n;
    }
    intersectsRay(t, e) {
      let r = h.intoRaw(t.origin), n = h.intoRaw(t.dir), s = this.colliderSet.raw.coIntersectsRay(this.handle, r, n, e);
      return r.free(), n.free(), s;
    }
    castShape(t, e, r, n, s, a, l) {
      let w = h.intoRaw(t), p = h.intoRaw(r), u = g.intoRaw(n), _ = h.intoRaw(s), m = e.intoRaw(), y = ct.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, w, m, p, u, _, a, l));
      return w.free(), p.free(), u.free(), _.free(), m.free(), y;
    }
    castCollider(t, e, r, n, s) {
      let a = h.intoRaw(t), l = h.intoRaw(r), w = gt.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, a, e.handle, l, n, s));
      return a.free(), l.free(), w;
    }
    intersectsShape(t, e, r) {
      let n = h.intoRaw(e), s = g.intoRaw(r), a = t.intoRaw(), l = this.colliderSet.raw.coIntersectsShape(this.handle, a, n, s);
      return n.free(), s.free(), a.free(), l;
    }
    contactShape(t, e, r, n) {
      let s = h.intoRaw(e), a = g.intoRaw(r), l = t.intoRaw(), w = st.fromRaw(this.colliderSet.raw.coContactShape(this.handle, l, s, a, n));
      return s.free(), a.free(), l.free(), w;
    }
    contactCollider(t, e) {
      return st.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
    }
    castRay(t, e, r) {
      let n = h.intoRaw(t.origin), s = h.intoRaw(t.dir), a = this.colliderSet.raw.coCastRay(this.handle, n, s, e, r);
      return n.free(), s.free(), a;
    }
    castRayAndGetNormal(t, e, r) {
      let n = h.intoRaw(t.origin), s = h.intoRaw(t.dir), a = yt.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, n, s, e, r));
      return n.free(), s.free(), a;
    }
  };
  (function(o) {
    o[o.Density = 0] = "Density", o[o.Mass = 1] = "Mass", o[o.MassProps = 2] = "MassProps";
  })(et || (et = {}));
  T = class {
    constructor(t) {
      this.enabled = true, this.shape = t, this.massPropsMode = et.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = g.identity(), this.translation = h.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = ut.Average, this.restitutionCombineRule = ut.Average, this.activeCollisionTypes = Ht.DEFAULT, this.activeEvents = 0, this.activeHooks = 0, this.mass = 0, this.centerOfMass = h.zeros(), this.contactForceEventThreshold = 0, this.principalAngularInertia = h.zeros(), this.angularInertiaLocalFrame = g.identity();
    }
    static ball(t) {
      const e = new Re(t);
      return new T(e);
    }
    static capsule(t, e) {
      const r = new Ae(t, e);
      return new T(r);
    }
    static segment(t, e) {
      const r = new je(t, e);
      return new T(r);
    }
    static triangle(t, e, r) {
      const n = new Ee(t, e, r);
      return new T(n);
    }
    static roundTriangle(t, e, r, n) {
      const s = new Ie(t, e, r, n);
      return new T(s);
    }
    static polyline(t, e) {
      const r = new xe(t, e);
      return new T(r);
    }
    static trimesh(t, e) {
      const r = new Pe(t, e);
      return new T(r);
    }
    static cuboid(t, e, r) {
      const n = new ve(t, e, r);
      return new T(n);
    }
    static roundCuboid(t, e, r, n) {
      const s = new Ce(t, e, r, n);
      return new T(s);
    }
    static heightfield(t, e, r, n) {
      const s = new Me(t, e, r, n);
      return new T(s);
    }
    static cylinder(t, e) {
      const r = new Te(t, e);
      return new T(r);
    }
    static roundCylinder(t, e, r) {
      const n = new He(t, e, r);
      return new T(n);
    }
    static cone(t, e) {
      const r = new ze(t, e);
      return new T(r);
    }
    static roundCone(t, e, r) {
      const n = new Fe(t, e, r);
      return new T(n);
    }
    static convexHull(t) {
      const e = new Mt(t, null);
      return new T(e);
    }
    static convexMesh(t, e) {
      const r = new Mt(t, e);
      return new T(r);
    }
    static roundConvexHull(t, e) {
      const r = new Tt(t, null, e);
      return new T(r);
    }
    static roundConvexMesh(t, e, r) {
      const n = new Tt(t, e, r);
      return new T(n);
    }
    setTranslation(t, e, r) {
      if (typeof t != "number" || typeof e != "number" || typeof r != "number")
        throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e,
        z: r
      }, this;
    }
    setRotation(t) {
      return g.copy(this.rotation, t), this;
    }
    setSensor(t) {
      return this.isSensor = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setDensity(t) {
      return this.massPropsMode = et.Density, this.density = t, this;
    }
    setMass(t) {
      return this.massPropsMode = et.Mass, this.mass = t, this;
    }
    setMassProperties(t, e, r, n) {
      return this.massPropsMode = et.MassProps, this.mass = t, h.copy(this.centerOfMass, e), h.copy(this.principalAngularInertia, r), g.copy(this.angularInertiaLocalFrame, n), this;
    }
    setRestitution(t) {
      return this.restitution = t, this;
    }
    setFriction(t) {
      return this.friction = t, this;
    }
    setFrictionCombineRule(t) {
      return this.frictionCombineRule = t, this;
    }
    setRestitutionCombineRule(t) {
      return this.restitutionCombineRule = t, this;
    }
    setCollisionGroups(t) {
      return this.collisionGroups = t, this;
    }
    setSolverGroups(t) {
      return this.solverGroups = t, this;
    }
    setActiveHooks(t) {
      return this.activeHooks = t, this;
    }
    setActiveEvents(t) {
      return this.activeEvents = t, this;
    }
    setActiveCollisionTypes(t) {
      return this.activeCollisionTypes = t, this;
    }
    setContactForceEventThreshold(t) {
      return this.contactForceEventThreshold = t, this;
    }
  };
  wr = class {
    constructor(t) {
      this.raw = t || new P(), this.map = new Ot(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new oe(this, e, null));
      });
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    castClosure(t) {
      return (e) => {
        if (t)
          return t(this.get(e));
      };
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createCollider(t, e, r) {
      let n = r != null && r != null;
      if (n && isNaN(r))
        throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
      let s = e.shape.intoRaw(), a = h.intoRaw(e.translation), l = g.intoRaw(e.rotation), w = h.intoRaw(e.centerOfMass), p = h.intoRaw(e.principalAngularInertia), u = g.intoRaw(e.angularInertiaLocalFrame), _ = this.raw.createCollider(e.enabled, s, a, l, e.massPropsMode, e.mass, w, p, u, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, n, n ? r : 0, t.raw);
      s.free(), a.free(), l.free(), w.free(), p.free(), u.free();
      let m = n ? t.get(r) : null, y = new oe(this, _, m, e.shape);
      return this.map.set(_, y), y;
    }
    remove(t, e, r, n) {
      this.raw.remove(t, e.raw, r.raw, n), this.unmap(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    get(t) {
      return this.map.get(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  };
  pr = class {
    constructor(t) {
      this.raw = t || new It();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    step(t, e, r, n, s, a, l, w, p, u, _, m) {
      let y = h.intoRaw(t);
      _ ? this.raw.stepWithEvents(y, e.raw, r.raw, n.raw, s.raw, a.raw, l.raw, w.raw, p.raw, u.raw, _.raw, m, m ? m.filterContactPair : null, m ? m.filterIntersectionPair : null) : this.raw.step(y, e.raw, r.raw, n.raw, s.raw, a.raw, l.raw, w.raw, p.raw, u.raw), y.free();
    }
  };
  (function(o) {
    o[o.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", o[o.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", o[o.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", o[o.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", o[o.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", o[o.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", o[o.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", o[o.ONLY_FIXED = 6] = "ONLY_FIXED";
  })(ae || (ae = {}));
  ur = class {
    constructor(t) {
      this.raw = t || new wt();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    update(t, e) {
      this.raw.update(t.raw, e.raw);
    }
    castRay(t, e, r, n, s, a, l, w, p, u) {
      let _ = h.intoRaw(r.origin), m = h.intoRaw(r.dir), y = qt.fromRaw(e, this.raw.castRay(t.raw, e.raw, _, m, n, s, a, l, w, p, u));
      return _.free(), m.free(), y;
    }
    castRayAndGetNormal(t, e, r, n, s, a, l, w, p, u) {
      let _ = h.intoRaw(r.origin), m = h.intoRaw(r.dir), y = ft.fromRaw(e, this.raw.castRayAndGetNormal(t.raw, e.raw, _, m, n, s, a, l, w, p, u));
      return _.free(), m.free(), y;
    }
    intersectionsWithRay(t, e, r, n, s, a, l, w, p, u, _) {
      let m = h.intoRaw(r.origin), y = h.intoRaw(r.dir), I = (N) => a(ft.fromRaw(e, N));
      this.raw.intersectionsWithRay(t.raw, e.raw, m, y, n, s, I, l, w, p, u, _), m.free(), y.free();
    }
    intersectionWithShape(t, e, r, n, s, a, l, w, p, u) {
      let _ = h.intoRaw(r), m = g.intoRaw(n), y = s.intoRaw(), I = this.raw.intersectionWithShape(t.raw, e.raw, _, m, y, a, l, w, p, u);
      return _.free(), m.free(), y.free(), I;
    }
    projectPoint(t, e, r, n, s, a, l, w, p) {
      let u = h.intoRaw(r), _ = _t.fromRaw(e, this.raw.projectPoint(t.raw, e.raw, u, n, s, a, l, w, p));
      return u.free(), _;
    }
    projectPointAndGetFeature(t, e, r, n, s, a, l, w) {
      let p = h.intoRaw(r), u = _t.fromRaw(e, this.raw.projectPointAndGetFeature(t.raw, e.raw, p, n, s, a, l, w));
      return p.free(), u;
    }
    intersectionsWithPoint(t, e, r, n, s, a, l, w, p) {
      let u = h.intoRaw(r);
      this.raw.intersectionsWithPoint(t.raw, e.raw, u, n, s, a, l, w, p), u.free();
    }
    castShape(t, e, r, n, s, a, l, w, p, u, _, m, y) {
      let I = h.intoRaw(r), N = g.intoRaw(n), V = h.intoRaw(s), J = a.intoRaw(), Q = gt.fromRaw(e, this.raw.castShape(t.raw, e.raw, I, N, V, J, l, w, p, u, _, m, y));
      return I.free(), N.free(), V.free(), J.free(), Q;
    }
    intersectionsWithShape(t, e, r, n, s, a, l, w, p, u, _) {
      let m = h.intoRaw(r), y = g.intoRaw(n), I = s.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, m, y, I, a, l, w, p, u, _), m.free(), y.free(), I.free();
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      let n = h.intoRaw(t), s = h.intoRaw(e);
      this.raw.collidersWithAabbIntersectingAabb(n, s, r), n.free(), s.free();
    }
  };
  ce = class {
    constructor(t) {
      this.raw = t || new Pt();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    serializeAll(t, e, r, n, s, a, l, w, p) {
      let u = h.intoRaw(t);
      const _ = this.raw.serializeAll(u, e.raw, r.raw, n.raw, s.raw, a.raw, l.raw, w.raw, p.raw);
      return u.free(), _;
    }
    deserializeAll(t) {
      return Vt.fromRaw(this.raw.deserializeAll(t));
    }
  };
  _r = class {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  };
  fr = class {
    constructor(t) {
      this.raw = t || new jt();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    render(t, e, r, n, s) {
      this.raw.render(t.raw, e.raw, r.raw, n.raw, s.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  };
  mr = class {
  };
  br = class {
    constructor(t, e, r, n, s) {
      this.params = e, this.bodies = r, this.colliders = n, this.queries = s, this.raw = new Et(t), this.rawCharacterCollision = new ht(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
    }
    free() {
      this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
      return this.raw.up();
    }
    setUp(t) {
      let e = h.intoRaw(t);
      return this.raw.setUp(e);
    }
    applyImpulsesToDynamicBodies() {
      return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(t) {
      this._applyImpulsesToDynamicBodies = t;
    }
    characterMass() {
      return this._characterMass;
    }
    setCharacterMass(t) {
      this._characterMass = t;
    }
    offset() {
      return this.raw.offset();
    }
    setOffset(t) {
      this.raw.setOffset(t);
    }
    slideEnabled() {
      return this.raw.slideEnabled();
    }
    setSlideEnabled(t) {
      this.raw.setSlideEnabled(t);
    }
    autostepMaxHeight() {
      return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
      return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
      return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
      return this.raw.autostepEnabled();
    }
    enableAutostep(t, e, r) {
      this.raw.enableAutostep(t, e, r);
    }
    disableAutostep() {
      return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
      return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(t) {
      this.raw.setMaxSlopeClimbAngle(t);
    }
    minSlopeSlideAngle() {
      return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(t) {
      this.raw.setMinSlopeSlideAngle(t);
    }
    snapToGroundDistance() {
      return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(t) {
      this.raw.enableSnapToGround(t);
    }
    disableSnapToGround() {
      this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
      return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(t, e, r, n, s) {
      let a = h.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, t.handle, a, this._applyImpulsesToDynamicBodies, this._characterMass, r, n, this.colliders.castClosure(s)), a.free();
    }
    computedMovement() {
      return h.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
      return this.raw.computedGrounded();
    }
    numComputedCollisions() {
      return this.raw.numComputedCollisions();
    }
    computedCollision(t, e) {
      if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
        let r = this.rawCharacterCollision;
        return e = e ?? new mr(), e.translationApplied = h.fromRaw(r.translationApplied()), e.translationRemaining = h.fromRaw(r.translationRemaining()), e.toi = r.toi(), e.witness1 = h.fromRaw(r.worldWitness1()), e.witness2 = h.fromRaw(r.worldWitness2()), e.normal1 = h.fromRaw(r.worldNormal1()), e.normal2 = h.fromRaw(r.worldNormal2()), e.collider = this.colliders.get(r.handle()), e;
      } else
        return null;
    }
  };
  Vt = class {
    constructor(t, e, r, n, s, a, l, w, p, u, _, m, y, I) {
      this.gravity = t, this.integrationParameters = new Ke(e), this.islands = new ar(r), this.broadPhase = new cr(n), this.narrowPhase = new lr(s), this.bodies = new Xe(a), this.colliders = new wr(l), this.impulseJoints = new tr(w), this.multibodyJoints = new sr(p), this.ccdSolver = new or(u), this.queryPipeline = new ur(_), this.physicsPipeline = new pr(m), this.serializationPipeline = new ce(y), this.debugRenderPipeline = new fr(I), this.characterControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0;
    }
    static fromRaw(t) {
      return t ? new Vt(h.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new ce().deserializeAll(t);
    }
    debugRender() {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new _r(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(t, e) {
      this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e), this.queryPipeline.update(this.bodies, this.colliders);
    }
    propagateModifiedBodyPositionsToColliders() {
      this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    updateSceneQueries() {
      this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.bodies, this.colliders);
    }
    get timestep() {
      return this.integrationParameters.dt;
    }
    set timestep(t) {
      this.integrationParameters.dt = t;
    }
    get maxVelocityIterations() {
      return this.integrationParameters.maxVelocityIterations;
    }
    set maxVelocityIterations(t) {
      this.integrationParameters.maxVelocityIterations = t;
    }
    get maxVelocityFrictionIterations() {
      return this.integrationParameters.maxVelocityFrictionIterations;
    }
    set maxVelocityFrictionIterations(t) {
      this.integrationParameters.maxVelocityFrictionIterations = t;
    }
    get maxStabilizationIterations() {
      return this.integrationParameters.maxStabilizationIterations;
    }
    set maxStabilizationIterations(t) {
      this.integrationParameters.maxStabilizationIterations = t;
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new br(t, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createCollider(t, e) {
      let r = e ? e.handle : void 0;
      return this.colliders.createCollider(this.bodies, t, r);
    }
    createImpulseJoint(t, e, r, n) {
      return this.impulseJoints.createJoint(this.bodies, t, e.handle, r.handle, n);
    }
    createMultibodyJoint(t, e, r, n) {
      return this.multibodyJoints.createJoint(t, e.handle, r.handle, n);
    }
    getRigidBody(t) {
      return this.bodies.get(t);
    }
    getCollider(t) {
      return this.colliders.get(t);
    }
    getImpulseJoint(t) {
      return this.impulseJoints.get(t);
    }
    getMultibodyJoint(t) {
      return this.multibodyJoints.get(t);
    }
    removeRigidBody(t) {
      this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(t, e) {
      this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
    }
    removeImpulseJoint(t, e) {
      this.impulseJoints && this.impulseJoints.remove(t.handle, e);
    }
    removeMultibodyJoint(t, e) {
      this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
    }
    forEachCollider(t) {
      this.colliders.forEach(t);
    }
    forEachRigidBody(t) {
      this.bodies.forEach(t);
    }
    forEachActiveRigidBody(t) {
      this.bodies.forEachActiveRigidBody(this.islands, t);
    }
    castRay(t, e, r, n, s, a, l, w) {
      return this.queryPipeline.castRay(this.bodies, this.colliders, t, e, r, n, s, a ? a.handle : null, l ? l.handle : null, this.colliders.castClosure(w));
    }
    castRayAndGetNormal(t, e, r, n, s, a, l, w) {
      return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, t, e, r, n, s, a ? a.handle : null, l ? l.handle : null, this.colliders.castClosure(w));
    }
    intersectionsWithRay(t, e, r, n, s, a, l, w, p) {
      this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, t, e, r, n, s, a, l ? l.handle : null, w ? w.handle : null, this.colliders.castClosure(p));
    }
    intersectionWithShape(t, e, r, n, s, a, l, w) {
      let p = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, t, e, r, n, s, a ? a.handle : null, l ? l.handle : null, this.colliders.castClosure(w));
      return p != null ? this.colliders.get(p) : null;
    }
    projectPoint(t, e, r, n, s, a, l) {
      return this.queryPipeline.projectPoint(this.bodies, this.colliders, t, e, r, n, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, r, n, s, a) {
      return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, t, e, r, n ? n.handle : null, s ? s.handle : null, this.colliders.castClosure(a));
    }
    intersectionsWithPoint(t, e, r, n, s, a, l) {
      this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, t, this.colliders.castClosure(e), r, n, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, r, n, s, a, l, w, p, u, _) {
      return this.queryPipeline.castShape(this.bodies, this.colliders, t, e, r, n, s, a, l, w, p ? p.handle : null, u ? u.handle : null, this.colliders.castClosure(_));
    }
    intersectionsWithShape(t, e, r, n, s, a, l, w, p) {
      this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, t, e, r, this.colliders.castClosure(n), s, a, l ? l.handle : null, w ? w.handle : null, this.colliders.castClosure(p));
    }
    collidersWithAabbIntersectingAabb(t, e, r) {
      this.queryPipeline.collidersWithAabbIntersectingAabb(t, e, this.colliders.castClosure(r));
    }
    contactsWith(t, e) {
      this.narrowPhase.contactsWith(t.handle, this.colliders.castClosure(e));
    }
    intersectionsWith(t, e) {
      this.narrowPhase.intersectionsWith(t.handle, this.colliders.castClosure(e));
    }
    contactPair(t, e, r) {
      this.narrowPhase.contactPair(t.handle, e.handle, r);
    }
    intersectionPair(t, e) {
      return this.narrowPhase.intersectionPair(t.handle, e.handle);
    }
  };
  (function(o) {
    o[o.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", o[o.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(le || (le = {}));
  yr = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
      return this.raw.collider1();
    }
    collider2() {
      return this.raw.collider2();
    }
    totalForce() {
      return h.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
      return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
      return h.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
      return this.raw.max_force_magnitude();
    }
  };
  Ql = class {
    constructor(t, e) {
      this.raw = e || new dt(t);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(t) {
      this.raw.drainCollisionEvents(t);
    }
    drainContactForceEvents(t) {
      let e = new yr();
      this.raw.drainContactForceEvents((r) => {
        e.raw = r, t(e), e.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  };
  (function(o) {
    o[o.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", o[o.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(he || (he = {}));
  (function(o) {
    o[o.EMPTY = 0] = "EMPTY", o[o.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(de || (de = {}));
  th = function() {
    return jr();
  };
  eh = Object.freeze(Object.defineProperty({
    __proto__: null,
    get ActiveCollisionTypes() {
      return Ht;
    },
    get ActiveEvents() {
      return le;
    },
    get ActiveHooks() {
      return he;
    },
    Ball: Re,
    BroadPhase: cr,
    CCDSolver: or,
    Capsule: Ae,
    CharacterCollision: mr,
    get CoefficientCombineRule() {
      return ut;
    },
    Collider: oe,
    ColliderDesc: T,
    ColliderSet: wr,
    Cone: ze,
    ConvexPolyhedron: Mt,
    Cuboid: ve,
    Cylinder: Te,
    DebugRenderBuffers: _r,
    DebugRenderPipeline: fr,
    EventQueue: Ql,
    get FeatureType() {
      return ot;
    },
    FixedImpulseJoint: Ye,
    FixedMultibodyJoint: er,
    HalfSpace: dr,
    Heightfield: Me,
    ImpulseJoint: Z,
    ImpulseJointSet: tr,
    IntegrationParameters: Ke,
    IslandManager: ar,
    JointData: nt,
    get JointType() {
      return z;
    },
    KinematicCharacterController: br,
    get MassPropsMode() {
      return et;
    },
    get MotorModel() {
      return se;
    },
    MultibodyJoint: $,
    MultibodyJointSet: sr,
    NarrowPhase: lr,
    PhysicsPipeline: pr,
    PointColliderProjection: _t,
    PointProjection: bt,
    Polyline: xe,
    PrismaticImpulseJoint: Ze,
    PrismaticMultibodyJoint: rr,
    Quaternion: ne,
    get QueryFilterFlags() {
      return ae;
    },
    QueryPipeline: ur,
    Ray: $l,
    RayColliderIntersection: ft,
    RayColliderToi: qt,
    RayIntersection: yt,
    RevoluteImpulseJoint: $e,
    RevoluteMultibodyJoint: nr,
    RigidBody: ie,
    RigidBodyDesc: B,
    RigidBodySet: Xe,
    get RigidBodyType() {
      return G;
    },
    RotationOps: g,
    RoundCone: Fe,
    RoundConvexPolyhedron: Tt,
    RoundCuboid: Ce,
    RoundCylinder: He,
    RoundTriangle: Ie,
    Segment: je,
    SerializationPipeline: ce,
    Shape: F,
    ShapeColliderTOI: gt,
    ShapeContact: st,
    ShapeTOI: ct,
    get ShapeType() {
      return S;
    },
    get SolverFlags() {
      return de;
    },
    SphericalImpulseJoint: Qe,
    SphericalMultibodyJoint: ir,
    TempContactForceEvent: yr,
    TempContactManifold: hr,
    TriMesh: Pe,
    Triangle: Ee,
    UnitImpulseJoint: ge,
    UnitMultibodyJoint: Se,
    Vector3: Ue,
    VectorOps: h,
    World: Vt,
    version: th
  }, Symbol.toStringTag, {
    value: "Module"
  }));
})();
export {
  Ht as ActiveCollisionTypes,
  le as ActiveEvents,
  he as ActiveHooks,
  Re as Ball,
  cr as BroadPhase,
  or as CCDSolver,
  Ae as Capsule,
  mr as CharacterCollision,
  ut as CoefficientCombineRule,
  oe as Collider,
  T as ColliderDesc,
  wr as ColliderSet,
  ze as Cone,
  Mt as ConvexPolyhedron,
  ve as Cuboid,
  Te as Cylinder,
  _r as DebugRenderBuffers,
  fr as DebugRenderPipeline,
  Ql as EventQueue,
  ot as FeatureType,
  Ye as FixedImpulseJoint,
  er as FixedMultibodyJoint,
  dr as HalfSpace,
  Me as Heightfield,
  Z as ImpulseJoint,
  tr as ImpulseJointSet,
  Ke as IntegrationParameters,
  ar as IslandManager,
  nt as JointData,
  z as JointType,
  br as KinematicCharacterController,
  et as MassPropsMode,
  se as MotorModel,
  $ as MultibodyJoint,
  sr as MultibodyJointSet,
  lr as NarrowPhase,
  pr as PhysicsPipeline,
  _t as PointColliderProjection,
  bt as PointProjection,
  xe as Polyline,
  Ze as PrismaticImpulseJoint,
  rr as PrismaticMultibodyJoint,
  ne as Quaternion,
  ae as QueryFilterFlags,
  ur as QueryPipeline,
  $l as Ray,
  ft as RayColliderIntersection,
  qt as RayColliderToi,
  yt as RayIntersection,
  $e as RevoluteImpulseJoint,
  nr as RevoluteMultibodyJoint,
  ie as RigidBody,
  B as RigidBodyDesc,
  Xe as RigidBodySet,
  G as RigidBodyType,
  g as RotationOps,
  Fe as RoundCone,
  Tt as RoundConvexPolyhedron,
  Ce as RoundCuboid,
  He as RoundCylinder,
  Ie as RoundTriangle,
  je as Segment,
  ce as SerializationPipeline,
  F as Shape,
  gt as ShapeColliderTOI,
  st as ShapeContact,
  ct as ShapeTOI,
  S as ShapeType,
  de as SolverFlags,
  Qe as SphericalImpulseJoint,
  ir as SphericalMultibodyJoint,
  yr as TempContactForceEvent,
  hr as TempContactManifold,
  Pe as TriMesh,
  Ee as Triangle,
  ge as UnitImpulseJoint,
  Se as UnitMultibodyJoint,
  Ue as Vector3,
  h as VectorOps,
  Vt as World,
  __tla,
  eh as default,
  th as version
};
