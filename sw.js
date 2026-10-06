// Офлайн: оболочка приложения кэшируется, остальное — сеть с откатом в кэш.
const V = 'ib-daily-v51';
const SHELL = ['./', 'index.html', 'app.js', 'content.js', 'content2.js', 'tags.js', 'misc.js', 'trainer.js', 'cfa.js', 'config.js', 'sync.js', 'features.js', 'glossary.js', 'glossary_en.js', 'library.js', 'cases.js', 'extras.js', 'deutsch_w1.js', 'deutsch_w2.js', 'deutsch_w3.js', 'deutsch.js', 'ach.js', 'more.js', 'diary.js', 'dwords.js', 'dwords2.js', 'dgram.js', 'dlearn.js', 'glossary_az.js', 'lessons_az.js', 'drills_az.js', 'cards_az.js', 'book_az_a.js', 'book_az_b.js', 'book_az_c.js', 'book_az_d.js', 'book_az_e.js', 'book_az_f.js', 'book_az_g.js', 'book_az_h.js', 'book_az_i.js', 'book_de_a.js', 'book_de_b.js', 'book_de_c.js', 'book_de_d.js', 'book_de_e.js', 'book_de_f.js', 'book_de_g.js', 'book_de_h.js', 'book_de_i.js', 'glossary_de.js', 'lessons_de.js', 'drills_de.js', 'cards_de.js', 'drills_en.js', 'cards_en.js', 'lessons_en_a.js', 'lessons_en_b.js', 'book_en_a.js', 'book_en_b.js', 'book_en_c.js', 'book_en_d.js', 'book_en_e.js', 'book_en_f.js', 'book_en_g.js', 'book_en_h.js', 'book_en_i.js', 'book1.js', 'book2.js', 'book3.js', 'theme.js', 'i18n.js', 'manifest.json', 'icon-180.png', 'icon.svg', 'icon-512.png'];
// при установке берём свежие файлы мимо HTTP-кэша (на GitHub Pages он живёт 10 минут)
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => Promise.all(SHELL.map(u => fetch(u, { cache: 'reload' }).then(r => c.put(u, r)))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return; // API (новости, курсы) кэшируются в самом приложении
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});

// push-уведомления (их шлёт coach/push.js с компьютера)
self.addEventListener('push', e => {
  let d = {}; try { d = e.data.json(); } catch (x) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Mandate', { body: d.body || '', icon: 'icon-180.png', badge: 'icon-180.png', tag: d.tag || 'mandate', data: { url: d.url || './' } }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => cs.length ? cs[0].focus() : clients.openWindow((e.notification.data && e.notification.data.url) || './')));
});
