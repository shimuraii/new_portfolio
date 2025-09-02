(async () => {
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver((i) => {
      for (const r of i) if (r.type === "childList") for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(i) {
      const r = {};
      return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
    }
    function n(i) {
      if (i.ep) return;
      i.ep = true;
      const r = t(i);
      fetch(i.href, r);
    }
  })();
  const Fa = "149", Fi = {
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  }, Ui = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  }, Uf = 0, sc = 1, Bf = 2, $h = 1, Zh = 2, Xs = 3, Fn = 0, Qt = 1, Dn = 2, Qn = 0, ss = 1, rc = 2, oc = 3, ac = 4, Vf = 5, Qi = 100, zf = 101, Gf = 102, lc = 103, cc = 104, Hf = 200, Wf = 201, jf = 202, qf = 203, Jh = 204, Qh = 205, Xf = 206, Kf = 207, Yf = 208, $f = 209, Zf = 210, Jf = 0, Qf = 1, em = 2, ya = 3, tm = 4, nm = 5, im = 6, sm = 7, eu = 0, rm = 1, om = 2, Nn = 0, am = 1, lm = 2, cm = 3, tu = 4, hm = 5, nu = 300, as = 301, ls = 302, wa = 303, Ma = 304, Qr = 306, cs = 1e3, rn = 1001, Kr = 1002, At = 1003, Sa = 1004, Wr = 1005, qt = 1006, iu = 1007, bi = 1008, xi = 1009, um = 1010, dm = 1011, su = 1012, pm = 1013, mi = 1014, Jn = 1015, Js = 1016, fm = 1017, mm = 1018, rs = 1020, gm = 1021, on = 1023, _m = 1024, vm = 1025, _i = 1026, hs = 1027, bm = 1028, xm = 1029, ym = 1030, wm = 1031, Mm = 1033, Io = 33776, ko = 33777, No = 33778, Oo = 33779, hc = 35840, uc = 35841, dc = 35842, pc = 35843, Sm = 36196, fc = 37492, mc = 37496, gc = 37808, _c = 37809, vc = 37810, bc = 37811, xc = 37812, yc = 37813, wc = 37814, Mc = 37815, Sc = 37816, Ec = 37817, Tc = 37818, Cc = 37819, Ac = 37820, Pc = 37821, Fo = 36492, Em = 36283, Lc = 36284, Rc = 36285, Dc = 36286, Tm = 2200, Cm = 2201, Am = 2202, Qs = 2300, us = 2301, Uo = 2302, es = 2400, ts = 2401, Yr = 2402, Ua = 2500, Pm = 2501, Lm = 0, ru = 1, Ea = 2, yi = 3e3, tt = 3001, Rm = 3200, Dm = 3201, ou = 0, Im = 1, gn = "srgb", er = "srgb-linear", Bo = 7680, km = 519, Ta = 35044, Ic = "300 es", Ca = 1035;
  class ei {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      const n = this._listeners;
      n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (this._listeners === void 0) return false;
      const n = this._listeners;
      return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      if (this._listeners === void 0) return;
      const i = this._listeners[e];
      if (i !== void 0) {
        const r = i.indexOf(t);
        r !== -1 && i.splice(r, 1);
      }
    }
    dispatchEvent(e) {
      if (this._listeners === void 0) return;
      const n = this._listeners[e.type];
      if (n !== void 0) {
        e.target = this;
        const i = n.slice(0);
        for (let r = 0, l = i.length; r < l; r++) i[r].call(this, e);
        e.target = null;
      }
    }
  }
  const Ot = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff"
  ];
  let kc = 1234567;
  const $s = Math.PI / 180, tr = 180 / Math.PI;
  function un() {
    const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (Ot[o & 255] + Ot[o >> 8 & 255] + Ot[o >> 16 & 255] + Ot[o >> 24 & 255] + "-" + Ot[e & 255] + Ot[e >> 8 & 255] + "-" + Ot[e >> 16 & 15 | 64] + Ot[e >> 24 & 255] + "-" + Ot[t & 63 | 128] + Ot[t >> 8 & 255] + "-" + Ot[t >> 16 & 255] + Ot[t >> 24 & 255] + Ot[n & 255] + Ot[n >> 8 & 255] + Ot[n >> 16 & 255] + Ot[n >> 24 & 255]).toLowerCase();
  }
  function Ft(o, e, t) {
    return Math.max(e, Math.min(t, o));
  }
  function Ba(o, e) {
    return (o % e + e) % e;
  }
  function Nm(o, e, t, n, i) {
    return n + (o - e) * (i - n) / (t - e);
  }
  function Om(o, e, t) {
    return o !== e ? (t - o) / (e - o) : 0;
  }
  function Zs(o, e, t) {
    return (1 - t) * o + t * e;
  }
  function Fm(o, e, t, n) {
    return Zs(o, e, 1 - Math.exp(-t * n));
  }
  function Um(o, e = 1) {
    return e - Math.abs(Ba(o, e * 2) - e);
  }
  function Bm(o, e, t) {
    return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * (3 - 2 * o));
  }
  function Vm(o, e, t) {
    return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * o * (o * (o * 6 - 15) + 10));
  }
  function zm(o, e) {
    return o + Math.floor(Math.random() * (e - o + 1));
  }
  function Gm(o, e) {
    return o + Math.random() * (e - o);
  }
  function Hm(o) {
    return o * (0.5 - Math.random());
  }
  function Wm(o) {
    o !== void 0 && (kc = o);
    let e = kc += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
  }
  function jm(o) {
    return o * $s;
  }
  function qm(o) {
    return o * tr;
  }
  function Aa(o) {
    return (o & o - 1) === 0 && o !== 0;
  }
  function au(o) {
    return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
  }
  function $r(o) {
    return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
  }
  function Xm(o, e, t, n, i) {
    const r = Math.cos, l = Math.sin, c = r(t / 2), u = l(t / 2), d = r((e + n) / 2), f = l((e + n) / 2), m = r((e - n) / 2), g = l((e - n) / 2), b = r((n - e) / 2), y = l((n - e) / 2);
    switch (i) {
      case "XYX":
        o.set(c * f, u * m, u * g, c * d);
        break;
      case "YZY":
        o.set(u * g, c * f, u * m, c * d);
        break;
      case "ZXZ":
        o.set(u * m, u * g, c * f, c * d);
        break;
      case "XZX":
        o.set(c * f, u * y, u * b, c * d);
        break;
      case "YXY":
        o.set(u * b, c * f, u * y, c * d);
        break;
      case "ZYZ":
        o.set(u * y, u * b, c * f, c * d);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
  }
  function In(o, e) {
    switch (e.constructor) {
      case Float32Array:
        return o;
      case Uint16Array:
        return o / 65535;
      case Uint8Array:
        return o / 255;
      case Int16Array:
        return Math.max(o / 32767, -1);
      case Int8Array:
        return Math.max(o / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function st(o, e) {
    switch (e.constructor) {
      case Float32Array:
        return o;
      case Uint16Array:
        return Math.round(o * 65535);
      case Uint8Array:
        return Math.round(o * 255);
      case Int16Array:
        return Math.round(o * 32767);
      case Int8Array:
        return Math.round(o * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var Km = Object.freeze({
    __proto__: null,
    DEG2RAD: $s,
    RAD2DEG: tr,
    ceilPowerOfTwo: au,
    clamp: Ft,
    damp: Fm,
    degToRad: jm,
    denormalize: In,
    euclideanModulo: Ba,
    floorPowerOfTwo: $r,
    generateUUID: un,
    inverseLerp: Om,
    isPowerOfTwo: Aa,
    lerp: Zs,
    mapLinear: Nm,
    normalize: st,
    pingpong: Um,
    radToDeg: qm,
    randFloat: Gm,
    randFloatSpread: Hm,
    randInt: zm,
    seededRandom: Wm,
    setQuaternionFromProperEuler: Xm,
    smootherstep: Vm,
    smoothstep: Bm
  });
  class ke {
    constructor(e = 0, t = 0) {
      ke.prototype.isVector2 = true, this.x = e, this.y = t;
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return this.x = e, this.y = t, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this;
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, i = e.elements;
      return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, l = this.y - e.y;
      return this.x = r * n - l * i + e.x, this.y = r * i + l * n + e.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Zt {
    constructor() {
      Zt.prototype.isMatrix3 = true, this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
    }
    set(e, t, n, i, r, l, c, u, d) {
      const f = this.elements;
      return f[0] = e, f[1] = i, f[2] = c, f[3] = t, f[4] = r, f[5] = u, f[6] = n, f[7] = l, f[8] = d, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, r = this.elements, l = n[0], c = n[3], u = n[6], d = n[1], f = n[4], m = n[7], g = n[2], b = n[5], y = n[8], _ = i[0], v = i[3], w = i[6], C = i[1], S = i[4], M = i[7], P = i[2], N = i[5], F = i[8];
      return r[0] = l * _ + c * C + u * P, r[3] = l * v + c * S + u * N, r[6] = l * w + c * M + u * F, r[1] = d * _ + f * C + m * P, r[4] = d * v + f * S + m * N, r[7] = d * w + f * M + m * F, r[2] = g * _ + b * C + y * P, r[5] = g * v + b * S + y * N, r[8] = g * w + b * M + y * F, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], l = e[4], c = e[5], u = e[6], d = e[7], f = e[8];
      return t * l * f - t * c * d - n * r * f + n * c * u + i * r * d - i * l * u;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], l = e[4], c = e[5], u = e[6], d = e[7], f = e[8], m = f * l - c * d, g = c * u - f * r, b = d * r - l * u, y = t * m + n * g + i * b;
      if (y === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const _ = 1 / y;
      return e[0] = m * _, e[1] = (i * d - f * n) * _, e[2] = (c * n - i * l) * _, e[3] = g * _, e[4] = (f * t - i * u) * _, e[5] = (i * r - c * t) * _, e[6] = b * _, e[7] = (n * u - d * t) * _, e[8] = (l * t - n * r) * _, this;
    }
    transpose() {
      let e;
      const t = this.elements;
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
    }
    setUvTransform(e, t, n, i, r, l, c) {
      const u = Math.cos(r), d = Math.sin(r);
      return this.set(n * u, n * d, -n * (u * l + d * c) + l + e, -i * d, i * u, -i * (-d * l + u * c) + c + t, 0, 0, 1), this;
    }
    scale(e, t) {
      return this.premultiply(Vo.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(Vo.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(Vo.makeTranslation(e, t)), this;
    }
    makeTranslation(e, t) {
      return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
    }
    makeRotation(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
      return true;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Vo = new Zt();
  function lu(o) {
    for (let e = o.length - 1; e >= 0; --e) if (o[e] >= 65535) return true;
    return false;
  }
  function nr(o) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", o);
  }
  function vi(o) {
    return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
  }
  function jr(o) {
    return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
  }
  const zo = {
    [gn]: {
      [er]: vi
    },
    [er]: {
      [gn]: jr
    }
  }, Vt = {
    legacyMode: true,
    get workingColorSpace() {
      return er;
    },
    set workingColorSpace(o) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function(o, e, t) {
      if (this.legacyMode || e === t || !e || !t) return o;
      if (zo[e] && zo[e][t] !== void 0) {
        const n = zo[e][t];
        return o.r = n(o.r), o.g = n(o.g), o.b = n(o.b), o;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function(o, e) {
      return this.convert(o, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function(o, e) {
      return this.convert(o, e, this.workingColorSpace);
    }
  }, cu = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, wt = {
    r: 0,
    g: 0,
    b: 0
  }, ln = {
    h: 0,
    s: 0,
    l: 0
  }, yr = {
    h: 0,
    s: 0,
    l: 0
  };
  function Go(o, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
  }
  function wr(o, e) {
    return e.r = o.r, e.g = o.g, e.b = o.b, e;
  }
  class He {
    constructor(e, t, n) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
    }
    set(e) {
      return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
    }
    setScalar(e) {
      return this.r = e, this.g = e, this.b = e, this;
    }
    setHex(e, t = gn) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Vt.toWorkingColorSpace(this, t), this;
    }
    setRGB(e, t, n, i = Vt.workingColorSpace) {
      return this.r = e, this.g = t, this.b = n, Vt.toWorkingColorSpace(this, i), this;
    }
    setHSL(e, t, n, i = Vt.workingColorSpace) {
      if (e = Ba(e, 1), t = Ft(t, 0, 1), n = Ft(n, 0, 1), t === 0) this.r = this.g = this.b = n;
      else {
        const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - r;
        this.r = Go(l, r, e + 1 / 3), this.g = Go(l, r, e), this.b = Go(l, r, e - 1 / 3);
      }
      return Vt.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = gn) {
      function n(r) {
        r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
      }
      let i;
      if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
        let r;
        const l = i[1], c = i[2];
        switch (l) {
          case "rgb":
          case "rgba":
            if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, Vt.toWorkingColorSpace(this, t), n(r[4]), this;
            if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, Vt.toWorkingColorSpace(this, t), n(r[4]), this;
            break;
          case "hsl":
          case "hsla":
            if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)) {
              const u = parseFloat(r[1]) / 360, d = parseFloat(r[2]) / 100, f = parseFloat(r[3]) / 100;
              return n(r[4]), this.setHSL(u, d, f, t);
            }
            break;
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
        const r = i[1], l = r.length;
        if (l === 3) return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, Vt.toWorkingColorSpace(this, t), this;
        if (l === 6) return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, Vt.toWorkingColorSpace(this, t), this;
      }
      return e && e.length > 0 ? this.setColorName(e, t) : this;
    }
    setColorName(e, t = gn) {
      const n = cu[e.toLowerCase()];
      return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
      return this.r = vi(e.r), this.g = vi(e.g), this.b = vi(e.b), this;
    }
    copyLinearToSRGB(e) {
      return this.r = jr(e.r), this.g = jr(e.g), this.b = jr(e.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = gn) {
      return Vt.fromWorkingColorSpace(wr(this, wt), e), Ft(wt.r * 255, 0, 255) << 16 ^ Ft(wt.g * 255, 0, 255) << 8 ^ Ft(wt.b * 255, 0, 255) << 0;
    }
    getHexString(e = gn) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = Vt.workingColorSpace) {
      Vt.fromWorkingColorSpace(wr(this, wt), t);
      const n = wt.r, i = wt.g, r = wt.b, l = Math.max(n, i, r), c = Math.min(n, i, r);
      let u, d;
      const f = (c + l) / 2;
      if (c === l) u = 0, d = 0;
      else {
        const m = l - c;
        switch (d = f <= 0.5 ? m / (l + c) : m / (2 - l - c), l) {
          case n:
            u = (i - r) / m + (i < r ? 6 : 0);
            break;
          case i:
            u = (r - n) / m + 2;
            break;
          case r:
            u = (n - i) / m + 4;
            break;
        }
        u /= 6;
      }
      return e.h = u, e.s = d, e.l = f, e;
    }
    getRGB(e, t = Vt.workingColorSpace) {
      return Vt.fromWorkingColorSpace(wr(this, wt), t), e.r = wt.r, e.g = wt.g, e.b = wt.b, e;
    }
    getStyle(e = gn) {
      return Vt.fromWorkingColorSpace(wr(this, wt), e), e !== gn ? `color(${e} ${wt.r} ${wt.g} ${wt.b})` : `rgb(${wt.r * 255 | 0},${wt.g * 255 | 0},${wt.b * 255 | 0})`;
    }
    offsetHSL(e, t, n) {
      return this.getHSL(ln), ln.h += e, ln.s += t, ln.l += n, this.setHSL(ln.h, ln.s, ln.l), this;
    }
    add(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this;
    }
    addColors(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
    }
    addScalar(e) {
      return this.r += e, this.g += e, this.b += e, this;
    }
    sub(e) {
      return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
    }
    multiply(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
    }
    multiplyScalar(e) {
      return this.r *= e, this.g *= e, this.b *= e, this;
    }
    lerp(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
    }
    lerpColors(e, t, n) {
      return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
    }
    lerpHSL(e, t) {
      this.getHSL(ln), e.getHSL(yr);
      const n = Zs(ln.h, yr.h, t), i = Zs(ln.s, yr.s, t), r = Zs(ln.l, yr.l, t);
      return this.setHSL(n, i, r), this;
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
    }
    fromBufferAttribute(e, t) {
      return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  He.NAMES = cu;
  let Bi;
  class hu {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        Bi === void 0 && (Bi = nr("canvas")), Bi.width = e.width, Bi.height = e.height;
        const n = Bi.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Bi;
      }
      return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
        const t = nr("canvas");
        t.width = e.width, t.height = e.height;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
        for (let l = 0; l < r.length; l++) r[l] = vi(r[l] / 255) * 255;
        return n.putImageData(i, 0, 0), t;
      } else if (e.data) {
        const t = e.data.slice(0);
        for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(vi(t[n] / 255) * 255) : t[n] = vi(t[n]);
        return {
          data: t,
          width: e.width,
          height: e.height
        };
      } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
  }
  class uu {
    constructor(e = null) {
      this.isSource = true, this.uuid = un(), this.data = e, this.version = 0;
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      const n = {
        uuid: this.uuid,
        url: ""
      }, i = this.data;
      if (i !== null) {
        let r;
        if (Array.isArray(i)) {
          r = [];
          for (let l = 0, c = i.length; l < c; l++) i[l].isDataTexture ? r.push(Ho(i[l].image)) : r.push(Ho(i[l]));
        } else r = Ho(i);
        n.url = r;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function Ho(o) {
    return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? hu.getDataURL(o) : o.data ? {
      data: Array.from(o.data),
      width: o.width,
      height: o.height,
      type: o.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let Ym = 0;
  class Dt extends ei {
    constructor(e = Dt.DEFAULT_IMAGE, t = Dt.DEFAULT_MAPPING, n = rn, i = rn, r = qt, l = bi, c = on, u = xi, d = Dt.DEFAULT_ANISOTROPY, f = yi) {
      super(), this.isTexture = true, Object.defineProperty(this, "id", {
        value: Ym++
      }), this.uuid = un(), this.name = "", this.source = new uu(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = l, this.anisotropy = d, this.format = c, this.internalFormat = null, this.type = u, this.offset = new ke(0, 0), this.repeat = new ke(1, 1), this.center = new ke(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Zt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.encoding = f, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
    }
    get image() {
      return this.source.data;
    }
    set image(e) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        repeat: [
          this.repeat.x,
          this.repeat.y
        ],
        offset: [
          this.offset.x,
          this.offset.y
        ],
        center: [
          this.center.x,
          this.center.y
        ],
        rotation: this.rotation,
        wrap: [
          this.wrapS,
          this.wrapT
        ],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    transformUv(e) {
      if (this.mapping !== nu) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case cs:
          e.x = e.x - Math.floor(e.x);
          break;
        case rn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Kr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case cs:
          e.y = e.y - Math.floor(e.y);
          break;
        case rn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Kr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      e === true && (this.version++, this.source.needsUpdate = true);
    }
  }
  Dt.DEFAULT_IMAGE = null;
  Dt.DEFAULT_MAPPING = nu;
  Dt.DEFAULT_ANISOTROPY = 1;
  class rt {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      rt.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, i) {
      return this.x = e, this.y = t, this.z = n, this.w = i, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this.w = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setW(e) {
      return this.w = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, i = this.z, r = this.w, l = e.elements;
      return this.x = l[0] * t + l[4] * n + l[8] * i + l[12] * r, this.y = l[1] * t + l[5] * n + l[9] * i + l[13] * r, this.z = l[2] * t + l[6] * n + l[10] * i + l[14] * r, this.w = l[3] * t + l[7] * n + l[11] * i + l[15] * r, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, i, r;
      const u = e.elements, d = u[0], f = u[4], m = u[8], g = u[1], b = u[5], y = u[9], _ = u[2], v = u[6], w = u[10];
      if (Math.abs(f - g) < 0.01 && Math.abs(m - _) < 0.01 && Math.abs(y - v) < 0.01) {
        if (Math.abs(f + g) < 0.1 && Math.abs(m + _) < 0.1 && Math.abs(y + v) < 0.1 && Math.abs(d + b + w - 3) < 0.1) return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const S = (d + 1) / 2, M = (b + 1) / 2, P = (w + 1) / 2, N = (f + g) / 4, F = (m + _) / 4, E = (y + v) / 4;
        return S > M && S > P ? S < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(S), i = N / n, r = F / n) : M > P ? M < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(M), n = N / i, r = E / i) : P < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(P), n = F / r, i = E / r), this.set(n, i, r, t), this;
      }
      let C = Math.sqrt((v - y) * (v - y) + (m - _) * (m - _) + (g - f) * (g - f));
      return Math.abs(C) < 1e-3 && (C = 1), this.x = (v - y) / C, this.y = (m - _) / C, this.z = (g - f) / C, this.w = Math.acos((d + b + w - 1) / 2), this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class wi extends ei {
    constructor(e = 1, t = 1, n = {}) {
      super(), this.isWebGLRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new rt(0, 0, e, t), this.scissorTest = false, this.viewport = new rt(0, 0, e, t);
      const i = {
        width: e,
        height: t,
        depth: 1
      };
      this.texture = new Dt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : false, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : qt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : true, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : false, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
    }
    setSize(e, t, n = 1) {
      (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = true;
      const t = Object.assign({}, e.texture.image);
      return this.texture.source = new uu(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  class du extends Dt {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      }, this.magFilter = At, this.minFilter = At, this.wrapR = rn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  class $m extends Dt {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = {
        data: e,
        width: t,
        height: n,
        depth: i
      }, this.magFilter = At, this.minFilter = At, this.wrapR = rn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  class Pt {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
    }
    static slerpFlat(e, t, n, i, r, l, c) {
      let u = n[i + 0], d = n[i + 1], f = n[i + 2], m = n[i + 3];
      const g = r[l + 0], b = r[l + 1], y = r[l + 2], _ = r[l + 3];
      if (c === 0) {
        e[t + 0] = u, e[t + 1] = d, e[t + 2] = f, e[t + 3] = m;
        return;
      }
      if (c === 1) {
        e[t + 0] = g, e[t + 1] = b, e[t + 2] = y, e[t + 3] = _;
        return;
      }
      if (m !== _ || u !== g || d !== b || f !== y) {
        let v = 1 - c;
        const w = u * g + d * b + f * y + m * _, C = w >= 0 ? 1 : -1, S = 1 - w * w;
        if (S > Number.EPSILON) {
          const P = Math.sqrt(S), N = Math.atan2(P, w * C);
          v = Math.sin(v * N) / P, c = Math.sin(c * N) / P;
        }
        const M = c * C;
        if (u = u * v + g * M, d = d * v + b * M, f = f * v + y * M, m = m * v + _ * M, v === 1 - c) {
          const P = 1 / Math.sqrt(u * u + d * d + f * f + m * m);
          u *= P, d *= P, f *= P, m *= P;
        }
      }
      e[t] = u, e[t + 1] = d, e[t + 2] = f, e[t + 3] = m;
    }
    static multiplyQuaternionsFlat(e, t, n, i, r, l) {
      const c = n[i], u = n[i + 1], d = n[i + 2], f = n[i + 3], m = r[l], g = r[l + 1], b = r[l + 2], y = r[l + 3];
      return e[t] = c * y + f * m + u * b - d * g, e[t + 1] = u * y + f * g + d * m - c * b, e[t + 2] = d * y + f * b + c * g - u * m, e[t + 3] = f * y - c * m - u * g - d * b, e;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      this._w = e, this._onChangeCallback();
    }
    set(e, t, n, i) {
      return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
    }
    setFromEuler(e, t) {
      const n = e._x, i = e._y, r = e._z, l = e._order, c = Math.cos, u = Math.sin, d = c(n / 2), f = c(i / 2), m = c(r / 2), g = u(n / 2), b = u(i / 2), y = u(r / 2);
      switch (l) {
        case "XYZ":
          this._x = g * f * m + d * b * y, this._y = d * b * m - g * f * y, this._z = d * f * y + g * b * m, this._w = d * f * m - g * b * y;
          break;
        case "YXZ":
          this._x = g * f * m + d * b * y, this._y = d * b * m - g * f * y, this._z = d * f * y - g * b * m, this._w = d * f * m + g * b * y;
          break;
        case "ZXY":
          this._x = g * f * m - d * b * y, this._y = d * b * m + g * f * y, this._z = d * f * y + g * b * m, this._w = d * f * m - g * b * y;
          break;
        case "ZYX":
          this._x = g * f * m - d * b * y, this._y = d * b * m + g * f * y, this._z = d * f * y - g * b * m, this._w = d * f * m + g * b * y;
          break;
        case "YZX":
          this._x = g * f * m + d * b * y, this._y = d * b * m + g * f * y, this._z = d * f * y - g * b * m, this._w = d * f * m - g * b * y;
          break;
        case "XZY":
          this._x = g * f * m - d * b * y, this._y = d * b * m - g * f * y, this._z = d * f * y + g * b * m, this._w = d * f * m + g * b * y;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + l);
      }
      return t !== false && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2, i = Math.sin(n);
      return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e) {
      const t = e.elements, n = t[0], i = t[4], r = t[8], l = t[1], c = t[5], u = t[9], d = t[2], f = t[6], m = t[10], g = n + c + m;
      if (g > 0) {
        const b = 0.5 / Math.sqrt(g + 1);
        this._w = 0.25 / b, this._x = (f - u) * b, this._y = (r - d) * b, this._z = (l - i) * b;
      } else if (n > c && n > m) {
        const b = 2 * Math.sqrt(1 + n - c - m);
        this._w = (f - u) / b, this._x = 0.25 * b, this._y = (i + l) / b, this._z = (r + d) / b;
      } else if (c > m) {
        const b = 2 * Math.sqrt(1 + c - n - m);
        this._w = (r - d) / b, this._x = (i + l) / b, this._y = 0.25 * b, this._z = (u + f) / b;
      } else {
        const b = 2 * Math.sqrt(1 + m - n - c);
        this._w = (l - i) / b, this._x = (r + d) / b, this._y = (u + f) / b, this._z = 0.25 * b;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(Ft(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (n === 0) return this;
      const i = Math.min(1, t / n);
      return this.slerp(e, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let e = this.length();
      return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x, i = e._y, r = e._z, l = e._w, c = t._x, u = t._y, d = t._z, f = t._w;
      return this._x = n * f + l * c + i * d - r * u, this._y = i * f + l * u + r * c - n * d, this._z = r * f + l * d + n * u - i * c, this._w = l * f - n * c - i * u - r * d, this._onChangeCallback(), this;
    }
    slerp(e, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(e);
      const n = this._x, i = this._y, r = this._z, l = this._w;
      let c = l * e._w + n * e._x + i * e._y + r * e._z;
      if (c < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, c = -c) : this.copy(e), c >= 1) return this._w = l, this._x = n, this._y = i, this._z = r, this;
      const u = 1 - c * c;
      if (u <= Number.EPSILON) {
        const b = 1 - t;
        return this._w = b * l + t * this._w, this._x = b * n + t * this._x, this._y = b * i + t * this._y, this._z = b * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
      }
      const d = Math.sqrt(u), f = Math.atan2(d, c), m = Math.sin((1 - t) * f) / d, g = Math.sin(t * f) / d;
      return this._w = l * m + this._w * g, this._x = n * m + this._x * g, this._y = i * m + this._y * g, this._z = r * m + this._z * g, this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
      return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i));
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
      return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
    }
    fromBufferAttribute(e, t) {
      return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class k {
    constructor(e = 0, t = 0, n = 0) {
      k.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
    }
    set(e, t, n) {
      return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this;
    }
    multiplyVectors(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
    }
    applyEuler(e) {
      return this.applyQuaternion(Nc.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(Nc.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, i = this.z, r = e.elements;
      return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, i = this.z, r = e.elements, l = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * l, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * l, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * l, this;
    }
    applyQuaternion(e) {
      const t = this.x, n = this.y, i = this.z, r = e.x, l = e.y, c = e.z, u = e.w, d = u * t + l * i - c * n, f = u * n + c * t - r * i, m = u * i + r * n - l * t, g = -r * t - l * n - c * i;
      return this.x = d * u + g * -r + f * -c - m * -l, this.y = f * u + g * -l + m * -r - d * -c, this.z = m * u + g * -c + d * -l - f * -r, this;
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
      const t = this.x, n = this.y, i = this.z, r = e.elements;
      return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x, i = e.y, r = e.z, l = t.x, c = t.y, u = t.z;
      return this.x = i * u - r * c, this.y = r * l - n * u, this.z = n * c - i * l, this;
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return Wo.copy(this).projectOnVector(e), this.sub(Wo);
    }
    reflect(e) {
      return this.sub(Wo.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(Ft(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
      return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const i = Math.sin(t) * e;
      return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
      return this.x = t, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return this.x = e._x, this.y = e._y, this.z = e._z, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
      return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const Wo = new k(), Nc = new Pt();
  class fs {
    constructor(e = new k(1 / 0, 1 / 0, 1 / 0), t = new k(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = e, this.max = t;
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, l = -1 / 0, c = -1 / 0;
      for (let u = 0, d = e.length; u < d; u += 3) {
        const f = e[u], m = e[u + 1], g = e[u + 2];
        f < t && (t = f), m < n && (n = m), g < i && (i = g), f > r && (r = f), m > l && (l = m), g > c && (c = g);
      }
      return this.min.set(t, n, i), this.max.set(r, l, c), this;
    }
    setFromBufferAttribute(e) {
      let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, l = -1 / 0, c = -1 / 0;
      for (let u = 0, d = e.count; u < d; u++) {
        const f = e.getX(u), m = e.getY(u), g = e.getZ(u);
        f < t && (t = f), m < n && (n = m), g < i && (i = g), f > r && (r = f), m > l && (l = m), g > c && (c = g);
      }
      return this.min.set(t, n, i), this.max.set(r, l, c), this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = ci.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = false) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = false) {
      e.updateWorldMatrix(false, false);
      const n = e.geometry;
      if (n !== void 0) if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let l = 0, c = r.count; l < c; l++) ci.fromBufferAttribute(r, l).applyMatrix4(e.matrixWorld), this.expandByPoint(ci);
      } else n.boundingBox === null && n.computeBoundingBox(), jo.copy(n.boundingBox), jo.applyMatrix4(e.matrixWorld), this.union(jo);
      const i = e.children;
      for (let r = 0, l = i.length; r < l; r++) this.expandByObject(i[r], t);
      return this;
    }
    containsPoint(e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
    }
    containsBox(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
      return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
    }
    intersectsSphere(e) {
      return this.clampPoint(e.center, ci), ci.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
      let t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return false;
      this.getCenter(Ns), Mr.subVectors(this.max, Ns), Vi.subVectors(e.a, Ns), zi.subVectors(e.b, Ns), Gi.subVectors(e.c, Ns), jn.subVectors(zi, Vi), qn.subVectors(Gi, zi), hi.subVectors(Vi, Gi);
      let t = [
        0,
        -jn.z,
        jn.y,
        0,
        -qn.z,
        qn.y,
        0,
        -hi.z,
        hi.y,
        jn.z,
        0,
        -jn.x,
        qn.z,
        0,
        -qn.x,
        hi.z,
        0,
        -hi.x,
        -jn.y,
        jn.x,
        0,
        -qn.y,
        qn.x,
        0,
        -hi.y,
        hi.x,
        0
      ];
      return !qo(t, Vi, zi, Gi, Mr) || (t = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], !qo(t, Vi, zi, Gi, Mr)) ? false : (Sr.crossVectors(jn, qn), t = [
        Sr.x,
        Sr.y,
        Sr.z
      ], qo(t, Vi, zi, Gi, Mr));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return ci.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    getBoundingSphere(e) {
      return this.getCenter(e.center), e.radius = this.getSize(ci).length() * 0.5, e;
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return this.isEmpty() ? this : (En[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), En[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), En[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), En[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), En[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), En[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), En[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), En[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(En), this);
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const En = [
    new k(),
    new k(),
    new k(),
    new k(),
    new k(),
    new k(),
    new k(),
    new k()
  ], ci = new k(), jo = new fs(), Vi = new k(), zi = new k(), Gi = new k(), jn = new k(), qn = new k(), hi = new k(), Ns = new k(), Mr = new k(), Sr = new k(), ui = new k();
  function qo(o, e, t, n, i) {
    for (let r = 0, l = o.length - 3; r <= l; r += 3) {
      ui.fromArray(o, r);
      const c = i.x * Math.abs(ui.x) + i.y * Math.abs(ui.y) + i.z * Math.abs(ui.z), u = e.dot(ui), d = t.dot(ui), f = n.dot(ui);
      if (Math.max(-Math.max(u, d, f), Math.min(u, d, f)) > c) return false;
    }
    return true;
  }
  const Zm = new fs(), Os = new k(), Xo = new k();
  class ms {
    constructor(e = new k(), t = -1) {
      this.center = e, this.radius = t;
    }
    set(e, t) {
      return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      t !== void 0 ? n.copy(t) : Zm.setFromPoints(e).getCenter(n);
      let i = 0;
      for (let r = 0, l = e.length; r < l; r++) i = Math.max(i, n.distanceToSquared(e[r]));
      return this.radius = Math.sqrt(i), this;
    }
    copy(e) {
      return this.center.copy(e.center), this.radius = e.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e) {
      return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
      Os.subVectors(e, this.center);
      const t = Os.lengthSq();
      if (t > this.radius * this.radius) {
        const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
        this.center.addScaledVector(Os, i / n), this.radius += i;
      }
      return this;
    }
    union(e) {
      return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Xo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Os.copy(e.center).add(Xo)), this.expandByPoint(Os.copy(e.center).sub(Xo))), this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Tn = new k(), Ko = new k(), Er = new k(), Xn = new k(), Yo = new k(), Tr = new k(), $o = new k();
  class Va {
    constructor(e = new k(), t = new k(0, 0, -1)) {
      this.origin = e, this.direction = t;
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.direction).multiplyScalar(e).add(this.origin);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, Tn)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = Tn.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (Tn.copy(this.direction).multiplyScalar(t).add(this.origin), Tn.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      Ko.copy(e).add(t).multiplyScalar(0.5), Er.copy(t).sub(e).normalize(), Xn.copy(this.origin).sub(Ko);
      const r = e.distanceTo(t) * 0.5, l = -this.direction.dot(Er), c = Xn.dot(this.direction), u = -Xn.dot(Er), d = Xn.lengthSq(), f = Math.abs(1 - l * l);
      let m, g, b, y;
      if (f > 0) if (m = l * u - c, g = l * c - u, y = r * f, m >= 0) if (g >= -y) if (g <= y) {
        const _ = 1 / f;
        m *= _, g *= _, b = m * (m + l * g + 2 * c) + g * (l * m + g + 2 * u) + d;
      } else g = r, m = Math.max(0, -(l * g + c)), b = -m * m + g * (g + 2 * u) + d;
      else g = -r, m = Math.max(0, -(l * g + c)), b = -m * m + g * (g + 2 * u) + d;
      else g <= -y ? (m = Math.max(0, -(-l * r + c)), g = m > 0 ? -r : Math.min(Math.max(-r, -u), r), b = -m * m + g * (g + 2 * u) + d) : g <= y ? (m = 0, g = Math.min(Math.max(-r, -u), r), b = g * (g + 2 * u) + d) : (m = Math.max(0, -(l * r + c)), g = m > 0 ? r : Math.min(Math.max(-r, -u), r), b = -m * m + g * (g + 2 * u) + d);
      else g = l > 0 ? -r : r, m = Math.max(0, -(l * g + c)), b = -m * m + g * (g + 2 * u) + d;
      return n && n.copy(this.direction).multiplyScalar(m).add(this.origin), i && i.copy(Er).multiplyScalar(g).add(Ko), b;
    }
    intersectSphere(e, t) {
      Tn.subVectors(e.center, this.origin);
      const n = Tn.dot(this.direction), i = Tn.dot(Tn) - n * n, r = e.radius * e.radius;
      if (i > r) return null;
      const l = Math.sqrt(r - i), c = n - l, u = n + l;
      return c < 0 && u < 0 ? null : c < 0 ? this.at(u, t) : this.at(c, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, i, r, l, c, u;
      const d = 1 / this.direction.x, f = 1 / this.direction.y, m = 1 / this.direction.z, g = this.origin;
      return d >= 0 ? (n = (e.min.x - g.x) * d, i = (e.max.x - g.x) * d) : (n = (e.max.x - g.x) * d, i = (e.min.x - g.x) * d), f >= 0 ? (r = (e.min.y - g.y) * f, l = (e.max.y - g.y) * f) : (r = (e.max.y - g.y) * f, l = (e.min.y - g.y) * f), n > l || r > i || ((r > n || isNaN(n)) && (n = r), (l < i || isNaN(i)) && (i = l), m >= 0 ? (c = (e.min.z - g.z) * m, u = (e.max.z - g.z) * m) : (c = (e.max.z - g.z) * m, u = (e.min.z - g.z) * m), n > u || c > i) || ((c > n || n !== n) && (n = c), (u < i || i !== i) && (i = u), i < 0) ? null : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
      return this.intersectBox(e, Tn) !== null;
    }
    intersectTriangle(e, t, n, i, r) {
      Yo.subVectors(t, e), Tr.subVectors(n, e), $o.crossVectors(Yo, Tr);
      let l = this.direction.dot($o), c;
      if (l > 0) {
        if (i) return null;
        c = 1;
      } else if (l < 0) c = -1, l = -l;
      else return null;
      Xn.subVectors(this.origin, e);
      const u = c * this.direction.dot(Tr.crossVectors(Xn, Tr));
      if (u < 0) return null;
      const d = c * this.direction.dot(Yo.cross(Xn));
      if (d < 0 || u + d > l) return null;
      const f = -c * Xn.dot($o);
      return f < 0 ? null : this.at(f / l, r);
    }
    applyMatrix4(e) {
      return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class ze {
    constructor() {
      ze.prototype.isMatrix4 = true, this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ];
    }
    set(e, t, n, i, r, l, c, u, d, f, m, g, b, y, _, v) {
      const w = this.elements;
      return w[0] = e, w[4] = t, w[8] = n, w[12] = i, w[1] = r, w[5] = l, w[9] = c, w[13] = u, w[2] = d, w[6] = f, w[10] = m, w[14] = g, w[3] = b, w[7] = y, w[11] = _, w[15] = v, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new ze().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
    }
    copyPosition(e) {
      const t = this.elements, n = e.elements;
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e, t, n) {
      return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e) {
      const t = this.elements, n = e.elements, i = 1 / Hi.setFromMatrixColumn(e, 0).length(), r = 1 / Hi.setFromMatrixColumn(e, 1).length(), l = 1 / Hi.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * l, t[9] = n[9] * l, t[10] = n[10] * l, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
      const t = this.elements, n = e.x, i = e.y, r = e.z, l = Math.cos(n), c = Math.sin(n), u = Math.cos(i), d = Math.sin(i), f = Math.cos(r), m = Math.sin(r);
      if (e.order === "XYZ") {
        const g = l * f, b = l * m, y = c * f, _ = c * m;
        t[0] = u * f, t[4] = -u * m, t[8] = d, t[1] = b + y * d, t[5] = g - _ * d, t[9] = -c * u, t[2] = _ - g * d, t[6] = y + b * d, t[10] = l * u;
      } else if (e.order === "YXZ") {
        const g = u * f, b = u * m, y = d * f, _ = d * m;
        t[0] = g + _ * c, t[4] = y * c - b, t[8] = l * d, t[1] = l * m, t[5] = l * f, t[9] = -c, t[2] = b * c - y, t[6] = _ + g * c, t[10] = l * u;
      } else if (e.order === "ZXY") {
        const g = u * f, b = u * m, y = d * f, _ = d * m;
        t[0] = g - _ * c, t[4] = -l * m, t[8] = y + b * c, t[1] = b + y * c, t[5] = l * f, t[9] = _ - g * c, t[2] = -l * d, t[6] = c, t[10] = l * u;
      } else if (e.order === "ZYX") {
        const g = l * f, b = l * m, y = c * f, _ = c * m;
        t[0] = u * f, t[4] = y * d - b, t[8] = g * d + _, t[1] = u * m, t[5] = _ * d + g, t[9] = b * d - y, t[2] = -d, t[6] = c * u, t[10] = l * u;
      } else if (e.order === "YZX") {
        const g = l * u, b = l * d, y = c * u, _ = c * d;
        t[0] = u * f, t[4] = _ - g * m, t[8] = y * m + b, t[1] = m, t[5] = l * f, t[9] = -c * f, t[2] = -d * f, t[6] = b * m + y, t[10] = g - _ * m;
      } else if (e.order === "XZY") {
        const g = l * u, b = l * d, y = c * u, _ = c * d;
        t[0] = u * f, t[4] = -m, t[8] = d * f, t[1] = g * m + _, t[5] = l * f, t[9] = b * m - y, t[2] = y * m - b, t[6] = c * f, t[10] = _ * m + g;
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Jm, e, Qm);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return Yt.subVectors(e, t), Yt.lengthSq() === 0 && (Yt.z = 1), Yt.normalize(), Kn.crossVectors(n, Yt), Kn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Yt.x += 1e-4 : Yt.z += 1e-4, Yt.normalize(), Kn.crossVectors(n, Yt)), Kn.normalize(), Cr.crossVectors(Yt, Kn), i[0] = Kn.x, i[4] = Cr.x, i[8] = Yt.x, i[1] = Kn.y, i[5] = Cr.y, i[9] = Yt.y, i[2] = Kn.z, i[6] = Cr.z, i[10] = Yt.z, this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, r = this.elements, l = n[0], c = n[4], u = n[8], d = n[12], f = n[1], m = n[5], g = n[9], b = n[13], y = n[2], _ = n[6], v = n[10], w = n[14], C = n[3], S = n[7], M = n[11], P = n[15], N = i[0], F = i[4], E = i[8], I = i[12], V = i[1], ee = i[5], Q = i[9], W = i[13], G = i[2], $ = i[6], ie = i[10], te = i[14], H = i[3], he = i[7], se = i[11], Se = i[15];
      return r[0] = l * N + c * V + u * G + d * H, r[4] = l * F + c * ee + u * $ + d * he, r[8] = l * E + c * Q + u * ie + d * se, r[12] = l * I + c * W + u * te + d * Se, r[1] = f * N + m * V + g * G + b * H, r[5] = f * F + m * ee + g * $ + b * he, r[9] = f * E + m * Q + g * ie + b * se, r[13] = f * I + m * W + g * te + b * Se, r[2] = y * N + _ * V + v * G + w * H, r[6] = y * F + _ * ee + v * $ + w * he, r[10] = y * E + _ * Q + v * ie + w * se, r[14] = y * I + _ * W + v * te + w * Se, r[3] = C * N + S * V + M * G + P * H, r[7] = C * F + S * ee + M * $ + P * he, r[11] = C * E + S * Q + M * ie + P * se, r[15] = C * I + S * W + M * te + P * Se, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], l = e[1], c = e[5], u = e[9], d = e[13], f = e[2], m = e[6], g = e[10], b = e[14], y = e[3], _ = e[7], v = e[11], w = e[15];
      return y * (+r * u * m - i * d * m - r * c * g + n * d * g + i * c * b - n * u * b) + _ * (+t * u * b - t * d * g + r * l * g - i * l * b + i * d * f - r * u * f) + v * (+t * d * m - t * c * b - r * l * m + n * l * b + r * c * f - n * d * f) + w * (-i * c * f - t * u * m + t * c * g + i * l * m - n * l * g + n * u * f);
    }
    transpose() {
      const e = this.elements;
      let t;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
    }
    setPosition(e, t, n) {
      const i = this.elements;
      return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], l = e[4], c = e[5], u = e[6], d = e[7], f = e[8], m = e[9], g = e[10], b = e[11], y = e[12], _ = e[13], v = e[14], w = e[15], C = m * v * d - _ * g * d + _ * u * b - c * v * b - m * u * w + c * g * w, S = y * g * d - f * v * d - y * u * b + l * v * b + f * u * w - l * g * w, M = f * _ * d - y * m * d + y * c * b - l * _ * b - f * c * w + l * m * w, P = y * m * u - f * _ * u - y * c * g + l * _ * g + f * c * v - l * m * v, N = t * C + n * S + i * M + r * P;
      if (N === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const F = 1 / N;
      return e[0] = C * F, e[1] = (_ * g * r - m * v * r - _ * i * b + n * v * b + m * i * w - n * g * w) * F, e[2] = (c * v * r - _ * u * r + _ * i * d - n * v * d - c * i * w + n * u * w) * F, e[3] = (m * u * r - c * g * r - m * i * d + n * g * d + c * i * b - n * u * b) * F, e[4] = S * F, e[5] = (f * v * r - y * g * r + y * i * b - t * v * b - f * i * w + t * g * w) * F, e[6] = (y * u * r - l * v * r - y * i * d + t * v * d + l * i * w - t * u * w) * F, e[7] = (l * g * r - f * u * r + f * i * d - t * g * d - l * i * b + t * u * b) * F, e[8] = M * F, e[9] = (y * m * r - f * _ * r - y * n * b + t * _ * b + f * n * w - t * m * w) * F, e[10] = (l * _ * r - y * c * r + y * n * d - t * _ * d - l * n * w + t * c * w) * F, e[11] = (f * c * r - l * m * r - f * n * d + t * m * d + l * n * b - t * c * b) * F, e[12] = P * F, e[13] = (f * _ * i - y * m * i + y * n * g - t * _ * g - f * n * v + t * m * v) * F, e[14] = (y * c * i - l * _ * i - y * n * u + t * _ * u + l * n * v - t * c * v) * F, e[15] = (l * m * i - f * c * i + f * n * u - t * m * u - l * n * g + t * c * g) * F, this;
    }
    scale(e) {
      const t = this.elements, n = e.x, i = e.y, r = e.z;
      return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
    }
    getMaxScaleOnAxis() {
      const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t), i = Math.sin(t), r = 1 - n, l = e.x, c = e.y, u = e.z, d = r * l, f = r * c;
      return this.set(d * l + n, d * c - i * u, d * u + i * c, 0, d * c + i * u, f * c + n, f * u - i * l, 0, d * u - i * c, f * u + i * l, r * u * u + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, r, l) {
      return this.set(1, n, r, 0, e, 1, l, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
      const i = this.elements, r = t._x, l = t._y, c = t._z, u = t._w, d = r + r, f = l + l, m = c + c, g = r * d, b = r * f, y = r * m, _ = l * f, v = l * m, w = c * m, C = u * d, S = u * f, M = u * m, P = n.x, N = n.y, F = n.z;
      return i[0] = (1 - (_ + w)) * P, i[1] = (b + M) * P, i[2] = (y - S) * P, i[3] = 0, i[4] = (b - M) * N, i[5] = (1 - (g + w)) * N, i[6] = (v + C) * N, i[7] = 0, i[8] = (y + S) * F, i[9] = (v - C) * F, i[10] = (1 - (g + _)) * F, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
    }
    decompose(e, t, n) {
      const i = this.elements;
      let r = Hi.set(i[0], i[1], i[2]).length();
      const l = Hi.set(i[4], i[5], i[6]).length(), c = Hi.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], cn.copy(this);
      const d = 1 / r, f = 1 / l, m = 1 / c;
      return cn.elements[0] *= d, cn.elements[1] *= d, cn.elements[2] *= d, cn.elements[4] *= f, cn.elements[5] *= f, cn.elements[6] *= f, cn.elements[8] *= m, cn.elements[9] *= m, cn.elements[10] *= m, t.setFromRotationMatrix(cn), n.x = r, n.y = l, n.z = c, this;
    }
    makePerspective(e, t, n, i, r, l) {
      const c = this.elements, u = 2 * r / (t - e), d = 2 * r / (n - i), f = (t + e) / (t - e), m = (n + i) / (n - i), g = -(l + r) / (l - r), b = -2 * l * r / (l - r);
      return c[0] = u, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = d, c[9] = m, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = b, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
    }
    makeOrthographic(e, t, n, i, r, l) {
      const c = this.elements, u = 1 / (t - e), d = 1 / (n - i), f = 1 / (l - r), m = (t + e) * u, g = (n + i) * d, b = (l + r) * f;
      return c[0] = 2 * u, c[4] = 0, c[8] = 0, c[12] = -m, c[1] = 0, c[5] = 2 * d, c[9] = 0, c[13] = -g, c[2] = 0, c[6] = 0, c[10] = -2 * f, c[14] = -b, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
      return true;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
    }
  }
  const Hi = new k(), cn = new ze(), Jm = new k(0, 0, 0), Qm = new k(1, 1, 1), Kn = new k(), Cr = new k(), Yt = new k(), Oc = new ze(), Fc = new Pt();
  class eo {
    constructor(e = 0, t = 0, n = 0, i = eo.DEFAULT_ORDER) {
      this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      this._order = e, this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
      return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e, t = this._order, n = true) {
      const i = e.elements, r = i[0], l = i[4], c = i[8], u = i[1], d = i[5], f = i[9], m = i[2], g = i[6], b = i[10];
      switch (t) {
        case "XYZ":
          this._y = Math.asin(Ft(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, b), this._z = Math.atan2(-l, r)) : (this._x = Math.atan2(g, d), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Ft(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(c, b), this._z = Math.atan2(u, d)) : (this._y = Math.atan2(-m, r), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Ft(g, -1, 1)), Math.abs(g) < 0.9999999 ? (this._y = Math.atan2(-m, b), this._z = Math.atan2(-l, d)) : (this._y = 0, this._z = Math.atan2(u, r));
          break;
        case "ZYX":
          this._y = Math.asin(-Ft(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(g, b), this._z = Math.atan2(u, r)) : (this._x = 0, this._z = Math.atan2(-l, d));
          break;
        case "YZX":
          this._z = Math.asin(Ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(-f, d), this._y = Math.atan2(-m, r)) : (this._x = 0, this._y = Math.atan2(c, b));
          break;
        case "XZY":
          this._z = Math.asin(-Ft(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(g, d), this._y = Math.atan2(c, r)) : (this._x = Math.atan2(-f, b), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
      }
      return this._order = t, n === true && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return Oc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Oc, t, n);
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return Fc.setFromEuler(this), this.setFromQuaternion(Fc, e);
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  eo.DEFAULT_ORDER = "XYZ";
  class pu {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = (1 << e | 0) >>> 0;
    }
    enable(e) {
      this.mask |= 1 << e | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= 1 << e | 0;
    }
    disable(e) {
      this.mask &= ~(1 << e | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return (this.mask & (1 << e | 0)) !== 0;
    }
  }
  let eg = 0;
  const Uc = new k(), Wi = new Pt(), Cn = new ze(), Ar = new k(), Fs = new k(), tg = new k(), ng = new Pt(), Bc = new k(1, 0, 0), Vc = new k(0, 1, 0), zc = new k(0, 0, 1), ig = {
    type: "added"
  }, Gc = {
    type: "removed"
  };
  class ut extends ei {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", {
        value: eg++
      }), this.uuid = un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ut.DEFAULT_UP.clone();
      const e = new k(), t = new eo(), n = new Pt(), i = new k(1, 1, 1);
      function r() {
        n.setFromEuler(t, false);
      }
      function l() {
        t.setFromQuaternion(n, void 0, false);
      }
      t._onChange(r), n._onChange(l), Object.defineProperties(this, {
        position: {
          configurable: true,
          enumerable: true,
          value: e
        },
        rotation: {
          configurable: true,
          enumerable: true,
          value: t
        },
        quaternion: {
          configurable: true,
          enumerable: true,
          value: n
        },
        scale: {
          configurable: true,
          enumerable: true,
          value: i
        },
        modelViewMatrix: {
          value: new ze()
        },
        normalMatrix: {
          value: new Zt()
        }
      }), this.matrix = new ze(), this.matrixWorld = new ze(), this.matrixAutoUpdate = ut.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.matrixWorldAutoUpdate = ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new pu(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, true);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return Wi.setFromAxisAngle(e, t), this.quaternion.multiply(Wi), this;
    }
    rotateOnWorldAxis(e, t) {
      return Wi.setFromAxisAngle(e, t), this.quaternion.premultiply(Wi), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(Bc, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Vc, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(zc, e);
    }
    translateOnAxis(e, t) {
      return Uc.copy(e).applyQuaternion(this.quaternion), this.position.add(Uc.multiplyScalar(t)), this;
    }
    translateX(e) {
      return this.translateOnAxis(Bc, e);
    }
    translateY(e) {
      return this.translateOnAxis(Vc, e);
    }
    translateZ(e) {
      return this.translateOnAxis(zc, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return this.updateWorldMatrix(true, false), e.applyMatrix4(Cn.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? Ar.copy(e) : Ar.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(true, false), Fs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Cn.lookAt(Fs, Ar, this.up) : Cn.lookAt(Ar, Fs, this.up), this.quaternion.setFromRotationMatrix(Cn), i && (Cn.extractRotation(i.matrixWorld), Wi.setFromRotationMatrix(Cn), this.quaternion.premultiply(Wi.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ig)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      const t = this.children.indexOf(e);
      return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Gc)), this;
    }
    removeFromParent() {
      const e = this.parent;
      return e !== null && e.remove(this), this;
    }
    clear() {
      for (let e = 0; e < this.children.length; e++) {
        const t = this.children[e];
        t.parent = null, t.dispatchEvent(Gc);
      }
      return this.children.length = 0, this;
    }
    attach(e) {
      return this.updateWorldMatrix(true, false), Cn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Cn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Cn), this.add(e), e.updateWorldMatrix(false, true), this;
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const l = this.children[n].getObjectByProperty(e, t);
        if (l !== void 0) return l;
      }
    }
    getObjectsByProperty(e, t) {
      let n = [];
      this[e] === t && n.push(this);
      for (let i = 0, r = this.children.length; i < r; i++) {
        const l = this.children[i].getObjectsByProperty(e, t);
        l.length > 0 && (n = n.concat(l));
      }
      return n;
    }
    getWorldPosition(e) {
      return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Fs, e, tg), e;
    }
    getWorldScale(e) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Fs, ng, e), e;
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(true, false);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {
    }
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === false) return;
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, e = true);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        (r.matrixWorldAutoUpdate === true || e === true) && r.updateMatrixWorld(e);
      }
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (e === true && n !== null && n.matrixWorldAutoUpdate === true && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === true) {
        const i = this.children;
        for (let r = 0, l = i.length; r < l; r++) {
          const c = i[r];
          c.matrixWorldAutoUpdate === true && c.updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string", n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      const i = {};
      i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
      function r(c, u) {
        return c[u.uuid] === void 0 && (c[u.uuid] = u.toJSON(e)), u.uuid;
      }
      if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(e.geometries, this.geometry);
        const c = this.geometry.parameters;
        if (c !== void 0 && c.shapes !== void 0) {
          const u = c.shapes;
          if (Array.isArray(u)) for (let d = 0, f = u.length; d < f; d++) {
            const m = u[d];
            r(e.shapes, m);
          }
          else r(e.shapes, u);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
        const c = [];
        for (let u = 0, d = this.material.length; u < d; u++) c.push(r(e.materials, this.material[u]));
        i.material = c;
      } else i.material = r(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let c = 0; c < this.children.length; c++) i.children.push(this.children[c].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let c = 0; c < this.animations.length; c++) {
          const u = this.animations[c];
          i.animations.push(r(e.animations, u));
        }
      }
      if (t) {
        const c = l(e.geometries), u = l(e.materials), d = l(e.textures), f = l(e.images), m = l(e.shapes), g = l(e.skeletons), b = l(e.animations), y = l(e.nodes);
        c.length > 0 && (n.geometries = c), u.length > 0 && (n.materials = u), d.length > 0 && (n.textures = d), f.length > 0 && (n.images = f), m.length > 0 && (n.shapes = m), g.length > 0 && (n.skeletons = g), b.length > 0 && (n.animations = b), y.length > 0 && (n.nodes = y);
      }
      return n.object = i, n;
      function l(c) {
        const u = [];
        for (const d in c) {
          const f = c[d];
          delete f.metadata, u.push(f);
        }
        return u;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = true) {
      if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
      return this;
    }
  }
  ut.DEFAULT_UP = new k(0, 1, 0);
  ut.DEFAULT_MATRIX_AUTO_UPDATE = true;
  ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const hn = new k(), An = new k(), Zo = new k(), Pn = new k(), ji = new k(), qi = new k(), Hc = new k(), Jo = new k(), Qo = new k(), ea = new k();
  class Rn {
    constructor(e = new k(), t = new k(), n = new k()) {
      this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), hn.subVectors(e, t), i.cross(hn);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, r) {
      hn.subVectors(i, t), An.subVectors(n, t), Zo.subVectors(e, t);
      const l = hn.dot(hn), c = hn.dot(An), u = hn.dot(Zo), d = An.dot(An), f = An.dot(Zo), m = l * d - c * c;
      if (m === 0) return r.set(-2, -1, -1);
      const g = 1 / m, b = (d * u - c * f) * g, y = (l * f - c * u) * g;
      return r.set(1 - b - y, y, b);
    }
    static containsPoint(e, t, n, i) {
      return this.getBarycoord(e, t, n, i, Pn), Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1;
    }
    static getUV(e, t, n, i, r, l, c, u) {
      return this.getBarycoord(e, t, n, i, Pn), u.set(0, 0), u.addScaledVector(r, Pn.x), u.addScaledVector(l, Pn.y), u.addScaledVector(c, Pn.z), u;
    }
    static isFrontFacing(e, t, n, i) {
      return hn.subVectors(n, t), An.subVectors(e, t), hn.cross(An).dot(i) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
      return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return hn.subVectors(this.c, this.b), An.subVectors(this.a, this.b), hn.cross(An).length() * 0.5;
    }
    getMidpoint(e) {
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return Rn.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return Rn.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, r) {
      return Rn.getUV(e, this.a, this.b, this.c, t, n, i, r);
    }
    containsPoint(e) {
      return Rn.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return Rn.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a, i = this.b, r = this.c;
      let l, c;
      ji.subVectors(i, n), qi.subVectors(r, n), Jo.subVectors(e, n);
      const u = ji.dot(Jo), d = qi.dot(Jo);
      if (u <= 0 && d <= 0) return t.copy(n);
      Qo.subVectors(e, i);
      const f = ji.dot(Qo), m = qi.dot(Qo);
      if (f >= 0 && m <= f) return t.copy(i);
      const g = u * m - f * d;
      if (g <= 0 && u >= 0 && f <= 0) return l = u / (u - f), t.copy(n).addScaledVector(ji, l);
      ea.subVectors(e, r);
      const b = ji.dot(ea), y = qi.dot(ea);
      if (y >= 0 && b <= y) return t.copy(r);
      const _ = b * d - u * y;
      if (_ <= 0 && d >= 0 && y <= 0) return c = d / (d - y), t.copy(n).addScaledVector(qi, c);
      const v = f * y - b * m;
      if (v <= 0 && m - f >= 0 && b - y >= 0) return Hc.subVectors(r, i), c = (m - f) / (m - f + (b - y)), t.copy(i).addScaledVector(Hc, c);
      const w = 1 / (v + _ + g);
      return l = _ * w, c = g * w, t.copy(n).addScaledVector(ji, l).addScaledVector(qi, c);
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  let sg = 0;
  class vn extends ei {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", {
        value: sg++
      }), this.uuid = un(), this.name = "", this.type = "Material", this.blending = ss, this.side = Fn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.blendSrc = Jh, this.blendDst = Qh, this.blendEquation = Qi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ya, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = km, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Bo, this.stencilZFail = Bo, this.stencilZPass = Bo, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
    }
    onBuild() {
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0) for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      t && (e = {
        textures: {},
        images: {}
      });
      const n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ss && (n.blending = this.blending), this.side !== Fn && (n.side = this.side), this.vertexColors && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === true && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === true && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === true && (n.forceSinglePass = this.forceSinglePass), this.wireframe === true && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = this.flatShading), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
      function i(r) {
        const l = [];
        for (const c in r) {
          const u = r[c];
          delete u.metadata, l.push(u);
        }
        return l;
      }
      if (t) {
        const r = i(e.textures), l = i(e.images);
        r.length > 0 && (n.textures = r), l.length > 0 && (n.images = l);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      const t = e.clippingPlanes;
      let n = null;
      if (t !== null) {
        const i = t.length;
        n = new Array(i);
        for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
  }
  class kn extends vn {
    constructor(e) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new He(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = eu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
    }
  }
  const xt = new k(), Pr = new ke();
  class It {
    constructor(e, t, n = false) {
      if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ta, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    copy(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
    }
    copyAt(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;
      for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    applyMatrix3(e) {
      if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Pr.fromBufferAttribute(this, t), Pr.applyMatrix3(e), this.setXY(t, Pr.x, Pr.y);
      else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.applyMatrix3(e), this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.applyMatrix4(e), this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.applyNormalMatrix(e), this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.transformDirection(e), this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setX(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize] = t, this;
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setY(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setZ(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setW(e, t) {
      return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
    }
    setXY(e, t, n) {
      return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, r) {
      return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array), r = st(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return this.name !== "" && (e.name = this.name), this.usage !== Ta && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
    }
    copyColorsArray() {
      console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
    }
    copyVector2sArray() {
      console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
    }
    copyVector3sArray() {
      console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
    }
    copyVector4sArray() {
      console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
    }
  }
  class fu extends It {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class mu extends It {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class On extends It {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let rg = 0;
  const nn = new ze(), ta = new ut(), Xi = new k(), $t = new fs(), Us = new fs(), Ct = new k();
  class dn extends ei {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", {
        value: rg++
      }), this.uuid = un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return Array.isArray(e) ? this.index = new (lu(e) ? mu : fu)(e, 1) : this.index = e, this;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({
        start: e,
        count: t,
        materialIndex: n
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      this.drawRange.start = e, this.drawRange.count = t;
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
      const n = this.attributes.normal;
      if (n !== void 0) {
        const r = new Zt().getNormalMatrix(e);
        n.applyNormalMatrix(r), n.needsUpdate = true;
      }
      const i = this.attributes.tangent;
      return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    applyQuaternion(e) {
      return nn.makeRotationFromQuaternion(e), this.applyMatrix4(nn), this;
    }
    rotateX(e) {
      return nn.makeRotationX(e), this.applyMatrix4(nn), this;
    }
    rotateY(e) {
      return nn.makeRotationY(e), this.applyMatrix4(nn), this;
    }
    rotateZ(e) {
      return nn.makeRotationZ(e), this.applyMatrix4(nn), this;
    }
    translate(e, t, n) {
      return nn.makeTranslation(e, t, n), this.applyMatrix4(nn), this;
    }
    scale(e, t, n) {
      return nn.makeScale(e, t, n), this.applyMatrix4(nn), this;
    }
    lookAt(e) {
      return ta.lookAt(e), ta.updateMatrix(), this.applyMatrix4(ta.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Xi).negate(), this.translate(Xi.x, Xi.y, Xi.z), this;
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const r = e[n];
        t.push(r.x, r.y, r.z || 0);
      }
      return this.setAttribute("position", new On(t, 3)), this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new fs());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new k(-1 / 0, -1 / 0, -1 / 0), new k(1 / 0, 1 / 0, 1 / 0));
        return;
      }
      if (e !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          $t.setFromBufferAttribute(r), this.morphTargetsRelative ? (Ct.addVectors(this.boundingBox.min, $t.min), this.boundingBox.expandByPoint(Ct), Ct.addVectors(this.boundingBox.max, $t.max), this.boundingBox.expandByPoint(Ct)) : (this.boundingBox.expandByPoint($t.min), this.boundingBox.expandByPoint($t.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new ms());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new k(), 1 / 0);
        return;
      }
      if (e) {
        const n = this.boundingSphere.center;
        if ($t.setFromBufferAttribute(e), t) for (let r = 0, l = t.length; r < l; r++) {
          const c = t[r];
          Us.setFromBufferAttribute(c), this.morphTargetsRelative ? (Ct.addVectors($t.min, Us.min), $t.expandByPoint(Ct), Ct.addVectors($t.max, Us.max), $t.expandByPoint(Ct)) : ($t.expandByPoint(Us.min), $t.expandByPoint(Us.max));
        }
        $t.getCenter(n);
        let i = 0;
        for (let r = 0, l = e.count; r < l; r++) Ct.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(Ct));
        if (t) for (let r = 0, l = t.length; r < l; r++) {
          const c = t[r], u = this.morphTargetsRelative;
          for (let d = 0, f = c.count; d < f; d++) Ct.fromBufferAttribute(c, d), u && (Xi.fromBufferAttribute(e, d), Ct.add(Xi)), i = Math.max(i, n.distanceToSquared(Ct));
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const e = this.index, t = this.attributes;
      if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const n = e.array, i = t.position.array, r = t.normal.array, l = t.uv.array, c = i.length / 3;
      this.hasAttribute("tangent") === false && this.setAttribute("tangent", new It(new Float32Array(4 * c), 4));
      const u = this.getAttribute("tangent").array, d = [], f = [];
      for (let V = 0; V < c; V++) d[V] = new k(), f[V] = new k();
      const m = new k(), g = new k(), b = new k(), y = new ke(), _ = new ke(), v = new ke(), w = new k(), C = new k();
      function S(V, ee, Q) {
        m.fromArray(i, V * 3), g.fromArray(i, ee * 3), b.fromArray(i, Q * 3), y.fromArray(l, V * 2), _.fromArray(l, ee * 2), v.fromArray(l, Q * 2), g.sub(m), b.sub(m), _.sub(y), v.sub(y);
        const W = 1 / (_.x * v.y - v.x * _.y);
        isFinite(W) && (w.copy(g).multiplyScalar(v.y).addScaledVector(b, -_.y).multiplyScalar(W), C.copy(b).multiplyScalar(_.x).addScaledVector(g, -v.x).multiplyScalar(W), d[V].add(w), d[ee].add(w), d[Q].add(w), f[V].add(C), f[ee].add(C), f[Q].add(C));
      }
      let M = this.groups;
      M.length === 0 && (M = [
        {
          start: 0,
          count: n.length
        }
      ]);
      for (let V = 0, ee = M.length; V < ee; ++V) {
        const Q = M[V], W = Q.start, G = Q.count;
        for (let $ = W, ie = W + G; $ < ie; $ += 3) S(n[$ + 0], n[$ + 1], n[$ + 2]);
      }
      const P = new k(), N = new k(), F = new k(), E = new k();
      function I(V) {
        F.fromArray(r, V * 3), E.copy(F);
        const ee = d[V];
        P.copy(ee), P.sub(F.multiplyScalar(F.dot(ee))).normalize(), N.crossVectors(E, ee);
        const W = N.dot(f[V]) < 0 ? -1 : 1;
        u[V * 4] = P.x, u[V * 4 + 1] = P.y, u[V * 4 + 2] = P.z, u[V * 4 + 3] = W;
      }
      for (let V = 0, ee = M.length; V < ee; ++V) {
        const Q = M[V], W = Q.start, G = Q.count;
        for (let $ = W, ie = W + G; $ < ie; $ += 3) I(n[$ + 0]), I(n[$ + 1]), I(n[$ + 2]);
      }
    }
    computeVertexNormals() {
      const e = this.index, t = this.getAttribute("position");
      if (t !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0) n = new It(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
        else for (let g = 0, b = n.count; g < b; g++) n.setXYZ(g, 0, 0, 0);
        const i = new k(), r = new k(), l = new k(), c = new k(), u = new k(), d = new k(), f = new k(), m = new k();
        if (e) for (let g = 0, b = e.count; g < b; g += 3) {
          const y = e.getX(g + 0), _ = e.getX(g + 1), v = e.getX(g + 2);
          i.fromBufferAttribute(t, y), r.fromBufferAttribute(t, _), l.fromBufferAttribute(t, v), f.subVectors(l, r), m.subVectors(i, r), f.cross(m), c.fromBufferAttribute(n, y), u.fromBufferAttribute(n, _), d.fromBufferAttribute(n, v), c.add(f), u.add(f), d.add(f), n.setXYZ(y, c.x, c.y, c.z), n.setXYZ(_, u.x, u.y, u.z), n.setXYZ(v, d.x, d.y, d.z);
        }
        else for (let g = 0, b = t.count; g < b; g += 3) i.fromBufferAttribute(t, g + 0), r.fromBufferAttribute(t, g + 1), l.fromBufferAttribute(t, g + 2), f.subVectors(l, r), m.subVectors(i, r), f.cross(m), n.setXYZ(g + 0, f.x, f.y, f.z), n.setXYZ(g + 1, f.x, f.y, f.z), n.setXYZ(g + 2, f.x, f.y, f.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    merge() {
      return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++) Ct.fromBufferAttribute(e, t), Ct.normalize(), e.setXYZ(t, Ct.x, Ct.y, Ct.z);
    }
    toNonIndexed() {
      function e(c, u) {
        const d = c.array, f = c.itemSize, m = c.normalized, g = new d.constructor(u.length * f);
        let b = 0, y = 0;
        for (let _ = 0, v = u.length; _ < v; _++) {
          c.isInterleavedBufferAttribute ? b = u[_] * c.data.stride + c.offset : b = u[_] * f;
          for (let w = 0; w < f; w++) g[y++] = d[b++];
        }
        return new It(g, f, m);
      }
      if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const t = new dn(), n = this.index.array, i = this.attributes;
      for (const c in i) {
        const u = i[c], d = e(u, n);
        t.setAttribute(c, d);
      }
      const r = this.morphAttributes;
      for (const c in r) {
        const u = [], d = r[c];
        for (let f = 0, m = d.length; f < m; f++) {
          const g = d[f], b = e(g, n);
          u.push(b);
        }
        t.morphAttributes[c] = u;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const l = this.groups;
      for (let c = 0, u = l.length; c < u; c++) {
        const d = l[c];
        t.addGroup(d.start, d.count, d.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
        const u = this.parameters;
        for (const d in u) u[d] !== void 0 && (e[d] = u[d]);
        return e;
      }
      e.data = {
        attributes: {}
      };
      const t = this.index;
      t !== null && (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      });
      const n = this.attributes;
      for (const u in n) {
        const d = n[u];
        e.data.attributes[u] = d.toJSON(e.data);
      }
      const i = {};
      let r = false;
      for (const u in this.morphAttributes) {
        const d = this.morphAttributes[u], f = [];
        for (let m = 0, g = d.length; m < g; m++) {
          const b = d[m];
          f.push(b.toJSON(e.data));
        }
        f.length > 0 && (i[u] = f, r = true);
      }
      r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
      const l = this.groups;
      l.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(l)));
      const c = this.boundingSphere;
      return c !== null && (e.data.boundingSphere = {
        center: c.center.toArray(),
        radius: c.radius
      }), e;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const t = {};
      this.name = e.name;
      const n = e.index;
      n !== null && this.setIndex(n.clone(t));
      const i = e.attributes;
      for (const d in i) {
        const f = i[d];
        this.setAttribute(d, f.clone(t));
      }
      const r = e.morphAttributes;
      for (const d in r) {
        const f = [], m = r[d];
        for (let g = 0, b = m.length; g < b; g++) f.push(m[g].clone(t));
        this.morphAttributes[d] = f;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const l = e.groups;
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        this.addGroup(m.start, m.count, m.materialIndex);
      }
      const c = e.boundingBox;
      c !== null && (this.boundingBox = c.clone());
      const u = e.boundingSphere;
      return u !== null && (this.boundingSphere = u.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  const Wc = new ze(), Ki = new Va(), na = new ms(), Bs = new k(), Vs = new k(), zs = new k(), ia = new k(), Lr = new k(), Rr = new ke(), Dr = new ke(), Ir = new ke(), sa = new k(), kr = new k();
  class Jt extends ut {
    constructor(e = new dn(), t = new kn()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, l = i.length; r < l; r++) {
            const c = i[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = r;
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, l = n.morphTargetsRelative;
      t.fromBufferAttribute(i, e);
      const c = this.morphTargetInfluences;
      if (r && c) {
        Lr.set(0, 0, 0);
        for (let u = 0, d = r.length; u < d; u++) {
          const f = c[u], m = r[u];
          f !== 0 && (ia.fromBufferAttribute(m, e), l ? Lr.addScaledVector(ia, f) : Lr.addScaledVector(ia.sub(t), f));
        }
        t.add(Lr);
      }
      return this.isSkinnedMesh && this.boneTransform(e, t), t;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.material, r = this.matrixWorld;
      if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), na.copy(n.boundingSphere), na.applyMatrix4(r), e.ray.intersectsSphere(na) === false) || (Wc.copy(r).invert(), Ki.copy(e.ray).applyMatrix4(Wc), n.boundingBox !== null && Ki.intersectsBox(n.boundingBox) === false)) return;
      let l;
      const c = n.index, u = n.attributes.position, d = n.attributes.uv, f = n.attributes.uv2, m = n.groups, g = n.drawRange;
      if (c !== null) if (Array.isArray(i)) for (let b = 0, y = m.length; b < y; b++) {
        const _ = m[b], v = i[_.materialIndex], w = Math.max(_.start, g.start), C = Math.min(c.count, Math.min(_.start + _.count, g.start + g.count));
        for (let S = w, M = C; S < M; S += 3) {
          const P = c.getX(S), N = c.getX(S + 1), F = c.getX(S + 2);
          l = Nr(this, v, e, Ki, d, f, P, N, F), l && (l.faceIndex = Math.floor(S / 3), l.face.materialIndex = _.materialIndex, t.push(l));
        }
      }
      else {
        const b = Math.max(0, g.start), y = Math.min(c.count, g.start + g.count);
        for (let _ = b, v = y; _ < v; _ += 3) {
          const w = c.getX(_), C = c.getX(_ + 1), S = c.getX(_ + 2);
          l = Nr(this, i, e, Ki, d, f, w, C, S), l && (l.faceIndex = Math.floor(_ / 3), t.push(l));
        }
      }
      else if (u !== void 0) if (Array.isArray(i)) for (let b = 0, y = m.length; b < y; b++) {
        const _ = m[b], v = i[_.materialIndex], w = Math.max(_.start, g.start), C = Math.min(u.count, Math.min(_.start + _.count, g.start + g.count));
        for (let S = w, M = C; S < M; S += 3) {
          const P = S, N = S + 1, F = S + 2;
          l = Nr(this, v, e, Ki, d, f, P, N, F), l && (l.faceIndex = Math.floor(S / 3), l.face.materialIndex = _.materialIndex, t.push(l));
        }
      }
      else {
        const b = Math.max(0, g.start), y = Math.min(u.count, g.start + g.count);
        for (let _ = b, v = y; _ < v; _ += 3) {
          const w = _, C = _ + 1, S = _ + 2;
          l = Nr(this, i, e, Ki, d, f, w, C, S), l && (l.faceIndex = Math.floor(_ / 3), t.push(l));
        }
      }
    }
  }
  function og(o, e, t, n, i, r, l, c) {
    let u;
    if (e.side === Qt ? u = n.intersectTriangle(l, r, i, true, c) : u = n.intersectTriangle(i, r, l, e.side === Fn, c), u === null) return null;
    kr.copy(c), kr.applyMatrix4(o.matrixWorld);
    const d = t.ray.origin.distanceTo(kr);
    return d < t.near || d > t.far ? null : {
      distance: d,
      point: kr.clone(),
      object: o
    };
  }
  function Nr(o, e, t, n, i, r, l, c, u) {
    o.getVertexPosition(l, Bs), o.getVertexPosition(c, Vs), o.getVertexPosition(u, zs);
    const d = og(o, e, t, n, Bs, Vs, zs, sa);
    if (d) {
      i && (Rr.fromBufferAttribute(i, l), Dr.fromBufferAttribute(i, c), Ir.fromBufferAttribute(i, u), d.uv = Rn.getUV(sa, Bs, Vs, zs, Rr, Dr, Ir, new ke())), r && (Rr.fromBufferAttribute(r, l), Dr.fromBufferAttribute(r, c), Ir.fromBufferAttribute(r, u), d.uv2 = Rn.getUV(sa, Bs, Vs, zs, Rr, Dr, Ir, new ke()));
      const f = {
        a: l,
        b: c,
        c: u,
        normal: new k(),
        materialIndex: 0
      };
      Rn.getNormal(Bs, Vs, zs, f.normal), d.face = f;
    }
    return d;
  }
  class gs extends dn {
    constructor(e = 1, t = 1, n = 1, i = 1, r = 1, l = 1) {
      super(), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: l
      };
      const c = this;
      i = Math.floor(i), r = Math.floor(r), l = Math.floor(l);
      const u = [], d = [], f = [], m = [];
      let g = 0, b = 0;
      y("z", "y", "x", -1, -1, n, t, e, l, r, 0), y("z", "y", "x", 1, -1, n, t, -e, l, r, 1), y("x", "z", "y", 1, 1, e, n, t, i, l, 2), y("x", "z", "y", 1, -1, e, n, -t, i, l, 3), y("x", "y", "z", 1, -1, e, t, n, i, r, 4), y("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(u), this.setAttribute("position", new On(d, 3)), this.setAttribute("normal", new On(f, 3)), this.setAttribute("uv", new On(m, 2));
      function y(_, v, w, C, S, M, P, N, F, E, I) {
        const V = M / F, ee = P / E, Q = M / 2, W = P / 2, G = N / 2, $ = F + 1, ie = E + 1;
        let te = 0, H = 0;
        const he = new k();
        for (let se = 0; se < ie; se++) {
          const Se = se * ee - W;
          for (let q = 0; q < $; q++) {
            const re = q * V - Q;
            he[_] = re * C, he[v] = Se * S, he[w] = G, d.push(he.x, he.y, he.z), he[_] = 0, he[v] = 0, he[w] = N > 0 ? 1 : -1, f.push(he.x, he.y, he.z), m.push(q / F), m.push(1 - se / E), te += 1;
          }
        }
        for (let se = 0; se < E; se++) for (let Se = 0; Se < F; Se++) {
          const q = g + Se + $ * se, re = g + Se + $ * (se + 1), ne = g + (Se + 1) + $ * (se + 1), oe = g + (Se + 1) + $ * se;
          u.push(q, re, oe), u.push(re, ne, oe), H += 6;
        }
        c.addGroup(b, H, I), b += H, g += te;
      }
    }
    static fromJSON(e) {
      return new gs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
  }
  function ds(o) {
    const e = {};
    for (const t in o) {
      e[t] = {};
      for (const n in o[t]) {
        const i = o[t][n];
        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
      }
    }
    return e;
  }
  function Gt(o) {
    const e = {};
    for (let t = 0; t < o.length; t++) {
      const n = ds(o[t]);
      for (const i in n) e[i] = n[i];
    }
    return e;
  }
  function ag(o) {
    const e = [];
    for (let t = 0; t < o.length; t++) e.push(o[t].clone());
    return e;
  }
  function gu(o) {
    return o.getRenderTarget() === null && o.outputEncoding === tt ? gn : er;
  }
  const lg = {
    clone: ds,
    merge: Gt
  };
  var cg = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, hg = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
  class Mi extends vn {
    constructor(e) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = cg, this.fragmentShader = hg, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.extensions = {
        derivatives: false,
        fragDepth: false,
        drawBuffers: false,
        shaderTextureLOD: false
      }, this.defaultAttributeValues = {
        color: [
          1,
          1,
          1
        ],
        uv: [
          0,
          0
        ],
        uv2: [
          0,
          0
        ]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ds(e.uniforms), this.uniformsGroups = ag(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      t.glslVersion = this.glslVersion, t.uniforms = {};
      for (const i in this.uniforms) {
        const l = this.uniforms[i].value;
        l && l.isTexture ? t.uniforms[i] = {
          type: "t",
          value: l.toJSON(e).uuid
        } : l && l.isColor ? t.uniforms[i] = {
          type: "c",
          value: l.getHex()
        } : l && l.isVector2 ? t.uniforms[i] = {
          type: "v2",
          value: l.toArray()
        } : l && l.isVector3 ? t.uniforms[i] = {
          type: "v3",
          value: l.toArray()
        } : l && l.isVector4 ? t.uniforms[i] = {
          type: "v4",
          value: l.toArray()
        } : l && l.isMatrix3 ? t.uniforms[i] = {
          type: "m3",
          value: l.toArray()
        } : l && l.isMatrix4 ? t.uniforms[i] = {
          type: "m4",
          value: l.toArray()
        } : t.uniforms[i] = {
          value: l
        };
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
      const n = {};
      for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
      return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
  }
  let _u = class extends ut {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ze(), this.projectionMatrix = new ze(), this.projectionMatrixInverse = new ze();
    }
    copy(e, t) {
      return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(true, false);
      const t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  class Ht extends _u {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    }
    setFocalLength(e) {
      const t = 0.5 * this.getFilmHeight() / e;
      this.fov = tr * 2 * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan($s * 0.5 * this.fov);
      return 0.5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
      return tr * 2 * Math.atan(Math.tan($s * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, r, l) {
      this.aspect = e / t, this.view === null && (this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = l, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = e * Math.tan($s * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
      const l = this.view;
      if (this.view !== null && this.view.enabled) {
        const u = l.fullWidth, d = l.fullHeight;
        r += l.offsetX * i / u, t -= l.offsetY * n / d, i *= l.width / u, n *= l.height / d;
      }
      const c = this.filmOffset;
      c !== 0 && (r += e * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
  }
  const Yi = -90, $i = 1;
  class ug extends ut {
    constructor(e, t, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n;
      const i = new Ht(Yi, $i, e, t);
      i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
      const r = new Ht(Yi, $i, e, t);
      r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
      const l = new Ht(Yi, $i, e, t);
      l.layers = this.layers, l.up.set(0, 0, -1), l.lookAt(0, 1, 0), this.add(l);
      const c = new Ht(Yi, $i, e, t);
      c.layers = this.layers, c.up.set(0, 0, 1), c.lookAt(0, -1, 0), this.add(c);
      const u = new Ht(Yi, $i, e, t);
      u.layers = this.layers, u.up.set(0, 1, 0), u.lookAt(0, 0, 1), this.add(u);
      const d = new Ht(Yi, $i, e, t);
      d.layers = this.layers, d.up.set(0, 1, 0), d.lookAt(0, 0, -1), this.add(d);
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      const n = this.renderTarget, [i, r, l, c, u, d] = this.children, f = e.getRenderTarget(), m = e.toneMapping, g = e.xr.enabled;
      e.toneMapping = Nn, e.xr.enabled = false;
      const b = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, l), e.setRenderTarget(n, 3), e.render(t, c), e.setRenderTarget(n, 4), e.render(t, u), n.texture.generateMipmaps = b, e.setRenderTarget(n, 5), e.render(t, d), e.setRenderTarget(f), e.toneMapping = m, e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
    }
  }
  class vu extends Dt {
    constructor(e, t, n, i, r, l, c, u, d, f) {
      e = e !== void 0 ? e : [], t = t !== void 0 ? t : as, super(e, t, n, i, r, l, c, u, d, f), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  class dg extends wi {
    constructor(e = 1, t = {}) {
      super(e, e, t), this.isWebGLCubeRenderTarget = true;
      const n = {
        width: e,
        height: e,
        depth: 1
      }, i = [
        n,
        n,
        n,
        n,
        n,
        n
      ];
      this.texture = new vu(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : qt;
    }
    fromEquirectangularTexture(e, t) {
      this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
      const n = {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      }, i = new gs(5, 5, 5), r = new Mi({
        name: "CubemapFromEquirect",
        uniforms: ds(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Qt,
        blending: Qn
      });
      r.uniforms.tEquirect.value = t;
      const l = new Jt(i, r), c = t.minFilter;
      return t.minFilter === bi && (t.minFilter = qt), new ug(1, 10, this).update(e, l), t.minFilter = c, l.geometry.dispose(), l.material.dispose(), this;
    }
    clear(e, t, n, i) {
      const r = e.getRenderTarget();
      for (let l = 0; l < 6; l++) e.setRenderTarget(this, l), e.clear(t, n, i);
      e.setRenderTarget(r);
    }
  }
  const ra = new k(), pg = new k(), fg = new Zt();
  class di {
    constructor(e = new k(1, 0, 0), t = 0) {
      this.isPlane = true, this.normal = e, this.constant = t;
    }
    set(e, t) {
      return this.normal.copy(e), this.constant = t, this;
    }
    setComponents(e, t, n, i) {
      return this.normal.set(e, t, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
    }
    setFromCoplanarPoints(e, t, n) {
      const i = ra.subVectors(n, t).cross(pg.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this;
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), this.constant *= e, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
    }
    intersectLine(e, t) {
      const n = e.delta(ra), i = this.normal.dot(n);
      if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      const r = -(e.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
      return t < 0 && n > 0 || n < 0 && t > 0;
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      const n = t || fg.getNormalMatrix(e), i = this.coplanarPoint(ra).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this;
    }
    translate(e) {
      return this.constant -= e.dot(this.normal), this;
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Zi = new ms(), Or = new k();
  class za {
    constructor(e = new di(), t = new di(), n = new di(), i = new di(), r = new di(), l = new di()) {
      this.planes = [
        e,
        t,
        n,
        i,
        r,
        l
      ];
    }
    set(e, t, n, i, r, l) {
      const c = this.planes;
      return c[0].copy(e), c[1].copy(t), c[2].copy(n), c[3].copy(i), c[4].copy(r), c[5].copy(l), this;
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e) {
      const t = this.planes, n = e.elements, i = n[0], r = n[1], l = n[2], c = n[3], u = n[4], d = n[5], f = n[6], m = n[7], g = n[8], b = n[9], y = n[10], _ = n[11], v = n[12], w = n[13], C = n[14], S = n[15];
      return t[0].setComponents(c - i, m - u, _ - g, S - v).normalize(), t[1].setComponents(c + i, m + u, _ + g, S + v).normalize(), t[2].setComponents(c + r, m + d, _ + b, S + w).normalize(), t[3].setComponents(c - r, m - d, _ - b, S - w).normalize(), t[4].setComponents(c - l, m - f, _ - y, S - C).normalize(), t[5].setComponents(c + l, m + f, _ + y, S + C).normalize(), this;
    }
    intersectsObject(e) {
      const t = e.geometry;
      return t.boundingSphere === null && t.computeBoundingSphere(), Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Zi);
    }
    intersectsSprite(e) {
      return Zi.center.set(0, 0, 0), Zi.radius = 0.7071067811865476, Zi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Zi);
    }
    intersectsSphere(e) {
      const t = this.planes, n = e.center, i = -e.radius;
      for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return false;
      return true;
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = t[n];
        if (Or.x = i.normal.x > 0 ? e.max.x : e.min.x, Or.y = i.normal.y > 0 ? e.max.y : e.min.y, Or.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Or) < 0) return false;
      }
      return true;
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function bu() {
    let o = null, e = false, t = null, n = null;
    function i(r, l) {
      t(r, l), n = o.requestAnimationFrame(i);
    }
    return {
      start: function() {
        e !== true && t !== null && (n = o.requestAnimationFrame(i), e = true);
      },
      stop: function() {
        o.cancelAnimationFrame(n), e = false;
      },
      setAnimationLoop: function(r) {
        t = r;
      },
      setContext: function(r) {
        o = r;
      }
    };
  }
  function mg(o, e) {
    const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
    function i(d, f) {
      const m = d.array, g = d.usage, b = o.createBuffer();
      o.bindBuffer(f, b), o.bufferData(f, m, g), d.onUploadCallback();
      let y;
      if (m instanceof Float32Array) y = 5126;
      else if (m instanceof Uint16Array) if (d.isFloat16BufferAttribute) if (t) y = 5131;
      else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else y = 5123;
      else if (m instanceof Int16Array) y = 5122;
      else if (m instanceof Uint32Array) y = 5125;
      else if (m instanceof Int32Array) y = 5124;
      else if (m instanceof Int8Array) y = 5120;
      else if (m instanceof Uint8Array) y = 5121;
      else if (m instanceof Uint8ClampedArray) y = 5121;
      else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + m);
      return {
        buffer: b,
        type: y,
        bytesPerElement: m.BYTES_PER_ELEMENT,
        version: d.version
      };
    }
    function r(d, f, m) {
      const g = f.array, b = f.updateRange;
      o.bindBuffer(m, d), b.count === -1 ? o.bufferSubData(m, 0, g) : (t ? o.bufferSubData(m, b.offset * g.BYTES_PER_ELEMENT, g, b.offset, b.count) : o.bufferSubData(m, b.offset * g.BYTES_PER_ELEMENT, g.subarray(b.offset, b.offset + b.count)), b.count = -1), f.onUploadCallback();
    }
    function l(d) {
      return d.isInterleavedBufferAttribute && (d = d.data), n.get(d);
    }
    function c(d) {
      d.isInterleavedBufferAttribute && (d = d.data);
      const f = n.get(d);
      f && (o.deleteBuffer(f.buffer), n.delete(d));
    }
    function u(d, f) {
      if (d.isGLBufferAttribute) {
        const g = n.get(d);
        (!g || g.version < d.version) && n.set(d, {
          buffer: d.buffer,
          type: d.type,
          bytesPerElement: d.elementSize,
          version: d.version
        });
        return;
      }
      d.isInterleavedBufferAttribute && (d = d.data);
      const m = n.get(d);
      m === void 0 ? n.set(d, i(d, f)) : m.version < d.version && (r(m.buffer, d, f), m.version = d.version);
    }
    return {
      get: l,
      remove: c,
      update: u
    };
  }
  class Ga extends dn {
    constructor(e = 1, t = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      };
      const r = e / 2, l = t / 2, c = Math.floor(n), u = Math.floor(i), d = c + 1, f = u + 1, m = e / c, g = t / u, b = [], y = [], _ = [], v = [];
      for (let w = 0; w < f; w++) {
        const C = w * g - l;
        for (let S = 0; S < d; S++) {
          const M = S * m - r;
          y.push(M, -C, 0), _.push(0, 0, 1), v.push(S / c), v.push(1 - w / u);
        }
      }
      for (let w = 0; w < u; w++) for (let C = 0; C < c; C++) {
        const S = C + d * w, M = C + d * (w + 1), P = C + 1 + d * (w + 1), N = C + 1 + d * w;
        b.push(S, M, N), b.push(M, P, N);
      }
      this.setIndex(b), this.setAttribute("position", new On(y, 3)), this.setAttribute("normal", new On(_, 3)), this.setAttribute("uv", new On(v, 2));
    }
    static fromJSON(e) {
      return new Ga(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  var gg = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, _g = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, vg = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, bg = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, xg = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, yg = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, wg = "vec3 transformed = vec3( position );", Mg = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Sg = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Eg = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Tg = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Cg = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Ag = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Pg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Lg = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Rg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Dg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ig = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, kg = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Ng = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Og = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Fg = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Ug = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Bg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Vg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, zg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Gg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Hg = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Wg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, jg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, qg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Xg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Kg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Yg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, $g = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Zg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Jg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Qg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, e_ = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, t_ = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, n_ = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, i_ = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, s_ = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, r_ = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, o_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, a_ = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, l_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, c_ = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, h_ = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, u_ = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, d_ = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, p_ = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, f_ = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, m_ = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, g_ = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, __ = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, v_ = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, b_ = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, x_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, y_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, w_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, M_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, S_ = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, E_ = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, T_ = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, C_ = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, A_ = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, P_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, L_ = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, R_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, D_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, I_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, k_ = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, N_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, O_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, F_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, U_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, B_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, V_ = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, z_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, G_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, H_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, W_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, j_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, q_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, X_ = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, K_ = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Y_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, $_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Z_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, J_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Q_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ev = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, tv = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, nv = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, iv = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, sv = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, rv = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, ov = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, av = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, lv = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, cv = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, hv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, uv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, dv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, pv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
  const fv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, mv = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, gv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _v = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, vv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, bv = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, xv = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, yv = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, wv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Mv = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Sv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ev = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Tv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Cv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Av = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Pv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lv = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Rv = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dv = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Iv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Nv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Ov = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Uv = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Bv = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vv = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Hv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Wv = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, qv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Xv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Ve = {
    alphamap_fragment: gg,
    alphamap_pars_fragment: _g,
    alphatest_fragment: vg,
    alphatest_pars_fragment: bg,
    aomap_fragment: xg,
    aomap_pars_fragment: yg,
    begin_vertex: wg,
    beginnormal_vertex: Mg,
    bsdfs: Sg,
    iridescence_fragment: Eg,
    bumpmap_pars_fragment: Tg,
    clipping_planes_fragment: Cg,
    clipping_planes_pars_fragment: Ag,
    clipping_planes_pars_vertex: Pg,
    clipping_planes_vertex: Lg,
    color_fragment: Rg,
    color_pars_fragment: Dg,
    color_pars_vertex: Ig,
    color_vertex: kg,
    common: Ng,
    cube_uv_reflection_fragment: Og,
    defaultnormal_vertex: Fg,
    displacementmap_pars_vertex: Ug,
    displacementmap_vertex: Bg,
    emissivemap_fragment: Vg,
    emissivemap_pars_fragment: zg,
    encodings_fragment: Gg,
    encodings_pars_fragment: Hg,
    envmap_fragment: Wg,
    envmap_common_pars_fragment: jg,
    envmap_pars_fragment: qg,
    envmap_pars_vertex: Xg,
    envmap_physical_pars_fragment: r_,
    envmap_vertex: Kg,
    fog_vertex: Yg,
    fog_pars_vertex: $g,
    fog_fragment: Zg,
    fog_pars_fragment: Jg,
    gradientmap_pars_fragment: Qg,
    lightmap_fragment: e_,
    lightmap_pars_fragment: t_,
    lights_lambert_fragment: n_,
    lights_lambert_pars_fragment: i_,
    lights_pars_begin: s_,
    lights_toon_fragment: o_,
    lights_toon_pars_fragment: a_,
    lights_phong_fragment: l_,
    lights_phong_pars_fragment: c_,
    lights_physical_fragment: h_,
    lights_physical_pars_fragment: u_,
    lights_fragment_begin: d_,
    lights_fragment_maps: p_,
    lights_fragment_end: f_,
    logdepthbuf_fragment: m_,
    logdepthbuf_pars_fragment: g_,
    logdepthbuf_pars_vertex: __,
    logdepthbuf_vertex: v_,
    map_fragment: b_,
    map_pars_fragment: x_,
    map_particle_fragment: y_,
    map_particle_pars_fragment: w_,
    metalnessmap_fragment: M_,
    metalnessmap_pars_fragment: S_,
    morphcolor_vertex: E_,
    morphnormal_vertex: T_,
    morphtarget_pars_vertex: C_,
    morphtarget_vertex: A_,
    normal_fragment_begin: P_,
    normal_fragment_maps: L_,
    normal_pars_fragment: R_,
    normal_pars_vertex: D_,
    normal_vertex: I_,
    normalmap_pars_fragment: k_,
    clearcoat_normal_fragment_begin: N_,
    clearcoat_normal_fragment_maps: O_,
    clearcoat_pars_fragment: F_,
    iridescence_pars_fragment: U_,
    output_fragment: B_,
    packing: V_,
    premultiplied_alpha_fragment: z_,
    project_vertex: G_,
    dithering_fragment: H_,
    dithering_pars_fragment: W_,
    roughnessmap_fragment: j_,
    roughnessmap_pars_fragment: q_,
    shadowmap_pars_fragment: X_,
    shadowmap_pars_vertex: K_,
    shadowmap_vertex: Y_,
    shadowmask_pars_fragment: $_,
    skinbase_vertex: Z_,
    skinning_pars_vertex: J_,
    skinning_vertex: Q_,
    skinnormal_vertex: ev,
    specularmap_fragment: tv,
    specularmap_pars_fragment: nv,
    tonemapping_fragment: iv,
    tonemapping_pars_fragment: sv,
    transmission_fragment: rv,
    transmission_pars_fragment: ov,
    uv_pars_fragment: av,
    uv_pars_vertex: lv,
    uv_vertex: cv,
    uv2_pars_fragment: hv,
    uv2_pars_vertex: uv,
    uv2_vertex: dv,
    worldpos_vertex: pv,
    background_vert: fv,
    background_frag: mv,
    backgroundCube_vert: gv,
    backgroundCube_frag: _v,
    cube_vert: vv,
    cube_frag: bv,
    depth_vert: xv,
    depth_frag: yv,
    distanceRGBA_vert: wv,
    distanceRGBA_frag: Mv,
    equirect_vert: Sv,
    equirect_frag: Ev,
    linedashed_vert: Tv,
    linedashed_frag: Cv,
    meshbasic_vert: Av,
    meshbasic_frag: Pv,
    meshlambert_vert: Lv,
    meshlambert_frag: Rv,
    meshmatcap_vert: Dv,
    meshmatcap_frag: Iv,
    meshnormal_vert: kv,
    meshnormal_frag: Nv,
    meshphong_vert: Ov,
    meshphong_frag: Fv,
    meshphysical_vert: Uv,
    meshphysical_frag: Bv,
    meshtoon_vert: Vv,
    meshtoon_frag: zv,
    points_vert: Gv,
    points_frag: Hv,
    shadow_vert: Wv,
    shadow_frag: jv,
    sprite_vert: qv,
    sprite_frag: Xv
  }, de = {
    common: {
      diffuse: {
        value: new He(16777215)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new Zt()
      },
      uv2Transform: {
        value: new Zt()
      },
      alphaMap: {
        value: null
      },
      alphaTest: {
        value: 0
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      ior: {
        value: 1.5
      },
      refractionRatio: {
        value: 0.98
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new ke(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new He(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotLightMap: {
        value: []
      },
      spotShadowMap: {
        value: []
      },
      spotLightMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new He(16777215)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      alphaTest: {
        value: 0
      },
      uvTransform: {
        value: new Zt()
      }
    },
    sprite: {
      diffuse: {
        value: new He(16777215)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new ke(0.5, 0.5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      alphaTest: {
        value: 0
      },
      uvTransform: {
        value: new Zt()
      }
    }
  }, _n = {
    basic: {
      uniforms: Gt([
        de.common,
        de.specularmap,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.fog
      ]),
      vertexShader: Ve.meshbasic_vert,
      fragmentShader: Ve.meshbasic_frag
    },
    lambert: {
      uniforms: Gt([
        de.common,
        de.specularmap,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.fog,
        de.lights,
        {
          emissive: {
            value: new He(0)
          }
        }
      ]),
      vertexShader: Ve.meshlambert_vert,
      fragmentShader: Ve.meshlambert_frag
    },
    phong: {
      uniforms: Gt([
        de.common,
        de.specularmap,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.fog,
        de.lights,
        {
          emissive: {
            value: new He(0)
          },
          specular: {
            value: new He(1118481)
          },
          shininess: {
            value: 30
          }
        }
      ]),
      vertexShader: Ve.meshphong_vert,
      fragmentShader: Ve.meshphong_frag
    },
    standard: {
      uniforms: Gt([
        de.common,
        de.envmap,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.roughnessmap,
        de.metalnessmap,
        de.fog,
        de.lights,
        {
          emissive: {
            value: new He(0)
          },
          roughness: {
            value: 1
          },
          metalness: {
            value: 0
          },
          envMapIntensity: {
            value: 1
          }
        }
      ]),
      vertexShader: Ve.meshphysical_vert,
      fragmentShader: Ve.meshphysical_frag
    },
    toon: {
      uniforms: Gt([
        de.common,
        de.aomap,
        de.lightmap,
        de.emissivemap,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.gradientmap,
        de.fog,
        de.lights,
        {
          emissive: {
            value: new He(0)
          }
        }
      ]),
      vertexShader: Ve.meshtoon_vert,
      fragmentShader: Ve.meshtoon_frag
    },
    matcap: {
      uniforms: Gt([
        de.common,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        de.fog,
        {
          matcap: {
            value: null
          }
        }
      ]),
      vertexShader: Ve.meshmatcap_vert,
      fragmentShader: Ve.meshmatcap_frag
    },
    points: {
      uniforms: Gt([
        de.points,
        de.fog
      ]),
      vertexShader: Ve.points_vert,
      fragmentShader: Ve.points_frag
    },
    dashed: {
      uniforms: Gt([
        de.common,
        de.fog,
        {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }
      ]),
      vertexShader: Ve.linedashed_vert,
      fragmentShader: Ve.linedashed_frag
    },
    depth: {
      uniforms: Gt([
        de.common,
        de.displacementmap
      ]),
      vertexShader: Ve.depth_vert,
      fragmentShader: Ve.depth_frag
    },
    normal: {
      uniforms: Gt([
        de.common,
        de.bumpmap,
        de.normalmap,
        de.displacementmap,
        {
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: Ve.meshnormal_vert,
      fragmentShader: Ve.meshnormal_frag
    },
    sprite: {
      uniforms: Gt([
        de.sprite,
        de.fog
      ]),
      vertexShader: Ve.sprite_vert,
      fragmentShader: Ve.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new Zt()
        },
        t2D: {
          value: null
        },
        backgroundIntensity: {
          value: 1
        }
      },
      vertexShader: Ve.background_vert,
      fragmentShader: Ve.background_frag
    },
    backgroundCube: {
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        backgroundBlurriness: {
          value: 0
        },
        backgroundIntensity: {
          value: 1
        }
      },
      vertexShader: Ve.backgroundCube_vert,
      fragmentShader: Ve.backgroundCube_frag
    },
    cube: {
      uniforms: {
        tCube: {
          value: null
        },
        tFlip: {
          value: -1
        },
        opacity: {
          value: 1
        }
      },
      vertexShader: Ve.cube_vert,
      fragmentShader: Ve.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: Ve.equirect_vert,
      fragmentShader: Ve.equirect_frag
    },
    distanceRGBA: {
      uniforms: Gt([
        de.common,
        de.displacementmap,
        {
          referencePosition: {
            value: new k()
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }
      ]),
      vertexShader: Ve.distanceRGBA_vert,
      fragmentShader: Ve.distanceRGBA_frag
    },
    shadow: {
      uniforms: Gt([
        de.lights,
        de.fog,
        {
          color: {
            value: new He(0)
          },
          opacity: {
            value: 1
          }
        }
      ]),
      vertexShader: Ve.shadow_vert,
      fragmentShader: Ve.shadow_frag
    }
  };
  _n.physical = {
    uniforms: Gt([
      _n.standard.uniforms,
      {
        clearcoat: {
          value: 0
        },
        clearcoatMap: {
          value: null
        },
        clearcoatRoughness: {
          value: 0
        },
        clearcoatRoughnessMap: {
          value: null
        },
        clearcoatNormalScale: {
          value: new ke(1, 1)
        },
        clearcoatNormalMap: {
          value: null
        },
        iridescence: {
          value: 0
        },
        iridescenceMap: {
          value: null
        },
        iridescenceIOR: {
          value: 1.3
        },
        iridescenceThicknessMinimum: {
          value: 100
        },
        iridescenceThicknessMaximum: {
          value: 400
        },
        iridescenceThicknessMap: {
          value: null
        },
        sheen: {
          value: 0
        },
        sheenColor: {
          value: new He(0)
        },
        sheenColorMap: {
          value: null
        },
        sheenRoughness: {
          value: 1
        },
        sheenRoughnessMap: {
          value: null
        },
        transmission: {
          value: 0
        },
        transmissionMap: {
          value: null
        },
        transmissionSamplerSize: {
          value: new ke()
        },
        transmissionSamplerMap: {
          value: null
        },
        thickness: {
          value: 0
        },
        thicknessMap: {
          value: null
        },
        attenuationDistance: {
          value: 0
        },
        attenuationColor: {
          value: new He(0)
        },
        specularIntensity: {
          value: 1
        },
        specularIntensityMap: {
          value: null
        },
        specularColor: {
          value: new He(1, 1, 1)
        },
        specularColorMap: {
          value: null
        }
      }
    ]),
    vertexShader: Ve.meshphysical_vert,
    fragmentShader: Ve.meshphysical_frag
  };
  const Fr = {
    r: 0,
    b: 0,
    g: 0
  };
  function Kv(o, e, t, n, i, r, l) {
    const c = new He(0);
    let u = r === true ? 0 : 1, d, f, m = null, g = 0, b = null;
    function y(v, w) {
      let C = false, S = w.isScene === true ? w.background : null;
      S && S.isTexture && (S = (w.backgroundBlurriness > 0 ? t : e).get(S));
      const M = o.xr, P = M.getSession && M.getSession();
      P && P.environmentBlendMode === "additive" && (S = null), S === null ? _(c, u) : S && S.isColor && (_(S, 1), C = true), (o.autoClear || C) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), S && (S.isCubeTexture || S.mapping === Qr) ? (f === void 0 && (f = new Jt(new gs(1, 1, 1), new Mi({
        name: "BackgroundCubeMaterial",
        uniforms: ds(_n.backgroundCube.uniforms),
        vertexShader: _n.backgroundCube.vertexShader,
        fragmentShader: _n.backgroundCube.fragmentShader,
        side: Qt,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), f.geometry.deleteAttribute("normal"), f.geometry.deleteAttribute("uv"), f.onBeforeRender = function(N, F, E) {
        this.matrixWorld.copyPosition(E.matrixWorld);
      }, Object.defineProperty(f.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), i.update(f)), f.material.uniforms.envMap.value = S, f.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === false ? -1 : 1, f.material.uniforms.backgroundBlurriness.value = w.backgroundBlurriness, f.material.uniforms.backgroundIntensity.value = w.backgroundIntensity, f.material.toneMapped = S.encoding !== tt, (m !== S || g !== S.version || b !== o.toneMapping) && (f.material.needsUpdate = true, m = S, g = S.version, b = o.toneMapping), f.layers.enableAll(), v.unshift(f, f.geometry, f.material, 0, 0, null)) : S && S.isTexture && (d === void 0 && (d = new Jt(new Ga(2, 2), new Mi({
        name: "BackgroundMaterial",
        uniforms: ds(_n.background.uniforms),
        vertexShader: _n.background.vertexShader,
        fragmentShader: _n.background.fragmentShader,
        side: Fn,
        depthTest: false,
        depthWrite: false,
        fog: false
      })), d.geometry.deleteAttribute("normal"), Object.defineProperty(d.material, "map", {
        get: function() {
          return this.uniforms.t2D.value;
        }
      }), i.update(d)), d.material.uniforms.t2D.value = S, d.material.uniforms.backgroundIntensity.value = w.backgroundIntensity, d.material.toneMapped = S.encoding !== tt, S.matrixAutoUpdate === true && S.updateMatrix(), d.material.uniforms.uvTransform.value.copy(S.matrix), (m !== S || g !== S.version || b !== o.toneMapping) && (d.material.needsUpdate = true, m = S, g = S.version, b = o.toneMapping), d.layers.enableAll(), v.unshift(d, d.geometry, d.material, 0, 0, null));
    }
    function _(v, w) {
      v.getRGB(Fr, gu(o)), n.buffers.color.setClear(Fr.r, Fr.g, Fr.b, w, l);
    }
    return {
      getClearColor: function() {
        return c;
      },
      setClearColor: function(v, w = 1) {
        c.set(v), u = w, _(c, u);
      },
      getClearAlpha: function() {
        return u;
      },
      setClearAlpha: function(v) {
        u = v, _(c, u);
      },
      render: y
    };
  }
  function Yv(o, e, t, n) {
    const i = o.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), l = n.isWebGL2 || r !== null, c = {}, u = v(null);
    let d = u, f = false;
    function m(G, $, ie, te, H) {
      let he = false;
      if (l) {
        const se = _(te, ie, $);
        d !== se && (d = se, b(d.object)), he = w(G, te, ie, H), he && C(G, te, ie, H);
      } else {
        const se = $.wireframe === true;
        (d.geometry !== te.id || d.program !== ie.id || d.wireframe !== se) && (d.geometry = te.id, d.program = ie.id, d.wireframe = se, he = true);
      }
      H !== null && t.update(H, 34963), (he || f) && (f = false, E(G, $, ie, te), H !== null && o.bindBuffer(34963, t.get(H).buffer));
    }
    function g() {
      return n.isWebGL2 ? o.createVertexArray() : r.createVertexArrayOES();
    }
    function b(G) {
      return n.isWebGL2 ? o.bindVertexArray(G) : r.bindVertexArrayOES(G);
    }
    function y(G) {
      return n.isWebGL2 ? o.deleteVertexArray(G) : r.deleteVertexArrayOES(G);
    }
    function _(G, $, ie) {
      const te = ie.wireframe === true;
      let H = c[G.id];
      H === void 0 && (H = {}, c[G.id] = H);
      let he = H[$.id];
      he === void 0 && (he = {}, H[$.id] = he);
      let se = he[te];
      return se === void 0 && (se = v(g()), he[te] = se), se;
    }
    function v(G) {
      const $ = [], ie = [], te = [];
      for (let H = 0; H < i; H++) $[H] = 0, ie[H] = 0, te[H] = 0;
      return {
        geometry: null,
        program: null,
        wireframe: false,
        newAttributes: $,
        enabledAttributes: ie,
        attributeDivisors: te,
        object: G,
        attributes: {},
        index: null
      };
    }
    function w(G, $, ie, te) {
      const H = d.attributes, he = $.attributes;
      let se = 0;
      const Se = ie.getAttributes();
      for (const q in Se) if (Se[q].location >= 0) {
        const ne = H[q];
        let oe = he[q];
        if (oe === void 0 && (q === "instanceMatrix" && G.instanceMatrix && (oe = G.instanceMatrix), q === "instanceColor" && G.instanceColor && (oe = G.instanceColor)), ne === void 0 || ne.attribute !== oe || oe && ne.data !== oe.data) return true;
        se++;
      }
      return d.attributesNum !== se || d.index !== te;
    }
    function C(G, $, ie, te) {
      const H = {}, he = $.attributes;
      let se = 0;
      const Se = ie.getAttributes();
      for (const q in Se) if (Se[q].location >= 0) {
        let ne = he[q];
        ne === void 0 && (q === "instanceMatrix" && G.instanceMatrix && (ne = G.instanceMatrix), q === "instanceColor" && G.instanceColor && (ne = G.instanceColor));
        const oe = {};
        oe.attribute = ne, ne && ne.data && (oe.data = ne.data), H[q] = oe, se++;
      }
      d.attributes = H, d.attributesNum = se, d.index = te;
    }
    function S() {
      const G = d.newAttributes;
      for (let $ = 0, ie = G.length; $ < ie; $++) G[$] = 0;
    }
    function M(G) {
      P(G, 0);
    }
    function P(G, $) {
      const ie = d.newAttributes, te = d.enabledAttributes, H = d.attributeDivisors;
      ie[G] = 1, te[G] === 0 && (o.enableVertexAttribArray(G), te[G] = 1), H[G] !== $ && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](G, $), H[G] = $);
    }
    function N() {
      const G = d.newAttributes, $ = d.enabledAttributes;
      for (let ie = 0, te = $.length; ie < te; ie++) $[ie] !== G[ie] && (o.disableVertexAttribArray(ie), $[ie] = 0);
    }
    function F(G, $, ie, te, H, he) {
      n.isWebGL2 === true && (ie === 5124 || ie === 5125) ? o.vertexAttribIPointer(G, $, ie, H, he) : o.vertexAttribPointer(G, $, ie, te, H, he);
    }
    function E(G, $, ie, te) {
      if (n.isWebGL2 === false && (G.isInstancedMesh || te.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
      S();
      const H = te.attributes, he = ie.getAttributes(), se = $.defaultAttributeValues;
      for (const Se in he) {
        const q = he[Se];
        if (q.location >= 0) {
          let re = H[Se];
          if (re === void 0 && (Se === "instanceMatrix" && G.instanceMatrix && (re = G.instanceMatrix), Se === "instanceColor" && G.instanceColor && (re = G.instanceColor)), re !== void 0) {
            const ne = re.normalized, oe = re.itemSize, X = t.get(re);
            if (X === void 0) continue;
            const De = X.buffer, xe = X.type, ye = X.bytesPerElement;
            if (re.isInterleavedBufferAttribute) {
              const me = re.data, Ue = me.stride, Ie = re.offset;
              if (me.isInstancedInterleavedBuffer) {
                for (let Te = 0; Te < q.locationSize; Te++) P(q.location + Te, me.meshPerAttribute);
                G.isInstancedMesh !== true && te._maxInstanceCount === void 0 && (te._maxInstanceCount = me.meshPerAttribute * me.count);
              } else for (let Te = 0; Te < q.locationSize; Te++) M(q.location + Te);
              o.bindBuffer(34962, De);
              for (let Te = 0; Te < q.locationSize; Te++) F(q.location + Te, oe / q.locationSize, xe, ne, Ue * ye, (Ie + oe / q.locationSize * Te) * ye);
            } else {
              if (re.isInstancedBufferAttribute) {
                for (let me = 0; me < q.locationSize; me++) P(q.location + me, re.meshPerAttribute);
                G.isInstancedMesh !== true && te._maxInstanceCount === void 0 && (te._maxInstanceCount = re.meshPerAttribute * re.count);
              } else for (let me = 0; me < q.locationSize; me++) M(q.location + me);
              o.bindBuffer(34962, De);
              for (let me = 0; me < q.locationSize; me++) F(q.location + me, oe / q.locationSize, xe, ne, oe * ye, oe / q.locationSize * me * ye);
            }
          } else if (se !== void 0) {
            const ne = se[Se];
            if (ne !== void 0) switch (ne.length) {
              case 2:
                o.vertexAttrib2fv(q.location, ne);
                break;
              case 3:
                o.vertexAttrib3fv(q.location, ne);
                break;
              case 4:
                o.vertexAttrib4fv(q.location, ne);
                break;
              default:
                o.vertexAttrib1fv(q.location, ne);
            }
          }
        }
      }
      N();
    }
    function I() {
      Q();
      for (const G in c) {
        const $ = c[G];
        for (const ie in $) {
          const te = $[ie];
          for (const H in te) y(te[H].object), delete te[H];
          delete $[ie];
        }
        delete c[G];
      }
    }
    function V(G) {
      if (c[G.id] === void 0) return;
      const $ = c[G.id];
      for (const ie in $) {
        const te = $[ie];
        for (const H in te) y(te[H].object), delete te[H];
        delete $[ie];
      }
      delete c[G.id];
    }
    function ee(G) {
      for (const $ in c) {
        const ie = c[$];
        if (ie[G.id] === void 0) continue;
        const te = ie[G.id];
        for (const H in te) y(te[H].object), delete te[H];
        delete ie[G.id];
      }
    }
    function Q() {
      W(), f = true, d !== u && (d = u, b(d.object));
    }
    function W() {
      u.geometry = null, u.program = null, u.wireframe = false;
    }
    return {
      setup: m,
      reset: Q,
      resetDefaultState: W,
      dispose: I,
      releaseStatesOfGeometry: V,
      releaseStatesOfProgram: ee,
      initAttributes: S,
      enableAttribute: M,
      disableUnusedAttributes: N
    };
  }
  function $v(o, e, t, n) {
    const i = n.isWebGL2;
    let r;
    function l(d) {
      r = d;
    }
    function c(d, f) {
      o.drawArrays(r, d, f), t.update(f, r, 1);
    }
    function u(d, f, m) {
      if (m === 0) return;
      let g, b;
      if (i) g = o, b = "drawArraysInstanced";
      else if (g = e.get("ANGLE_instanced_arrays"), b = "drawArraysInstancedANGLE", g === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
      g[b](r, d, f, m), t.update(f, r, m);
    }
    this.setMode = l, this.render = c, this.renderInstances = u;
  }
  function Zv(o, e, t) {
    let n;
    function i() {
      if (n !== void 0) return n;
      if (e.has("EXT_texture_filter_anisotropic") === true) {
        const F = e.get("EXT_texture_filter_anisotropic");
        n = o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else n = 0;
      return n;
    }
    function r(F) {
      if (F === "highp") {
        if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        F = "mediump";
      }
      return F === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }
    const l = typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext;
    let c = t.precision !== void 0 ? t.precision : "highp";
    const u = r(c);
    u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
    const d = l || e.has("WEBGL_draw_buffers"), f = t.logarithmicDepthBuffer === true, m = o.getParameter(34930), g = o.getParameter(35660), b = o.getParameter(3379), y = o.getParameter(34076), _ = o.getParameter(34921), v = o.getParameter(36347), w = o.getParameter(36348), C = o.getParameter(36349), S = g > 0, M = l || e.has("OES_texture_float"), P = S && M, N = l ? o.getParameter(36183) : 0;
    return {
      isWebGL2: l,
      drawBuffers: d,
      getMaxAnisotropy: i,
      getMaxPrecision: r,
      precision: c,
      logarithmicDepthBuffer: f,
      maxTextures: m,
      maxVertexTextures: g,
      maxTextureSize: b,
      maxCubemapSize: y,
      maxAttributes: _,
      maxVertexUniforms: v,
      maxVaryings: w,
      maxFragmentUniforms: C,
      vertexTextures: S,
      floatFragmentTextures: M,
      floatVertexTextures: P,
      maxSamples: N
    };
  }
  function Jv(o) {
    const e = this;
    let t = null, n = 0, i = false, r = false;
    const l = new di(), c = new Zt(), u = {
      value: null,
      needsUpdate: false
    };
    this.uniform = u, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, g) {
      const b = m.length !== 0 || g || n !== 0 || i;
      return i = g, n = m.length, b;
    }, this.beginShadows = function() {
      r = true, f(null);
    }, this.endShadows = function() {
      r = false;
    }, this.setGlobalState = function(m, g) {
      t = f(m, g, 0);
    }, this.setState = function(m, g, b) {
      const y = m.clippingPlanes, _ = m.clipIntersection, v = m.clipShadows, w = o.get(m);
      if (!i || y === null || y.length === 0 || r && !v) r ? f(null) : d();
      else {
        const C = r ? 0 : n, S = C * 4;
        let M = w.clippingState || null;
        u.value = M, M = f(y, g, S, b);
        for (let P = 0; P !== S; ++P) M[P] = t[P];
        w.clippingState = M, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += C;
      }
    };
    function d() {
      u.value !== t && (u.value = t, u.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }
    function f(m, g, b, y) {
      const _ = m !== null ? m.length : 0;
      let v = null;
      if (_ !== 0) {
        if (v = u.value, y !== true || v === null) {
          const w = b + _ * 4, C = g.matrixWorldInverse;
          c.getNormalMatrix(C), (v === null || v.length < w) && (v = new Float32Array(w));
          for (let S = 0, M = b; S !== _; ++S, M += 4) l.copy(m[S]).applyMatrix4(C, c), l.normal.toArray(v, M), v[M + 3] = l.constant;
        }
        u.value = v, u.needsUpdate = true;
      }
      return e.numPlanes = _, e.numIntersection = 0, v;
    }
  }
  function Qv(o) {
    let e = /* @__PURE__ */ new WeakMap();
    function t(l, c) {
      return c === wa ? l.mapping = as : c === Ma && (l.mapping = ls), l;
    }
    function n(l) {
      if (l && l.isTexture && l.isRenderTargetTexture === false) {
        const c = l.mapping;
        if (c === wa || c === Ma) if (e.has(l)) {
          const u = e.get(l).texture;
          return t(u, l.mapping);
        } else {
          const u = l.image;
          if (u && u.height > 0) {
            const d = new dg(u.height / 2);
            return d.fromEquirectangularTexture(o, l), e.set(l, d), l.addEventListener("dispose", i), t(d.texture, l.mapping);
          } else return null;
        }
      }
      return l;
    }
    function i(l) {
      const c = l.target;
      c.removeEventListener("dispose", i);
      const u = e.get(c);
      u !== void 0 && (e.delete(c), u.dispose());
    }
    function r() {
      e = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: n,
      dispose: r
    };
  }
  class Ha extends _u {
    constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, l = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = l, this.updateProjectionMatrix();
    }
    copy(e, t) {
      return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
    }
    setViewOffset(e, t, n, i, r, l) {
      this.view === null && (this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = l, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let r = n - e, l = n + e, c = i + t, u = i - t;
      if (this.view !== null && this.view.enabled) {
        const d = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += d * this.view.offsetX, l = r + d * this.view.width, c -= f * this.view.offsetY, u = c - f * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r, l, c, u, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
    }
  }
  const ns = 4, jc = [
    0.125,
    0.215,
    0.35,
    0.446,
    0.526,
    0.582
  ], fi = 20, oa = new Ha(), qc = new He();
  let aa = null;
  const pi = (1 + Math.sqrt(5)) / 2, Ji = 1 / pi, Xc = [
    new k(1, 1, 1),
    new k(-1, 1, 1),
    new k(1, 1, -1),
    new k(-1, 1, -1),
    new k(0, pi, Ji),
    new k(0, pi, -Ji),
    new k(Ji, 0, pi),
    new k(-Ji, 0, pi),
    new k(pi, Ji, 0),
    new k(-pi, Ji, 0)
  ];
  class Kc {
    constructor(e) {
      this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
      aa = this._renderer.getRenderTarget(), this._setSize(256);
      const r = this._allocateTargets();
      return r.depthBuffer = true, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null && (this._cubemapMaterial = Zc(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null && (this._equirectMaterial = $c(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
    }
    _setSize(e) {
      this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(aa), e.scissorTest = false, Ur(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
      e.mapping === as || e.mapping === ls ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), aa = this._renderer.getRenderTarget();
      const n = t || this._allocateTargets();
      return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
        magFilter: qt,
        minFilter: qt,
        generateMipmaps: false,
        type: Js,
        format: on,
        encoding: yi,
        depthBuffer: false
      }, i = Yc(e, t, n);
      if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
        this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Yc(e, t, n);
        const { _lodMax: r } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = eb(r)), this._blurMaterial = tb(r, e, t);
      }
      return i;
    }
    _compileMaterial(e) {
      const t = new Jt(this._lodPlanes[0], e);
      this._renderer.compile(t, oa);
    }
    _sceneToCubeUV(e, t, n, i) {
      const c = new Ht(90, 1, t, n), u = [
        1,
        -1,
        1,
        1,
        1,
        1
      ], d = [
        1,
        1,
        1,
        -1,
        -1,
        -1
      ], f = this._renderer, m = f.autoClear, g = f.toneMapping;
      f.getClearColor(qc), f.toneMapping = Nn, f.autoClear = false;
      const b = new kn({
        name: "PMREM.Background",
        side: Qt,
        depthWrite: false,
        depthTest: false
      }), y = new Jt(new gs(), b);
      let _ = false;
      const v = e.background;
      v ? v.isColor && (b.color.copy(v), e.background = null, _ = true) : (b.color.copy(qc), _ = true);
      for (let w = 0; w < 6; w++) {
        const C = w % 3;
        C === 0 ? (c.up.set(0, u[w], 0), c.lookAt(d[w], 0, 0)) : C === 1 ? (c.up.set(0, 0, u[w]), c.lookAt(0, d[w], 0)) : (c.up.set(0, u[w], 0), c.lookAt(0, 0, d[w]));
        const S = this._cubeSize;
        Ur(i, C * S, w > 2 ? S : 0, S, S), f.setRenderTarget(i), _ && f.render(y, c), f.render(e, c);
      }
      y.geometry.dispose(), y.material.dispose(), f.toneMapping = g, f.autoClear = m, e.background = v;
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer, i = e.mapping === as || e.mapping === ls;
      i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Zc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = $c());
      const r = i ? this._cubemapMaterial : this._equirectMaterial, l = new Jt(this._lodPlanes[0], r), c = r.uniforms;
      c.envMap.value = e;
      const u = this._cubeSize;
      Ur(t, 0, 0, 3 * u, 2 * u), n.setRenderTarget(t), n.render(l, oa);
    }
    _applyPMREM(e) {
      const t = this._renderer, n = t.autoClear;
      t.autoClear = false;
      for (let i = 1; i < this._lodPlanes.length; i++) {
        const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), l = Xc[(i - 1) % Xc.length];
        this._blur(e, i - 1, i, r, l);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, i, r) {
      const l = this._pingPongRenderTarget;
      this._halfBlur(e, l, t, n, i, "latitudinal", r), this._halfBlur(l, e, n, n, i, "longitudinal", r);
    }
    _halfBlur(e, t, n, i, r, l, c) {
      const u = this._renderer, d = this._blurMaterial;
      l !== "latitudinal" && l !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
      const f = 3, m = new Jt(this._lodPlanes[i], d), g = d.uniforms, b = this._sizeLods[n] - 1, y = isFinite(r) ? Math.PI / (2 * b) : 2 * Math.PI / (2 * fi - 1), _ = r / y, v = isFinite(r) ? 1 + Math.floor(f * _) : fi;
      v > fi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${fi}`);
      const w = [];
      let C = 0;
      for (let F = 0; F < fi; ++F) {
        const E = F / _, I = Math.exp(-E * E / 2);
        w.push(I), F === 0 ? C += I : F < v && (C += 2 * I);
      }
      for (let F = 0; F < w.length; F++) w[F] = w[F] / C;
      g.envMap.value = e.texture, g.samples.value = v, g.weights.value = w, g.latitudinal.value = l === "latitudinal", c && (g.poleAxis.value = c);
      const { _lodMax: S } = this;
      g.dTheta.value = y, g.mipInt.value = S - n;
      const M = this._sizeLods[i], P = 3 * M * (i > S - ns ? i - S + ns : 0), N = 4 * (this._cubeSize - M);
      Ur(t, P, N, 3 * M, 2 * M), u.setRenderTarget(t), u.render(m, oa);
    }
  }
  function eb(o) {
    const e = [], t = [], n = [];
    let i = o;
    const r = o - ns + 1 + jc.length;
    for (let l = 0; l < r; l++) {
      const c = Math.pow(2, i);
      t.push(c);
      let u = 1 / c;
      l > o - ns ? u = jc[l - o + ns - 1] : l === 0 && (u = 0), n.push(u);
      const d = 1 / (c - 2), f = -d, m = 1 + d, g = [
        f,
        f,
        m,
        f,
        m,
        m,
        f,
        f,
        m,
        m,
        f,
        m
      ], b = 6, y = 6, _ = 3, v = 2, w = 1, C = new Float32Array(_ * y * b), S = new Float32Array(v * y * b), M = new Float32Array(w * y * b);
      for (let N = 0; N < b; N++) {
        const F = N % 3 * 2 / 3 - 1, E = N > 2 ? 0 : -1, I = [
          F,
          E,
          0,
          F + 2 / 3,
          E,
          0,
          F + 2 / 3,
          E + 1,
          0,
          F,
          E,
          0,
          F + 2 / 3,
          E + 1,
          0,
          F,
          E + 1,
          0
        ];
        C.set(I, _ * y * N), S.set(g, v * y * N);
        const V = [
          N,
          N,
          N,
          N,
          N,
          N
        ];
        M.set(V, w * y * N);
      }
      const P = new dn();
      P.setAttribute("position", new It(C, _)), P.setAttribute("uv", new It(S, v)), P.setAttribute("faceIndex", new It(M, w)), e.push(P), i > ns && i--;
    }
    return {
      lodPlanes: e,
      sizeLods: t,
      sigmas: n
    };
  }
  function Yc(o, e, t) {
    const n = new wi(o, e, t);
    return n.texture.mapping = Qr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
  }
  function Ur(o, e, t, n, i) {
    o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
  }
  function tb(o, e, t) {
    const n = new Float32Array(fi), i = new k(0, 1, 0);
    return new Mi({
      name: "SphericalGaussianBlur",
      defines: {
        n: fi,
        CUBEUV_TEXEL_WIDTH: 1 / e,
        CUBEUV_TEXEL_HEIGHT: 1 / t,
        CUBEUV_MAX_MIP: `${o}.0`
      },
      uniforms: {
        envMap: {
          value: null
        },
        samples: {
          value: 1
        },
        weights: {
          value: n
        },
        latitudinal: {
          value: false
        },
        dTheta: {
          value: 0
        },
        mipInt: {
          value: 0
        },
        poleAxis: {
          value: i
        }
      },
      vertexShader: Wa(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
      blending: Qn,
      depthTest: false,
      depthWrite: false
    });
  }
  function $c() {
    return new Mi({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        }
      },
      vertexShader: Wa(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
      blending: Qn,
      depthTest: false,
      depthWrite: false
    });
  }
  function Zc() {
    return new Mi({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        }
      },
      vertexShader: Wa(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
      blending: Qn,
      depthTest: false,
      depthWrite: false
    });
  }
  function Wa() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  function nb(o) {
    let e = /* @__PURE__ */ new WeakMap(), t = null;
    function n(c) {
      if (c && c.isTexture) {
        const u = c.mapping, d = u === wa || u === Ma, f = u === as || u === ls;
        if (d || f) if (c.isRenderTargetTexture && c.needsPMREMUpdate === true) {
          c.needsPMREMUpdate = false;
          let m = e.get(c);
          return t === null && (t = new Kc(o)), m = d ? t.fromEquirectangular(c, m) : t.fromCubemap(c, m), e.set(c, m), m.texture;
        } else {
          if (e.has(c)) return e.get(c).texture;
          {
            const m = c.image;
            if (d && m && m.height > 0 || f && m && i(m)) {
              t === null && (t = new Kc(o));
              const g = d ? t.fromEquirectangular(c) : t.fromCubemap(c);
              return e.set(c, g), c.addEventListener("dispose", r), g.texture;
            } else return null;
          }
        }
      }
      return c;
    }
    function i(c) {
      let u = 0;
      const d = 6;
      for (let f = 0; f < d; f++) c[f] !== void 0 && u++;
      return u === d;
    }
    function r(c) {
      const u = c.target;
      u.removeEventListener("dispose", r);
      const d = e.get(u);
      d !== void 0 && (e.delete(u), d.dispose());
    }
    function l() {
      e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
    }
    return {
      get: n,
      dispose: l
    };
  }
  function ib(o) {
    const e = {};
    function t(n) {
      if (e[n] !== void 0) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = o.getExtension(n);
      }
      return e[n] = i, i;
    }
    return {
      has: function(n) {
        return t(n) !== null;
      },
      init: function(n) {
        n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
      },
      get: function(n) {
        const i = t(n);
        return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
      }
    };
  }
  function sb(o, e, t, n) {
    const i = {}, r = /* @__PURE__ */ new WeakMap();
    function l(m) {
      const g = m.target;
      g.index !== null && e.remove(g.index);
      for (const y in g.attributes) e.remove(g.attributes[y]);
      g.removeEventListener("dispose", l), delete i[g.id];
      const b = r.get(g);
      b && (e.remove(b), r.delete(g)), n.releaseStatesOfGeometry(g), g.isInstancedBufferGeometry === true && delete g._maxInstanceCount, t.memory.geometries--;
    }
    function c(m, g) {
      return i[g.id] === true || (g.addEventListener("dispose", l), i[g.id] = true, t.memory.geometries++), g;
    }
    function u(m) {
      const g = m.attributes;
      for (const y in g) e.update(g[y], 34962);
      const b = m.morphAttributes;
      for (const y in b) {
        const _ = b[y];
        for (let v = 0, w = _.length; v < w; v++) e.update(_[v], 34962);
      }
    }
    function d(m) {
      const g = [], b = m.index, y = m.attributes.position;
      let _ = 0;
      if (b !== null) {
        const C = b.array;
        _ = b.version;
        for (let S = 0, M = C.length; S < M; S += 3) {
          const P = C[S + 0], N = C[S + 1], F = C[S + 2];
          g.push(P, N, N, F, F, P);
        }
      } else {
        const C = y.array;
        _ = y.version;
        for (let S = 0, M = C.length / 3 - 1; S < M; S += 3) {
          const P = S + 0, N = S + 1, F = S + 2;
          g.push(P, N, N, F, F, P);
        }
      }
      const v = new (lu(g) ? mu : fu)(g, 1);
      v.version = _;
      const w = r.get(m);
      w && e.remove(w), r.set(m, v);
    }
    function f(m) {
      const g = r.get(m);
      if (g) {
        const b = m.index;
        b !== null && g.version < b.version && d(m);
      } else d(m);
      return r.get(m);
    }
    return {
      get: c,
      update: u,
      getWireframeAttribute: f
    };
  }
  function rb(o, e, t, n) {
    const i = n.isWebGL2;
    let r;
    function l(g) {
      r = g;
    }
    let c, u;
    function d(g) {
      c = g.type, u = g.bytesPerElement;
    }
    function f(g, b) {
      o.drawElements(r, b, c, g * u), t.update(b, r, 1);
    }
    function m(g, b, y) {
      if (y === 0) return;
      let _, v;
      if (i) _ = o, v = "drawElementsInstanced";
      else if (_ = e.get("ANGLE_instanced_arrays"), v = "drawElementsInstancedANGLE", _ === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
      _[v](r, b, c, g * u, y), t.update(b, r, y);
    }
    this.setMode = l, this.setIndex = d, this.render = f, this.renderInstances = m;
  }
  function ob(o) {
    const e = {
      geometries: 0,
      textures: 0
    }, t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    function n(r, l, c) {
      switch (t.calls++, l) {
        case 4:
          t.triangles += c * (r / 3);
          break;
        case 1:
          t.lines += c * (r / 2);
          break;
        case 3:
          t.lines += c * (r - 1);
          break;
        case 2:
          t.lines += c * r;
          break;
        case 0:
          t.points += c * r;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", l);
          break;
      }
    }
    function i() {
      t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
    }
    return {
      memory: e,
      render: t,
      programs: null,
      autoReset: true,
      reset: i,
      update: n
    };
  }
  function ab(o, e) {
    return o[0] - e[0];
  }
  function lb(o, e) {
    return Math.abs(e[1]) - Math.abs(o[1]);
  }
  function cb(o, e, t) {
    const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), l = new rt(), c = [];
    for (let d = 0; d < 8; d++) c[d] = [
      d,
      0
    ];
    function u(d, f, m, g) {
      const b = d.morphTargetInfluences;
      if (e.isWebGL2 === true) {
        const y = f.morphAttributes.position || f.morphAttributes.normal || f.morphAttributes.color, _ = y !== void 0 ? y.length : 0;
        let v = r.get(f);
        if (v === void 0 || v.count !== _) {
          let $ = function() {
            W.dispose(), r.delete(f), f.removeEventListener("dispose", $);
          };
          v !== void 0 && v.texture.dispose();
          const S = f.morphAttributes.position !== void 0, M = f.morphAttributes.normal !== void 0, P = f.morphAttributes.color !== void 0, N = f.morphAttributes.position || [], F = f.morphAttributes.normal || [], E = f.morphAttributes.color || [];
          let I = 0;
          S === true && (I = 1), M === true && (I = 2), P === true && (I = 3);
          let V = f.attributes.position.count * I, ee = 1;
          V > e.maxTextureSize && (ee = Math.ceil(V / e.maxTextureSize), V = e.maxTextureSize);
          const Q = new Float32Array(V * ee * 4 * _), W = new du(Q, V, ee, _);
          W.type = Jn, W.needsUpdate = true;
          const G = I * 4;
          for (let ie = 0; ie < _; ie++) {
            const te = N[ie], H = F[ie], he = E[ie], se = V * ee * 4 * ie;
            for (let Se = 0; Se < te.count; Se++) {
              const q = Se * G;
              S === true && (l.fromBufferAttribute(te, Se), Q[se + q + 0] = l.x, Q[se + q + 1] = l.y, Q[se + q + 2] = l.z, Q[se + q + 3] = 0), M === true && (l.fromBufferAttribute(H, Se), Q[se + q + 4] = l.x, Q[se + q + 5] = l.y, Q[se + q + 6] = l.z, Q[se + q + 7] = 0), P === true && (l.fromBufferAttribute(he, Se), Q[se + q + 8] = l.x, Q[se + q + 9] = l.y, Q[se + q + 10] = l.z, Q[se + q + 11] = he.itemSize === 4 ? l.w : 1);
            }
          }
          v = {
            count: _,
            texture: W,
            size: new ke(V, ee)
          }, r.set(f, v), f.addEventListener("dispose", $);
        }
        let w = 0;
        for (let S = 0; S < b.length; S++) w += b[S];
        const C = f.morphTargetsRelative ? 1 : 1 - w;
        g.getUniforms().setValue(o, "morphTargetBaseInfluence", C), g.getUniforms().setValue(o, "morphTargetInfluences", b), g.getUniforms().setValue(o, "morphTargetsTexture", v.texture, t), g.getUniforms().setValue(o, "morphTargetsTextureSize", v.size);
      } else {
        const y = b === void 0 ? 0 : b.length;
        let _ = n[f.id];
        if (_ === void 0 || _.length !== y) {
          _ = [];
          for (let M = 0; M < y; M++) _[M] = [
            M,
            0
          ];
          n[f.id] = _;
        }
        for (let M = 0; M < y; M++) {
          const P = _[M];
          P[0] = M, P[1] = b[M];
        }
        _.sort(lb);
        for (let M = 0; M < 8; M++) M < y && _[M][1] ? (c[M][0] = _[M][0], c[M][1] = _[M][1]) : (c[M][0] = Number.MAX_SAFE_INTEGER, c[M][1] = 0);
        c.sort(ab);
        const v = f.morphAttributes.position, w = f.morphAttributes.normal;
        let C = 0;
        for (let M = 0; M < 8; M++) {
          const P = c[M], N = P[0], F = P[1];
          N !== Number.MAX_SAFE_INTEGER && F ? (v && f.getAttribute("morphTarget" + M) !== v[N] && f.setAttribute("morphTarget" + M, v[N]), w && f.getAttribute("morphNormal" + M) !== w[N] && f.setAttribute("morphNormal" + M, w[N]), i[M] = F, C += F) : (v && f.hasAttribute("morphTarget" + M) === true && f.deleteAttribute("morphTarget" + M), w && f.hasAttribute("morphNormal" + M) === true && f.deleteAttribute("morphNormal" + M), i[M] = 0);
        }
        const S = f.morphTargetsRelative ? 1 : 1 - C;
        g.getUniforms().setValue(o, "morphTargetBaseInfluence", S), g.getUniforms().setValue(o, "morphTargetInfluences", i);
      }
    }
    return {
      update: u
    };
  }
  function hb(o, e, t, n) {
    let i = /* @__PURE__ */ new WeakMap();
    function r(u) {
      const d = n.render.frame, f = u.geometry, m = e.get(u, f);
      return i.get(m) !== d && (e.update(m), i.set(m, d)), u.isInstancedMesh && (u.hasEventListener("dispose", c) === false && u.addEventListener("dispose", c), t.update(u.instanceMatrix, 34962), u.instanceColor !== null && t.update(u.instanceColor, 34962)), m;
    }
    function l() {
      i = /* @__PURE__ */ new WeakMap();
    }
    function c(u) {
      const d = u.target;
      d.removeEventListener("dispose", c), t.remove(d.instanceMatrix), d.instanceColor !== null && t.remove(d.instanceColor);
    }
    return {
      update: r,
      dispose: l
    };
  }
  const xu = new Dt(), yu = new du(), wu = new $m(), Mu = new vu(), Jc = [], Qc = [], eh = new Float32Array(16), th = new Float32Array(9), nh = new Float32Array(4);
  function _s(o, e, t) {
    const n = o[0];
    if (n <= 0 || n > 0) return o;
    const i = e * t;
    let r = Jc[i];
    if (r === void 0 && (r = new Float32Array(i), Jc[i] = r), e !== 0) {
      n.toArray(r, 0);
      for (let l = 1, c = 0; l !== e; ++l) c += t, o[l].toArray(r, c);
    }
    return r;
  }
  function Mt(o, e) {
    if (o.length !== e.length) return false;
    for (let t = 0, n = o.length; t < n; t++) if (o[t] !== e[t]) return false;
    return true;
  }
  function St(o, e) {
    for (let t = 0, n = e.length; t < n; t++) o[t] = e[t];
  }
  function to(o, e) {
    let t = Qc[e];
    t === void 0 && (t = new Int32Array(e), Qc[e] = t);
    for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit();
    return t;
  }
  function ub(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e);
  }
  function db(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Mt(t, e)) return;
      o.uniform2fv(this.addr, e), St(t, e);
    }
  }
  function pb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
      if (Mt(t, e)) return;
      o.uniform3fv(this.addr, e), St(t, e);
    }
  }
  function fb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Mt(t, e)) return;
      o.uniform4fv(this.addr, e), St(t, e);
    }
  }
  function mb(o, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Mt(t, e)) return;
      o.uniformMatrix2fv(this.addr, false, e), St(t, e);
    } else {
      if (Mt(t, n)) return;
      nh.set(n), o.uniformMatrix2fv(this.addr, false, nh), St(t, n);
    }
  }
  function gb(o, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Mt(t, e)) return;
      o.uniformMatrix3fv(this.addr, false, e), St(t, e);
    } else {
      if (Mt(t, n)) return;
      th.set(n), o.uniformMatrix3fv(this.addr, false, th), St(t, n);
    }
  }
  function _b(o, e) {
    const t = this.cache, n = e.elements;
    if (n === void 0) {
      if (Mt(t, e)) return;
      o.uniformMatrix4fv(this.addr, false, e), St(t, e);
    } else {
      if (Mt(t, n)) return;
      eh.set(n), o.uniformMatrix4fv(this.addr, false, eh), St(t, n);
    }
  }
  function vb(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e);
  }
  function bb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (o.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Mt(t, e)) return;
      o.uniform2iv(this.addr, e), St(t, e);
    }
  }
  function xb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (Mt(t, e)) return;
      o.uniform3iv(this.addr, e), St(t, e);
    }
  }
  function yb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Mt(t, e)) return;
      o.uniform4iv(this.addr, e), St(t, e);
    }
  }
  function wb(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e);
  }
  function Mb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (o.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
      if (Mt(t, e)) return;
      o.uniform2uiv(this.addr, e), St(t, e);
    }
  }
  function Sb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else {
      if (Mt(t, e)) return;
      o.uniform3uiv(this.addr, e), St(t, e);
    }
  }
  function Eb(o, e) {
    const t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
      if (Mt(t, e)) return;
      o.uniform4uiv(this.addr, e), St(t, e);
    }
  }
  function Tb(o, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || xu, i);
  }
  function Cb(o, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || wu, i);
  }
  function Ab(o, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Mu, i);
  }
  function Pb(o, e, t) {
    const n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || yu, i);
  }
  function Lb(o) {
    switch (o) {
      case 5126:
        return ub;
      case 35664:
        return db;
      case 35665:
        return pb;
      case 35666:
        return fb;
      case 35674:
        return mb;
      case 35675:
        return gb;
      case 35676:
        return _b;
      case 5124:
      case 35670:
        return vb;
      case 35667:
      case 35671:
        return bb;
      case 35668:
      case 35672:
        return xb;
      case 35669:
      case 35673:
        return yb;
      case 5125:
        return wb;
      case 36294:
        return Mb;
      case 36295:
        return Sb;
      case 36296:
        return Eb;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return Tb;
      case 35679:
      case 36299:
      case 36307:
        return Cb;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Ab;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return Pb;
    }
  }
  function Rb(o, e) {
    o.uniform1fv(this.addr, e);
  }
  function Db(o, e) {
    const t = _s(e, this.size, 2);
    o.uniform2fv(this.addr, t);
  }
  function Ib(o, e) {
    const t = _s(e, this.size, 3);
    o.uniform3fv(this.addr, t);
  }
  function kb(o, e) {
    const t = _s(e, this.size, 4);
    o.uniform4fv(this.addr, t);
  }
  function Nb(o, e) {
    const t = _s(e, this.size, 4);
    o.uniformMatrix2fv(this.addr, false, t);
  }
  function Ob(o, e) {
    const t = _s(e, this.size, 9);
    o.uniformMatrix3fv(this.addr, false, t);
  }
  function Fb(o, e) {
    const t = _s(e, this.size, 16);
    o.uniformMatrix4fv(this.addr, false, t);
  }
  function Ub(o, e) {
    o.uniform1iv(this.addr, e);
  }
  function Bb(o, e) {
    o.uniform2iv(this.addr, e);
  }
  function Vb(o, e) {
    o.uniform3iv(this.addr, e);
  }
  function zb(o, e) {
    o.uniform4iv(this.addr, e);
  }
  function Gb(o, e) {
    o.uniform1uiv(this.addr, e);
  }
  function Hb(o, e) {
    o.uniform2uiv(this.addr, e);
  }
  function Wb(o, e) {
    o.uniform3uiv(this.addr, e);
  }
  function jb(o, e) {
    o.uniform4uiv(this.addr, e);
  }
  function qb(o, e, t) {
    const n = this.cache, i = e.length, r = to(t, i);
    Mt(n, r) || (o.uniform1iv(this.addr, r), St(n, r));
    for (let l = 0; l !== i; ++l) t.setTexture2D(e[l] || xu, r[l]);
  }
  function Xb(o, e, t) {
    const n = this.cache, i = e.length, r = to(t, i);
    Mt(n, r) || (o.uniform1iv(this.addr, r), St(n, r));
    for (let l = 0; l !== i; ++l) t.setTexture3D(e[l] || wu, r[l]);
  }
  function Kb(o, e, t) {
    const n = this.cache, i = e.length, r = to(t, i);
    Mt(n, r) || (o.uniform1iv(this.addr, r), St(n, r));
    for (let l = 0; l !== i; ++l) t.setTextureCube(e[l] || Mu, r[l]);
  }
  function Yb(o, e, t) {
    const n = this.cache, i = e.length, r = to(t, i);
    Mt(n, r) || (o.uniform1iv(this.addr, r), St(n, r));
    for (let l = 0; l !== i; ++l) t.setTexture2DArray(e[l] || yu, r[l]);
  }
  function $b(o) {
    switch (o) {
      case 5126:
        return Rb;
      case 35664:
        return Db;
      case 35665:
        return Ib;
      case 35666:
        return kb;
      case 35674:
        return Nb;
      case 35675:
        return Ob;
      case 35676:
        return Fb;
      case 5124:
      case 35670:
        return Ub;
      case 35667:
      case 35671:
        return Bb;
      case 35668:
      case 35672:
        return Vb;
      case 35669:
      case 35673:
        return zb;
      case 5125:
        return Gb;
      case 36294:
        return Hb;
      case 36295:
        return Wb;
      case 36296:
        return jb;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return qb;
      case 35679:
      case 36299:
      case 36307:
        return Xb;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Kb;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return Yb;
    }
  }
  class Zb {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.setValue = Lb(t.type);
    }
  }
  class Jb {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = $b(t.type);
    }
  }
  class Qb {
    constructor(e) {
      this.id = e, this.seq = [], this.map = {};
    }
    setValue(e, t, n) {
      const i = this.seq;
      for (let r = 0, l = i.length; r !== l; ++r) {
        const c = i[r];
        c.setValue(e, t[c.id], n);
      }
    }
  }
  const la = /(\w+)(\])?(\[|\.)?/g;
  function ih(o, e) {
    o.seq.push(e), o.map[e.id] = e;
  }
  function e0(o, e, t) {
    const n = o.name, i = n.length;
    for (la.lastIndex = 0; ; ) {
      const r = la.exec(n), l = la.lastIndex;
      let c = r[1];
      const u = r[2] === "]", d = r[3];
      if (u && (c = c | 0), d === void 0 || d === "[" && l + 2 === i) {
        ih(t, d === void 0 ? new Zb(c, o, e) : new Jb(c, o, e));
        break;
      } else {
        let m = t.map[c];
        m === void 0 && (m = new Qb(c), ih(t, m)), t = m;
      }
    }
  }
  class qr {
    constructor(e, t) {
      this.seq = [], this.map = {};
      const n = e.getProgramParameter(t, 35718);
      for (let i = 0; i < n; ++i) {
        const r = e.getActiveUniform(t, i), l = e.getUniformLocation(t, r.name);
        e0(r, l, this);
      }
    }
    setValue(e, t, n, i) {
      const r = this.map[t];
      r !== void 0 && r.setValue(e, n, i);
    }
    setOptional(e, t, n) {
      const i = t[n];
      i !== void 0 && this.setValue(e, n, i);
    }
    static upload(e, t, n, i) {
      for (let r = 0, l = t.length; r !== l; ++r) {
        const c = t[r], u = n[c.id];
        u.needsUpdate !== false && c.setValue(e, u.value, i);
      }
    }
    static seqWithValue(e, t) {
      const n = [];
      for (let i = 0, r = e.length; i !== r; ++i) {
        const l = e[i];
        l.id in t && n.push(l);
      }
      return n;
    }
  }
  function sh(o, e, t) {
    const n = o.createShader(e);
    return o.shaderSource(n, t), o.compileShader(n), n;
  }
  let t0 = 0;
  function n0(o, e) {
    const t = o.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
    for (let l = i; l < r; l++) {
      const c = l + 1;
      n.push(`${c === e ? ">" : " "} ${c}: ${t[l]}`);
    }
    return n.join(`
`);
  }
  function i0(o) {
    switch (o) {
      case yi:
        return [
          "Linear",
          "( value )"
        ];
      case tt:
        return [
          "sRGB",
          "( value )"
        ];
      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), [
          "Linear",
          "( value )"
        ];
    }
  }
  function rh(o, e, t) {
    const n = o.getShaderParameter(e, 35713), i = o.getShaderInfoLog(e).trim();
    if (n && i === "") return "";
    const r = /ERROR: 0:(\d+)/.exec(i);
    if (r) {
      const l = parseInt(r[1]);
      return t.toUpperCase() + `

` + i + `

` + n0(o.getShaderSource(e), l);
    } else return i;
  }
  function s0(o, e) {
    const t = i0(e);
    return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
  }
  function r0(o, e) {
    let t;
    switch (e) {
      case am:
        t = "Linear";
        break;
      case lm:
        t = "Reinhard";
        break;
      case cm:
        t = "OptimizedCineon";
        break;
      case tu:
        t = "ACESFilmic";
        break;
      case hm:
        t = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
    }
    return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
  }
  function o0(o) {
    return [
      o.extensionDerivatives || o.envMapCubeUVHeight || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
      (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
      o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
      (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
    ].filter(Ks).join(`
`);
  }
  function a0(o) {
    const e = [];
    for (const t in o) {
      const n = o[t];
      n !== false && e.push("#define " + t + " " + n);
    }
    return e.join(`
`);
  }
  function l0(o, e) {
    const t = {}, n = o.getProgramParameter(e, 35721);
    for (let i = 0; i < n; i++) {
      const r = o.getActiveAttrib(e, i), l = r.name;
      let c = 1;
      r.type === 35674 && (c = 2), r.type === 35675 && (c = 3), r.type === 35676 && (c = 4), t[l] = {
        type: r.type,
        location: o.getAttribLocation(e, l),
        locationSize: c
      };
    }
    return t;
  }
  function Ks(o) {
    return o !== "";
  }
  function oh(o, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function ah(o, e) {
    return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  const c0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Pa(o) {
    return o.replace(c0, h0);
  }
  function h0(o, e) {
    const t = Ve[e];
    if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
    return Pa(t);
  }
  const u0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function lh(o) {
    return o.replace(u0, d0);
  }
  function d0(o, e, t, n) {
    let i = "";
    for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return i;
  }
  function ch(o) {
    let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;";
    return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
  }
  function p0(o) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return o.shadowMapType === $h ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === Zh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === Xs && (e = "SHADOWMAP_TYPE_VSM"), e;
  }
  function f0(o) {
    let e = "ENVMAP_TYPE_CUBE";
    if (o.envMap) switch (o.envMapMode) {
      case as:
      case ls:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Qr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
    return e;
  }
  function m0(o) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (o.envMap) switch (o.envMapMode) {
      case ls:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
    return e;
  }
  function g0(o) {
    let e = "ENVMAP_BLENDING_NONE";
    if (o.envMap) switch (o.combine) {
      case eu:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case rm:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case om:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
    return e;
  }
  function _0(o) {
    const e = o.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e) - 2, n = 1 / e;
    return {
      texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
      texelHeight: n,
      maxMip: t
    };
  }
  function v0(o, e, t, n) {
    const i = o.getContext(), r = t.defines;
    let l = t.vertexShader, c = t.fragmentShader;
    const u = p0(t), d = f0(t), f = m0(t), m = g0(t), g = _0(t), b = t.isWebGL2 ? "" : o0(t), y = a0(r), _ = i.createProgram();
    let v, w, C = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (v = [
      y
    ].filter(Ks).join(`
`), v.length > 0 && (v += `
`), w = [
      b,
      y
    ].filter(Ks).join(`
`), w.length > 0 && (w += `
`)) : (v = [
      ch(t),
      "#define SHADER_NAME " + t.shaderName,
      y,
      t.instancing ? "#define USE_INSTANCING" : "",
      t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.map ? "#define USE_MAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + f : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
      t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
      t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
      t.vertexTangents ? "#define USE_TANGENT" : "",
      t.vertexColors ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUvs ? "#define USE_UV" : "",
      t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.skinning ? "#define USE_SKINNING" : "",
      t.morphTargets ? "#define USE_MORPHTARGETS" : "",
      t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "",
      t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
      t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
      t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
      t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + u : "",
      t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
      "	attribute vec3 morphTarget0;",
      "	attribute vec3 morphTarget1;",
      "	attribute vec3 morphTarget2;",
      "	attribute vec3 morphTarget3;",
      "	#ifdef USE_MORPHNORMALS",
      "		attribute vec3 morphNormal0;",
      "		attribute vec3 morphNormal1;",
      "		attribute vec3 morphNormal2;",
      "		attribute vec3 morphNormal3;",
      "	#else",
      "		attribute vec3 morphTarget4;",
      "		attribute vec3 morphTarget5;",
      "		attribute vec3 morphTarget6;",
      "		attribute vec3 morphTarget7;",
      "	#endif",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      `
`
    ].filter(Ks).join(`
`), w = [
      b,
      ch(t),
      "#define SHADER_NAME " + t.shaderName,
      y,
      t.useFog && t.fog ? "#define USE_FOG" : "",
      t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
      t.map ? "#define USE_MAP" : "",
      t.matcap ? "#define USE_MATCAP" : "",
      t.envMap ? "#define USE_ENVMAP" : "",
      t.envMap ? "#define " + d : "",
      t.envMap ? "#define " + f : "",
      t.envMap ? "#define " + m : "",
      g ? "#define CUBEUV_TEXEL_WIDTH " + g.texelWidth : "",
      g ? "#define CUBEUV_TEXEL_HEIGHT " + g.texelHeight : "",
      g ? "#define CUBEUV_MAX_MIP " + g.maxMip + ".0" : "",
      t.lightMap ? "#define USE_LIGHTMAP" : "",
      t.aoMap ? "#define USE_AOMAP" : "",
      t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      t.bumpMap ? "#define USE_BUMPMAP" : "",
      t.normalMap ? "#define USE_NORMALMAP" : "",
      t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
      t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
      t.clearcoat ? "#define USE_CLEARCOAT" : "",
      t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      t.iridescence ? "#define USE_IRIDESCENCE" : "",
      t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
      t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
      t.specularMap ? "#define USE_SPECULARMAP" : "",
      t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
      t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
      t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      t.metalnessMap ? "#define USE_METALNESSMAP" : "",
      t.alphaMap ? "#define USE_ALPHAMAP" : "",
      t.alphaTest ? "#define USE_ALPHATEST" : "",
      t.sheen ? "#define USE_SHEEN" : "",
      t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
      t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
      t.transmission ? "#define USE_TRANSMISSION" : "",
      t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
      t.vertexTangents ? "#define USE_TANGENT" : "",
      t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
      t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      t.vertexUvs ? "#define USE_UV" : "",
      t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
      t.gradientMap ? "#define USE_GRADIENTMAP" : "",
      t.flatShading ? "#define FLAT_SHADED" : "",
      t.doubleSided ? "#define DOUBLE_SIDED" : "",
      t.flipSided ? "#define FLIP_SIDED" : "",
      t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      t.shadowMapEnabled ? "#define " + u : "",
      t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
      t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      t.toneMapping !== Nn ? "#define TONE_MAPPING" : "",
      t.toneMapping !== Nn ? Ve.tonemapping_pars_fragment : "",
      t.toneMapping !== Nn ? r0("toneMapping", t.toneMapping) : "",
      t.dithering ? "#define DITHERING" : "",
      t.opaque ? "#define OPAQUE" : "",
      Ve.encodings_pars_fragment,
      s0("linearToOutputTexel", t.outputEncoding),
      t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
      `
`
    ].filter(Ks).join(`
`)), l = Pa(l), l = oh(l, t), l = ah(l, t), c = Pa(c), c = oh(c, t), c = ah(c, t), l = lh(l), c = lh(c), t.isWebGL2 && t.isRawShaderMaterial !== true && (C = `#version 300 es
`, v = [
      "precision mediump sampler2DArray;",
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join(`
`) + `
` + v, w = [
      "#define varying in",
      t.glslVersion === Ic ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      t.glslVersion === Ic ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join(`
`) + `
` + w);
    const S = C + v + l, M = C + w + c, P = sh(i, 35633, S), N = sh(i, 35632, M);
    if (i.attachShader(_, P), i.attachShader(_, N), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_), o.debug.checkShaderErrors) {
      const I = i.getProgramInfoLog(_).trim(), V = i.getShaderInfoLog(P).trim(), ee = i.getShaderInfoLog(N).trim();
      let Q = true, W = true;
      if (i.getProgramParameter(_, 35714) === false) {
        Q = false;
        const G = rh(i, P, "vertex"), $ = rh(i, N, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, 35715) + `

Program Info Log: ` + I + `
` + G + `
` + $);
      } else I !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", I) : (V === "" || ee === "") && (W = false);
      W && (this.diagnostics = {
        runnable: Q,
        programLog: I,
        vertexShader: {
          log: V,
          prefix: v
        },
        fragmentShader: {
          log: ee,
          prefix: w
        }
      });
    }
    i.deleteShader(P), i.deleteShader(N);
    let F;
    this.getUniforms = function() {
      return F === void 0 && (F = new qr(i, _)), F;
    };
    let E;
    return this.getAttributes = function() {
      return E === void 0 && (E = l0(i, _)), E;
    }, this.destroy = function() {
      n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
    }, this.name = t.shaderName, this.id = t0++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = P, this.fragmentShader = N, this;
  }
  let b0 = 0;
  class x0 {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e) {
      const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), l = this._getShaderCacheForMaterial(e);
      return l.has(i) === false && (l.add(i), i.usedTimes++), l.has(r) === false && (l.add(r), r.usedTimes++), this;
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
      return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      let n = t.get(e);
      return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      let n = t.get(e);
      return n === void 0 && (n = new y0(e), t.set(e, n)), n;
    }
  }
  class y0 {
    constructor(e) {
      this.id = b0++, this.code = e, this.usedTimes = 0;
    }
  }
  function w0(o, e, t, n, i, r, l) {
    const c = new pu(), u = new x0(), d = [], f = i.isWebGL2, m = i.logarithmicDepthBuffer, g = i.vertexTextures;
    let b = i.precision;
    const y = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    };
    function _(E, I, V, ee, Q) {
      const W = ee.fog, G = Q.geometry, $ = E.isMeshStandardMaterial ? ee.environment : null, ie = (E.isMeshStandardMaterial ? t : e).get(E.envMap || $), te = ie && ie.mapping === Qr ? ie.image.height : null, H = y[E.type];
      E.precision !== null && (b = i.getMaxPrecision(E.precision), b !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", b, "instead."));
      const he = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, se = he !== void 0 ? he.length : 0;
      let Se = 0;
      G.morphAttributes.position !== void 0 && (Se = 1), G.morphAttributes.normal !== void 0 && (Se = 2), G.morphAttributes.color !== void 0 && (Se = 3);
      let q, re, ne, oe;
      if (H) {
        const Ue = _n[H];
        q = Ue.vertexShader, re = Ue.fragmentShader;
      } else q = E.vertexShader, re = E.fragmentShader, u.update(E), ne = u.getVertexShaderID(E), oe = u.getFragmentShaderID(E);
      const X = o.getRenderTarget(), De = E.alphaTest > 0, xe = E.clearcoat > 0, ye = E.iridescence > 0;
      return {
        isWebGL2: f,
        shaderID: H,
        shaderName: E.type,
        vertexShader: q,
        fragmentShader: re,
        defines: E.defines,
        customVertexShaderID: ne,
        customFragmentShaderID: oe,
        isRawShaderMaterial: E.isRawShaderMaterial === true,
        glslVersion: E.glslVersion,
        precision: b,
        instancing: Q.isInstancedMesh === true,
        instancingColor: Q.isInstancedMesh === true && Q.instanceColor !== null,
        supportsVertexTextures: g,
        outputEncoding: X === null ? o.outputEncoding : X.isXRRenderTarget === true ? X.texture.encoding : yi,
        map: !!E.map,
        matcap: !!E.matcap,
        envMap: !!ie,
        envMapMode: ie && ie.mapping,
        envMapCubeUVHeight: te,
        lightMap: !!E.lightMap,
        aoMap: !!E.aoMap,
        emissiveMap: !!E.emissiveMap,
        bumpMap: !!E.bumpMap,
        normalMap: !!E.normalMap,
        objectSpaceNormalMap: E.normalMapType === Im,
        tangentSpaceNormalMap: E.normalMapType === ou,
        decodeVideoTexture: !!E.map && E.map.isVideoTexture === true && E.map.encoding === tt,
        clearcoat: xe,
        clearcoatMap: xe && !!E.clearcoatMap,
        clearcoatRoughnessMap: xe && !!E.clearcoatRoughnessMap,
        clearcoatNormalMap: xe && !!E.clearcoatNormalMap,
        iridescence: ye,
        iridescenceMap: ye && !!E.iridescenceMap,
        iridescenceThicknessMap: ye && !!E.iridescenceThicknessMap,
        displacementMap: !!E.displacementMap,
        roughnessMap: !!E.roughnessMap,
        metalnessMap: !!E.metalnessMap,
        specularMap: !!E.specularMap,
        specularIntensityMap: !!E.specularIntensityMap,
        specularColorMap: !!E.specularColorMap,
        opaque: E.transparent === false && E.blending === ss,
        alphaMap: !!E.alphaMap,
        alphaTest: De,
        gradientMap: !!E.gradientMap,
        sheen: E.sheen > 0,
        sheenColorMap: !!E.sheenColorMap,
        sheenRoughnessMap: !!E.sheenRoughnessMap,
        transmission: E.transmission > 0,
        transmissionMap: !!E.transmissionMap,
        thicknessMap: !!E.thicknessMap,
        combine: E.combine,
        vertexTangents: !!E.normalMap && !!G.attributes.tangent,
        vertexColors: E.vertexColors,
        vertexAlphas: E.vertexColors === true && !!G.attributes.color && G.attributes.color.itemSize === 4,
        vertexUvs: !!E.map || !!E.bumpMap || !!E.normalMap || !!E.specularMap || !!E.alphaMap || !!E.emissiveMap || !!E.roughnessMap || !!E.metalnessMap || !!E.clearcoatMap || !!E.clearcoatRoughnessMap || !!E.clearcoatNormalMap || !!E.iridescenceMap || !!E.iridescenceThicknessMap || !!E.displacementMap || !!E.transmissionMap || !!E.thicknessMap || !!E.specularIntensityMap || !!E.specularColorMap || !!E.sheenColorMap || !!E.sheenRoughnessMap,
        uvsVertexOnly: !(E.map || E.bumpMap || E.normalMap || E.specularMap || E.alphaMap || E.emissiveMap || E.roughnessMap || E.metalnessMap || E.clearcoatNormalMap || E.iridescenceMap || E.iridescenceThicknessMap || E.transmission > 0 || E.transmissionMap || E.thicknessMap || E.specularIntensityMap || E.specularColorMap || E.sheen > 0 || E.sheenColorMap || E.sheenRoughnessMap) && !!E.displacementMap,
        fog: !!W,
        useFog: E.fog === true,
        fogExp2: W && W.isFogExp2,
        flatShading: !!E.flatShading,
        sizeAttenuation: E.sizeAttenuation,
        logarithmicDepthBuffer: m,
        skinning: Q.isSkinnedMesh === true,
        morphTargets: G.morphAttributes.position !== void 0,
        morphNormals: G.morphAttributes.normal !== void 0,
        morphColors: G.morphAttributes.color !== void 0,
        morphTargetsCount: se,
        morphTextureStride: Se,
        numDirLights: I.directional.length,
        numPointLights: I.point.length,
        numSpotLights: I.spot.length,
        numSpotLightMaps: I.spotLightMap.length,
        numRectAreaLights: I.rectArea.length,
        numHemiLights: I.hemi.length,
        numDirLightShadows: I.directionalShadowMap.length,
        numPointLightShadows: I.pointShadowMap.length,
        numSpotLightShadows: I.spotShadowMap.length,
        numSpotLightShadowsWithMaps: I.numSpotLightShadowsWithMaps,
        numClippingPlanes: l.numPlanes,
        numClipIntersection: l.numIntersection,
        dithering: E.dithering,
        shadowMapEnabled: o.shadowMap.enabled && V.length > 0,
        shadowMapType: o.shadowMap.type,
        toneMapping: E.toneMapped ? o.toneMapping : Nn,
        physicallyCorrectLights: o.physicallyCorrectLights,
        premultipliedAlpha: E.premultipliedAlpha,
        doubleSided: E.side === Dn,
        flipSided: E.side === Qt,
        useDepthPacking: !!E.depthPacking,
        depthPacking: E.depthPacking || 0,
        index0AttributeName: E.index0AttributeName,
        extensionDerivatives: E.extensions && E.extensions.derivatives,
        extensionFragDepth: E.extensions && E.extensions.fragDepth,
        extensionDrawBuffers: E.extensions && E.extensions.drawBuffers,
        extensionShaderTextureLOD: E.extensions && E.extensions.shaderTextureLOD,
        rendererExtensionFragDepth: f || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: f || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: f || n.has("EXT_shader_texture_lod"),
        customProgramCacheKey: E.customProgramCacheKey()
      };
    }
    function v(E) {
      const I = [];
      if (E.shaderID ? I.push(E.shaderID) : (I.push(E.customVertexShaderID), I.push(E.customFragmentShaderID)), E.defines !== void 0) for (const V in E.defines) I.push(V), I.push(E.defines[V]);
      return E.isRawShaderMaterial === false && (w(I, E), C(I, E), I.push(o.outputEncoding)), I.push(E.customProgramCacheKey), I.join();
    }
    function w(E, I) {
      E.push(I.precision), E.push(I.outputEncoding), E.push(I.envMapMode), E.push(I.envMapCubeUVHeight), E.push(I.combine), E.push(I.vertexUvs), E.push(I.fogExp2), E.push(I.sizeAttenuation), E.push(I.morphTargetsCount), E.push(I.morphAttributeCount), E.push(I.numDirLights), E.push(I.numPointLights), E.push(I.numSpotLights), E.push(I.numSpotLightMaps), E.push(I.numHemiLights), E.push(I.numRectAreaLights), E.push(I.numDirLightShadows), E.push(I.numPointLightShadows), E.push(I.numSpotLightShadows), E.push(I.numSpotLightShadowsWithMaps), E.push(I.shadowMapType), E.push(I.toneMapping), E.push(I.numClippingPlanes), E.push(I.numClipIntersection), E.push(I.depthPacking);
    }
    function C(E, I) {
      c.disableAll(), I.isWebGL2 && c.enable(0), I.supportsVertexTextures && c.enable(1), I.instancing && c.enable(2), I.instancingColor && c.enable(3), I.map && c.enable(4), I.matcap && c.enable(5), I.envMap && c.enable(6), I.lightMap && c.enable(7), I.aoMap && c.enable(8), I.emissiveMap && c.enable(9), I.bumpMap && c.enable(10), I.normalMap && c.enable(11), I.objectSpaceNormalMap && c.enable(12), I.tangentSpaceNormalMap && c.enable(13), I.clearcoat && c.enable(14), I.clearcoatMap && c.enable(15), I.clearcoatRoughnessMap && c.enable(16), I.clearcoatNormalMap && c.enable(17), I.iridescence && c.enable(18), I.iridescenceMap && c.enable(19), I.iridescenceThicknessMap && c.enable(20), I.displacementMap && c.enable(21), I.specularMap && c.enable(22), I.roughnessMap && c.enable(23), I.metalnessMap && c.enable(24), I.gradientMap && c.enable(25), I.alphaMap && c.enable(26), I.alphaTest && c.enable(27), I.vertexColors && c.enable(28), I.vertexAlphas && c.enable(29), I.vertexUvs && c.enable(30), I.vertexTangents && c.enable(31), I.uvsVertexOnly && c.enable(32), E.push(c.mask), c.disableAll(), I.fog && c.enable(0), I.useFog && c.enable(1), I.flatShading && c.enable(2), I.logarithmicDepthBuffer && c.enable(3), I.skinning && c.enable(4), I.morphTargets && c.enable(5), I.morphNormals && c.enable(6), I.morphColors && c.enable(7), I.premultipliedAlpha && c.enable(8), I.shadowMapEnabled && c.enable(9), I.physicallyCorrectLights && c.enable(10), I.doubleSided && c.enable(11), I.flipSided && c.enable(12), I.useDepthPacking && c.enable(13), I.dithering && c.enable(14), I.specularIntensityMap && c.enable(15), I.specularColorMap && c.enable(16), I.transmission && c.enable(17), I.transmissionMap && c.enable(18), I.thicknessMap && c.enable(19), I.sheen && c.enable(20), I.sheenColorMap && c.enable(21), I.sheenRoughnessMap && c.enable(22), I.decodeVideoTexture && c.enable(23), I.opaque && c.enable(24), E.push(c.mask);
    }
    function S(E) {
      const I = y[E.type];
      let V;
      if (I) {
        const ee = _n[I];
        V = lg.clone(ee.uniforms);
      } else V = E.uniforms;
      return V;
    }
    function M(E, I) {
      let V;
      for (let ee = 0, Q = d.length; ee < Q; ee++) {
        const W = d[ee];
        if (W.cacheKey === I) {
          V = W, ++V.usedTimes;
          break;
        }
      }
      return V === void 0 && (V = new v0(o, I, E, r), d.push(V)), V;
    }
    function P(E) {
      if (--E.usedTimes === 0) {
        const I = d.indexOf(E);
        d[I] = d[d.length - 1], d.pop(), E.destroy();
      }
    }
    function N(E) {
      u.remove(E);
    }
    function F() {
      u.dispose();
    }
    return {
      getParameters: _,
      getProgramCacheKey: v,
      getUniforms: S,
      acquireProgram: M,
      releaseProgram: P,
      releaseShaderCache: N,
      programs: d,
      dispose: F
    };
  }
  function M0() {
    let o = /* @__PURE__ */ new WeakMap();
    function e(r) {
      let l = o.get(r);
      return l === void 0 && (l = {}, o.set(r, l)), l;
    }
    function t(r) {
      o.delete(r);
    }
    function n(r, l, c) {
      o.get(r)[l] = c;
    }
    function i() {
      o = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: e,
      remove: t,
      update: n,
      dispose: i
    };
  }
  function S0(o, e) {
    return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id;
  }
  function hh(o, e) {
    return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id;
  }
  function uh() {
    const o = [];
    let e = 0;
    const t = [], n = [], i = [];
    function r() {
      e = 0, t.length = 0, n.length = 0, i.length = 0;
    }
    function l(m, g, b, y, _, v) {
      let w = o[e];
      return w === void 0 ? (w = {
        id: m.id,
        object: m,
        geometry: g,
        material: b,
        groupOrder: y,
        renderOrder: m.renderOrder,
        z: _,
        group: v
      }, o[e] = w) : (w.id = m.id, w.object = m, w.geometry = g, w.material = b, w.groupOrder = y, w.renderOrder = m.renderOrder, w.z = _, w.group = v), e++, w;
    }
    function c(m, g, b, y, _, v) {
      const w = l(m, g, b, y, _, v);
      b.transmission > 0 ? n.push(w) : b.transparent === true ? i.push(w) : t.push(w);
    }
    function u(m, g, b, y, _, v) {
      const w = l(m, g, b, y, _, v);
      b.transmission > 0 ? n.unshift(w) : b.transparent === true ? i.unshift(w) : t.unshift(w);
    }
    function d(m, g) {
      t.length > 1 && t.sort(m || S0), n.length > 1 && n.sort(g || hh), i.length > 1 && i.sort(g || hh);
    }
    function f() {
      for (let m = e, g = o.length; m < g; m++) {
        const b = o[m];
        if (b.id === null) break;
        b.id = null, b.object = null, b.geometry = null, b.material = null, b.group = null;
      }
    }
    return {
      opaque: t,
      transmissive: n,
      transparent: i,
      init: r,
      push: c,
      unshift: u,
      finish: f,
      sort: d
    };
  }
  function E0() {
    let o = /* @__PURE__ */ new WeakMap();
    function e(n, i) {
      const r = o.get(n);
      let l;
      return r === void 0 ? (l = new uh(), o.set(n, [
        l
      ])) : i >= r.length ? (l = new uh(), r.push(l)) : l = r[i], l;
    }
    function t() {
      o = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: e,
      dispose: t
    };
  }
  function T0() {
    const o = {};
    return {
      get: function(e) {
        if (o[e.id] !== void 0) return o[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              direction: new k(),
              color: new He()
            };
            break;
          case "SpotLight":
            t = {
              position: new k(),
              direction: new k(),
              color: new He(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            t = {
              position: new k(),
              color: new He(),
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            t = {
              direction: new k(),
              skyColor: new He(),
              groundColor: new He()
            };
            break;
          case "RectAreaLight":
            t = {
              color: new He(),
              position: new k(),
              halfWidth: new k(),
              halfHeight: new k()
            };
            break;
        }
        return o[e.id] = t, t;
      }
    };
  }
  function C0() {
    const o = {};
    return {
      get: function(e) {
        if (o[e.id] !== void 0) return o[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ke()
            };
            break;
          case "SpotLight":
            t = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ke()
            };
            break;
          case "PointLight":
            t = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new ke(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
        }
        return o[e.id] = t, t;
      }
    };
  }
  let A0 = 0;
  function P0(o, e) {
    return (e.castShadow ? 2 : 0) - (o.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (o.map ? 1 : 0);
  }
  function L0(o, e) {
    const t = new T0(), n = C0(), i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1
      },
      ambient: [
        0,
        0,
        0
      ],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0
    };
    for (let f = 0; f < 9; f++) i.probe.push(new k());
    const r = new k(), l = new ze(), c = new ze();
    function u(f, m) {
      let g = 0, b = 0, y = 0;
      for (let ee = 0; ee < 9; ee++) i.probe[ee].set(0, 0, 0);
      let _ = 0, v = 0, w = 0, C = 0, S = 0, M = 0, P = 0, N = 0, F = 0, E = 0;
      f.sort(P0);
      const I = m !== true ? Math.PI : 1;
      for (let ee = 0, Q = f.length; ee < Q; ee++) {
        const W = f[ee], G = W.color, $ = W.intensity, ie = W.distance, te = W.shadow && W.shadow.map ? W.shadow.map.texture : null;
        if (W.isAmbientLight) g += G.r * $ * I, b += G.g * $ * I, y += G.b * $ * I;
        else if (W.isLightProbe) for (let H = 0; H < 9; H++) i.probe[H].addScaledVector(W.sh.coefficients[H], $);
        else if (W.isDirectionalLight) {
          const H = t.get(W);
          if (H.color.copy(W.color).multiplyScalar(W.intensity * I), W.castShadow) {
            const he = W.shadow, se = n.get(W);
            se.shadowBias = he.bias, se.shadowNormalBias = he.normalBias, se.shadowRadius = he.radius, se.shadowMapSize = he.mapSize, i.directionalShadow[_] = se, i.directionalShadowMap[_] = te, i.directionalShadowMatrix[_] = W.shadow.matrix, M++;
          }
          i.directional[_] = H, _++;
        } else if (W.isSpotLight) {
          const H = t.get(W);
          H.position.setFromMatrixPosition(W.matrixWorld), H.color.copy(G).multiplyScalar($ * I), H.distance = ie, H.coneCos = Math.cos(W.angle), H.penumbraCos = Math.cos(W.angle * (1 - W.penumbra)), H.decay = W.decay, i.spot[w] = H;
          const he = W.shadow;
          if (W.map && (i.spotLightMap[F] = W.map, F++, he.updateMatrices(W), W.castShadow && E++), i.spotLightMatrix[w] = he.matrix, W.castShadow) {
            const se = n.get(W);
            se.shadowBias = he.bias, se.shadowNormalBias = he.normalBias, se.shadowRadius = he.radius, se.shadowMapSize = he.mapSize, i.spotShadow[w] = se, i.spotShadowMap[w] = te, N++;
          }
          w++;
        } else if (W.isRectAreaLight) {
          const H = t.get(W);
          H.color.copy(G).multiplyScalar($), H.halfWidth.set(W.width * 0.5, 0, 0), H.halfHeight.set(0, W.height * 0.5, 0), i.rectArea[C] = H, C++;
        } else if (W.isPointLight) {
          const H = t.get(W);
          if (H.color.copy(W.color).multiplyScalar(W.intensity * I), H.distance = W.distance, H.decay = W.decay, W.castShadow) {
            const he = W.shadow, se = n.get(W);
            se.shadowBias = he.bias, se.shadowNormalBias = he.normalBias, se.shadowRadius = he.radius, se.shadowMapSize = he.mapSize, se.shadowCameraNear = he.camera.near, se.shadowCameraFar = he.camera.far, i.pointShadow[v] = se, i.pointShadowMap[v] = te, i.pointShadowMatrix[v] = W.shadow.matrix, P++;
          }
          i.point[v] = H, v++;
        } else if (W.isHemisphereLight) {
          const H = t.get(W);
          H.skyColor.copy(W.color).multiplyScalar($ * I), H.groundColor.copy(W.groundColor).multiplyScalar($ * I), i.hemi[S] = H, S++;
        }
      }
      C > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = de.LTC_FLOAT_1, i.rectAreaLTC2 = de.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === true ? (i.rectAreaLTC1 = de.LTC_HALF_1, i.rectAreaLTC2 = de.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = g, i.ambient[1] = b, i.ambient[2] = y;
      const V = i.hash;
      (V.directionalLength !== _ || V.pointLength !== v || V.spotLength !== w || V.rectAreaLength !== C || V.hemiLength !== S || V.numDirectionalShadows !== M || V.numPointShadows !== P || V.numSpotShadows !== N || V.numSpotMaps !== F) && (i.directional.length = _, i.spot.length = w, i.rectArea.length = C, i.point.length = v, i.hemi.length = S, i.directionalShadow.length = M, i.directionalShadowMap.length = M, i.pointShadow.length = P, i.pointShadowMap.length = P, i.spotShadow.length = N, i.spotShadowMap.length = N, i.directionalShadowMatrix.length = M, i.pointShadowMatrix.length = P, i.spotLightMatrix.length = N + F - E, i.spotLightMap.length = F, i.numSpotLightShadowsWithMaps = E, V.directionalLength = _, V.pointLength = v, V.spotLength = w, V.rectAreaLength = C, V.hemiLength = S, V.numDirectionalShadows = M, V.numPointShadows = P, V.numSpotShadows = N, V.numSpotMaps = F, i.version = A0++);
    }
    function d(f, m) {
      let g = 0, b = 0, y = 0, _ = 0, v = 0;
      const w = m.matrixWorldInverse;
      for (let C = 0, S = f.length; C < S; C++) {
        const M = f[C];
        if (M.isDirectionalLight) {
          const P = i.directional[g];
          P.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), P.direction.sub(r), P.direction.transformDirection(w), g++;
        } else if (M.isSpotLight) {
          const P = i.spot[y];
          P.position.setFromMatrixPosition(M.matrixWorld), P.position.applyMatrix4(w), P.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), P.direction.sub(r), P.direction.transformDirection(w), y++;
        } else if (M.isRectAreaLight) {
          const P = i.rectArea[_];
          P.position.setFromMatrixPosition(M.matrixWorld), P.position.applyMatrix4(w), c.identity(), l.copy(M.matrixWorld), l.premultiply(w), c.extractRotation(l), P.halfWidth.set(M.width * 0.5, 0, 0), P.halfHeight.set(0, M.height * 0.5, 0), P.halfWidth.applyMatrix4(c), P.halfHeight.applyMatrix4(c), _++;
        } else if (M.isPointLight) {
          const P = i.point[b];
          P.position.setFromMatrixPosition(M.matrixWorld), P.position.applyMatrix4(w), b++;
        } else if (M.isHemisphereLight) {
          const P = i.hemi[v];
          P.direction.setFromMatrixPosition(M.matrixWorld), P.direction.transformDirection(w), v++;
        }
      }
    }
    return {
      setup: u,
      setupView: d,
      state: i
    };
  }
  function dh(o, e) {
    const t = new L0(o, e), n = [], i = [];
    function r() {
      n.length = 0, i.length = 0;
    }
    function l(m) {
      n.push(m);
    }
    function c(m) {
      i.push(m);
    }
    function u(m) {
      t.setup(n, m);
    }
    function d(m) {
      t.setupView(n, m);
    }
    return {
      init: r,
      state: {
        lightsArray: n,
        shadowsArray: i,
        lights: t
      },
      setupLights: u,
      setupLightsView: d,
      pushLight: l,
      pushShadow: c
    };
  }
  function R0(o, e) {
    let t = /* @__PURE__ */ new WeakMap();
    function n(r, l = 0) {
      const c = t.get(r);
      let u;
      return c === void 0 ? (u = new dh(o, e), t.set(r, [
        u
      ])) : l >= c.length ? (u = new dh(o, e), c.push(u)) : u = c[l], u;
    }
    function i() {
      t = /* @__PURE__ */ new WeakMap();
    }
    return {
      get: n,
      dispose: i
    };
  }
  class D0 extends vn {
    constructor(e) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Rm, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
    }
  }
  class I0 extends vn {
    constructor(e) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.referencePosition = new k(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
    }
  }
  const k0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, N0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
  function O0(o, e, t) {
    let n = new za();
    const i = new ke(), r = new ke(), l = new rt(), c = new D0({
      depthPacking: Dm
    }), u = new I0(), d = {}, f = t.maxTextureSize, m = {
      [Fn]: Qt,
      [Qt]: Fn,
      [Dn]: Dn
    }, g = new Mi({
      defines: {
        VSM_SAMPLES: 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new ke()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: k0,
      fragmentShader: N0
    }), b = g.clone();
    b.defines.HORIZONTAL_PASS = 1;
    const y = new dn();
    y.setAttribute("position", new It(new Float32Array([
      -1,
      -1,
      0.5,
      3,
      -1,
      0.5,
      -1,
      3,
      0.5
    ]), 3));
    const _ = new Jt(y, g), v = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = $h, this.render = function(M, P, N) {
      if (v.enabled === false || v.autoUpdate === false && v.needsUpdate === false || M.length === 0) return;
      const F = o.getRenderTarget(), E = o.getActiveCubeFace(), I = o.getActiveMipmapLevel(), V = o.state;
      V.setBlending(Qn), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(true), V.setScissorTest(false);
      for (let ee = 0, Q = M.length; ee < Q; ee++) {
        const W = M[ee], G = W.shadow;
        if (G === void 0) {
          console.warn("THREE.WebGLShadowMap:", W, "has no shadow.");
          continue;
        }
        if (G.autoUpdate === false && G.needsUpdate === false) continue;
        i.copy(G.mapSize);
        const $ = G.getFrameExtents();
        if (i.multiply($), r.copy(G.mapSize), (i.x > f || i.y > f) && (i.x > f && (r.x = Math.floor(f / $.x), i.x = r.x * $.x, G.mapSize.x = r.x), i.y > f && (r.y = Math.floor(f / $.y), i.y = r.y * $.y, G.mapSize.y = r.y)), G.map === null) {
          const te = this.type !== Xs ? {
            minFilter: At,
            magFilter: At
          } : {};
          G.map = new wi(i.x, i.y, te), G.map.texture.name = W.name + ".shadowMap", G.camera.updateProjectionMatrix();
        }
        o.setRenderTarget(G.map), o.clear();
        const ie = G.getViewportCount();
        for (let te = 0; te < ie; te++) {
          const H = G.getViewport(te);
          l.set(r.x * H.x, r.y * H.y, r.x * H.z, r.y * H.w), V.viewport(l), G.updateMatrices(W, te), n = G.getFrustum(), S(P, N, G.camera, W, this.type);
        }
        G.isPointLightShadow !== true && this.type === Xs && w(G, N), G.needsUpdate = false;
      }
      v.needsUpdate = false, o.setRenderTarget(F, E, I);
    };
    function w(M, P) {
      const N = e.update(_);
      g.defines.VSM_SAMPLES !== M.blurSamples && (g.defines.VSM_SAMPLES = M.blurSamples, b.defines.VSM_SAMPLES = M.blurSamples, g.needsUpdate = true, b.needsUpdate = true), M.mapPass === null && (M.mapPass = new wi(i.x, i.y)), g.uniforms.shadow_pass.value = M.map.texture, g.uniforms.resolution.value = M.mapSize, g.uniforms.radius.value = M.radius, o.setRenderTarget(M.mapPass), o.clear(), o.renderBufferDirect(P, null, N, g, _, null), b.uniforms.shadow_pass.value = M.mapPass.texture, b.uniforms.resolution.value = M.mapSize, b.uniforms.radius.value = M.radius, o.setRenderTarget(M.map), o.clear(), o.renderBufferDirect(P, null, N, b, _, null);
    }
    function C(M, P, N, F, E, I) {
      let V = null;
      const ee = N.isPointLight === true ? M.customDistanceMaterial : M.customDepthMaterial;
      if (ee !== void 0) V = ee;
      else if (V = N.isPointLight === true ? u : c, o.localClippingEnabled && P.clipShadows === true && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0) {
        const Q = V.uuid, W = P.uuid;
        let G = d[Q];
        G === void 0 && (G = {}, d[Q] = G);
        let $ = G[W];
        $ === void 0 && ($ = V.clone(), G[W] = $), V = $;
      }
      return V.visible = P.visible, V.wireframe = P.wireframe, I === Xs ? V.side = P.shadowSide !== null ? P.shadowSide : P.side : V.side = P.shadowSide !== null ? P.shadowSide : m[P.side], V.alphaMap = P.alphaMap, V.alphaTest = P.alphaTest, V.map = P.map, V.clipShadows = P.clipShadows, V.clippingPlanes = P.clippingPlanes, V.clipIntersection = P.clipIntersection, V.displacementMap = P.displacementMap, V.displacementScale = P.displacementScale, V.displacementBias = P.displacementBias, V.wireframeLinewidth = P.wireframeLinewidth, V.linewidth = P.linewidth, N.isPointLight === true && V.isMeshDistanceMaterial === true && (V.referencePosition.setFromMatrixPosition(N.matrixWorld), V.nearDistance = F, V.farDistance = E), V;
    }
    function S(M, P, N, F, E) {
      if (M.visible === false) return;
      if (M.layers.test(P.layers) && (M.isMesh || M.isLine || M.isPoints) && (M.castShadow || M.receiveShadow && E === Xs) && (!M.frustumCulled || n.intersectsObject(M))) {
        M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, M.matrixWorld);
        const ee = e.update(M), Q = M.material;
        if (Array.isArray(Q)) {
          const W = ee.groups;
          for (let G = 0, $ = W.length; G < $; G++) {
            const ie = W[G], te = Q[ie.materialIndex];
            if (te && te.visible) {
              const H = C(M, te, F, N.near, N.far, E);
              o.renderBufferDirect(N, null, ee, H, M, ie);
            }
          }
        } else if (Q.visible) {
          const W = C(M, Q, F, N.near, N.far, E);
          o.renderBufferDirect(N, null, ee, W, M, null);
        }
      }
      const V = M.children;
      for (let ee = 0, Q = V.length; ee < Q; ee++) S(V[ee], P, N, F, E);
    }
  }
  function F0(o, e, t) {
    const n = t.isWebGL2;
    function i() {
      let O = false;
      const Y = new rt();
      let ae = null;
      const ve = new rt(0, 0, 0, 0);
      return {
        setMask: function(Me) {
          ae !== Me && !O && (o.colorMask(Me, Me, Me, Me), ae = Me);
        },
        setLocked: function(Me) {
          O = Me;
        },
        setClear: function(Me, Ze, _t, vt, an) {
          an === true && (Me *= vt, Ze *= vt, _t *= vt), Y.set(Me, Ze, _t, vt), ve.equals(Y) === false && (o.clearColor(Me, Ze, _t, vt), ve.copy(Y));
        },
        reset: function() {
          O = false, ae = null, ve.set(-1, 0, 0, 0);
        }
      };
    }
    function r() {
      let O = false, Y = null, ae = null, ve = null;
      return {
        setTest: function(Me) {
          Me ? De(2929) : xe(2929);
        },
        setMask: function(Me) {
          Y !== Me && !O && (o.depthMask(Me), Y = Me);
        },
        setFunc: function(Me) {
          if (ae !== Me) {
            switch (Me) {
              case Jf:
                o.depthFunc(512);
                break;
              case Qf:
                o.depthFunc(519);
                break;
              case em:
                o.depthFunc(513);
                break;
              case ya:
                o.depthFunc(515);
                break;
              case tm:
                o.depthFunc(514);
                break;
              case nm:
                o.depthFunc(518);
                break;
              case im:
                o.depthFunc(516);
                break;
              case sm:
                o.depthFunc(517);
                break;
              default:
                o.depthFunc(515);
            }
            ae = Me;
          }
        },
        setLocked: function(Me) {
          O = Me;
        },
        setClear: function(Me) {
          ve !== Me && (o.clearDepth(Me), ve = Me);
        },
        reset: function() {
          O = false, Y = null, ae = null, ve = null;
        }
      };
    }
    function l() {
      let O = false, Y = null, ae = null, ve = null, Me = null, Ze = null, _t = null, vt = null, an = null;
      return {
        setTest: function(Ye) {
          O || (Ye ? De(2960) : xe(2960));
        },
        setMask: function(Ye) {
          Y !== Ye && !O && (o.stencilMask(Ye), Y = Ye);
        },
        setFunc: function(Ye, Xt, ft) {
          (ae !== Ye || ve !== Xt || Me !== ft) && (o.stencilFunc(Ye, Xt, ft), ae = Ye, ve = Xt, Me = ft);
        },
        setOp: function(Ye, Xt, ft) {
          (Ze !== Ye || _t !== Xt || vt !== ft) && (o.stencilOp(Ye, Xt, ft), Ze = Ye, _t = Xt, vt = ft);
        },
        setLocked: function(Ye) {
          O = Ye;
        },
        setClear: function(Ye) {
          an !== Ye && (o.clearStencil(Ye), an = Ye);
        },
        reset: function() {
          O = false, Y = null, ae = null, ve = null, Me = null, Ze = null, _t = null, vt = null, an = null;
        }
      };
    }
    const c = new i(), u = new r(), d = new l(), f = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    let g = {}, b = {}, y = /* @__PURE__ */ new WeakMap(), _ = [], v = null, w = false, C = null, S = null, M = null, P = null, N = null, F = null, E = null, I = false, V = null, ee = null, Q = null, W = null, G = null;
    const $ = o.getParameter(35661);
    let ie = false, te = 0;
    const H = o.getParameter(7938);
    H.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(H)[1]), ie = te >= 1) : H.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), ie = te >= 2);
    let he = null, se = {};
    const Se = o.getParameter(3088), q = o.getParameter(2978), re = new rt().fromArray(Se), ne = new rt().fromArray(q);
    function oe(O, Y, ae) {
      const ve = new Uint8Array(4), Me = o.createTexture();
      o.bindTexture(O, Me), o.texParameteri(O, 10241, 9728), o.texParameteri(O, 10240, 9728);
      for (let Ze = 0; Ze < ae; Ze++) o.texImage2D(Y + Ze, 0, 6408, 1, 1, 0, 6408, 5121, ve);
      return Me;
    }
    const X = {};
    X[3553] = oe(3553, 3553, 1), X[34067] = oe(34067, 34069, 6), c.setClear(0, 0, 0, 1), u.setClear(1), d.setClear(0), De(2929), u.setFunc(ya), Qe(false), gt(sc), De(2884), pt(Qn);
    function De(O) {
      g[O] !== true && (o.enable(O), g[O] = true);
    }
    function xe(O) {
      g[O] !== false && (o.disable(O), g[O] = false);
    }
    function ye(O, Y) {
      return b[O] !== Y ? (o.bindFramebuffer(O, Y), b[O] = Y, n && (O === 36009 && (b[36160] = Y), O === 36160 && (b[36009] = Y)), true) : false;
    }
    function me(O, Y) {
      let ae = _, ve = false;
      if (O) if (ae = y.get(Y), ae === void 0 && (ae = [], y.set(Y, ae)), O.isWebGLMultipleRenderTargets) {
        const Me = O.texture;
        if (ae.length !== Me.length || ae[0] !== 36064) {
          for (let Ze = 0, _t = Me.length; Ze < _t; Ze++) ae[Ze] = 36064 + Ze;
          ae.length = Me.length, ve = true;
        }
      } else ae[0] !== 36064 && (ae[0] = 36064, ve = true);
      else ae[0] !== 1029 && (ae[0] = 1029, ve = true);
      ve && (t.isWebGL2 ? o.drawBuffers(ae) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae));
    }
    function Ue(O) {
      return v !== O ? (o.useProgram(O), v = O, true) : false;
    }
    const Ie = {
      [Qi]: 32774,
      [zf]: 32778,
      [Gf]: 32779
    };
    if (n) Ie[lc] = 32775, Ie[cc] = 32776;
    else {
      const O = e.get("EXT_blend_minmax");
      O !== null && (Ie[lc] = O.MIN_EXT, Ie[cc] = O.MAX_EXT);
    }
    const Te = {
      [Hf]: 0,
      [Wf]: 1,
      [jf]: 768,
      [Jh]: 770,
      [Zf]: 776,
      [Yf]: 774,
      [Xf]: 772,
      [qf]: 769,
      [Qh]: 771,
      [$f]: 775,
      [Kf]: 773
    };
    function pt(O, Y, ae, ve, Me, Ze, _t, vt) {
      if (O === Qn) {
        w === true && (xe(3042), w = false);
        return;
      }
      if (w === false && (De(3042), w = true), O !== Vf) {
        if (O !== C || vt !== I) {
          if ((S !== Qi || N !== Qi) && (o.blendEquation(32774), S = Qi, N = Qi), vt) switch (O) {
            case ss:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case rc:
              o.blendFunc(1, 1);
              break;
            case oc:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ac:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", O);
              break;
          }
          else switch (O) {
            case ss:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case rc:
              o.blendFunc(770, 1);
              break;
            case oc:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ac:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", O);
              break;
          }
          M = null, P = null, F = null, E = null, C = O, I = vt;
        }
        return;
      }
      Me = Me || Y, Ze = Ze || ae, _t = _t || ve, (Y !== S || Me !== N) && (o.blendEquationSeparate(Ie[Y], Ie[Me]), S = Y, N = Me), (ae !== M || ve !== P || Ze !== F || _t !== E) && (o.blendFuncSeparate(Te[ae], Te[ve], Te[Ze], Te[_t]), M = ae, P = ve, F = Ze, E = _t), C = O, I = false;
    }
    function dt(O, Y) {
      O.side === Dn ? xe(2884) : De(2884);
      let ae = O.side === Qt;
      Y && (ae = !ae), Qe(ae), O.blending === ss && O.transparent === false ? pt(Qn) : pt(O.blending, O.blendEquation, O.blendSrc, O.blendDst, O.blendEquationAlpha, O.blendSrcAlpha, O.blendDstAlpha, O.premultipliedAlpha), u.setFunc(O.depthFunc), u.setTest(O.depthTest), u.setMask(O.depthWrite), c.setMask(O.colorWrite);
      const ve = O.stencilWrite;
      d.setTest(ve), ve && (d.setMask(O.stencilWriteMask), d.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask), d.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)), Ke(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits), O.alphaToCoverage === true ? De(32926) : xe(32926);
    }
    function Qe(O) {
      V !== O && (O ? o.frontFace(2304) : o.frontFace(2305), V = O);
    }
    function gt(O) {
      O !== Uf ? (De(2884), O !== ee && (O === sc ? o.cullFace(1029) : O === Bf ? o.cullFace(1028) : o.cullFace(1032))) : xe(2884), ee = O;
    }
    function ct(O) {
      O !== Q && (ie && o.lineWidth(O), Q = O);
    }
    function Ke(O, Y, ae) {
      O ? (De(32823), (W !== Y || G !== ae) && (o.polygonOffset(Y, ae), W = Y, G = ae)) : xe(32823);
    }
    function Wt(O) {
      O ? De(3089) : xe(3089);
    }
    function kt(O) {
      O === void 0 && (O = 33984 + $ - 1), he !== O && (o.activeTexture(O), he = O);
    }
    function L(O, Y, ae) {
      ae === void 0 && (he === null ? ae = 33984 + $ - 1 : ae = he);
      let ve = se[ae];
      ve === void 0 && (ve = {
        type: void 0,
        texture: void 0
      }, se[ae] = ve), (ve.type !== O || ve.texture !== Y) && (he !== ae && (o.activeTexture(ae), he = ae), o.bindTexture(O, Y || X[O]), ve.type = O, ve.texture = Y);
    }
    function T() {
      const O = se[he];
      O !== void 0 && O.type !== void 0 && (o.bindTexture(O.type, null), O.type = void 0, O.texture = void 0);
    }
    function K() {
      try {
        o.compressedTexImage2D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function ce() {
      try {
        o.compressedTexImage3D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function ue() {
      try {
        o.texSubImage2D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function fe() {
      try {
        o.texSubImage3D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function Ae() {
      try {
        o.compressedTexSubImage2D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function D() {
      try {
        o.compressedTexSubImage3D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function B() {
      try {
        o.texStorage2D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function ge() {
      try {
        o.texStorage3D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function _e() {
      try {
        o.texImage2D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function pe() {
      try {
        o.texImage3D.apply(o, arguments);
      } catch (O) {
        console.error("THREE.WebGLState:", O);
      }
    }
    function we(O) {
      re.equals(O) === false && (o.scissor(O.x, O.y, O.z, O.w), re.copy(O));
    }
    function be(O) {
      ne.equals(O) === false && (o.viewport(O.x, O.y, O.z, O.w), ne.copy(O));
    }
    function Ne(O, Y) {
      let ae = m.get(Y);
      ae === void 0 && (ae = /* @__PURE__ */ new WeakMap(), m.set(Y, ae));
      let ve = ae.get(O);
      ve === void 0 && (ve = o.getUniformBlockIndex(Y, O.name), ae.set(O, ve));
    }
    function Oe(O, Y) {
      const ve = m.get(Y).get(O);
      f.get(Y) !== ve && (o.uniformBlockBinding(Y, ve, O.__bindingPointIndex), f.set(Y, ve));
    }
    function nt() {
      o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(true, true, true, true), o.clearColor(0, 0, 0, 0), o.depthMask(true), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === true && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), g = {}, he = null, se = {}, b = {}, y = /* @__PURE__ */ new WeakMap(), _ = [], v = null, w = false, C = null, S = null, M = null, P = null, N = null, F = null, E = null, I = false, V = null, ee = null, Q = null, W = null, G = null, re.set(0, 0, o.canvas.width, o.canvas.height), ne.set(0, 0, o.canvas.width, o.canvas.height), c.reset(), u.reset(), d.reset();
    }
    return {
      buffers: {
        color: c,
        depth: u,
        stencil: d
      },
      enable: De,
      disable: xe,
      bindFramebuffer: ye,
      drawBuffers: me,
      useProgram: Ue,
      setBlending: pt,
      setMaterial: dt,
      setFlipSided: Qe,
      setCullFace: gt,
      setLineWidth: ct,
      setPolygonOffset: Ke,
      setScissorTest: Wt,
      activeTexture: kt,
      bindTexture: L,
      unbindTexture: T,
      compressedTexImage2D: K,
      compressedTexImage3D: ce,
      texImage2D: _e,
      texImage3D: pe,
      updateUBOMapping: Ne,
      uniformBlockBinding: Oe,
      texStorage2D: B,
      texStorage3D: ge,
      texSubImage2D: ue,
      texSubImage3D: fe,
      compressedTexSubImage2D: Ae,
      compressedTexSubImage3D: D,
      scissor: we,
      viewport: be,
      reset: nt
    };
  }
  function U0(o, e, t, n, i, r, l) {
    const c = i.isWebGL2, u = i.maxTextures, d = i.maxCubemapSize, f = i.maxTextureSize, m = i.maxSamples, g = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, b = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), y = /* @__PURE__ */ new WeakMap();
    let _;
    const v = /* @__PURE__ */ new WeakMap();
    let w = false;
    try {
      w = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {
    }
    function C(L, T) {
      return w ? new OffscreenCanvas(L, T) : nr("canvas");
    }
    function S(L, T, K, ce) {
      let ue = 1;
      if ((L.width > ce || L.height > ce) && (ue = ce / Math.max(L.width, L.height)), ue < 1 || T === true) if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap) {
        const fe = T ? $r : Math.floor, Ae = fe(ue * L.width), D = fe(ue * L.height);
        _ === void 0 && (_ = C(Ae, D));
        const B = K ? C(Ae, D) : _;
        return B.width = Ae, B.height = D, B.getContext("2d").drawImage(L, 0, 0, Ae, D), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + L.width + "x" + L.height + ") to (" + Ae + "x" + D + ")."), B;
      } else return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + L.width + "x" + L.height + ")."), L;
      return L;
    }
    function M(L) {
      return Aa(L.width) && Aa(L.height);
    }
    function P(L) {
      return c ? false : L.wrapS !== rn || L.wrapT !== rn || L.minFilter !== At && L.minFilter !== qt;
    }
    function N(L, T) {
      return L.generateMipmaps && T && L.minFilter !== At && L.minFilter !== qt;
    }
    function F(L) {
      o.generateMipmap(L);
    }
    function E(L, T, K, ce, ue = false) {
      if (c === false) return T;
      if (L !== null) {
        if (o[L] !== void 0) return o[L];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
      }
      let fe = T;
      return T === 6403 && (K === 5126 && (fe = 33326), K === 5131 && (fe = 33325), K === 5121 && (fe = 33321)), T === 33319 && (K === 5126 && (fe = 33328), K === 5131 && (fe = 33327), K === 5121 && (fe = 33323)), T === 6408 && (K === 5126 && (fe = 34836), K === 5131 && (fe = 34842), K === 5121 && (fe = ce === tt && ue === false ? 35907 : 32856), K === 32819 && (fe = 32854), K === 32820 && (fe = 32855)), (fe === 33325 || fe === 33326 || fe === 33327 || fe === 33328 || fe === 34842 || fe === 34836) && e.get("EXT_color_buffer_float"), fe;
    }
    function I(L, T, K) {
      return N(L, K) === true || L.isFramebufferTexture && L.minFilter !== At && L.minFilter !== qt ? Math.log2(Math.max(T.width, T.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? T.mipmaps.length : 1;
    }
    function V(L) {
      return L === At || L === Sa || L === Wr ? 9728 : 9729;
    }
    function ee(L) {
      const T = L.target;
      T.removeEventListener("dispose", ee), W(T), T.isVideoTexture && y.delete(T);
    }
    function Q(L) {
      const T = L.target;
      T.removeEventListener("dispose", Q), $(T);
    }
    function W(L) {
      const T = n.get(L);
      if (T.__webglInit === void 0) return;
      const K = L.source, ce = v.get(K);
      if (ce) {
        const ue = ce[T.__cacheKey];
        ue.usedTimes--, ue.usedTimes === 0 && G(L), Object.keys(ce).length === 0 && v.delete(K);
      }
      n.remove(L);
    }
    function G(L) {
      const T = n.get(L);
      o.deleteTexture(T.__webglTexture);
      const K = L.source, ce = v.get(K);
      delete ce[T.__cacheKey], l.memory.textures--;
    }
    function $(L) {
      const T = L.texture, K = n.get(L), ce = n.get(T);
      if (ce.__webglTexture !== void 0 && (o.deleteTexture(ce.__webglTexture), l.memory.textures--), L.depthTexture && L.depthTexture.dispose(), L.isWebGLCubeRenderTarget) for (let ue = 0; ue < 6; ue++) o.deleteFramebuffer(K.__webglFramebuffer[ue]), K.__webglDepthbuffer && o.deleteRenderbuffer(K.__webglDepthbuffer[ue]);
      else {
        if (o.deleteFramebuffer(K.__webglFramebuffer), K.__webglDepthbuffer && o.deleteRenderbuffer(K.__webglDepthbuffer), K.__webglMultisampledFramebuffer && o.deleteFramebuffer(K.__webglMultisampledFramebuffer), K.__webglColorRenderbuffer) for (let ue = 0; ue < K.__webglColorRenderbuffer.length; ue++) K.__webglColorRenderbuffer[ue] && o.deleteRenderbuffer(K.__webglColorRenderbuffer[ue]);
        K.__webglDepthRenderbuffer && o.deleteRenderbuffer(K.__webglDepthRenderbuffer);
      }
      if (L.isWebGLMultipleRenderTargets) for (let ue = 0, fe = T.length; ue < fe; ue++) {
        const Ae = n.get(T[ue]);
        Ae.__webglTexture && (o.deleteTexture(Ae.__webglTexture), l.memory.textures--), n.remove(T[ue]);
      }
      n.remove(T), n.remove(L);
    }
    let ie = 0;
    function te() {
      ie = 0;
    }
    function H() {
      const L = ie;
      return L >= u && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + u), ie += 1, L;
    }
    function he(L) {
      const T = [];
      return T.push(L.wrapS), T.push(L.wrapT), T.push(L.wrapR || 0), T.push(L.magFilter), T.push(L.minFilter), T.push(L.anisotropy), T.push(L.internalFormat), T.push(L.format), T.push(L.type), T.push(L.generateMipmaps), T.push(L.premultiplyAlpha), T.push(L.flipY), T.push(L.unpackAlignment), T.push(L.encoding), T.join();
    }
    function se(L, T) {
      const K = n.get(L);
      if (L.isVideoTexture && Wt(L), L.isRenderTargetTexture === false && L.version > 0 && K.__version !== L.version) {
        const ce = L.image;
        if (ce === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else if (ce.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          xe(K, L, T);
          return;
        }
      }
      t.bindTexture(3553, K.__webglTexture, 33984 + T);
    }
    function Se(L, T) {
      const K = n.get(L);
      if (L.version > 0 && K.__version !== L.version) {
        xe(K, L, T);
        return;
      }
      t.bindTexture(35866, K.__webglTexture, 33984 + T);
    }
    function q(L, T) {
      const K = n.get(L);
      if (L.version > 0 && K.__version !== L.version) {
        xe(K, L, T);
        return;
      }
      t.bindTexture(32879, K.__webglTexture, 33984 + T);
    }
    function re(L, T) {
      const K = n.get(L);
      if (L.version > 0 && K.__version !== L.version) {
        ye(K, L, T);
        return;
      }
      t.bindTexture(34067, K.__webglTexture, 33984 + T);
    }
    const ne = {
      [cs]: 10497,
      [rn]: 33071,
      [Kr]: 33648
    }, oe = {
      [At]: 9728,
      [Sa]: 9984,
      [Wr]: 9986,
      [qt]: 9729,
      [iu]: 9985,
      [bi]: 9987
    };
    function X(L, T, K) {
      if (K ? (o.texParameteri(L, 10242, ne[T.wrapS]), o.texParameteri(L, 10243, ne[T.wrapT]), (L === 32879 || L === 35866) && o.texParameteri(L, 32882, ne[T.wrapR]), o.texParameteri(L, 10240, oe[T.magFilter]), o.texParameteri(L, 10241, oe[T.minFilter])) : (o.texParameteri(L, 10242, 33071), o.texParameteri(L, 10243, 33071), (L === 32879 || L === 35866) && o.texParameteri(L, 32882, 33071), (T.wrapS !== rn || T.wrapT !== rn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(L, 10240, V(T.magFilter)), o.texParameteri(L, 10241, V(T.minFilter)), T.minFilter !== At && T.minFilter !== qt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === true) {
        const ce = e.get("EXT_texture_filter_anisotropic");
        if (T.magFilter === At || T.minFilter !== Wr && T.minFilter !== bi || T.type === Jn && e.has("OES_texture_float_linear") === false || c === false && T.type === Js && e.has("OES_texture_half_float_linear") === false) return;
        (T.anisotropy > 1 || n.get(T).__currentAnisotropy) && (o.texParameterf(L, ce.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, i.getMaxAnisotropy())), n.get(T).__currentAnisotropy = T.anisotropy);
      }
    }
    function De(L, T) {
      let K = false;
      L.__webglInit === void 0 && (L.__webglInit = true, T.addEventListener("dispose", ee));
      const ce = T.source;
      let ue = v.get(ce);
      ue === void 0 && (ue = {}, v.set(ce, ue));
      const fe = he(T);
      if (fe !== L.__cacheKey) {
        ue[fe] === void 0 && (ue[fe] = {
          texture: o.createTexture(),
          usedTimes: 0
        }, l.memory.textures++, K = true), ue[fe].usedTimes++;
        const Ae = ue[L.__cacheKey];
        Ae !== void 0 && (ue[L.__cacheKey].usedTimes--, Ae.usedTimes === 0 && G(T)), L.__cacheKey = fe, L.__webglTexture = ue[fe].texture;
      }
      return K;
    }
    function xe(L, T, K) {
      let ce = 3553;
      (T.isDataArrayTexture || T.isCompressedArrayTexture) && (ce = 35866), T.isData3DTexture && (ce = 32879);
      const ue = De(L, T), fe = T.source;
      t.bindTexture(ce, L.__webglTexture, 33984 + K);
      const Ae = n.get(fe);
      if (fe.version !== Ae.__version || ue === true) {
        t.activeTexture(33984 + K), o.pixelStorei(37440, T.flipY), o.pixelStorei(37441, T.premultiplyAlpha), o.pixelStorei(3317, T.unpackAlignment), o.pixelStorei(37443, 0);
        const D = P(T) && M(T.image) === false;
        let B = S(T.image, D, false, f);
        B = kt(T, B);
        const ge = M(B) || c, _e = r.convert(T.format, T.encoding);
        let pe = r.convert(T.type), we = E(T.internalFormat, _e, pe, T.encoding, T.isVideoTexture);
        X(ce, T, ge);
        let be;
        const Ne = T.mipmaps, Oe = c && T.isVideoTexture !== true, nt = Ae.__version === void 0 || ue === true, O = I(T, B, ge);
        if (T.isDepthTexture) we = 6402, c ? T.type === Jn ? we = 36012 : T.type === mi ? we = 33190 : T.type === rs ? we = 35056 : we = 33189 : T.type === Jn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), T.format === _i && we === 6402 && T.type !== su && T.type !== mi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), T.type = mi, pe = r.convert(T.type)), T.format === hs && we === 6402 && (we = 34041, T.type !== rs && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), T.type = rs, pe = r.convert(T.type))), nt && (Oe ? t.texStorage2D(3553, 1, we, B.width, B.height) : t.texImage2D(3553, 0, we, B.width, B.height, 0, _e, pe, null));
        else if (T.isDataTexture) if (Ne.length > 0 && ge) {
          Oe && nt && t.texStorage2D(3553, O, we, Ne[0].width, Ne[0].height);
          for (let Y = 0, ae = Ne.length; Y < ae; Y++) be = Ne[Y], Oe ? t.texSubImage2D(3553, Y, 0, 0, be.width, be.height, _e, pe, be.data) : t.texImage2D(3553, Y, we, be.width, be.height, 0, _e, pe, be.data);
          T.generateMipmaps = false;
        } else Oe ? (nt && t.texStorage2D(3553, O, we, B.width, B.height), t.texSubImage2D(3553, 0, 0, 0, B.width, B.height, _e, pe, B.data)) : t.texImage2D(3553, 0, we, B.width, B.height, 0, _e, pe, B.data);
        else if (T.isCompressedTexture) if (T.isCompressedArrayTexture) {
          Oe && nt && t.texStorage3D(35866, O, we, Ne[0].width, Ne[0].height, B.depth);
          for (let Y = 0, ae = Ne.length; Y < ae; Y++) be = Ne[Y], T.format !== on ? _e !== null ? Oe ? t.compressedTexSubImage3D(35866, Y, 0, 0, 0, be.width, be.height, B.depth, _e, be.data, 0, 0) : t.compressedTexImage3D(35866, Y, we, be.width, be.height, B.depth, 0, be.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? t.texSubImage3D(35866, Y, 0, 0, 0, be.width, be.height, B.depth, _e, pe, be.data) : t.texImage3D(35866, Y, we, be.width, be.height, B.depth, 0, _e, pe, be.data);
        } else {
          Oe && nt && t.texStorage2D(3553, O, we, Ne[0].width, Ne[0].height);
          for (let Y = 0, ae = Ne.length; Y < ae; Y++) be = Ne[Y], T.format !== on ? _e !== null ? Oe ? t.compressedTexSubImage2D(3553, Y, 0, 0, be.width, be.height, _e, be.data) : t.compressedTexImage2D(3553, Y, we, be.width, be.height, 0, be.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? t.texSubImage2D(3553, Y, 0, 0, be.width, be.height, _e, pe, be.data) : t.texImage2D(3553, Y, we, be.width, be.height, 0, _e, pe, be.data);
        }
        else if (T.isDataArrayTexture) Oe ? (nt && t.texStorage3D(35866, O, we, B.width, B.height, B.depth), t.texSubImage3D(35866, 0, 0, 0, 0, B.width, B.height, B.depth, _e, pe, B.data)) : t.texImage3D(35866, 0, we, B.width, B.height, B.depth, 0, _e, pe, B.data);
        else if (T.isData3DTexture) Oe ? (nt && t.texStorage3D(32879, O, we, B.width, B.height, B.depth), t.texSubImage3D(32879, 0, 0, 0, 0, B.width, B.height, B.depth, _e, pe, B.data)) : t.texImage3D(32879, 0, we, B.width, B.height, B.depth, 0, _e, pe, B.data);
        else if (T.isFramebufferTexture) {
          if (nt) if (Oe) t.texStorage2D(3553, O, we, B.width, B.height);
          else {
            let Y = B.width, ae = B.height;
            for (let ve = 0; ve < O; ve++) t.texImage2D(3553, ve, we, Y, ae, 0, _e, pe, null), Y >>= 1, ae >>= 1;
          }
        } else if (Ne.length > 0 && ge) {
          Oe && nt && t.texStorage2D(3553, O, we, Ne[0].width, Ne[0].height);
          for (let Y = 0, ae = Ne.length; Y < ae; Y++) be = Ne[Y], Oe ? t.texSubImage2D(3553, Y, 0, 0, _e, pe, be) : t.texImage2D(3553, Y, we, _e, pe, be);
          T.generateMipmaps = false;
        } else Oe ? (nt && t.texStorage2D(3553, O, we, B.width, B.height), t.texSubImage2D(3553, 0, 0, 0, _e, pe, B)) : t.texImage2D(3553, 0, we, _e, pe, B);
        N(T, ge) && F(ce), Ae.__version = fe.version, T.onUpdate && T.onUpdate(T);
      }
      L.__version = T.version;
    }
    function ye(L, T, K) {
      if (T.image.length !== 6) return;
      const ce = De(L, T), ue = T.source;
      t.bindTexture(34067, L.__webglTexture, 33984 + K);
      const fe = n.get(ue);
      if (ue.version !== fe.__version || ce === true) {
        t.activeTexture(33984 + K), o.pixelStorei(37440, T.flipY), o.pixelStorei(37441, T.premultiplyAlpha), o.pixelStorei(3317, T.unpackAlignment), o.pixelStorei(37443, 0);
        const Ae = T.isCompressedTexture || T.image[0].isCompressedTexture, D = T.image[0] && T.image[0].isDataTexture, B = [];
        for (let Y = 0; Y < 6; Y++) !Ae && !D ? B[Y] = S(T.image[Y], false, true, d) : B[Y] = D ? T.image[Y].image : T.image[Y], B[Y] = kt(T, B[Y]);
        const ge = B[0], _e = M(ge) || c, pe = r.convert(T.format, T.encoding), we = r.convert(T.type), be = E(T.internalFormat, pe, we, T.encoding), Ne = c && T.isVideoTexture !== true, Oe = fe.__version === void 0 || ce === true;
        let nt = I(T, ge, _e);
        X(34067, T, _e);
        let O;
        if (Ae) {
          Ne && Oe && t.texStorage2D(34067, nt, be, ge.width, ge.height);
          for (let Y = 0; Y < 6; Y++) {
            O = B[Y].mipmaps;
            for (let ae = 0; ae < O.length; ae++) {
              const ve = O[ae];
              T.format !== on ? pe !== null ? Ne ? t.compressedTexSubImage2D(34069 + Y, ae, 0, 0, ve.width, ve.height, pe, ve.data) : t.compressedTexImage2D(34069 + Y, ae, be, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ne ? t.texSubImage2D(34069 + Y, ae, 0, 0, ve.width, ve.height, pe, we, ve.data) : t.texImage2D(34069 + Y, ae, be, ve.width, ve.height, 0, pe, we, ve.data);
            }
          }
        } else {
          O = T.mipmaps, Ne && Oe && (O.length > 0 && nt++, t.texStorage2D(34067, nt, be, B[0].width, B[0].height));
          for (let Y = 0; Y < 6; Y++) if (D) {
            Ne ? t.texSubImage2D(34069 + Y, 0, 0, 0, B[Y].width, B[Y].height, pe, we, B[Y].data) : t.texImage2D(34069 + Y, 0, be, B[Y].width, B[Y].height, 0, pe, we, B[Y].data);
            for (let ae = 0; ae < O.length; ae++) {
              const Me = O[ae].image[Y].image;
              Ne ? t.texSubImage2D(34069 + Y, ae + 1, 0, 0, Me.width, Me.height, pe, we, Me.data) : t.texImage2D(34069 + Y, ae + 1, be, Me.width, Me.height, 0, pe, we, Me.data);
            }
          } else {
            Ne ? t.texSubImage2D(34069 + Y, 0, 0, 0, pe, we, B[Y]) : t.texImage2D(34069 + Y, 0, be, pe, we, B[Y]);
            for (let ae = 0; ae < O.length; ae++) {
              const ve = O[ae];
              Ne ? t.texSubImage2D(34069 + Y, ae + 1, 0, 0, pe, we, ve.image[Y]) : t.texImage2D(34069 + Y, ae + 1, be, pe, we, ve.image[Y]);
            }
          }
        }
        N(T, _e) && F(34067), fe.__version = ue.version, T.onUpdate && T.onUpdate(T);
      }
      L.__version = T.version;
    }
    function me(L, T, K, ce, ue) {
      const fe = r.convert(K.format, K.encoding), Ae = r.convert(K.type), D = E(K.internalFormat, fe, Ae, K.encoding);
      n.get(T).__hasExternalTextures || (ue === 32879 || ue === 35866 ? t.texImage3D(ue, 0, D, T.width, T.height, T.depth, 0, fe, Ae, null) : t.texImage2D(ue, 0, D, T.width, T.height, 0, fe, Ae, null)), t.bindFramebuffer(36160, L), Ke(T) ? g.framebufferTexture2DMultisampleEXT(36160, ce, ue, n.get(K).__webglTexture, 0, ct(T)) : (ue === 3553 || ue >= 34069 && ue <= 34074) && o.framebufferTexture2D(36160, ce, ue, n.get(K).__webglTexture, 0), t.bindFramebuffer(36160, null);
    }
    function Ue(L, T, K) {
      if (o.bindRenderbuffer(36161, L), T.depthBuffer && !T.stencilBuffer) {
        let ce = 33189;
        if (K || Ke(T)) {
          const ue = T.depthTexture;
          ue && ue.isDepthTexture && (ue.type === Jn ? ce = 36012 : ue.type === mi && (ce = 33190));
          const fe = ct(T);
          Ke(T) ? g.renderbufferStorageMultisampleEXT(36161, fe, ce, T.width, T.height) : o.renderbufferStorageMultisample(36161, fe, ce, T.width, T.height);
        } else o.renderbufferStorage(36161, ce, T.width, T.height);
        o.framebufferRenderbuffer(36160, 36096, 36161, L);
      } else if (T.depthBuffer && T.stencilBuffer) {
        const ce = ct(T);
        K && Ke(T) === false ? o.renderbufferStorageMultisample(36161, ce, 35056, T.width, T.height) : Ke(T) ? g.renderbufferStorageMultisampleEXT(36161, ce, 35056, T.width, T.height) : o.renderbufferStorage(36161, 34041, T.width, T.height), o.framebufferRenderbuffer(36160, 33306, 36161, L);
      } else {
        const ce = T.isWebGLMultipleRenderTargets === true ? T.texture : [
          T.texture
        ];
        for (let ue = 0; ue < ce.length; ue++) {
          const fe = ce[ue], Ae = r.convert(fe.format, fe.encoding), D = r.convert(fe.type), B = E(fe.internalFormat, Ae, D, fe.encoding), ge = ct(T);
          K && Ke(T) === false ? o.renderbufferStorageMultisample(36161, ge, B, T.width, T.height) : Ke(T) ? g.renderbufferStorageMultisampleEXT(36161, ge, B, T.width, T.height) : o.renderbufferStorage(36161, B, T.width, T.height);
        }
      }
      o.bindRenderbuffer(36161, null);
    }
    function Ie(L, T) {
      if (T && T.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
      if (t.bindFramebuffer(36160, L), !(T.depthTexture && T.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      (!n.get(T.depthTexture).__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width, T.depthTexture.image.height = T.height, T.depthTexture.needsUpdate = true), se(T.depthTexture, 0);
      const ce = n.get(T.depthTexture).__webglTexture, ue = ct(T);
      if (T.depthTexture.format === _i) Ke(T) ? g.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ce, 0, ue) : o.framebufferTexture2D(36160, 36096, 3553, ce, 0);
      else if (T.depthTexture.format === hs) Ke(T) ? g.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ce, 0, ue) : o.framebufferTexture2D(36160, 33306, 3553, ce, 0);
      else throw new Error("Unknown depthTexture format");
    }
    function Te(L) {
      const T = n.get(L), K = L.isWebGLCubeRenderTarget === true;
      if (L.depthTexture && !T.__autoAllocateDepthBuffer) {
        if (K) throw new Error("target.depthTexture not supported in Cube render targets");
        Ie(T.__webglFramebuffer, L);
      } else if (K) {
        T.__webglDepthbuffer = [];
        for (let ce = 0; ce < 6; ce++) t.bindFramebuffer(36160, T.__webglFramebuffer[ce]), T.__webglDepthbuffer[ce] = o.createRenderbuffer(), Ue(T.__webglDepthbuffer[ce], L, false);
      } else t.bindFramebuffer(36160, T.__webglFramebuffer), T.__webglDepthbuffer = o.createRenderbuffer(), Ue(T.__webglDepthbuffer, L, false);
      t.bindFramebuffer(36160, null);
    }
    function pt(L, T, K) {
      const ce = n.get(L);
      T !== void 0 && me(ce.__webglFramebuffer, L, L.texture, 36064, 3553), K !== void 0 && Te(L);
    }
    function dt(L) {
      const T = L.texture, K = n.get(L), ce = n.get(T);
      L.addEventListener("dispose", Q), L.isWebGLMultipleRenderTargets !== true && (ce.__webglTexture === void 0 && (ce.__webglTexture = o.createTexture()), ce.__version = T.version, l.memory.textures++);
      const ue = L.isWebGLCubeRenderTarget === true, fe = L.isWebGLMultipleRenderTargets === true, Ae = M(L) || c;
      if (ue) {
        K.__webglFramebuffer = [];
        for (let D = 0; D < 6; D++) K.__webglFramebuffer[D] = o.createFramebuffer();
      } else {
        if (K.__webglFramebuffer = o.createFramebuffer(), fe) if (i.drawBuffers) {
          const D = L.texture;
          for (let B = 0, ge = D.length; B < ge; B++) {
            const _e = n.get(D[B]);
            _e.__webglTexture === void 0 && (_e.__webglTexture = o.createTexture(), l.memory.textures++);
          }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        if (c && L.samples > 0 && Ke(L) === false) {
          const D = fe ? T : [
            T
          ];
          K.__webglMultisampledFramebuffer = o.createFramebuffer(), K.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, K.__webglMultisampledFramebuffer);
          for (let B = 0; B < D.length; B++) {
            const ge = D[B];
            K.__webglColorRenderbuffer[B] = o.createRenderbuffer(), o.bindRenderbuffer(36161, K.__webglColorRenderbuffer[B]);
            const _e = r.convert(ge.format, ge.encoding), pe = r.convert(ge.type), we = E(ge.internalFormat, _e, pe, ge.encoding, L.isXRRenderTarget === true), be = ct(L);
            o.renderbufferStorageMultisample(36161, be, we, L.width, L.height), o.framebufferRenderbuffer(36160, 36064 + B, 36161, K.__webglColorRenderbuffer[B]);
          }
          o.bindRenderbuffer(36161, null), L.depthBuffer && (K.__webglDepthRenderbuffer = o.createRenderbuffer(), Ue(K.__webglDepthRenderbuffer, L, true)), t.bindFramebuffer(36160, null);
        }
      }
      if (ue) {
        t.bindTexture(34067, ce.__webglTexture), X(34067, T, Ae);
        for (let D = 0; D < 6; D++) me(K.__webglFramebuffer[D], L, T, 36064, 34069 + D);
        N(T, Ae) && F(34067), t.unbindTexture();
      } else if (fe) {
        const D = L.texture;
        for (let B = 0, ge = D.length; B < ge; B++) {
          const _e = D[B], pe = n.get(_e);
          t.bindTexture(3553, pe.__webglTexture), X(3553, _e, Ae), me(K.__webglFramebuffer, L, _e, 36064 + B, 3553), N(_e, Ae) && F(3553);
        }
        t.unbindTexture();
      } else {
        let D = 3553;
        (L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (c ? D = L.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(D, ce.__webglTexture), X(D, T, Ae), me(K.__webglFramebuffer, L, T, 36064, D), N(T, Ae) && F(D), t.unbindTexture();
      }
      L.depthBuffer && Te(L);
    }
    function Qe(L) {
      const T = M(L) || c, K = L.isWebGLMultipleRenderTargets === true ? L.texture : [
        L.texture
      ];
      for (let ce = 0, ue = K.length; ce < ue; ce++) {
        const fe = K[ce];
        if (N(fe, T)) {
          const Ae = L.isWebGLCubeRenderTarget ? 34067 : 3553, D = n.get(fe).__webglTexture;
          t.bindTexture(Ae, D), F(Ae), t.unbindTexture();
        }
      }
    }
    function gt(L) {
      if (c && L.samples > 0 && Ke(L) === false) {
        const T = L.isWebGLMultipleRenderTargets ? L.texture : [
          L.texture
        ], K = L.width, ce = L.height;
        let ue = 16384;
        const fe = [], Ae = L.stencilBuffer ? 33306 : 36096, D = n.get(L), B = L.isWebGLMultipleRenderTargets === true;
        if (B) for (let ge = 0; ge < T.length; ge++) t.bindFramebuffer(36160, D.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + ge, 36161, null), t.bindFramebuffer(36160, D.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + ge, 3553, null, 0);
        t.bindFramebuffer(36008, D.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, D.__webglFramebuffer);
        for (let ge = 0; ge < T.length; ge++) {
          fe.push(36064 + ge), L.depthBuffer && fe.push(Ae);
          const _e = D.__ignoreDepthValues !== void 0 ? D.__ignoreDepthValues : false;
          if (_e === false && (L.depthBuffer && (ue |= 256), L.stencilBuffer && (ue |= 1024)), B && o.framebufferRenderbuffer(36008, 36064, 36161, D.__webglColorRenderbuffer[ge]), _e === true && (o.invalidateFramebuffer(36008, [
            Ae
          ]), o.invalidateFramebuffer(36009, [
            Ae
          ])), B) {
            const pe = n.get(T[ge]).__webglTexture;
            o.framebufferTexture2D(36009, 36064, 3553, pe, 0);
          }
          o.blitFramebuffer(0, 0, K, ce, 0, 0, K, ce, ue, 9728), b && o.invalidateFramebuffer(36008, fe);
        }
        if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), B) for (let ge = 0; ge < T.length; ge++) {
          t.bindFramebuffer(36160, D.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + ge, 36161, D.__webglColorRenderbuffer[ge]);
          const _e = n.get(T[ge]).__webglTexture;
          t.bindFramebuffer(36160, D.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + ge, 3553, _e, 0);
        }
        t.bindFramebuffer(36009, D.__webglMultisampledFramebuffer);
      }
    }
    function ct(L) {
      return Math.min(m, L.samples);
    }
    function Ke(L) {
      const T = n.get(L);
      return c && L.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && T.__useRenderToTexture !== false;
    }
    function Wt(L) {
      const T = l.render.frame;
      y.get(L) !== T && (y.set(L, T), L.update());
    }
    function kt(L, T) {
      const K = L.encoding, ce = L.format, ue = L.type;
      return L.isCompressedTexture === true || L.isVideoTexture === true || L.format === Ca || K !== yi && (K === tt ? c === false ? e.has("EXT_sRGB") === true && ce === on ? (L.format = Ca, L.minFilter = qt, L.generateMipmaps = false) : T = hu.sRGBToLinear(T) : (ce !== on || ue !== xi) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", K)), T;
    }
    this.allocateTextureUnit = H, this.resetTextureUnits = te, this.setTexture2D = se, this.setTexture2DArray = Se, this.setTexture3D = q, this.setTextureCube = re, this.rebindTextures = pt, this.setupRenderTarget = dt, this.updateRenderTargetMipmap = Qe, this.updateMultisampleRenderTarget = gt, this.setupDepthRenderbuffer = Te, this.setupFrameBufferTexture = me, this.useMultisampledRTT = Ke;
  }
  function B0(o, e, t) {
    const n = t.isWebGL2;
    function i(r, l = null) {
      let c;
      if (r === xi) return 5121;
      if (r === fm) return 32819;
      if (r === mm) return 32820;
      if (r === um) return 5120;
      if (r === dm) return 5122;
      if (r === su) return 5123;
      if (r === pm) return 5124;
      if (r === mi) return 5125;
      if (r === Jn) return 5126;
      if (r === Js) return n ? 5131 : (c = e.get("OES_texture_half_float"), c !== null ? c.HALF_FLOAT_OES : null);
      if (r === gm) return 6406;
      if (r === on) return 6408;
      if (r === _m) return 6409;
      if (r === vm) return 6410;
      if (r === _i) return 6402;
      if (r === hs) return 34041;
      if (r === Ca) return c = e.get("EXT_sRGB"), c !== null ? c.SRGB_ALPHA_EXT : null;
      if (r === bm) return 6403;
      if (r === xm) return 36244;
      if (r === ym) return 33319;
      if (r === wm) return 33320;
      if (r === Mm) return 36249;
      if (r === Io || r === ko || r === No || r === Oo) if (l === tt) if (c = e.get("WEBGL_compressed_texture_s3tc_srgb"), c !== null) {
        if (r === Io) return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (r === ko) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (r === No) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (r === Oo) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
      else if (c = e.get("WEBGL_compressed_texture_s3tc"), c !== null) {
        if (r === Io) return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === ko) return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === No) return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Oo) return c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
      if (r === hc || r === uc || r === dc || r === pc) if (c = e.get("WEBGL_compressed_texture_pvrtc"), c !== null) {
        if (r === hc) return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === uc) return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === dc) return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === pc) return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
      if (r === Sm) return c = e.get("WEBGL_compressed_texture_etc1"), c !== null ? c.COMPRESSED_RGB_ETC1_WEBGL : null;
      if (r === fc || r === mc) if (c = e.get("WEBGL_compressed_texture_etc"), c !== null) {
        if (r === fc) return l === tt ? c.COMPRESSED_SRGB8_ETC2 : c.COMPRESSED_RGB8_ETC2;
        if (r === mc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : c.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
      if (r === gc || r === _c || r === vc || r === bc || r === xc || r === yc || r === wc || r === Mc || r === Sc || r === Ec || r === Tc || r === Cc || r === Ac || r === Pc) if (c = e.get("WEBGL_compressed_texture_astc"), c !== null) {
        if (r === gc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : c.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === _c) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : c.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === vc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : c.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === bc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : c.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === xc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : c.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === yc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : c.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === wc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : c.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Mc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : c.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Sc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : c.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Ec) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : c.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Tc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : c.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Cc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : c.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Ac) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : c.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Pc) return l === tt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : c.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
      if (r === Fo) if (c = e.get("EXT_texture_compression_bptc"), c !== null) {
        if (r === Fo) return l === tt ? c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : c.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
      if (r === Em || r === Lc || r === Rc || r === Dc) if (c = e.get("EXT_texture_compression_rgtc"), c !== null) {
        if (r === Fo) return c.COMPRESSED_RED_RGTC1_EXT;
        if (r === Lc) return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === Rc) return c.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === Dc) return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
      return r === rs ? n ? 34042 : (c = e.get("WEBGL_depth_texture"), c !== null ? c.UNSIGNED_INT_24_8_WEBGL : null) : o[r] !== void 0 ? o[r] : null;
    }
    return {
      convert: i
    };
  }
  class V0 extends Ht {
    constructor(e = []) {
      super(), this.isArrayCamera = true, this.cameras = e;
    }
  }
  class gi extends ut {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  }
  const z0 = {
    type: "move"
  };
  class ca {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return this._hand === null && (this._hand = new gi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = {
        pinching: false
      }), this._hand;
    }
    getTargetRaySpace() {
      return this._targetRay === null && (this._targetRay = new gi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new k(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new k()), this._targetRay;
    }
    getGripSpace() {
      return this._grip === null && (this._grip = new gi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new k(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new k()), this._grip;
    }
    dispatchEvent(e) {
      return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
    }
    connect(e) {
      if (e && e.hand) {
        const t = this._hand;
        if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
      }
      return this.dispatchEvent({
        type: "connected",
        data: e
      }), this;
    }
    disconnect(e) {
      return this.dispatchEvent({
        type: "disconnected",
        data: e
      }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
    }
    update(e, t, n) {
      let i = null, r = null, l = null;
      const c = this._targetRay, u = this._grip, d = this._hand;
      if (e && t.session.visibilityState !== "visible-blurred") {
        if (d && e.hand) {
          l = true;
          for (const _ of e.hand.values()) {
            const v = t.getJointPose(_, n), w = this._getHandJoint(d, _);
            v !== null && (w.matrix.fromArray(v.transform.matrix), w.matrix.decompose(w.position, w.rotation, w.scale), w.jointRadius = v.radius), w.visible = v !== null;
          }
          const f = d.joints["index-finger-tip"], m = d.joints["thumb-tip"], g = f.position.distanceTo(m.position), b = 0.02, y = 5e-3;
          d.inputState.pinching && g > b + y ? (d.inputState.pinching = false, this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          })) : !d.inputState.pinching && g <= b - y && (d.inputState.pinching = true, this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          }));
        } else u !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (u.matrix.fromArray(r.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), r.linearVelocity ? (u.hasLinearVelocity = true, u.linearVelocity.copy(r.linearVelocity)) : u.hasLinearVelocity = false, r.angularVelocity ? (u.hasAngularVelocity = true, u.angularVelocity.copy(r.angularVelocity)) : u.hasAngularVelocity = false));
        c !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (c.matrix.fromArray(i.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), i.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(i.linearVelocity)) : c.hasLinearVelocity = false, i.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(i.angularVelocity)) : c.hasAngularVelocity = false, this.dispatchEvent(z0)));
      }
      return c !== null && (c.visible = i !== null), u !== null && (u.visible = r !== null), d !== null && (d.visible = l !== null), this;
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        const n = new gi();
        n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
      }
      return e.joints[t.jointName];
    }
  }
  class G0 extends Dt {
    constructor(e, t, n, i, r, l, c, u, d, f) {
      if (f = f !== void 0 ? f : _i, f !== _i && f !== hs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      n === void 0 && f === _i && (n = mi), n === void 0 && f === hs && (n = rs), super(null, i, r, l, c, u, f, n, d), this.isDepthTexture = true, this.image = {
        width: e,
        height: t
      }, this.magFilter = c !== void 0 ? c : At, this.minFilter = u !== void 0 ? u : At, this.flipY = false, this.generateMipmaps = false;
    }
  }
  class H0 extends ei {
    constructor(e, t) {
      super();
      const n = this;
      let i = null, r = 1, l = null, c = "local-floor", u = 1, d = null, f = null, m = null, g = null, b = null, y = null;
      const _ = t.getContextAttributes();
      let v = null, w = null;
      const C = [], S = [], M = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), N = new Ht();
      N.layers.enable(1), N.viewport = new rt();
      const F = new Ht();
      F.layers.enable(2), F.viewport = new rt();
      const E = [
        N,
        F
      ], I = new V0();
      I.layers.enable(1), I.layers.enable(2);
      let V = null, ee = null;
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(q) {
        let re = C[q];
        return re === void 0 && (re = new ca(), C[q] = re), re.getTargetRaySpace();
      }, this.getControllerGrip = function(q) {
        let re = C[q];
        return re === void 0 && (re = new ca(), C[q] = re), re.getGripSpace();
      }, this.getHand = function(q) {
        let re = C[q];
        return re === void 0 && (re = new ca(), C[q] = re), re.getHandSpace();
      };
      function Q(q) {
        const re = S.indexOf(q.inputSource);
        if (re === -1) return;
        const ne = C[re];
        ne !== void 0 && ne.dispatchEvent({
          type: q.type,
          data: q.inputSource
        });
      }
      function W() {
        i.removeEventListener("select", Q), i.removeEventListener("selectstart", Q), i.removeEventListener("selectend", Q), i.removeEventListener("squeeze", Q), i.removeEventListener("squeezestart", Q), i.removeEventListener("squeezeend", Q), i.removeEventListener("end", W), i.removeEventListener("inputsourceschange", G);
        for (let q = 0; q < C.length; q++) {
          const re = S[q];
          re !== null && (S[q] = null, C[q].disconnect(re));
        }
        V = null, ee = null, e.setRenderTarget(v), b = null, g = null, m = null, i = null, w = null, Se.stop(), n.isPresenting = false, n.dispatchEvent({
          type: "sessionend"
        });
      }
      this.setFramebufferScaleFactor = function(q) {
        r = q, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(q) {
        c = q, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return d || l;
      }, this.setReferenceSpace = function(q) {
        d = q;
      }, this.getBaseLayer = function() {
        return g !== null ? g : b;
      }, this.getBinding = function() {
        return m;
      }, this.getFrame = function() {
        return y;
      }, this.getSession = function() {
        return i;
      }, this.setSession = async function(q) {
        if (i = q, i !== null) {
          if (v = e.getRenderTarget(), i.addEventListener("select", Q), i.addEventListener("selectstart", Q), i.addEventListener("selectend", Q), i.addEventListener("squeeze", Q), i.addEventListener("squeezestart", Q), i.addEventListener("squeezeend", Q), i.addEventListener("end", W), i.addEventListener("inputsourceschange", G), _.xrCompatible !== true && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === false) {
            const re = {
              antialias: i.renderState.layers === void 0 ? _.antialias : true,
              alpha: _.alpha,
              depth: _.depth,
              stencil: _.stencil,
              framebufferScaleFactor: r
            };
            b = new XRWebGLLayer(i, t, re), i.updateRenderState({
              baseLayer: b
            }), w = new wi(b.framebufferWidth, b.framebufferHeight, {
              format: on,
              type: xi,
              encoding: e.outputEncoding,
              stencilBuffer: _.stencil
            });
          } else {
            let re = null, ne = null, oe = null;
            _.depth && (oe = _.stencil ? 35056 : 33190, re = _.stencil ? hs : _i, ne = _.stencil ? rs : mi);
            const X = {
              colorFormat: 32856,
              depthFormat: oe,
              scaleFactor: r
            };
            m = new XRWebGLBinding(i, t), g = m.createProjectionLayer(X), i.updateRenderState({
              layers: [
                g
              ]
            }), w = new wi(g.textureWidth, g.textureHeight, {
              format: on,
              type: xi,
              depthTexture: new G0(g.textureWidth, g.textureHeight, ne, void 0, void 0, void 0, void 0, void 0, void 0, re),
              stencilBuffer: _.stencil,
              encoding: e.outputEncoding,
              samples: _.antialias ? 4 : 0
            });
            const De = e.properties.get(w);
            De.__ignoreDepthValues = g.ignoreDepthValues;
          }
          w.isXRRenderTarget = true, this.setFoveation(u), d = null, l = await i.requestReferenceSpace(c), Se.setContext(i), Se.start(), n.isPresenting = true, n.dispatchEvent({
            type: "sessionstart"
          });
        }
      };
      function G(q) {
        for (let re = 0; re < q.removed.length; re++) {
          const ne = q.removed[re], oe = S.indexOf(ne);
          oe >= 0 && (S[oe] = null, C[oe].disconnect(ne));
        }
        for (let re = 0; re < q.added.length; re++) {
          const ne = q.added[re];
          let oe = S.indexOf(ne);
          if (oe === -1) {
            for (let De = 0; De < C.length; De++) if (De >= S.length) {
              S.push(ne), oe = De;
              break;
            } else if (S[De] === null) {
              S[De] = ne, oe = De;
              break;
            }
            if (oe === -1) break;
          }
          const X = C[oe];
          X && X.connect(ne);
        }
      }
      const $ = new k(), ie = new k();
      function te(q, re, ne) {
        $.setFromMatrixPosition(re.matrixWorld), ie.setFromMatrixPosition(ne.matrixWorld);
        const oe = $.distanceTo(ie), X = re.projectionMatrix.elements, De = ne.projectionMatrix.elements, xe = X[14] / (X[10] - 1), ye = X[14] / (X[10] + 1), me = (X[9] + 1) / X[5], Ue = (X[9] - 1) / X[5], Ie = (X[8] - 1) / X[0], Te = (De[8] + 1) / De[0], pt = xe * Ie, dt = xe * Te, Qe = oe / (-Ie + Te), gt = Qe * -Ie;
        re.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(gt), q.translateZ(Qe), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert();
        const ct = xe + Qe, Ke = ye + Qe, Wt = pt - gt, kt = dt + (oe - gt), L = me * ye / Ke * ct, T = Ue * ye / Ke * ct;
        q.projectionMatrix.makePerspective(Wt, kt, L, T, ct, Ke);
      }
      function H(q, re) {
        re === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(re.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
      }
      this.updateCamera = function(q) {
        if (i === null) return;
        I.near = F.near = N.near = q.near, I.far = F.far = N.far = q.far, (V !== I.near || ee !== I.far) && (i.updateRenderState({
          depthNear: I.near,
          depthFar: I.far
        }), V = I.near, ee = I.far);
        const re = q.parent, ne = I.cameras;
        H(I, re);
        for (let X = 0; X < ne.length; X++) H(ne[X], re);
        I.matrixWorld.decompose(I.position, I.quaternion, I.scale), q.matrix.copy(I.matrix), q.matrix.decompose(q.position, q.quaternion, q.scale);
        const oe = q.children;
        for (let X = 0, De = oe.length; X < De; X++) oe[X].updateMatrixWorld(true);
        ne.length === 2 ? te(I, N, F) : I.projectionMatrix.copy(N.projectionMatrix);
      }, this.getCamera = function() {
        return I;
      }, this.getFoveation = function() {
        if (!(g === null && b === null)) return u;
      }, this.setFoveation = function(q) {
        u = q, g !== null && (g.fixedFoveation = q), b !== null && b.fixedFoveation !== void 0 && (b.fixedFoveation = q);
      }, this.getPlanes = function() {
        return M;
      };
      let he = null;
      function se(q, re) {
        if (f = re.getViewerPose(d || l), y = re, f !== null) {
          const ne = f.views;
          b !== null && (e.setRenderTargetFramebuffer(w, b.framebuffer), e.setRenderTarget(w));
          let oe = false;
          ne.length !== I.cameras.length && (I.cameras.length = 0, oe = true);
          for (let X = 0; X < ne.length; X++) {
            const De = ne[X];
            let xe = null;
            if (b !== null) xe = b.getViewport(De);
            else {
              const me = m.getViewSubImage(g, De);
              xe = me.viewport, X === 0 && (e.setRenderTargetTextures(w, me.colorTexture, g.ignoreDepthValues ? void 0 : me.depthStencilTexture), e.setRenderTarget(w));
            }
            let ye = E[X];
            ye === void 0 && (ye = new Ht(), ye.layers.enable(X), ye.viewport = new rt(), E[X] = ye), ye.matrix.fromArray(De.transform.matrix), ye.projectionMatrix.fromArray(De.projectionMatrix), ye.viewport.set(xe.x, xe.y, xe.width, xe.height), X === 0 && I.matrix.copy(ye.matrix), oe === true && I.cameras.push(ye);
          }
        }
        for (let ne = 0; ne < C.length; ne++) {
          const oe = S[ne], X = C[ne];
          oe !== null && X !== void 0 && X.update(oe, re, d || l);
        }
        if (he && he(q, re), re.detectedPlanes) {
          n.dispatchEvent({
            type: "planesdetected",
            data: re.detectedPlanes
          });
          let ne = null;
          for (const oe of M) re.detectedPlanes.has(oe) || (ne === null && (ne = []), ne.push(oe));
          if (ne !== null) for (const oe of ne) M.delete(oe), P.delete(oe), n.dispatchEvent({
            type: "planeremoved",
            data: oe
          });
          for (const oe of re.detectedPlanes) if (!M.has(oe)) M.add(oe), P.set(oe, re.lastChangedTime), n.dispatchEvent({
            type: "planeadded",
            data: oe
          });
          else {
            const X = P.get(oe);
            oe.lastChangedTime > X && (P.set(oe, oe.lastChangedTime), n.dispatchEvent({
              type: "planechanged",
              data: oe
            }));
          }
        }
        y = null;
      }
      const Se = new bu();
      Se.setAnimationLoop(se), this.setAnimationLoop = function(q) {
        he = q;
      }, this.dispose = function() {
      };
    }
  }
  function W0(o, e) {
    function t(_, v) {
      v.color.getRGB(_.fogColor.value, gu(o)), v.isFog ? (_.fogNear.value = v.near, _.fogFar.value = v.far) : v.isFogExp2 && (_.fogDensity.value = v.density);
    }
    function n(_, v, w, C, S) {
      v.isMeshBasicMaterial || v.isMeshLambertMaterial ? i(_, v) : v.isMeshToonMaterial ? (i(_, v), f(_, v)) : v.isMeshPhongMaterial ? (i(_, v), d(_, v)) : v.isMeshStandardMaterial ? (i(_, v), m(_, v), v.isMeshPhysicalMaterial && g(_, v, S)) : v.isMeshMatcapMaterial ? (i(_, v), b(_, v)) : v.isMeshDepthMaterial ? i(_, v) : v.isMeshDistanceMaterial ? (i(_, v), y(_, v)) : v.isMeshNormalMaterial ? i(_, v) : v.isLineBasicMaterial ? (r(_, v), v.isLineDashedMaterial && l(_, v)) : v.isPointsMaterial ? c(_, v, w, C) : v.isSpriteMaterial ? u(_, v) : v.isShadowMaterial ? (_.color.value.copy(v.color), _.opacity.value = v.opacity) : v.isShaderMaterial && (v.uniformsNeedUpdate = false);
    }
    function i(_, v) {
      _.opacity.value = v.opacity, v.color && _.diffuse.value.copy(v.color), v.emissive && _.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity), v.map && (_.map.value = v.map), v.alphaMap && (_.alphaMap.value = v.alphaMap), v.bumpMap && (_.bumpMap.value = v.bumpMap, _.bumpScale.value = v.bumpScale, v.side === Qt && (_.bumpScale.value *= -1)), v.displacementMap && (_.displacementMap.value = v.displacementMap, _.displacementScale.value = v.displacementScale, _.displacementBias.value = v.displacementBias), v.emissiveMap && (_.emissiveMap.value = v.emissiveMap), v.normalMap && (_.normalMap.value = v.normalMap, _.normalScale.value.copy(v.normalScale), v.side === Qt && _.normalScale.value.negate()), v.specularMap && (_.specularMap.value = v.specularMap), v.alphaTest > 0 && (_.alphaTest.value = v.alphaTest);
      const w = e.get(v).envMap;
      if (w && (_.envMap.value = w, _.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === false ? -1 : 1, _.reflectivity.value = v.reflectivity, _.ior.value = v.ior, _.refractionRatio.value = v.refractionRatio), v.lightMap) {
        _.lightMap.value = v.lightMap;
        const M = o.physicallyCorrectLights !== true ? Math.PI : 1;
        _.lightMapIntensity.value = v.lightMapIntensity * M;
      }
      v.aoMap && (_.aoMap.value = v.aoMap, _.aoMapIntensity.value = v.aoMapIntensity);
      let C;
      v.map ? C = v.map : v.specularMap ? C = v.specularMap : v.displacementMap ? C = v.displacementMap : v.normalMap ? C = v.normalMap : v.bumpMap ? C = v.bumpMap : v.roughnessMap ? C = v.roughnessMap : v.metalnessMap ? C = v.metalnessMap : v.alphaMap ? C = v.alphaMap : v.emissiveMap ? C = v.emissiveMap : v.clearcoatMap ? C = v.clearcoatMap : v.clearcoatNormalMap ? C = v.clearcoatNormalMap : v.clearcoatRoughnessMap ? C = v.clearcoatRoughnessMap : v.iridescenceMap ? C = v.iridescenceMap : v.iridescenceThicknessMap ? C = v.iridescenceThicknessMap : v.specularIntensityMap ? C = v.specularIntensityMap : v.specularColorMap ? C = v.specularColorMap : v.transmissionMap ? C = v.transmissionMap : v.thicknessMap ? C = v.thicknessMap : v.sheenColorMap ? C = v.sheenColorMap : v.sheenRoughnessMap && (C = v.sheenRoughnessMap), C !== void 0 && (C.isWebGLRenderTarget && (C = C.texture), C.matrixAutoUpdate === true && C.updateMatrix(), _.uvTransform.value.copy(C.matrix));
      let S;
      v.aoMap ? S = v.aoMap : v.lightMap && (S = v.lightMap), S !== void 0 && (S.isWebGLRenderTarget && (S = S.texture), S.matrixAutoUpdate === true && S.updateMatrix(), _.uv2Transform.value.copy(S.matrix));
    }
    function r(_, v) {
      _.diffuse.value.copy(v.color), _.opacity.value = v.opacity;
    }
    function l(_, v) {
      _.dashSize.value = v.dashSize, _.totalSize.value = v.dashSize + v.gapSize, _.scale.value = v.scale;
    }
    function c(_, v, w, C) {
      _.diffuse.value.copy(v.color), _.opacity.value = v.opacity, _.size.value = v.size * w, _.scale.value = C * 0.5, v.map && (_.map.value = v.map), v.alphaMap && (_.alphaMap.value = v.alphaMap), v.alphaTest > 0 && (_.alphaTest.value = v.alphaTest);
      let S;
      v.map ? S = v.map : v.alphaMap && (S = v.alphaMap), S !== void 0 && (S.matrixAutoUpdate === true && S.updateMatrix(), _.uvTransform.value.copy(S.matrix));
    }
    function u(_, v) {
      _.diffuse.value.copy(v.color), _.opacity.value = v.opacity, _.rotation.value = v.rotation, v.map && (_.map.value = v.map), v.alphaMap && (_.alphaMap.value = v.alphaMap), v.alphaTest > 0 && (_.alphaTest.value = v.alphaTest);
      let w;
      v.map ? w = v.map : v.alphaMap && (w = v.alphaMap), w !== void 0 && (w.matrixAutoUpdate === true && w.updateMatrix(), _.uvTransform.value.copy(w.matrix));
    }
    function d(_, v) {
      _.specular.value.copy(v.specular), _.shininess.value = Math.max(v.shininess, 1e-4);
    }
    function f(_, v) {
      v.gradientMap && (_.gradientMap.value = v.gradientMap);
    }
    function m(_, v) {
      _.roughness.value = v.roughness, _.metalness.value = v.metalness, v.roughnessMap && (_.roughnessMap.value = v.roughnessMap), v.metalnessMap && (_.metalnessMap.value = v.metalnessMap), e.get(v).envMap && (_.envMapIntensity.value = v.envMapIntensity);
    }
    function g(_, v, w) {
      _.ior.value = v.ior, v.sheen > 0 && (_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen), _.sheenRoughness.value = v.sheenRoughness, v.sheenColorMap && (_.sheenColorMap.value = v.sheenColorMap), v.sheenRoughnessMap && (_.sheenRoughnessMap.value = v.sheenRoughnessMap)), v.clearcoat > 0 && (_.clearcoat.value = v.clearcoat, _.clearcoatRoughness.value = v.clearcoatRoughness, v.clearcoatMap && (_.clearcoatMap.value = v.clearcoatMap), v.clearcoatRoughnessMap && (_.clearcoatRoughnessMap.value = v.clearcoatRoughnessMap), v.clearcoatNormalMap && (_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale), _.clearcoatNormalMap.value = v.clearcoatNormalMap, v.side === Qt && _.clearcoatNormalScale.value.negate())), v.iridescence > 0 && (_.iridescence.value = v.iridescence, _.iridescenceIOR.value = v.iridescenceIOR, _.iridescenceThicknessMinimum.value = v.iridescenceThicknessRange[0], _.iridescenceThicknessMaximum.value = v.iridescenceThicknessRange[1], v.iridescenceMap && (_.iridescenceMap.value = v.iridescenceMap), v.iridescenceThicknessMap && (_.iridescenceThicknessMap.value = v.iridescenceThicknessMap)), v.transmission > 0 && (_.transmission.value = v.transmission, _.transmissionSamplerMap.value = w.texture, _.transmissionSamplerSize.value.set(w.width, w.height), v.transmissionMap && (_.transmissionMap.value = v.transmissionMap), _.thickness.value = v.thickness, v.thicknessMap && (_.thicknessMap.value = v.thicknessMap), _.attenuationDistance.value = v.attenuationDistance, _.attenuationColor.value.copy(v.attenuationColor)), _.specularIntensity.value = v.specularIntensity, _.specularColor.value.copy(v.specularColor), v.specularIntensityMap && (_.specularIntensityMap.value = v.specularIntensityMap), v.specularColorMap && (_.specularColorMap.value = v.specularColorMap);
    }
    function b(_, v) {
      v.matcap && (_.matcap.value = v.matcap);
    }
    function y(_, v) {
      _.referencePosition.value.copy(v.referencePosition), _.nearDistance.value = v.nearDistance, _.farDistance.value = v.farDistance;
    }
    return {
      refreshFogUniforms: t,
      refreshMaterialUniforms: n
    };
  }
  function j0(o, e, t, n) {
    let i = {}, r = {}, l = [];
    const c = t.isWebGL2 ? o.getParameter(35375) : 0;
    function u(C, S) {
      const M = S.program;
      n.uniformBlockBinding(C, M);
    }
    function d(C, S) {
      let M = i[C.id];
      M === void 0 && (y(C), M = f(C), i[C.id] = M, C.addEventListener("dispose", v));
      const P = S.program;
      n.updateUBOMapping(C, P);
      const N = e.render.frame;
      r[C.id] !== N && (g(C), r[C.id] = N);
    }
    function f(C) {
      const S = m();
      C.__bindingPointIndex = S;
      const M = o.createBuffer(), P = C.__size, N = C.usage;
      return o.bindBuffer(35345, M), o.bufferData(35345, P, N), o.bindBuffer(35345, null), o.bindBufferBase(35345, S, M), M;
    }
    function m() {
      for (let C = 0; C < c; C++) if (l.indexOf(C) === -1) return l.push(C), C;
      return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
    }
    function g(C) {
      const S = i[C.id], M = C.uniforms, P = C.__cache;
      o.bindBuffer(35345, S);
      for (let N = 0, F = M.length; N < F; N++) {
        const E = M[N];
        if (b(E, N, P) === true) {
          const I = E.__offset, V = Array.isArray(E.value) ? E.value : [
            E.value
          ];
          let ee = 0;
          for (let Q = 0; Q < V.length; Q++) {
            const W = V[Q], G = _(W);
            typeof W == "number" ? (E.__data[0] = W, o.bufferSubData(35345, I + ee, E.__data)) : W.isMatrix3 ? (E.__data[0] = W.elements[0], E.__data[1] = W.elements[1], E.__data[2] = W.elements[2], E.__data[3] = W.elements[0], E.__data[4] = W.elements[3], E.__data[5] = W.elements[4], E.__data[6] = W.elements[5], E.__data[7] = W.elements[0], E.__data[8] = W.elements[6], E.__data[9] = W.elements[7], E.__data[10] = W.elements[8], E.__data[11] = W.elements[0]) : (W.toArray(E.__data, ee), ee += G.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          o.bufferSubData(35345, I, E.__data);
        }
      }
      o.bindBuffer(35345, null);
    }
    function b(C, S, M) {
      const P = C.value;
      if (M[S] === void 0) {
        if (typeof P == "number") M[S] = P;
        else {
          const N = Array.isArray(P) ? P : [
            P
          ], F = [];
          for (let E = 0; E < N.length; E++) F.push(N[E].clone());
          M[S] = F;
        }
        return true;
      } else if (typeof P == "number") {
        if (M[S] !== P) return M[S] = P, true;
      } else {
        const N = Array.isArray(M[S]) ? M[S] : [
          M[S]
        ], F = Array.isArray(P) ? P : [
          P
        ];
        for (let E = 0; E < N.length; E++) {
          const I = N[E];
          if (I.equals(F[E]) === false) return I.copy(F[E]), true;
        }
      }
      return false;
    }
    function y(C) {
      const S = C.uniforms;
      let M = 0;
      const P = 16;
      let N = 0;
      for (let F = 0, E = S.length; F < E; F++) {
        const I = S[F], V = {
          boundary: 0,
          storage: 0
        }, ee = Array.isArray(I.value) ? I.value : [
          I.value
        ];
        for (let Q = 0, W = ee.length; Q < W; Q++) {
          const G = ee[Q], $ = _(G);
          V.boundary += $.boundary, V.storage += $.storage;
        }
        if (I.__data = new Float32Array(V.storage / Float32Array.BYTES_PER_ELEMENT), I.__offset = M, F > 0) {
          N = M % P;
          const Q = P - N;
          N !== 0 && Q - V.boundary < 0 && (M += P - N, I.__offset = M);
        }
        M += V.storage;
      }
      return N = M % P, N > 0 && (M += P - N), C.__size = M, C.__cache = {}, this;
    }
    function _(C) {
      const S = {
        boundary: 0,
        storage: 0
      };
      return typeof C == "number" ? (S.boundary = 4, S.storage = 4) : C.isVector2 ? (S.boundary = 8, S.storage = 8) : C.isVector3 || C.isColor ? (S.boundary = 16, S.storage = 12) : C.isVector4 ? (S.boundary = 16, S.storage = 16) : C.isMatrix3 ? (S.boundary = 48, S.storage = 48) : C.isMatrix4 ? (S.boundary = 64, S.storage = 64) : C.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", C), S;
    }
    function v(C) {
      const S = C.target;
      S.removeEventListener("dispose", v);
      const M = l.indexOf(S.__bindingPointIndex);
      l.splice(M, 1), o.deleteBuffer(i[S.id]), delete i[S.id], delete r[S.id];
    }
    function w() {
      for (const C in i) o.deleteBuffer(i[C]);
      l = [], i = {}, r = {};
    }
    return {
      bind: u,
      update: d,
      dispose: w
    };
  }
  function q0() {
    const o = nr("canvas");
    return o.style.display = "block", o;
  }
  function Su(o = {}) {
    this.isWebGLRenderer = true;
    const e = o.canvas !== void 0 ? o.canvas : q0(), t = o.context !== void 0 ? o.context : null, n = o.depth !== void 0 ? o.depth : true, i = o.stencil !== void 0 ? o.stencil : true, r = o.antialias !== void 0 ? o.antialias : false, l = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : true, c = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : false, u = o.powerPreference !== void 0 ? o.powerPreference : "default", d = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : false;
    let f;
    t !== null ? f = t.getContextAttributes().alpha : f = o.alpha !== void 0 ? o.alpha : false;
    let m = null, g = null;
    const b = [], y = [];
    this.domElement = e, this.debug = {
      checkShaderErrors: true
    }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.outputEncoding = yi, this.physicallyCorrectLights = false, this.toneMapping = Nn, this.toneMappingExposure = 1;
    const _ = this;
    let v = false, w = 0, C = 0, S = null, M = -1, P = null;
    const N = new rt(), F = new rt();
    let E = null, I = e.width, V = e.height, ee = 1, Q = null, W = null;
    const G = new rt(0, 0, I, V), $ = new rt(0, 0, I, V);
    let ie = false;
    const te = new za();
    let H = false, he = false, se = null;
    const Se = new ze(), q = new ke(), re = new k(), ne = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: true
    };
    function oe() {
      return S === null ? ee : 1;
    }
    let X = t;
    function De(A, j) {
      for (let Z = 0; Z < A.length; Z++) {
        const z = A[Z], J = e.getContext(z, j);
        if (J !== null) return J;
      }
      return null;
    }
    try {
      const A = {
        alpha: true,
        depth: n,
        stencil: i,
        antialias: r,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Fa}`), e.addEventListener("webglcontextlost", we, false), e.addEventListener("webglcontextrestored", be, false), e.addEventListener("webglcontextcreationerror", Ne, false), X === null) {
        const j = [
          "webgl2",
          "webgl",
          "experimental-webgl"
        ];
        if (_.isWebGL1Renderer === true && j.shift(), X = De(j, A), X === null) throw De(j) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      X.getShaderPrecisionFormat === void 0 && (X.getShaderPrecisionFormat = function() {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (A) {
      throw console.error("THREE.WebGLRenderer: " + A.message), A;
    }
    let xe, ye, me, Ue, Ie, Te, pt, dt, Qe, gt, ct, Ke, Wt, kt, L, T, K, ce, ue, fe, Ae, D, B, ge;
    function _e() {
      xe = new ib(X), ye = new Zv(X, xe, o), xe.init(ye), D = new B0(X, xe, ye), me = new F0(X, xe, ye), Ue = new ob(), Ie = new M0(), Te = new U0(X, xe, me, Ie, ye, D, Ue), pt = new Qv(_), dt = new nb(_), Qe = new mg(X, ye), B = new Yv(X, xe, Qe, ye), gt = new sb(X, Qe, Ue, B), ct = new hb(X, gt, Qe, Ue), ue = new cb(X, ye, Te), T = new Jv(Ie), Ke = new w0(_, pt, dt, xe, ye, B, T), Wt = new W0(_, Ie), kt = new E0(), L = new R0(xe, ye), ce = new Kv(_, pt, dt, me, ct, f, l), K = new O0(_, ct, ye), ge = new j0(X, Ue, ye, me), fe = new $v(X, xe, Ue, ye), Ae = new rb(X, xe, Ue, ye), Ue.programs = Ke.programs, _.capabilities = ye, _.extensions = xe, _.properties = Ie, _.renderLists = kt, _.shadowMap = K, _.state = me, _.info = Ue;
    }
    _e();
    const pe = new H0(_, X);
    this.xr = pe, this.getContext = function() {
      return X;
    }, this.getContextAttributes = function() {
      return X.getContextAttributes();
    }, this.forceContextLoss = function() {
      const A = xe.get("WEBGL_lose_context");
      A && A.loseContext();
    }, this.forceContextRestore = function() {
      const A = xe.get("WEBGL_lose_context");
      A && A.restoreContext();
    }, this.getPixelRatio = function() {
      return ee;
    }, this.setPixelRatio = function(A) {
      A !== void 0 && (ee = A, this.setSize(I, V, false));
    }, this.getSize = function(A) {
      return A.set(I, V);
    }, this.setSize = function(A, j, Z) {
      if (pe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      I = A, V = j, e.width = Math.floor(A * ee), e.height = Math.floor(j * ee), Z !== false && (e.style.width = A + "px", e.style.height = j + "px"), this.setViewport(0, 0, A, j);
    }, this.getDrawingBufferSize = function(A) {
      return A.set(I * ee, V * ee).floor();
    }, this.setDrawingBufferSize = function(A, j, Z) {
      I = A, V = j, ee = Z, e.width = Math.floor(A * Z), e.height = Math.floor(j * Z), this.setViewport(0, 0, A, j);
    }, this.getCurrentViewport = function(A) {
      return A.copy(N);
    }, this.getViewport = function(A) {
      return A.copy(G);
    }, this.setViewport = function(A, j, Z, z) {
      A.isVector4 ? G.set(A.x, A.y, A.z, A.w) : G.set(A, j, Z, z), me.viewport(N.copy(G).multiplyScalar(ee).floor());
    }, this.getScissor = function(A) {
      return A.copy($);
    }, this.setScissor = function(A, j, Z, z) {
      A.isVector4 ? $.set(A.x, A.y, A.z, A.w) : $.set(A, j, Z, z), me.scissor(F.copy($).multiplyScalar(ee).floor());
    }, this.getScissorTest = function() {
      return ie;
    }, this.setScissorTest = function(A) {
      me.setScissorTest(ie = A);
    }, this.setOpaqueSort = function(A) {
      Q = A;
    }, this.setTransparentSort = function(A) {
      W = A;
    }, this.getClearColor = function(A) {
      return A.copy(ce.getClearColor());
    }, this.setClearColor = function() {
      ce.setClearColor.apply(ce, arguments);
    }, this.getClearAlpha = function() {
      return ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      ce.setClearAlpha.apply(ce, arguments);
    }, this.clear = function(A = true, j = true, Z = true) {
      let z = 0;
      A && (z |= 16384), j && (z |= 256), Z && (z |= 1024), X.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", we, false), e.removeEventListener("webglcontextrestored", be, false), e.removeEventListener("webglcontextcreationerror", Ne, false), kt.dispose(), L.dispose(), Ie.dispose(), pt.dispose(), dt.dispose(), ct.dispose(), B.dispose(), ge.dispose(), Ke.dispose(), pe.dispose(), pe.removeEventListener("sessionstart", ve), pe.removeEventListener("sessionend", Me), se && (se.dispose(), se = null), Ze.stop();
    };
    function we(A) {
      A.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = true;
    }
    function be() {
      console.log("THREE.WebGLRenderer: Context Restored."), v = false;
      const A = Ue.autoReset, j = K.enabled, Z = K.autoUpdate, z = K.needsUpdate, J = K.type;
      _e(), Ue.autoReset = A, K.enabled = j, K.autoUpdate = Z, K.needsUpdate = z, K.type = J;
    }
    function Ne(A) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", A.statusMessage);
    }
    function Oe(A) {
      const j = A.target;
      j.removeEventListener("dispose", Oe), nt(j);
    }
    function nt(A) {
      O(A), Ie.remove(A);
    }
    function O(A) {
      const j = Ie.get(A).programs;
      j !== void 0 && (j.forEach(function(Z) {
        Ke.releaseProgram(Z);
      }), A.isShaderMaterial && Ke.releaseShaderCache(A));
    }
    this.renderBufferDirect = function(A, j, Z, z, J, Ee) {
      j === null && (j = ne);
      const Le = J.isMesh && J.matrixWorld.determinant() < 0, Fe = ti(A, j, Z, z, J);
      me.setMaterial(z, Le);
      let Be = Z.index, Ge = 1;
      z.wireframe === true && (Be = gt.getWireframeAttribute(Z), Ge = 2);
      const We = Z.drawRange, qe = Z.attributes.position;
      let at = We.start * Ge, Ut = (We.start + We.count) * Ge;
      Ee !== null && (at = Math.max(at, Ee.start * Ge), Ut = Math.min(Ut, (Ee.start + Ee.count) * Ge)), Be !== null ? (at = Math.max(at, 0), Ut = Math.min(Ut, Be.count)) : qe != null && (at = Math.max(at, 0), Ut = Math.min(Ut, qe.count));
      const Nt = Ut - at;
      if (Nt < 0 || Nt === 1 / 0) return;
      B.setup(J, z, Fe, Z, Be);
      let fn, ht = fe;
      if (Be !== null && (fn = Qe.get(Be), ht = Ae, ht.setIndex(fn)), J.isMesh) z.wireframe === true ? (me.setLineWidth(z.wireframeLinewidth * oe()), ht.setMode(1)) : ht.setMode(4);
      else if (J.isLine) {
        let Xe = z.linewidth;
        Xe === void 0 && (Xe = 1), me.setLineWidth(Xe * oe()), J.isLineSegments ? ht.setMode(1) : J.isLineLoop ? ht.setMode(2) : ht.setMode(3);
      } else J.isPoints ? ht.setMode(0) : J.isSprite && ht.setMode(4);
      if (J.isInstancedMesh) ht.renderInstances(at, Nt, J.count);
      else if (Z.isInstancedBufferGeometry) {
        const Xe = Z._maxInstanceCount !== void 0 ? Z._maxInstanceCount : 1 / 0, Ci = Math.min(Z.instanceCount, Xe);
        ht.renderInstances(at, Nt, Ci);
      } else ht.render(at, Nt);
    }, this.compile = function(A, j) {
      function Z(z, J, Ee) {
        z.transparent === true && z.side === Dn && z.forceSinglePass === false ? (z.side = Qt, z.needsUpdate = true, ft(z, J, Ee), z.side = Fn, z.needsUpdate = true, ft(z, J, Ee), z.side = Dn) : ft(z, J, Ee);
      }
      g = L.get(A), g.init(), y.push(g), A.traverseVisible(function(z) {
        z.isLight && z.layers.test(j.layers) && (g.pushLight(z), z.castShadow && g.pushShadow(z));
      }), g.setupLights(_.physicallyCorrectLights), A.traverse(function(z) {
        const J = z.material;
        if (J) if (Array.isArray(J)) for (let Ee = 0; Ee < J.length; Ee++) {
          const Le = J[Ee];
          Z(Le, A, z);
        }
        else Z(J, A, z);
      }), y.pop(), g = null;
    };
    let Y = null;
    function ae(A) {
      Y && Y(A);
    }
    function ve() {
      Ze.stop();
    }
    function Me() {
      Ze.start();
    }
    const Ze = new bu();
    Ze.setAnimationLoop(ae), typeof self < "u" && Ze.setContext(self), this.setAnimationLoop = function(A) {
      Y = A, pe.setAnimationLoop(A), A === null ? Ze.stop() : Ze.start();
    }, pe.addEventListener("sessionstart", ve), pe.addEventListener("sessionend", Me), this.render = function(A, j) {
      if (j !== void 0 && j.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (v === true) return;
      A.matrixWorldAutoUpdate === true && A.updateMatrixWorld(), j.parent === null && j.matrixWorldAutoUpdate === true && j.updateMatrixWorld(), pe.enabled === true && pe.isPresenting === true && (pe.cameraAutoUpdate === true && pe.updateCamera(j), j = pe.getCamera()), A.isScene === true && A.onBeforeRender(_, A, j, S), g = L.get(A, y.length), g.init(), y.push(g), Se.multiplyMatrices(j.projectionMatrix, j.matrixWorldInverse), te.setFromProjectionMatrix(Se), he = this.localClippingEnabled, H = T.init(this.clippingPlanes, he), m = kt.get(A, b.length), m.init(), b.push(m), _t(A, j, 0, _.sortObjects), m.finish(), _.sortObjects === true && m.sort(Q, W), H === true && T.beginShadows();
      const Z = g.state.shadowsArray;
      if (K.render(Z, A, j), H === true && T.endShadows(), this.info.autoReset === true && this.info.reset(), ce.render(m, A), g.setupLights(_.physicallyCorrectLights), j.isArrayCamera) {
        const z = j.cameras;
        for (let J = 0, Ee = z.length; J < Ee; J++) {
          const Le = z[J];
          vt(m, A, Le, Le.viewport);
        }
      } else vt(m, A, j);
      S !== null && (Te.updateMultisampleRenderTarget(S), Te.updateRenderTargetMipmap(S)), A.isScene === true && A.onAfterRender(_, A, j), B.resetDefaultState(), M = -1, P = null, y.pop(), y.length > 0 ? g = y[y.length - 1] : g = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function _t(A, j, Z, z) {
      if (A.visible === false) return;
      if (A.layers.test(j.layers)) {
        if (A.isGroup) Z = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === true && A.update(j);
        else if (A.isLight) g.pushLight(A), A.castShadow && g.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || te.intersectsSprite(A)) {
            z && re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);
            const Le = ct.update(A), Fe = A.material;
            Fe.visible && m.push(A, Le, Fe, Z, re.z, null);
          }
        } else if ((A.isMesh || A.isLine || A.isPoints) && (A.isSkinnedMesh && A.skeleton.frame !== Ue.render.frame && (A.skeleton.update(), A.skeleton.frame = Ue.render.frame), !A.frustumCulled || te.intersectsObject(A))) {
          z && re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);
          const Le = ct.update(A), Fe = A.material;
          if (Array.isArray(Fe)) {
            const Be = Le.groups;
            for (let Ge = 0, We = Be.length; Ge < We; Ge++) {
              const qe = Be[Ge], at = Fe[qe.materialIndex];
              at && at.visible && m.push(A, Le, at, Z, re.z, qe);
            }
          } else Fe.visible && m.push(A, Le, Fe, Z, re.z, null);
        }
      }
      const Ee = A.children;
      for (let Le = 0, Fe = Ee.length; Le < Fe; Le++) _t(Ee[Le], j, Z, z);
    }
    function vt(A, j, Z, z) {
      const J = A.opaque, Ee = A.transmissive, Le = A.transparent;
      g.setupLightsView(Z), H === true && T.setGlobalState(_.clippingPlanes, Z), Ee.length > 0 && an(J, j, Z), z && me.viewport(N.copy(z)), J.length > 0 && Ye(J, j, Z), Ee.length > 0 && Ye(Ee, j, Z), Le.length > 0 && Ye(Le, j, Z), me.buffers.depth.setTest(true), me.buffers.depth.setMask(true), me.buffers.color.setMask(true), me.setPolygonOffset(false);
    }
    function an(A, j, Z) {
      const z = ye.isWebGL2;
      se === null && (se = new wi(1, 1, {
        generateMipmaps: true,
        type: xe.has("EXT_color_buffer_half_float") ? Js : xi,
        minFilter: bi,
        samples: z && r === true ? 4 : 0
      })), _.getDrawingBufferSize(q), z ? se.setSize(q.x, q.y) : se.setSize($r(q.x), $r(q.y));
      const J = _.getRenderTarget();
      _.setRenderTarget(se), _.clear();
      const Ee = _.toneMapping;
      _.toneMapping = Nn, Ye(A, j, Z), _.toneMapping = Ee, Te.updateMultisampleRenderTarget(se), Te.updateRenderTargetMipmap(se), _.setRenderTarget(J);
    }
    function Ye(A, j, Z) {
      const z = j.isScene === true ? j.overrideMaterial : null;
      for (let J = 0, Ee = A.length; J < Ee; J++) {
        const Le = A[J], Fe = Le.object, Be = Le.geometry, Ge = z === null ? Le.material : z, We = Le.group;
        Fe.layers.test(Z.layers) && Xt(Fe, j, Z, Be, Ge, We);
      }
    }
    function Xt(A, j, Z, z, J, Ee) {
      A.onBeforeRender(_, j, Z, z, J, Ee), A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse, A.matrixWorld), A.normalMatrix.getNormalMatrix(A.modelViewMatrix), J.onBeforeRender(_, j, Z, z, A, Ee), J.transparent === true && J.side === Dn && J.forceSinglePass === false ? (J.side = Qt, J.needsUpdate = true, _.renderBufferDirect(Z, j, z, J, A, Ee), J.side = Fn, J.needsUpdate = true, _.renderBufferDirect(Z, j, z, J, A, Ee), J.side = Dn) : _.renderBufferDirect(Z, j, z, J, A, Ee), A.onAfterRender(_, j, Z, z, J, Ee);
    }
    function ft(A, j, Z) {
      j.isScene !== true && (j = ne);
      const z = Ie.get(A), J = g.state.lights, Ee = g.state.shadowsArray, Le = J.state.version, Fe = Ke.getParameters(A, J.state, Ee, j, Z), Be = Ke.getProgramCacheKey(Fe);
      let Ge = z.programs;
      z.environment = A.isMeshStandardMaterial ? j.environment : null, z.fog = j.fog, z.envMap = (A.isMeshStandardMaterial ? dt : pt).get(A.envMap || z.environment), Ge === void 0 && (A.addEventListener("dispose", Oe), Ge = /* @__PURE__ */ new Map(), z.programs = Ge);
      let We = Ge.get(Be);
      if (We !== void 0) {
        if (z.currentProgram === We && z.lightsStateVersion === Le) return lr(A, Fe), We;
      } else Fe.uniforms = Ke.getUniforms(A), A.onBuild(Z, Fe, _), A.onBeforeCompile(Fe, _), We = Ke.acquireProgram(Fe, Be), Ge.set(Be, We), z.uniforms = Fe.uniforms;
      const qe = z.uniforms;
      (!A.isShaderMaterial && !A.isRawShaderMaterial || A.clipping === true) && (qe.clippingPlanes = T.uniform), lr(A, Fe), z.needsLights = Ti(A), z.lightsStateVersion = Le, z.needsLights && (qe.ambientLightColor.value = J.state.ambient, qe.lightProbe.value = J.state.probe, qe.directionalLights.value = J.state.directional, qe.directionalLightShadows.value = J.state.directionalShadow, qe.spotLights.value = J.state.spot, qe.spotLightShadows.value = J.state.spotShadow, qe.rectAreaLights.value = J.state.rectArea, qe.ltc_1.value = J.state.rectAreaLTC1, qe.ltc_2.value = J.state.rectAreaLTC2, qe.pointLights.value = J.state.point, qe.pointLightShadows.value = J.state.pointShadow, qe.hemisphereLights.value = J.state.hemi, qe.directionalShadowMap.value = J.state.directionalShadowMap, qe.directionalShadowMatrix.value = J.state.directionalShadowMatrix, qe.spotShadowMap.value = J.state.spotShadowMap, qe.spotLightMatrix.value = J.state.spotLightMatrix, qe.spotLightMap.value = J.state.spotLightMap, qe.pointShadowMap.value = J.state.pointShadowMap, qe.pointShadowMatrix.value = J.state.pointShadowMatrix);
      const at = We.getUniforms(), Ut = qr.seqWithValue(at.seq, qe);
      return z.currentProgram = We, z.uniformsList = Ut, We;
    }
    function lr(A, j) {
      const Z = Ie.get(A);
      Z.outputEncoding = j.outputEncoding, Z.instancing = j.instancing, Z.skinning = j.skinning, Z.morphTargets = j.morphTargets, Z.morphNormals = j.morphNormals, Z.morphColors = j.morphColors, Z.morphTargetsCount = j.morphTargetsCount, Z.numClippingPlanes = j.numClippingPlanes, Z.numIntersection = j.numClipIntersection, Z.vertexAlphas = j.vertexAlphas, Z.vertexTangents = j.vertexTangents, Z.toneMapping = j.toneMapping;
    }
    function ti(A, j, Z, z, J) {
      j.isScene !== true && (j = ne), Te.resetTextureUnits();
      const Ee = j.fog, Le = z.isMeshStandardMaterial ? j.environment : null, Fe = S === null ? _.outputEncoding : S.isXRRenderTarget === true ? S.texture.encoding : yi, Be = (z.isMeshStandardMaterial ? dt : pt).get(z.envMap || Le), Ge = z.vertexColors === true && !!Z.attributes.color && Z.attributes.color.itemSize === 4, We = !!z.normalMap && !!Z.attributes.tangent, qe = !!Z.morphAttributes.position, at = !!Z.morphAttributes.normal, Ut = !!Z.morphAttributes.color, Nt = z.toneMapped ? _.toneMapping : Nn, fn = Z.morphAttributes.position || Z.morphAttributes.normal || Z.morphAttributes.color, ht = fn !== void 0 ? fn.length : 0, Xe = Ie.get(z), Ci = g.state.lights;
      if (H === true && (he === true || A !== P)) {
        const Bt = A === P && z.id === M;
        T.setState(z, A, Bt);
      }
      let bt = false;
      z.version === Xe.__version ? (Xe.needsLights && Xe.lightsStateVersion !== Ci.state.version || Xe.outputEncoding !== Fe || J.isInstancedMesh && Xe.instancing === false || !J.isInstancedMesh && Xe.instancing === true || J.isSkinnedMesh && Xe.skinning === false || !J.isSkinnedMesh && Xe.skinning === true || Xe.envMap !== Be || z.fog === true && Xe.fog !== Ee || Xe.numClippingPlanes !== void 0 && (Xe.numClippingPlanes !== T.numPlanes || Xe.numIntersection !== T.numIntersection) || Xe.vertexAlphas !== Ge || Xe.vertexTangents !== We || Xe.morphTargets !== qe || Xe.morphNormals !== at || Xe.morphColors !== Ut || Xe.toneMapping !== Nt || ye.isWebGL2 === true && Xe.morphTargetsCount !== ht) && (bt = true) : (bt = true, Xe.__version = z.version);
      let Kt = Xe.currentProgram;
      bt === true && (Kt = ft(z, j, J));
      let hr = false, ni = false, Ai = false;
      const Tt = Kt.getUniforms(), mn = Xe.uniforms;
      if (me.useProgram(Kt.program) && (hr = true, ni = true, Ai = true), z.id !== M && (M = z.id, ni = true), hr || P !== A) {
        if (Tt.setValue(X, "projectionMatrix", A.projectionMatrix), ye.logarithmicDepthBuffer && Tt.setValue(X, "logDepthBufFC", 2 / (Math.log(A.far + 1) / Math.LN2)), P !== A && (P = A, ni = true, Ai = true), z.isShaderMaterial || z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshStandardMaterial || z.envMap) {
          const Bt = Tt.map.cameraPosition;
          Bt !== void 0 && Bt.setValue(X, re.setFromMatrixPosition(A.matrixWorld));
        }
        (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && Tt.setValue(X, "isOrthographic", A.isOrthographicCamera === true), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial || z.isShadowMaterial || J.isSkinnedMesh) && Tt.setValue(X, "viewMatrix", A.matrixWorldInverse);
      }
      if (J.isSkinnedMesh) {
        Tt.setOptional(X, J, "bindMatrix"), Tt.setOptional(X, J, "bindMatrixInverse");
        const Bt = J.skeleton;
        Bt && (ye.floatVertexTextures ? (Bt.boneTexture === null && Bt.computeBoneTexture(), Tt.setValue(X, "boneTexture", Bt.boneTexture, Te), Tt.setValue(X, "boneTextureSize", Bt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Pi = Z.morphAttributes;
      if ((Pi.position !== void 0 || Pi.normal !== void 0 || Pi.color !== void 0 && ye.isWebGL2 === true) && ue.update(J, Z, z, Kt), (ni || Xe.receiveShadow !== J.receiveShadow) && (Xe.receiveShadow = J.receiveShadow, Tt.setValue(X, "receiveShadow", J.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (mn.envMap.value = Be, mn.flipEnvMap.value = Be.isCubeTexture && Be.isRenderTargetTexture === false ? -1 : 1), ni && (Tt.setValue(X, "toneMappingExposure", _.toneMappingExposure), Xe.needsLights && cr(mn, Ai), Ee && z.fog === true && Wt.refreshFogUniforms(mn, Ee), Wt.refreshMaterialUniforms(mn, z, ee, V, se), qr.upload(X, Xe.uniformsList, mn, Te)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (qr.upload(X, Xe.uniformsList, mn, Te), z.uniformsNeedUpdate = false), z.isSpriteMaterial && Tt.setValue(X, "center", J.center), Tt.setValue(X, "modelViewMatrix", J.modelViewMatrix), Tt.setValue(X, "normalMatrix", J.normalMatrix), Tt.setValue(X, "modelMatrix", J.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Bt = z.uniformsGroups;
        for (let xn = 0, oo = Bt.length; xn < oo; xn++) if (ye.isWebGL2) {
          const ys = Bt[xn];
          ge.update(ys, Kt), ge.bind(ys, Kt);
        } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Kt;
    }
    function cr(A, j) {
      A.ambientLightColor.needsUpdate = j, A.lightProbe.needsUpdate = j, A.directionalLights.needsUpdate = j, A.directionalLightShadows.needsUpdate = j, A.pointLights.needsUpdate = j, A.pointLightShadows.needsUpdate = j, A.spotLights.needsUpdate = j, A.spotLightShadows.needsUpdate = j, A.rectAreaLights.needsUpdate = j, A.hemisphereLights.needsUpdate = j;
    }
    function Ti(A) {
      return A.isMeshLambertMaterial || A.isMeshToonMaterial || A.isMeshPhongMaterial || A.isMeshStandardMaterial || A.isShadowMaterial || A.isShaderMaterial && A.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return S;
    }, this.setRenderTargetTextures = function(A, j, Z) {
      Ie.get(A.texture).__webglTexture = j, Ie.get(A.depthTexture).__webglTexture = Z;
      const z = Ie.get(A);
      z.__hasExternalTextures = true, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = Z === void 0, z.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = false));
    }, this.setRenderTargetFramebuffer = function(A, j) {
      const Z = Ie.get(A);
      Z.__webglFramebuffer = j, Z.__useDefaultFramebuffer = j === void 0;
    }, this.setRenderTarget = function(A, j = 0, Z = 0) {
      S = A, w = j, C = Z;
      let z = true, J = null, Ee = false, Le = false;
      if (A) {
        const Be = Ie.get(A);
        Be.__useDefaultFramebuffer !== void 0 ? (me.bindFramebuffer(36160, null), z = false) : Be.__webglFramebuffer === void 0 ? Te.setupRenderTarget(A) : Be.__hasExternalTextures && Te.rebindTextures(A, Ie.get(A.texture).__webglTexture, Ie.get(A.depthTexture).__webglTexture);
        const Ge = A.texture;
        (Ge.isData3DTexture || Ge.isDataArrayTexture || Ge.isCompressedArrayTexture) && (Le = true);
        const We = Ie.get(A).__webglFramebuffer;
        A.isWebGLCubeRenderTarget ? (J = We[j], Ee = true) : ye.isWebGL2 && A.samples > 0 && Te.useMultisampledRTT(A) === false ? J = Ie.get(A).__webglMultisampledFramebuffer : J = We, N.copy(A.viewport), F.copy(A.scissor), E = A.scissorTest;
      } else N.copy(G).multiplyScalar(ee).floor(), F.copy($).multiplyScalar(ee).floor(), E = ie;
      if (me.bindFramebuffer(36160, J) && ye.drawBuffers && z && me.drawBuffers(A, J), me.viewport(N), me.scissor(F), me.setScissorTest(E), Ee) {
        const Be = Ie.get(A.texture);
        X.framebufferTexture2D(36160, 36064, 34069 + j, Be.__webglTexture, Z);
      } else if (Le) {
        const Be = Ie.get(A.texture), Ge = j || 0;
        X.framebufferTextureLayer(36160, 36064, Be.__webglTexture, Z || 0, Ge);
      }
      M = -1;
    }, this.readRenderTargetPixels = function(A, j, Z, z, J, Ee, Le) {
      if (!(A && A.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Fe = Ie.get(A).__webglFramebuffer;
      if (A.isWebGLCubeRenderTarget && Le !== void 0 && (Fe = Fe[Le]), Fe) {
        me.bindFramebuffer(36160, Fe);
        try {
          const Be = A.texture, Ge = Be.format, We = Be.type;
          if (Ge !== on && D.convert(Ge) !== X.getParameter(35739)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const qe = We === Js && (xe.has("EXT_color_buffer_half_float") || ye.isWebGL2 && xe.has("EXT_color_buffer_float"));
          if (We !== xi && D.convert(We) !== X.getParameter(35738) && !(We === Jn && (ye.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && !qe) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          j >= 0 && j <= A.width - z && Z >= 0 && Z <= A.height - J && X.readPixels(j, Z, z, J, D.convert(Ge), D.convert(We), Ee);
        } finally {
          const Be = S !== null ? Ie.get(S).__webglFramebuffer : null;
          me.bindFramebuffer(36160, Be);
        }
      }
    }, this.copyFramebufferToTexture = function(A, j, Z = 0) {
      const z = Math.pow(2, -Z), J = Math.floor(j.image.width * z), Ee = Math.floor(j.image.height * z);
      Te.setTexture2D(j, 0), X.copyTexSubImage2D(3553, Z, 0, 0, A.x, A.y, J, Ee), me.unbindTexture();
    }, this.copyTextureToTexture = function(A, j, Z, z = 0) {
      const J = j.image.width, Ee = j.image.height, Le = D.convert(Z.format), Fe = D.convert(Z.type);
      Te.setTexture2D(Z, 0), X.pixelStorei(37440, Z.flipY), X.pixelStorei(37441, Z.premultiplyAlpha), X.pixelStorei(3317, Z.unpackAlignment), j.isDataTexture ? X.texSubImage2D(3553, z, A.x, A.y, J, Ee, Le, Fe, j.image.data) : j.isCompressedTexture ? X.compressedTexSubImage2D(3553, z, A.x, A.y, j.mipmaps[0].width, j.mipmaps[0].height, Le, j.mipmaps[0].data) : X.texSubImage2D(3553, z, A.x, A.y, Le, Fe, j.image), z === 0 && Z.generateMipmaps && X.generateMipmap(3553), me.unbindTexture();
    }, this.copyTextureToTexture3D = function(A, j, Z, z, J = 0) {
      if (_.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Ee = A.max.x - A.min.x + 1, Le = A.max.y - A.min.y + 1, Fe = A.max.z - A.min.z + 1, Be = D.convert(z.format), Ge = D.convert(z.type);
      let We;
      if (z.isData3DTexture) Te.setTexture3D(z, 0), We = 32879;
      else if (z.isDataArrayTexture) Te.setTexture2DArray(z, 0), We = 35866;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      X.pixelStorei(37440, z.flipY), X.pixelStorei(37441, z.premultiplyAlpha), X.pixelStorei(3317, z.unpackAlignment);
      const qe = X.getParameter(3314), at = X.getParameter(32878), Ut = X.getParameter(3316), Nt = X.getParameter(3315), fn = X.getParameter(32877), ht = Z.isCompressedTexture ? Z.mipmaps[0] : Z.image;
      X.pixelStorei(3314, ht.width), X.pixelStorei(32878, ht.height), X.pixelStorei(3316, A.min.x), X.pixelStorei(3315, A.min.y), X.pixelStorei(32877, A.min.z), Z.isDataTexture || Z.isData3DTexture ? X.texSubImage3D(We, J, j.x, j.y, j.z, Ee, Le, Fe, Be, Ge, ht.data) : Z.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), X.compressedTexSubImage3D(We, J, j.x, j.y, j.z, Ee, Le, Fe, Be, ht.data)) : X.texSubImage3D(We, J, j.x, j.y, j.z, Ee, Le, Fe, Be, Ge, ht), X.pixelStorei(3314, qe), X.pixelStorei(32878, at), X.pixelStorei(3316, Ut), X.pixelStorei(3315, Nt), X.pixelStorei(32877, fn), J === 0 && z.generateMipmaps && X.generateMipmap(We), me.unbindTexture();
    }, this.initTexture = function(A) {
      A.isCubeTexture ? Te.setTextureCube(A, 0) : A.isData3DTexture ? Te.setTexture3D(A, 0) : A.isDataArrayTexture || A.isCompressedArrayTexture ? Te.setTexture2DArray(A, 0) : Te.setTexture2D(A, 0), me.unbindTexture();
    }, this.resetState = function() {
      w = 0, C = 0, S = null, me.reset(), B.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }
  class X0 extends Su {
  }
  X0.prototype.isWebGL1Renderer = true;
  class K0 extends ut {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }));
    }
    copy(e, t) {
      return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
    }
    get autoUpdate() {
      return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
    }
    set autoUpdate(e) {
      console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
    }
  }
  class Y0 {
    constructor(e, t) {
      this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ta, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0, this.uuid = un();
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === true && this.version++;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    copy(e) {
      return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
    }
    copyAt(e, t, n) {
      e *= this.stride, n *= t.stride;
      for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    clone(e) {
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    toJSON(e) {
      return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  }
  const zt = new k();
  class ja {
    constructor(e, t, n, i = false) {
      this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.applyMatrix4(e), this.setXYZ(t, zt.x, zt.y, zt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.applyNormalMatrix(e), this.setXYZ(t, zt.x, zt.y, zt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.transformDirection(e), this.setXYZ(t, zt.x, zt.y, zt.z);
      return this;
    }
    setX(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
    }
    setY(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
    }
    setZ(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
    }
    setW(e, t) {
      return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return this.normalized && (t = In(t, this.array)), t;
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return this.normalized && (t = In(t, this.array)), t;
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return this.normalized && (t = In(t, this.array)), t;
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return this.normalized && (t = In(t, this.array)), t;
    }
    setXY(e, t, n) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, r) {
      return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), i = st(i, this.array), r = st(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
    }
    clone(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
        }
        return new It(new this.array.constructor(t), this.itemSize, this.normalized);
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ja(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e) {
      if (e === void 0) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: t,
          normalized: this.normalized
        };
      } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: true,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }
  const ph = new k(), fh = new rt(), mh = new rt(), $0 = new k(), gh = new ze();
  class Z0 extends Jt {
    constructor(e, t) {
      super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ze(), this.bindMatrixInverse = new ze();
    }
    copy(e, t) {
      return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
    }
    bind(e, t) {
      this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const e = new rt(), t = this.geometry.attributes.skinWeight;
      for (let n = 0, i = t.count; n < i; n++) {
        e.fromBufferAttribute(t, n);
        const r = 1 / e.manhattanLength();
        r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    boneTransform(e, t) {
      const n = this.skeleton, i = this.geometry;
      fh.fromBufferAttribute(i.attributes.skinIndex, e), mh.fromBufferAttribute(i.attributes.skinWeight, e), ph.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
      for (let r = 0; r < 4; r++) {
        const l = mh.getComponent(r);
        if (l !== 0) {
          const c = fh.getComponent(r);
          gh.multiplyMatrices(n.bones[c].matrixWorld, n.boneInverses[c]), t.addScaledVector($0.copy(ph).applyMatrix4(gh), l);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  }
  class Eu extends ut {
    constructor() {
      super(), this.isBone = true, this.type = "Bone";
    }
  }
  class J0 extends Dt {
    constructor(e = null, t = 1, n = 1, i, r, l, c, u, d = At, f = At, m, g) {
      super(null, l, c, u, d, f, i, r, m, g), this.isDataTexture = true, this.image = {
        data: e,
        width: t,
        height: n
      }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  }
  const _h = new ze(), Q0 = new ze();
  class qa {
    constructor(e = [], t = []) {
      this.uuid = un(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
    }
    init() {
      const e = this.bones, t = this.boneInverses;
      if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
      else if (e.length !== t.length) {
        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
        for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new ze());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = new ze();
        this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && n.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
      }
    }
    update() {
      const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
      for (let r = 0, l = e.length; r < l; r++) {
        const c = e[r] ? e[r].matrixWorld : Q0;
        _h.multiplyMatrices(c, t[r]), _h.toArray(n, r * 16);
      }
      i !== null && (i.needsUpdate = true);
    }
    clone() {
      return new qa(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      e = au(e), e = Math.max(e, 4);
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new J0(t, e, e, on, Jn);
      return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        const i = this.bones[t];
        if (i.name === e) return i;
      }
    }
    dispose() {
      this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, i = e.bones.length; n < i; n++) {
        const r = e.bones[n];
        let l = t[r];
        l === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), l = new Eu()), this.bones.push(l), this.boneInverses.push(new ze().fromArray(e.boneInverses[n]));
      }
      return this.init(), this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "Skeleton",
          generator: "Skeleton.toJSON"
        },
        bones: [],
        boneInverses: []
      };
      e.uuid = this.uuid;
      const t = this.bones, n = this.boneInverses;
      for (let i = 0, r = t.length; i < r; i++) {
        const l = t[i];
        e.bones.push(l.uuid);
        const c = n[i];
        e.boneInverses.push(c.toArray());
      }
      return e;
    }
  }
  class vh extends It {
    constructor(e, t, n, i = 1) {
      super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
    }
    copy(e) {
      return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
    }
    toJSON() {
      const e = super.toJSON();
      return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
    }
  }
  const bh = new ze(), xh = new ze(), Br = [], ex = new ze(), Gs = new Jt();
  class tx extends Jt {
    constructor(e, t, n) {
      super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new vh(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = false;
      for (let i = 0; i < n; i++) this.setMatrixAt(i, ex);
    }
    copy(e, t) {
      return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, e * 16);
    }
    raycast(e, t) {
      const n = this.matrixWorld, i = this.count;
      if (Gs.geometry = this.geometry, Gs.material = this.material, Gs.material !== void 0) for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, bh), xh.multiplyMatrices(n, bh), Gs.matrixWorld = xh, Gs.raycast(e, Br);
        for (let l = 0, c = Br.length; l < c; l++) {
          const u = Br[l];
          u.instanceId = r, u.object = this, t.push(u);
        }
        Br.length = 0;
      }
    }
    setColorAt(e, t) {
      this.instanceColor === null && (this.instanceColor = new vh(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, e * 16);
    }
    updateMorphTargets() {
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  }
  class Tu extends vn {
    constructor(e) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new He(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
    }
  }
  const yh = new k(), wh = new k(), Mh = new ze(), ha = new Va(), Vr = new ms();
  class Xa extends ut {
    constructor(e = new dn(), t = new Tu()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [
          0
        ];
        for (let i = 1, r = t.count; i < r; i++) yh.fromBufferAttribute(t, i - 1), wh.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += yh.distanceTo(wh);
        e.setAttribute("lineDistance", new On(n, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, l = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), Vr.copy(n.boundingSphere), Vr.applyMatrix4(i), Vr.radius += r, e.ray.intersectsSphere(Vr) === false) return;
      Mh.copy(i).invert(), ha.copy(e.ray).applyMatrix4(Mh);
      const c = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), u = c * c, d = new k(), f = new k(), m = new k(), g = new k(), b = this.isLineSegments ? 2 : 1, y = n.index, v = n.attributes.position;
      if (y !== null) {
        const w = Math.max(0, l.start), C = Math.min(y.count, l.start + l.count);
        for (let S = w, M = C - 1; S < M; S += b) {
          const P = y.getX(S), N = y.getX(S + 1);
          if (d.fromBufferAttribute(v, P), f.fromBufferAttribute(v, N), ha.distanceSqToSegment(d, f, g, m) > u) continue;
          g.applyMatrix4(this.matrixWorld);
          const E = e.ray.origin.distanceTo(g);
          E < e.near || E > e.far || t.push({
            distance: E,
            point: m.clone().applyMatrix4(this.matrixWorld),
            index: S,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else {
        const w = Math.max(0, l.start), C = Math.min(v.count, l.start + l.count);
        for (let S = w, M = C - 1; S < M; S += b) {
          if (d.fromBufferAttribute(v, S), f.fromBufferAttribute(v, S + 1), ha.distanceSqToSegment(d, f, g, m) > u) continue;
          g.applyMatrix4(this.matrixWorld);
          const N = e.ray.origin.distanceTo(g);
          N < e.near || N > e.far || t.push({
            distance: N,
            point: m.clone().applyMatrix4(this.matrixWorld),
            index: S,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, l = i.length; r < l; r++) {
            const c = i[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = r;
          }
        }
      }
    }
  }
  const Sh = new k(), Eh = new k();
  class nx extends Xa {
    constructor(e, t) {
      super(e, t), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position, n = [];
        for (let i = 0, r = t.count; i < r; i += 2) Sh.fromBufferAttribute(t, i), Eh.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Sh.distanceTo(Eh);
        e.setAttribute("lineDistance", new On(n, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  }
  class ix extends Xa {
    constructor(e, t) {
      super(e, t), this.isLineLoop = true, this.type = "LineLoop";
    }
  }
  class Cu extends vn {
    constructor(e) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new He(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
    }
  }
  const Th = new ze(), La = new Va(), zr = new ms(), Gr = new k();
  class sx extends ut {
    constructor(e = new dn(), t = new Cu()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, l = n.drawRange;
      if (n.boundingSphere === null && n.computeBoundingSphere(), zr.copy(n.boundingSphere), zr.applyMatrix4(i), zr.radius += r, e.ray.intersectsSphere(zr) === false) return;
      Th.copy(i).invert(), La.copy(e.ray).applyMatrix4(Th);
      const c = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), u = c * c, d = n.index, m = n.attributes.position;
      if (d !== null) {
        const g = Math.max(0, l.start), b = Math.min(d.count, l.start + l.count);
        for (let y = g, _ = b; y < _; y++) {
          const v = d.getX(y);
          Gr.fromBufferAttribute(m, v), Ch(Gr, v, u, i, e, t, this);
        }
      } else {
        const g = Math.max(0, l.start), b = Math.min(m.count, l.start + l.count);
        for (let y = g, _ = b; y < _; y++) Gr.fromBufferAttribute(m, y), Ch(Gr, y, u, i, e, t, this);
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r = 0, l = i.length; r < l; r++) {
            const c = i[r].name || String(r);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[c] = r;
          }
        }
      }
    }
  }
  function Ch(o, e, t, n, i, r, l) {
    const c = La.distanceSqToPoint(o);
    if (c < t) {
      const u = new k();
      La.closestPointToPoint(o, u), u.applyMatrix4(n);
      const d = i.ray.origin.distanceTo(u);
      if (d < i.near || d > i.far) return;
      r.push({
        distance: d,
        distanceToRay: Math.sqrt(c),
        point: u,
        index: e,
        face: null,
        object: l
      });
    }
  }
  class no extends vn {
    constructor(e) {
      super(), this.isMeshStandardMaterial = true, this.defines = {
        STANDARD: ""
      }, this.type = "MeshStandardMaterial", this.color = new He(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new He(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ou, this.normalScale = new ke(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: ""
      }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
    }
  }
  class Ei extends no {
    constructor(e) {
      super(), this.isMeshPhysicalMaterial = true, this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ke(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
        get: function() {
          return Ft(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
        },
        set: function(t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        }
      }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
        100,
        400
      ], this.iridescenceThicknessMap = null, this.sheenColor = new He(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new He(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new He(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(e) {
      this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [
        ...e.iridescenceThicknessRange
      ], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
    }
  }
  function Yn(o, e, t) {
    return Au(o) ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length)) : o.slice(e, t);
  }
  function Hr(o, e, t) {
    return !o || !t && o.constructor === e ? o : typeof e.BYTES_PER_ELEMENT == "number" ? new e(o) : Array.prototype.slice.call(o);
  }
  function Au(o) {
    return ArrayBuffer.isView(o) && !(o instanceof DataView);
  }
  function rx(o) {
    function e(i, r) {
      return o[i] - o[r];
    }
    const t = o.length, n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  }
  function Ah(o, e, t) {
    const n = o.length, i = new o.constructor(n);
    for (let r = 0, l = 0; l !== n; ++r) {
      const c = t[r] * e;
      for (let u = 0; u !== e; ++u) i[l++] = o[c + u];
    }
    return i;
  }
  function Pu(o, e, t, n) {
    let i = 1, r = o[0];
    for (; r !== void 0 && r[n] === void 0; ) r = o[i++];
    if (r === void 0) return;
    let l = r[n];
    if (l !== void 0) if (Array.isArray(l)) do
      l = r[n], l !== void 0 && (e.push(r.time), t.push.apply(t, l)), r = o[i++];
    while (r !== void 0);
    else if (l.toArray !== void 0) do
      l = r[n], l !== void 0 && (e.push(r.time), l.toArray(t, t.length)), r = o[i++];
    while (r !== void 0);
    else do
      l = r[n], l !== void 0 && (e.push(r.time), t.push(l)), r = o[i++];
    while (r !== void 0);
  }
  class ar {
    constructor(e, t, n, i) {
      this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e) {
      const t = this.parameterPositions;
      let n = this._cachedIndex, i = t[n], r = t[n - 1];
      e: {
        t: {
          let l;
          n: {
            i: if (!(e < i)) {
              for (let c = n + 2; ; ) {
                if (i === void 0) {
                  if (e < r) break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === c) break;
                if (r = i, i = t[++n], e < i) break t;
              }
              l = t.length;
              break n;
            }
            if (!(e >= r)) {
              const c = t[1];
              e < c && (n = 2, r = c);
              for (let u = n - 2; ; ) {
                if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n === u) break;
                if (i = r, r = t[--n - 1], e >= r) break t;
              }
              l = n, n = 0;
              break n;
            }
            break e;
          }
          for (; n < l; ) {
            const c = n + l >>> 1;
            e < t[c] ? l = c : n = c + 1;
          }
          if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
        }
        this._cachedIndex = n, this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, e, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
      for (let l = 0; l !== i; ++l) t[l] = n[r + l];
      return t;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  }
  class ox extends ar {
    constructor(e, t, n, i) {
      super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
        endingStart: es,
        endingEnd: es
      };
    }
    intervalChanged_(e, t, n) {
      const i = this.parameterPositions;
      let r = e - 2, l = e + 1, c = i[r], u = i[l];
      if (c === void 0) switch (this.getSettings_().endingStart) {
        case ts:
          r = e, c = 2 * t - n;
          break;
        case Yr:
          r = i.length - 2, c = t + i[r] - i[r + 1];
          break;
        default:
          r = e, c = n;
      }
      if (u === void 0) switch (this.getSettings_().endingEnd) {
        case ts:
          l = e, u = 2 * n - t;
          break;
        case Yr:
          l = 1, u = n + i[1] - i[0];
          break;
        default:
          l = e - 1, u = t;
      }
      const d = (n - t) * 0.5, f = this.valueSize;
      this._weightPrev = d / (t - c), this._weightNext = d / (u - n), this._offsetPrev = r * f, this._offsetNext = l * f;
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer, l = this.sampleValues, c = this.valueSize, u = e * c, d = u - c, f = this._offsetPrev, m = this._offsetNext, g = this._weightPrev, b = this._weightNext, y = (n - t) / (i - t), _ = y * y, v = _ * y, w = -g * v + 2 * g * _ - g * y, C = (1 + g) * v + (-1.5 - 2 * g) * _ + (-0.5 + g) * y + 1, S = (-1 - b) * v + (1.5 + b) * _ + 0.5 * y, M = b * v - b * _;
      for (let P = 0; P !== c; ++P) r[P] = w * l[f + P] + C * l[d + P] + S * l[u + P] + M * l[m + P];
      return r;
    }
  }
  class Lu extends ar {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer, l = this.sampleValues, c = this.valueSize, u = e * c, d = u - c, f = (n - t) / (i - t), m = 1 - f;
      for (let g = 0; g !== c; ++g) r[g] = l[d + g] * m + l[u + g] * f;
      return r;
    }
  }
  class ax extends ar {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class bn {
    constructor(e, t, n, i) {
      if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
      this.name = e, this.times = Hr(t, this.TimeBufferType), this.values = Hr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: Hr(e.times, Array),
          values: Hr(e.values, Array)
        };
        const i = e.getInterpolation();
        i !== e.DefaultInterpolation && (n.interpolation = i);
      }
      return n.type = e.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new ax(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new Lu(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new ox(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case Qs:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case us:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case Uo:
          t = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (t === void 0) {
        const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
        return console.warn("THREE.KeyframeTrack:", n), this;
      }
      return this.createInterpolant = t, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Qs;
        case this.InterpolantFactoryMethodLinear:
          return us;
        case this.InterpolantFactoryMethodSmooth:
          return Uo;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (e !== 0) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (e !== 1) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      const n = this.times, i = n.length;
      let r = 0, l = i - 1;
      for (; r !== i && n[r] < e; ) ++r;
      for (; l !== -1 && n[l] > t; ) --l;
      if (++l, r !== 0 || l !== i) {
        r >= l && (l = Math.max(l, 1), r = l - 1);
        const c = this.getValueSize();
        this.times = Yn(n, r, l), this.values = Yn(this.values, r * c, l * c);
      }
      return this;
    }
    validate() {
      let e = true;
      const t = this.getValueSize();
      t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
      const n = this.times, i = this.values, r = n.length;
      r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
      let l = null;
      for (let c = 0; c !== r; c++) {
        const u = n[c];
        if (typeof u == "number" && isNaN(u)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, c, u), e = false;
          break;
        }
        if (l !== null && l > u) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, c, u, l), e = false;
          break;
        }
        l = u;
      }
      if (i !== void 0 && Au(i)) for (let c = 0, u = i.length; c !== u; ++c) {
        const d = i[c];
        if (isNaN(d)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, c, d), e = false;
          break;
        }
      }
      return e;
    }
    optimize() {
      const e = Yn(this.times), t = Yn(this.values), n = this.getValueSize(), i = this.getInterpolation() === Uo, r = e.length - 1;
      let l = 1;
      for (let c = 1; c < r; ++c) {
        let u = false;
        const d = e[c], f = e[c + 1];
        if (d !== f && (c !== 1 || d !== e[0])) if (i) u = true;
        else {
          const m = c * n, g = m - n, b = m + n;
          for (let y = 0; y !== n; ++y) {
            const _ = t[m + y];
            if (_ !== t[g + y] || _ !== t[b + y]) {
              u = true;
              break;
            }
          }
        }
        if (u) {
          if (c !== l) {
            e[l] = e[c];
            const m = c * n, g = l * n;
            for (let b = 0; b !== n; ++b) t[g + b] = t[m + b];
          }
          ++l;
        }
      }
      if (r > 0) {
        e[l] = e[r];
        for (let c = r * n, u = l * n, d = 0; d !== n; ++d) t[u + d] = t[c + d];
        ++l;
      }
      return l !== e.length ? (this.times = Yn(e, 0, l), this.values = Yn(t, 0, l * n)) : (this.times = e, this.values = t), this;
    }
    clone() {
      const e = Yn(this.times, 0), t = Yn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
      return i.createInterpolant = this.createInterpolant, i;
    }
  }
  bn.prototype.TimeBufferType = Float32Array;
  bn.prototype.ValueBufferType = Float32Array;
  bn.prototype.DefaultInterpolation = us;
  class vs extends bn {
  }
  vs.prototype.ValueTypeName = "bool";
  vs.prototype.ValueBufferType = Array;
  vs.prototype.DefaultInterpolation = Qs;
  vs.prototype.InterpolantFactoryMethodLinear = void 0;
  vs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Ru extends bn {
  }
  Ru.prototype.ValueTypeName = "color";
  class ir extends bn {
  }
  ir.prototype.ValueTypeName = "number";
  class lx extends ar {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer, l = this.sampleValues, c = this.valueSize, u = (n - t) / (i - t);
      let d = e * c;
      for (let f = d + c; d !== f; d += 4) Pt.slerpFlat(r, 0, l, d - c, l, d, u);
      return r;
    }
  }
  class Si extends bn {
    InterpolantFactoryMethodLinear(e) {
      return new lx(this.times, this.values, this.getValueSize(), e);
    }
  }
  Si.prototype.ValueTypeName = "quaternion";
  Si.prototype.DefaultInterpolation = us;
  Si.prototype.InterpolantFactoryMethodSmooth = void 0;
  class bs extends bn {
  }
  bs.prototype.ValueTypeName = "string";
  bs.prototype.ValueBufferType = Array;
  bs.prototype.DefaultInterpolation = Qs;
  bs.prototype.InterpolantFactoryMethodLinear = void 0;
  bs.prototype.InterpolantFactoryMethodSmooth = void 0;
  class sr extends bn {
  }
  sr.prototype.ValueTypeName = "vector";
  class Ra {
    constructor(e, t = -1, n, i = Ua) {
      this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = un(), this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [], n = e.tracks, i = 1 / (e.fps || 1);
      for (let l = 0, c = n.length; l !== c; ++l) t.push(hx(n[l]).scale(i));
      const r = new this(e.name, e.duration, t, e.blendMode);
      return r.uuid = e.uuid, r;
    }
    static toJSON(e) {
      const t = [], n = e.tracks, i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode
      };
      for (let r = 0, l = n.length; r !== l; ++r) t.push(bn.toJSON(n[r]));
      return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
      const r = t.length, l = [];
      for (let c = 0; c < r; c++) {
        let u = [], d = [];
        u.push((c + r - 1) % r, c, (c + 1) % r), d.push(0, 1, 0);
        const f = rx(u);
        u = Ah(u, 1, f), d = Ah(d, 1, f), !i && u[0] === 0 && (u.push(r), d.push(d[0])), l.push(new ir(".morphTargetInfluences[" + t[c].name + "]", u, d).scale(1 / n));
      }
      return new this(e, -1, l);
    }
    static findByName(e, t) {
      let n = e;
      if (!Array.isArray(e)) {
        const i = e;
        n = i.geometry && i.geometry.animations || i.animations;
      }
      for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
      const i = {}, r = /^([\w-]*?)([\d]+)$/;
      for (let c = 0, u = e.length; c < u; c++) {
        const d = e[c], f = d.name.match(r);
        if (f && f.length > 1) {
          const m = f[1];
          let g = i[m];
          g || (i[m] = g = []), g.push(d);
        }
      }
      const l = [];
      for (const c in i) l.push(this.CreateFromMorphTargetSequence(c, i[c], t, n));
      return l;
    }
    static parseAnimation(e, t) {
      if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      const n = function(m, g, b, y, _) {
        if (b.length !== 0) {
          const v = [], w = [];
          Pu(b, v, w, y), v.length !== 0 && _.push(new m(g, v, w));
        }
      }, i = [], r = e.name || "default", l = e.fps || 30, c = e.blendMode;
      let u = e.length || -1;
      const d = e.hierarchy || [];
      for (let m = 0; m < d.length; m++) {
        const g = d[m].keys;
        if (!(!g || g.length === 0)) if (g[0].morphTargets) {
          const b = {};
          let y;
          for (y = 0; y < g.length; y++) if (g[y].morphTargets) for (let _ = 0; _ < g[y].morphTargets.length; _++) b[g[y].morphTargets[_]] = -1;
          for (const _ in b) {
            const v = [], w = [];
            for (let C = 0; C !== g[y].morphTargets.length; ++C) {
              const S = g[y];
              v.push(S.time), w.push(S.morphTarget === _ ? 1 : 0);
            }
            i.push(new ir(".morphTargetInfluence[" + _ + "]", v, w));
          }
          u = b.length * l;
        } else {
          const b = ".bones[" + t[m].name + "]";
          n(sr, b + ".position", g, "pos", i), n(Si, b + ".quaternion", g, "rot", i), n(sr, b + ".scale", g, "scl", i);
        }
      }
      return i.length === 0 ? null : new this(r, u, i, c);
    }
    resetDuration() {
      const e = this.tracks;
      let t = 0;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = this.tracks[n];
        t = Math.max(t, r.times[r.times.length - 1]);
      }
      return this.duration = t, this;
    }
    trim() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
      return this;
    }
    validate() {
      let e = true;
      for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
      return e;
    }
    optimize() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
      return this;
    }
    clone() {
      const e = [];
      for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
      return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function cx(o) {
    switch (o.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return ir;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return sr;
      case "color":
        return Ru;
      case "quaternion":
        return Si;
      case "bool":
      case "boolean":
        return vs;
      case "string":
        return bs;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
  }
  function hx(o) {
    if (o.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = cx(o.type);
    if (o.times === void 0) {
      const t = [], n = [];
      Pu(o.keys, t, n, "value"), o.times = t, o.values = n;
    }
    return e.parse !== void 0 ? e.parse(o) : new e(o.name, o.times, o.values, o.interpolation);
  }
  const ps = {
    enabled: false,
    files: {},
    add: function(o, e) {
      this.enabled !== false && (this.files[o] = e);
    },
    get: function(o) {
      if (this.enabled !== false) return this.files[o];
    },
    remove: function(o) {
      delete this.files[o];
    },
    clear: function() {
      this.files = {};
    }
  };
  class ux {
    constructor(e, t, n) {
      const i = this;
      let r = false, l = 0, c = 0, u;
      const d = [];
      this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(f) {
        c++, r === false && i.onStart !== void 0 && i.onStart(f, l, c), r = true;
      }, this.itemEnd = function(f) {
        l++, i.onProgress !== void 0 && i.onProgress(f, l, c), l === c && (r = false, i.onLoad !== void 0 && i.onLoad());
      }, this.itemError = function(f) {
        i.onError !== void 0 && i.onError(f);
      }, this.resolveURL = function(f) {
        return u ? u(f) : f;
      }, this.setURLModifier = function(f) {
        return u = f, this;
      }, this.addHandler = function(f, m) {
        return d.push(f, m), this;
      }, this.removeHandler = function(f) {
        const m = d.indexOf(f);
        return m !== -1 && d.splice(m, 2), this;
      }, this.getHandler = function(f) {
        for (let m = 0, g = d.length; m < g; m += 2) {
          const b = d[m], y = d[m + 1];
          if (b.global && (b.lastIndex = 0), b.test(f)) return y;
        }
        return null;
      };
    }
  }
  const dx = new ux();
  class xs {
    constructor(e) {
      this.manager = e !== void 0 ? e : dx, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(e, t) {
      const n = this;
      return new Promise(function(i, r) {
        n.load(e, i, t, r);
      });
    }
    parse() {
    }
    setCrossOrigin(e) {
      return this.crossOrigin = e, this;
    }
    setWithCredentials(e) {
      return this.withCredentials = e, this;
    }
    setPath(e) {
      return this.path = e, this;
    }
    setResourcePath(e) {
      return this.resourcePath = e, this;
    }
    setRequestHeader(e) {
      return this.requestHeader = e, this;
    }
  }
  const Ln = {};
  class px extends Error {
    constructor(e, t) {
      super(e), this.response = t;
    }
  }
  class Zr extends xs {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const r = ps.get(e);
      if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
      if (Ln[e] !== void 0) {
        Ln[e].push({
          onLoad: t,
          onProgress: n,
          onError: i
        });
        return;
      }
      Ln[e] = [], Ln[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      const l = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin"
      }), c = this.mimeType, u = this.responseType;
      fetch(l).then((d) => {
        if (d.status === 200 || d.status === 0) {
          if (d.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || d.body === void 0 || d.body.getReader === void 0) return d;
          const f = Ln[e], m = d.body.getReader(), g = d.headers.get("Content-Length") || d.headers.get("X-File-Size"), b = g ? parseInt(g) : 0, y = b !== 0;
          let _ = 0;
          const v = new ReadableStream({
            start(w) {
              C();
              function C() {
                m.read().then(({ done: S, value: M }) => {
                  if (S) w.close();
                  else {
                    _ += M.byteLength;
                    const P = new ProgressEvent("progress", {
                      lengthComputable: y,
                      loaded: _,
                      total: b
                    });
                    for (let N = 0, F = f.length; N < F; N++) {
                      const E = f[N];
                      E.onProgress && E.onProgress(P);
                    }
                    w.enqueue(M), C();
                  }
                });
              }
            }
          });
          return new Response(v);
        } else throw new px(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`, d);
      }).then((d) => {
        switch (u) {
          case "arraybuffer":
            return d.arrayBuffer();
          case "blob":
            return d.blob();
          case "document":
            return d.text().then((f) => new DOMParser().parseFromString(f, c));
          case "json":
            return d.json();
          default:
            if (c === void 0) return d.text();
            {
              const m = /charset="?([^;"\s]*)"?/i.exec(c), g = m && m[1] ? m[1].toLowerCase() : void 0, b = new TextDecoder(g);
              return d.arrayBuffer().then((y) => b.decode(y));
            }
        }
      }).then((d) => {
        ps.add(e, d);
        const f = Ln[e];
        delete Ln[e];
        for (let m = 0, g = f.length; m < g; m++) {
          const b = f[m];
          b.onLoad && b.onLoad(d);
        }
      }).catch((d) => {
        const f = Ln[e];
        if (f === void 0) throw this.manager.itemError(e), d;
        delete Ln[e];
        for (let m = 0, g = f.length; m < g; m++) {
          const b = f[m];
          b.onError && b.onError(d);
        }
        this.manager.itemError(e);
      }).finally(() => {
        this.manager.itemEnd(e);
      }), this.manager.itemStart(e);
    }
    setResponseType(e) {
      return this.responseType = e, this;
    }
    setMimeType(e) {
      return this.mimeType = e, this;
    }
  }
  class fx extends xs {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const r = this, l = ps.get(e);
      if (l !== void 0) return r.manager.itemStart(e), setTimeout(function() {
        t && t(l), r.manager.itemEnd(e);
      }, 0), l;
      const c = nr("img");
      function u() {
        f(), ps.add(e, this), t && t(this), r.manager.itemEnd(e);
      }
      function d(m) {
        f(), i && i(m), r.manager.itemError(e), r.manager.itemEnd(e);
      }
      function f() {
        c.removeEventListener("load", u, false), c.removeEventListener("error", d, false);
      }
      return c.addEventListener("load", u, false), c.addEventListener("error", d, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (c.crossOrigin = this.crossOrigin), r.manager.itemStart(e), c.src = e, c;
    }
  }
  class Du extends xs {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const r = new Dt(), l = new fx(this.manager);
      return l.setCrossOrigin(this.crossOrigin), l.setPath(this.path), l.load(e, function(c) {
        r.image = c, r.needsUpdate = true, t !== void 0 && t(r);
      }, n, i), r;
    }
  }
  class io extends ut {
    constructor(e, t = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new He(e), this.intensity = t;
    }
    dispose() {
    }
    copy(e, t) {
      return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
    }
  }
  const ua = new ze(), Ph = new k(), Lh = new k();
  class Ka {
    constructor(e) {
      this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ke(512, 512), this.map = null, this.mapPass = null, this.matrix = new ze(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new za(), this._frameExtents = new ke(1, 1), this._viewportCount = 1, this._viewports = [
        new rt(0, 0, 1, 1)
      ];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      const t = this.camera, n = this.matrix;
      Ph.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ph), Lh.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Lh), t.updateMatrixWorld(), ua.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ua), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(ua);
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
      return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = {};
      return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
    }
  }
  class mx extends Ka {
    constructor() {
      super(new Ht(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
    }
    updateMatrices(e) {
      const t = this.camera, n = tr * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
      (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), this.focus = e.focus, this;
    }
  }
  class gx extends io {
    constructor(e, t, n = 0, i = Math.PI / 3, r = 0, l = 2) {
      super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.target = new ut(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = l, this.map = null, this.shadow = new mx();
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  const Rh = new ze(), Hs = new k(), da = new k();
  class _x extends Ka {
    constructor() {
      super(new Ht(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new ke(4, 2), this._viewportCount = 6, this._viewports = [
        new rt(2, 1, 1, 1),
        new rt(0, 1, 1, 1),
        new rt(3, 1, 1, 1),
        new rt(1, 1, 1, 1),
        new rt(3, 0, 1, 1),
        new rt(1, 0, 1, 1)
      ], this._cubeDirections = [
        new k(1, 0, 0),
        new k(-1, 0, 0),
        new k(0, 0, 1),
        new k(0, 0, -1),
        new k(0, 1, 0),
        new k(0, -1, 0)
      ], this._cubeUps = [
        new k(0, 1, 0),
        new k(0, 1, 0),
        new k(0, 1, 0),
        new k(0, 1, 0),
        new k(0, 0, 1),
        new k(0, 0, -1)
      ];
    }
    updateMatrices(e, t = 0) {
      const n = this.camera, i = this.matrix, r = e.distance || n.far;
      r !== n.far && (n.far = r, n.updateProjectionMatrix()), Hs.setFromMatrixPosition(e.matrixWorld), n.position.copy(Hs), da.copy(n.position), da.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(da), n.updateMatrixWorld(), i.makeTranslation(-Hs.x, -Hs.y, -Hs.z), Rh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Rh);
    }
  }
  class vx extends io {
    constructor(e, t, n = 0, i = 2) {
      super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new _x();
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
    }
  }
  class bx extends Ka {
    constructor() {
      super(new Ha(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  }
  class Iu extends io {
    constructor(e, t) {
      super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ut.DEFAULT_UP), this.updateMatrix(), this.target = new ut(), this.shadow = new bx();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
  }
  class xx extends io {
    constructor(e, t) {
      super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  }
  class Da {
    static decodeText(e) {
      if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
      let t = "";
      for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch {
        return t;
      }
    }
    static extractUrlBase(e) {
      const t = e.lastIndexOf("/");
      return t === -1 ? "./" : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
    }
  }
  class yx extends xs {
    constructor(e) {
      super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
        premultiplyAlpha: "none"
      };
    }
    setOptions(e) {
      return this.options = e, this;
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const r = this, l = ps.get(e);
      if (l !== void 0) return r.manager.itemStart(e), setTimeout(function() {
        t && t(l), r.manager.itemEnd(e);
      }, 0), l;
      const c = {};
      c.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", c.headers = this.requestHeader, fetch(e, c).then(function(u) {
        return u.blob();
      }).then(function(u) {
        return createImageBitmap(u, Object.assign(r.options, {
          colorSpaceConversion: "none"
        }));
      }).then(function(u) {
        ps.add(e, u), t && t(u), r.manager.itemEnd(e);
      }).catch(function(u) {
        i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
      }), r.manager.itemStart(e);
    }
  }
  class wx {
    constructor(e = true) {
      this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = Dh(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    }
    stop() {
      this.getElapsedTime(), this.running = false, this.autoStart = false;
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let e = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const t = Dh();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
      }
      return e;
    }
  }
  function Dh() {
    return (typeof performance > "u" ? Date : performance).now();
  }
  class Mx {
    constructor(e, t, n) {
      this.binding = e, this.valueSize = n;
      let i, r, l;
      switch (t) {
        case "quaternion":
          i = this._slerp, r = this._slerpAdditive, l = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
          break;
        case "string":
        case "bool":
          i = this._select, r = this._select, l = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
          break;
        default:
          i = this._lerp, r = this._lerpAdditive, l = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
      }
      this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = l, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }
    accumulate(e, t) {
      const n = this.buffer, i = this.valueSize, r = e * i + i;
      let l = this.cumulativeWeight;
      if (l === 0) {
        for (let c = 0; c !== i; ++c) n[r + c] = n[c];
        l = t;
      } else {
        l += t;
        const c = t / l;
        this._mixBufferRegion(n, r, 0, c, i);
      }
      this.cumulativeWeight = l;
    }
    accumulateAdditive(e) {
      const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
      this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
    }
    apply(e) {
      const t = this.valueSize, n = this.buffer, i = e * t + t, r = this.cumulativeWeight, l = this.cumulativeWeightAdditive, c = this.binding;
      if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
        const u = t * this._origIndex;
        this._mixBufferRegion(n, i, u, 1 - r, t);
      }
      l > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
      for (let u = t, d = t + t; u !== d; ++u) if (n[u] !== n[u + t]) {
        c.setValue(n, i);
        break;
      }
    }
    saveOriginalState() {
      const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
      e.getValue(t, i);
      for (let r = n, l = i; r !== l; ++r) t[r] = t[i + r % n];
      this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
    }
    restoreOriginalState() {
      const e = this.valueSize * 3;
      this.binding.setValue(this.buffer, e);
    }
    _setAdditiveIdentityNumeric() {
      const e = this._addIndex * this.valueSize, t = e + this.valueSize;
      for (let n = e; n < t; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
    }
    _setAdditiveIdentityOther() {
      const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
    }
    _select(e, t, n, i, r) {
      if (i >= 0.5) for (let l = 0; l !== r; ++l) e[t + l] = e[n + l];
    }
    _slerp(e, t, n, i) {
      Pt.slerpFlat(e, t, e, t, e, n, i);
    }
    _slerpAdditive(e, t, n, i, r) {
      const l = this._workIndex * r;
      Pt.multiplyQuaternionsFlat(e, l, e, t, e, n), Pt.slerpFlat(e, t, e, t, e, l, i);
    }
    _lerp(e, t, n, i, r) {
      const l = 1 - i;
      for (let c = 0; c !== r; ++c) {
        const u = t + c;
        e[u] = e[u] * l + e[n + c] * i;
      }
    }
    _lerpAdditive(e, t, n, i, r) {
      for (let l = 0; l !== r; ++l) {
        const c = t + l;
        e[c] = e[c] + e[n + l] * i;
      }
    }
  }
  const Ya = "\\[\\]\\.:\\/", Sx = new RegExp("[" + Ya + "]", "g"), $a = "[^" + Ya + "]", Ex = "[^" + Ya.replace("\\.", "") + "]", Tx = /((?:WC+[\/:])*)/.source.replace("WC", $a), Cx = /(WCOD+)?/.source.replace("WCOD", Ex), Ax = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", $a), Px = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", $a), Lx = new RegExp("^" + Tx + Cx + Ax + Px + "$"), Rx = [
    "material",
    "materials",
    "bones",
    "map"
  ];
  class Dx {
    constructor(e, t, n) {
      const i = n || it.parseTrackName(t);
      this._targetGroup = e, this._bindings = e.subscribe_(t, i);
    }
    getValue(e, t) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
      i !== void 0 && i.getValue(e, t);
    }
    setValue(e, t) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
    }
    bind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
    }
    unbind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
    }
  }
  class it {
    constructor(e, t, n) {
      this.path = t, this.parsedPath = n || it.parseTrackName(t), this.node = it.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup ? new it.Composite(e, t, n) : new it(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(Sx, "");
    }
    static parseTrackName(e) {
      const t = Lx.exec(e);
      if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
      const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6]
      }, i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (i !== void 0 && i !== -1) {
        const r = n.nodeName.substring(i + 1);
        Rx.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
      }
      if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
      return n;
    }
    static findNode(e, t) {
      if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
      if (e.skeleton) {
        const n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        const n = function(r) {
          for (let l = 0; l < r.length; l++) {
            const c = r[l];
            if (c.name === t || c.uuid === t) return c;
            const u = n(c.children);
            if (u) return u;
          }
          return null;
        }, i = n(e.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(e, t) {
      this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
      this.bind(), this.setValue(e, t);
    }
    bind() {
      let e = this.node;
      const t = this.parsedPath, n = t.objectName, i = t.propertyName;
      let r = t.propertyIndex;
      if (e || (e = it.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
        console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        return;
      }
      if (n) {
        let d = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e.material.materials) {
              console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton) {
              console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            e = e.skeleton.bones;
            for (let f = 0; f < e.length; f++) if (e[f].name === d) {
              d = f;
              break;
            }
            break;
          case "map":
            if ("map" in e) {
              e = e.map;
              break;
            }
            if (!e.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!e.material.map) {
              console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
              return;
            }
            e = e.material.map;
            break;
          default:
            if (e[n] === void 0) {
              console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            e = e[n];
        }
        if (d !== void 0) {
          if (e[d] === void 0) {
            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
            return;
          }
          e = e[d];
        }
      }
      const l = e[i];
      if (l === void 0) {
        const d = t.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + d + "." + i + " but it wasn't found.", e);
        return;
      }
      let c = this.Versioning.None;
      this.targetObject = e, e.needsUpdate !== void 0 ? c = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (c = this.Versioning.MatrixWorldNeedsUpdate);
      let u = this.BindingType.Direct;
      if (r !== void 0) {
        if (i === "morphTargetInfluences") {
          if (!e.geometry) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            return;
          }
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
        }
        u = this.BindingType.ArrayElement, this.resolvedProperty = l, this.propertyIndex = r;
      } else l.fromArray !== void 0 && l.toArray !== void 0 ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = l) : Array.isArray(l) ? (u = this.BindingType.EntireArray, this.resolvedProperty = l) : this.propertyName = i;
      this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][c];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  }
  it.Composite = Dx;
  it.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  };
  it.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  };
  it.prototype.GetterByBindingType = [
    it.prototype._getValue_direct,
    it.prototype._getValue_array,
    it.prototype._getValue_arrayElement,
    it.prototype._getValue_toArray
  ];
  it.prototype.SetterByBindingTypeAndVersioning = [
    [
      it.prototype._setValue_direct,
      it.prototype._setValue_direct_setNeedsUpdate,
      it.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
      it.prototype._setValue_array,
      it.prototype._setValue_array_setNeedsUpdate,
      it.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
      it.prototype._setValue_arrayElement,
      it.prototype._setValue_arrayElement_setNeedsUpdate,
      it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
      it.prototype._setValue_fromArray,
      it.prototype._setValue_fromArray_setNeedsUpdate,
      it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
  ];
  class Ix {
    constructor(e, t, n = null, i = t.blendMode) {
      this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
      const r = t.tracks, l = r.length, c = new Array(l), u = {
        endingStart: es,
        endingEnd: es
      };
      for (let d = 0; d !== l; ++d) {
        const f = r[d].createInterpolant(null);
        c[d] = f, f.settings = u;
      }
      this._interpolantSettings = u, this._interpolants = c, this._propertyBindings = new Array(l), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Cm, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
    }
    play() {
      return this._mixer._activateAction(this), this;
    }
    stop() {
      return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
      return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
    }
    isRunning() {
      return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(e) {
      return this._startTime = e, this;
    }
    setLoop(e, t) {
      return this.loop = e, this.repetitions = t, this;
    }
    setEffectiveWeight(e) {
      return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(e) {
      return this._scheduleFading(e, 0, 1);
    }
    fadeOut(e) {
      return this._scheduleFading(e, 1, 0);
    }
    crossFadeFrom(e, t, n) {
      if (e.fadeOut(t), this.fadeIn(t), n) {
        const i = this._clip.duration, r = e._clip.duration, l = r / i, c = i / r;
        e.warp(1, l, t), this.warp(c, 1, t);
      }
      return this;
    }
    crossFadeTo(e, t, n) {
      return e.crossFadeFrom(this, t, n);
    }
    stopFading() {
      const e = this._weightInterpolant;
      return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
    }
    setEffectiveTimeScale(e) {
      return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(e) {
      return this.timeScale = this._clip.duration / e, this.stopWarping();
    }
    syncWith(e) {
      return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
    }
    halt(e) {
      return this.warp(this._effectiveTimeScale, 0, e);
    }
    warp(e, t, n) {
      const i = this._mixer, r = i.time, l = this.timeScale;
      let c = this._timeScaleInterpolant;
      c === null && (c = i._lendControlInterpolant(), this._timeScaleInterpolant = c);
      const u = c.parameterPositions, d = c.sampleValues;
      return u[0] = r, u[1] = r + n, d[0] = e / l, d[1] = t / l, this;
    }
    stopWarping() {
      const e = this._timeScaleInterpolant;
      return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(e, t, n, i) {
      if (!this.enabled) {
        this._updateWeight(e);
        return;
      }
      const r = this._startTime;
      if (r !== null) {
        const u = (e - r) * n;
        u < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * u);
      }
      t *= this._updateTimeScale(e);
      const l = this._updateTime(t), c = this._updateWeight(e);
      if (c > 0) {
        const u = this._interpolants, d = this._propertyBindings;
        switch (this.blendMode) {
          case Pm:
            for (let f = 0, m = u.length; f !== m; ++f) u[f].evaluate(l), d[f].accumulateAdditive(c);
            break;
          case Ua:
          default:
            for (let f = 0, m = u.length; f !== m; ++f) u[f].evaluate(l), d[f].accumulate(i, c);
        }
      }
    }
    _updateWeight(e) {
      let t = 0;
      if (this.enabled) {
        t = this.weight;
        const n = this._weightInterpolant;
        if (n !== null) {
          const i = n.evaluate(e)[0];
          t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = false));
        }
      }
      return this._effectiveWeight = t, t;
    }
    _updateTimeScale(e) {
      let t = 0;
      if (!this.paused) {
        t = this.timeScale;
        const n = this._timeScaleInterpolant;
        if (n !== null) {
          const i = n.evaluate(e)[0];
          t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
        }
      }
      return this._effectiveTimeScale = t, t;
    }
    _updateTime(e) {
      const t = this._clip.duration, n = this.loop;
      let i = this.time + e, r = this._loopCount;
      const l = n === Am;
      if (e === 0) return r === -1 ? i : l && (r & 1) === 1 ? t - i : i;
      if (n === Tm) {
        r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
        e: {
          if (i >= t) i = t;
          else if (i < 0) i = 0;
          else {
            this.time = i;
            break e;
          }
          this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1
          });
        }
      } else {
        if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, l)) : this._setEndings(this.repetitions === 0, true, l)), i >= t || i < 0) {
          const c = Math.floor(i / t);
          i -= t * c, r += Math.abs(c);
          const u = this.repetitions - r;
          if (u <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
          else {
            if (u === 1) {
              const d = e < 0;
              this._setEndings(d, !d, l);
            } else this._setEndings(false, false, l);
            this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: c
            });
          }
        } else this.time = i;
        if (l && (r & 1) === 1) return t - i;
      }
      return i;
    }
    _setEndings(e, t, n) {
      const i = this._interpolantSettings;
      n ? (i.endingStart = ts, i.endingEnd = ts) : (e ? i.endingStart = this.zeroSlopeAtStart ? ts : es : i.endingStart = Yr, t ? i.endingEnd = this.zeroSlopeAtEnd ? ts : es : i.endingEnd = Yr);
    }
    _scheduleFading(e, t, n) {
      const i = this._mixer, r = i.time;
      let l = this._weightInterpolant;
      l === null && (l = i._lendControlInterpolant(), this._weightInterpolant = l);
      const c = l.parameterPositions, u = l.sampleValues;
      return c[0] = r, u[0] = t, c[1] = r + e, u[1] = n, this;
    }
  }
  const kx = new Float32Array(1);
  class Nx extends ei {
    constructor(e) {
      super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
    }
    _bindAction(e, t) {
      const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, l = e._propertyBindings, c = e._interpolants, u = n.uuid, d = this._bindingsByRootAndName;
      let f = d[u];
      f === void 0 && (f = {}, d[u] = f);
      for (let m = 0; m !== r; ++m) {
        const g = i[m], b = g.name;
        let y = f[b];
        if (y !== void 0) ++y.referenceCount, l[m] = y;
        else {
          if (y = l[m], y !== void 0) {
            y._cacheIndex === null && (++y.referenceCount, this._addInactiveBinding(y, u, b));
            continue;
          }
          const _ = t && t._propertyBindings[m].binding.parsedPath;
          y = new Mx(it.create(n, b, _), g.ValueTypeName, g.getValueSize()), ++y.referenceCount, this._addInactiveBinding(y, u, b), l[m] = y;
        }
        c[m].resultBuffer = y.buffer;
      }
    }
    _activateAction(e) {
      if (!this._isActiveAction(e)) {
        if (e._cacheIndex === null) {
          const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, r = this._actionsByClip[i];
          this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, i, n);
        }
        const t = e._propertyBindings;
        for (let n = 0, i = t.length; n !== i; ++n) {
          const r = t[n];
          r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
        }
        this._lendAction(e);
      }
    }
    _deactivateAction(e) {
      if (this._isActiveAction(e)) {
        const t = e._propertyBindings;
        for (let n = 0, i = t.length; n !== i; ++n) {
          const r = t[n];
          --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
        }
        this._takeBackAction(e);
      }
    }
    _initMemoryManager() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      const e = this;
      this.stats = {
        actions: {
          get total() {
            return e._actions.length;
          },
          get inUse() {
            return e._nActiveActions;
          }
        },
        bindings: {
          get total() {
            return e._bindings.length;
          },
          get inUse() {
            return e._nActiveBindings;
          }
        },
        controlInterpolants: {
          get total() {
            return e._controlInterpolants.length;
          },
          get inUse() {
            return e._nActiveControlInterpolants;
          }
        }
      };
    }
    _isActiveAction(e) {
      const t = e._cacheIndex;
      return t !== null && t < this._nActiveActions;
    }
    _addInactiveAction(e, t, n) {
      const i = this._actions, r = this._actionsByClip;
      let l = r[t];
      if (l === void 0) l = {
        knownActions: [
          e
        ],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, r[t] = l;
      else {
        const c = l.knownActions;
        e._byClipCacheIndex = c.length, c.push(e);
      }
      e._cacheIndex = i.length, i.push(e), l.actionByRoot[n] = e;
    }
    _removeInactiveAction(e) {
      const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
      n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
      const r = e._clip.uuid, l = this._actionsByClip, c = l[r], u = c.knownActions, d = u[u.length - 1], f = e._byClipCacheIndex;
      d._byClipCacheIndex = f, u[f] = d, u.pop(), e._byClipCacheIndex = null;
      const m = c.actionByRoot, g = (e._localRoot || this._root).uuid;
      delete m[g], u.length === 0 && delete l[r], this._removeInactiveBindingsForAction(e);
    }
    _removeInactiveBindingsForAction(e) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        --r.referenceCount === 0 && this._removeInactiveBinding(r);
      }
    }
    _lendAction(e) {
      const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, r = t[i];
      e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _takeBackAction(e) {
      const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, r = t[i];
      e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _addInactiveBinding(e, t, n) {
      const i = this._bindingsByRootAndName, r = this._bindings;
      let l = i[t];
      l === void 0 && (l = {}, i[t] = l), l[n] = e, e._cacheIndex = r.length, r.push(e);
    }
    _removeInactiveBinding(e) {
      const t = this._bindings, n = e.binding, i = n.rootNode.uuid, r = n.path, l = this._bindingsByRootAndName, c = l[i], u = t[t.length - 1], d = e._cacheIndex;
      u._cacheIndex = d, t[d] = u, t.pop(), delete c[r], Object.keys(c).length === 0 && delete l[i];
    }
    _lendBinding(e) {
      const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, r = t[i];
      e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _takeBackBinding(e) {
      const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, r = t[i];
      e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _lendControlInterpolant() {
      const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
      let n = e[t];
      return n === void 0 && (n = new Lu(new Float32Array(2), new Float32Array(2), 1, kx), n.__cacheIndex = t, e[t] = n), n;
    }
    _takeBackControlInterpolant(e) {
      const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, r = t[i];
      e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r;
    }
    clipAction(e, t, n) {
      const i = t || this._root, r = i.uuid;
      let l = typeof e == "string" ? Ra.findByName(i, e) : e;
      const c = l !== null ? l.uuid : e, u = this._actionsByClip[c];
      let d = null;
      if (n === void 0 && (l !== null ? n = l.blendMode : n = Ua), u !== void 0) {
        const m = u.actionByRoot[r];
        if (m !== void 0 && m.blendMode === n) return m;
        d = u.knownActions[0], l === null && (l = d._clip);
      }
      if (l === null) return null;
      const f = new Ix(this, l, t, n);
      return this._bindAction(f, d), this._addInactiveAction(f, c, r), f;
    }
    existingAction(e, t) {
      const n = t || this._root, i = n.uuid, r = typeof e == "string" ? Ra.findByName(n, e) : e, l = r ? r.uuid : e, c = this._actionsByClip[l];
      return c !== void 0 && c.actionByRoot[i] || null;
    }
    stopAllAction() {
      const e = this._actions, t = this._nActiveActions;
      for (let n = t - 1; n >= 0; --n) e[n].stop();
      return this;
    }
    update(e) {
      e *= this.timeScale;
      const t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), l = this._accuIndex ^= 1;
      for (let d = 0; d !== n; ++d) t[d]._update(i, e, r, l);
      const c = this._bindings, u = this._nActiveBindings;
      for (let d = 0; d !== u; ++d) c[d].apply(l);
      return this;
    }
    setTime(e) {
      this.time = 0;
      for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
      return this.update(e);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(e) {
      const t = this._actions, n = e.uuid, i = this._actionsByClip, r = i[n];
      if (r !== void 0) {
        const l = r.knownActions;
        for (let c = 0, u = l.length; c !== u; ++c) {
          const d = l[c];
          this._deactivateAction(d);
          const f = d._cacheIndex, m = t[t.length - 1];
          d._cacheIndex = null, d._byClipCacheIndex = null, m._cacheIndex = f, t[f] = m, t.pop(), this._removeInactiveBindingsForAction(d);
        }
        delete i[n];
      }
    }
    uncacheRoot(e) {
      const t = e.uuid, n = this._actionsByClip;
      for (const l in n) {
        const c = n[l].actionByRoot, u = c[t];
        u !== void 0 && (this._deactivateAction(u), this._removeInactiveAction(u));
      }
      const i = this._bindingsByRootAndName, r = i[t];
      if (r !== void 0) for (const l in r) {
        const c = r[l];
        c.restoreOriginalState(), this._removeInactiveBinding(c);
      }
    }
    uncacheAction(e, t) {
      const n = this.existingAction(e, t);
      n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  }
  class Ih {
    constructor(e = 1, t = 0, n = 0) {
      return this.radius = e, this.phi = t, this.theta = n, this;
    }
    set(e, t, n) {
      return this.radius = e, this.phi = t, this.theta = n, this;
    }
    copy(e) {
      return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
    }
    makeSafe() {
      return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
      return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ft(t / this.radius, -1, 1))), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: Fa
    }
  }));
  typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Fa);
  const kh = {
    type: "change"
  }, pa = {
    type: "start"
  }, Nh = {
    type: "end"
  };
  class Ox extends ei {
    constructor(e, t) {
      super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = true, this.target = new k(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown"
      }, this.mouseButtons = {
        LEFT: Fi.ROTATE,
        MIDDLE: Fi.DOLLY,
        RIGHT: Fi.PAN
      }, this.touches = {
        ONE: Ui.ROTATE,
        TWO: Ui.DOLLY_PAN
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
        return c.phi;
      }, this.getAzimuthalAngle = function() {
        return c.theta;
      }, this.getDistance = function() {
        return this.object.position.distanceTo(this.target);
      }, this.listenToKeyEvents = function(D) {
        D.addEventListener("keydown", kt), this._domElementKeyEvents = D;
      }, this.saveState = function() {
        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
      }, this.reset = function() {
        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(kh), n.update(), r = i.NONE;
      }, this.update = (function() {
        const D = new k(), B = new Pt().setFromUnitVectors(e.up, new k(0, 1, 0)), ge = B.clone().invert(), _e = new k(), pe = new Pt(), we = 2 * Math.PI;
        return function() {
          const Ne = n.object.position;
          D.copy(Ne).sub(n.target), D.applyQuaternion(B), c.setFromVector3(D), n.autoRotate && r === i.NONE && I(F()), n.enableDamping ? (c.theta += u.theta * n.dampingFactor, c.phi += u.phi * n.dampingFactor) : (c.theta += u.theta, c.phi += u.phi);
          let Oe = n.minAzimuthAngle, nt = n.maxAzimuthAngle;
          return isFinite(Oe) && isFinite(nt) && (Oe < -Math.PI ? Oe += we : Oe > Math.PI && (Oe -= we), nt < -Math.PI ? nt += we : nt > Math.PI && (nt -= we), Oe <= nt ? c.theta = Math.max(Oe, Math.min(nt, c.theta)) : c.theta = c.theta > (Oe + nt) / 2 ? Math.max(Oe, c.theta) : Math.min(nt, c.theta)), c.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, c.phi)), c.makeSafe(), c.radius *= d, c.radius = Math.max(n.minDistance, Math.min(n.maxDistance, c.radius)), n.enableDamping === true ? n.target.addScaledVector(f, n.dampingFactor) : n.target.add(f), D.setFromSpherical(c), D.applyQuaternion(ge), Ne.copy(n.target).add(D), n.object.lookAt(n.target), n.enableDamping === true ? (u.theta *= 1 - n.dampingFactor, u.phi *= 1 - n.dampingFactor, f.multiplyScalar(1 - n.dampingFactor)) : (u.set(0, 0, 0), f.set(0, 0, 0)), d = 1, m || _e.distanceToSquared(n.object.position) > l || 8 * (1 - pe.dot(n.object.quaternion)) > l ? (n.dispatchEvent(kh), _e.copy(n.object.position), pe.copy(n.object.quaternion), m = false, true) : false;
        };
      })(), this.dispose = function() {
        n.domElement.removeEventListener("contextmenu", K), n.domElement.removeEventListener("pointerdown", pt), n.domElement.removeEventListener("pointercancel", gt), n.domElement.removeEventListener("wheel", Wt), n.domElement.removeEventListener("pointermove", dt), n.domElement.removeEventListener("pointerup", Qe), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", kt);
      };
      const n = this, i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
      };
      let r = i.NONE;
      const l = 1e-6, c = new Ih(), u = new Ih();
      let d = 1;
      const f = new k();
      let m = false;
      const g = new ke(), b = new ke(), y = new ke(), _ = new ke(), v = new ke(), w = new ke(), C = new ke(), S = new ke(), M = new ke(), P = [], N = {};
      function F() {
        return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
      }
      function E() {
        return Math.pow(0.95, n.zoomSpeed);
      }
      function I(D) {
        u.theta -= D;
      }
      function V(D) {
        u.phi -= D;
      }
      const ee = (function() {
        const D = new k();
        return function(ge, _e) {
          D.setFromMatrixColumn(_e, 0), D.multiplyScalar(-ge), f.add(D);
        };
      })(), Q = (function() {
        const D = new k();
        return function(ge, _e) {
          n.screenSpacePanning === true ? D.setFromMatrixColumn(_e, 1) : (D.setFromMatrixColumn(_e, 0), D.crossVectors(n.object.up, D)), D.multiplyScalar(ge), f.add(D);
        };
      })(), W = (function() {
        const D = new k();
        return function(ge, _e) {
          const pe = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const we = n.object.position;
            D.copy(we).sub(n.target);
            let be = D.length();
            be *= Math.tan(n.object.fov / 2 * Math.PI / 180), ee(2 * ge * be / pe.clientHeight, n.object.matrix), Q(2 * _e * be / pe.clientHeight, n.object.matrix);
          } else n.object.isOrthographicCamera ? (ee(ge * (n.object.right - n.object.left) / n.object.zoom / pe.clientWidth, n.object.matrix), Q(_e * (n.object.top - n.object.bottom) / n.object.zoom / pe.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
        };
      })();
      function G(D) {
        n.object.isPerspectiveCamera ? d /= D : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * D)), n.object.updateProjectionMatrix(), m = true) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
      }
      function $(D) {
        n.object.isPerspectiveCamera ? d *= D : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / D)), n.object.updateProjectionMatrix(), m = true) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
      }
      function ie(D) {
        g.set(D.clientX, D.clientY);
      }
      function te(D) {
        C.set(D.clientX, D.clientY);
      }
      function H(D) {
        _.set(D.clientX, D.clientY);
      }
      function he(D) {
        b.set(D.clientX, D.clientY), y.subVectors(b, g).multiplyScalar(n.rotateSpeed);
        const B = n.domElement;
        I(2 * Math.PI * y.x / B.clientHeight), V(2 * Math.PI * y.y / B.clientHeight), g.copy(b), n.update();
      }
      function se(D) {
        S.set(D.clientX, D.clientY), M.subVectors(S, C), M.y > 0 ? G(E()) : M.y < 0 && $(E()), C.copy(S), n.update();
      }
      function Se(D) {
        v.set(D.clientX, D.clientY), w.subVectors(v, _).multiplyScalar(n.panSpeed), W(w.x, w.y), _.copy(v), n.update();
      }
      function q(D) {
        D.deltaY < 0 ? $(E()) : D.deltaY > 0 && G(E()), n.update();
      }
      function re(D) {
        let B = false;
        switch (D.code) {
          case n.keys.UP:
            D.ctrlKey || D.metaKey || D.shiftKey ? V(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(0, n.keyPanSpeed), B = true;
            break;
          case n.keys.BOTTOM:
            D.ctrlKey || D.metaKey || D.shiftKey ? V(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(0, -n.keyPanSpeed), B = true;
            break;
          case n.keys.LEFT:
            D.ctrlKey || D.metaKey || D.shiftKey ? I(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(n.keyPanSpeed, 0), B = true;
            break;
          case n.keys.RIGHT:
            D.ctrlKey || D.metaKey || D.shiftKey ? I(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : W(-n.keyPanSpeed, 0), B = true;
            break;
        }
        B && (D.preventDefault(), n.update());
      }
      function ne() {
        if (P.length === 1) g.set(P[0].pageX, P[0].pageY);
        else {
          const D = 0.5 * (P[0].pageX + P[1].pageX), B = 0.5 * (P[0].pageY + P[1].pageY);
          g.set(D, B);
        }
      }
      function oe() {
        if (P.length === 1) _.set(P[0].pageX, P[0].pageY);
        else {
          const D = 0.5 * (P[0].pageX + P[1].pageX), B = 0.5 * (P[0].pageY + P[1].pageY);
          _.set(D, B);
        }
      }
      function X() {
        const D = P[0].pageX - P[1].pageX, B = P[0].pageY - P[1].pageY, ge = Math.sqrt(D * D + B * B);
        C.set(0, ge);
      }
      function De() {
        n.enableZoom && X(), n.enablePan && oe();
      }
      function xe() {
        n.enableZoom && X(), n.enableRotate && ne();
      }
      function ye(D) {
        if (P.length == 1) b.set(D.pageX, D.pageY);
        else {
          const ge = Ae(D), _e = 0.5 * (D.pageX + ge.x), pe = 0.5 * (D.pageY + ge.y);
          b.set(_e, pe);
        }
        y.subVectors(b, g).multiplyScalar(n.rotateSpeed);
        const B = n.domElement;
        I(2 * Math.PI * y.x / B.clientHeight), V(2 * Math.PI * y.y / B.clientHeight), g.copy(b);
      }
      function me(D) {
        if (P.length === 1) v.set(D.pageX, D.pageY);
        else {
          const B = Ae(D), ge = 0.5 * (D.pageX + B.x), _e = 0.5 * (D.pageY + B.y);
          v.set(ge, _e);
        }
        w.subVectors(v, _).multiplyScalar(n.panSpeed), W(w.x, w.y), _.copy(v);
      }
      function Ue(D) {
        const B = Ae(D), ge = D.pageX - B.x, _e = D.pageY - B.y, pe = Math.sqrt(ge * ge + _e * _e);
        S.set(0, pe), M.set(0, Math.pow(S.y / C.y, n.zoomSpeed)), G(M.y), C.copy(S);
      }
      function Ie(D) {
        n.enableZoom && Ue(D), n.enablePan && me(D);
      }
      function Te(D) {
        n.enableZoom && Ue(D), n.enableRotate && ye(D);
      }
      function pt(D) {
        n.enabled !== false && (P.length === 0 && (n.domElement.setPointerCapture(D.pointerId), n.domElement.addEventListener("pointermove", dt), n.domElement.addEventListener("pointerup", Qe)), ce(D), D.pointerType === "touch" ? L(D) : ct(D));
      }
      function dt(D) {
        n.enabled !== false && (D.pointerType === "touch" ? T(D) : Ke(D));
      }
      function Qe(D) {
        ue(D), P.length === 0 && (n.domElement.releasePointerCapture(D.pointerId), n.domElement.removeEventListener("pointermove", dt), n.domElement.removeEventListener("pointerup", Qe)), n.dispatchEvent(Nh), r = i.NONE;
      }
      function gt(D) {
        ue(D);
      }
      function ct(D) {
        let B;
        switch (D.button) {
          case 0:
            B = n.mouseButtons.LEFT;
            break;
          case 1:
            B = n.mouseButtons.MIDDLE;
            break;
          case 2:
            B = n.mouseButtons.RIGHT;
            break;
          default:
            B = -1;
        }
        switch (B) {
          case Fi.DOLLY:
            if (n.enableZoom === false) return;
            te(D), r = i.DOLLY;
            break;
          case Fi.ROTATE:
            if (D.ctrlKey || D.metaKey || D.shiftKey) {
              if (n.enablePan === false) return;
              H(D), r = i.PAN;
            } else {
              if (n.enableRotate === false) return;
              ie(D), r = i.ROTATE;
            }
            break;
          case Fi.PAN:
            if (D.ctrlKey || D.metaKey || D.shiftKey) {
              if (n.enableRotate === false) return;
              ie(D), r = i.ROTATE;
            } else {
              if (n.enablePan === false) return;
              H(D), r = i.PAN;
            }
            break;
          default:
            r = i.NONE;
        }
        r !== i.NONE && n.dispatchEvent(pa);
      }
      function Ke(D) {
        switch (r) {
          case i.ROTATE:
            if (n.enableRotate === false) return;
            he(D);
            break;
          case i.DOLLY:
            if (n.enableZoom === false) return;
            se(D);
            break;
          case i.PAN:
            if (n.enablePan === false) return;
            Se(D);
            break;
        }
      }
      function Wt(D) {
        n.enabled === false || n.enableZoom === false || r !== i.NONE || (D.preventDefault(), n.dispatchEvent(pa), q(D), n.dispatchEvent(Nh));
      }
      function kt(D) {
        n.enabled === false || n.enablePan === false || re(D);
      }
      function L(D) {
        switch (fe(D), P.length) {
          case 1:
            switch (n.touches.ONE) {
              case Ui.ROTATE:
                if (n.enableRotate === false) return;
                ne(), r = i.TOUCH_ROTATE;
                break;
              case Ui.PAN:
                if (n.enablePan === false) return;
                oe(), r = i.TOUCH_PAN;
                break;
              default:
                r = i.NONE;
            }
            break;
          case 2:
            switch (n.touches.TWO) {
              case Ui.DOLLY_PAN:
                if (n.enableZoom === false && n.enablePan === false) return;
                De(), r = i.TOUCH_DOLLY_PAN;
                break;
              case Ui.DOLLY_ROTATE:
                if (n.enableZoom === false && n.enableRotate === false) return;
                xe(), r = i.TOUCH_DOLLY_ROTATE;
                break;
              default:
                r = i.NONE;
            }
            break;
          default:
            r = i.NONE;
        }
        r !== i.NONE && n.dispatchEvent(pa);
      }
      function T(D) {
        switch (fe(D), r) {
          case i.TOUCH_ROTATE:
            if (n.enableRotate === false) return;
            ye(D), n.update();
            break;
          case i.TOUCH_PAN:
            if (n.enablePan === false) return;
            me(D), n.update();
            break;
          case i.TOUCH_DOLLY_PAN:
            if (n.enableZoom === false && n.enablePan === false) return;
            Ie(D), n.update();
            break;
          case i.TOUCH_DOLLY_ROTATE:
            if (n.enableZoom === false && n.enableRotate === false) return;
            Te(D), n.update();
            break;
          default:
            r = i.NONE;
        }
      }
      function K(D) {
        n.enabled !== false && D.preventDefault();
      }
      function ce(D) {
        P.push(D);
      }
      function ue(D) {
        delete N[D.pointerId];
        for (let B = 0; B < P.length; B++) if (P[B].pointerId == D.pointerId) {
          P.splice(B, 1);
          return;
        }
      }
      function fe(D) {
        let B = N[D.pointerId];
        B === void 0 && (B = new ke(), N[D.pointerId] = B), B.set(D.pageX, D.pageY);
      }
      function Ae(D) {
        const B = D.pointerId === P[0].pointerId ? P[1] : P[0];
        return N[B.pointerId];
      }
      n.domElement.addEventListener("contextmenu", K), n.domElement.addEventListener("pointerdown", pt), n.domElement.addEventListener("pointercancel", gt), n.domElement.addEventListener("wheel", Wt, {
        passive: false
      }), this.update();
    }
  }
  const Fx = {}, Oh = (o) => {
    let e;
    const t = /* @__PURE__ */ new Set(), n = (f, m) => {
      const g = typeof f == "function" ? f(e) : f;
      if (!Object.is(g, e)) {
        const b = e;
        e = m ?? (typeof g != "object" || g === null) ? g : Object.assign({}, e, g), t.forEach((y) => y(e, b));
      }
    }, i = () => e, u = {
      setState: n,
      getState: i,
      getInitialState: () => d,
      subscribe: (f) => (t.add(f), () => t.delete(f)),
      destroy: () => {
        (Fx ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), t.clear();
      }
    }, d = e = o(n, i, u);
    return u;
  }, so = (o) => o ? Oh(o) : Oh, Za = so(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
  })), rr = so(() => ({
    physicsReady: false,
    assetsReady: false,
    nippleReady: false
  })), Re = so(() => ({
    forward: false,
    backward: false,
    left: false,
    right: false
  }));
  class Ux {
    constructor() {
      this.app = new pn(), this.canvas = this.app.canvas, this.sizesStore = Za, this.sizes = this.sizesStore.getState(), this.setInstance(), this.setControls(), this.setResizeLister();
    }
    setInstance() {
      this.instance = new Ht(35, this.sizes.width / this.sizes.height, 1, 600), this.instance.position.z = 100, this.instance.position.y = 20;
    }
    setControls() {
      this.controls = new Ox(this.instance, this.canvas), this.controls.enableDamping = true, this.controls.enableRotate = false;
    }
    setResizeLister() {
      this.sizesStore.subscribe((e) => {
        this.instance.aspect = e.width / e.height, this.instance.updateProjectionMatrix();
      });
    }
    loop() {
      var _a2;
      if (this.controls.update(), this.characterController = (_a2 = this.app.world.characterController) == null ? void 0 : _a2.rigidBody, this.characterController) {
        const e = this.characterController.translation(), t = this.characterController.rotation(), n = new k(0, 28, 35);
        n.applyQuaternion(t), n.add(e);
        const i = new k(0, 8, 0);
        i.applyQuaternion(t), i.add(e), this.instance.position.lerp(n, 0.1), this.controls.target.lerp(i, 0.1);
      }
    }
  }
  class Bx {
    constructor() {
      this.app = new pn(), this.canvas = this.app.canvas, this.camera = this.app.camera, this.scene = this.app.scene, this.sizesStore = Za, this.sizes = this.sizesStore.getState(), this.setInstance(), this.setResizeLister();
    }
    setInstance() {
      this.instance = new Su({
        canvas: this.canvas,
        antialias: true
      }), this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(this.sizes.pixelRatio), this.instance.outputEncoding = tt, this.instance.shadowMap.enabled = true, this.instance.shadowMap.type = Zh, this.instance.toneMapping = tu, this.instance.toneMappingExposure = 0.8;
    }
    setResizeLister() {
      this.sizesStore.subscribe((e) => {
        this.instance.setSize(e.width, e.height), this.instance.setPixelRatio(e.pixelRatio);
      });
    }
    loop() {
      this.instance.render(this.scene, this.camera.instance);
    }
  }
  class Vx {
    constructor() {
      this.app = new pn(), this.camera = this.app.camera, this.renderer = this.app.renderer, this.world = this.app.world, this.clock = new wx(), this.previousElapsedTime = 0, this.loop();
    }
    loop() {
      const e = this.clock.getElapsedTime(), t = e - this.previousElapsedTime;
      this.previousElapsedTime = e, this.world.loop(t, e), this.camera.loop(t), this.renderer.loop(), window.requestAnimationFrame(() => this.loop());
    }
  }
  var Ys = {
    exports: {}
  };
  var zx = Ys.exports, Fh;
  function Gx() {
    return Fh || (Fh = 1, (function(o, e) {
      (function(t, n) {
        n(e);
      })(zx, (function(t) {
        class n {
          constructor(s) {
            const [a, p] = s.split("-"), x = a.split(".");
            this.major = parseInt(x[0], 10), this.minor = parseInt(x[1], 10), this.patch = parseInt(x[2], 10), this.prerelease = p ?? null;
          }
          toString() {
            const s = [
              this.major,
              this.minor,
              this.patch
            ].join(".");
            return this.prerelease !== null ? [
              s,
              this.prerelease
            ].join("-") : s;
          }
        }
        class i {
          constructor(s) {
            this.controller_ = s;
          }
          get element() {
            return this.controller_.view.element;
          }
          get disabled() {
            return this.controller_.viewProps.get("disabled");
          }
          set disabled(s) {
            this.controller_.viewProps.set("disabled", s);
          }
          get hidden() {
            return this.controller_.viewProps.get("hidden");
          }
          set hidden(s) {
            this.controller_.viewProps.set("hidden", s);
          }
          dispose() {
            this.controller_.viewProps.set("disposed", true);
          }
        }
        class r {
          constructor(s) {
            this.target = s;
          }
        }
        class l extends r {
          constructor(s, a, p, x) {
            super(s), this.value = a, this.presetKey = p, this.last = x ?? true;
          }
        }
        class c extends r {
          constructor(s, a, p) {
            super(s), this.value = a, this.presetKey = p;
          }
        }
        class u extends r {
          constructor(s, a) {
            super(s), this.expanded = a;
          }
        }
        class d extends r {
          constructor(s, a) {
            super(s), this.index = a;
          }
        }
        function f(h) {
          return h;
        }
        function m(h) {
          return h == null;
        }
        function g(h, s) {
          if (h.length !== s.length) return false;
          for (let a = 0; a < h.length; a++) if (h[a] !== s[a]) return false;
          return true;
        }
        function b(h, s) {
          let a = h;
          do {
            const p = Object.getOwnPropertyDescriptor(a, s);
            if (p && (p.set !== void 0 || p.writable === true)) return true;
            a = Object.getPrototypeOf(a);
          } while (a !== null);
          return false;
        }
        const y = {
          alreadydisposed: () => "View has been already disposed",
          invalidparams: (h) => `Invalid parameters for '${h.name}'`,
          nomatchingcontroller: (h) => `No matching controller for '${h.key}'`,
          nomatchingview: (h) => `No matching view for '${JSON.stringify(h.params)}'`,
          notbindable: () => "Value is not bindable",
          propertynotfound: (h) => `Property '${h.name}' not found`,
          shouldneverhappen: () => "This error should never happen"
        };
        class _ {
          static alreadyDisposed() {
            return new _({
              type: "alreadydisposed"
            });
          }
          static notBindable() {
            return new _({
              type: "notbindable"
            });
          }
          static propertyNotFound(s) {
            return new _({
              type: "propertynotfound",
              context: {
                name: s
              }
            });
          }
          static shouldNeverHappen() {
            return new _({
              type: "shouldneverhappen"
            });
          }
          constructor(s) {
            var a;
            this.message = (a = y[s.type](s.context)) !== null && a !== void 0 ? a : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = s.type;
          }
        }
        class v {
          constructor(s, a, p) {
            this.obj_ = s, this.key_ = a, this.presetKey_ = p ?? a;
          }
          static isBindable(s) {
            return !(s === null || typeof s != "object" && typeof s != "function");
          }
          get key() {
            return this.key_;
          }
          get presetKey() {
            return this.presetKey_;
          }
          read() {
            return this.obj_[this.key_];
          }
          write(s) {
            this.obj_[this.key_] = s;
          }
          writeProperty(s, a) {
            const p = this.read();
            if (!v.isBindable(p)) throw _.notBindable();
            if (!(s in p)) throw _.propertyNotFound(s);
            p[s] = a;
          }
        }
        class w extends i {
          get label() {
            return this.controller_.props.get("label");
          }
          set label(s) {
            this.controller_.props.set("label", s);
          }
          get title() {
            var s;
            return (s = this.controller_.valueController.props.get("title")) !== null && s !== void 0 ? s : "";
          }
          set title(s) {
            this.controller_.valueController.props.set("title", s);
          }
          on(s, a) {
            const p = a.bind(this);
            return this.controller_.valueController.emitter.on(s, () => {
              p(new r(this));
            }), this;
          }
        }
        class C {
          constructor() {
            this.observers_ = {};
          }
          on(s, a) {
            let p = this.observers_[s];
            return p || (p = this.observers_[s] = []), p.push({
              handler: a
            }), this;
          }
          off(s, a) {
            const p = this.observers_[s];
            return p && (this.observers_[s] = p.filter((x) => x.handler !== a)), this;
          }
          emit(s, a) {
            const p = this.observers_[s];
            p && p.forEach((x) => {
              x.handler(a);
            });
          }
        }
        const S = "tp";
        function M(h) {
          return (a, p) => [
            S,
            "-",
            h,
            "v",
            a ? `_${a}` : "",
            p ? `-${p}` : ""
          ].join("");
        }
        function P(h, s) {
          return (a) => s(h(a));
        }
        function N(h) {
          return h.rawValue;
        }
        function F(h, s) {
          h.emitter.on("change", P(N, s)), s(h.rawValue);
        }
        function E(h, s, a) {
          F(h.value(s), a);
        }
        function I(h, s, a) {
          a ? h.classList.add(s) : h.classList.remove(s);
        }
        function V(h, s) {
          return (a) => {
            I(h, s, a);
          };
        }
        function ee(h, s) {
          F(h, (a) => {
            s.textContent = a ?? "";
          });
        }
        const Q = M("btn");
        class W {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(Q()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("button");
            p.classList.add(Q("b")), a.viewProps.bindDisabled(p), this.element.appendChild(p), this.buttonElement = p;
            const x = s.createElement("div");
            x.classList.add(Q("t")), ee(a.props.value("title"), x), this.buttonElement.appendChild(x);
          }
        }
        class G {
          constructor(s, a) {
            this.emitter = new C(), this.onClick_ = this.onClick_.bind(this), this.props = a.props, this.viewProps = a.viewProps, this.view = new W(s, {
              props: this.props,
              viewProps: this.viewProps
            }), this.view.buttonElement.addEventListener("click", this.onClick_);
          }
          onClick_() {
            this.emitter.emit("click", {
              sender: this
            });
          }
        }
        class $ {
          constructor(s, a) {
            var p;
            this.constraint_ = a == null ? void 0 : a.constraint, this.equals_ = (p = a == null ? void 0 : a.equals) !== null && p !== void 0 ? p : ((x, R) => x === R), this.emitter = new C(), this.rawValue_ = s;
          }
          get constraint() {
            return this.constraint_;
          }
          get rawValue() {
            return this.rawValue_;
          }
          set rawValue(s) {
            this.setRawValue(s, {
              forceEmit: false,
              last: true
            });
          }
          setRawValue(s, a) {
            const p = a ?? {
              forceEmit: false,
              last: true
            }, x = this.constraint_ ? this.constraint_.constrain(s) : s, R = this.rawValue_;
            this.equals_(R, x) && !p.forceEmit || (this.emitter.emit("beforechange", {
              sender: this
            }), this.rawValue_ = x, this.emitter.emit("change", {
              options: p,
              previousRawValue: R,
              rawValue: x,
              sender: this
            }));
          }
        }
        class ie {
          constructor(s) {
            this.emitter = new C(), this.value_ = s;
          }
          get rawValue() {
            return this.value_;
          }
          set rawValue(s) {
            this.setRawValue(s, {
              forceEmit: false,
              last: true
            });
          }
          setRawValue(s, a) {
            const p = a ?? {
              forceEmit: false,
              last: true
            }, x = this.value_;
            x === s && !p.forceEmit || (this.emitter.emit("beforechange", {
              sender: this
            }), this.value_ = s, this.emitter.emit("change", {
              options: p,
              previousRawValue: x,
              rawValue: this.value_,
              sender: this
            }));
          }
        }
        function te(h, s) {
          const a = s == null ? void 0 : s.constraint, p = s == null ? void 0 : s.equals;
          return !a && !p ? new ie(h) : new $(h, s);
        }
        class H {
          constructor(s) {
            this.emitter = new C(), this.valMap_ = s;
            for (const a in this.valMap_) this.valMap_[a].emitter.on("change", () => {
              this.emitter.emit("change", {
                key: a,
                sender: this
              });
            });
          }
          static createCore(s) {
            return Object.keys(s).reduce((p, x) => Object.assign(p, {
              [x]: te(s[x])
            }), {});
          }
          static fromObject(s) {
            const a = this.createCore(s);
            return new H(a);
          }
          get(s) {
            return this.valMap_[s].rawValue;
          }
          set(s, a) {
            this.valMap_[s].rawValue = a;
          }
          value(s) {
            return this.valMap_[s];
          }
        }
        function he(h, s) {
          const p = Object.keys(s).reduce((x, R) => {
            if (x === void 0) return;
            const U = s[R], le = U(h[R]);
            return le.succeeded ? Object.assign(Object.assign({}, x), {
              [R]: le.value
            }) : void 0;
          }, {});
          return p;
        }
        function se(h, s) {
          return h.reduce((a, p) => {
            if (a === void 0) return;
            const x = s(p);
            if (!(!x.succeeded || x.value === void 0)) return [
              ...a,
              x.value
            ];
          }, []);
        }
        function Se(h) {
          return h === null ? false : typeof h == "object";
        }
        function q(h) {
          return (s) => (a) => {
            if (!s && a === void 0) return {
              succeeded: false,
              value: void 0
            };
            if (s && a === void 0) return {
              succeeded: true,
              value: void 0
            };
            const p = h(a);
            return p !== void 0 ? {
              succeeded: true,
              value: p
            } : {
              succeeded: false,
              value: void 0
            };
          };
        }
        function re(h) {
          return {
            custom: (s) => q(s)(h),
            boolean: q((s) => typeof s == "boolean" ? s : void 0)(h),
            number: q((s) => typeof s == "number" ? s : void 0)(h),
            string: q((s) => typeof s == "string" ? s : void 0)(h),
            function: q((s) => typeof s == "function" ? s : void 0)(h),
            constant: (s) => q((a) => a === s ? s : void 0)(h),
            raw: q((s) => s)(h),
            object: (s) => q((a) => {
              if (Se(a)) return he(a, s);
            })(h),
            array: (s) => q((a) => {
              if (Array.isArray(a)) return se(a, s);
            })(h)
          };
        }
        const ne = {
          optional: re(true),
          required: re(false)
        };
        function oe(h, s) {
          const a = ne.required.object(s)(h);
          return a.succeeded ? a.value : void 0;
        }
        function X(h) {
          console.warn([
            `Missing '${h.key}' of ${h.target} in ${h.place}.`,
            "Please rebuild plugins with the latest core package."
          ].join(" "));
        }
        function De(h) {
          return h && h.parentElement && h.parentElement.removeChild(h), null;
        }
        class xe {
          constructor(s) {
            this.value_ = s;
          }
          static create(s) {
            return [
              new xe(s),
              (a, p) => {
                s.setRawValue(a, p);
              }
            ];
          }
          get emitter() {
            return this.value_.emitter;
          }
          get rawValue() {
            return this.value_.rawValue;
          }
        }
        const ye = M("");
        function me(h, s) {
          return V(h, ye(void 0, s));
        }
        class Ue extends H {
          constructor(s) {
            var a;
            super(s), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = xe.create(te(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (a = this.get("parent")) === null || a === void 0 || a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
          }
          static create(s) {
            var a, p, x;
            const R = s ?? {};
            return new Ue(H.createCore({
              disabled: (a = R.disabled) !== null && a !== void 0 ? a : false,
              disposed: false,
              hidden: (p = R.hidden) !== null && p !== void 0 ? p : false,
              parent: (x = R.parent) !== null && x !== void 0 ? x : null
            }));
          }
          get globalDisabled() {
            return this.globalDisabled_;
          }
          bindClassModifiers(s) {
            F(this.globalDisabled_, me(s, "disabled")), E(this, "hidden", me(s, "hidden"));
          }
          bindDisabled(s) {
            F(this.globalDisabled_, (a) => {
              s.disabled = a;
            });
          }
          bindTabIndex(s) {
            F(this.globalDisabled_, (a) => {
              s.tabIndex = a ? -1 : 0;
            });
          }
          handleDispose(s) {
            this.value("disposed").emitter.on("change", (a) => {
              a && s();
            });
          }
          getGlobalDisabled_() {
            const s = this.get("parent");
            return (s ? s.globalDisabled.rawValue : false) || this.get("disabled");
          }
          updateGlobalDisabled_() {
            this.setGlobalDisabled_(this.getGlobalDisabled_());
          }
          onDisabledChange_() {
            this.updateGlobalDisabled_();
          }
          onParentGlobalDisabledChange_() {
            this.updateGlobalDisabled_();
          }
          onParentChange_(s) {
            var a;
            const p = s.previousRawValue;
            p == null ? void 0 : p.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (a = this.get("parent")) === null || a === void 0 || a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
          }
        }
        function Ie() {
          return [
            "veryfirst",
            "first",
            "last",
            "verylast"
          ];
        }
        const Te = M(""), pt = {
          veryfirst: "vfst",
          first: "fst",
          last: "lst",
          verylast: "vlst"
        };
        class dt {
          constructor(s) {
            this.parent_ = null, this.blade = s.blade, this.view = s.view, this.viewProps = s.viewProps;
            const a = this.view.element;
            this.blade.value("positions").emitter.on("change", () => {
              Ie().forEach((p) => {
                a.classList.remove(Te(void 0, pt[p]));
              }), this.blade.get("positions").forEach((p) => {
                a.classList.add(Te(void 0, pt[p]));
              });
            }), this.viewProps.handleDispose(() => {
              De(a);
            });
          }
          get parent() {
            return this.parent_;
          }
          set parent(s) {
            if (this.parent_ = s, !("parent" in this.viewProps.valMap_)) {
              X({
                key: "parent",
                target: Ue.name,
                place: "BladeController.parent"
              });
              return;
            }
            this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
          }
        }
        const Qe = "http://www.w3.org/2000/svg";
        function gt(h) {
          h.offsetHeight;
        }
        function ct(h, s) {
          const a = h.style.transition;
          h.style.transition = "none", s(), h.style.transition = a;
        }
        function Ke(h) {
          return h.ontouchstart !== void 0;
        }
        function Wt() {
          return globalThis;
        }
        function kt() {
          return Wt().document;
        }
        function L(h) {
          const s = h.ownerDocument.defaultView;
          return s && "document" in s ? h.getContext("2d", {
            willReadFrequently: true
          }) : null;
        }
        const T = {
          check: '<path d="M2 8l4 4l8 -8"/>',
          dropdown: '<path d="M5 7h6l-3 3 z"/>',
          p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
        };
        function K(h, s) {
          const a = h.createElementNS(Qe, "svg");
          return a.innerHTML = T[s], a;
        }
        function ce(h, s, a) {
          h.insertBefore(s, h.children[a]);
        }
        function ue(h) {
          h.parentElement && h.parentElement.removeChild(h);
        }
        function fe(h) {
          for (; h.children.length > 0; ) h.removeChild(h.children[0]);
        }
        function Ae(h) {
          for (; h.childNodes.length > 0; ) h.removeChild(h.childNodes[0]);
        }
        function D(h) {
          return h.relatedTarget ? h.relatedTarget : "explicitOriginalTarget" in h ? h.explicitOriginalTarget : null;
        }
        const B = M("lbl");
        function ge(h, s) {
          const a = h.createDocumentFragment();
          return s.split(`
`).map((x) => h.createTextNode(x)).forEach((x, R) => {
            R > 0 && a.appendChild(h.createElement("br")), a.appendChild(x);
          }), a;
        }
        class _e {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(B()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("div");
            p.classList.add(B("l")), E(a.props, "label", (R) => {
              m(R) ? this.element.classList.add(B(void 0, "nol")) : (this.element.classList.remove(B(void 0, "nol")), Ae(p), p.appendChild(ge(s, R)));
            }), this.element.appendChild(p), this.labelElement = p;
            const x = s.createElement("div");
            x.classList.add(B("v")), this.element.appendChild(x), this.valueElement = x;
          }
        }
        class pe extends dt {
          constructor(s, a) {
            const p = a.valueController.viewProps;
            super(Object.assign(Object.assign({}, a), {
              view: new _e(s, {
                props: a.props,
                viewProps: p
              }),
              viewProps: p
            })), this.props = a.props, this.valueController = a.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
          }
        }
        const we = {
          id: "button",
          type: "blade",
          accept(h) {
            const s = ne, a = oe(h, {
              title: s.required.string,
              view: s.required.constant("button"),
              label: s.optional.string
            });
            return a ? {
              params: a
            } : null;
          },
          controller(h) {
            return new pe(h.document, {
              blade: h.blade,
              props: H.fromObject({
                label: h.params.label
              }),
              valueController: new G(h.document, {
                props: H.fromObject({
                  title: h.params.title
                }),
                viewProps: h.viewProps
              })
            });
          },
          api(h) {
            return !(h.controller instanceof pe) || !(h.controller.valueController instanceof G) ? null : new w(h.controller);
          }
        };
        class be extends dt {
          constructor(s) {
            super(s), this.value = s.value;
          }
        }
        function Ne() {
          return new H({
            positions: te([], {
              equals: g
            })
          });
        }
        class Oe extends H {
          constructor(s) {
            super(s);
          }
          static create(s) {
            const a = {
              completed: true,
              expanded: s,
              expandedHeight: null,
              shouldFixHeight: false,
              temporaryExpanded: null
            }, p = H.createCore(a);
            return new Oe(p);
          }
          get styleExpanded() {
            var s;
            return (s = this.get("temporaryExpanded")) !== null && s !== void 0 ? s : this.get("expanded");
          }
          get styleHeight() {
            if (!this.styleExpanded) return "0";
            const s = this.get("expandedHeight");
            return this.get("shouldFixHeight") && !m(s) ? `${s}px` : "auto";
          }
          bindExpandedClass(s, a) {
            const p = () => {
              this.styleExpanded ? s.classList.add(a) : s.classList.remove(a);
            };
            E(this, "expanded", p), E(this, "temporaryExpanded", p);
          }
          cleanUpTransition() {
            this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
          }
        }
        function nt(h, s) {
          let a = 0;
          return ct(s, () => {
            h.set("expandedHeight", null), h.set("temporaryExpanded", true), gt(s), a = s.clientHeight, h.set("temporaryExpanded", null), gt(s);
          }), a;
        }
        function O(h, s) {
          s.style.height = h.styleHeight;
        }
        function Y(h, s) {
          h.value("expanded").emitter.on("beforechange", () => {
            if (h.set("completed", false), m(h.get("expandedHeight"))) {
              const a = nt(h, s);
              a > 0 && h.set("expandedHeight", a);
            }
            h.set("shouldFixHeight", true), gt(s);
          }), h.emitter.on("change", () => {
            O(h, s);
          }), O(h, s), s.addEventListener("transitionend", (a) => {
            a.propertyName === "height" && h.cleanUpTransition();
          });
        }
        class ae extends i {
          constructor(s, a) {
            super(s), this.rackApi_ = a;
          }
        }
        function ve(h, s) {
          return h.addBlade(Object.assign(Object.assign({}, s), {
            view: "button"
          }));
        }
        function Me(h, s) {
          return h.addBlade(Object.assign(Object.assign({}, s), {
            view: "folder"
          }));
        }
        function Ze(h, s) {
          const a = s ?? {};
          return h.addBlade(Object.assign(Object.assign({}, a), {
            view: "separator"
          }));
        }
        function _t(h, s) {
          return h.addBlade(Object.assign(Object.assign({}, s), {
            view: "tab"
          }));
        }
        class vt {
          constructor(s) {
            this.emitter = new C(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = s;
          }
          get items() {
            return this.items_;
          }
          allItems() {
            return Array.from(this.cache_);
          }
          find(s) {
            for (const a of this.allItems()) if (s(a)) return a;
            return null;
          }
          includes(s) {
            return this.cache_.has(s);
          }
          add(s, a) {
            if (this.includes(s)) throw _.shouldNeverHappen();
            const p = a !== void 0 ? a : this.items_.length;
            this.items_.splice(p, 0, s), this.cache_.add(s);
            const x = this.extract_(s);
            x && (x.emitter.on("add", this.onSubListAdd_), x.emitter.on("remove", this.onSubListRemove_), x.allItems().forEach((R) => {
              this.cache_.add(R);
            })), this.emitter.emit("add", {
              index: p,
              item: s,
              root: this,
              target: this
            });
          }
          remove(s) {
            const a = this.items_.indexOf(s);
            if (a < 0) return;
            this.items_.splice(a, 1), this.cache_.delete(s);
            const p = this.extract_(s);
            p && (p.emitter.off("add", this.onSubListAdd_), p.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", {
              index: a,
              item: s,
              root: this,
              target: this
            });
          }
          onSubListAdd_(s) {
            this.cache_.add(s.item), this.emitter.emit("add", {
              index: s.index,
              item: s.item,
              root: this,
              target: s.target
            });
          }
          onSubListRemove_(s) {
            this.cache_.delete(s.item), this.emitter.emit("remove", {
              index: s.index,
              item: s.item,
              root: this,
              target: s.target
            });
          }
        }
        class an extends i {
          constructor(s) {
            super(s), this.onBindingChange_ = this.onBindingChange_.bind(this), this.emitter_ = new C(), this.controller_.binding.emitter.on("change", this.onBindingChange_);
          }
          get label() {
            return this.controller_.props.get("label");
          }
          set label(s) {
            this.controller_.props.set("label", s);
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
          refresh() {
            this.controller_.binding.read();
          }
          onBindingChange_(s) {
            const a = s.sender.target.read();
            this.emitter_.emit("change", {
              event: new l(this, a, this.controller_.binding.target.presetKey, s.options.last)
            });
          }
        }
        class Ye extends pe {
          constructor(s, a) {
            super(s, a), this.binding = a.binding;
          }
        }
        class Xt extends i {
          constructor(s) {
            super(s), this.onBindingUpdate_ = this.onBindingUpdate_.bind(this), this.emitter_ = new C(), this.controller_.binding.emitter.on("update", this.onBindingUpdate_);
          }
          get label() {
            return this.controller_.props.get("label");
          }
          set label(s) {
            this.controller_.props.set("label", s);
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
          refresh() {
            this.controller_.binding.read();
          }
          onBindingUpdate_(s) {
            const a = s.sender.target.read();
            this.emitter_.emit("update", {
              event: new c(this, a, this.controller_.binding.target.presetKey)
            });
          }
        }
        class ft extends pe {
          constructor(s, a) {
            super(s, a), this.binding = a.binding, this.viewProps.bindDisabled(this.binding.ticker), this.viewProps.handleDispose(() => {
              this.binding.dispose();
            });
          }
        }
        function lr(h) {
          return h instanceof Ti ? h.apiSet_ : h instanceof ae ? h.rackApi_.apiSet_ : null;
        }
        function ti(h, s) {
          const a = h.find((p) => p.controller_ === s);
          if (!a) throw _.shouldNeverHappen();
          return a;
        }
        function cr(h, s, a) {
          if (!v.isBindable(h)) throw _.notBindable();
          return new v(h, s, a);
        }
        class Ti extends i {
          constructor(s, a) {
            super(s), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.onRackInputChange_ = this.onRackInputChange_.bind(this), this.onRackMonitorUpdate_ = this.onRackMonitorUpdate_.bind(this), this.emitter_ = new C(), this.apiSet_ = new vt(lr), this.pool_ = a;
            const p = this.controller_.rack;
            p.emitter.on("add", this.onRackAdd_), p.emitter.on("remove", this.onRackRemove_), p.emitter.on("inputchange", this.onRackInputChange_), p.emitter.on("monitorupdate", this.onRackMonitorUpdate_), p.children.forEach((x) => {
              this.setUpApi_(x);
            });
          }
          get children() {
            return this.controller_.rack.children.map((s) => ti(this.apiSet_, s));
          }
          addInput(s, a, p) {
            const x = p ?? {}, R = this.controller_.view.element.ownerDocument, U = this.pool_.createInput(R, cr(s, a, x.presetKey), x), le = new an(U);
            return this.add(le, x.index);
          }
          addMonitor(s, a, p) {
            const x = p ?? {}, R = this.controller_.view.element.ownerDocument, U = this.pool_.createMonitor(R, cr(s, a), x), le = new Xt(U);
            return this.add(le, x.index);
          }
          addFolder(s) {
            return Me(this, s);
          }
          addButton(s) {
            return ve(this, s);
          }
          addSeparator(s) {
            return Ze(this, s);
          }
          addTab(s) {
            return _t(this, s);
          }
          add(s, a) {
            this.controller_.rack.add(s.controller_, a);
            const p = this.apiSet_.find((x) => x.controller_ === s.controller_);
            return p && this.apiSet_.remove(p), this.apiSet_.add(s), s;
          }
          remove(s) {
            this.controller_.rack.remove(s.controller_);
          }
          addBlade(s) {
            const a = this.controller_.view.element.ownerDocument, p = this.pool_.createBlade(a, s), x = this.pool_.createBladeApi(p);
            return this.add(x, s.index);
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
          setUpApi_(s) {
            this.apiSet_.find((p) => p.controller_ === s) || this.apiSet_.add(this.pool_.createBladeApi(s));
          }
          onRackAdd_(s) {
            this.setUpApi_(s.bladeController);
          }
          onRackRemove_(s) {
            if (s.isRoot) {
              const a = ti(this.apiSet_, s.bladeController);
              this.apiSet_.remove(a);
            }
          }
          onRackInputChange_(s) {
            const a = s.bladeController;
            if (a instanceof Ye) {
              const p = ti(this.apiSet_, a), x = a.binding;
              this.emitter_.emit("change", {
                event: new l(p, x.target.read(), x.target.presetKey, s.options.last)
              });
            } else if (a instanceof be) {
              const p = ti(this.apiSet_, a);
              this.emitter_.emit("change", {
                event: new l(p, a.value.rawValue, void 0, s.options.last)
              });
            }
          }
          onRackMonitorUpdate_(s) {
            if (!(s.bladeController instanceof ft)) throw _.shouldNeverHappen();
            const a = ti(this.apiSet_, s.bladeController), p = s.bladeController.binding;
            this.emitter_.emit("update", {
              event: new c(a, p.target.read(), p.target.presetKey)
            });
          }
        }
        class A extends ae {
          constructor(s, a) {
            super(s, new Ti(s.rackController, a)), this.emitter_ = new C(), this.controller_.foldable.value("expanded").emitter.on("change", (p) => {
              this.emitter_.emit("fold", {
                event: new u(this, p.sender.rawValue)
              });
            }), this.rackApi_.on("change", (p) => {
              this.emitter_.emit("change", {
                event: p
              });
            }), this.rackApi_.on("update", (p) => {
              this.emitter_.emit("update", {
                event: p
              });
            });
          }
          get expanded() {
            return this.controller_.foldable.get("expanded");
          }
          set expanded(s) {
            this.controller_.foldable.set("expanded", s);
          }
          get title() {
            return this.controller_.props.get("title");
          }
          set title(s) {
            this.controller_.props.set("title", s);
          }
          get children() {
            return this.rackApi_.children;
          }
          addInput(s, a, p) {
            return this.rackApi_.addInput(s, a, p);
          }
          addMonitor(s, a, p) {
            return this.rackApi_.addMonitor(s, a, p);
          }
          addFolder(s) {
            return this.rackApi_.addFolder(s);
          }
          addButton(s) {
            return this.rackApi_.addButton(s);
          }
          addSeparator(s) {
            return this.rackApi_.addSeparator(s);
          }
          addTab(s) {
            return this.rackApi_.addTab(s);
          }
          add(s, a) {
            return this.rackApi_.add(s, a);
          }
          remove(s) {
            this.rackApi_.remove(s);
          }
          addBlade(s) {
            return this.rackApi_.addBlade(s);
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
        }
        class j extends dt {
          constructor(s) {
            super({
              blade: s.blade,
              view: s.view,
              viewProps: s.rackController.viewProps
            }), this.rackController = s.rackController;
          }
        }
        class Z {
          constructor(s, a) {
            const p = M(a.viewName);
            this.element = s.createElement("div"), this.element.classList.add(p()), a.viewProps.bindClassModifiers(this.element);
          }
        }
        function z(h, s) {
          for (let a = 0; a < h.length; a++) {
            const p = h[a];
            if (p instanceof Ye && p.binding === s) return p;
          }
          return null;
        }
        function J(h, s) {
          for (let a = 0; a < h.length; a++) {
            const p = h[a];
            if (p instanceof ft && p.binding === s) return p;
          }
          return null;
        }
        function Ee(h, s) {
          for (let a = 0; a < h.length; a++) {
            const p = h[a];
            if (p instanceof be && p.value === s) return p;
          }
          return null;
        }
        function Le(h) {
          return h instanceof Ge ? h.rack : h instanceof j ? h.rackController.rack : null;
        }
        function Fe(h) {
          const s = Le(h);
          return s ? s.bcSet_ : null;
        }
        class Be {
          constructor(s) {
            var a, p;
            this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildInputChange_ = this.onChildInputChange_.bind(this), this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onDescendantLayout_ = this.onDescendantLayout_.bind(this), this.onDescendantInputChange_ = this.onDescendantInputChange_.bind(this), this.onDescendantMonitorUpdate_ = this.onDescendantMonitorUpdate_.bind(this), this.emitter = new C(), this.blade_ = (a = s.blade) !== null && a !== void 0 ? a : null, (p = this.blade_) === null || p === void 0 || p.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = s.viewProps, this.bcSet_ = new vt(Fe), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
          }
          get children() {
            return this.bcSet_.items;
          }
          add(s, a) {
            var p;
            (p = s.parent) === null || p === void 0 || p.remove(s), b(s, "parent") ? s.parent = this : (s.parent_ = this, X({
              key: "parent",
              target: "BladeController",
              place: "BladeRack.add"
            })), this.bcSet_.add(s, a);
          }
          remove(s) {
            b(s, "parent") ? s.parent = null : (s.parent_ = null, X({
              key: "parent",
              target: "BladeController",
              place: "BladeRack.remove"
            })), this.bcSet_.remove(s);
          }
          find(s) {
            return this.bcSet_.allItems().filter((a) => a instanceof s);
          }
          onSetAdd_(s) {
            this.updatePositions_();
            const a = s.target === s.root;
            if (this.emitter.emit("add", {
              bladeController: s.item,
              index: s.index,
              isRoot: a,
              sender: this
            }), !a) return;
            const p = s.item;
            if (p.viewProps.emitter.on("change", this.onChildViewPropsChange_), p.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), p.viewProps.handleDispose(this.onChildDispose_), p instanceof Ye) p.binding.emitter.on("change", this.onChildInputChange_);
            else if (p instanceof ft) p.binding.emitter.on("update", this.onChildMonitorUpdate_);
            else if (p instanceof be) p.value.emitter.on("change", this.onChildValueChange_);
            else {
              const x = Le(p);
              if (x) {
                const R = x.emitter;
                R.on("layout", this.onDescendantLayout_), R.on("inputchange", this.onDescendantInputChange_), R.on("monitorupdate", this.onDescendantMonitorUpdate_);
              }
            }
          }
          onSetRemove_(s) {
            this.updatePositions_();
            const a = s.target === s.root;
            if (this.emitter.emit("remove", {
              bladeController: s.item,
              isRoot: a,
              sender: this
            }), !a) return;
            const p = s.item;
            if (p instanceof Ye) p.binding.emitter.off("change", this.onChildInputChange_);
            else if (p instanceof ft) p.binding.emitter.off("update", this.onChildMonitorUpdate_);
            else if (p instanceof be) p.value.emitter.off("change", this.onChildValueChange_);
            else {
              const x = Le(p);
              if (x) {
                const R = x.emitter;
                R.off("layout", this.onDescendantLayout_), R.off("inputchange", this.onDescendantInputChange_), R.off("monitorupdate", this.onDescendantMonitorUpdate_);
              }
            }
          }
          updatePositions_() {
            const s = this.bcSet_.items.filter((x) => !x.viewProps.get("hidden")), a = s[0], p = s[s.length - 1];
            this.bcSet_.items.forEach((x) => {
              const R = [];
              x === a && (R.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && R.push("veryfirst")), x === p && (R.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && R.push("verylast")), x.blade.set("positions", R);
            });
          }
          onChildPositionsChange_() {
            this.updatePositions_(), this.emitter.emit("layout", {
              sender: this
            });
          }
          onChildViewPropsChange_(s) {
            this.updatePositions_(), this.emitter.emit("layout", {
              sender: this
            });
          }
          onChildDispose_() {
            this.bcSet_.items.filter((a) => a.viewProps.get("disposed")).forEach((a) => {
              this.bcSet_.remove(a);
            });
          }
          onChildInputChange_(s) {
            const a = z(this.find(Ye), s.sender);
            if (!a) throw _.alreadyDisposed();
            this.emitter.emit("inputchange", {
              bladeController: a,
              options: s.options,
              sender: this
            });
          }
          onChildMonitorUpdate_(s) {
            const a = J(this.find(ft), s.sender);
            if (!a) throw _.alreadyDisposed();
            this.emitter.emit("monitorupdate", {
              bladeController: a,
              sender: this
            });
          }
          onChildValueChange_(s) {
            const a = Ee(this.find(be), s.sender);
            if (!a) throw _.alreadyDisposed();
            this.emitter.emit("inputchange", {
              bladeController: a,
              options: s.options,
              sender: this
            });
          }
          onDescendantLayout_(s) {
            this.updatePositions_(), this.emitter.emit("layout", {
              sender: this
            });
          }
          onDescendantInputChange_(s) {
            this.emitter.emit("inputchange", {
              bladeController: s.bladeController,
              options: s.options,
              sender: this
            });
          }
          onDescendantMonitorUpdate_(s) {
            this.emitter.emit("monitorupdate", {
              bladeController: s.bladeController,
              sender: this
            });
          }
          onBladePositionsChange_() {
            this.updatePositions_();
          }
        }
        class Ge extends dt {
          constructor(s, a) {
            super(Object.assign(Object.assign({}, a), {
              view: new Z(s, {
                viewName: "brk",
                viewProps: a.viewProps
              })
            })), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
            const p = new Be({
              blade: a.root ? void 0 : a.blade,
              viewProps: a.viewProps
            });
            p.emitter.on("add", this.onRackAdd_), p.emitter.on("remove", this.onRackRemove_), this.rack = p, this.viewProps.handleDispose(() => {
              for (let x = this.rack.children.length - 1; x >= 0; x--) this.rack.children[x].viewProps.set("disposed", true);
            });
          }
          onRackAdd_(s) {
            s.isRoot && ce(this.view.element, s.bladeController.view.element, s.index);
          }
          onRackRemove_(s) {
            s.isRoot && ue(s.bladeController.view.element);
          }
        }
        const We = M("cnt");
        class qe {
          constructor(s, a) {
            var p;
            this.className_ = M((p = a.viewName) !== null && p !== void 0 ? p : "fld"), this.element = s.createElement("div"), this.element.classList.add(this.className_(), We()), a.viewProps.bindClassModifiers(this.element), this.foldable_ = a.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), E(this.foldable_, "completed", V(this.element, this.className_(void 0, "cpl")));
            const x = s.createElement("button");
            x.classList.add(this.className_("b")), E(a.props, "title", (Pe) => {
              m(Pe) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
            }), a.viewProps.bindDisabled(x), this.element.appendChild(x), this.buttonElement = x;
            const R = s.createElement("div");
            R.classList.add(this.className_("i")), this.element.appendChild(R);
            const U = s.createElement("div");
            U.classList.add(this.className_("t")), ee(a.props.value("title"), U), this.buttonElement.appendChild(U), this.titleElement = U;
            const le = s.createElement("div");
            le.classList.add(this.className_("m")), this.buttonElement.appendChild(le);
            const Ce = a.containerElement;
            Ce.classList.add(this.className_("c")), this.element.appendChild(Ce), this.containerElement = Ce;
          }
        }
        class at extends j {
          constructor(s, a) {
            var p;
            const x = Oe.create((p = a.expanded) !== null && p !== void 0 ? p : true), R = new Ge(s, {
              blade: a.blade,
              root: a.root,
              viewProps: a.viewProps
            });
            super(Object.assign(Object.assign({}, a), {
              rackController: R,
              view: new qe(s, {
                containerElement: R.view.element,
                foldable: x,
                props: a.props,
                viewName: a.root ? "rot" : void 0,
                viewProps: a.viewProps
              })
            })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = a.props, this.foldable = x, Y(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
              this.foldable.cleanUpTransition();
            }), this.rackController.rack.emitter.on("remove", () => {
              this.foldable.cleanUpTransition();
            }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
          }
          get document() {
            return this.view.element.ownerDocument;
          }
          onTitleClick_() {
            this.foldable.set("expanded", !this.foldable.get("expanded"));
          }
        }
        const Ut = {
          id: "folder",
          type: "blade",
          accept(h) {
            const s = ne, a = oe(h, {
              title: s.required.string,
              view: s.required.constant("folder"),
              expanded: s.optional.boolean
            });
            return a ? {
              params: a
            } : null;
          },
          controller(h) {
            return new at(h.document, {
              blade: h.blade,
              expanded: h.params.expanded,
              props: H.fromObject({
                title: h.params.title
              }),
              viewProps: h.viewProps
            });
          },
          api(h) {
            return h.controller instanceof at ? new A(h.controller, h.pool) : null;
          }
        };
        class Nt extends be {
          constructor(s, a) {
            const p = a.valueController.viewProps;
            super(Object.assign(Object.assign({}, a), {
              value: a.valueController.value,
              view: new _e(s, {
                props: a.props,
                viewProps: p
              }),
              viewProps: p
            })), this.props = a.props, this.valueController = a.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
          }
        }
        class fn extends i {
        }
        const ht = M("spr");
        class Xe {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(ht()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("hr");
            p.classList.add(ht("r")), this.element.appendChild(p);
          }
        }
        class Ci extends dt {
          constructor(s, a) {
            super(Object.assign(Object.assign({}, a), {
              view: new Xe(s, {
                viewProps: a.viewProps
              })
            }));
          }
        }
        const bt = {
          id: "separator",
          type: "blade",
          accept(h) {
            const a = oe(h, {
              view: ne.required.constant("separator")
            });
            return a ? {
              params: a
            } : null;
          },
          controller(h) {
            return new Ci(h.document, {
              blade: h.blade,
              viewProps: h.viewProps
            });
          },
          api(h) {
            return h.controller instanceof Ci ? new fn(h.controller) : null;
          }
        }, Kt = M("tbi");
        class hr {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(Kt()), a.viewProps.bindClassModifiers(this.element), E(a.props, "selected", (R) => {
              R ? this.element.classList.add(Kt(void 0, "sel")) : this.element.classList.remove(Kt(void 0, "sel"));
            });
            const p = s.createElement("button");
            p.classList.add(Kt("b")), a.viewProps.bindDisabled(p), this.element.appendChild(p), this.buttonElement = p;
            const x = s.createElement("div");
            x.classList.add(Kt("t")), ee(a.props.value("title"), x), this.buttonElement.appendChild(x), this.titleElement = x;
          }
        }
        class ni {
          constructor(s, a) {
            this.emitter = new C(), this.onClick_ = this.onClick_.bind(this), this.props = a.props, this.viewProps = a.viewProps, this.view = new hr(s, {
              props: a.props,
              viewProps: a.viewProps
            }), this.view.buttonElement.addEventListener("click", this.onClick_);
          }
          onClick_() {
            this.emitter.emit("click", {
              sender: this
            });
          }
        }
        class Ai {
          constructor(s, a) {
            this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new ni(s, {
              props: a.itemProps,
              viewProps: Ue.create()
            }), this.ic_.emitter.on("click", this.onItemClick_), this.cc_ = new Ge(s, {
              blade: Ne(),
              viewProps: Ue.create()
            }), this.props = a.props, E(this.props, "selected", (p) => {
              this.itemController.props.set("selected", p), this.contentController.viewProps.set("hidden", !p);
            });
          }
          get itemController() {
            return this.ic_;
          }
          get contentController() {
            return this.cc_;
          }
          onItemClick_() {
            this.props.set("selected", true);
          }
        }
        class Tt {
          constructor(s, a) {
            this.controller_ = s, this.rackApi_ = a;
          }
          get title() {
            var s;
            return (s = this.controller_.itemController.props.get("title")) !== null && s !== void 0 ? s : "";
          }
          set title(s) {
            this.controller_.itemController.props.set("title", s);
          }
          get selected() {
            return this.controller_.props.get("selected");
          }
          set selected(s) {
            this.controller_.props.set("selected", s);
          }
          get children() {
            return this.rackApi_.children;
          }
          addButton(s) {
            return this.rackApi_.addButton(s);
          }
          addFolder(s) {
            return this.rackApi_.addFolder(s);
          }
          addSeparator(s) {
            return this.rackApi_.addSeparator(s);
          }
          addTab(s) {
            return this.rackApi_.addTab(s);
          }
          add(s, a) {
            this.rackApi_.add(s, a);
          }
          remove(s) {
            this.rackApi_.remove(s);
          }
          addInput(s, a, p) {
            return this.rackApi_.addInput(s, a, p);
          }
          addMonitor(s, a, p) {
            return this.rackApi_.addMonitor(s, a, p);
          }
          addBlade(s) {
            return this.rackApi_.addBlade(s);
          }
        }
        class mn extends ae {
          constructor(s, a) {
            super(s, new Ti(s.rackController, a)), this.onPageAdd_ = this.onPageAdd_.bind(this), this.onPageRemove_ = this.onPageRemove_.bind(this), this.onSelect_ = this.onSelect_.bind(this), this.emitter_ = new C(), this.pageApiMap_ = /* @__PURE__ */ new Map(), this.rackApi_.on("change", (p) => {
              this.emitter_.emit("change", {
                event: p
              });
            }), this.rackApi_.on("update", (p) => {
              this.emitter_.emit("update", {
                event: p
              });
            }), this.controller_.tab.selectedIndex.emitter.on("change", this.onSelect_), this.controller_.pageSet.emitter.on("add", this.onPageAdd_), this.controller_.pageSet.emitter.on("remove", this.onPageRemove_), this.controller_.pageSet.items.forEach((p) => {
              this.setUpPageApi_(p);
            });
          }
          get pages() {
            return this.controller_.pageSet.items.map((s) => {
              const a = this.pageApiMap_.get(s);
              if (!a) throw _.shouldNeverHappen();
              return a;
            });
          }
          addPage(s) {
            const a = this.controller_.view.element.ownerDocument, p = new Ai(a, {
              itemProps: H.fromObject({
                selected: false,
                title: s.title
              }),
              props: H.fromObject({
                selected: false
              })
            });
            this.controller_.add(p, s.index);
            const x = this.pageApiMap_.get(p);
            if (!x) throw _.shouldNeverHappen();
            return x;
          }
          removePage(s) {
            this.controller_.remove(s);
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
          setUpPageApi_(s) {
            const a = this.rackApi_.apiSet_.find((x) => x.controller_ === s.contentController);
            if (!a) throw _.shouldNeverHappen();
            const p = new Tt(s, a);
            this.pageApiMap_.set(s, p);
          }
          onPageAdd_(s) {
            this.setUpPageApi_(s.item);
          }
          onPageRemove_(s) {
            if (!this.pageApiMap_.get(s.item)) throw _.shouldNeverHappen();
            this.pageApiMap_.delete(s.item);
          }
          onSelect_(s) {
            this.emitter_.emit("select", {
              event: new d(this, s.rawValue)
            });
          }
        }
        const Pi = -1;
        class Bt {
          constructor() {
            this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = te(true), this.selectedIndex = te(Pi), this.items_ = [];
          }
          add(s, a) {
            const p = a ?? this.items_.length;
            this.items_.splice(p, 0, s), s.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
          }
          remove(s) {
            const a = this.items_.indexOf(s);
            a < 0 || (this.items_.splice(a, 1), s.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
          }
          keepSelection_() {
            if (this.items_.length === 0) {
              this.selectedIndex.rawValue = Pi, this.empty.rawValue = true;
              return;
            }
            const s = this.items_.findIndex((a) => a.rawValue);
            s < 0 ? (this.items_.forEach((a, p) => {
              a.rawValue = p === 0;
            }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((a, p) => {
              a.rawValue = p === s;
            }), this.selectedIndex.rawValue = s), this.empty.rawValue = false;
          }
          onItemSelectedChange_(s) {
            if (s.rawValue) {
              const a = this.items_.findIndex((p) => p === s.sender);
              this.items_.forEach((p, x) => {
                p.rawValue = x === a;
              }), this.selectedIndex.rawValue = a;
            } else this.keepSelection_();
          }
        }
        const xn = M("tab");
        class oo {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(xn(), We()), a.viewProps.bindClassModifiers(this.element), F(a.empty, V(this.element, xn(void 0, "nop")));
            const p = s.createElement("div");
            p.classList.add(xn("t")), this.element.appendChild(p), this.itemsElement = p;
            const x = s.createElement("div");
            x.classList.add(xn("i")), this.element.appendChild(x);
            const R = a.contentsElement;
            R.classList.add(xn("c")), this.element.appendChild(R), this.contentsElement = R;
          }
        }
        class ys extends j {
          constructor(s, a) {
            const p = new Ge(s, {
              blade: a.blade,
              viewProps: a.viewProps
            }), x = new Bt();
            super({
              blade: a.blade,
              rackController: p,
              view: new oo(s, {
                contentsElement: p.view.element,
                empty: x.empty,
                viewProps: a.viewProps
              })
            }), this.onPageAdd_ = this.onPageAdd_.bind(this), this.onPageRemove_ = this.onPageRemove_.bind(this), this.pageSet_ = new vt(() => null), this.pageSet_.emitter.on("add", this.onPageAdd_), this.pageSet_.emitter.on("remove", this.onPageRemove_), this.tab = x;
          }
          get pageSet() {
            return this.pageSet_;
          }
          add(s, a) {
            this.pageSet_.add(s, a);
          }
          remove(s) {
            this.pageSet_.remove(this.pageSet_.items[s]);
          }
          onPageAdd_(s) {
            const a = s.item;
            ce(this.view.itemsElement, a.itemController.view.element, s.index), a.itemController.viewProps.set("parent", this.viewProps), this.rackController.rack.add(a.contentController, s.index), this.tab.add(a.props.value("selected"));
          }
          onPageRemove_(s) {
            const a = s.item;
            ue(a.itemController.view.element), a.itemController.viewProps.set("parent", null), this.rackController.rack.remove(a.contentController), this.tab.remove(a.props.value("selected"));
          }
        }
        const Qa = {
          id: "tab",
          type: "blade",
          accept(h) {
            const s = ne, a = oe(h, {
              pages: s.required.array(s.required.object({
                title: s.required.string
              })),
              view: s.required.constant("tab")
            });
            return !a || a.pages.length === 0 ? null : {
              params: a
            };
          },
          controller(h) {
            const s = new ys(h.document, {
              blade: h.blade,
              viewProps: h.viewProps
            });
            return h.params.pages.forEach((a) => {
              const p = new Ai(h.document, {
                itemProps: H.fromObject({
                  selected: false,
                  title: a.title
                }),
                props: H.fromObject({
                  selected: false
                })
              });
              s.add(p);
            }), s;
          },
          api(h) {
            return h.controller instanceof ys ? new mn(h.controller, h.pool) : null;
          }
        };
        function Bu(h, s) {
          const a = h.accept(s.params);
          if (!a) return null;
          const p = ne.optional.boolean(s.params.disabled).value, x = ne.optional.boolean(s.params.hidden).value;
          return h.controller({
            blade: Ne(),
            document: s.document,
            params: Object.assign(Object.assign({}, a.params), {
              disabled: p,
              hidden: x
            }),
            viewProps: Ue.create({
              disabled: p,
              hidden: x
            })
          });
        }
        class Vu {
          constructor() {
            this.disabled = false, this.emitter = new C();
          }
          dispose() {
          }
          tick() {
            this.disabled || this.emitter.emit("tick", {
              sender: this
            });
          }
        }
        class zu {
          constructor(s, a) {
            this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = s, this.emitter = new C(), this.interval_ = a, this.setTimer_();
          }
          get disabled() {
            return this.disabled_;
          }
          set disabled(s) {
            this.disabled_ = s, this.disabled_ ? this.clearTimer_() : this.setTimer_();
          }
          dispose() {
            this.clearTimer_();
          }
          clearTimer_() {
            if (this.timerId_ === null) return;
            const s = this.doc_.defaultView;
            s && s.clearInterval(this.timerId_), this.timerId_ = null;
          }
          setTimer_() {
            if (this.clearTimer_(), this.interval_ <= 0) return;
            const s = this.doc_.defaultView;
            s && (this.timerId_ = s.setInterval(this.onTick_, this.interval_));
          }
          onTick_() {
            this.disabled_ || this.emitter.emit("tick", {
              sender: this
            });
          }
        }
        class Gu {
          constructor(s) {
            this.onValueChange_ = this.onValueChange_.bind(this), this.reader = s.reader, this.writer = s.writer, this.emitter = new C(), this.value = s.value, this.value.emitter.on("change", this.onValueChange_), this.target = s.target, this.read();
          }
          read() {
            const s = this.target.read();
            s !== void 0 && (this.value.rawValue = this.reader(s));
          }
          write_(s) {
            this.writer(this.target, s);
          }
          onValueChange_(s) {
            this.write_(s.rawValue), this.emitter.emit("change", {
              options: s.options,
              rawValue: s.rawValue,
              sender: this
            });
          }
        }
        function el(h, s) {
          for (; h.length < s; ) h.push(void 0);
        }
        function Hu(h) {
          const s = [];
          return el(s, h), te(s);
        }
        function Wu(h) {
          const s = h.indexOf(void 0);
          return s < 0 ? h : h.slice(0, s);
        }
        function ju(h, s) {
          const a = [
            ...Wu(h),
            s
          ];
          return a.length > h.length ? a.splice(0, a.length - h.length) : el(a, h.length), a;
        }
        class qu {
          constructor(s) {
            this.onTick_ = this.onTick_.bind(this), this.reader_ = s.reader, this.target = s.target, this.emitter = new C(), this.value = s.value, this.ticker = s.ticker, this.ticker.emitter.on("tick", this.onTick_), this.read();
          }
          dispose() {
            this.ticker.dispose();
          }
          read() {
            const s = this.target.read();
            if (s === void 0) return;
            const a = this.value.rawValue, p = this.reader_(s);
            this.value.rawValue = ju(a, p), this.emitter.emit("update", {
              rawValue: p,
              sender: this
            });
          }
          onTick_(s) {
            this.read();
          }
        }
        class ws {
          constructor(s) {
            this.constraints = s;
          }
          constrain(s) {
            return this.constraints.reduce((a, p) => p.constrain(a), s);
          }
        }
        function yn(h, s) {
          if (h instanceof s) return h;
          if (h instanceof ws) {
            const a = h.constraints.reduce((p, x) => p || (x instanceof s ? x : null), null);
            if (a) return a;
          }
          return null;
        }
        class Li {
          constructor(s) {
            this.values = H.fromObject({
              max: s.max,
              min: s.min
            });
          }
          constrain(s) {
            const a = this.values.get("max"), p = this.values.get("min");
            return Math.min(Math.max(s, p), a);
          }
        }
        class Ms {
          constructor(s) {
            this.values = H.fromObject({
              options: s
            });
          }
          get options() {
            return this.values.get("options");
          }
          constrain(s) {
            const a = this.values.get("options");
            return a.length === 0 || a.filter((x) => x.value === s).length > 0 ? s : a[0].value;
          }
        }
        class tl {
          constructor(s) {
            this.values = H.fromObject({
              max: s.max,
              min: s.min
            });
          }
          get maxValue() {
            return this.values.get("max");
          }
          get minValue() {
            return this.values.get("min");
          }
          constrain(s) {
            const a = this.values.get("max"), p = this.values.get("min");
            let x = s;
            return m(p) || (x = Math.max(x, p)), m(a) || (x = Math.min(x, a)), x;
          }
        }
        class ur {
          constructor(s, a = 0) {
            this.step = s, this.origin = a;
          }
          constrain(s) {
            const a = this.origin % this.step, p = Math.round((s - a) / this.step);
            return a + p * this.step;
          }
        }
        const ao = M("lst");
        class Xu {
          constructor(s, a) {
            this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = a.props, this.element = s.createElement("div"), this.element.classList.add(ao()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("select");
            p.classList.add(ao("s")), a.viewProps.bindDisabled(p), this.element.appendChild(p), this.selectElement = p;
            const x = s.createElement("div");
            x.classList.add(ao("m")), x.appendChild(K(s, "dropdown")), this.element.appendChild(x), a.value.emitter.on("change", this.onValueChange_), this.value_ = a.value, E(this.props_, "options", (R) => {
              fe(this.selectElement), R.forEach((U) => {
                const le = s.createElement("option");
                le.textContent = U.text, this.selectElement.appendChild(le);
              }), this.update_();
            });
          }
          update_() {
            const s = this.props_.get("options").map((a) => a.value);
            this.selectElement.selectedIndex = s.indexOf(this.value_.rawValue);
          }
          onValueChange_() {
            this.update_();
          }
        }
        class Ss {
          constructor(s, a) {
            this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = a.props, this.value = a.value, this.viewProps = a.viewProps, this.view = new Xu(s, {
              props: this.props,
              value: this.value,
              viewProps: this.viewProps
            }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
          }
          onSelectChange_(s) {
            const a = s.currentTarget;
            this.value.rawValue = this.props.get("options")[a.selectedIndex].value;
          }
        }
        const nl = M("pop");
        class Ku {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(nl()), a.viewProps.bindClassModifiers(this.element), F(a.shows, V(this.element, nl(void 0, "v")));
          }
        }
        class il {
          constructor(s, a) {
            this.shows = te(false), this.viewProps = a.viewProps, this.view = new Ku(s, {
              shows: this.shows,
              viewProps: this.viewProps
            });
          }
        }
        const sl = M("txt");
        class Yu {
          constructor(s, a) {
            this.onChange_ = this.onChange_.bind(this), this.element = s.createElement("div"), this.element.classList.add(sl()), a.viewProps.bindClassModifiers(this.element), this.props_ = a.props, this.props_.emitter.on("change", this.onChange_);
            const p = s.createElement("input");
            p.classList.add(sl("i")), p.type = "text", a.viewProps.bindDisabled(p), this.element.appendChild(p), this.inputElement = p, a.value.emitter.on("change", this.onChange_), this.value_ = a.value, this.refresh();
          }
          refresh() {
            const s = this.props_.get("formatter");
            this.inputElement.value = s(this.value_.rawValue);
          }
          onChange_() {
            this.refresh();
          }
        }
        class dr {
          constructor(s, a) {
            this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = a.parser, this.props = a.props, this.value = a.value, this.viewProps = a.viewProps, this.view = new Yu(s, {
              props: a.props,
              value: this.value,
              viewProps: this.viewProps
            }), this.view.inputElement.addEventListener("change", this.onInputChange_);
          }
          onInputChange_(s) {
            const p = s.currentTarget.value, x = this.parser_(p);
            m(x) || (this.value.rawValue = x), this.view.refresh();
          }
        }
        function $u(h) {
          return String(h);
        }
        function rl(h) {
          return h === "false" ? false : !!h;
        }
        function ol(h) {
          return $u(h);
        }
        class Zu {
          constructor(s) {
            this.text = s;
          }
          evaluate() {
            return Number(this.text);
          }
          toString() {
            return this.text;
          }
        }
        const Ju = {
          "**": (h, s) => Math.pow(h, s),
          "*": (h, s) => h * s,
          "/": (h, s) => h / s,
          "%": (h, s) => h % s,
          "+": (h, s) => h + s,
          "-": (h, s) => h - s,
          "<<": (h, s) => h << s,
          ">>": (h, s) => h >> s,
          ">>>": (h, s) => h >>> s,
          "&": (h, s) => h & s,
          "^": (h, s) => h ^ s,
          "|": (h, s) => h | s
        };
        class Qu {
          constructor(s, a, p) {
            this.left = a, this.operator = s, this.right = p;
          }
          evaluate() {
            const s = Ju[this.operator];
            if (!s) throw new Error(`unexpected binary operator: '${this.operator}`);
            return s(this.left.evaluate(), this.right.evaluate());
          }
          toString() {
            return [
              "b(",
              this.left.toString(),
              this.operator,
              this.right.toString(),
              ")"
            ].join(" ");
          }
        }
        const ed = {
          "+": (h) => h,
          "-": (h) => -h,
          "~": (h) => ~h
        };
        class td {
          constructor(s, a) {
            this.operator = s, this.expression = a;
          }
          evaluate() {
            const s = ed[this.operator];
            if (!s) throw new Error(`unexpected unary operator: '${this.operator}`);
            return s(this.expression.evaluate());
          }
          toString() {
            return [
              "u(",
              this.operator,
              this.expression.toString(),
              ")"
            ].join(" ");
          }
        }
        function lo(h) {
          return (s, a) => {
            for (let p = 0; p < h.length; p++) {
              const x = h[p](s, a);
              if (x !== "") return x;
            }
            return "";
          };
        }
        function Es(h, s) {
          var a;
          const p = h.substr(s).match(/^\s+/);
          return (a = p && p[0]) !== null && a !== void 0 ? a : "";
        }
        function nd(h, s) {
          const a = h.substr(s, 1);
          return a.match(/^[1-9]$/) ? a : "";
        }
        function Ts(h, s) {
          var a;
          const p = h.substr(s).match(/^[0-9]+/);
          return (a = p && p[0]) !== null && a !== void 0 ? a : "";
        }
        function id(h, s) {
          const a = Ts(h, s);
          if (a !== "") return a;
          const p = h.substr(s, 1);
          if (s += 1, p !== "-" && p !== "+") return "";
          const x = Ts(h, s);
          return x === "" ? "" : p + x;
        }
        function co(h, s) {
          const a = h.substr(s, 1);
          if (s += 1, a.toLowerCase() !== "e") return "";
          const p = id(h, s);
          return p === "" ? "" : a + p;
        }
        function al(h, s) {
          const a = h.substr(s, 1);
          if (a === "0") return a;
          const p = nd(h, s);
          return s += p.length, p === "" ? "" : p + Ts(h, s);
        }
        function sd(h, s) {
          const a = al(h, s);
          if (s += a.length, a === "") return "";
          const p = h.substr(s, 1);
          if (s += p.length, p !== ".") return "";
          const x = Ts(h, s);
          return s += x.length, a + p + x + co(h, s);
        }
        function rd(h, s) {
          const a = h.substr(s, 1);
          if (s += a.length, a !== ".") return "";
          const p = Ts(h, s);
          return s += p.length, p === "" ? "" : a + p + co(h, s);
        }
        function od(h, s) {
          const a = al(h, s);
          return s += a.length, a === "" ? "" : a + co(h, s);
        }
        const ad = lo([
          sd,
          rd,
          od
        ]);
        function ld(h, s) {
          var a;
          const p = h.substr(s).match(/^[01]+/);
          return (a = p && p[0]) !== null && a !== void 0 ? a : "";
        }
        function cd(h, s) {
          const a = h.substr(s, 2);
          if (s += a.length, a.toLowerCase() !== "0b") return "";
          const p = ld(h, s);
          return p === "" ? "" : a + p;
        }
        function hd(h, s) {
          var a;
          const p = h.substr(s).match(/^[0-7]+/);
          return (a = p && p[0]) !== null && a !== void 0 ? a : "";
        }
        function ud(h, s) {
          const a = h.substr(s, 2);
          if (s += a.length, a.toLowerCase() !== "0o") return "";
          const p = hd(h, s);
          return p === "" ? "" : a + p;
        }
        function dd(h, s) {
          var a;
          const p = h.substr(s).match(/^[0-9a-f]+/i);
          return (a = p && p[0]) !== null && a !== void 0 ? a : "";
        }
        function pd(h, s) {
          const a = h.substr(s, 2);
          if (s += a.length, a.toLowerCase() !== "0x") return "";
          const p = dd(h, s);
          return p === "" ? "" : a + p;
        }
        const fd = lo([
          cd,
          ud,
          pd
        ]), md = lo([
          fd,
          ad
        ]);
        function gd(h, s) {
          const a = md(h, s);
          return s += a.length, a === "" ? null : {
            evaluable: new Zu(a),
            cursor: s
          };
        }
        function _d(h, s) {
          const a = h.substr(s, 1);
          if (s += a.length, a !== "(") return null;
          const p = cl(h, s);
          if (!p) return null;
          s = p.cursor, s += Es(h, s).length;
          const x = h.substr(s, 1);
          return s += x.length, x !== ")" ? null : {
            evaluable: p.evaluable,
            cursor: s
          };
        }
        function vd(h, s) {
          var a;
          return (a = gd(h, s)) !== null && a !== void 0 ? a : _d(h, s);
        }
        function ll(h, s) {
          const a = vd(h, s);
          if (a) return a;
          const p = h.substr(s, 1);
          if (s += p.length, p !== "+" && p !== "-" && p !== "~") return null;
          const x = ll(h, s);
          return x ? (s = x.cursor, {
            cursor: s,
            evaluable: new td(p, x.evaluable)
          }) : null;
        }
        function bd(h, s, a) {
          a += Es(s, a).length;
          const p = h.filter((x) => s.startsWith(x, a))[0];
          return p ? (a += p.length, a += Es(s, a).length, {
            cursor: a,
            operator: p
          }) : null;
        }
        function xd(h, s) {
          return (a, p) => {
            const x = h(a, p);
            if (!x) return null;
            p = x.cursor;
            let R = x.evaluable;
            for (; ; ) {
              const U = bd(s, a, p);
              if (!U) break;
              p = U.cursor;
              const le = h(a, p);
              if (!le) return null;
              p = le.cursor, R = new Qu(U.operator, R, le.evaluable);
            }
            return R ? {
              cursor: p,
              evaluable: R
            } : null;
          };
        }
        const yd = [
          [
            "**"
          ],
          [
            "*",
            "/",
            "%"
          ],
          [
            "+",
            "-"
          ],
          [
            "<<",
            ">>>",
            ">>"
          ],
          [
            "&"
          ],
          [
            "^"
          ],
          [
            "|"
          ]
        ].reduce((h, s) => xd(h, s), ll);
        function cl(h, s) {
          return s += Es(h, s).length, yd(h, s);
        }
        function wd(h) {
          const s = cl(h, 0);
          return !s || s.cursor + Es(h, s.cursor).length !== h.length ? null : s.evaluable;
        }
        function wn(h) {
          var s;
          const a = wd(h);
          return (s = a == null ? void 0 : a.evaluate()) !== null && s !== void 0 ? s : null;
        }
        function hl(h) {
          if (typeof h == "number") return h;
          if (typeof h == "string") {
            const s = wn(h);
            if (!m(s)) return s;
          }
          return 0;
        }
        function Md(h) {
          return String(h);
        }
        function Rt(h) {
          return (s) => s.toFixed(Math.max(Math.min(h, 20), 0));
        }
        const Sd = Rt(0);
        function pr(h) {
          return Sd(h) + "%";
        }
        function ul(h) {
          return String(h);
        }
        function ho(h) {
          return h;
        }
        function Cs({ primary: h, secondary: s, forward: a, backward: p }) {
          let x = false;
          function R(U) {
            x || (x = true, U(), x = false);
          }
          h.emitter.on("change", (U) => {
            R(() => {
              s.setRawValue(a(h, s), U.options);
            });
          }), s.emitter.on("change", (U) => {
            R(() => {
              h.setRawValue(p(h, s), U.options);
            }), R(() => {
              s.setRawValue(a(h, s), U.options);
            });
          }), R(() => {
            s.setRawValue(a(h, s), {
              forceEmit: false,
              last: true
            });
          });
        }
        function jt(h, s) {
          const a = h * (s.altKey ? 0.1 : 1) * (s.shiftKey ? 10 : 1);
          return s.upKey ? +a : s.downKey ? -a : 0;
        }
        function As(h) {
          return {
            altKey: h.altKey,
            downKey: h.key === "ArrowDown",
            shiftKey: h.shiftKey,
            upKey: h.key === "ArrowUp"
          };
        }
        function Mn(h) {
          return {
            altKey: h.altKey,
            downKey: h.key === "ArrowLeft",
            shiftKey: h.shiftKey,
            upKey: h.key === "ArrowRight"
          };
        }
        function Ed(h) {
          return h === "ArrowUp" || h === "ArrowDown";
        }
        function dl(h) {
          return Ed(h) || h === "ArrowLeft" || h === "ArrowRight";
        }
        function uo(h, s) {
          var a, p;
          const x = s.ownerDocument.defaultView, R = s.getBoundingClientRect();
          return {
            x: h.pageX - (((a = x && x.scrollX) !== null && a !== void 0 ? a : 0) + R.left),
            y: h.pageY - (((p = x && x.scrollY) !== null && p !== void 0 ? p : 0) + R.top)
          };
        }
        class ii {
          constructor(s) {
            this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = s, this.emitter = new C(), s.addEventListener("touchstart", this.onTouchStart_, {
              passive: false
            }), s.addEventListener("touchmove", this.onTouchMove_, {
              passive: true
            }), s.addEventListener("touchend", this.onTouchEnd_), s.addEventListener("mousedown", this.onMouseDown_);
          }
          computePosition_(s) {
            const a = this.elem_.getBoundingClientRect();
            return {
              bounds: {
                width: a.width,
                height: a.height
              },
              point: s ? {
                x: s.x,
                y: s.y
              } : null
            };
          }
          onMouseDown_(s) {
            var a;
            s.preventDefault(), (a = s.currentTarget) === null || a === void 0 || a.focus();
            const p = this.elem_.ownerDocument;
            p.addEventListener("mousemove", this.onDocumentMouseMove_), p.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", {
              altKey: s.altKey,
              data: this.computePosition_(uo(s, this.elem_)),
              sender: this,
              shiftKey: s.shiftKey
            });
          }
          onDocumentMouseMove_(s) {
            this.emitter.emit("move", {
              altKey: s.altKey,
              data: this.computePosition_(uo(s, this.elem_)),
              sender: this,
              shiftKey: s.shiftKey
            });
          }
          onDocumentMouseUp_(s) {
            const a = this.elem_.ownerDocument;
            a.removeEventListener("mousemove", this.onDocumentMouseMove_), a.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", {
              altKey: s.altKey,
              data: this.computePosition_(uo(s, this.elem_)),
              sender: this,
              shiftKey: s.shiftKey
            });
          }
          onTouchStart_(s) {
            s.preventDefault();
            const a = s.targetTouches.item(0), p = this.elem_.getBoundingClientRect();
            this.emitter.emit("down", {
              altKey: s.altKey,
              data: this.computePosition_(a ? {
                x: a.clientX - p.left,
                y: a.clientY - p.top
              } : void 0),
              sender: this,
              shiftKey: s.shiftKey
            }), this.lastTouch_ = a;
          }
          onTouchMove_(s) {
            const a = s.targetTouches.item(0), p = this.elem_.getBoundingClientRect();
            this.emitter.emit("move", {
              altKey: s.altKey,
              data: this.computePosition_(a ? {
                x: a.clientX - p.left,
                y: a.clientY - p.top
              } : void 0),
              sender: this,
              shiftKey: s.shiftKey
            }), this.lastTouch_ = a;
          }
          onTouchEnd_(s) {
            var a;
            const p = (a = s.targetTouches.item(0)) !== null && a !== void 0 ? a : this.lastTouch_, x = this.elem_.getBoundingClientRect();
            this.emitter.emit("up", {
              altKey: s.altKey,
              data: this.computePosition_(p ? {
                x: p.clientX - x.left,
                y: p.clientY - x.top
              } : void 0),
              sender: this,
              shiftKey: s.shiftKey
            });
          }
        }
        function lt(h, s, a, p, x) {
          const R = (h - s) / (a - s);
          return p + R * (x - p);
        }
        function pl(h) {
          return String(h.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
        }
        function yt(h, s, a) {
          return Math.min(Math.max(h, s), a);
        }
        function fl(h, s) {
          return (h % s + s) % s;
        }
        const en = M("txt");
        class Td {
          constructor(s, a) {
            this.onChange_ = this.onChange_.bind(this), this.props_ = a.props, this.props_.emitter.on("change", this.onChange_), this.element = s.createElement("div"), this.element.classList.add(en(), en(void 0, "num")), a.arrayPosition && this.element.classList.add(en(void 0, a.arrayPosition)), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("input");
            p.classList.add(en("i")), p.type = "text", a.viewProps.bindDisabled(p), this.element.appendChild(p), this.inputElement = p, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = a.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(en()), this.inputElement.classList.add(en("i"));
            const x = s.createElement("div");
            x.classList.add(en("k")), this.element.appendChild(x), this.knobElement = x;
            const R = s.createElementNS(Qe, "svg");
            R.classList.add(en("g")), this.knobElement.appendChild(R);
            const U = s.createElementNS(Qe, "path");
            U.classList.add(en("gb")), R.appendChild(U), this.guideBodyElem_ = U;
            const le = s.createElementNS(Qe, "path");
            le.classList.add(en("gh")), R.appendChild(le), this.guideHeadElem_ = le;
            const Ce = s.createElement("div");
            Ce.classList.add(M("tt")()), this.knobElement.appendChild(Ce), this.tooltipElem_ = Ce, a.value.emitter.on("change", this.onChange_), this.value = a.value, this.refresh();
          }
          onDraggingChange_(s) {
            if (s.rawValue === null) {
              this.element.classList.remove(en(void 0, "drg"));
              return;
            }
            this.element.classList.add(en(void 0, "drg"));
            const a = s.rawValue / this.props_.get("draggingScale"), p = a + (a > 0 ? -1 : a < 0 ? 1 : 0), x = yt(-p, -4, 4);
            this.guideHeadElem_.setAttributeNS(null, "d", [
              `M ${p + x},0 L${p},4 L${p + x},8`,
              `M ${a},-1 L${a},9`
            ].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${a},4`);
            const R = this.props_.get("formatter");
            this.tooltipElem_.textContent = R(this.value.rawValue), this.tooltipElem_.style.left = `${a}px`;
          }
          refresh() {
            const s = this.props_.get("formatter");
            this.inputElement.value = s(this.value.rawValue);
          }
          onChange_() {
            this.refresh();
          }
        }
        class Ps {
          constructor(s, a) {
            var p;
            this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = a.baseStep, this.parser_ = a.parser, this.props = a.props, this.sliderProps_ = (p = a.sliderProps) !== null && p !== void 0 ? p : null, this.value = a.value, this.viewProps = a.viewProps, this.dragging_ = te(null), this.view = new Td(s, {
              arrayPosition: a.arrayPosition,
              dragging: this.dragging_,
              props: this.props,
              value: this.value,
              viewProps: this.viewProps
            }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
            const x = new ii(this.view.knobElement);
            x.emitter.on("down", this.onPointerDown_), x.emitter.on("move", this.onPointerMove_), x.emitter.on("up", this.onPointerUp_);
          }
          constrainValue_(s) {
            var a, p;
            const x = (a = this.sliderProps_) === null || a === void 0 ? void 0 : a.get("minValue"), R = (p = this.sliderProps_) === null || p === void 0 ? void 0 : p.get("maxValue");
            let U = s;
            return x !== void 0 && (U = Math.max(U, x)), R !== void 0 && (U = Math.min(U, R)), U;
          }
          onInputChange_(s) {
            const p = s.currentTarget.value, x = this.parser_(p);
            m(x) || (this.value.rawValue = this.constrainValue_(x)), this.view.refresh();
          }
          onInputKeyDown_(s) {
            const a = jt(this.baseStep_, As(s));
            a !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + a), {
              forceEmit: false,
              last: false
            });
          }
          onInputKeyUp_(s) {
            jt(this.baseStep_, As(s)) !== 0 && this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
          onPointerDown_() {
            this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
          }
          computeDraggingValue_(s) {
            if (!s.point) return null;
            const a = s.point.x - s.bounds.width / 2;
            return this.constrainValue_(this.originRawValue_ + a * this.props.get("draggingScale"));
          }
          onPointerMove_(s) {
            const a = this.computeDraggingValue_(s.data);
            a !== null && (this.value.setRawValue(a, {
              forceEmit: false,
              last: false
            }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
          }
          onPointerUp_(s) {
            const a = this.computeDraggingValue_(s.data);
            a !== null && (this.value.setRawValue(a, {
              forceEmit: true,
              last: true
            }), this.dragging_.rawValue = null);
          }
        }
        const po = M("sld");
        class Cd {
          constructor(s, a) {
            this.onChange_ = this.onChange_.bind(this), this.props_ = a.props, this.props_.emitter.on("change", this.onChange_), this.element = s.createElement("div"), this.element.classList.add(po()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("div");
            p.classList.add(po("t")), a.viewProps.bindTabIndex(p), this.element.appendChild(p), this.trackElement = p;
            const x = s.createElement("div");
            x.classList.add(po("k")), this.trackElement.appendChild(x), this.knobElement = x, a.value.emitter.on("change", this.onChange_), this.value = a.value, this.update_();
          }
          update_() {
            const s = yt(lt(this.value.rawValue, this.props_.get("minValue"), this.props_.get("maxValue"), 0, 100), 0, 100);
            this.knobElement.style.width = `${s}%`;
          }
          onChange_() {
            this.update_();
          }
        }
        class Ad {
          constructor(s, a) {
            this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = a.baseStep, this.value = a.value, this.viewProps = a.viewProps, this.props = a.props, this.view = new Cd(s, {
              props: this.props,
              value: this.value,
              viewProps: this.viewProps
            }), this.ptHandler_ = new ii(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
          }
          handlePointerEvent_(s, a) {
            s.point && this.value.setRawValue(lt(yt(s.point.x, 0, s.bounds.width), 0, s.bounds.width, this.props.get("minValue"), this.props.get("maxValue")), a);
          }
          onPointerDownOrMove_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerUp_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: true,
              last: true
            });
          }
          onKeyDown_(s) {
            const a = jt(this.baseStep_, Mn(s));
            a !== 0 && this.value.setRawValue(this.value.rawValue + a, {
              forceEmit: false,
              last: false
            });
          }
          onKeyUp_(s) {
            jt(this.baseStep_, Mn(s)) !== 0 && this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }
        const fo = M("sldtxt");
        class Pd {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(fo());
            const p = s.createElement("div");
            p.classList.add(fo("s")), this.sliderView_ = a.sliderView, p.appendChild(this.sliderView_.element), this.element.appendChild(p);
            const x = s.createElement("div");
            x.classList.add(fo("t")), this.textView_ = a.textView, x.appendChild(this.textView_.element), this.element.appendChild(x);
          }
        }
        class mo {
          constructor(s, a) {
            this.value = a.value, this.viewProps = a.viewProps, this.sliderC_ = new Ad(s, {
              baseStep: a.baseStep,
              props: a.sliderProps,
              value: a.value,
              viewProps: this.viewProps
            }), this.textC_ = new Ps(s, {
              baseStep: a.baseStep,
              parser: a.parser,
              props: a.textProps,
              sliderProps: a.sliderProps,
              value: a.value,
              viewProps: a.viewProps
            }), this.view = new Pd(s, {
              sliderView: this.sliderC_.view,
              textView: this.textC_.view
            });
          }
          get sliderController() {
            return this.sliderC_;
          }
          get textController() {
            return this.textC_;
          }
        }
        function Ls(h, s) {
          h.write(s);
        }
        function fr(h) {
          const s = ne;
          if (Array.isArray(h)) return s.required.array(s.required.object({
            text: s.required.string,
            value: s.required.raw
          }))(h).value;
          if (typeof h == "object") return s.required.raw(h).value;
        }
        function ml(h) {
          if (h === "inline" || h === "popup") return h;
        }
        function Bn(h) {
          const s = ne;
          return s.required.object({
            max: s.optional.number,
            min: s.optional.number,
            step: s.optional.number
          })(h).value;
        }
        function gl(h) {
          if (Array.isArray(h)) return h;
          const s = [];
          return Object.keys(h).forEach((a) => {
            s.push({
              text: a,
              value: h[a]
            });
          }), s;
        }
        function go(h) {
          return m(h) ? null : new Ms(gl(h));
        }
        function Ld(h) {
          const s = h ? yn(h, ur) : null;
          return s ? s.step : null;
        }
        function mr(h, s) {
          const a = h && yn(h, ur);
          return a ? pl(a.step) : Math.max(pl(s), 2);
        }
        function Ri(h) {
          const s = Ld(h);
          return s ?? 1;
        }
        function Di(h, s) {
          var a;
          const p = h && yn(h, ur), x = Math.abs((a = p == null ? void 0 : p.step) !== null && a !== void 0 ? a : s);
          return x === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(x)) - 1);
        }
        const gr = M("ckb");
        class Rd {
          constructor(s, a) {
            this.onValueChange_ = this.onValueChange_.bind(this), this.element = s.createElement("div"), this.element.classList.add(gr()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("label");
            p.classList.add(gr("l")), this.element.appendChild(p);
            const x = s.createElement("input");
            x.classList.add(gr("i")), x.type = "checkbox", p.appendChild(x), this.inputElement = x, a.viewProps.bindDisabled(this.inputElement);
            const R = s.createElement("div");
            R.classList.add(gr("w")), p.appendChild(R);
            const U = K(s, "check");
            R.appendChild(U), a.value.emitter.on("change", this.onValueChange_), this.value = a.value, this.update_();
          }
          update_() {
            this.inputElement.checked = this.value.rawValue;
          }
          onValueChange_() {
            this.update_();
          }
        }
        class Dd {
          constructor(s, a) {
            this.onInputChange_ = this.onInputChange_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.view = new Rd(s, {
              value: this.value,
              viewProps: this.viewProps
            }), this.view.inputElement.addEventListener("change", this.onInputChange_);
          }
          onInputChange_(s) {
            const a = s.currentTarget;
            this.value.rawValue = a.checked;
          }
        }
        function Id(h) {
          const s = [], a = go(h.options);
          return a && s.push(a), new ws(s);
        }
        const kd = {
          id: "input-bool",
          type: "input",
          accept: (h, s) => {
            if (typeof h != "boolean") return null;
            const p = oe(s, {
              options: ne.optional.custom(fr)
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => rl,
            constraint: (h) => Id(h.params),
            writer: (h) => Ls
          },
          controller: (h) => {
            const s = h.document, a = h.value, p = h.constraint, x = p && yn(p, Ms);
            return x ? new Ss(s, {
              props: new H({
                options: x.values.value("options")
              }),
              value: a,
              viewProps: h.viewProps
            }) : new Dd(s, {
              value: a,
              viewProps: h.viewProps
            });
          }
        }, si = M("col");
        class Nd {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(si()), a.foldable.bindExpandedClass(this.element, si(void 0, "expanded")), E(a.foldable, "completed", V(this.element, si(void 0, "cpl")));
            const p = s.createElement("div");
            p.classList.add(si("h")), this.element.appendChild(p);
            const x = s.createElement("div");
            x.classList.add(si("s")), p.appendChild(x), this.swatchElement = x;
            const R = s.createElement("div");
            if (R.classList.add(si("t")), p.appendChild(R), this.textElement = R, a.pickerLayout === "inline") {
              const U = s.createElement("div");
              U.classList.add(si("p")), this.element.appendChild(U), this.pickerElement = U;
            } else this.pickerElement = null;
          }
        }
        function Od(h, s, a) {
          const p = yt(h / 255, 0, 1), x = yt(s / 255, 0, 1), R = yt(a / 255, 0, 1), U = Math.max(p, x, R), le = Math.min(p, x, R), Ce = U - le;
          let Pe = 0, Je = 0;
          const et = (le + U) / 2;
          return Ce !== 0 && (Je = Ce / (1 - Math.abs(U + le - 1)), p === U ? Pe = (x - R) / Ce : x === U ? Pe = 2 + (R - p) / Ce : Pe = 4 + (p - x) / Ce, Pe = Pe / 6 + (Pe < 0 ? 1 : 0)), [
            Pe * 360,
            Je * 100,
            et * 100
          ];
        }
        function Fd(h, s, a) {
          const p = (h % 360 + 360) % 360, x = yt(s / 100, 0, 1), R = yt(a / 100, 0, 1), U = (1 - Math.abs(2 * R - 1)) * x, le = U * (1 - Math.abs(p / 60 % 2 - 1)), Ce = R - U / 2;
          let Pe, Je, et;
          return p >= 0 && p < 60 ? [Pe, Je, et] = [
            U,
            le,
            0
          ] : p >= 60 && p < 120 ? [Pe, Je, et] = [
            le,
            U,
            0
          ] : p >= 120 && p < 180 ? [Pe, Je, et] = [
            0,
            U,
            le
          ] : p >= 180 && p < 240 ? [Pe, Je, et] = [
            0,
            le,
            U
          ] : p >= 240 && p < 300 ? [Pe, Je, et] = [
            le,
            0,
            U
          ] : [Pe, Je, et] = [
            U,
            0,
            le
          ], [
            (Pe + Ce) * 255,
            (Je + Ce) * 255,
            (et + Ce) * 255
          ];
        }
        function Ud(h, s, a) {
          const p = yt(h / 255, 0, 1), x = yt(s / 255, 0, 1), R = yt(a / 255, 0, 1), U = Math.max(p, x, R), le = Math.min(p, x, R), Ce = U - le;
          let Pe;
          Ce === 0 ? Pe = 0 : U === p ? Pe = 60 * (((x - R) / Ce % 6 + 6) % 6) : U === x ? Pe = 60 * ((R - p) / Ce + 2) : Pe = 60 * ((p - x) / Ce + 4);
          const Je = U === 0 ? 0 : Ce / U, et = U;
          return [
            Pe,
            Je * 100,
            et * 100
          ];
        }
        function _l(h, s, a) {
          const p = fl(h, 360), x = yt(s / 100, 0, 1), R = yt(a / 100, 0, 1), U = R * x, le = U * (1 - Math.abs(p / 60 % 2 - 1)), Ce = R - U;
          let Pe, Je, et;
          return p >= 0 && p < 60 ? [Pe, Je, et] = [
            U,
            le,
            0
          ] : p >= 60 && p < 120 ? [Pe, Je, et] = [
            le,
            U,
            0
          ] : p >= 120 && p < 180 ? [Pe, Je, et] = [
            0,
            U,
            le
          ] : p >= 180 && p < 240 ? [Pe, Je, et] = [
            0,
            le,
            U
          ] : p >= 240 && p < 300 ? [Pe, Je, et] = [
            le,
            0,
            U
          ] : [Pe, Je, et] = [
            U,
            0,
            le
          ], [
            (Pe + Ce) * 255,
            (Je + Ce) * 255,
            (et + Ce) * 255
          ];
        }
        function Bd(h, s, a) {
          const p = a + s * (100 - Math.abs(2 * a - 100)) / 200;
          return [
            h,
            p !== 0 ? s * (100 - Math.abs(2 * a - 100)) / p : 0,
            a + s * (100 - Math.abs(2 * a - 100)) / 200
          ];
        }
        function Vd(h, s, a) {
          const p = 100 - Math.abs(a * (200 - s) / 100 - 100);
          return [
            h,
            p !== 0 ? s * a / p : 0,
            a * (200 - s) / 200
          ];
        }
        function ri(h) {
          return [
            h[0],
            h[1],
            h[2]
          ];
        }
        function vl(h, s) {
          return [
            h[0],
            h[1],
            h[2],
            s
          ];
        }
        const zd = {
          hsl: {
            hsl: (h, s, a) => [
              h,
              s,
              a
            ],
            hsv: Bd,
            rgb: Fd
          },
          hsv: {
            hsl: Vd,
            hsv: (h, s, a) => [
              h,
              s,
              a
            ],
            rgb: _l
          },
          rgb: {
            hsl: Od,
            hsv: Ud,
            rgb: (h, s, a) => [
              h,
              s,
              a
            ]
          }
        };
        function _r(h, s) {
          return [
            s === "float" ? 1 : h === "rgb" ? 255 : 360,
            s === "float" ? 1 : h === "rgb" ? 255 : 100,
            s === "float" ? 1 : h === "rgb" ? 255 : 100
          ];
        }
        function Gd(h, s) {
          return h === s ? s : fl(h, s);
        }
        function Hd(h, s, a) {
          var p;
          const x = _r(s, a);
          return [
            s === "rgb" ? yt(h[0], 0, x[0]) : Gd(h[0], x[0]),
            yt(h[1], 0, x[1]),
            yt(h[2], 0, x[2]),
            yt((p = h[3]) !== null && p !== void 0 ? p : 1, 0, 1)
          ];
        }
        function bl(h, s, a, p) {
          const x = _r(s, a), R = _r(s, p);
          return h.map((U, le) => U / x[le] * R[le]);
        }
        function Wd(h, s, a) {
          const p = bl(h, s.mode, s.type, "int"), x = zd[s.mode][a.mode](...p);
          return bl(x, a.mode, "int", a.type);
        }
        function vr(h, s) {
          return typeof h != "object" || m(h) ? false : s in h && typeof h[s] == "number";
        }
        class je {
          static black(s = "int") {
            return new je([
              0,
              0,
              0
            ], "rgb", s);
          }
          static fromObject(s, a = "int") {
            const p = "a" in s ? [
              s.r,
              s.g,
              s.b,
              s.a
            ] : [
              s.r,
              s.g,
              s.b
            ];
            return new je(p, "rgb", a);
          }
          static toRgbaObject(s, a = "int") {
            return s.toRgbaObject(a);
          }
          static isRgbColorObject(s) {
            return vr(s, "r") && vr(s, "g") && vr(s, "b");
          }
          static isRgbaColorObject(s) {
            return this.isRgbColorObject(s) && vr(s, "a");
          }
          static isColorObject(s) {
            return this.isRgbColorObject(s);
          }
          static equals(s, a) {
            if (s.mode !== a.mode) return false;
            const p = s.comps_, x = a.comps_;
            for (let R = 0; R < p.length; R++) if (p[R] !== x[R]) return false;
            return true;
          }
          constructor(s, a, p = "int") {
            this.mode = a, this.type = p, this.comps_ = Hd(s, a, p);
          }
          getComponents(s, a = "int") {
            return vl(Wd(ri(this.comps_), {
              mode: this.mode,
              type: this.type
            }, {
              mode: s ?? this.mode,
              type: a
            }), this.comps_[3]);
          }
          toRgbaObject(s = "int") {
            const a = this.getComponents("rgb", s);
            return {
              r: a[0],
              g: a[1],
              b: a[2],
              a: a[3]
            };
          }
        }
        const Vn = M("colp");
        class jd {
          constructor(s, a) {
            this.alphaViews_ = null, this.element = s.createElement("div"), this.element.classList.add(Vn()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("div");
            p.classList.add(Vn("hsv"));
            const x = s.createElement("div");
            x.classList.add(Vn("sv")), this.svPaletteView_ = a.svPaletteView, x.appendChild(this.svPaletteView_.element), p.appendChild(x);
            const R = s.createElement("div");
            R.classList.add(Vn("h")), this.hPaletteView_ = a.hPaletteView, R.appendChild(this.hPaletteView_.element), p.appendChild(R), this.element.appendChild(p);
            const U = s.createElement("div");
            if (U.classList.add(Vn("rgb")), this.textView_ = a.textView, U.appendChild(this.textView_.element), this.element.appendChild(U), a.alphaViews) {
              this.alphaViews_ = {
                palette: a.alphaViews.palette,
                text: a.alphaViews.text
              };
              const le = s.createElement("div");
              le.classList.add(Vn("a"));
              const Ce = s.createElement("div");
              Ce.classList.add(Vn("ap")), Ce.appendChild(this.alphaViews_.palette.element), le.appendChild(Ce);
              const Pe = s.createElement("div");
              Pe.classList.add(Vn("at")), Pe.appendChild(this.alphaViews_.text.element), le.appendChild(Pe), this.element.appendChild(le);
            }
          }
          get allFocusableElements() {
            const s = [
              this.svPaletteView_.element,
              this.hPaletteView_.element,
              this.textView_.modeSelectElement,
              ...this.textView_.textViews.map((a) => a.inputElement)
            ];
            return this.alphaViews_ && s.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), s;
          }
        }
        function qd(h) {
          return h === "int" ? "int" : h === "float" ? "float" : void 0;
        }
        function _o(h) {
          const s = ne;
          return oe(h, {
            alpha: s.optional.boolean,
            color: s.optional.object({
              alpha: s.optional.boolean,
              type: s.optional.custom(qd)
            }),
            expanded: s.optional.boolean,
            picker: s.optional.custom(ml)
          });
        }
        function oi(h) {
          return h ? 0.1 : 1;
        }
        function ai(h) {
          var s;
          return (s = h.color) === null || s === void 0 ? void 0 : s.type;
        }
        function Xd(h, s) {
          return h.alpha === s.alpha && h.mode === s.mode && h.notation === s.notation && h.type === s.type;
        }
        function tn(h, s) {
          const a = h.match(/^(.+)%$/);
          return Math.min(a ? parseFloat(a[1]) * 0.01 * s : parseFloat(h), s);
        }
        const Kd = {
          deg: (h) => h,
          grad: (h) => h * 360 / 400,
          rad: (h) => h * 360 / (2 * Math.PI),
          turn: (h) => h * 360
        };
        function xl(h) {
          const s = h.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
          if (!s) return parseFloat(h);
          const a = parseFloat(s[1]), p = s[2];
          return Kd[p](a);
        }
        function yl(h) {
          const s = h.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!s) return null;
          const a = [
            tn(s[1], 255),
            tn(s[2], 255),
            tn(s[3], 255)
          ];
          return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) ? null : a;
        }
        function wl(h) {
          return (s) => {
            const a = yl(s);
            return a ? new je(a, "rgb", h) : null;
          };
        }
        function Ml(h) {
          const s = h.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!s) return null;
          const a = [
            tn(s[1], 255),
            tn(s[2], 255),
            tn(s[3], 255),
            tn(s[4], 1)
          ];
          return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) || isNaN(a[3]) ? null : a;
        }
        function Sl(h) {
          return (s) => {
            const a = Ml(s);
            return a ? new je(a, "rgb", h) : null;
          };
        }
        function El(h) {
          const s = h.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!s) return null;
          const a = [
            xl(s[1]),
            tn(s[2], 100),
            tn(s[3], 100)
          ];
          return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) ? null : a;
        }
        function Tl(h) {
          return (s) => {
            const a = El(s);
            return a ? new je(a, "hsl", h) : null;
          };
        }
        function Cl(h) {
          const s = h.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
          if (!s) return null;
          const a = [
            xl(s[1]),
            tn(s[2], 100),
            tn(s[3], 100),
            tn(s[4], 1)
          ];
          return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) || isNaN(a[3]) ? null : a;
        }
        function Al(h) {
          return (s) => {
            const a = Cl(s);
            return a ? new je(a, "hsl", h) : null;
          };
        }
        function Pl(h) {
          const s = h.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
          if (s) return [
            parseInt(s[1] + s[1], 16),
            parseInt(s[2] + s[2], 16),
            parseInt(s[3] + s[3], 16)
          ];
          const a = h.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
          return a ? [
            parseInt(a[1], 16),
            parseInt(a[2], 16),
            parseInt(a[3], 16)
          ] : null;
        }
        function Yd(h) {
          const s = Pl(h);
          return s ? new je(s, "rgb", "int") : null;
        }
        function Ll(h) {
          const s = h.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
          if (s) return [
            parseInt(s[1] + s[1], 16),
            parseInt(s[2] + s[2], 16),
            parseInt(s[3] + s[3], 16),
            lt(parseInt(s[4] + s[4], 16), 0, 255, 0, 1)
          ];
          const a = h.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
          return a ? [
            parseInt(a[1], 16),
            parseInt(a[2], 16),
            parseInt(a[3], 16),
            lt(parseInt(a[4], 16), 0, 255, 0, 1)
          ] : null;
        }
        function $d(h) {
          const s = Ll(h);
          return s ? new je(s, "rgb", "int") : null;
        }
        function Rl(h) {
          const s = h.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
          if (!s) return null;
          const a = [
            parseFloat(s[1]),
            parseFloat(s[2]),
            parseFloat(s[3])
          ];
          return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) ? null : a;
        }
        function Dl(h) {
          return (s) => {
            const a = Rl(s);
            return a ? new je(a, "rgb", h) : null;
          };
        }
        function Il(h) {
          const s = h.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
          if (!s) return null;
          const a = [
            parseFloat(s[1]),
            parseFloat(s[2]),
            parseFloat(s[3]),
            parseFloat(s[4])
          ];
          return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) || isNaN(a[3]) ? null : a;
        }
        function kl(h) {
          return (s) => {
            const a = Il(s);
            return a ? new je(a, "rgb", h) : null;
          };
        }
        const Zd = [
          {
            parser: Pl,
            result: {
              alpha: false,
              mode: "rgb",
              notation: "hex"
            }
          },
          {
            parser: Ll,
            result: {
              alpha: true,
              mode: "rgb",
              notation: "hex"
            }
          },
          {
            parser: yl,
            result: {
              alpha: false,
              mode: "rgb",
              notation: "func"
            }
          },
          {
            parser: Ml,
            result: {
              alpha: true,
              mode: "rgb",
              notation: "func"
            }
          },
          {
            parser: El,
            result: {
              alpha: false,
              mode: "hsl",
              notation: "func"
            }
          },
          {
            parser: Cl,
            result: {
              alpha: true,
              mode: "hsl",
              notation: "func"
            }
          },
          {
            parser: Rl,
            result: {
              alpha: false,
              mode: "rgb",
              notation: "object"
            }
          },
          {
            parser: Il,
            result: {
              alpha: true,
              mode: "rgb",
              notation: "object"
            }
          }
        ];
        function Jd(h) {
          return Zd.reduce((s, { parser: a, result: p }) => s || (a(h) ? p : null), null);
        }
        function vo(h, s = "int") {
          const a = Jd(h);
          return a ? a.notation === "hex" && s !== "float" ? Object.assign(Object.assign({}, a), {
            type: "int"
          }) : a.notation === "func" ? Object.assign(Object.assign({}, a), {
            type: s
          }) : null : null;
        }
        const Nl = {
          int: [
            Yd,
            $d,
            wl("int"),
            Sl("int"),
            Tl("int"),
            Al("int"),
            Dl("int"),
            kl("int")
          ],
          float: [
            wl("float"),
            Sl("float"),
            Tl("float"),
            Al("float"),
            Dl("float"),
            kl("float")
          ]
        };
        function Qd(h) {
          const s = Nl[h];
          return (a) => {
            if (typeof a != "string") return je.black(h);
            const p = s.reduce((x, R) => x || R(a), null);
            return p ?? je.black(h);
          };
        }
        function bo(h) {
          const s = Nl[h];
          return (a) => s.reduce((p, x) => p || x(a), null);
        }
        function Ol(h) {
          const s = yt(Math.floor(h), 0, 255).toString(16);
          return s.length === 1 ? `0${s}` : s;
        }
        function Fl(h, s = "#") {
          const a = ri(h.getComponents("rgb")).map(Ol).join("");
          return `${s}${a}`;
        }
        function xo(h, s = "#") {
          const a = h.getComponents("rgb"), p = [
            a[0],
            a[1],
            a[2],
            a[3] * 255
          ].map(Ol).join("");
          return `${s}${p}`;
        }
        function Ul(h, s) {
          const a = Rt(s === "float" ? 2 : 0);
          return `rgb(${ri(h.getComponents("rgb", s)).map((x) => a(x)).join(", ")})`;
        }
        function ep(h) {
          return (s) => Ul(s, h);
        }
        function br(h, s) {
          const a = Rt(2), p = Rt(s === "float" ? 2 : 0);
          return `rgba(${h.getComponents("rgb", s).map((R, U) => (U === 3 ? a : p)(R)).join(", ")})`;
        }
        function tp(h) {
          return (s) => br(s, h);
        }
        function np(h) {
          const s = [
            Rt(0),
            pr,
            pr
          ];
          return `hsl(${ri(h.getComponents("hsl")).map((p, x) => s[x](p)).join(", ")})`;
        }
        function ip(h) {
          const s = [
            Rt(0),
            pr,
            pr,
            Rt(2)
          ];
          return `hsla(${h.getComponents("hsl").map((p, x) => s[x](p)).join(", ")})`;
        }
        function Bl(h, s) {
          const a = Rt(s === "float" ? 2 : 0), p = [
            "r",
            "g",
            "b"
          ];
          return `{${ri(h.getComponents("rgb", s)).map((R, U) => `${p[U]}: ${a(R)}`).join(", ")}}`;
        }
        function sp(h) {
          return (s) => Bl(s, h);
        }
        function Vl(h, s) {
          const a = Rt(2), p = Rt(s === "float" ? 2 : 0), x = [
            "r",
            "g",
            "b",
            "a"
          ];
          return `{${h.getComponents("rgb", s).map((U, le) => {
            const Ce = le === 3 ? a : p;
            return `${x[le]}: ${Ce(U)}`;
          }).join(", ")}}`;
        }
        function rp(h) {
          return (s) => Vl(s, h);
        }
        const op = [
          {
            format: {
              alpha: false,
              mode: "rgb",
              notation: "hex",
              type: "int"
            },
            stringifier: Fl
          },
          {
            format: {
              alpha: true,
              mode: "rgb",
              notation: "hex",
              type: "int"
            },
            stringifier: xo
          },
          {
            format: {
              alpha: false,
              mode: "hsl",
              notation: "func",
              type: "int"
            },
            stringifier: np
          },
          {
            format: {
              alpha: true,
              mode: "hsl",
              notation: "func",
              type: "int"
            },
            stringifier: ip
          },
          ...[
            "int",
            "float"
          ].reduce((h, s) => [
            ...h,
            {
              format: {
                alpha: false,
                mode: "rgb",
                notation: "func",
                type: s
              },
              stringifier: ep(s)
            },
            {
              format: {
                alpha: true,
                mode: "rgb",
                notation: "func",
                type: s
              },
              stringifier: tp(s)
            },
            {
              format: {
                alpha: false,
                mode: "rgb",
                notation: "object",
                type: s
              },
              stringifier: sp(s)
            },
            {
              format: {
                alpha: true,
                mode: "rgb",
                notation: "object",
                type: s
              },
              stringifier: rp(s)
            }
          ], [])
        ];
        function yo(h) {
          return op.reduce((s, a) => s || (Xd(a.format, h) ? a.stringifier : null), null);
        }
        const Rs = M("apl");
        class ap {
          constructor(s, a) {
            this.onValueChange_ = this.onValueChange_.bind(this), this.value = a.value, this.value.emitter.on("change", this.onValueChange_), this.element = s.createElement("div"), this.element.classList.add(Rs()), a.viewProps.bindClassModifiers(this.element), a.viewProps.bindTabIndex(this.element);
            const p = s.createElement("div");
            p.classList.add(Rs("b")), this.element.appendChild(p);
            const x = s.createElement("div");
            x.classList.add(Rs("c")), p.appendChild(x), this.colorElem_ = x;
            const R = s.createElement("div");
            R.classList.add(Rs("m")), this.element.appendChild(R), this.markerElem_ = R;
            const U = s.createElement("div");
            U.classList.add(Rs("p")), this.markerElem_.appendChild(U), this.previewElem_ = U, this.update_();
          }
          update_() {
            const s = this.value.rawValue, a = s.getComponents("rgb"), p = new je([
              a[0],
              a[1],
              a[2],
              0
            ], "rgb"), x = new je([
              a[0],
              a[1],
              a[2],
              255
            ], "rgb"), R = [
              "to right",
              br(p),
              br(x)
            ];
            this.colorElem_.style.background = `linear-gradient(${R.join(",")})`, this.previewElem_.style.backgroundColor = br(s);
            const U = lt(a[3], 0, 1, 0, 100);
            this.markerElem_.style.left = `${U}%`;
          }
          onValueChange_() {
            this.update_();
          }
        }
        class lp {
          constructor(s, a) {
            this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.view = new ap(s, {
              value: this.value,
              viewProps: this.viewProps
            }), this.ptHandler_ = new ii(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
          }
          handlePointerEvent_(s, a) {
            if (!s.point) return;
            const p = s.point.x / s.bounds.width, x = this.value.rawValue, [R, U, le] = x.getComponents("hsv");
            this.value.setRawValue(new je([
              R,
              U,
              le,
              p
            ], "hsv"), a);
          }
          onPointerDown_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerMove_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerUp_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: true,
              last: true
            });
          }
          onKeyDown_(s) {
            const a = jt(oi(true), Mn(s));
            if (a === 0) return;
            const p = this.value.rawValue, [x, R, U, le] = p.getComponents("hsv");
            this.value.setRawValue(new je([
              x,
              R,
              U,
              le + a
            ], "hsv"), {
              forceEmit: false,
              last: false
            });
          }
          onKeyUp_(s) {
            jt(oi(true), Mn(s)) !== 0 && this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }
        const Ii = M("coltxt");
        function cp(h) {
          const s = h.createElement("select"), a = [
            {
              text: "RGB",
              value: "rgb"
            },
            {
              text: "HSL",
              value: "hsl"
            },
            {
              text: "HSV",
              value: "hsv"
            }
          ];
          return s.appendChild(a.reduce((p, x) => {
            const R = h.createElement("option");
            return R.textContent = x.text, R.value = x.value, p.appendChild(R), p;
          }, h.createDocumentFragment())), s;
        }
        class hp {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(Ii()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("div");
            p.classList.add(Ii("m")), this.modeElem_ = cp(s), this.modeElem_.classList.add(Ii("ms")), p.appendChild(this.modeSelectElement), a.viewProps.bindDisabled(this.modeElem_);
            const x = s.createElement("div");
            x.classList.add(Ii("mm")), x.appendChild(K(s, "dropdown")), p.appendChild(x), this.element.appendChild(p);
            const R = s.createElement("div");
            R.classList.add(Ii("w")), this.element.appendChild(R), this.textsElem_ = R, this.textViews_ = a.textViews, this.applyTextViews_(), F(a.colorMode, (U) => {
              this.modeElem_.value = U;
            });
          }
          get modeSelectElement() {
            return this.modeElem_;
          }
          get textViews() {
            return this.textViews_;
          }
          set textViews(s) {
            this.textViews_ = s, this.applyTextViews_();
          }
          applyTextViews_() {
            fe(this.textsElem_);
            const s = this.element.ownerDocument;
            this.textViews_.forEach((a) => {
              const p = s.createElement("div");
              p.classList.add(Ii("c")), p.appendChild(a.element), this.textsElem_.appendChild(p);
            });
          }
        }
        function up(h) {
          return Rt(h === "float" ? 2 : 0);
        }
        function dp(h, s, a) {
          const p = _r(h, s)[a];
          return new Li({
            min: 0,
            max: p
          });
        }
        function wo(h, s, a) {
          return new Ps(h, {
            arrayPosition: a === 0 ? "fst" : a === 2 ? "lst" : "mid",
            baseStep: oi(false),
            parser: s.parser,
            props: H.fromObject({
              draggingScale: s.colorType === "float" ? 0.01 : 1,
              formatter: up(s.colorType)
            }),
            value: te(0, {
              constraint: dp(s.colorMode, s.colorType, a)
            }),
            viewProps: s.viewProps
          });
        }
        class pp {
          constructor(s, a) {
            this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = a.colorType, this.parser_ = a.parser, this.value = a.value, this.viewProps = a.viewProps, this.colorMode = te(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(s), this.view = new hp(s, {
              colorMode: this.colorMode,
              textViews: [
                this.ccs_[0].view,
                this.ccs_[1].view,
                this.ccs_[2].view
              ],
              viewProps: this.viewProps
            }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
          }
          createComponentControllers_(s) {
            const a = {
              colorMode: this.colorMode.rawValue,
              colorType: this.colorType_,
              parser: this.parser_,
              viewProps: this.viewProps
            }, p = [
              wo(s, a, 0),
              wo(s, a, 1),
              wo(s, a, 2)
            ];
            return p.forEach((x, R) => {
              Cs({
                primary: this.value,
                secondary: x.value,
                forward: (U) => U.rawValue.getComponents(this.colorMode.rawValue, this.colorType_)[R],
                backward: (U, le) => {
                  const Ce = this.colorMode.rawValue, Pe = U.rawValue.getComponents(Ce, this.colorType_);
                  return Pe[R] = le.rawValue, new je(vl(ri(Pe), Pe[3]), Ce, this.colorType_);
                }
              });
            }), p;
          }
          onModeSelectChange_(s) {
            const a = s.currentTarget;
            this.colorMode.rawValue = a.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.textViews = [
              this.ccs_[0].view,
              this.ccs_[1].view,
              this.ccs_[2].view
            ];
          }
        }
        const Mo = M("hpl");
        class fp {
          constructor(s, a) {
            this.onValueChange_ = this.onValueChange_.bind(this), this.value = a.value, this.value.emitter.on("change", this.onValueChange_), this.element = s.createElement("div"), this.element.classList.add(Mo()), a.viewProps.bindClassModifiers(this.element), a.viewProps.bindTabIndex(this.element);
            const p = s.createElement("div");
            p.classList.add(Mo("c")), this.element.appendChild(p);
            const x = s.createElement("div");
            x.classList.add(Mo("m")), this.element.appendChild(x), this.markerElem_ = x, this.update_();
          }
          update_() {
            const s = this.value.rawValue, [a] = s.getComponents("hsv");
            this.markerElem_.style.backgroundColor = Ul(new je([
              a,
              100,
              100
            ], "hsv"));
            const p = lt(a, 0, 360, 0, 100);
            this.markerElem_.style.left = `${p}%`;
          }
          onValueChange_() {
            this.update_();
          }
        }
        class mp {
          constructor(s, a) {
            this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.view = new fp(s, {
              value: this.value,
              viewProps: this.viewProps
            }), this.ptHandler_ = new ii(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
          }
          handlePointerEvent_(s, a) {
            if (!s.point) return;
            const p = lt(yt(s.point.x, 0, s.bounds.width), 0, s.bounds.width, 0, 360), x = this.value.rawValue, [, R, U, le] = x.getComponents("hsv");
            this.value.setRawValue(new je([
              p,
              R,
              U,
              le
            ], "hsv"), a);
          }
          onPointerDown_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerMove_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerUp_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: true,
              last: true
            });
          }
          onKeyDown_(s) {
            const a = jt(oi(false), Mn(s));
            if (a === 0) return;
            const p = this.value.rawValue, [x, R, U, le] = p.getComponents("hsv");
            this.value.setRawValue(new je([
              x + a,
              R,
              U,
              le
            ], "hsv"), {
              forceEmit: false,
              last: false
            });
          }
          onKeyUp_(s) {
            jt(oi(false), Mn(s)) !== 0 && this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }
        const So = M("svp"), zl = 64;
        class gp {
          constructor(s, a) {
            this.onValueChange_ = this.onValueChange_.bind(this), this.value = a.value, this.value.emitter.on("change", this.onValueChange_), this.element = s.createElement("div"), this.element.classList.add(So()), a.viewProps.bindClassModifiers(this.element), a.viewProps.bindTabIndex(this.element);
            const p = s.createElement("canvas");
            p.height = zl, p.width = zl, p.classList.add(So("c")), this.element.appendChild(p), this.canvasElement = p;
            const x = s.createElement("div");
            x.classList.add(So("m")), this.element.appendChild(x), this.markerElem_ = x, this.update_();
          }
          update_() {
            const s = L(this.canvasElement);
            if (!s) return;
            const p = this.value.rawValue.getComponents("hsv"), x = this.canvasElement.width, R = this.canvasElement.height, U = s.getImageData(0, 0, x, R), le = U.data;
            for (let Je = 0; Je < R; Je++) for (let et = 0; et < x; et++) {
              const li = lt(et, 0, x, 0, 100), Is = lt(Je, 0, R, 100, 0), ks = _l(p[0], li, Is), xr = (Je * x + et) * 4;
              le[xr] = ks[0], le[xr + 1] = ks[1], le[xr + 2] = ks[2], le[xr + 3] = 255;
            }
            s.putImageData(U, 0, 0);
            const Ce = lt(p[1], 0, 100, 0, 100);
            this.markerElem_.style.left = `${Ce}%`;
            const Pe = lt(p[2], 0, 100, 100, 0);
            this.markerElem_.style.top = `${Pe}%`;
          }
          onValueChange_() {
            this.update_();
          }
        }
        class _p {
          constructor(s, a) {
            this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.view = new gp(s, {
              value: this.value,
              viewProps: this.viewProps
            }), this.ptHandler_ = new ii(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
          }
          handlePointerEvent_(s, a) {
            if (!s.point) return;
            const p = lt(s.point.x, 0, s.bounds.width, 0, 100), x = lt(s.point.y, 0, s.bounds.height, 100, 0), [R, , , U] = this.value.rawValue.getComponents("hsv");
            this.value.setRawValue(new je([
              R,
              p,
              x,
              U
            ], "hsv"), a);
          }
          onPointerDown_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerMove_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerUp_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: true,
              last: true
            });
          }
          onKeyDown_(s) {
            dl(s.key) && s.preventDefault();
            const [a, p, x, R] = this.value.rawValue.getComponents("hsv"), U = oi(false), le = jt(U, Mn(s)), Ce = jt(U, As(s));
            le === 0 && Ce === 0 || this.value.setRawValue(new je([
              a,
              p + le,
              x + Ce,
              R
            ], "hsv"), {
              forceEmit: false,
              last: false
            });
          }
          onKeyUp_(s) {
            const a = oi(false), p = jt(a, Mn(s)), x = jt(a, As(s));
            p === 0 && x === 0 || this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }
        class vp {
          constructor(s, a) {
            this.value = a.value, this.viewProps = a.viewProps, this.hPaletteC_ = new mp(s, {
              value: this.value,
              viewProps: this.viewProps
            }), this.svPaletteC_ = new _p(s, {
              value: this.value,
              viewProps: this.viewProps
            }), this.alphaIcs_ = a.supportsAlpha ? {
              palette: new lp(s, {
                value: this.value,
                viewProps: this.viewProps
              }),
              text: new Ps(s, {
                parser: wn,
                baseStep: 0.1,
                props: H.fromObject({
                  draggingScale: 0.01,
                  formatter: Rt(2)
                }),
                value: te(0, {
                  constraint: new Li({
                    min: 0,
                    max: 1
                  })
                }),
                viewProps: this.viewProps
              })
            } : null, this.alphaIcs_ && Cs({
              primary: this.value,
              secondary: this.alphaIcs_.text.value,
              forward: (p) => p.rawValue.getComponents()[3],
              backward: (p, x) => {
                const R = p.rawValue.getComponents();
                return R[3] = x.rawValue, new je(R, p.rawValue.mode);
              }
            }), this.textC_ = new pp(s, {
              colorType: a.colorType,
              parser: wn,
              value: this.value,
              viewProps: this.viewProps
            }), this.view = new jd(s, {
              alphaViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
              } : null,
              hPaletteView: this.hPaletteC_.view,
              supportsAlpha: a.supportsAlpha,
              svPaletteView: this.svPaletteC_.view,
              textView: this.textC_.view,
              viewProps: this.viewProps
            });
          }
          get textController() {
            return this.textC_;
          }
        }
        const Eo = M("colsw");
        class bp {
          constructor(s, a) {
            this.onValueChange_ = this.onValueChange_.bind(this), a.value.emitter.on("change", this.onValueChange_), this.value = a.value, this.element = s.createElement("div"), this.element.classList.add(Eo()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("div");
            p.classList.add(Eo("sw")), this.element.appendChild(p), this.swatchElem_ = p;
            const x = s.createElement("button");
            x.classList.add(Eo("b")), a.viewProps.bindDisabled(x), this.element.appendChild(x), this.buttonElement = x, this.update_();
          }
          update_() {
            const s = this.value.rawValue;
            this.swatchElem_.style.backgroundColor = xo(s);
          }
          onValueChange_() {
            this.update_();
          }
        }
        class xp {
          constructor(s, a) {
            this.value = a.value, this.viewProps = a.viewProps, this.view = new bp(s, {
              value: this.value,
              viewProps: this.viewProps
            });
          }
        }
        class To {
          constructor(s, a) {
            this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.foldable_ = Oe.create(a.expanded), this.swatchC_ = new xp(s, {
              value: this.value,
              viewProps: this.viewProps
            });
            const p = this.swatchC_.view.buttonElement;
            p.addEventListener("blur", this.onButtonBlur_), p.addEventListener("click", this.onButtonClick_), this.textC_ = new dr(s, {
              parser: a.parser,
              props: H.fromObject({
                formatter: a.formatter
              }),
              value: this.value,
              viewProps: this.viewProps
            }), this.view = new Nd(s, {
              foldable: this.foldable_,
              pickerLayout: a.pickerLayout
            }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = a.pickerLayout === "popup" ? new il(s, {
              viewProps: this.viewProps
            }) : null;
            const x = new vp(s, {
              colorType: a.colorType,
              supportsAlpha: a.supportsAlpha,
              value: this.value,
              viewProps: this.viewProps
            });
            x.view.allFocusableElements.forEach((R) => {
              R.addEventListener("blur", this.onPopupChildBlur_), R.addEventListener("keydown", this.onPopupChildKeydown_);
            }), this.pickerC_ = x, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(x.view.element), Cs({
              primary: this.foldable_.value("expanded"),
              secondary: this.popC_.shows,
              forward: (R) => R.rawValue,
              backward: (R, U) => U.rawValue
            })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Y(this.foldable_, this.view.pickerElement));
          }
          get textController() {
            return this.textC_;
          }
          onButtonBlur_(s) {
            if (!this.popC_) return;
            const a = this.view.element, p = s.relatedTarget;
            (!p || !a.contains(p)) && (this.popC_.shows.rawValue = false);
          }
          onButtonClick_() {
            this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
          }
          onPopupChildBlur_(s) {
            if (!this.popC_) return;
            const a = this.popC_.view.element, p = D(s);
            p && a.contains(p) || p && p === this.swatchC_.view.buttonElement && !Ke(a.ownerDocument) || (this.popC_.shows.rawValue = false);
          }
          onPopupChildKeydown_(s) {
            this.popC_ ? s.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && s.key === "Escape" && this.swatchC_.view.buttonElement.focus();
          }
        }
        function yp(h, s) {
          return je.isColorObject(h) ? je.fromObject(h, s) : je.black(s);
        }
        function wp(h) {
          return ri(h.getComponents("rgb")).reduce((s, a) => s << 8 | Math.floor(a) & 255, 0);
        }
        function Mp(h) {
          return h.getComponents("rgb").reduce((s, a, p) => {
            const x = Math.floor(p === 3 ? a * 255 : a) & 255;
            return s << 8 | x;
          }, 0) >>> 0;
        }
        function Sp(h) {
          return new je([
            h >> 16 & 255,
            h >> 8 & 255,
            h & 255
          ], "rgb");
        }
        function Ep(h) {
          return new je([
            h >> 24 & 255,
            h >> 16 & 255,
            h >> 8 & 255,
            lt(h & 255, 0, 255, 0, 1)
          ], "rgb");
        }
        function Tp(h) {
          return typeof h != "number" ? je.black() : Sp(h);
        }
        function Cp(h) {
          return typeof h != "number" ? je.black() : Ep(h);
        }
        function Ap(h) {
          const s = yo(h);
          return s ? (a, p) => {
            Ls(a, s(p));
          } : null;
        }
        function Pp(h) {
          const s = h ? Mp : wp;
          return (a, p) => {
            Ls(a, s(p));
          };
        }
        function Lp(h, s, a) {
          const p = s.toRgbaObject(a);
          h.writeProperty("r", p.r), h.writeProperty("g", p.g), h.writeProperty("b", p.b), h.writeProperty("a", p.a);
        }
        function Rp(h, s, a) {
          const p = s.toRgbaObject(a);
          h.writeProperty("r", p.r), h.writeProperty("g", p.g), h.writeProperty("b", p.b);
        }
        function Dp(h, s) {
          return (a, p) => {
            h ? Lp(a, p, s) : Rp(a, p, s);
          };
        }
        function Co(h) {
          var s;
          return !!((h == null ? void 0 : h.alpha) || !((s = h == null ? void 0 : h.color) === null || s === void 0) && s.alpha);
        }
        function Ip(h) {
          return h ? (s) => xo(s, "0x") : (s) => Fl(s, "0x");
        }
        function kp(h) {
          return "color" in h || "view" in h && h.view === "color";
        }
        const Np = {
          id: "input-color-number",
          type: "input",
          accept: (h, s) => {
            if (typeof h != "number" || !kp(s)) return null;
            const a = _o(s);
            return a ? {
              initialValue: h,
              params: a
            } : null;
          },
          binding: {
            reader: (h) => Co(h.params) ? Cp : Tp,
            equals: je.equals,
            writer: (h) => Pp(Co(h.params))
          },
          controller: (h) => {
            const s = Co(h.params), a = "expanded" in h.params ? h.params.expanded : void 0, p = "picker" in h.params ? h.params.picker : void 0;
            return new To(h.document, {
              colorType: "int",
              expanded: a ?? false,
              formatter: Ip(s),
              parser: bo("int"),
              pickerLayout: p ?? "popup",
              supportsAlpha: s,
              value: h.value,
              viewProps: h.viewProps
            });
          }
        };
        function Op(h) {
          return je.isRgbaColorObject(h);
        }
        function Fp(h) {
          return (s) => yp(s, h);
        }
        function Up(h, s) {
          return (a) => h ? Vl(a, s) : Bl(a, s);
        }
        const Bp = {
          id: "input-color-object",
          type: "input",
          accept: (h, s) => {
            if (!je.isColorObject(h)) return null;
            const a = _o(s);
            return a ? {
              initialValue: h,
              params: a
            } : null;
          },
          binding: {
            reader: (h) => Fp(ai(h.params)),
            equals: je.equals,
            writer: (h) => Dp(Op(h.initialValue), ai(h.params))
          },
          controller: (h) => {
            var s;
            const a = je.isRgbaColorObject(h.initialValue), p = "expanded" in h.params ? h.params.expanded : void 0, x = "picker" in h.params ? h.params.picker : void 0, R = (s = ai(h.params)) !== null && s !== void 0 ? s : "int";
            return new To(h.document, {
              colorType: R,
              expanded: p ?? false,
              formatter: Up(a, R),
              parser: bo(R),
              pickerLayout: x ?? "popup",
              supportsAlpha: a,
              value: h.value,
              viewProps: h.viewProps
            });
          }
        }, Vp = {
          id: "input-color-string",
          type: "input",
          accept: (h, s) => {
            if (typeof h != "string" || "view" in s && s.view === "text") return null;
            const a = vo(h, ai(s));
            if (!a || !yo(a)) return null;
            const x = _o(s);
            return x ? {
              initialValue: h,
              params: x
            } : null;
          },
          binding: {
            reader: (h) => {
              var s;
              return Qd((s = ai(h.params)) !== null && s !== void 0 ? s : "int");
            },
            equals: je.equals,
            writer: (h) => {
              const s = vo(h.initialValue, ai(h.params));
              if (!s) throw _.shouldNeverHappen();
              const a = Ap(s);
              if (!a) throw _.notBindable();
              return a;
            }
          },
          controller: (h) => {
            const s = vo(h.initialValue, ai(h.params));
            if (!s) throw _.shouldNeverHappen();
            const a = yo(s);
            if (!a) throw _.shouldNeverHappen();
            const p = "expanded" in h.params ? h.params.expanded : void 0, x = "picker" in h.params ? h.params.picker : void 0;
            return new To(h.document, {
              colorType: s.type,
              expanded: p ?? false,
              formatter: a,
              parser: bo(s.type),
              pickerLayout: x ?? "popup",
              supportsAlpha: s.alpha,
              value: h.value,
              viewProps: h.viewProps
            });
          }
        };
        class zn {
          constructor(s) {
            this.components = s.components, this.asm_ = s.assembly;
          }
          constrain(s) {
            const a = this.asm_.toComponents(s).map((p, x) => {
              var R, U;
              return (U = (R = this.components[x]) === null || R === void 0 ? void 0 : R.constrain(p)) !== null && U !== void 0 ? U : p;
            });
            return this.asm_.fromComponents(a);
          }
        }
        const Gl = M("pndtxt");
        class zp {
          constructor(s, a) {
            this.textViews = a.textViews, this.element = s.createElement("div"), this.element.classList.add(Gl()), this.textViews.forEach((p) => {
              const x = s.createElement("div");
              x.classList.add(Gl("a")), x.appendChild(p.element), this.element.appendChild(x);
            });
          }
        }
        function Gp(h, s, a) {
          return new Ps(h, {
            arrayPosition: a === 0 ? "fst" : a === s.axes.length - 1 ? "lst" : "mid",
            baseStep: s.axes[a].baseStep,
            parser: s.parser,
            props: s.axes[a].textProps,
            value: te(0, {
              constraint: s.axes[a].constraint
            }),
            viewProps: s.viewProps
          });
        }
        class Ao {
          constructor(s, a) {
            this.value = a.value, this.viewProps = a.viewProps, this.acs_ = a.axes.map((p, x) => Gp(s, a, x)), this.acs_.forEach((p, x) => {
              Cs({
                primary: this.value,
                secondary: p.value,
                forward: (R) => a.assembly.toComponents(R.rawValue)[x],
                backward: (R, U) => {
                  const le = a.assembly.toComponents(R.rawValue);
                  return le[x] = U.rawValue, a.assembly.fromComponents(le);
                }
              });
            }), this.view = new zp(s, {
              textViews: this.acs_.map((p) => p.view)
            });
          }
        }
        function Hl(h, s) {
          return "step" in h && !m(h.step) ? new ur(h.step, s) : null;
        }
        function Wl(h) {
          return !m(h.max) && !m(h.min) ? new Li({
            max: h.max,
            min: h.min
          }) : !m(h.max) || !m(h.min) ? new tl({
            max: h.max,
            min: h.min
          }) : null;
        }
        function Hp(h) {
          const s = yn(h, Li);
          if (s) return [
            s.values.get("min"),
            s.values.get("max")
          ];
          const a = yn(h, tl);
          return a ? [
            a.minValue,
            a.maxValue
          ] : [
            void 0,
            void 0
          ];
        }
        function Wp(h, s) {
          const a = [], p = Hl(h, s);
          p && a.push(p);
          const x = Wl(h);
          x && a.push(x);
          const R = go(h.options);
          return R && a.push(R), new ws(a);
        }
        const jp = {
          id: "input-number",
          type: "input",
          accept: (h, s) => {
            if (typeof h != "number") return null;
            const a = ne, p = oe(s, {
              format: a.optional.function,
              max: a.optional.number,
              min: a.optional.number,
              options: a.optional.custom(fr),
              step: a.optional.number
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => hl,
            constraint: (h) => Wp(h.params, h.initialValue),
            writer: (h) => Ls
          },
          controller: (h) => {
            var s;
            const a = h.value, p = h.constraint, x = p && yn(p, Ms);
            if (x) return new Ss(h.document, {
              props: new H({
                options: x.values.value("options")
              }),
              value: a,
              viewProps: h.viewProps
            });
            const R = (s = "format" in h.params ? h.params.format : void 0) !== null && s !== void 0 ? s : Rt(mr(p, a.rawValue)), U = p && yn(p, Li);
            return U ? new mo(h.document, {
              baseStep: Ri(p),
              parser: wn,
              sliderProps: new H({
                maxValue: U.values.value("max"),
                minValue: U.values.value("min")
              }),
              textProps: H.fromObject({
                draggingScale: Di(p, a.rawValue),
                formatter: R
              }),
              value: a,
              viewProps: h.viewProps
            }) : new Ps(h.document, {
              baseStep: Ri(p),
              parser: wn,
              props: H.fromObject({
                draggingScale: Di(p, a.rawValue),
                formatter: R
              }),
              value: a,
              viewProps: h.viewProps
            });
          }
        };
        class Gn {
          constructor(s = 0, a = 0) {
            this.x = s, this.y = a;
          }
          getComponents() {
            return [
              this.x,
              this.y
            ];
          }
          static isObject(s) {
            if (m(s)) return false;
            const a = s.x, p = s.y;
            return !(typeof a != "number" || typeof p != "number");
          }
          static equals(s, a) {
            return s.x === a.x && s.y === a.y;
          }
          toObject() {
            return {
              x: this.x,
              y: this.y
            };
          }
        }
        const jl = {
          toComponents: (h) => h.getComponents(),
          fromComponents: (h) => new Gn(...h)
        }, ki = M("p2d");
        class qp {
          constructor(s, a) {
            this.element = s.createElement("div"), this.element.classList.add(ki()), a.viewProps.bindClassModifiers(this.element), F(a.expanded, V(this.element, ki(void 0, "expanded")));
            const p = s.createElement("div");
            p.classList.add(ki("h")), this.element.appendChild(p);
            const x = s.createElement("button");
            x.classList.add(ki("b")), x.appendChild(K(s, "p2dpad")), a.viewProps.bindDisabled(x), p.appendChild(x), this.buttonElement = x;
            const R = s.createElement("div");
            if (R.classList.add(ki("t")), p.appendChild(R), this.textElement = R, a.pickerLayout === "inline") {
              const U = s.createElement("div");
              U.classList.add(ki("p")), this.element.appendChild(U), this.pickerElement = U;
            } else this.pickerElement = null;
          }
        }
        const Hn = M("p2dp");
        class Xp {
          constructor(s, a) {
            this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.invertsY_ = a.invertsY, this.maxValue_ = a.maxValue, this.element = s.createElement("div"), this.element.classList.add(Hn()), a.layout === "popup" && this.element.classList.add(Hn(void 0, "p")), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("div");
            p.classList.add(Hn("p")), a.viewProps.bindTabIndex(p), this.element.appendChild(p), this.padElement = p;
            const x = s.createElementNS(Qe, "svg");
            x.classList.add(Hn("g")), this.padElement.appendChild(x), this.svgElem_ = x;
            const R = s.createElementNS(Qe, "line");
            R.classList.add(Hn("ax")), R.setAttributeNS(null, "x1", "0"), R.setAttributeNS(null, "y1", "50%"), R.setAttributeNS(null, "x2", "100%"), R.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(R);
            const U = s.createElementNS(Qe, "line");
            U.classList.add(Hn("ax")), U.setAttributeNS(null, "x1", "50%"), U.setAttributeNS(null, "y1", "0"), U.setAttributeNS(null, "x2", "50%"), U.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(U);
            const le = s.createElementNS(Qe, "line");
            le.classList.add(Hn("l")), le.setAttributeNS(null, "x1", "50%"), le.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(le), this.lineElem_ = le;
            const Ce = s.createElement("div");
            Ce.classList.add(Hn("m")), this.padElement.appendChild(Ce), this.markerElem_ = Ce, a.value.emitter.on("change", this.onValueChange_), this.value = a.value, this.update_();
          }
          get allFocusableElements() {
            return [
              this.padElement
            ];
          }
          update_() {
            const [s, a] = this.value.rawValue.getComponents(), p = this.maxValue_, x = lt(s, -p, +p, 0, 100), R = lt(a, -p, +p, 0, 100), U = this.invertsY_ ? 100 - R : R;
            this.lineElem_.setAttributeNS(null, "x2", `${x}%`), this.lineElem_.setAttributeNS(null, "y2", `${U}%`), this.markerElem_.style.left = `${x}%`, this.markerElem_.style.top = `${U}%`;
          }
          onValueChange_() {
            this.update_();
          }
          onFoldableChange_() {
            this.update_();
          }
        }
        function ql(h, s, a) {
          return [
            jt(s[0], Mn(h)),
            jt(s[1], As(h)) * (a ? 1 : -1)
          ];
        }
        class Kp {
          constructor(s, a) {
            this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.baseSteps_ = a.baseSteps, this.maxValue_ = a.maxValue, this.invertsY_ = a.invertsY, this.view = new Xp(s, {
              invertsY: this.invertsY_,
              layout: a.layout,
              maxValue: this.maxValue_,
              value: this.value,
              viewProps: this.viewProps
            }), this.ptHandler_ = new ii(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
          }
          handlePointerEvent_(s, a) {
            if (!s.point) return;
            const p = this.maxValue_, x = lt(s.point.x, 0, s.bounds.width, -p, +p), R = lt(this.invertsY_ ? s.bounds.height - s.point.y : s.point.y, 0, s.bounds.height, -p, +p);
            this.value.setRawValue(new Gn(x, R), a);
          }
          onPointerDown_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerMove_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: false,
              last: false
            });
          }
          onPointerUp_(s) {
            this.handlePointerEvent_(s.data, {
              forceEmit: true,
              last: true
            });
          }
          onPadKeyDown_(s) {
            dl(s.key) && s.preventDefault();
            const [a, p] = ql(s, this.baseSteps_, this.invertsY_);
            a === 0 && p === 0 || this.value.setRawValue(new Gn(this.value.rawValue.x + a, this.value.rawValue.y + p), {
              forceEmit: false,
              last: false
            });
          }
          onPadKeyUp_(s) {
            const [a, p] = ql(s, this.baseSteps_, this.invertsY_);
            a === 0 && p === 0 || this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }
        class Yp {
          constructor(s, a) {
            var p, x;
            this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = a.value, this.viewProps = a.viewProps, this.foldable_ = Oe.create(a.expanded), this.popC_ = a.pickerLayout === "popup" ? new il(s, {
              viewProps: this.viewProps
            }) : null;
            const R = new Kp(s, {
              baseSteps: [
                a.axes[0].baseStep,
                a.axes[1].baseStep
              ],
              invertsY: a.invertsY,
              layout: a.pickerLayout,
              maxValue: a.maxValue,
              value: this.value,
              viewProps: this.viewProps
            });
            R.view.allFocusableElements.forEach((U) => {
              U.addEventListener("blur", this.onPopupChildBlur_), U.addEventListener("keydown", this.onPopupChildKeydown_);
            }), this.pickerC_ = R, this.textC_ = new Ao(s, {
              assembly: jl,
              axes: a.axes,
              parser: a.parser,
              value: this.value,
              viewProps: this.viewProps
            }), this.view = new qp(s, {
              expanded: this.foldable_.value("expanded"),
              pickerLayout: a.pickerLayout,
              viewProps: this.viewProps
            }), this.view.textElement.appendChild(this.textC_.view.element), (p = this.view.buttonElement) === null || p === void 0 || p.addEventListener("blur", this.onPadButtonBlur_), (x = this.view.buttonElement) === null || x === void 0 || x.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), Cs({
              primary: this.foldable_.value("expanded"),
              secondary: this.popC_.shows,
              forward: (U) => U.rawValue,
              backward: (U, le) => le.rawValue
            })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Y(this.foldable_, this.view.pickerElement));
          }
          onPadButtonBlur_(s) {
            if (!this.popC_) return;
            const a = this.view.element, p = s.relatedTarget;
            (!p || !a.contains(p)) && (this.popC_.shows.rawValue = false);
          }
          onPadButtonClick_() {
            this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
          }
          onPopupChildBlur_(s) {
            if (!this.popC_) return;
            const a = this.popC_.view.element, p = D(s);
            p && a.contains(p) || p && p === this.view.buttonElement && !Ke(a.ownerDocument) || (this.popC_.shows.rawValue = false);
          }
          onPopupChildKeydown_(s) {
            this.popC_ ? s.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && s.key === "Escape" && this.view.buttonElement.focus();
          }
        }
        class Ni {
          constructor(s = 0, a = 0, p = 0) {
            this.x = s, this.y = a, this.z = p;
          }
          getComponents() {
            return [
              this.x,
              this.y,
              this.z
            ];
          }
          static isObject(s) {
            if (m(s)) return false;
            const a = s.x, p = s.y, x = s.z;
            return !(typeof a != "number" || typeof p != "number" || typeof x != "number");
          }
          static equals(s, a) {
            return s.x === a.x && s.y === a.y && s.z === a.z;
          }
          toObject() {
            return {
              x: this.x,
              y: this.y,
              z: this.z
            };
          }
        }
        const Xl = {
          toComponents: (h) => h.getComponents(),
          fromComponents: (h) => new Ni(...h)
        };
        function $p(h) {
          return Ni.isObject(h) ? new Ni(h.x, h.y, h.z) : new Ni();
        }
        function Zp(h, s) {
          h.writeProperty("x", s.x), h.writeProperty("y", s.y), h.writeProperty("z", s.z);
        }
        function Jp(h, s) {
          return new zn({
            assembly: Xl,
            components: [
              Sn("x" in h ? h.x : void 0, s.x),
              Sn("y" in h ? h.y : void 0, s.y),
              Sn("z" in h ? h.z : void 0, s.z)
            ]
          });
        }
        function Po(h, s) {
          return {
            baseStep: Ri(s),
            constraint: s,
            textProps: H.fromObject({
              draggingScale: Di(s, h),
              formatter: Rt(mr(s, h))
            })
          };
        }
        const Qp = {
          id: "input-point3d",
          type: "input",
          accept: (h, s) => {
            if (!Ni.isObject(h)) return null;
            const a = ne, p = oe(s, {
              x: a.optional.custom(Bn),
              y: a.optional.custom(Bn),
              z: a.optional.custom(Bn)
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => $p,
            constraint: (h) => Jp(h.params, h.initialValue),
            equals: Ni.equals,
            writer: (h) => Zp
          },
          controller: (h) => {
            const s = h.value, a = h.constraint;
            if (!(a instanceof zn)) throw _.shouldNeverHappen();
            return new Ao(h.document, {
              assembly: Xl,
              axes: [
                Po(s.rawValue.x, a.components[0]),
                Po(s.rawValue.y, a.components[1]),
                Po(s.rawValue.z, a.components[2])
              ],
              parser: wn,
              value: s,
              viewProps: h.viewProps
            });
          }
        };
        class Oi {
          constructor(s = 0, a = 0, p = 0, x = 0) {
            this.x = s, this.y = a, this.z = p, this.w = x;
          }
          getComponents() {
            return [
              this.x,
              this.y,
              this.z,
              this.w
            ];
          }
          static isObject(s) {
            if (m(s)) return false;
            const a = s.x, p = s.y, x = s.z, R = s.w;
            return !(typeof a != "number" || typeof p != "number" || typeof x != "number" || typeof R != "number");
          }
          static equals(s, a) {
            return s.x === a.x && s.y === a.y && s.z === a.z && s.w === a.w;
          }
          toObject() {
            return {
              x: this.x,
              y: this.y,
              z: this.z,
              w: this.w
            };
          }
        }
        const Kl = {
          toComponents: (h) => h.getComponents(),
          fromComponents: (h) => new Oi(...h)
        };
        function ef(h) {
          return Oi.isObject(h) ? new Oi(h.x, h.y, h.z, h.w) : new Oi();
        }
        function tf(h, s) {
          h.writeProperty("x", s.x), h.writeProperty("y", s.y), h.writeProperty("z", s.z), h.writeProperty("w", s.w);
        }
        function nf(h, s) {
          return new zn({
            assembly: Kl,
            components: [
              Sn("x" in h ? h.x : void 0, s.x),
              Sn("y" in h ? h.y : void 0, s.y),
              Sn("z" in h ? h.z : void 0, s.z),
              Sn("w" in h ? h.w : void 0, s.w)
            ]
          });
        }
        function sf(h, s) {
          return {
            baseStep: Ri(s),
            constraint: s,
            textProps: H.fromObject({
              draggingScale: Di(s, h),
              formatter: Rt(mr(s, h))
            })
          };
        }
        const rf = {
          id: "input-point4d",
          type: "input",
          accept: (h, s) => {
            if (!Oi.isObject(h)) return null;
            const a = ne, p = oe(s, {
              x: a.optional.custom(Bn),
              y: a.optional.custom(Bn),
              z: a.optional.custom(Bn),
              w: a.optional.custom(Bn)
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => ef,
            constraint: (h) => nf(h.params, h.initialValue),
            equals: Oi.equals,
            writer: (h) => tf
          },
          controller: (h) => {
            const s = h.value, a = h.constraint;
            if (!(a instanceof zn)) throw _.shouldNeverHappen();
            return new Ao(h.document, {
              assembly: Kl,
              axes: s.rawValue.getComponents().map((p, x) => sf(p, a.components[x])),
              parser: wn,
              value: s,
              viewProps: h.viewProps
            });
          }
        };
        function of(h) {
          const s = [], a = go(h.options);
          return a && s.push(a), new ws(s);
        }
        const af = {
          id: "input-string",
          type: "input",
          accept: (h, s) => {
            if (typeof h != "string") return null;
            const p = oe(s, {
              options: ne.optional.custom(fr)
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => ul,
            constraint: (h) => of(h.params),
            writer: (h) => Ls
          },
          controller: (h) => {
            const s = h.document, a = h.value, p = h.constraint, x = p && yn(p, Ms);
            return x ? new Ss(s, {
              props: new H({
                options: x.values.value("options")
              }),
              value: a,
              viewProps: h.viewProps
            }) : new dr(s, {
              parser: (R) => R,
              props: H.fromObject({
                formatter: ho
              }),
              value: a,
              viewProps: h.viewProps
            });
          }
        }, Ds = {
          monitor: {
            defaultInterval: 200,
            defaultLineCount: 3
          }
        }, Yl = M("mll");
        class lf {
          constructor(s, a) {
            this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = a.formatter, this.element = s.createElement("div"), this.element.classList.add(Yl()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("textarea");
            p.classList.add(Yl("i")), p.style.height = `calc(var(--bld-us) * ${a.lineCount})`, p.readOnly = true, a.viewProps.bindDisabled(p), this.element.appendChild(p), this.textareaElem_ = p, a.value.emitter.on("change", this.onValueUpdate_), this.value = a.value, this.update_();
          }
          update_() {
            const s = this.textareaElem_, a = s.scrollTop === s.scrollHeight - s.clientHeight, p = [];
            this.value.rawValue.forEach((x) => {
              x !== void 0 && p.push(this.formatter_(x));
            }), s.textContent = p.join(`
`), a && (s.scrollTop = s.scrollHeight);
          }
          onValueUpdate_() {
            this.update_();
          }
        }
        class Lo {
          constructor(s, a) {
            this.value = a.value, this.viewProps = a.viewProps, this.view = new lf(s, {
              formatter: a.formatter,
              lineCount: a.lineCount,
              value: this.value,
              viewProps: this.viewProps
            });
          }
        }
        const $l = M("sgl");
        class cf {
          constructor(s, a) {
            this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = a.formatter, this.element = s.createElement("div"), this.element.classList.add($l()), a.viewProps.bindClassModifiers(this.element);
            const p = s.createElement("input");
            p.classList.add($l("i")), p.readOnly = true, p.type = "text", a.viewProps.bindDisabled(p), this.element.appendChild(p), this.inputElement = p, a.value.emitter.on("change", this.onValueUpdate_), this.value = a.value, this.update_();
          }
          update_() {
            const s = this.value.rawValue, a = s[s.length - 1];
            this.inputElement.value = a !== void 0 ? this.formatter_(a) : "";
          }
          onValueUpdate_() {
            this.update_();
          }
        }
        class Ro {
          constructor(s, a) {
            this.value = a.value, this.viewProps = a.viewProps, this.view = new cf(s, {
              formatter: a.formatter,
              value: this.value,
              viewProps: this.viewProps
            });
          }
        }
        const hf = {
          id: "monitor-bool",
          type: "monitor",
          accept: (h, s) => {
            if (typeof h != "boolean") return null;
            const p = oe(s, {
              lineCount: ne.optional.number
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => rl
          },
          controller: (h) => {
            var s;
            return h.value.rawValue.length === 1 ? new Ro(h.document, {
              formatter: ol,
              value: h.value,
              viewProps: h.viewProps
            }) : new Lo(h.document, {
              formatter: ol,
              lineCount: (s = h.params.lineCount) !== null && s !== void 0 ? s : Ds.monitor.defaultLineCount,
              value: h.value,
              viewProps: h.viewProps
            });
          }
        }, Wn = M("grl");
        class uf {
          constructor(s, a) {
            this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = s.createElement("div"), this.element.classList.add(Wn()), a.viewProps.bindClassModifiers(this.element), this.formatter_ = a.formatter, this.props_ = a.props, this.cursor_ = a.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
            const p = s.createElementNS(Qe, "svg");
            p.classList.add(Wn("g")), p.style.height = `calc(var(--bld-us) * ${a.lineCount})`, this.element.appendChild(p), this.svgElem_ = p;
            const x = s.createElementNS(Qe, "polyline");
            this.svgElem_.appendChild(x), this.lineElem_ = x;
            const R = s.createElement("div");
            R.classList.add(Wn("t"), M("tt")()), this.element.appendChild(R), this.tooltipElem_ = R, a.value.emitter.on("change", this.onValueUpdate_), this.value = a.value, this.update_();
          }
          get graphElement() {
            return this.svgElem_;
          }
          update_() {
            const s = this.svgElem_.getBoundingClientRect(), a = this.value.rawValue.length - 1, p = this.props_.get("minValue"), x = this.props_.get("maxValue"), R = [];
            this.value.rawValue.forEach((Je, et) => {
              if (Je === void 0) return;
              const li = lt(et, 0, a, 0, s.width), Is = lt(Je, p, x, s.height, 0);
              R.push([
                li,
                Is
              ].join(","));
            }), this.lineElem_.setAttributeNS(null, "points", R.join(" "));
            const U = this.tooltipElem_, le = this.value.rawValue[this.cursor_.rawValue];
            if (le === void 0) {
              U.classList.remove(Wn("t", "a"));
              return;
            }
            const Ce = lt(this.cursor_.rawValue, 0, a, 0, s.width), Pe = lt(le, p, x, s.height, 0);
            U.style.left = `${Ce}px`, U.style.top = `${Pe}px`, U.textContent = `${this.formatter_(le)}`, U.classList.contains(Wn("t", "a")) || (U.classList.add(Wn("t", "a"), Wn("t", "in")), gt(U), U.classList.remove(Wn("t", "in")));
          }
          onValueUpdate_() {
            this.update_();
          }
          onCursorChange_() {
            this.update_();
          }
        }
        class df {
          constructor(s, a) {
            if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props_ = a.props, this.value = a.value, this.viewProps = a.viewProps, this.cursor_ = te(-1), this.view = new uf(s, {
              cursor: this.cursor_,
              formatter: a.formatter,
              lineCount: a.lineCount,
              props: this.props_,
              value: this.value,
              viewProps: this.viewProps
            }), !Ke(s)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
            else {
              const p = new ii(this.view.element);
              p.emitter.on("down", this.onGraphPointerDown_), p.emitter.on("move", this.onGraphPointerMove_), p.emitter.on("up", this.onGraphPointerUp_);
            }
          }
          onGraphMouseLeave_() {
            this.cursor_.rawValue = -1;
          }
          onGraphMouseMove_(s) {
            const a = this.view.element.getBoundingClientRect();
            this.cursor_.rawValue = Math.floor(lt(s.offsetX, 0, a.width, 0, this.value.rawValue.length));
          }
          onGraphPointerDown_(s) {
            this.onGraphPointerMove_(s);
          }
          onGraphPointerMove_(s) {
            if (!s.data.point) {
              this.cursor_.rawValue = -1;
              return;
            }
            this.cursor_.rawValue = Math.floor(lt(s.data.point.x, 0, s.data.bounds.width, 0, this.value.rawValue.length));
          }
          onGraphPointerUp_() {
            this.cursor_.rawValue = -1;
          }
        }
        function Do(h) {
          return "format" in h && !m(h.format) ? h.format : Rt(2);
        }
        function pf(h) {
          var s;
          return h.value.rawValue.length === 1 ? new Ro(h.document, {
            formatter: Do(h.params),
            value: h.value,
            viewProps: h.viewProps
          }) : new Lo(h.document, {
            formatter: Do(h.params),
            lineCount: (s = h.params.lineCount) !== null && s !== void 0 ? s : Ds.monitor.defaultLineCount,
            value: h.value,
            viewProps: h.viewProps
          });
        }
        function ff(h) {
          var s, a, p;
          return new df(h.document, {
            formatter: Do(h.params),
            lineCount: (s = h.params.lineCount) !== null && s !== void 0 ? s : Ds.monitor.defaultLineCount,
            props: H.fromObject({
              maxValue: (a = "max" in h.params ? h.params.max : null) !== null && a !== void 0 ? a : 100,
              minValue: (p = "min" in h.params ? h.params.min : null) !== null && p !== void 0 ? p : 0
            }),
            value: h.value,
            viewProps: h.viewProps
          });
        }
        function Zl(h) {
          return "view" in h && h.view === "graph";
        }
        const mf = {
          id: "monitor-number",
          type: "monitor",
          accept: (h, s) => {
            if (typeof h != "number") return null;
            const a = ne, p = oe(s, {
              format: a.optional.function,
              lineCount: a.optional.number,
              max: a.optional.number,
              min: a.optional.number,
              view: a.optional.string
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            defaultBufferSize: (h) => Zl(h) ? 64 : 1,
            reader: (h) => hl
          },
          controller: (h) => Zl(h.params) ? ff(h) : pf(h)
        }, gf = {
          id: "monitor-string",
          type: "monitor",
          accept: (h, s) => {
            if (typeof h != "string") return null;
            const a = ne, p = oe(s, {
              lineCount: a.optional.number,
              multiline: a.optional.boolean
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => ul
          },
          controller: (h) => {
            var s;
            const a = h.value;
            return a.rawValue.length > 1 || "multiline" in h.params && h.params.multiline ? new Lo(h.document, {
              formatter: ho,
              lineCount: (s = h.params.lineCount) !== null && s !== void 0 ? s : Ds.monitor.defaultLineCount,
              value: a,
              viewProps: h.viewProps
            }) : new Ro(h.document, {
              formatter: ho,
              value: a,
              viewProps: h.viewProps
            });
          }
        };
        function _f(h, s) {
          var a;
          const p = h.accept(s.target.read(), s.params);
          if (m(p)) return null;
          const x = ne, R = {
            target: s.target,
            initialValue: p.initialValue,
            params: p.params
          }, U = h.binding.reader(R), le = h.binding.constraint ? h.binding.constraint(R) : void 0, Ce = te(U(p.initialValue), {
            constraint: le,
            equals: h.binding.equals
          }), Pe = new Gu({
            reader: U,
            target: s.target,
            value: Ce,
            writer: h.binding.writer(R)
          }), Je = x.optional.boolean(s.params.disabled).value, et = x.optional.boolean(s.params.hidden).value, li = h.controller({
            constraint: le,
            document: s.document,
            initialValue: p.initialValue,
            params: p.params,
            value: Pe.value,
            viewProps: Ue.create({
              disabled: Je,
              hidden: et
            })
          });
          return new Ye(s.document, {
            binding: Pe,
            blade: Ne(),
            props: H.fromObject({
              label: "label" in s.params ? (a = x.optional.string(s.params.label).value) !== null && a !== void 0 ? a : null : s.target.key
            }),
            valueController: li
          });
        }
        function vf(h, s) {
          return s === 0 ? new Vu() : new zu(h, s ?? Ds.monitor.defaultInterval);
        }
        function bf(h, s) {
          var a, p, x;
          const R = ne, U = h.accept(s.target.read(), s.params);
          if (m(U)) return null;
          const le = {
            target: s.target,
            initialValue: U.initialValue,
            params: U.params
          }, Ce = h.binding.reader(le), Pe = (p = (a = R.optional.number(s.params.bufferSize).value) !== null && a !== void 0 ? a : h.binding.defaultBufferSize && h.binding.defaultBufferSize(U.params)) !== null && p !== void 0 ? p : 1, Je = R.optional.number(s.params.interval).value, et = new qu({
            reader: Ce,
            target: s.target,
            ticker: vf(s.document, Je),
            value: Hu(Pe)
          }), li = R.optional.boolean(s.params.disabled).value, Is = R.optional.boolean(s.params.hidden).value, ks = h.controller({
            document: s.document,
            params: U.params,
            value: et.value,
            viewProps: Ue.create({
              disabled: li,
              hidden: Is
            })
          });
          return new ft(s.document, {
            binding: et,
            blade: Ne(),
            props: H.fromObject({
              label: "label" in s.params ? (x = R.optional.string(s.params.label).value) !== null && x !== void 0 ? x : null : s.target.key
            }),
            valueController: ks
          });
        }
        class xf {
          constructor() {
            this.pluginsMap_ = {
              blades: [],
              inputs: [],
              monitors: []
            };
          }
          getAll() {
            return [
              ...this.pluginsMap_.blades,
              ...this.pluginsMap_.inputs,
              ...this.pluginsMap_.monitors
            ];
          }
          register(s) {
            s.type === "blade" ? this.pluginsMap_.blades.unshift(s) : s.type === "input" ? this.pluginsMap_.inputs.unshift(s) : s.type === "monitor" && this.pluginsMap_.monitors.unshift(s);
          }
          createInput(s, a, p) {
            const x = a.read();
            if (m(x)) throw new _({
              context: {
                key: a.key
              },
              type: "nomatchingcontroller"
            });
            const R = this.pluginsMap_.inputs.reduce((U, le) => U ?? _f(le, {
              document: s,
              target: a,
              params: p
            }), null);
            if (R) return R;
            throw new _({
              context: {
                key: a.key
              },
              type: "nomatchingcontroller"
            });
          }
          createMonitor(s, a, p) {
            const x = this.pluginsMap_.monitors.reduce((R, U) => R ?? bf(U, {
              document: s,
              params: p,
              target: a
            }), null);
            if (x) return x;
            throw new _({
              context: {
                key: a.key
              },
              type: "nomatchingcontroller"
            });
          }
          createBlade(s, a) {
            const p = this.pluginsMap_.blades.reduce((x, R) => x ?? Bu(R, {
              document: s,
              params: a
            }), null);
            if (!p) throw new _({
              type: "nomatchingview",
              context: {
                params: a
              }
            });
            return p;
          }
          createBladeApi(s) {
            if (s instanceof Ye) return new an(s);
            if (s instanceof ft) return new Xt(s);
            if (s instanceof Ge) return new Ti(s, this);
            const a = this.pluginsMap_.blades.reduce((p, x) => p ?? x.api({
              controller: s,
              pool: this
            }), null);
            if (!a) throw _.shouldNeverHappen();
            return a;
          }
        }
        function yf() {
          const h = new xf();
          return [
            Cf,
            Qp,
            rf,
            af,
            jp,
            Vp,
            Bp,
            Np,
            kd,
            hf,
            gf,
            mf,
            we,
            Ut,
            bt,
            Qa
          ].forEach((s) => {
            h.register(s);
          }), h;
        }
        function wf(h) {
          return Gn.isObject(h) ? new Gn(h.x, h.y) : new Gn();
        }
        function Mf(h, s) {
          h.writeProperty("x", s.x), h.writeProperty("y", s.y);
        }
        function Sn(h, s) {
          if (!h) return;
          const a = [], p = Hl(h, s);
          p && a.push(p);
          const x = Wl(h);
          return x && a.push(x), new ws(a);
        }
        function Sf(h, s) {
          return new zn({
            assembly: jl,
            components: [
              Sn("x" in h ? h.x : void 0, s.x),
              Sn("y" in h ? h.y : void 0, s.y)
            ]
          });
        }
        function Jl(h, s) {
          const [a, p] = h ? Hp(h) : [];
          if (!m(a) || !m(p)) return Math.max(Math.abs(a ?? 0), Math.abs(p ?? 0));
          const x = Ri(h);
          return Math.max(Math.abs(x) * 10, Math.abs(s) * 10);
        }
        function Ef(h, s) {
          const a = s instanceof zn ? s.components[0] : void 0, p = s instanceof zn ? s.components[1] : void 0, x = Jl(a, h.x), R = Jl(p, h.y);
          return Math.max(x, R);
        }
        function Ql(h, s) {
          return {
            baseStep: Ri(s),
            constraint: s,
            textProps: H.fromObject({
              draggingScale: Di(s, h),
              formatter: Rt(mr(s, h))
            })
          };
        }
        function Tf(h) {
          if (!("y" in h)) return false;
          const s = h.y;
          return s && "inverted" in s ? !!s.inverted : false;
        }
        const Cf = {
          id: "input-point2d",
          type: "input",
          accept: (h, s) => {
            if (!Gn.isObject(h)) return null;
            const a = ne, p = oe(s, {
              expanded: a.optional.boolean,
              picker: a.optional.custom(ml),
              x: a.optional.custom(Bn),
              y: a.optional.object({
                inverted: a.optional.boolean,
                max: a.optional.number,
                min: a.optional.number,
                step: a.optional.number
              })
            });
            return p ? {
              initialValue: h,
              params: p
            } : null;
          },
          binding: {
            reader: (h) => wf,
            constraint: (h) => Sf(h.params, h.initialValue),
            equals: Gn.equals,
            writer: (h) => Mf
          },
          controller: (h) => {
            const s = h.document, a = h.value, p = h.constraint;
            if (!(p instanceof zn)) throw _.shouldNeverHappen();
            const x = "expanded" in h.params ? h.params.expanded : void 0, R = "picker" in h.params ? h.params.picker : void 0;
            return new Yp(s, {
              axes: [
                Ql(a.rawValue.x, p.components[0]),
                Ql(a.rawValue.y, p.components[1])
              ],
              expanded: x ?? false,
              invertsY: Tf(h.params),
              maxValue: Ef(a.rawValue, p),
              parser: wn,
              pickerLayout: R ?? "popup",
              value: a,
              viewProps: h.viewProps
            });
          }
        };
        class ec extends i {
          constructor(s) {
            super(s), this.emitter_ = new C(), this.controller_.valueController.value.emitter.on("change", (a) => {
              this.emitter_.emit("change", {
                event: new l(this, a.rawValue)
              });
            });
          }
          get label() {
            return this.controller_.props.get("label");
          }
          set label(s) {
            this.controller_.props.set("label", s);
          }
          get options() {
            return this.controller_.valueController.props.get("options");
          }
          set options(s) {
            this.controller_.valueController.props.set("options", s);
          }
          get value() {
            return this.controller_.valueController.value.rawValue;
          }
          set value(s) {
            this.controller_.valueController.value.rawValue = s;
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
        }
        class tc extends i {
          constructor(s) {
            super(s), this.emitter_ = new C(), this.controller_.valueController.value.emitter.on("change", (a) => {
              this.emitter_.emit("change", {
                event: new l(this, a.rawValue)
              });
            });
          }
          get label() {
            return this.controller_.props.get("label");
          }
          set label(s) {
            this.controller_.props.set("label", s);
          }
          get maxValue() {
            return this.controller_.valueController.sliderController.props.get("maxValue");
          }
          set maxValue(s) {
            this.controller_.valueController.sliderController.props.set("maxValue", s);
          }
          get minValue() {
            return this.controller_.valueController.sliderController.props.get("minValue");
          }
          set minValue(s) {
            this.controller_.valueController.sliderController.props.set("minValue", s);
          }
          get value() {
            return this.controller_.valueController.value.rawValue;
          }
          set value(s) {
            this.controller_.valueController.value.rawValue = s;
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
        }
        class nc extends i {
          constructor(s) {
            super(s), this.emitter_ = new C(), this.controller_.valueController.value.emitter.on("change", (a) => {
              this.emitter_.emit("change", {
                event: new l(this, a.rawValue)
              });
            });
          }
          get label() {
            return this.controller_.props.get("label");
          }
          set label(s) {
            this.controller_.props.set("label", s);
          }
          get formatter() {
            return this.controller_.valueController.props.get("formatter");
          }
          set formatter(s) {
            this.controller_.valueController.props.set("formatter", s);
          }
          get value() {
            return this.controller_.valueController.value.rawValue;
          }
          set value(s) {
            this.controller_.valueController.value.rawValue = s;
          }
          on(s, a) {
            const p = a.bind(this);
            return this.emitter_.on(s, (x) => {
              p(x.event);
            }), this;
          }
        }
        const Af = /* @__PURE__ */ (function() {
          return {
            id: "list",
            type: "blade",
            accept(h) {
              const s = ne, a = oe(h, {
                options: s.required.custom(fr),
                value: s.required.raw,
                view: s.required.constant("list"),
                label: s.optional.string
              });
              return a ? {
                params: a
              } : null;
            },
            controller(h) {
              const s = new Ms(gl(h.params.options)), a = te(h.params.value, {
                constraint: s
              }), p = new Ss(h.document, {
                props: new H({
                  options: s.values.value("options")
                }),
                value: a,
                viewProps: h.viewProps
              });
              return new Nt(h.document, {
                blade: h.blade,
                props: H.fromObject({
                  label: h.params.label
                }),
                valueController: p
              });
            },
            api(h) {
              return !(h.controller instanceof Nt) || !(h.controller.valueController instanceof Ss) ? null : new ec(h.controller);
            }
          };
        })();
        function Pf(h) {
          return h.reduce((s, a) => Object.assign(s, {
            [a.presetKey]: a.read()
          }), {});
        }
        function Lf(h, s) {
          h.forEach((a) => {
            const p = s[a.target.presetKey];
            p !== void 0 && a.writer(a.target, a.reader(p));
          });
        }
        class Rf extends A {
          constructor(s, a) {
            super(s, a);
          }
          get element() {
            return this.controller_.view.element;
          }
          importPreset(s) {
            const a = this.controller_.rackController.rack.find(Ye).map((p) => p.binding);
            Lf(a, s), this.refresh();
          }
          exportPreset() {
            const s = this.controller_.rackController.rack.find(Ye).map((a) => a.binding.target);
            return Pf(s);
          }
          refresh() {
            this.controller_.rackController.rack.find(Ye).forEach((s) => {
              s.binding.read();
            }), this.controller_.rackController.rack.find(ft).forEach((s) => {
              s.binding.read();
            });
          }
        }
        class Df extends at {
          constructor(s, a) {
            super(s, {
              expanded: a.expanded,
              blade: a.blade,
              props: a.props,
              root: true,
              viewProps: a.viewProps
            });
          }
        }
        const If = {
          id: "slider",
          type: "blade",
          accept(h) {
            const s = ne, a = oe(h, {
              max: s.required.number,
              min: s.required.number,
              view: s.required.constant("slider"),
              format: s.optional.function,
              label: s.optional.string,
              value: s.optional.number
            });
            return a ? {
              params: a
            } : null;
          },
          controller(h) {
            var s, a;
            const p = (s = h.params.value) !== null && s !== void 0 ? s : 0, x = new Li({
              max: h.params.max,
              min: h.params.min
            }), R = new mo(h.document, {
              baseStep: 1,
              parser: wn,
              sliderProps: new H({
                maxValue: x.values.value("max"),
                minValue: x.values.value("min")
              }),
              textProps: H.fromObject({
                draggingScale: Di(void 0, p),
                formatter: (a = h.params.format) !== null && a !== void 0 ? a : Md
              }),
              value: te(p, {
                constraint: x
              }),
              viewProps: h.viewProps
            });
            return new Nt(h.document, {
              blade: h.blade,
              props: H.fromObject({
                label: h.params.label
              }),
              valueController: R
            });
          },
          api(h) {
            return !(h.controller instanceof Nt) || !(h.controller.valueController instanceof mo) ? null : new tc(h.controller);
          }
        }, kf = /* @__PURE__ */ (function() {
          return {
            id: "text",
            type: "blade",
            accept(h) {
              const s = ne, a = oe(h, {
                parse: s.required.function,
                value: s.required.raw,
                view: s.required.constant("text"),
                format: s.optional.function,
                label: s.optional.string
              });
              return a ? {
                params: a
              } : null;
            },
            controller(h) {
              var s;
              const a = new dr(h.document, {
                parser: h.params.parse,
                props: H.fromObject({
                  formatter: (s = h.params.format) !== null && s !== void 0 ? s : ((p) => String(p))
                }),
                value: te(h.params.value),
                viewProps: h.viewProps
              });
              return new Nt(h.document, {
                blade: h.blade,
                props: H.fromObject({
                  label: h.params.label
                }),
                valueController: a
              });
            },
            api(h) {
              return !(h.controller instanceof Nt) || !(h.controller.valueController instanceof dr) ? null : new nc(h.controller);
            }
          };
        })();
        function Nf(h) {
          const s = h.createElement("div");
          return s.classList.add(M("dfw")()), h.body && h.body.appendChild(s), s;
        }
        function ic(h, s, a) {
          if (h.querySelector(`style[data-tp-style=${s}]`)) return;
          const p = h.createElement("style");
          p.dataset.tpStyle = s, p.textContent = a, h.head.appendChild(p);
        }
        class Of extends Rf {
          constructor(s) {
            var a, p;
            const x = s ?? {}, R = (a = x.document) !== null && a !== void 0 ? a : kt(), U = yf(), le = new Df(R, {
              expanded: x.expanded,
              blade: Ne(),
              props: H.fromObject({
                title: x.title
              }),
              viewProps: Ue.create()
            });
            super(le, U), this.pool_ = U, this.containerElem_ = (p = x.container) !== null && p !== void 0 ? p : Nf(R), this.containerElem_.appendChild(this.element), this.doc_ = R, this.usesDefaultWrapper_ = !x.container, this.setUpDefaultPlugins_();
          }
          get document() {
            if (!this.doc_) throw _.alreadyDisposed();
            return this.doc_;
          }
          dispose() {
            const s = this.containerElem_;
            if (!s) throw _.alreadyDisposed();
            if (this.usesDefaultWrapper_) {
              const a = s.parentElement;
              a && a.removeChild(s);
            }
            this.containerElem_ = null, this.doc_ = null, super.dispose();
          }
          registerPlugin(s) {
            ("plugin" in s ? [
              s.plugin
            ] : "plugins" in s ? s.plugins : []).forEach((p) => {
              this.pool_.register(p), this.embedPluginStyle_(p);
            });
          }
          embedPluginStyle_(s) {
            s.css && ic(this.document, `plugin-${s.id}`, s.css);
          }
          setUpDefaultPlugins_() {
            ic(this.document, "default", '.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'), this.pool_.getAll().forEach((s) => {
              this.embedPluginStyle_(s);
            }), this.registerPlugin({
              plugins: [
                If,
                Af,
                Qa,
                kf
              ]
            });
          }
        }
        const Ff = new n("3.1.10");
        t.BladeApi = i, t.ButtonApi = w, t.FolderApi = A, t.InputBindingApi = an, t.ListApi = ec, t.MonitorBindingApi = Xt, t.Pane = Of, t.SeparatorApi = fn, t.SliderApi = tc, t.TabApi = mn, t.TabPageApi = Tt, t.TextApi = nc, t.TpChangeEvent = l, t.VERSION = Ff, Object.defineProperty(t, "__esModule", {
          value: true
        });
      }));
    })(Ys, Ys.exports)), Ys.exports;
  }
  Gx();
  class Hx {
    constructor() {
    }
  }
  const Wx = "modulepreload", jx = function(o, e) {
    return new URL(o, e).href;
  }, Uh = {}, qx = function(e, t, n) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      let l = function(f) {
        return Promise.all(f.map((m) => Promise.resolve(m).then((g) => ({
          status: "fulfilled",
          value: g
        }), (g) => ({
          status: "rejected",
          reason: g
        }))));
      };
      const c = document.getElementsByTagName("link"), u = document.querySelector("meta[property=csp-nonce]"), d = (u == null ? void 0 : u.nonce) || (u == null ? void 0 : u.getAttribute("nonce"));
      i = l(t.map((f) => {
        if (f = jx(f, n), f in Uh) return;
        Uh[f] = true;
        const m = f.endsWith(".css"), g = m ? '[rel="stylesheet"]' : "";
        if (!!n) for (let _ = c.length - 1; _ >= 0; _--) {
          const v = c[_];
          if (v.href === f && (!m || v.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${f}"]${g}`)) return;
        const y = document.createElement("link");
        if (y.rel = m ? "stylesheet" : Wx, m || (y.as = "script"), y.crossOrigin = "", y.href = f, d && y.setAttribute("nonce", d), document.head.appendChild(y), m) return new Promise((_, v) => {
          y.addEventListener("load", _), y.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${f}`)));
        });
      }));
    }
    function r(l) {
      const c = new Event("vite:preloadError", {
        cancelable: true
      });
      if (c.payload = l, window.dispatchEvent(c), !c.defaultPrevented) throw l;
    }
    return i.then((l) => {
      for (const c of l || []) c.status === "rejected" && r(c.reason);
      return e().catch(r);
    });
  };
  class Xx {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.meshMap = /* @__PURE__ */ new Map(), qx(() => import("./rapier-BgbPAKZ2.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url).then((e) => {
        const t = {
          x: 0,
          y: -9.81,
          z: 0
        };
        this.world = new e.World(t), this.rapier = e, this.rapierLoaded = true, rr.setState({
          physicsReady: true
        });
      });
    }
    add(e, t, n) {
      let i;
      switch (t) {
        case "dynamic":
          i = this.rapier.RigidBodyDesc.dynamic();
          break;
        case "fixed":
          i = this.rapier.RigidBodyDesc.fixed();
          break;
        case "kinematic":
          i = this.rapier.RigidBodyDesc.kinematicPositionBased();
          break;
      }
      this.rigidBody = this.world.createRigidBody(i);
      let r;
      switch (n) {
        case "cuboid":
          const u = this.computeCuboidDimensions(e);
          r = this.rapier.ColliderDesc.cuboid(u.x / 2, u.y / 2, u.z / 2), this.world.createCollider(r, this.rigidBody);
          break;
        case "ball":
          const d = this.computeBallDimensions(e);
          r = this.rapier.ColliderDesc.ball(d), this.world.createCollider(r, this.rigidBody);
          break;
        case "trimesh":
          const { scaledVertices: f, indices: m } = this.computeTrimeshDimensions(e);
          r = this.rapier.ColliderDesc.trimesh(f, m), this.world.createCollider(r, this.rigidBody);
          break;
      }
      const l = e.getWorldPosition(new k()), c = e.getWorldQuaternion(new Pt());
      return this.rigidBody.setTranslation(l), this.rigidBody.setRotation(c), this.meshMap.set(e, this.rigidBody), this.rigidBody;
    }
    computeCuboidDimensions(e) {
      e.geometry.computeBoundingBox();
      const t = e.geometry.boundingBox.getSize(new k()), n = e.getWorldScale(new k());
      return t.multiply(n), t;
    }
    computeBallDimensions(e) {
      e.geometry.computeBoundingSphere();
      const t = e.geometry.boundingSphere.radius, n = e.getWorldScale(new k()), i = Math.max(n.x, n.y, n.z);
      return t * i;
    }
    computeTrimeshDimensions(e) {
      const t = e.geometry.attributes.position.array, n = e.geometry.index.array, i = e.getWorldScale(new k());
      return {
        scaledVertices: t.map((l, c) => l * i.getComponent(c % 3)),
        indices: n
      };
    }
    loop() {
      this.rapierLoaded && (this.world.step(), this.meshMap.forEach((e, t) => {
        const n = new k().copy(e.translation()), i = new Pt().copy(e.rotation());
        n.applyMatrix4(new ze().copy(t.parent.matrixWorld).invert());
        const r = new ze().extractRotation(t.parent.matrixWorld).invert(), l = new Pt().setFromRotationMatrix(r);
        i.premultiply(l), t.position.copy(n), t.quaternion.copy(i);
      }));
    }
  }
  const Kx = [
    {
      id: "avatar",
      path: "/models/avatar.glb",
      type: "model"
    },
    {
      id: "environment",
      path: "/models/new_env.glb",
      type: "model"
    }
  ], ro = so((o) => ({
    assetsToLoad: Kx,
    loadedAssets: {},
    addLoadedAsset: (e, t) => o((n) => ({
      loadedAssets: {
        ...n.loadedAssets,
        [t]: e
      }
    }))
  }));
  class Yx {
    constructor() {
      this.modal = document.getElementById("myModal"), this.close = document.getElementsByClassName("close")[0], this.close.onclick = () => {
        this.closeModal();
      };
    }
    openModal(e, t) {
      document.getElementById("modalTitle").innerHTML = e, document.getElementById("modalDescription").innerHTML = t, this.modal.style.display = "block", this.modal.classList.remove("fadeOut"), this.modal.classList.add("fadeIn");
    }
    closeModal() {
      this.modal.classList.remove("fadeIn"), this.modal.classList.add("fadeOut"), setTimeout(() => {
        this.modal.style.display = "none";
      }, 600);
    }
  }
  class fa {
    constructor(e, t) {
      this.app = new pn(), this.portalMesh = e, this.modalInfo = t, this.modalManager = new Yx(), this.portalNearMaterial = new kn({
        color: 16777215,
        transparent: true,
        opacity: 0.8
      }), this.portalFarMaterial = new kn({
        color: 65535,
        transparent: true,
        opacity: 0.8
      }), this.portalMesh.material = this.portalFarMaterial, this.prevIsNear = false;
    }
    loop() {
      if (this.character = this.app.world.character.instance, this.character) {
        const e = new k();
        this.portalMesh.getWorldPosition(e), this.character.position.distanceTo(e) < 1.5 ? (this.prevIsNear || (this.modalManager.openModal(this.modalInfo.title, this.modalInfo.description), this.portalMesh.material = this.portalNearMaterial), this.prevIsNear = true) : (this.prevIsNear && (this.modalManager.closeModal(), this.portalMesh.material = this.portalFarMaterial), this.prevIsNear = false);
      }
    }
  }
  class $x {
    constructor() {
      this.modalContents = {
        intro: {
          title: "Introduction",
          description: "Nice to meet you! I am Gustavo Kang Shim, a 4th year CS student at TRU."
        },
        projects: {
          title: "Projects",
          description: "<h2>IoT Workplace Safety and Security Monitoring using Cloud Processing </h2><br> Link: <a href='https://github.com/ZionC27/IoT-Workplace-Safety-and-Security--Monitoring-with-Cloud-Processing' target='_blank'> here </a><ul><li>Leveraged AWS services including IoT Core, Lambda, and Analytics for cloud processing and monitoring</li><li>Collaborated with team members for the development of a secure user-end website</li></ul> <h2>Dungeoneer</h2><br>link: <a href='https://darthpackman.itch.io/dungeoneer ' target='_blank'> here </a><br><ul><li>Developed proficiency in Procedural Content Generation techniques for maps, enhancing adaptability and creativity</li><li>Collaborated effectively within a team, ensuring the successful combination of diverse project elements using team working skills</li></ul>"
        },
        contactMe: {
          title: "Contact Me",
          description: "<h2> GitHub link: <a href='https://github.com/shimuraii' target='_blank'> Link </a><h2> LinkedIn link: <a href='https://www.linkedin.com/in/gkangshim/' target='_blank'> Link </a><h2> Resume link: <a href='https://gustavokangshim.com/resume/web_resume_gkangshim.pdf' target='_blank'> Link </a>"
        },
        aboutMe: {
          title: "About me",
          description: "I am from Brazil, but my family is Korean.<br> I love soccer just like every other Brazillian out there! <br>I grew up in Brazil until I was 16, then finished my Highschool in Canada, then started university at Thompson Rivers University"
        },
        interests: {
          title: "Interests",
          description: "<ul><li>Volleyball</li> <li>Japanese culture</li> <li>ThreeJS</li> <li>Web Development</li><li>cyber security</li> <li>computers</li> <li>videogames</li> <li>technology</li>"
        }
      };
    }
    getModalInfo(e) {
      return this.modalContents[e];
    }
  }
  class Zx {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.physics = this.app.world.physics, this.pane = this.app.gui.pane, this.assetStore = ro.getState(), this.environment = this.assetStore.loadedAssets.environment, this.loadEnvironment(), this.addLights(), this.addPortals();
    }
    loadEnvironment() {
      const e = this.environment.scene;
      this.scene.add(e), e.position.set(-4.8, 0, -7.4), e.rotation.set(0, -0.6, 0), e.scale.setScalar(1.3);
      const t = [
        "trees",
        "terrain",
        "rocks",
        "stairs",
        "gates",
        "floor",
        "bushes"
      ], n = [
        "trees",
        "terrain",
        "rocks",
        "stairs",
        "gates",
        "bushes"
      ], i = [
        "floor",
        "terrain"
      ];
      for (const r of e.children) r.traverse((l) => {
        l.isMesh && (l.castShadow = n.some((c) => r.name.includes(c)), l.receiveShadow = i.some((c) => r.name.includes(c)), t.some((c) => r.name.includes(c)) && this.physics.add(l, "fixed", "cuboid"));
      });
    }
    addLights() {
      const e = new xx(16777215, 0.5);
      this.scene.add(e), this.directionalLight = new Iu(16777215, 0.5), this.directionalLight.position.set(1, 1, 1), this.directionalLight.castShadow = true, this.directionalLight.shadow.camera.top = 30, this.directionalLight.shadow.camera.right = 30, this.directionalLight.shadow.camera.left = -30, this.directionalLight.shadow.camera.bottom = -30, this.directionalLight.shadow.bias = -2e-3, this.directionalLight.shadow.normalBias = 0.072, this.scene.add(this.directionalLight);
    }
    addPortals() {
      const e = this.environment.scene.getObjectByName("portals"), t = this.environment.scene.getObjectByName("portals001"), n = this.environment.scene.getObjectByName("portals002"), i = new $x();
      this.portal1 = new fa(e, i.getModalInfo("aboutMe")), this.portal2 = new fa(t, i.getModalInfo("projects")), this.portal3 = new fa(n, i.getModalInfo("contactMe"));
    }
    loop() {
      this.portal1.loop(), this.portal2.loop(), this.portal3.loop();
    }
  }
  class Jx {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.assetStore = ro.getState(), this.avatar = this.assetStore.loadedAssets.avatar, this.instantiateCharacter();
    }
    instantiateCharacter() {
      const e = new gs(0.6, 2, 0.6), t = new no({
        color: 65280,
        wireframe: true,
        visible: false
      });
      this.instance = new Jt(e, t), this.instance.position.set(0, 4, 0), this.scene.add(this.instance);
      const n = this.avatar.scene;
      n.rotation.y = Math.PI, n.position.y = -1, this.instance.add(n);
    }
  }
  class Qx {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.physics = this.app.world.physics, this.character = this.app.world.character.instance, Re.subscribe((e) => {
        this.forward = e.forward, this.backward = e.backward, this.left = e.left, this.right = e.right;
      }), this.instantiateController();
    }
    instantiateController() {
      this.rigidBodyType = this.physics.rapier.RigidBodyDesc.kinematicPositionBased(), this.rigidBody = this.physics.world.createRigidBody(this.rigidBodyType), this.colliderType = this.physics.rapier.ColliderDesc.cuboid(0.3, 1, 0.3), this.collider = this.physics.world.createCollider(this.colliderType, this.rigidBody);
      const e = this.character.getWorldPosition(new k()), t = this.character.getWorldQuaternion(new Pt());
      this.rigidBody.setTranslation(e), this.rigidBody.setRotation(t), this.characterController = this.physics.world.createCharacterController(0.01), this.characterController.setApplyImpulsesToDynamicBodies(true), this.characterController.enableAutostep(1, 0.3, false), this.characterController.enableSnapToGround(1);
    }
    loop() {
      const e = new k();
      if (this.forward && (e.z -= 1), this.backward && (e.z += 1), this.left && (e.x -= 1), this.right && (e.x += 1), e.length() !== 0) {
        const n = Math.atan2(e.x, e.z) + Math.PI, i = new Pt().setFromAxisAngle(new k(0, 1, 0), n);
        this.character.quaternion.slerp(i, 0.1);
      }
      e.normalize().multiplyScalar(0.04), e.y = -1, this.characterController.computeColliderMovement(this.collider, e);
      const t = new k().copy(this.rigidBody.translation()).add(this.characterController.computedMovement());
      this.rigidBody.setNextKinematicTranslation(t), this.character.position.lerp(this.rigidBody.translation(), 0.1);
    }
  }
  class ey {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.avatar = this.app.world.character.avatar, Re.subscribe((e) => this.onInput(e)), this.instantiatedAnimations();
    }
    instantiatedAnimations() {
      this.avatar.animations[0], this.mixer = new Nx(this.avatar.scene), this.animations = /* @__PURE__ */ new Map(), this.avatar.animations.forEach((e) => {
        this.animations.set(e.name, this.mixer.clipAction(e));
      }), this.currentAction = this.animations.get("idle"), this.currentAction.play();
    }
    playAnimation(e) {
      if (this.currentAction === this.animations.get(e)) return;
      const t = this.animations.get(e);
      t.reset(), t.play(), t.crossFadeFrom(this.currentAction, 0.2), this.currentAction = t;
    }
    onInput(e) {
      e.forward || e.backward || e.left || e.right ? this.playAnimation("run") : this.playAnimation("idle");
    }
    loop(e) {
      this.mixer.update(e);
    }
  }
  class ty {
    constructor() {
      this.app = new pn(), this.scene = this.app.scene, this.physics = new Xx();
      const e = rr.subscribe((t) => {
        t.physicsReady && t.assetsReady && (this.environment = new Zx(), this.character = new Jx(), this.characterController = new Qx(), this.animationController = new ey(), e());
      });
      this.loop();
    }
    loop(e, t) {
      this.physics.loop(), this.environment && this.environment.loop(), this.characterController && this.characterController.loop(), this.animationController && this.animationController.loop(e);
    }
  }
  class ny {
    constructor() {
      const { setState: e } = Za;
      window.addEventListener("resize", () => {
        e({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: Math.min(window.devicePixelRatio, 2)
        });
      });
    }
  }
  function Bh(o, e) {
    if (e === Lm) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), o;
    if (e === Ea || e === ru) {
      let t = o.getIndex();
      if (t === null) {
        const l = [], c = o.getAttribute("position");
        if (c !== void 0) {
          for (let u = 0; u < c.count; u++) l.push(u);
          o.setIndex(l), t = o.getIndex();
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o;
      }
      const n = t.count - 2, i = [];
      if (e === Ea) for (let l = 1; l <= n; l++) i.push(t.getX(0)), i.push(t.getX(l)), i.push(t.getX(l + 1));
      else for (let l = 0; l < n; l++) l % 2 === 0 ? (i.push(t.getX(l)), i.push(t.getX(l + 1)), i.push(t.getX(l + 2))) : (i.push(t.getX(l + 2)), i.push(t.getX(l + 1)), i.push(t.getX(l)));
      i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const r = o.clone();
      return r.setIndex(i), r.clearGroups(), r;
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), o;
  }
  class iy extends xs {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new ly(t);
      }), this.register(function(t) {
        return new my(t);
      }), this.register(function(t) {
        return new gy(t);
      }), this.register(function(t) {
        return new hy(t);
      }), this.register(function(t) {
        return new uy(t);
      }), this.register(function(t) {
        return new dy(t);
      }), this.register(function(t) {
        return new py(t);
      }), this.register(function(t) {
        return new ay(t);
      }), this.register(function(t) {
        return new fy(t);
      }), this.register(function(t) {
        return new cy(t);
      }), this.register(function(t) {
        return new ry(t);
      }), this.register(function(t) {
        return new _y(t);
      }), this.register(function(t) {
        return new vy(t);
      });
    }
    load(e, t, n, i) {
      const r = this;
      let l;
      this.resourcePath !== "" ? l = this.resourcePath : this.path !== "" ? l = this.path : l = Da.extractUrlBase(e), this.manager.itemStart(e);
      const c = function(d) {
        i ? i(d) : console.error(d), r.manager.itemError(e), r.manager.itemEnd(e);
      }, u = new Zr(this.manager);
      u.setPath(this.path), u.setResponseType("arraybuffer"), u.setRequestHeader(this.requestHeader), u.setWithCredentials(this.withCredentials), u.load(e, function(d) {
        try {
          r.parse(d, l, function(f) {
            t(f), r.manager.itemEnd(e);
          }, c);
        } catch (f) {
          c(f);
        }
      }, n, c);
    }
    setDRACOLoader(e) {
      return this.dracoLoader = e, this;
    }
    setDDSLoader() {
      throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(e) {
      return this.ktx2Loader = e, this;
    }
    setMeshoptDecoder(e) {
      return this.meshoptDecoder = e, this;
    }
    register(e) {
      return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
      return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
    }
    parse(e, t, n, i) {
      let r;
      const l = {}, c = {}, u = new TextDecoder();
      if (typeof e == "string") r = JSON.parse(e);
      else if (e instanceof ArrayBuffer) if (u.decode(new Uint8Array(e, 0, 4)) === ku) {
        try {
          l[$e.KHR_BINARY_GLTF] = new by(e);
        } catch (m) {
          i && i(m);
          return;
        }
        r = JSON.parse(l[$e.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(u.decode(e));
      else r = e;
      if (r.asset === void 0 || r.asset.version[0] < 2) {
        i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const d = new Dy(r, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      d.fileLoader.setRequestHeader(this.requestHeader);
      for (let f = 0; f < this.pluginCallbacks.length; f++) {
        const m = this.pluginCallbacks[f](d);
        c[m.name] = m, l[m.name] = true;
      }
      if (r.extensionsUsed) for (let f = 0; f < r.extensionsUsed.length; ++f) {
        const m = r.extensionsUsed[f], g = r.extensionsRequired || [];
        switch (m) {
          case $e.KHR_MATERIALS_UNLIT:
            l[m] = new oy();
            break;
          case $e.KHR_DRACO_MESH_COMPRESSION:
            l[m] = new xy(r, this.dracoLoader);
            break;
          case $e.KHR_TEXTURE_TRANSFORM:
            l[m] = new yy();
            break;
          case $e.KHR_MESH_QUANTIZATION:
            l[m] = new wy();
            break;
          default:
            g.indexOf(m) >= 0 && c[m] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + m + '".');
        }
      }
      d.setExtensions(l), d.setPlugins(c), d.parse(n, i);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function(i, r) {
        n.parse(e, t, i, r);
      });
    }
  }
  function sy() {
    let o = {};
    return {
      get: function(e) {
        return o[e];
      },
      add: function(e, t) {
        o[e] = t;
      },
      remove: function(e) {
        delete o[e];
      },
      removeAll: function() {
        o = {};
      }
    };
  }
  const $e = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class ry {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      const e = this.parser, t = this.parser.json.nodes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser, n = "light:" + e;
      let i = t.cache.get(n);
      if (i) return i;
      const r = t.json, u = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
      let d;
      const f = new He(16777215);
      u.color !== void 0 && f.fromArray(u.color);
      const m = u.range !== void 0 ? u.range : 0;
      switch (u.type) {
        case "directional":
          d = new Iu(f), d.target.position.set(0, 0, -1), d.add(d.target);
          break;
        case "point":
          d = new vx(f), d.distance = m;
          break;
        case "spot":
          d = new gx(f), d.distance = m, u.spot = u.spot || {}, u.spot.innerConeAngle = u.spot.innerConeAngle !== void 0 ? u.spot.innerConeAngle : 0, u.spot.outerConeAngle = u.spot.outerConeAngle !== void 0 ? u.spot.outerConeAngle : Math.PI / 4, d.angle = u.spot.outerConeAngle, d.penumbra = 1 - u.spot.innerConeAngle / u.spot.outerConeAngle, d.target.position.set(0, 0, -1), d.add(d.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + u.type);
      }
      return d.position.set(0, 0, 0), d.decay = 2, Zn(d, u), u.intensity !== void 0 && (d.intensity = u.intensity), d.name = t.createUniqueName(u.name || "light_" + e), i = Promise.resolve(d), t.cache.add(n, i), i;
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this, n = this.parser, r = n.json.nodes[e], c = (r.extensions && r.extensions[this.name] || {}).light;
      return c === void 0 ? null : this._loadLight(c).then(function(u) {
        return n._getNodeRef(t.cache, c, u);
      });
    }
  }
  class oy {
    constructor() {
      this.name = $e.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return kn;
    }
    extendParams(e, t, n) {
      const i = [];
      e.color = new He(1, 1, 1), e.opacity = 1;
      const r = t.pbrMetallicRoughness;
      if (r) {
        if (Array.isArray(r.baseColorFactor)) {
          const l = r.baseColorFactor;
          e.color.fromArray(l), e.opacity = l[3];
        }
        r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, tt));
      }
      return Promise.all(i);
    }
  }
  class ay {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = i.extensions[this.name].emissiveStrength;
      return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
    }
  }
  class ly {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [], l = i.extensions[this.name];
      if (l.clearcoatFactor !== void 0 && (t.clearcoat = l.clearcoatFactor), l.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", l.clearcoatTexture)), l.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = l.clearcoatRoughnessFactor), l.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", l.clearcoatRoughnessTexture)), l.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", l.clearcoatNormalTexture)), l.clearcoatNormalTexture.scale !== void 0)) {
        const c = l.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new ke(c, c);
      }
      return Promise.all(r);
    }
  }
  class cy {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [], l = i.extensions[this.name];
      return l.iridescenceFactor !== void 0 && (t.iridescence = l.iridescenceFactor), l.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", l.iridescenceTexture)), l.iridescenceIor !== void 0 && (t.iridescenceIOR = l.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
        100,
        400
      ]), l.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = l.iridescenceThicknessMinimum), l.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = l.iridescenceThicknessMaximum), l.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", l.iridescenceThicknessTexture)), Promise.all(r);
    }
  }
  class hy {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [];
      t.sheenColor = new He(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const l = i.extensions[this.name];
      return l.sheenColorFactor !== void 0 && t.sheenColor.fromArray(l.sheenColorFactor), l.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = l.sheenRoughnessFactor), l.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", l.sheenColorTexture, tt)), l.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", l.sheenRoughnessTexture)), Promise.all(r);
    }
  }
  class uy {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [], l = i.extensions[this.name];
      return l.transmissionFactor !== void 0 && (t.transmission = l.transmissionFactor), l.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", l.transmissionTexture)), Promise.all(r);
    }
  }
  class dy {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [], l = i.extensions[this.name];
      t.thickness = l.thicknessFactor !== void 0 ? l.thicknessFactor : 0, l.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", l.thicknessTexture)), t.attenuationDistance = l.attenuationDistance || 1 / 0;
      const c = l.attenuationColor || [
        1,
        1,
        1
      ];
      return t.attenuationColor = new He(c[0], c[1], c[2]), Promise.all(r);
    }
  }
  class py {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = i.extensions[this.name];
      return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
    }
  }
  class fy {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ei;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const r = [], l = i.extensions[this.name];
      t.specularIntensity = l.specularFactor !== void 0 ? l.specularFactor : 1, l.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", l.specularTexture));
      const c = l.specularColorFactor || [
        1,
        1,
        1
      ];
      return t.specularColor = new He(c[0], c[1], c[2]), l.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", l.specularColorTexture, tt)), Promise.all(r);
    }
  }
  class my {
    constructor(e) {
      this.parser = e, this.name = $e.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
      const t = this.parser, n = t.json, i = n.textures[e];
      if (!i.extensions || !i.extensions[this.name]) return null;
      const r = i.extensions[this.name], l = t.options.ktx2Loader;
      if (!l) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        return null;
      }
      return t.loadTextureImage(e, r.source, l);
    }
  }
  class gy {
    constructor(e) {
      this.parser = e, this.name = $e.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
      if (!r.extensions || !r.extensions[t]) return null;
      const l = r.extensions[t], c = i.images[l.source];
      let u = n.textureLoader;
      if (c.uri) {
        const d = n.options.manager.getHandler(c.uri);
        d !== null && (u = d);
      }
      return this.detectSupport().then(function(d) {
        if (d) return n.loadTextureImage(e, l.source, u);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class _y {
    constructor(e) {
      this.name = $e.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
      const t = this.parser.json, n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), l = this.parser.options.meshoptDecoder;
        if (!l || !l.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          return null;
        }
        return r.then(function(c) {
          const u = i.byteOffset || 0, d = i.byteLength || 0, f = i.count, m = i.byteStride, g = new Uint8Array(c, u, d);
          return l.decodeGltfBufferAsync ? l.decodeGltfBufferAsync(f, m, g, i.mode, i.filter).then(function(b) {
            return b.buffer;
          }) : l.ready.then(function() {
            const b = new ArrayBuffer(f * m);
            return l.decodeGltfBuffer(new Uint8Array(b), f, m, g, i.mode, i.filter), b;
          });
        });
      } else return null;
    }
  }
  class vy {
    constructor(e) {
      this.name = $e.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
      const i = t.meshes[n.mesh];
      for (const d of i.primitives) if (d.mode !== sn.TRIANGLES && d.mode !== sn.TRIANGLE_STRIP && d.mode !== sn.TRIANGLE_FAN && d.mode !== void 0) return null;
      const l = n.extensions[this.name].attributes, c = [], u = {};
      for (const d in l) c.push(this.parser.getDependency("accessor", l[d]).then((f) => (u[d] = f, u[d])));
      return c.length < 1 ? null : (c.push(this.parser.createNodeMesh(e)), Promise.all(c).then((d) => {
        const f = d.pop(), m = f.isGroup ? f.children : [
          f
        ], g = d[0].count, b = [];
        for (const y of m) {
          const _ = new ze(), v = new k(), w = new Pt(), C = new k(1, 1, 1), S = new tx(y.geometry, y.material, g);
          for (let M = 0; M < g; M++) u.TRANSLATION && v.fromBufferAttribute(u.TRANSLATION, M), u.ROTATION && w.fromBufferAttribute(u.ROTATION, M), u.SCALE && C.fromBufferAttribute(u.SCALE, M), S.setMatrixAt(M, _.compose(v, w, C));
          for (const M in u) M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && y.geometry.setAttribute(M, u[M]);
          ut.prototype.copy.call(S, y), S.frustumCulled = false, this.parser.assignFinalMaterial(S), b.push(S);
        }
        return f.isGroup ? (f.clear(), f.add(...b), f) : b[0];
      }));
    }
  }
  const ku = "glTF", Ws = 12, Vh = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class by {
    constructor(e) {
      this.name = $e.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, Ws), n = new TextDecoder();
      if (this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== ku) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const i = this.header.length - Ws, r = new DataView(e, Ws);
      let l = 0;
      for (; l < i; ) {
        const c = r.getUint32(l, true);
        l += 4;
        const u = r.getUint32(l, true);
        if (l += 4, u === Vh.JSON) {
          const d = new Uint8Array(e, Ws + l, c);
          this.content = n.decode(d);
        } else if (u === Vh.BIN) {
          const d = Ws + l;
          this.body = e.slice(d, d + c);
        }
        l += c;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class xy {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = $e.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, l = e.extensions[this.name].attributes, c = {}, u = {}, d = {};
      for (const f in l) {
        const m = Ia[f] || f.toLowerCase();
        c[m] = l[f];
      }
      for (const f in e.attributes) {
        const m = Ia[f] || f.toLowerCase();
        if (l[f] !== void 0) {
          const g = n.accessors[e.attributes[f]], b = os[g.componentType];
          d[m] = b.name, u[m] = g.normalized === true;
        }
      }
      return t.getDependency("bufferView", r).then(function(f) {
        return new Promise(function(m) {
          i.decodeDracoFile(f, function(g) {
            for (const b in g.attributes) {
              const y = g.attributes[b], _ = u[b];
              _ !== void 0 && (y.normalized = _);
            }
            m(g);
          }, c, d);
        });
      });
    }
  }
  class yy {
    constructor() {
      this.name = $e.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class wy {
    constructor() {
      this.name = $e.KHR_MESH_QUANTIZATION;
    }
  }
  class Nu extends ar {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
      for (let l = 0; l !== i; l++) t[l] = n[r + l];
      return t;
    }
    interpolate_(e, t, n, i) {
      const r = this.resultBuffer, l = this.sampleValues, c = this.valueSize, u = c * 2, d = c * 3, f = i - t, m = (n - t) / f, g = m * m, b = g * m, y = e * d, _ = y - d, v = -2 * b + 3 * g, w = b - g, C = 1 - v, S = w - g + m;
      for (let M = 0; M !== c; M++) {
        const P = l[_ + M + c], N = l[_ + M + u] * f, F = l[y + M + c], E = l[y + M] * f;
        r[M] = C * P + S * N + v * F + w * E;
      }
      return r;
    }
  }
  const My = new Pt();
  class Sy extends Nu {
    interpolate_(e, t, n, i) {
      const r = super.interpolate_(e, t, n, i);
      return My.fromArray(r).normalize().toArray(r), r;
    }
  }
  const sn = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, os = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, zh = {
    9728: At,
    9729: qt,
    9984: Sa,
    9985: iu,
    9986: Wr,
    9987: bi
  }, Gh = {
    33071: rn,
    33648: Kr,
    10497: cs
  }, ma = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, Ia = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  }, $n = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, Ey = {
    CUBICSPLINE: void 0,
    LINEAR: us,
    STEP: Qs
  }, ga = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function Ty(o) {
    return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new no({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: Fn
    })), o.DefaultMaterial;
  }
  function js(o, e, t) {
    for (const n in t.extensions) o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
  }
  function Zn(o, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function Cy(o, e, t) {
    let n = false, i = false, r = false;
    for (let d = 0, f = e.length; d < f; d++) {
      const m = e[d];
      if (m.POSITION !== void 0 && (n = true), m.NORMAL !== void 0 && (i = true), m.COLOR_0 !== void 0 && (r = true), n && i && r) break;
    }
    if (!n && !i && !r) return Promise.resolve(o);
    const l = [], c = [], u = [];
    for (let d = 0, f = e.length; d < f; d++) {
      const m = e[d];
      if (n) {
        const g = m.POSITION !== void 0 ? t.getDependency("accessor", m.POSITION) : o.attributes.position;
        l.push(g);
      }
      if (i) {
        const g = m.NORMAL !== void 0 ? t.getDependency("accessor", m.NORMAL) : o.attributes.normal;
        c.push(g);
      }
      if (r) {
        const g = m.COLOR_0 !== void 0 ? t.getDependency("accessor", m.COLOR_0) : o.attributes.color;
        u.push(g);
      }
    }
    return Promise.all([
      Promise.all(l),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(d) {
      const f = d[0], m = d[1], g = d[2];
      return n && (o.morphAttributes.position = f), i && (o.morphAttributes.normal = m), r && (o.morphAttributes.color = g), o.morphTargetsRelative = true, o;
    });
  }
  function Ay(o, e) {
    if (o.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) o.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (o.morphTargetInfluences.length === t.length) {
        o.morphTargetDictionary = {};
        for (let n = 0, i = t.length; n < i; n++) o.morphTargetDictionary[t[n]] = n;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function Py(o) {
    const e = o.extensions && o.extensions[$e.KHR_DRACO_MESH_COMPRESSION];
    let t;
    return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Hh(e.attributes) : t = o.indices + ":" + Hh(o.attributes) + ":" + o.mode, t;
  }
  function Hh(o) {
    let e = "";
    const t = Object.keys(o).sort();
    for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + o[t[n]] + ";";
    return e;
  }
  function ka(o) {
    switch (o) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function Ly(o) {
    return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
  }
  const Ry = new ze();
  class Dy {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new sy(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
      let n = false, i = false, r = -1;
      typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new Du(this.options.manager) : this.textureLoader = new yx(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Zr(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this, i = this.json, r = this.extensions;
      this.cache.removeAll(), this._invokeAll(function(l) {
        return l._markDefs && l._markDefs();
      }), Promise.all(this._invokeAll(function(l) {
        return l.beforeRoot && l.beforeRoot();
      })).then(function() {
        return Promise.all([
          n.getDependencies("scene"),
          n.getDependencies("animation"),
          n.getDependencies("camera")
        ]);
      }).then(function(l) {
        const c = {
          scene: l[0][i.scene || 0],
          scenes: l[0],
          animations: l[1],
          cameras: l[2],
          asset: i.asset,
          parser: n,
          userData: {}
        };
        js(r, c, i), Zn(c, i), Promise.all(n._invokeAll(function(u) {
          return u.afterRoot && u.afterRoot(c);
        })).then(function() {
          e(c);
        });
      }).catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
      for (let i = 0, r = t.length; i < r; i++) {
        const l = t[i].joints;
        for (let c = 0, u = l.length; c < u; c++) e[l[c]].isBone = true;
      }
      for (let i = 0, r = e.length; i < r; i++) {
        const l = e[i];
        l.mesh !== void 0 && (this._addNodeRef(this.meshCache, l.mesh), l.skin !== void 0 && (n[l.mesh].isSkinnedMesh = true)), l.camera !== void 0 && this._addNodeRef(this.cameraCache, l.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const i = n.clone(), r = (l, c) => {
        const u = this.associations.get(l);
        u != null && this.associations.set(c, u);
        for (const [d, f] of l.children.entries()) r(f, c.children[d]);
      };
      return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const i = e(t[n]);
        if (i) return i;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let i = 0; i < t.length; i++) {
        const r = e(t[i]);
        r && n.push(r);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let i = this.cache.get(n);
      if (!i) {
        switch (e) {
          case "scene":
            i = this.loadScene(t);
            break;
          case "node":
            i = this._invokeOne(function(r) {
              return r.loadNode && r.loadNode(t);
            });
            break;
          case "mesh":
            i = this._invokeOne(function(r) {
              return r.loadMesh && r.loadMesh(t);
            });
            break;
          case "accessor":
            i = this.loadAccessor(t);
            break;
          case "bufferView":
            i = this._invokeOne(function(r) {
              return r.loadBufferView && r.loadBufferView(t);
            });
            break;
          case "buffer":
            i = this.loadBuffer(t);
            break;
          case "material":
            i = this._invokeOne(function(r) {
              return r.loadMaterial && r.loadMaterial(t);
            });
            break;
          case "texture":
            i = this._invokeOne(function(r) {
              return r.loadTexture && r.loadTexture(t);
            });
            break;
          case "skin":
            i = this.loadSkin(t);
            break;
          case "animation":
            i = this._invokeOne(function(r) {
              return r.loadAnimation && r.loadAnimation(t);
            });
            break;
          case "camera":
            i = this.loadCamera(t);
            break;
          default:
            if (i = this._invokeOne(function(r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            }), !i) throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(n, i);
      }
      return i;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        t = Promise.all(i.map(function(r, l) {
          return n.getDependency(e, l);
        })), this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e], n = this.fileLoader;
      if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);
      const i = this.options;
      return new Promise(function(r, l) {
        n.load(Da.resolveURL(t.uri, i.path), r, void 0, function() {
          l(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function(n) {
        const i = t.byteLength || 0, r = t.byteOffset || 0;
        return n.slice(r, r + i);
      });
    }
    loadAccessor(e) {
      const t = this, n = this.json, i = this.json.accessors[e];
      if (i.bufferView === void 0 && i.sparse === void 0) {
        const l = ma[i.type], c = os[i.componentType], u = i.normalized === true, d = new c(i.count * l);
        return Promise.resolve(new It(d, l, u));
      }
      const r = [];
      return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(l) {
        const c = l[0], u = ma[i.type], d = os[i.componentType], f = d.BYTES_PER_ELEMENT, m = f * u, g = i.byteOffset || 0, b = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, y = i.normalized === true;
        let _, v;
        if (b && b !== m) {
          const w = Math.floor(g / b), C = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + w + ":" + i.count;
          let S = t.cache.get(C);
          S || (_ = new d(c, w * b, i.count * b / f), S = new Y0(_, b / f), t.cache.add(C, S)), v = new ja(S, u, g % b / f, y);
        } else c === null ? _ = new d(i.count * u) : _ = new d(c, g, i.count * u), v = new It(_, u, y);
        if (i.sparse !== void 0) {
          const w = ma.SCALAR, C = os[i.sparse.indices.componentType], S = i.sparse.indices.byteOffset || 0, M = i.sparse.values.byteOffset || 0, P = new C(l[1], S, i.sparse.count * w), N = new d(l[2], M, i.sparse.count * u);
          c !== null && (v = new It(v.array.slice(), v.itemSize, v.normalized));
          for (let F = 0, E = P.length; F < E; F++) {
            const I = P[F];
            if (v.setX(I, N[F * u]), u >= 2 && v.setY(I, N[F * u + 1]), u >= 3 && v.setZ(I, N[F * u + 2]), u >= 4 && v.setW(I, N[F * u + 3]), u >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        return v;
      });
    }
    loadTexture(e) {
      const t = this.json, n = this.options, r = t.textures[e].source, l = t.images[r];
      let c = this.textureLoader;
      if (l.uri) {
        const u = n.manager.getHandler(l.uri);
        u !== null && (c = u);
      }
      return this.loadTextureImage(e, r, c);
    }
    loadTextureImage(e, t, n) {
      const i = this, r = this.json, l = r.textures[e], c = r.images[t], u = (c.uri || c.bufferView) + ":" + l.sampler;
      if (this.textureCache[u]) return this.textureCache[u];
      const d = this.loadImageSource(t, n).then(function(f) {
        f.flipY = false, f.name = l.name || c.name || "";
        const g = (r.samplers || {})[l.sampler] || {};
        return f.magFilter = zh[g.magFilter] || qt, f.minFilter = zh[g.minFilter] || bi, f.wrapS = Gh[g.wrapS] || cs, f.wrapT = Gh[g.wrapT] || cs, i.associations.set(f, {
          textures: e
        }), f;
      }).catch(function() {
        return null;
      });
      return this.textureCache[u] = d, d;
    }
    loadImageSource(e, t) {
      const n = this, i = this.json, r = this.options;
      if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((m) => m.clone());
      const l = i.images[e], c = self.URL || self.webkitURL;
      let u = l.uri || "", d = false;
      if (l.bufferView !== void 0) u = n.getDependency("bufferView", l.bufferView).then(function(m) {
        d = true;
        const g = new Blob([
          m
        ], {
          type: l.mimeType
        });
        return u = c.createObjectURL(g), u;
      });
      else if (l.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const f = Promise.resolve(u).then(function(m) {
        return new Promise(function(g, b) {
          let y = g;
          t.isImageBitmapLoader === true && (y = function(_) {
            const v = new Dt(_);
            v.needsUpdate = true, g(v);
          }), t.load(Da.resolveURL(m, r.path), y, void 0, b);
        });
      }).then(function(m) {
        return d === true && c.revokeObjectURL(u), m.userData.mimeType = l.mimeType || Ly(l.uri), m;
      }).catch(function(m) {
        throw console.error("THREE.GLTFLoader: Couldn't load texture", u), m;
      });
      return this.sourceCache[e] = f, f;
    }
    assignTexture(e, t, n, i) {
      const r = this;
      return this.getDependency("texture", n.index).then(function(l) {
        if (!l) return null;
        if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), r.extensions[$e.KHR_TEXTURE_TRANSFORM]) {
          const c = n.extensions !== void 0 ? n.extensions[$e.KHR_TEXTURE_TRANSFORM] : void 0;
          if (c) {
            const u = r.associations.get(l);
            l = r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(l, c), r.associations.set(l, u);
          }
        }
        return i !== void 0 && (l.encoding = i), e[t] = l, l;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, l = t.attributes.normal === void 0;
      if (e.isPoints) {
        const c = "PointsMaterial:" + n.uuid;
        let u = this.cache.get(c);
        u || (u = new Cu(), vn.prototype.copy.call(u, n), u.color.copy(n.color), u.map = n.map, u.sizeAttenuation = false, this.cache.add(c, u)), n = u;
      } else if (e.isLine) {
        const c = "LineBasicMaterial:" + n.uuid;
        let u = this.cache.get(c);
        u || (u = new Tu(), vn.prototype.copy.call(u, n), u.color.copy(n.color), this.cache.add(c, u)), n = u;
      }
      if (i || r || l) {
        let c = "ClonedMaterial:" + n.uuid + ":";
        i && (c += "derivative-tangents:"), r && (c += "vertex-colors:"), l && (c += "flat-shading:");
        let u = this.cache.get(c);
        u || (u = n.clone(), r && (u.vertexColors = true), l && (u.flatShading = true), i && (u.normalScale && (u.normalScale.y *= -1), u.clearcoatNormalScale && (u.clearcoatNormalScale.y *= -1)), this.cache.add(c, u), this.associations.set(u, this.associations.get(n))), n = u;
      }
      n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
    }
    getMaterialType() {
      return no;
    }
    loadMaterial(e) {
      const t = this, n = this.json, i = this.extensions, r = n.materials[e];
      let l;
      const c = {}, u = r.extensions || {}, d = [];
      if (u[$e.KHR_MATERIALS_UNLIT]) {
        const m = i[$e.KHR_MATERIALS_UNLIT];
        l = m.getMaterialType(), d.push(m.extendParams(c, r, t));
      } else {
        const m = r.pbrMetallicRoughness || {};
        if (c.color = new He(1, 1, 1), c.opacity = 1, Array.isArray(m.baseColorFactor)) {
          const g = m.baseColorFactor;
          c.color.fromArray(g), c.opacity = g[3];
        }
        m.baseColorTexture !== void 0 && d.push(t.assignTexture(c, "map", m.baseColorTexture, tt)), c.metalness = m.metallicFactor !== void 0 ? m.metallicFactor : 1, c.roughness = m.roughnessFactor !== void 0 ? m.roughnessFactor : 1, m.metallicRoughnessTexture !== void 0 && (d.push(t.assignTexture(c, "metalnessMap", m.metallicRoughnessTexture)), d.push(t.assignTexture(c, "roughnessMap", m.metallicRoughnessTexture))), l = this._invokeOne(function(g) {
          return g.getMaterialType && g.getMaterialType(e);
        }), d.push(Promise.all(this._invokeAll(function(g) {
          return g.extendMaterialParams && g.extendMaterialParams(e, c);
        })));
      }
      r.doubleSided === true && (c.side = Dn);
      const f = r.alphaMode || ga.OPAQUE;
      if (f === ga.BLEND ? (c.transparent = true, c.depthWrite = false) : (c.transparent = false, f === ga.MASK && (c.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && l !== kn && (d.push(t.assignTexture(c, "normalMap", r.normalTexture)), c.normalScale = new ke(1, 1), r.normalTexture.scale !== void 0)) {
        const m = r.normalTexture.scale;
        c.normalScale.set(m, m);
      }
      return r.occlusionTexture !== void 0 && l !== kn && (d.push(t.assignTexture(c, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (c.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && l !== kn && (c.emissive = new He().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && l !== kn && d.push(t.assignTexture(c, "emissiveMap", r.emissiveTexture, tt)), Promise.all(d).then(function() {
        const m = new l(c);
        return r.name && (m.name = r.name), Zn(m, r), t.associations.set(m, {
          materials: e
        }), r.extensions && js(i, m, r), m;
      });
    }
    createUniqueName(e) {
      const t = it.sanitizeNodeName(e || "");
      let n = t;
      for (let i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i;
      return this.nodeNamesUsed[n] = true, n;
    }
    loadGeometries(e) {
      const t = this, n = this.extensions, i = this.primitiveCache;
      function r(c) {
        return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c, t).then(function(u) {
          return Wh(u, c, t);
        });
      }
      const l = [];
      for (let c = 0, u = e.length; c < u; c++) {
        const d = e[c], f = Py(d), m = i[f];
        if (m) l.push(m.promise);
        else {
          let g;
          d.extensions && d.extensions[$e.KHR_DRACO_MESH_COMPRESSION] ? g = r(d) : g = Wh(new dn(), d, t), i[f] = {
            primitive: d,
            promise: g
          }, l.push(g);
        }
      }
      return Promise.all(l);
    }
    loadMesh(e) {
      const t = this, n = this.json, i = this.extensions, r = n.meshes[e], l = r.primitives, c = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u].material === void 0 ? Ty(this.cache) : this.getDependency("material", l[u].material);
        c.push(f);
      }
      return c.push(t.loadGeometries(l)), Promise.all(c).then(function(u) {
        const d = u.slice(0, u.length - 1), f = u[u.length - 1], m = [];
        for (let b = 0, y = f.length; b < y; b++) {
          const _ = f[b], v = l[b];
          let w;
          const C = d[b];
          if (v.mode === sn.TRIANGLES || v.mode === sn.TRIANGLE_STRIP || v.mode === sn.TRIANGLE_FAN || v.mode === void 0) w = r.isSkinnedMesh === true ? new Z0(_, C) : new Jt(_, C), w.isSkinnedMesh === true && !w.geometry.attributes.skinWeight.normalized && w.normalizeSkinWeights(), v.mode === sn.TRIANGLE_STRIP ? w.geometry = Bh(w.geometry, ru) : v.mode === sn.TRIANGLE_FAN && (w.geometry = Bh(w.geometry, Ea));
          else if (v.mode === sn.LINES) w = new nx(_, C);
          else if (v.mode === sn.LINE_STRIP) w = new Xa(_, C);
          else if (v.mode === sn.LINE_LOOP) w = new ix(_, C);
          else if (v.mode === sn.POINTS) w = new sx(_, C);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + v.mode);
          Object.keys(w.geometry.morphAttributes).length > 0 && Ay(w, r), w.name = t.createUniqueName(r.name || "mesh_" + e), Zn(w, r), v.extensions && js(i, w, v), t.assignFinalMaterial(w), m.push(w);
        }
        for (let b = 0, y = m.length; b < y; b++) t.associations.set(m[b], {
          meshes: e,
          primitives: b
        });
        if (m.length === 1) return m[0];
        const g = new gi();
        t.associations.set(g, {
          meshes: e
        });
        for (let b = 0, y = m.length; b < y; b++) g.add(m[b]);
        return g;
      });
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e], i = n[n.type];
      if (!i) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return n.type === "perspective" ? t = new Ht(Km.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ha(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Zn(t, n), Promise.resolve(t);
    }
    loadSkin(e) {
      const t = this.json.skins[e], n = [];
      for (let i = 0, r = t.joints.length; i < r; i++) n.push(this.getDependency("node", t.joints[i]));
      return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
        const r = i.pop(), l = i, c = [], u = [];
        for (let d = 0, f = l.length; d < f; d++) {
          const m = l[d];
          if (m) {
            c.push(m);
            const g = new ze();
            r !== null && g.fromArray(r.array, d * 16), u.push(g);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[d]);
        }
        return new qa(c, u);
      });
    }
    loadAnimation(e) {
      const n = this.json.animations[e], i = [], r = [], l = [], c = [], u = [];
      for (let d = 0, f = n.channels.length; d < f; d++) {
        const m = n.channels[d], g = n.samplers[m.sampler], b = m.target, y = b.node, _ = n.parameters !== void 0 ? n.parameters[g.input] : g.input, v = n.parameters !== void 0 ? n.parameters[g.output] : g.output;
        i.push(this.getDependency("node", y)), r.push(this.getDependency("accessor", _)), l.push(this.getDependency("accessor", v)), c.push(g), u.push(b);
      }
      return Promise.all([
        Promise.all(i),
        Promise.all(r),
        Promise.all(l),
        Promise.all(c),
        Promise.all(u)
      ]).then(function(d) {
        const f = d[0], m = d[1], g = d[2], b = d[3], y = d[4], _ = [];
        for (let w = 0, C = f.length; w < C; w++) {
          const S = f[w], M = m[w], P = g[w], N = b[w], F = y[w];
          if (S === void 0) continue;
          S.updateMatrix();
          let E;
          switch ($n[F.path]) {
            case $n.weights:
              E = ir;
              break;
            case $n.rotation:
              E = Si;
              break;
            case $n.position:
            case $n.scale:
            default:
              E = sr;
              break;
          }
          const I = S.name ? S.name : S.uuid, V = N.interpolation !== void 0 ? Ey[N.interpolation] : us, ee = [];
          $n[F.path] === $n.weights ? S.traverse(function(W) {
            W.morphTargetInfluences && ee.push(W.name ? W.name : W.uuid);
          }) : ee.push(I);
          let Q = P.array;
          if (P.normalized) {
            const W = ka(Q.constructor), G = new Float32Array(Q.length);
            for (let $ = 0, ie = Q.length; $ < ie; $++) G[$] = Q[$] * W;
            Q = G;
          }
          for (let W = 0, G = ee.length; W < G; W++) {
            const $ = new E(ee[W] + "." + $n[F.path], M.array, Q, V);
            N.interpolation === "CUBICSPLINE" && ($.createInterpolant = function(te) {
              const H = this instanceof Si ? Sy : Nu;
              return new H(this.times, this.values, this.getValueSize() / 3, te);
            }, $.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true), _.push($);
          }
        }
        const v = n.name ? n.name : "animation_" + e;
        return new Ra(v, void 0, _);
      });
    }
    createNodeMesh(e) {
      const t = this.json, n = this, i = t.nodes[e];
      return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
        const l = n._getNodeRef(n.meshCache, i.mesh, r);
        return i.weights !== void 0 && l.traverse(function(c) {
          if (c.isMesh) for (let u = 0, d = i.weights.length; u < d; u++) c.morphTargetInfluences[u] = i.weights[u];
        }), l;
      });
    }
    loadNode(e) {
      const t = this.json, n = this.extensions, i = this, r = t.nodes[e], l = r.name ? i.createUniqueName(r.name) : "";
      return (function() {
        const c = [], u = i._invokeOne(function(g) {
          return g.createNodeMesh && g.createNodeMesh(e);
        });
        u && c.push(u), r.camera !== void 0 && c.push(i.getDependency("camera", r.camera).then(function(g) {
          return i._getNodeRef(i.cameraCache, r.camera, g);
        })), i._invokeAll(function(g) {
          return g.createNodeAttachment && g.createNodeAttachment(e);
        }).forEach(function(g) {
          c.push(g);
        });
        const d = [], f = r.children || [];
        for (let g = 0, b = f.length; g < b; g++) d.push(i.getDependency("node", f[g]));
        const m = r.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", r.skin);
        return Promise.all([
          Promise.all(c),
          Promise.all(d),
          m
        ]);
      })().then(function(c) {
        const u = c[0], d = c[1], f = c[2];
        let m;
        if (r.isBone === true ? m = new Eu() : u.length > 1 ? m = new gi() : u.length === 1 ? m = u[0] : m = new ut(), m !== u[0]) for (let g = 0, b = u.length; g < b; g++) m.add(u[g]);
        if (r.name && (m.userData.name = r.name, m.name = l), Zn(m, r), r.extensions && js(n, m, r), r.matrix !== void 0) {
          const g = new ze();
          g.fromArray(r.matrix), m.applyMatrix4(g);
        } else r.translation !== void 0 && m.position.fromArray(r.translation), r.rotation !== void 0 && m.quaternion.fromArray(r.rotation), r.scale !== void 0 && m.scale.fromArray(r.scale);
        i.associations.has(m) || i.associations.set(m, {}), i.associations.get(m).nodes = e, f !== null && m.traverse(function(g) {
          g.isSkinnedMesh && g.bind(f, Ry);
        });
        for (let g = 0, b = d.length; g < b; g++) m.add(d[g]);
        return m;
      });
    }
    loadScene(e) {
      const t = this.extensions, n = this.json.scenes[e], i = this, r = new gi();
      n.name && (r.name = i.createUniqueName(n.name)), Zn(r, n), n.extensions && js(t, r, n);
      const l = n.nodes || [], c = [];
      for (let u = 0, d = l.length; u < d; u++) c.push(i.getDependency("node", l[u]));
      return Promise.all(c).then(function(u) {
        for (let f = 0, m = u.length; f < m; f++) r.add(u[f]);
        const d = (f) => {
          const m = /* @__PURE__ */ new Map();
          for (const [g, b] of i.associations) (g instanceof vn || g instanceof Dt) && m.set(g, b);
          return f.traverse((g) => {
            const b = i.associations.get(g);
            b != null && m.set(g, b);
          }), m;
        };
        return i.associations = d(r), r;
      });
    }
  }
  function Iy(o, e, t) {
    const n = e.attributes, i = new fs();
    if (n.POSITION !== void 0) {
      const c = t.json.accessors[n.POSITION], u = c.min, d = c.max;
      if (u !== void 0 && d !== void 0) {
        if (i.set(new k(u[0], u[1], u[2]), new k(d[0], d[1], d[2])), c.normalized) {
          const f = ka(os[c.componentType]);
          i.min.multiplyScalar(f), i.max.multiplyScalar(f);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else return;
    const r = e.targets;
    if (r !== void 0) {
      const c = new k(), u = new k();
      for (let d = 0, f = r.length; d < f; d++) {
        const m = r[d];
        if (m.POSITION !== void 0) {
          const g = t.json.accessors[m.POSITION], b = g.min, y = g.max;
          if (b !== void 0 && y !== void 0) {
            if (u.setX(Math.max(Math.abs(b[0]), Math.abs(y[0]))), u.setY(Math.max(Math.abs(b[1]), Math.abs(y[1]))), u.setZ(Math.max(Math.abs(b[2]), Math.abs(y[2]))), g.normalized) {
              const _ = ka(os[g.componentType]);
              u.multiplyScalar(_);
            }
            c.max(u);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      i.expandByVector(c);
    }
    o.boundingBox = i;
    const l = new ms();
    i.getCenter(l.center), l.radius = i.min.distanceTo(i.max) / 2, o.boundingSphere = l;
  }
  function Wh(o, e, t) {
    const n = e.attributes, i = [];
    function r(l, c) {
      return t.getDependency("accessor", l).then(function(u) {
        o.setAttribute(c, u);
      });
    }
    for (const l in n) {
      const c = Ia[l] || l.toLowerCase();
      c in o.attributes || i.push(r(n[l], c));
    }
    if (e.indices !== void 0 && !o.index) {
      const l = t.getDependency("accessor", e.indices).then(function(c) {
        o.setIndex(c);
      });
      i.push(l);
    }
    return Zn(o, e), Iy(o, e, t), Promise.all(i).then(function() {
      return e.targets !== void 0 ? Cy(o, e.targets, t) : o;
    });
  }
  const _a = /* @__PURE__ */ new WeakMap();
  class ky extends xs {
    constructor(e) {
      super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD"
      }, this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array"
      };
    }
    setDecoderPath(e) {
      return this.decoderPath = e, this;
    }
    setDecoderConfig(e) {
      return this.decoderConfig = e, this;
    }
    setWorkerLimit(e) {
      return this.workerLimit = e, this;
    }
    load(e, t, n, i) {
      const r = new Zr(this.manager);
      r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, (l) => {
        this.decodeDracoFile(l, t).catch(i);
      }, n, i);
    }
    decodeDracoFile(e, t, n, i) {
      const r = {
        attributeIDs: n || this.defaultAttributeIDs,
        attributeTypes: i || this.defaultAttributeTypes,
        useUniqueIDs: !!n
      };
      return this.decodeGeometry(e, r).then(t);
    }
    decodeGeometry(e, t) {
      const n = JSON.stringify(t);
      if (_a.has(e)) {
        const u = _a.get(e);
        if (u.key === n) return u.promise;
        if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
      }
      let i;
      const r = this.workerNextTaskID++, l = e.byteLength, c = this._getWorker(r, l).then((u) => (i = u, new Promise((d, f) => {
        i._callbacks[r] = {
          resolve: d,
          reject: f
        }, i.postMessage({
          type: "decode",
          id: r,
          taskConfig: t,
          buffer: e
        }, [
          e
        ]);
      }))).then((u) => this._createGeometry(u.geometry));
      return c.catch(() => true).then(() => {
        i && r && this._releaseTask(i, r);
      }), _a.set(e, {
        key: n,
        promise: c
      }), c;
    }
    _createGeometry(e) {
      const t = new dn();
      e.index && t.setIndex(new It(e.index.array, 1));
      for (let n = 0; n < e.attributes.length; n++) {
        const i = e.attributes[n], r = i.name, l = i.array, c = i.itemSize;
        t.setAttribute(r, new It(l, c));
      }
      return t;
    }
    _loadLibrary(e, t) {
      const n = new Zr(this.manager);
      return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, r) => {
        n.load(e, i, void 0, r);
      });
    }
    preload() {
      return this._initDecoder(), this;
    }
    _initDecoder() {
      if (this.decoderPending) return this.decoderPending;
      const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
      return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
        const i = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const r = Ny.toString(), l = [
          "/* draco decoder */",
          i,
          "",
          "/* worker */",
          r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([
          l
        ]));
      }), this.decoderPending;
    }
    _getWorker(e, t) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          const i = new Worker(this.workerSourceURL);
          i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({
            type: "init",
            decoderConfig: this.decoderConfig
          }), i.onmessage = function(r) {
            const l = r.data;
            switch (l.type) {
              case "decode":
                i._callbacks[l.id].resolve(l);
                break;
              case "error":
                i._callbacks[l.id].reject(l);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + l.type + '"');
            }
          }, this.workerPool.push(i);
        } else this.workerPool.sort(function(i, r) {
          return i._taskLoad > r._taskLoad ? -1 : 1;
        });
        const n = this.workerPool[this.workerPool.length - 1];
        return n._taskCosts[e] = t, n._taskLoad += t, n;
      });
    }
    _releaseTask(e, t) {
      e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
    }
    debug() {
      console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
    }
    dispose() {
      for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
      return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
    }
  }
  function Ny() {
    let o, e;
    onmessage = function(l) {
      const c = l.data;
      switch (c.type) {
        case "init":
          o = c.decoderConfig, e = new Promise(function(f) {
            o.onModuleLoaded = function(m) {
              f({
                draco: m
              });
            }, DracoDecoderModule(o);
          });
          break;
        case "decode":
          const u = c.buffer, d = c.taskConfig;
          e.then((f) => {
            const m = f.draco, g = new m.Decoder(), b = new m.DecoderBuffer();
            b.Init(new Int8Array(u), u.byteLength);
            try {
              const y = t(m, g, b, d), _ = y.attributes.map((v) => v.array.buffer);
              y.index && _.push(y.index.array.buffer), self.postMessage({
                type: "decode",
                id: c.id,
                geometry: y
              }, _);
            } catch (y) {
              console.error(y), self.postMessage({
                type: "error",
                id: c.id,
                error: y.message
              });
            } finally {
              m.destroy(b), m.destroy(g);
            }
          });
          break;
      }
    };
    function t(l, c, u, d) {
      const f = d.attributeIDs, m = d.attributeTypes;
      let g, b;
      const y = c.GetEncodedGeometryType(u);
      if (y === l.TRIANGULAR_MESH) g = new l.Mesh(), b = c.DecodeBufferToMesh(u, g);
      else if (y === l.POINT_CLOUD) g = new l.PointCloud(), b = c.DecodeBufferToPointCloud(u, g);
      else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      if (!b.ok() || g.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + b.error_msg());
      const _ = {
        index: null,
        attributes: []
      };
      for (const v in f) {
        const w = self[m[v]];
        let C, S;
        if (d.useUniqueIDs) S = f[v], C = c.GetAttributeByUniqueId(g, S);
        else {
          if (S = c.GetAttributeId(g, l[f[v]]), S === -1) continue;
          C = c.GetAttribute(g, S);
        }
        _.attributes.push(i(l, c, g, v, w, C));
      }
      return y === l.TRIANGULAR_MESH && (_.index = n(l, c, g)), l.destroy(g), _;
    }
    function n(l, c, u) {
      const f = u.num_faces() * 3, m = f * 4, g = l._malloc(m);
      c.GetTrianglesUInt32Array(u, m, g);
      const b = new Uint32Array(l.HEAPF32.buffer, g, f).slice();
      return l._free(g), {
        array: b,
        itemSize: 1
      };
    }
    function i(l, c, u, d, f, m) {
      const g = m.num_components(), y = u.num_points() * g, _ = y * f.BYTES_PER_ELEMENT, v = r(l, f), w = l._malloc(_);
      c.GetAttributeDataArrayForAllPoints(u, m, v, _, w);
      const C = new f(l.HEAPF32.buffer, w, y).slice();
      return l._free(w), {
        name: d,
        array: C,
        itemSize: g
      };
    }
    function r(l, c) {
      switch (c) {
        case Float32Array:
          return l.DT_FLOAT32;
        case Int8Array:
          return l.DT_INT8;
        case Int16Array:
          return l.DT_INT16;
        case Int32Array:
          return l.DT_INT32;
        case Uint8Array:
          return l.DT_UINT8;
        case Uint16Array:
          return l.DT_UINT16;
        case Uint32Array:
          return l.DT_UINT32;
      }
    }
  }
  class Oy {
    constructor() {
      this.assetStore = ro.getState(), this.assetsToLoad = this.assetStore.assetsToLoad, this.addLoadedAsset = this.assetStore.addLoadedAsset, this.instantiateLoaders(), this.startLoading();
    }
    instantiateLoaders() {
      const e = new ky();
      e.setDecoderPath("/draco/"), this.gltfLoader = new iy(), this.gltfLoader.setDRACOLoader(e), this.textureLoader = new Du();
    }
    startLoading() {
      this.assetsToLoad.forEach((e) => {
        e.type === "texture" && this.textureLoader.load(e.path, (t) => {
          this.addLoadedAsset(t, e.id);
        }), e.type === "model" && this.gltfLoader.load(e.path, (t) => {
          this.addLoadedAsset(t, e.id);
        });
      });
    }
  }
  class Fy {
    constructor() {
      this.assetStore = ro, this.overlay = document.querySelector(".overlay"), this.loading = document.querySelector(".loading"), this.startButton = document.querySelector(".start"), this.assetStore.subscribe((e) => {
        this.numberOfLoadedAssets = Object.keys(e.loadedAssets).length, this.numberOfAssetsToLoad = e.assetsToLoad.length, this.progress = this.numberOfLoadedAssets / this.numberOfAssetsToLoad, this.progress = Math.trunc(this.progress * 100), document.getElementById("progressPercentage").innerHTML = this.progress, this.progress === 100 && (rr.setState({
          assetsReady: true
        }), this.loading.classList.add("fade"), window.setTimeout(() => this.ready(), 1200));
      });
    }
    ready() {
      this.loading.remove(), this.startButton.style.display = "inline", this.startButton.classList.add("fadeIn"), this.startButton.addEventListener("click", () => {
        console.log("started"), this.overlay.classList.add("fade"), this.startButton.classList.add("fadeOut"), window.setTimeout(() => {
          this.overlay.remove(), this.startButton.remove();
        }, 2e3), rr.setState({
          nippleReady: true
        });
      }, {
        once: true
      });
    }
  }
  const Xr = (o, e) => {
    const t = e.x - o.x, n = e.y - o.y;
    return Math.sqrt(t * t + n * n);
  }, Uy = (o, e) => {
    const t = e.x - o.x, n = e.y - o.y;
    return Vy(Math.atan2(n, t));
  }, By = (o, e, t) => {
    const n = {
      x: 0,
      y: 0
    };
    return t = Na(t), n.x = o.x - e * Math.cos(t), n.y = o.y - e * Math.sin(t), n;
  }, Na = (o) => o * (Math.PI / 180), Vy = (o) => o * (180 / Math.PI), zy = (o) => isNaN(o.buttons) ? o.pressure !== 0 : o.buttons !== 0, va = /* @__PURE__ */ new Map(), jh = (o) => {
    va.has(o) && clearTimeout(va.get(o)), va.set(o, setTimeout(o, 100));
  }, Jr = (o, e, t) => {
    const n = e.split(/[ ,]+/g);
    let i;
    for (let r = 0; r < n.length; r += 1) i = n[r], o.addEventListener ? o.addEventListener(i, t, false) : o.attachEvent && o.attachEvent(i, t);
  }, qh = (o, e, t) => {
    const n = e.split(/[ ,]+/g);
    let i;
    for (let r = 0; r < n.length; r += 1) i = n[r], o.removeEventListener ? o.removeEventListener(i, t) : o.detachEvent && o.detachEvent(i, t);
  }, Ou = (o) => (o.preventDefault(), o.type.match(/^touch/) ? o.changedTouches : o), Xh = () => {
    const o = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, e = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return {
      x: o,
      y: e
    };
  }, Kh = (o, e) => {
    e.top || e.right || e.bottom || e.left ? (o.style.top = e.top, o.style.right = e.right, o.style.bottom = e.bottom, o.style.left = e.left) : (o.style.left = e.x + "px", o.style.top = e.y + "px");
  }, Ja = (o, e, t) => {
    const n = Fu(o);
    for (let i in n) if (n.hasOwnProperty(i)) if (typeof e == "string") n[i] = e + " " + t;
    else {
      let r = "";
      for (let l = 0, c = e.length; l < c; l += 1) r += e[l] + " " + t + ", ";
      n[i] = r.slice(0, -2);
    }
    return n;
  }, Gy = (o, e) => {
    const t = Fu(o);
    for (let n in t) t.hasOwnProperty(n) && (t[n] = e);
    return t;
  }, Fu = (o) => {
    const e = {};
    return e[o] = "", [
      "webkit",
      "Moz",
      "o"
    ].forEach(function(n) {
      e[n + o.charAt(0).toUpperCase() + o.slice(1)] = "";
    }), e;
  }, ba = (o, e) => {
    for (let t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
    return o;
  }, Hy = (o, e) => {
    const t = {};
    for (let n in o) o.hasOwnProperty(n) && e.hasOwnProperty(n) ? t[n] = e[n] : o.hasOwnProperty(n) && (t[n] = o[n]);
    return t;
  }, Oa = (o, e) => {
    if (o.length) for (let t = 0, n = o.length; t < n; t += 1) e(o[t]);
    else e(o);
  }, Wy = (o, e, t) => ({
    x: Math.min(Math.max(o.x, e.x - t), e.x + t),
    y: Math.min(Math.max(o.y, e.y - t), e.y + t)
  });
  var jy = "ontouchstart" in window, qy = !!window.PointerEvent, Xy = !!window.MSPointerEvent, qs = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      end: "touchend, touchcancel"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      end: "mouseup"
    },
    pointer: {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup, pointercancel"
    },
    MSPointer: {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    }
  }, is, or = {};
  qy ? is = qs.pointer : Xy ? is = qs.MSPointer : jy ? (is = qs.touch, or = qs.mouse) : is = qs.mouse;
  function Un() {
  }
  Un.prototype.on = function(o, e) {
    var t = this, n = o.split(/[ ,]+/g), i;
    t._handlers_ = t._handlers_ || {};
    for (var r = 0; r < n.length; r += 1) i = n[r], t._handlers_[i] = t._handlers_[i] || [], t._handlers_[i].push(e);
    return t;
  };
  Un.prototype.off = function(o, e) {
    var t = this;
    return t._handlers_ = t._handlers_ || {}, o === void 0 ? t._handlers_ = {} : e === void 0 ? t._handlers_[o] = null : t._handlers_[o] && t._handlers_[o].indexOf(e) >= 0 && t._handlers_[o].splice(t._handlers_[o].indexOf(e), 1), t;
  };
  Un.prototype.trigger = function(o, e) {
    var t = this, n = o.split(/[ ,]+/g), i;
    t._handlers_ = t._handlers_ || {};
    for (var r = 0; r < n.length; r += 1) i = n[r], t._handlers_[i] && t._handlers_[i].length && t._handlers_[i].forEach(function(l) {
      l.call(t, {
        type: i,
        target: t
      }, e);
    });
  };
  Un.prototype.config = function(o) {
    var e = this;
    e.options = e.defaults || {}, o && (e.options = Hy(e.options, o));
  };
  Un.prototype.bindEvt = function(o, e) {
    var t = this;
    return t._domHandlers_ = t._domHandlers_ || {}, t._domHandlers_[e] = function() {
      typeof t["on" + e] == "function" ? t["on" + e].apply(t, arguments) : console.warn('[WARNING] : Missing "on' + e + '" handler.');
    }, Jr(o, is[e], t._domHandlers_[e]), or[e] && Jr(o, or[e], t._domHandlers_[e]), t;
  };
  Un.prototype.unbindEvt = function(o, e) {
    var t = this;
    return t._domHandlers_ = t._domHandlers_ || {}, qh(o, is[e], t._domHandlers_[e]), or[e] && qh(o, or[e], t._domHandlers_[e]), delete t._domHandlers_[e], this;
  };
  function Et(o, e) {
    return this.identifier = e.identifier, this.position = e.position, this.frontPosition = e.frontPosition, this.collection = o, this.defaults = {
      size: 100,
      threshold: 0.1,
      color: "white",
      fadeTime: 250,
      dataOnly: false,
      restJoystick: true,
      restOpacity: 0.5,
      mode: "dynamic",
      zone: document.body,
      lockX: false,
      lockY: false,
      shape: "circle"
    }, this.config(e), this.options.mode === "dynamic" && (this.options.restOpacity = 0), this.id = Et.id, Et.id += 1, this.buildEl().stylize(), this.instance = {
      el: this.ui.el,
      on: this.on.bind(this),
      off: this.off.bind(this),
      show: this.show.bind(this),
      hide: this.hide.bind(this),
      add: this.addToDom.bind(this),
      remove: this.removeFromDom.bind(this),
      destroy: this.destroy.bind(this),
      setPosition: this.setPosition.bind(this),
      resetDirection: this.resetDirection.bind(this),
      computeDirection: this.computeDirection.bind(this),
      trigger: this.trigger.bind(this),
      position: this.position,
      frontPosition: this.frontPosition,
      ui: this.ui,
      identifier: this.identifier,
      id: this.id,
      options: this.options
    }, this.instance;
  }
  Et.prototype = new Un();
  Et.constructor = Et;
  Et.id = 0;
  Et.prototype.buildEl = function(o) {
    return this.ui = {}, this.options.dataOnly ? this : (this.ui.el = document.createElement("div"), this.ui.back = document.createElement("div"), this.ui.front = document.createElement("div"), this.ui.el.className = "nipple collection_" + this.collection.id, this.ui.back.className = "back", this.ui.front.className = "front", this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id), this.ui.el.appendChild(this.ui.back), this.ui.el.appendChild(this.ui.front), this);
  };
  Et.prototype.stylize = function() {
    if (this.options.dataOnly) return this;
    var o = this.options.fadeTime + "ms", e = Gy("borderRadius", "50%"), t = Ja("transition", "opacity", o), n = {};
    return n.el = {
      position: "absolute",
      opacity: this.options.restOpacity,
      display: "block",
      zIndex: 999
    }, n.back = {
      position: "absolute",
      display: "block",
      width: this.options.size + "px",
      height: this.options.size + "px",
      left: 0,
      marginLeft: -this.options.size / 2 + "px",
      marginTop: -this.options.size / 2 + "px",
      background: this.options.color,
      opacity: ".5"
    }, n.front = {
      width: this.options.size / 2 + "px",
      height: this.options.size / 2 + "px",
      position: "absolute",
      display: "block",
      left: 0,
      marginLeft: -this.options.size / 4 + "px",
      marginTop: -this.options.size / 4 + "px",
      background: this.options.color,
      opacity: ".5",
      transform: "translate(0px, 0px)"
    }, ba(n.el, t), this.options.shape === "circle" && ba(n.back, e), ba(n.front, e), this.applyStyles(n), this;
  };
  Et.prototype.applyStyles = function(o) {
    for (var e in this.ui) if (this.ui.hasOwnProperty(e)) for (var t in o[e]) this.ui[e].style[t] = o[e][t];
    return this;
  };
  Et.prototype.addToDom = function() {
    return this.options.dataOnly || document.body.contains(this.ui.el) ? this : (this.options.zone.appendChild(this.ui.el), this);
  };
  Et.prototype.removeFromDom = function() {
    return this.options.dataOnly || !document.body.contains(this.ui.el) ? this : (this.options.zone.removeChild(this.ui.el), this);
  };
  Et.prototype.destroy = function() {
    clearTimeout(this.removeTimeout), clearTimeout(this.showTimeout), clearTimeout(this.restTimeout), this.trigger("destroyed", this.instance), this.removeFromDom(), this.off();
  };
  Et.prototype.show = function(o) {
    var e = this;
    return e.options.dataOnly || (clearTimeout(e.removeTimeout), clearTimeout(e.showTimeout), clearTimeout(e.restTimeout), e.addToDom(), e.restCallback(), setTimeout(function() {
      e.ui.el.style.opacity = 1;
    }, 0), e.showTimeout = setTimeout(function() {
      e.trigger("shown", e.instance), typeof o == "function" && o.call(this);
    }, e.options.fadeTime)), e;
  };
  Et.prototype.hide = function(o) {
    var e = this;
    if (e.options.dataOnly) return e;
    if (e.ui.el.style.opacity = e.options.restOpacity, clearTimeout(e.removeTimeout), clearTimeout(e.showTimeout), clearTimeout(e.restTimeout), e.removeTimeout = setTimeout(function() {
      var t = e.options.mode === "dynamic" ? "none" : "block";
      e.ui.el.style.display = t, typeof o == "function" && o.call(e), e.trigger("hidden", e.instance);
    }, e.options.fadeTime), e.options.restJoystick) {
      const t = e.options.restJoystick, n = {};
      n.x = t === true || t.x !== false ? 0 : e.instance.frontPosition.x, n.y = t === true || t.y !== false ? 0 : e.instance.frontPosition.y, e.setPosition(o, n);
    }
    return e;
  };
  Et.prototype.setPosition = function(o, e) {
    var t = this;
    t.frontPosition = {
      x: e.x,
      y: e.y
    };
    var n = t.options.fadeTime + "ms", i = {};
    i.front = Ja("transition", [
      "transform"
    ], n);
    var r = {
      front: {}
    };
    r.front = {
      transform: "translate(" + t.frontPosition.x + "px," + t.frontPosition.y + "px)"
    }, t.applyStyles(i), t.applyStyles(r), t.restTimeout = setTimeout(function() {
      typeof o == "function" && o.call(t), t.restCallback();
    }, t.options.fadeTime);
  };
  Et.prototype.restCallback = function() {
    var o = this, e = {};
    e.front = Ja("transition", "none", ""), o.applyStyles(e), o.trigger("rested", o.instance);
  };
  Et.prototype.resetDirection = function() {
    this.direction = {
      x: false,
      y: false,
      angle: false
    };
  };
  Et.prototype.computeDirection = function(o) {
    var e = o.angle.radian, t = Math.PI / 4, n = Math.PI / 2, i, r, l;
    if (e > t && e < t * 3 && !o.lockX ? i = "up" : e > -t && e <= t && !o.lockY ? i = "left" : e > -t * 3 && e <= -t && !o.lockX ? i = "down" : o.lockY || (i = "right"), o.lockY || (e > -n && e < n ? r = "left" : r = "right"), o.lockX || (e > 0 ? l = "up" : l = "down"), o.force > this.options.threshold) {
      var c = {}, u;
      for (u in this.direction) this.direction.hasOwnProperty(u) && (c[u] = this.direction[u]);
      var d = {};
      this.direction = {
        x: r,
        y: l,
        angle: i
      }, o.direction = this.direction;
      for (u in c) c[u] === this.direction[u] && (d[u] = true);
      if (d.x && d.y && d.angle) return o;
      (!d.x || !d.y) && this.trigger("plain", o), d.x || this.trigger("plain:" + r, o), d.y || this.trigger("plain:" + l, o), d.angle || this.trigger("dir dir:" + i, o);
    } else this.resetDirection();
    return o;
  };
  function mt(o, e) {
    var t = this;
    t.nipples = [], t.idles = [], t.actives = [], t.ids = [], t.pressureIntervals = {}, t.manager = o, t.id = mt.id, mt.id += 1, t.defaults = {
      zone: document.body,
      multitouch: false,
      maxNumberOfNipples: 10,
      mode: "dynamic",
      position: {
        top: 0,
        left: 0
      },
      catchDistance: 200,
      size: 100,
      threshold: 0.1,
      color: "white",
      fadeTime: 250,
      dataOnly: false,
      restJoystick: true,
      restOpacity: 0.5,
      lockX: false,
      lockY: false,
      shape: "circle",
      dynamicPage: false,
      follow: false
    }, t.config(e), (t.options.mode === "static" || t.options.mode === "semi") && (t.options.multitouch = false), t.options.multitouch || (t.options.maxNumberOfNipples = 1);
    const n = getComputedStyle(t.options.zone.parentElement);
    return n && n.display === "flex" && (t.parentIsFlex = true), t.updateBox(), t.prepareNipples(), t.bindings(), t.begin(), t.nipples;
  }
  mt.prototype = new Un();
  mt.constructor = mt;
  mt.id = 0;
  mt.prototype.prepareNipples = function() {
    var o = this, e = o.nipples;
    e.on = o.on.bind(o), e.off = o.off.bind(o), e.options = o.options, e.destroy = o.destroy.bind(o), e.ids = o.ids, e.id = o.id, e.processOnMove = o.processOnMove.bind(o), e.processOnEnd = o.processOnEnd.bind(o), e.get = function(t) {
      if (t === void 0) return e[0];
      for (var n = 0, i = e.length; n < i; n += 1) if (e[n].identifier === t) return e[n];
      return false;
    };
  };
  mt.prototype.bindings = function() {
    var o = this;
    o.bindEvt(o.options.zone, "start"), o.options.zone.style.touchAction = "none", o.options.zone.style.msTouchAction = "none";
  };
  mt.prototype.begin = function() {
    var o = this, e = o.options;
    if (e.mode === "static") {
      var t = o.createNipple(e.position, o.manager.getIdentifier());
      t.add(), o.idles.push(t);
    }
  };
  mt.prototype.createNipple = function(o, e) {
    var t = this, n = t.manager.scroll, i = {}, r = t.options, l = {
      x: t.parentIsFlex ? n.x : n.x + t.box.left,
      y: t.parentIsFlex ? n.y : n.y + t.box.top
    };
    if (o.x && o.y) i = {
      x: o.x - l.x,
      y: o.y - l.y
    };
    else if (o.top || o.right || o.bottom || o.left) {
      var c = document.createElement("DIV");
      c.style.display = "hidden", c.style.top = o.top, c.style.right = o.right, c.style.bottom = o.bottom, c.style.left = o.left, c.style.position = "absolute", r.zone.appendChild(c);
      var u = c.getBoundingClientRect();
      r.zone.removeChild(c), i = o, o = {
        x: u.left + n.x,
        y: u.top + n.y
      };
    }
    var d = new Et(t, {
      color: r.color,
      size: r.size,
      threshold: r.threshold,
      fadeTime: r.fadeTime,
      dataOnly: r.dataOnly,
      restJoystick: r.restJoystick,
      restOpacity: r.restOpacity,
      mode: r.mode,
      identifier: e,
      position: o,
      zone: r.zone,
      frontPosition: {
        x: 0,
        y: 0
      },
      shape: r.shape
    });
    return r.dataOnly || (Kh(d.ui.el, i), Kh(d.ui.front, d.frontPosition)), t.nipples.push(d), t.trigger("added " + d.identifier + ":added", d), t.manager.trigger("added " + d.identifier + ":added", d), t.bindNipple(d), d;
  };
  mt.prototype.updateBox = function() {
    var o = this;
    o.box = o.options.zone.getBoundingClientRect();
  };
  mt.prototype.bindNipple = function(o) {
    var e = this, t, n = function(i, r) {
      t = i.type + " " + r.id + ":" + i.type, e.trigger(t, r);
    };
    o.on("destroyed", e.onDestroyed.bind(e)), o.on("shown hidden rested dir plain", n), o.on("dir:up dir:right dir:down dir:left", n), o.on("plain:up plain:right plain:down plain:left", n);
  };
  mt.prototype.pressureFn = function(o, e, t) {
    var n = this, i = 0;
    clearInterval(n.pressureIntervals[t]), n.pressureIntervals[t] = setInterval((function() {
      var r = o.force || o.pressure || o.webkitForce || 0;
      r !== i && (e.trigger("pressure", r), n.trigger("pressure " + e.identifier + ":pressure", r), i = r);
    }).bind(n), 100);
  };
  mt.prototype.onstart = function(o) {
    var e = this, t = e.options, n = o;
    o = Ou(o), e.updateBox();
    var i = function(r) {
      e.actives.length < t.maxNumberOfNipples ? e.processOnStart(r) : n.type.match(/^touch/) && (Object.keys(e.manager.ids).forEach(function(l) {
        if (Object.values(n.touches).findIndex(function(u) {
          return u.identifier === l;
        }) < 0) {
          var c = [
            o[0]
          ];
          c.identifier = l, e.processOnEnd(c);
        }
      }), e.actives.length < t.maxNumberOfNipples && e.processOnStart(r));
    };
    return Oa(o, i), e.manager.bindDocument(), false;
  };
  mt.prototype.processOnStart = function(o) {
    var e = this, t = e.options, n, i = e.manager.getIdentifier(o), r = o.force || o.pressure || o.webkitForce || 0, l = {
      x: o.pageX,
      y: o.pageY
    }, c = e.getOrCreate(i, l);
    c.identifier !== i && e.manager.removeIdentifier(c.identifier), c.identifier = i;
    var u = function(f) {
      f.trigger("start", f), e.trigger("start " + f.id + ":start", f), f.show(), r > 0 && e.pressureFn(o, f, f.identifier), e.processOnMove(o);
    };
    if ((n = e.idles.indexOf(c)) >= 0 && e.idles.splice(n, 1), e.actives.push(c), e.ids.push(c.identifier), t.mode !== "semi") u(c);
    else {
      var d = Xr(l, c.position);
      if (d <= t.catchDistance) u(c);
      else {
        c.destroy(), e.processOnStart(o);
        return;
      }
    }
    return c;
  };
  mt.prototype.getOrCreate = function(o, e) {
    var t = this, n = t.options, i;
    return /(semi|static)/.test(n.mode) ? (i = t.idles[0], i ? (t.idles.splice(0, 1), i) : n.mode === "semi" ? t.createNipple(e, o) : (console.warn("Coudln't find the needed nipple."), false)) : (i = t.createNipple(e, o), i);
  };
  mt.prototype.processOnMove = function(o) {
    var e = this, t = e.options, n = e.manager.getIdentifier(o), i = e.nipples.get(n), r = e.manager.scroll;
    if (!zy(o)) {
      this.processOnEnd(o);
      return;
    }
    if (!i) {
      console.error("Found zombie joystick with ID " + n), e.manager.removeIdentifier(n);
      return;
    }
    if (t.dynamicPage) {
      var l = i.el.getBoundingClientRect();
      i.position = {
        x: r.x + l.left,
        y: r.y + l.top
      };
    }
    i.identifier = n;
    var c = i.options.size / 2, u = {
      x: o.pageX,
      y: o.pageY
    };
    t.lockX && (u.y = i.position.y), t.lockY && (u.x = i.position.x);
    var d = Xr(u, i.position), f = Uy(u, i.position), m = Na(f), g = d / c, b = {
      distance: d,
      position: u
    }, y, _;
    if (i.options.shape === "circle" ? (y = Math.min(d, c), _ = By(i.position, y, f)) : (_ = Wy(u, i.position, c), y = Xr(_, i.position)), t.follow) {
      if (d > c) {
        let S = u.x - _.x, M = u.y - _.y;
        i.position.x += S, i.position.y += M, i.el.style.top = i.position.y - (e.box.top + r.y) + "px", i.el.style.left = i.position.x - (e.box.left + r.x) + "px", d = Xr(u, i.position);
      }
    } else u = _, d = y;
    var v = u.x - i.position.x, w = u.y - i.position.y;
    i.frontPosition = {
      x: v,
      y: w
    }, t.dataOnly || (i.ui.front.style.transform = "translate(" + v + "px," + w + "px)");
    var C = {
      identifier: i.identifier,
      position: u,
      force: g,
      pressure: o.force || o.pressure || o.webkitForce || 0,
      distance: d,
      angle: {
        radian: m,
        degree: f
      },
      vector: {
        x: v / c,
        y: -w / c
      },
      raw: b,
      instance: i,
      lockX: t.lockX,
      lockY: t.lockY
    };
    C = i.computeDirection(C), C.angle = {
      radian: Na(180 - f),
      degree: 180 - f
    }, i.trigger("move", C), e.trigger("move " + i.id + ":move", C);
  };
  mt.prototype.processOnEnd = function(o) {
    var e = this, t = e.options, n = e.manager.getIdentifier(o), i = e.nipples.get(n), r = e.manager.removeIdentifier(i.identifier);
    i && (t.dataOnly || i.hide(function() {
      t.mode === "dynamic" && (i.trigger("removed", i), e.trigger("removed " + i.id + ":removed", i), e.manager.trigger("removed " + i.id + ":removed", i), i.destroy());
    }), clearInterval(e.pressureIntervals[i.identifier]), i.resetDirection(), i.trigger("end", i), e.trigger("end " + i.id + ":end", i), e.ids.indexOf(i.identifier) >= 0 && e.ids.splice(e.ids.indexOf(i.identifier), 1), e.actives.indexOf(i) >= 0 && e.actives.splice(e.actives.indexOf(i), 1), /(semi|static)/.test(t.mode) ? e.idles.push(i) : e.nipples.indexOf(i) >= 0 && e.nipples.splice(e.nipples.indexOf(i), 1), e.manager.unbindDocument(), /(semi|static)/.test(t.mode) && (e.manager.ids[r.id] = r.identifier));
  };
  mt.prototype.onDestroyed = function(o, e) {
    var t = this;
    t.nipples.indexOf(e) >= 0 && t.nipples.splice(t.nipples.indexOf(e), 1), t.actives.indexOf(e) >= 0 && t.actives.splice(t.actives.indexOf(e), 1), t.idles.indexOf(e) >= 0 && t.idles.splice(t.idles.indexOf(e), 1), t.ids.indexOf(e.identifier) >= 0 && t.ids.splice(t.ids.indexOf(e.identifier), 1), t.manager.removeIdentifier(e.identifier), t.manager.unbindDocument();
  };
  mt.prototype.destroy = function() {
    var o = this;
    o.unbindEvt(o.options.zone, "start"), o.nipples.forEach(function(t) {
      t.destroy();
    });
    for (var e in o.pressureIntervals) o.pressureIntervals.hasOwnProperty(e) && clearInterval(o.pressureIntervals[e]);
    o.trigger("destroyed", o.nipples), o.manager.unbindDocument(), o.off();
  };
  function Lt(o) {
    var e = this;
    e.ids = {}, e.index = 0, e.collections = [], e.scroll = Xh(), e.config(o), e.prepareCollections();
    var t = function() {
      var i;
      e.collections.forEach(function(r) {
        r.forEach(function(l) {
          i = l.el.getBoundingClientRect(), l.position = {
            x: e.scroll.x + i.left,
            y: e.scroll.y + i.top
          };
        });
      });
    };
    Jr(window, "resize", function() {
      jh(t);
    });
    var n = function() {
      e.scroll = Xh();
    };
    return Jr(window, "scroll", function() {
      jh(n);
    }), e.collections;
  }
  Lt.prototype = new Un();
  Lt.constructor = Lt;
  Lt.prototype.prepareCollections = function() {
    var o = this;
    o.collections.create = o.create.bind(o), o.collections.on = o.on.bind(o), o.collections.off = o.off.bind(o), o.collections.destroy = o.destroy.bind(o), o.collections.get = function(e) {
      var t;
      return o.collections.every(function(n) {
        return t = n.get(e), !t;
      }), t;
    };
  };
  Lt.prototype.create = function(o) {
    return this.createCollection(o);
  };
  Lt.prototype.createCollection = function(o) {
    var e = this, t = new mt(e, o);
    return e.bindCollection(t), e.collections.push(t), t;
  };
  Lt.prototype.bindCollection = function(o) {
    var e = this, t, n = function(i, r) {
      t = i.type + " " + r.id + ":" + i.type, e.trigger(t, r);
    };
    o.on("destroyed", e.onDestroyed.bind(e)), o.on("shown hidden rested dir plain", n), o.on("dir:up dir:right dir:down dir:left", n), o.on("plain:up plain:right plain:down plain:left", n);
  };
  Lt.prototype.bindDocument = function() {
    var o = this;
    o.binded || (o.bindEvt(document, "move").bindEvt(document, "end"), o.binded = true);
  };
  Lt.prototype.unbindDocument = function(o) {
    var e = this;
    (!Object.keys(e.ids).length || o === true) && (e.unbindEvt(document, "move").unbindEvt(document, "end"), e.binded = false);
  };
  Lt.prototype.getIdentifier = function(o) {
    var e;
    return o ? (e = o.identifier === void 0 ? o.pointerId : o.identifier, e === void 0 && (e = this.latest || 0)) : e = this.index, this.ids[e] === void 0 && (this.ids[e] = this.index, this.index += 1), this.latest = e, this.ids[e];
  };
  Lt.prototype.removeIdentifier = function(o) {
    var e = {};
    for (var t in this.ids) if (this.ids[t] === o) {
      e.id = t, e.identifier = this.ids[t], delete this.ids[t];
      break;
    }
    return e;
  };
  Lt.prototype.onmove = function(o) {
    var e = this;
    return e.onAny("move", o), false;
  };
  Lt.prototype.onend = function(o) {
    var e = this;
    return e.onAny("end", o), false;
  };
  Lt.prototype.oncancel = function(o) {
    var e = this;
    return e.onAny("end", o), false;
  };
  Lt.prototype.onAny = function(o, e) {
    var t = this, n, i = "processOn" + o.charAt(0).toUpperCase() + o.slice(1);
    e = Ou(e);
    var r = function(c, u, d) {
      d.ids.indexOf(u) >= 0 && (d[i](c), c._found_ = true);
    }, l = function(c) {
      n = t.getIdentifier(c), Oa(t.collections, r.bind(null, c, n)), c._found_ || t.removeIdentifier(n);
    };
    return Oa(e, l), false;
  };
  Lt.prototype.destroy = function() {
    var o = this;
    o.unbindDocument(true), o.ids = {}, o.index = 0, o.collections.forEach(function(e) {
      e.destroy();
    }), o.off();
  };
  Lt.prototype.onDestroyed = function(o, e) {
    var t = this;
    if (t.collections.indexOf(e) < 0) return false;
    t.collections.splice(t.collections.indexOf(e), 1);
  };
  const Yh = new Lt(), Ky = {
    create: function(o) {
      return Yh.create(o);
    },
    factory: Yh
  };
  var ot;
  class Yy {
    constructor() {
      this.startListening(), this.inputStore = Re, this.keyPressed = {}, rr.subscribe((e) => {
        this.nipple = e.nippleReady, console.log(e.nippleReady), this.nipple == true && this.createNipple();
      });
    }
    createNipple() {
      ot = Ky.create({
        zone: document.getElementById("space"),
        mode: "dynamic",
        position: {
          left: "100px",
          top: "100px"
        },
        follow: false
      });
      var e = "";
      ot.on("move", function(t, n) {
        ot.position = n.position, ot.distance = n.distance, ot.direction = n.angle.radian, console.log(ot.distance);
        var i = 6.279201325062565;
        ot.direction >= 5.755934547974017 && ot.direction <= i || ot.direction >= 0 && ot.direction <= 0.5232667770885471 ? (console.log("right"), e != "r" && (Re.setState({
          forward: false
        }), Re.setState({
          left: false
        }), Re.setState({
          backward: false
        }), Re.setState({
          right: true
        }), e = "r")) : ot.direction >= 0.5232667770885471 && ot.direction <= 1.046533554177094 ? (console.log("right + up"), e != "ru" && (Re.setState({
          left: false
        }), Re.setState({
          backward: false
        }), Re.setState({
          right: true
        }), Re.setState({
          forward: true
        }), e = "ru")) : ot.direction >= 1.046533554177094 && ot.direction <= 2.093067108354188 ? (console.log("up"), e != "u" && (Re.setState({
          right: false
        }), Re.setState({
          left: false
        }), Re.setState({
          backward: false
        }), Re.setState({
          forward: true
        }), e = "u")) : ot.direction >= 2.093067108354188 && ot.direction <= 2.616333885442735 ? (console.log("left + up"), e != "lu" && (Re.setState({
          right: false
        }), Re.setState({
          backward: false
        }), Re.setState({
          forward: true
        }), Re.setState({
          left: true
        }), e = "lu")) : ot.direction >= 2.616333885442735 && ot.direction <= 3.662867439619829 ? (console.log("left"), e != "l" && (Re.setState({
          right: false
        }), Re.setState({
          forward: false
        }), Re.setState({
          backward: false
        }), Re.setState({
          left: true
        }), e = "l")) : ot.direction >= 3.662867439619829 && ot.direction <= 4.186134216708376 ? (console.log("left + bottom"), e != "lb" && (Re.setState({
          right: false
        }), Re.setState({
          forward: false
        }), Re.setState({
          left: true
        }), Re.setState({
          backward: true
        }), e = "lb")) : ot.direction >= 4.186134216708376 && ot.direction <= 5.23266777088547 ? (console.log("bottom"), e != "b" && (Re.setState({
          right: false
        }), Re.setState({
          forward: false
        }), Re.setState({
          left: false
        }), Re.setState({
          backward: true
        }), e = "b")) : ot.direction >= 5.23266777088547 && ot.direction <= 5.755934547974017 && (console.log("right + bottom"), e != "rb" && (Re.setState({
          forward: false
        }), Re.setState({
          left: false
        }), Re.setState({
          backward: true
        }), Re.setState({
          right: true
        }), e = "rb"));
      }), ot.on("end", function(t, n) {
        Re.setState({
          right: false
        }), Re.setState({
          forward: false
        }), Re.setState({
          left: false
        }), Re.setState({
          backward: false
        });
      });
    }
    startListening() {
      window.addEventListener("keydown", (e) => this.onKeyDown(e)), window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    onKeyDown(e) {
      if (!this.keyPressed[e.code]) {
        switch (e.code) {
          case "KeyW":
          case "ArrowUp":
            console.log("forward"), Re.setState({
              forward: true
            });
            break;
          case "KeyA":
          case "ArrowLeft":
            Re.setState({
              left: true
            });
            break;
          case "KeyS":
          case "ArrowDown":
            Re.setState({
              backward: true
            });
            break;
          case "KeyD":
          case "ArrowRight":
            Re.setState({
              right: true
            });
            break;
        }
        this.keyPressed[e.code] = true;
      }
    }
    onKeyUp(e) {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          Re.setState({
            forward: false
          });
          break;
        case "KeyA":
        case "ArrowLeft":
          Re.setState({
            left: false
          });
          break;
        case "KeyS":
        case "ArrowDown":
          Re.setState({
            backward: false
          });
          break;
        case "KeyD":
        case "ArrowRight":
          Re.setState({
            right: false
          });
          break;
      }
      this.keyPressed[e.code] = false;
    }
  }
  let xa = null;
  class pn {
    constructor() {
      if (xa) return xa;
      xa = this, this.canvas = document.querySelector("canvas.threejs"), this.scene = new K0(), this.gui = new Hx(), this.assetLoader = new Oy(), this.preloader = new Fy(), this.inputController = new Yy(), this.world = new ty(), this.camera = new Ux(), this.renderer = new Bx(), this.loop = new Vx(), this.resize = new ny();
    }
  }
  const $y = !!document.querySelector("canvas.threejs");
  $y && new pn();
  function Zy() {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  }
  function Jy(o) {
    try {
      localStorage.setItem("theme", o);
    } catch {
    }
  }
  function Qy() {
    return typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function Uu(o) {
    document.documentElement.classList.toggle("dark", o);
    const e = (t) => {
      if (!t) return;
      t.setAttribute("aria-pressed", o ? "true" : "false");
      const n = t.querySelector(".sun"), i = t.querySelector(".moon");
      n && i && (n.classList.toggle("hidden", o), i.classList.toggle("hidden", !o));
    };
    e(document.getElementById("theme-toggle")), e(document.getElementById("theme-toggle-mobile"));
  }
  function ew() {
    const o = Zy(), e = o ? o === "dark" : Qy();
    Uu(e);
  }
  function tw() {
    const o = document.getElementById("mobile-menu-toggle"), e = document.getElementById("mobile-menu");
    !o || !e || o.addEventListener("click", () => {
      const t = e.classList.contains("hidden");
      e.classList.toggle("hidden"), o.setAttribute("aria-expanded", t ? "true" : "false");
    });
  }
  ew();
  window.addEventListener("DOMContentLoaded", () => {
    tw();
    const o = () => {
      const n = !document.documentElement.classList.contains("dark");
      Uu(n), Jy(n ? "dark" : "light");
    }, e = document.getElementById("theme-toggle"), t = document.getElementById("theme-toggle-mobile");
    e && e.addEventListener("click", o), t && t.addEventListener("click", o);
  });
})();
