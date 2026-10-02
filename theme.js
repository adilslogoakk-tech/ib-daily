'use strict';
// Темы оформления. Сами значения цветов лежат в index.html (:root[data-theme=...]); здесь только список для настроек и применение.
const THEMES = {
  paper: { name: 'Светлая', bg: '#f5f3ee', ac: '#1b1d22', c: ['#c9531a', '#1f6fb2', '#26804f', '#7444c2'] },
  graphite: { name: 'Графит', bg: '#0e1013', ac: '#eceef2', c: ['#ff9a62', '#5ec8e5', '#6fdc9c', '#c39bff'] },
  emerald: { name: 'Изумруд', bg: '#0a1411', ac: '#3ecf8e', c: ['#ff8a7a', '#7cc4ff', '#b8a4ff', '#ff9ec7'] },
  bordeaux: { name: 'Бордо', bg: '#130a0d', ac: '#f0a8b4', c: ['#ffb089', '#5fd1c4', '#a6d98a', '#c0a6ff'] },
  violet: { name: 'Фиолет', bg: '#0e0c19', ac: '#8b7dff', c: ['#ff9a8a', '#5fd6e0', '#78e0a8', '#ff8fc7'] },
};
const THEME_LIST = [{ id: 'auto', name: 'Авто' }, ...Object.entries(THEMES).map(([id, t]) => ({ id, ...t }))];
const SYS_DARK = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : { matches: false };
const savedTheme = () => { try { return localStorage.getItem('ibdaily.theme'); } catch (e) { return null; } };

// id: paper | graphite | emerald | bordeaux | violet | auto (по теме системы)
function applyTheme(id, smooth) {
  const t = id === 'auto' ? (SYS_DARK.matches ? 'graphite' : 'paper') : THEMES[id] ? id : 'paper', root = document.documentElement;
  if (smooth) { root.classList.add('themeswap'); setTimeout(() => root.classList.remove('themeswap'), 500); }
  root.dataset.theme = t;
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = THEMES[t].bg;
  try { localStorage.setItem('ibdaily.theme', id || 'paper'); } catch (e) {}
}
applyTheme(savedTheme() || 'paper');  // сразу при загрузке, чтобы не было вспышки другой темы
if (SYS_DARK.addEventListener) SYS_DARK.addEventListener('change', () => { if (savedTheme() === 'auto') applyTheme('auto', true); });
