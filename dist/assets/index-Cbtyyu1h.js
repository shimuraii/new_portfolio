const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-wqv4yKSk.js","./App-DgU-ZN9Z.css"])))=>i.map(i=>d[i]);
import { A as C, _ as g, __tla as __tla_0 } from "./App-wqv4yKSk.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const S = !!document.querySelector("canvas.threejs");
  S && new C();
  function B() {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  }
  function T(e) {
    try {
      localStorage.setItem("theme", e);
    } catch {
    }
  }
  function O() {
    return typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function v(e) {
    document.documentElement.classList.toggle("dark", e);
    const t = (n) => {
      if (!n) return;
      n.setAttribute("aria-pressed", e ? "true" : "false");
      const i = n.querySelector(".sun"), u = n.querySelector(".moon");
      i && u && (i.classList.toggle("hidden", e), u.classList.toggle("hidden", !e));
    };
    t(document.getElementById("theme-toggle")), t(document.getElementById("theme-toggle-mobile"));
  }
  function R() {
    const e = B(), t = e ? e === "dark" : O();
    v(t);
  }
  function z() {
    const e = document.getElementById("mobile-menu-toggle"), t = document.getElementById("mobile-menu");
    !e || !t || e.addEventListener("click", () => {
      const n = t.classList.contains("hidden");
      t.classList.toggle("hidden"), e.setAttribute("aria-expanded", n ? "true" : "false");
    });
  }
  R();
  window.addEventListener("DOMContentLoaded", () => {
    z();
    const e = () => {
      const i = !document.documentElement.classList.contains("dark");
      v(i), T(i ? "dark" : "light");
    }, t = document.getElementById("theme-toggle"), n = document.getElementById("theme-toggle-mobile");
    t && t.addEventListener("click", e), n && n.addEventListener("click", e);
  });
  async function q() {
    const e = document.getElementById("avatarPortrait");
    if (!e) return;
    const [{ WebGLRenderer: t, Scene: n, PerspectiveCamera: i, Color: u, sRGBEncoding: _, ACESFilmicToneMapping: M, AmbientLight: A, DirectionalLight: D, Box3: P, Vector3: f }, { GLTFLoader: x }, { DRACOLoader: I }] = await Promise.all([
      g(() => import("./App-wqv4yKSk.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((o) => o.t), __vite__mapDeps([0,1]), import.meta.url),
      g(() => import("./App-wqv4yKSk.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((o) => o.G), __vite__mapDeps([0,1]), import.meta.url),
      g(() => import("./App-wqv4yKSk.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((o) => o.D), __vite__mapDeps([0,1]), import.meta.url)
    ]), a = new t({
      canvas: e,
      antialias: true,
      alpha: true
    });
    a.outputEncoding = _, a.toneMapping = M, a.setClearColor(new u(0, 0, 0), 0);
    const h = new n(), r = new i(30, 1, 0.1, 100);
    h.add(new A(16777215, 0.6));
    const p = new D(16777215, 1);
    p.position.set(2, 3, 4), h.add(p);
    const w = new I();
    w.setDecoderPath("/draco/");
    const L = new x();
    L.setDRACOLoader(w);
    let c;
    await new Promise((o, l) => {
      L.load("/models/avatar.glb", (m) => {
        c = m.scene, h.add(c), o();
      }, void 0, l);
    });
    const E = new P().setFromObject(c), d = new f(), s = new f();
    E.getSize(d), E.getCenter(s);
    const b = Math.max(d.x, d.y, d.z) / (2 * Math.tan(Math.PI * r.fov / 360)) * 1.4;
    r.position.set(s.x, s.y + d.y * 0.1, s.z + b), r.lookAt(s), c.position.sub(s);
    function k() {
      const o = Math.min(window.devicePixelRatio || 1, 2), l = e.clientWidth || 180, m = e.clientHeight || 180;
      (e.width !== Math.round(l * o) || e.height !== Math.round(m * o)) && (a.setPixelRatio(o), a.setSize(l, m, false), r.aspect = l / m, r.updateProjectionMatrix());
    }
    function y() {
      k(), c && (c.rotation.y += 5e-3), a.render(h, r), requestAnimationFrame(y);
    }
    y();
  }
  window.addEventListener("DOMContentLoaded", () => {
    q();
  });
});
