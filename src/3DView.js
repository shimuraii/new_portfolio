import './style.css'
import App from './App/App.js'

const app = new App()

// Theme + mobile menu for 3D page
function getStoredTheme() {
  try { return localStorage.getItem('theme'); } catch { return null; }
}

function setStoredTheme(value) {
  try { localStorage.setItem('theme', value); } catch {}
}

function prefersDark() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  const syncBtn = (btn) => {
    if (!btn) return;
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    const sun = btn.querySelector('.sun');
    const moon = btn.querySelector('.moon');
    if (sun && moon) {
      sun.classList.toggle('hidden', isDark);
      moon.classList.toggle('hidden', !isDark);
    }
  };
  syncBtn(document.getElementById('theme-toggle'));
  syncBtn(document.getElementById('theme-toggle-mobile'));
}

function initTheme() {
  const stored = getStoredTheme();
  const shouldDark = stored ? stored === 'dark' : prefersDark();
  applyTheme(shouldDark);
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const willOpen = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  });
}

initTheme();

window.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  const handler = () => {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    setStoredTheme(isDark ? 'dark' : 'light');

    // Show a small tailwind toast for "player objectives"
    const popup = document.getElementById('popup');
    if (popup) {
      popup.classList.add('show');
      window.setTimeout(() => popup.classList.remove('show'), 6000);
    }
  };
  const desktop = document.getElementById('theme-toggle');
  const mobile = document.getElementById('theme-toggle-mobile');
  if (desktop) desktop.addEventListener('click', handler);
  if (mobile) mobile.addEventListener('click', handler);
});
