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
  function toggle(kind, ref, extra) {
    const i = S.later.findIndex(x => x.kind === kind && x.ref === ref);
    if (i >= 0) S.later.splice(i, 1); else S.later.unshift({ kind, ref, ts: Date.now(), ...extra });
    save(); T.track('later', { kind, ref, on: i < 0 });
    document.querySelectorAll(`[data-act=later][data-kind="${kind}"][data-ref="${CSS.escape(ref)}"]`).forEach(b => { const on = i < 0; b.classList.toggle('on', on); b.textContent = on ? '🔖 Сохранено' : b.dataset.label || '🔖 Сохранить'; });
    return i < 0;
  }
  const btn = (kind, ref, text) => `<button class="st later ${has(kind, ref) ? 'on' : ''}" data-act="later" data-kind="${kind}" data-ref="${esc(ref)}" data-label="🔖 ${esc(text)}">${has(kind, ref) ? '🔖 Сохранено' : '🔖 ' + esc(text)}</button>`;
  // что за запись и в какую главу вести
  function info(x) {
    if (x.kind === 'term') { const g = byKey(x.ref); return g && { ic: '📖', title: g.t, snip: g.d, ch: g.a }; }
    if (x.kind === 'quote') return { ic: '❝', title: x.src, snip: x.text, ch: x.ch, q: x.ref.split('#')[1] };
    if (x.kind === 'lc') { const [id, i] = x.ref.split(':'), l = LESSONS.find(y => y.id === id); return l && { ic: '📘', title: l.title, snip: l.cards[+i] || '', ch: TOPIC_CH[LESSON_TOPIC[l.id]] }; }
    const it = ITEMS[x.ref];
    return it && { ic: x.kind === 'card' ? '🃏' : '🧮', title: it.q, snip: x.kind === 'card' ? it.a : it.e || '', ch: TOPIC_CH[it.topic] };
  }

  // ---------- всплывающее окно термина ----------
  function closeSheet() { qbar(false); const w = document.getElementById('sheet'); if (!w) return; w.classList.remove('open'); setTimeout(() => w.remove(), 280); }
  function openTerm(key) {
    const g = byKey(key); if (!g) return;
    closeSheet(); T.track('term', { k: key });
    const w = document.createElement('div'); w.id = 'sheet';
    w.innerHTML = `<div class="sh-bg" data-act="sheetclose"></div><div class="sh"><div class="grab"></div>
      <div class="row sp"><span class="k k-${g.c}">${CATS[g.c].ic} ${CATS[g.c].name}</span><button class="pill" data-act="sheetclose">✕</button></div>
      <h3 style="margin:12px 0 6px;font-size:20px">${esc(g.t)}</h3><p style="margin:0;line-height:1.55">${esc(g.d)}</p>${g.f ? `<div class="fml">${esc(g.f)}</div>` : ''}${typeof DEU !== 'undefined' ? DEU.termLine(g.k) : ''}
      <div class="grid2" style="margin-top:14px">${g.a && chap(g.a) ? `<button class="btn" style="margin:0" data-act="readterm" data-a="${g.a}">📖 Читать подробно</button>` : '<span></span>'}${btn('term', key, 'Сохранить')}</div></div>`;
    document.body.append(w); requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add('open')));
  }

  // ---------- слушать главу: озвучка текста системным голосом (экран должен оставаться включённым) ----------
  const LS = { on: false, i: 0, units: [], rate: 1, paused: false, gen: 0, lang: 'en-US', last: null };
  const lsEls = () => [...document.querySelectorAll('.book .lead, .book h3, .book p, .book li')].filter(e => (e.innerText || '').trim().length > 1 && !e.closest('.bend') && !e.classList.contains('small'));
  const guessLang = t => { const cy = (t.match(/[А-Яа-яЁё]/g) || []).length / Math.max(1, t.length); if (cy > 0.2) return 'ru-RU'; const de = (t.match(/\b(der|die|das|und|nicht|ist|ein|eine|ich|sie|zu|mit|auf|von)\b/gi) || []).length / Math.max(1, t.split(/\s+/).length); return de > 0.12 ? 'de-DE' : 'en-US'; };
  const lsChunks = txt => { const out = []; let cur = ''; for (const s of (txt.replace(/\s+/g, ' ').match(/[^.!?…]+[.!?…]*\s*/g) || [txt])) { if (cur && (cur + s).length > 220) { out.push(cur); cur = s; } else cur += s; } if (cur) out.push(cur); return out.flatMap(x => x.length > 260 ? x.match(/.{1,240}(\s|$)/g) : [x]); };
  function lsBar() {
    let b = document.getElementById('lbar');
    if (!LS.on) { if (b) b.remove(); return; }
    if (!b) { b = document.createElement('div'); b.id = 'lbar'; document.body.append(b); }
    b.innerHTML = `<button class="pill" data-act="lprev">⏮</button><button class="btn" style="margin:0" data-act="lpp">${LS.paused ? '▶ Продолжить' : '⏸ Пауза'}</button><button class="pill" data-act="lnext">⏭</button><button class="pill" data-act="lrate">${LS.rate}×</button><button class="pill" data-act="lstop">✕</button>`;
  }
  function lsMark(u) {
    const els = lsEls(), el = els[u.ei]; if (!el || el === LS.last) return; LS.last = el;
    document.querySelectorAll('.qs').forEach(x => x.classList.remove('qs')); el.classList.add('qs'); el.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  function lsSpeak() {
    if (!LS.on) return; const u = LS.units[LS.i]; if (!u) return lsEnd();
    const g = ++LS.gen, ut = new SpeechSynthesisUtterance(u.text); ut.lang = LS.lang; ut.rate = LS.rate;
    const v = speechSynthesis.getVoices().find(x => x.lang.replace('_', '-').startsWith(LS.lang.slice(0, 2))); if (v) ut.voice = v;
    const nx = () => { if (g === LS.gen && LS.on && !LS.paused) { LS.i++; lsSpeak(); } };
    ut.onend = nx; ut.onerror = nx; lsMark(u); speechSynthesis.cancel(); speechSynthesis.speak(ut);
  }
  const lsBtn = () => { const b = document.querySelector('[data-act=lsn]'); if (b) b.classList.toggle('on', LS.on); };
  function lsStart() {
    if (!ch || tab !== 'book' || !window.speechSynthesis) return toast('Озвучка недоступна на этом устройстве');
    const els = lsEls(); if (!els.length) return;
    const first = Math.max(0, els.findIndex(e => e.getBoundingClientRect().top >= 60)), c = chap(ch);
    LS.units = els.flatMap((e, ei) => ei < first ? [] : lsChunks(e.innerText).map(text => ({ ei, text })));
    LS.lang = c.bk ? guessLang(els.slice(0, 4).map(e => e.innerText).join(' ')) : { ru: 'ru-RU', en: 'en-US', de: 'de-DE', az: 'az-AZ' }[I18N.lang] || 'en-US';
    LS.on = true; LS.paused = false; LS.i = 0; LS.last = null; T.track('listen', { id: ch }); lsBar(); lsSpeak();
  }
  function lsStop() { if (!LS.on) return; LS.on = false; LS.gen++; try { speechSynthesis.cancel(); } catch (e) {} document.querySelectorAll('.qs').forEach(x => x.classList.remove('qs')); lsBar(); }
  function lsJump(d) {
    const cur = LS.units[LS.i]; if (!cur) return; let k = LS.i;
    if (d > 0) { while (LS.units[k] && LS.units[k].ei === cur.ei) k++; } else { while (k > 0 && LS.units[k - 1].ei === cur.ei) k--; if (k > 0) { k--; while (k > 0 && LS.units[k - 1].ei === LS.units[k].ei) k--; } }
    LS.i = Math.max(0, Math.min(LS.units.length - 1, k)); LS.paused = false; lsBar(); lsSpeak();
  }
  function lsEnd() {
    const c = chap(ch), L = c.bk ? BK.lists[c.bid] : BOOK, nx = L[L.indexOf(c) + 1], first = !S.read[ch];
    S.read[ch] = Date.now(); S.pos[ch] = 1; save(); T.track('read_done', { id: ch, by: 'listen' }); if (first) { addXp(20); toast('Глава прочитана · +20 XP'); }
    lsStop(); if (nx) { open(nx.id); setTimeout(lsStart, 800); }
  }

  // ---------- цитаты из книги: нажал на абзац, сохранил в «Позже» или сделал карточку ----------
  let qsel = null;
  function qbar(show) {
    document.querySelectorAll('.qs').forEach(x => x.classList.remove('qs'));
    let b = document.getElementById('qbar');
    if (!show) { qsel = null; if (b) b.remove(); return; }
    if (!b) { b = document.createElement('div'); b.id = 'qbar'; document.body.append(b); }
    const el = document.querySelector(`[data-q="${qsel}"]`); if (el) el.classList.add('qs');
    const on = has('quote', ch + '#' + qsel);
    b.innerHTML = `<button class="btn" style="margin:0" data-act="qsave">${on ? '✓ В заметках · убрать' : '❝ В заметки'}</button><button class="btn ghost" style="margin:0" data-act="qcard">🃏 В карточку</button><button class="pill" data-act="qclose">✕</button>`;
  }
  document.addEventListener('click', e => {
    if (tab !== 'book' || !ch || e.target.closest('.k[data-term],a,button,#qbar,#sheet')) return;
    const el = e.target.closest('.book [data-q]'); if (!el) return;
    if (String(window.getSelection())) return;   // выделяет текст: не мешаем
    qsel = qsel === el.dataset.q ? null : el.dataset.q; qbar(qsel != null);
  });
  function qsave() {
    const c = chap(ch), key = qsel, ref = ch + '#' + key, on = has('quote', ref);
    if (!on) { const text = qtext(c, key); if (!text) return; toggle('quote', ref, { text, ch, src: c.bk ? c.tag + ' · ' + c.title : c.title }); }
    else toggle('quote', ref);
    const el = document.querySelector(`[data-q="${key}"]`); if (el) el.classList.toggle('qd', !on);
    toast(on ? 'Цитата убрана' : 'Цитата сохранена'); qbar(true);
  }
  function qcard() {
    const c = chap(ch), text = qtext(c, qsel); if (!text) return;
    const w = document.createElement('div'); w.id = 'sheet'; const src = c.bk ? c.tag : c.title;
    const q = tr('Продолжи мысль') + ' (' + src + '): «' + text.split(' ').slice(0, 6).join(' ') + '…»';
    w.innerHTML = `<div class="sh-bg" data-act="sheetclose"></div><div class="sh"><div class="grab"></div><div class="row sp"><h3 style="margin:0;font-size:20px">Новая карточка</h3><button class="pill" data-act="sheetclose">✕</button></div>
      <div class="small mute" style="margin:12px 0 4px">Вопрос</div><textarea id="qcq" rows="3">${esc(q)}</textarea><div class="small mute" style="margin:10px 0 4px">Ответ</div><textarea id="qca" rows="5">${esc(text)}</textarea>
      <button class="btn" data-act="qmk">Создать карточку</button></div>`;
    document.body.append(w); requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add('open')));
  }
  function qmk() {
    const q = document.getElementById('qcq').value.trim(), a = document.getElementById('qca').value.trim(); if (!q || !a) return;
    const card = { id: 'u' + Date.now().toString(36), topic: 'career', q, a };
    S.mycards.push(card); CARDS.push({ ...card }); registerAll(); save(); T.track('mycard', { id: card.id });
    closeSheet(); toast('Карточка добавлена в тренировку');
  }

  // ---------- вкладка «Книга» ----------
  const block = (b, raw, bi) => {
    const H = raw ? esc : hl, bold = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'), Q = k => k == null ? '' : ` data-q="${k}"${has('quote', ch + '#' + k) ? ' class="qd"' : ''}`, P = (s, k) => `<p${Q(k)}>${bold(H(s))}</p>`;
    switch (b[0]) {
      case 'h': return `<h3 class="bh">${esc(b[1])}</h3>`;
      case 'p': return P(b[1], bi);
      case 'ul': return `<ul>${b[1].map((x, j) => `<li${Q(bi + '.' + j)}>${bold(H(x))}</li>`).join('')}</ul>`;
      case 'ol': return `<ol>${b[1].map((x, j) => `<li${Q(bi + '.' + j)}>${bold(H(x))}</li>`).join('')}</ol>`;
      case 'ex': return `<div class="bx ex"><div class="bxt">Пример: ${esc(b[1])}</div>${b[2].split('\n').map((x, j) => P(x, bi + '.' + j)).join('')}</div>`;
      case 'key': return `<div class="bx key"><div class="bxt">Главное</div>${P(b[1], bi)}</div>`;
      case 'warn': return `<div class="bx warn"><div class="bxt">Частая ошибка</div>${P(b[1], bi)}</div>`;
      case 'q': return `<div class="bx q"><div class="bxt">Вопрос на собеседовании</div><p><b>${H(b[1])}</b></p>${P(b[2], bi)}</div>`;
      case 'tbl': return `<div class="tw"><table><tr>${b[1].map(h => `<th>${esc(h)}</th>`).join('')}</tr>${b[2].map(r => `<tr>${r.map(c => `<td>${H(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
    }
    return '';
  };
  // текст абзаца по ключу data-q ("3" или "3.1") из блоков главы
  function qtext(c, key) {
    const [i, j] = key.split('.').map(Number), b = c.blocks[i]; if (!b) return '';
    const t = b[0], s = t === 'ul' || t === 'ol' ? b[1][j] : t === 'ex' ? b[2].split('\n')[j] : t === 'q' ? b[2] : b[1];
    return String(s || '').replace(/\*\*/g, '');
  }
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
    const so = S.bsort || { k: 'new', d: -1 }, str = k => k === 'title' || k === 'author';
    const rows = BK.idx.map((b, i) => ({ b, i, done: Array.from({ length: b.parts }, (_, j) => bpct(b.id, j) === 100).filter(Boolean).length }));
    const val = r => ({ new: -r.i, title: r.b.title, author: r.b.author || '', mins: r.b.mins, parts: r.b.parts, pct: r.done / r.b.parts }[so.k]);
    rows.sort((x, y) => (str(so.k) ? String(val(x)).localeCompare(String(val(y)), undefined, { sensitivity: 'base' }) : val(x) - val(y)) * so.d || x.i - y.i);
    const SORTS = [['new', 'Порядок добавления'], ['title', 'Название'], ['author', 'Автор'], ['mins', 'Время чтения'], ['parts', 'Части'], ['pct', 'Мой прогресс']];
    const bar = `<div class="chips">${SORTS.map(([k, t]) => `<button class="chip ${so.k === k ? 'on' : ''}" data-act="bksort" data-k="${k}"><span>${t}</span>${so.k === k ? (so.d > 0 ? ' ↑' : ' ↓') : ''}</button>`).join('')}</div>`;
    const re = BK.re; BK.re = false;
    return bar + `<div class="bklist${re ? ' re' : ''}">` + rows.map(({ b, done }, n) => {
      return `<div class="card" data-act="bkopen" data-id="${b.id}" style="cursor:pointer;--i:${Math.min(n, 10)}"><div class="tag">${b.mins} мин · ${b.parts} частей</div><div style="font-weight:600;margin:4px 0 2px;line-height:1.35" translate="no">${esc(b.title)}</div>${b.author ? `<div class="small mute" translate="no">${esc(b.author)}</div>` : ''}<div class="bar" style="margin:10px 0 4px"><i style="width:${Math.round(done / b.parts * 100)}%"></i></div><div class="small mute">${done} из ${b.parts} прочитано</div></div>`; }).join('') + '</div>';
  }
  // поиск по тексту одной книги: находим абзацы и открываем часть сразу на нужном месте
  const bkeys = c => c.blocks.flatMap((b, i) => b[0] === 'ul' || b[0] === 'ol' ? b[1].map((_, j) => i + '.' + j) : b[0] === 'ex' ? b[2].split('\n').map((_, j) => i + '.' + j) : ['h'].includes(b[0]) ? [] : [String(i)]);
  function bqRes(d, id) {
    const q = (BK.q || '').trim().toLowerCase(); if (q.length < 3) return '';
    const hits = [];
    for (let k = 0; k < d.parts.length && hits.length < 30; k++) {
      const c = BK.lists[id] && BK.lists[id][k]; if (!c) continue;
      for (const key of bkeys(c)) {
        const t = qtext(c, key), at = t.toLowerCase().indexOf(q);
        if (at >= 0) { hits.push({ k, key, snip: (at > 50 ? '…' : '') + t.slice(Math.max(0, at - 50), at + q.length + 80) + '…', t: c.title }); if (hits.length >= 30) break; }
      }
    }
    if (!hits.length) return '<p class="small mute" style="text-align:center;padding:16px 0">Ничего не найдено</p>';
    return '<div class="card" style="padding:4px 14px">' + hits.map(h => `<div class="goal" data-act="readch" data-id="bk:${id}:${h.k}" data-q="${h.key}" style="cursor:pointer;display:block;padding:10px 0"><div class="small mute" translate="no">${esc(h.t)}</div><div class="small" style="line-height:1.5;margin-top:2px" translate="no">${esc(h.snip)}</div></div>`).join('') + '</div>';
  }
  document.addEventListener('input', e => {
    if (e.target.id !== 'bq' || !BK.open) return;
    BK.q = e.target.value; const d = BK.docs[BK.open], r = document.getElementById('bqres'), l = document.getElementById('bplist');
    if (d && r && l) { r.innerHTML = bqRes(d, BK.open); l.hidden = BK.q.trim().length >= 3; }
  });
  function bookPage(id) {
    const m = BK.idx.find(x => x.id === id), d = BK.docs[id];
    const head = `<div class="row"><button class="pill" data-act="bkback">‹ Книги</button></div><div class="tag" style="margin-top:14px">Книга</div><h1 style="font-size:24px" translate="no">${esc(m ? m.title : '')}</h1>${m && m.author ? `<p class="sub" translate="no">${esc(m.author)}</p>` : ''}`;
    if (!d) { loadBook(id).then(r => { if (r && BK.open === id) render(); }); return head + '<div class="card"><p class="small mute" style="margin:0">Загрузка…</p></div>'; }
    const next = d.parts.findIndex((_, i) => bpct(id, i) < 100), mn = p => Math.max(1, Math.round(p.blocks.reduce((n, x) => n + x[1].length, 0) / 1200));
    return head + (next >= 0 ? `<button class="btn" data-act="readch" data-id="bk:${id}:${next}">${bpct(id, next) ? 'Продолжить' : 'Читать'} · ${next + 1}/${d.parts.length}</button>` : '<div class="card"><b>✓ Книга прочитана</b></div>') +
      `<input type="text" id="bq" placeholder="Поиск по книге" value="${esc(BK.q || '')}" style="margin-top:12px"><div id="bqres">${bqRes(d, id)}</div><div id="bplist" ${BK.q ? 'hidden' : ''}>` + '<div class="card" style="padding:4px 14px">' + d.parts.map((p, i) => `<div class="goal chap" data-act="readch" data-id="bk:${id}:${i}" style="cursor:pointer;align-items:center"><div class="cn">${i + 1}</div><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3" translate="no">${esc(p.t)}</div><div class="small mute">${mn(p)} мин чтения${bpct(id, i) && bpct(id, i) < 100 ? ' · ' + bpct(id, i) + '%' : ''}</div></div><div class="chk" style="${bpct(id, i) === 100 ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${bpct(id, i) === 100 ? '✓' : ''}</div></div>`).join('') + '</div></div>';
  }
  function listHtml() {
    const n = BOOK.filter(c => S.read[c.id]).length, sg = seg || (S.later.length ? 'later' : 'chapters'), cur = S.lastCh && chap(S.lastCh);
    let h = `<div class="tag">Книга</div><h1>Библиотека</h1><p class="sub">${BOOK.length} глав · прочитано ${n}</p>`;
    if (cur && !S.read[cur.id]) h += `<div class="card" data-act="readch" data-id="${cur.id}" style="cursor:pointer"><div class="tag">Продолжить чтение</div><div style="font-weight:600;margin-top:4px">${esc(cur.title)}</div>${S.pos[cur.id] ? `<div class="bar" style="margin:10px 0 0"><i style="width:${Math.round(S.pos[cur.id] * 100)}%"></i></div>` : ''}</div>`;
    h += `<div class="seg wide"><button class="${sg === 'later' ? 'on' : ''}" data-act="bkseg" data-v="later">Позже (${S.later.length})</button><button class="${sg === 'chapters' ? 'on' : ''}" data-act="bkseg" data-v="chapters">Главы (${BOOK.length})</button><button class="${sg === 'books' ? 'on' : ''}" data-act="bkseg" data-v="books">Книги${BK.idx && BK.idx.length ? ' (' + BK.idx.length + ')' : ''}</button></div>`;
    if (sg === 'books') return h + booksPane();
    if (sg === 'later') {
      const rows = S.later.map(x => ({ x, i: info(x) })).filter(r => r.i);
      h += rows.length ? rows.map(({ x, i }) => `<div class="card lat"><div class="row sp"><span class="small mute">${i.ic} ${{ term: 'Термин', lc: 'Урок', q: 'Задача', card: 'Карточка', quote: 'Цитата' }[x.kind]}</span><button style="background:none;color:var(--mute);font-size:18px" data-act="laterdel" data-kind="${x.kind}" data-ref="${esc(x.ref)}">×</button></div>
        ${i.q ? `<div class="small mute" style="margin:6px 0 4px" translate="no">${esc(i.title)}</div><div style="line-height:1.55;font-style:italic" translate="no">${esc(i.snip)}</div><button class="btn ghost" style="margin:10px 0 0" data-act="readch" data-id="${i.ch}" data-q="${i.q}">📖 Открыть место в книге</button>` : `<div style="font-weight:600;margin:6px 0 4px;line-height:1.35">${hl(i.title)}</div><div class="small mute" style="line-height:1.5">${hl(String(i.snip).slice(0, 220))}${String(i.snip).length > 220 ? '…' : ''}</div>`}
        ${!i.q && i.ch && chap(i.ch) ? `<button class="btn ghost" style="margin:10px 0 0" data-act="readch" data-id="${i.ch}">📖 Читать подробно: ${esc(chap(i.ch).title)}</button>` : ''}</div>`).join('')
        : '<div class="card"><p class="small mute" style="margin:0;line-height:1.55">Здесь будет то, что ты отметил(а) кнопкой «🔖 Не понял, сохранить». Нажми на любой подсвеченный термин или объяснение и сохрани его на потом.</p></div>';
    } else {
      h += '<div class="card" style="padding:4px 14px">' + BOOK.map((c, i) => `<div class="goal chap" data-act="readch" data-id="${c.id}" style="cursor:pointer;align-items:center"><div class="cn">${i + 1}</div><div style="flex:1;min-width:0"><div class="tag">${esc(c.tag)}</div><div style="font-weight:600;line-height:1.3">${esc(c.title)}</div><div class="small mute">${mins(c)} мин чтения${S.pos[c.id] && !S.read[c.id] ? ' · ' + Math.round(S.pos[c.id] * 100) + '%' : ''}</div></div><div class="chk" style="${S.read[c.id] ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${S.read[c.id] ? '✓' : ''}</div></div>`).join('') + '</div>';
    }
    return h;
  }
  function readerHtml() {
    const c = chap(ch), L = c.bk ? BK.lists[c.bid] : BOOK, i = L.indexOf(c), prev = L[i - 1], next = L[i + 1], serif = S.serif !== false;
    return `<div class="rbar"><i id="rp"></i></div>
    <div class="row sp"><button class="pill" data-act="readclose">‹ Книга</button><div class="row" style="gap:6px"><button class="pill ${LS.on ? 'on' : ''}" data-act="lsn" aria-label="Слушать">🎧</button><button class="pill" data-act="fsdown">A−</button><button class="pill" data-act="fsup">A+</button><button class="pill ${serif ? 'on' : ''}" data-act="fsserif">Aa</button></div></div>
    <div class="book ${serif ? '' : 'sans'}" style="--fs:${S.fs || 17}px"><div class="tag" style="margin-top:18px">${c.bk ? 'Часть' : 'Глава'} ${i + 1} из ${L.length} · ${c.bk ? `<span translate="no">${esc(c.tag)}</span>` : esc(c.tag)}</div><h1 class="bt" ${c.bk ? 'translate="no"' : ''}>${esc(c.title)}</h1><p class="small mute" style="margin:0 0 ${S.later.some(x => x.kind === 'quote') ? 16 : 6}px">${mins(c)} мин чтения</p>${S.later.some(x => x.kind === 'quote') ? '' : '<p class="small mute" style="margin:0 0 16px">Нажми на абзац, чтобы сохранить цитату или сделать карточку</p>'}
    ${c.intro ? `<p class="lead">${hl(c.intro)}</p>` : ''}<div ${c.bk ? 'translate="no"' : ''}>${c.blocks.map((b, bi) => block(b, c.bk, bi)).join('')}</div>
    <div class="bend"><button class="btn ${S.read[c.id] ? 'ghost' : ''}" data-act="readdone">${S.read[c.id] ? '✓ Глава прочитана' : 'Отметить прочитанной'}</button>
    <div class="grid2" style="margin-top:10px">${prev ? `<button class="btn ghost" style="margin:0" data-act="readch" data-id="${prev.id}">‹ ${c.bk ? 'Назад' : esc(prev.title.slice(0, 22))}</button>` : '<span></span>'}${next ? `<button class="btn ghost" style="margin:0" data-act="readch" data-id="${next.id}">${c.bk ? 'Дальше' : esc(next.title.slice(0, 22))} ›</button>` : '<span></span>'}</div></div></div>`;
  }
  function open(id, q) {
    if (!chap(id)) return;
    lsStop(); closeSheet(); ch = id; S.lastCh = id; rawSave(); T.track('read_open', { id }); go('book');
    const p = S.pos[id];
    requestAnimationFrame(() => { const el = q && document.querySelector(`[data-q="${q}"]`); if (el) return el.scrollIntoView({ block: 'center' }); if (p > 0.03 && p < 0.97) scrollTo(0, p * (document.documentElement.scrollHeight - innerHeight)); else scrollTo(0, 0); });
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
      case 'readch': {
        const m = /^bk:(.+):(\d+)$/.exec(D.id);
        if (m && !chap(D.id)) openPart(m[1], +m[2]); else open(D.id, D.q);
        return true;
      }
      case 'lsn': if (LS.on) lsStop(); else lsStart(); lsBtn(); return true;
      case 'lpp': LS.paused = !LS.paused; if (LS.paused) { LS.gen++; speechSynthesis.cancel(); lsBar(); } else { lsBar(); lsSpeak(); } return true;
      case 'lprev': lsJump(-1); return true;
      case 'lnext': lsJump(1); return true;
      case 'lrate': LS.rate = { 1: 1.15, 1.15: 1.3, 1.3: 0.9, 0.9: 1 }[LS.rate] || 1; lsBar(); if (!LS.paused) lsSpeak(); return true;
      case 'lstop': lsStop(); lsBtn(); return true;
      case 'qsave': qsave(); return true;
      case 'qcard': qcard(); return true;
      case 'qmk': qmk(); return true;
      case 'qclose': qbar(false); return true;
      case 'bksort': { const o = S.bsort || { k: 'new', d: -1 }; BK.re = true; S.bsort = o.k === D.k ? { k: o.k, d: -o.d } : { k: D.k, d: D.k === 'title' || D.k === 'author' ? 1 : -1 }; save(); render(); return true; }
      case 'bkopen': BK.open = D.id; BK.q = ''; BK.dir = 'push'; render(); return true;
      case 'bkback': BK.open = null; BK.dir = 'pull'; render(); return true;
      case 'readclose': lsStop(); qbar(false); ch = null; render(); window.scrollTo(0, 0); return true;
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
  // для поиска и переходов из него
  async function preloadBooks() {
    if (!BK.idx) { try { const d = CLOUD.on && await CLOUD.doc('books'); BK.idx = d || (await cget('index')) || []; } catch (e) { BK.idx = (await cget('index')) || []; } }
    for (const m of BK.idx) await loadBook(m.id);
  }
  async function openPart(bid, i) { await loadBook(bid); seg = 'books'; BK.open = bid; open('bk:' + bid + ':' + i); }
  const syncAll = () => { sync(); syncLessons(); syncDrills(); };
  syncAll();
  return { sync: syncAll, bookData: () => BK, preloadBooks, openPart, find, byKey, openTerm, closeSheet, btn, act, html: () => ch && chap(ch) ? readerHtml() : listHtml(), cur: () => ch, sub: () => seg || '', reset: () => { lsStop(); ch = null; BK.open = null; }, stopListen: lsStop };
})();
