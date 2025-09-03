import { A as c } from "./App-wqv4yKSk.js";
new c();
function i() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}
function l(e) {
  try {
    localStorage.setItem("theme", e);
  } catch {
  }
}
function m() {
  return typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function d(e) {
  document.documentElement.classList.toggle("dark", e);
  const t = (n) => {
    if (!n) return;
    n.setAttribute("aria-pressed", e ? "true" : "false");
    const s = n.querySelector(".sun"), o = n.querySelector(".moon");
    s && o && (s.classList.toggle("hidden", e), o.classList.toggle("hidden", !e));
  };
  t(document.getElementById("theme-toggle")), t(document.getElementById("theme-toggle-mobile"));
}
function r() {
  const e = i(), t = e ? e === "dark" : m();
  d(t);
}
function a() {
  const e = document.getElementById("mobile-menu-toggle"), t = document.getElementById("mobile-menu");
  !e || !t || e.addEventListener("click", () => {
    const n = t.classList.contains("hidden");
    t.classList.toggle("hidden"), e.setAttribute("aria-expanded", n ? "true" : "false");
  });
}
r();
window.addEventListener("DOMContentLoaded", () => {
  a();
  const e = () => {
    const s = !document.documentElement.classList.contains("dark");
    d(s), l(s ? "dark" : "light");
    const o = document.getElementById("popup");
    o && (o.classList.add("show"), window.setTimeout(() => o.classList.remove("show"), 6e3));
  }, t = document.getElementById("theme-toggle"), n = document.getElementById("theme-toggle-mobile");
  t && t.addEventListener("click", e), n && n.addEventListener("click", e);
});
