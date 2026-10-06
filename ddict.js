'use strict';
// Режим «Немецкий»: диктант (слушай и печатай) и произношение (скажи вслух, распознавание речи сверяет).
// Подключается после dlearn.js; к S, DW, sess, go, render, esc, toast, save, addXp, dkey, T обращается только при вызове.
window.DD = (() => {
  const dl = () => S.dl || (S.dl = { w: {}, my: [], days: {} });
  const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const say = (t, rate) => { try { const u = new SpeechSynthesisUtterance(t); u.lang = 'de-DE'; u.rate = rate || 0.9; const v = speechSynthesis.getVoices().find(x => /^de/i.test(x.lang)); if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) { toast('Озвучка недоступна на этом устройстве'); } };
  const norm = s => s.toLowerCase().replace(/[.,!?;:«»„“”"()]/g, ' ').replace(/\s+/g, ' ').trim();
  const day = () => { dl().days[dkey()] = (dl().days[dkey()] || 0) + 1; };
  const head = t => `<div class="row sp"><button class="pill" data-act="ddexit">✕</button><span class="small mute">${t}</span></div>`;

  // ---------- диктант ----------
  const sentences = () => DW.filter(w => w.ex && w.ex.length >= 20 && w.ex.length <= 95).map(w => ({ id: w.i, text: w.ex }));
  function startDict() {
    const q = sh(sentences()).slice(0, 8); if (!q.length) return toast('Нет предложений для диктанта');
    sess = { type: 'dd', mode: 'dict', q, i: 0, res: null, ok: 0, val: '' }; render(); say(q[0].text);
  }
  // сравнение по словам (наибольшая общая подпоследовательность): что совпало, что пропущено, что лишнее
  function diff(target, typed) {
    const a = norm(target).split(' '), b = norm(typed).split(' ').filter(Boolean), dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Set(), extra = []; let i = 0, j = 0;
    while (i < a.length && j < b.length) { if (a[i] === b[j]) { hit.add(i); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else { extra.push(b[j]); j++; } }
    while (j < b.length) extra.push(b[j++]);
    return { a, hit, extra, score: a.length ? hit.size / a.length : 0 };
  }
  function check() {
    const s = sess, q = s.q[s.i], r = diff(q.text, s.val || ''); s.res = r; if (r.score >= 0.9) { s.ok++; addXp(2); }
    day(); T.track('dd_dict', { ok: r.score >= 0.9, score: Math.round(r.score * 100) }); save(); render();
  }
  function dictHtml() {
    const s = sess;
    if (s.i >= s.q.length) return head('Диктант') + `<div class="card" style="text-align:center"><h2>${s.ok} из ${s.q.length}</h2><p class="sub">Верно, если совпало не меньше 90% слов.</p></div><button class="btn" data-act="ddexit">Готово</button>`;
    const q = s.q[s.i], r = s.res;
    return head(`Предложение ${s.i + 1} из ${s.q.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.q.length * 100}%"></i></div>
    <div class="card"><div class="tag">Диктант</div><p class="small mute" style="margin:6px 0 10px">Послушай и напечатай предложение.</p>
    <div class="grid2"><button class="btn" style="margin:0" data-act="ddsay">🔊 Слушать</button><button class="btn ghost" style="margin:0" data-act="ddslow">🐢 Медленнее</button></div>
    <textarea id="ddin" rows="3" style="margin-top:12px" placeholder="Что ты услышал(а)?" autocapitalize="off" autocorrect="off" spellcheck="false" ${r ? 'disabled' : ''}>${esc(s.val || '')}</textarea>
    ${r ? `<div class="explain" translate="no"><div>${r.a.map((w, k) => `<span style="${r.hit.has(k) ? 'color:var(--green)' : 'color:var(--red);text-decoration:underline'}">${esc(w)}</span>`).join(' ')}</div>${r.extra.length ? `<div class="small mute" style="margin-top:6px">Лишнее: ${esc(r.extra.join(' '))}</div>` : ''}<div class="small" style="margin-top:6px"><b>${Math.round(r.score * 100)}%</b> слов совпало</div></div>` : ''}</div>
    ${r ? '<button class="btn" data-act="ddnext">Дальше</button>' : '<button class="btn" data-act="ddcheck">Проверить</button>'}`;
  }

  // ---------- произношение ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  const clean = de => de.replace(/\s*\([^)]*\)/g, '').replace(/^(der|die|das)\s/, '').trim();
  const near = (x, y) => { if (x === y) return true; if (x.length < 5 || Math.abs(x.length - y.length) > 1) return false; let d = 0, i = 0, j = 0; while (i < x.length && j < y.length) { if (x[i] === y[j]) { i++; j++; } else { d++; if (d > 1) return false; if (x.length > y.length) i++; else if (y.length > x.length) j++; else { i++; j++; } } } return d + (x.length - i) + (y.length - j) <= 1; };
  function startPron() {
    const pool = DW.filter(w => { const c = clean(w.de); return c.length >= 3 && c.length <= 24 && c.split(' ').length <= 3; }), q = sh(pool).slice(0, 8).map(w => ({ id: w.i, de: w.de, ru: w.ru, t: clean(w.de) }));
    sess = { type: 'dd', mode: 'pron', q, i: 0, res: null, ok: 0 }; render();
  }
  function mic() {
    const s = sess, q = s.q[s.i]; if (rec) { try { rec.stop(); } catch (e) {} rec = null; return; }
    if (!SR) { s.res = { none: true }; return render(); }
    const r = new SR(); r.lang = 'de-DE'; r.interimResults = false; r.maxAlternatives = 3; rec = r;
    r.onresult = e => { const alts = Array.from(e.results[0]).map(x => x.transcript.trim()); const ok = alts.some(a => norm(a).split(' ').some(w => near(w, norm(q.t))) || near(norm(a), norm(q.t))); finish({ heard: alts[0], ok }); };
    r.onerror = () => { rec = null; finish({ err: true }); };
    r.onend = () => { rec = null; const b = document.querySelector('[data-act=dpmic]'); if (b) b.classList.remove('on'); };
    try { r.start(); const b = document.querySelector('[data-act=dpmic]'); if (b) b.classList.add('on'); } catch (e) { rec = null; finish({ err: true }); }
  }
  function finish(res) { const s = sess; if (!s || s.mode !== 'pron' || s.res) return; s.res = res; if (res.ok) { s.ok++; addXp(1); } day(); save(); render(); }
  function pronHtml() {
    const s = sess;
    if (s.i >= s.q.length) return head('Произношение') + `<div class="card" style="text-align:center"><h2>${s.ok} из ${s.q.length}</h2><p class="sub">Слова, которые не получились, вернутся в следующий раз.</p></div><button class="btn" data-act="ddexit">Готово</button>`;
    const q = s.q[s.i], r = s.res;
    return head(`Слово ${s.i + 1} из ${s.q.length}`) + `<div class="bar" style="margin-top:14px"><i style="width:${s.i / s.q.length * 100}%"></i></div>
    <div class="card" style="text-align:center"><div class="tag">Произношение</div><div style="font-size:28px;font-weight:700;margin:10px 0 4px" translate="no">${esc(q.de)}</div><div class="small mute">${esc(q.ru)}</div>
    <div class="grid2" style="margin-top:14px"><button class="btn ghost" style="margin:0" data-act="dpsay">🔊 Слушать</button><button class="btn ghost" style="margin:0" data-act="dpmic">🎤 Сказать</button></div>
    ${r ? (r.none ? `<p class="small mute" style="margin:12px 0 0;line-height:1.5">Распознавание речи недоступно в этом режиме. Послушай слово, повтори вслух и оцени себя сам.</p>` : r.err ? `<p class="small mute" style="margin:12px 0 0;line-height:1.5">Не удалось распознать. Разреши микрофон или оцени себя сам.</p>` : `<p style="margin:12px 0 0" class="${r.ok ? '' : ''}"><b style="color:${r.ok ? 'var(--green)' : 'var(--red)'}">${r.ok ? 'Получилось' : 'Услышано иначе'}</b><br><span class="small mute">Услышал: <span translate="no">${esc(r.heard || '—')}</span></span></p>`) : ''}</div>
    ${r ? (r.ok ? '<button class="btn" data-act="dpnext">Дальше</button>' : '<div class="grid2"><button class="btn ghost" data-act="dpself">Засчитать</button><button class="btn" data-act="dpnext">Дальше</button></div>') : '<p class="small mute" style="text-align:center">Нажми «Сказать» и произнеси слово.</p>'}`;
  }

  document.addEventListener('input', e => { if (e.target.id === 'ddin' && sess && sess.mode === 'dict') sess.val = e.target.value; });
  const html = () => sess.mode === 'dict' ? dictHtml() : pronHtml();
  function act(a) {
    switch (a) {
      case 'ddstart': startDict(); return true;
      case 'dpstart': startPron(); return true;
      case 'ddsay': say(sess.q[sess.i].text); return true;
      case 'ddslow': say(sess.q[sess.i].text, 0.6); return true;
      case 'ddcheck': check(); return true;
      case 'ddnext': sess.i++; sess.res = null; sess.val = ''; render(); if (sess.q[sess.i]) say(sess.q[sess.i].text); return true;
      case 'dpsay': say(sess.q[sess.i].t); return true;
      case 'dpmic': mic(); return true;
      case 'dpself': { const s = sess; if (s.res && !s.res.ok) { s.res = { ...s.res, ok: true, self: true }; s.ok++; addXp(1); save(); render(); } return true; }
      case 'dpnext': sess.i++; sess.res = null; render(); return true;
      case 'ddexit': if (rec) { try { rec.stop(); } catch (e) {} rec = null; } go('words'); return true;
    }
    return false;
  }
  return { act, html };
})();
