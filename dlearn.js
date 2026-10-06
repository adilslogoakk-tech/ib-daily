'use strict';
// Режим «Немецкий»: общий словарь, карточки, словарь с онлайн-поиском, «мои слова», перевод слова по нажатию в книге.
// Подключается до app.js; к S, tab, sess, go, render, esc, toast, save, addXp, dkey, LIB, segOf, segBar, T обращается только при вызове.
const DL = (() => {
  const DAY = 864e5, BOX = [0, 1, 2, 4, 8, 16, 32];
  const dl = () => S.dl || (S.dl = { w: {}, my: [], days: {} });
  const all = () => DW.concat(dl().my.map(m => ({ ...m, i: m.id, cat: 'my' })));
  const byId = id => all().find(x => x.i === id);
  // слова SP: выделенное в учебнике (личные данные: файл sp.json или облако), попадают в общий набор DW с темой 'sp'
  const CHAP = [[9, '1 Alltag'], [31, '2 Essen und Essgewohnheiten'], [51, '3 Im Berufsleben'], [73, '4 Lernen und Weiterbildung'], [95, '5 Städte'], [117, '6 Gesundheit und Fitness'], [137, '7 Wie wir leben'], [159, '8 Produkte und Konsum'], [181, '9 Reisen und Verkehr'], [201, '10 Medien und Aktuelles'], [223, '11 Geschichte und Politik'], [243, '12 Innovation und Kreativität']];
  const chapOf = p => { let r = CHAP[0][1]; CHAP.forEach(([s, n]) => { if (p >= s) r = n; }); return r; };
  const chNum = p => CHAP.filter(([s]) => p >= s).length;
  const chWords = n => DW.filter(w => w.cat === 'ch' + n || (w.cat === 'sp' && chNum(w.p) === n));
  let SPN = 0;
  function addSP(d) {
    for (let k = DW.length - 1; k >= 0; k--) if (DW[k].cat === 'sp') DW.splice(k, 1);
    (d.items || []).forEach(x => DW.push({ i: x.id, de: x.de, ru: x.ru, ex: x.ex || '', cat: 'sp', p: x.p }));
    DW_CATS.sp = 'SP (из учебника)'; SPN = (d.items || []).length;
  }
  try { const c = JSON.parse(localStorage.getItem('ibdaily.sp')); if (c) addSP(c); } catch (e) {}
  let spTried = false;
  async function loadSP() { spTried = true; try { const d = await loadDoc('sp', 'sp.json'); if (d && d.items) { localStorage.setItem('ibdaily.sp', JSON.stringify(d)); addSP(d); if (tab === 'words') render(); } } catch (e) {} }
  setTimeout(loadSP, 2500);
  const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const speak = txt => { try { const u = new SpeechSynthesisUtterance(txt); u.lang = 'de-DE'; u.rate = 0.9; const v = speechSynthesis.getVoices().find(x => /^de/i.test(x.lang)); if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) { toast('Озвучка недоступна на этом устройстве'); } };
  const spk = (id, p) => `<button class="spk" data-act="dlsay" data-i="${id}" data-p="${p}" aria-label="Озвучить">🔊</button>`;
  const stats = () => { const now = Date.now(), W = all(), s = dl().w; return { n: W.length, known: W.filter(w => s[w.i] && s[w.i].n >= 3).length, due: W.filter(w => s[w.i] && s[w.i].due <= now && s[w.i].last).length }; };
  const streak = () => { let n = 0; const d = new Date(); if (!dl().days[dkey(d)]) d.setDate(d.getDate() - 1); while (dl().days[dkey(d)]) { n++; d.setDate(d.getDate() - 1); } return n; };
  const back = '<div class="row sp"><button class="pill" data-act="modeset" data-v="bank">⇄ Банкинг</button><span></span></div>';

  // ---------- карточки ----------
  function start(cat) {
    const now = Date.now(), s = dl().w, pool = all().filter(w => cat === 'my' ? w.cat === 'my' : /^ch\d+$/.test(cat || '') ? chWords(+cat.slice(2)).includes(w) : !cat || w.cat === cat);
    const due = pool.filter(w => s[w.i] && s[w.i].due <= now), fresh = sh(pool.filter(w => !s[w.i]));
    const q = sh(due).concat(fresh).slice(0, 10).map(w => w.i);
    if (!q.length) return toast('Всё выучено на сегодня');
    sess = { type: 'dl', q, i: 0, flip: false, ok: 0, dir: Math.random() < 0.5 ? 'de' : 'ru', again: {} }; render();
  }
  function grade(knew) {
    const s = sess, id = s.q[s.i], r = dl().w[id] || (dl().w[id] = { n: 0, due: 0 }), now = Date.now();
    r.last = now;
    if (knew) { r.n = Math.min(6, (r.n || 0) + 1); r.due = now + BOX[r.n] * DAY; s.ok++; addXp(1); }
    else { r.n = Math.max(0, (r.n || 0) - 2); r.due = now; if (!s.again[id]) { s.again[id] = 1; s.q.push(id); } }
    dl().days[dkey()] = (dl().days[dkey()] || 0) + 1; T.track('dl_card', { id, ok: knew }); save();
    s.i++; s.flip = false; s.dir = Math.random() < 0.5 ? 'de' : 'ru'; render();
  }
  function sessHtml() {
    const s = sess, head = t => `<div class="row sp"><button class="pill" data-act="dlexit">✕</button><span class="small mute">${t}</span></div>`;
    if (s.i >= s.q.length) return head('Карточки') + `<div class="card" style="text-align:center"><h2>Серия окончена</h2><p class="sub">Знал(а): ${s.ok} из ${s.q.length}</p></div><button class="btn" data-act="dlexit">Готово</button>`;
    const w = byId(s.q[s.i]), front = s.dir === 'de';
    return head(`Карточка ${s.i + 1} из ${s.q.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.q.length * 100}%"></i></div>
    <div class="card flash"><div class="in ${s.flip ? 'flip' : ''}" data-act="dlflip"><div style="text-align:center">
      ${!s.flip ? (front ? `<div style="font-size:26px;font-weight:700;line-height:1.3" translate="no">${esc(w.de)}</div>` : `<div style="font-size:22px;font-weight:600;line-height:1.3">${esc(w.ru)}</div>`) + '<div class="small mute" style="margin-top:14px">нажми, чтобы увидеть ответ</div>'
        : `<div style="font-size:24px;font-weight:700;line-height:1.3" translate="no">${esc(w.de)} ${spk(w.i, 'de')}</div><div style="margin-top:8px">${esc(w.ru)}</div>${w.ex ? `<div class="small" style="margin-top:12px;line-height:1.5" translate="no">${esc(w.ex)} ${spk(w.i, 'ex')}</div>` : ''}`}
    </div></div></div>
    ${s.flip ? '<div class="grid2"><button class="btn ghost" data-act="dlno">Повторить</button><button class="btn" data-act="dlyes">Знал(а)</button></div>' : ''}`;
  }

  // ---------- онлайн-перевод (MyMemory, бесплатно, без ключа) ----------
  const cache = {};
  async function lookup(word) {
    const k = word.toLowerCase(), loc = all().find(w => w.de.toLowerCase().replace(/^(der|die|das)\s/, '') === k || w.de.toLowerCase() === k);
    if (loc) return { ru: loc.ru, local: true };
    if (cache[k]) return cache[k];
    try {   // основной переводчик: Google (без ключа), для слов даёт значения по частям речи
      const r = await (await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=ru&dt=t&dt=bd&q=' + encodeURIComponent(word))).json();
      const ru = (r[0] || []).map(x => x[0]).join(''), alts = (r[1] || []).map(x => ({ pos: x[0], w: x[1].slice(0, 5) }));
      if (ru) return (cache[k] = { ru: ru.toLowerCase() === k ? '' : ru, alts });
    } catch (e) {}
    try {   // запасной: MyMemory
      const r = await (await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(word) + '&langpair=de|ru')).json();
      const ru = r && r.responseData && r.responseData.translatedText;
      if (!ru || /MYMEMORY|QUERY LENGTH/i.test(ru)) return { err: 1 };
      return (cache[k] = { ru: ru.toLowerCase() === k ? '' : ru });
    } catch (e) { return { err: 1 }; }
  }
  const POS = { noun: 'сущ.', verb: 'глагол', adjective: 'прил.', adverb: 'нареч.', preposition: 'предлог', conjunction: 'союз', pronoun: 'мест.', article: 'артикль', interjection: 'межд.' };
  // перевод для показа (основной вариант и значения по частям речи) и короткий вид для сохранения
  const showTr = r => r.err ? 'Нет связи, перевод не получен' : !r.ru ? 'Перевод не найден' : `<b>${esc(r.ru)}</b>` + (r.alts || []).map(a => `<div class="small" style="margin-top:4px">${esc(POS[a.pos] || a.pos)}: ${esc(a.w.join(', '))}</div>`).join('');
  const shortTr = r => { const u = []; [String(r.ru || '').toLowerCase(), ...(r.alts || []).flatMap(a => a.w.map(x => x.toLowerCase()))].forEach(x => { if (x && !u.includes(x)) u.push(x); }); return u.slice(0, 4).join(', '); };
  function saveWord(de, ru, ex) {
    const l = dl().my; if (l.some(x => x.de.toLowerCase() === de.toLowerCase())) return toast('Слово уже в «Моих словах»');
    l.unshift({ id: 'm' + Date.now().toString(36), de, ru, ex: ex || '' }); save(); T.track('dl_save', {}); toast('Слово сохранено');
  }
  // нажатие на слово в немецкой книге: перевод и сохранение
  const L = /[A-Za-zÄÖÜäöüß]/;
  function wordAt(x, y) {
    const r = document.caretRangeFromPoint && document.caretRangeFromPoint(x, y); if (!r || r.startContainer.nodeType !== 3) return null;
    const t = r.startContainer.textContent; let a = r.startOffset, b = a;
    while (a > 0 && L.test(t[a - 1])) a--; while (b < t.length && L.test(t[b])) b++;
    const w = t.slice(a, b); if (w.length < 2) return null;
    const s = t.lastIndexOf('.', a - 1), e = t.indexOf('.', b);
    return { w, ctx: t.slice(s + 1, e < 0 ? t.length : e + 1).trim().slice(0, 220) };
  }
  let cur = null;
  async function showWord(h) {
    cur = { de: h.w, ru: '', ex: h.ctx }; LIB.closeSheet();
    const w = document.createElement('div'); w.id = 'sheet';
    w.innerHTML = `<div class="sh-bg" data-act="sheetclose"></div><div class="sh"><div class="grab"></div><div class="row sp"><h3 style="margin:0;font-size:22px" translate="no">${esc(h.w)} ${spk('', 'cur')}</h3><button class="pill" data-act="sheetclose">✕</button></div>
      <p id="dlres" style="margin:12px 0 4px;font-size:18px;min-height:26px">…</p><p class="small mute" style="line-height:1.5" translate="no">${esc(h.ctx)}</p>
      <p id="dlsent" class="small" style="line-height:1.5;margin:8px 0 0"></p><div class="grid2" style="margin-top:12px"><button class="btn" style="margin:0" data-act="dlsaveword">＋ Мои слова</button><button class="btn ghost" style="margin:0" data-act="dlsent">Перевести предложение</button></div></div>`;
    document.body.append(w); requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add('open')));
    const r = await lookup(h.w), el = document.getElementById('dlres'); if (!el || !cur) return;
    cur.ru = shortTr(r); el.innerHTML = showTr(r);
  }
  document.addEventListener('click', e => {
    if (S.mode !== 'de' || tab !== 'book' || !LIB.cur() || e.target.closest('button,a,#sheet,#qbar,#lbar') || !e.target.closest('.book') || String(window.getSelection())) return;
    const h = wordAt(e.clientX, e.clientY); if (!h) return;
    e.stopPropagation(); showWord(h);
  }, true);

  // ---------- экраны ----------
  function todayHtml() {
    const x = stats(), n = dl().days[dkey()] || 0;
    return `${back}<div class="tag" style="margin-top:14px">Немецкий</div><h1>Сегодня</h1><p class="sub">Немного каждый день важнее, чем много раз в неделю</p>
    <div class="row" style="margin-top:14px;gap:8px"><span class="pill"><span class="flame">🔥</span> <span>${streak()}</span> дн.</span><span class="pill">Слов выучено: ${x.known} из ${x.n}</span></div>
    <div class="card"><h2>Карточки</h2><p class="small mute" style="margin:6px 0 0">К повторению: ${x.due}. Сегодня повторено: ${n}.</p><button class="btn" data-act="dlstart">Начать 10 карточек</button></div>
    ${DG.todayCard()}
    <div class="card"><h2>Читать или слушать</h2><p class="small mute" style="margin:6px 0 0;line-height:1.5">Открой немецкую книгу, нажми на незнакомое слово, и оно сохранится в «Мои слова».</p><button class="btn ghost" data-go="book">К книгам</button></div>
    ${dl().my.length ? `<div class="card"><h2>Мои слова</h2><p class="small mute" style="margin:6px 0 0">Сохранено: ${dl().my.length}</p><button class="btn ghost" data-act="dlstart" data-cat="my">Повторить мои слова</button></div>` : ''}`;
  }
  function wordsHtml() {
    const sg = segOf('words'), x = stats(), cat = (S.seg && S.seg.dcat) || 'fam';
    let h = `${back}<div class="tag" style="margin-top:14px">Слова</div><h1>${{ learn: 'Карточки', list: 'Список слов', dict: 'Словарь', mine: 'Мои слова', sp: 'SP: из учебника' }[sg]}</h1>${segBar('words')}`;
    if (sg === 'learn') {
      h += `<p class="sub" style="margin-top:12px">Выучено: ${x.known} из ${x.n} · к повторению: ${x.due}</p><button class="btn" data-act="dlstart">Начать 10 карточек</button><div class="sts" style="margin-top:12px">${Object.entries(DW_CATS).map(([k, n]) => `<button class="st" data-act="dlstart" data-cat="${k}">${n}</button>`).join('')}</div>`;
    } else if (sg === 'list') {
      h += `<div class="sts" style="margin:12px 0 6px">${Object.entries(DW_CATS).map(([k, n]) => `<button class="st ${cat === k ? 'on' : ''}" data-act="dlcat" data-v="${k}">${n}</button>`).join('')}</div><div class="card" style="padding:4px 14px">${DW.filter(w => w.cat === cat).map(w => `<div class="goal" style="display:block;padding:10px 0"><div style="font-weight:600;font-size:16px" translate="no">${esc(w.de)} ${spk(w.i, 'de')}</div><div class="small">${esc(w.ru)}</div><div class="small mute" style="line-height:1.45;margin-top:2px" translate="no">${esc(w.ex)}</div></div>`).join('')}</div>`;
    } else if (sg === 'sp') {
      if (!spTried) loadSP();
      const sp = DW.filter(w => w.cat === 'sp'), by = {}; sp.forEach(w => (by[chapOf(w.p)] = by[chapOf(w.p)] || []).push(w));
      h += sp.length ? `<p class="sub" style="margin-top:12px">Слова, выделенные тобой в Spektrum Deutsch B1+: ${sp.length}</p><button class="btn" data-act="dlstart" data-cat="sp">Карточки: 10 слов</button>` + Object.entries(by).map(([c, l]) => `<div class="small mute" style="margin:14px 0 4px" translate="no">${c}</div><div class="card" style="padding:4px 14px">${l.map(w => `<div class="goal" style="display:block;padding:10px 0"><div class="row sp"><b translate="no">${esc(w.de)} ${spk(w.i, 'de')}</b><span class="small mute">S. ${w.p}</span></div><div class="small">${esc(w.ru)}</div>${w.ex ? `<div class="small mute" style="line-height:1.45;margin-top:2px" translate="no">${esc(w.ex)}</div>` : ''}</div>`).join('')}</div>`).join('')
        : '<div class="card" style="margin-top:12px"><p class="small mute" style="margin:0;line-height:1.55">Здесь будут слова, которые ты выделил в учебнике. Если список пуст, проверь подключение: слова приходят из твоего облака.</p></div>';
    } else if (sg === 'dict') {
      h += `<input type="text" id="dq" placeholder="Слово по-немецки или по-русски" style="margin-top:12px" autocapitalize="off" autocorrect="off"><div id="dres">${dictRes('')}</div>`;
    } else {
      const m = dl().my;
      h += m.length ? `<button class="btn" data-act="dlstart" data-cat="my" style="margin-top:12px">Повторить мои слова</button><div class="card" style="padding:4px 14px">${m.map((w, k) => `<div class="goal" style="display:block;padding:10px 0"><div class="row sp"><b translate="no">${esc(w.de)} ${spk(w.id, 'de')}</b><button style="background:none;color:var(--mute);font-size:18px" data-act="dldel" data-i="${k}">×</button></div><div class="small">${esc(w.ru)}</div>${w.ex ? `<div class="small mute" style="line-height:1.45;margin-top:2px" translate="no">${esc(w.ex)}</div>` : ''}</div>`).join('')}</div>`
        : '<div class="card" style="margin-top:12px"><p class="small mute" style="margin:0;line-height:1.55">Здесь будут слова, которые ты сохранишь: нажми на незнакомое слово в немецкой книге или найди его в словаре.</p></div>';
    }
    return h;
  }
  // словарь: сначала свои слова и общий набор, потом онлайн
  function dictRes(q) {
    q = q.trim().toLowerCase(); if (q.length < 2) return '';
    const hit = all().filter(w => w.de.toLowerCase().includes(q) || w.ru.toLowerCase().includes(q)).slice(0, 15);
    return (hit.length ? '<div class="card" style="padding:4px 14px">' + hit.map(w => `<div class="goal" style="display:block;padding:10px 0"><b translate="no">${esc(w.de)}</b> ${spk(w.i, 'de')}<div class="small">${esc(w.ru)}</div></div>`).join('') + '</div>' : '')
      + `<button class="btn ghost" data-act="dlonline" data-q="${esc(q)}">Найти «${esc(q)}» онлайн</button>`;
  }
  document.addEventListener('input', e => { if (e.target.id === 'dq') { const r = document.getElementById('dres'); if (r) r.innerHTML = dictRes(e.target.value); } });
  async function online(q) {
    const r = document.getElementById('dres'); if (r) r.insertAdjacentHTML('beforeend', '<p class="small mute" id="dwait">Ищу…</p>');
    const x = await lookup(q), z = document.getElementById('dwait'); if (z) z.remove();
    if (!r) return;
    r.insertAdjacentHTML('beforeend', x.err ? '<p class="small mute">Нет связи, перевод не получен</p>' : `<div class="card"><b translate="no">${esc(q)}</b><div style="margin:4px 0">${showTr(x)}</div>${x.ru ? `<button class="btn ghost" style="margin:6px 0 0" data-act="dlsavedict" data-de="${esc(q)}" data-ru="${esc(shortTr(x))}">＋ Мои слова</button>` : ''}</div>`);
  }
  const gramHtml = () => `${back}<div class="tag" style="margin-top:14px">Грамматика</div><h1>Скоро</h1>
    <div class="card"><p style="margin:0;line-height:1.55">Здесь будут темы по уровням (артикли и падежи, порядок слов, придаточные, прошедшее время, Passiv, Konjunktiv II) с коротким объяснением по-русски и упражнениями.</p></div>`;
  const progHtml = () => { const x = stats(), days = Object.keys(dl().days).length; return `${back}<div class="tag" style="margin-top:14px">Программа</div><h1>Мой немецкий</h1>
    <div class="grid2" style="margin-top:14px"><div class="stat"><span class="small mute">Серия</span><b>${streak()}</b></div><div class="stat"><span class="small mute">Дней занятий</span><b>${days}</b></div><div class="stat"><span class="small mute">Слов выучено</span><b>${x.known}</b></div><div class="stat"><span class="small mute">Мои слова</span><b>${dl().my.length}</b></div><div class="stat"><span class="small mute">Грамматика, верно</span><b>${(g => g.n ? Math.round(g.ok / g.n * 100) + '%' : '–')(DG.stat())}</b></div></div>
    <div class="card"><h2>Программа из учебника</h2><p class="small mute" style="margin:6px 0 0;line-height:1.55">Пришли учебник в PDF, и я составлю недельный план: слова и грамматика по урокам, упражнения и чтение.</p></div>`; };
  const html = t => t === 'words' ? wordsHtml() : t === 'gram' ? gramHtml() : progHtml();

  function act(a, D) {
    switch (a) {
      case 'dlstart': start(D.cat); return true;
      case 'dlflip': sess.flip = true; render(); return true;
      case 'dlyes': grade(true); return true;
      case 'dlno': grade(false); return true;
      case 'dlexit': go('today'); return true;
      case 'dlcat': S.seg = { ...(S.seg || {}), dcat: D.v }; save(); render(); return true;
      case 'dlsay': { const w = D.p === 'cur' ? cur && { de: cur.de } : byId(D.i); if (w) speak(D.p === 'ex' ? w.ex : w.de); return true; }
      case 'dldel': dl().my.splice(+D.i, 1); save(); render(); return true;
      case 'dlonline': online(D.q); return true;
      case 'dlsavedict': saveWord(D.de, D.ru, ''); return true;
      case 'dlsent': { const el = document.getElementById('dlsent'); if (!el || !cur) return true; el.textContent = '…'; lookup(cur.ex).then(r => { el.innerHTML = r.err ? 'Нет связи, перевод не получен' : r.ru ? esc(r.ru) : 'Перевод не найден'; }); return true; }
      case 'dlsaveword': if (cur) { saveWord(cur.de, cur.ru, cur.ex); LIB.closeSheet(); } return true;
    }
    return false;
  }
  return { act, html, todayHtml, sessHtml, chWords, stats: () => ({ ...stats(), streak: streak(), days: Object.keys(dl().days).length, my: dl().my.length }) };
})();
