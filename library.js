'use strict';
// Библиотека: всплывающее объяснение терминов, закладки «Позже» и «Книга» (длинные главы для чтения).
// Подключается до app.js; к его глобальным S, tab, go, render, esc, hl, toast, addXp, CATS, ITEMS, LESSONS обращается только при вызове.
const LIB = (() => {
  const GL = {}, STEMS = [];
  GLOSS.forEach(g => g.m.forEach(m => { const l = m.toLowerCase(); GL[l] = g; if (/[а-я]/i.test(l)) STEMS.push([l, g]); }));
  const find = low => GL[low] || (STEMS.find(([s]) => low.startsWith(s)) || [])[1];
  // языковые пакеты контента: window.GLOSS_EN / BOOK_DE / LESSONS_AZ ... (русский оригинал остаётся запасным вариантом)
  const pk = n => window[n + '_' + I18N.lang.toUpperCase()];
  const byKey = k => { const g = GLOSS.find(x => x.k === k), t = pk('GLOSS'), e = g && t && t[k]; return e ? { ...g, t: e[0], d: e[1], f: e[2] || undefined } : g; };
  // ---- свои книги (EPUB, разбитые на части по ~5 минут): лежат в облаке (kv), кэшируются в IndexedDB ----
  const BK = { idx: null, docs: {}, lists: {}, tried: false, open: null };
  const bdb = (mode, fn) => new Promise((res, rej) => {
    const o = indexedDB.open('ibdaily-books', 1);
    o.onupgradeneeded = () => o.result.createObjectStore('c');
    o.onerror = () => rej(o.error);
    o.onsuccess = () => { const t = o.result.transaction('c', mode), q = fn(t.objectStore('c')); t.oncomplete = () => res(q && q.result); t.onerror = () => rej(t.error); };
  });
  const cget = k => bdb('readonly', s => s.get(k)).catch(() => null), cset = (k, v) => bdb('readwrite', s => s.put(v, k)).catch(() => {});
  async function loadIndex() {
    BK.tried = true;
    try { const d = CLOUD.on && await CLOUD.doc('books'); if (d) { BK.idx = d; cset('index', d); } } catch (e) {}
    if (!BK.idx) BK.idx = (await cget('index')) || [];
    if (tab === 'book') render();
  }
  async function loadBook(id) {
    if (BK.docs[id]) return BK.docs[id];
    let d = await cget('book:' + id);
    if (!d && CLOUD.on) { try { d = await CLOUD.doc('book:' + id); if (d) cset('book:' + id, d); } catch (e) {} }
    if (d) { BK.docs[id] = d; BK.lists[id] = d.parts.map((p, k) => ({ id: 'bk:' + id + ':' + k, bid: id, title: p.t, tag: d.title, intro: '', blocks: p.blocks, bk: true, idx: k })); }
    return d;
  }
  const bpart = id => { const m = /^bk:(.+):(\d+)$/.exec(id), l = m && BK.lists[m[1]]; return l && l[+m[2]]; };
  const chap = id => id && id.startsWith('bk:') ? bpart(id) : BOOK.find(c => c.id === id);
  const TOPIC_CH = { acct: 'statements', ev: 'ev', mult: 'mult', dcf: 'dcf', wacc: 'wacc', tvm: 'tvm', comps: 'comps', dilution: 'dilution', ma: 'ma', lbo: 'lbo', credit: 'debt', markets: 'ecm', career: 'interview' };
  const flat = b => b.slice(1).flat(2).filter(x => typeof x === 'string').join(' ');
  const mins = c => Math.max(3, Math.round(c.blocks.reduce((n, b) => n + flat(b).length, c.intro ? c.intro.length : 0) / 1100));
  let ch = null, seg = null, lastSave = 0;

  // ---------- закладки «Позже» ----------
  const has = (kind, ref) => S.later.some(x => x.kind === kind && x.ref === ref);
  function toggle(kind, ref) {
    const i = S.later.findIndex(x => x.kind === kind && x.ref === ref);
    if (i >= 0) S.later.splice(i, 1); else S.later.unshift({ kind, ref, ts: Date.now() });
    save(); T.track('later', { kind, ref, on: i < 0 });
    document.querySelectorAll(`[data-act=later][data-kind="${kind}"][data-ref="${CSS.escape(ref)}"]`).forEach(b => { const on = i < 0; b.classList.toggle('on', on); b.textContent = on ? '🔖 Сохранено' : b.dataset.label || '🔖 Сохранить'; });
    return i < 0;
  }
  const btn = (kind, ref, text) => `<button class="st later ${has(kind, ref) ? 'on' : ''}" data-act="later" data-kind="${kind}" data-ref="${esc(ref)}" data-label="🔖 ${esc(text)}">${has(kind, ref) ? '🔖 Сохранено' : '🔖 ' + esc(text)}</button>`;
  // что за запись и в какую главу вести
  function info(x) {
    if (x.kind === 'term') { const g = byKey(x.ref); return g && { ic: '📖', title: g.t, snip: g.d, ch: g.a }; }
    if (x.kind === 'lc') { const [id, i] = x.ref.split(':'), l = LESSONS.find(y => y.id === id); return l && { ic: '📘', title: l.title, snip: l.cards[+i] || '', ch: TOPIC_CH[LESSON_TOPIC[l.id]] }; }
    const it = ITEMS[x.ref];
    return it && { ic: x.kind === 'card' ? '🃏' : '🧮', title: it.q, snip: x.kind === 'card' ? it.a : it.e || '', ch: TOPIC_CH[it.topic] };
  }

  // ---------- всплывающее окно термина ----------
  function closeSheet() { const w = document.getElementById('sheet'); if (!w) return; w.classList.remove('open'); setTimeout(() => w.remove(), 280); }
  function openTerm(key) {
    const g = byKey(key); if (!g) return;
    closeSheet(); T.track('term', { k: key });
    const w = document.createElement('div'); w.id = 'sheet';
    w.innerHTML = `<div class="sh-bg" data-act="sheetclose"></div><div class="sh"><div class="grab"></div>
      <div class="row sp"><span class="k k-${g.c}">${CATS[g.c].ic} ${CATS[g.c].name}</span><button class="pill" data-act="sheetclose">✕</button></div>
      <h3 style="margin:12px 0 6px;font-size:20px">${esc(g.t)}</h3><p style="margin:0;line-height:1.55">${esc(g.d)}</p>${g.f ? `<div class="fml">${esc(g.f)}</div>` : ''}
      <div class="grid2" style="margin-top:14px">${g.a && chap(g.a) ? `<button class="btn" style="margin:0" data-act="readterm" data-a="${g.a}">📖 Читать подробно</button>` : '<span></span>'}${btn('term', key, 'Сохранить')}</div></div>`;
    document.body.append(w); requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add('open')));
  }

  // ---------- вкладка «Книга» ----------
  const block = (b, raw) => {
    const H = raw ? esc : hl, bold = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'), P = s => `<p>${bold(H(s))}</p>`;
    switch (b[0]) {
      case 'h': return `<h3 class="bh">${esc(b[1])}</h3>`;
      case 'p': return P(b[1]);
      case 'ul': return `<ul>${b[1].map(x => `<li>${bold(H(x))}</li>`).join('')}</ul>`;
      case 'ol': return `<ol>${b[1].map(x => `<li>${bold(H(x))}</li>`).join('')}</ol>`;
      case 'ex': return `<div class="bx ex"><div class="bxt">Пример: ${esc(b[1])}</div>${b[2].split('\n').map(P).join('')}</div>`;
      case 'key': return `<div class="bx key"><div class="bxt">Главное</div>${P(b[1])}</div>`;
      case 'warn': return `<div class="bx warn"><div class="bxt">Частая ошибка</div>${P(b[1])}</div>`;
      case 'q': return `<div class="bx q"><div class="bxt">Вопрос на собеседовании</div><p><b>${H(b[1])}</b></p>${P(b[2])}</div>`;
      case 'tbl': return `<div class="tw"><table><tr>${b[1].map(h => `<th>${esc(h)}</th>`).join('')}</tr>${b[2].map(r => `<tr>${r.map(c => `<td>${H(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
    }
    return '';
  };
  const bpct = (id, i) => S.read[`bk:${id}:${i}`] ? 100 : Math.round((S.pos[`bk:${id}:${i}`] || 0) * 100);
  function booksPane() {
    const dir = BK.dir; BK.dir = null;
    const h = booksInner();
    if (dir === 'push' && BK.open && !BK.docs[BK.open]) BK.dir = dir;   // книга ещё грузится: анимацию покажем при следующей отрисовке
    return dir ? `<div class="${dir}">${h}</div>` : h;
  }
  function booksInner() {
    if (!BK.tried) loadIndex();
    if (BK.open) return bookPage(BK.open);
    if (!BK.idx) return '<div class="card"><p class="small mute" style="margin:0">Загрузка…</p></div>';
    if (!BK.idx.length) return `<div class="card"><p class="small mute" style="margin:0;line-height:1.55">${CLOUD.on ? 'Здесь будут твои книги, разбитые на части по 5 минут чтения. Отправь мне EPUB в Claude Code, и я добавлю книгу сюда.' : 'Книги хранятся в твоём облаке. Войди в аккаунт в настройках, чтобы увидеть их.'}</p></div>`;
    return BK.idx.map(b => { const done = Array.from({ length: b.parts }, (_, i) => bpct(b.id, i) === 100).filter(Boolean).length;
      return `<div class="card" data-act="bkopen" data-id="${b.id}" style="cursor:pointer"><div class="tag">${b.mins} мин · ${b.parts} частей</div><div style="font-weight:600;margin:4px 0 2px;line-height:1.35" translate="no">${esc(b.title)}</div>${b.author ? `<div class="small mute" translate="no">${esc(b.author)}</div>` : ''}<div class="bar" style="margin:10px 0 4px"><i style="width:${Math.round(done / b.parts * 100)}%"></i></div><div class="small mute">${done} из ${b.parts} прочитано</div></div>`; }).join('');
  }
  function bookPage(id) {
    const m = BK.idx.find(x => x.id === id), d = BK.docs[id];
    const head = `<div class="row"><button class="pill" data-act="bkback">‹ Книги</button></div><div class="tag" style="margin-top:14px">Книга</div><h1 style="font-size:24px" translate="no">${esc(m ? m.title : '')}</h1>${m && m.author ? `<p class="sub" translate="no">${esc(m.author)}</p>` : ''}`;
    if (!d) { loadBook(id).then(r => { if (r && BK.open === id) render(); }); return head + '<div class="card"><p class="small mute" style="margin:0">Загрузка…</p></div>'; }
    const next = d.parts.findIndex((_, i) => bpct(id, i) < 100), mn = p => Math.max(1, Math.round(p.blocks.reduce((n, x) => n + x[1].length, 0) / 1200));
    return head + (next >= 0 ? `<button class="btn" data-act="readch" data-id="bk:${id}:${next}">${bpct(id, next) ? 'Продолжить' : 'Читать'} · ${next + 1}/${d.parts.length}</button>` : '<div class="card"><b>✓ Книга прочитана</b></div>') +
      '<div class="card" style="padding:4px 14px">' + d.parts.map((p, i) => `<div class="goal chap" data-act="readch" data-id="bk:${id}:${i}" style="cursor:pointer;align-items:center"><div class="cn">${i + 1}</div><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3" translate="no">${esc(p.t)}</div><div class="small mute">${mn(p)} мин чтения${bpct(id, i) && bpct(id, i) < 100 ? ' · ' + bpct(id, i) + '%' : ''}</div></div><div class="chk" style="${bpct(id, i) === 100 ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${bpct(id, i) === 100 ? '✓' : ''}</div></div>`).join('') + '</div>';
  }
  function listHtml() {
    const n = BOOK.filter(c => S.read[c.id]).length, sg = seg || (S.later.length ? 'later' : 'chapters'), cur = S.lastCh && chap(S.lastCh);
    let h = `<div class="tag">Книга</div><h1>Библиотека</h1><p class="sub">${BOOK.length} глав · прочитано ${n}</p>`;
    if (cur && !S.read[cur.id]) h += `<div class="card" data-act="readch" data-id="${cur.id}" style="cursor:pointer"><div class="tag">Продолжить чтение</div><div style="font-weight:600;margin-top:4px">${esc(cur.title)}</div>${S.pos[cur.id] ? `<div class="bar" style="margin:10px 0 0"><i style="width:${Math.round(S.pos[cur.id] * 100)}%"></i></div>` : ''}</div>`;
    h += `<div class="seg wide"><button class="${sg === 'later' ? 'on' : ''}" data-act="bkseg" data-v="later">Позже (${S.later.length})</button><button class="${sg === 'chapters' ? 'on' : ''}" data-act="bkseg" data-v="chapters">Главы (${BOOK.length})</button><button class="${sg === 'books' ? 'on' : ''}" data-act="bkseg" data-v="books">Книги${BK.idx && BK.idx.length ? ' (' + BK.idx.length + ')' : ''}</button></div>`;
    if (sg === 'books') return h + booksPane();
    if (sg === 'later') {
      const rows = S.later.map(x => ({ x, i: info(x) })).filter(r => r.i);
      h += rows.length ? rows.map(({ x, i }) => `<div class="card lat"><div class="row sp"><span class="small mute">${i.ic} ${{ term: 'Термин', lc: 'Урок', q: 'Задача', card: 'Карточка' }[x.kind]}</span><button style="background:none;color:var(--mute);font-size:18px" data-act="laterdel" data-kind="${x.kind}" data-ref="${esc(x.ref)}">×</button></div>
        <div style="font-weight:600;margin:6px 0 4px;line-height:1.35">${hl(i.title)}</div><div class="small mute" style="line-height:1.5">${hl(String(i.snip).slice(0, 220))}${String(i.snip).length > 220 ? '…' : ''}</div>
        ${i.ch && chap(i.ch) ? `<button class="btn ghost" style="margin:10px 0 0" data-act="readch" data-id="${i.ch}">📖 Читать подробно: ${esc(chap(i.ch).title)}</button>` : ''}</div>`).join('')
        : '<div class="card"><p class="small mute" style="margin:0;line-height:1.55">Здесь будет то, что ты отметил(а) кнопкой «🔖 Не понял, сохранить». Нажми на любой подсвеченный термин или объяснение и сохрани его на потом.</p></div>';
    } else {
      h += '<div class="card" style="padding:4px 14px">' + BOOK.map((c, i) => `<div class="goal chap" data-act="readch" data-id="${c.id}" style="cursor:pointer;align-items:center"><div class="cn">${i + 1}</div><div style="flex:1;min-width:0"><div class="tag">${esc(c.tag)}</div><div style="font-weight:600;line-height:1.3">${esc(c.title)}</div><div class="small mute">${mins(c)} мин чтения${S.pos[c.id] && !S.read[c.id] ? ' · ' + Math.round(S.pos[c.id] * 100) + '%' : ''}</div></div><div class="chk" style="${S.read[c.id] ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${S.read[c.id] ? '✓' : ''}</div></div>`).join('') + '</div>';
    }
    return h;
  }
  function readerHtml() {
    const c = chap(ch), L = c.bk ? BK.lists[c.bid] : BOOK, i = L.indexOf(c), prev = L[i - 1], next = L[i + 1], serif = S.serif !== false;
    return `<div class="rbar"><i id="rp"></i></div>
    <div class="row sp"><button class="pill" data-act="readclose">‹ Книга</button><div class="row" style="gap:6px"><button class="pill" data-act="fsdown">A−</button><button class="pill" data-act="fsup">A+</button><button class="pill ${serif ? 'on' : ''}" data-act="fsserif">Aa</button></div></div>
    <div class="book ${serif ? '' : 'sans'}" style="--fs:${S.fs || 17}px"><div class="tag" style="margin-top:18px">${c.bk ? 'Часть' : 'Глава'} ${i + 1} из ${L.length} · ${c.bk ? `<span translate="no">${esc(c.tag)}</span>` : esc(c.tag)}</div><h1 class="bt" ${c.bk ? 'translate="no"' : ''}>${esc(c.title)}</h1><p class="small mute" style="margin:0 0 16px">${mins(c)} мин чтения</p>
    ${c.intro ? `<p class="lead">${hl(c.intro)}</p>` : ''}<div ${c.bk ? 'translate="no"' : ''}>${c.blocks.map(b => block(b, c.bk)).join('')}</div>
    <div class="bend"><button class="btn ${S.read[c.id] ? 'ghost' : ''}" data-act="readdone">${S.read[c.id] ? '✓ Глава прочитана' : 'Отметить прочитанной'}</button>
    <div class="grid2" style="margin-top:10px">${prev ? `<button class="btn ghost" style="margin:0" data-act="readch" data-id="${prev.id}">‹ ${c.bk ? 'Назад' : esc(prev.title.slice(0, 22))}</button>` : '<span></span>'}${next ? `<button class="btn ghost" style="margin:0" data-act="readch" data-id="${next.id}">${c.bk ? 'Дальше' : esc(next.title.slice(0, 22))} ›</button>` : '<span></span>'}</div></div></div>`;
  }
  function open(id) {
    if (!chap(id)) return;
    closeSheet(); ch = id; S.lastCh = id; rawSave(); T.track('read_open', { id }); go('book');
    const p = S.pos[id];
    requestAnimationFrame(() => { if (p > 0.03 && p < 0.97) scrollTo(0, p * (document.documentElement.scrollHeight - innerHeight)); else scrollTo(0, 0); });
  }
  window.addEventListener('scroll', () => {
    if (tab !== 'book' || !ch) return;
    const h = document.documentElement.scrollHeight - innerHeight, r = h > 0 ? Math.min(1, Math.max(0, scrollY / h)) : 0, rp = document.getElementById('rp');
    if (rp) rp.style.width = (r * 100) + '%';
    const now = Date.now(); if (now - lastSave > 800) { lastSave = now; S.pos[ch] = r; S.lastCh = ch; rawSave(); }
  }, { passive: true });

  function act(a, D) {
    switch (a) {
      case 'sheetclose': closeSheet(); return true;
      case 'readterm': open(D.a); return true;
      case 'later': { const on = toggle(D.kind, D.ref); toast(on ? 'Сохранено в «Книга → Позже»' : 'Убрано из «Позже»'); return true; }
      case 'laterdel': {
        const el = document.querySelector(`[data-act=laterdel][data-ref="${CSS.escape(D.ref)}"]`), card = el && el.closest('.card');
        toggle(D.kind, D.ref);
        if (card && animOn()) { card.classList.add('out'); setTimeout(render, 280); } else render();
        return true;
      }
      case 'bkseg': seg = D.v; if (D.v === 'books') BK.tried = false; render(); return true;
      case 'readch': open(D.id); return true;
      case 'bkopen': BK.open = D.id; BK.dir = 'push'; render(); return true;
      case 'bkback': BK.open = null; BK.dir = 'pull'; render(); return true;
      case 'readclose': ch = null; render(); window.scrollTo(0, 0); return true;
      case 'fsup': S.fs = Math.min(24, (S.fs || 17) + 1); save(); render(); return true;
      case 'fsdown': S.fs = Math.max(14, (S.fs || 17) - 1); save(); render(); return true;
      case 'fsserif': S.serif = S.serif === false; save(); render(); return true;
      case 'readdone': {
        const first = !S.read[ch]; S.read[ch] = Date.now(); S.pos[ch] = 1; save(); T.track('read_done', { id: ch });
        if (first) { addXp(20); toast('Глава прочитана · +20 XP'); } render(); return true;
      }
    }
    return false;
  }
  // английская версия глав (BOOK_EN) подменяет поля главы на месте; русский оригинал хранится в c.ru
  const sync = () => BOOK.forEach(c => {
    if (!c.ru) c.ru = { title: c.title, tag: c.tag, intro: c.intro, blocks: c.blocks };
    const t = pk('BOOK'), e = t && t[c.id];
    Object.assign(c, e || c.ru);
  });
  // то же для уроков (LESSONS_EN): правим поля на месте, чтобы ссылки тренера на вопросы остались рабочими
  const syncLessons = () => LESSONS.forEach(l => {
    if (!l.ru) l.ru = { title: l.title, tag: l.tag, cards: l.cards, quiz: l.quiz.map(q => ({ q: q.q, o: q.o, e: q.e })) };
    const t = pk('LESSONS'), e = t && t[l.id], src = e || l.ru;
    l.title = src.title; l.tag = src.tag; l.cards = src.cards;
    l.quiz.forEach((q, i) => { if (src.quiz[i]) { q.q = src.quiz[i].q; q.o = src.quiz[i].o; q.e = src.quiz[i].e; } });
  });
  // задачи и ответы карточек: только встроенные (по индексу), личные от тренера идут после них
  const syncDrills = () => {
    const D = pk('DRILLS'), C = pk('CARDS');
    DRILLS.slice(0, 98).forEach((d, i) => {
      if (!d.ru) d.ru = { q: d.q, o: d.o, e: d.e };
      const src = D && D[i] ? { q: D[i][0], o: D[i][1], e: D[i][2] } : d.ru;
      d.q = src.q; d.o = src.o; d.e = src.e;
    });
    CARDS.slice(0, 61).forEach((c, i) => { if (c.ru === undefined) c.ru = c.a; c.a = C && C[i] ? C[i] : c.ru; });
  };
  const syncAll = () => { sync(); syncLessons(); syncDrills(); };
  syncAll();
  return { sync: syncAll, find, byKey, openTerm, closeSheet, btn, act, html: () => ch && chap(ch) ? readerHtml() : listHtml(), cur: () => ch, sub: () => seg || '', reset: () => { ch = null; BK.open = null; } };
})();
