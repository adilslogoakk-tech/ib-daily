// Офлайн: оболочка приложения кэшируется, остальное — сеть с откатом в кэш.
const V = 'ib-daily-v21';
const SHELL = ['./', 'index.html', 'app.js', 'content.js', 'content2.js', 'tags.js', 'misc.js', 'trainer.js', 'config.js', 'sync.js', 'features.js', 'glossary.js', 'glossary_en.js', 'library.js', 'book_de_a.js', 'book_de_b.js', 'book_de_c.js', 'book_de_d.js', 'book_de_e.js', 'book_de_f.js', 'book_de_g.js', 'book_de_h.js', 'book_de_i.js', 'glossary_de.js', 'lessons_de.js', 'drills_de.js', 'cards_de.js', 'drills_en.js', 'cards_en.js', 'lessons_en_a.js', 'lessons_en_b.js', 'book_en_a.js', 'book_en_b.js', 'book_en_c.js', 'book_en_d.js', 'book_en_e.js', 'book_en_f.js', 'book_en_g.js', 'book_en_h.js', 'book_en_i.js', 'book1.js', 'book2.js', 'book3.js', 'theme.js', 'i18n.js', 'manifest.json', 'icon-180.png', 'icon.svg', 'icon-512.png'];
// при установке берём свежие файлы мимо HTTP-кэша (на GitHub Pages он живёт 10 минут)
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => Promise.all(SHELL.map(u => fetch(u, { cache: 'reload' }).then(r => c.put(u, r)))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return; // API (новости, курсы) кэшируются в самом приложении
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
