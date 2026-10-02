// Офлайн: оболочка приложения кэшируется, остальное — сеть с откатом в кэш.
const V = 'ib-daily-v12';
const SHELL = ['./', 'index.html', 'app.js', 'content.js', 'content2.js', 'tags.js', 'misc.js', 'trainer.js', 'config.js', 'sync.js', 'features.js', 'theme.js', 'manifest.json', 'icon-180.png', 'icon.svg', 'icon-512.png'];
// при установке берём свежие файлы мимо HTTP-кэша (на GitHub Pages он живёт 10 минут)
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => Promise.all(SHELL.map(u => fetch(u, { cache: 'reload' }).then(r => c.put(u, r)))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return; // API (новости, курсы) кэшируются в самом приложении
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
