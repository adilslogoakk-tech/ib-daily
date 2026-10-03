'use strict';
// Дополнения: поиск по всему контенту, режим «5 минут», ментальная математика, мини-кейсы,
// аналитика откликов, сопроводительные письма, нетворкинг-трекер.
// Подключается до app.js; к его глобальным S, JOBS, sess, tab, render, go, toast, addXp, complete, jstat и др. обращается только при вызове.
const XT = (() => {
  const DAY = 864e5, MM_N = 20, MM_TOTAL = 240000;
  const dn = d => Math.floor(Date.parse(d + 'T00:00:00Z') / DAY), tn = () => dn(dkey());
  const fmt = n => (+(+n).toFixed(2)).toLocaleString(I18N.loc);
  const lg = o => o[I18N.lang] || o.en || o.ru;
  const mmss = ms => { const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const num = s => { const v = parseFloat(String(s).replace(/\s/g, '').replace(',', '.').replace(/[%x×]/gi, '')); return isNaN(v) ? null : v; };
  // допуск: tol = 0 → точное совпадение (до 0,005), иначе доля от правильного ответа
  const close = (v, a, tol) => v != null && Math.abs(v - a) <= (tol ? Math.abs(a) * tol + 1e-9 : 0.0051);
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1)), P = a => a[R(0, a.length - 1)];
  const flat = b => b.slice(1).flat(3).filter(x => typeof x === 'string').join(' ');
  const copyText = txt => (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('Скопировано')).catch(() => toast('Выдели текст и скопируй вручную'));

  // ===================== поиск =====================
  const sr = { q: '', open: null };
  const KINDS = { term: ['📖', 'Термин'], lesson: ['📘', 'Урок'], chapter: ['📚', 'Глава'], part: ['📗', 'Моя книга'], drill: ['🧮', 'Задача'], card: ['🃏', 'Карточка'], job: ['💼', 'Вакансия'] };
  const KORDER = ['term', 'lesson', 'chapter', 'part', 'drill', 'card', 'job'], KW = { term: 6, lesson: 4, chapter: 3, part: 2, job: 3 };
  let idx = null, idxKey = '';
  function buildIndex() {
    const bk = LIB.bookData(), key = I18N.lang + ':' + Object.keys(bk.docs).join() + ':' + JOBS.jobs.length;
    if (idx && key === idxKey) return idx; idxKey = key;
    const out = [], add = (kind, title, text, ref, sub) => out.push({ kind, title, text, ref, sub, low: (title + ' ' + text).toLowerCase(), tl: title.toLowerCase() });
    GLOSS.forEach(g => { const x = LIB.byKey(g.k); add('term', x.t, [x.d, x.f || '', ...g.m].join(' '), g.k); });
    LESSONS.forEach(l => add('lesson', l.title, l.cards.join(' ') + ' ' + l.quiz.map(q => q.q).join(' '), l.id));
    BOOK.forEach(c => add('chapter', c.title, [c.tag, c.intro || '', ...c.blocks.map(flat)].join(' '), c.id));
    DRILLS.forEach((d, i) => add('drill', d.q, (d.e || '') + ' ' + d.o.join(' '), i));
    CARDS.forEach((c, i) => add('card', c.q, c.a, i));
    JOBS.jobs.forEach(j => add('job', j.title, [j.company, j.location, j.category].join(' '), j.id, j.company));
    Object.values(bk.docs).forEach(d => d.parts.forEach((p, i) => add('part', p.t, p.blocks.map(b => b[1]).join(' '), d.id + '|' + i, d.title)));
    return (idx = out);
  }
  const rx = s => s.replace(/[.*+?^${}()|[\]\\]/g, c => '\\' + c);
  function mark(text, terms) { const t = esc(text); return terms.length ? t.replace(new RegExp('(' + terms.map(x => rx(esc(x))).join('|') + ')', 'gi'), '<mark>$1</mark>') : t; }
  function snippet(it, terms) {
    const low = it.text.toLowerCase(), p = low.indexOf(terms[0]);
    if (p < 0) return mark(it.text.slice(0, 110), terms) + (it.text.length > 110 ? '…' : '');
    const a = Math.max(0, p - 45);
    return (a ? '…' : '') + mark(it.text.slice(a, a + 130), terms) + (a + 130 < it.text.length ? '…' : '');
  }
  function results() {
    const terms = sr.q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return '<p class="small mute" style="text-align:center;padding:30px 0">Ищи термины, уроки, главы, задачи, вакансии и свои книги</p>';
    const hits = buildIndex().filter(it => terms.every(t => it.low.includes(t))).map(it => ({ it, s: (terms.every(t => it.tl.includes(t)) ? 10 : 0) + (it.tl.startsWith(terms[0]) ? 5 : 0) + (KW[it.kind] || 0) })).sort((a, b) => b.s - a.s);
    if (!hits.length) return '<p class="small mute" style="text-align:center;padding:30px 0">Ничего не найдено</p>';
    return KORDER.map(k => {
      const g = hits.filter(h => h.it.kind === k).slice(0, 6); if (!g.length) return '';
      return `<div class="tag" style="margin:16px 0 6px">${KINDS[k][0]} ${KINDS[k][1]} <span class="mute">${hits.filter(h => h.it.kind === k).length}</span></div>` + g.map(({ it }) => {
        const key = it.kind + ':' + it.ref, open = sr.open === key;
        let more = '';
        if (open && it.kind === 'drill') { const d = DRILLS[it.ref]; more = `<div class="srmore">${d.o.map((o, i) => `<div class="${i === d.a ? 'okk' : ''}">${i === d.a ? '✓ ' : ''}${esc(o)}</div>`).join('')}${d.e ? `<p class="small" style="margin:8px 0 0">${esc(d.e)}</p>` : ''}</div>`; }
        if (open && it.kind === 'card') more = `<div class="srmore"><p style="margin:0;line-height:1.5">${esc(CARDS[it.ref].a)}</p></div>`;
        return `<div class="card sres" data-act="srgo" data-k="${it.kind}" data-r="${esc(it.ref)}"><div class="srt" ${it.kind === 'part' || it.kind === 'job' ? 'translate="no"' : ''}>${mark(it.title, terms)}</div>${it.sub ? `<div class="small mute" translate="no">${esc(it.sub)}</div>` : ''}${open ? '' : `<div class="small mute" style="line-height:1.45;margin-top:3px" translate="no">${snippet(it, terms)}</div>`}${more}</div>`;
      }).join('');
    }).join('');
  }
  function srOpen() {
    if (document.getElementById('srch')) return;
    const w = document.createElement('div'); w.id = 'srch';
    w.innerHTML = `<div class="srh"><input type="text" id="srq" placeholder="Поиск по всему приложению" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(sr.q)}"><button class="pill" data-act="srclose">Закрыть</button></div><div id="srr">${results()}</div>`;
    document.body.append(w); document.body.style.overflow = 'hidden';
    setTimeout(() => { const i = document.getElementById('srq'); if (i) i.focus(); }, 30);
    LIB.preloadBooks().then(() => { idx = null; srRefresh(); }).catch(() => {});
  }
  const srRefresh = () => { const r = document.getElementById('srr'); if (r) r.innerHTML = results(); };
  function srClose() { const w = document.getElementById('srch'); if (w) w.remove(); document.body.style.overflow = ''; }
  function srGo(kind, ref) {
    if (kind === 'drill' || kind === 'card') { const k = kind + ':' + ref; sr.open = sr.open === k ? null : k; return srRefresh(); }
    srClose();
    if (kind === 'term') LIB.openTerm(ref);
    else if (kind === 'lesson') startLesson(ref);
    else if (kind === 'chapter') { go('book'); LIB.act('readch', { id: ref }); }
    else if (kind === 'part') { const [b, i] = String(ref).split('|'); LIB.openPart(b, +i); }
    else if (kind === 'job') { const j = JOBS.jobs.find(x => x.id === ref); if (j) { jobFilter = jstat(j); jobOpen = j.id; go('jobs'); } }
  }

  // ===================== режим «5 минут» =====================
  function quickCard() {
    if (allDone()) return '';
    return `<div class="card"><div class="row sp"><div style="flex:1;min-width:0"><div style="font-weight:600">⚡ Режим «5 минут»</div><div class="small mute" style="line-height:1.45;margin-top:2px">Нет времени на весь план? Ответь на 5 вопросов, и день засчитается (половина XP), серия не прервётся.</div></div></div><button class="btn ghost" data-act="quick">Начать</button></div>`;
  }
  function quickStart() {
    const p = T.pick('drill', 5, null, null, 'Быстрый режим');
    sess = { type: 'drill', qs: p.map(e => e.x), why: p.map(e => e.why), qi: 0, ok: 0, picked: null, opts: null, daily: false, quick: true }; render();
  }
  function quickFinish(s) {
    T.track('quick_done', { ok: s.ok, n: s.qs.length });
    STEPS.filter(x => !done(x.id)).forEach(x => complete(x.id, Math.round(x.xp / 2)));
    addXp(s.ok * 2); go('today');
  }

  // ===================== ментальная математика =====================
  const GEN = [
    () => { const p = P([5, 10, 12, 15, 20, 25, 30, 40, 45, 60, 75]), n = P([80, 120, 160, 200, 240, 320, 400, 450, 600, 800]); return ['Сколько будет {0}% от {1}?', [p, n], p * n / 100]; },
    () => { const e = P([60, 80, 90, 120, 150, 200]), m = P([6, 7, 7.5, 8, 8.5, 9, 10, 12]); return ['EBITDA {0}, множитель {1}x. Чему равен EV?', [e, m], e * m]; },
    () => { const b = P([40, 50, 80, 100, 120, 200, 250, 400]), g = P([5, 10, 15, 20, 25, 30, 40, 50]); return ['Выручка выросла со {0} до {1}. Рост в процентах?', [b, b * (1 + g / 100)], g]; },
    () => { for (;;) { const r = P([200, 400, 500, 800, 1000]), m = P([10, 15, 20, 25, 30, 40]); if (r * m % 100 === 0) return ['Выручка {0}, EBITDA {1}. Маржа EBITDA в процентах?', [r, r * m / 100], m]; } },
    () => { const e = P([1.5, 2, 2.5, 3, 4, 5]), p = P([8, 10, 12, 15, 18, 20]); return ['EPS {0}, P/E {1}x. Чему равна цена акции?', [e, p], e * p]; },
    () => { const e = P([600, 800, 900, 1200, 1500]), d = P([100, 200, 300, 400]), c = P([50, 100, 150, 200]); return ['Equity Value {0}, Debt {1}, Cash {2}. Чему равен EV?', [e, d, c], e + d - c]; },
    () => { const b = P([100, 150, 200, 250, 400, 500]), r = P([10, 20, 25, 50]); return ['Через год получишь {0}, ставка {1}%. Чему равна приведённая стоимость?', [b * (1 + r / 100), r], b]; },
    () => { const y = P([4, 6, 8, 9, 12, 18]); return ['Деньги удваиваются за {0} лет. Какая примерно ставка в % (правило 72)?', [y], 72 / y]; },
    () => { const b = P([4, 8, 12, 15, 16, 25]), c = R(5, 40); return ['Сколько будет {0} ÷ {1}?', [b * c, b], c]; },
    () => ['Сколько будет {0} × {1}?', [P([12, 15, 16, 18, 25, 35, 45]), P([11, 12, 14, 15, 16, 20, 25])], 0],
    () => { const m = P([2, 2.5, 3]); return ['MOIC {0}x за 5 лет. Какой примерно IRR в процентах?', [m], { 2: 15, 2.5: 20, 3: 25 }[m], 0.08]; },
    () => { for (;;) { const r = P([200, 400, 500, 800]), m = P([10, 12.5, 15, 20, 25, 30]); if (r * m % 100 === 0) return ['Выручка {0}, маржа {1}%. Чему равна прибыль?', [r, m], r * m / 100]; } },
  ];
  function genQs() {
    const qs = [], used = {};
    while (qs.length < MM_N) {
      const gi = R(0, GEN.length - 1); if ((used[gi] || 0) >= 3) continue; used[gi] = (used[gi] || 0) + 1;
      const [tpl, args, ans, tol] = GEN[gi](), a = ans === 0 ? args[0] * args[1] : ans;
      qs.push({ text: tpl.replace(/\{(\d)\}/g, (_, i) => fmt(args[i])), a, tol: tol || (Number.isInteger(a) ? 0 : 0.011) });
    }
    return qs;
  }
  let mmT = null;
  const stop = () => { clearInterval(mmT); mmT = null; };
  function mmStart() {
    stop(); const now = performance.now();
    sess = { type: 'mm', phase: 'play', qs: genQs(), i: 0, ok: 0, log: [], t0: now, tq: now, total: MM_TOTAL, fb: null };
    render(); mmT = setInterval(mmTick, 250);
  }
  function mmTick() {
    const s = sess; if (!s || s.type !== 'mm' || s.phase !== 'play') return stop();
    const left = Math.max(0, s.total - (performance.now() - s.t0)), t = document.getElementById('mmt'), b = document.getElementById('mmb');
    if (t) t.textContent = mmss(left); if (b) b.style.width = (left / s.total * 100) + '%';
    if (left <= 0) mmEnd();
  }
  function mmSubmit() {
    const s = sess, inp = document.getElementById('mmin'); if (!s || s.type !== 'mm' || s.fb || !inp) return;
    const q = s.qs[s.i], v = num(inp.value); if (v == null) return;
    const ok = close(v, q.a, q.tol), ms = Math.round(performance.now() - s.tq);
    s.log.push({ q: q.text, my: inp.value.trim(), a: q.a, ok, ms }); if (ok) s.ok++;
    s.fb = { ok, a: q.a }; render();
    setTimeout(() => { if (sess !== s || s.phase !== 'play') return; s.fb = null; s.i++; s.tq = performance.now(); if (s.i >= s.qs.length) mmEnd(); else render(); }, ok ? 450 : 1300);
  }
  function mmEnd() {
    const s = sess; if (!s || s.type !== 'mm' || s.phase === 'end') return; stop();
    s.phase = 'end'; s.fb = null;
    const n = s.log.length, avg = n ? Math.round(s.log.reduce((a, x) => a + x.ms, 0) / n / 1000) : 0;
    const m = S.mm || (S.mm = {}); m.runs = (m.runs || []).concat([{ ts: Date.now(), ok: s.ok, n, avg }]).slice(-30);
    s.newBest = !m.best || s.ok > m.best.ok || (s.ok === m.best.ok && avg < m.best.avg); if (s.newBest) m.best = { ok: s.ok, n, avg, ts: Date.now() };
    addXp(s.ok * 2 + (n >= MM_N ? 5 : 0)); T.track('mm', { ok: s.ok, n, avg }); render();
  }
  function mmHtml() {
    const s = sess;
    if (s.phase === 'end') {
      const n = s.log.length, avg = n ? Math.round(s.log.reduce((a, x) => a + x.ms, 0) / n / 1000) : 0, bad = s.log.filter(x => !x.ok);
      return `<div class="row sp"><button class="pill" data-act="mmexit">✕</button><span class="small mute">Ментальная математика</span></div>
      <div class="card" style="text-align:center;margin-top:14px"><h2>${s.ok} из ${n}</h2><p class="sub">Среднее время на ответ: ${avg} с</p>${s.newBest ? '<p class="small" style="color:var(--green);margin:6px 0 0">Новый рекорд</p>' : ''}</div>
      ${bad.length ? `<div class="card"><div class="tag">Ошибки</div>${bad.map(x => `<div style="margin:10px 0 0"><div class="small">${x.q}</div><div class="small mute">Твой ответ: ${esc(x.my)} · Верно: <b>${fmt(x.a)}</b></div></div>`).join('')}</div>` : ''}
      <div class="grid2"><button class="btn ghost" data-act="mmagain" style="margin:0">Ещё раз</button><button class="btn" data-act="mmexit" style="margin:0">Готово</button></div>`;
    }
    const q = s.qs[s.i], left = Math.max(0, s.total - (performance.now() - s.t0));
    return `<div class="row sp"><button class="pill" data-act="mmexit">✕</button><span class="small mute">Вопрос ${s.i + 1} из ${s.qs.length}</span><b class="pill" id="mmt">${mmss(left)}</b></div><div class="bar" style="margin-top:14px"><i id="mmb" style="width:${left / s.total * 100}%;animation:none"></i></div>
    <div class="card" style="text-align:center;padding:26px 16px"><div class="mmq">${q.text}</div>
    <input type="text" id="mmin" inputmode="decimal" autocomplete="off" placeholder="Ответ" ${s.fb ? 'disabled' : ''} class="mmin ${s.fb ? (s.fb.ok ? 'ok' : 'bad') : ''}">
    ${s.fb ? (s.fb.ok ? '<p style="color:var(--green);margin:12px 0 0;font-weight:600">✓</p>' : `<p style="color:var(--red);margin:12px 0 0;font-weight:600">Верно: ${fmt(s.fb.a)}</p>`) : ''}</div>
    <button class="btn" data-act="mmok" ${s.fb ? 'disabled' : ''}>Ответить</button>`;
  }
  function mmStats() {
    const m = S.mm || {}, b = m.best;
    return b ? `Рекорд: ${b.ok} из ${b.n}, ${b.avg} с на ответ · забегов: ${(m.runs || []).length}` : '20 расчётов за 4 минуты, как на онлайн-тестах банков';
  }

  // ===================== мини-кейсы =====================
  function caseStart(id) { const c = CASES.find(x => x.id === id); sess = { type: 'case', c, i: -1, ok: 0, fb: null }; render(); }
  function caseHtml() {
    const s = sess, c = s.c, N = c.steps.length;
    const head = `<div class="row sp"><button class="pill" data-act="caexit">✕</button><span class="small mute" translate="no">${esc(lg(c.t))}</span></div>`;
    const data = `<div class="tw"><table>${c.data.map(([l, v]) => `<tr><td>${esc(lg(l))}</td><td style="text-align:right;font-weight:600">${esc(v)}</td></tr>`).join('')}</table></div>`;
    if (s.i < 0) return head + `<div class="card"><div class="tag">Мини-кейс</div><h2 style="margin-top:6px" translate="no">${esc(lg(c.t))}</h2><p style="line-height:1.55" translate="no">${esc(lg(c.intro))}</p>${data}</div><button class="btn" data-act="canext">Начать</button>`;
    if (s.i >= N) {
      const first = !(S.cases[c.id] && S.cases[c.id].done);
      return head + `<div class="card" style="text-align:center"><h2>Кейс пройден</h2><p class="sub">Верно: ${s.ok} из ${N}</p>${first ? '<p class="small mute" style="margin:6px 0 0">+XP за первое прохождение</p>' : ''}</div><button class="btn" data-act="cafin">Завершить</button>`;
    }
    const st = c.steps[s.i];
    return head + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / N * 100}%"></i></div><div class="card"><div class="small mute" style="margin-bottom:6px">Шаг ${s.i + 1} из ${N}</div>${data}<h2 style="margin-top:14px;line-height:1.35" translate="no">${esc(lg(st.q))}</h2>
    <input type="text" id="cain" inputmode="decimal" autocomplete="off" placeholder="Ответ" ${s.fb ? 'disabled' : ''} value="${s.fb ? esc(s.fb.my) : ''}">
    ${s.fb ? `<div class="explain" translate="no"><b style="color:var(--${s.fb.ok ? 'green' : 'red'})">${s.fb.ok ? '✓ ' : ''}${esc(lg(st.e))}</b></div>` : ''}</div>
    ${s.fb ? '<button class="btn" data-act="canext">Дальше</button>' : '<button class="btn" data-act="cachk">Проверить</button>'}`;
  }
  function caseCheck() {
    const s = sess, inp = document.getElementById('cain'); if (!s || s.type !== 'case' || s.fb || !inp) return;
    const v = num(inp.value); if (v == null) return;
    const st = s.c.steps[s.i], ok = close(v, st.a, st.tol); if (ok) s.ok++;
    s.fb = { ok, my: inp.value }; T.track('case_step', { id: s.c.id, i: s.i, ok }); render();
  }
  function caseNext() { const s = sess; s.fb = null; s.i++; render(); }
  function caseFinish() {
    const s = sess, c = s.c, prev = S.cases[c.id], first = !(prev && prev.done);
    S.cases[c.id] = { done: true, ok: Math.max(s.ok, prev ? prev.ok : 0), n: c.steps.length, ts: Date.now() };
    addXp(first ? 10 + s.ok * 5 : s.ok * 2); T.track('case_done', { id: c.id, ok: s.ok }); go('learn');
  }

  // ===================== аналитика откликов =====================
  const city = j => String(j.location || '').split(/[,(\/]/)[0].trim() || '—';
  function analyticsHtml() {
    const rows = JOBS.jobs.map(j => ({ j, o: S.apps[j.id], st: jstat(j) })).filter(x => x.o && ['applied', 'exam', 'rejected'].includes(x.st));
    if (!rows.length) return '';
    const n = rows.length, exam = rows.filter(x => x.st === 'exam').length, rej = rows.filter(x => x.st === 'rejected').length;
    const grp = fn => { const m = {}; rows.forEach(x => { const k = fn(x); if (!k) return; const g = m[k] || (m[k] = { k, n: 0, r: 0, e: 0 }); g.n++; if (x.st === 'exam') { g.e++; g.r++; } if (x.st === 'rejected') g.r++; }); return Object.values(m).sort((a, b) => b.n - a.n || b.e - a.e); };
    const wd = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const by = [['Категории', grp(x => x.j.category)], ['Города', grp(x => city(x.j))], ['Источники', grp(x => x.j.source)], ['День подачи', grp(x => x.o.ap ? wd[new Date(x.o.ap + 'T00:00:00').getDay()] : '').sort((a, b) => wd.indexOf(a.k) - wd.indexOf(b.k))]];
    const gaps = rows.filter(x => x.st !== 'applied' && x.o.ap && x.o.ts).map(x => Math.max(0, dn(dkey(new Date(x.o.ts))) - dn(x.o.ap))).sort((a, b) => a - b);
    const best = by.slice(0, 3).map(([, g]) => g.filter(x => x.n >= 3 && x.e > 0).sort((a, b) => b.e / b.n - a.e / a.n)[0]).filter(Boolean)[0];
    const pc = (a, b) => b ? Math.round(a / b * 100) + '%' : '–';
    return `<div class="card"><h2>Аналитика откликов</h2>
    <div class="grid2" style="margin-top:8px"><div class="stat"><span class="small mute">Подано всего</span><b style="font-size:20px">${n}</b></div><div class="stat"><span class="small mute">Ответов</span><b style="font-size:20px">${pc(exam + rej, n)}</b></div><div class="stat"><span class="small mute">Приглашений</span><b style="font-size:20px">${pc(exam, n)}</b></div><div class="stat"><span class="small mute">Ответ приходит через</span><b style="font-size:20px">${gaps.length ? gaps[gaps.length >> 1] + ' дн.' : '–'}</b></div></div>
    ${n < 5 ? `<p class="small mute" style="margin:12px 0 0">Мало данных. Подай ещё ${5 - n} заявок, и появятся выводы.</p>` : best ? `<p class="small" style="margin:12px 0 0">Лучше всего работает: <b translate="no">${esc(best.k)}</b> (приглашений ${best.e} из ${best.n}).</p>` : '<p class="small mute" style="margin:12px 0 0">Пока нет приглашений для выводов. Продолжай подавать.</p>'}
    ${by.map(([t, g]) => g.length ? `<div class="tag" style="margin:14px 0 4px">${t}</div>${g.slice(0, 4).map(x => `<div class="row sp" style="margin:4px 0"><span class="small" translate="no">${esc(x.k)}</span><span class="small mute">${x.n} подано · ${x.e} приглаш. · ${pc(x.r, x.n)} ответов</span></div>`).join('')}` : '').join('')}</div>`;
  }

  // ===================== сопроводительные письма =====================
  const cl = { open: null, lang: 'en' };
  const prof = () => S.cl || (S.cl = {});
  function letterText(j) {
    const p = prof(), en = cl.lang === 'en', nm = S.name || (en ? '[Your name]' : '[Ihr Name]');
    const mo = p.motive || (en ? '[Why this firm and this role: 1-2 sentences]' : '[Warum dieses Unternehmen und diese Stelle: 1-2 Sätze]');
    const e1 = p.exp1 || (en ? '[Your strongest relevant experience, with a number]' : '[Ihre stärkste relevante Erfahrung, mit Zahl]'), e2 = p.exp2 || (en ? '[A second skill or result that fits the role]' : '[Eine zweite passende Fähigkeit oder ein Ergebnis]');
    return en
      ? { subject: `Application: ${j.title}`, body: `Dear Hiring Team at ${j.company},\n\nI am writing to apply for the ${j.title} position. ${mo}\n\n${e1}\n\n${e2}\n\nI would welcome the opportunity to discuss how I can contribute to your team. Thank you for your time and consideration.\n\nKind regards,\n${nm}` }
      : { subject: `Bewerbung: ${j.title}`, body: `Sehr geehrtes Team von ${j.company},\n\nhiermit bewerbe ich mich auf die Stelle ${j.title}. ${mo}\n\n${e1}\n\n${e2}\n\nÜber die Möglichkeit eines persönlichen Gesprächs würde ich mich sehr freuen. Vielen Dank für Ihre Zeit.\n\nMit freundlichen Grüßen\n${nm}` };
  }
  function letterBtn(j) { return `<button class="btn ghost" style="margin:0 0 8px" data-act="clopen" data-id="${j.id}">✉️ Сопроводительное письмо</button>`; }
  function letterHtml(j) {
    if (cl.open !== j.id) return '';
    const p = prof(), t = letterText(j), r = S.requests.find(x => x.type === 'letter' && x.jobId === j.id), res = r && resFor(r.id), coach = res && res.letter && (typeof res.letter === 'string' ? res.letter : res.letter[cl.lang] || res.letter.en);
    return `<div class="tpl"><div class="row sp"><b class="small">Письмо для ${esc(j.company)}</b><div class="seg"><button class="${cl.lang === 'en' ? 'on' : ''}" data-act="cllang" data-v="en">EN</button><button class="${cl.lang === 'de' ? 'on' : ''}" data-act="cllang" data-v="de">DE</button></div></div>
    <p class="small mute" style="margin:8px 0 4px">Твои данные для писем (сохраняются и подставляются во все письма)</p>
    <textarea id="cl-motive" rows="2" placeholder="Почему эта фирма и эта роль">${esc(p.motive || '')}</textarea>
    <textarea id="cl-exp1" rows="2" placeholder="Главный релевантный опыт, с цифрой">${esc(p.exp1 || '')}</textarea>
    <textarea id="cl-exp2" rows="2" placeholder="Второй навык или результат под эту роль">${esc(p.exp2 || '')}</textarea>
    <textarea id="clt" readonly rows="14">${esc(t.subject + '\n\n' + t.body)}</textarea>
    <div class="grid2"><button class="btn ghost" data-act="clcopy">Скопировать</button><a class="btn ghost" id="clmail" style="text-align:center;text-decoration:none;display:block" href="mailto:?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}">В почту</a></div>
    ${coach ? `<div class="plan"><div class="tag">Письмо от тренера</div><textarea id="clcoach" readonly rows="12">${esc(coach)}</textarea><button class="btn ghost" data-act="clcopyc">Скопировать письмо тренера</button></div>` : r ? `<div class="small mute" style="margin-top:8px">Персональное письмо: ${REQ_ST[reqStatus(r)].toLowerCase()}</div>` : `<button class="btn ghost" data-act="clreq" data-id="${j.id}">Попросить тренера написать персональное</button>`}
    <button class="btn ghost" data-act="clclose">Закрыть</button><p class="small mute" style="margin:10px 0 0">Проверь текст и адресата перед отправкой.</p></div>`;
  }
  function letterLive() {
    const j = JOBS.jobs.find(x => x.id === cl.open), t = document.getElementById('clt'); if (!j || !t) return;
    const x = letterText(j); t.value = x.subject + '\n\n' + x.body;
    const m = document.getElementById('clmail'); if (m) m.href = 'mailto:?subject=' + encodeURIComponent(x.subject) + '&body=' + encodeURIComponent(x.body);
  }

  // ===================== нетворкинг =====================
  const nd = { name: '', company: '', via: 'LinkedIn', note: '' }, nt = { id: null, lang: 'en', type: 'intro' };
  const VIA = ['LinkedIn', 'Email', 'Событие', 'Знакомый'];
  const TPL = { intro: 'Знакомство', thanks: 'Спасибо за беседу', nudge: 'Напомнить о себе' };
  const contacts = () => S.contacts || (S.contacts = []);
  const since = c => c.last ? tn() - dn(c.last) : null;
  const isDue = c => c.last == null ? true : tn() - dn(c.last) >= (c.every || 14);
  const dueList = () => contacts().filter(isDue);
  function netText(c) {
    const en = nt.lang === 'en', me = S.name || (en ? '[Your name]' : '[Ihr Name]'), f = c.name.split(' ')[0], co = c.company || (en ? 'your firm' : 'Ihrem Unternehmen');
    if (nt.type === 'intro') return en
      ? `Hi ${f}, I'm ${me}, building a career in investment banking. I came across your profile at ${co} and would really value a short call about your path. Thank you for considering it!`
      : `Guten Tag ${f}, ich bin ${me} und baue meine Karriere im Investment Banking auf. Ihr Profil bei ${co} hat mich angesprochen, und ich würde mich über ein kurzes Gespräch zu Ihrem Werdegang sehr freuen. Vielen Dank!`;
    if (nt.type === 'thanks') return en
      ? `Hi ${f}, thank you for taking the time to speak with me. Your advice was very helpful, and I will put it into practice right away. I will keep you posted on how it goes.\n\nKind regards,\n${me}`
      : `Hallo ${f}, vielen Dank, dass Sie sich Zeit für das Gespräch genommen haben. Ihr Rat war sehr hilfreich, und ich werde ihn direkt umsetzen. Ich halte Sie gern auf dem Laufenden.\n\nBeste Grüße\n${me}`;
    return en
      ? `Hi ${f}, I hope you are well. A quick update from my side: I have been working on my applications and preparing for interviews. If you have a few minutes in the coming weeks, I would be glad to hear your view.\n\nBest regards,\n${me}`
      : `Hallo ${f}, ich hoffe, es geht Ihnen gut. Kurzes Update von mir: Ich arbeite an meinen Bewerbungen und bereite mich auf Interviews vor. Falls Sie in den nächsten Wochen ein paar Minuten haben, würde ich gern Ihre Einschätzung hören.\n\nBeste Grüße\n${me}`;
  }
  function netCard() {
    const n = dueList().length; if (!contacts().length || !n) return '';
    return `<div class="card banner" data-act="netopen" style="cursor:pointer"><div class="tag">Нетворкинг</div><div style="font-weight:600;margin-top:4px">Пора написать: ${n}</div><p class="sub" style="color:var(--mute);margin:2px 0 0">${esc(dueList().slice(0, 3).map(c => c.name).join(', '))}</p></div>`;
  }
  function netProgress() {
    const L = contacts(), n = dueList().length;
    return `<div class="card" data-act="netopen" style="cursor:pointer"><div class="row sp"><div><div class="tag">Нетворкинг</div><div style="font-size:17px;font-weight:600;margin-top:2px">Контакты в IB и Big4</div><div class="small mute">${L.length ? `${L.length} контактов · ждут сообщения: ${n}` : 'Добавь первых людей, с кем хочешь поговорить'}</div></div><span style="font-size:22px">›</span></div></div>`;
  }
  function netHtml() {
    const L = contacts().slice().sort((a, b) => (isDue(b) - isDue(a)) || ((b.last ? since(b) : 999) - (a.last ? since(a) : 999)));
    const sel = L.find(c => c.id === nt.id);
    return `<div class="row"><button class="pill" data-go="goals">‹ Назад</button></div><div class="tag" style="margin-top:14px">Нетворкинг</div><h1>Контакты</h1><p class="sub">Напомню написать, если прошло больше 14 дней</p>
    <div class="card"><div class="tag" style="margin-bottom:6px">Добавить контакт</div>
    <input type="text" id="nt-name" placeholder="Имя и фамилия" value="${esc(nd.name)}"><input type="text" id="nt-co" placeholder="Компания и роль" value="${esc(nd.company)}" style="margin-top:8px">
    <div class="sts" style="margin-top:8px">${VIA.map(v => `<button class="st ${nd.via === v ? 'on' : ''}" data-act="netvia" data-v="${v}">${v}</button>`).join('')}</div>
    <input type="text" id="nt-note" placeholder="Заметка (о чём говорили, ссылка)" value="${esc(nd.note)}" style="margin-top:8px"><button class="btn" data-act="netadd">Добавить</button></div>
    ${L.length ? `<div class="card" style="padding:4px 14px">${L.map(c => { const d = since(c), due = isDue(c); return `<div class="goal" style="align-items:center"><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3" translate="no">${esc(c.name)}</div><div class="small mute" translate="no">${esc(c.company || '')}${c.company ? ' · ' : ''}${esc(c.via || '')}</div>${c.note ? `<div class="small mute" style="margin-top:2px" translate="no">${esc(c.note)}</div>` : ''}<div class="small" style="margin-top:2px;color:${due ? 'var(--c-val)' : 'var(--mute)'}">${d == null ? 'Ещё не писал(а)' : d === 0 ? 'Писал(а) сегодня' : 'Писал(а) ' + days(d) + ' назад'}${due && d != null ? ' · пора написать' : ''}</div></div><div style="display:flex;flex-direction:column;gap:6px"><button class="st on" data-act="netmsg" data-id="${c.id}">Написал(а)</button><button class="st" data-act="nettpl" data-id="${c.id}">Шаблон</button></div><button data-act="netdel" data-id="${c.id}" style="background:none;color:var(--mute);font-size:18px;margin-left:6px">×</button></div>`; }).join('')}</div>` : '<div class="card"><p class="small mute" style="margin:0;line-height:1.5">Пока пусто. Добавь людей из IB, Big4 TS и M&A, с кем хочешь поговорить. Я напомню, когда пора написать снова.</p></div>'}
    ${sel ? `<div class="card"><div class="row sp"><b class="small" translate="no">${esc(sel.name)}</b><div class="seg"><button class="${nt.lang === 'en' ? 'on' : ''}" data-act="netlang" data-v="en">EN</button><button class="${nt.lang === 'de' ? 'on' : ''}" data-act="netlang" data-v="de">DE</button></div></div>
    <div class="sts" style="margin-top:8px">${Object.entries(TPL).map(([k, v]) => `<button class="st ${nt.type === k ? 'on' : ''}" data-act="nettype" data-v="${k}">${v}</button>`).join('')}</div>
    <textarea id="ntt" readonly rows="8" style="width:100%;margin-top:10px;background:var(--soft);border:1px solid var(--line);color:var(--text);border-radius:12px;padding:12px;font-size:14px;line-height:1.5;font-family:inherit">${esc(netText(sel))}</textarea>
    <div class="grid2"><button class="btn ghost" data-act="netcopy">Скопировать</button><button class="btn ghost" data-act="netclose">Закрыть</button></div></div>` : ''}`;
  }



  // ===================== сделки недели (новости) =====================
  const dl = { data: null, open: null, loading: false };
  const dealsCache = () => { try { return JSON.parse(localStorage.getItem('ibdaily.deals')); } catch (e) { return null; } };
  function dealsInner() {
    const d = dl.data || dealsCache(); if (!d || !d.items || !d.items.length) return '';
    return `<h2>Сделки недели</h2><p class="sub" style="margin:-6px 0 8px" translate="no">${esc(d.title || '')}</p>` + d.items.map(x => {
      const o = dl.open === x.id;
      return `<div class="goal" style="display:block;border-bottom:1px solid var(--line);padding:12px 0"><div class="small mute" translate="no">${esc(x.sector || '')}${x.date ? ' · ' + esc(x.date) : ''}</div><div style="font-weight:600;line-height:1.35;margin:2px 0" translate="no">${esc(x.title)}</div>
      <div class="small" translate="no"><b>${esc(x.value || '')}</b> · ${esc(x.type || '')}</div><p class="small" style="margin:6px 0;line-height:1.5" translate="no">${esc(x.why || '')}</p>
      ${o ? `<div class="explain" translate="no"><b>${esc(x.q || '')}</b><p style="margin:8px 0 0;line-height:1.5">${esc(x.a || '')}</p>${x.src ? `<p class="small" style="margin:8px 0 0"><a href="${esc(x.src)}" target="_blank" rel="noopener">Источник ↗</a></p>` : ''}</div>` : ''}
      <button class="st ${o ? 'on' : ''}" data-act="dealtgl" data-id="${esc(x.id)}">${o ? 'Скрыть разбор' : 'Как оценить?'}</button></div>`;
    }).join('');
  }
  const dealsCard = () => { const h = dealsInner(); return `<div class="card" id="dealsbox" ${h ? '' : 'hidden'}>${h}</div>`; };
  const dealsPaint = () => { const el = document.getElementById('dealsbox'); if (!el) return; const h = dealsInner(); el.innerHTML = h; el.hidden = !h; };
  async function dealsLoad() {
    if (dl.loading) return; dl.loading = true;
    try {
      const d = await loadDoc('deals', 'deals.json');
      if (d && d.items) { dl.data = d; localStorage.setItem('ibdaily.deals', JSON.stringify(d)); dealsPaint(); }
    } catch (e) {} finally { dl.loading = false; }
  }

  // ===================== уведомления и значок на иконке =====================
  const b64u = b => Uint8Array.from(atob((b + '='.repeat((4 - b.length % 4) % 4)).replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
  const pushOk = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  function pending() {
    let n = 0; try { n = Math.max(0, STEPS.length - today().steps.length) + Math.max(0, DAILY_APPS - appsToday()) + FX.fu.due().length + dueList().length; } catch (e) {}
    return n;
  }
  function badge() { try { if (!pushOk() || Notification.permission !== 'granted' || !navigator.setAppBadge) return; const n = pending(); if (n) navigator.setAppBadge(n); else navigator.clearAppBadge(); } catch (e) {} }
  async function pushOn() {
    if (!pushOk()) return toast('Уведомления доступны, когда приложение открыто с экрана «Домой» (iOS 16.4 и новее)');
    try {
      if (await Notification.requestPermission() !== 'granted') return toast('Разрешение не выдано');
      const reg = await navigator.serviceWorker.ready;
      const sub = (await reg.pushManager.getSubscription()) || await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64u(SB_CONFIG.vapid) });
      S.push = { sub: sub.toJSON(), at: Date.now() }; save(); T.track('push_on', {}); toast('Уведомления включены'); render(); badge();
    } catch (e) { toast('Не удалось включить уведомления'); }
  }
  async function pushOff() {
    try { const reg = await navigator.serviceWorker.ready, sub = await reg.pushManager.getSubscription(); if (sub) await sub.unsubscribe(); } catch (e) {}
    delete S.push; save(); try { navigator.clearAppBadge(); } catch (e) {} toast('Уведомления выключены'); render();
  }
  function pushCard() {
    const on = !!(S.push && S.push.sub), perm = pushOk() ? Notification.permission : 'na';
    return `<div class="card"><h2>Уведомления</h2><p class="sub" style="margin-bottom:10px">Напоминание в ${esc(S.remind)} о плане дня и заявках, а утром о follow-up и контактах. Число дел показывается значком на иконке.</p>
    ${on ? '<p class="small" style="margin:0 0 8px;color:var(--green)">Включены на этом устройстве</p><button class="btn ghost" data-act="pushoff">Выключить</button>' : perm === 'denied' ? '<p class="small mute" style="margin:0">Доступ запрещён в настройках iPhone. Включи его для Mandate в Настройки → Уведомления.</p>' : '<button class="btn" data-act="pushon">Включить уведомления</button>'}
    <p class="small mute" style="margin:10px 0 0;line-height:1.5">Уведомления отправляет твой компьютер по расписанию, поэтому он должен быть включён. Работает только в приложении, добавленном на экран «Домой».</p></div>`;
  }

  // ===================== карточки на экране «Учёба» =====================
  function learnCards() {
    const cs = S.cases || {};
    return `<div class="card"><div class="row sp"><div style="flex:1;min-width:0"><div style="font-weight:600">⚡ Ментальная математика</div><div class="small mute" style="line-height:1.45;margin-top:2px">${mmStats()}</div></div></div><button class="btn" data-act="mmstart">Начать серию</button></div>
    <div class="card"><div class="tag" style="margin-bottom:4px">CFA Level 1</div><p class="small mute" style="margin:0 0 6px;line-height:1.45">Отдельная ветка на английском, как на экзамене: 6 уроков, 36 задач, 10 карточек.</p>${LESSONS.filter(l => l.topic === 'cfa').map(l => `<div class="goal" data-lesson="${l.id}" style="cursor:pointer;align-items:center"><div class="chk" style="${S.lessons.includes(l.id) ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${S.lessons.includes(l.id) ? '✓' : ''}</div><div style="font-weight:600;line-height:1.3" translate="no">${esc(l.title)}</div></div>`).join('')}<div class="grid2" style="margin-top:10px"><button class="btn ghost" style="margin:0" data-start="drill-topic" data-topic="cfa">Задачи CFA</button><button class="btn ghost" style="margin:0" data-focus="cfa">${S.focus.includes('cfa') ? '✓ В ежедневном плане' : 'В ежедневный план'}</button></div></div>
    <div class="card"><div class="tag" style="margin-bottom:4px">Мини-кейсы</div>${CASES.map(c => `<div class="goal" data-act="castart" data-id="${c.id}" style="cursor:pointer;align-items:center"><div class="chk" style="${cs[c.id] && cs[c.id].done ? 'background:var(--green);border-color:var(--green);color:var(--bg)' : ''}">${cs[c.id] && cs[c.id].done ? '✓' : ''}</div><div style="flex:1;min-width:0"><div style="font-weight:600;line-height:1.3" translate="no">${esc(lg(c.t))}</div><div class="small mute">${c.steps.length} шага${cs[c.id] && cs[c.id].done ? ' · лучший результат ' + cs[c.id].ok + ' из ' + cs[c.id].n : ''}</div></div></div>`).join('')}</div>`;
  }

  // ===================== действия =====================
  function act(a, D) {
    switch (a) {
      case 'dealtgl': dl.open = dl.open === D.id ? null : D.id; dealsPaint(); return true;
      case 'pushon': pushOn(); return true;
      case 'pushoff': pushOff(); return true;
      case 'srchopen': srOpen(); return true;
      case 'srclose': srClose(); return true;
      case 'srgo': srGo(D.k, D.r); return true;
      case 'quick': quickStart(); return true;
      case 'mmstart': case 'mmagain': mmStart(); return true;
      case 'mmok': mmSubmit(); return true;
      case 'mmexit': stop(); go('learn'); return true;
      case 'castart': caseStart(D.id); return true;
      case 'cachk': caseCheck(); return true;
      case 'canext': caseNext(); return true;
      case 'cafin': caseFinish(); return true;
      case 'caexit': go('learn'); return true;
      case 'clopen': cl.open = cl.open === D.id ? null : D.id; render(); return true;
      case 'clclose': cl.open = null; render(); return true;
      case 'cllang': cl.lang = D.v; render(); return true;
      case 'clcopy': { const t = document.getElementById('clt'); if (t) copyText(t.value); return true; }
      case 'clcopyc': { const t = document.getElementById('clcoach'); if (t) copyText(t.value); return true; }
      case 'clreq': { const j = JOBS.jobs.find(x => x.id === D.id); addRequest('letter', j); toast('Запрос добавлен. Отправь его тренеру во вкладке «Прогресс»'); render(); return true; }
      case 'netopen': go('net'); return true;
      case 'netvia': nd.via = D.v; render(); return true;
      case 'netadd': {
        if (!nd.name.trim()) { toast('Укажи имя'); return true; }
        contacts().push({ id: 'n' + Date.now().toString(36), name: nd.name.trim(), company: nd.company.trim(), via: nd.via, note: nd.note.trim(), added: dkey(), last: null, msgs: 0, every: 14 });
        Object.assign(nd, { name: '', company: '', note: '' }); save(); T.track('contact_add', {}); render(); return true;
      }
      case 'netmsg': { const c = contacts().find(x => x.id === D.id); if (c) { c.last = dkey(); c.msgs = (c.msgs || 0) + 1; save(); T.track('contact_msg', { n: c.msgs }); addXp(5); toast('Отмечено. Напомню через 14 дней'); render(); } return true; }
      case 'netdel': S.contacts = contacts().filter(x => x.id !== D.id); if (nt.id === D.id) nt.id = null; save(); render(); return true;
      case 'nettpl': nt.id = nt.id === D.id ? null : D.id; render(); return true;
      case 'netlang': nt.lang = D.v; render(); return true;
      case 'nettype': nt.type = D.v; render(); return true;
      case 'netclose': nt.id = null; render(); return true;
      case 'netcopy': { const t = document.getElementById('ntt'); if (t) copyText(t.value); return true; }
    }
    return false;
  }
  document.addEventListener('input', e => {
    const id = e.target.id;
    if (id === 'srq') { sr.q = e.target.value; sr.open = null; srRefresh(); }
    else if (id === 'nt-name') nd.name = e.target.value; else if (id === 'nt-co') nd.company = e.target.value; else if (id === 'nt-note') nd.note = e.target.value;
    else if (id === 'cl-motive' || id === 'cl-exp1' || id === 'cl-exp2') { prof()[id.slice(3)] = e.target.value; S._u = Date.now(); rawSave(); CLOUD.touch(); letterLive(); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') srClose();
    if (e.key !== 'Enter') return;
    if (e.target.id === 'mmin') { e.preventDefault(); mmSubmit(); } else if (e.target.id === 'cain') { e.preventDefault(); caseCheck(); }
  });
  // после перерисовки возвращаем курсор в поле ответа
  const refocus = () => { const el = document.getElementById('mmin') || document.getElementById('cain'); if (el && !el.disabled && document.activeElement !== el) el.focus(); };
  new MutationObserver(() => { try { if (sess && (sess.type === 'mm' || sess.type === 'case')) refocus(); } catch (e) {} }).observe(document.body, { childList: true, subtree: true });   // sess ещё может быть недоступна, пока не загрузился app.js

  return { act, stop, badge, dealsCard, dealsLoad, pushCard, quickCard, quickFinish, mmHtml, caseHtml, netHtml, netCard, netProgress, learnCards, analyticsHtml, letterBtn, letterHtml };
})();

// строки интерфейса этого модуля: русский оригинал → en, de, az
I18N.add([
  ['«Авто» следует за темой iPhone.', 'Auto follows the iPhone theme.', 'Auto folgt dem iPhone-Design.', '«Avto» iPhone mövzusunu izləyir.'],
  ['Заявок осталось: {0}.', 'Applications left: {0}.', 'Offene Bewerbungen: {0}.', 'Qalan müraciət: {0}.'],
  ['Шагов обучения: {0}. Заявок осталось: {1}.', 'Learning steps left: {0}. Applications left: {1}.', 'Offene Lernschritte: {0}. Offene Bewerbungen: {1}.', 'Qalan təlim addımları: {0}. Qalan müraciət: {1}.'],
  ['CFA Level 1', 'CFA Level 1', 'CFA Level 1', 'CFA Level 1'],
  ['Отдельная ветка на английском, как на экзамене: 6 уроков, 36 задач, 10 карточек.', 'A separate track in English, as on the exam: 6 lessons, 36 exercises, 10 cards.', 'Ein eigener Strang auf Englisch wie in der Prüfung: 6 Lektionen, 36 Aufgaben, 10 Karten.', 'İmtahandakı kimi ingilis dilində ayrıca xətt: 6 dərs, 36 tapşırıq, 10 kart.'],
  ['Задачи CFA', 'CFA exercises', 'CFA-Aufgaben', 'CFA tapşırıqları'],
  ['✓ В ежедневном плане', '✓ In the daily plan', '✓ Im Tagesplan', '✓ Gündəlik plandadır'],
  ['В ежедневный план', 'Add to the daily plan', 'In den Tagesplan aufnehmen', 'Gündəlik plana əlavə et'],
  ['Сделки недели', 'Deals of the week', 'Deals der Woche', 'Həftənin sövdələşmələri'],
  ['Как оценить?', 'How to value it?', 'Wie bewertet man das?', 'Necə qiymətləndirmək olar?'],
  ['Скрыть разбор', 'Hide the analysis', 'Analyse ausblenden', 'Təhlili gizlət'],
  ['Источник ↗', 'Source ↗', 'Quelle ↗', 'Mənbə ↗'],
  ['Уведомления доступны, когда приложение открыто с экрана «Домой» (iOS 16.4 и новее)', 'Notifications work when the app is opened from the Home Screen (iOS 16.4 or newer)', 'Benachrichtigungen funktionieren, wenn die App vom Home-Bildschirm geöffnet wird (iOS 16.4 oder neuer)', 'Bildirişlər tətbiq «Ev» ekranından açıldıqda işləyir (iOS 16.4 və yuxarı)'],
  ['Разрешение не выдано', 'Permission not granted', 'Berechtigung nicht erteilt', 'İcazə verilmədi'],
  ['Уведомления включены', 'Notifications turned on', 'Benachrichtigungen aktiviert', 'Bildirişlər aktiv edildi'],
  ['Уведомления выключены', 'Notifications turned off', 'Benachrichtigungen deaktiviert', 'Bildirişlər söndürüldü'],
  ['Не удалось включить уведомления', 'Could not turn on notifications', 'Benachrichtigungen konnten nicht aktiviert werden', 'Bildirişləri aktiv etmək alınmadı'],
  ['Уведомления', 'Notifications', 'Benachrichtigungen', 'Bildirişlər'],
  ['Напоминание в {0} о плане дня и заявках, а утром о follow-up и контактах. Число дел показывается значком на иконке.', 'A reminder at {0} about the daily plan and applications, and in the morning about follow-ups and contacts. The number of open tasks shows as a badge on the icon.', 'Eine Erinnerung um {0} an Tagesplan und Bewerbungen, morgens an Nachfragen und Kontakte. Die Zahl offener Aufgaben erscheint als Badge am Symbol.', 'Saat {0}-da gün planı və müraciətlər, səhər isə follow-up və əlaqələr barədə xatırlatma. Açıq işlərin sayı ikonada nişan kimi görünür.'],
  ['Включены на этом устройстве', 'Turned on for this device', 'Auf diesem Gerät aktiviert', 'Bu cihazda aktivdir'],
  ['Выключить', 'Turn off', 'Ausschalten', 'Söndür'],
  ['Доступ запрещён в настройках iPhone. Включи его для Mandate в Настройки → Уведомления.', 'Access is blocked in iPhone settings. Allow it for Mandate under Settings → Notifications.', 'Der Zugriff ist in den iPhone-Einstellungen gesperrt. Erlaube ihn für Mandate unter Einstellungen → Mitteilungen.', 'İcazə iPhone ayarlarında bloklanıb. Ayarlar → Bildirişlər bölməsində Mandate üçün aç.'],
  ['Включить уведомления', 'Turn on notifications', 'Benachrichtigungen aktivieren', 'Bildirişləri aktiv et'],
  ['Уведомления отправляет твой компьютер по расписанию, поэтому он должен быть включён. Работает только в приложении, добавленном на экран «Домой».', 'Notifications are sent by your computer on a schedule, so it must be on. They only work in the app added to the Home Screen.', 'Die Benachrichtigungen sendet dein Computer nach Zeitplan, er muss also eingeschaltet sein. Sie funktionieren nur in der App auf dem Home-Bildschirm.', 'Bildirişləri kompüterin cədvəl üzrə göndərir, ona görə o açıq olmalıdır. Yalnız «Ev» ekranına əlavə olunmuş tətbiqdə işləyir.'],
  ['Ищи термины, уроки, главы, задачи, вакансии и свои книги', 'Search terms, lessons, chapters, exercises, jobs and your books', 'Suche nach Begriffen, Lektionen, Kapiteln, Aufgaben, Stellen und deinen Büchern', 'Terminləri, dərsləri, fəsilləri, tapşırıqları, vakansiyaları və kitablarınızı axtarın'],
  ['Ничего не найдено', 'Nothing found', 'Nichts gefunden', 'Heç nə tapılmadı'],
  ['Поиск по всему приложению', 'Search the whole app', 'Die ganze App durchsuchen', 'Bütün tətbiqdə axtarış'],
  ['Поиск', 'Search', 'Suche', 'Axtarış'],
  ['Закрыть', 'Close', 'Schließen', 'Bağla'],
  ['Термин', 'Term', 'Begriff', 'Termin'], ['Урок', 'Lesson', 'Lektion', 'Dərs'], ['Глава', 'Chapter', 'Kapitel', 'Fəsil'], ['Моя книга', 'My book', 'Mein Buch', 'Mənim kitabım'], ['Задача', 'Exercise', 'Aufgabe', 'Tapşırıq'], ['Карточка', 'Card', 'Karte', 'Kart'], ['Вакансия', 'Job', 'Stelle', 'Vakansiya'],
  ['⚡ Режим «5 минут»', '⚡ “5 minutes” mode', '⚡ Modus „5 Minuten“', '⚡ «5 dəqiqə» rejimi'],
  ['Нет времени на весь план? Ответь на 5 вопросов, и день засчитается (половина XP), серия не прервётся.', 'No time for the whole plan? Answer 5 questions and the day counts (half XP), your streak stays alive.', 'Keine Zeit für den ganzen Plan? Beantworte 5 Fragen, der Tag zählt (halbe XP) und deine Serie bleibt erhalten.', 'Bütün plana vaxt yoxdur? 5 suala cavab ver, gün sayılır (yarım XP), seriya kəsilmir.'],
  ['Начать', 'Start', 'Starten', 'Başla'],
  ['Быстрый режим', 'Quick mode', 'Schnellmodus', 'Sürətli rejim'],
  ['⚡ Ментальная математика', '⚡ Mental maths', '⚡ Kopfrechnen', '⚡ Zehni hesablama'],
  ['20 расчётов за 4 минуты, как на онлайн-тестах банков', '20 calculations in 4 minutes, like the banks\' online tests', '20 Rechnungen in 4 Minuten, wie bei den Online-Tests der Banken', '4 dəqiqəyə 20 hesablama, bankların onlayn testləri kimi'],
  ['Рекорд: {0} из {1}, {2} с на ответ · забегов: {3}', 'Best: {0} of {1}, {2} s per answer · runs: {3}', 'Rekord: {0} von {1}, {2} s pro Antwort · Durchläufe: {3}', 'Rekord: {0} / {1}, cavab başına {2} san · cəhd: {3}'],
  ['Начать серию', 'Start a run', 'Durchlauf starten', 'Seriyanı başla'],
  ['Ментальная математика', 'Mental maths', 'Kopfrechnen', 'Zehni hesablama'],
  ['Вопрос {0} из {1}', 'Question {0} of {1}', 'Frage {0} von {1}', 'Sual {0} / {1}'],
  ['Ответ', 'Answer', 'Antwort', 'Cavab'], ['Ответить', 'Submit', 'Antworten', 'Cavab ver'],
  ['Верно: {0}', 'Correct: {0}', 'Richtig: {0}', 'Düzgün: {0}'],
  ['{0} из {1}', '{0} of {1}', '{0} von {1}', '{0} / {1}'],
  ['Среднее время на ответ: {0} с', 'Average time per answer: {0} s', 'Durchschnittliche Zeit pro Antwort: {0} s', 'Cavab başına orta vaxt: {0} san'],
  ['Новый рекорд', 'New record', 'Neuer Rekord', 'Yeni rekord'],
  ['Ошибки', 'Mistakes', 'Fehler', 'Səhvlər'],
  ['Твой ответ: {0} · Верно:', 'Your answer: {0} · Correct:', 'Deine Antwort: {0} · Richtig:', 'Sənin cavabın: {0} · Düzgün:'],
  ['Ещё раз', 'Again', 'Nochmal', 'Yenidən'], ['Готово', 'Done', 'Fertig', 'Hazır'],
  ['Сколько будет {0}% от {1}?', 'What is {0}% of {1}?', 'Wie viel sind {0} % von {1}?', '{1}-in {0}%-i nə qədərdir?'],
  ['EBITDA {0}, множитель {1}x. Чему равен EV?', 'EBITDA {0}, multiple {1}x. What is EV?', 'EBITDA {0}, Multiple {1}x. Wie hoch ist der EV?', 'EBITDA {0}, mültiplikator {1}x. EV nəyə bərabərdir?'],
  ['Выручка выросла со {0} до {1}. Рост в процентах?', 'Revenue grew from {0} to {1}. Growth in percent?', 'Der Umsatz wuchs von {0} auf {1}. Wachstum in Prozent?', 'Gəlir {0}-dan {1}-ə artdı. Artım faizlə?'],
  ['Выручка {0}, EBITDA {1}. Маржа EBITDA в процентах?', 'Revenue {0}, EBITDA {1}. EBITDA margin in percent?', 'Umsatz {0}, EBITDA {1}. EBITDA-Marge in Prozent?', 'Gəlir {0}, EBITDA {1}. EBITDA marjası faizlə?'],
  ['EPS {0}, P/E {1}x. Чему равна цена акции?', 'EPS {0}, P/E {1}x. What is the share price?', 'EPS {0}, P/E {1}x. Wie hoch ist der Aktienkurs?', 'EPS {0}, P/E {1}x. Səhmin qiyməti nəyə bərabərdir?'],
  ['Equity Value {0}, Debt {1}, Cash {2}. Чему равен EV?', 'Equity Value {0}, Debt {1}, Cash {2}. What is EV?', 'Equity Value {0}, Debt {1}, Cash {2}. Wie hoch ist der EV?', 'Equity Value {0}, Debt {1}, Cash {2}. EV nəyə bərabərdir?'],
  ['Через год получишь {0}, ставка {1}%. Чему равна приведённая стоимость?', 'You receive {0} in a year, rate {1}%. What is the present value?', 'In einem Jahr erhältst du {0}, Zins {1} %. Wie hoch ist der Barwert?', 'Bir ildən sonra {0} alacaqsan, dərəcə {1}%. Cari dəyər nəyə bərabərdir?'],
  ['Деньги удваиваются за {0} лет. Какая примерно ставка в % (правило 72)?', 'Money doubles in {0} years. What is the approximate rate in % (rule of 72)?', 'Das Geld verdoppelt sich in {0} Jahren. Wie hoch ist der ungefähre Zins in % (Rule of 72)?', 'Pul {0} ilə ikiqat artır. Təxmini dərəcə neçə %-dir (72 qaydası)?'],
  ['Сколько будет {0} ÷ {1}?', 'What is {0} ÷ {1}?', 'Wie viel ist {0} ÷ {1}?', '{0} ÷ {1} nə qədərdir?'],
  ['Сколько будет {0} × {1}?', 'What is {0} × {1}?', 'Wie viel ist {0} × {1}?', '{0} × {1} nə qədərdir?'],
  ['MOIC {0}x за 5 лет. Какой примерно IRR в процентах?', 'MOIC {0}x over 5 years. What is the approximate IRR in percent?', 'MOIC {0}x in 5 Jahren. Wie hoch ist der ungefähre IRR in Prozent?', '5 ildə MOIC {0}x. Təxmini IRR neçə faizdir?'],
  ['Выручка {0}, маржа {1}%. Чему равна прибыль?', 'Revenue {0}, margin {1}%. What is the profit?', 'Umsatz {0}, Marge {1} %. Wie hoch ist der Gewinn?', 'Gəlir {0}, marja {1}%. Mənfəət nəyə bərabərdir?'],
  ['Мини-кейс', 'Mini case', 'Mini-Case', 'Mini-keys'], ['Мини-кейсы', 'Mini cases', 'Mini-Cases', 'Mini-keyslər'],
  ['Шаг {0} из {1}', 'Step {0} of {1}', 'Schritt {0} von {1}', 'Addım {0} / {1}'],
  ['Проверить', 'Check', 'Prüfen', 'Yoxla'], ['Дальше', 'Next', 'Weiter', 'Növbəti'],
  ['Кейс пройден', 'Case completed', 'Case abgeschlossen', 'Keys tamamlandı'],
  ['Верно: {0} из {1}', 'Correct: {0} of {1}', 'Richtig: {0} von {1}', 'Düzgün: {0} / {1}'],
  ['+XP за первое прохождение', '+XP for the first completion', '+XP für das erste Bestehen', 'İlk keçid üçün +XP'],
  ['Завершить', 'Finish', 'Beenden', 'Bitir'],
  ['{0} шага', '{0} steps', '{0} Schritte', '{0} addım'],
  ['{0} шага · лучший результат {1} из {2}', '{0} steps · best result {1} of {2}', '{0} Schritte · bestes Ergebnis {1} von {2}', '{0} addım · ən yaxşı nəticə {1} / {2}'],
  ['Аналитика откликов', 'Application analytics', 'Bewerbungsanalyse', 'Müraciət analitikası'],
  ['Подано всего', 'Applied in total', 'Bewerbungen gesamt', 'Cəmi göndərilib'], ['Ответов', 'Responses', 'Antworten', 'Cavablar'], ['Приглашений', 'Invitations', 'Einladungen', 'Dəvətlər'], ['Ответ приходит через', 'Reply arrives after', 'Antwort kommt nach', 'Cavab bu müddətdən sonra gəlir'],
  ['{0} дн.', '{0} d', '{0} T.', '{0} gün'],
  ['Мало данных. Подай ещё {0} заявок, и появятся выводы.', 'Not enough data. Submit {0} more applications to get insights.', 'Zu wenig Daten. Sende noch {0} Bewerbungen, dann gibt es Erkenntnisse.', 'Məlumat azdır. Nəticələr üçün daha {0} müraciət göndər.'],
  ['Лучше всего работает:', 'Works best:', 'Funktioniert am besten:', 'Ən yaxşı işləyir:'],
  ['(приглашений {0} из {1}).', '({0} of {1} led to invitations).', '({0} von {1} Einladungen).', '({1}-dən {0} dəvət).'],
  ['Пока нет приглашений для выводов. Продолжай подавать.', 'No invitations yet to draw conclusions from. Keep applying.', 'Noch keine Einladungen für Schlüsse. Bewirb dich weiter.', 'Nəticə üçün hələ dəvət yoxdur. Müraciət etməyə davam et.'],
  ['Категории', 'Categories', 'Kategorien', 'Kateqoriyalar'], ['Города', 'Cities', 'Städte', 'Şəhərlər'], ['Источники', 'Sources', 'Quellen', 'Mənbələr'], ['День подачи', 'Day of application', 'Tag der Bewerbung', 'Müraciət günü'],
  ['{0} подано · {1} приглаш. · {2} ответов', '{0} applied · {1} invited · {2} replies', '{0} beworben · {1} eingeladen · {2} Antworten', '{0} göndərilib · {1} dəvət · {2} cavab'],
  ['✉️ Сопроводительное письмо', '✉️ Cover letter', '✉️ Anschreiben', '✉️ Müşayiət məktubu'],
  ['Письмо для {0}', 'Letter for {0}', 'Anschreiben für {0}', '{0} üçün məktub'],
  ['Твои данные для писем (сохраняются и подставляются во все письма)', 'Your details for letters (saved and used in every letter)', 'Deine Angaben für Anschreiben (werden gespeichert und in alle Briefe eingesetzt)', 'Məktublar üçün məlumatların (saxlanılır və bütün məktublara əlavə olunur)'],
  ['Почему эта фирма и эта роль', 'Why this firm and this role', 'Warum dieses Unternehmen und diese Stelle', 'Niyə bu firma və bu rol'],
  ['Главный релевантный опыт, с цифрой', 'Your main relevant experience, with a number', 'Wichtigste relevante Erfahrung, mit Zahl', 'Əsas uyğun təcrübə, rəqəmlə'],
  ['Второй навык или результат под эту роль', 'A second skill or result for this role', 'Eine zweite Fähigkeit oder ein Ergebnis für diese Stelle', 'Bu rol üçün ikinci bacarıq və ya nəticə'],
  ['Скопировать', 'Copy', 'Kopieren', 'Kopyala'], ['В почту', 'To mail', 'In Mail', 'Poçta'],
  ['Письмо от тренера', 'Letter from the coach', 'Brief vom Coach', 'Məşqçidən məktub'],
  ['Скопировать письмо тренера', 'Copy the coach\'s letter', 'Brief des Coachs kopieren', 'Məşqçinin məktubunu kopyala'],
  ['Персональное письмо: {0}', 'Personal letter: {0}', 'Persönliches Anschreiben: {0}', 'Şəxsi məktub: {0}'],
  ['Попросить тренера написать персональное', 'Ask the coach to write a personal one', 'Coach um ein persönliches bitten', 'Məşqçidən şəxsi məktub yazmağı xahiş et'],
  ['Проверь текст и адресата перед отправкой.', 'Check the text and the recipient before sending.', 'Prüfe Text und Empfänger vor dem Senden.', 'Göndərməzdən əvvəl mətni və ünvanı yoxla.'],
  ['Сопроводительное письмо', 'Cover letter', 'Anschreiben', 'Müşayiət məktubu'],
  ['Скопировано', 'Copied', 'Kopiert', 'Kopyalandı'],
  ['Выдели текст и скопируй вручную', 'Select the text and copy it manually', 'Markiere den Text und kopiere ihn manuell', 'Mətni seç və əl ilə kopyala'],
  ['Запрос добавлен. Отправь его тренеру во вкладке «Прогресс»', 'Request added. Send it to the coach under “Progress”', 'Anfrage hinzugefügt. Sende sie unter „Fortschritt“ an den Coach', 'Sorğu əlavə edildi. Onu «Nəticələr» bölməsində məşqçiyə göndər'],
  ['Нетворкинг', 'Networking', 'Networking', 'Networking'],
  ['Пора написать: {0}', 'Time to write: {0}', 'Zeit zu schreiben: {0}', 'Yazmağın vaxtı: {0}'],
  ['Контакты в IB и Big4', 'Contacts in IB and Big4', 'Kontakte in IB und Big4', 'IB və Big4-də əlaqələr'],
  ['{0} контактов · ждут сообщения: {1}', '{0} contacts · waiting for a message: {1}', '{0} Kontakte · warten auf eine Nachricht: {1}', '{0} əlaqə · mesaj gözləyir: {1}'],
  ['Добавь первых людей, с кем хочешь поговорить', 'Add the first people you want to talk to', 'Füge die ersten Personen hinzu, mit denen du sprechen möchtest', 'Danışmaq istədiyin ilk insanları əlavə et'],
  ['Контакты', 'Contacts', 'Kontakte', 'Əlaqələr'],
  ['Напомню написать, если прошло больше 14 дней', 'I will remind you to write if more than 14 days have passed', 'Ich erinnere dich ans Schreiben, wenn mehr als 14 Tage vergangen sind', '14 gündən çox keçsə yazmağı xatırladacağam'],
  ['Добавить контакт', 'Add a contact', 'Kontakt hinzufügen', 'Əlaqə əlavə et'],
  ['Имя и фамилия', 'First and last name', 'Vor- und Nachname', 'Ad və soyad'], ['Компания и роль', 'Company and role', 'Unternehmen und Rolle', 'Şirkət və vəzifə'],
  ['Заметка (о чём говорили, ссылка)', 'Note (what you discussed, link)', 'Notiz (worüber ihr gesprochen habt, Link)', 'Qeyd (nə danışdınız, keçid)'],
  ['Событие', 'Event', 'Veranstaltung', 'Tədbir'], ['Знакомый', 'Acquaintance', 'Bekannte/r', 'Tanış'],
  ['Добавить', 'Add', 'Hinzufügen', 'Əlavə et'],
  ['Ещё не писал(а)', 'Not messaged yet', 'Noch nicht geschrieben', 'Hələ yazılmayıb'], ['Писал(а) сегодня', 'Messaged today', 'Heute geschrieben', 'Bu gün yazılıb'],
  ['Писал(а) {0} назад', 'Messaged {0} ago', 'Vor {0} geschrieben', '{0} əvvəl yazılıb'],
  ['Писал(а) {0} назад · пора написать', 'Messaged {0} ago · time to write', 'Vor {0} geschrieben · Zeit zu schreiben', '{0} əvvəl yazılıb · yazmağın vaxtı'],
  ['Написал(а)', 'Messaged', 'Geschrieben', 'Yazdım'], ['Шаблон', 'Template', 'Vorlage', 'Şablon'],
  ['Знакомство', 'Introduction', 'Kennenlernen', 'Tanışlıq'], ['Спасибо за беседу', 'Thanks for the chat', 'Danke für das Gespräch', 'Söhbət üçün təşəkkür'], ['Напомнить о себе', 'Reconnect', 'Sich in Erinnerung rufen', 'Özünü xatırlat'],
  ['Пока пусто. Добавь людей из IB, Big4 TS и M&A, с кем хочешь поговорить. Я напомню, когда пора написать снова.', 'Nothing yet. Add people from IB, Big4 TS and M&A you want to talk to. I will remind you when it is time to write again.', 'Noch leer. Füge Personen aus IB, Big4 TS und M&A hinzu, mit denen du sprechen möchtest. Ich erinnere dich, wann es Zeit ist, wieder zu schreiben.', 'Hələ boşdur. IB, Big4 TS və M&A-dan danışmaq istədiyin insanları əlavə et. Yenidən yazmağın vaxtı çatanda xatırladacağam.'],
  ['Укажи имя', 'Enter a name', 'Gib einen Namen ein', 'Ad daxil et'],
  ['Отмечено. Напомню через 14 дней', 'Noted. I will remind you in 14 days', 'Vermerkt. Ich erinnere dich in 14 Tagen', 'Qeyd edildi. 14 gün sonra xatırladacağam'],
  ['Мини-кейс', 'Mini case', 'Mini-Case', 'Mini-keys'],
]);
